import { PhysicsLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const PHYSICS_TC_LABO_PART1: Record<string, PhysicsLaboExpSpec[]> = {
  // 1. CINÉMATIQUE DU POINT & FRENET (10)
  'physTc-cinematique': [
    {
      id: 'pc-cin-1',
      shortTitle: 'Repère de Frenet',
      title: 'Exp. 1 : Vecteurs de Frenet a_T & a_N en virage',
      goal: 'Décomposer l’accélération a⃗ sur la base locale (u⃗_T, u⃗_N) selon v, R et a_T.',
      formula: 'a⃗ = (dv/dt) u⃗_T + (v²/R) u⃗_N  |  a = √(a_T² + a_N²)',
      visualKind: 'frenet',
      sliders: [
        { label: 'Vitesse v', min: 5, max: 40, step: 1, defaultValue: 20, unit: 'm/s' },
        { label: 'Rayon R', min: 25, max: 250, step: 5, defaultValue: 100, unit: 'm' },
        { label: 'Accélération a_T', min: 0, max: 8, step: 0.5, defaultValue: 3, unit: 'm/s²' },
      ],
      presets: [
        { label: 'Virage uniforme (a_T=0)', values: [20, 80, 0] },
        { label: 'Accélération forte', values: [30, 100, 6] },
      ],
      evaluate: ([v, R, aT]) => {
        const aN = (v * v) / R;
        const aTot = Math.hypot(aT, aN);
        return {
          headline: `a_N = ${f(aN)} m/s² · a = ${f(aTot)} m/s²`,
          metrics: [
            { label: 'a_N centripète', value: `${f(aN)} m/s²`, accent: 'rose' },
            { label: 'a_T tangentielle', value: `${f(aT)} m/s²`, accent: 'emerald' },
            { label: 'Norme totale a', value: `${f(aTot)} m/s²`, accent: 'amber' },
          ],
          conclusion: `Plus le virage est serré ou la vitesse élevée, plus a_N = v²/R augmente.`,
          svg: { aT, aN, aTot },
        };
      },
    },
    {
      id: 'pc-cin-2',
      shortTitle: 'Distance d’arrêt MRUV',
      title: 'Exp. 2 : Freinage d’urgence et relation v² - v₀² = 2aΔx',
      goal: 'Mesurer la distance de freinage sans connaître la durée.',
      formula: 'v_f² - v₀² = 2 a d  ⟹  d = v₀² / (2 |a|)',
      visualKind: 'braking',
      sliders: [
        { label: 'Vitesse initiale v₀', min: 5, max: 40, step: 1, defaultValue: 24, unit: 'm/s' },
        { label: 'Décélération |a|', min: 1, max: 10, step: 0.5, defaultValue: 4, unit: 'm/s²' },
      ],
      evaluate: ([v0, dec]) => {
        const d = (v0 * v0) / (2 * dec);
        const t = v0 / dec;
        return {
          headline: `Distance d’arrêt d = ${f(d, 1)} m · Durée t = ${f(t)} s`,
          metrics: [
            { label: 'Distance d’arrêt', value: `${f(d, 1)} m`, accent: 'rose' },
            { label: 'Durée freinage', value: `${f(t)} s`, accent: 'sky' },
            { label: 'En km/h', value: `${f(v0 * 3.6, 0)} km/h`, accent: 'amber' },
          ],
          conclusion: `Doubler la vitesse quadruple la distance d’arrêt d = v₀²/(2|a|).`,
          svg: { ratio: Math.min(1, d / 200), d, t },
        };
      },
    },
    {
      id: 'pc-cin-3',
      shortTitle: 'Trajectoire y(x)',
      title: 'Exp. 3 : Élimination du temps sur équations horaires',
      goal: 'Passer des lois x(t), y(t) à l’équation cartésienne y(x).',
      formula: 'x(t) = v_x t  et  y(t) = -½ g t² + v_{0y} t',
      visualKind: 'trajectory',
      sliders: [
        { label: 'Vitesse v_x', min: 4, max: 20, step: 1, defaultValue: 10, unit: 'm/s' },
        { label: 'Vitesse v_{0y}', min: 6, max: 24, step: 1, defaultValue: 14, unit: 'm/s' },
        { label: 'Instant t', min: 0.2, max: 3, step: 0.2, defaultValue: 1.2, unit: 's' },
      ],
      evaluate: ([vx, vy0, t]) => {
        const x = vx * t;
        const y = Math.max(0, -5 * t * t + vy0 * t);
        const xMax = vx * (vy0 / 5);
        const ySommet = (vy0 * vy0) / 20;
        return {
          headline: `M(${f(t, 1)} s) : x = ${f(x, 1)} m ; y = ${f(y, 1)} m`,
          metrics: [
            { label: 'Abscisse x', value: `${f(x, 1)} m`, accent: 'sky' },
            { label: 'Ordonnée y', value: `${f(y, 1)} m`, accent: 'emerald' },
            { label: 'Sommet y_max', value: `${f(ySommet, 1)} m`, accent: 'amber' },
          ],
          conclusion: `En substituant t = x/${f(vx, 0)} dans y(t), on obtient la parabole de portée ${f(xMax, 1)} m.`,
          svg: { px: Math.min(1, x / Math.max(1, xMax)), py: Math.min(1, y / Math.max(1, ySommet)) },
        };
      },
    },
    {
      id: 'pc-cin-4',
      shortTitle: 'Diagramme x(t) MRUV',
      title: 'Exp. 4 : Courbe des espaces x(t) = ½ a t² + v₀ t',
      goal: 'Observer la courbure parabolique de x(t) selon le signe de a.',
      formula: 'x(t) = ½ a t² + v₀ t + x₀',
      visualKind: 'mru-mruv',
      sliders: [
        { label: 'Vitesse initiale v₀', min: 0, max: 15, step: 1, defaultValue: 4, unit: 'm/s' },
        { label: 'Accélération a', min: -3, max: 6, step: 0.5, defaultValue: 2, unit: 'm/s²' },
        { label: 'Durée Δt', min: 2, max: 10, step: 1, defaultValue: 6, unit: 's' },
      ],
      evaluate: ([v0, a, t]) => {
        const dx = 0.5 * a * t * t + v0 * t;
        const vf = v0 + a * t;
        return {
          headline: `Δx(${t} s) = ${f(dx, 1)} m · v(${t} s) = ${f(vf, 1)} m/s`,
          metrics: [
            { label: 'Déplacement Δx', value: `${f(dx, 1)} m`, accent: 'emerald' },
            { label: 'Vitesse finale v', value: `${f(vf, 1)} m/s`, accent: 'sky' },
            { label: 'Régime', value: a === 0 ? 'MRU' : a > 0 ? 'Accéléré' : 'Décéléré', accent: 'amber' },
          ],
          conclusion: `Si a = 0, x(t) est linéaire (MRU) ; si a ≠ 0, la pente de la tangente vaut v(t).`,
          svg: { curveSlope: a, v0, t },
        };
      },
    },
    {
      id: 'pc-cin-5',
      shortTitle: 'Aire sous v(t)',
      title: 'Exp. 5 : Diagramme des vitesses v(t) et aire Δx',
      goal: 'Relier l’aire du trapèze sous v(t) à la distance parcourue.',
      formula: 'Δx = ∫₀^t v(u) du = ½ (v₀ + v_f) · t',
      visualKind: 'vel-area',
      sliders: [
        { label: 'Vitesse v₀', min: 2, max: 20, step: 2, defaultValue: 6, unit: 'm/s' },
        { label: 'Accélération a', min: 1, max: 6, step: 0.5, defaultValue: 3, unit: 'm/s²' },
        { label: 'Durée t', min: 2, max: 10, step: 1, defaultValue: 5, unit: 's' },
      ],
      evaluate: ([v0, a, t]) => {
        const vf = v0 + a * t;
        const area = 0.5 * (v0 + vf) * t;
        return {
          headline: `Aire trapèze = Δx = ${f(area, 1)} m`,
          metrics: [
            { label: 'Vitesse v₀', value: `${f(v0, 0)} m/s`, accent: 'sky' },
            { label: 'Vitesse v(t)', value: `${f(vf, 1)} m/s`, accent: 'amber' },
            { label: 'Distance (Aire)', value: `${f(area, 1)} m`, accent: 'emerald' },
          ],
          conclusion: `La pente de v(t) vaut a = ${f(a, 1)} m/s² et l’aire vaut Δx = ${f(area, 1)} m.`,
          svg: { v0, vf, t },
        };
      },
    },
    {
      id: 'pc-cin-6',
      shortTitle: 'Chute libre & chrono',
      title: 'Exp. 6 : Chute libre verticale sans frottement',
      goal: 'Suivre h(t) = ½ g t² en chronophotographie.',
      formula: 'z(t) = ½ g t²  |  v(t) = √(2 g h)',
      visualKind: 'freefall',
      sliders: [
        { label: 'Hauteur H', min: 5, max: 80, step: 5, defaultValue: 45, unit: 'm' },
        { label: 'Pesanteur g', min: 1.6, max: 15, step: 0.2, defaultValue: 9.8, unit: 'm/s²' },
      ],
      evaluate: ([H, g]) => {
        const tFall = Math.sqrt((2 * H) / g);
        const vImpact = Math.sqrt(2 * g * H);
        return {
          headline: `Chute t = ${f(tFall)} s · Impact v = ${f(vImpact)} m/s`,
          metrics: [
            { label: 'Durée chute', value: `${f(tFall)} s`, accent: 'sky' },
            { label: 'Vitesse sol', value: `${f(vImpact)} m/s`, accent: 'rose' },
            { label: 'Distance à t/2', value: `${f(H / 4)} m`, accent: 'emerald' },
          ],
          conclusion: `Les positions à intervalles égaux s’espacent comme les entiers impairs 1, 3, 5, 7...`,
          svg: { H, g, tFall },
        };
      },
    },
    {
      id: 'pc-cin-7',
      shortTitle: 'Mouvement circulaire',
      title: 'Exp. 7 : Cinématique circulaire uniforme (ω, T, a_N)',
      goal: 'Relier vitesse angulaire ω, période T et accélération centripète.',
      formula: 'v = R ω  |  ω = 2π / T  |  a_N = R ω²',
      visualKind: 'circular',
      sliders: [
        { label: 'Rayon R', min: 0.5, max: 5, step: 0.5, defaultValue: 2, unit: 'm' },
        { label: 'Vitesse angulaire ω', min: 1, max: 12, step: 0.5, defaultValue: 4, unit: 'rad/s' },
      ],
      evaluate: ([R, w]) => {
        const v = R * w;
        const aN = R * w * w;
        const T = (2 * Math.PI) / w;
        return {
          headline: `v = ${f(v)} m/s · T = ${f(T)} s · a_N = ${f(aN)} m/s²`,
          metrics: [
            { label: 'Vitesse v', value: `${f(v)} m/s`, accent: 'sky' },
            { label: 'Période T', value: `${f(T)} s`, accent: 'amber' },
            { label: 'Accél. a_N', value: `${f(aN)} m/s²`, accent: 'rose' },
          ],
          conclusion: `En MCU, ||v⃗|| est constante : a_T = 0 et a⃗ = a_N u⃗_N.`,
          svg: { rNorm: R / 5, speed: w },
        };
      },
    },
    {
      id: 'pc-cin-8',
      shortTitle: 'Accélération angulaire',
      title: 'Exp. 8 : Mouvement circulaire uniformément varié',
      goal: 'Calculer le nombre de tours au démarrage d’un rotor.',
      formula: 'θ(t) = ½ θ̈ t² + ω₀ t  |  a_T = R θ̈',
      visualKind: 'circular',
      sliders: [
        { label: 'Accél. angulaire θ̈', min: 0.5, max: 6, step: 0.5, defaultValue: 2, unit: 'rad/s²' },
        { label: 'Durée t', min: 1, max: 10, step: 1, defaultValue: 5, unit: 's' },
      ],
      evaluate: ([alpha, t]) => {
        const theta = 0.5 * alpha * t * t;
        const tours = theta / (2 * Math.PI);
        const w = alpha * t;
        return {
          headline: `θ = ${f(theta, 1)} rad (${f(tours)} tours) · ω = ${f(w, 1)} rad/s`,
          metrics: [
            { label: 'Angle θ', value: `${f(theta, 1)} rad`, accent: 'sky' },
            { label: 'Tours', value: `${f(tours)} tr`, accent: 'emerald' },
            { label: 'Vitesse ω', value: `${f(w, 1)} rad/s`, accent: 'amber' },
          ],
          conclusion: `L’angle balayé θ(t) croît quadratiquement en ½ θ̈ t².`,
          svg: { rNorm: Math.min(1, tours / 10), speed: w },
        };
      },
    },
    {
      id: 'pc-cin-9',
      shortTitle: 'Rencontre deux mobiles',
      title: 'Exp. 9 : Rattrapage MRU vs MRUV (Libreville–Owendo)',
      goal: 'Déterminer t_r et x_r de rencontre de deux mobiles.',
      formula: 'x₁(t) = v₁ t  et  x₂(t) = ½ a₂ t²  ⟹  t_r = 2 v₁ / a₂',
      visualKind: 'mru-mruv',
      sliders: [
        { label: 'Vitesse v₁ (MRU)', min: 10, max: 35, step: 1, defaultValue: 20, unit: 'm/s' },
        { label: 'Accélération a₂ (MRUV)', min: 1, max: 8, step: 0.5, defaultValue: 4, unit: 'm/s²' },
      ],
      evaluate: ([v1, a2]) => {
        const tr = (2 * v1) / a2;
        const xr = v1 * tr;
        return {
          headline: `Rattrapage à t_r = ${f(tr)} s · x_r = ${f(xr, 0)} m`,
          metrics: [
            { label: 'Instant t_r', value: `${f(tr)} s`, accent: 'amber' },
            { label: 'Distance x_r', value: `${f(xr, 0)} m`, accent: 'emerald' },
            { label: 'Vitesse v₂(t_r)', value: `${f(a2 * tr)} m/s`, accent: 'rose' },
          ],
          conclusion: `Au rattrapage, la vitesse du mobile MRUV vaut le double de celle du mobile MRU.`,
          svg: { curveSlope: a2, v0: v1, t: Math.min(10, tr) },
        };
      },
    },
    {
      id: 'pc-cin-10',
      shortTitle: 'Synthèse boucle v_min',
      title: 'Exp. 10 : Synthèse BAC C — Vitesse critique en looping',
      goal: 'Vérifier la condition de non-décollement v ≥ √(g R).',
      formula: 'a_N = v²/R ≥ g  ⟹  v_min = √(g R)',
      visualKind: 'frenet',
      sliders: [
        { label: 'Rayon R', min: 5, max: 40, step: 1, defaultValue: 10, unit: 'm' },
        { label: 'Vitesse v', min: 4, max: 30, step: 1, defaultValue: 12, unit: 'm/s' },
      ],
      evaluate: ([R, v]) => {
        const vmin = Math.sqrt(10 * R);
        const aN = (v * v) / R;
        const safe = v >= vmin;
        return {
          headline: `v_min = ${f(vmin)} m/s · ${safe ? 'ADHÉRENCE OK' : 'DÉCOLLEMENT !'}`,
          metrics: [
            { label: 'v_min critique', value: `${f(vmin)} m/s`, accent: 'amber' },
            { label: 'a_N actuelle', value: `${f(aN)} m/s²`, accent: safe ? 'emerald' : 'rose' },
            { label: 'Réaction R_N/m', value: `${f(Math.max(0, aN - 10))} N/kg`, accent: 'sky' },
          ],
          conclusion: safe ? `Comme v ≥ √(gR), le mobile reste plaqué sur le rail.` : `v < √(gR) : le mobile décroche !`,
          svg: { aT: 0, aN, aTot: aN },
        };
      },
    },
  ],

  // 2. DYNAMIQUE & LORENTZ (10)
  'physTc-dynamique': [
    {
      id: 'pc-dyn-1',
      shortTitle: 'Plan incliné lisse',
      title: 'Exp. 1 : Glissement sans frottement sur plan incliné',
      goal: 'Projeter P⃗ + R⃗ = ma⃗ pour obtenir a = g sin α.',
      formula: 'a = g sin α  |  R_N = m g cos α',
      visualKind: 'incline',
      sliders: [
        { label: 'Angle α', min: 10, max: 60, step: 5, defaultValue: 30, unit: '°' },
        { label: 'Masse m', min: 1, max: 10, step: 1, defaultValue: 2, unit: 'kg' },
      ],
      evaluate: ([alpha, m]) => {
        const rad = (alpha * Math.PI) / 180;
        const a = 10 * Math.sin(rad);
        const Rn = m * 10 * Math.cos(rad);
        return {
          headline: `a = ${f(a)} m/s² · R_N = ${f(Rn, 1)} N`,
          metrics: [
            { label: 'Accélération a', value: `${f(a)} m/s²`, accent: 'emerald' },
            { label: 'Réaction R_N', value: `${f(Rn, 1)} N`, accent: 'sky' },
            { label: 'Poids P', value: `${m * 10} N`, accent: 'amber' },
          ],
          conclusion: `Sans frottement, a = g sin α est indépendante de la masse m.`,
          svg: { alpha, f: 0 },
        };
      },
    },
    {
      id: 'pc-dyn-2',
      shortTitle: 'Plan incliné + frott.',
      title: 'Exp. 2 : Plan incliné avec frottements f',
      goal: 'Quantifier la baisse d’accélération due aux frottements.',
      formula: 'a = g sin α - f / m',
      visualKind: 'incline',
      sliders: [
        { label: 'Angle α', min: 15, max: 60, step: 5, defaultValue: 30, unit: '°' },
        { label: 'Masse m', min: 2, max: 10, step: 1, defaultValue: 4, unit: 'kg' },
        { label: 'Frottement f', min: 0, max: 20, step: 1, defaultValue: 6, unit: 'N' },
      ],
      evaluate: ([alpha, m, fFrot]) => {
        const px = m * 10 * Math.sin((alpha * Math.PI) / 180);
        const a = Math.max(0, (px - fFrot) / m);
        return {
          headline: a > 0 ? `Descente a = ${f(a)} m/s²` : `Solide bloqué`,
          metrics: [
            { label: 'mg sin α', value: `${f(px, 1)} N`, accent: 'sky' },
            { label: 'Frottement f', value: `${f(fFrot, 1)} N`, accent: 'rose' },
            { label: 'Accélération a', value: `${f(a)} m/s²`, accent: 'emerald' },
          ],
          conclusion: `Le glissement ne démarre que si mg sin α > f.`,
          svg: { alpha, f: fFrot },
        };
      },
    },
    {
      id: 'pc-dyn-3',
      shortTitle: 'Tir parabolique (D, h)',
      title: 'Exp. 3 : Balistique — Portée D et flèche h_max',
      goal: 'Étudier l’influence de α et v₀ sur la portée.',
      formula: 'D = (v₀² sin 2α)/g  |  h_max = (v₀ sin α)² / (2g)',
      visualKind: 'trajectory',
      sliders: [
        { label: 'Vitesse v₀', min: 10, max: 40, step: 2, defaultValue: 20, unit: 'm/s' },
        { label: 'Angle α', min: 15, max: 75, step: 5, defaultValue: 45, unit: '°' },
      ],
      evaluate: ([v0, alpha]) => {
        const rad = (alpha * Math.PI) / 180;
        const D = (v0 * v0 * Math.sin(2 * rad)) / 10;
        const hMax = Math.pow(v0 * Math.sin(rad), 2) / 20;
        return {
          headline: `Portée D = ${f(D, 1)} m · Flèche h_max = ${f(hMax, 1)} m`,
          metrics: [
            { label: 'Portée D', value: `${f(D, 1)} m`, accent: 'emerald' },
            { label: 'Flèche h_max', value: `${f(hMax, 1)} m`, accent: 'amber' },
            { label: 'Temps vol', value: `${f((2 * v0 * Math.sin(rad)) / 10)} s`, accent: 'sky' },
          ],
          conclusion: `La portée D est maximale pour α = 45°.`,
          svg: { px: 0.5, py: Math.min(1, hMax / 60) },
        };
      },
    },
    {
      id: 'pc-dyn-4',
      shortTitle: 'Force de Lorentz qv⃗∧B⃗',
      title: 'Exp. 4 : Déviation magnétique R = mv / (|q|B)',
      goal: 'Étudier le rayon cyclotron dans B⃗ uniforme.',
      formula: 'R = m v / (|q| B)',
      visualKind: 'lorentz',
      sliders: [
        { label: 'Vitesse v', min: 2, max: 20, step: 1, defaultValue: 10, unit: '×10⁵ m/s' },
        { label: 'Champ B', min: 0.2, max: 2.0, step: 0.1, defaultValue: 0.8, unit: 'T' },
      ],
      evaluate: ([v, B]) => {
        const Rcm = (2.5 * v) / B;
        return {
          headline: `Rayon R = ${f(Rcm, 1)} cm`,
          metrics: [
            { label: 'Rayon R', value: `${f(Rcm, 1)} cm`, accent: 'amber' },
            { label: 'Travail de F⃗', value: '0 J', accent: 'emerald' },
            { label: 'Vitesse', value: 'Constante', accent: 'sky' },
          ],
          conclusion: `F⃗ = q v⃗ ∧ B⃗ est orthogonale à v⃗ : son travail est nul.`,
          svg: { rNorm: Math.min(1, Rcm / 70) },
        };
      },
    },
    {
      id: 'pc-dyn-5',
      shortTitle: 'Condensateur plan E⃗',
      title: 'Exp. 5 : Déflexion électrostatique dans E⃗ uniforme',
      goal: 'Calculer la déviation verticale Y_s en sortie.',
      formula: 'y(x) = (q U / (2 m d v₀²)) x²',
      visualKind: 'trajectory',
      sliders: [
        { label: 'Tension U', min: 100, max: 1000, step: 50, defaultValue: 400, unit: 'V' },
        { label: 'Vitesse v₀', min: 10, max: 40, step: 5, defaultValue: 20, unit: '×10⁶ m/s' },
      ],
      evaluate: ([U, v0]) => {
        const ys = (U / (v0 * v0)) * 2.5;
        return {
          headline: `Déflexion Y_s ≈ ${f(ys)} cm`,
          metrics: [
            { label: 'Tension U', value: `${U} V`, accent: 'amber' },
            { label: 'Déflexion Y_s', value: `${f(ys)} cm`, accent: 'rose' },
            { label: 'Trajectoire', value: 'Parabolique', accent: 'sky' },
          ],
          conclusion: `La déviation est proportionnelle à U et en 1/v₀².`,
          svg: { px: 0.9, py: Math.min(1, ys / 15) },
        };
      },
    },
    {
      id: 'pc-dyn-6',
      shortTitle: 'Machine d’Atwood',
      title: 'Exp. 6 : Poulie idéale et deux masses (m₁, m₂)',
      goal: 'Calculer l’accélération a et la tension T.',
      formula: 'a = g |m₁ - m₂| / (m₁ + m₂)  |  T = 2 m₁ m₂ g / (m₁ + m₂)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse m₁', min: 2, max: 12, step: 1, defaultValue: 6, unit: 'kg' },
        { label: 'Masse m₂', min: 1, max: 10, step: 1, defaultValue: 4, unit: 'kg' },
      ],
      evaluate: ([m1, m2]) => {
        const a = (10 * Math.abs(m1 - m2)) / (m1 + m2);
        const T = (2 * m1 * m2 * 10) / (m1 + m2);
        return {
          headline: `a = ${f(a)} m/s² · T = ${f(T, 1)} N`,
          metrics: [
            { label: 'Accélération a', value: `${f(a)} m/s²`, accent: 'emerald' },
            { label: 'Tension T', value: `${f(T, 1)} N`, accent: 'amber' },
            { label: 'Écart masses', value: `${Math.abs(m1 - m2)} kg`, accent: 'sky' },
          ],
          conclusion: `Plus l’écart entre m₁ et m₂ augmente, plus a tend vers g.`,
          svg: { bar1: Math.min(100, a * 10), bar2: Math.min(100, T), label1: 'a (×10)', label2: 'T (N)' },
        };
      },
    },
    {
      id: 'pc-dyn-7',
      shortTitle: 'Poids apparent ascenseur',
      title: 'Exp. 7 : Réaction du plancher en ascenseur accéléré',
      goal: 'Comparer poids réel mg et poids apparent R = m(g + a).',
      formula: 'R = m (g + a)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse m', min: 40, max: 100, step: 5, defaultValue: 70, unit: 'kg' },
        { label: 'Accélération a', min: -4, max: 4, step: 0.5, defaultValue: 2, unit: 'm/s²' },
      ],
      evaluate: ([m, a]) => {
        const R = m * (10 + a);
        const P = m * 10;
        return {
          headline: `Poids réel ${P} N · Poids apparent R = ${f(R, 0)} N`,
          metrics: [
            { label: 'Poids mg', value: `${P} N`, accent: 'sky' },
            { label: 'Réaction R', value: `${f(R, 0)} N`, accent: a >= 0 ? 'rose' : 'emerald' },
            { label: 'Écart', value: `${a >= 0 ? '+' : ''}${f(a * 10, 0)} %`, accent: 'amber' },
          ],
          conclusion: `En montée accélérée, R > P ; en chute libre (a = -g), R = 0.`,
          svg: { bar1: (P / 1400) * 100, bar2: Math.min(100, (R / 1400) * 100), label1: 'Poids réel', label2: 'R apparente' },
        };
      },
    },
    {
      id: 'pc-dyn-8',
      shortTitle: 'Spectromètre de masse',
      title: 'Exp. 8 : Séparation d’isotopes dans B⃗',
      goal: 'Mesurer l’écart ΔD entre deux isotopes.',
      formula: 'D = (2/B) √(2 m U / q)',
      visualKind: 'lorentz',
      sliders: [
        { label: 'Rapport m₂/m₁', min: 1.0, max: 1.5, step: 0.05, defaultValue: 1.2, unit: '' },
        { label: 'Champ B', min: 0.4, max: 1.6, step: 0.2, defaultValue: 0.8, unit: 'T' },
      ],
      evaluate: ([ratio, B]) => {
        const D1 = 24 / B;
        const D2 = D1 * Math.sqrt(ratio);
        const delta = D2 - D1;
        return {
          headline: `Écart ΔD = ${f(delta)} cm`,
          metrics: [
            { label: 'Diamètre D₁', value: `${f(D1, 1)} cm`, accent: 'sky' },
            { label: 'Diamètre D₂', value: `${f(D2, 1)} cm`, accent: 'amber' },
            { label: 'Séparation ΔD', value: `${f(delta)} cm`, accent: 'emerald' },
          ],
          conclusion: `L’isotope le plus lourd décrit le plus grand demi-cercle (D ∝ √m).`,
          svg: { rNorm: Math.min(1, D2 / 90) },
        };
      },
    },
    {
      id: 'pc-dyn-9',
      shortTitle: 'Théorème énergie cinétique',
      title: 'Exp. 9 : Bilan ΔE_c = ∑ W(F⃗_ext) sur pente',
      goal: 'Calculer v_B = √(2gh) par bilan d’énergie.',
      formula: '½ m v_B² = m g L sin α',
      visualKind: 'incline',
      sliders: [
        { label: 'Trajet L', min: 2, max: 20, step: 1, defaultValue: 10, unit: 'm' },
        { label: 'Angle α', min: 15, max: 45, step: 5, defaultValue: 30, unit: '°' },
      ],
      evaluate: ([L, alpha]) => {
        const h = L * Math.sin((alpha * Math.PI) / 180);
        const vB = Math.sqrt(20 * h);
        return {
          headline: `h = ${f(h)} m ➔ v_B = ${f(vB)} m/s`,
          metrics: [
            { label: 'Hauteur h', value: `${f(h)} m`, accent: 'sky' },
            { label: 'Vitesse v_B', value: `${f(vB)} m/s`, accent: 'emerald' },
            { label: 'E_c / m', value: `${f(0.5 * vB * vB, 1)} J/kg`, accent: 'amber' },
          ],
          conclusion: `Sans frottement, v_B ne dépend que du dénivelé h.`,
          svg: { alpha, f: 0 },
        };
      },
    },
    {
      id: 'pc-dyn-10',
      shortTitle: 'Pendule conique',
      title: 'Exp. 10 : Synthèse BAC C — Pendule conique en rotation',
      goal: 'Déterminer ω_min et l’inclinaison θ.',
      formula: 'cos θ = g / (ℓ ω²)',
      visualKind: 'circular',
      sliders: [
        { label: 'Longueur ℓ', min: 0.4, max: 2.0, step: 0.2, defaultValue: 1.0, unit: 'm' },
        { label: 'Vitesse ω', min: 2, max: 8, step: 0.5, defaultValue: 4.5, unit: 'rad/s' },
      ],
      evaluate: ([ell, w]) => {
        const wMin = Math.sqrt(10 / ell);
        const cosT = Math.min(1, 10 / (ell * w * w));
        const theta = (Math.acos(cosT) * 180) / Math.PI;
        return {
          headline: w > wMin ? `Angle θ = ${f(theta, 1)}°` : `Vertical (ω ≤ ${f(wMin)})`,
          metrics: [
            { label: 'Seuil ω_min', value: `${f(wMin)} rad/s`, accent: 'sky' },
            { label: 'Angle θ', value: `${f(theta, 1)}°`, accent: 'amber' },
            { label: 'Rayon r', value: `${f(ell * Math.sin((theta * Math.PI) / 180))} m`, accent: 'emerald' },
          ],
          conclusion: `Le pendule ne décolle qu’au-delà de ω_min = √(g/ℓ).`,
          svg: { rNorm: Math.max(0.15, Math.sin((theta * Math.PI) / 180)), speed: w },
        };
      },
    },
  ],

  // 3. GRAVITATION & KEPLER (10)
  'physTc-gravitation': [
    {
      id: 'pc-grav-1',
      shortTitle: 'Champ g(h)',
      title: 'Exp. 1 : Décroissance de g(h) avec l’altitude h',
      goal: 'Comparer g(h) à g₀ = 9,81 m/s².',
      formula: 'g(h) = g₀ [ R_T / (R_T + h) ]²',
      visualKind: 'orbit',
      sliders: [{ label: 'Altitude h', min: 0, max: 36000, step: 400, defaultValue: 400, unit: 'km' }],
      evaluate: ([h]) => {
        const Rt = 6370;
        const gH = 9.81 * Math.pow(Rt / (Rt + h), 2);
        return {
          headline: `g(${h} km) = ${f(gH)} m/s²`,
          metrics: [
            { label: 'Rayon r', value: `${Rt + h} km`, accent: 'sky' },
            { label: 'g(h)', value: `${f(gH)} m/s²`, accent: 'emerald' },
            { label: 'Ratio g/g₀', value: `${f((gH / 9.81) * 100, 1)} %`, accent: 'amber' },
          ],
          conclusion: `À 400 km, g vaut encore 89 % de g₀.`,
          svg: { hNorm: Math.min(1, h / 36000) },
        };
      },
    },
    {
      id: 'pc-grav-2',
      shortTitle: 'Vitesse orbitale v(r)',
      title: 'Exp. 2 : Vitesse orbitale circulaire v = √(GM/r)',
      goal: 'Observer la baisse de v quand r augmente.',
      formula: 'v = √(G M_T / (R_T + h))',
      visualKind: 'orbit',
      sliders: [{ label: 'Altitude h', min: 200, max: 36000, step: 400, defaultValue: 800, unit: 'km' }],
      evaluate: ([h]) => {
        const r = 6370 + h;
        const v = Math.sqrt(3.986e5 / r);
        return {
          headline: `v_orb = ${f(v)} km/s`,
          metrics: [
            { label: 'Vitesse', value: `${f(v)} km/s`, accent: 'emerald' },
            { label: 'Rayon r', value: `${r} km`, accent: 'sky' },
            { label: 'km/h', value: `${f(v * 3600, 0)} km/h`, accent: 'amber' },
          ],
          conclusion: `Plus l’orbite est haute, plus le satellite est lent (v ∝ 1/√r).`,
          svg: { hNorm: Math.min(1, h / 36000) },
        };
      },
    },
    {
      id: 'pc-grav-3',
      shortTitle: '3ème loi de Kepler',
      title: 'Exp. 3 : Période T et constante T²/r³',
      goal: 'Repérer l’orbite géostationnaire où T ≈ 24 h.',
      formula: 'T = 2π √(r³ / (G M_T))  |  T²/r³ = cte',
      visualKind: 'orbit',
      sliders: [{ label: 'Altitude h', min: 400, max: 36000, step: 400, defaultValue: 35800, unit: 'km' }],
      evaluate: ([h]) => {
        const r = (6370 + h) * 1000;
        const Th = (2 * Math.PI * Math.sqrt(Math.pow(r, 3) / 3.986e14)) / 3600;
        return {
          headline: `Période T = ${f(Th, 2)} h`,
          metrics: [
            { label: 'Période T', value: `${f(Th, 2)} h`, accent: 'amber' },
            { label: 'Géostationnaire', value: Math.abs(Th - 23.93) < 0.5 ? 'OUI (~24h)' : 'Non', accent: 'emerald' },
            { label: 'T²/r³', value: '9,9×10⁻¹⁴ SI', accent: 'sky' },
          ],
          conclusion: `À h ≈ 35 800 km à l’équateur (Gabon), le satellite reste fixe dans le ciel.`,
          svg: { hNorm: Math.min(1, h / 36000) },
        };
      },
    },
    {
      id: 'pc-grav-4',
      shortTitle: 'Vitesse de libération',
      title: 'Exp. 4 : Deuxième vitesse cosmique v_lib = √2 v₁',
      goal: 'Comparer vitesse orbitale v₁ et d’évasion v_lib.',
      formula: 'v_lib = √(2 G M / R) = √2 · v₁',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse (en M_T)', min: 0.2, max: 3.0, step: 0.2, defaultValue: 1.0, unit: 'M_T' },
        { label: 'Rayon (en R_T)', min: 0.5, max: 2.0, step: 0.1, defaultValue: 1.0, unit: 'R_T' },
      ],
      evaluate: ([mRel, rRel]) => {
        const v1 = 7.91 * Math.sqrt(mRel / rRel);
        const v2 = Math.SQRT2 * v1;
        return {
          headline: `v₁ = ${f(v1)} km/s · v_lib = ${f(v2)} km/s`,
          metrics: [
            { label: '1ère vit.', value: `${f(v1)} km/s`, accent: 'sky' },
            { label: 'Libération v₂', value: `${f(v2)} km/s`, accent: 'rose' },
            { label: 'Ratio', value: '√2 ≈ 1,414', accent: 'amber' },
          ],
          conclusion: `Pour la Terre, v_lib = 11,2 km/s indépendamment de la masse de la fusée.`,
          svg: { bar1: Math.min(100, v1 * 5), bar2: Math.min(100, v2 * 5), label1: 'v₁ orbit.', label2: 'v₂ libér.' },
        };
      },
    },
    {
      id: 'pc-grav-5',
      shortTitle: 'Énergies orbitales',
      title: 'Exp. 5 : Énergies E_c, E_p et E_m sur orbite liée',
      goal: 'Vérifier E_m = -E_c = ½ E_p < 0.',
      formula: 'E_c = +GMm/(2r) | E_p = -GMm/r | E_m = -GMm/(2r)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Altitude h', min: 400, max: 20000, step: 400, defaultValue: 2000, unit: 'km' },
        { label: 'Masse m', min: 100, max: 2000, step: 100, defaultValue: 500, unit: 'kg' },
      ],
      evaluate: ([h, m]) => {
        const r = (6370 + h) * 1000;
        const Ec = (3.986e14 * m) / (2 * r) / 1e9;
        return {
          headline: `E_c = +${f(Ec)} GJ · E_p = -${f(2 * Ec)} GJ · E_m = -${f(Ec)} GJ`,
          metrics: [
            { label: 'E_c', value: `+${f(Ec)} GJ`, accent: 'emerald' },
            { label: 'E_p', value: `-${f(2 * Ec)} GJ`, accent: 'rose' },
            { label: 'E_m', value: `-${f(Ec)} GJ`, accent: 'amber' },
          ],
          conclusion: `E_m < 0 caractérise un système gravitationnellement lié.`,
          svg: { bar1: Math.min(100, Ec * 3), bar2: Math.min(100, Ec * 6), label1: 'E_c (+)', label2: '|E_p|' },
        };
      },
    },
    {
      id: 'pc-grav-6',
      shortTitle: 'Loi en 1/d²',
      title: 'Exp. 6 : Attraction universelle F = G m₁ m₂ / d²',
      goal: 'Visualiser la décroissance en 1/d².',
      formula: 'F(d) = F₀ · (R_T / d)²',
      visualKind: 'orbit',
      sliders: [{ label: 'Distance d (en R_T)', min: 1, max: 5, step: 0.5, defaultValue: 2, unit: 'R_T' }],
      evaluate: ([d]) => {
        const frac = 1 / (d * d);
        return {
          headline: `À ${f(d, 1)} R_T : Force = ${f(frac * 100, 1)} % de F₀`,
          metrics: [
            { label: 'Facteur 1/d²', value: `× ${f(frac, 3)}`, accent: 'amber' },
            { label: 'Champ g', value: `${f(9.81 * frac)} N/kg`, accent: 'emerald' },
            { label: 'Distance', value: `${f(d, 1)} R_T`, accent: 'sky' },
          ],
          conclusion: `Tripler la distance divise l’interaction gravitationnelle par 9.`,
          svg: { hNorm: (d - 1) / 4 },
        };
      },
    },
    {
      id: 'pc-grav-7',
      shortTitle: 'Point neutre Terre-Lune',
      title: 'Exp. 7 : Équilibre gravitationnel Terre–Lune',
      goal: 'Localiser le point où F_Terre = F_Lune.',
      formula: 'M_T / x² = M_L / (D - x)²',
      visualKind: 'energy-bars',
      sliders: [{ label: 'Rapport M_T / M_L', min: 10, max: 100, step: 1, defaultValue: 81, unit: '' }],
      evaluate: ([ratio]) => {
        const xPct = (Math.sqrt(ratio) / (Math.sqrt(ratio) + 1)) * 100;
        const xKm = (xPct / 100) * 384400;
        return {
          headline: `Équilibre à ${f(xPct, 1)} % de D (${f(xKm, 0)} km de la Terre)`,
          metrics: [
            { label: 'Distance Terre', value: `${f(xKm, 0)} km`, accent: 'sky' },
            { label: 'Distance Lune', value: `${f(384400 - xKm, 0)} km`, accent: 'amber' },
            { label: 'Ratio x/D', value: `${f(xPct, 1)} %`, accent: 'emerald' },
          ],
          conclusion: `Pour M_T = 81 M_L, le point neutre est aux 9/10 du trajet.`,
          svg: { bar1: xPct, bar2: 100 - xPct, label1: 'd(Terre)', label2: 'd(Lune)' },
        };
      },
    },
    {
      id: 'pc-grav-8',
      shortTitle: '2ème loi de Kepler (Aires)',
      title: 'Exp. 8 : Périhélie vs aphélie (r_P v_P = r_A v_A)',
      goal: 'Vérifier la loi des aires sur orbite elliptique.',
      formula: 'v_P / v_A = (1 + e) / (1 - e)',
      visualKind: 'energy-bars',
      sliders: [{ label: 'Excentricité e', min: 0.0, max: 0.6, step: 0.05, defaultValue: 0.2, unit: '' }],
      evaluate: ([e]) => {
        const vP = 30 * Math.sqrt((1 + e) / (1 - e));
        const vA = 30 * Math.sqrt((1 - e) / (1 + e));
        return {
          headline: `v_P = ${f(vP, 1)} km/s · v_A = ${f(vA, 1)} km/s`,
          metrics: [
            { label: 'v_P (proche)', value: `${f(vP, 1)} km/s`, accent: 'rose' },
            { label: 'v_A (loin)', value: `${f(vA, 1)} km/s`, accent: 'sky' },
            { label: 'v_P/v_A', value: `× ${f(vP / vA)}`, accent: 'amber' },
          ],
          conclusion: `L’astre accélère au périhélie pour balayer des aires égales.`,
          svg: { bar1: Math.min(100, vP * 1.5), bar2: Math.min(100, vA * 1.5), label1: 'v_P', label2: 'v_A' },
        };
      },
    },
    {
      id: 'pc-grav-9',
      shortTitle: 'Transfert de Hohmann',
      title: 'Exp. 9 : Orbite de transfert a_t = (r₁ + r₂) / 2',
      goal: 'Calculer la durée de transfert vers une orbite haute.',
      formula: 'a_t = (r₁ + r₂)/2  |  t_trans = ½ T(a_t)',
      visualKind: 'orbit',
      sliders: [{ label: 'Altitude finale h₂', min: 2000, max: 35800, step: 2000, defaultValue: 35800, unit: 'km' }],
      evaluate: ([h2]) => {
        const at = (6770e3 + (6370 + h2) * 1000) / 2;
        const tH = (Math.PI * Math.sqrt(Math.pow(at, 3) / 3.986e14)) / 3600;
        return {
          headline: `Durée de transfert t = ${f(tH)} h`,
          metrics: [
            { label: 'Demi-grand axe', value: `${f(at / 1000, 0)} km`, accent: 'sky' },
            { label: 'Durée transfert', value: `${f(tH)} h`, accent: 'emerald' },
            { label: 'Cible h₂', value: `${h2} km`, accent: 'amber' },
          ],
          conclusion: `Le transfert vers l’orbite géostationnaire dure ~5,25 heures.`,
          svg: { hNorm: Math.min(1, h2 / 36000) },
        };
      },
    },
    {
      id: 'pc-grav-10',
      shortTitle: 'Masse d’un astre',
      title: 'Exp. 10 : Synthèse BAC C — Peser une planète par Kepler',
      goal: 'Déduire M à partir de r et T d’un satellite.',
      formula: 'M = 4π² r³ / (G T²)',
      visualKind: 'orbit',
      sliders: [
        { label: 'Rayon r (×10⁵ km)', min: 2, max: 10, step: 1, defaultValue: 4, unit: '×10⁵ km' },
        { label: 'Période T (jours)', min: 1, max: 10, step: 0.5, defaultValue: 2, unit: 'j' },
      ],
      evaluate: ([r105, Tdays]) => {
        const r = r105 * 1e8;
        const T = Tdays * 86400;
        const M = (4 * Math.PI * Math.PI * Math.pow(r, 3)) / (6.67e-11 * T * T);
        return {
          headline: `M ≈ ${f(M / 1e24, 2)} × 10²⁴ kg`,
          metrics: [
            { label: 'Masse M', value: `${f(M / 1e24, 2)}×10²⁴ kg`, accent: 'emerald' },
            { label: 'En M_Terre', value: `${f(M / 5.97e24, 2)} M_T`, accent: 'amber' },
            { label: 'Vitesse orb.', value: `${f((2 * Math.PI * r) / T / 1000)} km/s`, accent: 'sky' },
          ],
          conclusion: `On pèse ainsi les planètes et le Soleil grâce à leurs satellites.`,
          svg: { hNorm: r105 / 10 },
        };
      },
    },
  ],

  // 4. OSCILLATEURS MÉCANIQUES & ÉNERGIE (10)
  'physTc-oscillations-energie': [
    {
      id: 'pc-osc-1',
      shortTitle: 'Pendule élastique T₀',
      title: 'Exp. 1 : Sinusoïde x(t) = X_m cos(ω₀ t + φ)',
      goal: 'Mesurer T₀ = 2π √(m/k).',
      formula: 'ω₀ = √(k/m)  |  T₀ = 2π √(m/k)',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'Raideur k', min: 20, max: 200, step: 10, defaultValue: 80, unit: 'N/m' },
        { label: 'Masse m', min: 0.2, max: 2.0, step: 0.2, defaultValue: 0.8, unit: 'kg' },
        { label: 'Amplitude X_m', min: 2, max: 10, step: 1, defaultValue: 6, unit: 'cm' },
      ],
      evaluate: ([k, m, xm]) => {
        const w0 = Math.sqrt(k / m);
        const T0 = (2 * Math.PI) / w0;
        return {
          headline: `ω₀ = ${f(w0, 1)} rad/s · T₀ = ${f(T0)} s`,
          metrics: [
            { label: 'Période T₀', value: `${f(T0)} s`, accent: 'amber' },
            { label: 'Pulsation ω₀', value: `${f(w0, 1)} rad/s`, accent: 'sky' },
            { label: 'Fréquence N₀', value: `${f(1 / T0)} Hz`, accent: 'emerald' },
          ],
          conclusion: `T₀ ne dépend pas de l’amplitude X_m (isochronisme).`,
          svg: { amp: xm, freq: w0 / 10 },
        };
      },
    },
    {
      id: 'pc-osc-2',
      shortTitle: 'Conservation E_m(x)',
      title: 'Exp. 2 : Échange dynamique E_c + E_{pe} = E_m',
      goal: 'Suivre le transfert d’énergie au cours d’une oscillation.',
      formula: 'E_m = ½ k x² + ½ m v² = ½ k X_m²',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Position relative x/X_m', min: -1, max: 1, step: 0.1, defaultValue: 0.5, unit: '' },
        { label: 'Énergie totale E_m', min: 20, max: 100, step: 10, defaultValue: 80, unit: 'mJ' },
      ],
      evaluate: ([ratio, Em]) => {
        const Ep = Em * ratio * ratio;
        const Ec = Em - Ep;
        return {
          headline: `E_p = ${f(Ep, 1)} mJ · E_c = ${f(Ec, 1)} mJ`,
          metrics: [
            { label: 'E_p', value: `${f(Ep, 1)} mJ`, accent: 'amber' },
            { label: 'E_c', value: `${f(Ec, 1)} mJ`, accent: 'emerald' },
            { label: 'E_m totale', value: `${Em} mJ`, accent: 'sky' },
          ],
          conclusion: `En x = 0, E_c = E_m ; aux extrémités x = ±X_m, v = 0 et E_p = E_m.`,
          svg: { bar1: (Ec / Em) * 100, bar2: (Ep / Em) * 100, label1: 'E_c', label2: 'E_p' },
        };
      },
    },
    {
      id: 'pc-osc-3',
      shortTitle: 'Pendule simple ℓ/g',
      title: 'Exp. 3 : Isochronisme T₀ = 2π √(ℓ/g)',
      goal: 'Tester l’influence de ℓ et g.',
      formula: 'T₀ = 2π √(ℓ / g)',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'Longueur ℓ', min: 0.2, max: 2.5, step: 0.1, defaultValue: 1.0, unit: 'm' },
        { label: 'Pesanteur g', min: 1.6, max: 15, step: 0.2, defaultValue: 9.8, unit: 'm/s²' },
      ],
      evaluate: ([ell, g]) => {
        const T0 = 2 * Math.PI * Math.sqrt(ell / g);
        return {
          headline: `T₀ = ${f(T0)} s`,
          metrics: [
            { label: 'Période T₀', value: `${f(T0)} s`, accent: 'amber' },
            { label: 'Pulsation ω₀', value: `${f(Math.sqrt(g / ell))} rad/s`, accent: 'sky' },
            { label: 'Masse m', value: 'Indépendant', accent: 'emerald' },
          ],
          conclusion: `T₀ du pendule simple ne dépend pas de sa masse m.`,
          svg: { amp: 6, freq: 2 / T0 },
        };
      },
    },
    {
      id: 'pc-osc-4',
      shortTitle: 'Vitesse max v_max',
      title: 'Exp. 4 : Vitesse maximale v_max = ω₀ X_m',
      goal: 'Calculer v_max et a_max = ω₀² X_m.',
      formula: 'v_max = X_m ω₀  |  a_max = X_m ω₀²',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'Pulsation ω₀', min: 2, max: 20, step: 1, defaultValue: 10, unit: 'rad/s' },
        { label: 'Amplitude X_m', min: 1, max: 10, step: 1, defaultValue: 5, unit: 'cm' },
      ],
      evaluate: ([w0, xmCm]) => {
        const xm = xmCm / 100;
        return {
          headline: `v_max = ${f(w0 * xm)} m/s · a_max = ${f(w0 * w0 * xm)} m/s²`,
          metrics: [
            { label: 'v_max (x=0)', value: `${f(w0 * xm)} m/s`, accent: 'emerald' },
            { label: 'a_max (±X_m)', value: `${f(w0 * w0 * xm)} m/s²`, accent: 'rose' },
            { label: 'Période T₀', value: `${f((2 * Math.PI) / w0)} s`, accent: 'sky' },
          ],
          conclusion: `v et x sont en quadrature de phase.`,
          svg: { amp: xmCm, freq: w0 / 10 },
        };
      },
    },
    {
      id: 'pc-osc-5',
      shortTitle: 'Pendule vertical Δℓ₀',
      title: 'Exp. 5 : Ressort vertical — Allongement Δℓ₀ = mg/k',
      goal: 'Relier T₀ à Δℓ₀.',
      formula: 'T₀ = 2π √(Δℓ₀ / g)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse m', min: 0.1, max: 1.0, step: 0.1, defaultValue: 0.4, unit: 'kg' },
        { label: 'Raideur k', min: 20, max: 100, step: 10, defaultValue: 40, unit: 'N/m' },
      ],
      evaluate: ([m, k]) => {
        const dl = (m * 10) / k;
        const T0 = 2 * Math.PI * Math.sqrt(dl / 10);
        return {
          headline: `Δℓ₀ = ${f(dl * 100, 1)} cm · T₀ = ${f(T0)} s`,
          metrics: [
            { label: 'Allongement', value: `${f(dl * 100, 1)} cm`, accent: 'sky' },
            { label: 'Période T₀', value: `${f(T0)} s`, accent: 'amber' },
            { label: 'Tension éq.', value: `${f(m * 10, 1)} N`, accent: 'emerald' },
          ],
          conclusion: `Même période T₀ = 2π√(m/k) qu’à l’horizontale.`,
          svg: { bar1: Math.min(100, dl * 400), bar2: Math.min(100, T0 * 80), label1: 'Δℓ₀', label2: 'T₀' },
        };
      },
    },
    {
      id: 'pc-osc-6',
      shortTitle: 'Pendule de torsion',
      title: 'Exp. 6 : Pendule de torsion T₀ = 2π √(J / C)',
      goal: 'Calculer T₀ selon J et C.',
      formula: 'T₀ = 2π √(J / C)',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'Inertie J', min: 1, max: 10, step: 1, defaultValue: 4, unit: '×10⁻³ kg·m²' },
        { label: 'Constante C', min: 1, max: 10, step: 1, defaultValue: 4, unit: '×10⁻² SI' },
      ],
      evaluate: ([j, c]) => {
        const T0 = 2 * Math.PI * Math.sqrt((j * 1e-3) / (c * 1e-2));
        return {
          headline: `T₀ = ${f(T0)} s`,
          metrics: [
            { label: 'Période T₀', value: `${f(T0)} s`, accent: 'amber' },
            { label: 'ω₀', value: `${f(Math.sqrt((c * 10) / j))} rad/s`, accent: 'sky' },
            { label: 'Énergie', value: '½ C θ_m²', accent: 'emerald' },
          ],
          conclusion: `Harmonique même aux grands angles.`,
          svg: { amp: 6, freq: 2 / T0 },
        };
      },
    },
    {
      id: 'pc-osc-7',
      shortTitle: 'Amortissement fluide',
      title: 'Exp. 7 : Régime pseudo-périodique x(t) = X₀ e^(-λt) cos(ωt)',
      goal: 'Observer la décroissance exponentielle d’amplitude.',
      formula: 'x(t) = X₀ e^(-λt) cos(ω t)',
      visualKind: 'rc-curve',
      sliders: [{ label: 'Amortissement λ', min: 0.1, max: 1.5, step: 0.1, defaultValue: 0.4, unit: 's⁻¹' }],
      evaluate: ([lam]) => {
        const resPct = Math.exp(-lam * 3) * 100;
        return {
          headline: `À t = 3 s : reste ${f(resPct, 1)} % de X₀`,
          metrics: [
            { label: 'Amortissement λ', value: `${f(lam, 1)} s⁻¹`, accent: 'rose' },
            { label: 'Reste à 3s', value: `${f(resPct, 1)} %`, accent: 'amber' },
            { label: 'Régime', value: lam < 1.2 ? 'Pseudo-périodique' : 'Critique', accent: 'sky' },
          ],
          conclusion: `Les frottements dissipent E_m en chaleur.`,
          svg: { tauNorm: Math.min(1, 0.3 / lam), inverted: 1 },
        };
      },
    },
    {
      id: 'pc-osc-8',
      shortTitle: 'Ressorts série/parallèle',
      title: 'Exp. 8 : Association de ressorts (k₁, k₂)',
      goal: 'Comparer raideur équivalente en parallèle et en série.',
      formula: 'k_par = k₁ + k₂  |  1/k_ser = 1/k₁ + 1/k₂',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Raideur k₁', min: 20, max: 100, step: 10, defaultValue: 60, unit: 'N/m' },
        { label: 'Raideur k₂', min: 20, max: 100, step: 10, defaultValue: 40, unit: 'N/m' },
      ],
      evaluate: ([k1, k2]) => {
        const kPar = k1 + k2;
        const kSer = (k1 * k2) / (k1 + k2);
        return {
          headline: `k_par = ${kPar} N/m · k_ser = ${f(kSer, 1)} N/m`,
          metrics: [
            { label: 'Parallèle', value: `${kPar} N/m`, accent: 'emerald' },
            { label: 'Série', value: `${f(kSer, 1)} N/m`, accent: 'sky' },
            { label: 'Ratio', value: `× ${f(kPar / kSer, 1)}`, accent: 'amber' },
          ],
          conclusion: `En parallèle les raideurs s’ajoutent ; en série le système s’assouplit.`,
          svg: { bar1: (kPar / 200) * 100, bar2: (kSer / 200) * 100, label1: 'k_par', label2: 'k_ser' },
        };
      },
    },
    {
      id: 'pc-osc-9',
      shortTitle: 'Phase φ₀ à t = 0',
      title: 'Exp. 9 : Conditions initiales (x₀, v₀) et phase φ',
      goal: 'Déterminer X_m et φ à t = 0.',
      formula: 'X_m = √(x₀² + (v₀/ω₀)²)  |  tan φ = -v₀ / (ω₀ x₀)',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'x₀', min: -6, max: 6, step: 1, defaultValue: 3, unit: 'cm' },
        { label: 'v₀ / ω₀', min: -6, max: 6, step: 1, defaultValue: 4, unit: 'cm' },
      ],
      evaluate: ([x0, vw]) => {
        const xm = Math.hypot(x0, vw);
        const phiDeg = (Math.atan2(-vw, x0) * 180) / Math.PI;
        return {
          headline: `X_m = ${f(xm)} cm · φ = ${f(phiDeg, 1)}°`,
          metrics: [
            { label: 'Amplitude X_m', value: `${f(xm)} cm`, accent: 'amber' },
            { label: 'Phase φ', value: `${f(phiDeg, 1)}°`, accent: 'sky' },
            { label: 'X_m²', value: `${f(xm * xm, 1)} cm²`, accent: 'emerald' },
          ],
          conclusion: `Sans vitesse initiale (v₀ = 0), X_m = |x₀| et φ = 0 ou π.`,
          svg: { amp: Math.max(2, xm), freq: 1.5 },
        };
      },
    },
    {
      id: 'pc-osc-10',
      shortTitle: 'Choc + ressort',
      title: 'Exp. 10 : Synthèse BAC C — Compression maximale après choc',
      goal: 'Relier vitesse d’impact v₀ et compression X_m.',
      formula: '½ m v₀² = ½ k X_m²  ⟹  X_m = v₀ √(m / k)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Vitesse v₀', min: 1, max: 10, step: 1, defaultValue: 4, unit: 'm/s' },
        { label: 'Raideur k', min: 100, max: 1000, step: 50, defaultValue: 400, unit: 'N/m' },
      ],
      evaluate: ([v0, k]) => {
        const Xm = v0 * Math.sqrt(2 / k);
        const Em = v0 * v0;
        return {
          headline: `Compression max X_m = ${f(Xm * 100, 1)} cm`,
          metrics: [
            { label: 'Compression X_m', value: `${f(Xm * 100, 1)} cm`, accent: 'rose' },
            { label: 'Énergie cédée', value: `${Em} J`, accent: 'amber' },
            { label: 'Force max', value: `${f(k * Xm, 1)} N`, accent: 'sky' },
          ],
          conclusion: `Toute l’énergie cinétique est convertie en énergie élastique à l’arrêt.`,
          svg: { bar1: Math.min(100, Xm * 150), bar2: Math.min(100, Em), label1: 'X_m', label2: 'E_m' },
        };
      },
    },
  ],
};
