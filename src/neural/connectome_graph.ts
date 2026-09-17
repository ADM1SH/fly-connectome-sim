import {
    NeuronDef,
    SynapseDef,
    NeuronCategory,
    Hemisphere,
    Neurotransmitter
} from "./types";

export interface ConnectomeData {
    neurons: NeuronDef[];
    synapses: SynapseDef[];
}

export function buildConnectome(): ConnectomeData {
    const neurons: NeuronDef[] = [
        // Visual Lobula Columnar Channels (Paper 03)
        {
            id: "LC10_L",
            label: "LC10 [Left]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 12.0,
            refractoryPeriodMs: 2.0,
            description: "Lobula Columnar 10 left: Small conspecific target visual tracking channel"
        },
        {
            id: "LC10_R",
            label: "LC10 [Right]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 12.0,
            refractoryPeriodMs: 2.0,
            description: "Lobula Columnar 10 right: Small conspecific target visual tracking channel"
        },
        {
            id: "LC4_L",
            label: "LC4 [Left]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -48.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 8.0,
            refractoryPeriodMs: 1.5,
            description: "Lobula Columnar 4 left: Rapid isotropic looming predator expansion detector"
        },
        {
            id: "LC4_R",
            label: "LC4 [Right]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -48.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 8.0,
            refractoryPeriodMs: 1.5,
            description: "Lobula Columnar 4 right: Rapid isotropic looming predator expansion detector"
        },
        {
            id: "LPLC2_L",
            label: "LPLC2 [Left]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -47.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 9.0,
            refractoryPeriodMs: 1.5,
            description: "Lobula Plate Lobula Columnar 2 left: Directional looming shear detector"
        },
        {
            id: "LPLC2_R",
            label: "LPLC2 [Right]",
            category: NeuronCategory.SENSORY_VISUAL,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -47.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 9.0,
            refractoryPeriodMs: 1.5,
            description: "Lobula Plate Lobula Columnar 2 right: Directional looming shear detector"
        },
        {
            id: "AOTU008_L",
            label: "AOTU008 [Left]",
            category: NeuronCategory.INTERNEURON,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 14.0,
            refractoryPeriodMs: 2.0,
            description: "Anterior Optic Tubercle interneuron left: Relays LC10 tracking signals to P1"
        },
        {
            id: "AOTU008_R",
            label: "AOTU008 [Right]",
            category: NeuronCategory.INTERNEURON,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 14.0,
            refractoryPeriodMs: 2.0,
            description: "Anterior Optic Tubercle interneuron right: Relays LC10 tracking signals to P1"
        },

        // Gustatory Tarsal Channels (Paper 02)
        {
            id: "GRN_Sugar_L",
            label: "GRN Sugar [Left]",
            category: NeuronCategory.SENSORY_GUSTATORY,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 15.0,
            refractoryPeriodMs: 2.5,
            description: "Foreleg tarsal gustatory receptor neuron: Sweet nutrient detection"
        },
        {
            id: "GRN_Sugar_R",
            label: "GRN Sugar [Right]",
            category: NeuronCategory.SENSORY_GUSTATORY,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 15.0,
            refractoryPeriodMs: 2.5,
            description: "Foreleg tarsal gustatory receptor neuron: Sweet nutrient detection"
        },
        {
            id: "GRN_Bitter",
            label: "GRN Bitter",
            category: NeuronCategory.SENSORY_GUSTATORY,
            hemisphere: Hemisphere.CENTRAL,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -44.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 15.0,
            refractoryPeriodMs: 2.5,
            description: "Tarsal gustatory receptor neuron: Repellent and toxin detection"
        },
        {
            id: "GRN_Pheromone_Female",
            label: "GRN Phero [Female]",
            category: NeuronCategory.SENSORY_GUSTATORY,
            hemisphere: Hemisphere.CENTRAL,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 16.0,
            refractoryPeriodMs: 2.5,
            description: "Foreleg tarsal chemosensory neuron: Female cuticular hydrocarbon receptor"
        },
        {
            id: "SEZ_PN_Sweet",
            label: "SEZ PN [Sweet]",
            category: NeuronCategory.INTERNEURON,
            hemisphere: Hemisphere.CENTRAL,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 12.0,
            refractoryPeriodMs: 2.0,
            description: "Subesophageal Zone projection neuron: Ascending sweet feeding drive"
        },
        {
            id: "SEZ_PN_Phero",
            label: "SEZ PN [Pheromone]",
            category: NeuronCategory.INTERNEURON,
            hemisphere: Hemisphere.CENTRAL,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -47.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 14.0,
            refractoryPeriodMs: 2.0,
            description: "Subesophageal Zone projection neuron: Ascending female aphrodisiac signal"
        },

        // Central Integration and Action Selection (Paper 01)
        {
            id: "P1_L",
            label: "P1 Courtship Hub [Left]",
            category: NeuronCategory.CENTRAL_COMMAND,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -68.0,
            membraneTimeConstantMs: 20.0,
            refractoryPeriodMs: 2.0,
            description: "Fruitless-positive male courtship master command cluster left"
        },
        {
            id: "P1_R",
            label: "P1 Courtship Hub [Right]",
            category: NeuronCategory.CENTRAL_COMMAND,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -68.0,
            membraneTimeConstantMs: 20.0,
            refractoryPeriodMs: 2.0,
            description: "Fruitless-positive male courtship master command cluster right"
        },
        {
            id: "GF_L",
            label: "Giant Fiber [Left]",
            category: NeuronCategory.CENTRAL_COMMAND,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -50.0,
            resetPotentialMv: -72.0,
            membraneTimeConstantMs: 6.0,
            refractoryPeriodMs: 3.0,
            description: "Giant Fiber interneuron left: Ballistic jump-and-flight escape command"
        },
        {
            id: "GF_R",
            label: "Giant Fiber [Right]",
            category: NeuronCategory.CENTRAL_COMMAND,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -50.0,
            resetPotentialMv: -72.0,
            membraneTimeConstantMs: 6.0,
            refractoryPeriodMs: 3.0,
            description: "Giant Fiber interneuron right: Ballistic jump-and-flight escape command"
        },

        // Descending Motor Pathways (Papers 01, 02, 03)
        {
            id: "pIP10_L",
            label: "pIP10 Wing Song [Left]",
            category: NeuronCategory.DESCENDING_MOTOR,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 10.0,
            refractoryPeriodMs: 3.5,
            description: "Descending interneuron left: Drives left wing unilateral extension and pulse song"
        },
        {
            id: "pIP10_R",
            label: "pIP10 Wing Song [Right]",
            category: NeuronCategory.DESCENDING_MOTOR,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: true,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -46.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 10.0,
            refractoryPeriodMs: 3.5,
            description: "Descending interneuron right: Drives right wing unilateral extension and pulse song"
        },
        {
            id: "DNg13_L",
            label: "DNg13 Steering [Left]",
            category: NeuronCategory.DESCENDING_MOTOR,
            hemisphere: Hemisphere.LEFT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 10.0,
            refractoryPeriodMs: 2.0,
            description: "Descending steering neuron left: Generates clockwise rotational torque"
        },
        {
            id: "DNg13_R",
            label: "DNg13 Steering [Right]",
            category: NeuronCategory.DESCENDING_MOTOR,
            hemisphere: Hemisphere.RIGHT,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -45.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 10.0,
            refractoryPeriodMs: 2.0,
            description: "Descending steering neuron right: Generates counter-clockwise rotational torque"
        },
        {
            id: "MN_Proboscis",
            label: "MN Proboscis [Feeding]",
            category: NeuronCategory.DESCENDING_MOTOR,
            hemisphere: Hemisphere.CENTRAL,
            isSexuallyDimorphic: false,
            restingPotentialMv: -65.0,
            thresholdPotentialMv: -44.0,
            resetPotentialMv: -70.0,
            membraneTimeConstantMs: 12.0,
            refractoryPeriodMs: 2.5,
            description: "Subesophageal motor neuron: Proboscis extension reflex and feeding ingestion"
        }
    ];

    const synapses: SynapseDef[] = [
        // Visual Lobula Columnar Feedforward Connections
        { preId: "LC10_L", postId: "AOTU008_L", weight: 3.2, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.0, synapseCount: 42 },
        { preId: "LC10_R", postId: "AOTU008_R", weight: 3.2, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.0, synapseCount: 42 },
        { preId: "AOTU008_L", postId: "P1_L", weight: 2.4, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 35 },
        { preId: "AOTU008_R", postId: "P1_R", weight: 2.4, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 35 },

        // Cross-Hemisphere Tracking to Steering
        { preId: "LC10_L", postId: "DNg13_R", weight: 2.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.2, synapseCount: 28 },
        { preId: "LC10_R", postId: "DNg13_L", weight: 2.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.2, synapseCount: 28 },

        // Looming Threat Connections to Giant Fiber
        { preId: "LC4_L", postId: "GF_L", weight: 5.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.8, synapseCount: 88 },
        { preId: "LC4_R", postId: "GF_R", weight: 5.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.8, synapseCount: 88 },
        { preId: "LPLC2_L", postId: "GF_L", weight: 4.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.8, synapseCount: 64 },
        { preId: "LPLC2_R", postId: "GF_R", weight: 4.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.8, synapseCount: 64 },
        { preId: "GF_L", postId: "GF_R", weight: 4.0, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.5, synapseCount: 50 },
        { preId: "GF_R", postId: "GF_L", weight: 4.0, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 0.5, synapseCount: 50 },

        // Gustatory and Chemosensory Connections
        { preId: "GRN_Sugar_L", postId: "SEZ_PN_Sweet", weight: 3.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 30 },
        { preId: "GRN_Sugar_R", postId: "SEZ_PN_Sweet", weight: 3.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 30 },
        { preId: "SEZ_PN_Sweet", postId: "MN_Proboscis", weight: 4.2, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.2, synapseCount: 45 },

        { preId: "GRN_Pheromone_Female", postId: "SEZ_PN_Phero", weight: 4.0, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 48 },
        { preId: "SEZ_PN_Phero", postId: "P1_L", weight: 3.6, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 2.0, synapseCount: 52 },
        { preId: "SEZ_PN_Phero", postId: "P1_R", weight: 3.6, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 2.0, synapseCount: 52 },

        // P1 Courtship Cluster Reciprocal Excitation
        { preId: "P1_L", postId: "P1_R", weight: 2.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.0, synapseCount: 36 },
        { preId: "P1_R", postId: "P1_L", weight: 2.5, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.0, synapseCount: 36 },

        // P1 Output to Wing Song (pIP10) and Steering (DNg13)
        { preId: "P1_L", postId: "pIP10_L", weight: 3.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.2, synapseCount: 40 },
        { preId: "P1_R", postId: "pIP10_R", weight: 3.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.2, synapseCount: 40 },
        { preId: "P1_L", postId: "DNg13_L", weight: 1.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 22 },
        { preId: "P1_R", postId: "DNg13_R", weight: 1.8, transmitter: Neurotransmitter.ACETYLCHOLINE, conductionDelayMs: 1.5, synapseCount: 22 },

        // Mutual Lateral Inhibition Between Courtship and Escape
        // Strong P1 activation dampens low-level noise in GF
        { preId: "P1_L", postId: "GF_L", weight: -1.5, transmitter: Neurotransmitter.GABA, conductionDelayMs: 1.0, synapseCount: 20 },
        { preId: "P1_R", postId: "GF_R", weight: -1.5, transmitter: Neurotransmitter.GABA, conductionDelayMs: 1.0, synapseCount: 20 },

        // Emergency Override: Giant Fiber potently silences P1 to abort courtship
        { preId: "GF_L", postId: "P1_L", weight: -5.0, transmitter: Neurotransmitter.GABA, conductionDelayMs: 0.6, synapseCount: 65 },
        { preId: "GF_R", postId: "P1_R", weight: -5.0, transmitter: Neurotransmitter.GABA, conductionDelayMs: 0.6, synapseCount: 65 },

        // Bitter Aversive Circuit Inhibits Feeding and P1
        { preId: "GRN_Bitter", postId: "MN_Proboscis", weight: -4.5, transmitter: Neurotransmitter.GABA, conductionDelayMs: 1.0, synapseCount: 35 },
        { preId: "GRN_Bitter", postId: "P1_L", weight: -3.0, transmitter: Neurotransmitter.GABA, conductionDelayMs: 1.2, synapseCount: 25 },
        { preId: "GRN_Bitter", postId: "P1_R", weight: -3.0, transmitter: Neurotransmitter.GABA, conductionDelayMs: 1.2, synapseCount: 25 }
    ];

    return { neurons, synapses };
}
