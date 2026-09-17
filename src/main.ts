import { buildConnectome } from "./neural/connectome_graph";
import { LifEngine } from "./neural/lif_engine";
import { SimulationArena } from "./physics/arena";
import { CourtshipSongSynthesizer } from "./audio/song_synthesizer";
import { ArenaCanvas } from "./ui/arena_canvas";
import { VisionCanvas } from "./ui/vision_canvas";
import { RasterPlot } from "./ui/raster_plot";
import { GraphCanvas } from "./ui/graph_canvas";
import { updateMetricCard } from "./ui/components";
import { NEUROMODULATOR_PRESETS } from "./neural/neuromodulation";

export class SimulationController {
    public connectome = buildConnectome();
    public lif = new LifEngine(this.connectome.neurons, this.connectome.synapses);
    public arena = new SimulationArena(280.0);
    public audio = new CourtshipSongSynthesizer();

    public arenaRenderer!: ArenaCanvas;
    public visionRenderer!: VisionCanvas;
    public rasterRenderer!: RasterPlot;
    public graphRenderer!: GraphCanvas;

    public lastTimeSec = 0.0;
    public isRunning = true;
    public escapeCooldownSec = 0.0;

    public init(): void {
        const arenaCanvasElem = document.getElementById("arena-canvas") as HTMLCanvasElement;
        const visionCanvasElem = document.getElementById("vision-canvas") as HTMLCanvasElement;
        const rasterCanvasElem = document.getElementById("raster-canvas") as HTMLCanvasElement;
        const graphCanvasElem = document.getElementById("graph-canvas") as HTMLCanvasElement;

        this.arenaRenderer = new ArenaCanvas(arenaCanvasElem);
        this.visionRenderer = new VisionCanvas(visionCanvasElem);
        this.rasterRenderer = new RasterPlot(rasterCanvasElem);
        this.graphRenderer = new GraphCanvas(graphCanvasElem, this.connectome);

        this.attachEventListeners(arenaCanvasElem, graphCanvasElem);
        this.initPresetDropdown();

        // Start animation loop
        this.lastTimeSec = performance.now() * 0.001;
        requestAnimationFrame(this.loop.bind(this));
    }

    private attachEventListeners(arenaCanvasElem: HTMLCanvasElement, graphCanvasElem: HTMLCanvasElement): void {
        // Arena click to drop food
        arenaCanvasElem.addEventListener("click", (evt) => {
            const rect = arenaCanvasElem.getBoundingClientRect();
            const clickX = evt.clientX - rect.left - arenaCanvasElem.width * 0.5;
            const clickY = evt.clientY - rect.top - arenaCanvasElem.height * 0.5;
            this.arena.addFoodDrop(clickX, clickY);
        });

        // Graph canvas click for optogenetic stimulation
        graphCanvasElem.addEventListener("click", (evt) => {
            const rect = graphCanvasElem.getBoundingClientRect();
            const clickX = evt.clientX - rect.left;
            const clickY = evt.clientY - rect.top;
            const nodeId = this.graphRenderer.getNodeAtPosition(clickX, clickY);
            if (nodeId) {
                this.lif.injectInputCurrent(nodeId, 25.0);
            }
        });

        // User optogenetic buttons
        document.getElementById("btn-optogenetic-p1")?.addEventListener("click", () => {
            this.audio.initialize();
            this.lif.injectInputCurrent("P1_L", 28.0);
            this.lif.injectInputCurrent("P1_R", 28.0);
        });

        document.getElementById("btn-optogenetic-gf")?.addEventListener("click", () => {
            this.audio.initialize();
            this.lif.injectInputCurrent("GF_L", 35.0);
            this.lif.injectInputCurrent("GF_R", 35.0);
        });

        document.getElementById("btn-trigger-looming")?.addEventListener("click", () => {
            this.arena.triggerLoomingPredator();
        });

        document.getElementById("btn-toggle-audio")?.addEventListener("click", () => {
            this.audio.initialize();
            const muted = this.audio.toggleMute();
            const btn = document.getElementById("btn-toggle-audio");
            if (btn) {
                btn.textContent = muted ? "AUDIO: MUTED" : "AUDIO: ACTIVE";
            }
        });

        document.getElementById("btn-reset-sim")?.addEventListener("click", () => {
            this.arena.reset();
            this.lif.reset();
        });

        // Neuromodulator Sliders
        const daSlider = document.getElementById("slider-dopamine") as HTMLInputElement;
        const oaSlider = document.getElementById("slider-octopamine") as HTMLInputElement;
        const serotoninSlider = document.getElementById("slider-serotonin") as HTMLInputElement;

        daSlider?.addEventListener("input", () => {
            const val = parseFloat(daSlider.value);
            this.lif.setNeuromodulators({ dopamine: val });
            const disp = document.getElementById("disp-dopamine");
            if (disp) disp.textContent = `${val.toFixed(1)}x`;
        });

        oaSlider?.addEventListener("input", () => {
            const val = parseFloat(oaSlider.value);
            this.lif.setNeuromodulators({ octopamine: val });
            const disp = document.getElementById("disp-octopamine");
            if (disp) disp.textContent = `${val.toFixed(1)}x`;
        });

        serotoninSlider?.addEventListener("input", () => {
            const val = parseFloat(serotoninSlider.value);
            this.lif.setNeuromodulators({ serotonin: val });
            const disp = document.getElementById("disp-serotonin");
            if (disp) disp.textContent = `${val.toFixed(1)}x`;
        });
    }

    private initPresetDropdown(): void {
        const select = document.getElementById("select-preset") as HTMLSelectElement;
        if (!select) return;

        select.innerHTML = "";
        for (let i = 0; i < NEUROMODULATOR_PRESETS.length; i++) {
            const p = NEUROMODULATOR_PRESETS[i];
            const opt = document.createElement("option");
            opt.value = i.toString();
            opt.textContent = `${p.name} - ${p.description}`;
            select.appendChild(opt);
        }

        select.addEventListener("change", () => {
            const idx = parseInt(select.value, 10);
            const p = NEUROMODULATOR_PRESETS[idx];
            if (p) {
                this.lif.setNeuromodulators(p.state);
                const daSlider = document.getElementById("slider-dopamine") as HTMLInputElement;
                const oaSlider = document.getElementById("slider-octopamine") as HTMLInputElement;
                const serotoninSlider = document.getElementById("slider-serotonin") as HTMLInputElement;
                if (daSlider) daSlider.value = p.state.dopamine.toString();
                if (oaSlider) oaSlider.value = p.state.octopamine.toString();
                if (serotoninSlider) serotoninSlider.value = p.state.serotonin.toString();

                const dDA = document.getElementById("disp-dopamine");
                const dOA = document.getElementById("disp-octopamine");
                const d5HT = document.getElementById("disp-serotonin");
                if (dDA) dDA.textContent = `${p.state.dopamine.toFixed(1)}x`;
                if (dOA) dOA.textContent = `${p.state.octopamine.toFixed(1)}x`;
                if (d5HT) d5HT.textContent = `${p.state.serotonin.toFixed(1)}x`;
            }
        });
    }

    private loop(timestampMs: number): void {
        const currentSec = timestampMs * 0.001;
        let dtSec = currentSec - this.lastTimeSec;
        this.lastTimeSec = currentSec;

        // Cap dt to prevent spiral of death
        if (dtSec > 0.05) dtSec = 0.05;

        if (this.isRunning) {
            this.stepSimulation(dtSec);
        }

        // Render Canvases
        const features = this.arena.compoundEyes.extractFeatures(dtSec);
        this.arenaRenderer.render(this.arena);
        this.visionRenderer.render(this.arena.compoundEyes, features);
        this.rasterRenderer.render(this.lif);
        this.graphRenderer.render(this.lif);

        // Update telemetry cards
        this.updateHUD();

        requestAnimationFrame(this.loop.bind(this));
    }

    public stepSimulation(dtSec: number): void {
        const simSteps = 2;
        const subDtSec = dtSec / simSteps;
        const subDtMs = subDtSec * 1000.0;

        for (let step = 0; step < simSteps; step++) {
            // 1. Update Physics and Compound Eye optics
            const features = this.arena.update(subDtSec);

            // 2. Sample Chemo-gustatory inputs at front leg tarsi
            const chems = this.arena.sampleChemicalsAtMaleTarsus();

            // 3. Inject sensory signals into connectome
            if (features.lc10LeftDrive > 0.1) this.lif.injectInputCurrent("LC10_L", features.lc10LeftDrive * 3.5);
            if (features.lc10RightDrive > 0.1) this.lif.injectInputCurrent("LC10_R", features.lc10RightDrive * 3.5);

            if (features.lc4LeftDrive > 0.2) this.lif.injectInputCurrent("LC4_L", features.lc4LeftDrive * 4.5);
            if (features.lc4RightDrive > 0.2) this.lif.injectInputCurrent("LC4_R", features.lc4RightDrive * 4.5);

            if (features.lplc2LeftDrive > 0.2) this.lif.injectInputCurrent("LPLC2_L", features.lplc2LeftDrive * 3.8);
            if (features.lplc2RightDrive > 0.2) this.lif.injectInputCurrent("LPLC2_R", features.lplc2RightDrive * 3.8);

            if (chems.sugarL > 0.05) this.lif.injectInputCurrent("GRN_Sugar_L", chems.sugarL * 8.0);
            if (chems.sugarR > 0.05) this.lif.injectInputCurrent("GRN_Sugar_R", chems.sugarR * 8.0);
            if (chems.phero > 0.05) this.lif.injectInputCurrent("GRN_Pheromone_Female", chems.phero * 12.0);

            // 4. Advance neural dynamics
            const spikes = this.lif.step(subDtMs);

            // 5. Decode Motor Descending Outputs
            const male = this.arena.maleFly;

            // Giant Fiber ballistic escape override
            const gfLeftSpiked = spikes.some((s) => s.neuronId === "GF_L");
            const gfRightSpiked = spikes.some((s) => s.neuronId === "GF_R");

            if (gfLeftSpiked || gfRightSpiked) {
                // Ballistic jump: launch fly forward at high speed
                male.linearVelocity = 140.0;
                male.angularVelocity = (Math.random() - 0.5) * 6.0;
                male.isSingingLeft = false;
                male.isSingingRight = false;
                this.escapeCooldownSec = 0.5;
            }

            if (this.escapeCooldownSec > 0.0) {
                this.escapeCooldownSec -= subDtSec;
                male.linearVelocity *= 0.95;
            } else {
                // Normal locomotion and courtship steering
                const p1StateL = this.lif.getNeuronState("P1_L");
                const p1StateR = this.lif.getNeuronState("P1_R");
                const p1Active = Boolean((p1StateL && p1StateL.firingRateHz > 1.0) || (p1StateR && p1StateR.firingRateHz > 1.0));

                const pip10StateL = this.lif.getNeuronState("pIP10_L");
                const pip10StateR = this.lif.getNeuronState("pIP10_R");

                // Wing singing states
                male.isSingingLeft = (pip10StateL ? pip10StateL.firingRateHz > 2.0 : false);
                male.isSingingRight = (pip10StateR ? pip10StateR.firingRateHz > 2.0 : false);

                // Acoustic playback on pIP10 spike
                const pIP10Spiked = spikes.some((s) => s.neuronId.startsWith("pIP10"));
                if (pIP10Spiked) {
                    this.audio.playPulseClick();
                }
                this.audio.setSineSongActive(p1Active && (male.isSingingLeft || male.isSingingRight));

                // Steering from DNg13
                const dngL = this.lif.getNeuronState("DNg13_L");
                const dngR = this.lif.getNeuronState("DNg13_R");
                const steerRateL = dngL ? dngL.firingRateHz : 0.0;
                const steerRateR = dngR ? dngR.firingRateHz : 0.0;
                const steeringTorque = (steerRateR - steerRateL) * 0.12;

                male.angularVelocity = steeringTorque;

                // Forward speed governed by state: courtship pursuit vs quiet search
                if (p1Active) {
                    male.linearVelocity = 55.0; // Rapid conspecific pursuit
                } else {
                    male.linearVelocity = 28.0; // Baseline exploration
                }
            }
        }
    }

    public updateHUD(): void {
        const p1L = this.lif.getNeuronState("P1_L");
        const gfL = this.lif.getNeuronState("GF_L");
        const pip10L = this.lif.getNeuronState("pIP10_L");
        const allSpikes = this.lif.getSpikeHistory();
        const recentSpikes = allSpikes.filter((s) => s.timestampMs >= this.lif.getCurrentTimeMs() - 1000.0);

        updateMetricCard("hud-network-rate", (recentSpikes.length).toString());
        updateMetricCard("hud-p1-rate", (p1L ? p1L.firingRateHz.toFixed(1) : "0.0"));
        updateMetricCard("hud-pip10-rate", (pip10L ? pip10L.firingRateHz.toFixed(1) : "0.0"));
        updateMetricCard("hud-gf-rate", (gfL ? gfL.firingRateHz.toFixed(1) : "0.0"));
        updateMetricCard("hud-courtship-time", `${this.arena.courtshipDurationSec.toFixed(1)}s`);

        const statusElem = document.getElementById("hud-system-status");
        if (statusElem) {
            if (this.escapeCooldownSec > 0.0) {
                statusElem.textContent = "BALLISTIC ESCAPE TRIGGERED";
                statusElem.style.color = "#FF334B";
            } else if (this.arena.copulationSuccess) {
                statusElem.textContent = "COPULATION RITUAL SUCCESSFUL";
                statusElem.style.color = "#00FF66";
            } else if (this.arena.maleFly.isSingingLeft || this.arena.maleFly.isSingingRight) {
                statusElem.textContent = "UNILATERAL WING SONG ACTIVE";
                statusElem.style.color = "#66FFA3";
            } else {
                statusElem.textContent = "EXPLORATORY FORAGING";
                statusElem.style.color = "#EDEDED";
            }
        }
    }
}

// Boot application
window.addEventListener("DOMContentLoaded", () => {
    const controller = new SimulationController();
    controller.init();
});
