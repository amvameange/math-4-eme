import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom, randInt } from './types';
import { assembleHardMathExercise, fmt, HardQuestionSpec } from './tcHardMathHelpers';

export function generateHardMathCh9to11(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 9. CALCUL INTÉGRAL
    // -------------------------------------------------------------------------
    case 'mathTc-calcul-integral': {
      if (vMod === 0) {
        // I_n = int_0^1 x^n e^{ax} dx ou int_1^e x^k ln(x) dx -> Prenons J_n = int_0^1 x^n e^x dx avec paramètre multiplicateur c
        const c = pickRandom([1, 2, 3]);
        // J_0 = c*(e - 1)
        const eVal = Math.E;
        const J0 = c * (eVal - 1);
        // Par IPP : J_{n+1} = c*e - (n+1) J_n
        // J_1 = c*e - J_0 = c
        const J1 = c;
        // J_2 = c*e - 2*J_1 = c*(e - 2)
        const J2 = c * (eVal - 2);
        // J_3 = c*e - 3*J_2 = c*(6 - 2e)
        const J3 = c * (6 - 2 * eVal);
        // Moyenne de f(x) = c*x*e^x sur [0, 1] = J_1 = c
        // Encadrement : 0 <= x^n e^x <= e * x^n => 0 <= J_n <= c*e/(n+1)

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On pose J_n = ∫₀¹ ${c}xⁿ eˣ dx pour tout n ∈ ℕ. Calcule J₀ arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(J0),
            hint: `Une primitive de ${c}eˣ est ${c}eˣ.`,
            ruleApplied: 'Intégrale d’une exponentielle',
            mathExpression: `J₀ = [${c}eˣ]₀¹ = ${c}(e - 1) ≈ ${fmt(J0)}`,
            explanation: `J₀ = ${c}(e - 1) ≈ ${fmt(J0)}.`,
          },
          {
            questionPrompt: `Par intégration par parties (u = x^{n+1}, v' = eˣ), quelle relation relie J_{n+1} à J_n ?`,
            questionType: 'qcm',
            options: [
              `J_{n+1} = ${c}e - (n + 1)J_n`,
              `J_{n+1} = ${c}e + (n + 1)J_n`,
              `J_{n+1} = ${c} - n J_n`,
              `J_{n+1} = (n + 1)J_n - ${c}e`,
            ],
            correctAnswer: `J_{n+1} = ${c}e - (n + 1)J_n`,
            hint: `[x^{n+1}·${c}eˣ]₀¹ - ∫₀¹ (n+1)xⁿ·${c}eˣ dx.`,
            ruleApplied: 'Intégration par parties (IPP)',
            mathExpression: `J_{n+1} = ${c}e - (n + 1)J_n`,
            explanation: `Le terme tout intégré vaut ${c}e - 0 = ${c}e et l'intégrale restante est (n+1)J_n.`,
          },
          {
            questionPrompt: `Déduis-en la valeur exacte de J₁ = ${c}e - J₀.`,
            questionType: 'numeric',
            correctAnswer: String(J1),
            hint: `${c}e - ${c}(e - 1).`,
            ruleApplied: 'Calcul exact par récurrence',
            mathExpression: `J₁ = ${c}e - ${c}(e - 1) = ${c}`,
            explanation: `Les termes en e s'annulent : J₁ = ${c}.`,
          },
          {
            questionPrompt: `Calcule J₂ = ${c}e - 2J₁ arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(J2),
            hint: `${c}(e - 2).`,
            ruleApplied: 'Relation de récurrence',
            mathExpression: `J₂ = ${c}e - ${2 * c} ≈ ${fmt(J2)}`,
            explanation: `J₂ = ${c}(e - 2) ≈ ${fmt(J2)}.`,
          },
          {
            questionPrompt: `Calcule J₃ = ${c}e - 3J₂ arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(J3),
            hint: `${c}(6 - 2e).`,
            ruleApplied: 'Itération de l’IPP',
            mathExpression: `J₃ = ${c}e - 3·${c}(e - 2) = ${c}(6 - 2e) ≈ ${fmt(J3)}`,
            explanation: `J₃ ≈ ${fmt(J3)}.`,
          },
          {
            questionPrompt: `Quelle est la valeur moyenne μ de f(x) = ${c}x eˣ sur [0 ; 1] ?`,
            questionType: 'numeric',
            correctAnswer: String(J1),
            hint: `μ = (1/(1 - 0)) ∫₀¹ f(x) dx = J₁.`,
            ruleApplied: 'Valeur moyenne d’une fonction continue',
            mathExpression: `μ = J₁ / 1 = ${J1}`,
            explanation: `Sur un intervalle de longueur 1, la valeur moyenne est égale à J₁ = ${J1}.`,
          },
          {
            questionPrompt: `Quel est le sens de variation de la suite (J_n) ?`,
            questionType: 'qcm',
            options: [
              'Décroissante car x^{n+1} ≤ xⁿ sur [0 ; 1] et eˣ > 0',
              'Croissante car eˣ > 1',
              'Constante égale à ' + c,
              'Alternée de signe',
            ],
            correctAnswer: 'Décroissante car x^{n+1} ≤ xⁿ sur [0 ; 1] et eˣ > 0',
            hint: `Compare x^{n+1}eˣ et xⁿeˣ pour x ∈ [0 ; 1].`,
            ruleApplied: 'Positivité et croissance de l’intégrale',
            mathExpression: `∀x ∈ [0 ; 1], 0 ≤ x^{n+1}eˣ ≤ xⁿeˣ ⇒ 0 ≤ J_{n+1} ≤ J_n`,
            explanation: `Sur [0 ; 1], multiplier par x diminue la fonction positive, donc (J_n) est décroissante.`,
          },
          {
            questionPrompt: `En utilisant 1 ≤ eˣ ≤ e sur [0 ; 1], on obtient l'encadrement ${c}/(n+1) ≤ J_n ≤ ${c}e/(n+1). Calcule le majorant pour n = 9 (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt((c * eVal) / 10),
            hint: `${c}e / 10.`,
            ruleApplied: 'Inégalité de la moyenne',
            mathExpression: `J₉ ≤ ${c}e / 10 ≈ ${fmt((c * eVal) / 10)}`,
            explanation: `Le majorant vaut ${fmt((c * eVal) / 10)}.`,
          },
          {
            questionPrompt: `Déduis-en lim_{n → +∞} J_n.`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `Applique le théorème des gendarmes à 0 ≤ J_n ≤ ${c}e/(n+1).`,
            ruleApplied: 'Convergence par encadrement',
            mathExpression: `lim_{n→+∞} J_n = 0`,
            explanation: `Les bornes tendent vers 0, donc lim J_n = 0.`,
          },
          {
            questionPrompt: `Calcule lim_{n → +∞} (n + 1)·J_n grâce à J_{n+1} = ${c}e - (n+1)J_n sachant que J_{n+1} → 0.`,
            questionType: 'numeric',
            correctAnswer: fmt(c * eVal),
            hint: `(n+1)J_n = ${c}e - J_{n+1}.`,
            ruleApplied: 'Équivalent asymptotique d’une suite intégrale',
            mathExpression: `lim (n+1)J_n = ${c}e - 0 = ${fmt(c * eVal)}`,
            explanation: `Ainsi J_n ~ ${c}e / n quand n → +∞ (≈ ${fmt(c * eVal)}/n).`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Suite d'intégrales par IPP J_n = ∫₀¹ ${c}xⁿeˣ dx et équivalent`,
          `On définit la suite d'intégrales (J_n) par J_n = ∫₀¹ ${c}xⁿ eˣ dx pour tout entier naturel n.`,
          items
        );
      }

      if (vMod === 1) {
        // Aire entre parabole y = k*x*(a - x) et droite y = 0 (ou y = x) + volume de révolution
        const a = pickRandom([2, 3, 4]);
        const k = pickRandom([1, 2]);
        // f(x) = k*x*(a - x) = k*a*x - k*x^2 sur [0 ; a]
        // Aire = int_0^a (k*a*x - k*x^2) dx = k * [a*a^2/2 - a^3/3] = k * a^3 / 6
        const area = (k * Math.pow(a, 3)) / 6;
        // Max en x = a/2 : f(a/2) = k*a^2/4
        const maxY = (k * a * a) / 4;
        // Moyenne sur [0 ; a] = area / a = k*a^2/6
        const avg = (k * a * a) / 6;
        // Volume de révolution autour de (Ox) : V = pi * int_0^a k^2 x^2 (a - x)^2 dx
        // x^2 (a^2 - 2ax + x^2) = a^2 x^2 - 2a x^3 + x^4 -> int_0^a = a^5/3 - a^5/2 + a^5/5 = a^5 * (10 - 15 + 6)/30 = a^5 / 30 !
        const volOverPi = (k * k * Math.pow(a, 5)) / 30;
        const vol = Math.PI * volOverPi;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = ${k === 1 ? '' : k}x(${a} - x) sur [0 ; ${a}]. Quelle est la plus grande abscisse d'intersection entre C_f et l'axe des abscisses ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `Résous x(${a} - x) = 0.`,
            ruleApplied: 'Intersection avec l’axe (Ox)',
            mathExpression: `f(x) = 0 ⇔ x = 0 ou x = ${a}`,
            explanation: `La parabole coupe (Ox) en 0 et en ${a}.`,
          },
          {
            questionPrompt: `Quelle est l'abscisse du sommet de la parabole (maximum de f sur [0 ; ${a}]) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(a / 2),
            hint: `Par symétrie ou via f'(x) = ${k * a} - ${2 * k}x = 0.`,
            ruleApplied: 'Extremum sur un intervalle',
            mathExpression: `x_S = ${a} / 2 = ${fmt(a / 2)}`,
            explanation: `Le sommet est au milieu ${fmt(a / 2)}.`,
          },
          {
            questionPrompt: `Calcule la hauteur maximale f(${fmt(a / 2)}).`,
            questionType: 'numeric',
            correctAnswer: fmt(maxY),
            hint: `${k} × (${a}/2) × (${a}/2).`,
            ruleApplied: 'Évaluation du maximum',
            mathExpression: `f(${fmt(a / 2)}) = ${k}×${a * a}/4 = ${fmt(maxY)}`,
            explanation: `Le sommet a pour ordonnée ${fmt(maxY)}.`,
          },
          {
            questionPrompt: `Calcule l'aire exacte A = ∫₀^${a} ${k === 1 ? '' : k}x(${a} - x) dx (arrondie à 0,01 près si non entière).`,
            questionType: 'numeric',
            correctAnswer: fmt(area),
            hint: `Primitive : ${k}(${a}x²/2 - x³/3) ➔ résultat = ${k}×${a}³/6.`,
            ruleApplied: 'Aire sous une courbe positive',
            mathExpression: `A = ${k} × ${Math.pow(a, 3)} / 6 = ${fmt(area)}`,
            explanation: `A = ${fmt(area)} unités d'aire.`,
          },
          {
            questionPrompt: `Calcule la valeur moyenne μ de f sur [0 ; ${a}] (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(avg),
            hint: `μ = A / ${a}.`,
            ruleApplied: 'Valeur moyenne d’une fonction',
            mathExpression: `μ = ${fmt(area)} / ${a} = ${fmt(avg)}`,
            explanation: `La valeur moyenne vaut ${k}×${a}²/6 ≈ ${fmt(avg)}.`,
          },
          {
            questionPrompt: `Quel rapport μ / f_max existe-t-il pour toute arche de parabole (ici ${fmt(avg)} / ${fmt(maxY)}) ? (arrondi à 0,01)`,
            questionType: 'numeric',
            correctAnswer: fmt(2 / 3),
            hint: `Théorème d'Archimède : l'aire d'un segment parabolique vaut 2/3 du rectangle circonscrit.`,
            ruleApplied: 'Quadrature de la parabole (Archimède)',
            mathExpression: `(${k}a²/6) / (${k}a²/4) = 2/3 ≈ 0,67`,
            explanation: `Le rapport est toujours 2/3 ≈ 0,67.`,
          },
          {
            questionPrompt: `On développe [f(x)]² = ${k * k}(${a * a}x² - ${2 * a}x³ + x⁴). Que vaut la primitive de x⁴ évaluée entre 0 et ${a} ?`,
            questionType: 'numeric',
            correctAnswer: fmt(Math.pow(a, 5) / 5),
            hint: `[x⁵ / 5]₀^${a}.`,
            ruleApplied: 'Primitive d’un monôme',
            mathExpression: `${a}⁵ / 5 = ${Math.pow(a, 5)} / 5 = ${fmt(Math.pow(a, 5) / 5)}`,
            explanation: `L'intégrale de x⁴ vaut ${fmt(Math.pow(a, 5) / 5)}.`,
          },
          {
            questionPrompt: `Calcule ∫₀^${a} [f(x)]² dx = ${k * k} × ${a}⁵ / 30 (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(volOverPi),
            hint: `1/3 - 1/2 + 1/5 = 1/30.`,
            ruleApplied: 'Intégrale d’un carré polynomial',
            mathExpression: `∫₀^${a} [f(x)]² dx = ${k * k}×${Math.pow(a, 5)}/30 = ${fmt(volOverPi)}`,
            explanation: `V / π = ${fmt(volOverPi)}.`,
          },
          {
            questionPrompt: `En déduire le volume V = π ∫₀^${a} [f(x)]² dx engendré par rotation autour de (Ox) (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(vol),
            hint: `Multiplie ${fmt(volOverPi)} par π.`,
            ruleApplied: 'Volume d’un solide de révolution',
            mathExpression: `V = π × ${fmt(volOverPi)} ≈ ${fmt(vol)}`,
            explanation: `V ≈ ${fmt(vol)} unités de volume.`,
          },
          {
            questionPrompt: `Soit g(x) = f(x) + 1. De combien augmente l'aire sous la courbe sur [0 ; ${a}] ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `∫₀^${a} 1 dx.`,
            ruleApplied: 'Linéarité de l’intégrale',
            mathExpression: `∫₀^${a} [f(x) + 1] dx - ∫₀^${a} f(x) dx = ${a}`,
            explanation: `Ajouter 1 sur un intervalle de longueur ${a} augmente l'aire de ${a}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Aire parabolique, théorème d'Archimède et volume de révolution`,
          `On considère l'arche de parabole définie par f(x) = ${k === 1 ? '' : k}x(${a} - x) pour x ∈ [0 ; ${a}].`,
          items
        );
      }

      // vMod === 2: Changement de variable / trigonométrie & fractions rationnelles
      const m = pickRandom([2, 3, 4]);
      // W_m = int_0^{pi/2} cos(x) * sin^m(x) dx = 1 / (m + 1)
      const wm = 1 / (m + 1);
      // I = int_0^1 (2x) / (x^2 + 1) dx = ln(2)
      // K = int_0^{pi/2} sin^2(x) dx = pi / 4
      const ln2 = Math.LN2;
      const ln5 = Math.log(5);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Calcule I = ∫₀^{π/2} cos(x)·sin^${m}(x) dx (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(wm, 3),
          hint: `Forme u' · u^${m} avec u(x) = sin(x).`,
          ruleApplied: 'Primitive de u’ uⁿ',
          mathExpression: `[sin^{${m + 1}}(x)/(${m + 1})]₀^{π/2} = 1/${m + 1} ≈ ${fmt(wm, 3)}`,
          explanation: `En posant u = sin(x), on intègre u^${m} entre 0 et 1, d'où 1/${m + 1} ≈ ${fmt(wm, 3)}.`,
        },
        {
          questionPrompt: `À l'aide de la linéarisation sin²(x) = (1 - cos(2x))/2, calcule K = ∫₀^{π/2} sin²(x) dx (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(Math.PI / 4, 3),
          hint: `∫₀^{π/2} cos(2x) dx = 0.`,
          ruleApplied: 'Intégration par linéarisation',
          mathExpression: `K = [x/2 - sin(2x)/4]₀^{π/2} = π/4 ≈ ${fmt(Math.PI / 4, 3)}`,
          explanation: `K = π/4 ≈ ${fmt(Math.PI / 4, 3)}.`,
        },
        {
          questionPrompt: `Quelle relation relie ∫₀^{π/2} cos²(x) dx à K = ∫₀^{π/2} sin²(x) dx ?`,
          questionType: 'qcm',
          options: [
            'Elles sont égales à π/4 car cos² + sin² = 1 et par symétrie x ↦ π/2 - x',
            'L’intégrale de cos² vaut π/2 et celle de sin² vaut 0',
            'Elles sont opposées',
            'Leur somme vaut 1',
          ],
          correctAnswer: 'Elles sont égales à π/4 car cos² + sin² = 1 et par symétrie x ↦ π/2 - x',
          hint: `Somme = ∫₀^{π/2} 1 dx = π/2.`,
          ruleApplied: 'Symétrie et relation trigonométrique',
          mathExpression: `2K = π/2 ⇒ K = π/4`,
          explanation: `Par le changement u = π/2 - x, les deux intégrales sont égales.`,
        },
        {
          questionPrompt: `Calcule L₁ = ∫₀¹ (2x) / (x² + 1) dx (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(ln2, 3),
          hint: `Forme u'(x) / u(x) avec u(x) = x² + 1.`,
          ruleApplied: 'Primitive de u’/u = ln|u|',
          mathExpression: `[ln(x² + 1)]₀¹ = ln(2) - ln(1) = ln(2) ≈ ${fmt(ln2, 3)}`,
          explanation: `L₁ = ln(2) ≈ ${fmt(ln2, 3)}.`,
        },
        {
          questionPrompt: `Calcule L₂ = ∫₀² (2x) / (x² + 1) dx (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(ln5, 3),
          hint: `[ln(x² + 1)]₀² = ln(5).`,
          ruleApplied: 'Relation de Chasles et logarithme',
          mathExpression: `L₂ = ln(5) ≈ ${fmt(ln5, 3)}`,
          explanation: `L₂ = ln(5) ≈ ${fmt(ln5, 3)}.`,
        },
        {
          questionPrompt: `Déduis-en ∫₁² (2x) / (x² + 1) dx par la relation de Chasles (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(ln5 - ln2, 3),
          hint: `L₂ - L₁ = ln(5/2).`,
          ruleApplied: 'Relation de Chasles',
          mathExpression: `∫₁² = ln(5) - ln(2) = ln(2,5) ≈ ${fmt(ln5 - ln2, 3)}`,
          explanation: `L₂ - L₁ = ln(2,5) ≈ ${fmt(ln5 - ln2, 3)}.`,
        },
        {
          questionPrompt: `Soit la suite des sommes de Riemann S_n = (1/n) ∑_{k=1}^n (k/n)^{${m}}. Vers quelle intégrale converge S_n quand n → +∞ ?`,
          questionType: 'qcm',
          options: [
            `∫₀¹ x^${m} dx = 1/${m + 1}`,
            `∫₀¹ x^{${m - 1}} dx = 1/${m}`,
            `∫₁² x^${m} dx`,
            `∑ x^${m} qui diverge`,
          ],
          correctAnswer: `∫₀¹ x^${m} dx = 1/${m + 1}`,
          hint: `(b - a)/n = 1/n et f(k/n) = (k/n)^${m} sur [0 ; 1].`,
          ruleApplied: 'Sommes de Riemann',
          mathExpression: `lim_{n→+∞} S_n = ∫₀¹ x^${m} dx = 1/${m + 1}`,
          explanation: `La somme de Riemann converge vers l'intégrale sur [0 ; 1] de x^${m}.`,
        },
        {
          questionPrompt: `Pour F(x) = ∫₁ˣ (1/t) dt définie sur ]0 ; +∞[, que vaut F'(e) ?`,
          questionType: 'numeric',
          correctAnswer: fmt(1 / Math.E, 3),
          hint: `F'(x) = 1/x.`,
          ruleApplied: 'Théorème fondamental de l’analyse',
          mathExpression: `F'(e) = 1/e ≈ ${fmt(1 / Math.E, 3)}`,
          explanation: `La dérivée de x ↦ ∫ₐˣ f(t) dt est f(x), soit 1/e ≈ ${fmt(1 / Math.E, 3)}.`,
        },
        {
          questionPrompt: `Calcule la dérivée en x = 2 de G(x) = ∫₀^{x²} (1 / (t + 1)) dt.`,
          questionType: 'numeric',
          correctAnswer: '0.8',
          hint: `G'(x) = 2x · 1/(x² + 1) par composition.`,
          ruleApplied: 'Dérivée d’une intégrale à borne variable',
          mathExpression: `G'(2) = (2×2) / (2² + 1) = 4/5 = 0,8`,
          explanation: `G'(x) = (x²)' · f(x²) = 2x/(x² + 1), d'où G'(2) = 4/5 = 0,8.`,
        },
        {
          questionPrompt: `Calcule ∫_{-2}^{2} (x³·cos(x) + 3) dx (indice : utilise la parité !).`,
          questionType: 'numeric',
          correctAnswer: '12',
          hint: `x ↦ x³cos(x) est impaire sur l'intervalle symétrique [-2 ; 2].`,
          ruleApplied: 'Parité et symétrie de l’intégrale',
          mathExpression: `0 + ∫_{-2}^{2} 3 dx = 3 × 4 = 12`,
          explanation: `L'intégrale de la partie impaire est nulle ; il reste 3 × (2 - (-2)) = 12.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Techniques avancées d'intégration (u'uⁿ, u'/u, Riemann, borne variable)`,
        `Série de problèmes synthétiques sur le calcul intégral : substitution trigonométrique, somme de Riemann et dérivation sous le signe ∫.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 10. DÉNOMBREMENT & PROBABILITÉS CONDITIONNELLES
    // -------------------------------------------------------------------------
    case 'mathTc-denombrement-probas': {
      if (vMod === 0) {
        // Urne avec r rouges et b bleues, tirage simultané de 3 boules
        const r = pickRandom([4, 5, 6]);
        const b = pickRandom([3, 4]);
        const n = r + b;
        const comb = (N: number, K: number): number => {
          if (K < 0 || K > N) return 0;
          let num = 1, den = 1;
          for (let i = 0; i < K; i++) {
            num *= N - i;
            den *= i + 1;
          }
          return Math.round(num / den);
        };
        const total3 = comb(n, 3);
        const allR = comb(r, 3);
        const allB = comb(b, 3);
        const unicolore = allR + allB;
        const atLeast1R = total3 - allB;
        const exactly2R1B = comb(r, 2) * comb(b, 1);
        const p2R1B = exactly2R1B / total3;
        const pUnicolore = unicolore / total3;
        const pCondRGivenUnic = allR / unicolore;
        // Anagramme ou arrangement de 2 boules successives sans remise : n*(n-1)
        const arr2 = n * (n - 1);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une urne contient ${r} boules rouges et ${b} boules bleues (${n} boules au total). On tire simultanément 3 boules. Combien y a-t-il de tirages possibles (C(${n} ; 3)) ?`,
            questionType: 'numeric',
            correctAnswer: String(total3),
            hint: `(${n}×${n - 1}×${n - 2}) / 6.`,
            ruleApplied: 'Combinaisons sans répétition',
            mathExpression: `C(${n} ; 3) = ${total3}`,
            explanation: `Il y a ${total3} tirages simultanés équiprobables.`,
          },
          {
            questionPrompt: `Combien de tirages comportent exactement 3 boules rouges ?`,
            questionType: 'numeric',
            correctAnswer: String(allR),
            hint: `C(${r} ; 3).`,
            ruleApplied: 'Dénombrement d’événement',
            mathExpression: `C(${r} ; 3) = ${allR}`,
            explanation: `Il y a ${allR} façons de choisir 3 rouges parmi ${r}.`,
          },
          {
            questionPrompt: `Combien de tirages donnent 3 boules de la même couleur (unicolores) ?`,
            questionType: 'numeric',
            correctAnswer: String(unicolore),
            hint: `C(${r} ; 3) + C(${b} ; 3).`,
            ruleApplied: 'Principe additif (événements incompatibles)',
            mathExpression: `${allR} + ${allB} = ${unicolore}`,
            explanation: `3 rouges (${allR}) ou 3 bleues (${allB}) donnent ${unicolore} tirages.`,
          },
          {
            questionPrompt: `Calcule la probabilité P(U) d'obtenir un tirage unicolore (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pUnicolore, 3),
            hint: `${unicolore} / ${total3}.`,
            ruleApplied: 'Équiprobabilité',
            mathExpression: `P(U) = ${unicolore} / ${total3} ≈ ${fmt(pUnicolore, 3)}`,
            explanation: `P(U) ≈ ${fmt(pUnicolore, 3)}.`,
          },
          {
            questionPrompt: `Combien de tirages contiennent au moins 1 boule rouge ?`,
            questionType: 'numeric',
            correctAnswer: String(atLeast1R),
            hint: `Événement contraire : 0 boule rouge (donc 3 bleues).`,
            ruleApplied: 'Passage au complémentaire',
            mathExpression: `${total3} - ${allB} = ${atLeast1R}`,
            explanation: `Total moins tirages tout bleus = ${atLeast1R}.`,
          },
          {
            questionPrompt: `Combien de tirages comportent exactement 2 boules rouges et 1 boule bleue ?`,
            questionType: 'numeric',
            correctAnswer: String(exactly2R1B),
            hint: `Principe multiplicatif : C(${r} ; 2) × C(${b} ; 1).`,
            ruleApplied: 'Principe multiplicatif et combinaisons',
            mathExpression: `C(${r} ; 2) × ${b} = ${comb(r, 2)} × ${b} = ${exactly2R1B}`,
            explanation: `On trouve ${exactly2R1B} tirages mixtes à 2 rouges et 1 bleue.`,
          },
          {
            questionPrompt: `Calcule P(« exactement 2 rouges et 1 bleue ») arrondie à 0,001 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(p2R1B, 3),
            hint: `${exactly2R1B} / ${total3}.`,
            ruleApplied: 'Loi hypergéométrique / équiprobabilité',
            mathExpression: `${exactly2R1B} / ${total3} ≈ ${fmt(p2R1B, 3)}`,
            explanation: `P ≈ ${fmt(p2R1B, 3)}.`,
          },
          {
            questionPrompt: `Sachant que le tirage est unicolore (U), calcule la probabilité conditionnelle P_U(« 3 rouges ») (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pCondRGivenUnic, 3),
            hint: `P(3R ∩ U) / P(U) = ${allR} / ${unicolore}.`,
            ruleApplied: 'Probabilité conditionnelle',
            mathExpression: `P_U(3R) = ${allR} / ${unicolore} ≈ ${fmt(pCondRGivenUnic, 3)}`,
            explanation: `Parmi les ${unicolore} tirages unicolores, ${allR} sont rouges.`,
          },
          {
            questionPrompt: `Si l'on tirait maintenant 2 boules successivement SANS remise, combien de couples ordonnés (A(${n} ; 2)) seraient possibles ?`,
            questionType: 'numeric',
            correctAnswer: String(arr2),
            hint: `${n} × ${n - 1}.`,
            ruleApplied: 'Arrangements sans répétition',
            mathExpression: `A(${n} ; 2) = ${n} × ${n - 1} = ${arr2}`,
            explanation: `Il y a ${arr2} tirages ordonnés possibles.`,
          },
          {
            questionPrompt: `Si l'on tirait 2 boules successivement AVEC remise, combien de couples ordonnés (${n}²) seraient possibles ?`,
            questionType: 'numeric',
            correctAnswer: String(n * n),
            hint: `${n}².`,
            ruleApplied: 'p-uplets (avec répétition)',
            mathExpression: `${n}² = ${n * n}`,
            explanation: `Avec remise, il y a ${n * n} tirages possibles.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Tirages simultanés, combinaisons, arrangements et probabilité conditionnelle`,
          `Une urne contient ${r} boules rouges et ${b} boules bleues indiscernables au toucher.`,
          items
        );
      }

      if (vMod === 1) {
        // Arbre pondéré, probabilités totales & Bayes (contrôle qualité)
        const pM1 = pickRandom([0.6, 0.7]);
        const pM2 = Number((1 - pM1).toFixed(2));
        const pD_M1 = 0.02;
        const pD_M2 = 0.05;
        const pM1andD = Number((pM1 * pD_M1).toFixed(4));
        const pM2andD = Number((pM2 * pD_M2).toFixed(4));
        const pD = Number((pM1andD + pM2andD).toFixed(4));
        const pM1_D = pM1andD / pD;
        const pNotD = 1 - pD;
        const p2Defauts = pD * pD;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une usine produit ${Math.round(pM1 * 100)}% de ses pièces sur la machine M₁ et le reste sur M₂. Que vaut P(M₂) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(pM2),
            hint: `1 - ${pM1}.`,
            ruleApplied: 'Partition de l’univers',
            mathExpression: `P(M₂) = 1 - ${pM1} = ${fmt(pM2)}`,
            explanation: `P(M₂) = ${fmt(pM2)}.`,
          },
          {
            questionPrompt: `M₁ produit 2% de pièces défectueuses (D) et M₂ en produit 5%. Calcule P(M₁ ∩ D) (à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pM1andD, 3),
            hint: `P(M₁) × P_{M₁}(D) = ${pM1} × 0,02.`,
            ruleApplied: 'Formule des probabilités composées',
            mathExpression: `P(M₁ ∩ D) = ${pM1} × 0,02 = ${fmt(pM1andD, 3)}`,
            explanation: `P(M₁ ∩ D) = ${fmt(pM1andD, 3)}.`,
          },
          {
            questionPrompt: `Calcule P(M₂ ∩ D) (à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pM2andD, 3),
            hint: `${pM2} × 0,05.`,
            ruleApplied: 'Formule des probabilités composées',
            mathExpression: `P(M₂ ∩ D) = ${pM2} × 0,05 = ${fmt(pM2andD, 3)}`,
            explanation: `P(M₂ ∩ D) = ${fmt(pM2andD, 3)}.`,
          },
          {
            questionPrompt: `Par la formule des probabilités totales, calcule P(D) (à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pD, 3),
            hint: `P(M₁ ∩ D) + P(M₂ ∩ D).`,
            ruleApplied: 'Formule des probabilités totales',
            mathExpression: `P(D) = ${pM1andD} + ${pM2andD} = ${fmt(pD, 3)}`,
            explanation: `La proportion globale de pièces défectueuses est ${fmt(pD, 3)}.`,
          },
          {
            questionPrompt: `Calcule la probabilité P(D̄) qu'une pièce prise au hasard soit conforme (à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pNotD, 3),
            hint: `1 - P(D).`,
            ruleApplied: 'Probabilité de l’événement contraire',
            mathExpression: `P(D̄) = 1 - ${fmt(pD, 3)} = ${fmt(pNotD, 3)}`,
            explanation: `P(D̄) = ${fmt(pNotD, 3)}.`,
          },
          {
            questionPrompt: `Une pièce est défectueuse. Par la formule de Bayes, calcule P_D(M₁) (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(pM1_D, 3),
            hint: `P(M₁ ∩ D) / P(D).`,
            ruleApplied: 'Formule de Bayes',
            mathExpression: `P_D(M₁) = ${pM1andD} / ${pD} ≈ ${fmt(pM1_D, 3)}`,
            explanation: `Sachant la pièce défectueuse, elle provient de M₁ avec probabilité ≈ ${fmt(pM1_D, 3)}.`,
          },
          {
            questionPrompt: `Déduis-en P_D(M₂) (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(1 - pM1_D, 3),
            hint: `1 - P_D(M₁).`,
            ruleApplied: 'Probabilité conditionnelle complémentaire',
            mathExpression: `P_D(M₂) = 1 - ${fmt(pM1_D, 3)} = ${fmt(1 - pM1_D, 3)}`,
            explanation: `P_D(M₂) ≈ ${fmt(1 - pM1_D, 3)}.`,
          },
          {
            questionPrompt: `Les événements M₁ et D sont-ils indépendants ?`,
            questionType: 'qcm',
            options: [
              'Non, car P_{M₁}(D) = 0,02 ≠ P(D)',
              'Oui, car P(M₁ ∩ D) = P(M₁) + P(D)',
              'Oui, car P(M₁) + P(M₂) = 1',
              'Impossible à déterminer',
            ],
            correctAnswer: 'Non, car P_{M₁}(D) = 0,02 ≠ P(D)',
            hint: `Deux événements A, B de probabilités non nulles sont indépendants ssi P_A(B) = P(B).`,
            ruleApplied: 'Critère d’indépendance',
            mathExpression: `0,02 ≠ ${fmt(pD, 3)} ⇒ dépendance`,
            explanation: `La probabilité de défaut dépend de la machine choisie.`,
          },
          {
            questionPrompt: `On prélève 2 pièces de façon indépendante. Quelle est la probabilité P(« les 2 soient défectueuses ») (à 0,0001 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(p2Defauts, 4),
            hint: `[P(D)]².`,
            ruleApplied: 'Indépendance de tirages successifs',
            mathExpression: `(${pD})² ≈ ${fmt(p2Defauts, 4)}`,
            explanation: `Par indépendance, P = P(D)² ≈ ${fmt(p2Defauts, 4)}.`,
          },
          {
            questionPrompt: `Quelle est la probabilité que parmi 2 pièces prélevées indépendamment, AU MOINS UNE soit conforme (à 0,0001 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(1 - p2Defauts, 4),
            hint: `1 - P(2 défectueuses).`,
            ruleApplied: 'Événement contraire « au moins un »',
            mathExpression: `1 - ${fmt(p2Defauts, 4)} = ${fmt(1 - p2Defauts, 4)}`,
            explanation: `1 - P(D)² ≈ ${fmt(1 - p2Defauts, 4)}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Arbre pondéré, probabilités totales et inversion de Bayes`,
          `Dans une usine, deux machines M₁ (${Math.round(pM1 * 100)}%) et M₂ (${Math.round(pM2 * 100)}%) produisent des pièces avec respectivement 2% et 5% de défauts.`,
          items
        );
      }

      // vMod === 2: Dénombrement avancé (comités, anagrammes, binôme de Newton)
      const F = pickRandom([5, 6]); // femmes
      const H = pickRandom([4, 5]); // hommes
      const comb = (N: number, K: number): number => {
        if (K < 0 || K > N) return 0;
        let num = 1, den = 1;
        for (let i = 0; i < K; i++) {
          num *= N - i;
          den *= i + 1;
        }
        return Math.round(num / den);
      };
      const totalComites = comb(F + H, 4);
      const paritaires = comb(F, 2) * comb(H, 2);
      const sansHomme = comb(F, 4);
      const auMoins1H = totalComites - sansHomme;
      const avecDirectrice = comb(F + H - 1, 3);
      const sansCouple = totalComites - comb(F + H - 2, 2); // excluant les comités contenant A et B ensemble
      const anagrammesMaths = 60; // M(1), A(1), T(1), H(1), S(1)? "GABON" = 120, "BACCA" = 5!/(2!2!)=30, "STATIS" = ...
      // Prenons le mot "MATHEMATIQUES" -> trop grand. "ALGEBRE" (7 lettres, 2 E) -> 7!/2! = 2520 !
      const binomeSum = Math.pow(2, F);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Un club compte ${F} femmes et ${H} hommes. Combien de comités de 4 personnes peut-on former au total ?`,
          questionType: 'numeric',
          correctAnswer: String(totalComites),
          hint: `C(${F + H} ; 4).`,
          ruleApplied: 'Combinaisons sans ordre',
          mathExpression: `C(${F + H} ; 4) = ${totalComites}`,
          explanation: `Il y a ${totalComites} comités possibles.`,
        },
        {
          questionPrompt: `Combien de comités de 4 personnes sont paritaires (2 femmes et 2 hommes) ?`,
          questionType: 'numeric',
          correctAnswer: String(paritaires),
          hint: `C(${F} ; 2) × C(${H} ; 2).`,
          ruleApplied: 'Principe multiplicatif',
          mathExpression: `${comb(F, 2)} × ${comb(H, 2)} = ${paritaires}`,
          explanation: `On trouve ${paritaires} comités paritaires.`,
        },
        {
          questionPrompt: `Combien de comités ne contiennent aucun homme ?`,
          questionType: 'numeric',
          correctAnswer: String(sansHomme),
          hint: `On choisit les 4 membres uniquement parmi les ${F} femmes.`,
          ruleApplied: 'Sous-ensemble restreint',
          mathExpression: `C(${F} ; 4) = ${sansHomme}`,
          explanation: `C(${F} ; 4) = ${sansHomme}.`,
        },
        {
          questionPrompt: `Déduis-en le nombre de comités contenant au moins un homme.`,
          questionType: 'numeric',
          correctAnswer: String(auMoins1H),
          hint: `Total − (aucun homme).`,
          ruleApplied: 'Complémentaire en dénombrement',
          mathExpression: `${totalComites} - ${sansHomme} = ${auMoins1H}`,
          explanation: `Il y a ${auMoins1H} comités avec au moins un homme.`,
        },
        {
          questionPrompt: `La présidente Jeanne doit obligatoirement siéger dans le comité de 4 personnes. Combien de tels comités existe-t-il ?`,
          questionType: 'numeric',
          correctAnswer: String(avecDirectrice),
          hint: `Jeanne étant fixée, il reste 3 personnes à choisir parmi ${F + H - 1}.`,
          ruleApplied: 'Élément imposé',
          mathExpression: `C(${F + H - 1} ; 3) = ${avecDirectrice}`,
          explanation: `On choisit 3 compléments parmi ${F + H - 1}, soit ${avecDirectrice} comités.`,
        },
        {
          questionPrompt: `Deux membres Marc et Paul refusent de siéger ensemble. Combien de comités de 4 personnes sont acceptables ?`,
          questionType: 'numeric',
          correctAnswer: String(sansCouple),
          hint: `Retranche au total les C(${F + H - 2} ; 2) comités contenant simultanément Marc et Paul.`,
          ruleApplied: 'Exclusion d’une paire incompatible',
          mathExpression: `${totalComites} - C(${F + H - 2} ; 2) = ${totalComites} - ${comb(F + H - 2, 2)} = ${sansCouple}`,
          explanation: `On retranche les ${comb(F + H - 2, 2)} comités interdits : ${sansCouple}.`,
        },
        {
          questionPrompt: `Combien d'anagrammes distincts peut-on former avec les 7 lettres du mot ALGEBRE (où la lettre E figure 2 fois) ?`,
          questionType: 'numeric',
          correctAnswer: '2520',
          hint: `7! / 2! = 5040 / 2.`,
          ruleApplied: 'Permutations avec répétitions',
          mathExpression: `7! / 2! = 5040 / 2 = 2520`,
          explanation: `Les deux E étant indiscernables, on divise 7! par 2! = 2520.`,
        },
        {
          questionPrompt: `Quel est le nombre total de sous-ensembles d'un ensemble de ${F} éléments (∑_{k=0}^${F} C(${F} ; k)) ?`,
          questionType: 'numeric',
          correctAnswer: String(binomeSum),
          hint: `Formule du binôme de Newton : (1 + 1)^${F}.`,
          ruleApplied: 'Binôme de Newton',
          mathExpression: `(1 + 1)^${F} = 2^${F} = ${binomeSum}`,
          explanation: `La somme des coefficients binomiaux de la ligne ${F} vaut 2^${F} = ${binomeSum}.`,
        },
        {
          questionPrompt: `Combien vaut la somme alternée ∑_{k=0}^${F} (-1)^k C(${F} ; k) ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          hint: `Développe (1 - 1)^${F}.`,
          ruleApplied: 'Identité du binôme de Newton',
          mathExpression: `(1 - 1)^${F} = 0`,
          explanation: `Pour n ≥ 1, la somme alternée des coefficients binomiaux est toujours nulle.`,
        },
        {
          questionPrompt: `Dans le développement de (2x + 1)⁴, quel est le coefficient de x² ?`,
          questionType: 'numeric',
          correctAnswer: '24',
          hint: `C(4 ; 2) × (2)² × 1².`,
          ruleApplied: 'Terme général du binôme',
          mathExpression: `C(4 ; 2) × 4 = 6 × 4 = 24`,
          explanation: `C(4 ; 2) = 6 et 2² = 4, d'où le coefficient 24.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Dénombrement avancé : comités, exclusions, anagrammes & binôme`,
        `Problème de combinatoire sur un club de ${F} femmes et ${H} hommes, complété par des identités binomiales.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 11. LOIS DE PROBABILITÉ & STATISTIQUES
    // -------------------------------------------------------------------------
    case 'mathTc-lois-probas-stats': {
      if (vMod === 0) {
        // Variable aléatoire X : somme/gain sur une roue pondérée ou tirage
        // Valeurs: x = -2 (p=0.3), x = 1 (p=0.5), x = 4 (p=0.2) -> ou paramétré avec k !
        const k = pickRandom([1, 2, 3]);
        // X prend les valeurs 0 (p=0.2), 2k (p=0.5), 6k (p=0.3)
        // E(X) = 0*0.2 + 2k*0.5 + 6k*0.3 = k + 1.8k = 2.8k !
        // E(X^2) = 0 + 4k^2*0.5 + 36k^2*0.3 = 2k^2 + 10.8k^2 = 12.8k^2
        // V(X) = 12.8k^2 - 7.84k^2 = 4.96 k^2
        const EX = 2.8 * k;
        const EX2 = 12.8 * k * k;
        const VX = EX2 - EX * EX;
        const sigmaX = Math.sqrt(VX);
        const EY = 2 * EX + 5;
        const VY = 4 * VX;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une variable aléatoire X prend les valeurs 0, ${2 * k} et ${6 * k} avec P(X=0)=0,2 et P(X=${2 * k})=0,5. Calcule p₃ = P(X=${6 * k}).`,
            questionType: 'numeric',
            correctAnswer: '0.3',
            hint: `La somme des probabilités vaut 1.`,
            ruleApplied: 'Normalisation d’une loi discrète',
            mathExpression: `p₃ = 1 - (0,2 + 0,5) = 0,3`,
            explanation: `p₃ = 0,3.`,
          },
          {
            questionPrompt: `Calcule la probabilité P(X ≥ ${2 * k}).`,
            questionType: 'numeric',
            correctAnswer: '0.8',
            hint: `P(X = ${2 * k}) + P(X = ${6 * k}).`,
            ruleApplied: 'Événement réunion',
            mathExpression: `0,5 + 0,3 = 0,8`,
            explanation: `P(X ≥ ${2 * k}) = 0,8.`,
          },
          {
            questionPrompt: `Calcule l'espérance mathématique E(X).`,
            questionType: 'numeric',
            correctAnswer: fmt(EX),
            hint: `∑ x_i p_i = 0×0,2 + ${2 * k}×0,5 + ${6 * k}×0,3.`,
            ruleApplied: 'Espérance d’une variable aléatoire',
            mathExpression: `E(X) = ${k} + ${fmt(1.8 * k)} = ${fmt(EX)}`,
            explanation: `E(X) = ${fmt(EX)}.`,
          },
          {
            questionPrompt: `Calcule le moment d'ordre 2, E(X²) = ∑ x_i² p_i.`,
            questionType: 'numeric',
            correctAnswer: fmt(EX2),
            hint: `0 + ${(2 * k) ** 2}×0,5 + ${(6 * k) ** 2}×0,3.`,
            ruleApplied: 'Théorème de transfert pour X²',
            mathExpression: `E(X²) = ${2 * k * k} + ${fmt(10.8 * k * k)} = ${fmt(EX2)}`,
            explanation: `E(X²) = ${fmt(EX2)}.`,
          },
          {
            questionPrompt: `Par la formule de Koenig-Huygens, calcule la variance V(X) = E(X²) - [E(X)]² (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(VX),
            hint: `${fmt(EX2)} - (${fmt(EX)})².`,
            ruleApplied: 'Formule de Koenig-Huygens',
            mathExpression: `V(X) = ${fmt(EX2)} - ${fmt(EX * EX, 3)} = ${fmt(VX)}`,
            explanation: `V(X) = ${fmt(VX)}.`,
          },
          {
            questionPrompt: `Déduis-en l'écart-type σ(X) = √V(X) (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(sigmaX),
            hint: `Racine carrée de ${fmt(VX)}.`,
            ruleApplied: 'Écart-type',
            mathExpression: `σ(X) = √${fmt(VX)} ≈ ${fmt(sigmaX)}`,
            explanation: `σ(X) ≈ ${fmt(sigmaX)}.`,
          },
          {
            questionPrompt: `On pose Y = 2X + 5. Calcule E(Y) par linéarité de l'espérance.`,
            questionType: 'numeric',
            correctAnswer: fmt(EY),
            hint: `E(aX + b) = a·E(X) + b.`,
            ruleApplied: 'Linéarité de l’espérance',
            mathExpression: `E(Y) = 2×${fmt(EX)} + 5 = ${fmt(EY)}`,
            explanation: `E(Y) = ${fmt(EY)}.`,
          },
          {
            questionPrompt: `Calcule V(Y) = V(2X + 5) (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(VY),
            hint: `V(aX + b) = a²·V(X).`,
            ruleApplied: 'Propriété de la variance',
            mathExpression: `V(Y) = 4 × ${fmt(VX)} = ${fmt(VY)}`,
            explanation: `L'addition d'une constante (+5) ne modifie pas la variance ; le facteur 2 la multiplie par 4.`,
          },
          {
            questionPrompt: `Que vaut l'écart-type σ(Y) (arrondi à 0,01 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmt(2 * sigmaX),
            hint: `σ(2X + 5) = 2·σ(X).`,
            ruleApplied: 'Propriété de l’écart-type',
            mathExpression: `σ(Y) = 2 × ${fmt(sigmaX)} ≈ ${fmt(2 * sigmaX)}`,
            explanation: `σ(Y) ≈ ${fmt(2 * sigmaX)}.`,
          },
          {
            questionPrompt: `Soit F(t) = P(X ≤ t) la fonction de répartition de X. Quelle est la valeur de F(${2 * k}) ?`,
            questionType: 'numeric',
            correctAnswer: '0.7',
            hint: `P(X = 0) + P(X = ${2 * k}).`,
            ruleApplied: 'Fonction de répartition',
            mathExpression: `F(${2 * k}) = 0,2 + 0,5 = 0,7`,
            explanation: `La fonction de répartition cumule les probabilités jusqu'à ${2 * k}, soit 0,7.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Loi discrète, Koenig-Huygens, transformation affine Y = 2X + 5`,
          `Soit X une variable aléatoire prenant les valeurs 0, ${2 * k} et ${6 * k} avec P(X=0) = 0,2 et P(X=${2 * k}) = 0,5.`,
          items
        );
      }

      if (vMod === 1) {
        // Loi Binomiale B(n, p)
        const n = pickRandom([5, 6, 8]);
        const p = pickRandom([0.2, 0.25, 0.4]);
        const q = Number((1 - p).toFixed(2));
        const EX = n * p;
        const VX = n * p * q;
        const sigmaX = Math.sqrt(VX);
        const P0 = Math.pow(q, n);
        const PAtLeast1 = 1 - P0;
        const P1 = n * p * Math.pow(q, n - 1);
        const PAtLeast2 = 1 - P0 - P1;
        const Pn = Math.pow(p, n);
        // Seuil N tel que 1 - q^N >= 0.99 -> q^N <= 0.01 -> N >= ln(0.01)/ln(q)
        const NThreshold = Math.ceil(Math.log(0.01) / Math.log(q));

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une variable aléatoire X suit la loi binomiale B(${n} ; ${p}). Quelle est la probabilité q d'un échec élémentaire ?`,
            questionType: 'numeric',
            correctAnswer: fmt(q),
            hint: `q = 1 - p.`,
            ruleApplied: 'Épreuve de Bernoulli',
            mathExpression: `q = 1 - ${p} = ${fmt(q)}`,
            explanation: `q = ${fmt(q)}.`,
          },
          {
            questionPrompt: `Calcule l'espérance E(X) = n·p.`,
            questionType: 'numeric',
            correctAnswer: fmt(EX),
            hint: `${n} × ${p}.`,
            ruleApplied: 'Espérance de la loi binomiale',
            mathExpression: `E(X) = ${n} × ${p} = ${fmt(EX)}`,
            explanation: `E(X) = ${fmt(EX)}.`,
          },
          {
            questionPrompt: `Calcule la variance V(X) = n·p·(1 - p) (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(VX, 3),
            hint: `${n} × ${p} × ${fmt(q)}.`,
            ruleApplied: 'Variance de la loi binomiale',
            mathExpression: `V(X) = ${fmt(EX)} × ${fmt(q)} = ${fmt(VX, 3)}`,
            explanation: `V(X) = ${fmt(VX, 3)}.`,
          },
          {
            questionPrompt: `Calcule l'écart-type σ(X) (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(sigmaX),
            hint: `√V(X).`,
            ruleApplied: 'Écart-type',
            mathExpression: `σ(X) = √${fmt(VX, 3)} ≈ ${fmt(sigmaX)}`,
            explanation: `σ(X) ≈ ${fmt(sigmaX)}.`,
          },
          {
            questionPrompt: `Calcule P(X = 0) arrondie à 0,001 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(P0, 3),
            hint: `(${fmt(q)})^${n}.`,
            ruleApplied: 'Formule de la loi binomiale',
            mathExpression: `P(X = 0) = ${fmt(q)}^${n} ≈ ${fmt(P0, 3)}`,
            explanation: `P(X = 0) ≈ ${fmt(P0, 3)}.`,
          },
          {
            questionPrompt: `Calcule P(X ≥ 1) = 1 - P(X = 0) (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(PAtLeast1, 3),
            hint: `Utilise l'événement contraire.`,
            ruleApplied: 'Événement contraire « au moins 1 succès »',
            mathExpression: `P(X ≥ 1) = 1 - ${fmt(P0, 3)} ≈ ${fmt(PAtLeast1, 3)}`,
            explanation: `P(X ≥ 1) ≈ ${fmt(PAtLeast1, 3)}.`,
          },
          {
            questionPrompt: `Calcule P(X = 1) = C(${n} ; 1)·p·q^{${n - 1}} (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(P1, 3),
            hint: `${n} × ${p} × (${fmt(q)})^${n - 1}.`,
            ruleApplied: 'Formule binomiale pour k = 1',
            mathExpression: `P(X = 1) = ${n} × ${p} × ${fmt(q)}^${n - 1} ≈ ${fmt(P1, 3)}`,
            explanation: `P(X = 1) ≈ ${fmt(P1, 3)}.`,
          },
          {
            questionPrompt: `Déduis-en P(X ≥ 2) (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(PAtLeast2, 3),
            hint: `1 - P(X = 0) - P(X = 1).`,
            ruleApplied: 'Complémentaire d’ordre 2',
            mathExpression: `P(X ≥ 2) = 1 - ${fmt(P0 + P1, 3)} ≈ ${fmt(PAtLeast2, 3)}`,
            explanation: `P(X ≥ 2) ≈ ${fmt(PAtLeast2, 3)}.`,
          },
          {
            questionPrompt: `Calcule P(X = ${n}) = p^${n} (arrondie à 0,0001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(Pn, 4),
            hint: `(${p})^${n}.`,
            ruleApplied: 'Tous les essais réussis',
            mathExpression: `P(X = ${n}) = ${p}^${n} ≈ ${fmt(Pn, 4)}`,
            explanation: `P(X = ${n}) ≈ ${fmt(Pn, 4)}.`,
          },
          {
            questionPrompt: `Combien d'épreuves indépendantes N faut-il au minimum pour que P(X_N ≥ 1) ≥ 0,99 (soit ${fmt(q)}^N ≤ 0,01) ?`,
            questionType: 'numeric',
            correctAnswer: String(NThreshold),
            hint: `N ≥ ln(0,01) / ln(${fmt(q)}).`,
            ruleApplied: 'Résolution d’inéquation par logarithme',
            mathExpression: `N ≥ ${fmt(Math.log(0.01) / Math.log(q))} ⇒ N = ${NThreshold}`,
            explanation: `Il faut au moins N = ${NThreshold} essais indépendants.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Loi binomiale B(${n} ; ${p}), calculs cumulatifs et recherche de seuil`,
          `On répète ${n} fois de manière indépendante une épreuve de Bernoulli de paramètre p = ${p}.`,
          items
        );
      }

      // vMod === 2: Statistique bivariée & droite de régression linéaire
      const k = pickRandom([1, 2]);
      // Points (x_i, y_i) : (1, 2k), (2, 3k), (3, 5k), (4, 6k), (5, 9k)
      // xBar = 3, sum(x_i) = 15, sum(x_i^2) = 55 => V(X) = 55/5 - 9 = 2 !
      const xs = [1, 2, 3, 4, 5];
      const ys = [2 * k, 3 * k, 5 * k, 6 * k, 9 * k];
      const xBar = 3;
      const yBar = 5 * k; // (2+3+5+6+9)/5 = 25/5 = 5k
      const vx = 2;
      const vy = ys.reduce((acc, y) => acc + y * y, 0) / 5 - yBar * yBar; // (4+9+25+36+81)/5 - 25 = 155/5 - 25 = 31 - 25 = 6k^2 !
      const cov = xs.reduce((acc, x, idx) => acc + x * ys[idx], 0) / 5 - xBar * yBar; // (2+6+15+24+45)/5 - 15k = 92k/5 - 15k = 18.4k - 15k = 3.4k !
      const slopeA = cov / vx; // 1.7 k
      const interceptB = yBar - slopeA * xBar; // 5k - 5.1k = -0.1k
      const rCorr = cov / Math.sqrt(vx * vy);
      const yPred10 = slopeA * 10 + interceptB;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On relève 5 couples (x_i ; y_i) : (1 ; ${ys[0]}), (2 ; ${ys[1]}), (3 ; ${ys[2]}), (4 ; ${ys[3]}), (5 ; ${ys[4]}). Calcule la moyenne x̄.`,
          questionType: 'numeric',
          correctAnswer: String(xBar),
          hint: `(1 + 2 + 3 + 4 + 5) / 5.`,
          ruleApplied: 'Moyenne arithmétique',
          mathExpression: `x̄ = 15 / 5 = 3`,
          explanation: `x̄ = 3.`,
        },
        {
          questionPrompt: `Calcule la moyenne ȳ.`,
          questionType: 'numeric',
          correctAnswer: String(yBar),
          hint: `Somme des y_i divisée par 5.`,
          ruleApplied: 'Point moyen G(x̄ ; ȳ)',
          mathExpression: `ȳ = ${ys.reduce((a, b) => a + b, 0)} / 5 = ${yBar}`,
          explanation: `Le point moyen est G(3 ; ${yBar}).`,
        },
        {
          questionPrompt: `Calcule la variance V(X) = (1/5)∑ x_i² - x̄².`,
          questionType: 'numeric',
          correctAnswer: String(vx),
          hint: `(1 + 4 + 9 + 16 + 25)/5 - 9.`,
          ruleApplied: 'Variance marginale',
          mathExpression: `V(X) = 55/5 - 9 = 11 - 9 = 2`,
          explanation: `V(X) = 2.`,
        },
        {
          questionPrompt: `Calcule la variance V(Y) = (1/5)∑ y_i² - ȳ².`,
          questionType: 'numeric',
          correctAnswer: String(vy),
          hint: `∑ y_i² = ${155 * k * k}, donc moyenne des carrés = ${31 * k * k}.`,
          ruleApplied: 'Variance marginale',
          mathExpression: `V(Y) = ${31 * k * k} - ${yBar * yBar} = ${vy}`,
          explanation: `V(Y) = ${vy}.`,
        },
        {
          questionPrompt: `Calcule la covariance Cov(X, Y) = (1/5)∑ x_i y_i - x̄·ȳ (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(cov),
          hint: `∑ x_i y_i = ${92 * k}.`,
          ruleApplied: 'Covariance de Koenig',
          mathExpression: `Cov(X, Y) = ${fmt(18.4 * k)} - ${3 * yBar} = ${fmt(cov)}`,
          explanation: `Cov(X, Y) = ${fmt(cov)}.`,
        },
        {
          questionPrompt: `Calcule le coefficient directeur a = Cov(X, Y) / V(X) de la droite de régression de Y en X.`,
          questionType: 'numeric',
          correctAnswer: fmt(slopeA),
          hint: `${fmt(cov)} / 2.`,
          ruleApplied: 'Méthode des moindres carrés',
          mathExpression: `a = ${fmt(cov)} / 2 = ${fmt(slopeA)}`,
          explanation: `a = ${fmt(slopeA)}.`,
        },
        {
          questionPrompt: `Calcule l'ordonnée à l'origine b = ȳ - a·x̄ de cette droite de régression.`,
          questionType: 'numeric',
          correctAnswer: fmt(interceptB),
          hint: `La droite passe par G(3 ; ${yBar}).`,
          ruleApplied: 'Passage par le point moyen G',
          mathExpression: `b = ${yBar} - ${fmt(slopeA)}×3 = ${fmt(interceptB)}`,
          explanation: `La droite a pour équation y = ${fmt(slopeA)}x ${interceptB >= 0 ? `+ ${fmt(interceptB)}` : `- ${fmt(-interceptB)}`}.`,
        },
        {
          questionPrompt: `Calcule le coefficient de corrélation linéaire r = Cov(X, Y) / √(V(X)·V(Y)) (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(rCorr, 3),
          hint: `${fmt(cov)} / √(${vx} × ${vy}).`,
          ruleApplied: 'Coefficient de corrélation linéaire',
          mathExpression: `r = ${fmt(cov)} / √${vx * vy} ≈ ${fmt(rCorr, 3)}`,
          explanation: `r ≈ ${fmt(rCorr, 3)} > 0,98 : très forte corrélation linéaire positive.`,
        },
        {
          questionPrompt: `À l'aide de la droite d'ajustement, quelle valeur prévois-tu pour y lorsque x = 10 ?`,
          questionType: 'numeric',
          correctAnswer: fmt(yPred10),
          hint: `10·a + b.`,
          ruleApplied: 'Prévision par ajustement affine',
          mathExpression: `ŷ(10) = ${fmt(slopeA)}×10 + (${fmt(interceptB)}) = ${fmt(yPred10)}`,
          explanation: `On prévoit y ≈ ${fmt(yPred10)}.`,
        },
        {
          questionPrompt: `Calcule le coefficient de détermination r² (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(rCorr * rCorr, 3),
          hint: `Élève r ≈ ${fmt(rCorr, 3)} au carré.`,
          ruleApplied: 'Part de variance expliquée r²',
          mathExpression: `r² ≈ ${fmt(rCorr * rCorr, 3)}`,
          explanation: `Plus de 96% de la variance de Y est expliquée par le modèle linéaire.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Régression linéaire, covariance, corrélation r et prévision`,
        `On étudie la série statistique à deux variables : (1 ; ${ys[0]}), (2 ; ${ys[1]}), (3 ; ${ys[2]}), (4 ; ${ys[3]}), (5 ; ${ys[4]}).`,
        items
      );
    }

    default:
      return null;
  }
}
