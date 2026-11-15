import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_3EME_ESPACE: Chapter[] = [
  {
    id: 'math3-reperage-droites',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'mesures',
    order: 12,
    title: 'Géométrie Analytique : Coordonnées de Vecteurs, Distance & Équation de Droite',
    badge: 'Maths 3ème · Ch. 12',
    shortDesc: 'Coordonnées de AB⃗(xB−xA ; yB−yA), critère de colinéarité x·y’ − y·x’ = 0, orthogonalité, milieu, distance AB et droite y = ax + b.',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-500 via-sky-500 to-blue-600',
    readingTimeMinutes: 16,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'reperage-plan',
    bossMeta: { name: 'CARTOGRAPHE BEPC', emoji: '📍', xp: 180 },
    kokoSpeech:
      'En 3ème BEPC, la géométrie analytique est une mine d’or de points faciles ! Retiens surtout : 1) AB⃗ = (x_B − x_A ; y_B − y_A) (Arrivée MOINS Départ !) ; 2) Deux vecteurs u⃗(x;y) et v⃗(x’;y’) sont colinéaires ssi x·y’ − y·x’ = 0 ; 3) Perpendiculaires ssi x·x’ + y·y’ = 0 !',
    realWorldHook: {
      title: 'Localiser deux balises GPS dans le parc national de Pongara',
      scenario:
        'Sur la carte orthonormée du parc de Pongara, la balise A est en (1 ; 2) et la balise B en (5 ; 5). On veut connaître le vecteur déplacement AB⃗, la distance exacte AB, le point relais à mi-chemin I et l’équation de la piste droite (AB).',
      question:
        'Comment vérifier par le calcul si trois balises sont alignées ou si deux pistes sont perpendiculaires ?',
    },
    unitsTable: [
      { symbol: 'AB⃗', quantity: 'Coordonnées du vecteur AB⃗', unit: '(x_B − x_A ; y_B − y_A)', instrument: 'Toujours Fin − Début !' },
      { symbol: 'AB', quantity: 'Distance en repère orthonormé', unit: '√[(x_B−x_A)² + (y_B−y_A)²]', instrument: 'Pythagore analytique' },
      { symbol: 'Colinéaires', quantity: 'Droites // ou alignement', unit: 'x·y’ − y·x’ = 0', instrument: 'Produit en croix nul' },
      { symbol: 'Orthogonaux', quantity: 'Droites perpendiculaires', unit: 'x·x’ + y·y’ = 0', instrument: 'Ou a × a’ = −1' },
    ],
    experimentOrActivity: {
      title: 'Vérifier qu’un triangle est rectangle dans un repère',
      materials: ['3 points A(1;1), B(4;1), C(1;5)'],
      observation:
        'AB⃗(3 ; 0) et AC⃗(0 ; 4). On a 3×0 + 0×4 = 0 (vecteurs orthogonaux) ET AB² + AC² = 9 + 16 = 25 = BC² !',
      conclusion:
        'L’orthogonalité des vecteurs (x·x’ + y·y’ = 0) ou la réciproque de Pythagore via les distances prouvent l’angle droit.',
    },
    revisionChecklist: [
      'Je calcule AB⃗ en faisant (x_B − x_A ; y_B − y_A) sans inverser A et B.',
      'Je maîtrise x·y’ − y·x’ = 0 pour prouver parallélisme ou alignement, et x·x’ + y·y’ = 0 pour prouver l’angle droit.',
      'Je sais trouver l’équation réduite y = ax + b d’une droite passant par deux points A et B.',
    ],
    keyFormulas: [
      'AB⃗(x_B − x_A ; y_B − y_A)  |  Milieu I((x_A+x_B)/2 ; (y_A+y_B)/2)',
      'Distance : AB = √[(x_B − x_A)² + (y_B − y_A)²]',
      'Colinéaires : x·y’ − y·x’ = 0  |  Orthogonaux : x·x’ + y·y’ = 0 (ou pentes a·a’ = −1)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Repère & Vecteurs',
      slogan: 'AB⃗ = (B − A) · Colinéaires : xy’−yx’=0 · Orthogonaux : xx’+yy’=0',
      summaryBulletPoints: [
        'Deux droites d’équations y = ax + b et y = a’x + b’ sont parallèles ssi a = a’, et perpendiculaires ssi a × a’ = −1.',
        'Pour tester si M(x;y) appartient à la droite y = ax + b, on vérifie si a·x + b donne bien y.',
      ],
      verticalFormulas: [
        {
          name: 'Vecteur AB⃗ et Distance AB pour A(1;2) et B(4;6)',
          badge: '📍',
          steps: [
            '1) AB⃗ = (4 − 1 ; 6 − 2) = (3 ; 4)',
            '2) AB = √(3² + 4²)',
            '   AB = √(9 + 16) = √25 = 5',
            '3) Milieu I = ((1+4)/2 ; (2+6)/2) = (2,5 ; 4)',
          ],
          resultHighlight: 'AB⃗(3;4) · AB = 5 · I(2,5;4)',
          explanation: 'Calculer d’abord les coordonnées de AB⃗ simplifie immédiatement le calcul de la distance AB !',
        },
      ],
      kokoTip: 'Pour la colinéarité de u⃗(x;y) et v⃗(x’;y’), écris-les en deux colonnes côte à côte et fais le produit en croix : x×y’ − y×x’ = 0 !',
      pitfallToAvoid: 'Calculer x_A − x_B au lieu de x_B − x_A pour AB⃗ (cela donne l’opposé BA⃗) !',
    },
    sections: [
      {
        title: '1. Vecteurs dans un repère orthonormé et équations de droites',
        explanation: [
          'Dans un repère orthonormé, tout vecteur AB⃗ a pour coordonnées (x_B − x_A ; y_B − y_A).',
          'Deux vecteurs u⃗(x;y) et v⃗(x’;y’) sont colinéaires si et seulement si x·y’ − y·x’ = 0, et orthogonaux si et seulement si x·x’ + y·y’ = 0.',
        ],
        rules: [
          {
            name: 'Équation de la droite perpendiculaire',
            description: 'Si une droite (d) a pour équation y = ax + b, toute droite perpendiculaire à (d) a un coefficient directeur a’ tel que a × a’ = −1.',
            example: '(d) : y = 2x + 3 | Pente perpendiculaire a’ = −1 ÷ 2 = −0,5',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-12-1',
        'math3-reperage-droites',
        'Ex 1 : Distance exacte entre A(−1 ; 2) et B(5 ; 10)',
        1,
        'Dans un repère orthonormé (unité 1 cm), on donne A(−1 ; 2) et B(5 ; 10).\nCalculer la distance AB (en cm).',
        '10',
        '1) AB⃗ = (5 − (−1) ; 10 − 2) = (6 ; 8). 2) AB = √(6² + 8²).',
        'AB = √(36 + 64) = √100 = 10 cm.',
        [
          {
            title: 'Calculer le vecteur AB⃗',
            explanation: 'x_B − x_A = 5 − (−1) = 6 ; y_B − y_A = 10 − 2 = 8.',
            math: 'AB⃗ = (6 ; 8)',
          },
          {
            title: 'Calculer la distance AB',
            explanation: 'AB = √(6² + 8²) = √(36 + 64) = √100 = 10.',
            math: 'AB = √100 | AB = 10 cm',
            subResult: '10 cm',
          },
        ],
        'cm',
        '📍'
      ),
      mkQcm(
        'math3-12-2',
        'math3-reperage-droites',
        'Ex 2 : Tester la colinéarité de deux vecteurs',
        2,
        'Les vecteurs u⃗(4 ; −6) et v⃗(−6 ; 9) sont-ils colinéaires ?',
        [
          'Oui, car 4 × 9 − (−6) × (−6) = 36 − 36 = 0',
          'Non, car 4 × (−6) ≠ 0',
          'Ils sont orthogonaux',
          'On ne peut pas savoir',
        ],
        'Oui, car 4 × 9 − (−6) × (−6) = 36 − 36 = 0',
        'Applique x·y’ − y·x’ = 4×9 − (−6)×(−6).',
        '36 − 36 = 0, donc u⃗ et v⃗ sont colinéaires (v⃗ = −1,5 u⃗).',
        [
          {
            title: 'Calculer le déterminant x·y’ − y·x’',
            explanation: '4×9 = 36 et (−6)×(−6) = 36.',
            math: '4 × 9 − (−6) × (−6) = 36 − 36 | = 0 ➔ Colinéaires',
            subResult: 'Oui, colinéaires',
          },
        ],
        '🧭'
      ),
    ],
  },

  {
    id: 'math3-pyramides-cones',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'mesures',
    order: 13,
    title: 'Pyramides Régulières & Cônes de Révolution : Apothème, Aires & Volume',
    badge: 'Maths 3ème · Ch. 13',
    shortDesc: 'Pyramide régulière (base carrée/triangulaire), cône de révolution (génératrice g² = R² + h²), aire latérale et volume V = (B × h)/3.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-sky-500',
    readingTimeMinutes: 14,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'espace-volumes',
    bossMeta: { name: 'BÂTISSEUR 3D BEPC', emoji: '🍦', xp: 170 },
    kokoSpeech:
      'Pour les pyramides et cônes au BEPC, le triangle rectangle de Pythagore est TOUJOURS caché à l’intérieur : entre la hauteur SO, le rayon R (ou demi-diagonale) et la génératrice SA : SA² = SO² + OA² !',
    realWorldHook: {
      title: 'Toit conique d’un pavillon traditionnel et entonnoir de laboratoire',
      scenario:
        'Un pavillon a un toit en forme de cône de révolution de rayon R = 3 m et de hauteur h = 4 m. On veut calculer la longueur de tôle inclinée (génératrice g) et le volume d’air sous le toit.',
      question:
        'Comment trouver la génératrice g avec Pythagore, l’aire latérale et le volume exact ?',
    },
    unitsTable: [
      { symbol: 'V = (B×h)/3', quantity: 'Volume pyramide ou cône', unit: 'cm³ ou m³ (1 L = 1 000 cm³)', instrument: 'B = Aire de la base' },
      { symbol: 'g² = R² + h²', quantity: 'Génératrice d’un cône', unit: 'Pythagore dans triangle SOA', instrument: 'g = √(R² + h²)' },
      { symbol: 'A_lat (cône)', quantity: 'Aire latérale du cône', unit: 'π × R × g', instrument: 'Périmètre base × g ÷ 2' },
    ],
    experimentOrActivity: {
      title: 'Patron du cône et angle du secteur circulaire',
      materials: ['Disque de rayon g', 'Ciseaux'],
      observation:
        'En découpant un secteur d’angle θ = 360° × (R ÷ g), le disque s’enroule exactement pour former un cône de rayon R et de génératrice g !',
      conclusion:
        'La longueur de l’arc du secteur égale le périmètre 2πR du cercle de base.',
    },
    revisionChecklist: [
      'Je n’oublie jamais le « ÷ 3 » dans le volume d’une pyramide ou d’un cône.',
      'Je sais utiliser Pythagore à l’intérieur d’un cône (g² = R² + h²) ou d’une pyramide.',
      'Je sais calculer l’aire latérale d’un cône (π × R × g) et d’une pyramide régulière (Périmètre base × apothème ÷ 2).',
    ],
    keyFormulas: [
      'Volume pyramide régulière (base carrée côté c) : V = c² × h ÷ 3',
      'Volume cône de révolution : V = π × R² × h ÷ 3',
      'Cône : génératrice g = √(R² + h²)  |  Aire latérale = π × R × g  |  Angle patron θ = 360° × (R ÷ g)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Pyramides & Cônes',
      slogan: 'Solide pointu ➔ ÷ 3 · Pythagore caché : g² = R² + h²',
      summaryBulletPoints: [
        'Pour une pyramide régulière à base carrée de côté c, l’apothème a vérifie a² = h² + (c/2)².',
        'L’aire totale = Aire de la base + Aire latérale.',
      ],
      verticalFormulas: [
        {
          name: 'Cône (R = 3 cm ; h = 4 cm ; π ≈ 3,14)',
          badge: '🍦',
          steps: [
            '1) Génératrice : g = √(3² + 4²) = √25 = 5 cm',
            '2) Volume exact : V = (π × 3² × 4) ÷ 3 = 12π cm³',
            '3) Volume approché : V ≈ 12 × 3,14 = 37,68 cm³',
            '4) Aire latérale : A = π × 3 × 5 = 15π cm²',
          ],
          resultHighlight: 'g = 5 cm | V = 12π cm³',
          explanation: 'On simplifie par 3 avant de multiplier par π pour garder la valeur exacte.',
        },
      ],
      kokoTip: 'Pour le patron d’un cône, l’angle au sommet vaut θ = 360° × (R ÷ g) : pour R = 3 et g = 5, θ = 360 × 0,6 = 216° !',
      pitfallToAvoid: 'Oublier de diviser par 3 dans le calcul du volume (on trouverait le volume du cylindre ou du prisme !).',
    },
    sections: [
      {
        title: '1. Volume, Génératrice et Aire latérale',
        explanation: [
          'Dans une pyramide régulière ou un cône de révolution de hauteur h, le volume vaut toujours V = (Aire de la base × hauteur h) ÷ 3.',
          'La hauteur [SO] est perpendiculaire au plan de la base, ce qui permet d’appliquer Pythagore et la trigonométrie dans le triangle rectangle SOA.',
        ],
        rules: [
          {
            name: 'Conversion Volume ↔ Capacité',
            description: '1 dm³ = 1 L = 1 000 cm³ ; 1 m³ = 1 000 L.',
            example: 'Pyramide carrée côté 6 cm, hauteur 10 cm | V = (6² × 10) ÷ 3 | V = 360 ÷ 3 = 120 cm³',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-13-1',
        'math3-pyramides-cones',
        'Ex 1 : Volume d’une pyramide à base carrée',
        1,
        'Une pyramide régulière a une base carrée de côté c = 9 cm et une hauteur h = 8 cm.\nCalculer son volume V (en cm³).',
        '216',
        'V = (c² × h) ÷ 3 = (81 × 8) ÷ 3.',
        'V = 27 × 8 = 216 cm³.',
        [
          {
            title: 'Calculer l’aire de la base carrée',
            explanation: 'B = 9 × 9 = 81 cm².',
            math: 'B = 9² | B = 81 cm²',
          },
          {
            title: 'Calculer V = (B × h) ÷ 3',
            explanation: '(81 × 8) ÷ 3 = 27 × 8 = 216 cm³.',
            math: 'V = (81 × 8) ÷ 3 | V = 216 cm³',
            subResult: '216 cm³',
          },
        ],
        'cm³',
        '🔺'
      ),
      mkNum(
        'math3-13-2',
        'math3-pyramides-cones',
        'Ex 2 : Génératrice d’un cône par Pythagore',
        2,
        'Un cône de révolution a un rayon de base R = 6 cm et une hauteur h = 8 cm.\nCalculer la longueur de sa génératrice g (en cm).',
        '10',
        'Le triangle rectangle formé par h, R et g vérifie g² = R² + h².',
        'g² = 36 + 64 = 100, donc g = 10 cm.',
        [
          {
            title: 'Appliquer Pythagore dans le triangle rectangle SOA',
            explanation: 'g² = 6² + 8² = 36 + 64 = 100.',
            math: 'g² = 6² + 8² = 100 | g = √100 = 10 cm',
            subResult: '10 cm',
          },
        ],
        'cm',
        '🍦'
      ),
    ],
  },

  {
    id: 'math3-sections-agrandissement',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'mesures',
    order: 14,
    title: 'Sections Planes de Solides (Pyramide / Cône) & Tronc de Cône (k, k², k³)',
    badge: 'Maths 3ème · Ch. 14',
    shortDesc: 'Section parallèle à la base, coefficient de réduction k = h’/h, rapports des aires (k²) et volumes (k³), et volume du tronc.',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-500 via-fuchsia-500 to-rose-400',
    readingTimeMinutes: 15,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'sections-solides',
    bossMeta: { name: 'MAÎTRE DES SECTIONS 3D', emoji: '🍰', xp: 180 },
    kokoSpeech:
      'Exercice phare du BEPC Gabon : le « seau » ou le « verre conique à moitié rempli » (tronc de cône ou tronc de pyramide) ! Retiens la loi magique : si les longueurs sont multipliées par k, les AIRES le sont par k², et les VOLUMES par k³ ! Et V_tronc = V_grand − V_petit !',
    realWorldHook: {
      title: 'Volume d’un seau ou d’une bassine (tronc de cône) à Libreville',
      scenario:
        'On coupe un cône de hauteur H = 12 cm et de volume V_grand = 640 cm³ par un plan parallèle à la base à mi-hauteur (k = 1/2).',
      question:
        'Quel est le volume V_petit du petit cône du haut, et quel est le volume du tronc de cône restant en bas ?',
    },
    unitsTable: [
      { symbol: 'k = h’ / h', quantity: 'Rapport de réduction (0 < k < 1)', unit: 'Longueurs × k', instrument: 'Thalès sur la hauteur' },
      { symbol: 'k²', quantity: 'Coefficient sur les aires', unit: 'A’ = k² × A', instrument: 'Ex : k = 1/2 ➔ aire ÷ 4' },
      { symbol: 'k³', quantity: 'Coefficient sur les volumes', unit: 'V’ = k³ × V', instrument: 'Ex : k = 1/2 ➔ volume ÷ 8' },
    ],
    experimentOrActivity: {
      title: 'Remplir un cône à mi-hauteur = seulement 1/8 du volume total !',
      materials: ['1 verre conique gradué', 'Eau colorée'],
      observation:
        'Quand la hauteur du liquide est h/2 (k = 0,5), le volume d’eau est (0,5)³ = 0,125 = 1/8 du verre ! Les 7/8 restants sont dans la partie supérieure (le tronc).',
      conclusion:
        'Les volumes évoluent avec le CUBE (k³) du rapport de réduction.',
    },
    revisionChecklist: [
      'Je sais calculer le coefficient de réduction k = SO’ ÷ SO = R’ ÷ R.',
      'J’applique k pour les longueurs, k² pour les aires et k³ pour les volumes.',
      'Je calcule le volume d’un tronc par soustraction : V_tronc = V_grand − V_petit.',
    ],
    keyFormulas: [
      'Section d’une pyramide/cône // à la base ➔ Réduction de rapport k = SO’/SO = R’/R',
      'Aire section : A’ = k² × A_base  |  Volume petit solide : V’ = k³ × V_grand',
      'Volume du tronc (seau/abat-jour) : V_tronc = V_grand − V_petit = V_grand × (1 − k³)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Sections & Tronc de Cône/Pyramide',
      slogan: 'Longueurs × k · Aires × k² · Volumes × k³ · Tronc = Grand − Petit',
      summaryBulletPoints: [
        'La section d’une pyramide par un plan parallèle à sa base est un polygone de MÊME nature (carré ➔ petit carré).',
        'La section d’un cône par un plan parallèle à sa base est un disque plus petit de rayon R’ = k × R.',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de V_petit et V_tronc (BEPC)',
          badge: '🍰',
          steps: [
            'Données : V_grand = 400 cm³ ; section à mi-hauteur (k = 1/2 = 0,5)',
            '1) V_petit = k³ × V_grand = (1/2)³ × 400',
            '   V_petit = (1/8) × 400 = 50 cm³',
            '2) V_tronc = V_grand − V_petit = 400 − 50 = 350 cm³',
          ],
          resultHighlight: 'V_petit = 50 cm³ | V_tronc = 350 cm³',
          explanation: 'Attention : couper à mi-hauteur ne divise PAS le volume par 2, mais par 2³ = 8 !',
        },
      ],
      kokoTip: 'Toujours vérifier la cohérence : 0 < k < 1 donc k³ est encore plus petit ! Pour k = 1/3, V_petit = V_grand ÷ 27 !',
      pitfallToAvoid: 'Multiplier le volume par k au lieu de k³ (erreur la plus fréquente au BEPC !).',
    },
    sections: [
      {
        title: '1. Nature des sections, Réduction k³ et Volume d’un tronc',
        explanation: [
          'En coupant une pyramide ou un cône par un plan parallèle à la base, on détache une petite pyramide (ou petit cône) qui est une réduction du solide initial de rapport k = SO’ / SO.',
          'La partie inférieure restante s’appelle un tronc de pyramide ou un tronc de cône ; son volume s’obtient par V_tronc = V_grand − V_petit.',
        ],
        rules: [
          {
            name: 'Passage direct par k² et k³',
            description: 'Si les longueurs sont multipliées par k, alors les aires sont multipliées par k² et les volumes par k³.',
            example: 'k = 2/3 ; A_base = 81 cm² | A_section = (2/3)² × 81 = (4/9) × 81 | A_section = 36 cm²',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-14-1',
        'math3-sections-agrandissement',
        'Ex 1 : Aire de la section réduite (k²)',
        1,
        'Une pyramide a une base d’aire B = 100 cm². On la coupe parallèlement à la base avec un rapport de réduction k = 0,4.\nQuelle est l’aire B’ de la section (en cm²) ?',
        '16',
        'Les aires sont multipliées par k² = 0,4² = 0,16.',
        'B’ = 0,16 × 100 = 16 cm².',
        [
          {
            title: 'Appliquer le facteur k² aux aires',
            explanation: 'k² = 0,4 × 0,4 = 0,16.',
            math: 'B’ = k² × B | B’ = 0,16 × 100 = 16 cm²',
            subResult: '16 cm²',
          },
        ],
        'cm²',
        '📐'
      ),
      mkNum(
        'math3-14-2',
        'math3-sections-agrandissement',
        'Ex 2 : Volume d’un tronc de cône (V_grand − V_petit)',
        2,
        'Un grand cône a un volume V = 540 cm³. On le coupe parallèlement à sa base au tiers de sa hauteur depuis le sommet (k = 1/3).\nCalculer le volume du TRONC DE CÔNE restant en bas (en cm³).',
        '520',
        '1) V_petit = (1/3)³ × 540 = 540 ÷ 27 = 20 cm³. 2) V_tronc = 540 − 20.',
        'V_petit = 20 cm³, donc V_tronc = 540 − 20 = 520 cm³.',
        [
          {
            title: 'Calculer le volume du petit cône avec k³',
            explanation: 'k = 1/3 donc k³ = 1/27.',
            math: 'V_petit = (1/3)³ × 540 = 540 ÷ 27 | V_petit = 20 cm³',
          },
          {
            title: 'Soustraire pour avoir le tronc',
            explanation: 'V_tronc = V_grand − V_petit.',
            math: 'V_tronc = 540 − 20 | V_tronc = 520 cm³',
            subResult: '520 cm³',
          },
        ],
        'cm³',
        '🍰'
      ),
    ],
  },
];
