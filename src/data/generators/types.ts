import { CorrectionStep, ExerciseDifficulty } from '../../types/math';

export interface GeneratedExercise {
  chapterId: string;
  chapterTitle: string;
  difficulty: ExerciseDifficulty;
  difficultyLabel: 'Fondamental' | 'Entraînement' | 'Approfondissement' | 'Problème de synthèse';
  title: string;
  prompt: string;
  hint: string;
  questionType: 'numeric' | 'text' | 'qcm';
  options?: string[];
  correctAnswer: string;
  unit?: string;
  steps: CorrectionStep[];
  explanationFinal: string;
}

export const DIFFICULTY_META: Record<
  ExerciseDifficulty,
  {
    label: 'Fondamental' | 'Entraînement' | 'Approfondissement' | 'Problème de synthèse';
    shortLabel: string;
    emoji: string;
    badgeClass: string;
    xp: number;
  }
> = {
  1: {
    label: 'Fondamental',
    shortLabel: 'Niv. 1 · Fondamental',
    emoji: '🟢',
    badgeClass: 'text-emerald-300 border-emerald-500/40 bg-emerald-950/50',
    xp: 15,
  },
  2: {
    label: 'Entraînement',
    shortLabel: 'Niv. 2 · Entraînement',
    emoji: '🟡',
    badgeClass: 'text-amber-300 border-amber-500/40 bg-amber-950/50',
    xp: 25,
  },
  3: {
    label: 'Approfondissement',
    shortLabel: 'Niv. 3 · Approfondissement',
    emoji: '🟠',
    badgeClass: 'text-orange-300 border-orange-500/40 bg-orange-950/50',
    xp: 35,
  },
  4: {
    label: 'Problème de synthèse',
    shortLabel: 'Niv. 4 · Défi Gabon',
    emoji: '🟣',
    badgeClass: 'text-purple-300 border-purple-500/40 bg-purple-950/50',
    xp: 50,
  },
};

// Optional deterministic PRNG context so chapter course banks (10 app. + 20/level)
// and progressive 1..20 infinite series stay reproducible across renders and sessions.
let activeRng: (() => number) | null = null;

function hashString(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function withSeed<T>(seedKey: string, fn: () => T): T {
  const prev = activeRng;
  activeRng = mulberry32(hashString(seedKey));
  try {
    return fn();
  } finally {
    activeRng = prev;
  }
}

export function randFloat(): number {
  return activeRng ? activeRng() : Math.random();
}

export function randInt(min: number, max: number): number {
  return Math.floor(randFloat() * (max - min + 1)) + min;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(randFloat() * arr.length)];
}
