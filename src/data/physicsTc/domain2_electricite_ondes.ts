import { Chapter } from '../../types/math';
import { mkNum, mkQcm } from '../chapters/exerciseHelpers';

export const PHYSICS_TC_ELECTRICITE_ONDES: Chapter[] = [
  {
    id: 'physTc-dipoles-rc-rl',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'electricite',
    order: 5,
    title: 'Dipôles RC & RL : Charge/Décharge & Établissement du Courant',
    badge: 'Physique Tle C · Ch. 5',
    shortDesc: 'Équations différentielles du 1er ordre, constante de temps τ = RC et τ = L/R, solutions exponentielles et énergie emmagasinée (½CU² et ½LI²).',
    themeColor: '#f59e0b',
    themeGradient: 'from-amber-500 via-orange-500 to-yellow-400',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-dipoles-rc-rl',
    bossMeta: { name: 'MAÎTRE DES TRANSITOIRES RC/RL', emoji: '🔋', xp: 200 },
    kokoSpeech:
      'Pour les circuits RC et RL au Bac C : vérifie toujours les continuités physiques ! La tension u_C aux bornes d’un condensateur ne subit jamais de discontinuité ; l’intensité i dans une bobine non plus ! Et au bout de 5τ, on atteint 99,3 % du régime permanent.',
    realWorldHook: {
      title: 'Flash d’appareil photo & filtrage d’alimentation à Libreville',
      scenario:
        'Pour protéger des appareils contre les micro-coupures du réseau SEEG, un bloc d’alimentation charge un condensateur C = 2 200 µF à travers une résistance R = 50 Ω sous E = 12 V.',
      question:
        'Quelle est la constante de temps τ = RC, le temps de charge quasi totale (5τ) et l’énergie stockée E_C ?',
    },
    unitsTable: [
      { symbol: 'τ = R·C', quantity: 'Constante de temps dipôle RC', unit: 'seconde (s) [Ω × F = s]', instrument: 'Tangente à l’origine / 0,63 E' },
      { symbol: 'E_C = ½ C u_C²', quantity: 'Énergie du condensateur', unit: 'Joule (J)', instrument: 'Condensateur C en Farad (F)' },
      { symbol: 'τ = L / R_tot', quantity: 'Constante de temps dipôle RL', unit: 'seconde (s) [H / Ω = s]', instrument: 'Bobine d’inductance L (H)' },
      { symbol: 'E_L = ½ L i²', quantity: 'Énergie magnétique de bobine', unit: 'Joule (J)', instrument: 'u_L = r·i + L·(di/dt)' },
    ],
    experimentOrActivity: {
      title: 'Visualisation à l’oscilloscope à mémoire de la charge d’un dipôle RC',
      materials: ['GBF signal carré basse fréquence', 'Condensateur C = 1 µF', 'Résistor R = 1 kΩ', 'Oscilloscope bicourbe'],
      observation:
        'La courbe u_C(t) croît exponentiellement vers E. La tangente tracée à t = 0 coupe l’asymptote horizontale u_C = E à l’instant t = τ = 1,0 ms, où u_C(τ) = 0,63 E.',
      conclusion:
        'L’analyse graphique de la tangente à l’origine ou de la valeur 0,63 E (en charge) / 0,37 E (en décharge) donne τ = R·C.',
    },
    revisionChecklist: [
      'Je sais établir du/dt + u/(RC) = E/(RC) en charge et vérifier u_C(t) = E(1 - e^(-t/τ)).',
      'Je sais trouver τ graphiquement par deux méthodes : tangente à t = 0 et valeur 0,63 E (ou 0,37 E).',
      'Je sais écrire la loi des mailles pour RL : (R + r)i + L(di/dt) = E, donnant I_max = E/(R+r) et τ = L/(R+r).',
    ],
    keyFormulas: [
      'RC charge : τ = R·C ; u_C(t) = E(1 - e^(-t/τ)) ; i(t) = (E/R) e^(-t/τ) ; u_C(τ) = 0,63 E',
      'RC décharge : u_C(t) = E e^(-t/τ) ; u_C(τ) = 0,37 E ; E_C = ½ C u_C²',
      'RL établissement : τ = L / R_tot ; i(t) = I_∞ (1 - e^(-t/τ)) avec I_∞ = E / (R + r)',
      'RL rupture : i(t) = I_0 e^(-t/τ) ; E_L = ½ L i² ; diode de roue libre contre les surtensions',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Dipôles RC & RL',
      slogan: 'Continuité u_C et i_L · τ = RC · τ = L/R_tot · 5τ = régime permanent',
      summaryBulletPoints: [
        'Analyse dimensionnelle classique : [RC] = [U/I]·[Q/U] = [Q/I] = T (seconde).',
        'Analyse dimensionnelle RL : [L/R] = [U·T/I] / [U/I] = T (seconde).',
        'En régime permanent (t > 5τ) : condensateur = interrupteur ouvert (i = 0, u_C = E) ; bobine idéale = fil (u_L = r i).',
        'Toujours calculer R_tot = R + r si la bobine possède une résistance interne r ≠ 0 !',
      ],
      verticalFormulas: [
        {
          name: 'Constante de temps RC & Énergie stockée',
          badge: '⚡',
          steps: [
            'R = 50 Ω | C = 2 200 µF = 2,2×10⁻³ F | E = 12 V',
            'τ = R × C = 50 × 2,2×10⁻³ = 0,11 s',
            'Charge complète ≈ 5τ = 0,55 s',
            'E_C = ½ C E² = 0,5 × 2,2×10⁻³ × 144 = 0,158 J',
          ],
          resultHighlight: 'τ = 0,11 s ; E_C = 0,158 J',
          explanation: 'Convertis toujours µF en F (1 µF = 10⁻⁶ F) et mH en H (1 mH = 10⁻³ H).',
        },
        {
          name: 'Régime permanent d’une bobine réelle (L, r)',
          badge: '🧲',
          steps: [
            'E = 12 V | R = 10 Ω | r = 2 Ω | L = 0,24 H',
            'I_∞ = E ÷ (R + r) = 12 ÷ 12 = 1,0 A',
            'τ = L ÷ (R + r) = 0,24 ÷ 12 = 0,02 s = 20 ms',
            'E_L = ½ L I_∞² = 0,5 × 0,24 × 1² = 0,12 J',
          ],
          resultHighlight: 'τ = 20 ms ; I_∞ = 1,0 A',
          explanation: 'N’oublie jamais la résistance interne r de la bobine dans R_tot.',
        },
      ],
      kokoTip: 'Pour trouver E_C en millijoules sans erreur : garde 1 µF = 10⁻⁶ F et calcule ½ C U² en Joules d’abord !',
      pitfallToAvoid: 'Oublier la résistance interne r de la bobine lors du calcul de τ = L / (R + r) !',
    },
    sections: [
      {
        title: '1. Dipôle RC : Équation différentielle, charge et décharge',
        explanation: [
          'En convention récepteur, i = dq/dt = C (du_C/dt). La loi d’additivité des tensions u_R + u_C = E donne RC (du_C/dt) + u_C = E.',
          'En posant τ = RC, la solution de charge avec u_C(0) = 0 est u_C(t) = E(1 - e^(-t/τ)). La décharge sur R donne u_C(t) = E e^(-t/τ).',
        ],
        rules: [
          {
            name: 'Lecture graphique de τ sur u_C(t)',
            description: 'À t = τ, u_C(τ) = E(1 - e⁻¹) ≈ 0,63 E en charge, et u_C(τ) = E e⁻¹ ≈ 0,37 E en décharge.',
            example: 'R = 10 kΩ ; C = 4,7 µF | τ = 10⁴ × 4,7×10⁻⁶ | τ = 0,047 s = 47 ms',
          },
        ],
      },
      {
        title: '2. Dipôle RL : Auto-induction, établissement et énergie magnétique',
        explanation: [
          'Une bobine d’inductance L et de résistance interne r vérifie u_L = r i + L (di/dt). Elle s’oppose aux variations brusques de l’intensité i.',
          'L’équation différentielle de l’établissement du courant est L(di/dt) + (R + r)i = E, dont la solution tend vers I_∞ = E/(R + r) avec τ = L/(R + r).',
        ],
        rules: [
          {
            name: 'Rôle de la diode de roue libre à l’ouverture',
            description: 'À l’ouverture de l’interrupteur, di/dt est très négatif : la bobine crée une forte surtension (étincelle). Une diode de roue libre en dérivation évite la destruction du circuit.',
            example: 'L = 0,5 H ; I_∞ = 2 A | E_L = ½ × 0,5 × 2² | E_L = 1,0 J',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-5-1',
        'physTc-dipoles-rc-rl',
        'Ex 1 : Constante de temps d’un dipôle RC',
        1,
        'Un condensateur C = 20 µF est chargé à travers un résistor R = 2,5 kΩ.\nCalcule la constante de temps τ en millisecondes (ms).',
        '50',
        'Convertis R = 2 500 Ω et C = 20×10⁻⁶ F, puis τ = R·C.',
        'τ = 2500 × 20×10⁻⁶ = 0,050 s = 50 ms.',
        [
          {
            title: 'Conversions SI',
            explanation: '2,5 kΩ = 2500 Ω et 20 µF = 20×10⁻⁶ F.',
            math: 'τ = R · C = 2500 × 20×10⁻⁶ = 0,050 s',
            subResult: '0,050 s',
          },
          {
            title: 'En ms',
            explanation: '1 s = 1000 ms.',
            math: 'τ = 0,050 × 1000 = 50 ms',
            subResult: '50 ms',
          },
        ],
        'ms'
      ),
      mkNum(
        'physTc-5-2',
        'physTc-dipoles-rc-rl',
        'Ex 2 : Tension u_C à t = τ en décharge',
        2,
        'Un condensateur chargé sous E = 10 V se décharge dans un résistor. Quelle est la tension u_C(τ) à l’instant t = τ (arrondie à 0,1 V près) ?',
        '3.7',
        'En décharge, u_C(τ) = E · e⁻¹ ≈ 0,37 · E.',
        'À t = τ, u_C vaut environ 3,7 V.',
        [
          {
            title: 'Loi de décharge',
            explanation: 'u_C(t) = E e^(-t/τ).',
            math: 'u_C(τ) = 10 × e⁻¹ ≈ 10 × 0,3679 ≈ 3,7 V',
            subResult: '3,7 V',
          },
        ],
        'V'
      ),
      mkNum(
        'physTc-5-3',
        'physTc-dipoles-rc-rl',
        'Ex 3 : Constante de temps et intensité finale d’un circuit RL',
        2,
        'Un générateur E = 12 V alimente en série R = 18 Ω et une bobine (L = 0,48 H ; r = 6 Ω).\nCalcule l’intensité permanente I_∞ en ampères.',
        '0.5',
        'En régime permanent, di/dt = 0 donc I_∞ = E / (R + r).',
        'L’intensité permanente vaut I_∞ = 0,5 A.',
        [
          {
            title: 'Résistance totale',
            explanation: 'On additionne R et la résistance interne r.',
            math: 'R_tot = 18 + 6 = 24 Ω',
            subResult: '24 Ω',
          },
          {
            title: 'Intensité permanente',
            explanation: 'I_∞ = E / R_tot.',
            math: 'I_∞ = 12 ÷ 24 = 0,5 A',
            subResult: '0,5 A',
          },
        ],
        'A'
      ),
      mkNum(
        'physTc-5-4',
        'physTc-dipoles-rc-rl',
        'Ex 4 : Énergie magnétique stockée dans une bobine',
        3,
        'Une bobine d’inductance L = 0,40 H est parcourue en régime permanent par I = 1,5 A.\nCalcule l’énergie magnétique E_L (en J).',
        '0.45',
        'Applique E_L = ½ L I².',
        'La bobine emmagasine E_L = 0,45 J.',
        [
          {
            title: 'Formule de l’énergie magnétique',
            explanation: 'E_L = ½ L I².',
            math: 'E_L = 0,5 × 0,40 × 1,5² = 0,20 × 2,25 = 0,45 J',
            subResult: '0,45 J',
          },
        ],
        'J'
      ),
    ],
  },

  {
    id: 'physTc-oscillations-rlc',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'electricite',
    order: 6,
    title: 'Oscillations Électriques Libres LC & Forcées RLC (Résonance)',
    badge: 'Physique Tle C · Ch. 6',
    shortDesc: 'Oscillateur LC idéal (T₀ = 2π√(LC)), régimes pseudo-périodique/apériodique, impédance Z du circuit RLC série, résonance d’intensité et puissance.',
    themeColor: '#6366f1',
    themeGradient: 'from-indigo-500 via-violet-500 to-sky-500',
    readingTimeMinutes: 17,
    illustrationKey: 'tc-resonance-rlc',
    bossMeta: { name: 'MAÎTRE DE LA RÉSONANCE RLC', emoji: '📻', xp: 210 },
    kokoSpeech:
      'La résonance en RLC série, c’est le grand classique du Bac C : lorsque ω = ω₀ = 1/√(LC), l’impédance Z est minimale (Z = R_tot), le courant I est maximal (I₀ = U/R_tot), u et i sont en phase (φ = 0, cos φ = 1), et la tension aux bornes de C peut dépasser U (surtension U_C = Q·U) !',
    realWorldHook: {
      title: 'Récepteur radio FM à Libreville accordé sur 96,5 MHz',
      scenario:
        'Le circuit d’accord LC d’un poste radio sélectionne une station FM précise en faisant varier la capacité C d’un condensateur pour égaler la fréquence propre N₀ = 1 / (2π√(LC)) à celle de l’onde reçue.',
      question:
        'Comment calculer l’impédance Z, le déphasage φ et la bande passante ΔN d’un circuit RLC série ?',
    },
    unitsTable: [
      { symbol: 'T₀ = 2π√(LC)', quantity: 'Période propre (Formule de Thomson)', unit: 'seconde (s)', instrument: 'Circuit LC idéal' },
      { symbol: 'Z = √(R_t² + (Lω - 1/(Cω))²)', quantity: 'Impédance complexe |Z|', unit: 'Ohm (Ω)', instrument: 'Diagramme de Fresnel' },
      { symbol: 'Q = Lω₀/R_t = N₀/ΔN', quantity: 'Facteur de qualité / surtension', unit: 'Sans unité', instrument: 'Aiguïté de la résonance' },
      { symbol: 'P = U · I · cos φ', quantity: 'Puissance active moyenne', unit: 'Watt (W)', instrument: 'cos φ = R_t / Z' },
    ],
    experimentOrActivity: {
      title: 'Tracé de la courbe de résonance I(N) d’un circuit RLC série',
      materials: ['GBF sinusoïdal', 'Résistor R = 100 Ω', 'Bobine L = 0,1 H', 'Condensateur C = 1 µF', 'Ampèremètre TRMS'],
      observation:
        'Quand la fréquence N du GBF balaye 200 Hz à 800 Hz, l’intensité efficace I passe par un maximum très net à N₀ ≈ 503 Hz.',
      conclusion:
        'À la résonance (N = N₀), Lω₀ = 1/(Cω₀), l’impédance vaut simplement R_tot et le déphasage φ s’annule.',
    },
    revisionChecklist: [
      'Je sais établir l’équation différentielle de LC : d²q/dt² + q/(LC) = 0 et montrer la conservation E_tot = ½ q²/C + ½ L i².',
      'Je maîtrise le diagramme de Fresnel pour calculer Z = √(R_t² + (Lω - 1/(Cω))²) et tan φ = (Lω - 1/(Cω))/R_t.',
      'Je sais calculer la fréquence de résonance N₀, les fréquences de coupure à -3 dB (I = I₀/√2) et la bande passante ΔN = R_t / (2π L).',
    ],
    keyFormulas: [
      'Oscillateur LC : d²u_C/dt² + (1/LC) u_C = 0  ;  T₀ = 2π √(LC)  ;  N₀ = 1 / (2π √(LC))',
      'Impédance RLC série : Z = √(R_t² + (Lω - 1/(Cω))²)  et  U = Z · I',
      'Déphasage u par rapport à i : cos φ = R_t / Z  ;  tan φ = (Lω - 1/(Cω)) / R_t',
      'Résonance (LCω₀² = 1) : Z_min = R_t ; I_max = U/R_t ; φ = 0 ; ΔN = R_t/(2πL) ; Q = N₀/ΔN = (1/R_t)√(L/C)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : LC & Résonance RLC',
      slogan: 'Thomson T₀ = 2π√(LC) · Fresnel Z · Résonance LCω₀² = 1',
      summaryBulletPoints: [
        'Si Lω > 1/(Cω), le circuit est inductif (φ > 0 : u en avance sur i).',
        'Si Lω < 1/(Cω), le circuit est capacitif (φ < 0 : u en retard sur i).',
        'À la résonance d’intensité : U_L = U_C = Q · U (danger de claquage si Q grand !).',
        'Aux bornes de la bande passante à -3 dB : I = I_max / √2 et Z = √2 · R_t (φ = ± π/4).',
      ],
      verticalFormulas: [
        {
          name: 'Formule de Thomson (Fréquence propre)',
          badge: '📡',
          steps: [
            'L = 0,25 H | C = 10 µF = 10⁻⁵ F',
            'L · C = 0,25 × 10⁻⁵ = 2,5×10⁻⁶ s²',
            'T₀ = 2π √(2,5×10⁻⁶) = 2π × 1,581×10⁻³ ≈ 9,93 ms',
            'N₀ = 1 / T₀ ≈ 100,7 Hz',
          ],
          resultHighlight: 'N₀ ≈ 101 Hz',
          explanation: 'En régime libre LC sans résistance, la période est T₀ = 2π√(LC).',
        },
        {
          name: 'Impédance Z et puissance active P',
          badge: '🔌',
          steps: [
            'R_t = 60 Ω | Lω = 120 Ω | 1/(Cω) = 40 Ω | U = 20 V',
            'Z = √(60² + (120 - 40)²) = √(3600 + 6400) = 100 Ω',
            'I = U ÷ Z = 20 ÷ 100 = 0,20 A',
            'P = R_t · I² = 60 × 0,04 = 2,4 W',
          ],
          resultHighlight: 'Z = 100 Ω ; I = 0,20 A',
          explanation: 'Le triangle (60 ; 80 ; 100) vient immédiatement de Fresnel !',
        },
      ],
      kokoTip: 'Pour calculer la puissance moyenne en RLC série, P = R_tot · I² est souvent plus rapide que U·I·cos φ !',
      pitfallToAvoid: 'Oublier la résistance interne r de la bobine dans R_tot = R + r !',
    },
    sections: [
      {
        title: '1. Oscillations électriques libres dans un circuit LC et amortissement RLC',
        explanation: [
          'Un condensateur initialement chargé sous U₀ branché aux bornes d’une bobine idéale (r = 0) échange continuellement énergie électrostatique ½Cu_C² et magnétique ½Li² à la période T₀ = 2π√(LC).',
          'Si une résistance totale R_t est présente, le régime est pseudo-périodique (T ≈ T₀ si R_t faible) puis apériodique quand R_t > R_c = 2√(L/C).',
        ],
        rules: [
          {
            name: 'Conservation de l’énergie dans LC idéal',
            description: 'À tout instant E_tot = ½ C u_C² + ½ L i² = ½ C U_m² = ½ L I_m².',
            example: 'C = 4 µF ; U_m = 10 V ; L = 0,1 H | I_m = U_m √(C/L) | I_m = 10 √(4×10⁻⁶ / 0,1) = 0,063 A',
          },
        ],
      },
      {
        title: '2. Régime sinusoïdal forcé et résonance d’intensité',
        explanation: [
          'Soumis à u(t) = U√2 cos(ωt + φ), le circuit RLC série adopte la pulsation ω du GBF avec une impédance Z = √(R_t² + (Lω - 1/(Cω))²).',
        ],
        rules: [
          {
            name: 'Résonance, bande passante et facteur de qualité Q',
            description: 'À ω = ω₀, l’intensité est maximale I₀ = U/R_t. La bande passante ΔN = R_t/(2πL) mesure la sélectivité : plus R_t est faible, plus Q = N₀/ΔN est grand.',
            example: 'N₀ = 1 000 Hz ; Q = 20 | ΔN = N₀ ÷ Q | ΔN = 1 000 ÷ 20 = 50 Hz',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-6-1',
        'physTc-oscillations-rlc',
        'Ex 1 : Impédance d’un circuit RLC série',
        1,
        'Un circuit RLC série comporte R_t = 30 Ω, Lω = 90 Ω et 1/(Cω) = 50 Ω.\nCalcule son impédance Z en ohms.',
        '50',
        'Z = √(R_t² + (Lω - 1/(Cω))²).',
        'Z = √(30² + 40²) = √2500 = 50 Ω.',
        [
          {
            title: 'Réactance nette',
            explanation: 'On calcule X = Lω - 1/(Cω).',
            math: 'X = 90 - 50 = 40 Ω',
            subResult: '40 Ω',
          },
          {
            title: 'Calcul de Z',
            explanation: 'Z = √(30² + 40²).',
            math: 'Z = √(900 + 1600) = √2500 = 50 Ω',
            subResult: '50 Ω',
          },
        ],
        'Ω'
      ),
      mkNum(
        'physTc-6-2',
        'physTc-oscillations-rlc',
        'Ex 2 : Période propre de Thomson',
        2,
        'Un circuit LC idéal comporte L = 10 mH et C = 10 µF.\nCalcule sa période propre T₀ en millisecondes (prendre π ≈ 3,14).',
        '1.99',
        'L·C = 10⁻² × 10⁻⁵ = 10⁻⁷, ou T₀ = 2π √(10⁻⁷) ≈ 2π × 3,162×10⁻⁴ s.',
        'T₀ ≈ 1,99 ms.',
        [
          {
            title: 'Produit L·C',
            explanation: '10 mH = 0,01 H et 10 µF = 10⁻⁵ F.',
            math: 'LC = 10⁻² × 10⁻⁵ = 10⁻⁷ s² ➔ √(LC) ≈ 3,162×10⁻⁴ s',
            subResult: '3,162×10⁻⁴ s',
          },
          {
            title: 'Période T₀',
            explanation: 'T₀ = 2π √(LC).',
            math: 'T₀ = 2 × 3,1416 × 3,162×10⁻⁴ ≈ 1,99×10⁻³ s = 1,99 ms',
            subResult: '1,99 ms',
          },
        ],
        'ms'
      ),
      mkNum(
        'physTc-6-3',
        'physTc-oscillations-rlc',
        'Ex 3 : Surtension aux bornes du condensateur à la résonance',
        2,
        'Un circuit RLC série (R_t = 20 Ω, L = 0,20 H) est alimenté à la résonance à N₀ = 100 Hz (ω₀ ≈ 628 rad/s) sous U = 10 V.\nCalcule la tension U_C aux bornes du condensateur en Volts.',
        '62.8',
        'À la résonance, U_C = Q · U avec Q = L ω₀ / R_t.',
        'Q = (0,20 × 628)/20 = 6,28 donc U_C = 62,8 V.',
        [
          {
            title: 'Facteur de qualité Q',
            explanation: 'Q = L ω₀ / R_t.',
            math: 'Q = (0,20 × 628) ÷ 20 = 6,28',
            subResult: 'Q = 6,28',
          },
          {
            title: 'Surtension U_C',
            explanation: 'U_C = Q · U.',
            math: 'U_C = 6,28 × 10 = 62,8 V',
            subResult: '62,8 V',
          },
        ],
        'V'
      ),
      mkQcm(
        'physTc-6-4',
        'physTc-oscillations-rlc',
        'Ex 4 : Bande passante à -3 dB',
        3,
        'Un circuit RLC de fréquence de résonance N₀ = 500 Hz possède un facteur de qualité Q = 25.\nQuelle est sa bande passante ΔN à -3 dB ?',
        ['20 Hz', '12,5 Hz', '50 Hz', '12 500 Hz'],
        '20 Hz',
        'Q = N₀ / ΔN.',
        'ΔN = N₀ / Q = 500 / 25 = 20 Hz.',
        [
          {
            title: 'Relation Q = N₀ / ΔN',
            explanation: 'On isole ΔN.',
            math: 'ΔN = N₀ ÷ Q = 500 ÷ 25 = 20 Hz',
            subResult: '20 Hz',
          },
        ]
      ),
    ],
  },

  {
    id: 'physTc-ondes-mecaniques',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'electricite',
    order: 7,
    title: 'Ondes Mécaniques Progressives, Interférences & Diffraction',
    badge: 'Physique Tle C · Ch. 7',
    shortDesc: 'Célérité d’une onde, retard τ = d/v, longueur d’onde λ = v·T, stroboscopie, interférences constructives/destructives et diffraction.',
    themeColor: '#06b6d4',
    themeGradient: 'from-cyan-500 via-sky-500 to-blue-500',
    readingTimeMinutes: 15,
    illustrationKey: 'tc-ondes-diffraction',
    bossMeta: { name: 'MAÎTRE DES ONDES & STROBOSCOPE', emoji: '🌊', xp: 200 },
    kokoSpeech:
      'Retiens le réflexe Bac C sur les ondes : une onde transporte de l’énergie SANS transport de matière ! Sur une corde ou une cuve à ondes, la relation fondamentale v = λ / T = λ · N s’applique toujours, et deux points en phase sont séparés de d = k·λ !',
    realWorldHook: {
      title: 'Houle de l’Atlantique à Pointe-Denis & sondeur bathymétrique',
      scenario:
        'Au large de Libreville, une houle régulière de période T = 8,0 s se propage à v = 12 m/s, tandis qu’un sonar émet des ultrasons à N = 40 kHz vers les fonds marins.',
      question:
        'Quelle est la longueur d’onde λ de la houle et comment interpréter les franges d’interférence créées par deux pointes synchrones S₁ et S₂ ?',
    },
    unitsTable: [
      { symbol: 'λ = v · T = v / N', quantity: 'Longueur d’onde (périodicité spatiale)', unit: 'mètre (m)', instrument: 'Cuve à ondes / Corde' },
      { symbol: 'τ = MM’ / v', quantity: 'Retard temporel de propagation', unit: 'seconde (s)', instrument: 'y_M(t) = y_S(t - τ)' },
      { symbol: 'δ = d₂ - d₁', quantity: 'Différence de marche', unit: 'mètre (m)', instrument: 'kλ (max) ; (k+½)λ (nul)' },
      { symbol: 'θ = λ / a', quantity: 'Demi-angle de diffraction', unit: 'radian (rad)', instrument: 'Fente de largeur a' },
    ],
    experimentOrActivity: {
      title: 'Cuve à ondes avec stroboscope et double vibreur synchrone',
      materials: ['Cuve à ondes', 'Vibreur à double pointe S₁, S₂', 'Stroboscope réglable N_e', 'Règle graduée'],
      observation:
        'Éclairée par un stroboscope de fréquence N_e = N (ou N/k), l’onde paraît immobile. Avec deux sources S₁ et S₂ synchrones, on observe des hyperboles fixes d’amplitude maximale et des lignes nodales immobiles.',
      conclusion:
        'L’état vibratoire d’un point M dépend de d₂ - d₁ : constructif si d₂ - d₁ = kλ, destructif si d₂ - d₁ = (k + ½)λ.',
    },
    revisionChecklist: [
      'Je sais écrire l’équation d’un point M d’une corde : y_M(t) = a sin(2π(t/T - x/λ) + φ₀) et vérifier s’il est en phase ou en opposition avec S.',
      'Je maîtrise le stroboscope : immobilité apparente si N = k · N_e (la plus grande fréquence d’immobilité donne N_e_max = N).',
      'Je sais calculer le nombre de points d’amplitude maximale ou nulle entre deux sources S₁ et S₂ distantes de d.',
    ],
    keyFormulas: [
      'Célérité : v = d / τ = λ / T = λ · N  (corde tendue : v = √(T_tension / μ))',
      'Points en phase : d₂ - d₁ = k λ (k ∈ ℤ) ; en opposition de phase : d₂ - d₁ = (k + ½) λ',
      'Interférences mécaniques : amplitude max si |S₂M - S₁M| = k λ ; nulle si |S₂M - S₁M| = (k + ½) λ',
      'Stroboscopie : immobilité apparente pour N_e = N / k (k ∈ ℕ*)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Ondes Progressives & Interférences',
      slogan: 'v = λ·N · Retard τ = x/v · Constructif kλ vs Destructif (k+½)λ',
      summaryBulletPoints: [
        'Lors d’une traversée d’obstacle ou de milieu, la fréquence N ne change JAMAIS (c’est v et λ qui changent).',
        'Pour trouver l’amplitude résultante entre S₁ et S₂, encadre : -S₁S₂ ≤ kλ ≤ +S₁S₂.',
        'Le phénomène de diffraction est d’autant plus marqué que la fente a est petite devant λ (a ≈ λ).',
        'Le mouvement apparent au stroboscope recule si N_e > N (légèrement plus vite) et avance si N_e < N.',
      ],
      verticalFormulas: [
        {
          name: 'Célérité sur une corde tendue (Formule de Melde)',
          badge: '🎸',
          steps: [
            'Tension F = 20 N | Masse linéique μ = 5,0 g/m = 5×10⁻³ kg/m',
            'v = √(F ÷ μ)',
            'v = √(20 ÷ 0,005) = √4000',
            'v ≈ 63,2 m/s',
          ],
          resultHighlight: 'v ≈ 63,2 m/s',
          explanation: 'Pense à convertir μ de g/m en kg/m en divisant par 1000.',
        },
        {
          name: 'Nombre de franges maximales entre S₁ et S₂',
          badge: '〰️',
          steps: [
            'Distance S₁S₂ = 7,0 cm | λ = 2,0 cm',
            '-S₁S₂ < k λ < +S₁S₂  (strict si S₁, S₂ exclus)',
            '-3,5 < k < +3,5  ➔  k ∈ {-3, -2, -1, 0, 1, 2, 3}',
            'Total = 7 points d’amplitude maximale',
          ],
          resultHighlight: '7 hyperboles constructives',
          explanation: 'Encadre toujours k entre -S₁S₂/λ et +S₁S₂/λ.',
        },
      ],
      kokoTip: 'Si l’éclat du stroboscope immobilise pour N_e = 50 Hz et à nouveau juste en dessous pour N_e = 25 Hz, alors la fréquence réelle vaut N = 50 Hz !',
      pitfallToAvoid: 'Oublier que si S₁ et S₂ sont des sources synchrones en phase, le médiateur (δ = 0) est une frange brillante/maximale !',
    },
    sections: [
      {
        title: '1. Propagation d’une onde mécanique progressive et stroboscopie',
        explanation: [
          'Une onde mécanique est la propagation d’une perturbation dans un milieu matériel élastique avec transport d’énergie sans transport de matière.',
          'La double périodicité (temporelle T et spatiale λ) est reliée par λ = v · T = v / N.',
        ],
        rules: [
          {
            name: 'Équation horaire d’un point M de la corde',
            description: 'Si la source S vibre selon y_S(t) = a sin(ωt), un point M situé à l’abscisse x reproduit le mouvement avec le retard τ = x/v.',
            example: 'N = 50 Hz ; v = 10 m/s ; x = 0,40 m | λ = 10 ÷ 50 = 0,20 m | x = 2λ (M en phase avec S)',
          },
        ],
      },
      {
        title: '2. Interférences mécaniques et diffraction',
        explanation: [
          'Lorsque deux ondes de même fréquence et en phase issues de S₁ et S₂ se superposent, les amplitudes s’ajoutent là où d₂ - d₁ = kλ et s’annulent là où d₂ - d₁ = (k + ½)λ.',
        ],
        rules: [
          {
            name: 'Condition de diffraction notable',
            description: 'Une onde plane passant par une fente de largeur a diverge avec un écart angulaire θ = λ/a lorsque a est de l’ordre de grandeur de λ.',
            example: 'λ = 3,0 cm ; a = 6,0 cm | θ = 3,0 ÷ 6,0 | θ = 0,50 rad',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-7-1',
        'physTc-ondes-mecaniques',
        'Ex 1 : Longueur d’onde d’une onde sonore',
        1,
        'Un diapason émet dans l’air (célérité v = 340 m/s) un son de fréquence N = 680 Hz.\nCalcule sa longueur d’onde λ en mètres.',
        '0.5',
        'Applique λ = v / N.',
        'La longueur d’onde vaut λ = 0,50 m.',
        [
          {
            title: 'Formule de la longueur d’onde',
            explanation: 'λ = v / N.',
            math: 'λ = 340 ÷ 680 = 0,50 m',
            subResult: '0,50 m',
          },
        ],
        'm'
      ),
      mkNum(
        'physTc-7-2',
        'physTc-ondes-mecaniques',
        'Ex 2 : Célérité d’onde le long d’une corde tendue',
        2,
        'Une corde de masse linéique μ = 4,0 g/m est tendue par une force F = 36 N.\nCalcule la célérité v de l’onde en m/s.',
        '94.9',
        'Convertis μ = 0,004 kg/m puis v = √(F / μ).',
        'v = √(36 / 0,004) = √9000 ≈ 94,9 m/s.',
        [
          {
            title: 'Conversion de μ',
            explanation: '4,0 g/m = 4,0×10⁻³ kg/m.',
            math: 'v = √(36 ÷ 0,004) = √9000 ≈ 94,9 m/s',
            subResult: '94,9 m/s',
          },
        ],
        'm/s'
      ),
      mkNum(
        'physTc-7-3',
        'physTc-ondes-mecaniques',
        'Ex 3 : Nombre de points d’amplitude maximale sur [S₁S₂]',
        3,
        'Deux pointes synchrones en phase distantes de S₁S₂ = 9,0 cm créent des ondes de longueur d’onde λ = 2,0 cm.\nCombien de points sur le segment ]S₁S₂[ vibrent avec une amplitude maximale ?',
        '9',
        'Cherche les entiers k vérifiant -9,0 < 2,0 k < +9,0.',
        'k ∈ {-4, -3, -2, -1, 0, 1, 2, 3, 4}, soit 9 points.',
        [
          {
            title: 'Encadrement de k',
            explanation: '|d₂ - d₁| < S₁S₂.',
            math: '-9,0 < 2,0 k < 9,0 ➔ -4,5 < k < 4,5',
            subResult: 'k de -4 à +4',
          },
          {
            title: 'Dénombrement',
            explanation: '4 négatifs + 0 + 4 positifs.',
            math: '4 + 1 + 4 = 9 points',
            subResult: '9 points',
          },
        ]
      ),
      mkQcm(
        'physTc-7-4',
        'physTc-ondes-mecaniques',
        'Ex 4 : Mesure stroboscopique de fréquence',
        2,
        'Un vibreur est éclairé par un stroboscope. La fréquence la plus élevée donnant l’immobilité apparente est N_e = 40 Hz.\nQuelle est la fréquence réelle N du vibreur ?',
        ['40 Hz', '80 Hz', '20 Hz', '10 Hz'],
        '40 Hz',
        'Les fréquences d’immobilité sont N_e = N / k (k ≥ 1) : la plus grande correspond à k = 1.',
        'Pour k = 1, N_e_max = N = 40 Hz.',
        [
          {
            title: 'Condition d’immobilité',
            explanation: 'N_e = N / k atteint son maximum quand k = 1.',
            math: 'k = 1 ➔ N = N_e_max = 40 Hz',
            subResult: '40 Hz',
          },
        ]
      ),
    ],
  },

  {
    id: 'physTc-interferences-lumiere',
    subject: 'physique',
    gradeLevel: 'Terminale C',
    domainId: 'electricite',
    order: 8,
    title: 'Ondes Lumineuses (Young) & Aspect Corpusculaire (Photoélectrique)',
    badge: 'Physique Tle C · Ch. 8',
    shortDesc: 'Interférences des fentes d’Young (interfrange i = λD/a), effet photoélectrique (hν = W₀ + Ec_max), niveaux d’énergie quantifiés des atomes.',
    themeColor: '#ec4899',
    themeGradient: 'from-pink-500 via-rose-500 to-amber-500',
    readingTimeMinutes: 16,
    illustrationKey: 'tc-young-photoelectrique',
    bossMeta: { name: 'PHYSICIEN QUANTIQUE & OPTIQUE', emoji: '🔬', xp: 210 },
    kokoSpeech:
      'En Terminale C, la lumière est à la fois onde (fentes d’Young : i = λD/a, diffraction θ = λ/a) ET particule (photons d’énergie E = hν = hc/λ) ! N’oublie jamais de convertir les électron-volts (eV) en Joules : 1 eV = 1,6×10⁻¹⁹ J !',
    realWorldHook: {
      title: 'Panneaux solaires photovoltaïques sur les sites isolés du Gabon',
      scenario:
        'Un panneau solaire exploite l’effet photoélectrique : chaque photon solaire d’énergie E = hc/λ libère un électron dès que λ ≤ λ₀ (seuil photoélectrique du semi-conducteur).',
      question:
        'Comment calculer le travail d’extraction W₀, la longueur d’onde seuil λ₀ et le potentiel d’arrêt U₀ d’une cellule photoélectrique ?',
    },
    unitsTable: [
      { symbol: 'i = λ · D / a', quantity: 'Interfrange des fentes d’Young', unit: 'mètre (m)', instrument: 'D : distance fentes-écran ; a : écart' },
      { symbol: 'E = h ν = h c / λ', quantity: 'Énergie d’un photon', unit: 'Joule (J) ou eV', instrument: 'h = 6,626×10⁻³⁴ J·s ; 1 eV = 1,6×10⁻¹⁹ J' },
      { symbol: 'h ν = W₀ + Ec_max', quantity: 'Équation d’Einstein (photoélectrique)', unit: 'Joule ou eV', instrument: 'W₀ = h ν₀ = h c / λ₀' },
      { symbol: 'ΔE = |E_p - E_n| = hc/λ', quantity: 'Transition quantifiée d’atome', unit: 'eV ou J', instrument: 'Spectre d’émission / absorption' },
    ],
    experimentOrActivity: {
      title: 'Mesure de la longueur d’onde d’un laser par fentes d’Young',
      materials: ['Laser Hélium-Néon (λ = 632,8 nm)', 'Bifente a = 0,20 mm', 'Écran placé à D = 2,0 m'],
      observation:
        'On observe sur l’écran une alternance régulière de franges brillantes et sombres équidistantes. On mesure 10 interfranges = 6,33 cm.',
      conclusion:
        'De i = 6,33 mm, on déduit λ = (i · a) / D = (6,33×10⁻³ × 2×10⁻⁴) / 2,0 ≈ 633 nm.',
    },
    revisionChecklist: [
      'Je sais calculer l’interfrange i = λD/a et la différence de marche δ = ax/D en fentes d’Young.',
      'Je sais vérifier la condition d’effet photoélectrique (λ ≤ λ₀ ou ν ≥ ν₀) et calculer Ec_max = e·U₀.',
      'Je maîtrise les conversions eV ↔ J et le diagramme des niveaux d’énergie de l’atome d’hydrogène E_n = -13,6 / n² (eV).',
    ],
    keyFormulas: [
      'Young : δ = (a · x) / D  ;  Interfrange : i = (λ · D) / a  ;  Frange brillante : x = k i',
      'Diffraction lumière : θ = λ / a = L / (2D)  (L = largeur de la tache centrale)',
      'Effet photoélectrique : Ec_max = h ν - W₀ = h c (1/λ - 1/λ₀) = e · U₀',
      'Atome H : E_n = -13,6 / n² (eV)  ;  hc ≈ 1 240 eV·nm (vérification rapide !)',
    ],
    memoSheet: {
      title: 'Fiche Mémo Bac C : Interférences & Quanta de Lumière',
      slogan: 'i = λD/a  ·  hν = W₀ + Ec_max  ·  1 eV = 1,6×10⁻¹⁹ J',
      summaryBulletPoints: [
        'Pour mesurer i avec précision, on mesure L = N × i sur N = 10 interfranges (soit 11 franges brillantes consécutives !).',
        'En lumière blanche, la frange centrale x = 0 est blanche puis apparaissent des irisations.',
        'L’effet photoélectrique est instantané dès que ν ≥ ν₀ (c’est-à-dire λ ≤ λ₀) quelle que soit l’intensité lumineuse.',
        'Un atome n’absorbe que les photons dont l’énergie hν correspond exactement à E_sup - E_inf (sauf ionisation).',
      ],
      verticalFormulas: [
        {
          name: 'Calcul de l’interfrange Young',
          badge: '🌈',
          steps: [
            'λ = 600 nm = 6,0×10⁻⁷ m | D = 2,0 m | a = 0,40 mm = 4,0×10⁻⁴ m',
            'i = (λ × D) ÷ a',
            'i = (6,0×10⁻⁷ × 2,0) ÷ (4,0×10⁻⁴)',
            'i = 3,0×10⁻³ m = 3,0 mm',
          ],
          resultHighlight: 'i = 3,0 mm',
          explanation: 'Tout doit être converti en mètres : 1 nm = 10⁻⁹ m, 1 mm = 10⁻³ m.',
        },
        {
          name: 'Équation d’Einstein (Photoélectrique)',
          badge: '☀️',
          steps: [
            'W₀ = 2,1 eV | Photon λ = 400 nm',
            'E_photon = hc / λ ≈ 1 240 ÷ 400 = 3,1 eV',
            'Ec_max = E_photon - W₀ = 3,1 - 2,1 = 1,0 eV',
            'Potentiel d’arrêt : U₀ = Ec_max / e = 1,0 V',
          ],
          resultHighlight: 'Ec_max = 1,0 eV ; U₀ = 1,0 V',
          explanation: 'En unités eV, le potentiel d’arrêt en Volts a la même valeur numérique que Ec_max en eV.',
        },
      ],
      kokoTip: 'Pour vérifier rapidement ton calcul d’énergie d’un photon : E(eV) ≈ 1242 / λ(nm) ! Pose ensuite le calcul exact avec h, c et e sur ta copie.',
      pitfallToAvoid: 'Confondre le sens de l’inégalité sur les longueurs d’onde : il faut ν ≥ ν₀ mais λ ≤ λ₀ !',
    },
    sections: [
      {
        title: '1. Interférences lumineuses (Fentes d’Young) et diffraction',
        explanation: [
          'Un faisceau monochromatique de longueur d’onde λ éclaire deux fentes fines séparées de a. Sur un écran à la distance D ≫ a, les franges brillantes apparaissent aux abscisses x_k = k · (λD/a) et les franges sombres en (k + ½)i.',
        ],
        rules: [
          {
            name: 'Interfrange et largeur de tache de diffraction',
            description: 'En diffraction par une fente simple de largeur a, la tache centrale a pour largeur L = 2 λ D / a.',
            example: 'λ = 500 nm ; D = 1,5 m ; a = 0,25 mm | i = (5×10⁻⁷ × 1,5) ÷ 2,5×10⁻⁴ = 3,0 mm',
          },
        ],
      },
      {
        title: '2. Photons, effet photoélectrique et niveaux d’énergie atomiques',
        explanation: [
          'Einstein explique l’effet photoélectrique en quantifiant l’énergie lumineuse en photons d’énergie E = hν. L’excédent au-dessus du travail d’extraction W₀ devient l’énergie cinétique maximale Ec_max = hν - W₀.',
        ],
        rules: [
          {
            name: 'Spectre d’émission de l’atome d’hydrogène',
            description: 'Lorsque l’électron passe d’un niveau E_p vers un niveau plus bas E_n, il émet un photon d’énergie hν = E_p - E_n.',
            example: 'Transition n = 3 (-1,51 eV) ➔ n = 2 (-3,40 eV) | ΔE = 1,89 eV | λ ≈ 656 nm (raie rouge Hα)',
          },
        ],
      },
    ],
    exercises: [
      mkNum(
        'physTc-8-1',
        'physTc-interferences-lumiere',
        'Ex 1 : Interfrange des fentes d’Young',
        1,
        'On éclaire deux fentes distantes de a = 0,50 mm par une lumière rouge λ = 650 nm. L’écran est à D = 2,0 m.\nCalcule l’interfrange i en mm.',
        '2.6',
        'i = λ · D / a avec λ = 6,5×10⁻⁷ m et a = 5×10⁻⁴ m.',
        'L’interfrange vaut i = 2,6 mm.',
        [
          {
            title: 'Formule de Young',
            explanation: 'i = (λ × D) / a.',
            math: 'i = (6,5×10⁻⁷ × 2,0) ÷ (5,0×10⁻⁴) = 2,6×10⁻³ m = 2,6 mm',
            subResult: '2,6 mm',
          },
        ],
        'mm'
      ),
      mkNum(
        'physTc-8-2',
        'physTc-interferences-lumiere',
        'Ex 2 : Longueur d’onde seuil d’un métal',
        2,
        'Le travail d’extraction du césium est W₀ = 1,9 eV (h = 6,63×10⁻³⁴ J·s, c = 3,0×10⁸ m/s, 1 eV = 1,6×10⁻¹⁹ J).\nCalcule sa longueur d’onde seuil λ₀ en nm (à l’entier près).',
        '654',
        'λ₀ = h c / W₀ avec W₀ = 1,9 × 1,6×10⁻¹⁹ J.',
        'λ₀ ≈ 654 nm.',
        [
          {
            title: 'Conversion de W₀ en Joules',
            explanation: '1 eV = 1,6×10⁻¹⁹ J.',
            math: 'W₀ = 1,9 × 1,6×10⁻¹⁹ = 3,04×10⁻¹⁹ J',
            subResult: '3,04×10⁻¹⁹ J',
          },
          {
            title: 'Calcul de λ₀',
            explanation: 'λ₀ = h c / W₀.',
            math: 'λ₀ = (6,63×10⁻³⁴ × 3,0×10⁸) ÷ 3,04×10⁻¹⁹ ≈ 6,54×10⁻⁷ m = 654 nm',
            subResult: '654 nm',
          },
        ],
        'nm'
      ),
      mkQcm(
        'physTc-8-3',
        'physTc-interferences-lumiere',
        'Ex 3 : Condition de l’effet photoélectrique',
        1,
        'Le seuil photoélectrique d’une plaque de zinc est λ₀ = 290 nm. On l’éclaire avec une lumière verte λ = 532 nm très intense.\nObserve-t-on une émission d’électrons ?',
        [
          'Non, car λ > λ₀ donc l’énergie du photon est insuffisante',
          'Oui, car la lumière verte est très intense',
          'Oui, si l’on attend quelques minutes',
          'Oui, à condition de refroidir la plaque',
        ],
        'Non, car λ > λ₀ donc l’énergie du photon est insuffisante',
        'L’effet photoélectrique n’a lieu que si λ ≤ λ₀.',
        'Pour λ = 532 nm > λ₀, hν < W₀ : aucun électron ne peut être arraché quelle que soit l’intensité.',
        [
          {
            title: 'Comparaison au seuil',
            explanation: 'Il faut λ ≤ λ₀ (soit ν ≥ ν₀).',
            math: '532 nm > 290 nm ➔ E_photon < W₀ ➔ Aucune émission',
            subResult: 'Pas d’émission',
          },
        ]
      ),
      mkNum(
        'physTc-8-4',
        'physTc-interferences-lumiere',
        'Ex 4 : Transition atomique de l’hydrogène',
        3,
        'L’atome d’hydrogène passe du niveau n = 2 (E₂ = -3,40 eV) au niveau fondamental n = 1 (E₁ = -13,60 eV).\nCalcule l’énergie ΔE (en eV) du photon émis.',
        '10.2',
        'ΔE = E₂ - E₁.',
        'Le photon émis emporte ΔE = 10,2 eV (domaine UV).',
        [
          {
            title: 'Différence d’énergie',
            explanation: 'ΔE = E_sup - E_inf.',
            math: 'ΔE = -3,40 - (-13,60) = 10,20 eV',
            subResult: '10,2 eV',
          },
        ],
        'eV'
      ),
    ],
  },
];
