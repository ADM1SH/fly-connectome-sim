import { describe, it, expect, beforeEach } from "vitest";
import { FlyAgent, FlySex } from "../src/physics/fly_agent";

describe("FlyAgent Kinematics & Biomechanics Tests", () => {
    let maleFly: FlyAgent;
    let femaleFly: FlyAgent;

    beforeEach(() => {
        maleFly = new FlyAgent("male_test", FlySex.MALE, 0.0, 0.0, 0.0);
        femaleFly = new FlyAgent("female_test", FlySex.FEMALE, 10.0, 20.0, Math.PI / 2);
    });

    it("initializes male and female flies with sex-specific dimensions", () => {
        expect(maleFly.sex).toBe(FlySex.MALE);
        expect(maleFly.bodyLengthPx).toBe(24.0);

        expect(femaleFly.sex).toBe(FlySex.FEMALE);
        expect(femaleFly.bodyLengthPx).toBe(28.0);

        expect(maleFly.linearVelocity).toBe(0.0);
        expect(maleFly.angularVelocity).toBe(0.0);
    });

    it("updates heading and position forward based on linear velocity", () => {
        maleFly.linearVelocity = 100.0; // 100 px/sec forward (+X)
        maleFly.update(0.1, 280.0); // 100 ms

        expect(maleFly.pos.x).toBeCloseTo(10.0, 1);
        expect(maleFly.pos.y).toBeCloseTo(0.0, 1);
    });

    it("normalizes heading angle into [-PI, PI]", () => {
        maleFly.angularVelocity = 20.0; // Rapid clockwise rotation
        maleFly.update(1.0, 280.0);

        expect(maleFly.headingRad).toBeGreaterThanOrEqual(-Math.PI);
        expect(maleFly.headingRad).toBeLessThanOrEqual(Math.PI);
    });

    it("constrains position within circular arena boundary", () => {
        maleFly.pos = { x: 270.0, y: 0.0 };
        maleFly.linearVelocity = 200.0; // Walking into wall
        maleFly.update(0.5, 280.0);

        const dist = Math.hypot(maleFly.pos.x, maleFly.pos.y);
        const maxAllowed = 280.0 - 24.0 * 0.6;
        expect(dist).toBeLessThanOrEqual(maxAllowed + 0.01);
    });

    it("calculates front leg tarsal coordinates relative to heading", () => {
        maleFly.pos = { x: 50.0, y: 50.0 };
        maleFly.headingRad = 0.0; // Facing east
        maleFly.update(0.01, 280.0);

        // Tarsus should project forward in +X
        expect(maleFly.leftFrontTarsus.x).toBeGreaterThan(50.0);
        expect(maleFly.rightFrontTarsus.x).toBeGreaterThan(50.0);

        // Left tarsus should have smaller Y than right tarsus
        expect(maleFly.leftFrontTarsus.y).toBeLessThan(maleFly.rightFrontTarsus.y);
    });

    it("generates alternating tripod gait leg positions", () => {
        maleFly.linearVelocity = 40.0;
        maleFly.update(0.1, 280.0);

        const legs = maleFly.getLegPositions();
        expect(legs.length).toBe(6); // 3 left, 3 right

        // Verify stance phase exists
        const stanceCount = legs.filter((l) => l.isStance).length;
        const swingCount = legs.filter((l) => !l.isStance).length;
        expect(stanceCount + swingCount).toBe(6);
    });

    it("handles unilateral wing extension and tremor during courtship song", () => {
        maleFly.isSingingLeft = true;
        maleFly.isSingingRight = false;
        maleFly.update(0.05, 280.0);

        // Left wing should abduct toward ~ -75 degrees
        expect(maleFly.leftWingAngleDeg).toBeLessThan(-50.0);
        // Right wing should remain near resting position
        expect(maleFly.rightWingAngleDeg).toBeCloseTo(12.0, 0);

        // When song terminates, wing returns smoothly toward resting position
        maleFly.isSingingLeft = false;
        maleFly.update(0.5, 280.0);
        expect(maleFly.leftWingAngleDeg).toBeGreaterThan(-30.0);
    });

    it("handles unilateral right wing extension and tremor during courtship song", () => {
        maleFly.isSingingLeft = false;
        maleFly.isSingingRight = true;
        maleFly.update(0.05, 280.0);

        // Right wing should abduct toward ~ 75 degrees
        expect(maleFly.rightWingAngleDeg).toBeGreaterThan(50.0);
        // Left wing should remain near resting position
        expect(maleFly.leftWingAngleDeg).toBeCloseTo(-12.0, 0);

        // When song terminates, wing returns smoothly toward resting position
        maleFly.isSingingRight = false;
        maleFly.update(0.5, 280.0);
        expect(maleFly.rightWingAngleDeg).toBeLessThan(30.0);
    });
});
