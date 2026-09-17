# Prehistoric Trans-Eurasian Exchange in Gansu: Ancient Genomics and Social Practices

## 1. Metadata
- Title: Genomics and social practices at Mogou and other Gansu sites during prehistoric trans-Eurasian exchange
- Authors: Lin Shi, Chao Ning, Pengcheng Ma, Yuxin Fan, Wenjun Wang, Fan Zhang, Peng Gao, Yinqiu Cui, Qun Zhang, Hongen Jiang, Dong Wei, Martine Robbeets, Johannes Krause, Chuan-Chao Wang
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5802-5820.e1-e11
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.07.050
- Lead Contacts: Chao Ning (ningchao@pku.edu.cn), Chuan-Chao Wang (ccwang@xmu.edu.cn)

## 2. Problem Statement
Between 4,500 and 3,000 years before present (BP), the Hexi Corridor and Gansu-Qinghai region of northwestern China functioned as the primary crossroads for the trans-Eurasian exchange, facilitating the transmission of wheat, barley, domesticated sheep, goats, and bronze metallurgy from southwest Asia into East Asia. Anthropological and archaeological debates centered on:
1. Whether the introduction of western domesticates and bronze technology was driven by mass demic diffusion (migration of western Eurasian pastoralists, such as Yamnaya or Andronovo populations) or cultural diffusion through indigenous trade networks.
2. The population dynamics and demographic transitions underlying the Neolithic-to-Bronze Age cultural shifts in Gansu (Majiayao, Qijia, and Siwa archaeological cultures).
3. How collective multi-individual tomb co-burials, common in large cemeteries such as Mogou, were organized socially (whether interments reflected strict biological kinship or non-kin community practices).

## 3. Core Idea / Contribution
The authors generated genome-wide data for 149 ancient individuals from the Mogou cemetery and ten other Gansu archaeological sites dating from 4,700 to 3,000 BP, demonstrating prehistoric trans-Eurasian agricultural exchange occurred through cultural transmission without detectable Western Eurasian genetic admixture.

Primary technical contributions:
1. Genomic Reconstruction of Gansu Crossroads: Sequenced 149 ancient individuals spanning 1,700 years of cultural transition (Majiayao, Qijia, and Siwa cultures), establishing the definitive ancient DNA atlas of northwestern China.
2. Predominant Indigenous East Asian Ancestry: Proved populations adopting wheat, barley, and metallurgy retained continuous local Yellow River Neolithic ancestry (derived from Yangshao and Majiayao agriculturalists), showing zero genetic influx from Western Eurasian steppe pastoralists.
3. Resolution of Co-Burial Social Organization: Reconstructed extensive pedigrees across multi-individual tombs at the Mogou site; individuals buried together within single tombs frequently lacked close biological kinship, revealing collective burial customs were structured by social affiliation, clan alliances, or ritual status rather than strict nuclear family units.
4. Patrilineal Continuity: Analysis of uniparental markers revealed strong continuity of Y-chromosome haplogroups (dominated by O2a2b-P164 and Q1a1-M120), indicating stable patrilineal social organization over centuries despite external trade contact.

## 4. Prior Work & Positioning
Prior archaeological and genomic paradigms:
- Demic Diffusion Hypotheses (Childe, 1950; Anthony, 2007): Proposed the spread of bronze metallurgy and pastoralism across Eurasia was propelled by horse-riding pastoralist migrations.
- Central Asian Steppe Genomics (Allentoft et al., 2015; Haak et al., 2015; Narasimhan et al., 2019): Documented massive Yamnaya genetic turnover in Europe and South Asia, raising expectations of similar western demographic replacement in northwestern China.
- Morphometric Physical Anthropology: Previous cranial measurement studies in Gansu suggested morphological heterogeneity, but lacked the resolving power of authentic paleogenomic sequencing.

The present paper establishes cultural adoption and technological exchange proceeds at continental scales through trade networks without major demographic replacement.

## 5. Method: Full Technical Breakdown

### Ancient DNA Extraction and Library Preparation
1. Archaeological Sample Cohort:
   - Skeletal remains from 149 ancient individuals excavated across 11 archaeological sites in Gansu:
   - Primary site: Mogou cemetery (n = 114 individuals, Qijia and Siwa cultures, Tao River basin).
   - Comparative sites: Huoshaogou, Sanjia, Zhanqi, Shannashuzha, Donghuishan.
   - Radiocarbon dating: Direct accelerator mass spectrometry (AMS) 14C dating calibrated using IntCal20.
2. Cleanroom Protocols:
   - Petrous bone and tooth roots processed in dedicated ancient DNA cleanrooms (Peking University and Xiamen University).
   - Powder drilled using dental burs; DNA extracted via silica-spin column protocols optimized for short degraded fragments.
3. Library Construction and Target Capture:
   - Double-stranded and single-stranded DNA libraries prepared with unique dual indexes.
   - Target enrichment for 1.24 million single-nucleotide polymorphisms (the 1240K panel) or whole-genome shotgun sequencing on Illumina NovaSeq 6000.

### Authenticity and Kinship Quality Control
1. aDNA Damage Profiling:
   - Assessed post-mortem cytosine-to-thymine (C-to-T) deamination rates at 5' read termini using mapDamage 2.0 (displaying typical 15% to 35% terminal deamination).
   - Mitochondrial contamination estimated via contamMix; nuclear contamination in males estimated via ANGSD on the X chromosome (retaining samples with contamination under 2%).
2. Kinship Inference:
   - Kinship coefficients computed using READ (Relationship Estimation from Ancient DNA) and lcMLkin across pairwise sample comparisons.
   - Pedigree topologies reconstructed for multi-individual tombs.

### Population Genomic Modeling
- Principal Component Analysis (PCA): Projected ancient individuals onto modern West and East Eurasian genetic variation using smartpca.
- Admixture and f-Statistics: Calculated f3-statistics, f4-statistics, and qpAdm modeling to test for western steppe (Afanasievo, Sintashta) and central Asian (BMAC) gene flow.

## 6. Experiments & Results

### Quantitative Genomic and Paleodemographic Metrics
Population genetic modeling results across Gansu cultural epochs:

| Archaeological Site | Cultural Horizon | Calibrated Date (BP) | Sequenced Individuals (n) | Dominant Y-Haplogroup | Mean Steppe Admixture (%) | Local Yellow River Ancestry (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Shannashuzha | Majiayao Culture | 4,700 - 4,400 | 12 | O2a2b, N1a | 0.0 +/- 0.3% | 99.5 +/- 0.5% |
| Mogou Cemetery | Qijia Culture | 4,100 - 3,600 | 82 | O2a2b-P164, Q1a1 | 0.0 +/- 0.4% | 98.8 +/- 0.6% |
| Mogou Cemetery | Siwa Culture | 3,400 - 3,000 | 32 | O2a2b-P164 | 0.2 +/- 0.4% | 99.1 +/- 0.5% |
| Huoshaogou | Siba Culture | 3,900 - 3,500 | 14 | Q1a1, R1a1 (Trace) | 1.8 +/- 0.8% | 97.4 +/- 0.9% |
| Donghuishan | Siba Culture | 3,700 - 3,400 | 9 | O2a, C2 | 0.5 +/- 0.5% | 98.2 +/- 0.7% |

### Key Experimental Discoveries
1. Cultural Diffusion of the Trans-Eurasian Package: Despite the abrupt appearance of southwest Asian domesticates (wheat, barley, sheep) and bronze metallurgical casting, qpAdm modeling showed zero significant genetic contribution from western pastoralists in Mogou populations, proving technological acquisition through trade.
2. Social Composition of Multi-Person Tombs: At Mogou, 42 tombs containing between 2 and 9 individuals were analyzed for biological kinship. Only 28% of co-buried pairs represented first- or second-degree relatives (parent-offspring, full siblings). The majority of individuals buried together were biologically unrelated, refuting the hypothesis of strict family tombs.
3. Stable Patrilineal Organization: Y-chromosome lineages displayed continuous dominance of haplogroup O2a2b across five centuries at Mogou, while mitochondrial DNA haplogroups (D4, M8, A, G) exhibited high diversity, consistent with a patrilocal social structure where females married into the community from neighboring groups.

## 7. Limitations & Open Problems
1. Geographic Gaps in Far-Western Hexi: Archaeological sites in the extreme western Dunhuang corridor yielded poorly preserved skeletal material, leaving potential localized western trade outposts unsequenced.
2. Low Nuclear Coverage for Distant Kinship: Low endogenous DNA recovery in several infant burials prevented confident identification of third-degree (first cousin) relationships.
3. Social Driving Forces of Co-Burial: Paleogenomics proves co-buried individuals were frequently non-kin, but cannot resolve whether they represented ritual sacrifices, war casualties, or voluntary sodality burials without complementary bioarchaeological isotopic data.

## 8. Reproducibility Notes
- Genomic Sequencing Repositories: Raw sequencing reads and aligned BAM files deposited in the Genome Sequence Archive (GSA) under accession CRA014892.
- Genotype Call Sets: 1240K pseudo-haploid genotype tables available via Zenodo (DOI: 10.5281/zenodo.11895101).
- Archaeological Curation: Skeletal materials permanently curated at the Institute of Cultural Relics and Archaeology of Gansu Province, Lanzhou, China.

## 9. Project Ideas Derived From This Paper
1. Ancient Pedigree Graph Reconstruction Tool (Proof of Concept):
   - Objective: Develop a Python algorithm taking pairwise identity-by-state (IBS) matrices and archaeological stratigraphy to reconstruct consistent multi-generational pedigrees.
   - Stack: Python, NetworkX, SciPy.
   - Core Bottleneck: Resolving ambiguous relationships (half-sibling vs uncle-nephew) under low coverage.
2. Isotopic-Genomic Provenance Matcher (Tool Extension):
   - Objective: Construct an analytical framework integrating strontium (87Sr/86Sr) isotope ratios with qpAdm ancestry coefficients to identify non-local migrant individuals in archaeological cemeteries.
   - Stack: R, tidyverse, ggplot2, IsoplotR.
   - Core Bottleneck: Calibrating baseline environmental strontium maps across arid loess landscapes.
3. Paleogenomic Crop-Human Co-Evolutionary Atlas (Ambitious Extension):
   - Objective: Co-sequence ancient human DNA and ancient charred cereal grain DNA (wheat, barley, foxtail millet) from the same archaeological strata to model reciprocal dispersal dynamics across Eurasia.
   - Stack: Nextflow, Paleogenomics, DeepVariant, Population Genetics.
   - Core Bottleneck: High environmental microbial contamination in desiccated ancient seed remains.

## 10. Key Terms Glossary
- Trans-Eurasian Exchange: Prehistoric interaction network connecting southwest Asia, Central Asia, and East Asia, transmitting crops, livestock, metals, and languages.
- Qijia Culture: Early Bronze Age archaeological culture (ca. 4,200 to 3,600 BP) centered in the upper Yellow River valley, known for early copper/bronze artifacts and cereal agriculture.
- Ancient DNA (aDNA): DNA extracted from ancient biological specimens (bones, teeth, seeds) exhibiting characteristic post-mortem degradation and terminal deamination.
- 1240K Panel: Standard target-enrichment panel capturing approximately 1.24 million informative single-nucleotide polymorphisms across the human genome.
- qpAdm: Statistical tool in the ADMIXTOOLS software package used to model ancient target populations as mixtures of ancestral source populations.
- Demic Diffusion: Spread of culture, technology, or language driven by the physical migration and demographic replacement of populations.
- Cultural Diffusion: Spread of cultural traits, technologies, and ideas through social contact and trade without significant population movement.
- Patrilocality: Social system in which a married couple resides with or near the husband's parents, resulting in patrilineal continuity and high female mitochondrial diversity.
