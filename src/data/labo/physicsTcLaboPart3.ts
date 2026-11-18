import { PhysicsLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const PHYSICS_TC_LABO_PART3: Record<string, PhysicsLaboExpSpec[]> = {
  // 8. INTERFÉRENCES LUMINEUSES & PHOTON (10)
  'physTc-interferences-lumiere': [
    {
      id: 'pc-int-1',
      shortTitle: 'Fentes d’Young i = λD/a',
      title: 'Exp. 1 : Réglage de l’interfrange i selon λ, D et a',
      goal: 'Explorer comment l’espacement des fentes a et la distance D modifient i.',
      formula: 'i = λ · D / a',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Longueur d’onde λ', min: 400, max: 700, step: 20, defaultValue: 600, unit: 'nm' },
        { label: 'Distance fentes a', min: 0.2, max: 2.0, step: 0.1, defaultValue: 0.5, unit: 'mm' },
        { label: 'Distance écran D', min: 0.5, max: 3.0, step: 0.25, defaultValue: 1.5, unit: 'm' },
      ],
      evaluate: ([lamNm, aMm, D]) => {
        const iMm = ((lamNm * 1e-9) * D) / (aMm * 1e-3) * 1000;
        return {
          headline: `Interfrange i = ${f(iMm, 2)} mm (${f(10 / iMm, 1)} franges par cm)`,
          metrics: [
            { label: 'Interfrange i', value: `${f(iMm, 2)} mm`, accent: 'amber' },
            { label: '10 interfranges 10i', value: `${f(10 * iMm, 1)} mm`, accent: 'sky' },
            { label: 'Frange centrale (x=0)', value: 'Brillante (δ=0)', accent: 'emerald' },
          ],
          conclusion: `Mesurer 10i au lieu d’un seul i divise par 10 l’incertitude relative sur λ = a·i/D.`,
          svg: { interfrange: iMm * 8, delta: 0, k: 0, lamNm },
        };
      },
    },
    {
      id: 'pc-int-2',
      shortTitle: 'Différence de marche δ',
      title: 'Exp. 2 : Franges brillantes δ = kλ et sombres δ = (k+½)λ',
      goal: 'Déterminer la nature d’un point M d’abscisse x sur l’écran.',
      formula: 'δ = (a·x)/D  |  Brillante : x = k·i  |  Sombre : x = (k + ½)·i',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Position x sur écran', min: -10, max: 10, step: 0.5, defaultValue: 3.0, unit: 'mm' },
        { label: 'Interfrange i', min: 0.5, max: 4.0, step: 0.5, defaultValue: 2.0, unit: 'mm' },
        { label: 'Longueur d’onde λ', min: 450, max: 680, step: 10, defaultValue: 600, unit: 'nm' },
      ],
      evaluate: ([x, iMm, lamNm]) => {
        const k = x / iMm;
        const deltaNm = k * lamNm;
        const frac = Math.abs(k - Math.round(k));
        const nature = frac < 0.1 ? `Frange brillante (k=${Math.round(k)})` : Math.abs(Math.abs(k - Math.floor(k)) - 0.5) < 0.1 ? 'Frange sombre (extinction)' : 'Intensité intermédiaire';
        return {
          headline: `x / i = ${f(k, 2)} ⟹ ${nature}`,
          metrics: [
            { label: 'Ordre d’interférence', value: `${f(k, 2)}`, accent: 'amber' },
            { label: 'Différence marche δ', value: `${f(deltaNm, 0)} nm`, accent: 'sky' },
            { label: 'Nature au point M', value: nature, accent: frac < 0.1 ? 'emerald' : 'rose' },
          ],
          conclusion: `Sur l’écran, la succession des franges est parfaitement périodique de pas i = λD/a.`,
          svg: { interfrange: iMm * 8, delta: k, k, lamNm, cursorX: x },
        };
      },
    },
    {
      id: 'pc-int-3',
      shortTitle: 'Superposition 2 couleurs',
      title: 'Exp. 3 : Coïncidence de deux radiations λ₁ et λ₂',
      goal: 'Trouver la distance x où deux systèmes de franges redeviennent concordants.',
      formula: 'k₁ · i₁ = k₂ · i₂  ⟺  k₁ · λ₁ = k₂ · λ₂',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Radiation λ₁', min: 400, max: 700, step: 50, defaultValue: 600, unit: 'nm' },
        { label: 'Radiation λ₂', min: 400, max: 700, step: 50, defaultValue: 450, unit: 'nm' },
      ],
      evaluate: ([l1, l2]) => {
        const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
        const g = gcd(l1, l2);
        const k1 = l2 / g;
        const k2 = l1 / g;
        const xCoinMm = k1 * (l1 * 1e-6) * 2000;
        return {
          headline: `Coïncidence à k₁ = ${k1} (λ₁) et k₂ = ${k2} (λ₂)`,
          metrics: [
            { label: 'Ordre k₁', value: `${k1}`, accent: 'rose' },
            { label: 'Ordre k₂', value: `${k2}`, accent: 'sky' },
            { label: 'Abscisse (si D/a=2000)', value: `${f(xCoinMm, 2)} mm`, accent: 'emerald' },
          ],
          conclusion: `En lumière polychromatique, la frange centrale x=0 est blanche puis apparaissent des cannelures colorées.`,
          svg: { interfrange: (l1 / 600) * 14, delta: 0, k: k1, lamNm: l1 },
        };
      },
    },
    {
      id: 'pc-int-4',
      shortTitle: 'Déplacement source S',
      title: 'Exp. 4 : Translation latérale de la source primaire S',
      goal: 'Prévoir le décalage de la frange centrale quand S se déplace de x_S.',
      formula: 'δ_tot = (a·x_S)/d + (a·x)/D = 0  ⟹  x_0 = -(D/d)·x_S',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Décalage source x_S', min: -3, max: 3, step: 0.5, defaultValue: 1.0, unit: 'mm' },
        { label: 'Distance d (source-fentes)', min: 0.2, max: 1.0, step: 0.1, defaultValue: 0.5, unit: 'm' },
        { label: 'Distance D (fentes-écran)', min: 1.0, max: 3.0, step: 0.5, defaultValue: 2.0, unit: 'm' },
      ],
      evaluate: ([xs, d, D]) => {
        const x0 = -(D / d) * xs;
        return {
          headline: `Frange centrale déplacée en x₀ = ${f(x0, 2)} mm`,
          metrics: [
            { label: 'Nouveau centre x₀', value: `${f(x0, 2)} mm`, accent: 'amber' },
            { label: 'Sens déplacement', value: xs > 0 ? 'Opposé (-)' : xs < 0 ? 'Opposé (+)' : 'Centré', accent: 'sky' },
            { label: 'Interfrange i', value: 'Inchangé', accent: 'emerald' },
          ],
          conclusion: `Si on élargit trop la fente source S, les figures décalées se recouvrent et le contraste disparaît.`,
          svg: { interfrange: 14, delta: x0 / 4, k: 0, lamNm: 600, cursorX: x0 },
        };
      },
    },
    {
      id: 'pc-int-5',
      shortTitle: 'Milieu d’indice n (cuve)',
      title: 'Exp. 5 : Interférences immergées dans l’eau ou un liquide n',
      goal: 'Observer la contraction de l’interfrange i’ = i_air / n.',
      formula: 'λ’ = λ₀ / n  ⟹  i’ = λ’·D/a = i₀ / n',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Indice du milieu n', min: 1.0, max: 1.7, step: 0.05, defaultValue: 1.33, unit: '' },
        { label: 'Interfrange air i₀', min: 1.0, max: 4.0, step: 0.2, defaultValue: 2.0, unit: 'mm' },
      ],
      evaluate: ([n, i0]) => {
        const iPrime = i0 / n;
        return {
          headline: `Interfrange immergé i’ = ${f(iPrime, 2)} mm (réduit de ${f((1 - 1 / n) * 100, 0)} %)`,
          metrics: [
            { label: 'Nouveau i’', value: `${f(iPrime, 2)} mm`, accent: 'sky' },
            { label: 'Fréquence ν', value: 'Invariante', accent: 'emerald' },
            { label: 'Rapport i’/i₀', value: `${f(1 / n, 3)}`, accent: 'amber' },
          ],
          conclusion: `Dans un liquide d’indice n > 1, λ diminue et les franges se resserrent.`,
          svg: { interfrange: iPrime * 10, delta: 0, k: 0, lamNm: 540 },
        };
      },
    },
    {
      id: 'pc-int-6',
      shortTitle: 'Énergie du photon E = hν',
      title: 'Exp. 6 : Quantum énergétique E = hc/λ en Joules et eV',
      goal: 'Convertir entre longueur d’onde λ (nm), fréquence ν et énergie E (eV).',
      formula: 'E = h·ν = h·c / λ  |  1 eV = 1,602 × 10⁻¹⁹ J',
      visualKind: 'photoelectric',
      sliders: [
        { label: 'Longueur d’onde λ', min: 200, max: 800, step: 20, defaultValue: 400, unit: 'nm' },
      ],
      evaluate: ([lamNm]) => {
        const E_eV = 1240 / lamNm;
        const nuTHz = 3e8 / (lamNm * 1e-9) / 1e12;
        return {
          headline: `Photon λ = ${lamNm} nm : E = ${f(E_eV)} eV (ν = ${f(nuTHz, 0)} THz)`,
          metrics: [
            { label: 'Énergie en eV', value: `${f(E_eV)} eV`, accent: 'amber' },
            { label: 'En 10⁻¹⁹ J', value: `${f(E_eV * 1.602, 2)}`, accent: 'sky' },
            { label: 'Domaine spectral', value: lamNm < 400 ? 'UV' : lamNm <= 750 ? 'Visible' : 'IR', accent: 'purple' },
          ],
          conclusion: `Retenir la formule rapide : E(eV) ≈ 1240 / λ(nm). Les photons UV sont plus énergétiques que le rouge.`,
          svg: { lam: lamNm, lam0: 500, W0: 2.48, Ec: Math.max(0, E_eV - 2.48) },
        };
      },
    },
    {
      id: 'pc-int-7',
      shortTitle: 'Effet photoélectrique & seuil',
      title: 'Exp. 7 : Extraction d’électron hν = W₀ + E_{c,max}',
      goal: 'Tester si un rayonnement λ arrache des électrons à un métal de travail W₀.',
      formula: 'Condition : λ ≤ λ₀ = hc / W₀  |  E_{c,max} = hν - W₀',
      visualKind: 'photoelectric',
      sliders: [
        { label: 'Longueur d’onde λ', min: 180, max: 700, step: 20, defaultValue: 300, unit: 'nm' },
        { label: 'Travail extraction W₀', min: 1.8, max: 5.0, step: 0.2, defaultValue: 2.2, unit: 'eV' },
      ],
      presets: [
        { label: 'Césium (W₀=2,1eV) + UV', values: [300, 2.2] },
        { label: 'Zinc (W₀=4,3eV) + Rouge', values: [640, 4.4] },
      ],
      evaluate: ([lamNm, W0]) => {
        const E_eV = 1240 / lamNm;
        const lam0 = 1240 / W0;
        const Ec = Math.max(0, E_eV - W0);
        const emitted = E_eV >= W0;
        return {
          headline: emitted ? `Émission ! E_c,max = ${f(Ec)} eV (λ₀ = ${f(lam0, 0)} nm)` : `Pas d’émission (λ > λ₀ = ${f(lam0, 0)} nm)`,
          metrics: [
            { label: 'Photon hν', value: `${f(E_eV)} eV`, accent: 'sky' },
            { label: 'Seuil λ₀', value: `${f(lam0, 0)} nm`, accent: 'amber' },
            { label: 'E_{c,max}', value: emitted ? `${f(Ec)} eV` : '0 eV (bloqué)', accent: emitted ? 'emerald' : 'rose' },
          ],
          conclusion: `Si λ > λ₀, augmenter l’intensité lumineuse ne change rien : il faut réduire λ.`,
          svg: { lam: lamNm, lam0, W0, Ec },
        };
      },
    },
    {
      id: 'pc-int-8',
      shortTitle: 'Potentiel d’arrêt U₀',
      title: 'Exp. 8 : Détermination de h/e par tension d’arrêt U₀',
      goal: 'Mesurer U₀ telle que e·U₀ = E_{c,max} = hν - W₀.',
      formula: 'e · U₀ = h·ν - W₀  ⟹  U₀ = (h/e)ν - W₀/e',
      visualKind: 'photoelectric',
      sliders: [
        { label: 'Longueur d’onde λ', min: 200, max: 550, step: 10, defaultValue: 250, unit: 'nm' },
        { label: 'Travail W₀', min: 1.8, max: 4.5, step: 0.1, defaultValue: 2.3, unit: 'eV' },
      ],
      evaluate: ([lamNm, W0]) => {
        const E = 1240 / lamNm;
        const Ec = Math.max(0, E - W0);
        const U0 = Ec;
        const vMaxKmS = Ec > 0 ? Math.sqrt((2 * Ec * 1.602e-19) / 9.109e-31) / 1000 : 0;
        return {
          headline: `Potentiel d’arrêt U₀ = ${f(U0)} V · v_max = ${f(vMaxKmS, 0)} km/s`,
          metrics: [
            { label: 'Tension d’arrêt U₀', value: `${f(U0)} V`, accent: 'rose' },
            { label: 'Vitesse max e⁻', value: `${f(vMaxKmS, 0)} km/s`, accent: 'sky' },
            { label: 'E_c max', value: `${f(Ec)} eV`, accent: 'emerald' },
          ],
          conclusion: `La pente de la droite U₀ = f(ν) vaut exactement h/e ≈ 4,14×10⁻¹⁵ V·s.`,
          svg: { lam: lamNm, lam0: 1240 / W0, W0, Ec, stopU: U0 },
        };
      },
    },
    {
      id: 'pc-int-9',
      shortTitle: 'Niveaux d’énergie de l’atome H',
      title: 'Exp. 9 : Transitions de Bohr ΔE = E_p - E_n = hc/λ',
      goal: 'Calculer la raie d’émission ou d’absorption entre niveaux n et p de l’hydrogène.',
      formula: 'E_n = -13,6 / n² (eV)  |  ΔE = 13,6 (1/n² - 1/p²)',
      visualKind: 'photoelectric',
      sliders: [
        { label: 'Niveau bas n', min: 1, max: 3, step: 1, defaultValue: 2, unit: '' },
        { label: 'Niveau haut p', min: 2, max: 6, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([n, pRaw]) => {
        const p = Math.max(n + 1, pRaw);
        const dE = 13.6 * (1 / (n * n) - 1 / (p * p));
        const lamNm = 1240 / dE;
        const serie = n === 1 ? 'Lyman (UV)' : n === 2 ? 'Balmer (Visible)' : 'Paschen (IR)';
        return {
          headline: `Transition ${p} → ${n} : ΔE = ${f(dE)} eV · λ = ${f(lamNm, 1)} nm`,
          metrics: [
            { label: 'Énergie photon ΔE', value: `${f(dE)} eV`, accent: 'amber' },
            { label: 'Longueur d’onde λ', value: `${f(lamNm, 1)} nm`, accent: 'sky' },
            { label: 'Série spectrale', value: serie, accent: 'emerald' },
          ],
          conclusion: `Transition H_α (3→2) = 656 nm rouge : signature spectrale de l’hydrogène.`,
          svg: { lam: Math.min(800, lamNm), lam0: 656, W0: 1.89, Ec: dE },
        };
      },
    },
    {
      id: 'pc-int-10',
      shortTitle: 'Synthèse Dualité Onde-Corpuscule',
      title: 'Exp. 10 : Synthèse BAC C — Longueur d’onde de De Broglie λ = h/(mv)',
      goal: 'Relier l’aspect corpusculaire (p = mv) à l’aspect ondulatoire λ = h/p.',
      formula: 'λ = h / p = h / (m · v)',
      visualKind: 'young-fringes',
      sliders: [
        { label: 'Tension accélératrice U', min: 50, max: 5000, step: 50, defaultValue: 1000, unit: 'V' },
      ],
      evaluate: ([U]) => {
        const lamPm = (1.226 / Math.sqrt(U)) * 1000;
        const vKmS = Math.sqrt((2 * 1.602e-19 * U) / 9.109e-31) / 1000;
        return {
          headline: `Électron sous ${U} V : λ = ${f(lamPm, 1)} pm · v = ${f(vKmS, 0)} km/s`,
          metrics: [
            { label: 'λ de De Broglie', value: `${f(lamPm, 1)} pm`, accent: 'purple' },
            { label: 'Vitesse e⁻', value: `${f(vKmS, 0)} km/s`, accent: 'sky' },
            { label: 'Énergie cinétique', value: `${U} eV`, accent: 'amber' },
          ],
          conclusion: `Sous quelques centaines de volts, λ est comparable aux distances interatomiques : les électrons diffractent sur un cristal.`,
          svg: { interfrange: Math.min(40, lamPm / 3), delta: 0, k: 0, lamNm: 450 },
        };
      },
    },
  ],

  // 9. NOYAU ATOMIQUE & RADIOACTIVITÉ (10)
  'physTc-noyau-radioactivite': [
    {
      id: 'pc-nuc-1',
      shortTitle: 'Composition (A, Z, N)',
      title: 'Exp. 1 : Constitution du noyau ᴬ_Z X et isotopes',
      goal: 'Compter protons Z, neutrons N = A - Z et nucléons A.',
      formula: 'A = Z + N  |  Rayon nucléaire R ≈ R₀ · A^(1/3)  (R₀ ≈ 1,2 fm)',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Numéro atomique Z', min: 1, max: 92, step: 1, defaultValue: 92, unit: 'p⁺' },
        { label: 'Nombre de masse A', min: 1, max: 238, step: 1, defaultValue: 235, unit: 'nucléons' },
      ],
      evaluate: ([Z, Araw]) => {
        const A = Math.max(Z, Araw);
        const N = A - Z;
        const R = 1.2 * Math.cbrt(A);
        return {
          headline: `Z = ${Z} protons · N = ${N} neutrons · N/Z = ${f(N / Z)}`,
          metrics: [
            { label: 'Neutrons N = A-Z', value: `${N}`, accent: 'sky' },
            { label: 'Rapport N/Z', value: `${f(N / Z)}`, accent: N / Z > 1.5 ? 'rose' : 'emerald' },
            { label: 'Rayon noyau R', value: `${f(R)} fm`, accent: 'amber' },
          ],
          conclusion: `Pour les noyaux lourds (Z > 20), la stabilité exige un excès de neutrons (N > Z) pour compenser la répulsion coulombienne.`,
          svg: { bar1: (Z / A) * 100, bar2: (N / A) * 100, label1: `Z=${Z}`, label2: `N=${N}` },
        };
      },
    },
    {
      id: 'pc-nuc-2',
      shortTitle: 'Lois de Soddy α, β⁻, β⁺',
      title: 'Exp. 2 : Conservation de A et Z dans les désintégrations',
      goal: 'Trouver le noyau fils ᴬ’_Z’ Y lors d’une émission α, β⁻ ou β⁺.',
      formula: 'α : ⁴₂He (A-4, Z-2)  |  β⁻ : ⁰₋₁e (A, Z+1)  |  β⁺ : ⁰₊₁e (A, Z-1)',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Mode (1=α, 2=β⁻, 3=β⁺)', min: 1, max: 3, step: 1, defaultValue: 1, unit: '' },
        { label: 'Z père', min: 6, max: 94, step: 1, defaultValue: 92, unit: '' },
        { label: 'A père', min: 12, max: 240, step: 2, defaultValue: 238, unit: '' },
      ],
      evaluate: ([mode, Z, Araw]) => {
        const A = Math.max(Z * 2, Araw);
        const dA = mode === 1 ? -4 : 0;
        const dZ = mode === 1 ? -2 : mode === 2 ? 1 : -1;
        const part = mode === 1 ? '⁴₂He (α)' : mode === 2 ? '⁰₋₁e + ν̄ (β⁻)' : '⁰₊₁e + ν (β⁺)';
        return {
          headline: `${A}_${Z}X  ⟶  ${A + dA}_${Z + dZ}Y + ${part}`,
          metrics: [
            { label: 'A fils', value: `${A + dA}`, accent: 'sky' },
            { label: 'Z fils', value: `${Z + dZ}`, accent: 'emerald' },
            { label: 'Particule émise', value: part, accent: 'amber' },
          ],
          conclusion: `Les lois de Soddy imposent toujours ΣA_réactifs = ΣA_produits et ΣZ_réactifs = ΣZ_produits.`,
          svg: { bar1: 75, bar2: 25, label1: `Y(${A + dA},${Z + dZ})`, label2: part.split(' ')[0] },
        };
      },
    },
    {
      id: 'pc-nuc-3',
      shortTitle: 'Décroissance N(t) = N₀ e^(-λt)',
      title: 'Exp. 3 : Courbe radioactive par multiples de demi-vie t₁/₂',
      goal: 'Calculer le nombre de noyaux restants N(t) = N₀ / 2^(t/t₁/₂).',
      formula: 'N(t) = N₀ · e^(-λt)  avec  λ = ln(2) / t₁/₂',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Demi-vie t₁/₂', min: 2, max: 30, step: 1, defaultValue: 8, unit: 'jours' },
        { label: 'Temps écoulé t', min: 0, max: 80, step: 2, defaultValue: 24, unit: 'jours' },
        { label: 'Échantillon initial N₀', min: 100, max: 1000, step: 50, defaultValue: 800, unit: '×10¹²' },
      ],
      evaluate: ([tHalf, t, N0]) => {
        const nHalf = t / tHalf;
        const N = N0 * Math.pow(0.5, nHalf);
        const lam = Math.LN2 / tHalf;
        return {
          headline: `Après ${f(nHalf, 1)} demi-vies : N = ${f(N, 1)}×10¹² (${f((N / N0) * 100, 1)} %)`,
          metrics: [
            { label: 'Noyaux restants N', value: `${f(N, 1)}×10¹²`, accent: 'sky' },
            { label: 'Noyaux désintégrés', value: `${f(N0 - N, 1)}×10¹²`, accent: 'rose' },
            { label: 'Constante λ', value: `${f(lam, 4)} j⁻¹`, accent: 'amber' },
          ],
          conclusion: `Au bout de 10 demi-vies, il reste N₀/1024 (< 0,1 %) : l’échantillon est quasi inactif.`,
          svg: { t, tHalf, ratio: N / N0 },
        };
      },
    },
    {
      id: 'pc-nuc-4',
      shortTitle: 'Activité A(t) = λ N(t)',
      title: 'Exp. 4 : Mesure en Becquerels et constante de temps τ',
      goal: 'Relier masse m(g), nombre de noyaux N et activité A = λN en Bq.',
      formula: 'A(t) = λ · N(t) = A₀ · e^(-λt)  (1 Bq = 1 désint./s)  |  τ = 1/λ = t₁/₂ / ln 2',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Activité A₀', min: 10, max: 500, step: 10, defaultValue: 200, unit: 'MBq' },
        { label: 'Constante τ', min: 5, max: 60, step: 5, defaultValue: 20, unit: 'h' },
        { label: 'Instant t', min: 0, max: 100, step: 5, defaultValue: 20, unit: 'h' },
      ],
      evaluate: ([A0, tau, t]) => {
        const A = A0 * Math.exp(-t / tau);
        const tHalf = tau * Math.LN2;
        return {
          headline: `A(${t} h) = ${f(A, 1)} MBq · t₁/₂ = τ ln 2 = ${f(tHalf, 1)} h`,
          metrics: [
            { label: 'Activité A(t)', value: `${f(A, 1)} MBq`, accent: 'amber' },
            { label: 'Demi-vie t₁/₂', value: `${f(tHalf, 1)} h`, accent: 'sky' },
            { label: 'Reste à t = τ', value: '36,8 % de A₀', accent: 'emerald' },
          ],
          conclusion: `La tangente à la courbe A(t) en t = 0 coupe l’axe du temps exactement en t = τ = t₁/₂ / ln 2.`,
          svg: { t, tHalf, ratio: A / A0 },
        };
      },
    },
    {
      id: 'pc-nuc-5',
      shortTitle: 'Datation au Carbone 14',
      title: 'Exp. 5 : Archéologie — Âge t = (t₁/₂ / ln 2) ln(A₀/A)',
      goal: 'Dater un vestige organique grâce au ¹⁴C (t₁/₂ = 5570 ans).',
      formula: 't = [t₁/₂ / ln(2)] · ln(A₀ / A)',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Activité résiduelle A/A₀', min: 5, max: 95, step: 5, defaultValue: 25, unit: '%' },
      ],
      evaluate: ([pct]) => {
        const tHalf = 5570;
        const age = (tHalf / Math.LN2) * Math.log(100 / pct);
        return {
          headline: `Pour ${pct} % de ¹⁴C restant : âge t ≈ ${f(age, 0)} ans`,
          metrics: [
            { label: 'Âge estimé t', value: `${f(age, 0)} ans`, accent: 'amber' },
            { label: 'Nb demi-vies', value: `${f(age / tHalf)}`, accent: 'sky' },
            { label: 'Demi-vie ¹⁴C', value: '5 570 ans', accent: 'emerald' },
          ],
          conclusion: `Au-delà de 50 000 ans (~9 t₁/₂), l’activité ¹⁴C est trop faible ; on utilise alors U/Pb ou K/Ar.`,
          svg: { t: age / tHalf, tHalf: 1, ratio: pct / 100 },
        };
      },
    },
    {
      id: 'pc-nuc-6',
      shortTitle: 'Défaut de masse Δm',
      title: 'Exp. 6 : Perte de masse Δm = Z m_p + N m_n - m(noyau)',
      goal: 'Vérifier que le noyau lié est toujours plus léger que ses nucléons séparés.',
      formula: 'Δm = Z m_p + (A - Z) m_n - m_X > 0',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Z protons', min: 2, max: 26, step: 1, defaultValue: 2, unit: '' },
        { label: 'N neutrons', min: 2, max: 30, step: 1, defaultValue: 2, unit: '' },
        { label: 'Défaut Δm', min: 0.01, max: 0.6, step: 0.01, defaultValue: 0.03, unit: 'u' },
      ],
      evaluate: ([Z, N, dm]) => {
        const A = Z + N;
        const El = dm * 931.5;
        const ElParA = El / A;
        return {
          headline: `E_l = Δm·931,5 = ${f(El, 1)} MeV · E_l/A = ${f(ElParA)} MeV/nucléon`,
          metrics: [
            { label: 'Énergie liaison E_l', value: `${f(El, 1)} MeV`, accent: 'amber' },
            { label: 'Par nucléon E_l/A', value: `${f(ElParA)} MeV`, accent: 'emerald' },
            { label: 'Équivalence 1 u', value: '931,5 MeV/c²', accent: 'sky' },
          ],
          conclusion: `Plus E_l/A est élevé (pic vers le Fer-56 à 8,8 MeV/nucléon), plus le noyau est stable.`,
          svg: { bar1: Math.min(100, (ElParA / 9) * 100), bar2: 98, label1: 'E_l/A', label2: 'Max Fe56' },
        };
      },
    },
    {
      id: 'pc-nuc-7',
      shortTitle: 'Énergie de liaison par nucléon',
      title: 'Exp. 7 : Comparaison de stabilité ⁴He, ¹²C, ⁵⁶Fe, ²³⁵U',
      goal: 'Comparer l’énergie de cohésion E_l/A entre noyaux légers, moyens et lourds.',
      formula: 'E_l/A(⁴He) ≈ 7,07  |  E_l/A(⁵⁶Fe) ≈ 8,79  |  E_l/A(²³⁵U) ≈ 7,59 MeV',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Noyau (1=²H, 2=⁴He, 3=⁵⁶Fe, 4=²³⁵U)', min: 1, max: 4, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([idx]) => {
        const list = [
          { name: '²₁H (Deutérium)', A: 2, ElA: 1.11 },
          { name: '⁴₂He (Hélium)', A: 4, ElA: 7.07 },
          { name: '⁵⁶₂₆Fe (Fer)', A: 56, ElA: 8.79 },
          { name: '²³⁵₉₂U (Uranium)', A: 235, ElA: 7.59 },
        ];
        const item = list[idx - 1];
        return {
          headline: `${item.name} : E_l/A = ${f(item.ElA)} MeV · E_l tot = ${f(item.A * item.ElA, 1)} MeV`,
          metrics: [
            { label: 'E_l / A', value: `${f(item.ElA)} MeV`, accent: 'emerald' },
            { label: 'E_l totale', value: `${f(item.A * item.ElA, 1)} MeV`, accent: 'amber' },
            { label: 'Tendance', value: item.A < 20 ? 'Fusion possible' : item.A > 200 ? 'Fission possible' : 'Très stable', accent: 'sky' },
          ],
          conclusion: `²H fusionne vers ⁴He en gagnant énormément de stabilité ; ²³⁵U fissionne vers des noyaux moyens (~8,5 MeV/nucléon).`,
          svg: { bar1: (item.ElA / 9) * 100, bar2: (8.79 / 9) * 100, label1: item.name.split(' ')[0], label2: '⁵⁶Fe' },
        };
      },
    },
    {
      id: 'pc-nuc-8',
      shortTitle: 'Filiation & radioactivité en chaîne',
      title: 'Exp. 8 : Séries U → Pb et équilibre séculaire',
      goal: 'Compter le nombre total de désintégrations α et β⁻ le long d’une famille.',
      formula: '²³⁸₉₂U ⟶ ²⁰⁶₈₂Pb + x·⁴₂He + y·⁰₋₁e  ⟹  x = ΔA/4, y = 2x - ΔZ',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Chute de masse ΔA (multiples de 4)', min: 4, max: 36, step: 4, defaultValue: 32, unit: '' },
        { label: 'Chute de charge ΔZ', min: 2, max: 14, step: 1, defaultValue: 10, unit: '' },
      ],
      evaluate: ([dA, dZ]) => {
        const xAlpha = dA / 4;
        const yBeta = 2 * xAlpha - dZ;
        return {
          headline: `Bilan : ${xAlpha} particules α + ${Math.max(0, yBeta)} électrons β⁻`,
          metrics: [
            { label: 'Nb d’alpha (⁴He)', value: `${xAlpha}`, accent: 'amber' },
            { label: 'Nb de bêta⁻ (⁰₋₁e)', value: `${Math.max(0, yBeta)}`, accent: 'sky' },
            { label: 'Vérification ΔZ', value: `2(${xAlpha}) - ${Math.max(0, yBeta)} = ${2 * xAlpha - Math.max(0, yBeta)}`, accent: 'emerald' },
          ],
          conclusion: `Pour ²³⁸U → ²⁰⁶Pb (ΔA = 32, ΔZ = 10) : on obtient exactement 8α et 6β⁻.`,
          svg: { bar1: Math.min(100, xAlpha * 10), bar2: Math.min(100, Math.max(0, yBeta) * 10), label1: `${xAlpha} α`, label2: `${Math.max(0, yBeta)} β⁻` },
        };
      },
    },
    {
      id: 'pc-nuc-9',
      shortTitle: 'Énergie libérée Q = |Δm|c²',
      title: 'Exp. 9 : Bilan énergétique d’une désintégration spontanée',
      goal: 'Calculer l’énergie cinétique totale libérée (répartie surtout sur la particule α ou β).',
      formula: 'ΔE = (m_avant - m_après)·c² = Q > 0  |  E_c(α) ≈ [A_fils / A_père] · Q',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Défaut masse |Δm|', min: 0.001, max: 0.02, step: 0.001, defaultValue: 0.006, unit: 'u' },
        { label: 'A noyau père', min: 60, max: 240, step: 20, defaultValue: 226, unit: '' },
      ],
      evaluate: ([dm, A]) => {
        const Q = dm * 931.5;
        const EcAlpha = ((A - 4) / A) * Q;
        return {
          headline: `Q = ${f(Q)} MeV ⟹ E_c(α) = ${f(EcAlpha)} MeV (${f(((A - 4) / A) * 100, 1)} %)`,
          metrics: [
            { label: 'Énergie libérée Q', value: `${f(Q)} MeV`, accent: 'amber' },
            { label: 'E_c particule α', value: `${f(EcAlpha)} MeV`, accent: 'rose' },
            { label: 'Recul noyau fils', value: `${f(Q - EcAlpha, 3)} MeV`, accent: 'sky' },
          ],
          conclusion: `Par conservation de la quantité de mouvement, la particule légère α emporte ~98 % de l’énergie.`,
          svg: { bar1: ((A - 4) / A) * 100, bar2: (4 / A) * 100, label1: 'E_c(α)', label2: 'Recul' },
        };
      },
    },
    {
      id: 'pc-nuc-10',
      shortTitle: 'Radioprotection & blindage',
      title: 'Exp. 10 : Synthèse BAC C — Atténuation par écran et demi-épaisseur',
      goal: 'Dimensionner un écran de plomb d’épaisseur x réduisant l’activité d’un facteur 2^n.',
      formula: 'I(x) = I₀ · e^(-μx) = I₀ · (1/2)^(x / x₁/₂)',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Épaisseur plomb x', min: 0, max: 10, step: 0.5, defaultValue: 4, unit: 'cm' },
        { label: 'Couche demi-atténuation', min: 0.5, max: 3, step: 0.5, defaultValue: 1, unit: 'cm' },
      ],
      evaluate: ([x, xHalf]) => {
        const ratio = Math.pow(0.5, x / xHalf);
        return {
          headline: `Écran ${x} cm : flux transmis = ${f(ratio * 100, 2)} % (atténuation ×${f(1 / ratio, 0)})`,
          metrics: [
            { label: 'Transmission I/I₀', value: `${f(ratio * 100, 2)} %`, accent: 'sky' },
            { label: 'Facteur protection', value: `÷ ${f(1 / ratio, 1)}`, accent: 'emerald' },
            { label: 'Rayonnement α / β / γ', value: 'Feuille / Alu / Plomb', accent: 'amber' },
          ],
          conclusion: `Une feuille arrête α, quelques mm d’Al arrêtent β, mais le γ nécessite du plomb épais ou du béton.`,
          svg: { t: x, tHalf: xHalf, ratio },
        };
      },
    },
  ],

  // 10. RÉACTIONS NUCLÉAIRES PROVOQUÉES : FISSION, FUSION & OKLO (10)
  'physTc-reactions-nucleaires': [
    {
      id: 'pc-rea-1',
      shortTitle: 'Courbe d’Aston',
      title: 'Exp. 1 : Positionnement Fusion (A<20) vs Stabilité vs Fission (A>200)',
      goal: 'Comprendre pourquoi fusion et fission libèrent toutes deux de l’énergie.',
      formula: 'ΔE = ΣE_l(produits) - ΣE_l(réactifs) > 0',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Régime (1=Fusion, 2=Fission)', min: 1, max: 2, step: 1, defaultValue: 2, unit: '' },
        { label: 'Nombre de nucléons impliqués', min: 4, max: 236, step: 4, defaultValue: 236, unit: '' },
      ],
      evaluate: ([reg, A]) => {
        const gainPerNuc = reg === 1 ? 3.5 : 0.85;
        const Q = A * gainPerNuc;
        return {
          headline: `${reg === 1 ? 'Fusion' : 'Fission'} : gain ≈ ${f(gainPerNuc)} MeV/nucléon (Q ≈ ${f(Q, 0)} MeV)`,
          metrics: [
            { label: 'Gain par nucléon', value: `${f(gainPerNuc)} MeV`, accent: 'emerald' },
            { label: 'Énergie par réaction', value: `${f(Q, 0)} MeV`, accent: 'amber' },
            { label: 'Par gramme combustible', value: reg === 1 ? '~340 GJ/g' : '~82 GJ/g', accent: 'rose' },
          ],
          conclusion: `À masse égale de combustible, la fusion libère environ 4 fois plus d’énergie que la fission.`,
          svg: { bar1: reg === 1 ? 100 : 25, bar2: reg === 1 ? 25 : 100, label1: 'Fusion /g', label2: 'Fission /acte' },
        };
      },
    },
    {
      id: 'pc-rea-2',
      shortTitle: 'Fission ²³⁵U (Réacteur d’Oklo)',
      title: 'Exp. 2 : Réacteur naturel d’Oklo au Gabon (Haut-Ogooué)',
      goal: 'Équilibrer la fission de l’Uranium-235 et expliquer la modération par l’eau.',
      formula: '²³⁵₉₂U + ¹₀n ⟶ ⁹⁴₃₈Sr + ¹³⁹₅₄Xe + 3 ¹₀n  (+ ~200 MeV)',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Neutrons produits k_eff', min: 1, max: 3, step: 0.1, defaultValue: 2.5, unit: 'n/fission' },
        { label: 'Masse ²³⁵U fissionnée', min: 1, max: 100, step: 5, defaultValue: 10, unit: 'g' },
      ],
      evaluate: ([k, mG]) => {
        const nMol = mG / 235;
        const E_GJ = nMol * 6.022e23 * 200e6 * 1.602e-19 / 1e9;
        return {
          headline: `${mG} g de ²³⁵U fissionnés libèrent ${f(E_GJ, 0)} GJ (≈ ${f(E_GJ / 42, 1)} t pétrole)`,
          metrics: [
            { label: 'Énergie libérée', value: `${f(E_GJ, 0)} GJ`, accent: 'amber' },
            { label: 'Neutrons émis', value: `${k} / fission`, accent: 'sky' },
            { label: 'Modérateur Oklo', value: 'Eau souterraine', accent: 'emerald' },
          ],
          conclusion: `Il y a 2 milliards d’années à Oklo (Gabon), la teneur en ²³⁵U (~3 %) et l’eau d’infiltration ont permis des réactions en chaîne autorégulées.`,
          svg: { bar1: Math.min(100, mG), bar2: 85, label1: `${f(E_GJ, 0)} GJ`, label2: '200 MeV/acte' },
        };
      },
    },
    {
      id: 'pc-rea-3',
      shortTitle: 'Fusion Deutérium + Tritium',
      title: 'Exp. 3 : Réaction thermonucléaire ²H + ³H → ⁴He + n',
      goal: 'Calculer les 17,6 MeV libérés et leur répartition 80 % neutron / 20 % hélium.',
      formula: '²₁H + ³₁H ⟶ ⁴₂He + ¹₀n + 17,6 MeV',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Masse D-T fusionnée', min: 1, max: 50, step: 1, defaultValue: 5, unit: 'g' },
      ],
      evaluate: ([mG]) => {
        const moles = mG / 5;
        const E_GJ = moles * 6.022e23 * 17.6e6 * 1.602e-19 / 1e9;
        return {
          headline: `${mG} g de D+T libèrent ${f(E_GJ, 0)} GJ (n : 14,1 MeV · α : 3,5 MeV)`,
          metrics: [
            { label: 'Énergie totale', value: `${f(E_GJ, 0)} GJ`, accent: 'rose' },
            { label: 'Part du neutron (4/5)', value: '14,1 MeV', accent: 'sky' },
            { label: 'Part de ⁴He (1/5)', value: '3,5 MeV', accent: 'amber' },
          ],
          conclusion: `La fusion exige ~10⁸ K pour vaincre la répulsion électrostatique des noyaux positifs.`,
          svg: { bar1: 80, bar2: 20, label1: 'Neutron 80%', label2: '⁴He 20%' },
        };
      },
    },
    {
      id: 'pc-rea-4',
      shortTitle: 'Criticité réacteur k_eff',
      title: 'Exp. 4 : Facteur de multiplication neutronique k_eff',
      goal: 'Simuler l’évolution géométrique N_gén = N₀ · k_eff^g sur g générations.',
      formula: 'k < 1 : sous-critique  |  k = 1 : critique (stable)  |  k > 1 : divergent',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Facteur k_eff', min: 0.7, max: 1.4, step: 0.05, defaultValue: 1.0, unit: '' },
        { label: 'Générations g', min: 1, max: 12, step: 1, defaultValue: 8, unit: '' },
      ],
      evaluate: ([k, g]) => {
        const mult = Math.pow(k, g);
        const state = Math.abs(k - 1) < 0.03 ? 'Critique (puissance stable)' : k < 1 ? 'Sous-critique (extinction)' : 'Sur-critique (emballement)';
        return {
          headline: `Après ${g} générations : facteur ×${f(mult, 2)} ⟹ ${state}`,
          metrics: [
            { label: 'Population relative', value: `×${f(mult, 2)}`, accent: k > 1.05 ? 'rose' : 'emerald' },
            { label: 'Régime réacteur', value: state.split(' ')[0], accent: 'amber' },
            { label: 'Barres de contrôle', value: 'Bore / Cadmium', accent: 'sky' },
          ],
          conclusion: `Les barres de contrôle absorbent l’excès de neutrons pour maintenir exactement k_eff = 1 en centrale.`,
          svg: { t: g, tHalf: 6, ratio: Math.min(1, mult / 5) },
        };
      },
    },
    {
      id: 'pc-rea-5',
      shortTitle: 'Centrale nucléaire & rendement',
      title: 'Exp. 5 : Bilan électrique P_élec = η · P_thermique',
      goal: 'Calculer la consommation quotidienne d’Uranium-235 d’une centrale de 1 GW.',
      formula: 'P_élec = η · (N_fiss · 200 MeV) / Δt',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Puissance élec P_e', min: 300, max: 1500, step: 100, defaultValue: 1000, unit: 'MW' },
        { label: 'Rendement Carnot η', min: 25, max: 45, step: 1, defaultValue: 33, unit: '%' },
      ],
      evaluate: ([PeMW, eta]) => {
        const PthMW = PeMW / (eta / 100);
        const EjDay = PthMW * 1e6 * 86400;
        const mKgDay = (EjDay / (200e6 * 1.602e-19) / 6.022e23) * 0.235;
        return {
          headline: `P_th = ${f(PthMW, 0)} MW · Consommation ²³⁵U = ${f(mKgDay)} kg/jour`,
          metrics: [
            { label: 'Puissance thermique', value: `${f(PthMW, 0)} MW`, accent: 'amber' },
            { label: 'Masse ²³⁵U / jour', value: `${f(mKgDay)} kg/j`, accent: 'emerald' },
            { label: 'Rejet thermique', value: `${f(PthMW - PeMW, 0)} MW`, accent: 'rose' },
          ],
          conclusion: `3,2 kg de ²³⁵U par jour suffisent à produire 1000 MW électriques en continu.`,
          svg: { bar1: eta, bar2: 100 - eta, label1: `Élec ${eta}%`, label2: `Chaleur ${100 - eta}%` },
        };
      },
    },
    {
      id: 'pc-rea-6',
      shortTitle: 'Cycle CNO & cœur du Soleil',
      title: 'Exp. 6 : Synthèse stellaire 4 ¹H → ⁴He + 2 e⁺ + 2 ν',
      goal: 'Estimer la perte de masse solaire par seconde L_⊙ = Δm·c².',
      formula: '4 ¹₁H ⟶ ⁴₂He + 2 ⁰₊₁e + 2 ν_e + 26,7 MeV',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Luminosité (×L_⊙)', min: 0.5, max: 5, step: 0.5, defaultValue: 1, unit: 'L_⊙' },
      ],
      evaluate: ([mult]) => {
        const L = mult * 3.85e26;
        const dmMtS = (L / 9e16) / 1e9;
        return {
          headline: `Perte de masse stellaire Δm/Δt = ${f(dmMtS)} millions de tonnes/s`,
          metrics: [
            { label: 'Luminosité L', value: `${f(mult)} L_⊙`, accent: 'amber' },
            { label: 'Masse convertie / s', value: `${f(dmMtS)} Mt/s`, accent: 'rose' },
            { label: 'Énergie par ⁴He', value: '26,7 MeV', accent: 'sky' },
          ],
          conclusion: `Le Soleil convertit chaque seconde plus de 4 millions de tonnes de matière en rayonnement.`,
          svg: { bar1: Math.min(100, mult * 20), bar2: 85, label1: 'Δm/s', label2: 'E = mc²' },
        };
      },
    },
    {
      id: 'pc-rea-7',
      shortTitle: 'Bilan par énergies de liaison',
      title: 'Exp. 7 : Formule ΔE = E_l(réactifs) - E_l(produits)',
      goal: 'Utiliser les E_l déjà tabulées (sans calculer Δm) en signe algébrique.',
      formula: 'ΔE = Σ E_l(avant) - Σ E_l(après)  (négatif ⟹ exoénergétique)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'E_l avant (MeV)', min: 1500, max: 1900, step: 10, defaultValue: 1784, unit: 'MeV' },
        { label: 'E_l après (MeV)', min: 1600, max: 2100, step: 10, defaultValue: 1980, unit: 'MeV' },
      ],
      evaluate: ([ElAv, ElAp]) => {
        const dE = ElAv - ElAp;
        return {
          headline: `ΔE = ${dE} MeV ⟹ Énergie libérée |ΔE| = ${Math.abs(dE)} MeV`,
          metrics: [
            { label: 'Bilan ΔE', value: `${dE} MeV`, accent: dE < 0 ? 'emerald' : 'rose' },
            { label: 'Énergie libérée', value: `${Math.abs(dE)} MeV`, accent: 'amber' },
            { label: 'Nature', value: dE < 0 ? 'Exoénergétique' : 'Endoénergétique', accent: 'sky' },
          ],
          conclusion: `Attention au signe : ΔE = ΣE_l(réactifs) - ΣE_l(produits) car l’état le plus lié (E_l plus grand) a une masse plus petite.`,
          svg: { bar1: (ElAv / 2100) * 100, bar2: (ElAp / 2100) * 100, label1: 'ΣE_l av.', label2: 'ΣE_l ap.' },
        };
      },
    },
    {
      id: 'pc-rea-8',
      shortTitle: 'Modération des neutrons',
      title: 'Exp. 8 : Thermalisation des neutrons de 2 MeV à 0,025 eV',
      goal: 'Comparer chocs élastiques sur Hydrogène (H₂O) vs Carbone (Graphite).',
      formula: 'Choc frontal élastique sur noyau de masse A : E’/E = [(A-1)/(A+1)]²',
      visualKind: 'decay-curve',
      sliders: [
        { label: 'Masse noyau cible A', min: 1, max: 16, step: 1, defaultValue: 1, unit: '' },
        { label: 'Nb de chocs n', min: 1, max: 30, step: 1, defaultValue: 10, unit: '' },
      ],
      evaluate: ([A, n]) => {
        const factor = A === 1 ? 0.5 : Math.pow((A - 1) / (A + 1), 2);
        const rem = Math.pow(factor, n);
        return {
          headline: `Par choc : facteur ${f(factor, 3)} · Après ${n} chocs : E/E₀ = ${rem.toExponential(1)}`,
          metrics: [
            { label: 'E_après / E_avant', value: `${f(factor, 3)}`, accent: 'sky' },
            { label: 'Après n chocs', value: `${rem.toExponential(1)}`, accent: 'amber' },
            { label: 'Efficacité modérateur', value: A <= 2 ? 'Maximale (H/D)' : A <= 12 ? 'Bonne (C)' : 'Faible', accent: 'emerald' },
          ],
          conclusion: `Un proton (A=1) a presque la même masse qu’un neutron : c’est le meilleur modérateur pour ralentir les neutrons rapides.`,
          svg: { t: n, tHalf: 5, ratio: Math.min(1, rem) },
        };
      },
    },
    {
      id: 'pc-rea-9',
      shortTitle: 'Équivalent pétrole (TEP)',
      title: 'Exp. 9 : Comparaison Uranium vs Pétrole / Charbon',
      goal: 'Quantifier le facteur ~2 millions entre énergie nucléaire et combustion chimique.',
      formula: '1 kg ²³⁵U ≈ 2 000 tonnes de pétrole (1 tep = 42 GJ)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse combustible', min: 1, max: 20, step: 1, defaultValue: 1, unit: 'kg' },
      ],
      evaluate: ([mKg]) => {
        const E_U_TJ = mKg * 82;
        const equivTep = (E_U_TJ * 1000) / 42;
        return {
          headline: `${mKg} kg de ²³⁵U = ${f(E_U_TJ, 0)} TJ ≈ ${f(equivTep, 0)} tonnes de pétrole`,
          metrics: [
            { label: 'Fission ²³⁵U', value: `${f(E_U_TJ, 0)} TJ`, accent: 'amber' },
            { label: 'Équivalent pétrole', value: `${f(equivTep, 0)} t`, accent: 'emerald' },
            { label: 'Combustion C/H', value: `${f(mKg * 42e-3, 3)} TJ`, accent: 'rose' },
          ],
          conclusion: `Les réactions nucléaires mettent en jeu des MeV par noyau contre quelques eV par molécule en chimie.`,
          svg: { bar1: 100, bar2: 2, label1: 'Nucléaire', label2: 'Chimique' },
        };
      },
    },
    {
      id: 'pc-rea-10',
      shortTitle: 'Bilan réaction endo/exo Δm',
      title: 'Exp. 10 : Synthèse BAC C — Seuil énergétique d’une réaction provoquée',
      goal: 'Calculer l’énergie minimale du projectile si m_produits > m_réactifs.',
      formula: 'Seuil : Q = (m_réactifs - m_produits)·c² < 0 ⟹ E_min ≈ |Q|·(1 + m_p/m_cible)',
      visualKind: 'aston-bars',
      sliders: [
        { label: 'Gain de masse m_ap - m_av', min: -0.02, max: 0.02, step: 0.002, defaultValue: 0.004, unit: 'u' },
      ],
      evaluate: ([dm]) => {
        const E_MeV = dm * 931.5;
        const exo = dm < 0;
        return {
          headline: exo ? `Réaction spontanément exothermique : libère ${f(-E_MeV)} MeV` : `Réaction endothermique : apport minimal ${f(E_MeV)} MeV`,
          metrics: [
            { label: 'Variation masse Δm', value: `${f(dm, 3)} u`, accent: 'sky' },
            { label: 'Bilan |ΔE|', value: `${f(Math.abs(E_MeV))} MeV`, accent: 'amber' },
            { label: 'Bilan', value: exo ? 'Libère énergie' : 'Consomme énergie', accent: exo ? 'emerald' : 'rose' },
          ],
          conclusion: `Toute augmentation de masse au cours d’une collision exige l’apport préalable d’énergie cinétique par l’accélérateur.`,
          svg: { bar1: 60, bar2: Math.max(15, 60 + dm * 1500), label1: 'Masse av.', label2: 'Masse ap.' },
        };
      },
    },
  ],
};
