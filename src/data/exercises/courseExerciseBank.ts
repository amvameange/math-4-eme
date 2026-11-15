import { Chapter, Exercise, ExerciseDifficulty } from '../../types/math';
import { generateMathExercise } from '../generators/mathInfiniteGenerators';
import { generatePhysicsExercise } from '../generators/physicsInfiniteGenerators';
import { DIFFICULTY_META, GeneratedExercise, withSeed } from '../generators/types';

function isPhysicsChapter(chapter: Chapter): boolean {
  return chapter.subject === 'physique' || chapter.id.startsWith('phys-') || chapter.id.startsWith('phys3-');
}

function toExercise(
  gen: GeneratedExercise,
  id: string,
  category: 'application' | 'cours',
  indexLabel?: string
): Exercise {
  return {
    id,
    chapterId: gen.chapterId,
    title: indexLabel ? `${indexLabel} — ${gen.title}` : gen.title,
    difficulty: gen.difficulty,
    difficultyLabel: gen.difficultyLabel,
    category,
    prompt: gen.prompt,
    hint: gen.hint,
    questionType: gen.questionType,
    options: gen.options,
    correctAnswer: gen.correctAnswer,
    unit: gen.unit,
    explanationFinal: gen.explanationFinal,
    steps: gen.steps,
  };
}

function generateSeededVariant(
  chapter: Chapter,
  difficulty: ExerciseDifficulty,
  slot: number,
  prefix: 'app' | 'cours',
  seenPrompts: Set<string>
): GeneratedExercise {
  const isPhys = isPhysicsChapter(chapter);
  let best: GeneratedExercise | null = null;
  for (let attempt = 0; attempt < 8; attempt++) {
    const seedKey = `${chapter.id}:${prefix}:lvl${difficulty}:slot${slot}:try${attempt}`;
    const candidate = withSeed(seedKey, () =>
      isPhys
        ? generatePhysicsExercise(chapter.id, difficulty, slot + attempt)
        : generateMathExercise(chapter.id, difficulty, slot + attempt)
    );
    best = candidate;
    if (!seenPrompts.has(candidate.prompt)) {
      seenPrompts.add(candidate.prompt);
      return candidate;
    }
  }
  const fallback = best!;
  seenPrompts.add(fallback.prompt);
  return {
    ...fallback,
    title: `${fallback.title} (Série #${slot + 1})`,
  };
}

/**
 * Retourne exactement 10 Exercices d'application directe pour un chapitre donné.
 */
export function getChapterApplicationExercises(chapter: Chapter): Exercise[] {
  const result: Exercise[] = [];
  const seenPrompts = new Set<string>();

  // 1. Inclure en priorité les exercices fondamentaux/entraînement du chapitre
  const directCandidates = chapter.exercises.filter((e) => e.difficulty <= 2);
  for (const ex of directCandidates) {
    if (result.length >= 10) break;
    seenPrompts.add(ex.prompt);
    result.push({
      ...ex,
      id: `${chapter.id}-app-${result.length + 1}`,
      category: 'application',
      title: `App. ${result.length + 1} — ${ex.title}`,
    });
  }

  // 2. Compléter à 10 avec le générateur paramétré déterministe (Niv. 1 et Niv. 2)
  let slot = 0;
  while (result.length < 10) {
    const diff: ExerciseDifficulty = result.length % 2 === 0 ? 1 : 2;
    const gen = generateSeededVariant(chapter, diff, slot, 'app', seenPrompts);
    result.push(
      toExercise(
        gen,
        `${chapter.id}-app-${result.length + 1}`,
        'application',
        `App. ${result.length + 1}`
      )
    );
    slot++;
  }

  return result;
}

/**
 * Retourne exactement 20 exercices par niveau de croissance de difficulté (Niv. 1, 2, 3, 4 = 80 exercices au total).
 */
export function getChapterCourseExercisesByLevel(
  chapter: Chapter
): Record<ExerciseDifficulty, Exercise[]> {
  const byLevel: Record<ExerciseDifficulty, Exercise[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  const levels: ExerciseDifficulty[] = [1, 2, 3, 4];
  for (const lvl of levels) {
    const seenPrompts = new Set<string>();
    const curated = chapter.exercises.filter((e) => e.difficulty === lvl);

    for (const ex of curated) {
      if (byLevel[lvl].length >= 20) break;
      seenPrompts.add(ex.prompt);
      const num = byLevel[lvl].length + 1;
      byLevel[lvl].push({
        ...ex,
        id: `${chapter.id}-c-lvl${lvl}-${num}`,
        category: 'cours',
        difficultyLabel: DIFFICULTY_META[lvl].label,
        title: `Niv.${lvl} · #${num} — ${ex.title}`,
      });
    }

    let slot = 0;
    while (byLevel[lvl].length < 20) {
      const num = byLevel[lvl].length + 1;
      const gen = generateSeededVariant(chapter, lvl, slot, 'cours', seenPrompts);
      byLevel[lvl].push(
        toExercise(
          gen,
          `${chapter.id}-c-lvl${lvl}-${num}`,
          'cours',
          `Niv.${lvl} · #${num}`
        )
      );
      slot++;
    }
  }

  return byLevel;
}

export function getAllChapterCourseExercises(chapter: Chapter): Exercise[] {
  const byLevel = getChapterCourseExercisesByLevel(chapter);
  return [...byLevel[1], ...byLevel[2], ...byLevel[3], ...byLevel[4]];
}
