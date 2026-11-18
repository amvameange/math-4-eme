import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const MATH_TC_ESPACE_CONIQUES: Chapter[] = [
  {
    id: 'mathTc-geometrie-espace',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'geometrie',
    order: 12,
    title: 'Géométrie Analytique de l’Espace : Plans, Droites & Sphères',
    badge: 'Maths Tle C · Ch. 12',
    shortDesc: 'Équations cartésiennes de plans, représentations paramétriques de droites, distance d’un point à un plan/droite, sphères et intersection plan-sphère.',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-600 via-teal-500 to-emerald-400',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-espace-analytique',
    bossMeta: { name: 'MAÎTRE DE L’ESPACE 3D', emoji: '🧊', xp: 210 },
    kokoSpeech:
      'En géométrie de l’espace au Bac C, vérifie toujours la position d’un plan (P) et d’une sphère S(Ω, R) en comparant la distance d(Ω, P) au rayon R : si d < R, l’intersection est un cercle de rayon r = √(R² - d²) !',
    realWorldHook: {
      title: 'Intersection d’un faisceau radar et d’une sphère atmosphérique',
      scenario:
        'Dans un repère orthonormé 3D de contrôle aérien à Libreville, un avion suit une droite paramétrique (D) et entre dans une zone sphérique de portée R autour de la balise Ω.',
      question:
        'Comment déterminer les points d’intersection (D) ∩ (S) et l’équation du plan tangent à la sphère ?',
    },
    unitsTable: [
      { symbol: 'ax + by + cz + d = 0', quantity: 'Équation d’un plan', unit: 'Vecteur normal n⃗(a,b,c)', instrument: 'n⃗ ≠ 0⃗' },
      { symbol: 'M(t) = A + t u⃗', quantity: 'Droite paramétrique', unit: 't ∈ ℝ', instrument: 'Directeur u⃗' },
      { symbol: 'd(M, P)', quantity: 'Distance point-plan', unit: '|ax₀+by₀+cz₀+d|/||n⃗||', instrument: 'Projection orthogonale' },
      { symbol: '(x-a)²+(y-b)²+(z-c)²=R²', quantity: 'Sphère S(Ω, R)', unit: 'Centre Ω(a,b,c)', instrument: 'Rayon R' },
    ],
    experimentOrActivity: {
      title: 'Coupe d’une sphère par un plan et cercle d’intersection',
      materials: ['Sphère S(Ω, R)', 'Plan P(n⃗)', 'Projeté orthogonal H de Ω sur P'],
      observation:
        'Si d = ΩH < R, la section P ∩ S est le cercle de centre H (projeté orthogonal de Ω sur P) et de rayon r = √(R² - d²).',
      conclusion:
        'Si d = R, le plan est tangent en H à la sphère (P ⊥ (ΩH)). Si d > R, l’intersection est vide.',
    },
    revisionChecklist: [
      'Je sais trouver un vecteur normal à un plan (ABC) via le produit vectoriel AB⃗ ∧ AC⃗.',
      'Je sais déterminer l’intersection d’une droite (paramétrique) et d’un plan (cartésien) ou d’une sphère.',
      'Je sais calculer la distance d(M, P) et d(M, D) = ||AM⃗ ∧ u⃗|| / ||u⃗||.',
    ],
    keyFormulas: [
      'Plan de normal n⃗(a,b,c) : ax + by + cz + d = 0',
      'Distance point-plan : d(M₀, P) = |a x₀ + b y₀ + c z₀ + d| / √(a² + b² + c²)',
      'Section plan-sphère (d < R) : cercle de centre H (projeté de Ω) et rayon r = √(R² - d²)',
      'Sphère de diamètre [AB] : MA⃗ · MB⃗ = 0',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Géométrie Analytique 3D',
      slogan: 'Normal n⃗ · Distance d(Ω, P) · Rayon r = √(R² - d²)',
      summaryBulletPoints: [
        'Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires ; orthogonaux si n₁⃗ · n₂⃗ = 0.',
        'Une droite (u⃗) et un plan (n⃗) sont orthogonaux si u⃗ et n⃗ sont colinéaires ; parallèles si u⃗ · n⃗ = 0.',
        'Pour trouver le centre H du cercle section : écrire la droite (ΩH) dirigée par n⃗, puis couper (ΩH) avec P.',
      ],
      verticalFormulas: [
        {
          name: 'Intersection Plan P : 2x - y + 2z - 9 = 0 et Sphère S(O, 5)',
          badge: '🌐',
          steps: [
            'Centre O(0 ; 0 ; 0), rayon R = 5',
            'd(O, P) = |0 - 0 + 0 - 9| ÷ √(2² + (-1)² + 2²) = 9 ÷ 3 = 3',
            'd = 3 < R = 5  ⟹  cercle section',
            'Rayon r = √(R² - d²) = √(25 - 9) = √16 = 4',
          ],
          resultHighlight: 'Cercle de rayon r = 4 et centre H(2 ; -1 ; 2)',
          explanation: 'OH⃗ = t n⃗ et H ∈ P donne t = 1, donc H(2 ; -1 ; 2).',
        },
      ],
      kokoTip: 'Pour montrer qu’une droite est orthogonale à un plan (ABC), il suffit de montrer u⃗ · AB⃗ = 0 et u⃗ · AC⃗ = 0 (avec AB⃗, AC⃗ non colinéaires) !',
      pitfallToAvoid: 'Oublier la valeur absolue au numérateur de d(M, P) ou confondre vecteur normal d’un plan et vecteur directeur d’une droite.',
    },
    sections: [
      {
        title: '1. Plans et droites dans l’espace : orthogonalité et intersections',
        illustrationNote: 'Plan P avec son vecteur normal n⃗ et intersection avec une droite paramétrique (D).',
        explanation: [
          'Un plan est défini par un point A et un vecteur normal n⃗ : AM⃗ · n⃗ = 0.',
          'Une droite est définie par un point B et un vecteur directeur u⃗ : M ∈ (D) ⟺ BM⃗ = t u⃗ (t ∈ ℝ).',
        ],
        rules: [
          {
            name: 'Intersection droite-plan',
            description: 'Substituer x(t), y(t), z(t) dans ax + by + cz + d = 0 pour trouver l’unique paramètre t₀ (si u⃗·n⃗ ≠ 0).',
            example: 'D(1+t, 2-t, 3t) et P : x + y + z = 6  ⟹  (1+t)+(2-t)+3t = 6  ⟹  3t = 3  ⟹  t = 1  ➔  I(2 ; 1 ; 3)',
          },
        ],
        commonMistakes: ['Utiliser le même paramètre t pour deux droites différentes ! (Toujours utiliser t et t’).'],
      },
      {
        title: '2. Sphères, distances et sections planes',
        illustrationNote: 'Coupe d’une sphère S(Ω, R) par un plan P : triangle rectangle ΩHM avec R² = d² + r².',
        explanation: [
          'En développant x² + y² + z² + ax + by + cz + d = 0 par mise sous forme canonique, on obtient le centre Ω et le rayon R.',
          'Le théorème de Pythagore dans le triangle rectangle ΩHM relie R, d = d(Ω, P) et r.',
        ],
        rules: [
          {
            name: 'Plan tangent en A à une sphère de centre Ω',
            description: 'Le vecteur ΩA⃗ est normal au plan tangent en A : ΩA⃗ · AM⃗ = 0.',
            example: 'Ω(1,0,0), A(3,1,2) ⟹ n⃗ = ΩA⃗(2,1,2) ⟹ 2(x-3) + (y-1) + 2(z-2) = 0',
          },
        ],
        commonMistakes: ['Oublier de diviser par ||n⃗|| dans la formule de la distance d(Ω, P).'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-esp-1',
        'mathTc-geometrie-espace',
        'Distance d’un point à un plan',
        1,
        'Calcule la distance du point A(2 ; 1 ; -1) au plan P d’équation 2x - 2y + z + 5 = 0.',
        '2',
        'Utilise d = |2x_A - 2y_A + z_A + 5| / √(2² + (-2)² + 1²).',
        '|4 - 2 - 1 + 5| / √(4 + 4 + 1) = 6 / 3 = 2.',
        [
          { title: 'Numérateur', explanation: 'Remplacer par A(2, 1, -1).', math: '|2(2) - 2(1) + (-1) + 5| = |6| = 6' },
          { title: 'Norme de n⃗', explanation: '√(4 + 4 + 1) = 3.', math: 'd = 6 / 3 = 2' },
        ]
      ),
      mkNum(
        'mathTc-esp-2',
        'mathTc-geometrie-espace',
        'Rayon du cercle section',
        2,
        'Une sphère de centre Ω et de rayon R = 10 est coupée par un plan P situé à distance d = 6 de Ω. Quel est le rayon r du cercle d’intersection ?',
        '8',
        'Applique Pythagore : r = √(R² - d²).',
        'r = √(10² - 6²) = √(100 - 36) = √64 = 8.',
        [
          { title: 'Théorème de Pythagore', explanation: 'R² = d² + r².', math: 'r = √(100 - 36) = 8' },
        ]
      ),
      mkQcm(
        'mathTc-esp-3',
        'mathTc-geometrie-espace',
        'Position relative droite-plan',
        2,
        'Soient la droite D de vecteur directeur u⃗(2 ; -1 ; 4) et le plan P de vecteur normal n⃗(3 ; 2 ; -1). Que peut-on dire ?',
        ['D est strictement parallèle ou incluse dans P (u⃗ · n⃗ = 0)', 'D est orthogonale à P', 'D coupe P en un point unique', 'u⃗ et n⃗ sont colinéaires'],
        'D est strictement parallèle ou incluse dans P (u⃗ · n⃗ = 0)',
        'Calcule le produit scalaire u⃗ · n⃗.',
        '2×3 + (-1)×2 + 4×(-1) = 6 - 2 - 4 = 0, donc u⃗ ⊥ n⃗ et D est parallèle à P.',
        [
          { title: 'Produit scalaire', explanation: 'Si u⃗ · n⃗ = 0, u⃗ est orthogonal au normal donc parallèle au plan.', math: 'u⃗ · n⃗ = 6 - 2 - 4 = 0' },
        ]
      ),
      mkNum(
        'mathTc-esp-4',
        'mathTc-geometrie-espace',
        'Rayon d’une sphère par forme canonique',
        3,
        'Détermine le rayon R de la sphère d’équation x² + y² + z² - 4x + 6y - 2z - 11 = 0.',
        '5',
        'Complète les carrés : (x - 2)² + (y + 3)² + (z - 1)² = 11 + 4 + 9 + 1.',
        'R² = 25 donc R = 5.',
        [
          { title: 'Forme canonique', explanation: 'Complétion des trois carrés.', math: '(x - 2)² - 4 + (y + 3)² - 9 + (z - 1)² - 1 - 11 = 0' },
          { title: 'Rayon R', explanation: 'R² = 25.', math: 'R = 5' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-isometries-similitudes',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'geometrie',
    order: 13,
    title: 'Isométries du Plan, Similitudes & Applications Affines',
    badge: 'Maths Tle C · Ch. 13',
    shortDesc: 'Déplacements (translations, rotations), antidéplacements (symétries orthogonales, symétries glissées), décomposition en réflexions et composition de similitudes.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-600 via-blue-500 to-sky-400',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-isometries-similitudes',
    bossMeta: { name: 'MAÎTRE DES ISOMÉTRIES', emoji: '🔄', xp: 210 },
    kokoSpeech:
      'Théorème fondamental de Terminale C : la composée de deux réflexions s_Δ ◦ s_D est une TRANSLATION si D // Δ (vecteur 2 AB⃗) et une ROTATION si D et Δ se coupent en Ω (angle 2 (D, Δ)) !',
    realWorldHook: {
      title: 'Pavages et rosaces artistiques des masques Punu du Gabon',
      scenario:
        'Les motifs géométriques symétriques résultent de compositions de réflexions d’axes Δ₁ et Δ₂, de rotations et de translations conservant les longueurs (isométries).',
      question:
        'Comment classifier toute isométrie du plan et réduire la composée de deux déplacements ou antidéplacements ?',
    },
    unitsTable: [
      { symbol: 'Déplacement', quantity: 'Isométrie directe', unit: 'Conserve angles orientés', instrument: 'Translation ou Rotation' },
      { symbol: 'Antidéplacement', quantity: 'Isométrie indirecte', unit: 'Inverse angles orientés', instrument: 'Réflexion ou Symétrie glissée' },
      { symbol: 's_{Δ’} ◦ s_Δ', quantity: '2 réflexions', unit: 'T(2u⃗) ou R(Ω, 2θ)', instrument: 'D’ // D ou D’ ∩ D = {Ω}' },
      { symbol: 's = h(Ω,k) ◦ r(Ω,θ)', quantity: 'Similitude directe', unit: 'Rapport k > 0', instrument: 'Aire × k²' },
    ],
    experimentOrActivity: {
      title: 'Décomposition d’une rotation ou translation en deux réflexions',
      materials: ['Deux droites sécantes D₁ et D₂ d’angle α', 'Deux droites parallèles distantes de d', 'Triangle image'],
      observation:
        'La double réflexion autour de deux axes sécants d’angle α fait tourner toute figure de 2α autour de leur intersection.',
      conclusion:
        'Toute isométrie du plan est la composée d’au plus 3 réflexions : 1 ou 3 pour les antidéplacements, 2 pour les déplacements.',
    },
    revisionChecklist: [
      'Je sais classifier une isométrie selon le nombre de points invariants (plan entier = Id ; droite = réflexion ; 1 point = rotation ; aucun = translation ou symétrie glissée).',
      'Je maîtrise les propriétés des déplacements et antidéplacements (conservation du barycentre, du produit scalaire, du parallélisme).',
      'Je sais composer deux similitudes (angles ajoutés, rapports multipliés) et trouver l’ensemble des points fixes.',
    ],
    keyFormulas: [
      's_Δ’ ◦ s_Δ (Δ // Δ’) = t_{2 HH’⃗}  où H ∈ Δ, H’ ∈ Δ’ et (HH’) ⊥ Δ',
      's_Δ’ ◦ s_Δ (Δ ∩ Δ’ = {Ω}) = r(Ω ; 2 (u⃗_Δ, u⃗_Δ’))',
      'Déplacement sans point fixe = Translation ; avec 1 point fixe = Rotation',
      'Similitude indirecte : z’ = a z̄ + b  (rapport k = |a|, axe de symétrie si k=1)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Isométries & Similitudes',
      slogan: '2 Réflexions = Déplacement · 1 ou 3 = Antidéplacement',
      summaryBulletPoints: [
        'Deux triangles isométriques ont exactement une unique isométrie qui transforme (A, B, C) en (A’, B’, C’).',
        'Pour réduire r(B, β) ◦ r(A, α) : si α + β ≠ 0 [2π], c’est une rotation d’angle α + β ; si α + β ≡ 0 [2π], c’est une translation !',
        'Une similitude de rapport k multiplie les longueurs par k et les aires par k².',
      ],
      verticalFormulas: [
        {
          name: 'Symétrie glissée f = t_{u⃗} ◦ s_Δ  (u⃗ // Δ)',
          badge: '🪞',
          steps: [
            'M’ = s_Δ(M) puis M’’ = t_{u⃗}(M’)',
            'Point invariant : aucun (si u⃗ ≠ 0⃗)',
            'f ◦ f = t_{2u⃗}  (permet de trouver le vecteur u⃗ !)',
            'Axe Δ : ensemble des milieux I de [M, f(M)]',
          ],
          resultHighlight: 'f ◦ f(M) = M + 2u⃗  ➔  Δ = { milieux de [M, f(M)] }',
          explanation: 'Astuce classique Bac C pour caractériser une symétrie glissée !',
        },
      ],
      kokoTip: 'Attention à l’ordre dans s_Δ’ ◦ s_Δ : on applique d’abord Δ puis Δ’, donc l’angle est 2(Δ, Δ’) !',
      pitfallToAvoid: 'Confondre un antidéplacement avec 0 point invariant (symétrie glissée) et une translation (qui est un déplacement).',
    },
    sections: [
      {
        title: '1. Déplacements, antidéplacements et décomposition en réflexions',
        illustrationNote: 'Double réflexion s_Δ’ ◦ s_Δ sur deux axes sécants (angle 2α) puis parallèles (vecteur 2HH’⃗).',
        explanation: [
          'Une isométrie conserve les distances et donc le produit scalaire et le barycentre.',
          'Tout déplacement (conserve l’orientation) s’écrit comme composée de deux réflexions ; tout antidéplacement est soit une réflexion, soit une symétrie glissée.',
        ],
        rules: [
          {
            name: 'Points invariants d’une isométrie plane f',
            description: '3 points non alignés fixes ➔ Id ; 2 points fixes ➔ réflexion (ou Id) ; 1 point fixe ➔ rotation ; 0 point fixe ➔ translation ou symétrie glissée.',
            example: 'Si f est un antidéplacement et f(A) = A, f ne peut être qu’une réflexion d’axe passant par A.',
          },
        ],
        commonMistakes: ['Oublier le facteur 2 dans l’angle 2(D, D’) ou dans le vecteur 2HH’⃗ lors de la composée de deux réflexions.'],
      },
      {
        title: '2. Similitudes planes directes et indirectes',
        illustrationNote: 'Action d’une similitude directe de rapport k et angle θ sur un triangle : conservation de la forme et multiplication des aires par k².',
        explanation: [
          'Une similitude de rapport k > 0 multiplie toutes les distances par k. Toute similitude directe est un déplacement si k = 1.',
          'La composée de deux similitudes de rapports k₁, k₂ a pour rapport k₁ × k₂.',
        ],
        rules: [
          {
            name: 'Effet sur les aires et le cercle',
            description: 'Si Aire(F) = A₀, alors Aire(s(F)) = k² A₀.',
            example: 'k = 3 et Aire(ABC) = 5 cm²  ⟹  Aire(A’B’C’) = 3² × 5 = 45 cm²',
          },
        ],
        commonMistakes: ['Multiplier l’aire par k au lieu de k².'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-iso-1',
        'mathTc-isometries-similitudes',
        'Aire par similitude',
        1,
        'Un triangle ABC a une aire de 12 cm². On applique une similitude plane de rapport k = 2,5. Quelle est l’aire du triangle image A’B’C’ (en cm²) ?',
        '75',
        'L’aire est multipliée par k² = 2,5² = 6,25.',
        '12 × 6,25 = 75 cm².',
        [
          { title: 'Coefficient des aires', explanation: 'k² = (2,5)² = 6,25.', math: 'A’ = k² × A = 6,25 × 12 = 75 cm²' },
        ],
        'cm²'
      ),
      mkQcm(
        'mathTc-iso-2',
        'mathTc-isometries-similitudes',
        'Composée de deux réflexions sécantes',
        2,
        'Deux droites D₁ et D₂ se coupent en O avec (D₁, D₂) = π/6 [π]. Quelle est la nature exacte de s_{D₂} ◦ s_{D₁} ?',
        ['Rotation de centre O et d’angle π/3', 'Rotation de centre O et d’angle π/6', 'Symétrie orthogonale', 'Translation'],
        'Rotation de centre O et d’angle π/3',
        'L’angle de la rotation est le double : 2 × (D₁, D₂).',
        '2 × π/6 = π/3, centre O.',
        [
          { title: 'Théorème des 2 réflexions', explanation: 'Angle = 2 × (π/6) = π/3.', math: 's_{D₂} ◦ s_{D₁} = r(O ; π/3)' },
        ]
      ),
      mkNum(
        'mathTc-iso-3',
        'mathTc-isometries-similitudes',
        'Translation par deux réflexions parallèles',
        2,
        'Soient D₁ : x = 1 et D₂ : x = 5 deux droites parallèles. Quelle est la norme du vecteur u⃗ de la translation s_{D₂} ◦ s_{D₁} ?',
        '8',
        'La norme vaut 2 fois la distance entre D₁ et D₂.',
        'Distance = 5 - 1 = 4, donc norme = 2 × 4 = 8.',
        [
          { title: 'Vecteur 2 HH’⃗', explanation: 'H(1 ; 0) ∈ D₁, H’(5 ; 0) ∈ D₂ ➔ HH’ = 4.', math: '||2 HH’⃗|| = 2 × 4 = 8' },
        ]
      ),
      mkQcm(
        'mathTc-iso-4',
        'mathTc-isometries-similitudes',
        'Nature de r(B, 2π/3) ◦ r(A, 4π/3)',
        3,
        'Soient A ≠ B. Quelle est la nature de la transformation f = r(B ; 2π/3) ◦ r(A ; 4π/3) ?',
        ['Une translation non nulle', 'Une rotation d’angle 2π/3', 'L’identité du plan', 'Une symétrie centrale'],
        'Une translation non nulle',
        'Somme des angles : 2π/3 + 4π/3 = 2π ≡ 0 [2π], et A ≠ B.',
        'La somme des angles est congrue à 0 [2π] et A ≠ B (f(A) = r_B(A) ≠ A), donc f est une translation non nulle.',
        [
          { title: 'Somme des angles', explanation: '4π/3 + 2π/3 = 2π ≡ 0 [2π].', math: 'Donc f est une translation (car A ≠ B ⟹ f(A) ≠ A)' },
        ]
      ),
    ],
  },

  {
    id: 'mathTc-coniques',
    subject: 'maths',
    gradeLevel: 'Terminale C',
    domainId: 'geometrie',
    order: 14,
    title: 'Coniques : Parabole, Ellipse & Hyperbole (Foyers, Directrices & Excentricité)',
    badge: 'Maths Tle C · Ch. 14',
    shortDesc: 'Définition bifocale et foyer-directrice (MF = e MH), équations réduites, sommets, foyers, excentricité e, asymptotes de l’hyperbole et tangentes.',
    themeColor: '#f43f5e',
    themeGradient: 'from-rose-600 via-pink-500 to-orange-400',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-coniques',
    bossMeta: { name: 'MAÎTRE DES CONIQUES', emoji: '🪐', xp: 220 },
    kokoSpeech:
      'Dernier grand chapitre de géométrie de Terminale C : retiens la loi d’or de l’excentricité e = c/a : e = 1 (Parabole), 0 < e < 1 (Ellipse : c² = a² - b²), e > 1 (Hyperbole : c² = a² + b²) !',
    realWorldHook: {
      title: 'Trajectoires planétaires, antennes paraboliques et miroirs hyperboliques',
      scenario:
        'Les lois de Kepler (Physique Ch. 3) montrent que les planètes décrivent des ellipses dont le Soleil occupe un foyer F, tandis que les antennes VSAT concentrent les ondes au foyer d’une parabole.',
      question:
        'Comment reconnaître une conique à partir de son équation quadratique ax² + by² + cx + dy + f = 0 et trouver ses foyers, sommets, excentricité et asymptotes ?',
    },
    unitsTable: [
      { symbol: 'e = 1 (y² = 2px)', quantity: 'Parabole', unit: 'F(p/2 ; 0), D : x = -p/2', instrument: 'Paramètre p > 0' },
      { symbol: '0 < e < 1 (x²/a²+y²/b²=1)', quantity: 'Ellipse (a > b)', unit: 'c² = a² - b² ; e = c/a', instrument: 'MF + MF’ = 2a' },
      { symbol: 'e > 1 (x²/a²-y²/b²=1)', quantity: 'Hyperbole', unit: 'c² = a² + b² ; e = c/a', instrument: 'Asymptotes y = ±(b/a)x' },
      { symbol: 'MF = e · d(M, D)', quantity: 'Définition monofocale', unit: 'Foyer F, directrice D', instrument: 'Directrices x = ± a²/c' },
    ],
    experimentOrActivity: {
      title: 'Classification de l’excentricité e et tracé des 3 coniques',
      materials: ['Foyer F et directrice D', 'Curseur d’excentricité e ∈ [0,2 ; 2,5]', 'Asymptotes y = ±(b/a)x'],
      observation:
        'Lorsque e passe de 0,7 à 1 puis à 1,5, la courbe fermée (ellipse) s’ouvre à l’infini au seuil exact e = 1 (parabole), puis se scinde en deux branches à asymptotes (hyperbole).',
      conclusion:
        'La mise sous forme canonique d’une équation du second degré sans terme xy identifie immédiatement le centre Ω, a, b, c et l’excentricité e.',
    },
    revisionChecklist: [
      'Je sais distinguer c² = a² - b² (Ellipse) et c² = a² + b² (Hyperbole) sans les inverser !',
      'Je sais réduire ax² + by² + cx + dy + f = 0 par mise sous forme canonique et trouver Ω, sommets, foyers et directrices.',
      'Je sais déterminer l’équation de la tangente en un point M₀(x₀, y₀) par dédoublement des termes.',
    ],
    keyFormulas: [
      'Parabole y² = 2px : Sommet O(0,0), Foyer F(p/2, 0), Directrice D : x = -p/2, e = 1',
      'Ellipse x²/a² + y²/b² = 1 (a > b) : c = √(a² - b²), e = c/a < 1, F(±c, 0), Directrices x = ±a²/c',
      'Hyperbole x²/a² - y²/b² = 1 : c = √(a² + b²), e = c/a > 1, Asymptotes y = ±(b/a)x',
      'Tangente en M₀(x₀, y₀) par dédoublement : x² → x₀x ; y² → y₀y ; 2x → x + x₀',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Parabole, Ellipse & Hyperbole',
      slogan: 'e < 1 Ellipse (c²=a²-b²) · e = 1 Parabole · e > 1 Hyperbole (c²=a²+b²)',
      summaryBulletPoints: [
        'Si dans l’ellipse b > a (grand axe sur Oy) : alors c² = b² - a², foyers F(0, ±c) et excentricité e = c / b !',
        'Règle du dédoublement pour la tangente en M₀(x₀, y₀) : remplacer x² par x₀x, y² par y₀y, 2x par (x + x₀), 2y par (y + y₀).',
        'Pour une hyperbole x²/a² - y²/b² = 1, les asymptotes sont immédiates en remplaçant 1 par 0 : x²/a² - y²/b² = 0 ➔ y = ±(b/a)x !',
      ],
      verticalFormulas: [
        {
          name: 'Identification complète de 9x² + 25y² = 225',
          badge: '🪐',
          steps: [
            'Diviser par 225 : x²/25 + y²/9 = 1',
            'a² = 25 (a = 5)  et  b² = 9 (b = 3)  (a > b ➔ grand axe Ox)',
            'c = √(a² - b²) = √(25 - 9) = √16 = 4',
            'Excentricité e = c / a = 4 / 5 = 0,8',
          ],
          resultHighlight: 'Ellipse : a = 5, b = 3, c = 4, e = 0,8, F(±4 ; 0)',
          explanation: 'Le triplet pythagoricien (3 ; 4 ; 5) est un classique du Bac C !',
        },
      ],
      kokoTip: 'Moyen mnémotechnique : dans l’Équation de l’Ellipse il y a un +, donc dans c² il y a un - (c² = a² - b²) ; dans l’Hyperbole il y a un -, donc c² = a² + b² !',
      pitfallToAvoid: 'Confondre l’axe focal quand b > a dans une ellipse, ou inverser a/b et b/a dans les asymptotes de l’hyperbole.',
    },
    sections: [
      {
        title: '1. Parabole, Ellipse et Hyperbole : équations réduites et éléments',
        illustrationNote: 'Comparaison visuelle des 3 coniques : parabole (e=1), ellipse (e<1) avec foyers F, F’, et hyperbole (e>1) avec asymptotes.',
        explanation: [
          'Toute conique propre est le lieu des points M tels que MF = e · d(M, D) où F est un foyer, D la directrice associée et e > 0 l’excentricité.',
          'Par translation du repère au centre Ω (ou sommet S pour la parabole), on se ramène toujours à une équation réduite.',
        ],
        rules: [
          {
            name: 'Règle de dédoublement pour la tangente en M₀(x₀, y₀)',
            description: 'Valable pour toutes les coniques (cercle, parabole, ellipse, hyperbole).',
            example: 'Ellipse x²/25 + y²/9 = 1 en M₀(5, 0) : (5x)/25 + 0 = 1 ⟹ tangente verticale x = 5',
          },
        ],
        commonMistakes: ['Utiliser c² = a² + b² pour une ellipse (dans une ellipse c < a donc c² = a² - b²).'],
      },
      {
        title: '2. Représentation paramétrique et mise sous forme canonique',
        illustrationNote: 'Cercle principal de rayon a et paramétrage (a cos θ, b sin θ) d’une ellipse ; branches d’hyperbole.',
        explanation: [
          'Une ellipse centrée en O s’écrit paramétriquement M(θ) = (a cos θ ; b sin θ) pour θ ∈ [0 ; 2π[.',
          'En développant une équation du type Ax² + By² + Cx + Dy + E = 0, le signe du produit AB indique le genre : AB = 0 (parabole), AB > 0 (ellipse), AB < 0 (hyperbole).',
        ],
        rules: [
          {
            name: 'Critère rapide sur Ax² + By² + ... = 0',
            description: 'Si A et B de même signe (et A≠B) : ellipse ; signes opposés : hyperbole ; un seul nul : parabole.',
            example: '4x² - 9y² - 8x + 36y - 68 = 0 ➔ 4(x-1)² - 9(y-2)² = 36 ➔ Hyperbole centrée en Ω(1 ; 2)',
          },
        ],
        commonMistakes: ['Oublier de diviser par 36 dans 4(x-1)² - 9(y-2)² = 36 pour lire a² = 9 et b² = 4.'],
      },
    ],
    exercises: [
      mkNum(
        'mathTc-con-1',
        'mathTc-coniques',
        'Excentricité d’une ellipse',
        1,
        'Soit l’ellipse d’équation x²/169 + y²/25 = 1. Calcule son excentricité e (arrondie à 0,01 près).',
        '0.92',
        'a = 13, b = 5, donc c = √(169 - 25) = 12, et e = c/a.',
        'c = √144 = 12, donc e = 12/13 ≈ 0,92.',
        [
          { title: 'Demi-axes', explanation: 'a = 13, b = 5.', math: 'c = √(13² - 5²) = √144 = 12' },
          { title: 'Excentricité', explanation: 'e = c/a.', math: 'e = 12 / 13 ≈ 0,92' },
        ]
      ),
      mkNum(
        'mathTc-con-2',
        'mathTc-coniques',
        'Foyer d’une parabole',
        1,
        'Soit la parabole d’équation y² = 12x. Quelle est l’abscisse x_F de son foyer F ?',
        '3',
        'Compare à y² = 2px : 2p = 12 donc p = 6, et x_F = p/2.',
        '2p = 12 ⟹ p = 6 ⟹ x_F = p/2 = 3.',
        [
          { title: 'Paramètre p', explanation: 'y² = 2px = 12x ⟹ p = 6.', math: 'x_F = p/2 = 3' },
        ]
      ),
      mkQcm(
        'mathTc-con-3',
        'mathTc-coniques',
        'Asymptotes d’une hyperbole',
        2,
        'Quelles sont les équations des asymptotes de l’hyperbole x²/9 - y²/16 = 1 ?',
        ['y = ± (4/3) x', 'y = ± (3/4) x', 'y = ± (16/9) x', 'x = ± 3'],
        'y = ± (4/3) x',
        'Résous x²/9 - y²/16 = 0 avec a = 3 et b = 4.',
        'y²/16 = x²/9 ⟹ y = ± (4/3) x.',
        [
          { title: 'Forme réduite', explanation: 'a = 3, b = 4.', math: 'y = ± (b/a) x = ± (4/3) x' },
        ]
      ),
      mkNum(
        'mathTc-con-4',
        'mathTc-coniques',
        'Demi-distance focale d’une hyperbole',
        3,
        'Calcule la distance focale 2c de l’hyperbole d’équation 9x² - 16y² = 144.',
        '10',
        'Divise par 144 : x²/16 - y²/9 = 1, donc a² = 16, b² = 9 et c² = a² + b².',
        'c = √(16 + 9) = 5, donc la distance focale 2c = 10.',
        [
          { title: 'Mise sous forme réduite', explanation: 'Diviser par 144.', math: 'x²/16 - y²/9 = 1  (a²=16, b²=9)' },
          { title: 'Distance focale', explanation: 'c = √(16+9) = 5.', math: '2c = 10' },
        ]
      ),
    ],
  },
];
