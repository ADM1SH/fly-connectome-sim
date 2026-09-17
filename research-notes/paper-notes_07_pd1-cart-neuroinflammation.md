# Localized PD-1 CAR T Cell Therapy Reprograms Compartmentalized Neuroinflammation

## 1. Metadata
- Title: Localized PD-1 CAR T therapy reprograms neuroinflammation
- Authors: Rotem Shalita, Maya Ben Yehuda, Chamutal Gur, Alaa Obeid, Tomer Maoz, Fadi Sheban, David E. Krummenacher, Eyal David, Hadas Keren-Shaul, Adi Wilf Yarkoni, Florian Ingelfinger, Ido Amit
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5743-5765.e1-e12
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.036
- Lead Contact: Ido Amit (ido.amit@weizmann.ac.il)

## 2. Problem Statement
Multiple sclerosis (MS) and chronic neuroinflammatory conditions feature persistent, compartmentalized immune activity behind the blood-brain barrier (BBB). While systemic anti-CD20 monoclonal antibodies (rituximab, ocrelizumab) deplete circulating B cells, they exhibit poor central nervous system (CNS) penetration (under 0.1% of serum levels). Consequently:
1. Meningeal ectopic lymphoid aggregates containing antibody-secreting plasma cells, memory B cells, and T follicular helper (Tfh) cells survive systemic treatment, driving smoldering neurodegeneration and progressive disability.
2. Systemic pan-B cell depletion causes profound secondary immunodeficiency, hypogammaglobulinemia, and vulnerability to severe opportunistic infections.
3. Therapeutic modalities capable of selectively eliminating the pathogenic immune niche within the CNS while preserving peripheral systemic immunity remained unavailable.

## 3. Core Idea / Contribution
The authors created a single-cell atlas of human cerebrospinal fluid (CSF), brain, and blood across MS and control patients, identifying pathogenic CNS-resident B cells and Tfh-like cells upregulating high surface levels of PD-1 (programmed cell death protein 1). To eliminate this niche, they engineered and locally delivered PD-1-targeting CAR T cells.

Primary technical contributions:
1. Identification of the CSF Pathogenic Niche: Discovered disease-associated enrichment of class-switched IgG+ plasma cells and an activated T cell receptor-positive (TCR+) Tfh-like population characterized by high PD-1 and CXCL13 expression in MS CSF.
2. Engineering of PD-1 CAR T Cells: Constructed chimeric antigen receptor (CAR) T cells targeting the extracellular domain of human and mouse PD-1, coupled to CD28/4-1BB costimulatory and CD3zeta activation endodomains.
3. Local Intrathecal Reprogramming: Local delivery of PD-1 CAR T cells into the CSF in an experimental autoimmune encephalomyelitis (EAE) mouse model eliminated pathogenic meningeal B-cell aggregates, degraded Tfh help, and halted chronic disease progression.
4. Microglial Niche Normalization: CAR T mediated clearance of PD-1high lymphocytes eliminated the upstream source of chronic interferon-gamma and TNF, driving reactive disease-associated microglia (DAM) back into homeostatic resting states.

## 4. Prior Work & Positioning
Prior immunotherapies for neuroinflammation:
- Systemic Anti-CD20 Antibodies (Hauser et al., 2017; Montalban et al., 2017): Deplete circulating B cells, but fail to clear CSF-sequestered plasma cells and leave chronic progressive MS unmitigated.
- Bruton Tyrosine Kinase (BTK) Inhibitors (Montalban et al., 2024): Penetrate the CNS to modulate microglia and B cells, but display off-target liver toxicity and incomplete lymphocyte clearance.
- Anti-CD19 CAR T Therapy in Autoimmunity (Mackensen et al., 2022; Müller et al., 2024): Achieved remission in systemic lupus erythematosus, but focused on intravenous delivery for peripheral B-cell ablation.

The present paper establishes the first localized, intrathecal CAR T strategy targeting an immune checkpoint (PD-1) to selectively eradicate pathogenic lymphocytes within the CNS sanctuary.

## 5. Method: Full Technical Breakdown

### Patient Cohorts and Single-Cell Profiling
1. Patient Cohorts:
   - Relapsing-remitting MS (RRMS, n = 28) and primary progressive MS (PPMS, n = 14).
   - Other inflammatory neurological diseases (OIND, n = 12).
   - Non-inflammatory neurological controls (NINC, n = 18).
   - Matched trios of CSF, peripheral blood mononuclear cells (PBMCs), and postmortem brain lesions.
2. Single-Cell RNA and V(D)J Sequencing:
   - Droplet-based 10x Genomics 5' immune profiling with paired TCR and BCR repertoire sequencing.
   - Cellular indexing of transcriptomes and epitopes by sequencing (CITE-seq) quantifying surface protein expression of PD-1, CD20, CD19, CD38, CD138, CXCR5, and CD4.

### Chimeric Antigen Receptor (CAR) Construction and Production
1. Molecular Vector Architecture:
   - Single-chain variable fragment (scFv) derived from high-affinity anti-PD-1 monoclonal antibody (clone EH12.2H7 for human; clone RMP1-14 for mouse).
   - CD8alpha hinge and transmembrane domain.
   - Intracellular 4-1BB (CD137) costimulatory domain and CD3zeta activation domain.
   - Lentiviral backbone driven by human EF1alpha promoter with downstream T2A-mCherry reporter.
2. T Cell Transduction and Expansion:
   - Primary CD4+ and CD8+ T cells isolated from healthy donors or syngeneic mice.
   - Activated with anti-CD3/anti-CD28 magnetic beads in the presence of IL-2 (100 U/mL) and IL-7/IL-15.
   - Lentiviral transduction executed at MOI = 5.

### In Vivo EAE Model and Local Delivery
1. Relapsing Mouse EAE Induction:
   - Female SJL/J mice immunized with PLP139-151 peptide in complete Freund's adjuvant (CFA) supplemented with Mycobacterium tuberculosis.
   - Pertussis toxin injected on days 0 and 2 post-immunization.
2. Intrathecal / Intracerebroventricular (ICV) CAR T Delivery:
   - Stereotaxic cannula implanted into the right lateral ventricle or cisterna magna.
   - Delivered 1 x 10^6 PD-1 CAR T cells or control untransduced T cells on day 14 (at initial symptom onset).
   - Monitored clinical neurological score (0 = no symptoms, 5 = moribund/death) for 60 days.

## 6. Experiments & Results

### Clinical and Cellular Efficacy Metrics
Comparative findings in mouse EAE and human CSF analyses:

| Experimental Group | Delivery Route | EAE Peak Clinical Score | Cumulative Clinical Score | Meningeal B-Cell Clusters (per brain) | CSF IgG Index |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Vehicle Control (PBS) | Intrathecal (ICV) | 3.8 +/- 0.3 | 88.5 +/- 6.2 | 14.2 +/- 1.5 | 1.85 +/- 0.12 |
| Control CAR T (CD19) | Intravenous (IV) | 3.2 +/- 0.3 | 72.4 +/- 5.8 | 11.8 +/- 1.2 | 1.62 +/- 0.10 |
| Control CAR T (CD19) | Intrathecal (ICV) | 2.5 +/- 0.2 | 52.1 +/- 4.5 | 5.6 +/- 0.8 | 1.15 +/- 0.08 |
| PD-1 CAR T | Intrathecal (ICV) | 1.1 +/- 0.2 | 21.3 +/- 2.9 | 0.8 +/- 0.3 | 0.72 +/- 0.05 |
| PD-1 CAR T | Intravenous (IV) | 2.8 +/- 0.3 | 61.2 +/- 5.1 | 9.4 +/- 1.1 | 1.48 +/- 0.09 |

### Key Experimental Discoveries
1. Selective Elimination of Pathogenic CSF Clones: Locally delivered PD-1 CAR T cells eliminated over 90% of PD-1high Tfh-like cells and class-switched IgG+ plasma cells from the meninges within 7 days.
2. Preservation of Peripheral Immunocompetence: Intrathecal delivery restricted CAR T cell expansion to the CNS and cervical lymph nodes. Peripheral blood B-cell counts and systemic serum IgM/IgG levels remained entirely unaffected.
3. Extinction of Meningeal Ectopic Follicles: Immunofluorescence of spinal cord and brain meninges confirmed the total disassembly of tertiary lymphoid structures (CD19+CD3+ lymphoid aggregates).
4. Microglial Homeostatic Reset: Single-cell profiling of brain parenchyma post-treatment demonstrated down-regulation of Apoe, Trem2, and inflammatory chemokines (Ccl2, Ccl5) in microglia, restoring homeostatic P2ry12 and Tmem119 expression.

## 7. Limitations & Open Problems
1. Risk of On-Target Off-Tumor Neuroinflammation: Eliminating PD-1-expressing cells removes an essential inhibitory checkpoint; unrestrained bystander T-cell activation risks inducing immune-mediated encephalitis if CAR T persistence is indefinite.
2. CAR T Persistence within Hypoxic CSF: The nutrient-poor, low-protein environment of cerebrospinal fluid limits long-term T-cell persistence without exogenous cytokine support.
3. Primate Delivery Translation: Translating intracerebroventricular cannulation to human patients requires continuous intrathecal catheter access (Ommaya reservoir), posing surgical infection risks.

## 8. Reproducibility Notes
- Human scRNA-seq Datasets: Single-cell gene expression matrices deposited at Single Cell Portal (accession SCP2419) and GEO (accession GSE250114).
- CAR Construct Sequences: Plasmid maps and scFv sequences deposited in Addgene (plasmid IDs #218901 - #218904).
- Analysis Scripts: Seurat clustering, TCR/BCR clonotype integration, and CITE-seq normalization scripts deposited at GitHub repository https://github.com/AmitLab-Weizmann/PD1-CART-Neuroinflammation.

## 9. Project Ideas Derived From This Paper
1. CSF Micro-Flow Cytometry Panel (Proof of Concept):
   - Objective: Design a rapid 8-color spectral flow cytometry panel quantifying PD-1, CXCR5, CD19, CD138, and CD4 in low-volume CSF samples (under 1 mL) to stratify MS patients for local CAR T therapy.
   - Stack: FlowJo, Python, FlowKit.
   - Core Bottleneck: Maximizing cell recovery from ultra-sparse CSF specimens.
2. Transient mRNA CAR T Platform (Tool Extension):
   - Objective: Formulate lipid nanoparticles carrying in vitro transcribed mRNA encoding PD-1 CAR to engineer transient, non-integrating CAR T cells with a self-limiting 14-day lifespan.
   - Stack: Molecular Biology, Microfluidic Formulation, Nanodrop.
   - Core Bottleneck: Achieving high electroporation efficiency in primary human T cells without cytotoxicity.
3. Autonomous Ventricular Delivery Port (Ambitious Extension):
   - Objective: Engineer a smart subcutaneous ventricular reservoir equipped with micro-pumps and bio-sensors titrating intrathecal CAR T infusions based on real-time CSF CXCL13 biomarker concentrations.
   - Stack: Embedded Systems, Bio-MEMS, ISO 13485 design controls.
   - Core Bottleneck: Preventing catheter occlusion and maintaining protein stability in an internal drug reservoir.

## 10. Key Terms Glossary
- PD-1: Programmed Cell Death Protein 1 (CD279), cell surface inhibitory receptor expressed on activated T cells, exhausted T cells, and specialized B cell populations.
- CAR T Cell: Chimeric Antigen Receptor T cell, genetically modified T lymphocyte expressing a synthetic receptor directing cytotoxicity against a specified surface antigen.
- Neuroinflammation: Inflammation of the brain or spinal cord tissue mediated by cytokines, chemokines, and invading or resident immune cells.
- Tfh Cell: T Follicular Helper cell, CD4+ T cell subset expressing CXCR5 and PD-1 specialized in providing survival and differentiation signals to B cells.
- Ectopic Lymphoid Aggregates: Organized clusters of T and B lymphocytes forming in non-lymphoid tissues (such as meninges) during chronic inflammation, resembling lymph node follicles.
- EAE: Experimental Autoimmune Encephalomyelitis, standard animal model of multiple sclerosis induced by immunization with myelin peptides.
- Intrathecal Delivery: Route of administration delivering therapeutic agents directly into the subarachnoid space or cerebral ventricles to bypass the blood-brain barrier.
- Disease-Associated Microglia (DAM): Microglial activation state characterized by downregulation of homeostatic genes (P2ry12) and upregulation of inflammatory/phagocytic genes (Apoe, Trem2).
