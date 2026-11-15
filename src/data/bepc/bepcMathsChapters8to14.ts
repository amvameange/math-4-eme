import { Exercise } from '../../types/math';
import { buildBepcChapterList } from './bepcHelpers';

export const BEPC_MATHS_CHAPTERS_8_TO_14: Record<string, Exercise[]> = {
  'math3-thales-3eme': buildBepcChapterList('math3-thales-3eme', [
    {
      title: 'Configuration directe de Thalès dans le triangle',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Dans un triangle ABC, M ∈ [AB] et N ∈ [AC] tels que (MN) // (BC).\nOn donne AM = 4 cm, AB = 10 cm et AC = 15 cm.\nCalcule la longueur AN en cm.',
      hint: 'D’après Thalès : AM / AB = AN / AC ➔ 4 / 10 = AN / 15.',
      correctAnswer: '6',
      unit: 'cm',
      explanationFinal: 'AN = (4 × 15) ÷ 10 = 60 ÷ 10 = 6 cm.',
      steps: [
        {
          title: 'Égalité des rapports de Thalès',
          ruleApplied: 'Théorème de Thalès ((MN) // (BC))',
          mathExpression: 'AM / AB = AN / AC\n4 / 10 = AN / 15',
          explanation: 'M ∈ (AB), N ∈ (AC) et (MN) // (BC).',
        },
        {
          title: 'Produit en croix',
          mathExpression: 'AN = (4 × 15) ÷ 10\nAN = 60 ÷ 10 = 6 cm',
          explanation: 'Calcul exact.',
          subResult: '6 cm',
        },
      ],
    },
    {
      title: 'Calcul de la base parallèle MN',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      prompt:
        'Dans le triangle EFG, I ∈ [EF] et J ∈ [EG] avec (IJ) // (FG).\nOn sait que EI = 3 cm, EF = 9 cm et FG = 18 cm.\nCalcule la longueur IJ en cm.',
      hint: 'EI / EF = IJ / FG ➔ 3 / 9 = IJ / 18.',
      correctAnswer: '6',
      unit: 'cm',
      explanationFinal: 'IJ = (3 × 18) ÷ 9 = 6 cm.',
      steps: [
        {
          title: 'Rapports de Thalès',
          mathExpression: 'EI / EF = IJ / FG\n3 / 9 = IJ / 18\nIJ = (3 × 18) ÷ 9 = 6 cm',
          explanation: 'Le triangle EIJ est une réduction au tiers de EFG.',
          subResult: '6 cm',
        },
      ],
    },
    {
      title: 'Configuration papillon (sablier) de Thalès',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Les droites (AB) et (CD) se coupent en O (configuration papillon) et (AC) // (BD).\nOn donne OA = 6 cm, OB = 9 cm et AC = 8 cm.\nCalcule la longueur BD en cm.',
      hint: 'OA / OB = AC / BD ➔ 6 / 9 = 8 / BD.',
      correctAnswer: '12',
      unit: 'cm',
      explanationFinal: 'BD = (9 × 8) ÷ 6 = 72 ÷ 6 = 12 cm.',
      steps: [
        {
          title: '1) Configuration papillon',
          ruleApplied: 'Théorème de Thalès (cas papillon)',
          mathExpression: 'OA / OB = OC / OD = AC / BD\n6 / 9 = 8 / BD',
          explanation: 'On associe les côtés opposés par le sommet O.',
        },
        {
          title: '2) Calcul de BD',
          mathExpression: 'BD = (9 × 8) ÷ 6 = 72 ÷ 6 = 12 cm',
          explanation: 'BD vaut 12 cm.',
          subResult: '12 cm',
        },
      ],
    },
    {
      title: 'Réciproque du théorème de Thalès (Parallélisme ?)',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      questionType: 'qcm',
      options: [
        'Oui, (MN) // (BC) car AM/AB = AN/AC = 0,6',
        'Non, les droites ne sont pas parallèles',
        'Oui, grâce au théorème de Pythagore',
        'Impossible à conclure sans connaître BC',
      ],
      prompt:
        'Dans un triangle ABC, M ∈ [AB] et N ∈ [AC].\nOn mesure AM = 4,5 cm, AB = 7,5 cm, AN = 6 cm et AC = 10 cm.\nLes droites (MN) et (BC) sont-elles parallèles ?',
      hint: 'Compare AM/AB = 4,5/7,5 = 0,6 et AN/AC = 6/10 = 0,6.',
      correctAnswer: 'Oui, (MN) // (BC) car AM/AB = AN/AC = 0,6',
      explanationFinal: 'AM/AB = 0,6 et AN/AC = 0,6, avec A, M, B et A, N, C alignés dans le même ordre : d’après la réciproque de Thalès, (MN) // (BC).',
      steps: [
        {
          title: '1) Calcul séparé des deux rapports',
          mathExpression: 'AM / AB = 4,5 ÷ 7,5 = 0,6\nAN / AC = 6 ÷ 10 = 0,6',
          explanation: 'Les rapports sont égaux.',
        },
        {
          title: '2) Ordre des points et conclusion',
          mathExpression: 'A, M, B et A, N, C alignés dans le même ordre\n⇒ D’après la réciproque de Thalès, (MN) // (BC)',
          explanation: 'Condition complète vérifiée.',
        },
      ],
    },
    {
      title: 'Contraposée de Thalès (Non-parallélisme)',
      difficulty: 2,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      questionType: 'qcm',
      options: [
        'Non, (DE) et (FG) ne sont pas parallèles car 24 ≠ 25',
        'Oui, elles sont parallèles',
        'Elles sont perpendiculaires',
        'Les longueurs sont proportionnelles',
      ],
      prompt:
        'Les droites (DF) et (EG) se coupent en O (O entre D et F, et entre E et G).\nOn mesure OD = 4 cm, OF = 6 cm, OE = 5 cm et OG = 8 cm.\nLes droites (DE) et (FG) sont-elles parallèles ?',
      hint: 'Compare les produits en croix : OD × OG = 4 × 8 = 32 et OF × OE = 6 × 5 = 30 (ou OD/OF = 2/3 et OE/OG = 5/8).',
      correctAnswer: 'Non, (DE) et (FG) ne sont pas parallèles car 24 ≠ 25',
      explanationFinal: 'OD/OF = 4/6 = 16/24 et OE/OG = 5/8 = 15/24 (produits en croix différents) : d’après la contraposée de Thalès, (DE) et (FG) ne sont pas parallèles.',
      steps: [
        {
          title: 'Comparaison des rapports',
          mathExpression: 'OD / OF = 4 / 6 = 2 / 3 ≈ 0,667\nOE / OG = 5 / 8 = 0,625',
          explanation: 'Ou produits en croix : 4 × 8 = 32 ≠ 6 × 5 = 30.',
        },
        {
          title: 'Conclusion par contraposée',
          mathExpression: 'OD / OF ≠ OE / OG\n⇒ (DE) et (FG) ne sont pas parallèles',
          explanation: 'Rédaction rigoureuse attendue au BEPC.',
        },
      ],
    },
    {
      title: 'Mesure de la hauteur d’un arbre (Bâton d’ombre)',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '4 pts',
      prompt:
        'Un élève plante verticalement un bâton de 1,5 m de haut qui projette au sol une ombre de 2,5 m.\nAu même instant, un okoumé voisin projette au sol une ombre de 30 m.\nCalcule la hauteur H de l’okoumé en mètres.',
      hint: 'Les rayons du soleil sont parallèles : H / 1,5 = 30 / 2,5.',
      correctAnswer: '18',
      unit: 'm',
      explanationFinal: 'H = (1,5 × 30) ÷ 2,5 = 45 ÷ 2,5 = 18 m.',
      steps: [
        {
          title: '1) Modélisation par Thalès',
          mathExpression: 'H_arbre / H_bâton = Ombre_arbre / Ombre_bâton\nH / 1,5 = 30 / 2,5',
          explanation: 'Deux triangles rectangles en configuration de Thalès.',
        },
        {
          title: '2) Calcul de la hauteur',
          mathExpression: 'H = (1,5 × 30) ÷ 2,5\n= 45 ÷ 2,5 = 18 m',
          explanation: 'L’okoumé mesure 18 m de haut.',
          subResult: '18 m',
        },
      ],
    },
    {
      title: 'Thalès avec segment manquant MB = AB − AM',
      difficulty: 3,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Dans un triangle ABC, M ∈ [AB] et N ∈ [AC] avec (MN) // (BC).\nOn donne AM = 5 cm, MB = 7 cm et AN = 4 cm.\nCalcule la longueur totale AC en cm.',
      hint: 'Attention : AB = AM + MB = 5 + 7 = 12 cm ! Puis AM / AB = AN / AC ➔ 5 / 12 = 4 / AC.',
      correctAnswer: '9.6',
      unit: 'cm',
      explanationFinal: 'AB = 12 cm donc AC = (12 × 4) ÷ 5 = 48 ÷ 5 = 9,6 cm.',
      steps: [
        {
          title: '1) Calculer d’abord AB',
          mathExpression: 'AB = AM + MB = 5 + 7 = 12 cm',
          explanation: 'Piège classique : Thalès utilise AM/AB et non AM/MB !',
        },
        {
          title: '2) Calcul de AC',
          mathExpression: '5 / 12 = 4 / AC\nAC = (12 × 4) ÷ 5 = 48 ÷ 5 = 9,6 cm',
          explanation: 'Valeur exacte décimale.',
          subResult: '9,6 cm',
        },
      ],
    },
    {
      title: 'Inconnue x dans une égalité de Thalès',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Dans un triangle ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC).\nOn pose AM = x, MB = 6, AN = 4 et NC = 3 (en cm).\nCalcule la valeur de x en cm.',
      hint: 'AM / AB = AN / AC ➔ x / (x + 6) = 4 / 7 ➔ 7x = 4(x + 6) ➔ 3x = 24.',
      correctAnswer: '8',
      unit: 'cm',
      explanationFinal: '7x = 4x + 24 ➔ 3x = 24 ➔ x = 8 cm.',
      steps: [
        {
          title: '1) Rapports avec inconnue x',
          mathExpression: 'AC = 4 + 3 = 7\nAB = x + 6\nx / (x + 6) = 4 / 7',
          explanation: 'Égalité de Thalès.',
        },
        {
          title: '2) Résolution de l’équation',
          mathExpression: '7x = 4(x + 6)\n7x = 4x + 24\n3x = 24 ⇒ x = 8 cm',
          explanation: 'Vérif : 8/14 = 4/7.',
          subResult: '8 cm',
        },
      ],
    },
    {
      title: 'Synthèse BEPC : Pythagore + Thalès combinés',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '5 pts',
      prompt:
        'Soit ABC un triangle rectangle en A tel que AB = 6 cm et AC = 8 cm.\nSoit M ∈ [AB] tel que AM = 4,5 cm. La parallèle à (BC) passant par M coupe [AC] en N.\nCalcule d’abord BC par Pythagore, puis déduis la longueur MN en cm.',
      hint: 'BC² = 6² + 8² = 100 ➔ BC = 10 cm. Puis MN / BC = AM / AB ➔ MN / 10 = 4,5 / 6.',
      correctAnswer: '7.5',
      unit: 'cm',
      explanationFinal: 'BC = 10 cm puis MN = (4,5 × 10) ÷ 6 = 45 ÷ 6 = 7,5 cm.',
      steps: [
        {
          title: '1) Calcul de BC par Pythagore',
          mathExpression: 'BC² = AB² + AC² = 36 + 64 = 100\nBC = √100 = 10 cm',
          explanation: 'Le triangle ABC est rectangle en A.',
        },
        {
          title: '2) Calcul de MN par Thalès',
          mathExpression: 'MN / BC = AM / AB\nMN / 10 = 4,5 / 6\nMN = 45 ÷ 6 = 7,5 cm',
          explanation: 'Enchaînement typique des sujets de BEPC.',
          subResult: '7,5 cm',
        },
      ],
    },
    {
      title: 'Synthèse : Double configuration de Thalès (Papillon + Triangle)',
      difficulty: 4,
      originCountry: '🇫🇷 DNB Centres Étrangers',
      originYear: 'Session 2023',
      bepcPoints: '5 pts',
      prompt:
        'Un pont traverse une rivière entre les points A et B. On connaît : (AB) // (CD), O est entre A et D et entre B et C.\nOA = 12 m, OD = 18 m, AB = 20 m. On prolonge de façon que E ∈ [OD] avec OE = 9 m et (EF) // (DC) (F ∈ [OC]).\nCalcule d’abord CD, puis déduis la longueur EF en mètres.',
      hint: 'Papillon : CD / AB = OD / OA ➔ CD / 20 = 18 / 12 ➔ CD = 30 m. Puis triangle : EF / CD = OE / OD = 9 / 18 = 0,5.',
      correctAnswer: '15',
      unit: 'm',
      explanationFinal: 'CD = 30 m, puis EF = 0,5 × 30 = 15 m.',
      steps: [
        {
          title: '1) Papillon pour CD',
          mathExpression: 'CD / 20 = 18 / 12 = 1,5\nCD = 20 × 1,5 = 30 m',
          explanation: 'Premier théorème de Thalès.',
        },
        {
          title: '2) Triangle pour EF',
          mathExpression: 'EF / CD = OE / OD = 9 / 18 = 0,5\nEF = 30 × 0,5 = 15 m',
          explanation: 'F est aussi le milieu de [OC].',
          subResult: '15 m',
        },
      ],
    },
  ]),

  'math3-trigonometrie-3eme': buildBepcChapterList('math3-trigonometrie-3eme', [
    {
      title: 'Identifier le côté opposé, adjacent et l’hypoténuse',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      questionType: 'qcm',
      options: ['cos(B̂) = AB / BC', 'cos(B̂) = AC / BC', 'cos(B̂) = AB / AC', 'cos(B̂) = BC / AB'],
      prompt:
        'Soit ABC un triangle rectangle en A.\nQuelle formule donne le cosinus de l’angle aigu B̂ ?',
      hint: 'CAH : Cosinus = Adjacent ÷ Hypoténuse. En A, l’hypoténuse est [BC] et le côté adjacent à B̂ est [AB].',
      correctAnswer: 'cos(B̂) = AB / BC',
      explanationFinal: 'Pour l’angle B̂ dans ABC rectangle en A, Adjacent = AB et Hypoténuse = BC, donc cos(B̂) = AB / BC.',
      steps: [
        {
          title: 'Repérage dans le triangle rectangle en A',
          mathExpression: 'Hypoténuse = [BC]\nCôté adjacent à B̂ = [AB]\ncos(B̂) = Adj / Hyp = AB / BC',
          explanation: 'Moyen mnémotechnique SOH-CAH-TOA.',
        },
      ],
    },
    {
      title: 'Calcul direct d’un cosinus exact',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Soit EFG un triangle rectangle en E tel que EF = 9 cm et FG = 15 cm.\nCalcule la valeur décimale exacte de cos(F̂).',
      hint: 'L’hypoténuse est [FG] = 15 cm. Le côté adjacent à F̂ est [EF] = 9 cm. Calcule 9 ÷ 15.',
      correctAnswer: '0.6',
      explanationFinal: 'cos(F̂) = EF / FG = 9 / 15 = 3 / 5 = 0,6.',
      steps: [
        {
          title: 'Application de CAH',
          mathExpression: 'cos(F̂) = EF / FG\n= 9 / 15 = 3 / 5 = 0,6',
          explanation: 'Toujours compris entre 0 et 1.',
          subResult: '0,6',
        },
      ],
    },
    {
      title: 'Calcul d’un côté connaissant sin(30°) = 0,5',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'ABC est rectangle en A avec BC = 14 cm et l’angle B̂ = 30°.\nSachant que sin(30°) = 0,5, calcule la longueur AC en cm.',
      hint: 'sin(B̂) = AC / BC ➔ AC = BC × sin(30°).',
      correctAnswer: '7',
      unit: 'cm',
      explanationFinal: 'AC = 14 × sin(30°) = 14 × 0,5 = 7 cm.',
      steps: [
        {
          title: 'Formule SOH',
          mathExpression: 'sin(B̂) = Opp / Hyp = AC / BC\nAC = 14 × sin(30°) = 14 × 0,5 = 7 cm',
          explanation: 'À retenir : sin(30°) = 1/2.',
          subResult: '7 cm',
        },
      ],
    },
    {
      title: 'Relation fondamentale cos²α + sin²α = 1',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Soit α un angle aigu tel que cos(α) = 0,8.\nCalcule la valeur exacte de sin(α).',
      hint: 'sin²(α) = 1 − cos²(α) = 1 − 0,64 = 0,36. Puis √0,36.',
      correctAnswer: '0.6',
      explanationFinal: 'sin²(α) = 1 − 0,8² = 0,36, et comme sin(α) > 0, sin(α) = √0,36 = 0,6.',
      steps: [
        {
          title: '1) Utilisation de cos²α + sin²α = 1',
          mathExpression: 'sin²(α) = 1 − (0,8)²\n= 1 − 0,64 = 0,36',
          explanation: 'Relation fondamentale de trigonométrie.',
        },
        {
          title: '2) Racine carrée positive',
          mathExpression: 'sin(α) = √0,36 = 0,6 (car α aigu)',
          explanation: 'sin(α) > 0 pour 0° < α < 90°.',
          subResult: '0,6',
        },
      ],
    },
    {
      title: 'Calcul de tangente et rapport tan(α) = sin(α) / cos(α)',
      difficulty: 2,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Pour un angle aigu α, on a sin(α) = 0,6 et cos(α) = 0,8.\nCalcule la valeur décimale exacte de tan(α).',
      hint: 'tan(α) = sin(α) ÷ cos(α) = 0,6 ÷ 0,8.',
      correctAnswer: '0.75',
      explanationFinal: 'tan(α) = 0,6 ÷ 0,8 = 6/8 = 3/4 = 0,75.',
      steps: [
        {
          title: 'Quotient sin / cos',
          mathExpression: 'tan(α) = sin(α) ÷ cos(α)\n= 0,6 ÷ 0,8 = 3/4 = 0,75',
          explanation: 'Relation toujours vraie pour α ≠ 90°.',
          subResult: '0,75',
        },
      ],
    },
    {
      title: 'Angles complémentaires (sin 60° = cos 30°)',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Dans un triangle MNP rectangle en M, on sait que sin(N̂) = 0,58.\nCalcule la valeur exacte de cos(P̂).',
      hint: 'N̂ + P̂ = 90° donc N̂ et P̂ sont complémentaires : cos(P̂) = sin(N̂) !',
      correctAnswer: '0.58',
      explanationFinal: 'Les angles aigus d’un triangle rectangle sont complémentaires : cos(P̂) = sin(N̂) = 0,58.',
      steps: [
        {
          title: 'Propriété des angles complémentaires',
          mathExpression: 'N̂ + P̂ = 90° ⇒ cos(P̂) = sin(90° − P̂) = sin(N̂)\ncos(P̂) = 0,58',
          explanation: 'Le même rapport MP/NP représente sin(N̂) et cos(P̂).',
          subResult: '0,58',
        },
      ],
    },
    {
      title: 'Calcul d’un côté via tan(45°) = 1 (Pente & Hélène)',
      difficulty: 3,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Un mât vertical [AB] (perpendiculaire au sol [AC]) est observé depuis un point C situé à AC = 12 m du pied A sous un angle AĈB = 45°.\nCalcule la hauteur AB du mât en mètres (tan 45° = 1).',
      hint: 'tan(AĈB) = AB / AC ➔ AB = AC × tan(45°).',
      correctAnswer: '12',
      unit: 'm',
      explanationFinal: 'AB = 12 × tan(45°) = 12 × 1 = 12 m (triangle rectangle isocèle).',
      steps: [
        {
          title: 'Application de TOA',
          mathExpression: 'tan(45°) = AB / AC\n1 = AB / 12 ⇒ AB = 12 m',
          explanation: 'À 45°, hauteur = distance au sol.',
          subResult: '12 m',
        },
      ],
    },
    {
      title: 'Valeurs exactes trigonométriques remarquables (30°, 45°, 60°)',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Calcule la valeur exacte de l’expression :\nK = 2 × cos(60°) + 4 × sin²(45°) + tan(45°).\n(Rappel : cos 60° = 1/2 ; sin 45° = √2 / 2 ; tan 45° = 1).',
      hint: '2×(1/2) = 1 ; sin²(45°) = (√2/2)² = 2/4 = 1/2 donc 4×(1/2) = 2 ; tan 45° = 1.',
      correctAnswer: '4',
      explanationFinal: 'K = 1 + 2 + 1 = 4.',
      steps: [
        {
          title: '1) Remplacement par les valeurs exactes',
          mathExpression: '2 × cos(60°) = 2 × 0,5 = 1\n4 × sin²(45°) = 4 × (2/4) = 2\ntan(45°) = 1',
          explanation: 'Valeurs du tableau officiel 3ème.',
        },
        {
          title: '2) Somme',
          mathExpression: 'K = 1 + 2 + 1 = 4',
          explanation: 'Entier exact.',
          subResult: '4',
        },
      ],
    },
    {
      title: 'Synthèse : Calculer un angle puis une longueur (Pente route du Gabon)',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      prompt:
        'Une rampe d’accès droite [BC] monte sur un dénivelé vertical AB = 3 m pour une longueur de rampe BC = 6 m (triangle ABC rectangle en A).\nDétermine la mesure exacte de l’angle d’inclinaison AĈB (en degrés).',
      hint: 'sin(AĈB) = AB / BC = 3 / 6 = 0,5. Quel angle a un sinus égal à 0,5 ?',
      correctAnswer: '30',
      unit: '°',
      explanationFinal: 'sin(AĈB) = 0,5 donc AĈB = 30°.',
      steps: [
        {
          title: '1) Calcul du sinus',
          mathExpression: 'sin(AĈB) = Opp / Hyp = AB / BC\n= 3 / 6 = 0,5',
          explanation: 'AB est opposé à l’angle Ĉ.',
        },
        {
          title: '2) Retrouver l’angle',
          mathExpression: 'sin(30°) = 0,5 ⇒ AĈB = 30°',
          explanation: 'Angle remarquable.',
          subResult: '30°',
        },
      ],
    },
    {
      title: 'Synthèse : Hauteur d’un phare par double visée',
      difficulty: 4,
      originCountry: '🇲🇦 Examen 3ème Maroc',
      originYear: 'Session 2023',
      bepcPoints: '5 pts',
      prompt:
        'Depuis un point D aligné avec le pied H d’un phare [PH], on vise le sommet P sous un angle de 45°. On recule ensuite de DC = 20 m en ligne droite, et depuis C on vise P sous un angle tel que tan(Ĉ) = 0,6.\nSachant que PH = HD (car angle D̂ = 45°), calcule la hauteur h = PH du phare en mètres.',
      hint: 'HC = h + 20. Dans PHC rectangle en H : tan(Ĉ) = h / (h + 20) = 0,6 ➔ h = 0,6h + 12 ➔ 0,4h = 12.',
      correctAnswer: '30',
      unit: 'm',
      explanationFinal: 'h / (h + 20) = 0,6 donne 0,4h = 12, soit h = 30 m.',
      steps: [
        {
          title: '1) Relation dans PHD (45°)',
          mathExpression: 'tan(45°) = PH / HD = 1 ⇒ HD = h',
          explanation: 'Triangle PHD rectangle isocèle.',
        },
        {
          title: '2) Relation dans PHC',
          mathExpression: 'tan(Ĉ) = PH / (HD + DC) = h / (h + 20) = 0,6\nh = 0,6(h + 20) = 0,6h + 12\n0,4h = 12 ⇒ h = 30 m',
          explanation: 'Problème classique d’arpentage BEPC.',
          subResult: '30 m',
        },
      ],
    },
  ]),

  'math3-vecteurs-translations': buildBepcChapterList('math3-vecteurs-translations', [
    {
      title: 'Relation de Chasles : Simplification vectorielle',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      questionType: 'qcm',
      options: ['vecteur AF', 'vecteur FA', 'vecteur nul 0', 'vecteur AE'],
      prompt: 'Simplifie la somme vectorielle suivante à l’aide de la relation de Chasles :\nAB⃗ + BC⃗ + CD⃗ + DF⃗.',
      hint: 'AB⃗ + BC⃗ = AC⃗ ; AC⃗ + CD⃗ = AD⃗ ; AD⃗ + DF⃗ = AF⃗.',
      correctAnswer: 'vecteur AF',
      explanationFinal: 'Par enchaînement de Chasles, la somme vaut le vecteur AF⃗.',
      steps: [
        {
          title: 'Application de Chasles pas à pas',
          mathExpression: '(AB⃗ + BC⃗) + CD⃗ + DF⃗\n= (AC⃗ + CD⃗) + DF⃗\n= AD⃗ + DF⃗\n= AF⃗',
          explanation: 'Origine du premier = A, extrémité du dernier = F.',
        },
      ],
    },
    {
      title: 'Calcul des coordonnées d’un vecteur AB⃗',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Dans un repère orthonormé, on donne A(−2 ; 5) et B(4 ; −1).\nCalcule l’abscisse du vecteur AB⃗.',
      hint: 'x_AB = x_B − x_A = 4 − (−2).',
      correctAnswer: '6',
      explanationFinal: 'AB⃗(4 − (−2) ; −1 − 5) = (6 ; −6), donc son abscisse est 6.',
      steps: [
        {
          title: 'Formule des coordonnées',
          mathExpression: 'x_AB = x_B − x_A = 4 − (−2) = 6\ny_AB = y_B − y_A = −1 − 5 = −6',
          explanation: 'Extrémité B moins origine A.',
          subResult: 'AB⃗(6 ; −6)',
        },
      ],
    },
    {
      title: 'Parallélogramme et égalité vectorielle',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'On donne A(1 ; 2), B(5 ; 4) et D(2 ; 6).\nDétermine l’abscisse x_C du point C tel que ABCD soit un parallélogramme (c’est-à-dire AB⃗ = DC⃗).',
      hint: 'AB⃗(4 ; 2). Pour que DC⃗ = AB⃗ : x_C − x_D = 4 ➔ x_C − 2 = 4.',
      correctAnswer: '6',
      explanationFinal: 'x_C = 2 + 4 = 6 (et y_C = 6 + 2 = 8, donc C(6 ; 8)).',
      steps: [
        {
          title: '1) Coordonnées de AB⃗',
          mathExpression: 'AB⃗(5 − 1 ; 4 − 2) = (4 ; 2)',
          explanation: 'Attention à l’ordre des lettres ABCD : AB⃗ = DC⃗ !',
        },
        {
          title: '2) Coordonnées de C',
          mathExpression: 'x_C − 2 = 4 ⇒ x_C = 6\ny_C − 6 = 2 ⇒ y_C = 8',
          explanation: 'C(6 ; 8).',
          subResult: 'x_C = 6',
        },
      ],
    },
    {
      title: 'Vecteurs colinéaires dans un repère',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Les vecteurs u⃗(3 ; −5) et v⃗(−9 ; k) sont colinéaires.\nCalcule la valeur de k.',
      hint: 'Condition de colinéarité : x×y’ − y×x’ = 0 ➔ 3×k − (−5)×(−9) = 0 ➔ 3k = 45.',
      correctAnswer: '15',
      explanationFinal: '3k − 45 = 0 ➔ k = 15 (en effet v⃗ = −3 u⃗).',
      steps: [
        {
          title: 'Déterminant nul',
          mathExpression: '3 × k − (−5) × (−9) = 0\n3k − 45 = 0\n3k = 45 ⇒ k = 15',
          explanation: 'On passe de 3 à −9 en multipliant par −3 ; −5 × (−3) = 15.',
          subResult: '15',
        },
      ],
    },
    {
      title: 'Somme de vecteurs opposés et milieu d’un segment',
      difficulty: 2,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      questionType: 'qcm',
      options: [
        'I est le milieu de [AB]',
        'A est le milieu de [IB]',
        'B est le milieu de [IA]',
        'A, I, B ne sont pas alignés',
      ],
      prompt: 'Trois points A, I, B vérifient l’égalité vectorielle : IA⃗ + IB⃗ = 0⃗.\nQue représente le point I pour le segment [AB] ?',
      hint: 'IA⃗ = −IB⃗ signifie que IA⃗ = BI⃗ : même direction, même sens, même longueur.',
      correctAnswer: 'I est le milieu de [AB]',
      explanationFinal: 'IA⃗ + IB⃗ = 0⃗ est la définition vectorielle du milieu I du segment [AB].',
      steps: [
        {
          title: 'Transformation',
          mathExpression: 'IA⃗ + IB⃗ = 0⃗ ⇔ BI⃗ = IA⃗',
          explanation: 'Caractérisation vectorielle du milieu.',
        },
      ],
    },
    {
      title: 'Norme (longueur) d’un vecteur dans un repère orthonormé',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Dans un repère orthonormé (unité 1 cm), le vecteur MN⃗ a pour coordonnées (5 ; −12).\nCalcule la longueur exacte MN en cm.',
      hint: 'MN = √(5² + (−12)²) = √(25 + 144).',
      correctAnswer: '13',
      unit: 'cm',
      explanationFinal: 'MN = √(25 + 144) = √169 = 13 cm.',
      steps: [
        {
          title: 'Norme euclidienne',
          mathExpression: '||MN⃗|| = √(5² + (−12)²)\n= √(25 + 144) = √169 = 13 cm',
          explanation: 'Triplet pythagoricien 5–12–13.',
          subResult: '13 cm',
        },
      ],
    },
    {
      title: 'Vecteurs orthogonaux (Produit scalaire nul en 3ème Gabon)',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2022',
      bepcPoints: '4 pts',
      prompt:
        'Dans un repère orthonormé, u⃗(4 ; 6) et v⃗(3 ; y) sont orthogonaux (droites perpendiculaires).\nCalcule la valeur de y.',
      hint: 'Condition d’orthogonalité xx’ + yy’ = 0 ➔ 4×3 + 6×y = 0 ➔ 12 + 6y = 0.',
      correctAnswer: '-2',
      explanationFinal: '4×3 + 6y = 0 ➔ 6y = −12 ➔ y = −2.',
      steps: [
        {
          title: 'Condition xx’ + yy’ = 0',
          mathExpression: '4 × 3 + 6 × y = 0\n12 + 6y = 0\n6y = −12 ⇒ y = −2',
          explanation: 'Critère classique d’orthogonalité au BEPC Gabon.',
          subResult: '−2',
        },
      ],
    },
    {
      title: 'Image d’un point par une translation de vecteur u⃗',
      difficulty: 3,
      originCountry: '🇫🇷 DNB Amérique du Nord',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Le point E’(x ; y) est l’image de E(−3 ; 4) par la translation de vecteur AB⃗ avec A(2 ; −1) et B(7 ; 5).\nCalcule l’ordonnée y du point E’.',
      hint: 'AB⃗ = (7−2 ; 5−(−1)) = (5 ; 6). Or EE’⃗ = AB⃗ ➔ y − 4 = 6.',
      correctAnswer: '10',
      explanationFinal: 'AB⃗(5 ; 6), donc y = 4 + 6 = 10 (et x = −3 + 5 = 2).',
      steps: [
        {
          title: '1) Coordonnées du vecteur de translation',
          mathExpression: 'AB⃗(7 − 2 ; 5 − (−1)) = (5 ; 6)',
          explanation: 'Vecteur de déplacement.',
        },
        {
          title: '2) Coordonnées de E’',
          mathExpression: 'x = −3 + 5 = 2\ny = 4 + 6 = 10',
          explanation: 'E’(2 ; 10).',
          subResult: '10',
        },
      ],
    },
    {
      title: 'Synthèse : Démontrer un alignement par colinéarité',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      prompt:
        'On donne A(1 ; 3), B(4 ; 5) et C(10 ; y).\nPour quelle valeur de y les points A, B et C sont-ils alignés ?',
      hint: 'AB⃗(3 ; 2) et AC⃗(9 ; y − 3). Pour que AB⃗ et AC⃗ soient colinéaires : 3(y − 3) − 2×9 = 0.',
      correctAnswer: '9',
      explanationFinal: 'AC⃗ = 3 AB⃗ donne y − 3 = 3 × 2 = 6, soit y = 9.',
      steps: [
        {
          title: '1) Vecteurs AB⃗ et AC⃗',
          mathExpression: 'AB⃗(4 − 1 ; 5 − 3) = (3 ; 2)\nAC⃗(10 − 1 ; y − 3) = (9 ; y − 3)',
          explanation: 'Même origine A.',
        },
        {
          title: '2) Colinéarité',
          mathExpression: '3(y − 3) − 2 × 9 = 0\n3y − 9 − 18 = 0\n3y = 27 ⇒ y = 9',
          explanation: 'En effet AC⃗ = 3 AB⃗.',
          subResult: 'y = 9',
        },
      ],
    },
    {
      title: 'Synthèse : Nature précise d’un quadrilatère par vecteurs + longueurs',
      difficulty: 4,
      originCountry: '🇲🇦 Examen 3ème Maroc',
      originYear: 'Session 2022',
      bepcPoints: '5 pts',
      questionType: 'qcm',
      options: ['Un carré', 'Un simple trapèze', 'Un losange non rectangle', 'Un rectangle non carré'],
      prompt:
        'Dans un repère orthonormé, on a A(0 ; 0), B(3 ; 4), C(−1 ; 7) et D(−4 ; 3).\nOn calcule AB⃗(3 ; 4), DC⃗(3 ; 4) et AD⃗(−4 ; 3).\nQuelle est la nature exacte du quadrilatère ABCD ?',
      hint: 'AB⃗ = DC⃗ (parallélogramme). AB·AD = 3×(−4) + 4×3 = 0 (angle droit) et AB = √(9+16) = 5 = AD.',
      correctAnswer: 'Un carré',
      explanationFinal: 'AB⃗ = DC⃗ (parallélogramme), AB⃗ ⊥ AD⃗ (rectangle) et AB = AD = 5 (losange) ⇒ ABCD est un carré !',
      steps: [
        {
          title: '1) Parallélogramme',
          mathExpression: 'AB⃗ = (3 ; 4) et DC⃗ = (3 ; 4) ⇒ ABCD parallélogramme',
          explanation: 'Côtés opposés parallèles et égaux.',
        },
        {
          title: '2) Angle droit et côtés égaux',
          mathExpression: '3×(−4) + 4×3 = −12 + 12 = 0 ⇒ AB⃗ ⊥ AD⃗\nAB = √(3²+4²) = 5 et AD = √((−4)²+3²) = 5\n⇒ ABCD est un carré',
          explanation: 'Méthode complète du BEPC.',
        },
      ],
    },
  ]),

  'math3-angles-polygones': buildBepcChapterList('math3-angles-polygones', [
    {
      title: 'Angle inscrit et angle au centre (Même arc)',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Sur un cercle de centre O, l’angle inscrit A M̂ B mesure 38°.\nCalcule la mesure de l’angle au centre A Ô B qui intercepte le même arc AB.',
      hint: 'L’angle au centre vaut le double de l’angle inscrit interceptant le même arc.',
      correctAnswer: '76',
      unit: '°',
      explanationFinal: 'AÔB = 2 × 38° = 76°.',
      steps: [
        {
          title: 'Théorème de l’angle au centre',
          mathExpression: 'AÔB = 2 × A M̂ B\n= 2 × 38° = 76°',
          explanation: 'Ils interceptent le même arc AB.',
          subResult: '76°',
        },
      ],
    },
    {
      title: 'Deux angles inscrits interceptant le même arc',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      prompt:
        'Les points A, B, M et N appartiennent à un même cercle. Les angles inscrits A M̂ B et A N̂ B interceptent le même arc AB.\nSi A M̂ B = 54°, combien mesure A N̂ B ?',
      hint: 'Deux angles inscrits interceptant le même arc ont exactement la même mesure.',
      correctAnswer: '54',
      unit: '°',
      explanationFinal: 'A N̂ B = A M̂ B = 54°.',
      steps: [
        {
          title: 'Propriété des angles inscrits',
          mathExpression: 'A N̂ B = A M̂ B = 54°',
          explanation: 'Même arc intercepté AB.',
          subResult: '54°',
        },
      ],
    },
    {
      title: 'Triangle inscrit ayant un diamètre pour côté',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Sur un cercle de diamètre [AB], M est un point du cercle (distinct de A et B) tel que M Â B = 32°.\nCalcule la mesure de l’angle M B̂ A.',
      hint: '[AB] est un diamètre ➔ A M̂ B = 90°. Puis 180° − 90° − 32°.',
      correctAnswer: '58',
      unit: '°',
      explanationFinal: 'AMB est rectangle en M donc M B̂ A = 90° − 32° = 58°.',
      steps: [
        {
          title: '1) Triangle rectangle en M',
          mathExpression: 'M ∈ cercle de diamètre [AB] ⇒ A M̂ B = 90°',
          explanation: 'Angle inscrit interceptant un demi-cercle.',
        },
        {
          title: '2) Somme des angles du triangle',
          mathExpression: 'M B̂ A = 90° − 32° = 58°',
          explanation: 'Angles aigus complémentaires.',
          subResult: '58°',
        },
      ],
    },
    {
      title: 'Angle au centre d’un polygone régulier (Octogone)',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Un octogone régulier (8 côtés égaux) est inscrit dans un cercle de centre O.\nCalcule la mesure en degrés d’un angle au centre entre deux sommets consécutifs.',
      hint: '360° ÷ 8.',
      correctAnswer: '45',
      unit: '°',
      explanationFinal: '360° ÷ 8 = 45°.',
      steps: [
        {
          title: 'Division du cercle',
          mathExpression: 'α = 360° ÷ n = 360° ÷ 8 = 45°',
          explanation: '8 secteurs identiques.',
          subResult: '45°',
        },
      ],
    },
    {
      title: 'Somme des angles intérieurs d’un hexagone régulier',
      difficulty: 2,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Calcule la mesure (en degrés) de chaque angle intérieur d’un hexagone régulier (6 côtés).',
      hint: 'Somme totale = (6 − 2) × 180° = 720°. Divise par 6 (ou 180° − 360°/6).',
      correctAnswer: '120',
      unit: '°',
      explanationFinal: 'Chaque angle intérieur d’un hexagone régulier mesure 120°.',
      steps: [
        {
          title: 'Calcul de l’angle intérieur',
          mathExpression: 'Angle au centre = 360° ÷ 6 = 60°\nAngle intérieur = 180° − 60° = 120°',
          explanation: 'Ou (6 − 2) × 180° ÷ 6 = 720° ÷ 6 = 120°.',
          subResult: '120°',
        },
      ],
    },
    {
      title: 'Quadrilatère inscriptible dans un cercle (Angles opposés)',
      difficulty: 3,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'ABCD est un quadrilatère convexe inscrit dans un cercle de centre O.\nOn donne l’angle A B̂ C = 112°.\nCalcule la mesure de l’angle opposé A D̂ C en degrés.',
      hint: 'Les angles opposés d’un quadrilatère inscrit sont supplémentaires (somme = 180°).',
      correctAnswer: '68',
      unit: '°',
      explanationFinal: 'A D̂ C = 180° − 112° = 68°.',
      steps: [
        {
          title: 'Propriété des quadrilatères inscrits',
          mathExpression: 'A B̂ C + A D̂ C = 180°\nA D̂ C = 180° − 112° = 68°',
          explanation: 'Les deux angles interceptent des arcs complémentaires formant tout le cercle (360° ÷ 2 = 180°).',
          subResult: '68°',
        },
      ],
    },
    {
      title: 'Angle inscrit interceptant le grand arc',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Sur un cercle de centre O, l’angle au centre aigu A Ô B mesure 80°. Un point M appartient au petit arc AB (du côté opposé au centre O).\nCalcule la mesure de l’angle obtus A M̂ B.',
      hint: 'L’angle obtus A M̂ B intercepte le GRAND arc AB dont l’angle au centre vaut 360° − 80° = 280° !',
      correctAnswer: '140',
      unit: '°',
      explanationFinal: 'Angle au centre associé au grand arc = 280°, donc A M̂ B = 280° ÷ 2 = 140°.',
      steps: [
        {
          title: '1) Angle au centre du grand arc',
          mathExpression: '360° − 80° = 280°',
          explanation: 'M est sur le petit arc donc l’angle A M̂ B regarde le grand arc.',
        },
        {
          title: '2) Moitié de 280°',
          mathExpression: 'A M̂ B = 280° ÷ 2 = 140°',
          explanation: 'Vérif : avec un point N sur le grand arc (40°), 140° + 40° = 180°.',
          subResult: '140°',
        },
      ],
    },
    {
      title: 'Tangente au cercle et triangle rectangle',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        '(AT) est tangente en A au cercle de centre O et de rayon OA = 6 cm. On place T sur la tangente tel que OT = 10 cm.\nCalcule la longueur AT en cm.',
      hint: 'La tangente en A est perpendiculaire au rayon [OA] : OAT est rectangle en A ! Utilise Pythagore.',
      correctAnswer: '8',
      unit: 'cm',
      explanationFinal: 'AT² = OT² − OA² = 10² − 6² = 64 ➔ AT = 8 cm.',
      steps: [
        {
          title: '1) Angle droit de la tangente',
          mathExpression: '(AT) tangente en A ⇒ (AT) ⊥ (OA)\nOAT rectangle en A',
          explanation: 'Propriété fondamentale de la tangente.',
        },
        {
          title: '2) Pythagore',
          mathExpression: 'AT² = 10² − 6² = 100 − 36 = 64\nAT = 8 cm',
          explanation: 'Triplet 6–8–10.',
          subResult: '8 cm',
        },
      ],
    },
    {
      title: 'Synthèse : Triangle isocèle + Angle au centre + Inscrit',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      prompt:
        'Sur un cercle de centre O, [AB] est une corde telle que le triangle OAB vérifie O Â B = 64°.\nUn point M est situé sur le grand arc AB.\nCalcule la mesure de l’angle inscrit A M̂ B en degrés.',
      hint: 'OAB est isocèle en O (OA = OB = rayon), donc O B̂ A = 64°, puis A Ô B = 180° − 2×64° = 52°. Enfin A M̂ B = A Ô B ÷ 2.',
      correctAnswer: '26',
      unit: '°',
      explanationFinal: 'A Ô B = 180° − 128° = 52°, donc A M̂ B = 52° ÷ 2 = 26°.',
      steps: [
        {
          title: '1) Triangle OAB isocèle en O',
          mathExpression: 'OA = OB = R ⇒ O B̂ A = O Â B = 64°\nA Ô B = 180° − (64° + 64°) = 52°',
          explanation: 'On trouve l’angle au centre.',
        },
        {
          title: '2) Angle inscrit',
          mathExpression: 'A M̂ B = A Ô B ÷ 2 = 52° ÷ 2 = 26°',
          explanation: 'M est sur le grand arc AB.',
          subResult: '26°',
        },
      ],
    },
    {
      title: 'Synthèse : Aire d’un hexagone régulier de côté 4 cm',
      difficulty: 4,
      originCountry: '🇲🇦 Examen 3ème Maroc',
      originYear: 'Session 2022',
      bepcPoints: '5 pts',
      prompt:
        'Un hexagone régulier est composé de 6 triangles équilatéraux de côté c = 4 cm.\nSachant que l’aire d’un triangle équilatéral vaut (c²√3)/4, l’aire totale de l’hexagone s’écrit k√3 cm².\nCalcule l’entier k.',
      hint: 'Aire d’un triangle = (16√3)/4 = 4√3 cm². Multiplie par 6 triangles.',
      correctAnswer: '24',
      explanationFinal: '6 × 4√3 = 24√3 cm², donc k = 24.',
      steps: [
        {
          title: '1) Aire d’un des 6 triangles équilatéraux',
          mathExpression: 'A_tri = (4² × √3) ÷ 4 = 4√3 cm²',
          explanation: 'Angle au centre = 60° + OA = OB ⇒ triangle équilatéral.',
        },
        {
          title: '2) Aire de l’hexagone',
          mathExpression: 'A_hex = 6 × 4√3 = 24√3 cm²\nk = 24',
          explanation: 'Réponse exacte.',
          subResult: '24',
        },
      ],
    },
  ]),

  'math3-reperage-droites': buildBepcChapterList('math3-reperage-droites', [
    {
      title: 'Coordonnées du milieu d’un segment [AB]',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      prompt:
        'On donne A(−4 ; 7) et B(10 ; −3).\nCalcule l’abscisse x_I du milieu I du segment [AB].',
      hint: 'x_I = (x_A + x_B) ÷ 2 = (−4 + 10) ÷ 2.',
      correctAnswer: '3',
      explanationFinal: 'x_I = (−4 + 10) ÷ 2 = 3 (et y_I = (7 − 3) ÷ 2 = 2, donc I(3 ; 2)).',
      steps: [
        {
          title: 'Formule du milieu',
          mathExpression: 'x_I = (−4 + 10) ÷ 2 = 6 ÷ 2 = 3\ny_I = (7 − 3) ÷ 2 = 2',
          explanation: 'Moyenne des abscisses et des ordonnées.',
          subResult: 'I(3 ; 2)',
        },
      ],
    },
    {
      title: 'Distance AB dans un repère orthonormé',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Dans un repère orthonormé (unité 1 cm), on place A(1 ; 2) et B(7 ; 10).\nCalcule la distance exacte AB en cm.',
      hint: 'AB = √((7−1)² + (10−2)²) = √(6² + 8²).',
      correctAnswer: '10',
      unit: 'cm',
      explanationFinal: 'AB = √(36 + 64) = √100 = 10 cm.',
      steps: [
        {
          title: 'Formule de la distance',
          mathExpression: 'AB = √((7 − 1)² + (10 − 2)²)\n= √(6² + 8²) = √(36 + 64) = √100 = 10 cm',
          explanation: 'Basée sur le théorème de Pythagore.',
          subResult: '10 cm',
        },
      ],
    },
    {
      title: 'Vérifier si un point appartient à une droite',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Une droite (D) a pour équation réduite y = −2x + 5.\nLe point P(−3 ; y_P) appartient à (D). Calcule son ordonnée y_P.',
      hint: 'Remplace x par −3 dans y = −2x + 5 : −2×(−3) + 5.',
      correctAnswer: '11',
      explanationFinal: 'y_P = −2×(−3) + 5 = 6 + 5 = 11.',
      steps: [
        {
          title: 'Substitution dans l’équation de (D)',
          mathExpression: 'y_P = −2 × (−3) + 5\n= 6 + 5 = 11',
          explanation: 'P(−3 ; 11) ∈ (D).',
          subResult: '11',
        },
      ],
    },
    {
      title: 'Coefficient directeur d’une droite passant par deux points',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Calcule le coefficient directeur (pente) m de la droite (AB) passant par A(2 ; −1) et B(6 ; 11).',
      hint: 'm = (y_B − y_A) ÷ (x_B − x_A) = (11 − (−1)) ÷ (6 − 2).',
      correctAnswer: '3',
      explanationFinal: 'm = 12 ÷ 4 = 3.',
      steps: [
        {
          title: 'Formule de la pente',
          mathExpression: 'm = (11 − (−1)) ÷ (6 − 2)\n= 12 ÷ 4 = 3',
          explanation: 'La droite monte de 3 unités quand x augmente de 1.',
          subResult: '3',
        },
      ],
    },
    {
      title: 'Condition de parallélisme de deux droites',
      difficulty: 2,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'La droite (D₁) a pour équation y = 4x − 7. La droite (D₂) est parallèle à (D₁) et passe par E(2 ; 5).\nDétermine l’ordonnée à l’origine p de l’équation y = 4x + p de (D₂).',
      hint: 'Parallèles ➔ même coefficient directeur m = 4. Comme E(2 ; 5) ∈ (D₂) : 5 = 4×2 + p.',
      correctAnswer: '-3',
      explanationFinal: '5 = 8 + p ➔ p = 5 − 8 = −3, donc (D₂) : y = 4x − 3.',
      steps: [
        {
          title: '1) Même pente',
          mathExpression: '(D₂) // (D₁) ⇒ m₂ = m₁ = 4',
          explanation: 'Deux droites parallèles ont le même coefficient directeur.',
        },
        {
          title: '2) Calcul de p',
          mathExpression: '5 = 4 × 2 + p\n5 = 8 + p ⇒ p = −3',
          explanation: 'Équation : y = 4x − 3.',
          subResult: '−3',
        },
      ],
    },
    {
      title: 'Condition d’orthogonalité de deux droites (m × m’ = −1)',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Dans un repère orthonormé, la droite (Δ) a pour équation y = (1/3)x + 2.\nUne droite (Δ’) est perpendiculaire à (Δ). Quel est le coefficient directeur m’ de (Δ’) ?',
      hint: 'Dans un repère orthonormé, (Δ) ⊥ (Δ’) ⇔ m × m’ = −1 ➔ (1/3) × m’ = −1.',
      correctAnswer: '-3',
      explanationFinal: '(1/3) × m’ = −1 donc m’ = −3.',
      steps: [
        {
          title: 'Produit des pentes = −1',
          mathExpression: 'm × m’ = −1\n(1/3) × m’ = −1 ⇒ m’ = −3',
          explanation: 'Propriété du programme gabonais de 3ème.',
          subResult: '−3',
        },
      ],
    },
    {
      title: 'Retrouver une extrémité depuis le milieu',
      difficulty: 3,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'M(3 ; −2) est le milieu du segment [EF]. On connaît E(−1 ; 4).\nCalcule l’ordonnée y_F du point F.',
      hint: '(y_E + y_F) ÷ 2 = y_M ➔ (4 + y_F) ÷ 2 = −2 ➔ 4 + y_F = −4.',
      correctAnswer: '-8',
      explanationFinal: 'y_F = 2 × (−2) − 4 = −8 (et x_F = 2×3 − (−1) = 7).',
      steps: [
        {
          title: 'Formule inversée du milieu',
          mathExpression: '(4 + y_F) ÷ 2 = −2\n4 + y_F = −4\ny_F = −8',
          explanation: 'Symétrique de E par rapport à M.',
          subResult: '−8',
        },
      ],
    },
    {
      title: 'Équation cartésienne ax + by + c = 0 vers équation réduite',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2022',
      bepcPoints: '4 pts',
      prompt:
        'Une droite a pour équation cartésienne : 6x + 2y − 10 = 0.\nMets-la sous forme réduite y = mx + p et donne la valeur du coefficient directeur m.',
      hint: 'Isole 2y : 2y = −6x + 10 ➔ divise par 2 : y = −3x + 5.',
      correctAnswer: '-3',
      explanationFinal: 'y = −3x + 5, donc m = −3 (et p = 5).',
      steps: [
        {
          title: 'Transformation algébrique',
          mathExpression: '2y = −6x + 10\ny = (−6x + 10) ÷ 2\ny = −3x + 5',
          explanation: 'Coefficient directeur m = −3.',
          subResult: '−3',
        },
      ],
    },
    {
      title: 'Synthèse : Nature d’un triangle par les coordonnées (Pythagore)',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      questionType: 'qcm',
      options: [
        'Rectangle en B (car AB² + BC² = AC² = 50)',
        'Équilatéral',
        'Rectangle en A',
        'Quelconque non rectangle',
      ],
      prompt:
        'Dans un repère orthonormé, on place A(1 ; 1), B(4 ; 5) et C(8 ; 2).\nOn calcule AB² = 25, BC² = 25 et AC² = 50.\nQuelle est la nature exacte du triangle ABC ?',
      hint: 'Compare AB², BC² et AC² : AB² = BC² (isocèle en B) ET AB² + BC² = 25 + 25 = 50 = AC² (rectangle en B) !',
      correctAnswer: 'Rectangle en B (car AB² + BC² = AC² = 50)',
      explanationFinal: 'AB = BC = 5 et AB² + BC² = 50 = AC² : ABC est rectangle et isocèle en B.',
      steps: [
        {
          title: '1) Distances au carré',
          mathExpression: 'AB² = 3² + 4² = 25\nBC² = 4² + (−3)² = 25\nAC² = 7² + 1² = 50',
          explanation: 'Trois longueurs vérifiées.',
        },
        {
          title: '2) Réciproque de Pythagore',
          mathExpression: 'AB² + BC² = 25 + 25 = 50 = AC²\n⇒ ABC est rectangle (et isocèle) en B',
          explanation: 'Exercice incontournable du BEPC.',
        },
      ],
    },
    {
      title: 'Synthèse : Médiatrice d’un segment [AB] dans un repère',
      difficulty: 4,
      originCountry: '🇲🇦 Examen 3ème Maroc',
      originYear: 'Session 2023',
      bepcPoints: '5 pts',
      prompt:
        'On donne A(1 ; 2) et B(5 ; 4). Le milieu de [AB] est I(3 ; 3) et la pente de (AB) est m = 0,5 (= 1/2).\nLa médiatrice (Δ) de [AB] passe par I et est perpendiculaire à (AB). Quelle est l’ordonnée à l’origine p de (Δ) (équation y = −2x + p) ?',
      hint: 'm_AB × m_Δ = −1 ➔ m_Δ = −2. Comme I(3 ; 3) ∈ (Δ) : 3 = −2×3 + p.',
      correctAnswer: '9',
      explanationFinal: '3 = −6 + p ➔ p = 9, donc la médiatrice a pour équation y = −2x + 9.',
      steps: [
        {
          title: '1) Pente de la médiatrice',
          mathExpression: '0,5 × m_Δ = −1 ⇒ m_Δ = −2',
          explanation: 'Perpendiculaire à (AB).',
        },
        {
          title: '2) Passage par le milieu I(3 ; 3)',
          mathExpression: '3 = (−2) × 3 + p\n3 = −6 + p ⇒ p = 9',
          explanation: 'Équation : y = −2x + 9.',
          subResult: 'p = 9',
        },
      ],
    },
  ]),

  'math3-pyramides-cones': buildBepcChapterList('math3-pyramides-cones', [
    {
      title: 'Volume d’une pyramide à base carrée',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      prompt:
        'Une pyramide régulière a une base carrée de côté c = 6 cm et une hauteur h = 10 cm.\nCalcule son volume V en cm³.',
      hint: 'V = (1/3) × Aire_base × h = (36 × 10) ÷ 3.',
      correctAnswer: '120',
      unit: 'cm³',
      explanationFinal: 'V = (6² × 10) ÷ 3 = 360 ÷ 3 = 120 cm³.',
      steps: [
        {
          title: 'Formule du volume de pyramide',
          mathExpression: 'A_base = 6 × 6 = 36 cm²\nV = (A_base × h) ÷ 3 = (36 × 10) ÷ 3 = 120 cm³',
          explanation: 'Ne jamais oublier le ÷ 3 !',
          subResult: '120 cm³',
        },
      ],
    },
    {
      title: 'Volume d’un cône de révolution (avec π = 3,14)',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Un cône de révolution a un rayon R = 5 cm et une hauteur h = 12 cm.\nEn prenant π = 3,14, calcule son volume V en cm³.',
      hint: 'V = (1/3) × π × R² × h = (3,14 × 25 × 12) ÷ 3 = 3,14 × 25 × 4 = 3,14 × 100.',
      correctAnswer: '314',
      unit: 'cm³',
      explanationFinal: 'V = (3,14 × 25 × 12) ÷ 3 = 3,14 × 100 = 314 cm³.',
      steps: [
        {
          title: 'Calcul debout avec simplification par 3',
          mathExpression: 'V = (1/3) × π × 5² × 12\n= 3,14 × 25 × (12 ÷ 3)\n= 3,14 × 100 = 314 cm³',
          explanation: 'Simplifier 12 ÷ 3 = 4 rend le calcul mental immédiat.',
          subResult: '314 cm³',
        },
      ],
    },
    {
      title: 'Calcul de la génératrice g d’un cône par Pythagore',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Un cône de révolution a pour rayon R = 6 cm et pour hauteur h = 8 cm.\nCalcule la longueur de sa génératrice g (segment du sommet au bord du disque) en cm.',
      hint: 'Dans le triangle rectangle formé par la hauteur, le rayon et la génératrice : g² = R² + h².',
      correctAnswer: '10',
      unit: 'cm',
      explanationFinal: 'g² = 6² + 8² = 36 + 64 = 100, donc g = 10 cm.',
      steps: [
        {
          title: 'Triangle rectangle (O, S, A)',
          mathExpression: 'g² = R² + h² = 6² + 8² = 36 + 64 = 100\ng = √100 = 10 cm',
          explanation: 'La hauteur est perpendiculaire au rayon de la base.',
          subResult: '10 cm',
        },
      ],
    },
    {
      title: 'Retrouver la hauteur h connaissant le volume d’une pyramide',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Une pyramide à base rectangulaire de longueur 8 cm et largeur 5 cm a un volume de 160 cm³.\nCalcule sa hauteur h en cm.',
      hint: 'A_base = 40 cm². V = (40 × h) ÷ 3 = 160 ➔ 40h = 480.',
      correctAnswer: '12',
      unit: 'cm',
      explanationFinal: 'h = (3 × 160) ÷ (8 × 5) = 480 ÷ 40 = 12 cm.',
      steps: [
        {
          title: 'Isolation de h',
          mathExpression: 'h = (3 × V) ÷ A_base\n= (3 × 160) ÷ 40 = 480 ÷ 40 = 12 cm',
          explanation: 'Ne pas oublier de multiplier le volume par 3.',
          subResult: '12 cm',
        },
      ],
    },
    {
      title: 'Aire latérale d’un cône de révolution (πRg)',
      difficulty: 2,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Un chapeau conique a un rayon de base R = 5 cm et une génératrice g = 14 cm.\nEn prenant π = 3,14, calcule son aire latérale A_lat = π × R × g en cm².',
      hint: '3,14 × 5 × 14 = 3,14 × 70.',
      correctAnswer: '219.8',
      unit: 'cm²',
      explanationFinal: 'A_lat = 3,14 × 5 × 14 = 3,14 × 70 = 219,8 cm².',
      steps: [
        {
          title: 'Formule de l’aire latérale du cône',
          mathExpression: 'A_lat = π × R × g\n= 3,14 × 5 × 14\n= 3,14 × 70 = 219,8 cm²',
          explanation: 'Formule du secteur circulaire.',
          subResult: '219,8 cm²',
        },
      ],
    },
    {
      title: 'Angle du secteur circulaire au patron d’un cône',
      difficulty: 3,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Pour construire le patron d’un cône de rayon R = 3 cm et de génératrice g = 12 cm, on trace un secteur de disque de rayon g = 12 cm.\nCalcule la mesure en degrés de l’angle α de ce secteur.',
      hint: 'α = 360° × (R ÷ g) = 360° × (3 ÷ 12) = 360° ÷ 4.',
      correctAnswer: '90',
      unit: '°',
      explanationFinal: 'α = 360° × (3 / 12) = 360° ÷ 4 = 90° (un quart de disque).',
      steps: [
        {
          title: 'Proportionnalité des arcs',
          mathExpression: 'Longueur arc = 2πR = 2πg × (α / 360)\nα = 360° × (R / g) = 360° × (3 / 12) = 90°',
          explanation: 'Le périmètre de la base s’enroule exactement sur l’arc.',
          subResult: '90°',
        },
      ],
    },
    {
      title: 'Aire totale d’une pyramide régulière (Base + 4 faces)',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Une pyramide régulière SABCD a une base carrée ABCD de côté 10 cm. Chaque face triangulaire latérale a une apothème (hauteur de la face) de 13 cm.\nCalcule l’aire totale (base + 4 faces) de cette pyramide en cm².',
      hint: 'Base = 10² = 100 cm². 1 face = (10 × 13) ÷ 2 = 65 cm². Total = 100 + 4 × 65.',
      correctAnswer: '360',
      unit: 'cm²',
      explanationFinal: '100 + 4 × 65 = 100 + 260 = 360 cm².',
      steps: [
        {
          title: '1) Aire de la base et d’une face',
          mathExpression: 'A_base = 10 × 10 = 100 cm²\nA_1face = (10 × 13) ÷ 2 = 65 cm²',
          explanation: 'Les 4 faces sont des triangles isocèles identiques.',
        },
        {
          title: '2) Aire totale',
          mathExpression: 'A_tot = 100 + 4 × 65 = 100 + 260 = 360 cm²',
          explanation: 'Surface extérieure complète.',
          subResult: '360 cm²',
        },
      ],
    },
    {
      title: 'Capacité d’un verre conique en centilitres (1 L = 1 000 cm³)',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Un entonnoir conique a un diamètre D = 12 cm et une hauteur h = 15 cm. On prend π = 3.\nCalcule le volume de cet entonnoir en cm³.',
      hint: 'Attention au piège : diamètre = 12 cm donc RAYON R = 6 cm ! V = (1/3) × 3 × 6² × 15.',
      correctAnswer: '540',
      unit: 'cm³',
      explanationFinal: 'R = 6 cm, V = (1/3) × 3 × 36 × 15 = 36 × 15 = 540 cm³ (soit 54 cL).',
      steps: [
        {
          title: '1) Conversion Diamètre ➔ Rayon',
          mathExpression: 'R = D ÷ 2 = 12 ÷ 2 = 6 cm',
          explanation: 'Piège numéro 1 du BEPC.',
        },
        {
          title: '2) Calcul du volume',
          mathExpression: 'V = (1/3) × 3 × 6² × 15 = 36 × 15 = 540 cm³',
          explanation: '(1/3) × 3 = 1.',
          subResult: '540 cm³',
        },
      ],
    },
    {
      title: 'Synthèse : Silo composé d’un cylindre surmonté d’un cône',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      prompt:
        'Un grenier agricole est formé d’un cylindre de rayon R = 2 m et de hauteur h₁ = 5 m, surmonté d’un toit conique de même rayon R = 2 m et de hauteur h₂ = 3 m.\nEn prenant π = 3,14, calcule le volume total V du grenier en m³.',
      hint: 'V_cyl = π × 4 × 5 = 20π ; V_cône = (1/3) × π × 4 × 3 = 4π. Total = 24 × 3,14.',
      correctAnswer: '75.36',
      unit: 'm³',
      explanationFinal: 'V = 20π + 4π = 24π = 24 × 3,14 = 75,36 m³.',
      steps: [
        {
          title: '1) Volume cylindre + cône en fonction de π',
          mathExpression: 'V_cyl = π × 2² × 5 = 20π\nV_cône = (1/3) × π × 2² × 3 = 4π\nV_total = 24π',
          explanation: 'Factoriser par π évite les erreurs d’arrondi intermédiaires.',
        },
        {
          title: '2) Valeur approchée',
          mathExpression: 'V_total = 24 × 3,14 = 75,36 m³',
          explanation: 'Volume exact du silo.',
          subResult: '75,36 m³',
        },
      ],
    },
    {
      title: 'Synthèse : Hauteur d’une pyramide connaissant l’arête latérale',
      difficulty: 4,
      originCountry: '🇫🇷 DNB Antilles-Guyane',
      originYear: 'Session 2022',
      bepcPoints: '5 pts',
      prompt:
        'Une pyramide régulière SABCD a une base carrée de diagonale AC = 12 cm (donc demi-diagonale OA = 6 cm) et une arête latérale SA = 10 cm.\nCalcule la hauteur SO de cette pyramide, puis son volume V sachant que l’aire du carré ABCD vaut (AC²)/2 = 72 cm².',
      hint: 'SOA est rectangle en O : SO² = SA² − OA² = 100 − 36 = 64 ➔ SO = 8 cm. Puis V = (72 × 8) ÷ 3.',
      correctAnswer: '192',
      unit: 'cm³',
      explanationFinal: 'SO = 8 cm, et V = (72 × 8) ÷ 3 = 24 × 8 = 192 cm³.',
      steps: [
        {
          title: '1) Hauteur SO par Pythagore',
          mathExpression: 'OA = 12 ÷ 2 = 6 cm\nSO² = SA² − OA² = 10² − 6² = 64\nSO = 8 cm',
          explanation: 'Triangle rectangle en O au centre du carré.',
        },
        {
          title: '2) Volume de la pyramide',
          mathExpression: 'A_ABCD = 72 cm²\nV = (72 × 8) ÷ 3 = 24 × 8 = 192 cm³',
          explanation: 'Double étape géométrie plane + espace.',
          subResult: '192 cm³',
        },
      ],
    },
  ]),

  'math3-sections-agrandissement': buildBepcChapterList('math3-sections-agrandissement', [
    {
      title: 'Rapport de réduction k d’une pyramide',
      difficulty: 1,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2022',
      bepcPoints: '2 pts',
      prompt:
        'Une pyramide de hauteur H = 15 cm est coupée par un plan parallèle à sa base à une distance h’ = 9 cm du sommet.\nCalcule le rapport de réduction k sous forme décimale.',
      hint: 'k = h’ ÷ H = 9 ÷ 15.',
      correctAnswer: '0.6',
      explanationFinal: 'k = 9 / 15 = 3 / 5 = 0,6.',
      steps: [
        {
          title: 'Rapport des longueurs',
          mathExpression: 'k = SO’ ÷ SO = 9 ÷ 15 = 0,6',
          explanation: 'k < 1 car c’est une réduction (à partir du sommet).',
          subResult: '0,6',
        },
      ],
    },
    {
      title: 'Effet d’un agrandissement sur les aires (k²)',
      difficulty: 1,
      originCountry: '🇨🇲 BEPC Cameroun',
      originYear: 'Session 2023',
      bepcPoints: '2 pts',
      prompt:
        'Un polygone d’aire 18 cm² subit un agrandissement de rapport k = 3.\nCalcule la nouvelle aire en cm².',
      hint: 'Lorsque les longueurs sont multipliées par k, les aires sont multipliées par k².',
      correctAnswer: '162',
      unit: 'cm²',
      explanationFinal: 'A’ = k² × A = 3² × 18 = 9 × 18 = 162 cm².',
      steps: [
        {
          title: 'Loi des aires',
          mathExpression: 'A’ = k² × A\n= 3² × 18 = 9 × 18 = 162 cm²',
          explanation: 'Piège à éviter : ne pas multiplier par 3 mais par 3² = 9 !',
          subResult: '162 cm²',
        },
      ],
    },
    {
      title: 'Effet d’une réduction sur les volumes (k³)',
      difficulty: 2,
      originCountry: '🇨🇮 BEPC Côte d’Ivoire',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'Un grand cône a un volume de 640 cm³. On le coupe à mi-hauteur (rapport k = 0,5) parallèlement à sa base.\nCalcule le volume V’ du petit cône obtenu au sommet en cm³.',
      hint: 'V’ = k³ × V = (0,5)³ × 640 = (1/8) × 640.',
      correctAnswer: '80',
      unit: 'cm³',
      explanationFinal: 'V’ = 0,125 × 640 = 640 ÷ 8 = 80 cm³.',
      steps: [
        {
          title: 'Loi des volumes',
          mathExpression: 'k = 1/2 ⇒ k³ = (1/2)³ = 1/8 = 0,125\nV’ = (1/8) × 640 = 80 cm³',
          explanation: 'Couper à mi-hauteur divise le volume par 8 (et non par 2) !',
          subResult: '80 cm³',
        },
      ],
    },
    {
      title: 'Retrouver k depuis le rapport de deux aires',
      difficulty: 2,
      originCountry: '🇸🇳 BFEM Sénégal',
      originYear: 'Session 2023',
      bepcPoints: '3 pts',
      prompt:
        'La base d’un cône a une aire de 100 cm². La section obtenue par un plan parallèle à la base a une aire de 36 cm².\nCalcule le rapport de réduction k.',
      hint: 'k² = 36 ÷ 100 = 0,36 ➔ k = √0,36.',
      correctAnswer: '0.6',
      explanationFinal: 'k² = 36/100 donc k = 6/10 = 0,6.',
      steps: [
        {
          title: 'Extraction de k depuis k²',
          mathExpression: 'k² = A_section ÷ A_base = 36 ÷ 100 = 0,36\nk = √0,36 = 0,6',
          explanation: 'k > 0.',
          subResult: '0,6',
        },
      ],
    },
    {
      title: 'Section d’une sphère par un plan (Théorème de Pythagore)',
      difficulty: 2,
      originCountry: '🇫🇷 DNB Métropole',
      originYear: 'Session 2022',
      bepcPoints: '3 pts',
      prompt:
        'Une sphère de centre O et de rayon R = 10 cm est coupée par un plan situé à une distance OH = 6 cm du centre O.\nCalcule le rayon r du cercle de section en cm.',
      hint: 'O, H et un point M de la section forment un triangle rectangle en H avec OM = R = 10 cm : r² = R² − OH².',
      correctAnswer: '8',
      unit: 'cm',
      explanationFinal: 'r² = 10² − 6² = 64 ➔ r = 8 cm.',
      steps: [
        {
          title: 'Pythagore dans OHM rectangle en H',
          mathExpression: 'r² = R² − OH² = 10² − 6² = 100 − 36 = 64\nr = √64 = 8 cm',
          explanation: 'La section d’une sphère est un disque.',
          subResult: '8 cm',
        },
      ],
    },
    {
      title: 'Volume d’un tronc de pyramide (Grand − Petit)',
      difficulty: 3,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Une pyramide a un volume total de 270 cm³. On la sectionne parallèlement à sa base avec un rapport k = 1/3.\nCalcule le volume V_tronc du tronc de pyramide restant en cm³.',
      hint: 'Petit cône/pyramide V’ = (1/3)³ × 270 = (1/27) × 270 = 10 cm³. Tronc = 270 − 10.',
      correctAnswer: '260',
      unit: 'cm³',
      explanationFinal: 'V’ = 270 ÷ 27 = 10 cm³, donc V_tronc = 270 − 10 = 260 cm³.',
      steps: [
        {
          title: '1) Volume de la petite pyramide enlevée',
          mathExpression: 'V’ = (1/3)³ × 270 = (1/27) × 270 = 10 cm³',
          explanation: 'Facteur cubique (1/3)³ = 1/27.',
        },
        {
          title: '2) Volume du tronc',
          mathExpression: 'V_tronc = V_total − V’ = 270 − 10 = 260 cm³',
          explanation: 'Méthode standard du BEPC.',
          subResult: '260 cm³',
        },
      ],
    },
    {
      title: 'Distance à la base vs distance au sommet (Piège BEPC)',
      difficulty: 3,
      originCountry: '🇹🇬 BEPC Togo',
      originYear: 'Session 2023',
      bepcPoints: '4 pts',
      prompt:
        'Un cône de hauteur H = 20 cm et de rayon de base R = 10 cm est coupé par un plan parallèle à la base situé à 5 cm DE LA BASE (et non du sommet).\nCalcule le rayon r de la section obtenue en cm.',
      hint: 'Attention : la distance au SOMMET est h’ = 20 − 5 = 15 cm ! Donc k = 15 ÷ 20 = 0,75 et r = 0,75 × 10.',
      correctAnswer: '7.5',
      unit: 'cm',
      explanationFinal: 'Distance au sommet = 20 − 5 = 15 cm ; k = 15/20 = 0,75 ; r = 0,75 × 10 = 7,5 cm.',
      steps: [
        {
          title: '1) Hauteur du petit cône depuis le sommet',
          mathExpression: 'h’ = H − 5 = 20 − 5 = 15 cm\nk = h’ ÷ H = 15 ÷ 20 = 0,75',
          explanation: 'Thalès s’applique toujours à partir du sommet !',
        },
        {
          title: '2) Rayon de la section',
          mathExpression: 'r = k × R = 0,75 × 10 = 7,5 cm',
          explanation: 'Piège évité avec succès.',
          subResult: '7,5 cm',
        },
      ],
    },
    {
      title: 'Maquette architecturale à l’échelle 1/100',
      difficulty: 3,
      originCountry: '🇧🇯 BEPC Bénin',
      originYear: 'Session 2022',
      bepcPoints: '4 pts',
      prompt:
        'Une salle de classe réelle a une aire au sol de 48 m² (= 480 000 cm²).\nSur une maquette à l’échelle k = 1/100, quelle est l’aire du sol de la classe en cm² ?',
      hint: 'A_maquette = (1/100)² × 480 000 = 480 000 ÷ 10 000.',
      correctAnswer: '48',
      unit: 'cm²',
      explanationFinal: '(1/100)² = 1/10 000, donc A_maquette = 480 000 ÷ 10 000 = 48 cm².',
      steps: [
        {
          title: 'Conversion & facteur k²',
          mathExpression: 'A_réelle = 48 m² = 480 000 cm²\nk² = (1/100)² = 1/10 000\nA_maquette = 480 000 ÷ 10 000 = 48 cm²',
          explanation: '1 m² = 10 000 cm².',
          subResult: '48 cm²',
        },
      ],
    },
    {
      title: 'Synthèse : Retrouver k depuis les volumes (k³ = 8/27)',
      difficulty: 4,
      originCountry: '🇬🇦 BEPC Gabon',
      originYear: 'Session 2024',
      bepcPoints: '5 pts',
      prompt:
        'Un grand récipient conique a un volume de 540 cm³ et une hauteur de 18 cm. On y verse de l’eau jusqu’à remplir un petit cône de volume 160 cm³ (pointe en bas).\nCalcule la hauteur h’ d’eau dans le verre en cm.',
      hint: 'k³ = 160 / 540 = 8 / 27 ➔ k = 2 / 3 (car 2³=8 et 3³=27). Puis h’ = (2/3) × 18.',
      correctAnswer: '12',
      unit: 'cm',
      explanationFinal: 'k³ = 8/27 ⇒ k = 2/3, donc h’ = (2/3) × 18 = 12 cm.',
      steps: [
        {
          title: '1) Rapport des volumes k³',
          mathExpression: 'k³ = 160 / 540 = 16 / 54 = 8 / 27\nComme 8 = 2³ et 27 = 3³, k = 2/3',
          explanation: 'Extraction de la racine cubique exacte.',
        },
        {
          title: '2) Hauteur d’eau',
          mathExpression: 'h’ = k × H = (2/3) × 18 = 12 cm',
          explanation: 'Sujet classique de mention Très Bien au BEPC.',
          subResult: '12 cm',
        },
      ],
    },
    {
      title: 'Synthèse : Section d’un parallélépipède / prisme et volume restant',
      difficulty: 4,
      originCountry: '🇲🇦 Examen 3ème Maroc',
      originYear: 'Session 2023',
      bepcPoints: '5 pts',
      prompt:
        'Une bougie conique de hauteur H = 24 cm et de rayon R = 6 cm (π = 3) se consume jusqu’à ce que son rayon au sommet de la partie restante devienne r = 4 cm.\nCalcule le volume V_restant (en cm³) de cire restante (tronc de cône ou cône ? ici la pointe supérieure a fondu, laissant un tronc de cône de grande base R=6 et petite base r=4).',
      hint: 'Cône entier V = (1/3)×3×36×24 = 864 cm³. Partie fondue : k = 4/6 = 2/3 ➔ V_fondu = (8/27)×864 = 256 cm³. Restant = 864 − 256.',
      correctAnswer: '608',
      unit: 'cm³',
      explanationFinal: 'V_total = 864 cm³ et V_fondu = (8/27) × 864 = 256 cm³, donc il reste 864 − 256 = 608 cm³.',
      steps: [
        {
          title: '1) Volume total initial',
          mathExpression: 'V_total = (1/3) × 3 × 6² × 24 = 36 × 24 = 864 cm³',
          explanation: 'Cône complet avant fonte.',
        },
        {
          title: '2) Partie supérieure fondue (k = 4/6 = 2/3)',
          mathExpression: 'k³ = (2/3)³ = 8/27\nV_fondu = (8/27) × 864 = 8 × 32 = 256 cm³',
          explanation: '864 ÷ 27 = 32.',
        },
        {
          title: '3) Volume restant',
          mathExpression: 'V_restant = 864 − 256 = 608 cm³',
          explanation: 'Soustraction directe.',
          subResult: '608 cm³',
        },
      ],
    },
  ]),
};
