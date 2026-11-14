import { DomainMeta, Chapter } from '../types/math';
import { PHYSICS_DOMAIN1_CHAPTERS } from './physics/domain1_electricite';
import { PHYSICS_DOMAIN2_CHAPTERS } from './physics/domain2_optique';
import { PHYSICS_DOMAIN3_CHAPTERS } from './physics/domain3_mecanique';
import { PHYSICS_DOMAIN4_CHAPTERS } from './physics/domain4_chimie';

export const PHYSICS_DOMAINS: DomainMeta[] = [
  {
    id: 'electricite',
    subject: 'physique',
    title: 'Électricité : Circuits, Intensité, Tension, Loi d’Ohm & Facture SEEG (Ch. 1 à 6)',
    shortTitle: 'Électricité (6)',
    description:
      'Schématisation normalisée, série vs dérivation, intensité I (A), tension U (V), loi d’Ohm U = R×I, puissance P = U×I et facture SEEG en F CFA',
    iconName: 'Zap',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  },
  {
    id: 'optique',
    subject: 'physique',
    title: 'Optique : Propagation, Ombres, Miroirs, Lentilles & Couleurs (Ch. 7 à 11)',
    shortTitle: 'Optique & Lumière (5)',
    description:
      'Propagation rectiligne (c = 300 000 km/s), ombres et éclipses, réflexion/réfraction, lentilles convergentes, vergence C = 1/f, œil et dispersion',
    iconName: 'Sun',
    color: '#3b82f6',
    badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
  },
  {
    id: 'mecanique',
    subject: 'physique',
    title: 'Mécanique : Masse Volumique, Forces, Poids, Pression & Archimède (Ch. 12 à 15)',
    shortTitle: 'Mécanique & Forces (4)',
    description:
      'Masse volumique ρ = m/V et flottabilité sur l’Ogooué, vecteur force au dynamomètre, Poids P = m×g (Gabon vs Lune), pression p = F/S et Archimède',
    iconName: 'Scale',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'chimie',
    subject: 'physique',
    title: 'Chimie : Air, Atomes, Combustions, Équations-Bilan & pH (Ch. 16 à 20)',
    shortTitle: 'Chimie & Matière (5)',
    description:
      'Composition de l’air (78% N₂, 21% O₂), atomes et molécules, combustions complète/incomplète, équilibrage et loi de Lavoisier, concentration Cm et pH',
    iconName: 'FlaskConical',
    color: '#a855f7',
    badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
  },
];

export const PHYSICS_CHAPTERS: Chapter[] = [
  ...PHYSICS_DOMAIN1_CHAPTERS,
  ...PHYSICS_DOMAIN2_CHAPTERS,
  ...PHYSICS_DOMAIN3_CHAPTERS,
  ...PHYSICS_DOMAIN4_CHAPTERS,
];

export const TOTAL_PHYSICS_EXERCISES_COUNT = PHYSICS_CHAPTERS.reduce(
  (sum, ch) => sum + (ch.exercises ? ch.exercises.length : 0),
  0
);
