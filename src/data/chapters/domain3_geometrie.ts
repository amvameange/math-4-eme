import { Chapter } from '../../types/math';
import { CHAP4_EXERCISES } from '../exercises/chap4_pythagore';
import { CHAP5_EXERCISES } from '../exercises/chap5_milieux_cosinus';
import { pickExercises, mkNum, mkQcm } from './exerciseHelpers';

export const DOMAIN3_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 16 : THÉORÈME DE PYTHAGORE ET RÉCIPROQUE
  // ==========================================
  {
    id: 'theoreme-pythagore',
    domainId: 'geometrie',
    order: 16,
    title: 'Théorème de Pythagore et sa réciproque',
    badge: 'Chapitre 16 · 4ème',
    shortDesc: 'Calculer l’hypoténuse (+) ou un côté de l’angle droit (−), et démontrer un angle droit par la réciproque.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-purple-500 to-indigo-500',
    readingTimeMinutes: 15,
    visualizerType: 'pythagore',
    illustrationKey: 'pythagore',
    bossMeta: { name: 'ARCHITECTE PYTHAGORE', emoji: '📐', xp: 200 },
    kokoSpeech:
      'Pour trouver l’hypoténuse (en face de 90°), on ADDITIONNE les carrés. Pour trouver un petit côté de l’angle droit, on SOUSTRAIT ! Et en réciproque, calcule les deux côtés séparément !',
    keyFormulas: [
      'ABC rectangle en A : BC² = AB² + AC²',
      'Petit côté : AB² = BC² − AC²',
      'Réciproque : si BC² = AB² + AC², alors ABC est rectangle en A',
      'Contraposée : si BC² ≠ AB² + AC², alors ABC n’est pas rectangle',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Théorème de Pythagore',
      slogan: 'Calculer une longueur et prouver un angle droit comme un charpentier',
      summaryBulletPoints: [
        'Le théorème ne s’applique QUE dans un triangle RECTANGLE (angle de 90°).',
        'L’hypoténuse est toujours le plus grand côté (en face de l’angle droit).',
        'Si on cherche l’hypoténuse ➔ ADDITION ; si on cherche un petit côté ➔ SOUSTRACTION.',
        'En rédaction réciproque : calculer séparément (Grand côté)² d’une part et (Côté 1)² + (Côté 2)² d’autre part !',
      ],
      verticalFormulas: [
        {
          name: 'Calculer l’hypoténuse (Addition)',
          badge: '📐',
          steps: ['BC² = AB² + AC²', 'BC² = 6² + 8²', 'BC² = 36 + 64 = 100', 'BC = √100 = 10 cm'],
          resultHighlight: 'BC = 10 cm',
          explanation: 'On cherche le plus grand côté donc on additionne les carrés.',
        },
        {
          name: 'Calculer un petit côté (Soustraction)',
          badge: '➖',
          steps: ['13² = 5² + AC²', 'AC² = 169 - 25 = 144', 'AC = √144 = 12 cm'],
          resultHighlight: 'AC = 12 cm',
          explanation: 'On connaît l’hypoténuse (13) donc on soustrait.',
        },
        {
          name: 'Réciproque (Triangle 9 - 12 - 15)',
          badge: '🧱',
          steps: ['D’une part : 15² = 225', 'D’autre part : 9² + 12² = 81 + 144 = 225', 'Comme 15² = 9² + 12²', 'Triangle rectangle (90°)'],
          resultHighlight: 'Angle droit prouvé !',
          explanation: 'Les deux calculs séparés donnent exactement 225.',
        },
      ],
      kokoTip: 'Apprends par cœur les triplets rectangles : (3, 4, 5) ; (6, 8, 10) ; (5, 12, 13) ; (9, 12, 15) !',
      pitfallToAvoid: 'Oublier la touche √ à la fin ou additionner quand on connaît déjà l’hypoténuse !',
    },
    sections: [
      {
        title: '1. Théorème direct (Calculer une longueur)',
        explanation: [
          'Dans tout triangle rectangle, le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux côtés de l’angle droit.',
        ],
        rules: [
          {
            name: 'Rédaction type CIAM',
            description: 'Citer le triangle rectangle ➔ Citer Pythagore ➔ Poser l’égalité ➔ Calculer √.',
            example: 'EFG rectangle en E | FG² = EF² + EG² | FG² = 3² + 4² = 25 | FG = √25 = 5 cm',
          },
        ],
        commonMistakes: [
          'Écrire FG = 25 cm en oubliant de prendre la racine carrée.',
        ],
      },
      {
        title: '2. Réciproque et Contraposée (Tester un angle droit)',
        explanation: [
          'Pour savoir si un triangle dont on connaît les 3 longueurs est rectangle, on repère d’abord le plus grand côté.',
        ],
        rules: [
          {
            name: 'Calculs séparés obligatoires',
            description: 'Égalité ➔ Réciproque (rectangle) ; Différence ➔ Contraposée (non rectangle).',
            example: 'Côtés 5, 6, 8 | 8² = 64 et 5² + 6² = 61 | 64 ≠ 61 ➔ Pas rectangle',
          },
        ],
      },
    ],
    exercises: pickExercises(
      CHAP4_EXERCISES,
      [
        'exo-4e-4-1', 'exo-4e-4-3', 'exo-4e-4-4', 'exo-4e-4-5', 'exo-4e-4-6',
        'exo-4e-4-7', 'exo-4e-4-9', 'exo-4e-4-10', 'exo-4e-4-11', 'exo-4e-4-12',
        'exo-4e-4-13', 'exo-4e-4-14', 'exo-4e-4-15', 'exo-4e-4-16', 'exo-4e-4-17',
        'exo-4e-4-18', 'exo-4e-4-19', 'exo-4e-4-20',
      ],
      'theoreme-pythagore'
    ),
  },

  // ==========================================
  // CHAPITRE 17 : TRIANGLES (DROITE DES MILIEUX, AGRANDISSEMENT ET RÉDUCTION)
  // ==========================================
  {
    id: 'triangles-agrandissement-reduction',
    domainId: 'geometrie',
    order: 17,
    title: 'Triangles : droite des milieux, agrandissement et réduction',
    badge: 'Chapitre 17 · 4ème',
    shortDesc: 'Théorèmes des milieux (// et ÷ 2), réciproque, coefficient k, effet sur les aires (k²) et volumes (k³).',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-500 via-sky-500 to-blue-500',
    readingTimeMinutes: 14,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'milieux-agrandissement',
    bossMeta: { name: 'PONT DE L’OGOOUÉ', emoji: '🌉', xp: 180 },
    kokoSpeech:
      'La droite passant par deux milieux est parallèle au 3ème côté et le segment vaut sa MOITIÉ ! Et en agrandissement de rapport k : longueurs × k, mais aires × k² et volumes × k³ !',
    keyFormulas: [
      'Direct : I milieu [AB], J milieu [AC] ➔ (IJ) // (BC) et IJ = BC ÷ 2',
      'Réciproque : passe par 1 milieu + parallèle au 2e côté ➔ coupe le 3e côté en son milieu',
      'Agrandissement / Réduction de rapport k : Longueur’ = k × Longueur',
      'Effet sur Aires et Volumes : Aire’ = k² × Aire  |  Volume’ = k³ × Volume',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Droite des Milieux & Agrandissement',
      slogan: 'Couper en deux, prouver le parallélisme et passer de k à k² et k³',
      summaryBulletPoints: [
        'Si k > 1, c’est un AGRANDISSEMENT. Si 0 < k < 1, c’est une RÉDUCTION.',
        'Un agrandissement/réduction CONSERVE tous les angles (ex: un angle droit reste de 90°) et le parallélisme !',
        'Théorème 1 (2 milieux) : démontre que deux droites sont parallèles ET calcule IJ = BC ÷ 2.',
        'Théorème 2 (1 milieu + parallèle) : démontre qu’un point est le milieu d’un segment.',
      ],
      verticalFormulas: [
        {
          name: 'Droite des milieux',
          badge: '🌉',
          steps: ['I milieu de [AB], J milieu de [AC]', '(IJ) // (BC)', 'Si BC = 14 cm ➔ IJ = 14 ÷ 2 = 7 cm'],
          resultHighlight: 'IJ = 7 cm',
          explanation: 'Le segment reliant deux milieux vaut exactement la moitié du 3ème côté.',
        },
        {
          name: 'Agrandissement : Longueurs & Aires (k²)',
          badge: '🔍',
          steps: ['Rapport k = 3', 'Longueurs × 3', 'Aires × 3² = × 9', 'Volumes × 3³ = × 27'],
          resultHighlight: 'Aires × 9 | Vol × 27',
          explanation: 'Attention à ne jamais multiplier une aire par k tout seul, mais par k² !',
        },
      ],
      kokoTip: 'Si tu doubles tous les côtés d’un carré (k = 2), son aire n’est pas doublée : elle est multipliée par 2² = 4 !',
      pitfallToAvoid: 'Multiplier une aire par k au lieu de k² lors d’un agrandissement ou d’une réduction !',
    },
    sections: [
      {
        title: '1. Les trois théorèmes de la droite des milieux',
        explanation: [
          'Dans tout triangle ABC, si I est le milieu de [AB] et J est le milieu de [AC], alors la droite (IJ) est parallèle à (BC) et le segment [IJ] mesure la moitié de [BC].',
        ],
        rules: [
          {
            name: 'Direct & Réciproque',
            description: '2 milieux ➔ // et ÷ 2.  1 milieu + // ➔ 2ème milieu.',
            example: 'BC = 18 cm ➔ IJ = 9 cm | Périmètre(IJK) = Périmètre(ABC) ÷ 2',
          },
        ],
      },
      {
        title: '2. Agrandissement et Réduction (k, k², k³)',
        explanation: [
          'Une figure réduite de rapport k (0 < k < 1) garde exactement la même forme et les mêmes angles.',
        ],
        rules: [
          {
            name: 'Échelles et Aires',
            description: 'Longueurs × k  |  Angles inchangés  |  Aires × k²  |  Volumes × k³.',
            example: 'Aire = 10 cm², agrandissement k = 3 | Nouvelle aire = 10 × 3² = 90 cm²',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(
        CHAP5_EXERCISES,
        ['exo-4e-5-1', 'exo-4e-5-2', 'exo-4e-5-3', 'exo-4e-5-6', 'exo-4e-5-7', 'exo-4e-5-13', 'exo-4e-5-16', 'exo-4e-5-18', 'exo-4e-5-20'],
        'triangles-agrandissement-reduction'
      ),
      mkNum(
        'exo-4e-agrand-10',
        'triangles-agrandissement-reduction',
        'Ex 10 : Effet d’un agrandissement sur l’aire (k²)',
        3,
        'Un triangle a une aire de 12 cm². On réalise un agrandissement de rapport k = 2,5.\nQuelle est l’aire du grand triangle obtenu (en cm²) ?',
        '75',
        'Multiplie l’aire par k² (c’est-à-dire 2,5² = 6,25), et surtout pas par 2,5 !',
        '12 × 2,5² = 12 × 6,25 = 75 cm².',
        [
          { title: 'Calculer k²', explanation: '2,5 × 2,5 = 6,25.', math: 'k² = 2,5² = 6,25' },
          { title: 'Multiplier l’aire initiale', explanation: '12 × 6,25 = 75 cm².', math: 'Aire’ = 12 × 6,25 = 75 cm²', subResult: '75 cm²' },
        ],
        'cm²',
        '🔍'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 18 : TRANSLATIONS
  // ==========================================
  {
    id: 'translations',
    domainId: 'geometrie',
    order: 18,
    title: 'Translations',
    badge: 'Chapitre 18 · 4ème',
    shortDesc: 'Glissement rectiligne défini par une flèche (vecteur AB), construction au compas/quadrillage et parallélogramme.',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    readingTimeMinutes: 11,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'translations',
    bossMeta: { name: 'PILOTE DES TRANSLATIONS', emoji: '➡️', xp: 150 },
    kokoSpeech:
      'Une translation, c’est faire GLISSER une figure tout droit sans la tourner ni la retourner ! Trois choses définissent la flèche : même DIRECTION, même SENS, même LONGUEUR !',
    keyFormulas: [
      'Translation qui transforme A en B : même direction (//), même sens (de A vers B), même longueur AB',
      'Lien avec le parallélogramme : M’ est l’image de M par la translation A ➔ B si et seulement si ABM’M est un parallélogramme',
      'Conservation totale : la translation conserve les longueurs, les angles, le parallélisme, les milieux et les aires !',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Translations',
      slogan: 'Glisser sur un quadrillage ou construire un parallélogramme au compas',
      summaryBulletPoints: [
        'Pour déplacer un point sur quadrillage selon A ➔ B : compte le déplacement horizontal (droite/gauche) puis vertical (haut/bas).',
        'Sans quadrillage : si M’ est l’image de M par la translation A ➔ B, alors [AM’] et [BM] ont le MÊME MILIEU (parallélogramme ABM’M) !',
        'Attention à l’ordre des lettres du parallélogramme : A ➔ B donne M ➔ M’, donc ABM’M (on inverse les 2 dernières !).',
        'L’image d’une droite (d) est une droite (d’) PARALLÈLE à (d).',
      ],
      verticalFormulas: [
        {
          name: 'Déplacement sur quadrillage',
          badge: '🗺️',
          steps: ['A(1 ; 2) et B(5 ; 4)', 'Décalage x : +4 à droite', 'Décalage y : +2 vers le haut', 'Image de M(3 ; 1) ➔ M’(3+4 ; 1+2) = M’(7 ; 3)'],
          resultHighlight: 'M’(7 ; 3)',
          explanation: 'On applique exactement le même décalage horizontal (+4) et vertical (+2) au point M.',
        },
      ],
      kokoTip: 'Pense au téléphérique ou à une pirogue qui glisse droit sur le fleuve : elle ne tourne pas, elle subit une translation !',
      pitfallToAvoid: 'Confondre l’ordre des sommets du parallélogramme : écrire ABMM’ au lieu de ABM’M !',
    },
    sections: [
      {
        title: '1. Définition et construction de l’image d’un point',
        explanation: [
          'Dire que M’ est l’image de M par la translation qui envoie A sur B signifie que la flèche allant de M vers M’ a exactement la même direction, le même sens et la même longueur que la flèche allant de A vers B.',
        ],
        rules: [
          {
            name: 'Règle du parallélogramme',
            description: 'M’ est l’image de M (translation A ➔ B) ⟺ ABM’M est un parallélogramme.',
            example: 'Au compas : pointer en M avec rayon AB, puis en B avec rayon AM ➔ intersection = M’ !',
          },
        ],
      },
      {
        title: '2. Propriétés de conservation',
        explanation: [
          'Comme une translation déplace la figure en bloc sans la déformer, la figure image est SUPERPOSABLE à la figure de départ.',
        ],
        rules: [
          {
            name: 'Ce qui est conservé',
            description: 'Longueurs, mesures d’angles, alignement, parallélisme, perpendicularité et aires.',
            example: 'Si AB = 6 cm alors son image A’B’ = 6 cm.',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-trans-1',
        'translations',
        'Ex 1 : Les 3 caractéristiques d’une translation',
        1,
        'Une translation qui envoie A vers B est entièrement définie par :',
        [
          'Une direction, un sens et une longueur',
          'Un centre et un angle en degrés',
          'Une droite (axe) de pliage',
          'Un rapport d’agrandissement k',
        ],
        'Une direction, un sens et une longueur',
        'C’est une flèche rectiligne (un glissement).',
        'Les 3 éléments du vecteur de translation AB sont : direction (// à (AB)), sens (de A vers B) et longueur (AB).',
        [
          { title: 'Identifier la transformation', explanation: 'Centre+angle = rotation ; axe = symétrie axiale ; k = homothétie.', math: 'Translation = Direction + Sens + Longueur', subResult: 'Direction, sens, longueur' },
        ],
        '➡️'
      ),
      mkQcm(
        'exo-4e-trans-2',
        'translations',
        'Ex 2 : Parallélogramme associé',
        2,
        'M’ est l’image de M par la translation qui transforme A en B (avec A, B, M non alignés). Quel parallélogramme obtient-on ?',
        ['ABM’M', 'ABMM’', 'AMBM’', 'MABM’'],
        'ABM’M',
        'Le segment [MM’] a le même sens que [AB] : A➔B donc M➔M’ (attention au tour du quadrilatère !).',
        'En tournant autour du quadrilatère : A ➔ B ➔ M’ ➔ M ➔ A : c’est ABM’M.',
        [
          { title: 'Suivre les côtés parallèles', explanation: 'AB et MM’ sont les deux côtés opposés de même sens.', math: 'A ➔ B  et  M ➔ M’  donnent  ABM’M', subResult: 'ABM’M' },
        ],
        '▱'
      ),
      mkQcm(
        'exo-4e-trans-3',
        'translations',
        'Ex 3 : Coordonnées par translation',
        2,
        'La translation qui envoie A(1 ; 2) sur B(5 ; 0) transforme M(2 ; 6) en M’. Quelles sont les coordonnées de M’ ?',
        ['M’(6 ; 4)', 'M’(4 ; −2)', 'M’(7 ; 8)', 'M’(6 ; 8)'],
        'M’(6 ; 4)',
        'De A(1 ; 2) à B(5 ; 0) : +4 en abscisse et −2 en ordonnée.',
        'M’(2 + 4 ; 6 − 2) = M’(6 ; 4).',
        [
          { title: 'Calculer le déplacement (vecteur AB)', explanation: '5 − 1 = +4 ; 0 − 2 = −2.', math: 'Décalage : (+4 ; -2)' },
          { title: 'Appliquer à M(2 ; 6)', explanation: '2 + 4 = 6 et 6 − 2 = 4.', math: 'M’(6 ; 4)', subResult: 'M’(6 ; 4)' },
        ],
        '🗺️'
      ),
      mkNum(
        'exo-4e-trans-4',
        'translations',
        'Ex 4 : Conservation des aires',
        2,
        'Un triangle ABC a une aire de 18 cm². On construit son image A’B’C’ par une translation de 5 cm.\nQuelle est l’aire du triangle A’B’C’ (en cm²) ?',
        '18',
        'La translation ne déforme pas la figure : elle conserve les aires.',
        'L’aire reste exactement 18 cm².',
        [
          { title: 'Propriété de conservation', explanation: 'Une translation est une isométrie.', math: 'Aire(A’B’C’) = Aire(ABC) = 18 cm²', subResult: '18 cm²' },
        ],
        'cm²',
        '📐'
      ),
      mkQcm(
        'exo-4e-trans-5',
        'translations',
        'Ex 5 : Image d’une droite par translation',
        3,
        'Quelle est l’image d’une droite (d) par une translation ?',
        [
          'Une droite parallèle à (d)',
          'Une droite perpendiculaire à (d)',
          'Un cercle',
          'Un segment plus court',
        ],
        'Une droite parallèle à (d)',
        'Glisser une droite tout droit ne change pas sa pente ni sa direction.',
        'L’image d’une droite par une translation est une droite qui lui est parallèle.',
        [
          { title: 'Conservation de la direction', explanation: 'Tous les points glissent du même vecteur.', math: '(d’) // (d)', subResult: 'Droite parallèle' },
        ],
        '📏'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 19 : SYMÉTRIES AXIALE ET CENTRALE
  // ==========================================
  {
    id: 'symetries-transformations',
    domainId: 'geometrie',
    order: 19,
    title: 'Symétries axiale et centrale',
    badge: 'Chapitre 19 · 4ème',
    shortDesc: 'Pliage par rapport à une droite (médiatrice) vs demi-tour autour d’un point (milieu), axes et centres.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-violet-500 to-purple-500',
    readingTimeMinutes: 11,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'symetries',
    bossMeta: { name: 'MAÎTRE DES MIROIRS', emoji: '🪞', xp: 140 },
    kokoSpeech:
      'Distingue bien les deux ! Symétrie AXIALE = effet miroir (pliage le long d’une droite = médiatrice). Symétrie CENTRALE = demi-tour de 180° autour d’un point (= milieu) !',
    keyFormulas: [
      'Symétrie axiale d’axe (d) : (d) est la MÉDIATRICE du segment [MM’] (perpendiculaire au milieu)',
      'Symétrie centrale de centre O : O est le MILIEU du segment [MM’]',
      'Image d’une droite (d) par symétrie centrale : une droite (d’) PARALLÈLE à (d) !',
      'Conservation : les deux symétries conservent longueurs, angles, alignement et aires',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Symétries Axiale & Centrale',
      slogan: 'Maîtriser pliage (médiatrice) et demi-tour (milieu)',
      summaryBulletPoints: [
        'Symétrie axiale : deux points M et M’ symétriques par rapport à (d) ➔ (d) est perpendiculaire à [MM’] en son milieu.',
        'Symétrie centrale : deux points M et M’ symétriques par rapport à O ➔ OM = OM’ et M, O, M’ alignés (O milieu de [MM’]).',
        'Centre de symétrie : un parallélogramme, un rectangle, un losange, un carré ont un centre de symétrie (intersection des diagonales).',
        'Un triangle équilatéral a 3 axes de symétrie mais PAS de centre de symétrie !',
      ],
      verticalFormulas: [
        {
          name: 'Symétrique de A(3 ; 4) par rapport à O(0 ; 0)',
          badge: '🪞',
          steps: ['O est le milieu de [AA’]', 'On inverse les deux signes :', 'A(3 ; 4) ➔ A’(-3 ; -4)'],
          resultHighlight: 'A’(-3 ; -4)',
          explanation: 'Par rapport à l’origine, l’abscisse et l’ordonnée prennent leur opposé.',
        },
      ],
      kokoTip: 'Un triangle quelconque ou isocèle n’a JAMAIS de centre de symétrie, car un demi-tour met la pointe en bas !',
      pitfallToAvoid: 'Oublier que par symétrie centrale, l’image d’une droite est toujours PARALLÈLE à la droite d’origine !',
    },
    sections: [
      {
        title: '1. Symétrie axiale vs Symétrie centrale',
        explanation: [
          'La symétrie axiale correspond à un pliage selon une droite (l’axe). La symétrie centrale correspond à un demi-tour (180°) autour d’un point (le centre).',
        ],
        rules: [
          {
            name: 'Construction des points images',
            description: 'Axiale : médiatrice de [MM’]. Centrale : O milieu de [MM’].',
            example: 'Si O est milieu de [AB], alors A et B sont symétriques par rapport à O.',
          },
        ],
      },
      {
        title: '2. Axes et centres de symétrie des figures usuelles',
        explanation: [
          'Le carré possède 4 axes de symétrie ET 1 centre de symétrie. Le rectangle a 2 axes (les médiatrices des côtés, pas les diagonales !) et 1 centre.',
        ],
        rules: [
          {
            name: 'Attention au rectangle',
            description: 'Les diagonales d’un rectangle non carré NE SONT PAS des axes de symétrie !',
            example: 'Losange : 2 axes (ses diagonales) + 1 centre | Parallélogramme : 0 axe + 1 centre',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-sym-1',
        'symetries-transformations',
        'Ex 1 : Symétrie centrale et milieu',
        1,
        'Si M’ est le symétrique de M par rapport au point O, que représente le point O pour le segment [MM’] ?',
        ['Le milieu de [MM’]', 'Une extrémité', 'Le sommet d’un triangle rectangle', 'La bissectrice'],
        'Le milieu de [MM’]',
        'Fais un demi-tour de 180° autour de O.',
        'Par définition, O est exactement le milieu du segment [MM’].',
        [
          { title: 'Définition', explanation: 'OM = OM’ et M, O, M’ alignés.', math: 'O = milieu de [MM’]', subResult: 'Milieu' },
        ],
        '🪞'
      ),
      mkQcm(
        'exo-4e-sym-2',
        'symetries-transformations',
        'Ex 2 : Axes du rectangle vs losange',
        2,
        'Les diagonales d’un rectangle (qui n’est pas un carré) sont-elles des axes de symétrie du rectangle ?',
        ['Non, ce sont les médiatrices des côtés', 'Oui, toujours', 'Seulement une diagonale', 'Oui, elles sont perpendiculaires'],
        'Non, ce sont les médiatrices des côtés',
        'Essaie de plier une feuille A4 en suivant sa diagonale : les coins ne tombent pas l’un sur l’autre !',
        'Non ! Les 2 axes de symétrie du rectangle sont les médiatrices de ses côtés.',
        [
          { title: 'Pliage diagonal d’un rectangle', explanation: 'Les deux triangles rectangles ne se superposent pas par pliage.', math: 'Axes = Médiatrices des côtés', subResult: 'Non' },
        ],
        '▭'
      ),
      mkQcm(
        'exo-4e-sym-3',
        'symetries-transformations',
        'Ex 3 : Coordonnées du symétrique par rapport à l’origine',
        2,
        'Dans un repère, quel est le symétrique du point P(−5 ; 3) par rapport à l’origine O(0 ; 0) ?',
        ['P’(5 ; −3)', 'P’(−5 ; −3)', 'P’(5 ; 3)', 'P’(3 ; −5)'],
        'P’(5 ; −3)',
        'Prends l’opposé de l’abscisse ET l’opposé de l’ordonnée.',
        'L’opposé de −5 est +5 ; l’opposé de +3 est −3 ➔ P’(5 ; −3).',
        [
          { title: 'Prendre les opposés', explanation: 'x’ = -(-5) = 5 et y’ = -(3) = -3.', math: 'P’(5 ; -3)', subResult: 'P’(5 ; −3)' },
        ],
        '🧭'
      ),
      mkQcm(
        'exo-4e-sym-4',
        'symetries-transformations',
        'Ex 4 : Propriété du parallélogramme',
        3,
        'Combien d’axes et de centres de symétrie possède un parallélogramme quelconque ?',
        ['0 axe et 1 centre de symétrie', '2 axes et 1 centre', '4 axes et 1 centre', '2 axes et 0 centre'],
        '0 axe et 1 centre de symétrie',
        'Un parallélogramme reste identique après un demi-tour autour du croisement de ses diagonales.',
        '0 axe de symétrie, mais 1 centre de symétrie (intersection des diagonales).',
        [
          { title: 'Analyser le parallélogramme', explanation: 'Demi-tour = oui ; pliage = non.', math: '0 axe | 1 centre', subResult: '0 axe, 1 centre' },
        ],
        '▱'
      ),
      mkNum(
        'exo-4e-sym-5',
        'symetries-transformations',
        'Ex 5 : Périmètre d’une figure symétrique',
        2,
        'Un quadrilatère ABCD a un périmètre de 26 cm. On trace son symétrique A’B’C’D’ par rapport à une droite (d).\nQuel est le périmètre de A’B’C’D’ (en cm) ?',
        '26',
        'La symétrie axiale conserve les longueurs !',
        'Le périmètre est conservé : 26 cm.',
        [
          { title: 'Conservation des longueurs', explanation: 'Chaque côté image a la même longueur.', math: 'P(A’B’C’D’) = 26 cm', subResult: '26 cm' },
        ],
        'cm',
        '📏'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 20 : THÉORÈME DE THALÈS ET RÉCIPROQUE
  // ==========================================
  {
    id: 'theoreme-thales',
    domainId: 'geometrie',
    order: 20,
    title: 'Théorème de Thalès et sa réciproque',
    badge: 'Chapitre 20 · 4ème',
    shortDesc: 'Configurations triangle et papillon, égalité des 3 rapports AM/AB = AN/AC = MN/BC et parallélisme.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-red-400',
    readingTimeMinutes: 15,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'thales',
    bossMeta: { name: 'TITAN DE THALÈS', emoji: '🔺', xp: 200 },
    kokoSpeech:
      'Pour mesurer la hauteur d’un grand okoumé ou d’un bâtiment sans y grimper, utilise Thalès ! Mets toujours les côtés du PETIT triangle en haut des fractions et ceux du GRAND triangle en bas !',
    keyFormulas: [
      'Condition directe : droites sécantes en A + (MN) // (BC)',
      'Égalité des 3 rapports : AM ÷ AB = AN ÷ AC = MN ÷ BC',
      'Réciproque : points alignés DANS LE MÊME ORDRE + égalité de 2 rapports ➔ droites //',
      'Contraposée : rapports non égaux ➔ droites NON parallèles',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Théorème de Thalès',
      slogan: 'Aligner les rapports Petit/Grand sans jamais croiser les triangles',
      summaryBulletPoints: [
        'Toujours partir du sommet commun (souvent A) pour écrire les deux premiers quotients : AM/AB = AN/AC = MN/BC.',
        'Numérateurs = côtés du triangle AMN. Dénominateurs = côtés correspondants du triangle ABC.',
        'Calcul : on choisit deux quotients où 3 longueurs sont connues et on fait le PRODUIT EN CROIX.',
        'Réciproque (prouver que deux droites sont parallèles) : ne JAMAIS oublier de citer l’ORDRE des points !',
      ],
      verticalFormulas: [
        {
          name: 'Calculer une longueur avec Thalès',
          badge: '🔺',
          steps: ['(MN) // (BC), AM = 4, AB = 10, AC = 15', 'AM / AB = AN / AC', '4 / 10 = AN / 15', 'AN = (4 × 15) ÷ 10 = 6 cm'],
          resultHighlight: 'AN = 6 cm',
          explanation: 'Produit en croix sur les deux rapports connus.',
        },
        {
          name: 'Réciproque de Thalès (Prouver //)',
          badge: '🧱',
          steps: ['D’une part : AM / AB = 3 / 9 = 1/3', 'D’autre part : AN / AC = 4 / 12 = 1/3', 'Mêmes rapports + même ordre A, M, B et A, N, C', 'Donc (MN) // (BC) !'],
          resultHighlight: '(MN) // (BC)',
          explanation: 'On calcule les deux quotients séparément avant de conclure à l’égalité.',
        },
      ],
      kokoTip: 'Pour la configuration « papillon », les deux triangles sont opposés par le sommet A, mais la formule AM/AB = AN/AC = MN/BC marche EXACTEMENT pareil !',
      pitfallToAvoid: 'Inverser un rapport (mettre Petit/Grand puis Grand/Petit dans la même égalité) !',
    },
    sections: [
      {
        title: '1. Théorème direct (Calculer des longueurs)',
        explanation: [
          'Quand deux triangles sont emboîtés avec un sommet commun et deux côtés parallèles, leurs côtés correspondants sont proportionnels.',
        ],
        rules: [
          {
            name: 'Les 3 rapports égaux',
            description: 'AM/AB = AN/AC = MN/BC.',
            example: 'Si AM = 3, AB = 6, BC = 10 | 3/6 = MN/10 | MN = (3 × 10) ÷ 6 = 5 cm',
          },
        ],
      },
      {
        title: '2. Réciproque et Contraposée',
        explanation: [
          'Pour vérifier si deux barres d’une charpente sont parallèles, on compare séparément AM/AB et AN/AC (en vérifiant l’ordre des points).',
        ],
        rules: [
          {
            name: 'Vérification par les produits en croix',
            description: 'AM × AC = AN × AB ⟺ égalité des rapports.',
            example: '2/5 = 0,4 et 3/7 = 0,428... | Rapports différents ➔ Pas parallèles',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-thal-1',
        'theoreme-thales',
        'Ex 1 : Écrire les rapports de Thalès',
        1,
        'Dans le triangle ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC). Quelle égalité est exacte ?',
        [
          'AM/AB = AN/AC = MN/BC',
          'AM/MB = AN/NC = MN/BC',
          'AB/AM = AN/AC = BC/MN',
          'AM × AB = AN × AC',
        ],
        'AM/AB = AN/AC = MN/BC',
        'Mets toujours les 3 longueurs du triangle AMN au numérateur et les 3 de ABC au dénominateur.',
        'AM/AB = AN/AC = MN/BC.',
        [
          { title: 'Aligner Petit ÷ Grand', explanation: 'Mêmes triangles en haut (AMN) et en bas (ABC).', math: 'AM/AB = AN/AC = MN/BC', subResult: 'AM/AB = AN/AC = MN/BC' },
        ],
        '🔺'
      ),
      mkNum(
        'exo-4e-thal-2',
        'theoreme-thales',
        'Ex 2 : Calculer MN grâce à Thalès',
        2,
        'Soit ABC tel que (MN) // (BC) avec M ∈ [AB], N ∈ [AC].\nOn donne AM = 3 cm, AB = 9 cm et BC = 15 cm.\nCalculer la longueur MN (en cm).',
        '5',
        'Écris 3 / 9 = MN / 15 puis fais le produit en croix.',
        'MN = (3 × 15) ÷ 9 = 45 ÷ 9 = 5 cm.',
        [
          { title: 'Poser les rapports', explanation: 'AM/AB = MN/BC.', math: '3 / 9 = MN / 15' },
          { title: 'Produit en croix', explanation: 'MN = (3 × 15) ÷ 9 = 5.', math: 'MN = 5 cm', subResult: '5 cm' },
        ],
        'cm',
        '📐'
      ),
      mkNum(
        'exo-4e-thal-3',
        'theoreme-thales',
        'Ex 3 : Retrouver la grande longueur AB',
        2,
        'Avec (MN) // (BC) : AM = 4 cm, AN = 6 cm et AC = 15 cm.\nCalculer AB (en cm).',
        '10',
        '4 / AB = 6 / 15 ➔ AB = (4 × 15) ÷ 6.',
        'AB = 60 ÷ 6 = 10 cm.',
        [
          { title: 'Écrire AM/AB = AN/AC', explanation: '4/AB = 6/15.', math: '4 / AB = 6 / 15' },
          { title: 'Produit en croix', explanation: 'AB = (4 × 15) ÷ 6 = 10.', math: 'AB = 10 cm', subResult: '10 cm' },
        ],
        'cm',
        '📏'
      ),
      mkQcm(
        'exo-4e-thal-4',
        'theoreme-thales',
        'Ex 4 : Réciproque de Thalès (Les droites sont-elles // ?)',
        3,
        'Les points A, M, B et A, N, C sont alignés dans le même ordre.\nAM = 4, AB = 12, AN = 5, AC = 15.\nLes droites (MN) et (BC) sont-elles parallèles ?',
        ['Oui, car 4/12 = 5/15 = 1/3', 'Non, car 4+1 ≠ 5+3', 'Oui, car 4×5 = 12×15', 'Impossible à prouver'],
        'Oui, car 4/12 = 5/15 = 1/3',
        'Compare séparément 4/12 et 5/15.',
        '4/12 = 1/3 et 5/15 = 1/3 : les rapports sont égaux et les points sont dans le même ordre ➔ (MN) // (BC).',
        [
          { title: 'Calculer les deux rapports', explanation: '4/12 = 1/3 et 5/15 = 1/3.', math: 'AM/AB = AN/AC = 1/3' },
          { title: 'Conclure par la réciproque', explanation: 'Même ordre des points ➔ parallèles.', math: '(MN) // (BC)', subResult: 'Oui' },
        ],
        '🧱'
      ),
      mkNum(
        'exo-4e-thal-5',
        'theoreme-thales',
        'Ex 5 : Hauteur d’un okoumé grâce à son ombre',
        4,
        'Un bâton vertical de 1,5 m projette une ombre de 2 m au soleil. Au même instant, un grand okoumé projette une ombre de 24 m.\nQuelle est la hauteur de l’okoumé (en m) ?',
        '18',
        'Les rayons du soleil étant parallèles, on applique Thalès : Hauteur arbre / 1,5 = 24 / 2.',
        '24 ÷ 2 = 12, donc Hauteur = 1,5 × 12 = 18 m.',
        [
          { title: 'Écrire la proportionnalité de Thalès', explanation: 'H / 1,5 = 24 / 2.', math: 'H / 1,5 = 12' },
          { title: 'Calculer H', explanation: 'H = 1,5 × 12 = 18 m.', math: 'H = 18 m', subResult: '18 m' },
        ],
        'm',
        '🌳'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 21 : TRIGONOMÉTRIE (COS, SIN, TAN)
  // ==========================================
  {
    id: 'trigonometrie-triangle-rectangle',
    domainId: 'geometrie',
    order: 21,
    title: 'Trigonométrie dans le triangle rectangle (cos, sin, tan)',
    badge: 'Chapitre 21 · 4ème',
    shortDesc: 'Moyen mnémotechnique SOH-CAH-TOA (cosinus, sinus, tangente) pour calculer longueurs et angles.',
    themeColor: '#059669',
    themeGradient: 'from-emerald-500 via-teal-500 to-sky-500',
    readingTimeMinutes: 15,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'trigonometrie',
    bossMeta: { name: 'MAÎTRE SOHCAHTOA', emoji: '🧭', xp: 200 },
    kokoSpeech:
      'Retiens le mot magique SOH-CAH-TOA ! S = Opposé/Hypoténuse, C = Adjacent/Hypoténuse, T = Opposé/Adjacent ! Et vérifie toujours ta calculatrice en mode DEGRÉS (DEG) !',
    keyFormulas: [
      'SOH : sin(angle) = Côté Opposé ÷ Hypoténuse',
      'CAH : cos(angle) = Côté Adjacent ÷ Hypoténuse',
      'TOA : tan(angle) = Côté Opposé ÷ Côté Adjacent',
      'Identités : cos²(α) + sin²(α) = 1   |   tan(α) = sin(α) ÷ cos(α)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Trigonométrie (SOH-CAH-TOA)',
      slogan: 'Choisir entre sin, cos et tan selon les côtés connus ou cherchés',
      summaryBulletPoints: [
        'Étape 1 : Repérer l’angle droit 90° ➔ le côté en face est l’HYPOTÉNUSE.',
        'Étape 2 : Repérer l’angle aigu étudié ➔ en face c’est l’OPPOSÉ, à côté (autre que hyp) c’est l’ADJACENT.',
        'Étape 3 : Coche les 2 côtés impliqués (un connu, un cherché) pour choisir SOH, CAH ou TOA !',
        'sin et cos d’un angle aigu sont toujours compris entre 0 et 1 (mais tan peut dépasser 1 !).',
      ],
      verticalFormulas: [
        {
          name: 'CAH : Côté adjacent (cos)',
          badge: '📐',
          steps: ['cos(60°) = AB / 16', 'AB = 16 × cos(60°)', 'AB = 16 × 0,5 = 8 cm'],
          resultHighlight: 'AB = 8 cm',
          explanation: 'On connaît l’hypoténuse et l’angle ➔ CAH.',
        },
        {
          name: 'SOH : Côté opposé (sin)',
          badge: '📏',
          steps: ['sin(30°) = AC / 14', 'AC = 14 × sin(30°)', 'AC = 14 × 0,5 = 7 cm'],
          resultHighlight: 'AC = 7 cm',
          explanation: 'sin(30°) = 0,5 exactement !',
        },
        {
          name: 'TOA : Tangente (angle)',
          badge: '🔭',
          steps: ['tan(B̂) = Opposé / Adjacent', 'tan(B̂) = 5 / 5 = 1', 'B̂ = arctan(1) = 45°'],
          resultHighlight: 'B̂ = 45°',
          explanation: 'Si les deux côtés de l’angle droit sont égaux, tan = 1 donc l’angle vaut 45°.',
        },
      ],
      kokoTip: 'Astuce mémo : « Casse-toi » = CAH-SOH-TOA ! Et retiens deux valeurs exactes : cos(60°) = 0,5 et sin(30°) = 0,5 !',
      pitfallToAvoid: 'Laisser sa calculatrice en RADIANS au lieu de DEGRÉS, ou confondre côté opposé et côté adjacent !',
    },
    sections: [
      {
        title: '1. Identifier Hypoténuse, Opposé et Adjacent',
        explanation: [
          'La trigonométrie ne s’applique QUE dans un triangle rectangle.',
          'Alors que l’hypoténuse est fixe (en face de 90°), l’opposé et l’adjacent dépendent de l’angle aigu choisi !',
        ],
        rules: [
          {
            name: 'SOH - CAH - TOA',
            description: 'sin = Opp/Hyp  |  cos = Adj/Hyp  |  tan = Opp/Adj.',
            example: 'Triangle ABC rectangle en A, angle B̂ : Opp = AC, Adj = AB, Hyp = BC',
          },
        ],
      },
      {
        title: '2. Calculer une longueur ou retrouver un angle (Arccos, Arcsin, Arctan)',
        explanation: [
          'Pour retrouver un angle à partir de son cosinus, sinus ou tangente, on appuie sur la touche 2nd / Seconde + cos, sin ou tan.',
        ],
        rules: [
          {
            name: 'Produit en croix trigonométrique',
            description: 'cos(α) / 1 = Adj / Hyp ➔ Adj = Hyp × cos(α)  et  Hyp = Adj ÷ cos(α).',
            example: 'sin(30°) = 0,5 | Si Opposé = 6 cm ➔ Hypoténuse = 6 ÷ 0,5 = 12 cm',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(
        CHAP5_EXERCISES,
        ['exo-4e-5-4', 'exo-4e-5-5', 'exo-4e-5-8', 'exo-4e-5-9', 'exo-4e-5-10', 'exo-4e-5-14', 'exo-4e-5-15', 'exo-4e-5-17', 'exo-4e-5-19'],
        'trigonometrie-triangle-rectangle'
      ),
      mkNum(
        'exo-4e-trigo-10',
        'trigonometrie-triangle-rectangle',
        'Ex 10 : Calculer avec le Sinus (sin 30° = 0,5)',
        2,
        'Un triangle ABC est rectangle en A avec BC = 18 cm (hypoténuse) et l’angle B̂ = 30°.\nSachant que sin(30°) = 0,5, calculer le côté opposé AC (en cm).',
        '9',
        'SOH : sin(B̂) = AC ÷ BC donc AC = BC × sin(30°).',
        'AC = 18 × 0,5 = 9 cm.',
        [
          { title: 'Écrire la formule SOH', explanation: 'sin(B̂) = Opposé / Hypoténuse = AC / BC.', math: 'sin(30°) = AC / 18' },
          { title: 'Calculer AC', explanation: 'AC = 18 × 0,5 = 9.', math: 'AC = 9 cm', subResult: '9 cm' },
        ],
        'cm',
        '📐'
      ),
      mkNum(
        'exo-4e-trigo-11',
        'trigonometrie-triangle-rectangle',
        'Ex 11 : Tangente et triangle rectangle isocèle',
        3,
        'Dans un triangle rectangle en A, le côté opposé à l’angle B̂ mesure 7 cm et son côté adjacent mesure aussi 7 cm.\nQue vaut tan(B̂) ?',
        '1',
        'TOA : tan(B̂) = Opposé ÷ Adjacent.',
        'tan(B̂) = 7 ÷ 7 = 1 (ce qui correspond à B̂ = 45°).',
        [
          { title: 'Appliquer TOA', explanation: 'tan(B̂) = Opposé ÷ Adjacent.', math: 'tan(B̂) = 7 ÷ 7 = 1', subResult: '1' },
        ],
        undefined,
        '🔭'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 22 : HOMOTHÉTIE
  // ==========================================
  {
    id: 'homothetie',
    domainId: 'geometrie',
    order: 22,
    title: 'Homothétie : transformation, centre et rapport',
    badge: 'Chapitre 22 · 4ème',
    shortDesc: 'Centre O et rapport k (positif ou négatif), agrandissement/réduction, alignement O-M-M’ et aires × k².',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
    readingTimeMinutes: 12,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'homothetie',
    bossMeta: { name: 'PROJECTEUR OMEGA', emoji: '📽️', xp: 170 },
    kokoSpeech:
      'L’homothétie est comme un projecteur de cinéma placé au centre O ! Si le rapport k est positif, l’image est du MÊME CÔTÉ de O ; si k est négatif, l’image passe DE L’AUTRE CÔTÉ et se retourne !',
    keyFormulas: [
      'Définition (centre O, rapport k) : O, M, M’ sont alignés et OM’ = |k| × OM',
      'Si k > 0 : M’ est sur la demi-droite [OM)  |  Si k < 0 : M’ est de l’autre côté de O',
      'Si |k| > 1 : agrandissement  |  Si 0 < |k| < 1 : réduction  |  Si k = -1 : symétrie centrale !',
      'Longueurs multipliées par |k|  |  Aires multipliées par k²',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Homothétie (Centre O, Rapport k)',
      slogan: 'Savoir zoomer ou retourner une figure à partir d’un centre O',
      summaryBulletPoints: [
        'Les points O, M et son image M’ sont TOUJOURS alignés sur la même droite.',
        'k > 0 : la figure reste dans le même sens. k < 0 : la figure fait un demi-tour de l’autre côté de O.',
        'Cas spécial : une homothétie de rapport k = -1 est exactement une symétrie centrale de centre O !',
        'Théorème fondamental : l’image d’une droite ne passant pas par O est une droite PARALLÈLE !',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de distance OM’',
          badge: '📽️',
          steps: ['Centre O, rapport k = -2, OM = 3,5 cm', 'OM’ = |-2| × 3,5 = 7 cm', 'O est entre M et M’ car k < 0'],
          resultHighlight: 'OM’ = 7 cm (côté opposé)',
          explanation: 'La distance à O est multipliée par 2 et le signe (-) place M’ de l’autre côté.',
        },
        {
          name: 'Effet sur l’aire avec k négatif',
          badge: '⬛',
          steps: ['Aire = 10 cm², rapport k = -3', 'Aire’ = (-3)² × 10 = 9 × 10', 'Aire’ = 90 cm²'],
          resultHighlight: '90 cm² (positif !)',
          explanation: 'Même si k est négatif, (-3)² = +9 donc l’aire est multipliée par 9.',
        },
      ],
      kokoTip: 'Pour reconnaître un k négatif sur un dessin : vérifie si les deux figures sont « tête-bêche » avec le centre O situé ENTRE les deux !',
      pitfallToAvoid: 'Oublier la valeur absolue pour une longueur (une longueur ne peut JAMAIS être négative) !',
    },
    sections: [
      {
        title: '1. Définition et rôle du signe de k',
        explanation: [
          'Une homothétie est définie par un point fixe (le centre O) et un nombre non nul (le rapport k).',
          'Si k = 2, tous les points s’éloignent de O deux fois plus loin du même côté. Si k = 0,5, ils se rapprochent à mi-chemin.',
        ],
        rules: [
          {
            name: 'Rapport positif vs négatif',
            description: 'k > 0 ➔ même côté de O. k < 0 ➔ de l’autre côté de O.',
            example: 'OM = 4 cm, k = -0,5 | OM’ = 0,5 × 4 = 2 cm (de l’autre côté de O)',
          },
        ],
      },
      {
        title: '2. Agrandissement, réduction et conservation',
        explanation: [
          'Une homothétie transforme un segment en un segment parallèle de longueur |k| fois plus grande (ou plus petite), et conserve tous les angles.',
        ],
        rules: [
          {
            name: 'Conservation des angles et effet k² sur l’aire',
            description: 'Angle’ = Angle ; Longueur’ = |k| × Longueur ; Aire’ = k² × Aire.',
            example: 'Triangle d’aire 8 cm², rapport k = 2,5 | Aire’ = 8 × 2,5² = 50 cm²',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-homo-1',
        'homothetie',
        'Ex 1 : Agrandissement ou réduction ?',
        1,
        'Une homothétie a pour rapport k = −0,4. S’agit-il d’un agrandissement ou d’une réduction ?',
        ['Une réduction avec retournement', 'Un agrandissement', 'Une translation', 'Une réduction du même côté'],
        'Une réduction avec retournement',
        'Regarde |k| = 0,4 (< 1) pour la taille, et le signe (-) pour le côté !',
        'Comme 0 < |-0,4| < 1 c’est une réduction, et k < 0 retourne la figure de l’autre côté de O.',
        [
          { title: 'Comparer |k| à 1', explanation: '|-0,4| = 0,4 < 1 ➔ réduction.', math: '|k| < 1 ➔ Réduction' },
          { title: 'Observer le signe de k', explanation: 'k < 0 ➔ de l’autre côté de O.', math: 'k < 0 ➔ Retournement', subResult: 'Réduction + retournement' },
        ],
        '📽️'
      ),
      mkNum(
        'exo-4e-homo-2',
        'homothetie',
        'Ex 2 : Distance au centre O',
        2,
        'Le point M’ est l’image de M par l’homothétie de centre O et de rapport k = 3.\nSi OM = 4,5 cm, combien mesure OM’ (en cm) ?',
        '13.5',
        'OM’ = |k| × OM.',
        'OM’ = 3 × 4,5 = 13,5 cm.',
        [
          { title: 'Multiplier par |k|', explanation: '3 × 4,5 = 13,5.', math: 'OM’ = 3 × 4,5 = 13,5 cm', subResult: '13,5 cm' },
        ],
        'cm',
        '📏'
      ),
      mkQcm(
        'exo-4e-homo-3',
        'homothetie',
        'Ex 3 : Cas particulier k = −1',
        2,
        'À quelle transformation connue correspond une homothétie de centre O et de rapport k = −1 ?',
        [
          'Une symétrie centrale de centre O',
          'Une translation',
          'Une symétrie axiale',
          'L’identité (rien ne bouge)',
        ],
        'Une symétrie centrale de centre O',
        'Si k = -1, OM’ = OM et O est entre M et M’.',
        'O est exactement le milieu de [MM’] : c’est la symétrie centrale de centre O !',
        [
          { title: 'Vérifier OM’ et position', explanation: 'OM’ = 1 × OM = OM de l’autre côté de O.', math: 'O milieu de [MM’] ➔ Symétrie centrale', subResult: 'Symétrie centrale' },
        ],
        '🪞'
      ),
      mkNum(
        'exo-4e-homo-4',
        'homothetie',
        'Ex 4 : Aire de l’image par k = −2',
        3,
        'Un carré a une aire de 15 cm². On lui applique une homothétie de rapport k = −2.\nQuelle est l’aire du carré image (en cm²) ?',
        '60',
        'Une aire est multipliée par k², et (−2)² = +4.',
        '15 × (−2)² = 15 × 4 = 60 cm².',
        [
          { title: 'Calculer k²', explanation: '(-2)² = 4.', math: 'k² = 4' },
          { title: 'Multiplier l’aire', explanation: '15 × 4 = 60.', math: 'Aire’ = 15 × 4 = 60 cm²', subResult: '60 cm²' },
        ],
        'cm²',
        '⬛'
      ),
      mkNum(
        'exo-4e-homo-5',
        'homothetie',
        'Ex 5 : Retrouver le rapport positif k',
        3,
        'Un segment [AB] de 6 cm devient [A’B’] de 21 cm par une homothétie de rapport positif k.\nQue vaut k ?',
        '3.5',
        'k = A’B’ ÷ AB.',
        'k = 21 ÷ 6 = 3,5.',
        [
          { title: 'Diviser image par origine', explanation: '21 ÷ 6 = 3,5.', math: 'k = 21 ÷ 6 = 3,5', subResult: '3,5' },
        ],
        undefined,
        '🎯'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 23 : ROTATION
  // ==========================================
  {
    id: 'rotation',
    domainId: 'geometrie',
    order: 23,
    title: 'Rotation : construction et propriétés',
    badge: 'Chapitre 23 · 4ème',
    shortDesc: 'Centre O, angle en degrés et sens (horaire / antihoraire), construction au compas/rapporteur et rosaces.',
    themeColor: '#e11d48',
    themeGradient: 'from-rose-500 via-red-500 to-amber-500',
    readingTimeMinutes: 11,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'rotation',
    bossMeta: { name: 'MAÎTRE DES ROSACES', emoji: '🎡', xp: 150 },
    kokoSpeech:
      'Pour définir une rotation, il faut TROIS infos : le CENTRE (point fixe), l’ANGLE (ex: 90°) et le SENS ! Sens horaire = aiguilles d’une montre ; sens antihoraire (direct) = sens inverse !',
    keyFormulas: [
      'M’ image de M par rotation (centre O, angle α) ⟺ OM = OM’ et angle MOM’ = α',
      'Sens direct (trigonométrique) = sens CONTRAIRE des aiguilles d’une montre',
      'Sens indirect (horaire) = sens des aiguilles d’une montre',
      'Rotation de 180° = symétrie centrale de centre O (indépendant du sens !)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : La Rotation',
      slogan: 'Faire pivoter autour d’un point fixe O sans déformer la figure',
      summaryBulletPoints: [
        'Toujours repérer : 1) Centre O ; 2) Angle (ex: 60°, 90°) ; 3) Sens (horaire ou antihoraire).',
        'Le point M et son image M’ sont sur le MÊME CERCLE de centre O (car OM = OM’).',
        'Une rotation conserve les longueurs, les angles, les milieux et les aires !',
        'Pour une rosace à n pétales réguliers : l’angle entre deux pétales vaut 360° ÷ n (ex: 6 pétales ➔ 60°).',
      ],
      verticalFormulas: [
        {
          name: 'Angle d’un motif tournant régulier',
          badge: '🎡',
          steps: ['Tour complet = 360°', 'Si polygone à 8 sommets (octogone) :', 'Angle = 360° ÷ 8 = 45°'],
          resultHighlight: '45° par motif',
          explanation: 'On divise 360° par le nombre de répétitions identiques.',
        },
      ],
      kokoTip: 'Attention : une rotation ne garde PAS toujours les droites parallèles ! Ex : tourner une droite horizontale de 90° la rend verticale !',
      pitfallToAvoid: 'Tourner dans le mauvais sens ! Sens antihoraire = vers la gauche en haut de l’horloge.',
    },
    sections: [
      {
        title: '1. Définition et construction au compas + rapporteur',
        explanation: [
          'Faire tourner une figure autour du centre O d’un angle α dans un sens donné garde toutes les distances au point O identiques.',
        ],
        rules: [
          {
            name: 'Méthode de construction d’un point M’',
            description: '1) Tracer la demi-droite [OM) ; 2) Mesurer l’angle α au rapporteur dans le bon sens ; 3) Reporter la longueur OM au compas.',
            example: 'Triangle équilatéral ABC : C est l’image de B par rotation de centre A, angle 60° !',
          },
        ],
      },
      {
        title: '2. Angles remarquables et figures régulières',
        explanation: [
          'Un quart de tour correspond à 90° ; un demi-tour correspond à 180° (symétrie centrale).',
        ],
        rules: [
          {
            name: 'Conservation totale (isométrie)',
            description: 'Même longueur, même mesure d’angle, même aire.',
            example: 'Carré ABCD de centre O : rotation de 90° envoie A sur B, B sur C, C sur D, D sur A.',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-rot-1',
        'rotation',
        'Ex 1 : Les 3 éléments d’une rotation',
        1,
        'Pour définir précisément une rotation, il faut connaître :',
        [
          'Un centre, un angle et un sens',
          'Une droite et une longueur',
          'Un centre et un rapport k',
          'Deux points A et B seulement',
        ],
        'Un centre, un angle et un sens',
        'Il faut savoir autour de quoi on tourne, de combien de degrés et de quel côté !',
        'Centre + Angle + Sens (horaire ou antihoraire).',
        [
          { title: 'Vérifier les 3 paramètres', explanation: 'Point fixe (centre), mesure (angle), orientation (sens).', math: 'Centre + Angle + Sens', subResult: 'Centre, angle, sens' },
        ],
        '🎡'
      ),
      mkQcm(
        'exo-4e-rot-2',
        'rotation',
        'Ex 2 : Distance au centre de rotation',
        2,
        'Le point B’ est l’image de B par une rotation de centre O et d’angle 70°. Si OB = 6,4 cm, combien mesure OB’ ?',
        ['6,4 cm', '70 cm', '12,8 cm', '3,2 cm'],
        '6,4 cm',
        'B et B’ se trouvent sur le même cercle de centre O !',
        'La rotation conserve la distance au centre : OB’ = OB = 6,4 cm.',
        [
          { title: 'Propriété du cercle de rotation', explanation: 'OB’ = OB.', math: 'OB’ = 6,4 cm', subResult: '6,4 cm' },
        ],
        '⭕'
      ),
      mkNum(
        'exo-4e-rot-3',
        'rotation',
        'Ex 3 : Angle entre les pales d’un ventilateur régulier',
        2,
        'Un ventilateur régulier possède 5 pales espacées régulièrement autour de son axe.\nQuel est l’angle minimum de rotation (en degrés) qui amène une pale sur la suivante ?',
        '72',
        'Un tour complet vaut 360°.',
        '360° ÷ 5 = 72°.',
        [
          { title: 'Diviser le tour complet 360°', explanation: '360 ÷ 5 = 72°.', math: '360° ÷ 5 = 72°', subResult: '72°' },
        ],
        '°',
        '💨'
      ),
      mkQcm(
        'exo-4e-rot-4',
        'rotation',
        'Ex 4 : Demi-tour = ?',
        2,
        'À quelle autre transformation équivaut exactement une rotation de centre O et d’angle 180° ?',
        ['Une symétrie centrale de centre O', 'Une translation', 'Une symétrie axiale', 'Un agrandissement × 2'],
        'Une symétrie centrale de centre O',
        '180° = un demi-tour !',
        'Un demi-tour autour de O est la symétrie centrale de centre O.',
        [
          { title: 'Angle plat 180°', explanation: 'M, O, M’ alignés avec OM = OM’.', math: 'Rotation 180° = Symétrie centrale', subResult: 'Symétrie centrale' },
        ],
        '🔄'
      ),
      mkQcm(
        'exo-4e-rot-5',
        'rotation',
        'Ex 5 : Rotation dans un triangle équilatéral',
        3,
        'Soit ABC un triangle équilatéral direct (A, B, C dans le sens antihoraire).\nPar quelle rotation de centre A le point B a-t-il pour image C ?',
        [
          'Angle 60° sens antihoraire',
          'Angle 90° sens horaire',
          'Angle 120° sens antihoraire',
          'Angle 60° sens horaire',
        ],
        'Angle 60° sens antihoraire',
        'Tous les angles d’un triangle équilatéral mesurent 60° et AB = AC.',
        'AB = AC et l’angle BAC = 60° dans le sens antihoraire.',
        [
          { title: 'Longueurs et angle du triangle équilatéral', explanation: 'AB = AC et angle = 60°.', math: 'Centre A, 60°, sens antihoraire', subResult: '60° antihoraire' },
        ],
        '🔺'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 24 : DROITES REMARQUABLES DU TRIANGLE
  // ==========================================
  {
    id: 'droites-remarquables-triangle',
    domainId: 'geometrie',
    order: 24,
    title: 'Droites remarquables du triangle (médiatrice, bissectrice, médiane, hauteur)',
    badge: 'Chapitre 24 · 4ème',
    shortDesc: 'Définitions et points de concours : centre du cercle circonscrit, cercle inscrit, centre de gravité et orthocentre.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    readingTimeMinutes: 13,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'droites-remarquables',
    bossMeta: { name: 'GARDIEN DES CENTRES', emoji: '⌖', xp: 170 },
    kokoSpeech:
      'Ne confonds plus jamais les 4 droites ! Médiatrice = milieu + 90° (cercle circonscrit). Médiane = sommet + milieu (centre de gravité). Hauteur = sommet + 90° (orthocentre). Bissectrice = coupe l’angle en 2 (cercle inscrit) !',
    keyFormulas: [
      'Médiatrices ➔ concourantes au centre du CERCLE CIRCONSCRIT (passe par les 3 sommets)',
      'Bissectrices ➔ concourantes au centre du CERCLE INSCRIT (tangent aux 3 côtés)',
      'Médianes ➔ concourantes au CENTRE DE GRAVITÉ G (situé aux 2/3 depuis le sommet)',
      'Hauteurs ➔ concourantes à l’ORTHOCENTRE H',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Les 4 Droites Remarquables',
      slogan: 'Savoir tracer chaque droite et nommer son point de concours',
      summaryBulletPoints: [
        'MÉDIATRICE d’un côté : perpendiculaire à ce côté en son milieu (tout point est à égale distance des extrémités).',
        'MÉDIANE : relie un sommet au milieu du côté opposé (partage le triangle en 2 triangles de même aire !).',
        'HAUTEUR : passe par un sommet et est perpendiculaire au côté opposé (sert à calculer l’aire : Base × Hauteur ÷ 2).',
        'BISSECTRICE : demi-droite qui partage un angle en deux angles égaux.',
      ],
      verticalFormulas: [
        {
          name: 'Position du Centre de Gravité G',
          badge: '⚖️',
          steps: ['[AA’] est la médiane issue de A', 'Si AA’ = 9 cm :', 'AG = (2/3) × 9 = 6 cm', 'GA’ = (1/3) × 9 = 3 cm'],
          resultHighlight: 'AG = 6 cm | GA’ = 3 cm',
          explanation: 'Le centre de gravité G se trouve toujours aux deux tiers de la médiane à partir du sommet.',
        },
      ],
      kokoTip: 'Moyen mémo : « MEdiane = Milieu + SommEt » ; « HAUteur = sommet + angle drOIt » ; « BIssEctrice = coupe l’angle en DEUX » !',
      pitfallToAvoid: 'Confondre médiane et médiatrice ! La médiatrice ne passe pas forcément par le sommet opposé.',
    },
    sections: [
      {
        title: '1. Tableau comparatif des 4 droites remarquables',
        explanation: [
          'Dans tout triangle, chaque famille de 3 droites remarquables est CONCOURANTE en un point unique.',
          'Dans un triangle isocèle (et encore plus équilatéral), certaines droites sont confondues !',
        ],
        rules: [
          {
            name: 'Les 4 points de concours',
            description: 'Médiatrices ➔ Cercle circonscrit ; Bissectrices ➔ Cercle inscrit ; Médianes ➔ Centre de gravité ; Hauteurs ➔ Orthocentre.',
            example: 'Cercle circonscrit : OA = OB = OC (équidistant des 3 sommets)',
          },
        ],
      },
      {
        title: '2. Propriété métrique de la médiane et de la médiatrice',
        explanation: [
          'Tout point de la médiatrice d’un segment [AB] est équidistant de A et de B.',
        ],
        rules: [
          {
            name: 'Médiane relative à l’hypoténuse (Triangle rectangle)',
            description: 'Dans un triangle rectangle en A, la médiane issue de A vaut exactement la moitié de l’hypoténuse BC.',
            example: 'ABC rectangle en A, BC = 12 cm, I milieu de [BC] ➔ IA = 12 ÷ 2 = 6 cm',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(CHAP5_EXERCISES, ['exo-4e-5-12'], 'droites-remarquables-triangle'),
      mkQcm(
        'exo-4e-droit-2',
        'droites-remarquables-triangle',
        'Ex 2 : Quelle droite passe par le milieu et est perpendiculaire ?',
        1,
        'Comment appelle-t-on la droite perpendiculaire à un côté passant par son milieu ?',
        ['La médiatrice', 'La médiane', 'La hauteur', 'La bissectrice'],
        'La médiatrice',
        'Elle ne passe pas forcément par le sommet opposé !',
        'C’est la médiatrice du côté.',
        [
          { title: 'Vérifier les 2 conditions', explanation: 'Milieu + Angle droit (sans obligation de sommet).', math: 'Milieu + 90° ➔ Médiatrice', subResult: 'Médiatrice' },
        ],
        '📐'
      ),
      mkQcm(
        'exo-4e-droit-3',
        'droites-remarquables-triangle',
        'Ex 3 : Point d’intersection des hauteurs',
        2,
        'Comment s’appelle le point de concours des trois hauteurs d’un triangle ?',
        ['L’orthocentre', 'Le centre de gravité', 'Le centre du cercle circonscrit', 'Le centre du cercle inscrit'],
        'L’orthocentre',
        '« Ortho » signifie droit (angle de 90°).',
        'Les trois hauteurs sont concourantes en un point appelé l’orthocentre.',
        [
          { title: 'Associer droite et centre', explanation: 'Hauteurs (perpendiculaires / ortho) ➔ Orthocentre.', math: 'Hauteurs ➔ Orthocentre', subResult: 'Orthocentre' },
        ],
        '⌖'
      ),
      mkNum(
        'exo-4e-droit-4',
        'droites-remarquables-triangle',
        'Ex 4 : Position du centre de gravité G (2/3)',
        3,
        'Dans un triangle ABC, la médiane [AA’] mesure 15 cm et G est le centre de gravité.\nCombien mesure le segment [AG] (en cm) ?',
        '10',
        'AG = (2/3) × AA’.',
        'AG = (2 × 15) ÷ 3 = 10 cm.',
        [
          { title: 'Appliquer la règle des 2/3', explanation: 'G est aux 2/3 de la médiane en partant du sommet A.', math: 'AG = (2/3) × 15' },
          { title: 'Calculer', explanation: '30 ÷ 3 = 10 cm.', math: 'AG = 10 cm', subResult: '10 cm' },
        ],
        'cm',
        '⚖️'
      ),
      mkQcm(
        'exo-4e-droit-5',
        'droites-remarquables-triangle',
        'Ex 5 : Centre du cercle inscrit',
        3,
        'Pour placer un puits à égale distance des TROIS côtés (clôtures) d’un jardin triangulaire, quelles droites faut-il tracer ?',
        ['Les bissectrices des angles', 'Les médianes', 'Les hauteurs', 'Les médiatrices'],
        'Les bissectrices des angles',
        'Le cercle inscrit touche (est tangent à) chacun des 3 côtés.',
        'Le centre du cercle inscrit (intersection des bissectrices) est équidistant des 3 côtés !',
        [
          { title: 'Distance aux côtés vs sommets', explanation: 'Équidistant des 3 sommets = médiatrices ; équidistant des 3 côtés = bissectrices.', math: 'Bissectrices ➔ Cercle inscrit', subResult: 'Bissectrices' },
        ],
        '⭕'
      ),
    ],
  },
];
