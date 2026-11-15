import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_3EME_ALGEBRE: Chapter[] = [
  {
    id: 'math3-racines-carrees',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'nombres-calculs',
    order: 1,
    title: 'Racines carrées (3ème BEPC) : Propriétés, Simplification & Expression Conjuguée',
    badge: 'Maths 3ème · Ch. 1',
    shortDesc: 'Calculs exacts avec √a, simplification a√b, développement avec identités et suppression du radical au dénominateur.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-violet-500 to-purple-500',
    readingTimeMinutes: 14,
    visualizerType: 'relatifs-puissances',
    illustrationKey: 'racine-carree',
    bossMeta: { name: 'GARDIEN DU RADICAL BEPC', emoji: '√', xp: 160 },
    kokoSpeech:
      'Au BEPC Gabon, le premier exercice de calcul numérique demande toujours d’écrire A = √75 − 2√12 + √27 sous la forme a√3 ! Cherche le plus grand carré parfait caché sous chaque radical et ne confonds JAMAIS √(a + b) avec √a + √b !',
    realWorldHook: {
      title: 'Diagonale exacte d’une dalle carrée à Akanda sans arrondi',
      scenario:
        'Pour poser un carrelage diagonal sur une terrasse carrée de côté 5 m à Akanda, l’architecte garde la valeur exacte d = 5√2 m plutôt qu’un arrondi imprécis.',
      question:
        'Comment additionner, multiplier et rationaliser des expressions contenant √2, √3 ou √5 ?',
    },
    unitsTable: [
      { symbol: '√(a × b)', quantity: 'Produit de racines (a,b ≥ 0)', unit: '= √a × √b', instrument: 'Simplification a√b' },
      { symbol: '√(a² × b)', quantity: 'Extraction du carré parfait', unit: '= a√b (si a ≥ 0)', instrument: 'Carrés : 4, 9, 16, 25, 36, 49, 64, 81, 100' },
      { symbol: '1 / (a + √b)', quantity: 'Suppression du radical en bas', unit: '× (a − √b) haut et bas', instrument: 'Expression conjuguée' },
    ],
    experimentOrActivity: {
      title: 'Comparer √(9 + 16) et √9 + √16 sur la calculatrice ou à la main',
      materials: ['Cahier de brouillon', 'Liste des carrés parfaits jusqu’à 144'],
      observation:
        '√(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. Donc 5 ≠ 7 ! Par contre √(9 × 16) = √144 = 12 = 3 × 4.',
      conclusion:
        'La racine carrée est compatible avec la multiplication et la division, mais JAMAIS avec l’addition ni la soustraction !',
    },
    revisionChecklist: [
      'Je connais les carrés parfaits de 1² à 15² (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225).',
      'Je sais réduire une somme du type a√c + b√c − d√c = (a + b − d)√c.',
      'Je sais rendre rationnel un dénominateur avec √b ou (a − √b).',
    ],
    keyFormulas: [
      'Pour a ≥ 0 et b > 0 : √(a × b) = √a × √b  |  √(a / b) = √a / √b  |  (√a)² = a',
      'Piège : √(a + b) ≠ √a + √b  |  √(a²) = |a| (positif !)',
      'Rationalisation : 1/√a = √a / a  |  1/(a − √b) = (a + √b) / (a² − b)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Racines Carrées',
      slogan: 'Extraire les carrés parfaits · Factoriser √c · Conjugué (a−√b)(a+√b) = a² − b',
      summaryBulletPoints: [
        'Pour simplifier √72 : 72 = 36 × 2 ➔ √72 = √36 × √2 = 6√2.',
        'Équation x² = k : si k > 0, deux solutions x = √k et x = −√k ; si k = 0, x = 0 ; si k < 0, aucune solution.',
      ],
      verticalFormulas: [
        {
          name: 'Réduction type BEPC (Forme a√3)',
          badge: '√',
          steps: [
            'A = √75 − 2√12 + √27',
            'A = √(25×3) − 2√(4×3) + √(9×3)',
            'A = 5√3 − 2×2√3 + 3√3',
            'A = (5 − 4 + 3)√3 = 4√3',
          ],
          resultHighlight: 'A = 4√3',
          explanation: 'On fait apparaître le même radical √3 sous chaque racine puis on additionne les coefficients.',
        },
      ],
      kokoTip: 'Pour rationaliser 6 / (3 − √3), multiplie haut et bas par (3 + √3) : en bas on obtient 3² − (√3)² = 9 − 3 = 6, et les 6 se simplifient !',
      pitfallToAvoid: 'Oublier la solution NÉGATIVE (−√k) quand on résout x² = 25 (x = 5 OU x = −5) !',
    },
    sections: [
      {
        title: '1. Opérations sur les radicaux et rationalisation',
        explanation: [
          'Pour tous réels positifs a et b (b ≠ 0) : √(a×b) = √a × √b et √(a/b) = √a / √b.',
          'Pour supprimer un radical au dénominateur d’une fraction, on multiplie le numérateur et le dénominateur par √b (dénominateur simple) ou par l’expression conjuguée (a + √b pour a − √b).',
        ],
        rules: [
          {
            name: 'Expression conjuguée (BEPC)',
            description: 'En utilisant (A − B)(A + B) = A² − B², le radical disparaît totalement du dénominateur.',
            example: 'F = 4 / (√5 − 1) | F = 4(√5 + 1) / ((√5)² − 1²) | F = 4(√5 + 1) / 4 = √5 + 1',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-1-1',
        'math3-racines-carrees',
        'Ex 1 : Réduction type BEPC a√3',
        1,
        'On écrit l’expression A = √48 + √27 − √12 sous la forme a√3.\nQuelle est la valeur de l’entier a ?',
        '5',
        '48 = 16×3, 27 = 9×3, 12 = 4×3 ➔ 4√3 + 3√3 − 2√3.',
        'A = (4 + 3 − 2)√3 = 5√3, donc a = 5.',
        [
          {
            title: 'Décomposer avec le facteur 3',
            explanation: '√48 = 4√3 ; √27 = 3√3 ; √12 = 2√3.',
            math: 'A = 4√3 + 3√3 − 2√3',
          },
          {
            title: 'Réduire les coefficients',
            explanation: '4 + 3 − 2 = 5.',
            math: 'A = 5√3 | a = 5',
            subResult: 'a = 5',
          },
        ],
        undefined,
        '√'
      ),
      mkQcm(
        'math3-1-2',
        'math3-racines-carrees',
        'Ex 2 : Rendre rationnel un dénominateur',
        2,
        'Quelle est l’écriture simplifiée de F = 5 / (√7 − √2) sans radical au dénominateur ?',
        ['√7 + √2', '√7 − √2', '5(√7 + √2)', '(√7 + √2) / 9'],
        '√7 + √2',
        'Multiplie haut et bas par le conjugué (√7 + √2) : en bas (√7)² − (√2)² = 7 − 2 = 5 !',
        'Le 5 du haut et le 5 du bas se simplifient : F = √7 + √2.',
        [
          {
            title: 'Multiplier par le conjugué (√7 + √2)',
            explanation: '(√7 − √2)(√7 + √2) = 7 − 2 = 5.',
            math: 'F = 5(√7 + √2) / (7 − 2) | F = 5(√7 + √2) / 5 | F = √7 + √2',
            subResult: '√7 + √2',
          },
        ],
        '⚖️'
      ),
    ],
  },

  {
    id: 'math3-calcul-litteral-equations',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'nombres-calculs',
    order: 2,
    title: 'Calcul littéral, Factorisation & Équations-produits (3ème BEPC)',
    badge: 'Maths 3ème · Ch. 2',
    shortDesc: 'Identités remarquables en 3ème, factorisation en deux temps, équations-produits (ax+b)(cx+d)=0 et valeurs interdites.',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-rose-500',
    readingTimeMinutes: 15,
    visualizerType: 'calcul-litteral',
    illustrationKey: 'identites-factorisation',
    bossMeta: { name: 'MAÎTRE DES POLYNÔMES', emoji: '📦', xp: 170 },
    kokoSpeech:
      'Au BEPC, la question classique vaut 4 points : 1) Développer E ; 2) Factoriser E ; 3) Résoudre E = 0 ! Retiens la règle d’or de l’équation-produit nul : Un produit de facteurs est nul SI ET SEULEMENT SI au moins un de ses facteurs est nul !',
    realWorldHook: {
      title: 'Optimiser la bordure d’un terrain de basket scolaire à Libreville',
      scenario:
        'L’aire libre autour d’un terrain carré s’exprime par A(x) = (2x + 3)² − 25. On cherche pour quelle valeur de x cette aire devient nulle ou égale à une surface donnée.',
      question:
        'Comment factoriser A(x) avec a² − b² puis résoudre A(x) = 0 ?',
    },
    unitsTable: [
      { symbol: '(a+b)²', quantity: 'Carré d’une somme', unit: 'a² + 2ab + b²', instrument: 'Développement' },
      { symbol: '(a−b)²', quantity: 'Carré d’une différence', unit: 'a² − 2ab + b²', instrument: 'Attention au −2ab' },
      { symbol: 'a² − b²', quantity: 'Différence de deux carrés', unit: '(a − b)(a + b)', instrument: 'Factorisation clé BEPC' },
    ],
    experimentOrActivity: {
      title: 'Vérifier sa factorisation en testant x = 0 et x = 1',
      materials: ['Expression développée E', 'Expression factorisée F'],
      observation:
        'Si E(1) = 12 et que ta forme factorisée donne F(1) = 12 et F(0) = E(0), ta factorisation est juste à 99% !',
      conclusion:
        'Toujours contrôler son développement et sa factorisation en remplaçant x par 0 ou 1 au brouillon.',
    },
    revisionChecklist: [
      'Je sais factoriser avec un facteur commun (y compris (x+2)² − 3(x+2) ou signe caché (3−x) = −(x−3)).',
      'Je sais factoriser (ax+b)² − c² grâce à A² − B² = (A−B)(A+B).',
      'Je sais résoudre une équation-produit (ax+b)(cx+d) = 0 et conclure avec l’ensemble S = {x₁ ; x₂}.',
    ],
    keyFormulas: [
      'Équation-produit nul : A × B = 0  ⟺  A = 0  ou  B = 0',
      'Équation rationnelle : N(x) / D(x) = 0  ⟺  D(x) ≠ 0 (valeur interdite !) ET N(x) = 0',
      'Factorisation double : (2x + 3)² − 25 = (2x + 3 − 5)(2x + 3 + 5) = (2x − 2)(2x + 8)',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Factorisation & Équation-Produit',
      slogan: 'Facteur commun ou A²−B² ➔ Produit nul : A = 0 ou B = 0',
      summaryBulletPoints: [
        'Pour résoudre E = 0 au BEPC, utilise TOUJOURS la forme FACTORISÉE, jamais la forme développée !',
        'Pour une fraction algébrique N(x)/D(x), commence toujours par chercher les valeurs interdites où D(x) = 0.',
      ],
      verticalFormulas: [
        {
          name: 'Résoudre (2x − 6)(3x + 12) = 0',
          badge: '⚖️',
          steps: [
            'Un produit est nul ssi un facteur est nul :',
            '2x − 6 = 0     ou     3x + 12 = 0',
            '2x = 6         ou     3x = −12',
            'x = 3          ou     x = −4',
          ],
          resultHighlight: 'S = {−4 ; 3}',
          explanation: 'On écrit les deux solutions entre accolades dans l’ordre croissant.',
        },
      ],
      kokoTip: 'Si tu dois factoriser (x − 3)² + (3 − x)(2x + 1), transforme (3 − x) en −(x − 3) pour faire apparaître le facteur commun (x − 3) !',
      pitfallToAvoid: 'Oublier de changer les signes après un « − » devant des parenthèses lors de la factorisation de A² − B² !',
    },
    sections: [
      {
        title: '1. Factorisation et Équations-produits / Fractions rationnelles',
        explanation: [
          'Factoriser une expression consiste à transformer une somme algébrique en un produit de facteurs (facteur commun ou identité a² − b²).',
          'Cela permet ensuite de résoudre facilement les équations du second degré ramenées à A(x)·B(x) = 0.',
        ],
        rules: [
          {
            name: 'Condition d’existence d’une fraction rationnelle',
            description: 'Une expression Q(x) = N(x) / D(x) n’existe que si D(x) ≠ 0.',
            example: 'Q(x) = (x² − 9) / (x − 3) | Valeur interdite : x − 3 = 0 ➔ x = 3 | Pour x ≠ 3 : Q(x) = (x − 3)(x + 3)/(x − 3) = x + 3',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'math3-2-1',
        'math3-calcul-litteral-equations',
        'Ex 1 : Solutions d’une équation-produit',
        1,
        'Quelles sont les solutions de l’équation (x − 5)(2x + 6) = 0 ?',
        ['S = {−3 ; 5}', 'S = {−5 ; 3}', 'S = {3 ; 5}', 'S = {−6 ; 5}'],
        'S = {−3 ; 5}',
        'Résous x − 5 = 0 et 2x + 6 = 0 séparément.',
        'x = 5 ou 2x = −6 donc x = −3 ➔ S = {−3 ; 5}.',
        [
          {
            title: 'Annuler chaque facteur',
            explanation: 'x − 5 = 0 ➔ x = 5 ; 2x + 6 = 0 ➔ 2x = −6 ➔ x = −3.',
            math: 'x = 5 ou x = −3 | S = {−3 ; 5}',
            subResult: 'S = {−3 ; 5}',
          },
        ],
        '⚖️'
      ),
      mkQcm(
        'math3-2-2',
        'math3-calcul-litteral-equations',
        'Ex 2 : Factoriser avec a² − b²',
        2,
        'Factoriser l’expression E = (3x + 1)² − 16.',
        ['(3x − 3)(3x + 5)', '(3x − 15)(3x + 17)', '(3x − 4)²', '(3x + 1)(3x − 15)'],
        '(3x − 3)(3x + 5)',
        'Écris 16 = 4², puis applique A² − B² = (A − B)(A + B) avec A = 3x + 1 et B = 4.',
        '(3x + 1 − 4)(3x + 1 + 4) = (3x − 3)(3x + 5).',
        [
          {
            title: 'Identifier A² − B²',
            explanation: 'A = 3x + 1 et B = 4.',
            math: 'E = (3x + 1)² − 4² | E = ((3x + 1) − 4)((3x + 1) + 4) | E = (3x − 3)(3x + 5)',
            subResult: '(3x − 3)(3x + 5)',
          },
        ],
        '📦'
      ),
    ],
  },

  {
    id: 'math3-inequations-intervalles',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'nombres-calculs',
    order: 3,
    title: 'Inéquations du 1er degré, Intervalles de ℝ & Systèmes d’inéquations',
    badge: 'Maths 3ème · Ch. 3',
    shortDesc: 'Notations d’intervalles [a ; b], ]−∞ ; a[, réunion/intersection, résolution d’inéquations et représentation sur droite graduée.',
    themeColor: '#f43f5e',
    themeGradient: 'from-rose-500 via-pink-500 to-amber-400',
    readingTimeMinutes: 13,
    visualizerType: 'equations',
    illustrationKey: 'inequations',
    bossMeta: { name: 'GARDIEN DES INTERVALLES', emoji: '↕️', xp: 160 },
    kokoSpeech:
      'En 3ème, on ne s’arrête plus à « x ≤ 4 » : on écrit l’ensemble des solutions sous forme d’INTERVALLE : S = ]−∞ ; 4] ! Et n’oublie jamais : du côté de −∞ ou +∞, le crochet est TOUJOURS ouvert (tourné vers l’extérieur) !',
    realWorldHook: {
      title: 'Comparer deux tarifs de transport ou téléphonie à Libreville',
      scenario:
        'Un opérateur propose l’offre A (2 000 F fixe + 50 F/min) et l’offre B (100 F/min sans abonnement). À partir de combien de minutes x l’offre A devient-elle moins chère que B ?',
      question:
        'Comment traduire par une inéquation et donner la réponse sous forme d’intervalle ?',
    },
    unitsTable: [
      { symbol: 'x ≤ a', quantity: 'Inférieur ou égal à a', unit: ']−∞ ; a]', instrument: 'Crochet fermé en a' },
      { symbol: 'x < a', quantity: 'Strictement inférieur à a', unit: ']−∞ ; a[', instrument: 'Crochet ouvert en a' },
      { symbol: 'a ≤ x < b', quantity: 'Encadrement', unit: '[a ; b[', instrument: 'Intersection de 2 inéquations' },
    ],
    experimentOrActivity: {
      title: 'Trouver l’intersection A ∩ B de deux intervalles sur une règle',
      materials: ['1 droite graduée', '2 crayons (vert et bleu)'],
      observation:
        'Si x ≥ −2 (colorié en vert) ET x < 5 (colorié en bleu), la zone doublement coloriée est [−2 ; 5[.',
      conclusion:
        'La solution d’un système de deux inéquations est l’INTERSECTION (∩) des deux intervalles solutions.',
    },
    revisionChecklist: [
      'Je sais passer d’une inégalité (x > −3) à un intervalle (]−3 ; +∞[) et à un dessin sur droite graduée.',
      'Je pense toujours à INVERSER le sens de l’inégalité lorsque je multiplie ou divise par un nombre NÉGATIF.',
      'Je sais trouver l’intersection de deux intervalles pour un système d’inéquations.',
    ],
    keyFormulas: [
      'Règle critique : si k < 0, alors kx ≤ c  ⟺  x ≥ c / k (inversion du sens)',
      'Crochets : ≤ ou ≥ ➔ crochet FERMÉ vers le nombre | < ou > ➔ crochet OUVERT | ±∞ ➔ toujours OUVERT',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Inéquations & Intervalles',
      slogan: 'Diviser par négatif ➔ Retourner le signe · ±∞ toujours ouvert ]...[',
      summaryBulletPoints: [
        'x ≥ a ➔ S = [a ; +∞[  |  x > a ➔ S = ]a ; +∞[.',
        'x ≤ a ➔ S = ]−∞ ; a]  |  x < a ➔ S = ]−∞ ; a[.',
        'A ∩ B = éléments appartenant à la fois à A ET à B.',
      ],
      verticalFormulas: [
        {
          name: 'Inéquation avec coefficient négatif',
          badge: '⚠️',
          steps: [
            '5 − 3x ≤ 17',
            '−3x ≤ 17 − 5',
            '−3x ≤ 12',
            'x ≥ 12 ÷ (−3)   (on inverse ≤ en ≥ !)',
            'x ≥ −4  ➔  S = [−4 ; +∞[',
          ],
          resultHighlight: 'S = [−4 ; +∞[',
          explanation: 'La division par −3 (< 0) retourne le sens de l’inégalité.',
        },
      ],
      kokoTip: 'Imagine que le crochet ferme la porte aux nombres interdits (ouvert) ou les accueille à l’intérieur (fermé) !',
      pitfallToAvoid: 'Écrire [−∞ ; 4] ! L’infini n’est jamais un nombre : on écrit TOUJOURS ]−∞ ; 4] !',
    },
    sections: [
      {
        title: '1. Intervalles de ℝ et systèmes d’inéquations',
        explanation: [
          'En 3ème, l’ensemble des solutions d’une inéquation s’écrit à l’aide d’un intervalle.',
          'Pour résoudre un système de deux inéquations à une inconnue, on résout chacune séparément puis on prend la partie commune (intersection ∩) sur la droite graduée.',
        ],
        rules: [
          {
            name: 'Système de deux inéquations',
            description: 'Les solutions doivent vérifier simultanément les deux conditions.',
            example: '2x − 4 ≥ 0 (x ≥ 2) ET x + 1 < 7 (x < 6) | S₁ = [2 ; +∞[ et S₂ = ]−∞ ; 6[ | S = S₁ ∩ S₂ = [2 ; 6[',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'math3-3-1',
        'math3-inequations-intervalles',
        'Ex 1 : Écrire sous forme d’intervalle',
        1,
        'Quel intervalle correspond à l’ensemble des réels x tels que −3 < x ≤ 7 ?',
        [']−3 ; 7]', '[−3 ; 7[', '[−3 ; 7]', ']−3 ; 7['],
        ']−3 ; 7]',
        'Strict (<) ➔ crochet ouvert en −3 ; large (≤) ➔ crochet fermé en 7.',
        '−3 est exclu (ouvert « ]−3 ») et 7 est inclus (fermé « 7] »).',
        [
          {
            title: 'Traduire chaque borne',
            explanation: '−3 < x signifie x > −3 (exclu) ; x ≤ 7 inclut 7.',
            math: '−3 < x ≤ 7  ⟺  x ∈ ]−3 ; 7]',
            subResult: ']−3 ; 7]',
          },
        ],
        '↕️'
      ),
      mkQcm(
        'math3-3-2',
        'math3-inequations-intervalles',
        'Ex 2 : Résoudre 4 − 2x > 10',
        2,
        'Quel est l’intervalle solution de l’inéquation 4 − 2x > 10 ?',
        [']−∞ ; −3[', ']−3 ; +∞[', ']−∞ ; 3[', ']−∞ ; −3]'],
        ']−∞ ; −3[',
        '−2x > 6, puis divise par −2 en RENVERSANT le signe > en < !',
        'x < −3, soit S = ]−∞ ; −3[.',
        [
          {
            title: 'Isoler −2x puis diviser par −2',
            explanation: '−2x > 10 − 4 = 6. Division par −2 (< 0) inverse > en <.',
            math: '−2x > 6 | x < 6 ÷ (−2) | x < −3 | S = ]−∞ ; −3[',
            subResult: ']−∞ ; −3[',
          },
        ],
        '⚠️'
      ),
    ],
  },

  {
    id: 'math3-systemes-equations',
    subject: 'maths',
    gradeLevel: '3eme',
    domainId: 'nombres-calculs',
    order: 4,
    title: 'Systèmes de deux équations du 1er degré à deux inconnues (x ; y)',
    badge: 'Maths 3ème · Ch. 4',
    shortDesc: 'Méthode par substitution, méthode par combinaison linéaire, interprétation graphique (droites sécantes) et problèmes au Gabon.',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-sky-500',
    readingTimeMinutes: 15,
    visualizerType: 'equations',
    illustrationKey: 'systemes-equations',
    bossMeta: { name: 'STRATÈGE DES SYSTÈMES', emoji: '🔗', xp: 180 },
    kokoSpeech:
      'Le problème avec 2 inconnues au marché Mont-Bouët ou au Transgabonais est INCONTOURNABLE au BEPC ! Deux méthodes infaillibles : la SUBSTITUTION (isoler x ou y quand son coefficient vaut 1) ou la COMBINAISON (additionner pour éliminer une lettre) !',
    realWorldHook: {
      title: 'Achats de mangues et ananas au marché Mont-Bouët (F CFA)',
      scenario:
        'Amina achète 3 mangues et 2 ananas pour 2 400 F CFA. Koffi achète 2 mangues et 4 ananas aux mêmes prix pour 3 200 F CFA.',
      question:
        'Comment poser un système de deux équations à deux inconnues (x ; y) et trouver le prix exact d’une mangue et d’un ananas ?',
    },
    unitsTable: [
      { symbol: '(x ; y)', quantity: 'Couple solution du système', unit: 'Ordre important : x puis y', instrument: 'S = {(x ; y)}' },
      { symbol: 'Substitution', quantity: 'Exprimer x = … (ou y = …)', unit: 'Idéal si coef = 1 ou −1', instrument: 'Remplacer dans l’autre éq.' },
      { symbol: 'Combinaison', quantity: 'Multiplier pour avoir +ky et −ky', unit: 'Additionner membre à membre', instrument: 'Élimine 1 inconnue' },
    ],
    experimentOrActivity: {
      title: 'Résoudre graphiquement un système en traçant deux droites',
      materials: ['1 repère orthonormé', '2 droites d₁ et d₂'],
      observation:
        'Les coordonnées (x ; y) du point d’intersection des deux droites vérifient simultanément les deux équations !',
      conclusion:
        'Un système a 1 solution unique (droites sécantes), 0 solution (droites parallèles strictes) ou une infinité (droites confondues).',
    },
    revisionChecklist: [
      'Je sais résoudre un système par substitution ET par combinaison linéaire.',
      'Je pense à écrire la solution finale sous forme de couple S = {(x ; y)}.',
      'Je sais mettre un problème gabonais en équation à 2 inconnues (choix de x et y, système, résolution, vérification).',
    ],
    keyFormulas: [
      'Méthode par combinaison : on multiplie les lignes pour obtenir deux coefficients opposés (+k et −k) puis on additionne.',
      'Méthode par substitution : on exprime une inconnue en fonction de l’autre et on remplace.',
      'Vérification : toujours réinjecter le couple (x ; y) dans les DEUX équations de départ !',
    ],
    memoSheet: {
      title: 'Fiche Mémo BEPC : Systèmes de 2 Équations',
      slogan: 'Choix des inconnues · Éliminer une lettre · Vérifier le couple (x ; y)',
      summaryBulletPoints: [
        'Toujours bien distinguer x et y dans le couple solution : {(x ; y)} ≠ {(y ; x)}.',
        'Si les coefficients directeurs des deux droites sont différents, le système a exactement 1 couple solution.',
      ],
      verticalFormulas: [
        {
          name: 'Résolution par Combinaison Linéaire',
          badge: '🔗',
          steps: [
            '(1) 3x + 2y = 2 400',
            '(2) 2x + 4y = 3 200',
            'On multiplie (1) par −2 : −6x − 4y = −4 800',
            'On additionne avec (2) : (−6x + 2x) + 0 = −4 800 + 3 200',
            '−4x = −1 600  ➔  x = 400',
            'Dans (1) : 3(400) + 2y = 2 400 ➔ 2y = 1 200 ➔ y = 600',
          ],
          resultHighlight: 'S = {(400 ; 600)}',
          explanation: 'Une mangue coûte 400 F CFA et un ananas coûte 600 F CFA.',
        },
      ],
      kokoTip: 'Avant de rendre ta copie au BEPC, teste tes deux valeurs dans les DEUX équations du départ : 3(400)+2(600)=2400 et 2(400)+4(600)=3200 ! 100% sûr !',
      pitfallToAvoid: 'Multiplier seulement le membre de gauche d’une équation lors de la combinaison en oubliant de multiplier le nombre à droite du = !',
    },
    sections: [
      {
        title: '1. Substitution, Combinaison et Problèmes',
        explanation: [
          'Un système de deux équations du 1er degré à deux inconnues (x ; y) cherche les couples de nombres qui vérifient simultanément les deux égalités.',
          'Par substitution, on isole une inconnue dans une équation et on la remplace dans l’autre. Par combinaison, on multiplie chaque équation par un nombre bien choisi pour annuler une inconnue par addition.',
        ],
        rules: [
          {
            name: 'Les 4 étapes d’un problème BEPC à 2 inconnues',
            description: '1) Choix précis des inconnues x et y ; 2) Traduction de l’énoncé en 2 équations ; 3) Résolution du système ; 4) Phrase réponse avec unités (F CFA, élèves, kg…).',
            example: 'x + y = 30 et 2x + y = 48 | Soustraction : (2x + y) − (x + y) = 48 − 30 | x = 18 et y = 12',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'math3-4-1',
        'math3-systemes-equations',
        'Ex 1 : Trouver x dans un système simple',
        1,
        'On considère le système :\n x + y = 18\n x − y = 6\nQuelle est la valeur de x ?',
        '12',
        'Additionne les deux équations membre à membre : (+y) + (−y) s’annulent !',
        '2x = 24 donc x = 12 (et y = 6).',
        [
          {
            title: 'Additionner les deux équations',
            explanation: '(x + y) + (x − y) = 18 + 6.',
            math: '2x = 24 | x = 24 ÷ 2 = 12',
            subResult: 'x = 12',
          },
        ],
        undefined,
        '🔗'
      ),
      mkNum(
        'math3-4-2',
        'math3-systemes-equations',
        'Ex 2 : Billets de spectacle à Libreville (en F CFA)',
        2,
        'Dans une salle de cinéma à Libreville, un billet adulte coûte x F et un billet enfant coûte y F.\n• 2 adultes + 1 enfant paient 7 000 F CFA.\n• 1 adulte + 2 enfants paient 5 000 F CFA.\nQuel est le prix x d’un billet adulte (en F CFA) ?',
        '3000',
        'Multiplie la 1ère équation par 2 : 4x + 2y = 14 000, puis soustrais la 2ème (x + 2y = 5 000).',
        '3x = 9 000 donc x = 3 000 F CFA (et y = 1 000 F CFA).',
        [
          {
            title: 'Éliminer y par combinaison',
            explanation: '2×(2x + y) − (x + 2y) = 14 000 − 5 000.',
            math: '4x − x = 9 000 | 3x = 9 000 | x = 3 000 F CFA',
            subResult: '3 000 F CFA',
          },
        ],
        'F CFA',
        '🎟️'
      ),
    ],
  },
];
