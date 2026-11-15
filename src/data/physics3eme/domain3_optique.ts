import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_3EME_OPTIQUE: Chapter[] = [
  {
    id: 'phys3-lentilles-construction',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'optique',
    order: 8,
    title: 'Lentilles minces : Construction d’image, Relation de conjugaison & Grandissement',
    badge: 'Physique 3ème · Ch. 8',
    shortDesc: 'Les 3 rayons particuliers, image réelle renversée vs image virtuelle droite, vergence C = 1/f’ et grandissement γ = A’B’/AB.',
    themeColor: '#3b82f6',
    themeGradient: 'from-sky-500 via-blue-500 to-cyan-400',
    readingTimeMinutes: 15,
    visualizerType: 'optique',
    illustrationKey: 'lentilles',
    bossMeta: { name: 'MAÎTRE DE L’OPTIQUE 3ÈME', emoji: '🔍', xp: 170 },
    kokoSpeech:
      'Pour construire l’image A’B’ d’un objet AB au BEPC, trace toujours 2 rayons particuliers parmi les 3 : 1) Celui qui passe par le centre optique O n’est PAS dévié ; 2) Celui qui est parallèle à l’axe passe par F’ !',
    realWorldHook: {
      title: 'Projeter une image nette au vidéoprojecteur en classe',
      scenario:
        'Un élève place une bougie allumée devant une lentille convergente de distance focale f’ = 20 cm. Selon que la bougie est loin (OA > f’) ou très proche (OA < f’), l’image apparaît renversée sur un mur ou droite à travers la lentille.',
      question:
        'Comment prévoir la position, la taille et le sens de l’image A’B’ ?',
    },
    unitsTable: [
      { symbol: 'f’ = OF’', quantity: 'Distance focale', unit: 'mètre (m) · parfois cm', instrument: 'Banc d’optique' },
      { symbol: 'C = 1 / f’', quantity: 'Vergence de la lentille', unit: 'Dioptrie (δ)', instrument: 'f’ obligatoirement en m !' },
      { symbol: 'γ = A’B’ / AB', quantity: 'Grandissement', unit: 'Sans unité', instrument: 'γ = OA’ ÷ OA' },
    ],
    experimentOrActivity: {
      title: 'Formation d’une image réelle sur un écran blanc',
      materials: ['1 lentille convergente (+5 δ, f’ = 20 cm)', '1 bougie ou lettre lumineuse F', '1 écran blanc', '1 règle graduée'],
      observation:
        'Quand l’objet est à 40 cm (2f’), une image nette de même taille mais RENVERSÉE se forme à 40 cm de l’autre côté. À 60 cm, l’image est plus petite. À moins de 20 cm, aucune image ne se forme sur l’écran.',
      conclusion:
        'Pour obtenir une image réelle sur un écran, l’objet doit être placé à une distance supérieure à la distance focale (OA > f’).',
    },
    revisionChecklist: [
      'Je sais tracer les 3 rayons particuliers d’une lentille convergente.',
      'Je convertis f’ en mètres avant de calculer C = 1 ÷ f’.',
      'Je sais calculer la taille de l’image via γ = A’B’ ÷ AB = OA’ ÷ OA.',
    ],
    keyFormulas: [
      'Vergence : C = 1 ÷ f’ (C en dioptries δ ; f’ en mètres m)',
      'Association de lentilles accolées : C_tot = C₁ + C₂',
      'Grandissement (sans signe en 3ème) : γ = A’B’ ÷ AB = OA’ ÷ OA',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Lentilles & Construction d’Image',
      slogan: 'Rayon par O non dévié · Rayon // axe passe par F’ · C = 1/f’',
      summaryBulletPoints: [
        'Lentille convergente : bords minces, C > 0 (+). Lentille divergente : bords épais, C < 0 (−).',
        'Si OA > f’ : image RÉELLE et RENVERSÉE (visible sur un écran).',
        'Si OA < f’ : image VIRTUELLE et DROITE, agrandie (c’est le principe de la LOUPE !).',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de vergence et grandissement',
          badge: '🔍',
          steps: [
            'Données : f’ = 25 cm = 0,25 m | AB = 4 cm ; OA = 50 cm ; OA’ = 50 cm',
            '1) Vergence C = 1 ÷ 0,25 = +4 δ',
            '2) Grandissement γ = OA’ ÷ OA = 50 ÷ 50 = 1',
            '3) Taille image A’B’ = γ × AB = 1 × 4 = 4 cm',
          ],
          resultHighlight: 'C = +4 δ | A’B’ = 4 cm',
          explanation: 'À 2f’, l’image réelle renversée a exactement la même taille que l’objet.',
        },
      ],
      kokoTip: 'Toujours convertir f’ en mètres ! Pour f’ = 20 cm = 0,20 m, C = 1 ÷ 0,20 = +5 δ.',
      pitfallToAvoid: 'Diviser 1 par 20 cm sans convertir en mètres (on trouverait 0,05 δ au lieu de 5 δ) !',
    },
    sections: [
      {
        title: '1. Construction géométrique et nature de l’image',
        explanation: [
          'Les 3 rayons particuliers d’une lentille convergente sont : (1) tout rayon passant par le centre optique O continue sans déviation ; (2) tout rayon parallèle à l’axe optique émerge en passant par le foyer image F’ ; (3) tout rayon passant par le foyer objet F émerge parallèlement à l’axe optique.',
        ],
        rules: [
          {
            name: 'Grandissement γ (Théorème de Thalès appliqué à l’optique)',
            description: 'Les triangles OAB et OA’B’ forment une configuration papillon de Thalès : A’B’ ÷ AB = OA’ ÷ OA.',
            example: 'AB = 3 cm, OA = 30 cm, OA’ = 60 cm | γ = 60 ÷ 30 = 2 | A’B’ = 2 × 3 = 6 cm',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'phys3-8-1',
        'phys3-lentilles-construction',
        'Ex 1 : Vergence d’une lentille (f’ = 12,5 cm)',
        1,
        'Une lentille convergente a une distance focale f’ = 12,5 cm.\nCalculer sa vergence C en dioptries (δ).',
        '8',
        'Convertis 12,5 cm = 0,125 m, puis calcule C = 1 ÷ 0,125.',
        'C = +8 δ.',
        [
          {
            title: 'Convertir f’ en mètres',
            explanation: '12,5 cm = 0,125 m.',
            math: 'f’ = 12,5 ÷ 100 | f’ = 0,125 m',
          },
          {
            title: 'Calculer C = 1 ÷ f’',
            explanation: '1 ÷ 0,125 = 8 δ.',
            math: 'C = 1 ÷ 0,125 | C = +8 δ',
            subResult: '+8 δ',
          },
        ],
        'δ',
        '🔍'
      ),
      mkNum(
        'phys3-8-2',
        'phys3-lentilles-construction',
        'Ex 2 : Taille de l’image par grandissement',
        2,
        'Un objet AB de hauteur 4 cm est placé à OA = 30 cm d’une lentille convergente. Son image nette se forme à OA’ = 45 cm.\nCalculer la hauteur A’B’ de l’image sur l’écran (en cm).',
        '6',
        'Utilise A’B’ ÷ AB = OA’ ÷ OA.',
        'γ = 45 ÷ 30 = 1,5 donc A’B’ = 1,5 × 4 = 6 cm.',
        [
          {
            title: 'Calculer le grandissement γ',
            explanation: 'γ = OA’ ÷ OA = 45 ÷ 30 = 1,5.',
            math: 'γ = 45 ÷ 30 | γ = 1,5',
          },
          {
            title: 'En déduire A’B’',
            explanation: 'A’B’ = 1,5 × 4 = 6 cm.',
            math: 'A’B’ = 1,5 × 4 | A’B’ = 6 cm',
            subResult: '6 cm',
          },
        ],
        'cm',
        '📐'
      ),
    ],
  },

  {
    id: 'phys3-oeil-instruments',
    subject: 'physique',
    gradeLevel: '3eme',
    domainId: 'optique',
    order: 9,
    title: 'L’Œil réduit, Défauts de vision (Myopie / Hypermétropie) & La Loupe',
    badge: 'Physique 3ème · Ch. 9',
    shortDesc: 'Modèle de l’œil (iris/diaphragme, cristallin/lentille, rétine/écran), correction par lunettes et loupe.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-sky-500 to-emerald-400',
    readingTimeMinutes: 12,
    visualizerType: 'optique',
    illustrationKey: 'oeil-instruments',
    bossMeta: { name: 'OPHTALMO DU BEPC', emoji: '👁️', xp: 150 },
    kokoSpeech:
      'Retiens ce schéma mental infaillible : L’œil MYOPE est trop convergent (image formée AVANT la rétine) ➔ on le corrige avec une lentille DIVERGENTE (−). L’œil HYPERMÉTROPE n’est pas assez convergent (image DERRIÈRE la rétine) ➔ lentille CONVERGENTE (+) !',
    realWorldHook: {
      title: 'Pourquoi certains élèves portent des verres « moins » ou « plus » au collège ?',
      scenario:
        'Sur l’ordonnance d’un opticien à Libreville, on lit « OD : −2,5 δ » pour un élève qui voit flou le tableau du fond, et « OG : +2,0 δ » pour une enseignante qui éloigne son journal pour lire.',
      question:
        'À quel défaut correspond chaque signe de vergence et comment fonctionne l’œil ?',
    },
    unitsTable: [
      { symbol: 'Cristallin', quantity: 'Lentille convergente de l’œil', unit: 'Vergence variable', instrument: 'Accommodation' },
      { symbol: 'Rétine', quantity: 'Écran de projection de l’œil', unit: 'Fond de l’œil', instrument: 'Image réelle renversée' },
      { symbol: 'C < 0 / C > 0', quantity: 'Verre correcteur', unit: 'Dioptrie (δ)', instrument: 'Divergente (−) / Convergente (+)' },
    ],
    experimentOrActivity: {
      title: 'Simuler la myopie et sa correction sur banc d’optique',
      materials: ['1 lentille +8 δ (cristallin)', '1 écran (rétine) placé trop loin', '1 lentille divergente −2 δ'],
      observation:
        'Quand la rétine est trop éloignée (œil myope), l’image est floue car elle se forme avant l’écran. En plaçant la lentille divergente devant, l’image recule pile sur la rétine et devient nette !',
      conclusion:
        'Une lentille divergente corrige la myopie ; une lentille convergente corrige l’hypermétropie (et la presbytie).',
    },
    revisionChecklist: [
      'Je sais associer chaque partie de l’œil à son équivalent optique (Iris = diaphragme, Cristallin = lentille convergente, Rétine = écran).',
      'Je sais distinguer Myopie (image avant la rétine ➔ divergente) et Hypermétropie (image après ➔ convergente).',
      'Je sais expliquer le principe de la loupe (objet entre O et F, image virtuelle droite agrandie).',
    ],
    keyFormulas: [
      'Œil réduit : Pupille/Iris = Diaphragme · Cristallin = Lentille convergente · Rétine = Écran',
      'Myopie (trop convergent, flou de loin) : image AVANT la rétine ➔ Lentille DIVERGENTE (C < 0)',
      'Hypermétropie / Presbytie (pas assez convergent, flou de près) : image APRÈS la rétine ➔ Lentille CONVERGENTE (C > 0)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : L’Œil & Correction Optique',
      slogan: 'Myope = Trop fort ➔ Divergente (−) · Hypermétrope = Pas assez ➔ Convergente (+)',
      summaryBulletPoints: [
        'L’image formée sur la rétine est réelle et renversée (le cerveau la remet à l’endroit).',
        'Pour voir net à différentes distances, le cristallin se déforme : c’est l’ACCOMMODATION.',
        'Une loupe est une lentille convergente de courte distance focale (2 à 10 cm) ; l’objet est placé à OA < f’.',
      ],
      verticalFormulas: [
        {
          name: 'Correction par lentilles accolées',
          badge: '👓',
          steps: [
            'Œil + Verre correcteur : C_total = C_œil + C_verre',
            'Ex : Œil trop convergent (+62 δ au lieu de +60 δ)',
            'C_verre = 60 − 62 = −2 δ (lentille divergente)',
          ],
          resultHighlight: 'C_verre = −2 δ',
          explanation: 'Le verre divergent retire l’excès de convergence de l’œil myope.',
        },
      ],
      kokoTip: 'Pour t’en souvenir facilement : Myopie commence comme Moins (−) ➔ verres négatifs (divergents) !',
      pitfallToAvoid: 'Dire que l’œil myope voit flou de près : NON, un myope voit très bien de près mais flou de LOIN !',
    },
    sections: [
      {
        title: '1. Modèle de l’œil réduit et défauts de vision',
        explanation: [
          'L’œil se comporte comme un appareil optique comprenant un diaphragme (l’iris et la pupille), une lentille convergente à focale variable (le cristallin) et un écran (la rétine).',
          'Chez un œil normal (emmétrope), l’image d’un objet lointain se forme exactement sur la rétine sans accommodation.',
        ],
        rules: [
          {
            name: 'Tableau de correction optique',
            description: 'Myopie : œil trop long ou cristallin trop convergent ➔ image devant la rétine ➔ verre divergent (C < 0). Hypermétropie : œil trop court ou pas assez convergent ➔ image derrière la rétine ➔ verre convergent (C > 0).',
            example: 'Ordonnance −1,5 δ | Signe (−) ➔ Lentille divergente | Défaut corrigé : Myopie',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'phys3-9-1',
        'phys3-oeil-instruments',
        'Ex 1 : Équivalence œil réduit',
        1,
        'Dans le modèle de l’œil réduit, quel organe joue le rôle d’écran sur lequel se forme l’image nette ?',
        ['La rétine', 'Le cristallin', 'La pupille', 'La cornée'],
        'La rétine',
        'C’est la membrane sensible tout au fond de l’œil.',
        'La rétine joue le rôle de l’écran ; le cristallin est la lentille convergente ; l’iris est le diaphragme.',
        [
          {
            title: 'Associer chaque partie de l’œil',
            explanation: 'Cristallin = lentille ; Iris = diaphragme ; Rétine = écran.',
            math: 'Écran de l’œil = Rétine',
            subResult: 'La rétine',
          },
        ],
        '👁️'
      ),
      mkQcm(
        'phys3-9-2',
        'phys3-oeil-instruments',
        'Ex 2 : Corriger la myopie',
        2,
        'Un élève myope voit flou le tableau depuis le fond de la classe. Où se forme l’image dans son œil sans lunettes et quel verre faut-il prescrire ?',
        [
          'Avant la rétine ➔ lentille divergente (C < 0)',
          'Derrière la rétine ➔ lentille convergente (C > 0)',
          'Sur la rétine ➔ verre neutre',
          'Avant la rétine ➔ lentille convergente (C > 0)',
        ],
        'Avant la rétine ➔ lentille divergente (C < 0)',
        'Myope = trop convergent ➔ image trop tôt (avant la rétine) ➔ il faut faire diverger.',
        'Chez le myope, l’image se forme avant la rétine ; on corrige avec une lentille divergente.',
        [
          {
            title: 'Diagnostiquer le défaut',
            explanation: 'Flou de loin = myopie (œil trop convergent).',
            math: 'Image avant rétine ➔ Correction par lentille divergente (−)',
            subResult: 'Lentille divergente',
          },
        ],
        '👓'
      ),
    ],
  },
];
