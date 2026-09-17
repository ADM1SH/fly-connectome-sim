import { FlyAgent, FlySex, Vec2 } from "./fly_agent";
import { ChemicalGrid, ChemicalChannel } from "./chemistry";
import { CompoundEyeSystem, LoomingThreat, VisualFeatureOutputs } from "./optics";

export interface FoodDrop {
    id: string;
    pos: Vec2;
    radiusPx: number;
    amount: number;
}

export class SimulationArena {
    public readonly radiusPx: number;
    public maleFly: FlyAgent;
    public femaleFly: FlyAgent | null;
    public chemicalGrid: ChemicalGrid;
    public compoundEyes: CompoundEyeSystem;
    public loomingThreat: LoomingThreat;
    public foodDrops: FoodDrop[];

    // Metrics
    public courtshipDurationSec: number;
    public copulationSuccess: boolean;
    public escapeEventsCount: number;

    constructor(radiusPx = 280.0) {
        this.radiusPx = radiusPx;
        this.chemicalGrid = new ChemicalGrid(radiusPx, 60);
        this.compoundEyes = new CompoundEyeSystem(36);

        // Initialize male fly near arena center-left
        this.maleFly = new FlyAgent("male_01", FlySex.MALE, -60.0, 0.0, 0.0);

        // Initialize female fly near arena center-right
        this.femaleFly = new FlyAgent("female_01", FlySex.FEMALE, 80.0, 30.0, Math.PI);

        this.loomingThreat = {
            pos: { x: 0, y: 0 },
            radiusPx: 0.0,
            isActive: false
        };

        this.foodDrops = [
            { id: "food_01", pos: { x: 0.0, y: -140.0 }, radiusPx: 12.0, amount: 100.0 }
        ];

        this.courtshipDurationSec = 0.0;
        this.copulationSuccess = false;
        this.escapeEventsCount = 0;
    }

    public triggerLoomingPredator(): void {
        this.loomingThreat.isActive = true;
        this.loomingThreat.pos = {
            x: this.maleFly.pos.x + Math.cos(this.maleFly.headingRad + 0.3) * 60.0,
            y: this.maleFly.pos.y + Math.sin(this.maleFly.headingRad + 0.3) * 60.0
        };
        this.loomingThreat.radiusPx = 6.0;
        this.escapeEventsCount += 1;
    }

    public addFoodDrop(worldX: number, worldY: number): void {
        this.foodDrops.push({
            id: `food_${Date.now()}`,
            pos: { x: worldX, y: worldY },
            radiusPx: 12.0,
            amount: 100.0
        });
    }

    public update(dtSec: number): VisualFeatureOutputs {
        // Update chemical sources
        if (this.femaleFly) {
            this.chemicalGrid.addSource(
                ChemicalChannel.PHEROMONE,
                this.femaleFly.pos.x,
                this.femaleFly.pos.y,
                1.5 * dtSec
            );
        }

        for (const food of this.foodDrops) {
            this.chemicalGrid.addSource(ChemicalChannel.SUGAR, food.pos.x, food.pos.y, 1.2 * dtSec);
        }

        this.chemicalGrid.update(dtSec);

        // Update looming predator expansion
        if (this.loomingThreat.isActive) {
            this.loomingThreat.radiusPx += 180.0 * dtSec;
            if (this.loomingThreat.radiusPx > 160.0) {
                this.loomingThreat.isActive = false;
                this.loomingThreat.radiusPx = 0.0;
            }
        }

        // Female autonomous wandering and receptivity behavior
        if (this.femaleFly) {
            const distToMale = Math.hypot(
                this.femaleFly.pos.x - this.maleFly.pos.x,
                this.femaleFly.pos.y - this.maleFly.pos.y
            );

            // Check if male is singing and oriented toward her
            const maleToFemaleAngle = Math.atan2(
                this.femaleFly.pos.y - this.maleFly.pos.y,
                this.femaleFly.pos.x - this.maleFly.pos.x
            );
            const headingDiff = Math.abs(
                Math.atan2(Math.sin(maleToFemaleAngle - this.maleFly.headingRad), Math.cos(maleToFemaleAngle - this.maleFly.headingRad))
            );

            const isMaleCourting = (this.maleFly.isSingingLeft || this.maleFly.isSingingRight) && headingDiff < 0.6 && distToMale < 65.0;

            if (isMaleCourting) {
                this.courtshipDurationSec += dtSec;
                // Female slows down when serenaded (receptive state)
                this.femaleFly.linearVelocity *= 0.85;
                this.femaleFly.angularVelocity *= 0.8;

                if (this.courtshipDurationSec > 4.5 && distToMale < 35.0) {
                    this.copulationSuccess = true;
                }
            } else {
                // Smooth stochastic wandering
                const turnNoise = (Math.random() - 0.5) * 2.5;
                this.femaleFly.angularVelocity += turnNoise * dtSec * 10.0;
                this.femaleFly.angularVelocity = Math.max(-2.5, Math.min(2.5, this.femaleFly.angularVelocity * 0.92));

                const targetSpeed = 35.0;
                this.femaleFly.linearVelocity += (targetSpeed - this.femaleFly.linearVelocity) * dtSec * 3.0;
            }

            this.femaleFly.update(dtSec, this.radiusPx);
        }

        // Update male fly kinematics
        this.maleFly.update(dtSec, this.radiusPx);

        // Update compound eye optics
        this.compoundEyes.castRays(
            this.maleFly.pos,
            this.maleFly.headingRad,
            this.femaleFly ? this.femaleFly.pos : null,
            this.femaleFly ? this.femaleFly.bodyLengthPx * 0.5 : 0.0,
            this.loomingThreat.isActive ? this.loomingThreat : null
        );

        return this.compoundEyes.extractFeatures(dtSec);
    }

    public sampleChemicalsAtMaleTarsus(): { sugarL: number; sugarR: number; phero: number } {
        const sugarL = this.chemicalGrid.sample(
            ChemicalChannel.SUGAR,
            this.maleFly.leftFrontTarsus.x,
            this.maleFly.leftFrontTarsus.y
        );
        const sugarR = this.chemicalGrid.sample(
            ChemicalChannel.SUGAR,
            this.maleFly.rightFrontTarsus.x,
            this.maleFly.rightFrontTarsus.y
        );
        const phero = this.chemicalGrid.sample(
            ChemicalChannel.PHEROMONE,
            this.maleFly.pos.x,
            this.maleFly.pos.y
        );

        return { sugarL, sugarR, phero };
    }

    public reset(): void {
        this.maleFly = new FlyAgent("male_01", FlySex.MALE, -60.0, 0.0, 0.0);
        this.femaleFly = new FlyAgent("female_01", FlySex.FEMALE, 80.0, 30.0, Math.PI);
        this.loomingThreat.isActive = false;
        this.loomingThreat.radiusPx = 0.0;
        this.chemicalGrid.clear();
        this.courtshipDurationSec = 0.0;
        this.copulationSuccess = false;
    }
}
