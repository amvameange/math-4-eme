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

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
