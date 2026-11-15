import { CorrectionStep, Exercise, ExerciseDifficulty } from '../../types/math';

export interface BepcExerciseSeed {
  title: string;
  difficulty: ExerciseDifficulty;
  originCountry: string;
  originYear: string;
  bepcPoints: string;
  prompt: string;
  hint: string;
  questionType?: 'numeric' | 'text' | 'qcm';
  options?: string[];
  correctAnswer: string;
  unit?: string;
  explanationFinal: string;
  steps: {
    title: string;
    ruleApplied?: string;
    mathExpression: string;
    explanation: string;
    subResult?: string;
  }[];
  themeTags?: string[];
}

const DIFF_LABELS: Record<ExerciseDifficulty, Exercise['difficultyLabel']> = {
  1: 'Fondamental',
  2: 'Entraînement',
  3: 'Approfondissement',
  4: 'Problème de synthèse',
};

export function buildBepcChapterList(
  chapterId: string,
  seeds: BepcExerciseSeed[]
): Exercise[] {
  return seeds.map((seed, idx) => {
    const steps: CorrectionStep[] = seed.steps.map((st, sIdx) => ({
      stepNumber: sIdx + 1,
      title: st.title,
      ruleApplied: st.ruleApplied,
      mathExpression: st.mathExpression,
      explanation: st.explanation,
      subResult: st.subResult,
    }));

    return {
      id: `${chapterId}-bepc-${idx + 1}`,
      chapterId,
      title: `BEPC #${idx + 1} · ${seed.title}`,
      difficulty: seed.difficulty,
      difficultyLabel: DIFF_LABELS[seed.difficulty],
      category: 'bepc-chapitre',
      prompt: seed.prompt,
      hint: seed.hint,
      questionType: seed.questionType || 'numeric',
      options: seed.options,
      correctAnswer: seed.correctAnswer,
      unit: seed.unit,
      visualBadge: '🎓',
      originCountry: seed.originCountry,
      originYear: seed.originYear,
      bepcPoints: seed.bepcPoints,
      themeTags: seed.themeTags,
      explanationFinal: seed.explanationFinal,
      steps,
    };
  });
}

export function buildBepcExamProblems(
  subject: 'physique' | 'maths',
  seeds: (BepcExerciseSeed & { chapterId: string })[]
): Exercise[] {
  return seeds.map((seed, idx) => {
    const steps: CorrectionStep[] = seed.steps.map((st, sIdx) => ({
      stepNumber: sIdx + 1,
      title: st.title,
      ruleApplied: st.ruleApplied,
      mathExpression: st.mathExpression,
      explanation: st.explanation,
      subResult: st.subResult,
    }));

    return {
      id: `exam-bepc-${subject}-${idx + 1}`,
      chapterId: seed.chapterId,
      title: `Problème BEPC N°${idx + 1} · ${seed.title}`,
      difficulty: seed.difficulty,
      difficultyLabel: DIFF_LABELS[seed.difficulty],
      category: 'bepc-examen',
      isExamProblem: true,
      prompt: seed.prompt,
      hint: seed.hint,
      questionType: seed.questionType || 'numeric',
      options: seed.options,
      correctAnswer: seed.correctAnswer,
      unit: seed.unit,
      visualBadge: '📜',
      originCountry: seed.originCountry,
      originYear: seed.originYear,
      bepcPoints: seed.bepcPoints,
      themeTags: seed.themeTags,
      explanationFinal: seed.explanationFinal,
      steps,
    };
  });
}
