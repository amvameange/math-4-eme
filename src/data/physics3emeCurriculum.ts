import { DomainMeta, Chapter } from '../types/math';
import { PHYSICS_3EME_MECANIQUE } from './physics3eme/domain1_mecanique';
import { PHYSICS_3EME_ELECTRICITE } from './physics3eme/domain2_electricite';
import { PHYSICS_3EME_OPTIQUE } from './physics3eme/domain3_optique';
import { PHYSICS_3EME_CHIMIE } from './physics3eme/domain4_chimie';

export const PHYSICS_3EME_DOMAINS: DomainMeta[] = [
  {
    id: 'mecanique',
    subject: 'physique',
    title: 'Mécanique 3ème : Forces, Équilibre, Archimède, Travail, Puissance & Énergie (Ch. 1 à 4)',
    shortTitle: 'Mécanique (4)',
    description:
      'Actions mécaniques & vecteurs, équilibre à 2 forces & Archimède, travail W = F×d, puissance P = W/t et énergie mécanique Ec + Ep',
    iconName: 'Scale',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'electricite',
    subject: 'physique',
    title: 'Électricité & Électronique 3ème : Résistors, Joule, SEEG & Transformateur (Ch. 5 à 7)',
    shortTitle: 'Électricité & Électron. (3)',
    description:
      'Associations série/dérivation & pont diviseur, effet Joule P = R×I², facture SEEG BEPC, transformateur Us/Up = Ns/Np, pont de diodes & transistor',
    iconName: 'Zap',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
  },
  {
    id: 'optique',
    subject: 'physique',
    title: 'Optique 3ème : Construction d’Images, Grandissement, Œil & Loupe (Ch. 8 à 9)',
    shortTitle: 'Optique BEPC (2)',
    description:
      'Les 3 rayons particuliers, image réelle/virtuelle, grandissement γ = A’B’/AB, œil réduit, myopie/hypermétropie et loupe',
    iconName: 'Sun',
    color: '#3b82f6',
    badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
  },
  {
    id: 'chimie',
    subject: 'physique',
    title: 'Chimie 3ème : Métaux, Ions, Acides/Bases & Hydrocarbures du Gabon (Ch. 10 à 13)',
    shortTitle: 'Chimie BEPC (4)',
    description:
      'Métaux usuels & corrosion, cations/anions & tests des précipités, dilution pH & neutralisation, alcanes/alcènes & raffinage pétrolier',
    iconName: 'FlaskConical',
    color: '#a855f7',
    badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
  },
];

export const PHYSICS_3EME_CHAPTERS: Chapter[] = [
  ...PHYSICS_3EME_MECANIQUE,
  ...PHYSICS_3EME_ELECTRICITE,
  ...PHYSICS_3EME_OPTIQUE,
  ...PHYSICS_3EME_CHIMIE,
];
