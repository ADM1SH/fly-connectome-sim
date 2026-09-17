# Co-Option of Lysosomal Machinery Shapes the Evolution of Intracellular Photosymbiosis

## 1. Metadata
- Title: Co-option of lysosomal machinery shapes the evolution of the intracellular photosymbiosis supporting coral reefs
- Authors: Shunsuke Maruyama, Ryota Kawasumi, Yuu Ishii, Mayuko Hamada, Shinichiro Maruyama, Koki Nishitsuji, Noriyuki Satoh, Minoru Ikeda, Kazuhiko Sakai, Jun Minagawa
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5640-5652.e1-e10
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.015
- Lead Contacts: Shunsuke Maruyama (shunsuke.maruyama@oist.jp), Jun Minagawa (minagawa@nibb.ac.jp)

## 2. Problem Statement
Endosymbiosis between reef-building corals (and model cnidarians) and photosynthetic dinoflagellates (family Symbiodiniaceae) underpins the ecological foundation of coral reef ecosystems. Symbiotic algae reside inside host gastrodermal cells within a specialized membrane-bound organelle designated the symbiosome. For decades, the prevailing paradigm held algal symbionts evade host immune defenses and phagolysosomal destruction by actively blocking lysosomal fusion (analogous to Mycobacterium tuberculosis or Legionella pneumophila):
1. The protein composition of the symbiosome membrane and lumen remained uncharacterized due to technical hurdles in isolating intact symbiosomes free of contamination.
2. How the symbiosome evolved repeatedly across diverse cnidarian lineages without dedicated de novo organelle biogenesis machineries was unexplained.
3. The precise nutrient exchange channels transporting fixed photosynthetic carbon and recycling host metabolic nitrogen were unmapped at the organelle boundary.

## 3. Core Idea / Contribution
The authors isolated intact symbiosomes from the model sea anemone Exaiptasia diaphana (Aiptasia) to generate a high-confidence organelle proteome, revealing symbiosomes do not evade lysosomes; rather, they actively fuse with host lysosomes.

Primary technical contributions:
1. High-Purity Symbiosome Proteomics: Established a continuous Percoll/sucrose density gradient fractionation protocol isolating pure intact symbiosomes, identifying 412 high-confidence resident host proteins.
2. Active Phagolysosomal Identity: Revealed striking enrichment of classical lysosomal machinery on the symbiosome: late endosomal GTPase Rab7, lysosomal-associated membrane proteins (Lamp1/Lamp2), vacuolar H+-ATPase (V-ATPase) subunits, and acid hydrolases (cathepsins B, D, L).
3. Active Fusion Requirement: Live confocal imaging confirmed direct, continuous fusion of host lysosomes with resident symbiosomes. Pharmacological or genetic inhibition of lysosomal fusion (via Rab7 knockdown or dominant-negative Rab7-T22N) severely impaired symbiosis establishment.
4. Co-Option of Nutrient Salvage: Symbiodiniaceae resist acid-mediated digestion, actively buffering internal vacuolar pH and employing host lysosomal transporter networks (NPC2 cholesterol carriers, amino acid permeases, SLC transporters) to harvest nutrients and exchange metabolic currency.

## 4. Prior Work & Positioning
Prior paradigms of coral endosymbiosis:
- Phagosome Maturation Arrest Hypothesis (Fitt and Trench, 1983; Chen et al., 2005): Posited live Symbiodiniaceae halt endosomal maturation at an early Rab5+ stage, blocking transition to Rab7+ phagolysosomes.
- Pathogen Evasion Analogies: Assumed symbiotic algae mimic intracellular bacteria by secreting effector proteins preventing acidic lysosome coalescence.
- Crude Organelle Preparations: Earlier proteomic attempts suffered from heavy contamination by host mitochondrial, nuclear, and cytoplasmic proteins.

The present paper overturns the maturation arrest model, establishing symbiosomes as modified, functioning phagolysosomes whose host nutrient-recycling pathways were co-opted to sustain photosynthetic mutualism.

## 5. Method: Full Technical Breakdown

### Biological Models and Symbiosome Fractionation
1. Experimental Organism: Clonal lines of Exaiptasia diaphana (strain CC7), maintained in artificial seawater (ASW) at 25 degrees Celsius under a 12h light / 12h dark cycle, hosting Breviolum minutum (clade B).
2. Density-Gradient Organelle Isolation:
   - Homogenization in isotonic sucrose-HEPES buffer using a dounce homogenizer.
   - Low-speed pelleting (500 x g) followed by continuous Percoll density gradient centrifugation (10% to 70% Percoll step gradient).
   - Intact symbiosome band harvested at the 45%/60% interface, washed free of colloidal silica.
3. Organelle Purity Verification: Western blotting confirming presence of symbiosome markers and complete absence of mitochondrial (Cox4) and nuclear (Histone H3) contaminants.

### Quantitative Proteomic and Mass Spectrometry Profiling
- Digestion and Labeling: In-solution tryptic digestion followed by 16-plex Tandem Mass Tag (TMTpro) labeling.
- LC-MS/MS System: Thermo Scientific Orbitrap Exploris 480 coupled to an UltiMate 3000 RSLCnano liquid chromatography system.
- Bioinformatic Database Matching: Searched against the chromosome-scale Aiptasia reference genome and Breviolum minutum predicted proteomes, filtering at 1% false discovery rate (FDR).

### Live Imaging and Functional Knockdown Assays
1. Fluorescent Lysosome Tracking:
   - Host gastrodermal tissue incubated with LysoTracker Red DND-99 (50 nM) and DQ-Green BSA (fluorogenic substrate for lysosomal proteases).
   - Confocal time-lapse microscopy capturing vesicle fusion dynamics at 0.5 frames per second.
2. In Vivo Gene Silencing:
   - Microinjection of antisense morpholino oligonucleotides (MO) or double-stranded RNA (dsRNA) targeting Aiptasia Rab7 and Lamp1 into fertilized oocytes and aposymbiotic larvae prior to algal infection.

## 6. Experiments & Results

### Quantitative Symbiosome Proteomic Composition
Census of host proteins identified within the purified symbiosome fraction:

| Functional Protein Category | Enriched Marker Proteins | Identified Peptides | Fold Enrichment vs Whole Cell | Functional Role in Symbiosis |
| :--- | :--- | :--- | :--- | :--- |
| Endosomal / Lysosomal Trafficking | Rab7a, Lamp1, Lamp2, Vps35 | 842 | 4.8 +/- 0.4 | Organelle fusion, membrane tethering |
| Vacuolar Acidification | ATP6V1A, ATP6V1B2, ATP6V0C | 520 | 3.6 +/- 0.3 | Proton pumping, nutrient transport driving |
| Acid Hydrolases / Proteases | Cathepsin B, Cathepsin L, Acid Phosphatase | 315 | 2.9 +/- 0.2 | Macromolecular breakdown, nitrogen recycling |
| Lipid / Sterol Transport | NPC2 (Isoforms A-D), Aster-B | 186 | 6.2 +/- 0.5 | Host-symbiont cholesterol/lipid transfer |
| Solute Carriers / Permeases | SLC38A9, SLC3A2, GLUT8 | 145 | 3.4 +/- 0.3 | Amino acid and glucose translocation |
| Carbonic Anhydrases | CA2, CA4-like | 98 | 5.1 +/- 0.4 | Inorganic carbon (bicarbonate) concentration |

### Key Experimental Discoveries
1. Direct Lysosomal Fusion Verification: LysoTracker and DQ-BSA fluorescence accumulated directly within the symbiosomal lumen surrounding live algae, showing active proteolytic enzyme delivery.
2. Requirement of Rab7 for Colonization: Aposymbiotic larvae microinjected with Rab7-targeting morpholinos exhibited an 82% reduction in intracellular algal acquisition during inoculation, proving fusion is an obligate step for colonization.
3. pH Buffering by Symbionts: Ratiometric pH imaging (using SNARF-1 dextran) revealed empty host phagolysosomes drop to pH 4.5, while symbiosomes containing healthy photosynthetically active algae maintain a buffered luminal pH of 6.0 to 6.4, attenuating acid hydrolase activity.

## 7. Limitations & Open Problems
1. Symbiont Surface Secretome Unresolved: The precise molecular shield or cell-wall component on Symbiodiniaceae neutralizing lysosomal acid hydrolase digestion remains chemically undefined.
2. Calcification Coupling Unmodeled: Exaiptasia is a soft sea anemone; how lysosome-derived symbiosome nutrient exchange couples to aragonite skeleton deposition in true reef-building scleractinian corals requires comparative validation.
3. Bleaching Breakdown Mechanisms: The molecular signaling cascade triggering the transition from stable lysosomal co-option to destructive symbiont degradation during marine heatwave bleaching events was not resolved.

## 8. Reproducibility Notes
- Proteomic Mass Spectrometry Data: Raw LC-MS/MS files and MaxQuant search outputs deposited at ProteomeXchange via jPOSTrepo under accession PXD048912.
- Morpholino Sequences: Targeted morpholino and control oligonucleotide sequences listed in Supplementary Table S4.
- Genomic Assemblies: Aiptasia genome annotations and transcript models accessible through Reefgenomics (http://aiptasia.reefgenomics.org).

## 9. Project Ideas Derived From This Paper
1. Organellar Density-Gradient Purity Predictor (Proof of Concept):
   - Objective: Develop a machine-learning classification model predicting sub-cellular fractionation purity based on peptide spectral match ratios across density fractions.
   - Stack: Python, Pandas, scikit-learn.
   - Core Bottleneck: Normalizing variable detergent lysis efficiency across tough marine invertebrate tissues.
2. Cryo-Correlative Light and Electron Microscopy Chamber (Tool Extension):
   - Objective: Design a specialized high-pressure freezing protocol preserving live fluorescently labeled symbiosome-lysosome fusion intermediates for cryo-electron tomography.
   - Stack: Cryo-FIB, Cryo-CLEM, SerialEM.
   - Core Bottleneck: Ice crystal damage inside large (10-micrometer) intracellular algae during vitreous freezing.
3. Thermal Stress Early-Warning Diagnostic (Ambitious Extension):
   - Objective: Develop a field-deployable lateral flow strip measuring host symbiosomal Cathepsin B and NPC2 shedding into reef seawater to detect coral metabolic collapse prior to visual reef bleaching.
   - Stack: Monoclonal Antibody Development, Lateral Flow Assay, Field Spectrometry.
   - Core Bottleneck: Dilution effects in open oceanic reef waters requiring high-affinity capture reagents.

## 10. Key Terms Glossary
- Symbiosome: Specialized host-derived vacuolar organelle encapsulating intracellular photosynthetic dinoflagellates in cnidarian cells.
- Symbiodiniaceae: Family of photosynthetic dinoflagellates forming obligate endosymbioses with corals, sea anemones, and giant clams.
- Exaiptasia diaphana: Model sea anemone (Aiptasia) employed for molecular, genetic, and cellular dissection of cnidarian-dinoflagellate symbiosis.
- Phagolysosome: Cytoplasmic body formed by the fusion of a phagosome with a lysosome, containing hydrolytic enzymes operating at acidic pH.
- Rab7: Small GTPase belonging to the Ras superfamily acting as the key molecular switch regulating late endosome-lysosome fusion.
- NPC2: Niemann-Pick Type C2 protein, soluble lysosomal sterol-binding protein transferring cholesterol across membranes.
- Bleaching: Loss of photosynthetic algal endosymbionts or algal chlorophyll pigments from coral tissues under elevated temperature stress.
