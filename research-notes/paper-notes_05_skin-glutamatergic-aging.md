# Skin-Innervating Glutamatergic Neurons Modulate Cutaneous Aging

## 1. Metadata
- Title: Skin-innervating glutamatergic neurons modulate aging
- Authors: Zhikai Wang, Xinping Jin, Yue Wu, Huimin Zhang, Jinzhao Ji, Ting Zhang, Qianqian Yin, Yuting Shen, Yan Wang, Ying Wu, Xiwen Zhang, Honglin Wang
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5706-5723.e1-e10
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.032
- Lead Contact: Honglin Wang (honglin.wang@sjtu.edu.cn)

## 2. Problem Statement
Skin aging features structural thinning, reduced elasticity, collagen fragmentation, and impaired wound re-epithelialization. While intrinsic chronological aging and extrinsic photoaging are known to alter dermal fibroblasts, the role of peripheral sensory innervation in tissue senescence remained poorly defined. Prior research documented peripheral nerve fibers releasing neuropeptides (substance P, CGRP), yet:
1. Whether peripheral sensory nerves directly govern dermal extracellular matrix (ECM) homeostasis remained unproven.
2. The specific neuronal subtypes responsible for maintaining dermal collagen synthesis during aging were unknown.
3. The functional significance of age-associated cutaneous neurofilament reduction was unresolved.

## 3. Core Idea / Contribution
The authors demonstrated sensory denervation accelerates skin aging, identifying cutaneous vesicular glutamate transporter 2-positive (Vglut2+) sensory neurons as essential regulators maintaining dermal collagen architecture through glutamate-Grin2b signaling onto fibroblasts.

Primary technical contributions:
1. Denervation Accelerates Senescence: Chemical, surgical, and genetic ablation of sensory nerves in mice triggered rapid dermal collagen depletion, epidermal thinning, and cellular senescence.
2. NEFH Reduction as an Aging Driver: Identified neurofilament heavy chain (Nefh) loss in aged human and mouse skin. Nefh expresses selectively within Vglut2+ dorsal root ganglion (DRG) sensory neurons innervating dermal layers.
3. Glutamate-Grin2b Fibroblast Axis: Dermal fibroblasts establish direct physical contact with Nefh+ sensory neurites. Sensory-released glutamate binds N-methyl-D-aspartate receptor subunit Grin2b on fibroblasts, stimulating calcium influx and driving collagen transcription (Col1a1, Col1a2, Col3a1).
4. Therapeutic Rejuvenation: Topical application of NMDA receptor agonists or local glutamate administration restored dermal thickness, stimulated collagen synthesis, and reversed senescence markers in aged mice.

## 4. Prior Work & Positioning
Prior investigations into skin neurobiology:
- Neuropeptide Signaling (Roosterman et al., 2006; Chiu et al., 2013): Focused on pain, itch, and neurogenic inflammation mediated by TRPV1+ nociceptors releasing CGRP and substance P.
- Autonomic Regulation (Chen et al., 2020): Addressed sympathetic innervation regulating hair follicle stem cells via norepinephrine.
- Fibroblast Aging Atlases (Solé-Boldo et al., 2020): Characterized transcriptional decline of collagen without considering direct sensory neurotransmitter control.

The present study identifies classic amino acid neurotransmission (glutamate) from low-threshold mechanoreceptors and sensory fibers as an indispensable trophic regulator of dermal fibroblast longevity.

## 5. Method: Full Technical Breakdown

### Experimental Models and Genetic Strains
1. Mouse Strains:
   - Vglut2-Cre mice crossed with Rosa26-tdTomato (Vglut2 lineage tracing).
   - Nav1.8-Cre; Rosa26-DTR mice (conditional nociceptor ablation via diphtheria toxin).
   - Conditional Nefh knockout: Nefh^fl/fl crossed with Vglut2-Cre (sensory-specific Nefh ablation).
   - Grin2b conditional fibroblast knockout: Grin2b^fl/fl crossed with Col1a2-CreERT2.
   - Chronological aging cohort: C57BL/6J mice aged 8 weeks (young) versus 20 to 24 months (aged).
2. Human Skin Specimens:
   - Sun-protected human abdominal skin biopsies from young donors (18 to 25 years, n = 12) versus aged donors (65 to 78 years, n = 12).

### Surgical and Chemical Denervation Models
1. Surgical Denervation: Unilateral sciatic and femoral nerve transection in mice, monitoring ipsilateral dorsal skin changes over 4 to 12 weeks.
2. Diphtheria Toxin (DT) Ablation: Intraperitoneal administration of DT (20 ng/g body weight) in Nav1.8-DTR mice for 14 days.
3. Galactose Aging Model: Subcutaneous D-galactose injection (100 mg/kg/day) for 8 weeks to induce accelerated cutaneous oxidative aging.

### Cellular and Molecular Protocols
1. Single-Cell RNA Sequencing (scRNA-seq):
   - Enzymatic dissociation of mouse dermal sheets.
   - 10x Genomics Chromium 3' v3.1 platform.
   - Downstream clustering in Seurat identifying fibroblast states (reticular, papillary, pro-fibrotic).
2. Calcium Imaging:
   - Primary human and mouse dermal fibroblasts loaded with Fluo-4 AM (3 micromolar).
   - Live confocal imaging during exposure to 50 micromolar L-glutamate, NMDA, or Grin2b antagonist ifenprodil (10 micromolar).
3. Chromatin Immunoprecipitation (ChIP):
   - ChIP-qPCR in fibroblasts measuring CREB phosphorylation and binding to Col1a1 and Col3a1 promoter regions.

## 6. Experiments & Results

### Quantitative Phenotypic Metrics
Comparative dermal parameters across experimental cohorts:

| Experimental Group | Model Description | Dermal Thickness (micrometers) | Collagen Area Fraction (%) | P16INK4a+ Fibroblasts (%) | Intracellular Calcium Peak (Delta F/F0) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Young WT | 8-week-old C57BL/6J | 385 +/- 22 | 68.4 +/- 3.5% | 2.1 +/- 0.4% | 2.85 +/- 0.18 |
| Aged WT | 22-month-old C57BL/6J | 195 +/- 15 | 31.2 +/- 2.8% | 18.6 +/- 1.9% | 0.82 +/- 0.09 |
| Young Denervated | 8-week surgical transection | 210 +/- 18 | 34.5 +/- 3.1% | 15.4 +/- 1.6% | 0.95 +/- 0.11 |
| Vglut2-Cre; Nefh^fl/fl | Young sensory Nefh KO | 225 +/- 16 | 36.8 +/- 2.9% | 14.8 +/- 1.4% | 1.10 +/- 0.12 |
| Col1a2-Cre; Grin2b^fl/fl | Fibroblast Grin2b KO | 218 +/- 17 | 33.1 +/- 2.7% | 16.2 +/- 1.7% | 0.65 +/- 0.08 |
| Aged + Topical NMDA | 22-mo treated for 28 days | 315 +/- 20 | 54.2 +/- 3.2% | 7.4 +/- 0.8% | 2.40 +/- 0.15 |

### Mechanistic Findings
1. Synaptic-Like Neuro-Fibroblast Contacts: High-resolution transmission electron microscopy revealed direct membrane appositions (gap distance under 30 nm) between Vglut2+ sensory axons and fibroblast plasma membranes.
2. Calcium/CaMKII/CREB Phosphorylation Cascade: Glutamate binding to Grin2b induces calcium influx, triggering CaMKII phosphorylation at Thr286 and nuclear translocation of phospho-CREB, which binds the proximal promoter of Col1a1 and Col1a2.
3. Therapeutic Rescue: Topical formulation of NMDA (100 micromolar in hydrogel vehicle, once daily) restored dermal collagen volume by 73% in 22-month-old mice without systemic neurotoxicity.

## 7. Limitations & Open Problems
1. Receptive Field Specificity: Specific mechanoreceptive classes within Vglut2+ populations (e.g., Merkel cell afferents, Ruffini endings, longitudinal lanceolate endings) maintaining dermal tone remain unparsed.
2. Chronic NMDA Receptor Desensitization: Continuous topical administration risks receptor desensitization or local neurotoxicity over extended multi-month treatment windows.
3. Human Clinical Translation: The permeability coefficient of topical glutamate analogues across the human stratum corneum is substantially lower than across rodent epidermis, requiring advanced lipid carrier formulations.

## 8. Reproducibility Notes
- RNA-seq Datasets: Single-cell transcriptomic profiles deposited in NCBI GEO under accession GSE248912.
- Mouse Lines: Vglut2-Cre (JAX #028863), Grin2b^fl/fl (JAX #025846).
- Histological Image Archives: Uncompressed immunostaining microscopy files accessible via Zenodo (DOI: 10.5281/zenodo.11894201).

## 9. Project Ideas Derived From This Paper
1. Fibroblast Calcium-Screening Microfluidic Assay (Proof of Concept):
   - Objective: Build a high-throughput microfluidic platform recording calcium spikes in primary human fibroblasts exposed to diverse glutamate analogues and receptor modulators.
   - Stack: Python, OpenCV, LabVIEW, CellProfiler.
   - Core Bottleneck: Maintaining primary fibroblast viability under high shear flow.
2. Transdermal Microneedle Delivery System (Tool Extension):
   - Objective: Fabricate dissolving hyaluronic acid microneedle patches loaded with Grin2b-selective positive allosteric modulators to bypass stratum corneum barriers.
   - Stack: Biomaterials Formulation, Texture Analyzer, HPLC.
   - Core Bottleneck: Controlling dissolution rates to avoid burst-induced neurotoxicity.
3. In Silico Neuro-Dermal Aging Simulator (Ambitious Extension):
   - Objective: Construct an agent-based spatial model coupling sensory axon degeneration rates with fibroblast ECM deposition, predicting human dermal thinning curves over decades.
   - Stack: C++, OpenGL, NetLogo / PhysiCell.
   - Core Bottleneck: Calibrating continuous protein mechanical stiffness against discrete cell cycle senescence transitions.

## 10. Key Terms Glossary
- Vglut2: Vesicular Glutamate Transporter 2 (SLC17A6), protein packaging glutamate into synaptic vesicles, marking excitatory glutamatergic neurons.
- Nefh: Neurofilament Heavy Chain, intermediate filament structural protein maintaining axonal caliber and conduction velocity.
- Grin2b: Glutamate Ionotropic Receptor NMDA Type Subunit 2B (GluN2B), calcium-permeable ionotropic glutamate receptor subunit.
- Dermal Fibroblast: Mesenchymal cell residing in the dermis responsible for synthesizing collagen and extracellular matrix components.
- Extracellular Matrix (ECM): Non-cellular macromolecular network composed of collagen, elastin, and proteoglycans providing physical scaffolding for skin.
- Denervation: Interruption or loss of peripheral nerve supply to an organ or tissue.
- CaMKII: Calcium/Calmodulin-Dependent Protein Kinase II, kinase decoding calcium spike frequency to drive downstream transcription.
