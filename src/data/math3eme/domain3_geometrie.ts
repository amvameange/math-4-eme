import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_3EME_GEOMETRIE: Chapter[] = [
  {
    id: 'math3-thales-3eme',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'geometrie',
    order: 8,
    title: 'Théorème de Thalès, Réciproque & Configuration Papillon (3ème BEPC)',
    badge: 'Maths 3ème · Ch. 8',
    shortDesc: 'Théorème direct (triangle & papillon), réciproque de Thalès (prouver le parallélisme) et conséquence de Thalès (non-parallélisme).',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-yellow-400',
    readingTimeMinutes: 15,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'thales',
    bossMeta: { name: 'MAÎTRE DE THALÈS BEPC', emoji: '🔺', xp: 180 },
    kokoSpeech:
      'Pour réussir la RÉCIPROQUE de Thalès au BEPC, n’écris JAMAIS l’égalité des rapports dès le début ! Calcule séparément AM/AB et AN/AC, compare les résultats, puis cite l’ALIGNEMENT DES POINTS DANS LE MÊME ORDRE avant de conclure que (MN) // (BC) !',
    realWorldHook: {
      title: 'Vérifier le parallélisme des câbles d’un pont suspendu sur l’Ogooué',
      scenario:
        'Un ingénieur mesure sur un pylône en configuration papillon : OA = 4 m, OC = 6 m, OB = 6 m et OD = 9 m.',
      question:
        'Les deux barres [AB] et [CD] sont-elles bien parallèles ?',
    },
    unitsTable: [
      { symbol: 'Direct', quantity: 'Connaissant (MN)//(BC)', unit: 'Calculer une longueur', instrument: 'AM/AB = AN/AC = MN/BC' },
      { symbol: 'Réciproque', quantity: 'AM/AB = AN/AC + ordre', unit: 'Prouver (MN) // (BC)', instrument: 'Calculs séparés !' },
      { symbol: 'Contraposée', quantity: 'AM/AB ≠ AN/AC', unit: 'Prouver (MN) ∦ (BC)', instrument: 'Pas parallèles' },
    ],
    experimentOrActivity: {
      title: 'Comparer deux rapports exacts (fractions irréductibles) vs arrondis',
      materials: ['Calculatrice / réduction de fractions'],
      observation:
        '3/7 ≈ 0,4285 et 4/9 ≈ 0,4444 : avec les produits en croix 3×9 = 27 ≠ 7×4 = 28, on voit immédiatement qu’ils ne sont pas égaux sans erreur d’arrondi !',
      conclusion:
        'Toujours comparer les fractions simplifiées ou leurs produits en croix exacts, jamais des valeurs arrondies.',
    },
    revisionChecklist: [
      'Je sais écrire les 3 rapports égaux aussi bien dans la configuration emboîtée que dans la configuration papillon (sommet commun O).',
      'Dans la réciproque, je vérifie l’ordre d’alignement des points sur les deux droites sécantes.',
      'Je compare les fractions exactes (ou produits en croix) sans arrondir.',
    ],
    keyFormulas: [
      'Thalès (Triangle ou Papillon de sommet A) : AM/AB = AN/AC = MN/BC',
      'Réciproque : Si A, M, B et A, N, C sont alignés dans le même ordre ET AM/AB = AN/AC, alors (MN) // (BC).',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Thalès & Réciproque',
      slogan: 'Direct = Calculer longueur · Réciproque = Calculs séparés + Même ordre ➔ //',
      summaryBulletPoints: [
        'Toujours partir du sommet commun (point d’intersection des deux droites sécantes).',
        'Mettre tous les côtés du premier triangle au numérateur, et ceux du second triangle au dénominateur.',
      ],
      verticalFormulas: [
        {
          name: 'Rédaction type Réciproque de Thalès (BEPC)',
          badge: '🔺',
          steps: [
            'Données : O, A, C et O, B, D alignés dans le même ordre.',
            'Calcul 1 : OA / OC = 4 / 6 = 2 / 3',
            'Calcul 2 : OB / OD = 6 / 9 = 2 / 3',
            'Comme OA/OC = OB/OD et points dans le même ordre,',
            'D’après la réciproque de Thalès : (AB) // (CD).',
          ],
          resultHighlight: '(AB) // (CD)',
          explanation: 'Deux calculs séparés, égalité exacte et précision sur l’ordre des points = 100% des points !',
        },
      ],
      kokoTip: 'Dans le papillon de sommet O, les deux points sur une même droite sont toujours alignés dans l’ordre (ex : A, O, C et B, O, D) !',
      pitfallToAvoid: 'Comparer deux valeurs arrondies à 0,01 près pour appliquer la réciproque : il faut une égalité EXACTE !',
    },
    sections: [
      {
        title: '1. Configuration Papillon & Réciproque de Thalès',
        explanation: [
          'En 3ème, les points M ∈ (AB) et N ∈ (AC) peuvent être de part et d’autre du sommet A : c’est la configuration en « papillon ».',
          'La réciproque du théorème de Thalès permet de démontrer que deux droites sont parallèles dès que deux rapports issus du sommet commun sont égaux et que les points sont dans le même ordre.',
        ],
        rules: [
          {
            name: 'Conséquence (Contraposée de Thalès)',
            description: 'Si les rapports AM/AB et AN/AC ne sont pas égaux, alors les droites (MN) et (BC) ne sont PAS parallèles.',
            example: 'AM/AB = 3/5 = 0,6 et AN/AC = 4/7 ≈ 0,571 | 3×7 = 21 ≠ 5×4 = 20 | Donc (MN) et (BC) ne sont pas parallèles',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-8-1',
        'math3-thales-3eme',
        'Ex 1 : Configuration Papillon (Thalès direct)',
        1,
        'Les droites (AC) et (BD) se coupent en O et (AB) // (CD).\nOn donne OA = 3 cm, OC = 9 cm et AB = 4 cm.\nCalculer CD (en cm).',
        '12',
        'Écris OA/OC = AB/CD, soit 3/9 = 4/CD.',
        'CD = (9 × 4) ÷ 3 = 12 cm.',
        [
          {
            title: 'Écrire les rapports de Thalès depuis le sommet O',
            explanation: 'OA/OC = OB/OD = AB/CD.',
            math: '3 / 9 = 4 / CD | 3 × CD = 9 × 4 | CD = 36 ÷ 3 = 12 cm',
            subResult: '12 cm',
          },
        ],
        'cm',
        '🦋'
      ),
      mkQcm(
        'math3-8-2',
        'math3-thales-3eme',
        'Ex 2 : Réciproque de Thalès (Parallélisme ?)',
        2,
        'Dans un triangle ABC, M ∈ [AB] et N ∈ [AC] avec AM = 4,5 cm, AB = 6 cm, AN = 6 cm et AC = 8 cm.\nLes droites (MN) et (BC) sont-elles parallèles ?',
        [
          'Oui, car AM/AB = AN/AC = 3/4 et les points sont alignés dans le même ordre',
          'Non, car les rapports sont différents',
          'Oui, d’après le théorème de Pythagore',
          'On ne peut pas savoir',
        ],
        'Oui, car AM/AB = AN/AC = 3/4 et les points sont alignés dans le même ordre',
        'Calcule 4,5/6 (= 0,75 = 3/4) et 6/8 (= 0,75 = 3/4).',
        'Les deux rapports valent 3/4, donc (MN) // (BC) d’après la réciproque de Thalès.',
        [
          {
            title: 'Comparer AM/AB et AN/AC séparément',
            explanation: '4,5/6 = 45/60 = 3/4 et 6/8 = 3/4.',
            math: 'AM/AB = 3/4 et AN/AC = 3/4 | Égaux + même ordre ➔ (MN) // (BC)',
            subResult: 'Oui, parallèles',
          },
        ],
        '🔺'
      ),
    ],
  },

  {
    id: 'math3-trigonometrie-3eme',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'geometrie',
    order: 9,
    title: 'Trigonométrie dans le Triangle Rectangle : sin, cos, tan & Relations (3ème)',
    badge: 'Maths 3ème · Ch. 9',
    shortDesc: 'Sinus, Cosinus, Tangente, formule fondamentale cos²α + sin²α = 1, tan α = sin α / cos α et angles remarquables (30°, 45°, 60°).',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-sky-500 to-indigo-500',
    readingTimeMinutes: 15,
    visualizerType: 'milieux-cosinus',
    illustrationKey: 'trigonometrie',
    bossMeta: { name: 'NAVIGATEUR SOH-CAH-TOA', emoji: '🧭', xp: 180 },
    kokoSpeech:
      'En 3ème BEPC, retiens « CAH-SOH-TOA » ET les deux formules d’or entre sinus, cosinus et tangente : cos²(α) + sin²(α) = 1 et tan(α) = sin(α) ÷ cos(α) !',
    realWorldHook: {
      title: 'Calculer la hauteur d’un phare à Cap Esterias par angle d’élévation',
      scenario:
        'Un observateur situé à 40 m du pied d’un phare mesure un angle d’élévation de 30° ou 45° jusqu’au sommet.',
      question:
        'Comment choisir entre cos, sin et tan, et comment déduire sin α et tan α si l’on connaît uniquement cos α = 0,6 ?',
    },
    unitsTable: [
      { symbol: 'cos(α)', quantity: 'Adjacent ÷ Hypoténuse', unit: '0 < cos(α) < 1', instrument: 'CAH' },
      { symbol: 'sin(α)', quantity: 'Opposé ÷ Hypoténuse', unit: '0 < sin(α) < 1', instrument: 'SOH' },
      { symbol: 'tan(α)', quantity: 'Opposé ÷ Adjacent', unit: 'tan(α) = sin(α) ÷ cos(α)', instrument: 'TOA' },
    ],
    experimentOrActivity: {
      title: 'Vérifier cos²α + sin²α = 1 sur le triangle 3-4-5',
      materials: ['Triangle rectangle côtés 3, 4 et hypoténuse 5'],
      observation:
        'cos(α) = 4/5 = 0,8 ; sin(α) = 3/5 = 0,6. Alors 0,8² + 0,6² = 0,64 + 0,36 = 1,00 !',
      conclusion:
        'Pour tout angle aigu α, la somme des carrés du cosinus et du sinus vaut toujours exactement 1.',
    },
    revisionChecklist: [
      'Je sais identifier Hypoténuse, Côté Opposé et Côté Adjacent à l’angle aigu étudié.',
      'Je connais les valeurs exactes pour 30°, 45° et 60° (cos 60° = sin 30° = 0,5 ; tan 45° = 1).',
      'Je sais calculer sin α à partir de cos α grâce à cos²α + sin²α = 1.',
    ],
    keyFormulas: [
      'SOH-CAH-TOA : sin = Opp/Hyp  |  cos = Adj/Hyp  |  tan = Opp/Adj',
      'Relations fondamentales : cos²(α) + sin²(α) = 1  |  tan(α) = sin(α) ÷ cos(α)',
      'Angles complémentaires (α + β = 90°) : sin(α) = cos(90° − α) et cos(α) = sin(90° − α)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Trigonométrie 3ème',
      slogan: 'CAH-SOH-TOA · cos²α + sin²α = 1 · tan α = sin α / cos α',
      summaryBulletPoints: [
        'Pour trouver un ANGLE à partir du rapport, on utilise arccos / arcsin / arctan (touche cos⁻¹ / sin⁻¹ / tan⁻¹) en mode DEGRÉS (DEG).',
        'Tableau 30°-45°-60° : sin(30°) = 1/2 ; sin(45°) = √2/2 ; sin(60°) = √3/2.',
      ],
      verticalFormulas: [
        {
          name: 'Trouver sin(α) et tan(α) sachant cos(α) = 0,8',
          badge: '🧭',
          steps: [
            '1) cos²(α) + sin²(α) = 1',
            '   0,8² + sin²(α) = 1  ➔  sin²(α) = 1 − 0,64 = 0,36',
            '   Comme α est aigu (sin > 0) : sin(α) = √0,36 = 0,6',
            '2) tan(α) = sin(α) ÷ cos(α) = 0,6 ÷ 0,8 = 0,75',
          ],
          resultHighlight: 'sin(α) = 0,6 | tan(α) = 0,75',
          explanation: 'Exercice incontournable du BEPC sans calculatrice !',
        },
      ],
      kokoTip: 'Moyen mémo pour sin(30°), sin(45°), sin(60°) : √1/2, √2/2, √3/2 ! Et pour cos, c’est l’ordre inverse : √3/2, √2/2, √1/2 !',
      pitfallToAvoid: 'Laisser sa calculatrice en mode RAD (radians) au lieu de DEG (degrés) !',
    },
    sections: [
      {
        title: '1. Rapports trigonométriques et relations fondamentales',
        explanation: [
          'Dans un triangle rectangle en A, pour l’angle aigu B̂ : sin(B̂) = AC/BC, cos(B̂) = AB/BC, tan(B̂) = AC/AB.',
          'Par le théorème de Pythagore (AB² + AC² = BC²), en divisant tout par BC², on démontre cos²(B̂) + sin²(B̂) = 1.',
        ],
        rules: [
          {
            name: 'Angles complémentaires',
            description: 'Dans un triangle rectangle en A, B̂ + Ĉ = 90° donc sin(B̂) = cos(Ĉ) et tan(B̂) × tan(Ĉ) = 1.',
            example: 'sin(30°) = cos(60°) = 0,5 | tan(45°) = 1',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-9-1',
        'math3-trigonometrie-3eme',
        'Ex 1 : Calculer sin(α) avec cos²α + sin²α = 1',
        1,
        'Soit α un angle aigu tel que cos(α) = 0,6.\nCalculer la valeur exacte de sin(α).',
        '0.8',
        'Utilise sin²(α) = 1 − 0,6² = 1 − 0,36 = 0,64.',
        'sin(α) = √0,64 = 0,8.',
        [
          {
            title: 'Appliquer cos²α + sin²α = 1',
            explanation: '0,6² = 0,36 donc sin²(α) = 1 − 0,36 = 0,64.',
            math: 'sin²(α) = 1 − 0,36 = 0,64 | sin(α) = √0,64 = 0,8',
            subResult: '0,8',
          },
        ],
        undefined,
        '🧭'
      ),
      mkNum(
        'math3-9-2',
        'math3-trigonometrie-3eme',
        'Ex 2 : Hauteur d’un mât avec tan(45°)',
        2,
        'Un élève placé à 18 m du pied d’un mât observe son sommet sous un angle de 45° (à hauteur du sol).\nSachant que tan(45°) = 1, calculer la hauteur h du mât (en m).',
        '18',
        'tan(45°) = Côté opposé ÷ Côté adjacent = h ÷ 18.',
        'h = 18 × tan(45°) = 18 × 1 = 18 m.',
        [
          {
            title: 'Appliquer TOA',
            explanation: 'On connaît le côté adjacent (18 m) et on cherche l’opposé (h).',
            math: 'tan(45°) = h ÷ 18 | h = 18 × 1 = 18 m',
            subResult: '18 m',
          },
        ],
        'm',
        '📐'
      ),
    ],
  },

  {
    id: 'math3-vecteurs-translations',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'geometrie',
    order: 10,
    title: 'Vecteurs du Plan : Somme (Relation de Chasles), Produit & Colinéarité',
    badge: 'Maths 3ème · Ch. 10',
    shortDesc: 'Égalité vectorielle et parallélogramme, relation de Chasles AB⃗ + BC⃗ = AC⃗, vecteurs opposés, multiplication k·u⃗ et alignement.',
    themeColor: '#0284c7',
    themeGradient: 'from-sky-500 via-indigo-500 to-violet-500',
    readingTimeMinutes: 14,
    visualizerType: 'pythagore',
    illustrationKey: 'vecteurs-chasles',
    bossMeta: { name: 'MAÎTRE DE CHASLES', emoji: '➡️', xp: 170 },
    kokoSpeech:
      'La relation de Chasles est magique : quand la lettre d’arrivée du 1er vecteur est la MÊME que la lettre de départ du 2ème vecteur (AB⃗ + BC⃗), la lettre du milieu disparaît et il reste AC⃗ ! Et pour deux vecteurs colinéaires u⃗ et v⃗, u⃗ = k·v⃗ prouve que les droites sont parallèles !',
    realWorldHook: {
      title: 'Trajets successifs d’une pirogue sur l’estuaire du Komo',
      scenario:
        'Une pirogue part de A vers B (déplacement AB⃗), puis de B vers C (déplacement BC⃗). Le déplacement global du point de départ A au point d’arrivée C est le vecteur somme AC⃗.',
      question:
        'Comment simplifier des sommes de vecteurs, caractériser un parallélogramme ou un milieu, et prouver un alignement ?',
    },
    unitsTable: [
      { symbol: 'AB⃗ = DC⃗', quantity: 'Égalité de 2 vecteurs', unit: 'ABCD est un parallélogramme', instrument: 'Attention à l’ordre A-B-C-D !' },
      { symbol: 'AB⃗ + BC⃗ = AC⃗', quantity: 'Relation de Chasles', unit: 'Enchaînement de 2 vecteurs', instrument: 'Même lettre au contact' },
      { symbol: 'IA⃗ + IB⃗ = 0⃗', quantity: 'Milieu I de [AB]', unit: '⟺ AI⃗ = IB⃗ = ½ AB⃗', instrument: 'Vecteurs opposés' },
    ],
    experimentOrActivity: {
      title: 'Construire la somme AB⃗ + AD⃗ (Règle du parallélogramme)',
      materials: ['Règle et compas', '3 points A, B, D non alignés'],
      observation:
        'En complétant le parallélogramme ABCD, la diagonale AC⃗ est exactement égale à AB⃗ + AD⃗.',
      conclusion:
        'Deux vecteurs de même origine A s’additionnent selon la diagonale du parallélogramme construit sur eux.',
    },
    revisionChecklist: [
      'Je sais simplifier une somme vectorielle avec Chasles et BA⃗ = −AB⃗.',
      'Je fais attention à l’ordre des lettres : AB⃗ = CD⃗ signifie ABDC parallélogramme (et non ABCD !).',
      'Je sais que AB⃗ = k·AC⃗ prouve l’alignement des points A, B, C.',
    ],
    keyFormulas: [
      'Relation de Chasles : AB⃗ + BC⃗ = AC⃗  |  Vecteur opposé : BA⃗ = −AB⃗  |  AA⃗ = 0⃗',
      'Parallélogramme ABCD  ⟺  AB⃗ = DC⃗  ⟺  AD⃗ = BC⃗',
      'Colinéarité : u⃗ = k·v⃗ ➔ même direction (droites parallèles ou points alignés si point commun)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Calcul Vectoriel',
      slogan: 'AB⃗ + BC⃗ = AC⃗ (Chasles) · AB⃗ = DC⃗ ➔ ABCD parallélogramme · u⃗ = k·v⃗ ➔ //',
      summaryBulletPoints: [
        'Pour soustraire un vecteur, on ajoute son opposé : AB⃗ − CB⃗ = AB⃗ + BC⃗ = AC⃗.',
        'Trois points A, B, C sont alignés ssi il existe un réel k tel que AB⃗ = k·AC⃗.',
      ],
      verticalFormulas: [
        {
          name: 'Simplifier S = AB⃗ − CB⃗ + CD⃗',
          badge: '➡️',
          steps: [
            'S = AB⃗ − CB⃗ + CD⃗',
            'On remplace −CB⃗ par +BC⃗ :',
            'S = (AB⃗ + BC⃗) + CD⃗',
            'S = AC⃗ + CD⃗ = AD⃗',
          ],
          resultHighlight: 'S = AD⃗',
          explanation: 'On utilise BA⃗ = −AB⃗ puis la relation de Chasles deux fois de suite.',
        },
      ],
      kokoTip: 'Piège classique : AB⃗ = DC⃗ donne ABCD parallélogramme (le deuxième vecteur est D➔C, inversé !).',
      pitfallToAvoid: 'Écrire que AB⃗ = CD⃗ donne ABCD parallélogramme : FAUX, cela donne ABDC !',
    },
    sections: [
      {
        title: '1. Addition vectorielle et Colinéarité',
        explanation: [
          'Un vecteur AB⃗ est caractérisé par sa direction (la droite (AB)), son sens (de A vers B) et sa norme (la longueur AB).',
          'La relation de Chasles affirme que pour tous points A, B, C du plan : AB⃗ + BC⃗ = AC⃗.',
        ],
        rules: [
          {
            name: 'Colinéarité et parallélisme',
            description: 'Si AB⃗ = k·CD⃗ (avec k ≠ 0), alors les vecteurs ont la même direction, donc (AB) // (CD).',
            example: 'MN⃗ = 3·BC⃗ | Les vecteurs MN⃗ et BC⃗ sont colinéaires | Donc (MN) // (BC) et MN = 3 × BC',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'math3-10-1',
        'math3-vecteurs-translations',
        'Ex 1 : Relation de Chasles et vecteur opposé',
        1,
        'Simplifier la somme vectorielle : U⃗ = EF⃗ + GE⃗ + FG⃗.',
        ['0⃗ (vecteur nul)', 'EF⃗', '2 EF⃗', 'EG⃗'],
        '0⃗ (vecteur nul)',
        'Réordonne la somme : GE⃗ + EF⃗ + FG⃗ = GF⃗ + FG⃗ = GG⃗ = 0⃗.',
        'En appliquant Chasles deux fois, on revient au point de départ : U⃗ = 0⃗.',
        [
          {
            title: 'Réordonner pour appliquer Chasles',
            explanation: 'L’addition des vecteurs est commutative.',
            math: 'U⃗ = GE⃗ + EF⃗ + FG⃗ | = GF⃗ + FG⃗ = GG⃗ = 0⃗',
            subResult: '0⃗',
          },
        ],
        '➡️'
      ),
      mkQcm(
        'math3-10-2',
        'math3-vecteurs-translations',
        'Ex 2 : Égalité vectorielle et parallélogramme',
        2,
        'Si quatre points non alignés M, N, P, Q vérifient MN⃗ = QP⃗, quel quadrilatère est un parallélogramme ?',
        ['MNPQ', 'MNQP', 'MPNQ', 'MQPN'],
        'MNPQ',
        'Trace MN⃗ de gauche à droite, puis QP⃗ dessous de droite à gauche : en tournant autour on lit M-N-P-Q !',
        'MN⃗ = QP⃗ équivaut à : MNPQ est un parallélogramme.',
        [
          {
            title: 'Vérifier l’ordre des sommets',
            explanation: 'Les vecteurs opposés égaux sont MN⃗ et QP⃗.',
            math: 'MN⃗ = QP⃗ ⟺ MNPQ parallélogramme',
            subResult: 'MNPQ',
          },
        ],
        '▱'
      ),
    ],
  },

  {
    id: 'math3-angles-polygones',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'geometrie',
    order: 11,
    title: 'Angles Inscrits, Angles au Centre, Quadrilatères Inscriptibles & Polygones',
    badge: 'Maths 3ème · Ch. 11',
    shortDesc: 'Angle au centre = 2 × angle inscrit, deux angles inscrits interceptant le même arc, triangle inscrit dans un demi-cercle et polygones réguliers.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-500 via-rose-500 to-amber-400',
    readingTimeMinutes: 13,
    visualizerType: 'pythagore',
    illustrationKey: 'angles-polygones',
    bossMeta: { name: 'ARCHITECTE DU CERCLE', emoji: '⭕', xp: 160 },
    kokoSpeech:
      'Toujours repérer l’ARC intercepté en premier ! Deux angles inscrits qui interceptent le MÊME arc sont ÉGAUX. Et l’angle au centre vaut le DOUBLE de l’angle inscrit interceptant le même arc !',
    realWorldHook: {
      title: 'Rosace traditionnelle et plan circulaire d’un stade à Libreville',
      scenario:
        'Depuis différents gradins M et N d’un stade circulaire, les supporters regardent les deux poteaux A et B du terrain sous un même angle inscrit AM̂B = AN̂B.',
      question:
        'Comment calculer les angles d’un polygone régulier (pentagone, hexagone, octogone) inscrit dans un cercle ?',
    },
    unitsTable: [
      { symbol: 'AÔB = 2·AM̂B', quantity: 'Angle au centre vs Angle inscrit', unit: 'Même arc AB', instrument: 'Rapport 2' },
      { symbol: 'AM̂B = AN̂B', quantity: 'Deux angles inscrits', unit: 'Même arc AB', instrument: 'Égalité d’angles' },
      { symbol: 'α = 360° ÷ n', quantity: 'Angle au centre polygone régulier', unit: 'n côtés égaux', instrument: 'Ex : hexagone = 60°' },
    ],
    experimentOrActivity: {
      title: 'Mesurer 3 angles inscrits interceptant le même arc',
      materials: ['1 cercle de rayon 5 cm', 'Corde [AB]', 'Rapporteur'],
      observation:
        'Peu importe où on place le point M sur le grand arc AB, le rapporteur mesure exactement le même angle AM̂B = 40°, et au centre AÔB = 80°.',
      conclusion:
        'Un angle inscrit est constant sur tout son arc et vaut la moitié de l’angle au centre associé.',
    },
    revisionChecklist: [
      'Je sais vérifier que deux angles interceptent bien le MÊME arc avant d’appliquer la propriété.',
      'Je sais que dans un quadrilatère inscrit, deux angles opposés sont supplémentaires (somme = 180°).',
      'Je sais calculer l’angle au centre (360°/n) et l’angle intérieur (180° − 360°/n) d’un polygone régulier.',
    ],
    keyFormulas: [
      'Angle au centre = 2 × Angle inscrit (même arc)',
      'Polygone régulier à n côtés : angle au centre = 360° ÷ n | angle intérieur = 180° − 360°/n',
      'Triangle inscrit dont un côté est diamètre : angle opposé = 90° (triangle rectangle)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Angles & Polygones Réguliers',
      slogan: 'Au centre = 2 × Inscrit · Polygone régulier : 360° ÷ n',
      summaryBulletPoints: [
        'Un hexagone régulier (n = 6) a un angle au centre de 360°/6 = 60° et se découpe en 6 triangles équilatéraux.',
        'Un octogone régulier (n = 8) a un angle au centre de 360°/8 = 45°.',
      ],
      verticalFormulas: [
        {
          name: 'Angle au centre & Quadrilatère inscrit',
          badge: '⭕',
          steps: [
            'Soit AM̂B = 38° (inscrit sur l’arc AB)',
            '1) Angle au centre AÔB = 2 × 38° = 76°',
            '2) Si A, M, B, P sont sur le cercle (P sur le petit arc AB) :',
            '   AP̂B = 180° − AM̂B = 180° − 38° = 142°',
          ],
          resultHighlight: 'AÔB = 76° | AP̂B = 142°',
          explanation: 'Deux angles opposés d’un quadrilatère inscrit ont une somme égale à 180°.',
        },
      ],
      kokoTip: 'Pour trouver l’angle au sommet d’un polygone régulier à n côtés, calcule d’abord 360° ÷ n (angle au centre), puis fais 180° − (360° ÷ n) !',
      pitfallToAvoid: 'Confondre deux angles inscrits qui sont de CÔTÉS OPPOSÉS de la corde [AB] : ils ne sont pas égaux, ils sont supplémentaires (somme = 180°) !',
    },
    sections: [
      {
        title: '1. Angles inscrits, quadrilatères inscrits et polygones réguliers',
        explanation: [
          'Un polygone régulier a tous ses côtés de même longueur et tous ses angles de même mesure ; il est toujours inscriptible dans un cercle.',
          'Tout angle inscrit dans un cercle qui intercepte un diamètre (demi-cercle) mesure 90°.',
        ],
        rules: [
          {
            name: 'Angles d’un pentagone régulier (5 côtés)',
            description: 'Angle au centre = 360° ÷ 5 = 72°. Angle intérieur = 180° − 72° = 108°.',
            example: 'Hexagone (n = 6) | Angle au centre = 360° ÷ 6 = 60° | Angle intérieur = 180° − 60° = 120°',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-11-1',
        'math3-angles-polygones',
        'Ex 1 : Angle au centre et angle inscrit',
        1,
        'Sur un cercle de centre O, l’angle au centre AÔB mesure 114°.\nQuelle est la mesure de l’angle inscrit AM̂B interceptant le même petit arc AB (en degrés) ?',
        '57',
        'L’angle inscrit vaut la moitié de l’angle au centre : 114° ÷ 2.',
        'AM̂B = 114° ÷ 2 = 57°.',
        [
          {
            title: 'Diviser l’angle au centre par 2',
            explanation: 'AÔB = 2 × AM̂B donc AM̂B = AÔB ÷ 2.',
            math: 'AM̂B = 114° ÷ 2 | AM̂B = 57°',
            subResult: '57°',
          },
        ],
        '°',
        '⭕'
      ),
      mkNum(
        'math3-11-2',
        'math3-angles-polygones',
        'Ex 2 : Angle au centre d’un octogone régulier',
        2,
        'Un bassin octogonal régulier (8 côtés égaux) est inscrit dans un cercle de centre O.\nQuelle est la mesure en degrés de l’angle au centre interceptant un côté ?',
        '45',
        'Divise le tour complet 360° par le nombre de côtés (8).',
        '360° ÷ 8 = 45°.',
        [
          {
            title: 'Appliquer 360° ÷ n',
            explanation: 'n = 8 côtés égaux.',
            math: 'α = 360° ÷ 8 | α = 45°',
            subResult: '45°',
          },
        ],
        '°',
        '🛑'
      ),
    ],
  },
];
