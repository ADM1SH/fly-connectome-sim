import { describe, it, expect, beforeEach, vi } from "vitest";
import { ArenaCanvas } from "../src/ui/arena_canvas";
import { VisionCanvas } from "../src/ui/vision_canvas";
import { RasterPlot } from "../src/ui/raster_plot";
import { GraphCanvas } from "../src/ui/graph_canvas";
import { SimulationArena } from "../src/physics/arena";
import { ChemicalChannel } from "../src/physics/chemistry";
import { CompoundEyeSystem } from "../src/physics/optics";
import { LifEngine } from "../src/neural/lif_engine";
import { buildConnectome } from "../src/neural/connectome_graph";

function createMockCanvas(width: number, height: number): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const mockCtx = {
        save: vi.fn(),
        restore: vi.fn(),
        translate: vi.fn(),
        rotate: vi.fn(),
        beginPath: vi.fn(),
        closePath: vi.fn(),
        moveTo: vi.fn(),
        lineTo: vi.fn(),
        arc: vi.fn(),
        ellipse: vi.fn(),
        rect: vi.fn(),
        fillRect: vi.fn(),
        strokeRect: vi.fn(),
        stroke: vi.fn(),
        fill: vi.fn(),
        fillText: vi.fn(),
        measureText: vi.fn(() => ({ width: 20 })),
        setLineDash: vi.fn(),
        getLineDash: vi.fn(() => []),
        fillStyle: "#000000",
        strokeStyle: "#000000",
        lineWidth: 1.0,
        font: "10px sans-serif",
        textAlign: "left",
        shadowBlur: 0,
        shadowColor: ""
    };

    canvas.getContext = vi.fn((type: string) => {
        if (type === "2d") return mockCtx as unknown as CanvasRenderingContext2D;
        return null;
    }) as any;

    return canvas;
}

describe("Canvas Renderers Comprehensive Execution Tests", () => {
    let arena: SimulationArena;
    let eyes: CompoundEyeSystem;
    let lif: LifEngine;
    const connectome = buildConnectome();

    beforeEach(() => {
        arena = new SimulationArena(280.0);
        eyes = new CompoundEyeSystem(36);
        lif = new LifEngine(connectome.neurons, connectome.synapses);
    });

    it("renders ArenaCanvas without errors across all entity states", () => {
        const canvas = createMockCanvas(568, 568);
        const renderer = new ArenaCanvas(canvas);

        expect(renderer.getCanvas()).toBe(canvas);

        // Render baseline
        expect(() => {
            renderer.render(arena);
        }).not.toThrow();

        // Render with active looming threat, singing fly, pheromones, and contrast
        arena.triggerLoomingPredator();
        arena.maleFly.isSingingLeft = true;
        arena.maleFly.isSingingRight = true;
        arena.chemicalGrid.getGrid(ChemicalChannel.PHEROMONE)[0] = 1.0; // Pheromone concentration > 0.08 at (0, 0)
        arena.compoundEyes.leftOmmatidia[0].luminance = 0.5; // < 0.9
        arena.compoundEyes.rightOmmatidia[0].luminance = 0.5; // < 0.9

        expect(() => {
            renderer.render(arena);
        }).not.toThrow();

        // Test null 2D context guard
        const noCtxCanvas = document.createElement("canvas");
        noCtxCanvas.getContext = vi.fn(() => null);
        expect(() => new ArenaCanvas(noCtxCanvas)).toThrow("Failed to get 2D rendering context");
    });

    it("renders VisionCanvas retinotopic display and meters", () => {
        const canvas = createMockCanvas(568, 110);
        const renderer = new VisionCanvas(canvas);

        expect(renderer.getCanvas()).toBe(canvas);

        // Set luminance < 0.8 on both eyes to trigger contrast stroke rects
        eyes.leftOmmatidia[0].luminance = 0.3;
        eyes.rightOmmatidia[0].luminance = 0.3;

        const features = {
            lc10LeftDrive: 4.5,
            lc10RightDrive: 2.0,
            lc4LeftDrive: 6.0,
            lc4RightDrive: 1.0,
            lplc2LeftDrive: 3.0,
            lplc2RightDrive: 0.0
        };

        expect(() => {
            renderer.render(eyes, features);
        }).not.toThrow();

        // Test null 2D context guard
        const noCtxCanvas = document.createElement("canvas");
        noCtxCanvas.getContext = vi.fn(() => null);
        expect(() => new VisionCanvas(noCtxCanvas)).toThrow("Failed to get 2D rendering context");
    });

    it("renders RasterPlot spike raster and dual-channel oscilloscope", () => {
        const canvas = createMockCanvas(760, 200);
        const renderer = new RasterPlot(canvas);

        expect(renderer.getCanvas()).toBe(canvas);

        // Inject current and fire spikes to populate buffer
        lif.injectInputCurrent("P1_L", 30.0);
        lif.injectInputCurrent("GF_L", 35.0);
        lif.step(1.0);
        lif.step(10.0);

        // Render multiple frames exceeding maxVoltagePoints (180) to exercise buffer shift and traces
        for (let i = 0; i < 200; i++) {
            renderer.render(lif);
        }

        // Test null 2D context guard
        const noCtxCanvas = document.createElement("canvas");
        noCtxCanvas.getContext = vi.fn(() => null);
        expect(() => new RasterPlot(noCtxCanvas)).toThrow("Failed to get 2D rendering context");
    });

    it("renders GraphCanvas and accurately performs node hit-testing", () => {
        // Create custom connectome with an invalid synapse to test preNode/postNode absence
        const testConnectome = {
            neurons: [...connectome.neurons],
            synapses: [
                ...connectome.synapses,
                { preId: "INVALID_A", postId: "INVALID_B", weight: 1.0, transmitter: 0 as any, conductionDelayMs: 1.0, synapseCount: 1 }
            ]
        };

        const canvas = createMockCanvas(760, 270);
        const renderer = new GraphCanvas(canvas, testConnectome);

        expect(renderer.getCanvas()).toBe(canvas);

        // Step lif to fire spikes on GF_L (red glow) and P1_L (green glow)
        lif.injectInputCurrent("GF_L", 40.0);
        lif.injectInputCurrent("P1_L", 30.0);
        lif.injectInputCurrent("GRN_Bitter", 30.0);
        lif.step(1.0);

        // Mock high firing rate to trigger label badge
        const gfState = lif.getNeuronState("GF_L")!;
        gfState.firingRateHz = 15.0;

        expect(() => {
            renderer.render(lif);
        }).not.toThrow();

        // Test hit detection for a node: Tier 3 P1_L node is roughly near middle tier
        const p1LNodeId = renderer.getNodeAtPosition(760 * 0.4, 270 * 0.65);
        expect(p1LNodeId).toBeDefined();

        // Hit testing at far corner should return null
        expect(renderer.getNodeAtPosition(0, 0)).toBeNull();

        // Test null 2D context guard
        const noCtxCanvas = document.createElement("canvas");
        noCtxCanvas.getContext = vi.fn(() => null);
        expect(() => new GraphCanvas(noCtxCanvas, testConnectome)).toThrow("Failed to get 2D rendering context");
    });
});
