import { ConnectomeData } from "../neural/connectome_graph";
import { LifEngine } from "../neural/lif_engine";
import { Neurotransmitter } from "../neural/types";

interface NodeLayout {
    id: string;
    label: string;
    x: number;
    y: number;
    radius: number;
    category: string;
    lastSpikeTimeMs: number;
}

export class GraphCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private nodes: Map<string, NodeLayout>;
    private connectome: ConnectomeData;

    constructor(canvas: HTMLCanvasElement, connectome: ConnectomeData) {
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Failed to get 2D rendering context");
        }
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.connectome = connectome;
        this.nodes = new Map();

        this.computeLayout();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    private computeLayout(): void {
        const w = this.width;
        const h = this.height;

        // 4 functional horizontal or vertical tiers
        // Tier 1: Sensory Inputs (top)
        const tier1Ids = [
            "LC10_L", "LC4_L", "LPLC2_L", "GRN_Sugar_L",
            "GRN_Pheromone_Female", "GRN_Bitter", "GRN_Sugar_R",
            "LPLC2_R", "LC4_R", "LC10_R"
        ];

        // Tier 2: Interneurons
        const tier2Ids = [
            "AOTU008_L", "SEZ_PN_Sweet", "SEZ_PN_Phero", "AOTU008_R"
        ];

        // Tier 3: Central Command Hubs
        const tier3Ids = [
            "GF_L", "P1_L", "P1_R", "GF_R"
        ];

        // Tier 4: Descending Motor Outputs
        const tier4Ids = [
            "DNg13_L", "pIP10_L", "MN_Proboscis", "pIP10_R", "DNg13_R"
        ];

        const assignTier = (ids: string[], yFrac: number) => {
            const y = h * yFrac;
            const count = ids.length;
            for (let i = 0; i < count; i++) {
                const id = ids[i];
                const x = (w / (count + 1)) * (i + 1);
                const def = this.connectome.neurons.find((n) => n.id === id);
                if (def) {
                    this.nodes.set(id, {
                        id,
                        label: def.id,
                        x,
                        y,
                        radius: 7.0,
                        category: def.category,
                        lastSpikeTimeMs: -1000.0
                    });
                }
            }
        };

        assignTier(tier1Ids, 0.14);
        assignTier(tier2Ids, 0.38);
        assignTier(tier3Ids, 0.65);
        assignTier(tier4Ids, 0.90);
    }

    public getNodeAtPosition(px: number, py: number): string | null {
        for (const [id, node] of this.nodes.entries()) {
            const dist = Math.hypot(px - node.x, py - node.y);
            if (dist <= node.radius + 4) {
                return id;
            }
        }
        return null;
    }

    public render(lif: LifEngine): void {
        const ctx = this.ctx;
        const nowMs = lif.getCurrentTimeMs();

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, this.width, this.height);

        // Header
        ctx.fillStyle = "#8A909E";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.fillText("SYNAPTIC CIRCUIT ARCHITECTURE [PAPERS 01, 02, 03 CONNECTOME]", 8, 14);

        // Tier labels
        ctx.fillStyle = "#262933";
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.fillText("TIER 1: SENSORY AFFERENTS", 8, this.height * 0.14 - 12);
        ctx.fillText("TIER 2: RELAY INTERNEURONS", 8, this.height * 0.38 - 12);
        ctx.fillText("TIER 3: COMMAND HUBS (P1 / GF)", 8, this.height * 0.65 - 12);
        ctx.fillText("TIER 4: DESCENDING MOTOR DRIVERS", 8, this.height * 0.90 - 12);

        // Update node spike times
        for (const [id, node] of this.nodes.entries()) {
            const st = lif.getNeuronState(id);
            if (st && st.lastSpikeTimeMs > node.lastSpikeTimeMs) {
                node.lastSpikeTimeMs = st.lastSpikeTimeMs;
            }
        }

        // Draw Synaptic Connections
        for (const syn of this.connectome.synapses) {
            const preNode = this.nodes.get(syn.preId);
            const postNode = this.nodes.get(syn.postId);
            if (!preNode || !postNode) continue;

            const isGaba = syn.transmitter === Neurotransmitter.GABA;
            const timeSincePreSpike = nowMs - preNode.lastSpikeTimeMs;
            const isConducting = timeSincePreSpike >= 0 && timeSincePreSpike < 15.0;

            ctx.beginPath();
            ctx.moveTo(preNode.x, preNode.y);
            ctx.lineTo(postNode.x, postNode.y);

            if (isConducting) {
                ctx.strokeStyle = isGaba ? "#FF334B" : "#00FF66";
                ctx.lineWidth = 1.8;
            } else {
                ctx.strokeStyle = isGaba ? "rgba(255, 51, 75, 0.18)" : "rgba(38, 41, 51, 0.4)";
                ctx.lineWidth = 0.8;
            }
            ctx.stroke();
        }

        // Draw Nodes
        for (const [, node] of this.nodes.entries()) {
            const timeSinceSpike = nowMs - node.lastSpikeTimeMs;
            const isSpiking = timeSinceSpike >= 0 && timeSinceSpike < 20.0;
            const st = lif.getNeuronState(node.id);

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

            if (isSpiking) {
                ctx.fillStyle = node.id.startsWith("GF") || node.id.startsWith("LC4") ? "#FF334B" : "#00FF66";
                ctx.shadowColor = ctx.fillStyle;
                ctx.shadowBlur = 8;
            } else {
                ctx.fillStyle = "#0A0A0C";
                ctx.shadowBlur = 0;
            }
            ctx.fill();

            ctx.strokeStyle = isSpiking ? "#FFFFFF" : "#262933";
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw micro label
            ctx.fillStyle = isSpiking ? "#00FF66" : "#8A909E";
            ctx.font = "8px 'JetBrains Mono', monospace";
            ctx.textAlign = "center";
            ctx.fillText(node.label, node.x, node.y - node.radius - 3);

            // Draw firing rate badge if active
            if (st && st.firingRateHz > 2.0) {
                ctx.fillStyle = "#66FFA3";
                ctx.fillText(`${st.firingRateHz.toFixed(0)}Hz`, node.x, node.y + node.radius + 9);
            }
        }
    }
}
