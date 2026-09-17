import {
    NeuronDef,
    SynapseDef,
    NeuronDynamicState,
    SpikeRecord,
    NeuromodulatorState,
    Neurotransmitter
} from "./types";

interface ScheduledCurrent {
    targetNeuronId: string;
    weight: number;
    transmitter: Neurotransmitter;
    deliveryTimeMs: number;
}

export class LifEngine {
    private neurons: Map<string, NeuronDef>;
    private states: Map<string, NeuronDynamicState>;
    private outgoingSynapses: Map<string, SynapseDef[]>;
    private scheduledCurrents: ScheduledCurrent[];
    private spikeHistory: SpikeRecord[];
    private currentTimeMs: number;
    private neuromodulators: NeuromodulatorState;

    private readonly eExcMv = 0.0;
    private readonly eInhMv = -75.0;
    private readonly tauExcMs = 5.0;
    private readonly tauInhMs = 8.0;

    constructor(neurons: NeuronDef[], synapses: SynapseDef[]) {
        this.neurons = new Map();
        this.states = new Map();
        this.outgoingSynapses = new Map();
        this.scheduledCurrents = [];
        this.spikeHistory = [];
        this.currentTimeMs = 0.0;
        this.neuromodulators = {
            dopamine: 1.0,
            octopamine: 1.0,
            serotonin: 1.0
        };

        for (const n of neurons) {
            this.neurons.set(n.id, n);
            this.states.set(n.id, {
                id: n.id,
                voltageMv: n.restingPotentialMv,
                lastSpikeTimeMs: -1000.0,
                isRefractory: false,
                conductanceExc: 0.0,
                conductanceInh: 0.0,
                spikeCount: 0,
                firingRateHz: 0.0
            });
            this.outgoingSynapses.set(n.id, []);
        }

        for (const s of synapses) {
            const list = this.outgoingSynapses.get(s.preId);
            if (list) {
                list.push(s);
            }
        }
    }

    public setNeuromodulators(state: Partial<NeuromodulatorState>): void {
        if (state.dopamine !== undefined) {
            this.neuromodulators.dopamine = Math.max(0.0, Math.min(3.0, state.dopamine));
        }
        if (state.octopamine !== undefined) {
            this.neuromodulators.octopamine = Math.max(0.0, Math.min(3.0, state.octopamine));
        }
        if (state.serotonin !== undefined) {
            this.neuromodulators.serotonin = Math.max(0.0, Math.min(3.0, state.serotonin));
        }
    }

    public getNeuromodulators(): NeuromodulatorState {
        return { ...this.neuromodulators };
    }

    public injectInputCurrent(neuronId: string, currentMv: number): void {
        const state = this.states.get(neuronId);
        if (!state || state.isRefractory) {
            return;
        }
        state.voltageMv += currentMv;
    }

    public step(dtMs: number): SpikeRecord[] {
        this.currentTimeMs += dtMs;
        const newSpikes: SpikeRecord[] = [];

        // Deliver scheduled synaptic inputs
        const remainingQueue: ScheduledCurrent[] = [];
        for (const item of this.scheduledCurrents) {
            if (item.deliveryTimeMs <= this.currentTimeMs) {
                const targetState = this.states.get(item.targetNeuronId);
                if (targetState) {
                    if (item.weight >= 0) {
                        targetState.conductanceExc += item.weight;
                    } else {
                        targetState.conductanceInh += Math.abs(item.weight);
                    }
                }
            } else {
                remainingQueue.push(item);
            }
        }
        this.scheduledCurrents = remainingQueue;

        // Update each neuron's membrane dynamics
        for (const [id, def] of this.neurons.entries()) {
            const state = this.states.get(id)!;

            // Check refractory period
            const timeSinceSpike = this.currentTimeMs - state.lastSpikeTimeMs;
            if (timeSinceSpike < def.refractoryPeriodMs) {
                state.isRefractory = true;
                state.voltageMv = def.resetPotentialMv;
                // Decay conductances even while refractory
                state.conductanceExc *= Math.exp(-dtMs / this.tauExcMs);
                state.conductanceInh *= Math.exp(-dtMs / this.tauInhMs);
                continue;
            } else {
                state.isRefractory = false;
            }

            // Neuromodulation modifiers
            let effectiveThreshold = def.thresholdPotentialMv;
            if (def.isSexuallyDimorphic && (id.startsWith("P1_") || id.startsWith("pIP10_"))) {
                // High dopamine lowers threshold (increases arousal)
                effectiveThreshold -= (this.neuromodulators.dopamine - 1.0) * 4.0;
            }

            // Serotonin increases general inhibitory stability
            const effectiveInhConductance = state.conductanceInh * this.neuromodulators.serotonin;

            // Synaptic currents
            const iSynExc = state.conductanceExc * (this.eExcMv - state.voltageMv);
            const iSynInh = effectiveInhConductance * (this.eInhMv - state.voltageMv);
            const iLeak = (def.restingPotentialMv - state.voltageMv);

            // dV/dt = (I_leak + I_syn_exc + I_syn_inh) / tau_m
            const dV = (iLeak + (iSynExc + iSynInh) * 0.2) * (dtMs / def.membraneTimeConstantMs);
            state.voltageMv += dV;

            // Conductance exponential decay
            state.conductanceExc *= Math.exp(-dtMs / this.tauExcMs);
            state.conductanceInh *= Math.exp(-dtMs / this.tauInhMs);

            // Action potential generation
            if (state.voltageMv >= effectiveThreshold) {
                state.voltageMv = 20.0; // Spike peak
                state.lastSpikeTimeMs = this.currentTimeMs;
                state.isRefractory = true;
                state.spikeCount += 1;

                const spike: SpikeRecord = {
                    neuronId: id,
                    timestampMs: this.currentTimeMs
                };
                newSpikes.push(spike);
                this.spikeHistory.push(spike);

                // Schedule post-synaptic activations
                const syns = this.outgoingSynapses.get(id) || [];
                for (const syn of syns) {
                    this.scheduledCurrents.push({
                        targetNeuronId: syn.postId,
                        weight: syn.weight,
                        transmitter: syn.transmitter,
                        deliveryTimeMs: this.currentTimeMs + syn.conductionDelayMs
                    });
                }
            }
        }

        // Rolling spike history pruning (keep last 5 seconds)
        const windowThreshold = this.currentTimeMs - 5000.0;
        if (this.spikeHistory.length > 0 && this.spikeHistory[0].timestampMs < windowThreshold) {
            this.spikeHistory = this.spikeHistory.filter((s) => s.timestampMs >= windowThreshold);
        }

        // Update firing rate estimates (over past 500 ms)
        const recentWindow = this.currentTimeMs - 500.0;
        const recentSpikes = this.spikeHistory.filter((s) => s.timestampMs >= recentWindow);
        for (const state of this.states.values()) {
            const count = recentSpikes.filter((s) => s.neuronId === state.id).length;
            state.firingRateHz = (count / 0.5);
        }

        return newSpikes;
    }

    public getNeuronState(id: string): NeuronDynamicState | undefined {
        return this.states.get(id);
    }

    public getAllStates(): NeuronDynamicState[] {
        return Array.from(this.states.values());
    }

    public getSpikeHistory(): SpikeRecord[] {
        return this.spikeHistory;
    }

    public getCurrentTimeMs(): number {
        return this.currentTimeMs;
    }

    public reset(): void {
        this.currentTimeMs = 0.0;
        this.scheduledCurrents = [];
        this.spikeHistory = [];
        for (const [id, def] of this.neurons.entries()) {
            const state = this.states.get(id)!;
            state.voltageMv = def.restingPotentialMv;
            state.lastSpikeTimeMs = -1000.0;
            state.isRefractory = false;
            state.conductanceExc = 0.0;
            state.conductanceInh = 0.0;
            state.spikeCount = 0;
            state.firingRateHz = 0.0;
        }
    }
}
