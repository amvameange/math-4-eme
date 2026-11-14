import { DomainMeta, Chapter } from '../types/math';
import { DOMAIN1_CHAPTERS } from './chapters/domain1_nombres';
import { DOMAIN2_CHAPTERS } from './chapters/domain2_donnees_fonctions';
import { DOMAIN3_CHAPTERS } from './chapters/domain3_geometrie';
import { DOMAIN4_CHAPTERS } from './chapters/domain4_espace_reperage';
import { MATH_ENHANCEMENTS } from './mathEnhancements';

export const DOMAINS: DomainMeta[] = [
  {
    id: 'nombres-calculs',
    subject: 'maths',
    title: 'Nombres, Calcul Littéral, Équations & Arithmétique (Ch. 1 à 9)',
    shortTitle: 'Nombres & Algèbre (9)',
    description:
      'Relatifs, puissances, fractions, calcul littéral, équations, racines carrées, identités remarquables, inéquations et nombres premiers/PGCD',
    iconName: 'Calculator',
    color: '#6366f1',
    badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
  },
  {
    id: 'donnees-fonctions',
    subject: 'maths',
    title: 'Proportionnalité, Fonctions, Stats & Probabilités (Ch. 10 à 15)',
    shortTitle: 'Données & Fonctions (6)',
    description:
      'Proportionnalité et pourcentages en F CFA, vitesse/durée/distance, moyennes, médiane, quartiles, probabilités et fonctions',
    iconName: 'PieChart',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/40',
  },
  {
    id: 'geometrie',
    subject: 'maths',
    title: 'Géométrie du Triangle & Transformations (Ch. 16 à 24)',
    shortTitle: 'Géométrie & Transf. (9)',
    description:
      'Pythagore, droite des milieux & agrandissement, translations, symétries, Thalès, trigonométrie (cos, sin, tan), homothétie, rotation et droites remarquables',
    iconName: 'Compass',
    color: '#8b5cf6',
    badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/40',
  },
  {
    id: 'mesures',
    subject: 'maths',
    title: 'Espace, Repérage & Propriétés du Cercle (Ch. 25 à 27)',
    shortTitle: 'Espace, Repère & Cercle (3)',
    description:
      'Pyramides, cônes et sections dans l’espace, coordonnées/milieu/distance dans le plan, angles inscrits, au centre et tangente au cercle',
    iconName: 'Ruler',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
];

const RAW_MATH_CHAPTERS: Chapter[] = [
  ...DOMAIN1_CHAPTERS,
  ...DOMAIN2_CHAPTERS,
  ...DOMAIN3_CHAPTERS,
  ...DOMAIN4_CHAPTERS,
];

export const CHAPTERS: Chapter[] = RAW_MATH_CHAPTERS.map((chap) => {
  const enhancement = MATH_ENHANCEMENTS[chap.id];
  return {
    ...chap,
    subject: 'maths',
    ...(enhancement ? enhancement : {}),
  };
});

export const TOTAL_EXERCISES_COUNT = CHAPTERS.reduce(
  (sum, ch) => sum + (ch.exercises ? ch.exercises.length : 0),
  0
);
