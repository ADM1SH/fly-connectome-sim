# Bivalent Epigenetic Chemical Inducer of Proximity: KAT-TCIP in Lymphoma

## 1. Metadata
- Title: A bivalent molecular glue linking lysine acetyltransferases to oncogene-induced cell death
- Authors: Meredith N. Nix, Sai Gourisankar, Noah Y. Chen, Srivatsan Parthasarathy, Benjamin A. Stalnecker, Jordan A. Berg, Zachary F. Fralish, Joshua D. Brand, Justin P. Edwards, Gerald R. Crabtree, Nathanael S. Gray
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5590-5610.e1-e12
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.037
- Lead Contacts: Gerald R. Crabtree (crabtree@stanford.edu), Nathanael S. Gray (nathanael_gray@dfci.harvard.edu)

## 2. Problem Statement
Diffuse large B cell lymphoma (DLBCL) relies on oncogenic transcription factors, prominently BCL6, which represses pro-apoptotic genes and terminal differentiation networks. Traditional small-molecule inhibitors targeting BCL6 bind the BTB domain to displace corepressors (SMRT, NCOR, BCOR), but exhibit modest single-agent efficacy in clinical trials. Additional constraints:
1. Targeted protein degradation (PROTACs) eliminating BCL6 mimics loss-of-function phenotypes, which DLBCL cells frequently tolerate via compensatory survival pathways.
2. Pharmacological strategies converting oncogenic dependency into dominant cytotoxic outputs were lacking.
3. Exploiting transcriptional and epigenetic chemical inducers of proximity (TCIPs) to rewire repressive chromatin machineries directly into transcriptional activators remained challenging.

## 3. Core Idea / Contribution
The authors developed a class of bivalent molecules designated KAT-TCIPs (lysine acetyltransferase transcriptional chemical inducers of proximity), which recruit the transcriptional coactivators p300 and CREB-binding protein (CBP) directly to the oncogenic repressor BCL6.

Primary technical contributions:
1. Synthetic Neomorphic Circuit: Instead of degrading BCL6 or blocking corepressor binding passively, KAT-TCIP physically crosslinks the bromodomain/HAT module of p300/CBP to the BCL6 BTB domain.
2. Chromatin State Inversion: Recruitment of p300/CBP to BCL6-repressed loci causes massive, localized histone hyperacetylation (H3K27ac) at enhancers and promoters.
3. Oncogene-Induced Cell Death: Epigenetic derepression triggers high-level transcriptional activation of endogenous pro-apoptotic networks (BBC3/PUMA, BCL2L11/BIM, CDKN1A/p21), killing DLBCL cells within hours.
4. Selectivity for Malignant State: Cytotoxicity requires high baseline BCL6 expression and p300 catalytic activity, sparing non-malignant B cells expressing physiological BCL6 levels.

## 4. Prior Work & Positioning
Prior approaches targeting transcriptional oncogenes:
- BCL6 Peptidomimetics and Small Inhibitors (Cerchietti et al., 2010; Cierpicki et al., 2013): Disrupted the BTB lateral groove, but produced incomplete apoptotic induction in vivo.
- BCL6 Degron Degraders (Slabicki et al., 2020; McCoull et al., 2021): Induced BCL6 proteasomal degradation, but failed to elicit the immediate, potent killing observed with gain-of-function transactivation.
- CDK9 and BET Inhibitors: Blocked global transcriptional elongation, but caused severe systemic bone marrow and gastrointestinal toxicities.

The present paper proves chemically induced proximity between a repressor and an acetyltransferase creates a synthetic gain-of-function trigger converting tumor dependency into apoptosis.

## 5. Method: Full Technical Breakdown

### Chemical Synthesis and Structure of KAT-TCIP1
1. Pharmacophore Architecture:
   - BCL6-Binding Ligand: High-affinity pyrazolo[1,5-a]pyrimidine derivative binding the BTB corepressor-binding groove (Kd = 12 nM).
   - Linker: Polyethylene glycol (PEG) and rigid alkyl-triazole spacers optimized for ternary complex geometry.
   - p300/CBP-Binding Ligand: Small-molecule bromodomain inhibitor (derived from SGC-CBP30) engaging the p300/CBP bromodomain (Kd = 45 nM).
2. Lead Compound KAT-TCIP1: Possesses molecular weight 892 Da, topological polar surface area (tPSA) 142 square angstroms, and nanomolar cellular potency.

### Ternary Complex Characterization
- In Vitro AlphaLISA: Recombinant BCL6-BTB and p300-Bromodomain incubated with titrated KAT-TCIP1 to map bell-shaped ternary complex formation curves (Hook effect).
- Surface Plasmon Resonance (SPR): Measured cooperative binding kinetics and ternary complex half-life (t1/2 = 42 minutes).

### Genomic and Chromatin Assays
1. Cleavage Under Targets and Release Using Nuclease (CUT&RUN):
   - Profiling H3K27ac, p300, and BCL6 genomic distribution following 2, 6, and 24 hours of compound treatment.
2. Nascent RNA Profiling (SLAM-seq / PRO-seq):
   - Metabolic RNA labeling with 4-thiouridine (4sU) to measure immediate primary transcriptional changes within 60 minutes.
3. Genome-Wide CRISPR-Cas9 Suppressor Screens:
   - Mutagenized DLBCL lines treated with lethal KAT-TCIP1 concentrations to identify resistance mechanisms (validating p300, EP300, CREBBP, and caspase pathways).

## 6. Experiments & Results

### Quantitative Cytotoxicity and Apoptosis Metrics
Comparative in vitro response across human lymphoma cell lines:

| Cell Line | Lymphoma Subtype | BCL6 Status | KAT-TCIP1 IC50 (nM) | BCL6 Degrader IC50 (nM) | Caspase-3/7 Activation (Fold at 6h) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| OCI-Ly1 | GCB-DLBCL | High / Dependent | 14 +/- 2 | 480 +/- 45 | 12.4 +/- 1.1 |
| OCI-Ly7 | GCB-DLBCL | High / Dependent | 22 +/- 3 | 650 +/- 60 | 9.8 +/- 0.8 |
| Farage | GCB-DLBCL | Translocated / High | 18 +/- 2 | 520 +/- 50 | 11.2 +/- 0.9 |
| TMD8 | ABC-DLBCL | Moderate / Dependent | 45 +/- 5 | 890 +/- 80 | 6.5 +/- 0.6 |
| K562 | CML Control | Absent | > 10,000 | > 10,000 | 1.0 +/- 0.1 |
| Ramos | Burkitt (MYC+) | BCL6-Independent | > 5,000 | > 5,000 | 1.1 +/- 0.1 |

### In Vivo Efficacy in Xenograft Models
- Model: Subcutaneous OCI-Ly1 xenografts in NSG mice.
- Regimen: KAT-TCIP1 administered intraperitoneally at 15 mg/kg once daily for 21 days.
- Tumor Response: Complete tumor regression observed in 8 of 10 treated mice without significant animal body weight loss (under 3% weight variation).
- Histological Staining: TUNEL-positive apoptotic nuclei increased 18-fold in excised tumor tissue 24 hours post-dose.

### Mechanistic Discoveries
1. Epigenetic Inversion Rate: Histone H3K27 hyperacetylation occurs within 30 minutes at BCL6 target enhancers, preceding Pol II pause release and transcriptional elongation of BBC3 (PUMA).
2. Resistance Mapping: Genome-wide CRISPR knockout identified loss of EP300, CREBBP, or the pro-apoptotic executioner BAX as primary genetic routes conferring resistance, verifying the necessity of the synthetic transactivation pathway.

## 7. Limitations & Open Problems
1. Hook Effect at High Dosing: Like all bivalent proximity inducers, supra-optimal concentrations saturate individual targets as binary complexes, reducing active ternary assemblies in vivo.
2. Oral Bioavailability Constraints: The molecular weight (892 Da) and rotatable bond count currently restrict administration to parenteral or intraperitoneal routes.
3. Target Heterogeneity in Solid Tumors: Malignant sub-clones harboring BCL6 mutations or chromatin-remodeling deficiencies (e.g., EP300 inactivating mutations) display intrinsic drug resistance.

## 8. Reproducibility Notes
- Chemical Synthesis Protocols: Detailed reaction schemes, NMR spectra, and LC-MS traces for KAT-TCIP1 deposited in Supplementary Data Document S1.
- Genomic Data: Raw CUT&RUN and PRO-seq datasets deposited in NCBI GEO under accession GSE249118.
- Screening Datasets: CRISPR screen sgRNA enrichment tables deposited in Mendeley Data (DOI: 10.17632/v96m82x9z3.1).

## 9. Project Ideas Derived From This Paper
1. Ternary Cooperativity Simulation Tool (Proof of Concept):
   - Objective: Develop a Python simulation modeling mass action kinetics and equilibrium concentrations of binary versus ternary complexes under fluctuating pharmacokinetic clearance curves.
   - Stack: Python, SciPy (odeint), Matplotlib.
   - Core Bottleneck: Measuring in vivo cellular dissociation rates accurately.
2. Structure-Guided TCIP Docking Pipeline (Tool Extension):
   - Objective: Build an automated computational pipeline evaluating linker geometry and protein-protein steric clashes for arbitrary recruiter-warhead combinations using AlphaFold-Multimer.
   - Stack: Python, PyRosetta, AlphaFold2, BioPython.
   - Core Bottleneck: Modeling flexible linker conformations in solvent environments.
3. Neo-Enhancer Targeted Epigenetic Glues (Ambitious Extension):
   - Objective: Synthesize bifunctional molecules linking SWI/SNF (BAF) complexes to oncogenic fusion proteins (such as EWS-FLI1 in Ewing sarcoma), converting repressor complexes into lethal transactivators.
   - Stack: Synthetic Organic Chemistry, Biophysics, Xenograft Pharmacology.
   - Core Bottleneck: Identifying non-perturbing small-molecule ligands for disordered fusion proteins.

## 10. Key Terms Glossary
- CIP: Chemically Induced Proximity, pharmacological strategy using bifunctional molecules to force physical interaction between two non-interacting proteins.
- TCIP: Transcriptional / Epigenetic Chemical Inducer of Proximity, bivalent molecule recruiting chromatin-modifying enzymes to genomic targets.
- BCL6: B-cell lymphoma 6, zinc-finger transcriptional repressor essential for germinal center formation and an oncogenic driver in DLBCL.
- p300 / CBP: Lysine acetyltransferases (EP300 and CREBBP) catalyzing histone acetylation (H3K27ac) to stimulate gene transcription.
- H3K27ac: Acetylation of histone H3 lysine 27, chromatin mark denoting active promoters and enhancers.
- PUMA: p53 Up-regulated Modulator of Apoptosis (BBC3), BH3-only pro-apoptotic protein triggering mitochondrial outer membrane permeabilization.
- Hook Effect: Biphasic dose-response phenomenon wherein high concentrations of bivalent ligands favor binary complexes over functional ternary complexes.
