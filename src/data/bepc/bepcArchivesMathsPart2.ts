import { BepcArchivePaper } from '../../types/math';
import { buildArchivePapers } from './bepcArchiveHelpers';

export const BEPC_ARCHIVES_MATHS_2009_2026: BepcArchivePaper[] = buildArchivePapers(
  'maths',
  [
    {
      year: 2009,
      countryId: 'togo',
      themeSummary: 'BEPC Togo 2009 : Radicaux · Équation-produit · Angles inscrits',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Fraction avec radical au dénominateur',
          points: 6,
          difficulty: 2,
          prompt: 'Écris 15 ÷ √5 sous la forme k√5 et indique l’entier k.',
          hint: '(15√5) ÷ 5.',
          correctAnswer: '3',
          explanationFinal: '15√5 ÷ 5 = 3√5, donc k = 3.',
          steps: [
            { title: 'Rendre rationnel', mathExpression: '(15 × √5) ÷ (√5 × √5) = 15√5 ÷ 5 = 3√5', explanation: 'k = 3.', subResult: '3' },
          ],
        },
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 2',
          title: 'Résolution de (2x − 6)(x + 9) = 0',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule le produit des deux solutions de l’équation (2x − 6)(x + 9) = 0.',
          hint: 'x₁ = 3 et x₂ = −9. Produit = 3 × (−9).',
          correctAnswer: '-27',
          explanationFinal: '3 × (−9) = −27.',
          steps: [
            { title: 'Solutions puis produit', mathExpression: 'x = 3 ou x = −9\n3 × (−9) = −27', explanation: 'Produit négatif.', subResult: '−27' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Problème',
          title: 'Quadrilatère inscrit et angles opposés',
          points: 8,
          difficulty: 3,
          prompt:
            'EFGH est inscrit dans un cercle de centre O. On donne E F̂ G = 124°.\nCalcule la mesure de l’angle opposé E Ĥ G en degrés.',
          hint: '180° − 124°.',
          correctAnswer: '56',
          unit: '°',
          explanationFinal: 'Angles opposés supplémentaires : E Ĥ G = 180° − 124° = 56°.',
          steps: [
            { title: 'Propriété du quadrilatère inscrit', mathExpression: 'E Ĥ G = 180° − 124° = 56°', explanation: 'Somme des angles opposés = 180°.', subResult: '56°' },
          ],
        },
      ],
    },
    {
      year: 2010,
      countryId: 'france',
      themeSummary: 'DNB France 2010 : Pourcentages · Probabilités · Trigonométrie',
      parts: [
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 1',
          title: 'Soldes successives (Piège classique Brevet)',
          points: 6,
          difficulty: 3,
          prompt:
            'Un article de 100 € subit une baisse de 20 %, puis le nouveau prix subit une seconde baisse de 10 %.\nQuel est le prix final en Euros ?',
          hint: '100 × 0,80 = 80 €, puis 80 × 0,90 = 72 € (et NON 70 € !).',
          correctAnswer: '72',
          unit: '€',
          explanationFinal: '0,80 × 0,90 = 0,72 (baisse globale de 28 %), soit 72 €.',
          steps: [
            { title: 'Deux coefficients multiplicateurs', mathExpression: '100 × 0,80 = 80 €\n80 × 0,90 = 72 €', explanation: 'Les pourcentages ne s’additionnent pas !', subResult: '72 €' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Roue de loterie',
          points: 6,
          difficulty: 2,
          prompt:
            'Une roue équilibrée est partagée en 8 secteurs numérotés de 1 à 8.\nCalcule en décimal la probabilité de tomber sur un nombre premier {2, 3, 5, 7}.',
          hint: '4 nombres premiers sur 8 secteurs.',
          correctAnswer: '0.5',
          explanationFinal: '4/8 = 0,5 (attention : 1 n’est pas premier !).',
          steps: [
            { title: 'Nombres premiers ≤ 8', mathExpression: '{2 ; 3 ; 5 ; 7} ➔ 4 issues sur 8 = 0,5', explanation: '1 n’a qu’un seul diviseur.', subResult: '0,5' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Problème',
          title: 'Échelle appuyée contre un mur',
          points: 8,
          difficulty: 3,
          prompt:
            'Une échelle de 5 m est posée contre un mur vertical à 3 m du pied du mur.\n1) Calcule la hauteur atteinte sur le mur.\n2) Calcule le cosinus de l’angle α formé par l’échelle et le sol.',
          hint: 'cos(α) = Adjacent ÷ Hypoténuse = 3 ÷ 5.',
          correctAnswer: '0.6',
          explanationFinal: 'Hauteur = 4 m et cos(α) = 3 ÷ 5 = 0,6 (soit α ≈ 53°).',
          steps: [
            { title: '1) Hauteur par Pythagore', mathExpression: 'h = √(5² − 3²) = √16 = 4 m', explanation: 'Triplet 3–4–5.' },
            { title: '2) Cosinus de l’angle', mathExpression: 'cos(α) = 3 ÷ 5 = 0,6', explanation: 'Adjacent = 3 m ; Hyp = 5 m.', subResult: '0,6' },
          ],
        },
      ],
    },
    {
      year: 2011,
      countryId: 'senegal',
      themeSummary: 'BFEM Sénégal 2011 : Statistiques · Vecteurs · Pyramide',
      parts: [
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 1',
          title: 'Quartiles et dispersion',
          points: 6,
          difficulty: 2,
          prompt:
            'Dans une série de 20 notes classées, Q₁ = 8,5 et Q₃ = 14,5.\nCalcule l’écart interquartile Q₃ − Q₁.',
          hint: '14,5 − 8,5.',
          correctAnswer: '6',
          explanationFinal: 'Q₃ − Q₁ = 14,5 − 8,5 = 6.',
          steps: [
            { title: 'Écart interquartile', mathExpression: '14,5 − 8,5 = 6', explanation: 'Mesure de dispersion centrale.', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Exercice 2',
          title: 'Somme vectorielle AB⃗ + BC⃗ + CA⃗',
          points: 6,
          difficulty: 1,
          questionType: 'qcm',
          options: ['Le vecteur nul 0⃗', '2 AC⃗', 'AB⃗', 'BA⃗'],
          prompt: 'À quoi est égale la somme vectorielle AB⃗ + BC⃗ + CA⃗ dans un triangle ABC ?',
          hint: 'Chasles : (AB⃗ + BC⃗) + CA⃗ = AC⃗ + CA⃗.',
          correctAnswer: 'Le vecteur nul 0⃗',
          explanationFinal: 'Par Chasles, AB⃗ + BC⃗ + CA⃗ = AA⃗ = 0⃗.',
          steps: [
            { title: 'Boucle fermée', mathExpression: 'AB⃗ + BC⃗ + CA⃗ = AC⃗ + CA⃗ = AA⃗ = 0⃗', explanation: 'Retour au point de départ.' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Pyramide régulière à base triangulaire',
          points: 8,
          difficulty: 3,
          prompt:
            'Un tétraèdre (pyramide à base triangulaire) a une base d’aire B = 24 cm² et une hauteur h = 15 cm.\nCalcule son volume V en cm³.',
          hint: 'V = (24 × 15) ÷ 3.',
          correctAnswer: '120',
          unit: 'cm³',
          explanationFinal: 'V = (24 × 15) ÷ 3 = 8 × 15 = 120 cm³.',
          steps: [
            { title: 'Formule générale V = B × h ÷ 3', mathExpression: 'V = (24 × 15) ÷ 3 = 8 × 15 = 120 cm³', explanation: 'Valable pour toute base.', subResult: '120 cm³' },
          ],
        },
      ],
    },
    {
      year: 2012,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2012 : Calcul littéral · Droites · Agrandissement',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Programme de calcul BEPC',
          points: 6,
          difficulty: 2,
          prompt:
            'Choisir x ; multiplier par 3 ; retrancher 5 ; élever au carré.\nCalcule le résultat obtenu si on choisit x = 4 au départ.',
          hint: '(3×4 − 5)² = (12 − 5)² = 7².',
          correctAnswer: '49',
          explanationFinal: '(3×4 − 5)² = 7² = 49.',
          steps: [
            { title: 'Exécution pas à pas', mathExpression: '4 → 12 → 7 → 7² = 49', explanation: 'Calcul direct.', subResult: '49' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Exercice 2',
          title: 'Intersection des axes d’une droite',
          points: 6,
          difficulty: 2,
          prompt:
            'La droite (D) d’équation 2x + 3y − 12 = 0 coupe l’axe des abscisses (y = 0) en A.\nCalcule l’abscisse x_A du point A.',
          hint: 'Remplace y par 0 : 2x − 12 = 0.',
          correctAnswer: '6',
          explanationFinal: '2x = 12 donc A(6 ; 0).',
          steps: [
            { title: 'Condition y = 0', mathExpression: '2x + 0 − 12 = 0 ⇒ 2x = 12 ⇒ x = 6', explanation: 'Axe (Ox).', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Maquette architecturale du Palais',
          points: 8,
          difficulty: 3,
          prompt:
            'Sur un plan à l’échelle 1/50, une salle mesure 16 cm de long sur 10 cm de large (soit 160 cm²).\nCalcule l’aire réelle de la salle en m².',
          hint: 'Longueur réelle = 16×50 = 800 cm = 8 m. Largeur = 10×50 = 5 m. Aire = 8 × 5.',
          correctAnswer: '40',
          unit: 'm²',
          explanationFinal: '8 m × 5 m = 40 m² (ou 160 cm² × 50² = 400 000 cm² = 40 m²).',
          steps: [
            { title: 'Dimensions réelles et aire', mathExpression: 'L = 8 m ; l = 5 m\nA = 8 × 5 = 40 m²', explanation: 'Échelle 1/50.', subResult: '40 m²' },
          ],
        },
      ],
    },
    {
      year: 2013,
      countryId: 'cameroun',
      themeSummary: 'BEPC Cameroun 2013 : Système F CFA · Thalès · Probabilités',
      parts: [
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 1',
          title: 'Tarifs de cinéma à Douala',
          points: 6,
          difficulty: 2,
          prompt:
            '2 places adultes et 3 places enfants coûtent 7 000 F. 1 place adulte et 1 place enfant coûtent 3 000 F.\nCalcule le prix d’une place enfant (en F CFA).',
          hint: '2×L₂ − L₁ : −y = −1 000 ? Non : 2a + 2e = 6 000 ; L₁ − 2L₂ donne e = 7 000 − 6 000.',
          correctAnswer: '1000',
          unit: 'F CFA',
          explanationFinal: 'Une place enfant coûte 1 000 F CFA (et adulte 2 000 F CFA).',
          steps: [
            { title: 'Combinaison L₁ − 2 L₂', mathExpression: '(2a + 3e) − (2a + 2e) = 7 000 − 6 000\ne = 1 000 F CFA', explanation: 'Adulte = 2 000 F.', subResult: '1 000 F CFA' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Tirage de deux boules avec remise',
          points: 6,
          difficulty: 3,
          prompt:
            'Un sac contient 1 boule rouge et 3 boules vertes (4 au total). On tire 2 boules successivement AVEC remise.\nCalcule en décimal la probabilité de tirer 2 fois la boule rouge.',
          hint: '(1/4) × (1/4) = 1/16 = 0,0625.',
          correctAnswer: '0.0625',
          explanationFinal: '0,25 × 0,25 = 0,0625.',
          steps: [
            { title: 'Indépendance avec remise', mathExpression: 'P(R₁ et R₂) = 0,25 × 0,25 = 0,0625', explanation: '6,25 % de chance.', subResult: '0,0625' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Mesure indirecte d’un monument',
          points: 8,
          difficulty: 3,
          prompt:
            'Un poteau vertical de 2 m donne une ombre de 1,6 m. Au même moment, une tour voisine donne une ombre de 28 m.\nCalcule la hauteur H de la tour en mètres.',
          hint: 'H = 2 × (28 ÷ 1,6) = 56 ÷ 1,6.',
          correctAnswer: '35',
          unit: 'm',
          explanationFinal: 'H = 56 ÷ 1,6 = 35 m.',
          steps: [
            { title: 'Proportionnalité de Thalès', mathExpression: 'H / 2 = 28 / 1,6 ⇒ H = 56 ÷ 1,6 = 35 m', explanation: 'Rayons solaires parallèles.', subResult: '35 m' },
          ],
        },
      ],
    },
    {
      year: 2014,
      countryId: 'benin',
      themeSummary: 'BEPC Bénin 2014 : Trigonométrie · Inéquations · Cône et sphère',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Seuil d’abonnement',
          points: 6,
          difficulty: 2,
          prompt:
            'Résous 3 000 + 200x < 500x.\nÀ partir de quel entier x l’inégalité est-elle vraie ?',
          hint: '3 000 < 300x ➔ x > 10 ➔ dès 11.',
          correctAnswer: '11',
          explanationFinal: 'x > 10 donc à partir de x = 11.',
          steps: [
            { title: 'Inéquation stricte', mathExpression: '3 000 < 300x ⇒ x > 10 ⇒ x_min = 11', explanation: '10 est exclu.', subResult: '11' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Exercice 2',
          title: 'Valeur exacte trigonométrique',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule : 6 × cos(60°) + 5 × tan(45°).',
          hint: 'cos 60° = 0,5 et tan 45° = 1.',
          correctAnswer: '8',
          explanationFinal: '6×0,5 + 5×1 = 3 + 5 = 8.',
          steps: [
            { title: 'Valeurs remarquables', mathExpression: '6 × 0,5 + 5 × 1 = 3 + 5 = 8', explanation: 'Calcul exact.', subResult: '8' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Volume d’un bol hémisphérique',
          points: 8,
          difficulty: 3,
          prompt:
            'Un bol a la forme d’une demi-boule de rayon R = 6 cm (V_demi-boule = 2/3 π R³). En prenant π = 3,\ncalcule la capacité du bol en cm³.',
          hint: '(2/3) × 3 × 6³ = 2 × 216.',
          correctAnswer: '432',
          unit: 'cm³',
          explanationFinal: '2 × 216 = 432 cm³ (= 43,2 cL).',
          steps: [
            { title: 'Demi-sphère', mathExpression: 'V = (2/3) × 3 × 6³ = 2 × 216 = 432 cm³', explanation: '(2/3) × 3 = 2.', subResult: '432 cm³' },
          ],
        },
      ],
    },
    {
      year: 2015,
      countryId: 'togo',
      themeSummary: 'BEPC Togo 2015 : Radicaux · Affine · Cercle & Pythagore',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Simplification de quotient radical',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule la valeur exacte de (√98) ÷ (√2).',
          hint: '√(98 ÷ 2) = √49.',
          correctAnswer: '7',
          explanationFinal: '√49 = 7.',
          steps: [
            { title: 'Quotient sous radical', mathExpression: '√(98 ÷ 2) = √49 = 7', explanation: 'Simplification immédiate.', subResult: '7' },
          ],
        },
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 2',
          title: 'Fonction linéaire g(x) = ax',
          points: 6,
          difficulty: 1,
          prompt: 'g est linéaire et g(−4) = 14. Calcule g(10).',
          hint: 'a = 14 ÷ (−4) = −3,5. g(10) = −3,5 × 10.',
          correctAnswer: '-35',
          explanationFinal: 'a = −3,5 donc g(10) = −35.',
          steps: [
            { title: 'Coefficient a', mathExpression: 'a = −3,5 ⇒ g(10) = −35', explanation: 'Proportionnalité.', subResult: '−35' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Problème',
          title: 'Triangle inscrit dans un demi-cercle',
          points: 8,
          difficulty: 3,
          prompt:
            '[AB] est un diamètre de longueur 13 cm d’un cercle. M est un point du cercle tel que AM = 5 cm.\nCalcule la longueur MB en cm.',
          hint: 'AMB rectangle en M : MB² = 13² − 5² = 169 − 25 = 144.',
          correctAnswer: '12',
          unit: 'cm',
          explanationFinal: 'MB = √144 = 12 cm.',
          steps: [
            { title: 'Triangle rectangle en M + Pythagore', mathExpression: 'MB² = 13² − 5² = 144 ⇒ MB = 12 cm', explanation: 'Triplet 5–12–13.', subResult: '12 cm' },
          ],
        },
      ],
    },
    {
      year: 2016,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2016 : Factorisation · Moyenne classe · Vecteurs orthogonaux',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Factorisation avec facteur commun',
          points: 6,
          difficulty: 2,
          questionType: 'qcm',
          options: ['(2x − 1)(5x + 3)', '(2x − 1)(x + 5)', '(2x + 1)(5x − 3)', '(2x − 1)(5x − 5)'],
          prompt: 'Factorise A = (2x − 1)(3x + 4) + (2x − 1)².',
          hint: '(2x − 1)[(3x + 4) + (2x − 1)] = (2x − 1)(5x + 3).',
          correctAnswer: '(2x − 1)(5x + 3)',
          explanationFinal: 'A = (2x − 1)(3x + 4 + 2x − 1) = (2x − 1)(5x + 3).',
          steps: [
            { title: 'Mise en facteur', mathExpression: 'A = (2x − 1)(5x + 3)', explanation: '3x+2x = 5x ; 4−1 = +3.' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 2',
          title: 'Moyenne globale de deux groupes',
          points: 6,
          difficulty: 2,
          prompt:
            '20 garçons ont une moyenne de 11 et 30 filles ont une moyenne de 13,5.\nCalcule la moyenne générale de la classe.',
          hint: '(20×11 + 30×13,5) ÷ 50 = (220 + 405) ÷ 50 = 625 ÷ 50.',
          correctAnswer: '12.5',
          explanationFinal: '625 ÷ 50 = 12,5.',
          steps: [
            { title: 'Moyenne pondérée', mathExpression: 'm = (220 + 405) ÷ 50 = 625 ÷ 50 = 12,5', explanation: 'Effectif total 50.', subResult: '12,5' },
          ],
        },
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Problème',
          title: 'Orthogonalité dans un repère orthonormé',
          points: 8,
          difficulty: 3,
          prompt:
            'Soient A(1 ; 2), B(5 ; 4) et C(3 ; y). On a AB⃗(4 ; 2) et AC⃗(2 ; y − 2).\nDétermine y pour que le triangle ABC soit rectangle en A (AB⃗ ⊥ AC⃗).',
          hint: '4×2 + 2(y − 2) = 0 ➔ 8 + 2y − 4 = 0 ➔ 2y = −4.',
          correctAnswer: '-2',
          explanationFinal: '2y + 4 = 0 ⇒ y = −2 (C(3 ; −2)).',
          steps: [
            { title: 'Produit scalaire nul xx’ + yy’ = 0', mathExpression: '4×2 + 2(y − 2) = 0\n8 + 2y − 4 = 0 ⇒ 2y = −4 ⇒ y = −2', explanation: 'Angle droit en A.', subResult: 'y = −2' },
          ],
        },
      ],
    },
    {
      year: 2017,
      countryId: 'france',
      themeSummary: 'DNB France 2017 : Tableur/Programme · Probabilités · Thalès & Aire',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Égalité littérale',
          points: 6,
          difficulty: 2,
          prompt:
            'Développe (x + 3)² − (x − 3)² pour x = 15.',
          hint: '(x+3)² − (x−3)² = 12x ! Donc 12 × 15.',
          correctAnswer: '180',
          explanationFinal: 'Identité remarquable : 4ab = 12x, et 12 × 15 = 180.',
          steps: [
            { title: 'Simplification littérale', mathExpression: '(x² + 6x + 9) − (x² − 6x + 9) = 12x\n12 × 15 = 180', explanation: 'Les x² et 9 disparaissent.', subResult: '180' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Lancer de deux dés à 6 faces',
          points: 6,
          difficulty: 2,
          prompt:
            'On lance deux dés et on calcule le produit P des deux faces.\nCombien de couples donnent un produit égal à 12 ?',
          hint: '(2;6), (3;4), (4;3), (6;2).',
          correctAnswer: '4',
          unit: 'issues',
          explanationFinal: 'Exactement 4 issues sur 36 : (2;6), (3;4), (4;3), (6;2).',
          steps: [
            { title: 'Liste des diviseurs ≤ 6', mathExpression: '2×6 ; 3×4 ; 4×3 ; 6×2 ➔ 4 issues', explanation: 'Probabilité 4/36 = 1/9.', subResult: '4' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Piste d’athlétisme / Voile triangulaire',
          points: 8,
          difficulty: 3,
          prompt:
            'Une voile triangulaire ABC rectangle en A a pour côtés AB = 6 m et AC = 8 m. On coud une bande parallèle à (BC) à mi-hauteur (AM = 3 m).\nCalcule l’aire du trapèze BMNC restant en bas (en m²).',
          hint: 'Aire(ABC) = 24 m². Aire(AMN) = (0,5)² × 24 = 6 m². Trapèze = 24 − 6.',
          correctAnswer: '18',
          unit: 'm²',
          explanationFinal: 'Aire(BMNC) = 24 − 6 = 18 m².',
          steps: [
            { title: '1) Aire totale et réduction', mathExpression: 'A(ABC) = (6×8)÷2 = 24 m²\nA(AMN) = 0,25 × 24 = 6 m²', explanation: 'k = 0,5 ➔ k² = 0,25.' },
            { title: '2) Trapèze', mathExpression: '24 − 6 = 18 m²', explanation: 'Trois quarts de la voile.', subResult: '18 m²' },
          ],
        },
      ],
    },
    {
      year: 2018,
      countryId: 'senegal',
      themeSummary: 'BFEM Sénégal 2018 : Intervalles · Repérage · Cône tronqué',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Amplitude d’un intervalle',
          points: 6,
          difficulty: 2,
          prompt: 'L’intervalle solution de |x − 7| ≤ 4 est [a ; b]. Calcule son amplitude b − a.',
          hint: '7 − 4 ≤ x ≤ 7 + 4 ➔ [3 ; 11]. Amplitude = 11 − 3 = 2 × 4.',
          correctAnswer: '8',
          explanationFinal: '[3 ; 11] a une amplitude de 11 − 3 = 8.',
          steps: [
            { title: 'Encadrement', mathExpression: '3 ≤ x ≤ 11 ⇒ 11 − 3 = 8', explanation: 'Double du rayon 4.', subResult: '8' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Exercice 2',
          title: 'Symétrique d’un point par rapport à un centre',
          points: 6,
          difficulty: 2,
          prompt:
            'A’ est le symétrique de A(−2 ; 5) par rapport au point M(3 ; 1).\nCalcule l’abscisse x_A’ du point A’.',
          hint: '(−2 + x_A’) ÷ 2 = 3 ➔ −2 + x_A’ = 6.',
          correctAnswer: '8',
          explanationFinal: 'x_A’ = 2×3 − (−2) = 8 (et y_A’ = 2×1 − 5 = −3).',
          steps: [
            { title: 'M milieu de [AA’]', mathExpression: 'x_A’ = 2 × 3 − (−2) = 8', explanation: 'A’(8 ; −3).', subResult: '8' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Seau en forme de tronc de cône',
          points: 8,
          difficulty: 4,
          prompt:
            'Un grand cône a un volume de 810 cm³. On coupe sa pointe au tiers supérieur (k = 1/3).\nCalcule le volume du tronc de cône restant en cm³.',
          hint: 'V’ = (1/27) × 810 = 30 cm³. Tronc = 810 − 30.',
          correctAnswer: '780',
          unit: 'cm³',
          explanationFinal: '810 − 30 = 780 cm³.',
          steps: [
            { title: 'Calcul du tronc', mathExpression: 'V’ = 810 ÷ 27 = 30 cm³\nV_tronc = 810 − 30 = 780 cm³', explanation: 'Méthode grand − petit.', subResult: '780 cm³' },
          ],
        },
      ],
    },
    {
      year: 2019,
      countryId: 'cameroun',
      themeSummary: 'BEPC Cameroun 2019 : Système · Fonctions affines · Pythagore espace',
      parts: [
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 1',
          title: 'Âges d’une mère et sa fille',
          points: 6,
          difficulty: 2,
          prompt:
            'Aujourd’hui une mère a 36 ans et sa fille a 10 ans.\nDans combien d’années la mère aura-t-elle exactement le DOUBLE de l’âge de sa fille ?',
          hint: '36 + x = 2(10 + x) ➔ 36 + x = 20 + 2x.',
          correctAnswer: '16',
          unit: 'ans',
          explanationFinal: 'x = 16 ans (dans 16 ans : 52 ans = 2 × 26 ans).',
          steps: [
            { title: 'Mise en équation', mathExpression: '36 + x = 20 + 2x ⇒ x = 16 ans', explanation: '52 = 2 × 26.', subResult: '16 ans' },
          ],
        },
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 2',
          title: 'Intersection de deux droites',
          points: 6,
          difficulty: 2,
          prompt:
            'Trouve l’abscisse x du point d’intersection des droites y = 4x − 5 et y = x + 13.',
          hint: '4x − 5 = x + 13 ➔ 3x = 18.',
          correctAnswer: '6',
          explanationFinal: 'x = 6 (et y = 19).',
          steps: [
            { title: 'Égalité des ordonnées', mathExpression: '4x − x = 13 + 5 ⇒ 3x = 18 ⇒ x = 6', explanation: 'Point (6 ; 19).', subResult: '6' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Hauteur d’une pyramide depuis son apothème',
          points: 8,
          difficulty: 4,
          prompt:
            'Une pyramide régulière à base carrée de côté c = 12 cm a une apothème (hauteur de face latérale) SM = 10 cm.\nCalcule la hauteur SO de la pyramide (avec OM = c ÷ 2 = 6 cm) en cm.',
          hint: 'SO² = SM² − OM² = 10² − 6² = 64.',
          correctAnswer: '8',
          unit: 'cm',
          explanationFinal: 'SO = √64 = 8 cm.',
          steps: [
            { title: 'Triangle SOM rectangle en O', mathExpression: 'OM = 12 ÷ 2 = 6 cm\nSO = √(10² − 6²) = √64 = 8 cm', explanation: 'Triplet 6–8–10.', subResult: '8 cm' },
          ],
        },
      ],
    },
    {
      year: 2020,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2020 : Radicaux · Probabilités · Trigonométrie',
      parts: [
        {
          chapterId: 'math3-racines-carrees',
          partLabel: 'Exercice 1',
          title: 'Simplification exacte de produit',
          points: 6,
          difficulty: 1,
          prompt: 'Calcule √3 × √27.',
          hint: '√81.',
          correctAnswer: '9',
          explanationFinal: '√(3 × 27) = √81 = 9.',
          steps: [
            { title: 'Produit sous radical', mathExpression: '√(3 × 27) = √81 = 9', explanation: 'Carré parfait.', subResult: '9' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Tirage sans remise de 2 jetons',
          points: 6,
          difficulty: 3,
          prompt:
            'Une boîte contient 3 jetons verts et 2 jetons jaunes (5 au total). On tire 2 jetons SANS remise.\nCalcule en décimal la probabilité de tirer 2 jetons verts.',
          hint: '(3/5) × (2/4) = 6/20.',
          correctAnswer: '0.3',
          explanationFinal: '6/20 = 0,3.',
          steps: [
            { title: 'Arbre sans remise', mathExpression: '(3/5) × (2/4) = 6/20 = 0,3', explanation: '30 % de chance.', subResult: '0,3' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Problème',
          title: 'Pente d’une route vers Oyem',
          points: 8,
          difficulty: 3,
          prompt:
            'Une route droite longue de 500 m s’élève verticalement d’un dénivelé de 25 m.\nCalcule le sinus de l’angle de pente (en décimal exact).',
          hint: 'sin(α) = 25 ÷ 500.',
          correctAnswer: '0.05',
          explanationFinal: 'sin(α) = 25 ÷ 500 = 0,05 (pente de 5 %).',
          steps: [
            { title: 'Rapport Opposé / Hypoténuse', mathExpression: 'sin(α) = 25 ÷ 500 = 0,05', explanation: 'Angle d’environ 2,9°.', subResult: '0,05' },
          ],
        },
      ],
    },
    {
      year: 2021,
      countryId: 'benin',
      themeSummary: 'BEPC Bénin 2021 : Calcul littéral · Statistiques · Vecteurs',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Calcul rapide par a² − b²',
          points: 6,
          difficulty: 2,
          prompt: 'Calcule mentalement : 505² − 495².',
          hint: '(505 − 495)(505 + 495) = 10 × 1 000.',
          correctAnswer: '10000',
          explanationFinal: '10 × 1 000 = 10 000.',
          steps: [
            { title: 'Identité a² − b²', mathExpression: '(505 − 495)(505 + 495) = 10 × 1 000 = 10 000', explanation: 'Calcul immédiat.', subResult: '10 000' },
          ],
        },
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 2',
          title: 'Retrouver une valeur manquante',
          points: 6,
          difficulty: 2,
          prompt:
            'La moyenne des 4 notes {10 ; 14 ; 12 ; x} est égale à 13.\nCalcule la 4e note x.',
          hint: 'Somme totale = 4 × 13 = 52. 10 + 14 + 12 = 36.',
          correctAnswer: '16',
          explanationFinal: 'x = 52 − 36 = 16.',
          steps: [
            { title: 'Équation de moyenne', mathExpression: '36 + x = 4 × 13 = 52 ⇒ x = 16', explanation: 'Vérif : 52 ÷ 4 = 13.', subResult: '16' },
          ],
        },
        {
          chapterId: 'math3-vecteurs-translations',
          partLabel: 'Problème',
          title: 'Vecteurs et translation',
          points: 8,
          difficulty: 3,
          prompt:
            'Par la translation de vecteur u⃗(4 ; −3), le point P(5 ; 7) a pour image P’(x’ ; y’).\nCalcule le produit x’ × y’.',
          hint: 'x’ = 5 + 4 = 9 ; y’ = 7 − 3 = 4. Produit = 9 × 4.',
          correctAnswer: '36',
          explanationFinal: 'P’(9 ; 4), donc x’ × y’ = 36.',
          steps: [
            { title: 'Image par translation', mathExpression: 'x’ = 9 ; y’ = 4\n9 × 4 = 36', explanation: 'Addition des coordonnées.', subResult: '36' },
          ],
        },
      ],
    },
    {
      year: 2022,
      countryId: 'togo',
      themeSummary: 'BEPC Togo 2022 : Inéquation F CFA · Thalès · Hexagone régulier',
      parts: [
        {
          chapterId: 'math3-inequations-intervalles',
          partLabel: 'Exercice 1',
          title: 'Budget de fournitures scolaires',
          points: 6,
          difficulty: 2,
          prompt:
            'Avec 10 000 F CFA, Kofi achète un livre à 3 200 F et x stylos à 400 F l’unité.\nCombien de stylos au maximum peut-il acheter ?',
          hint: '400x ≤ 10 000 − 3 200 = 6 800 ➔ x ≤ 6 800 ÷ 400.',
          correctAnswer: '17',
          unit: 'stylos',
          explanationFinal: '6 800 ÷ 400 = 17 stylos exactement.',
          steps: [
            { title: 'Inéquation en F CFA', mathExpression: '3 200 + 400x ≤ 10 000\n400x ≤ 6 800 ⇒ x ≤ 17', explanation: '17 stylos maximum.', subResult: '17' },
          ],
        },
        {
          chapterId: 'math3-angles-polygones',
          partLabel: 'Exercice 2',
          title: 'Angle intérieur d’un octogone régulier',
          points: 6,
          difficulty: 2,
          prompt:
            'Calcule la mesure (en degrés) d’un angle intérieur d’un octogone régulier (8 côtés).',
          hint: 'Angle au centre = 360°÷8 = 45°. Angle intérieur = 180° − 45°.',
          correctAnswer: '135',
          unit: '°',
          explanationFinal: '180° − 45° = 135°.',
          steps: [
            { title: 'Formule polygone régulier', mathExpression: '180° − (360° ÷ 8) = 180° − 45° = 135°', explanation: 'Somme totale = 6 × 180° = 1 080°.', subResult: '135°' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Double Thalès dans le triangle',
          points: 8,
          difficulty: 3,
          prompt:
            'Dans ABC, M ∈ [AB] et N ∈ [AC] avec (MN)//(BC). AM = 6 cm, AB = 15 cm et MN = 8 cm.\nCalcule BC en cm.',
          hint: 'MN / BC = AM / AB ➔ 8 / BC = 6 / 15 = 2 / 5.',
          correctAnswer: '20',
          unit: 'cm',
          explanationFinal: 'BC = (8 × 15) ÷ 6 = 20 cm.',
          steps: [
            { title: 'Produit en croix', mathExpression: '6 / 15 = 8 / BC ⇒ BC = 120 ÷ 6 = 20 cm', explanation: 'Rapport 2/5.', subResult: '20 cm' },
          ],
        },
      ],
    },
    {
      year: 2023,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2023 : Fonctions affines · Repère orthogonal · Cône/Silo',
      parts: [
        {
          chapterId: 'math3-applications-affines',
          partLabel: 'Exercice 1',
          title: 'Fonction affine par morceaux (SEEG)',
          points: 6,
          difficulty: 3,
          prompt:
            'Un tarif facture 80 F/kWh jusqu’à 60 kWh, puis 120 F pour chaque kWh au-delà de 60.\nCalcule la facture pour 90 kWh (en F CFA).',
          hint: '60×80 + 30×120 = 4 800 + 3 600.',
          correctAnswer: '8400',
          unit: 'F CFA',
          explanationFinal: '4 800 + 3 600 = 8 400 F CFA.',
          steps: [
            { title: 'Calcul par tranches', mathExpression: '60×80 + (90−60)×120 = 4 800 + 3 600 = 8 400 F CFA', explanation: 'Tarif progressif.', subResult: '8 400 F CFA' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Exercice 2',
          title: 'Médiatrice dans un repère',
          points: 6,
          difficulty: 3,
          prompt:
            'A(2 ; 0) et B(6 ; 8). La droite (AB) a une pente m = (8−0)÷(6−2) = 2.\nQuel est le coefficient directeur m’ d’une droite perpendiculaire à (AB) ?',
          hint: '2 × m’ = −1 ➔ m’ = −0,5.',
          correctAnswer: '-0.5',
          explanationFinal: 'm’ = −1/2 = −0,5.',
          steps: [
            { title: 'Condition m × m’ = −1', mathExpression: '2 × m’ = −1 ⇒ m’ = −0,5', explanation: 'Orthogonalité.', subResult: '−0,5' },
          ],
        },
        {
          chapterId: 'math3-pyramides-cones',
          partLabel: 'Problème',
          title: 'Silo agricole cylindre + cône',
          points: 8,
          difficulty: 4,
          prompt:
            'Un réservoir cylindrique (R = 3 m, h₁ = 4 m) est surmonté d’un cône de même rayon R = 3 m et de hauteur h₂ = 3 m. En prenant π = 3,\ncalcule le volume total en m³.',
          hint: 'V_cyl = 3 × 9 × 4 = 108 m³. V_cône = (1/3) × 3 × 9 × 3 = 27 m³. Total = 108 + 27.',
          correctAnswer: '135',
          unit: 'm³',
          explanationFinal: '108 + 27 = 135 m³.',
          steps: [
            { title: '1) Volume du cylindre', mathExpression: 'V_cyl = 3 × 3² × 4 = 108 m³', explanation: 'Base 27 m².' },
            { title: '2) Volume du cône + Total', mathExpression: 'V_cône = (1/3) × 27 × 3 = 27 m³\nTotal = 108 + 27 = 135 m³', explanation: 'Capacité totale.', subResult: '135 m³' },
          ],
        },
      ],
    },
    {
      year: 2024,
      countryId: 'gabon',
      themeSummary: 'BEPC Gabon 2024 : Algèbre · Probabilités · Géométrie complète',
      parts: [
        {
          chapterId: 'math3-calcul-litteral-equations',
          partLabel: 'Exercice 1',
          title: 'Développer, factoriser et évaluer',
          points: 6,
          difficulty: 2,
          prompt:
            'On donne D(x) = (3x − 1)² − 4 = (3x − 3)(3x + 1).\nCalcule D(4).',
          hint: '(3×4 − 3)(3×4 + 1) = 9 × 13.',
          correctAnswer: '117',
          explanationFinal: 'D(4) = 9 × 13 = 117.',
          steps: [
            { title: 'Évaluation rapide', mathExpression: 'D(4) = (12 − 3)(12 + 1) = 9 × 13 = 117', explanation: 'Forme factorisée.', subResult: '117' },
          ],
        },
        {
          chapterId: 'math3-probabilites-3eme',
          partLabel: 'Exercice 2',
          title: 'Espérance de jeu à la tombola',
          points: 6,
          difficulty: 3,
          prompt:
            'Une roue à 10 secteurs offre 1 lot de 5 000 F, 3 lots de 1 000 F et 6 cases perdantes à 0 F.\nCalcule le gain moyen espéré par tour en F CFA.',
          hint: '(1×5 000 + 3×1 000) ÷ 10 = 8 000 ÷ 10.',
          correctAnswer: '800',
          unit: 'F CFA',
          explanationFinal: 'Gain moyen = 500 + 300 = 800 F CFA.',
          steps: [
            { title: 'Moyenne pondérée', mathExpression: 'E = 0,1×5 000 + 0,3×1 000 + 0 = 500 + 300 = 800 F CFA', explanation: 'Espérance mathématique.', subResult: '800 F CFA' },
          ],
        },
        {
          chapterId: 'math3-thales-3eme',
          partLabel: 'Problème',
          title: 'Triangle inscrit, Pythagore et Thalès combinés',
          points: 8,
          difficulty: 4,
          prompt:
            'ABC est rectangle en A avec AB = 12 cm et AC = 16 cm.\n1) Calcule l’hypoténuse BC.\n2) M ∈ [AB] avec AM = 9 cm et (MN) // (BC). Calcule MN en cm.',
          hint: 'BC = √(144 + 256) = √400 = 20 cm. MN = 20 × (9 ÷ 12) = 20 × 0,75.',
          correctAnswer: '15',
          unit: 'cm',
          explanationFinal: 'BC = 20 cm et MN = 15 cm.',
          steps: [
            { title: '1) Pythagore', mathExpression: 'BC = √(12² + 16²) = √400 = 20 cm', explanation: 'Triplet 12–16–20.' },
            { title: '2) Thalès', mathExpression: 'MN = 20 × (9 ÷ 12) = 20 × 0,75 = 15 cm', explanation: 'Rapport 3/4.', subResult: '15 cm' },
          ],
        },
      ],
    },
    {
      year: 2025,
      countryId: 'france',
      themeSummary: 'DNB France 2025 : Statistiques · Trigonométrie · Section solide',
      parts: [
        {
          chapterId: 'math3-statistiques-3eme',
          partLabel: 'Exercice 1',
          title: 'Médiane d’une série de temps de course',
          points: 6,
          difficulty: 2,
          prompt:
            'Temps au 100 m (en s) de 6 sprinters : 11,4 ; 12,1 ; 11,2 ; 11,8 ; 12,5 ; 11,6.\nCalcule la médiane de cette série.',
          hint: 'Ordre : 11,2 ; 11,4 ; 11,6 ; 11,8 ; 12,1 ; 12,5. Moyenne entre 11,6 et 11,8.',
          correctAnswer: '11.7',
          unit: 's',
          explanationFinal: '(11,6 + 11,8) ÷ 2 = 11,7 s.',
          steps: [
            { title: 'Tri et demi-somme centrale', mathExpression: '11,2 ; 11,4 ; [11,6 | 11,8] ; 12,1 ; 12,5\nMed = (11,6 + 11,8) ÷ 2 = 11,7 s', explanation: 'Effectif pair N = 6.', subResult: '11,7 s' },
          ],
        },
        {
          chapterId: 'math3-trigonometrie-3eme',
          partLabel: 'Exercice 2',
          title: 'Descente en parapente',
          points: 6,
          difficulty: 2,
          prompt:
            'Un parapente descend en ligne droite sur 1 200 m d’une altitude de 360 m.\nCalcule le sinus de son angle de descente.',
          hint: '360 ÷ 1 200 = 3 ÷ 10.',
          correctAnswer: '0.3',
          explanationFinal: 'sin(α) = 360 ÷ 1 200 = 0,3.',
          steps: [
            { title: 'Sinus dans le triangle rectangle', mathExpression: 'sin(α) = 360 ÷ 1 200 = 0,3', explanation: 'Angle ≈ 17,5°.', subResult: '0,3' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Agrandissement de cube et capacité',
          points: 8,
          difficulty: 3,
          prompt:
            'Un petit réservoir cubique contient 8 litres. On multiplie toutes ses arêtes par k = 3.\nCombien de litres contient le grand réservoir ?',
          hint: 'Volume × k³ = 8 × 3³ = 8 × 27.',
          correctAnswer: '216',
          unit: 'L',
          explanationFinal: '8 × 27 = 216 litres.',
          steps: [
            { title: 'Facteur cubique k³', mathExpression: 'V’ = 3³ × 8 = 27 × 8 = 216 L', explanation: 'Tripler les longueurs multiplie le volume par 27.', subResult: '216 L' },
          ],
        },
      ],
    },
    {
      year: 2026,
      countryId: 'gabon',
      themeSummary: 'BEPC Blanc National 2026 Gabon : Épreuve complète Algèbre, Stats & Géométrie',
      parts: [
        {
          chapterId: 'math3-systemes-equations',
          partLabel: 'Exercice 1',
          title: 'Coopérative BEPC 2026 (Gabon)',
          points: 6,
          difficulty: 3,
          prompt:
            'Pour préparer le BEPC 2026, un élève achète 3 annales de Maths et 2 annales de Physique pour 13 000 F CFA.\nUn camarade achète 2 annales de Maths et 4 annales de Physique pour 14 000 F CFA.\nCalcule le prix d’une annale de Maths en F CFA.',
          hint: '2×L₁ − L₂ : (6M + 4P) − (2M + 4P) = 26 000 − 14 000 ➔ 4M = 12 000.',
          correctAnswer: '3000',
          unit: 'F CFA',
          explanationFinal: '4M = 12 000 ⇒ Annale de Maths = 3 000 F CFA (et Physique = 2 000 F CFA).',
          steps: [
            { title: '1) Système 2×2', mathExpression: '3M + 2P = 13 000  (×2 ➔ 6M + 4P = 26 000)\n2M + 4P = 14 000', explanation: 'Élimination de P.' },
            { title: '2) Calcul de M', mathExpression: '4M = 26 000 − 14 000 = 12 000 ⇒ M = 3 000 F CFA', explanation: 'Vérif : 3×3000 + 2×2000 = 13 000 F.', subResult: '3 000 F CFA' },
          ],
        },
        {
          chapterId: 'math3-reperage-droites',
          partLabel: 'Exercice 2',
          title: 'Nature d’un triangle dans le repère',
          points: 6,
          difficulty: 3,
          prompt:
            'Dans un repère orthonormé, on place A(0 ; 0), B(8 ; 0) et C(4 ; 3).\nCalcule le périmètre exact du triangle isocèle ABC en unités.',
          hint: 'AB = 8 ; AC = √(4² + 3²) = 5 ; BC = √((4−8)² + 3²) = 5. Périmètre = 8 + 5 + 5.',
          correctAnswer: '18',
          explanationFinal: 'AC = BC = 5 et AB = 8, donc le périmètre vaut 5 + 5 + 8 = 18.',
          steps: [
            { title: '1) Longueurs des côtés', mathExpression: 'AB = 8\nAC = √(4² + 3²) = 5\nBC = √((−4)² + 3²) = 5', explanation: 'Triangle isocèle en C.' },
            { title: '2) Périmètre', mathExpression: 'P = 8 + 5 + 5 = 18', explanation: 'Entier exact.', subResult: '18' },
          ],
        },
        {
          chapterId: 'math3-sections-agrandissement',
          partLabel: 'Problème',
          title: 'Problème de Synthèse BEPC 2026 : Château d’eau conique',
          points: 8,
          difficulty: 4,
          prompt:
            'Un réservoir conique pointe en bas a une hauteur totale H = 12 m et un rayon de base R = 4 m (π = 3).\n1) Calcule sa capacité maximale V (en m³).\n2) On le remplit d’eau jusqu’à la hauteur h’ = 9 m depuis la pointe (k = 9/12 = 0,75).\nCalcule le volume d’eau V’ contenu (en m³).',
          hint: 'V = (1/3) × 3 × 16 × 12 = 192 m³. k = 3/4 ➔ k³ = 27/64. V’ = 192 × (27 ÷ 64) = 3 × 27.',
          correctAnswer: '81',
          unit: 'm³',
          explanationFinal: 'V = 192 m³ et V’ = (27/64) × 192 = 3 × 27 = 81 m³ (= 81 000 litres).',
          steps: [
            { title: '1) Capacité totale du cône', mathExpression: 'V = (1/3) × 3 × 4² × 12 = 16 × 12 = 192 m³', explanation: 'Réservoir plein.' },
            { title: '2) Rapport de réduction k', mathExpression: 'k = 9 ÷ 12 = 3/4 ⇒ k³ = (3/4)³ = 27/64', explanation: 'Cônes semblables.' },
            { title: '3) Volume d’eau', mathExpression: 'V’ = (27/64) × 192 = 27 × 3 = 81 m³', explanation: '192 ÷ 64 = 3 exactement.', subResult: '81 m³' },
          ],
        },
      ],
    },
  ]
);
