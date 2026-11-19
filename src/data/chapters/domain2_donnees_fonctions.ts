import { Chapter } from '../../types/math';
import { CHAP6_EXERCISES } from '../exercises/chap6_volumes_vitesse';
import { pickExercises, mkNum, mkQcm } from './exerciseHelpers';

export const DOMAIN2_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 10 : PROPORTIONNALITÉ & POURCENTAGES
  // ==========================================
  {
    id: 'proportionnalite-pourcentages',
    domainId: 'donnees-fonctions',
    order: 10,
    title: 'Proportionnalité et pourcentages',
    badge: 'Chapitre 10 · 4ème',
    shortDesc: 'Produit en croix, reconnaissance graphique (droite passant par l’origine) et hausses/remises en F CFA.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-500 via-fuchsia-500 to-purple-500',
    readingTimeMinutes: 12,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'proportionnalite',
    bossMeta: { name: 'MARCHAND PROPORTION', emoji: '🛍️', xp: 150 },
    kokoSpeech:
      'Pour reconnaître une situation de proportionnalité sur un graphique, c’est facile : les points forment une DROITE qui passe OBLIGATOIREMENT par l’origine O(0 ; 0) !',
    keyFormulas: [
      'Produit en croix : si a/b = c/d, alors a × d = b × c',
      'Pourcentage : t% d’un prix P = (t ÷ 100) × P',
      'Réduction de t% : Nouveau prix = P × (1 - t/100)',
      'Augmentation de t% : Nouveau prix = P × (1 + t/100)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Proportionnalité & Pourcentages',
      slogan: 'Maîtriser le produit en croix et les remises en F CFA sans piège',
      summaryBulletPoints: [
        'Tableau de proportionnalité : tous les quotients (ligne 2 ÷ ligne 1) sont égaux au même coefficient k.',
        'Graphique : une situation de proportionnalité est représentée par des points alignés avec l’origine (0 ; 0).',
        'Prendre 25% = diviser par 4. Prendre 50% = diviser par 2. Prendre 10% = diviser par 10.',
        'PIÈGE CLASSIQUE : +20% puis -20% NE RAMÈNE PAS au prix de départ !',
      ],
      verticalFormulas: [
        {
          name: 'Produit en croix (4e proportionnelle)',
          badge: '✖️',
          steps: ['3 kg coûtent 4 500 F CFA', '5 kg coûtent x F CFA', 'x = (5 × 4 500) ÷ 3', 'x = 7 500 F CFA'],
          resultHighlight: '7 500 F CFA',
          explanation: 'On multiplie en diagonale les deux nombres connus et on divise par le troisième.',
        },
        {
          name: 'Remise de 20% en F CFA',
          badge: '🏷️',
          steps: ['Prix initial = 15 000 F CFA', 'Remise = 15 000 × 20 ÷ 100 = 3 000 F', 'Nouveau prix = 15 000 - 3 000', '= 12 000 F CFA'],
          resultHighlight: '12 000 F CFA',
          explanation: 'On calcule 20% du prix puis on le soustrait (ou on multiplie directement par 0,80).',
        },
      ],
      kokoTip: 'Une réduction de 15%, c’est payer 85% du prix (car 100% - 15% = 85% = 0,85) ! Une seule multiplication suffit.',
      pitfallToAvoid: 'Croire qu’augmenter de 10% puis baisser de 10% revient au prix initial ! (100 ➔ 110 ➔ 99).',
    },
    sections: [
      {
        title: '1. Reconnaître et utiliser la proportionnalité',
        explanation: [
          'Deux grandeurs sont proportionnelles quand on passe de l’une à l’autre en multipliant toujours par le même nombre k (coefficient de proportionnalité).',
          'Graphiquement, c’est une droite qui passe par l’origine O(0 ; 0).',
        ],
        rules: [
          {
            name: 'Égalité des produits en croix',
            description: 'Dans un tableau 2×2 proportionnel, les produits en diagonale sont égaux.',
            example: '4 stylos = 1 200 F ➔ 7 stylos = (7 × 1 200) ÷ 4 = 2 100 F CFA',
          },
        ],
      },
      {
        title: '2. Calculs de pourcentages et variations en F CFA',
        explanation: [
          'Un pourcentage est une proportion ramenée sur 100.',
        ],
        rules: [
          {
            name: 'Trouver un pourcentage ou un prix soldé',
            description: 'Part(%) = (Effectif ÷ Total) × 100.',
            example: '18 élèves sur 30 ont la moyenne | (18 ÷ 30) × 100 = 60%',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-prop-1',
        'proportionnalite-pourcentages',
        'Ex 1 : Reconnaître la proportionnalité sur un graphique',
        1,
        'Comment reconnaît-on un graphique représentant une situation de proportionnalité ?',
        [
          'Les points forment une droite passant par l’origine (0 ; 0)',
          'C’est une courbe qui monte',
          'C’est une droite qui ne passe pas par (0 ; 0)',
          'Il y a au moins 3 points positifs',
        ],
        'Les points forment une droite passant par l’origine (0 ; 0)',
        'Deux conditions obligatoires : droite alignée ET passage par zéro.',
        'Toute relation proportionnelle y = k·x a pour représentation une droite passant par (0 ; 0).',
        [
          { title: 'Condition 1 : Alignement', explanation: 'Tous les points sont sur une droite.', math: 'y = k × x' },
          { title: 'Condition 2 : Origine', explanation: 'Si x = 0 alors y = 0.', math: 'Passe par (0 ; 0)', subResult: 'Droite par (0;0)' },
        ],
        '📈'
      ),
      mkNum(
        'exo-4e-prop-2',
        'proportionnalite-pourcentages',
        'Ex 2 : Produit en croix au marché Mont-Bouët',
        2,
        'Si 4 kg de bananes plantains coûtent 3 200 F CFA, combien coûtent 7 kg au même tarif ?',
        '5600',
        'Calcule d’abord le prix d’1 kg (3 200 ÷ 4), ou fais (7 × 3 200) ÷ 4.',
        '7 kg coûtent 5 600 F CFA.',
        [
          { title: 'Prix de 1 kg', explanation: '3 200 ÷ 4 = 800 F CFA/kg.', math: 'k = 800 F/kg' },
          { title: 'Prix de 7 kg', explanation: '7 × 800 = 5 600 F CFA.', math: '7 × 800 = 5 600 F CFA', subResult: '5 600 F CFA' },
        ],
        'F CFA',
        '🍌'
      ),
      mkNum(
        'exo-4e-prop-3',
        'proportionnalite-pourcentages',
        'Ex 3 : Solde de 25% sur un sac d’école',
        2,
        'Un sac d’école affiché à 16 000 F CFA bénéficie d’une remise de 25%.\nQuel est son nouveau prix après réduction (en F CFA) ?',
        '12000',
        '25% de 16 000 = 16 000 ÷ 4 = 4 000 F CFA de remise.',
        'Nouveau prix = 16 000 − 4 000 = 12 000 F CFA.',
        [
          { title: 'Calculer la remise', explanation: '25% = un quart = 16 000 ÷ 4 = 4 000 F.', math: 'Remise = 4 000 F' },
          { title: 'Soustraire au prix de base', explanation: '16 000 − 4 000 = 12 000.', math: '12 000 F CFA', subResult: '12 000 F CFA' },
        ],
        'F CFA',
        '🎒'
      ),
      mkNum(
        'exo-4e-prop-4',
        'proportionnalite-pourcentages',
        'Ex 4 : Calculer un pourcentage de réussite',
        3,
        'Dans une classe de 4ème de 40 élèves, 30 élèves ont réussi le devoir surveillé.\nQuel pourcentage d’élèves a réussi ?',
        '75',
        '(30 ÷ 40) × 100.',
        '75% des élèves ont réussi.',
        [
          { title: 'Écrire la proportion', explanation: '30 sur 40 = 3/4 = 0,75.', math: '30 ÷ 40 = 0,75' },
          { title: 'Convertir en %', explanation: '0,75 × 100 = 75%.', math: '75%', subResult: '75%' },
        ],
        '%',
        '🎓'
      ),
      mkNum(
        'exo-4e-prop-5',
        'proportionnalite-pourcentages',
        'Ex 5 : Piège des deux variations successives',
        4,
        'Un maillot de foot des Panthères coûte 10 000 F CFA. Son prix augmente de 10%, puis baisse de 10%.\nQuel est son prix final (en F CFA) ?',
        '9900',
        '10 000 + 10% = 11 000 F. Ensuite enlève 10% DE 11 000 F !',
        'Prix final = 11 000 − 1 100 = 9 900 F CFA (et pas 10 000 !).',
        [
          { title: 'Hausse de 10%', explanation: '10 000 × 1,10 = 11 000 F CFA.', math: '10 000 + 1 000 = 11 000' },
          { title: 'Baisse de 10% sur 11 000', explanation: '10% de 11 000 = 1 100 F.', math: '11 000 - 1 100 = 9 900 F CFA', subResult: '9 900 F CFA' },
        ],
        'F CFA',
        '🐆'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 11 : VITESSE, DURÉE, DISTANCE
  // ==========================================
  {
    id: 'vitesse-duree-distance',
    domainId: 'donnees-fonctions',
    order: 11,
    title: 'Vitesse, durée, distance',
    badge: 'Chapitre 11 · 4ème',
    shortDesc: 'Formules v = d÷t, d = v×t, conversion heures/minutes en heures décimales et conversions m/s ↔ km/h.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    readingTimeMinutes: 12,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'vitesse',
    bossMeta: { name: 'CHRONOS TRANSGABONAIS', emoji: '🚄', xp: 160 },
    kokoSpeech:
      'Sur la ligne Owendo–Franceville, retiens le triangle magique d = v × t ! Et piège à éviter : 2 h 30 min = 2,5 h (et JAMAIS 2,3 h !).',
    keyFormulas: [
      'v = d ÷ t   |   d = v × t   |   t = d ÷ v',
      'Heures décimales : diviser les minutes par 60 (15 min = 0,25 h ; 30 min = 0,5 h ; 45 min = 0,75 h)',
      'Conversion : m/s ➔ km/h : multiplier par 3,6   |   km/h ➔ m/s : diviser par 3,6',
      'Vitesse moyenne globale = Distance TOTALE ÷ Temps TOTAL',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Vitesse, Durée, Distance',
      slogan: 'Maîtriser le triangle d = v × t et convertir les durées sans piège',
      summaryBulletPoints: [
        'Toujours vérifier que les unités correspondent (km et h ➔ km/h ; m et s ➔ m/s).',
        'Pour convertir des minutes en heures : diviser par 60 !',
        '1 heure = 3 600 secondes ; 1 km = 1 000 mètres ➔ facteur 3,6.',
        'Sur un aller-retour, la vitesse moyenne n’est PAS la moyenne des deux vitesses !',
      ],
      verticalFormulas: [
        {
          name: 'Distance avec heures et minutes',
          badge: '🚄',
          steps: ['v = 80 km/h, t = 2 h 30 min', 't = 2 + (30 ÷ 60) = 2,5 h', 'd = 80 × 2,5', 'd = 200 km'],
          resultHighlight: 'd = 200 km',
          explanation: '30 min = 0,5 h. On multiplie ensuite 80 par 2,5.',
        },
        {
          name: 'Convertir m/s en km/h',
          badge: '⚡',
          steps: ['v = 15 m/s', 'v = 15 × 3,6', 'v = 54 km/h'],
          resultHighlight: '54 km/h',
          explanation: 'En 1 h (3 600 s), on parcourt 3 600 × 15 m = 54 000 m = 54 km.',
        },
      ],
      kokoTip: 'Écris « 15 min = 0,25 h | 30 min = 0,5 h | 45 min = 0,75 h » en haut de ta feuille de brouillon dès le début du devoir !',
      pitfallToAvoid: 'Écrire 1 h 45 min = 1,45 h ! FAUX : 45 ÷ 60 = 0,75 donc 1 h 45 min = 1,75 h.',
    },
    sections: [
      {
        title: '1. Les trois formules du mouvement uniforme',
        explanation: [
          'La vitesse moyenne v d’un mobile parcourant une distance d pendant une durée t est donnée par v = d ÷ t.',
          'Par produit en croix, on en déduit d = v × t et t = d ÷ v.',
        ],
        rules: [
          {
            name: 'Triangle d = v × t & Conversion d’unités',
            description: 'Pour passer de m/s en km/h, on multiplie par 3,6. Dans l’autre sens, on divise par 3,6.',
            example: 'Train Owendo–Franceville : 650 km en 10 h | v = 650 ÷ 10 = 65 km/h',
          },
        ],
      },
      {
        title: '2. Durées décimales vs Durées sexagésimales (h / min)',
        explanation: [
          'Une heure comporte 60 minutes (base 60) et non 100 minutes !',
        ],
        rules: [
          {
            name: 'Convertir min ➔ heures décimales',
            description: 'Diviser le nombre de minutes par 60.',
            example: '1 h 12 min | 12 ÷ 60 = 0,2 h | 1 h 12 min = 1,2 h',
          },
        ],
        commonMistakes: [
          'Faire la moyenne arithmétique de deux vitesses sur deux trajets différents.',
        ],
      },
    ],
    exercises: pickExercises(
      CHAP6_EXERCISES,
      ['exo-4e-6-3', 'exo-4e-6-4', 'exo-4e-6-6', 'exo-4e-6-10', 'exo-4e-6-13', 'exo-4e-6-16', 'exo-4e-6-18'],
      'vitesse-duree-distance'
    ),
  },

  // ==========================================
  // CHAPITRE 12 : STATISTIQUES (MOYENNE, MÉDIANE, ÉTENDUE)
  // ==========================================
  {
    id: 'statistiques-moyenne-mediane',
    domainId: 'donnees-fonctions',
    order: 12,
    title: 'Statistiques : moyenne, médiane et étendue',
    badge: 'Chapitre 12 · 4ème',
    shortDesc: 'Effectifs, fréquences (%), moyenne simple et pondérée par coefficients, médiane et étendue.',
    themeColor: '#059669',
    themeGradient: 'from-emerald-500 via-green-500 to-lime-400',
    readingTimeMinutes: 12,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'statistiques',
    bossMeta: { name: 'ANALYSTE DES DONNÉES', emoji: '📊', xp: 150 },
    kokoSpeech:
      'Pour trouver la MÉDIANE sans te tromper : commence TOUJOURS par classer toutes les valeurs de la plus petite à la plus grande ! Et l’étendue, c’est Max − Min !',
    keyFormulas: [
      'Moyenne simple = Somme des valeurs ÷ Effectif total',
      'Moyenne pondérée = Somme(valeur × coefficient) ÷ Somme des coefficients',
      'Fréquence (%) = (Effectif ÷ Effectif total) × 100',
      'Étendue = Valeur maximale − Valeur minimale',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Moyenne, Médiane & Étendue',
      slogan: 'Maîtriser les indicateurs de position et de dispersion',
      summaryBulletPoints: [
        'Moyenne pondérée : multiplie chaque valeur par son coefficient/effectif puis divise par l’effectif TOTAL.',
        'Médiane : 50% des données en dessous, 50% au-dessus. TRIER D’ABORD dans l’ordre croissant !',
        'Si effectif impair (ex: 5 valeurs) : la médiane est la 3ème valeur.',
        'Si effectif pair (ex: 6 valeurs) : la médiane est la demi-somme de la 3ème et 4ème valeur.',
        'Étendue : mesure l’écart entre les deux extrêmes (Max − Min).',
      ],
      verticalFormulas: [
        {
          name: 'Moyenne pondérée',
          badge: '📊',
          steps: ['Notes : 10 (coef 1) et 16 (coef 2)', 'Total = 10×1 + 16×2 = 42', 'Effectif = 1 + 2 = 3', 'Moyenne = 42 ÷ 3 = 14'],
          resultHighlight: '14 / 20',
          explanation: 'La note coefficient 2 pèse deux fois plus lourd dans la moyenne.',
        },
        {
          name: 'Médiane & Étendue',
          badge: '🎯',
          steps: ['Série triée : 8 ; 11 ; 13 ; 15 ; 19', 'Médiane (milieu) = 13', 'Étendue = 19 - 8 = 11'],
          resultHighlight: 'Méd = 13 | Ét = 11',
          explanation: 'Sur 5 valeurs ordonnées, la 3ème est exactement au milieu.',
        },
      ],
      kokoTip: 'Pour ne pas oublier de trier la série avant la médiane, barre la plus petite valeur et la plus grande deux par deux jusqu’au milieu !',
      pitfallToAvoid: 'Calculer la médiane sur une liste en désordre, ou diviser par le nombre de lignes au lieu de la somme des effectifs !',
    },
    sections: [
      {
        title: '1. Fréquences et Moyennes (simple & pondérée)',
        explanation: [
          'La fréquence d’une valeur est égale à son effectif divisé par l’effectif total. Elle est toujours comprise entre 0 et 1 (ou entre 0% et 100%).',
        ],
        rules: [
          {
            name: 'Moyenne pondérée',
            description: 'M = (x₁n₁ + x₂n₂ + ... + xₖnₖ) ÷ N.',
            example: '12 (eff. 2) et 15 (eff. 4) | M = (12×2 + 15×4) ÷ (2 + 4) = 84 ÷ 6 = 14',
          },
        ],
      },
      {
        title: '2. Médiane et Étendue',
        explanation: [
          'La médiane est une valeur qui partage la série ORDONNÉE en deux groupes de même effectif.',
          'L’étendue (Max − Min) indique si les valeurs sont regroupées ou très dispersées.',
        ],
        rules: [
          {
            name: 'Méthode de la médiane',
            description: '1) Ordonner en ordre croissant. 2) Prendre la valeur centrale (ou la moyenne des 2 valeurs centrales).',
            example: 'Série : 10 ; 12 ; 16 ; 18 (4 valeurs) ➔ Médiane = (12 + 16) ÷ 2 = 14',
          },
        ],
      },
    ],
    exercises: [
      ...pickExercises(
        CHAP6_EXERCISES,
        ['exo-4e-6-5', 'exo-4e-6-9', 'exo-4e-6-11', 'exo-4e-6-15', 'exo-4e-6-19'],
        'statistiques-moyenne-mediane'
      ),
      mkNum(
        'exo-4e-stat-extra',
        'statistiques-moyenne-mediane',
        'Ex 6 : Étendue des températures à Makokou',
        2,
        'Voici les températures relevées sur une semaine à Makokou (en °C) :\n24° ; 29° ; 22° ; 31° ; 26° ; 28°.\nCalculer l’étendue de cette série.',
        '9',
        'Étendue = Température maximale − Température minimale.',
        '31 − 22 = 9 °C.',
        [
          { title: 'Repérer Max et Min', explanation: 'Max = 31 °C ; Min = 22 °C.', math: 'Max = 31 | Min = 22' },
          { title: 'Soustraire', explanation: '31 − 22 = 9.', math: 'Étendue = 31 - 22 = 9 °C', subResult: '9 °C' },
        ],
        '°C',
        '🌡️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 13 : PROBABILITÉS
  // ==========================================
  {
    id: 'probabilites',
    domainId: 'donnees-fonctions',
    order: 13,
    title: 'Probabilités',
    badge: 'Chapitre 13 · 4ème',
    shortDesc: 'Expériences aléatoires, issues, équiprobabilité P = favorables ÷ possibles et événement contraire.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-purple-500 to-pink-500',
    readingTimeMinutes: 11,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'probabilites',
    bossMeta: { name: 'MAÎTRE DU HASARD', emoji: '🎲', xp: 150 },
    kokoSpeech:
      'Une probabilité est TOUJOURS comprise entre 0 (événement impossible) et 1 (événement certain) ! Et si tu connais P(A), la probabilité contraire vaut 1 − P(A) !',
    keyFormulas: [
      '0 ≤ P(A) ≤ 1  (jamais négatif, jamais > 1 !)',
      'Équiprobabilité : P(A) = Nombre d’issues favorables ÷ Nombre total d’issues',
      'Événement contraire (non A) : P(Ā) = 1 − P(A)',
      'La somme des probabilités de toutes les issues vaut toujours 1 (ou 100%)',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Probabilités',
      slogan: 'Dénombrer les cas favorables et utiliser l’événement contraire',
      summaryBulletPoints: [
        'Une expérience est aléatoire si l’on ne peut pas prévoir son résultat à l’avance avec certitude (lancer de dé, tirage au sort).',
        'Événement impossible ➔ P = 0. Événement certain ➔ P = 1.',
        'La probabilité s’exprime en fraction irréductible, en nombre décimal (ex: 0,25) ou en pourcentage (25%).',
        'Astuce « au moins un » ou contraire : P(pas rouge) = 1 − P(rouge).',
      ],
      verticalFormulas: [
        {
          name: 'Tirage dans un sac (Équiprobabilité)',
          badge: '🎱',
          steps: ['Sac : 3 boules vertes, 5 jaunes, 2 bleues', 'Total = 3 + 5 + 2 = 10 boules', 'P(Verte) = 3/10 = 0,3'],
          resultHighlight: 'P(Verte) = 3/10 = 30%',
          explanation: 'On compte les boules vertes (3) divisées par le nombre total (10).',
        },
        {
          name: 'Événement contraire',
          badge: '🔄',
          steps: ['Si P(Gagner) = 0,35', 'P(Perdre) = 1 - 0,35', 'P(Perdre) = 0,65'],
          resultHighlight: 'P(Perdre) = 0,65',
          explanation: 'Gagner et Perdre forment deux événements contraires : leur somme fait 1.',
        },
      ],
      kokoTip: 'Si on te demande la probabilité de tirer « un multiple de 2 » sur un dé à 6 faces, écris d’abord la liste des faces qui marchent : {2 ; 4 ; 6} ➔ 3 chances sur 6 = 1/2 !',
      pitfallToAvoid: 'Donner une probabilité plus grande que 1 (ex: « 3 chances » sans diviser par le total) !',
    },
    sections: [
      {
        title: '1. Vocabulaire et calcul en situation d’équiprobabilité',
        explanation: [
          'Quand toutes les issues ont la même chance de se réaliser (dé non truqué, boules indiscernables au toucher), on parle d’équiprobabilité.',
        ],
        rules: [
          {
            name: 'Formule de Laplace',
            description: 'P(A) = (Nombre d’issues réalisant A) ÷ (Nombre total d’issues possibles).',
            example: 'Dé à 6 faces, obtenir > 4 : issues {5 ; 6} | P = 2/6 = 1/3',
          },
        ],
        commonMistakes: [
          'Oublier de compter toutes les issues pour le dénominateur total.',
        ],
      },
      {
        title: '2. Événement contraire et répétition',
        explanation: [
          'L’événement contraire de A (noté Ā) se réalise exactement quand A ne se réalise pas. On a toujours P(A) + P(Ā) = 1.',
        ],
        rules: [
          {
            name: 'Calculer par le contraire',
            description: 'P(Ā) = 1 − P(A).',
            example: 'Tombola de l’école : P(lot) = 2/15 ➔ P(aucun lot) = 1 - 2/15 = 13/15',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-proba-1',
        'probabilites',
        'Ex 1 : Lancer un dé équilibré à 6 faces',
        1,
        'On lance un dé équilibré à 6 faces (numérotées de 1 à 6). Quelle est la probabilité d’obtenir un nombre PAIR ?',
        ['1/2', '1/6', '2/3', '1/3'],
        '1/2',
        'Quelles faces sont paires parmi {1, 2, 3, 4, 5, 6} ?',
        'Les faces paires sont {2, 4, 6}, soit 3 issues sur 6 : 3/6 = 1/2.',
        [
          { title: 'Lister les cas favorables', explanation: 'Pairs = 2, 4, 6 (3 faces).', math: 'Favorables = 3 | Total = 6' },
          { title: 'Simplifier', explanation: '3/6 = 1/2.', math: 'P = 3/6 = 1/2', subResult: '1/2' },
        ],
        '🎲'
      ),
      mkQcm(
        'exo-4e-proba-2',
        'probabilites',
        'Ex 2 : Tirage dans une urne aux couleurs du Gabon',
        2,
        'Un sac contient 4 billes vertes, 3 billes jaunes et 3 billes bleues.\nOn tire une bille au hasard. Probabilité qu’elle soit VERTE ?',
        ['2/5', '4/6', '1/4', '3/10'],
        '2/5',
        'Total = 4 + 3 + 3 = 10 billes. Calcule 4/10 puis simplifie !',
        'P(Verte) = 4/10 = 2/5.',
        [
          { title: 'Calculer le total', explanation: '4 + 3 + 3 = 10 billes.', math: 'Total = 10' },
          { title: 'Calculer et simplifier', explanation: '4/10 = 2/5.', math: 'P = 4/10 = 2/5', subResult: '2/5' },
        ],
        '🇬🇦'
      ),
      mkQcm(
        'exo-4e-proba-3',
        'probabilites',
        'Ex 3 : Événement contraire (Ne pas tirer de bleu)',
        2,
        'Dans le même sac (4 vertes, 3 jaunes, 3 bleues), quelle est la probabilité de NE PAS tirer une bille bleue ?',
        ['0,7', '0,3', '0,4', '0,6'],
        '0,7',
        'P(non bleue) = 1 − P(bleue).',
        'P(bleue) = 3/10 = 0,3 donc P(non bleue) = 1 − 0,3 = 0,7.',
        [
          { title: 'Probabilité du contraire', explanation: 'P(bleue) = 3/10 = 0,3.', math: 'P(non bleue) = 1 - 0,3' },
          { title: 'Calculer', explanation: '1 − 0,3 = 0,7.', math: '= 0,7', subResult: '0,7' },
        ],
        '🔄'
      ),
      mkQcm(
        'exo-4e-proba-4',
        'probabilites',
        'Ex 4 : Quelle probabilité est impossible ?',
        3,
        'Un élève propose 4 résultats pour la probabilité d’un événement. Lequel est OBLIGATOIREMENT FAUX ?',
        ['1,25', '0', '1', '0,04'],
        '1,25',
        'Une probabilité est toujours comprise entre 0 et 1 !',
        '1,25 > 1 : aucune probabilité ne peut dépasser 1.',
        [
          { title: 'Vérifier l’encadrement 0 ≤ P ≤ 1', explanation: '0 = impossible ; 1 = certain ; 1,25 > 1 est impossible.', math: '1,25 > 1 ➔ Impossible', subResult: '1,25' },
        ],
        '⚠️'
      ),
      mkQcm(
        'exo-4e-proba-5',
        'probabilites',
        'Ex 5 : Tombola de la fête scolaire (F CFA)',
        4,
        'Une tombola vend 200 billets à 500 F CFA l’un. Il y a 10 lots à gagner.\nQuelle est la probabilité en pourcentage de gagner un lot avec 1 billet ?',
        ['5%', '10%', '20%', '2,5%'],
        '5%',
        'Calcule (10 ÷ 200) × 100.',
        '10/200 = 5/100 = 5%.',
        [
          { title: 'Calculer la fraction', explanation: '10 gagnants sur 200 billets.', math: 'P = 10/200 = 5/100' },
          { title: 'Exprimer en %', explanation: '5/100 = 5%.', math: '5%', subResult: '5%' },
        ],
        '🎟️'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 14 : FONCTIONS & REPRÉSENTATION GRAPHIQUE
  // ==========================================
  {
    id: 'fonctions-representation-graphique',
    domainId: 'donnees-fonctions',
    order: 14,
    title: 'Fonctions : notion, tableau de valeurs, représentation graphique',
    badge: 'Chapitre 14 · 4ème',
    shortDesc: 'Machine f(x), calculer une image, lire un antécédent sur un tableau ou une courbe et fonctions linéaires.',
    themeColor: '#3b82f6',
    themeGradient: 'from-blue-500 via-sky-500 to-cyan-400',
    readingTimeMinutes: 13,
    visualizerType: 'calcul-litteral',
    illustrationKey: 'fonctions',
    bossMeta: { name: 'MAÎTRE DES COURBES', emoji: '📈', xp: 170 },
    kokoSpeech:
      'Une fonction f est une machine mathématique : tu entres x (antécédent, axe horizontal) et il sort f(x) (image, axe vertical) ! En F CFA, le prix d’un taxi peut s’écrire f(x) = 300x + 500 !',
    keyFormulas: [
      'Image de x : on calcule f(x) en remplaçant la lettre x par le nombre',
      'Antécédent de y : on cherche quel x vérifie f(x) = y (en résolvant l’équation)',
      'Graphique : x se lit sur l’axe horizontal (abscisses), f(x) sur l’axe vertical (ordonnées)',
      'Fonction linéaire : f(x) = a·x (droite passant par O) | Fonction affine : f(x) = ax + b',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Notion de Fonction',
      slogan: 'Distinguer image (remplacer x) et antécédent (résoudre f(x) = y)',
      summaryBulletPoints: [
        'Notation : f : x ↦ f(x) se lit « à x, la fonction f associe f(x) ».',
        'Un nombre x n’a jamais plus d’UNE image par f, mais une valeur y peut avoir 0, 1 ou plusieurs antécédents !',
        'Pour calculer l’image de 4 par f(x) = 2x - 3 : on remplace x par 4 ➔ f(4) = 2×4 - 3 = 5.',
        'Pour trouver l’antécédent de 7 par f(x) = 2x - 3 : on résout 2x - 3 = 7 ➔ x = 5.',
      ],
      verticalFormulas: [
        {
          name: 'Calculer une image f(4)',
          badge: '⚙️',
          steps: ['f(x) = 3x + 500', 'f(4) = 3 × 4 + 500', 'f(4) = 12 + 500', 'f(4) = 512'],
          resultHighlight: 'Image = 512',
          explanation: 'On remplace x par 4 dans la formule de f(x).',
        },
        {
          name: 'Trouver un antécédent de 17',
          badge: '🔍',
          steps: ['f(x) = 4x - 3 = 17', '4x = 17 + 3 = 20', 'x = 20 ÷ 4 = 5'],
          resultHighlight: 'Antécédent = 5',
          explanation: 'On cherche le nombre x de départ qui donne 17 à la sortie.',
        },
      ],
      kokoTip: 'Pour retenir les axes : « A » comme Antécédent = « A » comme Abscisse (horizontal) ! Et « O » comme Ordonnée = vertical !',
      pitfallToAvoid: 'Confondre « image de 3 » (calculer f(3)) et « antécédent de 3 » (résoudre f(x) = 3) !',
    },
    sections: [
      {
        title: '1. Machine à fonction : Image et Antécédent',
        explanation: [
          'Une fonction associe à chaque nombre de départ x au plus un nombre d’arrivée f(x).',
          'Si f(2) = 7, on dit que 7 est l’IMAGE de 2, et que 2 est un ANTÉCÉDENT de 7.',
        ],
        rules: [
          {
            name: 'Calcul d’image vs Recherche d’antécédent',
            description: 'Image ➔ remplacer x. Antécédent ➔ résoudre l’équation f(x) = nombre.',
            example: 'g(x) = x² + 1 | Image de 3 : g(3) = 3² + 1 = 10',
          },
        ],
        commonMistakes: [
          'Oublier les parenthèses avec les nombres négatifs : pour g(x) = x², g(-3) = (-3)² = +9 !',
        ],
      },
      {
        title: '2. Tableau de valeurs et représentation graphique',
        explanation: [
          'Chaque colonne du tableau de valeurs donne les coordonnées d’un point M(x ; f(x)) à placer dans un repère.',
        ],
        rules: [
          {
            name: 'Appartenance à la courbe',
            description: 'Un point A(xₐ ; yₐ) est sur la courbe représentative de f si et seulement si f(xₐ) = yₐ.',
            example: 'Tarif taxi Libreville : T(x) = 400x + 500 | Pour x = 3 km ➔ T(3) = 1 700 F CFA',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'exo-4e-fonc-1',
        'fonctions-representation-graphique',
        'Ex 1 : Calculer l’image d’un nombre positif',
        1,
        'Soit la fonction f(x) = 4x − 5.\nCalculer l’image de 6 par f, c’est-à-dire f(6).',
        '19',
        'Remplace x par 6 dans 4x − 5.',
        'f(6) = 4 × 6 − 5 = 24 − 5 = 19.',
        [
          { title: 'Remplacer x par 6', explanation: '4 × 6 − 5.', math: 'f(6) = 4 × 6 - 5' },
          { title: 'Calculer', explanation: '24 − 5 = 19.', math: 'f(6) = 19', subResult: '19' },
        ],
        undefined,
        '⚙️'
      ),
      mkNum(
        'exo-4e-fonc-2',
        'fonctions-representation-graphique',
        'Ex 2 : Image avec un carré et un négatif',
        2,
        'Soit g(x) = x² + 3.\nCalculer g(−4).',
        '19',
        'Attention aux parenthèses : (−4)² = +16 !',
        'g(−4) = (−4)² + 3 = 16 + 3 = 19.',
        [
          { title: 'Mettre −4 entre parenthèses', explanation: '(−4)² = +16.', math: 'g(-4) = (-4)² + 3' },
          { title: 'Additionner', explanation: '16 + 3 = 19.', math: 'g(-4) = 19', subResult: '19' },
        ],
        undefined,
        '⚠️'
      ),
      mkNum(
        'exo-4e-fonc-3',
        'fonctions-representation-graphique',
        'Ex 3 : Trouver l’antécédent d’un nombre',
        3,
        'Soit h(x) = 3x + 2.\nTrouver l’antécédent de 20 par la fonction h.',
        '6',
        'Résous l’équation 3x + 2 = 20.',
        '3x = 18 donc x = 6.',
        [
          { title: 'Poser h(x) = 20', explanation: '3x + 2 = 20.', math: '3x + 2 = 20 | 3x = 18' },
          { title: 'Diviser par 3', explanation: 'x = 18 ÷ 3 = 6.', math: 'x = 6', subResult: '6' },
        ],
        undefined,
        '🔍'
      ),
      mkQcm(
        'exo-4e-fonc-4',
        'fonctions-representation-graphique',
        'Ex 4 : Point appartenant à la courbe',
        3,
        'La fonction est f(x) = 2x + 1. Parmi ces points, lequel est sur la courbe représentative de f ?',
        ['A(3 ; 7)', 'B(3 ; 6)', 'C(2 ; 4)', 'D(0 ; 2)'],
        'A(3 ; 7)',
        'Vérifie pour chaque point si f(x) donne exactement l’ordonnée y.',
        'Pour x = 3 : f(3) = 2 × 3 + 1 = 7, donc A(3 ; 7) est sur la courbe !',
        [
          { title: 'Tester A(3 ; 7)', explanation: 'f(3) = 2(3) + 1 = 7.', math: 'f(3) = 7 = y_A', subResult: 'A(3 ; 7)' },
        ],
        '📍'
      ),
      mkNum(
        'exo-4e-fonc-5',
        'fonctions-representation-graphique',
        'Ex 5 : Modéliser un tarif de taxi à Libreville (F CFA)',
        4,
        'Un taxi facture 500 F CFA de prise en charge plus 300 F CFA par km parcouru : P(x) = 300x + 500.\nCombien paie-t-on pour 8 km (en F CFA) ?',
        '2900',
        'Calcule P(8) = 300 × 8 + 500.',
        'P(8) = 2 400 + 500 = 2 900 F CFA.',
        [
          { title: 'Calculer P(8)', explanation: '300 × 8 = 2 400 F.', math: 'P(8) = 300 × 8 + 500' },
          { title: 'Ajouter la prise en charge', explanation: '2 400 + 500 = 2 900 F CFA.', math: 'P(8) = 2 900 F CFA', subResult: '2 900 F CFA' },
        ],
        'F CFA',
        '🚕'
      ),
    ],
  },

  // ==========================================
  // CHAPITRE 15 : STATISTIQUES (QUARTILES, BOÎTE, HISTOGRAMME)
  // ==========================================
  {
    id: 'statistiques-quartiles-diagrammes',
    domainId: 'donnees-fonctions',
    order: 15,
    title: 'Statistiques : quartiles, diagramme en boîte, histogramme',
    badge: 'Chapitre 15 · 4ème',
    shortDesc: '1er et 3e quartiles (Q1, Q3), écart interquartile, diagramme en boîte à moustaches et histogramme.',
    themeColor: '#0d9488',
    themeGradient: 'from-teal-500 via-cyan-500 to-sky-500',
    readingTimeMinutes: 12,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'quartiles',
    bossMeta: { name: 'MAÎTRE DES QUARTILES', emoji: '📦', xp: 160 },
    kokoSpeech:
      'Si la médiane coupe la classe en deux (50%), les QUARTILES Q1 et Q3 la coupent en QUATRE quarts (25% et 75%) ! Et sur un histogramme, c’est la surface des barres qui compte !',
    keyFormulas: [
      'Q1 (1er quartile) : au moins 25% (1/4) des valeurs sont ≤ Q1',
      'Q3 (3e quartile) : au moins 75% (3/4) des valeurs sont ≤ Q3',
      'Écart interquartile = Q3 − Q1 (contient les 50% centraux)',
      'Diagramme en boîte : Min — [ Q1 | Médiane | Q3 ] — Max',
    ],
    memoSheet: {
      title: 'Fiche Mémo : Quartiles & Diagrammes',
      slogan: 'Découper une série en 4 quarts et lire un diagramme en boîte',
      summaryBulletPoints: [
        'Toujours ORDONNER la série par ordre croissant avant de chercher Q1, Médiane ou Q3 !',
        'Rang de Q1 : on calcule N ÷ 4 (on arrondit toujours à l’entier au-dessus si ce n’est pas exact).',
        'Rang de Q3 : on calcule (3 × N) ÷ 4 (arrondi au-dessus si décimal).',
        'Dans un diagramme en boîte à moustaches, la boîte centrale va de Q1 à Q3 et contient la moitié centrale des élèves.',
      ],
      verticalFormulas: [
        {
          name: 'Trouver Q1 et Q3 sur 12 notes triées',
          badge: '📊',
          steps: ['Effectif N = 12', 'Rang Q1 = 12 ÷ 4 = 3e valeur', 'Rang Q3 = (3×12) ÷ 4 = 9e valeur', 'Écart interquartile = Q3 - Q1'],
          resultHighlight: '3e et 9e valeurs',
          explanation: 'On partage 12 notes ordonnées en 4 groupes de 3 notes.',
        },
      ],
      kokoTip: 'Retiens l’ordre sur la boîte à moustaches de gauche à droite : Minimum ➔ Q1 (bord gauche) ➔ Médiane (trait intérieur) ➔ Q3 (bord droit) ➔ Maximum !',
      pitfallToAvoid: 'Confondre l’étendue (Max − Min) avec l’écart interquartile (Q3 − Q1) !',
    },
    sections: [
      {
        title: '1. Quartiles Q1, Q3 et Diagramme en boîte',
        explanation: [
          'Les quartiles complètent la médiane en donnant la répartition au quart (25%) et aux trois quarts (75%) de la série ordonnée.',
          'Le diagramme en boîte (ou boîte à moustaches) résume visuellement 5 nombres : Min, Q1, Médiane, Q3, Max.',
        ],
        rules: [
          {
            name: 'Calcul des rangs de Q1 et Q3',
            description: 'Rang(Q1) = N ÷ 4 (arrondi au supérieur) ; Rang(Q3) = 3N ÷ 4 (arrondi au supérieur).',
            example: 'Sur 10 notes ordonnées : 10 ÷ 4 = 2,5 ➔ Q1 est la 3ème note ; 30 ÷ 4 = 7,5 ➔ Q3 est la 8ème note',
          },
        ],
      },
      {
        title: '2. Histogramme pour données regroupées en classes',
        explanation: [
          'Quand les données sont regroupées par tranches (ex : dépenses de 0 à 5 000 F, de 5 000 à 10 000 F...), on utilise un histogramme où les rectangles sont collés les uns aux autres.',
        ],
        rules: [
          {
            name: 'Centre de classe',
            description: 'Pour estimer la moyenne d’un histogramme, on utilise le milieu de chaque classe.',
            example: 'Classe [10 ; 14[ ➔ centre = (10 + 14) ÷ 2 = 12',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'exo-4e-quar-1',
        'statistiques-quartiles-diagrammes',
        'Ex 1 : Signification du premier quartile Q1',
        1,
        'Dans une série statistique, que signifie Q1 = 9 ?',
        [
          'Au moins 25% des valeurs sont inférieures ou égales à 9',
          'Exactement 9 élèves ont la moyenne',
          'La moitié des valeurs vaut 9',
          '75% des valeurs sont ≤ 9',
        ],
        'Au moins 25% des valeurs sont inférieures ou égales à 9',
        '« Quartile » vient de « quart » = 1/4 = 25%.',
        'Par définition, Q1 correspond à au moins 25% des données ≤ Q1.',
        [
          { title: 'Définition de Q1', explanation: '1er quartile = 1/4 des effectifs = 25%.', math: 'Q1 ➔ ≥ 25% des valeurs ≤ Q1', subResult: '≥ 25% ≤ Q1' },
        ],
        '📊'
      ),
      mkNum(
        'exo-4e-quar-2',
        'statistiques-quartiles-diagrammes',
        'Ex 2 : Trouver Q1 sur une série ordonnée',
        2,
        'Voici 8 notes de maths déjà triées :\n6 ; 8 ; 10 ; 11 ; 13 ; 14 ; 16 ; 18.\nQuelle est la valeur de Q1 ?',
        '8',
        'Effectif N = 8. Calcule N ÷ 4 = 2 ➔ prends la 2ème valeur.',
        'La 2ème valeur de la série ordonnée est 8, donc Q1 = 8.',
        [
          { title: 'Calculer le rang de Q1', explanation: '8 ÷ 4 = 2ème position.', math: 'Rang Q1 = 2' },
          { title: 'Lire la 2ème note', explanation: '6 ; [8] ; 10...', math: 'Q1 = 8', subResult: '8' },
        ],
        '/20',
        '🔢'
      ),
      mkNum(
        'exo-4e-quar-3',
        'statistiques-quartiles-diagrammes',
        'Ex 3 : Calculer l’écart interquartile',
        3,
        'Sur un diagramme en boîte, on lit :\nMin = 4 ; Q1 = 9 ; Médiane = 12 ; Q3 = 15 ; Max = 19.\nCalculer l’écart interquartile.',
        '6',
        'Écart interquartile = Q3 − Q1.',
        '15 − 9 = 6.',
        [
          { title: 'Identifier Q3 et Q1', explanation: 'Q3 = 15 et Q1 = 9.', math: 'Q3 - Q1 = 15 - 9' },
          { title: 'Soustraire', explanation: '15 − 9 = 6.', math: '6', subResult: '6' },
        ],
        undefined,
        '📦'
      ),
      mkNum(
        'exo-4e-quar-4',
        'statistiques-quartiles-diagrammes',
        'Ex 4 : Centre de classe dans un histogramme',
        2,
        'Dans un histogramme des prix au marché, une barre couvre l’intervalle [2 000 ; 4 000[ F CFA.\nQuel est le centre de cette classe (en F CFA) ?',
        '3000',
        'Fais la moyenne des deux bornes : (2 000 + 4 000) ÷ 2.',
        'Centre = 6 000 ÷ 2 = 3 000 F CFA.',
        [
          { title: 'Additionner les bornes', explanation: '2 000 + 4 000 = 6 000.', math: '(2 000 + 4 000) ÷ 2' },
          { title: 'Diviser par 2', explanation: '6 000 ÷ 2 = 3 000.', math: '3 000 F CFA', subResult: '3 000 F CFA' },
        ],
        'F CFA',
        '📈'
      ),
      mkQcm(
        'exo-4e-quar-5',
        'statistiques-quartiles-diagrammes',
        'Ex 5 : Interpréter une boîte à moustaches',
        4,
        'Une boîte s’étend de Q1 = 10 à Q3 = 16. Quel pourcentage des élèves a une note comprise entre 10 et 16 ?',
        ['Environ 50%', '25%', '75%', '100%'],
        'Environ 50%',
        'De Q1 (25%) à Q3 (75%), quel pourcentage y a-t-il ?',
        '75% − 25% = 50% : la boîte centrale contient toujours environ la moitié centrale des données !',
        [
          { title: 'Soustraire les deux repères', explanation: 'Q3 = 75% ; Q1 = 25%.', math: '75% - 25% = 50%', subResult: '50%' },
        ],
        '🎯'
      ),
    ],
  },
];
