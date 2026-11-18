import { CorrectionStep, ExerciseDifficulty, SubQuestion } from '../../types/math';
import { PHYSICS_TC_CHAPTERS } from '../physicsTcCurriculum';
import { DIFFICULTY_META, GeneratedExercise } from './types';
import { HardQuestionSpec } from './tcHardMathHelpers';

export type { HardQuestionSpec };

export const fmtP = (n: number, dec = 2): string => String(Number(n.toFixed(dec)));

export function assembleHardPhysExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  title: string,
  contextIntro: string,
  items: HardQuestionSpec[]
): GeneratedExercise {
  const chap = PHYSICS_TC_CHAPTERS.find((c) => c.id === chapterId);
  const subQuestions: SubQuestion[] = items.map((item, idx) => ({
    questionNumber: idx + 1,
    questionPrompt: item.questionPrompt,
    questionType: item.questionType,
    options: item.options,
    correctAnswer: item.correctAnswer,
    unit: item.unit,
    hint: item.hint,
    ruleApplied: item.ruleApplied,
    mathExpression: item.mathExpression,
    explanation: item.explanation,
  }));

  const steps: CorrectionStep[] = items.map((item, idx) => ({
    stepNumber: idx + 1,
    title: `Question ${idx + 1}/10`,
    ruleApplied: item.ruleApplied,
    mathExpression: item.mathExpression,
    explanation: item.explanation,
    subResult: item.unit ? `${item.correctAnswer} ${item.unit}` : item.correctAnswer,
  }));

  const fullPrompt = [
    `[NIVEAU TRÈS DIFFICILE · 10 QUESTIONS] ${contextIntro}`,
    '',
    ...items.map((item, idx) => `${idx + 1}) ${item.questionPrompt}`),
  ].join('\n');

  const last = items[items.length - 1];

  return {
    chapterId,
    chapterTitle: chap?.title || chapterId,
    difficulty,
    difficultyLabel: DIFFICULTY_META[difficulty].label,
    title,
    prompt: fullPrompt,
    hint: last.hint,
    questionType: last.questionType,
    options: last.options,
    correctAnswer: last.correctAnswer,
    unit: last.unit,
    steps,
    explanationFinal: `Synthèse (Q10) : ${last.correctAnswer}${last.unit ? ` ${last.unit}` : ''} — toutes les 10 étapes détaillées sont disponibles ci-dessous.`,
    subQuestions,
  };
}
