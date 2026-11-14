import { CorrectionStep, Exercise, ExerciseDifficulty } from '../../types/math';

const DIFF_LABELS: Record<ExerciseDifficulty, Exercise['difficultyLabel']> = {
  1: 'Fondamental',
  2: 'Entraînement',
  3: 'Approfondissement',
  4: 'Problème de synthèse',
};

/**
 * Picks specific exercises from an existing bank by their IDs and binds them cleanly
 * to the target unmixed chapter ID.
 */
export function pickExercises(bank: Exercise[], ids: string[], newChapterId: string): Exercise[] {
  return ids
    .map((id) => bank.find((e) => e.id === id))
    .filter((e): e is Exercise => Boolean(e))
    .map((e, index) => ({
      ...e,
      chapterId: newChapterId,
      title: e.title.replace(/^Ex\s+\d+\s*:\s*/i, `Ex ${index + 1} : `),
    }));
}

interface QuickStep {
  title: string;
  explanation: string;
  math: string;
  rule?: string;
  subResult?: string;
}

export function mkQcm(
  id: string,
  chapterId: string,
  title: string,
  difficulty: ExerciseDifficulty,
  prompt: string,
  options: string[],
  correctAnswer: string,
  hint: string,
  explanationFinal: string,
  steps: QuickStep[],
  visualBadge = '📘'
): Exercise {
  return {
    id,
    chapterId,
    title,
    difficulty,
    difficultyLabel: DIFF_LABELS[difficulty],
    prompt,
    hint,
    questionType: 'qcm',
    options,
    correctAnswer,
    visualBadge,
    explanationFinal,
    steps: steps.map(
      (s, i): CorrectionStep => ({
        stepNumber: i + 1,
        title: s.title,
        explanation: s.explanation,
        mathExpression: s.math,
        ruleApplied: s.rule,
        subResult: s.subResult,
      })
    ),
  };
}

export function mkNum(
  id: string,
  chapterId: string,
  title: string,
  difficulty: ExerciseDifficulty,
  prompt: string,
  correctAnswer: string,
  hint: string,
  explanationFinal: string,
  steps: QuickStep[],
  unit?: string,
  visualBadge = '🧮'
): Exercise {
  return {
    id,
    chapterId,
    title,
    difficulty,
    difficultyLabel: DIFF_LABELS[difficulty],
    prompt,
    hint,
    questionType: 'numeric',
    correctAnswer,
    unit,
    visualBadge,
    explanationFinal,
    steps: steps.map(
      (s, i): CorrectionStep => ({
        stepNumber: i + 1,
        title: s.title,
        explanation: s.explanation,
        mathExpression: s.math,
        ruleApplied: s.rule,
        subResult: s.subResult,
      })
    ),
  };
}
