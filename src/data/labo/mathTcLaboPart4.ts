import { MathLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const MATH_TC_LABO_PART4: Record<string, MathLaboExpSpec[]> = {
  // 11. LOIS DE PROBABILITÉ & STATISTIQUES À 2 VARIABLES (10)
  'mathTc-lois-probas-stats': [
    {
      id: 'mc-sta-1',
      shortTitle: 'Loi Binomiale B(n, p)',
      title: 'Exp. 1 : Distribution en bâtons P(X = k) = C_n^k p^k (1-p)^(n-k)',
      goal: 'Visualiser le déplacement du pic autour de n·p quand n ou p varie.',
      formula: 'P(X = k) = C_n^k · p^k · (1 - p)^(n - k)  |  E(X) = np, σ = √(np(1-p))',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Essais n', min: 4, max: 16, step: 1, defaultValue: 10, unit: '' },
        { label: 'Succès p', min: 0.1, max: 0.9, step: 0.1, defaultValue: 0.4, unit: '' },
      ],
      evaluate: ([n, p]) => {
        const mu = n * p;
        const sigma = Math.sqrt(n * p * (1 - p));
        const p0 = Math.pow(1 - p, n);
        return {
          headline: `B(${n} ; ${f(p, 1)}) : E(X) = ${f(mu)} · σ(X) = ${f(sigma)} · P(X ≥ 1) = ${f(1 - p0, 4)}`,
          metrics: [
            { label: 'Espérance E(X)', value: `${f(mu)}`, accent: 'emerald' },
            { label: 'Écart-type σ(X)', value: `${f(sigma)}`, accent: 'amber' },
            { label: 'P(X = 0)', value: `${f(p0, 4)}`, accent: 'sky' },
          ],
          conclusion: `Plus n est grand, plus la distribution binomiale devient symétrique en cloche autour de E(X) = n·p.`,
          svg: { n, p },
        };
      },
    },
    {
      id: 'mc-sta-2',
      shortTitle: 'Espérance, Variance & Koenig-Huygens',
      title: 'Exp. 2 : Calcul de V(X) = E(X²) - [E(X)]² sur loi discrète',
      goal: 'Comparer la formule de définition Σ(x_i - μ)²p_i et la formule rapide E(X²) - μ².',
      formula: 'V(X) = E(X²) - [E(X)]²  ;  V(aX + b) = a² · V(X)  ;  σ(aX+b) = |a|σ(X)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Multiplicateur a', min: 1, max: 5, step: 1, defaultValue: 2, unit: '' },
        { label: 'Translation b', min: -5, max: 10, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([a, b]) => {
        // Suppose base E(X)=2, V(X)=1.5
        const EX = 2;
        const VX = 1.5;
        const EY = a * EX + b;
        const VY = a * a * VX;
        return {
          headline: `Y = ${a}X + ${b} ⟹ E(Y) = ${EY} · V(Y) = ${f(VY)} · σ(Y) = ${f(Math.sqrt(VY))}`,
          metrics: [
            { label: 'E(aX + b)', value: `${EY}`, accent: 'sky' },
            { label: 'V(aX + b) = a²V(X)', value: `${f(VY)}`, accent: 'amber' },
            { label: 'Rôle de b sur V(X)', value: 'Nul (invariant)', accent: 'emerald' },
          ],
          conclusion: `Ajouter une constante b décale la moyenne de +b mais ne change jamais la dispersion σ ni la variance.`,
          svg: { n: 8, p: Math.min(0.9, 0.2 * a) },
        };
      },
    },
    {
      id: 'mc-sta-3',
      shortTitle: 'Fonction de répartition F(x)',
      title: 'Exp. 3 : Courbe en escalier F(x) = P(X ≤ x) et probabilité d’intervalle',
      goal: 'Lire F(x) et calculer P(a < X ≤ b) = F(b) - F(a).',
      formula: 'F(x) = P(X ≤ x) croissante de 0 à 1  |  P(X > k) = 1 - F(k)',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Seuil k (sur B(10 ; 0,5))', min: 0, max: 10, step: 1, defaultValue: 5, unit: '' },
      ],
      evaluate: ([k]) => {
        const comb = (n: number, r: number): number => {
          let c = 1;
          for (let i = 1; i <= r; i++) c = (c * (n - i + 1)) / i;
          return c;
        };
        let cdf = 0;
        for (let i = 0; i <= k; i++) cdf += comb(10, i) * Math.pow(0.5, 10);
        return {
          headline: `F(${k}) = P(X ≤ ${k}) = ${f(cdf, 4)} · P(X > ${k}) = ${f(1 - cdf, 4)}`,
          metrics: [
            { label: `F(${k}) = P(X ≤ ${k})`, value: `${f(cdf, 4)}`, accent: 'emerald' },
            { label: `P(X > ${k})`, value: `${f(1 - cdf, 4)}`, accent: 'rose' },
            { label: 'Saut en x = k', value: `P(X = ${k})`, accent: 'amber' },
          ],
          conclusion: `Attention aux inégalités strictes vs larges sur les lois discrètes : P(X < k) = F(k - 1) !`,
          svg: { n: 10, p: 0.5, highlightK: k },
        };
      },
    },
    {
      id: 'mc-sta-4',
      shortTitle: 'Loi exponentielle & sans vieillissement',
      title: 'Exp. 4 : Durée de vie T ~ Exp(λ) et propriété sans mémoire',
      goal: 'Calculer P(T ≤ t) = 1 - e^(-λt), demi-vie et espérance E(T) = 1/λ.',
      formula: 'P(T ≤ t) = 1 - e^(-λt)  |  E(T) = 1/λ  |  P_{T>s}(T > s+t) = P(T > t)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Taux de panne λ', min: 0.05, max: 0.5, step: 0.05, defaultValue: 0.2, unit: 'an⁻¹' },
        { label: 'Durée t', min: 1, max: 15, step: 1, defaultValue: 5, unit: 'ans' },
      ],
      evaluate: ([lam, t]) => {
        const pSurv = Math.exp(-lam * t);
        const E = 1 / lam;
        return {
          headline: `P(T > ${t} ans) = ${f(pSurv * 100, 1)} % · Durée de vie moyenne E(T) = ${f(E, 1)} ans`,
          metrics: [
            { label: 'Survie P(T > t)', value: `${f(pSurv, 4)}`, accent: 'emerald' },
            { label: 'Panne P(T ≤ t)', value: `${f(1 - pSurv, 4)}`, accent: 'rose' },
            { label: 'Espérance 1/λ', value: `${f(E, 1)} ans`, accent: 'amber' },
          ],
          conclusion: `Un composant suivant une loi exponentielle ne vieillit pas : savoir qu’il a tenu 5 ans ne change pas sa survie future.`,
          svg: { a: lam, h: t, lim: 0, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-sta-5',
      shortTitle: 'Loi uniforme sur [a, b]',
      title: 'Exp. 5 : Densité constante f(x) = 1/(b-a) et attente moyenne',
      goal: 'Calculer P(c ≤ X ≤ d) = (d - c)/(b - a) et E(X) = (a + b)/2.',
      formula: 'f(x) = 1/(b-a) sur [a,b]  |  E(X) = (a+b)/2  |  V(X) = (b-a)² / 12',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Intervalle [0 ; b]', min: 4, max: 20, step: 2, defaultValue: 12, unit: 'min' },
        { label: 'Attente max c', min: 1, max: 10, step: 1, defaultValue: 4, unit: 'min' },
      ],
      evaluate: ([b, cRaw]) => {
        const c = Math.min(b, cRaw);
        const p = c / b;
        return {
          headline: `Sur [0 ; ${b}] : P(X ≤ ${c}) = ${c}/${b} = ${f(p, 3)} · Moyenne E(X) = ${f(b / 2, 1)} min`,
          metrics: [
            { label: `P(X ≤ ${c})`, value: `${f(p, 3)}`, accent: 'emerald' },
            { label: 'Espérance (a+b)/2', value: `${f(b / 2, 1)} min`, accent: 'amber' },
            { label: 'Écart-type (b-a)/√12', value: `${f(b / Math.sqrt(12))}`, accent: 'sky' },
          ],
          conclusion: `Sur une loi continue, la probabilité d’un événement ponctuel P(X = x₀) est toujours nulle (= 0).`,
          svg: { n: 6, b: c, area: p },
        };
      },
    },
    {
      id: 'mc-sta-6',
      shortTitle: 'Nuage de points & Point moyen G',
      title: 'Exp. 6 : Coordonnées du point moyen G(x̄, ȳ) et ajustement',
      goal: 'Calculer x̄, ȳ et vérifier que toute droite des moindres carrés passe obligatoirement par G.',
      formula: 'x̄ = (1/N) Σ x_i  ;  ȳ = (1/N) Σ y_i  |  G(x̄, ȳ) ∈ (D)',
      visualKind: 'regression-line',
      sliders: [
        { label: 'Dispersion bruit σ', min: 0, max: 2.0, step: 0.25, defaultValue: 0.5, unit: '' },
        { label: 'Pente vraie a', min: 0.5, max: 2.0, step: 0.25, defaultValue: 1.0, unit: '' },
      ],
      evaluate: ([noise, a]) => {
        const r = 1 / Math.sqrt(1 + (noise / Math.max(0.2, a)) ** 2 * 0.5);
        return {
          headline: `Point moyen G(3,5 ; ${f(3.5 * a + 1)}) · Corrélation estimée r = ${f(r, 3)}`,
          metrics: [
            { label: 'Point moyen G', value: `(3,5 ; ${f(3.5 * a + 1)})`, accent: 'amber' },
            { label: 'Coeff. corrélation r', value: `${f(r, 3)}`, accent: r > 0.9 ? 'emerald' : 'sky' },
            { label: 'Qualité ajustement', value: r > 0.9 ? 'Fort linéaire' : 'Modéré', accent: 'sky' },
          ],
          conclusion: `Plus |r| est proche de 1 (|r| ≥ 0,9), plus l’ajustement affine est légitime.`,
          svg: { a, b: 1, noise, r },
        };
      },
    },
    {
      id: 'mc-sta-7',
      shortTitle: 'Droite de régression y = ax + b',
      title: 'Exp. 7 : Méthode des moindres carrés a = Cov(X,Y) / V(X)',
      goal: 'Calculer la pente a et l’ordonnée à l’origine b = ȳ - a x̄ pour effectuer des prévisions.',
      formula: 'a = Cov(X,Y) / V(X)  et  b = ȳ - a·x̄  |  Cov(X,Y) = (1/N)Σx_i y_i - x̄ ȳ',
      visualKind: 'regression-line',
      sliders: [
        { label: 'Covariance Cov(X,Y)', min: 1, max: 12, step: 0.5, defaultValue: 6, unit: '' },
        { label: 'Variance V(X)', min: 1, max: 8, step: 0.5, defaultValue: 4, unit: '' },
      ],
      evaluate: ([cov, vx]) => {
        const a = cov / vx;
        const xBar = 5;
        const yBar = 10;
        const b = yBar - a * xBar;
        return {
          headline: `y = ${f(a, 2)}x + (${f(b, 2)}) · Prévision en x = 8 : ŷ = ${f(a * 8 + b, 2)}`,
          metrics: [
            { label: 'Pente a = Cov/V(X)', value: `${f(a, 3)}`, accent: 'emerald' },
            { label: 'Ordonnée b = ȳ - ax̄', value: `${f(b, 2)}`, accent: 'sky' },
            { label: 'Prévision x = 8', value: `${f(a * 8 + b, 2)}`, accent: 'amber' },
          ],
          conclusion: `Attention : la droite de régression de x en y (x = a’y + b’) a pour pente a’ = Cov(X,Y)/V(Y) ≠ 1/a sauf si |r| = 1.`,
          svg: { a, b: 1, noise: 0.3, r: 0.96 },
        };
      },
    },
    {
      id: 'mc-sta-8',
      shortTitle: 'Méthode de Mayer (2 sous-nuages)',
      title: 'Exp. 8 : Droite de Mayer passant par G₁ et G₂',
      goal: 'Couper la série ordonnée en deux moitiés et tracer la droite (G₁G₂).',
      formula: 'a = (ȳ₂ - ȳ₁)/(x̄₂ - x̄₁)  et  G ∈ (G₁G₂) automatiquement !',
      visualKind: 'regression-line',
      sliders: [
        { label: 'Ordonnée G₁ (x₁=2)', min: 1, max: 6, step: 0.5, defaultValue: 3, unit: '' },
        { label: 'Ordonnée G₂ (x₂=6)', min: 4, max: 12, step: 0.5, defaultValue: 8, unit: '' },
      ],
      evaluate: ([y1, y2]) => {
        const a = (y2 - y1) / 4;
        const b = y1 - 2 * a;
        return {
          headline: `G₁(2 ; ${f(y1, 1)}) et G₂(6 ; ${f(y2, 1)}) ⟹ Droite Mayer : y = ${f(a, 2)}x + (${f(b, 2)})`,
          metrics: [
            { label: 'Pente (G₁G₂)', value: `${f(a, 2)}`, accent: 'emerald' },
            { label: 'Point moyen G', value: `(4 ; ${f((y1 + y2) / 2, 1)})`, accent: 'amber' },
            { label: 'Prévision x = 10', value: `${f(10 * a + b, 2)}`, accent: 'sky' },
          ],
          conclusion: `La droite de Mayer est plus rapide à calculer à la main et passe toujours par le point moyen global G.`,
          svg: { a, b: 0.8, noise: 0.2, r: 0.98 },
        };
      },
    },
    {
      id: 'mc-sta-9',
      shortTitle: 'Changement de variable (Ajustement exponentiel)',
      title: 'Exp. 9 : Linéarisation z = ln(y) pour y = A·e^(kx)',
      goal: 'Transformer une tendance exponentielle y = A·e^(kx) en droite z = kx + ln A.',
      formula: 'y = A·e^(kx)  ⟺  ln(y) = k·x + ln(A)  (régression affine sur (x, z))',
      visualKind: 'regression-line',
      sliders: [
        { label: 'Taux k', min: 0.1, max: 0.8, step: 0.05, defaultValue: 0.3, unit: '' },
        { label: 'Valeur initiale A', min: 1, max: 5, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([k, A]) => {
        const b = Math.log(A);
        const y5 = A * Math.exp(k * 5);
        return {
          headline: `z = ${f(k, 2)}x + ${f(b, 3)}  ⟹  y = ${f(A, 1)}·e^(${f(k, 2)}x) · y(5) = ${f(y5, 1)}`,
          metrics: [
            { label: 'Ordonnée b = ln A', value: `${f(b, 3)}`, accent: 'sky' },
            { label: 'Paramètre A = e^b', value: `${f(A, 2)}`, accent: 'amber' },
            { label: 'Prévision y(5)', value: `${f(y5, 1)}`, accent: 'emerald' },
          ],
          conclusion: `Ne pas oublier à la fin du calcul de repasser de z à y par y = e^z !`,
          svg: { a: k * 2, b: 0.5, noise: 0.15, r: 0.99 },
        };
      },
    },
    {
      id: 'mc-sta-10',
      shortTitle: 'Inégalité de Bienaymé-Tchebychev',
      title: 'Exp. 10 : Synthèse BAC C — Concentration autour de l’espérance',
      goal: 'Majorer la probabilité de s’écarter de μ de plus de δ sans connaître la loi exacte.',
      formula: 'P(|X - E(X)| ≥ δ) ≤ V(X) / δ²',
      visualKind: 'binomial-bars',
      sliders: [
        { label: 'Écart toléré δ (en σ)', min: 1.5, max: 5.0, step: 0.5, defaultValue: 2.0, unit: 'σ' },
      ],
      evaluate: ([kSigma]) => {
        const bound = 1 / (kSigma * kSigma);
        return {
          headline: `P(|X - μ| ≥ ${f(kSigma, 1)}σ) ≤ 1/${f(kSigma, 1)}² = ${f(bound * 100, 1)} %`,
          metrics: [
            { label: 'Majorant Tchebychev', value: `${f(bound * 100, 1)} %`, accent: 'amber' },
            { label: 'Garantie dans [μ±δ]', value: `≥ ${f((1 - bound) * 100, 1)} %`, accent: 'emerald' },
            { label: 'Validité', value: 'Toute variable avec V(X)', accent: 'sky' },
          ],
          conclusion: `Plus l’échantillon n est grand (moyenne empirique de variance σ²/n), plus la probabilité de déviation tend vers 0 (Loi des grands nombres).`,
          svg: { n: 12, p: 0.5 },
        };
      },
    },
  ],

  // 12. GÉOMÉTRIE DANS L’ESPACE (DROITES, PLANS, SPHÈRES) (10)
  'mathTc-geometrie-espace': [
    {
      id: 'mc-esp-1',
      shortTitle: 'Distance d’un point à un plan',
      title: 'Exp. 1 : Formule d(A, P) = |ax_A + by_A + cz_A + d| / √(a²+b²+c²)',
      goal: 'Calculer la distance orthogonale exacte d’un point A(x₀, y₀, z₀) au plan P.',
      formula: 'd(A, P) = |ax_A + by_A + cz_A + d| / ||n⃗||',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Cote z_A du point', min: -2, max: 8, step: 1, defaultValue: 4, unit: '' },
        { label: 'Constante d du plan (x+2y+2z+d=0)', min: -6, max: 6, step: 1, defaultValue: -3, unit: '' },
      ],
      evaluate: ([zA, d]) => {
        // Point (1, 1, zA), plane x + 2y + 2z + d = 0 => ||n|| = 3
        const num = Math.abs(1 + 2 + 2 * zA + d);
        const dist = num / 3;
        return {
          headline: `d(A(1;1;${zA}), P) = |${1 + 2 + 2 * zA + d}| / 3 = ${f(dist, 2)}`,
          metrics: [
            { label: 'Distance d(A, P)', value: `${f(dist, 3)}`, accent: 'emerald' },
            { label: 'Norme vecteur normal', value: '||n⃗|| = √(1+4+4) = 3', accent: 'sky' },
            { label: 'Appartenance à P', value: num === 0 ? 'A ∈ P' : 'Hors du plan', accent: 'amber' },
          ],
          conclusion: `Le projeté orthogonal H de A sur P s’obtient en intersectant P avec la droite passant par A dirigée par n⃗.`,
          svg: { R: 4, d: Math.min(5.5, dist) },
        };
      },
    },
    {
      id: 'mc-esp-2',
      shortTitle: 'Section Sphère–Plan',
      title: 'Exp. 2 : Position relative sphère S(Ω, R) et plan P selon d = d(Ω, P)',
      goal: 'Observer la variation du rayon du cercle section r = √(R² - d²).',
      formula: 'd < R : Cercle de rayon r = √(R² - d²)  |  d = R : Tangent  |  d > R : Disjoint (∅)',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Rayon sphère R', min: 2, max: 8, step: 0.5, defaultValue: 5, unit: '' },
        { label: 'Distance d(Ω, P)', min: 0, max: 8, step: 0.5, defaultValue: 3, unit: '' },
      ],
      presets: [
        { label: 'Sécant (R=5, d=3 ⇒ r=4)', values: [5, 3] },
        { label: 'Plan tangent (d=R)', values: [5, 5] },
      ],
      evaluate: ([R, d]) => {
        const inter = d < R ? `Cercle de rayon r = ${f(Math.sqrt(R * R - d * d))}` : d === R ? 'Point unique H (plan tangent)' : 'Intersection vide ∅';
        return {
          headline: `R = ${f(R, 1)}, d = ${f(d, 1)} ⟹ ${inter}`,
          metrics: [
            { label: 'Intersection S ∩ P', value: inter, accent: d < R ? 'emerald' : d === R ? 'amber' : 'rose' },
            { label: 'Centre du cercle', value: 'Projeté orthogonal H de Ω', accent: 'sky' },
            { label: 'Grand cercle', value: d === 0 ? 'Oui (r = R)' : 'Non', accent: 'amber' },
          ],
          conclusion: `Pythagore dans ΩHM rectangle en H relie toujours R² = d² + r².`,
          svg: { R, d },
        };
      },
    },
    {
      id: 'mc-esp-3',
      shortTitle: 'Équation cartésienne de sphère',
      title: 'Exp. 3 : Forme canonique x²+y²+z²+ax+by+cz+d = 0',
      goal: 'Compléter les carrés pour trouver centre Ω et rayon R (ou tester si réel > 0).',
      formula: '(x - x₀)² + (y - y₀)² + (z - z₀)² = R²  |  Diamètre [AB] : MA⃗·MB⃗ = 0',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Terme constant d (avec -2x-4y+4z+d=0)', min: -10, max: 14, step: 1, defaultValue: 5, unit: '' },
      ],
      evaluate: ([d]) => {
        // (x-1)^2 + (y-2)^2 + (z+2)^2 = 1 + 4 + 4 - d = 9 - d
        const r2 = 9 - d;
        const nature = r2 > 0 ? `Sphère Ω(1; 2; -2), R = ${f(Math.sqrt(r2))}` : r2 === 0 ? 'Point unique Ω(1; 2; -2)' : 'Ensemble vide ∅ (R² < 0)';
        return {
          headline: `x²+y²+z² - 2x - 4y + 4z + (${d}) = 0 ⟹ ${nature}`,
          metrics: [
            { label: 'Second membre R²', value: `${9 - d}`, accent: r2 > 0 ? 'emerald' : 'rose' },
            { label: 'Centre Ω', value: '(1 ; 2 ; -2)', accent: 'sky' },
            { label: 'Nature lieu', value: nature, accent: 'amber' },
          ],
          conclusion: `Ne pas supposer d’office que l’équation est une sphère : le second membre après mise sous forme canonique peut être ≤ 0 !`,
          svg: { R: Math.max(1, Math.sqrt(Math.max(0, r2))), d: 0 },
        };
      },
    },
    {
      id: 'mc-esp-4',
      shortTitle: 'Intersection Droite D(t) ∩ Plan P',
      title: 'Exp. 4 : Substitution paramétrique dans ax+by+cz+d = 0',
      goal: 'Résoudre en t pour trouver le point d’impact I ou détecter le parallélisme.',
      formula: 'n⃗·u⃗ ≠ 0 ⟹ 1 point I(t₀)  |  n⃗·u⃗ = 0 ⟹ D // P (incluse ou disjointe)',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Produit scalaire n⃗·u⃗', min: -3, max: 5, step: 1, defaultValue: 2, unit: '' },
        { label: 'Valeur P(A) = ax_A+by_A+cz_A+d', min: -6, max: 6, step: 2, defaultValue: -4, unit: '' },
      ],
      evaluate: ([nu, pA]) => {
        const res = nu !== 0 ? `Point unique en t = ${f(-pA / nu)}` : pA === 0 ? 'Droite incluse dans P (D ⊂ P)' : 'Strictement parallèle (∅)';
        return {
          headline: `(${nu})·t + (${pA}) = 0 ⟹ ${res}`,
          metrics: [
            { label: 'Position D / P', value: res, accent: nu !== 0 ? 'emerald' : 'amber' },
            { label: 'Angle (D, P)', value: nu === 0 ? '0° (parallèle)' : 'Sécante', accent: 'sky' },
            { label: 'Orthogonalité D ⊥ P', value: 'u⃗ colinéaire à n⃗', accent: 'purple' },
          ],
          conclusion: `Injecter (x(t), y(t), z(t)) dans l’équation cartésienne du plan donne une simple équation du 1er degré en t.`,
          svg: { R: 4, d: nu === 0 ? 4.5 : 2 },
        };
      },
    },
    {
      id: 'mc-esp-5',
      shortTitle: 'Distance point à une droite',
      title: 'Exp. 5 : Formule vectorielle d(M, D) = ||AM⃗ ∧ u⃗|| / ||u⃗||',
      goal: 'Calculer la distance d’un point M à une droite D(A, u⃗) sans passer par H.',
      formula: 'd(M, D) = ||AM⃗ ∧ u⃗|| / ||u⃗||',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Norme ||AM⃗ ∧ u⃗||', min: 0, max: 18, step: 1.5, defaultValue: 9, unit: '' },
        { label: 'Norme vecteur directeur ||u⃗||', min: 1, max: 6, step: 1, defaultValue: 3, unit: '' },
      ],
      evaluate: ([cross, normU]) => {
        const dist = cross / normU;
        return {
          headline: `d(M, D) = ${f(cross, 1)} / ${normU} = ${f(dist, 2)} (${dist === 0 ? 'M ∈ D !' : 'hors droite'})`,
          metrics: [
            { label: 'Distance d(M, D)', value: `${f(dist, 2)}`, accent: 'emerald' },
            { label: 'Si dist = 0', value: 'M appartient à D', accent: 'amber' },
            { label: 'Méthode alternative', value: 'Minimum de ||AM⃗ + t u⃗||', accent: 'sky' },
          ],
          conclusion: `Le produit vectoriel donne en une seule opération l’aire du parallélogramme puis la hauteur = distance.`,
          svg: { u: normU, v: Math.max(1, dist), deg: 90, area: cross },
        };
      },
    },
    {
      id: 'mc-esp-6',
      shortTitle: 'Positions relatives de 2 droites (non coplanaires)',
      title: 'Exp. 6 : Droites coplanaires (sécantes/parallèles) vs non coplanaires',
      goal: 'Tester u⃗ ∧ v⃗ = 0⃗ (parallèles) puis le déterminant det(AB⃗, u⃗, v⃗) = 0 (coplanaires).',
      formula: 'det(AB⃗, u⃗, v⃗) = 0 ⟺ Coplanaires  |  ≠ 0 ⟺ Non coplanaires (ni // ni sécantes !)',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Produit mixte (u⃗ ∧ v⃗)·AB⃗', min: -6, max: 6, step: 2, defaultValue: 4, unit: '' },
      ],
      evaluate: ([mixte]) => {
        const copl = mixte === 0;
        return {
          headline: copl ? `Produit mixte = 0 ⟹ Coplanaires (sécantes si u⃗ ∦ v⃗)` : `Produit mixte = ${mixte} ≠ 0 ⟹ Droites NON coplanaires (gauches)`,
          metrics: [
            { label: 'Coplanarité', value: copl ? 'Coplanaires ✓' : 'Non coplanaires ✗', accent: copl ? 'emerald' : 'rose' },
            { label: 'Intersection D₁ ∩ D₂', value: copl ? '1 point (ou //)' : 'Vide (∅)', accent: 'amber' },
            { label: 'Perpendiculaire commune', value: copl ? 'Au point / // ' : 'Unique !', accent: 'sky' },
          ],
          conclusion: `Dans l’espace, deux droites qui ne se coupent pas ne sont pas forcément parallèles : elles peuvent être non coplanaires !`,
          svg: { u: 4, v: 3, deg: 60, area: Math.abs(mixte) },
        };
      },
    },
    {
      id: 'mc-esp-7',
      shortTitle: 'Intersection de 2 plans (Droite Δ)',
      title: 'Exp. 7 : Vecteur directeur n⃗₁ ∧ n⃗₂ et système paramétrique',
      goal: 'Vérifier que P₁ et P₂ sont sécants (n⃗₁ ∧ n⃗₂ ≠ 0⃗) puis paramétrer la droite Δ.',
      formula: 'P₁ ∩ P₂ = Δ  dirigée par  u⃗ = n⃗₁ ∧ n⃗₂',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Angle entre normales (n⃗₁, n⃗₂)', min: 0, max: 90, step: 15, defaultValue: 90, unit: '°' },
      ],
      evaluate: ([ang]) => {
        const sec = ang > 0;
        return {
          headline: ang === 0 ? `n⃗₁ // n⃗₂ ⟹ Plans parallèles (confondus ou disjoints)` : ang === 90 ? `n⃗₁ · n⃗₂ = 0 ⟹ Plans PERPENDICULAIRES selon Δ` : `Angle ${ang}° : Sécants selon Δ dirigée par n⃗₁ ∧ n⃗₂`,
          metrics: [
            { label: 'Position P₁ / P₂', value: sec ? 'Sécants selon Δ' : 'Parallèles', accent: 'emerald' },
            { label: 'Orthogonalité P₁ ⊥ P₂', value: ang === 90 ? 'Oui (n⃗₁·n⃗₂ = 0) ✓' : 'Non', accent: 'amber' },
            { label: 'Vecteur directeur Δ', value: sec ? 'n⃗₁ ∧ n⃗₂' : 'Aucun', accent: 'sky' },
          ],
          conclusion: `Pour paramétrer P₁ ∩ P₂, fixer z = t (ou x = t) et résoudre le système 2×2 restant donne immédiatement x(t), y(t), z(t).`,
          svg: { u: 4, v: 4, deg: ang, area: 16 * Math.sin((ang * Math.PI) / 180) },
        };
      },
    },
    {
      id: 'mc-esp-8',
      shortTitle: 'Plan médiateur & plan tangent',
      title: 'Exp. 8 : Plan tangent à S(Ω, R) en A ∈ S : ΩA⃗·AM⃗ = 0',
      goal: 'Écrire directement l’équation du plan tangent en un point A de la sphère.',
      formula: 'M ∈ T_A  ⟺  ΩA⃗ · AM⃗ = 0  (vecteur normal n⃗ = ΩA⃗)',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Rayon R = ||ΩA⃗||', min: 2, max: 6, step: 0.5, defaultValue: 4, unit: '' },
      ],
      evaluate: ([R]) => {
        return {
          headline: `Plan tangent en A : d(Ω, T_A) = ΩA = ${f(R, 1)} · Normale ΩA⃗`,
          metrics: [
            { label: 'Condition tangence', value: 'ΩA⃗ · AM⃗ = 0', accent: 'emerald' },
            { label: 'Distance d(Ω, T_A)', value: `R = ${f(R, 1)}`, accent: 'amber' },
            { label: 'Intersection', value: 'Unique point {A}', accent: 'sky' },
          ],
          conclusion: `De même, le plan médiateur de [AB] a pour vecteur normal AB⃗ et passe par le milieu I de [AB].`,
          svg: { R, d: R },
        };
      },
    },
    {
      id: 'mc-esp-9',
      shortTitle: 'Distance entre 2 droites gauches',
      title: 'Exp. 9 : Perpendiculaire commune et plus courte distance δ(D₁, D₂)',
      goal: 'Calculer l’écart minimal entre deux droites non coplanaires via le produit mixte.',
      formula: 'δ(D₁, D₂) = |(AB⃗ · (u⃗ ∧ v⃗))| / ||u⃗ ∧ v⃗||',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Produit mixte |det(AB⃗,u⃗,v⃗)|', min: 0, max: 24, step: 3, defaultValue: 12, unit: '' },
        { label: 'Norme ||u⃗ ∧ v⃗||', min: 2, max: 8, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([mixte, cross]) => {
        const d = mixte / cross;
        return {
          headline: `Plus courte distance δ(D₁, D₂) = ${mixte} / ${cross} = ${f(d, 2)}`,
          metrics: [
            { label: 'Distance min δ', value: `${f(d, 2)}`, accent: 'emerald' },
            { label: 'Direction perp. comm.', value: 'w⃗ = u⃗ ∧ v⃗', accent: 'sky' },
            { label: 'Sécantes si δ = 0 ?', value: d === 0 ? 'Oui (coplanaires)' : 'Non (gauches)', accent: 'amber' },
          ],
          conclusion: `En prenant 2 plans parallèles contenant respectivement D₁ et D₂ (normale u⃗ ∧ v⃗), δ est juste la distance entre ces deux plans !`,
          svg: { u: cross, v: Math.max(1, d), deg: 90, area: mixte },
        };
      },
    },
    {
      id: 'mc-esp-10',
      shortTitle: 'Cube & tétraèdre régulier (repère orthonormé)',
      title: 'Exp. 10 : Synthèse BAC C — Coordonnées analytiques dans un solide',
      goal: 'Prouver (FD) ⊥ (BGE) et calculer le volume d’un coin de cube.',
      formula: 'Repère (A ; AB⃗, AD⃗, AE⃗) : F(1,0,1), D(0,1,0) ⇒ FD⃗(-1,1,-1) ⊥ plan (BGE)',
      visualKind: 'sphere-section',
      sliders: [
        { label: 'Arête a du cube', min: 1, max: 6, step: 1, defaultValue: 3, unit: 'cm' },
      ],
      evaluate: ([a]) => {
        const volCube = a ** 3;
        const volTet = volCube / 6;
        const dist = (a * Math.sqrt(3)) / 3;
        return {
          headline: `Arête a=${a} : V(ABGE) = a³/6 = ${f(volTet, 2)} cm³ · Hauteur = a√3/3 = ${f(dist, 2)} cm`,
          metrics: [
            { label: 'Volume tétraèdre', value: `${f(volTet, 2)} cm³`, accent: 'emerald' },
            { label: 'Aire triangle BGE', value: `${f((a * a * Math.sqrt(3)) / 2, 2)} cm²`, accent: 'amber' },
            { label: 'Hauteur issue de A', value: `${f(dist, 2)} cm`, accent: 'sky' },
          ],
          conclusion: `Placer un repère orthonormé sur un sommet du cube résout instantanément les preuves d’orthogonalité et de distance.`,
          svg: { R: a, d: dist },
        };
      },
    },
  ],
};
