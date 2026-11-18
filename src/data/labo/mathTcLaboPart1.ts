import { MathLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

const gcd = (a: number, b: number): number => {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
};

const extGcd = (a: number, b: number): [number, number, number] => {
  if (b === 0) return [a, 1, 0];
  const [d, x1, y1] = extGcd(b, a % b);
  return [d, y1, x1 - Math.floor(a / b) * y1];
};

const modPow = (base: number, exp: number, mod: number): number => {
  let res = 1;
  let b = ((base % mod) + mod) % mod;
  let e = exp;
  while (e > 0) {
    if (e % 2 === 1) res = (res * b) % mod;
    b = (b * b) % mod;
    e = Math.floor(e / 2);
  }
  return res;
};

export const MATH_TC_LABO_PART1: Record<string, MathLaboExpSpec[]> = {
  // 1. ARITHMÉTIQUE (ℤ, DIVISIBILITÉ, CONGRUENCES, BÉZOUT, GAUSS) (10)
  'mathTc-arithmetique': [
    {
      id: 'mc-ari-1',
      shortTitle: 'Division euclidienne a = bq+r',
      title: 'Exp. 1 : Division euclidienne dans ℤ et condition 0 ≤ r < |b|',
      goal: 'Visualiser le reste unique r et le saut du quotient q quand a varie.',
      formula: 'a = b·q + r  avec  0 ≤ r < |b|',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Dividende a', min: -30, max: 60, step: 1, defaultValue: 23, unit: '' },
        { label: 'Diviseur b', min: 2, max: 15, step: 1, defaultValue: 7, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const r = ((a % b) + b) % b;
        const q = (a - r) / b;
        return {
          headline: `${a} = ${b} × (${q}) + ${r}  (0 ≤ ${r} < ${b})`,
          metrics: [
            { label: 'Quotient q', value: `${q}`, accent: 'sky' },
            { label: 'Reste r ≥ 0', value: `${r}`, accent: 'amber' },
            { label: 'Congruence', value: `${a} ≡ ${r} [${b}]`, accent: 'emerald' },
          ],
          conclusion: `Même si a < 0 (ex: -17 = 7×(-3)+4), le reste r doit toujours vérifier 0 ≤ r < b.`,
          svg: { n: b, k: r, a, b },
        };
      },
    },
    {
      id: 'mc-ari-2',
      shortTitle: 'Algorithme d’Euclide (PGCD/PPCM)',
      title: 'Exp. 2 : Descente euclidienne PGCD(a,b) et identité PGCD·PPCM = ab',
      goal: 'Observer la réduction des restes successifs jusqu’au dernier reste non nul.',
      formula: 'PGCD(a,b) = PGCD(b, a mod b)  |  PGCD(a,b) × PPCM(a,b) = |a·b|',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'Entier a', min: 12, max: 180, step: 2, defaultValue: 84, unit: '' },
        { label: 'Entier b', min: 10, max: 140, step: 2, defaultValue: 36, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const d = gcd(a, b);
        const ppcm = (a * b) / d;
        return {
          headline: `PGCD(${a}, ${b}) = ${d} · PPCM(${a}, ${b}) = ${ppcm}`,
          metrics: [
            { label: 'PGCD(a,b)', value: `${d}`, accent: 'emerald' },
            { label: 'PPCM(a,b)', value: `${ppcm}`, accent: 'amber' },
            { label: 'Premiers entre eux ?', value: d === 1 ? 'Oui (d=1)' : `Non (d=${d})`, accent: 'sky' },
          ],
          conclusion: `Les diviseurs communs de a et b sont exactement les diviseurs de leur PGCD ${d}.`,
          svg: { a, b, d, u: 1, v: 0 },
        };
      },
    },
    {
      id: 'mc-ari-3',
      shortTitle: 'Horloge modulo n (ℤ/nℤ)',
      title: 'Exp. 3 : Multiplication et inverses dans l’anneau ℤ/nℤ',
      goal: 'Tester si a est inversible modulo n (a ∧ n = 1) sur le cadran modulaire.',
      formula: 'a inversible mod n  ⟺  PGCD(a, n) = 1 (ℤ/nℤ corps si n premier)',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Module n', min: 4, max: 17, step: 1, defaultValue: 12, unit: '' },
        { label: 'Classe a', min: 1, max: 16, step: 1, defaultValue: 5, unit: '' },
      ],
      evaluate: ([n, aRaw]) => {
        const a = aRaw % n;
        const [d, u] = extGcd(a, n);
        const inv = d === 1 ? ((u % n) + n) % n : null;
        return {
          headline: inv !== null ? `${a}⁻¹ ≡ ${inv} [${n}] (car ${a}×${inv} ≡ 1 [${n}])` : `${a} non inversible [${n}] car PGCD(${a},${n}) = ${d} > 1`,
          metrics: [
            { label: 'PGCD(a, n)', value: `${d}`, accent: 'sky' },
            { label: 'Inverse mod n', value: inv !== null ? `${inv}` : 'Aucun (diviseur de 0)', accent: inv !== null ? 'emerald' : 'rose' },
            { label: 'Carré a² mod n', value: `${(a * a) % n}`, accent: 'amber' },
          ],
          conclusion: `Seuls les entiers premiers avec n possèdent un inverse multiplicatif modulo n.`,
          svg: { n, k: inv ?? (a * a) % n, a, b: n },
        };
      },
    },
    {
      id: 'mc-ari-4',
      shortTitle: 'Identité de Bézout au + bv = d',
      title: 'Exp. 4 : Calcul du couple (u, v) par Euclide étendu',
      goal: 'Construire un couple particulier (u₀, v₀) vérifiant a u + b v = PGCD(a,b).',
      formula: '∃ (u,v) ∈ ℤ² : a·u + b·v = PGCD(a,b)  |  a ∧ b = 1 ⟺ au + bv = 1',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'Coefficient a', min: 3, max: 45, step: 1, defaultValue: 17, unit: '' },
        { label: 'Coefficient b', min: 2, max: 35, step: 1, defaultValue: 11, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const [d, u, v] = extGcd(a, b);
        return {
          headline: `${a}×(${u}) + ${b}×(${v}) = ${a * u + b * v} (= PGCD = ${d})`,
          metrics: [
            { label: 'Coefficient u₀', value: `${u}`, accent: 'sky' },
            { label: 'Coefficient v₀', value: `${v}`, accent: 'amber' },
            { label: 'PGCD d', value: `${d}`, accent: 'emerald' },
          ],
          conclusion: `Ce couple (u₀, v₀) fournit immédiatement l’inverse de a mod b lorsque d = 1.`,
          svg: { a, b, d, u, v },
        };
      },
    },
    {
      id: 'mc-ari-5',
      shortTitle: 'Équation diophantienne ax + by = c',
      title: 'Exp. 5 : Résolution complète dans ℤ² et théorème de Gauss',
      goal: 'Tester la condition d | c puis paramétrer toutes les solutions (x_k, y_k).',
      formula: 'ax + by = c soluble ⟺ PGCD(a,b) | c  |  x = x₀ + k(b/d), y = y₀ - k(a/d)',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'a', min: 2, max: 20, step: 1, defaultValue: 6, unit: '' },
        { label: 'b', min: 2, max: 20, step: 1, defaultValue: 9, unit: '' },
        { label: 'Second membre c', min: 3, max: 36, step: 1, defaultValue: 15, unit: '' },
      ],
      evaluate: ([a, b, c]) => {
        const [d, u, v] = extGcd(a, b);
        const sol = c % d === 0;
        const x0 = sol ? u * (c / d) : 0;
        const y0 = sol ? v * (c / d) : 0;
        return {
          headline: sol ? `Solutions : (${x0} + ${b / d}k ; ${y0} - ${a / d}k), k ∈ ℤ` : `Aucune solution dans ℤ² car PGCD(${a},${b}) = ${d} ∤ ${c}`,
          metrics: [
            { label: 'Condition d | c', value: sol ? `${d} divise ${c} ✓` : `${d} ∤ ${c} ✗`, accent: sol ? 'emerald' : 'rose' },
            { label: 'Particulière (x₀,y₀)', value: sol ? `(${x0} ; ${y0})` : '∅', accent: 'amber' },
            { label: 'Pas de k', value: `(+${b / d} ; -${a / d})`, accent: 'sky' },
          ],
          conclusion: `Au BAC C, toujours diviser d’abord par d puis appliquer Bézout et le lemme de Gauss.`,
          svg: { a, b, d, u: x0, v: y0 },
        };
      },
    },
    {
      id: 'mc-ari-6',
      shortTitle: 'Petit théorème de Fermat a^k [p]',
      title: 'Exp. 6 : Cycle des puissances a^k mod p et réduction de l’exposant',
      goal: 'Observer la périodicité de a^k mod p et réduire de grands exposants (ex: 2026).',
      formula: 'Si p premier et p ∤ a : a^(p-1) ≡ 1 [p]  ;  a^k ≡ a^(k mod (p-1)) [p]',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Base a', min: 2, max: 12, step: 1, defaultValue: 3, unit: '' },
        { label: 'Exposant k', min: 1, max: 40, step: 1, defaultValue: 17, unit: '' },
        { label: 'Nombre premier p', min: 5, max: 13, step: 2, defaultValue: 7, unit: '' },
      ],
      evaluate: ([a, k, pRaw]) => {
        const p = pRaw === 9 ? 11 : pRaw;
        const rem = modPow(a, k, p);
        const fermat = gcd(a, p) === 1 ? modPow(a, p - 1, p) : 0;
        return {
          headline: `${a}^${k} ≡ ${rem} [${p}]  (car ${a}^${p - 1} ≡ ${fermat} [${p}])`,
          metrics: [
            { label: 'Reste modulo p', value: `${rem}`, accent: 'amber' },
            { label: 'Exposant réduit mod (p-1)', value: `${k % (p - 1)}`, accent: 'sky' },
            { label: `a^(p-1) mod ${p}`, value: `${fermat}`, accent: 'emerald' },
          ],
          conclusion: `Pour calculer a^2026 mod p, on divise d’abord 2026 par l’ordre (ou p-1).`,
          svg: { n: p, k: rem, a, b: p },
        };
      },
    },
    {
      id: 'mc-ari-7',
      shortTitle: 'Décomposition facteurs premiers',
      title: 'Exp. 7 : Nombre de diviseurs τ(N) = ∏(α_i + 1)',
      goal: 'Factoriser N en nombres premiers et compter tous ses diviseurs positifs.',
      formula: 'N = ∏ p_i^(α_i)  ⟹  Nb diviseurs = ∏ (α_i + 1)',
      visualKind: 'bezout-line',
      sliders: [
        { label: 'Entier N', min: 12, max: 360, step: 6, defaultValue: 120, unit: '' },
      ],
      evaluate: ([N]) => {
        let temp = N;
        const parts: string[] = [];
        let nbDiv = 1;
        for (let p = 2; p * p <= temp; p++) {
          let e = 0;
          while (temp % p === 0) {
            temp /= p;
            e++;
          }
          if (e > 0) {
            parts.push(e > 1 ? `${p}^${e}` : `${p}`);
            nbDiv *= e + 1;
          }
        }
        if (temp > 1) {
          parts.push(`${temp}`);
          nbDiv *= 2;
        }
        return {
          headline: `${N} = ${parts.join(' × ')} · Possède ${nbDiv} diviseurs positifs`,
          metrics: [
            { label: 'Factorisation', value: parts.join('·'), accent: 'sky' },
            { label: 'Nb diviseurs', value: `${nbDiv}`, accent: 'emerald' },
            { label: 'Parité nb diviseurs', value: Number.isInteger(Math.sqrt(N)) ? 'Impair (carré)' : 'Pair', accent: 'amber' },
          ],
          conclusion: `Un entier N possède un nombre impair de diviseurs si et seulement si N est un carré parfait.`,
          svg: { a: N, b: nbDiv, d: gcd(N, 60), u: parts.length, v: nbDiv },
        };
      },
    },
    {
      id: 'mc-ari-8',
      shortTitle: 'Critères de divisibilité (mod 9, 11)',
      title: 'Exp. 8 : Preuve par congruences des critères par 3, 9 et 11',
      goal: 'Exploiter 10 ≡ 1 [9] et 10 ≡ -1 [11] sur un nombre à 4 chiffres.',
      formula: 'N ≡ Σ a_k [9]  |  N ≡ Σ (-1)^k a_k [11]',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Entier N', min: 1000, max: 9999, step: 37, defaultValue: 4719, unit: '' },
      ],
      evaluate: ([N]) => {
        const digits = String(N).split('').map(Number);
        const s9 = digits.reduce((s, d) => s + d, 0);
        const s11 = digits[3] - digits[2] + digits[1] - digits[0];
        return {
          headline: `${N} : mod 9 = ${N % 9} (Σ=${s9}) · mod 11 = ${N % 11} (alt=${s11})`,
          metrics: [
            { label: 'Reste mod 9', value: `${N % 9}`, accent: N % 9 === 0 ? 'emerald' : 'amber' },
            { label: 'Reste mod 11', value: `${N % 11}`, accent: N % 11 === 0 ? 'emerald' : 'sky' },
            { label: 'Divisible par 99 ?', value: N % 99 === 0 ? 'Oui (9 ∧ 11 = 1)' : 'Non', accent: 'rose' },
          ],
          conclusion: `Comme 9 et 11 sont premiers entre eux, N est divisible par 99 ssi il est divisible par 9 ET par 11 (corollaire de Gauss).`,
          svg: { n: 11, k: N % 11, a: s9, b: 11 },
        };
      },
    },
    {
      id: 'mc-ari-9',
      shortTitle: 'Système de congruences (Restes chinois)',
      title: 'Exp. 9 : Résolution de { x ≡ r₁ [m₁] ; x ≡ r₂ [m₂] }',
      goal: 'Trouver la solution unique modulo m₁·m₂ quand m₁ ∧ m₂ = 1.',
      formula: 'Si m₁ ∧ m₂ = 1, ∃! x mod (m₁·m₂) vérifiant le système',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Reste r₁ [5]', min: 0, max: 4, step: 1, defaultValue: 3, unit: '' },
        { label: 'Reste r₂ [7]', min: 0, max: 6, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([r1, r2]) => {
        let sol = 0;
        for (let x = 0; x < 35; x++) {
          if (x % 5 === r1 && x % 7 === r2) {
            sol = x;
            break;
          }
        }
        return {
          headline: `{ x ≡ ${r1}[5] ; x ≡ ${r2}[7] }  ⟺  x ≡ ${sol} [35]`,
          metrics: [
            { label: 'Solution mod 35', value: `${sol}`, accent: 'emerald' },
            { label: 'Vérif mod 5', value: `${sol} % 5 = ${sol % 5}`, accent: 'sky' },
            { label: 'Vérif mod 7', value: `${sol} % 7 = ${sol % 7}`, accent: 'amber' },
          ],
          conclusion: `Comme 5 ∧ 7 = 1, les solutions se répètent périodiquement tous les 5×7 = 35.`,
          svg: { n: 35, k: sol, a: r1, b: r2 },
        };
      },
    },
    {
      id: 'mc-ari-10',
      shortTitle: 'Chiffrement RSA / Affine',
      title: 'Exp. 10 : Synthèse BAC C — Codage affine y ≡ ax + b [26]',
      goal: 'Choisir a premier avec 26 puis calculer la clé de déchiffrement a⁻¹ mod 26.',
      formula: 'Décodage bijectif sur ℤ/26ℤ  ⟺  PGCD(a, 26) = 1',
      visualKind: 'euclid-clock',
      sliders: [
        { label: 'Clé a', min: 1, max: 25, step: 2, defaultValue: 7, unit: '' },
        { label: 'Décalage b', min: 0, max: 25, step: 1, defaultValue: 3, unit: '' },
        { label: 'Lettre x (0=A..25=Z)', min: 0, max: 25, step: 1, defaultValue: 6, unit: '' },
      ],
      evaluate: ([a, b, x]) => {
        const [d, u] = extGcd(a, 26);
        const y = (a * x + b) % 26;
        const aInv = d === 1 ? ((u % 26) + 26) % 26 : null;
        return {
          headline: aInv !== null ? `Codage(${x}) = ${y} · Clé inverse a⁻¹ = ${aInv} [26]` : `a = ${a} non premier avec 26 (collision !)`,
          metrics: [
            { label: 'Chiffré y', value: `${y} (${String.fromCharCode(65 + y)})`, accent: 'amber' },
            { label: 'Clé décodage a⁻¹', value: aInv !== null ? `${aInv}` : 'Invalide', accent: aInv !== null ? 'emerald' : 'rose' },
            { label: 'PGCD(a, 26)', value: `${d}`, accent: 'sky' },
          ],
          conclusion: `Pour que deux lettres différentes ne donnent pas la même lettre chiffrée, a doit être impair et ≠ 13.`,
          svg: { n: 26, k: y, a, b },
        };
      },
    },
  ],

  // 2. NOMBRES COMPLEXES : ALGÈBRE & TRIGONOMÉTRIE (10)
  'mathTc-complexes-algebre': [
    {
      id: 'mc-cpa-1',
      shortTitle: 'Forme algébrique ↔ polaire',
      title: 'Exp. 1 : Passage a + ib ↔ r e^(iθ) dans le plan d’Argand',
      goal: 'Convertir instantanément coordonnées cartésiennes (a, b) et polaires (r, θ).',
      formula: 'r = |z| = √(a²+b²)  ;  cos θ = a/r, sin θ = b/r',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Partie réelle Re(z)', min: -5, max: 5, step: 0.5, defaultValue: 3, unit: '' },
        { label: 'Partie imaginaire Im(z)', min: -5, max: 5, step: 0.5, defaultValue: 3, unit: '' },
      ],
      evaluate: ([re, im]) => {
        const r = Math.hypot(re, im);
        const deg = (Math.atan2(im, re) * 180) / Math.PI;
        return {
          headline: `z = ${f(re, 1)} + (${f(im, 1)})i  ⟹  |z| = ${f(r)} ; arg(z) ≈ ${f(deg, 1)}°`,
          metrics: [
            { label: 'Module |z|', value: `${f(r)}`, accent: 'amber' },
            { label: 'Argument (rad)', value: `${f((deg * Math.PI) / 180)} rad`, accent: 'sky' },
            { label: 'Argument (°)', value: `${f(deg, 1)}°`, accent: 'emerald' },
          ],
          conclusion: `Le conjugué z̄ = a - ib a même module r et un argument opposé -θ.`,
          svg: { re, im, r, deg },
        };
      },
    },
    {
      id: 'mc-cpa-2',
      shortTitle: 'Produit z₁·z₂ et rotation',
      title: 'Exp. 2 : Interprétation géométrique du produit z₁·z₂',
      goal: 'Vérifier |z₁z₂| = |z₁|·|z₂| et arg(z₁z₂) = arg(z₁) + arg(z₂) [2π].',
      formula: '(r₁ e^(iθ₁))·(r₂ e^(iθ₂)) = (r₁r₂) e^(i(θ₁+θ₂))',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Module r₁', min: 0.5, max: 3, step: 0.5, defaultValue: 2, unit: '' },
        { label: 'Angle θ₁', min: -180, max: 180, step: 15, defaultValue: 30, unit: '°' },
        { label: 'Angle θ₂', min: -180, max: 180, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([r1, th1, th2]) => {
        const thSum = ((th1 + th2 + 180) % 360 + 360) % 360 - 180;
        const rad = (thSum * Math.PI) / 180;
        return {
          headline: `Produit : module ${r1}×1,5 = ${f(1.5 * r1)} · angle ${th1}° + ${th2}° = ${thSum}°`,
          metrics: [
            { label: '|z₁·z₂|', value: `${f(1.5 * r1)}`, accent: 'amber' },
            { label: 'arg(z₁·z₂)', value: `${thSum}°`, accent: 'emerald' },
            { label: 'Re + i Im', value: `${f(1.5 * r1 * Math.cos(rad))} + ${f(1.5 * r1 * Math.sin(rad))}i`, accent: 'sky' },
          ],
          conclusion: `Multiplier par i (r=1, θ=90°) fait tourner tout vecteur de +π/2 dans le sens direct.`,
          svg: { re: 1.5 * r1 * Math.cos(rad), im: 1.5 * r1 * Math.sin(rad), r: 1.5 * r1, deg: thSum },
        };
      },
    },
    {
      id: 'mc-cpa-3',
      shortTitle: 'Formule de Moivre zⁿ',
      title: 'Exp. 3 : Spirale géométrique des puissances zⁿ = rⁿ e^(inθ)',
      goal: 'Observer si |z| < 1 (spirale convergente vers 0) ou |z| > 1 (divergente) et la rotation nθ.',
      formula: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Module r', min: 0.6, max: 1.4, step: 0.1, defaultValue: 1.0, unit: '' },
        { label: 'Angle θ', min: 15, max: 90, step: 15, defaultValue: 45, unit: '°' },
        { label: 'Exposant n', min: 1, max: 12, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([r, th, n]) => {
        const rn = Math.pow(r, n);
        const deg = (n * th) % 360;
        const rad = (deg * Math.PI) / 180;
        const isReal = Math.abs(Math.sin(rad)) < 1e-6;
        return {
          headline: `z^${n} : module ${f(rn, 2)} · angle ${deg}° ${isReal ? '(RÉEL PUR !)' : ''}`,
          metrics: [
            { label: '|zⁿ| = rⁿ', value: `${f(rn, 3)}`, accent: 'amber' },
            { label: 'nθ mod 360°', value: `${deg}°`, accent: 'sky' },
            { label: 'Nature', value: isReal ? 'Réel pur' : Math.abs(Math.cos(rad)) < 1e-6 ? 'Imaginaire pur' : 'Complexe', accent: 'emerald' },
          ],
          conclusion: `(1 + i)ⁿ est réel pur ssi n ≡ 0 [4] car arg(1+i) = π/4.`,
          svg: { re: Math.min(4.5, rn) * Math.cos(rad), im: Math.min(4.5, rn) * Math.sin(rad), r: Math.min(4.5, rn), deg },
        };
      },
    },
    {
      id: 'mc-cpa-4',
      shortTitle: 'Racines n-ièmes de l’unité',
      title: 'Exp. 4 : Polygone régulier des solutions de zⁿ = 1',
      goal: 'Visualiser les n sommets répartis tous les 2π/n sur le cercle trigonométrique.',
      formula: 'z_k = e^(2ikπ / n)  (k = 0..n-1)  |  Σ z_k = 0',
      visualKind: 'roots-polygon',
      sliders: [
        { label: 'Ordre n', min: 2, max: 10, step: 1, defaultValue: 5, unit: '' },
        { label: 'Déphasage cible φ', min: 0, max: 180, step: 30, defaultValue: 0, unit: '°' },
      ],
      evaluate: ([n, phi]) => {
        const stepDeg = 360 / n;
        return {
          headline: `${n} racines espacées de ${f(stepDeg, 1)}° · Somme algébrique = 0`,
          metrics: [
            { label: 'Nombre de racines', value: `${n}`, accent: 'amber' },
            { label: 'Pas angulaire', value: `360°/${n} = ${f(stepDeg, 1)}°`, accent: 'sky' },
            { label: 'Somme des racines', value: '0', accent: 'emerald' },
          ],
          conclusion: `Pour zⁿ = r e^(iφ), la première racine vaut r^(1/n) e^(iφ/n) puis on multiplie par e^(2iπ/n).`,
          svg: { n, offsetDeg: phi / n },
        };
      },
    },
    {
      id: 'mc-cpa-5',
      shortTitle: 'Racines carrées de a + ib',
      title: 'Exp. 5 : Méthode algébrique (x + iy)² = a + ib',
      goal: 'Résoudre le système { x² - y² = a ; x² + y² = √(a²+b²) ; 2xy = b }.',
      formula: 'x² = (|Z| + a)/2  ;  y² = (|Z| - a)/2  ;  signe(xy) = signe(b)',
      visualKind: 'roots-polygon',
      sliders: [
        { label: 'Re(Z) = a', min: -8, max: 8, step: 1, defaultValue: 3, unit: '' },
        { label: 'Im(Z) = b', min: -8, max: 8, step: 1, defaultValue: 4, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const mod = Math.hypot(a, b);
        const x = Math.sqrt((mod + a) / 2);
        const yAbs = Math.sqrt((mod - a) / 2);
        const y = b >= 0 ? yAbs : -yAbs;
        return {
          headline: `δ₁ = ${f(x)} + (${f(y)})i  et  δ₂ = -δ₁`,
          metrics: [
            { label: 'Module |Z|', value: `${f(mod)}`, accent: 'sky' },
            { label: 'Racine δ₁', value: `${f(x)} ${y >= 0 ? '+' : '-'} ${f(Math.abs(y))}i`, accent: 'emerald' },
            { label: 'Vérif δ₁²', value: `${f(x * x - y * y, 1)} + ${f(2 * x * y, 1)}i`, accent: 'amber' },
          ],
          conclusion: `Si Z = 3 + 4i (|Z|=5), alors x²=4, y²=1 et xy>0 donc δ = ±(2 + i).`,
          svg: { n: 2, offsetDeg: (Math.atan2(y, x) * 180) / Math.PI },
        };
      },
    },
    {
      id: 'mc-cpa-6',
      shortTitle: 'Équation az² + bz + c = 0 (Δ < 0)',
      title: 'Exp. 6 : Trinôme complexe à coefficients réels ou complexes',
      goal: 'Calculer Δ = b² - 4ac et les deux racines complexes symétriques ou distinctes.',
      formula: 'Si Δ = -k² < 0 : z₁,₂ = (-b ± i√|Δ|) / (2a)',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Coefficient b (a=1)', min: -6, max: 6, step: 1, defaultValue: -2, unit: '' },
        { label: 'Coefficient c (a=1)', min: -4, max: 12, step: 1, defaultValue: 5, unit: '' },
      ],
      evaluate: ([b, c]) => {
        const delta = b * b - 4 * c;
        const re = -b / 2;
        const im = delta < 0 ? Math.sqrt(-delta) / 2 : 0;
        return {
          headline: delta < 0 ? `Δ = ${delta} < 0 ⟹ z₁,₂ = ${f(re, 1)} ± ${f(im)}i` : `Δ = ${delta} ≥ 0 ⟹ racines réelles (${f(re - Math.sqrt(delta) / 2)} ; ${f(re + Math.sqrt(delta) / 2)})`,
          metrics: [
            { label: 'Discriminant Δ', value: `${delta}`, accent: delta < 0 ? 'purple' : 'emerald' },
            { label: 'Somme z₁+z₂', value: `${-b}`, accent: 'sky' },
            { label: 'Produit z₁·z₂', value: `${c}`, accent: 'amber' },
          ],
          conclusion: `Lorsque a, b, c ∈ ℝ et Δ < 0, les deux racines sont toujours conjuguées : z₂ = z̄₁.`,
          svg: { re, im: Math.max(0.2, im), r: Math.hypot(re, im), deg: (Math.atan2(im, re) * 180) / Math.PI },
        };
      },
    },
    {
      id: 'mc-cpa-7',
      shortTitle: 'Formules d’Euler & linéarisation',
      title: 'Exp. 7 : Linéarisation de cosⁿ(θ) et sinⁿ(θ) via e^(±iθ)',
      goal: 'Décomposer cos²θ, cos³θ ou sin³θ pour intégrer sans effort.',
      formula: 'cos θ = (e^(iθ) + e^(-iθ))/2  ;  sin θ = (e^(iθ) - e^(-iθ))/(2i)',
      visualKind: 'osc-ode',
      sliders: [
        { label: 'Puissance n (2=cos²x, 3=cos³x, 4=cos⁴x)', min: 2, max: 4, step: 1, defaultValue: 3, unit: '' },
        { label: 'Angle x', min: 0, max: 180, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([n, xDeg]) => {
        const formulas: Record<number, string> = {
          2: '½ + ½ cos(2x)',
          3: '¼ cos(3x) + ¾ cos(x)',
          4: '⅜ + ½ cos(2x) + ⅛ cos(4x)',
        };
        const rad = (xDeg * Math.PI) / 180;
        const val = Math.pow(Math.cos(rad), n);
        return {
          headline: `cos^${n}(x) = ${formulas[n]}  (vaut ${f(val, 3)} en ${xDeg}°)`,
          metrics: [
            { label: 'Forme linéarisée', value: formulas[n], accent: 'amber' },
            { label: `Valeur en ${xDeg}°`, value: `${f(val, 3)}`, accent: 'sky' },
            { label: 'Valeur moyenne [0;2π]', value: n % 2 === 1 ? '0' : n === 2 ? '0,5' : '0,375', accent: 'emerald' },
          ],
          conclusion: `La linéarisation par binôme de Newton sur Euler transforme toute puissance en somme de cos(kx) faciles à primitiver.`,
          svg: { freq: n, amp: 1, damp: 0 },
        };
      },
    },
    {
      id: 'mc-cpa-8',
      shortTitle: 'Angle moitié (1 + e^(iθ))',
      title: 'Exp. 8 : Factorisation par l’angle moitié e^(iθ/2)',
      goal: 'Trouver directement module et argument de 1 + e^(iθ) et 1 - e^(iθ).',
      formula: '1 + e^(iθ) = 2 cos(θ/2) e^(iθ/2)  |  1 - e^(iθ) = -2i sin(θ/2) e^(iθ/2)',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Angle θ', min: 15, max: 300, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([th]) => {
        const rad = (th * Math.PI) / 180;
        const re = 1 + Math.cos(rad);
        const im = Math.sin(rad);
        const mod = 2 * Math.abs(Math.cos(rad / 2));
        const argDeg = Math.cos(rad / 2) >= 0 ? th / 2 : th / 2 - 180;
        return {
          headline: `1 + e^(i·${th}°) : module = 2|cos(${th / 2}°)| = ${f(mod)} · arg = ${f(argDeg, 1)}°`,
          metrics: [
            { label: 'Module |1+e^(iθ)|', value: `${f(mod)}`, accent: 'amber' },
            { label: 'Argument', value: `${f(argDeg, 1)}°`, accent: 'emerald' },
            { label: 'Attention signe cos(θ/2)', value: Math.cos(rad / 2) >= 0 ? 'Positif (+)' : 'Négatif (+π !)', accent: 'rose' },
          ],
          conclusion: `Classique absolu du BAC C : toujours vérifier le signe de cos(θ/2) avant de conclure que c’est le module !`,
          svg: { re, im, r: mod, deg: argDeg },
        };
      },
    },
    {
      id: 'mc-cpa-9',
      shortTitle: 'Factorisation dans ℂ[X]',
      title: 'Exp. 9 : Racines imaginaires pures et factorisation de P(z)',
      goal: 'Chercher z₀ = iy solution de P(z)=0 puis factoriser P(z) = (z - z₀)Q(z).',
      formula: 'P(iy) = A(y) + i B(y) = 0  ⟺  A(y) = 0 et B(y) = 0',
      visualKind: 'roots-polygon',
      sliders: [
        { label: 'Racine imaginaire y₀', min: -4, max: 4, step: 1, defaultValue: 2, unit: 'i' },
      ],
      evaluate: ([y0]) => {
        const y = y0 === 0 ? 1 : y0;
        return {
          headline: `Si z₀ = ${y}i annule P(z), alors P(z) = (z - ${y}i)·Q(z) (deg Q = deg P - 1)`,
          metrics: [
            { label: 'Racine trouvée', value: `${y}i`, accent: 'emerald' },
            { label: 'Système réel/imag', value: 'Re(P(iy))=0 ∧ Im(P(iy))=0', accent: 'sky' },
            { label: 'Identification coefs', value: 'Par division euclidienne', accent: 'amber' },
          ],
          conclusion: `Attention : un polynôme à coefficients complexes n’a PAS forcément z̄₀ comme seconde racine !`,
          svg: { n: 3, offsetDeg: 90 },
        };
      },
    },
    {
      id: 'mc-cpa-10',
      shortTitle: 'Inégalité triangulaire |z₁+z₂|',
      title: 'Exp. 10 : Synthèse BAC C — Cas d’égalité |z₁ + z₂| = |z₁| + |z₂|',
      goal: 'Visualiser l’alignement des vecteurs quand arg(z₁) = arg(z₂).',
      formula: '|z₁ + z₂| ≤ |z₁| + |z₂|  (égalité ⟺ z₁/z₂ ∈ ℝ₊*)',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Écart angulaire Δθ', min: 0, max: 180, step: 15, defaultValue: 30, unit: '°' },
      ],
      evaluate: ([dTh]) => {
        const rad = (dTh * Math.PI) / 180;
        const re = 2 + 2 * Math.cos(rad);
        const im = 2 * Math.sin(rad);
        const modSum = Math.hypot(re, im);
        return {
          headline: `|z₁+z₂| = ${f(modSum)} ≤ |z₁|+|z₂| = 4,00 (${dTh === 0 ? 'ÉGALITÉ !' : 'stricte'})`,
          metrics: [
            { label: '|z₁ + z₂|', value: `${f(modSum)}`, accent: 'emerald' },
            { label: 'Somme |z₁|+|z₂|', value: '4,00', accent: 'amber' },
            { label: 'État', value: dTh === 0 ? 'Colinéaires même sens' : 'Triangle ouvert', accent: 'sky' },
          ],
          conclusion: `L’inégalité triangulaire est saturée uniquement lorsque les affixes ont le même argument modulo 2π.`,
          svg: { re, im, r: modSum, deg: dTh / 2 },
        };
      },
    },
  ],

  // 3. COMPLEXES & GÉOMÉTRIE (10)
  'mathTc-complexes-geometrie': [
    {
      id: 'mc-cpg-1',
      shortTitle: 'Nature d’un triangle ABC',
      title: 'Exp. 1 : Quotient Z = (z_C - z_A)/(z_B - z_A) et nature de ABC',
      goal: 'Lire AC/AB = |Z| et l’angle orienté (AB⃗, AC⃗) = arg(Z) pour qualifier ABC.',
      formula: '|Z| = AC/AB  et  arg(Z) = (AB⃗, AC⃗) [2π]',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport k = AC/AB', min: 0.5, max: 2.0, step: 0.25, defaultValue: 1.0, unit: '' },
        { label: 'Angle (AB⃗,AC⃗)', min: 30, max: 120, step: 15, defaultValue: 60, unit: '°' },
      ],
      presets: [
        { label: 'Équilatéral (1 ; 60°)', values: [1, 60] },
        { label: 'Rectangle isocèle (1 ; 90°)', values: [1, 90] },
      ],
      evaluate: ([k, deg]) => {
        const nature = k === 1 && deg === 60 ? 'Équilatéral direct' : k === 1 && deg === 90 ? 'Rectangle isocèle en A' : deg === 90 ? 'Rectangle en A' : k === 1 ? 'Isocèle en A' : 'Quelconque';
        return {
          headline: `|Z| = ${f(k, 2)} · arg(Z) = ${deg}° ⟹ Triangle ${nature}`,
          metrics: [
            { label: 'Rapport AC/AB', value: `${f(k, 2)}`, accent: 'sky' },
            { label: 'Angle en A', value: `${deg}°`, accent: 'amber' },
            { label: 'Nature ABC', value: nature, accent: 'emerald' },
          ],
          conclusion: `Si Z = ±i, le triangle est rectangle isocèle ; si Z = e^(±iπ/3), il est équilatéral.`,
          svg: { k, angleDeg: deg, kind: 'tri' },
        };
      },
    },
    {
      id: 'mc-cpg-2',
      shortTitle: 'Alignement & orthogonalité',
      title: 'Exp. 2 : Test Z ∈ ℝ (alignement) vs Z ∈ iℝ* (orthogonalité)',
      goal: 'Utiliser l’argument de (z_C - z_A)/(z_B - z_A) pour prouver colinéarité ou perpendicularité.',
      formula: 'A, B, C alignés ⟺ Z ∈ ℝ  |  (AB) ⊥ (AC) ⟺ Z ∈ iℝ*',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Angle (AB⃗, AC⃗)', min: 0, max: 180, step: 15, defaultValue: 90, unit: '°' },
      ],
      evaluate: ([deg]) => {
        const status = deg === 0 || deg === 180 ? 'Points alignés (Z ∈ ℝ)' : deg === 90 ? 'Droites perpendiculaires (Z ∈ iℝ*)' : 'Angle quelconque';
        const rad = (deg * Math.PI) / 180;
        return {
          headline: `arg(Z) = ${deg}° ⟹ ${status}`,
          metrics: [
            { label: 'Diagnostic', value: status, accent: deg % 90 === 0 ? 'emerald' : 'amber' },
            { label: 'Partie réelle Z', value: `${f(Math.cos(rad))}`, accent: 'sky' },
            { label: 'Partie imag. Z', value: `${f(Math.sin(rad))}`, accent: 'rose' },
          ],
          conclusion: `Ce test remplace avantageusement les calculs de produits scalaires ou de déterminants en géométrie plane.`,
          svg: { re: 2 * Math.cos(rad), im: 2 * Math.sin(rad), r: 2, deg },
        };
      },
    },
    {
      id: 'mc-cpg-3',
      shortTitle: 'Cocyclicité de 4 points',
      title: 'Exp. 3 : Birapport [(z_C-z_A)/(z_B-z_A)] / [(z_C-z_D)/(z_B-z_D)] ∈ ℝ',
      goal: 'Vérifier si A, B, C, D appartiennent à un même cercle ou à une même droite.',
      formula: 'A, B, C, D cocycliques (ou alignés) ⟺ (z_C-z_A)(z_B-z_D) / [(z_B-z_A)(z_C-z_D)] ∈ ℝ*',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Écart angle inscrit', min: -30, max: 30, step: 5, defaultValue: 0, unit: '°' },
      ],
      evaluate: ([err]) => {
        const cocyclic = Math.abs(err) < 3;
        return {
          headline: cocyclic ? `Écart d’angle = 0° : Birapport ∈ ℝ ⟹ A, B, C, D cocycliques !` : `Écart = ${err}° : Birapport ∉ ℝ ⟹ non cocycliques`,
          metrics: [
            { label: 'Différence angles', value: `${err}°`, accent: 'amber' },
            { label: 'Statut', value: cocyclic ? 'Cocycliques ✓' : 'Non cocycliques', accent: cocyclic ? 'emerald' : 'rose' },
            { label: 'Propriété', value: '(CA⃗,CB⃗) ≡ (DA⃗,DB⃗) [π]', accent: 'sky' },
          ],
          conclusion: `L’égalité des angles orientés modulo π traduit exactement le fait que le birapport est réel.`,
          svg: { k: 1, angleDeg: 60 + err, kind: 'circle' },
        };
      },
    },
    {
      id: 'mc-cpg-4',
      shortTitle: 'Similitude directe z’ = az + b',
      title: 'Exp. 4 : Extraction du centre Ω, rapport k=|a| et angle θ=arg(a)',
      goal: 'Caractériser totalement une écriture complexe z’ = a z + b.',
      formula: 'Si a ≠ 1 : ω = b / (1 - a)  |  k = |a|  |  θ = arg(a) [2π]',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport k = |a|', min: 0.5, max: 2.5, step: 0.25, defaultValue: 1.5, unit: '' },
        { label: 'Angle θ = arg(a)', min: -180, max: 180, step: 30, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([k, th]) => {
        const nature = k === 1 && th === 0 ? 'Translation (a=1)' : k === 1 ? `Rotation d’angle ${th}°` : th === 0 ? `Homothétie (k=${k})` : `Similitude directe (k=${k}, ${th}°)`;
        return {
          headline: `${nature} · Centre invariant ω = b / (1 - a)`,
          metrics: [
            { label: 'Rapport k', value: `${f(k, 2)}`, accent: 'amber' },
            { label: 'Angle θ', value: `${th}°`, accent: 'sky' },
            { label: 'Rapport des aires', value: `k² = ${f(k * k, 2)}`, accent: 'emerald' },
          ],
          conclusion: `Si a = 1, il n’y a pas de point invariant (sauf b=0) : c’est la translation de vecteur d’affixe b.`,
          svg: { k, angleDeg: th, kind: 'sim' },
        };
      },
    },
    {
      id: 'mc-cpg-5',
      shortTitle: 'Similitude indirecte z’ = a z̄ + b',
      title: 'Exp. 5 : Axe de symétrie et rapport de z’ = a z̄ + b',
      goal: 'Distinguer réflexion (|a|=1, a b̄ + b = 0), symétrie glissée et similitude indirecte.',
      formula: 'z’ = a z̄ + b : rapport k = |a| ; invariant si |a| ≠ 1 ou a b̄ + b = 0',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport k = |a|', min: 0.5, max: 2.0, step: 0.5, defaultValue: 1.0, unit: '' },
        { label: 'Angle axe α', min: 0, max: 90, step: 15, defaultValue: 45, unit: '°' },
      ],
      evaluate: ([k, alpha]) => {
        const nature = k === 1 ? 'Antidéplacement (réflexion / sym. glissée)' : `Similitude indirecte de rapport ${k}`;
        return {
          headline: `${nature} · Axe dirigé à ${alpha}°`,
          metrics: [
            { label: 'Rapport k', value: `${f(k, 1)}`, accent: 'amber' },
            { label: 'Orientation angles', value: 'Inversée (-θ)', accent: 'rose' },
            { label: 'Nature', value: k === 1 ? 'Isométrie indirecte' : 'Similitude indirecte', accent: 'sky' },
          ],
          conclusion: `Toute similitude indirecte de rapport k ≠ 1 se décompose de façon unique en h(Ω, k) ◦ s_Δ.`,
          svg: { k, angleDeg: alpha, kind: 'reflect' },
        };
      },
    },
    {
      id: 'mc-cpg-6',
      shortTitle: 'Lieu |z - z_A| = R (Cercle)',
      title: 'Exp. 6 : Ensembles de points |z - z_A| = R et |z - z_A| = |z - z_B|',
      goal: 'Identifier cercle de centre A et médiatrice de [AB] via les modules.',
      formula: '|z - z_A| = R ⟺ M ∈ C(A, R)  |  |z - z_A| = |z - z_B| ⟺ M ∈ méd([AB])',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Rayon R (0 ⟹ Médiatrice)', min: 0, max: 4, step: 0.5, defaultValue: 2.5, unit: '' },
      ],
      evaluate: ([R]) => {
        const isLine = R === 0;
        return {
          headline: isLine ? `|z - z_A| = |z - z_B| : Médiatrice du segment [AB]` : `|z - z_A| = ${f(R, 1)} : Cercle de centre A et rayon ${f(R, 1)}`,
          metrics: [
            { label: 'Nature du lieu', value: isLine ? 'Droite (médiatrice)' : 'Cercle C(A, R)', accent: 'emerald' },
            { label: 'Paramétrage z', value: isLine ? 'x,y linéaires' : `z_A + ${f(R, 1)} e^(iθ)`, accent: 'sky' },
            { label: 'Périmètre / Long.', value: isLine ? '∞' : `${f(2 * Math.PI * R)}`, accent: 'amber' },
          ],
          conclusion: `Pour |az + b| = c, toujours factoriser par |a| pour revenir à |z - (-b/a)| = c/|a| !`,
          svg: { re: isLine ? 0 : R, im: 0, r: isLine ? 1.5 : R, deg: 0 },
        };
      },
    },
    {
      id: 'mc-cpg-7',
      shortTitle: 'Lieu arg((z-z_B)/(z-z_A))',
      title: 'Exp. 7 : Demi-droite, droite ou arc capable selon modulo π / 2π',
      goal: 'Ne plus confondre arg(Z) ≡ π/2 [2π] (demi-cercle) et ≡ π/2 [π] (cercle privé de A, B).',
      formula: 'arg((z-z_B)/(z-z_A)) ≡ π/2 [2π] ⟹ demi-cercle | ≡ π/2 [π] ⟹ cercle entier \\ {A,B}',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Angle cible α', min: 0, max: 180, step: 45, defaultValue: 90, unit: '°' },
        { label: 'Modulo (1=2π, 2=π)', min: 1, max: 2, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([alpha, mod]) => {
        const desc = alpha === 0
          ? (mod === 1 ? 'Droite (AB) hors [AB]' : 'Droite (AB) privée de A et B')
          : alpha === 180
          ? 'Segment ouvert ]AB['
          : mod === 1
          ? 'Demi-cercle (arc capable) privé de A,B'
          : 'Cercle de diamètre [AB] privé de A,B';
        return {
          headline: `arg(Z) ≡ ${alpha}° [${mod === 1 ? '2π' : 'π'}] ⟹ ${desc}`,
          metrics: [
            { label: 'Lieu géométrique', value: desc, accent: 'emerald' },
            { label: 'Points A et B', value: 'Toujours exclus !', accent: 'rose' },
            { label: 'Période modulo', value: mod === 1 ? '2π (sens imposé)' : 'π (2 sens)', accent: 'amber' },
          ],
          conclusion: `Attention : A et B ne sont jamais dans l’ensemble solution car z_A annule le dénominateur et arg(0) n’existe pas.`,
          svg: { re: Math.cos((alpha * Math.PI) / 180) * 2, im: Math.sin((alpha * Math.PI) / 180) * 2, r: 2, deg: alpha },
        };
      },
    },
    {
      id: 'mc-cpg-8',
      shortTitle: 'Homographie z’ = (az+b)/(cz+d)',
      title: 'Exp. 8 : Image d’une droite ou d’un cercle par transformation rationnelle',
      goal: 'Étudier z’ = f(z) et retrouver l’ensemble des points M(z) tels que z’ ∈ ℝ ou |z’|=1.',
      formula: 'z’ = (z - z_B)/(z - z_A)  :  z’ ∈ ℝ ⟺ M ∈ (AB)\\{A}',
      visualKind: 'argand-plane',
      sliders: [
        { label: 'Paramètre t de M', min: -3, max: 3, step: 0.5, defaultValue: 1.5, unit: '' },
      ],
      evaluate: ([t]) => {
        const r = Math.hypot(t, 1);
        const deg = (Math.atan2(1, t) * 180) / Math.PI;
        return {
          headline: `Pour z = ${f(t, 1)} + i : image |z’| = ${f(r)} · arg = ${f(deg, 1)}°`,
          metrics: [
            { label: '|z’|', value: `${f(r)}`, accent: 'amber' },
            { label: 'Point fixe (z’=z)', value: 'Résolution degré 2', accent: 'sky' },
            { label: 'Antécédent', value: 'z = (-dz’+b)/(cz’-a)', accent: 'emerald' },
          ],
          conclusion: `On résout |z’|=1 soit en passant à |z - z_B| = |z - z_A| (médiatrice !), soit en posant z = x + iy.`,
          svg: { re: t, im: 1, r, deg },
        };
      },
    },
    {
      id: 'mc-cpg-9',
      shortTitle: 'Parallélogramme, losange, carré',
      title: 'Exp. 9 : Caractérisation complexe des quadrilatères ABCD',
      goal: 'Tester z_B - z_A = z_C - z_D puis les conditions supplémentaires sur les diagonales.',
      formula: 'Parallélogramme : z_A + z_C = z_B + z_D  |  Carré : (z_C-z_A)/(z_D-z_B) = ±i',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport diag |AC|/|BD|', min: 0.5, max: 2.0, step: 0.5, defaultValue: 1.0, unit: '' },
        { label: 'Angle diagonales', min: 45, max: 90, step: 15, defaultValue: 90, unit: '°' },
      ],
      evaluate: ([rap, ang]) => {
        const quad = rap === 1 && ang === 90 ? 'Carré' : ang === 90 ? 'Losange' : rap === 1 ? 'Rectangle' : 'Parallélogramme';
        return {
          headline: `Diag. de même milieu : rapport ${f(rap, 1)}, angle ${ang}° ⟹ ${quad}`,
          metrics: [
            { label: 'Quadrilatère', value: quad, accent: 'emerald' },
            { label: 'Milieu commun', value: '(z_A+z_C)/2 = (z_B+z_D)/2', accent: 'sky' },
            { label: 'Quotient diag.', value: `${f(rap, 1)} e^(i${ang}°)`, accent: 'amber' },
          ],
          conclusion: `Diagonales égales ⇒ Rectangle ; perpendiculaires ⇒ Losange ; égales ET perpendiculaires ⇒ Carré.`,
          svg: { k: rap, angleDeg: ang, kind: 'tri' },
        };
      },
    },
    {
      id: 'mc-cpg-10',
      shortTitle: 'Composition de deux similitudes',
      title: 'Exp. 10 : Synthèse BAC C — Composée s₂ ◦ s₁',
      goal: 'Composer deux écritures complexes z₁ = a₁z + b₁ et z₂ = a₂z₁ + b₂.',
      formula: 's₂ ◦ s₁ : z ↦ (a₂a₁)z + (a₂b₁ + b₂)  (rapport k₁k₂, angle θ₁+θ₂)',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Angle θ₁ (s₁)', min: 15, max: 180, step: 15, defaultValue: 45, unit: '°' },
        { label: 'Angle θ₂ (s₂)', min: 15, max: 180, step: 15, defaultValue: 45, unit: '°' },
      ],
      evaluate: ([th1, th2]) => {
        const thSum = (th1 + th2) % 360;
        const isHom = thSum === 0 || thSum === 180;
        return {
          headline: `s₂ ◦ s₁ : rapport k₁k₂ = 2 · angle θ₁+θ₂ = ${thSum}° ${isHom ? '(Homothétie !)' : ''}`,
          metrics: [
            { label: 'Angle résultant', value: `${thSum}°`, accent: 'amber' },
            { label: 'Rapport résultant', value: 'k₁ · k₂', accent: 'sky' },
            { label: 'Si θ₁+θ₂ ≡ 0 [2π]', value: 'Homothétie / Trans.', accent: 'emerald' },
          ],
          conclusion: `En général s₂ ◦ s₁ ≠ s₁ ◦ s₂ (la composition n’est commutative que si les centres coïncident ou pour des translations).`,
          svg: { k: 1.5, angleDeg: thSum, kind: 'sim' },
        };
      },
    },
  ],
};
