import { describe, it, expect, beforeEach } from "vitest";
import { LifEngine } from "../src/neural/lif_engine";
import { buildConnectome } from "../src/neural/connectome_graph";
import { ChemicalGrid, ChemicalChannel } from "../src/physics/chemistry";

describe("Behavioral Circuit Integration Tests", () => {
    let lif: LifEngine;

    beforeEach(() => {
        const { neurons, synapses } = buildConnectome();
        lif = new LifEngine(neurons, synapses);
    });

    it("triggers P1 courtship transactivation from female pheromone input", () => {
        // Stimulate female pheromone GRN repeatedly
        for (let t = 0; t < 10; t++) {
            lif.injectInputCurrent("GRN_Pheromone_Female", 20.0);
            lif.step(2.0);
        }

        const p1State = lif.getNeuronState("P1_L")!;
        // P1 should receive excitatory synaptic input from SEZ_PN_Phero
        expect(p1State.conductanceExc).toBeGreaterThan(0.0);
    });

    it("triggers pIP10 wing song motor output when P1 fires", () => {
        // Directly drive P1 hubs
        lif.injectInputCurrent("P1_L", 35.0);
        lif.injectInputCurrent("P1_R", 35.0);
        const spikes1 = lif.step(1.0);

        expect(spikes1.some((s) => s.neuronId === "P1_L" || s.neuronId === "P1_R")).toBe(true);

        // Advance 2 ms for synaptic delay to reach pIP10
        lif.step(2.0);
        const pip10State = lif.getNeuronState("pIP10_L")!;
        expect(pip10State.conductanceExc).toBeGreaterThan(0.0);
    });

    it("executes emergency escape override by clamping P1 through Giant Fiber", () => {
        // Step 1: Elevate P1 voltage near threshold
        lif.injectInputCurrent("P1_L", 18.0);
        lif.step(1.0);
        const p1Before = lif.getNeuronState("P1_L")!;
        const preGfVoltage = p1Before.voltageMv;
        expect(preGfVoltage).toBeGreaterThan(-60.0);

        // Step 2: Fire Giant Fiber (predator emergency)
        lif.injectInputCurrent("GF_L", 40.0);
        lif.step(0.5); // GF spikes

        // Step 3: Synaptic GABA inhibition arrives at P1
        lif.step(1.5);
        const p1After = lif.getNeuronState("P1_L")!;

        // P1 should receive strong inhibitory conductance
        expect(p1After.conductanceInh).toBeGreaterThan(1.0);
    });

    it("activates proboscis extension motor neuron from sweet gustatory input", () => {
        // Sustained train of sweet gustatory inputs representing tarsal contact with sugar
        for (let i = 0; i < 8; i++) {
            lif.injectInputCurrent("GRN_Sugar_L", 28.0);
            lif.injectInputCurrent("GRN_Sugar_R", 28.0);
            lif.step(1.5);
        }

        // SEZ_PN_Sweet must have received excitatory input
        const sezState = lif.getNeuronState("SEZ_PN_Sweet")!;
        expect(sezState.conductanceExc).toBeGreaterThan(0.0);

        // Advance to allow SEZ_PN_Sweet to transmit to MN_Proboscis
        lif.step(3.0);
        const mnState = lif.getNeuronState("MN_Proboscis")!;
        expect(mnState.conductanceExc).toBeGreaterThan(0.0);
    });

    it("simulates spatial chemical diffusion and tarsal sampling", () => {
        const grid = new ChemicalGrid(280.0, 60);

        // Place sugar source at (0, 0)
        grid.addSource(ChemicalChannel.SUGAR, 0.0, 0.0, 5.0);

        // Center should have high concentration
        const centerSample = grid.sample(ChemicalChannel.SUGAR, 0.0, 0.0);
        expect(centerSample).toBeGreaterThan(1.0);

        // Far point should have zero concentration
        const farSample = grid.sample(ChemicalChannel.SUGAR, 200.0, 200.0);
        expect(farSample).toBe(0.0);

        // Step diffusion
        grid.update(0.1);
        const neighborSample = grid.sample(ChemicalChannel.SUGAR, 8.0, 0.0);
        expect(neighborSample).toBeGreaterThan(0.0);
    });
});
