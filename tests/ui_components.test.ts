import { describe, it, expect } from "vitest";
import { createMetricCard, updateMetricCard, createStatusBadge } from "../src/ui/components";
import { COLORS, RADII, SPACING } from "../src/design/tokens";

describe("UI Components and Design Tokens Tests", () => {
    it("validates design tokens adhere strictly to DESIGN.md specification", () => {
        // Pitch Black Canvas
        expect(COLORS.surface).toBe("#000000");
        expect(COLORS.surfaceContainerLow).toBe("#050505");
        expect(COLORS.surfaceContainer).toBe("#0A0A0C");
        expect(COLORS.surfaceContainerHigh).toBe("#121215");

        // Primary Acid Green Accent
        expect(COLORS.primary).toBe("#00FF66");
        expect(COLORS.primaryContainer).toBe("#002B11");
        expect(COLORS.onPrimaryContainer).toBe("#66FFA3");

        // Structural Outlines
        expect(COLORS.outline).toBe("#262933");
        expect(COLORS.outlineVariant).toBe("#1A1D24");

        // Radii
        expect(RADII.default).toBe("4px");
        expect(RADII.sm).toBe("2px");
        expect(RADII.full).toBe("9999px");

        // Spacing multiples of 4px
        expect(SPACING.base).toBe("4px");
        expect(SPACING.gutter).toBe("16px");
        expect(SPACING.margin).toBe("24px");
    });

    it("creates metric card DOM structure properly", () => {
        const card = createMetricCard("test-metric", "Spike Rate", "142", "Hz");
        document.body.appendChild(card);

        expect(card.id).toBe("test-metric");
        expect(card.style.backgroundColor).toBe("#0A0A0C");
        expect(card.style.border).toBe("1px solid #1A1D24");
        expect(card.style.borderRadius).toBe("4px");

        const labelElem = card.querySelector(".label-caps");
        expect(labelElem?.textContent).toBe("SPIKE RATE");

        const valElem = card.querySelector(".metric-value");
        expect(valElem?.textContent).toBe("142");

        // Update card value
        updateMetricCard("test-metric", "280");
        expect(valElem?.textContent).toBe("280");

        // Update nonexistent card returns cleanly
        expect(() => updateMetricCard("nonexistent-id", "999")).not.toThrow();

        // Update card without .metric-value child
        const emptyCard = document.createElement("div");
        emptyCard.id = "empty-metric";
        document.body.appendChild(emptyCard);
        expect(() => updateMetricCard("empty-metric", "999")).not.toThrow();
        emptyCard.remove();

        document.body.removeChild(card);
    });

    it("generates status badges with semantic colors", () => {
        const activeBadge = createStatusBadge("COURTING", "active");
        expect(activeBadge.style.color).toBe("#66FFA3");
        expect(activeBadge.style.border).toBe("1px solid #00FF66");

        const dangerBadge = createStatusBadge("ESCAPE", "danger");
        expect(dangerBadge.style.color).toBe("#FFA8B3");
        expect(dangerBadge.style.border).toBe("1px solid #FF334B");

        const idleBadge = createStatusBadge("IDLE", "idle");
        expect(idleBadge.style.color).toBe("#8A909E");
    });
});
