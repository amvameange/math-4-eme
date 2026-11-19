import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_TC_MECANIQUE: Chapter[] = [
  {
    id: 'physTc-cinematique',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'mecanique',
    order: 1,
    title: 'Cinématique du Point : Repères, Vitesse, Accélération & Frenet',
    badge: 'Physique Tle C · Ch. 1',
    shortDesc: 'Vecteurs position, vitesse et accélération en coordonnées cartésiennes et dans le repère de Frenet (a_T = dv/dt, a_N = v²/R).',
    themeColor: '#10b981',
    themeGradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-cinematique-frenet',
    bossMeta: { name: 'MAÎTRE DE LA CINÉMATIQUE', emoji: '🚀', xp: 200 },
    kokoSpeech:
      'Mbolo bachelier de Terminale C ! Retiens bien les deux composantes de l’accélération dans le repère de Frenet : a_T = dv/dt gère la variation de la norme de la vitesse, et a_N = v²/R pointe toujours vers le centre de courbure !',
    realWorldHook: {
      title: 'Le train Transgabonais en courbe vers Booué',
      scenario:
        'Un train du Transgabonais aborde une courbe circulaire de rayon R = 500 m à la vitesse constante v = 72 km/h (20 m/s), puis accélère tangentiellement à a_T = 0,4 m/s² sur une portion rectiligne.',
      question:
        'Quelle est l’accélération normale a_N dans le virage et comment écrire les équations horaires x(t) et v(t) en phase accélérée ?',
    },
    unitsTable: [
      { symbol: 'OM⃗(t)', quantity: 'Vecteur position', unit: 'mètre (m)', instrument: 'Repère (O; i⃗, j⃗, k⃗)' },
      { symbol: 'v⃗(t) = dOM⃗/dt', quantity: 'Vecteur vitesse instantanée', unit: 'm·s⁻¹', instrument: 'Dérivée 1re / chronophotographie' },
      { symbol: 'a⃗(t) = dv⃗/dt', quantity: 'Vecteur accélération', unit: 'm·s⁻²', instrument: 'a_T = dv/dt ; a_N = v²/R' },
      { symbol: 'θ(t), ω', quantity: 'Abscisse & vitesse angulaires', unit: 'rad et rad·s⁻¹', instrument: 's = R·θ ; v = R·ω' },
    ],
    experimentOrActivity: {
      title: 'Analyse d’un enregistrement sur table à coussin d’air (mobile autoporteur)',
      materials: ['Mobile autoporteur', 'Table à coussin d’air', 'Éclateur à intervalle τ = 40 ms', 'Règle graduée'],
      observation:
        'Les positions M_i sont séparées par des intervalles de temps égaux τ. On calcule v_i = M_{i-1}M_{i+1} / (2τ) puis Δv⃗_i = v⃗_{i+1} - v⃗_{i-1} et a⃗_i = Δv⃗_i / (2τ).',
      conclusion:
        'En mouvement rectiligne uniformément varié, le vecteur accélération a⃗ est constant et colinéaire à la trajectoire ; en mouvement circulaire uniforme, a⃗ = a_N n⃗ est centripète.',
    },
    revisionChecklist: [
      'Je sais dériver x(t), y(t), z(t) pour obtenir v⃗(t) puis a⃗(t), et éliminer t pour trouver l’équation cartésienne y(x).',
      'Je maîtrise les formules du MRUV : x(t) = ½ a t² + v₀ t + x₀ et la relation indépendante du temps v² - v₀² = 2a(x - x₀).',
      'Je sais calculer a_T = dv/dt, a_N = v²/R et l’accélération totale a = √(a_T² + a_N²) dans le repère de Frenet.',
    ],
    keyFormulas: [
      'v⃗ = dOM⃗/dt  et  a⃗ = dv⃗/dt = d²OM⃗/dt²',
      'MRUV : x(t) = ½ a t² + v₀ t + x₀ ;  v(t) = a t + v₀ ;  v² - v₀² = 2 a (x - x₀)',
      'Frenet : a⃗ = (dv/dt) u⃗_T + (v²/R) u⃗_N  (norme a = √(a_T² + a_N²))',
      'Circulaire uniforme : ω = 2π/T = 2πN ;  v = Rω ;  a_N = Rω² = v²/R',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Cinématique & Repère de Frenet',
      slogan: 'Cartésien (i⃗, j⃗, k⃗) · Équations horaires · Frenet (u⃗_T, u⃗_N)',
      summaryBulletPoints: [
        'Si a⃗·v⃗ > 0 le mouvement est accéléré ; si a⃗·v⃗ < 0 il est décéléré ; si a⃗·v⃗ = 0 il est uniforme.',
        'Mouvement rectiligne uniforme (MRU) : a⃗ = 0⃗ ➔ v⃗ = cte et x(t) = v t + x₀.',
        'Mouvement circulaire uniforme (MCU) : v = cte donc a_T = 0, mais a = a_N = v²/R ≠ 0 (centripète).',
        'Abscisse curviligne s = R·θ et θ(t) = ω t + θ₀ (MCU) ou ½ α t² + ω₀ t + θ₀ (MCUV).',
      ],
      verticalFormulas: [
        {
          name: 'Accélération dans le repère de Frenet',
          badge: '🧭',
          steps: [
            'v = 20 m/s | R = 500 m | a_T = 0 m/s²',
            'a_N = v² ÷ R',
            'a_N = 20² ÷ 500 = 400 ÷ 500',
            'a_N = 0,80 m/s²',
          ],
          resultHighlight: 'a = a_N = 0,80 m/s²',
          explanation: 'Même à vitesse constante en virage, il existe une accélération centripète non nulle.',
        },
        {
          name: 'Relation indépendante du temps (MRUV)',
          badge: '⏱️',
          steps: [
            'v(t) = a t + v₀  et  x(t) = ½ a t² + v₀ t + x₀',
            't = (v - v₀) ÷ a',
            'v² - v₀² = 2 · a · (x - x₀)',
          ],
          resultHighlight: 'v² - v₀² = 2 a Δx',
          explanation: 'Indispensable au Bac C quand l’énoncé ne donne pas la durée t du trajet.',
        },
      ],
      kokoTip: 'Convertis toujours km/h en m/s en divisant par 3,6 avant tout calcul de v²/R !',
      pitfallToAvoid: 'Dire qu’un mouvement circulaire uniforme a une accélération nulle (faux : a_N = v²/R ≠ 0) !',
    },
    sections: [
      {
        title: '1. Vecteurs position, vitesse et accélération',
        explanation: [
          'Dans un repère orthonormé (O; i⃗, j⃗, k⃗), le vecteur position d’un point M est OM⃗(t) = x(t)i⃗ + y(t)j⃗ + z(t)k⃗.',
          'Le vecteur vitesse v⃗ = dOM⃗/dt est toujours tangent à la trajectoire et orienté dans le sens du mouvement. Le vecteur accélération a⃗ = dv⃗/dt est dirigé vers l’intérieur de la concavité de la trajectoire.',
        ],
        rules: [
          {
            name: 'Équation de la trajectoire et dérivées successives',
            description: 'On obtient l’équation cartésienne y = f(x) en éliminant le paramètre temps t entre x(t) et y(t).',
            example: 'x(t) = 4t  ;  y(t) = -5t² + 10t | t = x / 4 | y(x) = -(5/16)x² + 2,5x',
            tip: 'Vérifie toujours les unités des constantes devant t et t² (m·s⁻¹ et m·s⁻²).',
          },
        ],
        commonMistakes: [
          'Dériver la norme ||v⃗|| au lieu de calculer ||dv⃗/dt|| pour obtenir l’accélération totale.',
        ],
      },
      {
        title: '2. Mouvements rectilignes, circulaires et repère de Frenet',
        explanation: [
          'Dans le repère local de Frenet (M; u⃗_T, u⃗_N), u⃗_T est tangent au sens du mouvement et u⃗_N est orthogonal à u⃗_T dirigé vers le centre de courbure.',
          'On démontre en Terminale C que a⃗ = a_T u⃗_T + a_N u⃗_N avec a_T = dv/dt et a_N = v²/R.',
        ],
        rules: [
          {
            name: 'Repère de Frenet (u⃗_T, u⃗_N)',
            description: 'Permet d’identifier instantanément la nature du mouvement et le rayon de courbure R = v² / a_N.',
            example: 'v = 10 m/s  ;  a_T = 3 m/s²  ;  R = 25 m | a_N = 10² ÷ 25 = 4 m/s² | a = √(3² + 4²) = 5 m/s²',
            tip: 'Un triangle (3 ; 4 ; 5) apparaît très souvent dans les sujets de Bac C !',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-1-1',
        'physTc-cinematique',
        'Ex 1 : Accélération normale dans le repère de Frenet',
        1,
        'Un mobile décrit un cercle de rayon R = 2,0 m à la vitesse constante v = 6,0 m/s.\nCalcule la norme de son accélération a (en m/s²).',
        '18',
        'v = cte donc a_T = 0 et a = a_N = v² / R.',
        'L’accélération centripète vaut a = 18 m/s².',
        [
          {
            title: 'Composante tangentielle',
            explanation: 'Le mouvement est uniforme (v constante).',
            math: 'a_T = dv/dt = 0 m/s²',
            subResult: 'a_T = 0',
          },
          {
            title: 'Composante normale',
            explanation: 'On applique la formule de Frenet a_N = v² / R.',
            math: 'a = a_N = 6,0² ÷ 2,0 = 36 ÷ 2 = 18 m/s²',
            subResult: 'a = 18 m/s²',
          },
        ],
        'm/s²'
      ),
      mkQcm(
        'physTc-1-2',
        'physTc-cinematique',
        'Ex 2 : Nature d’un mouvement à partir du produit scalaire a⃗·v⃗',
        1,
        'À un instant t, un point mobile possède un vecteur vitesse v⃗ et un vecteur accélération a⃗ tels que a⃗ · v⃗ < 0.\nQue peut-on affirmer à cet instant ?',
        [
          'Le mouvement est décéléré (ralenti)',
          'Le mouvement est accéléré',
          'Le mouvement est uniforme',
          'La trajectoire est obligatoirement rectiligne',
        ],
        'Le mouvement est décéléré (ralenti)',
        'a⃗·v⃗ = a_T · v = v · (dv/dt).',
        'Comme v > 0, a⃗·v⃗ < 0 implique dv/dt < 0 : la norme de la vitesse diminue.',
        [
          {
            title: 'Projeter sur la tangente',
            explanation: 'Dans Frenet, v⃗ = v u⃗_T donc a⃗·v⃗ = v·a_T = v·(dv/dt).',
            math: 'a⃗·v⃗ < 0  et  v > 0 ➔ dv/dt < 0',
            subResult: 'Mouvement décéléré',
          },
        ]
      ),
      mkNum(
        'physTc-1-3',
        'physTc-cinematique',
        'Ex 3 : Distance d’arrêt par relation indépendante du temps',
        2,
        'Une voiture roulant à v₀ = 72 km/h (20 m/s) freine avec une décélération constante a = -4,0 m/s² jusqu’à l’arrêt complet (v = 0).\nCalcule la distance de freinage d en mètres.',
        '50',
        'Utilise v² - v₀² = 2·a·d.',
        'La distance d’arrêt est d = 50 m.',
        [
          {
            title: 'Écrire la relation du MRUV',
            explanation: 'La vitesse finale est v = 0 m/s.',
            math: '0² - 20² = 2 × (-4,0) × d',
            subResult: '-400 = -8 d',
          },
          {
            title: 'Calculer d',
            explanation: 'On isole d.',
            math: 'd = 400 ÷ 8 = 50 m',
            subResult: 'd = 50 m',
          },
        ],
        'm'
      ),
      mkNum(
        'physTc-1-4',
        'physTc-cinematique',
        'Ex 4 : Accélération totale en mouvement circulaire varié',
        3,
        'Un mobile décrit un cercle de rayon R = 4,0 m. À l’instant t, sa vitesse vaut v = 4,0 m/s et son accélération tangentielle est a_T = 3,0 m/s².\nCalcule la norme du vecteur accélération a⃗ (en m/s²).',
        '5',
        'Calcule d’abord a_N = v²/R puis a = √(a_T² + a_N²).',
        'La norme de l’accélération vaut a = 5 m/s².',
        [
          {
            title: 'Accélération normale',
            explanation: 'On applique a_N = v²/R.',
            math: 'a_N = 4,0² ÷ 4,0 = 4,0 m/s²',
            subResult: 'a_N = 4,0 m/s²',
          },
          {
            title: 'Norme totale',
            explanation: 'Les vecteurs u⃗_T et u⃗_N sont orthogonaux.',
            math: 'a = √(3,0² + 4,0²) = √25 = 5,0 m/s²',
            subResult: 'a = 5 m/s²',
          },
        ],
        'm/s²'
      ),
    ],
  },

  {
    id: 'physTc-dynamique',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'mecanique',
    order: 2,
    title: 'Dynamique : Lois de Newton, Balistique & Particules dans E⃗ et B⃗',
    badge: 'Physique Tle C · Ch. 2',
    shortDesc: 'Théorème du centre d’inertie (ΣF⃗ = m·a⃗), tir parabolique dans un champ de pesanteur uniforme, force électrique qE⃗ et force magnétique de Lorentz qv⃗∧B⃗.',
    themeColor: '#0ea5e9',
    themeGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-dynamique-lorentz',
    bossMeta: { name: 'STRATÈGE DE NEWTON & LORENTZ', emoji: '⚡', xp: 200 },
    kokoSpeech:
      'Attention à la différence cruciale au Bac C : la force électrique F⃗_e = qE⃗ modifie l’énergie cinétique (parabole), alors que la force magnétique F⃗_m = qv⃗∧B⃗ est toujours perpendiculaire à v⃗ : son travail est nul et la trajectoire dans B⃗ uniforme (v⃗₀ ⊥ B⃗) est circulaire uniforme de rayon R = mv / (|q|B) !',
    realWorldHook: {
      title: 'Spectromètre de masse pour l’analyse minérale (COMILOG Moanda)',
      scenario:
        'Pour séparer des isotopes ionisés de manganèse ou d’uranium issus des mines du Gabon, on les accélère sous une tension U puis on les injecte perpendiculairement dans un champ magnétique uniforme B⃗.',
      question:
        'Comment calculer la vitesse acquise v = √(2|q|U/m) et le rayon R de la trajectoire circulaire dans le champ B⃗ ?',
    },
    unitsTable: [
      { symbol: 'ΣF⃗ = m a⃗_G', quantity: '2e loi de Newton (TCI)', unit: 'N = kg·m·s⁻²', instrument: 'Référentiel galiléen' },
      { symbol: 'F⃗_e = q E⃗', quantity: 'Force électrostatique', unit: 'N (E en V/m)', instrument: 'Condensateur plan E = U/d' },
      { symbol: 'F⃗_m = q v⃗ ∧ B⃗', quantity: 'Force magnétique de Lorentz', unit: 'N (B en Tesla T)', instrument: 'Règle des 3 doigts / produit vectoriel' },
      { symbol: 'R = mv / (|q|B)', quantity: 'Rayon de giration cyclotron', unit: 'mètre (m)', instrument: 'Chambre de déviation magnétique' },
    ],
    experimentOrActivity: {
      title: 'Déflexion d’un faisceau d’électrons dans un tube de Crookes / oscillographe',
      materials: ['Tube cathodique', 'Bobines de Helmholtz (B⃗)', 'Plaques de déviation (E⃗)', 'Alimentation THT'],
      observation:
        'Entre les plaques du condensateur (E⃗ uniforme), le faisceau suit une parabole déviée vers l’armature positive. En présence du champ B⃗ uniforme, il s’incurve en arc de cercle.',
      conclusion:
        'La 2e loi de Newton relie directement le bilan des forces à l’accélération a⃗ : accélération constante dans E⃗ (parabole), accélération centripète constante dans B⃗ (cercle).',
    },
    revisionChecklist: [
      'Je sais établir l’équation de la trajectoire parabolique d’un projectile : y(x) = -½ g x² / (v₀² cos²α) + x tan α + y₀.',
      'Je sais appliquer le théorème de l’énergie cinétique ΔEc = |q|U dans un accélérateur linéaire.',
      'Je sais démontrer que dans B⃗ uniforme (v⃗₀ ⊥ B⃗), le mouvement est plan, uniforme et circulaire de rayon R = mv/(|q|B) et période T = 2πm/(|q|B).',
    ],
    keyFormulas: [
      '2e loi de Newton (TCI) : ΣF⃗_ext = m·a⃗_G',
      'Balistique (sans frottements) : y(x) = -[g / (2 v₀² cos²α)] x² + (tan α) x + y₀ ; Portée : x_P = v₀² sin(2α) / g',
      'Accélération électrique : ½ m v² = |q| U  ➔  v = √(2 |q| U / m)',
      'Cyclotron dans B⃗ : F_m = |q| v B = m v² / R  ➔  R = m v / (|q| B)  et  T = 2π m / (|q| B)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Dynamique, Balistique & Champs E⃗, B⃗',
      slogan: 'Système + Référentiel galiléen + Bilan des forces ➔ ΣF⃗ = m·a⃗',
      summaryBulletPoints: [
        'Toujours définir : 1) Le système étudié, 2) Le référentiel galiléen, 3) Le bilan des forces.',
        'Au sommet S de la parabole balistique, v_y = 0 donc v_S = v₀ cos α (non nulle !) et a⃗ = g⃗.',
        'La force de Lorentz F⃗ = q v⃗ ∧ B⃗ a une puissance nulle P = F⃗·v⃗ = 0 : elle ne fait jamais varier l’énergie cinétique !',
        'Dans un sélecteur de vitesse (E⃗ ⊥ B⃗ croisés), la particule passe sans déviation si qE = qvB soit v = E / B.',
      ],
      verticalFormulas: [
        {
          name: 'Portée maximale & Flèche d’un projectile',
          badge: '🎯',
          steps: [
            'Au sommet S : v_y(t_S) = -g t_S + v₀ sin α = 0',
            't_S = (v₀ sin α) ÷ g',
            'Flèche : y_max = (v₀² sin²α) ÷ (2g)',
            'Portée (y = 0) : X_P = (v₀² sin(2α)) ÷ g',
          ],
          resultHighlight: 'Portée max pour α = 45°',
          explanation: 'sin(2α) vaut 1 au maximum lorsque 2α = 90°, soit α = 45°.',
        },
        {
          name: 'Rayon R dans un champ magnétique B⃗',
          badge: '🧲',
          steps: [
            'a⃗ = (q/m) v⃗ ∧ B⃗  ➔  a_T = 0 (v = cte) et a_N = |q| v B / m',
            'Or a_N = v² / R',
            'v² / R = |q| v B / m',
            'R = (m · v) ÷ (|q| · B)',
          ],
          resultHighlight: 'R = mv / (|q|B)',
          explanation: 'Deux isotopes de même charge q ont des rayons R proportionnels à √m après accélération par U.',
        },
      ],
      kokoTip: 'N’oublie pas le signe de q (négatif pour un électron : q = -e) quand tu orientes F⃗_e = qE⃗ ou F⃗_m = qv⃗∧B⃗ !',
      pitfallToAvoid: 'Oublier que la vitesse au sommet d’une trajectoire parabolique vaut v₀ cos α (et non 0) !',
    },
    sections: [
      {
        title: '1. Lois de Newton & Mouvement dans un champ de pesanteur uniforme',
        explanation: [
          'En l’absence de frottements, un projectile de masse m lancé avec une vitesse initiale v⃗₀ faisant l’angle α avec l’horizontale n’est soumis qu’à son poids P⃗ = m g⃗.',
          'Par le théorème du centre d’inertie, a⃗ = g⃗ : le mouvement est rectiligne uniforme suivant Ox (x = v₀ cos α · t) et uniformément varié suivant Oz (z = -½ g t² + v₀ sin α · t + z₀).',
        ],
        rules: [
          {
            name: 'Équation de la trajectoire parabolique',
            description: 'En tirant t = x / (v₀ cos α) et en injectant dans z(t), on obtient une parabole tournée vers le bas.',
            example: 'v₀ = 20 m/s  ;  α = 45°  ;  g = 10 m/s² | X_P = 20² × sin(90°) ÷ 10 | X_P = 40 m',
            tip: 'La flèche maximale vaut y_max = (v₀² sin²α)/(2g).',
          },
        ],
        commonMistakes: [
          'Appliquer v² = 2gh sur l’axe vertical avec v₀ au lieu de v₀y = v₀ sin α.',
        ],
      },
      {
        title: '2. Particules chargées dans E⃗ uniforme et B⃗ uniforme',
        explanation: [
          'Entre deux plaques parallèles distantes de d sous tension U, le champ E = U/d produit une accélération constante a⃗ = (q/m) E⃗. Le théorème de l’énergie cinétique donne ΔEc = q U_AB.',
          'Dans un champ magnétique uniforme B⃗ avec v⃗₀ ⊥ B⃗, F⃗_m = qv⃗∧B⃗ est centripète et de norme constante |q|vB : la trajectoire est un arc de cercle de rayon R = mv / (|q|B).',
        ],
        rules: [
          {
            name: 'Déflexion électrostatique & Force de Lorentz',
            description: 'À la sortie d’un condensateur de longueur ℓ, la déviation angulaire vérifie tan θ = (|q| E ℓ) / (m v₀²).',
            example: 'm = 1,67×10⁻²⁷ kg ; v = 2,0×10⁵ m/s ; q = 1,6×10⁻¹⁹ C ; B = 0,2 T | R = (1,67×10⁻²⁷ × 2×10⁵) ÷ (1,6×10⁻¹⁹ × 0,2) | R ≈ 1,04 cm',
            tip: 'Dans B⃗, la période T = 2πm/(|q|B) ne dépend pas de la vitesse v (principe du cyclotron).',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-2-1',
        'physTc-dynamique',
        'Ex 1 : Portée maximale d’un lancer (g = 10 m/s²)',
        1,
        'Un athlète lance un poids depuis le sol avec v₀ = 15 m/s sous l’angle optimal α = 45° (g = 10 m/s²).\nCalcule la portée X_P en mètres.',
        '22.5',
        'X_P = v₀² · sin(2α) / g avec sin(90°) = 1.',
        'La portée est X_P = 22,5 m.',
        [
          {
            title: 'Formule de la portée',
            explanation: 'Départ et arrivée à la même altitude z = 0.',
            math: 'X_P = (v₀² × sin(2α)) ÷ g',
            subResult: 'sin(90°) = 1',
          },
          {
            title: 'Application numérique',
            explanation: 'On remplace v₀ = 15 m/s et g = 10 m/s².',
            math: 'X_P = 15² × 1 ÷ 10 = 225 ÷ 10 = 22,5 m',
            subResult: 'X_P = 22,5 m',
          },
        ],
        'm'
      ),
      mkNum(
        'physTc-2-2',
        'physTc-dynamique',
        'Ex 2 : Champ électrostatique dans un condensateur plan',
        1,
        'Deux plaques parallèles distantes de d = 4,0 cm sont soumises à une tension U = 800 V.\nCalcule la norme du champ électrostatique E (en kV/m).',
        '20',
        'E = U / d en convertissant d = 0,04 m, puis en kV/m.',
        'Le champ vaut E = 20 000 V/m = 20 kV/m.',
        [
          {
            title: 'Conversion de la distance',
            explanation: 'On passe en mètres.',
            math: 'd = 4,0 cm = 0,04 m',
            subResult: 'd = 0,04 m',
          },
          {
            title: 'Calcul de E',
            explanation: 'E = U / d.',
            math: 'E = 800 ÷ 0,04 = 20 000 V/m = 20 kV/m',
            subResult: '20 kV/m',
          },
        ],
        'kV/m'
      ),
      mkNum(
        'physTc-2-3',
        'physTc-dynamique',
        'Ex 3 : Filtre de vitesses de Wien (champs croisés E⃗ et B⃗)',
        2,
        'Des ions entrent dans un sélecteur de vitesse où règnent E = 4,0×10⁴ V/m et B = 0,20 T perpendiculaires.\nQuelle vitesse v (en km/s) permet aux ions de traverser sans être déviés ?',
        '200',
        'Condition d’équilibre qE = qvB donc v = E / B.',
        'Les ions non déviés ont v = 2,0×10⁵ m/s = 200 km/s.',
        [
          {
            title: 'Égalité des forces',
            explanation: 'Force électrique et force de Lorentz se compensent.',
            math: '|q|E = |q|vB ➔ v = E ÷ B',
            subResult: 'v = E/B',
          },
          {
            title: 'Calcul',
            explanation: 'Calcul en m/s puis conversion en km/s.',
            math: 'v = 40 000 ÷ 0,20 = 200 000 m/s = 200 km/s',
            subResult: '200 km/s',
          },
        ],
        'km/s'
      ),
      mkQcm(
        'physTc-2-4',
        'physTc-dynamique',
        'Ex 4 : Travail de la force magnétique de Lorentz',
        2,
        'Un proton pénètre avec une vitesse v₀ dans une région où règne un champ magnétique uniforme B⃗ constant. Que vaut son énergie cinétique après une demi-circonférence ?',
        [
          'Elle reste strictement identique à l’énergie cinétique initiale',
          'Elle double sous l’effet du champ B⃗',
          'Elle est multipliée par π',
          'Elle devient nulle au bout d’un demi-tour',
        ],
        'Elle reste strictement identique à l’énergie cinétique initiale',
        'F⃗_m = q v⃗ ∧ B⃗ est toujours orthogonale à v⃗.',
        'La puissance P = F⃗_m · v⃗ = 0 donc le travail de la force de Lorentz est nul et Ec reste constante.',
        [
          {
            title: 'Orthogonalité permanente',
            explanation: 'Par définition du produit vectoriel, q(v⃗∧B⃗) ⊥ v⃗.',
            math: 'P = F⃗_m · v⃗ = 0 ➔ dEc/dt = 0',
            subResult: 'Ec = cte',
          },
        ]
      ),
    ],
  },

  {
    id: 'physTc-gravitation',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'mecanique',
    order: 3,
    title: 'Champ de Gravitation, Satellites & Lois de Kepler',
    badge: 'Physique Tle C · Ch. 3',
    shortDesc: 'Loi universelle de Newton, champ g(h), satellite en orbite circulaire (v, T), satellites géostationnaires et 3ème loi de Kepler (T²/r³ = cte).',
    themeColor: '#3b82f6',
    themeGradient: 'from-blue-500 via-indigo-500 to-purple-500',
    readingTimeMinutes: 15,
    illustrationKey: 'tc-gravitation-kepler',
    bossMeta: { name: 'ASTROPHYSICIEN KEPLER', emoji: '🛰️', xp: 200 },
    kokoSpeech:
      'En mécanique céleste Terminale C, tout démarre avec le référentiel géocentrique (pour un satellite terrestre) ou héliocentrique (pour une planète) : G·M·m / r² = m·v² / r ! De là, tu retrouves en 3 lignes v, ω, T et la 3ème loi de Kepler !',
    realWorldHook: {
      title: 'Satellite de télédétection gabonais sur l’Équateur',
      scenario:
        'Un satellite géostationnaire surveille le bassin du Congo et les forêts du Gabon à la verticale fixe d’un point de l’Équateur, à l’altitude h ≈ 35 786 km (rayon terrestre R_T = 6 380 km, g₀ = 9,81 m/s²).',
      question:
        'Pourquoi un satellite géostationnaire doit-il impérativement évoluer dans le plan équatorial avec une période T = 86 164 s ?',
    },
    unitsTable: [
      { symbol: 'G', quantity: 'Constante de gravitation universelle', unit: '6,67×10⁻¹¹ N·m²·kg⁻²', instrument: 'Loi de Newton' },
      { symbol: 'r = R_T + h', quantity: 'Rayon de l’orbite circulaire', unit: 'mètre (m)', instrument: 'Altitude h + R_T' },
      { symbol: 'v = √(GM/r)', quantity: 'Vitesse orbitale du satellite', unit: 'm·s⁻¹', instrument: 'F_G = m v²/r' },
      { symbol: 'T²/r³ = 4π²/(GM)', quantity: '3e loi de Kepler', unit: 's²·m⁻³', instrument: 'Indépendante de m_sat' },
    ],
    experimentOrActivity: {
      title: 'Vérification de la 3e loi de Kepler à partir des satellites galiléens de Jupiter',
      materials: ['Données astronomiques (Io, Europe, Ganymède, Callisto)', 'Calculatrice scientifique', 'Papier millimétré'],
      observation:
        'En calculant T²/r³ pour chacun des 4 satellites de Jupiter, on trouve exactement la même constante k ≈ 3,11×10⁻¹⁶ s²·m⁻³.',
      conclusion:
        'Le rapport T²/r³ ne dépend que de la masse M de l’astre attracteur, ce qui permet de peser les planètes et les étoiles !',
    },
    revisionChecklist: [
      'Je sais démontrer que le mouvement d’un satellite en orbite circulaire est uniforme et calculer v = √(G M_T / (R_T + h)).',
      'Je sais remplacer G·M_T par g₀·R_T² quand la masse M_T n’est pas donnée directement dans l’énoncé.',
      'Je connais les 3 conditions d’un satellite géostationnaire : orbite circulaire dans le plan équatorial, même sens de rotation que la Terre, période T = T_sidérale ≈ 23 h 56 min 4 s.',
    ],
    keyFormulas: [
      'Force : F = G · M · m / r²  ;  Champ à l’altitude h : g(h) = G M_T / (R_T + h)² = g₀ · [R_T / (R_T + h)]²',
      'Vitesse orbitale : v = √(G M_T / r) = R_T √(g₀ / (R_T + h))',
      'Période : T = 2π r / v = 2π √(r³ / (G M_T))',
      '3e loi de Kepler : T² / r³ = 4π² / (G M_T)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Gravitation & Lois de Kepler',
      slogan: 'F_G = m · a_N ➔ v = √(GM/r) ➔ T²/r³ = 4π²/(GM)',
      summaryBulletPoints: [
        'Toujours exprimer les distances r = R_T + h en mètres (et non en km !).',
        'À la surface : g₀ = G M_T / R_T² ➔ astuce Bac C : G M_T = g₀ R_T² !',
        'La vitesse et la période d’un satellite sont indépendantes de sa propre masse m.',
        'Plus l’altitude h augmente, plus la vitesse orbitale v diminue et plus la période T augmente.',
      ],
      verticalFormulas: [
        {
          name: 'Astuce d’or : Remplacer GM_T par g₀ R_T²',
          badge: '🌍',
          steps: [
            'À h = 0 : g₀ = G · M_T / R_T²',
            'Donc : G · M_T = g₀ · R_T²',
            'g(h) = g₀ · R_T² / (R_T + h)²',
            'v = R_T · √(g₀ / (R_T + h))',
          ],
          resultHighlight: 'GM_T = g₀ R_T²',
          explanation: 'Permet de résoudre l’exercice même si G et M_T ne sont pas fournis.',
        },
        {
          name: 'Démonstration de la 3e loi de Kepler',
          badge: '🪐',
          steps: [
            'G M m / r² = m v² / r  ➔  v² = G M / r',
            'Or v = 2π r / T  ➔  v² = 4π² r² / T²',
            '4π² r² / T² = G M / r',
            'T² / r³ = 4π² / (G M)',
          ],
          resultHighlight: 'T² / r³ = cte',
          explanation: 'Démonstration classique sur 3 points au Baccalauréat Série C.',
        },
      ],
      kokoTip: 'Pour comparer deux satellites autour de la Terre, utilise directement (T₁/T₂)² = (r₁/r₂)³ sans recalculer G·M_T !',
      pitfallToAvoid: 'Oublier d’ajouter le rayon de la Terre R_T à l’altitude h dans r = R_T + h !',
    },
    sections: [
      {
        title: '1. Champ de gravitation et variation de g(h) avec l’altitude',
        explanation: [
          'Tout corps à symétrie sphérique de masse M crée à la distance r ≥ R de son centre un champ de gravitation centripète G⃗(r) = -(GM/r²) u⃗_r.',
          'En identifiant le poids au champ gravitationnel terrestre, on obtient g(h) = g₀ · (R_T / (R_T + h))².',
        ],
        rules: [
          {
            name: 'Décroissance de g avec l’altitude h',
            description: 'Si on monte à une altitude h égale au rayon terrestre R_T, la distance double (2 R_T) donc la pesanteur est divisée par 4.',
            example: 'h = R_T  ;  g₀ = 9,8 m/s² | g(R_T) = 9,8 × (R_T / 2R_T)² | g = 9,8 ÷ 4 = 2,45 m/s²',
          },
        ],
      },
      {
        title: '2. Satellites circulaires et les trois lois de Kepler',
        explanation: [
          '1re loi : les orbites des planètes sont des ellipses dont le Soleil occupe l’un des foyers. 2e loi : loi des aires. 3e loi : le rapport T²/a³ est constant pour tous les corps gravitant autour d’un même astre.',
        ],
        rules: [
          {
            name: 'Satellite géostationnaire',
            description: 'Il paraît immobile pour un observateur terrestre : période T = 86 164 s, orbite circulaire dans le plan de l’équateur, même sens de rotation que la Terre.',
            example: 'r_geo ≈ 42 164 km  ;  R_T = 6 378 km | h = r_geo - R_T | h ≈ 35 786 km',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-3-1',
        'physTc-gravitation',
        'Ex 1 : Pesanteur à une altitude h = R_T',
        1,
        'Au niveau du sol au Gabon, g₀ = 9,80 m/s². Calcule la valeur de g à l’altitude h = R_T (en m/s²).',
        '2.45',
        'r = R_T + R_T = 2 R_T donc g = g₀ / 2².',
        'À cette altitude, g = 2,45 m/s².',
        [
          {
            title: 'Rapport des rayons',
            explanation: 'La distance au centre devient 2 R_T.',
            math: 'g(R_T) = g₀ × (R_T / 2R_T)² = g₀ ÷ 4',
            subResult: 'g₀ / 4',
          },
          {
            title: 'Calcul numérique',
            explanation: 'On divise 9,80 par 4.',
            math: 'g = 9,80 ÷ 4 = 2,45 m/s²',
            subResult: '2,45 m/s²',
          },
        ],
        'm/s²'
      ),
      mkNum(
        'physTc-3-2',
        'physTc-gravitation',
        'Ex 2 : Période par la 3e loi de Kepler',
        2,
        'Un satellite A décrit une orbite de rayon r₁ avec une période T₁ = 2 heures. Un satellite B autour du même astre a un rayon r₂ = 4 r₁.\nCalcule sa période T₂ en heures.',
        '16',
        '(T₂ / T₁)² = (r₂ / r₁)³ = 4³ = 64.',
        'La période du satellite B est T₂ = 16 heures.',
        [
          {
            title: '3e loi de Kepler',
            explanation: 'T²/r³ est constant pour un même astre attracteur.',
            math: '(T₂ / T₁)² = (r₂ / r₁)³ = 4³ = 64',
            subResult: '64',
          },
          {
            title: 'Extraction de T₂',
            explanation: 'On prend la racine carrée de 64.',
            math: 'T₂ = T₁ × √64 = 2 × 8 = 16 h',
            subResult: '16 h',
          },
        ],
        'h'
      ),
      mkQcm(
        'physTc-3-3',
        'physTc-gravitation',
        'Ex 3 : Conditions d’un satellite géostationnaire',
        1,
        'Parmi ces propositions, laquelle est fausse pour un satellite géostationnaire ?',
        [
          'Il peut survoler verticalement Libreville puis Paris au cours de la journée',
          'Sa trajectoire se situe dans le plan de l’équateur terrestre',
          'Il tourne dans le même sens que la Terre',
          'Sa période de révolution vaut environ 23 h 56 min',
        ],
        'Il peut survoler verticalement Libreville puis Paris au cours de la journée',
        'Il reste immobile à la verticale d’un point fixe de l’équateur.',
        'Un satellite géostationnaire reste fixe dans le plan équatorial (il ne peut jamais passer à la verticale de Paris).',
        [
          {
            title: 'Plan de l’orbite',
            explanation: 'La force gravitationnelle passe par le centre O ; le seul cercle fixe par rapport à la Terre est dans le plan équatorial.',
            math: 'Orbite équatoriale obligatoire (Latitude 0°)',
            subResult: 'Fixe sur l’équateur',
          },
        ]
      ),
      mkNum(
        'physTc-3-4',
        'physTc-gravitation',
        'Ex 4 : Vitesse d’un satellite en orbite basse',
        3,
        'Un satellite orbite autour de la Terre (R_T = 6 400 km, g₀ = 10 m/s²) à l’altitude h = 3 600 km.\nCalcule sa vitesse orbitale v en km/s (arrondie à 0,1 près).',
        '6.4',
        'Utilise v = R_T · √(g₀ / (R_T + h)) avec R_T = 6,4×10⁶ m et R_T+h = 10⁷ m.',
        'La vitesse vaut v = 6 400 m/s = 6,4 km/s.',
        [
          {
            title: 'Rayon orbital total',
            explanation: 'On convertit en mètres.',
            math: 'r = R_T + h = 6 400 + 3 600 = 10 000 km = 10⁷ m',
            subResult: 'r = 10⁷ m',
          },
          {
            title: 'Calcul avec g₀ R_T²',
            explanation: 'v = R_T √(g₀ / r).',
            math: 'v = 6,4×10⁶ × √(10 / 10⁷) = 6,4×10⁶ × 10⁻³ = 6 400 m/s = 6,4 km/s',
            subResult: '6,4 km/s',
          },
        ],
        'km/s'
      ),
    ],
  },

  {
    id: 'physTc-oscillations-energie',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'mecanique',
    order: 4,
    title: 'Oscillations Mécaniques & Énergie (Pendule Élastique & Pesant)',
    badge: 'Physique Tle C · Ch. 4',
    shortDesc: 'Équation différentielle ẍ + (k/m)x = 0, période propre T₀ = 2π√(m/k), pendule simple T₀ = 2π√(l/g) et conservation de l’énergie mécanique Em.',
    themeColor: '#a855f7',
    themeGradient: 'from-purple-500 via-fuchsia-500 to-rose-500',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-oscillations-pendule',
    bossMeta: { name: 'MAÎTRE DES OSCILLATEURS', emoji: '🎛️', xp: 200 },
    kokoSpeech:
      'Pour établir l’équation différentielle de l’oscillateur harmonique sans erreur, écris TCI en projection sur l’axe (m ẍ = -k x) OU dérive l’énergie mécanique constante dEm/dt = 0 ! Les deux méthodes donnent ẍ + ω₀² x = 0 !',
    realWorldHook: {
      title: 'Amortisseurs d’un véhicule 4×4 sur piste latéritique',
      scenario:
        'Sur la route de Makokou, la suspension d’un 4×4 se modélise par un ressort de raideur k = 40 000 N/m supportant une charge m = 400 kg par roue.',
      question:
        'Quelle est la période propre T₀ des oscillations verticales libres et la vitesse maximale si l’amplitude vaut X_m = 5 cm ?',
    },
    unitsTable: [
      { symbol: 'k', quantity: 'Constante de raideur du ressort', unit: 'N·m⁻¹', instrument: 'Allongement Δl₀ : mg = k Δl₀' },
      { symbol: 'ω₀ = √(k/m)', quantity: 'Pulsation propre', unit: 'rad·s⁻¹', instrument: 'T₀ = 2π/ω₀ = 2π√(m/k)' },
      { symbol: 'Em = ½mv² + ½kx²', quantity: 'Énergie mécanique (horizontal)', unit: 'Joule (J)', instrument: 'Em = ½ k X_m² = ½ m v_max²' },
      { symbol: 'T₀ = 2π√(l/g)', quantity: 'Période du pendule simple (petits angles)', unit: 'seconde (s)', instrument: 'Indépendante de m' },
    ],
    experimentOrActivity: {
      title: 'Isochronisme des petites oscillations d’un pendule simple',
      materials: ['Fil inextensible l = 1,0 m', 'Masses marquées 50 g et 200 g', 'Chronomètre au 1/100 s', 'Rapporteur'],
      observation:
        'Pour des angles θ_m ≤ 15°, la durée de 10 oscillations (10 T₀ ≈ 20,0 s) reste la même avec 50 g ou 200 g, et ne varie pratiquement pas avec θ_m.',
      conclusion:
        'La période propre T₀ = 2π√(l/g) d’un pendule simple aux petites amplitudes est indépendante de la masse et de l’amplitude : c’est l’isochronisme.',
    },
    revisionChecklist: [
      'Je sais démontrer ẍ + (k/m)x = 0 pour un pendule élastique horizontal ET vertical (en notant l’allongement à l’équilibre Δl₀ = mg/k).',
      'Je sais déterminer les constantes X_m et φ à partir des conditions initiales x(0) et v(0).',
      'Je sais calculer la vitesse maximale v_max = ω₀ X_m et l’énergie mécanique totale Em = ½ k X_m².',
    ],
    keyFormulas: [
      'Équation différentielle : ẍ + ω₀² x = 0  avec  ω₀ = √(k/m)  et  T₀ = 2π √(m/k)',
      'Solution horaire : x(t) = X_m cos(ω₀ t + φ)  ;  v(t) = -ω₀ X_m sin(ω₀ t + φ)',
      'Conservation d’énergie : Em = ½ m v² + ½ k x² = ½ k X_m² = ½ m (ω₀ X_m)²',
      'Pendule simple (θ_m petit) : θ̈ + (g/l) θ = 0  ;  T₀ = 2π √(l/g)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Oscillateurs Mécaniques & Énergie',
      slogan: 'ẍ + ω₀² x = 0  ·  Em = ½ k X_m²  ·  v_max = ω₀ X_m',
      summaryBulletPoints: [
        'Pour un pendule élastique vertical, T₀ = 2π√(m/k) reste inchangée par rapport au cas horizontal !',
        'Au passage par la position d’équilibre x = 0 : Ep = 0 et Ec est maximale (v = ± ω₀ X_m).',
        'Aux positions extrêmes x = ± X_m : v = 0, Ec = 0 et Ep = ½ k X_m² = Em.',
        'Si on lâche sans vitesse initiale depuis x₀ > 0 : X_m = x₀ et φ = 0.',
      ],
      verticalFormulas: [
        {
          name: 'Pulsation, période et vitesse max',
          badge: '🌀',
          steps: [
            'k = 40 N/m | m = 0,40 kg | X_m = 0,05 m',
            'ω₀ = √(k/m) = √(40 / 0,40) = √100 = 10 rad/s',
            'T₀ = 2π / ω₀ = 2π / 10 ≈ 0,628 s',
            'v_max = ω₀ · X_m = 10 × 0,05 = 0,50 m/s',
          ],
          resultHighlight: 'v_max = 0,50 m/s',
          explanation: 'On utilise toujours ω₀ en rad/s et X_m en mètres.',
        },
        {
          name: 'Équation par dérivation de l’énergie',
          badge: '⚡',
          steps: [
            'Em = ½ m ẋ² + ½ k x² = cte',
            'dEm/dt = m ẋ ẍ + k x ẋ = 0',
            'ẋ (m ẍ + k x) = 0  (ẋ non identiquement nul)',
            'ẍ + (k/m) x = 0',
          ],
          resultHighlight: 'ẍ + ω₀² x = 0',
          explanation: 'Méthode énergétique très appréciée au Baccalauréat Série C.',
        },
      ],
      kokoTip: 'Pour trouver φ à t = 0 : résous le système cos φ = x(0)/X_m et sin φ = -v(0)/(ω₀ X_m) sur le cercle trigo !',
      pitfallToAvoid: 'Oublier le signe moins dans la dérivée de cos(ω₀t + φ) lors du calcul de v(0) !',
    },
    sections: [
      {
        title: '1. Oscillateur harmonique : Pendule élastique horizontal et vertical',
        explanation: [
          'Un solide de masse m accroché à un ressort de raideur k sans frottement oscille autour de sa position d’équilibre selon l’équation différentielle ẍ + (k/m)x = 0.',
          'Sa solution générale est sinusoïdale : x(t) = X_m cos(ω₀ t + φ), de période propre T₀ = 2π√(m/k).',
        ],
        rules: [
          {
            name: 'Vitesse maximale et énergie mécanique',
            description: 'À tout instant sans frottements, la somme Ec + Ep est conservée et vaut ½ k X_m².',
            example: 'k = 100 N/m ; X_m = 0,10 m | Em = 0,5 × 100 × 0,10² | Em = 0,50 J',
          },
        ],
      },
      {
        title: '2. Pendule simple et pendule pesant (aux petits angles)',
        explanation: [
          'Un pendule simple de longueur l et de masse m présente une pulsation propre ω₀ = √(g/l), soit T₀ = 2π√(l/g). Pour un pendule pesant de moment d’inertie J_Δ, T₀ = 2π√(J_Δ / (m g OG)).',
        ],
        rules: [
          {
            name: 'Influence de la longueur et de la pesanteur',
            description: 'Pour doubler la période T₀ d’un pendule simple, il faut quadrupler sa longueur l.',
            example: 'l = 1,0 m  ;  g ≈ π² ≈ 9,87 m/s² | T₀ = 2π √(1 / π²) | T₀ ≈ 2,0 s (pendule qui bat la seconde)',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-4-1',
        'physTc-oscillations-energie',
        'Ex 1 : Pulsation propre d’un pendule élastique',
        1,
        'Un solide de masse m = 250 g est relié à un ressort de raideur k = 40 N/m.\nCalcule sa pulsation propre ω₀ (en rad/s).',
        '12.6',
        'Convertis m = 0,25 kg puis ω₀ = √(k / m).',
        'ω₀ = √(40 / 0,25) = √160 ≈ 12,6 rad/s.',
        [
          {
            title: 'Conversion SI',
            explanation: 'La masse doit être en kg.',
            math: 'm = 250 g = 0,25 kg',
            subResult: '0,25 kg',
          },
          {
            title: 'Calcul de ω₀',
            explanation: 'ω₀ = √(k / m).',
            math: 'ω₀ = √(40 ÷ 0,25) = √160 ≈ 12,6 rad/s',
            subResult: '12,6 rad/s',
          },
        ],
        'rad/s'
      ),
      mkNum(
        'physTc-4-2',
        'physTc-oscillations-energie',
        'Ex 2 : Énergie mécanique d’un oscillateur élastique',
        1,
        'Un pendule élastique de raideur k = 80 N/m oscille sans frottement avec une amplitude X_m = 5,0 cm.\nCalcule son énergie mécanique totale Em en joules.',
        '0.1',
        'Convertis X_m = 0,05 m puis applique Em = ½ k X_m².',
        'L’énergie mécanique vaut Em = 0,10 J.',
        [
          {
            title: 'Conversion en mètres',
            explanation: '5,0 cm = 0,05 m.',
            math: 'X_m = 0,05 m',
            subResult: '0,05 m',
          },
          {
            title: 'Calcul de Em',
            explanation: 'Em = ½ · k · X_m².',
            math: 'Em = 0,5 × 80 × (0,05)² = 40 × 0,0025 = 0,1 J',
            subResult: '0,1 J',
          },
        ],
        'J'
      ),
      mkNum(
        'physTc-4-3',
        'physTc-oscillations-energie',
        'Ex 3 : Allongement à l’équilibre d’un ressort vertical',
        2,
        'Un ressort de raideur k = 50 N/m supporte à la verticale une masse m = 0,30 kg (g = 10 m/s²).\nCalcule l’allongement Δl₀ à l’équilibre en cm.',
        '6',
        'À l’équilibre k·Δl₀ = m·g.',
        'L’allongement vaut Δl₀ = 0,06 m = 6 cm.',
        [
          {
            title: 'Condition d’équilibre',
            explanation: 'Tension du ressort = Poids.',
            math: 'k · Δl₀ = m · g ➔ Δl₀ = (0,30 × 10) ÷ 50',
            subResult: '0,06 m',
          },
          {
            title: 'Conversion en cm',
            explanation: '1 m = 100 cm.',
            math: 'Δl₀ = 0,06 m = 6 cm',
            subResult: '6 cm',
          },
        ],
        'cm'
      ),
      mkQcm(
        'physTc-4-4',
        'physTc-oscillations-energie',
        'Ex 4 : Vitesse maximale à partir de x(t)',
        3,
        'Un oscillateur a pour loi horaire x(t) = 0,04 cos(10 t + π/3) en unités SI.\nQuelle est sa vitesse maximale v_max ?',
        ['0,40 m/s', '0,04 m/s', '4,0 m/s', '2,5 m/s'],
        '0,40 m/s',
        'v_max = ω₀ · X_m avec X_m = 0,04 m et ω₀ = 10 rad/s.',
        'v_max = 10 × 0,04 = 0,40 m/s.',
        [
          {
            title: 'Identifier X_m et ω₀',
            explanation: 'Par lecture directe de x(t).',
            math: 'X_m = 0,04 m ; ω₀ = 10 rad/s ➔ v_max = 10 × 0,04 = 0,40 m/s',
            subResult: '0,40 m/s',
          },
        ]
      ),
    ],
  },
];
