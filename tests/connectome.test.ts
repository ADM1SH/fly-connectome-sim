import { describe, it, expect } from "vitest";
import { buildConnectome } from "../src/neural/connectome_graph";
import { Neurotransmitter, NeuronCategory } from "../src/neural/types";

describe("Connectome Graph Specification Tests", () => {
    const { neurons, synapses } = buildConnectome();

    it("contains all essential biological neurons from Papers 01, 02, and 03", () => {
        const neuronIds = new Set(neurons.map((n) => n.id));

        // Visual (Paper 03)
        expect(neuronIds.has("LC10_L")).toBe(true);
        expect(neuronIds.has("LC10_R")).toBe(true);
        expect(neuronIds.has("LC4_L")).toBe(true);
        expect(neuronIds.has("LC4_R")).toBe(true);
        expect(neuronIds.has("LPLC2_L")).toBe(true);
        expect(neuronIds.has("LPLC2_R")).toBe(true);
        expect(neuronIds.has("AOTU008_L")).toBe(true);
        expect(neuronIds.has("AOTU008_R")).toBe(true);

        // Gustatory (Paper 02)
        expect(neuronIds.has("GRN_Sugar_L")).toBe(true);
        expect(neuronIds.has("GRN_Sugar_R")).toBe(true);
        expect(neuronIds.has("GRN_Bitter")).toBe(true);
        expect(neuronIds.has("GRN_Pheromone_Female")).toBe(true);
        expect(neuronIds.has("SEZ_PN_Sweet")).toBe(true);
        expect(neuronIds.has("SEZ_PN_Phero")).toBe(true);

        // Command & Motor (Paper 01)
        expect(neuronIds.has("P1_L")).toBe(true);
        expect(neuronIds.has("P1_R")).toBe(true);
        expect(neuronIds.has("GF_L")).toBe(true);
        expect(neuronIds.has("GF_R")).toBe(true);
        expect(neuronIds.has("pIP10_L")).toBe(true);
        expect(neuronIds.has("pIP10_R")).toBe(true);
        expect(neuronIds.has("DNg13_L")).toBe(true);
        expect(neuronIds.has("DNg13_R")).toBe(true);
        expect(neuronIds.has("MN_Proboscis")).toBe(true);
    });

    it("verifies sexually dimorphic classification for courtship hubs", () => {
        const p1L = neurons.find((n) => n.id === "P1_L")!;
        const pip10L = neurons.find((n) => n.id === "pIP10_L")!;
        const lc4L = neurons.find((n) => n.id === "LC4_L")!;

        expect(p1L.isSexuallyDimorphic).toBe(true);
        expect(pip10L.isSexuallyDimorphic).toBe(true);
        expect(lc4L.isSexuallyDimorphic).toBe(false);
    });

    it("verifies GABAergic inhibitory connections for emergency escape override", () => {
        // Giant Fiber -> P1 must be inhibitory (negative weight and GABA)
        const gfToP1 = synapses.find((s) => s.preId === "GF_L" && s.postId === "P1_L");
        expect(gfToP1).toBeDefined();
        expect(gfToP1?.transmitter).toBe(Neurotransmitter.GABA);
        expect(gfToP1?.weight).toBeLessThan(0.0);
    });

    it("verifies feedforward sensory to motor path exists", () => {
        // Visual path: LC10_L -> AOTU008_L -> P1_L -> pIP10_L
        const lcToAotu = synapses.find((s) => s.preId === "LC10_L" && s.postId === "AOTU008_L");
        const aotuToP1 = synapses.find((s) => s.preId === "AOTU008_L" && s.postId === "P1_L");
        const p1ToSong = synapses.find((s) => s.preId === "P1_L" && s.postId === "pIP10_L");

        expect(lcToAotu).toBeDefined();
        expect(aotuToP1).toBeDefined();
        expect(p1ToSong).toBeDefined();
    });

    it("verifies categories match expected neuroanatomy", () => {
        const sensory = neurons.filter((n) => n.category === NeuronCategory.SENSORY_VISUAL || n.category === NeuronCategory.SENSORY_GUSTATORY);
        const command = neurons.filter((n) => n.category === NeuronCategory.CENTRAL_COMMAND);
        const motor = neurons.filter((n) => n.category === NeuronCategory.DESCENDING_MOTOR);

        expect(sensory.length).toBeGreaterThanOrEqual(8);
        expect(command.length).toBe(4);
        expect(motor.length).toBe(5);
    });
});
