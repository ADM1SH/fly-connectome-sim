export enum ChemicalChannel {
    PHEROMONE = "PHEROMONE",
    SUGAR = "SUGAR",
    BITTER = "BITTER"
}

export class ChemicalGrid {
    public readonly gridSize: number;
    public readonly arenaRadiusPx: number;
    public readonly cellSizePx: number;

    private pheromoneGrid: Float32Array;
    private sugarGrid: Float32Array;
    private bitterGrid: Float32Array;

    private tempBuffer: Float32Array;

    constructor(arenaRadiusPx: number, gridSize = 60) {
        this.arenaRadiusPx = arenaRadiusPx;
        this.gridSize = gridSize;
        this.cellSizePx = (arenaRadiusPx * 2.0) / gridSize;

        const totalCells = gridSize * gridSize;
        this.pheromoneGrid = new Float32Array(totalCells);
        this.sugarGrid = new Float32Array(totalCells);
        this.bitterGrid = new Float32Array(totalCells);
        this.tempBuffer = new Float32Array(totalCells);
    }

    public addSource(channel: ChemicalChannel, worldX: number, worldY: number, amount: number): void {
        const gx = Math.floor((worldX + this.arenaRadiusPx) / this.cellSizePx);
        const gy = Math.floor((worldY + this.arenaRadiusPx) / this.cellSizePx);

        if (gx >= 0 && gx < this.gridSize && gy >= 0 && gy < this.gridSize) {
            const idx = gy * this.gridSize + gx;
            const targetGrid = this.getGrid(channel);
            targetGrid[idx] = Math.min(10.0, targetGrid[idx] + amount);
        }
    }

    public sample(channel: ChemicalChannel, worldX: number, worldY: number): number {
        const u = (worldX + this.arenaRadiusPx) / this.cellSizePx - 0.5;
        const v = (worldY + this.arenaRadiusPx) / this.cellSizePx - 0.5;

        const x0 = Math.floor(u);
        const y0 = Math.floor(v);
        const x1 = x0 + 1;
        const y1 = y0 + 1;

        if (x0 < 0 || x1 >= this.gridSize || y0 < 0 || y1 >= this.gridSize) {
            return 0.0;
        }

        const fx = u - x0;
        const fy = v - y0;

        const grid = this.getGrid(channel);
        const v00 = grid[y0 * this.gridSize + x0];
        const v10 = grid[y0 * this.gridSize + x1];
        const v01 = grid[y1 * this.gridSize + x0];
        const v11 = grid[y1 * this.gridSize + x1];

        // Bilinear interpolation
        const top = v00 * (1.0 - fx) + v10 * fx;
        const bottom = v01 * (1.0 - fx) + v11 * fx;
        return top * (1.0 - fy) + bottom * fy;
    }

    public update(dtSec: number): void {
        // Pheromone diffuses and evaporates
        this.diffuseAndDecay(this.pheromoneGrid, 0.25, 0.45 * dtSec);

        // Sugar diffuses slowly and remains stable unless consumed
        this.diffuseAndDecay(this.sugarGrid, 0.08, 0.05 * dtSec);

        // Bitter diffuses
        this.diffuseAndDecay(this.bitterGrid, 0.15, 0.1 * dtSec);
    }

    private diffuseAndDecay(grid: Float32Array, diffusionRate: number, decayRate: number): void {
        const n = this.gridSize;
        this.tempBuffer.set(grid);

        for (let y = 1; y < n - 1; y++) {
            for (let x = 1; x < n - 1; x++) {
                const idx = y * n + x;
                const laplacian =
                    this.tempBuffer[idx - 1] +
                    this.tempBuffer[idx + 1] +
                    this.tempBuffer[idx - n] +
                    this.tempBuffer[idx + n] -
                    4.0 * this.tempBuffer[idx];

                let val = this.tempBuffer[idx] + laplacian * diffusionRate;
                val -= val * decayRate;
                grid[idx] = Math.max(0.0, val);
            }
        }
    }

    public getGrid(channel: ChemicalChannel): Float32Array {
        switch (channel) {
            case ChemicalChannel.PHEROMONE:
                return this.pheromoneGrid;
            case ChemicalChannel.SUGAR:
                return this.sugarGrid;
            case ChemicalChannel.BITTER:
                return this.bitterGrid;
        }
    }

    public clear(): void {
        this.pheromoneGrid.fill(0);
        this.sugarGrid.fill(0);
        this.bitterGrid.fill(0);
    }
}
