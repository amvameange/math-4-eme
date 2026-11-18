import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_TC_CHIMIE: Chapter[] = [
  {
    id: 'physTc-cinetique-chimique',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'chimie',
    order: 11,
    title: 'Cinétique Chimique : Vitesse, Temps de Demi-Réaction & Catalyse',
    badge: 'Chimie Tle C · Ch. 11',
    shortDesc: 'Suivi temporel d’une transformation lente, vitesse volumique v(t) = (1/V)·dx/dt, temps de demi-réaction t₁/₂ et rôle des facteurs cinétiques.',
    themeColor: '#14b8a6',
    themeGradient: 'from-teal-500 via-emerald-500 to-green-400',
    readingTimeMinutes: 15,
    illustrationKey: 'tc-cinetique-chimique',
    bossMeta: { name: 'MAÎTRE DE LA CINÉTIQUE', emoji: '⏱️', xp: 200 },
    kokoSpeech:
      'En cinétique chimique Terminale C, la vitesse volumique v(t) = (1/V)·dx/dt correspond au coefficient directeur de la tangente à la courbe x(t) divisé par le volume V ! Et au cours du temps, v(t) diminue toujours car les concentrations des réactifs diminuent.',
    realWorldHook: {
      title: 'Oxydation lente du manganèse et dosage du peroxyde d’hydrogène',
      scenario:
        'En laboratoire à Libreville, on suit la décomposition de l’eau oxygénée (H₂O₂) catalysée par des ions Fe³⁺ ou la réaction lente entre les ions iodure I⁻ et peroxodisulfate S₂O₈²⁻.',
      question:
        'Comment déterminer graphiquement v(t) à l’instant t = 10 min et trouver le temps de demi-réaction t₁/₂ ?',
    },
    unitsTable: [
      { symbol: 'v = (1/V)·(dx/dt)', quantity: 'Vitesse volumique de réaction', unit: 'mol·L⁻¹·min⁻¹ (ou s⁻¹)', instrument: 'Tangente sur courbe x(t)' },
      { symbol: 'v_f = d[P]/dt', quantity: 'Vitesse de formation d’un produit', unit: 'mol·L⁻¹·s⁻¹', instrument: 'Pente de [P](t)' },
      { symbol: 't₁/₂', quantity: 'Temps de demi-réaction', unit: 's ou min', instrument: 't tel que x(t₁/₂) = x_max / 2' },
    ],
    experimentOrActivity: {
      title: 'Influence de la concentration et de la température sur I⁻ + S₂O₈²⁻',
      materials: ['3 béchers identiques', 'Solutions KI et K₂S₂O₈', 'Empois d’amidon', 'Bain-marie 40°C'],
      observation:
        'La coloration bleu-noir due au diiode I₂ apparaît beaucoup plus vite dans le bécher chauffé à 40 °C et dans celui où la concentration initiale des réactifs est doublée.',
      conclusion:
        'La température et la concentration initiale des réactifs sont des facteurs cinétiques qui augmentent la vitesse de réaction sans modifier l’avancement final x_max.',
    },
    revisionChecklist: [
      'Je sais dresser le tableau d’avancement et exprimer n(t) ou [C](t) en fonction de x(t).',
      'Je sais calculer v(t₁) graphiquement en prenant deux points sur la tangente à la courbe.',
      'Je sais lire t₁/₂ pour x = x_f / 2 et expliquer pourquoi un catalyseur diminue t₁/₂ sans changer x_f.',
    ],
    keyFormulas: [
      'Avancement maximal : réactif limitant tel que n₀ - a x_max = 0',
      'Vitesse volumique : v(t) = (1/V_solution) · (dx/dt) = -(1/a) · d[A]/dt = +(1/c) · d[C]/dt',
      'Temps de demi-réaction t₁/₂ : instant où x(t₁/₂) = x_f / 2',
      'Facteurs cinétiques : ↑ Température, ↑ Concentration des réactifs, ajout d’un Catalyseur ➔ t₁/₂ diminue',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Cinétique Chimique',
      slogan: 'v(t) = (1/V)·dx/dt · t₁/₂ pour x_f/2 · Catalyseur accélère sans modifier l’équilibre',
      summaryBulletPoints: [
        'Pour ralentir une réaction avant un dosage (trempe), on refroidit brutalement et on dilue dans de l’eau glacée.',
        'Au cours du temps, la vitesse diminue car les chocs efficaces entre réactifs se raréfient.',
        'Un catalyseur (homogène, hétérogène ou enzymatique) abaisse l’énergie d’activation et reste régénéré en fin de réaction.',
      ],
      verticalFormulas: [
        {
          name: 'Calcul graphique de la vitesse volumique',
          badge: '📈',
          steps: [
            'V_sol = 100 mL = 0,10 L',
            'Tangente à t = 10 min passe par (0 ; 0,4 mmol) et (20 min ; 2,4 mmol)',
            'dx/dt = (2,4 - 0,4)×10⁻³ ÷ (20 - 0) = 1,0×10⁻⁴ mol/min',
            'v(10) = 1,0×10⁻⁴ ÷ 0,10 = 1,0×10⁻³ mol·L⁻¹·min⁻¹',
          ],
          resultHighlight: 'v(10) = 1,0×10⁻³ mol·L⁻¹·min⁻¹',
          explanation: 'Convertis toujours mmol en mol (10⁻³) et mL en L (10⁻³) !',
        },
      ],
      kokoTip: 'Attention aux unités : si V est en mL et x en mmol, le quotient mmol / mL donne directement mol/L !',
      pitfallToAvoid: 'Confondre t₁/₂ avec la moitié de la durée totale de la réaction (faux car la courbe s’aplatit exponentiellement) !',
    },
    sections: [
      {
        title: '1. Vitesses de réaction et temps de demi-réaction',
        explanation: [
          'La vitesse volumique v(t) = (1/V) (dx/dt) mesure la rapidité de l’évolution de l’avancement x par unité de volume. Elle correspond à la pente de la tangente à la courbe [P](t) si le coefficient stœchiométrique du produit P vaut 1.',
          'Le temps de demi-réaction t₁/₂ correspond à l’instant où l’avancement atteint la moitié de sa valeur finale : x(t₁/₂) = x_f / 2.',
        ],
        rules: [
          {
            name: 'Relation entre v et vitesses de disparition / formation',
            description: 'Pour a A + b B ➔ c C : v = -(1/a) d[A]/dt = -(1/b) d[B]/dt = +(1/c) d[C]/dt.',
            example: '2 H₂O₂ ➔ 2 H₂O + O₂ | d[O₂]/dt = 4×10⁻⁴ mol/(L·s) | -d[H₂O₂]/dt = 2 × 4×10⁻⁴ = 8×10⁻⁴ mol/(L·s)',
          },
        ],
      },
      {
        title: '2. Facteurs cinétiques et trempe chimique',
        explanation: [
          'La concentration des réactifs, la température et la présence d’un catalyseur modifient la vitesse sans changer la composition finale d’une réaction totale.',
        ],
        rules: [
          {
            name: 'La trempe avant dosage',
            description: 'En versant un prélèvement dans un grand volume d’eau glacée, on cumule dilution et refroidissement pour bloquer l’évolution chimique pendant le titrage.',
            example: 'Eau glacée = ↓ T + ↓ [réactifs] ➔ v ≈ 0 pendant le dosage',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-11-1',
        'physTc-cinetique-chimique',
        'Ex 1 : Avancement à t = t₁/₂',
        1,
        'Une réaction totale a un avancement final x_max = 12 mmol.\nQuel est l’avancement x (en mmol) à l’instant t = t₁/₂ ?',
        '6',
        'Par définition, x(t₁/₂) = x_max / 2.',
        'À t₁/₂, l’avancement vaut x = 6 mmol.',
        [
          {
            title: 'Définition de t₁/₂',
            explanation: 'La moitié de la réaction finale.',
            math: 'x(t₁/₂) = 12 ÷ 2 = 6 mmol',
            subResult: '6 mmol',
          },
        ],
        'mmol'
      ),
      mkNum(
        'physTc-11-2',
        'physTc-cinetique-chimique',
        'Ex 2 : Vitesse volumique à partir de la tangente',
        2,
        'Dans un volume V = 0,20 L, la tangente à x(t) à t = 5 min passe par les points (0 min ; 0 mmol) et (10 min ; 8,0 mmol).\nCalcule la vitesse volumique v(5) en mmol·L⁻¹·min⁻¹.',
        '4',
        'dx/dt = 8,0 / 10 = 0,80 mmol/min, puis divise par V = 0,20 L.',
        'La vitesse volumique est v = 4 mmol·L⁻¹·min⁻¹.',
        [
          {
            title: 'Coefficient directeur dx/dt',
            explanation: 'Pente de la tangente.',
            math: 'dx/dt = (8,0 - 0) ÷ (10 - 0) = 0,80 mmol/min',
            subResult: '0,80 mmol/min',
          },
          {
            title: 'Division par le volume V',
            explanation: 'v = (1/V)·(dx/dt).',
            math: 'v = 0,80 ÷ 0,20 = 4 mmol·L⁻¹·min⁻¹',
            subResult: '4 mmol·L⁻¹·min⁻¹',
          },
        ],
        'mmol/(L·min)'
      ),
      mkQcm(
        'physTc-11-3',
        'physTc-cinetique-chimique',
        'Ex 3 : Effet d’un catalyseur sur x_max et t₁/₂',
        1,
        'On ajoute quelques gouttes d’ions Fe³⁺ (catalyseur) lors de la décomposition de H₂O₂. Quel est son effet ?',
        [
          'Il diminue t₁/₂ sans modifier l’avancement final x_max',
          'Il augmente l’avancement final x_max et augmente t₁/₂',
          'Il double la quantité de dioxygène dégagé',
          'Il est définitivement consommé par la réaction',
        ],
        'Il diminue t₁/₂ sans modifier l’avancement final x_max',
        'Un catalyseur accélère la réaction sans changer le bilan final.',
        'Un catalyseur diminue le temps de demi-réaction t₁/₂ en accélérant la cinétique sans modifier x_max.',
        [
          {
            title: 'Propriété d’un catalyseur',
            explanation: 'Il abaisse l’énergie d’activation mais ne figure pas dans l’équation bilan.',
            math: 'v ↑ ➔ t₁/₂ ↓ et x_max inchangé',
            subResult: 't₁/₂ diminue, x_max inchangé',
          },
        ]
      ),
      mkNum(
        'physTc-11-4',
        'physTc-cinetique-chimique',
        'Ex 4 : Coefficient stœchiométrique et vitesse',
        3,
        'Soit 2 I⁻ + S₂O₈²⁻ ➔ I₂ + 2 SO₄²⁻. À un instant t, la vitesse de formation de I₂ vaut d[I₂]/dt = 1,5×10⁻³ mol·L⁻¹·s⁻¹.\nCalcule la vitesse de disparition -d[I⁻]/dt en 10⁻³ mol·L⁻¹·s⁻¹.',
        '3',
        'Les ions I⁻ disparaissent 2 fois plus vite que I₂ n’apparaît.',
        '-d[I⁻]/dt = 2 × 1,5×10⁻³ = 3,0×10⁻³ mol·L⁻¹·s⁻¹.',
        [
          {
            title: 'Lien stœchiométrique',
            explanation: 'v = -(1/2) d[I⁻]/dt = + d[I₂]/dt.',
            math: '-d[I⁻]/dt = 2 × d[I₂]/dt = 2 × 1,5×10⁻³ = 3,0×10⁻³ mol·L⁻¹·s⁻¹',
            subResult: '3×10⁻³ mol/(L·s)',
          },
        ],
        '10⁻³ mol/(L·s)'
      ),
    ],
  },

  {
    id: 'physTc-acides-bases-ph',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'chimie',
    order: 12,
    title: 'Acides, Bases, Couples pK_a & Titrage pH-métrique',
    badge: 'Chimie Tle C · Ch. 12',
    shortDesc: 'Produit ionique Ke = 10⁻¹⁴, force des acides/bases, relation d’Henderson pH = pK_a + log([B]/[A]), demi-équivalence et dosage acido-basique.',
    themeColor: '#8b5cf6',
    themeGradient: 'from-violet-500 via-purple-500 to-indigo-500',
    readingTimeMinutes: 18,
    illustrationKey: 'tc-acides-bases-titrage',
    bossMeta: { name: 'EXPERT DES TITRAGES pH', emoji: '🧪', xp: 210 },
    kokoSpeech:
      'La règle d’or au Bac C pour tout titrage d’un acide faible AH par une base forte (NaOH) : à l’équivalence (V_b = V_bE), C_a V_a = C_b V_bE (pH_E > 7 !) ; à la demi-équivalence (V_b = V_bE / 2), [AH] = [A⁻] donc pH = pK_a directement !',
    realWorldHook: {
      title: 'Contrôle qualité d’un vinaigre commercial & eau de forage',
      scenario:
        'Un laboratoire de contrôle alimentaire à Libreville dose V_a = 20 mL d’une solution d’acide éthanoïque diluée par de la soude C_b = 0,10 mol/L. Le saut de pH indique V_bE = 16,0 mL et pH(8,0 mL) = 4,75.',
      question:
        'Comment déduire C_a, le pK_a du couple CH₃COOH/CH₃COO⁻ et identifier l’espèce prédominante à pH = 6 ?',
    },
    unitsTable: [
      { symbol: 'pH = -log[H₃O⁺]', quantity: 'Potentiel hydrogène (à 25°C)', unit: 'Sans unité (0 à 14)', instrument: 'pH-mètre étalonné' },
      { symbol: 'Ke = [H₃O⁺][OH⁻]', quantity: 'Produit ionique de l’eau', unit: '10⁻¹⁴ à 25°C (pKe=14)', instrument: '[OH⁻] = 10^(pH - 14)' },
      { symbol: 'pH = pK_a + log([B]/[A])', quantity: 'Relation de Henderson-Hasselbalch', unit: 'Sans unité', instrument: 'Demi-équivalence : pH = pK_a' },
      { symbol: 'C_a·V_a = C_b·V_bE', quantity: 'Relation à l’équivalence', unit: 'mol', instrument: 'Méthode des tangentes / dpH/dV' },
    ],
    experimentOrActivity: {
      title: 'Dosage pH-métrique de l’acide éthanoïque par la soude',
      materials: ['Burette graduée 25 mL', 'pH-mètre + sonde', 'Agitateur magnétique', 'Acide éthanoïque + NaOH 0,10 M'],
      observation:
        'La courbe pH = f(V_b) présente deux points d’inflexion : la demi-équivalence (plateau tampon) où pH = 4,75, puis un brusque saut de pH centré en pH_E ≈ 8,7.',
      conclusion:
        'Au point d’équivalence, pH_E > 7 car la solution contient la base conjuguée CH₃COO⁻. La phénolphtaléine (zone 8,2–10) est l’indicateur coloré adapté.',
    },
    revisionChecklist: [
      'Je sais calculer le pH d’un acide fort (-log C_a), d’une base forte (14 + log C_b) et le taux d’avancement τ = [H₃O⁺]/C d’un acide faible.',
      'Je maîtrise l’électroneutralité, la conservation de la matière et la méthode d’approximation pour trouver le pH d’un acide faible.',
      'Je sais lire V_bE et pK_a sur une courbe pH-métrique et choisir l’indicateur coloré dont la zone de virage encadre pH_E.',
    ],
    keyFormulas: [
      'Acide fort : pH = -log C_a  ;  Base forte : pH = 14 + log C_b (25°C)',
      'Constante d’acidité : K_a = [H₃O⁺][B] / [A]  ;  pK_a = -log K_a  ;  pH = pK_a + log([B]/[A])',
      'Acide faible moyennement dilué : pH ≈ ½(pK_a - log C_a) ;  Base faible : pH ≈ 7 + ½(pK_a + log C_b)',
      'Équivalence titrage : n_a = n_b ➔ C_a V_a = C_b V_bE  ;  Demi-équivalence (acide faible + base forte) : pH = pK_a',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Acides, Bases & Titrage pH-métrique',
      slogan: 'Ke = 10⁻¹⁴ · Henderson · Équivalence CaVa = CbVbE · Demi-équivalence pH = pK_a',
      summaryBulletPoints: [
        'Si pH < pK_a : la forme acide A prédomine. Si pH > pK_a : la forme basique B prédomine.',
        'Une solution tampon (mélange équimolaire [A] ≈ [B]) résiste aux variations de pH lors d’une dilution modérée ou d’un léger ajout d’acide/base.',
        'Titrage acide fort + base forte : pH_E = 7,0 ; acide faible + base forte : pH_E > 7 ; base faible + acide fort : pH_E < 7.',
      ],
      verticalFormulas: [
        {
          name: 'Concentration & pK_a par titrage',
          badge: '⚗️',
          steps: [
            'V_a = 20 mL | C_b = 0,10 mol/L | V_bE = 16 mL',
            'C_a = (C_b × V_bE) ÷ V_a',
            'C_a = (0,10 × 16) ÷ 20 = 0,080 mol/L',
            'À V_b = V_bE/2 = 8,0 mL : pK_a = pH(8 mL) = 4,75',
          ],
          resultHighlight: 'C_a = 0,080 mol/L ; pK_a = 4,75',
          explanation: 'Deux grandeurs trouvées en 4 lignes sur la courbe !',
        },
      ],
      kokoTip: 'Pour tout acide fort dilué dans l’eau 10 fois, le pH augmente de +1 unité (tant qu’il reste < 6) !',
      pitfallToAvoid: 'Utiliser pH = -log C pour un acide faible comme l’acide éthanoïque (faux : il n’est que partiellement dissocié) !',
    },
    sections: [
      {
        title: '1. Force des acides/bases, pK_a et diagramme de prédominance',
        explanation: [
          'Un acide fort (HCl, HNO₃) réagit totalement avec l’eau ([H₃O⁺] = C). Un acide faible AH établit un équilibre caractérisé par K_a = [H₃O⁺][A⁻]/[AH]. Plus pK_a est petit, plus l’acide est fort.',
        ],
        rules: [
          {
            name: 'Relation de Henderson-Hasselbalch & Solution tampon',
            description: 'pH = pK_a + log([B]/[A]). Quand [A] = [B], log(1) = 0 donc pH = pK_a (solution tampon).',
            example: 'pK_a = 4,8 ; [CH₃COO⁻] = 10 × [CH₃COOH] | pH = 4,8 + log(10) | pH = 5,8',
          },
        ],
      },
      {
        title: '2. Titrage pH-métrique et méthode des tangentes',
        explanation: [
          'La réaction de titrage doit être totale, rapide et unique. À l’équivalence, les réactifs ont été introduits dans les proportions stœchiométriques : C_a V_a = C_b V_bE.',
        ],
        rules: [
          {
            name: 'Choix de l’indicateur coloré',
            description: 'Un indicateur coloré est un couple acide/base dont la zone de virage doit contenir pH_E.',
            example: 'Acide éthanoïque + Soude : pH_E = 8,7 | Phénolphtaléine (8,2 – 10,0) adaptée',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-12-1',
        'physTc-acides-bases-ph',
        'Ex 1 : pH d’une solution d’acide fort HCl',
        1,
        'On prépare une solution d’acide chlorhydrique de concentration C = 1,0×10⁻² mol/L.\nCalcule son pH à 25 °C.',
        '2',
        'pH = -log(10⁻²).',
        'Le pH vaut 2,0.',
        [
          {
            title: 'Acide fort totalement dissocié',
            explanation: '[H₃O⁺] = C = 10⁻² mol/L.',
            math: 'pH = -log(10⁻²) = 2',
            subResult: 'pH = 2',
          },
        ]
      ),
      mkNum(
        'physTc-12-2',
        'physTc-acides-bases-ph',
        'Ex 2 : pH d’une solution de soude (base forte)',
        1,
        'Une solution d’hydroxyde de sodium (NaOH) a une concentration C_b = 1,0×10⁻³ mol/L.\nCalcule son pH à 25 °C (pKe = 14).',
        '11',
        'pH = 14 + log(C_b).',
        'Le pH vaut 11.',
        [
          {
            title: 'Formule de la base forte',
            explanation: '[OH⁻] = C_b = 10⁻³ mol/L.',
            math: 'pH = 14 + log(10⁻³) = 14 - 3 = 11',
            subResult: 'pH = 11',
          },
        ]
      ),
      mkNum(
        'physTc-12-3',
        'physTc-acides-bases-ph',
        'Ex 3 : Concentration inconnue par titrage',
        2,
        'On dose V_a = 25 mL d’acide méthanoïque par de la soude C_b = 0,20 mol/L. L’équivalence est atteinte pour V_bE = 15 mL.\nCalcule C_a en mol/L.',
        '0.12',
        'C_a · V_a = C_b · V_bE.',
        'C_a = 0,12 mol/L.',
        [
          {
            title: 'Équivalence',
            explanation: 'C_a = (C_b × V_bE) / V_a.',
            math: 'C_a = (0,20 × 15) ÷ 25 = 3,0 ÷ 25 = 0,12 mol/L',
            subResult: '0,12 mol/L',
          },
        ],
        'mol/L'
      ),
      mkNum(
        'physTc-12-4',
        'physTc-acides-bases-ph',
        'Ex 4 : pH par relation d’Henderson',
        3,
        'Un mélange tampon contient [NH₄⁺] = 0,10 mol/L et [NH₃] = 0,10 mol/L (pK_a = 9,2).\nQuel est son pH ?',
        '9.2',
        'Quand [B] = [A], log(1) = 0 donc pH = pK_a.',
        'Le pH du mélange vaut 9,2.',
        [
          {
            title: 'Henderson-Hasselbalch',
            explanation: 'log(0,10 / 0,10) = log(1) = 0.',
            math: 'pH = 9,2 + log(1) = 9,2',
            subResult: 'pH = 9,2',
          },
        ]
      ),
    ],
  },

  {
    id: 'physTc-alcools-carbonyles',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'chimie',
    order: 13,
    title: 'Alcools, Oxydation Ménagée, Aldéhydes, Cétones & Acides Carboxyliques',
    badge: 'Chimie Tle C · Ch. 13',
    shortDesc: 'Classes d’alcools (I, II, III), oxydation ménagée par Cr₂O₇²⁻/MnO₄⁻, tests d’identification (DNPH, Fehling, Tollens) et nomenclature IUPAC.',
    themeColor: '#f97316',
    themeGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-alcools-carbonyles',
    bossMeta: { name: 'SYNTHÉTISTES ORGANIQUES', emoji: '🧬', xp: 210 },
    kokoSpeech:
      'Pour identifier à coup sûr un composé organique inconnu au Bac C : 1) DNPH + ➔ c’est un aldéhyde ou une cétone ! 2) Puis Fehling (rouge brique) ou Tollens (miroir d’argent) + ➔ c’est forcément un ALDÉHYDE issu d’un alcool PRIMAIRE ! L’alcool III ne s’oxyde jamais de manière ménagée.',
    realWorldHook: {
      title: 'Valorisation biochimique de la biomasse gabonaise (éthanol & arômes)',
      scenario:
        'À partir de la fermentation sucrière de la canne à sucre du Haut-Ogooué, on obtient de l’éthanol CH₃-CH₂-OH que l’on peut oxyder en éthanal puis en acide éthanoïque (vinaigre).',
      question:
        'Quels produits obtient-on selon la classe de l’alcool (primaire, secondaire ou tertiaire) et la quantité d’oxydant utilisée ?',
    },
    unitsTable: [
      { symbol: 'Alcool I (R-CH₂OH)', quantity: 'Oxydation ménagée', unit: 'Aldéhyde ➔ Acide carb.', instrument: 'DNPH + puis Fehling/Tollens +' },
      { symbol: 'Alcool II (R-CHOH-R’)', quantity: 'Oxydation ménagée', unit: 'Cétone (R-CO-R’)', instrument: 'DNPH + mais Fehling/Tollens −' },
      { symbol: 'Alcool III (R₁R₂R₃COH)', quantity: 'Aucune oxydation ménagée', unit: 'Pas de réaction douce', instrument: 'Cr₂O₇²⁻ reste orange' },
      { symbol: 'M = 14n + 18', quantity: 'Masse molaire alcool saturé CₙH₂ₙ₊₂O', unit: 'g·mol⁻¹', instrument: 'Permet de trouver n !' },
    ],
    experimentOrActivity: {
      title: 'Identification des 3 isomères du butanol par oxydation et tests',
      materials: ['3 alcools A, B, C (C₄H₁₀O)', 'K₂Cr₂O₇ acidifié', '2,4-DNPH', 'Liqueur de Fehling + bain-marie'],
      observation:
        'C ne décolore pas Cr₂O₇²⁻. A et B donnent des produits positifs à la 2,4-DNPH (précipité jaune-orange), mais seul le produit de A donne un précipité rouge brique avec Fehling.',
      conclusion:
        'A est un alcool primaire (donne un aldéhyde), B est un alcool secondaire (donne une cétone), C est un alcool tertiaire (2-méthylpropan-2-ol).',
    },
    revisionChecklist: [
      'Je sais nommer tout alcool, aldéhyde (-al), cétone (-one) et acide carboxylique (acide ...-oïque) selon les règles IUPAC.',
      'Je sais équilibrer la demi-équation d’oxydation d’un alcool en milieu acide avec MnO₄⁻/Mn²⁺ ou Cr₂O₇²⁻/Cr³⁺.',
      'Je sais déterminer la formule brute d’un alcool à partir de sa masse molaire ou d’une combustion complète.',
    ],
    keyFormulas: [
      'Alcool saturé acyclique : CₙH₂ₙ₊₁-OH  ➔  M = 14n + 18 (g/mol)',
      'Aldéhyde / Cétone : CₙH₂ₙO (M = 14n + 16)  ;  Acide carboxylique : CₙH₂ₙO₂ (M = 14n + 32)',
      'Équations Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ➔ 2 Cr³⁺ + 7 H₂O  ;  MnO₄⁻ + 8 H⁺ + 5 e⁻ ➔ Mn²⁺ + 4 H₂O',
      'Alcool I ➔ Aldéhyde (oxydant en défaut) ➔ Acide carboxylique (oxydant en excès)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Alcools & Fonctions Oxygénées',
      slogan: 'Alcool I ➔ Aldéhyde ➔ Acide · Alcool II ➔ Cétone · Alcool III ➔ Rien',
      summaryBulletPoints: [
        'Pour trouver n d’un alcool saturé de masse molaire M : n = (M - 18) ÷ 14.',
        '2,4-DNPH (précipité jaune-orange) détecte la fonction carbonyle C=O (aldéhyde OU cétone).',
        'Fehling (rouge brique), Tollens (miroir Ag) et réactif de Schiff (rose-violet) sont positifs uniquement pour les ALDÉHYDES.',
      ],
      verticalFormulas: [
        {
          name: 'Déterminer la formule brute d’un alcool',
          badge: '🧬',
          steps: [
            'M_alcool = 74 g/mol  ;  Formule : CₙH₂ₙ₊₂O',
            '12n + (2n + 2) + 16 = 74',
            '14n + 18 = 74  ➔  14n = 56',
            'n = 4  ➔  C₄H₁₀O (Butanol)',
          ],
          resultHighlight: 'C₄H₁₀O (4 isomères alcools)',
          explanation: 'Les 4 isomères sont butan-1-ol (I), 2-méthylpropan-1-ol (I), butan-2-ol (II) et 2-méthylpropan-2-ol (III).',
        },
      ],
      kokoTip: 'Lorsque la question demande l’oxydation d’un alcool I en acide carboxylique, multiplie par 3 (pour Cr₂O₇²⁻) et par 4 (pour l’alcool qui perd 4 e⁻) : c’est 3 R-CH₂OH + 2 Cr₂O₇²⁻ + 16 H⁺ !',
      pitfallToAvoid: 'Dire que l’oxydation d’un alcool II donne un acide carboxylique (faux : une cétone ne s’oxyde pas par oxydation ménagée) !',
    },
    sections: [
      {
        title: '1. Nomenclature et classes des alcools (I, II, III)',
        explanation: [
          'La classe d’un alcool dépend du nombre de atomes de carbone liés au carbone fonctionnel porteur du groupe -OH : 0 ou 1 (primaire I), 2 (secondaire II), 3 (tertiaire III).',
        ],
        rules: [
          {
            name: 'Règle de numérotation IUPAC',
            description: 'La chaîne principale contient le carbone fonctionnel et on numérote de sorte que ce carbone porte le plus petit indice possible.',
            example: 'CH₃-CH(CH₃)-CH(OH)-CH₃ | Chaîne de 4 C, OH en 2, méthyle en 3 | 3-méthylbutan-2-ol (Classe II)',
          },
        ],
      },
      {
        title: '2. Oxydation ménagée et tests d’identification des carbonyles',
        explanation: [
          'L’oxydation ménagée conserve le squelette carboné et n’attaque que la fonction -OH. L’ion dichromate orange (Cr₂O₇²⁻) devient vert (Cr³⁺) ; le permanganate violet (MnO₄⁻) devient incolore (Mn²⁺).',
        ],
        rules: [
          {
            name: 'Tableau décisionnel des tests au Bac C',
            description: '2,4-DNPH teste C=O ; Tollens et Fehling distinguent les aldéhydes (réducteurs) des cétones.',
            example: 'Produit B : DNPH (+) et Tollens (−) | B est une cétone (ex: propanone) | Alcool initial de classe II',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-13-1',
        'physTc-alcools-carbonyles',
        'Ex 1 : Nombre de carbones d’un alcool saturé',
        1,
        'Un monoalcool saturé a une masse molaire M = 60 g/mol (C = 12, H = 1, O = 16).\nDétermine le nombre n d’atomes de carbone dans sa molécule.',
        '3',
        '14n + 18 = 60.',
        'n = 3 (Propanol, C₃H₈O).',
        [
          {
            title: 'Masse molaire de CₙH₂ₙ₊₂O',
            explanation: '12n + 2n + 2 + 16 = 14n + 18.',
            math: '14n + 18 = 60 ➔ 14n = 42 ➔ n = 3',
            subResult: 'n = 3',
          },
        ]
      ),
      mkQcm(
        'physTc-13-2',
        'physTc-alcools-carbonyles',
        'Ex 2 : Classe du 2-méthylpropan-2-ol',
        1,
        'À quelle classe appartient l’alcool de formule (CH₃)₃C-OH ?',
        ['Alcool tertiaire (classe III)', 'Alcool primaire (classe I)', 'Alcool secondaire (classe II)', 'Ce n’est pas un alcool'],
        'Alcool tertiaire (classe III)',
        'Compte le nombre de groupes alkyles portés par le carbone du groupe -OH.',
        'Le carbone fonctionnel est lié à 3 autres carbones : c’est un alcool tertiaire.',
        [
          {
            title: 'Voisins du carbone fonctionnel',
            explanation: 'Il porte 3 radicaux CH₃.',
            math: '3 liaisons C-C autour de C-OH ➔ Classe III',
            subResult: 'Tertiaire',
          },
        ]
      ),
      mkQcm(
        'physTc-13-3',
        'physTc-alcools-carbonyles',
        'Ex 3 : Test à la 2,4-DNPH et à la liqueur de Fehling',
        2,
        'Un liquide organique X issu de l’oxydation d’un alcool donne un précipité jaune avec la 2,4-DNPH et un précipité rouge brique à chaud avec la liqueur de Fehling.\nQue peut-on conclure sur X ?',
        [
          'X est un aldéhyde',
          'X est une cétone',
          'X est un acide carboxylique',
          'X est un ester',
        ],
        'X est un aldéhyde',
        'DNPH (+) ➔ aldéhyde ou cétone ; Fehling (+) ➔ aldéhyde uniquement.',
        'La double positivité DNPH + Fehling identifie un aldéhyde (issu d’un alcool primaire).',
        [
          {
            title: 'Analyse croisée',
            explanation: 'Seul l’aldéhyde réduit l’ion Cu²⁺ de Fehling en Cu₂O rouge brique.',
            math: 'DNPH (+) + Fehling (+) ➔ Aldéhyde R-CHO',
            subResult: 'Aldéhyde',
          },
        ]
      ),
      mkNum(
        'physTc-13-4',
        'physTc-alcools-carbonyles',
        'Ex 4 : Masse d’acide éthanoïque formée par oxydation',
        3,
        'On oxyde totalement n = 0,20 mol d’éthanol en acide éthanoïque (M = 60 g/mol) avec un excès d’oxydant.\nCalcule la masse d’acide obtenue en grammes.',
        '12',
        '1 mol d’éthanol donne 1 mol d’acide éthanoïque ; m = n × M.',
        'On obtient m = 0,20 × 60 = 12 g d’acide éthanoïque.',
        [
          {
            title: 'Conservation du squelette carboné',
            explanation: 'n(acide) = n(éthanol) = 0,20 mol.',
            math: 'm = 0,20 × 60 = 12 g',
            subResult: '12 g',
          },
        ],
        'g'
      ),
    ],
  },

  {
    id: 'physTc-esterification-saponification',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'chimie',
    order: 14,
    title: 'Estérification, Hydrolyse, Dérivés d’Acides & Saponification',
    badge: 'Chimie Tle C · Ch. 14',
    shortDesc: 'Synthèse des esters (lente, limitée, athermique), rendement 67 % / 60 %, chlorures d’acyle & anhydrides (réaction totale) et saponification des corps gras.',
    themeColor: '#eab308',
    themeGradient: 'from-yellow-500 via-amber-500 to-rose-500',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-esterification-saponification',
    bossMeta: { name: 'MAÎTRE DES ESTERS & SAVONS', emoji: '🧼', xp: 220 },
    kokoSpeech:
      'Pour rendre une synthèse d’ester RAPIDE et TOTALE (rendement ≈ 100 %) au Bac C, on remplace l’acide carboxylique R-COOH par un chlorure d’acyle R-COCl ou un anhydride d’acide (R-CO)₂O ! Et pour la saponification d’un triester avec NaOH, attention au coefficient 3 devant OH⁻ !',
    realWorldHook: {
      title: 'Saponification à l’huile de palme gabonaise (Mouila / Lambaréné)',
      scenario:
        'L’oléine (triester de glycérol et d’acide oléique, M = 884 g/mol) extraite de l’huile de palme du Gabon réagit à chaud avec une solution concentrée de soude pour fabriquer du savon.',
      question:
        'Quelle masse de savon obtient-on à partir de 1 mole de triester avec un rendement de 80 % et pourquoi l’estérification directe reste-t-elle limitée ?',
    },
    unitsTable: [
      { symbol: 'K = [E][H₂O] / ([A][Alc])', quantity: 'Constante d’équilibre estérification', unit: '≈ 4 (alcool I)', instrument: 'Rendement r = 67% (équimolaire)' },
      { symbol: 'R-COCl + R’-OH', quantity: 'Synthèse par chlorure d’acyle', unit: 'Rapide & Totale', instrument: 'Dégage HCl(g) toxique' },
      { symbol: '(R-CO)₂O + R’-OH', quantity: 'Synthèse par anhydride d’acide', unit: 'Rapide & Totale', instrument: 'Coproduit : acide R-COOH' },
      { symbol: 'Triester + 3 OH⁻', quantity: 'Saponification industrielle', unit: 'Lente & Totale', instrument: 'Donne 3 R-COO⁻Na⁺ + Glycérol' },
    ],
    experimentOrActivity: {
      title: 'Synthèse à reflux d’éthanoate d’éthyle et contrôle de rendement',
      materials: ['Ballon + réfrigérant à boules', 'Chauffe-ballon', 'Acide éthanoïque 1 mol + Éthanol 1 mol + H₂SO₄'],
      observation:
        'Un montage à reflux permet de chauffer sans perte de matière (catalyse par H⁺ + température). Le titrage de l’acide restant montre qu’il reste 0,33 mol d’acide à l’équilibre.',
      conclusion:
        'L’estérification directe est lente, limitée (taux τ = 67 % pour un alcool primaire en mélange équimolaire) et athermique.',
    },
    revisionChecklist: [
      'Je sais nommer tout ester R-COO-R’ : « [alcane]-oate de [alkyle]-yle » et retrouver l’acide et l’alcool d’origine.',
      'Je connais les taux limites équimolaires : 67 % (alcool I), 60 % (alcool II), 5–10 % (alcool III), et je sais comment déplacer l’équilibre (excès d’un réactif ou élimination d’eau).',
      'Je sais écrire l’équation de saponification d’un triester (triester + 3 NaOH ➔ glycérol + 3 savons) et calculer le rendement.',
    ],
    keyFormulas: [
      'Estérification ⇌ Hydrolyse : R-COOH + R’-OH ⇌ R-COO-R’ + H₂O (K ≈ 4 pour alcool I)',
      'Rendement : η = n_exp(ester) / n_théo(ester)  ;  Mélange équimolaire alcool I : τ = 2/3 ≈ 66,7 %',
      'Chlorure d’acyle : R-COCl + R’-OH ➔ R-COO-R’ + HCl  (Totale)',
      'Saponification : R-COO-R’ + OH⁻ ➔ R-COO⁻ + R’-OH  (Totale)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Estérification & Saponification',
      slogan: 'Directe = Lente & Limitée (67%) · Anhydride/Chlorure = Rapide & Totale · Saponification = Lente & Totale',
      summaryBulletPoints: [
        'Un catalyseur (H₂SO₄) et le chauffage accélèrent l’estérification mais NE CHANGENT PAS la limite d’équilibre (toujours 67 % en mélange équimolaire !).',
        'Pour augmenter le rendement au-delà de 67 %, on met un réactif en large excès ou on distille l’eau/l’ester au fur et à mesure.',
        'L’ajout de NaCl saturé en fin de saponification provoque le relargage (précipitation) du savon.',
      ],
      verticalFormulas: [
        {
          name: 'Constante K et taux équimolaire (67 %)',
          badge: '⚗️',
          steps: [
            'Initial : 1 mol Acide + 1 mol Alcool',
            'Équilibre : n_ester = x ; n_eau = x ; n_ac = n_alc = 1 - x',
            'K = x² / (1 - x)² = 4  ➔  x / (1 - x) = 2',
            'x = 2 - 2x  ➔  3x = 2  ➔  x = 2/3 ≈ 66,7 %',
          ],
          resultHighlight: 'τ = 66,7 %',
          explanation: 'Démonstration classique de l’équilibre d’estérification avec K = 4.',
        },
        {
          name: 'Saponification d’un triester (3 moles de savon)',
          badge: '🧼',
          steps: [
            'n(triester) = 0,50 mol | Excès de NaOH',
            '1 mol triester ➔ 3 mol savon (R-COO⁻Na⁺)',
            'n_théo(savon) = 3 × 0,50 = 1,50 mol',
            'Si rendement 80 % : n_exp = 0,80 × 1,50 = 1,20 mol',
          ],
          resultHighlight: '1,20 mol de savon',
          explanation: 'N’oublie jamais le facteur stœchiométrique 3 pour les triglycérides !',
        },
      ],
      kokoTip: 'Dans R-COO-R’, la partie R-COO vient toujours de l’acide (-oate) et la partie R’ vient toujours de l’alcool (de ...-yle) !',
      pitfallToAvoid: 'Croire que l’ajout d’acide sulfurique augmente le rendement final de l’estérification (il augmente seulement la vitesse !).',
    },
    sections: [
      {
        title: '1. Équilibre estérification – hydrolyse et optimisation',
        explanation: [
          'La réaction entre un acide carboxylique et un alcool est lente, réversible (limitée par l’hydrolyse inverse) et athermique. En mélange équimolaire avec un alcool primaire, la constante d’équilibre K ≈ 4 conduit à 67 % d’ester.',
        ],
        rules: [
          {
            name: 'Synthèse totale par anhydride d’acide ou chlorure d’acyle',
            description: 'En remplaçant R-COOH par (R-CO)₂O ou R-COCl, l’eau n’est plus produite : l’hydrolyse est impossible, la réaction devient rapide et totale.',
            example: '(CH₃CO)₂O + C₂H₅OH ➔ CH₃COOC₂H₅ + CH₃COOH (Synthèse d’ester à 100 %)',
          },
        ],
      },
      {
        title: '2. Saponification des esters et corps gras',
        explanation: [
          'L’action d’une base forte (NaOH ou KOH) sur un ester donne un ion carboxylate et un alcool. Cette réaction est lente (on chauffe à reflux) mais TOTALE.',
        ],
        rules: [
          {
            name: 'Propriétés du savon (ion carboxylate amphiphile)',
            description: 'Une longue chaîne carbonée lipophile (hydrophobe) et une tête carboxylate -COO⁻ hydrophile permettent de dissoudre les graisses dans l’eau en formant des micelles.',
            example: 'Triester (M = 884 g/mol) + 3 NaOH ➔ Glycérol + 3 R-COONa',
          },
        ],
      },
    ],
    exercises: [
      mkQcm(
        'physTc-14-1',
        'physTc-esterification-saponification',
        'Ex 1 : Nomenclature d’un ester',
        1,
        'Quel ester obtient-on en faisant réagir l’acide éthanoïque (CH₃COOH) avec le propan-1-ol (CH₃-CH₂-CH₂OH) ?',
        [
          'L’éthanoate de propyle',
          'Le propanoate d’éthyle',
          'Le butanoate de méthyle',
          'L’éthanoate de méthyle',
        ],
        'L’éthanoate de propyle',
        'Acide [nom]-oïque + Alcool [nom]-ol ➔ [nom]-oate de [alkyle]-yle.',
        'Acide éthanoïque ➔ éthanoate ; propan-1-ol ➔ de propyle.',
        [
          {
            title: 'Origine des radicaux',
            explanation: 'L’acide fournit le radical -oate, l’alcool fournit le radical -yle.',
            math: 'CH₃-COO-CH₂-CH₂-CH₃ ➔ Éthanoate de propyle',
            subResult: 'Éthanoate de propyle',
          },
        ]
      ),
      mkNum(
        'physTc-14-2',
        'physTc-esterification-saponification',
        'Ex 2 : Quantité d’ester formée à l’équilibre (mélange équimolaire)',
        2,
        'On mélange 0,60 mol d’acide propanoïque et 0,60 mol d’éthanol (alcool primaire) à reflux jusqu’à l’équilibre (taux τ = 67 %).\nCalcule la quantité d’ester formée en mol (à 0,01 près).',
        '0.4',
        'n(ester) = (2/3) × 0,60 mol.',
        'Il se forme 0,40 mol d’ester.',
        [
          {
            title: 'Application du taux 2/3',
            explanation: 'Pour un alcool primaire en mélange équimolaire, τ = 2/3.',
            math: 'n(ester) = (2/3) × 0,60 = 0,40 mol',
            subResult: '0,40 mol',
          },
        ],
        'mol'
      ),
      mkNum(
        'physTc-14-3',
        'physTc-esterification-saponification',
        'Ex 3 : Rendement d’une saponification',
        2,
        'La saponification de 0,25 mol d’un monoester donne expérimentalement 0,21 mol de savon.\nCalcule le rendement η en %.',
        '84',
        'η = (n_exp / n_théo) × 100.',
        'Le rendement vaut 84 %.',
        [
          {
            title: 'Calcul du rendement',
            explanation: 'Réaction totale : n_théo = 0,25 mol.',
            math: 'η = (0,21 ÷ 0,25) × 100 = 84 %',
            subResult: '84 %',
          },
        ],
        '%'
      ),
      mkQcm(
        'physTc-14-4',
        'physTc-esterification-saponification',
        'Ex 4 : Synthèse rapide et totale d’un ester',
        2,
        'Pour obtenir un rendement proche de 100 % lors de la synthèse du méthanoate d’éthyle, quel réactif doit remplacer l’acide méthanoïque ?',
        [
          'Un anhydride d’acide ou un chlorure d’acyle',
          'De l’eau distillée en excès',
          'Une simple augmentation de la durée de chauffage',
          'De l’hydroxyde de sodium',
        ],
        'Un anhydride d’acide ou un chlorure d’acyle',
        'Ces dérivés d’acides réagissent de façon rapide et totale sans former d’eau.',
        'L’utilisation d’un chlorure d’acyle ou d’un anhydride d’acide rend la synthèse d’ester rapide et totale.',
        [
          {
            title: 'Éviter la réversibilité',
            explanation: 'Pas d’eau formée ➔ pas d’hydrolyse inverse.',
            math: 'Anhydride ou R-COCl + Alcool ➔ Ester (100 %)',
            subResult: 'Anhydride / Chlorure d’acyle',
          },
        ]
      ),
    ],
  },
];
