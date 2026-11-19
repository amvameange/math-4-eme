// Pleasant, low-volume Web Audio UI click chime & direct scroll navigation helper.
// 100% offline-compatible with desktop browsers and Android Studio WebView.

let audioCtx: AudioContext | null = null;
const SOUND_STORAGE_KEY = 'tc_gabon_ui_sound_enabled';
const VOLUME_STORAGE_KEY = 'tc_gabon_ui_sound_volume';
const DEFAULT_UI_VOLUME = 0.35;

export function isUiSoundEnabled(): boolean {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(SOUND_STORAGE_KEY);
      if (saved === 'false') return false;
    }
  } catch {
    // Ignore storage restriction
  }
  return true;
}

export function setUiSoundEnabled(enabled: boolean): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(SOUND_STORAGE_KEY, enabled ? 'true' : 'false');
    }
  } catch {
    // Ignore storage restriction
  }
}

export function getUiSoundVolume(): number {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(VOLUME_STORAGE_KEY);
      if (raw !== null) {
        const parsed = Number(raw);
        if (Number.isFinite(parsed)) {
          return Math.max(0, Math.min(1, parsed));
        }
      }
    }
  } catch {
    // Ignore storage restriction
  }
  return DEFAULT_UI_VOLUME;
}

export function setUiSoundVolume(volume: number): void {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : DEFAULT_UI_VOLUME));
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(VOLUME_STORAGE_KEY, String(clamped));
    }
  } catch {
    // Ignore storage restriction
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;

  if (!audioCtx) {
    try {
      audioCtx = new AudioCtx();
    } catch {
      return null;
    }
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export type UiSoundKind = 'tap' | 'step' | 'success' | 'error';

/**
 * Joue un son doux, agréable à écouter et à volume réglable lors d'un clic sur une option.
 */
export function playUiClickSound(kind: UiSoundKind = 'tap'): void {
  if (!isUiSoundEnabled()) return;
  const volume = getUiSoundVolume();
  if (volume <= 0.005) return;
  const gainScale = Math.min(2.8, volume / DEFAULT_UI_VOLUME);

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (kind === 'success') {
      // Doux accord ascendant type kalimba à volume doux
      const freqs = [523.25, 659.25, 783.99];
      const peak = Math.max(0.002, 0.032 * gainScale);
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.045);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.045);
        gain.gain.linearRampToValueAtTime(peak, now + idx * 0.045 + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.045 + 0.19);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.045);
        osc.stop(now + idx * 0.045 + 0.21);
      });
      return;
    }

    if (kind === 'error') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const peak = Math.max(0.002, 0.025 * gainScale);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.12);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(peak, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
      return;
    }

    // 'tap' ou 'step' : note douce cristalline type goutte d'eau / marimba très discrète
    const baseFreq = kind === 'step' ? 587.33 : 659.25; // D5 / E5
    const overtoneFreq = kind === 'step' ? 880 : 987.77; // A5 / B5
    const basePeak = kind === 'step' ? 0.026 : 0.032;
    const peakGain = Math.max(0.002, basePeak * gainScale);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.12, now + 0.065);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(overtoneFreq, now);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.18, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peakGain, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

    osc1.connect(gain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.11);
    osc2.stop(now + 0.11);
  } catch {
    // Ignorer silencieusement si l'audio Web est indisponible
  }
}

/**
 * Fait défiler immédiatement et en douceur vers l'élément ciblé par son ID,
 * en tenant compte de la barre d'en-tête fixe.
 */
export function scrollToSectionById(elementId: string, delayMs = 55): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      const el = document.getElementById(elementId);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const targetY = Math.max(0, rect.top + window.scrollY - 78);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  }, delayMs);
}
