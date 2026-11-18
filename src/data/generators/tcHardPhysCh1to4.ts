import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom } from './types';
import { assembleHardPhysExercise, fmtP, HardQuestionSpec } from './tcHardPhysHelpers';

export function generateHardPhysCh1to4(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 1. CINÉMATIQUE DU POINT & REPÈRE DE FRENET
    // -------------------------------------------------------------------------
    case 'physTc-cinematique': {
      if (vMod === 0) {
        // Tir balistique depuis une falaise h0 avec angle alpha = 30° et g = 10 m/s^2
        const v0 = pickRandom([20, 30, 40]); // sin(30°)=0.5 => v0y = 10, 15, 20 m/s
        const h0 = pickRandom([15, 25, 45]);
        const g = 10;
        const v0x = v0 * Math.cos(Math.PI / 6); // v0 * sqrt(3)/2
        const v0y = v0 * 0.5;
        const tS = v0y / g;
        const yMax = h0 + (v0y * v0y) / (2 * g);
        const xS = v0x * tS;
        // Sol y = 0 : -5 t^2 + v0y*t + h0 = 0 => 5 t^2 - v0y*t - h0 = 0
        const disc = v0y * v0y + 4 * 5 * h0;
        const tVol = (v0y + Math.sqrt(disc)) / g;
        const portee = v0x * tVol;
        // Conservation energie : v_impact = sqrt(v0^2 + 2*g*h0)
        const vImpact = Math.sqrt(v0 * v0 + 2 * g * h0);
        // Rayon de courbure au sommet : v = v0x, a_N = g => R_S = v0x^2 / g
        const rSommet = (v0x * v0x) / g;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un projectile est lancé depuis le sommet d'une falaise (h₀ = ${h0} m) avec v₀ = ${v0} m/s faisant un angle α = 30° au-dessus de l'horizontale (g = 10 m/s²). Calcule la composante verticale initiale v_{0y}.`,
            questionType: 'numeric',
            correctAnswer: fmtP(v0y),
            unit: 'm/s',
            hint: `v_{0y} = v₀ · sin(30°).`,
            ruleApplied: 'Projection du vecteur vitesse initiale',
            mathExpression: `v_{0y} = ${v0} × 0,5 = ${fmtP(v0y)} m/s`,
            explanation: `sin(30°) = 0,5, donc v_{0y} = ${fmtP(v0y)} m/s.`,
          },
          {
            questionPrompt: `Calcule la composante horizontale constante v_x (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v0x),
            unit: 'm/s',
            hint: `v_x = v₀ · cos(30°) = v₀√3/2.`,
            ruleApplied: 'Mouvement uniforme selon Ox',
            mathExpression: `v_x = ${v0} × √3/2 ≈ ${fmtP(v0x)} m/s`,
            explanation: `En l'absence de frottement, a_x = 0 donc v_x = ${fmtP(v0x)} m/s reste constant.`,
          },
          {
            questionPrompt: `À quel instant t_S le projectile atteint-il le sommet S de sa trajectoire ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(tS),
            unit: 's',
            hint: `Au sommet, v_y(t_S) = -g·t_S + v_{0y} = 0.`,
            ruleApplied: 'Condition au sommet de trajectoire',
            mathExpression: `t_S = ${fmtP(v0y)} / 10 = ${fmtP(tS)} s`,
            explanation: `v_y s'annule pour t_S = ${fmtP(tS)} s.`,
          },
          {
            questionPrompt: `Calcule l'altitude maximale y_max atteinte par le projectile au-dessus du sol (y = 0).`,
            questionType: 'numeric',
            correctAnswer: fmtP(yMax),
            unit: 'm',
            hint: `y_max = h₀ + v_{0y}² / (2g).`,
            ruleApplied: 'Flèche du tir balistique',
            mathExpression: `y_max = ${h0} + ${v0y * v0y}/20 = ${fmtP(yMax)} m`,
            explanation: `La flèche par rapport au sol vaut ${fmtP(yMax)} m.`,
          },
          {
            questionPrompt: `Calcule l'abscisse x_S du sommet S (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(xS),
            unit: 'm',
            hint: `x_S = v_x · t_S.`,
            ruleApplied: 'Équation horaire x(t)',
            mathExpression: `x_S = ${fmtP(v0x)} × ${fmtP(tS)} ≈ ${fmtP(xS)} m`,
            explanation: `x_S ≈ ${fmtP(xS)} m.`,
          },
          {
            questionPrompt: `Quel est le rayon de courbure R_S de la trajectoire au sommet S (arrondi à 0,01 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(rSommet),
            unit: 'm',
            hint: `Au sommet S, la vitesse est horizontale (= v_x) et l'accélération g est purement normale : a_N = g = v_x² / R_S.`,
            ruleApplied: 'Rayon de courbure dans le repère de Frenet',
            mathExpression: `R_S = v_x² / g = (${fmtP(v0x)})² / 10 ≈ ${fmtP(rSommet)} m`,
            explanation: `Au sommet, a_T = 0 et a_N = g, d'où R_S = v_x²/g ≈ ${fmtP(rSommet)} m.`,
          },
          {
            questionPrompt: `Détermine la durée totale de vol t_vol jusqu'à l'impact au sol y = 0 (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tVol),
            unit: 's',
            hint: `Résous -5t² + ${fmtP(v0y)}t + ${h0} = 0 (racine positive).`,
            ruleApplied: 'Équation du second degré sur y(t) = 0',
            mathExpression: `t_vol = (${fmtP(v0y)} + √${disc}) / 10 ≈ ${fmtP(tVol)} s`,
            explanation: `t_vol ≈ ${fmtP(tVol)} s.`,
          },
          {
            questionPrompt: `Calcule la portée horizontale x_P au moment de l'impact au sol (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(portee),
            unit: 'm',
            hint: `x_P = v_x · t_vol.`,
            ruleApplied: 'Portée du projectile',
            mathExpression: `x_P ≈ ${fmtP(v0x)} × ${fmtP(tVol)} ≈ ${fmtP(portee)} m`,
            explanation: `La portée horizontale est d'environ ${fmtP(portee)} m.`,
          },
          {
            questionPrompt: `Calcule la norme de la vitesse d'impact v_imp au sol (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vImpact),
            unit: 'm/s',
            hint: `Par conservation de l'énergie mécanique : v_imp = √(v₀² + 2gh₀).`,
            ruleApplied: 'Théorème de l’énergie cinétique',
            mathExpression: `v_imp = √(${v0 * v0} + ${2 * g * h0}) = √${v0 * v0 + 2 * g * h0} ≈ ${fmtP(vImpact)} m/s`,
            explanation: `v_imp ≈ ${fmtP(vImpact)} m/s.`,
          },
          {
            questionPrompt: `Quelle est la valeur de l'équation cartésienne y(x) ? Choisis la forme correcte.`,
            questionType: 'qcm',
            options: [
              `y(x) = -g/(2v₀²cos²α) · x² + tan(α)·x + ${h0}`,
              `y(x) = -g/(2v₀²) · x² + tan(α)·x + ${h0}`,
              `y(x) = -g·x² + v₀·x + ${h0}`,
              `y(x) = g/(2v₀²cos²α) · x² + tan(α)·x`,
            ],
            correctAnswer: `y(x) = -g/(2v₀²cos²α) · x² + tan(α)·x + ${h0}`,
            hint: `Élimine t = x / (v₀ cos α) dans y(t) = -½gt² + (v₀ sin α)t + h₀.`,
            ruleApplied: 'Équation cartésienne de la parabole de tir',
            mathExpression: `y(x) = -[g / (2v₀²cos²α)]x² + (tan α)x + h₀`,
            explanation: `La substitution de t = x/(v₀ cos α) donne cette équation parabolique.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Tir balistique depuis une falaise : sommet, rayon de courbure et impact`,
          `Un projectile est lancé depuis une falaise de hauteur h₀ = ${h0} m avec v₀ = ${v0} m/s sous un angle α = 30° (g = 10 m/s²).`,
          items
        );
      }

      if (vMod === 1) {
        // Mouvement circulaire uniformément varié sur piste de rayon R
        const R = pickRandom([50, 100, 200]);
        const aT = pickRandom([2, 3, 4]); // accélération tangentielle constante
        const v0 = pickRandom([10, 20]);
        const t = pickRandom([5, 10]);
        const vT = v0 + aT * t;
        const aN = (vT * vT) / R;
        const aTot = Math.hypot(aT, aN);
        const sArc = 0.5 * aT * t * t + v0 * t;
        const thetaRad = sArc / R;
        const omegaT = vT / R;
        const alphaAng = aT / R;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un mobile parcourt un virage circulaire de rayon R = ${R} m avec v₀ = ${v0} m/s et une accélération tangentielle constante a_T = ${aT} m/s². Calcule la vitesse v(t) à t = ${t} s.`,
            questionType: 'numeric',
            correctAnswer: fmtP(vT),
            unit: 'm/s',
            hint: `dv/dt = a_T ⇒ v(t) = v₀ + a_T · t.`,
            ruleApplied: 'Loi horaire curviligne de la vitesse',
            mathExpression: `v(${t}) = ${v0} + ${aT}×${t} = ${vT} m/s`,
            explanation: `v(${t}) = ${vT} m/s.`,
          },
          {
            questionPrompt: `Calcule la distance curviligne s(${t}) parcourue sur l'arc entre 0 et ${t} s.`,
            questionType: 'numeric',
            correctAnswer: fmtP(sArc),
            unit: 'm',
            hint: `s(t) = ½ a_T t² + v₀ t.`,
            ruleApplied: 'Abscisse curviligne en MCUV',
            mathExpression: `s(${t}) = 0,5×${aT}×${t * t} + ${v0}×${t} = ${fmtP(sArc)} m`,
            explanation: `s(${t}) = ${fmtP(sArc)} m.`,
          },
          {
            questionPrompt: `Calcule l'abscisse angulaire θ(${t}) balayée en radians (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(thetaRad),
            unit: 'rad',
            hint: `θ = s / R.`,
            ruleApplied: 'Relation entre abscisse curviligne et angle',
            mathExpression: `θ(${t}) = ${fmtP(sArc)} / ${R} = ${fmtP(thetaRad)} rad`,
            explanation: `θ(${t}) ≈ ${fmtP(thetaRad)} rad.`,
          },
          {
            questionPrompt: `Calcule la vitesse angulaire ω(${t}) = v(${t})/R en rad/s (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(omegaT),
            unit: 'rad/s',
            hint: `v / R.`,
            ruleApplied: 'Cinématique angulaire',
            mathExpression: `ω(${t}) = ${vT} / ${R} = ${fmtP(omegaT)} rad/s`,
            explanation: `ω(${t}) = ${fmtP(omegaT)} rad/s.`,
          },
          {
            questionPrompt: `Calcule l'accélération angulaire constante θ'' = a_T / R (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(alphaAng, 3),
            unit: 'rad/s²',
            hint: `${aT} / ${R}.`,
            ruleApplied: 'Accélération angulaire',
            mathExpression: `θ'' = ${aT} / ${R} = ${fmtP(alphaAng, 3)} rad/s²`,
            explanation: `θ'' = ${fmtP(alphaAng, 3)} rad/s².`,
          },
          {
            questionPrompt: `Calcule l'accélération normale a_N(${t}) = v²/R à t = ${t} s.`,
            questionType: 'numeric',
            correctAnswer: fmtP(aN),
            unit: 'm/s²',
            hint: `${vT}² / ${R}.`,
            ruleApplied: 'Accélération centripète de Frenet',
            mathExpression: `a_N = ${vT * vT} / ${R} = ${fmtP(aN)} m/s²`,
            explanation: `a_N = ${fmtP(aN)} m/s².`,
          },
          {
            questionPrompt: `Calcule la norme de l'accélération totale a = √(a_T² + a_N²) à t = ${t} s (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(aTot),
            unit: 'm/s²',
            hint: `√(${aT}² + (${fmtP(aN)})²).`,
            ruleApplied: 'Repère orthonormé de Frenet',
            mathExpression: `a = √(${aT * aT} + ${fmtP(aN * aN)}) ≈ ${fmtP(aTot)} m/s²`,
            explanation: `a ≈ ${fmtP(aTot)} m/s².`,
          },
          {
            questionPrompt: `Calcule l'angle φ entre le vecteur vitesse v et le vecteur accélération a à t = ${t} s en degrés (tan φ = a_N / a_T, arrondi à 0,1° près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((Math.atan2(aN, aT) * 180) / Math.PI, 1),
            unit: '°',
            hint: `arctan(a_N / a_T).`,
            ruleApplied: 'Orientation du vecteur accélération',
            mathExpression: `φ = arctan(${fmtP(aN)}/${aT}) ≈ ${fmtP((Math.atan2(aN, aT) * 180) / Math.PI, 1)}°`,
            explanation: `L'accélération est inclinée vers l'intérieur du virage d'un angle φ ≈ ${fmtP((Math.atan2(aN, aT) * 180) / Math.PI, 1)}°.`,
          },
          {
            questionPrompt: `À quel instant t* l'accélération normale atteint-elle exactement 4 fois sa valeur initiale a_N(0) (donc v(t*) = 2·v₀) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(v0 / aT),
            unit: 's',
            hint: `v₀ + a_T t* = 2 v₀ ⇒ t* = v₀ / a_T.`,
            ruleApplied: 'Proportionnalité quadratique a_N ∝ v²',
            mathExpression: `t* = ${v0} / ${aT} = ${fmtP(v0 / aT)} s`,
            explanation: `Pour doubler v, il faut t* = ${fmtP(v0 / aT)} s.`,
          },
          {
            questionPrompt: `Calcule le travail ΔE_c = ½m(v(${t})² - v₀²) reçu par une moto de masse m = 200 kg entre t = 0 et t = ${t} s (en kJ).`,
            questionType: 'numeric',
            correctAnswer: fmtP((0.5 * 200 * (vT * vT - v0 * v0)) / 1000),
            unit: 'kJ',
            hint: `100 × (${vT}² - ${v0}²) / 1000.`,
            ruleApplied: 'Variation d’énergie cinétique',
            mathExpression: `ΔE_c = 100×(${vT * vT} - ${v0 * v0}) / 1000 = ${fmtP((100 * (vT * vT - v0 * v0)) / 1000)} kJ`,
            explanation: `ΔE_c = ${fmtP((100 * (vT * vT - v0 * v0)) / 1000)} kJ.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Cinématique curviligne dans le repère de Frenet et dynamique angulaire`,
          `Un mobile aborde une piste circulaire de rayon R = ${R} m avec v₀ = ${v0} m/s et a_T = ${aT} m/s².`,
          items
        );
      }

      // vMod === 2: Interception & freinage d'urgence avec temps de réaction
      const vB = pickRandom([20, 25, 30]); // Voiture B en MRU à vitesse vB (m/s)
      const aA = pickRandom([2, 4]); // Voiture A démarre de 0 avec retard ou distance d0
      const d0 = pickRandom([50, 75, 100]);
      // B est devant à xB(0) = d0, vitesse vB. A part de 0 avec vitesse vA0 = 0 et accélération aA ?
      // Pour t_rencontre exact : 0.5 * aA * t^2 = d0 + vB * t => faisons vA0 > vB ou simple :
      // A rattrape B : B démarre en x = d0 avec aB = 0, vB constant? Résolvons numériquement exact :
      // Prenons A démarre de x=0, v0=0, accélération aA=4 m/s² ; B passe en x=0 à t=0 avec vitesse constante vB = 20 m/s -> rattrapage à t = 2*vB/aA = 10 s !
      // Ou avec retard t_r = 2 s de A !
      const vUniform = pickRandom([18, 24, 30]);
      const acc = pickRandom([3, 4, 6]);
      // Rattrapage depuis la même origine (t=0, A démarre v0=0, acc; B passe à vUniform) :
      // 0.5*acc*t^2 = vUniform*t => t_meet = 2 * vUniform / acc ! Exact !
      const tMeet = (2 * vUniform) / acc;
      const xMeet = vUniform * tMeet;
      const vAMeet = acc * tMeet; // = 2 * vUniform !
      // Écart maximal avant rattrapage : dx/dt = vUniform - acc*t = 0 => t_maxGap = vUniform / acc
      const tMaxGap = vUniform / acc;
      const maxGap = vUniform * tMaxGap - 0.5 * acc * tMaxGap * tMaxGap;
      // Ensuite freinage d'urgence avec temps de réaction tau = 1 s et décélération d = 5 m/s^2 à partir de vAMeet
      const dFrein = 5;
      const dReact = vAMeet * 1;
      const dStop = (vAMeet * vAMeet) / (2 * dFrein);
      const dTotalStop = dReact + dStop;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Une voiture B passe à l'origine O à t = 0 à vitesse constante v_B = ${vUniform} m/s. Au même instant, une moto A démarre de O sans vitesse initiale avec a_A = ${acc} m/s². À quel instant t_max l'avance de B sur A est-elle maximale ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(tMaxGap),
          unit: 's',
          hint: `L'écart D(t) = x_B(t) - x_A(t) est maximal quand sa dérivée v_B - v_A(t) s'annule.`,
          ruleApplied: 'Extremum d’une fonction écart D(t)',
          mathExpression: `v_A(t_max) = v_B ⇒ ${acc}·t_max = ${vUniform} ⇒ t_max = ${fmtP(tMaxGap)} s`,
          explanation: `Avant t_max, B est plus rapide ; après t_max, A devient plus rapide et réduit l'écart.`,
        },
        {
          questionPrompt: `Quelle est la distance maximale d'avance D_max de B sur A à cet instant t_max ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(maxGap),
          unit: 'm',
          hint: `D_max = v_B t_max - ½ a_A t_max².`,
          ruleApplied: 'Évaluation de l’écart maximal',
          mathExpression: `D_max = ${fmtP(vUniform * tMaxGap)} - ${fmtP(0.5 * acc * tMaxGap * tMaxGap)} = ${fmtP(maxGap)} m`,
          explanation: `L'écart maximal atteint ${fmtP(maxGap)} m.`,
        },
        {
          questionPrompt: `À quel instant t_r la moto A rattrape-t-elle la voiture B (x_A(t_r) = x_B(t_r), t_r > 0) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(tMeet),
          unit: 's',
          hint: `½ a_A t_r² = v_B t_r ⇒ t_r = 2 v_B / a_A.`,
          ruleApplied: 'Équation de rencontre horaire',
          mathExpression: `t_r = 2 × ${vUniform} / ${acc} = ${fmtP(tMeet)} s`,
          explanation: `A rattrape B à t_r = ${fmtP(tMeet)} s.`,
        },
        {
          questionPrompt: `Quelle distance x_r depuis O a été parcourue lors du rattrapage ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(xMeet),
          unit: 'm',
          hint: `x_r = v_B · t_r.`,
          ruleApplied: 'Abscisse de rencontre',
          mathExpression: `x_r = ${vUniform} × ${fmtP(tMeet)} = ${fmtP(xMeet)} m`,
          explanation: `Le dépassement a lieu à ${fmtP(xMeet)} m de O.`,
        },
        {
          questionPrompt: `Quelle est la vitesse instantanée v_A(t_r) de la moto au moment du rattrapage ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(vAMeet),
          unit: 'm/s',
          hint: `v_A = a_A · t_r = 2 v_B.`,
          ruleApplied: 'Relation vitesse-accélération',
          mathExpression: `v_A(t_r) = ${acc} × ${fmtP(tMeet)} = ${fmtP(vAMeet)} m/s`,
          explanation: `La moto passe B avec exactement le double de sa vitesse : ${fmtP(vAMeet)} m/s.`,
        },
        {
          questionPrompt: `Convertis cette vitesse v_A(t_r) en km/h.`,
          questionType: 'numeric',
          correctAnswer: fmtP(vAMeet * 3.6),
          unit: 'km/h',
          hint: `Multiplie par 3,6.`,
          ruleApplied: 'Conversion d’unités de vitesse',
          mathExpression: `${fmtP(vAMeet)} × 3,6 = ${fmtP(vAMeet * 3.6)} km/h`,
          explanation: `v_A(t_r) = ${fmtP(vAMeet * 3.6)} km/h.`,
        },
        {
          questionPrompt: `À cette vitesse v_A = ${fmtP(vAMeet)} m/s, le motard aperçoit un obstacle et réagit en τ = 1 s à vitesse constante. Quelle est sa distance de réaction d_réac ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(dReact),
          unit: 'm',
          hint: `d_réac = v_A · τ.`,
          ruleApplied: 'Distance parcourue pendant le temps de réaction',
          mathExpression: `d_réac = ${fmtP(vAMeet)} × 1 = ${fmtP(dReact)} m`,
          explanation: `d_réac = ${fmtP(dReact)} m.`,
        },
        {
          questionPrompt: `Il freine ensuite avec une décélération constante de norme d = 5 m/s². Quelle est la distance de freinage d_frein ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(dStop),
          unit: 'm',
          hint: `Formule indépendante du temps : v_f² - v_i² = -2 d · d_frein.`,
          ruleApplied: 'Relation indépendante du temps en MRUV',
          mathExpression: `d_frein = ${fmtP(vAMeet)}² / (2×5) = ${fmtP(dStop)} m`,
          explanation: `d_frein = ${fmtP(dStop)} m.`,
        },
        {
          questionPrompt: `Calcule la distance totale d'arrêt D_arrêt = d_réac + d_frein.`,
          questionType: 'numeric',
          correctAnswer: fmtP(dTotalStop),
          unit: 'm',
          hint: `Additionne les deux distances.`,
          ruleApplied: 'Distance totale d’arrêt',
          mathExpression: `D_arrêt = ${fmtP(dReact)} + ${fmtP(dStop)} = ${fmtP(dTotalStop)} m`,
          explanation: `Il faut ${fmtP(dTotalStop)} m pour s'arrêter complètement.`,
        },
        {
          questionPrompt: `Quelle est la durée totale T_arrêt depuis l'apparition de l'obstacle jusqu'à l'arrêt complet ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(1 + vAMeet / dFrein),
          unit: 's',
          hint: `τ + v_A / d.`,
          ruleApplied: 'Durée totale de freinage',
          mathExpression: `T_arrêt = 1 + ${fmtP(vAMeet)}/5 = ${fmtP(1 + vAMeet / dFrein)} s`,
          explanation: `T_arrêt = ${fmtP(1 + vAMeet / dFrein)} s.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Poursuite MRU/MRUA, écart maximal et freinage d'urgence`,
        `Problème de cinématique routière : rattrapage entre une voiture B (v_B = ${vUniform} m/s) et une moto A (a_A = ${acc} m/s²), suivi d'un freinage d'urgence.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 2. DYNAMIQUE, PLAN INCLINÉ & DÉFLEXION ÉLECTROMAGNÉTIQUE
    // -------------------------------------------------------------------------
    case 'physTc-dynamique': {
      if (vMod === 0) {
        // Plan incliné alpha = 30° avec frottements f, suivi d'un plan horizontal rugueux
        const m = pickRandom([2, 4, 5]);
        const g = 10;
        const L = pickRandom([8, 10, 12]);
        const f = m * 2; // f = 2m (N) => a = g sin(30°) - f/m = 5 - 2 = 3 m/s^2 exact !
        const sinA = 0.5;
        const cosA = Math.sqrt(3) / 2;
        const RN = m * g * cosA;
        const Px = m * g * sinA;
        const acc = (Px - f) / m; // 3 m/s^2 exact !
        const vBas = Math.sqrt(2 * acc * L);
        const muEff = f / RN;
        const W_P = Px * L;
        const W_f = -f * L;
        // Sur le plat, avec f_plat = f, distance d'arrêt D_plat = E_c / f = (m * acc * L) / f
        const dPlat = (m * acc * L) / f;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un solide de masse m = ${m} kg glisse sans vitesse initiale sur un plan incliné de longueur L = ${L} m faisant α = 30° avec l'horizontale, soumis à un frottement constant f = ${f} N (g = 10 m/s²). Calcule la composante motrice du poids P_x = mg sin(30°).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Px),
            unit: 'N',
            hint: `sin(30°) = 0,5.`,
            ruleApplied: 'Projection du vecteur poids sur l’axe de pente',
            mathExpression: `P_x = ${m} × 10 × 0,5 = ${fmtP(Px)} N`,
            explanation: `P_x = ${fmtP(Px)} N.`,
          },
          {
            questionPrompt: `Calcule la réaction normale R_N = mg cos(30°) exercée par le plan incliné (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(RN),
            unit: 'N',
            hint: `Pas de mouvement perpendiculaire au plan ⇒ R_N - mg cos(30°) = 0.`,
            ruleApplied: '2e loi de Newton projetée selon la normale',
            mathExpression: `R_N = ${m * g} × (√3/2) ≈ ${fmtP(RN)} N`,
            explanation: `R_N ≈ ${fmtP(RN)} N.`,
          },
          {
            questionPrompt: `Calcule le coefficient de frottement dynamique μ = f / R_N sur ce plan (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(muEff, 3),
            hint: `${f} / ${fmtP(RN)}.`,
            ruleApplied: 'Loi de Coulomb du frottement cinétique',
            mathExpression: `μ = ${f} / ${fmtP(RN)} ≈ ${fmtP(muEff, 3)}`,
            explanation: `μ ≈ ${fmtP(muEff, 3)}.`,
          },
          {
            questionPrompt: `En appliquant le TCI (2e loi de Newton), calcule l'accélération a du solide le long de la pente.`,
            questionType: 'numeric',
            correctAnswer: fmtP(acc),
            unit: 'm/s²',
            hint: `m a = P_x - f.`,
            ruleApplied: 'Théorème du centre d’inertie (TCI)',
            mathExpression: `a = (${Px} - ${f}) / ${m} = ${fmtP(acc)} m/s²`,
            explanation: `a = 3 m/s².`,
          },
          {
            questionPrompt: `Calcule le travail du poids W(P) sur la descente de longueur L = ${L} m.`,
            questionType: 'numeric',
            correctAnswer: fmtP(W_P),
            unit: 'J',
            hint: `W(P) = m g L sin(30°) = P_x · L.`,
            ruleApplied: 'Travail d’une force constante',
            mathExpression: `W(P) = ${Px} × ${L} = ${fmtP(W_P)} J`,
            explanation: `W(P) = ${fmtP(W_P)} J.`,
          },
          {
            questionPrompt: `Calcule le travail résistant W(f) de la force de frottement sur la descente.`,
            questionType: 'numeric',
            correctAnswer: fmtP(W_f),
            unit: 'J',
            hint: `Force opposée au déplacement : W(f) = -f · L.`,
            ruleApplied: 'Travail résistant du frottement',
            mathExpression: `W(f) = -${f} × ${L} = ${fmtP(W_f)} J`,
            explanation: `W(f) = ${fmtP(W_f)} J.`,
          },
          {
            questionPrompt: `Par le théorème de l'énergie cinétique, détermine la vitesse v_B en bas de la pente (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vBas),
            unit: 'm/s',
            hint: `½ m v_B² = W(P) + W(f).`,
            ruleApplied: 'Théorème de l’énergie cinétique (TEC)',
            mathExpression: `v_B = √(2×${acc}×${L}) = √${2 * acc * L} ≈ ${fmtP(vBas)} m/s`,
            explanation: `v_B ≈ ${fmtP(vBas)} m/s.`,
          },
          {
            questionPrompt: `Calcule la durée Δt de la descente (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vBas / acc),
            unit: 's',
            hint: `v_B = a · Δt.`,
            ruleApplied: 'Cinématique MRUA',
            mathExpression: `Δt = ${fmtP(vBas)} / ${acc} ≈ ${fmtP(vBas / acc)} s`,
            explanation: `Δt ≈ ${fmtP(vBas / acc)} s.`,
          },
          {
            questionPrompt: `En bas du plan, le solide aborde une piste horizontale où il reste soumis au frottement f = ${f} N jusqu'à l'arrêt. Quelle distance d parcourt-il sur le plat ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(dPlat),
            unit: 'm',
            hint: `TEC sur le plat : 0 - E_c(B) = -f · d.`,
            ruleApplied: 'TEC jusqu’à l’arrêt',
            mathExpression: `d = ${W_P + W_f} / ${f} = ${fmtP(dPlat)} m`,
            explanation: `d = ${fmtP(dPlat)} m.`,
          },
          {
            questionPrompt: `Quel est le rendement énergétique η = E_c(B) / W(P) de la descente sur le plan incliné (en %, soit 0,6 = 60) ?`,
            questionType: 'numeric',
            correctAnswer: '60',
            hint: `(${acc * L} / ${5 * L}) × 100.`,
            ruleApplied: 'Bilan énergétique',
            mathExpression: `η = ${W_P + W_f} / ${W_P} = 3/5 = 60 %`,
            explanation: `40 % de l'énergie potentielle est dissipée par frottement ; il reste 60 %.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Dynamique sur plan incliné avec frottement et bilan énergétique`,
          `Un bloc de masse m = ${m} kg glisse sans vitesse initiale sur un plan incliné (α = 30°, L = ${L} m, f = ${f} N), puis sur un sol horizontal (f = ${f} N).`,
          items
        );
      }

      if (vMod === 1) {
        // Déflexion électrostatique d'électrons entre deux plaques de longueur l, écart d, tension U, écran à distance D
        const U0 = pickRandom([1000, 2000]); // tension d'accélération (V) -> v0
        const U = pickRandom([200, 400]); // tension de déviation (V)
        const dCm = 4; // 4 cm = 0.04 m
        const lCm = 10; // 10 cm = 0.10 m
        const DCm = 40; // distance centre plaques -> écran = 0.40 m (ou sortie -> écran)
        const eCharge = 1.6e-19;
        const me = 9.1e-31;
        const v0 = Math.sqrt((2 * eCharge * U0) / me); // en m/s
        const E = U / 0.04; // V/m
        const ay = (eCharge * E) / me; // m/s^2
        const tSortie = 0.1 / v0;
        // Remarque : ys = (U * l^2) / (4 * d * U0) ! Formule indépendante de e/m ! Vérifions :
        // ys = 0.5 * (eU/(md)) * (l/v0)^2 avec v0^2 = 2eU0/m => ys = (U * l^2) / (4 * d * U0) !
        const ysCm = (U * lCm * lCm) / (4 * dCm * U0); // en cm !
        // tan(alpha) = U * l / (2 * d * U0)
        const tanAlpha = (U * lCm) / (2 * dCm * U0);
        // Déflexion sur l'écran à distance D = 40 cm du centre des plaques : Y_ecran = D * tan(alpha) = (U * l * D) / (2 * d * U0)
        const yEcranCm = DCm * tanAlpha;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Des électrons (e = 1,6×10⁻¹⁹ C, m = 9,1×10⁻³¹ kg) sont accélérés sous U₀ = ${U0} V depuis le repos. Calcule leur énergie cinétique E_c0 en eV.`,
            questionType: 'numeric',
            correctAnswer: String(U0),
            unit: 'eV',
            hint: `1 eV correspond à un électron accéléré sous 1 V.`,
            ruleApplied: 'Conversion Joule / électron-volt',
            mathExpression: `E_{c0} = e · U₀ = ${U0} eV`,
            explanation: `E_{c0} = ${U0} eV.`,
          },
          {
            questionPrompt: `Calcule la vitesse d'entrée v₀ des électrons (en 10⁷ m/s, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v0 / 1e7),
            unit: '×10⁷ m/s',
            hint: `v₀ = √(2 e U₀ / m).`,
            ruleApplied: 'Théorème de l’énergie cinétique (canon à électrons)',
            mathExpression: `v₀ = √(2×1,6×10⁻¹⁹×${U0} / 9,1×10⁻³¹) ≈ ${fmtP(v0 / 1e7)}×10⁷ m/s`,
            explanation: `v₀ ≈ ${fmtP(v0 / 1e7)}×10⁷ m/s.`,
          },
          {
            questionPrompt: `Les électrons pénètrent dans un condensateur plan (plaques de longueur l = 10 cm, écartées de d = 4 cm, tension U = ${U} V). Calcule l'intensité du champ électrique E.`,
            questionType: 'numeric',
            correctAnswer: String(E),
            unit: 'V/m',
            hint: `E = U / d avec d en mètres.`,
            ruleApplied: 'Champ électrostatique uniforme',
            mathExpression: `E = ${U} / 0,04 = ${E} V/m`,
            explanation: `E = ${E} V/m.`,
          },
          {
            questionPrompt: `Vers quelle plaque le faisceau d'électrons est-il dévié ?`,
            questionType: 'qcm',
            options: [
              'Vers l’armature positive (car q = -e < 0 et F = qE)',
              'Vers l’armature négative',
              'Il n’est pas dévié',
              'Selon la direction perpendiculaire au champ E',
            ],
            correctAnswer: 'Vers l’armature positive (car q = -e < 0 et F = qE)',
            hint: `Les charges négatives remontent les lignes de champ électrique.`,
            ruleApplied: 'Force électrostatique F = qE',
            mathExpression: `F = -e·E dirigée vers +`,
            explanation: `F = -eE est de sens opposé à E, donc dirigée vers la plaque positive.`,
          },
          {
            questionPrompt: `Calcule la valeur absolue de l'accélération verticale a_y (en 10¹⁴ m/s², arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(ay / 1e14),
            unit: '×10¹⁴ m/s²',
            hint: `a_y = e E / m.`,
            ruleApplied: '2e loi de Newton en champ E',
            mathExpression: `a_y = (1,6×10⁻¹⁹ × ${E}) / 9,1×10⁻³¹ ≈ ${fmtP(ay / 1e14)}×10¹⁴ m/s²`,
            explanation: `a_y ≈ ${fmtP(ay / 1e14)}×10¹⁴ m/s² (le poids est totalement négligeable devant F).`,
          },
          {
            questionPrompt: `Calcule la durée de traversée τ = l / v₀ des plaques (en nanosecondes ns, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tSortie * 1e9),
            unit: 'ns',
            hint: `0,10 m / v₀, multiplié par 10⁹.`,
            ruleApplied: 'Mouvement uniforme selon Ox',
            mathExpression: `τ = 0,10 / v₀ ≈ ${fmtP(tSortie * 1e9)} ns`,
            explanation: `τ ≈ ${fmtP(tSortie * 1e9)} ns.`,
          },
          {
            questionPrompt: `Calcule la déviation verticale y_S à la sortie des plaques en cm (indice : y_S = U·l² / (4·d·U₀)).`,
            questionType: 'numeric',
            correctAnswer: fmtP(ysCm, 3),
            unit: 'cm',
            hint: `(${U} × 10²) / (4 × 4 × ${U0}).`,
            ruleApplied: 'Équation de trajectoire parabolique',
            mathExpression: `y_S = (${U}×100)/(16×${U0}) = ${fmtP(ysCm, 3)} cm`,
            explanation: `y_S = ${fmtP(ysCm, 3)} cm.`,
          },
          {
            questionPrompt: `Calcule tan(α) = v_y(S) / v₀ = (U · l) / (2 · d · U₀) à la sortie du condensateur (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tanAlpha, 3),
            hint: `(${U} × 10) / (2 × 4 × ${U0}).`,
            ruleApplied: 'Tangente à la parabole au point de sortie',
            mathExpression: `tan α = ${U * 10} / ${8 * U0} = ${fmtP(tanAlpha, 3)}`,
            explanation: `tan α = ${fmtP(tanAlpha, 3)}.`,
          },
          {
            questionPrompt: `En dehors des plaques, la trajectoire est rectiligne uniforme et semble provenir du centre I des plaques. Calcule la déflexion Y_écran sur un écran situé à D = 40 cm du centre I (en cm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(yEcranCm),
            unit: 'cm',
            hint: `Y_écran = D · tan α.`,
            ruleApplied: 'Propriété de la tangente parabolique au milieu l/2',
            mathExpression: `Y = 40 × ${fmtP(tanAlpha, 3)} = ${fmtP(yEcranCm)} cm`,
            explanation: `Y_écran = ${fmtP(yEcranCm)} cm.`,
          },
          {
            questionPrompt: `La sensibilité électrostatique S = Y / U vaut ici (en cm/V, à 0,001 près) :`,
            questionType: 'numeric',
            correctAnswer: fmtP(yEcranCm / U, 4),
            unit: 'cm/V',
            hint: `Y_écran / ${U}.`,
            ruleApplied: 'Proportionnalité déflexion-tension (oscilloscope)',
            mathExpression: `S = (l·D) / (2·d·U₀) = ${fmtP(yEcranCm / U, 4)} cm/V`,
            explanation: `La déflexion sur l'écran est rigoureusement proportionnelle à U.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Déflexion électrostatique d'un faisceau d'électrons (oscilloscope)`,
          `Des électrons accélérés sous U₀ = ${U0} V entrent dans un condensateur plan (l = 10 cm, d = 4 cm, U = ${U} V) devant un écran à D = 40 cm du centre.`,
          items
        );
      }

      // vMod === 2: Spectromètre de masse (déviation magnétique B et séparation isotopique)
      const Uacc = pickRandom([2000, 4000]); // V
      const B = pickRandom([0.2, 0.4]); // T
      // Ions ²⁰Ne⁺ et ²²Ne⁺ (q = +e)
      const uMass = 1.66e-27;
      const eQ = 1.6e-19;
      const m1 = 20 * uMass;
      const m2 = 22 * uMass;
      const v1 = Math.sqrt((2 * eQ * Uacc) / m1);
      const R1 = (m1 * v1) / (eQ * B); // en m -> * 100 pour cm
      const R2 = R1 * Math.sqrt(22 / 20);
      const deltaD_cm = 2 * (R2 - R1) * 100;
      const fCyclo = (eQ * B) / (2 * Math.PI * m1);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Dans un spectromètre de masse (Bainbridge/Dempster), des ions monochargés ²⁰Ne⁺ (q = +e = 1,6×10⁻¹⁹ C, m₁ = 20 u avec 1 u = 1,66×10⁻²⁷ kg) sont accélérés sous U = ${Uacc} V. Quelle est l'énergie cinétique acquise en sortie de chambre (en 10⁻¹⁶ J) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP((eQ * Uacc) / 1e-16),
          unit: '×10⁻¹⁶ J',
          hint: `E_c = q · U.`,
          ruleApplied: 'Accélération électrostatique',
          mathExpression: `E_c = 1,6×10⁻¹⁹ × ${Uacc} = ${fmtP((eQ * Uacc) / 1e-16)}×10⁻¹⁶ J`,
          explanation: `Tous les ions monochargés acquièrent la même énergie cinétique qU.`,
        },
        {
          questionPrompt: `Calcule la vitesse v₁ des ions ²⁰Ne⁺ en km/s (arrondie à 0,1 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(v1 / 1000, 1),
          unit: 'km/s',
          hint: `v₁ = √(2eU / m₁), puis divise par 1000.`,
          ruleApplied: 'Théorème de l’énergie cinétique',
          mathExpression: `v₁ ≈ ${fmtP(v1 / 1000, 1)} km/s`,
          explanation: `v₁ ≈ ${fmtP(v1 / 1000, 1)} km/s.`,
        },
        {
          questionPrompt: `Les ions entrent orthogonalement dans un champ magnétique uniforme B = ${B} T. Quel est le travail de la force magnétique de Lorentz F_m = q v ∧ B ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          unit: 'J',
          hint: `F_m est toujours perpendiculaire au vecteur vitesse v.`,
          ruleApplied: 'Travail nul de la force magnétique',
          mathExpression: `P = F_m · v = 0 ⇒ v = constante`,
          explanation: `La force magnétique ne travaille pas : le mouvement est uniforme.`,
        },
        {
          questionPrompt: `Montre dans le repère de Frenet que le rayon de la trajectoire circulaire vaut R = (mv)/(qB). Calcule R₁ pour ²⁰Ne⁺ en cm (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(R1 * 100),
          unit: 'cm',
          hint: `R₁ = (m₁ v₁)/(e B), puis ×100 pour convertir en cm.`,
          ruleApplied: 'Mouvement circulaire uniforme sous force de Lorentz',
          mathExpression: `R₁ = (1/B)√(2 m₁ U / e) ≈ ${fmtP(R1 * 100)} cm`,
          explanation: `R₁ ≈ ${fmtP(R1 * 100)} cm.`,
        },
        {
          questionPrompt: `Comment s'exprime R en fonction de la masse m, de U et de B (en éliminant v) ?`,
          questionType: 'qcm',
          options: [
            'R = (1/B) · √(2mU / q)',
            'R = B · √(2mU / q)',
            'R = (1/B) · (2mU / q)',
            'R = mU / (qB)',
          ],
          correctAnswer: 'R = (1/B) · √(2mU / q)',
          hint: `Remplace mv par √(2mqU) dans R = mv/(qB).`,
          ruleApplied: 'Formule du spectromètre de masse',
          mathExpression: `R = √(2m q U) / (qB) = (1/B)√(2mU/q)`,
          explanation: `R est proportionnel à √m.`,
        },
        {
          questionPrompt: `Des ions isotopes ²²Ne⁺ (m₂ = 22 u) sont également accélérés sous U = ${Uacc} V. Calcule le rapport R₂ / R₁ = √(22/20) (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(Math.sqrt(1.1), 3),
          hint: `√1,1.`,
          ruleApplied: 'Rapport des rayons isotopiques',
          mathExpression: `R₂ / R₁ = √(22/20) = √1,1 ≈ ${fmtP(Math.sqrt(1.1), 3)}`,
          explanation: `R₂ est supérieur de 4,9 % à R₁.`,
        },
        {
          questionPrompt: `Calcule R₂ en cm (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(R2 * 100),
          unit: 'cm',
          hint: `R₁ × √1,1.`,
          ruleApplied: 'Rayon de courbure de l’isotope lourd',
          mathExpression: `R₂ ≈ ${fmtP(R2 * 100)} cm`,
          explanation: `R₂ ≈ ${fmtP(R2 * 100)} cm.`,
        },
        {
          questionPrompt: `Les ions décrivent un demi-cercle avant de frapper la plaque photographique. Calcule l'écartement Δd = 2(R₂ - R₁) entre les deux taches d'impact (en cm, arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(deltaD_cm),
          unit: 'cm',
          hint: `Le diamètre vaut 2R.`,
          ruleApplied: 'Séparation isotopique sur collecteur',
          mathExpression: `Δd = 2(${fmtP(R2 * 100)} - ${fmtP(R1 * 100)}) ≈ ${fmtP(deltaD_cm)} cm`,
          explanation: `Les deux faisceaux arrivent séparés de ${fmtP(deltaD_cm)} cm.`,
        },
        {
          questionPrompt: `Calcule la fréquence cyclotron f = (e B)/(2π m₁) des ions ²⁰Ne⁺ (en kHz, arrondie à 0,1 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(fCyclo / 1000, 1),
          unit: 'kHz',
          hint: `Indépendante de la vitesse v₁ ! Divise par 1000 pour kHz.`,
          ruleApplied: 'Fréquence cyclotron',
          mathExpression: `f ≈ ${fmtP(fCyclo / 1000, 1)} kHz`,
          explanation: `f ≈ ${fmtP(fCyclo / 1000, 1)} kHz.`,
        },
        {
          questionPrompt: `Si l'on double la masse (ion doublement ionisé ou isotope 2m), comment varie la période cyclotron T = (2π m)/(q B) à charge q constante ?`,
          questionType: 'qcm',
          options: [
            'Elle est multipliée par 2',
            'Elle est multipliée par √2',
            'Elle est divisée par 2',
            'Elle reste inchangée',
          ],
          correctAnswer: 'Elle est multipliée par 2',
          hint: `T est proportionnelle à m/q.`,
          ruleApplied: 'Isochronisme cyclotron',
          mathExpression: `T ∝ m / q`,
          explanation: `Doubler m à q et B constants double la période de révolution T.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Spectromètre de masse, force de Lorentz et séparation isotopique`,
        `Des ions ²⁰Ne⁺ et ²²Ne⁺ (1 u = 1,66×10⁻²⁷ kg) accélérés sous U = ${Uacc} V entrent dans B = ${B} T.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 3. GRAVITATION, SATELLITES & LOIS DE KEPLER
    // -------------------------------------------------------------------------
    case 'physTc-gravitation': {
      if (vMod === 0) {
        // Satellite circulaire à altitude h autour de la Terre
        const RT = 6400; // km
        const h = pickRandom([600, 1600, 3600]); // km -> r = 7000, 8000, 10000 km !
        const rKm = RT + h;
        const rM = rKm * 1000;
        const g0 = 9.8; // m/s^2
        const G_MT = g0 * (RT * 1000) ** 2; // G*M_T ≈ 4.014e14
        const gh = g0 * (RT / rKm) ** 2;
        const vOrb = Math.sqrt(gh * rM);
        const Tsec = (2 * Math.PI * rM) / vOrb;
        const Tmin = Tsec / 60;
        const mSat = 500; // kg
        const EcMJ = (0.5 * mSat * vOrb * vOrb) / 1e6;
        const EpMJ = -2 * EcMJ;
        const EmMJ = -EcMJ;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un satellite de masse m = 500 kg décrit une orbite circulaire à l'altitude h = ${h} km (R_T = 6400 km, g₀ = 9,8 m/s²). Quel est le rayon orbital r en km ?`,
            questionType: 'numeric',
            correctAnswer: String(rKm),
            unit: 'km',
            hint: `r = R_T + h.`,
            ruleApplied: 'Rayon de l’orbite',
            mathExpression: `r = 6400 + ${h} = ${rKm} km`,
            explanation: `r = ${rKm} km = ${rKm / 1000}×10⁶ m.`,
          },
          {
            questionPrompt: `Calcule l'intensité du champ de gravitation g(h) = g₀·(R_T / r)² à cette altitude (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(gh),
            unit: 'm/s²',
            hint: `9,8 × (6400 / ${rKm})².`,
            ruleApplied: 'Loi de gravitation universelle',
            mathExpression: `g(${h}) = 9,8 × (6400/${rKm})² ≈ ${fmtP(gh)} m/s²`,
            explanation: `g(h) ≈ ${fmtP(gh)} m/s².`,
          },
          {
            questionPrompt: `En appliquant le TCI dans le repère de Frenet, calcule la vitesse orbitale v = √(g(h)·r) (en km/s, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vOrb / 1000),
            unit: 'km/s',
            hint: `a_N = v²/r = g(h). Convertis r en mètres puis divise v par 1000.`,
            ruleApplied: 'Vitesse orbitale circulaire',
            mathExpression: `v = √(${fmtP(gh)} × ${rM}) ≈ ${fmtP(vOrb / 1000)} km/s`,
            explanation: `v ≈ ${fmtP(vOrb / 1000)} km/s.`,
          },
          {
            questionPrompt: `Calcule la période de révolution T en minutes (arrondie à 0,1 min près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Tmin, 1),
            unit: 'min',
            hint: `T = 2π r / v, puis divise par 60.`,
            ruleApplied: 'Période de révolution',
            mathExpression: `T = 2π·${rM} / (${fmtP(vOrb)}) ≈ ${fmtP(Tsec, 0)} s ≈ ${fmtP(Tmin, 1)} min`,
            explanation: `T ≈ ${fmtP(Tmin, 1)} min.`,
          },
          {
            questionPrompt: `Calcule le rapport de Kepler T² / r³ (en 10⁻¹⁴ s²/m³, arrondi à 0,01 près). Rappel : T²/r³ = 4π²/(GM_T).`,
            questionType: 'numeric',
            correctAnswer: fmtP((Tsec * Tsec) / Math.pow(rM, 3) / 1e-14),
            unit: '×10⁻¹⁴ s²/m³',
            hint: `4π² / (g₀ R_T²).`,
            ruleApplied: '3e loi de Kepler',
            mathExpression: `T² / r³ = 4π² / (GM_T) ≈ ${fmtP((Tsec * Tsec) / Math.pow(rM, 3) / 1e-14)}×10⁻¹⁴ s²/m³`,
            explanation: `Cette constante ne dépend que de la masse M_T de la Terre.`,
          },
          {
            questionPrompt: `Calcule l'énergie cinétique E_c du satellite de masse m = 500 kg (en GJ, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EcMJ / 1000),
            unit: 'GJ',
            hint: `½ m v², divisé par 10⁹ pour GJ.`,
            ruleApplied: 'Énergie cinétique orbitale',
            mathExpression: `E_c = 250 × v² ≈ ${fmtP(EcMJ / 1000)} GJ`,
            explanation: `E_c ≈ ${fmtP(EcMJ / 1000)} GJ.`,
          },
          {
            questionPrompt: `Sachant que E_p = -2 E_c sur une orbite circulaire (E_p(∞) = 0), calcule l'énergie potentielle gravitationnelle E_p (en GJ, valeur négative).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EpMJ / 1000),
            unit: 'GJ',
            hint: `E_p = -GM_T m / r = -2 E_c.`,
            ruleApplied: 'Énergie potentielle de gravitation',
            mathExpression: `E_p = -2 E_c ≈ ${fmtP(EpMJ / 1000)} GJ`,
            explanation: `E_p ≈ ${fmtP(EpMJ / 1000)} GJ.`,
          },
          {
            questionPrompt: `Déduis-en l'énergie mécanique totale E_m = E_c + E_p (en GJ).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EmMJ / 1000),
            unit: 'GJ',
            hint: `E_m = -E_c = ½ E_p.`,
            ruleApplied: 'Énergie mécanique d’un système lié',
            mathExpression: `E_m = -${fmtP(EcMJ / 1000)} GJ`,
            explanation: `E_m < 0 confirme que le satellite est gravitationnellement lié à la Terre.`,
          },
          {
            questionPrompt: `Par suite de frottements atmosphériques résiduels, l'énergie mécanique E_m diminue. Comment évoluent l'altitude h et la vitesse v du satellite ?`,
            questionType: 'qcm',
            options: [
              'h diminue et la vitesse v augmente (paradoxe du frottement orbital)',
              'h diminue et v diminue',
              'h augmente et v diminue',
              'v reste constante',
            ],
            correctAnswer: 'h diminue et la vitesse v augmente (paradoxe du frottement orbital)',
            hint: `E_m = -GMm/(2r) diminue ⇒ r diminue ⇒ E_c = -E_m augmente.`,
            ruleApplied: 'Paradoxe énergétique en orbite',
            mathExpression: `ΔE_m < 0 ⇒ r ↓ ⇒ v = √(GM/r) ↑`,
            explanation: `Quand le satellite perd de l'altitude sous l'effet de la traînée, la gravité l'accélère.`,
          },
          {
            questionPrompt: `Calcule la vitesse de libération v_lib = √2 · v à cette altitude r (en km/s, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((vOrb * Math.SQRT2) / 1000),
            unit: 'km/s',
            hint: `½ m v_lib² + E_p = 0.`,
            ruleApplied: 'Vitesse de libération',
            mathExpression: `v_lib = √2 × ${fmtP(vOrb / 1000)} ≈ ${fmtP((vOrb * Math.SQRT2) / 1000)} km/s`,
            explanation: `v_lib ≈ ${fmtP((vOrb * Math.SQRT2) / 1000)} km/s.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Orbite circulaire à h = ${h} km : Kepler, bilan énergétique et paradoxe`,
          `Un satellite de masse m = 500 kg évolue en orbite circulaire à l'altitude h = ${h} km autour de la Terre (R_T = 6400 km, g₀ = 9,8 m/s²).`,
          items
        );
      }

      if (vMod === 1) {
        // Orbite géostationnaire & ellipse de transfert de Hohmann
        const RT = 6400; // km
        const r1 = 6800; // orbite basse (h=400 km)
        const r2 = 42200; // orbite géostationnaire (r2 ≈ 42200 km)
        const aTrans = (r1 + r2) / 2; // 24500 km
        const T1_min = 93; // approx, calculons exact:
        const g0 = 9.8;
        const mu = g0 * (RT * 1000) ** 2; // G*M_T
        const v1 = Math.sqrt(mu / (r1 * 1000)) / 1000; // km/s
        const v2 = Math.sqrt(mu / (r2 * 1000)) / 1000; // km/s
        // Vitesse au périgée de l'ellipse de transfert : v_p = sqrt(mu*(2/r1 - 1/aTrans))
        const vp = Math.sqrt(mu * (2 / (r1 * 1000) - 1 / (aTrans * 1000))) / 1000;
        const va = Math.sqrt(mu * (2 / (r2 * 1000) - 1 / (aTrans * 1000))) / 1000;
        const dv1 = vp - v1;
        const dv2 = v2 - va;
        // Demi-période de transfert par 3e loi de Kepler : T_trans / 2 = pi * sqrt(a^3 / mu)
        const tTransH = (Math.PI * Math.sqrt(Math.pow(aTrans * 1000, 3) / mu)) / 3600;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un satellite géostationnaire a pour période sidérale T = 23 h 56 min (≈ 86 164 s). Dans quel plan et quel sens évolue-t-il obligatoirement ?`,
            questionType: 'qcm',
            options: [
              'Plan équatorial, même sens de rotation que la Terre (Ouest → Est)',
              'Plan polaire, sens quelconque',
              'Plan équatorial, sens rétrograde (Est → Ouest)',
              'Plan incliné à 45°',
            ],
            correctAnswer: 'Plan équatorial, même sens de rotation que la Terre (Ouest → Est)',
            hint: `Pour paraître immobile à la verticale d'un point du globe (ex: Libreville), sa vitesse angulaire vectorielle doit coïncider avec celle de la Terre.`,
            ruleApplied: 'Conditions de géostationnarité',
            mathExpression: `Orbite circulaire équatoriale directe, T = T_sid`,
            explanation: `Trois conditions : circulaire, équatoriale et directe de période égale au jour sidéral.`,
          },
          {
            questionPrompt: `On transfère un satellite d'une orbite basse circulaire r₁ = 6800 km vers l'orbite géostationnaire r₂ = 42 200 km par une demi-ellipse de Hohmann. Calcule le demi-grand axe a de l'ellipse de transfert (en km).`,
            questionType: 'numeric',
            correctAnswer: String(aTrans),
            unit: 'km',
            hint: `2a = r₁ + r₂.`,
            ruleApplied: 'Géométrie de l’ellipse de transfert',
            mathExpression: `a = (6800 + 42200)/2 = ${aTrans} km`,
            explanation: `a = ${aTrans} km.`,
          },
          {
            questionPrompt: `Calcule la vitesse circulaire v₁ sur l'orbite basse r₁ = 6800 km (en km/s, avec GM_T = 3,986×10¹⁴ m³/s² ou g₀R_T², arrondi à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v1),
            unit: 'km/s',
            hint: `v₁ = √(g₀ R_T² / r₁).`,
            ruleApplied: 'Vitesse circulaire',
            mathExpression: `v₁ ≈ ${fmtP(v1)} km/s`,
            explanation: `v₁ ≈ ${fmtP(v1)} km/s.`,
          },
          {
            questionPrompt: `Calcule la vitesse circulaire v₂ sur l'orbite géostationnaire r₂ = 42 200 km (en km/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v2),
            unit: 'km/s',
            hint: `v₂ = v₁ · √(r₁ / r₂).`,
            ruleApplied: 'Loi d’échelle des vitesses orbitales',
            mathExpression: `v₂ ≈ ${fmtP(v2)} km/s`,
            explanation: `v₂ ≈ ${fmtP(v2)} km/s.`,
          },
          {
            questionPrompt: `Par conservation de E_m sur l'ellipse de transfert (E_m = -GMm/(2a)), la vitesse au périgée vaut v_p = √[GM(2/r₁ - 1/a)]. Calcule v_p (en km/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vp),
            unit: 'km/s',
            hint: `Utilise la formule des forces vives (vis-viva).`,
            ruleApplied: 'Équation des forces vives (vis-viva)',
            mathExpression: `v_p ≈ ${fmtP(vp)} km/s`,
            explanation: `v_p ≈ ${fmtP(vp)} km/s.`,
          },
          {
            questionPrompt: `Calcule la première impulsion de vitesse Δv₁ = v_p - v₁ nécessaire au périgée pour injecter le satellite sur l'ellipse (en km/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(dv1),
            unit: 'km/s',
            hint: `v_p - v₁.`,
            ruleApplied: 'Impulsion de Hohmann au périgée',
            mathExpression: `Δv₁ = ${fmtP(vp)} - ${fmtP(v1)} ≈ ${fmtP(dv1)} km/s`,
            explanation: `Δv₁ ≈ ${fmtP(dv1)} km/s.`,
          },
          {
            questionPrompt: `Par la 2e loi de Kepler (loi des aires : r₁ v_p = r₂ v_a), calcule la vitesse à l'apogée v_a sur l'ellipse de transfert (en km/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(va),
            unit: 'km/s',
            hint: `v_a = v_p · (r₁ / r₂).`,
            ruleApplied: '2e loi de Kepler (conservation du moment cinétique)',
            mathExpression: `v_a = ${fmtP(vp)} × (6800/42200) ≈ ${fmtP(va)} km/s`,
            explanation: `v_a ≈ ${fmtP(va)} km/s.`,
          },
          {
            questionPrompt: `Calcule la seconde impulsion Δv₂ = v₂ - v_a nécessaire à l'apogée pour circulariser l'orbite (en km/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(dv2),
            unit: 'km/s',
            hint: `v₂ - v_a.`,
            ruleApplied: 'Circularisation à l’apogée',
            mathExpression: `Δv₂ = ${fmtP(v2)} - ${fmtP(va)} ≈ ${fmtP(dv2)} km/s`,
            explanation: `Δv₂ ≈ ${fmtP(dv2)} km/s.`,
          },
          {
            questionPrompt: `Calcule le coût total Δv_total = Δv₁ + Δv₂ (en km/s, arrondi à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(dv1 + dv2),
            unit: 'km/s',
            hint: `Additionne Δv₁ et Δv₂.`,
            ruleApplied: 'Bilan propulsif',
            mathExpression: `Δv_total ≈ ${fmtP(dv1 + dv2)} km/s`,
            explanation: `Il faut environ ${fmtP(dv1 + dv2)} km/s de Δv.`,
          },
          {
            questionPrompt: `Par la 3e loi de Kepler, calcule la durée du transfert Δt = π √(a³ / (GM_T)) (demi-période de l'ellipse, en heures, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tTransH),
            unit: 'h',
            hint: `T_ellipse = 2π √(a³ / μ) ; le transfert dure T_ellipse / 2.`,
            ruleApplied: '3e loi de Kepler appliquée à l’ellipse',
            mathExpression: `Δt ≈ ${fmtP(tTransH)} h`,
            explanation: `Le transfert dure environ ${fmtP(tTransH)} heures.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Orbite géostationnaire et transfert elliptique de Hohmann`,
          `Transfert d'un satellite depuis l'orbite basse r₁ = 6800 km vers l'orbite géostationnaire r₂ = 42 200 km.`,
          items
        );
      }

      // vMod === 2: Gravitation planétaire, point d'équilibre Terre-Lune & Kepler
      const dTL = 384000; // km
      // M_T / M_L = 81 -> x / (d - x) = sqrt(81) = 9 => x = 0.9 * dTL !
      const ratioM = pickRandom([81, 100]); // 81 réel, 100 variante modèle
      const rootM = Math.sqrt(ratioM);
      const xEq = (rootM / (1 + rootM)) * dTL; // km depuis la Terre
      const xMoonKm = dTL - xEq;
      const gRatio = 1 / 6; // pesanteur lunaire

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On modélise le système Terre-Lune séparé de D = 384 000 km avec un rapport de masses M_T / M_L = ${ratioM}. Exprime la force d'attraction de la Terre sur un point M situé à la distance x du centre de la Terre.`,
          questionType: 'qcm',
          options: [
            'F_T = G · M_T · m / x²',
            'F_T = G · M_T · m / x',
            'F_T = G · M_T / x²',
            'F_T = G · M_T · m / (D - x)²',
          ],
          correctAnswer: 'F_T = G · M_T · m / x²',
          hint: `Loi de Newton en 1/x².`,
          ruleApplied: 'Interaction gravitationnelle',
          mathExpression: `F_{T→M} = G M_T m / x²`,
          explanation: `La force est proportionnelle à l'inverse du carré de la distance.`,
        },
        {
          questionPrompt: `En quel point d'abscisse x ∈ ]0 ; D[ sur la droite Terre-Lune la résultante des attractions gravitationnelles de la Terre et de la Lune s'annule-t-elle ? Écris la relation entre x et D - x.`,
          questionType: 'qcm',
          options: [
            `x / (D - x) = √(M_T / M_L) = ${rootM}`,
            `x / (D - x) = M_T / M_L = ${ratioM}`,
            `x / (D - x) = 1 / ${rootM}`,
            `x = D / 2`,
          ],
          correctAnswer: `x / (D - x) = √(M_T / M_L) = ${rootM}`,
          hint: `M_T / x² = M_L / (D - x)².`,
          ruleApplied: 'Équilibre gravitationnel (point L₁ statique)',
          mathExpression: `(x / (D - x))² = ${ratioM} ⇒ x / (D - x) = ${rootM}`,
          explanation: `Comme x > 0 et D - x > 0, la racine donne x/(D-x) = ${rootM}.`,
        },
        {
          questionPrompt: `Calcule la distance x depuis le centre de la Terre où le champ s'annule (en km, arrondie à 1 km près).`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(xEq)),
          unit: 'km',
          hint: `x = (${rootM} / ${1 + rootM}) × 384 000.`,
          ruleApplied: 'Résolution algébrique',
          mathExpression: `x = (${rootM}/${1 + rootM}) × 384 000 ≈ ${Math.round(xEq)} km`,
          explanation: `Le point d'équilibre est à ${Math.round(xEq)} km de la Terre.`,
        },
        {
          questionPrompt: `Quelle est la distance restante D - x jusqu'au centre de la Lune (en km, arrondie à 1 km près) ?`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(xMoonKm)),
          unit: 'km',
          hint: `384 000 - ${Math.round(xEq)}.`,
          ruleApplied: 'Complément à la distance Terre-Lune',
          mathExpression: `D - x = 384 000 / ${1 + rootM} ≈ ${Math.round(xMoonKm)} km`,
          explanation: `Ce point n'est qu'à ${Math.round(xMoonKm)} km de la Lune.`,
        },
        {
          questionPrompt: `À la surface de la Lune (R_L = 1740 km), g_L = 1,62 m/s². Calcule la vitesse de libération v_lib depuis le sol lunaire (en km/s, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(Math.sqrt(2 * 1.62 * 1740000) / 1000),
          unit: 'km/s',
          hint: `v_lib = √(2 g_L R_L).`,
          ruleApplied: 'Vitesse d’évasion d’un astre',
          mathExpression: `v_lib = √(2 × 1,62 × 1,74×10⁶) ≈ ${fmtP(Math.sqrt(2 * 1.62 * 1740000) / 1000)} km/s`,
          explanation: `v_lib ≈ ${fmtP(Math.sqrt(2 * 1.62 * 1740000) / 1000)} km/s (contre 11,2 km/s sur Terre).`,
        },
        {
          questionPrompt: `En supposant l'orbite lunaire circulaire de rayon D = 3,84×10⁸ m et de période T_L = 27,32 jours (= 2,36×10⁶ s), calcule la masse de la Terre M_T via la 3e loi de Kepler (en 10²⁴ kg, avec G = 6,67×10⁻¹¹, arrondie à 0,01).`,
          questionType: 'numeric',
          correctAnswer: fmtP((4 * Math.PI * Math.PI * Math.pow(3.84e8, 3)) / (6.67e-11 * Math.pow(2.36e6, 2)) / 1e24),
          unit: '×10²⁴ kg',
          hint: `M_T = (4π² D³) / (G T_L²).`,
          ruleApplied: 'Pesée des astres par la 3e loi de Kepler',
          mathExpression: `M_T = 4π²(3,84×10⁸)³ / (6,67×10⁻¹¹ × (2,36×10⁶)²) ≈ 6,02×10²⁴ kg`,
          explanation: `La 3e loi de Kepler permet de mesurer M_T ≈ 6,0×10²⁴ kg.`,
        },
        {
          questionPrompt: `Calcule la vitesse orbitale moyenne de la Lune autour de la Terre (en km/s, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP((2 * Math.PI * 3.84e8) / 2.36e6 / 1000),
          unit: 'km/s',
          hint: `v = 2π D / T_L.`,
          ruleApplied: 'Vitesse orbitale moyenne',
          mathExpression: `v_L = 2π×384 000 / 2,36×10⁶ ≈ ${fmtP((2 * Math.PI * 3.84e8) / 2.36e6 / 1000)} km/s`,
          explanation: `La Lune orbite à environ 1,02 km/s.`,
        },
        {
          questionPrompt: `Calcule l'accélération centripète a_L de la Lune sur son orbite autour de la Terre (en mm/s², soit 10⁻³ m/s², arrondie à 0,01).`,
          questionType: 'numeric',
          correctAnswer: fmtP((((2 * Math.PI) / 2.36e6) ** 2 * 3.84e8) * 1000),
          unit: 'mm/s²',
          hint: `a_L = v_L² / D = (4π² D) / T_L², puis ×1000.`,
          ruleApplied: 'Accélération centripète historique de Newton',
          mathExpression: `a_L ≈ ${fmtP((((2 * Math.PI) / 2.36e6) ** 2 * 3.84e8) * 1000)} mm/s²`,
          explanation: `Newton compara a_L ≈ 2,72 mm/s² à g₀ = 9,8 m/s² et observa le facteur (60)² = 3600.`,
        },
        {
          questionPrompt: `Quel rapport g₀ / a_L ≈ 9,81 / 0,00272 vérifie historiquement la loi en 1/r² (D ≈ 60 R_T) ?`,
          questionType: 'numeric',
          correctAnswer: '3600',
          hint: `60².`,
          ruleApplied: 'Vérification de la loi en carré inverse',
          mathExpression: `(D / R_T)² ≈ 60² = 3600`,
          explanation: `La lune étant 60 fois plus loin que la surface terrestre, l'attraction y est 3600 fois plus faible.`,
        },
        {
          questionPrompt: `L'énergie mécanique d'un satellite en orbite elliptique de demi-grand axe a ne dépend que de :`,
          questionType: 'qcm',
          options: [
            'a (demi-grand axe), et non de l’excentricité e',
            'l’excentricité e uniquement',
            'la distance au périgée uniquement',
            'le demi-petit axe b uniquement',
          ],
          correctAnswer: 'a (demi-grand axe), et non de l’excentricité e',
          hint: `E_m = -G M m / (2a).`,
          ruleApplied: 'Invariance énergétique des orbites kepleriennes',
          mathExpression: `E_m = -GMm / (2a)`,
          explanation: `Toutes les orbites de même demi-grand axe a ont la même énergie mécanique et la même période T.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Champ nul Terre-Lune, pesée de la Terre et vitesse d'évasion`,
        `Étude du système Terre-Lune (D = 384 000 km, M_T/M_L = ${ratioM}, R_L = 1740 km, g_L = 1,62 m/s²).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 4. OSCILLATEURS MÉCANIQUES & ÉNERGIE
    // -------------------------------------------------------------------------
    case 'physTc-oscillations-energie': {
      if (vMod === 0) {
        // Oscillateur élastique horizontal (m, k, Xm, phi)
        const k = pickRandom([40, 80, 100]);
        const m = k === 40 ? 0.1 : k === 80 ? 0.2 : 0.4; // omega0 = sqrt(400)=20 ou sqrt(250)=15.81 -> k=40,m=0.1 => w0=20 ; k=80,m=0.2 => w0=20 ; k=100,m=0.25 => w0=20 !
        const mExact = k === 40 ? 0.1 : k === 80 ? 0.2 : 0.25;
        const w0 = 20; // rad/s exact !
        const T0 = (2 * Math.PI) / w0;
        const xmCm = pickRandom([4, 6, 8]); // cm
        const xm = xmCm / 100; // m
        const vMax = w0 * xm;
        const aMax = w0 * w0 * xm;
        const Em = 0.5 * k * xm * xm;
        const xHalf = xm / 2;
        const EpHalf = 0.5 * k * xHalf * xHalf;
        const EcHalf = Em - EpHalf;
        const vHalf = Math.sqrt((2 * EcHalf) / mExact);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un pendule élastique horizontal (m = ${fmtP(mExact * 1000, 0)} g, k = ${k} N/m) oscille sans frottement avec une amplitude X_m = ${xmCm} cm (lâché sans vitesse en x = +X_m à t = 0). Calcule la pulsation propre ω₀.`,
            questionType: 'numeric',
            correctAnswer: String(w0),
            unit: 'rad/s',
            hint: `ω₀ = √(k / m). Convertis m en kg.`,
            ruleApplied: 'Pulsation propre de l’oscillateur harmonique',
            mathExpression: `ω₀ = √(${k} / ${mExact}) = √400 = 20 rad/s`,
            explanation: `ω₀ = 20 rad/s.`,
          },
          {
            questionPrompt: `Calcule la période propre T₀ en secondes (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(T0, 3),
            unit: 's',
            hint: `T₀ = 2π / ω₀.`,
            ruleApplied: 'Période propre',
            mathExpression: `T₀ = 2π / 20 = π/10 ≈ ${fmtP(T0, 3)} s`,
            explanation: `T₀ ≈ ${fmtP(T0, 3)} s.`,
          },
          {
            questionPrompt: `Quelle est l'équation horaire x(t) (en mètres) sachant x(0) = +${xm} m et v(0) = 0 ?`,
            questionType: 'qcm',
            options: [
              `x(t) = ${xm} cos(20t)`,
              `x(t) = ${xm} sin(20t)`,
              `x(t) = ${xm} cos(20t + π/2)`,
              `x(t) = ${xm} cos(20t + π)`,
            ],
            correctAnswer: `x(t) = ${xm} cos(20t)`,
            hint: `x(0) = X_m cos φ = X_m ⇒ φ = 0.`,
            ruleApplied: 'Conditions initiales de phase',
            mathExpression: `x(0) = +X_m, x'(0) = 0 ⇒ φ = 0`,
            explanation: `x(t) = ${xm} cos(20t).`,
          },
          {
            questionPrompt: `Calcule la vitesse maximale v_max = ω₀ X_m lors du passage à l'équilibre (en m/s).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vMax),
            unit: 'm/s',
            hint: `20 × ${xm}.`,
            ruleApplied: 'Vitesse maximale harmonique',
            mathExpression: `v_max = 20 × ${xm} = ${fmtP(vMax)} m/s`,
            explanation: `v_max = ${fmtP(vMax)} m/s.`,
          },
          {
            questionPrompt: `Calcule la norme de l'accélération maximale a_max = ω₀² X_m aux extrémités.`,
            questionType: 'numeric',
            correctAnswer: fmtP(aMax),
            unit: 'm/s²',
            hint: `400 × ${xm}.`,
            ruleApplied: 'Accélération maximale',
            mathExpression: `a_max = 400 × ${xm} = ${fmtP(aMax)} m/s²`,
            explanation: `a_max = ${fmtP(aMax)} m/s².`,
          },
          {
            questionPrompt: `Calcule l'énergie mécanique totale E_m du système (en mJ, soit 10⁻³ J).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Em * 1000),
            unit: 'mJ',
            hint: `E_m = ½ k X_m², puis ×1000.`,
            ruleApplied: 'Énergie mécanique d’un oscillateur élastique',
            mathExpression: `E_m = 0,5 × ${k} × (${xm})² = ${fmtP(Em * 1000)} mJ`,
            explanation: `E_m = ${fmtP(Em * 1000)} mJ.`,
          },
          {
            questionPrompt: `À la position x = X_m / 2 = ${xmCm / 2} cm, quelle fraction E_p / E_m représente l'énergie potentielle élastique (en %) ?`,
            questionType: 'numeric',
            correctAnswer: '25',
            hint: `E_p = ½ k (X_m / 2)² = ¼ E_m.`,
            ruleApplied: 'Partage quadratique de l’énergie',
            mathExpression: `E_p / E_m = (x / X_m)² = (1/2)² = 0,25 = 25 %`,
            explanation: `À mi-amplitude, 25 % de l'énergie est potentielle et 75 % est cinétique.`,
          },
          {
            questionPrompt: `Calcule la vitesse |v| du solide lorsqu'il passe par x = ${xmCm / 2} cm (arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vHalf),
            unit: 'm/s',
            hint: `v = v_max · √(3)/2.`,
            ruleApplied: 'Conservation de l’énergie mécanique',
            mathExpression: `v = ${fmtP(vMax)} × (√3/2) ≈ ${fmtP(vHalf)} m/s`,
            explanation: `|v| ≈ ${fmtP(vHalf)} m/s.`,
          },
          {
            questionPrompt: `À quel instant minimal t₁ > 0 l'énergie cinétique E_c et l'énergie potentielle E_p deviennent-elles égales (E_c = E_p = E_m/2) ? (en ms, arrondi à 0,1 près)`,
            questionType: 'numeric',
            correctAnswer: fmtP((T0 / 8) * 1000, 1),
            unit: 'ms',
            hint: `cos²(ω₀ t₁) = 1/2 ⇒ ω₀ t₁ = π/4 ⇒ t₁ = T₀ / 8.`,
            ruleApplied: 'Équipartition instantanée de l’énergie',
            mathExpression: `t₁ = T₀ / 8 ≈ ${fmtP((T0 / 8) * 1000, 1)} ms`,
            explanation: `E_c = E_p dès t₁ = T₀/8 ≈ ${fmtP((T0 / 8) * 1000, 1)} ms.`,
          },
          {
            questionPrompt: `Quelle est la période de variation des énergies E_c(t) et E_p(t) (en s, arrondie à 0,001 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(T0 / 2, 3),
            unit: 's',
            hint: `cos²(ω₀ t) = ½[1 + cos(2ω₀ t)] oscille à la fréquence double.`,
            ruleApplied: 'Période énergétique T_E = T₀ / 2',
            mathExpression: `T_E = T₀ / 2 ≈ ${fmtP(T0 / 2, 3)} s`,
            explanation: `Les énergies oscillent deux fois plus vite que le mobile, avec période T₀/2.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Pendule élastique horizontal : équation horaire et bilan énergétique`,
          `Un solide (m = ${fmtP(mExact * 1000, 0)} g) attaché à un ressort (k = ${k} N/m) est lâché sans vitesse initiale depuis x₀ = +${xmCm} cm.`,
          items
        );
      }

      if (vMod === 1) {
        // Pendule élastique vertical suspendu
        const k = pickRandom([50, 100]);
        const m = k === 50 ? 0.5 : 1.0; // m*g = 5 N ou 10 N => allongement statique dl0 = m*g/k = 0.10 m = 10 cm !
        const g = 10;
        const dl0Cm = 10;
        const dl0 = 0.1;
        const w0 = Math.sqrt(k / m); // sqrt(100) = 10 rad/s exact !
        const T0 = (2 * Math.PI) / w0;
        const A_cm = pickRandom([4, 6]); // on tire encore de A cm vers le bas par rapport à l'équilibre
        const A = A_cm / 100;
        const vMax = w0 * A;
        const TmaxSpring = k * (dl0 + A); // tension maximale du ressort au point le plus bas
        const TminSpring = k * (dl0 - A); // tension minimale au point le plus haut
        const EmOsc = 0.5 * k * A * A;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un ressort vertical de raideur k = ${k} N/m porte une masse m = ${m} kg (g = 10 m/s²). Calcule l'allongement statique Δl₀ à l'équilibre (en cm).`,
            questionType: 'numeric',
            correctAnswer: String(dl0Cm),
            unit: 'cm',
            hint: `À l'équilibre, k·Δl₀ = m·g.`,
            ruleApplied: 'Équilibre statique du pendule vertical',
            mathExpression: `Δl₀ = (${m} × 10) / ${k} = 0,10 m = 10 cm`,
            explanation: `Δl₀ = 10 cm.`,
          },
          {
            questionPrompt: `En prenant l'origine z = 0 à la position d'équilibre (axe Oz descendant), quelle est l'équation différentielle du mouvement ?`,
            questionType: 'qcm',
            options: [
              `z'' + (k/m)z = 0 (le poids s'élimine grâce à k·Δl₀ = mg)`,
              `z'' + (k/m)z = g`,
              `z'' - (k/m)z = 0`,
              `z'' + (g/Δl₀)z = g`,
            ],
            correctAnswer: `z'' + (k/m)z = 0 (le poids s'élimine grâce à k·Δl₀ = mg)`,
            hint: `m z'' = m g - k(Δl₀ + z) = -k z.`,
            ruleApplied: 'Équation différentielle autour de l’équilibre',
            mathExpression: `z'' + (k/m)z = 0`,
            explanation: `Autour de la position d'équilibre, le poids est exactement compensé par la tension statique.`,
          },
          {
            questionPrompt: `Calcule la pulsation propre ω₀ des oscillations verticales.`,
            questionType: 'numeric',
            correctAnswer: fmtP(w0),
            unit: 'rad/s',
            hint: `ω₀ = √(k/m) = √(g/Δl₀).`,
            ruleApplied: 'Pulsation propre',
            mathExpression: `ω₀ = √(${k}/${m}) = 10 rad/s`,
            explanation: `ω₀ = 10 rad/s.`,
          },
          {
            questionPrompt: `Calcule la période propre T₀ (arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(T0, 3),
            unit: 's',
            hint: `2π / 10.`,
            ruleApplied: 'Période propre',
            mathExpression: `T₀ = 2π / 10 ≈ ${fmtP(T0, 3)} s`,
            explanation: `T₀ ≈ ${fmtP(T0, 3)} s.`,
          },
          {
            questionPrompt: `On tire la masse de z₀ = +${A_cm} cm sous sa position d'équilibre et on la lâche sans vitesse. Calcule sa vitesse maximale v_max au passage à l'équilibre.`,
            questionType: 'numeric',
            correctAnswer: fmtP(vMax),
            unit: 'm/s',
            hint: `v_max = ω₀ · z₀.`,
            ruleApplied: 'Vitesse maximale',
            mathExpression: `v_max = 10 × ${A} = ${fmtP(vMax)} m/s`,
            explanation: `v_max = ${fmtP(vMax)} m/s.`,
          },
          {
            questionPrompt: `Calcule la tension maximale T_max du ressort au point le plus bas de l'oscillation.`,
            questionType: 'numeric',
            correctAnswer: fmtP(TmaxSpring),
            unit: 'N',
            hint: `Allongement total = Δl₀ + z₀.`,
            ruleApplied: 'Loi de Hooke',
            mathExpression: `T_max = ${k} × (0,10 + ${A}) = ${fmtP(TmaxSpring)} N`,
            explanation: `Au point le plus bas, T_max = ${fmtP(TmaxSpring)} N.`,
          },
          {
            questionPrompt: `Calcule la tension minimale T_min du ressort au point le plus haut de l'oscillation.`,
            questionType: 'numeric',
            correctAnswer: fmtP(TminSpring),
            unit: 'N',
            hint: `Allongement total = Δl₀ - z₀.`,
            ruleApplied: 'Loi de Hooke au sommet',
            mathExpression: `T_min = ${k} × (0,10 - ${A}) = ${fmtP(TminSpring)} N`,
            explanation: `Comme T_min > 0, le ressort reste toujours tendu durant tout le cycle.`,
          },
          {
            questionPrompt: `Quelle est l'accélération algébrique z''(0) juste à l'instant du lâcher en z₀ = +${A_cm} cm (axe descendant) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(-w0 * w0 * A),
            unit: 'm/s²',
            hint: `z'' = -ω₀² z.`,
            ruleApplied: 'Accélération de rappel',
            mathExpression: `z''(0) = -100 × ${A} = ${fmtP(-w0 * w0 * A)} m/s²`,
            explanation: `L'accélération est dirigée vers le haut (négative) et vaut ${fmtP(-w0 * w0 * A)} m/s².`,
          },
          {
            questionPrompt: `Calcule l'énergie mécanique de vibration E_m = ½ k z₀² (en mJ).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EmOsc * 1000),
            unit: 'mJ',
            hint: `0,5 × ${k} × (${A})² × 1000.`,
            ruleApplied: 'Énergie potentielle équivalente (gravité + ressort)',
            mathExpression: `E_m = ½ × ${k} × ${A * A} = ${fmtP(EmOsc * 1000)} mJ`,
            explanation: `Dans le repère centré à l'équilibre, l'énergie mécanique totale vaut ½kz² + ½mv² = ${fmtP(EmOsc * 1000)} mJ.`,
          },
          {
            questionPrompt: `Si l'on double la masse m (en la passant à ${2 * m} kg) sans changer k, par quel facteur est multipliée la période T₀ ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(Math.SQRT2),
            hint: `T₀ = 2π√(m/k).`,
            ruleApplied: 'Loi d’échelle de la période',
            mathExpression: `T₀' / T₀ = √2 ≈ 1,41`,
            explanation: `La période est multipliée par √2 ≈ 1,41.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Pendule élastique vertical : équilibre, tensions extrêmes et énergie`,
          `Un ressort vertical (k = ${k} N/m) soutient une masse m = ${m} kg (g = 10 m/s²), écartée de z₀ = ${A_cm} cm sous l'équilibre.`,
          items
        );
      }

      // vMod === 2: Pendule simple / pesant aux grands & petits angles (conservation d'énergie + tension)
      const l = pickRandom([1.0, 2.5]); // m
      const m = pickRandom([0.4, 0.5]); // kg
      const g = 10;
      const w0 = Math.sqrt(g / l);
      const T0 = (2 * Math.PI) / w0;
      // Lâché depuis angle theta_0 = 60° (cos 60° = 0.5) !
      const vMax = Math.sqrt(2 * g * l * 0.5); // sqrt(g*l) ! Exact !
      // Tension au passage par la verticale theta = 0 : T - mg = m v_max^2 / l = mg => T = 2 mg !
      const Tvert = 2 * m * g;
      // Pour pendule pesant composé : tige de longueur L et masse M, J_Delta = (1/3) M L^2, d = L/2 => l_eq = (2/3) L
      const hDepart = l * 0.5;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Un pendule simple de longueur l = ${l} m et de masse m = ${m} kg est écarté d'un angle θ₀ = 60° et lâché sans vitesse initiale (g = 10 m/s²). Calcule la hauteur de chute h = l(1 - cos 60°) jusqu'au point le plus bas.`,
          questionType: 'numeric',
          correctAnswer: fmtP(hDepart),
          unit: 'm',
          hint: `cos(60°) = 0,5.`,
          ruleApplied: 'Dénivelé circulaire',
          mathExpression: `h = ${l} × (1 - 0,5) = ${fmtP(hDepart)} m`,
          explanation: `La masse descend de h = ${fmtP(hDepart)} m.`,
        },
        {
          questionPrompt: `Par le théorème de l'énergie cinétique, calcule la vitesse v_max au passage par la verticale (θ = 0) (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(vMax),
          unit: 'm/s',
          hint: `v_max = √(2 g h) = √(g l).`,
          ruleApplied: 'Conservation de l’énergie mécanique',
          mathExpression: `v_max = √(10 × ${l}) ≈ ${fmtP(vMax)} m/s`,
          explanation: `v_max = √${10 * l} ≈ ${fmtP(vMax)} m/s.`,
        },
        {
          questionPrompt: `Calcule la tension T du fil au point le plus bas (θ = 0) par le repère de Frenet.`,
          questionType: 'numeric',
          correctAnswer: fmtP(Tvert),
          unit: 'N',
          hint: `T - mg = m v_max² / l = mg ⇒ T = 2 mg.`,
          ruleApplied: '2e loi de Newton au point le plus bas',
          mathExpression: `T = 2 × ${m} × 10 = ${fmtP(Tvert)} N`,
          explanation: `À θ₀ = 60°, la tension au point le plus bas vaut toujours exactement le double du poids (${fmtP(Tvert)} N).`,
        },
        {
          questionPrompt: `Calcule l'énergie mécanique totale E_m par rapport à la référence E_p(θ = 0) = 0 (en J).`,
          questionType: 'numeric',
          correctAnswer: fmtP(m * g * hDepart),
          unit: 'J',
          hint: `E_m = m g h.`,
          ruleApplied: 'Énergie potentielle de pesanteur',
          mathExpression: `E_m = ${m} × 10 × ${hDepart} = ${fmtP(m * g * hDepart)} J`,
          explanation: `E_m = ${fmtP(m * g * hDepart)} J.`,
        },
        {
          questionPrompt: `Calcule la vitesse angulaire maximale θ'_max = v_max / l en rad/s (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(vMax / l),
          unit: 'rad/s',
          hint: `v_max / ${l}.`,
          ruleApplied: 'Cinématique angulaire',
          mathExpression: `θ'_max = ${fmtP(vMax)} / ${l} ≈ ${fmtP(vMax / l)} rad/s`,
          explanation: `θ'_max ≈ ${fmtP(vMax / l)} rad/s.`,
        },
        {
          questionPrompt: `Pour de petites oscillations (sin θ ≈ θ), quelle est la pulsation propre ω₀ = √(g / l) (arrondie à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(w0),
          unit: 'rad/s',
          hint: `√(10 / ${l}).`,
          ruleApplied: 'Linéarisation du pendule simple',
          mathExpression: `ω₀ = √(10 / ${l}) = ${fmtP(w0)} rad/s`,
          explanation: `ω₀ = ${fmtP(w0)} rad/s.`,
        },
        {
          questionPrompt: `Calcule la période des petites oscillations T₀ = 2π√(l / g) (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(T0),
          unit: 's',
          hint: `2π / ${fmtP(w0)}.`,
          ruleApplied: 'Formule de Galilée-Huygens',
          mathExpression: `T₀ = 2π / ${fmtP(w0)} ≈ ${fmtP(T0)} s`,
          explanation: `T₀ ≈ ${fmtP(T0)} s.`,
        },
        {
          questionPrompt: `Quelle est la tension du fil au moment du lâcher en θ₀ = 60° (où v = 0) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(m * g * 0.5),
          unit: 'N',
          hint: `Selon le fil : T - mg cos(60°) = m v² / l = 0.`,
          ruleApplied: 'Projection radiale au point de rebroussement',
          mathExpression: `T = ${m}×10×0,5 = ${fmtP(m * g * 0.5)} N`,
          explanation: `Aux extrémités, v = 0 donc T = mg cos θ₀ = ${fmtP(m * g * 0.5)} N.`,
        },
        {
          questionPrompt: `Quelle est la norme de l'accélération tangentielle |a_T| = g sin(60°) juste au moment du lâcher (arrondie à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(g * (Math.sqrt(3) / 2)),
          unit: 'm/s²',
          hint: `10 × √3/2.`,
          ruleApplied: 'Accélération tangentielle',
          mathExpression: `|a_T| = 10 × 0,866 = ${fmtP(g * (Math.sqrt(3) / 2))} m/s²`,
          explanation: `|a_T| ≈ ${fmtP(g * (Math.sqrt(3) / 2))} m/s².`,
        },
        {
          questionPrompt: `Si l'on remplace la masse ponctuelle par une tige homogène de même longueur L = ${l} m pivotant autour d'une extrémité (J_Δ = ⅓ML², d = L/2), quelle est la longueur du pendule simple synchrone l_eq = J_Δ / (M d) (arrondie à 0,01) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP((2 * l) / 3),
          unit: 'm',
          hint: `(⅓ L²) / (½ L) = (2/3) L.`,
          ruleApplied: 'Pendule pesant composé',
          mathExpression: `l_eq = (2/3) × ${l} ≈ ${fmtP((2 * l) / 3)} m`,
          explanation: `La tige bat comme un pendule simple de longueur (2/3)L ≈ ${fmtP((2 * l) / 3)} m.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Pendule simple à grand angle (60°), tension du fil et pendule pesant`,
        `Un pendule simple (l = ${l} m, m = ${m} kg) est lâché sans vitesse depuis θ₀ = 60° (g = 10 m/s²).`,
        items
      );
    }

    default:
      return null;
  }
}
