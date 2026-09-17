# Goals
Build a real-time, closed-loop biophysical Drosophila connectome simulation and telemetry station embodying Papers 01, 02, and 03 under the Cyberdelia Industrial Minimalist specifications in DESIGN.md, verified with 100% test coverage across all files and metrics.

# Current state
The simulation station is completely built, hardened, and verified with universal 100% test coverage across all 16 source files (100% Statements, 100% Branches, 100% Functions, 100% Lines) across 12 test suites and 68 automated tests. Production build compiled cleanly into dist/ in 112ms. Full adherence to DESIGN.md (pure pitch black canvas #000000, 1px geometric borders, JetBrains Mono typography, zero emojis, zero em dashes).

# Active files
- fly-connectome-sim/index.html
- fly-connectome-sim/src/main.ts
- fly-connectome-sim/src/neural/connectome_graph.ts
- fly-connectome-sim/src/neural/lif_engine.ts
- fly-connectome-sim/src/neural/types.ts
- fly-connectome-sim/src/neural/neuromodulation.ts
- fly-connectome-sim/src/physics/arena.ts
- fly-connectome-sim/src/physics/fly_agent.ts
- fly-connectome-sim/src/physics/optics.ts
- fly-connectome-sim/src/physics/chemistry.ts
- fly-connectome-sim/src/audio/song_synthesizer.ts
- fly-connectome-sim/src/design/tokens.ts
- fly-connectome-sim/src/ui/components.ts
- fly-connectome-sim/src/ui/arena_canvas.ts
- fly-connectome-sim/src/ui/vision_canvas.ts
- fly-connectome-sim/src/ui/raster_plot.ts
- fly-connectome-sim/src/ui/graph_canvas.ts
- fly-connectome-sim/tests/lif_engine.test.ts
- fly-connectome-sim/tests/connectome.test.ts
- fly-connectome-sim/tests/optics.test.ts
- fly-connectome-sim/tests/behavior.test.ts
- fly-connectome-sim/tests/fly_agent.test.ts
- fly-connectome-sim/tests/chemistry.test.ts
- fly-connectome-sim/tests/arena.test.ts
- fly-connectome-sim/tests/neuromodulation.test.ts
- fly-connectome-sim/tests/song_synthesizer.test.ts
- fly-connectome-sim/tests/ui_components.test.ts
- fly-connectome-sim/tests/canvas_renderers.test.ts
- fly-connectome-sim/tests/main_controller.test.ts
- fly-connectome-sim/README.md
- handoff.md

# Changes made
- Expanded test coverage across all logic tiers to reach universal 100% statement, branch, function, and line coverage.
- Added right wing abduction and tremor tests in fly_agent.test.ts.
- Added femaleFly null-safety and visual field tracking tests in arena.test.ts.
- Added orphan terminal neuron spiking and fallback synapse scheduling tests in lif_engine.test.ts.
- Added AudioContext suspension, resume, error handling, unmuting, and sine song deactivation tests in song_synthesizer.test.ts.
- Added main loop frame delta capping, DOMContentLoaded bootstrap, all sensory feature injection channels, and edge case fallbacks in main_controller.test.ts.
- Added null context error assertions, pheromone heatmap rendering, luminance threshold styling, and buffer shift tests in canvas_renderers.test.ts.
- Added missing element and non-matching child element tests in ui_components.test.ts.
- Verified production compilation (npm run build) with 0 errors (13.98 kB HTML, 46.64 kB JS bundle).

# Failed attempts
- Initial build error caused by variable starting with digit (5htSlider): resolved by renaming to serotoninSlider.
- Initial test assertion expecting spike reset voltage immediately at spike time: resolved by accounting for biological peak (+20 mV) and subsequent refractory hyperpolarization (-70 mV).
- Coverage tool mismatch when installing latest @vitest/coverage-v8: resolved by pinning @vitest/coverage-v8 to ^1.6.1 matching installed vitest.
- VisualFeatureOutputs mock error during build (property aotuDrive not on interface): resolved by removing extraneous property.
- Canvas constructor error assertions originally expected not.toThrow() when null: resolved by expecting toThrow("Failed to get 2D rendering context").

# Next steps
- Run `npm run dev` in `fly-connectome-sim` to launch the local live telemetry server in a web browser.
