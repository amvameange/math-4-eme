import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_TC_ANALYSE: Chapter[] = [
  {
    id: 'mathTc-limites-continuite',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'donnees-fonctions',
    order: 5,
    title: 'Limites, Continuité, TVI & Branches Infinies',
    badge: 'Maths Tle C · Ch. 5',
    shortDesc: 'Limites finies/infinies, formes indéterminées, théorème des gendarmes, théorème des valeurs intermédiaires (TVI), bijection réciproque et asymptotes obliques.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-600 via-teal-500 to-cyan-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-limites-tvi',
    bossMeta: { name: 'MAÎTRE DES LIMITES & TVI', emoji: '📈', xp: 200 },
    kokoSpeech:
      'Pour lever une forme indéterminée au Bac C : factorise par le terme de plus haut degré en ±∞, utilise l’expression conjuguée avec les racines, ou reconnais un taux d’accroissement !',
    realWorldHook: {
      title: 'Niveau critique du barrage de Kinguélé et comportement asymptotique',
      scenario:
        'La hauteur d’eau h(t) dans une retenue varie continûment selon un modèle rationnel h(t) = (at² + bt + c)/(dt + e). On étudie son comportement à long terme et l’instant où un seuil h₀ est atteint.',
      question:
        'Comment montrer l’existence et l’unicité d’un instant solution α (TVI + stricte monotonie) et trouver l’asymptote oblique ?',
    },
    unitsTable: [
      { symbol: 'lim f(x) = l', quantity: 'Asymptote horizontale', unit: 'y = l en ±∞', instrument: 'Limite finie à l’infini' },
      { symbol: 'lim [f(x)-(ax+b)] = 0', quantity: 'Asymptote oblique', unit: 'y = ax + b', instrument: 'a = lim f(x)/x' },
      { symbol: 'TVI + bijection', quantity: 'Unicité de α', unit: 'f(α) = k', instrument: 'Continue + strict. monotone' },
      { symbol: 'f^(-1)', quantity: 'Fonction réciproque', unit: 'Symétrique / y = x', instrument: '(f^(-1))’(y₀) = 1 / f’(x₀)' },
    ],
    experimentOrActivity: {
      title: 'Encadrement de la racine α par dichotomie et courbe de f^(-1)',
      materials: ['Fonction continue strictement croissante f', 'Intervalle [a, b] avec f(a)·f(b) < 0', 'Symétrie d’axe y = x'],
      observation:
        'Par dichotomie, chaque itération divise l’amplitude de l’encadrement de α par 2. Le graphe de f^(-1) est symétrique de celui de f par rapport à la première bissectrice y = x.',
      conclusion:
        'Toute fonction continue et strictement monotone sur un intervalle I réalise une bijection de I sur f(I), avec une réciproque f^(-1) continue et de même sens de variation.',
    },
    revisionChecklist: [
      'Je sais lever les 4 formes indéterminées (∞/∞, ∞-∞, 0/0, 0×∞).',
      'Je sais rédiger rigoureusement le théorème de la bijection pour prouver l’unicité d’une solution α.',
      'Je sais rechercher toutes les branches infinies : asymptotes verticale, horizontale, oblique, ou branche parabolique.',
    ],
    keyFormulas: [
      'Gendarmes : si u(x) ≤ f(x) ≤ v(x) et lim u = lim v = l, alors lim f = l',
      'Limites usuelles : lim (sin x)/x = 1 (en 0)  ;  lim (1 - cos x)/x² = 1/2 (en 0)',
      'Asymptote oblique y = ax + b : a = lim f(x)/x ∈ ℝ* et b = lim [f(x) - ax] ∈ ℝ',
      'Dérivée réciproque : (f^(-1))’(y₀) = 1 / f’(f^(-1)(y₀)) si f’(x₀) ≠ 0',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Limites, Bijection & Branches Infinies',
      slogan: 'Lever l’indétermination · TVI · Branches infinies',
      summaryBulletPoints: [
        'Rédaction TVI stricte : (1) f est continue sur I ; (2) f est strictement monotone sur I ; (3) k ∈ f(I) (ou f(a)·f(b) < 0 si k = 0). Donc ∃! α ∈ I tel que f(α) = k.',
        'Si lim f(x)/x = +∞ (ou -∞) en ±∞ : branche parabolique de direction (Oy).',
        'Si lim f(x)/x = 0 en ±∞ (et lim f(x) = ±∞) : branche parabolique de direction (Ox).',
      ],
      verticalFormulas: [
        {
          name: 'Asymptote oblique par division euclidienne',
          badge: '📏',
          steps: [
            'f(x) = (x² + 3x + 5) / (x + 1)',
            'f(x) = x + 2 + 3 / (x + 1)',
            'lim_{|x|→∞} [f(x) - (x + 2)] = lim 3/(x+1) = 0',
          ],
          resultHighlight: 'Asymptote oblique y = x + 2 (et f(x) - (x+2) donne la position !)',
          explanation: 'Si x > -1, 3/(x+1) > 0 donc C_f est au-dessus de son asymptote.',
        },
      ],
      kokoTip: 'Pour (√(x² + x) - x) en +∞, ne factorise PAS naïvement : multiplie par l’expression conjuguée et attention à √(x²) = |x| !',
      pitfallToAvoid: 'Écrire √(x²) = x quand x → -∞ (c’est -x pour x < 0 !).',
    },
    sections: [
      {
        title: '1. Techniques de calcul de limites et théorèmes de comparaison',
        illustrationNote: 'Courbe encadrée entre deux fonctions u(x) et v(x) convergeant vers la même limite l (gendarmes).',
        explanation: [
          'En Terminale C, on maîtrise les limites par comparaison, composition, quantité conjuguée et taux d’accroissement.',
          'Les limites trigonométriques en 0 découlent directement du nombre dérivé de sin et cos en 0.',
        ],
        rules: [
          {
            name: 'Quantité conjuguée et √(x²) = |x|',
            description: 'En +∞, √(x² + ax) - x = ax / (√(x² + ax) + x) → a/2.',
            example: 'lim_{x→+∞} (√(x² + 6x) - x) = lim 6x / (x(√(1 + 6/x) + 1)) = 6 / 2 = 3',
          },
        ],
        commonMistakes: ['Oublier le signe moins devant x en sortant x² d’une racine quand x tend vers -∞.'],
      },
      {
        title: '2. Continuité, TVI, fonction réciproque et branches infinies',
        illustrationNote: 'Graphes symétriques de f et f^(-1) par rapport à la droite y = x, et recherche de la racine α.',
        explanation: [
          'Le théorème de la bijection assure l’existence et l’unicité d’un antécédent pour toute fonction continue et strictement monotone.',
          'L’étude complète d’une branche infinie comprend l’asymptote éventuelle et sa position relative par rapport à C_f.',
        ],
        rules: [
          {
            name: 'Nombre dérivé de f^(-1)',
            description: 'Si f(x₀) = y₀ et f’(x₀) ≠ 0, alors f^(-1) est dérivable en y₀ et (f^(-1))’(y₀) = 1 / f’(x₀).',
            example: 'f(1) = 2 et f’(1) = 4  ⟹  (f^(-1))’(2) = 1/4',
          },
        ],
        commonMistakes: ['Calculer 1 / f’(y₀) au lieu de 1 / f’(x₀) avec x₀ = f^(-1)(y₀) !'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-lim-1',
        'mathTc-limites-continuite',
        'Limite trigonométrique en 0',
        1,
        'Calcule la limite lorsque x tend vers 0 de f(x) = sin(5x) / x.',
        '5',
        'Écris sin(5x)/x = 5 × [sin(5x)/(5x)].',
        'Quand u = 5x → 0, sin(u)/u → 1 donc f(x) → 5.',
        [
          { title: 'Changement de variable', explanation: 'Multiplier et diviser par 5.', math: 'sin(5x)/x = 5 · sin(5x)/(5x) → 5 × 1 = 5' },
        ]
      ),
      mkNum(
        'mathTc-lim-2',
        'mathTc-limites-continuite',
        'Expression conjuguée en +∞',
        2,
        'Calcule lim_{x→+∞} (√(x² + 8x) - x).',
        '4',
        'Multiplie par l’expression conjuguée √(x² + 8x) + x.',
        'On obtient 8x / (√(x² + 8x) + x) qui tend vers 8 / (1 + 1) = 4.',
        [
          { title: 'Conjugaison', explanation: '(a - b)(a + b) = a² - b².', math: '(x² + 8x - x²) / (√(x² + 8x) + x) = 8x / [x(√(1 + 8/x) + 1)]' },
          { title: 'Passage à la limite', explanation: 'x > 0 donc √(x²) = x.', math: '8 / (1 + 1) = 4' },
        ]
      ),
      mkQcm(
        'mathTc-lim-3',
        'mathTc-limites-continuite',
        'Hypothèses du théorème de la bijection',
        2,
        'Pour montrer que l’équation f(x) = 0 admet une UNIQUE solution α dans [1 ; 2], que faut-il vérifier ?',
        ['f continue et strictement monotone sur [1 ; 2], avec f(1)·f(2) < 0', 'f dérivable uniquement, avec f(1) < 0', 'f croissante sur [1 ; 2], même discontinue', 'f(1) + f(2) = 0'],
        'f continue et strictement monotone sur [1 ; 2], avec f(1)·f(2) < 0',
        'Le TVI donne l’existence, la stricte monotonie donne l’unicité.',
        'Continuité + stricte monotonie + changement de signe garantissent existence et unicité.',
        [
          { title: 'Corollaire du TVI', explanation: 'Trois conditions obligatoires au Bac.', math: 'Continuité + Stricte monotonie + 0 ∈ f([1;2])' },
        ]
      ),
      mkNum(
        'mathTc-lim-4',
        'mathTc-limites-continuite',
        'Dérivée de la fonction réciproque',
        3,
        'Soit f(x) = x³ + 2x - 1 (bijection de ℝ sur ℝ). Sachant que f(1) = 2, calcule (f^(-1))’(2).',
        '0.2',
        'Utilise (f^(-1))’(2) = 1 / f’(1).',
        'f’(x) = 3x² + 2 ⟹ f’(1) = 5 ⟹ (f^(-1))’(2) = 1/5 = 0,2.',
        [
          { title: 'Antécédent de 2', explanation: 'f(1) = 1 + 2 - 1 = 2.', math: 'f^(-1)(2) = 1' },
          { title: 'Dérivée de f', explanation: 'f’(x) = 3x² + 2 ⟹ f’(1) = 5.', math: '(f^(-1))’(2) = 1 / 5 = 0,2' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-derivation-primitives',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'donnees-fonctions',
    order: 6,
    title: 'Dérivation, Inégalité des Accroissements Finis (IAF) & Primitives',
    badge: 'Maths Tle C · Ch. 6',
    shortDesc: 'Dérivées de fonctions composées, théorème de Rolle, égalité et inégalité des accroissements finis (IAF), points d’inflexion et tableau des primitives.',
    themeColor: '#14b981',
    themeGradient: 'from-teal-600 via-emerald-500 to-green-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-derivation-iaf',
    bossMeta: { name: 'MAÎTRE DES DÉRIVÉES & IAF', emoji: '📐', xp: 200 },
    kokoSpeech:
      'L’IAF est une arme redoutable en Terminale C pour majorer |f(x) - f(α)| ≤ k |x - α| et démontrer la convergence d’une suite récurrente u_{n+1} = f(u_n) !',
    realWorldHook: {
      title: 'Optimisation de la portée d’un pont et contrôle d’erreur numérique',
      scenario:
        'Si l’on approche une solution α par x_n et que |f’(x)| ≤ k < 1 sur l’intervalle d’étude, l’Inégalité des Accroissements Finis garantit que l’erreur diminue géométriquement : |x_{n+1} - α| ≤ kⁿ |x₀ - α|.',
      question:
        'Comment appliquer l’IAF puis déterminer les primitives de fonctions composées u’ uⁿ ou u’/√u ?',
    },
    unitsTable: [
      { symbol: '(v ◦ u)’', quantity: 'Dérivée composée', unit: 'u’ × (v’ ◦ u)', instrument: 'Règle de la chaîne' },
      { symbol: '|f(b) - f(a)| ≤ M|b - a|', quantity: 'IAF', unit: 'Si |f’| ≤ M sur I', instrument: 'Majoration d’écart' },
      { symbol: 'f’’(x₀) = 0', quantity: 'Point d’inflexion', unit: 'Changement de signe de f’’', instrument: 'La courbe traverse sa tangente' },
      { symbol: 'F’(x) = f(x)', quantity: 'Primitive de f', unit: 'F + C (C ∈ ℝ)', instrument: 'Intégrale indéfinie' },
    ],
    experimentOrActivity: {
      title: 'Corde, tangente parallèle (Rolle / TAF) et convexité',
      materials: ['Courbe C_f sur [a, b]', 'Sécanter (AB)', 'Tangente parallèle au point c ∈ ]a, b['],
      observation:
        'Si f est continue sur [a, b] et dérivable sur ]a, b[, il existe au moins un c où la tangente a exactement le même coefficient directeur (f(b)-f(a))/(b-a) que la corde AB.',
      conclusion:
        'Si m ≤ f’(x) ≤ M sur I, alors m(b - a) ≤ f(b) - f(a) ≤ M(b - a), encadrement fondamental de l’analyse en Terminale C.',
    },
    revisionChecklist: [
      'Je connais toutes les dérivées usuelles et composées : (uⁿ)’, (√u)’, (cos u)’, (sin u)’, (tan u)’.',
      'Je sais appliquer l’Inégalité des Accroissements Finis (IAF) pour majorer |f(x) - f(y)|.',
      'Je sais trouver la primitive F de f qui s’annule ou prend une valeur donnée en x₀.',
    ],
    keyFormulas: [
      '(uⁿ)’ = n u’ u^(n-1)  ;  (√u)’ = u’ / (2√u)  ;  (1/u)’ = -u’ / u²',
      'IAF : ∀ x ∈ [a, b], |f’(x)| ≤ M  ⟹  |f(b) - f(a)| ≤ M |b - a|',
      'Primitive de u’ uⁿ (n ≠ -1) : u^(n+1) / (n + 1) + C',
      'Primitive de u’ / √u : 2√u + C  ;  Primitive de u’ / u² : -1/u + C',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Dérivation, IAF & Primitives',
      slogan: 'Dérivée composée · IAF · Reconnaissance de u’',
      summaryBulletPoints: [
        'Pour déterminer un point d’inflexion : calculer f’’(x) et vérifier que f’’ s’annule EN CHANGEANT DE SIGNE.',
        'Pour trouver une primitive, cherche d’abord le facteur u’(x) pour ajuster la constante multiplicatrice.',
        'L’IAF s’utilise dès qu’on te donne une borne sur |f’(x)| et qu’on te demande une inégalité sur f(x) ou une suite.',
      ],
      verticalFormulas: [
        {
          name: 'Primitive composée avec ajustement de constante',
          badge: '∫',
          steps: [
            'f(x) = x · (x² + 3)⁴',
            'Posons u(x) = x² + 3  ⟹  u’(x) = 2x',
            'f(x) = ½ · (2x) · (x² + 3)⁴ = ½ u’ u⁴',
            'F(x) = ½ · (x² + 3)⁵ / 5 + C',
          ],
          resultHighlight: 'F(x) = (1/10)(x² + 3)⁵ + C',
          explanation: 'Toujours redériver mentalement F(x) pour vérifier le facteur 1/10 !',
        },
      ],
      kokoTip: 'Si une dérivée seconde f’’ ≥ 0, f est convexe (au-dessus de ses tangentes) ; si f’’ ≤ 0, f est concave.',
      pitfallToAvoid: 'Oublier la constante C ou le facteur 1/u’ dans la primitive de cos(ax + b) ➔ (1/a) sin(ax + b).',
    },
    sections: [
      {
        title: '1. Dérivation composée, dérivées successives et convexité',
        illustrationNote: 'Tangente en c parallèle à la corde (AB) et point d’inflexion où la concavité s’inverse.',
        explanation: [
          'La dérivabilité en x₀ entraîne la continuité en x₀ (la réciproque est fausse : ex. |x| en 0).',
          'Le signe de f’’ détermine la convexité : si f’’ change de signe en x₀, le point (x₀, f(x₀)) est un point d’inflexion.',
        ],
        rules: [
          {
            name: 'Théorème des Accroissements Finis & IAF',
            description: 'Si ∀x ∈ I, m ≤ f’(x) ≤ M, alors pour tous a < b dans I : m(b - a) ≤ f(b) - f(a) ≤ M(b - a).',
            example: 'Sur [0, π/2], |sin’(x)| = |cos x| ≤ 1  ⟹  |sin x - 0| ≤ x  soit  sin x ≤ x',
          },
        ],
        commonMistakes: ['Oublier la valeur absolue dans |f(x) - f(y)| ≤ M|x - y| quand x < y.'],
      },
      {
        title: '2. Recherche de primitives et conditions initiales',
        illustrationNote: 'Famille des courbes intégrales F(x) + C translatées verticalement, sélection d’une courbe passant par (x₀, y₀).',
        explanation: [
          'Toute fonction continue sur un intervalle I admet des primitives sur I, toutes égales à une constante additive près.',
          'Une seule primitive vérifie la condition F(x₀) = y₀.',
        ],
        rules: [
          {
            name: 'Tableau des primitives composées essentielles',
            description: 'u’ uⁿ ➔ u^(n+1)/(n+1) ; u’/√u ➔ 2√u ; u’ cos(u) ➔ sin(u) ; u’ sin(u) ➔ -cos(u).',
            example: 'f(x) = 3 / √(2x + 1) = (3/2) · 2/√(2x + 1) ➔ F(x) = 3√(2x + 1) + C',
          },
        ],
        commonMistakes: ['Confondre dérivée et primitive de sin(ax) et cos(ax) (inversion de signe !).'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-der-1',
        'mathTc-derivation-primitives',
        'Coefficient d’une primitive',
        1,
        'Soit F(x) = k (2x + 1)³ la primitive de f(x) = (2x + 1)² qui s’annule pour k choisi. Que vaut k ?',
        '0.17',
        'Dérive F(x) = k(2x + 1)³ et identifie à (2x + 1)² : F’(x) = 6k(2x + 1)².',
        '6k = 1 donc k = 1/6 ≈ 0,17 (ou 1/6).',
        [
          { title: 'Dérivation de F', explanation: 'Règle de la chaîne avec u’ = 2.', math: 'F’(x) = 3k · 2 · (2x + 1)² = 6k(2x + 1)²' },
          { title: 'Identification', explanation: '6k = 1.', math: 'k = 1/6 ≈ 0,17' },
        ]
      ),
      mkNum(
        'mathTc-der-2',
        'mathTc-derivation-primitives',
        'Abscisse du point d’inflexion',
        2,
        'Soit f(x) = x³ - 6x² + 9x + 1. Quelle est l’abscisse x₀ du point d’inflexion de sa courbe ?',
        '2',
        'Calcule f’(x) puis f’’(x) et résous f’’(x) = 0.',
        'f’(x) = 3x² - 12x + 9 ; f’’(x) = 6x - 12 = 0 ⟹ x₀ = 2 (avec changement de signe).',
        [
          { title: 'Dérivée seconde', explanation: 'Dériver deux fois.', math: 'f’’(x) = 6x - 12' },
          { title: 'Annulation avec changement de signe', explanation: 'f’’(x) < 0 avant 2 et > 0 après 2.', math: 'x₀ = 2' },
        ]
      ),
      mkQcm(
        'mathTc-der-3',
        'mathTc-derivation-primitives',
        'Application de l’IAF',
        3,
        'Soit f(x) = √(x + 3) sur I = [1 ; +∞[. Quel majorant optimal M vérifie |f(x) - f(y)| ≤ M |x - y| pour tous x, y ∈ I ?',
        ['M = 1/4', 'M = 1/2', 'M = 1', 'M = 2'],
        'M = 1/4',
        'Calcule f’(x) = 1 / (2√(x + 3)) et cherche son maximum sur [1 ; +∞[.',
        'Pour x ≥ 1, x + 3 ≥ 4 donc √(x + 3) ≥ 2 et f’(x) ≤ 1/4.',
        [
          { title: 'Majoration de f’(x)', explanation: 'f’ est décroissante sur [1 ; +∞[.', math: '0 < f’(x) ≤ f’(1) = 1/(2√4) = 1/4' },
        ]
      ),
      mkNum(
        'mathTc-der-4',
        'mathTc-derivation-primitives',
        'Condition initiale sur une primitive',
        2,
        'Soit F la primitive de f(x) = 6x / √(x² + 7) vérifiant F(3) = 10. Calcule F(0) (arrondi à 0,01).',
        '3.87',
        'Remarque que 6x = 3 × (2x), donc F(x) = 6√(x² + 7) + C.',
        'F(3) = 6√16 + C = 24 + C = 10 ⟹ C = -14. Alors F(0) = 6√7 - 14 ≈ 15,87 - 14 = 1,87... recalculons.',
        []
      ),
    ].map((ex) =>
      ex.id === 'mathTc-der-4'
        ? mkNum(
            'mathTc-der-4',
            'mathTc-derivation-primitives',
            'Condition initiale sur une primitive',
            2,
            'Soit F la primitive de f(x) = 2x / √(x² + 7) vérifiant F(3) = 10. Calcule F(0) (arrondi à 0,01 près).',
            '3.29',
            'f(x) = u’/√u avec u(x) = x² + 7, donc F(x) = 2√(x² + 7) + C.',
            'F(3) = 2√16 + C = 8 + C = 10 ⟹ C = 2. Ainsi F(0) = 2√7 + 2 ≈ 5,29 + 2 = 7,29... vérifions 2*sqrt(7)=5.2915 + 2 = 7.29.',
            [
              { title: 'Primitive générale', explanation: 'u’/√u a pour primitive 2√u.', math: 'F(x) = 2√(x² + 7) + C' },
              { title: 'Constante C', explanation: 'F(3) = 2×4 + C = 10.', math: 'C = 2' },
              { title: 'Calcul de F(0)', explanation: '2√7 + 2 ≈ 7,29.', math: 'F(0) = 2√7 + 2 ≈ 7,29' },
            ]
          )
        : ex
    ).map((ex) =>
      ex.id === 'mathTc-der-4'
        ? { ...ex, correctAnswer: '7.29' }
        : ex
    ),
  },

  {
    id: 'mathTc-ln-exp-equadiff',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'donnees-fonctions',
    order: 7,
    title: 'Fonctions ln, exp, Puissances & Équations Différentielles',
    badge: 'Maths Tle C · Ch. 7',
    shortDesc: 'Logarithme népérien, exponentielle, croissances comparées, puissances a^x et équations différentielles du 1er et 2nd ordre (y’+ay=b, y’’+ω²y=0).',
    themeColor: '#0ea5e9',
    themeGradient: 'from-sky-600 via-blue-500 to-indigo-400',
    readingTimeMinutes: 19,
    illustrationKey: 'tc-ln-exp-equadiff',
    bossMeta: { name: 'MAÎTRE DES TRANSITIONS & ÉQUADIFFS', emoji: '🧬', xp: 220 },
    kokoSpeech:
      'Chapitre n°1 des problèmes d’analyse au Bac C ! N’oublie pas les croissances comparées (e^x l’emporte sur xⁿ qui l’emporte sur ln x) et la forme exacte des solutions de y’’ + ω²y = 0 !',
    realWorldHook: {
      title: 'Décharge d’un condensateur RC et oscillations LC en Physique',
      scenario:
        'En physique Terminale C, u_C(t) vérifie τ u’ + u = E dont la solution est E(1 - e^(-t/τ)), tandis qu’un oscillateur sans perte vérifie q’’ + ω₀² q = 0 de solution A cos(ω₀t + φ).',
      question:
        'Comment étudier complètement une fonction à ln ou exp et résoudre les équations différentielles linéaires ?',
    },
    unitsTable: [
      { symbol: 'ln(x)', quantity: 'Logarithme népérien', unit: 'D = ]0 ; +∞[', instrument: '(ln u)’ = u’ / u' },
      { symbol: 'e^x', quantity: 'Exponentielle', unit: 'ℝ ➔ ]0 ; +∞[', instrument: '(e^u)’ = u’ e^u' },
      { symbol: 'y’ + ay = b', quantity: 'Équa. diff. ordre 1', unit: 'C e^(-ax) + b/a', instrument: 'Solution particulière + homogène' },
      { symbol: 'y’’ + ω²y = 0', quantity: 'Équa. diff. ordre 2', unit: 'A cos(ωx) + B sin(ωx)', instrument: 'Oscillateur harmonique' },
    ],
    experimentOrActivity: {
      title: 'Symétrie ln/exp et comparaison des vitesses de croissance',
      materials: ['Courbes y = e^x, y = x, y = ln x', 'Portrait de phase', 'Équation caractéristique r² + ω² = 0'],
      observation:
        'Pour x grand, e^x / xⁿ → +∞ et (ln x) / xⁿ → 0. En 0+, xⁿ ln(x) → 0.',
      conclusion:
        'Toute équation différentielle linéaire se résout en additionnant la solution générale de l’équation homogène et une solution particulière.',
    },
    revisionChecklist: [
      'Je maîtrise les 5 limites remarquables de ln et exp en 0 et +∞ (croissances comparées).',
      'Je sais dériver et primitiver u’/u (➔ ln|u|) et u’ e^u (➔ e^u).',
      'Je sais résoudre y’ + ay = f(x) (solution particulière donnée ou polynôme/exp) et y’’ + ω²y = 0 avec conditions initiales.',
    ],
    keyFormulas: [
      'Croissances comparées : lim_{+∞} (e^x / xⁿ) = +∞  ;  lim_{+∞} (ln x / xⁿ) = 0  ;  lim_{0+} xⁿ ln x = 0',
      'Limites en 0 : lim_{x→0} (e^x - 1)/x = 1  ;  lim_{x→0} ln(1 + x)/x = 1',
      'y’ - ay = 0  ⟺  y(x) = C e^(ax)   |   y’ + ay = b  ⟺  y(x) = C e^(-ax) + b/a',
      'y’’ + ω²y = 0 (ω > 0)  ⟺  y(x) = A cos(ωx) + B sin(ωx)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : ln, exp & Équations Différentielles',
      slogan: 'e^x >> xⁿ >> ln x  ·  Homogène + Particulière',
      summaryBulletPoints: [
        'Toujours poser l’ensemble de définition (argument d’un ln strictement positif !) avant de résoudre une équation.',
        'Une primitive de u’/u est ln|u| + C (attention à la valeur absolue si u < 0 sur l’intervalle !).',
        'Pour y’’ + ay’ + by = 0 : discriminant Δ = a² - 4b. Si Δ > 0 : C₁e^(r₁x)+C₂e^(r₂x) ; Δ = 0 : (Ax+B)e^(rx) ; Δ < 0 (r = α ± iβ) : e^(αx)(A cos βx + B sin βx).',
      ],
      verticalFormulas: [
        {
          name: 'Équation y’ - 2y = 4 avec y(0) = 1',
          badge: '🧬',
          steps: [
            'Équation homogène y’ - 2y = 0  ⟹  y_H(x) = C e^(2x)',
            'Solution particulière constante : -2y_p = 4  ⟹  y_p = -2',
            'y(x) = C e^(2x) - 2',
            'y(0) = 1  ⟹  C - 2 = 1  ⟹  C = 3',
          ],
          resultHighlight: 'y(x) = 3 e^(2x) - 2',
          explanation: 'Vérifions : y’(0) - 2y(0) = 6 - 2(1) = 4. Exact !',
        },
      ],
      kokoTip: 'En 0+, x ln(x) tend vers 0- ; en +∞, x - ln x = x(1 - ln x / x) tend vers +∞ !',
      pitfallToAvoid: 'Oublier la valeur absolue dans ∫(1/x)dx = ln|x| quand x < 0, ou oublier le signe moins devant a dans y’ + ay = 0 ➔ C e^(-ax).',
    },
    sections: [
      {
        title: '1. Étude approfondie de ln, exp et croissances comparées',
        illustrationNote: 'Courbes symétriques y = e^x et y = ln x par rapport à y = x, tangentes en (0,1) et (1,0).',
        explanation: [
          'La fonction exponentielle transforme une somme en produit (e^(a+b) = e^a e^b) et le logarithme transforme un produit en somme (ln(ab) = ln a + ln b).',
          'Pour x > 0 et α ∈ ℝ, on définit a^x = e^(x ln a) et x^α = e^(α ln x).',
        ],
        rules: [
          {
            name: 'Levée d’indétermination par croissance comparée',
            description: 'Factoriser par le terme dominant (e^x ou x) ou poser X = -x quand x → -∞.',
            example: 'lim_{x→-∞} x e^x : posons X = -x → +∞, x e^x = -X / e^X → 0',
          },
        ],
        commonMistakes: ['Écrire ln(a + b) = ln a + ln b (Faux !).'],
      },
      {
        title: '2. Équations différentielles linéaires du 1er et du 2nd ordre',
        illustrationNote: 'Solutions oscillantes A cos(ωx) + B sin(ωx) et enveloppes exponentielles e^(-λx).',
        explanation: [
          'Les équations différentielles du 1er ordre avec second membre se résolvent par superposition : y = y_H + y_P.',
          'Celles du second ordre y’’ + ω²y = 0 modélisent tout phénomène oscillatoire périodique de pulsation ω.',
        ],
        rules: [
          {
            name: 'Conditions initiales pour y’’ + ω²y = 0',
            description: 'y(0) = A et y’(0) = B ω déterminent uniquement A et B.',
            example: 'y’’ + 9y = 0, y(0) = 2, y’(0) = 6 ⟹ ω = 3, A = 2, 3B = 6 ⟹ y(x) = 2 cos(3x) + 2 sin(3x)',
          },
        ],
        commonMistakes: ['Oublier de dériver A cos(ωx) + B sin(ωx) avec le facteur ω avant d’appliquer y’(0).'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-ln-1',
        'mathTc-ln-exp-equadiff',
        'Équation logarithmique',
        1,
        'Résous sur ]1 ; +∞[ l’équation ln(x - 1) + ln(x + 1) = ln(8). Donne l’unique solution x.',
        '3',
        'Utilise ln(A) + ln(B) = ln(AB) pour x > 1.',
        'x² - 1 = 8 ⟹ x² = 9 ⟹ x = 3 (car x > 1).',
        [
          { title: 'Propriété de ln', explanation: 'Produit des arguments.', math: 'ln((x-1)(x+1)) = ln(8) ⟹ x² - 1 = 8' },
          { title: 'Domaine', explanation: 'x > 1 élimine -3.', math: 'x = 3' },
        ]
      ),
      mkQcm(
        'mathTc-ln-2',
        'mathTc-ln-exp-equadiff',
        'Croissance comparée en -∞',
        2,
        'Quelle est la limite lorsque x tend vers -∞ de (x² + 3x) e^x ?',
        ['0', '+∞', '-∞', '1'],
        '0',
        'L’exponentielle l’emporte toujours sur les polynômes en -∞ comme en +∞.',
        'Par croissance comparée, lim_{x→-∞} x^n e^x = 0.',
        [
          { title: 'Changement X = -x', explanation: 'x² e^x = X² / e^X → 0 quand X → +∞.', math: 'lim = 0' },
        ]
      ),
      mkNum(
        'mathTc-ln-3',
        'mathTc-ln-exp-equadiff',
        'Équation différentielle y’ + 2y = 6',
        2,
        'Soit y la solution de y’ + 2y = 6 telle que y(0) = 5. Calcule y(0) - lim_{+∞} y(x).',
        '2',
        'y(x) = C e^(-2x) + 3 avec y(0) = 5 ⟹ C = 2.',
        'La limite en +∞ vaut 3, donc y(0) - 3 = 5 - 3 = 2.',
        [
          { title: 'Solution générale', explanation: 'y_H = Ce^(-2x), y_p = 6/2 = 3.', math: 'y(x) = 2 e^(-2x) + 3' },
          { title: 'Limite', explanation: 'En +∞, e^(-2x) → 0 donc y → 3.', math: '5 - 3 = 2' },
        ]
      ),
      mkNum(
        'mathTc-ln-4',
        'mathTc-ln-exp-equadiff',
        'Oscillateur y’’ + 4y = 0',
        3,
        'Soit f la solution de y’’ + 4y = 0 telle que f(0) = 3 et f’(0) = 8. Calcule f(π/4).',
        '4',
        'f(x) = A cos(2x) + B sin(2x) avec f(0) = A = 3 et f’(0) = 2B = 8.',
        'f(x) = 3 cos(2x) + 4 sin(2x). En x = π/4, 2x = π/2 donc f(π/4) = 3×0 + 4×1 = 4.',
        [
          { title: 'Forme générale (ω = 2)', explanation: 'ω² = 4 ⟹ ω = 2.', math: 'f(x) = A cos(2x) + B sin(2x)' },
          { title: 'Conditions initiales', explanation: 'A = 3 et 2B = 8 ⟹ B = 4.', math: 'f(π/4) = 3 cos(π/2) + 4 sin(π/2) = 4' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-suites-recurrence',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'donnees-fonctions',
    order: 8,
    title: 'Suites Numériques, Raisonnement par Récurrence & Suites Adjacentes',
    badge: 'Maths Tle C · Ch. 8',
    shortDesc: 'Récurrence simple et forte, suites monotones bornées, suites récurrentes u_{n+1} = f(u_n), point fixe, suites adjacentes et suites complexes.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-600 via-orange-500 to-yellow-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-suites-adjacentes',
    bossMeta: { name: 'MAÎTRE DES SUITES', emoji: '🪜', xp: 200 },
    kokoSpeech:
      'Pour prouver qu’une suite converge au Bac C, tu as 3 grandes voies : (1) croissante majorée / décroissante minorée ; (2) théorème des suites adjacentes ; (3) majoration |u_n - l| ≤ kⁿ |u₀ - l| avec 0 < k < 1 !',
    realWorldHook: {
      title: 'Algorithme de Héron (Babylone) pour calculer √a au Gabon',
      scenario:
        'La suite récurrente u_{n+1} = ½(u_n + a/u_n) converge quadratiquement vers √a : en seulement 4 étapes, on obtient 10 décimales exactes !',
      question:
        'Comment encadrer u_n par récurrence, étudier la monotonie et identifier la limite via l’équation du point fixe f(l) = l ?',
    },
    unitsTable: [
      { symbol: 'u_{n+1} = f(u_n)', quantity: 'Suite récurrente', unit: 'l = f(l)', instrument: 'Escaliers / toile d’araignée' },
      { symbol: 'u_n ↗ et v_n ↘', quantity: 'Suites adjacentes', unit: 'lim (v_n - u_n) = 0', instrument: 'Même limite l' },
      { symbol: 'v_n = (u_n - α)/(u_n - β)', quantity: 'Suite auxiliaire géométrique', unit: 'v_{n+1} = q v_n', instrument: 'Suite homographique' },
      { symbol: '|u_n - l| ≤ kⁿ|u₀ - l|', quantity: 'Convergence par IAF', unit: '0 < k < 1', instrument: 'Gendarmes ➔ l' },
    ],
    experimentOrActivity: {
      title: 'Escalier graphique de u_{n+1} = f(u_n) et suites adjacentes',
      materials: ['Courbe y = f(x) et droite y = x', 'Segments [u_n, v_n] emboîtés', 'Point fixe l'],
      observation:
        'Les intervalles emboîtés [u_n, v_n] se réduisent vers un point unique l tel que u_n ≤ l ≤ v_n pour tout n.',
      conclusion:
        'Si f est continue sur I et u_n ∈ I converge vers l ∈ I, alors nécessairement l vérifie f(l) = l.',
    },
    revisionChecklist: [
      'Je sais rédiger les 3 étapes de la récurrence (Initialisation, Hérédité, Conclusion).',
      'Je maîtrise les suites arithmético-géométriques u_{n+1} = a u_n + b et les suites homographiques.',
      'Je sais démontrer que deux suites (u_n) et (v_n) sont adjacentes et en déduire leur convergence commune.',
    ],
    keyFormulas: [
      'Théorème de convergence monotone : croissante + majorée (ou décroissante + minorée) ⟹ convergente',
      'Suites adjacentes : u_n croissante, v_n décroissante, lim (v_n - u_n) = 0  ⟹  lim u_n = lim v_n = l',
      'Point fixe : f continue, u_{n+1} = f(u_n) et u_n → l  ⟹  f(l) = l',
      'Somme géométrique : 1 + q + q² + ... + qⁿ = (1 - q^(n+1)) / (1 - q)  (q ≠ 1)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Suites & Convergence',
      slogan: 'Récurrence · Monotone Bornée · Adjacentes · Point Fixe',
      summaryBulletPoints: [
        'Ne jamais supposer que (u_n) converge avant de l’avoir prouvé (ex. par monotonie + borne) pour ensuite résoudre f(l) = l !',
        'Pour étudier le sens de variation de u_{n+1} = f(u_n) : si f est CROISSANTE, u_1 ≥ u_0 entraîne (u_n) croissante ; si f est DÉCROISSANTE, attention, la suite oscille !',
        'Pour une suite arithmético-géométrique u_{n+1} = a u_n + b, poser v_n = u_n - l où l = a l + b.',
      ],
      verticalFormulas: [
        {
          name: 'Suite arithmético-géométrique u_{n+1} = ½ u_n + 3',
          badge: '🪜',
          steps: [
            'Point fixe : l = ½ l + 3  ⟹  l = 6',
            'Posons v_n = u_n - 6  ⟹  v_{n+1} = ½(u_n - 6) = ½ v_n',
            'v_n = (u₀ - 6) · (½)ⁿ',
            'u_n = 6 + (u₀ - 6) · (½)ⁿ  →  6',
          ],
          resultHighlight: 'lim_{n→+∞} u_n = 6',
          explanation: 'La suite auxiliaire v_n est toujours géométrique de raison a = ½.',
        },
      ],
      kokoTip: 'Pour comparer v_n - u_n à 0 dans des suites adjacentes, calcule (v_{n+1} - u_{n+1}) en fonction de (v_n - u_n) !',
      pitfallToAvoid: 'Oublier la continuité de f lorsqu’on passe à la limite dans u_{n+1} = f(u_n) ➔ l = f(l).',
    },
    sections: [
      {
        title: '1. Récurrence, convergence monotone et point fixe',
        illustrationNote: 'Construction graphique en escalier / escargot entre C_f et la première bissectrice y = x.',
        explanation: [
          'Le raisonnement par récurrence permet de prouver des encadrements (a ≤ u_n ≤ b), des positivités ou des formules closes.',
          'Une suite croissante et majorée converge vers une limite finie l ≤ M (mais pas nécessairement égale au majorant M !).',
        ],
        rules: [
          {
            name: 'Passage à la limite l = f(l)',
            description: 'Si u_n ∈ I, u_n → l ∈ I et f continue en l, alors u_{n+1} → f(l), donc par unicité de la limite l = f(l).',
            example: 'u_{n+1} = √(2 + u_n), u₀ = 0 ⟹ croissante majorée par 2 ⟹ l = √(2 + l) ⟹ l = 2',
          },
        ],
        commonMistakes: ['Croire qu’une suite croissante majorée par 10 converge forcément vers 10 (elle converge vers l ≤ 10).'],
      },
      {
        title: '2. Suites adjacentes et suites de l’IAF / intégrales',
        illustrationNote: 'Intervalles emboîtés [u_n ; v_n] dont la largeur tend vers 0 autour de l.',
        explanation: [
          'Deux suites (u_n) et (v_n) sont adjacentes si (u_n) est croissante, (v_n) est décroissante et lim (v_n - u_n) = 0.',
          'On en déduit automatiquement que ∀n, u_n ≤ v_n et qu’elles convergent vers une même limite l.',
        ],
        rules: [
          {
            name: 'Théorème des suites adjacentes',
            description: 'Très fréquent pour encadrer e = lim Σ 1/k! ou ln 2 ou une intégrale.',
            example: 'u_n = Σ_{k=0}^n 1/k! et v_n = u_n + 1/(n·n!) sont adjacentes et convergent vers e.',
          },
        ],
        commonMistakes: ['Oublier de vérifier que l’une est croissante et l’autre décroissante (v_n - u_n → 0 seul ne suffit pas !).'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-sui-1',
        'mathTc-suites-recurrence',
        'Limite d’une suite arithmético-géométrique',
        1,
        'Soit (u_n) définie par u₀ = 1 et u_{n+1} = 0,6 u_n + 8. Quelle est sa limite l lorsque n → +∞ ?',
        '20',
        'Résous l’équation du point fixe l = 0,6 l + 8.',
        '0,4 l = 8 ⟹ l = 8 / 0,4 = 20 (et |0,6| < 1 assure la convergence).',
        [
          { title: 'Point fixe', explanation: 'Suite auxiliaire géométrique de raison 0,6.', math: 'l = 0,6 l + 8 ⟹ 0,4 l = 8 ⟹ l = 20' },
        ]
      ),
      mkNum(
        'mathTc-sui-2',
        'mathTc-suites-recurrence',
        'Terme u_3 par récurrence',
        1,
        'Soit u₀ = 2 et u_{n+1} = 3u_n - 4. Calcule u_3.',
        '2',
        'Calcule u_1, u_2, puis u_3.',
        'u_1 = 3(2) - 4 = 2 ; donc la suite est constante et u_3 = 2.',
        [
          { title: 'Calcul itératif', explanation: '2 est point fixe de f(x) = 3x - 4.', math: 'u_1 = 6 - 4 = 2 ⟹ u_2 = 2 ⟹ u_3 = 2' },
        ]
      ),
      mkQcm(
        'mathTc-sui-3',
        'mathTc-suites-recurrence',
        'Conditions des suites adjacentes',
        2,
        'Soient u_n croissante et v_n décroissante telles que v_n - u_n = 3 / (n + 1). Que peut-on conclure ?',
        ['u_n et v_n sont adjacentes et convergent vers la même limite l', 'u_n diverge vers +∞', 'v_n - u_n tend vers 3', 'Elles convergent vers 0'],
        'u_n et v_n sont adjacentes et convergent vers la même limite l',
        'Vérifie les 3 critères : croissante, décroissante, limite de la différence nulle.',
        'lim 3/(n+1) = 0, donc elles sont adjacentes et convergent vers un même réel l.',
        [
          { title: 'Critère des suites adjacentes', explanation: '3/(n+1) → 0.', math: 'u_n ↗, v_n ↘, lim(v_n - u_n) = 0' },
        ]
      ),
      mkNum(
        'mathTc-sui-4',
        'mathTc-suites-recurrence',
        'Limite de u_{n+1} = √(6 + u_n)',
        3,
        'Soit u₀ = 1 et u_{n+1} = √(6 + u_n). Sachant que (u_n) est croissante et majorée par 3, quelle est sa limite l ?',
        '3',
        'Résous l = √(6 + l) avec l > 0.',
        'l² - l - 6 = 0 ⟹ (l - 3)(l + 2) = 0. Comme l ≥ 1, l = 3.',
        [
          { title: 'Équation f(l) = l', explanation: 'Continuité de x ↦ √(6 + x).', math: 'l² = 6 + l ⟹ l² - l - 6 = 0' },
          { title: 'Choix de la racine positive', explanation: 'l ≥ u₀ = 1.', math: 'l = 3' },
        ]
      ),
    ],
  },
];
