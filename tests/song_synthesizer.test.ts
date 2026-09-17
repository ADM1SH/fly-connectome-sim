import { describe, it, expect, beforeEach, vi } from "vitest";
import { CourtshipSongSynthesizer } from "../src/audio/song_synthesizer";

describe("CourtshipSongSynthesizer Bioacoustics Tests", () => {
    let synth: CourtshipSongSynthesizer;

    beforeEach(() => {
        synth = new CourtshipSongSynthesizer();
    });

    it("initializes in unmuted state without crashing in headless environment", () => {
        expect(synth.getMuted()).toBe(false);
        expect(() => {
            synth.playPulseClick();
            synth.setSineSongActive(true);
        }).not.toThrow();
    });

    it("toggles mute state accurately", () => {
        expect(synth.getMuted()).toBe(false);

        const isMutedNow = synth.toggleMute();
        expect(isMutedNow).toBe(true);
        expect(synth.getMuted()).toBe(true);

        const isUnmuted = synth.toggleMute();
        expect(isUnmuted).toBe(false);
        expect(synth.getMuted()).toBe(false);
    });

    it("interacts with mocked Web Audio API correctly", () => {
        const mockGainNode = {
            gain: {
                setValueAtTime: vi.fn(),
                linearRampToValueAtTime: vi.fn(),
                exponentialRampToValueAtTime: vi.fn(),
                cancelScheduledValues: vi.fn()
            },
            connect: vi.fn()
        };

        const mockOscNode = {
            type: "sine",
            frequency: {
                setValueAtTime: vi.fn(),
                exponentialRampToValueAtTime: vi.fn()
            },
            connect: vi.fn(),
            start: vi.fn(),
            stop: vi.fn()
        };

        const mockAudioCtx = {
            currentTime: 10.0,
            state: "running",
            destination: {},
            createGain: vi.fn(() => mockGainNode),
            createOscillator: vi.fn(() => mockOscNode),
            resume: vi.fn()
        };

        (window as any).AudioContext = vi.fn(() => mockAudioCtx);

        synth.initialize();
        expect((window as any).AudioContext).toHaveBeenCalled();

        // Calling initialize again should return early
        synth.initialize();

        // Test pulse click synthesis
        synth.playPulseClick();
        expect(mockAudioCtx.createOscillator).toHaveBeenCalled();
        expect(mockOscNode.start).toHaveBeenCalled();

        // Test sine song activation
        synth.setSineSongActive(true);
        expect(mockGainNode.gain.linearRampToValueAtTime).toHaveBeenCalledWith(0.25, 10.05);

        // Test sine song deactivation
        synth.setSineSongActive(false);
        expect(mockGainNode.gain.linearRampToValueAtTime).toHaveBeenCalledWith(0.0, 10.05);

        // Test mute with active audio context
        synth.toggleMute();
        expect(mockGainNode.gain.setValueAtTime).toHaveBeenCalledWith(0.0, 10.0);

        // Test unmute with active audio context (restores 0.3 gain)
        synth.toggleMute();
        expect(mockGainNode.gain.setValueAtTime).toHaveBeenCalledWith(0.3, 10.0);

        // Test suspended context resume on pulse click and sine song
        mockAudioCtx.state = "suspended";
        synth.playPulseClick();
        expect(mockAudioCtx.resume).toHaveBeenCalled();

        mockAudioCtx.resume.mockClear();
        synth.setSineSongActive(true);
        expect(mockAudioCtx.resume).toHaveBeenCalled();
    });

    it("handles AudioContext constructor error and absence gracefully", () => {
        const errSynth = new CourtshipSongSynthesizer();
        (window as any).AudioContext = vi.fn(() => {
            throw new Error("Web Audio permission denied");
        });
        expect(() => errSynth.initialize()).not.toThrow();

        delete (window as any).AudioContext;
        delete (window as any).webkitAudioContext;
        const noAudioSynth = new CourtshipSongSynthesizer();
        expect(() => noAudioSynth.initialize()).not.toThrow();
    });
});
