import { ExerciseDifficulty } from '../../types/math';
import { MATH_3EME_CHAPTERS } from '../math3emeCurriculum';
import { DIFFICULTY_META, GeneratedExercise, pickRandom, randFloat, randInt } from './types';

function makeResult3(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  partial: Omit<GeneratedExercise, 'chapterId' | 'chapterTitle' | 'difficulty' | 'difficultyLabel'>
): GeneratedExercise {
  const chap = MATH_3EME_CHAPTERS.find((c) => c.id === chapterId);
  return {
    chapterId,
    chapterTitle: chap?.title || chapterId,
    difficulty,
    difficultyLabel: DIFFICULTY_META[difficulty].label,
    ...partial,
  };
}

export function generateMath3emeExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  // 1. RACINES CARRÉES
  if (chapterId === 'math3-racines-carrees') {
    if (difficulty === 1) {
      const k = randInt(2, 6);
      const ext = pickRandom([4, 9, 16, 25]);
      const sq = Math.sqrt(ext);
      const radicand = ext * 3;
      return makeResult3(chapterId, difficulty, {
        title: 'Simplifier une racine carrée sous la forme a√b',
        prompt: `Écrire √${radicand} sous la forme a√3. Quelle est la valeur de l’entier a ?`,
        hint: `Décompose ${radicand} = ${ext} × 3, puis utilise √(${ext} × 3) = √${ext} × √3.`,
        questionType: 'numeric',
        correctAnswer: String(sq),
        explanationFinal: `√${radicand} = √(${ext} × 3) = ${sq}√3, donc a = ${sq} (ref ${k}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Extraire le plus grand carré parfait',
            explanation: `${radicand} = ${ext} × 3 et √${ext} = ${sq}.`,
            mathExpression: `√${radicand} = √(${ext} × 3) | = ${sq}√3`,
            subResult: `a = ${sq}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 6);
      const b = randInt(2, 5);
      const c = randInt(1, 4);
      const resCoef = a + b - c;
      return makeResult3(chapterId, difficulty, {
        title: 'Réduire une somme de racines carrées',
        prompt: `Réduire l’expression A = ${a}√2 + ${b}√2 − ${c}√2 sous la forme k√2. Que vaut k ?`,
        hint: 'Additionne et soustrais les coefficients devant √2.',
        questionType: 'numeric',
        correctAnswer: String(resCoef),
        explanationFinal: `A = (${a} + ${b} − ${c})√2 = ${resCoef}√2, donc k = ${resCoef}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Factoriser par √2',
            explanation: `${a} + ${b} − ${c} = ${resCoef}.`,
            mathExpression: `A = (${a} + ${b} − ${c})√2 | A = ${resCoef}√2`,
            subResult: `k = ${resCoef}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(2, 5);
      const b = randInt(2, 6);
      const val = a * a - b;
      return makeResult3(chapterId, difficulty, {
        title: 'Identité remarquable (a − √b)(a + √b) = a² − b',
        prompt: `Calculer et simplifier le produit : P = (${a} − √${b})(${a} + √${b}).`,
        hint: 'Applique (A − B)(A + B) = A² − B² avec (√b)² = b.',
        questionType: 'numeric',
        correctAnswer: String(val),
        explanationFinal: `P = ${a}² − (√${b})² = ${a * a} − ${b} = ${val}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer A² − B²',
            explanation: `${a}² − ${b} = ${a * a} − ${b} = ${val}.`,
            mathExpression: `P = ${a}² − (√${b})² | P = ${a * a} − ${b} | P = ${val}`,
            subResult: `${val}`,
          },
        ],
      });
    }
    const sol = randInt(4, 15);
    const sq = sol * sol;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Équation x² = k',
      prompt: `Résoudre dans ℝ l’équation : x² = ${sq}. Quelles sont ses solutions ?`,
      hint: `Un nombre positif ${sq} a DEUX racines carrées opposées !`,
      questionType: 'qcm',
      options: [
        `S = {−${sol} ; ${sol}}`,
        `S = {${sol}} uniquement`,
        'Aucune solution réelle',
      ],
      correctAnswer: `S = {−${sol} ; ${sol}}`,
      explanationFinal: `Comme ${sq} > 0, x² = ${sq} admet deux solutions : x = −${sol} et x = ${sol}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer le théorème sur x² = k (k > 0)',
          explanation: `x = √${sq} = ${sol} ou x = −√${sq} = −${sol}.`,
          mathExpression: `x² = ${sq} | ⇔ x = ${sol} ou x = −${sol}`,
          subResult: `S = {−${sol} ; ${sol}}`,
        },
      ],
    });
  }

  // 2. CALCUL LITTÉRAL & ÉQUATIONS PRODUITS
  if (chapterId === 'math3-calcul-litteral-equations') {
    if (difficulty === 1) {
      const a = randInt(2, 9);
      const b = randInt(2, 9);
      return makeResult3(chapterId, difficulty, {
        title: 'Développer avec les identités remarquables',
        prompt: `Développer (x + ${a})². Quel est le terme constant (sans x) ?`,
        hint: '(a + b)² = a² + 2ab + b².',
        questionType: 'numeric',
        correctAnswer: String(a * a),
        explanationFinal: `(x + ${a})² = x² + ${2 * a}x + ${a * a} (coef b=${b}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Développer a² + 2ab + b²',
            explanation: `Le dernier terme vaut ${a}² = ${a * a}.`,
            mathExpression: `(x + ${a})² = x² + ${2 * a}x + ${a * a}`,
            subResult: `${a * a}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = randInt(3, 12);
      return makeResult3(chapterId, difficulty, {
        title: 'Factoriser avec A² − B²',
        prompt: `Factoriser l’expression E = x² − ${k * k}.`,
        hint: `${k * k} = ${k}². Utilise a² − b² = (a − b)(a + b).`,
        questionType: 'qcm',
        options: [`(x − ${k})(x + ${k})`, `(x − ${k})²`, `(x + ${k * k})(x − 1)`],
        correctAnswer: `(x − ${k})(x + ${k})`,
        explanationFinal: `E = x² − ${k}² = (x − ${k})(x + ${k}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Reconnaître A² − B²',
            explanation: `A = x et B = ${k}.`,
            mathExpression: `x² − ${k * k} = (x − ${k})(x + ${k})`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const r1 = randInt(2, 8);
      const r2 = -randInt(2, 7);
      const sum = r1 + r2;
      return makeResult3(chapterId, difficulty, {
        title: 'Équation-produit nul (x − a)(x + b) = 0',
        prompt: `Résoudre (x − ${r1})(x + ${Math.abs(r2)}) = 0.\nCalculer la SOMME des deux solutions trouvées.`,
        hint: 'Un produit est nul si l’un au moins des facteurs est nul : x − a = 0 ou x + b = 0.',
        questionType: 'numeric',
        correctAnswer: String(sum),
        explanationFinal: `Solutions x = ${r1} et x = ${r2}, somme = ${r1} + (${r2}) = ${sum}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Annuler chaque facteur',
            explanation: `x = ${r1} ou x = ${r2}.`,
            mathExpression: `x = ${r1} ou x = ${r2} | Somme = ${sum}`,
            subResult: `${sum}`,
          },
        ],
      });
    }
    const c = randInt(2, 7);
    const d = randInt(1, 5);
    const val = (c + d) * (c - d);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Factorisation type (x + a)² − b²',
      prompt: `On donne F = (x + ${c})² − ${d * d}. Après factorisation, quelle est la PLUS GRANDE des deux solutions de F = 0 ?`,
      hint: `F = (x + ${c} − ${d})(x + ${c} + ${d}).`,
      questionType: 'numeric',
      correctAnswer: String(-(c - d)),
      explanationFinal: `F = (x + ${c - d})(x + ${c + d}), solutions ${-(c - d)} et ${-(c + d)} (ref ${val}).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Factoriser par A² − B²',
          explanation: `F = (x + ${c - d})(x + ${c + d}).`,
          mathExpression: `F = (x + ${c - d})(x + ${c + d})`,
        },
        {
          stepNumber: 2,
          title: 'Résoudre F = 0 et comparer',
          explanation: `x₁ = ${-(c - d)} et x₂ = ${-(c + d)}. La plus grande est ${-(c - d)}.`,
          mathExpression: `max = ${-(c - d)}`,
          subResult: `${-(c - d)}`,
        },
      ],
    });
  }

  // 3. INÉQUATIONS & INTERVALLES
  if (chapterId === 'math3-inequations-intervalles') {
    if (difficulty === 1) {
      const a = randInt(-3, 4);
      const b = a + randInt(3, 8);
      const x = a;
      return makeResult3(chapterId, difficulty, {
        title: 'Appartenance à un intervalle (crochets [ ] vs ] [)',
        prompt: `On considère l’intervalle I = ]${a} ; ${b}]. Le nombre x = ${x} appartient-il à I ?`,
        hint: 'Un crochet tourné vers l’extérieur (]a) EXCLUT la borne a.',
        questionType: 'qcm',
        options: [`Non (${x} ∉ I car le crochet en ${a} est ouvert)`, `Oui (${x} ∈ I)`],
        correctAnswer: `Non (${x} ∉ I car le crochet en ${a} est ouvert)`,
        explanationFinal: `Le crochet en ${a} est ouvert (]), donc ${a} est exclu de l’intervalle.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Lire le sens du crochet',
            explanation: `]${a} exclut ${a}.`,
            mathExpression: `${a} ∉ ]${a} ; ${b}]`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = randInt(2, 6);
      const sol = randInt(2, 8);
      const rhs = -k * sol;
      return makeResult3(chapterId, difficulty, {
        title: 'Inéquation avec division par un nombre NÉGATIF',
        prompt: `Résoudre l’inéquation : −${k}x ≤ ${rhs}. Quel est l’intervalle solution ?`,
        hint: `Diviser par un nombre NÉGATIF (−${k}) CHANGE LE SENS de l’inégalité !`,
        questionType: 'qcm',
        options: [`[${sol} ; +∞[`, `]−∞ ; ${sol}]`, `]${sol} ; +∞[`],
        correctAnswer: `[${sol} ; +∞[`,
        explanationFinal: `−${k}x ≤ ${rhs} ⇔ x ≥ ${rhs}/(−${k}) = ${sol}, soit [${sol} ; +∞[.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Diviser par −' + k + ' et retourner ≤ en ≥',
            explanation: `x ≥ ${sol}.`,
            mathExpression: `x ≥ ${rhs} ÷ (−${k}) | x ≥ ${sol} ➔ [${sol} ; +∞[`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(1, 4);
      const b = a + randInt(3, 6);
      const c = a + 2;
      const d = b + 3;
      return makeResult3(chapterId, difficulty, {
        title: 'Intersection I ∩ J de deux intervalles',
        prompt: `Soient I = [${a} ; ${b}] et J = [${c} ; ${d}]. Quel est l’intervalle I ∩ J (éléments communs) ?`,
        hint: 'Dessine les deux segments sur une droite graduée : prends la zone doublement coloriée.',
        questionType: 'qcm',
        options: [`[${c} ; ${b}]`, `[${a} ; ${d}]`, `[${a} ; ${c}]`],
        correctAnswer: `[${c} ; ${b}]`,
        explanationFinal: `La partie commune va du plus grand début (${c}) à la plus petite fin (${b}) : [${c} ; ${b}].`,
        steps: [
          {
            stepNumber: 1,
            title: 'Déterminer [max(débuts) ; min(fins)]',
            explanation: `max(${a},${c}) = ${c} et min(${b},${d}) = ${b}.`,
            mathExpression: `I ∩ J = [${c} ; ${b}]`,
          },
        ],
      });
    }
    const prixUnit = pickRandom([500, 1000]);
    const fixe = 3000;
    const budget = fixe + prixUnit * randInt(4, 10);
    const maxArticles = Math.floor((budget - fixe) / prixUnit);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi Gabon : Problème d’achat par inéquation (F CFA)',
      prompt: `À Libreville, la livraison coûte ${fixe} F CFA et chaque cahier coûte ${prixUnit} F CFA. On dispose d’au maximum ${budget} F CFA.\nQuel nombre maximal x de cahiers peut-on acheter ?`,
      hint: `Pose ${prixUnit}x + ${fixe} ≤ ${budget}.`,
      questionType: 'numeric',
      correctAnswer: String(maxArticles),
      unit: 'cahiers',
      explanationFinal: `${prixUnit}x ≤ ${budget - fixe} ➔ x ≤ ${maxArticles} cahiers.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Mettre en inéquation et résoudre',
          explanation: `${prixUnit}x + ${fixe} ≤ ${budget} ➔ ${prixUnit}x ≤ ${budget - fixe} ➔ x ≤ ${maxArticles}.`,
          mathExpression: `x ≤ ${budget - fixe} ÷ ${prixUnit} | x ≤ ${maxArticles}`,
          subResult: `${maxArticles} cahiers`,
        },
      ],
    });
  }

  // 4. SYSTÈMES D'ÉQUATIONS
  if (chapterId === 'math3-systemes-equations') {
    if (difficulty === 1) {
      const x = randInt(3, 12);
      const y = randInt(2, 9);
      const s = x + y;
      const d = x - y;
      return makeResult3(chapterId, difficulty, {
        title: 'Système simple par addition (x + y = S et x − y = D)',
        prompt: `Résoudre le système :\n{ x + y = ${s}\n{ x − y = ${d}\nQue vaut x ?`,
        hint: 'Additionne les deux lignes membre à membre : les y s’annulent (+y − y = 0) !',
        questionType: 'numeric',
        correctAnswer: String(x),
        explanationFinal: `2x = ${s + d}, donc x = ${x} (et y = ${y}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Additionner L₁ + L₂',
            explanation: `(x + y) + (x − y) = ${s} + ${d} = ${s + d}.`,
            mathExpression: `2x = ${s + d} | x = ${x}`,
            subResult: `x = ${x}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const y = randInt(2, 7);
      const x = 2 * y + 3;
      const sum = x + y;
      return makeResult3(chapterId, difficulty, {
        title: 'Méthode par substitution',
        prompt: `Résoudre :\n{ x = 2y + 3\n{ x + y = ${sum}\nCalculer y.`,
        hint: 'Remplace x par (2y + 3) dans la deuxième équation.',
        questionType: 'numeric',
        correctAnswer: String(y),
        explanationFinal: `(2y + 3) + y = ${sum} ➔ 3y = ${sum - 3} ➔ y = ${y}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Substituer x dans L₂',
            explanation: `3y + 3 = ${sum} ➔ 3y = ${sum - 3}.`,
            mathExpression: `3y = ${sum - 3} | y = ${y}`,
            subResult: `y = ${y}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const x = randInt(2, 6);
      const y = randInt(2, 6);
      const c1 = 2 * x + 3 * y;
      const c2 = 4 * x + y;
      return makeResult3(chapterId, difficulty, {
        title: 'Combinaison linéaire (2x + 3y et 4x + y)',
        prompt: `Résoudre par combinaison :\n{ 2x + 3y = ${c1}\n{ 4x + y = ${c2}\nTrouver la valeur de y.`,
        hint: 'Multiplie L₁ par (−2) pour éliminer x entre −4x et +4x.',
        questionType: 'numeric',
        correctAnswer: String(y),
        explanationFinal: `−2 L₁ + L₂ donne −5y = ${-2 * c1 + c2}, donc y = ${y}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Éliminer x par (−2)×L₁ + L₂',
            explanation: `−6y + y = ${-2 * c1 + c2} ➔ −5y = ${-2 * c1 + c2}.`,
            mathExpression: `−5y = ${-2 * c1 + c2} | y = ${y}`,
            subResult: `y = ${y}`,
          },
        ],
      });
    }
    const pBilletA = 1500;
    const pBilletE = 1000;
    const nA = randInt(10, 30);
    const nE = randInt(10, 25);
    const totPers = nA + nE;
    const recette = nA * pBilletA + nE * pBilletE;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Recette de cinéma / match à Libreville',
      prompt: `Pour un match au stade d’Angondjé, l’entrée adulte coûte ${pBilletA} F CFA et l’entrée enfant ${pBilletE} F CFA. Il y a ${totPers} spectateurs pour une recette totale de ${recette} F CFA.\nTrouver le nombre d’adultes.`,
      hint: `Système : A + E = ${totPers} et 1500 A + 1000 E = ${recette}.`,
      questionType: 'numeric',
      correctAnswer: String(nA),
      unit: 'adultes',
      explanationFinal: `500 A = ${recette - 1000 * totPers} ➔ A = ${nA} adultes.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Résoudre 1500 A + 1000(tot − A) = recette',
          explanation: `500 A = ${recette - 1000 * totPers}.`,
          mathExpression: `A = ${recette - 1000 * totPers} ÷ 500 | A = ${nA}`,
          subResult: `${nA} adultes`,
        },
      ],
    });
  }

  // 5. APPLICATIONS AFFINES & LINÉAIRES
  if (chapterId === 'math3-applications-affines') {
    if (difficulty === 1) {
      const a = randInt(2, 7);
      const b = randInt(-4, 6);
      const x = randInt(2, 5);
      const fx = a * x + b;
      return makeResult3(chapterId, difficulty, {
        title: 'Calculer l’image f(x) = ax + b',
        prompt: `Soit f(x) = ${a}x ${b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`}. Calculer l’image f(${x}).`,
        hint: `Remplace x par ${x} dans l’expression de f(x).`,
        questionType: 'numeric',
        correctAnswer: String(fx),
        explanationFinal: `f(${x}) = ${a} × ${x} + (${b}) = ${fx}.`,
        steps: [
          {
            stepNumber: 1,
            title: `Remplacer x par ${x}`,
            explanation: `${a * x} + (${b}) = ${fx}.`,
            mathExpression: `f(${x}) = ${a}×${x} + (${b}) | = ${fx}`,
            subResult: `${fx}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const a = randInt(2, 6);
      const b = randInt(1, 8);
      const ant = randInt(3, 9);
      const y = a * ant + b;
      return makeResult3(chapterId, difficulty, {
        title: 'Chercher l’antécédent de y par f(x) = ax + b',
        prompt: `Soit f(x) = ${a}x + ${b}. Calculer l’antécédent de ${y} par f (trouver x tel que f(x) = ${y}).`,
        hint: `Résous l’équation ${a}x + ${b} = ${y}.`,
        questionType: 'numeric',
        correctAnswer: String(ant),
        explanationFinal: `${a}x = ${y - b} ➔ x = ${ant}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Résoudre f(x) = ' + y,
            explanation: `${a}x = ${y} − ${b} = ${y - b} ➔ x = ${ant}.`,
            mathExpression: `${a}x = ${y - b} | x = ${ant}`,
            subResult: `${ant}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const x1 = 1;
      const x2 = 4;
      const a = randInt(2, 5);
      const b = randInt(-2, 4);
      const y1 = a * x1 + b;
      const y2 = a * x2 + b;
      return makeResult3(chapterId, difficulty, {
        title: 'Déterminer le coefficient directeur a = (f(x₂) − f(x₁)) / (x₂ − x₁)',
        prompt: `Une fonction affine f vérifie f(${x1}) = ${y1} et f(${x2}) = ${y2}.\nCalculer son coefficient directeur a.`,
        hint: 'Attention : les images f(x) vont au numérateur !',
        questionType: 'numeric',
        correctAnswer: String(a),
        explanationFinal: `a = (${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${y2 - y1} ÷ ${x2 - x1} = ${a}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la formule de la pente',
            explanation: `a = (${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${a}.`,
            mathExpression: `a = ${y2 - y1} ÷ ${x2 - x1} | a = ${a}`,
            subResult: `a = ${a}`,
          },
        ],
      });
    }
    const km = randInt(8, 25);
    const prise = 1000;
    const tarifKm = 300;
    const total = prise + tarifKm * km;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Tarif affine de taxi Libreville',
      prompt: `Un taxi applique la fonction affine f(x) = ${tarifKm}x + ${prise} (x en km).\nCalculer le prix d’une course de ${km} km (en F CFA).`,
      hint: `Calculer f(${km}) = ${tarifKm} × ${km} + ${prise}.`,
      questionType: 'numeric',
      correctAnswer: String(total),
      unit: 'F CFA',
      explanationFinal: `f(${km}) = ${tarifKm * km} + ${prise} = ${total} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: `Calculer f(${km})`,
          explanation: `${tarifKm} × ${km} + ${prise} = ${total} F CFA.`,
          mathExpression: `f(${km}) = ${tarifKm * km} + ${prise} | = ${total} F CFA`,
          subResult: `${total} F CFA`,
        },
      ],
    });
  }

  // 6. STATISTIQUES EN CLASSES
  if (chapterId === 'math3-statistiques-3eme') {
    if (difficulty === 1) {
      const b1 = randInt(2, 6) * 2;
      const b2 = b1 + randInt(2, 4) * 2;
      const c = (b1 + b2) / 2;
      return makeResult3(chapterId, difficulty, {
        title: 'Centre d’une classe [a ; b[',
        prompt: `Calculer le centre cᵢ de la classe de notes [${b1} ; ${b2}[.`,
        hint: 'cᵢ = (borne inférieure + borne supérieure) ÷ 2.',
        questionType: 'numeric',
        correctAnswer: String(c),
        explanationFinal: `cᵢ = (${b1} + ${b2}) ÷ 2 = ${c}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la demi-somme',
            explanation: `(${b1} + ${b2}) ÷ 2 = ${c}.`,
            mathExpression: `cᵢ = (${b1} + ${b2}) ÷ 2 | cᵢ = ${c}`,
            subResult: `${c}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const n1 = randInt(4, 10);
      const n2 = randInt(8, 16);
      const n3 = randInt(6, 12);
      const tot = n1 + n2 + n3;
      const ecc2 = n1 + n2;
      return makeResult3(chapterId, difficulty, {
        title: 'Effectifs cumulés croissants (ECC)',
        prompt: `Les effectifs de 3 classes successives sont n₁ = ${n1}, n₂ = ${n2}, n₃ = ${n3} (Total N = ${tot}).\nCalculer l’effectif cumulé croissant (ECC) de la 2ème classe.`,
        hint: 'ECC₂ = n₁ + n₂.',
        questionType: 'numeric',
        correctAnswer: String(ecc2),
        explanationFinal: `ECC₂ = ${n1} + ${n2} = ${ecc2}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Cumuler les effectifs jusqu’à la classe 2',
            explanation: `${n1} + ${n2} = ${ecc2}.`,
            mathExpression: `ECC₂ = ${n1} + ${n2} | = ${ecc2}`,
            subResult: `${ecc2}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const n1 = 10;
      const n2 = 20;
      const n3 = 10;
      const m = (n1 * 4 + n2 * 10 + n3 * 16) / 40;
      const shift = (variantIndex % 3) * 2;
      const avg = m + shift;
      return makeResult3(chapterId, difficulty, {
        title: 'Moyenne pondérée par centres de classes',
        prompt: `Un devoir de 40 élèves a pour centres et effectifs : centre ${4 + shift} (eff. 10), centre ${10 + shift} (eff. 20), centre ${16 + shift} (eff. 10).\nCalculer la moyenne de la classe.`,
        hint: 'Moyenne = Σ(nᵢ × cᵢ) ÷ 40.',
        questionType: 'numeric',
        correctAnswer: String(avg),
        explanationFinal: `Moyenne = ${avg}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer Σ(nᵢ × cᵢ) ÷ 40',
            explanation: `(10×${4 + shift} + 20×${10 + shift} + 10×${16 + shift}) ÷ 40 = ${avg}.`,
            mathExpression: `M = ${40 * avg} ÷ 40 | M = ${avg}`,
            subResult: `${avg}`,
          },
        ],
      });
    }
    const nTot = 50;
    const reussi = randInt(28, 44);
    const pct = (reussi / nTot) * 100;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Taux de réussite en pourcentage',
      prompt: `Dans un collège d’Oyem de ${nTot} candidats au BEPC blanc, ${reussi} élèves ont obtenu une note ≥ 10/20.\nQuel est le pourcentage de réussite (%) ?`,
      hint: `Fréquence (%) = (effectif ÷ ${nTot}) × 100.`,
      questionType: 'numeric',
      correctAnswer: String(pct),
      unit: '%',
      explanationFinal: `(${reussi} ÷ 50) × 100 = ${pct} %.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer la fréquence en %',
          explanation: `${reussi} ÷ ${nTot} × 100 = ${pct} %.`,
          mathExpression: `f = (${reussi} ÷ 50) × 100 | f = ${pct} %`,
          subResult: `${pct} %`,
        },
      ],
    });
  }

  // 7. PROBABILITÉS À 2 ÉPREUVES
  if (chapterId === 'math3-probabilites-3eme') {
    if (difficulty === 1) {
      const pPct = randInt(20, 75);
      const comp = 100 - pPct;
      return makeResult3(chapterId, difficulty, {
        title: 'Probabilité de l’événement contraire P(Ā) = 1 − P(A)',
        prompt: `La probabilité qu’il pleuve demain à Lambaréné est de ${pPct} %.\nQuelle est la probabilité (en %) qu’il ne pleuve PAS ?`,
        hint: '100 % − P(pluie).',
        questionType: 'numeric',
        correctAnswer: String(comp),
        unit: '%',
        explanationFinal: `100 % − ${pPct} % = ${comp} %.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Soustraire à 100 %',
            explanation: `100 − ${pPct} = ${comp} %.`,
            mathExpression: `P(Ā) = 100 − ${pPct} | = ${comp} %`,
            subResult: `${comp} %`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      return makeResult3(chapterId, difficulty, {
        title: 'Lancer de deux dés équilibrés (Tableau à 36 issues)',
        prompt: 'On lance deux dés équilibrés à 6 faces et on additionne les deux résultats.\nCombien y a-t-il de façons d’obtenir une somme égale à 7 (sur les 36 issues possibles) ?',
        hint: 'Liste les couples : (1;6), (2;5), (3;4), ...',
        questionType: 'numeric',
        correctAnswer: '6',
        unit: 'issues',
        explanationFinal: 'Il y a 6 couples : (1;6), (2;5), (3;4), (4;3), (5;2), (6;1).',
        steps: [
          {
            stepNumber: 1,
            title: 'Dénombrer les couples de somme 7',
            explanation: '(1;6), (2;5), (3;4), (4;3), (5;2), (6;1) ➔ 6 issues.',
            mathExpression: `Issues = 6 | P(S=7) = 6/36 = 1/6`,
            subResult: '6 issues',
          },
        ],
      });
    }
    if (difficulty === 3) {
      const r = randInt(2, 4);
      const b = randInt(2, 4);
      const tot = r + b;
      const tot2 = tot - 1;
      const denom = tot * tot2;
      const num = r * (r - 1);
      return makeResult3(chapterId, difficulty, {
        title: 'Tirage SANS remise dans une urne (Arbre)',
        prompt: `Une urne contient ${r} boules rouges et ${b} boules bleues (${tot} au total). On tire 2 boules successivement SANS remise.\nQuel est le dénominateur du nombre total de chemins ordonnés possibles (${tot} × ${tot2}) ?`,
        hint: `Au 1er tirage il y a ${tot} boules, au 2e il n’en reste que ${tot2} !`,
        questionType: 'numeric',
        correctAnswer: String(denom),
        explanationFinal: `${tot} × ${tot2} = ${denom} issues ordonnées (et P(2 rouges) = ${num}/${denom}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer le principe multiplicatif sans remise',
            explanation: `${tot} × ${tot2} = ${denom}.`,
            mathExpression: `Issues = ${tot} × ${tot2} | = ${denom}`,
            subResult: `${denom}`,
          },
        ],
      });
    }
    const p1 = pickRandom([0.4, 0.5, 0.6]);
    const p2 = 0.5;
    const bothPct = Math.round(p1 * p2 * 100);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Probabilité sur un arbre indépendant',
      prompt: `Un tireur réussit un lancer avec la probabilité ${p1} (indépendamment à chaque essai). Il tire deux fois de suite.\nQuelle est la probabilité (en %) qu’il réussisse DEUX fois sur deux ? (Réponse × 100 en %, avec p₂ = ${p2} pour le 2e tir spécial)`,
      hint: `Multiplie les probabilités le long de la branche : ${p1} × ${p2} puis × 100.`,
      questionType: 'numeric',
      correctAnswer: String(bothPct),
      unit: '%',
      explanationFinal: `${p1} × ${p2} = ${p1 * p2} = ${bothPct} %.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Multiplier sur la branche',
          explanation: `${p1} × ${p2} = ${bothPct} %.`,
          mathExpression: `P = ${p1} × ${p2} | = ${bothPct} %`,
          subResult: `${bothPct} %`,
        },
      ],
    });
  }

  // 8. THALÈS 3ème & RÉCIPROQUE
  if (chapterId === 'math3-thales-3eme') {
    if (difficulty === 1) {
      const am = randInt(2, 6);
      const ab = am * randInt(2, 4);
      const an = randInt(3, 7);
      const ac = (an * ab) / am;
      return makeResult3(chapterId, difficulty, {
        title: 'Théorème de Thalès direct (calcul d’une longueur)',
        prompt: `Dans le triangle ABC, M ∈ [AB], N ∈ [AC] et (MN) // (BC). On donne AM = ${am} cm, AB = ${ab} cm et AN = ${an} cm.\nCalculer AC (en cm).`,
        hint: 'Écris AM / AB = AN / AC puis effectue le produit en croix.',
        questionType: 'numeric',
        correctAnswer: String(ac),
        unit: 'cm',
        explanationFinal: `AC = (AN × AB) ÷ AM = (${an} × ${ab}) ÷ ${am} = ${ac} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer Thalès',
            explanation: `${am}/${ab} = ${an}/AC ➔ AC = (${an}×${ab})/${am} = ${ac} cm.`,
            mathExpression: `AC = (${an} × ${ab}) ÷ ${am} | AC = ${ac} cm`,
            subResult: `${ac} cm`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const k = randInt(2, 4);
      const om = randInt(3, 6);
      const oa = om * k;
      const mn = randInt(4, 9);
      const ab = mn * k;
      return makeResult3(chapterId, difficulty, {
        title: 'Configuration Papillon de Thalès',
        prompt: `Les droites (AB) et (MN) sont parallèles, et (AM) et (BN) se coupent en O (papillon). On donne OM = ${om} cm, OA = ${oa} cm et MN = ${mn} cm.\nCalculer AB (en cm).`,
        hint: 'En papillon depuis le sommet O : OM / OA = MN / AB.',
        questionType: 'numeric',
        correctAnswer: String(ab),
        unit: 'cm',
        explanationFinal: `Le rapport d’agrandissement est OA/OM = ${k}, donc AB = ${k} × ${mn} = ${ab} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire les rapports depuis le centre O',
            explanation: `OM/OA = MN/AB ➔ ${om}/${oa} = ${mn}/AB.`,
            mathExpression: `AB = ${mn} × (${oa} ÷ ${om}) | AB = ${ab} cm`,
            subResult: `${ab} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const par = randFloat() > 0.5;
      const r1Num = 4;
      const r1Den = 6;
      const r2Num = par ? 6 : 5;
      const r2Den = 9;
      return makeResult3(chapterId, difficulty, {
        title: 'Réciproque vs Contraposée de Thalès',
        prompt: `Les points A, M, B et A, N, C sont alignés dans le même ordre avec AM/AB = ${r1Num}/${r1Den} et AN/AC = ${r2Num}/${r2Den}.\nLes droites (MN) et (BC) sont-elles parallèles ?`,
        hint: 'Simplifie ou utilise les produits en croix exacts pour comparer les deux fractions !',
        questionType: 'qcm',
        options: [
          'Oui, parallèles (réciproque de Thalès, rapports égaux)',
          'Non, pas parallèles (rapports différents)',
        ],
        correctAnswer: par
          ? 'Oui, parallèles (réciproque de Thalès, rapports égaux)'
          : 'Non, pas parallèles (rapports différents)',
        explanationFinal: par
          ? `4/6 = 2/3 et 6/9 = 2/3 : rapports égaux ➔ droites parallèles.`
          : `4×9 = 36 ≠ 6×5 = 30 : rapports différents ➔ droites non parallèles.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Comparer les produits en croix exacts',
            explanation: `${r1Num}×${r2Den} = ${r1Num * r2Den} et ${r1Den}×${r2Num} = ${r1Den * r2Num}.`,
            mathExpression: `${r1Num}/${r1Den} ${par ? '=' : '≠'} ${r2Num}/${r2Den}`,
          },
        ],
      });
    }
    const hautPoteau = 2;
    const ombPoteau = randInt(2, 4);
    const ombImmeuble = ombPoteau * randInt(4, 9);
    const hautImmeuble = (hautPoteau * ombImmeuble) / ombPoteau;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Mesurer un bâtiment à Libreville par ombre (Thalès)',
      prompt: `À la même heure, un poteau vertical de ${hautPoteau} m projette une ombre de ${ombPoteau} m. Un immeuble voisin projette une ombre de ${ombImmeuble} m.\nCalculer la hauteur de l’immeuble (en m).`,
      hint: 'Les rayons du Soleil sont parallèles : H_imm / H_pot = Ombre_imm / Ombre_pot.',
      questionType: 'numeric',
      correctAnswer: String(hautImmeuble),
      unit: 'm',
      explanationFinal: `H = ${hautPoteau} × (${ombImmeuble} ÷ ${ombPoteau}) = ${hautImmeuble} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer Thalès sur les ombres',
          explanation: `H = 2 × ${ombImmeuble / ombPoteau} = ${hautImmeuble} m.`,
          mathExpression: `H = (${hautPoteau} × ${ombImmeuble}) ÷ ${ombPoteau} | H = ${hautImmeuble} m`,
          subResult: `${hautImmeuble} m`,
        },
      ],
    });
  }

  // 9. TRIGONOMÉTRIE 3ème
  if (chapterId === 'math3-trigonometrie-3eme') {
    if (difficulty === 1) {
      const mult = randInt(2, 6);
      const opp = 3 * mult;
      const hyp = 5 * mult;
      return makeResult3(chapterId, difficulty, {
        title: 'Calculer sin(α) = Opposé / Hypoténuse',
        prompt: `Dans un triangle rectangle, le côté opposé à l’angle α mesure ${opp} cm et l’hypoténuse mesure ${hyp} cm.\nCalculer sin(α) (en écriture décimale exacte, ex: 0.6).`,
        hint: 'SOH : sin(α) = Opposé ÷ Hypoténuse.',
        questionType: 'numeric',
        correctAnswer: '0.6',
        explanationFinal: `sin(α) = ${opp} ÷ ${hyp} = 3/5 = 0,6.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer SOH',
            explanation: `${opp} ÷ ${hyp} = 0,6.`,
            mathExpression: `sin(α) = ${opp} ÷ ${hyp} | = 0,6`,
            subResult: '0,6',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const adj = randInt(2, 8) * 4;
      const opp = (adj / 4) * 3;
      return makeResult3(chapterId, difficulty, {
        title: 'Calculer tan(α) = Opposé / Adjacent',
        prompt: `Un triangle rectangle a un angle α tel que le côté adjacent mesure ${adj} cm et l’opposé ${opp} cm.\nCalculer tan(α) (décimal exact).`,
        hint: 'TOA : tan(α) = Opposé ÷ Adjacent.',
        questionType: 'numeric',
        correctAnswer: '0.75',
        explanationFinal: `tan(α) = ${opp} ÷ ${adj} = 3/4 = 0,75.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer TOA',
            explanation: `${opp} ÷ ${adj} = 0,75.`,
            mathExpression: `tan(α) = ${opp} ÷ ${adj} | = 0,75`,
            subResult: '0,75',
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult3(chapterId, difficulty, {
        title: 'Relation fondamentale cos²(α) + sin²(α) = 1',
        prompt: 'Sachant que cos(α) = 0,8 pour un angle aigu α, calculer sin(α) (décimal exact).',
        hint: 'sin²(α) = 1 − cos²(α) = 1 − 0,64 = 0,36.',
        questionType: 'numeric',
        correctAnswer: '0.6',
        explanationFinal: `sin²(α) = 1 − 0,64 = 0,36 donc sin(α) = √0,36 = 0,6.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Utiliser cos²α + sin²α = 1',
            explanation: 'sin²α = 1 − 0,8² = 0,36 ➔ sin α = 0,6.',
            mathExpression: `sin(α) = √(1 − 0,64) = √0,36 | = 0,6`,
            subResult: '0,6',
          },
        ],
      });
    }
    const dist = randInt(10, 40) * 10;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Hauteur d’un phare à Cap Esterias (tan 45° = 1)',
      prompt: `Depuis un bateau situé à d = ${dist} m du pied du phare de Cap Esterias, on vise le sommet sous un angle d’élévation de 45°.\nCalculer la hauteur h du phare (en m) sachant que tan(45°) = 1.`,
      hint: 'tan(45°) = h ÷ d = 1.',
      questionType: 'numeric',
      correctAnswer: String(dist),
      unit: 'm',
      explanationFinal: `h = ${dist} × tan(45°) = ${dist} × 1 = ${dist} m.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer TOA',
          explanation: `h = ${dist} × 1 = ${dist} m.`,
          mathExpression: `h = ${dist} × tan(45°) | h = ${dist} m`,
          subResult: `${dist} m`,
        },
      ],
    });
  }

  // 10. VECTEURS & TRANSLATIONS
  if (chapterId === 'math3-vecteurs-translations') {
    if (difficulty === 1) {
      return makeResult3(chapterId, difficulty, {
        title: 'Relation de Chasles simple',
        prompt: 'Simplifier la somme vectorielle suivante grâce à la relation de Chasles :\nAB⃗ + BC⃗ + CD⃗',
        hint: 'Les points intermédiaires B et C s’enchaînent bout à bout !',
        questionType: 'qcm',
        options: ['AD⃗', 'AC⃗', '0⃗ (vecteur nul)'],
        correctAnswer: 'AD⃗',
        explanationFinal: '(AB⃗ + BC⃗) + CD⃗ = AC⃗ + CD⃗ = AD⃗.',
        steps: [
          {
            stepNumber: 1,
            title: 'Enchaîner avec Chasles',
            explanation: 'B puis C disparaissent : on va directement de A à D.',
            mathExpression: `AB⃗ + BC⃗ + CD⃗ = AD⃗`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      return makeResult3(chapterId, difficulty, {
        title: 'Égalité vectorielle et parallélogramme',
        prompt: 'Si quatre points non alignés vérifient l’égalité vectorielle AB⃗ = DC⃗, quel quadrilatère est un parallélogramme ?',
        hint: 'Attention à l’ordre des lettres ! Dessine A ➔ B en haut et D ➔ C en bas dans le même sens.',
        questionType: 'qcm',
        options: ['ABCD', 'ABDC', 'ACBD'],
        correctAnswer: 'ABCD',
        explanationFinal: 'AB⃗ = DC⃗ signifie que ABCD est un parallélogramme.',
        steps: [
          {
            stepNumber: 1,
            title: 'Suivre le tour du parallélogramme',
            explanation: 'De A vers B en haut, puis C en bas à droite et D en bas à gauche : A-B-C-D.',
            mathExpression: `AB⃗ = DC⃗ ⇔ ABCD parallélogramme`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult3(chapterId, difficulty, {
        title: 'Milieu d’un segment et vecteurs',
        prompt: 'I est le milieu du segment [EF]. Que vaut la somme IE⃗ + IF⃗ ?',
        hint: 'IE⃗ et IF⃗ ont même direction, même longueur, et des sens exactement OPPOSÉS.',
        questionType: 'qcm',
        options: ['0⃗ (vecteur nul)', 'EF⃗', '2 EI⃗'],
        correctAnswer: '0⃗ (vecteur nul)',
        explanationFinal: 'I milieu de [EF] ⇔ IE⃗ + IF⃗ = 0⃗.',
        steps: [
          {
            stepNumber: 1,
            title: 'Vecteurs opposés',
            explanation: 'IF⃗ = −IE⃗ donc IE⃗ + IF⃗ = 0⃗.',
            mathExpression: `IE⃗ + IF⃗ = 0⃗`,
          },
        ],
      });
    }
    const k = randInt(2, 5);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Réduire u⃗ = (AB⃗ − AC⃗) + ' + k + ' CB⃗',
      prompt: `Réduire l’expression vectorielle : u⃗ = AB⃗ − AC⃗ + ${k} CB⃗ sous la forme n · CB⃗.\nQue vaut l’entier n ?`,
      hint: 'Rappel : AB⃗ − AC⃗ = AB⃗ + CA⃗ = CB⃗ !',
      questionType: 'numeric',
      correctAnswer: String(1 + k),
      explanationFinal: `AB⃗ − AC⃗ = CB⃗, donc u⃗ = CB⃗ + ${k} CB⃗ = ${1 + k} CB⃗ (n = ${1 + k}).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Transformer −AC⃗ en +CA⃗',
          explanation: 'CA⃗ + AB⃗ = CB⃗ par Chasles.',
          mathExpression: `AB⃗ − AC⃗ = CB⃗`,
        },
        {
          stepNumber: 2,
          title: 'Additionner les vecteurs colinéaires',
          explanation: `1 CB⃗ + ${k} CB⃗ = ${1 + k} CB⃗.`,
          mathExpression: `u⃗ = ${1 + k} CB⃗ | n = ${1 + k}`,
          subResult: `n = ${1 + k}`,
        },
      ],
    });
  }

  // 11. ANGLES & POLYGONES RÉGULIERS
  if (chapterId === 'math3-angles-polygones') {
    if (difficulty === 1) {
      const insc = randInt(22, 68);
      const centre = insc * 2;
      return makeResult3(chapterId, difficulty, {
        title: 'Angle au centre = 2 × Angle inscrit',
        prompt: `Sur un cercle de centre O, l’angle inscrit A M̂ B mesure ${insc}°.\nQuelle est la mesure de l’angle au centre A Ô B interceptant le même arc (en degrés) ?`,
        hint: 'L’angle au centre mesure le DOUBLE de l’angle inscrit.',
        questionType: 'numeric',
        correctAnswer: String(centre),
        unit: '°',
        explanationFinal: `A Ô B = 2 × ${insc}° = ${centre}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Multiplier l’angle inscrit par 2',
            explanation: `2 × ${insc} = ${centre}°.`,
            mathExpression: `AÔB = 2 × ${insc}° | = ${centre}°`,
            subResult: `${centre}°`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const polys = [
        [5, 72],
        [6, 60],
        [8, 45],
        [9, 40],
        [10, 36],
        [12, 30],
      ];
      const [n, ang] = polys[(randInt(0, polys.length - 1) + variantIndex) % polys.length];
      return makeResult3(chapterId, difficulty, {
        title: 'Angle au centre d’un polygone régulier à n côtés',
        prompt: `Calculer la mesure de l’angle au centre d’un polygone régulier à n = ${n} côtés (en degrés).`,
        hint: 'Divise le tour complet 360° par le nombre de côtés n.',
        questionType: 'numeric',
        correctAnswer: String(ang),
        unit: '°',
        explanationFinal: `360° ÷ ${n} = ${ang}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Diviser 360° par n',
            explanation: `360 ÷ ${n} = ${ang}°.`,
            mathExpression: `α = 360° ÷ ${n} | α = ${ang}°`,
            subResult: `${ang}°`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const a = randInt(62, 118);
      const c = 180 - a;
      return makeResult3(chapterId, difficulty, {
        title: 'Quadrilatère inscrit dans un cercle',
        prompt: `ABCD est un quadrilatère inscrit dans un cercle. L’angle B Â D mesure ${a}°.\nQuelle est la mesure de l’angle opposé B Ĉ D (en degrés) ?`,
        hint: 'Dans un quadrilatère inscriptible, deux angles opposés sont SUPPLÉMENTAIRES (somme = 180°).',
        questionType: 'numeric',
        correctAnswer: String(c),
        unit: '°',
        explanationFinal: `B Ĉ D = 180° − ${a}° = ${c}°.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Soustraire à 180°',
            explanation: `180° − ${a}° = ${c}°.`,
            mathExpression: `BĈD = 180° − ${a}° | = ${c}°`,
            subResult: `${c}°`,
          },
        ],
      });
    }
    const n = pickRandom([6, 8, 10, 12]);
    const intAng = 180 - 360 / n;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Angle intérieur d’un polygone régulier',
      prompt: `Calculer la mesure d’un angle intérieur (entre deux côtés consécutifs) d’un polygone régulier à n = ${n} côtés (en degrés).`,
      hint: `Calcule d’abord l’angle au centre (360° ÷ ${n}), puis soustrais-le à 180° !`,
      questionType: 'numeric',
      correctAnswer: String(intAng),
      unit: '°',
      explanationFinal: `Angle au centre = ${360 / n}°, donc angle intérieur = 180° − ${360 / n}° = ${intAng}°.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer 180° − (360° ÷ n)',
          explanation: `180 − ${360 / n} = ${intAng}°.`,
          mathExpression: `Â = 180° − 360°/${n} | Â = ${intAng}°`,
          subResult: `${intAng}°`,
        },
      ],
    });
  }

  // 12. REPÈRE ORTHONORMÉ & DROITES
  if (chapterId === 'math3-reperage-droites') {
    if (difficulty === 1) {
      const xa = randInt(-3, 4);
      const ya = randInt(-3, 4);
      const dx = randInt(2, 7);
      const dy = randInt(-4, 5);
      const xb = xa + dx;
      const yb = ya + dy;
      return makeResult3(chapterId, difficulty, {
        title: 'Coordonnées du vecteur AB⃗',
        prompt: `Dans un repère orthonormé, on donne A(${xa} ; ${ya}) et B(${xb} ; ${yb}).\nCalculer l’abscisse (première coordonnée) du vecteur AB⃗.`,
        hint: 'x_AB = x_B − x_A (arrivée moins départ !).',
        questionType: 'numeric',
        correctAnswer: String(dx),
        explanationFinal: `AB⃗(${xb} − (${xa}) ; ${yb} − (${ya})) = AB⃗(${dx} ; ${dy}).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer x_B − x_A',
            explanation: `${xb} − (${xa}) = ${dx}.`,
            mathExpression: `x_AB = ${xb} − (${xa}) | = ${dx}`,
            subResult: `${dx}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const triples = [
        [3, 4, 5],
        [6, 8, 10],
        [5, 12, 13],
      ];
      const [dx, dy, dist] = triples[(randInt(0, triples.length - 1) + variantIndex) % triples.length];
      return makeResult3(chapterId, difficulty, {
        title: 'Distance entre deux points AB = √((x_B−x_A)² + (y_B−y_A)²)',
        prompt: `Le vecteur AB⃗ a pour coordonnées (${dx} ; ${dy}) dans un repère orthonormé.\nCalculer la longueur exacte AB.`,
        hint: `AB = √(${dx}² + ${dy}²).`,
        questionType: 'numeric',
        correctAnswer: String(dist),
        explanationFinal: `AB = √(${dx * dx} + ${dy * dy}) = √${dist * dist} = ${dist}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer √(dx² + dy²)',
            explanation: `√(${dx * dx} + ${dy * dy}) = √${dist * dist} = ${dist}.`,
            mathExpression: `AB = √${dist * dist} | AB = ${dist}`,
            subResult: `${dist}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const col = randFloat() > 0.5;
      const u = [2, 6];
      const v = col ? [3, 9] : [3, 8];
      const det = u[0] * v[1] - u[1] * v[0];
      return makeResult3(chapterId, difficulty, {
        title: 'Test de colinéarité x·y’ − y·x’ = 0',
        prompt: `On donne u⃗(${u[0]} ; ${u[1]}) et v⃗(${v[0]} ; ${v[1]}). Calculer le déterminant x·y’ − y·x’ et dire s’ils sont colinéaires.`,
        hint: `Calcule (${u[0]} × ${v[1]}) − (${u[1]} × ${v[0]}).`,
        questionType: 'qcm',
        options: [
          'Déterminant = 0 ➔ Colinéaires',
          `Déterminant = ${det} ≠ 0 ➔ Non colinéaires`,
        ],
        correctAnswer: col
          ? 'Déterminant = 0 ➔ Colinéaires'
          : `Déterminant = ${det} ≠ 0 ➔ Non colinéaires`,
        explanationFinal: `det = ${u[0] * v[1]} − ${u[1] * v[0]} = ${det}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer x·y’ − y·x’',
            explanation: `${u[0] * v[1]} − ${u[1] * v[0]} = ${det}.`,
            mathExpression: `det = ${det}`,
          },
        ],
      });
    }
    const m = randInt(2, 5);
    const xp = randInt(1, 4);
    const yp = randInt(3, 12);
    const p = yp - m * xp;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Équation réduite de droite y = mx + p',
      prompt: `Une droite (D) a pour coefficient directeur m = ${m} et passe par le point A(${xp} ; ${yp}).\nCalculer son ordonnée à l’origine p dans l’équation y = ${m}x + p.`,
      hint: `Puisque A ∈ (D), ses coordonnées vérifient ${yp} = ${m}×${xp} + p.`,
      questionType: 'numeric',
      correctAnswer: String(p),
      explanationFinal: `p = ${yp} − ${m * xp} = ${p}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Isoler p',
          explanation: `${yp} = ${m * xp} + p ➔ p = ${yp} − ${m * xp} = ${p}.`,
          mathExpression: `p = ${yp} − ${m * xp} | p = ${p}`,
          subResult: `p = ${p}`,
        },
      ],
    });
  }

  // 13. PYRAMIDES & CÔNES
  if (chapterId === 'math3-pyramides-cones') {
    if (difficulty === 1) {
      const c = randInt(3, 9);
      const h = randInt(3, 9) * 3;
      const v = (c * c * h) / 3;
      return makeResult3(chapterId, difficulty, {
        title: 'Volume d’une pyramide régulière à base carrée',
        prompt: `Une pyramide régulière a pour base un carré de côté c = ${c} cm et une hauteur h = ${h} cm.\nCalculer son volume V (en cm³).`,
        hint: 'Aire de base B = c², puis V = (B × h) ÷ 3.',
        questionType: 'numeric',
        correctAnswer: String(v),
        unit: 'cm³',
        explanationFinal: `B = ${c * c} cm², V = (${c * c} × ${h}) ÷ 3 = ${v} cm³.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer B puis V = (B × h) ÷ 3',
            explanation: `V = (${c * c} × ${h}) ÷ 3 = ${v} cm³.`,
            mathExpression: `V = (${c * c} × ${h}) ÷ 3 | V = ${v} cm³`,
            subResult: `${v} cm³`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const r = randInt(3, 6);
      const h = randInt(2, 5) * 3;
      const vCoeff = (r * r * h) / 3;
      return makeResult3(chapterId, difficulty, {
        title: 'Volume exact d’un cône de révolution (en multiples de π)',
        prompt: `Un cône de révolution a un rayon r = ${r} cm et une hauteur h = ${h} cm.\nSon volume exact s’écrit V = k × π cm³. Que vaut k ?`,
        hint: 'V = (π × r² × h) ÷ 3.',
        questionType: 'numeric',
        correctAnswer: String(vCoeff),
        unit: 'π cm³',
        explanationFinal: `k = (${r}² × ${h}) ÷ 3 = ${vCoeff}, soit V = ${vCoeff}π cm³.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer (r² × h) ÷ 3',
            explanation: `(${r * r} × ${h}) ÷ 3 = ${vCoeff}.`,
            mathExpression: `V = ${vCoeff}π cm³ | k = ${vCoeff}`,
            subResult: `${vCoeff}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const pairs = [
        [3, 4, 5],
        [6, 8, 10],
        [5, 12, 13],
      ];
      const [r, h, g] = pairs[(randInt(0, pairs.length - 1) + variantIndex) % pairs.length];
      return makeResult3(chapterId, difficulty, {
        title: 'Génératrice d’un cône par Pythagore (g² = r² + h²)',
        prompt: `Un cône a un rayon r = ${r} cm et une hauteur h = ${h} cm.\nCalculer la longueur de sa génératrice g (en cm).`,
        hint: 'Le triangle formé par le rayon, la hauteur et la génératrice est rectangle !',
        questionType: 'numeric',
        correctAnswer: String(g),
        unit: 'cm',
        explanationFinal: `g² = ${r}² + ${h}² = ${g * g}, donc g = ${g} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer Pythagore',
            explanation: `g = √(${r * r} + ${h * h}) = ${g} cm.`,
            mathExpression: `g = √${g * g} | g = ${g} cm`,
            subResult: `${g} cm`,
          },
        ],
      });
    }
    const r = randInt(2, 5);
    const g = r * 4;
    const angle = Math.round((360 * r) / g);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Angle du patron du cône α = 360° × r / g',
      prompt: `On veut fabriquer le patron d’un cône de rayon r = ${r} cm et de génératrice g = ${g} cm.\nCalculer l’angle α du secteur circulaire (en degrés).`,
      hint: 'Formule du patron : α = 360° × (r ÷ g).',
      questionType: 'numeric',
      correctAnswer: String(angle),
      unit: '°',
      explanationFinal: `α = 360 × (${r} ÷ ${g}) = 360 ÷ 4 = ${angle}°.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer α = 360° × r ÷ g',
          explanation: `360 × ${r} ÷ ${g} = ${angle}°.`,
          mathExpression: `α = 360° × (${r}/${g}) | α = ${angle}°`,
          subResult: `${angle}°`,
        },
      ],
    });
  }

  // 14. SECTIONS PLANES & AGRANDISSEMENT-RÉDUCTION (math3-sections-agrandissement)
  if (difficulty === 1) {
    const kDen = pickRandom([2, 3]);
    const kCubedDen = kDen * kDen * kDen;
    return makeResult3(chapterId, difficulty, {
      title: 'Effet d’une réduction de rapport k sur le volume (k³)',
      prompt: `On coupe un cône parallèlement à sa base pour obtenir un petit cône de rapport de réduction k = 1/${kDen}.\nPar quel nombre le volume du grand cône est-il divisé ?`,
      hint: 'Les longueurs × k ; les aires × k² ; les VOLUMES × k³ !',
      questionType: 'numeric',
      correctAnswer: String(kCubedDen),
      explanationFinal: `k³ = (1/${kDen})³ = 1/${kCubedDen} : le volume est divisé par ${kCubedDen}.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Élever le rapport k au cube',
          explanation: `${kDen}³ = ${kCubedDen}.`,
          mathExpression: `k³ = (1/${kDen})³ = 1/${kCubedDen}`,
          subResult: `÷ ${kCubedDen}`,
        },
      ],
    });
  }
  if (difficulty === 2) {
    const aireG = randInt(4, 12) * 9;
    const k = '1/3';
    const aireP = aireG / 9;
    return makeResult3(chapterId, difficulty, {
      title: 'Aire de la section plane : Aire’ = k² × Aire',
      prompt: `La base d’une pyramide a pour aire B = ${aireG} cm². On la coupe parallèlement à la base à k = ${k} du sommet.\nCalculer l’aire B’ de la section réduite (en cm²).`,
      hint: 'Aire’ = k² × Aire = (1/9) × B.',
      questionType: 'numeric',
      correctAnswer: String(aireP),
      unit: 'cm²',
      explanationFinal: `B’ = (1/3)² × ${aireG} = ${aireG} ÷ 9 = ${aireP} cm².`,
      steps: [
        {
          stepNumber: 1,
          title: 'Multiplier l’aire par k² = 1/9',
          explanation: `${aireG} ÷ 9 = ${aireP} cm².`,
          mathExpression: `B’ = (1/9) × ${aireG} | = ${aireP} cm²`,
          subResult: `${aireP} cm²`,
        },
      ],
    });
  }
  if (difficulty === 3) {
    const vGrand = randInt(2, 9) * 8;
    const vPetit = vGrand / 8;
    return makeResult3(chapterId, difficulty, {
      title: 'Volume du petit cône à mi-hauteur (k = 1/2)',
      prompt: `Un verre conique contient V = ${vGrand} cm³ lorsqu’il est plein. On le remplit exactement jusqu’à la moitié de sa hauteur (k = 1/2).\nQuel volume de jus (en cm³) contient-il ?`,
      hint: 'À mi-hauteur, V_petit = (1/2)³ × V_grand = V_grand ÷ 8 !',
      questionType: 'numeric',
      correctAnswer: String(vPetit),
      unit: 'cm³',
      explanationFinal: `V_petit = ${vGrand} ÷ 8 = ${vPetit} cm³.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer k³ = 1/8',
          explanation: `${vGrand} ÷ 8 = ${vPetit} cm³.`,
          mathExpression: `V’ = ${vGrand} × (1/2)³ | V’ = ${vPetit} cm³`,
          subResult: `${vPetit} cm³`,
        },
      ],
    });
  }
  const vGrand = randInt(3, 10) * 8;
  const vPetit = vGrand / 8;
  const vTronc = vGrand - vPetit;
  return makeResult3(chapterId, difficulty, {
    title: 'Défi BEPC : Volume d’un tronc de cône (seau)',
    prompt: `Une bassine tronconique est obtenue en retirant d’un grand cône de volume V = ${vGrand} dm³ le petit cône supérieur à mi-hauteur (k = 1/2).\nCalculer le volume V_tronc du tronc de cône (en dm³).`,
    hint: 'V_tronc = V_grand − V_petit avec V_petit = V_grand × (1/2)³.',
    questionType: 'numeric',
    correctAnswer: String(vTronc),
    unit: 'dm³',
    explanationFinal: `V_petit = ${vGrand} ÷ 8 = ${vPetit} dm³, donc V_tronc = ${vGrand} − ${vPetit} = ${vTronc} dm³.`,
    steps: [
      {
        stepNumber: 1,
        title: 'Calculer V_petit = k³ × V_grand',
        explanation: `V_petit = ${vGrand} ÷ 8 = ${vPetit} dm³.`,
        mathExpression: `V_petit = ${vGrand} × (1/8) | = ${vPetit} dm³`,
      },
      {
        stepNumber: 2,
        title: 'Soustraire pour obtenir le tronc',
        explanation: `${vGrand} − ${vPetit} = ${vTronc} dm³.`,
        mathExpression: `V_tronc = ${vGrand} − ${vPetit} | = ${vTronc} dm³`,
        subResult: `${vTronc} dm³`,
      },
    ],
  });
}
