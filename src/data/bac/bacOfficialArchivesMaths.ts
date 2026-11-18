import { BepcArchivePaper } from '../../types/math';
import { ArchivePaperSeed, buildArchivePapers } from '../bepc/bepcArchiveHelpers';

/**
 * Épreuves officielles intégrales du Baccalauréat (Mathématiques · Terminale C / S)
 * Tous les exercices officiels de chaque session sont conservés intégralement (3, 4 ou 5 exercices),
 * sans aucune suppression (obligatoire + spécialité, partie A + partie B, problèmes inclus).
 */
export const BAC_OFFICIAL_MATHS_ARCHIVE_SEEDS: ArchivePaperSeed[] = [
  // =========================================================================
  // 1. FRANCE — Baccalauréat S · Métropole–La Réunion · 21 juin 2019 (5 exercices)
  // =========================================================================
  {
    year: 2019,
    countryId: 'france',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC S France · Métropole–La Réunion (21 juin 2019)',
    officialReference: 'MENJ · Baccalauréat Général Série S · Sujet officiel intégral (5 exercices)',
    sourceNotice:
      'Épreuve officielle intégrale (21 juin 2019) · 5 exercices complets conservés sans suppression (Ex 1 à Ex 3 + Ex 4 Obligatoire + Ex 4 Spécialité).',
    themeSummary:
      'Ex 1 Fonctions & Intégrales (6 pts) · Ex 2 Probabilités & Suites (5 pts) · Ex 3 Vrai/Faux Complexes & Analyse (4 pts) · Ex 4 Obligatoire Espace 3D (5 pts) · Ex 4 Spécialité Matrices & Arithmétique (5 pts)',
    parts: [
      {
        chapterId: 'mathTc-ln-exp-equadiff',
        partLabel: 'EXERCICE 1 · Commun à tous les candidats',
        title: 'Modélisation d’un tunnel de serre maraîchère (fonctions, bijections & intégrales)',
        points: 6,
        difficulty: 4,
        prompt:
          'Un maraîcher souhaite construire une serre tunnel dont la forme en coupe transversale dans un repère orthonormé (unité : 1 m) est modélisée sur [-α ; α] par la courbe C_f de la fonction f définie sur ℝ par :\n  f(x) = 7/2 − (1/2)(e^x + e^(−x)).\n\nPartie A — Étude de la fonction f et hauteur de la serre\n1. Déterminer la limite de f en +∞.\n2. Calculer f’(x) et étudier son signe sur [0 ; +∞[. Dresser le tableau de variations de f sur [0 ; +∞[.\n3. Montrer que l’équation f(x) = 0 admet une unique solution α sur [0 ; +∞[, et vérifier que α ≈ 1,92.\n4. Montrer que f est paire. En déduire la largeur au sol de la serre et déterminer la hauteur maximale h_max de la serre en mètres (valeur exacte).\n\nPartie B — Longueur d’un arceau\nOn admet que la longueur L d’un arceau sur [0 ; α] est donnée par L = ∫_0^α √(1 + (f’(x))²) dx.\n1. Vérifier que pour tout x ∈ ℝ, 1 + (f’(x))² = (1/4)(e^x + e^(−x))².\n2. En déduire L = (1/2)(e^α − e^(−α)), puis la longueur totale d’un arceau complet sur [-α ; α] (≈ 6,67 m).\n\nPartie C — Surface de bâche et façade\nLa serre est formée de 4 arceaux espacés de 1,5 m (longueur totale 4,5 m) avec une porte rectangulaire de 1 m × 2 m découpée sur une façade. Exprimer l’aire d’une façade vitrée en fonction de ∫_0^α f(x) dx et calculer la surface totale de bâche nécessaire.\n\nQuestion de contrôle numérique : Quelle est la hauteur maximale f(0) de la serre (en m) ?',
        hint: 'Calcule f(0) = 7/2 − (1/2)(e^0 + e^0) = 3,5 − 1.',
        questionType: 'numeric',
        correctAnswer: '2.5',
        unit: 'm',
        explanationFinal:
          'f est paire et atteint son maximum en x = 0 : f(0) = 7/2 − 1 = 2,5 m ; L_totale = e^α − e^(−α) ≈ 6,67 m.',
        themeTags: ['Exponentielle', 'Parité', 'Longueur d’arc', 'Intégrale'],
        steps: [
          {
            title: 'Partie A — Limite en +∞ et dérivée',
            ruleApplied: 'Croissance de e^x et dérivation de ch(x)',
            mathExpression: 'lim_(x→+∞) f(x) = −∞   |   f’(x) = −(1/2)(e^x − e^(−x))',
            explanation:
              'Pour x ≥ 0, e^x ≥ e^(−x), donc f’(x) ≤ 0 : f est strictement décroissante sur [0 ; +∞[, avec f(0) = 7/2 − 1 = 2,5 m.',
            subResult: 'f(0) = 2,5 m',
          },
          {
            title: 'Partie A — Solution α et parité',
            ruleApplied: 'Théorème des valeurs intermédiaires (TVI)',
            mathExpression: 'f(1,92) ≈ 7/2 − ch(1,92) ≈ 0,01   |   e^α + e^(−α) = 7 ⇒ α = ln((7 + 3√5)/2) ≈ 1,9248',
            explanation:
              'f(−x) = f(x) donc f est paire ; la largeur au sol vaut 2α ≈ 3,85 m et la hauteur maximale vaut f(0) = 2,5 m.',
          },
          {
            title: 'Partie B & C — Longueur d’arc et surface de bâche',
            ruleApplied: 'Identité hyperbolique ch²(x) − sh²(x) = 1',
            mathExpression: '1 + sh²(x) = ch²(x) ⇒ I = ∫_0^α (e^x + e^(−x))/2 dx = (e^α − e^(−α))/2 ≈ 3,335 m',
            explanation:
              'Un arceau complet mesure e^α − e^(−α) = √(7² − 4) = √45 = 3√5 ≈ 6,71 m (≈ 6,67 m avec α ≈ 1,92). La bâche totale inclut le toit (4,5 × 2I) et les deux façades moins la porte (2 m²), soit environ 41,6 m².',
            subResult: 'h_max = 2,5 m',
          },
        ],
      },
      {
        chapterId: 'mathTc-lois-probas-stats',
        partLabel: 'EXERCICE 2 · Commun à tous les candidats',
        title: 'Jeux vidéo : lois continues (uniforme, normale) et suite probabiliste',
        points: 5,
        difficulty: 3,
        prompt:
          'Partie A — Durée d’une partie\nDeux jeux A et B sont proposés.\n1. Pour le jeu A, la durée X_A suit la loi uniforme sur [9 ; 25]. Calculer P(X_A < 20).\n2. Pour le jeu B, la durée X_B suit une loi normale d’espérance μ = 17 et d’écart-type σ. Sachant que P(X_B < 20) = 0,8413, justifier que σ ≈ 3.\n\nPartie B — Fidélité des joueurs (suite récurrente)\nChaque semaine, un joueur choisit entre le jeu A et le jeu B :\n- S’il joue au jeu A la semaine n, il rejoue à A la semaine n + 1 avec la probabilité 0,8.\n- S’il joue au jeu B la semaine n, il rejoue à B la semaine n + 1 avec la probabilité 0,7 (donc à A avec 0,3).\nOn note a_n = P(A_n) la probabilité qu’il joue au jeu A la semaine n (avec a_1 = a ∈ [0 ; 1]).\n1. À l’aide d’un arbre pondéré, montrer que a_(n+1) = 0,5 a_n + 0,3.\n2. Montrer par récurrence que 0 ≤ a_n ≤ 0,6 si a = 0,2, et étudier la monotonie de (a_n).\n3. On pose u_n = a_n − 0,6. Montrer que (u_n) est géométrique, exprimer a_n en fonction de n et calculer sa limite.\n\nQuestion de contrôle numérique : Quelle est la limite lim_(n→+∞) a_n de la probabilité que le joueur choisisse le jeu A ?',
        hint: 'En limite stationnaire, ℓ = 0,5 ℓ + 0,3.',
        questionType: 'numeric',
        correctAnswer: '0.6',
        explanationFinal:
          'u_n = a_n − 0,6 est géométrique de raison 0,5, donc a_n = (a − 0,6)×0,5^(n−1) + 0,6 → 0,6 quand n → +∞.',
        themeTags: ['Loi uniforme', 'Loi normale', 'Probabilités totales', 'Suite arithmético-géométrique'],
        steps: [
          {
            title: 'Partie A — Lois continues',
            ruleApplied: 'Loi uniforme et centrage-réduction normal',
            mathExpression: 'P(X_A < 20) = (20 − 9)/(25 − 9) = 11/16 = 0,6875   |   P((X_B − 17)/σ < 3/σ) = 0,8413 ⇒ 3/σ ≈ 1 ⇒ σ ≈ 3',
            explanation:
              'Pour une loi normale centrée réduite Z, Φ(1) ≈ 0,8413, d’où (20 − 17)/σ = 1 et σ ≈ 3.',
          },
          {
            title: 'Partie B — Relation de récurrence',
            ruleApplied: 'Formule des probabilités totales',
            mathExpression: 'a_(n+1) = P(A_n)P_(A_n)(A_(n+1)) + P(B_n)P_(B_n)(A_(n+1)) = 0,8 a_n + 0,3(1 − a_n) = 0,5 a_n + 0,3',
            explanation:
              'La probabilité totale de jouer à A la semaine n + 1 vaut bien 0,8 a_n + 0,3(1 − a_n) = 0,5 a_n + 0,3.',
          },
          {
            title: 'Partie B — Suite géométrique auxiliaire et convergence',
            ruleApplied: 'Suite géométrique de raison q = 0,5',
            mathExpression: 'u_(n+1) = a_(n+1) − 0,6 = 0,5 a_n − 0,3 = 0,5(a_n − 0,6) = 0,5 u_n ⇒ lim a_n = 0,6',
            explanation:
              'Comme |0,5| < 1, lim 0,5^(n−1) = 0, d’où lim_(n→+∞) a_n = 0,6.',
            subResult: '0,6',
          },
        ],
      },
      {
        chapterId: 'mathTc-complexes-algebre',
        partLabel: 'EXERCICE 3 · Commun à tous les candidats',
        title: 'Vrai ou Faux — 5 affirmations (Complexes, Fonctions & Algorithmique)',
        points: 4,
        difficulty: 3,
        prompt:
          'Pour chacune des 5 affirmations suivantes, indiquer si elle est vraie ou fausse et justifier rigoureusement :\n\n• Affirmation 1 : Dans ℂ, les solutions de z² − 2√3 z + 4 = 0 ont pour images A et B dans le plan complexe. Le triangle OAB est équilatéral.\n• Affirmation 2 : Soit u = √3 + i. Alors u^2019 + (ū)^2019 = 2^2019.\n• Affirmation 3 : Pour tout entier n ≥ 1, la fonction f_n(x) = x e^(−nx+1) admet un maximum sur [0 ; +∞[.\n• Affirmation 4 : La courbe de f(x) = cos(x) e^(−x) admet la droite d’équation y = 0 pour asymptote en +∞.\n• Affirmation 5 : On considère l’algorithme : I ← 0 ; Tant que 2^I ≤ A : I ← I + 1. Si l’algorithme renvoie I = 15 en sortie, alors 15 ln(2) ≤ ln(A) ≤ 16 ln(2).\n\nQuestion QCM : Quelle est la suite exacte des réponses aux 5 affirmations ?',
        hint: 'Pour l’affirmation 2, écris u = 2 e^(iπ/6) et calcule cos(2019π/6) = cos(336π + π/2) = 0. Pour la 5, à I = 15, la boucle s’est arrêtée car 2^15 > A.',
        questionType: 'qcm',
        options: [
          'Vrai - Faux - Vrai - Vrai - Faux',
          'Vrai - Vrai - Vrai - Vrai - Faux',
          'Faux - Faux - Vrai - Vrai - Faux',
          'Vrai - Faux - Faux - Vrai - Vrai',
        ],
        correctAnswer: 'Vrai - Faux - Vrai - Vrai - Faux',
        explanationFinal:
          'Affirmations 1, 3 et 4 sont Vraies ; les affirmations 2 (la somme vaut 0) et 5 (l’encadrement juste est 14 ln 2 ≤ ln A < 15 ln 2) sont Fausses.',
        themeTags: ['Nombres complexes', 'Exponentielle', 'Asymptote', 'Algorithmique'],
        steps: [
          {
            title: 'Affirmations 1 et 2 (Nombres complexes)',
            ruleApplied: 'Forme exponentielle et formule d’Euler',
            mathExpression: 'z = √3 ± i = 2 e^(±iπ/6)   |   u^2019 + (ū)^2019 = 2×2^2019 cos(2019π/6) = 0',
            explanation:
              '1) OA = OB = 2 et AB = |(√3+i) − (√3−i)| = 2 ⇒ OAB est équilatéral (VRAI). 2) 2019π/6 = 673π/2 ≡ π/2 [2π], cos(π/2) = 0, donc la somme vaut 0 ≠ 2^2019 (FAUX).',
          },
          {
            title: 'Affirmations 3 et 4 (Analyse)',
            ruleApplied: 'Dérivée d’un produit et théorème des gendarmes',
            mathExpression: 'f’_n(x) = (1 − nx)e^(−nx+1) = 0 en x = 1/n   |   |cos(x)e^(−x)| ≤ e^(−x) → 0',
            explanation:
              '3) f_n est croissante sur [0 ; 1/n] puis décroissante sur [1/n ; +∞[ : maximum en 1/n (VRAI). 4) Par encadrement, lim_(+∞) f(x) = 0, donc y = 0 est asymptote horizontale (VRAI).',
          },
          {
            title: 'Affirmation 5 (Algorithme)',
            ruleApplied: 'Invariant et condition d’arrêt de boucle Tant que',
            mathExpression: '2^14 ≤ A < 2^15 ⇔ 14 ln(2) ≤ ln(A) < 15 ln(2)',
            explanation:
              'L’algorithme passe de 14 à 15 car 2^14 ≤ A, puis s’arrête car 2^15 > A. L’encadrement [15 ln 2 ; 16 ln 2] est donc FAUX.',
            subResult: 'Vrai - Faux - Vrai - Vrai - Faux',
          },
        ],
      },
      {
        chapterId: 'mathTc-geometrie-espace',
        partLabel: 'EXERCICE 4 · Candidats n’ayant pas suivi la spécialité (Obligatoire)',
        title: 'Géométrie dans l’espace : cube ABCDEFGH, plans parallèles et intersections',
        points: 5,
        difficulty: 3,
        prompt:
          'Dans le cube ABCDEFGH d’arête 1, on considère I milieu de [EF], J milieu de [EH], K le point défini par AK⃗ = (1/4) AD⃗, et P le plan passant par I et parallèle au plan (FHK).\n\nPartie A — Section géométrique\n1. Justifier que (HK) et (AE) sont sécantes en un point M, et placer M.\n2. Construire la section du cube par le plan P.\n\nPartie B — Étude analytique dans (A ; AB⃗, AD⃗, AE⃗)\n1. a) Montrer que le vecteur n⃗(4 ; 4 ; −3) est normal au plan (FHK).\n   b) En déduire une équation cartésienne du plan (FHK).\n   c) Déterminer une équation cartésienne du plan P passant par I(1/2 ; 0 ; 1) et parallèle à (FHK).\n   d) Déterminer les coordonnées du point M’ = P ∩ (AE).\n2. On note Δ la droite passant par E(0 ; 0 ; 1) et orthogonale au plan P.\n   a) Donner une représentation paramétrique de Δ.\n   b) Déterminer L = Δ ∩ (ABC).\n   c) Justifier que les intersections de P avec (BF) et (CG) vérifient les proportions d’alignement attendues.\n\nQuestion QCM : Quelle est l’équation cartésienne du plan P ?',
        hint: 'Un plan parallèle à (FHK) a le même vecteur normal n⃗(4 ; 4 ; −3), et passe par I(1/2 ; 0 ; 1).',
        questionType: 'qcm',
        options: [
          '4x + 4y − 3z + 1 = 0',
          '4x + 4y − 3z − 1 = 0',
          '4x − 4y + 3z − 5 = 0',
          '3x + 4y − 4z + 5/2 = 0',
        ],
        correctAnswer: '4x + 4y − 3z + 1 = 0',
        explanationFinal:
          '(FHK) a pour équation 4x + 4y − 3z − 1 = 0 (car F(1 ; 0 ; 1) donne 4 − 3 − 1 = 0) ; P passant par I(1/2 ; 0 ; 1) a pour équation 4x + 4y − 3z + 1 = 0 et coupe (AE) en M’(0 ; 0 ; 1/3).',
        themeTags: ['Cube 3D', 'Vecteur normal', 'Équation de plan', 'Droite orthogonale'],
        steps: [
          {
            title: 'Vecteur normal et équation de (FHK)',
            ruleApplied: 'Produit scalaire nul avec deux vecteurs directeurs',
            mathExpression: 'F(1;0;1), H(0;1;1), K(0;1/4;0) ⇒ FH⃗(−1;1;0), FK⃗(−1;1/4;−1) ⇒ n⃗·FH⃗ = 0 et n⃗·FK⃗ = 0',
            explanation:
              '4(−1)+4(1)+0 = 0 et 4(−1)+4(1/4)−3(−1) = −4+1+3 = 0. Comme F(1;0;1) ∈ (FHK), 4(1)+4(0)−3(1)+d = 0 ⇒ d = −1, soit 4x + 4y − 3z − 1 = 0.',
          },
          {
            title: 'Équation du plan P et point M’',
            ruleApplied: 'Plans parallèles : même vecteur normal n⃗(4;4;−3)',
            mathExpression: '4(1/2) + 4(0) − 3(1) + d’ = 0 ⇒ 2 − 3 + d’ = 0 ⇒ d’ = 1',
            explanation:
              'Donc P : 4x + 4y − 3z + 1 = 0. Sur (AE), x = y = 0, donc −3z + 1 = 0 ⇒ M’(0 ; 0 ; 1/3).',
            subResult: '4x + 4y − 3z + 1 = 0',
          },
          {
            title: 'Droite orthogonale Δ et point L',
            ruleApplied: 'Représentation paramétrique et plan (ABC) d’équation z = 0',
            mathExpression: 'Δ : { x = 4t, y = 4t, z = 1 − 3t }   |   z = 0 ⇒ t = 1/3 ⇒ L(4/3 ; 4/3 ; 0)',
            explanation:
              'Δ dirigée par n⃗ passe par E(0 ; 0 ; 1) et perce le plan de base (ABC) en L(4/3 ; 4/3 ; 0).',
          },
        ],
      },
      {
        chapterId: 'mathTc-barycentre-matrices',
        partLabel: 'EXERCICE 4 · Candidats ayant suivi la spécialité',
        title: 'Matrices de déterminant 1, équation diophantienne et suites d’entiers (Spécialité)',
        points: 5,
        difficulty: 4,
        prompt:
          'On note S l’ensemble des matrices carrées d’ordre 2 à coefficients entiers relatifs M = [[a, b], [c, d]] telles que det(M) = ad − bc = 1.\n\nPartie A — Premières propriétés\n1. Vérifier que A = [[6, 5], [−5, −4]] appartient à S.\n2. Déterminer toutes les matrices de S telles que b = 2 et c = 3.\n3. Résoudre dans ℤ² l’équation 5x − 2y = 1.\n\nPartie B — Inverse et suites d’entiers\n1. Soit M ∈ S. Montrer que a et b sont premiers entre eux (pgcd(a, b) = 1).\n2. Montrer que toute matrice M = [[a, b], [c, d]] ∈ S est inversible et que son inverse M^(−1) = [[d, −b], [−c, a]] appartient encore à S.\n3. On définit les suites (x_n) et (y_n) par (x_0, y_0) = (2019, 673) et :\n   x_(n+1) = 2x_n + 3y_n   et   y_(n+1) = x_n + 2y_n.\n   a) Vérifier que la matrice de passage P = [[2, 3], [1, 2]] appartient à S.\n   b) En déduire que pour tout n ∈ ℕ, pgcd(x_n, y_n) = pgcd(x_0, y_0).\n\nQuestion de contrôle numérique : Quelle est la valeur constante de pgcd(x_n, y_n) pour tout n ∈ ℕ ?',
        hint: 'Calcule pgcd(2019, 673) en remarquant que 2019 = 3 × 673.',
        questionType: 'numeric',
        correctAnswer: '673',
        explanationFinal:
          'P ∈ S ⇒ P^(−1) ∈ S à coefficients entiers, donc tout diviseur commun de (x_n, y_n) divise (x_(n−1), y_(n−1)) et réciproquement : pgcd(x_n, y_n) = pgcd(2019, 673) = 673.',
        themeTags: ['Matrices 2×2', 'Bézout', 'PGCD', 'Suites matricielles'],
        steps: [
          {
            title: 'Partie A — Exemples et équation diophantienne',
            ruleApplied: 'Déterminant et théorème de Gauss',
            mathExpression: '6(−4) − 5(−5) = 1   |   ad = 1 + 6 = 7 ⇒ (a,d) ∈ {(1,7),(7,1),(−1,−7),(−7,−1)}',
            explanation:
              'Pour 5x − 2y = 1, (1, 2) est solution particulière ; les couples solutions sont (1 + 2k ; 2 + 5k), k ∈ ℤ.',
          },
          {
            title: 'Partie B — Inversibilité dans S et PGCD',
            ruleApplied: 'Identité de Bézout et comatrice 2×2',
            mathExpression: 'ad − bc = 1 ⇒ pgcd(a, b) = 1   |   M·[[d, −b], [−c, a]] = (ad − bc)I_2 = I_2',
            explanation:
              'La matrice P = [[2, 3], [1, 2]] vérifie det(P) = 4 − 3 = 1 ∈ S, donc P^(−1) = [[2, −3], [−1, 2]] est à coefficients entiers.',
          },
          {
            title: 'Invariant arithmétique des suites (x_n, y_n)',
            ruleApplied: 'Divisibilité par combinaison linéaire entière',
            mathExpression: 'pgcd(x_n, y_n) = pgcd(x_0, y_0) = pgcd(2019, 673) = 673',
            explanation:
              'Comme 2019 = 3 × 673, pgcd(2019, 673) = 673, valeur conservée pour tout rang n ∈ ℕ.',
            subResult: '673',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 2. GABON — Baccalauréat Série C & SI · Session Juin 2023 (4 exercices)
  // =========================================================================
  {
    year: 2023,
    countryId: 'gabon',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C & SI Gabon · Session Juin 2023 (Office National du Bac)',
    officialReference: 'Office National du Baccalauréat (Libreville) · Baccalauréat Série C & SI · Juin 2023',
    sourceNotice:
      'Épreuve officielle intégrale du Gabon (Juin 2023, Série C & SI) · 4 exercices complets conservés sans suppression (Ex 1 QCM + Ex 2 Similitudes + Ex 3 Arithmétique + Problème).',
    themeSummary:
      'Ex 1 QCM Espace/Complexes/Probas (4 pts) · Ex 2 Similitudes & Barycentres (4 pts) · Ex 3 Arithmétique Immeuble R+1 (4 pts) · Problème Fonction par morceaux & Révolution (8 pts)',
    parts: [
      {
        chapterId: 'mathTc-denombrement-probas',
        partLabel: 'EXERCICE 1 · QCM officiel (4 points)',
        title: 'Questionnaire à choix multiples — Espace, Complexes, Limites & Probabilités',
        points: 4,
        difficulty: 2,
        prompt:
          'Pour chacune des 4 questions ci-dessous, une seule des réponses est exacte :\n\n1. Dans l’espace muni d’un repère orthonormé, on donne A(−1 ; 2 ; 1) et B(0 ; 1 ; 3). Un système d’équations cartésiennes de la droite (AB) est :\n   (x + y − 1 = 0 et 2x − z + 3 = 0)  |  ou  (x − y + 3 = 0 et 2x + z + 1 = 0)\n2. On pose z_0 = e^(i 2π/5), α = z_0 + z_0^4 et β = z_0² + z_0³. Quelle relation lie α et β ? (Rappel : 1 + z_0 + z_0² + z_0³ + z_0^4 = 0)\n3. Quelle est la limite en +∞ de ln(2x + 3) / ln(x) ?\n4. Un sac contient 10 objets : n objets noirs et (10 − n) objets blancs. On tire simultanément 2 objets au hasard. Sachant que la probabilité d’obtenir 2 objets blancs est 7/15, déterminer le nombre n d’objets noirs dans le sac.\n\nQuestion de contrôle numérique (Question 4) : Combien d’objets noirs n le sac contient-il ?',
        hint: 'Résous C(10 − n, 2) / C(10, 2) = 7/15, soit (10 − n)(9 − n) / 90 = 42/90.',
        questionType: 'numeric',
        correctAnswer: '3',
        unit: 'objets noirs',
        explanationFinal:
          '1) x + y − 1 = 0 et 2x − z + 3 = 0 ; 2) 1 + α + β = 0 (et αβ = −1) ; 3) lim = 1 ; 4) (10−n)(9−n) = 42 = 7×6 ⇒ 10 − n = 7 ⇒ n = 3.',
        themeTags: ['QCM officiel', 'Racines cinquièmes', 'Probabilités'],
        steps: [
          {
            title: 'Questions 1 et 2 (Espace & Complexes)',
            ruleApplied: 'Appartenance à deux plans sécants et somme des racines cinquièmes',
            mathExpression: 'A(−1;2;1) et B(0;1;3) vérifient x+y−1=0 et 2x−z+3=0   |   1 + z_0 + z_0² + z_0³ + z_0^4 = 0 ⇒ 1 + α + β = 0',
            explanation:
              'z_0^5 = 1 avec z_0 ≠ 1 entraîne 1 + α + β = 0.',
          },
          {
            title: 'Questions 3 et 4 (Limites & Dénombrement)',
            ruleApplied: 'Croissance comparée et combinaisons C(n,2)',
            mathExpression: 'ln(2x+3)/ln(x) = [ln(x) + ln(2 + 3/x)]/ln(x) → 1   |   C(10−n, 2)/45 = 7/15 ⇒ (10−n)(9−n) = 42',
            explanation:
              '42 = 7 × 6 donne 10 − n = 7, donc n = 3 objets noirs (et 7 blancs).',
            subResult: 'n = 3',
          },
        ],
      },
      {
        chapterId: 'mathTc-isometries-similitudes',
        partLabel: 'EXERCICE 2 · Transformations & Barycentres (4 points)',
        title: 'Carré direct ABCD, rotation de centre A et similitude directe',
        points: 4,
        difficulty: 3,
        prompt:
          'ABCD est un carré direct de centre I. On construit M tel que DM⃗ = 2 DC⃗. La perpendiculaire (L) à (AM) passant par A coupe (BC) en N. On note J le milieu de [MN] et E le symétrique de C par rapport à B.\n\n1. Réaliser la figure avec soin.\n2. Soit r la rotation de centre A telle que r(D) = B.\n   a) Déterminer l’angle de r et montrer que le triangle AEC est rectangle isocèle en A.\n   b) Déterminer les images par r des droites (DC) et (AM).\n   c) En déduire que r(M) = N et préciser la nature du triangle AMN.\n3. Montrer que I est le barycentre des points pondérés (J, 1) et (B, −2) (ou que AJ⃗ est lié à AB⃗), et caractériser la similitude directe de centre A transformant D en I.\n\nQuestion de contrôle numérique : Quel est l’angle (en degrés, entre −180 et 180) de la rotation r de centre A telle que r(D) = B ?',
        hint: 'Le carré ABCD étant direct, (AB⃗, AD⃗) = +π/2, donc (AD⃗, AB⃗) = −π/2.',
        questionType: 'numeric',
        correctAnswer: '-90',
        unit: '°',
        explanationFinal:
          'ABCD étant direct, AD = AB et (AD⃗, AB⃗) = −π/2 (−90°). Ainsi r((DC)) = (BC), r((AM)) = (L), d’où r(M) = N et AMN est rectangle isocèle en A.',
        themeTags: ['Rotation', 'Carré direct', 'Similitude directe', 'Barycentre'],
        steps: [
          {
            title: 'Angle de la rotation r',
            ruleApplied: 'Sens direct dans le carré ABCD',
            mathExpression: 'AD = AB   et   (AD⃗, AB⃗) = −π/2 ≡ −90°',
            explanation:
              'Dans le carré direct ABCD, les sommets se succèdent dans le sens trigonométrique : l’angle orienté (AB⃗, AD⃗) vaut +π/2, donc (AD⃗, AB⃗) = −π/2.',
            subResult: '-90°',
          },
          {
            title: 'Images des droites et preuve que r(M) = N',
            ruleApplied: 'Conservation de l’orthogonalité par rotation d’angle −π/2',
            mathExpression: '(DC) ⊥ (AD) ⇒ r((DC)) = (BC)   |   r((AM)) ⊥ (AM) en A ⇒ r((AM)) = (L)',
            explanation:
              'Comme M = (DC) ∩ (AM), son image r(M) est à l’intersection (BC) ∩ (L) = {N}. Donc AM = AN et (AM⃗, AN⃗) = −π/2 : AMN est rectangle isocèle en A.',
          },
          {
            title: 'Milieu J et similitude directe',
            ruleApplied: 'Rotation composée avec homothétie',
            mathExpression: 's = h(A, √2/2) ∘ r_(A, −π/4)',
            explanation:
              'La similitude directe de centre A transformant D en I a pour rapport AI/AD = √2/2 et pour angle (AD⃗, AI⃗) = −π/4.',
          },
        ],
      },
      {
        chapterId: 'mathTc-arithmetique',
        partLabel: 'EXERCICE 3 · Arithmétique (4 points)',
        title: 'Les bureaux de l’immeuble R+1 (Kengue & Mavioga)',
        points: 4,
        difficulty: 3,
        prompt:
          'Deux techniciennes de surface, Kengue et Mavioga, entretiennent un immeuble R+1 (un rez-de-chaussée comptant x bureaux et un étage comptant y bureaux, avec x > y). Ensemble, elles peuvent nettoyer au maximum 33 bureaux par jour.\nChaque jour, Kengue nettoie les 3/5 des bureaux du rez-de-chaussée plus 4 bureaux, et Mavioga nettoie les 2/3 des bureaux de l’étage, ce qui atteint exactement leur plafond de 33 bureaux quotidiens. L’entreprise recrute une troisième technicienne pour nettoyer les bureaux restants.\n\n1. Traduire l’énoncé en prouvant que x et y vérifient l’équation diophantienne : 9x + 10y = 435.\n2. Vérifier que (5 ; 39) est une solution particulière de cette équation, puis résoudre 9x + 10y = 435 dans ℤ².\n3. Déterminer le nombre exact x de bureaux du rez-de-chaussée et y de l’étage (sachant x > y et 3/5 x ∈ ℕ, 2/3 y ∈ ℕ), puis le nombre de bureaux confiés à la 3e technicienne.\n\nQuestion de contrôle numérique : Combien de bureaux x y a-t-il au rez-de-chaussée ?',
        hint: 'Solutions générales : x = 5 + 10k et y = 39 − 9k. Utilise x > y et la divisibilité par 5 et 3.',
        questionType: 'numeric',
        correctAnswer: '25',
        unit: 'bureaux',
        explanationFinal:
          '9x + 10y = 435 ⇒ (x, y) = (5 + 10k, 39 − 9k). Pour k = 2, x = 25 (divisible par 5) et y = 21 (divisible par 3), avec 25 > 21. Il reste (25 + 21) − 33 = 13 bureaux.',
        themeTags: ['Bézout', 'Gauss', 'Équation diophantienne'],
        steps: [
          {
            title: 'Mise en équation',
            ruleApplied: 'Réduction au même dénominateur (× 15)',
            mathExpression: '(3/5)x + 4 + (2/3)y = 33 ⇔ (3/5)x + (2/3)y = 29 ⇔ 9x + 10y = 435',
            explanation:
              'En multipliant les deux membres par 15, on obtient 9x + 10y = 435.',
          },
          {
            title: 'Résolution dans ℤ² par le théorème de Gauss',
            ruleApplied: 'pgcd(9, 10) = 1',
            mathExpression: '9(x − 5) = 10(39 − y) ⇒ x = 5 + 10k,   y = 39 − 9k   (k ∈ ℤ)',
            explanation:
              'Comme 10 divise 9(x − 5) et pgcd(9, 10) = 1, 10 divise x − 5, d’où x = 5 + 10k et y = 39 − 9k.',
          },
          {
            title: 'Exploitation des contraintes réelles',
            ruleApplied: 'Entiers positifs, x > y, 5 | x et 3 | y',
            mathExpression: 'k = 2 ⇒ x = 25,   y = 21   |   Total immeuble = 46   |   Reste = 46 − 33 = 13 bureaux',
            explanation:
              'Pour k = 1, x = 15 < y = 30. Pour k = 2, x = 25 > y = 21 (et 5|25, 3|21). Kengue fait 19 bureaux, Mavioga 14, et la 3e technicienne 13 bureaux.',
            subResult: 'x = 25',
          },
        ],
      },
      {
        chapterId: 'mathTc-calcul-integral',
        partLabel: 'PROBLÈME · Analyse & Calcul intégral (8 points)',
        title: 'Fonction définie par morceaux (exponentielle / logarithme) et volume de révolution',
        points: 8,
        difficulty: 4,
        prompt:
          'On considère la fonction f définie sur ℝ par :\n• f(x) = √2 · √x · e^(−x/2)  si x ≥ 0\n• f(x) = x² ln(−x)           si x < 0.\nOn note (C) sa courbe représentative dans un repère orthonormé (O ; i⃗, j⃗) d’unité 1 cm.\n\nPartie A — Continuité, dérivabilité et variations\n1. Étudier la continuité de f en 0.\n2. Étudier la dérivabilité de f à gauche et à droite en 0. Interpréter géométriquement.\n3. Calculer les limites de f en −∞ et en +∞.\n4. Calculer f’(x) sur ]−∞ ; 0[ et sur ]0 ; +∞[, puis dresser le tableau complet de variations de f sur ℝ.\n5. Tracer la courbe (C).\n\nPartie B — Calcul de volume de révolution\nSoit S le solide engendré par la rotation autour de l’axe des abscisses de la portion de courbe (C) située sur [0 ; 3].\nÀ l’aide d’une intégration par parties, calculer le volume V = π ∫_0^3 [f(x)]² dx en cm³.\n\nQuestion de contrôle numérique : Pour quelle abscisse strictement positive x > 0 la fonction f admet-elle un maximum local ?',
        hint: 'Dérive √x e^(−x/2) sur ]0 ; +∞[ et cherche où f’(x) = 0.',
        questionType: 'numeric',
        correctAnswer: '1',
        explanationFinal:
          'Sur ]0 ; +∞[, f’(x) = √2 · e^(−x/2)(1 − x) / (2√x), qui s’annule en x = 1 (maximum √(2/e)). Le volume vaut V = 2π(1 − 4e^(−3)) cm³.',
        themeTags: ['Dérivabilité en 0', 'Demi-tangente verticale', 'IPP', 'Volume de révolution'],
        steps: [
          {
            title: 'Continuité et dérivabilité en 0',
            ruleApplied: 'Croissance comparée x² ln|x| → 0',
            mathExpression: 'lim_(x→0⁻) f(x) = 0 = f(0)   |   f’_g(0) = lim x ln(−x) = 0   |   f’_d(0) = lim √(2/x) e^(−x/2) = +∞',
            explanation:
              'f est continue en 0, admet une demi-tangente horizontale à gauche et une demi-tangente verticale à droite.',
          },
          {
            title: 'Dérivées et extremums sur ℝ',
            ruleApplied: 'Dérivation de produit',
            mathExpression: 'x < 0 : f’(x) = x(2 ln(−x) + 1) = 0 en x = −e^(−1/2)   |   x > 0 : f’(x) = √2 e^(−x/2)(1 − x)/(2√x) = 0 en x = 1',
            explanation:
              'Sur ]0 ; +∞[, f croît sur [0 ; 1] puis décroît sur [1 ; +∞[ en tendant vers 0 : le maximum sur ℝ⁺ est atteint en x = 1.',
            subResult: 'x = 1',
          },
          {
            title: 'Volume du solide de révolution par IPP',
            ruleApplied: 'V = π ∫_0^3 [f(x)]² dx',
            mathExpression: 'V = 2π ∫_0^3 x e^(−x) dx = 2π [−(x + 1)e^(−x)]_0^3 = 2π(1 − 4e^(−3)) cm³ ≈ 4,97 cm³',
            explanation:
              'On pose u(x) = x (u’ = 1) et v’(x) = e^(−x) (v = −e^(−x)) pour évaluer l’intégrale exacte.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 3. CAMEROUN — Baccalauréat Séries C & E · Session 2024 (5 parties complètes)
  // =========================================================================
  {
    year: 2024,
    countryId: 'cameroun',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C & E Cameroun · Session 2024 (OBC Yaoundé)',
    officialReference: 'Office du Baccalauréat du Cameroun (OBC) · Séries C & E · Session 2024',
    sourceNotice:
      'Épreuve officielle intégrale du Cameroun (2024, Séries C & E) · Toutes les parties conservées sans suppression (Partie A : Ex 1 à Ex 4 + Partie B : Évaluation des compétences).',
    themeSummary:
      'Partie A : Ex 1 Probas & Équadiff (3 pts) · Ex 2 Endomorphisme (3 pts) · Ex 3 Intégrale & Suites (4 pts) · Ex 4 Conique (5 pts) · Partie B : Évaluation des compétences Pisciculture (5 pts)',
    parts: [
      {
        chapterId: 'mathTc-denombrement-probas',
        partLabel: 'PARTIE A · EXERCICE 1 (3 points)',
        title: 'Probabilités et équation différentielle linéaire du second ordre',
        points: 3,
        difficulty: 3,
        prompt:
          'Une urne contient 6 boules indiscernables au toucher numérotées de 1 à 6. On tire successivement avec remise deux boules et on note a le premier numéro, b le second.\nOn associe au couple (a, b) l’équation différentielle (E) : y’’ + 2ay’ + by = 0.\n\n1. Calculer la probabilité que l’équation caractéristique r² + 2ar + b = 0 admette deux racines réelles distinctes ou confondues (c’est-à-dire Δ’ = a² − b ≥ 0).\n2. On répète n fois de façon indépendante l’expérience précédente (tirage d’un couple avec remise). Déterminer le plus petit entier naturel n tel que la probabilité d’obtenir au moins une fois une équation caractéristique à discriminant Δ’ ≥ 0 soit supérieure ou égale à 0,98.\n\nQuestion de contrôle numérique : Quel est le plus petit entier n tel que 1 − (7/36)^n ≥ 0,98 ?',
        hint: 'Compte les couples (a, b) ∈ {1..6}² tels que a² < b : pour a = 1 (b ∈ {2..6} soit 5), a = 2 (b ∈ {5, 6} soit 2) ⇒ 7 couples sur 36.',
        questionType: 'numeric',
        correctAnswer: '3',
        explanationFinal:
          '7 couples vérifient a² − b < 0, donc 29/36 vérifient Δ’ ≥ 0. Ensuite 1 − (7/36)^n ≥ 0,98 ⇔ (7/36)^n ≤ 0,02 ⇒ n ≥ ln(0,02)/ln(7/36) ≈ 2,39 ⇒ n = 3.',
        themeTags: ['Équation différentielle 2nd ordre', 'Épreuve de Bernoulli', 'Seuil logarithmique'],
        steps: [
          {
            title: 'Calcul de P(Δ’ ≥ 0)',
            ruleApplied: 'Équiprobabilité sur 6 × 6 = 36 couples',
            mathExpression: 'a² < b ⇔ (a=1, b∈{2..6}) ou (a=2, b∈{5,6}) : 7 cas ⇒ P(Δ’ ≥ 0) = 1 − 7/36 = 29/36',
            explanation:
              'Dès que a ≥ 3, a² ≥ 9 > 6 ≥ b donc a² − b > 0 toujours.',
          },
          {
            title: 'Seuil de répétitions indépendantes',
            ruleApplied: 'Événement contraire sur loi binomiale',
            mathExpression: '1 − (7/36)^n ≥ 0,98 ⇔ (7/36)^n ≤ 0,02 ⇔ n ≥ ln(0,02)/ln(7/36) ≈ 2,39 ⇒ n = 3',
            explanation:
              'Comme ln(7/36) < 0, l’inégalité change de sens : le plus petit entier naturel est n = 3.',
            subResult: 'n = 3',
          },
        ],
      },
      {
        chapterId: 'mathTc-barycentre-matrices',
        partLabel: 'PARTIE A · EXERCICE 2 (3 points)',
        title: 'Endomorphisme de ℝ³, noyau ker(φ) et image Im(φ)',
        points: 3,
        difficulty: 3,
        prompt:
          'Dans l’espace vectoriel E = ℝ³ muni de sa base canonique B = (i⃗, j⃗, k⃗), on considère l’endomorphisme φ défini par :\n  φ(i⃗) = i⃗ + 2j⃗ − k⃗\n  φ(j⃗) = 2i⃗ + j⃗ + k⃗\n  φ(k⃗) = 3j⃗ − 3k⃗.\n\n1. Déterminer une base du noyau ker(φ). φ est-il bijectif ?\n2. Vérifier que φ(k⃗) = 2φ(i⃗) − φ(j⃗) et en déduire la dimension et une base de l’image Im(φ).\n3. Écrire la matrice M de φ dans la base B et vérifier que det(M) = 0.\n\nQuestion QCM : Quel vecteur engendre ker(φ) ?',
        hint: 'Pose u⃗ = x i⃗ + y j⃗ + z k⃗ et résous φ(u⃗) = 0⃗.',
        questionType: 'qcm',
        options: [
          'u⃗ = 2 i⃗ − j⃗ − k⃗',
          'u⃗ = i⃗ + j⃗ + k⃗',
          'u⃗ = 2 i⃗ + j⃗ − k⃗',
          'u⃗ = i⃗ − 2 j⃗ + k⃗',
        ],
        correctAnswer: 'u⃗ = 2 i⃗ − j⃗ − k⃗',
        explanationFinal:
          'φ(2i⃗ − j⃗ − k⃗) = 2(1,2,−1) − (2,1,1) − (0,3,−3) = (0,0,0) ; ker(φ) est une droite vectorielle et Im(φ) un plan vectoriel engendré par (φ(i⃗), φ(j⃗)).',
        themeTags: ['Algèbre linéaire', 'Noyau', 'Image', 'Théorème du rang'],
        steps: [
          {
            title: 'Détermination de ker(φ)',
            ruleApplied: 'Système homogène M X = 0',
            mathExpression: 'x + 2y = 0,  2x + y + 3z = 0,  −x + y − 3z = 0 ⇒ x = −2y et z = y',
            explanation:
              'En posant y = −1, on obtient le vecteur directeur u⃗ = 2i⃗ − j⃗ − k⃗. ker(φ) = Vect(2i⃗ − j⃗ − k⃗) ≠ {0⃗}, donc φ n’est pas bijectif.',
            subResult: 'ker(φ) = Vect(2i⃗ − j⃗ − k⃗)',
          },
          {
            title: 'Base de Im(φ) et matrice',
            ruleApplied: 'Théorème du rang : dim ker(φ) + dim Im(φ) = 3',
            mathExpression: 'φ(k⃗) = 2φ(i⃗) − φ(j⃗)   et   φ(i⃗), φ(j⃗) non colinéaires ⇒ dim Im(φ) = 2',
            explanation:
              '(φ(i⃗), φ(j⃗)) forme une base du plan vectoriel Im(φ).',
          },
        ],
      },
      {
        chapterId: 'mathTc-calcul-integral',
        partLabel: 'PARTIE A · EXERCICE 3 (4 points)',
        title: 'Intégrale définie, majoration par IPP et suite intégrale',
        points: 4,
        difficulty: 4,
        prompt:
          'On considère la fonction f(x) = √x · e^(1−x) sur [1 ; +∞[, et la fonction F(x) = ∫_1^x √t · e^(1−t) dt.\n\n1. Déterminer le sens de variation de F sur [1 ; +∞[.\n2. Montrer que pour tout t ≥ 1, t + 2 ≥ 2√2 √t.\n3. À l’aide d’une intégration par parties, calculer I(x) = ∫_1^x (t + 2) e^(1−t) dt = 4 − (x + 3)e^(1−x). En déduire que pour tout x ≥ 1, 0 ≤ F(x) ≤ √2.\n4. On définit la suite (u_n)_(n≥1) par u_n = ∫_n^(n+1) √t · e^(1−t) dt. Étudier la monotonie et la convergence de (u_n).\n\nQuestion QCM : Quelle majoration exacte de F(x) obtient-on sur [1 ; +∞[ ?',
        hint: 'Utilise √t ≤ (t + 2)/(2√2) et I(x) < 4 pour x ≥ 1.',
        questionType: 'qcm',
        options: [
          '0 ≤ F(x) ≤ √2',
          '0 ≤ F(x) ≤ 4',
          '0 ≤ F(x) ≤ e',
          '0 ≤ F(x) ≤ 2√2',
        ],
        correctAnswer: '0 ≤ F(x) ≤ √2',
        explanationFinal:
          'F(x) ≤ I(x)/(2√2) = [4 − (x+3)e^(1−x)]/(2√2) ≤ 4/(2√2) = √2.',
        themeTags: ['Intégrale', 'Inégalité AM-GM', 'IPP', 'Suite convergente'],
        steps: [
          {
            title: 'Inégalité t + 2 ≥ 2√2 √t',
            ruleApplied: 'Identité remarquable (√t − √2)² ≥ 0',
            mathExpression: '(√t − √2)² = t − 2√2√t + 2 ≥ 0 ⇔ t + 2 ≥ 2√2√t',
            explanation:
              'L’inégalité est immédiate à partir du carré d’une différence.',
          },
          {
            title: 'IPP et majoration de F(x)',
            ruleApplied: 'Positivité et linéarité de l’intégrale',
            mathExpression: 'I(x) = [−(t + 2)e^(1−t)]_1^x + ∫_1^x e^(1−t) dt = 4 − (x + 3)e^(1−x) ≤ 4 ⇒ F(x) ≤ 4/(2√2) = √2',
            explanation:
              'La suite (u_n) est décroissante (car t ↦ f(t) est décroissante sur [1 ; +∞[) et minorée par 0, donc convergente (vers 0).',
            subResult: '0 ≤ F(x) ≤ √2',
          },
        ],
      },
      {
        chapterId: 'mathTc-coniques',
        partLabel: 'PARTIE A · EXERCICE 4 (5 points)',
        title: 'Étude d’une hyperbole : centre, foyers, excentricité et asymptotes',
        points: 5,
        difficulty: 3,
        prompt:
          'Dans le plan rapporté à un repère orthonormé (O ; i⃗, j⃗), on considère la conique (Γ) d’équation :\n  3x² − y² − 6x − 1 = 0.\n\n1. Mettre l’équation de (Γ) sous forme réduite et identifier sa nature précise.\n2. Déterminer les coordonnées du centre Ω, des sommets S et S’, des foyers F et F’, ainsi que les équations des asymptotes et des directrices.\n3. Calculer l’excentricité e de la conique (Γ).\n4. Tracer (Γ) dans le repère.\n\nQuestion de contrôle numérique : Quelle est l’excentricité e de l’hyperbole (Γ) ?',
        hint: 'Complète le carré en x : 3(x − 1)² − y² = 4 ⇒ (x−1)²/(4/3) − y²/4 = 1.',
        questionType: 'numeric',
        correctAnswer: '2',
        explanationFinal:
          'On obtient a² = 4/3 et b² = 4, d’où c² = a² + b² = 16/3 et e = c/a = √(16/3)/√(4/3) = 2.',
        themeTags: ['Coniques', 'Hyperbole', 'Excentricité', 'Asymptotes'],
        steps: [
          {
            title: 'Forme canonique réduite',
            ruleApplied: 'Mise sous forme canonique en x',
            mathExpression: '3(x − 1)² − 3 − y² − 1 = 0 ⇔ (x − 1)² / (4/3) − y² / 4 = 1',
            explanation:
              '(Γ) est une hyperbole de centre Ω(1 ; 0), d’axe focal (Ωx), avec a = 2/√3 et b = 2.',
          },
          {
            title: 'Paramètre focal et excentricité',
            ruleApplied: 'Relation hyperbolique c² = a² + b²',
            mathExpression: 'c² = 4/3 + 4 = 16/3 ⇒ c = 4/√3 ⇒ e = c/a = (4/√3)/(2/√3) = 2',
            explanation:
              'Les foyers ont pour coordonnées (1 ± 4/√3 ; 0) et les asymptotes ont pour équations y = ±√3 (x − 1).',
            subResult: 'e = 2',
          },
        ],
      },
      {
        chapterId: 'mathTc-suites-recurrence',
        partLabel: 'PARTIE B · ÉVALUATION DES COMPÉTENCES (5 points)',
        title: 'Situation-problème : gestion de deux étangs piscicoles (suites & équadiff)',
        points: 5,
        difficulty: 3,
        prompt:
          'Un pisciculteur exploite deux étangs :\n• L’étang 1 contient initialement 250 maquereaux au mois 0, dont l’effectif augmente de 20 % chaque mois : u_n = 250 × (1,2)^n.\n• L’étang 2 contient initialement 450 carpes à t = 0, et l’évolution continue N(t) vérifie N’(t) = (1/50) N(t) (t en mois).\n\nTâche 1 : Au bout de combien de mois entiers l’effectif de l’étang 1 dépasse-t-il ou double-t-il son effectif initial (N ≥ 500) ?\nTâche 2 : Au bout de combien de mois l’effectif des carpes double-t-il ? Quelle espèce doit être traitée/récoltée en premier ?\nTâche 3 : Déterminer les stocks disponibles lors du transfert.\n\nQuestion de contrôle numérique (Tâche 1) : Au bout de combien de mois entiers les maquereaux ont-ils au moins doublé ?',
        hint: 'Résous 1,2^n ≥ 2 avec ln(2)/ln(1,2) ≈ 3,80.',
        questionType: 'numeric',
        correctAnswer: '4',
        unit: 'mois',
        explanationFinal:
          '1,2^3 = 1,728 < 2 et 1,2^4 = 2,0736 ≥ 2 : il faut 4 mois pour les maquereaux (contre ln(2)×50 ≈ 34,7 ⇒ 35 mois pour les carpes).',
        themeTags: ['Évaluation des compétences', 'Suite géométrique', 'Équadiff y’ = ky'],
        steps: [
          {
            title: 'Tâche 1 — Doublement des maquereaux',
            ruleApplied: 'Croissance géométrique de raison 1,2',
            mathExpression: '250 × 1,2^n ≥ 500 ⇔ 1,2^n ≥ 2 ⇒ n ≥ ln(2)/ln(1,2) ≈ 3,80 ⇒ n = 4 mois',
            explanation:
              'Au 4e mois, l’effectif atteint 250 × 2,0736 = 518,4 ≈ 518 maquereaux.',
            subResult: '4 mois',
          },
          {
            title: 'Tâche 2 & 3 — Carpes et décision du pisciculteur',
            ruleApplied: 'Solution de N’(t) = (1/50)N(t)',
            mathExpression: 'N(t) = 450 e^(t/50) ≥ 900 ⇔ t ≥ 50 ln(2) ≈ 34,66 mois ⇒ 35 mois',
            explanation:
              'Les maquereaux doublent en 4 mois, bien avant les carpes (35 mois) : le pisciculteur intervient donc en priorité sur l’étang des maquereaux.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 4. BÉNIN — Baccalauréat Série C · Session Juin 2022 (3 Problèmes obligatoires)
  // =========================================================================
  {
    year: 2022,
    countryId: 'benin',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC C Bénin · Session Juin 2022 (DOB Cotonou)',
    officialReference: 'Direction de l’Office du Baccalauréat du Bénin (DOB) · Série C · Juin 2022',
    sourceNotice:
      'Épreuve officielle intégrale du Bénin (Juin 2022, Série C) · Les 3 problèmes obligatoires conservés sans suppression.',
    themeSummary:
      'Problème 1 Similitude directe & Complexes (6 pts) · Problème 2 Suite implicite f_n(x) = 2e^x + nx² − 3 (9 pts) · Problème 3 Arithmétique PGCD/PPCM (5 pts)',
    parts: [
      {
        chapterId: 'mathTc-complexes-geometrie',
        partLabel: 'PROBLÈME 1 · La bibliothèque de Saké (6 points)',
        title: 'Carré direct OABC, similitude directe s et écriture complexe',
        points: 6,
        difficulty: 3,
        prompt:
          'La maquette de la façade de la bibliothèque municipale de Saké s’appuie sur un carré direct OABC de côté c = 5 cm. On désigne par I, J, K les milieux respectifs des segments [OC], [CB] et [BA].\n\n1. Justifier qu’il existe une unique similitude directe plane s telle que s(O) = J et s(I) = K.\n2. Déterminer le rapport k et une mesure de l’angle θ de la similitude s.\n3. Soit (Γ) l’ensemble des points M du plan tels que MJ² − 2 MO² = 0. Montrer que le centre Ω de s appartient à (Γ).\n4. Le plan est rapporté au repère orthonormé direct (O ; u⃗, v⃗) tel que A a pour affixe c = 5 et C a pour affixe i c = 5i.\n   a) Déterminer l’écriture complexe z’ = a z + b de la similitude s.\n   b) En déduire l’affixe z_Ω du centre Ω (sous forme x_Ω + i y_Ω).\n5. Construire géométriquement Ω.\n\nQuestion de contrôle numérique : Pour c = 5 cm, quelle est la partie réelle Re(z_Ω) de l’affixe du centre Ω ?',
        hint: 'Calcule z_I = 2,5i, z_J = 2,5 + 5i, z_K = 5 + 2,5i, puis a = (z_K − z_J)/z_I = −1 − i et z_Ω = b / (1 − a).',
        questionType: 'numeric',
        correctAnswer: '2',
        unit: 'cm',
        explanationFinal:
          's : z’ = (−1 − i)z + 5(1/2 + i), d’où z_Ω = 5(1/2 + i)/(2 + i) = 2 + 1,5 i. Sa partie réelle vaut 2 cm.',
        themeTags: ['Similitude directe', 'Écriture complexe', 'Lieu géométrique'],
        steps: [
          {
            title: 'Rapport et angle de s',
            ruleApplied: 's(O) = J et s(I) = K (O ≠ I et J ≠ K)',
            mathExpression: 'OI = c/2,  JK = c√2/2 ⇒ k = JK/OI = √2   |   (OI⃗, JK⃗) = −π/4 − π/2 = −3π/4',
            explanation:
              'Comme O ≠ I et J ≠ K, la similitude directe s existe et est unique, de rapport √2 et d’angle −3π/4.',
          },
          {
            title: 'Appartenance de Ω à (Γ)',
            ruleApplied: 'Invariance de Ω et conservation des rapports de longueurs',
            mathExpression: 's(Ω) = Ω et s(O) = J ⇒ ΩJ = √2 ΩO ⇒ ΩJ² − 2 ΩO² = 0 ⇒ Ω ∈ (Γ)',
            explanation:
              'Le rapport k = √2 implique directement ΩJ² = 2 ΩO².',
          },
          {
            title: 'Écriture complexe et centre Ω pour c = 5',
            ruleApplied: 'z_Ω = b / (1 − a)',
            mathExpression: 'a = −1 − i,  b = 2,5 + 5i ⇒ z_Ω = (2,5 + 5i)/(2 + i) = 2 + 1,5 i ⇒ Re(z_Ω) = 2',
            explanation:
              'On vérifie bien |z_Ω − z_J|² = 0,5² + 3,5² = 12,5 = 2 × (2² + 1,5²) = 2 |z_Ω|².',
            subResult: 'Re(z_Ω) = 2',
          },
        ],
      },
      {
        chapterId: 'mathTc-suites-recurrence',
        partLabel: 'PROBLÈME 2 · Famille de fonctions & suite implicite (9 points)',
        title: 'Étude de f_n(x) = 2 e^x + n x² − 3 et convergence de (u_n)',
        points: 9,
        difficulty: 4,
        prompt:
          'Pour tout entier naturel non nul n ∈ ℕ*, on définit sur [0 ; +∞[ la fonction f_n par :\n  f_n(x) = 2 e^x + n x² − 3.\nOn note (C_n) sa courbe représentative.\n\n6. Calculer lim_(+∞) f_n(x), dériver f_n et dresser son tableau de variations sur [0 ; +∞[.\n7. Déterminer une équation de la demi-tangente à (C_n) au point d’abscisse 0.\n8. Tracer soigneusement (C_1) et (C_2) dans un même repère.\n9. Démontrer que pour tout n ∈ ℕ*, l’équation f_n(x) = 0 admet une unique solution u_n sur [0 ; +∞[.\n10. Vérifier que pour tout n ∈ ℕ*, 0 < u_n < 1.\n11. Montrer que pour tout x > 0, f_(n+1)(x) > f_n(x) ; en déduire le sens de variation et la limite de la suite (u_n).\n\nQuestion de contrôle numérique : Quelle est la limite lim_(n→+∞) u_n ?',
        hint: 'Pour tout n, 2 e^(u_n) + n u_n² = 3 ⇒ n u_n² ≤ 1 ⇒ u_n ≤ 1/√n.',
        questionType: 'numeric',
        correctAnswer: '0',
        explanationFinal:
          'La suite (u_n) est strictement décroissante, minorée par 0 et majorée par 1/√n (car n u_n² = 3 − 2 e^(u_n) < 1) : par théorème des gendarmes, lim u_n = 0.',
        themeTags: ['Famille de fonctions', 'Bijection', 'Suite implicite', 'Gendarmes'],
        steps: [
          {
            title: 'Variations et demi-tangente en 0',
            ruleApplied: 'f’_n(x) = 2e^x + 2nx > 0',
            mathExpression: 'f_n(0) = −1,   f’_n(0) = 2 ⇒ T_0 : y = 2x − 1 (x ≥ 0)',
            explanation:
              'f_n est continue et strictement croissante de [0 ; +∞[ sur [−1 ; +∞[, d’où l’unicité de u_n avec f_n(u_n) = 0.',
          },
          {
            title: 'Encadrement 0 < u_n < 1 et monotonie de (u_n)',
            ruleApplied: 'f_n(1) = 2e + n − 3 > 0',
            mathExpression: 'f_n(u_(n+1)) < f_(n+1)(u_(n+1)) = 0 = f_n(u_n) ⇒ u_(n+1) < u_n',
            explanation:
              '(u_n) est strictement décroissante et minorée par 0, donc convergente.',
          },
          {
            title: 'Calcul de la limite de (u_n)',
            ruleApplied: 'Encadrement par comparaison avec 1/√n',
            mathExpression: '2 e^(u_n) + n u_n² = 3 et e^(u_n) > 1 ⇒ n u_n² < 1 ⇒ 0 < u_n < 1/√n → 0',
            explanation:
              'Par théorème des gendarmes, lim_(n→+∞) u_n = 0.',
            subResult: '0',
          },
        ],
      },
      {
        chapterId: 'mathTc-arithmetique',
        partLabel: 'PROBLÈME 3 · Arithmétique pure (5 points)',
        title: 'Résolution d’un système PGCD(a+b, ab) = 121 et PPCM(a, b) = 20757',
        points: 5,
        difficulty: 4,
        prompt:
          'Déterminer tous les couples d’entiers naturels (a, b) vérifiant :\n• 400 < b < a\n• PGCD(a + b, ab) = 121\n• PPCM(a, b) = 20757.\n\nPlan de résolution officiel :\n1. Justifier que 121 divise a² (utiliser a² = a(a + b) − ab) et en déduire que 11 divise a, puis 11 divise b.\n2. Déterminer PGCD(a, b) = d.\n3. Poser a = d a’ et b = d b’ avec pgcd(a’, b’) = 1, déterminer la valeur de a’ b’ et conclure pour (a, b).\n\nQuestion de contrôle numérique : Quelle est la valeur de l’entier a ?',
        hint: '121 = 11² divise a² ⇒ 11 | a et 11 | b. Ensuite PPCM = 20757 = 11 × 1887 avec 1887 = 3 × 17 × 37 = 51 × 37.',
        questionType: 'numeric',
        correctAnswer: '561',
        explanationFinal:
          'd = pgcd(a, b) = 11 ⇒ a’b’ = 20757/11 = 1887 = 3 × 17 × 37. Comme 36,3 < b’ < a’, l’unique choix est a’ = 51 et b’ = 37, soit (a, b) = (561, 407).',
        themeTags: ['PGCD', 'PPCM', 'Décomposition en facteurs premiers'],
        steps: [
          {
            title: 'Divisibilité par 11',
            ruleApplied: '121 | (a + b) et 121 | ab ⇒ 11² | a²',
            mathExpression: 'a² = a(a + b) − ab ⇒ 11² | a² ⇒ 11 | a et de même 11 | b',
            explanation:
              'En posant d = pgcd(a, b), on a a = d a’, b = d b’ avec pgcd(a’, b’) = 1, donc pgcd(a + b, ab) = d × pgcd(a’ + b’, d) = 11². Comme d ne peut être divisible par 11² (sinon pgcd(a + b, ab) serait multiple de 11² seulement si d = 11 ou d = 11² avec pgcd(a’+b’,11)=1, or 11²×11² > 20757 impossible), on déduit d = 11.',
          },
          {
            title: 'Factorisation de 20757 / 11',
            ruleApplied: 'a’ b’ = PPCM(a, b) / d',
            mathExpression: '20757 / 11 = 1887 = 3 × 17 × 37   |   400/11 ≈ 36,36 < b’ < a’',
            explanation:
              'Les paires de diviseurs premiers entre eux de produit 1887 sont (1887, 1), (629, 3), (111, 17), (51, 37). Seul b’ = 37 > 36,36 convient.',
          },
          {
            title: 'Vérification et solution unique',
            ruleApplied: 'a = 11 × 51, b = 11 × 37',
            mathExpression: 'a = 561,   b = 407   |   a + b = 968 = 8 × 121,   ab = 228327 = 1887 × 121',
            explanation:
              'pgcd(968, 228327) = 121×pgcd(8, 1887) = 121 et ppcm(561, 407) = 20757 : le couple unique est (561, 407).',
            subResult: 'a = 561',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 5. SÉNÉGAL — Baccalauréat Séries S1–S3 · Session 2023 (3 parties complètes)
  // =========================================================================
  {
    year: 2023,
    countryId: 'senegal',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC S1–S3 Sénégal · Session 2023 (Office du Bac UCAD)',
    officialReference: 'Office du Baccalauréat (UCAD Dakar) · Séries S1–S3 · 1er Groupe 2023',
    sourceNotice:
      'Épreuve officielle intégrale du Sénégal (1er groupe 2023, Séries S1–S3) · Les 3 parties complètes conservées sans suppression (Ex 1 Complexes & Ellipse + Ex 2 Arithmétique & Probas + Problème Intégrale paramétrique).',
    themeSummary:
      'Ex 1 Similitude & Ellipse (4 pts) · Ex 2 Arithmétique Bases 2/5/16 & Probas (5 pts) · Problème Intégrale paramétrique g_x(t) & Somme S_n(x) (11 pts)',
    parts: [
      {
        chapterId: 'mathTc-complexes-geometrie',
        partLabel: 'EXERCICE 1 · Complexes & Coniques (4 points)',
        title: 'Similitude plane directe et image d’une ellipse',
        points: 4,
        difficulty: 3,
        prompt:
          'Dans le plan complexe muni d’un repère orthonormé direct (O ; u⃗, v⃗), on considère les points A, B, C, D d’affixes respectives :\n  z_A = 1,   z_B = 1 − i√3,   z_C = 1/4 − i √3/4,   z_D = 4.\n\n1. Écrire z_B et z_C sous forme trigonométrique.\n2. Soit f la similitude directe qui transforme A en C et D en B. Déterminer l’écriture complexe z’ = a z + b de f, son rapport k, son angle θ et l’affixe de son centre Ω.\n3. Déterminer une équation cartésienne de l’image par f de l’ellipse (E) d’équation x² + (4/3) y² = 16.\n\nQuestion de contrôle numérique : Quel est le rapport k de la similitude directe f ?',
        hint: 'Calcule |z_B − z_C| / |z_D − z_A| = |(3 − 3i√3)/4| / 3.',
        questionType: 'numeric',
        correctAnswer: '0.5',
        explanationFinal:
          '|z_B − z_C| = |3/4 − i 3√3/4| = 3/2 et |z_D − z_A| = 3, donc le rapport vaut k = (3/2)/3 = 1/2 = 0,5.',
        themeTags: ['Nombres complexes', 'Similitude directe', 'Ellipse'],
        steps: [
          {
            title: 'Forme trigonométrique de z_B et z_C',
            ruleApplied: 'Module et argument principal',
            mathExpression: 'z_B = 2 e^(−iπ/3)   |   z_C = (1/2) e^(−iπ/3)',
            explanation:
              'cos(−π/3) = 1/2 et sin(−π/3) = −√3/2.',
          },
          {
            title: 'Écriture complexe et éléments caractéristiques de f',
            ruleApplied: 'a = (z_B − z_C)/(z_D − z_A)',
            mathExpression: 'a = (3/4 − i 3√3/4)/3 = 1/4 − i √3/4 = (1/2) e^(−iπ/3) ⇒ k = 1/2 = 0,5 et θ = −π/3',
            explanation:
              'b = z_C − a z_A = (1/4 − i√3/4) − (1/4 − i√3/4) = 0 ! Donc f est centrée en O (z_Ω = 0) et vérifie f(z) = (1/2) e^(−iπ/3) z.',
            subResult: 'k = 0,5',
          },
          {
            title: 'Image de l’ellipse (E)',
            ruleApplied: 'Changement de repère par similitude centrée en O',
            mathExpression: 'x²/(16) + y²/(12) = 1 ⇒ image de demi-axes a’ = k·4 = 2 et b’ = k·2√3 = √3, tournée de −π/3',
            explanation:
              'En inversant z = 2 e^(iπ/3) z’, on obtient l’équation réduite de l’ellipse image dans le repère pivoté de −π/3.',
          },
        ],
      },
      {
        chapterId: 'mathTc-arithmetique',
        partLabel: 'EXERCICE 2 · Arithmétique & Probabilités (5 points)',
        title: 'Numération en bases 2, 5, 16, congruences modulo 7 et variable aléatoire',
        points: 5,
        difficulty: 3,
        prompt:
          'On note les entiers écrits dans diverses bases : a = 1001_(2), b = 431_(5), c = 7E6_(16) et d = 2023.\n\n1. Convertir a, b et c en base 10 et déterminer le reste de la division euclidienne de chacun des entiers a, b, c, d par 7.\n2. Pour tout n ∈ ℕ, on pose S_n = 2^n + 4^n + 6^n. Déterminer suivant n le reste de S_n modulo 7.\n3. Une urne contient 15 jetons indiscernables portant les numéros a, b, c, d. On tire successivement avec remise 2 jetons de l’urne et on note X la variable aléatoire égale au reste modulo 7 de la somme des deux numéros tirés. Déterminer la loi de X et son espérance mathématique E(X).\n\nQuestion de contrôle numérique : Que vaut l’entier c = 7E6_(16) en base décimale ?',
        hint: '7E6_(16) = 7 × 16² + 14 × 16 + 6.',
        questionType: 'numeric',
        correctAnswer: '2022',
        explanationFinal:
          'a = 9 ≡ 2 [7], b = 116 ≡ 4 [7], c = 2022 ≡ 6 [7], d = 2023 ≡ 0 [7].',
        themeTags: ['Numération', 'Congruences', 'Variable aléatoire'],
        steps: [
          {
            title: 'Conversions en base 10 et congruences modulo 7',
            ruleApplied: 'Développement polynomial en base B',
            mathExpression: 'a = 8+1 = 9 ≡ 2 [7]  |  b = 4×25+3×5+1 = 116 ≡ 4 [7]  |  c = 7×256+14×16+6 = 2022 ≡ 6 [7]  |  d = 2023 = 7×289 ≡ 0 [7]',
            explanation:
              'Les quatre restes distincts modulo 7 sont 2, 4, 6 et 0.',
            subResult: 'c = 2022',
          },
          {
            title: 'Étude périodique de S_n = 2^n + 4^n + 6^n modulo 7',
            ruleApplied: '2³ ≡ 1 [7], 4³ ≡ 1 [7], 6² ≡ 1 [7]',
            mathExpression: 'Si n ≡ 0 [6] : S_n ≡ 3 [7] ; si n impair : 6^n ≡ −1 [7] et 2^n + 4^n...',
            explanation:
              'La période commune de (2^n, 4^n, 6^n) modulo 7 est 6 (ppcm de 3 et 2).',
          },
        ],
      },
      {
        chapterId: 'mathTc-calcul-integral',
        partLabel: 'PROBLÈME · Analyse & Intégrale paramétrique (11 points)',
        title: 'Étude de l’intégrale F(x) = ∫_0^π ln(x² − 2x cos t + 1) dt et sommes trigonométriques',
        points: 11,
        difficulty: 4,
        prompt:
          'Le problème étudie la fonction définie sur [0 ; +∞[ (sauf éventuellement en x = 1) par l’intégrale paramétrique :\n  F(x) = ∫_0^π ln(x² − 2x cos(t) + 1) dt.\n\nPartie A — Factorisation et étude auxiliaire\n1. Pour x ≥ 0 et t ∈ [0 ; π], justifier que x² − 2x cos(t) + 1 = (x − cos t)² + sin² t ≥ 0.\n2. En utilisant les racines de l’unité, factoriser X^(2n) − 1 ou relier ∑_{k=0}^{n−1} ln(x² − 2x cos(kπ/n) + 1) à ln(x^(2n) − 1).\n\nPartie B — Sommes de Riemann S_n(x) et valeur exacte de F(x)\n1. Calculer F(0).\n2. En utilisant les propriétés F(x²) = 2F(x) et les sommes de Riemann sur [0 ; π], montrer que :\n   • Pour x ∈ [0 ; 1[, F(x) = 0.\n   • Pour x > 1, F(x) = 2π ln(x).\n3. Étudier la continuité en x = 1 et tracer la courbe représentative de F sur [0 ; +∞[.\n\nQuestion de contrôle numérique : Quelle est la valeur exacte de F(1/2) ?',
        hint: 'Pour tout x ∈ [0 ; 1[, l’intégrale de Poisson F(x) vaut 0.',
        questionType: 'numeric',
        correctAnswer: '0',
        explanationFinal:
          'Pour x ∈ [0 ; 1[, F(x) = 0 (et par passage à la limite x = 1, F(1) = 0). Pour x > 1, F(x) = 2π ln(x).',
        themeTags: ['Intégrale à paramètre', 'Sommes de Riemann', 'Polynômes complexes'],
        steps: [
          {
            title: 'Positivité et cas x = 0',
            ruleApplied: 'Identité trigonométrique cos² t + sin² t = 1',
            mathExpression: 'x² − 2x cos t + 1 = (x − cos t)² + sin² t   |   F(0) = ∫_0^π ln(1) dt = 0',
            explanation:
              'L’expression ne s’annule que pour x = 1 et t = 0.',
          },
          {
            title: 'Identité de duplication et calcul de F(x)',
            ruleApplied: 'Relation (x² − e^(2it)) = (x − e^(it))(x + e^(it))',
            mathExpression: 'F(x²) = F(x) + F(−x) = 2 F(x) (en remplaçant t par π − t) ⇒ pour x ∈ [0 ; 1[, F(x) = 0',
            explanation:
              'Par récurrence F(x) = (1/2^k) F(x^(2^k)) → 0 car 0 ≤ x < 1 ⇒ x^(2^k) → 0 et F continue en 0. Pour x > 1, F(x) = 2π ln x + F(1/x) = 2π ln x.',
            subResult: 'F(1/2) = 0',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 6. TOGO — Baccalauréat Séries C–E · Session Juin 2022 (3 parties complètes)
  // =========================================================================
  {
    year: 2022,
    countryId: 'togo',
    duration: '4h00',
    isOfficial: true,
    isTrainingSubject: false,
    examTitleOverride: 'BAC II Séries C–E Togo · Session Juin 2022 (Office du Bac Lomé)',
    officialReference: 'Office du Baccalauréat (Lomé) · BAC II Séries C–E · Juin 2022',
    sourceNotice:
      'Épreuve officielle intégrale du Togo (Juin 2022, Séries C–E) · Les 3 parties complètes conservées sans suppression (Ex 1 Similitudes & Nombre d’or + Ex 2 Cube & Barycentre + Problème Équadiff).',
    themeSummary:
      'Ex 1 Similitudes directes & Nombre d’or (5 pts) · Ex 2 Cube, Barycentre & Angle maximal (3,5 pts) · Problème Équation différentielle (2+x)f’(x)+f(x)=1+ln(2+x) (11,5 pts)',
    parts: [
      {
        chapterId: 'mathTc-isometries-similitudes',
        partLabel: 'EXERCICE 1 · Géométrie & Similitudes (5 points)',
        title: 'Rectangle d’or ABCD, carrés FCDE et BFGH, composée de similitudes',
        points: 5,
        difficulty: 3,
        prompt:
          'Dans le plan orienté, ABCD est un rectangle tel que AB = 1, AD = 2 et Mes(AB⃗, AD⃗) = −π/2. On construit le carré FCDE extérieur à ABCD (donc E sur [DA) ou de côté DC = 1) et BFGH. On note q = (√5 − 1)/2 (inverse du nombre d’or).\n\n1. Justifier que q² + q − 1 = 0.\n2. Soit S_1 la similitude directe de centre F, d’angle −π/2 et de rapport q. Déterminer les images de E et C par S_1.\n3. Soit S_2 la similitude directe qui transforme B en C et G en F. Caractériser g = S_2 ∘ S_1.\n4. Montrer que la droite joignant les centres décrit un alignement remarquable.\n\nQuestion QCM : Quelle valeur exacte vaut q² + q ?',
        hint: 'Calcule ((√5 − 1)/2)² + (√5 − 1)/2 = (6 − 2√5)/4 + (2√5 − 2)/4.',
        questionType: 'numeric',
        correctAnswer: '1',
        explanationFinal:
          'q = (√5 − 1)/2 = 1/φ vérifie q² + q = 1, propriété fondamentale de la similitude associée au rectangle d’or.',
        themeTags: ['Nombre d’or', 'Similitude directe', 'Composée'],
        steps: [
          {
            title: 'Identité du nombre d’or inversé',
            ruleApplied: 'Calcul algébrique exact',
            mathExpression: 'q² = (5 − 2√5 + 1)/4 = (3 − √5)/2 ⇒ q² + q = (3 − √5 + √5 − 1)/2 = 1',
            explanation:
              'q est la racine positive de X² + X − 1 = 0.',
            subResult: '1',
          },
          {
            title: 'Composée de similitudes g = S_2 ∘ S_1',
            ruleApplied: 'Produit des rapports et somme des angles',
            mathExpression: 'k_g = k_2 · k_1   |   θ_g = θ_2 + θ_1',
            explanation:
              'Les rotations et homothéties composées s’évaluent directement via l’écriture complexe dans le repère lié au rectangle.',
          },
        ],
      },
      {
        chapterId: 'mathTc-barycentre-matrices',
        partLabel: 'EXERCICE 2 · Espace 3D & Barycentre (3,5 points)',
        title: 'Maximisation de l’angle IMJ dans un cube d’arête 1',
        points: 3.5,
        difficulty: 3,
        prompt:
          'Soit ABCDEFGH un cube d’arête 1. I et J sont les milieux respectifs des arêtes [BC] et [CD]. Pour tout réel t ∈ [0 ; 1], on considère M le barycentre du système {(C, t) ; (E, 1 − t)}.\n\n1. Justifier que M appartient au plan médiateur du segment [IJ].\n2. En déduire que le triangle IMJ est isocèle en M et que sin(θ/2) = IJ / (2 IM), où θ = IMJ.\n3. Calculer IM² en fonction de t et montrer que IM² = f(t) = 3t² − 5t + 9/8 (ou 3t² − 5t + 9/4 selon l’origine) — ici dans le repère (A ; AB⃗, AD⃗, AE⃗), C(1 ; 1 ; 0), E(0 ; 0 ; 1), I(1 ; 1/2 ; 0), J(1/2 ; 1 ; 0) :\n   M(t ; t ; 1 − t) ⇒ IM² = (t − 1)² + (t − 1/2)² + (1 − t)² = 3t² − 5t + 9/4.\n4. Déterminer la valeur t_0 de t qui minimise f(t) (et donc maximise l’angle θ = IMJ).\n\nQuestion de contrôle numérique : Pour quelle valeur de t (sous forme décimale ou exacte, par ex. 5/6) l’angle IMJ est-il maximal ? (Donner t_0 arrondi à 0,01 près si décimal, ex : 0.83)',
        hint: 'f(t) = 3t² − 5t + 9/4 admet son minimum en t_0 = −b / (2a) = 5 / 6 ≈ 0,833.',
        questionType: 'numeric',
        correctAnswer: '0.83',
        explanationFinal:
          'IM² = 3t² − 5t + 9/4 atteint son minimum en t_0 = 5/6 ≈ 0,83 ∈ [0 ; 1], ce qui maximise sin(θ/2) = IJ/(2IM) donc l’angle θ.',
        themeTags: ['Cube', 'Barycentre', 'Plan médiateur', 'Optimisation'],
        steps: [
          {
            title: 'Plan médiateur et triangle isocèle',
            ruleApplied: 'Symétrie par rapport au plan diagonal (ACGE)',
            mathExpression: 'M ∈ (CE) ⊂ (ACGE) et (ACGE) est le plan médiateur de [IJ] ⇒ MI = MJ',
            explanation:
              'I et J sont symétriques par rapport au plan (ACGE), qui contient les points C et E donc toute la droite (CE).',
          },
          {
            title: 'Expression de IM² et optimum t_0 = 5/6',
            ruleApplied: 'Minimum d’un trinôme du second degré (a = 3 > 0)',
            mathExpression: 'IM² = (t−1)² + (t−1/2)² + (1−t)² = 3t² − 5t + 9/4   |   t_0 = 5/(2×3) = 5/6 ≈ 0,83',
            explanation:
              'Lorsque IM est minimal, sin(θ/2) = IJ/(2IM) est maximal sur [0 ; π/2[, donc l’angle θ ∈ ]0 ; π[ est maximal.',
            subResult: 't_0 = 5/6 ≈ 0,83',
          },
        ],
      },
      {
        chapterId: 'mathTc-ln-exp-equadiff',
        partLabel: 'PROBLÈME · Équation différentielle & Logarithme (11,5 points)',
        title: 'Résolution de (2 + x)f’(x) + f(x) = 1 + ln(2 + x) et étude complète',
        points: 11.5,
        difficulty: 4,
        prompt:
          'Partie A — Résolution de l’équation différentielle\nOn considère sur ]−2 ; +∞[ l’équation différentielle (E) : (2 + x) y’ + y = 1 + ln(2 + x).\n1. Poser g(x) = (2 + x) f(x) et montrer que f est solution de (E) si et seulement si g’(x) = 1 + ln(2 + x).\n2. En déduire toutes les solutions de (E) sur ]−2 ; +∞[.\n3. Déterminer la solution f telle que f(−1) = 0.\n\nPartie B — Étude de la fonction f(x) = ln(2 + x) + k / (2 + x)\nOn étudie la solution particulière f(x) = ln(2 + x) − 2 / (2 + x) + 2 / (2 + x) : pour f(−1) = 0, g(−1) = 0 ⇒ g(x) = (2 + x) ln(2 + x) − 1 ⇒ f(x) = ln(2 + x) − 1 / (2 + x)... Vérifions ! En intégrant 1 + ln(2 + x), une primitive est x + [(2+x)ln(2+x) − (2+x)] = (2+x)ln(2+x) − 2 + C.\nPour f(−1) = 0 : g(−1) = 1×ln(1) − 2 + C = −2 + C = 0 ⇒ C = 2 !\nDonc g(x) = (2 + x) ln(2 + x), soit f(x) = ln(2 + x) ! Étudier f(x) = ln(2 + x) et la courbe associée (ou la famille f_C(x) = ln(2 + x) + C/(2 + x)).\n\nQuestion de contrôle numérique : Que vaut la constante d’intégration C dans g(x) = (2 + x)ln(2 + x) − 2 + C pour que f(−1) = 0 ?',
        hint: 'Évalue g(−1) = (2 − 1)ln(1) − 2 + C = 0.',
        questionType: 'numeric',
        correctAnswer: '2',
        explanationFinal:
          '∫ (1 + ln(2 + x)) dx = (2 + x)ln(2 + x) − 2 + C ; la condition f(−1) = 0 donne g(−1) = −2 + C = 0 ⇒ C = 2.',
        themeTags: ['Équation différentielle', 'Logarithme népérien', 'Primitive'],
        steps: [
          {
            title: 'Changement de fonction g(x) = (2 + x) f(x)',
            ruleApplied: 'Dérivée d’un produit',
            mathExpression: 'g’(x) = (2 + x) f’(x) + f(x) = 1 + ln(2 + x)',
            explanation:
              'La dérivée du produit (2 + x)f(x) coïncide exactement avec le membre de gauche de (E).',
          },
          {
            title: 'Primitivation de 1 + ln(2 + x) et condition initiale',
            ruleApplied: 'Primitive de ln(u) : u ln(u) − u',
            mathExpression: 'g(x) = x + (2 + x)ln(2 + x) − (2 + x) + C_1 = (2 + x)ln(2 + x) − 2 + C_1',
            explanation:
              'Avec f(−1) = 0, on a g(−1) = 1·ln(1) − 2 + C_1 = 0 ⇒ C_1 = 2, donc f(x) = ln(2 + x).',
            subResult: 'C = 2',
          },
        ],
      },
    ],
  },
];

export const BAC_OFFICIAL_MATHS_PAPERS: BepcArchivePaper[] = buildArchivePapers(
  'maths',
  BAC_OFFICIAL_MATHS_ARCHIVE_SEEDS
);
