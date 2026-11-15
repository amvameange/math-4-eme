import { BepcArchivePaper, BepcCountryId } from '../../types/math';
import {
  ArchivePartSeed,
  BEPC_COUNTRY_CONTEXTS,
  buildArchivePapers,
  CountryContext,
} from './bepcArchiveHelpers';

const COUNTRY_ORDER: BepcCountryId[] = [
  'gabon',
  'france',
  'senegal',
  'cameroun',
  'benin',
  'togo',
];

function cleanNum(n: number): number {
  return Math.round(n * 10000) / 10000;
}

function fmtFr(n: number): string {
  const c = cleanNum(n);
  return String(c).replace('.', ',');
}

function fmtAns(n: number): string {
  return String(cleanNum(n));
}

function buildPhysicsChimie1(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year + cIdx) % 6;
  const city = ctx.cities[(year + cIdx) % ctx.cities.length];
  const scale = 1 + ((year * 3 + cIdx) % 5); // 1..5

  switch (variant) {
    case 0: {
      // Combustion du magnésium : 2 Mg + O2 -> 2 MgO (M(Mg)=24, M(O)=16, M(MgO)=40)
      const nMg = cleanNum(0.1 * scale);
      const mMg = cleanNum(nMg * 24);
      const nO2 = cleanNum(nMg / 2);
      const mMgO = cleanNum(nMg * 40);
      return {
        chapterId: 'phys3-metaux-oxydation',
        partLabel: 'Exercice 1',
        title: 'Oxydation du magnésium & stœchiométrie',
        points: 5,
        difficulty: 2,
        prompt:
          `Au laboratoire du collège à ${city}, un élève réalise la combustion complète d’un ruban de magnésium (Mg) de masse m = ${fmtFr(mMg)} g dans le dioxygène pur (O₂).\n` +
          `Données : M(Mg) = 24 g/mol ; M(O) = 16 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Écris et équilibre l’équation-bilan de la combustion du magnésium donnant de la magnésie (MgO). (1,5 pt)\n` +
          `2) Calcule la quantité de matière n(Mg) brûlée en moles. (1 pt)\n` +
          `3) Déduis-en la quantité de dioxygène n(O₂) nécessaire et le volume V(O₂) consommé. (1 pt)\n` +
          `4) Calcule la masse finale de magnésie MgO formée (en g). (1,5 pt)`,
        hint: `n(Mg) = m ÷ 24 = ${fmtFr(nMg)} mol. D’après 2 Mg + O₂ ➔ 2 MgO, n(MgO) = n(Mg) et M(MgO) = 40 g/mol.`,
        correctAnswer: fmtAns(mMgO),
        unit: 'g',
        explanationFinal: `La combustion de ${fmtFr(mMg)} g de magnésium produit ${fmtFr(mMgO)} g de magnésie (MgO).`,
        themeTags: ['Métaux', 'Équation-bilan', 'Quantité de matière'],
        steps: [
          {
            title: '1) Équation-bilan équilibrée (1,5 pt)',
            ruleApplied: 'Conservation des atomes (Lavoisier)',
            mathExpression: '2 Mg + O₂ ➔ 2 MgO',
            explanation: 'Il faut 2 atomes de Mg pour 1 molécule de O₂ afin d’obtenir 2 motifs MgO.',
          },
          {
            title: '2) Quantité de matière de magnésium (1 pt)',
            mathExpression: `n(Mg) = m ÷ M(Mg) = ${fmtFr(mMg)} ÷ 24 = ${fmtFr(nMg)} mol`,
            explanation: 'Conversion masse ➔ moles.',
            subResult: `${fmtFr(nMg)} mol`,
          },
          {
            title: '3) Dioxygène consommé (1 pt)',
            mathExpression: `n(O₂) = n(Mg) ÷ 2 = ${fmtFr(nO2)} mol\nV(O₂) = ${fmtFr(nO2)} × 24 = ${fmtFr(cleanNum(nO2 * 24))} L`,
            explanation: 'Coefficient 1 pour O₂ contre 2 pour Mg.',
          },
          {
            title: '4) Masse de magnésie MgO formée (1,5 pt)',
            mathExpression: `M(MgO) = 24 + 16 = 40 g/mol\nn(MgO) = n(Mg) = ${fmtFr(nMg)} mol\nm(MgO) = ${fmtFr(nMg)} × 40 = ${fmtFr(mMgO)} g`,
            explanation: 'Produit final obtenu en grammes.',
            subResult: `${fmtFr(mMgO)} g`,
          },
        ],
      };
    }
    case 1: {
      // Réduction de l'oxyde ferrique Fe2O3 par Al (aluminothermie) : Fe2O3 + 2 Al -> Al2O3 + 2 Fe
      // M(Fe)=56, M(O)=16 => M(Fe2O3)=160, M(Al)=27
      const nFe2O3 = cleanNum(0.1 * scale);
      const mFe2O3 = cleanNum(nFe2O3 * 160);
      const nFe = cleanNum(2 * nFe2O3);
      const mFe = cleanNum(nFe * 56);
      const mAl = cleanNum(2 * nFe2O3 * 27);
      return {
        chapterId: 'phys3-metaux-oxydation',
        partLabel: 'Exercice 1',
        title: 'Aluminothermie : réduction de l’oxyde ferrique',
        points: 5,
        difficulty: 3,
        prompt:
          `À ${city}, on réalise par aluminothermie la réduction d’une masse m = ${fmtFr(mFe2O3)} g d’oxyde ferrique (Fe₂O₃) par l’aluminium (Al) pour souder des rails.\n` +
          `Données : M(Fe) = 56 g/mol ; M(O) = 16 g/mol ; M(Al) = 27 g/mol.\n\n` +
          `1) Écris l’équation-bilan : Fe₂O₃ + ... Al ➔ Al₂O₃ + ... Fe. (1,5 pt)\n` +
          `2) Calcule la masse molaire M(Fe₂O₃) puis la quantité n(Fe₂O₃). (1 pt)\n` +
          `3) Calcule la masse d’aluminium nécessaire. (1 pt)\n` +
          `4) Calcule la masse de fer métallique (Fe) récupérée en grammes. (1,5 pt)`,
        hint: `M(Fe₂O₃) = 160 g/mol ➔ n(Fe₂O₃) = ${fmtFr(nFe2O3)} mol ➔ n(Fe) = 2 × n(Fe₂O₃) = ${fmtFr(nFe)} mol.`,
        correctAnswer: fmtAns(mFe),
        unit: 'g',
        explanationFinal: `On récupère m(Fe) = ${fmtFr(mFe)} g de fer pur.`,
        themeTags: ['Aluminothermie', 'Oxydoréduction', 'Métaux'],
        steps: [
          {
            title: '1) Équation équilibrée (1,5 pt)',
            mathExpression: 'Fe₂O₃ + 2 Al ➔ Al₂O₃ + 2 Fe',
            explanation: 'L’aluminium capte l’oxygène du fer (il est plus réducteur).',
          },
          {
            title: '2) Masse molaire et quantité de Fe₂O₃ (1 pt)',
            mathExpression: `M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol\nn(Fe₂O₃) = ${fmtFr(mFe2O3)} ÷ 160 = ${fmtFr(nFe2O3)} mol`,
            explanation: 'Calcul exact de la quantité initiale.',
          },
          {
            title: '3) Masse d’aluminium nécessaire (1 pt)',
            mathExpression: `n(Al) = 2 × ${fmtFr(nFe2O3)} = ${fmtFr(nFe)} mol\nm(Al) = ${fmtFr(nFe)} × 27 = ${fmtFr(mAl)} g`,
            explanation: 'Proportion 2 moles d’Al par mole de Fe₂O₃.',
          },
          {
            title: '4) Masse de fer obtenue (1,5 pt)',
            mathExpression: `n(Fe) = 2 × ${fmtFr(nFe2O3)} = ${fmtFr(nFe)} mol\nm(Fe) = ${fmtFr(nFe)} × 56 = ${fmtFr(mFe)} g`,
            explanation: 'Résultat final attendu en grammes.',
            subResult: `${fmtFr(mFe)} g`,
          },
        ],
      };
    }
    case 2: {
      // Action de HCl sur le zinc : Zn + 2 H+ -> Zn2+ + H2 (M(Zn)=65, Vm=24)
      const nZn = cleanNum(0.05 * scale);
      const mZn = cleanNum(nZn * 65);
      const vH2 = cleanNum(nZn * 24);
      return {
        chapterId: 'phys3-ions-tests',
        partLabel: 'Exercice 1',
        title: 'Action de l’acide chlorhydrique sur le zinc & tests d’ions',
        points: 5,
        difficulty: 2,
        prompt:
          `On introduit m = ${fmtFr(mZn)} g de grenaille de zinc (Zn) dans un excès d’acide chlorhydrique (H⁺ + Cl⁻).\n` +
          `Données : M(Zn) = 65 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Quel gaz s’échappe et comment l’identifie-t-on ? (1 pt)\n` +
          `2) Écris l’équation ionique simplifiée de la réaction. (1,5 pt)\n` +
          `3) Quel test permet d’identifier les ions Zn²⁺ en fin d’expérience ? (1 pt)\n` +
          `4) Calcule le volume V(H₂) de gaz dégagé en litres. (1,5 pt)`,
        hint: `n(Zn) = ${fmtFr(mZn)} ÷ 65 = ${fmtFr(nZn)} mol. Puis V(H₂) = n(Zn) × 24.`,
        correctAnswer: fmtAns(vH2),
        unit: 'L',
        explanationFinal: `Il se dégage V(H₂) = ${fmtFr(vH2)} L de dihydrogène.`,
        themeTags: ['Ions', 'Zinc', 'Dihydrogène'],
        steps: [
          {
            title: '1) Nature du gaz (1 pt)',
            mathExpression: 'Dihydrogène (H₂) ➔ détonation ("aboiement") à la flamme',
            explanation: 'Test caractéristique du dihydrogène.',
          },
          {
            title: '2) Équation-bilan ionique (1,5 pt)',
            mathExpression: 'Zn + 2 H⁺ ➔ Zn²⁺ + H₂',
            explanation: 'Les ions Cl⁻ sont spectateurs.',
          },
          {
            title: '3) Identification de Zn²⁺ (1 pt)',
            mathExpression: 'Soude (NaOH) ➔ précipité blanc soluble dans un excès de soude',
            explanation: 'Caractérise Zn²⁺.',
          },
          {
            title: '4) Volume de dihydrogène dégagé (1,5 pt)',
            mathExpression: `n(H₂) = n(Zn) = ${fmtFr(mZn)} ÷ 65 = ${fmtFr(nZn)} mol\nV(H₂) = ${fmtFr(nZn)} × 24 = ${fmtFr(vH2)} L`,
            explanation: 'Utilisation du volume molaire Vₘ = 24 L/mol.',
            subResult: `${fmtFr(vH2)} L`,
          },
        ],
      };
    }
    case 3: {
      // Action de l'acide chlorhydrique sur le fer : Fe + 2 H+ -> Fe2+ + H2
      const nFe = cleanNum(0.05 * scale);
      const mFe = cleanNum(nFe * 56);
      const vH2 = cleanNum(nFe * 24);
      return {
        chapterId: 'phys3-ions-tests',
        partLabel: 'Exercice 1',
        title: 'Attaque du fer par l’acide & mise en évidence des ions',
        points: 5,
        difficulty: 2,
        prompt:
          `À ${city}, on verse un excès d’acide chlorhydrique sur m = ${fmtFr(mFe)} g de limaille de fer (Fe).\n` +
          `Données : M(Fe) = 56 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Écris l’équation ionique bilan de la réaction. (1,5 pt)\n` +
          `2) Quelle couleur prend le précipité en ajoutant de la soude au filtrat ? Quel ion prouve-t-il ? (1 pt)\n` +
          `3) Quel réactif caractérise les ions Cl⁻ restés en solution ? (1 pt)\n` +
          `4) Calcule le volume de dihydrogène dégagé en litres. (1,5 pt)`,
        hint: `n(Fe) = ${fmtFr(mFe)} ÷ 56 = ${fmtFr(nFe)} mol ; V(H₂) = ${fmtFr(nFe)} × 24.`,
        correctAnswer: fmtAns(vH2),
        unit: 'L',
        explanationFinal: `Volume dégagé : V(H₂) = ${fmtFr(vH2)} L.`,
        themeTags: ['Fer', 'Ions Fe²⁺', 'Tests de reconnaissance'],
        steps: [
          {
            title: '1) Équation ionique (1,5 pt)',
            mathExpression: 'Fe + 2 H⁺ ➔ Fe²⁺ + H₂',
            explanation: 'Le fer s’oxyde en ion fer II.',
          },
          {
            title: '2) & 3) Tests d’identification des ions (2 pts)',
            mathExpression: 'Soude (OH⁻) ➔ précipité VERT = ion Fe²⁺\nNitrate d’argent (Ag⁺) ➔ précipité BLANC noircissant = ion Cl⁻',
            explanation: 'Tests officiels à retenir.',
          },
          {
            title: '4) Volume de gaz formé (1,5 pt)',
            mathExpression: `n(Fe) = ${fmtFr(mFe)} ÷ 56 = ${fmtFr(nFe)} mol\nn(H₂) = ${fmtFr(nFe)} mol ⇒ V(H₂) = ${fmtFr(nFe)} × 24 = ${fmtFr(vH2)} L`,
            explanation: '1 mole de Fe donne 1 mole de H₂.',
            subResult: `${fmtFr(vH2)} L`,
          },
        ],
      };
    }
    case 4: {
      // Réduction de l'oxyde de cuivre II CuO par le carbone : 2 CuO + C -> 2 Cu + CO2
      // M(Cu)=64, M(O)=16 => M(CuO)=80, M(C)=12
      const nCO2 = cleanNum(0.05 * scale);
      const mCuO = cleanNum(2 * nCO2 * 80);
      const mCu = cleanNum(2 * nCO2 * 64);
      const vCO2 = cleanNum(nCO2 * 24);
      return {
        chapterId: 'phys3-metaux-oxydation',
        partLabel: 'Exercice 1',
        title: 'Réduction de l’oxyde de cuivre II par le carbone',
        points: 5,
        difficulty: 3,
        prompt:
          `On chauffe fortement un mélange intime de m = ${fmtFr(mCuO)} g d’oxyde de cuivre II (CuO) noir et de poudre de carbone en excès.\n` +
          `Données : M(Cu) = 64 g/mol ; M(O) = 16 g/mol ; M(C) = 12 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Quel gaz trouble l’eau de chaux à la sortie du tube ? (1 pt)\n` +
          `2) Écris l’équation-bilan équilibrée de la réaction. (1,5 pt)\n` +
          `3) Calcule le volume de CO₂ dégagé en litres. (1 pt)\n` +
          `4) Calcule la masse de cuivre rouge obtenu en grammes. (1,5 pt)`,
        hint: `M(CuO) = 80 g/mol ➔ n(CuO) = ${fmtFr(cleanNum(2 * nCO2))} mol. Même quantité de Cu formée.`,
        correctAnswer: fmtAns(mCu),
        unit: 'g',
        explanationFinal: `On obtient ${fmtFr(mCu)} g de cuivre métallique rouge et ${fmtFr(vCO2)} L de CO₂.`,
        themeTags: ['CuO', 'Carbone', 'Réduction'],
        steps: [
          {
            title: '1) & 2) Gaz et équation-bilan (2,5 pts)',
            mathExpression: 'Gaz : dioxyde de carbone (CO₂)\n2 CuO + C ➔ 2 Cu + CO₂',
            explanation: 'Le carbone réduit l’oxyde de cuivre.',
          },
          {
            title: '3) Volume de CO₂ dégagé (1 pt)',
            mathExpression: `n(CuO) = ${fmtFr(mCuO)} ÷ 80 = ${fmtFr(cleanNum(2 * nCO2))} mol\nn(CO₂) = n(CuO) ÷ 2 = ${fmtFr(nCO2)} mol\nV(CO₂) = ${fmtFr(nCO2)} × 24 = ${fmtFr(vCO2)} L`,
            explanation: 'Facteur stœchiométrique 1/2.',
          },
          {
            title: '4) Masse de cuivre obtenue (1,5 pt)',
            mathExpression: `n(Cu) = n(CuO) = ${fmtFr(cleanNum(2 * nCO2))} mol\nm(Cu) = ${fmtFr(cleanNum(2 * nCO2))} × 64 = ${fmtFr(mCu)} g`,
            explanation: 'Conversion finale en grammes.',
            subResult: `${fmtFr(mCu)} g`,
          },
        ],
      };
    }
    default: {
      // Identification complète par QCM + bilan molaire CuSO4 + NaOH -> Cu(OH)2
      // M(Cu)=64, M(O)=16, M(H)=1 => M(Cu(OH)2) = 98 g/mol
      const nCu = cleanNum(0.05 * scale);
      const mPrec = cleanNum(nCu * 98);
      return {
        chapterId: 'phys3-ions-tests',
        partLabel: 'Exercice 1',
        title: 'Précipitation des ions Cu²⁺ par la soude',
        points: 5,
        difficulty: 2,
        prompt:
          `Une solution bleue de sulfate de cuivre II contient n = ${fmtFr(nCu)} mol d’ions Cu²⁺.\n` +
          `Données : M(Cu) = 64 g/mol ; M(O) = 16 g/mol ; M(H) = 1 g/mol.\n\n` +
          `1) Quelle couleur observe-t-on lorsqu’on verse de la soude (Na⁺ + OH⁻) dans cette solution ? (1 pt)\n` +
          `2) Écris l’équation ionique de formation du précipité d’hydroxyde de cuivre II Cu(OH)₂. (1,5 pt)\n` +
          `3) Calcule la masse molaire M(Cu(OH)₂). (1 pt)\n` +
          `4) Calcule la masse de précipité Cu(OH)₂ sec obtenu en grammes. (1,5 pt)`,
        hint: `M(Cu(OH)₂) = 64 + 2×(16 + 1) = 98 g/mol. Puis m = ${fmtFr(nCu)} × 98.`,
        correctAnswer: fmtAns(mPrec),
        unit: 'g',
        explanationFinal: `Le précipité bleu d’hydroxyde de cuivre II a une masse de ${fmtFr(mPrec)} g.`,
        themeTags: ['Sulfate de cuivre', 'Précipité bleu', 'Masse molaire'],
        steps: [
          {
            title: '1) & 2) Observation et équation (2,5 pts)',
            mathExpression: 'Précipité BLEU\nCu²⁺ + 2 OH⁻ ➔ Cu(OH)₂ ↓',
            explanation: 'Test caractéristique de l’ion cuivre II.',
          },
          {
            title: '3) Masse molaire du précipité (1 pt)',
            mathExpression: 'M(Cu(OH)₂) = 64 + 2×16 + 2×1 = 98 g/mol',
            explanation: 'Addition des masses atomiques.',
          },
          {
            title: '4) Masse de Cu(OH)₂ formée (1,5 pt)',
            mathExpression: `n(Cu(OH)₂) = n(Cu²⁺) = ${fmtFr(nCu)} mol\nm = ${fmtFr(nCu)} × 98 = ${fmtFr(mPrec)} g`,
            explanation: '1 mole de Cu²⁺ donne 1 mole de Cu(OH)₂.',
            subResult: `${fmtFr(mPrec)} g`,
          },
        ],
      };
    }
  }
}

function buildPhysicsChimie2(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year * 2 + cIdx) % 6;
  const city = ctx.cities[(year + cIdx + 1) % ctx.cities.length];
  const scale = 1 + ((year + cIdx * 2) % 5); // 1..5

  switch (variant) {
    case 0: {
      // Dilution acide : C1 * V1 = C2 * V2
      const v1 = 10 * scale; // mL
      const v2 = v1 * 10; // mL
      const c1 = 0.5;
      const c2 = 0.05;
      const vEau = v2 - v1;
      return {
        chapterId: 'phys3-acides-bases-ph',
        partLabel: 'Exercice 2',
        title: 'Dilution d’une solution acide et évolution du pH',
        points: 4,
        difficulty: 2,
        prompt:
          `On dispose d’une solution S₁ d’acide chlorhydrique de concentration C₁ = 0,5 mol/L et de pH = 0,3.\n` +
          `On prélève un volume V₁ = ${v1} mL de S₁ que l’on verse dans une fiole jaugée de V₂ = ${v2} mL, puis on complète avec de l’eau distillée jusqu’au trait de jauge.\n\n` +
          `1) Quel volume d’eau distillée a-t-on ajouté ? (1 pt)\n` +
          `2) Le pH de la solution finale S₂ est-il supérieur ou inférieur à 0,3 ? Justifie. (1 pt)\n` +
          `3) Calcule la nouvelle concentration molaire C₂ (en mol/L). (2 pts)`,
        hint: `V_eau = ${v2} − ${v1} ; C₂ = (C₁ × V₁) ÷ V₂ = 0,5 ÷ 10.`,
        correctAnswer: fmtAns(c2),
        unit: 'mol/L',
        explanationFinal: `On ajoute ${vEau} mL d’eau ; le pH augmente tout en restant < 7, et C₂ = 0,05 mol/L.`,
        themeTags: ['Dilution', 'pH', 'Concentration'],
        steps: [
          {
            title: '1) Volume d’eau ajouté (1 pt)',
            mathExpression: `V_eau = V₂ − V₁ = ${v2} − ${v1} = ${vEau} mL`,
            explanation: 'Complément jusqu’au trait de jauge.',
          },
          {
            title: '2) Évolution du pH (1 pt)',
            mathExpression: 'La solution devient moins acide ⇒ le pH augmente (reste < 7).',
            explanation: 'Diluer un acide rapproche son pH de 7.',
          },
          {
            title: '3) Concentration finale C₂ (2 pts)',
            ruleApplied: 'Conservation de la quantité de matière : C₁V₁ = C₂V₂',
            mathExpression: `C₂ = (0,5 × ${v1}) ÷ ${v2} = 0,05 mol/L`,
            explanation: 'Dilution au dixième.',
            subResult: '0,05 mol/L',
          },
        ],
      };
    }
    case 1: {
      // Dosage / neutralisation acide-base : Ca * Va = Cb * Vb
      const va = 20; // mL
      const vb = 10 * scale; // mL
      const cb = 0.2; // mol/L
      const ca = cleanNum((cb * vb) / va); // 0.1 * scale
      return {
        chapterId: 'phys3-acides-bases-ph',
        partLabel: 'Exercice 2',
        title: 'Neutralisation acido-basique (dosage)',
        points: 4,
        difficulty: 3,
        prompt:
          `À ${city}, on dose un volume Vₐ = ${va} mL d’une solution d’acide chlorhydrique de concentration inconnue Cₐ par une solution de soude de concentration C_b = 0,2 mol/L.\n` +
          `L’équivalence (pH = 7) est atteinte pour un volume versé V_b = ${vb} mL.\n\n` +
          `1) Écris l’équation de la réaction de neutralisation entre H⁺ et OH⁻. (1 pt)\n` +
          `2) Quelle relation relie Cₐ, Vₐ, C_b et V_b à l’équivalence ? (1 pt)\n` +
          `3) Calcule la concentration molaire Cₐ de l’acide (en mol/L). (2 pts)`,
        hint: `Cₐ × Vₐ = C_b × V_b ➔ Cₐ = (0,2 × ${vb}) ÷ ${va}.`,
        correctAnswer: fmtAns(ca),
        unit: 'mol/L',
        explanationFinal: `La concentration de l’acide vaut Cₐ = ${fmtFr(ca)} mol/L.`,
        themeTags: ['Neutralisation', 'Équivalence', 'pH = 7'],
        steps: [
          {
            title: '1) Équation de neutralisation (1 pt)',
            mathExpression: 'H⁺ + OH⁻ ➔ H₂O',
            explanation: 'Formation d’eau neutre.',
          },
          {
            title: '2) Relation d’équivalence (1 pt)',
            mathExpression: 'n(H⁺) = n(OH⁻) ⇔ Cₐ × Vₐ = C_b × V_b',
            explanation: 'Égalité stœchiométrique 1 : 1.',
          },
          {
            title: '3) Calcul de Cₐ (2 pts)',
            mathExpression: `Cₐ = (0,2 × ${vb}) ÷ ${va} = ${fmtFr(ca)} mol/L`,
            explanation: 'Application numérique.',
            subResult: `${fmtFr(ca)} mol/L`,
          },
        ],
      };
    }
    case 2: {
      // Combustion complète du butane : 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O (M(C4H10) = 58 g/mol)
      const nButane = cleanNum(0.5 * scale);
      const mButane = cleanNum(nButane * 58);
      const nCO2 = cleanNum(4 * nButane);
      const vCO2 = cleanNum(nCO2 * 24);
      return {
        chapterId: 'phys3-hydrocarbures-alcools',
        partLabel: 'Exercice 2',
        title: 'Combustion complète d’une bouteille de butane',
        points: 4,
        difficulty: 2,
        prompt:
          `Une cuisinière à ${city} brûle complètement m = ${fmtFr(mButane)} g de gaz butane (C₄H₁₀) dans l’air.\n` +
          `Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) À quelle famille d’hydrocarbures appartient le butane ? Donne sa formule générale. (1 pt)\n` +
          `2) Écris l’équation équilibrée de la combustion complète du butane. (1 pt)\n` +
          `3) Calcule la quantité de butane brûlée puis le volume de CO₂ dégagé (en litres). (2 pts)`,
        hint: `M(C₄H₁₀) = 58 g/mol ➔ n = ${fmtFr(nButane)} mol ➔ n(CO₂) = 4×n = ${fmtFr(nCO2)} mol ➔ V = n(CO₂)×24.`,
        correctAnswer: fmtAns(vCO2),
        unit: 'L',
        explanationFinal: `La combustion dégage ${fmtFr(vCO2)} L de dioxyde de carbone.`,
        themeTags: ['Alcanes', 'Butane', 'Combustion'],
        steps: [
          {
            title: '1) Famille chimique (1 pt)',
            mathExpression: 'Alcane : CₙH₂ₙ₊₂ (ici n = 4)',
            explanation: 'Hydrocarbure saturé.',
          },
          {
            title: '2) Équation de combustion complète (1 pt)',
            mathExpression: '2 C₄H₁₀ + 13 O₂ ➔ 8 CO₂ + 10 H₂O',
            explanation: '1 mole de butane forme 4 moles de CO₂.',
          },
          {
            title: '3) Volume de CO₂ produit (2 pts)',
            mathExpression: `M(C₄H₁₀) = 58 g/mol ⇒ n = ${fmtFr(mButane)} ÷ 58 = ${fmtFr(nButane)} mol\nn(CO₂) = 4 × ${fmtFr(nButane)} = ${fmtFr(nCO2)} mol\nV(CO₂) = ${fmtFr(nCO2)} × 24 = ${fmtFr(vCO2)} L`,
            explanation: 'Calcul du volume gazeux.',
            subResult: `${fmtFr(vCO2)} L`,
          },
        ],
      };
    }
    case 3: {
      // Combustion complète du propane : C3H8 + 5 O2 -> 3 CO2 + 4 H2O (M=44 g/mol)
      const nProp = cleanNum(0.5 * scale);
      const mProp = cleanNum(nProp * 44);
      const nO2 = cleanNum(5 * nProp);
      const vO2 = cleanNum(nO2 * 24);
      return {
        chapterId: 'phys3-hydrocarbures-alcools',
        partLabel: 'Exercice 2',
        title: 'Combustion du propane et besoin en dioxygène',
        points: 4,
        difficulty: 2,
        prompt:
          `On brûle complètement m = ${fmtFr(mProp)} g de propane (C₃H₈) dans un chalumeau.\n` +
          `Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Écris l’équation-bilan équilibrée de cette combustion complète. (1,5 pt)\n` +
          `2) Calcule le nombre de moles de propane brûlées. (1 pt)\n` +
          `3) Calcule le volume de dioxygène V(O₂) nécessaire (en litres). (1,5 pt)`,
        hint: `C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O ; M(C₃H₈) = 44 g/mol ➔ n(O₂) = 5 × n(C₃H₈).`,
        correctAnswer: fmtAns(vO2),
        unit: 'L',
        explanationFinal: `Il faut V(O₂) = ${fmtFr(vO2)} L de dioxygène pur.`,
        themeTags: ['Propane', 'Dioxygène', 'Volume molaire'],
        steps: [
          {
            title: '1) Équation-bilan (1,5 pt)',
            mathExpression: 'C₃H₈ + 5 O₂ ➔ 3 CO₂ + 4 H₂O',
            explanation: 'Equilibrage C, H puis O.',
          },
          {
            title: '2) Quantité de propane (1 pt)',
            mathExpression: `M(C₃H₈) = 3×12 + 8 = 44 g/mol\nn = ${fmtFr(mProp)} ÷ 44 = ${fmtFr(nProp)} mol`,
            explanation: 'Conversion en moles.',
          },
          {
            title: '3) Volume de dioxygène nécessaire (1,5 pt)',
            mathExpression: `n(O₂) = 5 × ${fmtFr(nProp)} = ${fmtFr(nO2)} mol\nV(O₂) = ${fmtFr(nO2)} × 24 = ${fmtFr(vO2)} L`,
            explanation: 'Application de V = n × Vₘ.',
            subResult: `${fmtFr(vO2)} L`,
          },
        ],
      };
    }
    case 4: {
      // Fermentation alcoolique du glucose / combustion éthanol C2H6O + 3 O2 -> 2 CO2 + 3 H2O (M = 46)
      const nEth = cleanNum(0.25 * scale);
      const mEth = cleanNum(nEth * 46);
      const nCO2 = cleanNum(2 * nEth);
      const vCO2 = cleanNum(nCO2 * 24);
      return {
        chapterId: 'phys3-hydrocarbures-alcools',
        partLabel: 'Exercice 2',
        title: 'Combustion de l’éthanol (alcool éthylique)',
        points: 4,
        difficulty: 2,
        prompt:
          `Une lampe à alcool contient m = ${fmtFr(mEth)} g d’éthanol pur de formule C₂H₆O.\n` +
          `Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; M(O) = 16 g/mol ; Vₘ = 24 L/mol.\n\n` +
          `1) Calcule la masse molaire M(C₂H₆O). (1 pt)\n` +
          `2) Écris l’équation de combustion complète : C₂H₆O + ... O₂ ➔ ... CO₂ + ... H₂O. (1,5 pt)\n` +
          `3) Calcule le volume de dioxyde de carbone V(CO₂) formé (en litres). (1,5 pt)`,
        hint: `M(C₂H₆O) = 46 g/mol ➔ n = ${fmtFr(nEth)} mol ➔ n(CO₂) = 2×n = ${fmtFr(nCO2)} mol.`,
        correctAnswer: fmtAns(vCO2),
        unit: 'L',
        explanationFinal: `La combustion complète libère ${fmtFr(vCO2)} L de CO₂.`,
        themeTags: ['Éthanol', 'Alcools', 'Combustion'],
        steps: [
          {
            title: '1) Masse molaire (1 pt)',
            mathExpression: 'M(C₂H₆O) = 2×12 + 6×1 + 16 = 46 g/mol',
            explanation: 'Addition des masses molaires.',
          },
          {
            title: '2) Équation équilibrée (1,5 pt)',
            mathExpression: 'C₂H₆O + 3 O₂ ➔ 2 CO₂ + 3 H₂O',
            explanation: '3 molécules de O₂ apportent 6 O (+1 dans l’éthanol = 7 O).',
          },
          {
            title: '3) Volume de CO₂ formé (1,5 pt)',
            mathExpression: `n(C₂H₆O) = ${fmtFr(mEth)} ÷ 46 = ${fmtFr(nEth)} mol\nn(CO₂) = 2 × ${fmtFr(nEth)} = ${fmtFr(nCO2)} mol\nV(CO₂) = ${fmtFr(nCO2)} × 24 = ${fmtFr(vCO2)} L`,
            explanation: 'Résultat en litres.',
            subResult: `${fmtFr(vCO2)} L`,
          },
        ],
      };
    }
    default: {
      // Identification acide/neutre/basique par échelle pH et ions majoritaires
      const pH = 1 + ((year + cIdx) % 3); // 1, 2 ou 3
      const concentrationH = cleanNum(Math.pow(10, -pH));
      return {
        chapterId: 'phys3-acides-bases-ph',
        partLabel: 'Exercice 2',
        title: 'Échelle de pH et concentration des ions H⁺',
        points: 4,
        difficulty: 1,
        prompt:
          `On mesure au pH-mètre trois boissons et produits courants :\n` +
          `• Solution A (jus de citron) : pH = ${pH}\n` +
          `• Solution B (eau distillée) : pH = 7\n` +
          `• Solution C (eau de Javel diluée) : pH = 11\n\n` +
          `1) Classe ces solutions en acide, neutre et basique. (1,5 pt)\n` +
          `2) Quel ion (H⁺ ou OH⁻) est majoritaire dans la solution C ? (1 pt)\n` +
          `3) Sachant que pour un acide fort C(H⁺) = 10⁻ᵖᴴ mol/L, donne la valeur décimale de la concentration en ions H⁺ de la solution A (en mol/L). (1,5 pt)`,
        hint: `pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique. Pour pH = ${pH}, 10⁻${pH} = ${fmtFr(concentrationH)}.`,
        correctAnswer: fmtAns(concentrationH),
        unit: 'mol/L',
        explanationFinal: `A est acide, B neutre, C basique (OH⁻ majoritaire) et [H⁺] = ${fmtFr(concentrationH)} mol/L.`,
        themeTags: ['pH', 'Acide', 'Base'],
        steps: [
          {
            title: '1) Nature des 3 solutions (1,5 pt)',
            mathExpression: `A (pH=${pH} < 7) : acide\nB (pH=7) : neutre\nC (pH=11 > 7) : basique`,
            explanation: 'Règle générale de l’échelle de pH (0 à 14).',
          },
          {
            title: '2) Ion majoritaire de C (1 pt)',
            mathExpression: 'Solution basique ⇒ ions hydroxyde OH⁻ majoritaires.',
            explanation: 'En milieu basique [OH⁻] > [H⁺].',
          },
          {
            title: '3) Concentration en H⁺ de A (1,5 pt)',
            mathExpression: `[H⁺] = 10⁻${pH} = ${fmtFr(concentrationH)} mol/L`,
            explanation: 'Écriture décimale exacte.',
            subResult: `${fmtFr(concentrationH)} mol/L`,
          },
        ],
      };
    }
  }
}

function buildPhysicsElectricite(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year + cIdx * 3) % 6;
  const city = ctx.cities[(year + cIdx + 2) % ctx.cities.length];
  const scale = 1 + ((year + cIdx) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Association série : R1, R2 + U => Req, I, U1, P1
      const r1 = 10 * scale;
      const r2 = 20 * scale;
      const req = r1 + r2; // 30 * scale
      const i = 0.4;
      const u = cleanNum(req * i); // 12 * scale
      const p = cleanNum(u * i);
      return {
        chapterId: 'phys3-conducteurs-ohmiques',
        partLabel: 'Exercice 3',
        title: 'Association de résistors en série & loi d’Ohm',
        points: 5,
        difficulty: 2,
        prompt:
          `Un générateur délivre une tension continue U = ${fmtFr(u)} V aux bornes de deux conducteurs ohmiques montés en SÉRIE : R₁ = ${r1} Ω et R₂ = ${r2} Ω.\n\n` +
          `1) Calcule la résistance équivalente R_éq de l’association. (1 pt)\n` +
          `2) Calcule l’intensité I du courant traversant le circuit (en A). (1,5 pt)\n` +
          `3) Calcule la tension U₁ aux bornes de R₁. (1 pt)\n` +
          `4) Calcule la puissance électrique P totale dissipée par effet Joule (en W). (1,5 pt)`,
        hint: `R_éq = ${r1} + ${r2} = ${req} Ω ; I = U ÷ R_éq = 0,4 A ; P = U × I.`,
        correctAnswer: fmtAns(p),
        unit: 'W',
        explanationFinal: `R_éq = ${req} Ω, I = 0,4 A, U₁ = ${fmtFr(cleanNum(r1 * i))} V et P = ${fmtFr(p)} W.`,
        themeTags: ['Série', 'Loi d’Ohm', 'Effet Joule'],
        steps: [
          {
            title: '1) Résistance équivalente (1 pt)',
            mathExpression: `R_éq = R₁ + R₂ = ${r1} + ${r2} = ${req} Ω`,
            explanation: 'En série, les résistances s’additionnent.',
          },
          {
            title: '2) Intensité I (1,5 pt)',
            mathExpression: `I = U ÷ R_éq = ${fmtFr(u)} ÷ ${req} = 0,4 A`,
            explanation: 'Loi d’Ohm globale.',
          },
          {
            title: '3) Tension partielle U₁ (1 pt)',
            mathExpression: `U₁ = R₁ × I = ${r1} × 0,4 = ${fmtFr(cleanNum(r1 * i))} V`,
            explanation: 'Diviseur de tension.',
          },
          {
            title: '4) Puissance totale (1,5 pt)',
            mathExpression: `P = U × I = ${fmtFr(u)} × 0,4 = ${fmtFr(p)} W`,
            explanation: 'Puissance dissipée en chaleur.',
            subResult: `${fmtFr(p)} W`,
          },
        ],
      };
    }
    case 1: {
      // Association en dérivation : R1 = 20*k, R2 = 30*k => Req = 12*k
      const r1 = 20 * scale;
      const r2 = 30 * scale;
      const req = 12 * scale;
      const u = 24;
      const iTotal = cleanNum(u / req);
      return {
        chapterId: 'phys3-conducteurs-ohmiques',
        partLabel: 'Exercice 3',
        title: 'Conducteurs ohmiques en dérivation (parallèle)',
        points: 5,
        difficulty: 3,
        prompt:
          `On branche en DÉRIVATION deux résistors R₁ = ${r1} Ω et R₂ = ${r2} Ω aux bornes d’une source de tension U = ${u} V.\n\n` +
          `1) Écris la relation donnant la résistance équivalente R_éq en dérivation. (1 pt)\n` +
          `2) Calcule R_éq en Ω. (1,5 pt)\n` +
          `3) Calcule l’intensité dans chaque branche I₁ et I₂. (1 pt)\n` +
          `4) Déduis-en l’intensité principale I débitée par le générateur (en A). (1,5 pt)`,
        hint: `R_éq = (R₁ × R₂) ÷ (R₁ + R₂) = ${req} Ω ; I = U ÷ R_éq.`,
        correctAnswer: fmtAns(iTotal),
        unit: 'A',
        explanationFinal: `R_éq = ${req} Ω et I = ${fmtFr(iTotal)} A.`,
        themeTags: ['Dérivation', 'Loi des nœuds', 'Loi d’Ohm'],
        steps: [
          {
            title: '1) & 2) Résistance équivalente (2,5 pts)',
            mathExpression: `1/R_éq = 1/${r1} + 1/${r2}\nR_éq = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${req} Ω`,
            explanation: 'Toujours inférieure à la plus petite résistance.',
          },
          {
            title: '3) Courants de branche (1 pt)',
            mathExpression: `I₁ = ${u} ÷ ${r1} = ${fmtFr(cleanNum(u / r1))} A\nI₂ = ${u} ÷ ${r2} = ${fmtFr(cleanNum(u / r2))} A`,
            explanation: 'Même tension U aux bornes des deux branches.',
          },
          {
            title: '4) Intensité totale (1,5 pt)',
            mathExpression: `I = I₁ + I₂ = ${fmtFr(iTotal)} A`,
            explanation: 'Vérifié par I = U ÷ R_éq.',
            subResult: `${fmtFr(iTotal)} A`,
          },
        ],
      };
    }
    case 2: {
      // Facture électrique locale (SEEG, EDF, Senelec, Enéo, SBEE, CEET)
      const pFer = 1500; // W = 1.5 kW
      const hFer = 2 * scale; // heures
      const nLamp = 4;
      const pLamp = 25; // W => total 100 W = 0.1 kW
      const hLamp = 5; // => 0.5 kWh
      const eFer = cleanNum(1.5 * hFer); // kWh
      const eLamp = 0.5; // kWh
      const eTot = cleanNum(eFer + eLamp);
      const cost = cleanNum(eTot * ctx.tariffUnitPrice);
      return {
        chapterId: 'phys3-energie-puissance-seeg',
        partLabel: 'Exercice 3',
        title: `Bilan énergétique & facture ${ctx.utility} à ${city}`,
        points: 5,
        difficulty: 2,
        prompt:
          `Dans un foyer à ${city}, un abonnement ${ctx.utility} alimente pendant une semaine :\n` +
          `• Un fer à repasser de puissance P₁ = 1 500 W fonctionnant pendant t₁ = ${hFer} h ;\n` +
          `• ${nLamp} lampes LED de 25 W chacune allumées ensemble pendant t₂ = ${hLamp} h.\n` +
          `Le prix du kilowattheure (${ctx.utility}) est de ${fmtFr(ctx.tariffUnitPrice)} ${ctx.currency}/kWh.\n\n` +
          `1) Calcule l’énergie E₁ consommée par le fer en kWh. (1,5 pt)\n` +
          `2) Calcule l’énergie E₂ consommée par les ${nLamp} lampes en kWh. (1,5 pt)\n` +
          `3) Calcule le coût total de cette consommation (en ${ctx.currency}). (2 pts)`,
        hint: `E₁ = 1,5 × ${hFer} = ${fmtFr(eFer)} kWh ; E₂ = 0,1 × ${hLamp} = 0,5 kWh ; Coût = (${fmtFr(eTot)}) × ${fmtFr(ctx.tariffUnitPrice)}.`,
        correctAnswer: fmtAns(cost),
        unit: ctx.currency,
        explanationFinal: `Énergie totale E = ${fmtFr(eTot)} kWh, soit un coût de ${fmtFr(cost)} ${ctx.currency}.`,
        themeTags: [ctx.utility, 'Énergie kWh', 'Puissance'],
        steps: [
          {
            title: '1) Énergie du fer à repasser (1,5 pt)',
            mathExpression: `P₁ = 1 500 W = 1,5 kW\nE₁ = 1,5 × ${hFer} = ${fmtFr(eFer)} kWh`,
            explanation: 'Conversion W ➔ kW.',
          },
          {
            title: '2) Énergie des lampes LED (1,5 pt)',
            mathExpression: `P₂ = ${nLamp} × 25 W = 100 W = 0,1 kW\nE₂ = 0,1 × ${hLamp} = 0,5 kWh`,
            explanation: 'Puissance cumulée des 4 lampes.',
          },
          {
            title: '3) Coût total facturé (2 pts)',
            mathExpression: `E_tot = ${fmtFr(eFer)} + 0,5 = ${fmtFr(eTot)} kWh\nCoût = ${fmtFr(eTot)} × ${fmtFr(ctx.tariffUnitPrice)} = ${fmtFr(cost)} ${ctx.currency}`,
            explanation: `Tarif ${ctx.utility}.`,
            subResult: `${fmtFr(cost)} ${ctx.currency}`,
          },
        ],
      };
    }
    case 3: {
      // Effet Joule & chauffage d'eau : Q = P * t = m * c * ΔT
      // m = 1 kg d'eau (c = 4200 J/(kg·°C)), ΔT = 20*scale -> Q = 84000*scale J, P = 1000 W => t = 84*scale s
      const deltaT = 10 * scale; // °C (20 ➔ 20+deltaT)
      const q = 4200 * deltaT; // J
      const p = 1400; // W -> t = 3 * deltaT s (exact integer!)
      const t = q / p;
      return {
        chapterId: 'phys3-energie-puissance-seeg',
        partLabel: 'Exercice 3',
        title: 'Effet Joule : bouilloire électrique & calorimétrie',
        points: 5,
        difficulty: 3,
        prompt:
          `Une bouilloire électrique de puissance nominale P = ${p} W chauffe m = 1 kg d’eau initialement à 20 °C jusqu’à ${20 + deltaT} °C sans perte de chaleur.\n` +
          `On donne la capacité thermique massique de l’eau c = 4 200 J/(kg·°C).\n\n` +
          `1) Rappelle la relation de l’énergie thermique Q reçue par l’eau. (1 pt)\n` +
          `2) Calcule Q en Joules. (2 pts)\n` +
          `3) Calcule la durée de chauffage t nécessaire (en secondes). (2 pts)`,
        hint: `Q = 1 × 4 200 × ${deltaT} = ${q} J ; t = Q ÷ ${p}.`,
        correctAnswer: fmtAns(t),
        unit: 's',
        explanationFinal: `Q = ${q} J ; durée de chauffe t = ${t} s.`,
        themeTags: ['Effet Joule', 'Calorimétrie', 'Durée'],
        steps: [
          {
            title: '1) & 2) Énergie thermique absorbée (3 pts)',
            mathExpression: `Q = m × c × ΔT = 1 × 4 200 × (${20 + deltaT} − 20) = ${q} J`,
            explanation: 'Chaleur sensible de l’eau.',
          },
          {
            title: '3) Temps de chauffe (2 pts)',
            mathExpression: `E = P × t = Q ⇒ t = ${q} ÷ ${p} = ${t} s`,
            explanation: 'Conversion intégrale électrique ➔ thermique.',
            subResult: `${t} s`,
          },
        ],
      };
    }
    case 4: {
      // Transformateur : Us/Up = Ns/Np
      const np = 1000;
      const ns = 50 * scale; // 50, 100, 150, 200
      const up = 220;
      const us = cleanNum((up * ns) / np); // 11, 22, 33, 44 V
      return {
        chapterId: 'phys3-transformateur-electronique',
        partLabel: 'Exercice 3',
        title: 'Transformateur & adaptation de tension secteur',
        points: 5,
        difficulty: 2,
        prompt:
          `Un chargeur utilisé à ${city} renferme un transformateur supposé idéal comportant N_p = ${np} spires au primaire et N_s = ${ns} spires au secondaire.\n` +
          `Le primaire est branché sur le secteur sinusoïdal U_p = ${up} V (50 Hz).\n\n` +
          `1) Ce transformateur est-il élévateur ou abaisseur de tension ? Justifie. (1 pt)\n` +
          `2) Un transformateur fonctionne-t-il en courant continu ? Pourquoi ? (1 pt)\n` +
          `3) Calcule la tension efficace U_s disponible au secondaire (en Volts). (3 pts)`,
        hint: `N_s < N_p ⇒ abaisseur. U_s = U_p × (N_s ÷ N_p) = 220 × ${ns} ÷ 1 000.`,
        correctAnswer: fmtAns(us),
        unit: 'V',
        explanationFinal: `Transformateur abaisseur ; tension secondaire efficace U_s = ${fmtFr(us)} V.`,
        themeTags: ['Transformateur', 'Spires', 'Alternatif'],
        steps: [
          {
            title: '1) Nature du transformateur (1 pt)',
            mathExpression: `N_s (${ns}) < N_p (${np}) ⇒ rapport k < 1 ⇒ abaisseur de tension.`,
            explanation: 'Moins de spires au secondaire.',
          },
          {
            title: '2) Fonctionnement en alternatif (1 pt)',
            mathExpression: 'Non, il nécessite un flux magnétique variable (courant alternatif).',
            explanation: 'Loi d’induction électromagnétique.',
          },
          {
            title: '3) Tension secondaire U_s (3 pts)',
            ruleApplied: 'Relation de transformation U_s / U_p = N_s / N_p',
            mathExpression: `U_s = ${up} × (${ns} ÷ ${np}) = ${fmtFr(us)} V`,
            explanation: 'Calcul exact de U_s.',
            subResult: `${fmtFr(us)} V`,
          },
        ],
      };
    }
    default: {
      // Pont diviseur de tension et fusible de protection
      const uTot = 12 * scale; // 12, 24, 36, 48 V
      const r1 = 30;
      const r2 = 10;
      const u2 = cleanNum((uTot * r2) / (r1 + r2)); // uTot / 4 = 3 * scale
      return {
        chapterId: 'phys3-transformateur-electronique',
        partLabel: 'Exercice 3',
        title: 'Pont diviseur de tension & protection électrique',
        points: 5,
        difficulty: 2,
        prompt:
          `On réalise un pont diviseur de tension alimenté par U = ${uTot} V en branchant en série R₁ = ${r1} Ω et R₂ = ${r2} Ω.\n\n` +
          `1) Exprime la tension de sortie U₂ aux bornes de R₂ en fonction de U, R₁ et R₂. (1,5 pt)\n` +
          `2) Quelle est l’utilité d’une diode de roue libre ou d’un fusible en électronique ? (1 pt)\n` +
          `3) Calcule la tension U₂ mesurée au voltmètre aux bornes de R₂ (en Volts). (2,5 pts)`,
        hint: `U₂ = U × R₂ ÷ (R₁ + R₂) = ${uTot} × 10 ÷ 40.`,
        correctAnswer: fmtAns(u2),
        unit: 'V',
        explanationFinal: `La tension de sortie vaut U₂ = ${fmtFr(u2)} V.`,
        themeTags: ['Pont diviseur', 'Électronique', 'Tension'],
        steps: [
          {
            title: '1) Formule du pont diviseur (1,5 pt)',
            mathExpression: 'U₂ = U × R₂ ÷ (R₁ + R₂)',
            explanation: 'Même courant I dans R₁ et R₂.',
          },
          {
            title: '2) Rôle de protection (1 pt)',
            mathExpression: 'Le fusible coupe le circuit en cas de surintensité.',
            explanation: 'Sécurité des dipôles.',
          },
          {
            title: '3) Valeur de U₂ (2,5 pts)',
            mathExpression: `U₂ = ${uTot} × ${r2} ÷ (${r1} + ${r2}) = ${uTot} ÷ 4 = ${fmtFr(u2)} V`,
            explanation: 'Quart de la tension d’entrée.',
            subResult: `${fmtFr(u2)} V`,
          },
        ],
      };
    }
  }
}

function buildPhysicsProbleme(
  year: number,
  cIdx: number,
  ctx: CountryContext
): ArchivePartSeed {
  const variant = (year * 3 + cIdx) % 6;
  const city = ctx.cities[(year + cIdx + 3) % ctx.cities.length];
  const scale = 1 + ((year + cIdx) % 4); // 1..4

  switch (variant) {
    case 0: {
      // Grue : m, h, t => Poids, Travail, Puissance mécanique
      const m = 150 * scale; // kg
      const h = 8; // m
      const t = 12; // s
      const poids = m * 10;
      const travail = poids * h;
      const pm = travail / t; // 1000 * scale (exact!)
      return {
        chapterId: 'phys3-travail-puissance',
        partLabel: 'Problème',
        title: `Chantier à ${city} : Poids, Travail & Puissance de levage`,
        points: 6,
        difficulty: 3,
        prompt:
          `Sur un chantier à ${city}, une grue élève verticalement à vitesse constante une palette de ciment de masse m = ${m} kg d’une hauteur h = ${h} m en t = ${t} s.\n` +
          `On prendra g = 10 N/kg.\n\n` +
          `1) Cite et représente (direction, sens) les deux forces s’exerçant sur la palette pendant la montée à vitesse constante. (1,5 pt)\n` +
          `2) Calcule l’intensité du poids P de la palette. (1 pt)\n` +
          `3) Calcule le travail mécanique W développé par la grue pour soulever la palette. (1,5 pt)\n` +
          `4) Calcule la puissance mécanique utile P_m de la grue (en Watts). (2 pts)`,
        hint: `P = ${m}×10 = ${poids} N ; W = ${poids}×${h} = ${travail} J ; P_m = W ÷ ${t}.`,
        correctAnswer: fmtAns(pm),
        unit: 'W',
        explanationFinal: `P = ${poids} N, W = ${travail} J et P_m = ${pm} W.`,
        themeTags: ['Travail W = P·h', 'Puissance mécanique', 'Chantier'],
        steps: [
          {
            title: '1) Bilan des forces (1,5 pt)',
            mathExpression: 'Poids P⃗ (vertical vers le bas) et Traction T⃗ (verticale vers le haut)\nÀ vitesse constante : T = P.',
            explanation: 'Principe d’inertie.',
          },
          {
            title: '2) Intensité du poids (1 pt)',
            mathExpression: `P = m × g = ${m} × 10 = ${poids} N`,
            explanation: 'g = 10 N/kg.',
          },
          {
            title: '3) Travail de levage (1,5 pt)',
            mathExpression: `W = P × h = ${poids} × ${h} = ${travail} J`,
            explanation: 'Le travail moteur compense le travail résistant du poids.',
          },
          {
            title: '4) Puissance mécanique (2 pts)',
            mathExpression: `P_m = W ÷ t = ${travail} ÷ ${t} = ${pm} W`,
            explanation: 'Résultat en Watts.',
            subResult: `${pm} W`,
          },
        ],
      };
    }
    case 1: {
      // Poussée d'Archimède & équilibre d'un solide immergé
      const pAir = 10 * scale; // N
      const pLiquide = 7 * scale; // N
      const pa = pAir - pLiquide; // 3 * scale N
      // P_A = rho_eau * V * g => si rho*g = 10 000 N/m3 = 0.01 N/cm3 => V = pa * 100 cm3
      const vCm3 = pa * 100;
      return {
        chapterId: 'phys3-equilibre-solide',
        partLabel: 'Problème',
        title: 'Poussée d’Archimède & densité au laboratoire',
        points: 6,
        difficulty: 3,
        prompt:
          `Un bloc métallique suspendu à un dynamomètre indique P = ${pAir} N dans l’air.\n` +
          `Lorsqu’on l’immerge totalement dans l’eau douce (masse volumique ρ = 1 000 kg/m³, g = 10 N/kg), le dynamomètre n’indique plus que P’ = ${pLiquide} N.\n\n` +
          `1) Comment appelle-t-on la valeur P’ lue dans l’eau ? (1 pt)\n` +
          `2) Calcule l’intensité de la poussée d’Archimède P_A exercée par l’eau sur le bloc. (2 pts)\n` +
          `3) Déduis-en le volume V du bloc en m³, puis convertis-le en cm³. (3 pts)`,
        hint: `P_A = P − P’ = ${pa} N ; V(m³) = P_A ÷ (1 000 × 10) ; 1 m³ = 10⁶ cm³.`,
        correctAnswer: fmtAns(vCm3),
        unit: 'cm³',
        explanationFinal: `P_A = ${pa} N et le volume du solide est V = ${vCm3} cm³.`,
        themeTags: ['Archimède', 'Dynamomètre', 'Volume'],
        steps: [
          {
            title: '1) Définition de P’ (1 pt)',
            mathExpression: 'P’ est le poids apparent du solide immergé.',
            explanation: 'Il diminue grâce à la poussée vers le haut.',
          },
          {
            title: '2) Poussée d’Archimède P_A (2 pts)',
            mathExpression: `P_A = P − P’ = ${pAir} − ${pLiquide} = ${pa} N`,
            explanation: 'Force verticale dirigée vers le haut.',
          },
          {
            title: '3) Volume du bloc en cm³ (3 pts)',
            mathExpression: `V = P_A ÷ (ρ × g) = ${pa} ÷ 10 000 m³ = ${vCm3} cm³`,
            explanation: '1 m³ = 1 000 000 cm³.',
            subResult: `${vCm3} cm³`,
          },
        ],
      };
    }
    case 2: {
      // Énergie mécanique : chute libre depuis hauteur h -> vitesse v = sqrt(2*g*h)
      // Choisissons h tel que 2*10*h soit un carré parfait : h = 5*k^2 -> v = 10*k
      const k = scale; // 1, 2, 3, 4 => h = 5, 20, 45, 80 m ; v = 10, 20, 30, 40 m/s
      const h = 5 * k * k;
      const m = 2; // kg
      const ep = m * 10 * h;
      const v = 10 * k;
      return {
        chapterId: 'phys3-energie-mecanique',
        partLabel: 'Problème',
        title: 'Chute d’une bille & conservation d’énergie mécanique',
        points: 6,
        difficulty: 3,
        prompt:
          `Une bille d’acier de masse m = ${m} kg est lâchée sans vitesse initiale depuis une hauteur h = ${h} m au-dessus du sol (g = 10 N/kg ; frottements négligés).\n\n` +
          `1) Calcule l’énergie potentielle de pesanteur E_p et l’énergie mécanique E_m au départ. (2 pts)\n` +
          `2) Quelle forme d’énergie a pris le relais au moment exact de l’impact au sol ? (1 pt)\n` +
          `3) Par conservation de E_m, calcule la vitesse v d’arrivée au sol (en m/s). (3 pts)`,
        hint: `E_p = ${m} × 10 × ${h} = ${ep} J. Au sol, ½ m v² = ${ep} ⇒ v² = ${v * v}.`,
        correctAnswer: fmtAns(v),
        unit: 'm/s',
        explanationFinal: `E_m = ${ep} J conservée ; au sol v = ${v} m/s.`,
        themeTags: ['Énergie mécanique', 'Cinétique', 'Chute libre'],
        steps: [
          {
            title: '1) Énergie initiale (2 pts)',
            mathExpression: `E_c(0) = 0 J\nE_p(0) = m × g × h = ${m} × 10 × ${h} = ${ep} J\nE_m = ${ep} J`,
            explanation: 'Toute l’énergie est potentielle au départ.',
          },
          {
            title: '2) Conversion au sol (1 pt)',
            mathExpression: 'Au sol (h = 0), E_p = 0 J : toute l’énergie est devenue cinétique E_c.',
            explanation: 'E_c(sol) = E_m.',
          },
          {
            title: '3) Calcul de la vitesse (3 pts)',
            mathExpression: `½ × ${m} × v² = ${ep} ⇒ v² = ${v * v} ⇒ v = ${v} m/s`,
            explanation: 'Racine carrée exacte.',
            subResult: `${v} m/s`,
          },
        ],
      };
    }
    case 3: {
      // Lentille convergente : vergence C, distance focale f, formule de conjugaison
      // C = 10 δ => f = 10 cm. Objet à OA = -10*(k+1)/k ? Prenons f = 10 cm, p = 20 cm -> p' = 20 cm, gamma = -1 ;
      // ou f = 10*scale cm? Prenons p = 2*f => OA' = 2*f (image réelle inversée de même taille), ou p = 3*f/2 => p' = 3*f
      const fCm = 10 * scale; // 10, 20, 30, 40 cm
      const oa = 2 * fCm; // 2*f -> oa' = 2*f
      const ab = 3; // cm
      const oaPrime = 2 * fCm; // cm
      return {
        chapterId: 'phys3-lentilles-construction',
        partLabel: 'Problème',
        title: 'Banc d’optique : lentille convergente & formation d’image',
        points: 6,
        difficulty: 3,
        prompt:
          `On place un objet lumineux AB = ${ab} cm perpendiculairement à l’axe optique d’une lentille mince convergente de distance focale f = ${fCm} cm, à la distance OA = ${oa} cm en avant de la lentille.\n\n` +
          `1) Calcule la vergence C de cette lentille en dioptries (δ). (1,5 pt)\n` +
          `2) Décris les 3 rayons particuliers permettant de construire l’image A’B’. (1,5 pt)\n` +
          `3) L’objet étant placé à 2f de la lentille, à quelle distance OA’ de la lentille se forme l’image nette sur l’écran (en cm) ? Donne sa taille A’B’ et son sens. (3 pts)`,
        hint: `C = 1 ÷ f(m) = 1 ÷ ${fmtFr(fCm / 100)} ; à OA = 2f, l’image se forme à OA’ = 2f = ${oaPrime} cm, renversée et de même taille.`,
        correctAnswer: fmtAns(oaPrime),
        unit: 'cm',
        explanationFinal: `C = ${fmtFr(cleanNum(100 / fCm))} δ ; l’image réelle renversée A’B’ = ${ab} cm se forme à OA’ = ${oaPrime} cm.`,
        themeTags: ['Lentille convergente', 'Vergence', 'Optique'],
        steps: [
          {
            title: '1) Vergence de la lentille (1,5 pt)',
            mathExpression: `f = ${fCm} cm = ${fmtFr(fCm / 100)} m\nC = 1 ÷ f = ${fmtFr(cleanNum(100 / fCm))} δ`,
            explanation: 'Conversion obligatoire en mètres.',
          },
          {
            title: '2) Construction géométrique (1,5 pt)',
            mathExpression: 'Rayon // axe ➔ émerge par F’ ; Rayon par O ➔ non dévié ; Rayon par F ➔ émerge // axe.',
            explanation: 'L’intersection donne B’.',
          },
          {
            title: '3) Position et nature de l’image (3 pts)',
            mathExpression: `1/OA’ = 1/f − 1/OA = 1/${fCm} − 1/${oa} = 1/${oaPrime} ⇒ OA’ = ${oaPrime} cm\nγ = 1, image réelle renversée de taille ${ab} cm.`,
            explanation: 'Configuration symétrique classique du BEPC.',
            subResult: `${oaPrime} cm`,
          },
        ],
      };
    }
    case 4: {
      // Œil myope / hypermétrope & correction
      const cLentille = -scale; // -1, -2, -3, -4 δ (lentille divergente)
      const vergence = -2 * scale; // ou +2 * scale pour hypermétrope
      const isMyope = year % 2 === 0;
      const absV = 2 * scale;
      const fCm = cleanNum(100 / absV); // 50, 25, 16.67 -> prenons scale pair ou absV in [2, 4, 5, 10]
      const cleanV = [2, 4, 5, 10][scale - 1];
      const fClean = 100 / cleanV; // 50, 25, 20, 10 cm exact!
      void cLentille;
      void vergence;
      return {
        chapterId: 'phys3-oeil-instruments',
        partLabel: 'Problème',
        title: `Défaut de la vision (${isMyope ? 'myopie' : 'hypermétropie'}) & verre correcteur`,
        points: 6,
        difficulty: 2,
        prompt:
          `Un élève à ${city} présente le défaut visuel suivant : l’image d’un objet éloigné se forme ${
            isMyope ? 'EN AVANT de la rétine (œil trop convergent)' : 'EN ARRIÈRE de la rétine (œil pas assez convergent)'
          }.\n` +
          `L’ophtalmologue lui prescrit des verres correcteurs de distance focale f = ${fClean} cm (en valeur absolue).\n\n` +
          `1) Quel est le défaut de cet œil et par quel type de lentille (convergente ou divergente) le corrige-t-on ? (2 pts)\n` +
          `2) À quelle partie de l’appareil photo correspond le cristallin et la rétine dans l’œil réduit ? (1,5 pt)\n` +
          `3) Calcule la valeur absolue de la vergence |C| de ce verre en dioptries (δ). (2,5 pts)`,
        hint: `f = ${fClean} cm = ${fmtFr(fClean / 100)} m ➔ |C| = 1 ÷ f(m).`,
        correctAnswer: fmtAns(cleanV),
        unit: 'δ',
        explanationFinal: `${
          isMyope ? 'Myopie corrigée par lentille divergente' : 'Hypermétropie corrigée par lentille convergente'
        } ; |C| = ${cleanV} δ.`,
        themeTags: ['Œil réduit', 'Verres correcteurs', 'Vergence'],
        steps: [
          {
            title: '1) Diagnostic et correction (2 pts)',
            mathExpression: isMyope
              ? 'Image avant la rétine ➔ Myopie ➔ Lentille DIVERGENTE (C < 0)'
              : 'Image après la rétine ➔ Hypermétropie ➔ Lentille CONVERGENTE (C > 0)',
            explanation: 'Adaptation du foyer à la rétine.',
          },
          {
            title: '2) Modèle de l’œil réduit (1,5 pt)',
            mathExpression: 'Cristallin = lentille convergente ; Rétine = écran ; Iris = diaphragme.',
            explanation: 'Équivalence optique.',
          },
          {
            title: '3) Calcul de la vergence (2,5 pts)',
            mathExpression: `f = ${fClean} cm = ${fmtFr(fClean / 100)} m\n|C| = 1 ÷ ${fmtFr(fClean / 100)} = ${cleanV} δ`,
            explanation: 'En dioptries.',
            subResult: `${cleanV} δ`,
          },
        ],
      };
    }
    default: {
      // Équilibre d'un solide sur plan horizontal / ressort : T = P = k * x
      const kRaideur = 100; // N/m
      const m = 2 * scale; // kg => P = 20*scale N => allongement x = 0.2*scale m = 20*scale cm
      const p = m * 10;
      const xCm = (p / kRaideur) * 100;
      return {
        chapterId: 'phys3-actions-mecaniques',
        partLabel: 'Problème',
        title: 'Équilibre d’un solide suspendu à un ressort',
        points: 6,
        difficulty: 2,
        prompt:
          `Un ressort à spires non jointives de raideur k = ${kRaideur} N/m et de longueur à vide L₀ = 15 cm supporte à l’équilibre un solide de masse m = ${m} kg (g = 10 N/kg).\n\n` +
          `1) Énonce la condition d’équilibre d’un solide soumis à deux forces. (1,5 pt)\n` +
          `2) Calcule le poids P du solide (en N). (1,5 pt)\n` +
          `3) Calcule l’allongement ΔL = P ÷ k du ressort en mètres, puis sa longueur totale finale L en centimètres. (3 pts)`,
        hint: `P = ${p} N ➔ ΔL = ${p} ÷ 100 = ${fmtFr(p / 100)} m = ${xCm} cm ➔ L = 15 + ${xCm}.`,
        correctAnswer: fmtAns(15 + xCm),
        unit: 'cm',
        explanationFinal: `P = ${p} N, ΔL = ${xCm} cm et longueur finale L = ${15 + xCm} cm.`,
        themeTags: ['Équilibre 2 forces', 'Ressort', 'Poids'],
        steps: [
          {
            title: '1) Condition d’équilibre (1,5 pt)',
            mathExpression: 'Les deux forces ont même droite d’action, sens opposés et même intensité (T⃗ + P⃗ = 0⃗).',
            explanation: 'Théorème de l’équilibre à 2 forces.',
          },
          {
            title: '2) Poids du solide (1,5 pt)',
            mathExpression: `P = ${m} × 10 = ${p} N`,
            explanation: 'Intensité du poids et de la tension T.',
          },
          {
            title: '3) Longueur finale du ressort (3 pts)',
            mathExpression: `ΔL = ${p} ÷ ${kRaideur} = ${fmtFr(p / kRaideur)} m = ${xCm} cm\nL = L₀ + ΔL = 15 + ${xCm} = ${15 + xCm} cm`,
            explanation: 'Addition avec la longueur à vide.',
            subResult: `${15 + xCm} cm`,
          },
        ],
      };
    }
  }
}

function generatePhysicsGrid(): BepcArchivePaper[] {
  const seeds = [];
  for (let year = 1990; year <= 2026; year++) {
    for (let cIdx = 0; cIdx < COUNTRY_ORDER.length; cIdx++) {
      const countryId = COUNTRY_ORDER[cIdx];
      const ctx = BEPC_COUNTRY_CONTEXTS[countryId];
      const part1 = buildPhysicsChimie1(year, cIdx, ctx);
      const part2 = buildPhysicsChimie2(year, cIdx, ctx);
      const part3 = buildPhysicsElectricite(year, cIdx, ctx);
      const part4 = buildPhysicsProbleme(year, cIdx, ctx);

      seeds.push({
        year,
        countryId,
        duration: '2h00',
        isTrainingSubject: true,
        sourceNotice:
          'Sujet complet d’entraînement au format BEPC (4 exercices détaillés / 20 pts, reconstitué selon le programme du pays).',
        themeSummary: `${part1.title.split(' ')[0]} · ${part2.title.split(' ')[0]} · Électricité · ${part4.title.split(':')[0].trim()}`,
        parts: [part1, part2, part3, part4],
      });
    }
  }
  return buildArchivePapers('physique', seeds);
}

export const BEPC_FULL_GRID_PHYSICS_PAPERS: BepcArchivePaper[] = generatePhysicsGrid();
