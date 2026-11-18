import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise } from './types';
import { generateHardMathCh1to4 } from './tcHardMathCh1to4';
import { generateHardMathCh5to8 } from './tcHardMathCh5to8';
import { generateHardMathCh9to11 } from './tcHardMathCh9to11';
import { generateHardMathCh12to14 } from './tcHardMathCh12to14';

export function generateMathTcExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  const vMod = Math.abs(variantIndex + (difficulty - 1)) % 3;

  return (
    generateHardMathCh1to4(chapterId, difficulty, vMod) ??
    generateHardMathCh5to8(chapterId, difficulty, vMod) ??
    generateHardMathCh9to11(chapterId, difficulty, vMod) ??
    generateHardMathCh12to14(chapterId, difficulty, vMod) ??
    generateHardMathCh1to4('mathTc-arithmetique', difficulty, vMod)!
  );
}
