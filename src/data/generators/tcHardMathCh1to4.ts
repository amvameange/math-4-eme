import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom, randInt } from './types';
import { assembleHardMathExercise, fmt, gcd, HardQuestionSpec } from './tcHardMathHelpers';

export function generateHardMathCh1to4(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 1. ARITHMÉTIQUE
    // -------------------------------------------------------------------------
    case 'mathTc-arithmetique': {
      if (vMod === 0) {
        const a = pickRandom([11, 13, 17, 19]);
        const b = pickRandom([7, 8, 9, 12]);
        const d = gcd(a, b);
        let u = 1;
        while ((a * u) % b !== 1) u++;
        const v = (1 - a * u) / b;
        const c = pickRandom([5, 6, 9, 10]);
        const x0 = c * u;
        const y0 = c * v;
        const xMin = ((x0 % b) + b) % b || b;
        const yForXMin = (c - a * xMin) / b;
        const nMod = a * b;
        const k100 = xMin + 10 * b;
        const pFermat = a;
        const rFermat = (b * b) % pFermat;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Calcule d = PGCD(${a} ; ${b}) par l'algorithme d'Euclide.`,
            questionType: 'numeric',
            correctAnswer: String(d),
            hint: `${a} est premier et ne divise pas ${b}.`,
            ruleApplied: 'Algorithme d’Euclide',
            mathExpression: `PGCD(${a} ; ${b}) = ${d}`,
            explanation: `Comme ${a} est premier et ne divise pas ${b}, ils sont premiers entre eux donc d = ${d}.`,
          },
          {
            questionPrompt: `Détermine le plus petit entier u ∈ {1, ..., ${b - 1}} tel que ${a}u ≡ 1 [${b}].`,
            questionType: 'numeric',
            correctAnswer: String(u),
            hint: `Teste les multiples de ${a} modulo ${b}.`,
            ruleApplied: 'Inverse modulaire par Bézout',
            mathExpression: `${a} × ${u} = ${a * u} ≡ 1 [${b}]`,
            explanation: `${a} × ${u} − 1 = ${a * u - 1}, qui est exactement divisible par ${b}.`,
          },
          {
            questionPrompt: `En déduire l'entier relatif v associé dans l'identité de Bézout ${a}(${u}) + ${b}v = 1.`,
            questionType: 'numeric',
            correctAnswer: String(v),
            hint: `v = (1 - ${a}×${u}) / ${b}.`,
            ruleApplied: 'Identité de Bézout',
            mathExpression: `v = (1 - ${a * u}) / ${b} = ${v}`,
            explanation: `On isole v = (1 − ${a * u}) / ${b} = ${1 - a * u} / ${b} = ${v}.`,
          },
          {
            questionPrompt: `On considère (E) : ${a}x + ${b}y = ${c}. Quelle est l'abscisse x₀ = ${c}u de la solution particulière obtenue ?`,
            questionType: 'numeric',
            correctAnswer: String(x0),
            hint: `Multiplie l'identité de Bézout par ${c}.`,
            ruleApplied: 'Multiplication par le second membre',
            mathExpression: `${a}(${x0}) + ${b}(${y0}) = ${c}`,
            explanation: `En multipliant ${a}u + ${b}v = 1 par ${c}, on obtient (x₀, y₀) = (${x0}, ${y0}).`,
          },
          {
            questionPrompt: `Quelle est la forme générale des couples (x, y) ∈ ℤ² solutions de (E) ?`,
            questionType: 'qcm',
            options: [
              `x = ${x0} + ${b}k, y = ${y0} - ${a}k (k ∈ ℤ)`,
              `x = ${x0} + ${a}k, y = ${y0} - ${b}k (k ∈ ℤ)`,
              `x = ${x0} + ${b}k, y = ${y0} + ${a}k (k ∈ ℤ)`,
              `x = ${u} + ${b}k, y = ${v} - ${a}k (k ∈ ℤ)`,
            ],
            correctAnswer: `x = ${x0} + ${b}k, y = ${y0} - ${a}k (k ∈ ℤ)`,
            hint: `Soustrais (x₀, y₀) et applique le lemme de Gauss puisque PGCD(${a},${b}) = 1.`,
            ruleApplied: 'Lemme de Gauss',
            mathExpression: `${a}(x - ${x0}) = -${b}(y - ${y0}) ⇒ x = ${x0} + ${b}k`,
            explanation: `Comme ${a} ∧ ${b} = 1, ${b} divise (x − x₀) donc x = ${x0} + ${b}k et y = ${y0} − ${a}k.`,
          },
          {
            questionPrompt: `Détermine la plus petite valeur entière strictement positive x_min solution de (E).`,
            questionType: 'numeric',
            correctAnswer: String(xMin),
            hint: `Prends le reste euclidien de ${x0} modulo ${b} (ou ${b} si reste nul).`,
            ruleApplied: 'Réduction modulo b',
            mathExpression: `x_min = ${x0} mod ${b} = ${xMin}`,
            explanation: `x ≡ ${x0} [${b}] avec x > 0 donne x_min = ${xMin}.`,
          },
          {
            questionPrompt: `Calcule la coordonnée y associée à x_min = ${xMin} dans (E).`,
            questionType: 'numeric',
            correctAnswer: String(yForXMin),
            hint: `y = (${c} - ${a}×${xMin}) / ${b}.`,
            ruleApplied: 'Vérification dans (E)',
            mathExpression: `y = (${c} - ${a * xMin}) / ${b} = ${yForXMin}`,
            explanation: `On substitue x = ${xMin} : ${b}y = ${c} − ${a * xMin} = ${c - a * xMin} ⇒ y = ${yForXMin}.`,
          },
          {
            questionPrompt: `Combien de solutions (x, y) de (E) vérifient 0 < x ≤ ${nMod} ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `Les x positifs avancent par pas de ${b} à partir de ${xMin}.`,
            ruleApplied: 'Dénombrement dans un intervalle',
            mathExpression: `N = (${nMod} ÷ ${b}) = ${a}`,
            explanation: `Entre 1 et ${a * b}, chaque intervalle de longueur ${b} contient exactement une valeur x ≡ ${xMin} [${b}], soit ${a} solutions.`,
          },
          {
            questionPrompt: `Quel est le reste modulo ${pFermat} de ${b}^${(pFermat - 1) * 15 + 2} ?`,
            questionType: 'numeric',
            correctAnswer: String(rFermat),
            hint: `Utilise ${b}^${pFermat - 1} ≡ 1 [${pFermat}] par Fermat.`,
            ruleApplied: 'Petit théorème de Fermat',
            mathExpression: `${b}^${(pFermat - 1) * 15 + 2} ≡ ${b}² = ${b * b} ≡ ${rFermat} [${pFermat}]`,
            explanation: `L'exposant vaut (${pFermat - 1})×15 + 2, donc l'expression est congrue à ${b}² = ${b * b} ≡ ${rFermat} [${pFermat}].`,
          },
          {
            questionPrompt: `Pour k = 10 à partir de x_min, calcule x₁₀ = ${xMin} + 10×${b}.`,
            questionType: 'numeric',
            correctAnswer: String(k100),
            hint: `Additionne simplement ${xMin} et ${10 * b}.`,
            ruleApplied: 'Suite arithmétique des abscisses solutions',
            mathExpression: `x₁₀ = ${xMin} + ${10 * b} = ${k100}`,
            explanation: `Le terme d'indice 10 est x₁₀ = ${xMin} + 10×${b} = ${k100}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Équation diophantienne ${a}x + ${b}y = ${c}, Gauss & Fermat`,
          `On étudie l'équation diophantienne (E) : ${a}x + ${b}y = ${c} dans ℤ² et des propriétés modulaires associées.`,
          items
        );
      }

      if (vMod === 1) {
        const p = pickRandom([5, 7, 11]);
        const q = pickRandom([8, 9, 13]);
        const r1 = randInt(1, p - 1);
        const r2 = randInt(1, q - 1);
        let x0 = 1;
        while (x0 % p !== r1 || x0 % q !== r2) x0++;
        const pq = p * q;
        const invPinQ = (() => {
          let k = 1;
          while ((p * k) % q !== 1) k++;
          return k;
        })();
        const x1 = x0 + pq;
        const x2 = x0 + 2 * pq;
        const N = x0 + 3 * pq;
        const powRest = (N * N) % p;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Vérifie PGCD(${p} ; ${q}). Quel est ce PGCD ?`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `${p} est premier et ne divise pas ${q}.`,
            ruleApplied: 'Nombres premiers entre eux',
            mathExpression: `PGCD(${p} ; ${q}) = 1`,
            explanation: `Comme ${p} ne divise pas ${q}, leur PGCD vaut 1.`,
          },
          {
            questionPrompt: `Calcule l'inverse de ${p} modulo ${q} dans {1, ..., ${q - 1}}.`,
            questionType: 'numeric',
            correctAnswer: String(invPinQ),
            hint: `Cherche u ∈ {1, ..., ${q - 1}} tel que ${p}u ≡ 1 [${q}].`,
            ruleApplied: 'Inverse modulaire',
            mathExpression: `${p} × ${invPinQ} = ${p * invPinQ} ≡ 1 [${q}]`,
            explanation: `${p} × ${invPinQ} − 1 = ${p * invPinQ - 1} est multiple de ${q}.`,
          },
          {
            questionPrompt: `On résout le système (S) : x ≡ ${r1} [${p}] et x ≡ ${r2} [${q}]. En posant x = ${r1} + ${p}k, quelle congruence doit vérifier k modulo ${q} ?`,
            questionType: 'qcm',
            options: [
              `${p}k ≡ ${r2 - r1} [${q}]`,
              `${q}k ≡ ${r1 - r2} [${p}]`,
              `k ≡ ${r1 + r2} [${q}]`,
              `${p}k ≡ ${r2} [${q}]`,
            ],
            correctAnswer: `${p}k ≡ ${r2 - r1} [${q}]`,
            hint: `Substitue x = ${r1} + ${p}k dans la seconde congruence modulo ${q}.`,
            ruleApplied: 'Théorème des restes chinois',
            mathExpression: `${r1} + ${p}k ≡ ${r2} [${q}] ⇔ ${p}k ≡ ${r2 - r1} [${q}]`,
            explanation: `La substitution directe donne ${p}k ≡ ${r2} − ${r1} [${q}].`,
          },
          {
            questionPrompt: `Détermine l'unique solution x₀ ∈ {0, ..., ${pq - 1}} du système (S).`,
            questionType: 'numeric',
            correctAnswer: String(x0),
            hint: `Teste k = 0, 1, ..., ${q - 1} ou multiplie (${r2 - r1}) par ${invPinQ} modulo ${q}.`,
            ruleApplied: 'Unicité modulo pq',
            mathExpression: `x₀ = ${x0} (avec ${x0} ≡ ${r1} [${p}] et ${x0} ≡ ${r2} [${q}])`,
            explanation: `Le reste de ${x0} par ${p} est ${r1} et par ${q} est ${r2}.`,
          },
          {
            questionPrompt: `Calcule la deuxième plus petite solution positive x₁ = x₀ + ${pq}.`,
            questionType: 'numeric',
            correctAnswer: String(x1),
            hint: `Toutes les solutions vérifient x ≡ ${x0} [${pq}].`,
            ruleApplied: 'Périodicité des solutions',
            mathExpression: `x₁ = ${x0} + ${pq} = ${x1}`,
            explanation: `On ajoute la période ${p}×${q} = ${pq} à x₀.`,
          },
          {
            questionPrompt: `Calcule x₂ = x₀ + 2×${pq}.`,
            questionType: 'numeric',
            correctAnswer: String(x2),
            hint: `Ajoute encore ${pq} à x₁.`,
            ruleApplied: 'Progression arithmétique modulo pq',
            mathExpression: `x₂ = ${x1} + ${pq} = ${x2}`,
            explanation: `x₂ = ${x0} + 2×${pq} = ${x2}.`,
          },
          {
            questionPrompt: `Soit N = x₀ + 3×${pq} = ${N}. Quel est le PPCM de ${p} et ${q} ?`,
            questionType: 'numeric',
            correctAnswer: String(pq),
            hint: `PGCD(${p},${q}) = 1 ⇒ PPCM = ${p}×${q}.`,
            ruleApplied: 'PGCD × PPCM = a × b',
            mathExpression: `PPCM(${p} ; ${q}) = ${p} × ${q} = ${pq}`,
            explanation: `Deux entiers premiers entre eux ont pour PPCM leur produit ${pq}.`,
          },
          {
            questionPrompt: `Quel est le reste de N² = ${N}² dans la division euclidienne par ${p} ?`,
            questionType: 'numeric',
            correctAnswer: String(powRest),
            hint: `N ≡ ${r1} [${p}] donc N² ≡ ${r1}² [${p}].`,
            ruleApplied: 'Compatibilité des congruences avec les puissances',
            mathExpression: `N² ≡ ${r1}² = ${r1 * r1} ≡ ${powRest} [${p}]`,
            explanation: `On réduit avant d'élever au carré : ${r1}² = ${r1 * r1} ≡ ${powRest} [${p}].`,
          },
          {
            questionPrompt: `Quel est le reste de N − x₀ dans la division euclidienne par ${pq} ?`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `N − x₀ = 3×${pq}.`,
            ruleApplied: 'Divisibilité',
            mathExpression: `N - x₀ = 3×${pq} ≡ 0 [${pq}]`,
            explanation: `N − x₀ est un multiple exact de ${pq}, le reste est 0.`,
          },
          {
            questionPrompt: `Pour tout entier m = ${p}n + ${r1}, quel est le reste de m^(${p - 1}) modulo ${p} ?`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `${r1} n'est pas divisible par le nombre premier ${p}.`,
            ruleApplied: 'Petit théorème de Fermat',
            mathExpression: `m^${p - 1} ≡ ${r1}^${p - 1} ≡ 1 [${p}]`,
            explanation: `Comme ${p} est premier et ${p} ∤ ${r1}, m^${p - 1} ≡ 1 [${p}].`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Système de congruences modulo ${p} et ${q} (Restes Chinois)`,
          `On considère le système de congruences (S) : x ≡ ${r1} [${p}] et x ≡ ${r2} [${q}] dans ℤ.`,
          items
        );
      }

      // vMod === 2: Cryptographie affine dans Z/pZ
      const p = pickRandom([11, 13, 17]);
      const a = pickRandom([3, 5, 7]);
      const b = randInt(2, p - 2);
      let aInv = 1;
      while ((a * aInv) % p !== 1) aInv++;
      const xPlain = randInt(2, p - 2);
      const yCipher = (a * xPlain + b) % p;
      const bDec = ((-aInv * b) % p + p) % p;
      const f0 = b;
      const f1 = (a + b) % p;
      const fxFixed = (() => {
        let z = 0;
        while ((a * z + b) % p !== z) z++;
        return z;
      })();
      const f2x = (a * yCipher + b) % p;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On chiffre par f(x) ≡ ${a}x + ${b} [${p}]. Pourquoi f est-elle bijective sur ℤ/${p}ℤ ?`,
          questionType: 'qcm',
          options: [
            `Car PGCD(${a} ; ${p}) = 1`,
            `Car ${b} est inférieur à ${p}`,
            `Car ${a} + ${b} est impair`,
            `Car ${p} est pair`,
          ],
          correctAnswer: `Car PGCD(${a} ; ${p}) = 1`,
          hint: `Une fonction affine x ↦ ax + b modulo p est bijective ssi a est inversible modulo p.`,
          ruleApplied: 'Critère d’inversibilité modulo p',
          mathExpression: `PGCD(${a} ; ${p}) = 1 ⇒ ∃ a⁻¹ mod ${p}`,
          explanation: `${p} est premier et ne divise pas ${a}, donc ${a} est inversible dans ℤ/${p}ℤ.`,
        },
        {
          questionPrompt: `Calcule f(0) modulo ${p}.`,
          questionType: 'numeric',
          correctAnswer: String(f0),
          hint: `Remplace x par 0.`,
          ruleApplied: 'Évaluation modulaire',
          mathExpression: `f(0) ≡ ${b} [${p}]`,
          explanation: `f(0) = ${a}×0 + ${b} = ${b}.`,
        },
        {
          questionPrompt: `Calcule f(1) modulo ${p}.`,
          questionType: 'numeric',
          correctAnswer: String(f1),
          hint: `Réduis ${a} + ${b} modulo ${p}.`,
          ruleApplied: 'Réduction modulo p',
          mathExpression: `f(1) = ${a + b} ≡ ${f1} [${p}]`,
          explanation: `${a} + ${b} = ${a + b}, qui vaut ${f1} modulo ${p}.`,
        },
        {
          questionPrompt: `Chiffre le message x = ${xPlain} en calculant y ≡ ${a}×${xPlain} + ${b} [${p}].`,
          questionType: 'numeric',
          correctAnswer: String(yCipher),
          hint: `Calcule ${a * xPlain + b} puis prends le reste par ${p}.`,
          ruleApplied: 'Chiffrement affine',
          mathExpression: `${a}×${xPlain} + ${b} = ${a * xPlain + b} ≡ ${yCipher} [${p}]`,
          explanation: `Le reste de ${a * xPlain + b} dans la division par ${p} est ${yCipher}.`,
        },
        {
          questionPrompt: `Détermine l'inverse a' ∈ {1, ..., ${p - 1}} de ${a} modulo ${p}.`,
          questionType: 'numeric',
          correctAnswer: String(aInv),
          hint: `Trouve a' tel que ${a}a' ≡ 1 [${p}].`,
          ruleApplied: 'Algorithme d’Euclide étendu',
          mathExpression: `${a} × ${aInv} = ${a * aInv} ≡ 1 [${p}]`,
          explanation: `${a}×${aInv} − 1 = ${a * aInv - 1} est multiple de ${p}.`,
        },
        {
          questionPrompt: `La fonction de déchiffrement s'écrit g(y) ≡ a'y + b' [${p}]. Calcule b' ∈ {0, ..., ${p - 1}} sachant b' ≡ -a'×${b} [${p}].`,
          questionType: 'numeric',
          correctAnswer: String(bDec),
          hint: `Réduis -${aInv * b} modulo ${p}.`,
          ruleApplied: 'Inversion d’une application affine',
          mathExpression: `b' ≡ -${aInv * b} ≡ ${bDec} [${p}]`,
          explanation: `En ajoutant un multiple de ${p} à -${aInv * b}, on obtient le reste positif ${bDec}.`,
        },
        {
          questionPrompt: `Vérifie le déchiffrement de y = ${yCipher} par g(${yCipher}) modulo ${p}. Quel entier retrouves-tu ?`,
          questionType: 'numeric',
          correctAnswer: String(xPlain),
          hint: `On doit retrouver le message initial x.`,
          ruleApplied: 'Bijection réciproque g = f⁻¹',
          mathExpression: `g(${yCipher}) ≡ ${aInv}×${yCipher} + ${bDec} ≡ ${xPlain} [${p}]`,
          explanation: `g(f(${xPlain})) ≡ ${xPlain} [${p}].`,
        },
        {
          questionPrompt: `Détermine l'unique point fixe x* ∈ {0, ..., ${p - 1}} vérifiant f(x*) ≡ x* [${p}].`,
          questionType: 'numeric',
          correctAnswer: String(fxFixed),
          hint: `Résous (${a} - 1)x* ≡ -${b} [${p}].`,
          ruleApplied: 'Équation modulaire du premier degré',
          mathExpression: `${a - 1}x* + ${b} ≡ 0 [${p}] ⇒ x* = ${fxFixed}`,
          explanation: `Pour x* = ${fxFixed}, ${a}×${fxFixed} + ${b} = ${a * fxFixed + b} ≡ ${fxFixed} [${p}].`,
        },
        {
          questionPrompt: `Calcule la double application f(f(${xPlain})) ≡ f(${yCipher}) [${p}].`,
          questionType: 'numeric',
          correctAnswer: String(f2x),
          hint: `Calcule ${a}×${yCipher} + ${b} modulo ${p}.`,
          ruleApplied: 'Itération de fonction modulaire',
          mathExpression: `f(${yCipher}) = ${a * yCipher + b} ≡ ${f2x} [${p}]`,
          explanation: `${a}×${yCipher} + ${b} = ${a * yCipher + b} ≡ ${f2x} [${p}].`,
        },
        {
          questionPrompt: `Quel est le reste de ${a}^${p - 1} + ${b}^${p} modulo ${p} ?`,
          questionType: 'numeric',
          correctAnswer: String((1 + b) % p),
          hint: `${a}^${p - 1} ≡ 1 [${p}] et ${b}^${p} ≡ ${b} [${p}] par Fermat.`,
          ruleApplied: 'Petit théorème de Fermat',
          mathExpression: `1 + ${b} = ${1 + b} ≡ ${(1 + b) % p} [${p}]`,
          explanation: `Par Fermat, ${a}^${p - 1} ≡ 1 [${p}] et ${b}^${p} ≡ ${b} [${p}], d'où la somme ${(1 + b) % p}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Chiffrement affine dans ℤ/${p}ℤ, point fixe et itérations`,
        `On définit l'application de chiffrement affine sur {0, ..., ${p - 1}} par f(x) ≡ ${a}x + ${b} [${p}].`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 2. COMPLEXES I (ALGÈBRE)
    // -------------------------------------------------------------------------
    case 'mathTc-complexes-algebre': {
      if (vMod === 0) {
        // Polynôme degré 3 : P(z) = (z - i*alpha)(z² - 2*u*z + u² + v²)
        const alpha = pickRandom([1, 2, 3]);
        const u = pickRandom([1, 2, 3]);
        const v = pickRandom([1, 2]);
        const c2 = -2 * u; // coeff de z dans Q(z)
        const c3 = u * u + v * v;
        // P(z) = z³ + (c2 - i*alpha)z² + (c3 - i*alpha*c2)z - i*alpha*c3
        const modZ2 = Math.sqrt(c3);
        const sumRootsRe = 2 * u;
        const prodQ = c3;
        const modP = Math.abs(alpha) * c3;
        const modSqTotal = alpha * alpha + c3 + c3;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit P(z) = z³ + (${c2} - ${alpha}i)z² + (${c3} + ${2 * u * alpha}i)z - ${alpha * c3}i. Calcule P(${alpha}i) en partie réelle.`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `Remplace z par ${alpha}i sachant (${alpha}i)³ = -${alpha ** 3}i et (${alpha}i)² = -${alpha * alpha}.`,
            ruleApplied: 'Racine d’un polynôme complexe',
            mathExpression: `P(${alpha}i) = 0 + 0i`,
            explanation: `En développant, les parties réelle et imaginaire s'annulent : ${alpha}i est racine de P.`,
          },
          {
            questionPrompt: `On factorise P(z) = (z - ${alpha}i)(z² + az + b). Que vaut le coefficient réel a ?`,
            questionType: 'numeric',
            correctAnswer: String(c2),
            hint: `Identifie le terme en z² : a - ${alpha}i = ${c2} - ${alpha}i.`,
            ruleApplied: 'Identification polynomiale',
            mathExpression: `a = ${c2}`,
            explanation: `Par identification des coefficients de z², on obtient immédiatement a = ${c2}.`,
          },
          {
            questionPrompt: `Que vaut le terme constant réel b du trinôme z² + az + b ?`,
            questionType: 'numeric',
            correctAnswer: String(c3),
            hint: `Identifie le terme constant : -${alpha}i·b = -${alpha * c3}i.`,
            ruleApplied: 'Identification polynomiale',
            mathExpression: `b = ${alpha * c3} / ${alpha} = ${c3}`,
            explanation: `La division par -${alpha}i donne b = ${c3}.`,
          },
          {
            questionPrompt: `Calcule le discriminant Δ de l'équation z² ${c2}z + ${c3} = 0.`,
            questionType: 'numeric',
            correctAnswer: String(-4 * v * v),
            hint: `Δ = (${c2})² - 4×1×${c3}.`,
            ruleApplied: 'Discriminant du second degré',
            mathExpression: `Δ = ${c2 * c2} - ${4 * c3} = ${-4 * v * v}`,
            explanation: `Δ = ${c2 * c2 - 4 * c3} = -${4 * v * v} < 0.`,
          },
          {
            questionPrompt: `Quelle est la partie réelle commune des deux racines complexes conjuguées z₂ et z₃ de z² ${c2}z + ${c3} = 0 ?`,
            questionType: 'numeric',
            correctAnswer: String(u),
            hint: `Re(z₂) = -a / 2.`,
            ruleApplied: 'Formule des racines complexes',
            mathExpression: `z₂,₃ = ${u} ± ${v}i ⇒ Re = ${u}`,
            explanation: `Les racines sont ${u} + ${v}i et ${u} − ${v}i, de partie réelle ${u}.`,
          },
          {
            questionPrompt: `Quelle est la valeur absolue de la partie imaginaire de z₂ et z₃ ?`,
            questionType: 'numeric',
            correctAnswer: String(v),
            hint: `Im = √(|Δ|) / 2.`,
            ruleApplied: 'Formule des racines complexes',
            mathExpression: `√(${4 * v * v}) / 2 = ${v}`,
            explanation: `√(${4 * v * v}) = ${2 * v}, divisé par 2 donne ${v}.`,
          },
          {
            questionPrompt: `Calcule le module |z₂| = |z₃| (arrondi à 0,01 près si non entier).`,
            questionType: 'numeric',
            correctAnswer: fmt(modZ2),
            hint: `|z₂| = √(u² + v²) = √(${c3}).`,
            ruleApplied: 'Module d’un nombre complexe',
            mathExpression: `|z₂| = √(${u}² + ${v}²) = √${c3} ≈ ${fmt(modZ2)}`,
            explanation: `|z₂|² = ${u * u} + ${v * v} = ${c3}, d'où |z₂| ≈ ${fmt(modZ2)}.`,
          },
          {
            questionPrompt: `Calcule la somme des modules au carré |z₁|² + |z₂|² + |z₃|² (avec z₁ = ${alpha}i).`,
            questionType: 'numeric',
            correctAnswer: String(modSqTotal),
            hint: `|z₁|² = ${alpha * alpha} et |z₂|² = |z₃|² = ${c3}.`,
            ruleApplied: 'Somme des carrés des modules',
            mathExpression: `${alpha * alpha} + ${c3} + ${c3} = ${modSqTotal}`,
            explanation: `${alpha * alpha} + 2×${c3} = ${modSqTotal}.`,
          },
          {
            questionPrompt: `Calcule le module du produit |z₁ · z₂ · z₃|.`,
            questionType: 'numeric',
            correctAnswer: String(modP),
            hint: `|z₁·z₂·z₃| = |z₁|·|z₂|² = |terme constant de P|.`,
            ruleApplied: 'Multiplicativité du module',
            mathExpression: `|-${alpha * c3}i| = ${modP}`,
            explanation: `Par Viète ou multiplicativité du module, |z₁z₂z₃| = ${alpha}×${c3} = ${modP}.`,
          },
          {
            questionPrompt: `Calcule z₂ + z₃ (la somme des deux racines non imaginaires pures).`,
            questionType: 'numeric',
            correctAnswer: String(sumRootsRe),
            hint: `La somme des deux conjugués vaut 2·Re(z₂), ou -a.`,
            ruleApplied: 'Relations coefficients-racines (Viète)',
            mathExpression: `z₂ + z₃ = (${u} + ${v}i) + (${u} - ${v}i) = ${sumRootsRe}`,
            explanation: `Les parties imaginaires s'annulent : ${sumRootsRe}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Polynôme complexe de degré 3 à racine imaginaire pure`,
          `On considère P(z) = z³ + (${c2} - ${alpha}i)z² + (${c3} + ${2 * u * alpha}i)z - ${alpha * c3}i dans ℂ.`,
          items
        );
      }

      if (vMod === 1) {
        // Moivre, racines n-ièmes & linéarisation
        const k = pickRandom([1, 2, 3]);
        const r = 2 * k; // |z| = 2k, z = k√3 + ki = 2k e^{i pi/6}
        const n = pickRandom([4, 6]);
        const modZn = Math.pow(r, n);
        const modZ3 = Math.pow(r, 3);
        const angleDeg = n === 4 ? 120 : 180;
        const z6 = Math.pow(r, 6);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit z = ${k}√3 + ${k}i. Calcule son module |z|.`,
            questionType: 'numeric',
            correctAnswer: String(r),
            hint: `|z| = √((${k}√3)² + ${k}²).`,
            ruleApplied: 'Module d’un nombre complexe',
            mathExpression: `|z| = √(${3 * k * k} + ${k * k}) = √(${4 * k * k}) = ${r}`,
            explanation: `3k² + k² = 4k², dont la racine est 2k = ${r}.`,
          },
          {
            questionPrompt: `Détermine l'argument principal arg(z) ∈ ]-π ; π] en degrés (donne la valeur numérique en °).`,
            questionType: 'numeric',
            correctAnswer: '30',
            hint: `cos θ = √3/2 et sin θ = 1/2.`,
            ruleApplied: 'Forme trigonométrique',
            mathExpression: `z = ${r}(cos(π/6) + i sin(π/6)) ⇒ 30°`,
            explanation: `cos θ = (${k}√3)/${r} = √3/2 et sin θ = ${k}/${r} = 1/2 ⇒ θ = π/6 = 30°.`,
          },
          {
            questionPrompt: `Quel est l'entier n > 0 minimal tel que z^n soit réel négatif ?`,
            questionType: 'numeric',
            correctAnswer: '6',
            hint: `Il faut n·(π/6) ≡ π [2π].`,
            ruleApplied: 'Formule de Moivre',
            mathExpression: `n·π/6 = π ⇒ n = 6`,
            explanation: `Pour n = 6, l'argument vaut 6×(π/6) = π, donc z⁶ = -${r}⁶ ∈ ℝ⁻*.`,
          },
          {
            questionPrompt: `Calcule la valeur exacte de z⁶ (nombre réel négatif).`,
            questionType: 'numeric',
            correctAnswer: String(-z6),
            hint: `z⁶ = -(|z|)⁶.`,
            ruleApplied: 'Puissance sous forme exponentielle',
            mathExpression: `z⁶ = ${r}⁶ e^{iπ} = -${z6}`,
            explanation: `(${r})⁶ = ${z6} et e^{iπ} = -1, donc z⁶ = -${z6}.`,
          },
          {
            questionPrompt: `Calcule la partie réelle de z³ (rappel : arg(z³) = π/2).`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `3 × (π/6) = π/2.`,
            ruleApplied: 'Formule de Moivre',
            mathExpression: `z³ = ${modZ3} e^{iπ/2} = ${modZ3}i ⇒ Re(z³) = 0`,
            explanation: `z³ est imaginaire pur positif (${modZ3}i), sa partie réelle est 0.`,
          },
          {
            questionPrompt: `Quelle est la partie imaginaire de z³ ?`,
            questionType: 'numeric',
            correctAnswer: String(modZ3),
            hint: `z³ = |z|³ i.`,
            ruleApplied: 'Formule de Moivre',
            mathExpression: `Im(z³) = ${r}³ = ${modZ3}`,
            explanation: `(${r})³ = ${modZ3}.`,
          },
          {
            questionPrompt: `Soit U l'équation Z⁴ = z⁴. Quel est le module commun des 4 racines complexes ?`,
            questionType: 'numeric',
            correctAnswer: String(r),
            hint: `|Z|⁴ = |z|⁴.`,
            ruleApplied: 'Racines n-ièmes d’un complexe',
            mathExpression: `|Z| = |z| = ${r}`,
            explanation: `Toutes les racines quatrièmes ont le même module ${r}.`,
          },
          {
            questionPrompt: `En degré dans [0° ; 360°[, quel est le premier argument de Z⁴ sachant n = 4 donne arg(z⁴) = 4×30° = 120° ?`,
            questionType: 'numeric',
            correctAnswer: String(angleDeg),
            hint: `Multiplie 30° par 4.`,
            ruleApplied: 'Argument d’une puissance',
            mathExpression: `arg(z⁴) = 4 × 30° = 120°`,
            explanation: `La formule de Moivre donne arg(z⁴) = 4×30° = 120° (et z⁴ = ${Math.pow(r, 4)}e^{i2π/3}).`,
          },
          {
            questionPrompt: `Combien vaut la somme des 4 racines de l'équation Z⁴ = ${modZn}e^{i2π/3} ?`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `Les racines forment un carré centré en O.`,
            ruleApplied: 'Somme des racines n-ièmes',
            mathExpression: `∑ Z_k = Z₀(1 + i - 1 - i) = 0`,
            explanation: `La somme des racines n-ièmes d'un nombre complexe (n ≥ 2) est toujours nulle.`,
          },
          {
            questionPrompt: `En linéarisant cos³(x) = a cos(3x) + b cos(x) par les formules d'Euler, calcule 4a + 4b.`,
            questionType: 'numeric',
            correctAnswer: '4',
            hint: `cos³(x) = (cos(3x) + 3cos(x))/4.`,
            ruleApplied: 'Linéarisation par Euler',
            mathExpression: `((e^{ix}+e^{-ix})/2)³ = ¼cos(3x) + ¾cos(x) ⇒ 4(¼+¾) = 4`,
            explanation: `a = 1/4 et b = 3/4 (vérification : en x = 0, cos³(0) = 1 = a + b), donc 4a + 4b = 4.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Moivre, racines n-ièmes et linéarisation trigonométrique`,
          `On considère le nombre complexe z = ${k}√3 + ${k}i et les équations polynomiales associées.`,
          items
        );
      }

      // vMod === 2: Application homographique f(z) = (z - a)/(z - b)
      const a = pickRandom([2, 3, 4]);
      const b = -a; // A(a) et B(-a), symétriques par rapport à O
      const zTest = a + 2; // réel
      const fTest = (zTest - a) / (zTest - b);
      const diam = 2 * a;
      const rad = a;
      const zFixedSq = a; // f(z) = z => z² - (b+1)z + a = 0 => si b = -a, z² + (a-1)z + a = 0; sinon testons z' = (z - a)/(z + a)
      const invProduct = 1; // f(z)·f(-z) wait

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On pose f(z) = (z - ${a}) / (z + ${a}) pour z ≠ -${a}. Calcule l'image f(0).`,
          questionType: 'numeric',
          correctAnswer: '-1',
          hint: `Remplace z par 0.`,
          ruleApplied: 'Évaluation d’une fraction complexe',
          mathExpression: `f(0) = (-${a}) / (+${a}) = -1`,
          explanation: `f(0) = -${a}/${a} = -1.`,
        },
        {
          questionPrompt: `Calcule f(${zTest}).`,
          questionType: 'numeric',
          correctAnswer: fmt(fTest, 3),
          hint: `Numérateur = 2, Dénominateur = ${zTest + a}.`,
          ruleApplied: 'Calcul algébrique',
          mathExpression: `f(${zTest}) = 2 / ${zTest + a} = ${fmt(fTest, 3)}`,
          explanation: `2 / ${zTest + a} ≈ ${fmt(fTest, 3)}.`,
        },
        {
          questionPrompt: `Calcule l'image f(${a}i) de l'imaginaire pur z = ${a}i. Que vaut |f(${a}i)| ?`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `|${a}i - ${a}| = |${a}i + ${a}| = ${a}√2.`,
          ruleApplied: 'Module d’un quotient',
          mathExpression: `|f(${a}i)| = |${a}(i - 1)| / |${a}(i + 1)| = √2 / √2 = 1`,
          explanation: `Tout point de la médiatrice de [AB] (axe imaginaire) est équidistant de A et B, donc |f(z)| = 1.`,
        },
        {
          questionPrompt: `Quelle est l'écriture algébrique simplifiée de f(${a}i) ?`,
          questionType: 'qcm',
          options: ['i', '-i', '1 + i', '1 - i'],
          correctAnswer: 'i',
          hint: `Multiplie (i - 1) par le conjugué (1 - i) au numérateur et dénominateur de (i-1)/(i+1).`,
          ruleApplied: 'Forme algébrique par conjugué',
          mathExpression: `(i - 1)/(i + 1) = (i - 1)(1 - i) / 2 = 2i / 2 = i`,
          explanation: `(${a}i - ${a})/(${a}i + ${a}) = (i - 1)/(i + 1) = i.`,
        },
        {
          questionPrompt: `L'ensemble des points M(z) tels que |f(z)| = 1 est la médiatrice de [AB] avec A(${a}) et B(-${a}). Quelle est son équation cartésienne ?`,
          questionType: 'qcm',
          options: ['x = 0 (axe des ordonnées)', 'y = 0 (axe des abscisses)', `x² + y² = ${a * a}`, `x = ${a}`],
          correctAnswer: 'x = 0 (axe des ordonnées)',
          hint: `MA = MB avec A(${a}, 0) et B(-${a}, 0).`,
          ruleApplied: 'Interprétation géométrique du module',
          mathExpression: `|z - ${a}| = |z + ${a}| ⇔ Re(z) = 0`,
          explanation: `Les points équidistants de (${a}, 0) et (-${a}, 0) forment la droite x = 0.`,
        },
        {
          questionPrompt: `L'ensemble des points M(z) tels que f(z) ∈ iℝ* (imaginaire pur non nul) est le cercle de diamètre [AB] privé de A et B. Quel est son rayon R ?`,
          questionType: 'numeric',
          correctAnswer: String(rad),
          hint: `arg((z - z_A)/(z - z_B)) ≡ π/2 [π] ⇔ MA ⊥ MB.`,
          ruleApplied: 'Lieu géométrique d’un argument',
          mathExpression: `R = AB / 2 = ${diam} / 2 = ${rad}`,
          explanation: `Le cercle de diamètre [AB] centré en O(0) a pour rayon R = ${a}.`,
        },
        {
          questionPrompt: `Quel est le diamètre AB de ce cercle ?`,
          questionType: 'numeric',
          correctAnswer: String(diam),
          hint: `AB = |z_A - z_B|.`,
          ruleApplied: 'Distance entre deux affixes',
          mathExpression: `AB = |${a} - (-${a})| = ${diam}`,
          explanation: `AB = 2×${a} = ${diam}.`,
        },
        {
          questionPrompt: `Quel est l'antécédent z de w = 3 par f (c'est-à-dire f(z) = 3) ?`,
          questionType: 'numeric',
          correctAnswer: String(-2 * a),
          hint: `Résous z - ${a} = 3(z + ${a}).`,
          ruleApplied: 'Inversion homographique',
          mathExpression: `-2z = ${4 * a} ⇒ z = -${2 * a}`,
          explanation: `z - ${a} = 3z + ${3 * a} ⇒ 2z = -${4 * a} ⇒ z = -${2 * a}.`,
        },
        {
          questionPrompt: `Soit M(z) sur le cercle de centre O et de rayon R = ${a} (donc z = ${a}e^{iθ}, θ ≠ π). Calcule la somme des arguments de f(z) si arg(z - ${a}) - arg(z + ${a}) vaut ±π/2. Que vaut cos(π/2) ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          hint: `Un angle droit a un cosinus nul.`,
          ruleApplied: 'Orthogonalité et produit scalaire',
          mathExpression: `cos(±π/2) = 0`,
          explanation: `Sur le cercle de diamètre [AB], l'angle (MB, MA) est droit donc cos(π/2) = 0.`,
        },
        {
          questionPrompt: `Pour z = 2i (ou z = i·y), calcule le produit |f(i·${a}) · f(-i·${a})| (en gardant z ≠ ±${a}).`,
          questionType: 'numeric',
          correctAnswer: String(invProduct),
          hint: `Chaque facteur a pour module 1 car i·${a} et -i·${a} sont sur la médiatrice.`,
          ruleApplied: 'Propriété des points de la médiatrice',
          mathExpression: `|i| · |-i| = 1 × 1 = 1`,
          explanation: `Comme |f(±${a}i)| = 1, le produit des modules vaut 1.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Application homographique f(z) = (z - ${a})/(z + ${a}) et lieux géométriques`,
        `Dans le plan complexe muni du repère (O ; u, v), on place A(${a}) et B(-${a}) et on définit f(z) = (z - ${a}) / (z + ${a}).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 3. COMPLEXES II (GÉOMÉTRIE & TRANSFORMATIONS)
    // -------------------------------------------------------------------------
    case 'mathTc-complexes-geometrie': {
      if (vMod === 0) {
        // Similitude directe z' = (1 + i)z + b => rapport sqrt(2), angle pi/4
        const kSq = 2;
        const p = pickRandom([2, 4, 6]);
        const bRe = -p; // omega = -b/(1+i-1) = -b/i = i*b -> si b = p*i, alors omega = p
        const zOmega = p; // réel pur p ! Vérification: (1+i)p - i*p = p + ip - ip = p !
        const zA = p + 2;
        const zAprimRe = (p + 2) - p; // wait: (1+i)(p+2) - ip = p + 2 + ip + 2i - ip = (p+2) + 2i
        const zAprimIm = 2;
        const distOA = 2;
        const distOAprim = 2 * Math.SQRT2;
        const zB = p + 4; // A_n at step 2: ratio 2
        const dist4 = 2 * Math.pow(Math.SQRT2, 4); // 2 * 4 = 8

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit la transformation S d'écriture complexe z' = (1 + i)z - ${p}i. Quelle est la nature de S ?`,
            questionType: 'qcm',
            options: [
              'Similitude directe de rapport √2 et d’angle π/4',
              'Rotation d’angle π/4',
              'Homothétie de rapport √2',
              'Similitude indirecte de rapport √2',
            ],
            correctAnswer: 'Similitude directe de rapport √2 et d’angle π/4',
            hint: `Calcule |1 + i| et arg(1 + i).`,
            ruleApplied: 'Classification de z’ = az + b',
            mathExpression: `a = 1 + i = √2 e^{iπ/4}`,
            explanation: `z' = az + b avec a = 1 + i ≠ 0 : similitude directe de rapport |a| = √2 et d'angle arg(a) = π/4.`,
          },
          {
            questionPrompt: `Calcule le rapport k² (carré du rapport de similitude).`,
            questionType: 'numeric',
            correctAnswer: String(kSq),
            hint: `k = |1 + i| = √2.`,
            ruleApplied: 'Rapport d’aire d’une similitude',
            mathExpression: `k² = |1 + i|² = 1² + 1² = 2`,
            explanation: `Le rapport vaut √2, donc les aires sont multipliées par k² = 2.`,
          },
          {
            questionPrompt: `Détermine l'affixe réelle ω du centre invariant Ω vérifiant S(Ω) = Ω.`,
            questionType: 'numeric',
            correctAnswer: String(zOmega),
            hint: `Résous (1 + i)ω - ${p}i = ω ⇒ iω = ${p}i.`,
            ruleApplied: 'Recherche du point invariant',
            mathExpression: `iω = ${p}i ⇒ ω = ${p}`,
            explanation: `L'équation ω = (1 + i)ω - ${p}i se simplifie en iω = ${p}i, d'où ω = ${p}.`,
          },
          {
            questionPrompt: `Soit A d'affixe z_A = ${zA}. Calcule la partie réelle de z_A', affixe de A' = S(A).`,
            questionType: 'numeric',
            correctAnswer: String(zAprimRe),
            hint: `(1 + i)(${zA}) - ${p}i.`,
            ruleApplied: 'Image par similitude',
            mathExpression: `z_A' = ${zA} + ${zA}i - ${p}i = ${zA} + 2i`,
            explanation: `z_A' = ${zA} + (${zA} - ${p})i = ${zA} + 2i, de partie réelle ${zA}.`,
          },
          {
            questionPrompt: `Calcule la partie imaginaire de z_A'.`,
            questionType: 'numeric',
            correctAnswer: String(zAprimIm),
            hint: `Coefficient de i dans ${zA} + (${zA} - ${p})i.`,
            ruleApplied: 'Forme algébrique',
            mathExpression: `Im(z_A') = ${zA} - ${p} = 2`,
            explanation: `Im(z_A') = ${zAprimIm}.`,
          },
          {
            questionPrompt: `Calcule la distance ΩA.`,
            questionType: 'numeric',
            correctAnswer: String(distOA),
            hint: `ΩA = |z_A - ω|.`,
            ruleApplied: 'Distance complexe',
            mathExpression: `ΩA = |${zA} - ${p}| = ${distOA}`,
            explanation: `ΩA = |2| = ${distOA}.`,
          },
          {
            questionPrompt: `Calcule la distance ΩA' (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(distOAprim),
            hint: `ΩA' = k · ΩA = √2 × ${distOA}.`,
            ruleApplied: 'Conservation du rapport par similitude',
            mathExpression: `ΩA' = 2√2 ≈ ${fmt(distOAprim)}`,
            explanation: `2√2 ≈ ${fmt(distOAprim)} (ou |${zA} + 2i - ${p}| = |2 + 2i| = 2√2).`,
          },
          {
            questionPrompt: `On pose A₀ = A et A_{n+1} = S(A_n). Quelle est la nature de la transformation S² = S ∘ S ?`,
            questionType: 'qcm',
            options: [
              'Similitude directe de centre Ω, rapport 2 et angle π/2',
              'Translation de vecteur 2i',
              'Symétrie centrale de centre Ω',
              'Homothétie de rapport -2',
            ],
            correctAnswer: 'Similitude directe de centre Ω, rapport 2 et angle π/2',
            hint: `Calcule (1 + i)² = 2i.`,
            ruleApplied: 'Composition de similitudes de même centre',
            mathExpression: `a² = (1 + i)² = 2i = 2e^{iπ/2}`,
            explanation: `Le rapport est (√2)² = 2 et l'angle vaut 2×(π/4) = π/2.`,
          },
          {
            questionPrompt: `Calcule la distance exacte ΩA₄.`,
            questionType: 'numeric',
            correctAnswer: String(dist4),
            hint: `ΩA₄ = (√2)⁴ × ΩA₀ = 4 × 2.`,
            ruleApplied: 'Suite géométrique des distances',
            mathExpression: `ΩA₄ = (√2)⁴ × 2 = 4 × 2 = ${dist4}`,
            explanation: `Après 4 itérations, le rapport est (√2)⁴ = 4, d'où ΩA₄ = 4×2 = ${dist4}.`,
          },
          {
            questionPrompt: `Pour quelles valeurs de n les points Ω, A₀ et A_n sont-ils alignés ?`,
            questionType: 'qcm',
            options: [
              'n multiple de 4',
              'n multiple de 2',
              'n pair non multiple de 4 uniquement',
              'n impair',
            ],
            correctAnswer: 'n multiple de 4',
            hint: `L'angle (ΩA₀, ΩA_n) = n·(π/4) doit être un multiple entier de π.`,
            ruleApplied: 'Alignement par argument modulo π',
            mathExpression: `n·π/4 ≡ 0 [π] ⇔ n ≡ 0 [4]`,
            explanation: `Ω, A₀, A_n sont alignés ssi n·π/4 = kπ, soit n = 4k.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Similitude plane directe S(z) = (1 + i)z - ${p}i et itérations`,
          `Dans le plan complexe, on étudie la transformation S associant à tout point M(z) le point M'(z') tel que z' = (1 + i)z - ${p}i.`,
          items
        );
      }

      if (vMod === 1) {
        // Configuration géométrique : triangle rectangle isocèle & orthocentre
        const k = pickRandom([1, 2, 3]);
        // A(k, k), B(3k, k), C(k, 3k) -> AB = 2k, AC = 2k, rectangle isocèle en A !
        // Circumcenter Omega = midpoint of BC = (2k, 2k)
        // Radius = k*sqrt(2)
        const ab = 2 * k;
        const area = 2 * k * k;
        const rad = k * Math.SQRT2;
        const xOmega = 2 * k;
        const yOmega = 2 * k;
        const xD = 3 * k;
        const yD = 3 * k;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On donne A(${k} + ${k}i), B(${3 * k} + ${k}i) et C(${k} + ${3 * k}i). Calcule Z = (z_C - z_A)/(z_B - z_A).`,
            questionType: 'qcm',
            options: ['i', '-i', '1 + i', '2i'],
            correctAnswer: 'i',
            hint: `z_C - z_A = ${2 * k}i et z_B - z_A = ${2 * k}.`,
            ruleApplied: 'Quotient complexe caractéristique',
            mathExpression: `Z = (${2 * k}i) / (${2 * k}) = i`,
            explanation: `Le numérateur est ${2 * k}i et le dénominateur est ${2 * k}, donc Z = i.`,
          },
          {
            questionPrompt: `Calcule la longueur AB = |z_B - z_A|.`,
            questionType: 'numeric',
            correctAnswer: String(ab),
            hint: `|${3 * k} + ${k}i - (${k} + ${k}i)|.`,
            ruleApplied: 'Distance entre deux points',
            mathExpression: `AB = |${2 * k}| = ${ab}`,
            explanation: `z_B - z_A = ${2 * k}, donc AB = ${ab}.`,
          },
          {
            questionPrompt: `Quelle est la nature exacte du triangle ABC ?`,
            questionType: 'qcm',
            options: [
              'Rectangle isocèle en A',
              'Équilatéral direct',
              'Rectangle isocèle en B',
              'Isocèle non rectangle en A',
            ],
            correctAnswer: 'Rectangle isocèle en A',
            hint: `|Z| = 1 et arg(Z) = π/2.`,
            ruleApplied: 'Caractérisation des triangles par ℂ',
            mathExpression: `(z_C - z_A)/(z_B - z_A) = i ⇒ AC = AB et (AB, AC) = +π/2`,
            explanation: `Z = i implique que C est l'image de B par le quart de tour direct de centre A.`,
          },
          {
            questionPrompt: `Calcule l'aire du triangle ABC.`,
            questionType: 'numeric',
            correctAnswer: String(area),
            hint: `Aire = ½ · AB · AC.`,
            ruleApplied: 'Aire d’un triangle rectangle',
            mathExpression: `Aire = ½ × ${ab} × ${ab} = ${area}`,
            explanation: `½ × (${2 * k})² = ${2 * k * k}.`,
          },
          {
            questionPrompt: `Soit Ω le centre du cercle circonscrit à ABC (milieu de [BC]). Calcule Re(z_Ω).`,
            questionType: 'numeric',
            correctAnswer: String(xOmega),
            hint: `z_Ω = (z_B + z_C)/2.`,
            ruleApplied: 'Cercle circonscrit au triangle rectangle',
            mathExpression: `z_Ω = (${4 * k} + ${4 * k}i)/2 = ${2 * k} + ${2 * k}i`,
            explanation: `Re(z_Ω) = (${3 * k} + ${k})/2 = ${xOmega}.`,
          },
          {
            questionPrompt: `Calcule Im(z_Ω).`,
            questionType: 'numeric',
            correctAnswer: String(yOmega),
            hint: `Im((z_B + z_C)/2).`,
            ruleApplied: 'Affixe du milieu',
            mathExpression: `Im(z_Ω) = (${k} + ${3 * k})/2 = ${yOmega}`,
            explanation: `Im(z_Ω) = ${yOmega}.`,
          },
          {
            questionPrompt: `Calcule le rayon R du cercle circonscrit à ABC (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(rad),
            hint: `R = ΩA = BC / 2.`,
            ruleApplied: 'Rayon du cercle circonscrit',
            mathExpression: `R = |(${2 * k} + ${2 * k}i) - (${k} + ${k}i)| = ${k}√2 ≈ ${fmt(rad)}`,
            explanation: `R = √(${k}² + ${k}²) = ${k}√2 ≈ ${fmt(rad)}.`,
          },
          {
            questionPrompt: `Soit D le point tel que ABDC soit un carré. Calcule l'affixe z_D = z_B + z_C - z_A : que vaut Re(z_D) ?`,
            questionType: 'numeric',
            correctAnswer: String(xD),
            hint: `Vecteur BD = vecteur AC.`,
            ruleApplied: 'Affixe du 4e sommet d’un carré',
            mathExpression: `z_D = (${3 * k}+${k}i) + (${k}+${3 * k}i) - (${k}+${k}i) = ${xD} + ${yD}i`,
            explanation: `Re(z_D) = ${3 * k} + ${k} - ${k} = ${xD}.`,
          },
          {
            questionPrompt: `Pour ce même carré ABDC, l'orthocentre du triangle ABC est le point A. Calcule la distance entre l'orthocentre A et le centre Ω (arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmt(rad),
            hint: `A appartient au cercle circonscrit de centre Ω et de rayon R.`,
            ruleApplied: 'Droite d’Euler et cercle circonscrit',
            mathExpression: `AΩ = R = ${k}√2 ≈ ${fmt(rad)}`,
            explanation: `Dans un triangle rectangle en A, A est l'orthocentre donc AΩ = R ≈ ${fmt(rad)}.`,
          },
          {
            questionPrompt: `Calcule la somme des affixes Re(z_A + z_B + z_C) du triangle ABC.`,
            questionType: 'numeric',
            correctAnswer: String(5 * k),
            hint: `Additionne les abscisses de A, B et C.`,
            ruleApplied: 'Isobarycentre G = (z_A+z_B+z_C)/3',
            mathExpression: `${k} + ${3 * k} + ${k} = ${5 * k}`,
            explanation: `La somme des parties réelles vaut ${5 * k} (soit 3·Re(z_G)).`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Configuration complexe d'un triangle rectangle isocèle & carré ABDC`,
          `Dans le plan complexe, on place A(${k} + ${k}i), B(${3 * k} + ${k}i) et C(${k} + ${3 * k}i).`,
          items
        );
      }

      // vMod === 2: Spirale géométrique complexe z_{n+1} = a z_n + b
      // Choisissons z_{n+1} = (1/2)(1 + i√3) z_n -> rapport 1/2? Wait: |1+i√3| = 2, donc a = (1/4)(1 + i√3) a module 1/2 et angle pi/3 !
      const r0 = pickRandom([8, 16, 32]);
      const aMod = 0.5;
      const z1Abs = r0 * 0.5;
      const z2Abs = r0 * 0.25;
      const seg01 = r0 * Math.sqrt(0.75); // wait: |z1 - z0| = |a - 1| * r0. Or a = 1/4 + i√3/4 => |a - 1| = |-3/4 + i√3/4| = √(9/16 + 3/16) = √(12/16) = √3 / 2
      const seg01Exact = (r0 * Math.sqrt(3)) / 2;
      const limitSum = 2 * seg01Exact; // sum_{n=0}^∞ r0*(√3/2)*(1/2)^n = (r0*√3/2) / (1 - 1/2) = r0*√3

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On définit la suite complexe par z₀ = ${r0} et z_{n+1} = a·z_n avec a = (1 + i√3)/4. Calcule |a|.`,
          questionType: 'numeric',
          correctAnswer: '0.5',
          hint: `|1 + i√3| = √(1 + 3) = 2.`,
          ruleApplied: 'Module d’un nombre complexe',
          mathExpression: `|a| = 2 / 4 = 0,5`,
          explanation: `|1 + i√3| = 2, divisé par 4 donne |a| = 0,5.`,
        },
        {
          questionPrompt: `Détermine l'argument principal de a = (1 + i√3)/4 en degrés.`,
          questionType: 'numeric',
          correctAnswer: '60',
          hint: `cos θ = 1/2 et sin θ = √3/2.`,
          ruleApplied: 'Forme trigonométrique',
          mathExpression: `a = 0,5 e^{iπ/3} ⇒ 60°`,
          explanation: `θ = π/3 rad = 60°.`,
        },
        {
          questionPrompt: `Calcule |z₁| = OM₁.`,
          questionType: 'numeric',
          correctAnswer: fmt(z1Abs),
          hint: `|z₁| = |a|·|z₀|.`,
          ruleApplied: 'Suite géométrique des modules',
          mathExpression: `|z₁| = 0,5 × ${r0} = ${fmt(z1Abs)}`,
          explanation: `|z₁| = ${r0}/2 = ${fmt(z1Abs)}.`,
        },
        {
          questionPrompt: `Calcule |z₂| = OM₂.`,
          questionType: 'numeric',
          correctAnswer: fmt(z2Abs),
          hint: `|z₂| = |a|²·|z₀|.`,
          ruleApplied: 'Terme général d’une suite géométrique',
          mathExpression: `|z₂| = 0,25 × ${r0} = ${fmt(z2Abs)}`,
          explanation: `|z₂| = ${r0}/4 = ${fmt(z2Abs)}.`,
        },
        {
          questionPrompt: `Quelle est la partie réelle de z₃ = a³ z₀ sachant a³ = (0,5)³ e^{iπ} = -1/8 ?`,
          questionType: 'numeric',
          correctAnswer: fmt(-r0 / 8),
          hint: `3 × (π/3) = π, donc z₃ = -(1/8)z₀.`,
          ruleApplied: 'Formule de Moivre',
          mathExpression: `z₃ = -${r0}/8 = ${fmt(-r0 / 8)}`,
          explanation: `z₃ est un réel négatif égal à -${r0}/8 = ${fmt(-r0 / 8)}.`,
        },
        {
          questionPrompt: `Calcule |a - 1| (arrondi à 0,01 près). Rappel : a - 1 = (-3 + i√3)/4.`,
          questionType: 'numeric',
          correctAnswer: fmt(Math.sqrt(3) / 2),
          hint: `√(9 + 3) / 4 = √12 / 4 = √3 / 2.`,
          ruleApplied: 'Module d’une différence',
          mathExpression: `|a - 1| = √(9/16 + 3/16) = √3 / 2 ≈ ${fmt(Math.sqrt(3) / 2)}`,
          explanation: `√(12)/4 = 2√3/4 = √3/2 ≈ ${fmt(Math.sqrt(3) / 2)}.`,
        },
        {
          questionPrompt: `Calcule la longueur du premier segment M₀M₁ = |z₁ - z₀| = |a - 1|·|z₀| (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(seg01Exact),
          hint: `M₀M₁ = ${r0} × √3 / 2.`,
          ruleApplied: 'Longueur d’un pas de spirale',
          mathExpression: `M₀M₁ = ${r0 / 2}√3 ≈ ${fmt(seg01Exact)}`,
          explanation: `M₀M₁ = ${r0 / 2}√3 ≈ ${fmt(seg01Exact)}.`,
        },
        {
          questionPrompt: `Quel est le rapport géométrique q = M_{n+1}M_{n+2} / M_n M_{n+1} ?`,
          questionType: 'numeric',
          correctAnswer: String(aMod),
          hint: `z_{n+2} - z_{n+1} = a(z_{n+1} - z_n).`,
          ruleApplied: 'Raison de la série des longueurs',
          mathExpression: `q = |a| = 0,5`,
          explanation: `Chaque segment est obtenu en multipliant le précédent par |a| = 0,5.`,
        },
        {
          questionPrompt: `Calcule la limite L = lim_{n→+∞} ∑_{k=0}^n M_k M_{k+1} de la ligne brisée (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(limitSum),
          hint: `Somme géométrique infinie M₀M₁ / (1 - 0,5) = 2·M₀M₁.`,
          ruleApplied: 'Somme d’une série géométrique convergente',
          mathExpression: `L = (${r0 / 2}√3) / (1 - 0,5) = ${r0}√3 ≈ ${fmt(limitSum)}`,
          explanation: `La ligne brisée converge vers ${r0}√3 ≈ ${fmt(limitSum)}.`,
        },
        {
          questionPrompt: `À partir de quel entier n la distance OM_n devient-elle inférieure ou égale à 1 ?`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(Math.log2(r0))),
          hint: `Résous ${r0} × (0,5)^n ≤ 1 ⇔ 2^n ≥ ${r0}.`,
          ruleApplied: 'Seuil de convergence exponentielle',
          mathExpression: `2^n ≥ ${r0} ⇒ n = ${Math.round(Math.log2(r0))}`,
          explanation: `Comme ${r0} = 2^${Math.round(Math.log2(r0))}, on atteint OM_n = 1 exactement pour n = ${Math.round(Math.log2(r0))}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Spirale complexe convergente z_{n+1} = (1 + i√3)/4 · z_n`,
        `Dans le plan complexe, on définit la suite (M_n) d'affixes (z_n) par z₀ = ${r0} et z_{n+1} = [(1 + i√3)/4]·z_n.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 4. BARYCENTRE & MATRICES
    // -------------------------------------------------------------------------
    case 'mathTc-barycentre-matrices': {
      if (vMod === 0) {
        // Barycentre G de (A, 2), (B, 3), (C, -1) -> somme = 4
        const k = pickRandom([1, 2, 3]);
        const xA = 0, yA = 0;
        const xB = 4 * k, yB = 0;
        const xC = 0, yC = 4 * k;
        // G = (0 + 12k - 0)/4, (0 + 0 - 4k)/4 => (3k, -k)
        const xG = 3 * k;
        const yG = -k;
        // H barycentre de (A, 2) et (B, 3) => (12k/5, 0) = (2.4k, 0)
        const xH = 2.4 * k;
        // Lieu ||2MA + 3MB - MC|| = ||2MA + 2MC|| => 4 MG = ||4 MI|| (I milieu de [AC] = (0, 2k)) => MG = MI => médiatrice de [GI]
        // Ou ||2MA + 3MB - MC|| = 4*R => MG = R = 2k => cercle de centre G et de rayon 2k
        const radius = 2 * k;
        const distOGSq = xG * xG + yG * yG; // 10k^2
        const distGA = Math.sqrt(distOGSq);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Dans le plan, A(0 ; 0), B(${xB} ; 0), C(0 ; ${yC}). Soit G = bar{(A, 2) ; (B, 3) ; (C, -1)}. Calcule la somme des coefficients.`,
            questionType: 'numeric',
            correctAnswer: '4',
            hint: `Additionne 2 + 3 + (-1).`,
            ruleApplied: 'Existence du barycentre',
            mathExpression: `2 + 3 - 1 = 4 ≠ 0`,
            explanation: `La somme des masses vaut 4 ≠ 0, donc G existe et est unique.`,
          },
          {
            questionPrompt: `Calcule l'abscisse x_G de G.`,
            questionType: 'numeric',
            correctAnswer: String(xG),
            hint: `x_G = (2x_A + 3x_B - x_C) / 4.`,
            ruleApplied: 'Coordonnées du barycentre',
            mathExpression: `x_G = (0 + 3×${xB} - 0) / 4 = ${xG}`,
            explanation: `x_G = ${3 * xB} / 4 = ${xG}.`,
          },
          {
            questionPrompt: `Calcule l'ordonnée y_G de G.`,
            questionType: 'numeric',
            correctAnswer: String(yG),
            hint: `y_G = (2y_A + 3y_B - y_C) / 4.`,
            ruleApplied: 'Coordonnées du barycentre',
            mathExpression: `y_G = (0 + 0 - ${yC}) / 4 = ${yG}`,
            explanation: `y_G = -${yC} / 4 = ${yG}.`,
          },
          {
            questionPrompt: `Soit H = bar{(A, 2) ; (B, 3)}. Calcule l'abscisse x_H.`,
            questionType: 'numeric',
            correctAnswer: fmt(xH),
            hint: `x_H = (2×0 + 3×${xB}) / 5.`,
            ruleApplied: 'Barycentre partiel',
            mathExpression: `x_H = ${3 * xB} / 5 = ${fmt(xH)}`,
            explanation: `H appartient à [AB] et x_H = ${fmt(xH)}.`,
          },
          {
            questionPrompt: `Par associativité du barycentre, G est le barycentre de (H, α) et (C, -1). Que vaut α ?`,
            questionType: 'numeric',
            correctAnswer: '5',
            hint: `α est la somme des masses de A et B.`,
            ruleApplied: 'Théorème d’associativité',
            mathExpression: `α = 2 + 3 = 5`,
            explanation: `On remplace {(A,2),(B,3)} par {(H, 5)}, d'où G = bar{(H, 5) ; (C, -1)}.`,
          },
          {
            questionPrompt: `Quel alignement l'associativité démontre-t-elle immédiatement ?`,
            questionType: 'qcm',
            options: [
              'G, H et C sont alignés',
              'G, A et B sont alignés',
              'H est le milieu de [GC]',
              'G appartient à (AB)',
            ],
            correctAnswer: 'G, H et C sont alignés',
            hint: `Le barycentre de deux points appartient à la droite qui les relie.`,
            ruleApplied: 'Alignement par associativité',
            mathExpression: `G ∈ (HC)`,
            explanation: `G = bar{(H, 5) ; (C, -1)} ⇒ les vecteurs HG et HC sont colinéaires.`,
          },
          {
            questionPrompt: `Réduis la somme vectorielle 2MA + 3MB - MC.`,
            questionType: 'qcm',
            options: ['4 MG', '6 MG', '4 GM', '2 MG'],
            correctAnswer: '4 MG',
            hint: `∑ α_i MA_i = (∑ α_i) MG.`,
            ruleApplied: 'Formule de réduction vectorielle',
            mathExpression: `2MA + 3MB - MC = (2 + 3 - 1)MG = 4MG`,
            explanation: `La somme des coefficients est 4, d'où 4 MG.`,
          },
          {
            questionPrompt: `Détermine le rayon R du lieu géométrique des points M vérifiant ||2MA + 3MB - MC|| = ${4 * radius}.`,
            questionType: 'numeric',
            correctAnswer: String(radius),
            hint: `4 MG = ${4 * radius} ⇒ MG = ?`,
            ruleApplied: 'Lieu géométrique ||∑ α_i MA_i|| = k',
            mathExpression: `4 MG = ${4 * radius} ⇒ MG = ${radius}`,
            explanation: `L'ensemble des points M est le cercle de centre G et de rayon R = ${radius}.`,
          },
          {
            questionPrompt: `Calcule la distance carrée AG² = x_G² + y_G².`,
            questionType: 'numeric',
            correctAnswer: String(distOGSq),
            hint: `A est à l'origine (0 ; 0).`,
            ruleApplied: 'Distance euclidienne',
            mathExpression: `AG² = (${xG})² + (${yG})² = ${xG * xG} + ${yG * yG} = ${distOGSq}`,
            explanation: `AG² = ${distOGSq} (donc AG ≈ ${fmt(distGA)}).`,
          },
          {
            questionPrompt: `On souhaite modifier la masse de C en m pour que le barycentre n'existe plus. Quelle valeur m faut-il choisir ?`,
            questionType: 'numeric',
            correctAnswer: '-5',
            hint: `Il faut 2 + 3 + m = 0.`,
            ruleApplied: 'Condition de non-existence',
            mathExpression: `5 + m = 0 ⇒ m = -5`,
            explanation: `Pour m = -5, la somme des coefficients s'annule et 2MA + 3MB - 5MC est un vecteur constant non nul.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Barycentre pondéré, associativité et lieux vectoriels`,
          `Dans le repère orthonormé, on considère A(0 ; 0), B(${xB} ; 0), C(0 ; ${yC}) et G = bar{(A, 2) ; (B, 3) ; (C, -1)}.`,
          items
        );
      }

      if (vMod === 1) {
        // Matrice 2x2 A à valeurs propres entières distinctes l1 et l2
        // Exemple propre : A = [[l1, 1], [0, l2]] ou M = [[2, 1], [1, 2]] (l1=3, l2=1)
        const a = pickRandom([2, 3, 4]);
        // A = [[a, 1], [1, a]] -> valeurs propres l1 = a+1, l2 = a-1 !
        const l1 = a + 1;
        const l2 = a - 1;
        const trA = 2 * a;
        const detA = a * a - 1;
        // A^2 = [[a^2+1, 2a], [2a, a^2+1]]
        const a2_11 = a * a + 1;
        const a2_12 = 2 * a;
        // A^n : coeff diagonal u_n = ((a+1)^n + (a-1)^n)/2, hors-diag v_n = ((a+1)^n - (a-1)^n)/2
        const u3 = (Math.pow(l1, 3) + Math.pow(l2, 3)) / 2;
        const v3 = (Math.pow(l1, 3) - Math.pow(l2, 3)) / 2;
        const b1 = l1 + l2; // Pour AX = [1, 1]^T => X = [1/l1, 1/l1]? No, A*[1,1]^T = (a+1)*[1,1]^T => pour B = [l1, l1]^T, X = [1, 1]^T
        const sumInv = 2 * a / detA; // wait

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit la matrice carrée A = [[${a}, 1], [1, ${a}]]. Calcule sa trace tr(A).`,
            questionType: 'numeric',
            correctAnswer: String(trA),
            hint: `Somme des éléments diagonaux.`,
            ruleApplied: 'Trace d’une matrice',
            mathExpression: `tr(A) = ${a} + ${a} = ${trA}`,
            explanation: `tr(A) = a₁₁ + a₂₂ = ${trA}.`,
          },
          {
            questionPrompt: `Calcule le déterminant det(A).`,
            questionType: 'numeric',
            correctAnswer: String(detA),
            hint: `det(A) = a₁₁a₂₂ - a₁₂a₂₁.`,
            ruleApplied: 'Déterminant d’ordre 2',
            mathExpression: `det(A) = ${a}² - 1² = ${detA}`,
            explanation: `det(A) = ${detA} ≠ 0, donc A est inversible.`,
          },
          {
            questionPrompt: `Calcule le coefficient (A²)₁₁ en ligne 1, colonne 1 de A².`,
            questionType: 'numeric',
            correctAnswer: String(a2_11),
            hint: `Effectue le produit de la ligne 1 par la colonne 1.`,
            ruleApplied: 'Produit matriciel',
            mathExpression: `(A²)₁₁ = ${a}×${a} + 1×1 = ${a2_11}`,
            explanation: `${a * a} + 1 = ${a2_11}.`,
          },
          {
            questionPrompt: `Calcule le coefficient (A²)₁₂ de A².`,
            questionType: 'numeric',
            correctAnswer: String(a2_12),
            hint: `Ligne 1 × Colonne 2.`,
            ruleApplied: 'Produit matriciel',
            mathExpression: `(A²)₁₂ = ${a}×1 + 1×${a} = ${a2_12}`,
            explanation: `(A²)₁₂ = ${a2_12}.`,
          },
          {
            questionPrompt: `Par le théorème de Cayley-Hamilton, A² - p·A + q·I₂ = 0. Que vaut p ?`,
            questionType: 'numeric',
            correctAnswer: String(trA),
            hint: `p = tr(A) et q = det(A).`,
            ruleApplied: 'Polynôme caractéristique / Cayley-Hamilton',
            mathExpression: `A² - ${trA}A + ${detA}I₂ = 0`,
            explanation: `On vérifie que ${a2_11} - ${trA}×${a} + ${detA} = 0, donc p = tr(A) = ${trA}.`,
          },
          {
            questionPrompt: `En utilisant A(A - ${trA}I₂) = -${detA}I₂, détermine le coefficient (1, 1) de ${detA}·A⁻¹.`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `A⁻¹ = (1/det(A)) × [[${a}, -1], [-1, ${a}]].`,
            ruleApplied: 'Inverse d’une matrice 2×2',
            mathExpression: `${detA}·A⁻¹ = [[${a}, -1], [-1, ${a}]]`,
            explanation: `Le coefficient (1, 1) de la comatrice transposée vaut ${a}.`,
          },
          {
            questionPrompt: `Résous AX = Y avec Y = (${l1} ; ${l1})ᵀ. Quelle est la première composante x de X ?`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `(${l1}) est un vecteur propre associé à ${a} + 1 = ${l1}.`,
            ruleApplied: 'Système linéaire AX = Y',
            mathExpression: `A(1 ; 1)ᵀ = (${a + 1} ; ${a + 1})ᵀ`,
            explanation: `x = 1 et y = 1 vérifient ${a}(1) + 1 = ${l1}.`,
          },
          {
            questionPrompt: `Calcule la plus grande valeur propre λ₁ = ${a} + 1 (somme de la 1re ligne).`,
            questionType: 'numeric',
            correctAnswer: String(l1),
            hint: `Racine de λ² - ${trA}λ + ${detA} = 0.`,
            ruleApplied: 'Valeurs propres de A',
            mathExpression: `λ₁ = ${a} + 1 = ${l1}`,
            explanation: `Les deux racines sont λ₁ = ${l1} et λ₂ = ${l2}.`,
          },
          {
            questionPrompt: `Pour A³ = [[u₃, v₃], [v₃, u₃]], on a u₃ = (${l1}³ + ${l2}³)/2. Calcule u₃.`,
            questionType: 'numeric',
            correctAnswer: String(u3),
            hint: `Calcule (${l1}³ + ${l2}³)/2.`,
            ruleApplied: 'Puissance n-ième par diagonalisation',
            mathExpression: `u₃ = (${Math.pow(l1, 3)} + ${Math.pow(l2, 3)}) / 2 = ${u3}`,
            explanation: `En base propre, A^n a pour terme diagonal (${l1}^n + ${l2}^n)/2 = ${u3} pour n = 3.`,
          },
          {
            questionPrompt: `Calcule v₃ = (${l1}³ - ${l2}³)/2 (terme hors-diagonal de A³).`,
            questionType: 'numeric',
            correctAnswer: String(v3),
            hint: `Calcule (${Math.pow(l1, 3)} - ${Math.pow(l2, 3)})/2.`,
            ruleApplied: 'Puissance n-ième par diagonalisation',
            mathExpression: `v₃ = (${Math.pow(l1, 3)} - ${Math.pow(l2, 3)}) / 2 = ${v3}`,
            explanation: `v₃ = ${v3} (vérifie u₃² - v₃² = det(A)³ = ${detA ** 3}).`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Matrice A = [[${a}, 1], [1, ${a}]], polynôme annulateur et calcul de Aⁿ`,
          `On considère la matrice symétrique A = [[${a}, 1], [1, ${a}]] et l'endomorphisme associé.`,
          items
        );
      }

      // vMod === 2: Chaîne de Markov matricielle à 2 états
      // M = [[0.8, 0.3], [0.2, 0.7]] ou [[0.7, 0.2], [0.3, 0.8]]
      const p = pickRandom([0.2, 0.3]);
      const q = pickRandom([0.3, 0.4]);
      const a11 = Number((1 - p).toFixed(2));
      const a22 = Number((1 - q).toFixed(2));
      const rEigen = Number((1 - p - q).toFixed(2));
      const detM = Number((a11 * a22 - p * q).toFixed(4)); // = 1 - p - q
      const pi1 = q / (p + q);
      const pi2 = p / (p + q);
      const x1 = Number((a11 * 1 + q * 0).toFixed(2)); // start X0 = [1, 0]^T
      const x2 = Number((a11 * x1 + q * p).toFixed(4));

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Une population évolue selon X_{n+1} = M X_n avec M = [[${a11}, ${q}], [${p}, ${a22}]]. Vérifie la somme de la 1re colonne.`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `Additionne ${a11} + ${p}.`,
          ruleApplied: 'Matrice stochastique en colonne',
          mathExpression: `${a11} + ${p} = 1`,
          explanation: `Chaque colonne somme à 1, donc l'effectif total est conservé.`,
        },
        {
          questionPrompt: `Partant de X₀ = (1 ; 0)ᵀ, calcule la proportion x₁ en état 1 à l'étape n = 1.`,
          questionType: 'numeric',
          correctAnswer: fmt(x1),
          hint: `Effectue M × (1 ; 0)ᵀ.`,
          ruleApplied: 'Produit matrice-vecteur',
          mathExpression: `x₁ = ${a11}×1 + ${q}×0 = ${fmt(x1)}`,
          explanation: `x₁ = ${fmt(x1)} et y₁ = ${p}.`,
        },
        {
          questionPrompt: `Calcule x₂ = ${a11}·x₁ + ${q}·y₁ (avec y₁ = ${p}).`,
          questionType: 'numeric',
          correctAnswer: fmt(x2, 3),
          hint: `${a11}×${x1} + ${q}×${p}.`,
          ruleApplied: 'Relation de récurrence matricielle',
          mathExpression: `x₂ = ${fmt(a11 * x1, 4)} + ${fmt(q * p, 4)} = ${fmt(x2, 3)}`,
          explanation: `x₂ = ${fmt(x2, 3)}.`,
        },
        {
          questionPrompt: `Calcule la trace tr(M) = ${a11} + ${a22}.`,
          questionType: 'numeric',
          correctAnswer: fmt(a11 + a22),
          hint: `Somme de la diagonale.`,
          ruleApplied: 'Trace d’une matrice',
          mathExpression: `tr(M) = ${a11} + ${a22} = ${fmt(a11 + a22)}`,
          explanation: `tr(M) = ${fmt(a11 + a22)}.`,
        },
        {
          questionPrompt: `Calcule le déterminant det(M) = ${a11}×${a22} - ${p}×${q}.`,
          questionType: 'numeric',
          correctAnswer: fmt(detM),
          hint: `det(M) vaut aussi 1 - p - q.`,
          ruleApplied: 'Déterminant 2×2',
          mathExpression: `det(M) = 1 - ${p} - ${q} = ${fmt(detM)}`,
          explanation: `det(M) = ${fmt(detM)} (c'est aussi la seconde valeur propre).`,
        },
        {
          questionPrompt: `Quelle relation exprime x_{n+1} uniquement en fonction de x_n (sachant y_n = 1 - x_n) ?`,
          questionType: 'qcm',
          options: [
            `x_{n+1} = ${fmt(rEigen)}·x_n + ${q}`,
            `x_{n+1} = ${a11}·x_n + ${p}`,
            `x_{n+1} = ${fmt(rEigen)}·x_n + ${p}`,
            `x_{n+1} = ${a22}·x_n + ${q}`,
          ],
          correctAnswer: `x_{n+1} = ${fmt(rEigen)}·x_n + ${q}`,
          hint: `Remplace y_n par (1 - x_n) dans ${a11}x_n + ${q}y_n.`,
          ruleApplied: 'Récurrence arithmético-géométrique',
          mathExpression: `${a11}x_n + ${q}(1 - x_n) = (${a11} - ${q})x_n + ${q}`,
          explanation: `On obtient x_{n+1} = ${fmt(rEigen)}x_n + ${q}.`,
        },
        {
          questionPrompt: `Calcule la limite stationnaire π₁ = lim x_n lorsque n → +∞ (arrondie à 0,01).`,
          questionType: 'numeric',
          correctAnswer: fmt(pi1),
          hint: `Point fixe π₁ = ${fmt(rEigen)}π₁ + ${q} ⇒ π₁ = ${q} / (${p} + ${q}).`,
          ruleApplied: 'État stationnaire d’une chaîne de Markov',
          mathExpression: `π₁ = ${q} / (${p} + ${q}) = ${fmt(pi1)}`,
          explanation: `Comme |${fmt(rEigen)}| < 1, x_n converge vers π₁ = ${fmt(pi1)}.`,
        },
        {
          questionPrompt: `Calcule la limite stationnaire associée π₂ = 1 - π₁ (arrondie à 0,01).`,
          questionType: 'numeric',
          correctAnswer: fmt(pi2),
          hint: `π₂ = ${p} / (${p} + ${q}).`,
          ruleApplied: 'Conservation de la masse totale',
          mathExpression: `π₂ = 1 - ${fmt(pi1)} = ${fmt(pi2)}`,
          explanation: `π₂ = ${fmt(pi2)}.`,
        },
        {
          questionPrompt: `Quelle est la raison géométrique r = ${a11} - ${q} de la suite auxiliaire u_n = x_n - π₁ ?`,
          questionType: 'numeric',
          correctAnswer: fmt(rEigen),
          hint: `r = 1 - p - q.`,
          ruleApplied: 'Suite géométrique associée',
          mathExpression: `u_{n+1} = ${fmt(rEigen)} u_n`,
          explanation: `Le taux de contraction à chaque étape est r = ${fmt(rEigen)}.`,
        },
        {
          questionPrompt: `Calcule l'écart initial |u₀| = |x₀ - π₁| = |1 - π₁| (arrondi à 0,01).`,
          questionType: 'numeric',
          correctAnswer: fmt(Math.abs(1 - pi1)),
          hint: `1 - π₁ = π₂.`,
          ruleApplied: 'Majoration de l’erreur de convergence',
          mathExpression: `|x₀ - π₁| = ${fmt(Math.abs(1 - pi1))}`,
          explanation: `L'écart initial vaut ${fmt(Math.abs(1 - pi1))}, puis décroît en (${fmt(rEigen)})ⁿ.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Chaîne de Markov matricielle 2×2 et état stationnaire`,
        `On modélise une dynamique entre deux états par X_{n+1} = M·X_n avec M = [[${a11}, ${q}], [${p}, ${a22}]] et X₀ = (1 ; 0)ᵀ.`,
        items
      );
    }

    default:
      return null;
  }
}
