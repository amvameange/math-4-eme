import { PhysicsLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const PHYSICS_TC_LABO_PART2: Record<string, PhysicsLaboExpSpec[]> = {
  // 5. DIPÔLES RC, RL & OSCILLATEUR LC (10)
  'physTc-dipoles-rc-rl': [
    {
      id: 'pc-rc-1',
      shortTitle: 'Charge RC & τ = RC',
      title: 'Exp. 1 : Charge d’un condensateur et tangente à l’origine',
      goal: 'Observer u_C(t) = E(1 - e^(-t/τ)) et repérer τ à 63 % de E.',
      formula: 'τ = R·C  |  u_C(τ) ≈ 0,632 E  |  u_C(5τ) ≈ 0,993 E',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'F.é.m. E', min: 3, max: 24, step: 1, defaultValue: 12, unit: 'V' },
        { label: 'Résistance R', min: 1, max: 20, step: 1, defaultValue: 10, unit: 'kΩ' },
        { label: 'Capacité C', min: 1, max: 50, step: 1, defaultValue: 10, unit: 'μF' },
      ],
      evaluate: ([E, Rk, Cmu]) => {
        const tauMs = Rk * Cmu;
        const uTau = 0.632 * E;
        return {
          headline: `τ = ${f(tauMs, 0)} ms · Régime permanent à 5τ = ${f(5 * tauMs, 0)} ms`,
          metrics: [
            { label: 'Constante τ', value: `${f(tauMs, 0)} ms`, accent: 'amber' },
            { label: 'u_C(τ) = 0,63E', value: `${f(uTau)} V`, accent: 'sky' },
            { label: 'Énergie ½CE²', value: `${f(0.5 * Cmu * 1e-3 * E * E, 2)} mJ`, accent: 'emerald' },
          ],
          conclusion: `La tangente à l’origine coupe l’asymptote u_C = E exactement à t = τ = ${f(tauMs, 0)} ms.`,
          svg: { mode: 'charge', tau: tauMs, E, ratio: 0.632 },
        };
      },
    },
    {
      id: 'pc-rc-2',
      shortTitle: 'Décharge du condensateur',
      title: 'Exp. 2 : Décharge exponentielle u_C(t) = E·e^(-t/τ)',
      goal: 'Suivre la décroissance de la tension et le passage à 37 % de E en t = τ.',
      formula: 'u_C(t) = E·e^(-t/τ)  ;  u_C(τ) ≈ 0,368 E',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'Tension E', min: 4, max: 20, step: 1, defaultValue: 10, unit: 'V' },
        { label: 'Constante τ', min: 10, max: 200, step: 10, defaultValue: 50, unit: 'ms' },
        { label: 'Instant t', min: 0, max: 250, step: 5, defaultValue: 50, unit: 'ms' },
      ],
      evaluate: ([E, tau, t]) => {
        const u = E * Math.exp(-t / tau);
        const pct = (u / E) * 100;
        return {
          headline: `u_C(${t} ms) = ${f(u)} V (${f(pct, 1)} % de E)`,
          metrics: [
            { label: 'Tension u_C(t)', value: `${f(u)} V`, accent: 'rose' },
            { label: 'Reste relatif', value: `${f(pct, 1)} %`, accent: 'sky' },
            { label: 'Rapport t/τ', value: `${f(t / tau)}`, accent: 'amber' },
          ],
          conclusion: `À t = τ, il reste 36,8 % de la charge initiale ; à 5τ il reste moins de 1 %.`,
          svg: { mode: 'discharge', tau, E, t, ratio: u / E },
        };
      },
    },
    {
      id: 'pc-rc-3',
      shortTitle: 'Courant de charge i(t)',
      title: 'Exp. 3 : Discontinuité et décroissance du courant i(t)',
      goal: 'Visualiser le pic initial I₀ = E/R et l’annulation progressive de i(t).',
      formula: 'i(t) = (E/R)·e^(-t/τ)  avec  I₀ = E/R',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'Tension E', min: 5, max: 24, step: 1, defaultValue: 12, unit: 'V' },
        { label: 'Résistance R', min: 100, max: 2000, step: 100, defaultValue: 600, unit: 'Ω' },
        { label: 'Instant t/τ', min: 0, max: 5, step: 0.25, defaultValue: 1, unit: 'τ' },
      ],
      evaluate: ([E, R, ratioTau]) => {
        const I0 = (E / R) * 1000;
        const iT = I0 * Math.exp(-ratioTau);
        return {
          headline: `I₀ = ${f(I0, 1)} mA · i(${ratioTau}τ) = ${f(iT, 2)} mA`,
          metrics: [
            { label: 'Pic initial I₀', value: `${f(I0, 1)} mA`, accent: 'amber' },
            { label: 'Courant i(t)', value: `${f(iT, 2)} mA`, accent: 'sky' },
            { label: 'u_R(t) = R·i', value: `${f((iT / 1000) * R)} V`, accent: 'emerald' },
          ],
          conclusion: `u_C est continue en t = 0, mais le courant i(t) subit un saut brutal de 0 à E/R.`,
          svg: { mode: 'discharge', tau: 1, E: I0, t: ratioTau, ratio: Math.exp(-ratioTau) },
        };
      },
    },
    {
      id: 'pc-rc-4',
      shortTitle: 'Bilan énergétique RC',
      title: 'Exp. 4 : Rendement 50 % lors de la charge par échelon',
      goal: 'Comparer l’énergie stockée E_C, fournie E_gén et dissipée par effet Joule E_J.',
      formula: 'E_gén = C·E²  |  E_C = ½ C·E²  |  E_J = ½ C·E² (η = 50 %)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Tension E', min: 5, max: 30, step: 1, defaultValue: 12, unit: 'V' },
        { label: 'Capacité C', min: 10, max: 470, step: 10, defaultValue: 100, unit: 'μF' },
      ],
      evaluate: ([E, Cmu]) => {
        const Egen = Cmu * 1e-3 * E * E;
        const Ec = 0.5 * Egen;
        return {
          headline: `E_gén = ${f(Egen, 2)} mJ  ⟹  E_C = ${f(Ec, 2)} mJ + E_J = ${f(Ec, 2)} mJ`,
          metrics: [
            { label: 'Fournie par pile', value: `${f(Egen, 2)} mJ`, accent: 'amber' },
            { label: 'Stockée dans C', value: `${f(Ec, 2)} mJ`, accent: 'sky' },
            { label: 'Perdue effet Joule', value: `${f(Ec, 2)} mJ`, accent: 'rose' },
          ],
          conclusion: `Quelle que soit la valeur de R > 0, la moitié de l’énergie du générateur est dissipée en chaleur.`,
          svg: { bar1: 50, bar2: 50, label1: 'E_C (50%)', label2: 'E_J (50%)' },
        };
      },
    },
    {
      id: 'pc-rc-5',
      shortTitle: 'Établissement RL',
      title: 'Exp. 5 : Établissement du courant dans une bobine RL',
      goal: 'Déterminer I_p = E/R_tot et τ = L/R_tot pour une bobine réelle (L, r).',
      formula: 'i(t) = I_p (1 - e^(-t/τ))  avec  τ = L/(R + r)  et  I_p = E/(R + r)',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'Tension E', min: 4, max: 24, step: 2, defaultValue: 12, unit: 'V' },
        { label: 'Résistance totale R_t', min: 10, max: 200, step: 10, defaultValue: 60, unit: 'Ω' },
        { label: 'Inductance L', min: 0.1, max: 2.0, step: 0.1, defaultValue: 0.6, unit: 'H' },
      ],
      evaluate: ([E, Rt, L]) => {
        const Ip = E / Rt;
        const tauMs = (L / Rt) * 1000;
        const Emag = 0.5 * L * Ip * Ip * 1000;
        return {
          headline: `I_p = ${f(Ip * 1000, 1)} mA · τ = ${f(tauMs, 1)} ms`,
          metrics: [
            { label: 'Courant permanent I_p', value: `${f(Ip * 1000, 1)} mA`, accent: 'sky' },
            { label: 'Constante τ = L/R_t', value: `${f(tauMs, 1)} ms`, accent: 'amber' },
            { label: 'Énergie ½LI_p²', value: `${f(Emag, 2)} mJ`, accent: 'emerald' },
          ],
          conclusion: `La bobine s’oppose aux variations rapides de i(t) : i(0⁺) = 0 et i est toujours continu.`,
          svg: { mode: 'charge', tau: tauMs, E: Ip * 1000, ratio: 0.632 },
        };
      },
    },
    {
      id: 'pc-rc-6',
      shortTitle: 'Rupture courant RL',
      title: 'Exp. 6 : Surtension d’ouverture et diode de roue libre',
      goal: 'Comprendre la surtension L|di/dt| lors de la rupture du courant dans une bobine.',
      formula: 'u_L = -L(di/dt)  |  Avec R_ext grand, τ’ = L/(R_ext+r) chute et |u_L| explose',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'Courant I_p', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5, unit: 'A' },
        { label: 'Inductance L', min: 0.1, max: 1.5, step: 0.1, defaultValue: 0.4, unit: 'H' },
        { label: 'Résistance coupure', min: 20, max: 1000, step: 20, defaultValue: 200, unit: 'Ω' },
      ],
      evaluate: ([Ip, L, Rcoup]) => {
        const uMax = Rcoup * Ip;
        const tauMs = (L / Rcoup) * 1000;
        return {
          headline: `Pic de surtension |u_L|_max ≈ ${f(uMax, 0)} V · τ’ = ${f(tauMs, 2)} ms`,
          metrics: [
            { label: 'Surtension max', value: `${f(uMax, 0)} V`, accent: 'rose' },
            { label: 'τ’ coupure', value: `${f(tauMs, 2)} ms`, accent: 'amber' },
            { label: 'Énergie libérée', value: `${f(0.5 * L * Ip * Ip * 1000, 1)} mJ`, accent: 'sky' },
          ],
          conclusion: `Plus la coupure est brutale (R élevé), plus la surtension est dangereuse (étincelle) : d’où la diode de roue libre.`,
          svg: { mode: 'discharge', tau: tauMs, E: uMax, t: tauMs, ratio: 0.368 },
        };
      },
    },
    {
      id: 'pc-rc-7',
      shortTitle: 'Oscillateur LC idéal',
      title: 'Exp. 7 : Formule de Thomson T₀ = 2π√(LC)',
      goal: 'Régler la période propre et la fréquence d’un circuit LC non amorti.',
      formula: 'q’’ + (1/LC)q = 0  ⟹  T₀ = 2π √(L·C)  ;  f₀ = 1/T₀',
      visualKind: 'pendulum-wave',
      sliders: [
        { label: 'Inductance L', min: 10, max: 500, step: 10, defaultValue: 100, unit: 'mH' },
        { label: 'Capacité C', min: 1, max: 100, step: 1, defaultValue: 10, unit: 'μF' },
        { label: 'Tension U_m', min: 2, max: 15, step: 1, defaultValue: 6, unit: 'V' },
      ],
      evaluate: ([LmH, Cmu, Um]) => {
        const T0ms = 2 * Math.PI * Math.sqrt((LmH * 1e-3) * (Cmu * 1e-6)) * 1000;
        const f0 = 1000 / T0ms;
        const Im = Um * Math.sqrt((Cmu * 1e-6) / (LmH * 1e-3)) * 1000;
        return {
          headline: `T₀ = ${f(T0ms, 2)} ms · f₀ = ${f(f0, 1)} Hz · I_m = ${f(Im, 1)} mA`,
          metrics: [
            { label: 'Période T₀', value: `${f(T0ms, 2)} ms`, accent: 'amber' },
            { label: 'Fréquence f₀', value: `${f(f0, 1)} Hz`, accent: 'sky' },
            { label: 'Courant max I_m', value: `${f(Im, 1)} mA`, accent: 'emerald' },
          ],
          conclusion: `T₀ dépend uniquement du produit LC ; q(t) et i(t) sont en quadrature de phase (π/2).`,
          svg: { amp: Um, omega: (2 * Math.PI) / T0ms, T0: T0ms },
        };
      },
    },
    {
      id: 'pc-rc-8',
      shortTitle: 'Échange E_e ↔ E_m (LC)',
      title: 'Exp. 8 : Conservation de l’énergie dans LC idéal',
      goal: 'Suivre le transfert périodique entre énergie électrique ½Cu² et magnétique ½Li².',
      formula: 'E_tot = ½ C u_C² + ½ L i² = ½ C U_m² = ½ L I_m²',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Phase ω₀t', min: 0, max: 360, step: 15, defaultValue: 45, unit: '°' },
        { label: 'Énergie totale E_tot', min: 1, max: 20, step: 1, defaultValue: 10, unit: 'mJ' },
      ],
      evaluate: ([deg, Etot]) => {
        const rad = (deg * Math.PI) / 180;
        const Ee = Etot * Math.cos(rad) ** 2;
        const Emag = Etot * Math.sin(rad) ** 2;
        return {
          headline: `E_élec = ${f(Ee)} mJ · E_mag = ${f(Emag)} mJ (Somme = ${f(Etot, 1)} mJ)`,
          metrics: [
            { label: 'Énergie élec ½Cu²', value: `${f(Ee)} mJ`, accent: 'sky' },
            { label: 'Énergie mag ½Li²', value: `${f(Emag)} mJ`, accent: 'rose' },
            { label: 'Période énergie', value: `T₀ / 2`, accent: 'emerald' },
          ],
          conclusion: `Les énergies oscillent à la fréquence 2f₀ (période T₀/2) en restant complémentaires.`,
          svg: { bar1: (Ee / Etot) * 100, bar2: (Emag / Etot) * 100, label1: 'E_élec', label2: 'E_mag' },
        };
      },
    },
    {
      id: 'pc-rc-9',
      shortTitle: 'Régimes amortis RLC libre',
      title: 'Exp. 9 : Régime pseudo-périodique vs critique vs apériodique',
      goal: 'Classer le comportement libre selon R et la résistance critique R_c = 2√(L/C).',
      formula: 'R_c = 2 √(L/C)  |  R < R_c : pseudo-périodique  |  R ≥ R_c : apériodique',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'Résistance R', min: 10, max: 500, step: 10, defaultValue: 60, unit: 'Ω' },
        { label: 'Inductance L', min: 10, max: 200, step: 10, defaultValue: 100, unit: 'mH' },
        { label: 'Capacité C', min: 1, max: 50, step: 1, defaultValue: 10, unit: 'μF' },
      ],
      evaluate: ([R, LmH, Cmu]) => {
        const Rc = 2 * Math.sqrt((LmH * 1e-3) / (Cmu * 1e-6));
        const regime = R < Rc * 0.95 ? 'Pseudo-périodique' : R <= Rc * 1.05 ? 'Critique' : 'Apériodique';
        return {
          headline: `R_c = ${f(Rc, 1)} Ω · Régime : ${regime}`,
          metrics: [
            { label: 'Résistance critique R_c', value: `${f(Rc, 1)} Ω`, accent: 'amber' },
            { label: 'Rapport R / R_c', value: `${f(R / Rc)}`, accent: 'sky' },
            { label: 'Régime observé', value: regime, accent: R < Rc ? 'emerald' : 'rose' },
          ],
          conclusion: `Si R < R_c, u_C(t) oscille avec une pseudo-période T ≈ T₀ et une enveloppe exponentielle décroissante.`,
          svg: { mode: 'discharge', tau: 100 / Math.max(1, R / 20), E: 10, t: 35, ratio: Math.min(1, Rc / (R + Rc)) },
        };
      },
    },
    {
      id: 'pc-rc-10',
      shortTitle: 'Identification graphique τ & C',
      title: 'Exp. 10 : Synthèse BAC C — Dosage expérimental de C par RC',
      goal: 'Déduire la capacité inconnue C = τ/R et vérifier la valeur nominale.',
      formula: 'u_C(τ) = 0,632 E  ⟹  C = τ / R',
      visualKind: 'rc-curve',
      sliders: [
        { label: 'τ mesurée sur écran', min: 5, max: 120, step: 1, defaultValue: 47, unit: 'ms' },
        { label: 'Résistance connue R', min: 1, max: 20, step: 0.5, defaultValue: 4.7, unit: 'kΩ' },
      ],
      evaluate: ([tauMs, Rk]) => {
        const Cmu = tauMs / Rk;
        return {
          headline: `Capacité mesurée C = τ/R = ${f(Cmu, 1)} μF`,
          metrics: [
            { label: 'Capacité C', value: `${f(Cmu, 1)} μF`, accent: 'emerald' },
            { label: 'τ = R·C', value: `${tauMs} ms`, accent: 'sky' },
            { label: 'Charge à 12 V', value: `${f(Cmu * 12, 0)} μC`, accent: 'amber' },
          ],
          conclusion: `La mesure de τ à 63 % de E (ou 37 % en décharge) permet un étalonnage direct de C.`,
          svg: { mode: 'charge', tau: tauMs, E: 12, ratio: 0.632 },
        };
      },
    },
  ],

  // 6. OSCILLATIONS FORCÉES RLC & RÉSONANCE (10)
  'physTc-oscillations-rlc': [
    {
      id: 'pc-rlc-1',
      shortTitle: 'Impédance Z(ω)',
      title: 'Exp. 1 : Réactances X_L = Lω, X_C = 1/(Cω) et impédance Z',
      goal: 'Comparer les oppositions inductive et capacitive pour calculer Z et I.',
      formula: 'Z = √(R² + (Lω - 1/(Cω))²)  ;  I = U / Z',
      visualKind: 'rlc-fresnel',
      sliders: [
        { label: 'Résistance R', min: 10, max: 100, step: 5, defaultValue: 30, unit: 'Ω' },
        { label: 'Fréquence f', min: 50, max: 400, step: 5, defaultValue: 160, unit: 'Hz' },
        { label: 'Inductance L', min: 20, max: 200, step: 10, defaultValue: 100, unit: 'mH' },
      ],
      evaluate: ([R, freq, LmH]) => {
        const C = 10e-6;
        const w = 2 * Math.PI * freq;
        const XL = (LmH * 1e-3) * w;
        const XC = 1 / (C * w);
        const Z = Math.hypot(R, XL - XC);
        const I = 12 / Z;
        const phiDeg = (Math.atan2(XL - XC, R) * 180) / Math.PI;
        return {
          headline: `Z = ${f(Z, 1)} Ω · I(12V) = ${f(I * 1000, 0)} mA · φ = ${f(phiDeg, 1)}°`,
          metrics: [
            { label: 'Impédance Z', value: `${f(Z, 1)} Ω`, accent: 'amber' },
            { label: 'X_L - X_C', value: `${f(XL - XC, 1)} Ω`, accent: 'sky' },
            { label: 'Déphasage φ', value: `${f(phiDeg, 1)}°`, accent: phiDeg > 0 ? 'rose' : 'emerald' },
          ],
          conclusion: `Pour C = 10 μF, le circuit est inductif si X_L > X_C (φ > 0) et capacitif si X_L < X_C (φ < 0).`,
          svg: { uR: R * I, uL: XL * I, uC: XC * I, phi: phiDeg },
        };
      },
    },
    {
      id: 'pc-rlc-2',
      shortTitle: 'Résonance d’intensité f₀',
      title: 'Exp. 2 : Accord à la résonance Lω₀ = 1/(Cω₀)',
      goal: 'Observer le maximum de courant I₀ = U/R quand f = f₀.',
      formula: 'f₀ = 1 / (2π √(LC))  ;  Z_min = R  ;  I_max = U / R',
      visualKind: 'resonance-bell',
      sliders: [
        { label: 'Fréquence f', min: 50, max: 350, step: 5, defaultValue: 159, unit: 'Hz' },
        { label: 'Résistance R', min: 10, max: 120, step: 5, defaultValue: 25, unit: 'Ω' },
        { label: 'Tension U', min: 2, max: 24, step: 1, defaultValue: 10, unit: 'V' },
      ],
      presets: [
        { label: 'À la résonance (159 Hz)', values: [159, 25, 10] },
        { label: 'Résonance aiguë (R=10Ω)', values: [159, 10, 10] },
      ],
      evaluate: ([freq, R, U]) => {
        const f0 = 159.15;
        const w = 2 * Math.PI * freq;
        const diff = 0.1 * w - 1 / (10e-6 * w);
        const Z = Math.hypot(R, diff);
        const I = U / Z;
        const I0 = U / R;
        const Q = (0.1 * 2 * Math.PI * f0) / R;
        return {
          headline: `I = ${f(I * 1000, 1)} mA (Max I₀ = ${f(I0 * 1000, 1)} mA) · Q = ${f(Q)}`,
          metrics: [
            { label: 'Courant efficace I', value: `${f(I * 1000, 1)} mA`, accent: 'emerald' },
            { label: 'Facteur qualité Q', value: `${f(Q)}`, accent: 'amber' },
            { label: 'Rapport I / I₀', value: `${f((I / I0) * 100, 1)} %`, accent: 'sky' },
          ],
          conclusion: `À f = f₀ ≈ 159 Hz (L = 0,1 H, C = 10 μF), Z = R et φ = 0 : u et i sont en phase.`,
          svg: { freq, f0, Q, ratio: I / I0 },
        };
      },
    },
    {
      id: 'pc-rlc-3',
      shortTitle: 'Bande passante Δf & Q',
      title: 'Exp. 3 : Sélectivité, bande passante à -3 dB et surtension',
      goal: 'Relier R à l’acuité de résonance Δf = R/(2πL) et à la surtension U_C = Q·U.',
      formula: 'Δf = f₂ - f₁ = f₀ / Q = R / (2π L)  ;  U_C(f₀) = Q · U',
      visualKind: 'resonance-bell',
      sliders: [
        { label: 'Résistance R', min: 5, max: 150, step: 5, defaultValue: 30, unit: 'Ω' },
        { label: 'Inductance L', min: 50, max: 400, step: 10, defaultValue: 100, unit: 'mH' },
        { label: 'Capacité C', min: 2, max: 40, step: 2, defaultValue: 10, unit: 'μF' },
      ],
      evaluate: ([R, LmH, Cmu]) => {
        const L = LmH * 1e-3;
        const C = Cmu * 1e-6;
        const f0 = 1 / (2 * Math.PI * Math.sqrt(L * C));
        const df = R / (2 * Math.PI * L);
        const Q = f0 / df;
        return {
          headline: `f₀ = ${f(f0, 1)} Hz · Δf = ${f(df, 1)} Hz · Q = ${f(Q)}`,
          metrics: [
            { label: 'Bande passante Δf', value: `${f(df, 1)} Hz`, accent: 'sky' },
            { label: 'Facteur qualité Q', value: `${f(Q)}`, accent: 'amber' },
            { label: 'Seuil I₀/√2', value: `70,7 % de I₀`, accent: 'emerald' },
          ],
          conclusion: `Une faible résistance donne un facteur Q élevé : le filtre est très sélectif (risque de surtension Q·U).`,
          svg: { freq: f0, f0, Q, ratio: 1 },
        };
      },
    },
    {
      id: 'pc-rlc-4',
      shortTitle: 'Diagramme de Fresnel',
      title: 'Exp. 4 : Construction vectorielle des tensions U_R, U_L, U_C',
      goal: 'Vérifier la relation vectorielle U⃗ = U⃗_R + U⃗_L + U⃗_C et le signe de φ.',
      formula: 'U² = U_R² + (U_L - U_C)²  ;  tan φ = (U_L - U_C) / U_R',
      visualKind: 'rlc-fresnel',
      sliders: [
        { label: 'Tension U_R', min: 2, max: 20, step: 1, defaultValue: 8, unit: 'V' },
        { label: 'Tension U_L', min: 2, max: 25, step: 1, defaultValue: 14, unit: 'V' },
        { label: 'Tension U_C', min: 2, max: 25, step: 1, defaultValue: 8, unit: 'V' },
      ],
      evaluate: ([uR, uL, uC]) => {
        const U = Math.hypot(uR, uL - uC);
        const phi = (Math.atan2(uL - uC, uR) * 180) / Math.PI;
        return {
          headline: `U_tot = ${f(U)} V · Déphasage φ = ${f(phi, 1)}°`,
          metrics: [
            { label: 'Tension générateur U', value: `${f(U)} V`, accent: 'amber' },
            { label: 'U_L - U_C', value: `${uL - uC} V`, accent: 'sky' },
            { label: 'Nature circuit', value: uL > uC ? 'Inductif' : uL < uC ? 'Capacitif' : 'Résonant', accent: 'emerald' },
          ],
          conclusion: `Même si U_L ou U_C dépasse U, l’égalité vectorielle reste vérifiée grâce à l’opposition de phase entre U⃗_L et U⃗_C.`,
          svg: { uR, uL, uC, phi },
        };
      },
    },
    {
      id: 'pc-rlc-5',
      shortTitle: 'Puissance active P = UI cos φ',
      title: 'Exp. 5 : Facteur de puissance cos φ et énergie moyenne',
      goal: 'Montrer que seule la résistance consomme de la puissance moyenne P = R I².',
      formula: 'P = U·I·cos φ = R·I²  |  cos φ = R / Z',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Tension U', min: 10, max: 230, step: 10, defaultValue: 220, unit: 'V' },
        { label: 'Courant I', min: 0.5, max: 10, step: 0.5, defaultValue: 4, unit: 'A' },
        { label: 'Déphasage |φ|', min: 0, max: 85, step: 5, defaultValue: 30, unit: '°' },
      ],
      evaluate: ([U, I, phi]) => {
        const cosPhi = Math.cos((phi * Math.PI) / 180);
        const S = U * I;
        const P = S * cosPhi;
        return {
          headline: `P = ${f(P, 0)} W sur S = ${f(S, 0)} VA (cos φ = ${f(cosPhi)})`,
          metrics: [
            { label: 'Puissance active P', value: `${f(P, 0)} W`, accent: 'emerald' },
            { label: 'Apparente S = UI', value: `${f(S, 0)} VA`, accent: 'amber' },
            { label: 'cos φ', value: `${f(cosPhi, 3)}`, accent: 'sky' },
          ],
          conclusion: `Relever cos φ vers 1 (compensation par condensateur) minimise les pertes en ligne pour un même travail.`,
          svg: { bar1: cosPhi * 100, bar2: 100, label1: 'P active', label2: 'S apparente' },
        };
      },
    },
    {
      id: 'pc-rlc-6',
      shortTitle: 'Oscillogramme u(t) & i(t)',
      title: 'Exp. 6 : Lecture de φ = 2π·Δt/T sur écran biface',
      goal: 'Mesurer le décalage temporel Δt entre u(t) et u_R(t) proportionnel à i(t).',
      formula: '|φ| = ω·Δt = 2π · (Δt / T)',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Période T', min: 2, max: 20, step: 1, defaultValue: 10, unit: 'ms' },
        { label: 'Décalage Δt', min: -4, max: 4, step: 0.25, defaultValue: 1.25, unit: 'ms' },
      ],
      evaluate: ([T, dt]) => {
        const phiRad = (2 * Math.PI * dt) / T;
        const phiDeg = (phiRad * 180) / Math.PI;
        return {
          headline: `φ = ${f(phiDeg, 1)}° = ${f(phiRad)} rad (${dt >= 0 ? 'u en avance' : 'u en retard'})`,
          metrics: [
            { label: 'Angle |φ|', value: `${f(Math.abs(phiDeg), 1)}°`, accent: 'amber' },
            { label: 'En radians', value: `${f(phiRad)} rad`, accent: 'sky' },
            { label: 'Ordre temporel', value: dt >= 0 ? 'u avance sur i' : 'i avance sur u', accent: 'emerald' },
          ],
          conclusion: `La tension u_R(t) = R·i(t) sert d’image fidèle en phase du courant i(t).`,
          svg: { lambda: 100, phaseDiff: phiRad, phi: phiRad },
        };
      },
    },
    {
      id: 'pc-rlc-7',
      shortTitle: 'Surtension aux bornes de C',
      title: 'Exp. 7 : Résonance de charge U_C = Q·U à Q > 1',
      goal: 'Calculer la tension maximale aux bornes du condensateur à la résonance.',
      formula: 'U_C(f₀) = I₀/(Cω₀) = (1/(Rω₀C)) U = Q · U',
      visualKind: 'rlc-fresnel',
      sliders: [
        { label: 'Tension générateur U', min: 2, max: 24, step: 1, defaultValue: 6, unit: 'V' },
        { label: 'Facteur Q', min: 0.5, max: 12, step: 0.5, defaultValue: 5, unit: '' },
      ],
      evaluate: ([U, Q]) => {
        const UC = Q * U;
        return {
          headline: `U_C(f₀) = U_L(f₀) = ${f(UC, 1)} V (soit ${f(Q, 1)}× U)`,
          metrics: [
            { label: 'Tension U_C max', value: `${f(UC, 1)} V`, accent: 'rose' },
            { label: 'Tension U_R', value: `${U} V`, accent: 'emerald' },
            { label: 'Surtension', value: Q > 1 ? 'Oui (U_C > U)' : 'Non', accent: 'amber' },
          ],
          conclusion: `Si Q = ${f(Q, 1)} > 1, la tension sur C dépasse celle du GBF : attention au claquage diélectrique.`,
          svg: { uR: U, uL: UC, uC: UC, phi: 0 },
        };
      },
    },
    {
      id: 'pc-rlc-8',
      shortTitle: 'Bobine réelle avec résistance r',
      title: 'Exp. 8 : Influence de la résistance interne r de la bobine',
      goal: 'Séparer U_R = R·I et U_b = I√(r² + (Lω)²) dans un TP RLC.',
      formula: 'R_tot = R + r  ;  U_b = I √(r² + L²ω²)  ;  P_bob = r·I²',
      visualKind: 'rlc-fresnel',
      sliders: [
        { label: 'R série', min: 10, max: 100, step: 5, defaultValue: 40, unit: 'Ω' },
        { label: 'r interne bobine', min: 0, max: 40, step: 2, defaultValue: 10, unit: 'Ω' },
        { label: 'Réactance Lω', min: 10, max: 150, step: 5, defaultValue: 60, unit: 'Ω' },
      ],
      evaluate: ([R, r, XL]) => {
        const Zb = Math.hypot(r, XL);
        const Ztot = Math.hypot(R + r, XL);
        const phiBob = (Math.atan2(XL, r) * 180) / Math.PI;
        return {
          headline: `Z_bob = ${f(Zb, 1)} Ω (φ_bob = ${f(phiBob, 1)}°) · Z_tot = ${f(Ztot, 1)} Ω`,
          metrics: [
            { label: 'Impédance bobine', value: `${f(Zb, 1)} Ω`, accent: 'amber' },
            { label: 'Déphasage bobine', value: `${f(phiBob, 1)}°`, accent: 'sky' },
            { label: 'Résistance totale', value: `${R + r} Ω`, accent: 'emerald' },
          ],
          conclusion: `À cause de r > 0, une bobine réelle présente un déphasage strictement inférieur à 90°.`,
          svg: { uR: R + r, uL: XL, uC: 0, phi: (Math.atan2(XL, R + r) * 180) / Math.PI },
        };
      },
    },
    {
      id: 'pc-rlc-9',
      shortTitle: 'Résonance mécanique forcée',
      title: 'Exp. 9 : Analogie électromécanique (m, k, h) ↔ (L, 1/C, R)',
      goal: 'Transposer l’amortissement fluide h et la raideur k à la résonance mécanique.',
      formula: 'f₀ = (1/2π)√(k/m)  ;  m ↔ L,  1/k ↔ C,  h ↔ R',
      visualKind: 'resonance-bell',
      sliders: [
        { label: 'Fréquence excitatrice', min: 0.5, max: 6, step: 0.1, defaultValue: 2.5, unit: 'Hz' },
        { label: 'Amortissement h', min: 0.2, max: 5, step: 0.2, defaultValue: 1, unit: 'kg/s' },
      ],
      evaluate: ([freq, h]) => {
        const m = 0.5;
        const k = 125;
        const f0 = Math.sqrt(k / m) / (2 * Math.PI);
        const Q = Math.sqrt(m * k) / h;
        const ratio = 1 / Math.hypot(1 - (freq / f0) ** 2, freq / (Q * f0));
        return {
          headline: `f₀ = ${f(f0)} Hz · Q = ${f(Q, 1)} · Gain X_m/X_stat = ${f(Math.min(10, ratio))}`,
          metrics: [
            { label: 'Fréquence propre f₀', value: `${f(f0)} Hz`, accent: 'amber' },
            { label: 'Facteur Q', value: `${f(Q, 1)}`, accent: 'sky' },
            { label: 'Amplitude relative', value: `${f(ratio)}`, accent: ratio > 2 ? 'rose' : 'emerald' },
          ],
          conclusion: `Si h est trop faible à f = f₀, l’amplitude diverge dangereusement (effet pont de Tacoma).`,
          svg: { freq, f0, Q, ratio: Math.min(1, ratio / Math.max(1, Q)) },
        };
      },
    },
    {
      id: 'pc-rlc-10',
      shortTitle: 'Accord radio & C variable',
      title: 'Exp. 10 : Synthèse BAC C — Tuner radio par condensateur variable',
      goal: 'Calculer C pour capter une station radio FM / AM à la fréquence f₀.',
      formula: 'C = 1 / (4π² L f₀²)',
      visualKind: 'resonance-bell',
      sliders: [
        { label: 'Fréquence cible f₀', min: 100, max: 1000, step: 50, defaultValue: 500, unit: 'kHz' },
        { label: 'Bobine L', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5, unit: 'mH' },
      ],
      evaluate: ([fKHz, LmH]) => {
        const fHz = fKHz * 1000;
        const L = LmH * 1e-3;
        const C = 1 / (4 * Math.PI * Math.PI * L * fHz * fHz);
        const CpF = C * 1e12;
        return {
          headline: `Capacité d’accord C = ${f(CpF, 1)} pF pour ${fKHz} kHz`,
          metrics: [
            { label: 'Capacité C', value: `${f(CpF, 1)} pF`, accent: 'emerald' },
            { label: 'Fréquence f₀', value: `${fKHz} kHz`, accent: 'sky' },
            { label: 'Inductance L', value: `${f(LmH, 1)} mH`, accent: 'amber' },
          ],
          conclusion: `En tournant le bouton du condensateur variable C, on déplace f₀ jusqu’à la station souhaitée.`,
          svg: { freq: fKHz, f0: fKHz, Q: 8, ratio: 1 },
        };
      },
    },
  ],

  // 7. ONDES MÉCANIQUES & DIFFRACTION (10)
  'physTc-ondes-mecaniques': [
    {
      id: 'pc-ond-1',
      shortTitle: 'Onde sur corde λ = v/N',
      title: 'Exp. 1 : Double périodicité spatiale (λ) et temporelle (T)',
      goal: 'Relier célérité v, fréquence N et longueur d’onde λ = v·T.',
      formula: 'λ = v / N = v · T',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Célérité v', min: 2, max: 30, step: 1, defaultValue: 12, unit: 'm/s' },
        { label: 'Fréquence N', min: 5, max: 50, step: 5, defaultValue: 20, unit: 'Hz' },
        { label: 'Amplitude a', min: 2, max: 20, step: 1, defaultValue: 10, unit: 'mm' },
      ],
      evaluate: ([v, N, amp]) => {
        const lam = v / N;
        const Tms = 1000 / N;
        return {
          headline: `λ = ${f(lam * 100, 1)} cm · Période T = ${f(Tms, 1)} ms`,
          metrics: [
            { label: 'Longueur d’onde λ', value: `${f(lam, 3)} m`, accent: 'sky' },
            { label: 'Période T', value: `${f(Tms, 1)} ms`, accent: 'amber' },
            { label: 'Vitesse trans. max', value: `${f(2 * Math.PI * N * (amp / 1000))} m/s`, accent: 'emerald' },
          ],
          conclusion: `Une onde transporte de l’énergie sans transport net de matière.`,
          svg: { lambda: lam * 100, amp, phaseDiff: 0 },
        };
      },
    },
    {
      id: 'pc-ond-2',
      shortTitle: 'Retard τ = d / v',
      title: 'Exp. 2 : État vibratoire d’un point M à distance d = vτ',
      goal: 'Comparer y_M(t) = y_S(t - d/v) et visualiser le front d’onde.',
      formula: 'τ = SM / v  |  y_M(t) = y_S(t - τ) si t ≥ τ, sinon 0',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Distance d = SM', min: 0.2, max: 4, step: 0.2, defaultValue: 1.6, unit: 'm' },
        { label: 'Célérité v', min: 1, max: 10, step: 0.5, defaultValue: 4, unit: 'm/s' },
        { label: 'Instant t', min: 0, max: 2, step: 0.1, defaultValue: 0.8, unit: 's' },
      ],
      evaluate: ([d, v, t]) => {
        const tau = d / v;
        const front = v * t;
        const reached = t >= tau;
        return {
          headline: `Retard τ = ${f(tau)} s · Front d’onde à x = ${f(front)} m`,
          metrics: [
            { label: 'Retard τ', value: `${f(tau)} s`, accent: 'amber' },
            { label: 'Position front', value: `${f(front)} m`, accent: 'sky' },
            { label: 'État de M', value: reached ? 'En vibration' : 'Au repos', accent: reached ? 'emerald' : 'rose' },
          ],
          conclusion: `M reproduit exactement le mouvement de la source S avec un retard τ = d/v.`,
          svg: { lambda: 80, phaseDiff: (tau * 2 * Math.PI) % (2 * Math.PI), frontRatio: Math.min(1, front / 4) },
        };
      },
    },
    {
      id: 'pc-ond-3',
      shortTitle: 'Points en phase / opposition',
      title: 'Exp. 3 : Déphasage Δφ = 2π d / λ entre M₁ et M₂',
      goal: 'Tester les conditions d = kλ (phase) et d = (k + ½)λ (opposition).',
      formula: 'Δφ = 2π (d / λ)  |  d/λ entier ⟹ en phase  |  demi-entier ⟹ opposition',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Distance d', min: 5, max: 120, step: 5, defaultValue: 60, unit: 'cm' },
        { label: 'Longueur d’onde λ', min: 10, max: 60, step: 5, defaultValue: 40, unit: 'cm' },
      ],
      presets: [
        { label: 'En phase (d = 2λ)', values: [80, 40] },
        { label: 'Opposition (d = 1,5λ)', values: [60, 40] },
      ],
      evaluate: ([d, lam]) => {
        const ratio = d / lam;
        const frac = ratio - Math.floor(ratio);
        const state = frac < 0.08 || frac > 0.92 ? 'En phase' : Math.abs(frac - 0.5) < 0.08 ? 'Opposition de phase' : 'Déphasés';
        const dPhi = (2 * Math.PI * d) / lam;
        return {
          headline: `d / λ = ${f(ratio)} ⟹ Points ${state}`,
          metrics: [
            { label: 'Rapport d / λ', value: `${f(ratio)}`, accent: 'amber' },
            { label: 'État relatif', value: state, accent: state === 'En phase' ? 'emerald' : state === 'Opposition de phase' ? 'rose' : 'sky' },
            { label: 'Déphasage Δφ', value: `${f(dPhi)} rad`, accent: 'sky' },
          ],
          conclusion: `Deux points distants de kλ vibrent exactement à l’unisson ; à (k + ½)λ ils sont toujours opposés.`,
          svg: { lambda: lam * 2, phaseDiff: dPhi },
        };
      },
    },
    {
      id: 'pc-ond-4',
      shortTitle: 'Tension corde v = √(F/μ)',
      title: 'Exp. 4 : Célérité le long d’une corde tendue',
      goal: 'Étudier l’influence de la tension F et de la masse linéique μ = m/L.',
      formula: 'v = √(F / μ)  avec  μ = m / L (kg/m)',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Tension F', min: 10, max: 200, step: 10, defaultValue: 80, unit: 'N' },
        { label: 'Masse linéique μ', min: 5, max: 100, step: 5, defaultValue: 20, unit: 'g/m' },
      ],
      evaluate: ([F, muGm]) => {
        const mu = muGm * 1e-3;
        const v = Math.sqrt(F / mu);
        return {
          headline: `Célérité sur la corde v = ${f(v, 1)} m/s`,
          metrics: [
            { label: 'Célérité v', value: `${f(v, 1)} m/s`, accent: 'emerald' },
            { label: 'μ en SI', value: `${f(mu, 4)} kg/m`, accent: 'sky' },
            { label: 'Temps sur 10 m', value: `${f(10 / v, 3)} s`, accent: 'amber' },
          ],
          conclusion: `Plus la corde est tendue (F grand) et fine (μ petit), plus l’onde s’y propage vite.`,
          svg: { lambda: Math.min(180, v * 1.5), phaseDiff: 0 },
        };
      },
    },
    {
      id: 'pc-ond-5',
      shortTitle: 'Stroboscopie & immobilité',
      title: 'Exp. 5 : Éclairage stroboscopique et mouvement apparent',
      goal: 'Prévoir l’immobilité apparente N = k·N_e ou le ralenti direct/rétrograde.',
      formula: 'Immobilité apparente : N = k · N_e  (N_e_max = N)',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Fréquence onde N', min: 20, max: 100, step: 5, defaultValue: 50, unit: 'Hz' },
        { label: 'Fréquence éclairs N_e', min: 10, max: 100, step: 1, defaultValue: 50, unit: 'Hz' },
      ],
      evaluate: ([N, Ne]) => {
        const ratio = N / Ne;
        const nearInt = Math.abs(ratio - Math.round(ratio)) < 0.02;
        const aspect = nearInt
          ? 'Immobilité apparente'
          : ratio > Math.floor(ratio) && ratio - Math.floor(ratio) < 0.5
          ? 'Ralenti sens direct'
          : 'Ralenti sens rétrograde';
        return {
          headline: `N / N_e = ${f(ratio, 3)} ⟹ ${aspect}`,
          metrics: [
            { label: 'Rapport N / N_e', value: `${f(ratio, 3)}`, accent: 'amber' },
            { label: 'Observation', value: aspect, accent: nearInt ? 'emerald' : 'sky' },
            { label: 'Plus haute N_e immob.', value: `${N} Hz`, accent: 'rose' },
          ],
          conclusion: `Si N_e est légèrement inférieure à N, l’onde semble avancer lentement dans le sens réel.`,
          svg: { lambda: 90, phaseDiff: (ratio % 1) * 2 * Math.PI },
        };
      },
    },
    {
      id: 'pc-ond-6',
      shortTitle: 'Cuve à ondes & interférences',
      title: 'Exp. 6 : Interférences mécaniques à la surface de l’eau',
      goal: 'Localiser les franges d’amplitude maximale |d₂ - d₁| = kλ et nulles (k+½)λ.',
      formula: 'Constructif : |d₂ - d₁| = kλ  |  Destructif (repos) : |d₂ - d₁| = (k + ½)λ',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Différence |d₂ - d₁|', min: 0, max: 12, step: 0.5, defaultValue: 4, unit: 'cm' },
        { label: 'Longueur d’onde λ', min: 1, max: 6, step: 0.5, defaultValue: 2, unit: 'cm' },
      ],
      evaluate: ([delta, lam]) => {
        const k = delta / lam;
        const frac = Math.abs(k - Math.round(k));
        const type = frac < 0.1 ? 'Ventres (amplitude 2a)' : Math.abs(Math.abs(k - Math.floor(k)) - 0.5) < 0.1 ? 'Nœuds (repos)' : 'Intermédiaire';
        return {
          headline: `|d₂ - d₁| / λ = ${f(k)} ⟹ ${type}`,
          metrics: [
            { label: 'Ordre k = δ/λ', value: `${f(k)}`, accent: 'amber' },
            { label: 'Régime au point M', value: type, accent: frac < 0.1 ? 'emerald' : 'rose' },
            { label: 'Nombre franges / cm', value: `${f(1 / lam)}`, accent: 'sky' },
          ],
          conclusion: `Les lieux d’amplitude nulle et maximale forment des branches d’hyperboles focales en S₁ et S₂.`,
          svg: { interfrange: lam * 8, delta, k },
        };
      },
    },
    {
      id: 'pc-ond-7',
      shortTitle: 'Diffraction laser θ = λ / a',
      title: 'Exp. 7 : Étalement de la tache centrale de diffraction',
      goal: 'Vérifier la loi inversement proportionnelle L = 2λD/a.',
      formula: 'θ = λ / a (rad)  et  L = 2 θ D = 2 λ D / a',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Largeur fente a', min: 0.05, max: 0.5, step: 0.05, defaultValue: 0.1, unit: 'mm' },
        { label: 'Longueur d’onde λ', min: 400, max: 700, step: 20, defaultValue: 632, unit: 'nm' },
        { label: 'Distance écran D', min: 1, max: 5, step: 0.5, defaultValue: 2, unit: 'm' },
      ],
      evaluate: ([aMm, lamNm, D]) => {
        const theta = (lamNm * 1e-9) / (aMm * 1e-3);
        const Lmm = 2 * theta * D * 1000;
        return {
          headline: `Largeur tache centrale L = ${f(Lmm, 1)} mm · θ = ${f(theta * 1000, 2)} mrad`,
          metrics: [
            { label: 'Tache centrale L', value: `${f(Lmm, 1)} mm`, accent: 'rose' },
            { label: 'Écart angulaire θ', value: `${f(theta * 1000, 2)} mrad`, accent: 'amber' },
            { label: 'Aspect direction', value: 'Perpendiculaire à la fente', accent: 'sky' },
          ],
          conclusion: `Plus la fente a est étroite, plus la tache de diffraction L s’élargit perpendiculairement à la fente.`,
          svg: { interfrange: Math.min(60, Lmm * 1.4), delta: 0, k: 0, lamNm },
        };
      },
    },
    {
      id: 'pc-ond-8',
      shortTitle: 'Ondes stationnaires & harmoniques',
      title: 'Exp. 8 : Fuseaux de Melde sur corde fixée aux 2 bouts',
      goal: 'Déterminer le nombre de fuseaux n = 2L / λ et les fréquences propres f_n.',
      formula: 'L = n · (λ / 2)  ⟹  f_n = n · f₁ = n · v / (2L)',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Rang harmonique n', min: 1, max: 6, step: 1, defaultValue: 3, unit: 'fuseaux' },
        { label: 'Longueur corde L', min: 0.5, max: 2.5, step: 0.1, defaultValue: 1.2, unit: 'm' },
        { label: 'Célérité v', min: 10, max: 80, step: 5, defaultValue: 36, unit: 'm/s' },
      ],
      evaluate: ([n, L, v]) => {
        const lam = (2 * L) / n;
        const fn = (n * v) / (2 * L);
        return {
          headline: `n = ${n} fuseaux · λ = ${f(lam)} m · f_${n} = ${f(fn, 1)} Hz`,
          metrics: [
            { label: 'Fréquence f_n', value: `${f(fn, 1)} Hz`, accent: 'amber' },
            { label: 'Longueur d’onde λ', value: `${f(lam)} m`, accent: 'sky' },
            { label: 'Nœuds (extrémités incl.)', value: `${n + 1}`, accent: 'emerald' },
          ],
          conclusion: `Entre deux nœuds consécutifs la distance vaut exactement λ/2.`,
          svg: { lambda: (280 / n), phaseDiff: 0, standingN: n },
        };
      },
    },
    {
      id: 'pc-ond-9',
      shortTitle: 'Prisme & dispersion n(λ)',
      title: 'Exp. 9 : Réfraction différentielle dans un milieu dispersif',
      goal: 'Observer la déviation plus forte du violet par rapport au rouge.',
      formula: 'v(λ) = c / n(λ)  ;  n_violet > n_rouge  ⟹  D_violet > D_rouge',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Longueur d’onde λ', min: 400, max: 700, step: 25, defaultValue: 550, unit: 'nm' },
        { label: 'Indice base n₀', min: 1.45, max: 1.75, step: 0.05, defaultValue: 1.5, unit: '' },
      ],
      evaluate: ([lamNm, n0]) => {
        const lamUm = lamNm / 1000;
        const n = n0 + 0.008 / (lamUm * lamUm);
        const vKmS = 300000 / n;
        return {
          headline: `À λ = ${lamNm} nm : n = ${f(n, 4)} · v = ${f(vKmS, 0)} km/s`,
          metrics: [
            { label: 'Indice optique n(λ)', value: `${f(n, 4)}`, accent: 'purple' },
            { label: 'Vitesse dans le verre', value: `${f(vKmS, 0)} km/s`, accent: 'sky' },
            { label: 'Couleur spectrale', value: lamNm < 470 ? 'Violet/Bleu' : lamNm < 580 ? 'Vert/Jaune' : 'Orange/Rouge', accent: 'amber' },
          ],
          conclusion: `Dans le verre, la fréquence ν reste invariante mais λ_milieu = λ₀/n et v = c/n diminuent.`,
          svg: { lambda: lamNm / 6, phaseDiff: (n - 1.4) * 3 },
        };
      },
    },
    {
      id: 'pc-ond-10',
      shortTitle: 'Mesure ultrasonore & sonar',
      title: 'Exp. 10 : Synthèse BAC C — Télémétrie par écho ultrasonore',
      goal: 'Calculer une distance d = v·Δt / 2 par réflexion d’une salve ultrasonore.',
      formula: 'Aller-retour : 2d = v · Δt  ⟹  d = v · Δt / 2',
      visualKind: 'wave-train',
      sliders: [
        { label: 'Durée écho Δt', min: 0.5, max: 20, step: 0.5, defaultValue: 6, unit: 'ms' },
        { label: 'Milieu (v son)', min: 340, max: 1500, step: 1160, defaultValue: 340, unit: 'm/s' },
      ],
      presets: [
        { label: 'Dans l’air (340 m/s)', values: [6, 340] },
        { label: 'Dans l’eau (1500 m/s)', values: [6, 1500] },
      ],
      evaluate: ([dtMs, v]) => {
        const d = (v * (dtMs * 1e-3)) / 2;
        return {
          headline: `Distance obstacle d = ${f(d)} m (aller-retour en ${dtMs} ms)`,
          metrics: [
            { label: 'Distance d', value: `${f(d)} m`, accent: 'emerald' },
            { label: 'Célérité milieu', value: `${v} m/s`, accent: 'sky' },
            { label: 'λ à 40 kHz', value: `${f((v / 40000) * 1000, 2)} mm`, accent: 'amber' },
          ],
          conclusion: `Ne jamais oublier le facteur ½ : l’onde parcourt l’aller et le retour avant d’être captée.`,
          svg: { lambda: 60, phaseDiff: 0, frontRatio: Math.min(1, dtMs / 20) },
        };
      },
    },
  ],
};
