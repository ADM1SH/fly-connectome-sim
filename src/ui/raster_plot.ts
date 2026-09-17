import { LifEngine } from "../neural/lif_engine";

export class RasterPlot {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;

    private trackedNeurons = [
        { id: "LC10_L", label: "LC10_L [Track]", color: "#00E5FF" },
        { id: "LC4_L", label: "LC4_L [Loom]", color: "#FF334B" },
        { id: "P1_L", label: "P1_L [Court]", color: "#00FF66" },
        { id: "GF_L", label: "GF_L [Escape]", color: "#FF334B" },
        { id: "pIP10_L", label: "pIP10_L [Song]", color: "#00FF66" },
        { id: "DNg13_L", label: "DNg13_L [Steer]", color: "#E1E4EA" }
    ];

    private voltageBufferP1: number[] = [];
    private voltageBufferGF: number[] = [];
    private readonly maxVoltagePoints = 180;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Failed to get 2D rendering context");
        }
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public render(lif: LifEngine): void {
        const ctx = this.ctx;
        const nowMs = lif.getCurrentTimeMs();
        const windowDurationMs = 2500.0;
        const startMs = nowMs - windowDurationMs;

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.width, this.height);

        // Header
        ctx.fillStyle = "#8A909E";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.fillText("MULTI-CHANNEL SPIKE RASTER & OSCILLOSCOPE [-2500ms TO 0ms]", 8, 14);

        const rasterTop = 24;
        const rowHeight = 16;
        const plotWidth = this.width - 110;
        const plotLeft = 100;

        // Draw Spike Raster Rows
        const spikes = lif.getSpikeHistory();

        for (let i = 0; i < this.trackedNeurons.length; i++) {
            const item = this.trackedNeurons[i];
            const y = rasterTop + i * rowHeight;

            // Row background and guide line
            ctx.fillStyle = i % 2 === 0 ? "#050505" : "#0A0A0C";
            ctx.fillRect(plotLeft, y, plotWidth, rowHeight);
            ctx.strokeStyle = "#1A1D24";
            ctx.lineWidth = 0.5;
            ctx.strokeRect(plotLeft, y, plotWidth, rowHeight);

            // Channel Label
            ctx.fillStyle = item.color;
            ctx.font = "9px 'JetBrains Mono', monospace";
            ctx.textAlign = "right";
            ctx.fillText(item.label, plotLeft - 6, y + 11);

            // Draw Spike Ticks
            ctx.strokeStyle = item.color;
            ctx.lineWidth = 1.5;

            for (const spk of spikes) {
                if (spk.neuronId === item.id && spk.timestampMs >= startMs && spk.timestampMs <= nowMs) {
                    const frac = (spk.timestampMs - startMs) / windowDurationMs;
                    const x = plotLeft + frac * plotWidth;
                    ctx.beginPath();
                    ctx.moveTo(x, y + 2);
                    ctx.lineTo(x, y + rowHeight - 2);
                    ctx.stroke();
                }
            }
        }

        // Oscilloscope Trace: P1 Membrane Potential
        const p1State = lif.getNeuronState("P1_L");
        const gfState = lif.getNeuronState("GF_L");

        if (p1State) {
            this.voltageBufferP1.push(p1State.voltageMv);
            if (this.voltageBufferP1.length > this.maxVoltagePoints) {
                this.voltageBufferP1.shift();
            }
        }

        if (gfState) {
            this.voltageBufferGF.push(gfState.voltageMv);
            if (this.voltageBufferGF.length > this.maxVoltagePoints) {
                this.voltageBufferGF.shift();
            }
        }

        const oscTop = rasterTop + this.trackedNeurons.length * rowHeight + 12;
        const oscHeight = this.height - oscTop - 12;

        ctx.fillStyle = "#050505";
        ctx.fillRect(plotLeft, oscTop, plotWidth, oscHeight);
        ctx.strokeStyle = "#262933";
        ctx.lineWidth = 1.0;
        ctx.strokeRect(plotLeft, oscTop, plotWidth, oscHeight);

        // Grid lines for resting (-65 mV) and threshold (-46 mV)
        const restY = oscTop + oscHeight * (1.0 - (-65 + 75) / 55);
        const threshY = oscTop + oscHeight * (1.0 - (-46 + 75) / 55);

        ctx.strokeStyle = "#1A1D24";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(plotLeft, restY);
        ctx.lineTo(plotLeft + plotWidth, restY);
        ctx.moveTo(plotLeft, threshY);
        ctx.lineTo(plotLeft + plotWidth, threshY);
        ctx.stroke();

        ctx.fillStyle = "#8A909E";
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.textAlign = "right";
        ctx.fillText("V_rest (-65mV)", plotLeft - 4, restY + 3);
        ctx.fillText("V_thresh (-46mV)", plotLeft - 4, threshY + 3);

        // Draw P1 trace (green)
        this.renderVoltageTrace(this.voltageBufferP1, plotLeft, oscTop, plotWidth, oscHeight, "#00FF66");

        // Draw GF trace (red)
        this.renderVoltageTrace(this.voltageBufferGF, plotLeft, oscTop, plotWidth, oscHeight, "#FF334B");
    }

    private renderVoltageTrace(
        buffer: number[],
        left: number,
        top: number,
        width: number,
        height: number,
        color: string
    ): void {
        const ctx = this.ctx;
        if (buffer.length < 2) return;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();

        for (let i = 0; i < buffer.length; i++) {
            const v = buffer[i];
            // Scale -75mV (bottom) to -20mV (top)
            const fracY = 1.0 - Math.max(0.0, Math.min(1.0, (v - (-75)) / 55.0));
            const x = left + (i / (this.maxVoltagePoints - 1)) * width;
            const y = top + fracY * height;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }
}
