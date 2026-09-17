# Drosophila Connectome Embodiment Engine

A real-time closed-loop biophysical simulation and telemetry station embodying the neural connectome discoveries from Papers 01, 02, and 03 of the Cell Press collection. Built in TypeScript, Vite, Canvas2D, and Web Audio API, styled under the Cyberdelia Industrial Minimalist specification.

## 1. Biological Architecture

```
[Synthetic 60mm Petri Arena]
       |
       +---> Ray-Cast Hexagonal Vision (72 Ommatidia) ---> Lobula Columnar Net (Paper 03: LC10, LC4, LPLC2)
       |                                                                |
       +---> Chemical Diffusion Surface Grid          ---> Gustatory / Tarsal GRNs (Paper 02: Leg to SEZ)
       |                                                                |
       |                                              [Central Action Selection]
       |                                              P1/pC1 Courtship vs Giant Fiber Escape (Paper 01)
       |                                                                |
       +<--- Biomechanical Articulated Kinematics     <--- Descending Neurons (pIP10, DNg13, DNp01)
```

The neural engine integrates three distinct biological layers:
1. **Visual Pathways (Paper 03):** 72-channel binocular ommatidia array with Lobula Columnar motion filters. `LC10` extracts small conspecific targets for courtship tracking; `LC4` and `LPLC2` detect rapid looming expansion for predator escape.
2. **Gustatory Circuits (Paper 02):** Front leg tarsal gustatory sensilla sensing sucrose nutrients, bitter repellents, and female cuticular hydrocarbons (7,11-HD), ascending through the Subesophageal Zone (SEZ).
3. **Central Command and Descending Motor (Paper 01):** Male-specific `P1` master courtship hub gated by dopamine, driving unilateral wing extension and acoustic courtship song via `pIP10`. Lateral GABAergic mutual inhibition between `P1` and the `Giant Fiber` (GF) escape system.

## 2. Bioacoustic Courtship Synthesizer

The system synthesizes genuine Drosophila acoustic courtship signals via the Web Audio API triggered by `pIP10` action potentials:
* **Pulse Song:** 220 Hz monocycle clicks with 35 ms inter-pulse intervals generated during unilateral wing abduction.
* **Sine Song:** 165 Hz continuous sinusoidal hum during close courtship orientation.

## 3. Cyberdelia Industrial UI Specification

Adheres strictly to the master design specification:
* **Canvas:** Pure Pitch Black (`#000000`).
* **Surfaces:** `#050505`, `#0A0A0C`, `#121215`, `#1A1D24`.
* **Borders:** 1px solid geometric outlines (`#262933`, `#1A1D24`). Zero drop shadows.
* **Accent:** Acid Terminal Green (`#00FF66`), Neon Crimson (`#FF334B`), Electric Cyan (`#00E5FF`).
* **Typography:** Monospaced JetBrains Mono (v2.304).
* **Emoji Policy:** Zero emojis across all views, logs, and labels.
* **Punctuation:** Zero em dashes.

## 4. Installation and Usage

### Prerequisites
* Node.js v18+ (tested on Node v26.8.2)
* npm v9+

### Commands

```bash
# Install dependencies
npm install

# Run automated Vitest test suite
npm test

# Build production bundle
npm run build

# Start local development server
npm run dev
```

## 5. Verification and Test Results

The automated test suite runs 68 unit and integration tests across 12 test suites with 100% universal test coverage:

```
Test Files  12 passed (12)
Tests       68 passed (68)
Duration    641ms

Universal Coverage Summary:
Statements: 100.00% (16/16 files)
Branches:   100.00% (16/16 files)
Functions:  100.00% (16/16 files)
Lines:      100.00% (16/16 files)
```

Test suites:
* `tests/lif_engine.test.ts` (10 tests): Numerical integration, refractory clamping, exponential conductance decay, threshold modulation, orphan neuron fallback.
* `tests/connectome.test.ts` (5 tests): Biological neuron presence, GABAergic inhibitory synapses, feedforward connectivity, sexual dimorphism tags.
* `tests/optics.test.ts` (5 tests): Ommatidial raycasting, target silhouette contrast, symmetric and asymmetric looming escape drive.
* `tests/behavior.test.ts` (5 tests): Pheromone transactivation of P1, pIP10 wing song triggering, Giant Fiber escape override, chemical diffusion.
* `tests/fly_agent.test.ts` (8 tests): Tripod gait generation, heading integration, boundary clamping, bilateral wing abduction with tremor.
* `tests/chemistry.test.ts` (5 tests): Multi-channel diffusion, bilinear interpolation, 2D Laplacian decay, grid clearing.
* `tests/arena.test.ts` (7 tests): Agent kinematics, looming predator expansion, food drops, courtship duration accumulation to copulation, null safety.
* `tests/neuromodulation.test.ts` (3 tests): Preset validity, boundary clamping [0.0, 3.0], state switching.
* `tests/song_synthesizer.test.ts` (4 tests): Web Audio API pulse click and sine song synthesis, suspended context resumption, mute toggle, error guards.
* `tests/ui_components.test.ts` (3 tests): Design token values, metric card DOM updates, semantic status badges.
* `tests/canvas_renderers.test.ts` (4 tests): ArenaCanvas, VisionCanvas, RasterPlot, and GraphCanvas rendering cycles and node hit-testing.
* `tests/main_controller.test.ts` (9 tests): Full controller lifecycle, DOM events, optogenetic injection, neuromodulator sliders, HUD telemetry, frame rate limiting.

