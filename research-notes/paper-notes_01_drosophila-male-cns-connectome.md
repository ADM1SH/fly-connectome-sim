# Drosophila Male Central Nervous System Connectome: Sexual Dimorphism Analysis

## 1. Metadata
- Title: Sexual dimorphism in the complete Drosophila male central nervous system connectome
- Authors: Stuart Berg, Isabella R. Beckett, Marta Costa, Philipp Schlegel, Michal Januszewski, Elizabeth C. Marin, Aljoscha Nern, Stephan Preibisch, Wei Qiu, Shin-ya Takemura, Alexandra M.C. Fragniere, Andrew S. Champion, Diane-Yayra Adjavon, Michael Cook, Marina Gkantia, Kenneth J. Hayworth, Gary B. Huang, William T. Katz, Florian Kaempf, Zhiyuan Lu, Christopher Ordish, Tyler Paterson, Tomke Stuerner, Eric T. Trautman, Catherine R. Whittle, Laura E. Burnett, Judith Hoeller, Feng Li, Frank Loesche, Billy J. Morris, Tobias Pietzsch, Markus W. Pleijzier, Valeria Silva, Yijie Yin, Iris Ali, Griffin Badalamente, Alexander Shakeel Bates, Rory J. Beresford, John Bogovic, Paul Brooks, Sebastian Cachero, Brandon S. Canino, Bhumpanya Chaisrisawatsuk, Jody Clements, Arthur Crowe, Ines de Haan Vicente, Georgia Dempsey, Erika Dona, Marcia Dos Santos, Marisa Dreher, Christopher R. Dunne, Katharina Eichler, Samantha Finley-M., Miriam A. Flynn, Imran Hameed, Gary Patrick Hopkins, Philip M. Hubbard, Ladann Kiassat, Julie Kovalyak, Shirley A. Lauchie, Meghan Leonard, Alanna Lohff, Kit D. Longden, Charli A. Maldonado, Ilina Moitra, Sung Soo Moon, Caroline Mooney, Eva J. Munnelly, Nneoma Okeoma, Donald J. Olbris, Anika Pai, Birava Patel, Emily M. Phillips, Stephen M. Plaza, Alana Richards, Jennifer Rivas Salinas, Ruairi J.V. Roberts, Edward M. Rogers, Ashley L. Scott, Louis A. Scuderi, Pavithraa Seenivasan, Laia Serratosa Capdevila, Claire Smith, Rob Svirskas, Satoko Takemura, Ibrahim Tastekin, Alexander Thomson, Lowell Umayam, John J. Walsh, Holly Whittome, C. Shan Xu, Emily A. Yakal, Tansy Yang, Arthur Zhao, Reed George, Viren Jain, Vivek Jayaraman, Wyatt Korff, Geoffrey W. Meissner, Sandro Romani, Jan Funke, Christopher Knecht, Stephan Saalfeld, Louis K. Scheffer, Scott Waddell, Gwyneth M. Card, Carlos Ribeiro, Michael B. Reiser, Harald F. Hess, Gerald M. Rubin, Gregory S.X.E. Jefferis
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5504-5526.e1-e15
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.08.015
- Lead Contact: Gregory Jefferis (jefferis@mrc-lmb.cam.ac.uk)

## 2. Problem Statement
Animals exhibit profound sex-dependent divergence in behavioral repertoires, including mating rituals, courtship songs, aggression displays, and parental investment. In Drosophila melanogaster, genetic control of sexual behavior maps to the transcription factors fruitless (fru) and doublesex (dsx). Prior genetic, immunohistochemical, and light-microscopy approaches mapped individual fru-positive and dsx-positive clusters, but left the complete wiring diagrams connecting sensory perception to motor execution unresolved. 

Prior electron microscopy (EM) reconstructions possessed critical bottlenecks:
1. Hemibrain datasets contained only central brain structures, severing ascending inputs, descending motor outputs, and optic lobes.
2. Female Full Adult Female Brain (FAFB/FlyWire) omitted the ventral nerve cord (VNC), preventing end-to-end tracing from brain sensory inputs to thoracic motor execution.
3. Lack of whole-CNS synaptic-resolution male data prevented direct structural comparison across sexes, obscuring whether behavioral dimorphism stems from peripheral sensory filtering or deep integrative divergence.

## 3. Core Idea / Contribution
The authors reconstructed the complete synaptic-resolution connectome of an adult male Drosophila melanogaster central nervous system, encompassing both the brain and the ventral nerve cord within a unified volume.

Key technical contributions:
1. Whole Male CNS Reconstructed: 166,700 proofread neurons and 11,710 identified neuron types spanning the brain and nerve cord.
2. First Synaptic-Resolution Sex Comparison: Systematic alignment against the female FAFB/FlyWire connectome, establishing an inventory of 8,069 isomorphic types, 138 dimorphic types, 289 male-specific types, and 71 female-specific types.
3. Topographical Principle of Dimorphism: Sexual specialization is absent from early sensory afferents and motor efferents. Dimorphic and sex-specific nodes concentrate within intermediate, higher-order integrative layers (mean graph depth layers 4.3 to 4.5 versus layer 3.9 for isomorphic circuits).
4. Dual Mechanisms of Dimorphic Connectivity: Information routing diverges via sex-specific arborizations on shared isomorphic skeletons (such as AOTU008 projections to DNp05) and dedicated sex-specific interneuron hubs (such as P1, pIP10, vpoEN).

## 4. Prior Work & Positioning
This study builds upon and extends several foundational connectomic datasets:
1. Hemibrain (Scheffer et al., 2020): Provided dense reconstruction of central brain regions in a female, but truncated optic lobes and VNC.
2. FAFB / FlyWire (Zheng et al., 2018; Dorkenwald et al., 2024; Schlegel et al., 2024): Produced a whole female brain connectome without the nerve cord.
3. Male Adult Nerve Cord / MANC (Takemura et al., 2023): Provided dense reconstruction of an isolated male nerve cord, lacking connected brain inputs.

The present male CNS volume closes these gaps by preserving physical continuity across the cervical connective, joining brain circuits directly to thoracic and abdominal motor circuits in a single individual specimen.

## 5. Method: Full Technical Breakdown

### Sample Preparation and Hot-Knife Sectioning
1. Specimen: Wild-type Canton-S male fly, aged 5 to 7 days post-eclosion.
2. Chemical Fixation: Perfusion and chemical fixation preserved fine ultrastructure. Heavy metal staining (osmium tetroxide, uranyl acetate, lead aspartate) established high EM membrane contrast.
3. Hot-Knife Sectioning: Due to physical limits of FIB milling depths, the complete CNS was sectioned into 20-micrometer slabs with an ultrasonically vibrated diamond knife.
   - VNC Sectioning: 31 transverse slabs.
   - Brain Sectioning: 35 sagittal slabs (orthogonal to VNC cut planes).
   - Total slabs: 66 physical blocks.
4. Mounting and Quality Verification: Slabs were evaluated via light microscopy, laser-trimmed, and scanned using X-ray computed tomography prior to EM.

### Enhanced FIB-SEM (eFIB-SEM) Imaging
- Imaging Fleet: Seven customized eFIB-SEM systems running in parallel over twelve months.
- Electron Beam Parameters: Beam energy 1.2 kV landing energy, beam current 3 nA, scan frequency 3 MHz.
- In-Plane Resolution: Isotropic 8 nm x 8 nm per pixel.
- FIB Milling Step Size: Nominal 8 nm thickness with a 15 nA, 30 kV Gallium ion beam.
- Total Volume: 160 teravoxels.

### Alignment, Automated Segmentation, and Synapse Detection
1. Slab Alignment: 2D tiles aligned via cross-correlation and elastic mesh relaxation. Hot-knife cut seams registered across missing cut interfaces using tissue boundary matching and landmark tracking.
2. Neuron Segmentation: Automated segmentation executed with 3D Flood-Filling Networks (FFN).
3. Synapse Identification: Automated convolutional neural network identified presynaptic sites (T-bars) and postsynaptic densities (PSDs).
4. Neurotransmitter Classification: Deep learning classifiers assigned probability distributions over six classical transmitters: acetylcholine, GABA, glutamate, dopamine, serotonin, octopamine.
5. Proofreading: Human-in-the-loop manual proofreading using NeuTu and Neuroglancer platforms fixed merge and split segmentation errors across all 166,700 neurons.

### Graph Traversal and Network Metrics

#### Graph Traversal Layering
Probabilistic traversal assigned circuit hierarchy layers from sensory inputs to downstream targets:
- Seed Selection: Pool of all sensory neurons defines Layer 1.
- Traversal Probability: Let neuron A project to neuron B. When connection weight comprises 30% or more of total synaptic input to B, traversal probability equals 1.0. Lower weights scale linearly:
40815P(A 	o B) = \min\left(1.0, rac{W_{AB}}{0.3 \cdot \sum_k W_{kB}}ight)40815
- Iterations: 10,000 stochastic traversal runs generated mean layer assignments for every node.

#### Synaptic Edge Normalization
Two complementary normalization schemes quantify relative connection weight:
- Input-Normalized Strength:
40815	ext{Input Strength}(A 	o B) = rac{	ext{Synapses}(A 	o B)}{\sum_k 	ext{Synapses}(k 	o B)}40815
- Output-Normalized Strength:
40815	ext{Output Strength}(A 	o B) = rac{	ext{Synapses}(A 	o B)}{\sum_k 	ext{Synapses}(A 	o k)}40815

#### Effective Connectivity
To evaluate indirect multi-hop pathways between visual projection neurons (VPN) and descending neurons (DN):
- Direct Path: Effective weight equals input-normalized weight {AB}$.
- Two-Hop Path via intermediate node X:
40815W_{	ext{eff}}(A 	o X 	o B) = \sqrt{W_{	ext{norm}}(A 	o X) \cdot W_{	ext{norm}}(X 	o B)}40815

#### Sensorimotor Maximum Flow Analysis
Global signal throughput evaluated via push-relabel maximum flow algorithm:
- Source: Modality-specific sensory population.
- Sink: Thoracic motor neuron pool.
- Edge Capacities: Set proportional to raw synaptic count between partners. Unlike multiplicative decay metrics, maximum flow avoids exponential attenuation over long-range multi-hop paths.

#### Definition of Dimorphic Edges
1. Type-to-type directed graph constructed for male CNS and female FAFB/FlyWire (v783 materialization).
2. Synapse counts partitioned between left and right hemispheres based on soma hemisphere.
3. Geometric mean threshold applied:
40815T_{AB} = \sqrt{W_{	ext{male}}(A 	o B) \cdot W_{	ext{female}}(A 	o B)}40815
4. Significant divergence identified via binomial test comparing connection weights across sexes (alpha = 0.01).

## 6. Experiments & Results

### Quantitative Census of Sexual Dimorphism
Systematic cross-sex comparison produced the primary structural census:

| Region | Unit | Male CNS Dimorphic | Male CNS Specific | Female FAFB Dimorphic | Female FAFB Specific |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Whole Dataset | Neurons | 948 (0.5%) | 1,420 (0.8%) | 813 (0.5%) | 363 (0.2%) |
| Whole Dataset | Types | 167 (1.4%) | 312 (2.6%) | 151 (1.7%) | 71 (0.8%) |
| Central Brain | Neurons | 494 (1.4%) | 1,166 (3.4%) | 489 (1.4%) | 355 (1.0%) |
| Central Brain | Types | 138 (1.9%) | 259 (3.6%) | 134 (1.8%) | 69 (0.9%) |
| Optic Lobes | Neurons | 372 (0.3%) | 131 (0.1%) | 281 (0.3%) | 8 (0.01%) |
| Optic Lobes | Types | 1 (0.1%) | 4 (0.6%) | 1 (0.1%) | 2 (0.3%) |
| Sensory | Neurons | 6 (0.03%) | 0 | 6 (0.03%) | 0 |
| Sensory | Types | 2 (0.5%) | 0 | 2 (0.9%) | 0 |
| VNC | Neurons | 76 (0.3%) | 123 (0.5%) | 37 (ascending only) | 0 |
| VNC | Types | 26 (0.7%) | 49 (1.3%) | 14 (ascending only) | 0 |

### Modality-Specific Pathway Findings

#### Visual Circuits and Courtship Pursuit
- Frontal Visual Field Specialization: Lobula columnar type 10 (LC10) visual projection neurons mediate visual tracking of females during courtship. LC10a and LC10d exhibit frontal receptive fields.
- Dimorphic Intermediaries: LC10 projection neurons drive descending pathways through sexually dimorphic TmY21 and male-specific anterior optic tubercle neurons (AOTU008).
- Divergent Target Selection: AOTU008 extends male-specific collateral branches targeting descending neuron DNp05, while using the main axon trunk to innervate VES202m.
- Midline Steering Control: High-speed pursuit steering converges onto descending neuron DNg13 via male-specific interneurons in the ventrolateral neuropil.

#### Auditory Processing and Courtship Song
- Mechanosensory Antennal Influx: Johnston organ neurons detect sound vibrations, projecting to the antennal mechanosensory and motor center (AMMC).
- Divergent Song Decoders: Pulse song drives courtship chaining in males and receptivity in females. Sound signals traverse intermediate neuron vpoEN.
- Female Circuit: In females, vpoEN projects to abdominal motor pathways controlling vaginal plate opening.
- Male Circuit: In males, vpoEN converges onto P1 courtship command neurons and descending drivers pIP10 and pMP2, creating positive feedback loops reinforcing courtship song production and unilateral wing vibration.

#### Chemosensory Pheromone Pathways
- Olfactory Circuitry: The male pheromone 11-cis-vaccenyl acetate (cVA) activates Or67d-expressing olfactory receptor neurons projecting to glomerulus DA1.
- Projection Neuron Rewiring: DA1 lateral projection neurons (lPNs) project to the lateral horn. Postsynaptic target selection exhibits male-specific branch additions routing pheromone signals into courtship-promoting P1 clusters in males, but into courtship-suppressive pathways in females.
- Gustatory Circuitry: Male foreleg gustatory receptor neurons responsive to female cuticular hydrocarbons (such as 7,11-heptacosadiene) project directly through the VNC into the subesophageal zone (SEZ), establishing short-latency synaptic connections onto fruitless-positive ascending and descending interneurons.

#### Global Synaptic Connectivity Distribution
- 5.8% of all synaptic connections in the male central brain are sexually dimorphic.
- Synaptic divergence clusters within four higher-order neuropil regions: lateral horn (LH), superior medial protocerebrum (SMP), superior intermediate protocerebrum (SIP), and posterior slope (PS).

## 7. Limitations & Open Problems
1. Single Individual Sample Size: The connectome represents one male specimen. Inter-individual developmental plasticity versus stereotyped dimorphic connectivity cannot be resolved without multiple datasets.
2. Incomplete Sensory Afferent Terminals: Distal leg mechanoreceptors and wing campaniform sensilla were severed at the body wall during dissection, requiring classification based on entering nerve bundles.
3. Absence of Functional Sign Verification: Transmitters are predicted computationally with high accuracy, but neuropeptide co-release, receptor isoform distribution, and electrical gap junctions remain unmeasured in standard FIB-SEM volumes.
4. Unbalanced VNC Comparison: The female reference dataset (FAFB/FlyWire) lacks a complete thoracic-abdominal VNC, restricting male-female VNC comparisons to ascending interneurons.

## 8. Reproducibility Notes
- Primary EM Volume: Google Cloud Storage bucket gs://flyem-male-cns.
- Interactive Visualization: Web-based visualization available at https://malecns.janelia.org.
- Derived Code and Analysis Scripts: GitHub repository at https://github.com/flyconnectome/2025malecns.
- FlyWire Comparative Annotations: GitHub repository at https://github.com/flyconnectome/flywire_annotations.
- Synapse Materialization: FlyWire Materialization version 783 accessible via CAVEclient and Codex at https://codex.flywire.ai.

## 9. Project Ideas Derived From This Paper
1. Sensorimotor Latency Simulation (Proof of Concept):
   - Objective: Build a graph-based simulator computing multi-hop spike latency from Or67d (cVA) and LC10 (visual pursuit) inputs down to T1-leg motor neurons.
   - Stack: Python, NetworkX, SciPy.
   - Core Bottleneck: Estimating physiological conductance weights from raw morphological synapse counts.
2. Cross-Connectome Cell-Type Alignment Pipeline (Tool Extension):
   - Objective: Implement an automated pipeline matching unsegmented or fragmented EM volumes against canonical FlyWire and Male CNS skeletons using combined NBLAST morphological clustering and synaptic cosine similarity.
   - Stack: Python, PyTorch, navis, natverse.
   - Core Bottleneck: Robust handling of cut-border boundary truncations and non-rigid tissue deformation across specimens.
3. Whole-CNS Closed-Loop Biomechanical Fly Model (Ambitious Extension):
   - Objective: Couple the 166,700-neuron connectomic graph to a physics engine simulating a 3D articulated fly body in MuJoCo, reproducing courtship pursuit, song selection, and copulation attempts based on real sensory feedback.
   - Stack: C++, Python, MuJoCo, PyTorch.
   - Core Bottleneck: Simulating nonlinear neural dynamics, neuromodulation states, and muscle mechanics at millisecond resolution without computational divergence.

## 10. Key Terms Glossary
- eFIB-SEM: Enhanced Focused Ion Beam Scanning Electron Microscopy, combining continuous ion beam milling with high-resolution scanning electron imaging.
- Hot-knife Sectioning: Microtomy technique dividing frozen or embedded tissue blocks into 20-micrometer slabs via high-frequency vibrating diamond blades to permit parallel electron imaging.
- Isomorphic Neurons: Neurons presenting identical morphology, cell-type identity, and synaptic topology across male and female nervous systems.
- Sex-Specific Neurons: Neurons present in one sex but completely absent in the other sex.
- Dimorphic Neurons: Homologous neurons present in both sexes exhibiting structural divergence in arborization, branch count, or synaptic targets.
- Fruitless (fru): Zinc-finger transcription factor gene undergoing sex-specific alternative splicing, acting as a primary genetic regulator of male courtship circuits.
- Doublesex (dsx): Transcription factor gene spliced into sex-specific isoforms regulating anatomical and behavioral sexual differentiation.
- Visual Projection Neurons (VPN): Lobula and medulla projection neurons transferring feature-extracted optical signals from optic lobes to the central brain.
- Descending Neurons (DN): Projection neurons sending commanding axons from brain centers down the cervical connective into the thoracic and abdominal nerve cords.
- Antennal Mechanosensory and Motor Center (AMMC): Primary brain neuropil receiving mechanosensory signals from Johnston organ auditory and wind sensors.
- Subesophageal Zone (SEZ): Brain neuropil processing taste inputs from labellum and forelegs, coordinating feeding and proboscis extension.
