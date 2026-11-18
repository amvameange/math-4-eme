import { Chapter, DomainMeta } from '../types/math';
import { MATH_TC_ALGEBRE_ARITH } from './mathTc/domain1_algebre_arith';
import { MATH_TC_ANALYSE } from './mathTc/domain2_analyse';
import { MATH_TC_INTEGRALES_PROBAS } from './mathTc/domain3_integrales_probas';
import { MATH_TC_ESPACE_CONIQUES } from './mathTc/domain4_espace_coniques';

export const MATH_TC_DOMAINS: DomainMeta[] = [
  {
    id: 'nombres-calculs',
    subject: 'maths',
    title: 'Algèbre, Arithmétique & Complexes Tle C (Ch. 1 à 4)',
    shortTitle: 'Arithm. & Complexes (4)',
    description:
      'Divisibilité, Bézout, Gauss, Fermat, nombres complexes (algèbre, géométrie, similitudes), barycentre et produit vectoriel',
    iconName: 'Calculator',
    color: '#3b82f6',
    badgeBg: 'bg-blue-500/15 text-blue-300 border-blue-500/40',
  },
  {
    id: 'donnees-fonctions',
    subject: 'maths',
    title: 'Analyse & Suites Numériques Tle C (Ch. 5 à 8)',
    shortTitle: 'Analyse & Suites (4)',
    description:
      'Limites, TVI, bijection réciproque, IAF, primitives, fonctions ln/exp, équations différentielles et suites adjacentes',
    iconName: 'TrendingUp',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'mesures',
    subject: 'maths',
    title: 'Calcul Intégral, Probabilités & Stats 2D Tle C (Ch. 9 à 11)',
    shortTitle: 'Intégrales & Probas (3)',
    description:
      'Intégration par parties, aires, volumes de révolution, dénombrement, Bayes, loi binomiale et ajustement affine',
    iconName: 'BarChart3',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  },
  {
    id: 'geometrie',
    subject: 'maths',
    title: 'Géométrie 3D, Isométries & Coniques Tle C (Ch. 12 à 14)',
    shortTitle: 'Espace & Coniques (3)',
    description:
      'Plans, droites, sphères, déplacements, antidéplacements, similitudes, parabole, ellipse et hyperbole',
    iconName: 'Compass',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/40',
  },
];

export const MATH_TC_CHAPTERS: Chapter[] = [
  ...MATH_TC_ALGEBRE_ARITH,
  ...MATH_TC_ANALYSE,
  ...MATH_TC_INTEGRALES_PROBAS,
  ...MATH_TC_ESPACE_CONIQUES,
];
