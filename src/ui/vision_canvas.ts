import { CompoundEyeSystem, VisualFeatureOutputs } from "../physics/optics";

export class VisionCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;

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

    public render(eyes: CompoundEyeSystem, features: VisualFeatureOutputs): void {
        const ctx = this.ctx;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.width, this.height);

        // Header label
        ctx.fillStyle = "#8A909E";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.fillText("RETINOTOPIC OMMATIDIA ARRAY [BINOCULAR AZIMUTH]", 8, 14);

        const stripYLeft = 24;
        const stripYRight = 54;
        const ommWidth = (this.width - 24) / eyes.ommatidiaPerEye;
        const ommHeight = 22;

        // Draw Left Eye strip
        ctx.fillStyle = "#EDEDED";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillText("L", 6, stripYLeft + 14);

        for (let i = 0; i < eyes.leftOmmatidia.length; i++) {
            const omm = eyes.leftOmmatidia[i];
            const x = 18 + i * ommWidth;

            // Grayscale luminance value
            const lumByte = Math.floor(omm.luminance * 240);
            ctx.fillStyle = `rgb(${lumByte}, ${lumByte}, ${lumByte})`;
            ctx.fillRect(x, stripYLeft, ommWidth - 1, ommHeight);

            // Highlight if detecting high contrast
            if (omm.luminance < 0.8) {
                ctx.strokeStyle = "#00FF66";
                ctx.lineWidth = 1.0;
                ctx.strokeRect(x, stripYLeft, ommWidth - 1, ommHeight);
            }
        }

        // Draw Right Eye strip
        ctx.fillText("R", 6, stripYRight + 14);
        for (let i = 0; i < eyes.rightOmmatidia.length; i++) {
            const omm = eyes.rightOmmatidia[i];
            const x = 18 + i * ommWidth;

            const lumByte = Math.floor(omm.luminance * 240);
            ctx.fillStyle = `rgb(${lumByte}, ${lumByte}, ${lumByte})`;
            ctx.fillRect(x, stripYRight, ommWidth - 1, ommHeight);

            if (omm.luminance < 0.8) {
                ctx.strokeStyle = "#00FF66";
                ctx.lineWidth = 1.0;
                ctx.strokeRect(x, stripYRight, ommWidth - 1, ommHeight);
            }
        }

        // Feature Bar Graph Meters at bottom
        const meterY = 88;
        const meterWidth = (this.width - 32) / 3;

        // LC10 (Conspecific Tracking)
        this.renderMeter(
            "LC10 TRACKING",
            Math.max(features.lc10LeftDrive, features.lc10RightDrive) / 8.0,
            12,
            meterY,
            meterWidth,
            "#00FF66"
        );

        // LC4 (Looming Escape)
        this.renderMeter(
            "LC4 LOOMING",
            Math.max(features.lc4LeftDrive, features.lc4RightDrive) / 12.0,
            16 + meterWidth,
            meterY,
            meterWidth,
            "#FF334B"
        );

        // LPLC2 (Shear)
        this.renderMeter(
            "LPLC2 SHEAR",
            Math.max(features.lplc2LeftDrive, features.lplc2RightDrive) / 10.0,
            20 + meterWidth * 2,
            meterY,
            meterWidth,
            "#00E5FF"
        );
    }

    private renderMeter(label: string, valueFrac: number, x: number, y: number, width: number, color: string): void {
        const ctx = this.ctx;
        ctx.fillStyle = "#8A909E";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillText(label, x, y);

        ctx.fillStyle = "#1A1D24";
        ctx.fillRect(x, y + 4, width, 6);

        const clamped = Math.max(0.0, Math.min(1.0, valueFrac));
        ctx.fillStyle = color;
        ctx.fillRect(x, y + 4, width * clamped, 6);
    }
}
