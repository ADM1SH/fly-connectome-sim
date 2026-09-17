# Drosophila Brain Visual Pathway Organization: From Photoreceptors to Central Networks

## 1. Metadata
- Title: The organization of visual pathways in the Drosophila brain
- Authors: Judith Hoeller, Arthur Zhao, Aljoscha Nern, Edward M. Rogers, Sandro Romani, Michael B. Reiser
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5552-5570.e1-e11
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.08.014
- Lead Contact: Michael B. Reiser (reiserm@janelia.hhmi.org)

## 2. Problem Statement
Visual processing transforms high-dimensional photoreceptor arrays into actionable sensory features (motion direction, loom detection, spectral classification, object tracking). In insects and vertebrates alike, visual processing occurs through hierarchical retinotopic neuropils. Fundamental questions remained unresolved:
1. How deeply into the central brain do organized visual signals penetrate beyond primary projection hubs.
2. How feedforward visual pathways interact with massive recurrent feedback networks.
3. How different visual feature streams (ON versus OFF contrast, chromatic channels, wide-field motion) segregate or merge across descending motor-control pathways.

## 3. Core Idea / Contribution
Using the complete male Drosophila connectome, the authors performed a brain-wide tracing of visual information flow from peripheral photoreceptors through the four optic lobe neuropils (lamina, medulla, lobula, lobula plate) and deep into the central brain.

Key technical contributions:
1. Global Visual Hierarchy: Demonstrated visual information reaches over 50% of all central brain neurons through direct and multi-hop pathways.
2. Feedforward Core Isolation: By separating feedforward from feedback and lateral connections, the authors isolated an acyclic, forward-directed network retaining 67% of all synaptic connections in the optic lobe.
3. Quantitative Visual Input Contribution (VIC): Formulated the VIC metric to evaluate the fractional input weight delivered by specific upstream visual channels (L1, L2, L3, R7, R8, HB eyelet) to every central neuron.
4. Preserved Retinotopy in Deep Brain Centers: Proved fine-scale spatial sampling and topographic layout persist multiple synapses downstream of visual projection neurons, directly structuring premotor and central complex networks.

## 4. Prior Work & Positioning
Prior connectomics focused on isolated visual subsystems:
- Optic Lobe Columns (Takemura et al., 2013, 2017): Reconstructed single medulla columns, establishing local motion circuits (T4/T5), but omitting whole-brain projection paths.
- Hemibrain (Scheffer et al., 2020): Traced visual projection neurons into the central brain, but lacked the optic lobes, forcing reliance on estimated visual inputs.
- FlyWire (Dorkenwald et al., 2024): Enabled female brain tracing, but lacked deep quantitative graph partitioning across feedforward vs recurrent pathways from photoreceptors down to motor nodes.

This work establishes the first end-to-end, photoreceptor-to-central-brain quantitative pipeline across all 350 visual projection neuron (VPN) types.

## 5. Method: Full Technical Breakdown

### Primary Visual Input Channels
Visual input originates from 8 distinct photoreceptor and lamina channels:
1. Lamina Monopolar Cells (LMC):
   - L1: Primary input to the ON-motion pathway (T4).
   - L2: Primary input to the OFF-motion pathway (T5).
   - L3: Regulates luminance gain and sensitivity.
2. Photoreceptors Passing Lamina:
   - R7: Ultraviolet photoreceptors (R7y yellow, R7p pale subtypes).
   - R8: Blue/green photoreceptors (R8y yellow, R8p pale subtypes).
   - R7d / R8d: Dorsal rim area photoreceptors specialized for polarized light detection.
3. Extra-retinal Input:
   - Hofbauer-Buchner (HB) eyelet: Extra-retinal photoreceptors projecting directly to circadian clock circuits.

### Hierarchical Graph Traversal and Layering
1. Network Directedness: Every synaptic connection classified into:
   - Feedforward (crossing to deeper layers).
   - Feedback (projecting to earlier layers).
   - Lateral (connecting within the same layer).
2. Acyclic Core Extraction: Removed same-layer and earlier-layer connections. The resulting trimmed directed acyclic graph (DAG) retains 67% of all synaptic edges, establishing the primary feedforward visual core.
3. Three-Layer Optic Lobe Architecture:
   - Layer 1: Photoreceptors and lamina monopolar cells.
   - Layer 2: Medulla intrinsic (Mi), transmedullary (Tm), and translobula (Y) interneurons.
   - Layer 3: Visual Projection Neurons (VPNs) and Visual Centrifugal Neurons (VCNs).

### Mathematical Formulation of Visual Input Contribution (VIC)
To calculate signal contribution from input channel $c$ to target neuron $n$:
1. Input-normalized connection matrix $W$, where $W_{ij}$ represents the fraction of synaptic inputs received by neuron $j$ from neuron $i$:
$$W_{ij} = \frac{\text{Synapses}(i \to j)}{\sum_k \text{Synapses}(k \to j)}$$
2. In trimmed acyclic graph, total effective weight $E_{cn}$ from channel $c$ to neuron $n$ equals the sum over all paths $P$ from $c$ to $n$:
$$E_{cn} = \sum_{P \in \text{Paths}(c \to n)} \prod_{(u, v) \in P} W_{uv}$$
3. Visual Input Contribution (VIC) for target neuron $n$:
$$\text{VIC}(n) = \sum_{c \in \text{Channels}} E_{cn}$$
4. Relative contribution fraction $f_{cn}$ of input channel $c$ to neuron $n$:
$$f_{cn} = \frac{E_{cn}}{\text{VIC}(n)}$$

## 6. Experiments & Results

### Quantitative Architecture of Visual Projection Channels
- Optic Lobe Census: Optic lobes contain approximately 110,000 neurons (two-thirds of the whole brain).
- Visual Projection Neurons: Reconstructed 350 distinct VPN types conveying signals to the central brain.
- Central Brain Penetration: Visual pathways deliver synaptic input to over 50% of all central brain neurons across 4 synaptic hops.

### Pathway Class Distributions and Segregation
The authors classified VPN types into distinct functional pathway classes:

| Visual Pathway Class | Representative Cell Types | Target Central Neuropil | Dominant Sensory Input | Primary Behavioral Function |
| :--- | :--- | :--- | :--- | :--- |
| Motion Feature Extractors | T4, T5, LPLC1, LPLC2 | Posterior Slope, Optic Glomeruli | L1 (ON), L2 (OFF) | Loom avoidance, wide-field optomotor stabilization |
| Small Object Trackers | LC10, LC11, LC17 | Anterior Optic Tubercle, Bulb | L1, L2, L3 | Prey detection, conspecific female pursuit |
| Chromatic / Spectral | Tm5a, Tm5b, Tm20 | Lateral Horn, Superior Protocerebrum | R7, R8 | Color discrimination, flower foraging |
| Polarized Light (Compass) | MeTu1, MeTu2, MeTu4 | Anterior Optic Tubercle -> Bulb | R7d, R8d (Dorsal Rim) | Sky polarization compass, navigation heading |
| Circadian / Arousal | HB eyelet, aMe12 | Accessory Medulla | HB eyelet, R8 | Circadian entrainment, dawn/dusk phase setting |

### Key Experimental Discoveries
1. ON/OFF Segregation and Reconvergence: L1 (ON) and L2 (OFF) streams remain strictly segregated through medulla intrinsic neurons, but reconverge onto individual lobula plate tangential cells (LPTCs) and lobula columnar neurons (LCs) to generate direction-selective responses.
2. Retention of Retinotopy: Retinotopic order is preserved both in optic lobes and within optic glomeruli of the lateral protocerebrum, where spatially ordered dendritic terminals mirror visual azimuth and elevation.
3. Central Complex Driving: Polarized light channels (MeTu) map topographically onto the anterior optic tubercle (AOTU), connecting via tubercle-bulb neurons directly to ring neurons of the central complex ellipsoid body, establishing the fly internal head-direction compass.

## 7. Limitations & Open Problems
1. Static Synaptic Connectome: Static morphological synapse counts cannot capture temporal tuning, dynamic contrast adaptation, or voltage-dependent conductance changes.
2. Threshold Trimming Caveats: Acyclic graph trimming eliminates feedback loops (33% of connections), omitting functional contributions of recurrent gain control and lateral inhibition.
3. Absence of State Modulation: Neuromodulatory inputs (octopamine, dopamine) altering visual sensitivity during flight versus rest are not modeled within purely structural flow graphs.

## 8. Reproducibility Notes
- Volume Access: Primary data stored at Google Cloud bucket gs://flyem-male-cns.
- Visual Pathway Scripts: Python code for calculating VIC and graph layering deposited at GitHub repository https://github.com/flyconnectome/2025malecns.
- Web Tools: Interactive 3D visualization of visual projection paths at https://malecns.janelia.org.

## 9. Project Ideas Derived From This Paper
1. Feedforward Visual Flow Engine (Proof of Concept):
   - Objective: Implement the acyclic trimming and VIC algorithm on an arbitrary network graph, outputting channel attribution scores for deep target neurons.
   - Stack: Python, SciPy, NetworkX.
   - Core Bottleneck: Memory scaling for multi-hop path enumeration across dense graphs.
2. Retinotopic Visual Glomeruli Reconstruction (Tool Extension):
   - Objective: Develop an automated visualization tool displaying 3D receptive fields of central brain descending neurons based on optic column coordinates.
   - Stack: Python, VTK, PyQt, navis.
   - Core Bottleneck: Accurately mapping warped optic column lattices to 2D visual field degrees.
3. Neuromorphic Vision Pipeline for Autonomous Drones (Ambitious Extension):
   - Objective: Translate the 350-VPN circuit architecture into a spiking neural network executed on neuromorphic hardware (e.g. Intel Loihi), driving collision avoidance and visual pursuit in aerial robots.
   - Stack: C++, Python, Lava framework, ROS2.
   - Core Bottleneck: Tuning synaptic time constants to match high-speed physical camera inputs without latency explosion.

## 10. Key Terms Glossary
- Optic Lobes: Bilateral brain structures comprising lamina, medulla, lobula, and lobula plate, performing early visual processing.
- Lamina Monopolar Cells (LMC): Interneurons receiving direct input from R1-R6 photoreceptors, forming primary split channels (L1, L2, L3).
- Visual Projection Neurons (VPN): Neurons whose dendrites arborize in optic lobes and whose axons project into the central brain.
- Visual Centrifugal Neurons (VCN): Neurons sending feedback axons from central brain regions back into the optic lobes.
- Visual Input Contribution (VIC): Metric quantifying the cumulative effective synaptic fraction delivered by specific sensory channels to a downstream neuron.
- Anterior Optic Tubercle (AOTU): Prominent optic glomerulus relaying visual compass and feature signals from optic lobes to central complex and motor systems.
- Receptive Field: Specific region of visual space whose illumination modulates the membrane potential of a visual neuron.
