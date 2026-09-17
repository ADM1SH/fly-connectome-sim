import { describe, it, expect, beforeEach } from "vitest";
import { CompoundEyeSystem, LoomingThreat } from "../src/physics/optics";
import { Vec2 } from "../src/physics/fly_agent";

describe("Compound Eye Optics and Motion Tests", () => {
    let eyes: CompoundEyeSystem;

    beforeEach(() => {
        eyes = new CompoundEyeSystem(36);
    });

    it("initializes 72 total ommatidial channels with ambient luminance", () => {
        expect(eyes.ommatidiaPerEye).toBe(36);
        expect(eyes.leftOmmatidia.length).toBe(36);
        expect(eyes.rightOmmatidia.length).toBe(36);

        // Baseline luminance must be 1.0 (ambient)
        for (const omm of eyes.leftOmmatidia) {
            expect(omm.luminance).toBe(1.0);
        }
        for (const omm of eyes.rightOmmatidia) {
            expect(omm.luminance).toBe(1.0);
        }
    });

    it("detects dark conspecific silhouette in front of observer", () => {
        const observerPos: Vec2 = { x: 0, y: 0 };
        const observerHeading = 0.0; // Facing east (+X)

        const targetPos: Vec2 = { x: 60.0, y: 0.0 }; // Directly in front
        const targetRadius = 14.0;

        eyes.castRays(observerPos, observerHeading, targetPos, targetRadius, null);

        // Anterior ommatidia in both eyes should register reduced luminance
        const leftAnterior = eyes.leftOmmatidia[0];
        const rightAnterior = eyes.rightOmmatidia[0];

        expect(leftAnterior.luminance).toBeLessThan(0.8);
        expect(rightAnterior.luminance).toBeLessThan(0.8);
    });

    it("triggers LC4 looming detector on expanding predator shadow", () => {
        const observerPos: Vec2 = { x: 0, y: 0 };
        const observerHeading = 0.0;

        // Step 1: Initial small threat
        const threat: LoomingThreat = {
            pos: { x: 80.0, y: 0.0 },
            radiusPx: 10.0,
            isActive: true
        };
        eyes.castRays(observerPos, observerHeading, null, 0.0, threat);
        eyes.extractFeatures(0.01);

        // Step 2: Rapid expansion (looming)
        threat.radiusPx = 100.0;
        eyes.castRays(observerPos, observerHeading, null, 0.0, threat);
        const features = eyes.extractFeatures(0.01);

        // Rapid darkening should trigger high LC4 output
        expect(features.lc4LeftDrive).toBeGreaterThan(1.0);
        expect(features.lc4RightDrive).toBeGreaterThan(1.0);
    });

    it("activates LC10 target tracking for small static conspecific", () => {
        const observerPos: Vec2 = { x: 0, y: 0 };
        const observerHeading = 0.0;

        const targetPos: Vec2 = { x: 50.0, y: 15.0 }; // Small target in anterior-right field
        const targetRadius = 12.0;

        eyes.castRays(observerPos, observerHeading, targetPos, targetRadius, null);
        const features = eyes.extractFeatures(0.01);

        // LC10 tracking drive should be active
        expect(features.lc10RightDrive).toBeGreaterThan(0.2);
    });

    it("activates LPLC2 directional escape drive for asymmetrical looming threat on the left", () => {
        const observerPos: Vec2 = { x: 0, y: 0 };
        const observerHeading = 0.0;

        const threat: LoomingThreat = {
            pos: { x: 60.0, y: -30.0 }, // Threat in left visual field
            radiusPx: 10.0,
            isActive: true
        };
        eyes.castRays(observerPos, observerHeading, null, 0.0, threat);
        eyes.extractFeatures(0.01);

        // Loom on left
        threat.radiusPx = 100.0;
        eyes.castRays(observerPos, observerHeading, null, 0.0, threat);
        const features = eyes.extractFeatures(0.01);

        expect(features.lplc2LeftDrive).toBeGreaterThan(0.0);
    });
});
