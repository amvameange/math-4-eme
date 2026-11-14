import { Chapter } from '../../types/math';
import { CHAP5_EXERCISES } from '../exercises/chap5_milieux_cosinus';
import { CHAP6_EXERCISES } from '../exercises/chap6_volumes_vitesse';
import { pickExercises, mkNum, mkQcm } from './exerciseHelpers';

export const DOMAIN4_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 25 : GÉOMÉTRIE DANS L’ESPACE (VOLUMES & SECTIONS)
  // ==========================================
  {
    id: 'geometrie-espace-volumes',
    domainId: 'mesures',
    order: 25,
    title: 'Géométrie dans l’espace : solides, sections, volumes',
    badge: 'Chapitre 25 · 4ème',
    shortDesc: 'Pyramides, cônes de révolution (V = B × h ÷ 3), sections parallèles à la base et conversions m³ ↔ litres.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-green-400 to-lime-400',
    readingTimeMinutes: 14,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'espace-volumes',
    bossMeta: { name: 'MAÎTRE DES PYRAMIDES', emoji: '🔺', xp: 180 },
    kokoSpeech:
      'Pour tous les solides qui finissent en POINTE (pyramide et cône), on calcule l’aire de la base × hauteur, puis on divise TOUJOURS par 3 ! Et 1 m³ contient 1 000 litres !',
    keyFormulas: [
      'Volume Pyramide ou Cône : V = (Aire Base × Hauteur) ÷ 3',
      'Volume Cône de rayon r : V = (π × r² × h) ÷ 3 (avec π ≈ 3,14)',
      'Section plane parallèle à la base : c’est une RÉDUCTION de la base !',
      'Conversions : 1 dm³ = 1 litre  |  1 m³ = 1 000 litres',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Solides de l’Espace & Volumes',
      slogan: 'Diviser par 3 pour les pointes et convertir en litres sans erreur',
      summaryBulletPoints: [
        'Prisme droit & Cylindre (2 bases) : V = Aire Base × h.',
        'Pyramide & Cône (1 base et 1 sommet pointe) : V = (Aire Base × h) ÷ 3.',
        'Si on te donne le DIAMÈTRE du cône, divise d’abord par 2 pour obtenir le rayon r !',
        'Section d’une pyramide ou d’un cône par un plan parallèle à la base : la figure obtenue a la même nature (carré, disque...) réduite d’un rapport k !',
      ],
      verticalFormulas: [
        {
          name: 'Volume d’une pyramide à base carrée',
          badge: '🔺',
          steps: ['Base carrée côté 6 cm, h = 10 cm', 'B = 6 × 6 = 36 cm²', 'V = (36 × 10) ÷ 3', 'V = 120 cm³'],
          resultHighlight: 'V = 120 cm³',
          explanation: 'Aire du carré × hauteur, puis division par 3.',
        },
        {
          name: 'Volume du cône (π ≈ 3,14)',
          badge: '🍦',
          steps: ['r = 3 cm, h = 10 cm', 'B = 3,14 × 3² = 28,26 cm²', 'V = (28,26 × 10) ÷ 3 = 94,2 cm³'],
          resultHighlight: 'V ≈ 94,2 cm³',
          explanation: 'Aire du disque π × r² multipliée par h puis divisée par 3.',
        },
      ],
      kokoTip: 'Un cône remplit EXACTEMENT le tiers d’un cylindre de même rayon et de même hauteur : il faut 3 cônes d’eau pour remplir 1 cylindre !',
      pitfallToAvoid: 'Oublier de diviser par 3, ou utiliser le diamètre au lieu du rayon dans π × r² !',
    },
    sections: [
      {
        title: '1. Pyramides et Cônes de révolution',
        explanation: [
          'La hauteur est toujours le segment issu du sommet S et PERPENDICULAIRE au plan de la base.',
          'Volume = (Aire de la base × hauteur) ÷ 3.',
        ],
        rules: [
          {
            name: 'Retrouver la hauteur à partir du volume',
            description: 'Si V = (B × h) ÷ 3, alors h = (3 × V) ÷ B.',
            example: 'V = 100 cm³, Base = 25 cm² | h = (3 × 100) ÷ 25 = 12 cm',
          },
        ],
      },
      {
        title: '2. Sections planes et réductions',
        explanation: [
          'Lorsqu’on coupe une pyramide parallèlement à sa base à mi-hauteur (k = 0,5), on obtient une petite pyramide au sommet qui est une réduction de rapport k = 0,5.',
          'Attention : le volume de la petite pyramide vaut alors k³ = (0,5)³ = 1/8 du grand volume !',
        ],
        rules: [
          {
            name: 'Sections classiques',
            description: 'Section d’un cylindre // base ➔ disque identique. Section d’un cône // base ➔ disque réduit.',
            example: 'Cône coupé à mi-hauteur (k = 1/2) ➔ rayon réduit par 2, aire par 4, volume par 8 !',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP6_EXERCISES,
      ['exo-4e-6-1', 'exo-4e-6-2', 'exo-4e-6-7', 'exo-4e-6-8', 'exo-4e-6-12', 'exo-4e-6-14', 'exo-4e-6-17', 'exo-4e-6-20'],
      'geometrie-espace-volumes'
    ),
  },

  // ==========================================
  // CHAPITRE 26 : REPÉRAGE DANS LE PLAN (COORDONNÉES, MILIEU, DISTANCE)
  // ==========================================
  {
    id: 'reperage-plan-coordonnees',
    domainId: 'mesures',
    order: 26,
    title: 'Repérage dans le plan : coordonnées, milieu, distance',
    badge: 'Chapitre 26 · 4ème',
    shortDesc: 'Lire M(x ; y), calculer les coordonnées du milieu I d’un segment et la distance AB par Pythagore.',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-cyan-500 to-teal-400',
    readingTimeMinutes: 13,
    visualizerType: 'pythagore',
    illustrationKey: 'reperage-plan',
    bossMeta: { name: 'NAVIGATEUR GPS', emoji: '🧭', xp: 170 },
    kokoSpeech:
      'Dans un repère, l’ordre compte toujours : M(Abscisse ; Ordonnée) ! Pour trouver le milieu, fais simplement la MOYENNE des x et la MOYENNE des y. Et pour la distance, c’est Pythagore !',
    keyFormulas: [
      'Coordonnées : M(x ; y) avec x sur l’axe horizontal (abscisses) et y sur l’axe vertical (ordonnées)',
      'Milieu I de [AB] : xᵢ = (xₐ + xᵦ) ÷ 2   |   yᵢ = (yₐ + yᵦ) ÷ 2',
      'Distance AB (repère orthonormé) : AB = √[ (xᵦ - xₐ)² + (yᵦ - yₐ)² ]',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Repérage dans le Plan',
      slogan: 'Lire des coordonnées, calculer un milieu et mesurer une distance',
      summaryBulletPoints: [
        'Toujours commencer par l’axe HORIZONTAL (x, abscisse), puis monter/descendre selon l’axe VERTICAL (y, ordonnée).',
        'Un point sur l’axe des abscisses a pour ordonnée y = 0. Un point sur l’axe des ordonnées a x = 0.',
        'Milieu = MOYENNE arithmétique : on additionne les deux abscisses et on divise par 2 !',
        'Distance AB : c’est l’hypoténuse d’un triangle rectangle formé par l’écart horizontal Δx et vertical Δy !',
      ],
      verticalFormulas: [
        {
          name: 'Coordonnées du milieu I de [AB]',
          badge: '📍',
          steps: ['A(2 ; 5) et B(8 ; -1)', 'xᵢ = (2 + 8) ÷ 2 = 5', 'yᵢ = (5 + (-1)) ÷ 2 = 2', 'I(5 ; 2)'],
          resultHighlight: 'I(5 ; 2)',
          explanation: 'On fait la moyenne séparément des abscisses et des ordonnées.',
        },
        {
          name: 'Distance AB par Pythagore',
          badge: '📏',
          steps: ['A(1 ; 2) et B(4 ; 6)', 'Δx = 4 - 1 = 3  |  Δy = 6 - 2 = 4', 'AB² = 3² + 4² = 9 + 16 = 25', 'AB = √25 = 5'],
          resultHighlight: 'AB = 5 unités',
          explanation: 'Le déplacement de A à B forme les deux petits côtés (3 et 4) d’un triangle rectangle.',
        },
      ],
      kokoTip: 'Moyen mnémotechnique : on écrit (x ; y) dans l’ORDRE ALPHABÉTIQUE, et « Abscisse » commence par A avant « Ordonnée » (O) !',
      pitfallToAvoid: 'Inverser x et y au moment de lire ou placer un point, ou soustraire au lieu d’additionner dans la formule du milieu !',
    },
    sections: [
      {
        title: '1. Lire des coordonnées et calculer le milieu d’un segment',
        explanation: [
          'Un repère orthonormé est formé de deux axes perpendiculaires ayant la même unité de longueur.',
        ],
        rules: [
          {
            name: 'Formule du milieu I de [AB]',
            description: 'xᵢ = (xₐ + xᵦ) ÷ 2  et  yᵢ = (yₐ + yᵦ) ÷ 2.',
            example: 'A(-4 ; 3) et B(6 ; 7) | xᵢ = (-4 + 6) ÷ 2 = 1 | yᵢ = (3 + 7) ÷ 2 = 5 | I(1 ; 5)',
          },
        ],
      },
      {
        title: '2. Calculer la distance AB dans un repère orthonormé',
        explanation: [
          'En traçant les parallèles aux axes passant par A et B, on obtient un triangle rectangle dont l’hypoténuse est [AB].',
        ],
        rules: [
          {
            name: 'Formule de la distance',
            description: 'AB = √((xᵦ - xₐ)² + (yᵦ - yₐ)²).',
            example: 'C(0 ; 0) et D(6 ; 8) | CD² = 6² + 8² = 100 | CD = √100 = 10',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-rep-1',
        'reperage-plan-coordonnees',
        'Ex 1 : Identifier abscisse et ordonnée',
        1,
        'Soit le point M(−3 ; 5) dans un repère. Quelle est son ORDONNÉE ?',
        ['5', '−3', '2', '−5'],
        '5',
        'L’abscisse est en 1ère position, l’ordonnée en 2ème position.',
        '−3 est l’abscisse ; 5 est l’ordonnée.',
        [
          { title: 'Lire M(x ; y)', explanation: 'x = −3 (abscisse) et y = 5 (ordonnée).', math: 'Ordonnée = 5', subResult: '5' },
        ],
        '📍'
      ),
      mkQcm(
        'exo-4e-rep-2',
        'reperage-plan-coordonnees',
        'Ex 2 : Coordonnées du milieu de [AB]',
        2,
        'On donne A(2 ; 8) et B(6 ; −2). Quelles sont les coordonnées du milieu I de [AB] ?',
        ['I(4 ; 3)', 'I(4 ; 5)', 'I(2 ; 5)', 'I(8 ; 6)'],
        'I(4 ; 3)',
        'xᵢ = (2 + 6) ÷ 2  et  yᵢ = (8 + (-2)) ÷ 2.',
        'xᵢ = 8 ÷ 2 = 4 et yᵢ = 6 ÷ 2 = 3 ➔ I(4 ; 3).',
        [
          { title: 'Calculer xᵢ et yᵢ', explanation: '(2+6)/2 = 4 ; (8-2)/2 = 3.', math: 'I(4 ; 3)', subResult: 'I(4 ; 3)' },
        ],
        '🎯'
      ),
      mkNum(
        'exo-4e-rep-3',
        'reperage-plan-coordonnees',
        'Ex 3 : Distance entre deux points par Pythagore',
        3,
        'Dans un repère orthonormé, on place A(1 ; 2) et B(7 ; 10).\nCalculer la distance AB.',
        '10',
        'Écart en x = 7 − 1 = 6 ; Écart en y = 10 − 2 = 8. Calcule √(6² + 8²).',
        'AB² = 6² + 8² = 36 + 64 = 100 ➔ AB = √100 = 10.',
        [
          { title: 'Calculer les écarts', explanation: '7 − 1 = 6 et 10 − 2 = 8.', math: 'Δx = 6 | Δy = 8' },
          { title: 'Appliquer Pythagore', explanation: 'AB² = 36 + 64 = 100.', math: 'AB = √100 = 10', subResult: '10' },
        ],
        undefined,
        '📏'
      ),
      mkNum(
        'exo-4e-rep-4',
        'reperage-plan-coordonnees',
        'Ex 4 : Retrouver l’extrémité B connaissant A et le milieu I',
        3,
        'Le point I(5 ; 4) est le milieu du segment [AB]. Sachant que A(2 ; 1), quelle est l’abscisse du point B ?',
        '8',
        'Pose (2 + xᵦ) ÷ 2 = 5 ➔ 2 + xᵦ = 10.',
        'xᵦ = 10 − 2 = 8.',
        [
          { title: 'Écrire la formule du milieu', explanation: '(2 + xᵦ) ÷ 2 = 5.', math: '2 + xᵦ = 10' },
          { title: 'Isoler xᵦ', explanation: 'xᵦ = 10 − 2 = 8.', math: 'xᵦ = 8', subResult: '8' },
        ],
        undefined,
        '🔄'
      ),
      mkQcm(
        'exo-4e-rep-5',
        'reperage-plan-coordonnees',
        'Ex 5 : Point sur l’axe des ordonnées',
        2,
        'Un point P appartient à l’axe vertical des ordonnées. Que vaut obligatoirement son abscisse ?',
        ['0', '1', 'La même valeur que y', 'On ne peut pas savoir'],
        '0',
        'Sur l’axe vertical central, on ne s’est déplacé ni à gauche ni à droite !',
        'Tout point sur l’axe des ordonnées a une abscisse nulle : P(0 ; y).',
        [
          { title: 'Position sur l’axe vertical', explanation: 'Aucun décalage horizontal ➔ x = 0.', math: 'P(0 ; y)', subResult: '0' },
        ],
        '🧭'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 27 : CERCLE (ANGLE INSCRIT, ANGLE AU CENTRE, TANGENTE)
  // ==========================================
  {
    id: 'cercle-proprietes-avancees',
    domainId: 'mesures',
    order: 27,
    title: 'Cercle : angle inscrit, angle au centre, tangente',
    badge: 'Chapitre 27 · 4ème',
    shortDesc: 'Relation double angle au centre = 2 × angle inscrit, cercle circonscrit au triangle rectangle et tangente ⊥ rayon.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-yellow-500 to-emerald-500',
    readingTimeMinutes: 13,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'cercle',
    bossMeta: { name: 'MAÎTRE DU CERCLE', emoji: '⭕', xp: 190 },
    kokoSpeech:
      'Retiens le théorème star du cercle : l’angle au CENTRE O mesure toujours le DOUBLE de l’angle inscrit qui regarde le même arc ! Et la tangente en M forme un angle de 90° avec le rayon [OM] !',
    keyFormulas: [
      'Angle au centre AÔB = 2 × Angle inscrit AMB (interceptant le même arc AB)',
      'Deux angles inscrits interceptant le même arc sont ÉGAUX !',
      'Triangle inscrit dans un demi-cercle (diamètre = côté) ➔ Triangle RECTANGLE (90°)',
      'Tangente en M au cercle de centre O : elle est PERPENDICULAIRE au rayon [OM]',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Propriétés Avancées du Cercle',
      slogan: 'Relier angles inscrits, angle au centre et tangente perpendiculaire',
      summaryBulletPoints: [
        'Angle inscrit : son sommet est SUR le cercle et ses côtés coupent le cercle.',
        'Angle au centre : son sommet est au CENTRE O du cercle.',
        'Relation d’or : Angle au centre = 2 × Angle inscrit (si même arc !). Inversement, Angle inscrit = Angle au centre ÷ 2.',
        'Cas spécial demi-cercle : angle au centre plat (180°) ➔ angle inscrit = 180° ÷ 2 = 90° (triangle rectangle !).',
        'Tangente : ne touche le cercle qu’en UN seul point M, et (tangente) ⊥ (OM) !',
      ],
      verticalFormulas: [
        {
          name: 'Trouver l’angle au centre',
          badge: '⭕',
          steps: ['Angle inscrit AMB = 35° (arc AB)', 'Angle au centre AÔB = 2 × AMB', 'AÔB = 2 × 35° = 70°'],
          resultHighlight: 'AÔB = 70°',
          explanation: 'L’angle au centre vaut exactement le double de l’angle inscrit.',
        },
        {
          name: 'Triangle et tangente (Pythagore)',
          badge: '📐',
          steps: ['(MT) tangente en M ➔ OMT rectangle en M', 'Rayon OM = 5 cm, OT = 13 cm', 'MT² = OT² - OM² = 169 - 25 = 144', 'MT = √144 = 12 cm'],
          resultHighlight: 'MT = 12 cm',
          explanation: 'Grâce à l’angle droit de la tangente en M, on applique directement Pythagore.',
        },
      ],
      kokoTip: 'Pour vérifier si deux angles ont le « même arc », regarde simplement si les deux angles s’ouvrent sur les mêmes deux lettres (ex: A et B) !',
      pitfallToAvoid: 'Diviser au lieu de multiplier : l’angle au CENTRE est toujours le PLUS GRAND (le double) !',
    },
    sections: [
      {
        title: '1. Angle inscrit et Angle au centre',
        explanation: [
          'Lorsque deux angles (un au centre O, un inscrit sur le cercle) interceptent le même arc AB, l’angle au centre mesure exactement le double de l’angle inscrit.',
          'Par conséquent, tous les angles inscrits qui regardent le même arc AB ont exactement la même mesure !',
        ],
        rules: [
          {
            name: 'Cas du demi-cercle (Triangle rectangle)',
            description: 'Si [BC] est un diamètre du cercle et A un autre point du cercle, alors ABC est rectangle en A.',
            example: 'BÔC = 180° (diamètre) ➔ BÂC = 180° ÷ 2 = 90°',
          },
        ],
      },
      {
        title: '2. Tangente à un cercle',
        explanation: [
          'La tangente au cercle (C) de centre O passant par le point M du cercle est la droite perpendiculaire au rayon [OM] en M.',
        ],
        rules: [
          {
            name: 'Angle droit de tangence',
            description: '(d) tangente en M au cercle de centre O ⟺ (d) ⊥ (OM).',
            example: 'Si T ∈ (d), le triangle OMT est rectangle en M (hypoténuse [OT]) !',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(CHAP5_EXERCISES, ['exo-4e-5-11'], 'cercle-proprietes-avancees'),
      mkNum(
        'exo-4e-cerc-2',
        'cercle-proprietes-avancees',
        'Ex 2 : Angle au centre connaissant l’angle inscrit',
        1,
        'Sur un cercle de centre O, l’angle inscrit AMB mesure 42° et intercepte le petit arc AB.\nCombien mesure l’angle au centre AÔB (en degrés) ?',
        '84',
        'L’angle au centre vaut le DOUBLE de l’angle inscrit.',
        'AÔB = 2 × 42° = 84°.',
        [
          { title: 'Appliquer AÔB = 2 × AMB', explanation: 'Même arc AB.', math: 'AÔB = 2 × 42° = 84°', subResult: '84°' },
        ],
        '°',
        '⭕'
      ),
      mkNum(
        'exo-4e-cerc-3',
        'cercle-proprietes-avancees',
        'Ex 3 : Angle inscrit connaissant l’angle au centre',
        2,
        'L’angle au centre AÔB mesure 110°. Quel est la mesure de l’angle inscrit ANB interceptant le même arc AB (en degrés) ?',
        '55',
        'Angle inscrit = Angle au centre ÷ 2.',
        'ANB = 110° ÷ 2 = 55°.',
        [
          { title: 'Diviser par 2', explanation: '110° ÷ 2 = 55°.', math: 'ANB = 110° ÷ 2 = 55°', subResult: '55°' },
        ],
        '°',
        '📐'
      ),
      mkQcm(
        'exo-4e-cerc-4',
        'cercle-proprietes-avancees',
        'Ex 4 : Deux angles inscrits sur le même arc',
        2,
        'A, B, M et N sont 4 points d’un cercle. L’angle inscrit AMB mesure 38° et l’angle inscrit ANB intercepte le même arc AB.\nQue vaut ANB ?',
        ['38°', '76°', '19°', '90°'],
        '38°',
        'Deux angles inscrits qui regardent le même arc sont égaux !',
        'ANB = AMB = 38°.',
        [
          { title: 'Même arc intercepté', explanation: 'Tous deux valent la moitié de AÔB.', math: 'ANB = AMB = 38°', subResult: '38°' },
        ],
        '🎯'
      ),
      mkNum(
        'exo-4e-cerc-5',
        'cercle-proprietes-avancees',
        'Ex 5 : Tangente au cercle et Théorème de Pythagore',
        4,
        'La droite (PT) est tangente en T au cercle de centre O et de rayon OT = 6 cm.\nSachant que OP = 10 cm, calculer la longueur du segment tangent PT (en cm).',
        '8',
        'La tangente (PT) est perpendiculaire au rayon [OT] en T : OPT est rectangle en T !',
        'PT² = OP² − OT² = 10² − 6² = 100 − 36 = 64 ➔ PT = √64 = 8 cm.',
        [
          { title: 'Identifier l’angle droit de tangence', explanation: 'OPT est rectangle en T (hypoténuse [OP]).', math: 'OP² = OT² + PT²' },
          { title: 'Calculer PT par Pythagore', explanation: 'PT² = 100 − 36 = 64.', math: 'PT = √64 = 8 cm', subResult: '8 cm' },
        ],
        'cm',
        '🧱'
      ),
    ],
  },
];
