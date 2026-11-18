import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise } from './types';
import { generateHardPhysCh1to4 } from './tcHardPhysCh1to4';
import { generateHardPhysCh5to8 } from './tcHardPhysCh5to8';
import { generateHardPhysCh9to11 } from './tcHardPhysCh9to11';
import { generateHardPhysCh12to14 } from './tcHardPhysCh12to14';

export function generatePhysicsTcExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  const vMod = Math.abs(variantIndex + (difficulty - 1)) % 3;

  return (
    generateHardPhysCh1to4(chapterId, difficulty, vMod) ??
    generateHardPhysCh5to8(chapterId, difficulty, vMod) ??
    generateHardPhysCh9to11(chapterId, difficulty, vMod) ??
    generateHardPhysCh12to14(chapterId, difficulty, vMod) ??
    generateHardPhysCh1to4('physTc-cinematique', difficulty, vMod)!
  );
}
