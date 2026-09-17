export enum Neurotransmitter {
    ACETYLCHOLINE = "ACETYLCHOLINE",
    GABA = "GABA",
    GLUTAMATE = "GLUTAMATE",
    DOPAMINE = "DOPAMINE",
    OCTOPAMINE = "OCTOPAMINE",
    SEROTONIN = "SEROTONIN"
}

export enum NeuronCategory {
    SENSORY_VISUAL = "SENSORY_VISUAL",
    SENSORY_GUSTATORY = "SENSORY_GUSTATORY",
    INTERNEURON = "INTERNEURON",
    CENTRAL_COMMAND = "CENTRAL_COMMAND",
    DESCENDING_MOTOR = "DESCENDING_MOTOR"
}

export enum Hemisphere {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    CENTRAL = "CENTRAL"
}

export interface NeuronDef {
    id: string;
    label: string;
    category: NeuronCategory;
    hemisphere: Hemisphere;
    isSexuallyDimorphic: boolean;
    restingPotentialMv: number;
    thresholdPotentialMv: number;
    resetPotentialMv: number;
    membraneTimeConstantMs: number;
    refractoryPeriodMs: number;
    description: string;
}

export interface SynapseDef {
    preId: string;
    postId: string;
    weight: number;
    transmitter: Neurotransmitter;
    conductionDelayMs: number;
    synapseCount: number;
}

export interface NeuronDynamicState {
    id: string;
    voltageMv: number;
    lastSpikeTimeMs: number;
    isRefractory: boolean;
    conductanceExc: number;
    conductanceInh: number;
    spikeCount: number;
    firingRateHz: number;
}

export interface SpikeRecord {
    neuronId: string;
    timestampMs: number;
}

export interface NeuromodulatorState {
    dopamine: number;
    octopamine: number;
    serotonin: number;
}
