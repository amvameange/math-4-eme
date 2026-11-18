import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom } from './types';
import { assembleHardPhysExercise, fmtP, HardQuestionSpec } from './tcHardPhysHelpers';

export function generateHardPhysCh5to8(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 5. DIPÔLES RC & RL
    // -------------------------------------------------------------------------
    case 'physTc-dipoles-rc-rl': {
      if (vMod === 0) {
        const E = pickRandom([10, 12, 15]); // V
        const R = pickRandom([2000, 5000]); // Ohm
        const C_uF = pickRandom([10, 20]); // uF
        const C = C_uF * 1e-6;
        const tauMs = R * C * 1000; // ms
        const i0Ma = (E / R) * 1000; // mA
        const uAtTau = E * (1 - Math.exp(-1));
        const tHalfMs = (tauMs * Math.log(2));
        const EcMJ = 0.5 * C * E * E * 1000; // mJ

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un condensateur initialement déchargé (C = ${C_uF} µF) est chargé à travers R = ${R / 1000} kΩ par un générateur idéal de f.é.m. E = ${E} V. Calcule la constante de temps τ = R·C (en ms).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tauMs),
            unit: 'ms',
            hint: `Convertis R en Ω (${R}) et C en F (${C_uF}×10⁻⁶), puis ×1000 pour ms.`,
            ruleApplied: 'Constante de temps d’un dipôle RC',
            mathExpression: `τ = ${R} × ${C_uF}×10⁻⁶ = ${fmtP(tauMs / 1000, 3)} s = ${fmtP(tauMs)} ms`,
            explanation: `τ = ${fmtP(tauMs)} ms.`,
          },
          {
            questionPrompt: `Quelle est l'équation différentielle vérifiée par u_C(t) durant la charge ?`,
            questionType: 'qcm',
            options: [
              `du_C/dt + u_C / τ = E / τ`,
              `du_C/dt - u_C / τ = E / τ`,
              `τ · du_C/dt + u_C = 0`,
              `d²u_C/dt² + u_C / τ = E`,
            ],
            correctAnswer: `du_C/dt + u_C / τ = E / τ`,
            hint: `Loi des mailles : R C (du_C/dt) + u_C = E.`,
            ruleApplied: 'Loi des mailles sur le circuit RC',
            mathExpression: `RC (du_C/dt) + u_C = E ⇔ du_C/dt + u_C/τ = E/τ`,
            explanation: `C'est une équation différentielle linéaire du 1er ordre à second membre constant.`,
          },
          {
            questionPrompt: `Calcule l'intensité initiale du courant i(0⁺) à l'instant de la fermeture de l'interrupteur (en mA).`,
            questionType: 'numeric',
            correctAnswer: fmtP(i0Ma),
            unit: 'mA',
            hint: `À t = 0⁺, u_C(0⁺) = 0 par continuité ⇒ u_R(0⁺) = E.`,
            ruleApplied: 'Continuité de u_C aux bornes du condensateur',
            mathExpression: `i(0⁺) = E / R = ${E} / ${R} = ${fmtP(i0Ma)} mA`,
            explanation: `i(0⁺) = ${fmtP(i0Ma)} mA.`,
          },
          {
            questionPrompt: `Calcule la tension u_C(τ) atteinte à l'instant t = τ (arrondie à 0,01 V près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(uAtTau),
            unit: 'V',
            hint: `u_C(τ) = E (1 - e⁻¹) ≈ 0,632·E.`,
            ruleApplied: 'Solution exponentielle de charge',
            mathExpression: `u_C(τ) = ${E} × (1 - e⁻¹) ≈ ${fmtP(uAtTau)} V`,
            explanation: `À t = τ, le condensateur est chargé à 63,2 % : ${fmtP(uAtTau)} V.`,
          },
          {
            questionPrompt: `Calcule le temps de demi-charge t_{1/2} tel que u_C(t_{1/2}) = E/2 (en ms, arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tHalfMs),
            unit: 'ms',
            hint: `1 - e^{-t_{1/2}/τ} = 0,5 ⇒ t_{1/2} = τ ln(2).`,
            ruleApplied: 'Temps caractéristique de demi-charge',
            mathExpression: `t_{1/2} = ${fmtP(tauMs)} × ln(2) ≈ ${fmtP(tHalfMs)} ms`,
            explanation: `t_{1/2} ≈ ${fmtP(tHalfMs)} ms.`,
          },
          {
            questionPrompt: `Calcule la charge électrique maximale Q_max = C·E portée par l'armature positive en régime permanent (en µC).`,
            questionType: 'numeric',
            correctAnswer: fmtP(C_uF * E),
            unit: 'µC',
            hint: `${C_uF} µF × ${E} V.`,
            ruleApplied: 'Relation charge-tension',
            mathExpression: `Q_max = ${C_uF} × ${E} = ${C_uF * E} µC`,
            explanation: `Q_max = ${C_uF * E} µC.`,
          },
          {
            questionPrompt: `Calcule l'énergie électrostatique finale E_e = ½ C E² stockée dans le condensateur (en mJ).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EcMJ),
            unit: 'mJ',
            hint: `0,5 × ${C_uF}×10⁻⁶ × ${E}² × 1000.`,
            ruleApplied: 'Énergie emmagasinée dans un condensateur',
            mathExpression: `E_e = 0,5 × ${C_uF}×10⁻³ × ${E * E} = ${fmtP(EcMJ)} mJ`,
            explanation: `E_e = ${fmtP(EcMJ)} mJ.`,
          },
          {
            questionPrompt: `Quelle énergie totale E_gén = Q_max · E a été fournie par le générateur durant toute la charge (en mJ) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(2 * EcMJ),
            unit: 'mJ',
            hint: `E_gén = ∫₀^∞ E·i(t) dt = E·Q_max = C E².`,
            ruleApplied: 'Travail du générateur de tension constante',
            mathExpression: `E_gén = C E² = 2 E_e = ${fmtP(2 * EcMJ)} mJ`,
            explanation: `Le générateur fournit le double de l'énergie stockée, soit ${fmtP(2 * EcMJ)} mJ.`,
          },
          {
            questionPrompt: `Quel est le rendement énergétique η = E_e / E_gén de la charge à travers une résistance sous tension constante E (en %) ?`,
            questionType: 'numeric',
            correctAnswer: '50',
            hint: `Indépendant de R et de C : ½ C E² / (C E²).`,
            ruleApplied: 'Rendement de la charge RC',
            mathExpression: `η = ½ = 50 % (l'autre moitié est dissipée par effet Joule dans R)`,
            explanation: `Exactement 50 % est stockée et 50 % est perdue par effet Joule dans R.`,
          },
          {
            questionPrompt: `On bascule ensuite le condensateur chargé (sous E = ${E} V) pour le décharger dans une résistance R' = 2R. Que vaut le courant initial maximal |i'(0)| de décharge (en mA) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(i0Ma / 2),
            unit: 'mA',
            hint: `|i'(0)| = E / (2R).`,
            ruleApplied: 'Décharge libre dans R’',
            mathExpression: `|i'(0)| = ${E} / ${2 * R} = ${fmtP(i0Ma / 2)} mA`,
            explanation: `Le courant initial de décharge vaut ${fmtP(i0Ma / 2)} mA.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Dipôle RC : charge, demi-charge, bilan énergétique et rendement`,
          `Circuit RC série alimenté par E = ${E} V avec R = ${R / 1000} kΩ et C = ${C_uF} µF.`,
          items
        );
      }

      if (vMod === 1) {
        // Bobine réelle (L, r) en série avec R sous échelon de tension E
        const E = pickRandom([12, 24]);
        const r = pickRandom([10, 20]);
        const R = r === 10 ? 50 : 100; // R_tot = 60 ou 120 Ohm => I_p = 12/60 = 0.2 A ou 24/120 = 0.2 A, etc.
        const Rtot = R + r;
        const L_mH = pickRandom([300, 600]);
        const L = L_mH / 1000;
        const tauMs = (L / Rtot) * 1000;
        const Ip = E / Rtot;
        const pDiDt0 = E / L; // A/s
        const EmMJ = 0.5 * L * Ip * Ip * 1000;
        const uBobInf = r * Ip;
        const iAtTau = Ip * (1 - Math.exp(-1));

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une bobine réelle (L = ${L_mH} mH, r = ${r} Ω) est branchée en série avec R = ${R} Ω sous E = ${E} V. Calcule la résistance totale R_tot du circuit.`,
            questionType: 'numeric',
            correctAnswer: String(Rtot),
            unit: 'Ω',
            hint: `R_tot = R + r.`,
            ruleApplied: 'Résistance équivalente série',
            mathExpression: `R_tot = ${R} + ${r} = ${Rtot} Ω`,
            explanation: `R_tot = ${Rtot} Ω.`,
          },
          {
            questionPrompt: `Calcule la constante de temps τ = L / R_tot du circuit RL (en ms).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tauMs),
            unit: 'ms',
            hint: `(${L} H / ${Rtot} Ω) × 1000.`,
            ruleApplied: 'Constante de temps du dipôle RL',
            mathExpression: `τ = ${L} / ${Rtot} × 1000 = ${fmtP(tauMs)} ms`,
            explanation: `τ = ${fmtP(tauMs)} ms.`,
          },
          {
            questionPrompt: `Calcule l'intensité I_p en régime permanent établi (en mA).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Ip * 1000),
            unit: 'mA',
            hint: `En régime continu permanent, di/dt = 0 donc L·(di/dt) = 0.`,
            ruleApplied: 'Loi d’Ohm en régime permanent',
            mathExpression: `I_p = ${E} / ${Rtot} = ${fmtP(Ip * 1000)} mA`,
            explanation: `I_p = ${fmtP(Ip, 3)} A = ${fmtP(Ip * 1000)} mA.`,
          },
          {
            questionPrompt: `Quelle est la tension u_bob(0⁺) aux bornes de la bobine juste à la fermeture (t = 0⁺) ?`,
            questionType: 'numeric',
            correctAnswer: String(E),
            unit: 'V',
            hint: `Par continuité du courant dans une bobine, i(0⁺) = 0 ⇒ u_R(0⁺) = 0.`,
            ruleApplied: 'Continuité de l’intensité dans une bobine',
            mathExpression: `u_bob(0⁺) = E - R·i(0⁺) = ${E} V`,
            explanation: `À t = 0⁺, toute la tension E se retrouve aux bornes de la bobine.`,
          },
          {
            questionPrompt: `Calcule la dérivée initiale du courant (di/dt)₀ à t = 0⁺ (en A/s).`,
            questionType: 'numeric',
            correctAnswer: fmtP(pDiDt0),
            unit: 'A/s',
            hint: `L (di/dt)₀ = E.`,
            ruleApplied: 'Loi de Faraday-Lenz à t = 0⁺',
            mathExpression: `(di/dt)₀ = ${E} / ${L} = ${fmtP(pDiDt0)} A/s`,
            explanation: `La pente à l'origine vaut ${fmtP(pDiDt0)} A/s.`,
          },
          {
            questionPrompt: `Calcule la tension résiduelle u_bob(∞) aux bornes de la bobine réelle en régime permanent (en V).`,
            questionType: 'numeric',
            correctAnswer: fmtP(uBobInf),
            unit: 'V',
            hint: `u_bob(∞) = r · I_p (ne pas oublier la résistance interne r !).`,
            ruleApplied: 'Bobine réelle en régime continu',
            mathExpression: `u_bob(∞) = ${r} × ${fmtP(Ip, 3)} = ${fmtP(uBobInf)} V`,
            explanation: `u_bob(∞) = ${fmtP(uBobInf)} V.`,
          },
          {
            questionPrompt: `Calcule l'intensité i(τ) à l'instant t = τ (en mA, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(iAtTau * 1000, 1),
            unit: 'mA',
            hint: `0,632 × I_p.`,
            ruleApplied: 'Réponse exponentielle RL',
            mathExpression: `i(τ) = ${fmtP(Ip * 1000)} × (1 - e⁻¹) ≈ ${fmtP(iAtTau * 1000, 1)} mA`,
            explanation: `i(τ) ≈ ${fmtP(iAtTau * 1000, 1)} mA.`,
          },
          {
            questionPrompt: `Calcule l'énergie magnétique E_m = ½ L I_p² emmagasinée dans la bobine en régime permanent (en mJ, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EmMJ),
            unit: 'mJ',
            hint: `0,5 × ${L} × (${fmtP(Ip, 3)})² × 1000.`,
            ruleApplied: 'Énergie magnétique d’une inductance',
            mathExpression: `E_m = 0,5 × ${L} × ${fmtP(Ip * Ip, 4)} × 1000 = ${fmtP(EmMJ)} mJ`,
            explanation: `E_m ≈ ${fmtP(EmMJ)} mJ.`,
          },
          {
            questionPrompt: `Pourquoi risque-t-il de se produire une étincelle de rupture lorsqu'on ouvre brusquement l'interrupteur ?`,
            questionType: 'qcm',
            options: [
              `di/dt devient très grand et négatif, générant une forte surtension |u_L| = L|di/dt|`,
              `Le condensateur se court-circuite`,
              `La résistance r devient nulle`,
              `La bobine annule instantanément l'énergie magnétique sans tension`,
            ],
            correctAnswer: `di/dt devient très grand et négatif, générant une forte surtension |u_L| = L|di/dt|`,
            hint: `L'énergie magnétique ½ L I_p² ne peut pas s'annuler instantanément.`,
            ruleApplied: 'Surtension de rupture inductive',
            mathExpression: `Δt → 0 ⇒ u_L = -L (Δi / Δt) ≫ E`,
            explanation: `Une diode de roue libre montée en dérivation protège l'interrupteur contre cette surtension.`,
          },
          {
            questionPrompt: `Si l'on branche une diode de roue libre idéale aux bornes de la bobine lors de la coupure, à travers quelle résistance se dissipe l'énergie magnétique ?`,
            questionType: 'numeric',
            correctAnswer: String(r),
            unit: 'Ω',
            hint: `La boucle formée par la bobine (L, r) et la diode court-circuite le reste.`,
            ruleApplied: 'Boucle de roue libre',
            mathExpression: `R_boucle = r = ${r} Ω`,
            explanation: `Le courant circule uniquement dans la maille (bobine, diode), de résistance r = ${r} Ω.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Établissement du courant dans une bobine réelle (L, r), énergie et rupture`,
          `Circuit RL série (L = ${L_mH} mH, r = ${r} Ω, R = ${R} Ω) alimenté par E = ${E} V.`,
          items
        );
      }

      // vMod === 2: Identification graphique / créneau RC & puissance instantanée
      const tauMs = pickRandom([4, 5, 10]); // ms
      const C_uF = pickRandom([2, 5]);
      const R = (tauMs * 1e-3) / (C_uF * 1e-6); // en Ohm
      const E = pickRandom([6, 8, 12]);
      const tHalf = tauMs * Math.LN2;
      // Puissance maximale reçue par le condensateur P_C(t) = u_C(t)*i(t) = (E^2/R)*(e^{-t/tau} - e^{-2t/tau})
      // Maximale quand u_C = E/2 (à t = tau*ln 2) et vaut E^2 / (4R) !
      const pMaxMw = ((E * E) / (4 * R)) * 1000;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Un circuit RC (C = ${C_uF} µF) est soumis à un créneau de tension d'amplitude E = ${E} V. La tangente à l'origine de u_C(t) coupe l'asymptote y = ${E} V à t = ${tauMs} ms. Que vaut la résistance R (en Ω) ?`,
          questionType: 'numeric',
          correctAnswer: String(R),
          unit: 'Ω',
          hint: `L'intersection donne τ = R·C = ${tauMs} ms ⇒ R = τ / C.`,
          ruleApplied: 'Méthode graphique de la tangente à l’origine',
          mathExpression: `R = (${tauMs}×10⁻³) / (${C_uF}×10⁻⁶) = ${R} Ω`,
          explanation: `R = ${R} Ω.`,
        },
        {
          questionPrompt: `Pour que la charge atteigne plus de 99 % de E pendant chaque demi-période T/2 du créneau, il faut T/2 ≥ 5τ. Quelle est la fréquence maximale f_max du générateur BF (en Hz, arrondie à 0,1 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(1 / (10 * tauMs * 1e-3), 1),
          unit: 'Hz',
          hint: `T_min = 10·τ ⇒ f_max = 1 / (10·τ).`,
          ruleApplied: 'Condition de régime complet 5τ',
          mathExpression: `f_max = 1 / (10 × ${tauMs}×10⁻³) = ${fmtP(1 / (10 * tauMs * 1e-3), 1)} Hz`,
          explanation: `Au-dessus de cette fréquence, le condensateur n'a plus le temps de se charger/décharger complètement.`,
        },
        {
          questionPrompt: `Calcule la tension u_C à t = 2τ (en V, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(E * (1 - Math.exp(-2))),
          unit: 'V',
          hint: `E(1 - e⁻²) ≈ 0,8647·E.`,
          ruleApplied: 'Charge à t = 2τ',
          mathExpression: `u_C(2τ) = ${E}(1 - e⁻²) ≈ ${fmtP(E * (1 - Math.exp(-2)))} V`,
          explanation: `À t = 2τ, la charge atteint 86,5 %, soit ${fmtP(E * (1 - Math.exp(-2)))} V.`,
        },
        {
          questionPrompt: `Calcule l'intensité i(t) à t = τ (en mA, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(((E / R) * Math.exp(-1)) * 1000),
          unit: 'mA',
          hint: `i(τ) = (E / R)·e⁻¹.`,
          ruleApplied: 'Décroissance exponentielle du courant',
          mathExpression: `i(τ) = (${E}/${R})·e⁻¹ × 1000 ≈ ${fmtP(((E / R) * Math.exp(-1)) * 1000)} mA`,
          explanation: `Le courant est tombé à 36,8 % de sa valeur initiale.`,
        },
        {
          questionPrompt: `Calcule le temps t_{1/2} = τ ln(2) en ms (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(tHalf),
          unit: 'ms',
          hint: `${tauMs} × 0,6931.`,
          ruleApplied: 'Temps de demi-charge',
          mathExpression: `t_{1/2} = ${tauMs} × ln(2) ≈ ${fmtP(tHalf)} ms`,
          explanation: `t_{1/2} ≈ ${fmtP(tHalf)} ms.`,
        },
        {
          questionPrompt: `Exprime la puissance instantanée P_C(t) = u_C(t)·i(t) reçue par le condensateur en fonction de x = u_C(t)/E.`,
          questionType: 'qcm',
          options: [
            `P_C = (E² / R) · x(1 - x)`,
            `P_C = (E² / R) · x²`,
            `P_C = (E² / R) · (1 - x)²`,
            `P_C = E · I · x`,
          ],
          correctAnswer: `P_C = (E² / R) · x(1 - x)`,
          hint: `u_C = E·x et i = (E - u_C)/R = (E/R)(1 - x).`,
          ruleApplied: 'Puissance instantanée transférée au condensateur',
          mathExpression: `P_C = (E·x) · (E/R)(1 - x) = (E²/R)x(1 - x)`,
          explanation: `Le trinôme x(1 - x) est maximal en x = 1/2 (soit u_C = E/2).`,
        },
        {
          questionPrompt: `Calcule la puissance maximale P_{C,max} = E² / (4R) reçue par le condensateur (en mW, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(pMaxMw),
          unit: 'mW',
          hint: `(${E}² / (4×${R})) × 1000.`,
          ruleApplied: 'Maximum de puissance transférée',
          mathExpression: `P_{C,max} = ${E * E} / ${4 * R} × 1000 = ${fmtP(pMaxMw)} mW`,
          explanation: `Le transfert de puissance culmine à ${fmtP(pMaxMw)} mW lorsque u_C = E/2 (t = t_{1/2}).`,
        },
        {
          questionPrompt: `À cet instant t_{1/2} où u_C = E/2, quelle fraction de l'énergie finale E_max = ½CE² est déjà stockée dans le condensateur (en %) ?`,
          questionType: 'numeric',
          correctAnswer: '25',
          hint: `(½ E)² = ¼ E².`,
          ruleApplied: 'Variation quadratique de l’énergie',
          mathExpression: `E(t_{1/2}) / E_max = (0,5)² = 25 %`,
          explanation: `À demi-tension, seulement un quart de l'énergie finale est stocké.`,
        },
        {
          questionPrompt: `Lors de la décharge suivante, quelle tension u_C(t) reste-t-il après t = 3τ (en % de E, arrondi à 0,1 % près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(100 * Math.exp(-3), 1),
          unit: '%',
          hint: `100 × e⁻³.`,
          ruleApplied: 'Décharge exponentielle',
          mathExpression: `e⁻³ ≈ 0,0498 = 5,0 %`,
          explanation: `À 3τ, il reste environ 5,0 % de la tension initiale (et < 1 % à 5τ).`,
        },
        {
          questionPrompt: `Quelle grandeur reste continue à l'instant de commutation (t = T/2) aux bornes du condensateur ?`,
          questionType: 'qcm',
          options: [
            'La tension u_C (et la charge q)',
            'L’intensité i(t)',
            'La tension u_R aux bornes du conducteur ohmique',
            'La dérivée du_C/dt',
          ],
          correctAnswer: 'La tension u_C (et la charge q)',
          hint: `Une discontinuité de q impliquerait un courant infini.`,
          ruleApplied: 'Continuité énergétique',
          mathExpression: `u_C(t₀⁺) = u_C(t₀⁻)`,
          explanation: `u_C est continue, contrairement à i(t) qui saute de 0 à ±E/R.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Identification RC sous créneau, puissance maximale et continuité`,
        `Analyse d'un dipôle RC (C = ${C_uF} µF, τ = ${tauMs} ms) soumis à des créneaux de tension d'amplitude E = ${E} V.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 6. OSCILLATIONS RLC LIBRES & FORCÉES
    // -------------------------------------------------------------------------
    case 'physTc-oscillations-rlc': {
      if (vMod === 0) {
        // Oscillateur LC idéal
        const L_mH = pickRandom([10, 40]); // mH
        const C_uF = L_mH === 10 ? 10 : 2.5; // L*C = 10^-7 => w0 = sqrt(10^7) ou prenons L*C = 10^-6 !
        // L_mH = 10 mH = 0.01 H, C_uF = 100 uF => LC = 10^-6 => w0 = 1000 rad/s ! Exact !
        // Autre couple: L_mH = 40 mH, C_uF = 25 uF => LC = 10^-6 => w0 = 1000 rad/s !
        // Ou L_mH = 10 mH, C_uF = 25 uF => LC = 2.5e-7 => w0 = 2000 rad/s !
        const L = L_mH / 1000;
        const cExactUf = L_mH === 10 ? 100 : 25;
        const C = cExactUf * 1e-6;
        const w0 = Math.round(1 / Math.sqrt(L * C)); // 1000 rad/s exact !
        const T0Ms = ((2 * Math.PI) / w0) * 1000;
        const U0 = pickRandom([6, 12]);
        const QmUc = cExactUf * U0;
        const ImMa = w0 * QmUc * 1e-3; // 1000 * uC = mA !
        const EmMJ = 0.5 * C * U0 * U0 * 1000;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un condensateur (C = ${cExactUf} µF) chargé sous U₀ = ${U0} V est branché aux bornes d'une bobine idéale (L = ${L_mH} mH) à t = 0. Calcule la pulsation propre ω₀ = 1/√(LC) (en rad/s).`,
            questionType: 'numeric',
            correctAnswer: String(w0),
            unit: 'rad/s',
            hint: `L·C = ${L} × ${cExactUf}×10⁻⁶ = 10⁻⁶ s².`,
            ruleApplied: 'Pulsation propre d’un circuit LC idéal',
            mathExpression: `ω₀ = 1 / √(10⁻⁶) = 1000 rad/s`,
            explanation: `ω₀ = 1000 rad/s.`,
          },
          {
            questionPrompt: `Calcule la période propre T₀ = 2π / ω₀ (en ms, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(T0Ms),
            unit: 'ms',
            hint: `2π / 1000 s en ms.`,
            ruleApplied: 'Formule de Thomson',
            mathExpression: `T₀ = 2π ≈ ${fmtP(T0Ms)} ms`,
            explanation: `T₀ ≈ ${fmtP(T0Ms)} ms.`,
          },
          {
            questionPrompt: `Calcule la fréquence propre f₀ en Hz (arrondie à 0,1 Hz près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(w0 / (2 * Math.PI), 1),
            unit: 'Hz',
            hint: `1000 / (2π).`,
            ruleApplied: 'Fréquence propre',
            mathExpression: `f₀ = 1000 / (2π) ≈ ${fmtP(w0 / (2 * Math.PI), 1)} Hz`,
            explanation: `f₀ ≈ ${fmtP(w0 / (2 * Math.PI), 1)} Hz.`,
          },
          {
            questionPrompt: `Calcule la charge maximale Q_m = C·U₀ (en µC).`,
            questionType: 'numeric',
            correctAnswer: String(QmUc),
            unit: 'µC',
            hint: `${cExactUf} µF × ${U0} V.`,
            ruleApplied: 'Condition initiale de charge',
            mathExpression: `Q_m = ${cExactUf} × ${U0} = ${QmUc} µC`,
            explanation: `Q_m = ${QmUc} µC.`,
          },
          {
            questionPrompt: `Quelle est l'équation horaire de la tension u_C(t) pour t ≥ 0 (avec u_C(0) = U₀ et i(0) = 0) ?`,
            questionType: 'qcm',
            options: [
              `u_C(t) = ${U0} cos(1000 t)`,
              `u_C(t) = ${U0} sin(1000 t)`,
              `u_C(t) = ${U0} cos(1000 t + π/2)`,
              `u_C(t) = ${U0} e^{-1000t}`,
            ],
            correctAnswer: `u_C(t) = ${U0} cos(1000 t)`,
            hint: `u_C(0) = U₀ et u_C'(0) = -i(0)/C = 0.`,
            ruleApplied: 'Solution de d²u_C/dt² + ω₀² u_C = 0',
            mathExpression: `u_C(t) = ${U0} cos(1000t)`,
            explanation: `u_C(t) = ${U0} cos(1000 t).`,
          },
          {
            questionPrompt: `Calcule l'intensité maximale I_m = ω₀·Q_m = C·ω₀·U₀ du courant oscillant (en mA).`,
            questionType: 'numeric',
            correctAnswer: fmtP(ImMa),
            unit: 'mA',
            hint: `i(t) = -dq/dt = C·ω₀·U₀·sin(ω₀ t).`,
            ruleApplied: 'Amplitude du courant en LC',
            mathExpression: `I_m = 1000 × ${QmUc}×10⁻⁶ = ${fmtP(ImMa)} mA`,
            explanation: `I_m = ${fmtP(ImMa)} mA = ${fmtP(ImMa / 1000, 3)} A.`,
          },
          {
            questionPrompt: `Calcule l'énergie électromagnétique totale conservée E_tot = ½ C U₀² (en mJ).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EmMJ),
            unit: 'mJ',
            hint: `0,5 × ${cExactUf}×10⁻³ × ${U0}².`,
            ruleApplied: 'Conservation de l’énergie dans un circuit LC',
            mathExpression: `E_tot = ${fmtP(EmMJ)} mJ`,
            explanation: `E_tot = ½CU₀² = ½LI_m² = ${fmtP(EmMJ)} mJ.`,
          },
          {
            questionPrompt: `À quel premier instant t₁ > 0 la tension u_C(t) s'annule-t-elle (toute l'énergie étant alors magnétique dans la bobine) ? (en ms, arrondi à 0,01 près)`,
            questionType: 'numeric',
            correctAnswer: fmtP(T0Ms / 4),
            unit: 'ms',
            hint: `T₀ / 4.`,
            ruleApplied: 'Quadrature de phase entre u_C et i',
            mathExpression: `t₁ = T₀ / 4 = π/2 ≈ ${fmtP(T0Ms / 4)} ms`,
            explanation: `Au bout d'un quart de période (≈ ${fmtP(T0Ms / 4)} ms), le condensateur est totalement déchargé et |i| = I_m.`,
          },
          {
            questionPrompt: `Calcule la valeur de |u_C| lorsque E_e = E_m = E_tot / 2 (en V, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(U0 / Math.SQRT2),
            unit: 'V',
            hint: `½ C u_C² = ½ (½ C U₀²) ⇒ |u_C| = U₀ / √2.`,
            ruleApplied: 'Équipartition électromagnétique',
            mathExpression: `|u_C| = ${U0} / √2 ≈ ${fmtP(U0 / Math.SQRT2)} V`,
            explanation: `|u_C| ≈ ${fmtP(U0 / Math.SQRT2)} V.`,
          },
          {
            questionPrompt: `Quel composant faut-il insérer pour entretenir les oscillations si la bobine réelle possède une résistance r ≠ 0 ?`,
            questionType: 'qcm',
            options: [
              'Un montage à résistance négative (AO) fournissant exactement r·i²',
              'Un conducteur ohmique supplémentaire en série',
              'Une diode simple en série',
              'Un second condensateur en parallèle',
            ],
            correctAnswer: 'Un montage à résistance négative (AO) fournissant exactement r·i²',
            hint: `Il faut compenser exactement l'énergie dissipée par effet Joule dans r.`,
            ruleApplied: 'Entretien des oscillations électriques',
            mathExpression: `u_ent = r · i`,
            explanation: `Un dipôle de caractéristique u = -r·i annule le terme d'amortissement.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Oscillateur LC idéal : formule de Thomson, I_m et transfert d'énergie`,
          `Un condensateur (C = ${cExactUf} µF) chargé sous U₀ = ${U0} V se décharge dans une bobine idéale (L = ${L_mH} mH).`,
          items
        );
      }

      if (vMod === 1) {
        // RLC forcé en régime sinusoïdal + résonance + facteur de qualité
        const R = pickRandom([20, 40]);
        const L = 0.2; // 200 mH
        const C_uF = 12.5; // 12.5 uF => LC = 0.2 * 12.5e-6 = 2.5e-6 => w0 = 1/sqrt(2.5e-6) = 632.45 rad/s -> utilisons L=0.1 H, C=10 uF => LC = 10^-6 => w0 = 1000 rad/s !
        const Lval = 0.1;
        const Cval = 10e-6;
        const w0 = 1000;
        const f0 = w0 / (2 * Math.PI);
        const w = pickRandom([1250, 800]); // pulsation imposée
        const XL = Lval * w;
        const XC = 1 / (Cval * w);
        const X = XL - XC;
        const Z = Math.hypot(R, X);
        const Um = 20; // V
        const Ueff = Um / Math.SQRT2;
        const Ieff = Ueff / Z;
        const cosPhi = R / Z;
        const Pmoy = Ueff * Ieff * cosPhi;
        const Qfactor = (1 / R) * Math.sqrt(Lval / Cval); // = (L * w0) / R = 100 / R = 5 ou 2.5 !
        const deltaF = R / (2 * Math.PI * Lval);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un circuit RLC série (R = ${R} Ω, L = 0,10 H, C = 10 µF) est alimenté par u(t) = 20√2 cos(${w}t) (en V). Calcule la réactance inductive X_L = Lω (en Ω).`,
            questionType: 'numeric',
            correctAnswer: fmtP(XL),
            unit: 'Ω',
            hint: `0,10 × ${w}.`,
            ruleApplied: 'Impédance inductive',
            mathExpression: `X_L = 0,10 × ${w} = ${fmtP(XL)} Ω`,
            explanation: `X_L = ${fmtP(XL)} Ω.`,
          },
          {
            questionPrompt: `Calcule la réactance capacitive X_C = 1 / (Cω) (en Ω).`,
            questionType: 'numeric',
            correctAnswer: fmtP(XC),
            unit: 'Ω',
            hint: `1 / (10⁻⁵ × ${w}).`,
            ruleApplied: 'Impédance capacitive',
            mathExpression: `X_C = 10⁵ / ${w} = ${fmtP(XC)} Ω`,
            explanation: `X_C = ${fmtP(XC)} Ω.`,
          },
          {
            questionPrompt: `Calcule l'impédance totale Z = √(R² + (X_L - X_C)²) (en Ω, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Z),
            unit: 'Ω',
            hint: `√(${R}² + (${fmtP(X)})²).`,
            ruleApplied: 'Impédance complexe d’un RLC série',
            mathExpression: `Z = √(${R * R} + (${fmtP(X)})²) ≈ ${fmtP(Z)} Ω`,
            explanation: `Z ≈ ${fmtP(Z)} Ω.`,
          },
          {
            questionPrompt: `Calcule l'intensité efficace I_eff = U_eff / Z (en mA, arrondie à 0,1 près, avec U_eff = 20 V).`,
            questionType: 'numeric',
            correctAnswer: fmtP((20 / Z) * 1000, 1),
            unit: 'mA',
            hint: `U_eff = U_max / √2 = 20 V, puis I_eff = 20 / Z.`,
            ruleApplied: 'Loi d’Ohm en valeurs efficaces',
            mathExpression: `I_eff = 20 / ${fmtP(Z)} ≈ ${fmtP((20 / Z) * 1000, 1)} mA`,
            explanation: `I_eff ≈ ${fmtP((20 / Z) * 1000, 1)} mA.`,
          },
          {
            questionPrompt: `Le circuit à ω = ${w} rad/s est-il inductif ou capacitif ?`,
            questionType: 'qcm',
            options: [
              w > w0
                ? 'Inductif car X_L > X_C (la tension u est en avance sur i)'
                : 'Capacitif car X_C > X_L (le courant i est en avance sur u)',
              w > w0
                ? 'Capacitif car X_C > X_L'
                : 'Inductif car X_L > X_C',
              'Purement résistif (à la résonance)',
              'Indéterminé',
            ],
            correctAnswer:
              w > w0
                ? 'Inductif car X_L > X_C (la tension u est en avance sur i)'
                : 'Capacitif car X_C > X_L (le courant i est en avance sur u)',
            hint: `Compare X_L = ${fmtP(XL)} Ω et X_C = ${fmtP(XC)} Ω.`,
            ruleApplied: 'Nature inductive ou capacitive via tan φ',
            mathExpression: `tan φ = (X_L - X_C)/R ${w > w0 ? '> 0' : '< 0'}`,
            explanation: `${w > w0 ? 'X_L > X_C donc φ > 0 : circuit inductif.' : 'X_L < X_C donc φ < 0 : circuit capacitif.'}`,
          },
          {
            questionPrompt: `Calcule le facteur de puissance cos φ = R / Z (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(cosPhi, 3),
            hint: `${R} / ${fmtP(Z)}.`,
            ruleApplied: 'Facteur de puissance sinusoïdal',
            mathExpression: `cos φ = ${R} / ${fmtP(Z)} ≈ ${fmtP(cosPhi, 3)}`,
            explanation: `cos φ ≈ ${fmtP(cosPhi, 3)}.`,
          },
          {
            questionPrompt: `Calcule la puissance électrique moyenne P = R · I_eff² consommée (en W, arrondie à 0,01 près, avec U_eff = 20 V).`,
            questionType: 'numeric',
            correctAnswer: fmtP(R * (20 / Z) ** 2),
            unit: 'W',
            hint: `Seule la résistance R dissipe de la puissance active : P = R (20/Z)².`,
            ruleApplied: 'Puissance active moyenne',
            mathExpression: `P = ${R} × (20/${fmtP(Z)})² ≈ ${fmtP(R * (20 / Z) ** 2)} W`,
            explanation: `P ≈ ${fmtP(R * (20 / Z) ** 2)} W.`,
          },
          {
            questionPrompt: `On ajuste la fréquence pour atteindre la résonance d'intensité (ω = ω₀ = 1000 rad/s). Que vaut alors I_eff,max = U_eff / R (en A) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(20 / R),
            unit: 'A',
            hint: `À la résonance, Z = R.`,
            ruleApplied: 'Résonance d’intensité',
            mathExpression: `I_max = 20 / ${R} = ${fmtP(20 / R)} A`,
            explanation: `À la résonance, X_L = X_C donc Z = R.`,
          },
          {
            questionPrompt: `Calcule le facteur de qualité (facteur de surtension) Q = (L ω₀) / R du circuit.`,
            questionType: 'numeric',
            correctAnswer: fmtP(Qfactor),
            hint: `(0,10 × 1000) / ${R}.`,
            ruleApplied: 'Facteur de qualité et surtension',
            mathExpression: `Q = 100 / ${R} = ${fmtP(Qfactor)}`,
            explanation: `La tension aux bornes du condensateur à la résonance vaut Q·U_eff = ${fmtP(Qfactor * 20)} V.`,
          },
          {
            questionPrompt: `Calcule la largeur de la bande passante à -3 dB : Δf = f₀ / Q = R / (2π L) (en Hz, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(deltaF, 1),
            unit: 'Hz',
            hint: `${R} / (2π × 0,10).`,
            ruleApplied: 'Sélectivité et bande passante à -3 dB',
            mathExpression: `Δf = ${R} / (0,2π) ≈ ${fmtP(deltaF, 1)} Hz`,
            explanation: `Δf ≈ ${fmtP(deltaF, 1)} Hz.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `RLC série forcé : impédance, facteur de puissance, résonance et Q`,
          `Circuit RLC série (R = ${R} Ω, L = 0,10 H, C = 10 µF) sous u(t) = 20√2 cos(${w}t) V.`,
          items
        );
      }

      // vMod === 2: Régime libre amorti RLC (résistance critique, décrément logarithmique)
      const L = 0.4; // 400 mH
      const C_uF = 10; // 10 uF -> LC = 4e-6 => w0 = 500 rad/s => T0 = 4pi ms ≈ 12.57 ms
      const C = C_uF * 1e-6;
      const w0 = 500;
      const T0Ms = ((2 * Math.PI) / w0) * 1000;
      const Rc = 2 * Math.sqrt(L / C); // 2 * sqrt(40000) = 400 Ohm exact !
      const R = pickRandom([20, 40]); // R << Rc => régime pseudo-périodique faiblement amorti
      // Décrément logarithmique delta ≈ (R / (2L)) * T0 = (R*pi)/(L*w0) = pi / Q
      const Q = (L * w0) / R; // 200 / R = 10 ou 5
      const deltaLog = Math.PI / Q;
      const u1Ratio = Math.exp(-deltaLog); // U_{n+1} / U_n
      const U0 = 10; // V
      const U1 = U0 * u1Ratio;
      const U2 = U0 * Math.exp(-2 * deltaLog);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Un circuit RLC libre (L = 0,40 H, C = 10 µF, R = ${R} Ω) oscille après charge initiale sous U₀ = 10 V. Calcule la pulsation propre ω₀ = 1/√(LC) (en rad/s).`,
          questionType: 'numeric',
          correctAnswer: String(w0),
          unit: 'rad/s',
          hint: `0,40 × 10⁻⁵ = 4×10⁻⁶.`,
          ruleApplied: 'Pulsation propre',
          mathExpression: `ω₀ = 1 / √(4×10⁻⁶) = 500 rad/s`,
          explanation: `ω₀ = 500 rad/s.`,
        },
        {
          questionPrompt: `Calcule la résistance critique R_c = 2√(L/C) séparant régime pseudo-périodique et régime apériodique (en Ω).`,
          questionType: 'numeric',
          correctAnswer: String(Rc),
          unit: 'Ω',
          hint: `2 × √(0,40 / 10⁻⁵).`,
          ruleApplied: 'Condition de régime critique',
          mathExpression: `R_c = 2√40000 = 400 Ω`,
          explanation: `Comme R = ${R} Ω < R_c = 400 Ω, le régime est pseudo-périodique.`,
        },
        {
          questionPrompt: `Calcule la période propre T₀ = 2π / ω₀ (en ms, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(T0Ms),
          unit: 'ms',
          hint: `2π / 500 × 1000.`,
          ruleApplied: 'Période propre',
          mathExpression: `T₀ ≈ ${fmtP(T0Ms)} ms`,
          explanation: `Pour un faible amortissement, T ≈ T₀ ≈ ${fmtP(T0Ms)} ms.`,
        },
        {
          questionPrompt: `Quelle est l'équation différentielle vérifiée par u_C(t) en régime libre ?`,
          questionType: 'qcm',
          options: [
            `d²u_C/dt² + (R/L)·(du_C/dt) + u_C/(LC) = 0`,
            `d²u_C/dt² - (R/L)·(du_C/dt) + u_C/(LC) = 0`,
            `du_C/dt + u_C/(RC) = 0`,
            `d²u_C/dt² + u_C/(LC) = U₀`,
          ],
          correctAnswer: `d²u_C/dt² + (R/L)·(du_C/dt) + u_C/(LC) = 0`,
          hint: `u_L + u_R + u_C = 0 avec i = C du_C/dt.`,
          ruleApplied: 'Équation différentielle RLC amorti',
          mathExpression: `LC u_C'' + RC u_C' + u_C = 0`,
          explanation: `Le terme (R/L) u_C' traduit l'amortissement par effet Joule.`,
        },
        {
          questionPrompt: `Calcule le facteur de qualité Q = (L ω₀) / R.`,
          questionType: 'numeric',
          correctAnswer: fmtP(Q),
          hint: `(0,40 × 500) / ${R}.`,
          ruleApplied: 'Facteur de qualité',
          mathExpression: `Q = 200 / ${R} = ${Q}`,
          explanation: `Q = ${Q}.`,
        },
        {
          questionPrompt: `Le décrément logarithmique vaut δ = ln(U_n / U_{n+1}) ≈ π / Q. Calcule δ (arrondi à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(deltaLog, 3),
          hint: `π / ${Q}.`,
          ruleApplied: 'Décrément logarithmique',
          mathExpression: `δ = π / ${Q} ≈ ${fmtP(deltaLog, 3)}`,
          explanation: `δ ≈ ${fmtP(deltaLog, 3)}.`,
        },
        {
          questionPrompt: `Calcule la première crête positive suivante U₁ = U₀ · e^{-δ} au bout d'une pseudo-période T (en V, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(U1),
          unit: 'V',
          hint: `10 × e^{-${fmtP(deltaLog, 3)}}.`,
          ruleApplied: 'Décroissance exponentielle de l’enveloppe',
          mathExpression: `U₁ ≈ ${fmtP(U1)} V`,
          explanation: `Après une période, le maximum de tension chute à ${fmtP(U1)} V.`,
        },
        {
          questionPrompt: `Calcule la deuxième crête positive suivante U₂ = U₀ · e^{-2δ} (en V, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(U2),
          unit: 'V',
          hint: `10 × e^{-2δ}.`,
          ruleApplied: 'Progression géométrique des amplitudes',
          mathExpression: `U₂ ≈ ${fmtP(U2)} V`,
          explanation: `U₂ ≈ ${fmtP(U2)} V.`,
        },
        {
          questionPrompt: `Calcule la perte relative d'énergie ΔE / E₀ = (U₀² - U₁²) / U₀² durant la première pseudo-période (en %, arrondie à 0,1 % près).`,
          questionType: 'numeric',
          correctAnswer: fmtP((1 - u1Ratio * u1Ratio) * 100, 1),
          unit: '%',
          hint: `1 - e^{-2δ}.`,
          ruleApplied: 'Dissipation Joule par période',
          mathExpression: `ΔE / E₀ = (1 - e^{-2δ}) × 100 ≈ ${fmtP((1 - u1Ratio * u1Ratio) * 100, 1)} %`,
          explanation: `Environ ${fmtP((1 - u1Ratio * u1Ratio) * 100, 1)} % de l'énergie initiale est dissipée lors de la première oscillation.`,
        },
        {
          questionPrompt: `Calcule l'énergie initiale E₀ = ½ C U₀² du condensateur (en mJ).`,
          questionType: 'numeric',
          correctAnswer: '0.5',
          unit: 'mJ',
          hint: `0,5 × 10⁻⁵ × 100 × 1000.`,
          ruleApplied: 'Énergie initiale',
          mathExpression: `E₀ = 0,5 × 10⁻² × 100 mJ = 0,5 mJ`,
          explanation: `E₀ = 0,5 mJ.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `RLC libre amorti : résistance critique, décrément logarithmique et pertes Joule`,
        `Décharge oscillante d'un condensateur (C = 10 µF, U₀ = 10 V) dans (L = 0,40 H, R = ${R} Ω).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 7. ONDES MÉCANIQUES, CORDE VIBRANTE & EFFET DOPPLER
    // -------------------------------------------------------------------------
    case 'physTc-ondes-mecaniques': {
      if (vMod === 0) {
        // Corde vibrante : tension T, masse linéique mu, célérité v, fréquence f
        const muGPerM = pickRandom([4, 9, 16]); // g/m -> 0.004, 0.009, 0.016 kg/m
        const mu = muGPerM / 1000;
        const T = muGPerM === 4 ? 10 : muGPerM === 9 ? 22.5 : 40; // v = sqrt(T/mu) = sqrt(2500) = 50 m/s exact !
        const v = 50; // m/s
        const f = pickRandom([100, 125, 250]); // Hz
        const lambda = v / f; // m
        const Tsec = 1 / f;
        const d1 = lambda * 1.5; // opposition de phase
        const tauMs = (d1 / v) * 1000;
        const ymMm = 4; // mm

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une corde tendue par T = ${T} N a une masse linéique μ = ${muGPerM} g/m. Un vibreur excite son extrémité O à la fréquence f = ${f} Hz avec une amplitude a = 4 mm. Calcule la célérité v = √(T/μ) des ondes le long de la corde.`,
            questionType: 'numeric',
            correctAnswer: String(v),
            unit: 'm/s',
            hint: `Convertis μ en kg/m (${mu} kg/m).`,
            ruleApplied: 'Célérité sur une corde tendue',
            mathExpression: `v = √(${T} / ${mu}) = √2500 = 50 m/s`,
            explanation: `v = 50 m/s.`,
          },
          {
            questionPrompt: `Calcule la période temporelle T_onde de l'onde (en ms).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Tsec * 1000),
            unit: 'ms',
            hint: `1 / ${f} s en ms.`,
            ruleApplied: 'Relation période-fréquence',
            mathExpression: `T_onde = 1000 / ${f} = ${fmtP(Tsec * 1000)} ms`,
            explanation: `T_onde = ${fmtP(Tsec * 1000)} ms.`,
          },
          {
            questionPrompt: `Calcule la longueur d'onde λ = v / f (en cm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(lambda * 100),
            unit: 'cm',
            hint: `(50 / ${f}) × 100.`,
            ruleApplied: 'Double périodicité spatiale et temporelle',
            mathExpression: `λ = 50 / ${f} = ${fmtP(lambda)} m = ${fmtP(lambda * 100)} cm`,
            explanation: `λ = ${fmtP(lambda * 100)} cm.`,
          },
          {
            questionPrompt: `Calcule le retard temporel τ = x₁ / v d'un point M₁ situé à x₁ = ${fmtP(d1 * 100)} cm de la source O (en ms).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tauMs),
            unit: 'ms',
            hint: `x₁ = 1,5 λ ⇒ τ = 1,5 T_onde.`,
            ruleApplied: 'Retard de propagation',
            mathExpression: `τ = ${fmtP(d1)} / 50 = ${fmtP(tauMs)} ms`,
            explanation: `L'onde met ${fmtP(tauMs)} ms pour atteindre M₁.`,
          },
          {
            questionPrompt: `Comment vibre le point M₁ situé à x₁ = 1,5 λ par rapport à la source O ?`,
            questionType: 'qcm',
            options: [
              'En opposition de phase avec O (Δφ = 3π ≡ π [2π])',
              'En phase avec O',
              'En quadrature avance',
              'Il reste immobile (nœud fixe)',
            ],
            correctAnswer: 'En opposition de phase avec O (Δφ = 3π ≡ π [2π])',
            hint: `x₁ = (k + ½) λ.`,
            ruleApplied: 'Déphasage Δφ = 2π x / λ',
            mathExpression: `Δφ = 2π (1,5 λ) / λ = 3π`,
            explanation: `Tous les points distants d'un nombre demi-entier de λ vibrent en opposition de phase.`,
          },
          {
            questionPrompt: `Calcule la vitesse transversale maximale v_{y,max} = 2π f · a d'un point matériel de la corde (en m/s, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(2 * Math.PI * f * 0.004),
            unit: 'm/s',
            hint: `Attention à ne pas confondre célérité de l'onde (50 m/s) et vitesse transversale du point (ω·a).`,
            ruleApplied: 'Vitesse vibratoire d’un point de la corde',
            mathExpression: `v_{y,max} = 2π×${f}×0,004 ≈ ${fmtP(2 * Math.PI * f * 0.004)} m/s`,
            explanation: `v_{y,max} ≈ ${fmtP(2 * Math.PI * f * 0.004)} m/s.`,
          },
          {
            questionPrompt: `À l'instant t = ${fmtP(2.25 * Tsec * 1000)} ms (= 2,25 T_onde), quelle est l'abscisse x_F du front d'onde progressif (en cm) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(2.25 * lambda * 100),
            unit: 'cm',
            hint: `x_F = v · t = 2,25 λ.`,
            ruleApplied: 'Avancée du front d’onde',
            mathExpression: `x_F = 2,25 × ${fmtP(lambda * 100)} = ${fmtP(2.25 * lambda * 100)} cm`,
            explanation: `Le front d'onde a progressé de 2,25 longueurs d'onde.`,
          },
          {
            questionPrompt: `Combien de points de la corde sur l'intervalle ]0 ; 2,25 λ] vibrent exactement en phase avec O à cet instant ?`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `Points à distance k·λ avec 0 < k·λ ≤ 2,25 λ.`,
            ruleApplied: 'Lieux des points en phase',
            mathExpression: `k = 1 (x = λ) et k = 2 (x = 2λ)`,
            explanation: `Il y a 2 points en phase avec la source sur ]0 ; 2,25 λ].`,
          },
          {
            questionPrompt: `Si l'on quadruple la tension T (4T) en gardant la même corde et la même fréquence f, par quel facteur est multipliée la longueur d'onde λ ?`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `v = √(T/μ) double, et λ = v/f.`,
            ruleApplied: 'Influence de la tension sur λ',
            mathExpression: `λ' = 2λ`,
            explanation: `Quadrupler la tension double la célérité et donc la longueur d'onde.`,
          },
          {
            questionPrompt: `Quelle est l'équation d'une onde sinusoïdale progressive se propageant dans le sens positif Ox si la source vérifie y_O(t) = a sin(2π f t) ?`,
            questionType: 'qcm',
            options: [
              `y(x, t) = a sin[2π (t/T - x/λ)]`,
              `y(x, t) = a sin[2π (t/T + x/λ)]`,
              `y(x, t) = a cos(2π x/λ) sin(2π t/T)`,
              `y(x, t) = a sin(2π x/v)`,
            ],
            correctAnswer: `y(x, t) = a sin[2π (t/T - x/λ)]`,
            hint: `y(x, t) = y_O(t - x/v).`,
            ruleApplied: 'Équation d’onde progressive',
            mathExpression: `y_O(t - x/v) = a sin[2π(t/T - x/λ)]`,
            explanation: `Le signe moins devant x/λ traduit une propagation vers les x croissants.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Corde vibrante : célérité √(T/μ), déphasage, front d'onde et vitesse transversale`,
          `Onde progressive sur une corde (T = ${T} N, μ = ${muGPerM} g/m, f = ${f} Hz, a = 4 mm).`,
          items
        );
      }

      if (vMod === 1) {
        // Ondes stationnaires (corde de Melde) & Effet Doppler
        const L = pickRandom([0.8, 1.2]); // m
        const n = pickRandom([3, 4]); // fuseaux
        const f = pickRandom([120, 180]); // Hz
        const lambda = (2 * L) / n;
        const v = lambda * f;
        const f1 = f / n; // fréquence fondamentale
        const distNoeud = lambda / 2;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Une corde de Melde de longueur L = ${L} m fixée à ses deux extrémités vibre en régime stationnaire avec n = ${n} fuseaux à la fréquence f = ${f} Hz. Calcule la longueur d'un fuseau (distance entre deux nœuds consécutifs, en cm).`,
            questionType: 'numeric',
            correctAnswer: fmtP((L / n) * 100),
            unit: 'cm',
            hint: `L = n · (λ / 2) ⇒ longueur d'un fuseau = L / n.`,
            ruleApplied: 'Quantification des ondes stationnaires',
            mathExpression: `d_{NN} = ${L} / ${n} = ${fmtP(L / n)} m = ${fmtP((L / n) * 100)} cm`,
            explanation: `Chaque fuseau mesure ${fmtP((L / n) * 100)} cm.`,
          },
          {
            questionPrompt: `Déduis-en la longueur d'onde λ (en cm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(lambda * 100),
            unit: 'cm',
            hint: `λ = 2 · L / n.`,
            ruleApplied: 'Longueur d’onde stationnaire',
            mathExpression: `λ = 2 × ${fmtP((L / n) * 100)} = ${fmtP(lambda * 100)} cm`,
            explanation: `λ = ${fmtP(lambda * 100)} cm.`,
          },
          {
            questionPrompt: `Calcule la célérité v de propagation des ondes sur cette corde (en m/s).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v),
            unit: 'm/s',
            hint: `v = λ · f.`,
            ruleApplied: 'Célérité d’onde',
            mathExpression: `v = ${fmtP(lambda)} × ${f} = ${fmtP(v)} m/s`,
            explanation: `v = ${fmtP(v)} m/s.`,
          },
          {
            questionPrompt: `Quelle est la fréquence fondamentale f₁ (mode n = 1) de cette corde sous la même tension (en Hz) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(f1),
            unit: 'Hz',
            hint: `f_n = n · f₁.`,
            ruleApplied: 'Spectre harmonique d’une corde fixée',
            mathExpression: `f₁ = ${f} / ${n} = ${fmtP(f1)} Hz`,
            explanation: `f₁ = ${fmtP(f1)} Hz.`,
          },
          {
            questionPrompt: `Combien de nœuds de vibration compte-t-on au total sur la corde (en incluant les deux extrémités) pour n = ${n} fuseaux ?`,
            questionType: 'numeric',
            correctAnswer: String(n + 1),
            hint: `n fuseaux ⇒ n + 1 nœuds.`,
            ruleApplied: 'Topologie des nœuds et ventres',
            mathExpression: `N_nœuds = ${n} + 1 = ${n + 1}`,
            explanation: `Il y a ${n} ventres et ${n + 1} nœuds.`,
          },
          {
            questionPrompt: `Quel déphasage existe-t-il entre deux points appartenant à deux fuseaux voisins (de part et d'autre d'un nœud) ?`,
            questionType: 'qcm',
            options: [
              'Ils vibrent en opposition de phase (Δφ = π)',
              'Ils vibrent en phase (Δφ = 0)',
              'Ils sont en quadrature (Δφ = π/2)',
              'L’un est toujours fixe',
            ],
            correctAnswer: 'Ils vibrent en opposition de phase (Δφ = π)',
            hint: `Le facteur sin(2π x / λ) change de signe en traversant un nœud.`,
            ruleApplied: 'Phase des ondes stationnaires',
            mathExpression: `y(x, t) = 2a sin(2π x/λ) cos(2π f t)`,
            explanation: `Tous les points d'un même fuseau sont en phase ; deux fuseaux adjacents sont en opposition de phase.`,
          },
          {
            questionPrompt: `Pour le même son émis dans l'air à f₀ = 680 Hz par une sirène approchant un observateur fixe à v_s = 34 m/s (célérité du son c = 340 m/s), calcule la fréquence perçue f_rec = f₀ · c / (c - v_s) (arrondie à 0,1 Hz près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((680 * 340) / (340 - 34), 1),
            unit: 'Hz',
            hint: `Source en approche ⇒ le dénominateur (c - v_s) diminue, le son est plus aigu.`,
            ruleApplied: 'Effet Doppler (source en approche)',
            mathExpression: `f_rec = 680 × 340 / 306 ≈ ${fmtP((680 * 340) / 306, 1)} Hz`,
            explanation: `f_rec ≈ ${fmtP((680 * 340) / 306, 1)} Hz.`,
          },
          {
            questionPrompt: `Lorsque la sirène s'éloigne ensuite à la même vitesse v_s = 34 m/s, calcule la nouvelle fréquence perçue f'_rec = f₀ · c / (c + v_s) (arrondie à 0,1 Hz près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((680 * 340) / (340 + 34), 1),
            unit: 'Hz',
            hint: `Source en éloignement ⇒ c + v_s au dénominateur.`,
            ruleApplied: 'Effet Doppler (source en éloignement)',
            mathExpression: `f'_rec = 680 × 340 / 374 ≈ ${fmtP((680 * 340) / 374, 1)} Hz`,
            explanation: `f'_rec ≈ ${fmtP((680 * 340) / 374, 1)} Hz.`,
          },
          {
            questionPrompt: `Calcule le saut total de fréquence Δf = f_rec - f'_rec perçu au passage de la sirène (en Hz, arrondi à 0,1 Hz près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((680 * 340) / 306 - (680 * 340) / 374, 1),
            unit: 'Hz',
            hint: `Soustrais f'_rec à f_rec.`,
            ruleApplied: 'Amplitude du saut Doppler',
            mathExpression: `Δf ≈ ${fmtP((680 * 340) / 306 - (680 * 340) / 374, 1)} Hz`,
            explanation: `Le son baisse brutalement d'environ ${fmtP((680 * 340) / 306 - (680 * 340) / 374, 1)} Hz.`,
          },
          {
            questionPrompt: `Calcule la distance entre deux ventres consécutifs sur la corde de Melde (en cm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(distNoeud * 100),
            unit: 'cm',
            hint: `Égale à λ/2.`,
            ruleApplied: 'Symétrie nœuds/ventres',
            mathExpression: `d_{VV} = λ/2 = ${fmtP(distNoeud * 100)} cm`,
            explanation: `Deux ventres consécutifs sont distants de λ/2 = ${fmtP(distNoeud * 100)} cm.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Ondes stationnaires (corde de Melde) et effet Doppler acoustique`,
          `Étude d'une corde vibrante de longueur L = ${L} m (${n} fuseaux à ${f} Hz) et du décalage Doppler d'une sirène à 680 Hz.`,
          items
        );
      }

      // vMod === 2: Cuve à ondes, interférences mécaniques à la surface de l'eau & diffraction
      const f = pickRandom([20, 25]); // Hz
      const lambdaCm = pickRandom([2.0, 2.5]); // cm
      const vCmS = f * lambdaCm; // cm/s
      const S1S2Cm = 8.0; // cm
      const lambdaExact = lambdaCm;
      const maxK = Math.floor(S1S2Cm / lambdaExact);
      const countMaxLines = 2 * Math.floor((S1S2Cm - 0.001) / lambdaExact) + 1;
      const aCm = 4.0; // ouverture de fente = 4 cm
      const sinTheta = lambdaCm / aCm;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `À la surface d'une cuve à ondes, deux pointes S₁ et S₂ distantes de d = 8,0 cm vibrent en phase à f = ${f} Hz. L'écart entre 5 lignes de crête consécutives d'une onde progressive est de ${4 * lambdaCm} cm. Détermine λ (en cm).`,
          questionType: 'numeric',
          correctAnswer: fmtP(lambdaCm),
          unit: 'cm',
          hint: `5 crêtes consécutives sont séparées par 4 intervalles égaux à 4λ.`,
          ruleApplied: 'Mesure de longueur d’onde sur photo stroboscopique',
          mathExpression: `4λ = ${4 * lambdaCm} cm ⇒ λ = ${fmtP(lambdaCm)} cm`,
          explanation: `λ = ${fmtP(lambdaCm)} cm.`,
        },
        {
          questionPrompt: `Calcule la célérité v des ondes de surface (en m/s).`,
          questionType: 'numeric',
          correctAnswer: fmtP(vCmS / 100),
          unit: 'm/s',
          hint: `v = λ · f avec λ en m.`,
          ruleApplied: 'Célérité d’onde',
          mathExpression: `v = ${fmtP(lambdaCm / 100, 3)} × ${f} = ${fmtP(vCmS / 100)} m/s`,
          explanation: `v = ${fmtP(vCmS / 100)} m/s.`,
        },
        {
          questionPrompt: `Quelle condition relie la différence de marche δ = MS₂ - MS₁ à λ pour qu'un point M soit un maximum d'amplitude (frange constructive) ?`,
          questionType: 'qcm',
          options: [
            `δ = k · λ (avec k ∈ ℤ)`,
            `δ = (k + ½) · λ (avec k ∈ ℤ)`,
            `δ = k · λ / 4`,
            `δ = 0 uniquement`,
          ],
          correctAnswer: `δ = k · λ (avec k ∈ ℤ)`,
          hint: `Les deux sources vibrent en phase.`,
          ruleApplied: 'Condition d’interférences constructives',
          mathExpression: `MS₂ - MS₁ = k λ, k ∈ ℤ`,
          explanation: `δ = kλ donne une somme en phase d'amplitude 2a.`,
        },
        {
          questionPrompt: `Un point M vérifie MS₁ = 12,0 cm et MS₂ = ${12 + 2.5 * lambdaCm} cm. Calcule l'ordre d'interférence p = (MS₂ - MS₁)/λ.`,
          questionType: 'numeric',
          correctAnswer: '2.5',
          hint: `Divise δ = ${2.5 * lambdaCm} cm par λ = ${lambdaCm} cm.`,
          ruleApplied: 'Ordre d’interférence',
          mathExpression: `p = ${2.5 * lambdaCm} / ${lambdaCm} = 2,5`,
          explanation: `p = 2,5 est demi-entier : M se trouve sur une ligne nodale (immobile, interférence destructive).`,
        },
        {
          questionPrompt: `Combien de lignes d'amplitude maximale (hyperboles constructives, y compris la médiatrice k = 0) coupent le segment ]S₁S₂[ de longueur 8,0 cm ?`,
          questionType: 'numeric',
          correctAnswer: String(countMaxLines),
          hint: `Sur ]S₁S₂[, |k·λ| < 8,0 cm.`,
          ruleApplied: 'Dénombrement des franges sur [S₁S₂]',
          mathExpression: `-8 < k·${lambdaCm} < 8 ⇒ k ∈ {-${Math.floor((8 - 0.001) / lambdaCm)}, ..., +${Math.floor((8 - 0.001) / lambdaCm)}} ⇒ ${countMaxLines} lignes`,
          explanation: `On compte ${countMaxLines} franges constructives strictement entre S₁ et S₂.`,
        },
        {
          questionPrompt: `Quelle est la distance entre deux maximums consécutifs le long du segment [S₁S₂] (en cm) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(lambdaCm / 2),
          unit: 'cm',
          hint: `Entre S₁ et S₂, les deux ondes se propagent en sens inverse et forment des ondes stationnaires de pas λ/2.`,
          ruleApplied: 'Interfrange sur la ligne des sources',
          mathExpression: `Δx = λ / 2 = ${fmtP(lambdaCm / 2)} cm`,
          explanation: `Deux ventres consécutifs sur [S₁S₂] sont distants de λ/2 = ${fmtP(lambdaCm / 2)} cm.`,
        },
        {
          questionPrompt: `On éclaire l'onde à l'aide d'un stroboscope de fréquence réglable f_e. Quelle est la plus grande fréquence f_{e,max} pour observer une immobilité apparente ?`,
          questionType: 'numeric',
          correctAnswer: String(f),
          unit: 'Hz',
          hint: `f_e = f / k ⇒ maximal pour k = 1.`,
          ruleApplied: 'Condition de stroboscopie synchrone',
          mathExpression: `f_{e,max} = f = ${f} Hz`,
          explanation: `Pour f_e = ${f} Hz, la surface paraît totalement figée.`,
        },
        {
          questionPrompt: `On place maintenant devant une onde plane (λ = ${lambdaCm} cm) un obstacle percé d'une fente de largeur a = 4,0 cm. Calcule l'écart angulaire de diffraction θ = λ / a en radians.`,
          questionType: 'numeric',
          correctAnswer: fmtP(sinTheta, 3),
          unit: 'rad',
          hint: `${lambdaCm} / 4,0.`,
          ruleApplied: 'Loi de diffraction par une fente',
          mathExpression: `θ = ${lambdaCm} / 4,0 = ${fmtP(sinTheta, 3)} rad`,
          explanation: `θ ≈ ${fmtP(sinTheta, 3)} rad (soit ≈ ${fmtP((sinTheta * 180) / Math.PI, 1)}°).`,
        },
        {
          questionPrompt: `Si l'onde passe dans une zone moins profonde où la célérité diminue de 20 %, que devient sa fréquence f ?`,
          questionType: 'numeric',
          correctAnswer: String(f),
          unit: 'Hz',
          hint: `La fréquence est imposée par le vibreur et ne change jamais lors d'un changement de milieu.`,
          ruleApplied: 'Invariance de la fréquence lors de la réfraction',
          mathExpression: `f' = f = ${f} Hz (seule λ diminue de 20 %)`,
          explanation: `La fréquence reste égale à ${f} Hz ; la longueur d'onde diminue proportionnellement à v.`,
        },
        {
          questionPrompt: `Pour cette cuve, quel critère rend la diffraction très marquée ?`,
          questionType: 'qcm',
          options: [
            `a ≤ λ (ouverture de l'ordre de la longueur d'onde)`,
            `a ≫ λ (ouverture 100 fois plus grande que λ)`,
            `Fréquence infinie`,
            `Amortissement infini`,
          ],
          correctAnswer: `a ≤ λ (ouverture de l'ordre de la longueur d'onde)`,
          hint: `θ = λ/a devient grand quand a diminue vers λ.`,
          ruleApplied: 'Condition d’observation de la diffraction',
          mathExpression: `a ~ λ`,
          explanation: `Plus la fente a est étroite devant λ, plus le faisceau diffracté s'étale.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Cuve à ondes : interférences mécaniques, stroboscopie et diffraction`,
        `Deux pointes synchrones S₁, S₂ (d = 8,0 cm, f = ${f} Hz) créent des rides de longueur d'onde λ = ${lambdaCm} cm.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 8. INTERFÉRENCES LUMINEUSES & DUALITÉ ONDE-CORPUSCULE
    // -------------------------------------------------------------------------
    case 'physTc-interferences-lumiere': {
      if (vMod === 0) {
        // Fentes d'Young monochromatiques
        const lambdaNm = pickRandom([500, 600]); // nm
        const aMm = pickRandom([0.4, 0.5]); // mm
        const D = pickRandom([1.6, 2.0]); // m
        // i = lambda * D / a
        const iMm = (lambdaNm * 1e-9 * D) / (aMm * 1e-3) * 1000; // en mm !
        const x4B = 4 * iMm;
        const x3S = 2.5 * iMm; // 3e frange sombre à droite : k = 2 => (2 + 0.5)*i = 2.5 i
        const lTotal = 12; // largeur champ 12 mm => nombre de franges brillantes
        const numBright = 2 * Math.floor(lTotal / 2 / iMm) + 1;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un dispositif des fentes d'Young (écart a = ${aMm} mm, écran à D = ${D} m) est éclairé en lumière monochromatique λ = ${lambdaNm} nm. Quelle est l'expression de la différence de marche δ au point M d'abscisse x sur l'écran ?`,
            questionType: 'qcm',
            options: [
              `δ = (a · x) / D`,
              `δ = (D · x) / a`,
              `δ = (a · D) / x`,
              `δ = λ · x / D`,
            ],
            correctAnswer: `δ = (a · x) / D`,
            hint: `Approximation des petits angles x ≪ D et a ≪ D.`,
            ruleApplied: 'Différence de marche des fentes d’Young',
            mathExpression: `δ = S₂M - S₁M ≈ a x / D`,
            explanation: `δ = ax/D dans les conditions de Gauss (a, x ≪ D).`,
          },
          {
            questionPrompt: `Calcule l'interfrange i = λ D / a (en mm, arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(iMm),
            unit: 'mm',
            hint: `(${lambdaNm}×10⁻⁹ × ${D}) / (${aMm}×10⁻³), puis ×1000.`,
            ruleApplied: 'Formule de l’interfrange',
            mathExpression: `i = (${lambdaNm}×10⁻⁹ × ${D}) / (${aMm}×10⁻³) = ${fmtP(iMm)} mm`,
            explanation: `i = ${fmtP(iMm)} mm.`,
          },
          {
            questionPrompt: `Calcule la distance entre la frange centrale (k = 0) et la 4e frange brillante d'ordre k = 4 (en mm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(x4B),
            unit: 'mm',
            hint: `x_k = k · i.`,
            ruleApplied: 'Position des franges brillantes',
            mathExpression: `x₄ = 4 × ${fmtP(iMm)} = ${fmtP(x4B)} mm`,
            explanation: `x₄ = ${fmtP(x4B)} mm.`,
          },
          {
            questionPrompt: `À quelle distance x du centre O se situe la 3e frange sombre (k = 2 dans δ = (k + ½)λ) (en mm) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(x3S),
            unit: 'mm',
            hint: `1re sombre à 0,5 i, 2e sombre à 1,5 i, 3e sombre à 2,5 i.`,
            ruleApplied: 'Position des franges sombres',
            mathExpression: `x = 2,5 × ${fmtP(iMm)} = ${fmtP(x3S)} mm`,
            explanation: `La 3e frange sombre est à ${fmtP(x3S)} mm de O.`,
          },
          {
            questionPrompt: `Combien de franges brillantes entières observe-t-on dans un champ d'interférences de largeur totale L = 12 mm centré en O ?`,
            questionType: 'numeric',
            correctAnswer: String(numBright),
            hint: `Cherche les entiers k vérifiant -6 ≤ k·i ≤ +6.`,
            ruleApplied: 'Dénombrement des franges dans un champ limité',
            mathExpression: `|k| ≤ 6/${fmtP(iMm)} ⇒ ${numBright} franges brillantes`,
            explanation: `Il y a ${numBright} franges brillantes visibles dans le champ de 12 mm.`,
          },
          {
            questionPrompt: `On mesure x = 9,0 mm entre deux points A et B symétriques centrés sur 6 interfranges. Comment vérifie-t-on expérimentalement i avec précision ?`,
            questionType: 'qcm',
            options: [
              'En mesurant N interfranges consécutifs et en divisant L_N par N',
              'En mesurant un seul interfrange au double décimètre',
              'En supprimant une des deux fentes',
              'En éteignant le laser',
            ],
            correctAnswer: 'En mesurant N interfranges consécutifs et en divisant L_N par N',
            hint: `Mesurer N interfranges divise l'incertitude relative par N.`,
            ruleApplied: 'Protocole métrologique d’incertitude',
            mathExpression: `i = L_N / N`,
            explanation: `Mesurer par exemple 10 interfranges réduit d'un facteur 10 l'erreur de lecture.`,
          },
          {
            questionPrompt: `On plonge entièrement le dispositif dans l'eau d'indice n = 4/3 (≈ 1,333). Que vaut le nouvel interfrange i' = i / n (en mm, arrondi à 0,01 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP((iMm * 3) / 4),
            unit: 'mm',
            hint: `Dans un milieu d'indice n, la longueur d'onde devient λ' = λ / n.`,
            ruleApplied: 'Interférences dans un milieu réfringent',
            mathExpression: `i' = ${fmtP(iMm)} / (4/3) = ${fmtP((iMm * 3) / 4)} mm`,
            explanation: `Les franges se resserrent d'un facteur n : i' ≈ ${fmtP((iMm * 3) / 4)} mm.`,
          },
          {
            questionPrompt: `Si l'on translate la source primaire S parallèlement à F₁F₂ vers le haut d'une distance d_S, dans quel sens se déplace la frange centrale blanche d'ordre 0 ?`,
            questionType: 'qcm',
            options: [
              'Vers le bas (sens opposé à S, pour conserver δ_total = 0)',
              'Vers le haut (même sens que S)',
              'Elle reste immobile en O',
              'Elle disparaît',
            ],
            correctAnswer: 'Vers le bas (sens opposé à S, pour conserver δ_total = 0)',
            hint: `δ_total = (S F₂ - S F₁) + (F₂ M - F₁ M) = 0.`,
            ruleApplied: 'Déplacement des franges par translation de source',
            mathExpression: `δ_total = a·y_S / d + a·x / D = 0`,
            explanation: `Pour annuler la différence de marche amont, la frange centrale descend.`,
          },
          {
            questionPrompt: `Calcule la fréquence ν = c / λ de cette radiation lumineuse (en 10¹⁴ Hz, avec c = 3,00×10⁸ m/s, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP((3e8 / (lambdaNm * 1e-9)) / 1e14),
            unit: '×10¹⁴ Hz',
            hint: `3×10⁸ / (${lambdaNm}×10⁻⁹).`,
            ruleApplied: 'Fréquence d’une onde électromagnétique',
            mathExpression: `ν = ${fmtP((3e8 / (lambdaNm * 1e-9)) / 1e14)}×10¹⁴ Hz`,
            explanation: `ν = ${fmtP((3e8 / (lambdaNm * 1e-9)) / 1e14)}×10¹⁴ Hz.`,
          },
          {
            questionPrompt: `Calcule l'énergie d'un photon de cette radiation en eV (avec h = 6,63×10⁻³⁴ J·s, e = 1,6×10⁻¹⁹ C, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((6.63e-34 * 3e8) / (lambdaNm * 1e-9 * 1.6e-19)),
            unit: 'eV',
            hint: `E_eV ≈ 1243 / λ(nm).`,
            ruleApplied: 'Quantum d’énergie du photon E = hc / λ',
            mathExpression: `E ≈ ${fmtP((6.63e-34 * 3e8) / (lambdaNm * 1e-9 * 1.6e-19))} eV`,
            explanation: `E ≈ ${fmtP((6.63e-34 * 3e8) / (lambdaNm * 1e-9 * 1.6e-19))} eV.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Fentes d'Young : interfrange, milieu d'indice n et translation de source`,
          `Fentes d'Young (a = ${aMm} mm, D = ${D} m) éclairées sous λ = ${lambdaNm} nm.`,
          items
        );
      }

      if (vMod === 1) {
        // Doublet / lumière blanche & spectre cannelé (deux longueurs d'onde l1 = 480 nm, l2 = 640 nm -> 4*480 = 3*640 = 1920 nm !)
        const l1 = 480; // nm
        const l2 = 640; // nm
        const aMm = pickRandom([0.5, 1.0]);
        const D = 2.0; // m
        const i1 = (l1 * 1e-9 * D) / (aMm * 1e-3) * 1000; // mm
        const i2 = (l2 * 1e-9 * D) / (aMm * 1e-3) * 1000; // mm
        const xCoinc = 4 * i1; // 4 * i1 = 3 * i2 !
        // Spectre cannelé en lumière blanche [400 nm ; 750 nm] en un point x = 3.0 mm avec a=1 mm, D=2 m -> delta = a*x/D = 1500 nm !
        // Cannelures sombres : delta = (k + 0.5)*lambda => lambda = 1500/(k+0.5):
        // k=1 -> 1500/1.5 = 1000 (IR) ; k=2 -> 1500/2.5 = 600 nm (visible!) ; k=3 -> 1500/3.5 = 428.6 nm (visible!)

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On éclaire des fentes d'Young (a = ${aMm} mm, D = 2,0 m) simultanément avec deux radiations λ₁ = 480 nm et λ₂ = 640 nm. Calcule l'interfrange i₁ de λ₁ (en mm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(i1),
            unit: 'mm',
            hint: `i₁ = λ₁ D / a.`,
            ruleApplied: 'Interfrange monochromatique',
            mathExpression: `i₁ = (480×10⁻⁹ × 2) / (${aMm}×10⁻³) × 1000 = ${fmtP(i1)} mm`,
            explanation: `i₁ = ${fmtP(i1)} mm.`,
          },
          {
            questionPrompt: `Calcule l'interfrange i₂ de λ₂ = 640 nm (en mm).`,
            questionType: 'numeric',
            correctAnswer: fmtP(i2),
            unit: 'mm',
            hint: `i₂ = λ₂ D / a.`,
            ruleApplied: 'Interfrange monochromatique',
            mathExpression: `i₂ = ${fmtP(i2)} mm`,
            explanation: `i₂ = ${fmtP(i2)} mm.`,
          },
          {
            questionPrompt: `Quelle est la relation arithmétique entre les ordres entiers k₁ et k₂ de la première coïncidence exacte de franges brillantes (hors O) ?`,
            questionType: 'qcm',
            options: [
              'k₁ = 4 et k₂ = 3 (car 4 × 480 = 3 × 640 = 1920 nm)',
              'k₁ = 3 et k₂ = 4',
              'k₁ = 6 et k₂ = 4',
              'k₁ = 2 et k₂ = 3',
            ],
            correctAnswer: 'k₁ = 4 et k₂ = 3 (car 4 × 480 = 3 × 640 = 1920 nm)',
            hint: `k₁ / k₂ = λ₂ / λ₁ = 640 / 480 = 4 / 3.`,
            ruleApplied: 'Coïncidence d’interférences et PPCM',
            mathExpression: `k₁ λ₁ = k₂ λ₂ ⇒ k₁/k₂ = 4/3`,
            explanation: `La première coïncidence non nulle survient pour k₁ = 4 et k₂ = 3 (PPCM = 1920 nm).`,
          },
          {
            questionPrompt: `À quelle distance x_coïnc du centre O cette première coïncidence a-t-elle lieu (en mm) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(xCoinc),
            unit: 'mm',
            hint: `x = 4 · i₁ = 3 · i₂.`,
            ruleApplied: 'Abscisse de coïncidence',
            mathExpression: `x = 4 × ${fmtP(i1)} = ${fmtP(xCoinc)} mm`,
            explanation: `À x = ${fmtP(xCoinc)} mm, les deux franges brillantes se superposent exactement.`,
          },
          {
            questionPrompt: `On remplace le doublet par une lumière blanche ([400 nm ; 750 nm]). Quelle est la couleur de la frange centrale x = 0 ?`,
            questionType: 'qcm',
            options: [
              'Blanche (car δ = 0 pour toutes les longueurs d’onde)',
              'Noire (annulation totale)',
              'Rouge uniquement',
              'Irisée sans blanc',
            ],
            correctAnswer: 'Blanche (car δ = 0 pour toutes les longueurs d’onde)',
            hint: `En x = 0, toutes les radiations ont δ = 0 = 0×λ.`,
            ruleApplied: 'Frange centrale achromatique',
            mathExpression: `δ(0) = 0 ⇒ constructif ∀λ`,
            explanation: `Toutes les couleurs du spectre s'additionnent constructivement en x = 0, donnant du blanc.`,
          },
          {
            questionPrompt: `On analyse au spectroscope la lumière en un point fixe M où la différence de marche vaut δ = 1500 nm. Pour quelle plus grande longueur d'onde visible λ ∈ [400 ; 750 nm] y a-t-il extinction (cannelure noire) ?`,
            questionType: 'numeric',
            correctAnswer: '600',
            unit: 'nm',
            hint: `δ = (k + ½)λ ⇒ λ = 1500 / (k + 0,5). Teste k = 1, 2, 3...`,
            ruleApplied: 'Spectre cannelé en lumière blanche',
            mathExpression: `k = 2 ⇒ λ = 1500 / 2,5 = 600 nm`,
            explanation: `Pour k = 2, λ = 600 nm est éteinte (pour k = 1, λ = 1000 nm est infrarouge).`,
          },
          {
            questionPrompt: `Quelle seconde longueur d'onde visible (k = 3) est aussi absente du spectre cannelé à δ = 1500 nm (en nm, arrondie à 0,1 près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(1500 / 3.5, 1),
            unit: 'nm',
            hint: `1500 / 3,5.`,
            ruleApplied: 'Raies d’extinction du spectre cannelé',
            mathExpression: `k = 3 ⇒ λ = 1500 / 3,5 ≈ ${fmtP(1500 / 3.5, 1)} nm`,
            explanation: `428,6 nm (violet-bleu) est aussi absente.`,
          },
          {
            questionPrompt: `Quelle longueur d'onde visible (k = 2) correspond à un maximum brillant (constructive δ = k λ) en ce même point δ = 1500 nm (en nm) ?`,
            questionType: 'numeric',
            correctAnswer: '750',
            unit: 'nm',
            hint: `1500 / 2.`,
            ruleApplied: 'Raies brillantes du spectre cannelé',
            mathExpression: `λ = 1500 / 2 = 750 nm (et k = 3 donne 500 nm)`,
            explanation: `750 nm (et 500 nm pour k = 3) sont à leur maximum d'intensité.`,
          },
          {
            questionPrompt: `Combien de cannelures sombres visibles au total compte-t-on dans [400 nm ; 750 nm] pour δ = 1500 nm ?`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `Vérifie k = 1 (1000 nm), k = 2 (600 nm), k = 3 (428,6 nm), k = 4 (333,3 nm).`,
            ruleApplied: 'Comptage des cannelures visibles',
            mathExpression: `k ∈ {2 ; 3} ⇒ 2 cannelures noires`,
            explanation: `Seules 600 nm et 428,6 nm appartiennent au domaine visible.`,
          },
          {
            questionPrompt: `À grande distance x du centre O en lumière blanche, on observe un « blanc d'ordre supérieur ». Pourquoi ?`,
            questionType: 'qcm',
            options: [
              'De très nombreuses cannelures brillantes et sombres régulièrement espacées recréent la sensation de blanc pour l’œil',
              'La lumière blanche devient monochromatique',
              'Les fentes se ferment',
              'La diffraction annule le champ',
            ],
            correctAnswer: 'De très nombreuses cannelures brillantes et sombres régulièrement espacées recréent la sensation de blanc pour l’œil',
            hint: `Quand δ devient grand devant λ, le spectre contient beaucoup de bandes alternées sur tout le visible.`,
            ruleApplied: 'Blanc d’ordre supérieur',
            mathExpression: `δ ≫ λ ⇒ spectre riche en cannelures`,
            explanation: `L'œil intègre toutes les longueurs d'onde restantes réparties dans le visible.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Doublet lumineux, coïncidence PPCM et spectre cannelé en lumière blanche`,
          `Fentes d'Young (a = ${aMm} mm, D = 2,0 m) éclairées par le doublet (480 nm ; 640 nm) puis en lumière blanche.`,
          items
        );
      }

      // vMod === 2: Effet photoélectrique & diffraction laser
      const wsEv = pickRandom([2.1, 2.3]); // eV (césium ~2.1 eV, sodium ~2.3 eV)
      const h = 6.63e-34;
      const c = 3.0e8;
      const e = 1.6e-19;
      const lambdaSeuilNm = ((h * c) / (wsEv * e)) * 1e9;
      const lambdaIncNm = 400; // violet 400 nm
      const ePhotonEv = (h * c) / (lambdaIncNm * 1e-9 * e);
      const ecMaxEv = ePhotonEv - wsEv;
      const uArret = ecMaxEv; // en V, numériquement égal à EcMax en eV !
      const me = 9.1e-31;
      const vMaxElec = Math.sqrt((2 * ecMaxEv * e) / me);
      // Diffraction laser 400 nm sur fente a = 0.08 mm à D = 2 m -> L = 2*lambda*D/a
      const aFenteMm = 0.08;
      const lTacheMm = (2 * 400e-9 * 2) / (aFenteMm * 1e-3) * 1000;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `Une photocathode métallique a un travail d'extraction W₀ = ${wsEv} eV (h = 6,63×10⁻³⁴ J·s, c = 3,00×10⁸ m/s, e = 1,6×10⁻¹⁹ C). Convertis W₀ en 10⁻¹⁹ J (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP((wsEv * e) / 1e-19),
          unit: '×10⁻¹⁹ J',
          hint: `W₀(J) = W₀(eV) × 1,6×10⁻¹⁹.`,
          ruleApplied: 'Conversion eV en Joules',
          mathExpression: `W₀ = ${wsEv} × 1,6×10⁻¹⁹ = ${fmtP((wsEv * e) / 1e-19)}×10⁻¹⁹ J`,
          explanation: `W₀ ≈ ${fmtP((wsEv * e) / 1e-19)}×10⁻¹⁹ J.`,
        },
        {
          questionPrompt: `Calcule la longueur d'onde seuil λ_s = hc / W₀ de ce métal (en nm, arrondie à 1 nm près).`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(lambdaSeuilNm)),
          unit: 'nm',
          hint: `λ_s = (6,63×10⁻³⁴ × 3×10⁸) / W₀(J).`,
          ruleApplied: 'Seuil photoélectrique',
          mathExpression: `λ_s ≈ ${Math.round(lambdaSeuilNm)} nm`,
          explanation: `Seules les radiations de longueur d'onde λ ≤ ${Math.round(lambdaSeuilNm)} nm peuvent extraire un électron.`,
        },
        {
          questionPrompt: `Une radiation rouge de λ = 650 nm permet-elle d'observer l'effet photoélectrique sur ce métal ?`,
          questionType: 'qcm',
          options: [
            `Non, car 650 nm > λ_s (l'énergie du photon est inférieure à W₀)`,
            `Oui, en augmentant suffisamment l'intensité lumineuse`,
            `Oui, car tous les métaux réagissent au rouge`,
            `Oui, mais avec un retard de 10 secondes`,
          ],
          correctAnswer: `Non, car 650 nm > λ_s (l'énergie du photon est inférieure à W₀)`,
          hint: `L'effet photoélectrique est une interaction individuelle photon-électron à seuil en fréquence.`,
          ruleApplied: 'Interprétation quantique d’Einstein',
          mathExpression: `λ > λ_s ⇔ hν < W₀ ⇒ pas d'extraction`,
          explanation: `En dessous de ν_s = c/λ_s, même un faisceau très intense n'extrait aucun électron.`,
        },
        {
          questionPrompt: `On éclaire maintenant la cathode avec une radiation violette λ = 400 nm. Calcule l'énergie E_ph d'un photon incident en eV (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(ePhotonEv),
          unit: 'eV',
          hint: `E_ph = (hc / λ) / e.`,
          ruleApplied: 'Énergie du photon',
          mathExpression: `E_ph ≈ ${fmtP(ePhotonEv)} eV`,
          explanation: `E_ph ≈ ${fmtP(ePhotonEv)} eV.`,
        },
        {
          questionPrompt: `Par la relation d'Einstein E_ph = W₀ + E_{c,max}, calcule l'énergie cinétique maximale E_{c,max} des photoélectrons émis (en eV, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(ecMaxEv),
          unit: 'eV',
          hint: `E_ph - W₀.`,
          ruleApplied: 'Relation d’Einstein de l’effet photoélectrique',
          mathExpression: `E_{c,max} = ${fmtP(ePhotonEv)} - ${wsEv} ≈ ${fmtP(ecMaxEv)} eV`,
          explanation: `E_{c,max} ≈ ${fmtP(ecMaxEv)} eV.`,
        },
        {
          questionPrompt: `Quel est le potentiel d'arrêt U₀ (tension négative annulant le courant photoélectrique) en Volts (arrondi à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(uArret),
          unit: 'V',
          hint: `e · U₀ = E_{c,max}.`,
          ruleApplied: 'Potentiel d’arrêt',
          mathExpression: `U₀ = ${fmtP(ecMaxEv)} V`,
          explanation: `Numériquement, U₀ en volts est égal à E_{c,max} en eV : ${fmtP(uArret)} V.`,
        },
        {
          questionPrompt: `Calcule la vitesse maximale v_max de sortie des électrons (m_e = 9,1×10⁻³¹ kg, en km/s, arrondie à 1 km/s près).`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(vMaxElec / 1000)),
          unit: 'km/s',
          hint: `v_max = √(2 · E_{c,max}(J) / m_e).`,
          ruleApplied: 'Énergie cinétique classique',
          mathExpression: `v_max ≈ ${Math.round(vMaxElec / 1000)} km/s`,
          explanation: `v_max ≈ ${Math.round(vMaxElec / 1000)} km/s.`,
        },
        {
          questionPrompt: `Calcule la quantité de mouvement p = h / λ d'un photon de 400 nm (en 10⁻²⁷ kg·m/s, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP((h / 400e-9) / 1e-27),
          unit: '×10⁻²⁷ kg·m/s',
          hint: `6,63×10⁻³⁴ / (4×10⁻⁷).`,
          ruleApplied: 'Relation de de Broglie pour le photon',
          mathExpression: `p = h/λ ≈ ${fmtP((h / 400e-9) / 1e-27)}×10⁻²⁷ kg·m/s`,
          explanation: `Même sans masse au repos, le photon transporte une impulsion p = h/λ.`,
        },
        {
          questionPrompt: `On fait passer ce laser (λ = 400 nm) à travers une fente de largeur a = 0,08 mm sur un écran à D = 2,0 m. Calcule la largeur L = 2 λ D / a de la tache centrale de diffraction (en mm).`,
          questionType: 'numeric',
          correctAnswer: fmtP(lTacheMm),
          unit: 'mm',
          hint: `L = 2 × (400×10⁻⁹ × 2) / (0,08×10⁻³) × 1000.`,
          ruleApplied: 'Largeur de la tache centrale de diffraction',
          mathExpression: `L = ${fmtP(lTacheMm)} mm`,
          explanation: `La tache centrale mesure L = ${fmtP(lTacheMm)} mm.`,
        },
        {
          questionPrompt: `Quelle conclusion fondamentale de la physique quantique illustre ce problème ?`,
          questionType: 'qcm',
          options: [
            'La dualité onde-corpuscule : la lumière se diffracte comme une onde et échange son énergie par photons (E = hν)',
            'La lumière est exclusivement corpusculaire',
            'La lumière est exclusivement une onde continue',
            'La constante h est nulle à haute fréquence',
          ],
          correctAnswer: 'La dualité onde-corpuscule : la lumière se diffracte comme une onde et échange son énergie par photons (E = hν)',
          hint: `Diffraction/interférences = aspect ondulatoire ; effet photoélectrique = aspect corpusculaire.`,
          ruleApplied: 'Dualité onde-corpuscule',
          mathExpression: `E = hν et p = h/λ`,
          explanation: `Les deux descriptions sont complémentaires.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Effet photoélectrique (Einstein), potentiel d'arrêt et diffraction laser`,
        `Étude quantique d'une photocathode (W₀ = ${wsEv} eV) éclairée à λ = 400 nm et diffraction sur fente a = 0,08 mm.`,
        items
      );
    }

    default:
      return null;
  }
}
