export interface Vec2 {
    x: number;
    y: number;
}

export enum FlySex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface LegPosition {
    baseX: number;
    baseY: number;
    tipX: number;
    tipY: number;
    isStance: boolean;
}

export class FlyAgent {
    public id: string;
    public sex: FlySex;
    public pos: Vec2;
    public headingRad: number;
    public linearVelocity: number;
    public angularVelocity: number;
    public bodyLengthPx: number;

    // Biomechanical states
    public gaitPhase: number;
    public leftWingAngleDeg: number;
    public rightWingAngleDeg: number;
    public isSingingLeft: boolean;
    public isSingingRight: boolean;
    public proboscisExtended: boolean;

    // Tarsal contacts
    public leftFrontTarsus: Vec2;
    public rightFrontTarsus: Vec2;

    constructor(id: string, sex: FlySex, startX: number, startY: number, startHeadingRad: number) {
        this.id = id;
        this.sex = sex;
        this.pos = { x: startX, y: startY };
        this.headingRad = startHeadingRad;
        this.linearVelocity = 0.0;
        this.angularVelocity = 0.0;
        this.bodyLengthPx = sex === FlySex.MALE ? 24.0 : 28.0;

        this.gaitPhase = 0.0;
        this.leftWingAngleDeg = -12.0;
        this.rightWingAngleDeg = 12.0;
        this.isSingingLeft = false;
        this.isSingingRight = false;
        this.proboscisExtended = false;

        this.leftFrontTarsus = { x: 0, y: 0 };
        this.rightFrontTarsus = { x: 0, y: 0 };
        this.updateTarsusPositions();
    }

    public update(dtSec: number, arenaRadiusPx: number): void {
        // Integrate heading and position
        this.headingRad += this.angularVelocity * dtSec;
        // Normalize heading into [-PI, PI]
        this.headingRad = Math.atan2(Math.sin(this.headingRad), Math.cos(this.headingRad));

        const forwardX = Math.cos(this.headingRad);
        const forwardY = Math.sin(this.headingRad);

        this.pos.x += forwardX * this.linearVelocity * dtSec;
        this.pos.y += forwardY * this.linearVelocity * dtSec;

        // Boundary collision with circular arena
        const distFromCenter = Math.hypot(this.pos.x, this.pos.y);
        const maxDist = arenaRadiusPx - this.bodyLengthPx * 0.6;
        if (distFromCenter > maxDist) {
            const angleToCenter = Math.atan2(this.pos.y, this.pos.x);
            this.pos.x = Math.cos(angleToCenter) * maxDist;
            this.pos.y = Math.sin(angleToCenter) * maxDist;
            // Dampen velocity on collision
            this.linearVelocity *= 0.5;
        }

        // Advance tripod gait phase proportional to walking speed
        const speed = Math.abs(this.linearVelocity);
        this.gaitPhase += speed * dtSec * 0.25;

        // Wing vibration dynamics
        if (this.isSingingLeft) {
            // Abducted to ~75 degrees with 200 Hz sinusoidal tremor
            const tremor = Math.sin(Date.now() * 0.2) * 8.0;
            this.leftWingAngleDeg = -75.0 + tremor;
        } else {
            // Smoothly return to rest position
            this.leftWingAngleDeg += (-12.0 - this.leftWingAngleDeg) * Math.min(1.0, dtSec * 15.0);
        }

        if (this.isSingingRight) {
            const tremor = Math.sin(Date.now() * 0.2) * 8.0;
            this.rightWingAngleDeg = 75.0 + tremor;
        } else {
            this.rightWingAngleDeg += (12.0 - this.rightWingAngleDeg) * Math.min(1.0, dtSec * 15.0);
        }

        this.updateTarsusPositions();
    }

    private updateTarsusPositions(): void {
        const cosH = Math.cos(this.headingRad);
        const sinH = Math.sin(this.headingRad);
        const perpX = -sinH;
        const perpY = cosH;

        const forwardOffset = this.bodyLengthPx * 0.7;
        const lateralOffset = this.bodyLengthPx * 0.35;

        this.leftFrontTarsus = {
            x: this.pos.x + cosH * forwardOffset - perpX * lateralOffset,
            y: this.pos.y + sinH * forwardOffset - perpY * lateralOffset
        };

        this.rightFrontTarsus = {
            x: this.pos.x + cosH * forwardOffset + perpX * lateralOffset,
            y: this.pos.y + sinH * forwardOffset + perpY * lateralOffset
        };
    }

    public getLegPositions(): LegPosition[] {
        const legs: LegPosition[] = [];
        const cosH = Math.cos(this.headingRad);
        const sinH = Math.sin(this.headingRad);
        const perpX = -sinH;
        const perpY = cosH;

        // 3 legs on each side: front, mid, hind
        const legOffsets = [
            { longitudinal: 0.3, lateral: 0.28, reach: 14.0, phaseOffset: 0 },
            { longitudinal: 0.0, lateral: 0.35, reach: 16.0, phaseOffset: Math.PI },
            { longitudinal: -0.3, lateral: 0.32, reach: 18.0, phaseOffset: 0 }
        ];

        for (let i = 0; i < 3; i++) {
            const cfg = legOffsets[i];

            // Left leg
            const leftBaseX = this.pos.x + cosH * (cfg.longitudinal * this.bodyLengthPx) - perpX * (cfg.lateral * this.bodyLengthPx);
            const leftBaseY = this.pos.y + sinH * (cfg.longitudinal * this.bodyLengthPx) - perpY * (cfg.lateral * this.bodyLengthPx);

            const leftCycle = Math.sin(this.gaitPhase + cfg.phaseOffset);
            const leftStance = leftCycle > 0;
            const leftSwingOffset = leftStance ? -3.0 : 4.0;

            const leftTipX = leftBaseX - perpX * cfg.reach + cosH * leftSwingOffset;
            const leftTipY = leftBaseY - perpY * cfg.reach + sinH * leftSwingOffset;

            legs.push({
                baseX: leftBaseX,
                baseY: leftBaseY,
                tipX: leftTipX,
                tipY: leftTipY,
                isStance: leftStance
            });

            // Right leg (opposite phase in tripod gait)
            const rightBaseX = this.pos.x + cosH * (cfg.longitudinal * this.bodyLengthPx) + perpX * (cfg.lateral * this.bodyLengthPx);
            const rightBaseY = this.pos.y + sinH * (cfg.longitudinal * this.bodyLengthPx) + perpY * (cfg.lateral * this.bodyLengthPx);

            const rightCycle = Math.sin(this.gaitPhase + cfg.phaseOffset + Math.PI);
            const rightStance = rightCycle > 0;
            const rightSwingOffset = rightStance ? -3.0 : 4.0;

            const rightTipX = rightBaseX + perpX * cfg.reach + cosH * rightSwingOffset;
            const rightTipY = rightBaseY + perpY * cfg.reach + sinH * rightSwingOffset;

            legs.push({
                baseX: rightBaseX,
                baseY: rightBaseY,
                tipX: rightTipX,
                tipY: rightTipY,
                isStance: rightStance
            });
        }

        return legs;
    }
}
