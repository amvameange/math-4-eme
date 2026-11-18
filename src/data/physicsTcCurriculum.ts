import { DomainMeta, Chapter } from '../types/math';
import { PHYSICS_TC_MECANIQUE } from './physicsTc/domain1_mecanique';
import { PHYSICS_TC_ELECTRICITE_ONDES } from './physicsTc/domain2_electricite_ondes';
import { PHYSICS_TC_NUCLEAIRE } from './physicsTc/domain3_nucleaire';
import { PHYSICS_TC_CHIMIE } from './physicsTc/domain4_chimie';

export const PHYSICS_TC_DOMAINS: DomainMeta[] = [
  {
    id: 'mecanique',
    subject: 'physique',
    title: 'Mécanique & Gravitation Tle C : Cinématique, Champs E⃗/B⃗, Kepler & Oscillateurs (Ch. 1 à 4)',
    shortTitle: 'Mécanique (4)',
    description:
      'Repère de Frenet, lois de Newton, tir balistique, force de Lorentz qv⃗∧B⃗, lois de Kepler & satellites, pendule élastique et énergie mécanique',
    iconName: 'Scale',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'electricite',
    subject: 'physique',
    title: 'Électricité, Ondes & Quanta Tle C : RC, RL, RLC Résonance, Young & Photoélectrique (Ch. 5 à 8)',
    shortTitle: 'Électr. & Ondes (4)',
    description:
      'Dipôles RC/RL, oscillateur LC, résonance RLC série & Fresnel, ondes mécaniques progressives, fentes d’Young et effet photoélectrique',
    iconName: 'Zap',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  },
  {
    id: 'nucleaire',
    subject: 'physique',
    title: 'Physique Nucléaire Tle C : Radioactivité, Défaut de Masse, Fission & Fusion (Ch. 9 à 10)',
    shortTitle: 'Nucléaire (2)',
    description:
      'Défaut de masse & énergie de liaison (Aston), lois de Soddy, décroissance N₀e^(-λt), datation, fission et fusion nucléaires (Oklo Gabon)',
    iconName: 'Atom',
    color: '#f43f5e',
    badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
  },
  {
    id: 'chimie',
    subject: 'physique',
    title: 'Chimie Tle C : Cinétique, Acides-Bases pH, Alcools & Esters/Saponification (Ch. 11 à 14)',
    shortTitle: 'Chimie (4)',
    description:
      'Vitesse volumique & t₁/₂, couples acide/base pK_a & titrage pH-métrique, oxydation ménagée des alcools, estérification & saponification',
    iconName: 'FlaskConical',
    color: '#a855f7',
    badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
  },
];

export const PHYSICS_TC_CHAPTERS: Chapter[] = [
  ...PHYSICS_TC_MECANIQUE,
  ...PHYSICS_TC_ELECTRICITE_ONDES,
  ...PHYSICS_TC_NUCLEAIRE,
  ...PHYSICS_TC_CHIMIE,
];
