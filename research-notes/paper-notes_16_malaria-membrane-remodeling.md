# Structural Basis for Host Membrane Binding and Remodeling by Invading Malaria Parasites

## 1. Metadata
- Title: Structural basis for host membrane binding and remodeling by invading malaria parasites
- Authors: Meseret T. Haile, Daphne A. Kaxiras, James Zhen, Carolyn L. Lee, Britney Jiang, Jennifer L. Small-Saunders, Chi-Min Ho
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5625-5639.e1-e11
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.012
- Lead Contact: Chi-Min Ho (chi-min.ho@columbia.edu)

## 2. Problem Statement
Invasion of human erythrocytes (red blood cells, RBCs) by Plasmodium falciparum merozoites is the obligate pathogenic step driving clinical malaria morbidity and mortality. During invasion, the parasite establishes a specialized ring-shaped junctional interface with the host membrane designated the moving junction. The moving junction serves as a mechanical anchor through which parasite actomyosin motors propel the parasite into the erythrocyte, while excluding host membrane proteins to form the parasitophorous vacuole. Despite thirty years of research:
1. The structural assembly of the endogenous moving junction remained unsolved because the complex forms transiently (over approximately 30 seconds) during active cell invasion.
2. How the parasite-secreted rhoptry neck proteins (PfRONs) insert into and remodel the host erythrocyte membrane was unknown.
3. The structural mechanism linking extracellular PfAMA1 on the parasite surface to intracellular host erythrocyte spectrin-actin cytoskeletal networks was uncharacterized.

## 3. Core Idea / Contribution
The authors solved the endogenous cryo-electron microscopy (cryo-EM) structure of the functional repeating unit of the Plasmodium falciparum moving junction at 2.9 Angstrom resolution, isolating native complexes directly from invasion-stalled parasites.

Primary technical contributions:
1. Native Macromolecular Architecture: Solved the complete heterotetrameric complex comprising apical membrane antigen 1 (PfAMA1) and rhoptry neck proteins PfRON2, PfRON4, and PfRON5 in a 1:1:1:1 stoichiometry, exhibiting a characteristic sailboat-shaped topology.
2. Dual Transmembrane Insertion of PfRON2: Discovered PfRON2 embeds two hydrophobic alpha-helices directly into the host erythrocyte lipid bilayer, projecting an extracellular loop serving as a high-affinity receptor for PfAMA1.
3. Intracellular Cytoskeletal Anchor: Demonstrated PfRON4 and PfRON5 form an extended rigid cytoplasmic platform adhering to the inner leaflet of the erythrocyte membrane, binding host spectrin and actin.
4. Membrane Remodeling and Curvature Generation: The structural geometry forces local erythrocyte membrane bending (inducing inward curvature), mechanically facilitating parasite engulfment into the nascent parasitophorous vacuolar membrane (PVM).

## 4. Prior Work & Positioning
Prior structural studies of apicomplexan invasion:
- Binary Recombinant PfAMA1-RON2 Peptide Crystal Structures (Tonkin et al., 2011; Vulliez-Le Normand et al., 2012): Resolved isolated PfAMA1 bound to a short synthetic 30-mer PfRON2 peptide, but lacked the native multi-protein complex and all membrane-spanning regions.
- Toxoplasma gondii Homologue Models (Besteiro et al., 2011): Identified orthologous RON complexes, but failed to resolve high-resolution cryo-EM densities for full-length RON4 and RON5 assemblies.
- In Vitro AMA1 Vaccines: Clinical trials targeting PfAMA1 failed to produce sterilizing immunity due to extensive polymorphic sequence variation in the exposed loops.

The present paper delivers the complete native multi-component moving junction structure, revealing conserved, non-polymorphic interfaces between PfRON2, PfRON4, and PfRON5 as superior therapeutic targets.

## 5. Method: Full Technical Breakdown

### Invasion Arrest and Native Complex Purification
1. Parasite Culture and Synchronization:
   - Plasmodium falciparum strain 3D7 cultured in human O+ erythrocytes in RPMI-1640 supplemented with Albumax II.
   - Synchronized using serial sorbitol treatments to obtain high-density schizont cultures.
2. Mechanical Invasion Stalling:
   - Synchronized merozoites released in the presence of 10 micromolar cytochalasin D (actin polymerization inhibitor arresting parasites at the initial moving junction stage before internalization).
3. Mild Affinity Solubilization:
   - Membrane-bound invasion complexes solubilized using 0.5% (w/v) digitonin supplemented with protease inhibitor cocktails.
   - Immunoaffinity purification employing a monoclonal antibody targeting PfRON4 coupled to magnetic agarose beads.

### Single-Particle Cryo-Electron Microscopy
1. Grid Preparation:
   - Applied 3 microliters of purified complex (0.8 mg/mL) to glow-discharged Quantifoil R1.2/1.3 gold grids.
   - Plunged into liquid ethane using a Vitrobot Mark IV (blot time 3.5 seconds, 100% humidity, 4 degrees Celsius).
2. Data Acquisition:
   - Titan Krios G4 transmission electron microscope operating at 300 kV, equipped with a Gatan K3 direct electron detector and BioContinuum energy filter.
   - Recorded 12,450 movies at a nominal magnification of 105,000x (calibrated pixel size 0.828 Angstroms/pixel).
3. Image Processing and Reconstruction:
   - Motion correction via MotionCor2, CTF estimation via CTFFIND4.
   - 2D classification, ab initio 3D reconstruction, and non-uniform refinement in cryoSPARC v4.4, yielding a consensus 2.9 Angstrom density map.

### Biochemical Liposome and Cytoskeleton Binding Assays
- Reconstituted Liposome Insertion: Purified PfRON2-4-5 subcomplexes incubated with synthetic liposomes (PC:PE:cholesterol) and analyzed via flotation sucrose gradients.
- Spectrin Pull-Down: In vitro binding assays demonstrating direct association of the PfRON4 C-terminal domain with purified human erythrocyte erythro-spectrin heterodimers (Kd = 48 nM).

## 6. Experiments & Results

### Structural Parameters of the Moving Junction Heterotetramer
Consensus structural and biochemical metrics of the 1:1:1:1 complex:

| Subunit Name | Molecular Mass (kDa) | Resolution (Angstroms) | Structural Domain Features | Primary Binding Partner | Functional Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PfAMA1 | 83 | 2.9 | Domains I, II, III (Ectodomain) | Parasite PM / PfRON2 Loop | Parasite-side anchor, receptor engagement |
| PfRON2 | 240 | 2.9 | Extracellular Loop, 2x TM Helices | PfAMA1 / RBC Lipid Bilayer | Trans-membrane bridge spanning RBC bilayer |
| PfRON4 | 75 | 3.1 | Extended alpha-solenoid scaffold | PfRON2, PfRON5, Host Spectrin | Sub-membrane anchor to host cytoskeleton |
| PfRON5 | 110 | 3.2 | WD40 beta-propeller, alpha-helical arm | PfRON2, PfRON4, RBC Inner Leaflet | Scaffolding base, membrane curvature induction |

### Key Experimental Discoveries
1. The Sailboat Architecture: PfAMA1 forms the mast resting on the extracellular face; PfRON2 forms the hull penetrating the erythrocyte bilayer; PfRON4 and PfRON5 form the keel stabilizing the complex against the mechanical shear forces of invasion.
2. Invariant Hydrophobic Interlock: The extracellular loop of PfRON2 inserts a conserved cystine-knot beta-hairpin into a deep hydrophobic trough on PfAMA1, inducing a conformational shift in the PfAMA1 Domain II loop locking the two cells together.
3. Membrane Curvature Induction: Reconstitution of the PfRON2-4-5 heterotrimer into planar lipid bilayers generated spontaneous inward negative membrane curvature (bending radius 45 +/- 6 nm), demonstrating moving junction assembly directly initiates host membrane invagination before motor pulling begins.

## 7. Limitations & Open Problems
1. Detergent Extraction Artifacts: Solubilization in digitonin removes native erythrocyte lipid components (sphingomyelin, phosphatidylserine), precluding atomic visualization of specific lipid-protein headgroup coordination.
2. PfRON3 Absence: PfRON3 is known to localize to the rhoptry neck, but was lost during affinity purification, leaving subunit position relative to the core 1:1:1:1 assembly undefined.
3. Force-Bearing Dynamics Unmeasured: Cryo-EM captures a static snapshot; atomic behavior of the moving junction under active piconewton pulling forces delivered by the parasite motor in live cells remains unmeasured.

## 8. Reproducibility Notes
- Cryo-EM Coordinates and Maps: Atomic coordinates deposited in the Protein Data Bank (PDB ID 9B7X). Density maps deposited in the Electron Microscopy Data Bank (EMDB accession EMD-43912).
- Parasite Strains: Plasmodium falciparum 3D7 available through BEI Resources (MRA-102).
- Single-Particle Processing Workflows: CryoSPARC refinement workflows and custom UCSF ChimeraX visualization scripts deposited at Zenodo (DOI: 10.5281/zenodo.11894922).

## 9. Project Ideas Derived From This Paper
1. Moving Junction Inhibitor Virtual Screening Pipeline (Proof of Concept):
   - Objective: Develop an in silico screening pipeline docking small molecules into the newly resolved PfRON2-PfRON5 cytoplasmic interface to identify inhibitors blocking host membrane insertion.
   - Stack: Python, AutoDock Vina, RDKit, OpenBabel.
   - Core Bottleneck: Scoring precision across highly flexible protein-protein interfacial surfaces.
2. Cryo-ET Subtomogram Averaging Workflow (Tool Extension):
   - Objective: Develop a subtomogram averaging processing pipeline in Dynamo/WARP resolving the intact moving junction in situ inside flash-frozen invading merozoite-RBC contact zones.
   - Stack: Python, MATLAB, Dynamo, cryoCARE.
   - Core Bottleneck: Low signal-to-noise ratio in thick (300 nm) un-thinned erythrocyte invasion boundaries.
3. Multi-Valent Nanobody Malaria Neutralization Cocktail (Ambitious Extension):
   - Objective: Engineer bi-specific camelid single-domain antibodies (nanobodies) targeting the structurally invariant PfRON2 loop and PfRON4 membrane interface, blocking RBC entry across all clinical P. falciparum strains.
   - Stack: Phage Display, Structural Biology, In Vitro Parasite Growth Inhibition Assays (GIA).
   - Core Bottleneck: Delivering nanobodies to the narrow (10 nm) moving junction cleft before membrane sealing.

## 10. Key Terms Glossary
- Merozoite: Free-swimming, invasive life-cycle stage of Plasmodium invading red blood cells.
- Moving Junction: Circumferential specialized contact zone established between invading apicomplexan parasites and the host cell membrane.
- PfAMA1: Apical Membrane Antigen 1, essential microneme protein displayed on the merozoite surface engaging PfRON2 during invasion.
- PfRON: Plasmodium falciparum Rhoptry Neck protein family (RON2, RON4, RON5) secreted into the host cell membrane to anchor the moving junction.
- Parasitophorous Vacuole (PV): Membrane-bound compartment within which the malaria parasite resides and replicates, isolated from the host cytoplasm.
- Rhoptries: Club-shaped specialized secretory organelles in apicomplexan parasites containing proteins essential for host invasion and parasitophorous vacuole formation.
- Actomyosin Glideosome: Cytoplasmic motor complex composed of myosin A (MyoA), actin (ACT1), and gliding-associated proteins driving forward parasite propulsion.
