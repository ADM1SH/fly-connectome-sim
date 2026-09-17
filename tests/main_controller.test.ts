import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { SimulationController } from "../src/main";

describe("SimulationController Full Pipeline Integration Tests", () => {
    let controller: SimulationController;
    let container: HTMLDivElement;

    beforeEach(() => {
        // Mock requestAnimationFrame
        vi.stubGlobal("requestAnimationFrame", vi.fn());

        // Setup DOM tree mirroring index.html
        container = document.createElement("div");
        container.innerHTML = `
            <div id="hud-system-status">EXPLORATORY FORAGING</div>
            <div id="hud-network-rate"><span class="metric-value">0</span></div>
            <div id="hud-p1-rate"><span class="metric-value">0.0</span></div>
            <div id="hud-pip10-rate"><span class="metric-value">0.0</span></div>
            <div id="hud-gf-rate"><span class="metric-value">0.0</span></div>
            <div id="hud-courtship-time"><span class="metric-value">0.0s</span></div>

            <canvas id="arena-canvas" width="568" height="568"></canvas>
            <canvas id="vision-canvas" width="568" height="110"></canvas>
            <canvas id="raster-canvas" width="760" height="200"></canvas>
            <canvas id="graph-canvas" width="760" height="270"></canvas>

            <button id="btn-optogenetic-p1"></button>
            <button id="btn-optogenetic-gf"></button>
            <button id="btn-trigger-looming"></button>
            <button id="btn-toggle-audio"></button>
            <button id="btn-reset-sim"></button>

            <select id="select-preset"></select>
            <input id="slider-dopamine" type="range" min="0" max="3" value="1.0">
            <input id="slider-octopamine" type="range" min="0" max="3" value="1.0">
            <input id="slider-serotonin" type="range" min="0" max="3" value="1.0">

            <span id="disp-dopamine">1.0x</span>
            <span id="disp-octopamine">1.0x</span>
            <span id="disp-serotonin">1.0x</span>
        `;
        document.body.appendChild(container);

        // Mock 2D context on canvases
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
            measureText: vi.fn(() => ({ width: 20 }))
        };

        const canvases = container.querySelectorAll("canvas");
        canvases.forEach((c) => {
            c.getContext = vi.fn(() => mockCtx as any);
        });

        controller = new SimulationController();
    });

    afterEach(() => {
        document.body.removeChild(container);
        vi.unstubAllGlobals();
    });

    it("initializes canvases, dropdowns, and HUD without error", () => {
        expect(() => {
            controller.init();
        }).not.toThrow();

        const presetSelect = document.getElementById("select-preset") as HTMLSelectElement;
        expect(presetSelect.options.length).toBeGreaterThan(0);
    });

    it("handles button clicks for optogenetic stimulation and controls", () => {
        controller.init();

        const p1Btn = document.getElementById("btn-optogenetic-p1")!;
        const gfBtn = document.getElementById("btn-optogenetic-gf")!;
        const loomBtn = document.getElementById("btn-trigger-looming")!;
        const audioBtn = document.getElementById("btn-toggle-audio")!;
        const resetBtn = document.getElementById("btn-reset-sim")!;

        // Stimulate P1
        p1Btn.click();
        const p1State = controller.lif.getNeuronState("P1_L")!;
        expect(p1State.voltageMv).toBeGreaterThan(-65.0);

        // Stimulate GF
        gfBtn.click();
        const gfState = controller.lif.getNeuronState("GF_L")!;
        expect(gfState.voltageMv).toBeGreaterThan(-65.0);

        // Trigger Looming
        loomBtn.click();
        expect(controller.arena.loomingThreat.isActive).toBe(true);

        // Toggle Audio twice to cover both MUTED and ACTIVE branches
        audioBtn.click();
        expect(audioBtn.textContent).toContain("MUTED");
        audioBtn.click();
        expect(audioBtn.textContent).toContain("ACTIVE");

        // Reset
        resetBtn.click();
        expect(controller.arena.courtshipDurationSec).toBe(0.0);

        // Test initPresetDropdown when select element is absent
        const selectElem = document.getElementById("select-preset");
        selectElem?.remove();
        (controller as any).initPresetDropdown();
    });

    it("handles neuromodulator sliders and preset selection events", () => {
        controller.init();

        const daSlider = document.getElementById("slider-dopamine") as HTMLInputElement;
        daSlider.value = "2.5";
        daSlider.dispatchEvent(new Event("input"));
        expect(controller.lif.getNeuromodulators().dopamine).toBe(2.5);
        expect(document.getElementById("disp-dopamine")?.textContent).toBe("2.5x");

        const oaSlider = document.getElementById("slider-octopamine") as HTMLInputElement;
        oaSlider.value = "1.8";
        oaSlider.dispatchEvent(new Event("input"));
        expect(controller.lif.getNeuromodulators().octopamine).toBe(1.8);
        expect(document.getElementById("disp-octopamine")?.textContent).toBe("1.8x");

        const serotoninSlider = document.getElementById("slider-serotonin") as HTMLInputElement;
        serotoninSlider.value = "2.0";
        serotoninSlider.dispatchEvent(new Event("input"));
        expect(controller.lif.getNeuromodulators().serotonin).toBe(2.0);
        expect(document.getElementById("disp-serotonin")?.textContent).toBe("2.0x");

        // Preset dropdown selection
        const select = document.getElementById("select-preset") as HTMLSelectElement;
        select.value = "1"; // Courtship Drive
        select.dispatchEvent(new Event("change"));

        expect(controller.lif.getNeuromodulators().dopamine).toBe(2.2);
    });

    it("handles user interactions on arena and graph canvases", () => {
        controller.init();

        const arenaCanvas = document.getElementById("arena-canvas") as HTMLCanvasElement;
        const initialFoodCount = controller.arena.foodDrops.length;

        // Click arena to drop sucrose
        arenaCanvas.dispatchEvent(new MouseEvent("click", { clientX: 100, clientY: 100 }));
        expect(controller.arena.foodDrops.length).toBe(initialFoodCount + 1);

        // Click graph canvas when no node is hit
        const graphCanvas = document.getElementById("graph-canvas") as HTMLCanvasElement;
        graphCanvas.dispatchEvent(new MouseEvent("click", { clientX: 300, clientY: 150 }));

        // Click graph canvas when a node is hit
        vi.spyOn((controller as any).graphRenderer, "getNodeAtPosition").mockReturnValue("P1_L");
        graphCanvas.dispatchEvent(new MouseEvent("click", { clientX: 300, clientY: 150 }));
        const p1State = controller.lif.getNeuronState("P1_L")!;
        expect(p1State.voltageMv).toBeGreaterThan(-65.0);
    });

    it("executes simulation step and updates telemetry across all behavioral regimes", () => {
        controller.init();

        // 1. Step exploratory foraging
        controller.stepSimulation(0.02);
        controller.updateHUD();
        expect(document.getElementById("hud-system-status")?.textContent).toBe("EXPLORATORY FORAGING");

        // 2. Step with Giant Fiber ballistic escape trigger
        controller.lif.injectInputCurrent("GF_L", 45.0);
        controller.stepSimulation(0.02);
        expect(controller.arena.maleFly.linearVelocity).toBeGreaterThan(100.0);
        expect(controller.escapeCooldownSec).toBeGreaterThan(0.0);

        // 3. Step during escape cooldown decay
        controller.lif.reset();
        controller.escapeCooldownSec = 0.4;
        controller.arena.maleFly.linearVelocity = 100.0;
        controller.stepSimulation(0.02);
        expect(controller.arena.maleFly.linearVelocity).toBeLessThan(100.0);

        // 4. Step courtship pursuit and pIP10 acoustic triggers
        controller.escapeCooldownSec = 0.0;
        controller.lif.injectInputCurrent("P1_L", 40.0);
        controller.lif.injectInputCurrent("pIP10_L", 40.0);
        controller.stepSimulation(0.02);
        controller.updateHUD();
        expect(controller.arena.maleFly.linearVelocity).toBe(55.0);

        // 5. Step wing singing regime
        controller.arena.maleFly.isSingingLeft = true;
        controller.updateHUD();
        expect(document.getElementById("hud-system-status")?.textContent).toBe("UNILATERAL WING SONG ACTIVE");

        // 6. Step ballistic escape regime
        controller.escapeCooldownSec = 0.4;
        controller.updateHUD();
        expect(document.getElementById("hud-system-status")?.textContent).toBe("BALLISTIC ESCAPE TRIGGERED");

        // 7. Step copulation success regime
        controller.escapeCooldownSec = 0.0;
        controller.arena.copulationSuccess = true;
        controller.updateHUD();
        expect(document.getElementById("hud-system-status")?.textContent).toBe("COPULATION RITUAL SUCCESSFUL");
    });

    it("executes continuous main loop and caps dt", () => {
        controller.init();
        // First frame
        (controller as any).loop(1000.0);
        // Normal subsequent frame
        (controller as any).loop(1016.0);
        // Large delta frame (triggers dt > 0.05 cap)
        (controller as any).loop(2000.0);
        expect(requestAnimationFrame).toHaveBeenCalled();
    });

    it("boots application on DOMContentLoaded event", () => {
        expect(() => {
            window.dispatchEvent(new Event("DOMContentLoaded"));
        }).not.toThrow();
    });

    it("injects sensory features and chemical inputs across all optic and gustatory channels", () => {
        controller.init();
        vi.spyOn(controller.arena, "update").mockReturnValue({
            lc10LeftDrive: 0.5,
            lc10RightDrive: 0.5,
            lc4LeftDrive: 0.8,
            lc4RightDrive: 0.8,
            lplc2LeftDrive: 0.6,
            lplc2RightDrive: 0.6
        });
        vi.spyOn(controller.arena, "sampleChemicalsAtMaleTarsus").mockReturnValue({
            sugarL: 0.2,
            sugarR: 0.2,
            phero: 0.3
        });
        const injectSpy = vi.spyOn(controller.lif, "injectInputCurrent");
        controller.stepSimulation(0.02);

        expect(injectSpy).toHaveBeenCalledWith("LC10_L", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("LC10_R", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("LC4_L", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("LC4_R", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("LPLC2_L", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("LPLC2_R", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("GRN_Sugar_L", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("GRN_Sugar_R", expect.any(Number));
        expect(injectSpy).toHaveBeenCalledWith("GRN_Pheromone_Female", expect.any(Number));
    });

    it("handles missing neuron states in HUD and stepSimulation gracefully", () => {
        controller.init();
        vi.spyOn(controller.lif, "getNeuronState").mockReturnValue(undefined);
        controller.stepSimulation(0.02);
        controller.arena.maleFly.isSingingRight = true;
        controller.updateHUD();
        expect(document.getElementById("hud-system-status")?.textContent).toBe("UNILATERAL WING SONG ACTIVE");
    });
});
