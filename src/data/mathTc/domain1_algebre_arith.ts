import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_TC_ALGEBRE_ARITH: Chapter[] = [
  {
    id: 'mathTc-arithmetique',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'nombres-calculs',
    order: 1,
    title: 'Arithmétique dans ℤ : Divisibilité, Congruences, Bézout & Gauss',
    badge: 'Maths Tle C · Ch. 1',
    shortDesc: 'Division euclidienne, congruences modulo n, algorithme d’Euclide, théorèmes de Bézout & Gauss, nombres premiers et équations diophantiennes ax + by = c.',
    themeColor: '#3b82f6',
    themeGradient: 'from-blue-600 via-indigo-500 to-cyan-400',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-arithmetique',
    bossMeta: { name: 'MAÎTRE DE L’ARITHMÉTIQUE', emoji: '🔢', xp: 200 },
    kokoSpeech:
      'Mbolo matheux de Terminale C ! En arithmétique au Bac C du Gabon, l’algorithme d’Euclide étendu est ton couteau suisse : il donne le PGCD et la solution particulière de Bézout en 3 lignes !',
    realWorldHook: {
      title: 'Cryptographie RSA et codes de sécurité bancaire à Libreville',
      scenario:
        'Pour chiffrer un message numérique M, le protocole RSA utilise deux grands nombres premiers p et q, le module n = pq, et calcule la clé privée d grâce à l’identité de Bézout ed ≡ 1 [φ(n)].',
      question:
        'Comment résoudre ed - k·φ(n) = 1 et déterminer le reste d’une grande puissance a^k modulo n ?',
    },
    unitsTable: [
      { symbol: 'a ≡ b [n]', quantity: 'Congruence modulo n', unit: 'n | (a - b)', instrument: 'Anneau ℤ/nℤ' },
      { symbol: 'PGCD(a, b)', quantity: 'Plus Grand Commun Diviseur', unit: 'd = a ∧ b ∈ ℕ*', instrument: 'Algorithme d’Euclide' },
      { symbol: 'au + bv = d', quantity: 'Identité de Bézout', unit: 'u, v ∈ ℤ', instrument: 'Remontée d’Euclide' },
      { symbol: 'ax + by = c', quantity: 'Équation diophantienne', unit: 'Solution ssi d | c', instrument: 'Théorème de Gauss' },
    ],
    experimentOrActivity: {
      title: 'Crible modulaire et périodicité des restes de a^k modulo n',
      materials: ['Tableau des puissances de 3 mod 7', 'Algorithme d’Euclide étendu', 'Petit théorème de Fermat'],
      observation:
        'Les restes de 3^k modulo 7 forment la boucle périodique (1, 3, 2, 6, 4, 5) de longueur 6 = 7 - 1, vérifiant 3⁶ ≡ 1 [7].',
      conclusion:
        'Si p est premier et p ∤ a, alors a^(p-1) ≡ 1 [p] (Petit théorème de Fermat), ce qui simplifie instantanément les grands exposants.',
    },
    revisionChecklist: [
      'Je sais poser la division euclidienne dans ℤ : a = bq + r avec 0 ≤ r < |b|.',
      'Je maîtrise les propriétés des congruences (somme, produit, puissance) et le petit théorème de Fermat.',
      'Je sais résoudre complètement ax + by = c dans ℤ² avec l’algorithme d’Euclide et le théorème de Gauss.',
    ],
    keyFormulas: [
      'Division euclidienne : a = bq + r  (0 ≤ r < |b|)',
      'Bézout : PGCD(a, b) = 1  ⟺  ∃ (u, v) ∈ ℤ² tel que au + bv = 1',
      'Gauss : a | (bc) et PGCD(a, b) = 1  ⟹  a | c',
      'Fermat : p premier et p ∤ a  ⟹  a^(p-1) ≡ 1 [p]',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Arithmétique & Congruences',
      slogan: 'Euclide ➔ Bézout ➔ Gauss ➔ Fermat',
      summaryBulletPoints: [
        'Pour trouver tous les couples (x, y) solutions de ax + by = c : (1) vérifier d | c et simplifier par d ; (2) trouver une solution particulière (x₀, y₀) ; (3) écrire a(x - x₀) = -b(y - y₀) et appliquer Gauss.',
        'PGCD(a, b) × PPCM(a, b) = |ab|.',
        'Si p premier divise un produit ab, alors p | a ou p | b (lemme d’Euclide).',
      ],
      verticalFormulas: [
        {
          name: 'Résolution de 7x + 5y = 1',
          badge: '🧮',
          steps: [
            'PGCD(7, 5) = 1 : 7(1) + 5(-1) = 2 ; 7(-2) + 5(3) = 1',
            'Solution particulière : (x₀, y₀) = (-2, 3)',
            '7(x + 2) = -5(y - 3) avec 7 ∧ 5 = 1',
            'Par Gauss : x + 2 = 5k et y - 3 = -7k (k ∈ ℤ)',
          ],
          resultHighlight: 'S = { (-2 + 5k ; 3 - 7k), k ∈ ℤ }',
          explanation: 'Toujours vérifier la réciproque en remplaçant x et y dans l’équation initiale.',
        },
        {
          name: 'Congruence avec exposant élevé',
          badge: '⚡',
          steps: [
            'Calculer 2^2026 modulo 7',
            '2³ = 8 ≡ 1 [7]',
            '2026 = 3 × 675 + 1',
            '2^2026 = (2³)^675 × 2¹ ≡ 1^675 × 2 ≡ 2 [7]',
          ],
          resultHighlight: '2^2026 ≡ 2 [7]',
          explanation: 'On cherche d’abord le plus petit entier k > 0 tel que a^k ≡ 1 [n].',
        },
      ],
      kokoTip: 'Pour montrer qu’un entier n’est pas divisible, raisonne par disjonction des cas modulo 3, 4 ou 5 !',
      pitfallToAvoid: 'Ne jamais simplifier une congruence ac ≡ bc [n] par c sans vérifier que PGCD(c, n) = 1 !',
    },
    sections: [
      {
        title: '1. Divisibilité dans ℤ, congruences et théorème de Fermat',
        illustrationNote: 'Horloge modulaire ℤ/nℤ montrant la périodicité des restes et la réduction des grandes puissances.',
        explanation: [
          'Deux entiers a et b sont congrus modulo n (n ≥ 2) si et seulement si a et b ont le même reste dans la division euclidienne par n, soit n | (a - b).',
          'La congruence est compatible avec l’addition, la multiplication et l’élévation à une puissance entière positive.',
        ],
        rules: [
          {
            name: 'Petit théorème de Fermat',
            description: 'Si p est un nombre premier, alors pour tout entier a, a^p ≡ a [p]. Si de plus p ne divise pas a, a^(p-1) ≡ 1 [p].',
            example: 'p = 11 et a = 5 : 5^10 ≡ 1 [11] | 5^2024 = (5^10)^202 × 5⁴ ≡ 1 × 625 ≡ 9 [11]',
            tip: 'Si 10 est grand, cherche d’abord un diviseur de p - 1 comme ordre multiplicatif.',
          },
        ],
        commonMistakes: ['Oublier que le reste r d’une division euclidienne doit toujours être positif ou nul (0 ≤ r < b).'],
      },
      {
        title: '2. PGCD, théorèmes de Bézout et de Gauss, équations diophantiennes',
        illustrationNote: 'Schéma de l’algorithme d’Euclide étendu : descente des divisions puis remontée pour obtenir u et v.',
        explanation: [
          'L’ensemble des diviseurs communs à a et b est l’ensemble des diviseurs de d = PGCD(a, b).',
          'Le théorème de Bézout caractérise les nombres premiers entre eux : a ∧ b = 1 ⟺ il existe u, v ∈ ℤ tels que au + bv = 1.',
        ],
        rules: [
          {
            name: 'Méthode complète pour ax + by = c',
            description: 'Diviser d’abord par d = a ∧ b (si d ∤ c, pas de solution), trouver (x₀, y₀), puis appliquer le théorème de Gauss.',
            example: '12x + 8y = 20 | d = 4 | 3x + 2y = 5 | (x₀, y₀) = (1, 1) | x = 1 + 2k, y = 1 - 3k',
            tip: 'Simplifier par d dès la première ligne évite d’oublier des solutions !',
          },
        ],
        commonMistakes: ['Donner des solutions où k ∈ ℕ au lieu de k ∈ ℤ quand on cherche dans ℤ².'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-arith-1',
        'mathTc-arithmetique',
        'Reste de 3^2025 modulo 7',
        1,
        'Détermine le reste r (0 ≤ r < 7) de la division euclidienne de 3^2025 par 7.',
        '6',
        'Calcule 3¹, 3², 3³, 3⁶ modulo 7.',
        '3^2025 ≡ 6 [7].',
        [
          { title: 'Ordre de 3 mod 7', explanation: 'Par Fermat (7 premier), 3⁶ ≡ 1 [7].', math: '3² ≡ 2 ; 3³ ≡ 6 ≡ -1 [7]' },
          { title: 'Division de 2025 par 6', explanation: '2025 = 6 × 337 + 3.', math: '3^2025 = (3⁶)^337 × 3³ ≡ 1 × 6 ≡ 6 [7]' },
        ],
        undefined,
        '🔢'
      ),
      mkNum(
        'mathTc-arith-2',
        'mathTc-arithmetique',
        'PGCD par l’algorithme d’Euclide',
        1,
        'Calcule d = PGCD(168 ; 108).',
        '12',
        'Pose les divisions successives : 168 = 108 × 1 + 60, etc.',
        'Le dernier reste non nul vaut 12.',
        [
          { title: 'Divisions successives', explanation: 'On remplace (a, b) par (b, r).', math: '168 = 108×1 + 60 ; 108 = 60×1 + 48 ; 60 = 48×1 + 12 ; 48 = 12×4 + 0' },
        ]
      ),
      mkQcm(
        'mathTc-arith-3',
        'mathTc-arithmetique',
        'Équation diophantienne 15x - 10y = 7',
        2,
        'L’équation 15x - 10y = 7 d’inconnue (x, y) ∈ ℤ² admet-elle des solutions ?',
        ['Non, car PGCD(15, 10) = 5 ne divise pas 7', 'Oui, une infinité de solutions', 'Oui, exactement une solution', 'Oui, si x et y sont pairs'],
        'Non, car PGCD(15, 10) = 5 ne divise pas 7',
        'Teste la condition nécessaire et suffisante d’existence de solutions : d | c.',
        '5 divise 15x - 10y pour tous entiers x, y, mais 5 ne divise pas 7.',
        [
          { title: 'Condition de Bézout', explanation: '15x - 10y = 5(3x - 2y) est toujours multiple de 5.', math: 'PGCD(15, 10) = 5 et 5 ∤ 7 ⟹ S = ∅' },
        ]
      ),
      mkNum(
        'mathTc-arith-4',
        'mathTc-arithmetique',
        'Inverse modulaire',
        3,
        'Détermine le plus petit entier positif x tel que 7x ≡ 1 [19].',
        '11',
        'Cherche k tel que 1 + 19k soit divisible par 7.',
        '7 × 11 = 77 = 4 × 19 + 1, donc x = 11.',
        [
          { title: 'Test des multiples de 19', explanation: 'On ajoute 19 à 1 jusqu’à obtenir un multiple de 7.', math: '1 + 19×4 = 77 = 7 × 11 ⟹ x = 11' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-complexes-algebre',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'nombres-calculs',
    order: 2,
    title: 'Nombres Complexes I : Algèbre, Module, Argument, Moivre & Racines n-ièmes',
    badge: 'Maths Tle C · Ch. 2',
    shortDesc: 'Forme algébrique, trigonométrique et exponentielle re^(iθ), formules de Moivre et d’Euler, résolution dans ℂ et racines n-ièmes.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-600 via-violet-500 to-purple-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-complexes-algebre',
    bossMeta: { name: 'MAÎTRE DES COMPLEXES', emoji: '🧭', xp: 200 },
    kokoSpeech:
      'Retiens la règle d’or du Bac C : forme algébrique pour additionner, forme exponentielle re^(iθ) pour multiplier, diviser, élever à la puissance n et linéariser sinⁿθ ou cosⁿθ !',
    realWorldHook: {
      title: 'Impédance complexe et déphasage en courant alternatif (SEEG)',
      scenario:
        'En physique-électricité de Terminale C, on associe à un dipôle RLC une impédance complexe Z = R + j(Lω - 1/(Cω)). Son module |Z| donne le rapport U/I et son argument φ le déphasage.',
      question:
        'Comment passer rapidement de Z = a + ib à Z = |Z|e^(iφ) et calculer Zⁿ ?',
    },
    unitsTable: [
      { symbol: 'z = a + ib', quantity: 'Forme algébrique', unit: 'i² = -1', instrument: 'Affixe M(a ; b)' },
      { symbol: '|z| = √(a² + b²)', quantity: 'Module de z', unit: 'Distance OM', instrument: 'z·z̄ = |z|²' },
      { symbol: 'z = r e^(iθ)', quantity: 'Forme exponentielle', unit: 'r = |z|, θ = arg(z)', instrument: 'e^(iθ) = cosθ + i sinθ' },
      { symbol: 'z_k = r^(1/n) e^(i(θ+2kπ)/n)', quantity: 'Racines n-ièmes', unit: 'k ∈ {0, ..., n-1}', instrument: 'Polygone régulier' },
    ],
    experimentOrActivity: {
      title: 'Cercle trigonométrique et racines n-ièmes de l’unité',
      materials: ['Plan complexe (O; u⃗, v⃗)', 'Racines cubiques 1, j, j²', 'Linéarisation par Euler'],
      observation:
        'Les racines n-ièmes d’un complexe non nul forment toujours les n sommets d’un polygone régulier centré en O.',
      conclusion:
        'La somme des n racines n-ièmes d’un nombre complexe est toujours nulle : 1 + j + j² = 0.',
    },
    revisionChecklist: [
      'Je sais calculer le module, l’argument principal dans ]-π ; π] et conjugué d’un complexe.',
      'Je maîtrise les formules de Moivre (cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ) et d’Euler.',
      'Je sais résoudre az² + bz + c = 0 dans ℂ (même à coefficients complexes) et trouver les racines n-ièmes.',
    ],
    keyFormulas: [
      'z = x + iy  ;  z̄ = x - iy  ;  |z|² = z·z̄ = x² + y²',
      'Euler : cos θ = (e^(iθ) + e^(-iθ)) / 2  ;  sin θ = (e^(iθ) - e^(-iθ)) / (2i)',
      'Moivre : (e^(iθ))ⁿ = e^(inθ) = cos(nθ) + i sin(nθ)',
      'Racines n-ièmes de u = R e^(iα) : z_k = R^(1/n) e^(i(α + 2kπ)/n),  k = 0..n-1',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Nombres Complexes (Algèbre)',
      slogan: 'x + iy  ↔  r(cosθ + i sinθ)  ↔  r e^(iθ)',
      summaryBulletPoints: [
        'Pour mettre un quotient A/B sous forme algébrique : multiplier numérateur et dénominateur par le conjugué B̄.',
        'z ∈ ℝ ⟺ Im(z) = 0 ⟺ z̄ = z ; z ∈ iℝ ⟺ Re(z) = 0 ⟺ z̄ = -z.',
        'Pour calculer les racines carrées de δ = a + ib sans forme trigonométrique : poser ω = x + iy et résoudre x² - y² = a, 2xy = b, x² + y² = √(a² + b²).',
      ],
      verticalFormulas: [
        {
          name: 'Passage forme algébrique ➔ exponentielle',
          badge: '📐',
          steps: [
            'z = 1 + i√3',
            'r = |z| = √(1² + (√3)²) = √4 = 2',
            'cos θ = 1/2  et  sin θ = √3/2  ⟹  θ = π/3 [2π]',
          ],
          resultHighlight: 'z = 2 e^(iπ/3)',
          explanation: 'Factoriser d’abord par |z| fait apparaître immédiatement un angle remarquable.',
        },
        {
          name: 'Racines carrées de δ = 3 + 4i',
          badge: '√',
          steps: [
            'ω = x + iy tel que ω² = 3 + 4i',
            'x² + y² = √(3² + 4²) = 5  et  x² - y² = 3  ⟹  x² = 4, y² = 1',
            '2xy = 4 > 0  ⟹  x et y de même signe',
          ],
          resultHighlight: 'ω = 2 + i  ou  ω = -2 - i',
          explanation: 'Méthode incontournable quand l’argument du discriminant n’est pas remarquable.',
        },
      ],
      kokoTip: 'Vérifie toujours le signe de sin θ et cos θ avant de conclure sur θ (attention aux quadrants II et III) !',
      pitfallToAvoid: 'Oublier le facteur i au dénominateur dans sin θ = (e^(iθ) - e^(-iθ)) / (2i).',
    },
    sections: [
      {
        title: '1. Formes algébrique, trigonométrique et exponentielle',
        illustrationNote: 'Représentation polaire et cartésienne dans le plan d’Argand : M(x, y) avec rayon r et angle θ.',
        explanation: [
          'Tout nombre complexe non nul z s’écrit de manière unique sous la forme r e^(iθ) avec r = |z| > 0 et θ ≡ arg(z) [2π].',
          'Les propriétés algébriques de l’exponentielle complexe rendent immédiats les produits, quotients et puissances.',
        ],
        rules: [
          {
            name: 'Formules d’Euler et linéarisation',
            description: 'En développant cos³θ ou sin⁴θ avec les exponentielles, on transforme un produit en somme de cos(kθ) et sin(kθ) facile à intégrer.',
            example: 'cos²θ = ((e^(iθ) + e^(-iθ))/2)² = (e^(2iθ) + 2 + e^(-2iθ))/4 = (1 + cos 2θ)/2',
          },
        ],
        commonMistakes: ['Confondre |z₁ + z₂| avec |z₁| + |z₂| (seule l’inégalité triangulaire |z₁ + z₂| ≤ |z₁| + |z₂| est vraie).'],
      },
      {
        title: '2. Équations du second degré dans ℂ et racines n-ièmes',
        illustrationNote: 'Polygone régulier des racines n-ièmes sur le cercle de rayon R^(1/n).',
        explanation: [
          'Toute équation du second degré az² + bz + c = 0 (a ≠ 0, coefficients dans ℝ ou ℂ) admet deux solutions (éventuellement confondues) dans ℂ.',
          'Tout complexe non nul admet exactement n racines n-ièmes distinctes déphasées de 2π/n.',
        ],
        rules: [
          {
            name: 'Racines de l’unité zⁿ = 1',
            description: 'Les solutions sont ω_k = e^(i 2kπ/n) pour k ∈ {0, 1, ..., n-1}. En particulier pour n = 3, on note j = e^(i2π/3) = -1/2 + i√3/2.',
            example: '1 + j + j² = 0  ;  j³ = 1  ;  j̄ = j²',
          },
        ],
        commonMistakes: ['Oublier une solution ou confondre θ/n avec (θ + 2kπ)/n lors du passage à la racine n-ième.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-cx1-1',
        'mathTc-complexes-algebre',
        'Module d’un quotient complexe',
        1,
        'Calcule le module |z| de z = (3 + 4i) / (1 - i√3).',
        '2.5',
        'Utilise |z₁ / z₂| = |z₁| / |z₂|.',
        '|3 + 4i| = 5 et |1 - i√3| = 2, donc |z| = 5/2 = 2,5.',
        [
          { title: 'Modules séparés', explanation: 'Calcul du module du numérateur et du dénominateur.', math: '|3 + 4i| = √(9+16) = 5  ;  |1 - i√3| = √(1+3) = 2' },
          { title: 'Quotient', explanation: 'Rapport des modules.', math: '|z| = 5 / 2 = 2,5' },
        ]
      ),
      mkQcm(
        'mathTc-cx1-2',
        'mathTc-complexes-algebre',
        'Puissance avec Moivre : (1 + i)^8',
        2,
        'Quelle est la valeur de (1 + i)^8 ?',
        ['16', '-16', '16i', '8i'],
        '16',
        'Écris 1 + i sous forme exponentielle : √2 e^(iπ/4).',
        '(√2)^8 e^(i 8π/4) = 16 e^(2iπ) = 16.',
        [
          { title: 'Forme exponentielle', explanation: '|1+i| = √2 et arg = π/4.', math: '1 + i = √2 e^(iπ/4)' },
          { title: 'Élévation à la puissance 8', explanation: 'On élève le module et multiplie l’angle.', math: '(√2)^8 e^(i2π) = 16 × 1 = 16' },
        ]
      ),
      mkQcm(
        'mathTc-cx1-3',
        'mathTc-complexes-algebre',
        'Somme des racines cubiques',
        2,
        'Avec j = e^(i2π/3), quelle est la valeur de S = 1 + j + j² + j³ ?',
        ['1', '0', '3', '-1'],
        '1',
        'Utilise 1 + j + j² = 0 et j³ = 1.',
        '(1 + j + j²) + j³ = 0 + 1 = 1.',
        [
          { title: 'Identité de l’unité', explanation: 'La somme des trois racines cubiques est nulle.', math: '1 + j + j² = 0  et  j³ = 1 ⟹ S = 1' },
        ]
      ),
      mkNum(
        'mathTc-cx1-4',
        'mathTc-complexes-algebre',
        'Équation à discriminant complexe',
        3,
        'Soit l’équation z² - (3 + 2i)z + (1 + 3i) = 0. Quel est le carré Δ du discriminant ? Calcule |Δ|.',
        '5',
        'Calcule Δ = b² - 4ac puis son module.',
        'Δ = (3+2i)² - 4(1+3i) = 9 + 12i - 4 - 4 - 12i = 1... Attends : vérifions Δ = (5 - 4) + 0i = 1 ou si Δ = 3+4i.',
        [
          { title: 'Calcul de Δ', explanation: 'b² - 4ac.', math: '(3 + 2i)² - 4(1 + 3i) = 5 + 12i - 4 - 12i = 1. Ici |Δ| = 1.' },
        ]
      ),
    ].map((ex) =>
      ex.id === 'mathTc-cx1-4'
        ? {
            ...ex,
            prompt: 'Soit z² - (5 + i)z + (5 + 5i) = 0. Calcule le module |Δ| du discriminant Δ = b² - 4ac.',
            correctAnswer: '5',
            explanationFinal: 'Δ = (5 + i)² - 4(5 + 5i) = 24 + 10i - 20 - 20i = 4 - 10i ? Testons b = 5 + i, ac = 4(5+2i) = 20+8i : 24+10i - 20 - 8i = 4+2i. Prenons z² - (3 + 2i)z + (0 + 2i) = 0 -> Δ = 5 + 12i - 8i = 5+4i. Fixons z² - (3+2i)z + (1/2 + 2i) non entier. Prenons z² - 3z + (3 - i) = 0 -> Δ = 9 - 12 + 4i = -3 + 4i, |Δ| = 5.',
            promptFixed: true,
          }
        : ex
    ).map((ex) =>
      ex.id === 'mathTc-cx1-4'
        ? mkNum(
            'mathTc-cx1-4',
            'mathTc-complexes-algebre',
            'Module du discriminant complexe',
            3,
            'Soit l’équation z² - 3z + (3 - i) = 0 dans ℂ. Calcule le module |Δ| de son discriminant Δ = b² - 4ac.',
            '5',
            'Calcule Δ = (-3)² - 4(3 - i) = -3 + 4i, puis |Δ| = √((-3)² + 4²).',
            'Δ = -3 + 4i donc |Δ| = √(9 + 16) = 5.',
            [
              { title: 'Calcul du discriminant', explanation: 'Δ = b² - 4ac.', math: 'Δ = 9 - 4(3 - i) = -3 + 4i' },
              { title: 'Module', explanation: '|a + ib| = √(a² + b²).', math: '|Δ| = √((-3)² + 4²) = 5' },
            ]
          )
        : ex
    ),
  },

  {
    id: 'mathTc-complexes-geometrie',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'nombres-calculs',
    order: 3,
    title: 'Nombres Complexes II : Interprétation Géométrique, Lieux & Similitudes',
    badge: 'Maths Tle C · Ch. 3',
    shortDesc: 'Angles de vecteurs, alignement, cocyclicité, lieux géométriques (cercle, médiatrice) et écritures complexes des similitudes directes z’ = az + b.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-complexes-geometrie',
    bossMeta: { name: 'MAÎTRE DES TRANSFORMATIONS', emoji: '📐', xp: 210 },
    kokoSpeech:
      'Astuce Bac C : dès que tu vois un quotient Z = (z_C - z_A) / (z_B - z_A), pense immédiatement au rapport des longueurs AC/AB et à l’angle (AB⃗, AC⃗) = arg(Z) !',
    realWorldHook: {
      title: 'Cartographie aérienne et recalage d’images satellites de la forêt gabonaise',
      scenario:
        'Pour superposer deux clichés aériens pris à des altitudes et orientations différentes, on applique une similitude directe plane modélisée par z’ = a z + b (homothétie + rotation + translation).',
      question:
        'Comment retrouver le centre Ω, le rapport k = |a| et l’angle θ = arg(a) à partir de deux points et leurs images ?',
    },
    unitsTable: [
      { symbol: '|z_B - z_A|', quantity: 'Distance AB', unit: 'u.l.', instrument: 'Affixe du vecteur AB⃗' },
      { symbol: 'arg((z_C-z_A)/(z_B-z_A))', quantity: 'Angle (AB⃗, AC⃗)', unit: 'radians [2π]', instrument: 'Nature d’un triangle' },
      { symbol: 'z’ = a z + b (a≠0)', quantity: 'Similitude directe', unit: 'k = |a|, θ = arg(a)', instrument: 'Centre ω = b / (1 - a)' },
      { symbol: 'z’ = a z̄ + b', quantity: 'Similitude indirecte', unit: 'Réflexion / antidéplacement', instrument: 'Inverse l’orientation' },
    ],
    experimentOrActivity: {
      title: 'Reconnaissance d’un triangle et transformation par z’ = az + b',
      materials: ['Triangle ABC dans le plan complexe', 'Rapport Z = (z_C - z_A)/(z_B - z_A)', 'Point invariant ω'],
      observation:
        'Si Z = ±i, le triangle ABC est rectangle isocèle en A. Si Z = e^(±iπ/3), ABC est équilatéral. Si Z ∈ ℝ*, A, B, C sont alignés.',
      conclusion:
        'La géométrie complexe transforme toute configuration plane (orthogonalité, cocyclicité, triangle équilatéral) en un calcul algébrique exact.',
    },
    revisionChecklist: [
      'Je sais caractériser un triangle rectangle, isocèle ou équilatéral via (z_C - z_A)/(z_B - z_A).',
      'Je sais identifier l’ensemble des points M(z) tels que |z - z_A| = |z - z_B| (médiatrice) ou |z - z_A| = R (cercle) ou (z - z_A)/(z - z_B) ∈ iℝ.',
      'Je sais donner les éléments caractéristiques d’une similitude directe z’ = az + b (translation si a=1 ; sinon centre, rapport |a|, angle arg(a)).',
    ],
    keyFormulas: [
      'AB = |z_B - z_A|  ;  (u⃗, AB⃗) ≡ arg(z_B - z_A) [2π]',
      '(AB⃗, AC⃗) ≡ arg((z_C - z_A)/(z_B - z_A)) [2π]',
      'A, B, C, D cocycliques ou alignés  ⟺  [(z_C - z_A)/(z_B - z_A)] ÷ [(z_C - z_D)/(z_B - z_D)] ∈ ℝ*',
      'Similitude directe z’ = az + b (a ≠ 1) : centre ω = b/(1 - a), rapport k = |a|, angle θ = arg(a)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Géométrie & Similitudes Complexes',
      slogan: 'Quotient = Angle + Rapport · z’ = az + b',
      summaryBulletPoints: [
        'Médiatrice de [AB] : |z - z_A| = |z - z_B|. Cercle de diamètre [AB] : (z - z_A)/(z - z_B) ∈ iℝ (ou M=A, M=B).',
        'Similitude directe z’ = az + b : si a = 1, translation de vecteur b ; si |a| = 1 et a ≠ 1, rotation d’angle arg(a) ; si a ∈ ℝ \\ {0,1}, homothétie de rapport a.',
        'Pour déterminer s(z) = az + b envoyant A sur A’ et B sur B’ : a = (z_{B’} - z_{A’}) / (z_B - z_A) puis b = z_{A’} - a z_A.',
      ],
      verticalFormulas: [
        {
          name: 'Éléments d’une similitude directe',
          badge: '🌀',
          steps: [
            's : z’ = (1 + i)z + 2 - i',
            'k = |1 + i| = √2  ;  θ = arg(1 + i) = π/4',
            'Centre ω : ω = (1 + i)ω + 2 - i  ⟹  -iω = 2 - i',
            'ω = (2 - i)/(-i) = 1 + 2i',
          ],
          resultHighlight: 'Similitude S(Ω(1;2), k = √2, θ = π/4)',
          explanation: 'Le point invariant Ω vérifie toujours ω = aω + b.',
        },
      ],
      kokoTip: 'Pour prouver que 4 points sont sur un même cercle sans calcul d’équation, montre que le birapport est réel !',
      pitfallToAvoid: 'Oublier d’exclure le point B quand on résout arg((z - z_A)/(z - z_B)) = π/2 [π].',
    },
    sections: [
      {
        title: '1. Distances, angles, configurations et lieux géométriques',
        illustrationNote: 'Cercle de diamètre [AB] et angle droit inscrit (MA⃗, MB⃗) = ±π/2 visualisés par l’argument.',
        explanation: [
          'L’affixe permet de traduire immédiatement l’alignement, l’orthogonalité et la cocyclicité.',
          'Si Z = (z_C - z_A)/(z_B - z_A) est réel non nul, les points A, B, C sont alignés. S’il est imaginaire pur non nul, (AB) ⊥ (AC).',
        ],
        rules: [
          {
            name: 'Triangles particuliers via le quotient complexe',
            description: 'Z = ±i ⟺ rectangle isocèle en A ; Z = e^(±iπ/3) ⟺ équilatéral.',
            example: 'Z = (z_C - z_A)/(z_B - z_A) = i  ⟹  AC = AB et (AB⃗, AC⃗) = +π/2',
          },
        ],
        commonMistakes: ['Confondre l’ensemble arg(Z) = π/2 [2π] (demi-cercle ouvert) et Z ∈ iℝ* (cercle privé de A et B).'],
      },
      {
        title: '2. Similitudes planes directes z’ = az + b',
        illustrationNote: 'Composition commutative d’une homothétie de rapport k=|a| et d’une rotation d’angle θ=arg(a) autour du centre Ω.',
        explanation: [
          'Toute transformation d’écriture complexe z’ = az + b (a ∈ ℂ*, b ∈ ℂ) conserve les angles orientés et multiplie les longueurs par k = |a|.',
          'Si a ≠ 1, elle admet un unique point invariant Ω d’affixe ω = b/(1-a) et s’écrit z’ - ω = k e^(iθ)(z - ω).',
        ],
        rules: [
          {
            name: 'Nature selon la valeur de a',
            description: 'a = 1 : translation ; |a| = 1 (a ≠ 1) : rotation ; a ∈ ℝ*\\{1} : homothétie ; cas général : similitude directe (h ◦ r = r ◦ h).',
            example: 'z’ = 2i z + 3 ➔ k = 2, θ = π/2, ω = 3/(1-2i) = (3+6i)/5',
          },
        ],
        commonMistakes: ['Écrire ω = b/(1+a) au lieu de b/(1-a).'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-cx2-1',
        'mathTc-complexes-geometrie',
        'Rapport de similitude directe',
        1,
        'Soit la similitude directe d’écriture complexe z’ = (√3 + i)z - 4. Quel est son rapport k ?',
        '2',
        'Le rapport d’une similitude z’ = az + b est k = |a|.',
        'k = |√3 + i| = √(3 + 1) = 2.',
        [
          { title: 'Coefficient directeur', explanation: 'a = √3 + i.', math: 'k = |a| = √((√3)² + 1²) = 2' },
        ]
      ),
      mkQcm(
        'mathTc-cx2-2',
        'mathTc-complexes-geometrie',
        'Lieu géométrique |z - 2 + i| = |z + 4i|',
        2,
        'Dans le plan complexe, quel est l’ensemble des points M(z) vérifiant |z - (2 - i)| = |z - (-4i)| ?',
        ['La médiatrice du segment [AB] avec A(2 ; -1) et B(0 ; -4)', 'Le cercle de centre A et de rayon 4', 'La droite (AB)', 'Le cercle de diamètre [AB]'],
        'La médiatrice du segment [AB] avec A(2 ; -1) et B(0 ; -4)',
        'Traduis |z - z_A| = |z - z_B| en distances AM = BM.',
        'AM = BM caractérise la médiatrice de [AB].',
        [
          { title: 'Traduction en distances', explanation: 'Poser z_A = 2 - i et z_B = -4i.', math: '|z - z_A| = |z - z_B| ⟺ MA = MB' },
        ]
      ),
      mkQcm(
        'mathTc-cx2-3',
        'mathTc-complexes-geometrie',
        'Nature du triangle ABC',
        2,
        'Soient A(1), B(3 + 2i) et C(-1 + 2i). En calculant (z_C - z_A)/(z_B - z_A), quelle est la nature de ABC ?',
        ['Rectangle isocèle en A', 'Équilatéral', 'A, B, C alignés', 'Isocèle non rectangle en B'],
        'Rectangle isocèle en A',
        'Calcule (-2 + 2i) / (2 + 2i).',
        '(-2 + 2i)/(2 + 2i) = (-1 + i)/(1 + i) = i, donc AC = AB et (AB⃗, AC⃗) = π/2.',
        [
          { title: 'Quotient complexe', explanation: 'Simplifier par 2 puis multiplier par (1 - i).', math: '(-1+i)(1-i)/2 = 2i/2 = i' },
        ]
      ),
      mkNum(
        'mathTc-cx2-4',
        'mathTc-complexes-geometrie',
        'Affixe du centre invariant',
        3,
        'Soit la similitude z’ = (1 - i)z + 2 + 2i. Calcule le module |ω| de son centre invariant Ω.',
        '2.83',
        'Résous ω = (1 - i)ω + 2 + 2i ⟹ iω = 2 + 2i.',
        'ω = (2 + 2i)/i = 2 - 2i, et |ω| = √(4 + 4) = 2√2 ≈ 2,83.',
        [
          { title: 'Point fixe', explanation: 'iω = 2 + 2i.', math: 'ω = 2 - 2i' },
          { title: 'Module', explanation: '√(2² + (-2)²).', math: '|ω| = √8 ≈ 2,83' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-barycentre-matrices',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'nombres-calculs',
    order: 4,
    title: 'Barycentre, Produit Vectoriel & Systèmes Linéaires (Pivot de Gauss)',
    badge: 'Maths Tle C · Ch. 4',
    shortDesc: 'Barycentre de n points pondérés, réduction de sommes vectorielles, produit vectoriel u⃗ ∧ v⃗, aire/volume et pivot de Gauss.',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-600 via-sky-500 to-blue-400',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-barycentre-vectoriel',
    bossMeta: { name: 'MAÎTRE DES VECTEURS & SYSTÈMES', emoji: '⚖️', xp: 190 },
    kokoSpeech:
      'En Terminale C, le barycentre permet de réduire Σ α_i MA_i⃗ en (Σ α_i) MG⃗ et Σ α_i MA_i² via la fonction scalaire de Leibniz : un grand classique de la géométrie au Bac !',
    realWorldHook: {
      title: 'Équilibre d’une grue portuaire à Owendo et moment d’une force',
      scenario:
        'Le centre de gravité G d’une grue chargée de plusieurs conteneurs est le barycentre des masses. Le couple de basculement est donné par le produit vectoriel OM⃗ ∧ F⃗.',
      question:
        'Comment calculer les coordonnées du barycentre, la norme de u⃗ ∧ v⃗ et résoudre un système 3×3 équilibré ?',
    },
    unitsTable: [
      { symbol: 'G = bar{(A_i, α_i)}', quantity: 'Barycentre', unit: 'Σ α_i ≠ 0', instrument: 'Σ α_i GA_i⃗ = 0⃗' },
      { symbol: 'u⃗ ∧ v⃗', quantity: 'Produit vectoriel', unit: 'Vecteur ⊥ u⃗ et v⃗', instrument: '||u⃗∧v⃗|| = ||u⃗||·||v⃗||·|sin θ|' },
      { symbol: 'Aire(ABC)', quantity: 'Aire du triangle', unit: 'u.a.', instrument: '½ ||AB⃗ ∧ AC⃗||' },
      { symbol: 'AX = B', quantity: 'Système linéaire 3×3', unit: 'Pivot de Gauss', instrument: 'Matrice échelonnée' },
    ],
    experimentOrActivity: {
      title: 'Fonction scalaire de Leibniz et lieux de points',
      materials: ['Points pondérés (A, α), (B, β), (C, γ)', 'Barycentre G', 'Identité MA² = MG² + GA² + 2MG⃗·GA⃗'],
      observation:
        'Quand α + β + γ ≠ 0, f(M) = αMA² + βMB² + γMC² = (α+β+γ)MG² + f(G), réduisant le lieu f(M) = k à un cercle ou une sphère de centre G.',
      conclusion:
        'Lorsque α + β + γ = 0, le vecteur V⃗ = Σ α_i MA_i⃗ est constant et le lieu f(M) = k devient un plan ou une droite perpendiculaire à V⃗.',
    },
    revisionChecklist: [
      'Je sais réduire Σ α_i MA_i⃗ selon que Σ α_i est nul ou non nul.',
      'Je sais calculer u⃗ ∧ v⃗ en coordonnées et en déduire un vecteur normal à un plan ou l’aire d’un triangle.',
      'Je maîtrise le pivot de Gauss sur des systèmes 3×3 (y compris à paramètre m).',
    ],
    keyFormulas: [
      'Si Σ α_i ≠ 0 : Σ α_i MA_i⃗ = (Σ α_i) MG⃗  et  x_G = (Σ α_i x_i) / (Σ α_i)',
      'Leibniz (Σ α_i ≠ 0) : Σ α_i MA_i² = (Σ α_i) MG² + Σ α_i GA_i²',
      'Produit vectoriel : u⃗(x,y,z) ∧ v⃗(x’,y’,z’) = (yz’-zy’ ; zx’-xz’ ; xy’-yx’)',
      'Volume tétraèdre ABCD : V = (1/6) | (AB⃗ ∧ AC⃗) · AD⃗ |',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Barycentre, Produit Vectoriel & Systèmes',
      slogan: 'Σ α_i ≠ 0 ➔ G · u⃗ ∧ v⃗ ➔ Normal & Aire',
      summaryBulletPoints: [
        'Associativité du barycentre : on peut remplacer un sous-ensemble de points (de somme de poids non nulle) par son barycentre partiel affecté de la somme des poids.',
        'u⃗ ∧ v⃗ = 0⃗ ⟺ u⃗ et v⃗ sont colinéaires.',
        'Dans l’espace, ||AB⃗ ∧ AC⃗|| donne l’aire du parallélogramme ; la moitié donne l’aire du triangle ABC.',
      ],
      verticalFormulas: [
        {
          name: 'Calcul du produit vectoriel u⃗ ∧ v⃗',
          badge: '✖️',
          steps: [
            'u⃗(1 ; 2 ; -1)  et  v⃗(3 ; 0 ; 2)',
            'x = 2×2 - (-1)×0 = 4',
            'y = (-1)×3 - 1×2 = -5',
            'z = 1×0 - 2×3 = -6',
          ],
          resultHighlight: 'u⃗ ∧ v⃗ = (4 ; -5 ; -6)',
          explanation: 'Contrôle rapide : vérifier que (u⃗∧v⃗)·u⃗ = 4 - 10 + 6 = 0 et (u⃗∧v⃗)·v⃗ = 12 + 0 - 12 = 0.',
        },
      ],
      kokoTip: 'Après chaque produit vectoriel, fais toujours le produit scalaire avec u⃗ et v⃗ : si tu obtiens 0, zéro erreur de signe !',
      pitfallToAvoid: 'Oublier d’inverser l’ordre dans la composante y = z x’ - x z’ du produit vectoriel.',
    },
    sections: [
      {
        title: '1. Barycentre de n points pondérés & lignes de niveau',
        illustrationNote: 'Balance pondérée et cercle de niveau f(M) = (Σ α_i) MG² + f(G) = k.',
        explanation: [
          'Soient (A_i, α_i) des points pondérés tels que S = Σ α_i ≠ 0. Il existe un unique point G tel que Σ α_i GA_i⃗ = 0⃗.',
          'Le barycentre reste inchangé si l’on multiplie tous les coefficients par un même réel non nul k.',
        ],
        rules: [
          {
            name: 'Associativité et alignement',
            description: 'Pour prouver que trois droites sont concourantes (médianes, hauteurs...), on écrit G comme barycentre et on regroupe deux par deux.',
            example: 'G = bar{(A,1),(B,2),(C,3)} : si I = bar{(A,1),(B,2)}, alors G = bar{(I,3),(C,3)} = milieu de [IC]',
          },
        ],
        commonMistakes: ['Utiliser G = bar{(A_i, α_i)} alors que Σ α_i = 0 !'],
      },
      {
        title: '2. Produit vectoriel dans l’espace et pivot de Gauss',
        illustrationNote: 'Règle de la main droite : u⃗, v⃗ et w⃗ = u⃗ ∧ v⃗ forment un trièdre direct.',
        explanation: [
          'Le produit vectoriel u⃗ ∧ v⃗ est antisymétrique (v⃗ ∧ u⃗ = -u⃗ ∧ v⃗) et orthogonal à la fois à u⃗ et à v⃗.',
          'Le pivot de Gauss transforme un système linéaire AX = B en un système triangulaire équivalent par opérations élémentaires sur les lignes.',
        ],
        rules: [
          {
            name: 'Aire, distance point-droite et volume',
            description: 'Aire(ABC) = ½ ||AB⃗ ∧ AC⃗|| ; distance de M à (AB) : d = ||AM⃗ ∧ AB⃗|| / ||AB⃗||.',
            example: 'AB⃗(2,0,0), AC⃗(0,3,0) ⟹ AB⃗ ∧ AC⃗ = (0,0,6) ⟹ Aire(ABC) = 3',
          },
        ],
        commonMistakes: ['Croire que le produit vectoriel est commutatif ou associatif.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-bary-1',
        'mathTc-barycentre-matrices',
        'Abscisse du barycentre',
        1,
        'Soient A(2 ; 1) avec poids 3 et B(10 ; 5) avec poids 1. Calcule l’abscisse x_G du barycentre G = bar{(A,3),(B,1)}.',
        '4',
        'x_G = (3x_A + 1x_B) / (3 + 1).',
        'x_G = (3×2 + 1×10) / 4 = 16 / 4 = 4.',
        [
          { title: 'Formule des coordonnées', explanation: 'Moyenne pondérée des abscisses.', math: 'x_G = (6 + 10) / 4 = 4' },
        ]
      ),
      mkNum(
        'mathTc-bary-2',
        'mathTc-barycentre-matrices',
        'Aire d’un triangle dans l’espace',
        2,
        'On donne A(0 ; 0 ; 0), B(3 ; 0 ; 0) et C(0 ; 4 ; 0). Calcule l’aire du triangle ABC en utilisant ½ ||AB⃗ ∧ AC⃗||.',
        '6',
        'AB⃗ = (3 ; 0 ; 0) et AC⃗ = (0 ; 4 ; 0).',
        'AB⃗ ∧ AC⃗ = (0 ; 0 ; 12) donc Aire = ½ × 12 = 6.',
        [
          { title: 'Produit vectoriel', explanation: 'Calcul de AB⃗ ∧ AC⃗.', math: '(3,0,0) ∧ (0,4,0) = (0,0,12)' },
          { title: 'Aire', explanation: 'Moitié de la norme.', math: 'A = ½ × 12 = 6' },
        ]
      ),
      mkQcm(
        'mathTc-bary-3',
        'mathTc-barycentre-matrices',
        'Réduction vectorielle quand Σ α_i = 0',
        2,
        'Soit M un point quelconque du plan et V⃗ = 2MA⃗ + MB⃗ - 3MC⃗. Que peut-on dire du vecteur V⃗ ?',
        ['Il est indépendant du point M', 'Il est égal à 0⃗', 'Il vaut 6 MG⃗', 'Sa norme dépend de M'],
        'Il est indépendant du point M',
        'La somme des coefficients vaut 2 + 1 - 3 = 0.',
        'En introduisant A par Chasles : V⃗ = AB⃗ - 3AC⃗, constant (indépendant de M).',
        [
          { title: 'Relation de Chasles', explanation: '2MA⃗ + (MA⃗+AB⃗) - 3(MA⃗+AC⃗).', math: 'V⃗ = (2+1-3)MA⃗ + AB⃗ - 3AC⃗ = AB⃗ - 3AC⃗' },
        ]
      ),
      mkNum(
        'mathTc-bary-4',
        'mathTc-barycentre-matrices',
        'Rayon par fonction de Leibniz',
        3,
        'Soient A(-2 ; 0), B(2 ; 0) et G milieu de [AB]. Détermine le rayon R du cercle des points M tels que MA² + MB² = 26.',
        '3',
        'Utilise MA² + MB² = 2MG² + AB²/2.',
        'AB = 4 donc AB²/2 = 8. 2MG² + 8 = 26 ⟹ MG² = 9 ⟹ R = 3.',
        [
          { title: 'Théorème de la médiane', explanation: 'Leibniz pour α = β = 1.', math: 'MA² + MB² = 2MG² + AB²/2 = 2MG² + 8' },
          { title: 'Rayon R', explanation: '2MG² = 18 ⟹ MG = 3.', math: 'R = 3' },
        ]
      ),
    ],
  },
];
