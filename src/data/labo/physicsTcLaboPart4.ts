import { PhysicsLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const PHYSICS_TC_LABO_PART4: Record<string, PhysicsLaboExpSpec[]> = {
  // 11. CINÉTIQUE CHIMIQUE & CATALYSE (10)
  'physTc-cinetique-chimique': [
    {
      id: 'pc-cinch-1',
      shortTitle: 'Vitesse volumique v(t)',
      title: 'Exp. 1 : Vitesse instantanée v = (1/V)·(dx/dt) par tangente',
      goal: 'Observer la décroissance progressive de la pente de x(t) au cours du temps.',
      formula: 'v(t) = (1/V_sol) · (dx / dt)  (en mol·L⁻¹·min⁻¹)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Constante cinétique k', min: 0.05, max: 0.4, step: 0.05, defaultValue: 0.15, unit: 'min⁻¹' },
        { label: 'Instant t', min: 0, max: 25, step: 1, defaultValue: 5, unit: 'min' },
        { label: 'Avancement max x_max', min: 10, max: 50, step: 5, defaultValue: 20, unit: 'mmol' },
      ],
      evaluate: ([k, t, xmax]) => {
        const x = xmax * (1 - Math.exp(-k * t));
        const dxdt = k * xmax * Math.exp(-k * t);
        const vVol = dxdt / 0.1;
        return {
          headline: `À t = ${t} min : x = ${f(x)} mmol · v(t) = ${f(vVol, 1)} mmol/(L·min)`,
          metrics: [
            { label: 'Avancement x(t)', value: `${f(x)} mmol`, accent: 'sky' },
            { label: 'Vitesse v(t) (V=0,1L)', value: `${f(vVol, 1)} mmol/L/min`, accent: 'amber' },
            { label: 'Temps demi-réaction', value: `${f(Math.LN2 / k, 1)} min`, accent: 'emerald' },
          ],
          conclusion: `La vitesse diminue continuellement car la concentration des réactifs diminue au fil de la réaction.`,
          svg: { t, tHalf: Math.LN2 / k, kRate: k, ratio: x / xmax },
        };
      },
    },
    {
      id: 'pc-cinch-2',
      shortTitle: 'Temps de demi-réaction t₁/₂',
      title: 'Exp. 2 : Repérage graphique de t₁/₂ tel que x(t₁/₂) = x_f / 2',
      goal: 'Déterminer t₁/₂ sur une courbe cinétique exponentielle ou d’ordre 1.',
      formula: 'x(t₁/₂) = x_f / 2  ⟹  Pour ordre 1 : t₁/₂ = ln(2) / k (indépendant de C₀)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Vitesse initiale k', min: 0.04, max: 0.5, step: 0.02, defaultValue: 0.14, unit: 'min⁻¹' },
        { label: 'Avancement final x_f', min: 10, max: 100, step: 5, defaultValue: 40, unit: 'mmol' },
      ],
      evaluate: ([k, xf]) => {
        const tHalf = Math.LN2 / k;
        return {
          headline: `t₁/₂ = ${f(tHalf, 2)} min (pour x = ${f(xf / 2, 1)} mmol)`,
          metrics: [
            { label: 't₁/₂', value: `${f(tHalf, 2)} min`, accent: 'amber' },
            { label: 'À 2·t₁/₂', value: `${f(0.75 * xf, 1)} mmol (75%)`, accent: 'sky' },
            { label: 'À 5·t₁/₂ (~fin)', value: `${f(0.969 * xf, 1)} mmol (97%)`, accent: 'emerald' },
          ],
          conclusion: `En pratique, la réaction est considérée comme terminée au bout de 5 à 7 fois t₁/₂.`,
          svg: { t: tHalf, tHalf, kRate: k, ratio: 0.5 },
        };
      },
    },
    {
      id: 'pc-cinch-3',
      shortTitle: 'Effet de la température T',
      title: 'Exp. 3 : Loi d’Arrhenius k(T) et accélération thermique',
      goal: 'Quantifier le doublement ou triplement de la vitesse tous les +10 °C.',
      formula: 'k(T) = A · e^(-E_a / RT)  ⟹  T ↑ ⟹ k ↑ et t₁/₂ ↓',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Température T', min: 10, max: 80, step: 5, defaultValue: 40, unit: '°C' },
      ],
      presets: [
        { label: 'Bain glacé (10 °C)', values: [10] },
        { label: 'Bain-marie (70 °C)', values: [70] },
      ],
      evaluate: ([T]) => {
        const factor = Math.pow(2, (T - 20) / 10);
        const tHalf = 12 / factor;
        return {
          headline: `À ${T} °C : vitesse ×${f(factor, 2)} (vs 20 °C) · t₁/₂ = ${f(tHalf, 2)} min`,
          metrics: [
            { label: 'Facteur vitesse', value: `×${f(factor, 2)}`, accent: 'rose' },
            { label: 'Temps t₁/₂', value: `${f(tHalf, 2)} min`, accent: 'amber' },
            { label: 'x_f final', value: 'Inchangé', accent: 'emerald' },
          ],
          conclusion: `La température accélère l’atteinte de l’état final sans modifier l’avancement maximal x_f.`,
          svg: { t: 5, tHalf, kRate: 0.06 * factor, ratio: 1 - Math.exp(-0.06 * factor * 5) },
        };
      },
    },
    {
      id: 'pc-cinch-4',
      shortTitle: 'Effet de concentration initiale',
      title: 'Exp. 4 : Fréquence des chocs efficaces et concentration C₀',
      goal: 'Comparer l’évolution quand on double la concentration initiale d’un réactif en défaut ou excès.',
      formula: 'C₀ ↑ ⟹ fréquence des chocs ↑ ⟹ v₀ ↑ et t₁/₂ ↓ (ordre 2) ou = (ordre 1)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Concentration C₀', min: 0.1, max: 2.0, step: 0.1, defaultValue: 0.5, unit: 'mol/L' },
      ],
      evaluate: ([C0]) => {
        const v0 = 0.4 * C0 * C0;
        const tHalf = 2.5 / C0;
        return {
          headline: `C₀ = ${f(C0, 1)} mol/L ⟹ v₀ = ${f(v0)} mol/L/min · t₁/₂ = ${f(tHalf, 1)} min`,
          metrics: [
            { label: 'Vitesse initiale v₀', value: `${f(v0)}`, accent: 'amber' },
            { label: 't₁/₂ (ordre 2)', value: `${f(tHalf, 1)} min`, accent: 'sky' },
            { label: 'Dilution (trempe)', value: 'Stoppe la réaction', accent: 'emerald' },
          ],
          conclusion: `Pour réaliser une trempe chimique lors d’un titrage, on refroidit ET on dilue fortement dans l’eau glacée.`,
          svg: { t: 4, tHalf, kRate: 0.15 * C0, ratio: 1 - Math.exp(-0.6 * C0) },
        };
      },
    },
    {
      id: 'pc-cinch-5',
      shortTitle: 'Catalyse homogène / hétérogène',
      title: 'Exp. 5 : Action du catalyseur sur l’énergie d’activation E_a',
      goal: 'Visualiser l’abaissement de la barrière énergétique E_a sans modifier Δ_r H ni x_f.',
      formula: 'Catalyseur : E_a(cat) < E_a(sans)  ⟹  k ↑, régénéré en fin de bilan',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Énergie E_a sans cat.', min: 40, max: 120, step: 5, defaultValue: 80, unit: 'kJ/mol' },
        { label: 'Réduction catalytique', min: 0, max: 50, step: 5, defaultValue: 25, unit: 'kJ/mol' },
      ],
      evaluate: ([Ea, red]) => {
        const EaCat = Math.max(15, Ea - red);
        const speedBoost = Math.exp((red * 1000) / (8.314 * 298));
        return {
          headline: `E_a passe de ${Ea} à ${EaCat} kJ/mol ⟹ Accélération ×${speedBoost > 1000 ? speedBoost.toExponential(1) : f(speedBoost, 0)}`,
          metrics: [
            { label: 'Barrière sans cat.', value: `${Ea} kJ/mol`, accent: 'rose' },
            { label: 'Barrière avec cat.', value: `${EaCat} kJ/mol`, accent: 'emerald' },
            { label: 'État final x_f', value: 'Strictement identique', accent: 'sky' },
          ],
          conclusion: `Un catalyseur (Fe²⁺, Pt, enzyme catalase) modifie le mécanisme mais n’apparaît pas dans l’équation-bilan.`,
          svg: { bar1: (Ea / 120) * 100, bar2: (EaCat / 120) * 100, label1: 'Sans cat.', label2: 'Catalysé' },
        };
      },
    },
    {
      id: 'pc-cinch-6',
      shortTitle: 'Suivi par titrage après trempe',
      title: 'Exp. 6 : Dosage de I₂ formé (H₂O₂ + 2 I⁻ + 2 H₃O⁺ → I₂ + 4 H₂O)',
      goal: 'Relier le volume équivalent V_E de thiosulfate S₂O₃²⁻ à x(t).',
      formula: 'n(I₂) = ½ C_thio · V_E  ⟹  x(t) = (V_tot / V_prise) · ½ C_thio · V_E',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Volume V_E mesuré', min: 1, max: 20, step: 0.5, defaultValue: 10, unit: 'mL' },
        { label: 'C_thio (S₂O₃²⁻)', min: 0.02, max: 0.2, step: 0.02, defaultValue: 0.1, unit: 'mol/L' },
      ],
      evaluate: ([VE, C]) => {
        const nPriseMmol = 0.5 * C * VE;
        const xTotMmol = nPriseMmol * 10;
        return {
          headline: `V_E = ${f(VE, 1)} mL ⟹ n(I₂) prise = ${f(nPriseMmol, 3)} mmol (x_tot = ${f(xTotMmol, 2)} mmol)`,
          metrics: [
            { label: 'x(t) dans prélèvement', value: `${f(nPriseMmol, 3)} mmol`, accent: 'sky' },
            { label: 'x(t) dans 100 mL', value: `${f(xTotMmol, 2)} mmol`, accent: 'emerald' },
            { label: 'Indicateur fin dosage', value: 'Empois d’amidon', accent: 'amber' },
          ],
          conclusion: `Chaque prélèvement de 10 mL est plongé dans de l’eau glacée pour bloquer l’évolution pendant le titrage.`,
          svg: { t: VE, tHalf: 10, kRate: 0.12, ratio: Math.min(1, VE / 20) },
        };
      },
    },
    {
      id: 'pc-cinch-7',
      shortTitle: 'Suivi conductimétrique σ(t)',
      title: 'Exp. 7 : Hydrolyse du 2-chloro-2-méthylpropane (R-Cl → R-OH + H⁺ + Cl⁻)',
      goal: 'Déduire x(t) = x_f · σ(t)/σ_∞ à partir de l’apparition d’ions.',
      formula: 'σ(t) = (λ_{H⁺} + λ_{Cl⁻}) · [x(t) / V]  ⟹  x(t) / x_f = σ(t) / σ_f',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Conductivité σ(t)', min: 0, max: 8.5, step: 0.5, defaultValue: 4.25, unit: 'mS/cm' },
        { label: 'Conductivité finale σ_f', min: 6, max: 12, step: 0.5, defaultValue: 8.5, unit: 'mS/cm' },
      ],
      evaluate: ([sig, sigF]) => {
        const ratio = Math.min(1, sig / sigF);
        return {
          headline: `Avancement relatif x(t)/x_f = σ/σ_f = ${f(ratio * 100, 1)} %`,
          metrics: [
            { label: 'Taux d’avancement', value: `${f(ratio * 100, 1)} %`, accent: 'emerald' },
            { label: 'Ion majoritaire', value: 'H₃O⁺ (λ = 35 mS·m²/mol)', accent: 'amber' },
            { label: 'Avantage méthode', value: 'Mesure continue non destructive', accent: 'sky' },
          ],
          conclusion: `Lorsque σ(t) vaut σ_f / 2, on lit directement le temps de demi-réaction t₁/₂.`,
          svg: { t: ratio * 15, tHalf: 4.5, kRate: 0.16, ratio },
        };
      },
    },
    {
      id: 'pc-cinch-8',
      shortTitle: 'Suivi pressiométrique P(t)',
      title: 'Exp. 8 : Dégagement gazeux Mg + 2 H₃O⁺ → Mg²⁺ + H₂(g)',
      goal: 'Relier la surpression ΔP = P(t) - P₀ à la quantité de H₂ produite.',
      formula: 'n(H₂) = (ΔP · V_gaz) / (R · T) = x(t)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Surpression ΔP', min: 0, max: 400, step: 20, defaultValue: 200, unit: 'hPa' },
        { label: 'Volume gazeux V', min: 100, max: 500, step: 50, defaultValue: 250, unit: 'mL' },
      ],
      evaluate: ([dPhPa, Vml]) => {
        const nH2Mmol = ((dPhPa * 100) * (Vml * 1e-6) / (8.314 * 298)) * 1000;
        return {
          headline: `ΔP = ${dPhPa} hPa ⟹ x(t) = n(H₂) = ${f(nH2Mmol, 2)} mmol`,
          metrics: [
            { label: 'Gaz produit n(H₂)', value: `${f(nH2Mmol, 2)} mmol`, accent: 'sky' },
            { label: 'Volume molaire (25°C)', value: '24,8 L/mol', accent: 'amber' },
            { label: 'Pression totale', value: `${1013 + dPhPa} hPa`, accent: 'emerald' },
          ],
          conclusion: `La loi des gaz parfaits PV = nRT permet un suivi continu dès qu’un gaz est formé ou consommé.`,
          svg: { t: dPhPa / 40, tHalf: 5, kRate: 0.14, ratio: dPhPa / 400 },
        };
      },
    },
    {
      id: 'pc-cinch-9',
      shortTitle: 'Autocatalyse (Mn²⁺ dans MnO₄⁻)',
      title: 'Exp. 9 : Point d’inflexion cinétique par autocatalyse',
      goal: 'Expliquer pourquoi la décoloration du permanganate s’accélère après un démarrage lent.',
      formula: '2 MnO₄⁻ + 5 H₂C₂O₄ + 6 H₃O⁺ ⟶ 2 Mn²⁺ + 10 CO₂ + 14 H₂O (Mn²⁺ catalyse)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Ajout initial de Mn²⁺', min: 0, max: 5, step: 1, defaultValue: 0, unit: 'gouttes' },
        { label: 'Instant t', min: 0, max: 20, step: 1, defaultValue: 6, unit: 'min' },
      ],
      evaluate: ([drops, t]) => {
        const accel = drops > 0 ? 1 + drops * 0.45 : t > 4 ? 1.8 : 0.3;
        const pct = Math.min(100, (1 / (1 + Math.exp(-(t - (7 - drops)) * 0.8))) * 100);
        return {
          headline: drops === 0 ? `Sans Mn²⁺ initial : démarrage lent puis accélération (${f(pct, 0)} %)` : `Avec ${drops} gouttes Mn²⁺ : décoloration rapide (${f(pct, 0)} %)`,
          metrics: [
            { label: 'Avancement estimé', value: `${f(pct, 0)} %`, accent: 'purple' },
            { label: 'Espèce catalytique', value: 'Ions Mn²⁺ formés', accent: 'amber' },
            { label: 'Régime cinétique', value: accel > 1 ? 'Accéléré' : 'Latence', accent: 'emerald' },
          ],
          conclusion: `Un produit de la réaction (Mn²⁺) joue lui-même le rôle de catalyseur : c’est l’autocatalyse.`,
          svg: { t, tHalf: Math.max(2, 7 - drops), kRate: 0.25, ratio: pct / 100 },
        };
      },
    },
    {
      id: 'pc-cinch-10',
      shortTitle: 'Vitesse moyenne vs instantanée',
      title: 'Exp. 10 : Synthèse BAC C — Calcul comparé entre t₁ et t₂',
      goal: 'Comparer sécante v_moy = Δx/(V·Δt) et tangente v(t) à l’instant milieu.',
      formula: 'v_moy(t₁,t₂) = [x(t₂) - x(t₁)] / [V · (t₂ - t₁)]',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Borne t₁', min: 0, max: 10, step: 1, defaultValue: 2, unit: 'min' },
        { label: 'Borne t₂', min: 4, max: 20, step: 1, defaultValue: 10, unit: 'min' },
      ],
      evaluate: ([t1, t2raw]) => {
        const t2 = Math.max(t1 + 2, t2raw);
        const x1 = 40 * (1 - Math.exp(-0.15 * t1));
        const x2 = 40 * (1 - Math.exp(-0.15 * t2));
        const vMoy = (x2 - x1) / (0.2 * (t2 - t1));
        const tMid = (t1 + t2) / 2;
        const vMid = (40 * 0.15 * Math.exp(-0.15 * tMid)) / 0.2;
        return {
          headline: `v_moy([${t1};${t2}]) = ${f(vMoy)} mmol/L/min · v(${f(tMid, 1)}) = ${f(vMid)}`,
          metrics: [
            { label: 'Vitesse moyenne', value: `${f(vMoy)} mmol/L/min`, accent: 'sky' },
            { label: 'Vitesse instantanée t_m', value: `${f(vMid)} mmol/L/min`, accent: 'emerald' },
            { label: 'Écart relatif', value: `${f(Math.abs(vMoy - vMid) / vMid * 100, 1)} %`, accent: 'amber' },
          ],
          conclusion: `Plus l’intervalle [t₁ ; t₂] est court, plus la vitesse moyenne tend vers la vitesse instantanée.`,
          svg: { t: tMid, tHalf: 4.6, kRate: 0.15, ratio: 1 - Math.exp(-0.15 * tMid) },
        };
      },
    },
  ],

  // 12. ACIDES, BASES, pH & DOSAGES (10)
  'physTc-acides-bases-ph': [
    {
      id: 'pc-ph-1',
      shortTitle: 'pH = -log[H₃O⁺] & Ke',
      title: 'Exp. 1 : Échelle des pH et produit ionique de l’eau K_e',
      goal: 'Convertir pH, [H₃O⁺] et [OH⁻] à 25 °C (K_e = 10⁻¹⁴) ou à chaud.',
      formula: 'pH = -log[H₃O⁺]  ⟺  [H₃O⁺] = 10^(-pH)  |  [H₃O⁺][OH⁻] = K_e',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'pH mesuré', min: 1.0, max: 13.0, step: 0.2, defaultValue: 3.4, unit: '' },
      ],
      evaluate: ([pH]) => {
        const h3o = Math.pow(10, -pH);
        const oh = Math.pow(10, -(14 - pH));
        const nature = pH < 6.8 ? 'Acide' : pH > 7.2 ? 'Basique' : 'Neutre';
        return {
          headline: `pH = ${f(pH, 1)} ⟹ [H₃O⁺] = ${h3o.toExponential(2)} mol/L (${nature})`,
          metrics: [
            { label: '[H₃O⁺]', value: `${h3o.toExponential(2)} M`, accent: 'rose' },
            { label: '[OH⁻] (25°C)', value: `${oh.toExponential(2)} M`, accent: 'sky' },
            { label: 'Milieu à 25 °C', value: nature, accent: 'emerald' },
          ],
          conclusion: `Diminuer le pH d’une unité multiplie la concentration en ions oxonium H₃O⁺ par 10.`,
          svg: { pH, Vb: pH, Vbe: 7, pKa: 7, ratio: pH / 14 },
        };
      },
    },
    {
      id: 'pc-ph-2',
      shortTitle: 'Acide fort vs Acide faible',
      title: 'Exp. 2 : Taux d’avancement final τ = [H₃O⁺]/C',
      goal: 'Comparer HCl (total, pH = -log C) et CH₃COOH (partiel, pH > -log C).',
      formula: 'Acide fort : τ = 1  |  Acide faible : τ = 10^(-pH) / C < 1',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'Concentration C', min: 0.001, max: 0.1, step: 0.005, defaultValue: 0.01, unit: 'mol/L' },
        { label: 'pK_a acide faible', min: 2.0, max: 6.0, step: 0.2, defaultValue: 4.8, unit: '' },
      ],
      evaluate: ([C, pKa]) => {
        const pHStrong = -Math.log10(C);
        const Ka = Math.pow(10, -pKa);
        const hWeak = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * C)) / 2;
        const pHWeak = -Math.log10(hWeak);
        const tauPct = (hWeak / C) * 100;
        return {
          headline: `Acide fort : pH = ${f(pHStrong)} · Acide faible : pH = ${f(pHWeak)} (τ = ${f(tauPct, 1)} %)`,
          metrics: [
            { label: 'pH acide fort', value: `${f(pHStrong)}`, accent: 'rose' },
            { label: 'pH acide faible', value: `${f(pHWeak)}`, accent: 'amber' },
            { label: 'Dissociation τ', value: `${f(tauPct, 1)} %`, accent: 'sky' },
          ],
          conclusion: `Plus un acide faible est dilué, plus son taux d’ionisation τ augmente (loi de dilution d’Ostwald).`,
          svg: { pH: pHWeak, Vb: tauPct / 10, Vbe: 10, pKa, ratio: tauPct / 100 },
        };
      },
    },
    {
      id: 'pc-ph-3',
      shortTitle: 'Dilution par 10',
      title: 'Exp. 3 : Effet de la dilution (×10) sur le pH',
      goal: 'Vérifier ΔpH = +1 (acide fort) vs ΔpH ≈ +0,5 (acide faible) vs ΔpH ≈ 0 (tampon).',
      formula: 'Fort : pH’ = pH + log(f_dil)  |  Faible (τ≪1) : pH’ ≈ pH + ½ log(f_dil)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Facteur dilution F', min: 2, max: 100, step: 2, defaultValue: 10, unit: '×' },
      ],
      evaluate: ([F]) => {
        const dStrong = Math.log10(F);
        const dWeak = 0.5 * Math.log10(F);
        return {
          headline: `Dilution ×${F} : ΔpH(fort) = +${f(dStrong)} · ΔpH(faible) ≈ +${f(dWeak)}`,
          metrics: [
            { label: 'Hausse pH fort', value: `+${f(dStrong)}`, accent: 'rose' },
            { label: 'Hausse pH faible', value: `+${f(dWeak)}`, accent: 'amber' },
            { label: 'Solution tampon', value: '≈ +0,00 (résiste)', accent: 'emerald' },
          ],
          conclusion: `Une solution tampon conserve son pH presque constant même après dilution modérée.`,
          svg: { bar1: Math.min(100, dStrong * 45), bar2: Math.min(100, dWeak * 45), label1: 'Ac. fort', label2: 'Ac. faible' },
        };
      },
    },
    {
      id: 'pc-ph-4',
      shortTitle: 'Diagramme de prédominance',
      title: 'Exp. 4 : Loi d’Henderson pH = pK_a + log([A⁻]/[AH])',
      goal: 'Identifier l’espèce majoritaire selon la position de pH par rapport à pK_a.',
      formula: 'pH = pK_a + log([Base] / [Acide])',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'pH du milieu', min: 1, max: 12, step: 0.2, defaultValue: 4.8, unit: '' },
        { label: 'pK_a du couple', min: 2, max: 10, step: 0.2, defaultValue: 4.8, unit: '' },
      ],
      evaluate: ([pH, pKa]) => {
        const ratio = Math.pow(10, pH - pKa);
        const pctBase = (ratio / (1 + ratio)) * 100;
        const pctAcid = 100 - pctBase;
        return {
          headline: `Base A⁻ = ${f(pctBase, 1)} % · Acide AH = ${f(pctAcid, 1)} %`,
          metrics: [
            { label: '% Acide AH', value: `${f(pctAcid, 1)} %`, accent: 'rose' },
            { label: '% Base A⁻', value: `${f(pctBase, 1)} %`, accent: 'sky' },
            { label: 'Prédominance', value: Math.abs(pH - pKa) < 0.15 ? 'Égalité 50/50' : pH < pKa ? 'AH majoritaire' : 'A⁻ majoritaire', accent: 'emerald' },
          ],
          conclusion: `Pour pH = pK_a, on a exactement [AH] = [A⁻] (point de demi-équivalence lors d’un titrage).`,
          svg: { bar1: pctAcid, bar2: pctBase, label1: 'Acide AH', label2: 'Base A⁻' },
        };
      },
    },
    {
      id: 'pc-ph-5',
      shortTitle: 'Titrage Acide Fort / Base Forte',
      title: 'Exp. 5 : Saut de pH abrupt et équivalence à pH = 7',
      goal: 'Suivre la courbe pH(V_b) lors du dosage de HCl par NaOH.',
      formula: 'C_a V_a = C_b V_{bE}  et  pH_E = 7,0 (à 25 °C)',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'Volume versé V_b', min: 0, max: 25, step: 0.5, defaultValue: 12, unit: 'mL' },
        { label: 'Volume équiv. V_{bE}', min: 8, max: 18, step: 1, defaultValue: 12, unit: 'mL' },
      ],
      evaluate: ([Vb, Vbe]) => {
        const Ca = 0.05;
        const Va = 20;
        const Cb = (Ca * Va) / Vbe;
        let pH = 7;
        if (Vb < Vbe - 0.05) {
          pH = -Math.log10((Ca * Va - Cb * Vb) / (Va + Vb));
        } else if (Vb > Vbe + 0.05) {
          pH = 14 + Math.log10((Cb * Vb - Ca * Va) / (Va + Vb));
        }
        return {
          headline: `V_b = ${f(Vb, 1)} mL ⟹ pH = ${f(pH, 2)} (V_{bE} = ${Vbe} mL)`,
          metrics: [
            { label: 'pH solution', value: `${f(pH, 2)}`, accent: pH < 6 ? 'rose' : pH > 8 ? 'sky' : 'emerald' },
            { label: 'Titre base C_b', value: `${f(Cb, 3)} mol/L`, accent: 'amber' },
            { label: 'Indicateur optimal', value: 'BBT (6,0 - 7,6)', accent: 'purple' },
          ],
          conclusion: `Au voisinage de V_{bE}, une seule goutte (0,05 mL) fait bondir le pH de ~3,5 à ~10,5.`,
          svg: { pH, Vb, Vbe, pKa: 7, ratio: Vb / 25, strong: 1 },
        };
      },
    },
    {
      id: 'pc-ph-6',
      shortTitle: 'Titrage Acide Faible / Base Forte',
      title: 'Exp. 6 : Demi-équivalence (pH = pK_a) et pH_E > 7',
      goal: 'Lire pK_a en V_b = V_{bE}/2 et justifier le caractère basique à l’équivalence.',
      formula: 'À V_b = V_{bE}/2 : pH = pK_a  |  À V_b = V_{bE} : pH_E > 7 (base A⁻)',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'Volume versé V_b', min: 0, max: 24, step: 0.5, defaultValue: 6, unit: 'mL' },
        { label: 'pK_a acide dosé', min: 3.2, max: 5.8, step: 0.2, defaultValue: 4.8, unit: '' },
      ],
      presets: [
        { label: 'Demi-équiv. (V_b=6 mL)', values: [6, 4.8] },
        { label: 'Équivalence (V_b=12 mL)', values: [12, 4.8] },
      ],
      evaluate: ([Vb, pKa]) => {
        const Vbe = 12;
        let pH = pKa;
        if (Vb === 0) pH = 0.5 * (pKa + 1.3);
        else if (Vb < Vbe - 0.1) pH = pKa + Math.log10(Vb / (Vbe - Vb));
        else if (Math.abs(Vb - Vbe) <= 0.1) pH = 7 + 0.5 * (pKa + Math.log10(0.025));
        else pH = 14 + Math.log10(((Vb - Vbe) * 0.083) / (20 + Vb));
        return {
          headline: `V_b = ${f(Vb, 1)} mL (V_bE = 12) ⟹ pH = ${f(pH, 2)}`,
          metrics: [
            { label: 'pH mesuré', value: `${f(pH, 2)}`, accent: 'amber' },
            { label: 'pH à V_{bE}/2', value: `${f(pKa, 1)} (= pK_a)`, accent: 'emerald' },
            { label: 'Indicateur coloré', value: 'Phénolphtaléine (8,2-10)', accent: 'rose' },
          ],
          conclusion: `La présence de la base faible conjuguée A⁻ à l’équivalence rend pH_E basique (~8,5) : on choisit la phénolphtaléine.`,
          svg: { pH, Vb, Vbe, pKa, ratio: Vb / 24, strong: 0 },
        };
      },
    },
    {
      id: 'pc-ph-7',
      shortTitle: 'Préparation solution tampon',
      title: 'Exp. 7 : Mélange équimolaire AH + A⁻ (pouvoir tampon)',
      goal: 'Calculer les volumes V_a et V_b d’acide faible et de base conjuguée pour fixer un pH cible.',
      formula: 'Tampon idéal : [AH] = [A⁻] ⟹ pH = pK_a',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Volume acide AH (0,1M)', min: 10, max: 90, step: 5, defaultValue: 50, unit: 'mL' },
        { label: 'pK_a du couple', min: 3.5, max: 9.2, step: 0.1, defaultValue: 4.8, unit: '' },
      ],
      evaluate: ([Va, pKa]) => {
        const Vb = 100 - Va;
        const pH = pKa + Math.log10(Vb / Va);
        const goodBuffer = Math.abs(pH - pKa) <= 1;
        return {
          headline: `${Va} mL AH + ${Vb} mL A⁻ ⟹ pH = ${f(pH, 2)}`,
          metrics: [
            { label: 'pH obtenu', value: `${f(pH, 2)}`, accent: 'amber' },
            { label: 'Rapport [A⁻]/[AH]', value: `${f(Vb / Va)}`, accent: 'sky' },
            { label: 'Efficacité tampon', value: goodBuffer ? 'Optimale (pK_a ± 1)' : 'Faible', accent: goodBuffer ? 'emerald' : 'rose' },
          ],
          conclusion: `On peut aussi préparer un tampon en neutralisant exactement la moitié d’un acide faible par de la soude.`,
          svg: { bar1: Va, bar2: Vb, label1: 'AH', label2: 'A⁻' },
        };
      },
    },
    {
      id: 'pc-ph-8',
      shortTitle: 'Dosage Base Faible par Acide Fort',
      title: 'Exp. 8 : Titrage NH₃ par HCl et pH_E < 7',
      goal: 'Tracer la courbe décroissante et lire pK_a(NH₄⁺/NH₃) = 9,2 en V_aE/2.',
      formula: 'À V_a = V_{aE}/2 : pH = pK_a  |  À V_a = V_{aE} : pH_E < 7 (acide NH₄⁺)',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'Volume HCl versé V_a', min: 0, max: 24, step: 0.5, defaultValue: 6, unit: 'mL' },
      ],
      evaluate: ([Va]) => {
        const Vae = 12;
        const pKa = 9.2;
        let pH = pKa;
        if (Va === 0) pH = 7 + 0.5 * (pKa - 1.3);
        else if (Va < Vae - 0.1) pH = pKa + Math.log10((Vae - Va) / Va);
        else if (Math.abs(Va - Vae) <= 0.1) pH = 0.5 * (pKa + 1.6);
        else pH = -Math.log10(((Va - Vae) * 0.08) / (20 + Va));
        return {
          headline: `V_a = ${f(Va, 1)} mL (V_aE = 12) ⟹ pH = ${f(pH, 2)}`,
          metrics: [
            { label: 'pH solution', value: `${f(pH, 2)}`, accent: 'sky' },
            { label: 'pK_a(NH₄⁺/NH₃)', value: '9,2', accent: 'amber' },
            { label: 'Indicateur optimal', value: 'Rouge de méthyle (4,2-6,2)', accent: 'emerald' },
          ],
          conclusion: `À l’équivalence l’espèce NH₄⁺ impose un pH acide (~5,4) : la phénolphtaléine ne conviendrait pas.`,
          svg: { pH, Vb: Va, Vbe: Vae, pKa, ratio: Va / 24, reverse: 1 },
        };
      },
    },
    {
      id: 'pc-ph-9',
      shortTitle: 'Autoprotolyse et température',
      title: 'Exp. 9 : Neutralité chimique à 37 °C ou 60 °C (pH_neutre ≠ 7)',
      goal: 'Comprendre que la neutralité [H₃O⁺] = [OH⁻] dépend de K_e(T).',
      formula: 'Neutre ⟺ [H₃O⁺] = [OH⁻] ⟺ pH_neutre = ½ pK_e(T)',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'pK_e à température T', min: 12.6, max: 14.9, step: 0.1, defaultValue: 13.6, unit: '' },
      ],
      evaluate: ([pKe]) => {
        const pHNeutre = 0.5 * pKe;
        return {
          headline: `Pour pK_e = ${f(pKe, 1)} : eau pure neutre à pH = ${f(pHNeutre, 2)}`,
          metrics: [
            { label: 'pH de neutralité', value: `${f(pHNeutre, 2)}`, accent: 'emerald' },
            { label: 'Réaction 2H₂O ⇌ H₃O⁺+OH⁻', value: 'Endothermique', accent: 'amber' },
            { label: 'pH = 7 dans ce cas', value: pHNeutre < 7 ? 'Déjà basique !' : 'Encore acide !', accent: 'sky' },
          ],
          conclusion: `Dans le corps humain (37 °C, pK_e ≈ 13,6), la neutralité est à pH = 6,8 (le sang à 7,4 est légèrement basique).`,
          svg: { pH: pHNeutre, Vb: pHNeutre, Vbe: pHNeutre, pKa: pHNeutre, ratio: pHNeutre / 14 },
        };
      },
    },
    {
      id: 'pc-ph-10',
      shortTitle: 'Dosage d’un vinaigre commercial',
      title: 'Exp. 10 : Synthèse BAC C — Degré d’acidité d’un vinaigre',
      goal: 'Déterminer la concentration puis la masse d’acide éthanoïque dans 100 g de vinaigre.',
      formula: 'C_v = (C_b · V_{bE} / V_{prise}) × F_{dil}  |  Degré = m_{CH₃COOH} / 100 g',
      visualKind: 'ph-titration',
      sliders: [
        { label: 'V_{bE} NaOH (0,1 M)', min: 8, max: 18, step: 0.5, defaultValue: 13.5, unit: 'mL' },
        { label: 'Facteur dilution préalable', min: 5, max: 20, step: 5, defaultValue: 10, unit: '×' },
      ],
      evaluate: ([Vbe, dil]) => {
        const Cdil = (0.1 * Vbe) / 10;
        const Cconc = Cdil * dil;
        const deg = (Cconc * 60) / 10;
        return {
          headline: `C_vinaigre = ${f(Cconc, 2)} mol/L ⟹ Degré d’acidité = ${f(deg, 1)}°`,
          metrics: [
            { label: 'Concentration mère', value: `${f(Cconc, 2)} mol/L`, accent: 'sky' },
            { label: 'Titre massique', value: `${f(deg, 1)}° (%)`, accent: 'emerald' },
            { label: 'Masse molaire', value: '60 g/mol', accent: 'amber' },
          ],
          conclusion: `On dilue d’abord le vinaigre au 1/10ᵉ pour éviter d’utiliser une trop grande quantité de soude à la burette.`,
          svg: { pH: 8.6, Vb: Vbe, Vbe, pKa: 4.8, ratio: 0.55 },
        };
      },
    },
  ],
};
