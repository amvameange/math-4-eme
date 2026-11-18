import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_TC_INTEGRALES_PROBAS: Chapter[] = [
  {
    id: 'mathTc-calcul-integral',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'mesures',
    order: 9,
    title: 'Calcul Intégral, Intégration par Parties (IPP), Aires & Volumes',
    badge: 'Maths Tle C · Ch. 9',
    shortDesc: 'Intégrale définie, relation de Chasles, valeur moyenne, intégration par parties (IPP), changement de variable affine, calcul d’aires et volumes de révolution.',
    themeColor: '#f97316',
    themeGradient: 'from-orange-600 via-amber-500 to-yellow-400',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-calcul-integral',
    bossMeta: { name: 'MAÎTRE DES INTÉGRALES', emoji: '∫', xp: 210 },
    kokoSpeech:
      'Pour ne jamais te tromper d’ordre dans l’Intégration Par Parties (IPP), utilise le moyen mnémotechnique ALPES : dérive en priorité Arc, Logarithme, Polynôme, puis Exponentielle/Sinus !',
    realWorldHook: {
      title: 'Volume d’un réservoir pétrolier paraboloïde à Port-Gentil',
      scenario:
        'La cuve est obtenue par rotation autour de l’axe (Ox) de la courbe y = √(2x) pour x ∈ [0 ; 4] (en mètres). Son volume exact est V = π ∫₀⁴ [f(x)]² dx.',
      question:
        'Comment calculer des aires entre deux courbes, intégrer par parties x e^x ou ln x, et obtenir le volume exact d’un solide de révolution ?',
    },
    unitsTable: [
      { symbol: '∫_a^b f(x)dx', quantity: 'Intégrale définie', unit: 'F(b) - F(a)', instrument: 'Aire algébrique' },
      { symbol: 'A = ∫_a^b |f-g| u.a.', quantity: 'Aire entre 2 courbes', unit: 'u.a. = ||i⃗||·||j⃗||', instrument: 'Multiplier par unité d’aire !' },
      { symbol: 'V = π ∫_a^b f²(x)dx', quantity: 'Volume de révolution', unit: 'u.v. = ||i⃗||³', instrument: 'Rotation autour de (Ox)' },
      { symbol: 'μ = 1/(b-a) ∫ f', quantity: 'Valeur moyenne', unit: 'Unité de f', instrument: 'Théorème de la moyenne' },
    ],
    experimentOrActivity: {
      title: 'Méthode des rectangles et solide de révolution',
      materials: ['Aire sous courbe entre a et b', 'Somme de Riemann (b-a)/n Σ f(a + k(b-a)/n)', 'Disques d’épaisseur dx'],
      observation:
        'Quand le nombre de rectangles n → +∞, la somme des aires converge exactement vers ∫_a^b f(x)dx. De même, le volume est la somme des cylindres élémentaires π y² dx.',
      conclusion:
        'L’intégrale relie directement géométrie (aires, volumes), analyse (primitives, suites I_n) et probabilité (lois continues).',
    },
    revisionChecklist: [
      'Je sais calculer une intégrale par primitive directe, par décomposition en éléments simples ou par IPP.',
      'Je pense à multiplier par l’unité d’aire u.a. (en cm²) lorsque le repère a des unités graphiques données.',
      'Je sais démontrer une relation de récurrence entre I_n et I_{n+1} par IPP (intégrales de Wallis ou I_n = ∫ xⁿ e^(-x) dx).',
    ],
    keyFormulas: [
      'IPP : ∫_a^b u’(x) v(x) dx = [u(x) v(x)]_a^b - ∫_a^b u(x) v’(x) dx',
      'Linéarité & Chasles : ∫_a^c f + ∫_c^b f = ∫_a^b f  ;  si f ≤ g sur [a, b] alors ∫_a^b f ≤ ∫_a^b g',
      'Aire (en u.a.) si f ≥ g sur [a, b] : A = ∫_a^b (f(x) - g(x)) dx × (||i⃗|| · ||j⃗||)',
      'Volume de révolution autour de (Ox) : V = π ∫_a^b [f(x)]² dx (en u.v.)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Calcul Intégral, IPP & Volumes',
      slogan: 'IPP : [u v] - ∫ u v’  ·  Aire × u.a.  ·  V = π ∫ f²',
      summaryBulletPoints: [
        'Pour intégrer ∫ ln(x) dx, pose v(x) = ln x (à dériver !) et u’(x) = 1 (à primitiver en x).',
        'Fonction paire sur [-a, a] : ∫_{-a}^a f = 2 ∫₀^a f. Fonction impaire sur [-a, a] : ∫_{-a}^a f = 0.',
        'Inégalité de la moyenne : si m ≤ f(x) ≤ M sur [a, b], alors m(b - a) ≤ ∫_a^b f(x)dx ≤ M(b - a).',
      ],
      verticalFormulas: [
        {
          name: 'IPP classique : I = ∫₁^e ln(x) dx',
          badge: '∫',
          steps: [
            'v(x) = ln x ➔ v’(x) = 1/x   |   u’(x) = 1 ➔ u(x) = x',
            'I = [x ln x]₁^e - ∫₁^e x · (1/x) dx',
            'I = (e·1 - 1·0) - ∫₁^e 1 dx = e - (e - 1)',
          ],
          resultHighlight: '∫₁^e ln(x) dx = 1',
          explanation: 'Résultat ultra-classique : la primitive de ln(x) est x ln x - x !',
        },
      ],
      kokoTip: 'Si l’unité graphique est 2 cm sur (Ox) et 3 cm sur (Oy), alors 1 u.a. = 2 × 3 = 6 cm² ! Ne l’oublie jamais à la dernière ligne !',
      pitfallToAvoid: 'Intervertir l’ordre des bornes F(a) - F(b) au lieu de F(b) - F(a), ou oublier le carré sur f(x) dans V = π ∫ f²(x) dx.',
    },
    sections: [
      {
        title: '1. Propriétés de l’intégrale, IPP et suites d’intégrales I_n',
        illustrationNote: 'Domaine délimité par C_f, l’axe des abscisses et x=a, x=b ; découpage de Chasles.',
        explanation: [
          'Si F est une primitive de f continue sur I, ∫_a^b f(t)dt = F(b) - F(a). De plus, Φ(x) = ∫_a^x f(t)dt est l’unique primitive de f qui s’annule en a.',
          'L’intégration par parties provient de la formule (uv)’ = u’v + uv’.',
        ],
        rules: [
          {
            name: 'Positivité et inégalité triangulaire intégrale',
            description: '|∫_a^b f(x)dx| ≤ ∫_a^b |f(x)|dx (pour a ≤ b).',
            example: 'Sur [0, 1], 0 ≤ xⁿ e^x ≤ e xⁿ  ⟹  0 ≤ ∫₀¹ xⁿ e^x dx ≤ e / (n + 1) → 0',
          },
        ],
        commonMistakes: ['Appliquer la positivité ∫_a^b f ≥ 0 lorsque b < a !'],
      },
      {
        title: '2. Calcul d’aires planes et de volumes de révolution',
        illustrationNote: 'Disque infinitésimal de rayon y = f(x) et d’épaisseur dx balayant le solide de révolution.',
        explanation: [
          'Lorsqu’une courbe coupe l’axe (Ox) ou une autre courbe, il faut découper l’intervalle selon le signe de f(x) - g(x).',
          'La rotation autour de (Ox) engendre un solide de volume V = π ∫_a^b f(x)² dx en unités de volume.',
        ],
        rules: [
          {
            name: 'Unités d’aire et de volume',
            description: 'En cm² : multiplier par ||i⃗||·||j⃗||. En cm³ : multiplier par ||i⃗||·||j⃗||².',
            example: 'Repère orthonormé d’unité 2 cm : 1 u.v. = 2³ = 8 cm³',
          },
        ],
        commonMistakes: ['Oublier la valeur absolue quand C_f passe sous C_g.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-int-1',
        'mathTc-calcul-integral',
        'Intégrale directe',
        1,
        'Calcule I = ∫₀¹ (3x² + 2x + 1) dx.',
        '3',
        'Une primitive est x³ + x² + x.',
        'I = (1 + 1 + 1) - 0 = 3.',
        [
          { title: 'Primitive', explanation: 'Intégration terme à terme.', math: 'F(x) = x³ + x² + x' },
          { title: 'Évaluation', explanation: 'F(1) - F(0).', math: '1 + 1 + 1 - 0 = 3' },
        ]
      ),
      mkNum(
        'mathTc-int-2',
        'mathTc-calcul-integral',
        'Intégration par parties avec e^x',
        2,
        'À l’aide d’une intégration par parties, calcule J = ∫₀¹ x e^x dx (donne la valeur exacte arrondie à 0,01 si besoin, ou ici J = 1).',
        '1',
        'Pose v(x) = x (v’=1) et u’(x) = e^x (u=e^x).',
        '[x e^x]₀¹ - ∫₀¹ e^x dx = e - (e - 1) = 1.',
        [
          { title: 'Choix de u’ et v', explanation: 'ALPES : Polynôme avant Exponentielle.', math: 'v(x) = x, u’(x) = e^x' },
          { title: 'Calcul', explanation: 'e - (e - 1) = 1.', math: 'J = 1' },
        ]
      ),
      mkNum(
        'mathTc-int-3',
        'mathTc-calcul-integral',
        'Aire avec conversion graphique',
        2,
        'Dans un repère orthogonal d’unités ||i⃗|| = 2 cm et ||j⃗|| = 3 cm, l’aire sous une courbe vaut ∫₁³ (2/x) dx = 2 ln 3 u.a. Quelle est son aire en cm² (arrondie à 0,01, avec ln 3 ≈ 1,0986) ?',
        '13.18',
        '1 u.a. = 2 × 3 = 6 cm². Multiplie 2 ln 3 par 6.',
        'A = 12 ln 3 ≈ 12 × 1,0986 = 13,18 cm².',
        [
          { title: 'Unité d’aire', explanation: '2 cm × 3 cm = 6 cm².', math: '1 u.a. = 6 cm²' },
          { title: 'Conversion', explanation: '6 × 2 ln 3 = 12 ln 3.', math: 'A ≈ 13,18 cm²' },
        ],
        'cm²'
      ),
      mkNum(
        'mathTc-int-4',
        'mathTc-calcul-integral',
        'Volume de révolution d’un cône',
        3,
        'La droite y = 2x pour x ∈ [0 ; 3] tourne autour de l’axe (Ox) dans un repère orthonormé d’unité 1 cm. Calcule le volume V / π du solide obtenu (en cm³ sans π).',
        '36',
        'V = π ∫₀³ (2x)² dx = π ∫₀³ 4x² dx.',
        'V = π [4x³/3]₀³ = π × 4×27/3 = 36π cm³, donc V/π = 36.',
        [
          { title: 'Formule du volume', explanation: 'V = π ∫ [f(x)]² dx.', math: 'V/π = ∫₀³ 4x² dx = [4x³/3]₀³ = 36' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-denombrement-probas',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'mesures',
    order: 10,
    title: 'Dénombrement, Probabilités Conditionnelles & Formule de Bayes',
    badge: 'Maths Tle C · Ch. 10',
    shortDesc: 'Arrangements, permutations, combinaisons (triangle de Pascal), tirages simultanés/successifs, arbre pondéré, probabilités totales et indépendance.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-600 via-rose-500 to-red-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-probas-conditionnelles',
    bossMeta: { name: 'MAÎTRE DES PROBABILITÉS', emoji: '🎲', xp: 200 },
    kokoSpeech:
      'Avant tout calcul de dénombrement, pose-toi les 2 questions magiques : L’ORDRE compte-t-il ? Y a-t-il REMISE ? Et en probabilité conditionnelle, trace TOUJOURS l’arbre pondéré !',
    realWorldHook: {
      title: 'Dépistage médical et contrôle qualité sur une chaîne de production',
      scenario:
        'Un test de dépistage détecte 98% des cas positifs mais donne 2% de faux positifs sur une population touchée à 5%. Un patient est testé positif.',
      question:
        'Quelle est la probabilité réelle P_T(M) qu’il soit malade (formule des probabilités totales et inversion de Bayes) ?',
    },
    unitsTable: [
      { symbol: 'C_n^p = n! / [p!(n-p)!]', quantity: 'Combinaison', unit: 'Sans ordre, sans remise', instrument: 'Tirage simultané' },
      { symbol: 'A_n^p = n! / (n-p)!', quantity: 'Arrangement', unit: 'Avec ordre, sans remise', instrument: 'Tirage successif sans remise' },
      { symbol: 'n^p', quantity: 'p-uplet', unit: 'Avec ordre, avec remise', instrument: 'Code / lancers de dés' },
      { symbol: 'P_B(A) = P(A∩B)/P(B)', quantity: 'Proba conditionnelle', unit: '∈ [0 ; 1]', instrument: 'Arbre pondéré' },
    ],
    experimentOrActivity: {
      title: 'Arbre pondéré et partition de l’univers Ω',
      materials: ['Partition (B₁, B₂, ..., B_k)', 'Branches primaires P(B_i)', 'Branches secondaires P_{B_i}(A)'],
      observation:
        'La probabilité d’un chemin est le produit des probabilités rencontrées, et P(A) est la somme des probabilités des chemins menant à A.',
      conclusion:
        'P_A(B) = [P(B) · P_B(A)] / P(A) permet d’inverser le conditionnement (théorème de Bayes).',
    },
    revisionChecklist: [
      'Je sais distinguer tirage simultané (C_n^p), successif sans remise (A_n^p) et successif avec remise (n^p).',
      'Je maîtrise la formule du binôme de Newton : (a + b)ⁿ = Σ C_n^k a^k b^(n-k).',
      'Je sais utiliser les probabilités totales P(A) = P(A∩B) + P(A∩B̄) et tester l’indépendance P(A∩B) = P(A)×P(B).',
    ],
    keyFormulas: [
      'C_n^p = C_n^(n-p)  ;  C_n^p + C_n^(p+1) = C_(n+1)^(p+1)  (Pascal)',
      'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)  ;  P(Ā) = 1 - P(A)',
      'Probabilités totales : P(A) = P(B)P_B(A) + P(B̄)P_{B̄}(A)',
      'Indépendance : A et B indépendants  ⟺  P(A ∩ B) = P(A) · P(B)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Dénombrement & Probas Conditionnelles',
      slogan: 'Simultané ➔ C_n^p · Conditionnelle ➔ Arbre & Total',
      summaryBulletPoints: [
        '« Au moins un » se calcule presque toujours par l’événement contraire : 1 - P(aucun) !',
        'A et B indépendants signifie P_B(A) = P(A), à NE PAS confondre avec incompatibles (A ∩ B = ∅).',
        'En tirage simultané de p boules parmi n, card(Ω) = C_n^p (équiprobabilité).',
      ],
      verticalFormulas: [
        {
          name: 'Inversion de Bayes sur arbre à 2 branches',
          badge: '🌳',
          steps: [
            'P(M) = 0,05 ; P_M(T) = 0,98 ; P_{M̄}(T) = 0,02',
            'P(T) = 0,05×0,98 + 0,95×0,02 = 0,049 + 0,019 = 0,068',
            'P_T(M) = P(M ∩ T) / P(T) = 0,049 / 0,068',
          ],
          resultHighlight: 'P_T(M) ≈ 0,721 (72,1%)',
          explanation: 'Même avec un test fiable à 98%, une maladie rare donne un taux de faux positifs important.',
        },
      ],
      kokoTip: 'Pour le binôme de Newton avec signe alterné (1 - 1)ⁿ = 0, on obtient Σ (-1)^k C_n^k = 0 !',
      pitfallToAvoid: 'Confondre P_A(B) et P_B(A) lors de la lecture de l’énoncé (« sachant A » est en indice !).',
    },
    sections: [
      {
        title: '1. Analyse combinatoire & binôme de Newton',
        illustrationNote: 'Tableau récapitulatif Ordre / Remise (n^p, A_n^p, C_n^p) et triangle de Pascal.',
        explanation: [
          'Le choix du modèle de dénombrement dépend de l’existence d’un ordre et d’une éventuelle répétition.',
          'La formule de Pascal et le binôme de Newton permettent de simplifier de nombreuses sommes combinatoires.',
        ],
        rules: [
          {
            name: 'Tirage dans une urne à plusieurs couleurs',
            description: 'Pour tirer simultanément k boules de couleurs diverses, on multiplie les combinaisons C_{n_i}^{k_i}.',
            example: 'Urne (5 R, 4 B), tirage simultané de 3 boules : P(2R et 1B) = (C_5² × C_4¹) / C_9³ = 40 / 84 = 10/21',
          },
        ],
        commonMistakes: ['Utiliser A_n^p au numérateur et C_n^p au dénominateur (ou vice versa) : numérateur et dénominateur doivent suivre le même modèle !'],
      },
      {
        title: '2. Probabilités conditionnelles, totales et indépendance',
        illustrationNote: 'Arbre pondéré complet illustrant la formule des probabilités totales et Bayes.',
        explanation: [
          'Sur un arbre pondéré, la somme des probabilités issues d’un même nœud vaut toujours 1.',
          'Deux événements A et B de probabilités non nulles sont indépendants si et seulement si P(A ∩ B) = P(A) · P(B).',
        ],
        rules: [
          {
            name: 'Formule des probabilités totales',
            description: 'Si B₁, ..., B_k forment une partition de Ω, alors P(A) = Σ P(B_i) P_{B_i}(A).',
            example: 'P(A) = P(B)·P_B(A) + P(B̄)·P_{B̄}(A)',
          },
        ],
        commonMistakes: ['Additionner les probabilités le long d’un chemin de l’arbre au lieu de les multiplier.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-prob-1',
        'mathTc-denombrement-probas',
        'Tirage simultané dans une urne',
        1,
        'Une urne contient 6 boules vertes et 4 boules jaunes. On tire simultanément 3 boules. Combien y a-t-il de tirages possibles (card(Ω)) ?',
        '120',
        'Tirage simultané de 3 boules parmi 10 : calcule C_{10}³.',
        'C_{10}³ = (10 × 9 × 8) / (3 × 2 × 1) = 120.',
        [
          { title: 'Combinaison', explanation: 'Ordre indifférent, sans remise.', math: 'C_{10}³ = 720 / 6 = 120' },
        ]
      ),
      mkNum(
        'mathTc-prob-2',
        'mathTc-denombrement-probas',
        'Probabilités totales',
        2,
        'On sait que P(B) = 0,4, P_B(A) = 0,7 et P_{B̄}(A) = 0,2. Calcule P(A).',
        '0.4',
        'P(B̄) = 1 - 0,4 = 0,6. Applique P(A) = P(B)P_B(A) + P(B̄)P_{B̄}(A).',
        'P(A) = 0,4×0,7 + 0,6×0,2 = 0,28 + 0,12 = 0,40.',
        [
          { title: 'Partition (B, B̄)', explanation: 'P(B̄) = 0,6.', math: 'P(A) = 0,28 + 0,12 = 0,40' },
        ]
      ),
      mkQcm(
        'mathTc-prob-3',
        'mathTc-denombrement-probas',
        'Coefficient du binôme de Newton',
        2,
        'Dans le développement de (x + 2)⁴, quel est le coefficient du terme en x² ?',
        ['24', '12', '6', '16'],
        '24',
        'Terme k=2 : C_4² · x² · 2².',
        'C_4² = 6 et 2² = 4, donc 6 × 4 = 24.',
        [
          { title: 'Binôme de Newton', explanation: 'C_4² = 6.', math: '6 × x² × 2² = 24 x²' },
        ]
      ),
      mkNum(
        'mathTc-prob-4',
        'mathTc-denombrement-probas',
        'Formule de Bayes',
        3,
        'Avec P(B) = 0,4, P_B(A) = 0,7 et P(A) = 0,40, calcule P_A(B).',
        '0.7',
        'P_A(B) = P(A ∩ B) / P(A) = [P(B)·P_B(A)] / P(A).',
        'P_A(B) = (0,4 × 0,7) / 0,4 = 0,28 / 0,40 = 0,7.',
        [
          { title: 'Intersection', explanation: 'P(A ∩ B) = 0,28.', math: 'P_A(B) = 0,28 / 0,40 = 0,70' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-lois-probas-stats',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'mesures',
    order: 11,
    title: 'Variables Aléatoires, Loi Binomiale & Statistiques à 2 Variables',
    badge: 'Maths Tle C · Ch. 11',
    shortDesc: 'Loi de probabilité, espérance E(X), variance V(X), écart-type σ(X), schéma de Bernoulli & loi binomiale B(n, p), nuage de points, covariance et droite de régression.',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-600 via-fuchsia-500 to-pink-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-binomiale-stats2',
    bossMeta: { name: 'MAÎTRE DES LOIS & STATS', emoji: '📊', xp: 200 },
    kokoSpeech:
      'En statistiques à 2 variables, la droite de régression de y en x passe TOUJOURS par le point moyen G(x̄ ; ȳ), avec a = Cov(X,Y) / V(X) !',
    realWorldHook: {
      title: 'Évolution démographique et production cacaoyère au Woleu-Ntem',
      scenario:
        'Un agronome relève sur 6 années le tonnage récolté y_i en fonction de l’engrais x_i, ajuste le nuage par les moindres carrés et modélise la conformité des sacs par une loi binomiale B(n, p).',
      question:
        'Comment calculer E(X), V(X), P(X ≥ 1) pour B(n, p) et l’équation de la droite d’ajustement affine ?',
    },
    unitsTable: [
      { symbol: 'E(X) = Σ x_i p_i', quantity: 'Espérance mathématique', unit: 'Unité de X', instrument: 'Moyenne théorique' },
      { symbol: 'V(X) = E(X²) - [E(X)]²', quantity: 'Variance (König)', unit: 'Unité²', instrument: 'σ(X) = √V(X)' },
      { symbol: 'X ~ B(n, p)', quantity: 'Loi binomiale', unit: 'E = np, V = np(1-p)', instrument: 'P(X=k) = C_n^k p^k (1-p)^(n-k)' },
      { symbol: 'y = ax + b', quantity: 'Droite de régression', unit: 'a = Cov(X,Y)/V(X)', instrument: 'Passe par G(x̄, ȳ)' },
    ],
    experimentOrActivity: {
      title: 'Ajustement affine par les moindres carrés et diagramme de B(n, p)',
      materials: ['Nuage de points M_i(x_i, y_i)', 'Point moyen G(x̄, ȳ)', 'Coefficient de corrélation r'],
      observation:
        'La droite de régression minimise la somme des carrés des écarts verticaux Σ (y_i - ax_i - b)². Plus |r| est proche de 1, plus l’ajustement est fiable.',
      conclusion:
        'Pour B(n, p), la répétition de n épreuves de Bernoulli indépendantes concentre les probabilités autour de l’espérance np.',
    },
    revisionChecklist: [
      'Je sais vérifier que Σ p_i = 1, calculer E(X) et V(X) par König-Huygens et utiliser E(aX+b), V(aX+b) = a² V(X).',
      'Je sais justifier l’emploi d’une loi binomiale B(n, p) et calculer P(X = k) et P(X ≥ 1).',
      'Je sais calculer x̄, ȳ, V(X), Cov(X, Y), la droite de régression et le coefficient de corrélation linéaire r.',
    ],
    keyFormulas: [
      'König-Huygens : V(X) = Σ x_i² p_i - [E(X)]²  ;  V(aX + b) = a² V(X)',
      'Loi binomiale B(n, p) : P(X = k) = C_n^k p^k (1 - p)^(n-k) ; E(X) = np ; V(X) = np(1 - p)',
      'Covariance : Cov(X, Y) = (1/N) Σ x_i y_i - x̄ ȳ',
      'Régression de y en x : a = Cov(X, Y) / V(X)  et  b = ȳ - a x̄  ;  r = Cov(X, Y) / (σ_X σ_Y)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Variables Aléatoires, B(n,p) & Stats 2D',
      slogan: 'E(X) · König V(X) · B(n, p) · Moindres carrés',
      summaryBulletPoints: [
        'Toujours justifier une loi binomiale par : répétition de n épreuves identiques et indépendantes à 2 issues (succès de proba p).',
        'P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)ⁿ.',
        'La corrélation linéaire est forte lorsque |r| ≥ 0,87 (ou proche de 1).',
      ],
      verticalFormulas: [
        {
          name: 'Ajustement affine par les moindres carrés',
          badge: '📈',
          steps: [
            'x̄ = 4 ; ȳ = 10 ; V(X) = 2 ; Cov(X, Y) = 5',
            'a = Cov(X, Y) ÷ V(X) = 5 ÷ 2 = 2,5',
            'b = ȳ - a x̄ = 10 - 2,5 × 4 = 0',
          ],
          resultHighlight: 'Droite de régression : y = 2,5 x',
          explanation: 'Ne jamais confondre a = Cov/V(X) (y en x) avec a’ = Cov/V(Y) (x en y).',
        },
      ],
      kokoTip: 'En variance, n’oublie JAMAIS le carré sur a dans V(aX + b) = a² V(X) : une variance est toujours ≥ 0 !',
      pitfallToAvoid: 'Oublier d’élever p et (1 - p) aux puissances k et n - k ou oublier C_n^k dans B(n, p).',
    },
    sections: [
      {
        title: '1. Variables aléatoires discrètes et loi binomiale B(n, p)',
        illustrationNote: 'Diagramme en bâtons de B(n, p) centré sur E(X) = np et écart-type σ = √(np(1-p)).',
        explanation: [
          'Une variable aléatoire discrète associe à chaque issue de Ω une valeur réelle x_i avec une probabilité p_i = P(X = x_i).',
          'La fonction de répartition F(x) = P(X ≤ x) est une fonction en escalier croissante de 0 à 1.',
        ],
        rules: [
          {
            name: 'Espérance et variance d’une loi binomiale',
            description: 'Si X ~ B(n, p), inutile de dresser le tableau complet : E(X) = np et V(X) = np(1 - p).',
            example: 'n = 20, p = 0,25 ⟹ E(X) = 5 ; V(X) = 20×0,25×0,75 = 3,75 ; σ ≈ 1,94',
          },
        ],
        commonMistakes: ['Utiliser E(X) = np alors que les tirages sont sans remise (ici il faut la loi complète ou hypergéométrique).'],
      },
      {
        title: '2. Séries statistiques doubles et ajustement affine',
        illustrationNote: 'Nuage de points (x_i, y_i), point moyen G(x̄, ȳ) et droite des moindres carrés y = ax + b.',
        explanation: [
          'L’objectif est de prévoir une grandeur y à partir de x lorsque le nuage présente une forme allongée.',
          'Les deux droites de régression (y en x et x en y) se coupent exactement au point moyen G(x̄ ; ȳ).',
        ],
        rules: [
          {
            name: 'Coefficient de corrélation linéaire r',
            description: '-1 ≤ r ≤ 1 et r² = a × a’ où a est la pente de y en x et a’ celle de x en y.',
            example: 'Cov = 12, σ_X = 3, σ_Y = 5  ⟹  r = 12 / (3 × 5) = 0,80',
          },
        ],
        commonMistakes: ['Diviser par V(Y) au lieu de V(X) pour la droite de régression de y en x.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-stat-1',
        'mathTc-lois-probas-stats',
        'Espérance d’une loi binomiale',
        1,
        'Une variable X suit la loi binomiale B(40 ; 0,35). Calcule son espérance E(X).',
        '14',
        'E(X) = n × p.',
        'E(X) = 40 × 0,35 = 14.',
        [
          { title: 'Formule E(X) = np', explanation: 'Produit de n et p.', math: '40 × 0,35 = 14' },
        ]
      ),
      mkNum(
        'mathTc-stat-2',
        'mathTc-lois-probas-stats',
        'Variance de 3X - 5',
        2,
        'Soit X une variable aléatoire d’écart-type σ(X) = 2. Calcule la variance V(3X - 5).',
        '36',
        'V(X) = σ² = 4, et V(aX + b) = a² V(X).',
        'V(3X - 5) = 3² × 4 = 9 × 4 = 36.',
        [
          { title: 'Variance de X', explanation: 'V(X) = 2² = 4.', math: 'V(X) = 4' },
          { title: 'Linéarité quadratique', explanation: 'La constante -5 ne change pas la dispersion.', math: 'V(3X - 5) = 9 × 4 = 36' },
        ]
      ),
      mkNum(
        'mathTc-stat-3',
        'mathTc-lois-probas-stats',
        'Ordonnée à l’origine de régression',
        2,
        'Un nuage a pour point moyen G(5 ; 18) et la droite de régression de y en x a pour pente a = 2,4. Calcule l’ordonnée à l’origine b.',
        '6',
        'La droite passe par G(x̄ ; ȳ) donc ȳ = a x̄ + b.',
        'b = 18 - 2,4 × 5 = 18 - 12 = 6.',
        [
          { title: 'Appartenance de G', explanation: 'G(5 ; 18) ∈ (D).', math: 'b = 18 - 2,4 × 5 = 6' },
        ]
      ),
      mkNum(
        'mathTc-stat-4',
        'mathTc-lois-probas-stats',
        'Probabilité P(X ≥ 1) en loi binomiale',
        3,
        'On lance 3 fois un dé équilibré et X compte le nombre de « 6 » obtenus (p = 1/6). Calcule P(X ≥ 1) arrondi à 0,01 près.',
        '0.42',
        'Utilise l’événement contraire : P(X ≥ 1) = 1 - P(X = 0) = 1 - (5/6)³.',
        '1 - 125/216 = 91/216 ≈ 0,42.',
        [
          { title: 'Événement contraire', explanation: 'Aucun 6 en 3 lancers : (5/6)³.', math: 'P(X = 0) = 125 / 216 ≈ 0,5787' },
          { title: 'Soustraction', explanation: '1 - 0,5787 = 0,4213.', math: 'P(X ≥ 1) ≈ 0,42' },
        ]
      ),
    ],
  },
];
