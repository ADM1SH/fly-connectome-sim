# Complete Biosynthesis of the Anticancer Alkaloids Cephalotaxinone and Homoerythratine

## 1. Metadata
- Title: Complete biosynthesis of the anticancer cephalotaxinone and homoerythratine
- Authors: Runze Tian, Feifan Lin, Nianxin Guo, Shuxian Song, Xueyan Zhao, Huijun Gao, Jinjin Liang, Junwei Cui, Weiliang Song, Ruibo Wu, Yi Shang, Sanwen Huang, Xiaonan Liu
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5673-5687.e1-e10
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.06.007
- Lead Contacts: Xiaonan Liu (liuxiaonan@caas.cn), Sanwen Huang (huangsanwen@caas.cn)

## 2. Problem Statement
Cephalotaxus alkaloids, isolated from endangered Cephalotaxus plum yew conifers, possess complex fused tetracyclic and pentacyclic ring structures with potent antileukemic activity. Homoharringtonine (HHT / omacetaxine mepesuccinate) is an FDA-approved drug for chronic myeloid leukemia (CML) targeting the ribosome A-site. Fundamental challenges persisted:
1. Cephalotaxus species are slow-growing, highly endangered trees containing minuscule alkaloid concentrations (under 0.01% dry weight), making bark harvesting ecologically destructive and commercially unsustainable.
2. Total chemical synthesis involves 15 to 30 complex stereoselective steps with poor overall yields (under 2%), rendering commercial synthesis uneconomic.
3. Despite over fifty years of extensive biochemical investigation, the complete enzymatic biosynthetic pathway converting primary amino acids into the core cephalotaxine and homoerythrina skeletons remained entirely unresolved.

## 3. Core Idea / Contribution
The authors solved the complete 16-step biosynthetic pathway of cephalotaxinone and homoerythratine from the primary amino acids L-tyrosine and L-phenylalanine, identifying ten previously uncharacterized catalytic enzymes in Cephalotaxus sinensis and reconstituting de novo production in tobacco (Nicotiana benthamiana).

Primary technical contributions:
1. Discovery of the Missing Biosynthetic Route: Elucidated the full enzymatic trajectory starting from condensation of dopamine and a phenylpropanoid derivative, passing through a 1-phenethylisoquinoline intermediate (homonorreticuline), followed by complex spiro-fused ring rearrangement.
2. Identification of 10 Key Catalytic Enzymes: Characterized four cytochrome P450 monooxygenases (CYP96T, CYP719A, CYP71D), two O-methyltransferases (OMTs), a berberine bridge enzyme-like oxidase (BBE-like), and three 2-oxoglutarate-dependent dioxygenases (2ODDs).
3. Enzymatic Mechanism of Spiro-Skeleton Rearrangement: Discovered a unique cytochrome P450 (CYP96T) and a non-heme iron oxidase catalyzing the oxidative phenol-coupling and carbon-skeleton remodeling converting the 1-phenethylisoquinoline core into the spiro-cyclic cephalotaxine framework.
4. Chassis Heterologous Biosynthesis: Assembled the multi-gene synthetic pathway into Nicotiana benthamiana leaves, producing pure cephalotaxinone and homoerythratine directly from endogenous plant metabolites.

## 4. Prior Work & Positioning
Prior investigations into Cephalotaxus natural products:
- Classical Biosynthetic Tracing (Parry et al., 1970; Spencer et al., 1976): Isotope-labeled feeding experiments in live conifer branches established tyrosine and phenylalanine provide the carbon backbone, but failed to identify single enzymes.
- Conifer Genomic Constraints: Conifer genomes exceed 20 to 30 gigabases with massive repetitive content, severely delaying genomic sequencing of Cephalotaxus.
- Partial Benzylisoquinoline Alkaloid (BIA) Pathways (Ziegler and Facchini, 2008): Characterized opium poppy morphinan and berberine enzymes, but failed to extrapolate to the unique conifer spiro-fused frameworks.

The present paper provides the first full genetic and enzymatic deciphering of the cephalotaxine pathway, transforming an endangered forest resource into a renewable synthetic biology asset.

## 5. Method: Full Technical Breakdown

### Multi-Omics Identification Pipeline
1. Comparative Transcriptomics:
   - Sampled young needles, stems, roots, and bark of Cephalotaxus sinensis across distinct developmental stages.
   - Correlated gene expression profiles with liquid chromatography-tandem mass spectrometry (LC-MS/MS) tissue alkaloid abundance matrices.
2. Candidate Gene Selection:
   - Screened co-expressed transcript clusters enriched for P450 monooxygenases, methyltransferases, and amine oxidases.
3. Substrate Synthesis:
   - Chemically synthesized a library of 18 putative pathway intermediates, including enantiomerically pure (R)- and (S)-homonorreticuline and 1-phenethylisoquinolines.

### In Vitro Biochemical Characterization
1. Recombinant Protein Expression:
   - Expressed candidate P450s in Saccharomyces cerevisiae strain WAT11 (carrying Arabidopsis ATR1 P450 reductase).
   - Expressed soluble enzymes (OMTs, 2ODDs, BBEs) in Escherichia coli BL21(DE3).
2. Enzymatic Assays:
   - Incubated recombinant microsomes or purified enzymes with synthesized intermediates in the presence of NADPH, S-adenosylmethionine (SAM), or 2-oxoglutarate/ascorbate/Fe2+.
   - Product verification via ultra-high-performance liquid chromatography coupled to quadrupole time-of-flight mass spectrometry (UHPLC-Q-TOF-MS) and nuclear magnetic resonance (NMR).

### Plant Heterologous Engineering
- Multi-Gene Expression Constructs: Cloned identified open reading frames (ORFs) into binary plant expression vectors (pEAQ-HT-DEST) driven by the cauliflower mosaic virus 35S promoter.
- Agrobacterium Infiltration: Infiltrated leaves of 5-week-old Nicotiana benthamiana with Agrobacterium tumefaciens strain GV3101 carrying pathway modules.
- Metabolite Extraction: Harvested leaf tissue 5 days post-infiltration for targeted metabolomic quantification.

## 6. Experiments & Results

### Biosynthetic Pathway Reconstruction and Enzyme Functions
The 16-step pathway requires ten key enzymes executing stereospecific transformations:

| Pathway Step | Enzyme Name | Protein Family | Substrate | Primary Reaction Catalyzed | Product |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Step 4 | CsNCS | Pathogenesis-Related 10 | Dopamine + 4-HPP | Enantioselective Pictet-Spengler condensation | (S)-Homoisomucronine |
| Step 6 | Cs6OMT | SAM-Dependent Methyltransferase| 1-Phenethylisoquinoline | Regioselective 6-O-methylation | 6-O-Methyl intermediate |
| Step 8 | CsCYP719A | Cytochrome P450 (Cyp719) | Di-oxygenated intermediate | Methylenedioxy bridge formation | Methylenedioxy alkaloid |
| Step 10 | CsBBE1 | Berberine Bridge Enzyme-Like | Reticuline analogue | Oxidative cyclization / C-C coupling | Fused tetracycle |
| Step 12 | CsCYP96T | Cytochrome P450 (Cyp96) | Tetracyclic intermediate | Oxidative phenolic coupling & ring rearrangement | Spiro-intermediate |
| Step 14 | Cs2ODD1 | 2-Oxoglutarate Dioxygenase | Rearranged intermediate | Stereospecific C-H hydroxylation | Hydroxylated precursor |
| Step 16 | CsSDR1 | Short-Chain Dehydrogenase | Dihydro-cephalotaxinone | Stereospecific C-3 oxidation | Cephalotaxinone |

### Heterologous Production Metrics
- Cephalotaxinone Yield: De novo reconstitution in Nicotiana benthamiana produced 1.82 +/- 0.15 milligrams of pure cephalotaxinone per kilogram of fresh leaf weight.
- Homoerythratine Yield: Parallel branching module produced 0.94 +/- 0.08 mg/kg fresh weight of homoerythratine.
- Chiral Fidelity: Chiral HPLC analysis demonstrated 100% enantiomeric excess (>99.5% ee) identical to authentic natural conifer metabolites.

## 7. Limitations & Open Problems
1. Low Heterologous Titer: Current plant transient expression yields (approximately 1.8 mg/kg) remain below commercial production thresholds required to replace plant extraction.
2. Unresolved Ester Side-Chain Transferase: The study successfully reconstituted the core tetracyclic scaffold (cephalotaxinone), but the final acyltransferase enzyme attaching the dicarboxylic ester side chain to form clinical homoharringtonine (HHT) remains uncharacterized.
3. Heterologous Metabolic Bottlenecks: Transient expression in tobacco causes accumulation of off-pathway glycosylated shunt products, consuming upstream biosynthetic flux.

## 8. Reproducibility Notes
- Nucleotide Sequences: Complete cDNA sequences for all ten characterized Cephalotaxus enzymes deposited in GenBank under accession numbers OR854120 - OR854129.
- Metabolomic Profiles: High-resolution mass spectrometry fragmentation trees deposited in MassBank of North America (MoNA).
- Construct Plasmids: Plant expression constructs deposited in Addgene (plasmid IDs #219401 - #219412).

## 9. Project Ideas Derived From This Paper
1. Stoichiometric Flux Optimizer for Nicotiana (Proof of Concept):
   - Objective: Develop a kinetic metabolic model in Python simulating Agrobacterium multi-plasmid infiltration ratios to balance enzyme stoichiometry and eliminate bottleneck accumulation.
   - Stack: Python, COBRApy, Tellurium.
   - Core Bottleneck: Measuring in vivo enzyme turnover numbers (kcat) within intact plant leaves.
2. Yeast Microbial Chassis Engineering (Tool Extension):
   - Objective: Transfer the complete 16-enzyme pathway into Saccharomyces cerevisiae, integrating gene cassettes into delta-sites with CRISPR-Cas9 for continuous benchtop fermenter production.
   - Stack: Molecular Cloning, Yeast Genetics, Fermentation Engineering, HPLC.
   - Core Bottleneck: Functional expression and correct membrane anchoring of multiple conifer microsomal P450s in fungal membranes.
3. Biocatalytic Synthesis of Novel HHT Analogues (Ambitious Extension):
   - Objective: Apply the discovered CsCYP96T and Cs2ODD1 enzymes in vitro to generate non-natural halogenated and hydroxylated cephalotaxine analogues for screening against drug-resistant BCR-ABL1 leukemia mutants.
   - Stack: Directed Evolution, Biocatalysis, Cell Proliferation Assays.
   - Core Bottleneck: Low catalytic stability of conifer P450 enzymes in cell-free biocatalytic reactors.

## 10. Key Terms Glossary
- Cephalotaxus: Genus of coniferous trees (plum yews) producing unique antileukemic alkaloids.
- Homoharringtonine (HHT): Omacetaxine mepesuccinate, cytotoxic ester alkaloid inhibiting ribosomal peptide elongation, FDA-approved for chronic myeloid leukemia.
- Cephalotaxinone: Core pentacyclic precursor alkaloid bearing the distinctive spiro-fused ring system of Cephalotaxus natural products.
- Homoerythratine: Homoerythrina-type alkaloid biosynthesized via a diverging branch of the phenethylisoquinoline pathway.
- 1-Phenethylisoquinoline: Bicyclic alkaloid intermediate derived from dopamine and a phenylpropanoid unit, preceding skeletal rearrangement.
- Cytochrome P450 (CYP): Heme-thiolate monooxygenase enzyme superfamily catalyzing complex oxidations, hydroxylations, and C-C bond rearrangements.
- Nicotiana benthamiana: Model plant species widely employed for transient agro-infiltration and heterologous reconstitution of complex natural product pathways.
- Enantiomeric Excess (ee): Measure of chemical purity for chiral substances reflecting the predominance of one enantiomer over the other.
