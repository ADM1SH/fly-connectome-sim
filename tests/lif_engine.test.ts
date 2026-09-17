import { describe, it, expect, beforeEach } from "vitest";
import { LifEngine } from "../src/neural/lif_engine";
import { buildConnectome } from "../src/neural/connectome_graph";

describe("LifEngine Unit Tests", () => {
    let lif: LifEngine;

    beforeEach(() => {
        const { neurons, synapses } = buildConnectome();
        lif = new LifEngine(neurons, synapses);
    });

    it("initializes neurons at resting potential", () => {
        const p1State = lif.getNeuronState("P1_L");
        expect(p1State).toBeDefined();
        expect(p1State?.voltageMv).toBe(-65.0);
        expect(p1State?.isRefractory).toBe(false);
        expect(p1State?.spikeCount).toBe(0);
    });

    it("integrates sub-threshold current toward resting potential", () => {
        // Inject small sub-threshold current
        lif.injectInputCurrent("P1_L", 5.0);
        const stateBefore = lif.getNeuronState("P1_L")!;
        expect(stateBefore.voltageMv).toBe(-60.0);

        // Step simulation 20 ms without current: should decay back toward -65 mV
        lif.step(20.0);
        const stateAfter = lif.getNeuronState("P1_L")!;
        expect(stateAfter.voltageMv).toBeLessThan(-60.0);
        expect(stateAfter.voltageMv).toBeGreaterThanOrEqual(-65.0);
    });

    it("fires an action potential when crossing threshold", () => {
        // Inject suprathreshold current into LC10_L
        lif.injectInputCurrent("LC10_L", 30.0);
        const spikes = lif.step(1.0);

        const lc10Spikes = spikes.filter((s) => s.neuronId === "LC10_L");
        expect(lc10Spikes.length).toBe(1);

        const state = lif.getNeuronState("LC10_L")!;
        expect(state.isRefractory).toBe(true);
        expect(state.voltageMv).toBe(20.0); // Spike peak at moment of action potential

        // Following step enters refractory hyperpolarization
        lif.step(0.5);
        expect(state.voltageMv).toBe(-70.0); // Reset potential during refractory window
        expect(state.spikeCount).toBe(1);
    });

    it("clamps membrane potential during absolute refractory period", () => {
        lif.injectInputCurrent("LC10_L", 30.0);
        lif.step(1.0); // Spikes here

        // Attempt to inject more current during refractory window (refractory = 2.0 ms)
        lif.injectInputCurrent("LC10_L", 50.0);
        const spikesDuringRefractory = lif.step(0.5);

        expect(spikesDuringRefractory.filter((s) => s.neuronId === "LC10_L").length).toBe(0);
    });

    it("propagates synaptic transmission across connected nodes", () => {
        // LC4_L connects to GF_L with conduction delay 0.8 ms
        lif.injectInputCurrent("LC4_L", 30.0);
        lif.step(0.5); // Spikes LC4

        // Advance 1.0 ms: synaptic conductance should arrive at GF_L
        lif.step(1.0);
        const gfState = lif.getNeuronState("GF_L")!;
        expect(gfState.conductanceExc).toBeGreaterThan(0.0);
    });

    it("modulates P1 firing threshold based on dopamine concentration", () => {
        // High dopamine lowers threshold
        lif.setNeuromodulators({ dopamine: 2.5 });
        const mods = lif.getNeuromodulators();
        expect(mods.dopamine).toBe(2.5);

        // Inject moderate current into P1_L that would normally be sub-threshold
        lif.injectInputCurrent("P1_L", 15.0);
        const spikes = lif.step(1.0);

        // Should fire due to lowered threshold
        expect(spikes.some((s) => s.neuronId === "P1_L")).toBe(true);
    });

    it("retrieves all neuron dynamic states and current simulation time", () => {
        const allStates = lif.getAllStates();
        expect(allStates.length).toBe(23);

        lif.step(15.0);
        expect(lif.getCurrentTimeMs()).toBe(15.0);
    });

    it("maintains and prunes rolling spike history over time", () => {
        lif.injectInputCurrent("P1_L", 30.0);
        lif.step(1.0);

        const history = lif.getSpikeHistory();
        expect(history.length).toBeGreaterThan(0);
        expect(history[0].neuronId).toBe("P1_L");

        // Advance simulation beyond 5000 ms window
        for (let i = 0; i < 60; i++) {
            lif.step(100.0);
        }

        // The spike from t=1.0ms should have been pruned past 5000ms window
        const updatedHistory = lif.getSpikeHistory();
        expect(updatedHistory.some((s) => s.timestampMs < lif.getCurrentTimeMs() - 5000.0)).toBe(false);
    });

    it("resets all neural states and clock cleanly", () => {
        lif.injectInputCurrent("LC10_L", 30.0);
        lif.step(10.0);
        expect(lif.getCurrentTimeMs()).toBe(10.0);

        lif.reset();
        expect(lif.getCurrentTimeMs()).toBe(0.0);
        expect(lif.getSpikeHistory().length).toBe(0);

        const state = lif.getNeuronState("LC10_L")!;
        expect(state.voltageMv).toBe(-65.0);
        expect(state.spikeCount).toBe(0);
        expect(state.conductanceExc).toBe(0.0);
    });

    it("handles spiking of motor terminal neuron with no outgoing synapses", () => {
        (lif as any).outgoingSynapses.delete("MN_Proboscis");
        lif.injectInputCurrent("MN_Proboscis", 30.0);
        const spikes = lif.step(1.0);
        expect(spikes.some((s) => s.neuronId === "MN_Proboscis")).toBe(true);
    });
});
