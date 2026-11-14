import { CHAP1_EXERCISES } from './chap1_relatifs_puissances';
import { CHAP2_EXERCISES } from './chap2_calcul_litteral';
import { CHAP3_EXERCISES } from './chap3_equations';
import { CHAP4_EXERCISES } from './chap4_pythagore';
import { CHAP5_EXERCISES } from './chap5_milieux_cosinus';
import { CHAP6_EXERCISES } from './chap6_volumes_vitesse';
import { Exercise } from '../../types/math';

export const ALL_EXERCISES_BY_CHAPTER: Record<string, Exercise[]> = {
  'chap-1-relatifs-puissances': CHAP1_EXERCISES,
  'chap-2-calcul-litteral': CHAP2_EXERCISES,
  'chap-3-equations': CHAP3_EXERCISES,
  'chap-4-pythagore': CHAP4_EXERCISES,
  'chap-5-milieux-cosinus': CHAP5_EXERCISES,
  'chap-6-volumes-vitesse': CHAP6_EXERCISES,
};

export {
  CHAP1_EXERCISES,
  CHAP2_EXERCISES,
  CHAP3_EXERCISES,
  CHAP4_EXERCISES,
  CHAP5_EXERCISES,
  CHAP6_EXERCISES,
};
