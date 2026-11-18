import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom } from './types';
import { assembleHardPhysExercise, fmtP, HardQuestionSpec } from './tcHardPhysHelpers';

export function generateHardPhysCh12to14(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 12. ACIDES, BASES, pH & SOLUTIONS TAMPONS
    // -------------------------------------------------------------------------
    case 'physTc-acides-bases-ph': {
      if (vMod === 0) {
        // Acide faible HA (pKa = 3.8 ou 4.8) à C0 = 0.01 mol/L : résolution exacte + approximation + dilution
        const pKa = pickRandom([3.8, 4.8]);
        const C0 = 0.01; // mol/L
        const Ka = Math.pow(10, -pKa);
        // Équation exacte : h^2 + Ka*h - Ka*C0 = 0
        const hExact = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * C0)) / 2;
        const pHExact = -Math.log10(hExact);
        const pHApprox = 0.5 * (pKa - Math.log10(C0));
        const tauPct = (hExact / C0) * 100;
        const ohConc = 1e-14 / hExact;
        const hDil = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * (C0 / 10))) / 2;
        const tauDilPct = (hDil / (C0 / 10)) * 100;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On prépare une solution d'acide faible HA de concentration C₀ = 1,0×10⁻² mol/L (pK_a = ${pKa} à 25 °C). Calcule la constante d'acidité K_a = 10^{-pK_a} (en 10⁻⁵, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Ka * 1e5),
            unit: '×10⁻⁵',
            hint: `10^{-${pKa}} = 10^{${fmtP(5 - pKa, 1)}} × 10⁻⁵.`,
            ruleApplied: 'Relation pK_a et K_a',
            mathExpression: `K_a = 10^{-${pKa}} ≈ ${fmtP(Ka * 1e5)}×10⁻⁵`,
            explanation: `K_a ≈ ${fmtP(Ka * 1e5)}×10⁻⁵.`,
          },
          {
            questionPrompt: `Dans l'approximation d'un acide faiblement dissocié (τ < 5 %), la formule approchée donne pH ≈ ½(pK_a - log C₀). Calcule ce pH approché.`,
            questionType: 'numeric',
            correctAnswer: fmtP(pHApprox),
            hint: `-log(10⁻²) = 2.`,
            ruleApplied: 'Formule approchée du pH d’un acide faible',
            mathExpression: `pH ≈ ½(${pKa} + 2) = ${fmtP(pHApprox)}`,
            explanation: `L'approximation donne pH ≈ ${fmtP(pHApprox)}.`,
          },
          {
            questionPrompt: `Sans aucune approximation, en notant h = [H₃O⁺], quelle équation du second degré vérifie h (bilan de matière + électroneutralité, en négligeant [OH⁻]) ?`,
            questionType: 'qcm',
            options: [
              `h² + K_a·h - K_a·C₀ = 0`,
              `h² - K_a·h + K_a·C₀ = 0`,
              `h² + C₀·h - K_a = 0`,
              `h = K_a · C₀`,
            ],
            correctAnswer: `h² + K_a·h - K_a·C₀ = 0`,
            hint: `K_a = [A⁻][H₃O⁺]/[HA] ≈ h² / (C₀ - h).`,
            ruleApplied: 'Équation exacte de dissociation (Ostwald)',
            mathExpression: `h² / (C₀ - h) = K_a ⇔ h² + K_a h - K_a C₀ = 0`,
            explanation: `C'est l'équation quadratique exacte (hors autoprotolyse négligeable en milieu acide).`,
          },
          {
            questionPrompt: `Résous exactement h² + K_a·h - K_a·C₀ = 0 pour trouver la concentration exacte [H₃O⁺] (en 10⁻⁴ mol/L, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(hExact * 1e4),
            unit: '×10⁻⁴ mol/L',
            hint: `h = (-K_a + √(K_a² + 4 K_a C₀)) / 2.`,
            ruleApplied: 'Résolution exacte du second degré',
            mathExpression: `h ≈ ${fmtP(hExact * 1e4)}×10⁻⁴ mol/L`,
            explanation: `h ≈ ${fmtP(hExact * 1e4)}×10⁻⁴ mol/L.`,
          },
          {
            questionPrompt: `Déduis-en le pH exact = -log₁₀(h) (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(pHExact),
            hint: `-log₁₀(h).`,
            ruleApplied: 'Définition du pH',
            mathExpression: `pH = -log(${fmtP(hExact, 6)}) ≈ ${fmtP(pHExact)}`,
            explanation: `Le pH exact vaut ${fmtP(pHExact)}.`,
          },
          {
            questionPrompt: `Calcule le taux d'avancement final τ = [H₃O⁺] / C₀ (en %, arrondi à 0,01 % près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(tauPct),
            unit: '%',
            hint: `(h / 0,01) × 100.`,
            ruleApplied: 'Taux d’avancement final',
            mathExpression: `τ ≈ ${fmtP(tauPct)} %`,
            explanation: `τ ≈ ${fmtP(tauPct)} % (faiblement dissocié).`,
          },
          {
            questionPrompt: `Calcule la concentration résiduelle [HA] = C₀ - h (en mmol/L, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((C0 - hExact) * 1000),
            unit: 'mmol/L',
            hint: `10 - h(mmol/L).`,
            ruleApplied: 'Conservation de l’espèce acidobasique',
            mathExpression: `[HA] = 10 - ${fmtP(hExact * 1000)} = ${fmtP((C0 - hExact) * 1000)} mmol/L`,
            explanation: `La quasi-totalité de l'acide reste sous forme moléculaire HA.`,
          },
          {
            questionPrompt: `Calcule le rapport [A⁻] / [HA] à ce pH (arrondi à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(hExact / (C0 - hExact), 3),
            hint: `h / (C₀ - h).`,
            ruleApplied: 'Diagramme de distribution',
            mathExpression: `[A⁻]/[HA] ≈ ${fmtP(hExact / (C0 - hExact), 3)}`,
            explanation: `Comme pH < pK_a, l'acide HA est très largement prédominant.`,
          },
          {
            questionPrompt: `On dilue 10 fois la solution (C'₀ = 1,0×10⁻³ mol/L). Calcule le nouveau taux d'avancement τ' (en %, arrondi à 0,01 % près) en résolvant l'équation exacte.`,
            questionType: 'numeric',
            correctAnswer: fmtP(tauDilPct),
            unit: '%',
            hint: `Loi de dilution d'Ostwald : quand C₀ diminue d'un facteur 10, le taux d'ionisation τ augmente (environ ×√10).`,
            ruleApplied: 'Loi de dilution d’Ostwald',
            mathExpression: `τ' ≈ ${fmtP(tauDilPct)} % > ${fmtP(tauPct)} %`,
            explanation: `La dilution favorise toujours la dissociation de l'acide faible.`,
          },
          {
            questionPrompt: `Quelle grandeur reste constante lors de la dilution isotherme à 25 °C ?`,
            questionType: 'qcm',
            options: [
              'La constante d’acidité K_a (et pK_a)',
              'Le pH de la solution',
              'Le taux d’avancement τ',
              'La conductivité σ',
            ],
            correctAnswer: 'La constante d’acidité K_a (et pK_a)',
            hint: `K_a ne dépend que de la température.`,
            ruleApplied: 'Invariance isotherme de K_a',
            mathExpression: `K_a(T) = constante`,
            explanation: `Seule une variation de température modifie K_a.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Acide faible (pK_a = ${pKa}) : résolution exacte, taux τ et dilution d'Ostwald`,
          `Étude rigoureuse d'une solution d'acide faible HA (C₀ = 1,0×10⁻² mol/L, pK_a = ${pKa}).`,
          items
        );
      }

      if (vMod === 1) {
        // Titrage pH-métrique d'un acide faible (acide éthanoïque pKa = 4,8) par NaOH
        const Va = 20; // mL
        const Ca = pickRandom([0.1, 0.15]); // mol/L
        const Cb = 0.1; // mol/L NaOH
        const Veq = (Ca * Va) / Cb; // 20 mL ou 30 mL
        const pKa = 4.8;
        const pH0 = 0.5 * (pKa - Math.log10(Ca));
        const Vdemi = Veq / 2;
        const Ceq = (Ca * Va) / (Va + Veq);
        // À l'équivalence : solution de base faible A- à C_eq => pH_eq = 7 + 0.5*(pKa + log(Ceq))
        const pHeq = 7 + 0.5 * (pKa + Math.log10(Ceq));
        // À Vb = 2 * Veq (excès de NaOH) : [OH-] = (Cb*2*Veq - Ca*Va)/(Va + 2*Veq) = (Ca*Va)/(Va + 2*Veq)
        const cOH_excess = (Ca * Va) / (Va + 2 * Veq);
        const pH_excess = 14 + Math.log10(cOH_excess);

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On dose V_a = 20 mL d'acide éthanoïque CH₃COOH (C_a = ${Ca} mol/L, pK_a = 4,8) par de la soude (Na⁺ + OH⁻) à C_b = 0,10 mol/L. Quelle est l'équation de la réaction support du titrage ?`,
            questionType: 'qcm',
            options: [
              `CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O`,
              `CH₃COOH + H₃O⁺ → CH₃COO⁻ + 2 H₂O`,
              `CH₃COO⁻ + Na⁺ → CH₃COONa`,
              `H₃O⁺ + OH⁻ → 2 H₂O uniquement`,
            ],
            correctAnswer: `CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O`,
            hint: `Réaction rapide et quasi-totale de l'acide faible avec la base forte OH⁻.`,
            ruleApplied: 'Équation de titrage acide-base',
            mathExpression: `K = K_a / K_e = 10^{9,2} ≫ 10⁴ (totale)`,
            explanation: `Sa constante d'équilibre vaut 10^{9,2} : elle est totale.`,
          },
          {
            questionPrompt: `Estime le pH initial de la solution d'acide avant tout ajout de soude (formule approchée, arrondi à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(pH0),
            hint: `½(4,8 - log(${Ca})).`,
            ruleApplied: 'pH initial d’un acide faible',
            mathExpression: `pH₀ ≈ 0,5×(4,8 - log(${Ca})) ≈ ${fmtP(pH0)}`,
            explanation: `pH₀ ≈ ${fmtP(pH0)}.`,
          },
          {
            questionPrompt: `Calcule le volume équivalent V_{eq} de soude à verser (en mL).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Veq),
            unit: 'mL',
            hint: `C_a V_a = C_b V_{eq}.`,
            ruleApplied: 'Relation d’équivalence',
            mathExpression: `V_{eq} = (${Ca} × 20) / 0,10 = ${fmtP(Veq)} mL`,
            explanation: `V_{eq} = ${fmtP(Veq)} mL.`,
          },
          {
            questionPrompt: `Quel est le pH mesuré à la demi-équivalence (V_b = ${fmtP(Vdemi)} mL) ?`,
            questionType: 'numeric',
            correctAnswer: '4.8',
            hint: `À la demi-équivalence, [CH₃COOH] = [CH₃COO⁻].`,
            ruleApplied: 'Relation d’Henderson à la demi-équivalence',
            mathExpression: `pH(V_{eq}/2) = pK_a + log(1) = 4,8`,
            explanation: `On lit directement pK_a = 4,8 à la demi-équivalence.`,
          },
          {
            questionPrompt: `Comment qualifie-t-on le mélange obtenu au voisinage de V_b = ${fmtP(Vdemi)} mL ?`,
            questionType: 'qcm',
            options: [
              'Une solution tampon (pH peu sensible à la dilution ou à un faible ajout d’acide/base)',
              'Une solution neutre de pH = 7',
              'Une solution d’acide fort pur',
              'Un précipité solide',
            ],
            correctAnswer: 'Une solution tampon (pH peu sensible à la dilution ou à un faible ajout d’acide/base)',
            hint: `Mélange équimolaire d'un acide faible et de sa base conjuguée.`,
            ruleApplied: 'Zone tampon sur la courbe pH(V_b)',
            mathExpression: `dpH/dV_b minimal (point d’inflexion) à V_{eq}/2`,
            explanation: `La pente de la courbe pH(V_b) est minimale à la demi-équivalence : c'est la zone tampon.`,
          },
          {
            questionPrompt: `Calcule la concentration C_{eq} en ions éthanoate CH₃COO⁻ formés à l'équivalence (en mmol/L, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Ceq * 1000, 1),
            unit: 'mmol/L',
            hint: `n(CH₃COO⁻) = C_a V_a, divisé par le volume total (V_a + V_{eq}).`,
            ruleApplied: 'Dilution au point d’équivalence',
            mathExpression: `C_{eq} = (${Ca}×20) / (20 + ${Veq}) = ${fmtP(Ceq * 1000, 1)} mmol/L`,
            explanation: `C_{eq} = ${fmtP(Ceq * 1000, 1)} mmol/L.`,
          },
          {
            questionPrompt: `Calcule le pH théorique à l'équivalence (solution de base faible CH₃COO⁻ à C_{eq}) par pH_{eq} = 7 + ½(pK_a + log C_{eq}) (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(pHeq),
            hint: `7 + 0,5×(4,8 + log(${fmtP(Ceq, 4)})).`,
            ruleApplied: 'pH à l’équivalence d’un dosage acide faible / base forte',
            mathExpression: `pH_{eq} ≈ ${fmtP(pHeq)} > 7`,
            explanation: `L'équivalence est nettement basique (pH ≈ ${fmtP(pHeq)}) à cause de l'espèce conjuguée CH₃COO⁻.`,
          },
          {
            questionPrompt: `Quel indicateur coloré est le mieux adapté pour repérer visuellement cette équivalence à pH ≈ ${fmtP(pHeq)} ?`,
            questionType: 'qcm',
            options: [
              'Phénolphtaléine (zone de virage 8,2 – 10,0)',
              'Hélianthine (zone de virage 3,1 – 4,4)',
              'Bleu de thymol en zone acide (1,2 – 2,8)',
              'Rouge de méthyle (4,2 – 6,2)',
            ],
            correctAnswer: 'Phénolphtaléine (zone de virage 8,2 – 10,0)',
            hint: `pH_{eq} doit être encadré par la zone de virage.`,
            ruleApplied: 'Choix d’un indicateur coloré',
            mathExpression: `pH_{eq} ≈ ${fmtP(pHeq)} ∈ [8,2 ; 10,0]`,
            explanation: `La phénolphtaléine vire exactement lors du saut de pH autour de ${fmtP(pHeq)}.`,
          },
          {
            questionPrompt: `Lorsque V_b = 2·V_{eq} (grand excès de soude), calcule le pH asymptotique (arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(pH_excess),
            hint: `[OH⁻] = (C_b V_b - C_a V_a)/(V_a + V_b), puis pH = 14 + log[OH⁻].`,
            ruleApplied: 'pH imposé par la base forte en excès',
            mathExpression: `[OH⁻] = ${fmtP(cOH_excess, 4)} mol/L ⇒ pH ≈ ${fmtP(pH_excess)}`,
            explanation: `Au-delà de l'équivalence, le pH tend vers celui d'une solution de soude diluée.`,
          },
          {
            questionPrompt: `Lors du titrage, la réaction CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ est-elle prépondérante avant V_{eq} ou à V_{eq} ?`,
            questionType: 'qcm',
            options: [
              'À V_{eq}, où seul CH₃COO⁻ a été formé en quantité stœchiométrique',
              'À V_b = 0 mL',
              'Uniquement après V_b = 10 V_{eq}',
              'Jamais, elle n’existe pas',
            ],
            correctAnswer: 'À V_{eq}, où seul CH₃COO⁻ a été formé en quantité stœchiométrique',
            hint: `À V_{eq}, tout CH₃COOH a été transformé en CH₃COO⁻ sans excès de OH⁻.`,
            ruleApplied: 'Espèce majoritaire à l’équivalence',
            mathExpression: `n(CH₃COOH)_{eq} = 0, n(OH⁻)_{ajouté} = C_a V_a`,
            explanation: `C'est l'hydrolyse basique de CH₃COO⁻ qui explique pH_{eq} > 7.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Titrage pH-métrique d'un acide faible par NaOH : demi-équivalence & pH_{eq}`,
          `Dosage de V_a = 20 mL de CH₃COOH (C_a = ${Ca} mol/L, pK_a = 4,8) par NaOH à C_b = 0,10 mol/L.`,
          items
        );
      }

      // vMod === 2: Solution tampon & Henderson-Hasselbalch (résistance à l'ajout d'acide fort)
      const pKa = 4.8; // CH3COOH / CH3COO-
      const VtamponL = 0.5; // 500 mL
      const Ctot = pickRandom([0.2, 0.4]); // mol/L de chaque espèce HA et A- (donc [HA]=[A-]=Ctot)
      const nInitMmol = Ctot * VtamponL * 1000; // 100 ou 200 mmol de chaque !
      const addAcidMmol = 20; // ajout de 20 mmol de HCl (négligeable en volume)
      // Réaction totale A- + H3O+ -> HA + H2O
      const nA_after = nInitMmol - addAcidMmol;
      const nHA_after = nInitMmol + addAcidMmol;
      const pH_after = pKa + Math.log10(nA_after / nHA_after);
      const deltaPH = pKa - pH_after;
      // Sans tampon (dans 500 mL d'eau pure) : [H3O+] = 20 mmol / 0.5 L = 0.04 mol/L -> pH_eau = -log(0.04) = 1.40 !
      const pH_sansTampon = -Math.log10(addAcidMmol / (VtamponL * 1000));

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On prépare V = 500 mL d'une solution tampon équimolaire d'acide éthanoïque (pK_a = 4,8) et d'éthanoate de sodium tels que [HA] = [A⁻] = ${Ctot} mol/L. Quel est le pH initial de cette solution tampon ?`,
          questionType: 'numeric',
          correctAnswer: '4.8',
          hint: `pH = pK_a + log([A⁻]/[HA]).`,
          ruleApplied: 'Équation d’Henderson-Hasselbalch',
          mathExpression: `pH₀ = 4,8 + log(1) = 4,8`,
          explanation: `Dans un tampon équimolaire, pH = pK_a = 4,8.`,
        },
        {
          questionPrompt: `Calcule la quantité initiale n₀(CH₃COO⁻) = n₀(CH₃COOH) contenue dans les 500 mL (en mmol).`,
          questionType: 'numeric',
          correctAnswer: String(nInitMmol),
          unit: 'mmol',
          hint: `${Ctot} mol/L × 0,5 L × 1000.`,
          ruleApplied: 'Quantité de matière',
          mathExpression: `n₀ = ${Ctot} × 500 = ${nInitMmol} mmol`,
          explanation: `La solution contient ${nInitMmol} mmol de base conjuguée et ${nInitMmol} mmol d'acide faible.`,
        },
        {
          questionPrompt: `Quelle masse d'éthanoate de sodium anhydre CH₃COONa (M = 82 g/mol) a-t-il fallu dissoudre pour obtenir ces ${nInitMmol} mmol de CH₃COO⁻ (en g) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP((nInitMmol / 1000) * 82),
          unit: 'g',
          hint: `n(mol) × 82.`,
          ruleApplied: 'Préparation massique d’un tampon',
          mathExpression: `m = ${nInitMmol / 1000} × 82 = ${fmtP((nInitMmol / 1000) * 82)} g`,
          explanation: `Il faut dissoudre ${fmtP((nInitMmol / 1000) * 82)} g de sel CH₃COONa.`,
        },
        {
          questionPrompt: `On ajoute sans variation de volume 20 mmol d'acide fort HCl (H₃O⁺ + Cl⁻) dans les 500 mL. Quelle réaction quasi-totale absorbe les ions H₃O⁺ ajoutés ?`,
          questionType: 'qcm',
          options: [
            `CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O`,
            `CH₃COOH + H₃O⁺ → CH₃COO⁻ + 2 H₂O`,
            `Na⁺ + Cl⁻ → NaCl`,
            `2 H₂O → H₃O⁺ + OH⁻`,
          ],
          correctAnswer: `CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O`,
          hint: `L'acide fort réagit avec la base conjuguée présente dans le tampon.`,
          ruleApplied: 'Mécanisme de l’effet tampon',
          mathExpression: `A⁻ + H₃O⁺ → HA + H₂O`,
          explanation: `Les protons H₃O⁺ sont neutralisés par les ions éthanoate.`,
        },
        {
          questionPrompt: `Après ajout des 20 mmol de H₃O⁺, combien reste-t-il de base CH₃COO⁻ (en mmol) ?`,
          questionType: 'numeric',
          correctAnswer: String(nA_after),
          unit: 'mmol',
          hint: `${nInitMmol} - 20.`,
          ruleApplied: 'Bilan stœchiométrique total',
          mathExpression: `n(A⁻) = ${nInitMmol} - 20 = ${nA_after} mmol`,
          explanation: `Il reste ${nA_after} mmol de CH₃COO⁻.`,
        },
        {
          questionPrompt: `Combien a-t-on désormais d'acide CH₃COOH dans le milieu (en mmol) ?`,
          questionType: 'numeric',
          correctAnswer: String(nHA_after),
          unit: 'mmol',
          hint: `${nInitMmol} + 20.`,
          ruleApplied: 'Bilan stœchiométrique total',
          mathExpression: `n(HA) = ${nInitMmol} + 20 = ${nHA_after} mmol`,
          explanation: `Il y a maintenant ${nHA_after} mmol de CH₃COOH.`,
        },
        {
          questionPrompt: `Calcule le nouveau pH de la solution tampon après cet ajout d'acide fort (arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(pH_after),
          hint: `4,8 + log₁₀(${nA_after} / ${nHA_after}).`,
          ruleApplied: 'Formule d’Henderson après perturbation',
          mathExpression: `pH = 4,8 + log(${nA_after}/${nHA_after}) ≈ ${fmtP(pH_after)}`,
          explanation: `Le pH ne baisse que très légèrement jusqu'à ${fmtP(pH_after)}.`,
        },
        {
          questionPrompt: `Calcule la faible chute de pH, |ΔpH| = pH₀ - pH_final, subie par le tampon (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(deltaPH),
          hint: `4,8 - ${fmtP(pH_after)}.`,
          ruleApplied: 'Pouvoir tampon',
          mathExpression: `|ΔpH| ≈ ${fmtP(deltaPH)} unité de pH`,
          explanation: `Le pH n'a varié que de ${fmtP(deltaPH)} unité malgré 20 mmol d'acide fort !`,
        },
        {
          questionPrompt: `Quel pH aurait-on obtenu en versant ces mêmes 20 mmol de HCl dans 500 mL d'eau pure non tamponnée (arrondi à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(pH_sansTampon),
          hint: `[H₃O⁺] = 0,020 / 0,500 = 0,040 mol/L ⇒ pH = -log(0,040).`,
          ruleApplied: 'pH d’un acide fort',
          mathExpression: `pH = -log(0,04) ≈ ${fmtP(pH_sansTampon)}`,
          explanation: `Dans l'eau pure, le pH aurait chuté de 7,0 à 1,40 (soit 5,6 unités) !`,
        },
        {
          questionPrompt: `On souhaite obtenir un tampon de pH = 5,8 à partir du même couple (pK_a = 4,8). Quel rapport molaire n(A⁻) / n(HA) doit-on réaliser ?`,
          questionType: 'numeric',
          correctAnswer: '10',
          hint: `log([A⁻]/[HA]) = 5,8 - 4,8 = 1.`,
          ruleApplied: 'Dimensionnement d’un tampon',
          mathExpression: `[A⁻]/[HA] = 10^{5,8 - 4,8} = 10`,
          explanation: `Un tampon reste efficace tant que le rapport reste dans [0,1 ; 10], soit pH ∈ [pK_a - 1 ; pK_a + 1].`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Solution tampon, préparation massique et résistance à l'ajout d'acide fort`,
        `Préparation et perturbation par HCl d'une solution tampon CH₃COOH / CH₃COO⁻ (V = 500 mL, C = ${Ctot} mol/L).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 13. ALCOOLS, ALDÉHYDES & CÉTONES
    // -------------------------------------------------------------------------
    case 'physTc-alcools-carbonyles': {
      if (vMod === 0) {
        // Oxydation ménagée du butan-1-ol (C4H10O, M = 74 g/mol) en acide butanoïque (C4H8O2, M = 88 g/mol) par Cr2O7^2- en excès
        const mAlc = pickRandom([3.7, 7.4]); // 0.05 ou 0.10 mol exact !
        const nAlc = mAlc / 74;
        // 3 R-CH2OH + 2 Cr2O7^2- + 16 H+ -> 3 R-COOH + 4 Cr^3+ + 11 H2O
        const nCrMin = (2 / 3) * nAlc;
        const nAcideTh = nAlc;
        const mAcideTh = nAcideTh * 88;
        const rend = 0.75; // 75 %
        const mAcideExp = mAcideTh * rend;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On réalise l'oxydation ménagée à chaud d'une masse m = ${mAlc} g de butan-1-ol (C₄H₁₀O, M = 74 g/mol) par un excès de dichromate de potassium (K₂Cr₂O₇) en milieu acide. Quelle est la classe du butan-1-ol ?`,
            questionType: 'qcm',
            options: [
              'Alcool primaire (car le carbone fonctionnel -CH₂OH est lié à 1 seul autre carbone)',
              'Alcool secondaire',
              'Alcool tertiaire',
              'Polyalcool',
            ],
            correctAnswer: 'Alcool primaire (car le carbone fonctionnel -CH₂OH est lié à 1 seul autre carbone)',
            hint: `CH₃-CH₂-CH₂-CH₂OH.`,
            ruleApplied: 'Classes des alcools',
            mathExpression: `R-CH₂OH ⇒ alcool primaire`,
            explanation: `Un alcool primaire oxydé par excès d'oxydant donne d'abord l'aldéhyde puis l'acide carboxylique.`,
          },
          {
            questionPrompt: `Calcule la quantité de matière n₀ de butan-1-ol introduite (en mol).`,
            questionType: 'numeric',
            correctAnswer: fmtP(nAlc),
            unit: 'mol',
            hint: `m / 74.`,
            ruleApplied: 'Quantité de matière',
            mathExpression: `n₀ = ${mAlc} / 74 = ${fmtP(nAlc)} mol`,
            explanation: `n₀ = ${fmtP(nAlc)} mol.`,
          },
          {
            questionPrompt: `Quel produit final majoritaire obtient-on avec l'oxydant en excès à reflux ?`,
            questionType: 'qcm',
            options: [
              'L’acide butanoïque (CH₃-CH₂-CH₂-COOH)',
              'La butanone',
              'Le butanal uniquement (même avec chauffage et excès d’oxydant)',
              'Du dioxyde de carbone uniquement',
            ],
            correctAnswer: 'L’acide butanoïque (CH₃-CH₂-CH₂-COOH)',
            hint: `Pour isoler l'aldéhyde (butanal), il faudrait opérer par distillation au fur et à mesure avec l'alcool en excès.`,
            ruleApplied: 'Oxydation ménagée totale d’un alcool primaire',
            mathExpression: `Butan-1-ol → Butanal → Acide butanoïque`,
            explanation: `En présence d'un excès de dichromate à chaud, le butanal est immédiatement oxydé en acide butanoïque.`,
          },
          {
            questionPrompt: `Dans la demi-équation rédox du couple Cr₂O₇²⁻ / Cr³⁺ en milieu acide, combien d'électrons sont captés par ion Cr₂O₇²⁻ ?`,
            questionType: 'numeric',
            correctAnswer: '6',
            hint: `Cr₂O₇²⁻ + 14 H⁺ + n e⁻ ⇌ 2 Cr³⁺ + 7 H₂O.`,
            ruleApplied: 'Demi-équation électronique en milieu acide',
            mathExpression: `Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ⇌ 2 Cr³⁺ + 7 H₂O`,
            explanation: `Chaque Cr passe de +VI à +III : pour 2 atomes de Cr, cela fait 6 électrons.`,
          },
          {
            questionPrompt: `Dans la demi-équation R-CH₂OH + H₂O ⇌ R-COOH + 4 H⁺ + x e⁻, combien d'électrons x sont libérés par molécule d'alcool oxydée en acide ?`,
            questionType: 'numeric',
            correctAnswer: '4',
            hint: `Équilibre des charges à droite : +4 - x = 0.`,
            ruleApplied: 'Demi-équation d’oxydation organique',
            mathExpression: `R-CH₂OH + H₂O ⇌ R-COOH + 4 H⁺ + 4 e⁻`,
            explanation: `Il faut 4 électrons pour passer de l'alcool à l'acide carboxylique.`,
          },
          {
            questionPrompt: `Dans l'équation bilan équilibrée : a·R-CH₂OH + b·Cr₂O₇²⁻ + c·H⁺ → a·R-COOH + 2b·Cr³⁺ + d·H₂O, que vaut le plus petit couple d'entiers (a ; b) ?`,
            questionType: 'qcm',
            options: ['a = 3 et b = 2 (PPCM(4, 6) = 12 e⁻)', 'a = 2 et b = 3', 'a = 1 et b = 1', 'a = 6 et b = 4'],
            correctAnswer: 'a = 3 et b = 2 (PPCM(4, 6) = 12 e⁻)',
            hint: `Multiplie la 1re demi-équation par 3 et la 2e par 2.`,
            ruleApplied: 'Équilibrage rédox par échange d’électrons',
            mathExpression: `3×4 e⁻ = 2×6 e⁻ = 12 e⁻ ⇒ a = 3, b = 2`,
            explanation: `3 R-CH₂OH + 2 Cr₂O₇²⁻ + 16 H⁺ → 3 R-COOH + 4 Cr³⁺ + 11 H₂O.`,
          },
          {
            questionPrompt: `Calcule la quantité minimale d'ions dichromate Cr₂O₇²⁻ nécessaire pour oxyder totalement les ${fmtP(nAlc)} mol d'alcool (en mmol, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(nCrMin * 1000, 1),
            unit: 'mmol',
            hint: `n(Cr₂O₇²⁻) = (2/3) × n₀.`,
            ruleApplied: 'Stœchiométrie rédox',
            mathExpression: `n_min = (2/3) × ${fmtP(nAlc * 1000, 0)} ≈ ${fmtP(nCrMin * 1000, 1)} mmol`,
            explanation: `Il faut au moins ${fmtP(nCrMin * 1000, 1)} mmol de dichromate.`,
          },
          {
            questionPrompt: `Calcule la masse théorique maximale d'acide butanoïque (M = 88 g/mol) attendue (en g).`,
            questionType: 'numeric',
            correctAnswer: fmtP(mAcideTh),
            unit: 'g',
            hint: `n_th(acide) = n₀(alcool), multiplié par 88 g/mol.`,
            ruleApplied: 'Masse théorique produite',
            mathExpression: `m_th = ${fmtP(nAlc)} × 88 = ${fmtP(mAcideTh)} g`,
            explanation: `m_th = ${fmtP(mAcideTh)} g.`,
          },
          {
            questionPrompt: `On recueille après extraction une masse expérimentale de ${fmtP(mAcideExp)} g d'acide butanoïque. Quel est le rendement de la synthèse (en %) ?`,
            questionType: 'numeric',
            correctAnswer: '75',
            unit: '%',
            hint: `(m_exp / m_th) × 100.`,
            ruleApplied: 'Rendement d’une synthèse organique',
            mathExpression: `η = (${fmtP(mAcideExp)} / ${fmtP(mAcideTh)}) × 100 = 75 %`,
            explanation: `Le rendement vaut 75 %.`,
          },
          {
            questionPrompt: `Quelle coloration finale prend la solution aqueuse lorsque la réaction rédox s'est produite ?`,
            questionType: 'qcm',
            options: [
              'Verte (due à la formation des ions Cr³⁺ à partir de Cr₂O₇²⁻ orange)',
              'Violette intense',
              'Incolore limpide',
              'Rouge brique',
            ],
            correctAnswer: 'Verte (due à la formation des ions Cr³⁺ à partir de Cr₂O₇²⁻ orange)',
            hint: `Cr₂O₇²⁻ est orange et Cr³⁺ est vert.`,
            ruleApplied: 'Couleurs des ions du chrome',
            mathExpression: `Cr₂O₇²⁻ (orange) → Cr³⁺ (vert)`,
            explanation: `Le passage de l'orange au vert signe l'oxydation de l'alcool.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Oxydation ménagée du butan-1-ol par Cr₂O₇²⁻ : bilan rédox et rendement`,
          `Oxydation ménagée de ${mAlc} g de butan-1-ol (M = 74 g/mol) en acide butanoïque (M = 88 g/mol) par K₂Cr₂O₇ en milieu acide.`,
          items
        );
      }

      if (vMod === 1) {
        // Isomérie C4H10O, chiralité et tests caractéristiques (DNPH, Fehling, Tollens)
        const mCompound = 14.8; // g pour M = 74 g/mol => 0.20 mol
        const nComp = 0.2;
        const mAg = 2 * nComp * 107.9; // avec réactif de Tollens: R-CHO + 2 Ag(NH3)2+ + 3 OH- -> R-COO- + 2 Ag(s) + 4 NH3 + 2 H2O

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un alcool saturé non cyclique A a une masse molaire M = 74 g/mol (C = 12, H = 1, O = 16). Quelle est sa formule brute C_n H_{2n+2} O ?`,
            questionType: 'qcm',
            options: ['C₄H₁₀O (n = 4)', 'C₃H₈O (n = 3)', 'C₅H₁₂O (n = 5)', 'C₄H₈O (n = 4)'],
            correctAnswer: 'C₄H₁₀O (n = 4)',
            hint: `14n + 18 = 74.`,
            ruleApplied: 'Formule brute d’un monoalcool saturé',
            mathExpression: `14n = 74 - 18 = 56 ⇒ n = 4 (C₄H₁₀O)`,
            explanation: `n = 4 donne le butanol ou méthylpropanol (C₄H₁₀O).`,
          },
          {
            questionPrompt: `Combien d'isomères de constitution ALCOOLS existent pour la formule brute C₄H₁₀O ?`,
            questionType: 'numeric',
            correctAnswer: '4',
            hint: `Butan-1-ol, butan-2-ol, 2-méthylpropan-1-ol, 2-méthylpropan-2-ol.`,
            ruleApplied: 'Isomérie de chaîne et de position',
            mathExpression: `2 primaires + 1 secondaire + 1 tertiaire = 4 alcools`,
            explanation: `Il y a exactement 4 alcools isomères de formule C₄H₁₀O (plus 3 éthers-oxydes).`,
          },
          {
            questionPrompt: `L'un de ces 4 alcools est chiral (il possède un carbone asymétrique C* lié à 4 groupes distincts). Lequel ?`,
            questionType: 'qcm',
            options: [
              'Le butan-2-ol : CH₃-C*H(OH)-CH₂-CH₃',
              'Le butan-1-ol',
              'Le 2-méthylpropan-1-ol',
              'Le 2-méthylpropan-2-ol',
            ],
            correctAnswer: 'Le butan-2-ol : CH₃-C*H(OH)-CH₂-CH₃',
            hint: `Cherche le carbone portant -H, -OH, -CH₃ et -C₂H₅.`,
            ruleApplied: 'Chiralité et carbone asymétrique',
            mathExpression: `C2 du butan-2-ol porte 4 substituants différents`,
            explanation: `Le butan-2-ol possède deux énantiomères (R) et (S) images dans un miroir et non superposables.`,
          },
          {
            questionPrompt: `Un isomère A₁ donne par oxydation ménagée un composé B qui réagit positivement avec la 2,4-DNPH (précipité jaune-orange), mais NEGATIVEMENT avec la liqueur de Fehling. Que révèle le test positif à la 2,4-DNPH ?`,
            questionType: 'qcm',
            options: [
              'B possède un groupe carbonyle C=O (aldéhyde ou cétone)',
              'B est un acide carboxylique',
              'B est un alcène',
              'B est un alcool tertiaire',
            ],
            correctAnswer: 'B possède un groupe carbonyle C=O (aldéhyde ou cétone)',
            hint: `La 2,4-DNPH caractérise la fonction carbonyle.`,
            ruleApplied: 'Test d’identification des carbonyles',
            mathExpression: `2,4-DNPH (+) ⇒ aldéhyde ou cétone`,
            explanation: `Seuls les aldéhydes et les cétones réagissent avec la 2,4-DNPH.`,
          },
          {
            questionPrompt: `Puisque B ne réduit pas la liqueur de Fehling à chaud, quelle est la nature de B et la formule semi-développée de A₁ ?`,
            questionType: 'qcm',
            options: [
              'B est la butanone (cétone), donc A₁ est le butan-2-ol (alcool secondaire)',
              'B est le butanal (aldéhyde), donc A₁ est le butan-1-ol',
              'B est l’acide butanoïque',
              'A₁ est le 2-méthylpropan-2-ol',
            ],
            correctAnswer: 'B est la butanone (cétone), donc A₁ est le butan-2-ol (alcool secondaire)',
            hint: `Les cétones ne sont pas réductrices (Fehling négatif, Tollens négatif).`,
            ruleApplied: 'Différenciation aldéhyde / cétone',
            mathExpression: `Fehling (-) + DNPH (+) ⇒ cétone ⇒ alcool secondaire`,
            explanation: `L'oxydation du butan-2-ol donne la butanone (CH₃-CO-CH₂-CH₃).`,
          },
          {
            questionPrompt: `Un autre isomère A₃ de C₄H₁₀O ne réagit pas du tout avec les oxydants ménagés (KMnO₄ ou K₂Cr₂O₇). Quel est son nom IUPAC ?`,
            questionType: 'qcm',
            options: [
              '2-méthylpropan-2-ol (alcool tertiaire)',
              '2-méthylpropan-1-ol',
              'Butan-1-ol',
              'Butan-2-ol',
            ],
            correctAnswer: '2-méthylpropan-2-ol (alcool tertiaire)',
            hint: `Le carbone porteur de -OH n'a aucun atome d'hydrogène disponible.`,
            ruleApplied: 'Inertie des alcools tertiaires à l’oxydation ménagée',
            mathExpression: `(CH₃)₃C-OH (pas de H sur le C fonctionnel)`,
            explanation: `Les alcools tertiaires résistent à l'oxydation ménagée sans rupture de chaîne carbonée.`,
          },
          {
            questionPrompt: `Par déshydratation intramoléculaire à chaud sur alumine Al₂O₃ (≈ 350 °C), le 2-méthylpropan-2-ol perd une molécule d'eau H₂O pour former le méthylpropène. Quel est le nombre d'atomes d'hydrogène dans cet alcène ?`,
            questionType: 'numeric',
            correctAnswer: '8',
            hint: `C₄H₁₀O - H₂O = C₄H₈.`,
            ruleApplied: 'Déshydratation intramoléculaire d’un alcool',
            mathExpression: `(CH₃)₃C-OH → (CH₃)₂C=CH₂ + H₂O`,
            explanation: `La formule brute de l'alcène est C₄H₈.`,
          },
          {
            questionPrompt: `Un isomère aldéhyde B' = butanal (M = 72 g/mol) est mis en présence du réactif de Tollens (ions diamminargent [Ag(NH₃)₂]⁺) : R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → R-COO⁻ + 2 Ag(s) + 4 NH₃ + 2 H₂O. Combien de moles d'argent métallique Ag dépose 0,20 mol de butanal ?`,
            questionType: 'numeric',
            correctAnswer: '0.4',
            unit: 'mol',
            hint: `Coefficient stœchiométrique = 2 Ag par molécule d'aldéhyde.`,
            ruleApplied: 'Miroir d’argent (test de Tollens)',
            mathExpression: `n(Ag) = 2 × 0,20 = 0,40 mol`,
            explanation: `0,40 mol d'argent forme un miroir métallique sur la paroi du tube.`,
          },
          {
            questionPrompt: `Calcule la masse d'argent déposée pour 0,20 mol de butanal (M(Ag) = 107,9 g/mol, en g, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(0.4 * 107.9),
            unit: 'g',
            hint: `0,40 × 107,9.`,
            ruleApplied: 'Masse molaire de l’argent',
            mathExpression: `m(Ag) = 0,40 × 107,9 = ${fmtP(0.4 * 107.9)} g`,
            explanation: `m(Ag) = ${fmtP(0.4 * 107.9)} g.`,
          },
          {
            questionPrompt: `Quelle est la formule brute de l'ion carboxylate formé dans cette réaction de Tollens à partir du butanal ?`,
            questionType: 'qcm',
            options: ['C₃H₇-COO⁻ (ion butanoate)', 'C₃H₇-CO⁺', 'C₄H₉-COO⁻', 'C₂H₅-COO⁻'],
            correctAnswer: 'C₃H₇-COO⁻ (ion butanoate)',
            hint: `La chaîne reste à 4 atomes de carbone au total (3 + 1).`,
            ruleApplied: 'Conservation du squelette carboné',
            mathExpression: `CH₃-CH₂-CH₂-CHO → CH₃-CH₂-CH₂-COO⁻`,
            explanation: `En milieu basique, l'acide butanoïque formé passe immédiatement sous forme d'ion butanoate.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Isomérie C₄H₁₀O, chiralité et tests DNPH / Fehling / Tollens`,
          `Identification complète des 4 alcools de formule C₄H₁₀O (M = 74 g/mol) et de leurs dérivés carbonylés.`,
          items
        );
      }

      // vMod === 2: Réduction des carbonyles & oxydation quantitative d'un mélange alcool I + alcool II
      const pAlk1 = pickRandom([60, 75]); // % molaire ou masse
      const nAld = 0.5; // mol d'éthanal M = 44 g/mol
      const mEthanal = 22; // g
      const mEthanol = 23; // g (M = 46 g/mol)
      const nH2 = 0.5; // mol de H2 pour hydrogéner 0.5 mol d'éthanal

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On considère l'éthanal CH₃-CHO (M = 44 g/mol) et la propanone CH₃-CO-CH₃ (M = 58 g/mol). Quelle est la géométrie locale autour de l'atome de carbone du groupe carbonyle >C=O ?`,
          questionType: 'qcm',
          options: [
            'Plane trigonale (angles ≈ 120°)',
            'Tétraédrique (angles ≈ 109,5°)',
            'Linéaire (angle 180°)',
            'Pyramidale à base carrée',
          ],
          correctAnswer: 'Plane trigonale (angles ≈ 120°)',
          hint: `Le carbone porte une double liaison et deux liaisons simples (3 directions).`,
          ruleApplied: 'Géométrie VSEPR AX₃ du groupe carbonyle',
          mathExpression: `Carbone trigonal plan (sp²)`,
          explanation: `Les trois liaisons autour du carbone du carbonyle sont coplanaires à ~120°.`,
        },
        {
          questionPrompt: `On hydrogène m = 22,0 g d'éthanal (M = 44 g/mol) en présence de nickel divisé (Ni) à chaud : CH₃-CHO + H₂ → CH₃-CH₂OH. Quelle quantité de matière n₀ d'éthanal fait-on réagir (en mol) ?`,
          questionType: 'numeric',
          correctAnswer: '0.5',
          unit: 'mol',
          hint: `22,0 / 44.`,
          ruleApplied: 'Quantité de matière',
          mathExpression: `n₀ = 22,0 / 44 = 0,50 mol`,
          explanation: `n₀ = 0,50 mol.`,
        },
        {
          questionPrompt: `Quel volume minimal de dihydrogène H₂ (mesuré avec V_m = 24,0 L/mol) est consommé pour réduire totalement ces 22,0 g d'éthanal (en L) ?`,
          questionType: 'numeric',
          correctAnswer: '12',
          unit: 'L',
          hint: `0,50 × 24,0.`,
          ruleApplied: 'Hydrogénation catalytique stœchiométrique',
          mathExpression: `V(H₂) = 0,50 × 24,0 = 12,0 L`,
          explanation: `Il faut 12,0 L de H₂.`,
        },
        {
          questionPrompt: `Quelle masse théorique maximale d'éthanol (M = 46 g/mol) obtient-on (en g) ?`,
          questionType: 'numeric',
          correctAnswer: '23',
          unit: 'g',
          hint: `0,50 × 46.`,
          ruleApplied: 'Masse théorique produite',
          mathExpression: `m(éthanol) = 0,50 × 46 = 23,0 g`,
          explanation: `22 g d'éthanal + 1 g de H₂ donnent exactement 23 g d'éthanol (conservation de la masse).`,
        },
        {
          questionPrompt: `Quel réactif doux de laboratoire permet également de réduire sélectivement un aldéhyde ou une cétone en alcool en solution aqueuse/alcoolique ?`,
          questionType: 'qcm',
          options: [
            'Le tétrahydruroborate de sodium NaBH₄ (ou LiAlH₄ en milieu anhydre)',
            'Le permanganate de potassium KMnO₄',
            'L’acide sulfurique concentré à 180 °C',
            'Le chlorure de sodium NaCl',
          ],
          correctAnswer: 'Le tétrahydruroborate de sodium NaBH₄ (ou LiAlH₄ en milieu anhydre)',
          hint: `Les hydrures métalliques apportent des ions hydrure H⁻ nucléophiles.`,
          ruleApplied: 'Réduction par les hydrures',
          mathExpression: `>C=O + NaBH₄ (puis H₂O) → >CH-OH`,
          explanation: `NaBH₄ réduit les aldéhydes en alcools I et les cétones en alcools II.`,
        },
        {
          questionPrompt: `La réduction par NaBH₄ de la butanone CH₃-CO-CH₂-CH₃ conduit au butan-2-ol. Le produit obtenu est-il optiquement actif (dévie-t-il la lumière polarisée) ?`,
          questionType: 'qcm',
          options: [
            'Non, on obtient un mélange racémique (50 % R / 50 % S) optiquement inactif',
            'Oui, uniquement l’énantiomère (R)',
            'Oui, car le carbone fonctionnel est symétrique',
            'Non, car la molécule ne contient aucun C*',
          ],
          correctAnswer: 'Non, on obtient un mélange racémique (50 % R / 50 % S) optiquement inactif',
          hint: `Le carbonyle étant plan, l'attaque de H⁻ est équiprobable par les deux faces.`,
          ruleApplied: 'Stéréochimie d’une réduction sur carbonyle plan',
          mathExpression: `Attaque 50/50 dessus/dessous ⇒ racémique (α = 0°)`,
          explanation: `Les deux énantiomères se forment en quantités égales : le pouvoir rotatoire net est nul.`,
        },
        {
          questionPrompt: `Dans la réaction de la propanone avec la liqueur de Fehling à chaud, quelle masse de précipité rouge brique Cu₂O obtient-on à partir de 1,0 mol de propanone (en g) ?`,
          questionType: 'numeric',
          correctAnswer: '0',
          unit: 'g',
          hint: `Les cétones réagissent-elles avec la liqueur de Fehling ?`,
          ruleApplied: 'Test négatif des cétones à la liqueur de Fehling',
          mathExpression: `Cétone + Fehling → aucune réaction ⇒ 0 g`,
          explanation: `Contrairement aux aldéhydes, les cétones ne réduisent pas Cu²⁺ en Cu₂O.`,
        },
        {
          questionPrompt: `L'éthanal a une température d'ébullition de +20 °C alors que l'éthanol (masse molaire quasi-égale) bout à +78 °C. Quelle interaction intermoléculaire explique cette grande différence ?`,
          questionType: 'qcm',
          options: [
            'Les liaisons hydrogène intermoléculaires O-H···O présentes dans l’éthanol pur (absentes entre molécules d’éthanal pur)',
            'La présence d’un groupe méthyle plus lourd',
            'La liaison ionique dans l’éthanol',
            'La réaction acide-base interne',
          ],
          correctAnswer: 'Les liaisons hydrogène intermoléculaires O-H···O présentes dans l’éthanol pur (absentes entre molécules d’éthanal pur)',
          hint: `L'éthanal n'a aucun atome H lié à O.`,
          ruleApplied: 'Liaisons hydrogène et propriétés physiques',
          mathExpression: `O-H···O (alcool) ⇒ T_éb élevée`,
          explanation: `Les liaisons hydrogène exigent beaucoup plus d'énergie thermique pour vaporiser le liquide.`,
        },
        {
          questionPrompt: `Combien de moles d'oxygène atomique [O] (ou de moles d'ions permanganate MnO₄⁻ en milieu acide) faut-il pour oxyder 0,50 mol d'éthanal en acide éthanoïque (5 R-CHO + 2 MnO₄⁻ + 6 H⁺ → 5 R-COOH + 2 Mn²⁺ + 3 H₂O) ? (en mol)`,
          questionType: 'numeric',
          correctAnswer: '0.2',
          unit: 'mol',
          hint: `(2 / 5) × 0,50.`,
          ruleApplied: 'Stœchiométrie aldéhyde / permanganate',
          mathExpression: `n(MnO₄⁻) = (2/5) × 0,50 = 0,20 mol`,
          explanation: `Il faut 0,20 mol d'ions permanganate.`,
        },
        {
          questionPrompt: `Quel est le nom systématique de l'ester obtenu en estérifiant ensuite les 0,50 mol d'acide éthanoïque avec un excès de méthanol CH₃OH ?`,
          questionType: 'qcm',
          options: ['Éthanoate de méthyle', 'Méthanoate d’éthyle', 'Propanoate de méthyle', 'Éthanoate d’éthyle'],
          correctAnswer: 'Éthanoate de méthyle',
          hint: `Acide éthanoïque (2 C) + méthanol (1 C).`,
          ruleApplied: 'Nomenclature des esters',
          mathExpression: `CH₃-COO-CH₃ = éthanoate de méthyle`,
          explanation: `CH₃COOCH₃ est l'éthanoate de méthyle.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Hydrogénation, stéréochimie de réduction et propriétés des carbonyles`,
        `Étude mécanistique et quantitative de la réduction de 22,0 g d'éthanal et de la propanone.`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 14. ESTÉRIFICATION, ANHYDRIDES & SAPONIFICATION
    // -------------------------------------------------------------------------
    case 'physTc-esterification-saponification': {
      if (vMod === 0) {
        // Estérification directe à K = 4 : mélange équimolaire puis avec excès d'alcool !
        const nAc = 1.0; // mol acide éthanoïque
        const nAlcEq = 1.0; // cas 1: équimolaire (K = 4 -> x^2/(1-x)^2 = 4 -> x/(1-x)=2 -> x = 2/3 ≈ 0.667)
        // Cas 2 : on introduit a = 4 mol d'alcool pour 1 mol d'acide (K = 4) :
        // x^2 / [(1 - x)(4 - x)] = 4 => x^2 = 4(4 - 5x + x^2) => 3x^2 - 20x + 16 = 0
        // Delta = 400 - 192 = 208, sqrt(208) = 14.422 => x = (20 - 14.422)/6 = 5.578/6 = 0.9296 (≈ 93.0 % !)
        const nAlcExces = pickRandom([4, 5]);
        // Pour nAlcExces = 4 : 3x^2 - 20x + 16 = 0 => x ≈ 0.9296
        // Pour nAlcExces = 5 : x^2 / [(1-x)(5-x)] = 4 => 3x^2 - 24x + 20 = 0 => x = (24 - sqrt(576 - 240))/6 = (24 - sqrt(336))/6 = (24 - 18.3303)/6 = 0.9449 !
        const disc = nAlcExces === 4 ? 208 : 336;
        const bCoef = nAlcExces === 4 ? 20 : 24;
        const cCoef = nAlcExces === 4 ? 16 : 20;
        const xExces = (bCoef - Math.sqrt(disc)) / 6;
        const rendExcesPct = xExces * 100;
        const M_ester = 88; // éthanoate d'éthyle CH3COOC2H5

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On mélange 1,00 mol d'acide éthanoïque (CH₃COOH) et 1,00 mol d'éthanol (C₂H₅OH) à reflux avec quelques gouttes d'acide sulfurique. Quel est le rôle de H₂SO₄ ?`,
            questionType: 'qcm',
            options: [
              'Catalyseur : il accélère l’atteinte de l’équilibre sans déplacer la limite d’estérification',
              'Réactif limitant consommé à 100 %',
              'Déshydratant total imposant un rendement de 100 %',
              'Inhibiteur cinétique',
            ],
            correctAnswer: 'Catalyseur : il accélère l’atteinte de l’équilibre sans déplacer la limite d’estérification',
            hint: `Un catalyseur agit uniquement sur la cinétique (dans les deux sens).`,
            ruleApplied: 'Catalyse acide d’estérification',
            mathExpression: `v_1 ↑ et v_{-1} ↑, mais K = 4 inchangé`,
            explanation: `H₂SO₄ réduit fortement le temps pour atteindre l'état final, qui reste identique.`,
          },
          {
            questionPrompt: `La constante d'équilibre de cette estérification vaut K = 4,0. Pour le mélange équimolaire (1 mol ; 1 mol), résous x² / (1 - x)² = 4 avec 0 < x < 1 pour trouver l'avancement final x_eq (en mol, arrondi à 0,001).`,
            questionType: 'numeric',
            correctAnswer: fmtP(2 / 3, 3),
            unit: 'mol',
            hint: `Prends la racine carrée : x / (1 - x) = 2.`,
            ruleApplied: 'Quotient de réaction à l’équilibre Q_{r,eq} = K',
            mathExpression: `x / (1 - x) = 2 ⇒ x = 2/3 ≈ 0,667 mol`,
            explanation: `Pour un alcool primaire en mélange équimolaire, la limite classique vaut 66,7 %.`,
          },
          {
            questionPrompt: `Calcule la masse d'éthanoate d'éthyle (M = 88 g/mol) obtenue à l'équilibre dans le cas équimolaire (en g, arrondie à 0,1 g près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((2 / 3) * 88, 1),
            unit: 'g',
            hint: `0,667 × 88.`,
            ruleApplied: 'Masse à l’équilibre',
            mathExpression: `m = (2/3) × 88 ≈ ${fmtP((2 / 3) * 88, 1)} g`,
            explanation: `On recueille ${fmtP((2 / 3) * 88, 1)} g d'ester.`,
          },
          {
            questionPrompt: `À un instant donné en cours de réaction, on prélève et on mesure Q_r = 1,0. Dans quel sens évolue spontanément le système ?`,
            questionType: 'qcm',
            options: [
              'Dans le sens direct (formation d’ester et d’eau) car Q_r < K',
              'Dans le sens inverse (hydrolyse)',
              'Le système est déjà à l’équilibre',
              'La réaction s’arrête',
            ],
            correctAnswer: 'Dans le sens direct (formation d’ester et d’eau) car Q_r < K',
            hint: `Compare Q_r = 1,0 à K = 4,0.`,
            ruleApplied: 'Critère d’évolution spontanée',
            mathExpression: `Q_r = 1,0 < K = 4,0 ⇒ sens direct`,
            explanation: `Le quotient de réaction tend toujours vers K en augmentant vers 4.`,
          },
          {
            questionPrompt: `Pour améliorer le rendement par rapport à l'acide, on prépare un second mélange avec 1,00 mol d'acide et ${nAlcExces},00 mol d'éthanol. Quelle équation quadratique vérifie le nouvel avancement x à l'équilibre (x² / [(1 - x)(${nAlcExces} - x)] = 4) ?`,
            questionType: 'qcm',
            options: [
              `3x² - ${bCoef}x + ${cCoef} = 0`,
              `3x² + ${bCoef}x - ${cCoef} = 0`,
              `x² - ${bCoef}x + ${cCoef} = 0`,
              `4x² - ${bCoef}x + ${cCoef} = 0`,
            ],
            correctAnswer: `3x² - ${bCoef}x + ${cCoef} = 0`,
            hint: `x² = 4(${nAlcExces} - ${nAlcExces + 1}x + x²).`,
            ruleApplied: 'Équilibre avec excès d’un réactif',
            mathExpression: `4x² - x² - ${bCoef}x + ${cCoef} = 0 ⇔ 3x² - ${bCoef}x + ${cCoef} = 0`,
            explanation: `L'équation s'écrit 3x² - ${bCoef}x + ${cCoef} = 0.`,
          },
          {
            questionPrompt: `Résous cette équation (0 < x < 1) pour trouver le nouveau rendement en ester par rapport à l'acide limitant (en %, arrondi à 0,1 % près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(rendExcesPct, 1),
            unit: '%',
            hint: `x = (${bCoef} - √${disc}) / 6.`,
            ruleApplied: 'Loi de modération (déplacement d’équilibre)',
            mathExpression: `x ≈ ${fmtP(xExces, 3)} mol ⇒ rendement ≈ ${fmtP(rendExcesPct, 1)} %`,
            explanation: `L'excès d'alcool porte le rendement de 66,7 % à ${fmtP(rendExcesPct, 1)} %.`,
          },
          {
            questionPrompt: `À la fin, on dose par NaOH (C_b = 1,0 mol/L) l'acide éthanoïque restant dans un prélèvement de 1/10ᵉ du mélange équilibré (cas équimolaire où n_rest = 0,333 mol au total). Quel volume V_{eq} de soude faut-il (en mL, arrondi à 0,1 mL près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP((1 / 30) * 1000, 1),
            unit: 'mL',
            hint: `1/10ᵉ de 0,333 mol = 0,0333 mol = 33,3 mmol, divisé par 1,0 mol/L.`,
            ruleApplied: 'Suivi par dosage acide-base',
            mathExpression: `V_{eq} = 33,3 mmol / 1,0 M = 33,3 mL`,
            explanation: `V_{eq} ≈ 33,3 mL.`,
          },
          {
            questionPrompt: `Quel autre procédé industriel permet d'atteindre un rendement proche de 100 % tout en conservant le mélange équimolaire ?`,
            questionType: 'qcm',
            options: [
              'Éliminer l’eau (appareil de Dean-Stark) ou distiller l’ester au fur et à mesure de sa formation',
              'Doubler la quantité d’acide sulfurique',
              'Refroidir à 0 °C pendant 1 heure',
              'Ajouter de l’eau distillée dans le ballon',
            ],
            correctAnswer: 'Éliminer l’eau (appareil de Dean-Stark) ou distiller l’ester au fur et à mesure de sa formation',
            hint: `Soutirer un produit maintient Q_r < K en permanence.`,
            ruleApplied: 'Déplacement d’équilibre par extraction d’un produit',
            mathExpression: `[H₂O] → 0 ⇒ Q_r < K jusqu’à épuisement`,
            explanation: `En retirant l'eau ou l'ester (le plus volatil), on empêche l'hydrolyse inverse.`,
          },
          {
            questionPrompt: `Si l'on partait initialement de 1,0 mol d'ester et 1,0 mol d'eau (hydrolyse pure) avec la même constante d'équilibre, quelle quantité d'ester serait hydrolysée à l'équilibre (en mol, arrondie à 0,001) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(1 / 3, 3),
            unit: 'mol',
            hint: `Le même état d'équilibre final contient 0,667 mol d'ester, donc 1 - 0,667 = 0,333 mol a été hydrolysé !`,
            ruleApplied: 'Réversibilité de l’équilibre estérification-hydrolyse',
            mathExpression: `n_hydrolysé = 1 - 2/3 = 1/3 ≈ 0,333 mol`,
            explanation: `Le taux d'hydrolyse est le complémentaire exact : 33,3 %.`,
          },
          {
            questionPrompt: `Pourquoi l'estérification d'un alcool tertiaire (ex: 2-méthylpropan-2-ol) donne-t-elle un rendement très faible (~5 % à 10 %) ?`,
            questionType: 'qcm',
            options: [
              'À cause de l’encombrement stérique autour du groupe -OH qui bloque l’approche de l’acide et favorise la déshydratation',
              'Parce que K = 400',
              'Parce que les alcools tertiaires n’ont pas de masse molaire',
              'Parce que la réaction est explosive',
            ],
            correctAnswer: 'À cause de l’encombrement stérique autour du groupe -OH qui bloque l’approche de l’acide et favorise la déshydratation',
            hint: `Classe III : ~5 %, Classe II : ~60 %, Classe I : ~67 % en équimolaire.`,
            ruleApplied: 'Influence de la classe de l’alcool',
            mathExpression: `Rendement : Alcool I (67%) > II (60%) ≫ III (5%)`,
            explanation: `L'encombrement stérique limite fortement l'estérification des alcools tertiaires.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Estérification à l'équilibre (K = 4), excès de réactif et Dean-Stark`,
          `Étude thermodynamique et quantitative de l'estérification acide éthanoïque + éthanol (K = 4,0).`,
          items
        );
      }

      if (vMod === 1) {
        // Synthèse totale d'ester par anhydride d'acide (ex: synthèse de l'aspirine ou acétate d'isoamyle)
        // Prenons synthèse de l'aspirine : acide salicylique (M = 138 g/mol) + anhydride éthanoïque (M = 102 g/mol, d = 1.08 g/mL) -> aspirine (M = 180 g/mol) + acide éthanoïque (M = 60 g/mol)
        const mSalic = pickRandom([6.9, 13.8]); // 0.050 mol ou 0.100 mol exact !
        const nSalic = mSalic / 138;
        const vAnhydMl = mSalic === 6.9 ? 10 : 20; // mL
        const dAnhyd = 1.08;
        const mAnhyd = vAnhydMl * dAnhyd; // 10.8 g ou 21.6 g
        const nAnhyd = mAnhyd / 102; // 0.1059 ou 0.2118 mol (en excès !)
        const mAspTh = nSalic * 180; // 9.0 g ou 18.0 g !
        const rend = 0.85; // 85 % pratique après recristallisation
        const mAspExp = mAspTh * rend;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On synthétise l'aspirine (acide acétylsalicylique, M = 180 g/mol) à partir de m₁ = ${mSalic} g d'acide salicylique (M = 138 g/mol) et V₂ = ${vAnhydMl} mL d'anhydride éthanoïque (M = 102 g/mol, ρ = 1,08 g/mL). Calcule la quantité initiale n₁ d'acide salicylique (en mmol).`,
            questionType: 'numeric',
            correctAnswer: fmtP(nSalic * 1000, 0),
            unit: 'mmol',
            hint: `(${mSalic} / 138) × 1000.`,
            ruleApplied: 'Quantité de matière solide',
            mathExpression: `n₁ = ${mSalic} / 138 = ${fmtP(nSalic)} mol = ${fmtP(nSalic * 1000, 0)} mmol`,
            explanation: `n₁ = ${fmtP(nSalic * 1000, 0)} mmol.`,
          },
          {
            questionPrompt: `Calcule la masse m₂ d'anhydride éthanoïque introduite (en g).`,
            questionType: 'numeric',
            correctAnswer: fmtP(mAnhyd),
            unit: 'g',
            hint: `m₂ = ρ · V₂.`,
            ruleApplied: 'Masse volumique d’un réactif liquide',
            mathExpression: `m₂ = 1,08 × ${vAnhydMl} = ${fmtP(mAnhyd)} g`,
            explanation: `m₂ = ${fmtP(mAnhyd)} g.`,
          },
          {
            questionPrompt: `Calcule la quantité de matière n₂ d'anhydride éthanoïque introduite (en mmol, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(nAnhyd * 1000, 1),
            unit: 'mmol',
            hint: `(m₂ / 102) × 1000.`,
            ruleApplied: 'Quantité de matière liquide',
            mathExpression: `n₂ = ${fmtP(mAnhyd)} / 102 × 1000 ≈ ${fmtP(nAnhyd * 1000, 1)} mmol`,
            explanation: `n₂ ≈ ${fmtP(nAnhyd * 1000, 1)} mmol > n₁ : l'acide salicylique est le réactif limitant.`,
          },
          {
            questionPrompt: `Quel est le coproduit organique formé à côté de l'aspirine lors de l'action de l'anhydride éthanoïque (CH₃-CO)₂O ?`,
            questionType: 'qcm',
            options: [
              'L’acide éthanoïque (CH₃-COOH)',
              'L’eau H₂O',
              'Le chlorure d’hydrogène HCl(g)',
              'Le méthanol CH₃OH',
            ],
            correctAnswer: 'L’acide éthanoïque (CH₃-COOH)',
            hint: `R-OH + (CH₃CO)₂O → R-O-CO-CH₃ + CH₃COOH.`,
            ruleApplied: 'Réaction d’acylation par un anhydride',
            mathExpression: `Ar-OH + (CH₃CO)₂O → Aspirine + CH₃COOH`,
            explanation: `Cette réaction est rapide, totale et ne produit pas d'eau (donc pas d'hydrolyse inverse !).`,
          },
          {
            questionPrompt: `Pourquoi préfère-t-on l'anhydride éthanoïque à l'acide éthanoïque pour cette synthèse ?`,
            questionType: 'qcm',
            options: [
              'La réaction est rapide et totale (rendement théorique 100 %), sans équilibre d’hydrolyse',
              'Il est moins cher que l’eau',
              'Il donne un rendement limité à 67 %',
              'Il réagit uniquement à -20 °C',
            ],
            correctAnswer: 'La réaction est rapide et totale (rendement théorique 100 %), sans équilibre d’hydrolyse',
            hint: `L'acide éthanoïque produit n'hydrolyse pas l'aspirine comme le ferait l'eau.`,
            ruleApplied: 'Intérêt synthétique des dérivés d’acide',
            mathExpression: `Anhydride ⇒ réaction rapide et irréversible`,
            explanation: `Contrairement à l'acide carboxylique, l'anhydride permet une synthèse totale.`,
          },
          {
            questionPrompt: `Calcule la masse théorique maximale m_th d'aspirine (M = 180 g/mol) attendue (en g).`,
            questionType: 'numeric',
            correctAnswer: fmtP(mAspTh),
            unit: 'g',
            hint: `n₁ × 180.`,
            ruleApplied: 'Masse théorique attendue',
            mathExpression: `m_th = ${fmtP(nSalic)} × 180 = ${fmtP(mAspTh)} g`,
            explanation: `m_th = ${fmtP(mAspTh)} g.`,
          },
          {
            questionPrompt: `Après lavage à l'eau glacée et recristallisation, on pèse m_exp = ${fmtP(mAspExp)} g d'aspirine pure. Calcule le rendement pratique de la synthèse (en %).`,
            questionType: 'numeric',
            correctAnswer: '85',
            unit: '%',
            hint: `(m_exp / m_th) × 100.`,
            ruleApplied: 'Rendement de synthèse et purification',
            mathExpression: `η = (${fmtP(mAspExp)} / ${fmtP(mAspTh)}) × 100 = 85 %`,
            explanation: `Les pertes lors de la filtration et recristallisation expliquent un rendement de 85 %.`,
          },
          {
            questionPrompt: `Pourquoi ajoute-t-on de l'eau distillée glacée en fin de réaction ?`,
            questionType: 'qcm',
            options: [
              'Pour hydrolyser l’excès d’anhydride et faire précipiter au maximum l’aspirine peu soluble à froid',
              'Pour dissoudre totalement l’aspirine',
              'Pour déclencher une nouvelle estérification',
              'Pour dégager du dichlore',
            ],
            correctAnswer: 'Pour hydrolyser l’excès d’anhydride et faire précipiter au maximum l’aspirine peu soluble à froid',
            hint: `La solubilité de l'aspirine diminue fortement dans l'eau froide.`,
            ruleApplied: 'Protocole de cristallisation',
            mathExpression: `(CH₃CO)₂O + H₂O → 2 CH₃COOH (soluble) + Aspirine(s)`,
            explanation: `L'excès d'anhydride est détruit en acide acétique soluble pendant que l'aspirine cristallise.`,
          },
          {
            questionPrompt: `Si l'on remplaçait l'anhydride par le chlorure d'éthanoyle CH₃COCl, quel gaz corrosif et toxique se dégagerait à la place de l'acide éthanoïque ?`,
            questionType: 'qcm',
            options: ['Chlorure d’hydrogène HCl(g)', 'Dihydrogène H₂', 'Dioxygène O₂', 'Ammoniac NH₃'],
            correctAnswer: 'Chlorure d’hydrogène HCl(g)',
            hint: `R-COCl + R'-OH → R-COOR' + HCl.`,
            ruleApplied: 'Réactivité des chlorures d’acyle',
            mathExpression: `CH₃COCl + R-OH → Ester + HCl(g) ↑`,
            explanation: `Les chlorures d'acyle sont encore plus réactifs, mais dégagent HCl(g) corrosif (travail sous hotte anhydre).`,
          },
          {
            questionPrompt: `Quelle méthode physique rapide permet de vérifier la pureté de l'aspirine sèche obtenue (attendue à 135 °C) ?`,
            questionType: 'qcm',
            options: [
              'Mesure de la température de fusion au banc Köfler (et CCM)',
              'Test au papier pH uniquement',
              'Test de flamme verte',
              'Pesée sous vide',
            ],
            correctAnswer: 'Mesure de la température de fusion au banc Köfler (et CCM)',
            hint: `Un corps pur fond à température fixe et précise.`,
            ruleApplied: 'Contrôle de pureté organique',
            mathExpression: `T_fus(aspirine pure) = 135 °C`,
            explanation: `Le banc Köfler (point de fusion) et la chromatographie sur couche mince (CCM) valident identité et pureté.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Synthèse totale de l'aspirine par anhydride d'acide et purification`,
          `Synthèse d'aspirine à partir de ${mSalic} g d'acide salicylique et ${vAnhydMl} mL d'anhydride éthanoïque.`,
          items
        );
      }

      // vMod === 2: Saponification d'un ester & titrage en retour de l'excès de soude
      // Saponification de 0.020 mol d'ester par V_b = 50 mL de NaOH à C_b = 1.0 mol/L (50 mmol) -> reste 30 mmol de OH-
      // Titrage en retour de l'excès dans 1/5 du mélange (10 mL ou aliquot) ou sur total par HCl à C_a = 1.0 mol/L
      const nEsterMmol = pickRandom([20, 30]); // mmol
      const nOH_init_mmol = 50; // mmol (50 mL à 1.0 mol/L)
      const nOH_rest_mmol = nOH_init_mmol - nEsterMmol; // 30 ou 20 mmol
      const VaEqMl = nOH_rest_mmol / 1.0; // mL de HCl à 1.0 mol/L
      const M_savon = 306; // oléate de sodium (pour trioléine: 1 mole triglycéride + 3 NaOH -> 3 savons + glycérol) ; ou éthanoate de sodium M = 82 g/mol !
      // Utilisons un triester de triglycéride M = 884 g/mol ? Trop gros -> utilisons l'ester simple (éthanoate d'éthyle, M=88 g/mol -> savon éthanoate de sodium M = 82 g/mol), OU triester de glycérol où 10 mmol de triester consomment 30 mmol de NaOH !
      // Gardons ester simple à nEsterMmol = 20 ou 30 mmol, M_ester = 88 g/mol -> m_ester = 1.76 g ou 2.64 g, M_sel = 82 g/mol !
      const mEster = (nEsterMmol / 1000) * 88;
      const mSelTh = (nEsterMmol / 1000) * 82;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On chauffe à reflux m_E = ${fmtP(mEster)} g d'éthanoate d'éthyle (M = 88 g/mol) avec V_b = 50,0 mL de soude (Na⁺ + OH⁻) à C_b = 1,00 mol/L (excès). Quelle est la quantité initiale n₀(OH⁻) introduite (en mmol) ?`,
          questionType: 'numeric',
          correctAnswer: '50',
          unit: 'mmol',
          hint: `C_b · V_b(mL).`,
          ruleApplied: 'Quantité initiale de soude',
          mathExpression: `n₀(OH⁻) = 1,00 × 50,0 = 50 mmol`,
          explanation: `n₀(OH⁻) = 50 mmol.`,
        },
        {
          questionPrompt: `Calcule la quantité de matière d'ester n_E = m_E / 88 mise en jeu (en mmol).`,
          questionType: 'numeric',
          correctAnswer: String(nEsterMmol),
          unit: 'mmol',
          hint: `(${fmtP(mEster)} / 88) × 1000.`,
          ruleApplied: 'Quantité d’ester',
          mathExpression: `n_E = ${fmtP(mEster)} / 88 = ${nEsterMmol} mmol`,
          explanation: `n_E = ${nEsterMmol} mmol.`,
        },
        {
          questionPrompt: `Quelles sont les deux propriétés fondamentales de la réaction de saponification CH₃COOC₂H₅ + OH⁻ → CH₃COO⁻ + C₂H₅OH ?`,
          questionType: 'qcm',
          options: [
            'Lente (d’où le chauffage à reflux) et TOTALE (irréversible)',
            'Instantanée et limitée à 67 %',
            'Lente et équilibrée (limitée)',
            'Endothermique et sans produit organique',
          ],
          correctAnswer: 'Lente (d’où le chauffage à reflux) et TOTALE (irréversible)',
          hint: `L'ion carboxylate CH₃COO⁻ ne réagit pas avec l'alcool.`,
          ruleApplied: 'Caractéristiques cinétique et thermodynamique de la saponification',
          mathExpression: `Saponification = lente et totale`,
          explanation: `Contrairement à l'hydrolyse acide, l'hydrolyse basique (saponification) est totale.`,
        },
        {
          questionPrompt: `À l'issue de la réaction totale, combien reste-t-il d'ions hydroxyde OH⁻ en excès dans le ballon (en mmol) ?`,
          questionType: 'numeric',
          correctAnswer: String(nOH_rest_mmol),
          unit: 'mmol',
          hint: `n₀(OH⁻) - n_E.`,
          ruleApplied: 'Bilan de fin de réaction totale',
          mathExpression: `n_rest(OH⁻) = 50 - ${nEsterMmol} = ${nOH_rest_mmol} mmol`,
          explanation: `Il reste ${nOH_rest_mmol} mmol de soude n'ayant pas réagi.`,
        },
        {
          questionPrompt: `Pour doser cet excès de soude (titrage en retour), on refroidit et on verse de l'acide chlorhydrique (H₃O⁺ + Cl⁻) à C_a = 1,00 mol/L. Quel volume V_a faut-il verser pour neutraliser exactement les ${nOH_rest_mmol} mmol de OH⁻ restants (en mL) ?`,
          questionType: 'numeric',
          correctAnswer: String(VaEqMl),
          unit: 'mL',
          hint: `C_a · V_a = n_rest(OH⁻).`,
          ruleApplied: 'Titrage acide-base en retour',
          mathExpression: `V_a = ${nOH_rest_mmol} / 1,00 = ${VaEqMl} mL`,
          explanation: `L'équivalence du dosage en retour intervient à V_a = ${VaEqMl} mL.`,
        },
        {
          questionPrompt: `Calcule la masse théorique de sel carboxylate (éthanoate de sodium CH₃COONa, M = 82 g/mol) produite (en g, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(mSelTh),
          unit: 'g',
          hint: `n_E(mol) × 82.`,
          ruleApplied: 'Masse de sel formé',
          mathExpression: `m = ${nEsterMmol / 1000} × 82 = ${fmtP(mSelTh)} g`,
          explanation: `m = ${fmtP(mSelTh)} g.`,
        },
        {
          questionPrompt: `Dans la fabrication industrielle d'un savon à partir d'un triglycéride (triester du glycérol), combien de moles de soude NaOH sont consommées par mole de triglycéride ?`,
          questionType: 'numeric',
          correctAnswer: '3',
          hint: `Un triglycéride possède 3 fonctions ester.`,
          ruleApplied: 'Saponification d’un triester',
          mathExpression: `Triester + 3 NaOH → 3 Savon + Glycérol`,
          explanation: `Il faut 3 moles de soude pour libérer 1 mole de glycérol et 3 moles de carboxylate de sodium (savon).`,
        },
        {
          questionPrompt: `Quel est le nom systématique IUPAC du glycérol formé lors de la saponification des corps gras ?`,
          questionType: 'qcm',
          options: [
            'Propane-1,2,3-triol',
            'Propan-1-ol',
            'Éthane-1,2-diol',
            'Acide propanoïque',
          ],
          correctAnswer: 'Propane-1,2,3-triol',
          hint: `Triol à 3 atomes de carbone.`,
          ruleApplied: 'Structure du glycérol',
          mathExpression: `HO-CH₂-CH(OH)-CH₂-OH`,
          explanation: `Le glycérol est le propane-1,2,3-triol.`,
        },
        {
          questionPrompt: `En fin de fabrication du savon, on verse le mélange dans de l'eau salée saturée froide (NaCl) : cette opération appelée « relargage » sert à :`,
          questionType: 'qcm',
          options: [
            'Précipiter totalement le savon (peu soluble en eau très salée par effet d’ion commun Na⁺) pour le filtrer',
            'Dissoudre le savon dans l’eau',
            'Catalyser l’estérification inverse',
            'Neutraliser le glycérol',
          ],
          correctAnswer: 'Précipiter totalement le savon (peu soluble en eau très salée par effet d’ion commun Na⁺) pour le filtrer',
          hint: `Le savon R-COONa précipite en présence d'un fort excès de Na⁺.`,
          ruleApplied: 'Technique du relargage',
          mathExpression: `[Na⁺] élevé ⇒ solubilité de R-COONa ↓`,
          explanation: `Le relargage permet de séparer le savon solide par simple filtration sur Büchner.`,
        },
        {
          questionPrompt: `Quelle partie d'un ion carboxylate savon (ex: C₁₇H₃₅-COO⁻) est lipophile (attire les graisses) et quelle partie est hydrophile (attire l'eau) ?`,
          questionType: 'qcm',
          options: [
            'Chaîne carbonée apolaire lipophile et tête -COO⁻ polaire hydrophile',
            'Chaîne carbonée hydrophile et tête -COO⁻ lipophile',
            'Les deux parties sont uniquement lipophiles',
            'Les deux parties sont uniquement hydrophiles',
          ],
          correctAnswer: 'Chaîne carbonée apolaire lipophile et tête -COO⁻ polaire hydrophile',
          hint: `Propriété amphiphile des tensioactifs.`,
          ruleApplied: 'Propriétés tensioactives des savons',
          mathExpression: `Queue apolaire (graisses) + Tête ionique -COO⁻ (eau)`,
          explanation: `C'est cette double affinité qui permet la formation de micelles et le pouvoir détergent.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Saponification totale, titrage en retour de NaOH et fabrication du savon`,
        `Saponification de ${fmtP(mEster)} g d'éthanoate d'éthyle par 50 mL de NaOH 1,0 M, suivie d'un titrage en retour par HCl 1,0 M.`,
        items
      );
    }

    default:
      return null;
  }
}
