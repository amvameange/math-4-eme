import { PhysicsLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const PHYSICS_TC_LABO_PART5: Record<string, PhysicsLaboExpSpec[]> = {
  // 13. ALCOOLS, ALDÉHYDES & CÉTONES (10)
  'physTc-alcools-carbonyles': [
    {
      id: 'pc-alc-1',
      shortTitle: 'Classes d’alcools I / II / III',
      title: 'Exp. 1 : Degré de substitution du carbone fonctionnel',
      goal: 'Distinguer alcool primaire, secondaire ou tertiaire selon le nombre de groupes R liés au C-OH.',
      formula: 'I : R-CH₂OH  |  II : R₁-CH(OH)-R₂  |  III : R₁R₂R₃C-OH',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Nb radicaux R sur C-OH', min: 1, max: 3, step: 1, defaultValue: 1, unit: 'R' },
        { label: 'Atomes C totaux n', min: 1, max: 5, step: 1, defaultValue: 4, unit: 'C' },
      ],
      evaluate: ([cls, n]) => {
        const names = [
          'Primaire (-CH₂OH) ⟹ Aldéhyde puis Acide',
          'Secondaire (>CH-OH) ⟹ Cétone uniquement',
          'Tertiaire (≡C-OH) ⟹ Aucune oxydation ménagée',
        ];
        const M = 14 * n + 18;
        return {
          headline: `Alcool de classe ${cls === 1 ? 'I' : cls === 2 ? 'II' : 'III'} · Masse molaire M = ${M} g/mol`,
          metrics: [
            { label: 'Classe identifiée', value: cls === 1 ? 'Primaire (I)' : cls === 2 ? 'Secondaire (II)' : 'Tertiaire (III)', accent: 'amber' },
            { label: 'Formule brute', value: `C_${n}H_${2 * n + 2}O`, accent: 'sky' },
            { label: 'Oxydation ménagée', value: cls === 3 ? 'Impossible' : cls === 2 ? 'Cétone' : 'Aldéhyde / Acide', accent: cls === 3 ? 'rose' : 'emerald' },
          ],
          conclusion: `${names[cls - 1]}. Il faut au moins un H porté par le carbone fonctionnel pour l’oxydation ménagée.`,
          svg: { bar1: cls * 33, bar2: 100 - cls * 20, label1: `Classe ${cls}`, label2: `M=${M}` },
        };
      },
    },
    {
      id: 'pc-alc-2',
      shortTitle: 'Isomères en C₄H₁₀O',
      title: 'Exp. 2 : Exploration des 4 isomères alcools du butanol',
      goal: 'Associer structure semi-développée, nom IUPAC et comportement oxydatif.',
      formula: 'C₄H₉-OH : 2 primaires, 1 secondaire, 1 tertiaire',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Isomère (1..4)', min: 1, max: 4, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([idx]) => {
        const items = [
          { nom: 'Butan-1-ol', cls: 'Primaire (I)', prod: 'Butanal / Ac. butanoïque', teb: 118 },
          { nom: '2-méthylpropan-1-ol', cls: 'Primaire (I)', prod: '2-méthylpropanal / Acide', teb: 108 },
          { nom: 'Butan-2-ol (chiral)', cls: 'Secondaire (II)', prod: 'Butanone', teb: 99 },
          { nom: '2-méthylpropan-2-ol', cls: 'Tertiaire (III)', prod: 'Aucun (MnO₄⁻ reste violet)', teb: 82 },
        ];
        const it = items[idx - 1];
        return {
          headline: `${it.nom} : ${it.cls} · T_éb = ${it.teb} °C`,
          metrics: [
            { label: 'Classe', value: it.cls, accent: 'amber' },
            { label: 'Produit oxydation', value: it.prod, accent: 'emerald' },
            { label: 'T° ébullition', value: `${it.teb} °C`, accent: 'sky' },
          ],
          conclusion: `Plus la chaîne carbonée est ramifiée, plus les interactions intermoléculaires diminuent et T_éb baisse.`,
          svg: { bar1: it.teb * 0.8, bar2: idx * 25, label1: `${it.teb}°C`, label2: it.cls.split(' ')[0] },
        };
      },
    },
    {
      id: 'pc-alc-3',
      shortTitle: 'Oxydation alcool I : défaut vs excès',
      title: 'Exp. 3 : Contrôle stœchiométrique de l’oxydation d’un alcool I',
      goal: 'Sélectionner l’aldéhyde (oxydant en défaut + distillation) ou l’acide carboxylique (oxydant en excès).',
      formula: '5 R-CH₂OH + 2 MnO₄⁻ + 6 H⁺ ⟶ 5 R-CHO + 2 Mn²⁺ + 8 H₂O',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Ratio oxydant / alcool', min: 0.2, max: 2.0, step: 0.2, defaultValue: 0.4, unit: 'n_ox/n_alc' },
      ],
      presets: [
        { label: 'Oxydant en défaut (0,4)', values: [0.4] },
        { label: 'Oxydant en excès (1,6)', values: [1.6] },
      ],
      evaluate: ([r]) => {
        const isAldehyde = r <= 0.6;
        return {
          headline: isAldehyde ? `Oxydant en défaut : formation majoritaire d’ALDÉHYDE R-CHO` : `Oxydant en excès : oxydation poussée jusqu’à l’ACIDE R-COOH`,
          metrics: [
            { label: 'Produit principal', value: isAldehyde ? 'Aldéhyde R-CHO' : 'Acide R-COOH', accent: isAldehyde ? 'sky' : 'rose' },
            { label: 'Condition TP', value: isAldehyde ? 'Distillation au fur et à mesure' : 'Chauffage à reflux', accent: 'amber' },
            { label: 'Couleur finale Mn²⁺', value: r >= 0.8 ? 'Violet persistant' : 'Incolore', accent: 'emerald' },
          ],
          conclusion: `Pour isoler l’aldéhyde, sa T_éb plus basse que l’alcool permet de le distiller dès sa formation.`,
          svg: { bar1: isAldehyde ? 85 : 15, bar2: isAldehyde ? 15 : 85, label1: 'Aldéhyde', label2: 'Acide' },
        };
      },
    },
    {
      id: 'pc-alc-4',
      shortTitle: 'Oxydation alcool II → Cétone',
      title: 'Exp. 4 : Bilan redox Cr₂O₇²⁻ / alcool secondaire',
      goal: 'Équilibrer l’équation redox avec le dichromate orangé devenant vert (Cr³⁺).',
      formula: '3 R₁-CH(OH)-R₂ + Cr₂O₇²⁻ + 8 H₃O⁺ ⟶ 3 R₁-CO-R₂ + 2 Cr³⁺ + 15 H₂O',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Masse alcool II', min: 1.5, max: 15, step: 1.5, defaultValue: 7.4, unit: 'g' },
        { label: 'Rendement TP', min: 50, max: 95, step: 5, defaultValue: 80, unit: '%' },
      ],
      evaluate: ([mAlc, rdt]) => {
        const nAlc = mAlc / 74;
        const mCet = nAlc * 72 * (rdt / 100);
        return {
          headline: `Butan-2-ol (${f(mAlc, 1)} g) ⟹ Butanone obtenue : ${f(mCet)} g`,
          metrics: [
            { label: 'Masse cétone', value: `${f(mCet)} g`, accent: 'emerald' },
            { label: 'Dichromate Cr₂O₇²⁻ min', value: `${f((nAlc / 3) * 1000, 1)} mmol`, accent: 'amber' },
            { label: 'Virage couleur', value: 'Orangé → Vert (Cr³⁺)', accent: 'sky' },
          ],
          conclusion: `Contrairement à l’aldéhyde, la cétone formée ne s’oxyde pas davantage par ménagement.`,
          svg: { bar1: 100, bar2: rdt, label1: 'Théorique', label2: `Obtenu ${rdt}%` },
        };
      },
    },
    {
      id: 'pc-alc-5',
      shortTitle: 'Tests DNPH, Fehling & Tollens',
      title: 'Exp. 5 : Clef dichotomique des tests d’identification',
      goal: 'Identifier la fonction exacte d’un flacon inconnu par 3 réactifs.',
      formula: 'DNPH (+) = Carbonyle C=O  |  Fehling / Tollens (+) = Aldéhyde uniquement',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Molécule (1=Éthanal, 2=Propanone, 3=Éthanol, 4=Acide)', min: 1, max: 4, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([idx]) => {
        const cases = [
          { name: 'Aldéhyde (Éthanal)', dnph: 'Jaune-orangé (+)', feh: 'Rouge brique Cu₂O (+)', tol: 'Miroir d’argent Ag (+)' },
          { name: 'Cétone (Propanone)', dnph: 'Jaune-orangé (+)', feh: 'Reste bleu (-)', tol: 'Reste limpide (-)' },
          { name: 'Alcool (Éthanol)', dnph: 'Négatif (-)', feh: 'Négatif (-)', tol: 'Négatif (-)' },
          { name: 'Acide carboxylique', dnph: 'Négatif (-)', feh: 'pH acide (<3)', tol: 'Négatif (-)' },
        ];
        const c = cases[idx - 1];
        return {
          headline: `${c.name} : DNPH ${c.dnph.split(' ')[1]} · Fehling ${c.feh.split(' ').pop()}`,
          metrics: [
            { label: 'Test 2,4-DNPH', value: c.dnph, accent: 'amber' },
            { label: 'Liqueur de Fehling', value: c.feh, accent: idx === 1 ? 'rose' : 'sky' },
            { label: 'Réactif de Tollens', value: c.tol, accent: idx === 1 ? 'emerald' : 'sky' },
          ],
          conclusion: `La 2,4-DNPH détecte le groupe C=O ; Fehling et Tollens séparent ensuite l’aldéhyde réducteur de la cétone.`,
          svg: { bar1: idx <= 2 ? 95 : 10, bar2: idx === 1 ? 95 : 10, label1: 'DNPH', label2: 'Fehling' },
        };
      },
    },
    {
      id: 'pc-alc-6',
      shortTitle: 'Hydratation d’un alcène',
      title: 'Exp. 6 : Synthèse d’alcool à partir d’un alcène (Markovnikov)',
      goal: 'Prévoir l’alcool majoritaire lors de l’addition de H₂O sur un alcène dissymétrique.',
      formula: 'R-CH=CH₂ + H₂O —(H₂SO₄)→ R-CH(OH)-CH₃ (majoritaire)',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Alcène (1=Éthène, 2=Propène, 3=2-méthylpropène)', min: 1, max: 3, step: 1, defaultValue: 2, unit: '' },
      ],
      evaluate: ([idx]) => {
        const map = [
          { alcene: 'Éthène', maj: 'Éthanol (unique)', cls: 'Primaire (I)' },
          { alcene: 'Propène', maj: 'Propan-2-ol (85%)', cls: 'Secondaire (II)' },
          { alcene: '2-méthylpropène', maj: '2-méthylpropan-2-ol', cls: 'Tertiaire (III)' },
        ];
        const it = map[idx - 1];
        return {
          headline: `Hydratation du ${it.alcene} ⟹ ${it.maj} (${it.cls})`,
          metrics: [
            { label: 'Produit majoritaire', value: it.maj, accent: 'emerald' },
            { label: 'Classe obtenue', value: it.cls, accent: 'amber' },
            { label: 'Règle appliquée', value: 'Markovnikov (H sur C le plus hydrogéné)', accent: 'sky' },
          ],
          conclusion: `L’atome H⁺ se fixe sur le carbone doublement lié le plus hydrogéné ; -OH se fixe sur le plus substitué.`,
          svg: { bar1: idx === 1 ? 100 : 88, bar2: idx === 1 ? 0 : 12, label1: 'Majoritaire', label2: 'Minoritaire' },
        };
      },
    },
    {
      id: 'pc-alc-7',
      shortTitle: 'Déshydratation catalytique',
      title: 'Exp. 7 : Alcool → Alcène + H₂O (Al₂O₃ à 350 °C)',
      goal: 'Calculer la masse d’alcène produite par déshydratation intramoléculaire.',
      formula: 'C_n H_{2n+1}-OH —(Al₂O₃, 350°C)→ C_n H_{2n} + H₂O',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Masse alcool m', min: 5, max: 50, step: 5, defaultValue: 23, unit: 'g' },
        { label: 'Rendement', min: 40, max: 95, step: 5, defaultValue: 75, unit: '%' },
      ],
      evaluate: ([mAlc, rdt]) => {
        const nMol = mAlc / 46;
        const vGaz = nMol * 24 * (rdt / 100);
        return {
          headline: `${mAlc} g d’éthanol ⟹ V(éthylène) = ${f(vGaz)} L (V_m = 24 L/mol)`,
          metrics: [
            { label: 'Volume éthène', value: `${f(vGaz)} L`, accent: 'emerald' },
            { label: 'Masse eau éliminée', value: `${f(nMol * 18 * (rdt / 100))} g`, accent: 'sky' },
            { label: 'Orientation à 140°C', value: 'Éther-oxyde (intermol.)', accent: 'amber' },
          ],
          conclusion: `Vers 350 °C sur alumine, la déshydratation est intramoléculaire (alcène) ; vers 140 °C avec H₂SO₄ elle donne un éther.`,
          svg: { bar1: 100, bar2: rdt, label1: '100% théo', label2: `Réel ${rdt}%` },
        };
      },
    },
    {
      id: 'pc-alc-8',
      shortTitle: 'Alcootest au dichromate',
      title: 'Exp. 8 : Dosage d’éthanol dans le sang ou l’air expiré',
      goal: 'Relier l’excès de dichromate réduit au titre massique légal d’alcoolémie.',
      formula: '3 CH₃CH₂OH + 2 Cr₂O₇²⁻ + 16 H⁺ ⟶ 3 CH₃COOH + 4 Cr³⁺ + 11 H₂O',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Cr₂O₇²⁻ consommé', min: 0.05, max: 0.5, step: 0.05, defaultValue: 0.15, unit: 'mmol' },
      ],
      evaluate: ([nCr]) => {
        const nEth = (3 / 2) * nCr;
        const mMg = nEth * 46;
        const gPerL = mMg / 10;
        return {
          headline: `Alcoolémie estimée ≈ ${f(gPerL)} g/L (${gPerL > 0.5 ? 'Positif > 0,5 g/L' : 'Sous seuil 0,5 g/L'})`,
          metrics: [
            { label: 'Éthanol dosé', value: `${f(mMg, 1)} mg`, accent: 'amber' },
            { label: 'Taux estimé (10 mL)', value: `${f(gPerL)} g/L`, accent: gPerL > 0.5 ? 'rose' : 'emerald' },
            { label: 'Ratio stœchio', value: '3 éthanol / 2 Cr₂O₇²⁻', accent: 'sky' },
          ],
          conclusion: `L’éthanol est oxydé complètement en acide éthanoïque tandis que Cr₂O₇²⁻ orangé vire au Cr³⁺ vert.`,
          svg: { bar1: Math.min(100, gPerL * 60), bar2: 30, label1: `${f(gPerL)} g/L`, label2: 'Seuil 0,5' },
        };
      },
    },
    {
      id: 'pc-alc-9',
      shortTitle: 'Sodium métallique sur alcool',
      title: 'Exp. 9 : Dégagement de dihydrogène R-OH + Na → R-O⁻ + Na⁺ + ½ H₂',
      goal: 'Déterminer la masse molaire M d’un alcool inconnu à partir du volume de H₂ dégagé.',
      formula: 'n(alcool) = 2 · n(H₂) = 2 · (V_{H₂} / V_m)  ⟹  M = m / n(alcool)',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Masse alcool m', min: 1.0, max: 10.0, step: 0.5, defaultValue: 3.0, unit: 'g' },
        { label: 'Volume H₂ dégagé', min: 0.2, max: 2.0, step: 0.1, defaultValue: 0.6, unit: 'L' },
      ],
      evaluate: ([m, Vh2]) => {
        const nAlc = 2 * (Vh2 / 24);
        const M = m / nAlc;
        const nC = Math.max(1, Math.round((M - 18) / 14));
        return {
          headline: `M ≈ ${f(M, 1)} g/mol ⟹ Alcool probable en C_${nC} (M_théo = ${14 * nC + 18} g/mol)`,
          metrics: [
            { label: 'Masse molaire M', value: `${f(M, 1)} g/mol`, accent: 'amber' },
            { label: 'Quantité alcool', value: `${f(nAlc * 1000, 1)} mmol`, accent: 'sky' },
            { label: 'Formule brute', value: `C_${nC}H_${2 * nC + 2}O`, accent: 'emerald' },
          ],
          conclusion: `Les 3 classes d’alcools réagissent avec le sodium en formant un alcoolate R-O⁻ basique et ½ H₂.`,
          svg: { bar1: Math.min(100, M), bar2: nC * 20, label1: `M=${f(M, 0)}`, label2: `C_${nC}` },
        };
      },
    },
    {
      id: 'pc-alc-10',
      shortTitle: 'Organigramme d’identification',
      title: 'Exp. 10 : Synthèse BAC C — Détermination complète d’un composé A',
      goal: 'Combiner combustion/densité, oxydation ménagée et test DNPH/Fehling.',
      formula: 'M = 29 · d (densité vapeur)  |  14n + 18 = M_alcool  |  14n + 16 = M_carbonyle',
      visualKind: 'organic-bars',
      sliders: [
        { label: 'Densité vapeur d', min: 1.5, max: 3.1, step: 0.1, defaultValue: 2.0, unit: '' },
      ],
      evaluate: ([d]) => {
        const M = 29 * d;
        const nAlc = Math.round((M - 18) / 14);
        const nCarb = Math.round((M - 16) / 14);
        return {
          headline: `d = ${f(d, 1)} ⟹ M ≈ ${f(M, 1)} g/mol (Alcool C_${nAlc} ou Carbonyle C_${nCarb})`,
          metrics: [
            { label: 'Masse molaire M', value: `${f(M, 1)} g/mol`, accent: 'amber' },
            { label: 'Si alcool', value: `C_${nAlc}H_${2 * nAlc + 2}O`, accent: 'emerald' },
            { label: 'Si aldéhyde/cétone', value: `C_${nCarb}H_${2 * nCarb}O`, accent: 'sky' },
          ],
          conclusion: `Toujours croiser la masse molaire M avec la réactivité (Na, MnO₄⁻, DNPH, Fehling) pour trancher l’isomère exact.`,
          svg: { bar1: Math.min(100, M), bar2: 60, label1: `M=${f(M, 0)}`, label2: `C_${nAlc}/C_${nCarb}` },
        };
      },
    },
  ],

  // 14. ESTÉRIFICATION, HYDROLYSE & SAPONIFICATION (10)
  'physTc-esterification-saponification': [
    {
      id: 'pc-est-1',
      shortTitle: 'Équilibre 67 % (mélange 1:1)',
      title: 'Exp. 1 : Limite d’estérification directe selon la classe d’alcool',
      goal: 'Comparer les rendements limites 67 % (I), 60 % (II) et ~5 % (III) en mélange équimolaire.',
      formula: 'R-COOH + R’-OH ⇌ R-COOR’ + H₂O  (K ≈ 4 pour alcool I)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Classe alcool (1=I, 2=II, 3=III)', min: 1, max: 3, step: 1, defaultValue: 1, unit: '' },
        { label: 'Quantité initiale n₀', min: 0.5, max: 3.0, step: 0.5, defaultValue: 1.0, unit: 'mol' },
      ],
      evaluate: ([cls, n0]) => {
        const rates = [66.7, 60, 5];
        const r = rates[cls - 1];
        const nEster = (n0 * r) / 100;
        return {
          headline: `Alcool classe ${cls} : rendement limite = ${f(r, 1)} % (n_ester = ${f(nEster)} mol)`,
          metrics: [
            { label: 'Rendement limite', value: `${f(r, 1)} %`, accent: cls === 3 ? 'rose' : 'emerald' },
            { label: 'Ester formé', value: `${f(nEster)} mol`, accent: 'amber' },
            { label: 'Acide restant', value: `${f(n0 - nEster)} mol`, accent: 'sky' },
          ],
          conclusion: `L’estérification directe est lente, limitée et athermique (la température ne change pas la limite 67 %).`,
          svg: { bar1: r, bar2: 100 - r, label1: `Ester ${f(r, 0)}%`, label2: `Restant` },
        };
      },
    },
    {
      id: 'pc-est-2',
      shortTitle: 'Déplacement d’équilibre (excès)',
      title: 'Exp. 2 : Augmentation du rendement par excès d’un réactif',
      goal: 'Calculer x_éq à partir de K = [Ester][Eau] / ([Acide][Alcool]) = 4.',
      formula: 'K = x² / [(n_a - x)(n_b - x)] = 4',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Moles acide n_a', min: 1, max: 1, step: 1, defaultValue: 1, unit: 'mol' },
        { label: 'Moles alcool n_b', min: 1, max: 8, step: 1, defaultValue: 3, unit: 'mol' },
      ],
      evaluate: ([na, nb]) => {
        // 3x² - 4(na+nb)x + 4*na*nb = 0
        const A = 3;
        const B = -4 * (na + nb);
        const C = 4 * na * nb;
        const x = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
        const rdt = (x / Math.min(na, nb)) * 100;
        return {
          headline: `Mélange ${na}:${nb} ⟹ x_éq = ${f(x, 3)} mol · Rendement = ${f(rdt, 1)} %`,
          metrics: [
            { label: 'Rendement sur défaut', value: `${f(rdt, 1)} %`, accent: 'emerald' },
            { label: 'Quotient K', value: '4,00 (invariant)', accent: 'amber' },
            { label: 'Autre astuce', value: 'Distiller l’eau (Dean-Stark)', accent: 'sky' },
          ],
          conclusion: `En mettant l’alcool (ou l’acide) en large excès (ex. 1:5), le rendement dépasse 94 %.`,
          svg: { bar1: rdt, bar2: 100 - rdt, label1: `Rdt ${f(rdt, 1)}%`, label2: 'Acide rest.' },
        };
      },
    },
    {
      id: 'pc-est-3',
      shortTitle: 'Hydrolyse de l’ester',
      title: 'Exp. 3 : Réaction inverse Ester + H₂O ⇌ Acide + Alcool',
      goal: 'Retrouver l’état d’équilibre identique (33 % ester, 67 % ou inverse) en partant de 1 mol Ester + 1 mol Eau.',
      formula: 'K’ = 1/K = 0,25  ⟹  (1-x)² / x² = 4  ⟹  33,3 % hydrolysé (66,7 % ester restant)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Moles d’eau ajoutées', min: 1, max: 10, step: 1, defaultValue: 1, unit: 'mol' },
      ],
      evaluate: ([nw]) => {
        // K' = y^2 / ((1-y)(nw-y)) = 0.25 => y^2 = 0.25(nw - (1+nw)y + y^2) => 0.75y^2 + 0.25(1+nw)y - 0.25nw = 0
        const A = 0.75;
        const B = 0.25 * (1 + nw);
        const C = -0.25 * nw;
        const y = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
        const pctHyd = y * 100;
        return {
          headline: `1 mol Ester + ${nw} mol Eau ⟹ ${f(pctHyd, 1)} % hydrolysé (Reste ${f(100 - pctHyd, 1)} % ester)`,
          metrics: [
            { label: 'Taux d’hydrolyse', value: `${f(pctHyd, 1)} %`, accent: 'sky' },
            { label: 'Ester résiduel', value: `${f(100 - pctHyd, 1)} %`, accent: 'amber' },
            { label: 'Catalyseur', value: 'Ions H₃O⁺ (H₂SO₄)', accent: 'emerald' },
          ],
          conclusion: `En mélange 1:1 Ester + Eau, on aboutit exactement à la même composition (66,7 % ester, 33,3 % acide) qu’en sens direct.`,
          svg: { bar1: pctHyd, bar2: 100 - pctHyd, label1: 'Hydrolysé', label2: 'Ester rest.' },
        };
      },
    },
    {
      id: 'pc-est-4',
      shortTitle: 'Dosage cinétique de l’ester formé',
      title: 'Exp. 4 : Suivi par titrage acido-basique de l’acide restant',
      goal: 'Déduire l’avancement x(t) = n_0(acide) - n_restant(acide) à partir de V_{bE}.',
      formula: 'n_ester(t) = n₀(acide) - C_b · V_{bE}(t)',
      visualKind: 'kinetics-curve',
      sliders: [
        { label: 'Volume NaOH (1 M) V_{bE}', min: 3.3, max: 10.0, step: 0.5, defaultValue: 6.0, unit: 'mL' },
      ],
      evaluate: ([Vbe]) => {
        const n0 = 10; // mmol
        const nRest = Vbe;
        const nEster = Math.max(0, n0 - nRest);
        return {
          headline: `V_{bE} = ${f(Vbe, 1)} mL ⟹ n_rest = ${f(nRest, 1)} mmol · Ester formé = ${f(nEster, 1)} mmol`,
          metrics: [
            { label: 'Ester formé', value: `${f(nEster, 1)} mmol`, accent: 'emerald' },
            { label: 'Avancement', value: `${f((nEster / n0) * 100, 1)} %`, accent: 'amber' },
            { label: 'Note TP', value: 'V_{bE} exclut H₂SO₄ cat.', accent: 'sky' },
          ],
          conclusion: `On verse la soude rapidement après trempe glacée pour ne pas déplacer l’équilibre par saponification.`,
          svg: { t: (nEster / 6.7) * 10, tHalf: 3, kRate: 0.22, ratio: nEster / 6.7 },
        };
      },
    },
    {
      id: 'pc-est-5',
      shortTitle: 'Chlorure d’acyle R-COCl',
      title: 'Exp. 5 : Synthèse rapide et totale par chlorure d’acyle',
      goal: 'Comparer la réaction totale R-COCl + R’-OH → Ester + HCl(g) à la voie acide.',
      formula: 'R-COCl + R’-OH ⟶ R-COOR’ + HCl(g)  (totale, rapide, exothermique)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Moles R-COCl', min: 0.1, max: 1.0, step: 0.1, defaultValue: 0.5, unit: 'mol' },
      ],
      evaluate: ([n]) => {
        const vHCl = n * 24;
        return {
          headline: `${f(n, 1)} mol R-COCl ⟹ ${f(n, 1)} mol d’ester (100 %) + ${f(vHCl, 1)} L HCl(g)`,
          metrics: [
            { label: 'Rendement théorique', value: '100 % (Totale)', accent: 'emerald' },
            { label: 'Gaz dégagé HCl', value: `${f(vHCl, 1)} L`, accent: 'rose' },
            { label: 'Précaution', value: 'Travail à sec sous hotte', accent: 'amber' },
          ],
          conclusion: `Le dégagement de HCl gazeux empêche tout retour en arrière ; la réaction est instantanée même sans chauffage.`,
          svg: { bar1: 100, bar2: 67, label1: 'Chlorure 100%', label2: 'Acide 67%' },
        };
      },
    },
    {
      id: 'pc-est-6',
      shortTitle: 'Anhydride d’acide (RCO)₂O',
      title: 'Exp. 6 : Synthèse de l’aspirine par anhydride éthanoïque',
      goal: 'Calculer la masse d’aspirine formée à partir de l’acide salicylique et (CH₃CO)₂O.',
      formula: 'Ac. salicylique + (CH₃CO)₂O ⟶ Aspirine + CH₃COOH  (Totale)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Masse acide salicylique', min: 2, max: 20, step: 2, defaultValue: 10, unit: 'g' },
        { label: 'Rendement purification', min: 60, max: 95, step: 5, defaultValue: 85, unit: '%' },
      ],
      evaluate: ([mSal, rdt]) => {
        const n = mSal / 138;
        const mAsp = n * 180 * (rdt / 100);
        return {
          headline: `${mSal} g acide salicylique ⟹ ${f(mAsp)} g d’aspirine purifiée`,
          metrics: [
            { label: 'Masse d’aspirine', value: `${f(mAsp)} g`, accent: 'emerald' },
            { label: 'Coproduit formé', value: 'Acide éthanoïque', accent: 'sky' },
            { label: 'Test pureté FeCl₃', value: 'Absence violet', accent: 'amber' },
          ],
          conclusion: `On préfère l’anhydride au chlorure d’acyle en industrie car il ne dégage pas de HCl corrosif.`,
          svg: { bar1: 100, bar2: rdt, label1: 'Théorique', label2: `Purifié ${rdt}%` },
        };
      },
    },
    {
      id: 'pc-est-7',
      shortTitle: 'Saponification & Savon',
      title: 'Exp. 7 : Hydrolyse basique totale d’un ester ou triesters',
      goal: 'Équilibrer Ester + OH⁻ → Carboxylate (savon) + Alcool.',
      formula: 'R-COOR’ + OH⁻ —(Δ)→ R-COO⁻ + R’-OH  (Totale et lente)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Moles corps gras (triester)', min: 0.1, max: 1.0, step: 0.1, defaultValue: 0.2, unit: 'mol' },
      ],
      evaluate: ([nTri]) => {
        const nNaOH = 3 * nTri;
        const mSavon = nNaOH * 306;
        return {
          headline: `${f(nTri, 1)} mol triesters + ${f(nNaOH, 1)} mol NaOH ⟹ ${f(mSavon, 1)} g savon + ${f(nTri * 92, 1)} g glycérol`,
          metrics: [
            { label: 'Soude nécessaire (3×)', value: `${f(nNaOH, 1)} mol`, accent: 'amber' },
            { label: 'Masse savon (C₁₈)', value: `${f(mSavon, 1)} g`, accent: 'emerald' },
            { label: 'Glycérol formé', value: `${f(nTri * 92, 1)} g`, accent: 'sky' },
          ],
          conclusion: `Contrairement à l’hydrolyse acide, la saponification est totale car l’ion carboxylate R-COO⁻ est une base très faible.`,
          svg: { bar1: 100, bar2: 75, label1: 'Savon 100%', label2: 'Glycérol' },
        };
      },
    },
    {
      id: 'pc-est-8',
      shortTitle: 'Relargage en eau salée',
      title: 'Exp. 8 : Précipitation du savon par NaCl saturé',
      goal: 'Expliquer l’effet d’ion commun [Na⁺] sur la solubilité de R-COO⁻Na⁺.',
      formula: 'R-COONa(aq) ⇌ R-COO⁻ + Na⁺  |  Ajout NaCl : [Na⁺] ↑ ⟹ précipitation',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Saturation en NaCl', min: 0, max: 100, step: 10, defaultValue: 90, unit: '%' },
      ],
      evaluate: ([salPct]) => {
        const recup = Math.min(98, 25 + salPct * 0.72);
        return {
          headline: `Eau salée à ${salPct} % ⟹ Savon solide récupéré sur filtre : ${f(recup, 0)} %`,
          metrics: [
            { label: 'Savon solide isolé', value: `${f(recup, 0)} %`, accent: 'emerald' },
            { label: 'Glycérol & soude excès', value: 'Restent dissous (filtrat)', accent: 'sky' },
            { label: 'Rôle de NaCl', value: 'Relargage (effet ion Na⁺)', accent: 'amber' },
          ],
          conclusion: `Le savon est très peu soluble dans l’eau salée froide alors que le glycérol reste en phase aqueuse.`,
          svg: { bar1: recup, bar2: 100 - recup, label1: 'Savon solide', label2: 'Dissous' },
        };
      },
    },
    {
      id: 'pc-est-9',
      shortTitle: 'Structure amphiphile & micelles',
      title: 'Exp. 9 : Pouvoir détergent (tête hydrophile / queue lipophile)',
      goal: 'Modéliser la capture d’une gouttelette de graisse et l’effet de l’eau dure (Ca²⁺).',
      formula: '2 R-COO⁻ + Ca²⁺ ⟶ (R-COO)₂Ca (s)  (précipité calcaire en eau dure)',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Dureté eau [Ca²⁺]', min: 0, max: 5, step: 0.5, defaultValue: 0.5, unit: 'mmol/L' },
      ],
      evaluate: ([ca]) => {
        const eff = Math.max(20, 100 - ca * 15);
        return {
          headline: `Dureté ${f(ca, 1)} mmol/L ⟹ Pouvoir moussant conservé à ${f(eff, 0)} %`,
          metrics: [
            { label: 'Efficacité détergente', value: `${f(eff, 0)} %`, accent: eff > 70 ? 'emerald' : 'rose' },
            { label: 'Queue carbonée C₁₇', value: 'Lipophile (vers la graisse)', accent: 'amber' },
            { label: 'Tête -COO⁻', value: 'Hydrophile (vers l’eau)', accent: 'sky' },
          ],
          conclusion: `En eau très calcaire ou acide, le savon précipite ; en milieu neutre/doux il forme des micelles émulsionnantes.`,
          svg: { bar1: eff, bar2: 100 - eff, label1: 'Actif', label2: 'Précipité' },
        };
      },
    },
    {
      id: 'pc-est-10',
      shortTitle: 'Synthèse d’un arôme (banane/poire)',
      title: 'Exp. 10 : Synthèse BAC C — Éthanoate de 3-méthylbutyle (arôme banane)',
      goal: 'Nommer l’ester, écrire l’équation de synthèse et calculer la masse obtenue après décantation.',
      formula: 'CH₃COOH + (CH₃)₂CH-CH₂-CH₂OH ⇌ CH₃COO-CH₂-CH₂-CH(CH₃)₂ + H₂O',
      visualKind: 'energy-bars',
      sliders: [
        { label: 'Moles acide (excès)', min: 0.2, max: 1.0, step: 0.1, defaultValue: 0.6, unit: 'mol' },
        { label: 'Moles alcool isoamylique', min: 0.1, max: 0.5, step: 0.1, defaultValue: 0.2, unit: 'mol' },
      ],
      evaluate: ([na, nb]) => {
        const A = 3;
        const B = -4 * (na + nb);
        const C = 4 * na * nb;
        const x = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
        const mEster = x * 130;
        const rdt = (x / Math.min(na, nb)) * 100;
        return {
          headline: `Ester formé : ${f(mEster)} g (rendement = ${f(rdt, 1)} %)`,
          metrics: [
            { label: 'Masse ester (M=130)', value: `${f(mEster)} g`, accent: 'emerald' },
            { label: 'Rendement', value: `${f(rdt, 1)} %`, accent: 'amber' },
            { label: 'Séparation ampoule', value: 'Phase organique surnageante', accent: 'sky' },
          ],
          conclusion: `On élimine l’acide résiduel dans l’ampoule à décanter par lavage au hydrogénocarbonate NaHCO₃.`,
          svg: { bar1: rdt, bar2: 100 - rdt, label1: `Ester ${f(rdt, 0)}%`, label2: 'Perte' },
        };
      },
    },
  ],
};
