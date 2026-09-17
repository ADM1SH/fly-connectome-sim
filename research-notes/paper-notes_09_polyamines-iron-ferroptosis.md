# Polyamine Buffering of Labile Iron Governs Cellular Ferroptosis Sensitivity

## 1. Metadata
- Title: Polyamines buffer labile iron to suppress ferroptosis
- Authors: Nivedita Sharma, Jason M. Rogers, Kevin Chang, Rachel A. Kim, David Chen, Matthew G. Vander Heiden, Brent R. Stockwell
- Companion Preview Integrated: Amalia H. Megarioti and James A. Olzmann, "Metabolite buffering of labile iron governs ferroptosis", Cell 189, 5501-5503 (2026)
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5571-5589.e1-e11
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.07.040
- Lead Contact: Brent R. Stockwell (bstockwell@columbia.edu)

## 2. Problem Statement
Ferroptosis is an iron-dependent form of non-apoptotic regulated cell death driven by the lethal accumulation of lipid hydroperoxides in cellular membranes. Cells protect themselves via antioxidant defenses, most prominently glutathione peroxidase 4 (GPX4) and the FSP1-CoQ10 axis. While total cellular iron abundance influences death kinetics, iron concentration alone fails to dictate ferroptosis sensitivity:
1. Many cell types maintain high intracellular iron pools without undergoing spontaneous lipid peroxidation.
2. The biochemical mechanisms buffering the redox activity of the labile iron pool (LIP, uncoordinated Fe2+) in cytoplasm remained obscure.
3. Polyamines (spermine, spermidine, putrescine) exist at high millimolar concentrations in mammalian cells and undergo rigorous metabolic feedback control, but their primary biochemical rationale remained incompletely understood.

## 3. Core Idea / Contribution
The authors identified an evolutionarily conserved metabolic function of polyamines: acting as endogenous biochemical buffers physically complexing labile Fe2+, suppressing Fenton-mediated lipid peroxidation and shielding cells from ferroptotic death.

Primary technical contributions:
1. Genome-Wide Synthetic Lethality Screen: Identified a synthetic lethal dependency between polyamine synthesis inhibition (ODC1, SMS depletion) and GPX4 inactivation.
2. Labile Iron Chelation Mechanism: Demonstrated spermine and spermidine directly bind ferrous iron (Fe2+) via primary and secondary amine nitrogens, reducing chemical availability of Fe2+ for Fenton chemistry without depleting total intracellular iron.
3. Sensitization via Polyamine Depletion: Pharmacological depletion of polyamines with difluoromethylornithine (DFMO) or genetic deletion of ornithine decarboxylase (ODC1) expands the chemically accessible labile iron pool, sensitizing therapy-resistant tumors to GPX4 inhibitors.
4. In Vivo Pathology Rescue: Exogenous polyamine supplementation or transgenic polyamine elevation protected mice from lethal renal ischemia-reperfusion injury and cisplatin-induced nephrotoxicity.

## 4. Prior Work & Positioning
Prior investigations into ferroptosis and iron homeostasis:
- Discovery of Ferroptosis (Dixon et al., 2012; Yang et al., 2014): Established GPX4 as the primary enzymatic suppressor detoxifying phospholipid hydroperoxides.
- Ferritin and Ferritinophagy (Mancias et al., 2014): Identified NCOA4-mediated autophagic degradation of ferritin as a mechanism releasing iron into the labile iron pool.
- Classical Polyamine Functions (Pegg, 2006; Casero et al., 2018): Attributed polyamine necessity to nucleic acid charge neutralization, protein translation, and cell cycle progression.

The present paper establishes a direct coordination role for polyamines in inorganic chemistry: shielding lipids from redox-active Fe2+ to prevent lipid radical propagation.

## 5. Method: Full Technical Breakdown

### Genome-Wide CRISPR-Cas9 Chemogenomic Screening
1. Cell Model: HT-1080 fibrosarcoma cells expressing Cas9.
2. Library: Brunello whole-genome sgRNA library (76,441 sgRNAs targeting 19,114 genes).
3. Selection Conditions: Sub-lethal concentration of GPX4 inhibitor RSL3 (35 nM) for 14 days.
4. Hit Identification: MAGeCK algorithm calculating negative selection scores, identifying ODC1, SRM, and SMS among top synthetic lethal hits.

### Measurement of Labile Iron Pool (LIP) and Fenton Reactivity
1. Fluorescent Labile Iron Probes:
   - FerroOrange and Calcein-AM quenching assays measuring free intracellular Fe2+.
   - RhoNox-4 fluorescent probe detecting localized lipid-proximal Fe2+.
2. In Vitro Fenton Reaction Kinetics:
   - Recombinant reaction mixtures containing 50 micromolar FeSO4, 500 micromolar H2O2, and liposomes (liposomal phosphatidylcholine / polyunsaturated phosphatidylethanolamine, PUFA-PE).
   - Conjugated diene formation and malondialdehyde (MDA) production monitored by UV absorbance (234 nm) and thiobarbituric acid reactive substances (TBARS).
   - In vitro spermine titration (0.1 to 10 mM) assessing dose-dependent inhibition of hydroxyl radical formation.

### In Vivo Kidney Ischemia-Reperfusion Injury (IRI) Model
- Animals: C57BL/6J male mice, 10 to 12 weeks old.
- Surgical Procedure: Bilateral renal pedicle clamping for 30 minutes followed by reperfusion.
- Treatment Arms: Pre-treatment with oral spermine (1% w/v in drinking water for 7 days) versus DFMO (2% w/v) versus vehicle control.
- Readouts: Serum creatinine, blood urea nitrogen (BUN), and renal cortical lipid peroxidation (BODIPY 581/591 C11 imaging).

## 6. Experiments & Results

### Quantitative Sensitization and Rescue Metrics
Comparative cell death and lipid oxidation parameters:

| Experimental Group | Genetic / Drug Perturbation | Labile Iron Pool (LIP, AU) | C11-BODIPY Oxidation (Fold) | Cell Viability (% at 24h RSL3) | Serum Creatinine in IRI (mg/dL) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Vehicle Control | None | 1.0 +/- 0.08 | 1.0 +/- 0.1 | 82.5 +/- 4.2% | - |
| RSL3 Alone | 50 nM RSL3 | 1.1 +/- 0.09 | 4.8 +/- 0.3 | 4.2 +/- 0.8% | - |
| DFMO + RSL3 | 2 mM DFMO + 10 nM RSL3 | 2.8 +/- 0.21 | 8.9 +/- 0.6 | 0.4 +/- 0.1% | - |
| ODC1 Knockout | sgODC1 + 10 nM RSL3 | 3.1 +/- 0.24 | 9.4 +/- 0.7 | 0.2 +/- 0.1% | - |
| Spermine Rescue | 1 mM Spermine + RSL3 | 0.6 +/- 0.05 | 1.4 +/- 0.2 | 76.8 +/- 3.8% | - |
| In Vivo Sham | Surgical control | - | - | - | 0.35 +/- 0.04 |
| In Vivo IRI (Vehicle)| Renal ischemia 30 min | - | 4.2 +/- 0.4 | - | 2.45 +/- 0.18 |
| In Vivo IRI (Spermine)| Pre-treated with Spermine | - | 1.6 +/- 0.2 | - | 0.82 +/- 0.09 |

### Mechanistic Discoveries
1. Chemical Specificity of Polyamine Chelation: Spermine possesses higher Fe2+-buffering capacity than spermidine and putrescine due to four protonatable amino groups spaced across an aliphatic chain, optimal for forming bidentate coordination complexes with hydrated ferrous ions.
2. Non-Interference with Total Iron: Polyamine depletion does not alter transferrin receptor (TfR1) expression or total elemental iron measured by inductively coupled plasma mass spectrometry (ICP-MS), isolating the effect strictly to the free redox-active fraction.
3. Tumor Xenograft Synergy: In vivo xenografts of therapy-resistant lung adenocarcinoma (A549) showed marked regression when treated with the combination of DFMO and GPX4 inhibitors, whereas single-agent treatments exhibited zero therapeutic impact.

## 7. Limitations & Open Problems
1. Complex Intracellular Speciation: Differentiating polyamine-bound iron from glutathione-bound iron (GS-Fe-GS) in live intact cells requires non-destructive spectroscopic tools currently lacking sub-micron spatial resolution.
2. Dual Roles in Cell Proliferation: Polyamines are required for rapid cancer cell division; systemic DFMO administration impairs immune cell proliferation, presenting potential risks of blunting antitumor immune surveillance.
3. Clinical Drug Tolerability: High-dose DFMO causes reversible ototoxicity and gastrointestinal disturbances in human clinical settings, necessitating optimized dosing schedules.

## 8. Reproducibility Notes
- Chemogenomic Screen Data: Raw sgRNA sequencing read counts and MAGeCK output files deposited at NCBI GEO under accession GSE248670.
- Lipidomic Profiling: High-resolution LC-MS/MS lipid hydroperoxide datasets deposited in Metabolomics Workbench (Study ID ST002981).
- Statistical Analysis Scripts: R and Python scripts for processing screening hits accessible via GitHub at https://github.com/stockwelllab/Polyamine-Ferroptosis-2026.

## 9. Project Ideas Derived From This Paper
1. Labile Iron Fluorescent Sensor Calibration Script (Proof of Concept):
   - Objective: Develop an automated analytical script converting raw Calcein-AM fluorescence dequenching curves into absolute micromolar labile Fe2+ concentrations.
   - Stack: Python, NumPy, SciPy, Pandas.
   - Core Bottleneck: Calibrating cellular quenching constants against variable cell volume changes.
2. Polyamine Mimetic Metal-Shielding Screen (Tool Extension):
   - Objective: Synthesize and screen non-metabolizable synthetic polyamine derivatives selectively buffering Fe2+ without stimulating polyamine-dependent oncogenic translation.
   - Stack: Medicinal Chemistry, Chemoinformatics (RDKit), Cell Viability HTS.
   - Core Bottleneck: Ensuring cell membrane permeability through organic cation transporters.
3. Organ Preservation Perfusate Formulation (Ambitious Extension):
   - Objective: Formulate a hypothermic machine perfusion solution enriched with stabilized polyamines to suppress ferroptotic graft failure in human donor kidneys and livers.
   - Stack: Physiology, Transplant Pharmacology, ISO 10993 testing.
   - Core Bottleneck: Preventing systemic hemodynamic hypotension upon organ reperfusion in recipients.

## 10. Key Terms Glossary
- Ferroptosis: Iron-dependent form of programmed necrotic cell death characterized by phospholipid peroxidation.
- Labile Iron Pool (LIP): Redox-active, chelatable pool of intracellular ferrous iron (Fe2+) capable of catalyzing free radical formation.
- Fenton Reaction: Reaction between ferrous iron (Fe2+) and hydrogen peroxide producing highly reactive hydroxyl radicals (.OH).
- GPX4: Glutathione Peroxidase 4, selenoprotein reducing toxic lipid hydroperoxides to benign lipid alcohols using reduced glutathione.
- Polyamines: Aliphatic polycations containing two or more amino groups (putrescine, spermidine, spermine).
- ODC1: Ornithine Decarboxylase 1, rate-limiting enzyme converting L-ornithine into putrescine.
- DFMO: Difluoromethylornithine (eflornithine), suicide inhibitor of ODC1 depleting cellular polyamines.
- Ischemia-Reperfusion Injury (IRI): Tissue damage caused when blood supply returns to tissue following a period of hypoxia, heavily mediated by ferroptotic cell death.
