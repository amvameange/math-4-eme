import { BepcArchivePaper, Exercise, SubjectId } from '../../types/math';
import { BAC_PHYSICS_BY_CHAPTER } from '../bac/bacPhysicsByChapter';
import { BAC_MATHS_BY_CHAPTER } from '../bac/bacMathsByChapter';
import { BAC_EXAM_PHYSICS_PROBLEMS } from '../bac/bacExamPhysicsProblems';
import { BAC_EXAM_MATH_PROBLEMS } from '../bac/bacExamMathProblems';
import { BAC_FULL_GRID_PHYSICS_PAPERS, BAC_FULL_GRID_MATHS_PAPERS } from '../bac/bacFullGridPapers';
import { BEPC_COUNTRY_META } from './bepcArchiveHelpers';

export const BEPC_PHYSICS_BY_CHAPTER: Record<string, Exercise[]> = BAC_PHYSICS_BY_CHAPTER;
export const BEPC_MATHS_BY_CHAPTER: Record<string, Exercise[]> = BAC_MATHS_BY_CHAPTER;

export const BEPC_EXAM_PHYSICS_PROBLEMS = BAC_EXAM_PHYSICS_PROBLEMS;
export const BEPC_EXAM_MATH_PROBLEMS = BAC_EXAM_MATH_PROBLEMS;

export { BEPC_COUNTRY_META };

export const BEPC_ARCHIVE_PHYSICS_PAPERS: BepcArchivePaper[] = BAC_FULL_GRID_PHYSICS_PAPERS;
export const BEPC_ARCHIVE_MATHS_PAPERS: BepcArchivePaper[] = BAC_FULL_GRID_MATHS_PAPERS;

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
