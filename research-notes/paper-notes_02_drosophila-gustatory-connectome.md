# Drosophila Adult Gustatory Connectome: Feeding, Foraging, and Social Circuits

## 1. Metadata
- Title: The complete gustatory connectome of adult Drosophila reveals how taste guides feeding, foraging, and social behavior
- Authors: Ibrahim Tastekin, Ines de Haan Vicente, Rory J. Beresford, Markus W. Pleijzier, Devon L. R. Jones, Paul Brooks, Griffin Badalamente, Katharina Eichler, Alana Richards, Ilina Moitra, Tomke Stuerner, Elizabeth C. Marin, Seung-Gu Kang, Michael A. Crickmore, Carlos Ribeiro, Gregory S.X.E. Jefferis, Marta Costa
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5527-5551.e1-e12
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.08.016
- Lead Contacts: Ibrahim Tastekin (ibrahim.tastekin@research.fchampalimaud.org), Carlos Ribeiro (carlos.ribeiro@neuro.fchampalimaud.org)

## 2. Problem Statement
Taste informs survival decisions: nutrient intake, toxin rejection, courtship evaluation, and territorial interaction. Despite extensive molecular characterization of gustatory receptors (Grs, Ir, ppk channels), gustation remained the least mapped sensory modality at the synaptic connectome level. Prior studies identified single sensory populations or small second-order interneuron pools, but failed to resolve:
1. How taste signals from anatomically disparate peripheral organs (mouthparts, pharynx, forelegs, midlegs, hindlegs, and wings) converge or segregate inside the central nervous system.
2. The complete downstream divergence from primary gustatory receptor neurons (GRNs) to motor execution circuits controlling proboscis extension, pumping, or locomotion.
3. How internal metabolic states and sexual dimorphisms modulate gustatory processing at individual synaptic junctions.

## 3. Core Idea / Contribution
The authors reconstructed the first comprehensive, synaptic-resolution connectome of the entire adult male Drosophila gustatory system across the brain and ventral nerve cord (VNC), integrating findings with female brain (FAFB/FlyWire) and male nerve cord (MANC) datasets.

Primary contributions:
1. Complete Sensory Census: Systematic identification and classification of all GRNs across six peripheral appendages: labellar bristles (lbGRNs), taste pegs (tpGRNs), pharyngeal taste organs (phGRNs: LSO, VCSO, DCSO), leg ascending GRNs (lgAGRNs), leg local GRNs (lgLGRNs), and wing margin bristles (wGRNs).
2. Divergent Downstream Pathways: Identification of 127 second-order gustatory projection neuron (GPN) types, 84 local interneuron types in the subesophageal zone (SEZ), and distinct motor pathways directing proboscis extension reflex (PER) versus feeding inhibition.
3. Organ-Specific Circuit Topography: Sensory inputs establish a functional spatial map within the SEZ. Labellar and pharyngeal inputs drive ingestion motor programs directly, whereas leg and wing inputs modulate locomotion arrest and courtship priming prior to food contact.
4. Cross-Sex and Internal State Integration: Direct synaptic connections onto fruitless/doublesex-positive courtship hubs and neuropeptide-releasing neurosecretory cells (including insulin-like peptide producing cells, IPCs).

## 4. Prior Work & Positioning
Prior gustatory studies relied on Gal4-driver lines and light-microscopy tracing (such as Wang et al., 2004; Thorne et al., 2004; Gordon and Scott, 2009). Electron microscopy studies had only mapped restricted subsets:
- FAFB/FlyWire: Partial SEZ reconstructions identified limited labellar projection pathways, but lacked leg nerves entering through thoracic ganglia.
- MANC: Reconstructed isolated leg and wing sensory endings in the nerve cord, but lacked the capacity to trace ascending axons projecting into the head.

The present study resolves the complete sensory-to-central trajectory by following peripheral nerves across the cervical connective into the SEZ, establishing direct organ-to-motor wiring matrices.

## 5. Method: Full Technical Breakdown

### Anatomical Nomenclature and Sensillar Classes
The adult fly gustatory apparatus comprises distinct sensillum morphologies:
1. Labellar Bristles: Hair sensilla on the external labial palps containing four GRNs (sugar, water, low salt, bitter/high salt) plus one mechanosensory neuron.
2. Taste Pegs: Papillae between labellar pseudotracheae containing one GRN (carbonation/acid) and one mechanoreceptor.
3. Pharyngeal Organs: Internal taste pores monitoring swallowed fluids:
   - Labral Sense Organ (LSO): Houses 8 GRNs per side.
   - Ventral Cibarial Sense Organ (VCSO): Houses 3 sensilla with distinct GRN groupings.
   - Dorsal Cibarial Sense Organ (DCSO): Houses paired internal sensilla.
4. Leg Taste Bristles: Distributed along tarsal segments (T1 to T5). Forelegs possess sexually dimorphic male-specific bristles detecting cuticular pheromones.
5. Wing Margin Bristles: Positioned along anterior wing margins, projecting via the anterior dorsal mesothoracic nerve (ADMN).

### Connectome Identification and Cross-Dataset Matching
1. Dataset Integration: Reconstructions performed in MaleCNS (whole male CNS), FAFB/FlyWire (whole female brain), and MANC (male VNC).
2. Sensory Nerve Tracking:
   - Labial nerve (LbN): Labellar bristles, taste pegs, and LSO.
   - Pharyngeal nerve (PhN): VCSO and DCSO afferents.
   - Prothoracic, mesothoracic, and metathoracic leg nerves: Foreleg, midleg, and hindleg afferents.
   - Anterior dorsal mesothoracic nerve (ADMN): Wing afferents.
3. Clustering Protocol:
   - Presynaptic and postsynaptic connectivity vectors extracted for each candidate GRN.
   - Cosine distance computed across synaptic targets:
$$D_{\text{cosine}}(u, v) = 1 - \frac{\sum_i u_i v_i}{\sqrt{\sum_i u_i^2} \sqrt{\sum_i v_i^2}}$$
   - Hierarchical agglomerative clustering grouped GRNs into isomorphic types across datasets.

### Effective Connectivity Computation
To calculate multi-hop signal propagation from sensory GRN classes to feeding motor neurons (MNs):
- Single-hop connection weight: Normalized input fraction $W_{AB}$.
- Multi-hop path weight across path sequence $P = (v_0, v_1, \dots, v_k)$:
$$W(P) = \prod_{i=0}^{k-1} W_{v_i v_{i+1}}$$
- Path filtering: Paths retained only when intermediate connections exceeded 1% of target total synaptic inputs.

## 6. Experiments & Results

### Quantitative Inventory of Sensory Afferents
The study identified and typed the complete gustatory sensory complement:

| Appendage / Organ | GRN Subclass | Nerve Route | MaleCNS Count (per side) | Primary Target Neuropil |
| :--- | :--- | :--- | :--- | :--- |
| Labellum External | lbGRN (Bristle) | Labial Nerve | 124 - 132 | Ventromedial SEZ |
| Labellum Internal | tpGRN (Peg) | Labial Nerve | 28 - 32 | Dorsolateral SEZ |
| Pharynx (LSO) | phGRN_LSO | Labial Nerve | 8 - 10 | Anterior SEZ |
| Pharynx (VCSO) | phGRN_VCSO | Pharyngeal Nerve | 6 - 8 | Medial SEZ |
| Pharynx (DCSO) | phGRN_DCSO | Pharyngeal Nerve | 4 - 6 | Posterior SEZ |
| Foreleg (Tarsus) | lgAGRN (Ascending) | Prothoracic Nerve | 34 - 38 | Primate-specific SEZ & VNC |
| Foreleg (Tarsus) | lgLGRN (Local) | Prothoracic Nerve | 62 - 68 | T1 Leg Neuropil (VNC) |
| Midleg (Tarsus) | lgAGRN (Ascending) | Mesothoracic Nerve | 18 - 22 | Posterior SEZ |
| Midleg (Tarsus) | lgLGRN (Local) | Mesothoracic Nerve | 54 - 58 | T2 Leg Neuropil (VNC) |
| Hindleg (Tarsus) | lgAGRN (Ascending) | Metathoracic Nerve | 16 - 20 | Posterior SEZ |
| Hindleg (Tarsus) | lgLGRN (Local) | Metathoracic Nerve | 52 - 56 | T3 Leg Neuropil (VNC) |
| Wing Margin | wGRN (Bristle) | ADMN | 24 - 28 | Mesothoracic Neuropil (VNC) |

### Functional Subcircuits and Motor Routing

#### Ingestion and Proboscis Extension Reflex (PER)
- Sweet lbGRNs converge onto peptidergic second-order interneurons in the central SEZ, including GPNs projecting to the superior lateral protocerebrum.
- Direct premotor circuits: Second-order interneurons drive proboscis motor neurons MN9 (rostrum protractor) and MN11/12 (haustellum extension), initiating ingestion upon contact.

#### Bitter Rejection and Motor Suppression
- Bitter lbGRNs and bitter phGRNs synapse onto GABAergic local interneurons in the lateral SEZ.
- Feedforward Inhibition: Bitter-activated GABAergic SEZ interneurons deliver direct inhibitory input to PER premotor interneurons, terminating feeding movements within 20 milliseconds of toxin detection.

#### Leg-Mediated Foraging and Locomotion Arrest
- Foreleg lgAGRNs project directly to VNC motor centers regulating stepping patterns while simultaneously ascending to the SEZ.
- Sugar detection on forelegs inhibits thoracic central pattern generators (CPGs), stopping walking before proboscis extension occurs.

#### Social and Courtship Pheromone Integration
- Sexually dimorphic male foreleg GRNs (ppk23-positive, ppk25-positive) project via prothoracic nerves directly to fruitless-positive second-order neurons (including vpoEN and P1-associated ascending clusters).
- Axon terminals from pheromone-sensitive GRNs contact descending interneurons modulating wing vibration and abdominal curling.

## 7. Limitations & Open Problems
1. Single Specimen EM Baseline: Connectome values derive from one male individual; biological variation in sensilla hair counts across wild populations remains unrepresented.
2. Receptor Profiling Indirectness: Specific ligand affinities (such as distinguishing trehalose from sucrose or caffeine from nicotine) are inferred through spatial correlation with Gal4 driver atlases rather than direct in situ transcript identification on the EM volume.
3. Neuropeptide Dynamics Unmeasured: Gustatory modulation relies heavily on slow-acting neuropeptides (such as dNPF, hugin, allatostatin); synaptic maps capture fast chemical synapses but miss volume transmission radii.

## 8. Reproducibility Notes
- EM Dataset: MaleCNS volume accessible via Janelia FlyEM portal (https://malecns.janelia.org).
- Comparative Datasets: FAFB/FlyWire (https://codex.flywire.ai) and MANC (https://neuprint.janelia.org).
- Annotation Code and Connectivity Matrices: Deposited at GitHub repository https://github.com/flyconnectome/2025malecns.

## 9. Project Ideas Derived From This Paper
1. Gustatory Decision Latency Simulator (Proof of Concept):
   - Objective: Simulate competition between sweet lbGRN and bitter phGRN inputs converging onto proboscis motor neuron MN9 to predict ingestion probability curves.
   - Stack: Python, Brian2, SciPy.
   - Core Bottleneck: Parameterizing synaptic conductances without patch-clamp calibration data.
2. Automated GRN Profiling Classifier (Tool Extension):
   - Objective: Develop a geometric deep learning model classifying unannotated peripheral sensory afferents in new insect EM volumes based on arbor morphology and terminal neuropil zone.
   - Stack: PyTorch Geometric, navis, open3d.
   - Core Bottleneck: Handling anatomical shifts across species or mutilated nerve roots.
3. Closed-Loop Foraging Simulator (Ambitious Extension):
   - Objective: Integrate leg and labellar connectomic graphs into an embodied insect agent searching a resource grid, reproducing stop-and-feed decisions under fluctuating hunger states.
   - Stack: Python, MuJoCo, Gymnasium.
   - Core Bottleneck: Coupling fast synaptic transmission with slow neuromodulatory state variables (dNPF hunger states).

## 10. Key Terms Glossary
- GRN: Gustatory Receptor Neuron, peripheral sensory neuron detecting soluble chemicals, minerals, carbonation, or pheromones.
- SEZ: Subesophageal Zone, ventral brain neuropil coordinating feeding behaviors, taste processing, and mouthpart kinematics.
- lbGRN: Labellar bristle gustatory receptor neuron situated on external mouthparts.
- tpGRN: Taste peg gustatory receptor neuron situated between labellar pseudotracheae.
- phGRN: Pharyngeal gustatory receptor neuron situated in internal cibarial organs (LSO, VCSO, DCSO).
- lgAGRN: Leg ascending gustatory receptor neuron projecting from tarsal segments to the SEZ.
- lgLGRN: Leg local gustatory receptor neuron terminating exclusively within thoracic leg neuropils.
- PER: Proboscis Extension Reflex, motor sequence extending feeding apparatus toward nutrient sources.
