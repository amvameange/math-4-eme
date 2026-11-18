import { ChapterExpMeta, MathLaboExpSpec } from './laboTypes';
import { MATH_TC_LABO_PART1 } from './mathTcLaboPart1';
import { MATH_TC_LABO_PART2 } from './mathTcLaboPart2';
import { MATH_TC_LABO_PART3 } from './mathTcLaboPart3';
import { MATH_TC_LABO_PART4 } from './mathTcLaboPart4';
import { MATH_TC_LABO_PART5 } from './mathTcLaboPart5';

export const MATH_TC_LABO_SPECS: Record<string, MathLaboExpSpec[]> = {
  ...MATH_TC_LABO_PART1,
  ...MATH_TC_LABO_PART2,
  ...MATH_TC_LABO_PART3,
  ...MATH_TC_LABO_PART4,
  ...MATH_TC_LABO_PART5,
};

export const MATH_TC_EXPERIENCE_META: Record<string, ChapterExpMeta> = Object.fromEntries(
  Object.entries(MATH_TC_LABO_SPECS).map(([chapterId, exps]) => [
    chapterId,
    {
      shortTitles: exps.map((e) => e.shortTitle),
      titles: exps.map((e) => e.title),
    },
  ])
);
