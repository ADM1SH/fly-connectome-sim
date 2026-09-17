# Basement Membrane Turnover and Viscoelastic Relaxation Control Epithelial Cell Shape

## 1. Metadata
- Title: Basement membrane turnover controls cell shape
- Authors: Ricardo Barrientos, Billie Meadowcroft, Besaiz J. Sanchez-Sanchez, Matthew G. Lowe, Carl-Philipp Heisenberg, Pere Roca-Cusachs, Alexandre Kabla, David Garcia-Bellido, Nicholas H. Brown
- Publication Venue: Cell, Volume 189, Issue 18, Pages 5611-5624.e1-e10
- Publication Date: September 3, 2026
- DOI: https://doi.org/10.1016/j.cell.2026.07.010
- Lead Contacts: Ricardo Barrientos (rb809@cam.ac.uk), Nicholas H. Brown (nb117@cam.ac.uk)

## 2. Problem Statement
The regulation of three-dimensional cell shape is a primary requirement for tissue morphogenesis. Cell shape is governed by an active balance between intracellular contractile forces (actomyosin networks) and extracellular mechanical resistance. Epithelial sheets rest upon the basement membrane (BM), an extracellular matrix scaffold composed of Collagen IV, laminins, perlecan, and nidogen. While basement membranes are recognized as structural supports:
1. Prior models treated the BM as an inert, purely elastic sheet, ignoring dynamic matrix remodeling and continuous protein turnover.
2. How the mechanical properties of the basement membrane are regulated at molecular resolution remained unknown.
3. How physical matrix properties directly modulate epithelial cell dimensions (cell height versus apical/basal footprint) was unexplained.

## 3. Core Idea / Contribution
Combining mathematical continuum modeling, coarse-grained molecular dynamics simulations, and in vivo genetics in Drosophila, the authors proved the basement membrane behaves as a viscoelastic material whose stress relaxation time governs epithelial cell shape. Crucially, matrix turnover dictates this relaxation timescale.

Primary technical contributions:
1. Viscoelastic Relaxation Governing Morphology: Demonstrated mathematically and experimentally cell height and lateral area depend directly on the BM stress relaxation time (tau_BM = eta / E), rather than steady-state elastic stiffness alone.
2. Perlecan Regulates Collagen IV Lifespan: Identified the heparan sulfate proteoglycan Perlecan (trol in Drosophila) as an essential regulator controlling Collagen IV turnover and residence lifetime within the matrix meshwork.
3. Molecular Mechanism of Mechanical Remodeling: Coarse-grained simulations demonstrated Perlecan spacing prevents excessive covalent crosslinking of Collagen IV networks, enabling matrix metalloproteinases (MMPs) to access cleavage sites and maintain steady matrix turnover.
4. Genetic Modification of Cell Shape: Loss of Perlecan extends Collagen IV lifetime, increases matrix relaxation time (delaying stress dissipation), stiffens the basal constraint, and flattens epithelial cells from tall columnar into squat cuboidal morphology.

## 4. Prior Work & Positioning
Prior investigations into extracellular matrix biomechanics:
- Elastic BM Models (Fristrom, 1988; Pastor-Pareja and Xu, 2011): Regarded the BM as a static elastic spring providing passive mechanical confinement.
- Viscoelasticity in 3D Hydrogels (Chaudhuri et al., 2016, 2020): Demonstrated stress relaxation in synthetic hydrogels modulates stem cell spreading, but failed to resolve endogenous basement membrane dynamics in developing organisms.
- Actomyosin Contractility Paradigms (Lecuit and Lenne, 2007; Martin et al., 2009): Focused heavily on apical actomyosin meshworks, neglecting the basal mechanical resistance provided by the BM.

The present paper establishes matrix turnover rate is a physical rheological dial setting basement membrane relaxation time and dictating three-dimensional epithelial architecture.

## 5. Method: Full Technical Breakdown

### Viscoelastic Theoretical Modeling
1. Continuum Rheological Model:
   - Modeled the epithelial cell as an active viscoelastic core characterized by internal actomyosin contractility stress sigma_cell and internal viscosity eta_cell.
   - Modeled the basement membrane as a Maxwell viscoelastic material described by elastic modulus E_BM and viscosity eta_BM.
   - Characteristic Stress Relaxation Time:
$$\tau_{\text{BM}} = \frac{\eta_{\text{BM}}}{E_{\text{BM}}}$$
2. Equilibrium Cell Height Equation:
   - Dynamic balance between apical constriction stress, lateral adhesion, and basal BM deformation yields the steady-state cell height h:
$$h(t) = h_0 \left(1 + \frac{\sigma_{\text{cell}}}{E_{\text{BM}}} \left(1 - e^{-t / \tau_{\text{BM}}}\right)\right)^{-1}$$
   - When matrix turnover accelerates, tau_BM decreases, allowing rapid mechanical relaxation and facilitating cell elongation into columnar shapes.

### Coarse-Grained Molecular Dynamics Simulations
- Framework: LAMMPS molecular dynamics engine modeling Collagen IV protomers as semi-flexible beaded polymers with terminal NC1 domains and 7S crosslinking domains.
- Perlecan Incorporation: Modeled as large steric beads decorating Collagen IV strands, modulating inter-strand distance and crosslinking probability.
- Stress Relaxation Protocol: Simulated step-strain elongation (10% strain) and monitored tensile stress decay over 10^7 simulation time steps.

### In Vivo Experimental Genetics in Drosophila
1. Genetic Models:
   - Follicular epithelium of the Drosophila egg chamber and larval wing imaginal disc.
   - Temperature-sensitive and RNAi lines targeting trol (Perlecan), vkg / Cg25C (Collagen IV alpha-chains), LanA (Laminin A), and Mmp2 (Matrix Metalloproteinase 2).
2. Fluorescence Recovery After Photobleaching (FRAP):
   - GFP-tagged Collagen IV (Vkg-GFP) bleached across a 5-micrometer region of interest.
   - Monitored recovery curves over 6 hours to compute mobile fraction and matrix residence half-life (t_half).
3. Atomic Force Microscopy (AFM):
   - Measured elastic modulus and stress relaxation curves on native basement membranes dissected from live tissues using spherical cantilever tips (radius 2.5 micrometers).

## 6. Experiments & Results

### Quantitative Biomechanical and Morphometric Metrics
Comparative physical and cellular parameters across Drosophila mutant lines:

| Genotype | Perturbation Target | Collagen IV t_half (hours) | BM Elastic Modulus E (kPa) | BM Relaxation Time tau (seconds) | Follicular Cell Height (micrometers) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Wild-Type (Control) | None | 4.2 +/- 0.3 | 24.5 +/- 2.1 | 18.2 +/- 1.5 | 14.8 +/- 0.8 |
| trol-RNAi | Perlecan Depletion | 12.8 +/- 1.1 | 48.2 +/- 3.8 | 65.4 +/- 4.8 | 8.2 +/- 0.6 |
| Mmp2-RNAi | Metalloproteinase Depletion | 14.5 +/- 1.2 | 52.1 +/- 4.2 | 74.2 +/- 5.6 | 7.6 +/- 0.5 |
| Collagen IV-Overexpression| Elevated Matrix Deposition | 6.5 +/- 0.5 | 32.4 +/- 2.6 | 28.5 +/- 2.2 | 12.1 +/- 0.7 |
| trol-RNAi + Mmp2-OE | Perlecan Down + MMP Up | 5.1 +/- 0.4 | 27.8 +/- 2.3 | 22.4 +/- 1.8 | 13.6 +/- 0.7 |

### Key Experimental Discoveries
1. Extended Collagen Lifespan Flattens Epithelia: In trol mutants, Collagen IV turnover slowed three-fold, causing accumulation of old, hyper-crosslinked Collagen IV fibers elevating the matrix relaxation time by 3.6-fold and flattening epithelial cells by 45%.
2. Rescue via Exogenous Turnover: Overexpression of Matrix Metalloproteinase 2 (Mmp2) restored Collagen IV turnover rates in trol-depleted egg chambers, normalizing relaxation times and rescuing columnar cell height.
3. Turnover Rate Dictates Shape Independently of Density: Artificially elevating Collagen IV deposition without altering turnover rate did not reproduce the cell-flattening phenotype, proving turnover kinetics, rather than total matrix mass, govern the cellular response.

## 7. Limitations & Open Problems
1. Complex In Vivo Multi-Layer Rheology: The basement membrane connects to cell membranes through integrin and dystroglycan complexes; separating BM rheology from cortical cytoskeleton friction remains technically challenging during in vivo AFM measurements.
2. Long-Term FRAP Imaging Drift: Measuring turnover lifetimes of several hours on live developing tissues exposes specimens to phototoxicity and developmental stage drift.
3. Mammalian Tissue Translation: Drosophila basement membranes contain a single Perlecan gene (trol), whereas mammalian matrices express multiple redundant heparan sulfate proteoglycans (perlecan, agrin, collagen XVIII) exhibiting tissue-specific compensatory behaviors.

## 8. Reproducibility Notes
- Mathematical Model Code: MATLAB scripts implementing the continuum viscoelastic Maxwell model deposited at GitHub repository https://github.com/BrownLab-Cambridge/BM-Turnover-CellShape.
- Molecular Dynamics Configurations: LAMMPS input scripts and parameter topology files deposited at Zenodo (DOI: 10.5281/zenodo.11894711).
- Drosophila Stocks: Transgenic lines (trol-RNAi #VDRC104975, Vkg-GFP #BL58363) accessible through the Bloomington Drosophila Stock Center and Vienna Drosophila Resource Center.

## 9. Project Ideas Derived From This Paper
1. Viscoelastic Stress Relaxation Curve Fitting Tool (Proof of Concept):
   - Objective: Develop an automated Python tool fitting standard Maxwell, Kelvin-Voigt, and fractional Zener viscoelastic models to raw AFM force-indentation relaxation curves.
   - Stack: Python, SciPy (curve_fit), NumPy, Matplotlib.
   - Core Bottleneck: Correcting for cantilever hydrodynamic drag artifacts during initial high-speed indentation.
2. In Silico Hydrogel Turnover Simulator (Tool Extension):
   - Objective: Build a coarse-grained polymer simulator in LAMMPS predicting stress relaxation rates in synthetic PEG-collagen hydrogels as a function of MMP-cleavable crosslink density.
   - Stack: C++, LAMMPS, VMD, Python.
   - Core Bottleneck: Accurately parameterizing crosslink enzymatic cleavage kinetics in crowded polymer networks.
3. Mechanically Adaptive Organ-on-a-Chip Matrix (Ambitious Extension):
   - Objective: Fabricate a microfluidic intestine-on-a-chip incorporating an artificial basement membrane with light-switchable crosslinking, dynamically modulating matrix relaxation time in real time to direct epithelial folding.
   - Stack: Biomaterials Formulation, Photochemistry, Microfluidics, Laser Microscopy.
   - Core Bottleneck: Preventing photochemical radical toxicity during in situ matrix photo-tuning.

## 10. Key Terms Glossary
- Basement Membrane (BM): Thin, dense sheet of specialized extracellular matrix supporting epithelia, endothelia, and muscle fibers.
- Stress Relaxation Time (tau): Time required for a viscoelastic material to dissipate internal stress under a constant applied strain (tau = eta / E).
- Collagen IV: Major structural component of basement membranes forming covalently crosslinked polygonal network scaffolds.
- Perlecan: Large heparan sulfate proteoglycan (encoded by trol in Drosophila) acting as a molecular spacer and regulator of growth factor signaling in the BM.
- Viscoelasticity: Material property exhibiting both viscous fluid resistance to shear flow and elastic solid resistance to instantaneous strain.
- FRAP: Fluorescence Recovery After Photobleaching, microscopy technique measuring the lateral diffusion and molecular turnover of fluorescently tagged molecules.
- Matrix Metalloproteinase (MMP): Zinc-dependent endopeptidase enzyme family capable of degrading extracellular matrix proteins to facilitate remodeling.
