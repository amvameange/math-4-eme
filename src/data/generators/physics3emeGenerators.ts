import { ExerciseDifficulty } from '../../types/math';
import { PHYSICS_3EME_CHAPTERS } from '../physics3emeCurriculum';
import { DIFFICULTY_META, GeneratedExercise, pickRandom, randFloat, randInt } from './types';

function makeResult3(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  partial: Omit<GeneratedExercise, 'chapterId' | 'chapterTitle' | 'difficulty' | 'difficultyLabel'>
): GeneratedExercise {
  const chap = PHYSICS_3EME_CHAPTERS.find((c) => c.id === chapterId);
  return {
    chapterId,
    chapterTitle: chap?.title || chapterId,
    difficulty,
    difficultyLabel: DIFFICULTY_META[difficulty].label,
    ...partial,
  };
}

export function generatePhysics3emeExercise(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  variantIndex = 0
): GeneratedExercise {
  // 1. ACTIONS MÉCANIQUES & FORCES
  if (chapterId === 'phys3-actions-mecaniques') {
    if (difficulty === 1) {
      const m = randInt(2, 18) + (variantIndex % 3);
      const p = m * 10;
      return makeResult3(chapterId, difficulty, {
        title: 'Calcul du poids P = m × g',
        prompt: `Un sac de manioc de masse m = ${m} kg est posé au marché Mont-Bouët (g = 10 N/kg).\nCalculer l’intensité P de son poids (en N).`,
        hint: 'Appliquer P = m × g avec m en kg.',
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'N',
        explanationFinal: `P = ${m} × 10 = ${p} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la formule du poids',
            explanation: 'Le poids est proportionnel à la masse.',
            mathExpression: `P = m × g | P = ${m} × 10 | P = ${p} N`,
            ruleApplied: 'P (en N) = m (en kg) × g (en N/kg)',
            subResult: `${p} N`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const echelle = pickRandom([5, 10, 20]);
      const longCm = randInt(3, 8);
      const f = echelle * longCm;
      return makeResult3(chapterId, difficulty, {
        title: 'Représentation vectorielle d’une force à l’échelle',
        prompt: `On représente une force de traction horizontale d’intensité F = ${f} N à l’échelle 1 cm ⟷ ${echelle} N.\nQuelle longueur L (en cm) doit mesurer la flèche du vecteur F⃗ ?`,
        hint: `Diviser l’intensité F par l’échelle : L = F ÷ ${echelle}.`,
        questionType: 'numeric',
        correctAnswer: String(longCm),
        unit: 'cm',
        explanationFinal: `L = ${f} ÷ ${echelle} = ${longCm} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir la force en centimètres',
            explanation: `Puisque 1 cm représente ${echelle} N, on divise ${f} par ${echelle}.`,
            mathExpression: `L = F ÷ échelle | L = ${f} ÷ ${echelle} | L = ${longCm} cm`,
            subResult: `${longCm} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const mGrams = pickRandom([450, 600, 850, 1200, 1500, 2500]) + (variantIndex % 2) * 100;
      const mKg = mGrams / 1000;
      const p = Number((mKg * 9.8).toFixed(2));
      return makeResult3(chapterId, difficulty, {
        title: 'Conversion g ➔ kg et poids précis (g = 9,8 N/kg)',
        prompt: `Un poisson pêché à Port-Gentil a une masse m = ${mGrams} g.\nCalculer son poids P avec g = 9,8 N/kg (en N, arrondi au centième si besoin).`,
        hint: `Convertis d’abord ${mGrams} g en kilogrammes (diviser par 1 000), puis multiplie par 9,8.`,
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'N',
        explanationFinal: `m = ${mKg} kg, donc P = ${mKg} × 9,8 = ${p} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir la masse en kilogrammes',
            explanation: `${mGrams} g = ${mGrams} ÷ 1 000 = ${mKg} kg.`,
            mathExpression: `m = ${mGrams} g | m = ${mKg} kg`,
          },
          {
            stepNumber: 2,
            title: 'Calculer P = m × g',
            explanation: `${mKg} × 9,8 = ${p} N.`,
            mathExpression: `P = ${mKg} × 9,8 | P = ${p} N`,
            subResult: `${p} N`,
          },
        ],
      });
    }
    const p = randInt(4, 15) * 49;
    const m = p / 9.8;
    const priceKg = pickRandom([1200, 1500, 2000]);
    const prix = m * priceKg;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi Gabon : Masse depuis le poids et valeur marchande',
      prompt: `Un colis au port d’Owendo a un poids mesuré au dynamomètre P = ${p} N (on prend g = 9,8 N/kg).\nCalculer sa masse m en kg, puis le coût du fret si le tarif est de ${priceKg} F CFA/kg.`,
      hint: `m = P ÷ g = ${p} ÷ 9,8, puis multiplie par ${priceKg} F CFA.`,
      questionType: 'numeric',
      correctAnswer: String(prix),
      unit: 'F CFA',
      explanationFinal: `m = ${p} ÷ 9,8 = ${m} kg, coût = ${m} × ${priceKg} = ${prix} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Retrouver la masse m = P ÷ g',
          explanation: `m = ${p} ÷ 9,8 = ${m} kg.`,
          mathExpression: `m = ${p} ÷ 9,8 | m = ${m} kg`,
        },
        {
          stepNumber: 2,
          title: 'Calculer le coût en F CFA',
          explanation: `${m} × ${priceKg} = ${prix} F CFA.`,
          mathExpression: `Coût = ${m} × ${priceKg} | = ${prix} F CFA`,
          subResult: `${prix} F CFA`,
        },
      ],
    });
  }

  // 2. ÉQUILIBRE D'UN SOLIDE & ARCHIMÈDE
  if (chapterId === 'phys3-equilibre-solide') {
    if (difficulty === 1) {
      const p = randInt(12, 85);
      return makeResult3(chapterId, difficulty, {
        title: 'Équilibre d’un solide soumis à deux forces',
        prompt: `Une caisse de poids P = ${p} N est suspendue immobile au bout d’un câble vertical.\nQuelle est l’intensité T de la tension exercée par le câble (en N) ?`,
        hint: 'À l’équilibre sous 2 forces, les deux forces ont la même intensité : T = P.',
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'N',
        explanationFinal: `À l’équilibre, T = P = ${p} N (même droite d’action, sens contraires).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la condition d’équilibre à 2 forces',
            explanation: 'P⃗ + T⃗ = 0⃗ donc P = T.',
            mathExpression: `P⃗ + T⃗ = 0⃗ | T = P = ${p} N`,
            subResult: `${p} N`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const pAir = randInt(25, 65);
      const pa = randInt(6, 18);
      const pApp = pAir - pa;
      return makeResult3(chapterId, difficulty, {
        title: 'Poussée d’Archimède : Pa = P − P’',
        prompt: `Une pierre a un poids réel dans l’air P = ${pAir} N. Plongée totalement dans l’Ogooué, le dynamomètre indique un poids apparent P’ = ${pApp} N.\nCalculer la poussée d’Archimède Pa (en N).`,
        hint: 'Pa = P − P’.',
        questionType: 'numeric',
        correctAnswer: String(pa),
        unit: 'N',
        explanationFinal: `Pa = ${pAir} − ${pApp} = ${pa} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Soustraire le poids apparent au poids réel',
            explanation: `Pa = ${pAir} − ${pApp} = ${pa} N.`,
            mathExpression: `Pa = P − P’ | Pa = ${pAir} − ${pApp} | Pa = ${pa} N`,
            subResult: `${pa} N`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const vL = randInt(3, 12); // litres = dm3
      const rho = pickRandom([1, 1.03, 0.8]); // kg/L
      const pa = Number((rho * vL * 10).toFixed(1));
      const liq = rho === 1 ? 'eau douce (1 kg/L)' : rho === 1.03 ? 'eau de mer de Libreville (1,03 kg/L)' : 'gasoil (0,8 kg/L)';
      return makeResult3(chapterId, difficulty, {
        title: 'Formule Pa = ρ × V × g',
        prompt: `Un bloc de volume V = ${vL} L (soit ${vL} dm³) est totalement immergé dans de l’${liq}, avec g = 10 N/kg.\nCalculer la poussée d’Archimède Pa (en N).`,
        hint: 'La masse de liquide déplacé vaut m_liq = ρ × V (avec ρ en kg/L et V en L), puis Pa = m_liq × g.',
        questionType: 'numeric',
        correctAnswer: String(pa),
        unit: 'N',
        explanationFinal: `m_liq = ${rho} × ${vL} = ${Number((rho * vL).toFixed(2))} kg, donc Pa = ${pa} N.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la masse de liquide déplacé',
            explanation: `m_liq = ρ × V = ${rho} × ${vL} kg.`,
            mathExpression: `m_liq = ${rho} × ${vL} | m_liq = ${Number((rho * vL).toFixed(2))} kg`,
          },
          {
            stepNumber: 2,
            title: 'Calculer Pa = m_liq × g',
            explanation: `Pa = ${Number((rho * vL).toFixed(2))} × 10 = ${pa} N.`,
            mathExpression: `Pa = ${pa} N`,
            subResult: `${pa} N`,
          },
        ],
      });
    }
    const pObj = randInt(15, 45);
    const volL = randInt(2, 6);
    const paMax = volL * 10; // eau g=10
    const flotte = paMax > pObj;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Flottaison d’une bille d’okoumé',
      prompt: `Un bloc de bois pèse P = ${pObj} N pour un volume total V = ${volL} L. On le plonge dans l’eau douce (ρ = 1 kg/L, g = 10 N/kg).\nL’objet flotte-t-il ou coule-t-il ? (Comparer P et Pa_max = ${paMax} N)`,
      hint: `Compare P = ${pObj} N à la poussée maximale si tout le volume était immergé (Pa_max = ${paMax} N).`,
      questionType: 'qcm',
      options: ['Il flotte (Pa_max > P)', 'Il coule au fond (P > Pa_max)', 'Il reste exactement entre deux eaux (P = Pa_max)'],
      correctAnswer:
        paMax > pObj
          ? 'Il flotte (Pa_max > P)'
          : paMax < pObj
          ? 'Il coule au fond (P > Pa_max)'
          : 'Il reste exactement entre deux eaux (P = Pa_max)',
      explanationFinal: flotte
        ? `Pa_max = ${paMax} N > P = ${pObj} N : la poussée d’Archimède l’emporte, donc le bloc flotte !`
        : paMax < pObj
        ? `P = ${pObj} N > Pa_max = ${paMax} N : le poids l’emporte, donc le bloc coule.`
        : `P = Pa_max = ${pObj} N : équilibre indifférent entre deux eaux.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer Pa maximal si immersion totale',
          explanation: `Pa_max = ρ × V × g = 1 × ${volL} × 10 = ${paMax} N.`,
          mathExpression: `Pa_max = 1 × ${volL} × 10 | Pa_max = ${paMax} N`,
        },
        {
          stepNumber: 2,
          title: 'Comparer P et Pa_max',
          explanation: `P = ${pObj} N et Pa_max = ${paMax} N.`,
          mathExpression: `${pObj} N vs ${paMax} N`,
          subResult: flotte ? 'Flotte' : paMax < pObj ? 'Coule' : 'Entre deux eaux',
        },
      ],
    });
  }

  // 3. TRAVAIL & PUISSANCE MÉCANIQUE
  if (chapterId === 'phys3-travail-puissance') {
    if (difficulty === 1) {
      const f = randInt(20, 120);
      const d = randInt(4, 15);
      const w = f * d;
      return makeResult3(chapterId, difficulty, {
        title: 'Calcul du travail d’une force colinéaire W = F × d',
        prompt: `Un manœuvre pousse un chariot avec une force constante horizontale F = ${f} N sur une distance d = ${d} m.\nCalculer le travail W effectué par cette force (en J).`,
        hint: 'W = F × d avec F en newtons et d en mètres.',
        questionType: 'numeric',
        correctAnswer: String(w),
        unit: 'J',
        explanationFinal: `W = ${f} × ${d} = ${w} J.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer W = F × d',
            explanation: `${f} × ${d} = ${w} J.`,
            mathExpression: `W = F × d | W = ${f} × ${d} | W = ${w} J`,
            subResult: `${w} J`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const m = randInt(15, 60);
      const h = randInt(3, 12);
      const w = m * 10 * h;
      return makeResult3(chapterId, difficulty, {
        title: 'Travail du poids lors d’un levage W = m × g × h',
        prompt: `Une grue au port d’Owendo soulève verticalement une charge de masse m = ${m} kg sur une hauteur h = ${h} m (g = 10 N/kg).\nCalculer le travail résistant du poids (en valeur absolue, en J).`,
        hint: 'Calculer P = m × g puis W = P × h.',
        questionType: 'numeric',
        correctAnswer: String(w),
        unit: 'J',
        explanationFinal: `P = ${m * 10} N, donc W = ${m * 10} × ${h} = ${w} J.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer le poids P = m × g',
            explanation: `P = ${m} × 10 = ${m * 10} N.`,
            mathExpression: `P = ${m} × 10 = ${m * 10} N`,
          },
          {
            stepNumber: 2,
            title: 'Calculer W = P × h',
            explanation: `W = ${m * 10} × ${h} = ${w} J.`,
            mathExpression: `W = ${m * 10} × ${h} | W = ${w} J`,
            subResult: `${w} J`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const p = randInt(3, 15) * 100;
      const tMin = randInt(2, 5);
      const tSec = tMin * 60;
      const w = p * tSec;
      const f = pickRandom([50, 100, 200]);
      const pCalc = randInt(4, 12) * 50;
      const wInput = pCalc * 60;
      const pAns = pCalc;
      return makeResult3(chapterId, difficulty, {
        title: 'Puissance mécanique P = W ÷ t (Conversion minutes ➔ secondes)',
        prompt: `Un treuil fournit un travail W = ${wInput} J en t = 1 minute.\nCalculer sa puissance mécanique P (en W).`,
        hint: 'Attention ! Convertir 1 minute = 60 secondes avant de calculer P = W ÷ t.',
        questionType: 'numeric',
        correctAnswer: String(pAns),
        unit: 'W',
        explanationFinal: `t = 60 s donc P = ${wInput} ÷ 60 = ${pAns} W (rappel : ${w} J pour ${f} N).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir le temps en secondes',
            explanation: '1 min = 60 s.',
            mathExpression: `t = 1 min | t = 60 s`,
          },
          {
            stepNumber: 2,
            title: 'Calculer P = W ÷ t',
            explanation: `${wInput} ÷ 60 = ${pAns} W.`,
            mathExpression: `P = ${wInput} ÷ 60 | P = ${pAns} W`,
            subResult: `${pAns} W`,
          },
        ],
      });
    }
    const f = randInt(4, 15) * 100;
    const vKmh = pickRandom([36, 54, 72, 90]);
    const vMs = vKmh / 3.6;
    const pKw = (f * vMs) / 1000;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC Transgabonais : Puissance P = F × v en kW',
      prompt: `Une locomotive du Transgabonais tire un train avec une force motrice constante F = ${f} N à vitesse constante v = ${vKmh} km/h.\nCalculer la puissance développée P en kilowatts (kW).`,
      hint: `Convertis d’abord v = ${vKmh} km/h en m/s (diviser par 3,6), calcule P = F × v en watts, puis divise par 1 000.`,
      questionType: 'numeric',
      correctAnswer: String(pKw),
      unit: 'kW',
      explanationFinal: `v = ${vMs} m/s ; P = ${f} × ${vMs} = ${f * vMs} W = ${pKw} kW.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Convertir km/h en m/s',
          explanation: `${vKmh} ÷ 3,6 = ${vMs} m/s.`,
          mathExpression: `v = ${vKmh} ÷ 3,6 | v = ${vMs} m/s`,
        },
        {
          stepNumber: 2,
          title: 'Calculer P = F × v puis convertir en kW',
          explanation: `P = ${f} × ${vMs} = ${f * vMs} W = ${pKw} kW.`,
          mathExpression: `P = ${f} × ${vMs} = ${f * vMs} W | P = ${pKw} kW`,
          subResult: `${pKw} kW`,
        },
      ],
    });
  }

  // 4. ÉNERGIE MÉCANIQUE
  if (chapterId === 'phys3-energie-mecanique') {
    if (difficulty === 1) {
      const m = randInt(2, 10) * 2;
      const v = randInt(3, 12);
      const ec = 0.5 * m * v * v;
      return makeResult3(chapterId, difficulty, {
        title: 'Énergie cinétique Ec = ½ × m × v²',
        prompt: `Un chariot de masse m = ${m} kg roule à la vitesse v = ${v} m/s.\nCalculer son énergie cinétique Ec (en J).`,
        hint: 'Attention au carré sur la vitesse : Ec = 0,5 × m × v².',
        questionType: 'numeric',
        correctAnswer: String(ec),
        unit: 'J',
        explanationFinal: `Ec = 0,5 × ${m} × ${v}² = 0,5 × ${m} × ${v * v} = ${ec} J.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Élever la vitesse au carré et multiplier par ½ m',
            explanation: `${v}² = ${v * v}, donc Ec = 0,5 × ${m} × ${v * v} = ${ec} J.`,
            mathExpression: `Ec = 0,5 × ${m} × ${v}² | Ec = ${ec} J`,
            subResult: `${ec} J`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const m = randInt(5, 30);
      const h = randInt(4, 15);
      const ep = m * 10 * h;
      return makeResult3(chapterId, difficulty, {
        title: 'Énergie potentielle de pesanteur Ep = m × g × h',
        prompt: `Une masse d’eau m = ${m} kg se trouve en haut d’une chute de Poubara à une hauteur h = ${h} m (g = 10 N/kg).\nCalculer son énergie potentielle Ep (en J).`,
        hint: 'Ep = m × g × h.',
        questionType: 'numeric',
        correctAnswer: String(ep),
        unit: 'J',
        explanationFinal: `Ep = ${m} × 10 × ${h} = ${ep} J.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer Ep = m × g × h',
            explanation: `${m} × 10 × ${h} = ${ep} J.`,
            mathExpression: `Ep = ${m} × 10 × ${h} | Ep = ${ep} J`,
            subResult: `${ep} J`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const m = 4;
      const v = randInt(3, 8) * 2;
      const h = randInt(5, 14);
      const ec = 0.5 * m * v * v;
      const ep = m * 10 * h;
      const em = ec + ep;
      return makeResult3(chapterId, difficulty, {
        title: 'Énergie mécanique totale Em = Ec + Ep',
        prompt: `Un ballon de masse m = ${m} kg est à une hauteur h = ${h} m avec une vitesse v = ${v} m/s (g = 10 N/kg).\nCalculer son énergie mécanique Em (en J).`,
        hint: 'Calcule Ec = ½ m v² et Ep = m g h séparément puis additionne-les.',
        questionType: 'numeric',
        correctAnswer: String(em),
        unit: 'J',
        explanationFinal: `Ec = ${ec} J et Ep = ${ep} J, soit Em = ${em} J.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer Ec',
            explanation: `Ec = 0,5 × ${m} × ${v}² = ${ec} J.`,
            mathExpression: `Ec = ${ec} J`,
          },
          {
            stepNumber: 2,
            title: 'Calculer Ep et additionner',
            explanation: `Ep = ${m} × 10 × ${h} = ${ep} J, Em = ${ec} + ${ep} = ${em} J.`,
            mathExpression: `Em = ${ec} + ${ep} | Em = ${em} J`,
            subResult: `${em} J`,
          },
        ],
      });
    }
    const h = pickRandom([5, 20, 45, 80]);
    const vSol = Math.sqrt(2 * 10 * h);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Conservation de l’énergie mécanique (chute libre)',
      prompt: `Une mangue tombe sans vitesse initiale d’une branche située à h = ${h} m du sol (sans frottements, g = 10 N/kg).\nEn utilisant la conservation Em_haut = Em_bas, calculer sa vitesse v (en m/s) juste avant de toucher le sol.`,
      hint: `m × g × h = ½ × m × v² ➔ v² = 2 × g × h = ${2 * 10 * h}.`,
      questionType: 'numeric',
      correctAnswer: String(vSol),
      unit: 'm/s',
      explanationFinal: `v² = 2 × 10 × ${h} = ${20 * h}, donc v = √${20 * h} = ${vSol} m/s.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Écrire la conservation Em(haut) = Em(bas)',
          explanation: 'Toute l’énergie potentielle devient énergie cinétique au sol.',
          mathExpression: `m·g·h = ½·m·v² | v² = 2·g·h`,
        },
        {
          stepNumber: 2,
          title: 'Calculer v',
          explanation: `v² = 2 × 10 × ${h} = ${20 * h}, d’où v = ${vSol} m/s.`,
          mathExpression: `v = √${20 * h} | v = ${vSol} m/s`,
          subResult: `${vSol} m/s`,
        },
      ],
    });
  }

  // 5. CONDUCTEURS OHMIQUES & ASSOCIATIONS
  if (chapterId === 'phys3-conducteurs-ohmiques') {
    if (difficulty === 1) {
      const r1 = randInt(10, 100);
      const r2 = randInt(15, 120);
      const req = r1 + r2;
      return makeResult3(chapterId, difficulty, {
        title: 'Résistance équivalente en série : Req = R₁ + R₂',
        prompt: `On branche deux résistors R₁ = ${r1} Ω et R₂ = ${r2} Ω en SÉRIE.\nCalculer la résistance équivalente Req (en Ω).`,
        hint: 'En série, les résistances s’additionnent.',
        questionType: 'numeric',
        correctAnswer: String(req),
        unit: 'Ω',
        explanationFinal: `Req = ${r1} + ${r2} = ${req} Ω.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Additionner les résistances',
            explanation: `${r1} + ${r2} = ${req} Ω.`,
            mathExpression: `Req = R₁ + R₂ | Req = ${r1} + ${r2} | Req = ${req} Ω`,
            subResult: `${req} Ω`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const pairs = [
        [20, 20, 10],
        [30, 60, 20],
        [40, 40, 20],
        [60, 120, 40],
        [100, 100, 50],
        [15, 30, 10],
      ];
      const [r1, r2, req] = pairs[(randInt(0, pairs.length - 1) + variantIndex) % pairs.length];
      return makeResult3(chapterId, difficulty, {
        title: 'Résistance équivalente en dérivation : (R₁×R₂)/(R₁+R₂)',
        prompt: `On associe deux résistors R₁ = ${r1} Ω et R₂ = ${r2} Ω en DÉRIVATION (parallèle).\nCalculer la résistance équivalente Req (en Ω).`,
        hint: 'En dérivation : Req = (R₁ × R₂) ÷ (R₁ + R₂).',
        questionType: 'numeric',
        correctAnswer: String(req),
        unit: 'Ω',
        explanationFinal: `Req = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${r1 * r2} ÷ ${r1 + r2} = ${req} Ω.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la formule produit sur somme',
            explanation: `Req = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${req} Ω.`,
            mathExpression: `Req = (${r1} × ${r2}) ÷ (${r1} + ${r2}) | Req = ${req} Ω`,
            subResult: `${req} Ω`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const r1 = pickRandom([100, 200, 300]);
      const r2 = r1;
      const u = pickRandom([6, 9, 12, 24]);
      const u2 = (u * r2) / (r1 + r2);
      return makeResult3(chapterId, difficulty, {
        title: 'Pont diviseur de tension : U₂ = U × R₂ / (R₁ + R₂)',
        prompt: `Un générateur de tension U = ${u} V alimente R₁ = ${r1} Ω et R₂ = ${r2} Ω montés en série.\nCalculer la tension U₂ aux bornes de R₂ (en V).`,
        hint: 'En série, U₂ = U × R₂ ÷ (R₁ + R₂).',
        questionType: 'numeric',
        correctAnswer: String(u2),
        unit: 'V',
        explanationFinal: `U₂ = ${u} × ${r2} ÷ (${r1} + ${r2}) = ${u2} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer I ou utiliser le pont diviseur',
            explanation: `Req = ${r1 + r2} Ω, donc U₂ = ${u} ÷ 2 = ${u2} V.`,
            mathExpression: `U₂ = ${u} × ${r2} ÷ ${r1 + r2} | U₂ = ${u2} V`,
            subResult: `${u2} V`,
          },
        ],
      });
    }
    const r1 = 30;
    const r2 = 60;
    const r3 = randInt(10, 40);
    const rPar = 20;
    const rTot = rPar + r3;
    const u = rTot * 0.5;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Association mixte et intensité principale',
      prompt: `Deux résistors R₁ = ${r1} Ω et R₂ = ${r2} Ω sont montés en dérivation, et l’ensemble est placé en série avec R₃ = ${r3} Ω sous une tension U = ${u} V.\nCalculer la résistance équivalente totale Req (en Ω) du montage.`,
      hint: 'Calcule d’abord R₁₂ en dérivation, puis ajoute R₃ en série.',
      questionType: 'numeric',
      correctAnswer: String(rTot),
      unit: 'Ω',
      explanationFinal: `R₁₂ = (30×60)/(30+60) = 20 Ω, donc Req = 20 + ${r3} = ${rTot} Ω.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Réduire la branche parallèle R₁ // R₂',
          explanation: 'R₁₂ = (30 × 60) ÷ (30 + 60) = 20 Ω.',
          mathExpression: `R₁₂ = 1 800 ÷ 90 | R₁₂ = 20 Ω`,
        },
        {
          stepNumber: 2,
          title: 'Ajouter R₃ en série',
          explanation: `Req = 20 + ${r3} = ${rTot} Ω (et I = U/Req = ${u}/${rTot} = 0,5 A).`,
          mathExpression: `Req = 20 + ${r3} | Req = ${rTot} Ω`,
          subResult: `${rTot} Ω`,
        },
      ],
    });
  }

  // 6. ÉNERGIE & PUISSANCE ÉLECTRIQUE (SEEG)
  if (chapterId === 'phys3-energie-puissance-seeg') {
    if (difficulty === 1) {
      const u = 220;
      const i = randInt(2, 10);
      const p = u * i;
      return makeResult3(chapterId, difficulty, {
        title: 'Puissance électrique P = U × I (Réseau 220 V SEEG)',
        prompt: `Un fer à repasser branché sur le secteur SEEG (U = ${u} V) est parcouru par un courant I = ${i} A.\nCalculer sa puissance électrique P (en W).`,
        hint: 'En courant continu ou appareil résistif, P = U × I.',
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'W',
        explanationFinal: `P = 220 × ${i} = ${p} W.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer P = U × I',
            explanation: `220 × ${i} = ${p} W.`,
            mathExpression: `P = 220 × ${i} | P = ${p} W`,
            subResult: `${p} W`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const r = pickRandom([10, 20, 25, 40, 50]);
      const i = randInt(2, 5);
      const p = r * i * i;
      return makeResult3(chapterId, difficulty, {
        title: 'Effet Joule : Puissance thermique P = R × I²',
        prompt: `Une résistance chauffante R = ${r} Ω est traversée par un courant d’intensité I = ${i} A.\nCalculer la puissance dissipée par effet Joule (en W).`,
        hint: 'Attention au carré sur I : P = R × I².',
        questionType: 'numeric',
        correctAnswer: String(p),
        unit: 'W',
        explanationFinal: `P = ${r} × ${i}² = ${r} × ${i * i} = ${p} W.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi de Joule P = R × I²',
            explanation: `${r} × (${i} × ${i}) = ${p} W.`,
            mathExpression: `P = ${r} × ${i}² | P = ${p} W`,
            subResult: `${p} W`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const pKw = pickRandom([1.5, 2, 2.5, 3]);
      const h = randInt(2, 6);
      const eKwh = pKw * h;
      const tarif = 110;
      const cout = eKwh * tarif;
      return makeResult3(chapterId, difficulty, {
        title: 'Énergie en kWh et coût SEEG (F CFA)',
        prompt: `Un climatiseur à Libreville de puissance P = ${pKw} kW fonctionne pendant t = ${h} heures.\nCalculer le coût en F CFA au tarif de ${tarif} F CFA/kWh.`,
        hint: 'Calcule E (kWh) = P (kW) × t (h), puis multiplie par 110 F CFA.',
        questionType: 'numeric',
        correctAnswer: String(cout),
        unit: 'F CFA',
        explanationFinal: `E = ${pKw} × ${h} = ${eKwh} kWh ; Coût = ${eKwh} × 110 = ${cout} F CFA.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer l’énergie consommée E en kWh',
            explanation: `E = ${pKw} × ${h} = ${eKwh} kWh.`,
            mathExpression: `E = ${pKw} × ${h} | E = ${eKwh} kWh`,
          },
          {
            stepNumber: 2,
            title: 'Multiplier par le tarif SEEG',
            explanation: `${eKwh} × ${tarif} = ${cout} F CFA.`,
            mathExpression: `Coût = ${eKwh} × ${tarif} | = ${cout} F CFA`,
            subResult: `${cout} F CFA`,
          },
        ],
      });
    }
    const c = 4; // Wh/tr
    const n = randInt(25, 100) * 5;
    const eWh = c * n;
    const eKwh = eWh / 1000;
    const tarif = 100;
    const cout = eKwh * tarif;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Compteur SEEG à disque (C = 4 Wh/tr)',
      prompt: `Le disque d’un compteur SEEG (constante C = ${c} Wh/tour) effectue n = ${n} tours durant une soirée.\nCalculer l’énergie consommée en kWh, puis le coût au tarif simplifié de ${tarif} F CFA/kWh.`,
      hint: `E (Wh) = n × C = ${n} × 4, divise par 1 000 pour avoir des kWh, puis multiplie par 100 F CFA.`,
      questionType: 'numeric',
      correctAnswer: String(cout),
      unit: 'F CFA',
      explanationFinal: `E = ${n} × 4 = ${eWh} Wh = ${eKwh} kWh ; Coût = ${cout} F CFA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer E en Wh puis en kWh',
          explanation: `E = ${n} × 4 = ${eWh} Wh = ${eKwh} kWh.`,
          mathExpression: `E = ${n} × 4 = ${eWh} Wh | E = ${eKwh} kWh`,
        },
        {
          stepNumber: 2,
          title: 'Calculer la facture en F CFA',
          explanation: `${eKwh} × ${tarif} = ${cout} F CFA.`,
          mathExpression: `Coût = ${eKwh} × ${tarif} | = ${cout} F CFA`,
          subResult: `${cout} F CFA`,
        },
      ],
    });
  }

  // 7. TRANSFORMATEUR & ÉLECTRONIQUE
  if (chapterId === 'phys3-transformateur-electronique') {
    if (difficulty === 1) {
      const up = 220;
      const kDiv = pickRandom([10, 20, 22, 44]);
      const us = Number((up / kDiv).toFixed(1));
      return makeResult3(chapterId, difficulty, {
        title: 'Rapport de transformation Us / Up = Ns / Np',
        prompt: `Un transformateur abaisseur de chargeur est alimenté par Uₚ = 220 V. Son rapport de transformation est k = Ns / Np = 1/${kDiv}.\nCalculer la tension secondaire Us (en V).`,
        hint: `Us = Uₚ × (Ns / Np) = 220 ÷ ${kDiv}.`,
        questionType: 'numeric',
        correctAnswer: String(us),
        unit: 'V',
        explanationFinal: `Us = 220 ÷ ${kDiv} = ${us} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer Us = k × Up',
            explanation: `Us = 220 ÷ ${kDiv} = ${us} V.`,
            mathExpression: `Us = 220 × (1/${kDiv}) | Us = ${us} V`,
            subResult: `${us} V`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const sens = randFloat() > 0.5;
      return makeResult3(chapterId, difficulty, {
        title: 'Polarisation d’une diode (Passante ou Bloquée)',
        prompt: `On branche une diode idéale en série avec une lampe et une pile. Le courant arrive par la ${sens ? 'borne A (anode, côté triangle)' : 'borne K (cathode, côté barre)'}.\nDans quel état est la diode ?`,
        hint: 'La flèche du symbole de la diode (A ➔ K) indique le seul sens de passage du courant.',
        questionType: 'qcm',
        options: ['Passante (la lampe brille)', 'Bloquée (la lampe reste éteinte)'],
        correctAnswer: sens ? 'Passante (la lampe brille)' : 'Bloquée (la lampe reste éteinte)',
        explanationFinal: sens
          ? 'Le courant entre par l’anode A (sens direct) : la diode est passante.'
          : 'Le courant tente d’entrer par la cathode K (sens inverse) : la diode est bloquée.',
        steps: [
          {
            stepNumber: 1,
            title: 'Repérer A (anode) et K (cathode)',
            explanation: 'Le courant circule uniquement de A vers K.',
            mathExpression: sens ? 'I : A ➔ K (Passante)' : 'I bloqué sur K (Bloquée)',
          },
        ],
      });
    }
    if (difficulty === 3) {
      const np = 2000;
      const ns = pickRandom([100, 200, 400, 500]);
      const up = 220;
      const us = (up * ns) / np;
      return makeResult3(chapterId, difficulty, {
        title: 'Calcul de Us à partir du nombre de spires Np et Ns',
        prompt: `Un transformateur possède Nₚ = ${np} spires au primaire (Uₚ = 220 V) et Ns = ${ns} spires au secondaire.\nCalculer la tension secondaire Us (en V).`,
        hint: 'Us = Uₚ × (Ns ÷ Nₚ).',
        questionType: 'numeric',
        correctAnswer: String(us),
        unit: 'V',
        explanationFinal: `Us = 220 × (${ns} ÷ ${np}) = ${us} V.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer le rapport k = Ns ÷ Np',
            explanation: `k = ${ns} ÷ ${np} = ${ns / np}.`,
            mathExpression: `k = ${ns} ÷ ${np} | k = ${ns / np}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer Us = k × Up',
            explanation: `Us = ${ns / np} × 220 = ${us} V.`,
            mathExpression: `Us = ${ns / np} × 220 | Us = ${us} V`,
            subResult: `${us} V`,
          },
        ],
      });
    }
    const ib = randInt(2, 8);
    const beta = pickRandom([80, 100, 120, 150]);
    const ic = ib * beta;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi Électronique : Gain en courant du transistor Ic = β × Ib',
      prompt: `Un transistor NPN utilisé comme amplificateur a un gain en courant β = ${beta}. Le courant de base vaut Ib = ${ib} mA.\nCalculer le courant de collecteur Ic (en mA).`,
      hint: 'En régime linéaire, Ic = β × Ib.',
      questionType: 'numeric',
      correctAnswer: String(ic),
      unit: 'mA',
      explanationFinal: `Ic = ${beta} × ${ib} = ${ic} mA.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer Ic = β × Ib',
          explanation: `${beta} × ${ib} = ${ic} mA.`,
          mathExpression: `Ic = ${beta} × ${ib} | Ic = ${ic} mA`,
          subResult: `${ic} mA`,
        },
      ],
    });
  }

  // 8. LENTILLES & CONSTRUCTION D'IMAGES
  if (chapterId === 'phys3-lentilles-construction') {
    if (difficulty === 1) {
      const fCm = pickRandom([10, 20, 25, 50]);
      const fM = fCm / 100;
      const c = 1 / fM;
      return makeResult3(chapterId, difficulty, {
        title: 'Vergence d’une lentille convergente C = 1 / f',
        prompt: `Une lentille convergente a une distance focale f = ${fCm} cm.\nCalculer sa vergence C en dioptries (δ).`,
        hint: 'Convertis d’abord f en mètres (f = cm ÷ 100), puis calcule C = 1 ÷ f.',
        questionType: 'numeric',
        correctAnswer: String(c),
        unit: 'δ',
        explanationFinal: `f = ${fM} m, donc C = 1 ÷ ${fM} = ${c} δ.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Convertir f en mètres et appliquer C = 1/f',
            explanation: `${fCm} cm = ${fM} m ; C = 1 ÷ ${fM} = ${c} δ.`,
            mathExpression: `f = ${fM} m | C = 1 ÷ ${fM} = ${c} δ`,
            subResult: `${c} δ`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const oa = randInt(15, 45);
      const oaPrime = oa * pickRandom([2, 3]);
      const gamma = oaPrime / oa;
      const ab = randInt(2, 5);
      const aPrimeBPrime = ab * gamma;
      return makeResult3(chapterId, difficulty, {
        title: 'Grandissement γ = OA’ / OA = A’B’ / AB',
        prompt: `Un objet AB de hauteur ${ab} cm est placé à OA = ${oa} cm d’une lentille. Son image nette se forme sur un écran à OA’ = ${oaPrime} cm.\nCalculer la hauteur A’B’ de l’image (en cm).`,
        hint: 'Calculer γ = OA’ ÷ OA, puis A’B’ = γ × AB.',
        questionType: 'numeric',
        correctAnswer: String(aPrimeBPrime),
        unit: 'cm',
        explanationFinal: `γ = ${oaPrime} ÷ ${oa} = ${gamma}, donc A’B’ = ${gamma} × ${ab} = ${aPrimeBPrime} cm.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer le grandissement γ',
            explanation: `γ = ${oaPrime} ÷ ${oa} = ${gamma}.`,
            mathExpression: `γ = ${oaPrime} ÷ ${oa} | γ = ${gamma}`,
          },
          {
            stepNumber: 2,
            title: 'Calculer A’B’ = γ × AB',
            explanation: `${gamma} × ${ab} = ${aPrimeBPrime} cm.`,
            mathExpression: `A’B’ = ${gamma} × ${ab} | = ${aPrimeBPrime} cm`,
            subResult: `${aPrimeBPrime} cm`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const cas = pickRandom([
        { label: 'OA > 2f (ex: f = 10 cm, OA = 30 cm)', ans: 'Réelle, renversée et plus petite que AB' },
        { label: 'f < OA < 2f (ex: f = 10 cm, OA = 15 cm)', ans: 'Réelle, renversée et plus grande que AB' },
        { label: 'OA < f (ex: f = 10 cm, OA = 6 cm)', ans: 'Virtuelle, droite et plus grande (mode loupe)' },
      ]);
      return makeResult3(chapterId, difficulty, {
        title: 'Nature et position de l’image selon OA et f',
        prompt: `Un objet AB est placé devant une lentille convergente dans le cas : ${cas.label}.\nQuelle est la nature de l’image A’B’ ?`,
        hint: 'Si OA > f, l’image est réelle et renversée ; si OA < f, elle est virtuelle et droite (loupe).',
        questionType: 'qcm',
        options: [
          'Réelle, renversée et plus petite que AB',
          'Réelle, renversée et plus grande que AB',
          'Virtuelle, droite et plus grande (mode loupe)',
        ],
        correctAnswer: cas.ans,
        explanationFinal: `Dans le cas ${cas.label}, l’image est : ${cas.ans}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Comparer OA à f et 2f',
            explanation: cas.label,
            mathExpression: `${cas.label} | ➔ ${cas.ans}`,
          },
        ],
      });
    }
    const c1 = pickRandom([4, 5, 8]);
    const c2 = pickRandom([1, 2, -2]);
    const cTot = c1 + c2;
    const fTotCm = Number((100 / cTot).toFixed(1));
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Association de deux lentilles accolées',
      prompt: `On accole deux lentilles minces de vergences C₁ = +${c1} δ et C₂ = ${c2 > 0 ? `+${c2}` : c2} δ.\nCalculer la distance focale f_tot (en cm) du système équivalent.`,
      hint: 'Théorème des vergences accolées : C_tot = C₁ + C₂, puis f (en m) = 1 ÷ C_tot (× 100 pour avoir des cm).',
      questionType: 'numeric',
      correctAnswer: String(fTotCm),
      unit: 'cm',
      explanationFinal: `C_tot = ${c1} + (${c2}) = ${cTot} δ, donc f = 100 ÷ ${cTot} = ${fTotCm} cm.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Additionner les vergences',
          explanation: `C_tot = ${c1} + (${c2}) = ${cTot} δ.`,
          mathExpression: `C_tot = ${c1} + (${c2}) | C_tot = ${cTot} δ`,
        },
        {
          stepNumber: 2,
          title: 'Calculer f = 1 / C_tot en cm',
          explanation: `f = 1 / ${cTot} m = ${fTotCm} cm.`,
          mathExpression: `f = 100 ÷ ${cTot} | f = ${fTotCm} cm`,
          subResult: `${fTotCm} cm`,
        },
      ],
    });
  }

  // 9. L'ŒIL & INSTRUMENTS D'OPTIQUE
  if (chapterId === 'phys3-oeil-instruments') {
    if (difficulty === 1) {
      const def = randFloat() > 0.5;
      return makeResult3(chapterId, difficulty, {
        title: 'Anatomie de l’œil réduit et défauts de vision',
        prompt: def
          ? 'Un élève voit très bien son cahier de près mais voit flou le tableau au fond de la classe. De quel défaut souffre-t-il et quelle lentille le corrige ?'
          : 'Une grand-mère voit bien les bateaux au loin mais doit tendre le bras pour lire son journal. Quel est son défaut visuel ?',
        hint: 'Myope = trop convergent (corrige par divergente) ; Hypermétrope = pas assez convergent (corrige par convergente).',
        questionType: 'qcm',
        options: [
          'Myopie (corrigée par lentille divergente)',
          'Hypermétropie (corrigée par lentille convergente)',
          'Vision normale (aucune lentille)',
        ],
        correctAnswer: def
          ? 'Myopie (corrigée par lentille divergente)'
          : 'Hypermétropie (corrigée par lentille convergente)',
        explanationFinal: def
          ? 'Flou de loin = œil trop convergent = Myopie (lentille divergente).'
          : 'Flou de près = œil pas assez convergent = Hypermétropie (lentille convergente).',
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier le défaut',
            explanation: def ? 'Image formée avant la rétine.' : 'Image formée derrière la rétine.',
            mathExpression: def ? 'Myopie ➔ Lentille divergente (−)' : 'Hypermétropie ➔ Lentille convergente (+)',
          },
        ],
      });
    }
    if (difficulty === 2) {
      const c = pickRandom([10, 20, 25, 40]);
      const g = c / 4;
      return makeResult3(chapterId, difficulty, {
        title: 'Grossissement commercial d’une loupe G = C / 4',
        prompt: `Un horloger à Libreville utilise une loupe convergente de vergence C = ${c} δ.\nCalculer son grossissement commercial G = C ÷ 4.`,
        hint: 'Formule directe : G = C ÷ 4 (ou 0,25 ÷ f).',
        questionType: 'numeric',
        correctAnswer: String(g),
        unit: '×',
        explanationFinal: `G = ${c} ÷ 4 = ${g} (image vue ${g} fois plus grosse).`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer G = C ÷ 4',
            explanation: `${c} ÷ 4 = ${g}.`,
            mathExpression: `G = C ÷ 4 | G = ${c} ÷ 4 | G = ×${g}`,
            subResult: `×${g}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const fCm = pickRandom([5, 10, 12.5]);
      const c = 100 / fCm;
      const g = c / 4;
      return makeResult3(chapterId, difficulty, {
        title: 'Loupe : passer de f (en cm) au grossissement G',
        prompt: `Une loupe a une distance focale f = ${fCm} cm.\nCalculer sa vergence C puis son grossissement commercial G.`,
        hint: 'C = 1 ÷ f(m), puis G = C ÷ 4.',
        questionType: 'numeric',
        correctAnswer: String(g),
        unit: '×',
        explanationFinal: `C = 100 ÷ ${fCm} = ${c} δ, donc G = ${c} ÷ 4 = ${g}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Calculer la vergence C',
            explanation: `C = 100 ÷ ${fCm} = ${c} δ.`,
            mathExpression: `C = 100 ÷ ${fCm} = ${c} δ`,
          },
          {
            stepNumber: 2,
            title: 'Calculer G = C ÷ 4',
            explanation: `${c} ÷ 4 = ${g}.`,
            mathExpression: `G = ${c} ÷ 4 | G = ×${g}`,
            subResult: `×${g}`,
          },
        ],
      });
    }
    const cOeil = 60;
    const cCorr = pickRandom([-2, -4, 2, 3]);
    const cTot = cOeil + cCorr;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Vergence totale œil + verre correcteur',
      prompt: `L’œil réduit d’un patient a une vergence de base C_œil = ${cOeil} δ. Il porte un verre correcteur de vergence C_verre = ${cCorr > 0 ? `+${cCorr}` : cCorr} δ.\nCalculer la vergence totale C_tot (en δ) de l’œil corrigé.`,
      hint: 'Additionner algébriquement C_œil + C_verre.',
      questionType: 'numeric',
      correctAnswer: String(cTot),
      unit: 'δ',
      explanationFinal: `C_tot = ${cOeil} + (${cCorr}) = ${cTot} δ.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Additionner les vergences accolées',
          explanation: `C_tot = ${cOeil} + (${cCorr}) = ${cTot} δ.`,
          mathExpression: `C_tot = ${cOeil} + (${cCorr}) | C_tot = ${cTot} δ`,
          subResult: `${cTot} δ`,
        },
      ],
    });
  }

  // 10. MÉTAUX & OXYDATION
  if (chapterId === 'phys3-metaux-oxydation') {
    if (difficulty === 1) {
      const m = pickRandom([
        { q: 'Quel métal est rougeâtre, très bon conducteur et utilisé dans les câbles SEEG ?', a: 'Le Cuivre (Cu)' },
        { q: 'Quel métal gris léger ne rouille pas (couche d’alumine protectrice) et sert aux toitures et câbles HT ?', a: 'L’Aluminium (Al)' },
        { q: 'Quel métal est attiré par un aimant et rouille à l’air humide en formant Fe₂O₃ ?', a: 'Le Fer (Fe)' },
      ]);
      return makeResult3(chapterId, difficulty, {
        title: 'Reconnaissance des métaux usuels',
        prompt: m.q,
        hint: 'Pense à la couleur, à l’aimant et à la corrosion.',
        questionType: 'qcm',
        options: ['Le Cuivre (Cu)', 'L’Aluminium (Al)', 'Le Fer (Fe)', 'Le Zinc (Zn)'],
        correctAnswer: m.a,
        explanationFinal: `Bonne réponse : ${m.a}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Propriété caractéristique du métal',
            explanation: m.a,
            mathExpression: `Métal identifié = ${m.a}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      return makeResult3(chapterId, difficulty, {
        title: 'Équation-bilan de la formation de la rouille (Fe₂O₃)',
        prompt: 'Compléter les coefficients stœchiométriques de l’oxydation lente du fer à l’air humide :\n... Fe + ... O₂ ➔ ... Fe₂O₃',
        hint: 'Il faut 2 × 3 = 6 atomes d’oxygène à droite et à gauche.',
        questionType: 'qcm',
        options: ['4 Fe + 3 O₂ ➔ 2 Fe₂O₃', '2 Fe + 3 O₂ ➔ Fe₂O₃', '3 Fe + 2 O₂ ➔ Fe₃O₄'],
        correctAnswer: '4 Fe + 3 O₂ ➔ 2 Fe₂O₃',
        explanationFinal: '4 atomes de Fe et 6 atomes de O de chaque côté : 4 Fe + 3 O₂ ➔ 2 Fe₂O₃.',
        steps: [
          {
            stepNumber: 1,
            title: 'Équilibrer les atomes de O puis de Fe',
            explanation: '3 O₂ donne 6 O ; 2 Fe₂O₃ donne 6 O et 4 Fe.',
            mathExpression: `4 Fe + 3 O₂ ➔ 2 Fe₂O₃`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const nMolesFe = randInt(2, 6) * 2;
      const mFe = nMolesFe * 56;
      const mO2 = (nMolesFe * 3 / 4) * 32;
      const mOxyde = mFe + mO2;
      return makeResult3(chapterId, difficulty, {
        title: 'Conservation de la masse lors de l’oxydation du fer',
        prompt: `Une masse m(Fe) = ${mFe} g de fer réagit complètement avec m(O₂) = ${mO2} g de dioxygène pour former de l’oxyde de fer (rouille).\nSelon la loi de Lavoisier, quelle masse d’oxyde (en g) obtient-on ?`,
        hint: 'Conservation de la masse : m(produits) = m(réactifs consommés).',
        questionType: 'numeric',
        correctAnswer: String(mOxyde),
        unit: 'g',
        explanationFinal: `m(Fe₂O₃) = ${mFe} + ${mO2} = ${mOxyde} g.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Appliquer la loi de Lavoisier',
            explanation: `m(oxyde) = m(Fe) + m(O₂) = ${mFe} + ${mO2} = ${mOxyde} g.`,
            mathExpression: `m = ${mFe} + ${mO2} | m = ${mOxyde} g`,
            subResult: `${mOxyde} g`,
          },
        ],
      });
    }
    const mOxyde = pickRandom([160, 320, 480]);
    const mAl = (mOxyde / 160) * 54;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Aluminothermie (Fe₂O₃ + 2 Al ➔ 2 Fe + Al₂O₃)',
      prompt: `Dans la réaction de soudure des rails du Transgabonais : Fe₂O₃ + 2 Al ➔ 2 Fe + Al₂O₃, 160 g de Fe₂O₃ nécessitent 54 g d’aluminium.\nQuelle masse d’aluminium (en g) faut-il pour réduire ${mOxyde} g de Fe₂O₃ ?`,
      hint: `Proportionnalité directe : m(Al) = (${mOxyde} ÷ 160) × 54.`,
      questionType: 'numeric',
      correctAnswer: String(mAl),
      unit: 'g',
      explanationFinal: `Facteur = ${mOxyde / 160}, donc m(Al) = ${mOxyde / 160} × 54 = ${mAl} g.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Calculer le coefficient de proportionnalité',
          explanation: `${mOxyde} ÷ 160 = ${mOxyde / 160}.`,
          mathExpression: `k = ${mOxyde} ÷ 160 = ${mOxyde / 160}`,
        },
        {
          stepNumber: 2,
          title: 'Calculer la masse d’aluminium',
          explanation: `${mOxyde / 160} × 54 = ${mAl} g.`,
          mathExpression: `m(Al) = ${mOxyde / 160} × 54 | = ${mAl} g`,
          subResult: `${mAl} g`,
        },
      ],
    });
  }

  // 11. IONS & TESTS DE RECONNAISSANCE
  if (chapterId === 'phys3-ions-tests') {
    if (difficulty === 1) {
      const tests = [
        { q: 'Quel précipité obtient-on en versant de la soude (NaOH) dans une solution contenant des ions Cu²⁺ ?', a: 'Précipité BLEU' },
        { q: 'Quel précipité obtient-on avec la soude (NaOH) sur des ions Fe²⁺ ?', a: 'Précipité VERT' },
        { q: 'Quel précipité obtient-on avec la soude (NaOH) sur des ions Fe³⁺ ?', a: 'Précipité ROUILLE (orangé-brun)' },
        { q: 'Quel réactif et quel précipité révèlent les ions chlorure Cl⁻ ?', a: 'Nitrate d’argent ➔ Précipité BLANC qui noircit à la lumière' },
      ];
      const t = tests[(randInt(0, tests.length - 1) + variantIndex) % tests.length];
      return makeResult3(chapterId, difficulty, {
        title: 'Test d’identification des ions au laboratoire',
        prompt: t.q,
        hint: 'Cu²⁺ = bleu ; Fe²⁺ = vert ; Fe³⁺ = rouille ; Cl⁻ = blanc (AgNO₃).',
        questionType: 'qcm',
        options: [
          'Précipité BLEU',
          'Précipité VERT',
          'Précipité ROUILLE (orangé-brun)',
          'Nitrate d’argent ➔ Précipité BLANC qui noircit à la lumière',
        ],
        correctAnswer: t.a,
        explanationFinal: `Résultat officiel : ${t.a}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Identifier le précipité caractéristique',
            explanation: t.a,
            mathExpression: `Observation = ${t.a}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const z = pickRandom([
        { sym: 'Cu²⁺', name: 'cuivre II', charge: '+2', action: 'perdu 2 électrons' },
        { sym: 'Fe³⁺', name: 'fer III', charge: '+3', action: 'perdu 3 électrons' },
        { sym: 'Cl⁻', name: 'chlorure', charge: '−1', action: 'gagné 1 électron' },
        { sym: 'O²⁻', name: 'oxyde', charge: '−2', action: 'gagné 2 électrons' },
      ]);
      return makeResult3(chapterId, difficulty, {
        title: 'Formation d’un ion par perte ou gain d’électrons',
        prompt: `Comment l’ion ${z.name} (${z.sym}) se forme-t-il à partir de l’atome neutre correspondant ?`,
        hint: 'Les électrons portent une charge NÉGATIVE (−) : perdre des (−) rend POSITIF (+).',
        questionType: 'qcm',
        options: [
          `Il a ${z.action}`,
          'Il a perdu des protons dans son noyau',
          'Il a gardé exactement le même nombre d’électrons',
        ],
        correctAnswer: `Il a ${z.action}`,
        explanationFinal: `L’ion ${z.sym} (charge ${z.charge}) provient de l’atome neutre ayant ${z.action}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Relier la charge électrique aux électrons échangés',
            explanation: `Charge ${z.charge} ➔ a ${z.action}.`,
            mathExpression: `${z.sym} ➔ ${z.action}`,
          },
        ],
      });
    }
    if (difficulty === 3) {
      const z = 26;
      const eIon = 23;
      return makeResult3(chapterId, difficulty, {
        title: 'Nombre d’électrons d’un ion métallique (Z = 26 pour Fe)',
        prompt: `L’atome de fer possède Z = ${z} protons (donc ${z} électrons).\nCombien d’électrons possède l’ion fer III (Fe³⁺) ?`,
        hint: 'Fe³⁺ a perdu 3 électrons par rapport à l’atome Fe neutre.',
        questionType: 'numeric',
        correctAnswer: String(eIon),
        unit: 'électrons',
        explanationFinal: `${z} − 3 = ${eIon} électrons.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Retirer 3 électrons pour la charge 3+',
            explanation: `26 − 3 = 23 électrons (le noyau garde toujours 26 protons).`,
            mathExpression: `N(e⁻) = 26 − 3 | N(e⁻) = 23 électrons`,
            subResult: '23 électrons',
          },
        ],
      });
    }
    const c = randInt(2, 6);
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Neutralité électrique d’une solution ionique',
      prompt: `On dissout ${c} unités de chlorure de fer III (FeCl₃) dans de l’eau pure pour obtenir une solution électriquement neutre contenant ${c} ions Fe³⁺.\nCombien d’ions chlorure Cl⁻ faut-il pour respecter l’électroneutralité ?`,
      hint: 'Charge totale (+) = Charge totale (−) : chaque ion Fe³⁺ vaut +3, donc il faut 3 Cl⁻ par Fe³⁺.',
      questionType: 'numeric',
      correctAnswer: String(c * 3),
      unit: 'ions Cl⁻',
      explanationFinal: `Charge (+) = ${c} × (+3) = +${3 * c} ; il faut donc ${3 * c} ions Cl⁻ (−1 chacun).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Écrire l’équation d’électroneutralité',
          explanation: `3 × [Fe³⁺] = [Cl⁻].`,
          mathExpression: `${c} × 3 = ${c * 3} ions Cl⁻`,
          subResult: `${c * 3} ions Cl⁻`,
        },
      ],
    });
  }

  // 12. ACIDES, BASES & pH
  if (chapterId === 'phys3-acides-bases-ph') {
    if (difficulty === 1) {
      const ph = pickRandom([1.5, 2.5, 3, 7, 9, 11.5, 13]);
      const nature = ph < 7 ? 'Acide (majorité d’ions H⁺)' : ph === 7 ? 'Neutre ([H⁺] = [OH⁻])' : 'Basique (majorité d’ions OH⁻)';
      return makeResult3(chapterId, difficulty, {
        title: 'Échelle de pH (0 à 14) et nature d’une solution',
        prompt: `Une solution aqueuse mesurée au pH-mètre donne pH = ${ph}.\nQuelle est sa nature ?`,
        hint: 'pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.',
        questionType: 'qcm',
        options: [
          'Acide (majorité d’ions H⁺)',
          'Neutre ([H⁺] = [OH⁻])',
          'Basique (majorité d’ions OH⁻)',
        ],
        correctAnswer: nature,
        explanationFinal: `Comme pH = ${ph}, la solution est ${nature}.`,
        steps: [
          {
            stepNumber: 1,
            title: 'Comparer pH à 7',
            explanation: `pH = ${ph} ➔ ${nature}.`,
            mathExpression: `pH = ${ph} | ➔ ${nature}`,
          },
        ],
      });
    }
    if (difficulty === 2) {
      const isAcid = randFloat() > 0.5;
      return makeResult3(chapterId, difficulty, {
        title: 'Évolution du pH lors d’une dilution à l’eau pure',
        prompt: isAcid
          ? 'On ajoute beaucoup d’eau distillée à un jus de citron (pH = 2,4). Comment varie le pH ?'
          : 'On ajoute beaucoup d’eau distillée à de l’eau de Javel (pH = 11,5). Comment varie le pH ?',
        hint: 'Lors d’une dilution, le pH se rapproche toujours de 7 SANS JAMAIS le dépasser !',
        questionType: 'qcm',
        options: [
          'Le pH augmente et se rapproche de 7 (sans dépasser 7)',
          'Le pH diminue et se rapproche de 7 (sans descendre sous 7)',
          'Le pH dépasse 7 et la solution change de camp',
        ],
        correctAnswer: isAcid
          ? 'Le pH augmente et se rapproche de 7 (sans dépasser 7)'
          : 'Le pH diminue et se rapproche de 7 (sans descendre sous 7)',
        explanationFinal: 'La dilution ramène toujours le pH vers 7 (neutralité).',
        steps: [
          {
            stepNumber: 1,
            title: 'Règle d’or de la dilution',
            explanation: isAcid ? 'Un acide dilué devient moins acide (pH ↑ vers 7).' : 'Une base diluée devient moins basique (pH ↓ vers 7).',
            mathExpression: isAcid ? 'pH : 2,4 ↗ 7⁻' : 'pH : 11,5 ↘ 7⁺',
          },
        ],
      });
    }
    if (difficulty === 3) {
      return makeResult3(chapterId, difficulty, {
        title: 'Réaction acide chlorhydrique sur le fer ou le zinc',
        prompt: 'On verse de l’acide chlorhydrique (H⁺ + Cl⁻) sur de la grenaille de zinc (Zn). Un gaz produit une détonation (« aboiement ») à la flamme.\nQuel est ce gaz ?',
        hint: 'Les ions H⁺ réagissent avec le métal Zn pour donner du zinc Zn²⁺ et un gaz léger inflammable.',
        questionType: 'qcm',
        options: ['Le dihydrogène (H₂)', 'Le dioxygène (O₂)', 'Le dioxyde de carbone (CO₂)'],
        correctAnswer: 'Le dihydrogène (H₂)',
        explanationFinal: 'Zn + 2 H⁺ ➔ Zn²⁺ + H₂↑. Le dihydrogène (H₂) détone à l’approche d’une allumette.',
        steps: [
          {
            stepNumber: 1,
            title: 'Écrire l’équation ionique simplifiée',
            explanation: 'Les ions Cl⁻ sont spectateurs.',
            mathExpression: `Zn + 2 H⁺ ➔ Zn²⁺ + H₂↑`,
          },
        ],
      });
    }
    const ca = pickRandom([0.1, 0.2]);
    const va = randInt(10, 30);
    const cb = 0.1;
    const vb = (ca * va) / cb;
    return makeResult3(chapterId, difficulty, {
      title: 'Défi BEPC : Dosage acido-basique à l’équivalence (Ca·Va = Cb·Vb)',
      prompt: `On neutralise exactement Va = ${va} mL d’acide chlorhydrique de concentration Ca = ${ca} mol/L par une solution de soude de concentration Cb = ${cb} mol/L.\nCalculer le volume Vb de soude versé à l’équivalence (en mL).`,
      hint: 'À l’équivalence : n(H⁺) = n(OH⁻), soit Ca × Va = Cb × Vb.',
      questionType: 'numeric',
      correctAnswer: String(vb),
      unit: 'mL',
      explanationFinal: `Vb = (Ca × Va) ÷ Cb = (${ca} × ${va}) ÷ ${cb} = ${vb} mL.`,
      steps: [
        {
          stepNumber: 1,
          title: 'Écrire la relation d’équivalence',
          explanation: 'Ca × Va = Cb × Vb.',
          mathExpression: `Vb = (${ca} × ${va}) ÷ ${cb} | Vb = ${vb} mL`,
          subResult: `${vb} mL`,
        },
      ],
    });
  }

  // 13. HYDROCARBURES & ALCOOLS (Default fallback for phys3-hydrocarbures-alcools)
  if (difficulty === 1) {
    const n = randInt(1, 6);
    const names = ['Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane'];
    const h = 2 * n + 2;
    return makeResult3(chapterId, difficulty, {
      title: 'Formule brute des alcanes CₙH₂ₙ₊₂',
      prompt: `Un alcane extrait du pétrole de Port-Gentil possède n = ${n} atomes de carbone (${names[n - 1]}).\nCombien d’atomes d’hydrogène possède sa molécule ?`,
      hint: 'Formule générale d’un alcane : CₙH₂ₙ₊₂.',
      questionType: 'numeric',
      correctAnswer: String(h),
      unit: 'atomes H',
      explanationFinal: `2 × ${n} + 2 = ${h} atomes H (formule : C${n === 1 ? '' : n}H${h}).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Appliquer 2n + 2',
          explanation: `2 × ${n} + 2 = ${h}.`,
          mathExpression: `H = 2 × ${n} + 2 | H = ${h}`,
          subResult: `${h}`,
        },
      ],
    });
  }
  if (difficulty === 2) {
    return makeResult3(chapterId, difficulty, {
      title: 'Combustion complète vs incomplète d’un alcane',
      prompt: 'Lorsqu’une gazinière au butane présente une flamme JAUNE et fuligineuse qui noircit les casseroles, quel gaz très toxique et mortel se forme ?',
      hint: 'Manque de dioxygène = combustion incomplète = carbone (noir) et un gaz inodore mortel.',
      questionType: 'qcm',
      options: ['Le monoxyde de carbone (CO)', 'Le diazote (N₂)', 'Le dihydrogène (H₂)'],
      correctAnswer: 'Le monoxyde de carbone (CO)',
      explanationFinal: 'La combustion incomplète produit du carbone C (suie noire) et du monoxyde de carbone CO (toxique mortel).',
      steps: [
        {
          stepNumber: 1,
          title: 'Identifier le danger de la flamme jaune',
          explanation: 'Manque d’O₂ ➔ formation de C et CO.',
          mathExpression: `Flamme jaune ➔ Combustion INCOMPLÈTE ➔ CO (toxique)`,
        },
      ],
    });
  }
  if (difficulty === 3) {
    const nC = randInt(2, 5);
    const nO2 = nC === 3 ? 5 : nC === 2 ? 3.5 : nC === 4 ? 6.5 : 8;
    // Let's keep integer balanced reaction for propane C3H8
    return makeResult3(chapterId, difficulty, {
      title: 'Équation équilibrée de la combustion du propane (C₃H₈)',
      prompt: 'Équilibrer la combustion complète du propane utilisé au Gabon :\nC₃H₈ + ... O₂ ➔ ... CO₂ + ... H₂O',
      hint: '3 carbones ➔ 3 CO₂ ; 8 hydrogènes ➔ 4 H₂O ; compte ensuite le nombre total d’atomes O.',
      questionType: 'qcm',
      options: [
        'C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
        'C₃H₈ + 4 O₂ ➔ 3 CO₂ + 4 H₂O',
        'C₃H₈ + 3 O₂ ➔ 3 CO₂ + 2 H₂O',
      ],
      correctAnswer: 'C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
      explanationFinal: `3×2 + 4×1 = 10 atomes O à droite, donc 5 O₂ à gauche (n=${nC}, ${nO2}).`,
      steps: [
        {
          stepNumber: 1,
          title: 'Équilibrer C, puis H, puis O',
          explanation: '3 CO₂ (6 O) + 4 H₂O (4 O) = 10 O, soit 5 O₂.',
          mathExpression: `C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O`,
        },
      ],
    });
  }
  const nBottles = randInt(2, 6);
  const co2PerMolButane = 4; // C4H10 -> 4 CO2
  const molButane = nBottles * 5;
  const molCO2 = molButane * co2PerMolButane;
  return makeResult3(chapterId, difficulty, {
    title: 'Défi Chimie SOGARA : Bilan molaire de combustion du butane',
    prompt: `D’après l’équation 2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O, 1 mole de butane produit 4 moles de CO₂.\nSi on brûle complètement ${molButane} moles de butane, combien de moles de CO₂ sont rejetées ?`,
    hint: `Multiplie ${molButane} par 4.`,
    questionType: 'numeric',
    correctAnswer: String(molCO2),
    unit: 'mol',
    explanationFinal: `${molButane} × 4 = ${molCO2} moles de CO₂.`,
    steps: [
      {
        stepNumber: 1,
        title: 'Utiliser le rapport stœchiométrique 1 ➔ 4',
        explanation: `n(CO₂) = 4 × n(C₄H₁₀) = 4 × ${molButane} = ${molCO2} mol.`,
        mathExpression: `n(CO₂) = 4 × ${molButane} | = ${molCO2} mol`,
        subResult: `${molCO2} mol`,
      },
    ],
  });
}
