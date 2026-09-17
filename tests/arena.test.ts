import { describe, it, expect, beforeEach } from "vitest";
import { SimulationArena } from "../src/physics/arena";
import { ChemicalChannel } from "../src/physics/chemistry";

describe("SimulationArena Integration Tests", () => {
    let arena: SimulationArena;

    beforeEach(() => {
        arena = new SimulationArena(280.0);
    });

    it("initializes arena agents, optics, and boundary parameters", () => {
        expect(arena.radiusPx).toBe(280.0);
        expect(arena.maleFly).toBeDefined();
        expect(arena.femaleFly).toBeDefined();
        expect(arena.foodDrops.length).toBe(1);
        expect(arena.loomingThreat.isActive).toBe(false);
        expect(arena.courtshipDurationSec).toBe(0.0);
        expect(arena.copulationSuccess).toBe(false);
    });

    it("triggers looming predator and expands until auto-deactivation", () => {
        arena.triggerLoomingPredator();
        expect(arena.loomingThreat.isActive).toBe(true);
        expect(arena.loomingThreat.radiusPx).toBe(6.0);
        expect(arena.escapeEventsCount).toBe(1);

        // Step arena forward until threat expands beyond 160 px
        for (let i = 0; i < 20; i++) {
            arena.update(0.1);
        }

        // Threat should have deactivated after full expansion
        expect(arena.loomingThreat.isActive).toBe(false);
        expect(arena.loomingThreat.radiusPx).toBe(0.0);
    });

    it("allows adding arbitrary food drops into the arena", () => {
        arena.addFoodDrop(45.0, -80.0);
        expect(arena.foodDrops.length).toBe(2);

        const newFood = arena.foodDrops[1];
        expect(newFood.pos.x).toBe(45.0);
        expect(newFood.pos.y).toBe(-80.0);
    });

    it("accumulates courtship duration and achieves copulation when male serenades female", () => {
        // Position male directly facing female within intimate courtship distance
        arena.femaleFly!.pos = { x: 30.0, y: 0.0 };
        arena.maleFly.pos = { x: 0.0, y: 0.0 };
        arena.maleFly.headingRad = 0.0; // Facing east directly at female
        arena.maleFly.isSingingLeft = true; // Actively singing

        // Step arena forward over 5 seconds of active courtship
        for (let i = 0; i < 50; i++) {
            arena.update(0.1);
        }

        expect(arena.courtshipDurationSec).toBeGreaterThan(4.0);
        expect(arena.copulationSuccess).toBe(true);
    });

    it("samples chemicals accurately at male front leg tarsi", () => {
        // Place food drop near male
        arena.maleFly.pos = { x: 0.0, y: 0.0 };
        arena.maleFly.headingRad = 0.0;
        arena.maleFly.update(0.01, arena.radiusPx);

        // Add sucrose at left front tarsus
        arena.chemicalGrid.addSource(
            ChemicalChannel.SUGAR,
            arena.maleFly.leftFrontTarsus.x,
            arena.maleFly.leftFrontTarsus.y,
            5.0
        );

        const chems = arena.sampleChemicalsAtMaleTarsus();
        expect(chems).toHaveProperty("sugarL");
        expect(chems).toHaveProperty("sugarR");
        expect(chems).toHaveProperty("phero");
    });

    it("resets arena to initial state cleanly", () => {
        arena.courtshipDurationSec = 10.0;
        arena.copulationSuccess = true;
        arena.triggerLoomingPredator();

        arena.reset();

        expect(arena.courtshipDurationSec).toBe(0.0);
        expect(arena.copulationSuccess).toBe(false);
        expect(arena.loomingThreat.isActive).toBe(false);
    });

    it("updates optics correctly when femaleFly is null", () => {
        arena.femaleFly = null as any;
        const features = arena.update(0.016);
        expect(features).toBeDefined();
        expect(features.lc10LeftDrive).toBe(0.0);
        expect(features.lc10RightDrive).toBe(0.0);
    });
});
