import { MathLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const MATH_TC_LABO_PART3: Record<string, MathLaboExpSpec[]> = {
  // 7. LOGARITHME NÉPÉRIEN, EXPONENTIELLE & ÉQUATIONS DIFFÉRENTIELLES (10)
  'mathTc-ln-exp-equadiff': [
    {
      id: 'mc-ln-1',
      shortTitle: 'Croissances comparées e^x ≫ xⁿ ≫ ln x',
      title: 'Exp. 1 : Domination de e^x sur toute puissance xⁿ en +∞',
      goal: 'Vérifier numériquement que e^x / xⁿ → +∞ et xⁿ / ln x → +∞.',
      formula: 'lim_{+∞} (e^x / xⁿ) = +∞  |  lim_{+∞} (ln x / xⁿ) = 0  (n > 0)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Exposant n', min: 1, max: 5, step: 1, defaultValue: 3, unit: '' },
        { label: 'Variable x', min: 2, max: 20, step: 1, defaultValue: 10, unit: '' },
      ],
      evaluate: ([n, x]) => {
        const expVal = Math.exp(x);
        const powVal = Math.pow(x, n);
        const ratio = expVal / powVal;
        return {
          headline: `En x = ${x} : e^x / x^${n} = ${ratio > 1e5 ? ratio.toExponential(2) : f(ratio, 2)}`,
          metrics: [
            { label: `Ratio e^x / x^${n}`, value: ratio > 1e5 ? ratio.toExponential(1) : f(ratio, 2), accent: 'emerald' },
            { label: 'x·e^(-x) en +∞', value: '0', accent: 'sky' },
            { label: 'x·ln(x) en 0⁺', value: '0⁻', accent: 'amber' },
          ],
          conclusion: `Quelle que soit la puissance n (même n = 100), l’exponentielle finit toujours par écraser xⁿ en +∞.`,
          svg: { a: n, h: x, lim: 1, mode: 'exp-dom' },
        };
      },
    },
    {
      id: 'mc-ln-2',
      shortTitle: 'Domaine & équations en ln(u)',
      title: 'Exp. 2 : Règle du domaine préalable ln(u) = ln(v) ⟺ u = v > 0',
      goal: 'Tester les racines parasites lors de la résolution de ln(x + a) + ln(x + b) = c.',
      formula: 'ln(A) + ln(B) = ln(A·B)  uniquement si  A > 0 ET B > 0 !',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Test x', min: -3, max: 5, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([x]) => {
        const d1 = x + 1 > 0;
        const d2 = x - 1 > 0;
        const valid = d1 && d2;
        const val = valid ? Math.log(x + 1) + Math.log(x - 1) : NaN;
        return {
          headline: valid ? `x = ${f(x, 1)} ∈ D = ]1 ; +∞[ : ln(x+1)+ln(x-1) = ${f(val, 3)}` : `x = ${f(x, 1)} HORS DOMAINE (x > 1 requis) !`,
          metrics: [
            { label: 'Domaine exact D', value: ']1 ; +∞[', accent: 'amber' },
            { label: 'x² - 1 = e^0 = 1', value: 'x = √2 ≈ 1,414', accent: 'emerald' },
            { label: 'Racine rejetée', value: '-√2 ∉ D !', accent: 'rose' },
          ],
          conclusion: `Toujours résoudre le système d’existence D_e AVANT de regrouper ln(A) + ln(B) en ln(AB) !`,
          svg: { a: 1, h: Math.max(1.2, x), lim: 0, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-ln-3',
      shortTitle: 'Équation différentielle y’ = ay',
      title: 'Exp. 3 : Solutions y(x) = C·e^(ax) selon la condition initiale y(0)',
      goal: 'Visualiser croissance (a > 0) ou décroissance (a < 0) et le signe de C.',
      formula: 'y’ - a y = 0  ⟺  y(x) = C · e^(ax)  (C ∈ ℝ)',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Paramètre a', min: -2, max: 2, step: 0.5, defaultValue: -1, unit: '' },
        { label: 'Condition y(0) = C', min: -3, max: 4, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([a, C]) => {
        return {
          headline: `y(x) = ${C}·e^(${f(a, 1)}x) · En x = 1 : y(1) = ${f(C * Math.exp(a), 3)}`,
          metrics: [
            { label: 'Comportement +∞', value: a < 0 ? 'Tend vers 0' : a > 0 ? (C > 0 ? '+∞' : C < 0 ? '-∞' : '0') : `Constant = ${C}`, accent: 'emerald' },
            { label: 'Pente à l’origine', value: `y’(0) = ${f(a * C, 1)}`, accent: 'amber' },
            { label: 'Type équation', value: 'Linéaire 1er ordre homogène', accent: 'sky' },
          ],
          conclusion: `Toute solution de y’ = ay est de signe constant (celui de y(0)), ou identiquement nulle.`,
          svg: { freq: Math.abs(a), amp: C, damp: a < 0 ? Math.abs(a) : -a, mode: 'exp1' },
        };
      },
    },
    {
      id: 'mc-ln-4',
      shortTitle: 'Équation y’ + ay = b (Second membre)',
      title: 'Exp. 4 : Régime transitoire C e^(-ax) + solution particulière b/a',
      goal: 'Observer la convergence exponentielle vers l’asymptote y_∞ = b/a.',
      formula: 'y’ + a y = b (a ≠ 0)  ⟺  y(x) = C·e^(-ax) + b/a',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Paramètre a > 0', min: 0.5, max: 3, step: 0.5, defaultValue: 1, unit: '' },
        { label: 'Second membre b', min: 2, max: 12, step: 2, defaultValue: 6, unit: '' },
        { label: 'Condition y(0)', min: 0, max: 10, step: 1, defaultValue: 0, unit: '' },
      ],
      evaluate: ([a, b, y0]) => {
        const yPart = b / a;
        const C = y0 - yPart;
        return {
          headline: `y(x) = (${f(C, 1)})·e^(-${f(a, 1)}x) + ${f(yPart, 1)}  ⟶  Asymptote y = ${f(yPart, 1)}`,
          metrics: [
            { label: 'Solution particulière', value: `y_p = ${f(yPart, 1)}`, accent: 'amber' },
            { label: 'Constante C', value: `${f(C, 1)}`, accent: 'sky' },
            { label: 'Temps caract. τ', value: `1/a = ${f(1 / a)}`, accent: 'emerald' },
          ],
          conclusion: `C’est exactement le modèle mathématique de la charge d’un condensateur RC ou de la chute avec frottement !`,
          svg: { freq: a, amp: yPart, damp: a, mode: 'exp1' },
        };
      },
    },
    {
      id: 'mc-ln-5',
      shortTitle: 'Équation différentielle y’’ + ω²y = 0',
      title: 'Exp. 5 : Oscillateur harmonique A cos(ωx) + B sin(ωx)',
      goal: 'Déterminer A = y(0) et B = y’(0)/ω à partir des conditions initiales.',
      formula: 'y’’ + ω² y = 0  ⟺  y(x) = A cos(ωx) + B sin(ωx)',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Pulsation ω', min: 1, max: 6, step: 0.5, defaultValue: 2, unit: 'rad/s' },
        { label: 'y(0) = A', min: -3, max: 3, step: 1, defaultValue: 2, unit: '' },
        { label: 'y’(0)', min: -6, max: 6, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([w, A, yp0]) => {
        const B = yp0 / w;
        const amp = Math.hypot(A, B);
        return {
          headline: `y(x) = ${A} cos(${f(w, 1)}x) + (${f(B)}) sin(${f(w, 1)}x) · Amplitude ${f(amp)}`,
          metrics: [
            { label: 'Amplitude max √(A²+B²)', value: `${f(amp)}`, accent: 'amber' },
            { label: 'Période T = 2π/ω', value: `${f((2 * Math.PI) / w)}`, accent: 'sky' },
            { label: 'Coef. B = y’(0)/ω', value: `${f(B)}`, accent: 'emerald' },
          ],
          conclusion: `Ne jamais oublier de diviser y’(0) par ω pour obtenir le coefficient B de sin(ωx) !`,
          svg: { freq: w, amp: Math.max(0.5, amp), damp: 0, mode: 'sin' },
        };
      },
    },
    {
      id: 'mc-ln-6',
      shortTitle: 'Équation y’’ + ay’ + by = 0 (Δ > 0, = 0, < 0)',
      title: 'Exp. 6 : Équation caractéristique r² + ar + b = 0',
      goal: 'Basculer entre 2 exponentielles réelles (Δ > 0), (Ax+B)e^(r₀x) (Δ = 0) et amortie oscillante (Δ < 0).',
      formula: 'Δ = a² - 4b : >0 (e^(r₁x),e^(r₂x)) | =0 ((Ax+B)e^(r₀x)) | <0 (e^(αx)[Acos(βx)+Bsin(βx)])',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Amortissement a', min: 0, max: 6, step: 0.5, defaultValue: 2, unit: '' },
        { label: 'Raideur b', min: 1, max: 10, step: 1, defaultValue: 5, unit: '' },
      ],
      presets: [
        { label: 'Δ > 0 (Apériodique)', values: [5, 4] },
        { label: 'Δ = 0 (Critique)', values: [4, 4] },
        { label: 'Δ < 0 (Pseudo-périodique)', values: [1, 5] },
      ],
      evaluate: ([a, b]) => {
        const delta = a * a - 4 * b;
        const regime = delta > 0.05 ? 'Apériodique (2 racines réelles)' : delta < -0.05 ? 'Pseudo-périodique (complexes)' : 'Critique (racine double)';
        return {
          headline: `r² + ${a}r + ${b} = 0 : Δ = ${f(delta, 1)} ⟹ ${regime}`,
          metrics: [
            { label: 'Discriminant Δ', value: `${f(delta, 1)}`, accent: delta < 0 ? 'purple' : delta === 0 ? 'amber' : 'emerald' },
            { label: 'Régime solutions', value: regime.split(' ')[0], accent: 'sky' },
            { label: 'Partie réelle r', value: `${f(-a / 2, 2)}`, accent: 'amber' },
          ],
          conclusion: `Si Δ = 0 (racine double r₀ = -a/2), la solution générale est (A·x + B)·e^(r₀x).`,
          svg: { freq: delta < 0 ? Math.sqrt(-delta) / 2 : 0.4, amp: 2, damp: a / 2, mode: delta < 0 ? 'damped' : 'exp1' },
        };
      },
    },
    {
      id: 'mc-ln-7',
      shortTitle: 'Changement de fonction z = y - g',
      title: 'Exp. 7 : Équation différentielle avec second membre non constant',
      goal: 'Ramener y’ + ay = f(x) à une équation homogène z’ + az = 0 via une solution particulière g.',
      formula: 'Si g est solution particulière de (E), alors y est solution ⟺ (y - g) solution de (E₀)',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Pente second membre m (y’+y = mx)', min: 1, max: 5, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([m]) => {
        return {
          headline: `Pour y’ + y = ${m}x : g(x) = ${m}x - ${m} est solution ⟹ y(x) = C·e^(-x) + ${m}x - ${m}`,
          metrics: [
            { label: 'Solution part. g(x)', value: `${m}x - ${m}`, accent: 'amber' },
            { label: 'Asymptote en +∞', value: `y = ${m}x - ${m}`, accent: 'emerald' },
            { label: 'Méthode', value: 'Pose g(x) = ax + b et identifie', accent: 'sky' },
          ],
          conclusion: `Lorsque le second membre est un polynôme (resp. e^(kx)), on cherche g(x) sous la même forme (attention si k est racine !).`,
          svg: { freq: 1, amp: m, damp: 0.4, mode: 'exp1' },
        };
      },
    },
    {
      id: 'mc-ln-8',
      shortTitle: 'Fonction puissance x^α = e^(α ln x)',
      title: 'Exp. 8 : Dérivée et limite de x^x ou x^α sur ]0, +∞[',
      goal: 'Passer systématiquement à l’écriture exponentielle e^(u ln v) quand l’exposant dépend de x.',
      formula: 'x^x = e^(x ln x)  ⟹  (x^x)’ = (1 + ln x) · x^x  ;  lim_{0⁺} x^x = 1',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Abscisse x > 0', min: 0.05, max: 2.0, step: 0.05, defaultValue: 0.37, unit: '' },
      ],
      evaluate: ([x]) => {
        const fx = Math.pow(x, x);
        const fPrime = (1 + Math.log(x)) * fx;
        return {
          headline: `f(${f(x)}) = ${f(fx, 4)} · f’(${f(x)}) = ${f(fPrime, 3)} (Minimum en x = 1/e ≈ 0,368)`,
          metrics: [
            { label: 'Valeur x^x', value: `${f(fx, 4)}`, accent: 'sky' },
            { label: 'Dérivée (x^x)’', value: `${f(fPrime, 3)}`, accent: Math.abs(fPrime) < 0.08 ? 'emerald' : 'amber' },
            { label: 'Minimum global', value: 'e^(-1/e) ≈ 0,692', accent: 'purple' },
          ],
          conclusion: `x^x décroît de 1 (en 0⁺) jusqu’à e^(-1/e) en x = 1/e, puis croît vers +∞.`,
          svg: { a: 0.368, h: x, lim: 1, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-ln-9',
      shortTitle: 'Logarithme décimal log(x) = ln(x)/ln(10)',
      title: 'Exp. 9 : Échelle logarithmique (pH, décibels, magnitude)',
      goal: 'Relier dérivée (log x)’ = 1/(x ln 10) et résolution d’équations 10^x = N.',
      formula: 'log(x) = ln(x) / ln(10)  |  (log x)’ = 1 / (x · ln 10)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Grandeur x', min: 1, max: 1000, step: 10, defaultValue: 100, unit: '' },
      ],
      evaluate: ([x]) => {
        const lg = Math.log10(x);
        const dB = 10 * lg;
        return {
          headline: `log(${x}) = ${f(lg, 3)} · Niveau sonore 10 log(I/I₀) = ${f(dB, 1)} dB`,
          metrics: [
            { label: 'log₁₀(x)', value: `${f(lg, 3)}`, accent: 'amber' },
            { label: 'ln(x)', value: `${f(Math.log(x), 3)}`, accent: 'sky' },
            { label: 'Dérivée en x', value: `${(1 / (x * Math.LN10)).toExponential(2)}`, accent: 'emerald' },
          ],
          conclusion: `Multiplier l’intensité par 100 ajoute seulement +20 dB (log₁₀(100) = 2).`,
          svg: { a: lg, h: x / 100, lim: 3, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-ln-10',
      shortTitle: 'Étude complète f(x) = x·e^(-x) ou ln(x)/x',
      title: 'Exp. 10 : Synthèse BAC C — Extremum, inflexion et bijection de f',
      goal: 'Analyser les tangentes horizontales et asymptotes d’une fonction mixte.',
      formula: 'f(x) = (ln x)/x : max en x = e (1/e), inflexion en x = e^(3/2)',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Abscisse x', min: 0.5, max: 6.0, step: 0.25, defaultValue: 2.75, unit: '' },
      ],
      evaluate: ([x]) => {
        const fx = Math.log(x) / x;
        const fp = (1 - Math.log(x)) / (x * x);
        return {
          headline: `(ln x)/x en x = ${f(x)} : f = ${f(fx, 4)} · f’ = ${f(fp, 4)}`,
          metrics: [
            { label: 'f(x) = (ln x)/x', value: `${f(fx, 4)}`, accent: 'sky' },
            { label: 'Dérivée (1-ln x)/x²', value: `${f(fp, 4)}`, accent: Math.abs(fp) < 0.02 ? 'emerald' : 'amber' },
            { label: 'Max exact en x = e', value: `1/e ≈ 0,3679`, accent: 'purple' },
          ],
          conclusion: `Conséquence classique : comparer e^π et π^e en utilisant la décroissance de (ln x)/x sur [e, +∞[ !`,
          svg: { x0: x, h: 0.4, slope: fp * 5, secSlope: fx },
        };
      },
    },
  ],

  // 8. SUITES NUMÉRIQUES & RÉCURRENCE (10)
  'mathTc-suites-recurrence': [
    {
      id: 'mc-sui-1',
      shortTitle: 'Suite arithmético-géométrique',
      title: 'Exp. 1 : Point fixe l = b/(1-a) pour u_{n+1} = a u_n + b',
      goal: 'Transformer u_n via la suite auxiliaire géométrique v_n = u_n - l.',
      formula: 'u_{n+1} = a u_n + b (a≠1) ⟹ u_n = (u₀ - l)·aⁿ + l avec l = b/(1-a)',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Coefficient a', min: -0.8, max: 1.1, step: 0.1, defaultValue: 0.6, unit: '' },
        { label: 'Constante b', min: 0.5, max: 3, step: 0.5, defaultValue: 1.2, unit: '' },
        { label: 'Terme initial u₀', min: 0, max: 5, step: 0.5, defaultValue: 0.5, unit: '' },
      ],
      evaluate: ([a, b, u0]) => {
        const conv = Math.abs(a) < 1;
        const l = Math.abs(1 - a) > 1e-4 ? b / (1 - a) : NaN;
        const u4 = conv ? (u0 - l) * Math.pow(a, 4) + l : u0;
        return {
          headline: conv ? `|a| < 1 ⟹ Converge vers l = ${f(l, 2)} (u₄ = ${f(u4, 3)})` : `|a| ≥ 1 ⟹ Suite divergente !`,
          metrics: [
            { label: 'Point fixe l', value: Number.isNaN(l) ? 'Aucun' : f(l, 2), accent: 'amber' },
            { label: 'Comportement', value: conv ? (a >= 0 ? 'Monotone vers l' : 'Alternée vers l') : 'Divergente', accent: conv ? 'emerald' : 'rose' },
            { label: 'Terme u₄', value: `${f(u4, 3)}`, accent: 'sky' },
          ],
          conclusion: `On pose toujours v_n = u_n - l et on montre v_{n+1} = a·v_n pour obtenir v_n = v₀·aⁿ.`,
          svg: { slope: a, c: b, u0 },
        };
      },
    },
    {
      id: 'mc-sui-2',
      shortTitle: 'Escalier u_{n+1} = f(u_n)',
      title: 'Exp. 2 : Diagramme en toile d’araignée et monotonie selon f’',
      goal: 'Observer l’escalier (f croissante) vs l’escargot (f décroissante) autour de y = x.',
      formula: 'f croissante ⟹ (u_n) monotone (sens donné par signe de u₁ - u₀)',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Pente locale a', min: -0.9, max: 0.9, step: 0.15, defaultValue: -0.6, unit: '' },
        { label: 'Terme initial u₀', min: 0.5, max: 4.5, step: 0.5, defaultValue: 4.0, unit: '' },
      ],
      presets: [
        { label: 'Escalier (a = +0,6)', values: [0.6, 0.5] },
        { label: 'Escargot (a = -0,6)', values: [-0.6, 4.0] },
      ],
      evaluate: ([a, u0]) => {
        const b = 2 * (1 - a); // fixed point at 2
        const u1 = a * u0 + b;
        const u2 = a * u1 + b;
        return {
          headline: `u₀ = ${f(u0, 1)} → u₁ = ${f(u1)} → u₂ = ${f(u2)} → l = 2,00`,
          metrics: [
            { label: 'Forme trajectoire', value: a >= 0 ? 'Escalier monotone' : 'Escargot alterné', accent: 'amber' },
            { label: 'u₁', value: `${f(u1)}`, accent: 'sky' },
            { label: 'Point fixe l', value: '2,00', accent: 'emerald' },
          ],
          conclusion: `Si f est décroissante, les sous-suites (u_{2n}) et (u_{2n+1}) sont monotones de sens contraires (souvent adjacentes !).`,
          svg: { slope: a, c: b, u0 },
        };
      },
    },
    {
      id: 'mc-sui-3',
      shortTitle: 'Suites adjacentes [u_n ; v_n]',
      title: 'Exp. 3 : Intervalles emboîtés u_n ≤ v_n et v_n - u_n → 0',
      goal: 'Vérifier les 3 hypothèses des suites adjacentes et encadrer la limite commune l.',
      formula: '(u_n) ↗ , (v_n) ↘ , lim(v_n - u_n) = 0  ⟹  lim u_n = lim v_n = l',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Rang n', min: 1, max: 10, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([n]) => {
        // Classic harmonic/e series: u_n = sum_{k=0}^n 1/k!, v_n = u_n + 1/(n*n!)
        let fact = 1;
        let u = 1;
        for (let k = 1; k <= n; k++) {
          fact *= k;
          u += 1 / fact;
        }
        const v = u + 1 / (n * fact);
        return {
          headline: `Rang ${n} : e ∈ [${f(u, 5)} ; ${f(v, 5)}] (largeur ${f(v - u, 5)})`,
          metrics: [
            { label: 'Borne inf u_n', value: `${f(u, 5)}`, accent: 'sky' },
            { label: 'Borne sup v_n', value: `${f(v, 5)}`, accent: 'amber' },
            { label: 'Écart v_n - u_n', value: `${f(v - u, 5)}`, accent: 'emerald' },
          ],
          conclusion: `Au rang n = 6, l’encadrement de e = 2,71828... est déjà précis à 10⁻⁴ près !`,
          svg: { slope: 0.4, c: 2.718 * 0.6, u0: u },
        };
      },
    },
    {
      id: 'mc-sui-4',
      shortTitle: 'Sommes arithmétique & géométrique',
      title: 'Exp. 4 : Calcul exact de S_n = Σ u_k et limite de série géométrique',
      goal: 'Comparer somme arithmétique (nb termes × moyenne) et géométrique u₀(1-q^N)/(1-q).',
      formula: 'Σ_{k=0}^{n} q^k = (1 - q^(n+1)) / (1 - q)  ⟶  1 / (1 - q) si |q| < 1',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Raison q', min: 0.2, max: 0.9, step: 0.1, defaultValue: 0.5, unit: '' },
        { label: 'Nb termes N', min: 2, max: 12, step: 1, defaultValue: 6, unit: '' },
      ],
      evaluate: ([q, N]) => {
        const SN = (1 - Math.pow(q, N)) / (1 - q);
        const SInf = 1 / (1 - q);
        return {
          headline: `Somme des ${N} termes = ${f(SN, 3)} / Limite ∞ = ${f(SInf, 3)} (${f((SN / SInf) * 100, 1)} %)`,
          metrics: [
            { label: 'Somme partielle S_N', value: `${f(SN, 3)}`, accent: 'sky' },
            { label: 'Somme infinie 1/(1-q)', value: `${f(SInf, 3)}`, accent: 'emerald' },
            { label: 'Reste à l’infini', value: `${f(SInf - SN, 4)}`, accent: 'amber' },
          ],
          conclusion: `Bien compter le nombre de termes : de l’indice p à n inclus, il y a (n - p + 1) termes !`,
          svg: { n: N, p: q },
        };
      },
    },
    {
      id: 'mc-sui-5',
      shortTitle: 'Raisonnement par récurrence',
      title: 'Exp. 5 : Validation d’une borne M ≤ u_n ≤ M’ sur les premiers rangs',
      goal: 'Vérifier Initialisation (n=0) et Hérédité (u_n ∈ I ⇒ f(u_n) ∈ I) par croissance de f.',
      formula: 'u_{n+1} = √(2 + u_n) avec u₀ ≥ 0 : bornée et convergente vers 2',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Terme initial u₀', min: 0, max: 6, step: 0.5, defaultValue: 0.5, unit: '' },
        { label: 'Nb étapes n', min: 1, max: 6, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([u0, n]) => {
        let u = u0;
        for (let i = 0; i < n; i++) u = Math.sqrt(2 + u);
        return {
          headline: `u₀ = ${f(u0, 1)} ⟹ u_${n} = ${f(u, 4)} (converge toujours vers l = 2)`,
          metrics: [
            { label: `Valeur u_${n}`, value: `${f(u, 4)}`, accent: 'emerald' },
            { label: 'Sens de variation', value: u0 < 2 ? 'Croissante (≤ 2)' : u0 > 2 ? 'Décroissante (≥ 2)' : 'Constante = 2', accent: 'amber' },
            { label: 'Équation l = √(2+l)', value: 'l² - l - 2 = 0 ⇒ l = 2', accent: 'sky' },
          ],
          conclusion: `Comme x ↦ √(2+x) est croissante, l’inégalité 0 ≤ u_n ≤ 2 est héréditaire immédiatement !`,
          svg: { slope: 0.25, c: 1.5, u0 },
        };
      },
    },
    {
      id: 'mc-sui-6',
      shortTitle: 'Suite définie par une intégrale I_n',
      title: 'Exp. 6 : Monotonie et encadrement de I_n = ∫₀¹ xⁿ e^(-x) dx',
      goal: 'Comparer x^(n+1) ≤ xⁿ sur [0, 1] puis encadrer I_n entre 0 et 1/(n+1).',
      formula: '∀x ∈ [0,1] : 0 ≤ xⁿ e^(-x) ≤ xⁿ  ⟹  0 ≤ I_n ≤ 1/(n+1) → 0',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Rang n', min: 1, max: 8, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([n]) => {
        // exact I_n via recurrence: I_0 = 1 - 1/e, I_k = -1/e + k * I_{k-1}
        let I = 1 - Math.exp(-1);
        for (let k = 1; k <= n; k++) I = -Math.exp(-1) + k * I;
        const sup = 1 / (n + 1);
        return {
          headline: `0 ≤ I_${n} = ${f(I, 4)} ≤ 1/${n + 1} = ${f(sup, 4)} (Décroissante vers 0)`,
          metrics: [
            { label: `I_${n} exacte`, value: `${f(I, 4)}`, accent: 'emerald' },
            { label: `Majorant 1/(n+1)`, value: `${f(sup, 4)}`, accent: 'amber' },
            { label: 'Relation IPP', value: `I_${n} = -1/e + ${n}·I_${n - 1}`, accent: 'sky' },
          ],
          conclusion: `L’encadrement de l’intégrande sur [a,b] donne la limite par gendarmes sans même calculer l’intégrale !`,
          svg: { n: 8, b: 1, area: I },
        };
      },
    },
    {
      id: 'mc-sui-7',
      shortTitle: 'Seuil algorithmique N (tant que)',
      title: 'Exp. 7 : Plus petit entier n₀ tel que |u_n - l| < ε',
      goal: 'Résoudre aⁿ < ε par passage au logarithme n > ln(ε)/ln(a).',
      formula: 'qⁿ < ε (0 < q < 1)  ⟺  n > ln(ε) / ln(q)  (attention : ln(q) < 0 inverse le sens !)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Raison q', min: 0.3, max: 0.9, step: 0.1, defaultValue: 0.7, unit: '' },
        { label: 'Exposant seuil 10^(-p)', min: 2, max: 6, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([q, p]) => {
        const eps = Math.pow(10, -p);
        const exact = Math.log(eps) / Math.log(q);
        const n0 = Math.floor(exact) + 1;
        return {
          headline: `${f(q, 1)}ⁿ < 10^(-${p})  ⟺  n > ${f(exact, 2)}  ⟹  Seuil n₀ = ${n0}`,
          metrics: [
            { label: 'Entier seuil n₀', value: `${n0}`, accent: 'emerald' },
            { label: 'ln(q) < 0 !', value: `${f(Math.log(q), 3)}`, accent: 'rose' },
            { label: `q^${n0}`, value: `${Math.pow(q, n0).toExponential(2)}`, accent: 'sky' },
          ],
          conclusion: `Erreur fréquente au BAC : en divisant par ln(q) < 0, il faut absolument inverser le sens de l’inégalité !`,
          svg: { n: Math.min(14, n0), p: q },
        };
      },
    },
    {
      id: 'mc-sui-8',
      shortTitle: 'Suite homographique u_{n+1}=(au_n+b)/(cu_n+d)',
      title: 'Exp. 8 : Suite auxiliaire v_n = (u_n - α)/(u_n - β)',
      goal: 'Ramener une récurrence homographique à deux points fixes α, β à une géométrique.',
      formula: 'v_n = (u_n - l₁)/(u_n - l₂) géométrique  |  Si l₁ = l₂ : v_n = 1/(u_n - l₁) arithmétique',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Terme initial u₀', min: 0, max: 5, step: 0.5, defaultValue: 0, unit: '' },
        { label: 'Nb d’itérations', min: 1, max: 8, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([u0, n]) => {
        // u_{n+1} = (2u_n + 3)/(u_n + 4) => fixed points: l^2 + 2l - 3 = 0 => 1 and -3
        let u = u0;
        for (let i = 0; i < n; i++) u = (2 * u + 3) / (u + 4);
        return {
          headline: `u_{n+1} = (2u_n+3)/(u_n+4) : u_${n} = ${f(u, 4)} → Point fixe positif l = 1`,
          metrics: [
            { label: `u_${n}`, value: `${f(u, 4)}`, accent: 'emerald' },
            { label: 'Points fixes', value: 'l₁ = 1 ; l₂ = -3', accent: 'amber' },
            { label: 'Raison v_n', value: 'q = -1/5 = -0,2', accent: 'sky' },
          ],
          conclusion: `Quand l’équation aux points fixes a 2 racines distinctes α, β, le quotient (u_n-α)/(u_n-β) est toujours géométrique.`,
          svg: { slope: 0.3, c: 0.7, u0 },
        };
      },
    },
    {
      id: 'mc-sui-9',
      shortTitle: 'Suites complexes z_{n+1} = a z_n + b',
      title: 'Exp. 9 : Spirale géométrique complexe et longueur de ligne brisée',
      goal: 'Calculer |z_{n+1} - z_n| = |a|ⁿ |z₁ - z₀| et la somme des longueurs A_k A_{k+1}.',
      formula: 'L_n = Σ_{k=0}^{n-1} A_k A_{k+1} = A₀A₁ · (1 - |a|ⁿ) / (1 - |a|)',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Module |a|', min: 0.4, max: 0.9, step: 0.1, defaultValue: 0.7, unit: '' },
        { label: 'Longueur initiale A₀A₁', min: 1, max: 5, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([modA, L0]) => {
        const LInf = L0 / (1 - modA);
        return {
          headline: `Spirale convergente : longueur totale à l’infini = ${f(LInf, 2)} u.l.`,
          metrics: [
            { label: 'Longueur limite L_∞', value: `${f(LInf, 2)}`, accent: 'emerald' },
            { label: 'Module |a|', value: `${f(modA, 1)} < 1`, accent: 'amber' },
            { label: 'Point limite Ω', value: 'b / (1 - a)', accent: 'sky' },
          ],
          conclusion: `Même si la ligne brisée comporte une infinité de segments, sa longueur totale reste finie car |a| < 1 !`,
          svg: { re: modA * 2.5, im: modA * 1.5, r: modA * 3, deg: 45 },
        };
      },
    },
    {
      id: 'mc-sui-10',
      shortTitle: 'Méthode de Newton / Héron √A',
      title: 'Exp. 10 : Synthèse BAC C — Convergence quadratique vers √A',
      goal: 'Observer la vitesse foudroyante de u_{n+1} = ½(u_n + A/u_n).',
      formula: 'u_{n+1} = ½ (u_n + A / u_n)  ⟹  |u_{n+1} - √A| = (u_n - √A)² / (2 u_n)',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Nombre A > 0', min: 2, max: 20, step: 1, defaultValue: 5, unit: '' },
        { label: 'Itérations n', min: 1, max: 5, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([A, n]) => {
        let u = A;
        for (let i = 0; i < n; i++) u = 0.5 * (u + A / u);
        const exact = Math.sqrt(A);
        const err = Math.abs(u - exact);
        return {
          headline: `Après ${n} étapes pour √${A} : u_${n} = ${f(u, 6)} (erreur = ${err.toExponential(1)})`,
          metrics: [
            { label: `Approximation u_${n}`, value: `${f(u, 6)}`, accent: 'emerald' },
            { label: `Exact √${A}`, value: `${f(exact, 6)}`, accent: 'sky' },
            { label: 'Précision', value: `${err.toExponential(1)}`, accent: 'amber' },
          ],
          conclusion: `À chaque itération, le nombre de décimales exactes double approximativement !`,
          svg: { slope: 0.2, c: 0.8 * exact, u0: A / 3 },
        };
      },
    },
  ],

  // 9. CALCUL INTÉGRAL & ÉQUATIONS INTÉGRALES (10)
  'mathTc-calcul-integral': [
    {
      id: 'mc-int-1',
      shortTitle: 'Sommes de Riemann (rectangles)',
      title: 'Exp. 1 : Convergence des sommes de Riemann vers ∫_a^b f(x) dx',
      goal: 'Comparer somme des aires rectangulaires et intégrale exacte selon le découpage n.',
      formula: 'lim_{n→∞} [(b-a)/n] Σ f(a + k(b-a)/n) = ∫_a^b f(x) dx',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Subdivisions n', min: 2, max: 20, step: 2, defaultValue: 6, unit: 'rect.' },
        { label: 'Borne b (f(x)=x² sur [0,b])', min: 1, max: 4, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([n, b]) => {
        let sumLeft = 0;
        const dx = b / n;
        for (let k = 0; k < n; k++) sumLeft += (k * dx) ** 2 * dx;
        const exact = (b ** 3) / 3;
        return {
          headline: `${n} rectangles : S_n = ${f(sumLeft, 3)} · Intégrale exacte b³/3 = ${f(exact, 3)}`,
          metrics: [
            { label: 'Somme rectangles', value: `${f(sumLeft, 3)}`, accent: 'sky' },
            { label: 'Valeur exacte ∫x²', value: `${f(exact, 3)}`, accent: 'emerald' },
            { label: 'Erreur relative', value: `${f(Math.abs(exact - sumLeft) / exact * 100, 1)} %`, accent: 'amber' },
          ],
          conclusion: `Plus n augmente, plus l’erreur tend vers 0 (en 1/n pour les rectangles, en 1/n² pour les trapèzes).`,
          svg: { n, b, area: exact },
        };
      },
    },
    {
      id: 'mc-int-2',
      shortTitle: 'Intégration par parties (IPP)',
      title: 'Exp. 2 : Formule ∫ u·v’ = [u·v] - ∫ u’·v',
      goal: 'Choisir judicieusement u(x) à dériver (ALPES : Arctan, Ln, Polynôme, Exp, Sin) et v’(x) à intégrer.',
      formula: '∫_a^b u(x) v’(x) dx = [u(x) v(x)]_a^b - ∫_a^b u’(x) v(x) dx',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne b pour ∫₁^b ln(x) dx', min: 1.5, max: 5.0, step: 0.5, defaultValue: 2.7, unit: '' },
      ],
      evaluate: ([b]) => {
        const res = b * Math.log(b) - b + 1;
        return {
          headline: `∫₁^${f(b, 1)} ln(x) dx = [x ln x - x]₁^${f(b, 1)} = ${f(res, 4)}`,
          metrics: [
            { label: 'Résultat exact', value: `${f(res, 4)}`, accent: 'emerald' },
            { label: 'Choix IPP', value: 'u = ln(x), v’ = 1', accent: 'amber' },
            { label: 'Cas b = e', value: '[e·1 - e] - [0 - 1] = 1', accent: 'sky' },
          ],
          conclusion: `Astuce majeure : écrire ln(x) = 1 · ln(x) et intégrer 1 en x tandis qu’on dérive ln(x) en 1/x.`,
          svg: { n: 10, b, area: res },
        };
      },
    },
    {
      id: 'mc-int-3',
      shortTitle: 'Aire entre deux courbes (u.a.)',
      title: 'Exp. 3 : Calcul géométrique d’aire ∫ |f(x) - g(x)| dx × u.a.',
      goal: 'Ne pas oublier l’unité d’aire u.a. = ||i⃗|| × ||j⃗|| (cm²) ni le signe de f - g.',
      formula: 'A = (∫_a^b |f(x) - g(x)| dx) × (||i⃗|| · ||j⃗||)',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Unité axe ||i⃗||', min: 1, max: 4, step: 0.5, defaultValue: 2, unit: 'cm' },
        { label: 'Unité axe ||j⃗||', min: 1, max: 4, step: 0.5, defaultValue: 2, unit: 'cm' },
      ],
      evaluate: ([ui, uj]) => {
        // Area between x and x^2 on [0,1] = 1/6
        const integralVal = 1 / 6;
        const ua = ui * uj;
        return {
          headline: `∫₀¹ (x - x²) dx = 1/6 ≈ 0,167 · u.a. = ${f(ua, 1)} cm² ⟹ Aire = ${f(integralVal * ua, 3)} cm²`,
          metrics: [
            { label: 'Intégrale algébrique', value: '1/6 ≈ 0,167', accent: 'sky' },
            { label: 'Unité d’aire (u.a.)', value: `${f(ua, 1)} cm²`, accent: 'amber' },
            { label: 'Aire réelle cm²', value: `${f(integralVal * ua, 3)} cm²`, accent: 'emerald' },
          ],
          conclusion: `Toujours vérifier l’unité graphique (ex: 2 cm × 2 cm = 4 cm²) dans la question finale des problèmes d’analyse !`,
          svg: { n: 12, b: 2, area: integralVal * ua },
        };
      },
    },
    {
      id: 'mc-int-4',
      shortTitle: 'Valeur moyenne μ = (1/(b-a))∫f',
      title: 'Exp. 4 : Interprétation de μ (hauteur du rectangle équivalent)',
      goal: 'Trouver la hauteur constante μ donnant la même aire sous la courbe sur [a, b].',
      formula: 'μ = [1 / (b - a)] ∫_a^b f(x) dx  |  Inégalité moyenne : m ≤ μ ≤ M',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne a', min: 0, max: 2, step: 0.5, defaultValue: 0, unit: '' },
        { label: 'Borne b', min: 1, max: 4, step: 0.5, defaultValue: 3, unit: '' },
      ],
      evaluate: ([a, bRaw]) => {
        const b = Math.max(a + 0.5, bRaw);
        const area = (b ** 3 - a ** 3) / 3;
        const mu = area / (b - a);
        return {
          headline: `Pour f(x)=x² sur [${a} ; ${b}] : Aire = ${f(area, 2)} · Valeur moyenne μ = ${f(mu, 2)}`,
          metrics: [
            { label: 'Valeur moyenne μ', value: `${f(mu, 2)}`, accent: 'amber' },
            { label: 'Aire = μ·(b-a)', value: `${f(area, 2)}`, accent: 'emerald' },
            { label: 'Encadrement', value: `${f(a * a, 1)} ≤ μ ≤ ${f(b * b, 1)}`, accent: 'sky' },
          ],
          conclusion: `En physique, la valeur moyenne d’un courant sinusoïdal sur une période est nulle, mais sa valeur efficace vient de la moyenne de i²(t).`,
          svg: { n: 8, b, area: mu },
        };
      },
    },
    {
      id: 'mc-int-5',
      shortTitle: 'Parité & périodicité des intégrales',
      title: 'Exp. 5 : Intégrales sur [-a, a] pour fonctions paires ou impaires',
      goal: 'Exploiter la symétrie pour annuler instantanément les intégrales impaires.',
      formula: 'Paire : ∫_{-a}^a f = 2∫₀^a f  |  Impaire : ∫_{-a}^a f = 0  |  T-périodique : ∫_α^{α+T} = ∫₀^T',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Parité (1=Paire x², 2=Impaire x³)', min: 1, max: 2, step: 1, defaultValue: 2, unit: '' },
        { label: 'Borne symétrique a', min: 1, max: 4, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([par, a]) => {
        const val = par === 1 ? (2 * a ** 3) / 3 : 0;
        return {
          headline: par === 1 ? `Paire sur [-${a};${a}] : 2 × ∫₀^${a} x² dx = ${f(val, 2)}` : `Impaire sur [-${a};${a}] : ∫_{-${a}}^${a} x³ dx = 0 (compensation exacte !)`,
          metrics: [
            { label: 'Valeur intégrale', value: `${f(val, 2)}`, accent: par === 2 ? 'emerald' : 'amber' },
            { label: 'Symétrie', value: par === 1 ? 'Axe (Oy) : aires doubles' : 'Origine O : aires opposées', accent: 'sky' },
            { label: 'Périodicité T', value: 'Indépendant du point départ', accent: 'purple' },
          ],
          conclusion: `Dans une intégrale paire/impaire centrée en 0, repérer les termes impairs annule la moitié du calcul !`,
          svg: { n: 10, b: a, area: val },
        };
      },
    },
    {
      id: 'mc-int-6',
      shortTitle: 'Solide de révolution V = π ∫ f² dx',
      title: 'Exp. 6 : Volume engendré par rotation autour de (Ox)',
      goal: 'Retrouver le volume d’un cône, d’une sphère ou d’un paraboloïde par disques infinitésimaux.',
      formula: 'V = π ∫_a^b [f(x)]² dx  ×  u.v.  (u.v. = ||i⃗||·||j⃗||·||k⃗||)',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Hauteur / Rayon h', min: 1, max: 5, step: 0.5, defaultValue: 3, unit: 'u' },
        { label: 'Profil (1=Cône, 2=Sphère)', min: 1, max: 2, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([R, prof]) => {
        const V = prof === 1 ? (Math.PI * R ** 3) / 3 : (4 * Math.PI * R ** 3) / 3;
        return {
          headline: `${prof === 1 ? 'Cône (r=h)' : 'Sphère'} de paramètre ${R} : V = ${f(V, 2)} u.v.`,
          metrics: [
            { label: 'Volume V', value: `${f(V, 2)} u.v.`, accent: 'emerald' },
            { label: 'Formule exacte', value: prof === 1 ? '⅓ π R³' : '⁴⁄₃ π R³', accent: 'amber' },
            { label: 'Section en x', value: 'Disque d’aire π f(x)²', accent: 'sky' },
          ],
          conclusion: `Pour une demi-sphère, f(x) = √(R² - x²) donc f(x)² = R² - x² s’intègre très facilement en un polynôme !`,
          svg: { n: 12, b: R, area: V / 10 },
        };
      },
    },
    {
      id: 'mc-int-7',
      shortTitle: 'Fonction intégrale F(x) = ∫_a^x f(t) dt',
      title: 'Exp. 7 : Théorème fondamental F’(x) = f(x) et variations de F',
      goal: 'Étudier le sens de variation d’une primitive F sans même connaître son expression explicite.',
      formula: 'F(x) = ∫_a^x f(t) dt  ⟹  F(a) = 0  et  F’(x) = f(x)',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne variable x', min: 0, max: 4, step: 0.5, defaultValue: 2.5, unit: '' },
      ],
      evaluate: ([x]) => {
        // f(t) = e^(-t^2) positive => F(x) increasing
        const fp = Math.exp(-x * x);
        return {
          headline: `F(x) = ∫₀^x e^(-t²) dt : F’(x) = e^(-x²) = ${f(fp, 4)} > 0 ⟹ F strictement croissante`,
          metrics: [
            { label: 'Dérivée F’(x)', value: `${f(fp, 4)}`, accent: 'emerald' },
            { label: 'Concavité F’’(x)', value: `${f(-2 * x * fp, 4)} ≤ 0`, accent: 'sky' },
            { label: 'Condition F(0)', value: '0', accent: 'amber' },
          ],
          conclusion: `Même si e^(-t²) n’a pas de primitive élémentaire, on connaît parfaitement F(0), F’(x) et F’’(x) !`,
          svg: { n: 10, b: Math.max(0.5, x), area: Math.min(0.89, x * 0.4) },
        };
      },
    },
    {
      id: 'mc-int-8',
      shortTitle: 'Dérivée de ∫_{u(x)}^{v(x)} f(t) dt',
      title: 'Exp. 8 : Règle de Leibniz avec bornes composées',
      goal: 'Dériver correctement G(x) = ∫_a^{u(x)} f(t) dt = F(u(x)) - F(a).',
      formula: 'G(x) = ∫_a^{u(x)} f(t) dt  ⟹  G’(x) = u’(x) · f(u(x))',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Variable x (u(x) = x²)', min: 0.5, max: 3.0, step: 0.5, defaultValue: 1.5, unit: '' },
      ],
      evaluate: ([x]) => {
        const u = x * x;
        const up = 2 * x;
        const fAtU = 1 / (1 + u);
        const Gp = up * fAtU;
        return {
          headline: `G(x) = ∫₀^(x²) dt/(1+t) : G’(${f(x, 1)}) = 2x / (1+x²) = ${f(Gp, 3)}`,
          metrics: [
            { label: 'Dérivée borne u’', value: `2x = ${f(up, 1)}`, accent: 'sky' },
            { label: 'f(u(x))', value: `${f(fAtU, 3)}`, accent: 'amber' },
            { label: 'G’(x) = u’·f(u)', value: `${f(Gp, 3)}`, accent: 'emerald' },
          ],
          conclusion: `Ne jamais oublier de multiplier par u’(x) quand la borne supérieure est une fonction de x !`,
          svg: { x0: x, h: 0.4, slope: Gp, secSlope: fAtU },
        };
      },
    },
    {
      id: 'mc-int-9',
      shortTitle: 'Linéarité & relation de Chasles',
      title: 'Exp. 9 : Combinaisons I + J et I - J pour intégrales trigonométriques',
      goal: 'Calculer I = ∫₀^(π/2) cos²(x) dx et J = ∫₀^(π/2) sin²(x) dx sans primitivaion pénible.',
      formula: 'I + J = ∫₀^(π/2) 1 dx = π/2  et  I - J = ∫₀^(π/2) cos(2x) dx = 0  ⟹  I = J = π/4',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne sup b (en multiples de π/4)', min: 1, max: 4, step: 1, defaultValue: 2, unit: '×π/4' },
      ],
      evaluate: ([k]) => {
        const b = (k * Math.PI) / 4;
        const sum = b;
        const diff = 0.5 * Math.sin(2 * b);
        const I = 0.5 * (sum + diff);
        const J = 0.5 * (sum - diff);
        return {
          headline: `Sur [0 ; ${k}π/4] : I+J = ${f(sum, 3)} · I-J = ${f(diff, 3)} ⟹ I = ${f(I, 3)}, J = ${f(J, 3)}`,
          metrics: [
            { label: 'I = ∫ cos²x dx', value: `${f(I, 3)}`, accent: 'emerald' },
            { label: 'J = ∫ sin²x dx', value: `${f(J, 3)}`, accent: 'sky' },
            { label: 'Somme I + J', value: `${f(sum, 3)}`, accent: 'amber' },
          ],
          conclusion: `La méthode I+J et I-J est un classique incontournable du BAC C pour les couples d’intégrales symétriques.`,
          svg: { n: 8, b, area: I },
        };
      },
    },
    {
      id: 'mc-int-10',
      shortTitle: 'Intégration fractions rationnelles',
      title: 'Exp. 10 : Synthèse BAC C — Décomposition en éléments simples',
      goal: 'Intégrer 1/(x² - 1) = ½[1/(x-1) - 1/(x+1)] ou (ax+b)/(x+c).',
      formula: '∫_a^b dx/(x²-1) = ½ [ln|(x-1)/(x+1)|]_a^b',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne b > 2 (sur [2 ; b])', min: 2.5, max: 6.0, step: 0.5, defaultValue: 4.0, unit: '' },
      ],
      evaluate: ([b]) => {
        const Fb = 0.5 * Math.log((b - 1) / (b + 1));
        const F2 = 0.5 * Math.log(1 / 3);
        const val = Fb - F2;
        return {
          headline: `∫₂^${f(b, 1)} dx/(x² - 1) = ½ ln[3(${f(b - 1, 1)})/(${f(b + 1, 1)})] = ${f(val, 4)}`,
          metrics: [
            { label: 'Intégrale exacte', value: `${f(val, 4)}`, accent: 'emerald' },
            { label: 'Décomposition', value: '½/(x-1) - ½/(x+1)', accent: 'amber' },
            { label: 'Astuce ln', value: 'Regrouper en ln(A/B)', accent: 'sky' },
          ],
          conclusion: `Dès que le dénominateur se factorise en (x-α)(x-β), décomposer en a/(x-α) + b/(x-β) donne immédiatement des logarithmes.`,
          svg: { n: 10, b, area: val },
        };
      },
    },
  ],

  // 10. DÉNOMBREMENT & PROBABILITÉS CONDITIONNELLES (10)
  'mathTc-denombrement-probas': [
    {
      id: 'mc-den-1',
      shortTitle: 'Triangle de Pascal & C_n^p',
      title: 'Exp. 1 : Combinaisons C_n^p (simultané) vs Arrangements A_n^p (successif)',
      goal: 'Choisir la bonne formule selon que le tirage est simultané, successif sans remise ou avec remise.',
      formula: 'Simultané : C_n^p = n!/(p!(n-p)!)  |  Successif sans rem. : A_n^p  |  Avec rem. : n^p',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Effectif total n', min: 4, max: 12, step: 1, defaultValue: 8, unit: '' },
        { label: 'Taille tirage p', min: 1, max: 6, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([n, pRaw]) => {
        const p = Math.min(n, pRaw);
        const fact = (k: number): number => (k <= 1 ? 1 : k * fact(k - 1));
        const comb = Math.round(fact(n) / (fact(p) * fact(n - p)));
        const arr = Math.round(fact(n) / fact(n - p));
        const pow = Math.pow(n, p);
        return {
          headline: `C_${n}^${p} = ${comb} · A_${n}^${p} = ${arr} · ${n}^${p} = ${pow}`,
          metrics: [
            { label: `Simultané C_${n}^${p}`, value: `${comb}`, accent: 'emerald' },
            { label: `Sans remise A_${n}^${p}`, value: `${arr}`, accent: 'amber' },
            { label: `Avec remise n^p`, value: `${pow}`, accent: 'sky' },
          ],
          conclusion: `L’ordre compte pour les p-listes (n^p) et arrangements (A_n^p), mais PAS pour les combinaisons (C_n^p).`,
          svg: { n, p: p / n },
        };
      },
    },
    {
      id: 'mc-den-2',
      shortTitle: 'Formule du binôme de Newton',
      title: 'Exp. 2 : Coefficients C_n^k et développement (a + b)ⁿ',
      goal: 'Vérifier Σ_{k=0}^n C_n^k = 2ⁿ et Σ (-1)^k C_n^k = 0.',
      formula: '(a + b)ⁿ = Σ_{k=0}^n C_n^k a^(n-k) b^k',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Puissance n', min: 2, max: 10, step: 1, defaultValue: 6, unit: '' },
      ],
      evaluate: ([n]) => {
        const sum = Math.pow(2, n);
        return {
          headline: `(1 + 1)^${n} = Σ C_${n}^k = ${sum} · Terme central k = ${Math.floor(n / 2)}`,
          metrics: [
            { label: 'Somme ligne Pascal', value: `2^${n} = ${sum}`, accent: 'amber' },
            { label: 'Somme alternée', value: '0 (pour a=1, b=-1)', accent: 'sky' },
            { label: 'Symétrie', value: `C_${n}^k = C_${n}^(${n}-k)`, accent: 'emerald' },
          ],
          conclusion: `La relation de Pascal C_n^p + C_n^(p+1) = C_{n+1}^(p+1) permet de construire les coefficients sans factorielle.`,
          svg: { n, p: 0.5 },
        };
      },
    },
    {
      id: 'mc-den-3',
      shortTitle: 'Tirage dans une urne (Au moins un)',
      title: 'Exp. 3 : Passage à l’événement contraire P(A) = 1 - P(Ā)',
      goal: 'Calculer "au moins une boule rouge" en passant par "aucune boule rouge".',
      formula: 'P("au moins 1") = 1 - P("aucune")',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Nb boules rouges (sur 10)', min: 1, max: 8, step: 1, defaultValue: 3, unit: '' },
        { label: 'Boules tirées (simultané)', min: 2, max: 5, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([R, k]) => {
        const c = (n: number, p: number): number => {
          if (p < 0 || p > n) return 0;
          let r = 1;
          for (let i = 1; i <= p; i++) r = (r * (n - i + 1)) / i;
          return r;
        };
        const pNone = c(10 - R, k) / c(10, k);
        const pAtLeast1 = 1 - pNone;
        return {
          headline: `P(≥ 1 rouge) = 1 - ${f(pNone, 3)} = ${f(pAtLeast1, 3)} (${f(pAtLeast1 * 100, 1)} %)`,
          metrics: [
            { label: 'P(au moins 1 R)', value: `${f(pAtLeast1, 4)}`, accent: 'emerald' },
            { label: 'P(0 rouge)', value: `${f(pNone, 4)}`, accent: 'rose' },
            { label: 'Total cas C₁₀^k', value: `${c(10, k)}`, accent: 'amber' },
          ],
          conclusion: `Dès qu’un énoncé contient "au moins un(e)", le réflexe BAC C est d’évaluer l’événement contraire "zéro".`,
          svg: { n: 10, p: R / 10 },
        };
      },
    },
    {
      id: 'mc-den-4',
      shortTitle: 'Probabilité conditionnelle P_A(B)',
      title: 'Exp. 4 : Conditionnement P_A(B) = P(A ∩ B) / P(A)',
      goal: 'Visualiser la restriction de l’univers Ω à A lors d’un savoir préalable.',
      formula: 'P_A(B) = P(A ∩ B) / P(A)  ⟹  P(A ∩ B) = P(A) · P_A(B)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'P(A)', min: 0.1, max: 0.9, step: 0.1, defaultValue: 0.4, unit: '' },
        { label: 'P(A ∩ B) (≤ P(A))', min: 0.05, max: 0.4, step: 0.05, defaultValue: 0.2, unit: '' },
      ],
      evaluate: ([pA, pABraw]) => {
        const pAB = Math.min(pA, pABraw);
        const pBgA = pAB / pA;
        return {
          headline: `P_A(B) = ${f(pAB)} / ${f(pA, 1)} = ${f(pBgA, 3)} (${f(pBgA * 100, 1)} %)`,
          metrics: [
            { label: 'P_A(B)', value: `${f(pBgA, 3)}`, accent: 'emerald' },
            { label: 'P(A ∩ B)', value: `${f(pAB)}`, accent: 'sky' },
            { label: 'P_A(B̄)', value: `${f(1 - pBgA, 3)}`, accent: 'amber' },
          ],
          conclusion: `Ne jamais confondre P_A(B) ("sachant A") avec P(A ∩ B) ("A et B simultanément").`,
          svg: { n: 6, p: pBgA },
        };
      },
    },
    {
      id: 'mc-den-5',
      shortTitle: 'Formule des probabilités totales',
      title: 'Exp. 5 : Arbre pondéré et partition (B, B̄)',
      goal: 'Calculer P(A) = P(B)·P_B(A) + P(B̄)·P_{B̄}(A) en sommant les chemins menant à A.',
      formula: 'P(A) = P(B ∩ A) + P(B̄ ∩ A) = P(B)·P_B(A) + P(B̄)·P_{B̄}(A)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Prévalence P(B)', min: 0.1, max: 0.9, step: 0.1, defaultValue: 0.3, unit: '' },
        { label: 'P_B(A)', min: 0.1, max: 0.95, step: 0.05, defaultValue: 0.8, unit: '' },
        { label: 'P_{B̄}(A)', min: 0.05, max: 0.6, step: 0.05, defaultValue: 0.1, unit: '' },
      ],
      evaluate: ([pB, pAgB, pAgNotB]) => {
        const pA = pB * pAgB + (1 - pB) * pAgNotB;
        return {
          headline: `P(A) = ${f(pB, 1)}×${f(pAgB)} + ${f(1 - pB, 1)}×${f(pAgNotB)} = ${f(pA, 4)}`,
          metrics: [
            { label: 'P(A) totale', value: `${f(pA, 4)}`, accent: 'emerald' },
            { label: 'Branche B ∩ A', value: `${f(pB * pAgB, 4)}`, accent: 'sky' },
            { label: 'Branche B̄ ∩ A', value: `${f((1 - pB) * pAgNotB, 4)}`, accent: 'amber' },
          ],
          conclusion: `La somme des poids sortant d’un même nœud d’un arbre pondéré vaut toujours exactement 1.`,
          svg: { n: 8, p: pA },
        };
      },
    },
    {
      id: 'mc-den-6',
      shortTitle: 'Inversion de Bayes P_A(B)',
      title: 'Exp. 6 : Test médical (sensibilité, spécificité et faux positifs)',
      goal: 'Inverser l’arbre pour trouver P(Malade | Test +) et comprendre l’effet de la rareté.',
      formula: 'P_T(M) = [P(M)·P_M(T)] / [P(M)·P_M(T) + P(M̄)·P_{M̄}(T)]',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Prévalence maladie (%)', min: 1, max: 20, step: 1, defaultValue: 2, unit: '%' },
        { label: 'Faux positifs (%)', min: 1, max: 15, step: 1, defaultValue: 5, unit: '%' },
      ],
      evaluate: ([prevPct, fpPct]) => {
        const pM = prevPct / 100;
        const pTpM = 0.98;
        const pTpNotM = fpPct / 100;
        const pT = pM * pTpM + (1 - pM) * pTpNotM;
        const bayes = (pM * pTpM) / pT;
        return {
          headline: `Test positif : probabilité d’être réellement malade P_T(M) = ${f(bayes * 100, 1)} %`,
          metrics: [
            { label: 'Vraie proba P_T(M)', value: `${f(bayes * 100, 1)} %`, accent: bayes > 0.5 ? 'emerald' : 'rose' },
            { label: 'P(Test +) global', value: `${f(pT * 100, 2)} %`, accent: 'amber' },
            { label: 'Part faux positifs', value: `${f(((1 - bayes) * 100), 1)} %`, accent: 'sky' },
          ],
          conclusion: `Quand une maladie est rare (2 %), même un test fiable à 95 % produit beaucoup de faux positifs !`,
          svg: { n: 10, p: bayes },
        };
      },
    },
    {
      id: 'mc-den-7',
      shortTitle: 'Indépendance de 2 événements',
      title: 'Exp. 7 : Test P(A ∩ B) = P(A)·P(B) vs Incompatibilité A ∩ B = ∅',
      goal: 'Distinguer fondamentalement indépendance probabiliste et incompatibilité ensembliste.',
      formula: 'A, B indépendants ⟺ P(A ∩ B) = P(A)·P(B)  |  Incompatibles ⟺ P(A ∩ B) = 0',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'P(A)', min: 0.1, max: 0.8, step: 0.1, defaultValue: 0.5, unit: '' },
        { label: 'P(B)', min: 0.1, max: 0.8, step: 0.1, defaultValue: 0.4, unit: '' },
        { label: 'P(A ∩ B) observée', min: 0, max: 0.4, step: 0.05, defaultValue: 0.2, unit: '' },
      ],
      evaluate: ([pA, pB, pAB]) => {
        const prod = pA * pB;
        const indep = Math.abs(pAB - prod) < 0.015;
        return {
          headline: `P(A)·P(B) = ${f(prod)} vs P(A∩B) = ${f(pAB)} ⟹ ${indep ? 'INDÉPENDANTS ✓' : 'DÉPENDANTS'}`,
          metrics: [
            { label: 'Produit P(A)·P(B)', value: `${f(prod)}`, accent: 'sky' },
            { label: 'P(A ∪ B)', value: `${f(Math.min(1, pA + pB - pAB))}`, accent: 'amber' },
            { label: 'Indépendance ?', value: indep ? 'Oui ✓' : 'Non ✗', accent: indep ? 'emerald' : 'rose' },
          ],
          conclusion: `Deux événements incompatibles de probabilités non nulles ne sont JAMAIS indépendants (P(A∩B)=0 ≠ P(A)P(B)).`,
          svg: { n: 6, p: pAB },
        };
      },
    },
    {
      id: 'mc-den-8',
      shortTitle: 'Épreuve répétée (suite de probas)',
      title: 'Exp. 8 : Suite probabiliste p_{n+1} = a p_n + b (état après n tours)',
      goal: 'Modéliser un jeu ou un système aléatoire d’étape n à n+1 par probabilités totales.',
      formula: 'p_{n+1} = P_n(A)·p_n + P_n(Ā)·(1 - p_n)',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'P(Gagner | Gagné avant)', min: 0.2, max: 0.9, step: 0.1, defaultValue: 0.7, unit: '' },
        { label: 'P(Gagner | Perdu avant)', min: 0.1, max: 0.6, step: 0.1, defaultValue: 0.3, unit: '' },
      ],
      evaluate: ([pStay, pRecover]) => {
        const a = pStay - pRecover;
        const b = pRecover;
        const lim = b / (1 - a);
        return {
          headline: `p_{n+1} = ${f(a, 1)} p_n + ${f(b, 1)} ⟹ Équilibre à long terme p_∞ = ${f(lim, 3)}`,
          metrics: [
            { label: 'Coef. récurrence a', value: `${f(a, 1)}`, accent: 'sky' },
            { label: 'Proba limite p_∞', value: `${f(lim * 100, 1)} %`, accent: 'emerald' },
            { label: 'p₁ (si p₀=1)', value: `${f(pStay, 2)}`, accent: 'amber' },
          ],
          conclusion: `Les sujets BAC C adorent combiner un arbre pondéré au rang n et une suite arithmético-géométrique !`,
          svg: { slope: a, c: b, u0: 1 },
        };
      },
    },
    {
      id: 'mc-den-9',
      shortTitle: 'Dénombrement de mots & anagrammes',
      title: 'Exp. 9 : Permutations avec répétitions n! / (k₁! k₂!...)',
      goal: 'Compter les anagrammes distincts d’un mot contenant des lettres identiques.',
      formula: 'Nb anagrammes = n! / (n_1! · n_2! · ...)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Longueur mot n', min: 4, max: 9, step: 1, defaultValue: 5, unit: 'lettres' },
        { label: 'Répétitions d’une lettre k', min: 1, max: 4, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([n, kRaw]) => {
        const k = Math.min(n, kRaw);
        const fact = (m: number): number => (m <= 1 ? 1 : m * fact(m - 1));
        const res = Math.round(fact(n) / fact(k));
        return {
          headline: `Mot de ${n} lettres dont une répétée ${k}× : ${n}! / ${k}! = ${res} anagrammes`,
          metrics: [
            { label: 'Anagrammes distincts', value: `${res}`, accent: 'emerald' },
            { label: 'Sans répétition n!', value: `${fact(n)}`, accent: 'sky' },
            { label: 'Facteur division', value: `÷ ${fact(k)}`, accent: 'amber' },
          ],
          conclusion: `Exemple : "GABON" (5 lettres distinctes) donne 5! = 120 anagrammes ; "BACCA" donne 5!/(2!2!) = 30.`,
          svg: { n, p: k / n },
        };
      },
    },
    {
      id: 'mc-den-10',
      shortTitle: 'Jeu équitable E(X) = 0',
      title: 'Exp. 10 : Synthèse BAC C — Paramétrer une mise m pour jeu équitable',
      goal: 'Calculer l’espérance de gain algébrique et régler la mise d’entrée.',
      formula: 'Jeu équitable  ⟺  E(Gain net) = Σ x_i p_i - mise = 0',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Mise d’entrée m', min: 1, max: 10, step: 0.5, defaultValue: 4, unit: '×1000 F' },
      ],
      evaluate: ([mise]) => {
        // Suppose gross payout expectation = 4.5
        const Ebrut = 4.5;
        const Enet = Ebrut - mise;
        return {
          headline: `Espérance brute = 4,5 ⟹ E(net) = ${f(Enet)} (${Math.abs(Enet) < 0.05 ? 'JEU ÉQUITABLE !' : Enet > 0 ? 'Favorable au joueur' : 'Favorable organisateur'})`,
          metrics: [
            { label: 'E(Gain net)', value: `${f(Enet)} kF`, accent: Math.abs(Enet) < 0.05 ? 'emerald' : Enet > 0 ? 'sky' : 'rose' },
            { label: 'Mise équitable', value: '4,5 kF', accent: 'amber' },
            { label: 'Linéarité espérance', value: 'E(aX+b) = aE(X)+b', accent: 'sky' },
          ],
          conclusion: `Pour rendre le jeu équitable, il faut fixer la mise exactement égale à l’espérance du gain brut.`,
          svg: { n: 8, p: Math.min(0.95, mise / 10) },
        };
      },
    },
  ],
};
