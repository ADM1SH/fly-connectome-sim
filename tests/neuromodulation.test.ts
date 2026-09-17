import { describe, it, expect, beforeEach } from "vitest";
import { NEUROMODULATOR_PRESETS } from "../src/neural/neuromodulation";
import { LifEngine } from "../src/neural/lif_engine";
import { buildConnectome } from "../src/neural/connectome_graph";

describe("Neuromodulation Presets and Clamping Tests", () => {
    let lif: LifEngine;

    beforeEach(() => {
        const { neurons, synapses } = buildConnectome();
        lif = new LifEngine(neurons, synapses);
    });

    it("verifies all biological presets are defined with valid ranges", () => {
        expect(NEUROMODULATOR_PRESETS.length).toBe(5);

        const names = NEUROMODULATOR_PRESETS.map((p) => p.name);
        expect(names).toContain("Baseline");
        expect(names).toContain("Courtship Drive");
        expect(names).toContain("Starvation");
        expect(names).toContain("Alarm State");
        expect(names).toContain("Satiety");

        for (const preset of NEUROMODULATOR_PRESETS) {
            expect(preset.state.dopamine).toBeGreaterThan(0.0);
            expect(preset.state.dopamine).toBeLessThanOrEqual(3.0);
            expect(preset.state.octopamine).toBeGreaterThan(0.0);
            expect(preset.state.octopamine).toBeLessThanOrEqual(3.0);
            expect(preset.state.serotonin).toBeGreaterThan(0.0);
            expect(preset.state.serotonin).toBeLessThanOrEqual(3.0);
        }
    });

    it("clamps neuromodulator levels within [0.0, 3.0] bounds", () => {
        // Attempt out of bounds high
        lif.setNeuromodulators({ dopamine: 10.0, octopamine: -5.0 });
        const state = lif.getNeuromodulators();

        expect(state.dopamine).toBe(3.0);
        expect(state.octopamine).toBe(0.0);
        expect(state.serotonin).toBe(1.0); // Unchanged
    });

    it("applies Courtship Drive preset to elevate P1 sensitivity", () => {
        const courtshipPreset = NEUROMODULATOR_PRESETS.find((p) => p.name === "Courtship Drive")!;
        lif.setNeuromodulators(courtshipPreset.state);

        const current = lif.getNeuromodulators();
        expect(current.dopamine).toBe(2.2);
        expect(current.serotonin).toBe(0.6);
    });
});
