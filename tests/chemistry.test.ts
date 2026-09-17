import { describe, it, expect, beforeEach } from "vitest";
import { ChemicalGrid, ChemicalChannel } from "../src/physics/chemistry";

describe("ChemicalGrid Diffusion & Sampling Tests", () => {
    let grid: ChemicalGrid;

    beforeEach(() => {
        grid = new ChemicalGrid(280.0, 60);
    });

    it("initializes grid buffers with correct capacity", () => {
        expect(grid.gridSize).toBe(60);
        expect(grid.arenaRadiusPx).toBe(280.0);
        expect(grid.cellSizePx).toBeCloseTo((280.0 * 2.0) / 60, 2);

        const phero = grid.getGrid(ChemicalChannel.PHEROMONE);
        expect(phero.length).toBe(3600);
        expect(phero[0]).toBe(0.0);
    });

    it("adds sources and samples across all three chemical channels", () => {
        grid.addSource(ChemicalChannel.PHEROMONE, 50.0, 50.0, 4.0);
        grid.addSource(ChemicalChannel.SUGAR, -30.0, -30.0, 6.0);
        grid.addSource(ChemicalChannel.BITTER, 0.0, 100.0, 3.0);

        expect(grid.sample(ChemicalChannel.PHEROMONE, 50.0, 50.0)).toBeGreaterThan(0.5);
        expect(grid.sample(ChemicalChannel.SUGAR, -30.0, -30.0)).toBeGreaterThan(0.5);
        expect(grid.sample(ChemicalChannel.BITTER, 0.0, 100.0)).toBeGreaterThan(0.5);

        // Cross-channel isolation: Sugar sampled at Pheromone location should be zero
        expect(grid.sample(ChemicalChannel.SUGAR, 50.0, 50.0)).toBe(0.0);
    });

    it("handles out of bounds coordinate sampling safely", () => {
        expect(grid.sample(ChemicalChannel.SUGAR, 1000.0, 1000.0)).toBe(0.0);
        expect(grid.sample(ChemicalChannel.PHEROMONE, -800.0, 0.0)).toBe(0.0);

        // Out of bounds addSource should not throw or crash
        expect(() => {
            grid.addSource(ChemicalChannel.SUGAR, 9999.0, 9999.0, 10.0);
        }).not.toThrow();
    });

    it("diffuses chemical gradients over simulation time", () => {
        grid.addSource(ChemicalChannel.SUGAR, 0.0, 0.0, 8.0);
        const centerBefore = grid.sample(ChemicalChannel.SUGAR, 0.0, 0.0);
        const neighborBefore = grid.sample(ChemicalChannel.SUGAR, 10.0, 0.0);

        grid.update(0.5); // Advance diffusion

        const centerAfter = grid.sample(ChemicalChannel.SUGAR, 0.0, 0.0);
        const neighborAfter = grid.sample(ChemicalChannel.SUGAR, 10.0, 0.0);

        // Center concentration should decrease due to diffusion and decay
        expect(centerAfter).toBeLessThan(centerBefore);
        // Neighbor cell should receive diffused concentration
        expect(neighborAfter).toBeGreaterThan(neighborBefore);
    });

    it("clears all chemical channels completely", () => {
        grid.addSource(ChemicalChannel.PHEROMONE, 20.0, 20.0, 5.0);
        grid.addSource(ChemicalChannel.SUGAR, -20.0, -20.0, 5.0);
        grid.addSource(ChemicalChannel.BITTER, 0.0, 0.0, 5.0);

        grid.clear();

        expect(grid.sample(ChemicalChannel.PHEROMONE, 20.0, 20.0)).toBe(0.0);
        expect(grid.sample(ChemicalChannel.SUGAR, -20.0, -20.0)).toBe(0.0);
        expect(grid.sample(ChemicalChannel.BITTER, 0.0, 0.0)).toBe(0.0);
    });
});
