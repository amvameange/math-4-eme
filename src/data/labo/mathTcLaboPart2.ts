import { MathLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const MATH_TC_LABO_PART2: Record<string, MathLaboExpSpec[]> = {
  // 4. BARYCENTRE, PRODUIT VECTORIEL & MATRICES (10)
  'mathTc-barycentre-matrices': [
    {
      id: 'mc-bar-1',
      shortTitle: 'Barycentre G de (A,α), (B,β)',
      title: 'Exp. 1 : Positionnement vectoriel α GA⃗ + β GB⃗ = 0⃗',
      goal: 'Visualiser si G appartient à [AB] (αβ > 0) ou est extérieur du côté du poids le plus fort.',
      formula: 'AG⃗ = [β / (α + β)] AB⃗  (si α + β ≠ 0)',
      visualKind: 'barycenter-bar',
      sliders: [
        { label: 'Coefficient α (en A)', min: -4, max: 8, step: 1, defaultValue: 3, unit: '' },
        { label: 'Coefficient β (en B)', min: -4, max: 8, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([alpha, beta]) => {
        const sum = alpha + beta;
        if (sum === 0) {
          return {
            headline: `α + β = 0 ⟹ G n’existe pas ! Le vecteur αMA⃗ + βMB⃗ = ${alpha} BA⃗ est constant`,
            metrics: [
              { label: 'Somme α + β', value: '0', accent: 'rose' },
              { label: 'Vecteur réduit', value: `${alpha} BA⃗`, accent: 'amber' },
              { label: 'Position de G', value: 'À l’infini (∄)', accent: 'sky' },
            ],
            conclusion: `Quand la somme des poids s’annule, la fonction vectorielle de Leibniz devient constante !`,
            svg: { alpha, beta, ratio: 0.5, exists: 0 },
          };
        }
        const ratio = beta / sum;
        return {
          headline: `AG⃗ = ${f(ratio)} AB⃗ · G est ${ratio >= 0 && ratio <= 1 ? 'dans [AB]' : 'hors de [AB]'}`,
          metrics: [
            { label: 'Rapport β/(α+β)', value: `${f(ratio)}`, accent: 'amber' },
            { label: 'Appartient à [AB] ?', value: ratio >= 0 && ratio <= 1 ? 'Oui (α,β même signe)' : 'Non (signes opposés)', accent: 'emerald' },
            { label: 'Somme α + β', value: `${sum}`, accent: 'sky' },
          ],
          conclusion: `G est toujours attiré du côté du point affecté du coefficient le plus grand en valeur absolue.`,
          svg: { alpha, beta, ratio, exists: 1 },
        };
      },
    },
    {
      id: 'mc-bar-2',
      shortTitle: 'Associativité (barycentre partiel)',
      title: 'Exp. 2 : Regroupement partiel H = bar{(A,α),(B,β)} puis G = bar{(H,α+β),(C,γ)}',
      goal: 'Construire G de 3 points pondérés par associativité et intersections de droites.',
      formula: 'G = bar{(A,α),(B,β),(C,γ)} = bar{(H, α+β), (C, γ)}',
      visualKind: 'barycenter-bar',
      sliders: [
        { label: 'Poids α + β (en H)', min: 1, max: 10, step: 1, defaultValue: 4, unit: '' },
        { label: 'Poids γ (en C)', min: 1, max: 10, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([wH, gamma]) => {
        const ratio = gamma / (wH + gamma);
        return {
          headline: `HG⃗ = ${gamma}/${wH + gamma} HC⃗ ≈ ${f(ratio)} HC⃗`,
          metrics: [
            { label: 'Poids total', value: `${wH + gamma}`, accent: 'amber' },
            { label: 'Position sur [HC]', value: `${f(ratio * 100, 1)} % depuis H`, accent: 'emerald' },
            { label: 'Cas isobarycentre', value: 'α=β=γ ⟹ 1/3 depuis H', accent: 'sky' },
          ],
          conclusion: `L’associativité est l’outil clé du BAC C pour démontrer que 3 droites sont concourantes en G.`,
          svg: { alpha: wH, beta: gamma, ratio, exists: 1 },
        };
      },
    },
    {
      id: 'mc-bar-3',
      shortTitle: 'Lignes de niveau ||Σα_i MA_i|| = k',
      title: 'Exp. 3 : Réduction de Leibniz et lieux de points ||αMA⃗+βMB⃗|| = k',
      goal: 'Distinguer cercle de centre G (si α+β ≠ 0) et plan/espace entier (si α+β = 0).',
      formula: 'αMA⃗ + βMB⃗ = (α+β)MG⃗  ⟹  MG = k / |α + β|',
      visualKind: 'barycenter-bar',
      sliders: [
        { label: 'Somme |α + β|', min: 1, max: 8, step: 1, defaultValue: 4, unit: '' },
        { label: 'Constante k', min: 2, max: 24, step: 2, defaultValue: 12, unit: '' },
      ],
      evaluate: ([S, k]) => {
        const R = k / S;
        return {
          headline: `MG = ${k} / ${S} = ${f(R)} ⟹ Cercle (2D) ou Sphère (3D) de centre G, rayon ${f(R)}`,
          metrics: [
            { label: 'Rayon R = k/|Σ|', value: `${f(R)}`, accent: 'emerald' },
            { label: 'Centre du lieu', value: 'Barycentre G', accent: 'amber' },
            { label: 'Si k = 0', value: 'Réduit à {G}', accent: 'sky' },
          ],
          conclusion: `Toujours vérifier d’abord si Σα_i ≠ 0 avant d’introduire le barycentre G.`,
          svg: { alpha: S, beta: k, ratio: Math.min(1, R / 8), exists: 1 },
        };
      },
    },
    {
      id: 'mc-bar-4',
      shortTitle: 'Lignes de niveau Σ α_i MA_i² = k',
      title: 'Exp. 4 : Fonction scalaire de Leibniz Σ α_i MA_i² = f(G) + (Σα_i) MG²',
      goal: 'Déterminer quand le lieu Σ α_i MA_i² = k est un cercle, un point ou vide.',
      formula: 'Σ α_i MA_i² = (Σ α_i)·MG² + Σ α_i GA_i²  ⟹  MG² = (k - f(G)) / Σα_i',
      visualKind: 'barycenter-bar',
      sliders: [
        { label: 'Second membre k', min: 0, max: 40, step: 2, defaultValue: 24, unit: '' },
        { label: 'Seuil f(G) = Σ α_i GA_i²', min: 4, max: 24, step: 2, defaultValue: 12, unit: '' },
      ],
      evaluate: ([k, fG]) => {
        const mg2 = (k - fG) / 2;
        const status = mg2 > 0 ? `Cercle/Sphère R = ${f(Math.sqrt(mg2))}` : mg2 === 0 ? 'Singleton {G}' : 'Ensemble vide ∅';
        return {
          headline: `MG² = (${k} - ${fG}) / 2 = ${f(mg2)} ⟹ ${status}`,
          metrics: [
            { label: 'MG² (avec Σα=2)', value: `${f(mg2)}`, accent: mg2 >= 0 ? 'emerald' : 'rose' },
            { label: 'Nature ensemble', value: status, accent: 'amber' },
            { label: 'Si Σα_i = 0', value: 'Droite / Plan orthogonal', accent: 'sky' },
          ],
          conclusion: `Pour MA² - MB² = k (α+β = 0), on utilise I milieu de [AB] : 2 IM⃗·BA⃗ = k (droite/plan ⊥ (AB)).`,
          svg: { alpha: k, beta: fG, ratio: Math.max(0.1, Math.min(1, (mg2 + 5) / 20)), exists: mg2 >= 0 ? 1 : 0 },
        };
      },
    },
    {
      id: 'mc-bar-5',
      shortTitle: 'Produit vectoriel u⃗ ∧ v⃗',
      title: 'Exp. 5 : Norme ||u⃗ ∧ v⃗|| = ||u⃗||·||v⃗||·|sin θ| et aire du triangle',
      goal: 'Relier l’aire d’un parallélogramme ou triangle ABC au produit vectoriel AB⃗ ∧ AC⃗.',
      formula: 'Aire(ABC) = ½ ||AB⃗ ∧ AC⃗|| = ½ AB·AC·|sin Â|',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Norme ||u⃗||', min: 1, max: 6, step: 0.5, defaultValue: 4, unit: '' },
        { label: 'Norme ||v⃗||', min: 1, max: 6, step: 0.5, defaultValue: 3, unit: '' },
        { label: 'Angle θ', min: 0, max: 180, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([u, v, deg]) => {
        const normCross = u * v * Math.abs(Math.sin((deg * Math.PI) / 180));
        return {
          headline: `||u⃗ ∧ v⃗|| = ${f(normCross)} · Aire triangle = ${f(normCross / 2)} u.a.`,
          metrics: [
            { label: 'Aire parallélogramme', value: `${f(normCross)}`, accent: 'amber' },
            { label: 'Aire triangle', value: `${f(normCross / 2)}`, accent: 'emerald' },
            { label: 'Colinéarité', value: deg === 0 || deg === 180 ? 'u⃗ ∧ v⃗ = 0⃗' : 'Libres', accent: 'sky' },
          ],
          conclusion: `u⃗ ∧ v⃗ est orthogonal au plan (u⃗, v⃗) et change de signe quand on permute u⃗ et v⃗ (antisymétrie).`,
          svg: { u, v, deg, area: normCross },
        };
      },
    },
    {
      id: 'mc-bar-6',
      shortTitle: 'Produit mixte (u⃗ ∧ v⃗)·w⃗ & volume',
      title: 'Exp. 6 : Volume du tétraèdre V = (1/6)|(AB⃗ ∧ AC⃗)·AD⃗|',
      goal: 'Tester la coplanarité de 4 points et calculer le volume d’un tétraèdre ou parallélépipède.',
      formula: 'V_tét = (1/6) |(AB⃗ ∧ AC⃗)·AD⃗|  |  Coplanaires ⟺ produit mixte = 0',
      visualKind: 'vector-area',
      sliders: [
        { label: 'Base ||u⃗∧v⃗||', min: 2, max: 20, step: 2, defaultValue: 12, unit: 'u.a.' },
        { label: 'Hauteur proj. h', min: 0, max: 8, step: 0.5, defaultValue: 4, unit: '' },
      ],
      evaluate: ([base, h]) => {
        const vPara = base * h;
        const vTet = vPara / 6;
        return {
          headline: `V_parallélépipède = ${f(vPara)} · V_tétraèdre = ${f(vTet)} u.v.`,
          metrics: [
            { label: 'Volume tétraèdre', value: `${f(vTet)}`, accent: 'emerald' },
            { label: 'Parallélépipède', value: `${f(vPara)}`, accent: 'amber' },
            { label: 'Coplanarité', value: h === 0 ? '4 points coplanaires' : 'Non coplanaires', accent: 'sky' },
          ],
          conclusion: `La hauteur issue de D vaut aussi h = |(AB⃗ ∧ AC⃗)·AD⃗| / ||AB⃗ ∧ AC⃗||.`,
          svg: { u: Math.sqrt(base), v: Math.sqrt(base), deg: 75, area: vTet },
        };
      },
    },
    {
      id: 'mc-bar-7',
      shortTitle: 'Déterminant 2×2 et inversibilité',
      title: 'Exp. 7 : Matrice A 2×2 : det(A) = ad - bc et A⁻¹',
      goal: 'Calculer det(A) et l’inverse A⁻¹ = (1/det A)[[d,-b],[-c,a]].',
      formula: 'A inversible ⟺ det(A) = ad - bc ≠ 0  |  A⁻¹ = (1/det A) com(A)ᵀ',
      visualKind: 'vector-area',
      sliders: [
        { label: 'a (= d pour sym.)', min: 1, max: 6, step: 1, defaultValue: 4, unit: '' },
        { label: 'b', min: -4, max: 5, step: 1, defaultValue: 2, unit: '' },
        { label: 'c', min: -4, max: 5, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([a, b, c]) => {
        const d = a;
        const det = a * d - b * c;
        return {
          headline: `det(A) = ${a}² - (${b})(${c}) = ${det} ⟹ ${det !== 0 ? 'Matrice inversible' : 'Matrice singulière !'}`,
          metrics: [
            { label: 'Déterminant det(A)', value: `${det}`, accent: det !== 0 ? 'emerald' : 'rose' },
            { label: 'Trace Tr(A)', value: `${a + d}`, accent: 'sky' },
            { label: 'Système AX=B', value: det !== 0 ? 'Solution unique' : '0 ou ∞ solutions', accent: 'amber' },
          ],
          conclusion: `Géométriquement, |det(A)| mesure le facteur de multiplication des aires par l’application linéaire.`,
          svg: { u: a, v: Math.hypot(b, c) || 1, deg: det === 0 ? 0 : 70, area: Math.abs(det) },
        };
      },
    },
    {
      id: 'mc-bar-8',
      shortTitle: 'Pivot de Gauss & système 3×3',
      title: 'Exp. 8 : Échelonnement linéaire et rang d’un système 3×3',
      goal: 'Repérer solution unique (système de Cramer) vs droite d’intersection (rang 2).',
      formula: 'det(M) ≠ 0 ⟹ 1 solution unique  |  det(M) = 0 ⟹ plans parallèles ou sécants selon une droite',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'Pivot p₃ après élimination', min: -4, max: 4, step: 1, defaultValue: 2, unit: '' },
        { label: 'Second membre b₃', min: -6, max: 6, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([p3, b3]) => {
        const state = p3 !== 0 ? `Solution unique (z = ${f(b3 / p3)})` : b3 === 0 ? 'Infinité de solutions (droite)' : 'Système incompatible (∅)';
        return {
          headline: `Dernière ligne : ${p3}·z = ${b3} ⟹ ${state}`,
          metrics: [
            { label: 'Dernier pivot', value: `${p3}`, accent: p3 !== 0 ? 'emerald' : 'rose' },
            { label: 'Diagnostic', value: state, accent: 'amber' },
            { label: 'Rang système', value: p3 !== 0 ? '3 (Cramer)' : '≤ 2', accent: 'sky' },
          ],
          conclusion: `Dans l’espace, 3 plans dont le déterminant est nul peuvent soit n’avoir aucun point commun, soit se couper selon une droite.`,
          svg: { a: p3 || 1, b: b3, d: 1, u: p3, v: b3 },
        };
      },
    },
    {
      id: 'mc-bar-9',
      shortTitle: 'Puissances de matrice & graphes',
      title: 'Exp. 9 : Chaîne de Markov P² , P³ et état stable π = πP',
      goal: 'Simuler l’évolution X_{n+1} = A X_n d’une population entre 2 états.',
      formula: 'X_n = A^n X₀  |  État stationnaire : A X = X',
      visualKind: 'barycenter-bar',
      sliders: [
        { label: 'Taux fidélité p (A→A)', min: 0.5, max: 0.95, step: 0.05, defaultValue: 0.8, unit: '' },
        { label: 'Taux retour q (B→A)', min: 0.05, max: 0.5, step: 0.05, defaultValue: 0.3, unit: '' },
      ],
      evaluate: ([p, q]) => {
        const piA = q / (1 - p + q);
        return {
          headline: `Équilibre asymptotique : π_A = ${f(piA * 100, 1)} % · π_B = ${f((1 - piA) * 100, 1)} %`,
          metrics: [
            { label: 'Part stable A', value: `${f(piA * 100, 1)} %`, accent: 'emerald' },
            { label: 'Part stable B', value: `${f((1 - piA) * 100, 1)} %`, accent: 'sky' },
            { label: 'Vitesse convergence', value: `|p - q| = ${f(Math.abs(p - q))}`, accent: 'amber' },
          ],
          conclusion: `On démontre souvent que P² = aP + bI ou par diagonalisation P = Q D Q⁻¹ pour calculer Pⁿ.`,
          svg: { alpha: piA * 10, beta: (1 - piA) * 10, ratio: 1 - piA, exists: 1 },
        };
      },
    },
    {
      id: 'mc-bar-10',
      shortTitle: 'Polynôme annulateur A² = aA + bI',
      title: 'Exp. 10 : Synthèse BAC C — Inversion rapide par A² - αA - βI = 0',
      goal: 'Déduire A⁻¹ sans calculer de déterminant dès qu’on connaît un polynôme annulateur.',
      formula: 'A² - s·A + d·I = 0 (d ≠ 0)  ⟹  A⁻¹ = (1/d)(s·I - A)',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'Coefficient s (trace)', min: 1, max: 6, step: 1, defaultValue: 5, unit: '' },
        { label: 'Coefficient d (det)', min: 1, max: 8, step: 1, defaultValue: 6, unit: '' },
      ],
      evaluate: ([s, d]) => {
        return {
          headline: `A² - ${s}A + ${d}I = 0  ⟹  A⁻¹ = (1/${d})(${s}I - A)`,
          metrics: [
            { label: 'Factorisation', value: `A·(${s}I - A) = ${d}I`, accent: 'emerald' },
            { label: 'Coefficient 1/d', value: `1 / ${d}`, accent: 'amber' },
            { label: 'Calcul de A³', value: `${s * s - d}A - ${s * d}I`, accent: 'sky' },
          ],
          conclusion: `Cette astuce algébrique revient très souvent dans les sujets BAC C pour trouver A⁻¹ en deux lignes.`,
          svg: { a: s, b: d, d: 1, u: s, v: -1 },
        };
      },
    },
  ],

  // 5. LIMITES, CONTINUITÉ & TVI (10)
  'mathTc-limites-continuite': [
    {
      id: 'mc-lim-1',
      shortTitle: 'Indétermination 0/0 et factorisation',
      title: 'Exp. 1 : Levée de FI 0/0 sur fractions rationnelles',
      goal: 'Simplifier (x - a) au numérateur et dénominateur pour lire la vraie limite.',
      formula: 'lim_{x→a} (x² - a²)/(x - a) = 2a',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Point a', min: 1, max: 6, step: 0.5, defaultValue: 2, unit: '' },
        { label: 'Écart h = x - a', min: 0.01, max: 1.5, step: 0.05, defaultValue: 0.2, unit: '' },
      ],
      evaluate: ([a, h]) => {
        const val = 2 * a + h;
        return {
          headline: `Pour h = ${f(h)} : taux = ${f(val, 3)} ⟶ Limite exacte 2a = ${f(2 * a, 1)}`,
          metrics: [
            { label: 'Taux en a + h', value: `${f(val, 3)}`, accent: 'sky' },
            { label: 'Limite en a', value: `${f(2 * a, 1)}`, accent: 'emerald' },
            { label: 'Prolongement f(a)', value: `f(${a}) = ${2 * a}`, accent: 'amber' },
          ],
          conclusion: `La fonction admet une limite finie en a même si x = a est valeur interdite (prolongement par continuité).`,
          svg: { a, h, lim: 2 * a, mode: 'linear' },
        };
      },
    },
    {
      id: 'mc-lim-2',
      shortTitle: 'Quantité conjuguée √(x²+kx) - x',
      title: 'Exp. 2 : Levée de FI ∞ - ∞ par expression conjuguée',
      goal: 'Vérifier que √(x² + kx) - x tend vers k/2 quand x → +∞.',
      formula: '√(x² + kx) - x = kx / [√(x² + kx) + x]  ⟶  k/2  (en +∞)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Paramètre k', min: 2, max: 12, step: 2, defaultValue: 6, unit: '' },
        { label: 'Abscisse x', min: 2, max: 100, step: 2, defaultValue: 20, unit: '' },
      ],
      evaluate: ([k, x]) => {
        const fx = Math.sqrt(x * x + k * x) - x;
        return {
          headline: `f(${x}) = ${f(fx, 4)} ⟶ Asymptote horizontale y = k/2 = ${f(k / 2, 1)}`,
          metrics: [
            { label: 'Valeur f(x)', value: `${f(fx, 4)}`, accent: 'sky' },
            { label: 'Limite exacte k/2', value: `${f(k / 2, 1)}`, accent: 'emerald' },
            { label: 'En x → -∞', value: '+∞ (pas de FI !)', accent: 'amber' },
          ],
          conclusion: `En -∞, √(x²) = |x| = -x, donc √(x²+kx) - x ~ -2x → +∞ : attention à ne pas utiliser la même formule !`,
          svg: { a: k / 2, h: x, lim: k / 2, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-lim-3',
      shortTitle: 'Limites sin(ax)/x et (1-cos x)/x²',
      title: 'Exp. 3 : Taux trigonométriques remarquables en 0',
      goal: 'Visualiser la convergence rapide de sin(ax)/x → a et (1 - cos x)/x² → ½.',
      formula: 'lim_{x→0} sin(ax)/x = a  |  lim_{x→0} (1 - cos x)/x² = 1/2',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Facteur a', min: 1, max: 5, step: 1, defaultValue: 3, unit: '' },
        { label: 'Petit x', min: 0.05, max: 1.0, step: 0.05, defaultValue: 0.25, unit: 'rad' },
      ],
      evaluate: ([a, x]) => {
        const val = Math.sin(a * x) / x;
        const valCos = (1 - Math.cos(x)) / (x * x);
        return {
          headline: `sin(${a}x)/x = ${f(val, 4)} → ${a} · (1-cos x)/x² = ${f(valCos, 4)} → 0,500`,
          metrics: [
            { label: 'sin(ax)/x', value: `${f(val, 4)}`, accent: 'emerald' },
            { label: 'Limite en 0', value: `${a}`, accent: 'amber' },
            { label: '(1-cos x)/x²', value: `${f(valCos, 4)} (→0,5)`, accent: 'sky' },
          ],
          conclusion: `Ces limites sont des nombres dérivés en 0 : sin’(0) = 1 et cos’’(0) = -1.`,
          svg: { a, h: x, lim: a, mode: 'sinc' },
        };
      },
    },
    {
      id: 'mc-lim-4',
      shortTitle: 'Théorème des Gendarmes',
      title: 'Exp. 4 : Encadrement (x + sin x)/x et x·sin(1/x)',
      goal: 'Coincer une fonction oscillante entre deux bornes qui convergent vers la même limite l.',
      formula: '-1 ≤ sin(u) ≤ 1  ⟹  1 - 1/x ≤ (x + sin x)/x ≤ 1 + 1/x  ⟶  1',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Abscisse x', min: 2, max: 50, step: 2, defaultValue: 10, unit: '' },
      ],
      evaluate: ([x]) => {
        const fx = 1 + Math.sin(x) / x;
        return {
          headline: `En x = ${x} : ${f(1 - 1 / x, 3)} ≤ f(${x}) = ${f(fx, 3)} ≤ ${f(1 + 1 / x, 3)}`,
          metrics: [
            { label: 'Borne inf 1 - 1/x', value: `${f(1 - 1 / x, 3)}`, accent: 'sky' },
            { label: 'Valeur f(x)', value: `${f(fx, 3)}`, accent: 'emerald' },
            { label: 'Borne sup 1 + 1/x', value: `${f(1 + 1 / x, 3)}`, accent: 'amber' },
          ],
          conclusion: `Bien que sin(x) n’ait pas de limite en +∞, diviser par x écrase l’oscillation vers 0.`,
          svg: { a: 1, h: x, lim: 1, mode: 'squeeze' },
        };
      },
    },
    {
      id: 'mc-lim-5',
      shortTitle: 'Asymptotes verticale, horizontale, oblique',
      title: 'Exp. 5 : Recherche d’asymptote oblique y = ax + b en ±∞',
      goal: 'Extraire a = lim f(x)/x puis b = lim [f(x) - ax] et étudier le signe de f(x) - (ax+b).',
      formula: 'f(x) = ax + b + ε(x) avec lim_{±∞} ε(x) = 0',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Pente a', min: 0.5, max: 2.5, step: 0.5, defaultValue: 1, unit: '' },
        { label: 'Ordonnée b', min: -2, max: 4, step: 1, defaultValue: 1, unit: '' },
        { label: 'Abscisse x', min: 1, max: 15, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([a, b, x]) => {
        const eps = 2 / x;
        const fx = a * x + b + eps;
        return {
          headline: `f(${x}) = ${f(fx)} · Asymptote y = ${a}x + ${b} · Écart = +${f(eps, 3)}`,
          metrics: [
            { label: 'Asymptote', value: `y = ${a}x + ${b}`, accent: 'amber' },
            { label: 'Position C_f / Δ', value: 'Au-dessus (ε > 0)', accent: 'emerald' },
            { label: 'Écart |f(x)-y|', value: `${f(eps, 3)}`, accent: 'sky' },
          ],
          conclusion: `Si lim f(x)/x = +∞ (resp. 0), il y a branche parabolique de direction (Oy) (resp. (Ox)).`,
          svg: { a, h: x, lim: a * x + b, mode: 'oblique' },
        };
      },
    },
    {
      id: 'mc-lim-6',
      shortTitle: 'Continuité & raccordement par morceaux',
      title: 'Exp. 6 : Limites à gauche/droite lim_{x→a⁻} = lim_{x→a⁺} = f(a)',
      goal: 'Ajuster un paramètre m pour raccorder sans saut deux branches en x = 1.',
      formula: 'f continue en x₀  ⟺  lim_{x₀⁻} f = lim_{x₀⁺} f = f(x₀)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Paramètre m (droite mx+1)', min: 0, max: 5, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([m]) => {
        const left = 3; // e.g. x^2 + 2 at x=1
        const right = m + 1;
        const cont = Math.abs(left - right) < 0.05;
        return {
          headline: cont ? `m = 2 : lim⁻ = 3 = lim⁺ ⟹ Raccord CONTINU !` : `m = ${f(m, 1)} : saut vertical de ${f(Math.abs(right - left), 1)} en x = 1`,
          metrics: [
            { label: 'Limite gauche x→1⁻', value: '3,0', accent: 'sky' },
            { label: 'Limite droite x→1⁺', value: `${f(right, 1)}`, accent: 'amber' },
            { label: 'Continuité en 1', value: cont ? 'Continue ✓' : 'Discontinue ✗', accent: cont ? 'emerald' : 'rose' },
          ],
          conclusion: `Pour un prolongement par continuité, il suffit que la limite existe et soit finie en x₀.`,
          svg: { a: left, h: right, lim: 3, mode: 'linear' },
        };
      },
    },
    {
      id: 'mc-lim-7',
      shortTitle: 'TVI & dichotomie pour f(α) = 0',
      title: 'Exp. 7 : Localisation de l’unique racine α par dichotomie',
      goal: 'Couper [a, b] en deux jusqu’à encadrer α avec précision 10⁻².',
      formula: 'f continue, strict. monotone, f(a)·f(b) < 0 ⟹ ∃! α ∈ ]a,b[, f(α)=0',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Nb d’itérations N', min: 1, max: 10, step: 1, defaultValue: 5, unit: 'coupes' },
      ],
      evaluate: ([N]) => {
        let a = 1;
        let b = 2;
        const fn = (x: number) => x * x * x + x - 3;
        for (let i = 0; i < N; i++) {
          const m = (a + b) / 2;
          if (fn(a) * fn(m) <= 0) b = m;
          else a = m;
        }
        return {
          headline: `Après ${N} coupes : α ∈ [${f(a, 4)} ; ${f(b, 4)}] (amplitude ${f(b - a, 4)})`,
          metrics: [
            { label: 'Encadrement α', value: `[${f(a, 3)} ; ${f(b, 3)}]`, accent: 'emerald' },
            { label: 'Largeur 1/2^N', value: `${f(b - a, 4)}`, accent: 'amber' },
            { label: 'Racine exacte x³+x=3', value: '≈ 1,2134', accent: 'sky' },
          ],
          conclusion: `Chaque étape divise l’erreur par 2 : 10 étapes donnent déjà une précision < 10⁻³.`,
          svg: { a, h: b, lim: 1.2134, mode: 'tvi' },
        };
      },
    },
    {
      id: 'mc-lim-8',
      shortTitle: 'Bijection & réciproque f⁻¹',
      title: 'Exp. 8 : Symétrie par rapport à y = x et dérivée (f⁻¹)’',
      goal: 'Vérifier la formule (f⁻¹)’(y₀) = 1 / f’(x₀) avec y₀ = f(x₀).',
      formula: 'y₀ = f(x₀)  ⟹  (f⁻¹)’(y₀) = 1 / f’(x₀)  (si f’(x₀) ≠ 0)',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Abscisse x₀ (f(x)=x³+x)', min: 0, max: 2.5, step: 0.5, defaultValue: 1, unit: '' },
      ],
      evaluate: ([x0]) => {
        const y0 = x0 ** 3 + x0;
        const fp = 3 * x0 * x0 + 1;
        const invPrime = 1 / fp;
        return {
          headline: `f(${f(x0, 1)}) = ${f(y0, 2)} · f’(${f(x0, 1)}) = ${f(fp, 2)} ⟹ (f⁻¹)’(${f(y0, 2)}) = ${f(invPrime, 3)}`,
          metrics: [
            { label: 'Point M(x₀, y₀)', value: `(${f(x0, 1)} ; ${f(y0, 2)})`, accent: 'sky' },
            { label: 'Pente f’(x₀)', value: `${f(fp, 2)}`, accent: 'amber' },
            { label: 'Pente (f⁻¹)’(y₀)', value: `${f(invPrime, 3)}`, accent: 'emerald' },
          ],
          conclusion: `Si la tangente à C_f en x₀ est horizontale (f’(x₀)=0), celle à C_{f⁻¹} en y₀ est verticale !`,
          svg: { x0, h: 0.5, slope: fp, secSlope: invPrime },
        };
      },
    },
    {
      id: 'mc-lim-9',
      shortTitle: 'Composée g ◦ f et limites',
      title: 'Exp. 9 : Théorème de composition lim g(f(x))',
      goal: 'Enchaîner u(x) = f(x) → b puis g(u) → c même quand x → ±∞.',
      formula: 'lim_{x→a} f(x) = b  et  lim_{u→b} g(u) = c  ⟹  lim_{x→a} g(f(x)) = c',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Valeur intermédiaire b', min: 0, max: 5, step: 0.5, defaultValue: 1, unit: '' },
      ],
      evaluate: ([b]) => {
        const c = Math.exp(-b);
        return {
          headline: `Si u = f(x) → ${f(b, 1)}, alors e^(-u) → e^(-${f(b, 1)}) = ${f(c, 4)}`,
          metrics: [
            { label: 'Limite interne b', value: `${f(b, 1)}`, accent: 'sky' },
            { label: 'Limite finale e^(-b)', value: `${f(c, 4)}`, accent: 'emerald' },
            { label: 'Vigilance signe 0⁺/0⁻', value: 'Crucial pour ln(u), 1/u', accent: 'rose' },
          ],
          conclusion: `Ne jamais oublier le signe de u → 0⁺ ou 0⁻ si la fonction externe g présente une asymptote en 0 !`,
          svg: { a: b, h: 2, lim: c, mode: 'conj' },
        };
      },
    },
    {
      id: 'mc-lim-10',
      shortTitle: 'Image d’un intervalle f(I)',
      title: 'Exp. 10 : Synthèse BAC C — Image continue d’un intervalle ouvert/fermé',
      goal: 'Déterminer f([a,b]) et f(]a,b[) selon le sens de variation ou les extrema.',
      formula: 'f continue sur [a,b] ⟹ f([a,b]) = [m, M] (segment fermé borné)',
      visualKind: 'limit-curve',
      sliders: [
        { label: 'Borne droite b', min: 1, max: 5, step: 0.5, defaultValue: 3, unit: '' },
      ],
      evaluate: ([b]) => {
        // f(x) = x^2 - 2x on [-1, b] => min is -1 at x=1
        const fMin = b >= 1 ? -1 : b * b - 2 * b;
        const fMax = Math.max(3, b * b - 2 * b);
        return {
          headline: `Sur [-1 ; ${f(b, 1)}] pour f(x) = x²-2x : Image = [${f(fMin, 2)} ; ${f(fMax, 2)}]`,
          metrics: [
            { label: 'Minimum m', value: `${f(fMin, 2)}`, accent: 'sky' },
            { label: 'Maximum M', value: `${f(fMax, 2)}`, accent: 'amber' },
            { label: 'Attention BAC', value: 'Ne pas oublier min interne x=1', accent: 'rose' },
          ],
          conclusion: `Si f n’est pas monotone sur I, l’image de [a,b] n’est pas simplement [f(a), f(b)] : il faut lire le tableau de variations.`,
          svg: { a: fMin, h: b, lim: fMax, mode: 'tvi' },
        };
      },
    },
  ],

  // 6. DÉRIVATION, ACCROISSEMENTS FINIS & PRIMITIVES (10)
  'mathTc-derivation-primitives': [
    {
      id: 'mc-der-1',
      shortTitle: 'Nombre dérivé f’(a) & sécante',
      title: 'Exp. 1 : Sécante passant à la tangente quand h → 0',
      goal: 'Comparer le taux d’accroissement [f(a+h)-f(a)]/h à f’(a).',
      formula: 'f’(a) = lim_{h→0} [f(a+h) - f(a)] / h',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Abscisse a', min: -1, max: 3, step: 0.5, defaultValue: 1, unit: '' },
        { label: 'Pas h', min: 0.05, max: 1.5, step: 0.05, defaultValue: 0.6, unit: '' },
      ],
      evaluate: ([a, h]) => {
        const slope = 2 * a;
        const secSlope = 2 * a + h;
        return {
          headline: `Sécante = ${f(secSlope, 3)} ⟶ Tangente f’(${a}) = ${f(slope, 2)}`,
          metrics: [
            { label: 'Taux sécante', value: `${f(secSlope, 3)}`, accent: 'sky' },
            { label: 'Pente tangente', value: `${f(slope, 2)}`, accent: 'emerald' },
            { label: 'Équation tangente', value: `y = ${f(slope, 1)}(x-${a}) + ${f(a * a, 1)}`, accent: 'amber' },
          ],
          conclusion: `Plus h se rapproche de 0, plus la droite sécante (AM) épouse la tangente en A.`,
          svg: { x0: a, h, slope, secSlope },
        };
      },
    },
    {
      id: 'mc-der-2',
      shortTitle: 'Dérivabilité droite/gauche (anguleux)',
      title: 'Exp. 2 : Point anguleux vs demi-tangente verticale',
      goal: 'Détecter f’_g(a) ≠ f’_d(a) ou taux tendant vers ±∞.',
      formula: 'x ↦ √x : lim_{0⁺} (√x - 0)/x = +∞ ⟹ demi-tangente verticale',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Demi-pente gauche', min: -3, max: 3, step: 0.5, defaultValue: -1, unit: '' },
        { label: 'Demi-pente droite', min: -3, max: 3, step: 0.5, defaultValue: 1, unit: '' },
      ],
      evaluate: ([fg, fd]) => {
        const diff = Math.abs(fg - fd) < 0.05;
        return {
          headline: diff ? `f’_g = f’_d = ${f(fg, 1)} ⟹ Fonction DÉRIVABLE` : `f’_g = ${f(fg, 1)} ≠ f’_d = ${f(fd, 1)} ⟹ Point ANGULEUX (non dérivable)`,
          metrics: [
            { label: 'f’_gauche', value: `${f(fg, 1)}`, accent: 'sky' },
            { label: 'f’_droite', value: `${f(fd, 1)}`, accent: 'amber' },
            { label: 'Dérivabilité', value: diff ? 'Dérivable ✓' : 'Non dérivable ✗', accent: diff ? 'emerald' : 'rose' },
          ],
          conclusion: `Une fonction peut être continue en a (comme |x| ou √x en 0) sans y être dérivable.`,
          svg: { x0: 0, h: 0.5, slope: fd, secSlope: fg },
        };
      },
    },
    {
      id: 'mc-der-3',
      shortTitle: 'Théorème des Accroissements Finis (TAF)',
      title: 'Exp. 3 : Existence de c ∈ ]a,b[ tel que f’(c) = (f(b)-f(a))/(b-a)',
      goal: 'Visualiser la tangente en c exactement parallèle à la corde [AB].',
      formula: 'f(b) - f(a) = f’(c) · (b - a)  avec  c ∈ ]a, b[',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Borne a', min: 0, max: 2, step: 0.5, defaultValue: 0.5, unit: '' },
        { label: 'Borne b', min: 1.5, max: 4, step: 0.5, defaultValue: 2.5, unit: '' },
      ],
      evaluate: ([a, bRaw]) => {
        const b = Math.max(a + 0.5, bRaw);
        const c = (a + b) / 2;
        const slope = a + b;
        return {
          headline: `Sur [${a} ; ${b}] pour f(x)=x² : tangente parallèle en c = ${f(c)} (pente ${f(slope)})`,
          metrics: [
            { label: 'Pente corde [AB]', value: `${f(slope)}`, accent: 'amber' },
            { label: 'Point intermédiaire c', value: `${f(c)}`, accent: 'emerald' },
            { label: 'Théorème de Rolle', value: 'Cas f(a) = f(b) ⇒ f’(c)=0', accent: 'sky' },
          ],
          conclusion: `Pour une parabole x², le point c du TAF est toujours exactement le milieu (a+b)/2.`,
          svg: { x0: c, h: (b - a) / 2, slope, secSlope: slope },
        };
      },
    },
    {
      id: 'mc-der-4',
      shortTitle: 'Inégalité Accroissements Finis (IAF)',
      title: 'Exp. 4 : Majoration |f(b) - f(a)| ≤ M · |b - a|',
      goal: 'Borner l’écart |u_{n+1} - α| ≤ k |u_n - α| pour prouver la convergence d’une suite.',
      formula: 'Si ∀x ∈ I, |f’(x)| ≤ M < 1  alors  |f(x) - f(y)| ≤ M |x - y|',
      visualKind: 'cobweb-suite',
      sliders: [
        { label: 'Majorant M = max|f’|', min: 0.1, max: 0.9, step: 0.1, defaultValue: 0.4, unit: '' },
        { label: 'Écart initial |u₀ - α|', min: 0.5, max: 3.0, step: 0.5, defaultValue: 2.0, unit: '' },
      ],
      evaluate: ([M, e0]) => {
        const e5 = e0 * Math.pow(M, 5);
        return {
          headline: `Après 5 itérations : erreur ≤ ${f(e0, 1)} × ${f(M, 1)}⁵ = ${f(e5, 4)}`,
          metrics: [
            { label: 'Facteur contractant', value: `M = ${f(M, 1)} < 1`, accent: 'emerald' },
            { label: 'Majoration après n=5', value: `${f(e5, 4)}`, accent: 'amber' },
            { label: 'Limite u_n', value: 'Point fixe α', accent: 'sky' },
          ],
          conclusion: `L’IAF est la méthode standard du BAC C pour conclure |u_n - α| ≤ Mⁿ |u₀ - α| → 0.`,
          svg: { slope: M, c: 2 * (1 - M), u0: 2 + e0 },
        };
      },
    },
    {
      id: 'mc-der-5',
      shortTitle: 'Convexité & point d’inflexion',
      title: 'Exp. 5 : Signe de f’’(x) et traversée de la tangente en I',
      goal: 'Repérer concavité (f’’ < 0), convexité (f’’ > 0) et inflexion (f’’ s’annule en changeant de signe).',
      formula: 'f’’ > 0 : convexe (C_f au-dessus des tangentes)  |  f’’(x₀)=0 + chgt signe : inflexion',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Abscisse x pour x³ - 3x', min: -2.0, max: 2.0, step: 0.25, defaultValue: 0, unit: '' },
      ],
      evaluate: ([x]) => {
        const f2 = 6 * x;
        const zone = Math.abs(f2) < 0.1 ? 'POINT D’INFLEXION (0, 0)' : f2 > 0 ? 'Convexe (∪, f’’ > 0)' : 'Concave (∩, f’’ < 0)';
        return {
          headline: `En x = ${f(x, 2)} : f’’(x) = ${f(f2, 1)} ⟹ ${zone}`,
          metrics: [
            { label: 'Dérivée seconde f’’', value: `${f(f2, 1)}`, accent: f2 >= 0 ? 'emerald' : 'rose' },
            { label: 'Courbure', value: zone, accent: 'amber' },
            { label: 'Position tangente', value: f2 > 0 ? 'C_f au-dessus' : f2 < 0 ? 'C_f en dessous' : 'Traverse C_f', accent: 'sky' },
          ],
          conclusion: `En un point d’inflexion, la courbe traverse sa propre tangente.`,
          svg: { x0: x, h: 0.4, slope: 3 * x * x - 3, secSlope: f2 },
        };
      },
    },
    {
      id: 'mc-der-6',
      shortTitle: 'Dérivées de fonctions composées',
      title: 'Exp. 6 : Chaîne (g ◦ f)’(x) = f’(x)·g’(f(x)) et (uⁿ)’, (√u)’, (ln u)’',
      goal: 'Ne jamais oublier le facteur u’(x) dans les dérivations composées.',
      formula: '(uⁿ)’ = n u’ u^(n-1)  |  (√u)’ = u’ / (2√u)  |  (e^u)’ = u’ e^u',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Exposant n de (2x+1)ⁿ', min: 2, max: 6, step: 1, defaultValue: 3, unit: '' },
        { label: 'Abscisse x', min: 0, max: 2, step: 0.5, defaultValue: 1, unit: '' },
      ],
      evaluate: ([n, x]) => {
        const u = 2 * x + 1;
        const uPrime = 2;
        const der = n * uPrime * Math.pow(u, n - 1);
        return {
          headline: `[(2x+1)^${n}]’ en x=${x} : ${n} × 2 × ${u}^${n - 1} = ${f(der, 0)}`,
          metrics: [
            { label: 'Dérivée exacte', value: `${f(der, 0)}`, accent: 'emerald' },
            { label: 'Erreur sans u’=2', value: `${f(der / 2, 0)} (÷2 !)`, accent: 'rose' },
            { label: 'Valeur (2x+1)ⁿ', value: `${f(Math.pow(u, n), 0)}`, accent: 'sky' },
          ],
          conclusion: `L’oubli du facteur multiplicatif u’(x) est l’erreur n°1 sur les dérivées et primitives au BAC !`,
          svg: { x0: x, h: 0.3, slope: Math.min(8, der / 10), secSlope: u },
        };
      },
    },
    {
      id: 'mc-der-7',
      shortTitle: 'Optimisation & extremum f’(x₀)=0',
      title: 'Exp. 7 : Volume maximal d’une boîte sans couvercle découpée',
      goal: 'Maximiser V(x) = x(20 - 2x)² sur ]0 ; 10[ en annulant V’(x).',
      formula: 'Extremum local en x₀ ∈ ]a,b[  ⟹  f’(x₀) = 0 et changement de signe de f’',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Hauteur découpe x', min: 0.5, max: 9.0, step: 0.25, defaultValue: 3.33, unit: 'cm' },
      ],
      evaluate: ([x]) => {
        const V = x * (20 - 2 * x) ** 2;
        const Vp = (20 - 2 * x) * (20 - 6 * x);
        return {
          headline: `Pour x = ${f(x, 2)} cm : V = ${f(V, 1)} cm³ (Max exact en x = 10/3 ≈ 3,33 cm)`,
          metrics: [
            { label: 'Volume V(x)', value: `${f(V, 1)} cm³`, accent: 'emerald' },
            { label: 'Dérivée V’(x)', value: `${f(Vp, 1)}`, accent: Math.abs(Vp) < 15 ? 'amber' : 'sky' },
            { label: 'Volume optimal', value: '592,6 cm³', accent: 'amber' },
          ],
          conclusion: `V’(x) s’annule et passe de + à - en x = 20/6 = 10/3 cm, assurant le maximum global.`,
          svg: { x0: x / 3, h: 0.4, slope: Vp / 80, secSlope: V / 200 },
        };
      },
    },
    {
      id: 'mc-der-8',
      shortTitle: 'Tableau de primitives usuelles',
      title: 'Exp. 8 : Reconnaissance des formes u’/u, u’uⁿ, u’/√u',
      goal: 'Trouver la constante multiplicative exacte pour passer d’une forme presque prête à la primitive.',
      formula: '∫ u’ uⁿ = u^(n+1)/(n+1)  |  ∫ u’/u = ln|u|  |  ∫ u’/√u = 2√u',
      visualKind: 'riemann-sum',
      sliders: [
        { label: 'Borne sup b (sur [0, b])', min: 1, max: 4, step: 0.5, defaultValue: 2, unit: '' },
        { label: 'Cas (1=x·e^(x²), 2=2x/(x²+1), 3=x/√(x²+1))', min: 1, max: 3, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([b, cas]) => {
        const res = cas === 1 ? 0.5 * (Math.exp(b * b) - 1) : cas === 2 ? Math.log(b * b + 1) : Math.sqrt(b * b + 1) - 1;
        const form = cas === 1 ? '½ e^(x²)' : cas === 2 ? 'ln(x² + 1)' : '√(x² + 1)';
        return {
          headline: `Primitive : ${form} + C  ⟹  Intégrale sur [0 ; ${b}] = ${f(res, 3)}`,
          metrics: [
            { label: 'Primitive F(x)', value: form, accent: 'amber' },
            { label: `F(${b}) - F(0)`, value: `${f(res, 3)}`, accent: 'emerald' },
            { label: 'Vérification', value: 'Dériver F(x) !', accent: 'sky' },
          ],
          conclusion: `Toujours redériver mentalement la primitive trouvée pour ajuster le coefficient fractionnaire.`,
          svg: { n: 8, b, area: res },
        };
      },
    },
    {
      id: 'mc-der-9',
      shortTitle: 'Unique primitive F(x₀) = y₀',
      title: 'Exp. 9 : Détermination de la constante d’intégration C',
      goal: 'Fixer la valeur unique de C telle que la courbe de F passe par (x₀, y₀).',
      formula: 'F_C(x) = F₀(x) + C  avec  C = y₀ - F₀(x₀)',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Condition y₀ = F(1)', min: -3, max: 5, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([y0]) => {
        // f(x) = 3x^2 - 1 => F0(x) = x^3 - x => F0(1) = 0 => C = y0
        const C = y0;
        const F2 = 8 - 2 + C;
        return {
          headline: `F(x) = x³ - x + (${f(C, 1)})  (passe par (1 ; ${f(y0, 1)}) · F(2) = ${f(F2, 1)})`,
          metrics: [
            { label: 'Constante C', value: `${f(C, 1)}`, accent: 'amber' },
            { label: 'Valeur F(2)', value: `${f(F2, 1)}`, accent: 'emerald' },
            { label: 'Pente en tout x', value: 'F’(x) = 3x² - 1', accent: 'sky' },
          ],
          conclusion: `Toutes les primitives diffèrent d’une translation verticale (courbes parallèles).`,
          svg: { x0: 1, h: 0.5, slope: 2, secSlope: C },
        };
      },
    },
    {
      id: 'mc-der-10',
      shortTitle: 'Position courbe vs tangente (signe f - T)',
      title: 'Exp. 10 : Synthèse BAC C — Étude complète de signe de f(x) - (ax+b)',
      goal: 'Comparer C_f et sa tangente ou asymptote grâce à une fonction auxiliaire φ.',
      formula: 'f(x) - T(x) > 0 ⟹ C_f au-dessus de T  |  < 0 ⟹ C_f en dessous',
      visualKind: 'tangent-secant',
      sliders: [
        { label: 'Abscisse x', min: 0.2, max: 3.0, step: 0.2, defaultValue: 1.4, unit: '' },
      ],
      evaluate: ([x]) => {
        const fx = Math.exp(x);
        const tx = 1 + x;
        const diff = fx - tx;
        return {
          headline: `e^(${f(x, 1)}) - (1 + ${f(x, 1)}) = +${f(diff, 3)} ≥ 0 ⟹ e^x toujours ≥ 1 + x !`,
          metrics: [
            { label: 'Écart e^x - (1+x)', value: `+${f(diff, 3)}`, accent: 'emerald' },
            { label: 'Position C_f', value: x === 0 ? 'Point de contact' : 'Strictement au-dessus', accent: 'amber' },
            { label: 'Inégalité célèbre', value: 'ln(1+u) ≤ u et e^u ≥ 1+u', accent: 'sky' },
          ],
          conclusion: `La convexité de e^x (f’’ > 0) prouve instantanément l’inégalité fondamentale e^x ≥ x + 1 pour tout x ∈ ℝ.`,
          svg: { x0: x, h: 0.4, slope: fx, secSlope: 1 },
        };
      },
    },
  ],
};
