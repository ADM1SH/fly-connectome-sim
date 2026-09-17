import { NeuromodulatorState } from "./types";

export interface NeuromodulatorPreset {
    name: string;
    description: string;
    state: NeuromodulatorState;
}

export const NEUROMODULATOR_PRESETS: NeuromodulatorPreset[] = [
    {
        name: "Baseline",
        description: "Standard physiological baseline in adult male Drosophila",
        state: { dopamine: 1.0, octopamine: 1.0, serotonin: 1.0 }
    },
    {
        name: "Courtship Drive",
        description: "High dopamine elevates P1 sensitivity and pursuit persistence",
        state: { dopamine: 2.2, octopamine: 1.1, serotonin: 0.6 }
    },
    {
        name: "Starvation",
        description: "High octopamine boosts sensory sensitivity and sugar foraging",
        state: { dopamine: 0.8, octopamine: 2.4, serotonin: 0.5 }
    },
    {
        name: "Alarm State",
        description: "Heightened vigilance lowering escape thresholds",
        state: { dopamine: 0.5, octopamine: 2.6, serotonin: 0.8 }
    },
    {
        name: "Satiety",
        description: "Elevated serotonin stabilizes circuits and reduces locomotion",
        state: { dopamine: 0.7, octopamine: 0.6, serotonin: 2.1 }
    }
];
