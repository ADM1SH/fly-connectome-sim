# Recurrent Patterns of TOP1-Mediated Neuronal Genomic Damage Shared by Major Neurodegenerative Disorders

## 1. Metadata
- Title: Recurrent patterns of TOP1-mediated neuronal genomic damage shared by major neurodegenerative disorders
- Authors: Zinan Zhou, Lovelace J. Luquette, Guanlan Dong, S. M. Hoque, Peter J. Park, Clotilde Lagier-Tourenne, Eunjung Alice Lee, Christopher A. Walsh
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5766-5782.e1-e11
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.013
- Lead Contacts: Zinan Zhou (zinan.zhou@childrens.harvard.edu), Christopher A. Walsh (christopher.walsh@childrens.harvard.edu)

## 2. Problem Statement
Amyotrophic lateral sclerosis (ALS), frontotemporal dementia (FTD), and Alzheimer disease (AD) represent divergent neurodegenerative categories defined by distinct proteinopathies: TDP-43 aggregation in ALS/FTD versus tau tangles and amyloid plaques in AD. Despite distinct pathological markers, post-mitotic neurons in all three diseases undergo progressive loss. Whether a common upstream molecular lesion damages the neuronal genome remained unresolved:
1. Conventional bulk DNA sequencing obscured somatic mutations occurring in individual degenerating neurons.
2. Prior single-cell sequencing suffered from amplification artifacts (MDA false positives) preventing accurate somatic mutation burden estimation.
3. Whether disease-associated somatic mutations reflect non-specific oxidative decay or stereotypic enzymatic failures during transcription was unknown.

## 3. Core Idea / Contribution
By performing single-cell whole-genome sequencing (scWGS) on 469 isolated neuronal nuclei from postmortem human ALS, FTD, AD, and control brains, the authors identified a common disease-associated mutational signature linked to abortive topoisomerase 1 (TOP1) cleavage during high-volume transcription.

Primary technical contributions:
1. High-Precision Single-Neuron Genomics: Employed SCAN2 single-cell variant calling on 469 neuronal genomes, isolating bona fide somatic single-nucleotide variants (sSNVs) and somatic small insertions/deletions (sIndels).
2. Shared Mutational Signature D: Identified a distinct mutational signature (Signature D, dominated by T>G and T>A transversions) present across C9ORF72 ALS, C9ORF72 FTD, and sporadic AD neurons, absent in healthy aged controls.
3. Mutational Hotspots at TOP1 Cleavage Sites: Somatic mutations map selectively to topoisomerase 1 recognition motifs (5'-[T/C]G[T/C]-3') located within long, highly transcribed neural genes (such as NRXN1, CNTNAP2, CADM2).
4. Anatomical Vulnerability Mapping: TOP1-mediated mutation accumulation occurs in vulnerable cerebral cortex and motor neurons, but is completely absent in resistant cerebellar granule cells from the same patient donors.

## 4. Prior Work & Positioning
Prior single-neuron genomic studies:
- Lodato et al. (2015, 2018): Established somatic SNV accumulation proceeding linearly with age in healthy human neurons (Signature A).
- Park et al. (2022): Reported elevated mutation burdens in Alzheimer disease, but attributed mutations primarily to generalized oxidative DNA damage (8-oxo-dG).
- Kim et al. (2020): Identified R-loops in neurodegeneration, but failed to link transcriptional stress to specific enzymatic cleavage signatures.

The present paper reveals neurodegenerative somatic mutation is not random oxidative decay, but a specific enzymatic failure where TOP1-cleavage complexes (TOP1cc) become trapped at transcription-replication/R-loop conflicts.

## 5. Method: Full Technical Breakdown

### Human Brain Tissue and Nuclei Sorting
1. Postmortem Brain Cohort:
   - C9ORF72 ALS motor cortex (Brodmann Area 4, n = 5 donors).
   - C9ORF72 FTD prefrontal cortex (Brodmann Area 9, n = 5 donors).
   - Alzheimer disease temporal/frontal cortex (Braak stage V-VI, n = 6 donors).
   - Age-matched neurologically normal controls (n = 6 donors).
   - Paired cerebellar tissue from the same donors (negative control).
2. Fluorescence-Activated Nuclei Sorting (FANS):
   - Nuclei isolated via Dounce homogenization and sucrose gradient centrifugation.
   - Dual immunostaining: NeuN (neuronal marker) and phospho-TDP-43 (Ser409/410) or phospho-Tau (AT8).
   - Sorted single nuclei into 96-well plates containing lysis buffer.

### Single-Cell Whole-Genome Sequencing and Bioinformatics
1. Whole-Genome Amplification: Multiple Displacement Amplification (MDA) with Phi29 polymerase or primary template-directed amplification (PTA).
2. Sequencing Parameters: Illumina NovaSeq 6000, 150 bp paired-end reads, average raw coverage 30x per single neuron.
3. Somatic Variant Calling via SCAN2:
   - Applied SCAN2 (Single-Cell Analysis of Somatic Variants), modeling MDA amplification bias, allele dropout, and chimeric read artifacts using local binomial and Poisson distributions.
   - Stringent filtering removed germline variants using matched bulk brain or peripheral tissue genomes.
4. Non-Negative Matrix Factorization (NMF): Decomposed 96-trinucleotide mutational spectra into known COSMIC signatures (Signature A: clock-like aging) and the novel Signature D.

### Computational R-Loop and Genomic Feature Mapping
- Genomic Annotations: Overlapped mutation coordinates with ENCODE brain RNA-seq, nascent GRO-seq, DRIP-seq (R-loop profiling), and recombinant TOP1-seq cleavage coordinates.
- Transversion Ratio Calculation:
$$\text{Transversion Ratio} = \frac{\text{Count}(T \to G) + \text{Count}(T \to A)}{\text{Count}(C \to T)}$$

## 6. Experiments & Results

### Quantitative Genomic Damage Metrics
Census of single-cell sequencing and somatic mutation burdens:

| Patient Cohort | Anatomical Region | Analyzed Neurons (n) | Mean sSNVs per Neuron | Mean sIndels per Neuron | Signature D Proportion (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Normal Control | Motor/Prefrontal Cortex | 112 | 1,420 +/- 115 | 88 +/- 12 | 2.4 +/- 0.8% |
| C9ORF72 ALS | Motor Cortex (BA4) | 98 | 2,890 +/- 240 | 215 +/- 26 | 38.5 +/- 3.6% |
| C9ORF72 FTD | Prefrontal Cortex (BA9) | 94 | 3,120 +/- 265 | 238 +/- 29 | 42.1 +/- 4.1% |
| Alzheimer Disease | Prefrontal / Temporal | 105 | 3,450 +/- 310 | 260 +/- 32 | 44.8 +/- 3.9% |
| ALS / AD Paired | Cerebellar Granule Cells | 60 | 1,380 +/- 95 | 74 +/- 10 | 1.8 +/- 0.6% |

### Mechanistic Findings
1. Signature D Characteristics: Strongly enriched in T>G transversions at NTT motifs and T>A transversions at GTA motifs, matching in vitro TOP1 cleavage specificity matrices.
2. Gene Length and Expression Correlation: Mutation density correlates positively with gene length (genes longer than 100 kilobases show 4.5-fold higher somatic mutation density than short genes) and with nascent transcript expression levels.
3. R-Loop Association: Mutation sites show sharp enrichment at the boundaries of un-cleared R-loops where the non-template single-stranded DNA is exposed to abortive TOP1 cleavages.
4. Resistance of Cerebellar Granule Cells: Cerebellar granule cells display short synaptic genes, low baseline transcriptional burden, and zero enrichment of Signature D, providing internal proof of transcriptional demand dictating vulnerability.

## 7. Limitations & Open Problems
1. Postmortem Survivor Bias: Sequenced neurons survived until patient death; neurons accumulating lethal mutation burdens underwent apoptosis earlier, causing underestimation of maximum genomic damage.
2. Single-Cell Amplification Loss: SCAN2 achieves high specificity (false discovery rate under 1%) but captures approximately 35% of true somatic mutations due to amplification dropouts.
3. Therapeutic Inaccessibility: Topoisomerase catalytic inhibitors (such as camptothecin analogues) exacerbate TOP1cc formation; developing molecules safely dissociating trapped TOP1 without blocking essential transcription remains challenging.

## 8. Reproducibility Notes
- Sequencing Data Repositories: Raw FASTQ and aligned BAM files deposited in dbGaP under accession phs001485.v4.p1.
- Variant Calling Pipeline: SCAN2 source code accessible via GitHub at https://github.com/parklab/SCAN2.
- Mutational Signature Decomposition Code: Deposited at GitHub repository https://github.com/walshlab/TOP1-Neurodegeneration.

## 9. Project Ideas Derived From This Paper
1. TOP1-Cleavage Site Somatic Predictor (Proof of Concept):
   - Objective: Build a gradient boosted machine predicting scWGS mutation probability along neural loci based on RNA-seq transcript length, R-loop density, and sequence motif.
   - Stack: Python, XGBoost, PyRanges, scikit-learn.
   - Core Bottleneck: Normalizing variable chromatin accessibility across brain cell types.
2. R-Loop Resolving Small Molecule Screen (Tool Extension):
   - Objective: Establish a fluorescence polarization assay measuring displacement of trapped TOP1cc from synthetic R-loop DNA substrates by candidate neuroprotective compounds.
   - Stack: Biophysics, High-Throughput Screening (HTS), GraphPad Prism.
   - Core Bottleneck: Synthesizing stable, non-hydrolyzing RNA-DNA hybrid substrates.
3. Gene-Length Aware Deep Learning Diagnostic (Ambitious Extension):
   - Objective: Develop a diagnostic genomic classifier quantifying somatic Signature D fractions from cell-free DNA (cfDNA) in patient CSF to diagnose early neurodegeneration prior to cognitive decline.
   - Stack: Python, PyTorch, Nextflow, Illumina DRAGEN.
   - Core Bottleneck: Ultra-low concentration and high fragmentation of neuronal cfDNA in lumbar puncture samples.

## 10. Key Terms Glossary
- TOP1: Topoisomerase 1, enzyme relieving torsional strain during DNA replication and transcription by nicking and religating one strand of the DNA duplex.
- TOP1cc: Topoisomerase 1 Cleavage Complex, transient catalytic intermediate where TOP1 covalently bonds to the 3' phosphate of cleaved DNA.
- Somatic SNV (sSNV): Single-nucleotide variant arising post-zygotically in a single non-germline cell lineage.
- Somatic Indel (sIndel): Small insertion or deletion arising post-zygotically in somatic tissue.
- R-Loop: Three-stranded nucleic acid structure consisting of an RNA-DNA hybrid and a displaced single-stranded DNA loop.
- SCAN2: Algorithmic framework detecting somatic mutations in single cells from whole-genome sequencing data, correcting for MDA bias.
- Signature D: Disease-specific mutational profile identified in degenerating neurons characterized by T>G and T>A transversions at TOP1 motifs.
- Post-Mitotic Neurons: Terminal differentiated neurons permanently exiting the cell division cycle and requiring lifetime genomic preservation.
