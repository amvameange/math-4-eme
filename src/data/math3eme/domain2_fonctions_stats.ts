import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_3EME_FONCTIONS_STATS: Chapter[] = [
  {
    id: 'math3-applications-affines',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'donnees-fonctions',
    order: 5,
    title: 'Applications Linéaires (f(x) = ax) & Applications Affines (f(x) = ax + b)',
    badge: 'Maths 3ème · Ch. 5',
    shortDesc: 'Calcul d’image et d’antécédent, détermination de a = [f(x₂)−f(x₁)]/(x₂−x₁), sens de variation et représentation graphique.',
    themeColor: '#3b82f6',
    themeGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    readingTimeMinutes: 15,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'fonctions',
    bossMeta: { name: 'MAÎTRE DES DROITES AFFINES', emoji: '📈', xp: 170 },
    kokoSpeech:
      'Pour trouver la formule d’une application affine f(x) = ax + b connaissant deux points A(x₁ ; y₁) et B(x₂ ; y₂), calcule d’abord le coefficient directeur a = (y₂ − y₁) ÷ (x₂ − x₁), puis trouve b en remplaçant avec un des deux points !',
    realWorldHook: {
      title: 'Facturation d’un taxi-compteur ou d’un forfait SEEG',
      scenario:
        'Un chauffeur à Libreville demande 1 000 F CFA de prise en charge fixe (b = 1 000) plus 300 F CFA par kilomètre parcouru (a = 300) : le prix est f(x) = 300x + 1 000.',
      question:
        'Comment calculer le prix pour 8 km (image), trouver la distance pour 4 600 F (antécédent) et tracer cette droite ?',
    },
    unitsTable: [
      { symbol: 'f(x) = ax', quantity: 'Application linéaire (proportionnalité)', unit: 'Droite passant par O(0 ; 0)', instrument: 'a = f(x) ÷ x' },
      { symbol: 'f(x) = ax + b', quantity: 'Application affine', unit: 'Droite passant par (0 ; b)', instrument: 'a = pente, b = ordonnée à l’origine' },
      { symbol: 'a = Δy / Δx', quantity: 'Coefficient directeur (pente)', unit: '[f(x₂) − f(x₁)] ÷ (x₂ − x₁)', instrument: 'Croissante si a > 0, décroissante si a < 0' },
    ],
    experimentOrActivity: {
      title: 'Lire graphiquement a et b sur la droite représentative',
      materials: ['1 repère orthonormé', 'Une droite tracée'],
      observation:
        'L’ordonnée b se lit directement là où la droite coupe l’axe vertical des y (pour x = 0). En avançant de +1 unité à droite, on monte (ou descend) de a unités.',
      conclusion:
        'Deux points suffisent pour tracer une droite affine ; la lecture graphique permet un contrôle rapide des calculs.',
    },
    revisionChecklist: [
      'Je sais calculer l’image f(k) (remplacer x par k) et l’antécédent de m (résoudre ax + b = m).',
      'Je sais retrouver a et b à partir de deux valeurs f(x₁) et f(x₂).',
      'Je connais le sens de variation : a > 0 (croissante), a < 0 (décroissante), a = 0 (constante).',
    ],
    keyFormulas: [
      'Coefficient directeur : a = [f(x₂) − f(x₁)] ÷ (x₂ − x₁)',
      'Ordonnée à l’origine : b = f(x₁) − a × x₁',
      'Antécédent de y : résoudre a x + b = y  ➔  x = (y − b) ÷ a',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Applications Affines & Linéaires',
      slogan: 'Image = remplacer x · Antécédent = résoudre f(x) = y · a = Δy/Δx',
      summaryBulletPoints: [
        'Toute fonction linéaire est une fonction affine particulière où b = 0.',
        'Si deux droites ont le même coefficient directeur a, elles sont PARALLÈLES.',
      ],
      verticalFormulas: [
        {
          name: 'Trouver f(x) = ax + b avec f(2) = 7 et f(5) = 16',
          badge: '📈',
          steps: [
            '1) a = (f(5) − f(2)) ÷ (5 − 2)',
            '   a = (16 − 7) ÷ (5 − 2) = 9 ÷ 3 = 3',
            '2) f(2) = 7  ➔  3 × 2 + b = 7  ➔  6 + b = 7  ➔  b = 1',
            '3) Conclusion : f(x) = 3x + 1',
          ],
          resultHighlight: 'f(x) = 3x + 1',
          explanation: 'On calcule la pente a puis l’ordonnée à l’origine b.',
        },
      ],
      kokoTip: 'Pour l’antécédent de 19 par f(x) = 3x + 1, ne calcule surtout pas f(19) ! Pose l’équation 3x + 1 = 19 ➔ 3x = 18 ➔ x = 6 !',
      pitfallToAvoid: 'Inverser numérateur et dénominateur dans a = (x₂ − x₁)/(y₂ − y₁) : FAUX ! Toujours les y (images f(x)) en HAUT !',
    },
    sections: [
      {
        title: '1. Applications linéaires et affines au BEPC',
        explanation: [
          'Une application affine associe à tout nombre x le nombre f(x) = ax + b (a est le coefficient directeur et b l’ordonnée à l’origine).',
          'Graphiquement, elle est représentée par une droite passant par le point (0 ; b).',
        ],
        rules: [
          {
            name: 'Sens de variation d’une fonction affine',
            description: 'Si a > 0, f est croissante (la droite monte). Si a < 0, f est décroissante (la droite descend).',
            example: 'g(x) = −2x + 5 | Comme a = −2 < 0, g est strictement décroissante sur ℝ.',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-5-1',
        'math3-applications-affines',
        'Ex 1 : Calculer un antécédent',
        1,
        'Soit l’application affine f(x) = 4x − 7.\nCalculer l’antécédent du nombre 13 par f.',
        '5',
        'Résous l’équation 4x − 7 = 13.',
        '4x = 20 donc l’antécédent est x = 5.',
        [
          {
            title: 'Poser l’équation f(x) = 13',
            explanation: 'Chercher l’antécédent de 13 revient à trouver x tel que f(x) = 13.',
            math: '4x − 7 = 13 | 4x = 13 + 7 | 4x = 20 | x = 5',
            subResult: 'x = 5',
          },
        ],
        undefined,
        '📈'
      ),
      mkNum(
        'math3-5-2',
        'math3-applications-affines',
        'Ex 2 : Coefficient directeur à partir de deux images',
        2,
        'Une application affine g vérifie g(1) = 4 et g(4) = 19.\nCalculer son coefficient directeur a.',
        '5',
        'Applique a = (g(4) − g(1)) ÷ (4 − 1).',
        'a = (19 − 4) ÷ (4 − 1) = 15 ÷ 3 = 5.',
        [
          {
            title: 'Calculer la pente a',
            explanation: 'Différence des images divisée par différence des antécédents.',
            math: 'a = (19 − 4) ÷ (4 − 1) | a = 15 ÷ 3 | a = 5',
            subResult: 'a = 5',
          },
        ],
        undefined,
        '🧭'
      ),
    ],
  },

  {
    id: 'math3-statistiques-3eme',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'donnees-fonctions',
    order: 6,
    title: 'Statistiques 3ème : Classes d’amplitudes, Effectifs cumulés & Histogramme',
    badge: 'Maths 3ème · Ch. 6',
    shortDesc: 'Regroupement en classes [a ; b[, centre de classe, classe modale, effectifs/fréquences cumulés croissants et moyenne pondérée.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    readingTimeMinutes: 14,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'statistiques',
    bossMeta: { name: 'ANALYSTE DU BEPC', emoji: '📊', xp: 160 },
    kokoSpeech:
      'Quand une série comporte beaucoup de valeurs (notes de 40 élèves, salaires, tailles), on regroupe les données en CLASSES [a ; b[. Pour calculer la moyenne, on utilise le CENTRE de chaque classe : c = (a + b) ÷ 2 !',
    realWorldHook: {
      title: 'Analyser les notes de mathématiques d’une classe de 3ème à Oyem',
      scenario:
        'Les 40 élèves d’une classe de 3ème sont répartis par tranches de notes : [0 ; 5[, [5 ; 10[, [10 ; 15[ et [15 ; 20].',
      question:
        'Comment déterminer la classe modale, le pourcentage d’élèves ayant la moyenne (≥ 10), la moyenne de la classe et la classe médiane ?',
    },
    unitsTable: [
      { symbol: 'c = (a+b)/2', quantity: 'Centre de la classe [a ; b[', unit: 'Représentant pour la moyenne', instrument: 'Moyenne = Σ(nᵢ × cᵢ) ÷ N' },
      { symbol: 'ECC / ECD', quantity: 'Effectif Cumulé Croissant / Décroissant', unit: 'Somme progressive', instrument: 'Trouver la classe médiane' },
      { symbol: 'f (%)', quantity: 'Fréquence en pourcentage', unit: '(Effectif ÷ Total) × 100', instrument: 'Somme = 100%' },
    ],
    experimentOrActivity: {
      title: 'Construire un histogramme et lire la classe médiane',
      materials: ['Tableau d’effectifs en 4 classes', 'Papier millimétré'],
      observation:
        'Dans un histogramme à amplitudes égales, la hauteur de chaque rectangle collé est proportionnelle à l’effectif.',
      conclusion:
        'La classe médiane est la première classe dont l’Effectif Cumulé Croissant (ECC) atteint ou dépasse la moitié N/2.',
    },
    revisionChecklist: [
      'Je sais calculer le centre d’une classe cᵢ = (a + b) ÷ 2.',
      'Je sais calculer la moyenne d’une série regroupée en classes : Σ(nᵢ × cᵢ) ÷ N.',
      'Je sais trouver la classe modale (plus grand effectif) et la classe médiane (ECC ≥ N/2).',
    ],
    keyFormulas: [
      'Centre de la classe [a ; b[ : c = (a + b) ÷ 2  |  Amplitude : b − a',
      'Moyenne approchée : x̄ = (n₁c₁ + n₂c₂ + … + nₖcₖ) ÷ N',
      'Fréquence : f = nᵢ ÷ N (ou f(%) = (nᵢ ÷ N) × 100)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Statistiques en Classes',
      slogan: 'Centre = (a+b)/2 · Classe modale = max effectif · Médiane = ECC ≥ N/2',
      summaryBulletPoints: [
        'Contrairement au diagramme en bâtons, les rectangles d’un HISTOGRAMME sont collés les uns aux autres.',
        'L’Effectif Cumulé Croissant (ECC) s’obtient en additionnant les effectifs de gauche à droite ; le dernier ECC vaut toujours N.',
      ],
      verticalFormulas: [
        {
          name: 'Moyenne par centres de classes',
          badge: '📊',
          steps: [
            '[0;10[ (eff. 10, centre 5) | [10;20] (eff. 30, centre 15)',
            'Total N = 10 + 30 = 40 élèves',
            'x̄ = (10 × 5 + 30 × 15) ÷ 40',
            'x̄ = (50 + 450) ÷ 40 = 500 ÷ 40 = 12,5',
          ],
          resultHighlight: 'Moyenne = 12,5 / 20',
          explanation: 'Chaque effectif multiplie le centre de sa classe.',
        },
      ],
      kokoTip: 'Pour trouver le % d’élèves ayant « au moins 10 », additionne les effectifs de toutes les classes à partir de [10 ; …[, divise par N et multiplie par 100 !',
      pitfallToAvoid: 'Diviser la somme Σ(nᵢ × cᵢ) par le nombre de classes (ex: 4) au lieu de diviser par l’effectif TOTAL N (ex: 40) !',
    },
    sections: [
      {
        title: '1. Regroupement en classes, Moyenne et Médiane',
        explanation: [
          'En 3ème, les données continues ou nombreuses sont regroupées en classes d’amplitudes. La classe modale est celle qui a le plus grand effectif (à amplitudes égales).',
          'On obtient la moyenne en remplaçant chaque classe par son centre cᵢ = (borne inf + borne sup) ÷ 2.',
        ],
        rules: [
          {
            name: 'Effectifs Cumulés Croissants (ECC)',
            description: 'L’ECC d’une classe indique combien d’individus ont une valeur strictement inférieure à la borne supérieure de cette classe.',
            example: 'Classes [0;5[ (eff 4), [5;10[ (eff 12), [10;15[ (eff 16), [15;20] (eff 8) | ECC : 4, 16, 32, 40 | N/2 = 20 ➔ Classe médiane = [10;15[',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-6-1',
        'math3-statistiques-3eme',
        'Ex 1 : Centre et amplitude d’une classe',
        1,
        'On considère la classe de notes [10 ; 16[.\nQuel est le centre c de cette classe ?',
        '13',
        'c = (10 + 16) ÷ 2.',
        '(10 + 16) ÷ 2 = 26 ÷ 2 = 13.',
        [
          {
            title: 'Calculer la demi-somme des bornes',
            explanation: 'Centre = (a + b) ÷ 2.',
            math: 'c = (10 + 16) ÷ 2 | c = 26 ÷ 2 = 13',
            subResult: '13',
          },
        ],
        undefined,
        '📊'
      ),
      mkNum(
        'math3-6-2',
        'math3-statistiques-3eme',
        'Ex 2 : Pourcentage de réussite au BEPC blanc',
        2,
        'Dans une classe de 50 élèves à Port-Gentil, 15 élèves ont entre [0 ; 10[, 25 élèves entre [10 ; 15[ et 10 élèves entre [15 ; 20].\nQuel pourcentage (%) d’élèves a obtenu au moins 10/20 ?',
        '70',
        'Nombre ayant au moins 10 = 25 + 10 = 35 sur 50. Calcule (35 ÷ 50) × 100.',
        '35 ÷ 50 = 0,70 = 70 %.',
        [
          {
            title: 'Additionner les effectifs ≥ 10',
            explanation: '25 + 10 = 35 élèves.',
            math: 'n(≥ 10) = 25 + 10 | = 35 élèves',
          },
          {
            title: 'Convertir en pourcentage',
            explanation: '(35 ÷ 50) × 100 = 70 %.',
            math: 'f(%) = (35 ÷ 50) × 100 | = 70 %',
            subResult: '70 %',
          },
        ],
        '%',
        '🎓'
      ),
    ],
  },

  {
    id: 'math3-probabilites-3eme',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'donnees-fonctions',
    order: 7,
    title: 'Probabilités à deux épreuves : Arbres de choix & Tableau à double entrée',
    badge: 'Maths 3ème · Ch. 7',
    shortDesc: 'Expériences aléatoires à 2 étapes (avec ou sans remise), arbre pondéré, événement contraire P(Ā) = 1 − P(A) et réunion.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-purple-500 to-pink-500',
    readingTimeMinutes: 13,
    visualizerType: 'volumes-vitesse',
    illustrationKey: 'probabilites',
    bossMeta: { name: 'MAÎTRE DU HASARD 3ÈME', emoji: '🎲', xp: 160 },
    kokoSpeech:
      'Pour une expérience à DEUX tirages successifs (deux pièces, deux dés, deux boules dans une urne), dessine un ARBRE ou un TABLEAU À DOUBLE ENTRÉE ! Et souviens-toi : sur un chemin d’arbre pondéré, on MULTIPLIE les probabilités des branches !',
    realWorldHook: {
      title: 'Tirage au sort de deux délégués de classe dans une urne à Franceville',
      scenario:
        'Une urne contient 3 bulletins verts et 2 bulletins jaunes. On tire 2 bulletins successivement AVEC remise (ou SANS remise).',
      question:
        'Comment calculer la probabilité de tirer deux bulletins de même couleur ou « au moins un vert » ?',
    },
    unitsTable: [
      { symbol: '0 ≤ P(A) ≤ 1', quantity: 'Encadrement d’une probabilité', unit: 'Fraction, décimal ou %', instrument: 'Jamais > 1 ni < 0' },
      { symbol: 'P(Ā) = 1 − P(A)', quantity: 'Événement contraire', unit: '« Au moins 1 » = 1 − P(aucun)', instrument: 'Astuce rapide BEPC' },
      { symbol: 'P(A et B)', quantity: 'Chemin d’un arbre pondéré', unit: 'Produit des branches p₁ × p₂', instrument: 'Arbre des possibles' },
    ],
    experimentOrActivity: {
      title: 'Tableau des 36 issues lors du lancer de deux dés',
      materials: ['Grille 6×6 (Dé 1 en ligne, Dé 2 en colonne)'],
      observation:
        'Il y a 6 × 6 = 36 couples équiprobables. La somme vaut 7 sur la grande diagonale (6 cases sur 36, soit P = 6/36 = 1/6).',
      conclusion:
        'Le tableau à double entrée permet de ne jamais oublier une issue lorsque deux épreuves indépendantes ont lieu.',
    },
    revisionChecklist: [
      'Je sais construire un arbre de dénombrement ou un tableau à double entrée pour 2 épreuves.',
      'Je sais multiplier les probabilités le long d’un chemin de l’arbre et additionner celles des chemins menant à l’événement.',
      'Je sais utiliser P(au moins 1) = 1 − P(0).',
    ],
    keyFormulas: [
      'Équiprobabilité : P(E) = Nombre d’issues favorables ÷ Nombre total d’issues',
      'Événement contraire : P(non A) = 1 − P(A)',
      'Tirage sans remise : après le 1er tirage, il reste (N − 1) boules au dénominateur !',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Probabilités (2 Épreuves)',
      slogan: 'Arbre = Multiplier sur le chemin · « Au moins 1 » = 1 − P(aucun)',
      summaryBulletPoints: [
        'La somme des probabilités des branches partant d’un même nœud vaut toujours 1.',
        'Attention à la différence entre AVEC remise (même dénominateur au 2e tirage) et SANS remise (dénominateur diminue de 1).',
      ],
      verticalFormulas: [
        {
          name: 'Tirage avec remise (3 Vertes, 2 Jaunes)',
          badge: '🎲',
          steps: [
            'Total = 5 boules | P(V) = 3/5 ; P(J) = 2/5',
            'P(V puis V) = (3/5) × (3/5) = 9/25',
            'P(au moins 1 Verte) = 1 − P(J puis J)',
            'P(au moins 1 Verte) = 1 − (2/5 × 2/5) = 1 − 4/25 = 21/25',
          ],
          resultHighlight: 'P = 21/25 = 0,84',
          explanation: 'Passer par l’événement contraire « aucune verte = deux jaunes » évite d’additionner 3 cas.',
        },
      ],
      kokoTip: 'Chaque fois qu’un exercice du BEPC te demande « au moins un… », pense immédiatement à « 1 − P(aucun…) » !',
      pitfallToAvoid: 'Oublier qu’en tirage SANS remise, le nombre total d’objets diminue de 1 au deuxième tirage !',
    },
    sections: [
      {
        title: '1. Arbres pondérés et Événements à deux épreuves',
        explanation: [
          'Lorsqu’une expérience aléatoire se déroule en deux étapes, on la modélise par un arbre de probabilités ou un tableau à double entrée.',
          'La probabilité d’une issue (un chemin complet) est égale au produit des probabilités rencontrées sur ses branches.',
        ],
        rules: [
          {
            name: 'Tirage avec remise vs sans remise',
            description: 'Avec remise : les deux tirages sont identiques et indépendants. Sans remise : la boule tirée n’est pas remise, donc il reste une boule de moins pour le 2e tirage.',
            example: 'Urne à 4 boules (2 R, 2 B) sans remise | P(R puis R) = (2/4) × (1/3) = 2/12 = 1/6',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'math3-7-1',
        'math3-probabilites-3eme',
        'Ex 1 : Lancer de deux pièces de 100 F CFA',
        1,
        'On lance deux fois de suite une pièce équilibrée (Pile ou Face).\nQuelle est la probabilité d’obtenir « Pile puis Pile » ?',
        ['1/4', '1/2', '1/3', '3/4'],
        '1/4',
        '4 issues possibles équiprobables : PP, PF, FP, FF.',
        'P(P puis P) = 1/2 × 1/2 = 1/4.',
        [
          {
            title: 'Lister les 4 issues ou multiplier sur l’arbre',
            explanation: 'Issues = {PP ; PF ; FP ; FF}.',
            math: 'P(PP) = (1/2) × (1/2) | P(PP) = 1/4',
            subResult: '1/4',
          },
        ],
        '🪙'
      ),
      mkQcm(
        'math3-7-2',
        'math3-probabilites-3eme',
        'Ex 2 : Événement contraire « Au moins un 6 »',
        2,
        'On lance deux dés cubiques bien équilibrés. Sachant que la probabilité de n’obtenir AUCUN 6 est (5/6) × (5/6) = 25/36, quelle est la probabilité d’obtenir AU MOINS UN 6 ?',
        ['11/36', '2/6', '1/36', '25/36'],
        '11/36',
        'Utilise P(au moins un 6) = 1 − P(aucun 6) = 36/36 − 25/36.',
        '1 − 25/36 = 11/36.',
        [
          {
            title: 'Utiliser l’événement contraire',
            explanation: 'Le contraire d’« au moins un 6 » est « aucun 6 ».',
            math: 'P = 1 − 25/36 | P = 36/36 − 25/36 = 11/36',
            subResult: '11/36',
          },
        ],
        '🎲'
      ),
    ],
  },
];
