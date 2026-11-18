import { ExerciseDifficulty } from '../../types/math';
import { CHAPTERS } from '../curriculumData';
import { DIFFICULTY_META, GeneratedExercise, pickRandom, randFloat, randInt } from './types';
import { generateMath3emeExercise } from './math3emeGenerators';
import { generateMathTcExercise } from './mathTcGenerators';

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function makeResult(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  partial: Omit<GeneratedExercise, 'chapterId' | 'chapterTitle' | 'difficulty' | 'difficultyLabel'>
): GeneratedExercise {
  const chap = CHAPTERS.find((c) => c.id === chapterId);
  return {
    chapterId,
    chapterTitle: chap?.title || chapterId,
    difficulty,
    difficultyLabel: DIFFICULTY_META[difficulty].label,
    ...partial,
  };
}

export function generateMathExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  if (chapterId.startsWith('mathTc-')) {
    return generateMathTcExercise(chapterId, difficulty, variantIndex);
  }
  if (chapterId.startsWith('math3-')) {
    return generateMath3emeExercise(chapterId, difficulty, variantIndex);
  }
  // 1. NOMBRES RELATIFS
  if (chapterId === 'nombres-relatifs-operations') {
    if (difficulty === 1) {
      const a = -randInt(2, 9);
      const b = randInt(2, 9);
      const res = a * b;
      return makeResult(chapterId, difficulty, {
        title: 'Produit simple de deux nombres relatifs',
        prompt: `Calculer le produit suivant :\nA = (${a}) × (+${b})`,
        hint: 'Un nombre négatif multiplié par un nombre positif donne toujours un résultat négatif (−).',
        questionType: 'numeric',
        correctAnswer: String(res),
        explanationFinal: `A = ${res}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Déterminer le signe du produit',
            explanation: 'Il y a 1 signe (−) et 1 signe (+) : signes contraires ➔ produit négatif (−).',
            mathExpression: `A = (${a}) × (+${b}) | Signe = (−)`,
            ruleApplied: '(-) × (+) = (-)',
          },
          {
            stepNumber: 2,
            title: 'Multiplier les distances à zéro',
            explanation: `${Math.abs(a)} × ${b} = ${Math.abs(res)}, donc A = ${res}.`,
            mathExpression: `A = -(${Math.abs(a)} × ${b}) | A = ${res}`,
            subResult: `A = ${res}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = -randInt(2, 6);
      const b = -randInt(2, 6);
      const c = -randInt(2, 4);
      const ab = a * b;
      const res = ab * c;
      return makeResult(chapterId, difficulty, {
        title: 'Produit de 3 facteurs relatifs (Compteur de signes −)',
        prompt: `Calculer l’expression suivante en détaillant les signes :\nB = (${a}) × (${b}) × (${c})`,
        hint: 'Compte le nombre de facteurs négatifs : 3 est impair, donc le résultat final est négatif !',
        questionType: 'numeric',
        correctAnswer: String(res),
        explanationFinal: `Le produit vaut B = ${res}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Compter les facteurs négatifs',
            explanation: 'Il y a 3 facteurs négatifs (nombre impair) ➔ signe final (−).',
            mathExpression: `(${a}) × (${b}) = +${ab}`,
            ruleApplied: 'Nombre impair de (−) ➔ produit négatif (−)',
          },
          {
            stepNumber: 2,
            title: 'Achever la multiplication debout',
            explanation: `(+${ab}) × (${c}) = ${res}.`,
            mathExpression: `B = (+${ab}) × (${c}) | B = ${res}`,
            subResult: `B = ${res}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const b = -randInt(3, 8);
      const q = -randInt(4, 9);
      const num = b * q;
      const d = randInt(3, 12);
      const res = q - d;
      return makeResult(chapterId, difficulty, {
        title: 'Priorités opératoires avec quotient de relatifs',
        prompt: `Calculer en respectant les priorités opératoires :\nC = (${num}) ÷ (${b}) - ${d}`,
        hint: 'La division est prioritaire sur la soustraction ! Commence par (+...) = (${num}) ÷ (${b}).',
        questionType: 'numeric',
        correctAnswer: String(res),
        explanationFinal: `C = ${res}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer d’abord la division (signes contraires)',
            explanation: `(+${num}) ÷ (${b}) = ${q} car (+) ÷ (−) = (−).`,
            mathExpression: `C = (${num}) ÷ (${b}) - ${d} | C = ${q} - ${d}`,
            ruleApplied: 'Division prioritaire : (+) ÷ (-) = (-)',
          },
          {
            stepNumber: 2,
            title: 'Effectuer la soustraction finale',
            explanation: `${q} - ${d} = ${res}.`,
            mathExpression: `C = ${q} - ${d} | C = ${res}`,
            subResult: `C = ${res}`,
          },
        ],
      });
    }
    const depot = randInt(4, 9) * 1000;
    const retrait = randInt(2, 4) * 1500;
    const nbJours = randInt(3, 5);
    const solde = depot - nbJours * retrait;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Bilan Mobile Money en F CFA',
      prompt: `Moussa a ${depot.toLocaleString('fr-FR')} F CFA sur son compte Airtel Money à Libreville.\nPendant ${nbJours} jours, il dépense chaque jour ${retrait.toLocaleString('fr-FR')} F CFA (noté −${retrait}).\nQuel est son solde final (nombre relatif en F CFA, ex: -1500 ou 2000) ?`,
      hint: `Calcule ${depot} + ${nbJours} × (-${retrait}).`,
      questionType: 'numeric',
      unit: 'F CFA',
      correctAnswer: String(solde),
      explanationFinal: `Le bilan est de ${solde} F CFA (${solde < 0 ? 'découvert' : 'crédit'}).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Traduire en expression numérique',
          explanation: `Total des dépenses = ${nbJours} × (-${retrait}) = ${-nbJours * retrait} F CFA.`,
          mathExpression: `Solde = ${depot} + ${nbJours} × (-${retrait}) | Solde = ${depot} - ${nbJours * retrait}`,
          ruleApplied: 'La multiplication est prioritaire.',
        },
        {
          stepNumber: 2,
          title: 'Calculer le solde final debout',
          explanation: `${depot} - ${nbJours * retrait} = ${solde} F CFA.`,
          mathExpression: `Solde = ${solde} F CFA`,
          subResult: `${solde} F CFA`,
        },
      ],
    });
  }

  // 2. PUISSANCES & NOTATION SCIENTIFIQUE
  if (chapterId === 'puissances-notation-scientifique') {
    if (difficulty === 1) {
      const base = randInt(2, 5);
      const exp = randInt(2, 4);
      const val = Math.pow(base, exp);
      return makeResult(chapterId, difficulty, {
        title: 'Calculer une puissance aⁿ',
        prompt: `Calculer la valeur exacte de :\nP = ${base}^${exp}`,
        hint: `${base}^${exp} signifie qu’on multiplie ${base} par lui-même ${exp} fois.`,
        questionType: 'numeric',
        correctAnswer: String(val),
        explanationFinal: `${base}^${exp} = ${val}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire le produit développé',
            explanation: `On répète le facteur ${base} exactement ${exp} fois.`,
            mathExpression: `P = ${Array(exp).fill(base).join(' × ')}`,
            ruleApplied: 'aⁿ = a × a × ... × a (n fois)',
          },
          {
            stepNumber: 2,
            title: 'Calculer le produit debout',
            explanation: `Le résultat vaut ${val}.`,
            mathExpression: `P = ${val}`,
            subResult: `${val}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const n = randInt(3, 7);
      const m = -randInt(1, 3);
      const sum = n + m;
      return makeResult(chapterId, difficulty, {
        title: 'Produit de puissances de 10 : 10ⁿ × 10ᵐ',
        prompt: `Écrire sous la forme 10^k. Quel est l’exposant k pour :\nA = 10^${n} × 10^(${m}) ?`,
        hint: 'Pour multiplier deux puissances de 10, on ADDITIONNE les exposants : n + m.',
        questionType: 'numeric',
        correctAnswer: String(sum),
        explanationFinal: `A = 10^${sum}, donc l’exposant vaut k = ${sum}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la règle 10ⁿ × 10ᵐ = 10^(n+m)',
            explanation: `On additionne ${n} et (${m}).`,
            mathExpression: `A = 10^(${n} + (${m})) | A = 10^${sum}`,
            ruleApplied: '10ⁿ × 10ᵐ = 10^(n + m)',
          },
          {
            stepNumber: 2,
            title: 'Identifier l’exposant k',
            explanation: `k = ${sum}.`,
            mathExpression: `k = ${sum}`,
            subResult: `10^${sum}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = pickRandom([2.5, 3.4, 4.8, 6.2, 7.5]);
      const p = randInt(4, 6);
      const val = a * Math.pow(10, p);
      return makeResult(chapterId, difficulty, {
        title: 'Écriture scientifique d’un grand nombre',
        prompt: `Quelle est l’écriture scientifique de ${val.toLocaleString('fr-FR')} ?`,
        hint: 'Place la virgule juste après le premier chiffre non nul (entre 1 et 9), puis compte le nombre de décalages vers la gauche.',
        questionType: 'qcm',
        options: [
          `${a} × 10^${p}`,
          `${a} × 10^${p - 1}`,
          `${Math.round(a * 10)} × 10^${p - 1}`,
          `${a} × 10^-${p}`,
        ],
        correctAnswer: `${a} × 10^${p}`,
        explanationFinal: `L’écriture scientifique est ${a} × 10^${p}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Trouver la mantisse comprise entre 1 et 10',
            explanation: `La mantisse vaut a = ${a} (1 ≤ ${a} < 10).`,
            mathExpression: `${val} = ${a} × ${Math.pow(10, p)}`,
            ruleApplied: 'Écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10',
          },
          {
            stepNumber: 2,
            title: 'Écrire la puissance de 10',
            explanation: `On décale la virgule de ${p} rangs ➔ 10^${p}.`,
            mathExpression: `= ${a} × 10^${p}`,
          },
        ],
      });
    }
    const n1 = randInt(4, 7);
    const n2 = randInt(2, 4);
    const n3 = randInt(2, 4);
    const k = n1 + n2 - n3;
    const budget = randInt(2, 8);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Budget forestier avec quotient de puissances',
      prompt: `On simplifie le montant suivant en F CFA :\nM = (${budget} × 10^${n1} × 10^${n2}) ÷ 10^${n3}\nOn obtient ${budget} × 10^k. Quel est l’exposant k ?`,
      hint: `Calcule d’abord ${n1} + ${n2} au numérateur, puis soustrais ${n3} !`,
      questionType: 'numeric',
      correctAnswer: String(k),
      explanationFinal: `M = ${budget} × 10^${k}, donc k = ${k}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Regrouper les puissances au numérateur',
          explanation: `10^${n1} × 10^${n2} = 10^(${n1}+${n2}) = 10^${n1 + n2}.`,
          mathExpression: `M = (${budget} × 10^${n1 + n2}) ÷ 10^${n3}`,
          ruleApplied: '10ⁿ × 10ᵐ = 10^(n+m)',
        },
        {
          stepNumber: 2,
          title: 'Diviser les puissances de 10',
          explanation: `10^${n1 + n2} ÷ 10^${n3} = 10^(${n1 + n2} - ${n3}) = 10^${k}.`,
          mathExpression: `M = ${budget} × 10^${k} | k = ${k}`,
          subResult: `k = ${k}`,
        },
      ],
    });
  }

  // 3. FRACTIONS
  if (chapterId === 'fractions-operations') {
    if (difficulty === 1) {
      const den = pickRandom([5, 7, 9, 11]);
      const a = randInt(1, den - 2);
      const b = randInt(1, den - a);
      const sum = a + b;
      const g = gcd(sum, den);
      const simp = `${sum / g}/${den / g}`;
      return makeResult(chapterId, difficulty, {
        title: 'Addition de fractions de même dénominateur',
        prompt: `Calculer et simplifier si possible (format a/b) :\nF = ${a}/${den} + ${b}/${den}`,
        hint: `Garde le même dénominateur ${den} et additionne les numérateurs ${a} + ${b}.`,
        questionType: 'text',
        correctAnswer: simp,
        explanationFinal: `F = ${simp}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Additionner les numérateurs',
            explanation: `Même dénominateur (${den}) : (${a} + ${b}) / ${den}.`,
            mathExpression: `F = (${a} + ${b}) / ${den} | F = ${sum}/${den}`,
            ruleApplied: 'a/c + b/c = (a + b)/c',
          },
          {
            stepNumber: 2,
            title: 'Simplifier la fraction',
            explanation: g > 1 ? `On divise par ${g} : ${simp}.` : `${simp} est déjà irréductible.`,
            mathExpression: `F = ${simp}`,
            subResult: simp,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(1, 3);
      const b = pickRandom([2, 3]);
      const mult = randInt(2, 3);
      const d = b * mult;
      const c = randInt(1, d - 1);
      const num = a * mult + c;
      const g = gcd(num, d);
      const simp = `${num / g}/${d / g}`;
      return makeResult(chapterId, difficulty, {
        title: 'Somme de fractions de dénominateurs multiples',
        prompt: `Calculer et rendre irréductible (format a/b) :\nS = ${a}/${b} + ${c}/${d}`,
        hint: `Transforme ${a}/${b} en fraction sur ${d} en multipliant haut et bas par ${mult}.`,
        questionType: 'text',
        correctAnswer: simp,
        explanationFinal: `S = ${simp}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Mettre au dénominateur commun ${d}`,
            explanation: `${a}/${b} = (${a}×${mult}) / (${b}×${mult}) = ${a * mult}/${d}.`,
            mathExpression: `S = ${a * mult}/${d} + ${c}/${d}`,
            ruleApplied: 'Mettre au même dénominateur avant d’additionner.',
          },
          {
            stepNumber: 2,
            title: 'Additionner et simplifier',
            explanation: `${a * mult} + ${c} = ${num}, puis on simplifie ➔ ${simp}.`,
            mathExpression: `S = ${num}/${d} | S = ${simp}`,
            subResult: simp,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(2, 5);
      const b = pickRandom([3, 5, 7]);
      const c = randInt(2, 5);
      const d = pickRandom([2, 4, 7]);
      const num = a * d;
      const den = b * c;
      const g = gcd(num, den);
      const simp = `${num / g}/${den / g}`;
      return makeResult(chapterId, difficulty, {
        title: 'Division de deux fractions (Multiplier par l’inverse)',
        prompt: `Calculer et simplifier (format a/b) :\nQ = (${a}/${b}) ÷ (${c}/${d})`,
        hint: `Diviser par ${c}/${d} revient à multiplier par son inverse ${d}/${c} !`,
        questionType: 'text',
        correctAnswer: simp,
        explanationFinal: `Q = ${simp}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier par l’inverse de la deuxième fraction',
            explanation: `L’inverse de ${c}/${d} est ${d}/${c}.`,
            mathExpression: `Q = (${a}/${b}) × (${d}/${c})`,
            ruleApplied: '(a/b) ÷ (c/d) = (a/b) × (d/c)',
          },
          {
            stepNumber: 2,
            title: 'Multiplier et simplifier',
            explanation: `(${a}×${d}) / (${b}×${c}) = ${num}/${den} = ${simp}.`,
            mathExpression: `Q = ${num}/${den} | Q = ${simp}`,
            subResult: simp,
          },
        ],
      });
    }
    const budget = randInt(4, 9) * 3000;
    const partLog = budget / 3;
    const reste = budget - partLog;
    const partNourr = reste / 2;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Partage de bourse scolaire (Fractions)',
      prompt: `Un élève reçoit une aide de ${budget.toLocaleString('fr-FR')} F CFA. Il utilise 1/3 pour ses fournitures scolaires, puis 1/2 DU RESTE pour le transport scolaire à Libreville.\nCombien lui reste-t-il en F CFA ?`,
      hint: `1) Fournitures = ${budget} ÷ 3 = ${partLog} F. 2) Calcule le reste (${reste} F), puis prends la moitié !`,
      questionType: 'numeric',
      unit: 'F CFA',
      correctAnswer: String(partNourr),
      explanationFinal: `Il lui reste ${partNourr.toLocaleString('fr-FR')} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer les fournitures et le premier reste',
          explanation: `1/3 de ${budget} = ${partLog} F CFA. Il reste ${budget} - ${partLog} = ${reste} F CFA.`,
          mathExpression: `Fournitures = ${budget} ÷ 3 = ${partLog} F | Reste1 = ${budget} - ${partLog} = ${reste} F`,
        },
        {
          stepNumber: 2,
          title: 'Calculer la moitié du reste',
          explanation: `Transport = ${reste} ÷ 2 = ${partNourr} F CFA. Il reste donc ${partNourr} F CFA.`,
          mathExpression: `Reste final = ${reste} ÷ 2 | = ${partNourr} F CFA`,
          subResult: `${partNourr} F CFA`,
        },
      ],
    });
  }

  // 4. CALCUL LITTÉRAL
  if (chapterId === 'calcul-litteral-developpement') {
    if (difficulty === 1) {
      const a = randInt(2, 6);
      const b = randInt(1, 5);
      const c = randInt(2, 7);
      const d = randInt(1, 6);
      return makeResult(chapterId, difficulty, {
        title: 'Réduire une somme algébrique (Familles x et nombres)',
        prompt: `Réduire l’expression (écrire sous forme Ax+B sans espaces) :\nE = ${a}x + ${b} + ${c}x + ${d}`,
        hint: `Additionne les termes en x ensemble (${a}x + ${c}x) puis les nombres ensemble (${b} + ${d}).`,
        questionType: 'text',
        correctAnswer: `${a + c}x+${b + d}`,
        explanationFinal: `E = ${a + c}x + ${b + d}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Regrouper par famille',
            explanation: `Famille x : ${a}x + ${c}x. Famille nombres : ${b} + ${d}.`,
            mathExpression: `E = (${a} + ${c})x + (${b} + ${d})`,
            ruleApplied: 'On n’additionne que les termes de même famille.',
          },
          {
            stepNumber: 2,
            title: 'Calculer chaque somme',
            explanation: `E = ${a + c}x + ${b + d}.`,
            mathExpression: `E = ${a + c}x + ${b + d}`,
            subResult: `${a + c}x+${b + d}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = randInt(2, 6);
      const a = randInt(2, 5);
      const b = randInt(1, 7);
      return makeResult(chapterId, difficulty, {
        title: 'Simple distributivité k(ax − b)',
        prompt: `Développer et réduire (écrire sous forme Ax-B sans espaces) :\nA = ${k}(${a}x - ${b})`,
        hint: `Multiplie ${k} par ${a}x puis ${k} par (-${b}).`,
        questionType: 'text',
        correctAnswer: `${k * a}x-${k * b}`,
        explanationFinal: `A = ${k * a}x - ${k * b}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Distribuer le facteur ' + k,
            explanation: `${k} × ${a}x - ${k} × ${b}.`,
            mathExpression: `A = ${k} × ${a}x - ${k} × ${b}`,
            ruleApplied: 'k(a - b) = ka - kb',
          },
          {
            stepNumber: 2,
            title: 'Calculer les produits',
            explanation: `${k * a}x - ${k * b}.`,
            mathExpression: `A = ${k * a}x - ${k * b}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(1, 5);
      const b = randInt(2, 6);
      const ans = `${a + b}x+${a * b}`;
      return makeResult(chapterId, difficulty, {
        title: 'Double distributivité : (x + a)(x + b)',
        prompt: `Développer et réduire (x + ${a})(x + ${b}). Quelle est la bonne réponse ?`,
        hint: `Développe x² + ${b}x + ${a}x + ${a}×${b} puis réduis les termes en x.`,
        questionType: 'qcm',
        options: [
          `x² + ${a + b}x + ${a * b}`,
          `x² + ${a * b}x + ${a + b}`,
          `x² + ${a + b}`,
          `2x + ${a + b}`,
        ],
        correctAnswer: `x² + ${a + b}x + ${a * b}`,
        explanationFinal: `(x + ${a})(x + ${b}) = x² + ${ans}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Double distributivité',
            explanation: 'Chaque terme de la 1ère parenthèse multiplie chaque terme de la 2ème.',
            mathExpression: `= x×x + ${b}x + ${a}x + ${a}×${b}`,
            ruleApplied: '(x + a)(x + b) = x² + bx + ax + ab',
          },
          {
            stepNumber: 2,
            title: 'Réduire les termes en x',
            explanation: `${b}x + ${a}x = ${a + b}x et ${a}×${b} = ${a * b}.`,
            mathExpression: `= x² + ${a + b}x + ${a * b}`,
          },
        ],
      });
    }
    const L0 = randInt(4, 8);
    const dx = randInt(2, 5);
    const dy = randInt(2, 4);
    const xVal = randInt(5, 10);
    const aire = (xVal + dx) * (xVal + dy);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Plantation de manioc (Aire & substitution)',
      prompt: `Une parcelle carrée de côté x est agrandie pour devenir un rectangle de longueur (x + ${dx}) m et de largeur (x + ${dy}) m.\nCalculer son aire totale en m² lorsque x = ${xVal} m (note : on a aussi L₀ = ${L0}).`,
      hint: `Calcule la longueur (${xVal} + ${dx}) et la largeur (${xVal} + ${dy}), puis multiplie-les !`,
      questionType: 'numeric',
      unit: 'm²',
      correctAnswer: String(aire),
      explanationFinal: `Pour x = ${xVal} m, l’aire de la parcelle est ${aire} m².`,
      steps: [
        {
          stepNumber: 1,
          title: 'Développer l’expression de l’aire',
          explanation: `A(x) = (x + ${dx})(x + ${dy}) = x² + ${dx + dy}x + ${dx * dy}.`,
          mathExpression: `A(x) = x² + ${dx + dy}x + ${dx * dy}`,
        },
        {
          stepNumber: 2,
          title: `Remplacer x par ${xVal}`,
          explanation: `A(${xVal}) = (${xVal} + ${dx}) × (${xVal} + ${dy}) = ${xVal + dx} × ${xVal + dy} = ${aire} m².`,
          mathExpression: `A(${xVal}) = ${xVal + dx} × ${xVal + dy} | A = ${aire} m²`,
          subResult: `${aire} m²`,
        },
      ],
    });
  }

  // 5. ÉQUATIONS DU 1ER DEGRÉ
  if (chapterId === 'equations-premier-degre') {
    if (difficulty === 1) {
      const x = randInt(4, 15);
      const b = randInt(3, 12);
      const c = x + b;
      return makeResult(chapterId, difficulty, {
        title: 'Équation simple : x + b = c',
        prompt: `Résoudre l’équation :\nx + ${b} = ${c}`,
        hint: `Soustrais ${b} des deux côtés : x = ${c} - ${b}.`,
        questionType: 'numeric',
        correctAnswer: String(x),
        explanationFinal: `La solution est x = ${x}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Isoler x en retirant ${b}`,
            explanation: `On passe +${b} à droite en -${b}.`,
            mathExpression: `x = ${c} - ${b} | x = ${x}`,
            subResult: `x = ${x}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 6);
      const x = randInt(3, 12) * 100;
      const b = randInt(1, 5) * 200;
      const c = a * x + b;
      return makeResult(chapterId, difficulty, {
        title: 'Équation ax + b = c (en F CFA)',
        prompt: `Résoudre l’équation :\n${a}x + ${b} = ${c}`,
        hint: `1) Calcule ${c} - ${b} = ${c - b}. 2) Divise par ${a}.`,
        questionType: 'numeric',
        correctAnswer: String(x),
        explanationFinal: `La solution est x = ${x}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Soustraire ${b}`,
            explanation: `${a}x = ${c} - ${b} = ${c - b}.`,
            mathExpression: `${a}x = ${c} - ${b} | ${a}x = ${c - b}`,
          },
          {
            stepNumber: 2,
            title: `Diviser par ${a}`,
            explanation: `x = ${c - b} ÷ ${a} = ${x}.`,
            mathExpression: `x = ${c - b} ÷ ${a} | x = ${x}`,
            subResult: `x = ${x}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const x = randInt(3, 12);
      const c = randInt(2, 4);
      const diff = randInt(2, 4);
      const a = c + diff;
      const b = randInt(2, 10);
      const d = diff * x + b;
      return makeResult(chapterId, difficulty, {
        title: 'Inconnue des deux côtés : ax + b = cx + d',
        prompt: `Résoudre l’équation :\n${a}x + ${b} = ${c}x + ${d}`,
        hint: `Regroupe les x à gauche (${a}x - ${c}x) et les nombres à droite (${d} - ${b}).`,
        questionType: 'numeric',
        correctAnswer: String(x),
        explanationFinal: `x = ${x}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Regrouper les x et les nombres',
            explanation: `${a}x - ${c}x = ${d} - ${b}.`,
            mathExpression: `${a}x - ${c}x = ${d} - ${b} | ${diff}x = ${d - b}`,
          },
          {
            stepNumber: 2,
            title: `Diviser par ${diff}`,
            explanation: `x = ${d - b} ÷ ${diff} = ${x}.`,
            mathExpression: `x = ${d - b} ÷ ${diff} | x = ${x}`,
            subResult: `x = ${x}`,
          },
        ],
      });
    }
    const prixCahier = randInt(3, 8) * 100;
    const nb = randInt(3, 5);
    const stylo = randInt(2, 4) * 100;
    const total = nb * prixCahier + stylo;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Mise en équation au marché Mont-Bouët',
      prompt: `À Mont-Bouët, Koko achète ${nb} cahiers identiques à x F CFA chacun et un stylo à ${stylo} F CFA.\nIl paie au total ${total.toLocaleString('fr-FR')} F CFA.\nQuel est le prix x d’un cahier (en F CFA) ?`,
      hint: `Pose l’équation : ${nb}x + ${stylo} = ${total}.`,
      questionType: 'numeric',
      unit: 'F CFA',
      correctAnswer: String(prixCahier),
      explanationFinal: `Chaque cahier coûte ${prixCahier} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Mettre le problème en équation',
          explanation: `Soit x le prix d’un cahier : ${nb}x + ${stylo} = ${total}.`,
          mathExpression: `${nb}x + ${stylo} = ${total} | ${nb}x = ${total} - ${stylo}`,
        },
        {
          stepNumber: 2,
          title: 'Résoudre debout',
          explanation: `${nb}x = ${total - stylo}, donc x = ${total - stylo} ÷ ${nb} = ${prixCahier} F CFA.`,
          mathExpression: `${nb}x = ${total - stylo} | x = ${prixCahier} F CFA`,
          subResult: `${prixCahier} F CFA`,
        },
      ],
    });
  }

  // 6. RACINE CARRÉE
  if (chapterId === 'racine-carree') {
    if (difficulty === 1) {
      const c = randInt(3, 12);
      const sq = c * c;
      return makeResult(chapterId, difficulty, {
        title: 'Racine carrée d’un carré parfait',
        prompt: `Calculer la valeur exacte de √${sq}.`,
        hint: `Quel nombre positif multiplié par lui-même donne ${sq} ?`,
        questionType: 'numeric',
        correctAnswer: String(c),
        explanationFinal: `√${sq} = ${c} car ${c}² = ${sq}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Chercher le carré parfait',
            explanation: `On sait que ${c} × ${c} = ${sq}.`,
            mathExpression: `√${sq} = √(${c}²) | = ${c}`,
            ruleApplied: 'Pour a ≥ 0, √(a²) = a',
            subResult: String(c),
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(3, 8);
      const b = randInt(2, 7);
      const res = a + b;
      return makeResult(chapterId, difficulty, {
        title: 'Somme de deux racines carrées exactes',
        prompt: `Calculer l’expression suivante :\nR = √${a * a} + √${b * b}`,
        hint: `Calcule séparément √${a * a} et √${b * b}, puis additionne ! (Attention : √a + √b ≠ √(a+b))`,
        questionType: 'numeric',
        correctAnswer: String(res),
        explanationFinal: `R = ${a} + ${b} = ${res}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Simplifier chaque racine',
            explanation: `√${a * a} = ${a} et √${b * b} = ${b}.`,
            mathExpression: `R = ${a} + ${b} | R = ${res}`,
            ruleApplied: 'Toujours calculer chaque racine avant d’additionner !',
            subResult: String(res),
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(2, 5);
      const b = pickRandom([2, 3, 5]);
      const n = a * a * b;
      return makeResult(chapterId, difficulty, {
        title: 'Simplifier √n sous la forme a√b',
        prompt: `Quelle est l’écriture simplifiée de √${n} sous la forme a√b ?`,
        hint: `Décompose ${n} = ${a * a} × ${b} puis utilise √(${a * a}×${b}) = √${a * a} × √${b}.`,
        questionType: 'qcm',
        options: [`${a}√${b}`, `${b}√${a}`, `${a * a}√${b}`, `${a + b}√${b}`],
        correctAnswer: `${a}√${b}`,
        explanationFinal: `√${n} = ${a}√${b}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Extraire le plus grand carré parfait',
            explanation: `${n} = ${a * a} × ${b}.`,
            mathExpression: `√${n} = √(${a * a} × ${b}) | = √${a * a} × √${b}`,
            ruleApplied: '√(a × b) = √a × √b',
          },
          {
            stepNumber: 2,
            title: 'Conclure',
            explanation: `√${a * a} = ${a}, donc √${n} = ${a}√${b}.`,
            mathExpression: `= ${a}√${b}`,
          },
        ],
      });
    }
    const cote = randInt(6, 15);
    const aire = cote * cote;
    const perim = 4 * cote;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Clôture d’un terrain carré à Akanda',
      prompt: `Un terrain carré à Akanda a une aire de ${aire} m².\nCalculer la longueur de clôture nécessaire pour faire tout le tour (périmètre en mètres).`,
      hint: `1) Côté c = √${aire}. 2) Périmètre = 4 × c.`,
      questionType: 'numeric',
      unit: 'm',
      correctAnswer: String(perim),
      explanationFinal: `Le côté mesure ${cote} m, donc la clôture mesure ${perim} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer le côté du carré',
          explanation: `Aire = c² = ${aire} ➔ c = √${aire} = ${cote} m.`,
          mathExpression: `c = √${aire} | c = ${cote} m`,
        },
        {
          stepNumber: 2,
          title: 'Calculer le périmètre',
          explanation: `P = 4 × ${cote} = ${perim} m.`,
          mathExpression: `P = 4 × ${cote} | P = ${perim} m`,
          subResult: `${perim} m`,
        },
      ],
    });
  }

  // 7. FACTORISATION & IDENTITÉS REMARQUABLES
  if (chapterId === 'factorisation-identites-remarquables') {
    if (difficulty === 1) {
      const k = randInt(2, 7);
      const b = randInt(2, 6);
      return makeResult(chapterId, difficulty, {
        title: 'Factoriser par un facteur commun',
        prompt: `Factoriser l’expression (sans espaces, ex: 3(x+4)) :\nF = ${k}x + ${k * b}`,
        hint: `Le facteur commun à ${k}x et ${k * b} est ${k}.`,
        questionType: 'text',
        correctAnswer: `${k}(x+${b})`,
        explanationFinal: `F = ${k}(x + ${b}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Mettre ' + k + ' en évidence',
            explanation: `${k * b} = ${k} × ${b}.`,
            mathExpression: `F = ${k} × x + ${k} × ${b} | F = ${k}(x + ${b})`,
            ruleApplied: 'ka + kb = k(a + b)',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 8);
      return makeResult(chapterId, difficulty, {
        title: 'Identité remarquable (x + a)²',
        prompt: `Développer (x + ${a})² à l’aide de l’identité remarquable :`,
        hint: `(A + B)² = A² + 2×A×B + B². N’oublie pas le double produit 2×x×${a} !`,
        questionType: 'qcm',
        options: [
          `x² + ${2 * a}x + ${a * a}`,
          `x² + ${a * a}`,
          `x² + ${a}x + ${a * a}`,
          `2x + ${2 * a}`,
        ],
        correctAnswer: `x² + ${2 * a}x + ${a * a}`,
        explanationFinal: `(x + ${a})² = x² + ${2 * a}x + ${a * a}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer (A + B)² = A² + 2AB + B²',
            explanation: `A = x et B = ${a}.`,
            mathExpression: `(x + ${a})² = x² + 2 × x × ${a} + ${a}² | = x² + ${2 * a}x + ${a * a}`,
            ruleApplied: '(a + b)² = a² + 2ab + b²',
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(3, 11);
      return makeResult(chapterId, difficulty, {
        title: 'Factoriser une différence de deux carrés a² − b²',
        prompt: `Factoriser l’expression : E = x² - ${a * a}`,
        hint: `Reconnais x² - ${a}² de la forme A² - B² = (A - B)(A + B).`,
        questionType: 'qcm',
        options: [
          `(x - ${a})(x + ${a})`,
          `(x - ${a})²`,
          `(x + ${a})²`,
          `(x - ${a * a})(x + 1)`,
        ],
        correctAnswer: `(x - ${a})(x + ${a})`,
        explanationFinal: `x² - ${a * a} = (x - ${a})(x + ${a}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier A² − B²',
            explanation: `${a * a} = ${a}², donc A = x et B = ${a}.`,
            mathExpression: `x² - ${a * a} = x² - ${a}² | = (x - ${a})(x + ${a})`,
            ruleApplied: 'a² - b² = (a - b)(a + b)',
          },
        ],
      });
    }
    const base = pickRandom([50, 100, 200]);
    const diff = randInt(2, 5);
    const a = base + diff;
    const b = base - diff;
    const res = a * a - b * b;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Calcul mental astucieux avec a² − b²',
      prompt: `Calculer rapidement à l’aide de l’identité a² − b² = (a − b)(a + b) :\nD = ${a}² - ${b}²`,
      hint: `Calcule (a − b) = ${a - b} et (a + b) = ${a + b}, puis multiplie-les !`,
      questionType: 'numeric',
      correctAnswer: String(res),
      explanationFinal: `D = ${a - b} × ${a + b} = ${res}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Factoriser avec a² − b²',
          explanation: `a = ${a} et b = ${b}.`,
          mathExpression: `D = (${a} - ${b}) × (${a} + ${b}) | D = ${a - b} × ${a + b}`,
          ruleApplied: 'a² - b² = (a - b)(a + b)',
        },
        {
          stepNumber: 2,
          title: 'Calculer le produit final',
          explanation: `${a - b} × ${a + b} = ${res}.`,
          mathExpression: `D = ${res}`,
          subResult: String(res),
        },
      ],
    });
  }

  // 8. INÉQUATIONS DU 1ER DEGRÉ
  if (chapterId === 'inequations-premier-degre') {
    if (difficulty === 1) {
      const a = randInt(2, 5);
      const sol = randInt(3, 9);
      const c = a * sol;
      return makeResult(chapterId, difficulty, {
        title: 'Résoudre une inéquation simple ax < c',
        prompt: `Résoudre l’inéquation : ${a}x < ${c}`,
        hint: `On divise par ${a} (nombre positif) : le sens de l’inégalité ne change pas !`,
        questionType: 'qcm',
        options: [`x < ${sol}`, `x > ${sol}`, `x ≤ ${sol}`, `x < ${c}`],
        correctAnswer: `x < ${sol}`,
        explanationFinal: `Les solutions sont les nombres x < ${sol}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Diviser par ${a} (> 0)`,
            explanation: `${a} est positif, on garde le symbole <.`,
            mathExpression: `${a}x < ${c} | x < ${c} ÷ ${a} | x < ${sol}`,
            ruleApplied: 'Diviser par un positif garde le sens.',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 4);
      const xLim = randInt(3, 8);
      const b = randInt(2, 9);
      const c = a * xLim + b;
      return makeResult(chapterId, difficulty, {
        title: 'Inéquation ax + b ≥ c',
        prompt: `Résoudre : ${a}x + ${b} ≥ ${c}`,
        hint: `Passe +${b} à droite en -${b}, puis divise par ${a}.`,
        questionType: 'qcm',
        options: [`x ≥ ${xLim}`, `x ≤ ${xLim}`, `x > ${xLim}`, `x ≥ ${c}`],
        correctAnswer: `x ≥ ${xLim}`,
        explanationFinal: `La solution est x ≥ ${xLim}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Soustraire ${b}`,
            explanation: `${a}x ≥ ${c} - ${b} = ${c - b}.`,
            mathExpression: `${a}x ≥ ${c - b}`,
          },
          {
            stepNumber: 2,
            title: `Diviser par ${a}`,
            explanation: `x ≥ ${c - b} ÷ ${a} = ${xLim}.`,
            mathExpression: `x ≥ ${xLim}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = randInt(2, 5);
      const sol = randInt(2, 7);
      const right = -k * sol;
      return makeResult(chapterId, difficulty, {
        title: 'Piège du signe négatif : −kx ≤ c',
        prompt: `Résoudre l’inéquation (attention au signe de −${k}) :\n-${k}x ≤ ${right}`,
        hint: `En divisant par -${k} (NÉGATIF), il faut RENVERSER le symbole ≤ en ≥ !`,
        questionType: 'qcm',
        options: [`x ≥ ${sol}`, `x ≤ ${sol}`, `x ≤ -${sol}`, `x ≥ -${sol}`],
        correctAnswer: `x ≥ ${sol}`,
        explanationFinal: `En divisant par -${k}, ≤ devient ≥, donc x ≥ ${sol}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Diviser par -${k} (< 0) et inverser le sens`,
            explanation: `Diviser par un nombre négatif change ≤ en ≥.`,
            mathExpression: `-${k}x ≤ ${right} | x ≥ (${right}) ÷ (-${k}) | x ≥ ${sol}`,
            ruleApplied: 'Multiplier/diviser par un négatif INVERSE l’inégalité !',
          },
        ],
      });
    }
    const baseAbo = randInt(2, 4) * 1000;
    const parHeure = 500;
    const maxBudget = baseAbo + randInt(4, 9) * parHeure;
    const maxHeures = (maxBudget - baseAbo) / parHeure;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Forfait Cybercafé en F CFA',
      prompt: `Un cybercafé à Owendo facture ${baseAbo} F CFA d’abonnement plus ${parHeure} F CFA par heure de connexion.\nCombien d’heures au MAXIMUM peut-on rester avec un budget de ${maxBudget.toLocaleString('fr-FR')} F CFA ?`,
      hint: `Résous ${parHeure}x + ${baseAbo} ≤ ${maxBudget}.`,
      questionType: 'numeric',
      unit: 'heures',
      correctAnswer: String(maxHeures),
      explanationFinal: `On peut rester au maximum ${maxHeures} heures.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Traduire par une inéquation',
          explanation: `Soit x le nombre d’heures : ${parHeure}x + ${baseAbo} ≤ ${maxBudget}.`,
          mathExpression: `${parHeure}x + ${baseAbo} ≤ ${maxBudget} | ${parHeure}x ≤ ${maxBudget - baseAbo}`,
        },
        {
          stepNumber: 2,
          title: 'Résoudre debout',
          explanation: `x ≤ ${maxBudget - baseAbo} ÷ ${parHeure} = ${maxHeures} h.`,
          mathExpression: `x ≤ ${maxHeures} heures`,
          subResult: `${maxHeures} heures`,
        },
      ],
    });
  }

  // 9. NOMBRES PREMIERS & DIVISIBILITÉ
  if (chapterId === 'nombres-premiers-divisibilite') {
    if (difficulty === 1) {
      const prime = pickRandom([17, 19, 23, 29, 31, 37]);
      const comp = pickRandom([15, 21, 27, 33, 39]);
      return makeResult(chapterId, difficulty, {
        title: 'Reconnaître un nombre premier',
        prompt: `Parmi ces nombres, lequel est un nombre PREMIER ?`,
        hint: 'Un nombre premier n’est divisible que par 1 et par lui-même (vérifie la divisibilité par 2, 3, 5).',
        questionType: 'qcm',
        options: [String(prime), String(comp), String(comp + 6), '1'].sort(),
        correctAnswer: String(prime),
        explanationFinal: `${prime} est premier (1 n’est pas premier ; ${comp} et ${comp + 6} sont divisibles par 3).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Éliminer les non-premiers',
            explanation: `1 n’a qu’un diviseur ; ${comp} est divisible par 3.`,
            mathExpression: `${prime} n’a que deux diviseurs : 1 et ${prime}`,
            ruleApplied: 'Nombre premier = exactement 2 diviseurs distincts.',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const items = [
        { n: 24, ans: '2³ × 3' },
        { n: 36, ans: '2² × 3²' },
        { n: 45, ans: '3² × 5' },
        { n: 60, ans: '2² × 3 × 5' },
      ];
      const item = pickRandom(items);
      return makeResult(chapterId, difficulty, {
        title: 'Décomposition en facteurs premiers',
        prompt: `Quelle est la décomposition en produit de facteurs premiers de ${item.n} ?`,
        hint: `Divise successivement ${item.n} par 2, puis par 3, puis par 5.`,
        questionType: 'qcm',
        options: [item.ans, '2 × 3 × 7', '2⁴ × 3', '3 × 5²'],
        correctAnswer: item.ans,
        explanationFinal: `${item.n} = ${item.ans}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Divisions successives',
            explanation: `On divise ${item.n} par les petits nombres premiers (2, 3, 5).`,
            mathExpression: `${item.n} = ${item.ans}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const g = pickRandom([6, 8, 12, 15]);
      const a = g * pickRandom([2, 3]);
      const b = g * pickRandom([5, 7]);
      const realG = gcd(a, b);
      return makeResult(chapterId, difficulty, {
        title: 'Calculer le PGCD de deux nombres',
        prompt: `Calculer le PGCD(${a} ; ${b}) (Plus Grand Commun Diviseur).`,
        hint: `Cherche le plus grand nombre qui divise à la fois ${a} et ${b}.`,
        questionType: 'numeric',
        correctAnswer: String(realG),
        explanationFinal: `PGCD(${a} ; ${b}) = ${realG}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Divisions d’Euclide debout',
            explanation: `${a} = ${realG} × ${a / realG} et ${b} = ${realG} × ${b / realG}.`,
            mathExpression: `PGCD(${a} ; ${b}) = ${realG}`,
            subResult: String(realG),
          },
        ],
      });
    }
    const p = pickRandom([6, 8, 10, 12]);
    const mangues = p * 3;
    const bananes = p * 5;
    const realP = gcd(mangues, bananes);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Paniers identiques au marché de Franceville',
      prompt: `Une vendeuse à Franceville a ${mangues} mangues et ${bananes} bananes.\nElle veut préparer le MAXIMUM de paniers identiques sans qu’il reste aucun fruit.\nCombien de paniers peut-elle faire ?`,
      hint: `Le nombre maximum de paniers est PGCD(${mangues} ; ${bananes}).`,
      questionType: 'numeric',
      unit: 'paniers',
      correctAnswer: String(realP),
      explanationFinal: `Elle peut confectionner ${realP} paniers identiques.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Identifier le PGCD',
          explanation: `Le nombre de paniers divise ${mangues} et ${bananes}.`,
          mathExpression: `PGCD(${mangues} ; ${bananes}) = ${realP}`,
        },
        {
          stepNumber: 2,
          title: 'Composition de chaque panier',
          explanation: `Chaque panier contiendra ${mangues / realP} mangues et ${bananes / realP} bananes.`,
          mathExpression: `Maximum = ${realP} paniers`,
          subResult: `${realP} paniers`,
        },
      ],
    });
  }

  // 10. PROPORTIONNALITÉ & POURCENTAGES
  if (chapterId === 'proportionnalite-pourcentages') {
    if (difficulty === 1) {
      const unitPrice = randInt(2, 6) * 250;
      const q1 = randInt(2, 4);
      const q2 = randInt(5, 8);
      const p1 = q1 * unitPrice;
      const p2 = q2 * unitPrice;
      return makeResult(chapterId, difficulty, {
        title: 'Quatrième proportionnelle (Prix au marché)',
        prompt: `${q1} tas de bananes plantains coûtent ${p1.toLocaleString('fr-FR')} F CFA.\nQuel est le prix de ${q2} tas (en F CFA) ?`,
        hint: `Trouve d’abord le prix d’un seul tas (${p1} ÷ ${q1}), puis multiplie par ${q2}.`,
        questionType: 'numeric',
        unit: 'F CFA',
        correctAnswer: String(p2),
        explanationFinal: `${q2} tas coûtent ${p2.toLocaleString('fr-FR')} F CFA.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Passer par l’unité (coefficient)',
            explanation: `1 tas = ${p1} ÷ ${q1} = ${unitPrice} F CFA.`,
            mathExpression: `k = ${p1} ÷ ${q1} = ${unitPrice} F/tas`,
          },
          {
            stepNumber: 2,
            title: `Multiplier par ${q2}`,
            explanation: `${q2} × ${unitPrice} = ${p2} F CFA.`,
            mathExpression: `Prix = ${q2} × ${unitPrice} | = ${p2} F CFA`,
            subResult: `${p2} F CFA`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const prix = randInt(4, 15) * 1000;
      const pct = pickRandom([10, 20, 25, 30]);
      const rem = (prix * pct) / 100;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer une remise en F CFA',
        prompt: `Une tenue scolaire coûte ${prix.toLocaleString('fr-FR')} F CFA. On applique une réduction de ${pct}%.\nQuel est le montant de la réduction (en F CFA) ?`,
        hint: `Calcule (${prix} × ${pct}) ÷ 100.`,
        questionType: 'numeric',
        unit: 'F CFA',
        correctAnswer: String(rem),
        explanationFinal: `La réduction vaut ${rem} F CFA.`,
        steps: [
          {
            stepNumber: 1,
            title: `Appliquer ${pct}%`,
            explanation: `Remise = ${prix} × ${pct} ÷ 100 = ${rem} F CFA.`,
            mathExpression: `Remise = ${prix} × ${pct} ÷ 100 | = ${rem} F CFA`,
            subResult: `${rem} F CFA`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const prix = randInt(5, 16) * 1000;
      const pct = pickRandom([10, 20, 25]);
      const rem = (prix * pct) / 100;
      const finalP = prix - rem;
      return makeResult(chapterId, difficulty, {
        title: 'Nouveau prix après solde de ' + pct + '%',
        prompt: `À Libreville, un sac à dos affiché à ${prix.toLocaleString('fr-FR')} F CFA est soldé à −${pct}%.\nQuel est le nouveau prix à payer (en F CFA) ?`,
        hint: `Calcule la remise (${rem} F CFA), puis soustrais-la de ${prix} F CFA.`,
        questionType: 'numeric',
        unit: 'F CFA',
        correctAnswer: String(finalP),
        explanationFinal: `Le nouveau prix à payer est ${finalP.toLocaleString('fr-FR')} F CFA.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la remise',
            explanation: `${prix} × ${pct} ÷ 100 = ${rem} F CFA.`,
            mathExpression: `Remise = ${rem} F CFA`,
          },
          {
            stepNumber: 2,
            title: 'Soustraire au prix initial',
            explanation: `${prix} - ${rem} = ${finalP} F CFA.`,
            mathExpression: `Prix = ${prix} - ${rem} | = ${finalP} F CFA`,
            subResult: `${finalP} F CFA`,
          },
        ],
      });
    }
    const dCm = randInt(4, 9);
    const echelle = pickRandom([200000, 500000]);
    const distKm = (dCm * echelle) / 100000;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Échelle d’une carte routière',
      prompt: `Sur une carte du Gabon à l’échelle 1 / ${echelle.toLocaleString('fr-FR')}, deux villages sont séparés de ${dCm} cm.\nQuelle est la distance réelle entre ces villages (en km) ?`,
      hint: `Multiplie ${dCm} cm par ${echelle.toLocaleString('fr-FR')} pour obtenir des cm, puis divise par 100 000 pour passer en km (1 km = 100 000 cm).`,
      questionType: 'numeric',
      unit: 'km',
      correctAnswer: String(distKm),
      explanationFinal: `La distance réelle est de ${distKm} km.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Multiplier par le dénominateur de l’échelle',
          explanation: `Distance en cm = ${dCm} × ${echelle} = ${dCm * echelle} cm.`,
          mathExpression: `D_cm = ${dCm} × ${echelle} | = ${dCm * echelle} cm`,
        },
        {
          stepNumber: 2,
          title: 'Convertir en kilomètres',
          explanation: `1 km = 100 000 cm ➔ ${dCm * echelle} ÷ 100 000 = ${distKm} km.`,
          mathExpression: `D_km = ${distKm} km`,
          subResult: `${distKm} km`,
        },
      ],
    });
  }

  // 11. VITESSE, DURÉE, DISTANCE
  if (chapterId === 'vitesse-duree-distance') {
    if (difficulty === 1) {
      const v = randInt(5, 9) * 10;
      const t = randInt(2, 5);
      const d = v * t;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer une distance d = v × t',
        prompt: `Un taxi-brousse roule à une vitesse moyenne de ${v} km/h pendant ${t} heures.\nQuelle distance parcourt-il (en km) ?`,
        hint: `Utilise d = v × t = ${v} × ${t}.`,
        questionType: 'numeric',
        unit: 'km',
        correctAnswer: String(d),
        explanationFinal: `La distance parcourue est de ${d} km.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer d = v × t',
            explanation: `d = ${v} × ${t} = ${d} km.`,
            mathExpression: `d = ${v} × ${t} | d = ${d} km`,
            subResult: `${d} km`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const v = randInt(6, 10) * 10;
      const t = randInt(2, 6);
      const d = v * t;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer la vitesse moyenne v = d ÷ t',
        prompt: `Le train Transgabonais parcourt ${d} km entre Owendo et une gare de l’intérieur en ${t} heures.\nQuelle est sa vitesse moyenne (en km/h) ?`,
        hint: `v = d ÷ t = ${d} ÷ ${t}.`,
        questionType: 'numeric',
        unit: 'km/h',
        correctAnswer: String(v),
        explanationFinal: `La vitesse moyenne est v = ${v} km/h.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer v = d ÷ t',
            explanation: `v = ${d} ÷ ${t} = ${v} km/h.`,
            mathExpression: `v = ${d} ÷ ${t} | v = ${v} km/h`,
            subResult: `${v} km/h`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const h = randInt(1, 3);
      const min = pickRandom([15, 30, 45]);
      const tDec = h + min / 60;
      const v = pickRandom([60, 80]);
      const d = v * tDec;
      return makeResult(chapterId, difficulty, {
        title: 'Piège des heures décimales (h + min)',
        prompt: `Une voiture roule à ${v} km/h pendant ${h} h ${min} min.\nQuelle distance parcourt-elle (en km) ?`,
        hint: `Convertis d’abord ${h} h ${min} min en heures décimales (${min} ÷ 60 = ${min / 60} h), soit ${tDec} h !`,
        questionType: 'numeric',
        unit: 'km',
        correctAnswer: String(d),
        explanationFinal: `${h} h ${min} min = ${tDec} h ➔ d = ${v} × ${tDec} = ${d} km.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir la durée en heures décimales',
            explanation: `${min} min = ${min} ÷ 60 = ${min / 60} h ➔ t = ${tDec} h.`,
            mathExpression: `t = ${h} + (${min} ÷ 60) | t = ${tDec} h`,
            ruleApplied: 'Ne jamais écrire 2h30 = 2,3 h ! Diviser les minutes par 60.',
          },
          {
            stepNumber: 2,
            title: 'Calculer d = v × t',
            explanation: `d = ${v} × ${tDec} = ${d} km.`,
            mathExpression: `d = ${v} × ${tDec} | d = ${d} km`,
            subResult: `${d} km`,
          },
        ],
      });
    }
    const ms = pickRandom([10, 15, 20, 25]);
    const kmh = ms * 3.6;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Convertir m/s en km/h',
      prompt: `Un guépard ou une pirogue à moteur atteint une vitesse de ${ms} m/s.\nÀ quelle vitesse en km/h cela correspond-il ?`,
      hint: `Pour passer de m/s en km/h, multiplie par 3,6 !`,
      questionType: 'numeric',
      unit: 'km/h',
      correctAnswer: String(kmh),
      explanationFinal: `${ms} m/s × 3,6 = ${kmh} km/h.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Multiplier par 3 600 s puis diviser par 1 000 m',
          explanation: `Cela revient à multiplier par 3,6.`,
          mathExpression: `v = ${ms} × 3,6 | v = ${kmh} km/h`,
          ruleApplied: 'm/s × 3,6 = km/h',
          subResult: `${kmh} km/h`,
        },
      ],
    });
  }

  // 12. STATISTIQUES MOYENNE & MÉDIANE
  if (chapterId === 'statistiques-moyenne-mediane') {
    if (difficulty === 1) {
      const m = randInt(10, 15);
      const notes = [m - 3, m - 1, m + 1, m + 3];
      return makeResult(chapterId, difficulty, {
        title: 'Moyenne simple de 4 notes',
        prompt: `Voici les 4 notes de maths d’un élève de 4ème : ${notes.join(' ; ')}.\nCalculer sa moyenne.`,
        hint: `Additionne les 4 notes et divise par 4.`,
        questionType: 'numeric',
        correctAnswer: String(m),
        explanationFinal: `La moyenne vaut ${m}/20.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Sommer les valeurs',
            explanation: `Somme = ${notes.join(' + ')} = ${m * 4}.`,
            mathExpression: `Somme = ${m * 4} | Moyenne = ${m * 4} ÷ 4 = ${m}`,
            subResult: String(m),
          },
        ],
      });
    }
    if (difficulty === 2) {
      const vals = [randInt(5, 8), randInt(9, 11), randInt(12, 14), randInt(15, 17), randInt(18, 20)];
      const shuffled = [vals[3], vals[0], vals[4], vals[2], vals[1]];
      return makeResult(chapterId, difficulty, {
        title: 'Trouver la Médiane d’une série',
        prompt: `Trouver la médiane de la série suivante :\n${shuffled.join(' ; ')}`,
        hint: 'Range d’abord les 5 valeurs dans l’ordre CROISSANT, puis prends la valeur du milieu (la 3ème) !',
        questionType: 'numeric',
        correctAnswer: String(vals[2]),
        explanationFinal: `Après tri croissant (${vals.join(' ; ')}), la médiane est ${vals[2]}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Ordonner la série par ordre croissant',
            explanation: `Ordre croissant : ${vals.join(' < ')}.`,
            mathExpression: `Série triée : ${vals.join(' ; ')} | Milieu (3ème rang) = ${vals[2]}`,
            ruleApplied: 'Toujours trier avant de chercher la médiane.',
          },
        ],
      });
    }
    if (difficulty === 3) {
      const n1 = randInt(8, 12);
      const n2 = n1 + 4;
      const c1 = 1;
      const c2 = 3;
      const moy = (n1 * c1 + n2 * c2) / (c1 + c2);
      return makeResult(chapterId, difficulty, {
        title: 'Moyenne pondérée avec coefficients',
        prompt: `Un élève obtient ${n1}/20 au devoir (coefficient ${c1}) et ${n2}/20 à la composition (coefficient ${c2}).\nCalculer sa moyenne pondérée.`,
        hint: `Calcule (${n1}×${c1} + ${n2}×${c2}) ÷ (${c1} + ${c2}).`,
        questionType: 'numeric',
        correctAnswer: String(moy),
        explanationFinal: `La moyenne pondérée est ${moy}/20.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier chaque note par son coefficient',
            explanation: `Total points = ${n1}×${c1} + ${n2}×${c2} = ${n1 * c1 + n2 * c2}. Total coeffs = ${c1 + c2}.`,
            mathExpression: `Moy = (${n1 * c1} + ${n2 * c2}) ÷ ${c1 + c2} | Moy = ${n1 * c1 + n2 * c2} ÷ ${c1 + c2} = ${moy}`,
            subResult: String(moy),
          },
        ],
      });
    }
    const min = randInt(6, 9);
    const max = randInt(16, 19);
    const etendue = max - min;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Étendue des températures à Oyem',
      prompt: `Sur une semaine à Oyem, les notes ou températures relevées sont : ${min + 2} ; ${max} ; ${min} ; ${min + 4} ; ${max - 2}.\nCalculer l’étendue de cette série.`,
      hint: 'Étendue = Valeur maximale − Valeur minimale.',
      questionType: 'numeric',
      correctAnswer: String(etendue),
      explanationFinal: `Étendue = ${max} - ${min} = ${etendue}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Repérer Max et Min',
          explanation: `Max = ${max} et Min = ${min}.`,
          mathExpression: `Étendue = ${max} - ${min} | = ${etendue}`,
          subResult: String(etendue),
        },
      ],
    });
  }

  // 13. PROBABILITÉS
  if (chapterId === 'probabilites') {
    if (difficulty === 1) {
      const faces = [1, 2, 3, 4, 5, 6];
      const cond = pickRandom([
        { text: 'obtenir un nombre pair (2, 4 ou 6)', ans: '1/2', num: 3 },
        { text: 'obtenir le chiffre 6', ans: '1/6', num: 1 },
        { text: 'obtenir un nombre supérieur ou égal à 5 (5 ou 6)', ans: '1/3', num: 2 },
      ]);
      const g = gcd(cond.num, faces.length);
      return makeResult(chapterId, difficulty, {
        title: 'Probabilité simple avec un dé équilibré',
        prompt: `On lance un dé classique à 6 faces. Quelle est la probabilité de ${cond.text} (format simplifié a/b) ?`,
        hint: `Il y a ${cond.num} issue(s) favorable(s) sur 6 issues possibles.`,
        questionType: 'text',
        correctAnswer: `${cond.num / g}/${6 / g}`,
        explanationFinal: `P = ${cond.num}/6 = ${cond.ans}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Compter les issues favorables',
            explanation: `${cond.num} issue(s) favorable(s) sur 6 au total.`,
            mathExpression: `P = ${cond.num} / 6 | P = ${cond.ans}`,
            ruleApplied: 'P(A) = Nombre d’issues favorables ÷ Nombre total d’issues',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const v = randInt(3, 5);
      const j = randInt(2, 4);
      const b = randInt(2, 4);
      const tot = v + j + b;
      const g = gcd(v, tot);
      const ans = `${v / g}/${tot / g}`;
      return makeResult(chapterId, difficulty, {
        title: 'Tirage dans une urne (Couleurs du drapeau)',
        prompt: `Une urne contient ${v} boules vertes, ${j} boules jaunes et ${b} boules bleues.\nOn tire une boule au hasard. Probabilité de tirer une boule VERTE (format a/b) ?`,
        hint: `Total = ${v} + ${j} + ${b} = ${tot} boules.`,
        questionType: 'text',
        correctAnswer: ans,
        explanationFinal: `P(Verte) = ${v}/${tot} = ${ans}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer le total d’issues',
            explanation: `Total = ${v} + ${j} + ${b} = ${tot}.`,
            mathExpression: `P(Verte) = ${v} / ${tot} | P(Verte) = ${ans}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const pPct = pickRandom([15, 25, 35, 40]);
      const comp = 100 - pPct;
      return makeResult(chapterId, difficulty, {
        title: 'Événement contraire : P(non A) = 1 − P(A)',
        prompt: `À Libreville, la probabilité qu’il pleuve demain est de ${pPct}% (soit 0,${pPct}).\nQuelle est la probabilité qu’il NE pleuve PAS (en %) ?`,
        hint: `P(non pluie) = 100% − P(pluie).`,
        questionType: 'numeric',
        unit: '%',
        correctAnswer: String(comp),
        explanationFinal: `Il y a ${comp}% de chance qu’il ne pleuve pas.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Utiliser l’événement contraire',
            explanation: `100% - ${pPct}% = ${comp}%.`,
            mathExpression: `P(non A) = 100 - ${pPct} | = ${comp}%`,
            ruleApplied: 'P(Ā) = 1 − P(A)',
          },
        ],
      });
    }
    const g = randInt(2, 5);
    const total = g * 4;
    const lost = g;
    const remain = total - lost;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Probabilité sur une tombola scolaire',
      prompt: `Pour la fête du collège, ${total} billets sont vendus. ${g} billets gagnent un gros lot, et ${g} autres un petit lot.\nQuelle est la probabilité (en %, sans le signe %) de gagner UN LOT quelconque ?`,
      hint: `Total gagnants = ${g} + ${g} = ${2 * g} sur ${total} (soit ${remain - g} / ${total}).`,
      questionType: 'numeric',
      unit: '%',
      correctAnswer: '50',
      explanationFinal: `Il y a ${2 * g} billets gagnants sur ${total}, soit 50%.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Compter tous les billets gagnants',
          explanation: `${g} + ${g} = ${2 * g} gagnants sur ${total} billets.`,
          mathExpression: `P = ${2 * g} / ${total} | = 1/2 = 50%`,
          subResult: '50%',
        },
      ],
    });
  }

  // 14. FONCTIONS & REPRÉSENTATION GRAPHIQUE
  if (chapterId === 'fonctions-representation-graphique') {
    if (difficulty === 1) {
      const a = randInt(2, 5);
      const b = randInt(1, 7);
      const x = randInt(2, 6);
      const img = a * x + b;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer l’image d’un nombre par f(x) = ax + b',
        prompt: `Soit la fonction affine f(x) = ${a}x + ${b}.\nCalculer l’image de ${x} (c’est-à-dire f(${x})).`,
        hint: `Remplace x par ${x} dans ${a}x + ${b}.`,
        questionType: 'numeric',
        correctAnswer: String(img),
        explanationFinal: `f(${x}) = ${a} × ${x} + ${b} = ${img}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Remplacer x par ${x}`,
            explanation: `f(${x}) = ${a} × ${x} + ${b} = ${a * x} + ${b} = ${img}.`,
            mathExpression: `f(${x}) = ${a} × ${x} + ${b} | = ${a * x} + ${b} | = ${img}`,
            subResult: String(img),
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 5);
      const b = randInt(2, 8);
      const ant = randInt(2, 7);
      const y = a * ant + b;
      return makeResult(chapterId, difficulty, {
        title: 'Trouver l’antécédent d’un nombre',
        prompt: `Soit f(x) = ${a}x + ${b}.\nQuel est l’antécédent de ${y} ?`,
        hint: `Résous l’équation f(x) = ${y}, soit ${a}x + ${b} = ${y}.`,
        questionType: 'numeric',
        correctAnswer: String(ant),
        explanationFinal: `L’antécédent de ${y} est x = ${ant}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Poser f(x) = ${y}`,
            explanation: `${a}x + ${b} = ${y} ➔ ${a}x = ${y - b}.`,
            mathExpression: `${a}x + ${b} = ${y} | ${a}x = ${y - b}`,
          },
          {
            stepNumber: 2,
            title: `Diviser par ${a}`,
            explanation: `x = ${y - b} ÷ ${a} = ${ant}.`,
            mathExpression: `x = ${ant}`,
            subResult: String(ant),
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(2, 6);
      const x = randInt(2, 5);
      const y = a * x;
      return makeResult(chapterId, difficulty, {
        title: 'Représentation d’une fonction linéaire',
        prompt: `La droite représentant une fonction linéaire f(x) = ax passe par l’origine (0 ; 0) et par le point A(${x} ; ${y}).\nQuel est le coefficient directeur a ?`,
        hint: `Pour une fonction linéaire, a = f(${x}) ÷ ${x}.`,
        questionType: 'numeric',
        correctAnswer: String(a),
        explanationFinal: `a = ${y} ÷ ${x} = ${a}, donc f(x) = ${a}x.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer a = y ÷ x',
            explanation: `a = ${y} ÷ ${x} = ${a}.`,
            mathExpression: `a = ${y} ÷ ${x} | a = ${a}`,
            subResult: `f(x) = ${a}x`,
          },
        ],
      });
    }
    const prise = 500;
    const parKm = 300;
    const km = randInt(4, 12);
    const total = prise + parKm * km;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Fonction affine d’une course de taxi',
      prompt: `Le tarif d’un taxi est modélisé par la fonction f(x) = ${parKm}x + ${prise} (en F CFA), où x est la distance en km.\nCombien paie-t-on pour un trajet de ${km} km (en F CFA) ?`,
      hint: `Calcule f(${km}) = ${parKm} × ${km} + ${prise}.`,
      questionType: 'numeric',
      unit: 'F CFA',
      correctAnswer: String(total),
      explanationFinal: `La course coûte ${total.toLocaleString('fr-FR')} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: `Calculer f(${km})`,
          explanation: `${parKm} × ${km} = ${parKm * km}, puis + ${prise} = ${total} F CFA.`,
          mathExpression: `f(${km}) = ${parKm * km} + ${prise} | = ${total} F CFA`,
          subResult: `${total} F CFA`,
        },
      ],
    });
  }

  // 15. STATISTIQUES QUARTILES & DIAGRAMMES
  if (chapterId === 'statistiques-quartiles-diagrammes') {
    if (difficulty === 1) {
      const vals = [4, 6, 8, 10, 12, 14, 16, 18];
      return makeResult(chapterId, difficulty, {
        title: 'Premier quartile Q1 d’une série ordonnée',
        prompt: `Soit la série ordonnée de 8 valeurs : ${vals.join(' ; ')}.\nLe rang de Q1 est 8 ÷ 4 = 2. Quelle est la valeur du 1er quartile Q1 ?`,
        hint: 'Prends la 2ème valeur de la liste ordonnée !',
        questionType: 'numeric',
        correctAnswer: String(vals[1]),
        explanationFinal: `La 2ème valeur est Q1 = ${vals[1]}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lire la 2ème valeur',
            explanation: `8 ÷ 4 = 2ème valeur = ${vals[1]}.`,
            mathExpression: `Rang Q1 = 8 ÷ 4 = 2 | Q1 = ${vals[1]}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const q1 = randInt(7, 10);
      const q3 = q1 + randInt(4, 7);
      const ecart = q3 - q1;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer l’écart interquartile Q3 − Q1',
        prompt: `Dans une classe de 4ème, Q1 = ${q1} et Q3 = ${q3}.\nCalculer l’écart interquartile.`,
        hint: `Écart interquartile = Q3 − Q1.`,
        questionType: 'numeric',
        correctAnswer: String(ecart),
        explanationFinal: `L’écart interquartile vaut ${q3} - ${q1} = ${ecart}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Soustraire Q1 de Q3',
            explanation: `${q3} - ${q1} = ${ecart}.`,
            mathExpression: `Q3 - Q1 = ${q3} - ${q1} | = ${ecart}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const eff = randInt(4, 9);
      const tot = 20;
      const angle = (eff / tot) * 360;
      return makeResult(chapterId, difficulty, {
        title: 'Angle d’un diagramme circulaire',
        prompt: `Sur ${tot} élèves interrogés, ${eff} préfèrent les mathématiques.\nQuel angle en degrés représente ce secteur dans un diagramme circulaire (total 360°) ?`,
        hint: `Angle = (${eff} ÷ ${tot}) × 360°.`,
        questionType: 'numeric',
        unit: '°',
        correctAnswer: String(angle),
        explanationFinal: `L’angle vaut ${angle}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer l’angle proportionnel à 360°',
            explanation: `${eff} × (360 ÷ ${tot}) = ${eff} × 18 = ${angle}°.`,
            mathExpression: `Angle = (${eff} ÷ ${tot}) × 360 | = ${angle}°`,
            subResult: `${angle}°`,
          },
        ],
      });
    }
    const min = randInt(5, 8);
    const q1 = min + 3;
    const med = q1 + 2;
    const q3 = med + 3;
    const max = q3 + 3;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Lecture complète d’une boîte à moustaches',
      prompt: `Une boîte à moustaches donne : Min=${min}, Q1=${q1}, Médiane=${med}, Q3=${q3}, Max=${max}.\nQuel pourcentage environ des valeurs se situe entre Q1 (${q1}) et Q3 (${q3}) ?`,
      hint: 'Entre le 1er quartile (25%) et le 3ème quartile (75%), il y a la moitié centrale des données.',
      questionType: 'numeric',
      unit: '%',
      correctAnswer: '50',
      explanationFinal: `Environ 50% des valeurs sont comprises entre Q1 et Q3 (75% - 25% = 50%).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Interpréter la boîte centrale',
          explanation: 'Q1 coupe à 25% et Q3 coupe à 75%.',
          mathExpression: `75% - 25% = 50%`,
          ruleApplied: 'La boîte [Q1 ; Q3] contient environ 50% de l’effectif.',
        },
      ],
    });
  }

  // 16. THÉORÈME DE PYTHAGORE
  if (chapterId === 'theoreme-pythagore') {
    const triples = [
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
      [9, 12, 15],
      [8, 15, 17],
    ];
    if (difficulty === 1) {
      const [ab, ac, bc] = pickRandom(triples);
      return makeResult(chapterId, difficulty, {
        title: 'Pythagore direct : calculer l’hypoténuse',
        prompt: `ABC est rectangle en A avec AB = ${ab} cm et AC = ${ac} cm.\nCalculer la longueur de l’hypoténuse BC (en cm).`,
        hint: `BC² = AB² + AC² = ${ab * ab} + ${ac * ac} = ${bc * bc}.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(bc),
        explanationFinal: `BC = √${bc * bc} = ${bc} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Égalité de Pythagore',
            explanation: `BC² = ${ab}² + ${ac}² = ${ab * ab} + ${ac * ac} = ${bc * bc}.`,
            mathExpression: `BC² = ${ab * ab} + ${ac * ac} | BC² = ${bc * bc}`,
          },
          {
            stepNumber: 2,
            title: 'Racine carrée',
            explanation: `BC = √${bc * bc} = ${bc} cm.`,
            mathExpression: `BC = √${bc * bc} | BC = ${bc} cm`,
            subResult: `${bc} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const [ab, ac, bc] = pickRandom(triples);
      return makeResult(chapterId, difficulty, {
        title: 'Pythagore : calculer un côté de l’angle droit',
        prompt: `ABC est rectangle en A. L’hypoténuse mesure BC = ${bc} cm et AB = ${ab} cm.\nCalculer la longueur AC (en cm).`,
        hint: `Pour un petit côté, on SOUSTRAIT : AC² = BC² - AB² !`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(ac),
        explanationFinal: `AC = √${ac * ac} = ${ac} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Isoler AC² par soustraction',
            explanation: `AC² = ${bc}² - ${ab}² = ${bc * bc} - ${ab * ab} = ${ac * ac}.`,
            mathExpression: `AC² = ${bc * bc} - ${ab * ab} | AC² = ${ac * ac}`,
          },
          {
            stepNumber: 2,
            title: 'Prendre la racine carrée',
            explanation: `AC = √${ac * ac} = ${ac} cm.`,
            mathExpression: `AC = ${ac} cm`,
            subResult: `${ac} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const isRight = randFloat() > 0.5;
      const [a, b, cBase] = pickRandom(triples);
      const c = isRight ? cBase : cBase + 1;
      return makeResult(chapterId, difficulty, {
        title: 'Réciproque / Contraposée : le triangle est-il rectangle ?',
        prompt: `Un triangle a pour côtés ${a} cm, ${b} cm et ${c} cm.\nCe triangle est-il rectangle ?`,
        hint: `Compare ${c}² (= ${c * c}) et ${a}² + ${b}² (= ${a * a + b * b}).`,
        questionType: 'qcm',
        options: ['Oui, il est rectangle', 'Non, il n’est pas rectangle'],
        correctAnswer: isRight ? 'Oui, il est rectangle' : 'Non, il n’est pas rectangle',
        explanationFinal: isRight
          ? `${c}² = ${c * c} et ${a}² + ${b}² = ${a * a + b * b} : égalité vraie ➔ triangle rectangle !`
          : `${c}² = ${c * c} ≠ ${a * a + b * b} ➔ pas rectangle.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer séparément',
            explanation: `Plus grand côté² = ${c * c}. Somme des deux autres² = ${a * a} + ${b * b} = ${a * a + b * b}.`,
            mathExpression: `${c}² = ${c * c} | ${a}² + ${b}² = ${a * a + b * b}`,
          },
        ],
      });
    }
    const [sol, mur, ech] = pickRandom([
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
    ]);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Échelle appuyée contre un mur à Owendo',
      prompt: `Un électricien SEEG pose une échelle de ${ech} m contre un poteau vertical.\nLe pied de l’échelle est à ${sol} m du poteau.\nÀ quelle hauteur du sol (en m) l’échelle touche-t-elle le poteau ?`,
      hint: `Le poteau, le sol et l’échelle forment un triangle rectangle d’hypoténuse ${ech} m.`,
      questionType: 'numeric',
      unit: 'm',
      correctAnswer: String(mur),
      explanationFinal: `Hauteur = √(${ech * ech} - ${sol * sol}) = √${mur * mur} = ${mur} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer Pythagore',
          explanation: `h² = ${ech}² - ${sol}² = ${ech * ech} - ${sol * sol} = ${mur * mur}.`,
          mathExpression: `h² = ${ech * ech} - ${sol * sol} | h² = ${mur * mur} | h = ${mur} m`,
          subResult: `${mur} m`,
        },
      ],
    });
  }

  // 17. TRIANGLES & AGRANDISSEMENT-RÉDUCTION (MILIEUX)
  if (chapterId === 'triangles-agrandissement-reduction') {
    if (difficulty === 1) {
      const bc = randInt(5, 14) * 2;
      const ij = bc / 2;
      return makeResult(chapterId, difficulty, {
        title: 'Théorème des milieux : IJ = BC ÷ 2',
        prompt: `Dans un triangle ABC, I est le milieu de [AB] et J est le milieu de [AC].\nOn donne BC = ${bc} cm. Calculer la longueur IJ (en cm).`,
        hint: `Le segment joignant les milieux de deux côtés mesure la MOITIÉ du 3ème côté !`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(ij),
        explanationFinal: `IJ = ${bc} ÷ 2 = ${ij} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer le théorème des milieux',
            explanation: `IJ = BC ÷ 2 = ${bc} ÷ 2 = ${ij} cm.`,
            mathExpression: `IJ = ${bc} ÷ 2 | IJ = ${ij} cm`,
            ruleApplied: 'Si I milieu de [AB] et J milieu de [AC], alors (IJ)//(BC) et IJ = BC/2.',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const ij = randInt(4, 12);
      const bc = ij * 2;
      return makeResult(chapterId, difficulty, {
        title: 'Retrouver la base BC à partir des milieux',
        prompt: `I et J sont les milieux respectifs de [AB] et [AC] dans le triangle ABC.\nSachant que IJ = ${ij} cm, calculer BC (en cm).`,
        hint: `BC est le DOUBLE de IJ.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(bc),
        explanationFinal: `BC = 2 × ${ij} = ${bc} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Doubler IJ',
            explanation: `BC = 2 × ${ij} = ${bc} cm.`,
            mathExpression: `BC = 2 × ${ij} | BC = ${bc} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = randInt(2, 4);
      const aire1 = randInt(4, 10);
      const aire2 = aire1 * k * k;
      return makeResult(chapterId, difficulty, {
        title: 'Agrandissement : effet sur les aires (× k²)',
        prompt: `On agrandit un triangle d’aire ${aire1} cm² avec un rapport d’agrandissement k = ${k}.\nQuelle est la nouvelle aire (en cm²) ?`,
        hint: `Si les longueurs sont multipliées par k, les aires sont multipliées par k² !`,
        questionType: 'numeric',
        unit: 'cm²',
        correctAnswer: String(aire2),
        explanationFinal: `Nouvelle aire = ${aire1} × ${k}² = ${aire1} × ${k * k} = ${aire2} cm².`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier par k²',
            explanation: `${k}² = ${k * k}. Nouvelle aire = ${aire1} × ${k * k} = ${aire2} cm².`,
            mathExpression: `A' = ${aire1} × ${k}² | A' = ${aire1} × ${k * k} | A' = ${aire2} cm²`,
            ruleApplied: 'Longueurs × k ➔ Aires × k²',
          },
        ],
      });
    }
    const perimABC = randInt(12, 24) * 2;
    const perimIJK = perimABC / 2;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Triangle des trois milieux',
      prompt: `Le triangle ABC a un périmètre de ${perimABC} cm. I, J et K sont les milieux des trois côtés.\nQuel est le périmètre du triangle IJK (en cm) ?`,
      hint: 'Chaque côté de IJK mesure la moitié du côté parallèle de ABC.',
      questionType: 'numeric',
      unit: 'cm',
      correctAnswer: String(perimIJK),
      explanationFinal: `Périmètre(IJK) = ${perimABC} ÷ 2 = ${perimIJK} cm.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Diviser le périmètre par 2',
          explanation: `IJ = BC/2, JK = AB/2, IK = AC/2 ➔ Périmètre(IJK) = Périmètre(ABC) ÷ 2.`,
          mathExpression: `P(IJK) = ${perimABC} ÷ 2 | = ${perimIJK} cm`,
        },
      ],
    });
  }

  // 18. TRANSLATIONS
  if (chapterId === 'translations') {
    if (difficulty === 1) {
      const ab = randInt(4, 12);
      return makeResult(chapterId, difficulty, {
        title: 'Conservation des longueurs par translation',
        prompt: `Un segment [AB] mesure ${ab} cm. On construit son image [A'B'] par une translation.\nQuelle est la longueur A'B' (en cm) ?`,
        hint: 'La translation déplace sans déformer : elle conserve les longueurs !',
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(ab),
        explanationFinal: `A'B' = AB = ${ab} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Propriété de conservation',
            explanation: `Une translation conserve toutes les longueurs, les angles et les aires.`,
            mathExpression: `A'B' = AB = ${ab} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const xA = randInt(1, 5);
      const yA = randInt(1, 5);
      const dx = randInt(2, 6);
      const dy = randInt(-3, 4) || 2;
      const xB = xA + dx;
      const yB = yA + dy;
      return makeResult(chapterId, difficulty, {
        title: 'Image d’un point par glissement (vecteur)',
        prompt: `Le point A(${xA} ; ${yA}) est translaté de ${dx} unités vers la droite et ${dy > 0 ? `+${dy} vers le haut` : `${Math.abs(dy)} vers le bas`}.\nQuelles sont les coordonnées de A' ?`,
        hint: `Ajoute ${dx} à l’abscisse ${xA} et ${dy} à l’ordonnée ${yA}.`,
        questionType: 'qcm',
        options: [
          `(${xB} ; ${yB})`,
          `(${xA - dx} ; ${yB})`,
          `(${yB} ; ${xB})`,
          `(${xB} ; ${yA})`,
        ],
        correctAnswer: `(${xB} ; ${yB})`,
        explanationFinal: `A'(${xA}+${dx} ; ${yA}+(${dy})) = (${xB} ; ${yB}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Additionner les déplacements',
            explanation: `x' = ${xA} + ${dx} = ${xB} ; y' = ${yA} + (${dy}) = ${yB}.`,
            mathExpression: `A' = (${xB} ; ${yB})`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Translation et Parallélogramme',
        prompt: `Si D est l’image de C par la translation qui transforme A en B, quelle est la nature du quadrilatère ABDC ?`,
        hint: 'Le déplacement de A vers B est identique à celui de C vers D : les vecteurs sont égaux et parallèles !',
        questionType: 'qcm',
        options: [
          'Un parallélogramme',
          'Un triangle isocèle',
          'Un trapèze quelconque',
          'Un pentagone',
        ],
        correctAnswer: 'Un parallélogramme',
        explanationFinal: `Les vecteurs AB et CD sont égaux, donc ABDC est un parallélogramme.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Relier translation et parallélogramme',
            explanation: 'C ➔ D a même direction, même sens et même longueur que A ➔ B.',
            mathExpression: `AB // CD et AB = CD | ➔ ABDC parallélogramme`,
          },
        ],
      });
    }
    const aire = randInt(12, 30);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Déplacement de conteneur au port d’Owendo',
      prompt: `Au port d’Owendo, une grue déplace par translation un conteneur rectangulaire de ${aire} m² sur une distance de 25 m.\nQuelle est l’aire au sol occupée par le conteneur après déplacement (en m²) ?`,
      hint: 'Une translation conserve les aires.',
      questionType: 'numeric',
      unit: 'm²',
      correctAnswer: String(aire),
      explanationFinal: `L’aire reste inchangée : ${aire} m².`,
      steps: [
        {
          stepNumber: 1,
          title: 'Conservation des aires',
          explanation: `La taille du conteneur ne change pas lors du déplacement.`,
          mathExpression: `Aire' = Aire = ${aire} m²`,
        },
      ],
    });
  }

  // 19. SYMÉTRIES & TRANSFORMATIONS
  if (chapterId === 'symetries-transformations') {
    if (difficulty === 1) {
      const ang = randInt(35, 85);
      return makeResult(chapterId, difficulty, {
        title: 'Symétrie centrale et angles',
        prompt: `Un angle mesure ${ang}°. On trace son symétrique par rapport à un point O.\nQuelle est la mesure de l’angle image (en degrés) ?`,
        hint: 'La symétrie centrale (demi-tour) conserve les mesures d’angles.',
        questionType: 'numeric',
        unit: '°',
        correctAnswer: String(ang),
        explanationFinal: `L’angle image mesure également ${ang}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Conservation des angles',
            explanation: 'Symétrie centrale = demi-tour de 180°, les angles ne changent pas.',
            mathExpression: `Angle' = ${ang}°`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const x = randInt(2, 6);
      const y = randInt(2, 6);
      return makeResult(chapterId, difficulty, {
        title: 'Symétrique par rapport à l’origine O(0 ; 0)',
        prompt: `Quelles sont les coordonnées du symétrique du point M(${x} ; -${y}) par rapport à l’origine O(0 ; 0) ?`,
        hint: 'La symétrie centrale de centre O(0 ; 0) change les DEUX signes (+ devient −, − devient +).',
        questionType: 'qcm',
        options: [`(-${x} ; ${y})`, `(${x} ; ${y})`, `(-${x} ; -${y})`, `(${y} ; -${x})`],
        correctAnswer: `(-${x} ; ${y})`,
        explanationFinal: `M' a pour coordonnées (-${x} ; ${y}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Opposer x et y',
            explanation: `O est le milieu de [MM'] ➔ x' = -${x} et y' = +${y}.`,
            mathExpression: `M' = (-${x} ; ${y})`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Propriété de la symétrie centrale sur les droites',
        prompt: `Soit (d') l’image d’une droite (d) par une symétrie centrale de centre O.\nComment sont les droites (d) et (d') ?`,
        hint: 'Un demi-tour conserve la direction d’une droite.',
        questionType: 'qcm',
        options: [
          'Toujours parallèles',
          'Toujours perpendiculaires',
          'Toujours sécantes en un point différent de O',
          'Sans lien particulier',
        ],
        correctAnswer: 'Toujours parallèles',
        explanationFinal: `L’image d’une droite par symétrie centrale est une droite parallèle.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Propriété fondamentale',
            explanation: 'Par symétrie centrale, (d\') // (d).',
            mathExpression: `(d') // (d)`,
          },
        ],
      });
    }
    const perim = randInt(16, 40);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Centre de symétrie d’un masque punu',
      prompt: `On complète un motif symétrique par rapport à une droite (d) (symétrie axiale). La moitié gauche a un contour extérieur de ${perim} cm.\nQuelle longueur totale (en cm) a le contour complet de la figure symétrique ?`,
      hint: 'Le côté droit symétrique a exactement la même longueur que le côté gauche !',
      questionType: 'numeric',
      unit: 'cm',
      correctAnswer: String(perim * 2),
      explanationFinal: `Longueur totale = 2 × ${perim} = ${perim * 2} cm.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Doubler la moitié par symétrie',
          explanation: `2 × ${perim} = ${perim * 2} cm.`,
          mathExpression: `Total = 2 × ${perim} | = ${perim * 2} cm`,
        },
      ],
    });
  }

  // 20. THÉORÈME DE THALÈS
  if (chapterId === 'theoreme-thales') {
    if (difficulty === 1) {
      const k = randInt(2, 4);
      const am = randInt(2, 5);
      const mn = randInt(3, 6);
      const ab = am * k;
      const bc = mn * k;
      return makeResult(chapterId, difficulty, {
        title: 'Thalès direct : calculer BC',
        prompt: `Dans ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC).\nAM = ${am} cm, AB = ${ab} cm et MN = ${mn} cm. Calculer BC (en cm).`,
        hint: `AM/AB = MN/BC, soit ${am}/${ab} = ${mn}/BC.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(bc),
        explanationFinal: `BC = (${ab} × ${mn}) ÷ ${am} = ${bc} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire les rapports de Thalès',
            explanation: `AM / AB = MN / BC.`,
            mathExpression: `${am} / ${ab} = ${mn} / BC`,
          },
          {
            stepNumber: 2,
            title: 'Produit en croix',
            explanation: `BC = (${ab} × ${mn}) ÷ ${am} = ${bc} cm.`,
            mathExpression: `BC = ${ab * mn} ÷ ${am} | BC = ${bc} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = randInt(2, 3);
      const am = randInt(2, 5);
      const an = randInt(3, 6);
      const ab = am * k;
      const ac = an * k;
      return makeResult(chapterId, difficulty, {
        title: 'Thalès : calculer la petite longueur AN',
        prompt: `Dans ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC).\nOn donne AM = ${am} cm, AB = ${ab} cm et AC = ${ac} cm. Calculer AN (en cm).`,
        hint: `AN = (AM × AC) ÷ AB.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(an),
        explanationFinal: `AN = ${an} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Produit en croix sur AM/AB = AN/AC',
            explanation: `AN = (${am} × ${ac}) ÷ ${ab} = ${an} cm.`,
            mathExpression: `AN = (${am} × ${ac}) ÷ ${ab} | AN = ${an} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const parallel = randFloat() > 0.5;
      const am = 4;
      const ab = 10;
      const an = 6;
      const ac = parallel ? 15 : 14;
      return makeResult(chapterId, difficulty, {
        title: 'Réciproque de Thalès : tester le parallélisme',
        prompt: `Dans ABC, M ∈ [AB] et N ∈ [AC] avec AM = ${am} cm, AB = ${ab} cm, AN = ${an} cm et AC = ${ac} cm.\nLes droites (MN) et (BC) sont-elles parallèles ?`,
        hint: `Compare AM/AB (= ${am / ab}) et AN/AC (= ${an}/${ac}).`,
        questionType: 'qcm',
        options: ['Oui, elles sont parallèles', 'Non, elles ne sont pas parallèles'],
        correctAnswer: parallel ? 'Oui, elles sont parallèles' : 'Non, elles ne sont pas parallèles',
        explanationFinal: parallel
          ? `AM/AB = 0,4 et AN/AC = 6/15 = 0,4 : égalité des rapports ➔ (MN)//(BC).`
          : `AM/AB = 0,4 mais AN/AC = 6/14 ≈ 0,43 : rapports différents ➔ non parallèles.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Comparer les deux quotients',
            explanation: `${am}/${ab} = 0,4 et ${an}/${ac} = ${(an / ac).toFixed(2)}.`,
            mathExpression: `AM/AB = ${(am / ab).toFixed(2)} | AN/AC = ${(an / ac).toFixed(2)}`,
          },
        ],
      });
    }
    const batOmbre = randInt(4, 8);
    const hBat = randInt(2, 4);
    const arbreOmbre = batOmbre * 3;
    const hArbre = hBat * 3;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Hauteur d’un Okoumé par son ombre (Thalès)',
      prompt: `Un bâton vertical de ${hBat} m projette une ombre de ${batOmbre} m.\nAu même instant, un Okoumé géant projette une ombre de ${arbreOmbre} m.\nQuelle est la hauteur de cet Okoumé (en m) ?`,
      hint: `Rayons du soleil parallèles ➔ H / ${hBat} = ${arbreOmbre} / ${batOmbre}.`,
      questionType: 'numeric',
      unit: 'm',
      correctAnswer: String(hArbre),
      explanationFinal: `La hauteur de l’Okoumé est de ${hArbre} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Utiliser Thalès avec les ombres',
          explanation: `H = (${hBat} × ${arbreOmbre}) ÷ ${batOmbre} = ${hArbre} m.`,
          mathExpression: `H = (${hBat} × ${arbreOmbre}) ÷ ${batOmbre} | H = ${hArbre} m`,
          subResult: `${hArbre} m`,
        },
      ],
    });
  }

  // 21. TRIGONOMÉTRIE TRIANGLE RECTANGLE
  if (chapterId === 'trigonometrie-triangle-rectangle') {
    if (difficulty === 1) {
      return makeResult(chapterId, difficulty, {
        title: 'Formule SOH CAH TOA',
        prompt: `Dans un triangle rectangle, quelle est la définition exacte de cos(α) ?`,
        hint: 'Souviens-toi de CAH : Cosinus = Adjacent ÷ Hypoténuse.',
        questionType: 'qcm',
        options: [
          'Côté Adjacent ÷ Hypoténuse',
          'Côté Opposé ÷ Hypoténuse',
          'Côté Opposé ÷ Côté Adjacent',
          'Hypoténuse ÷ Côté Adjacent',
        ],
        correctAnswer: 'Côté Adjacent ÷ Hypoténuse',
        explanationFinal: `cos(α) = Adjacent ÷ Hypoténuse (CAH).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Moyen mnémotechnique SOH CAH TOA',
            explanation: 'C-A-H signifie Cosinus = Adjacent / Hypoténuse.',
            mathExpression: `cos(α) = Adjacent / Hypoténuse`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const hyp = randInt(4, 14) * 2;
      const adj = hyp / 2;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer le côté adjacent avec cos(60°) = 0,5',
        prompt: `ABC est rectangle en A, BC = ${hyp} cm (hypoténuse) et l’angle B̂ = 60°.\nSachant que cos(60°) = 0,5, calculer le côté adjacent AB (en cm).`,
        hint: `AB = BC × cos(60°) = ${hyp} × 0,5.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(adj),
        explanationFinal: `AB = ${hyp} × 0,5 = ${adj} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Utiliser cos(60°) = AB / BC',
            explanation: `AB = ${hyp} × 0,5 = ${adj} cm.`,
            mathExpression: `AB = ${hyp} × 0,5 | AB = ${adj} cm`,
            subResult: `${adj} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const opp = randInt(5, 15);
      const hyp = opp * 2;
      return makeResult(chapterId, difficulty, {
        title: 'Calculer l’hypoténuse avec sin(30°) = 0,5',
        prompt: `Dans un triangle rectangle en A, le côté opposé à l’angle de 30° mesure ${opp} cm.\nSachant que sin(30°) = 0,5, calculer l’hypoténuse (en cm).`,
        hint: `sin(30°) = Opposé ÷ Hypoténuse ➔ Hypoténuse = ${opp} ÷ 0,5.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(hyp),
        explanationFinal: `Hypoténuse = ${opp} ÷ 0,5 = ${hyp} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Isoler l’hypoténuse',
            explanation: `Hypoténuse = ${opp} ÷ 0,5 = ${hyp} cm.`,
            mathExpression: `Hyp = ${opp} ÷ 0,5 | Hyp = ${hyp} cm`,
          },
        ],
      });
    }
    const distSol = randInt(10, 40);
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Rampe d’accès au stade à 45°',
      prompt: `Une rampe fait un angle de 45° avec le sol horizontal de longueur ${distSol} m.\nSachant que tan(45°) = 1, quelle est la hauteur atteinte (en m) ?`,
      hint: `tan(45°) = Hauteur ÷ Sol ➔ Hauteur = ${distSol} × tan(45°).`,
      questionType: 'numeric',
      unit: 'm',
      correctAnswer: String(distSol),
      explanationFinal: `Hauteur = ${distSol} × 1 = ${distSol} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer TOA (Tangente)',
          explanation: `H = ${distSol} × tan(45°) = ${distSol} × 1 = ${distSol} m.`,
          mathExpression: `H = ${distSol} × 1 | H = ${distSol} m`,
          subResult: `${distSol} m`,
        },
      ],
    });
  }

  // 22. HOMOTHÉTIE
  if (chapterId === 'homothetie') {
    if (difficulty === 1) {
      const k = randInt(2, 5);
      const ab = randInt(3, 8);
      return makeResult(chapterId, difficulty, {
        title: 'Longueur image par homothétie (k > 0)',
        prompt: `Un segment mesure ${ab} cm. On applique une homothétie de rapport k = ${k}.\nQuelle est la longueur de l’image (en cm) ?`,
        hint: `Multiplie la longueur par |k| = ${k}.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(ab * k),
        explanationFinal: `Longueur image = ${ab} × ${k} = ${ab * k} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier par |k|',
            explanation: `${ab} × ${k} = ${ab * k} cm.`,
            mathExpression: `L' = ${ab} × ${k} | = ${ab * k} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = -randInt(2, 4);
      const ab = randInt(3, 7);
      const res = ab * Math.abs(k);
      return makeResult(chapterId, difficulty, {
        title: 'Homothétie de rapport négatif',
        prompt: `Un triangle a un côté de ${ab} cm. On lui applique une homothétie de rapport k = ${k}.\nQuelle est la longueur du côté image (en cm) ? (Attention : une longueur est toujours positive !)`,
        hint: `On multiplie par la valeur absolue |${k}| = ${Math.abs(k)}.`,
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(res),
        explanationFinal: `Longueur = ${ab} × |${k}| = ${res} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Prendre |k| pour les longueurs',
            explanation: `Le signe − retourne la figure, mais la longueur vaut ${ab} × ${Math.abs(k)} = ${res} cm.`,
            mathExpression: `L' = ${ab} × |${k}| | L' = ${res} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const k = randInt(2, 4);
      const aire = randInt(5, 12);
      const newAire = aire * k * k;
      return makeResult(chapterId, difficulty, {
        title: 'Aire par homothétie de rapport k',
        prompt: `Une figure d’aire ${aire} cm² subit une homothétie de rapport k = ${k}.\nQuelle est l’aire de la figure image (en cm²) ?`,
        hint: `Les aires sont multipliées par k² = ${k * k} !`,
        questionType: 'numeric',
        unit: 'cm²',
        correctAnswer: String(newAire),
        explanationFinal: `A' = ${aire} × ${k}² = ${newAire} cm².`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier l’aire par k²',
            explanation: `${aire} × ${k * k} = ${newAire} cm².`,
            mathExpression: `A' = ${aire} × ${k}² | A' = ${newAire} cm²`,
          },
        ],
      });
    }
    const k = 3;
    const hProj = randInt(2, 4);
    const hEcran = hProj * k;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Vidéoprojecteur en classe (Homothétie)',
      prompt: `La lentille O d’un vidéoprojecteur projette une diapositive de ${hProj} cm de hauteur avec une homothétie de rapport k = ${k}.\nQuelle est la hauteur de l’image sur le tableau (en cm) ?`,
      hint: `Multiplie par k = ${k}.`,
      questionType: 'numeric',
      unit: 'cm',
      correctAnswer: String(hEcran),
      explanationFinal: `Hauteur sur le tableau = ${hProj} × ${k} = ${hEcran} cm.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer la hauteur projetée',
          explanation: `${hProj} × ${k} = ${hEcran} cm.`,
          mathExpression: `H = ${hProj} × ${k} | = ${hEcran} cm`,
        },
      ],
    });
  }

  // 23. ROTATION
  if (chapterId === 'rotation') {
    if (difficulty === 1) {
      const ang = pickRandom([45, 60, 90, 120]);
      const r = randInt(4, 10);
      return makeResult(chapterId, difficulty, {
        title: 'Distance au centre de rotation',
        prompt: `Le point A est à ${r} cm du point O. On fait tourner A autour de O d’un angle de ${ang}° pour obtenir A'.\nQuelle est la distance OA' (en cm) ?`,
        hint: 'Un point qui tourne autour de O reste toujours sur le cercle de centre O : OA\' = OA !',
        questionType: 'numeric',
        unit: 'cm',
        correctAnswer: String(r),
        explanationFinal: `OA' = OA = ${r} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Conservation de la distance au centre',
            explanation: `OA' = OA = ${r} cm.`,
            mathExpression: `OA' = OA = ${r} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const branches = pickRandom([4, 5, 6, 8]);
      const angle = 360 / branches;
      return makeResult(chapterId, difficulty, {
        title: 'Angle de rotation d’un polygone régulier / ventilateur',
        prompt: `Un ventilateur de plafond possède ${branches} pales régulièrement réparties.\nDe quel angle minimal (en degrés) faut-il le faire tourner pour qu’une pale prenne la place de sa voisine ?`,
        hint: `Un tour complet mesure 360°. Divise 360° par ${branches}.`,
        questionType: 'numeric',
        unit: '°',
        correctAnswer: String(angle),
        explanationFinal: `Angle = 360° ÷ ${branches} = ${angle}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Diviser 360° par le nombre de pales',
            explanation: `360 ÷ ${branches} = ${angle}°.`,
            mathExpression: `Angle = 360 ÷ ${branches} | = ${angle}°`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Rotation de 180°',
        prompt: `À quelle autre transformation étudiée en collège correspond exactement une rotation de 180° autour d’un point O ?`,
        hint: 'Faire un demi-tour autour d’un point O !',
        questionType: 'qcm',
        options: [
          'La symétrie centrale de centre O',
          'La symétrie axiale',
          'La translation',
          'L’homothétie de rapport 2',
        ],
        correctAnswer: 'La symétrie centrale de centre O',
        explanationFinal: `Une rotation de 180° autour de O est la symétrie centrale de centre O.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Demi-tour = symétrie centrale',
            explanation: '180° = demi-tour complet = symétrie centrale de centre O.',
            mathExpression: `Rotation(O ; 180°) = Symétrie centrale(O)`,
          },
        ],
      });
    }
    const mins = pickRandom([10, 15, 20, 30]);
    const deg = mins * 6;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Rotation de l’aiguille d’une horloge',
      prompt: `De combien de degrés tourne la grande aiguille des minutes d’une horloge en ${mins} minutes ?`,
      hint: `En 60 minutes, elle fait 360°, soit 6° par minute !`,
      questionType: 'numeric',
      unit: '°',
      correctAnswer: String(deg),
      explanationFinal: `${mins} × 6° = ${deg}°.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer l’angle par minute',
          explanation: `360° ÷ 60 min = 6°/min. En ${mins} min : ${mins} × 6 = ${deg}°.`,
          mathExpression: `Angle = ${mins} × 6° | = ${deg}°`,
        },
      ],
    });
  }

  // 24. DROITES REMARQUABLES DU TRIANGLE
  if (chapterId === 'droites-remarquables-triangle') {
    if (difficulty === 1) {
      return makeResult(chapterId, difficulty, {
        title: 'Identifier la médiatrice d’un segment',
        prompt: `Quelle droite passe par le MILIEU d’un côté et lui est PERPENDICULAIRE ?`,
        hint: 'M comme Milieu, et perpendiculaire : c’est la M...',
        questionType: 'qcm',
        options: ['La médiatrice', 'La bissectrice', 'La médiane', 'La hauteur'],
        correctAnswer: 'La médiatrice',
        explanationFinal: `La médiatrice passe par le milieu du segment et est perpendiculaire à ce segment.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Définition',
            explanation: 'Milieu + Angle droit 90° = Médiatrice.',
            mathExpression: `Médiatrice ⊥ côté et passe par son milieu`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const ang = randInt(25, 42);
      return makeResult(chapterId, difficulty, {
        title: 'Bissectrice d’un angle',
        prompt: `La demi-droite [Oz) est la bissectrice de l’angle xÔy. L’angle xÔz mesure ${ang}°.\nQuelle est la mesure de l’angle total xÔy (en degrés) ?`,
        hint: 'La bissectrice coupe un angle en deux angles égaux !',
        questionType: 'numeric',
        unit: '°',
        correctAnswer: String(ang * 2),
        explanationFinal: `xÔy = 2 × ${ang}° = ${ang * 2}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Doubler le demi-angle',
            explanation: `2 × ${ang}° = ${ang * 2}°.`,
            mathExpression: `xÔy = 2 × ${ang}° | = ${ang * 2}°`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult(chapterId, difficulty, {
        title: 'Points de concours des droites remarquables',
        prompt: `Quel point est le centre du cercle CIRCONSCRIT passant par les 3 sommets A, B et C du triangle ?`,
        hint: 'Il est à égale distance des 3 sommets : c’est le point de concours des 3...',
        questionType: 'qcm',
        options: [
          'Le point d’intersection des 3 médiatrices',
          'Le point d’intersection des 3 médianes (centre de gravité)',
          'Le point d’intersection des 3 hauteurs (orthocentre)',
          'Le milieu de [AB]',
        ],
        correctAnswer: 'Le point d’intersection des 3 médiatrices',
        explanationFinal: `Les 3 médiatrices se coupent au centre du cercle circonscrit.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Retenir les 4 points de concours',
            explanation: 'Médiatrices ➔ cercle circonscrit ; Bissectrices ➔ cercle inscrit ; Médianes ➔ centre de gravité ; Hauteurs ➔ orthocentre.',
            mathExpression: `Médiatrices ➔ OA = OB = OC (cercle circonscrit)`,
          },
        ],
      });
    }
    const base = randInt(6, 14);
    const h = randInt(4, 10);
    const aire = (base * h) / 2;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Aire d’un triangle avec sa hauteur',
      prompt: `Un triangle ABC a une base BC = ${base} cm et la hauteur correspondante AH = ${h} cm.\nCalculer son aire (en cm²).`,
      hint: `Aire = (Base × Hauteur) ÷ 2.`,
      questionType: 'numeric',
      unit: 'cm²',
      correctAnswer: String(aire),
      explanationFinal: `Aire = (${base} × ${h}) ÷ 2 = ${aire} cm².`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer (Base × Hauteur) ÷ 2',
          explanation: `(${base} × ${h}) ÷ 2 = ${base * h} ÷ 2 = ${aire} cm².`,
          mathExpression: `Aire = (${base} × ${h}) ÷ 2 | = ${aire} cm²`,
        },
      ],
    });
  }

  // 25. GÉOMÉTRIE DANS L'ESPACE & VOLUMES
  if (chapterId === 'geometrie-espace-volumes') {
    if (difficulty === 1) {
      const c = randInt(3, 9);
      const h = randInt(4, 10) * 3;
      const v = (c * c * h) / 3;
      return makeResult(chapterId, difficulty, {
        title: 'Volume d’une pyramide à base carrée',
        prompt: `Une pyramide régulière a une base carrée de côté ${c} cm et une hauteur h = ${h} cm.\nCalculer son volume V (en cm³).`,
        hint: `V = (c² × h) ÷ 3 = (${c * c} × ${h}) ÷ 3.`,
        questionType: 'numeric',
        unit: 'cm³',
        correctAnswer: String(v),
        explanationFinal: `V = (${c * c} × ${h}) ÷ 3 = ${v} cm³.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer l’aire de la base B = c²',
            explanation: `B = ${c}² = ${c * c} cm².`,
            mathExpression: `B = ${c} × ${c} = ${c * c} cm²`,
          },
          {
            stepNumber: 2,
            title: 'Diviser (B × h) par 3',
            explanation: `V = (${c * c} × ${h}) ÷ 3 = ${v} cm³.`,
            mathExpression: `V = (${c * c} × ${h}) ÷ 3 | V = ${v} cm³`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const r = randInt(2, 6);
      const h = randInt(3, 8) * 3;
      const coeffPi = (r * r * h) / 3;
      return makeResult(chapterId, difficulty, {
        title: 'Volume exact d’un cône de révolution (en π)',
        prompt: `Un cône de révolution a un rayon r = ${r} cm et une hauteur h = ${h} cm.\nSon volume exact vaut k × π cm³. Quelle est la valeur de k ?`,
        hint: `V = (π × r² × h) ÷ 3. Calcule (${r}² × ${h}) ÷ 3 !`,
        questionType: 'numeric',
        correctAnswer: String(coeffPi),
        explanationFinal: `V = ${coeffPi}π cm³, donc k = ${coeffPi}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer V = (π × r² × h) ÷ 3',
            explanation: `(${r * r} × ${h}) ÷ 3 = ${coeffPi}, donc V = ${coeffPi}π cm³.`,
            mathExpression: `V = (π × ${r}² × ${h}) ÷ 3 | V = ${coeffPi}π cm³`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const faces = pickRandom([4, 5, 6]);
      const sommets = faces + 1;
      return makeResult(chapterId, difficulty, {
        title: 'Sommets d’une pyramide',
        prompt: `Une pyramide a une base qui est un polygone à ${faces} côtés.\nCombien de sommets possède cette pyramide AU TOTAL ?`,
        hint: `Compte les ${faces} sommets de la base + 1 sommet principal en haut !`,
        questionType: 'numeric',
        unit: 'sommets',
        correctAnswer: String(sommets),
        explanationFinal: `Une pyramide à base ${faces} côtés possède ${faces} + 1 = ${sommets} sommets.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Ajouter le sommet principal',
            explanation: `${faces} (base) + 1 (sommet) = ${sommets} sommets.`,
            mathExpression: `Sommets = ${faces} + 1 | = ${sommets}`,
          },
        ],
      });
    }
    const volBig = randInt(2, 6) * 16;
    const volSmall = volBig / 8;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Section d’une pyramide à mi-hauteur (k = 1/2)',
      prompt: `Une grande pyramide en bois d’Okoumé a un volume de ${volBig} cm³.\nOn la coupe par un plan parallèle à sa base exactement à mi-hauteur (rapport k = 1/2).\nQuel est le volume de la petite pyramide obtenue au sommet (en cm³) ?`,
      hint: `Pour un rapport k = 1/2, le volume est multiplié par k³ = (1/2)³ = 1/8 (donc divisé par 8) !`,
      questionType: 'numeric',
      unit: 'cm³',
      correctAnswer: String(volSmall),
      explanationFinal: `V' = ${volBig} ÷ 8 = ${volSmall} cm³.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Multiplier par k³ = (1/2)³ = 1/8',
          explanation: `Volume × (1/8) = ${volBig} ÷ 8 = ${volSmall} cm³.`,
          mathExpression: `V' = ${volBig} × (1/2)³ | V' = ${volBig} ÷ 8 | = ${volSmall} cm³`,
          ruleApplied: 'Longueurs × k ➔ Volumes × k³',
        },
      ],
    });
  }

  // 26. REPÉRAGE DANS LE PLAN
  if (chapterId === 'reperage-plan-coordonnees') {
    if (difficulty === 1) {
      const x1 = randInt(1, 7) * 2;
      const x2 = randInt(2, 8) * 2;
      const y1 = randInt(1, 5) * 2;
      const y2 = randInt(3, 7) * 2;
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      return makeResult(chapterId, difficulty, {
        title: 'Coordonnées du milieu I de [AB]',
        prompt: `Dans un repère, on donne A(${x1} ; ${y1}) et B(${x2} ; ${y2}).\nQuelles sont les coordonnées du milieu I de [AB] ?`,
        hint: `x_I = (x_A + x_B) ÷ 2 et y_I = (y_A + y_B) ÷ 2.`,
        questionType: 'qcm',
        options: [`(${mx} ; ${my})`, `(${x1 + x2} ; ${y1 + y2})`, `(${mx + 1} ; ${my})`, `(${my} ; ${mx})`],
        correctAnswer: `(${mx} ; ${my})`,
        explanationFinal: `I(${mx} ; ${my}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la moyenne des abscisses et des ordonnées',
            explanation: `x_I = (${x1}+${x2})÷2 = ${mx} ; y_I = (${y1}+${y2})÷2 = ${my}.`,
            mathExpression: `x_I = (${x1} + ${x2}) ÷ 2 = ${mx} | y_I = (${y1} + ${y2}) ÷ 2 = ${my}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const x1 = randInt(1, 4);
      const y1 = randInt(1, 4);
      const [dx, dy, dist] = pickRandom([
        [3, 4, 5],
        [6, 8, 10],
        [5, 12, 13],
      ]);
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      return makeResult(chapterId, difficulty, {
        title: 'Distance AB dans un repère orthonormé',
        prompt: `Calculer la distance AB entre A(${x1} ; ${y1}) et B(${x2} ; ${y2}).`,
        hint: `AB = √[(x_B - x_A)² + (y_B - y_A)²] = √(${dx}² + ${dy}²).`,
        questionType: 'numeric',
        correctAnswer: String(dist),
        explanationFinal: `AB = √(${dx * dx} + ${dy * dy}) = √${dist * dist} = ${dist}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer les écarts dx et dy',
            explanation: `x_B - x_A = ${dx} et y_B - y_A = ${dy}.`,
            mathExpression: `AB² = ${dx}² + ${dy}² | AB² = ${dist * dist} | AB = ${dist}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const xA = randInt(-5, -1);
      const yA = randInt(2, 6);
      return makeResult(chapterId, difficulty, {
        title: 'Quadrants du repère orthogonal',
        prompt: `Le point P a une abscisse négative (${xA}) et une ordonnée positive (${yA}).\nDans quel secteur du repère se trouve P ?`,
        hint: 'Abscisse négative = à gauche ; Ordonnée positive = en haut.',
        questionType: 'qcm',
        options: ['En haut à gauche', 'En haut à droite', 'En bas à gauche', 'En bas à droite'],
        correctAnswer: 'En haut à gauche',
        explanationFinal: `x < 0 (gauche) et y > 0 (haut) ➔ en haut à gauche.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lire le signe des coordonnées',
            explanation: `x = ${xA} < 0 (gauche) et y = ${yA} > 0 (haut).`,
            mathExpression: `P(${xA} ; ${yA}) ➔ Haut-Gauche`,
          },
        ],
      });
    }
    const xA = 2;
    const yA = 3;
    const xI = randInt(4, 7);
    const yI = randInt(5, 8);
    const xB = 2 * xI - xA;
    const yB = 2 * yI - yA;
    return makeResult(chapterId, difficulty, {
      title: 'Défi Gabon : Retrouver une extrémité B connaissant le milieu I',
      prompt: `Dans le plan de la ville, le point I(${xI} ; ${yI}) est le milieu entre A(${xA} ; ${yA}) et B(x_B ; ${yB}).\nCalculer l’abscisse x_B du point B.`,
      hint: `Comme x_I = (x_A + x_B) ÷ 2, on a x_B = 2 × x_I - x_A !`,
      questionType: 'numeric',
      correctAnswer: String(xB),
      explanationFinal: `x_B = 2 × ${xI} - ${xA} = ${xB}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Isoler x_B dans la formule du milieu',
          explanation: `x_B = 2 × ${xI} - ${xA} = ${2 * xI} - ${xA} = ${xB}.`,
          mathExpression: `x_B = 2 × ${xI} - ${xA} | x_B = ${xB}`,
        },
      ],
    });
  }

  // 27. CERCLE : PROPRIÉTÉS AVANCÉES (DEFAULT FALLBACK)
  if (difficulty === 1) {
    const insc = randInt(20, 65);
    const centre = insc * 2;
    return makeResult(chapterId, difficulty, {
      title: 'Angle inscrit et angle au centre',
      prompt: `Sur un cercle de centre O, l’angle inscrit A M̂ B mesure ${insc}°.\nQuelle est la mesure de l’angle au centre A Ô B qui intercepte le même arc (en degrés) ?`,
      hint: `L’angle au centre vaut toujours le DOUBLE de l’angle inscrit !`,
      questionType: 'numeric',
      unit: '°',
      correctAnswer: String(centre),
      explanationFinal: `A Ô B = 2 × ${insc}° = ${centre}°.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Doubler l’angle inscrit',
          explanation: `2 × ${insc}° = ${centre}°.`,
          mathExpression: `AÔB = 2 × ${insc}° | = ${centre}°`,
          ruleApplied: 'Angle au centre = 2 × Angle inscrit',
        },
      ],
    });
  }
  if (difficulty === 2) {
    const centre = randInt(25, 70) * 2;
    const insc = centre / 2;
    return makeResult(chapterId, difficulty, {
      title: 'Retrouver l’angle inscrit à partir de l’angle au centre',
      prompt: `Sur un cercle de centre O, l’angle au centre A Ô B mesure ${centre}°.\nQuelle est la mesure de l’angle inscrit A M̂ B interceptant le même arc (en degrés) ?`,
      hint: `L’angle inscrit vaut la MOITIÉ de l’angle au centre !`,
      questionType: 'numeric',
      unit: '°',
      correctAnswer: String(insc),
      explanationFinal: `A M̂ B = ${centre}° ÷ 2 = ${insc}°.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Diviser l’angle au centre par 2',
          explanation: `${centre}° ÷ 2 = ${insc}°.`,
          mathExpression: `AM̂B = ${centre}° ÷ 2 | = ${insc}°`,
        },
      ],
    });
  }
  if (difficulty === 3) {
    return makeResult(chapterId, difficulty, {
      title: 'Triangle inscrit dans un demi-cercle',
      prompt: `[AB] est un diamètre d’un cercle et M est un autre point de ce cercle.\nQuelle est toujours la mesure de l’angle A M̂ B (en degrés) ?`,
      hint: 'L’angle au centre A Ô B mesure 180° (diamètre), donc l’angle inscrit vaut la moitié !',
      questionType: 'numeric',
      unit: '°',
      correctAnswer: '90',
      explanationFinal: `A M̂ B = 180° ÷ 2 = 90° (le triangle AMB est toujours rectangle en M).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer le théorème du cercle circonscrit',
          explanation: 'Tout triangle inscrit ayant un diamètre pour côté est rectangle.',
          mathExpression: `AM̂B = 180° ÷ 2 | = 90°`,
        },
      ],
    });
  }
  const r = randInt(3, 8);
  const ot = r * 2;
  const ang = 60;
  return makeResult(chapterId, difficulty, {
    title: 'Défi Gabon : Tangente au cercle et angle droit',
    prompt: `Une droite (T) est tangente en M au cercle de centre O. Un point P est sur (T) tel que l’angle M Ô P mesure ${ang}°.\nSachant que la tangente est perpendiculaire au rayon [OM] (O M̂ P = 90°), quelle est la mesure de l’angle M P̂ O (en degrés) ? (Rappel : r = ${r} cm, OP = ${ot} cm)`,
    hint: `La somme des angles du triangle rectangle OMP vaut 180°. Calcule 180 - 90 - ${ang} !`,
    questionType: 'numeric',
    unit: '°',
    correctAnswer: String(90 - ang),
    explanationFinal: `M P̂ O = 180° - (90° + ${ang}°) = ${90 - ang}°.`,
    steps: [
      {
        stepNumber: 1,
        title: 'Tangente ⊥ rayon en M',
        explanation: 'Donc O M̂ P = 90°.',
        mathExpression: `OM̂P = 90° | MP̂O = 180° - 90° - ${ang}° = ${90 - ang}°`,
        subResult: `${90 - ang}°`,
      },
    ],
  });
}
