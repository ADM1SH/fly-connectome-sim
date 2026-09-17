import { SimulationArena } from "../physics/arena";
import { FlyAgent } from "../physics/fly_agent";
import { ChemicalChannel } from "../physics/chemistry";

export class ArenaCanvas {
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

    public render(arena: SimulationArena): void {
        const ctx = this.ctx;
        const cx = this.width * 0.5;
        const cy = this.height * 0.5;

        // Clear canvas with pitch black
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.save();
        ctx.translate(cx, cy);

        // Draw arena circular wall
        ctx.beginPath();
        ctx.arc(0, 0, arena.radiusPx, 0, Math.PI * 2);
        ctx.fillStyle = "#050505";
        ctx.fill();
        ctx.strokeStyle = "#262933";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Subtle concentric millimeter guide rings
        ctx.strokeStyle = "#121215";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(0, 0, arena.radiusPx * 0.33, 0, Math.PI * 2);
        ctx.arc(0, 0, arena.radiusPx * 0.66, 0, Math.PI * 2);
        ctx.stroke();

        // Render chemical pheromone heatmap
        this.renderChemicalHeatmap(arena);

        // Render food drops
        for (const food of arena.foodDrops) {
            ctx.beginPath();
            ctx.arc(food.pos.x, food.pos.y, food.radiusPx, 0, Math.PI * 2);
            ctx.fillStyle = "#002B11";
            ctx.fill();
            ctx.strokeStyle = "#00FF66";
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // Text label
            ctx.fillStyle = "#66FFA3";
            ctx.font = "9px 'JetBrains Mono', monospace";
            ctx.textAlign = "center";
            ctx.fillText("SUCROSE", food.pos.x, food.pos.y + 3);
        }

        // Render looming predator shadow
        if (arena.loomingThreat.isActive) {
            ctx.beginPath();
            ctx.arc(arena.loomingThreat.pos.x, arena.loomingThreat.pos.y, arena.loomingThreat.radiusPx, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(61, 0, 10, 0.45)";
            ctx.fill();
            ctx.strokeStyle = "#FF334B";
            ctx.lineWidth = 2.0;
            ctx.stroke();

            ctx.fillStyle = "#FFA8B3";
            ctx.font = "10px 'JetBrains Mono', monospace";
            ctx.textAlign = "center";
            ctx.fillText("[LOOMING THREAT]", arena.loomingThreat.pos.x, arena.loomingThreat.pos.y - arena.loomingThreat.radiusPx - 4);
        }

        // Render Female Fly if present
        if (arena.femaleFly) {
            this.renderFly(arena.femaleFly, false);
        }

        // Render Male Fly (Connectome Agent)
        this.renderFly(arena.maleFly, true);

        // Render visual field rays for male fly
        this.renderVisualRays(arena);

        ctx.restore();
    }

    private renderChemicalHeatmap(arena: SimulationArena): void {
        const ctx = this.ctx;
        const grid = arena.chemicalGrid.getGrid(ChemicalChannel.PHEROMONE);
        const gs = arena.chemicalGrid.gridSize;
        const cs = arena.chemicalGrid.cellSizePx;
        const r = arena.radiusPx;

        ctx.fillStyle = "rgba(0, 229, 255, 0.12)";
        for (let gy = 0; gy < gs; gy += 2) {
            for (let gx = 0; gx < gs; gx += 2) {
                const val = grid[gy * gs + gx];
                if (val > 0.08) {
                    const wx = gx * cs - r;
                    const wy = gy * cs - r;
                    const dotRadius = Math.min(6.0, val * 3.0);
                    ctx.beginPath();
                    ctx.arc(wx, wy, dotRadius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }

    private renderFly(fly: FlyAgent, isMale: boolean): void {
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(fly.pos.x, fly.pos.y);
        ctx.rotate(fly.headingRad);

        // Render articulated legs with tripod stance
        const legs = fly.getLegPositions();
        ctx.strokeStyle = isMale ? "#8A909E" : "#686D7A";
        ctx.lineWidth = 1.2;

        for (const leg of legs) {
            ctx.beginPath();
            // Translate world coords back to local fly frame
            const dxB = leg.baseX - fly.pos.x;
            const dyB = leg.baseY - fly.pos.y;
            const cosH = Math.cos(-fly.headingRad);
            const sinH = Math.sin(-fly.headingRad);

            const lxB = dxB * cosH - dyB * sinH;
            const lyB = dxB * sinH + dyB * cosH;

            const dxT = leg.tipX - fly.pos.x;
            const dyT = leg.tipY - fly.pos.y;
            const lxT = dxT * cosH - dyT * sinH;
            const lyT = dxT * sinH + dyT * cosH;

            ctx.moveTo(lxB, lyB);
            ctx.lineTo(lxT, lyT);
            ctx.stroke();

            // Foot contact point
            ctx.fillStyle = leg.isStance ? "#00FF66" : "#262933";
            ctx.fillRect(lxT - 1, lyT - 1, 2, 2);
        }

        // Render Wings
        const wingLength = fly.bodyLengthPx * 0.9;
        const wingWidth = fly.bodyLengthPx * 0.35;

        // Left Wing
        ctx.save();
        ctx.translate(-fly.bodyLengthPx * 0.1, -2);
        ctx.rotate((fly.leftWingAngleDeg * Math.PI) / 180.0);
        ctx.fillStyle = fly.isSingingLeft ? "rgba(0, 255, 102, 0.45)" : "rgba(225, 228, 234, 0.25)";
        ctx.strokeStyle = fly.isSingingLeft ? "#00FF66" : "#8A909E";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(-wingLength * 0.5, 0, wingLength * 0.5, wingWidth * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Right Wing
        ctx.save();
        ctx.translate(-fly.bodyLengthPx * 0.1, 2);
        ctx.rotate((fly.rightWingAngleDeg * Math.PI) / 180.0);
        ctx.fillStyle = fly.isSingingRight ? "rgba(0, 255, 102, 0.45)" : "rgba(225, 228, 234, 0.25)";
        ctx.strokeStyle = fly.isSingingRight ? "#00FF66" : "#8A909E";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(-wingLength * 0.5, 0, wingLength * 0.5, wingWidth * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Abdomen (posterior)
        ctx.fillStyle = isMale ? "#1A1D24" : "#121215";
        ctx.strokeStyle = "#262933";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        const abdoLength = fly.bodyLengthPx * 0.55;
        const abdoWidth = fly.bodyLengthPx * 0.38;
        ctx.ellipse(-fly.bodyLengthPx * 0.35, 0, abdoLength * 0.5, abdoWidth * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Male pigmented posterior abdominal tip (male-specific phenotype)
        if (isMale) {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.ellipse(-fly.bodyLengthPx * 0.52, 0, 3, 4, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Thorax (central)
        ctx.fillStyle = isMale ? "#262933" : "#1A1D24";
        ctx.strokeStyle = isMale ? "#00FF66" : "#8A909E";
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(0, 0, fly.bodyLengthPx * 0.25, fly.bodyLengthPx * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Head and Compound Eyes
        const headX = fly.bodyLengthPx * 0.35;
        ctx.fillStyle = "#121215";
        ctx.beginPath();
        ctx.ellipse(headX, 0, fly.bodyLengthPx * 0.16, fly.bodyLengthPx * 0.24, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Compound Eyes (Left and Right ommatidial clusters)
        ctx.fillStyle = "#FF334B";
        // Left Eye
        ctx.beginPath();
        ctx.ellipse(headX + 1, -fly.bodyLengthPx * 0.15, 3.5, 2.5, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        // Right Eye
        ctx.beginPath();
        ctx.ellipse(headX + 1, fly.bodyLengthPx * 0.15, 3.5, 2.5, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    private renderVisualRays(arena: SimulationArena): void {
        const ctx = this.ctx;
        const fly = arena.maleFly;

        ctx.lineWidth = 0.5;
        // Draw sample subset of rays (every 4th ommatidium)
        for (let i = 0; i < arena.compoundEyes.leftOmmatidia.length; i += 4) {
            const ommL = arena.compoundEyes.leftOmmatidia[i];
            const rayAngleL = fly.headingRad + ommL.relativeAngleRad;
            const endXL = fly.pos.x + Math.cos(rayAngleL) * 90.0;
            const endYL = fly.pos.y + Math.sin(rayAngleL) * 90.0;

            ctx.strokeStyle = ommL.luminance < 0.9 ? "rgba(0, 255, 102, 0.4)" : "rgba(38, 41, 51, 0.2)";
            ctx.beginPath();
            ctx.moveTo(fly.pos.x, fly.pos.y);
            ctx.lineTo(endXL, endYL);
            ctx.stroke();

            const ommR = arena.compoundEyes.rightOmmatidia[i];
            const rayAngleR = fly.headingRad + ommR.relativeAngleRad;
            const endXR = fly.pos.x + Math.cos(rayAngleR) * 90.0;
            const endYR = fly.pos.y + Math.sin(rayAngleR) * 90.0;

            ctx.strokeStyle = ommR.luminance < 0.9 ? "rgba(0, 255, 102, 0.4)" : "rgba(38, 41, 51, 0.2)";
            ctx.beginPath();
            ctx.moveTo(fly.pos.x, fly.pos.y);
            ctx.lineTo(endXR, endYR);
            ctx.stroke();
        }
    }
}
