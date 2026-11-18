import { Exercise, ExerciseDifficulty } from '../../types/math';
import { PHYSICS_TC_CHAPTERS } from '../physicsTcCurriculum';
import { generatePhysicsTcExercise } from '../generators/physicsTcGenerators';
import { DIFFICULTY_META, withSeed } from '../generators/types';

const BAC_COUNTRIES = [
  '🇬🇦 BAC C Gabon',
  '🇸🇳 BAC S1 Sénégal',
  '🇨🇲 BAC C Cameroun',
  '🇧🇯 BAC C Bénin',
  '🇹🇬 BAC C Togo',
  '🇫🇷 BAC S France',
];

const BAC_YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2017'];

function buildTenBacPhysicsForChapter(chapterId: string): Exercise[] {
  const list: Exercise[] = [];
  const seenPrompts = new Set<string>();

  for (let idx = 0; idx < 10; idx++) {
    const diff: ExerciseDifficulty = 4;
    const country = BAC_COUNTRIES[idx % BAC_COUNTRIES.length];
    const year = BAC_YEARS[idx % BAC_YEARS.length];

    let candidate = withSeed(`bac-phys:${chapterId}:slot${idx}:try0`, () =>
      generatePhysicsTcExercise(chapterId, diff, idx)
    );
    let tries = 1;
    while (seenPrompts.has(candidate.prompt) && tries < 10) {
      candidate = withSeed(`bac-phys:${chapterId}:slot${idx}:try${tries}`, () =>
        generatePhysicsTcExercise(chapterId, diff, idx + tries)
      );
      tries++;
    }
    seenPrompts.add(candidate.prompt);

    list.push({
      id: `bac-phys-${chapterId}-${idx + 1}`,
      chapterId,
      title: `Type BAC C #${idx + 1} · ${candidate.title}`,
      difficulty: diff,
      difficultyLabel: DIFFICULTY_META[diff].label,
      category: 'bepc-chapitre',
      prompt: `[${country} · Session ${year} · Niveau Très Difficile · 10 Questions]\n${candidate.prompt}`,
      hint: candidate.hint,
      questionType: candidate.questionType,
      options: candidate.options,
      correctAnswer: candidate.correctAnswer,
      unit: candidate.unit,
      visualBadge: '🎓',
      originCountry: country,
      originYear: `Session ${year}`,
      bepcPoints: `${4 + (idx % 3)} pts`,
      themeTags: ['Bac Série C', 'Très Difficile · 10 Questions', 'Gabon & Francophonie'],
      explanationFinal: candidate.explanationFinal,
      steps: candidate.steps,
      subQuestions: candidate.subQuestions,
    });
  }

  return list;
}

export const BAC_PHYSICS_BY_CHAPTER: Record<string, Exercise[]> = Object.fromEntries(
  PHYSICS_TC_CHAPTERS.map((ch) => [ch.id, buildTenBacPhysicsForChapter(ch.id)])
);
