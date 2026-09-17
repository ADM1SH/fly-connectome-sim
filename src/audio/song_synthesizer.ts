export class CourtshipSongSynthesizer {
    private audioCtx: AudioContext | null = null;
    private masterGain: GainNode | null = null;
    private sineOsc: OscillatorNode | null = null;
    private sineGain: GainNode | null = null;
    private isMuted = false;
    private isInitialized = false;

    constructor() {
        // Lazily initialized upon user click/gesture
    }

    public initialize(): void {
        if (this.isInitialized) {
            return;
        }

        try {
            const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (!AudioContextClass) {
                return;
            }

            this.audioCtx = new AudioContextClass();
            this.masterGain = this.audioCtx.createGain();
            this.masterGain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
            this.masterGain.connect(this.audioCtx.destination);

            // Sine song continuous oscillator (165 Hz)
            this.sineOsc = this.audioCtx.createOscillator();
            this.sineOsc.type = "sine";
            this.sineOsc.frequency.setValueAtTime(165.0, this.audioCtx.currentTime);

            this.sineGain = this.audioCtx.createGain();
            this.sineGain.gain.setValueAtTime(0.0, this.audioCtx.currentTime);

            this.sineOsc.connect(this.sineGain);
            this.sineGain.connect(this.masterGain);
            this.sineOsc.start();

            this.isInitialized = true;
        } catch {
            // Web Audio not available in environment
        }
    }

    public playPulseClick(): void {
        if (!this.audioCtx || !this.masterGain || this.isMuted) {
            return;
        }

        if (this.audioCtx.state === "suspended") {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;

        // Damped 220 Hz monocycle pulse representing Drosophila wing vibration
        const osc = this.audioCtx.createOscillator();
        const env = this.audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(220.0, now);
        // Frequency sweep down to mimic acoustic dampening
        osc.frequency.exponentialRampToValueAtTime(120.0, now + 0.008);

        env.gain.setValueAtTime(0.0, now);
        env.gain.linearRampToValueAtTime(0.8, now + 0.001);
        env.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

        osc.connect(env);
        env.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.015);
    }

    public setSineSongActive(active: boolean): void {
        if (!this.audioCtx || !this.sineGain || this.isMuted) {
            return;
        }

        if (this.audioCtx.state === "suspended" && active) {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;
        const targetGain = active ? 0.25 : 0.0;
        this.sineGain.gain.cancelScheduledValues(now);
        this.sineGain.gain.linearRampToValueAtTime(targetGain, now + 0.05);
    }

    public toggleMute(): boolean {
        this.isMuted = !this.isMuted;
        if (this.masterGain && this.audioCtx) {
            const now = this.audioCtx.currentTime;
            this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0 : 0.3, now);
        }
        return this.isMuted;
    }

    public getMuted(): boolean {
        return this.isMuted;
    }
}
