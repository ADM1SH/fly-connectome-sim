# Enteric Glial Serotonin Signaling in Colorectal Cancer Immunity

## 1. Metadata
- Title: Enteric glial serotonin signaling drives anti-tumor immunity in colorectal cancer
- Authors: Liu Yang, Michael A. Wheeler
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5485-5487
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.08.008
- Lead Contact: Michael A. Wheeler (mwheeler0@bwh.harvard.edu)

## 2. Problem Statement
The gut synthesizes over ninety percent of mammalian serotonin. Enteric serotonergic signaling regulates peristalsis, mucosal barrier integrity, and local immunity. Key unresolved questions in mucosal neuroimmunology:
1. Whether non-neuronal enteric cell populations translate serotonergic cues into adaptive anti-tumor immune responses.
2. Enteric glial cells (EGCs) integrate mechanical and microbial stimuli, but their direct role in tumor-infiltrating lymphocyte recruitment remained uncharacterized.
3. Lysergic acid diethylamide (LSD) and related ergolines inhibit colorectal tumor growth, but whether this requires central psychoactive actions or peripheral receptor engagement was unresolved.

## 3. Core Idea / Contribution
This Leading Edge Preview analyzes the discovery by Wen et al. (Cell 189, 5688-5705) demonstrating that enteric glia act as primary cellular executors of peripheral 5-HT2AR agonism:
1. Peripheral Decoupling: Validation of IHCH-8110, a synthetic 5-HT2AR agonist engineered to prevent blood-brain barrier transit. IHCH-8110 reproduces the anti-tumor efficacy of LSD without central neuroactivity.
2. Glial Target Validation: EGCs express the highest density of 5-HT2AR in the colorectal microenvironment. Deletion of 5-HT2AR in EGCs abrogates compound-mediated immune protection.
3. Dual Chemokine-Cytokine Effector Circuit: 5-HT2AR engagement in EGCs induces CXCL10 and IL-18 transcription. CXCL10 recruits CXCR3+ CD8+ T cells; IL-18 enhances cytotoxic granzyme B and IFN-gamma production.
4. Cold-to-Hot Niche Conversion: The circuit converts lymphocyte-depleted colorectal tumors into inflamed, immune-responsive microenvironments that synergize with anti-PD-1 checkpoint blockade.

## 4. Prior Work & Positioning
Prior investigations into serotonergic signaling produced divergent immunomodulatory models:
- Central Nervous System Astrocytes (Chung et al., 2025; Lee and Wheeler, 2026): Psychedelics suppress astrocyte-driven neuroinflammation, promoting behavioral stress resilience.
- Peripheral Pulmonary Models (Nau et al., 2015): 5-HT2A agonist (R)-DOI inhibits TNF-alpha production and reduces leukocyte recruitment in asthma.
- Systemic Biomarkers (Mason et al., 2023): Psilocybin lowers circulating IL-6 and C-reactive protein in humans.

The Wen et al. study establishes that 5-HT2AR signaling is tissue-specific. In colorectal tumors, mucosal cues switch glial signaling from suppression to active cytotoxic recruitment.

## 5. Method: Full Technical Breakdown

### Glial Receptor Mapping and Cell Selection
- Quantitative single-cell RNA sequencing resolved 5-HT2AR transcript abundance across gut cell types (EGCs, epithelial cells, myeloid subsets, lymphocytes).
- EGC specificity confirmed via conditional knockout mice using Plp1-CreERT2 or Sox10-Cre drivers crossed with Htr2a floxed alleles.

### Chemokine and Cytokine Signal Cascades
- Receptor activation triggers intracellular Gq-phospholipase C signaling in EGCs.
- Nuclear translocation of downstream transcription factors drives coordinated transcription of Cxcl10 and Il18.
- Paracrine secretion sets a chemotactic gradient across the tumor stroma.

### CD8+ Effector Phenotyping
- Multi-parameter flow cytometry and spatial immunofluorescence quantify CD8+ T cell density, granzyme B, perforin, and IFN-gamma expression inside tumor margins.

## 6. Experiments & Results

### Quantitative Anti-Tumor Efficacy and Glial Mediation
The preview highlights the following quantitative relationships reported by Wen and colleagues:

| Experimental Group | Model System | Agent / Regimen | Tumor Volume Inhibition (%) | Intratumoral CD8+ Density (cells/mm2) | Anti-PD-1 Synergy Index |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Vehicle Control | MC38 Syngeneic CRC | Vehicle daily | Baseline (0%) | 142 +/- 18 | 1.0 (Reference) |
| Systemic Psychedelic | MC38 Syngeneic CRC | LSD (0.5 mg/kg) | 64 +/- 6% | 485 +/- 42 | 2.8 |
| Peripheral Agonist | MC38 Syngeneic CRC | IHCH-8110 (10 mg/kg) | 68 +/- 5% | 512 +/- 39 | 3.1 |
| Glial 5-HT2AR Null | MC38 in Plp1-Cre;Htr2a-fl/fl | IHCH-8110 (10 mg/kg) | 8 +/- 3% (Lost) | 158 +/- 22 (Lost) | 1.1 |
| Human Explants | Patient Primary CRC Ex Vivo | IHCH-8110 (10 uM) | N/A (Tissue culture) | CXCL10 fold induction: 4.8x | IL-18 fold induction: 3.9x |

### Context-Dependent Immune Logic
1. Microenvironmental Reprogramming: EGCs in healthy gut maintain mucosal boundary seals. Under malignant dysbiosis and tumor metabolite exposure, 5-HT2AR engagement shifts glia into lymphoid recruiters.
2. Checkpoint Synergy: Combining IHCH-8110 with anti-PD-1 monoclonal antibodies achieved complete response rates exceeding 50% in checkpoint-resistant models.

## 7. Limitations & Open Problems
1. Inflammatory Bowel Disease Risk: Sustained local IL-18 and CXCL10 production can trigger mucosal colitis or autoimmune flares in non-tumor intestinal segments.
2. Enteric Neuropathy Vulnerabilities: Patients with diabetic enteropathy or severe neurodegenerative autonomic dysfunction display depleted EGC pools, reducing drug sensitivity.
3. Human Heterogeneity: Colorectal tumors display variable baseline EGC stromal infiltration. Glia-poor tumors will require combination strategies to recruit or activate stromal support cells.

## 8. Reproducibility Notes
- Parent Article Reference: Wen et al., Cell 189, 5688-5705.e13 (DOI: 10.1016/j.cell.2026.07.028).
- Reporter Vectors: EGC activation monitored via GCaMP6s calcium imaging under Plp1 promoters.
- Chemical Probe Availability: Structure and synthesis steps for peripheral agonist IHCH-8110 are documented in the parent study supplementary data.

## 9. Project Ideas Derived From This Paper

### 1. Peripheral GPCR Blood-Brain Partition Predictor (Proof of Concept)
- Objective: Construct a cheminformatics filter calculating topological polar surface area, logP, and P-glycoprotein substrate probability to prioritize peripherally restricted 5-HT2AR agonists.
- Stack: Python, RDKit, scikit-learn, Mordred.
- Core Bottleneck: Accurate prediction of active transport efflux at the human blood-brain boundary.

### 2. Enteric Glia Spatial Deconvolution Pipeline (Tool Extension)
- Objective: Build a single-cell spatial transcriptomics module isolating EGC-specific chemokine signatures (CXCL10, IL-18) relative to neighboring CD8+ T cell proximity in CRC biopsies.
- Stack: Python, Scanpy, Squidpy, AnnData.
- Core Bottleneck: Segmenting thin, irregularly branched enteric glial processes in dense stromal histology.

### 3. Synthetic Glial-Tethered Agonist Nanoparticles (Ambitious Extension)
- Objective: Formulate polymeric nanoparticles coated with glial-homing peptides (targeting GFAP or PLP1 surface epitopes) encapsulating 5-HT2AR agonists to restrict activation to tumor-associated enteric glia.
- Stack: Nanoparticle Chemistry, Flow Cytometry, In Vivo Murine CRC Models.
- Core Bottleneck: Avoiding reticuloendothelial clearance in hepatic Kupffer cells while penetrating dense gut stroma.
