import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom, randInt } from './types';
import { assembleHardMathExercise, fmt, HardQuestionSpec } from './tcHardMathHelpers';

export function generateHardMathCh5to8(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 5. LIMITES, CONTINUITÉ & BIJECTION
    // -------------------------------------------------------------------------
    case 'mathTc-limites-continuite': {
      if (vMod === 0) {
        // f(x) = a*x + b + c/(x - x0) avec c = k^2 > 0
        const a = pickRandom([1, 2]);
        const x0 = pickRandom([1, 2, 3]);
        const b = randInt(-2, 3);
        const k = pickRandom([2, 3]);
        const c = a * k * k; // f'(x) = a - c/(x - x0)^2 = a(1 - k^2/(x-x0)^2) -> extremums exacts en x0 ± k !
        const xMaxLocal = x0 - k;
        const xMinLocal = x0 + k;
        const yMaxLocal = a * xMaxLocal + b + c / -k;
        const yMinLocal = a * xMinLocal + b + c / k;
        const yAsymp0 = b; // y = ax + b

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = ${a === 1 ? '' : a}x ${b >= 0 ? `+ ${b}` : `- ${-b}`} + ${c}/(x - ${x0}). Quelle est la valeur interdite x₀ ?`,
            questionType: 'numeric',
            correctAnswer: String(x0),
            hint: `Annule le dénominateur x - ${x0}.`,
            ruleApplied: 'Domaine de définition d’une fonction rationnelle',
            mathExpression: `D_f = ℝ \\ {${x0}}`,
            explanation: `Le dénominateur s'annule pour x = ${x0}.`,
          },
          {
            questionPrompt: `Calcule lim_{x → ${x0}⁺} f(x).`,
            questionType: 'qcm',
            options: ['+∞', '-∞', '0', String(a * x0 + b)],
            correctAnswer: '+∞',
            hint: `Quand x → ${x0}⁺, x - ${x0} → 0⁺ et ${c} > 0.`,
            ruleApplied: 'Limite infinie et asymptote verticale',
            mathExpression: `lim_{x → ${x0}⁺} ${c}/(x - ${x0}) = +∞`,
            explanation: `La droite x = ${x0} est asymptote verticale ; à droite, f(x) → +∞.`,
          },
          {
            questionPrompt: `La courbe admet une asymptote oblique Δ en ±∞ d'équation y = mx + p. Que vaut le coefficient directeur m ?`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `lim_{x → ±∞} [f(x) - (${a}x + ${b})] = lim ${c}/(x - ${x0}) = 0.`,
            ruleApplied: 'Asymptote oblique',
            mathExpression: `Δ : y = ${a === 1 ? '' : a}x ${b >= 0 ? `+ ${b}` : `- ${-b}`}`,
            explanation: `Comme ${c}/(x - ${x0}) → 0 en ±∞, la droite y = ${a}x + ${b} est asymptote oblique.`,
          },
          {
            questionPrompt: `Que vaut l'ordonnée à l'origine p de l'asymptote oblique Δ ?`,
            questionType: 'numeric',
            correctAnswer: String(yAsymp0),
            hint: `Lis le terme constant de la partie affine.`,
            ruleApplied: 'Asymptote oblique',
            mathExpression: `p = ${yAsymp0}`,
            explanation: `L'ordonnée à l'origine de Δ est p = ${yAsymp0}.`,
          },
          {
            questionPrompt: `Sur l'intervalle ]${x0} ; +∞[, quelle est la position de la courbe C_f par rapport à Δ ?`,
            questionType: 'qcm',
            options: [
              'C_f est strictement au-dessus de Δ',
              'C_f est strictement en dessous de Δ',
              'C_f coupe Δ en x = ' + (x0 + 1),
              'C_f et Δ sont confondues',
            ],
            correctAnswer: 'C_f est strictement au-dessus de Δ',
            hint: `Étudie le signe de f(x) - (${a}x + ${b}) = ${c}/(x - ${x0}).`,
            ruleApplied: 'Position relative courbe / asymptote',
            mathExpression: `f(x) - y_Δ = ${c}/(x - ${x0}) > 0 pour x > ${x0}`,
            explanation: `Pour x > ${x0}, la différence est strictement positive, donc C_f est au-dessus de Δ.`,
          },
          {
            questionPrompt: `Calcule la plus grande abscisse x > ${x0} où f'(x) = 0.`,
            questionType: 'numeric',
            correctAnswer: String(xMinLocal),
            hint: `f'(x) = ${a} - ${c}/(x - ${x0})² = 0 ⇔ (x - ${x0})² = ${k * k}.`,
            ruleApplied: 'Dérivation et extremums',
            mathExpression: `(x - ${x0})² = ${k * k} ⇒ x = ${x0} + ${k} = ${xMinLocal}`,
            explanation: `Sur ]${x0} ; +∞[, x - ${x0} = ${k} donc le minimum local est atteint en x = ${xMinLocal}.`,
          },
          {
            questionPrompt: `Calcule la valeur du minimum local m = f(${xMinLocal}) sur ]${x0} ; +∞[.`,
            questionType: 'numeric',
            correctAnswer: String(yMinLocal),
            hint: `Calcule ${a}×${xMinLocal} + (${b}) + ${c}/${k}.`,
            ruleApplied: 'Extremum local',
            mathExpression: `f(${xMinLocal}) = ${a * xMinLocal + b} + ${c / k} = ${yMinLocal}`,
            explanation: `f(${xMinLocal}) = ${yMinLocal}.`,
          },
          {
            questionPrompt: `Calcule l'abscisse du maximum local sur ]-∞ ; ${x0}[.`,
            questionType: 'numeric',
            correctAnswer: String(xMaxLocal),
            hint: `x - ${x0} = -${k}.`,
            ruleApplied: 'Racines de f’(x) = 0',
            mathExpression: `x = ${x0} - ${k} = ${xMaxLocal}`,
            explanation: `Le second point critique est x = ${x0} - ${k} = ${xMaxLocal}.`,
          },
          {
            questionPrompt: `Calcule la valeur du maximum local M = f(${xMaxLocal}) sur ]-∞ ; ${x0}[.`,
            questionType: 'numeric',
            correctAnswer: String(yMaxLocal),
            hint: `Calcule ${a}×(${xMaxLocal}) + (${b}) - ${c / k}.`,
            ruleApplied: 'Évaluation de l’extremum',
            mathExpression: `f(${xMaxLocal}) = ${yMaxLocal}`,
            explanation: `f(${xMaxLocal}) = ${yMaxLocal}.`,
          },
          {
            questionPrompt: `Sur l'intervalle I = [${xMinLocal} ; +∞[, f réalise une bijection vers quel intervalle J ?`,
            questionType: 'qcm',
            options: [
              `[${yMinLocal} ; +∞[`,
              `]${yMaxLocal} ; +∞[`,
              `[${xMinLocal} ; +∞[`,
              `]-∞ ; ${yMinLocal}]`,
            ],
            correctAnswer: `[${yMinLocal} ; +∞[`,
            hint: `f est continue et strictement croissante sur [${xMinLocal} ; +∞[, avec lim_{+∞} f = +∞.`,
            ruleApplied: 'Théorème de la bijection',
            mathExpression: `f([${xMinLocal} ; +∞[) = [f(${xMinLocal}) ; +∞[ = [${yMinLocal} ; +∞[`,
            explanation: `Par le théorème de la bijection, l'image de [${xMinLocal} ; +∞[ est [${yMinLocal} ; +∞[.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Asymptote oblique, extremums et bijection d'une fonction rationnelle`,
          `On étudie la fonction rationnelle f définie sur ℝ \\ {${x0}} par f(x) = ${a === 1 ? '' : a}x ${b >= 0 ? `+ ${b}` : `- ${-b}`} + ${c}/(x - ${x0}).`,
          items
        );
      }

      if (vMod === 1) {
        // Fonction irrationnelle f(x) = sqrt(x^2 + 2px + p^2 + q^2) - x  -> toujours définie sur R car (x+p)^2 + q^2 >= q^2 > 0
        const p = pickRandom([2, 3, 4]);
        const q = pickRandom([3, 4]);
        // f(x) = sqrt((x + p)^2 + q^2) - x = sqrt(x^2 + 2px + (p^2+q^2)) - x
        const cTerm = p * p + q * q;
        const limPlusInf = p;
        const f0 = Math.sqrt(cTerm);
        const fMinusP = q + p; // en x = -p : sqrt(q^2) - (-p) = q + p
        const asympSlope = -2;
        const asympIntercept = -p;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = √(x² + ${2 * p}x + ${cTerm}) - x. Quelle est la valeur minimale du radicande P(x) = x² + ${2 * p}x + ${cTerm} sur ℝ ?`,
            questionType: 'numeric',
            correctAnswer: String(q * q),
            hint: `Écris P(x) sous forme canonique (x + ${p})² + ${q * q}.`,
            ruleApplied: 'Forme canonique et domaine',
            mathExpression: `P(x) = (x + ${p})² + ${q * q} ≥ ${q * q} > 0`,
            explanation: `Le trinôme P(x) vaut au minimum ${q * q} > 0 en x = -${p}, donc D_f = ℝ.`,
          },
          {
            questionPrompt: `En multipliant par l'expression conjuguée pour x > 0, que vaut lim_{x → +∞} f(x) ?`,
            questionType: 'numeric',
            correctAnswer: String(limPlusInf),
            hint: `Numérateur = ${2 * p}x + ${cTerm}, dénominateur ~ 2x.`,
            ruleApplied: 'Quantité conjuguée et forme indéterminée ∞ - ∞',
            mathExpression: `f(x) = (${2 * p}x + ${cTerm}) / (√(...) + x) → ${2 * p}/2 = ${p}`,
            explanation: `En factorisant x au dénominateur (pour x > 0), √(1 + ...) + 1 → 2, donc la limite vaut ${2 * p}/2 = ${p}.`,
          },
          {
            questionPrompt: `Quelle est l'équation de l'asymptote horizontale en +∞ ?`,
            questionType: 'qcm',
            options: [`y = ${p}`, `y = -${p}`, `y = 0`, `y = ${2 * p}`],
            correctAnswer: `y = ${p}`,
            hint: `Utilise la limite calculée à la question précédente.`,
            ruleApplied: 'Asymptote horizontale',
            mathExpression: `lim_{x → +∞} f(x) = ${p}`,
            explanation: `La droite d'équation y = ${p} est asymptote horizontale à C_f en +∞.`,
          },
          {
            questionPrompt: `Que vaut lim_{x → -∞} f(x) ?`,
            questionType: 'qcm',
            options: ['+∞', '-∞', String(p), String(-p)],
            correctAnswer: '+∞',
            hint: `Quand x → -∞, √(x²+...) → +∞ et -x → +∞ (aucune indétermination).`,
            ruleApplied: 'Limite sans indétermination',
            mathExpression: `(+∞) + (+∞) = +∞`,
            explanation: `En -∞, les deux termes tendent vers +∞, donc lim_{-∞} f = +∞.`,
          },
          {
            questionPrompt: `Calcule f(-${p}) exactement.`,
            questionType: 'numeric',
            correctAnswer: String(fMinusP),
            hint: `En x = -${p}, √((0)² + ${q}²) - (-${p}).`,
            ruleApplied: 'Évaluation exacte',
            mathExpression: `f(-${p}) = √(${q * q}) + ${p} = ${q} + ${p} = ${fMinusP}`,
            explanation: `f(-${p}) = ${q} + ${p} = ${fMinusP}.`,
          },
          {
            questionPrompt: `En -∞, C_f admet une asymptote oblique Δ d'équation y = mx + k. Sachant √((x+${p})²+${q * q}) ~ -(x+${p}) = -x-${p}, que vaut la pente m ?`,
            questionType: 'numeric',
            correctAnswer: String(asympSlope),
            hint: `f(x) ~ (-x - ${p}) - x en -∞.`,
            ruleApplied: 'Asymptote oblique par expression conjuguée en -∞',
            mathExpression: `f(x) - (-2x - ${p}) = √((x+${p})²+${q * q}) + (x+${p}) → 0`,
            explanation: `En -∞, |x + ${p}| = -(x + ${p}), donc f(x) se comporte comme -2x - ${p}, soit m = -2.`,
          },
          {
            questionPrompt: `Que vaut l'ordonnée à l'origine k de cette asymptote oblique Δ en -∞ ?`,
            questionType: 'numeric',
            correctAnswer: String(asympIntercept),
            hint: `Vérifie lim_{x→-∞} [f(x) - (-2x)] = lim [√((x+${p})²+${q * q}) + x].`,
            ruleApplied: 'Calcul de l’ordonnée à l’origine d’asymptote',
            mathExpression: `f(x) + 2x = √((x+${p})²+${q * q}) + x → -${p}`,
            explanation: `Par quantité conjuguée en -∞, la différence tend vers -${p}.`,
          },
          {
            questionPrompt: `Quel est le signe de f'(x) = (x + ${p})/√((x+${p})² + ${q * q}) - 1 pour tout x ∈ ℝ ?`,
            questionType: 'qcm',
            options: [
              'f’(x) < 0 sur ℝ (strictement décroissante)',
              'f’(x) > 0 sur ℝ (strictement croissante)',
              'f’(x) s’annule en x = -' + p,
              'f’(x) change de signe en x = 0',
            ],
            correctAnswer: 'f’(x) < 0 sur ℝ (strictement décroissante)',
            hint: `Compare |x + ${p}| et √((x+${p})² + ${q * q}).`,
            ruleApplied: 'Monotonie stricte sur ℝ',
            mathExpression: `x + ${p} < √((x+${p})² + ${q * q}) ⇒ f'(x) < 0`,
            explanation: `Puisque q² > 0, (x + ${p}) < √((x+${p})² + ${q * q}), donc f'(x) < 0 partout sur ℝ.`,
          },
          {
            questionPrompt: `Calcule f(0) exact (pour p = ${p}, q = ${q}, note que ${cTerm === 25 ? '√25 = 5' : `√${cTerm} ≈ ${fmt(f0)}`}). Donne f(0) arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(f0),
            hint: `f(0) = √(${cTerm}).`,
            ruleApplied: 'Évaluation à l’origine',
            mathExpression: `f(0) = √${cTerm} ≈ ${fmt(f0)}`,
            explanation: `En x = 0, √${cTerm} ≈ ${fmt(f0)}.`,
          },
          {
            questionPrompt: `Quel est l'intervalle image f(ℝ) sur lequel f réalise une bijection de ℝ sur f(ℝ) ?`,
            questionType: 'qcm',
            options: [
              `]${p} ; +∞[`,
              `[${p} ; +∞[`,
              `]0 ; +∞[`,
              `]-∞ ; ${p}[`,
            ],
            correctAnswer: `]${p} ; +∞[`,
            hint: `f est continue, strictement décroissante de +∞ (en -∞) à ${p} (en +∞).`,
            ruleApplied: 'Théorème de la bijection sur un intervalle ouvert',
            mathExpression: `f(ℝ) = ]lim_{+∞} f ; lim_{-∞} f[ = ]${p} ; +∞[`,
            explanation: `f réalise une bijection décroissante de ℝ sur ]${p} ; +∞[.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Fonction irrationnelle f(x) = √(x² + ${2 * p}x + ${cTerm}) - x et asymptotes`,
          `On considère f(x) = √(x² + ${2 * p}x + ${cTerm}) - x définie sur ℝ.`,
          items
        );
      }

      // vMod === 2: Limites trigonométriques, gendarmes et raccordement continu
      const a = pickRandom([2, 3, 4]);
      const b = pickRandom([3, 5]);
      // f(x) = (1 - cos(ax)) / x^2 pour x != 0, et f(0) = alpha
      // lim_{x->0} (1 - cos(ax))/x^2 = a^2 / 2
      const limTrig = (a * a) / 2;
      const gLimit = a * b; // lim_{x->0} sin(ab x)/x = ab

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Calcule lim_{x → 0} sin(${a}x) / x.`,
          questionType: 'numeric',
          correctAnswer: String(a),
          hint: `Écris (${a}·sin(${a}x)) / (${a}x) et utilise lim_{u→0} sin(u)/u = 1.`,
          ruleApplied: 'Limite usuelle trigonométrique',
          mathExpression: `lim_{x→0} ${a} · [sin(${a}x)/(${a}x)] = ${a}`,
          explanation: `Par changement de variable u = ${a}x, la limite vaut ${a}.`,
        },
        {
          questionPrompt: `Calcule lim_{x → 0} (1 - cos(${a}x)) / x².`,
          questionType: 'numeric',
          correctAnswer: fmt(limTrig),
          hint: `Utilise 1 - cos(${a}x) = 2 sin²(${a}x/2) et lim (1 - cos u)/u² = 1/2.`,
          ruleApplied: 'Limite usuelle du cosinus en 0',
          mathExpression: `lim_{x→0} ${a}² · (1 - cos(${a}x)) / (${a}x)² = ${a * a}/2 = ${fmt(limTrig)}`,
          explanation: `En posant u = ${a}x, le quotient vaut ${a * a}×(1 - cos u)/u² → ${a * a}/2 = ${fmt(limTrig)}.`,
        },
        {
          questionPrompt: `Soit f définie par f(x) = (1 - cos(${a}x))/x² si x ≠ 0 et f(0) = α. Quelle valeur de α assure la continuité de f en 0 ?`,
          questionType: 'numeric',
          correctAnswer: fmt(limTrig),
          hint: `Il faut f(0) = lim_{x → 0} f(x).`,
          ruleApplied: 'Prolongement par continuité',
          mathExpression: `α = lim_{x → 0} f(x) = ${fmt(limTrig)}`,
          explanation: `Le raccordement continu exige α = ${fmt(limTrig)}.`,
        },
        {
          questionPrompt: `Calcule lim_{x → 0} sin(${a * b}x) / sin(${b}x).`,
          questionType: 'numeric',
          correctAnswer: String(a),
          hint: `Divise numérateur et dénominateur par x.`,
          ruleApplied: 'Quotient de limites usuelles',
          mathExpression: `[sin(${a * b}x)/x] / [sin(${b}x)/x] → ${a * b} / ${b} = ${a}`,
          explanation: `La limite du rapport est (${a * b}) / ${b} = ${a}.`,
        },
        {
          questionPrompt: `Soit g(x) = (2x + sin(${a}x)) / x pour x > 0. Calcule lim_{x → +∞} g(x).`,
          questionType: 'numeric',
          correctAnswer: '2',
          hint: `-1 ≤ sin(${a}x) ≤ 1 ⇒ 2 - 1/x ≤ g(x) ≤ 2 + 1/x.`,
          ruleApplied: 'Théorème des gendarmes',
          mathExpression: `2 - 1/x ≤ g(x) ≤ 2 + 1/x ⇒ lim_{+∞} g(x) = 2`,
          explanation: `Par encadrement, sin(${a}x)/x → 0 en +∞, donc lim g(x) = 2.`,
        },
        {
          questionPrompt: `Calcule lim_{x → +∞} (x² + ${gLimit}cos(x)) / (x² + 1).`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `Factorise x² au numérateur et au dénominateur.`,
          ruleApplied: 'Encadrement et termes dominants',
          mathExpression: `(1 + ${gLimit}cos(x)/x²) / (1 + 1/x²) → 1`,
          explanation: `|cos(x)|/x² ≤ 1/x² → 0, donc la limite vaut 1.`,
        },
        {
          questionPrompt: `Pour h(x) = x³ + ${a}x - ${b}, que vaut h(0) ?`,
          questionType: 'numeric',
          correctAnswer: String(-b),
          hint: `Évalue h en 0.`,
          ruleApplied: 'Évaluation polynomiale',
          mathExpression: `h(0) = -${b}`,
          explanation: `h(0) = -${b} < 0.`,
        },
        {
          questionPrompt: `Calcule h(2) = 8 + ${2 * a} - ${b}.`,
          questionType: 'numeric',
          correctAnswer: String(8 + 2 * a - b),
          hint: `Remplace x par 2.`,
          ruleApplied: 'Évaluation polynomiale',
          mathExpression: `h(2) = 8 + ${2 * a} - ${b} = ${8 + 2 * a - b}`,
          explanation: `h(2) = ${8 + 2 * a - b} > 0.`,
        },
        {
          questionPrompt: `Quelle propriété de h'(x) = 3x² + ${a} garantit l'unicité de la solution de h(x) = 0 dans [0 ; 2] ?`,
          questionType: 'qcm',
          options: [
            `h'(x) > 0 sur ℝ donc h est strictement croissante`,
            `h''(x) = 6x s'annule en 0`,
            `h(0)·h(2) > 0`,
            `h est paire sur [-2 ; 2]`,
          ],
          correctAnswer: `h'(x) > 0 sur ℝ donc h est strictement croissante`,
          hint: `Corollaire du théorème des valeurs intermédiaires (TVI monotone).`,
          ruleApplied: 'Corollaire du TVI',
          mathExpression: `3x² + ${a} ≥ ${a} > 0 ⇒ bijection`,
          explanation: `h est continue, strictement croissante sur ℝ et h(0)·h(2) < 0, d'où une unique racine.`,
        },
        {
          questionPrompt: `Quelle est la limite de (tan(${a}x)) / x lorsque x → 0 ?`,
          questionType: 'numeric',
          correctAnswer: String(a),
          hint: `tan(${a}x)/x = [sin(${a}x)/x] × [1/cos(${a}x)].`,
          ruleApplied: 'Limite trigonométrique',
          mathExpression: `lim_{x→0} tan(${a}x)/x = ${a} × 1 = ${a}`,
          explanation: `sin(${a}x)/x → ${a} et cos(${a}x) → 1, d'où ${a}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Limites trigonométriques, théorème des gendarmes et TVI`,
        `Problème multi-outils sur les formes indéterminées trigonométriques, le prolongement par continuité et le corollaire du TVI.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 6. DÉRIVATION, CONVEXITÉ & PRIMITIVES
    // -------------------------------------------------------------------------
    case 'mathTc-derivation-primitives': {
      if (vMod === 0) {
        // f(x) = x^3 - 3*a^2*x + d -> extremums en -a et +a, point d'inflexion en x = 0 !
        const a = pickRandom([1, 2, 3]);
        const d = randInt(1, 5);
        const fMin = -2 * Math.pow(a, 3) + d;
        const fMax = 2 * Math.pow(a, 3) + d;
        const slope0 = -3 * a * a;
        const slopeAt2a = 3 * (4 * a * a - a * a); // 9 a^2
        const xTest = a + 1;
        const fDerivTest = 3 * xTest * xTest - 3 * a * a;
        // Primitive F(x) avec F(0) = 0 : F(x) = x^4/4 - (3a^2/2)x^2 + dx
        const F2 = 4 - 6 * a * a + 2 * d;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = x³ - ${3 * a * a}x + ${d} sur ℝ. Calcule le coefficient de x² dans f'(x).`,
            questionType: 'numeric',
            correctAnswer: '3',
            hint: `Dérive x³.`,
            ruleApplied: 'Dérivée d’un polynôme',
            mathExpression: `f'(x) = 3x² - ${3 * a * a}`,
            explanation: `f'(x) = 3(x² - ${a * a}).`,
          },
          {
            questionPrompt: `Détermine l'abscisse positive x₁ > 0 où f'(x) = 0.`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `3x² = ${3 * a * a}.`,
            ruleApplied: 'Points critiques',
            mathExpression: `x² = ${a * a} ⇒ x₁ = ${a}`,
            explanation: `f'(x) s'annule en -${a} et +${a}.`,
          },
          {
            questionPrompt: `Calcule la valeur du minimum local f(${a}).`,
            questionType: 'numeric',
            correctAnswer: String(fMin),
            hint: `${a}³ - ${3 * a * a}×${a} + ${d}.`,
            ruleApplied: 'Évaluation de l’extremum',
            mathExpression: `f(${a}) = -2×${Math.pow(a, 3)} + ${d} = ${fMin}`,
            explanation: `f(${a}) = ${fMin}.`,
          },
          {
            questionPrompt: `Calcule la valeur du maximum local f(-${a}).`,
            questionType: 'numeric',
            correctAnswer: String(fMax),
            hint: `(-${a})³ - ${3 * a * a}×(-${a}) + ${d}.`,
            ruleApplied: 'Évaluation du maximum',
            mathExpression: `f(-${a}) = 2×${Math.pow(a, 3)} + ${d} = ${fMax}`,
            explanation: `f(-${a}) = ${fMax}.`,
          },
          {
            questionPrompt: `Calcule l'abscisse x_I du point d'inflexion de C_f (où f'' s'annule en changeant de signe).`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `f''(x) = 6x.`,
            ruleApplied: 'Convexité et point d’inflexion',
            mathExpression: `f''(x) = 6x = 0 ⇔ x = 0`,
            explanation: `f''(x) = 6x passe de négatif à positif en x = 0 : (0 ; ${d}) est point d'inflexion.`,
          },
          {
            questionPrompt: `Quelle est la pente de la tangente d'inflexion T₀ au point d'abscisse 0 ?`,
            questionType: 'numeric',
            correctAnswer: String(slope0),
            hint: `Calcule f'(0).`,
            ruleApplied: 'Équation de la tangente',
            mathExpression: `f'(0) = -${3 * a * a}`,
            explanation: `T₀ a pour équation y = ${slope0}x + ${d}.`,
          },
          {
            questionPrompt: `Sur quel intervalle la fonction f est-elle convexe (f''(x) ≥ 0) ?`,
            questionType: 'qcm',
            options: ['[0 ; +∞[', ']-∞ ; 0]', `[-${a} ; ${a}]`, `[${a} ; +∞[`],
            correctAnswer: '[0 ; +∞[',
            hint: `Résous 6x ≥ 0.`,
            ruleApplied: 'Caractérisation de la convexité',
            mathExpression: `f''(x) = 6x ≥ 0 ⇔ x ≥ 0`,
            explanation: `f est convexe sur [0 ; +∞[ et concave sur ]-∞ ; 0].`,
          },
          {
            questionPrompt: `Calcule le nombre dérivé f'(${a + 1}).`,
            questionType: 'numeric',
            correctAnswer: String(fDerivTest),
            hint: `3×(${a + 1})² - ${3 * a * a}.`,
            ruleApplied: 'Nombre dérivé',
            mathExpression: `f'(${a + 1}) = ${3 * xTest * xTest} - ${3 * a * a} = ${fDerivTest}`,
            explanation: `f'(${a + 1}) = ${fDerivTest}.`,
          },
          {
            questionPrompt: `Sur [${a} ; +∞[, f est strictement croissante. Que vaut (f⁻¹)'(y₁) au point où l'antécédent vaut x = 2·${a} = ${2 * a} ? (Donne l'inverse sous forme décimale à 0,01 près si non entier, ici 1/(${slopeAt2a}))`,
            questionType: 'numeric',
            correctAnswer: fmt(1 / slopeAt2a, 4),
            hint: `(f⁻¹)'(f(x)) = 1 / f'(x) avec f'(${2 * a}) = ${slopeAt2a}.`,
            ruleApplied: 'Dérivée d’une fonction réciproque',
            mathExpression: `(f⁻¹)'(f(${2 * a})) = 1 / ${slopeAt2a} ≈ ${fmt(1 / slopeAt2a, 4)}`,
            explanation: `f'(${2 * a}) = 3(${4 * a * a}) - ${3 * a * a} = ${slopeAt2a}, donc (f⁻¹)' = 1/${slopeAt2a} ≈ ${fmt(1 / slopeAt2a, 4)}.`,
          },
          {
            questionPrompt: `Soit F la primitive de f sur ℝ vérifiant F(0) = 0. Calcule F(2).`,
            questionType: 'numeric',
            correctAnswer: String(F2),
            hint: `F(x) = x⁴/4 - ${(3 * a * a) / 2}x² + ${d}x.`,
            ruleApplied: 'Calcul de primitive',
            mathExpression: `F(2) = 16/4 - ${6 * a * a} + ${2 * d} = ${F2}`,
            explanation: `F(2) = 4 - ${6 * a * a} + ${2 * d} = ${F2}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Étude complète, convexité, bijection réciproque et primitive`,
          `Soit f(x) = x³ - ${3 * a * a}x + ${d} définie sur ℝ.`,
          items
        );
      }

      if (vMod === 1) {
        // Composée & IAF : f(x) = sqrt(2x + k) sur [0 ; 4] avec k choisi pour carrés parfaits
        const k = pickRandom([1, 4, 9]);
        // u(x) = 2x + k, u'(x) = 2, f'(x) = 1 / sqrt(2x + k)
        const f0 = Math.sqrt(k);
        const x1 = k === 1 ? 4 : k === 4 ? 6 : 8; // pour k=1-> 2*4+1=9(3); k=4-> 2*6+4=16(4); k=9-> 2*8+9=25(5)
        const fx1 = Math.sqrt(2 * x1 + k);
        const fPrim0 = 1 / f0;
        const fPrimX1 = 1 / fx1;
        // Primitive de f(x) = (2x+k)^(1/2) est (1/3)(2x+k)^(3/2) !
        const F0 = (1 / 3) * Math.pow(f0, 3);
        const Fx1 = (1 / 3) * Math.pow(fx1, 3);
        const deltaF = Fx1 - F0;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = √(2x + ${k}). Calcule la plus petite abscisse x_min du domaine de définition.`,
            questionType: 'numeric',
            correctAnswer: fmt(-k / 2),
            hint: `Résous 2x + ${k} ≥ 0.`,
            ruleApplied: 'Domaine d’une racine carrée',
            mathExpression: `2x + ${k} ≥ 0 ⇔ x ≥ -${fmt(k / 2)}`,
            explanation: `f est définie sur [-${fmt(k / 2)} ; +∞[ et dérivable sur ]-${fmt(k / 2)} ; +∞[.`,
          },
          {
            questionPrompt: `Calcule f(0).`,
            questionType: 'numeric',
            correctAnswer: String(f0),
            hint: `√${k}.`,
            ruleApplied: 'Évaluation',
            mathExpression: `f(0) = √${k} = ${f0}`,
            explanation: `f(0) = ${f0}.`,
          },
          {
            questionPrompt: `Calcule f(${x1}).`,
            questionType: 'numeric',
            correctAnswer: String(fx1),
            hint: `2×${x1} + ${k} = ${2 * x1 + k}.`,
            ruleApplied: 'Évaluation',
            mathExpression: `f(${x1}) = √${2 * x1 + k} = ${fx1}`,
            explanation: `f(${x1}) = ${fx1}.`,
          },
          {
            questionPrompt: `Quelle est la formule exacte de la dérivée f'(x) pour x > -${fmt(k / 2)} ?`,
            questionType: 'qcm',
            options: [
              `1 / √(2x + ${k})`,
              `2 / √(2x + ${k})`,
              `1 / (2√(2x + ${k}))`,
              `-1 / √(2x + ${k})`,
            ],
            correctAnswer: `1 / √(2x + ${k})`,
            hint: `(√u)' = u' / (2√u) avec u'(x) = 2.`,
            ruleApplied: 'Dérivée d’une fonction composée',
            mathExpression: `f'(x) = 2 / (2√(2x + ${k})) = 1 / √(2x + ${k})`,
            explanation: `Le facteur 2 du numérateur se simplifie avec celui du dénominateur.`,
          },
          {
            questionPrompt: `Calcule f'(0) (arrondi à 0,01 près si non entier).`,
            questionType: 'numeric',
            correctAnswer: fmt(fPrim0, 3),
            hint: `1 / √${k}.`,
            ruleApplied: 'Nombre dérivé',
            mathExpression: `f'(0) = 1/${f0} ≈ ${fmt(fPrim0, 3)}`,
            explanation: `f'(0) = 1/${f0} ≈ ${fmt(fPrim0, 3)}.`,
          },
          {
            questionPrompt: `Calcule f'(${x1}) (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(fPrimX1, 3),
            hint: `1 / ${fx1}.`,
            ruleApplied: 'Nombre dérivé',
            mathExpression: `f'(${x1}) = 1/${fx1} ≈ ${fmt(fPrimX1, 3)}`,
            explanation: `f'(${x1}) = 1/${fx1} ≈ ${fmt(fPrimX1, 3)}.`,
          },
          {
            questionPrompt: `Par l'inégalité des accroissements finis sur [0 ; ${x1}], quel est le majorant M = max_{[0 ; ${x1}]} f'(x) ? (arrondi à 0,001)`,
            questionType: 'numeric',
            correctAnswer: fmt(fPrim0, 3),
            hint: `f' est décroissante, son maximum sur [0 ; ${x1}] est donc en x = 0.`,
            ruleApplied: 'Inégalité des accroissements finis (IAF)',
            mathExpression: `∀x ∈ [0 ; ${x1}], ${fmt(fPrimX1, 3)} ≤ f'(x) ≤ ${fmt(fPrim0, 3)}`,
            explanation: `f'(x) est maximale en 0, d'où M = f'(0) = 1/${f0} ≈ ${fmt(fPrim0, 3)}.`,
          },
          {
            questionPrompt: `Sur [-${fmt(k / 2)} ; +∞[, f est bijective vers [0 ; +∞[. Calcule (f⁻¹)'(${fx1}) sachant f(${x1}) = ${fx1}.`,
            questionType: 'numeric',
            correctAnswer: String(fx1),
            hint: `(f⁻¹)'(${fx1}) = 1 / f'(${x1}).`,
            ruleApplied: 'Dérivée de la bijection réciproque',
            mathExpression: `(f⁻¹)'(${fx1}) = 1 / (1/${fx1}) = ${fx1}`,
            explanation: `En effet f⁻¹(y) = (y² - ${k})/2 dont la dérivée est y, valant ${fx1} en y = ${fx1}.`,
          },
          {
            questionPrompt: `Soit F(x) = (1/3)(2x + ${k})√(2x + ${k}) une primitive de f. Calcule la variation F(${x1}) - F(0) (arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmt(deltaF),
            hint: `Calcule (1/3)×(${fx1}³ - ${f0}³).`,
            ruleApplied: 'Primitive de u’ u^{1/2}',
            mathExpression: `F(${x1}) - F(0) = (${Math.pow(fx1, 3)} - ${Math.pow(f0, 3)})/3 = ${fmt(deltaF)}`,
            explanation: `(${Math.pow(fx1, 3)} - ${Math.pow(f0, 3)})/3 ≈ ${fmt(deltaF)}.`,
          },
          {
            questionPrompt: `Quelle est la concavité de f sur ]-${fmt(k / 2)} ; +∞[ ?`,
            questionType: 'qcm',
            options: [
              'f est concave car f’’(x) = -1/(2x + ' + k + ')^{3/2} < 0',
              'f est convexe car f’’(x) > 0',
              'f change de concavité en x = 0',
              'f est linéaire par morceaux',
            ],
            correctAnswer: 'f est concave car f’’(x) = -1/(2x + ' + k + ')^{3/2} < 0',
            hint: `Dérive f'(x) = (2x + ${k})^{-1/2}.`,
            ruleApplied: 'Signe de la dérivée seconde',
            mathExpression: `f''(x) = -1 / (2x + ${k})^{3/2} < 0`,
            explanation: `f''(x) < 0 partout sur le domaine de dérivabilité, donc f est strictement concave.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Dérivation composée, IAF, réciproque et primitive irrationnelle`,
          `On étudie la fonction f définie par f(x) = √(2x + ${k}) sur son ensemble de définition.`,
          items
        );
      }

      // vMod === 2: Primitives de fractions rationnelles & décomposition + IAF
      const a = pickRandom([1, 2, 3]);
      const b = a + pickRandom([2, 3]); // x^2 - (a+b)x + ab = (x-a)(x-b)
      const c1 = pickRandom([2, 3]);
      const c2 = pickRandom([1, 4]);
      // f(x) = c1/(x - a) + c2/(x - b) -> F(x) = c1 ln|x - a| + c2 ln|x - b|
      // Sur ]b ; +∞[, posons x1 = b + 1, calculons f(x1)
      const x1 = b + 1;
      const fx1 = c1 / (x1 - a) + c2 / (x1 - b);
      // En plus on étudie g(x) = 1 / ((x - a)(x - b)) = A/(x-a) + B/(x-b) avec B = 1/(b-a), A = -1/(b-a)
      const diffBA = b - a;
      const gPrim = -c1 / Math.pow(x1 - a, 2) - c2 / Math.pow(x1 - b, 2);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Soit g(x) = ${diffBA} / [(x - ${a})(x - ${b})]. On décompose g(x) = α/(x - ${a}) + β/(x - ${b}). Que vaut β ?`,
          questionType: 'numeric',
          correctAnswer: '1',
          hint: `Multiplie par (x - ${b}) et fais tendre x vers ${b}.`,
          ruleApplied: 'Décomposition en éléments simples',
          mathExpression: `β = ${diffBA} / (${b} - ${a}) = 1`,
          explanation: `En évaluant ${diffBA}/(x - ${a}) en x = ${b}, on trouve β = 1.`,
        },
        {
          questionPrompt: `Que vaut α dans g(x) = α/(x - ${a}) + 1/(x - ${b}) ?`,
          questionType: 'numeric',
          correctAnswer: '-1',
          hint: `Fais tendre x vers ${a} après multiplication par (x - ${a}).`,
          ruleApplied: 'Décomposition en éléments simples',
          mathExpression: `α = ${diffBA} / (${a} - ${b}) = -1`,
          explanation: `On vérifie : 1/(x - ${b}) - 1/(x - ${a}) = ${diffBA}/[(x-${a})(x-${b})].`,
        },
        {
          questionPrompt: `Quelle est la primitive G de g sur ]${b} ; +∞[ qui s'annule en x = ${b + 1} ?`,
          questionType: 'qcm',
          options: [
            `ln((x - ${b}) / (x - ${a})) + ln(${diffBA + 1})`,
            `ln((x - ${a}) / (x - ${b}))`,
            `ln(x - ${b}) + ln(x - ${a})`,
            `-1/(x - ${b}) + 1/(x - ${a})`,
          ],
          correctAnswer: `ln((x - ${b}) / (x - ${a})) + ln(${diffBA + 1})`,
          hint: `G(x) = ln((x - ${b})/(x - ${a})) + C avec G(${b + 1}) = 0 ⇒ ln(1/${diffBA + 1}) + C = 0.`,
          ruleApplied: 'Primitive de u’/u et condition initiale',
          mathExpression: `G(${b + 1}) = ln(1/${diffBA + 1}) + C = 0 ⇒ C = ln(${diffBA + 1})`,
          explanation: `On ajuste C = ln(${diffBA + 1}) pour que G(${b + 1}) = 0.`,
        },
        {
          questionPrompt: `On considère maintenant f(x) = ${c1}/(x - ${a}) + ${c2}/(x - ${b}) pour x > ${b}. Calcule f(${x1}) (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(fx1),
          hint: `${c1}/${x1 - a} + ${c2}/${x1 - b}.`,
          ruleApplied: 'Évaluation numérique',
          mathExpression: `f(${x1}) = ${c1}/${x1 - a} + ${c2}/1 = ${fmt(fx1)}`,
          explanation: `f(${x1}) = ${fmt(fx1)}.`,
        },
        {
          questionPrompt: `Calcule f'(${x1}) (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmt(gPrim),
          hint: `f'(x) = -${c1}/(x - ${a})² - ${c2}/(x - ${b})².`,
          ruleApplied: 'Dérivée d’inverse',
          mathExpression: `f'(${x1}) = -${c1}/${(x1 - a) ** 2} - ${c2}/1 = ${fmt(gPrim)}`,
          explanation: `f'(${x1}) = ${fmt(gPrim)}.`,
        },
        {
          questionPrompt: `Quel est le signe de f'(x) sur ]${b} ; +∞[ ?`,
          questionType: 'qcm',
          options: [
            'f’(x) < 0 : f est strictement décroissante',
            'f’(x) > 0 : f est strictement croissante',
            'f’(x) change de signe en x = ' + (b + 2),
            'f’(x) = 0 en x = ' + (b + 1),
          ],
          correctAnswer: 'f’(x) < 0 : f est strictement décroissante',
          hint: `Les deux termes de f'(x) sont négatifs car ${c1} > 0 et ${c2} > 0.`,
          ruleApplied: 'Monotonie par dérivée',
          mathExpression: `f'(x) < 0 sur ]${b} ; +∞[`,
          explanation: `La somme de deux termes strictement négatifs est strictement négative.`,
        },
        {
          questionPrompt: `Que vaut lim_{x → +∞} f(x) ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          hint: `Chaque fraction tend vers 0 quand x → +∞.`,
          ruleApplied: 'Limite à l’infini',
          mathExpression: `lim_{x→+∞} f(x) = 0 + 0 = 0`,
          explanation: `f(x) tend vers 0⁺ en +∞.`,
        },
        {
          questionPrompt: `Soit h(x) = 2x / (x² + 1)². Quelle est l'unique primitive H de h telle que H(0) = 1 ?`,
          questionType: 'qcm',
          options: [
            'H(x) = -1/(x² + 1) + 2',
            'H(x) = ln(x² + 1) + 1',
            'H(x) = 1/(x² + 1)',
            'H(x) = -2/(x² + 1) + 3',
          ],
          correctAnswer: 'H(x) = -1/(x² + 1) + 2',
          hint: `h est de la forme u' / u² avec u(x) = x² + 1.`,
          ruleApplied: 'Primitive de u’/u² = -1/u',
          mathExpression: `H(x) = -1/(x² + 1) + C avec H(0) = -1 + C = 1 ⇒ C = 2`,
          explanation: `La dérivée de -1/(x²+1) + 2 vaut bien 2x/(x²+1)², et H(0) = 1.`,
        },
        {
          questionPrompt: `Calcule H(1) = -1/2 + 2.`,
          questionType: 'numeric',
          correctAnswer: '1.5',
          hint: `Remplace x par 1.`,
          ruleApplied: 'Évaluation de primitive',
          mathExpression: `H(1) = -0,5 + 2 = 1,5`,
          explanation: `H(1) = 1,5.`,
        },
        {
          questionPrompt: `Calcule l'accroissement fini H(1) - H(0).`,
          questionType: 'numeric',
          correctAnswer: '0.5',
          hint: `1,5 - 1.`,
          ruleApplied: 'Variation d’une primitive',
          mathExpression: `H(1) - H(0) = 1,5 - 1 = 0,5`,
          explanation: `H(1) - H(0) = 0,5.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Primitives rationnelles (éléments simples, u'/u²) et dérivabilité`,
        `Problème sur la décomposition en éléments simples, la recherche de primitives avec condition initiale et l'étude de monotonie.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 7. LOGARITHMES, EXPONENTIELLES & ÉQUATIONS DIFFÉRENTIELLES
    // -------------------------------------------------------------------------
    case 'mathTc-ln-exp-equadiff': {
      if (vMod === 0) {
        // f(x) = (x + a) * e^{-x}
        const a = pickRandom([1, 2, 3]);
        // f'(x) = (1 - x - a) e^{-x} = (1 - a - x) e^{-x} -> s'annule en x_max = 1 - a
        const xMax = 1 - a;
        const yMax = Math.exp(-xMax); // (1-a+a)e^{-(1-a)} = e^{a-1}
        // f''(x) = (x + a - 2) e^{-x} -> point d'inflexion en x_infl = 2 - a
        const xInfl = 2 - a;
        const yInfl = 2 * Math.exp(-xInfl);
        const f0 = a;
        const fDeriv0 = 1 - a;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = (x + ${a})e^{-x} sur ℝ. Que vaut lim_{x → +∞} f(x) par croissance comparée ?`,
            questionType: 'numeric',
            correctAnswer: '0',
            hint: `e^x l'emporte sur tout polynôme en +∞.`,
            ruleApplied: 'Croissance comparée',
            mathExpression: `lim_{x→+∞} (x + ${a})/e^x = 0`,
            explanation: `Par croissance comparée, x e^{-x} → 0, donc lim_{+∞} f(x) = 0.`,
          },
          {
            questionPrompt: `Que vaut lim_{x → -∞} f(x) ?`,
            questionType: 'qcm',
            options: ['-∞', '+∞', '0', String(a)],
            correctAnswer: '-∞',
            hint: `Quand x → -∞, x + ${a} → -∞ et e^{-x} → +∞.`,
            ruleApplied: 'Produit de limites',
            mathExpression: `(-∞) × (+∞) = -∞`,
            explanation: `Pas de forme indéterminée en -∞ : la limite vaut -∞.`,
          },
          {
            questionPrompt: `Calcule f(0).`,
            questionType: 'numeric',
            correctAnswer: String(f0),
            hint: `e^0 = 1.`,
            ruleApplied: 'Évaluation',
            mathExpression: `f(0) = ${a} × e⁰ = ${a}`,
            explanation: `f(0) = ${a}.`,
          },
          {
            questionPrompt: `En dérivant le produit (x + ${a})e^{-x}, on obtient f'(x) = (c - x)e^{-x}. Que vaut la constante c ?`,
            questionType: 'numeric',
            correctAnswer: String(1 - a),
            hint: `f'(x) = 1·e^{-x} - (x + ${a})e^{-x}.`,
            ruleApplied: 'Dérivée d’un produit avec exponentielle',
            mathExpression: `f'(x) = (1 - ${a} - x)e^{-x} = (${1 - a} - x)e^{-x}`,
            explanation: `c = 1 - ${a} = ${1 - a}.`,
          },
          {
            questionPrompt: `Calcule le nombre dérivé f'(0).`,
            questionType: 'numeric',
            correctAnswer: String(fDeriv0),
            hint: `Remplace x par 0 dans (${1 - a} - x)e^{-x}.`,
            ruleApplied: 'Pente de la tangente en 0',
            mathExpression: `f'(0) = ${fDeriv0}`,
            explanation: `f'(0) = ${fDeriv0}.`,
          },
          {
            questionPrompt: `Pour quelle abscisse x_max la fonction f atteint-elle son maximum global sur ℝ ?`,
            questionType: 'numeric',
            correctAnswer: String(xMax),
            hint: `f'(x) = 0 ⇔ ${1 - a} - x = 0.`,
            ruleApplied: 'Extremum global',
            mathExpression: `x_max = ${xMax}`,
            explanation: `f' est positive avant ${xMax} et négative après, d'où le maximum en x = ${xMax}.`,
          },
          {
            questionPrompt: `Calcule la valeur approchée à 0,01 près du maximum f(${xMax}) = e^{${a - 1}}.`,
            questionType: 'numeric',
            correctAnswer: fmt(yMax),
            hint: `f(${xMax}) = (${xMax} + ${a})e^{${-xMax}} = e^{${a - 1}}.`,
            ruleApplied: 'Valeur du maximum',
            mathExpression: `f(${xMax}) = e^{${a - 1}} ≈ ${fmt(yMax)}`,
            explanation: `e^{${a - 1}} ≈ ${fmt(yMax)}.`,
          },
          {
            questionPrompt: `Calcule l'abscisse x_I du point d'inflexion où f''(x) = (x + ${a - 2})e^{-x} s'annule.`,
            questionType: 'numeric',
            correctAnswer: String(xInfl),
            hint: `Dérive (${1 - a} - x)e^{-x} puis annule le facteur polynomial.`,
            ruleApplied: 'Dérivée seconde et point d’inflexion',
            mathExpression: `x_I + ${a - 2} = 0 ⇒ x_I = ${xInfl}`,
            explanation: `x_I = 2 - ${a} = ${xInfl} (et l'ordonnée vaut 2e^{${a - 2}} ≈ ${fmt(yInfl)}).`,
          },
          {
            questionPrompt: `On cherche une primitive F de f sous la forme F(x) = -(x + B)e^{-x}. En vérifiant F'(x) = f(x), que vaut B ?`,
            questionType: 'numeric',
            correctAnswer: String(a + 1),
            hint: `F'(x) = (-1 + x + B)e^{-x} doit valoir (x + ${a})e^{-x}.`,
            ruleApplied: 'Primitive par identification',
            mathExpression: `B - 1 = ${a} ⇒ B = ${a + 1}`,
            explanation: `B = ${a + 1}, soit F(x) = -(x + ${a + 1})e^{-x}.`,
          },
          {
            questionPrompt: `La fonction f est solution d'une équation différentielle y' + y = k·e^{-x}. Que vaut la constante k ?`,
            questionType: 'numeric',
            correctAnswer: '1',
            hint: `Calcule f'(x) + f(x).`,
            ruleApplied: 'Équation différentielle du 1er ordre',
            mathExpression: `f'(x) + f(x) = (${1 - a} - x + x + ${a})e^{-x} = 1·e^{-x}`,
            explanation: `Les termes en x et en ${a} s'éliminent : f' + f = e^{-x}, donc k = 1.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Étude exponentielle f(x) = (x + ${a})e^{-x}, inflexion, primitive et EDO`,
          `On considère la fonction f définie sur ℝ par f(x) = (x + ${a})e^{-x}.`,
          items
        );
      }

      if (vMod === 1) {
        // f(x) = a*ln(x) - x + b sur ]0 ; +∞[ -> f'(x) = a/x - 1, maximum en x = a !
        const a = pickRandom([2, 3, 4]);
        const b = pickRandom([1, 2, 3]);
        const f1 = b - 1;
        const fMax = a * Math.log(a) - a + b;
        const f2 = a * Math.log(2) - 2 + b;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit f(x) = ${a}ln(x) - x + ${b} sur ]0 ; +∞[. Calcule lim_{x → 0⁺} f(x).`,
            questionType: 'qcm',
            options: ['-∞', '+∞', String(b), '0'],
            correctAnswer: '-∞',
            hint: `ln(x) → -∞ quand x → 0⁺.`,
            ruleApplied: 'Limite usuelle de ln en 0⁺',
            mathExpression: `lim_{x→0⁺} (${a}ln(x) - x + ${b}) = -∞`,
            explanation: `La droite x = 0 est asymptote verticale orientée vers -∞.`,
          },
          {
            questionPrompt: `Par croissance comparée, que vaut lim_{x → +∞} f(x) ?`,
            questionType: 'qcm',
            options: ['-∞', '+∞', '0', String(a)],
            correctAnswer: '-∞',
            hint: `Factorise x : f(x) = x(${a}·ln(x)/x - 1 + ${b}/x).`,
            ruleApplied: 'Croissance comparée ln(x)/x → 0',
            mathExpression: `lim_{x→+∞} x(${a}·0 - 1 + 0) = -∞`,
            explanation: `Comme ln(x)/x → 0, le facteur dominant est -x, donc lim_{+∞} f(x) = -∞.`,
          },
          {
            questionPrompt: `Calcule f(1).`,
            questionType: 'numeric',
            correctAnswer: String(f1),
            hint: `ln(1) = 0.`,
            ruleApplied: 'Propriété de ln(1)',
            mathExpression: `f(1) = 0 - 1 + ${b} = ${f1}`,
            explanation: `f(1) = ${f1}.`,
          },
          {
            questionPrompt: `Résous f'(x) = 0 pour trouver l'abscisse x_M du maximum de f.`,
            questionType: 'numeric',
            correctAnswer: String(a),
            hint: `f'(x) = ${a}/x - 1.`,
            ruleApplied: 'Dérivée de ln(x)',
            mathExpression: `${a}/x - 1 = 0 ⇔ x = ${a}`,
            explanation: `f'(x) = (${a} - x)/x change de signe (+ puis -) en x = ${a}.`,
          },
          {
            questionPrompt: `Calcule le maximum absolu f(${a}) arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(fMax),
            hint: `${a}·ln(${a}) - ${a} + ${b}.`,
            ruleApplied: 'Maximum d’une fonction logarithmique',
            mathExpression: `f(${a}) = ${a}ln(${a}) - ${a - b} ≈ ${fmt(fMax)}`,
            explanation: `f(${a}) ≈ ${fmt(fMax)}.`,
          },
          {
            questionPrompt: `Calcule le nombre dérivé f'(1).`,
            questionType: 'numeric',
            correctAnswer: String(a - 1),
            hint: `${a}/1 - 1.`,
            ruleApplied: 'Nombre dérivé',
            mathExpression: `f'(1) = ${a} - 1 = ${a - 1}`,
            explanation: `La tangente en x = 1 a pour pente ${a - 1}.`,
          },
          {
            questionPrompt: `Calcule f''(2) = -${a}/2².`,
            questionType: 'numeric',
            correctAnswer: fmt(-a / 4),
            hint: `Dérive ${a}/x - 1.`,
            ruleApplied: 'Concavité du logarithme',
            mathExpression: `f''(2) = -${a}/4 = ${fmt(-a / 4)}`,
            explanation: `f''(x) = -${a}/x² < 0 partout, donc f est strictement concave.`,
          },
          {
            questionPrompt: `À l'aide de la concavité, compare f(x) à sa tangente en x = 1 d'équation y = ${a - 1}(x - 1) + ${f1} : sur ]0 ; +∞[, la courbe C_f est toujours...`,
            questionType: 'qcm',
            options: [
              'en dessous de chacune de ses tangentes',
              'au-dessus de chacune de ses tangentes',
              'confondue avec sa tangente en x = 1',
              'sécante à la tangente en x = ' + a,
            ],
            correctAnswer: 'en dessous de chacune de ses tangentes',
            hint: `Une fonction concave a sa courbe située sous ses tangentes.`,
            ruleApplied: 'Inégalité de concavité',
            mathExpression: `f''(x) < 0 ⇒ f(x) ≤ f(x₀) + f'(x₀)(x - x₀)`,
            explanation: `Comme f'' < 0, C_f est sous toutes ses tangentes.`,
          },
          {
            questionPrompt: `Calcule f(2) arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(f2),
            hint: `${a}×0,6931 - 2 + ${b}.`,
            ruleApplied: 'Calcul numérique',
            mathExpression: `f(2) = ${a}ln(2) + ${b - 2} ≈ ${fmt(f2)}`,
            explanation: `f(2) ≈ ${fmt(f2)}.`,
          },
          {
            questionPrompt: `Combien de solutions possède l'équation f(x) = -1 sur ]0 ; +∞[ sachant f(${a}) ≈ ${fmt(fMax)} > 0 ?`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `f croît de -∞ à ${fmt(fMax)} sur ]0 ; ${a}] puis décroît de ${fmt(fMax)} à -∞ sur [${a} ; +∞[.`,
            ruleApplied: 'Dénombrement de racines par tableau de variations',
            mathExpression: `1 racine sur ]0 ; ${a}[ et 1 racine sur ]${a} ; +∞[ ⇒ 2 solutions`,
            explanation: `Par le TVI sur chacun des deux intervalles de monotonie, il y a exactement 2 solutions.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Fonction logarithmique f(x) = ${a}ln(x) - x + ${b}, concavité et TVI`,
          `On considère f(x) = ${a}ln(x) - x + ${b} définie sur ]0 ; +∞[.`,
          items
        );
      }

      // vMod === 2: Équations différentielles 1er & 2nd ordre
      const k = pickRandom([2, 3]);
      const B = pickRandom([6, 12]);
      // (E) : y' + k*y = B -> y_p = B/k, solution générale y(x) = C*e^{-kx} + B/k
      const yPart = B / k;
      const y0 = yPart + pickRandom([2, 4]);
      const C = y0 - yPart;
      const yAt1 = C * Math.exp(-k) + yPart;
      const omega = pickRandom([2, 3]);
      const A2 = pickRandom([3, 4]);
      // y'' + omega^2 y = 0, y(0) = A2, y'(0) = 0 => y(x) = A2 cos(omega x)

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On considère l'équation différentielle (E) : y' + ${k}y = ${B}. Quelle est la solution constante y_p de (E) ?`,
          questionType: 'numeric',
          correctAnswer: String(yPart),
          hint: `Si y = constante, alors y' = 0 ⇒ ${k}y_p = ${B}.`,
          ruleApplied: 'Solution particulière constante',
          mathExpression: `0 + ${k}y_p = ${B} ⇒ y_p = ${yPart}`,
          explanation: `La fonction constante égale à ${yPart} vérifie (E).`,
        },
        {
          questionPrompt: `Quelle est la forme générale des solutions de l'équation homogène associée y' + ${k}y = 0 ?`,
          questionType: 'qcm',
          options: [
            `y_H(x) = C e^{-${k}x} (C ∈ ℝ)`,
            `y_H(x) = C e^{${k}x} (C ∈ ℝ)`,
            `y_H(x) = C e^{-x/${k}} (C ∈ ℝ)`,
            `y_H(x) = ${k}x + C (C ∈ ℝ)`,
          ],
          correctAnswer: `y_H(x) = C e^{-${k}x} (C ∈ ℝ)`,
          hint: `y' = a y ⇔ y(x) = C e^{ax} avec a = -${k}.`,
          ruleApplied: 'Équation différentielle linéaire homogène',
          mathExpression: `y' = -${k}y ⇒ y_H(x) = C e^{-${k}x}`,
          explanation: `L'exposant est -${k}x.`,
        },
        {
          questionPrompt: `On impose la condition initiale y(0) = ${y0}. Détermine la constante C dans y(x) = C e^{-${k}x} + ${yPart}.`,
          questionType: 'numeric',
          correctAnswer: String(C),
          hint: `C·e⁰ + ${yPart} = ${y0}.`,
          ruleApplied: 'Problème de Cauchy (condition initiale)',
          mathExpression: `C = ${y0} - ${yPart} = ${C}`,
          explanation: `C = ${C}, d'où y(x) = ${C}e^{-${k}x} + ${yPart}.`,
        },
        {
          questionPrompt: `Calcule la dérivée initiale y'(0) sans même utiliser la formule explicite, directement grâce à (E).`,
          questionType: 'numeric',
          correctAnswer: String(B - k * y0),
          hint: `y'(0) = ${B} - ${k}·y(0).`,
          ruleApplied: 'Lecture directe sur l’EDO',
          mathExpression: `y'(0) = ${B} - ${k}×${y0} = ${B - k * y0}`,
          explanation: `y'(0) = -${k}×${C} = ${B - k * y0}.`,
        },
        {
          questionPrompt: `Que vaut lim_{x → +∞} y(x) ?`,
          questionType: 'numeric',
          correctAnswer: String(yPart),
          hint: `e^{-${k}x} → 0 en +∞.`,
          ruleApplied: 'Régime permanent asymptotique',
          mathExpression: `lim_{x→+∞} y(x) = 0 + ${yPart} = ${yPart}`,
          explanation: `La solution converge vers l'équilibre ${yPart}.`,
        },
        {
          questionPrompt: `Calcule y(1) arrondi à 0,01 près.`,
          questionType: 'numeric',
          correctAnswer: fmt(yAt1),
          hint: `${C}×e^{-${k}} + ${yPart}.`,
          ruleApplied: 'Évaluation numérique',
          mathExpression: `y(1) = ${C}e^{-${k}} + ${yPart} ≈ ${fmt(yAt1)}`,
          explanation: `y(1) ≈ ${fmt(yAt1)}.`,
        },
        {
          questionPrompt: `On étudie maintenant l'équation du 2nd ordre (E₂) : y'' + ${omega * omega}y = 0. Quelle est la pulsation ω ?`,
          questionType: 'numeric',
          correctAnswer: String(omega),
          hint: `ω² = ${omega * omega}.`,
          ruleApplied: 'Oscillateur harmonique y’’ + ω²y = 0',
          mathExpression: `ω = √${omega * omega} = ${omega}`,
          explanation: `La pulsation propre vaut ω = ${omega}.`,
        },
        {
          questionPrompt: `La solution générale de (E₂) s'écrit z(x) = A cos(${omega}x) + B sin(${omega}x). Si z(0) = ${A2} et z'(0) = 0, que vaut A ?`,
          questionType: 'numeric',
          correctAnswer: String(A2),
          hint: `z(0) = A·1 + B·0.`,
          ruleApplied: 'Conditions initiales du 2nd ordre',
          mathExpression: `A = z(0) = ${A2} et B = z'(0)/${omega} = 0`,
          explanation: `On trouve z(x) = ${A2} cos(${omega}x).`,
        },
        {
          questionPrompt: `Calcule z''(0) pour cette solution z(x) = ${A2} cos(${omega}x).`,
          questionType: 'numeric',
          correctAnswer: String(-omega * omega * A2),
          hint: `z''(0) = -${omega * omega} z(0).`,
          ruleApplied: 'Relation différentielle',
          mathExpression: `z''(0) = -${omega * omega} × ${A2} = ${-omega * omega * A2}`,
          explanation: `z''(0) = ${-omega * omega * A2}.`,
        },
        {
          questionPrompt: `Quelle est la période T = 2π / ${omega} de z(x) (arrondie à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmt((2 * Math.PI) / omega),
          hint: `Divise 2π par ${omega}.`,
          ruleApplied: 'Périodicité des solutions sinusoïdales',
          mathExpression: `T = 2π / ${omega} ≈ ${fmt((2 * Math.PI) / omega)}`,
          explanation: `T ≈ ${fmt((2 * Math.PI) / omega)}.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Équations différentielles linéaires du 1er et du 2nd ordre`,
        `Problème couplant (E) : y' + ${k}y = ${B} (y(0) = ${y0}) et (E₂) : y'' + ${omega * omega}y = 0.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 8. SUITES NUMÉRIQUES & RÉCURRENCE
    // -------------------------------------------------------------------------
    case 'mathTc-suites-recurrence': {
      if (vMod === 0) {
        // Suite homographique u_{n+1} = (5 u_n - 4) / (u_n + 1) ? Points fixes: x^2 - 4x + 4 = 0 (double) -> prenons 2 points fixes distincts !
        // u_{n+1} = (5 u_n - 6) / u_n => x^2 - 5x + 6 = 0 => points fixes alpha = 2, beta = 3 !
        // Ou généralisons avec r = 2 ou 3 : f(x) = (4x - 2)/(x + 1) -> x^2 + x = 4x - 2 -> x^2 - 3x + 2 = 0 -> alpha = 1, beta = 2 !
        // Vérifions v_n = (u_n - 1)/(u_n - 2):
        // v_{n+1} = ((4u-2)/(u+1) - 1) / ((4u-2)/(u+1) - 2) = (3u - 3) / (2u - 4) = (3/2) * (u - 1)/(u - 2) = 1.5 v_n !
        // Inversement avec f(x) = (5x - 2)/(x + 2): x^2 + 2x = 5x - 2 -> x^2 - 3x + 2 = 0 -> alpha=1, beta=2.
        // v_{n+1} = (4u - 4)/(3u - 6) = (4/3) v_n ! Pour convergence vers 2, on veut |q| < 1 !
        // Cherchons q = 1/2 : (u_{n+1} - alpha)/(u_{n+1} - beta) = (1/2)(u_n - alpha)/(u_n - beta)
        // Avec alpha = 1, beta = 3, q = 1/2:
        // u_{n+1} - 1 = k(u - 1) et u_{n+1} - 3 = 2k(u - 3) -> en résolvant : u_{n+1} = (5 u_n - 3) / (u_n + 1) !
        // Vérifions u_{n+1} = (5 u_n - 3) / (u_n + 1):
        // Point fixe: x^2 + x = 5x - 3 => x^2 - 4x + 3 = 0 => racines 1 et 3 !
        // (u_{n+1} - 1) = (4u - 4)/(u+1) ; (u_{n+1} - 3) = (2u - 6)/(u+1)
        // Donc (u_{n+1} - 3)/(u_{n+1} - 1) = [2(u - 3)] / [4(u - 1)] = (1/2) * (u_n - 3)/(u_n - 1) ! Raison q = 0.5 !
        // Encore mieux : paramétrons autour de u0 = pickRandom([4, 5, 7]) (tous > 3, donc u_n décroît et converge vers 3 !).
        const u0 = pickRandom([4, 5, 7]);
        const u1 = (5 * u0 - 3) / (u0 + 1);
        const u2 = (5 * u1 - 3) / (u1 + 1);
        const v0 = (u0 - 3) / (u0 - 1);
        const q = 0.5;
        const v1 = q * v0;
        const v2 = q * q * v0;
        // u_n = (3 - v_n) / (1 - v_n)

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On définit (u_n) par u₀ = ${u0} et u_{n+1} = (5u_n - 3)/(u_n + 1). Calcule u₁ (arrondi à 0,01 près si besoin).`,
            questionType: 'numeric',
            correctAnswer: fmt(u1),
            hint: `(5×${u0} - 3) / (${u0} + 1).`,
            ruleApplied: 'Calcul des premiers termes',
            mathExpression: `u₁ = ${5 * u0 - 3} / ${u0 + 1} = ${fmt(u1)}`,
            explanation: `u₁ = ${fmt(u1)}.`,
          },
          {
            questionPrompt: `Calcule u₂ arrondi à 0,01 près.`,
            questionType: 'numeric',
            correctAnswer: fmt(u2),
            hint: `Applique la relation de récurrence à u₁ = ${fmt(u1)}.`,
            ruleApplied: 'Itération homographique',
            mathExpression: `u₂ = (5×${fmt(u1)} - 3)/(${fmt(u1)} + 1) ≈ ${fmt(u2)}`,
            explanation: `u₂ ≈ ${fmt(u2)}.`,
          },
          {
            questionPrompt: `Détermine la plus grande des deux solutions de l'équation aux points fixes f(x) = x, soit x² - 4x + 3 = 0.`,
            questionType: 'numeric',
            correctAnswer: '3',
            hint: `Factorise (x - 1)(x - 3) = 0.`,
            ruleApplied: 'Points fixes de la fonction de récurrence',
            mathExpression: `x² - 4x + 3 = 0 ⇔ x ∈ {1 ; 3}`,
            explanation: `Les deux points fixes sont 1 et 3 ; le plus grand vaut 3.`,
          },
          {
            questionPrompt: `En étudiant f(x) - 3 = 2(x - 3)/(x + 1), si u_n > 3, alors u_{n+1} est :`,
            questionType: 'qcm',
            options: [
              'strictement supérieur à 3 et inférieur à u_n (suite décroissante minorée)',
              'inférieur à 1',
              'strictement supérieur à u_n (suite croissante)',
              'égal à 3 dès n = 2',
            ],
            correctAnswer: 'strictement supérieur à 3 et inférieur à u_n (suite décroissante minorée)',
            hint: `Par récurrence u_n > 3, et u_{n+1} - u_n = -(u_n - 1)(u_n - 3)/(u_n + 1) < 0.`,
            ruleApplied: 'Monotonie et minoration par récurrence',
            mathExpression: `3 < u_{n+1} < u_n`,
            explanation: `La suite est décroissante et minorée par 3, donc convergente.`,
          },
          {
            questionPrompt: `On pose v_n = (u_n - 3) / (u_n - 1). Calcule v₀ (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(v0, 3),
            hint: `(${u0} - 3) / (${u0} - 1).`,
            ruleApplied: 'Suite auxiliaire homographique',
            mathExpression: `v₀ = ${u0 - 3} / ${u0 - 1} = ${fmt(v0, 3)}`,
            explanation: `v₀ = ${fmt(v0, 3)}.`,
          },
          {
            questionPrompt: `Quelle est la raison géométrique q de la suite (v_n) telle que v_{n+1} = q · v_n ?`,
            questionType: 'numeric',
            correctAnswer: '0.5',
            hint: `(u_{n+1} - 3)/(u_{n+1} - 1) = [2(u_n - 3)] / [4(u_n - 1)].`,
            ruleApplied: 'Simplification de suite homographique',
            mathExpression: `v_{n+1} = (2/4) v_n = 0,5 · v_n`,
            explanation: `La suite (v_n) est géométrique de raison q = 0,5.`,
          },
          {
            questionPrompt: `Calcule v₁ = 0,5 · v₀ (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(v1, 3),
            hint: `Divise v₀ par 2.`,
            ruleApplied: 'Terme d’une suite géométrique',
            mathExpression: `v₁ = 0,5 × ${fmt(v0, 3)} = ${fmt(v1, 3)}`,
            explanation: `v₁ ≈ ${fmt(v1, 3)}.`,
          },
          {
            questionPrompt: `Calcule v₂ (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(v2, 3),
            hint: `v₂ = 0,25 × v₀.`,
            ruleApplied: 'Terme d’une suite géométrique',
            mathExpression: `v₂ ≈ ${fmt(v2, 3)}`,
            explanation: `v₂ ≈ ${fmt(v2, 3)}.`,
          },
          {
            questionPrompt: `Exprime u_n en fonction de v_n : u_n = (3 - v_n) / (1 - v_n). En déduire lim_{n → +∞} u_n.`,
            questionType: 'numeric',
            correctAnswer: '3',
            hint: `Comme |0,5| < 1, v_n → 0.`,
            ruleApplied: 'Passage à la limite via suite auxiliaire',
            mathExpression: `lim u_n = (3 - 0)/(1 - 0) = 3`,
            explanation: `v_n → 0 entraîne u_n → 3.`,
          },
          {
            questionPrompt: `Calcule la somme infinie ∑_{n=0}^{+∞} v_n = v₀ / (1 - q) (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmt(v0 / 0.5),
            hint: `Divise v₀ par (1 - 0,5) = 0,5, ce qui revient à multiplier v₀ par 2.`,
            ruleApplied: 'Série géométrique',
            mathExpression: `S_∞ = 2 · v₀ = ${fmt(2 * v0)}`,
            explanation: `La série des v_n converge vers 2·v₀ ≈ ${fmt(2 * v0)}.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Suite homographique u_{n+1} = (5u_n - 3)/(u_n + 1) et convergence`,
          `On considère la suite définie par u₀ = ${u0} et u_{n+1} = (5u_n - 3)/(u_n + 1).`,
          items
        );
      }

      if (vMod === 1) {
        // Récurrence linéaire d'ordre 2 : u_{n+2} = 5 u_{n+1} - 6 u_n (racines 2 et 3 !)
        // Avec u_n = A*2^n + B*3^n
        const A = pickRandom([1, 2, -1]);
        const B = pickRandom([1, 2]);
        const u0 = A + B;
        const u1 = 2 * A + 3 * B;
        const u2 = 5 * u1 - 6 * u0;
        const u3 = 5 * u2 - 6 * u1;
        const u4 = 5 * u3 - 6 * u2;
        const S3 = u0 + u1 + u2 + u3;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Soit (u_n) définie par u₀ = ${u0}, u₁ = ${u1} et u_{n+2} = 5u_{n+1} - 6u_n. Calcule u₂.`,
            questionType: 'numeric',
            correctAnswer: String(u2),
            hint: `5×(${u1}) - 6×(${u0}).`,
            ruleApplied: 'Récurrence linéaire d’ordre 2',
            mathExpression: `u₂ = ${5 * u1} - ${6 * u0} = ${u2}`,
            explanation: `u₂ = ${u2}.`,
          },
          {
            questionPrompt: `Calcule u₃.`,
            questionType: 'numeric',
            correctAnswer: String(u3),
            hint: `5u₂ - 6u₁.`,
            ruleApplied: 'Relation de récurrence',
            mathExpression: `u₃ = 5×(${u2}) - 6×(${u1}) = ${u3}`,
            explanation: `u₃ = ${u3}.`,
          },
          {
            questionPrompt: `Calcule u₄.`,
            questionType: 'numeric',
            correctAnswer: String(u4),
            hint: `5u₃ - 6u₂.`,
            ruleApplied: 'Relation de récurrence',
            mathExpression: `u₄ = 5×(${u3}) - 6×(${u2}) = ${u4}`,
            explanation: `u₄ = ${u4}.`,
          },
          {
            questionPrompt: `Quelle est l'équation caractéristique associée à u_{n+2} - 5u_{n+1} + 6u_n = 0 ?`,
            questionType: 'qcm',
            options: ['r² - 5r + 6 = 0', 'r² + 5r + 6 = 0', 'r² - 6r + 5 = 0', '5r - 6 = 0'],
            correctAnswer: 'r² - 5r + 6 = 0',
            hint: `Cherche les solutions géométriques u_n = r^n.`,
            ruleApplied: 'Équation caractéristique',
            mathExpression: `r² - 5r + 6 = 0`,
            explanation: `r^{n+2} - 5r^{n+1} + 6r^n = 0 donne r² - 5r + 6 = 0.`,
          },
          {
            questionPrompt: `Détermine la plus grande racine r₂ de r² - 5r + 6 = 0.`,
            questionType: 'numeric',
            correctAnswer: '3',
            hint: `(r - 2)(r - 3) = 0.`,
            ruleApplied: 'Racines caractéristiques',
            mathExpression: `r₁ = 2, r₂ = 3`,
            explanation: `Les deux racines sont 2 et 3.`,
          },
          {
            questionPrompt: `En écrivant u_n = A·2ⁿ + B·3ⁿ, résous le système A + B = ${u0} et 2A + 3B = ${u1}. Que vaut B ?`,
            questionType: 'numeric',
            correctAnswer: String(B),
            hint: `B = u₁ - 2u₀.`,
            ruleApplied: 'Formule de Binet généralisée',
            mathExpression: `B = ${u1} - 2×(${u0}) = ${B}`,
            explanation: `On trouve B = ${B}.`,
          },
          {
            questionPrompt: `Que vaut le coefficient A ?`,
            questionType: 'numeric',
            correctAnswer: String(A),
            hint: `A = u₀ - B.`,
            ruleApplied: 'Identification des constantes',
            mathExpression: `A = ${u0} - ${B} = ${A}`,
            explanation: `A = ${A}, donc u_n = ${A}·2ⁿ + ${B}·3ⁿ.`,
          },
          {
            questionPrompt: `Calcule la somme partielle S₃ = u₀ + u₁ + u₂ + u₃.`,
            questionType: 'numeric',
            correctAnswer: String(S3),
            hint: `Additionne les 4 premiers termes.`,
            ruleApplied: 'Somme de termes',
            mathExpression: `S₃ = ${u0} + ${u1} + ${u2} + ${u3} = ${S3}`,
            explanation: `S₃ = ${S3}.`,
          },
          {
            questionPrompt: `Calcule la limite lim_{n → +∞} (u_n / 3ⁿ).`,
            questionType: 'numeric',
            correctAnswer: String(B),
            hint: `u_n / 3ⁿ = A·(2/3)ⁿ + B.`,
            ruleApplied: 'Comportement asymptotique',
            mathExpression: `lim (u_n / 3ⁿ) = ${A}×0 + ${B} = ${B}`,
            explanation: `Comme (2/3)ⁿ → 0, le rapport converge vers B = ${B}.`,
          },
          {
            questionPrompt: `On pose w_n = u_{n+1} - 2 u_n. Vérifie par la formule explicite que w_n = ${B}·3ⁿ. Quelle est la raison géométrique de (w_n) ?`,
            questionType: 'numeric',
            correctAnswer: '3',
            hint: `w_{n+1} / w_n.`,
            ruleApplied: 'Suite auxiliaire d’ordre 1',
            mathExpression: `w_{n+1} = u_{n+2} - 2u_{n+1} = 3(u_{n+1} - 2u_n) = 3 w_n`,
            explanation: `La suite auxiliaire w_n est géométrique de raison 3.`,
          },
        ];

        return assembleHardMathExercise(
          chapterId,
          difficulty,
          `Récurrence linéaire d'ordre 2 u_{n+2} = 5u_{n+1} - 6u_n et asymptotique`,
          `On considère la suite (u_n) définie par u₀ = ${u0}, u₁ = ${u1} et pour tout n ∈ ℕ, u_{n+2} = 5u_{n+1} - 6u_n.`,
          items
        );
      }

      // vMod === 2: Suite définie par somme télescopique et encadrement
      // u_n = sum_{k=1}^n 1/(k(k+1)) = 1 - 1/(n+1) et v_n = u_n + 1/(n+1) ou autre somme S_n = sum_{k=1}^n 1/k^2 <= 2 - 1/n
      const m = pickRandom([1, 2, 3]);
      // u_n = m * sum_{k=1}^n 1/(k(k+1)) = m * (1 - 1/(n+1))
      const u1 = m / 2;
      const u2 = (2 * m) / 3;
      const u3 = (3 * m) / 4;
      const u9 = (9 * m) / 10;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On pose u_n = ∑_{k=1}^n ${m}/[k(k+1)] pour n ≥ 1. Calcule u₁.`,
          questionType: 'numeric',
          correctAnswer: fmt(u1),
          hint: `Pour k = 1, le terme vaut ${m}/(1×2).`,
          ruleApplied: 'Premier terme d’une somme',
          mathExpression: `u₁ = ${m}/2 = ${fmt(u1)}`,
          explanation: `u₁ = ${fmt(u1)}.`,
        },
        {
          questionPrompt: `Calcule u₂ = u₁ + ${m}/(2×3) (arrondi à 0,01 près si besoin).`,
          questionType: 'numeric',
          correctAnswer: fmt(u2),
          hint: `${m}/2 + ${m}/6 = 2×${m}/3.`,
          ruleApplied: 'Addition de termes',
          mathExpression: `u₂ = ${m}×(2/3) = ${fmt(u2)}`,
          explanation: `u₂ ≈ ${fmt(u2)}.`,
        },
        {
          questionPrompt: `Décompose 1/[k(k+1)] = A/k + B/(k+1). Que vaut B ?`,
          questionType: 'numeric',
          correctAnswer: '-1',
          hint: `1/k - 1/(k+1) = 1/[k(k+1)].`,
          ruleApplied: 'Décomposition télescopique',
          mathExpression: `1/[k(k+1)] = 1/k - 1/(k+1)`,
          explanation: `A = 1 et B = -1.`,
        },
        {
          questionPrompt: `Par télescopage, quelle est l'expression explicite exacte de u_n en fonction de n ?`,
          questionType: 'qcm',
          options: [
            `${m} · (1 - 1/(n + 1))`,
            `${m} · (1 + 1/(n + 1))`,
            `${m} · (1 - 1/n)`,
            `${m} · n / (n + 2)`,
          ],
          correctAnswer: `${m} · (1 - 1/(n + 1))`,
          hint: `∑_{k=1}^n (1/k - 1/(k+1)) = 1 - 1/(n+1).`,
          ruleApplied: 'Somme télescopique',
          mathExpression: `u_n = ${m}[1 - 1/(n + 1)] = ${m}n / (n + 1)`,
          explanation: `Tous les termes intermédiaires s'annulent deux à deux.`,
        },
        {
          questionPrompt: `Calcule u₃ à l'aide de la formule explicite.`,
          questionType: 'numeric',
          correctAnswer: fmt(u3),
          hint: `${m} × 3 / 4.`,
          ruleApplied: 'Formule explicite',
          mathExpression: `u₃ = ${m}×(3/4) = ${fmt(u3)}`,
          explanation: `u₃ = ${fmt(u3)}.`,
        },
        {
          questionPrompt: `Calcule u₉.`,
          questionType: 'numeric',
          correctAnswer: fmt(u9),
          hint: `${m} × 9 / 10.`,
          ruleApplied: 'Formule explicite',
          mathExpression: `u₉ = ${m}×0,9 = ${fmt(u9)}`,
          explanation: `u₉ = ${fmt(u9)}.`,
        },
        {
          questionPrompt: `Quel est le sens de variation de la suite (u_n) ?`,
          questionType: 'qcm',
          options: [
            'Strictement croissante car u_{n+1} - u_n = ' + m + '/[(n+1)(n+2)] > 0',
            'Strictement décroissante',
            'Stationnaire à partir de n = 5',
            'Alternée',
          ],
          correctAnswer: 'Strictement croissante car u_{n+1} - u_n = ' + m + '/[(n+1)(n+2)] > 0',
          hint: `On ajoute à chaque rang un terme strictement positif.`,
          ruleApplied: 'Monotonie par différence u_{n+1} - u_n',
          mathExpression: `u_{n+1} - u_n > 0 ∀n ≥ 1`,
          explanation: `(u_n) est strictement croissante et majorée par ${m}.`,
        },
        {
          questionPrompt: `Calcule la limite L = lim_{n → +∞} u_n.`,
          questionType: 'numeric',
          correctAnswer: String(m),
          hint: `1/(n+1) → 0.`,
          ruleApplied: 'Convergence d’une suite croissante majorée',
          mathExpression: `lim_{n→+∞} ${m}[1 - 1/(n+1)] = ${m}`,
          explanation: `La suite converge vers ${m}.`,
        },
        {
          questionPrompt: `En utilisant 1/k² ≤ 1/[k(k-1)] pour k ≥ 2, quel est le majorant classique de S_n = ∑_{k=1}^n 1/k² ?`,
          questionType: 'numeric',
          correctAnswer: '2',
          hint: `1 + ∑_{k=2}^n (1/(k-1) - 1/k) = 2 - 1/n < 2.`,
          ruleApplied: 'Majoration de la série de Riemann ∑ 1/k²',
          mathExpression: `S_n ≤ 1 + (1 - 1/n) = 2 - 1/n < 2`,
          explanation: `La comparaison avec le télescopage prouve S_n < 2 pour tout n ≥ 1 (et la série converge vers π²/6).`,
        },
        {
          questionPrompt: `À partir de quel rang n a-t-on ${m} - u_n ≤ 0,01 (soit ${m}/(n + 1) ≤ 0,01) ?`,
          questionType: 'numeric',
          correctAnswer: String(100 * m - 1),
          hint: `n + 1 ≥ 100 × ${m}.`,
          ruleApplied: 'Seuil de convergence',
          mathExpression: `n + 1 ≥ ${100 * m} ⇒ n ≥ ${100 * m - 1}`,
          explanation: `Pour n = ${100 * m - 1}, l'écart vaut exactement 0,01.`,
        },
      ];

      return assembleHardMathExercise(
        chapterId,
        difficulty,
        `Somme télescopique, majoration de ∑ 1/k² et seuil de convergence`,
        `On étudie la suite u_n = ∑_{k=1}^n ${m}/[k(k+1)] et son lien avec la majoration de la série ∑ 1/k².`,
        items
      );
    }

    default:
      return null;
  }
}
