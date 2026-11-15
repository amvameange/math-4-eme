import { BepcArchivePaper, Exercise, SubjectId } from '../../types/math';
import { BEPC_PHYSICS_CHAPTERS_1_TO_7 } from './bepcPhysicsChapters1to7';
import { BEPC_PHYSICS_CHAPTERS_8_TO_13 } from './bepcPhysicsChapters8to13';
import { BEPC_MATHS_CHAPTERS_1_TO_7 } from './bepcMathsChapters1to7';
import { BEPC_MATHS_CHAPTERS_8_TO_14 } from './bepcMathsChapters8to14';
import { BEPC_EXAM_PHYSICS_PROBLEMS } from './bepcExamPhysicsProblems';
import { BEPC_EXAM_MATH_PROBLEMS } from './bepcExamMathProblems';
import { BEPC_COUNTRY_META } from './bepcArchiveHelpers';
import { BEPC_FULL_GRID_PHYSICS_PAPERS } from './bepcFullGridPhysics';
import { BEPC_FULL_GRID_MATHS_PAPERS } from './bepcFullGridMaths';

export const BEPC_PHYSICS_BY_CHAPTER: Record<string, Exercise[]> = {
  ...BEPC_PHYSICS_CHAPTERS_1_TO_7,
  ...BEPC_PHYSICS_CHAPTERS_8_TO_13,
};

export const BEPC_MATHS_BY_CHAPTER: Record<string, Exercise[]> = {
  ...BEPC_MATHS_CHAPTERS_1_TO_7,
  ...BEPC_MATHS_CHAPTERS_8_TO_14,
};

export { BEPC_EXAM_PHYSICS_PROBLEMS, BEPC_EXAM_MATH_PROBLEMS, BEPC_COUNTRY_META };

export const BEPC_ARCHIVE_PHYSICS_PAPERS: BepcArchivePaper[] = BEPC_FULL_GRID_PHYSICS_PAPERS;

export const BEPC_ARCHIVE_MATHS_PAPERS: BepcArchivePaper[] = BEPC_FULL_GRID_MATHS_PAPERS;

export function getBepcExercisesForChapter(
  chapterId: string,
  subject: SubjectId
): Exercise[] {
  const bank = subject === 'physique' ? BEPC_PHYSICS_BY_CHAPTER : BEPC_MATHS_BY_CHAPTER;
  return bank[chapterId] || [];
}

export function getBepcExamProblems(subject: SubjectId): Exercise[] {
  return subject === 'physique' ? BEPC_EXAM_PHYSICS_PROBLEMS : BEPC_EXAM_MATH_PROBLEMS;
}

export function getBepcArchivePapers(subject: SubjectId): BepcArchivePaper[] {
  return subject === 'physique' ? BEPC_ARCHIVE_PHYSICS_PAPERS : BEPC_ARCHIVE_MATHS_PAPERS;
}
