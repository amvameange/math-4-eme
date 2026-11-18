import { MathLaboExpSpec } from './laboTypes';

const f = (n: number, d = 2): string => Number(n.toFixed(d)).toString().replace('.', ',');

export const MATH_TC_LABO_PART5: Record<string, MathLaboExpSpec[]> = {
  // 13. ISOMÉTRIES, TRANSFORMATIONS & SIMILITUDES PLANES (10)
  'mathTc-isometries-similitudes': [
    {
      id: 'mc-iso-1',
      shortTitle: '2 réflexions sécantes s_Δ’ ◦ s_Δ',
      title: 'Exp. 1 : Composition de 2 symétries axiales sécantes en Ω',
      goal: 'Vérifier que s_Δ’ ◦ s_Δ est une rotation de centre Ω et d’angle double 2(u⃗, u⃗’).',
      formula: 'Δ ∩ Δ’ = {Ω}  ⟹  s_Δ’ ◦ s_Δ = r(Ω ; 2α)  avec  α = (u⃗_Δ, u⃗_Δ’) [π]',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Angle α entre Δ et Δ’', min: 15, max: 90, step: 15, defaultValue: 45, unit: '°' },
      ],
      evaluate: ([alpha]) => {
        const rotAngle = (2 * alpha) % 360;
        return {
          headline: `s_Δ’ ◦ s_Δ = Rotation(Ω, ${rotAngle}°) · Déplacement (conserve orientation)`,
          metrics: [
            { label: 'Angle rotation 2α', value: `${rotAngle}°`, accent: 'amber' },
            { label: 'Centre invariant', value: 'Ω = Δ ∩ Δ’', accent: 'sky' },
            { label: 'Cas α = 90° (Δ ⊥ Δ’)', value: 'Symétrie centrale s_Ω', accent: 'emerald' },
          ],
          conclusion: `Deux antidéplacements composés donnent toujours un déplacement ; attention à l’ordre s_Δ’ ◦ s_Δ ≠ s_Δ ◦ s_Δ’ !`,
          svg: { k: 1, angleDeg: rotAngle, kind: 'rot' },
        };
      },
    },
    {
      id: 'mc-iso-2',
      shortTitle: '2 réflexions parallèles',
      title: 'Exp. 2 : Translation de vecteur 2 HH’⃗ issue de s_Δ’ ◦ s_Δ',
      goal: 'Mesurer la translation perpendiculaire aux deux droites parallèles Δ et Δ’.',
      formula: 'Δ // Δ’  ⟹  s_Δ’ ◦ s_Δ = t(2 HH’⃗)  avec H ∈ Δ, H’ ∈ Δ’, (HH’) ⊥ Δ',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Écart d(Δ, Δ’)', min: 1, max: 6, step: 0.5, defaultValue: 2.5, unit: 'cm' },
      ],
      evaluate: ([d]) => {
        return {
          headline: `Δ // Δ’ distantes de ${f(d, 1)} cm ⟹ Translation de norme 2d = ${f(2 * d, 1)} cm`,
          metrics: [
            { label: 'Norme vecteur ||u⃗||', value: `${f(2 * d, 1)} cm`, accent: 'emerald' },
            { label: 'Direction', value: 'Perpendiculaire à Δ, Δ’', accent: 'sky' },
            { label: 'Points invariants', value: d === 0 ? 'Tout Δ' : 'Aucun (∅)', accent: 'amber' },
          ],
          conclusion: `Réciproquement, toute rotation ou translation se décompose d’une infinité de façons en produit de 2 réflexions.`,
          svg: { k: 1, angleDeg: 0, shift: 2 * d, kind: 'trans' },
        };
      },
    },
    {
      id: 'mc-iso-3',
      shortTitle: 'Décomposition d’une symétrie glissée',
      title: 'Exp. 3 : Antidéplacement sans point fixe s_Δ ◦ t(u⃗)',
      goal: 'Retrouver l’axe invariant unique Δ et le vecteur directeur u⃗ colinéaire à Δ.',
      formula: 'f = t_u⃗ ◦ s_Δ = s_Δ ◦ t_u⃗ (u⃗ // Δ)  |  f ◦ f = t_{2u⃗}',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Glissement ||u⃗||', min: 0, max: 5, step: 0.5, defaultValue: 2, unit: 'cm' },
        { label: 'Angle axe Δ', min: 0, max: 90, step: 15, defaultValue: 30, unit: '°' },
      ],
      evaluate: ([u, ang]) => {
        const pureReflect = u === 0;
        return {
          headline: pureReflect ? `u⃗ = 0⃗ : Réflexion pure d’axe Δ (${ang}°)` : `Symétrie glissée : axe à ${ang}°, glissement ${f(u, 1)} cm · f² = t(2u⃗)`,
          metrics: [
            { label: 'Nature', value: pureReflect ? 'Réflexion (axe fixe)' : 'Symétrie glissée (0 pt fixe)', accent: 'amber' },
            { label: 'Carré f ◦ f', value: `Translation de ${f(2 * u, 1)} cm`, accent: 'emerald' },
            { label: 'Milieu [MM’]', value: 'Appartient toujours à Δ !', accent: 'sky' },
          ],
          conclusion: `Propriété clé BAC C : pour toute symétrie glissée f, le milieu de [M f(M)] décrit l’axe Δ ; de plus f(f(M)) - M = 2 u⃗.`,
          svg: { k: 1, angleDeg: ang, shift: u, kind: 'reflect' },
        };
      },
    },
    {
      id: 'mc-iso-4',
      shortTitle: 'Classification par points invariants',
      title: 'Exp. 4 : Théorème des 3 points non alignés (isométries)',
      goal: 'Identifier immédiatement une isométrie selon le nombre de points fixes.',
      formula: '≥3 non alignés : Id | 2 pts A,B : s_(AB) | 1 pt Ω : Rotation (ou s_Δ) | 0 pt : Trans. / Sym. glissée',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Nb points fixes (0..3)', min: 0, max: 3, step: 1, defaultValue: 1, unit: 'pts' },
        { label: 'Type (1=Dépl., 2=Antidépl.)', min: 1, max: 2, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([nPts, kind]) => {
        const res =
          nPts >= 3 ? 'Identité du plan (Id)' :
          nPts === 2 ? 'Réflexion d’axe (AB) (antidépl.)' :
          nPts === 1 ? (kind === 1 ? 'Rotation de centre Ω' : 'Réflexion (axe passant par Ω)') :
          kind === 1 ? 'Translation de vecteur u⃗ ≠ 0⃗' : 'Symétrie glissée';
        return {
          headline: `${nPts} pt(s) fixe(s) (${kind === 1 ? 'Déplacement' : 'Antidépl.'}) ⟹ ${res}`,
          metrics: [
            { label: 'Identification', value: res, accent: 'emerald' },
            { label: 'Conservation distances', value: 'Oui (isométrie)', accent: 'sky' },
            { label: 'Angles orientés', value: kind === 1 ? 'Conservés (+θ)' : 'Opposés (-θ)', accent: 'amber' },
          ],
          conclusion: `Deux isométries qui coïncident sur 3 points non alignés sont identiques partout dans le plan.`,
          svg: { k: 1, angleDeg: nPts === 1 ? 60 : 0, kind: kind === 1 ? 'rot' : 'reflect' },
        };
      },
    },
    {
      id: 'mc-iso-5',
      shortTitle: 'Composée de 2 rotations r₂ ◦ r₁',
      title: 'Exp. 5 : Somme θ₁ + θ₂ ≠ 0 [2π] vs = 0 [2π]',
      goal: 'Trouver la nature de r(Ω₂, θ₂) ◦ r(Ω₁, θ₁) et construire son centre par réflexions.',
      formula: 'θ₁ + θ₂ ≢ 0 [2π] ⟹ Rotation angle θ₁+θ₂  |  ≡ 0 [2π] ⟹ Translation !',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Angle θ₁', min: -180, max: 180, step: 30, defaultValue: 60, unit: '°' },
        { label: 'Angle θ₂', min: -180, max: 180, step: 30, defaultValue: 90, unit: '°' },
      ],
      evaluate: ([t1, t2]) => {
        const sum = ((t1 + t2 + 180) % 360 + 360) % 360 - 180;
        const isTrans = sum === 0;
        return {
          headline: `r₂ ◦ r₁ : θ₁ + θ₂ = ${sum}° ⟹ ${isTrans ? 'TRANSLATION !' : `Rotation d’angle ${sum}°`}`,
          metrics: [
            { label: 'Angle somme', value: `${sum}°`, accent: 'amber' },
            { label: 'Nature composée', value: isTrans ? 'Translation' : 'Rotation', accent: 'emerald' },
            { label: 'Astuce construction', value: 'Décomposer via (Ω₁Ω₂)', accent: 'sky' },
          ],
          conclusion: `En écrivant r₁ = s_{D₁} ◦ s_{(Ω₁Ω₂)} et r₂ = s_{(Ω₁Ω₂)} ◦ s_{D₂}, la réflexion centrale s’annule et donne s_{D₁} ◦ s_{D₂} !`,
          svg: { k: 1, angleDeg: sum, kind: isTrans ? 'trans' : 'rot' },
        };
      },
    },
    {
      id: 'mc-iso-6',
      shortTitle: 'Rotation ◦ Translation',
      title: 'Exp. 6 : Réduction de r(A, θ) ◦ t(u⃗) et construction du centre Ω',
      goal: 'Vérifier que r ◦ t reste une rotation de même angle θ ≠ 0 dont on construit le centre Ω.',
      formula: 'r(A, θ) ◦ t(u⃗) = r(Ω, θ)  (θ ≠ 0 [2π])',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Angle rotation θ', min: 30, max: 180, step: 30, defaultValue: 90, unit: '°' },
        { label: 'Norme ||u⃗||', min: 1, max: 5, step: 1, defaultValue: 2, unit: 'cm' },
      ],
      evaluate: ([th, u]) => {
        const distOmega = u / (2 * Math.abs(Math.sin((th * Math.PI) / 360)));
        return {
          headline: `r(A, ${th}°) ◦ t(${u} cm) = Rotation d’angle ${th}° et centre Ω à ${f(distOmega, 2)} cm`,
          metrics: [
            { label: 'Angle conservé', value: `${th}°`, accent: 'amber' },
            { label: 'Distance ΩA', value: `${f(distOmega, 2)} cm`, accent: 'emerald' },
            { label: 'Triangle ΩB A', value: 'Isocèle d’angle au sommet θ', accent: 'sky' },
          ],
          conclusion: `Méthode BAC : décomposer t(u⃗) = s_D ◦ s_{D’} perpendiculaires à u⃗ avec (D’Ω) faisant θ/2 avec D’.`,
          svg: { k: 1, angleDeg: th, shift: u, kind: 'rot' },
        };
      },
    },
    {
      id: 'mc-iso-7',
      shortTitle: 'Agrandissement (k, k², k³)',
      title: 'Exp. 7 : Effet d’une similitude de rapport k sur longueurs, aires et volumes',
      goal: 'Comparer l’évolution quadratique des aires (×k²) à celle linéaire des périmètres (×k).',
      formula: 'L’ = k·L  |  Aire’ = k²·Aire  |  Volume’ = k³·Volume',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport similitude k', min: 0.4, max: 3.0, step: 0.2, defaultValue: 2.0, unit: '' },
      ],
      evaluate: ([k]) => {
        return {
          headline: `k = ${f(k, 1)} ⟹ Longueurs ×${f(k, 1)} · Aires ×${f(k * k, 2)} · Volumes ×${f(k ** 3, 2)}`,
          metrics: [
            { label: 'Facteur longueurs', value: `×${f(k, 1)}`, accent: 'sky' },
            { label: 'Facteur aires k²', value: `×${f(k * k, 2)}`, accent: 'amber' },
            { label: 'Facteur volumes k³', value: `×${f(k ** 3, 2)}`, accent: 'emerald' },
          ],
          conclusion: `Toute similitude (directe ou indirecte) multiplie les aires par k² et conserve les rapports d’aires et barycentres.`,
          svg: { k, angleDeg: 35, kind: 'sim' },
        };
      },
    },
    {
      id: 'mc-iso-8',
      shortTitle: 'Forme réduite s = h(Ω, k) ◦ r(Ω, θ)',
      title: 'Exp. 8 : Décomposition canonique commutative d’une similitude directe',
      goal: 'Visualiser comment h ◦ r = r ◦ h transforme un triangle en son image semblable.',
      formula: 'S(Ω, k, θ) = h(Ω, k) ◦ r(Ω, θ) = r(Ω, θ) ◦ h(Ω, k)',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport homothétie k', min: 0.5, max: 2.5, step: 0.25, defaultValue: 1.5, unit: '' },
        { label: 'Angle rotation θ', min: 0, max: 180, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([k, th]) => {
        return {
          headline: `S(Ω, ${f(k, 2)}, ${th}°) : ΩM’ = ${f(k, 2)}·ΩM et (ΩM⃗, ΩM’⃗) ≡ ${th}° [2π]`,
          metrics: [
            { label: 'Rapport k', value: `${f(k, 2)}`, accent: 'amber' },
            { label: 'Angle θ', value: `${th}°`, accent: 'sky' },
            { label: 'Symétrie réciproque S⁻¹', value: `S(Ω, ${f(1 / k, 2)}, ${-th}°)`, accent: 'emerald' },
          ],
          conclusion: `Si k = 1 ce sont des rotations ; si θ = 0 ou π ce sont des homothéties (de rapport +k ou -k).`,
          svg: { k, angleDeg: th, kind: 'sim' },
        };
      },
    },
    {
      id: 'mc-iso-9',
      shortTitle: 'Construction du centre Ω de S(A↦A’, B↦B’)',
      title: 'Exp. 9 : Théorème d’existence : ∃! similitude directe envoyant AB sur A’B’',
      goal: 'Déterminer rapport k = A’B’/AB, angle θ = (AB⃗, A’B’⃗) et construire Ω.',
      formula: 'k = A’B’ / AB  ;  θ = (AB⃗, A’B’⃗)  ;  Ω ∈ C(AA’∩BB’) via cercles capables !',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport A’B’/AB', min: 0.5, max: 2.5, step: 0.25, defaultValue: 1.5, unit: '' },
        { label: 'Angle (AB⃗, A’B’⃗)', min: 15, max: 150, step: 15, defaultValue: 90, unit: '°' },
      ],
      evaluate: ([k, th]) => {
        return {
          headline: `Unicité pour A≠B, A’≠B’ : k = ${f(k, 2)} · θ = ${th}° · Ω au point d’intersection des 2 cercles`,
          metrics: [
            { label: 'Rapport k', value: `${f(k, 2)}`, accent: 'amber' },
            { label: 'Angle θ', value: `${th}°`, accent: 'sky' },
            { label: 'Construction Ω', value: 'Cercles (AA’I) ∩ (BB’I) avec I=(AB)∩(A’B’)', accent: 'emerald' },
          ],
          conclusion: `En pratique, avec les affixes complexes, il suffit de résoudre le système 2×2 z’ = az + b en (a, b) !`,
          svg: { k, angleDeg: th, kind: 'sim' },
        };
      },
    },
    {
      id: 'mc-iso-10',
      shortTitle: 'Orthogonalité par similitude (θ = ±π/2)',
      title: 'Exp. 10 : Synthèse BAC C — Image d’une droite par S(Ω, k, π/2)',
      goal: 'Prouver que (DM) ⊥ (D’M’) et que M et M’ décrivent des cercles orthogonaux.',
      formula: 'Si θ = ±π/2 alors ∀ M≠N : (MN) ⊥ (M’N’) et M’N’ = k·MN',
      visualKind: 'isometry-tri',
      sliders: [
        { label: 'Rapport k', min: 0.5, max: 2.0, step: 0.25, defaultValue: 1.25, unit: '' },
      ],
      evaluate: ([k]) => {
        return {
          headline: `S(Ω, ${f(k, 2)}, 90°) : toute droite D a pour image D’ ⊥ D`,
          metrics: [
            { label: 'Angle droites (D, D’)', value: '90° (perpendiculaires)', accent: 'emerald' },
            { label: 'Angle (ΩM, ΩM’)', value: '90° (triangle rectangle)', accent: 'amber' },
            { label: 'Lieu milieu [MM’]', value: 'Cercle ou droite semblable', accent: 'sky' },
          ],
          conclusion: `C’est la propriété centrale des sujets de géométrie au BAC C : une rotation/similitude d’angle ±90° engendre l’orthogonalité !`,
          svg: { k, angleDeg: 90, kind: 'sim' },
        };
      },
    },
  ],

  // 14. CONIQUES (ELLIPSE, PARABOLE, HYPERBOLE) (10)
  'mathTc-coniques': [
    {
      id: 'mc-con-1',
      shortTitle: 'Excentricité e = MF / d(M, D)',
      title: 'Exp. 1 : Définition monofocale unifiée (Ellipse e<1, Parabole e=1, Hyperbole e>1)',
      goal: 'Faire glisser l’excentricité e pour observer la transition continue Ellipse → Parabole → Hyperbole.',
      formula: 'MF / d(M, D) = e  |  0 < e < 1 : Ellipse  |  e = 1 : Parabole  |  e > 1 : Hyperbole',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Excentricité e', min: 0.2, max: 2.0, step: 0.1, defaultValue: 0.6, unit: '' },
      ],
      presets: [
        { label: 'Ellipse (e = 0,6)', values: [0.6] },
        { label: 'Parabole (e = 1,0)', values: [1.0] },
        { label: 'Hyperbole (e = 1,5)', values: [1.5] },
      ],
      evaluate: ([e]) => {
        const type = Math.abs(e - 1) < 0.05 ? 'Parabole (e = 1)' : e < 1 ? 'Ellipse (0 < e < 1)' : 'Hyperbole (e > 1)';
        return {
          headline: `e = ${f(e, 1)} ⟹ ${type}`,
          metrics: [
            { label: 'Nature conique', value: type, accent: 'emerald' },
            { label: 'Si e → 0', value: 'Tend vers un cercle', accent: 'sky' },
            { label: 'Asymptotes ?', value: e > 1 ? '2 asymptotes' : 'Aucune', accent: 'amber' },
          ],
          conclusion: `Une même définition métrique MF = e · d(M, D) engendre toutes les courbes de Kepler (planètes, comètes).`,
          svg: { e, a: 4, b: e < 1 ? 4 * Math.sqrt(1 - e * e) : e > 1 ? 4 * Math.sqrt(e * e - 1) : 2 },
        };
      },
    },
    {
      id: 'mc-con-2',
      shortTitle: 'Ellipse x²/a² + y²/b² = 1',
      title: 'Exp. 2 : Demi-axes (a, b), foyers c = √|a² - b²| et directrices',
      goal: 'Identifier le grand axe selon a > b ou b > a et placer les foyers F, F’.',
      formula: 'Si a > b : c = √(a² - b²), e = c/a, F(±c, 0), D : x = ±a²/c',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Demi-axe a (sur Ox)', min: 2, max: 6, step: 0.5, defaultValue: 5, unit: '' },
        { label: 'Demi-axe b (sur Oy)', min: 1.5, max: 5.5, step: 0.5, defaultValue: 3, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const A = Math.max(a, b);
        const B = Math.min(a, b);
        const c = Math.sqrt(A * A - B * B);
        const e = c / A;
        const axis = a >= b ? 'Horizontal (Ox)' : 'Vertical (Oy)';
        return {
          headline: `c = ${f(c)} · e = c/a_max = ${f(e, 3)} · Grand axe ${axis}`,
          metrics: [
            { label: 'Demi-dist. focale c', value: `${f(c)}`, accent: 'amber' },
            { label: 'Excentricité e', value: `${f(e, 3)}`, accent: 'emerald' },
            { label: 'Aire π·a·b', value: `${f(Math.PI * a * b)}`, accent: 'sky' },
          ],
          conclusion: `Attention : si b > a, le grand axe et les foyers F(0, ±c) sont portés par l’axe vertical (Oy) !`,
          svg: { e: Math.max(0.1, e), a, b },
        };
      },
    },
    {
      id: 'mc-con-3',
      shortTitle: 'Définition bifocale MF + MF’ = 2a',
      title: 'Exp. 3 : Propriété de la ficelle tendue sur l’ellipse',
      goal: 'Vérifier que la somme des rayons vecteurs MF + MF’ reste égale à 2a partout sur E.',
      formula: 'MF + MF’ = 2a  (> FF’ = 2c)  |  Aire max triangle FMF’ en sommet B : b·c',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Angle paramétrique θ', min: 0, max: 360, step: 15, defaultValue: 45, unit: '°' },
        { label: 'Demi-grand axe a', min: 3, max: 6, step: 0.5, defaultValue: 5, unit: '' },
      ],
      evaluate: ([th, a]) => {
        const b = a * 0.6;
        const c = Math.sqrt(a * a - b * b);
        const rad = (th * Math.PI) / 180;
        const x = a * Math.cos(rad);
        const y = b * Math.sin(rad);
        const d1 = Math.hypot(x - c, y);
        const d2 = Math.hypot(x + c, y);
        return {
          headline: `M(${f(x)} ; ${f(y)}) : MF = ${f(d1)} ; MF’ = ${f(d2)} ⟹ Somme = ${f(d1 + d2)} (= 2a)`,
          metrics: [
            { label: 'MF + MF’', value: `${f(d1 + d2)}`, accent: 'emerald' },
            { label: 'MF', value: `${f(d1)}`, accent: 'sky' },
            { label: 'MF’', value: `${f(d2)}`, accent: 'amber' },
          ],
          conclusion: `La représentation paramétrique M(a cos θ, b sin θ) satisfait immédiatement x²/a² + y²/b² = 1.`,
          svg: { e: c / a, a, b, thetaDeg: th },
        };
      },
    },
    {
      id: 'mc-con-4',
      shortTitle: 'Parabole y² = 2px',
      title: 'Exp. 4 : Paramètre p, Foyer F(p/2, 0) et Directrice x = -p/2',
      goal: 'Relier l’équation réduite y² = 2px à la distance focale p/2.',
      formula: 'y² = 2px  ⟹  F(p/2 ; 0), D : x = -p/2  |  x² = 2py ⟹ F(0 ; p/2)',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Paramètre p > 0', min: 1, max: 6, step: 0.5, defaultValue: 2, unit: '' },
      ],
      evaluate: ([p]) => {
        return {
          headline: `y² = ${2 * p}x : Foyer F(${f(p / 2, 2)} ; 0) · Directrice x = -${f(p / 2, 2)}`,
          metrics: [
            { label: 'Foyer F', value: `(${f(p / 2, 2)} ; 0)`, accent: 'amber' },
            { label: 'Directrice D', value: `x = -${f(p / 2, 2)}`, accent: 'sky' },
            { label: 'Corde focale (x=p/2)', value: `2p = ${2 * p}`, accent: 'emerald' },
          ],
          conclusion: `En physique, la parabole concentre tout rayon parallèle à l’axe vers son foyer F (antenne parabolique, four solaire).`,
          svg: { e: 1, a: p, b: p },
        };
      },
    },
    {
      id: 'mc-con-5',
      shortTitle: 'Hyperbole x²/a² - y²/b² = 1',
      title: 'Exp. 5 : Foyers c = √(a² + b²) et asymptotes y = ±(b/a)x',
      goal: 'Construire le rectangle fondamental (2a × 2b) donnant les asymptotes et le cercle focal.',
      formula: 'c² = a² + b²  |  e = c/a > 1  |  Asymptotes : y = ±(b/a) x',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Demi-axe transverse a', min: 1.5, max: 5, step: 0.5, defaultValue: 3, unit: '' },
        { label: 'Demi-axe imaginaire b', min: 1.5, max: 5, step: 0.5, defaultValue: 4, unit: '' },
      ],
      evaluate: ([a, b]) => {
        const c = Math.hypot(a, b);
        const e = c / a;
        return {
          headline: `c = ${f(c)} · e = ${f(e)} · Asymptotes : y = ±${f(b / a)} x`,
          metrics: [
            { label: 'Demi-dist. focale c', value: `${f(c)}`, accent: 'amber' },
            { label: 'Excentricité e', value: `${f(e)} > 1`, accent: 'emerald' },
            { label: 'Pente asymptotes ±b/a', value: `±${f(b / a)}`, accent: 'sky' },
          ],
          conclusion: `Pour une hyperbole équilatère (a = b), les asymptotes sont perpendiculaires (y = ±x) et e = √2 !`,
          svg: { e, a, b },
        };
      },
    },
    {
      id: 'mc-con-6',
      shortTitle: 'Hyperbole équilatère xy = k',
      title: 'Exp. 6 : Rotation de 45° de x² - y² = a² vers xy = k',
      goal: 'Passer de l’équation homographique xy = k à sa forme réduite X²/a² - Y²/a² = 1.',
      formula: 'xy = k (k > 0) ⟺ X²/(2k) - Y²/(2k) = 1  (foyers sur y = x, e = √2)',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Constante k > 0', min: 1, max: 8, step: 0.5, defaultValue: 4, unit: '' },
      ],
      evaluate: ([k]) => {
        const a = Math.sqrt(2 * k);
        const c = a * Math.SQRT2;
        return {
          headline: `xy = ${f(k, 1)} : a = b = ${f(a)} · c = 2√k = ${f(c)} · e = √2 ≈ 1,414`,
          metrics: [
            { label: 'Demi-axe a = √(2k)', value: `${f(a)}`, accent: 'amber' },
            { label: 'Foyers (±√k, ±√k)', value: `(±${f(Math.sqrt(k))} ; ±${f(Math.sqrt(k))})`, accent: 'emerald' },
            { label: 'Asymptotes', value: 'Axes (Ox) et (Oy)', accent: 'sky' },
          ],
          conclusion: `Les courbes des fonctions homographiques y = (ax+b)/(cx+d) sont toutes des hyperboles !`,
          svg: { e: Math.SQRT2, a, b: a },
        };
      },
    },
    {
      id: 'mc-con-7',
      shortTitle: 'Équation tangente par dédoublement',
      title: 'Exp. 7 : Règle de dédoublement en M₀(x₀, y₀) sur la conique',
      goal: 'Écrire instantanément l’équation cartésienne de la tangente en M₀(x₀, y₀).',
      formula: 'x² → x₀x  ;  y² → y₀y  ;  2x → x + x₀  ;  2y → y + y₀',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Angle θ du point M₀ (ellipse 5, 3)', min: 0, max: 180, step: 15, defaultValue: 60, unit: '°' },
      ],
      evaluate: ([th]) => {
        const rad = (th * Math.PI) / 180;
        const x0 = 5 * Math.cos(rad);
        const y0 = 3 * Math.sin(rad);
        return {
          headline: `M₀(${f(x0)} ; ${f(y0)}) : Tangente (${f(x0)}/25)x + (${f(y0)}/9)y = 1`,
          metrics: [
            { label: 'Point de contact M₀', value: `(${f(x0)} ; ${f(y0)})`, accent: 'sky' },
            { label: 'Terme x₀x / a²', value: `${f(x0 / 25, 3)} x`, accent: 'amber' },
            { label: 'Terme y₀y / b²', value: `${f(y0 / 9, 3)} y`, accent: 'emerald' },
          ],
          conclusion: `Propriété optique : en M₀ d’une ellipse, la tangente est bissectrice extérieure de l’angle (MF⃗, MF’⃗).`,
          svg: { e: 0.8, a: 5, b: 3, thetaDeg: th },
        };
      },
    },
    {
      id: 'mc-con-8',
      shortTitle: 'Reconnaissance Ax² + By² + Cx + Dy + E = 0',
      title: 'Exp. 8 : Réduction par complétion des carrés (translation de repère)',
      goal: 'Identifier centre Ω et nature exacte selon le signe de A·B et la constante.',
      formula: 'A·B > 0 : Ellipse (ou ∅/pt) | A·B = 0 : Parabole | A·B < 0 : Hyperbole (ou 2 droites)',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Coef A (devant x²)', min: -2, max: 4, step: 1, defaultValue: 4, unit: '' },
        { label: 'Coef B (devant y²)', min: -2, max: 4, step: 1, defaultValue: 1, unit: '' },
      ],
      evaluate: ([A, B]) => {
        const prod = A * B;
        const type =
          A === 0 && B === 0 ? 'Droite (dégénérée)' :
          prod === 0 ? 'Parabole (un carré manquant)' :
          A === B ? 'Cercle (cas limite ellipse)' :
          prod > 0 ? 'Ellipse (A·B > 0)' : 'Hyperbole (A·B < 0)';
        return {
          headline: `${A}x² + ${B}y² + ... = 0 : A·B = ${prod} ⟹ ${type}`,
          metrics: [
            { label: 'Produit A·B', value: `${prod}`, accent: 'amber' },
            { label: 'Classification', value: type, accent: 'emerald' },
            { label: 'Changement repère', value: 'Compléter les carrés en X, Y', accent: 'sky' },
          ],
          conclusion: `Ne pas conclure aveuglément sur A·B > 0 sans vérifier le signe du second membre après translation !`,
          svg: { e: prod === 0 ? 1 : prod > 0 ? 0.7 : 1.4, a: 4, b: 3 },
        };
      },
    },
    {
      id: 'mc-con-9',
      shortTitle: 'Équation polaire r = p / (1 + e cos θ)',
      title: 'Exp. 9 : Trajectoires kepleriennes en repère polaire focal',
      goal: 'Relier paramètre p et excentricité e aux distances périhélie r_min et aphélie r_max.',
      formula: 'r_min = p / (1 + e)  ;  r_max = p / (1 - e) (si e < 1)  ;  p = b² / a',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Excentricité e', min: 0.1, max: 0.9, step: 0.1, defaultValue: 0.5, unit: '' },
        { label: 'Paramètre p', min: 2, max: 6, step: 0.5, defaultValue: 3, unit: '' },
      ],
      evaluate: ([e, p]) => {
        const rMin = p / (1 + e);
        const rMax = p / (1 - e);
        const a = 0.5 * (rMin + rMax);
        return {
          headline: `r_péri = ${f(rMin)} · r_aphé = ${f(rMax)} · Demi-grand axe a = ${f(a)}`,
          metrics: [
            { label: 'Périhélie r_min', value: `${f(rMin)}`, accent: 'rose' },
            { label: 'Aphélie r_max', value: `${f(rMax)}`, accent: 'sky' },
            { label: 'Rapport r_max/r_min', value: `${f((1 + e) / (1 - e))}`, accent: 'amber' },
          ],
          conclusion: `Par conservation du moment cinétique r·v = cte aux apsides, v_péri / v_aphé = (1+e)/(1-e).`,
          svg: { e, a, b: a * Math.sqrt(1 - e * e) },
        };
      },
    },
    {
      id: 'mc-con-10',
      shortTitle: 'Conique avec terme croisé Bxy',
      title: 'Exp. 10 : Synthèse BAC C — Diagonalisation par rotation d’angle θ',
      goal: 'Annuler le terme croisé xy en tournant le repère d’un angle tan(2θ) = B / (A - C).',
      formula: 'tan(2θ) = B / (A - C)  (si A = C ⟹ rotation exacte de θ = π/4 = 45° !)',
      visualKind: 'conic-curve',
      sliders: [
        { label: 'Angle rotation θ', min: 15, max: 75, step: 15, defaultValue: 45, unit: '°' },
      ],
      evaluate: ([th]) => {
        return {
          headline: `Rotation d’angle ${th}° : X = x cos θ + y sin θ, Y = -x sin θ + y cos θ`,
          metrics: [
            { label: 'Angle rotation', value: `${th}°`, accent: 'amber' },
            { label: 'Cas A = C (ex: xy=k)', value: 'θ = 45° (π/4)', accent: 'emerald' },
            { label: 'Invariant Δ = B²-4AC', value: '<0 Ellipse, =0 Parab., >0 Hyp.', accent: 'sky' },
          ],
          conclusion: `Le discriminant B² - 4AC est invariant par rotation : il révèle la nature de la conique avant même de changer de repère !`,
          svg: { e: 0.75, a: 4.5, b: 2.8, rotDeg: th },
        };
      },
    },
  ],
};
