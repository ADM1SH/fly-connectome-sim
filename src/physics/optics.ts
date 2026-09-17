import { Vec2 } from "./fly_agent";

export interface OmmatidiumReading {
    eye: "LEFT" | "RIGHT";
    index: number;
    relativeAngleRad: number;
    luminance: number; // 1.0 = light/empty background, 0.0 = dark silhouette
    previousLuminance: number;
    deltaLuminance: number;
}

export interface LoomingThreat {
    pos: Vec2;
    radiusPx: number;
    isActive: boolean;
}

export interface VisualFeatureOutputs {
    lc10LeftDrive: number;
    lc10RightDrive: number;
    lc4LeftDrive: number;
    lc4RightDrive: number;
    lplc2LeftDrive: number;
    lplc2RightDrive: number;
}

export class CompoundEyeSystem {
    public readonly ommatidiaPerEye: number;
    public readonly leftOmmatidia: OmmatidiumReading[];
    public readonly rightOmmatidia: OmmatidiumReading[];

    private readonly maxRayDistancePx = 280.0;

    constructor(ommatidiaPerEye = 36) {
        this.ommatidiaPerEye = ommatidiaPerEye;
        this.leftOmmatidia = [];
        this.rightOmmatidia = [];

        // Left eye: angles from +5 deg to -175 deg (relative to head heading)
        const leftStartRad = (5.0 * Math.PI) / 180.0;
        const leftEndRad = (-175.0 * Math.PI) / 180.0;
        for (let i = 0; i < ommatidiaPerEye; i++) {
            const frac = i / (ommatidiaPerEye - 1);
            const angle = leftStartRad + frac * (leftEndRad - leftStartRad);
            this.leftOmmatidia.push({
                eye: "LEFT",
                index: i,
                relativeAngleRad: angle,
                luminance: 1.0,
                previousLuminance: 1.0,
                deltaLuminance: 0.0
            });
        }

        // Right eye: angles from -5 deg to +175 deg
        const rightStartRad = (-5.0 * Math.PI) / 180.0;
        const rightEndRad = (175.0 * Math.PI) / 180.0;
        for (let i = 0; i < ommatidiaPerEye; i++) {
            const frac = i / (ommatidiaPerEye - 1);
            const angle = rightStartRad + frac * (rightEndRad - rightStartRad);
            this.rightOmmatidia.push({
                eye: "RIGHT",
                index: i,
                relativeAngleRad: angle,
                luminance: 1.0,
                previousLuminance: 1.0,
                deltaLuminance: 0.0
            });
        }
    }

    public castRays(
        observerPos: Vec2,
        observerHeadingRad: number,
        targetFlyPos: Vec2 | null,
        targetFlyRadiusPx: number,
        loomingThreat: LoomingThreat | null
    ): void {
        this.updateEyeRays(this.leftOmmatidia, observerPos, observerHeadingRad, targetFlyPos, targetFlyRadiusPx, loomingThreat);
        this.updateEyeRays(this.rightOmmatidia, observerPos, observerHeadingRad, targetFlyPos, targetFlyRadiusPx, loomingThreat);
    }

    private updateEyeRays(
        ommatidia: OmmatidiumReading[],
        observerPos: Vec2,
        observerHeadingRad: number,
        targetFlyPos: Vec2 | null,
        targetFlyRadiusPx: number,
        loomingThreat: LoomingThreat | null
    ): void {
        for (const omm of ommatidia) {
            omm.previousLuminance = omm.luminance;
            const globalRayAngle = observerHeadingRad + omm.relativeAngleRad;
            const rayDirX = Math.cos(globalRayAngle);
            const rayDirY = Math.sin(globalRayAngle);

            let hitLuminance = 1.0;

            // Check target conspecific silhouette
            if (targetFlyPos) {
                const toTargetX = targetFlyPos.x - observerPos.x;
                const toTargetY = targetFlyPos.y - observerPos.y;
                const distToTarget = Math.hypot(toTargetX, toTargetY);

                if (distToTarget < this.maxRayDistancePx) {
                    // Projection onto ray
                    const dot = toTargetX * rayDirX + toTargetY * rayDirY;
                    if (dot > 0) {
                        const perpDistSq = (distToTarget * distToTarget) - (dot * dot);
                        if (perpDistSq < targetFlyRadiusPx * targetFlyRadiusPx) {
                            // Dark silhouette contrast scaled by distance
                            const proximityFactor = Math.max(0.0, 1.0 - (distToTarget / this.maxRayDistancePx));
                            hitLuminance = Math.min(hitLuminance, 0.1 + (1.0 - proximityFactor) * 0.7);
                        }
                    }
                }
            }

            // Check looming shadow predator
            if (loomingThreat && loomingThreat.isActive) {
                const toThreatX = loomingThreat.pos.x - observerPos.x;
                const toThreatY = loomingThreat.pos.y - observerPos.y;
                const distToThreat = Math.hypot(toThreatX, toThreatY);

                const dot = toThreatX * rayDirX + toThreatY * rayDirY;
                if (dot > 0) {
                    const perpDistSq = (distToThreat * distToThreat) - (dot * dot);
                    if (perpDistSq < loomingThreat.radiusPx * loomingThreat.radiusPx) {
                        hitLuminance = Math.min(hitLuminance, 0.0); // Complete black shadow
                    }
                }
            }

            omm.luminance = hitLuminance;
            omm.deltaLuminance = omm.luminance - omm.previousLuminance;
        }
    }

    public extractFeatures(dtSec: number): VisualFeatureOutputs {
        let lc10Left = 0.0;
        let lc10Right = 0.0;
        let lc4Left = 0.0;
        let lc4Right = 0.0;
        let lplc2Left = 0.0;
        let lplc2Right = 0.0;

        // LC10: Small conspecific target detection in anterior field (first 14 ommatidia of each eye)
        for (let i = 0; i < 14; i++) {
            const leftOmm = this.leftOmmatidia[i];
            const rightOmm = this.rightOmmatidia[i];

            // Dark contrast detection
            const leftDarkness = 1.0 - leftOmm.luminance;
            const rightDarkness = 1.0 - rightOmm.luminance;

            if (leftDarkness > 0.15) {
                lc10Left += leftDarkness * 0.4;
            }
            if (rightDarkness > 0.15) {
                lc10Right += rightDarkness * 0.4;
            }

            // Looming detection: Rapid darkening rate (-deltaLuminance / dt)
            const leftDarkeningRate = -leftOmm.deltaLuminance / Math.max(0.001, dtSec);
            const rightDarkeningRate = -rightOmm.deltaLuminance / Math.max(0.001, dtSec);

            if (leftDarkeningRate > 1.2) {
                lc4Left += leftDarkeningRate * 0.25;
            }
            if (rightDarkeningRate > 1.2) {
                lc4Right += rightDarkeningRate * 0.25;
            }
        }

        // Broad looming across all ommatidia (rapid full-field darkening)
        let totalLeftDarkening = 0.0;
        let totalRightDarkening = 0.0;
        for (let i = 0; i < this.ommatidiaPerEye; i++) {
            const dL = -this.leftOmmatidia[i].deltaLuminance / Math.max(0.001, dtSec);
            const dR = -this.rightOmmatidia[i].deltaLuminance / Math.max(0.001, dtSec);
            if (dL > 0.8) totalLeftDarkening += dL;
            if (dR > 0.8) totalRightDarkening += dR;
        }

        if (totalLeftDarkening > 4.0 || totalRightDarkening > 4.0) {
            lc4Left = Math.max(lc4Left, totalLeftDarkening * 0.15);
            lc4Right = Math.max(lc4Right, totalRightDarkening * 0.15);

            // Asymmetric shear maps to LPLC2
            const shear = Math.abs(totalLeftDarkening - totalRightDarkening);
            if (totalLeftDarkening > totalRightDarkening) {
                lplc2Left = shear * 0.2;
            } else {
                lplc2Right = shear * 0.2;
            }
        }

        return {
            lc10LeftDrive: Math.min(8.0, lc10Left),
            lc10RightDrive: Math.min(8.0, lc10Right),
            lc4LeftDrive: Math.min(12.0, lc4Left),
            lc4RightDrive: Math.min(12.0, lc4Right),
            lplc2LeftDrive: Math.min(10.0, lplc2Left),
            lplc2RightDrive: Math.min(10.0, lplc2Right)
        };
    }
}
