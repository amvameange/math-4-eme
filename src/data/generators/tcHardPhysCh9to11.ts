import { ExerciseDifficulty } from '../../types/math';
import { GeneratedExercise, pickRandom } from './types';
import { assembleHardPhysExercise, fmtP, HardQuestionSpec } from './tcHardPhysHelpers';

export function generateHardPhysCh9to11(
  chapterId: string,
  difficulty: ExerciseDifficulty,
  vMod: number
): GeneratedExercise | null {
  switch (chapterId) {
    // -------------------------------------------------------------------------
    // 9. NOYAU & RADIOACTIVITÉ
    // -------------------------------------------------------------------------
    case 'physTc-noyau-radioactivite': {
      if (vMod === 0) {
        // Datation au Carbone 14 (t_{1/2} = 5730 ans) ou Iode 131
        const tHalf = 5730; // ans
        const lambdaYear = Math.LN2 / tHalf;
        const pctRemain = pickRandom([25, 12.5, 40]);
        const ageYears = (tHalf / Math.LN2) * Math.log(100 / pctRemain);
        // Échantillon de carbone pur m = 1.2 g contenant fraction 10^{-12} de C-14 au moment de la mort
        // M(C) = 12 g/mol -> N(C total) = 0.1 * 6.02e23 = 6.02e22 => N0(C14) = 6.02e10 noyaux
        const N0 = 6.02e10;
        const lambdaSec = Math.LN2 / (tHalf * 365.25 * 86400);
        const A0Bq = lambdaSec * N0;
        const ABq = (pctRemain / 100) * A0Bq;
        const t2 = tHalf * 2;

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Un ossement fossile contient ${pctRemain} % de l'activité en carbone 14 (¹⁴₆C, demi-vie t_{1/2} = 5730 ans) d'un échantillon vivant de même masse de carbone. Quelle est l'équation de la désintégration β⁻ de ¹⁴₆C en azote ¹⁴₇N ?`,
            questionType: 'qcm',
            options: [
              `¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄_e`,
              `¹⁴₆C → ¹⁴₅B + ⁰₊₁e + ν_e`,
              `¹⁴₆C → ¹⁰₄Be + ⁴₂He`,
              `¹⁴₆C + ¹₀n → ¹⁵₆C`,
            ],
            correctAnswer: `¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄_e`,
            hint: `La radioactivité β⁻ émet un électron ⁰₋₁e et un antineutrino électronique.`,
            ruleApplied: 'Lois de conservation de Soddy (A et Z)',
            mathExpression: `6 = 7 + (-1) et 14 = 14 + 0`,
            explanation: `Un neutron se transforme en proton en émettant un électron et un antineutrino.`,
          },
          {
            questionPrompt: `Calcule la constante radioactive λ du carbone 14 en an⁻¹ (en 10⁻⁴ an⁻¹, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(lambdaYear * 1e4),
            unit: '×10⁻⁴ an⁻¹',
            hint: `λ = ln(2) / t_{1/2}.`,
            ruleApplied: 'Constante radioactive',
            mathExpression: `λ = ln(2) / 5730 ≈ ${fmtP(lambdaYear * 1e4)}×10⁻⁴ an⁻¹`,
            explanation: `λ ≈ 1,21×10⁻⁴ an⁻¹.`,
          },
          {
            questionPrompt: `Convertis cette constante radioactive λ en s⁻¹ (en 10⁻¹² s⁻¹, avec 1 an = 365,25 jours, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(lambdaSec * 1e12),
            unit: '×10⁻¹² s⁻¹',
            hint: `1 an = 3,15576×10⁷ s.`,
            ruleApplied: 'Conversion d’unité SI',
            mathExpression: `λ ≈ ${fmtP(lambdaSec * 1e12)}×10⁻¹² s⁻¹`,
            explanation: `λ ≈ ${fmtP(lambdaSec * 1e12)}×10⁻¹² s⁻¹.`,
          },
          {
            questionPrompt: `Pour une masse de 1,2 g de carbone pur (M = 12 g/mol, N_A = 6,02×10²³ mol⁻¹), la proportion isotopique initiale à la mort est ¹⁴C / C_total = 10⁻¹². Calcule le nombre initial N₀ de noyaux ¹⁴C (en 10¹⁰ noyaux).`,
            questionType: 'numeric',
            correctAnswer: '6.02',
            unit: '×10¹⁰',
            hint: `n = 1,2 / 12 = 0,1 mol ⇒ N_total = 0,1 × 6,02×10²³, puis × 10⁻¹².`,
            ruleApplied: 'Nombre de noyaux dans un échantillon',
            mathExpression: `N₀ = 0,1 × 6,02×10²³ × 10⁻¹² = 6,02×10¹⁰`,
            explanation: `N₀ = 6,02×10¹⁰ noyaux de ¹⁴C.`,
          },
          {
            questionPrompt: `Calcule l'activité initiale A₀ = λ·N₀ de l'échantillon au moment de la mort (en Bq, arrondie à 0,001 Bq près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(A0Bq, 3),
            unit: 'Bq',
            hint: `λ(s⁻¹) × N₀.`,
            ruleApplied: 'Loi d’activité radioactive A = λ N',
            mathExpression: `A₀ ≈ ${fmtP(A0Bq, 3)} Bq`,
            explanation: `A₀ ≈ ${fmtP(A0Bq, 3)} Bq (désintégrations par seconde).`,
          },
          {
            questionPrompt: `Calcule l'activité actuelle mesurée A = ${pctRemain}% · A₀ (en Bq, arrondie à 0,001 Bq près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(ABq, 3),
            unit: 'Bq',
            hint: `${pctRemain}/100 × ${fmtP(A0Bq, 3)}.`,
            ruleApplied: 'Proportionnalité A(t) / A₀',
            mathExpression: `A ≈ ${fmtP(ABq, 3)} Bq`,
            explanation: `A ≈ ${fmtP(ABq, 3)} Bq.`,
          },
          {
            questionPrompt: `Détermine l'âge t de l'ossement fossile par datation au carbone 14 (en années, arrondi à 10 ans près).`,
            questionType: 'numeric',
            correctAnswer: String(Math.round(ageYears / 10) * 10),
            unit: 'ans',
            hint: `t = (t_{1/2} / ln 2) · ln(A₀ / A).`,
            ruleApplied: 'Formule de datation radioactive',
            mathExpression: `t = (5730 / ln 2) × ln(100/${pctRemain}) ≈ ${Math.round(ageYears)} ans`,
            explanation: `L'ossement date d'environ ${Math.round(ageYears / 10) * 10} ans.`,
          },
          {
            questionPrompt: `Quel est le temps moyen de vie τ = 1 / λ d'un noyau de carbone 14 (en années, arrondi à 1 an près) ?`,
            questionType: 'numeric',
            correctAnswer: String(Math.round(tHalf / Math.LN2)),
            unit: 'ans',
            hint: `τ = t_{1/2} / ln(2).`,
            ruleApplied: 'Constante de temps radioactive τ',
            mathExpression: `τ = 5730 / 0,6931 ≈ ${Math.round(tHalf / Math.LN2)} ans`,
            explanation: `τ ≈ ${Math.round(tHalf / Math.LN2)} ans.`,
          },
          {
            questionPrompt: `Quelle fraction d'activité reste-t-il après exactement 3 demi-vies (soit 17 190 ans) (en %) ?`,
            questionType: 'numeric',
            correctAnswer: '12.5',
            unit: '%',
            hint: `(1/2)³ × 100.`,
            ruleApplied: 'Loi par demi-vies entières',
            mathExpression: `(1/8) × 100 = 12,5 %`,
            explanation: `Au bout de n demi-vies, il reste 1/2ⁿ de l'activité initiale.`,
          },
          {
            questionPrompt: `Pourquoi la datation au ¹⁴C devient-elle imprécise au-delà de ~50 000 ans ?`,
            questionType: 'qcm',
            options: [
              'Il reste moins de 0,2 % de ¹⁴C (activité trop faible devant le bruit de fond)',
              'La constante λ augmente avec le temps',
              'Le carbone 14 devient stable',
              'Les lois de Soddy cessent de s’appliquer',
            ],
            correctAnswer: 'Il reste moins de 0,2 % de ¹⁴C (activité trop faible devant le bruit de fond)',
            hint: `50 000 ans ≈ 9 demi-vies ⇒ (1/2)⁹ ≈ 0,002.`,
            ruleApplied: 'Limite métrologique de la datation ¹⁴C',
            mathExpression: `A(9 t_{1/2}) = A₀ / 512 < 0,2 % A₀`,
            explanation: `Au-delà de 8 à 10 demi-vies, le signal est noyé dans le bruit ambiant ; on utilise alors ⁴⁰K/⁴⁰Ar ou ²³⁸U/²⁰⁶Pb.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Datation au carbone 14 : activité A₀, constante λ et limite archéologique`,
          `Un ossement contenant 1,2 g de carbone présente aujourd'hui ${pctRemain} % de l'activité initiale en ¹⁴C (t_{1/2} = 5730 ans).`,
          items
        );
      }

      if (vMod === 1) {
        // Désintégration alpha du Radium 226 -> Radon 222 + Hélium 4 et partage d'énergie cinétique
        // Masses exactes en u : m(226Ra) = 226.0254 u, m(222Rn) = 222.0175 u, m(4He) = 4.0026 u (1 u = 931.5 MeV/c^2)
        const mRa = 226.0254;
        const mRn = 222.0175;
        const mHe = 4.0026;
        const dmU = mRa - (mRn + mHe); // 0.0053 u
        const uMev = 931.5;
        const Q_MeV = dmU * uMev; // ≈ 4.937 MeV
        // Par conservation de l'impulsion (noyau père au repos) : p_Rn + p_He = 0 => Ec(He)/Ec(Rn) = m_Rn/m_He ≈ 222/4 = 55.5
        const fracAlpha = 222 / 226; // ≈ 0.9823
        const EcAlpha = Q_MeV * fracAlpha;
        const EcRn = Q_MeV - EcAlpha;
        const tHalfRa = 1600; // ans
        const vAlpha = Math.sqrt((2 * EcAlpha * 1e6 * 1.6e-19) / (mHe * 1.66e-27));

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Le radium ²²⁶₈₈Ra subit une désintégration α en radon ᴬ_Z Rn. Quels sont le nombre de masse A et le numéro atomique Z du radon formé ?`,
            questionType: 'qcm',
            options: ['A = 222 et Z = 86', 'A = 224 et Z = 86', 'A = 222 et Z = 87', 'A = 226 et Z = 89'],
            correctAnswer: 'A = 222 et Z = 86',
            hint: `La particule α est un noyau d'hélium ⁴₂He.`,
            ruleApplied: 'Lois de Soddy pour la radioactivité α',
            mathExpression: `²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He`,
            explanation: `A = 226 - 4 = 222 et Z = 88 - 2 = 86.`,
          },
          {
            questionPrompt: `Calcule la perte de masse Δm = m(Ra) - [m(Rn) + m(He)] en unités de masse atomique u (avec m(Ra)=226,0254 u ; m(Rn)=222,0175 u ; m(He)=4,0026 u).`,
            questionType: 'numeric',
            correctAnswer: fmtP(dmU, 4),
            unit: 'u',
            hint: `226,0254 - (222,0175 + 4,0026).`,
            ruleApplied: 'Défaut de masse d’une réaction nucléaire',
            mathExpression: `Δm = 226,0254 - 226,0201 = 0,0053 u`,
            explanation: `Δm = 0,0053 u > 0 : la réaction est exoénergétique.`,
          },
          {
            questionPrompt: `Calcule l'énergie totale libérée Q = Δm · c² en MeV (avec 1 u·c² = 931,5 MeV, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Q_MeV),
            unit: 'MeV',
            hint: `0,0053 × 931,5.`,
            ruleApplied: 'Équivalence masse-énergie d’Einstein',
            mathExpression: `Q = 0,0053 × 931,5 ≈ ${fmtP(Q_MeV)} MeV`,
            explanation: `Q ≈ ${fmtP(Q_MeV)} MeV.`,
          },
          {
            questionPrompt: `Convertis cette énergie libérée Q par désintégration en pJ (10⁻¹² J, avec 1 MeV = 1,6×10⁻¹³ J, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((Q_MeV * 1.6e-13) / 1e-12),
            unit: 'pJ',
            hint: `Q(MeV) × 0,16.`,
            ruleApplied: 'Conversion MeV / Joules',
            mathExpression: `Q ≈ ${fmtP(Q_MeV)} × 0,16 ≈ ${fmtP((Q_MeV * 1.6e-13) / 1e-12)} pJ`,
            explanation: `Q ≈ ${fmtP((Q_MeV * 1.6e-13) / 1e-12)} pJ.`,
          },
          {
            questionPrompt: `Le noyau père ²²⁶Ra étant initialement au repos, quelle loi impose p_Rn + p_α = 0 juste après la désintégration ?`,
            questionType: 'qcm',
            options: [
              'La conservation de la quantité de mouvement d’un système isolé',
              'La loi de Soddy',
              'La loi de Faraday',
              'La conservation de l’énergie mécanique seule',
            ],
            correctAnswer: 'La conservation de la quantité de mouvement d’un système isolé',
            hint: `Les forces nucléaires sont internes au système.`,
            ruleApplied: 'Conservation de la quantité de mouvement',
            mathExpression: `m_Rn v_Rn = m_α v_α (sens opposés)`,
            explanation: `Le noyau de radon recule en sens opposé de la particule α avec la même norme d'impulsion p.`,
          },
          {
            questionPrompt: `Sachant E_c = p²/(2m), quelle fraction de l'énergie totale Q emporte la particule α (E_c(α) / Q ≈ A_Rn / (A_Rn + A_α), en %, arrondie à 0,1 % près) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(fracAlpha * 100, 1),
            unit: '%',
            hint: `(222 / 226) × 100.`,
            ruleApplied: 'Partage inversement proportionnel aux masses',
            mathExpression: `E_c(α)/Q = 222 / 226 ≈ ${fmtP(fracAlpha * 100, 1)} %`,
            explanation: `La particule α, beaucoup plus légère, emporte ~98,2 % de l'énergie cinétique.`,
          },
          {
            questionPrompt: `Calcule l'énergie cinétique E_c(α) de la particule α (en MeV, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EcAlpha),
            unit: 'MeV',
            hint: `(222 / 226) × ${fmtP(Q_MeV)}.`,
            ruleApplied: 'Énergie cinétique de la particule α',
            mathExpression: `E_c(α) ≈ ${fmtP(EcAlpha)} MeV`,
            explanation: `E_c(α) ≈ ${fmtP(EcAlpha)} MeV.`,
          },
          {
            questionPrompt: `Calcule l'énergie cinétique de recul E_c(Rn) du noyau fils ²²²Rn (en keV, arrondie à 1 keV près).`,
            questionType: 'numeric',
            correctAnswer: String(Math.round(EcRn * 1000)),
            unit: 'keV',
            hint: `(Q - E_c(α)) × 1000.`,
            ruleApplied: 'Énergie de recul du noyau fils',
            mathExpression: `E_c(Rn) ≈ ${Math.round(EcRn * 1000)} keV`,
            explanation: `E_c(Rn) ≈ ${Math.round(EcRn * 1000)} keV.`,
          },
          {
            questionPrompt: `Calcule la vitesse d'éjection v_α de la particule α (en 10⁷ m/s, avec 1 u = 1,66×10⁻²⁷ kg, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vAlpha / 1e7),
            unit: '×10⁷ m/s',
            hint: `v_α = √(2 E_c(α)(J) / m_α).`,
            ruleApplied: 'Vitesse d’éjection α',
            mathExpression: `v_α ≈ ${fmtP(vAlpha / 1e7)}×10⁷ m/s`,
            explanation: `La particule α est éjectée à ~${fmtP(vAlpha / 1e7)}×10⁷ m/s (~5 % de c).`,
          },
          {
            questionPrompt: `Calcule l'énergie de liaison du noyau d'hélium ⁴₂He (en MeV, sachant m_p=1,00728 u, m_n=1,00866 u, m(⁴He)=4,00150 u ; arrondie à 0,1 MeV près).`,
            questionType: 'numeric',
            correctAnswer: fmtP((2 * 1.00728 + 2 * 1.00866 - 4.0015) * 931.5, 1),
            unit: 'MeV',
            hint: `Δm = 2 m_p + 2 m_n - m(⁴He), puis × 931,5.`,
            ruleApplied: 'Énergie de cohésion d’un noyau',
            mathExpression: `E_l(⁴He) = 0,03038 × 931,5 ≈ 28,3 MeV`,
            explanation: `E_l(⁴He) ≈ 28,3 MeV (soit 7,07 MeV/nucléon : noyau exceptionnellement stable).`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Désintégration α du radium-226 : défaut de masse et partage cinétique`,
          `Étude complète de la désintégration ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.`,
          items
        );
      }

      // vMod === 2: Médecine nucléaire (Iode-131, t1/2 = 8,0 jours)
      const tHalfD = 8.0; // jours
      const A0MBq = pickRandom([160, 320, 480]); // MBq
      const days = 24; // 3 demi-vies exact !
      const A24 = A0MBq / 8;
      const lambdaS = Math.LN2 / (tHalfD * 86400);
      const N0 = (A0MBq * 1e6) / lambdaS; // noyaux
      // Masse initiale m0 = (N0 / NA) * 131 g
      const m0Ng = (N0 / 6.02e23) * 131 * 1e9; // nanogrammes !
      // Temps pour passer sous 10 MBq : 2^n = A0 / 10 ->
      const tUnder10D = tHalfD * Math.log2(A0MBq / 10);

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `En médecine nucléaire, on injecte une dose d'iode 131 (¹³¹₅₃I, t_{1/2} = 8,0 jours, émetteur β⁻) d'activité initiale A₀ = ${A0MBq} MBq. Quel est le noyau fils formé (Z = 54 correspond au Xénon Xe) ?`,
          questionType: 'qcm',
          options: [`¹³¹₅₄Xe`, `¹³¹₅₂Te`, `¹²⁷₅₂Te`, `¹³⁰₅₄Xe`],
          correctAnswer: `¹³¹₅₄Xe`,
          hint: `Dans β⁻, A est conservé et Z augmente de 1.`,
          ruleApplied: 'Désintégration β⁻ médicale',
          mathExpression: `¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e + ν̄_e`,
          explanation: `Z passe de 53 à 54 (Xénon 131).`,
        },
        {
          questionPrompt: `Calcule la constante radioactive λ de l'iode 131 en jour⁻¹ (arrondie à 0,001 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(Math.LN2 / tHalfD, 3),
          unit: 'jour⁻¹',
          hint: `ln(2) / 8,0.`,
          ruleApplied: 'Constante radioactive',
          mathExpression: `λ = ln(2) / 8,0 ≈ 0,087 jour⁻¹`,
          explanation: `λ ≈ 0,087 jour⁻¹.`,
        },
        {
          questionPrompt: `Calcule λ en 10⁻⁶ s⁻¹ (arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(lambdaS * 1e6),
          unit: '×10⁻⁶ s⁻¹',
          hint: `ln(2) / (8 × 86 400), puis ×10⁶.`,
          ruleApplied: 'Conversion temps SI',
          mathExpression: `λ ≈ ${fmtP(lambdaS * 1e6)}×10⁻⁶ s⁻¹`,
          explanation: `λ ≈ ${fmtP(lambdaS * 1e6)}×10⁻⁶ s⁻¹.`,
        },
        {
          questionPrompt: `Calcule le nombre initial N₀ = A₀ / λ de noyaux d'iode 131 injectés (en 10¹⁴ noyaux, arrondi à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(N0 / 1e14),
          unit: '×10¹⁴ noyaux',
          hint: `(${A0MBq}×10⁶) / λ(s⁻¹).`,
          ruleApplied: 'Nombre initial de noyaux radioactifs',
          mathExpression: `N₀ ≈ ${fmtP(N0 / 1e14)}×10¹⁴`,
          explanation: `N₀ ≈ ${fmtP(N0 / 1e14)}×10¹⁴ noyaux.`,
        },
        {
          questionPrompt: `Calcule la masse extrêmement faible m₀ d'iode 131 injectée (M = 131 g/mol, N_A = 6,02×10²³ mol⁻¹, en nanogrammes ng, arrondie à 0,1 ng près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(m0Ng, 1),
          unit: 'ng',
          hint: `m₀ = (N₀ / N_A) × 131 g, puis ×10⁹ pour ng.`,
          ruleApplied: 'Masse d’un traceur radioactif',
          mathExpression: `m₀ ≈ ${fmtP(m0Ng, 1)} ng`,
          explanation: `Quelques dizaines de nanogrammes suffisent pour produire des centaines de MBq !`,
        },
        {
          questionPrompt: `Quelle est l'activité restante au bout de t = 24 jours (en MBq) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(A24),
          unit: 'MBq',
          hint: `24 jours = 3 demi-vies.`,
          ruleApplied: 'Décroissance sur un multiple de t_{1/2}',
          mathExpression: `A(24 j) = ${A0MBq} / 2³ = ${A24} MBq`,
          explanation: `Il reste 1/8 de l'activité initiale, soit ${A24} MBq.`,
        },
        {
          questionPrompt: `Calcule l'activité restante au bout de t = 10 jours (en MBq, arrondie à 0,1 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(A0MBq * Math.exp(-lambdaS * 10 * 86400), 1),
          unit: 'MBq',
          hint: `A₀ · e^{-λ·t} = A₀ · (0,5)^{10/8}.`,
          ruleApplied: 'Loi exponentielle continue',
          mathExpression: `A(10 j) ≈ ${fmtP(A0MBq * Math.exp(-lambdaS * 10 * 86400), 1)} MBq`,
          explanation: `A(10 j) ≈ ${fmtP(A0MBq * Math.exp(-lambdaS * 10 * 86400), 1)} MBq.`,
        },
        {
          questionPrompt: `Au bout de combien de jours l'activité descend-elle sous le seuil de 10 MBq (en jours, arrondi à 0,1 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(tUnder10D, 1),
          unit: 'jours',
          hint: `t = t_{1/2} · log₂(A₀ / 10).`,
          ruleApplied: 'Temps de décroissance vers un seuil',
          mathExpression: `t = 8 × ln(${A0MBq / 10}) / ln(2) ≈ ${fmtP(tUnder10D, 1)} j`,
          explanation: `Il faut environ ${fmtP(tUnder10D, 1)} jours.`,
        },
        {
          questionPrompt: `Combien de noyaux se sont désintégrés pendant les 24 premiers jours (en % de N₀) ?`,
          questionType: 'numeric',
          correctAnswer: '87.5',
          unit: '%',
          hint: `N_dés = N₀ - N(24 j) = (1 - 1/8) N₀.`,
          ruleApplied: 'Proportion de noyaux désintégrés',
          mathExpression: `(1 - 0,125) × 100 = 87,5 %`,
          explanation: `87,5 % des noyaux injectés ont déjà subi la désintégration.`,
        },
        {
          questionPrompt: `Si l'élimination biologique s'ajoute avec une demi-vie biologique t_b = 8,0 jours, quelle est la demi-vie effective t_eff = (t_r · t_b)/(t_r + t_b) dans l'organisme (en jours) ?`,
          questionType: 'numeric',
          correctAnswer: '4',
          unit: 'jours',
          hint: `λ_eff = λ_r + λ_b ⇒ 1/t_eff = 1/t_r + 1/t_b.`,
          ruleApplied: 'Demi-vie effective en radiobiologie',
          mathExpression: `t_eff = (8 × 8)/(8 + 8) = 4,0 jours`,
          explanation: `Les deux décroissances exponentielles s'additionnent : t_eff = 4,0 jours.`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Médecine nucléaire (Iode-131) : activité, masse traceur et demi-vie effective`,
        `Injection d'une dose d'iode 131 (A₀ = ${A0MBq} MBq, t_{1/2} = 8,0 j, M = 131 g/mol).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 10. RÉACTIONS NUCLÉAIRES : FISSION, FUSION & COURBE D'ASTON
    // -------------------------------------------------------------------------
    case 'physTc-reactions-nucleaires': {
      if (vMod === 0) {
        // Réacteur nucléaire à fission U-235
        // 235_92 U + 1_0 n -> 94_38 Sr + 140_54 Xe + x * 1_0 n  (x = 2 !)
        // E_lib ≈ 200 MeV par fission (ou calcul exact via dm = 0.215 u -> 200.27 MeV)
        const P_elecMW = pickRandom([900, 1200]); // MW électrique
        const rend = 0.3; // rendement 30 %
        const P_thMW = P_elecMW / rend; // 3000 MW ou 4000 MW thermique
        const E_fissMeV = 200; // MeV
        const E_fissJ = E_fissMeV * 1.6e-13; // 3.2e-11 J
        const fissionsPerS = (P_thMW * 1e6) / E_fissJ;
        const mU_kgPerDay = (fissionsPerS * 86400 / 6.02e23) * 0.235; // kg par jour
        const dmLostPerDayG = ((P_thMW * 1e6 * 86400) / 9e16) * 1000; // Δm = ΔE/c² en grammes !

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `Dans un réacteur nucléaire, l'uranium 235 subit la fission : ²³⁵₉₂U + ¹₀n → ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + x·¹₀n. Quel est le nombre x de neutrons libérés ?`,
            questionType: 'numeric',
            correctAnswer: '2',
            hint: `Conservation du nombre de masse A : 235 + 1 = 94 + 140 + x.`,
            ruleApplied: 'Conservation de A (Soddy)',
            mathExpression: `236 = 234 + x ⇒ x = 2 neutrons`,
            explanation: `x = 2 neutrons rapides sont libérés, permettant la réaction en chaîne.`,
          },
          {
            questionPrompt: `Vérifie la conservation du numéro atomique Z entre réactifs et produits (Z_total).`,
            questionType: 'numeric',
            correctAnswer: '92',
            hint: `38 + 54.`,
            ruleApplied: 'Conservation de la charge Z',
            mathExpression: `92 + 0 = 38 + 54 = 92`,
            explanation: `La charge totale vaut 92 de part et d'autre.`,
          },
          {
            questionPrompt: `Chaque fission libère environ ΔE = 200 MeV. Convertis cette énergie par fission en pJ (10⁻¹² J, avec 1 MeV = 1,6×10⁻¹³ J).`,
            questionType: 'numeric',
            correctAnswer: '32',
            unit: 'pJ',
            hint: `200 × 0,16.`,
            ruleApplied: 'Conversion MeV / Joules',
            mathExpression: `ΔE = 200 × 1,6×10⁻¹³ = 3,2×10⁻¹¹ J = 32 pJ`,
            explanation: `Chaque fission d'un seul noyau libère 32 pJ.`,
          },
          {
            questionPrompt: `Calcule la perte de masse Δm correspondant à 200 MeV (en u, avec 1 u·c² = 931,5 MeV, arrondie à 0,001 u près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(200 / 931.5, 3),
            unit: 'u',
            hint: `200 / 931,5.`,
            ruleApplied: 'Défaut de masse de fission',
            mathExpression: `Δm = 200 / 931,5 ≈ ${fmtP(200 / 931.5, 3)} u`,
            explanation: `Environ 0,215 u (soit ~0,09 % de la masse) est convertie en énergie.`,
          },
          {
            questionPrompt: `La centrale délivre une puissance électrique P_élec = ${P_elecMW} MW avec un rendement thermodynamique η = 30 %. Calcule la puissance thermique P_th fournie par le cœur (en MW).`,
            questionType: 'numeric',
            correctAnswer: String(P_thMW),
            unit: 'MW',
            hint: `P_th = P_élec / 0,30.`,
            ruleApplied: 'Rendement d’une centrale thermique',
            mathExpression: `P_th = ${P_elecMW} / 0,30 = ${P_thMW} MW`,
            explanation: `P_th = ${P_thMW} MW (2/3 de l'énergie est évacuée en chaleur vers la source froide).`,
          },
          {
            questionPrompt: `Calcule le nombre de fissions se produisant chaque seconde dans le cœur (en 10¹⁹ fissions/s, arrondi à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(fissionsPerS / 1e19),
            unit: '×10¹⁹ s⁻¹',
            hint: `P_th(W) / (3,2×10⁻¹¹ J).`,
            ruleApplied: 'Puissance et taux de réaction',
            mathExpression: `Ṅ = ${P_thMW}×10⁶ / 3,2×10⁻¹¹ = ${fmtP(fissionsPerS / 1e19)}×10¹⁹ s⁻¹`,
            explanation: `Il se produit ${fmtP(fissionsPerS / 1e19)}×10¹⁹ fissions par seconde.`,
          },
          {
            questionPrompt: `Calcule la masse d'uranium 235 consommée en 24 heures (1 jour = 86 400 s, M(²³⁵U) = 235 g/mol, N_A = 6,02×10²³ mol⁻¹, en kg, arrondie à 0,01 kg près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(mU_kgPerDay),
            unit: 'kg/jour',
            hint: `m = (N_jour / N_A) × 0,235 kg.`,
            ruleApplied: 'Consommation massique de combustible',
            mathExpression: `m ≈ ${fmtP(mU_kgPerDay)} kg/jour`,
            explanation: `Seulement ${fmtP(mU_kgPerDay)} kg d'uranium-235 suffit pour alimenter une grande ville pendant 24 h.`,
          },
          {
            questionPrompt: `Calcule la masse totale convertie en énergie pure Δm_jour = E_th,jour / c² en 24 heures (en grammes, avec c = 3,00×10⁸ m/s, arrondie à 0,01 g près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(dmLostPerDayG),
            unit: 'g',
            hint: `(P_th(W) × 86400) / (9×10¹⁶) × 1000.`,
            ruleApplied: 'Conversion masse-énergie macroscopique',
            mathExpression: `Δm_jour ≈ ${fmtP(dmLostPerDayG)} g`,
            explanation: `À peine ${fmtP(dmLostPerDayG)} g de matière disparaît réellement en énergie pure par jour !`,
          },
          {
            questionPrompt: `Dans un réacteur à eau pressurisée, quel est le rôle du modérateur (eau) ?`,
            questionType: 'qcm',
            options: [
              'Ralentir les neutrons rapides issus de la fission pour augmenter la probabilité de fission de ²³⁵U',
              'Accélérer les neutrons à la vitesse de la lumière',
              'Absorber tous les neutrons pour stopper le réacteur',
              'Produire des protons par électrolyse',
            ],
            correctAnswer: 'Ralentir les neutrons rapides issus de la fission pour augmenter la probabilité de fission de ²³⁵U',
            hint: `²³⁵U fissionne beaucoup mieux avec des neutrons thermiques (lents).`,
            ruleApplied: 'Neutronique des réacteurs',
            mathExpression: `Neutrons rapides (~2 MeV) → thermiques (~0,025 eV)`,
            explanation: `Les chocs élastiques sur l'hydrogène de l'eau thermalisent les neutrons (à ne pas confondre avec les barres de contrôle qui absorbent).`,
          },
          {
            questionPrompt: `Calcule l'énergie libérée par la fission complète de 1,0 kg d'uranium 235 (en 10¹³ J, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(((1000 / 235) * 6.02e23 * 3.2e-11) / 1e13),
            unit: '×10¹³ J',
            hint: `(1000 / 235) × 6,02×10²³ × 3,2×10⁻¹¹.`,
            ruleApplied: 'Densité énergétique nucléaire',
            mathExpression: `E(1 kg) ≈ ${fmtP(((1000 / 235) * 6.02e23 * 3.2e-11) / 1e13)}×10¹³ J`,
            explanation: `1 kg de ²³⁵U libère ~8,2×10¹³ J, soit près de 2 millions de fois plus que 1 kg de pétrole !`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Centrale nucléaire (²³⁵U) : bilan de fission, rendement et consommation`,
          `Étude d'un réacteur délivrant P_élec = ${P_elecMW} MW (rendement 30 %) par fission de l'uranium-235.`,
          items
        );
      }

      if (vMod === 1) {
        // Fusion Deutérium-Tritium : ²H + ³H -> ⁴He + ¹n
        // Energies de liaison : El(²H) = 2.22 MeV, El(³H) = 8.48 MeV, El(⁴He) = 28.30 MeV
        const El_D = 2.22;
        const El_T = 8.48;
        const El_He = 28.3;
        const Q = El_He - (El_D + El_T); // 17.60 MeV !
        // Partage énergie cinétique : m(n)=1, m(He)=4 => Ec(n) = (4/5)*Q = 14.08 MeV, Ec(He) = 3.52 MeV !
        const EcN = (4 / 5) * Q;
        const EcHe = (1 / 5) * Q;
        const Q_J = Q * 1.6e-13;
        // 1 mole de mélange (D + T) = 2 + 3 = 5 g => N_A réactions !
        const E1kg = (1000 / 5) * 6.02e23 * Q_J; // ≈ 3.39e14 J/kg !

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `La réaction de fusion thermonucléaire Deutérium-Tritium s'écrit : ²₁H + ³₁H → ⁴₂He + ᴬ_Z X. Quelle est la particule X émise ?`,
            questionType: 'qcm',
            options: ['Un neutron ¹₀n', 'Un proton ¹₁p', 'Un positon ⁰₊₁e', 'Un deutéron ²₁H'],
            correctAnswer: 'Un neutron ¹₀n',
            hint: `A = 5 - 4 = 1 et Z = 2 - 2 = 0.`,
            ruleApplied: 'Lois de conservation de Soddy',
            mathExpression: `²₁H + ³₁H → ⁴₂He + ¹₀n`,
            explanation: `La réaction produit un noyau d'hélium-4 et un neutron rapide.`,
          },
          {
            questionPrompt: `On donne les énergies de liaison : E_l(²H) = 2,22 MeV ; E_l(³H) = 8,48 MeV ; E_l(⁴He) = 28,30 MeV. Calcule l'énergie de liaison par nucléon de l'hélium ⁴He (en MeV/nucléon, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(El_He / 4),
            unit: 'MeV/nucléon',
            hint: `E_l(⁴He) / 4.`,
            ruleApplied: 'Stabilité nucléaire (courbe d’Aston)',
            mathExpression: `E_l / A = 28,30 / 4 = 7,075 ≈ 7,08 MeV/nucléon`,
            explanation: `L'hélium-4 présente un pic remarquable de stabilité à 7,08 MeV/nucléon.`,
          },
          {
            questionPrompt: `Calcule la somme des énergies de liaison des réactifs E_l(²H) + E_l(³H) (en MeV).`,
            questionType: 'numeric',
            correctAnswer: fmtP(El_D + El_T),
            unit: 'MeV',
            hint: `2,22 + 8,48.`,
            ruleApplied: 'Bilan énergétique par énergies de liaison',
            mathExpression: `E_l(réactifs) = 2,22 + 8,48 = 10,70 MeV`,
            explanation: `E_l(réactifs) = 10,70 MeV.`,
          },
          {
            questionPrompt: `En utilisant Q = ∑ E_l(produits) - ∑ E_l(réactifs) (le neutron libre ayant E_l = 0), calcule l'énergie libérée Q par fusion D-T (en MeV).`,
            questionType: 'numeric',
            correctAnswer: fmtP(Q),
            unit: 'MeV',
            hint: `28,30 - 10,70.`,
            ruleApplied: 'Énergie libérée à partir des énergies de liaison',
            mathExpression: `Q = 28,30 - 10,70 = 17,60 MeV`,
            explanation: `Chaque fusion D-T libère 17,60 MeV (sans produire de déchets radioactifs à vie longue).`,
          },
          {
            questionPrompt: `Attention au signe : quel serait ΔE = E_l(réactifs) - E_l(produits) du système (variation d'énergie interne du système nucléaire) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(-Q),
            unit: 'MeV',
            hint: `Le système cède de l'énergie au milieu extérieur donc ΔE < 0.`,
            ruleApplied: 'Convention thermodynamique ΔE = -Q_cédée',
            mathExpression: `ΔE = -17,60 MeV`,
            explanation: `ΔE < 0 confirme une réaction exoénergétique.`,
          },
          {
            questionPrompt: `Les réactifs étant pratiquement au repos avant fusion, quelle fraction de Q emporte le neutron rapide (m_n ≈ 1 u, m_He ≈ 4 u) en % ?`,
            questionType: 'numeric',
            correctAnswer: '80',
            hint: `m_He / (m_He + m_n) = 4 / 5.`,
            ruleApplied: 'Partage d’énergie cinétique par impulsion',
            mathExpression: `E_c(n) / Q = 4 / (4 + 1) = 80 %`,
            explanation: `Le neutron, 4 fois plus léger que le noyau d'hélium, emporte 80 % de l'énergie.`,
          },
          {
            questionPrompt: `Calcule l'énergie cinétique E_c(n) du neutron produit (en MeV, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EcN),
            unit: 'MeV',
            hint: `0,80 × 17,60.`,
            ruleApplied: 'Neutrons de 14 MeV',
            mathExpression: `E_c(n) = 0,8 × 17,60 = 14,08 MeV`,
            explanation: `C'est pourquoi les réacteurs de fusion (ITER) produisent des neutrons de 14,1 MeV captés dans la couverture tritigène.`,
          },
          {
            questionPrompt: `Calcule l'énergie cinétique E_c(⁴He) du noyau d'hélium (en MeV, arrondie à 0,01).`,
            questionType: 'numeric',
            correctAnswer: fmtP(EcHe),
            unit: 'MeV',
            hint: `0,20 × 17,60.`,
            ruleApplied: 'Énergie de chauffage du plasma par les noyaux α',
            mathExpression: `E_c(⁴He) = 3,52 MeV`,
            explanation: `Confinés par le champ magnétique du tokamak, les noyaux α de 3,52 MeV entretiennent la température du plasma.`,
          },
          {
            questionPrompt: `Calcule l'énergie libérée par la fusion complète de 1,0 kg de mélange stœchiométrique (D + T) (M_mélange = 5 g par mole de paires D-T, en 10¹⁴ J, arrondie à 0,01 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(E1kg / 1e14),
            unit: '×10¹⁴ J',
            hint: `(1000 / 5) × 6,02×10²³ × (17,6×1,6×10⁻¹³).`,
            ruleApplied: 'Énergie spécifique de fusion',
            mathExpression: `E(1 kg) ≈ ${fmtP(E1kg / 1e14)}×10¹⁴ J/kg`,
            explanation: `À masse égale de combustible, la fusion D-T libère environ 4 fois plus d'énergie que la fission de ²³⁵U !`,
          },
          {
            questionPrompt: `Pourquoi la fusion nécessite-t-elle des températures supérieures à 100 millions de kelvins ?`,
            questionType: 'qcm',
            options: [
              'Pour vaincre la répulsion électrostatique coulombienne entre les noyaux D⁺ et T⁺ chargés positivement',
              'Pour ioniser les neutrons',
              'Parce que les noyaux d’hélium gèlent en dessous',
              'Pour annuler la constante de Planck',
            ],
            correctAnswer: 'Pour vaincre la répulsion électrostatique coulombienne entre les noyaux D⁺ et T⁺ chargés positivement',
            hint: `L'interaction forte n'agit qu'à très courte portée (~10⁻¹⁵ m).`,
            ruleApplied: 'Barrière coulombienne',
            mathExpression: `E_c ~ k_B T > E_coulomb`,
            explanation: `Il faut une agitation thermique extrême pour que les noyaux s'approchent à portée de l'interaction nucléaire forte.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Fusion thermonucléaire D-T : courbe d'Aston, bilan E_l et neutrons à 14 MeV`,
          `Étude complète de la réaction de fusion ²₁H + ³₁H → ⁴₂He + ¹₀n.`,
          items
        );
      }

      // vMod === 2: Défaut de masse & stabilité comparée (⁵⁶Fe vs ²³⁸U)
      const mp = 1.00728;
      const mn = 1.00866;
      const mFe = 55.9206; // noyau Fe-56 (Z=26, N=30)
      const dmFe = 26 * mp + 30 * mn - mFe;
      const ElFe = dmFe * 931.5;
      const ElPerA_Fe = ElFe / 56;
      const mU = 238.0003; // noyau U-238 (Z=92, N=146)
      const dmU = 92 * mp + 146 * mn - mU;
      const ElU = dmU * 931.5;
      const ElPerA_U = ElU / 238;

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On étudie le noyau de fer ⁵⁶₂₆Fe (le plus stable de la nature). Combien de neutrons N contient-il ?`,
          questionType: 'numeric',
          correctAnswer: '30',
          hint: `N = A - Z.`,
          ruleApplied: 'Composition d’un noyau',
          mathExpression: `N = 56 - 26 = 30 neutrons`,
          explanation: `26 protons et 30 neutrons.`,
        },
        {
          questionPrompt: `Calcule le défaut de masse Δm(⁵⁶Fe) = 26 m_p + 30 m_n - m(⁵⁶Fe) (avec m_p = 1,00728 u, m_n = 1,00866 u, m(⁵⁶Fe) = 55,9206 u ; arrondi à 0,001 u près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(dmFe, 3),
          unit: 'u',
          hint: `Somme des masses des nucléons séparés moins masse du noyau.`,
          ruleApplied: 'Défaut de masse d’un noyau',
          mathExpression: `Δm = ${fmtP(26 * mp + 30 * mn, 4)} - 55,9206 ≈ ${fmtP(dmFe, 3)} u`,
          explanation: `Δm ≈ ${fmtP(dmFe, 3)} u.`,
        },
        {
          questionPrompt: `Calcule l'énergie de liaison E_l(⁵⁶Fe) = Δm · 931,5 (en MeV, arrondie à 0,1 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(ElFe, 1),
          unit: 'MeV',
          hint: `${fmtP(dmFe, 4)} × 931,5.`,
          ruleApplied: 'Énergie de liaison',
          mathExpression: `E_l(⁵⁶Fe) ≈ ${fmtP(ElFe, 1)} MeV`,
          explanation: `Il faudrait fournir ${fmtP(ElFe, 1)} MeV pour dissocier le noyau en 56 nucléons libres.`,
        },
        {
          questionPrompt: `Calcule l'énergie de liaison par nucléon E_l / A du fer-56 (en MeV/nucléon, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(ElPerA_Fe),
          unit: 'MeV/nucléon',
          hint: `E_l / 56.`,
          ruleApplied: 'Critère de stabilité nucléaire',
          mathExpression: `E_l / A ≈ ${fmtP(ElPerA_Fe)} MeV/nucléon`,
          explanation: `C'est le maximum de la courbe d'Aston (~8,8 MeV/nucléon).`,
        },
        {
          questionPrompt: `Calcule maintenant le défaut de masse Δm(²³⁸₉₂U) (avec N = 146 et m(²³⁸U) = 238,0003 u ; arrondi à 0,001 u près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(dmU, 3),
          unit: 'u',
          hint: `92×1,00728 + 146×1,00866 - 238,0003.`,
          ruleApplied: 'Défaut de masse d’un noyau lourd',
          mathExpression: `Δm(²³⁸U) ≈ ${fmtP(dmU, 3)} u`,
          explanation: `Δm ≈ ${fmtP(dmU, 3)} u.`,
        },
        {
          questionPrompt: `Calcule l'énergie de liaison totale E_l(²³⁸U) (en MeV, arrondie à 1 MeV près).`,
          questionType: 'numeric',
          correctAnswer: String(Math.round(ElU)),
          unit: 'MeV',
          hint: `${fmtP(dmU, 4)} × 931,5.`,
          ruleApplied: 'Énergie de liaison totale',
          mathExpression: `E_l(²³⁸U) ≈ ${Math.round(ElU)} MeV`,
          explanation: `E_l(²³⁸U) ≈ ${Math.round(ElU)} MeV.`,
        },
        {
          questionPrompt: `Calcule l'énergie de liaison par nucléon E_l / A de l'uranium-238 (en MeV/nucléon, arrondie à 0,01 près).`,
          questionType: 'numeric',
          correctAnswer: fmtP(ElPerA_U),
          unit: 'MeV/nucléon',
          hint: `E_l / 238.`,
          ruleApplied: 'Comparaison sur la courbe d’Aston',
          mathExpression: `E_l / A ≈ ${fmtP(ElPerA_U)} MeV/nucléon`,
          explanation: `Elle vaut ~7,57 MeV/nucléon, soit nettement moins que les noyaux de masse moyenne.`,
        },
        {
          questionPrompt: `Quel est l'écart Δ(E_l/A) entre ⁵⁶Fe et ²³⁸U (en MeV/nucléon, arrondi à 0,01 près) ?`,
          questionType: 'numeric',
          correctAnswer: fmtP(ElPerA_Fe - ElPerA_U),
          unit: 'MeV/nucléon',
          hint: `${fmtP(ElPerA_Fe)} - ${fmtP(ElPerA_U)}.`,
          ruleApplied: 'Potentiel énergétique de fission',
          mathExpression: `Δ(E_l/A) ≈ ${fmtP(ElPerA_Fe - ElPerA_U)} MeV/nucléon`,
          explanation: `Passer d'un noyau lourd (~7,6 MeV/nucl.) à deux fragments moyens (~8,5 MeV/nucl.) libère ~0,9 MeV par nucléon, soit ~200 MeV au total !`,
        },
        {
          questionPrompt: `Sur la courbe d'Aston (-E_l/A en fonction de A), où se situent les noyaux les plus stables ?`,
          questionType: 'qcm',
          options: [
            'Au fond de la cuvette (autour de A = 50 à 60, comme ⁵⁶Fe et ⁶²Ni)',
            'Tout à gauche (A < 10)',
            'Tout à droite (A > 230)',
            'Uniquement aux nombres impairs',
          ],
          correctAnswer: 'Au fond de la cuvette (autour de A = 50 à 60, comme ⁵⁶Fe et ⁶²Ni)',
          hint: `E_l/A est maximal (donc -E_l/A est minimal) autour du fer et du nickel.`,
          ruleApplied: 'Lecture de la courbe d’Aston',
          mathExpression: `max(E_l/A) ≈ 8,8 MeV pour A ≈ 56..62`,
          explanation: `C'est pourquoi les noyaux légers gagnent en stabilité par fusion et les noyaux lourds par fission.`,
        },
        {
          questionPrompt: `Estime l'énergie libérée si 240 nucléons passent en moyenne de 7,6 MeV/nucléon à 8,5 MeV/nucléon (en MeV).`,
          questionType: 'numeric',
          correctAnswer: '216',
          unit: 'MeV',
          hint: `240 × (8,5 - 7,6).`,
          ruleApplied: 'Estimation rapide par la courbe d’Aston',
          mathExpression: `240 × 0,9 = 216 MeV`,
          explanation: `On retrouve l'ordre de grandeur exact (~200 MeV) d'une fission !`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Courbe d'Aston, défaut de masse et stabilité comparée ⁵⁶Fe vs ²³⁸U`,
        `Analyse comparative des énergies de cohésion de ⁵⁶₂₆Fe (m = 55,9206 u) et ²³⁸₉₂U (m = 238,0003 u).`,
        items
      );
    }

    // -------------------------------------------------------------------------
    // 11. CINÉTIQUE CHIMIQUE & SUIVI TEMPOREL
    // -------------------------------------------------------------------------
    case 'physTc-cinetique-chimique': {
      if (vMod === 0) {
        // Réaction S2O8^2- + 2 I- -> 2 SO4^2- + I2 (suivi par titrage de I2)
        const c1 = pickRandom([0.1, 0.2]); // mol/L S2O8^2-
        const V1 = 50; // mL = 0.05 L
        const c2 = 0.2; // mol/L I-
        const V2 = 50; // mL
        const n1_mmol = c1 * V1; // 5 ou 10 mmol
        const n2_mmol = c2 * V2; // 10 mmol
        // Stœchiométrie 1 : 2 -> x_max = min(n1, n2/2) = min(5 ou 10, 5) = 5 mmol exact !
        const xMaxMmol = 5;
        const VtotL = 0.1; // 100 mL
        const cI2_max = xMaxMmol / 100; // 0.05 mol/L = 50 mmol/L
        // À t = 10 min, un prélèvement de V_p = 10 mL (1/10 du mélange) nécessite V_eq = 5.0 mL de thiosulfate à c_th = 0.10 mol/L (I2 + 2 S2O3^2- -> 2I- + S4O6^2-)
        // n(I2)_p = (0.10 * 5.0)/2 = 0.25 mmol => dans 100 mL : x(10 min) = 2.5 mmol = x_max / 2 !
        // Donc t_{1/2} = 10 min !
        const nI2_prelev_mmol = 0.25;
        const x10_mmol = 2.5;
        const nI_rest_mmol = n2_mmol - 2 * x10_mmol;
        const vMoy10 = (x10_mmol / 100) / 10; // mol/(L·min) = 0.0025 mol/(L·min) = 2.5 mmol/(L·min)

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `On mélange V₁ = 50 mL de peroxodisulfate K₂S₂O₈ (C₁ = ${c1} mol/L) et V₂ = 50 mL d'iodure de potassium KI (C₂ = 0,20 mol/L) : S₂O₈²⁻ + 2 I⁻ → 2 SO₄²⁻ + I₂. Calcule la quantité initiale n₁(S₂O₈²⁻) (en mmol).`,
            questionType: 'numeric',
            correctAnswer: fmtP(n1_mmol),
            unit: 'mmol',
            hint: `C₁ × V₁(mL).`,
            ruleApplied: 'Quantité de matière initiale',
            mathExpression: `n₁ = ${c1} × 50 = ${fmtP(n1_mmol)} mmol`,
            explanation: `n₁ = ${fmtP(n1_mmol)} mmol (et n₂(I⁻) = 0,20 × 50 = 10 mmol).`,
          },
          {
            questionPrompt: `Calcule l'avancement maximal x_max de la réaction (en mmol).`,
            questionType: 'numeric',
            correctAnswer: String(xMaxMmol),
            unit: 'mmol',
            hint: `Compare n₁/1 et n₂/2 = 10/2 = 5 mmol.`,
            ruleApplied: 'Réactif limitant et tableau d’avancement',
            mathExpression: `x_max = min(${fmtP(n1_mmol)} ; 10/2) = 5 mmol`,
            explanation: `x_max = 5,0 mmol (${c1 === 0.1 ? 'mélange stœchiométrique' : 'I⁻ est limitant'}).`,
          },
          {
            questionPrompt: `Calcule la concentration finale maximale [I₂]_∞ attendue dans le mélange total de 100 mL (en mmol/L).`,
            questionType: 'numeric',
            correctAnswer: '50',
            unit: 'mmol/L',
            hint: `x_max(mmol) / V_total(L).`,
            ruleApplied: 'Concentration finale',
            mathExpression: `[I₂]_∞ = 5,0 mmol / 0,100 L = 50 mmol/L`,
            explanation: `[I₂]_∞ = 50 mmol/L = 0,050 mol/L.`,
          },
          {
            questionPrompt: `À t = 10 min, on prélève V_p = 10 mL du mélange, on le trempe dans l'eau glacée et on dose I₂ par du thiosulfate S₂O₃²⁻ (C_th = 0,10 mol/L) : I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻. Pourquoi trempe-t-on le prélèvement dans l'eau glacée ?`,
            questionType: 'qcm',
            options: [
              'Pour bloquer brutalement la réaction (dilution + refroidissement = trempe chimique)',
              'Pour accélérer la formation de I₂',
              'Pour précipiter le potassium',
              'Pour augmenter la constante d’équilibre',
            ],
            correctAnswer: 'Pour bloquer brutalement la réaction (dilution + refroidissement = trempe chimique)',
            hint: `Température et concentration sont deux facteurs cinétiques.`,
            ruleApplied: 'Principe de la trempe cinétique',
            mathExpression: `T ↓ et [réactifs] ↓ ⇒ v → 0`,
            explanation: `La trempe fige l'avancement à l'instant exact du prélèvement.`,
          },
          {
            questionPrompt: `L'équivalence du dosage des 10 mL est atteinte pour V_eq = 5,0 mL de thiosulfate à 0,10 mol/L. Calcule la quantité n(I₂)_p dans le prélèvement de 10 mL (en mmol).`,
            questionType: 'numeric',
            correctAnswer: fmtP(nI2_prelev_mmol),
            unit: 'mmol',
            hint: `n(I₂)_p = ½ C_th V_eq.`,
            ruleApplied: 'Relation d’équivalence iodométrique',
            mathExpression: `n(I₂)_p = (0,10 × 5,0) / 2 = 0,25 mmol`,
            explanation: `Le prélèvement de 10 mL contient 0,25 mmol de diiode.`,
          },
          {
            questionPrompt: `Déduis-en l'avancement x(10 min) dans tout le milieu réactionnel de 100 mL (en mmol).`,
            questionType: 'numeric',
            correctAnswer: fmtP(x10_mmol),
            unit: 'mmol',
            hint: `Multiplie par V_tot / V_p = 10.`,
            ruleApplied: 'Facteur d’échelle du prélèvement',
            mathExpression: `x(10 min) = 10 × 0,25 = 2,5 mmol`,
            explanation: `x(10 min) = 2,5 mmol.`,
          },
          {
            questionPrompt: `Combien reste-t-il alors d'ions iodure I⁻ à t = 10 min dans le bécher de 100 mL (en mmol) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(nI_rest_mmol),
            unit: 'mmol',
            hint: `n₂ - 2·x(10 min).`,
            ruleApplied: 'Bilan de matière en cours de réaction',
            mathExpression: `n(I⁻) = 10 - 2×2,5 = 5,0 mmol`,
            explanation: `Il reste 5,0 mmol d'ions iodure.`,
          },
          {
            questionPrompt: `Quel est le temps de demi-réaction t_{1/2} de cette expérience (en min) ?`,
            questionType: 'numeric',
            correctAnswer: '10',
            unit: 'min',
            hint: `Compare x(10 min) = 2,5 mmol et x_max = 5,0 mmol.`,
            ruleApplied: 'Définition du temps de demi-réaction',
            mathExpression: `x(10 min) = x_max / 2 ⇒ t_{1/2} = 10 min`,
            explanation: `t_{1/2} = 10 min.`,
          },
          {
            questionPrompt: `Calcule la vitesse volumique moyenne de réaction entre t = 0 et t = 10 min (en mmol·L⁻¹·min⁻¹).`,
            questionType: 'numeric',
            correctAnswer: fmtP(vMoy10 * 1000),
            unit: 'mmol/(L·min)',
            hint: `(x(10) - 0) / (V_tot · Δt).`,
            ruleApplied: 'Vitesse volumique moyenne',
            mathExpression: `v_moy = 2,5 / (0,1 × 10) = 2,5 mmol/(L·min)`,
            explanation: `v_moy = 2,5 mmol·L⁻¹·min⁻¹.`,
          },
          {
            questionPrompt: `Comment évolue la vitesse volumique instantanée v(t) = (1/V)(dx/dt) au cours du temps (à température constante) et pourquoi ?`,
            questionType: 'qcm',
            options: [
              'Elle diminue au cours du temps car les concentrations des réactifs diminuent',
              'Elle augmente exponentiellement',
              'Elle reste strictement constante jusqu’à x_max',
              'Elle s’annule à t = t_{1/2}',
            ],
            correctAnswer: 'Elle diminue au cours du temps car les concentrations des réactifs diminuent',
            hint: `Moins de chocs efficaces par unité de temps quand les réactifs se consomment.`,
            ruleApplied: 'Évolution cinétique temporelle',
            mathExpression: `[réactifs] ↓ ⇒ v(t) ↓`,
            explanation: `La pente de x(t) diminue progressivement jusqu'à devenir horizontale quand x = x_max.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Cinétique par titrage iodométrique, trempe et t_{1/2}`,
          `Suivi cinétique de S₂O₈²⁻ + 2 I⁻ → 2 SO₄²⁻ + I₂ par prélèvements trempés et dosés au thiosulfate.`,
          items
        );
      }

      if (vMod === 1) {
        // Loi cinétique d'ordre 1 : dismutation de H2O2 (C0, k, t1/2)
        const c0 = pickRandom([0.4, 0.8]); // mol/L
        const tHalfMin = pickRandom([10, 20]); // min
        const kMin = Math.LN2 / tHalfMin;
        const cAt1Half = c0 / 2;
        const cAt2Half = c0 / 4;
        const v0 = kMin * c0; // mol/(L·min)
        const t90Min = tHalfMin * Math.log2(10); // pour consommer 90% => il reste 10% !

        const items: HardQuestionSpec[] = [
          {
            questionPrompt: `La dismutation de l'eau oxygénée (2 H₂O₂ → 2 H₂O + O₂) suit une cinétique d'ordre 1 : v = k·[H₂O₂] avec [H₂O₂]₀ = ${c0} mol/L et t_{1/2} = ${tHalfMin} min. Calcule la constante de vitesse k (en min⁻¹, arrondie à 0,001 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(kMin, 3),
            unit: 'min⁻¹',
            hint: `Pour un ordre 1, t_{1/2} = ln(2) / k.`,
            ruleApplied: 'Loi cinétique d’ordre 1',
            mathExpression: `k = ln(2) / ${tHalfMin} ≈ ${fmtP(kMin, 3)} min⁻¹`,
            explanation: `k ≈ ${fmtP(kMin, 3)} min⁻¹ (indépendant de [H₂O₂]₀ pour l'ordre 1).`,
          },
          {
            questionPrompt: `Quelle est la relation linéaire permettant de vérifier graphiquement l'ordre 1 ?`,
            questionType: 'qcm',
            options: [
              'ln([H₂O₂]₀ / [H₂O₂]) = k · t (droite passant par l’origine)',
              '1 / [H₂O₂] = k · t',
              '[H₂O₂] = [H₂O₂]₀ - k · t',
              '[H₂O₂]² = k · t',
            ],
            correctAnswer: 'ln([H₂O₂]₀ / [H₂O₂]) = k · t (droite passant par l’origine)',
            hint: `Intégration de -dC/dt = k C.`,
            ruleApplied: 'Loi intégrée d’ordre 1',
            mathExpression: `ln(C₀/C(t)) = k t`,
            explanation: `Le tracé de ln(C₀/C) en fonction de t est une droite de pente k.`,
          },
          {
            questionPrompt: `Calcule la vitesse volumique initiale v₀ = k·[H₂O₂]₀ de disparition de H₂O₂ (en mmol·L⁻¹·min⁻¹, arrondie à 0,1 près).`,
            questionType: 'numeric',
            correctAnswer: fmtP(v0 * 1000, 1),
            unit: 'mmol/(L·min)',
            hint: `k × ${c0} × 1000.`,
            ruleApplied: 'Loi de vitesse à t = 0',
            mathExpression: `v₀ = ${fmtP(kMin, 4)} × ${c0} × 1000 ≈ ${fmtP(v0 * 1000, 1)} mmol/(L·min)`,
            explanation: `v₀ ≈ ${fmtP(v0 * 1000, 1)} mmol/(L·min).`,
          },
          {
            questionPrompt: `Calcule la concentration restante [H₂O₂] après ${tHalfMin} min (en mol/L).`,
            questionType: 'numeric',
            correctAnswer: fmtP(cAt1Half),
            unit: 'mol/L',
            hint: `Divise par 2.`,
            ruleApplied: 'Demi-réaction',
            mathExpression: `C(t_{1/2}) = ${c0}/2 = ${fmtP(cAt1Half)} mol/L`,
            explanation: `Il reste ${fmtP(cAt1Half)} mol/L.`,
          },
          {
            questionPrompt: `Calcule [H₂O₂] après ${2 * tHalfMin} min (en mol/L).`,
            questionType: 'numeric',
            correctAnswer: fmtP(cAt2Half),
            unit: 'mol/L',
            hint: `2 demi-vies ⇒ C₀ / 4.`,
            ruleApplied: 'Décroissance exponentielle',
            mathExpression: `C(2 t_{1/2}) = ${c0}/4 = ${fmtP(cAt2Half)} mol/L`,
            explanation: `C = ${fmtP(cAt2Half)} mol/L.`,
          },
          {
            questionPrompt: `Au bout de combien de minutes 90 % de H₂O₂ aura-t-il été consommé (soit [H₂O₂] = 0,10·[H₂O₂]₀) ? (arrondi à 0,1 min près)`,
            questionType: 'numeric',
            correctAnswer: fmtP(t90Min, 1),
            unit: 'min',
            hint: `t₉₀% = ln(10) / k = t_{1/2} · ln(10)/ln(2).`,
            ruleApplied: 'Calcul de durée d’avancement',
            mathExpression: `t₉₀% = ${tHalfMin} × 3,322 ≈ ${fmtP(t90Min, 1)} min`,
            explanation: `Il faut environ ${fmtP(t90Min, 1)} min (≈ 3,32 demi-vies).`,
          },
          {
            questionPrompt: `Dans V = 1,0 L de cette solution, quelle quantité maximale de dioxygène O₂ gazeux se dégage au total (en mol) ?`,
            questionType: 'numeric',
            correctAnswer: fmtP(c0 / 2),
            unit: 'mol',
            hint: `2 H₂O₂ → O₂ : 2 moles d'eau oxygénée donnent 1 mole de O₂.`,
            ruleApplied: 'Stœchiométrie de dismutation',
            mathExpression: `n_max(O₂) = n₀(H₂O₂) / 2 = ${c0}/2 = ${fmtP(c0 / 2)} mol`,
            explanation: `On recueille ${fmtP(c0 / 2)} mol de O₂.`,
          },
          {
            questionPrompt: `Calcule le volume maximal de O₂ dégagé dans des conditions où V_m = 24 L/mol (en L).`,
            questionType: 'numeric',
            correctAnswer: fmtP((c0 / 2) * 24),
            unit: 'L',
            hint: `n(O₂) × 24.`,
            ruleApplied: 'Volume molaire des gaz',
            mathExpression: `V(O₂) = ${fmtP(c0 / 2)} × 24 = ${fmtP((c0 / 2) * 24)} L`,
            explanation: `V(O₂) = ${fmtP((c0 / 2) * 24)} L (c'est le titre « en volumes » de l'eau oxygénée).`,
          },
          {
            questionPrompt: `Si l'on ajoute quelques gouttes d'ions Fe³⁺ (catalyseur homogène), comment évoluent t_{1/2} et l'avancement final x_max ?`,
            questionType: 'qcm',
            options: [
              't_{1/2} diminue fortement, tandis que x_max reste strictement inchangé',
              't_{1/2} diminue et x_max augmente',
              't_{1/2} augmente',
              'Le catalyseur est consommé à la fin',
            ],
            correctAnswer: 't_{1/2} diminue fortement, tandis que x_max reste strictement inchangé',
            hint: `Un catalyseur abaisse l'énergie d'activation sans modifier la thermodynamique finale.`,
            ruleApplied: 'Propriétés d’un catalyseur',
            mathExpression: `k ↑ ⇒ t_{1/2} ↓, mais x_max = constante`,
            explanation: `Le catalyseur accélère la réaction mais ne déplace pas son bilan final.`,
          },
          {
            questionPrompt: `Si l'on divisait la concentration initiale [H₂O₂]₀ par 2, que deviendrait le temps de demi-réaction t_{1/2} pour cette cinétique d'ordre 1 ?`,
            questionType: 'numeric',
            correctAnswer: String(tHalfMin),
            unit: 'min',
            hint: `t_{1/2} = ln(2)/k dépend-il de C₀ ?`,
            ruleApplied: 'Caractéristique spécifique de l’ordre 1',
            mathExpression: `t_{1/2} = ${tHalfMin} min (inchangé)`,
            explanation: `Seul l'ordre 1 possède un temps de demi-réaction indépendant de la concentration initiale.`,
          },
        ];

        return assembleHardPhysExercise(
          chapterId,
          difficulty,
          `Cinétique d'ordre 1 (H₂O₂) : k, linéarisation ln(C₀/C) et catalyse`,
          `Dismutation d'ordre 1 de l'eau oxygénée ([H₂O₂]₀ = ${c0} mol/L, t_{1/2} = ${tHalfMin} min).`,
          items
        );
      }

      // vMod === 2: Suivi conductimétrique (hydrolyse alcaline ou saponification CH3COOC2H5 + OH- -> CH3COO- + C2H5OH)
      // C0 = 10 mmol/L (OH- + ester en quantités stœchiométriques), V = 100 mL
      // lambda(OH-) = 20 mS·m²/mol, lambda(Na+) = 5 mS·m²/mol, lambda(CH3COO-) = 4 mS·m²/mol
      // sigma_0 = (lambda_Na + lambda_OH) * C0 = (5 + 20) * 10 = 250 mS/m !
      // sigma_inf = (lambda_Na + lambda_Ac) * C0 = (5 + 4) * 10 = 90 mS/m !
      const C0molM3 = 10; // 10 mmol/L = 10 mol/m^3 !
      const sigma0 = 250; // mS/m
      const sigmaInf = 90; // mS/m
      const deltaSigma = sigma0 - sigmaInf; // 160 mS/m
      const sigmaHalf = (sigma0 + sigmaInf) / 2; // 170 mS/m
      const tHalfS = pickRandom([120, 180]); // s
      const sigmaTest = 210; // mS/m -> avancement = (250 - 210)/160 = 40/160 = 0.25 !

      const items: HardQuestionSpec[] = [
        {
          questionPrompt: `On réalise la saponification de l'éthanoate d'éthyle par la soude (Na⁺ + OH⁻) en quantités stœchiométriques à C₀ = 10 mmol/L (= 10 mol/m³) dans V = 100 mL : Ester + OH⁻ → CH₃COO⁻ + Alcool. On donne λ(OH⁻) = 20, λ(Na⁺) = 5 et λ(CH₃COO⁻) = 4 mS·m²/mol. Calcule la conductivité initiale σ₀ à t = 0 (en mS/m).`,
          questionType: 'numeric',
          correctAnswer: String(sigma0),
          unit: 'mS/m',
          hint: `σ₀ = (λ(Na⁺) + λ(OH⁻)) · C₀ (avec C₀ en mol/m³ !).`,
          ruleApplied: 'Loi de Kohlrausch à t = 0',
          mathExpression: `σ₀ = (5 + 20) × 10 = 250 mS/m`,
          explanation: `σ₀ = 250 mS/m.`,
        },
        {
          questionPrompt: `Calcule la conductivité finale σ_∞ lorsque la réaction totale est achevée (en mS/m).`,
          questionType: 'numeric',
          correctAnswer: String(sigmaInf),
          unit: 'mS/m',
          hint: `Les ions OH⁻ ont été entièrement remplacés par CH₃COO⁻.`,
          ruleApplied: 'Loi de Kohlrausch en fin de réaction',
          mathExpression: `σ_∞ = (5 + 4) × 10 = 90 mS/m`,
          explanation: `σ_∞ = 90 mS/m.`,
        },
        {
          questionPrompt: `Pourquoi la conductivité σ(t) décroît-elle au cours du temps ?`,
          questionType: 'qcm',
          options: [
            `Des ions OH⁻ très conducteurs (λ = 20) sont remplacés mole à mole par des ions CH₃COO⁻ moins conducteurs (λ = 4)`,
            `Les ions Na⁺ sont consommés`,
            `Le volume double au cours de la réaction`,
            `La réaction consomme des électrons`,
          ],
          correctAnswer: `Des ions OH⁻ très conducteurs (λ = 20) sont remplacés mole à mole par des ions CH₃COO⁻ moins conducteurs (λ = 4)`,
          hint: `Compare λ(OH⁻) et λ(CH₃COO⁻).`,
          ruleApplied: 'Interprétation ionique de σ(t)',
          mathExpression: `λ(CH₃COO⁻) - λ(OH⁻) = -16 mS·m²/mol < 0`,
          explanation: `Les ions Na⁺ sont spectateurs et leur concentration reste constante.`,
        },
        {
          questionPrompt: `Quelle relation affine exprime x(t) / x_max (taux d'avancement τ(t)) en fonction de σ(t), σ₀ et σ_∞ ?`,
          questionType: 'qcm',
          options: [
            `x(t) / x_max = (σ₀ - σ(t)) / (σ₀ - σ_∞)`,
            `x(t) / x_max = σ(t) / σ₀`,
            `x(t) / x_max = (σ(t) - σ_∞) / (σ₀ - σ_∞)`,
            `x(t) / x_max = σ_∞ / σ(t)`,
          ],
          correctAnswer: `x(t) / x_max = (σ₀ - σ(t)) / (σ₀ - σ_∞)`,
          hint: `σ(t) = σ₀ + (λ_{Ac} - λ_{OH}) · x(t)/V.`,
          ruleApplied: 'Relation linéaire x(t) - σ(t)',
          mathExpression: `σ(t) - σ₀ = (σ_∞ - σ₀) · (x(t)/x_max)`,
          explanation: `À t = 0, σ = σ₀ ⇒ x = 0 ; à t → ∞, σ = σ_∞ ⇒ x = x_max.`,
        },
        {
          questionPrompt: `Quelle valeur prend la conductivité σ(t_{1/2}) exactement au temps de demi-réaction (en mS/m) ?`,
          questionType: 'numeric',
          correctAnswer: String(sigmaHalf),
          unit: 'mS/m',
          hint: `Moyenne arithmétique (σ₀ + σ_∞) / 2.`,
          ruleApplied: 'Conductivité à demi-avancement',
          mathExpression: `σ(t_{1/2}) = (250 + 90) / 2 = 170 mS/m`,
          explanation: `σ(t_{1/2}) = 170 mS/m.`,
        },
        {
          questionPrompt: `À un instant t₁, on mesure σ(t₁) = 210 mS/m. Quel est le taux d'avancement x(t₁)/x_max en % ?`,
          questionType: 'numeric',
          correctAnswer: '25',
          unit: '%',
          hint: `(250 - 210) / (250 - 90) × 100.`,
          ruleApplied: 'Calcul d’avancement par conductimétrie',
          mathExpression: `(40 / 160) × 100 = 25 %`,
          explanation: `25 % de la réaction a été accomplie à t₁.`,
        },
        {
          questionPrompt: `Calcule la quantité de matière d'ions éthanoate CH₃COO⁻ déjà formée dans V = 100 mL à cet instant t₁ (en mmol).`,
          questionType: 'numeric',
          correctAnswer: '0.25',
          unit: 'mmol',
          hint: `x_max = 10 mmol/L × 0,100 L = 1,0 mmol.`,
          ruleApplied: 'Bilan molaire instantané',
          mathExpression: `x(t₁) = 0,25 × 1,0 = 0,25 mmol`,
          explanation: `x(t₁) = 0,25 mmol.`,
        },
        {
          questionPrompt: `La tangente à la courbe σ(t) à t = 0 a pour pente (dσ/dt)₀ = -2,0 mS/(m·s). Calcule la vitesse volumique initiale v₀ = -(1 / Δσ)·(dσ/dt)₀ · C₀ (en mmol·L⁻¹·s⁻¹, arrondie à 0,001).`,
          questionType: 'numeric',
          correctAnswer: fmtP((2.0 / 160) * 10, 3),
          unit: 'mmol/(L·s)',
          hint: `v(t) = (1/V)(dx/dt) = [C₀ / (σ₀ - σ_∞)] · (-dσ/dt).`,
          ruleApplied: 'Vitesse volumique par dérivation conductimétrique',
          mathExpression: `v₀ = (10 / 160) × 2,0 = 0,125 mmol/(L·s)`,
          explanation: `v₀ = 0,125 mmol·L⁻¹·s⁻¹.`,
        },
        {
          questionPrompt: `Pourquoi la vitesse v(t) s'annule-t-elle asymptotiquement alors que la température reste constante à 25 °C ?`,
          questionType: 'qcm',
          options: [
            `Par épuisement progressif des deux réactifs (ester et OH⁻)`,
            `Parce que les ions Na⁺ bloquent la sonde`,
            `Parce que λ(OH⁻) devient nul`,
            `Parce que la réaction devient endothermique`,
          ],
          correctAnswer: `Par épuisement progressif des deux réactifs (ester et OH⁻)`,
          hint: `v = k [Ester][OH⁻].`,
          ruleApplied: 'Facteur concentration',
          mathExpression: `[OH⁻] → 0 ⇒ v(t) → 0`,
          explanation: `La réaction d'ordre global 2 ralentit à mesure que les deux réactifs se consomment.`,
        },
        {
          questionPrompt: `Si l'on élève la température du thermostat de 25 °C à 50 °C, comment varie la valeur finale σ_∞ (à λ constants) ?`,
          questionType: 'numeric',
          correctAnswer: '90',
          unit: 'mS/m',
          hint: `Une hausse de température augmente la vitesse (t_{1/2} diminue), mais pas la stœchiométrie finale totale.`,
          ruleApplied: 'Cinétique vs bilan final',
          mathExpression: `σ_∞ = 90 mS/m`,
          explanation: `À même composition finale, l'état final reste à 90 mS/m (à coefficient thermique de λ près).`,
        },
      ];

      return assembleHardPhysExercise(
        chapterId,
        difficulty,
        `Suivi conductimétrique d'une saponification : Kohlrausch, t_{1/2} et vitesse`,
        `Hydrolyse basique d'un ester (C₀ = 10 mmol/L, V = 100 mL) suivie par conductimétrie σ(t).`,
        items
      );
    }

    default:
      return null;
  }
}
