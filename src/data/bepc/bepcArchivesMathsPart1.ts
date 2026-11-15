import { BepcArchivePaper } from '../../types/math';
import { buildArchivePapers } from './bepcArchiveHelpers';

export const BEPC_ARCHIVES_MATHS_1990_2008: BepcArchivePaper[] = buildArchivePapers(
  'maths',
  [
    {
      year: 1990,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 1990 : Radicaux · Systèmes en F CFA · Thalès & Pythagore',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Calcul avec radicaux',
          points: 6,
          difficulty: 2,
          prompt:
            'On pose A = 2√45 − √80 + 3√20.\nÉcris A sous la forme k√5 et donne la valeur entière de k.',
          hint: '√45 = 3√5 ; √80 = 4√5 ; √20 = 2√5. Calcule 6 − 4 + 6.',
          correctAnswer: '8',
          explanationFinal: 'A = 6√5 − 4√5 + 6√5 = 8√5 (donc k = 8).',
          steps: [
            { title: 'Simplification de chaque radical', mathExpression: '2√45 = 2×3√5 = 6√5\n√80 = 4√5\n3√20 = 3×2√5 = 6√5', explanation: 'Décomposition autour de 5.' },
            { title: 'Réduction', mathExpression: 'A = (6 − 4 + 6)√5 = 8√5', explanation: 'k = 8.', subResult: '8√5' },
          ],
        },
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 2',
          title: 'Achats scolaires en Francs CFA',
          points: 6,
          difficulty: 2,
          prompt:
            'En 1990, 4 cahiers et 3 crayons coûtent 950 F CFA ; 2 cahiers et 5 crayons coûtent 650 F CFA.\nCalcule le prix d’un cahier (en F CFA).',
          hint: 'Multiplie la 2e équation par 2 : 4x + 10y = 1 300. Soustrais la 1re : 7y = 350 ➔ y = 50 F, puis 4x = 950 − 150 = 800.',
          correctAnswer: '200',
          unit: 'F CFA',
          explanationFinal: 'Un crayon coûte 50 F CFA et un cahier coûte 200 F CFA.',
          steps: [
            { title: '1) Système 2×2', mathExpression: '4x + 3y = 950\n2x + 5y = 650 ⇒ 4x + 10y = 1 300', explanation: 'x = cahier, y = crayon.' },
            { title: '2) Résolution', mathExpression: '7y = 350 ⇒ y = 50 F\n4x = 950 − 150 = 800 ⇒ x = 200 F CFA', explanation: 'Vérif : 2×200 + 5×50 = 650 F.', subResult: '200 F CFA' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Triangle rectangle et droite parallèle',
          points: 8,
          difficulty: 3,
          prompt:
            'ABC est rectangle en A avec AB = 9 cm et AC = 12 cm. M ∈ [AB] tel que AM = 6 cm.\nLa parallèle à (BC) passant par M coupe [AC] en N.\nCalcule la longueur MN en cm.',
          hint: 'BC² = 9² + 12² = 225 ➔ BC = 15 cm. Par Thalès : MN / BC = AM / AB = 6 / 9.',
          correctAnswer: '10',
          unit: 'cm',
          explanationFinal: 'BC = 15 cm puis MN = (6 × 15) ÷ 9 = 10 cm.',
          steps: [
            { title: '1) Pythagore pour BC', mathExpression: 'BC² = 9² + 12² = 81 + 144 = 225\nBC = 15 cm', explanation: 'Triplet 9–12–15.' },
            { title: '2) Thalès pour MN', mathExpression: 'MN / 15 = 6 / 9 ⇒ MN = 90 ÷ 9 = 10 cm', explanation: 'Rapport 2/3.', subResult: '10 cm' },
          ],
        },
      ],
    },
    {
      year: 1991,
      countryId: 'france',
      themeSummary: 'Brevet France 1991 : Factorisation · Trigonométrie · Volume pyramide',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Factorisation et équation produit',
          points: 6,
          difficulty: 2,
          prompt:
            'Soit F = (3x + 2)² − 25.\nAprès factorisation F = (3x − 3)(3x + 7), quelle est la solution POSITIVE de F = 0 ?',
          hint: '3x − 3 = 0 ➔ x = 1 (l’autre −7/3 est négative).',
          correctAnswer: '1',
          explanationFinal: 'F = 3(x − 1)(3x + 7) = 0 donne x = 1 ou x = −7/3.',
          steps: [
            { title: 'Identité a² − b²', mathExpression: 'F = (3x + 2 − 5)(3x + 2 + 5) = (3x − 3)(3x + 7)\n3x − 3 = 0 ⇒ x = 1', explanation: 'Seule solution positive.', subResult: '1' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Exercice 2',
          title: 'Calcul de hauteur par tangente',
          points: 6,
          difficulty: 2,
          prompt:
            'Un immeuble projette au sol une ombre horizontale de 30 m lorsque les rayons font un angle de 45° avec le sol.\nCalcule la hauteur H de l’immeuble en mètres (tan 45° = 1).',
          hint: 'H = 30 × tan(45°) = 30 × 1.',
          correctAnswer: '30',
          unit: 'm',
          explanationFinal: 'H = 30 m.',
          steps: [
            { title: 'Tangente de 45°', mathExpression: 'tan(45°) = H ÷ 30 ⇒ H = 30 × 1 = 30 m', explanation: 'Triangle rectangle isocèle.', subResult: '30 m' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Volume d’une pyramide du Louvre',
          points: 8,
          difficulty: 3,
          prompt:
            'Une maquette de pyramide à base carrée de côté 18 cm a une hauteur h = 15 cm.\nCalcule son volume V en cm³.',
          hint: 'V = (18² × 15) ÷ 3 = 324 × 5.',
          correctAnswer: '1620',
          unit: 'cm³',
          explanationFinal: 'V = (324 × 15) ÷ 3 = 324 × 5 = 1 620 cm³.',
          steps: [
            { title: 'Calcul du volume', mathExpression: 'A_base = 18 × 18 = 324 cm²\nV = 324 × (15 ÷ 3) = 324 × 5 = 1 620 cm³', explanation: 'Formule V = B × h ÷ 3.', subResult: '1 620 cm³' },
          ],
        },
      ],
    },
    {
      year: 1992,
      countryId: 'senegal',
      themeSummary: 'BFEM Sénégal 1992 : Application affine · Statistiques · Vecteurs',
      parts: [
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 1',
          title: 'Déterminer f(x) = ax + b',
          points: 6,
          difficulty: 2,
          prompt:
            'f est une application affine telle que f(1) = 4 et f(5) = 16.\nCalcule la valeur de f(10).',
          hint: 'a = (16 − 4) ÷ (5 − 1) = 3, b = 4 − 3 = 1, donc f(x) = 3x + 1.',
          correctAnswer: '31',
          explanationFinal: 'f(x) = 3x + 1 donc f(10) = 30 + 1 = 31.',
          steps: [
            { title: '1) Coefficients a et b', mathExpression: 'a = 12 ÷ 4 = 3 ; b = 4 − 3 = 1\nf(x) = 3x + 1', explanation: 'Formule de la fonction.' },
            { title: '2) Image de 10', mathExpression: 'f(10) = 3 × 10 + 1 = 31', explanation: 'Calcul direct.', subResult: '31' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 2',
          title: 'Moyenne des notes de maths',
          points: 6,
          difficulty: 2,
          prompt:
            'Notes obtenues par 20 élèves : cinq 8 ; dix 12 ; cinq 16.\nCalcule la moyenne exacte de la classe.',
          hint: '(5×8 + 10×12 + 5×16) ÷ 20 = (40 + 120 + 80) ÷ 20.',
          correctAnswer: '12',
          explanationFinal: '240 ÷ 20 = 12.',
          steps: [
            { title: 'Moyenne pondérée', mathExpression: 'm = (40 + 120 + 80) ÷ 20 = 240 ÷ 20 = 12', explanation: 'Distribution symétrique autour de 12.', subResult: '12' },
          ],
        },
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Problème',
          title: 'Distance et milieu dans un repère',
          points: 8,
          difficulty: 3,
          prompt:
            'Dans un repère orthonormé, on place A(−1 ; 2) et B(7 ; 8).\nCalcule la longueur du rayon R = AB ÷ 2 du cercle de diamètre [AB].',
          hint: 'AB = √((7−(−1))² + (8−2)²) = √(8² + 6²) = √100 = 10. Rayon = 10 ÷ 2.',
          correctAnswer: '5',
          explanationFinal: 'AB = 10 donc le rayon vaut R = 5.',
          steps: [
            { title: '1) Diamètre AB', mathExpression: 'AB = √(8² + 6²) = √100 = 10', explanation: 'Triplet 6–8–10.' },
            { title: '2) Rayon', mathExpression: 'R = 10 ÷ 2 = 5', explanation: 'Centre du cercle I(3 ; 5).', subResult: '5' },
          ],
        },
      ],
    },
    {
      year: 1993,
      countryId: 'cameroun',
      themeSummary: 'BEPC Cameroun 1993 : Inéquations · Angles inscrits · Cône',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Inéquation et plus petit entier',
          points: 6,
          difficulty: 2,
          prompt:
            'Résous dans ℝ : 4x − 5 ≥ 2x + 7.\nQuel est le plus petit entier vérifiant cette inégalité ?',
          hint: '2x ≥ 12 ➔ x ≥ 6.',
          correctAnswer: '6',
          explanationFinal: 'x ≥ 6 donc le plus petit entier solution est 6.',
          steps: [
            { title: 'Résolution', mathExpression: '4x − 2x ≥ 7 + 5 ⇒ 2x ≥ 12 ⇒ x ≥ 6', explanation: 'S = [6 ; +∞[.', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Exercice 2',
          title: 'Angle inscrit dans un cercle',
          points: 6,
          difficulty: 2,
          prompt:
            'Sur un cercle de centre O, l’angle au centre A Ô B mesure 110°. Calcule la mesure de l’angle inscrit A M̂ B (avec M sur le grand arc AB).',
          hint: 'Moitié de l’angle au centre : 110° ÷ 2.',
          correctAnswer: '55',
          unit: '°',
          explanationFinal: 'A M̂ B = 110° ÷ 2 = 55°.',
          steps: [
            { title: 'Propriété angle inscrit', mathExpression: 'A M̂ B = ½ A Ô B = 110° ÷ 2 = 55°', explanation: 'Même arc AB.', subResult: '55°' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Aire latérale d’un cône de révolution',
          points: 8,
          difficulty: 3,
          prompt:
            'Un cône a pour rayon R = 8 cm et pour hauteur h = 6 cm.\n1) Calcule sa génératrice g = √(R² + h²).\n2) Calcule son aire latérale A = π × R × g en prenant π = 3,14 (en cm²).',
          hint: 'g = √(64 + 36) = 10 cm. A = 3,14 × 8 × 10 = 3,14 × 80.',
          correctAnswer: '251.2',
          unit: 'cm²',
          explanationFinal: 'g = 10 cm et A = 3,14 × 80 = 251,2 cm².',
          steps: [
            { title: '1) Génératrice g', mathExpression: 'g = √(8² + 6²) = √100 = 10 cm', explanation: 'Pythagore.' },
            { title: '2) Aire latérale', mathExpression: 'A = 3,14 × 8 × 10 = 251,2 cm²', explanation: 'Formule π R g.', subResult: '251,2 cm²' },
          ],
        },
      ],
    },
    {
      year: 1994,
      countryId: 'benin',
      themeSummary: 'BEPC Bénin 1994 : Expression conjuguée · Probabilités · Repère orthogonal',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Inverse d’une somme avec radical',
          points: 6,
          difficulty: 3,
          prompt:
            'Soit X = (√6 + √2) × (√6 − √2).\nCalcule la valeur entière exacte de X.',
          hint: '(a + b)(a − b) = 6 − 2.',
          correctAnswer: '4',
          explanationFinal: 'X = (√6)² − (√2)² = 6 − 2 = 4.',
          steps: [
            { title: 'Quantités conjuguées', mathExpression: 'X = 6 − 2 = 4', explanation: 'Identité remarquable.', subResult: '4' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Tirage d’une carte dans un jeu de 32',
          points: 6,
          difficulty: 2,
          prompt:
            'On tire au hasard 1 carte d’un jeu de 32 cartes (qui contient 4 Rois et 4 Dames).\nCalcule en décimal la probabilité de tirer une figure (Roi ou Dame, soit 8 cartes sur 32).',
          hint: '8 ÷ 32 = 1 ÷ 4.',
          correctAnswer: '0.25',
          explanationFinal: 'p = 8 / 32 = 1 / 4 = 0,25.',
          steps: [
            { title: 'Calcul de probabilité', mathExpression: 'p = (4 + 4) ÷ 32 = 8 ÷ 32 = 0,25', explanation: '25 % de chance.', subResult: '0,25' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Problème',
          title: 'Équation de droite perpendiculaire',
          points: 8,
          difficulty: 4,
          prompt:
            'Une droite (D₁) a pour équation y = 2x − 1. Une droite (D₂), perpendiculaire à (D₁), passe par A(4 ; 3).\nDétermine l’ordonnée à l’origine p de (D₂) (y = −0,5x + p).',
          hint: 'Pente de (D₂) = −1/2 = −0,5. 3 = −0,5 × 4 + p ➔ 3 = −2 + p.',
          correctAnswer: '5',
          explanationFinal: 'p = 3 + 2 = 5 ➔ (D₂) : y = −0,5x + 5.',
          steps: [
            { title: '1) Coefficient directeur orthogonal', mathExpression: '2 × m’ = −1 ⇒ m’ = −0,5', explanation: 'Repère orthonormé.' },
            { title: '2) Ordonnée à l’origine', mathExpression: '3 = −0,5 × 4 + p ⇒ 3 = −2 + p ⇒ p = 5', explanation: 'Passe par (0 ; 5).', subResult: '5' },
          ],
        },
      ],
    },
    {
      year: 1995,
      countryId: 'togo',
      themeSummary: 'BEPC Togo 1995 : Fractions rationnelles · Section cône · Trigonométrie',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Simplification d’une fraction rationnelle',
          points: 6,
          difficulty: 3,
          prompt:
            'Soit H(x) = (x² − 9) ÷ (x − 3) pour x ≠ 3.\nCalcule H(17).',
          hint: 'H(x) = (x − 3)(x + 3) ÷ (x − 3) = x + 3. Puis 17 + 3.',
          correctAnswer: '20',
          explanationFinal: 'H(x) = x + 3 donc H(17) = 17 + 3 = 20.',
          steps: [
            { title: 'Factorisation et simplification', mathExpression: 'H(x) = (x − 3)(x + 3) ÷ (x − 3) = x + 3\nH(17) = 17 + 3 = 20', explanation: 'Simplification par (x−3).', subResult: '20' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Exercice 2',
          title: 'Cosinus et relation fondamentale',
          points: 6,
          difficulty: 2,
          prompt:
            'Pour un angle aigu x, sin(x) = 0,6. Calcule cos(x).',
          hint: 'cos²(x) = 1 − 0,36 = 0,64.',
          correctAnswer: '0.8',
          explanationFinal: 'cos(x) = √0,64 = 0,8.',
          steps: [
            { title: 'Relation cos² + sin² = 1', mathExpression: 'cos²(x) = 1 − 0,36 = 0,64 ⇒ cos(x) = 0,8', explanation: 'Angle aigu donc positif.', subResult: '0,8' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Réduction d’un récipient pyramidal',
          points: 8,
          difficulty: 3,
          prompt:
            'Une pyramide a une base d’aire 180 cm² et un volume total de 1 080 cm³.\nOn la coupe parallèlement à la base à k = 1/3 du sommet.\nCalcule le volume V’ (en cm³) de la petite pyramide obtenue.',
          hint: 'V’ = (1/3)³ × 1 080 = 1 080 ÷ 27.',
          correctAnswer: '40',
          unit: 'cm³',
          explanationFinal: 'V’ = 1 080 ÷ 27 = 40 cm³.',
          steps: [
            { title: 'Effet cube sur le volume', mathExpression: 'k³ = (1/3)³ = 1/27\nV’ = 1 080 ÷ 27 = 40 cm³', explanation: 'Division par 27.', subResult: '40 cm³' },
          ],
        },
      ],
    },
    {
      year: 1996,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 1996 : Intervalles · Fonction linéaire · Géométrie du cercle',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Intersection et réunion d’intervalles',
          points: 6,
          difficulty: 2,
          questionType: 'qcm',
          options: ['[2 ; 6]', '[−1 ; 9]', '[−1 ; 2]', '[6 ; 9]'],
          prompt: 'Détermine I ∩ J pour I = [−1 ; 6] et J = [2 ; 9].',
          hint: 'Partie commune entre les deux intervalles.',
          correctAnswer: '[2 ; 6]',
          explanationFinal: 'Les réels à la fois dans I et J appartiennent à [2 ; 6].',
          steps: [
            { title: 'Intersection', mathExpression: 'max(−1, 2) = 2 ; min(6, 9) = 6 ➔ [2 ; 6]', explanation: 'Bornes incluses.' },
          ],
        },
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 2',
          title: 'Augmentation salariale en F CFA',
          points: 6,
          difficulty: 2,
          prompt:
            'Un salaire mensuel de 150 000 F CFA est augmenté de 12 %.\nCalcule le nouveau salaire en F CFA.',
          hint: '150 000 × 1,12.',
          correctAnswer: '168000',
          unit: 'F CFA',
          explanationFinal: '150 000 + 18 000 = 168 000 F CFA.',
          steps: [
            { title: 'Coefficient multiplicateur', mathExpression: '1,12 × 150 000 = 168 000 F CFA', explanation: 'Application linéaire f(x) = 1,12x.', subResult: '168 000 F CFA' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Problème',
          title: 'Tangente au cercle et triangle OAT',
          points: 8,
          difficulty: 3,
          prompt:
            'Un cercle de centre O a un rayon OA = 9 cm. La tangente en A coupe une droite passant par O en T tel que OT = 15 cm.\nCalcule la longueur AT en cm.',
          hint: 'OAT rectangle en A : AT² = 15² − 9² = 225 − 81 = 144.',
          correctAnswer: '12',
          unit: 'cm',
          explanationFinal: 'AT = √144 = 12 cm.',
          steps: [
            { title: 'Tangente ⊥ Rayon', mathExpression: 'AT² = 15² − 9² = 225 − 81 = 144 ⇒ AT = 12 cm', explanation: 'Triplet 9–12–15.', subResult: '12 cm' },
          ],
        },
      ],
    },
    {
      year: 1997,
      countryId: 'france',
      themeSummary: 'Brevet France 1997 : Développement · Réciproque Thalès · Statistiques',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Calcul numérique par identité remarquable',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule astucieusement sans calculatrice : 99².',
          hint: '(100 − 1)² = 10 000 − 200 + 1.',
          correctAnswer: '9801',
          explanationFinal: '99² = 10 000 − 200 + 1 = 9 801.',
          steps: [
            { title: '(a − b)²', mathExpression: '(100 − 1)² = 100² − 200 + 1 = 9 801', explanation: 'Identité remarquable.', subResult: '9 801' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 2',
          title: 'Diagramme circulaire : angle d’un secteur',
          points: 6,
          difficulty: 2,
          prompt:
            'Dans un collège, 25 % des élèves font de la natation.\nQuel est l’angle (en degrés) du secteur correspondant sur un diagramme circulaire (360°) ?',
          hint: '25 % de 360° = 360° ÷ 4.',
          correctAnswer: '90',
          unit: '°',
          explanationFinal: '0,25 × 360° = 90° (un quart de disque).',
          steps: [
            { title: 'Proportionnalité à 360°', mathExpression: '0,25 × 360° = 90°', explanation: 'Angle droit.', subResult: '90°' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Configuration papillon & parallélisme',
          points: 8,
          difficulty: 3,
          prompt:
            '(AC) et (BD) se coupent en O. On mesure OA = 8 cm, OC = 12 cm, OB = 10 cm, OD = 15 cm et AB = 6 cm.\nSachant que (AB) // (CD) par réciproque de Thalès (8/12 = 10/15 = 2/3), calcule CD en cm.',
          hint: 'CD / AB = 12 / 8 = 1,5 ➔ CD = 1,5 × 6.',
          correctAnswer: '9',
          unit: 'cm',
          explanationFinal: 'CD = 1,5 × 6 = 9 cm.',
          steps: [
            { title: '1) Réciproque de Thalès', mathExpression: 'OA/OC = 8/12 = 2/3 ; OB/OD = 10/15 = 2/3\n⇒ (AB) // (CD)', explanation: 'Rapports égaux.' },
            { title: '2) Calcul de CD', mathExpression: 'CD = 6 × (3/2) = 9 cm', explanation: 'Coefficient 1,5.', subResult: '9 cm' },
          ],
        },
      ],
    },
    {
      year: 1998,
      countryId: 'senegal',
      themeSummary: 'BFEM Sénégal 1998 : Équations · Vecteurs · Sphère et section',
      parts: [
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 1',
          title: 'Somme et différence de deux nombres',
          points: 6,
          difficulty: 1,
          prompt:
            'La somme de deux nombres x et y vaut 34 ; leur différence x − y vaut 12.\nCalcule le plus grand nombre x.',
          hint: 'Additionne les 2 équations : 2x = 46.',
          correctAnswer: '23',
          explanationFinal: '2x = 46 ⇒ x = 23 (et y = 11).',
          steps: [
            { title: 'Addition L₁ + L₂', mathExpression: '(x + y) + (x − y) = 34 + 12 ⇒ 2x = 46 ⇒ x = 23', explanation: 'Vérif : 23 − 11 = 12.', subResult: '23' },
          ],
        },
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Exercice 2',
          title: 'Norme d’un vecteur',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule la norme du vecteur u⃗(8 ; −15).',
          hint: '√(8² + 15²) = √(64 + 225) = √289.',
          correctAnswer: '17',
          explanationFinal: '√289 = 17.',
          steps: [
            { title: 'Formule euclidienne', mathExpression: '||u⃗|| = √(8² + (−15)²) = √289 = 17', explanation: 'Triplet 8–15–17.', subResult: '17' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Section d’une boule de pétanque',
          points: 8,
          difficulty: 3,
          prompt:
            'Une sphère de rayon R = 13 cm est coupée par un plan à la distance d = 5 cm du centre.\nCalcule le rayon r du cercle de section en cm.',
          hint: 'r² = 13² − 5² = 169 − 25 = 144.',
          correctAnswer: '12',
          unit: 'cm',
          explanationFinal: 'r = √144 = 12 cm.',
          steps: [
            { title: 'Pythagore dans le plan de coupe', mathExpression: 'r² = 13² − 5² = 144 ⇒ r = 12 cm', explanation: 'Triplet 5–12–13.', subResult: '12 cm' },
          ],
        },
      ],
    },
    {
      year: 1999,
      countryId: 'cameroun',
      themeSummary: 'BEPC Cameroun 1999 : Radicaux · Applications affines · Cône de révolution',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Comparaison de radicaux',
          points: 6,
          difficulty: 2,
          prompt:
            'Calcule la différence des carrés : (5√2)² − (7)².',
          hint: '25 × 2 − 49 = 50 − 49.',
          correctAnswer: '1',
          explanationFinal: '50 − 49 = 1 (donc 5√2 > 7).',
          steps: [
            { title: 'Carrés des termes', mathExpression: '25×2 − 49 = 50 − 49 = 1', explanation: 'Donc 5√2 ≈ 7,07 > 7.', subResult: '1' },
          ],
        },
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 2',
          title: 'Antécédent par fonction affine',
          points: 6,
          difficulty: 1,
          prompt: 'Soit g(x) = −2x + 15. Quel est l’antécédent de 3 ?',
          hint: '−2x + 15 = 3 ➔ −2x = −12.',
          correctAnswer: '6',
          explanationFinal: 'x = (−12) ÷ (−2) = 6.',
          steps: [
            { title: 'Résolution g(x) = 3', mathExpression: '−2x + 15 = 3 ⇒ 2x = 12 ⇒ x = 6', explanation: 'Vérif : −2(6)+15 = 3.', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Patron d’un cône (Angle du secteur)',
          points: 8,
          difficulty: 3,
          prompt:
            'Un cône a pour rayon R = 5 cm et génératrice g = 15 cm.\nCalcule l’angle α (en degrés) du secteur circulaire de son patron.',
          hint: 'α = 360° × (5 ÷ 15) = 360° ÷ 3.',
          correctAnswer: '120',
          unit: '°',
          explanationFinal: 'α = 360° ÷ 3 = 120°.',
          steps: [
            { title: 'Formule de l’angle au patron', mathExpression: 'α = 360° × (R ÷ g) = 360° × (5 ÷ 15) = 120°', explanation: 'Un tiers de disque.', subResult: '120°' },
          ],
        },
      ],
    },
    {
      year: 2000,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2000 : Algèbre · Droites perpendiculaires · Probabilités',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Équation avec fractions',
          points: 6,
          difficulty: 2,
          prompt: 'Résous dans ℝ : (x + 2)/3 − (x − 1)/2 = 1.',
          hint: 'Multiplie par 6 : 2(x + 2) − 3(x − 1) = 6 ➔ −x + 7 = 6.',
          correctAnswer: '1',
          explanationFinal: '−x + 7 = 6 donne x = 1.',
          steps: [
            { title: 'Mise au même dénominateur 6', mathExpression: '2(x + 2) − 3(x − 1) = 6\n2x + 4 − 3x + 3 = 6\n−x + 7 = 6 ⇒ x = 1', explanation: 'Vérif : 3/3 − 0/2 = 1.', subResult: '1' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Urne aux couleurs du drapeau gabonais',
          points: 6,
          difficulty: 2,
          prompt:
            'Une urne contient 4 boules vertes, 6 boules jaunes et 10 boules bleues (20 au total).\nQuelle est la probabilité (en décimal) de tirer une boule qui N’EST PAS bleue ?',
          hint: '(4 + 6) ÷ 20 = 10 ÷ 20.',
          correctAnswer: '0.5',
          explanationFinal: '10 boules sur 20 ne sont pas bleues : p = 0,5.',
          steps: [
            { title: 'Calcul complémentaire', mathExpression: 'P(non bleue) = 1 − (10/20) = 0,5', explanation: '1 chance sur 2.', subResult: '0,5' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Problème',
          title: 'Parallélogramme dans le plan repéré',
          points: 8,
          difficulty: 3,
          prompt:
            'On donne A(2 ; 1), B(6 ; 3) et D(3 ; 5).\nCalcule la somme x_C + y_C des coordonnées du 4e sommet C tel que ABCD soit un parallélogramme (AB⃗ = DC⃗).',
          hint: 'AB⃗(4 ; 2). Donc C = (3+4 ; 5+2) = (7 ; 7). Somme = 7 + 7.',
          correctAnswer: '14',
          explanationFinal: 'C(7 ; 7), donc x_C + y_C = 14.',
          steps: [
            { title: '1) Sommet C via AB⃗ = DC⃗', mathExpression: 'AB⃗(4 ; 2)\nx_C = 3 + 4 = 7 ; y_C = 5 + 2 = 7 ⇒ C(7 ; 7)', explanation: 'Diagonales se coupant en I(4,5 ; 4).' },
            { title: '2) Somme demandée', mathExpression: '7 + 7 = 14', explanation: 'Résultat exact.', subResult: '14' },
          ],
        },
      ],
    },
    {
      year: 2001,
      countryId: 'benin',
      themeSummary: 'BEPC Bénin 2001 : Inéquations · Trigonométrie · Volume cylindre',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Encadrement de 2x − 3',
          points: 6,
          difficulty: 2,
          prompt:
            'Si 1 ≤ x ≤ 5, quel est le maximum de l’expression 2x − 3 ?',
          hint: '2×5 − 3.',
          correctAnswer: '7',
          explanationFinal: '2×1 − 3 ≤ 2x − 3 ≤ 2×5 − 3 ➔ −1 ≤ 2x − 3 ≤ 7.',
          steps: [
            { title: 'Opérations sur inégalités', mathExpression: '2 ≤ 2x ≤ 10\n−1 ≤ 2x − 3 ≤ 7', explanation: 'Maximum = 7.', subResult: '7' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Exercice 2',
          title: 'Sinus dans un triangle rectangle',
          points: 6,
          difficulty: 2,
          prompt:
            'ABC est rectangle en A avec BC = 20 cm et sin(B̂) = 0,45.\nCalcule la longueur AC en cm.',
          hint: 'AC = BC × sin(B̂) = 20 × 0,45.',
          correctAnswer: '9',
          unit: 'cm',
          explanationFinal: 'AC = 20 × 0,45 = 9 cm.',
          steps: [
            { title: 'Formule du sinus', mathExpression: 'AC = 20 × 0,45 = 9 cm', explanation: 'Côté opposé à B̂.', subResult: '9 cm' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Puits cylindrique et volume de terre',
          points: 8,
          difficulty: 3,
          prompt:
            'Un puits cylindrique a un diamètre D = 2 m (rayon R = 1 m) et une profondeur h = 10 m.\nEn prenant π = 3,14, calcule le volume de terre extrait en m³.',
          hint: 'V = 3,14 × 1² × 10.',
          correctAnswer: '31.4',
          unit: 'm³',
          explanationFinal: 'V = 3,14 × 10 = 31,4 m³.',
          steps: [
            { title: 'Volume du cylindre', mathExpression: 'R = 1 m ; V = 3,14 × 1² × 10 = 31,4 m³', explanation: 'Aire disque × hauteur.', subResult: '31,4 m³' },
          ],
        },
      ],
    },
    {
      year: 2002,
      countryId: 'togo',
      themeSummary: 'BEPC Togo 2002 : Facto · Théorème de Thalès · Statistiques',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Expression quadratique et image',
          points: 6,
          difficulty: 2,
          prompt: 'Soit P(x) = (x − 2)(2x + 5) − (x − 2)². Calcule P(10).',
          hint: 'Factorise d’abord : P(x) = (x − 2)[(2x + 5) − (x − 2)] = (x − 2)(x + 7). Puis 8 × 17.',
          correctAnswer: '136',
          explanationFinal: 'P(x) = (x − 2)(x + 7) ⇒ P(10) = 8 × 17 = 136.',
          steps: [
            { title: 'Factorisation puis substitution', mathExpression: 'P(x) = (x − 2)(x + 7)\nP(10) = 8 × 17 = 136', explanation: 'Beaucoup plus sûr après factorisation.', subResult: '136' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 2',
          title: 'Médiane d’une série impaire',
          points: 6,
          difficulty: 1,
          prompt:
            'Détermine la médiane des tailles (en cm) : 158 ; 165 ; 152 ; 171 ; 160 ; 155 ; 163.',
          hint: 'Range dans l’ordre : 152 ; 155 ; 158 ; 160 ; 163 ; 165 ; 171. Prends la 4e valeur.',
          correctAnswer: '160',
          unit: 'cm',
          explanationFinal: 'La valeur centrale (4e sur 7) est 160 cm.',
          steps: [
            { title: 'Classement croissant', mathExpression: '152 ; 155 ; 158 ; [160] ; 163 ; 165 ; 171', explanation: '3 valeurs avant, 3 valeurs après.', subResult: '160 cm' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Partage d’un terrain triangulaire',
          points: 8,
          difficulty: 3,
          prompt:
            'Dans un triangle ABC d’aire 96 m², une droite parallèle à (BC) coupe [AB] en M et [AC] en N tels que AM / AB = 1 / 4.\nCalcule l’aire du petit triangle AMN en m².',
          hint: 'Aire(AMN) = k² × Aire(ABC) = (1/4)² × 96 = 96 ÷ 16.',
          correctAnswer: '6',
          unit: 'm²',
          explanationFinal: 'Aire(AMN) = (1/16) × 96 = 6 m².',
          steps: [
            { title: 'Théorème des aires semblables', mathExpression: 'k = 1/4 ⇒ k² = 1/16\nAire(AMN) = 96 ÷ 16 = 6 m²', explanation: 'Les longueurs divisées par 4 divisent l’aire par 16.', subResult: '6 m²' },
          ],
        },
      ],
    },
    {
      year: 2003,
      countryId: 'france',
      themeSummary: 'DNB France 2003 : PGCD / Fractions · Système · Pyramide & Pythagore',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Diagonale exacte d’un carré',
          points: 6,
          difficulty: 2,
          prompt:
            'Un carré a une aire de 50 cm². La longueur exacte de sa diagonale d vaut √(c² + c²) = √100.\nCombien mesure cette diagonale d en cm ?',
          hint: 'c² = 50 ➔ d² = 50 + 50 = 100 ➔ d = √100.',
          correctAnswer: '10',
          unit: 'cm',
          explanationFinal: 'd² = 100 donc d = 10 cm.',
          steps: [
            { title: 'Pythagore sur la diagonale', mathExpression: 'c² = 50\nd² = c² + c² = 100 ⇒ d = 10 cm', explanation: 'Pas besoin d’approximer √50 !', subResult: '10 cm' },
          ],
        },
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 2',
          title: 'Boulangerie : croissants et pains',
          points: 6,
          difficulty: 2,
          prompt:
            '3 croissants et 2 baguettes coûtent 6,20 €. 1 croissant et 2 baguettes coûtent 3,80 €.\nCalcule le prix d’un croissant (en €).',
          hint: 'Soustrais les deux lignes : 2 croissants = 6,20 − 3,80 = 2,40 €.',
          correctAnswer: '1.2',
          unit: '€',
          explanationFinal: '2 croissants = 2,40 € donc 1 croissant = 1,20 € (baguette = 1,30 €).',
          steps: [
            { title: 'Combinaison L₁ − L₂', mathExpression: '2c = 6,20 − 3,80 = 2,40 ⇒ c = 1,20 €', explanation: 'Élimination immédiate des baguettes.', subResult: '1,20 €' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Pyramide tronquée',
          points: 8,
          difficulty: 4,
          prompt:
            'Une pyramide de volume 512 cm³ est réduite au sommet avec un rapport k = 0,25 (= 1/4).\nCalcule le volume V_tronc du tronc restant en cm³.',
          hint: 'V’ = (1/4)³ × 512 = 512 ÷ 64 = 8 cm³. Tronc = 512 − 8.',
          correctAnswer: '504',
          unit: 'cm³',
          explanationFinal: 'V’ = 8 cm³ donc V_tronc = 512 − 8 = 504 cm³.',
          steps: [
            { title: '1) Petite pyramide', mathExpression: 'V’ = (1/64) × 512 = 8 cm³', explanation: '4³ = 64.' },
            { title: '2) Tronc', mathExpression: 'V_tronc = 512 − 8 = 504 cm³', explanation: 'Volume restant.', subResult: '504 cm³' },
          ],
        },
      ],
    },
    {
      year: 2004,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2004 : Affine par paliers · Vecteurs colinéaires · Trigonométrie',
      parts: [
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Exercice 1',
          title: 'Colinéarité de vecteurs',
          points: 6,
          difficulty: 2,
          prompt: 'Pour quelle valeur de m les vecteurs u⃗(6 ; 4) et v⃗(9 ; m) sont-ils colinéaires ?',
          hint: '6m − 4×9 = 0 ➔ 6m = 36.',
          correctAnswer: '6',
          explanationFinal: '6m = 36 ⇒ m = 6 (v⃗ = 1,5 u⃗).',
          steps: [
            { title: 'Déterminant nul', mathExpression: '6m − 36 = 0 ⇒ m = 6', explanation: 'Proportionnalité des coordonnées.', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 2',
          title: 'Représentation graphique : pente d’une droite',
          points: 6,
          difficulty: 2,
          prompt:
            'La droite (AB) passe par A(−2 ; 1) et B(3 ; 16).\nCalcule son coefficient directeur a.',
          hint: '(16 − 1) ÷ (3 − (−2)) = 15 ÷ 5.',
          correctAnswer: '3',
          explanationFinal: 'a = 15 ÷ 5 = 3.',
          steps: [
            { title: 'Taux d’accroissement', mathExpression: 'a = (16 − 1) ÷ (3 + 2) = 15 ÷ 5 = 3', explanation: 'Fonction croissante.', subResult: '3' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Problème',
          title: 'Hauteur d’un pylône de télécommunication',
          points: 8,
          difficulty: 3,
          prompt:
            'Un câble tendu de longueur L = 50 m relie le sommet S d’un pylône vertical [SH] au sol en A. Il forme un angle S Â H = 60° avec le sol horizontal (sin 60° ≈ 0,866 ; cos 60° = 0,5).\nCalcule la distance au sol AH en mètres.',
          hint: 'AH = L × cos(60°) = 50 × 0,5.',
          correctAnswer: '25',
          unit: 'm',
          explanationFinal: 'AH = 50 × 0,5 = 25 m (et hauteur SH ≈ 43,3 m).',
          steps: [
            { title: 'Application du cosinus', mathExpression: 'cos(60°) = AH ÷ AS\nAH = 50 × 0,5 = 25 m', explanation: 'Base d’ancrage au sol.', subResult: '25 m' },
          ],
        },
      ],
    },
    {
      year: 2005,
      countryId: 'senegal',
      themeSummary: 'BFEM Sénégal 2005 : Racines · Statistiques classes · Angles & Polygones',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Développement avec radicaux',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule l’entier égal à : (√7 + √3)² + (√7 − √3)².',
          hint: '(7 + 2√21 + 3) + (7 − 2√21 + 3) = 10 + 10.',
          correctAnswer: '20',
          explanationFinal: 'Les doubles produits ±2√21 s’annulent : 10 + 10 = 20.',
          steps: [
            { title: 'Développement double', mathExpression: '= (10 + 2√21) + (10 − 2√21) = 20', explanation: 'Identité 2(a² + b²).', subResult: '20' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Exercice 2',
          title: 'Pentagone régulier',
          points: 6,
          difficulty: 2,
          prompt:
            'Calcule l’angle au centre (en degrés) d’un pentagone régulier (5 côtés) inscrit dans un cercle.',
          hint: '360° ÷ 5.',
          correctAnswer: '72',
          unit: '°',
          explanationFinal: '360° ÷ 5 = 72°.',
          steps: [
            { title: 'Partage du cercle en 5', mathExpression: '360° ÷ 5 = 72°', explanation: 'Chaque angle intérieur vaut 108°.', subResult: '72°' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Problème',
          title: 'Âges d’un club sportif (Centres de classes)',
          points: 8,
          difficulty: 3,
          prompt:
            'Répartition de 25 jeunes :\n• [10 ; 14[ : 10 jeunes (centre 12)\n• [14 ; 18[ : 15 jeunes (centre 16).\nCalcule l’âge moyen de ce club.',
          hint: '(10×12 + 15×16) ÷ 25 = (120 + 240) ÷ 25 = 360 ÷ 25.',
          correctAnswer: '14.4',
          unit: 'ans',
          explanationFinal: '360 ÷ 25 = 14,4 ans.',
          steps: [
            { title: 'Moyenne pondérée', mathExpression: 'm = (120 + 240) ÷ 25 = 360 ÷ 25 = 14,4 ans', explanation: 'Méthode officielle BFEM.', subResult: '14,4 ans' },
          ],
        },
      ],
    },
    {
      year: 2006,
      countryId: 'cameroun',
      themeSummary: 'BEPC Cameroun 2006 : Équation 2nd degré factorisée · Probabilités · Thalès',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Aire maximale / équation produit',
          points: 6,
          difficulty: 2,
          prompt:
            'Résous x(x − 12) = 0 et donne la solution NON NULLE.',
          hint: 'x = 0 ou x − 12 = 0.',
          correctAnswer: '12',
          explanationFinal: 'Les solutions sont 0 et 12 ; la solution non nulle est 12.',
          steps: [
            { title: 'Produit nul', mathExpression: 'x = 0 ou x = 12', explanation: 'Ne pas oublier de factoriser par x !', subResult: '12' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Lancer d’un dé pipé',
          points: 6,
          difficulty: 2,
          prompt:
            'Sur un dé truqué à 6 faces, la probabilité d’obtenir 6 est 0,35. Les 5 autres faces ont toutes la même probabilité p.\nCalcule la probabilité p de chacune des faces 1 à 5.',
          hint: '5p + 0,35 = 1 ➔ 5p = 0,65 ➔ p = 0,65 ÷ 5.',
          correctAnswer: '0.13',
          explanationFinal: '5p = 0,65 donc p = 0,13.',
          steps: [
            { title: 'Somme des probabilités = 1', mathExpression: '5p = 1 − 0,35 = 0,65\np = 0,65 ÷ 5 = 0,13', explanation: 'Chaque autre face sort 13 % du temps.', subResult: '0,13' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Trapèze et diagonales sécantes',
          points: 8,
          difficulty: 4,
          prompt:
            'ABCD est un trapèze de bases parallèles [AB] et [CD] dont les diagonales se coupent en O.\nOn donne AB = 12 cm, OA = 4 cm et OC = 10 cm.\nCalcule la longueur de la grande base CD en cm.',
          hint: 'Configuration papillon en O : CD / AB = OC / OA ➔ CD / 12 = 10 / 4.',
          correctAnswer: '30',
          unit: 'cm',
          explanationFinal: 'CD = 12 × (10 ÷ 4) = 12 × 2,5 = 30 cm.',
          steps: [
            { title: 'Thalès papillon en O', mathExpression: 'CD / 12 = 10 / 4 = 2,5\nCD = 12 × 2,5 = 30 cm', explanation: '(AB) // (CD).', subResult: '30 cm' },
          ],
        },
      ],
    },
    {
      year: 2007,
      countryId: 'benin',
      themeSummary: 'BEPC Bénin 2007 : Système billets · Repérage · Cône et cylindre',
      parts: [
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 1',
          title: 'Problème de la ferme (Poules et Lapins)',
          points: 6,
          difficulty: 2,
          prompt:
            'Dans une basse-cour, on compte 35 têtes et 94 pattes (poules à 2 pattes, lapins à 4 pattes).\nCombien y a-t-il de lapins ?',
          hint: 'p + L = 35 et 2p + 4L = 94 ➔ p + 2L = 47. Soustrais : L = 47 − 35.',
          correctAnswer: '12',
          unit: 'lapins',
          explanationFinal: 'L = 47 − 35 = 12 lapins (et 23 poules : 48 + 46 = 94 pattes).',
          steps: [
            { title: 'Système simplifié', mathExpression: 'p + L = 35\np + 2L = 47 ⇒ L = 12 lapins', explanation: 'Division par 2 de l’équation des pattes.', subResult: '12' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Exercice 2',
          title: 'Équation d’une droite passant par deux points',
          points: 6,
          difficulty: 2,
          prompt:
            'La droite (D) passe par E(0 ; −4) et F(2 ; 6).\nCalcule son coefficient directeur m.',
          hint: '(6 − (−4)) ÷ (2 − 0) = 10 ÷ 2.',
          correctAnswer: '5',
          explanationFinal: 'm = 5 (et (D) : y = 5x − 4).',
          steps: [
            { title: 'Pente', mathExpression: 'm = (6 − (−4)) ÷ (2 − 0) = 10 ÷ 2 = 5', explanation: 'Ordonnée à l’origine −4.', subResult: '5' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Cône inscrit dans un cylindre',
          points: 8,
          difficulty: 3,
          prompt:
            'Un cylindre de volume V_cyl = 270 cm³ contient un cône de même base et même hauteur.\nCalcule le volume libre V_libre (en cm³) restant entre le cylindre et le cône.',
          hint: 'V_cône = 1/3 V_cyl = 90 cm³. Libre = 270 − 90.',
          correctAnswer: '180',
          unit: 'cm³',
          explanationFinal: 'Le volume libre vaut les 2/3 du cylindre : 180 cm³.',
          steps: [
            { title: 'Différence cylindre − cône', mathExpression: 'V_cône = 270 ÷ 3 = 90 cm³\nV_libre = 270 − 90 = 180 cm³', explanation: 'Relation fondamentale 1 : 3.', subResult: '180 cm³' },
          ],
        },
      ],
    },
    {
      year: 2008,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2008 : Valeur absolue · Applications affines · Repère orthonormé',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Valeur absolue et radical',
          points: 6,
          difficulty: 2,
          questionType: 'qcm',
          options: ['4 − √11', '√11 − 4', '5', '16 − 11'],
          prompt: 'Simplifie l’écriture positive exacte de √((√11 − 4)²).',
          hint: '4² = 16 > 11 donc √11 < 4 : |√11 − 4| = 4 − √11.',
          correctAnswer: '4 − √11',
          explanationFinal: 'Une racine carrée est toujours positive : 4 − √11 > 0.',
          steps: [
            { title: 'Signe de l’intérieur', mathExpression: '11 < 16 ⇒ √11 < 4 ⇒ |√11 − 4| = 4 − √11', explanation: 'Piège classique du BEPC Gabon.' },
          ],
        },
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 2',
          title: 'Système de 2 inéquations',
          points: 6,
          difficulty: 3,
          prompt:
            'Combien de nombres entiers naturels n vérifient simultanément : 2n + 1 ≥ 5 et 3n − 2 < 16 ?',
          hint: 'n ≥ 2 et 3n < 18 ➔ n < 6. Entiers : {2 ; 3 ; 4 ; 5}.',
          correctAnswer: '4',
          unit: 'entiers',
          explanationFinal: 'Les solutions entières dans [2 ; 6[ sont 2, 3, 4 et 5 (soit 4 entiers).',
          steps: [
            { title: 'Intersection des solutions', mathExpression: 'n ≥ 2 et n < 6 ⇒ [2 ; 6[\nEntiers : 2, 3, 4, 5 (4 valeurs)', explanation: '6 est exclu.', subResult: '4' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Problème',
          title: 'Triangle inscrit & médiatrice dans un repère',
          points: 8,
          difficulty: 4,
          prompt:
            'Dans un repère orthonormé, on place A(0 ; 4), B(6 ; 4) et C(6 ; −4).\nCalcule l’hypoténuse AC (en cm) du triangle ABC rectangle en B.',
          hint: 'AB = 6 ; BC = 8. AC² = 6² + 8² = 100.',
          correctAnswer: '10',
          unit: 'cm',
          explanationFinal: 'AB = 6, BC = 8 et ABC rectangle en B ⇒ AC = 10 cm.',
          steps: [
            { title: 'Distances et Pythagore', mathExpression: 'AB = 6 − 0 = 6 ; BC = 4 − (−4) = 8\nAC = √(6² + 8²) = √100 = 10 cm', explanation: 'Centre du cercle circonscrit I(3 ; 0).', subResult: '10 cm' },
          ],
        },
      ],
    },
  ]
);
