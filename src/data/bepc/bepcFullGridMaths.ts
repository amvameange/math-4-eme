import { BepcArchivePaper, BepcCountryId } from '../../types/math';
import {
  ArchivePartSeed,
  BEPC_COUNTRY_CONTEXTS,
  buildArchivePapers,
  CountryContext,
} from './bepcArchiveHelpers';

const COUNTRY_ORDER: BepcCountryId[] = [
  'gabon',
  'france',
  'senegal',
  'cameroun',
  'benin',
  'togo',
];

function cleanNum(n: number): number {
  return Math.round(n * 10000) / 10000;
}

function fmtFr(n: number): string {
  const c = cleanNum(n);
  return String(c).replace('.', ',');
}

function fmtAns(n: number): string {
  return String(cleanNum(n));
}

function buildMathsPart1Numerique(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year + cIdx) % 6;
  const city = ctx.cities[(year + cIdx) % ctx.cities.length];
  const scale = 1 + ((year + cIdx * 2) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Racines carrées : A = p*sqrt(4*base) - sqrt(9*base) + q*sqrt(16*base)
      const base = [2, 3, 5, 7][scale - 1];
      const p = 2 + (cIdx % 2); // 2 ou 3
      const q = 1 + (year % 2); // 1 ou 2
      const val4 = 4 * base;
      const val9 = 9 * base;
      const val16 = 16 * base;
      const coef = 2 * p - 3 + 4 * q; // ex: 4 - 3 + 4 = 5 (exact entier)
      return {
        chapterId: 'math3-racines-carrees',
        partLabel: 'Exercice 1',
        title: 'Activités Numériques : Radicaux et expressions exactes',
        points: 5,
        difficulty: 2,
        prompt:
          `On donne les nombres réels suivants :\n` +
          `A = ${p}√${val4} − √${val9} + ${q}√${val16}\n` +
          `B = (${p}√${base} − 1)(${p}√${base} + 1)\n\n` +
          `1) Écris A sous la forme k√${base}, où k est un entier relatif. (2 pts)\n` +
          `2) Développe et montre que B est un entier naturel. (1,5 pt)\n` +
          `3) Rends rationnel le dénominateur de C = ${base * coef} ÷ √${base}, puis donne la valeur de l’entier k trouvé à la question 1. (1,5 pt)`,
        hint: `√${val4} = 2√${base} ; √${val9} = 3√${base} ; √${val16} = 4√${base}. Additionne les coefficients devant √${base}.`,
        correctAnswer: fmtAns(coef),
        explanationFinal: `A = ${coef}√${base} (donc k = ${coef}), B = ${p * p * base - 1}, et C = ${coef}√${base}.`,
        themeTags: ['Racines carrées', 'Identité remarquable', 'Rationnel'],
        steps: [
          {
            title: '1) Simplification de A (2 pts)',
            mathExpression: `A = ${p}×2√${base} − 3√${base} + ${q}×4√${base}\nA = (${2 * p} − 3 + ${4 * q})√${base} = ${coef}√${base}`,
            explanation: `Extraction des carrés parfaits 4, 9 et 16 ; donc k = ${coef}.`,
            subResult: `${coef}√${base}`,
          },
          {
            title: '2) Calcul de B (1,5 pt)',
            mathExpression: `B = (${p}√${base})² − 1² = ${p * p * base} − 1 = ${p * p * base - 1}`,
            explanation: 'Identité (a − b)(a + b) = a² − b².',
          },
          {
            title: '3) Rationalisation de C (1,5 pt)',
            mathExpression: `C = (${base * coef}√${base}) ÷ ${base} = ${coef}√${base}\nValeur de k = ${coef}`,
            explanation: 'On multiplie numérateur et dénominateur par √' + base + '.',
            subResult: `k = ${coef}`,
          },
        ],
      };
    }
    case 1: {
      // Calcul littéral : F = (2x + a)^2 - b^2 -> racines (b-a)/2 et (-b-a)/2
      // Choisissons a impair et b = a + 2*scale => (b - a)/2 = scale (solution positive entière!)
      const a = 1 + 2 * (cIdx % 3); // 1, 3, 5
      const b = a + 2 * scale; // b - a = 2*scale
      const xPos = scale;
      const bSq = b * b;
      return {
        chapterId: 'math3-calcul-litteral-equations',
        partLabel: 'Exercice 1',
        title: 'Activités Numériques : Développement, Factorisation & Équation',
        points: 5,
        difficulty: 2,
        prompt:
          `On considère l’expression littérale F = (2x + ${a})² − ${bSq}.\n\n` +
          `1) Développe, réduis et ordonne F suivant les puissances décroissantes de x. (1,5 pt)\n` +
          `2) Factorise F en un produit de deux facteurs du premier degré. (1,5 pt)\n` +
          `3) Résous dans ℝ l’équation F = 0 et donne sa solution POSITIVE. (2 pts)`,
        hint: `F = (2x + ${a})² − ${b}² = (2x + ${a} − ${b})(2x + ${a} + ${b}) = (2x − ${2 * scale})(2x + ${a + b}).`,
        correctAnswer: fmtAns(xPos),
        explanationFinal: `F = 4x² + ${4 * a}x + ${a * a - bSq} = (2x − ${2 * scale})(2x + ${a + b}) ; solution positive x = ${xPos}.`,
        themeTags: ['Factorisation', 'Identité a²−b²', 'Équation-produit'],
        steps: [
          {
            title: '1) Développement de F (1,5 pt)',
            mathExpression: `F = (4x² + ${4 * a}x + ${a * a}) − ${bSq} = 4x² + ${4 * a}x ${a * a - bSq >= 0 ? '+' : '−'} ${Math.abs(a * a - bSq)}`,
            explanation: 'Utilisation de (u + v)² = u² + 2uv + v².',
          },
          {
            title: '2) Factorisation (1,5 pt)',
            mathExpression: `F = (2x + ${a} − ${b})(2x + ${a} + ${b}) = (2x − ${2 * scale})(2x + ${a + b})`,
            explanation: 'Utilisation de u² − v² = (u − v)(u + v).',
          },
          {
            title: '3) Résolution de F = 0 (2 pts)',
            mathExpression: `2x − ${2 * scale} = 0 ⇒ x = ${xPos}\nou 2x + ${a + b} = 0 ⇒ x = −${fmtFr((a + b) / 2)}`,
            explanation: `La solution positive est x = ${xPos}.`,
            subResult: `${xPos}`,
          },
        ],
      };
    }
    case 2: {
      // Système d'équations en monnaie locale
      const prixCahier = ctx.id === 'france' ? 2 + scale : 150 + 50 * scale;
      const prixStylo = ctx.id === 'france' ? 1 : 100;
      const c1 = 3;
      const s1 = 2;
      const t1 = c1 * prixCahier + s1 * prixStylo;
      const c2 = 2;
      const s2 = 5;
      const t2 = c2 * prixCahier + s2 * prixStylo;
      return {
        chapterId: 'math3-systemes-equations',
        partLabel: 'Exercice 1',
        title: `Activités Numériques : Système d’équations à ${city}`,
        points: 5,
        difficulty: 2,
        prompt:
          `À la rentrée scolaire à ${city} :\n` +
          `• Aminata achète ${c1} cahiers et ${s1} stylos pour ${t1} ${ctx.currency}.\n` +
          `• Moussa achète ${c2} cahiers et ${s2} stylos aux mêmes prix pour ${t2} ${ctx.currency}.\n\n` +
          `1) Traduis cette situation par un système de deux équations à deux inconnues x (prix d’un cahier) et y (prix d’un stylo). (1,5 pt)\n` +
          `2) Résous le système par combinaison linéaire ou substitution. (2,5 pts)\n` +
          `3) Indique le prix d’un cahier (en ${ctx.currency}). (1 pt)`,
        hint: `Multiplie (1) par 5 et (2) par 2 pour éliminer y : 15x + 10y = ${5 * t1} et 4x + 10y = ${2 * t2} ⇒ 11x = ${5 * t1 - 2 * t2}.`,
        correctAnswer: fmtAns(prixCahier),
        unit: ctx.currency,
        explanationFinal: `Un cahier coûte ${prixCahier} ${ctx.currency} et un stylo coûte ${prixStylo} ${ctx.currency}.`,
        themeTags: ['Système 2×2', 'Mise en équation', ctx.currency],
        steps: [
          {
            title: '1) Mise en système (1,5 pt)',
            mathExpression: `(1) ${c1}x + ${s1}y = ${t1}\n(2) ${c2}x + ${s2}y = ${t2}`,
            explanation: 'x = prix du cahier, y = prix du stylo.',
          },
          {
            title: '2) Élimination de y (2,5 pts)',
            mathExpression: `5×(1) − 2×(2) ⇒ (15 − 4)x = ${5 * t1} − ${2 * t2}\n11x = ${11 * prixCahier} ⇒ x = ${prixCahier}\ny = (${t1} − ${c1}×${prixCahier}) ÷ ${s1} = ${prixStylo}`,
            explanation: `Vérification : ${c2}×${prixCahier} + ${s2}×${prixStylo} = ${t2}.`,
          },
          {
            title: '3) Prix d’un cahier (1 pt)',
            mathExpression: `Prix du cahier = ${prixCahier} ${ctx.currency}`,
            explanation: 'Réponse attendue.',
            subResult: `${prixCahier} ${ctx.currency}`,
          },
        ],
      };
    }
    case 3: {
      // Inéquations et représentation sur droite graduée :
      // 3x - a <= x + b => 2x <= a + b => plus grand entier x <= (a+b)/2
      const maxInt = 2 + scale; // 3, 4, 5, 6
      const a = 3 + (cIdx % 3); // 3, 4, 5
      const b = 2 * maxInt - a; // a + b = 2 * maxInt
      return {
        chapterId: 'math3-inequations-intervalles',
        partLabel: 'Exercice 1',
        title: 'Activités Numériques : Inéquations & Intervalles dans ℝ',
        points: 5,
        difficulty: 2,
        prompt:
          `On considère l’inéquation (I) : 3x − ${a} ≤ x ${b >= 0 ? '+' : '−'} ${Math.abs(b)} et les intervalles J = ]−∞ ; ${maxInt}] et K = ]1 ; 8].\n\n` +
          `1) Résous l’inéquation (I) dans ℝ et écris l’ensemble solution sous forme d’intervalle. (2 pts)\n` +
          `2) Détermine l’intersection J ∩ K et la réunion J ∪ K. (1,5 pt)\n` +
          `3) Quel est le plus grand nombre ENTIER solution de l’inéquation (I) ? (1,5 pt)`,
        hint: `3x − x ≤ ${a} + (${b}) ➔ 2x ≤ ${2 * maxInt} ➔ x ≤ ${maxInt}.`,
        correctAnswer: fmtAns(maxInt),
        explanationFinal: `S = ]−∞ ; ${maxInt}], J ∩ K = ]1 ; ${maxInt}], J ∪ K = ]−∞ ; 8] ; plus grand entier : ${maxInt}.`,
        themeTags: ['Inéquations', 'Intervalles', 'Intersection'],
        steps: [
          {
            title: '1) Résolution de (I) (2 pts)',
            mathExpression: `3x − x ≤ ${a + b} ⇒ 2x ≤ ${2 * maxInt} ⇒ x ≤ ${maxInt}\nS = ]−∞ ; ${maxInt}]`,
            explanation: 'Division par 2 (> 0), le sens ne change pas.',
          },
          {
            title: '2) Intersection et réunion (1,5 pt)',
            mathExpression: `J ∩ K = ]1 ; ${maxInt}]\nJ ∪ K = ]−∞ ; 8]`,
            explanation: 'Lecture sur la droite graduée.',
          },
          {
            title: '3) Plus grand entier solution (1,5 pt)',
            mathExpression: `x ≤ ${maxInt} et ${maxInt} est inclus ⇒ plus grand entier = ${maxInt}`,
            explanation: 'Crochet fermé en ' + maxInt + '.',
            subResult: `${maxInt}`,
          },
        ],
      };
    }
    case 4: {
      // Puissances et écriture scientifique + fractions
      const num = 6 * scale; // 6, 12, 18, 24
      const val = cleanNum((num * 5) / 10); // 3 * scale = 3, 6, 9, 12
      return {
        chapterId: 'math3-racines-carrees',
        partLabel: 'Exercice 1',
        title: 'Activités Numériques : Fractions et puissances de 10',
        points: 5,
        difficulty: 1,
        prompt:
          `On donne les nombres A et B :\n` +
          `A = (${num} × 10⁴ × 2,5 × 10⁻²) ÷ (5 × 10¹)\n` +
          `B = (3/4 − 1/2) ÷ (1/8)\n\n` +
          `1) Calcule A et donne son écriture scientifique puis sa valeur décimale. (2,5 pts)\n` +
          `2) Calcule B en détaillant les étapes. (1,5 pt)\n` +
          `3) Calcule la somme A + B (nombre entier). (1 pt)`,
        hint: `A = (${num} × 2,5 ÷ 5) × 10^(4−2−1) = ${num / 2} × 10¹ = ${num * 5}. B = (1/4) ÷ (1/8) = 2.`,
        correctAnswer: fmtAns(num * 5 + 2),
        explanationFinal: `A = ${num * 5}, B = 2, donc A + B = ${num * 5 + 2}.`,
        themeTags: ['Puissances de 10', 'Écriture scientifique', 'Fractions'],
        steps: [
          {
            title: '1) Calcul de A (2,5 pts)',
            mathExpression: `A = (${num} × 2,5 ÷ 5) × 10^(4 − 2 − 1) = ${fmtFr(val)} × 10¹ = ${num * 5}`,
            explanation: `Écriture scientifique : ${fmtFr(val / 10)} × 10² ou ${fmtFr(val)} × 10¹.`,
          },
          {
            title: '2) Calcul de B (1,5 pt)',
            mathExpression: 'B = (3/4 − 2/4) × 8/1 = (1/4) × 8 = 2',
            explanation: 'Diviser par 1/8 revient à multiplier par 8.',
          },
          {
            title: '3) Somme A + B (1 pt)',
            mathExpression: `A + B = ${num * 5} + 2 = ${num * 5 + 2}`,
            explanation: 'Résultat final entier.',
            subResult: `${num * 5 + 2}`,
          },
        ],
      };
    }
    default: {
      // Encadrement d'un radical & valeur absolue |a - b*sqrt(2)|
      const m = 2 * scale; // 2, 4, 6, 8
      // Compare m et k*sqrt(3) : par ex. (m + √3)² - (m - √3)² = 4*m*√3, ou valeur exacte de √(m² + 2m + 1)
      // Faisons : P = (√7 + scale)(√7 - scale) + 2*scale² -> 7 - scale² + 2*scale² = 7 + scale² (exact!)
      const ans = 7 + scale * scale;
      return {
        chapterId: 'math3-calcul-litteral-equations',
        partLabel: 'Exercice 1',
        title: 'Activités Numériques : Identités remarquables & radicaux',
        points: 5,
        difficulty: 2,
        prompt:
          `On donne : X = (√7 + ${scale})(√7 − ${scale}) + 2 × ${scale}²\n` +
          `et l’encadrement 2,64 < √7 < 2,65.\n\n` +
          `1) Donne un encadrement à 10⁻² près de √7 + ${scale}. (1,5 pt)\n` +
          `2) Développe et simplifie l’expression exacte de X. (2,5 pts)\n` +
          `3) Indique la valeur entière de X. (1 pt)`,
        hint: `(√7 + ${scale})(√7 − ${scale}) = 7 − ${scale}² ; ajoute 2×${scale}² = ${2 * scale * scale}.`,
        correctAnswer: fmtAns(ans),
        explanationFinal: `2,${64} + ${scale} < √7 + ${scale} < 2,${65} + ${scale} ; et X = 7 + ${scale * scale} = ${ans}.`,
        themeTags: ['Encadrement', 'Radicaux', 'Identités'],
        steps: [
          {
            title: '1) Encadrement (1,5 pt)',
            mathExpression: `${fmtFr(2.64 + scale)} < √7 + ${scale} < ${fmtFr(2.65 + scale)}`,
            explanation: `On ajoute ${scale} aux trois membres.`,
          },
          {
            title: '2) & 3) Valeur exacte de X (3,5 pts)',
            mathExpression: `X = (7 − ${scale * scale}) + ${2 * scale * scale} = 7 + ${scale * scale} = ${ans}`,
            explanation: 'Identité (a+b)(a−b) = a² − b².',
            subResult: `${ans}`,
          },
        ],
      };
    }
  }
}

function buildMathsPart2FonctionsStats(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year * 2 + cIdx) % 6;
  const city = ctx.cities[(year + cIdx + 1) % ctx.cities.length];
  const scale = 1 + ((year + cIdx) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Application affine f(x) = a*x + b
      const a = 2 + (cIdx % 3); // 2, 3, 4
      const b = -scale; // -1, -2, -3, -4
      const x1 = 1;
      const y1 = a * x1 + b;
      const x2 = 4;
      const y2 = a * x2 + b;
      const xTarget = 6;
      const yTarget = a * xTarget + b;
      return {
        chapterId: 'math3-applications-affines',
        partLabel: 'Exercice 2',
        title: 'Fonctions Affines : détermination & représentation',
        points: 4,
        difficulty: 2,
        prompt:
          `Soit f une application affine telle que f(${x1}) = ${y1} et f(${x2}) = ${y2}.\n\n` +
          `1) Détermine le coefficient directeur a puis l’ordonnée à l’origine b de f(x) = ax + b. (2 pts)\n` +
          `2) La fonction f est-elle croissante ou décroissante ? Justifie. (1 pt)\n` +
          `3) Calcule l’image f(${xTarget}). (1 pt)`,
        hint: `a = (f(${x2}) − f(${x1})) ÷ (${x2} − ${x1}) = (${y2} − ${y1}) ÷ 3 = ${a}. Puis b = ${y1} − ${a}×${x1} = ${b}.`,
        correctAnswer: fmtAns(yTarget),
        explanationFinal: `f(x) = ${a}x − ${Math.abs(b)} (croissante car a = ${a} > 0) et f(${xTarget}) = ${yTarget}.`,
        themeTags: ['Application affine', 'Coefficient directeur', 'Image'],
        steps: [
          {
            title: '1) Détermination de a et b (2 pts)',
            mathExpression: `a = (${y2} − (${y1})) ÷ (${x2} − ${x1}) = ${y2 - y1} ÷ 3 = ${a}\nb = ${y1} − ${a}×${x1} = ${b}\nf(x) = ${a}x − ${Math.abs(b)}`,
            explanation: 'Formule du taux de variation.',
          },
          {
            title: '2) Sens de variation (1 pt)',
            mathExpression: `a = ${a} > 0 ⇒ f est strictement croissante.`,
            explanation: 'Signe de a.',
          },
          {
            title: '3) Image de 6 (1 pt)',
            mathExpression: `f(${xTarget}) = ${a}×${xTarget} − ${Math.abs(b)} = ${yTarget}`,
            explanation: 'Calcul direct.',
            subResult: `${yTarget}`,
          },
        ],
      };
    }
    case 1: {
      // Statistiques par classes : [0;5[, [5;10[, [10;15[, [15;20[
      // Centres : 2.5, 7.5, 12.5, 17.5 -> total N = 20*scale
      const n1 = 2 * scale;
      const n2 = 4 * scale;
      const n3 = 10 * scale;
      const n4 = 4 * scale;
      const total = 20 * scale;
      // Somme = 2.5*2 + 7.5*4 + 12.5*10 + 17.5*4 = (5 + 30 + 125 + 70)*scale = 230*scale -> moyenne = 230/20 = 11.5 exact!
      const mean = 11.5;
      return {
        chapterId: 'math3-statistiques-3eme',
        partLabel: 'Exercice 2',
        title: `Statistiques : notes de devoir au collège de ${city}`,
        points: 4,
        difficulty: 2,
        prompt:
          `Les notes obtenues par ${total} élèves de 3ème à ${city} sont regroupées ci-dessous :\n` +
          `• [0 ; 5[ : ${n1} élèves\n` +
          `• [5 ; 10[ : ${n2} élèves\n` +
          `• [10 ; 15[ : ${n3} élèves\n` +
          `• [15 ; 20[ : ${n4} élèves\n\n` +
          `1) Quelle est la classe modale et quel pourcentage d’élèves a obtenu au moins 10/20 ? (1,5 pt)\n` +
          `2) Calcule la moyenne de la classe à l’aide des centres de classes (en nombre décimal exact). (2,5 pts)`,
        hint: `Centres : 2,5 ; 7,5 ; 12,5 ; 17,5. Moyenne = (2,5×${n1} + 7,5×${n2} + 12,5×${n3} + 17,5×${n4}) ÷ ${total}.`,
        correctAnswer: fmtAns(mean),
        unit: '/20',
        explanationFinal: `Classe modale [10 ; 15[ (${Math.round(((n3 + n4) * 100) / total)} % ≥ 10) et moyenne exacte = 11,5 / 20.`,
        themeTags: ['Statistiques', 'Classes', 'Moyenne'],
        steps: [
          {
            title: '1) Classe modale et pourcentage ≥ 10 (1,5 pt)',
            mathExpression: `Classe modale : [10 ; 15[ (${n3} élèves)\nÉlèves ≥ 10 : ${n3 + n4} / ${total} = 70 %`,
            explanation: 'Effectif maximal et cumul des 2 dernières classes.',
          },
          {
            title: '2) Moyenne par centres de classes (2,5 pts)',
            mathExpression: `M = (2,5×${n1} + 7,5×${n2} + 12,5×${n3} + 17,5×${n4}) ÷ ${total}\nM = ${230 * scale} ÷ ${total} = 11,5`,
            explanation: 'Moyenne pondérée exacte.',
            subResult: '11,5',
          },
        ],
      };
    }
    case 2: {
      // Probabilités : urne avec boules vertes, jaunes, bleues (total = 20)
      const v = 4 + scale; // 5..8
      const j = 6;
      const bl = 20 - v - j;
      const pNonJaune = cleanNum((v + bl) / 20);
      return {
        chapterId: 'math3-probabilites-3eme',
        partLabel: 'Exercice 2',
        title: 'Probabilités : tirage aléatoire dans une urne',
        points: 4,
        difficulty: 2,
        prompt:
          `Une urne opaque contient 20 boules indiscernables au toucher : ${v} vertes, ${j} jaunes et ${bl} bleues.\n` +
          `On tire une boule au hasard.\n\n` +
          `1) Calcule la probabilité p(V) d’obtenir une boule verte. (1 pt)\n` +
          `2) Calcule la probabilité p(J) d’obtenir une boule jaune. (1 pt)\n` +
          `3) Calcule la probabilité p(non J) de NE PAS obtenir une boule jaune (sous forme décimale exacte). (2 pts)`,
        hint: `p(J) = ${j} ÷ 20 = 0,3 ; p(non J) = 1 − p(J) = (${v + bl}) ÷ 20 = 0,7.`,
        correctAnswer: fmtAns(pNonJaune),
        explanationFinal: `p(V) = ${fmtFr(v / 20)}, p(J) = 0,3 et p(non J) = 0,7.`,
        themeTags: ['Probabilités', 'Événement contraire', 'Équiprobabilité'],
        steps: [
          {
            title: '1) & 2) Probabilités simples (2 pts)',
            mathExpression: `p(V) = ${v} ÷ 20 = ${fmtFr(v / 20)}\np(J) = ${j} ÷ 20 = 0,3`,
            explanation: 'Nombre de cas favorables sur 20.',
          },
          {
            title: '3) Événement contraire (2 pts)',
            mathExpression: `p(non J) = 1 − 0,3 = 0,7`,
            explanation: 'Équivalent à (${v} + ${bl}) ÷ 20.',
            subResult: '0,7',
          },
        ],
      };
    }
    case 3: {
      // Comparaison de 2 tarifs par fonctions affines (seuil d'égalité)
      const fixeB = ctx.id === 'france' ? 12 * scale : 2000 * scale;
      const unitA = ctx.id === 'france' ? 6 : 1000;
      const unitB = ctx.id === 'france' ? 4 : 750;
      // Tarifs égaux quand unitA*x = fixeB + unitB*x => (unitA - unitB)*x = fixeB
      // France : (6 - 4)*x = 12*scale => x = 6*scale
      // CFA : (1000 - 750)*x = 2000*scale => 250*x = 2000*scale => x = 8*scale
      const xEq = ctx.id === 'france' ? 6 * scale : 8 * scale;
      return {
        chapterId: 'math3-applications-affines',
        partLabel: 'Exercice 2',
        title: `Comparaison de deux tarifs de transport à ${city}`,
        points: 4,
        difficulty: 3,
        prompt:
          `Une compagnie de transport à ${city} propose pour x trajets par mois :\n` +
          `• Tarif A (sans carte) : ${unitA} ${ctx.currency} par trajet ➔ f(x) = ${unitA}x.\n` +
          `• Tarif B (avec carte) : abonnement de ${fixeB} ${ctx.currency} puis ${unitB} ${ctx.currency} par trajet ➔ g(x) = ${unitB}x + ${fixeB}.\n\n` +
          `1) Quelle est la nature de f et celle de g ? (1 pt)\n` +
          `2) Calcule le coût pour 10 trajets avec chaque tarif. (1 pt)\n` +
          `3) Pour quel nombre de trajets x les deux tarifs coûtent-ils exactement le même prix ? (2 pts)`,
        hint: `Résous ${unitA}x = ${unitB}x + ${fixeB} ➔ ${unitA - unitB}x = ${fixeB}.`,
        correctAnswer: fmtAns(xEq),
        unit: 'trajets',
        explanationFinal: `f est linéaire, g est affine ; les deux tarifs sont égaux pour x = ${xEq} trajets.`,
        themeTags: ['Tarifs', 'Linéaire vs Affine', 'Équation'],
        steps: [
          {
            title: '1) Nature des fonctions (1 pt)',
            mathExpression: 'f est linéaire ; g est affine.',
            explanation: 'Proportionnalité pour f, fixe + variable pour g.',
          },
          {
            title: '2) Comparaison pour 10 trajets (1 pt)',
            mathExpression: `f(10) = ${unitA * 10} ${ctx.currency} ; g(10) = ${unitB * 10 + fixeB} ${ctx.currency}`,
            explanation: 'Substitution x = 10.',
          },
          {
            title: '3) Seuil d’égalité f(x) = g(x) (2 pts)',
            mathExpression: `${unitA}x = ${unitB}x + ${fixeB} ⇒ ${unitA - unitB}x = ${fixeB} ⇒ x = ${xEq}`,
            explanation: 'Nombre de trajets d’équilibre.',
            subResult: `${xEq} trajets`,
          },
        ],
      };
    }
    case 4: {
      // Pourcentage / soldes + coefficient multiplicateur linéaire
      const prixInit = ctx.id === 'france' ? 50 * scale : 10000 * scale;
      const taux = 20; // % réduction
      const prixSolde = prixInit * 0.8;
      return {
        chapterId: 'math3-applications-affines',
        partLabel: 'Exercice 2',
        title: `Soldes & application linéaire : remise de ${taux} %`,
        points: 4,
        difficulty: 1,
        prompt:
          `Dans un magasin à ${city}, tous les articles bénéficient d’une remise de ${taux} %.\n\n` +
          `1) Exprime le prix soldé p(x) en fonction du prix initial x. (1,5 pt)\n` +
          `2) Un sac affiché à ${prixInit} ${ctx.currency} passe en caisse. Calcule son nouveau prix soldé (en ${ctx.currency}). (1,5 pt)\n` +
          `3) Si un article est affiché soldé à ${80 * (ctx.id === 'france' ? 1 : 100)} ${ctx.currency}, quel était son prix initial ? (1 pt)`,
        hint: `Coefficient multiplicateur = 1 − 0,20 = 0,80 ; donc p(${prixInit}) = 0,8 × ${prixInit}.`,
        correctAnswer: fmtAns(prixSolde),
        unit: ctx.currency,
        explanationFinal: `p(x) = 0,8x ; prix soldé du sac = ${prixSolde} ${ctx.currency}.`,
        themeTags: ['Pourcentage', 'Application linéaire', 'Remise'],
        steps: [
          {
            title: '1) Expression linéaire (1,5 pt)',
            mathExpression: `p(x) = (1 − ${taux}/100)x = 0,8x`,
            explanation: 'Réduire de 20 % revient à multiplier par 0,8.',
          },
          {
            title: '2) Prix soldé du sac (1,5 pt)',
            mathExpression: `p(${prixInit}) = 0,8 × ${prixInit} = ${prixSolde} ${ctx.currency}`,
            explanation: 'Application directe.',
            subResult: `${prixSolde} ${ctx.currency}`,
          },
          {
            title: '3) Antécédent (1 pt)',
            mathExpression: `x = ${80 * (ctx.id === 'france' ? 1 : 100)} ÷ 0,8 = ${100 * (ctx.id === 'france' ? 1 : 100)} ${ctx.currency}`,
            explanation: 'On divise par 0,8.',
          },
        ],
      };
    }
    default: {
      // Statistiques série discrète (notes / effectifs) -> médiane exacte
      const e1 = 3;
      const e2 = 5;
      const e3 = 7;
      const e4 = 4;
      const e5 = 2; // total = 21 élèves (impair -> 11e valeur = exactement dans le 3e groupe!)
      const valMed = 10 + scale; // 11, 12, 13, 14
      return {
        chapterId: 'math3-statistiques-3eme',
        partLabel: 'Exercice 2',
        title: 'Statistiques : effectifs cumulés & médiane',
        points: 4,
        difficulty: 2,
        prompt:
          `On relève les âges (ou notes) de 21 candidats :\n` +
          `• Valeur ${valMed - 2} : ${e1} élèves\n` +
          `• Valeur ${valMed - 1} : ${e2} élèves\n` +
          `• Valeur ${valMed} : ${e3} élèves\n` +
          `• Valeur ${valMed + 1} : ${e4} élèves\n` +
          `• Valeur ${valMed + 2} : ${e5} élèves\n\n` +
          `1) Calcule l’étendue de cette série et complète les effectifs cumulés croissants (ECC). (1,5 pt)\n` +
          `2) Quel est le mode de la série ? (0,5 pt)\n` +
          `3) Détermine la valeur MÉDIANE exacte de la série. (2 pts)`,
        hint: `Effectif total N = 21 ➔ la médiane est la (21 + 1) ÷ 2 = 11ᵉ valeur. ECC : 3, 8, 15, 19, 21.`,
        correctAnswer: fmtAns(valMed),
        explanationFinal: `Étendue = 4, Mode = ${valMed}, et la 11ᵉ valeur (médiane) est ${valMed}.`,
        themeTags: ['Médiane', 'ECC', 'Étendue'],
        steps: [
          {
            title: '1) Étendue et ECC (1,5 pt)',
            mathExpression: `Étendue = ${valMed + 2} − ${valMed - 2} = 4\nECC : 3 ; 8 ; 15 ; 19 ; 21`,
            explanation: 'Maximum − Minimum.',
          },
          {
            title: '2) Mode (0,5 pt)',
            mathExpression: `Mode = ${valMed} (effectif maximal 7)`,
            explanation: 'Valeur la plus fréquente.',
          },
          {
            title: '3) Médiane (2 pts)',
            mathExpression: `N = 21 ⇒ rang = (21 + 1) ÷ 2 = 11ᵉ valeur\nComme 8 < 11 ≤ 15, la médiane est ${valMed}.`,
            explanation: 'Lecture dans les ECC.',
            subResult: `${valMed}`,
          },
        ],
      };
    }
  }
}

function buildMathsPart3Geometrie(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year + cIdx * 3) % 6;
  const city = ctx.cities[(year + cIdx + 2) % ctx.cities.length];
  const scale = 1 + ((year + cIdx) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Thalès papillon ou triangle : AM = 2*scale, AB = 5*scale, AC = 10*scale, BC = 15*scale => AN = 4*scale, MN = 6*scale
      const am = 2 * scale;
      const ab = 5 * scale;
      const ac = 10 * scale;
      const bc = 15 * scale;
      const an = 4 * scale;
      const mn = 6 * scale;
      return {
        chapterId: 'math3-thales-3eme',
        partLabel: 'Exercice 3',
        title: 'Activités Géométriques : Théorème de Thalès & Réciproque',
        points: 5,
        difficulty: 2,
        prompt:
          `Soit ABC un triangle tel que AB = ${ab} cm, AC = ${ac} cm et BC = ${bc} cm.\n` +
          `On place M ∈ [AB] tel que AM = ${am} cm et N ∈ [AC] tel que (MN) // (BC).\n\n` +
          `1) Énonce les rapports égaux donnés par le théorème de Thalès. (1,5 pt)\n` +
          `2) Calcule AN en cm. (1,5 pt)\n` +
          `3) Calcule la longueur MN en cm. (2 pts)`,
        hint: `AM / AB = ${am} / ${ab} = 2/5 = 0,4. Donc AN = 0,4 × ${ac} et MN = 0,4 × ${bc}.`,
        correctAnswer: fmtAns(mn),
        unit: 'cm',
        explanationFinal: `AN = ${an} cm et MN = ${mn} cm.`,
        themeTags: ['Thalès', 'Rapports égaux', 'Parallèles'],
        steps: [
          {
            title: '1) Rapports de Thalès (1,5 pt)',
            mathExpression: 'AM / AB = AN / AC = MN / BC',
            explanation: 'Triangles AMN et ABC en situation de Thalès.',
          },
          {
            title: '2) Calcul de AN (1,5 pt)',
            mathExpression: `AN = (${am} × ${ac}) ÷ ${ab} = ${an} cm`,
            explanation: 'Produit en croix.',
          },
          {
            title: '3) Calcul de MN (2 pts)',
            mathExpression: `MN = (${am} × ${bc}) ÷ ${ab} = ${mn} cm`,
            explanation: 'Rapport 2/5.',
            subResult: `${mn} cm`,
          },
        ],
      };
    }
    case 1: {
      // Pythagore & trigonométrie (triplet 3k - 4k - 5k)
      const a = 3 * scale;
      const b = 4 * scale;
      const c = 5 * scale;
      const cosB = 0.6; // a / c = 3/5 = 0.6
      void cosB;
      return {
        chapterId: 'math3-trigonometrie-3eme',
        partLabel: 'Exercice 3',
        title: 'Activités Géométriques : Pythagore & Trigonométrie',
        points: 5,
        difficulty: 2,
        prompt:
          `Soit EFG un triangle tel que EF = ${a} cm, EG = ${b} cm et FG = ${c} cm.\n\n` +
          `1) Démontre que le triangle EFG est rectangle et précise en quel sommet. (2 pts)\n` +
          `2) Calcule les valeurs exactes (sous forme décimale) de cos(F̂) et sin(F̂). (1,5 pt)\n` +
          `3) Calcule la valeur décimale exacte de sin(Ĝ) (dans EFG rectangle en E). (1,5 pt)`,
        hint: `EF² + EG² = ${a * a} + ${b * b} = ${c * c} = FG². Dans EFG rectangle en E, sin(Ĝ) = EF ÷ FG = ${a} ÷ ${c} = 0,6.`,
        correctAnswer: '0.6',
        explanationFinal: `EFG est rectangle en E ; cos(F̂) = 0,6, sin(F̂) = 0,8 et sin(Ĝ) = 0,6.`,
        themeTags: ['Pythagore', 'Trigonométrie', 'Cosinus & Sinus'],
        steps: [
          {
            title: '1) Réciproque de Pythagore (2 pts)',
            mathExpression: `FG² = ${c}² = ${c * c}\nEF² + EG² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c}\nFG² = EF² + EG² ⇒ rectangle en E.`,
            explanation: 'Le plus grand côté [FG] est l’hypoténuse.',
          },
          {
            title: '2) Cosinus et sinus de F̂ (1,5 pt)',
            mathExpression: `cos(F̂) = EF ÷ FG = ${a} ÷ ${c} = 0,6\nsin(F̂) = EG ÷ FG = ${b} ÷ ${c} = 0,8`,
            explanation: 'Vérification : 0,6² + 0,8² = 1.',
          },
          {
            title: '3) Sinus de Ĝ (1,5 pt)',
            mathExpression: `sin(Ĝ) = EF ÷ FG = ${a} ÷ ${c} = 0,6`,
            explanation: 'Côté opposé sur hypoténuse.',
            subResult: '0,6',
          },
        ],
      };
    }
    case 2: {
      // Vecteurs et coordonnées : A(1; 2), B(1 + 3*scale; 2 + 4*scale) => ||AB|| = 5*scale
      const xA = 1;
      const yA = 2;
      const dx = 3 * scale;
      const dy = 4 * scale;
      const xB = xA + dx;
      const yB = yA + dy;
      const distAB = 5 * scale;
      return {
        chapterId: 'math3-vecteurs-translations',
        partLabel: 'Exercice 3',
        title: 'Activités Géométriques : Vecteurs & Distance dans un repère',
        points: 5,
        difficulty: 2,
        prompt:
          `Dans un repère orthonormé (O, I, J) (unité : 1 cm), on donne A(${xA} ; ${yA}), B(${xB} ; ${yB}) et C(−2 ; 6).\n\n` +
          `1) Calcule les coordonnées du vecteur AB⃗. (1,5 pt)\n` +
          `2) Calcule les coordonnées du milieu K de [AB]. (1,5 pt)\n` +
          `3) Calcule la distance exacte AB en cm. (2 pts)`,
        hint: `AB⃗(${xB}−${xA} ; ${yB}−${yA}) = (${dx} ; ${dy}) ; AB = √(${dx}² + ${dy}²) = ${distAB}.`,
        correctAnswer: fmtAns(distAB),
        unit: 'cm',
        explanationFinal: `AB⃗(${dx} ; ${dy}), K(${fmtFr((xA + xB) / 2)} ; ${fmtFr((yA + yB) / 2)}) et AB = ${distAB} cm.`,
        themeTags: ['Vecteurs', 'Coordonnées', 'Distance'],
        steps: [
          {
            title: '1) Vecteur AB⃗ (1,5 pt)',
            mathExpression: `AB⃗(${xB} − ${xA} ; ${yB} − ${yA}) = (${dx} ; ${dy})`,
            explanation: 'x_B − x_A ; y_B − y_A.',
          },
          {
            title: '2) Milieu K de [AB] (1,5 pt)',
            mathExpression: `K((${xA}+${xB})/2 ; (${yA}+${yB})/2) = (${fmtFr((xA + xB) / 2)} ; ${fmtFr((yA + yB) / 2)})`,
            explanation: 'Demi-somme des coordonnées.',
          },
          {
            title: '3) Norme AB (2 pts)',
            mathExpression: `AB = √(${dx}² + ${dy}²) = √(${dx * dx + dy * dy}) = ${distAB} cm`,
            explanation: 'Distance exacte dans le repère orthonormé.',
            subResult: `${distAB} cm`,
          },
        ],
      };
    }
    case 3: {
      // Angles inscrits et polygones réguliers
      const nSides = [5, 6, 8, 9][scale - 1]; // pentagone, hexagone, octogone, ennéagone
      const angleCentre = 360 / nSides; // 72, 60, 45, 40 (tous entiers !)
      const angleInscrit = angleCentre / 2; // 36, 30, 22.5, 20
      return {
        chapterId: 'math3-angles-polygones',
        partLabel: 'Exercice 3',
        title: 'Activités Géométriques : Angles inscrits & polygones réguliers',
        points: 5,
        difficulty: 2,
        prompt:
          `Un polygone régulier à ${nSides} côtés (A₁A₂...A_${nSides}) est inscrit dans un cercle de centre O.\n\n` +
          `1) Calcule en degrés la mesure de l’angle au centre A₁ÔA₂. (2 pts)\n` +
          `2) Soit M un point du grand arc A₁A₂. Quelle relation lie l’angle inscrit A₁M̂A₂ à l’angle au centre A₁ÔA₂ ? (1 pt)\n` +
          `3) Calcule la mesure de l’angle inscrit A₁M̂A₂ en degrés. (2 pts)`,
        hint: `A₁ÔA₂ = 360° ÷ ${nSides} = ${angleCentre}° ; angle inscrit = moitié = ${fmtFr(angleInscrit)}°.`,
        correctAnswer: fmtAns(angleInscrit),
        unit: '°',
        explanationFinal: `Angle au centre = ${angleCentre}° et angle inscrit associé = ${fmtFr(angleInscrit)}°.`,
        themeTags: ['Angles inscrits', 'Polygone régulier', 'Cercle'],
        steps: [
          {
            title: '1) Angle au centre (2 pts)',
            mathExpression: `A₁ÔA₂ = 360° ÷ ${nSides} = ${angleCentre}°`,
            explanation: 'Partage équitable du cercle complet.',
          },
          {
            title: '2) Théorème de l’angle inscrit (1 pt)',
            mathExpression: 'A₁M̂A₂ = ½ A₁ÔA₂',
            explanation: 'Ils interceptent le même petit arc A₁A₂.',
          },
          {
            title: '3) Angle inscrit (2 pts)',
            mathExpression: `A₁M̂A₂ = ${angleCentre}° ÷ 2 = ${fmtFr(angleInscrit)}°`,
            explanation: 'Résultat en degrés.',
            subResult: `${fmtFr(angleInscrit)}°`,
          },
        ],
      };
    }
    case 4: {
      // Angles remarquables : échelle ou bâtiment (tan 45 = 1 ou sin 30 = 0.5 ou cos 60 = 0.5)
      const hyp = 10 * scale; // 10, 20, 30, 40 m
      const h = hyp * 0.5; // sin(30°) = 0.5 => h = 5*scale m exact!
      return {
        chapterId: 'math3-trigonometrie-3eme',
        partLabel: 'Exercice 3',
        title: `Trigonométrie : rampe d’accès à ${city}`,
        points: 5,
        difficulty: 2,
        prompt:
          `Pour accéder au hall d’un lycée à ${city}, on construit une rampe inclinée de longueur AC = ${hyp} m faisant un angle Â = 30° avec le sol horizontal [AB] (triangle ABC rectangle en B).\n` +
          `Données : sin 30° = 0,5 ; cos 30° ≈ 0,866 ; tan 30° ≈ 0,577.\n\n` +
          `1) Fais un schéma annoté du triangle rectangle ABC (précise l’hypoténuse et le côté opposé à Â). (1,5 pt)\n` +
          `2) Quelle formule trigonométrique relie BC, AC et l’angle Â = 30° ? (1,5 pt)\n` +
          `3) Calcule la hauteur BC atteinte par la rampe en mètres. (2 pts)`,
        hint: `sin(30°) = BC ÷ AC ⇒ BC = ${hyp} × 0,5.`,
        correctAnswer: fmtAns(h),
        unit: 'm',
        explanationFinal: `sin(30°) = BC / AC donne BC = ${hyp} × 0,5 = ${h} m.`,
        themeTags: ['Trigonométrie', 'Angle 30°', 'Sinus'],
        steps: [
          {
            title: '1) & 2) Identification et formule (3 pts)',
            mathExpression: '[AC] est l’hypoténuse ; [BC] est opposé à Â.\nsin(Â) = BC ÷ AC',
            explanation: 'Définition du sinus.',
          },
          {
            title: '3) Hauteur BC (2 pts)',
            mathExpression: `BC = ${hyp} × sin(30°) = ${hyp} × 0,5 = ${h} m`,
            explanation: 'Valeur exacte car sin(30°) = 1/2.',
            subResult: `${h} m`,
          },
        ],
      };
    }
    default: {
      // Vecteurs & parallélogramme ABCD (AB = DC) dans repère
      const xA = 1;
      const yA = 2;
      const xB = 4 + scale;
      const yB = 5;
      const xC = 7 + scale;
      const yC = 1;
      // AB = (xB - xA, yB - yA) = (3 + scale, 3)
      // DC = (xC - xD, yC - yD) => xD = xC - (xB - xA) = 7+scale - (3+scale) = 4 ; yD = 1 - 3 = -2
      const xD = xC - (xB - xA);
      const yD = yC - (yB - yA);
      void yD;
      return {
        chapterId: 'math3-reperage-droites',
        partLabel: 'Exercice 3',
        title: 'Repérage & Vecteurs : construction d’un parallélogramme',
        points: 5,
        difficulty: 2,
        prompt:
          `Dans le repère orthonormé (O, I, J), on considère A(${xA} ; ${yA}), B(${xB} ; ${yB}) et C(${xC} ; ${yC}).\n\n` +
          `1) Calcule les coordonnées du vecteur AB⃗. (1,5 pt)\n` +
          `2) On veut que ABCD soit un parallélogramme. Quelle égalité vectorielle doit être vérifiée ? (1,5 pt)\n` +
          `3) Calcule les coordonnées (x_D ; y_D) du point D et donne l’abscisse x_D. (2 pts)`,
        hint: `AB⃗ = DC⃗ ➔ (${xB - xA} ; ${yB - yA}) = (${xC} − x_D ; ${yC} − y_D) ➔ x_D = ${xD}.`,
        correctAnswer: fmtAns(xD),
        explanationFinal: `D a pour coordonnées (${xD} ; ${yD}), donc x_D = ${xD}.`,
        themeTags: ['Parallélogramme', 'Vecteurs égaux', 'Repère'],
        steps: [
          {
            title: '1) Vecteur AB⃗ (1,5 pt)',
            mathExpression: `AB⃗(${xB - xA} ; ${yB - yA})`,
            explanation: 'Calcul des composantes.',
          },
          {
            title: '2) Condition vectorielle (1,5 pt)',
            mathExpression: 'ABCD parallélogramme ⇔ AB⃗ = DC⃗',
            explanation: 'Attention à l’ordre des lettres !',
          },
          {
            title: '3) Coordonnées de D (2 pts)',
            mathExpression: `${xC} − x_D = ${xB - xA} ⇒ x_D = ${xD}\n${yC} − y_D = ${yB - yA} ⇒ y_D = ${yD}\nDonc D(${xD} ; ${yD}).`,
            explanation: 'Abscisse demandée : ' + xD + '.',
            subResult: `x_D = ${xD}`,
          },
        ],
      };
    }
  }
}

function buildMathsPart4Probleme(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year * 3 + cIdx) % 6;
  const city = ctx.cities[(year + cIdx + 3) % ctx.cities.length];
  const scale = 1 + ((year + cIdx) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Pyramide régulière à base carrée + section à mi-hauteur k = 1/2
      // c = 4*scale cm -> B = 16*scale^2, h = 6*k? Prenons c = 6 cm, h = 12 cm? Prenons c = 4 cm, h = 6*scale cm (multiple de 3 et 2)
      // Base c = 6 cm (B = 36 cm2), h = 4*scale cm (pour scale=1..4 -> 4, 8, 12, 16)
      // V = (1/3)*36*h = 12*h = 48*scale cm3 -> k = 1/2 => V' = V/8 = 6*scale cm3 (EXACT ENTIER!)
      const c = 6; // cm
      const baseArea = 36; // cm²
      const h = 4 * scale; // cm
      const vTotal = 12 * h; // 48 * scale cm3
      const vReduit = vTotal / 8; // 6 * scale cm3
      return {
        chapterId: 'math3-sections-agrandissement',
        partLabel: 'Problème',
        title: 'Problème de Synthèse : Pyramide & section plane (k³)',
        points: 6,
        difficulty: 4,
        prompt:
          `Une pyramide régulière SABCD a une base carrée ABCD de côté c = ${c} cm et une hauteur SO = ${h} cm.\n` +
          `On coupe cette pyramide par un plan parallèle à sa base passant par O’ milieu de [SO] (rapport de réduction k = 1/2).\n\n` +
          `1) Calcule l’aire B de la base carrée ABCD en cm². (1 pt)\n` +
          `2) Calcule le volume total V de la pyramide SABCD en cm³. (2 pts)\n` +
          `3) Calcule l’aire B’ de la section carrée A’B’C’D’. (1 pt)\n` +
          `4) Calcule le volume V’ de la petite pyramide SA’B’C’D’ en cm³. (2 pts)`,
        hint: `V = (1/3) × ${baseArea} × ${h} = ${vTotal} cm³ ; B’ = k² × B = B ÷ 4 ; V’ = k³ × V = V ÷ 8.`,
        correctAnswer: fmtAns(vReduit),
        unit: 'cm³',
        explanationFinal: `B = 36 cm², V = ${vTotal} cm³, B’ = 9 cm² et V’ = ${vReduit} cm³.`,
        themeTags: ['Pyramide', 'Section plane', 'Coefficient k³'],
        steps: [
          {
            title: '1) & 2) Base et Volume total (3 pts)',
            mathExpression: `B = ${c}² = ${baseArea} cm²\nV = (1/3) × ${baseArea} × ${h} = ${vTotal} cm³`,
            explanation: 'Formule du volume de la pyramide.',
          },
          {
            title: '3) Aire de la section (1 pt)',
            mathExpression: `B’ = (1/2)² × ${baseArea} = ${baseArea} ÷ 4 = 9 cm²`,
            explanation: 'Les aires sont multipliées par k².',
          },
          {
            title: '4) Volume réduit V’ (2 pts)',
            mathExpression: `V’ = (1/2)³ × ${vTotal} = ${vTotal} ÷ 8 = ${vReduit} cm³`,
            explanation: 'Les volumes sont multipliés par k³.',
            subResult: `${vReduit} cm³`,
          },
        ],
      };
    }
    case 1: {
      // Repère complet : triangle rectangle isocèle & cercle circonscrit
      // A(0;0), B(3*scale; 4*scale), C(7*scale; scale) -> AB=(3s,4s), BC=(4s,-3s) -> AB perp BC, AB=BC=5s, AC = sqrt(50)*s
      // Prenons plutôt AC diamètre avec A(0;0), B(6*scale; 0), C(6*scale; 8*scale) => AB = 6*scale, BC = 8*scale, AC = 10*scale, Rayon R = 5*scale (EXACT!)
      const xB = 6 * scale;
      const yC = 8 * scale;
      const ac = 10 * scale;
      const rayon = 5 * scale;
      return {
        chapterId: 'math3-reperage-droites',
        partLabel: 'Problème',
        title: 'Problème de Synthèse : Repère orthonormé & Cercle circonscrit',
        points: 6,
        difficulty: 4,
        prompt:
          `Dans un repère orthonormé (O, I, J) (unité : 1 cm), on place A(0 ; 0), B(${xB} ; 0) et C(${xB} ; ${yC}).\n\n` +
          `1) Calcule les longueurs AB, BC et AC. (2 pts)\n` +
          `2) Démontre que le triangle ABC est rectangle en B. (1,5 pt)\n` +
          `3) Détermine les coordonnées du centre Ω du cercle (C) circonscrit à ABC. (1 pt)\n` +
          `4) Calcule le rayon R du cercle (C) en cm. (1,5 pt)`,
        hint: `AB = ${xB}, BC = ${yC}, AC = √(${xB}² + ${yC}²) = ${ac}. Dans un triangle rectangle, le centre est au milieu de [AC] et R = AC ÷ 2.`,
        correctAnswer: fmtAns(rayon),
        unit: 'cm',
        explanationFinal: `ABC rectangle en B, centre Ω(${xB / 2} ; ${yC / 2}) et rayon R = ${rayon} cm.`,
        themeTags: ['Repère orthonormé', 'Cercle circonscrit', 'Pythagore'],
        steps: [
          {
            title: '1) Distances AB, BC, AC (2 pts)',
            mathExpression: `AB = ${xB} cm ; BC = ${yC} cm\nAC = √(${xB}² + ${yC}²) = √(${ac * ac}) = ${ac} cm`,
            explanation: 'Triplet pythagoricien 6–8–10.',
          },
          {
            title: '2) Triangle rectangle (1,5 pt)',
            mathExpression: `AB² + BC² = ${xB * xB} + ${yC * yC} = ${ac * ac} = AC² ⇒ rectangle en B.`,
            explanation: 'Réciproque de Pythagore.',
          },
          {
            title: '3) & 4) Centre et rayon (2,5 pts)',
            mathExpression: `Ω = milieu de [AC] = (${xB / 2} ; ${yC / 2})\nR = AC ÷ 2 = ${ac} ÷ 2 = ${rayon} cm`,
            explanation: 'L’hypoténuse est un diamètre du cercle circonscrit.',
            subResult: `${rayon} cm`,
          },
        ],
      };
    }
    case 2: {
      // Problème économique complet : coopérative scolaire (système + fonction affine + bénéfice)
      const qteTotal = 20 * scale; // 20, 40, 60, 80 sacs
      const pxAchat = ctx.id === 'france' ? 10 : 1500;
      const pxVente = ctx.id === 'france' ? 14 : 2000;
      const fraisFix = ctx.id === 'france' ? 20 : 4000;
      const benef = (pxVente - pxAchat) * qteTotal - fraisFix;
      return {
        chapterId: 'math3-applications-affines',
        partLabel: 'Problème',
        title: `Problème de Synthèse : Coopérative scolaire de ${city}`,
        points: 6,
        difficulty: 3,
        prompt:
          `La coopérative d’un collège à ${city} vend des lots de cahiers :\n` +
          `• Le coût total de fabrication pour x lots est donné par C(x) = ${pxAchat}x + ${fraisFix} (en ${ctx.currency}).\n` +
          `• Chaque lot est vendu ${pxVente} ${ctx.currency}, soit une recette R(x) = ${pxVente}x.\n\n` +
          `1) Exprime le bénéfice B(x) = R(x) − C(x) sous forme d’une fonction affine. (2 pts)\n` +
          `2) À partir de combien de lots la coopérative commence-t-elle à faire du bénéfice (B(x) > 0) ? (2 pts)\n` +
          `3) Calcule le bénéfice net réalisé si la coopérative vend x = ${qteTotal} lots (en ${ctx.currency}). (2 pts)`,
        hint: `B(x) = (${pxVente} − ${pxAchat})x − ${fraisFix} = ${pxVente - pxAchat}x − ${fraisFix}. Calcule B(${qteTotal}).`,
        correctAnswer: fmtAns(benef),
        unit: ctx.currency,
        explanationFinal: `B(x) = ${pxVente - pxAchat}x − ${fraisFix} ; B(${qteTotal}) = ${benef} ${ctx.currency}.`,
        themeTags: ['Coopérative', 'Bénéfice', ctx.currency],
        steps: [
          {
            title: '1) Expression du bénéfice (2 pts)',
            mathExpression: `B(x) = ${pxVente}x − (${pxAchat}x + ${fraisFix}) = ${pxVente - pxAchat}x − ${fraisFix}`,
            explanation: 'Recette moins coût total.',
          },
          {
            title: '2) Seuil de rentabilité (2 pts)',
            mathExpression: `${pxVente - pxAchat}x − ${fraisFix} > 0 ⇒ x > ${fmtFr(fraisFix / (pxVente - pxAchat))}`,
            explanation: `Il faut vendre au moins ${Math.floor(fraisFix / (pxVente - pxAchat)) + 1} lots.`,
          },
          {
            title: `3) Bénéfice pour ${qteTotal} lots (2 pts)`,
            mathExpression: `B(${qteTotal}) = ${pxVente - pxAchat} × ${qteTotal} − ${fraisFix} = ${benef} ${ctx.currency}`,
            explanation: 'Application numérique finale.',
            subResult: `${benef} ${ctx.currency}`,
          },
        ],
      };
    }
    case 3: {
      // Cône de révolution : r = 5*k? Prenons pi = 3, r = 4 cm? Non, BEPC utilise souvent π ≈ 3,14 et r = 5 ou 10, h = 6*scale
      // Avec r = 10 cm et h = 3*scale cm -> V = (1/3)*3.14*100*(3*scale) = 314 * scale cm³ (EXACT!)
      const r = 10;
      const h = 3 * scale; // 3, 6, 9, 12
      const vCone = 314 * scale;
      return {
        chapterId: 'math3-pyramides-cones',
        partLabel: 'Problème',
        title: 'Problème de Synthèse : Cône de révolution & capacité',
        points: 6,
        difficulty: 3,
        prompt:
          `Un entonnoir conique de centre de base O a un rayon r = ${r} cm et une hauteur h = ${h} cm.\n` +
          `On prendra π = 3,14.\n\n` +
          `1) Calcule l’aire B de la base circulaire (en cm²). (1,5 pt)\n` +
          `2) Quelle est la longueur d’une génératrice SA ≈ √(r² + h²) ? Donne la formule littérale. (1,5 pt)\n` +
          `3) Calcule le volume exact V de ce cône en cm³. (3 pts)`,
        hint: `B = π × r² = 3,14 × 100 = 314 cm² ; V = (1/3) × 314 × ${h}.`,
        correctAnswer: fmtAns(vCone),
        unit: 'cm³',
        explanationFinal: `B = 314 cm² et V = ${vCone} cm³.`,
        themeTags: ['Cône de révolution', 'Volume', 'Géométrie 3D'],
        steps: [
          {
            title: '1) Aire de la base (1,5 pt)',
            mathExpression: 'B = 3,14 × 10² = 314 cm²',
            explanation: 'Aire d’un disque πR².',
          },
          {
            title: '2) Formule de la génératrice (1,5 pt)',
            mathExpression: 'Triangle SOA rectangle en O ⇒ SA² = SO² + OA² = h² + r²',
            explanation: 'Pythagore dans l’espace.',
          },
          {
            title: '3) Volume du cône (3 pts)',
            mathExpression: `V = (1/3) × 314 × ${h} = 314 × ${scale} = ${vCone} cm³`,
            explanation: 'Simplification par 3 exacte.',
            subResult: `${vCone} cm³`,
          },
        ],
      };
    }
    case 4: {
      // Cercle de diamètre [AB] + Pythagore + Aire du triangle ABM
      // Diamètre AB = 10*scale, AM = 6*scale => angle AMB = 90° => BM = 8*scale => Aire = (6*scale * 8*scale)/2 = 24*scale²
      const ab = 10 * scale;
      const am = 6 * scale;
      const bm = 8 * scale;
      const aire = (am * bm) / 2; // 24 * scale^2
      return {
        chapterId: 'math3-angles-polygones',
        partLabel: 'Problème',
        title: 'Problème de Synthèse : Cercle de diamètre [AB] & Aire',
        points: 6,
        difficulty: 3,
        prompt:
          `On trace un cercle (C) de diamètre [AB] tel que AB = ${ab} cm.\n` +
          `On place un point M sur (C) tel que AM = ${am} cm.\n\n` +
          `1) Quelle est la nature exacte du triangle AMB ? Justifie par une propriété du cercle. (2 pts)\n` +
          `2) Calcule la longueur BM en cm. (2 pts)\n` +
          `3) Calcule l’aire du triangle AMB en cm². (2 pts)`,
        hint: `M ∈ cercle de diamètre [AB] ⇒ AMB rectangle en M. BM = √(${ab}² − ${am}²) = ${bm} cm. Aire = (AM × BM) ÷ 2.`,
        correctAnswer: fmtAns(aire),
        unit: 'cm²',
        explanationFinal: `AMB rectangle en M, BM = ${bm} cm et Aire(AMB) = ${aire} cm².`,
        themeTags: ['Cercle', 'Pythagore', 'Aire'],
        steps: [
          {
            title: '1) Nature de AMB (2 pts)',
            mathExpression: 'Tout triangle inscrit dans un cercle ayant un diamètre pour côté est rectangle ⇒ AMB rectangle en M.',
            explanation: 'Propriété de l’angle droit inscrit dans un demi-cercle.',
          },
          {
            title: '2) Calcul de BM (2 pts)',
            mathExpression: `BM² = AB² − AM² = ${ab * ab} − ${am * am} = ${bm * bm} ⇒ BM = ${bm} cm`,
            explanation: 'Théorème de Pythagore.',
          },
          {
            title: '3) Aire du triangle (2 pts)',
            mathExpression: `Aire = (AM × BM) ÷ 2 = (${am} × ${bm}) ÷ 2 = ${aire} cm²`,
            explanation: 'Demi-produit des côtés de l’angle droit.',
            subResult: `${aire} cm²`,
          },
        ],
      };
    }
    default: {
      // Aire variable d'un terrain rectangulaire à partager en fonction affine de x
      // Terrain ABCD de longueur AB = 12 m, largeur AD = 8 m -> aire totale 96 m2.
      // M ∈ [AB] avec AM = x. Aire(AMCD) trapèze = ((x + 12) * 8) / 2 = 4x + 48.
      // Trouver x tel que Aire(AMCD) = 4*(4+scale) + 48 = 64 + 4*scale => x = 4 + scale
      const xTarget = 4 + scale; // 5, 6, 7, 8 m
      const aireTarget = 4 * xTarget + 48; // 68, 72, 76, 80 m2
      return {
        chapterId: 'math3-calcul-litteral-equations',
        partLabel: 'Problème',
        title: `Problème de Synthèse : Partage de parcelle à ${city}`,
        points: 6,
        difficulty: 3,
        prompt:
          `Un terrain rectangulaire ABCD à ${city} mesure AB = 12 m et AD = 8 m.\n` +
          `On place un piquet M sur le côté [AB] à une distance AM = x mètres (0 ≤ x ≤ 12) afin de délimiter une parcelle trapézoïdale AMCD.\n\n` +
          `1) Exprime l’aire f(x) du trapèze AMCD en fonction de x. (2 pts)\n` +
          `2) Calcule l’aire du triangle restant MBC lorsque x = 4 m. (1,5 pt)\n` +
          `3) Pour quelle valeur de x l’aire du trapèze AMCD vaut-elle exactement ${aireTarget} m² ? (2,5 pts)`,
        hint: `f(x) = ((AM + DC) × AD) ÷ 2 = ((x + 12) × 8) ÷ 2 = 4x + 48. Résous 4x + 48 = ${aireTarget}.`,
        correctAnswer: fmtAns(xTarget),
        unit: 'm',
        explanationFinal: `f(x) = 4x + 48 ; l’aire vaut ${aireTarget} m² pour x = ${xTarget} m.`,
        themeTags: ['Trapèze', 'Fonction affine', 'Mise en équation'],
        steps: [
          {
            title: '1) Expression de f(x) (2 pts)',
            mathExpression: 'f(x) = ((x + 12) × 8) ÷ 2 = 4(x + 12) = 4x + 48',
            explanation: 'Aire du trapèze rectangle AMCD.',
          },
          {
            title: '2) Aire de MBC pour x = 4 (1,5 pt)',
            mathExpression: 'MB = 12 − 4 = 8 m ⇒ Aire(MBC) = (8 × 8) ÷ 2 = 32 m²',
            explanation: 'Triangle rectangle en B.',
          },
          {
            title: `3) Résolution de f(x) = ${aireTarget} (2,5 pts)`,
            mathExpression: `4x + 48 = ${aireTarget} ⇒ 4x = ${aireTarget - 48} ⇒ x = ${xTarget} m`,
            explanation: `Vérifié : 0 ≤ ${xTarget} ≤ 12.`,
            subResult: `${xTarget} m`,
          },
        ],
      };
    }
  }
}

function generateMathsGrid(): BepcArchivePaper[] {
  const seeds = [];
  for (let year = 1990; year <= 2026; year++) {
    for (let cIdx = 0; cIdx < COUNTRY_ORDER.length; cIdx++) {
      const countryId = COUNTRY_ORDER[cIdx];
      const ctx = BEPC_COUNTRY_CONTEXTS[countryId];
      const part1 = buildMathsPart1Numerique(year, cIdx, ctx);
      const part2 = buildMathsPart2FonctionsStats(year, cIdx, ctx);
      const part3 = buildMathsPart3Geometrie(year, cIdx, ctx);
      const part4 = buildMathsPart4Probleme(year, cIdx, ctx);

      seeds.push({
        year,
        countryId,
        duration: '2h00',
        isTrainingSubject: true,
        sourceNotice:
          'Sujet complet d’entraînement au format BEPC (4 exercices détaillés / 20 pts, reconstitué selon le programme du pays).',
        themeSummary: `Numérique · Fonctions/Stats · Géométrie · ${part4.title.replace('Problème de Synthèse : ', '')}`,
        parts: [part1, part2, part3, part4],
      });
    }
  }
  return buildArchivePapers('maths', seeds);
}

export const BEPC_FULL_GRID_MATHS_PAPERS: BepcArchivePaper[] = generateMathsGrid();
