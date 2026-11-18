import { ChapterExpMeta, PhysicsLaboExpSpec } from './laboTypes';
import { PHYSICS_TC_LABO_PART1 } from './physicsTcLaboPart1';
import { PHYSICS_TC_LABO_PART2 } from './physicsTcLaboPart2';
import { PHYSICS_TC_LABO_PART3 } from './physicsTcLaboPart3';
import { PHYSICS_TC_LABO_PART4 } from './physicsTcLaboPart4';
import { PHYSICS_TC_LABO_PART5 } from './physicsTcLaboPart5';

export const PHYSICS_TC_LABO_SPECS: Record<string, PhysicsLaboExpSpec[]> = {
  ...PHYSICS_TC_LABO_PART1,
  ...PHYSICS_TC_LABO_PART2,
  ...PHYSICS_TC_LABO_PART3,
  ...PHYSICS_TC_LABO_PART4,
  ...PHYSICS_TC_LABO_PART5,
};

export const PHYSICS_TC_EXPERIENCE_META: Record<string, ChapterExpMeta> = Object.fromEntries(
  Object.entries(PHYSICS_TC_LABO_SPECS).map(([chapterId, exps]) => [
    chapterId,
    {
      shortTitles: exps.map((e) => e.shortTitle),
      titles: exps.map((e) => e.title),
    },
  ])
);
