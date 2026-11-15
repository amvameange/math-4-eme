import { DomainMeta, Chapter } from '../types/math';
import { MATH_3EME_ALGEBRE } from './math3eme/domain1_algebre';
import { MATH_3EME_FONCTIONS_STATS } from './math3eme/domain2_fonctions_stats';
import { MATH_3EME_GEOMETRIE } from './math3eme/domain3_geometrie';
import { MATH_3EME_ESPACE } from './math3eme/domain4_espace_reperage';

export const MATH_3EME_DOMAINS: DomainMeta[] = [
  {
    id: 'nombres-calculs',
    subject: 'maths',
    title: 'Algèbre BEPC 3ème : Racines Carrées, Factorisation, Inéquations & Systèmes (Ch. 1 à 4)',
    shortTitle: 'Algèbre BEPC (4)',
    description:
      'Racines carrées & conjugué, identités/équations-produits, intervalles & inéquations, systèmes d’équations à 2 inconnues en F CFA',
    iconName: 'Calculator',
    color: '#6366f1',
    badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
  },
  {
    id: 'donnees-fonctions',
    subject: 'maths',
    title: 'Fonctions Affines, Statistiques en Classes & Probabilités 3ème (Ch. 5 à 7)',
    shortTitle: 'Fonctions & Stats (3)',
    description:
      'Applications linéaires f(x)=ax et affines f(x)=ax+b, moyennes par centres de classes & ECC, arbres et tableaux de probabilités à 2 épreuves',
    iconName: 'PieChart',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/40',
  },
  {
    id: 'geometrie',
    subject: 'maths',
    title: 'Géométrie BEPC : Thalès Papillon, Trigonométrie, Vecteurs & Angles (Ch. 8 à 11)',
    shortTitle: 'Géométrie BEPC (4)',
    description:
      'Thalès & réciproque, trigonométrie (cos²+sin²=1, 30°-45°-60°), vecteurs & relation de Chasles, angles inscrits & polygones réguliers',
    iconName: 'Compass',
    color: '#8b5cf6',
    badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/40',
  },
  {
    id: 'mesures',
    subject: 'maths',
    title: 'Repère Orthonormé, Droites, Pyramides, Cônes & Sections k³ (Ch. 12 à 14)',
    shortTitle: 'Repère & Espace 3D (3)',
    description:
      'Vecteurs dans un repère (colinéarité xy’−yx’=0, orthogonalité), équations de droites, pyramides, cônes, sections planes et tronc de cône',
    iconName: 'Ruler',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
];

export const MATH_3EME_CHAPTERS: Chapter[] = [
  ...MATH_3EME_ALGEBRE,
  ...MATH_3EME_FONCTIONS_STATS,
  ...MATH_3EME_GEOMETRIE,
  ...MATH_3EME_ESPACE,
];
