import React, { useState } from 'react';
import { StandingMathRenderer } from './StandingMathRenderer';
import { ChapterExperienceInfo } from './Physics3emeExperiences';

export const MATH_3EME_EXPERIENCE_META: Record<string, ChapterExperienceInfo> = {
  'math3-racines-carrees': {
    titles: [
      'Exp. 1 : Interprétation géométrique √N & Décomposition a√b',
      'Exp. 2 : Produit √(a×b) = √a×√b vs Piège de la somme √(a+b)',
      'Exp. 3 : Expression conjuguée (a − √b)(a + √b) = a² − b',
    ],
    shortTitles: ['Aire & √(k²b)', 'Produit vs Somme', 'Conjugué'],
  },
  'math3-calcul-litteral-equations': {
    titles: [
      'Exp. 1 : Géométrie des Identités (a + b)² et a² − b²',
      'Exp. 2 : Courbe & Racines d’une Équation Produit Nul (A·B = 0)',
      'Exp. 3 : Mise en facteur commun k·a + k·b = k(a + b)',
    ],
    shortTitles: ['Identités en aires', 'Équation produit', 'Facteur commun'],
  },
  'math3-inequations-intervalles': {
    titles: [
      'Exp. 1 : Droite graduée & Intervalles [a ; b], ]−∞ ; a[',
      'Exp. 2 : Intersection (∩) & Réunion (∪) de 2 intervalles',
      'Exp. 3 : Règle de retournement du signe quand a < 0',
    ],
    shortTitles: ['Intervalles [a;b]', 'Inter ∩ / Union ∪', 'Sens inéquation'],
  },
  'math3-systemes-equations': {
    titles: [
      'Exp. 1 : Intersection graphique de 2 droites (x ; y)',
      'Exp. 2 : Résolution par Combinaison linéaire (L₁ + L₂)',
      'Exp. 3 : Problème en Franc CFA au marché de Libreville',
    ],
    shortTitles: ['2 Droites (x;y)', 'Combinaison', 'Problème F CFA'],
  },
  'math3-applications-affines': {
    titles: [
      'Exp. 1 : Pente a & Ordonnée à l’origine b sur le repère',
      'Exp. 2 : Retrouver f(x) = ax + b à partir de 2 points A et B',
      'Exp. 3 : Comparaison de 2 tarifs SEEG / Libertis (Seuil x₀)',
    ],
    shortTitles: ['Droite ax + b', 'Taux par 2 pts', 'Seuil tarifs'],
  },
  'math3-statistiques-3eme': {
    titles: [
      'Exp. 1 : Regroupement en classes & Histogramme des effectifs',
      'Exp. 2 : Polygone des Effectifs Cumulés Croissants (ECC) & Médiane',
      'Exp. 3 : Boîte à moustaches & Quartiles Q₁, Médiane, Q₃',
    ],
    shortTitles: ['Histogramme', 'Courbe ECC', 'Quartiles Q₁/Q₃'],
  },
  'math3-probabilites-3eme': {
    titles: [
      'Exp. 1 : Arbre pondéré à 2 épreuves (Avec vs Sans remise)',
      'Exp. 2 : Tableau à double entrée (Lancer de 2 dés)',
      'Exp. 3 : Convergence Fréquence observée ➔ Probabilité',
    ],
    shortTitles: ['Arbre 2 épreuves', 'Tableau 2 dés', 'Fréquence / Proba'],
  },
  'math3-thales-3eme': {
    titles: [
      'Exp. 1 : Configuration Papillon vs Triangles emboîtés',
      'Exp. 2 : Réciproque de Thalès (Vérifier si (MN) // (BC))',
      'Exp. 3 : Mesure de hauteur d’un Okoumé par l’ombre (Thalès)',
    ],
    shortTitles: ['Papillon / Triangle', 'Réciproque //', 'Hauteur Okoumé'],
  },
  'math3-trigonometrie-3eme': {
    titles: [
      'Exp. 1 : SOH-CAH-TOA dans le triangle rectangle',
      'Exp. 2 : Cercle trigonométrique & Identité cos²α + sin²α = 1',
      'Exp. 3 : Angles remarquables BEPC (30°, 45°, 60°) & Phare',
    ],
    shortTitles: ['SOH-CAH-TOA', 'cos²+sin²=1', 'Angles 30/45/60°'],
  },
  'math3-vecteurs-translations': {
    titles: [
      'Exp. 1 : Somme de vecteurs — Relation de Chasles (AB⃗ + BC⃗ = AC⃗)',
      'Exp. 2 : Règle du Parallélogramme (AB⃗ + AD⃗ = AC⃗)',
      'Exp. 3 : Vecteurs égaux, opposés & Caractérisation du Milieu',
    ],
    shortTitles: ['Chasles', 'Parallélogramme', 'Égaux & Milieu'],
  },
  'math3-angles-polygones': {
    titles: [
      'Exp. 1 : Angle au centre vs Angle inscrit (AÔB = 2 × AMB)',
      'Exp. 2 : Angles inscrits interceptant le même arc & Quadrilatère',
      'Exp. 3 : Polygones réguliers (Triangle, Carré, Hexagone, Octogone)',
    ],
    shortTitles: ['Centre = 2×Inscrit', 'Même arc / Quad', 'Polygones rég.'],
  },
  'math3-reperage-droites': {
    titles: [
      'Exp. 1 : Coordonnées du vecteur AB⃗ & Distance dans le repère',
      'Exp. 2 : Test de Colinéarité (xy’ − yx’ = 0)',
      'Exp. 3 : Orthogonalité (xx’ + yy’ = 0) & Droites ⊥',
    ],
    shortTitles: ['Vecteur & Dist.', 'Colinéarité', 'Orthogonalité ⊥'],
  },
  'math3-pyramides-cones': {
    titles: [
      'Exp. 1 : Pyramide régulière (Volume V = ⅓ B×h & Apothème)',
      'Exp. 2 : Cône de révolution (g² = r² + h² & Volume)',
      'Exp. 3 : Patron du cône (Angle du secteur α = 360° × r / g)',
    ],
    shortTitles: ['Pyramide V=⅓Bh', 'Cône g²=r²+h²', 'Patron secteur α'],
  },
  'math3-sections-agrandissement': {
    titles: [
      'Exp. 1 : Section parallèle à la base — Rapport de réduction k',
      'Exp. 2 : Tronc de cône / Tronc de pyramide (V_grand − V_petit)',
      'Exp. 3 : Effet d’échelle : Longueur ×k, Aire ×k², Volume ×k³',
    ],
    shortTitles: ['Section k=h’/h', 'Tronc de cône', 'Loi k, k², k³'],
  },
};

export const Math3emeExperiences: React.FC<{
  chapterId: string;
  experienceIndex: 0 | 1 | 2;
}> = ({ chapterId, experienceIndex }) => {
  const [rSq, setRSq] = useState(3);
  const [rRad, setRRad] = useState(5);
  const [rA, setRA] = useState(4);
  const [rB, setRB] = useState(9);
  const [rConjA, setRConjA] = useState(3);

  const [idA, setIdA] = useState(4);
  const [idB, setIdB] = useState(2);
  const [fR1, setFR1] = useState(3);
  const [fR2, setFR2] = useState(-2);
  const [factK, setFactK] = useState(3);

  const [iA, setIA] = useState(2);
  const [iB, setIB] = useState(7);
  const [i2Max, setI2Max] = useState(5);
  const [ineqA, setIneqA] = useState(-2);

  const [sSum, setSSum] = useState(14);
  const [sDiff, setSDiff] = useState(4);
  const [sBreads, setSBreads] = useState(4);
  const [sDonuts, setSDonuts] = useState(6);

  const [affA, setAffA] = useState(2);
  const [affB, setAffB] = useState(-1);
  const [affX, setAffX] = useState(3);
  const [affX2, setAffX2] = useState(4);
  const [affConso, setAffConso] = useState(8);

  const [stC1, setStC1] = useState(8);
  const [stC2, setStC2] = useState(14);
  const [stC3, setStC3] = useState(6);
  const [stQ1, setStQ1] = useState(7);
  const [stMed, setStMed] = useState(11);
  const [stQ3, setStQ3] = useState(15);

  const [prRed, setPrRed] = useState(3);
  const [prBlue, setPrBlue] = useState(2);
  const [prTargetSum, setPrTargetSum] = useState(7);
  const [prTrials, setPrTrials] = useState(100);

  const [thK, setThK] = useState(2);
  const [thMn, setThMn] = useState(4);
  const [thCheckN, setThCheckN] = useState(6);
  const [thShadowTree, setThShadowTree] = useState(12);

  const [trAngle, setTrAngle] = useState(30);
  const [trHyp, setTrHyp] = useState(12);
  const [trDistBeacon, setTrDistBeacon] = useState(50);

  const [vecMode, setVecMode] = useState<'chasles' | 'para'>('chasles');
  const [vecAngle, setVecAngle] = useState(35);
  const [vecMidPos, setVecMidPos] = useState(50);

  const [angInscr, setAngInscr] = useState(35);
  const [angShift, setAngShift] = useState(20);
  const [polyN, setPolyN] = useState(6);

  const [repAx, setRepAx] = useState(1);
  const [repAy, setRepAy] = useState(2);
  const [repBx, setRepBx] = useState(5);
  const [repBy, setRepBy] = useState(5);
  const [repUx, setRepUx] = useState(2);
  const [repUy, setRepUy] = useState(6);
  const [repVx, setRepVx] = useState(3);
  const [repVy, setRepVy] = useState(9);

  const [pyrB, setPyrB] = useState(6);
  const [pyrH, setPyrH] = useState(8);
  const [coneR, setConeR] = useState(3);
  const [coneH, setConeH] = useState(4);

  const [secDen, setSecDen] = useState(2);
  const [secV, setSecV] = useState(80);
  const [scaleK, setScaleK] = useState(3);

  // 1. RACINES CARRÉES
  if (chapterId === 'math3-racines-carrees') {
    if (experienceIndex === 0) {
      const inside = rSq * rSq * rRad;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Facteur carré a = {rSq} (a² = {rSq * rSq})</label>
              <input type="range" min="2" max="7" value={rSq} onChange={(e) => setRSq(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Radicande premier b = {rRad}</label>
              <input type="range" min="2" max="7" value={rRad} onChange={(e) => setRRad(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <rect x="45" y="18" width={rSq * 10} height={rSq * 10} fill="#fbbf24" fillOpacity="0.25" stroke="#fbbf24" strokeWidth="2" />
              <text x={45 + rSq * 5} y={24 + rSq * 5} textAnchor="middle" className="text-[11px] font-black fill-amber-300">a²={rSq * rSq}</text>
              <text x="150" y="55" className="text-sm font-black fill-sky-300">× √{rRad} ➔</text>
              <text x="255" y="48" textAnchor="middle" className="text-sm font-black fill-emerald-300">√{inside} = {rSq}√{rRad}</text>
              <text x="255" y="68" textAnchor="middle" className="text-[10px] fill-slate-300">≈ {Math.sqrt(inside).toFixed(2)}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`√${inside} = √(${rSq * rSq} × ${rRad}) = √${rSq * rSq} × √${rRad} = ${rSq}√${rRad}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const sumRes = Math.sqrt(rA + rB).toFixed(2);
      const sumSep = (Math.sqrt(rA) + Math.sqrt(rB)).toFixed(2);
      const prodRes = Math.sqrt(rA * rB).toFixed(2);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">a = {rA}</label>
              <input type="range" min="1" max="16" value={rA} onChange={(e) => setRA(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">b = {rB}</label>
              <input type="range" min="1" max="16" value={rB} onChange={(e) => setRB(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 95" className="w-full max-w-md h-auto">
              <rect x="20" y="15" width="140" height="65" rx="8" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" />
              <text x="90" y="40" textAnchor="middle" className="text-[11px] font-black fill-emerald-300">PRODUIT : VRAI ✓</text>
              <text x="90" y="60" textAnchor="middle" className="text-[10px] font-mono fill-white">√({rA}×{rB}) = {prodRes}</text>
              <rect x="180" y="15" width="140" height="65" rx="8" fill="#7f1d1d" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
              <text x="250" y="40" textAnchor="middle" className="text-[11px] font-black fill-rose-300">SOMME : PIÈGE ✗</text>
              <text x="250" y="60" textAnchor="middle" className="text-[10px] font-mono fill-white">{sumRes} ≠ {sumSep}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`√(${rA}×${rB}) = √${rA}×√${rB} = ${prodRes} | MAIS √(${rA}+${rB}) ≈ ${sumRes} ≠ √${rA}+√${rB} ≈ ${sumSep}`} showColumnOp={false} />
        </div>
      );
    }
    const den = rConjA * rConjA - rRad;
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Entier a = {rConjA}</label>
            <input type="range" min="2" max="6" value={rConjA} onChange={(e) => setRConjA(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Radical √b : b = {rRad}</label>
            <input type="range" min="2" max="7" value={rRad} onChange={(e) => setRRad(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 85" className="w-full max-w-md h-auto">
            <text x="80" y="46" textAnchor="middle" className="text-xs font-mono font-black fill-amber-300">1 / ({rConjA} − √{rRad})</text>
            <text x="170" y="46" textAnchor="middle" className="text-xs font-black fill-sky-300">× conjugué ➔</text>
            <text x="260" y="46" textAnchor="middle" className="text-xs font-mono font-black fill-emerald-300">({rConjA} + √{rRad}) / {den}</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`(${rConjA} − √${rRad})(${rConjA} + √${rRad}) = ${rConjA}² − (√${rRad})² = ${rConjA * rConjA} − ${rRad} = ${den}`} showColumnOp={false} />
      </div>
    );
  }

  // 2. CALCUL LITTÉRAL & ÉQUATIONS PRODUITS
  if (chapterId === 'math3-calcul-litteral-equations') {
    if (experienceIndex === 0) {
      const aPx = idA * 11;
      const bPx = idB * 11;
      const sumSq = (idA + idB) * (idA + idB);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">a = {idA}</label>
              <input type="range" min="2" max="5" value={idA} onChange={(e) => setIdA(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">b = {idB}</label>
              <input type="range" min="1" max="4" value={idB} onChange={(e) => setIdB(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
              <rect x="35" y="15" width={aPx} height={aPx} fill="#fbbf24" fillOpacity="0.4" stroke="#fbbf24" />
              <rect x={35 + aPx} y="15" width={bPx} height={aPx} fill="#38bdf8" fillOpacity="0.4" stroke="#38bdf8" />
              <rect x="35" y={15 + aPx} width={aPx} height={bPx} fill="#38bdf8" fillOpacity="0.4" stroke="#38bdf8" />
              <rect x={35 + aPx} y={15 + aPx} width={bPx} height={bPx} fill="#10b981" fillOpacity="0.5" stroke="#10b981" />
              <text x="235" y="48" textAnchor="middle" className="text-xs font-black fill-amber-300">a² + 2ab + b² = {sumSq}</text>
              <text x="235" y="68" textAnchor="middle" className="text-[10px] fill-sky-300">({idA} + {idB})² = {idA * idA} + {2 * idA * idB} + {idB * idB}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`(${idA} + ${idB})² = ${idA}² + 2×${idA}×${idB} + ${idB}² = ${sumSq} | (${idA}² − ${idB}²) = (${idA}−${idB})(${idA}+${idB}) = ${idA * idA - idB * idB}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const r1x = 160 + fR1 * 15;
      const r2x = 160 + fR2 * 15;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Racine r₁ = {fR1}</label>
              <input type="range" min="-5" max="6" value={fR1} onChange={(e) => setFR1(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Racine r₂ = {fR2}</label>
              <input type="range" min="-5" max="6" value={fR2} onChange={(e) => setFR2(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 95" className="w-full max-w-md h-auto">
              <line x1="25" y1="60" x2="295" y2="60" stroke="#64748b" strokeWidth="2" />
              <path d={`M ${Math.min(r1x, r2x) - 30} 15 Q ${(r1x + r2x) / 2} 105 ${Math.max(r1x, r2x) + 30} 15`} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx={r1x} cy="60" r="5" fill="#fbbf24" />
              <circle cx={r2x} cy="60" r="5" fill="#10b981" />
              <text x={r1x} y="78" textAnchor="middle" className="text-[10px] font-black fill-amber-300">{fR1}</text>
              <text x={r2x} y="78" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">{fR2}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`(x ${fR1 >= 0 ? `− ${fR1}` : `+ ${Math.abs(fR1)}`})(x ${fR2 >= 0 ? `− ${fR2}` : `+ ${Math.abs(fR2)}`}) = 0 ⇔ S = {${fR1} ; ${fR2}}`} showColumnOp={false} />
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Facteur commun k = {factK}</label>
          <input type="range" min="2" max="9" value={factK} onChange={(e) => setFactK(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 85" className="w-full max-w-md h-auto">
            <rect x="25" y="20" width="90" height="44" rx="6" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" />
            <text x="70" y="47" textAnchor="middle" className="text-xs font-black fill-amber-300">{factK}x + {factK * 5}</text>
            <text x="165" y="47" textAnchor="middle" className="text-xs font-black fill-sky-300">➔ Facteur {factK} ➔</text>
            <rect x="215" y="20" width="100" height="44" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
            <text x="265" y="47" textAnchor="middle" className="text-xs font-black fill-emerald-300">{factK}(x + 5)</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`${factK}x + ${factK * 5} = ${factK} × x + ${factK} × 5 = ${factK}(x + 5)`} showColumnOp={false} />
      </div>
    );
  }

  // 3. INÉQUATIONS & INTERVALLES
  if (chapterId === 'math3-inequations-intervalles') {
    const min = Math.min(iA, iB);
    const max = Math.max(iA, iB);
    if (experienceIndex === 0) {
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Borne A = {min}</label>
              <input type="range" min="-4" max="5" value={iA} onChange={(e) => setIA(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Borne B = {max}</label>
              <input type="range" min="1" max="10" value={iB} onChange={(e) => setIB(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 60" className="w-full max-w-md h-auto">
              <line x1="20" y1="30" x2="320" y2="30" stroke="#475569" strokeWidth="3" />
              <line x1={110 + min * 16} y1="30" x2={110 + max * 16} y2="30" stroke="#10b981" strokeWidth="6" />
              <circle cx={110 + min * 16} cy="30" r="5" fill="#fbbf24" />
              <circle cx={110 + max * 16} cy="30" r="5" fill="#38bdf8" />
              <text x={110 + min * 16} y="50" textAnchor="middle" className="text-[10px] font-black fill-amber-300">[{min}</text>
              <text x={110 + max * 16} y="50" textAnchor="middle" className="text-[10px] font-black fill-sky-300">{max}]</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Intervalle I = [${min} ; ${max}] ⇔ ${min} ≤ x ≤ ${max}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const interMin = Math.max(min, 0);
      const interMax = Math.min(max, i2Max);
      const hasInter = interMin <= interMax;
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-sky-300 block mb-1">Second intervalle J = [0 ; {i2Max}] (vs I = [{min} ; {max}])</label>
            <input type="range" min="1" max="10" value={i2Max} onChange={(e) => setI2Max(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 80" className="w-full max-w-md h-auto">
              <line x1="20" y1="26" x2="320" y2="26" stroke="#334155" strokeWidth="2" />
              <line x1={110 + min * 15} y1="26" x2={110 + max * 15} y2="26" stroke="#fbbf24" strokeWidth="5" />
              <line x1="110" y1="48" x2={110 + i2Max * 15} y2="48" stroke="#38bdf8" strokeWidth="5" />
              {hasInter && <line x1={110 + interMin * 15} y1="68" x2={110 + interMax * 15} y2="68" stroke="#10b981" strokeWidth="6" />}
            </svg>
          </div>
          <StandingMathRenderer expression={`I ∩ J = ${hasInter ? `[${interMin} ; ${interMax}]` : '∅'} | I ∪ J = [${Math.min(min, 0)} ; ${Math.max(max, i2Max)}]`} showColumnOp={false} />
        </div>
      );
    }
    const sol = Number((8 / ineqA).toFixed(2));
    const flipped = ineqA < 0;
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-rose-300 block mb-1">Coefficient a devant x : {ineqA}x ≤ 8</label>
          <input type="range" min="-4" max="4" step="1" value={ineqA} onChange={(e) => setIneqA(Number(e.target.value) || 1)} className="w-full accent-rose-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 70" className="w-full max-w-md h-auto">
            <text x="170" y="30" textAnchor="middle" className={`text-sm font-black ${flipped ? 'fill-rose-300' : 'fill-emerald-300'}`}>
              {flipped ? 'a < 0 ➔ LE SENS CHANGE (≤ devient ≥) !' : 'a > 0 ➔ Le sens reste identique'}
            </text>
            <text x="170" y="54" textAnchor="middle" className="text-xs font-mono fill-white">
              x {flipped ? '≥' : '≤'} {sol}
            </text>
          </svg>
        </div>
        <StandingMathRenderer expression={`${ineqA}x ≤ 8 ⇔ x ${flipped ? '≥' : '≤'} 8 ÷ (${ineqA}) = ${sol}`} showColumnOp={false} />
      </div>
    );
  }

  // 4. SYSTÈMES D'ÉQUATIONS
  if (chapterId === 'math3-systemes-equations') {
    const x = (sSum + sDiff) / 2;
    const y = (sSum - sDiff) / 2;
    if (experienceIndex === 0 || experienceIndex === 1) {
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">L₁ : x + y = {sSum}</label>
              <input type="range" min="8" max="20" step="2" value={sSum} onChange={(e) => setSSum(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">L₂ : x − y = {sDiff}</label>
              <input type="range" min="2" max="10" step="2" value={sDiff} onChange={(e) => setSDiff(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <line x1="30" y1="85" x2="210" y2="85" stroke="#64748b" strokeWidth="1.5" />
              <line x1="50" y1="15" x2="50" y2="100" stroke="#64748b" strokeWidth="1.5" />
              <line x1="60" y1="20" x2="190" y2="95" stroke="#fbbf24" strokeWidth="2.5" />
              <line x1="60" y1="90" x2="190" y2="25" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="125" cy="57" r="6" fill="#10b981" />
              <text x="258" y="52" textAnchor="middle" className="text-xs font-black fill-emerald-300">Intersection ({x} ; {y})</text>
              <text x="258" y="72" textAnchor="middle" className="text-[10px] fill-slate-300">2x = {sSum + sDiff}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`L₁ + L₂ : 2x = ${sSum + sDiff} ➔ x = ${x} | y = ${sSum} − ${x} = ${y} | S = {(${x} ; ${y})}`} showColumnOp={false} />
        </div>
      );
    }
    const tot = sBreads * 150 + sDonuts * 100;
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Pains (150 F) : x = {sBreads}</label>
            <input type="range" min="1" max="10" value={sBreads} onChange={(e) => setSBreads(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Beignets (100 F) : y = {sDonuts}</label>
            <input type="range" min="1" max="10" value={sDonuts} onChange={(e) => setSDonuts(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 85" className="w-full max-w-md h-auto">
            <rect x="25" y="18" width="135" height="48" rx="8" fill="#0f172a" stroke="#fbbf24" />
            <text x="92" y="46" textAnchor="middle" className="text-xs font-black fill-amber-300">{sBreads} pains + {sDonuts} beignets</text>
            <text x="250" y="46" textAnchor="middle" className="text-sm font-black fill-emerald-300">{tot.toLocaleString('fr-FR')} F CFA</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`150x + 100y = 150×${sBreads} + 100×${sDonuts} = ${tot.toLocaleString('fr-FR')} F CFA`} showColumnOp={false} />
      </div>
    );
  }

  // 5. APPLICATIONS AFFINES
  if (chapterId === 'math3-applications-affines') {
    if (experienceIndex === 0) {
      const y = affA * affX + affB;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Pente a = {affA}</label>
              <input type="range" min="-3" max="4" value={affA} onChange={(e) => setAffA(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Ordonnée b = {affB}</label>
              <input type="range" min="-4" max="5" value={affB} onChange={(e) => setAffB(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">x = {affX}</label>
              <input type="range" min="-3" max="4" value={affX} onChange={(e) => setAffX(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 110" className="w-full max-w-md h-auto">
              <line x1="30" y1="60" x2="210" y2="60" stroke="#475569" strokeWidth="1.5" />
              <line x1="120" y1="12" x2="120" y2="102" stroke="#475569" strokeWidth="1.5" />
              <line x1="60" y1={Math.max(10, Math.min(100, 60 - (-3 * affA + affB) * 6))} x2="180" y2={Math.max(10, Math.min(100, 60 - (3 * affA + affB) * 6))} stroke="#fbbf24" strokeWidth="2.5" />
              <circle cx="120" cy={Math.max(10, Math.min(100, 60 - affB * 6))} r="4" fill="#38bdf8" />
              <text x="265" y="48" textAnchor="middle" className="text-xs font-black fill-emerald-300">f({affX}) = {y}</text>
              <text x="265" y="68" textAnchor="middle" className="text-[10px] fill-sky-300">f(0) = b = {affB}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`f(x) = ${affA}x ${affB >= 0 ? `+ ${affB}` : `− ${Math.abs(affB)}`} | f(${affX}) = ${y}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const y1 = 2;
      const y2 = 2 + affX2 * affA;
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">A(0 ; 2) et B({affX2} ; {y2})</label>
            <input type="range" min="1" max="5" value={affX2} onChange={(e) => setAffX2(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 100" className="w-full max-w-md h-auto">
              <line x1="60" y1="75" x2="160" y2="75" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="160" y1="75" x2="160" y2="25" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="60" y1="75" x2="160" y2="25" stroke="#fbbf24" strokeWidth="3" />
              <circle cx="60" cy="75" r="4.5" fill="#fbbf24" />
              <circle cx="160" cy="25" r="4.5" fill="#10b981" />
              <text x="255" y="52" textAnchor="middle" className="text-xs font-black fill-amber-300">Pente a = ({y2}−{y1}) / ({affX2}−0) = {affA}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁) = (${y2} − ${y1}) ÷ ${affX2} = ${affA}`} showColumnOp={false} />
        </div>
      );
    }
    const tA = affConso * 500;
    const tB = 2000 + affConso * 300;
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Nombre de trajets / Go : x = {affConso} (Seuil d’égalité à x = 10)</label>
          <input type="range" min="2" max="18" step="2" value={affConso} onChange={(e) => setAffConso(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 90" className="w-full max-w-md h-auto">
            <rect x="30" y="22" width={Math.min(180, tA / 60)} height="16" fill="#fbbf24" rx="4" />
            <text x="30" y="16" className="text-[10px] font-bold fill-amber-300">Tarif A (500x) : {tA} F</text>
            <rect x="30" y="58" width={Math.min(180, tB / 60)} height="16" fill="#38bdf8" rx="4" />
            <text x="30" y="52" className="text-[10px] font-bold fill-sky-300">Tarif B (300x + 2000) : {tB} F</text>
            <text x="275" y="48" textAnchor="middle" className="text-xs font-black fill-emerald-300">
              {tA < tB ? 'A moins cher' : tA > tB ? 'B moins cher' : 'ÉGALITÉ !'}
            </text>
          </svg>
        </div>
        <StandingMathRenderer expression={`500x = 300x + 2000 ⇔ 200x = 2000 ⇔ x = 10 | Pour x = ${affConso} : A=${tA} F, B=${tB} F`} showColumnOp={false} />
      </div>
    );
  }

  // 6. STATISTIQUES 3ÈME
  if (chapterId === 'math3-statistiques-3eme') {
    const tot = stC1 + stC2 + stC3;
    const moy = ((stC1 * 5 + stC2 * 10 + stC3 * 15) / tot).toFixed(2);
    if (experienceIndex === 0) {
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">[0;10[ : {stC1}</label>
              <input type="range" min="2" max="20" value={stC1} onChange={(e) => setStC1(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">[10;15[ : {stC2}</label>
              <input type="range" min="2" max="20" value={stC2} onChange={(e) => setStC2(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-emerald-300 block mb-1">[15;20] : {stC3}</label>
              <input type="range" min="2" max="20" value={stC3} onChange={(e) => setStC3(Number(e.target.value))} className="w-full accent-emerald-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <rect x="45" y={90 - stC1 * 3.5} width="55" height={stC1 * 3.5} fill="#fbbf24" rx="3" />
              <rect x="110" y={90 - stC2 * 3.5} width="55" height={stC2 * 3.5} fill="#38bdf8" rx="3" />
              <rect x="175" y={90 - stC3 * 3.5} width="55" height={stC3 * 3.5} fill="#10b981" rx="3" />
              <text x="280" y="55" textAnchor="middle" className="text-xs font-black fill-white">Moy ≈ {moy}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Effectif N = ${tot} | Moyenne = (${stC1}×5 + ${stC2}×10 + ${stC3}×15) ÷ ${tot} ≈ ${moy}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const ecc1 = stC1;
      const ecc2 = stC1 + stC2;
      const ecc3 = tot;
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-sky-300 block mb-1">Effectif classe centrale [10;15[ : {stC2} (Total N = {tot})</label>
            <input type="range" min="2" max="24" value={stC2} onChange={(e) => setStC2(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <polyline points={`40,90 110,${90 - ecc1 * 1.5} 180,${90 - ecc2 * 1.5} 250,${90 - ecc3 * 1.5}`} fill="none" stroke="#10b981" strokeWidth="3" />
              <line x1="40" y1={90 - (tot / 2) * 1.5} x2="260" y2={90 - (tot / 2) * 1.5} stroke="#fbbf24" strokeDasharray="4 3" />
              <text x="290" y="52" textAnchor="middle" className="text-[11px] font-black fill-amber-300">N/2 = {tot / 2}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`ECC : ${ecc1} ➔ ${ecc2} ➔ ${ecc3} | Médiane à N/2 = ${(tot / 2).toFixed(1)}`} showColumnOp={false} />
        </div>
      );
    }
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Q₁ = {stQ1}</label>
            <input type="range" min="4" max="9" value={stQ1} onChange={(e) => setStQ1(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-emerald-300 block mb-1">Médiane = {stMed}</label>
            <input type="range" min="10" max="13" value={stMed} onChange={(e) => setStMed(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Q₃ = {stQ3}</label>
            <input type="range" min="14" max="18" value={stQ3} onChange={(e) => setStQ3(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 80" className="w-full max-w-md h-auto">
            <line x1="40" y1="40" x2="300" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <rect x={40 + stQ1 * 12} y="22" width={(stQ3 - stQ1) * 12} height="36" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1={40 + stMed * 12} y1="20" x2={40 + stMed * 12} y2="60" stroke="#fbbf24" strokeWidth="3.5" />
          </svg>
        </div>
        <StandingMathRenderer expression={`Q₁ = ${stQ1} · Médiane = ${stMed} · Q₃ = ${stQ3} | Écart interquartile Q₃ − Q₁ = ${stQ3 - stQ1}`} showColumnOp={false} />
      </div>
    );
  }

  // 7. PROBABILITÉS 3ÈME
  if (chapterId === 'math3-probabilites-3eme') {
    const tot = prRed + prBlue;
    if (experienceIndex === 0) {
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-rose-300 block mb-1">Boules Rouges : {prRed}</label>
              <input type="range" min="2" max="6" value={prRed} onChange={(e) => setPrRed(Number(e.target.value))} className="w-full accent-rose-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Boules Bleues : {prBlue}</label>
              <input type="range" min="1" max="6" value={prBlue} onChange={(e) => setPrBlue(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 340 105" className="w-full max-w-md h-auto">
              <line x1="40" y1="52" x2="140" y2="26" stroke="#f43f5e" strokeWidth="2.5" />
              <line x1="40" y1="52" x2="140" y2="78" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="140" y1="26" x2="245" y2="16" stroke="#f43f5e" strokeWidth="2" />
              <line x1="140" y1="26" x2="245" y2="38" stroke="#38bdf8" strokeWidth="2" />
              <text x="90" y="30" className="text-[10px] font-black fill-rose-300">{prRed}/{tot}</text>
              <text x="275" y="22" className="text-[10px] font-black fill-emerald-300">RR</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Avec remise P(RR) = ${prRed * prRed}/${tot * tot} | Sans remise P(RR) = ${prRed * (prRed - 1)}/${tot * (tot - 1)}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const ways = 6 - Math.abs(7 - prTargetSum);
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Somme cible des 2 dés : {prTargetSum} ({ways} issues sur 36)</label>
            <input type="range" min="2" max="12" value={prTargetSum} onChange={(e) => setPrTargetSum(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 95" className="w-full max-w-md h-auto">
              <text x="160" y="42" textAnchor="middle" className="text-sm font-black fill-amber-300">Grille 6 × 6 = 36 couples équiprobables</text>
              <text x="160" y="68" textAnchor="middle" className="text-xs font-mono fill-emerald-300">Somme = {prTargetSum} ➔ {ways} / 36 ≈ {((ways / 36) * 100).toFixed(1)}%</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`P(Somme = ${prTargetSum}) = ${ways} ÷ 36 ≈ ${(ways / 36).toFixed(3)}`} showColumnOp={false} />
        </div>
      );
    }
    const theo = prRed / tot;
    const obs = Number((theo + (prTrials < 50 ? 0.08 : 0.01)).toFixed(3));
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-emerald-300 block mb-1">Nombre de tirages N : {prTrials}</label>
          <input type="range" min="10" max="500" step="10" value={prTrials} onChange={(e) => setPrTrials(Number(e.target.value))} className="w-full accent-emerald-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 340 80" className="w-full max-w-md h-auto">
            <rect x="40" y="20" width={theo * 220} height="16" fill="#38bdf8" rx="4" />
            <rect x="40" y="48" width={obs * 220} height="16" fill="#10b981" rx="4" />
            <text x="295" y="33" textAnchor="end" className="text-[10px] fill-sky-300">Théo: {theo.toFixed(2)}</text>
            <text x="295" y="61" textAnchor="end" className="text-[10px] fill-emerald-300">Obs: {obs.toFixed(2)}</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`À N = ${prTrials} tirages, la fréquence observée (${obs}) se stabilise autour de P = ${theo.toFixed(3)}`} showColumnOp={false} />
      </div>
    );
  }

  // 8. THALÈS 3ÈME
  if (chapterId === 'math3-thales-3eme') {
    if (experienceIndex === 0) {
      const ab = thMn * thK;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Rapport papillon OA/OM = {thK}</label>
              <input type="range" min="1.5" max="3.5" step="0.5" value={thK} onChange={(e) => setThK(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Segment MN = {thMn} cm</label>
              <input type="range" min="2" max="8" value={thMn} onChange={(e) => setThMn(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 300 110" className="w-full max-w-sm h-auto">
              <line x1="70" y1="22" x2="230" y2="88" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="210" y1="22" x2="90" y2="88" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="70" y1="22" x2="210" y2="22" stroke="#fbbf24" strokeWidth="2.5" />
              <line x1="90" y1="88" x2="230" y2="88" stroke="#10b981" strokeWidth="2.5" />
              <circle cx="145" cy="53" r="3.5" fill="#fff" />
              <text x="140" y="16" textAnchor="middle" className="text-[10px] font-black fill-amber-300">MN = {thMn} cm</text>
              <text x="160" y="103" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">AB = {ab} cm</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Papillon (AB) // (MN) : OM/OA = ON/OB = MN/AB ➔ AB = ${thK} × ${thMn} = ${ab} cm`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      const parallel = thCheckN === 6;
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">AN = {thCheckN} cm (AM/AB = 4/8 = 0,5 · AC = 12 cm)</label>
            <input type="range" min="4" max="8" step="1" value={thCheckN} onChange={(e) => setThCheckN(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 100" className="w-full max-w-md h-auto">
              <polygon points="80,15 30,85 160,85" fill="none" stroke="#94a3b8" strokeWidth="2" />
              <line x1="55" y1="50" x2={120 + (thCheckN - 6) * 5} y2={50 + (thCheckN - 6) * 5} stroke={parallel ? '#10b981' : '#f43f5e'} strokeWidth="3" />
              <text x="240" y="52" textAnchor="middle" className={`text-xs font-black ${parallel ? 'fill-emerald-300' : 'fill-rose-300'}`}>
                {parallel ? '(MN) // (BC) ✓' : 'NON PARALLÈLES ✗'}
              </text>
            </svg>
          </div>
          <StandingMathRenderer expression={`AM/AB = 0,50 | AN/AC = ${thCheckN}/12 = ${(thCheckN / 12).toFixed(2)} ➔ ${parallel ? 'Égaux : (MN)//(BC)' : 'Inégaux : non parallèles'}`} showColumnOp={false} />
        </div>
      );
    }
    const hTree = Number((thShadowTree * 1.5).toFixed(1));
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-emerald-300 block mb-1">Ombre de l’Okoumé : {thShadowTree} m (Bâton 1,5 m ➔ ombre 1 m)</label>
          <input type="range" min="6" max="24" step="2" value={thShadowTree} onChange={(e) => setThShadowTree(Number(e.target.value))} className="w-full accent-emerald-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 95" className="w-full max-w-md h-auto">
            <line x1="60" y1="80" x2="220" y2="80" stroke="#64748b" strokeWidth="2" />
            <line x1="60" y1="20" x2="60" y2="80" stroke="#10b981" strokeWidth="6" />
            <line x1="60" y1="20" x2="220" y2="80" stroke="#fbbf24" strokeDasharray="4 3" />
            <text x="265" y="54" textAnchor="middle" className="text-xs font-black fill-emerald-300">H = {hTree} m</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`Thalès : H ÷ ${thShadowTree} = 1,5 ÷ 1 ➔ Hauteur Okoumé = ${hTree} m`} showColumnOp={false} />
      </div>
    );
  }

  // 9. TRIGONOMÉTRIE 3ÈME
  if (chapterId === 'math3-trigonometrie-3eme') {
    const rad = (trAngle * Math.PI) / 180;
    const c = Number(Math.cos(rad).toFixed(3));
    const s = Number(Math.sin(rad).toFixed(3));
    const t = Number(Math.tan(rad).toFixed(3));
    if (experienceIndex === 0) {
      const opp = Number((trHyp * s).toFixed(2));
      const adj = Number((trHyp * c).toFixed(2));
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Angle α = {trAngle}°</label>
              <input type="range" min="15" max="75" step="15" value={trAngle} onChange={(e) => setTrAngle(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Hypoténuse = {trHyp} cm</label>
              <input type="range" min="6" max="20" step="2" value={trHyp} onChange={(e) => setTrHyp(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
              <polygon points={`40,85 ${40 + c * 140},85 ${40 + c * 140},${85 - s * 75}`} fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="255" y="45" textAnchor="middle" className="text-xs font-black fill-amber-300">Adj ≈ {adj} cm</text>
              <text x="255" y="65" textAnchor="middle" className="text-xs font-black fill-emerald-300">Opp ≈ {opp} cm</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`Adj = ${trHyp}×cos(${trAngle}°) ≈ ${adj} | Opp = ${trHyp}×sin(${trAngle}°) ≈ ${opp}`} showColumnOp={false} />
        </div>
      );
    }
    if (experienceIndex === 1) {
      return (
        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Angle α = {trAngle}° sur le quart de cercle (R = 1)</label>
            <input type="range" min="15" max="75" step="15" value={trAngle} onChange={(e) => setTrAngle(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
              <path d="M 60 90 L 140 90 A 80 80 0 0 0 60 10 Z" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
              <line x1="60" y1="90" x2={60 + c * 80} y2={90 - s * 80} stroke="#fbbf24" strokeWidth="3" />
              <circle cx={60 + c * 80} cy={90 - s * 80} r="4.5" fill="#10b981" />
              <text x="240" y="45" textAnchor="middle" className="text-xs font-black fill-amber-300">cos²+sin² = {(c * c + s * s).toFixed(2)}</text>
              <text x="240" y="65" textAnchor="middle" className="text-[11px] font-mono fill-sky-300">tan = sin/cos ≈ {t}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`cos(${trAngle}°) ≈ ${c}, sin(${trAngle}°) ≈ ${s} | cos² + sin² = 1`} showColumnOp={false} />
        </div>
      );
    }
    const phareH = Number((trDistBeacon * t).toFixed(1));
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-sky-300 block mb-1">Distance au phare : {trDistBeacon} m (Angle = {trAngle}°)</label>
          <input type="range" min="20" max="100" step="10" value={trDistBeacon} onChange={(e) => setTrDistBeacon(Number(e.target.value))} className="w-full accent-sky-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 95" className="w-full max-w-md h-auto">
            <rect x="65" y="20" width="16" height="62" fill="#fbbf24" />
            <line x1="81" y1="20" x2="210" y2="82" stroke="#38bdf8" strokeDasharray="4 3" strokeWidth="2" />
            <text x="258" y="54" textAnchor="middle" className="text-xs font-black fill-emerald-300">H = {phareH} m</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`tan(${trAngle}°) = H ÷ ${trDistBeacon} ➔ Hauteur phare = ${trDistBeacon} × ${t} = ${phareH} m`} showColumnOp={false} />
      </div>
    );
  }

  // 10. VECTEURS & TRANSLATIONS
  if (chapterId === 'math3-vecteurs-translations') {
    if (experienceIndex === 0 || experienceIndex === 1) {
      const mode = experienceIndex === 0 ? 'chasles' : vecMode;
      return (
        <div className="space-y-3">
          {experienceIndex === 1 && (
            <div className="flex gap-2">
              <button type="button" onClick={() => setVecMode('chasles')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${vecMode === 'chasles' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Chasles</button>
              <button type="button" onClick={() => setVecMode('para')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${vecMode === 'para' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Parallélogramme</button>
            </div>
          )}
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <label className="text-xs font-bold text-amber-300 block mb-1">Inclinaison vecteur BC⃗ / AD⃗ : {vecAngle}°</label>
            <input type="range" min="15" max="75" value={vecAngle} onChange={(e) => setVecAngle(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
              <line x1="40" y1="80" x2="160" y2="80" stroke="#fbbf24" strokeWidth="3" />
              {mode === 'chasles' ? (
                <line x1="160" y1="80" x2="210" y2={80 - vecAngle * 0.7} stroke="#38bdf8" strokeWidth="3" />
              ) : (
                <line x1="40" y1="80" x2="90" y2={80 - vecAngle * 0.7} stroke="#38bdf8" strokeWidth="3" />
              )}
              <line x1="40" y1="80" x2="210" y2={80 - vecAngle * 0.7} stroke="#10b981" strokeWidth="3.5" />
              <text x="265" y="54" textAnchor="middle" className="text-xs font-black fill-emerald-300">AC⃗ résultant</text>
            </svg>
          </div>
          <StandingMathRenderer expression={mode === 'chasles' ? 'AB⃗ + BC⃗ = AC⃗ (bout à bout)' : 'AB⃗ + AD⃗ = AC⃗ ⇔ ABCD est un parallélogramme'} showColumnOp={false} />
        </div>
      );
    }
    const isMid = vecMidPos === 50;
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Position du point I sur [AB] : {vecMidPos}% (Milieu à 50%)</label>
          <input type="range" min="20" max="80" step="10" value={vecMidPos} onChange={(e) => setVecMidPos(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 75" className="w-full max-w-md h-auto">
            <line x1="40" y1="40" x2="240" y2="40" stroke="#475569" strokeWidth="2.5" />
            <circle cx={40 + vecMidPos * 2} cy="40" r="6" fill={isMid ? '#10b981' : '#f43f5e'} />
            <text x="40" y="60" className="text-[10px] font-bold fill-white">A</text>
            <text x="240" y="60" className="text-[10px] font-bold fill-white">B</text>
          </svg>
        </div>
        <StandingMathRenderer expression={isMid ? 'IA⃗ + IB⃗ = 0⃗ ⇔ I est exactement le MILIEU de [AB] !' : 'IA⃗ + IB⃗ ≠ 0⃗ : I n’est pas le milieu.'} showColumnOp={false} />
      </div>
    );
  }

  // 11. ANGLES & POLYGONES
  if (chapterId === 'math3-angles-polygones') {
    if (experienceIndex === 0 || experienceIndex === 1) {
      const centreAngle = angInscr * 2;
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Angle inscrit AMB = {angInscr}°</label>
              <input type="range" min="20" max="65" value={angInscr} onChange={(e) => setAngInscr(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Position point M : {angShift}°</label>
              <input type="range" min="0" max="40" value={angShift} onChange={(e) => setAngShift(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 110" className="w-full max-w-md h-auto">
              <circle cx="110" cy="55" r="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <line x1="80" y1="84" x2="110" y2="55" stroke="#fbbf24" strokeWidth="2" />
              <line x1="140" y1="84" x2="110" y2="55" stroke="#fbbf24" strokeWidth="2" />
              <line x1="80" y1="84" x2={90 + angShift} y2="18" stroke="#10b981" strokeWidth="2" />
              <line x1="140" y1="84" x2={90 + angShift} y2="18" stroke="#10b981" strokeWidth="2" />
              <text x="245" y="45" textAnchor="middle" className="text-xs font-black fill-amber-300">AÔB = {centreAngle}°</text>
              <text x="245" y="65" textAnchor="middle" className="text-xs font-black fill-emerald-300">AMB = ANB = {angInscr}°</text>
            </svg>
          </div>
          <StandingMathRenderer expression={experienceIndex === 0 ? `Angle au centre AÔB = 2 × AMB = 2 × ${angInscr}° = ${centreAngle}°` : `Angles inscrits interceptant le même arc AB : AMB = ANB = ${angInscr}° | Quadrilatère opposé = ${180 - angInscr}°`} showColumnOp={false} />
        </div>
      );
    }
    const centre = (360 / polyN).toFixed(1);
    const inter = (180 - 360 / polyN).toFixed(1);
    return (
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <label className="text-xs font-bold text-amber-300 block mb-1">Polygone régulier à n = {polyN} côtés</label>
          <input type="range" min="3" max="10" value={polyN} onChange={(e) => setPolyN(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
            <polygon
              points={Array.from({ length: polyN }, (_, i) => {
                const a = (i * 2 * Math.PI) / polyN - Math.PI / 2;
                return `${105 + Math.cos(a) * 38},${52 + Math.sin(a) * 38}`;
              }).join(' ')}
              fill="#fbbf24"
              fillOpacity="0.2"
              stroke="#fbbf24"
              strokeWidth="2.5"
            />
            <text x="245" y="46" textAnchor="middle" className="text-xs font-black fill-sky-300">Centre : {centre}°</text>
            <text x="245" y="66" textAnchor="middle" className="text-xs font-black fill-emerald-300">Intérieur : {inter}°</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`n = ${polyN} : Angle au centre = 360°÷${polyN} = ${centre}° | Intérieur = ${inter}°`} showColumnOp={false} />
      </div>
    );
  }

  // 12. REPÉRAGE & DROITES
  if (chapterId === 'math3-reperage-droites') {
    if (experienceIndex === 0) {
      const dx = repBx - repAx;
      const dy = repBy - repAy;
      const dist = Math.sqrt(dx * dx + dy * dy).toFixed(2);
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">B_x = {repBx} (A(1 ; 2))</label>
              <input type="range" min="2" max="8" value={repBx} onChange={(e) => setRepBx(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">B_y = {repBy}</label>
              <input type="range" min="2" max="8" value={repBy} onChange={(e) => setRepBy(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 100" className="w-full max-w-md h-auto">
              <line x1="40" y1="80" x2="180" y2="80" stroke="#64748b" />
              <line x1="40" y1="10" x2="40" y2="80" stroke="#64748b" />
              <line x1={40 + repAx * 16} y1={80 - repAy * 8} x2={40 + repBx * 16} y2={80 - repBy * 8} stroke="#fbbf24" strokeWidth="3" />
              <circle cx={40 + repAx * 16} cy={80 - repAy * 8} r="4" fill="#38bdf8" />
              <circle cx={40 + repBx * 16} cy={80 - repBy * 8} r="4" fill="#10b981" />
              <text x="255" y="45" textAnchor="middle" className="text-xs font-black fill-amber-300">AB⃗({dx} ; {dy})</text>
              <text x="255" y="65" textAnchor="middle" className="text-xs font-black fill-emerald-300">AB = {dist}</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`AB⃗(${repBx}−${repAx} ; ${repBy}−${repAy}) = (${dx} ; ${dy}) | AB = √(${dx}²+${dy}²) ≈ ${dist}`} showColumnOp={false} />
        </div>
      );
    }
    const det = repUx * repVy - repUy * repVx;
    const ortho = repUx * repVx + repUy * repVy;
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block">u_x={repUx}</label>
            <input type="range" min="-4" max="6" value={repUx} onChange={(e) => setRepUx(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-amber-300 block">u_y={repUy}</label>
            <input type="range" min="-4" max="8" value={repUy} onChange={(e) => setRepUy(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block">v_x={repVx}</label>
            <input type="range" min="-4" max="6" value={repVx} onChange={(e) => setRepVx(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block">v_y={repVy}</label>
            <input type="range" min="-4" max="9" value={repVy} onChange={(e) => setRepVy(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 95" className="w-full max-w-md h-auto">
            <line x1="90" y1="75" x2={90 + repUx * 10} y2={75 - repUy * 6} stroke="#fbbf24" strokeWidth="3" />
            <line x1="90" y1="75" x2={90 + repVx * 10} y2={75 - repVy * 6} stroke="#38bdf8" strokeWidth="3" />
            <text x="245" y="45" textAnchor="middle" className={`text-xs font-black ${experienceIndex === 1 ? (det === 0 ? 'fill-emerald-300' : 'fill-amber-300') : ortho === 0 ? 'fill-emerald-300' : 'fill-sky-300'}`}>
              {experienceIndex === 1 ? (det === 0 ? 'COLINÉAIRES ✓' : `det = ${det}`) : ortho === 0 ? 'ORTHOGONAUX ⊥ ✓' : `xx’+yy’ = ${ortho}`}
            </text>
          </svg>
        </div>
        <StandingMathRenderer
          expression={experienceIndex === 1 ? `det(u⃗,v⃗) = ${repUx}×${repVy} − ${repUy}×${repVx} = ${det} ${det === 0 ? '(COLINÉAIRES)' : ''}` : `u⃗·v⃗ = ${repUx}×${repVx} + ${repUy}×${repVy} = ${ortho} ${ortho === 0 ? '(ORTHOGONAUX ⊥)' : ''}`}
          showColumnOp={false}
        />
      </div>
    );
  }

  // 13. PYRAMIDES & CÔNES
  if (chapterId === 'math3-pyramides-cones') {
    if (experienceIndex === 0) {
      const vol = Number(((pyrB * pyrB * pyrH) / 3).toFixed(1));
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
            <div>
              <label className="text-xs font-bold text-amber-300 block mb-1">Côté base carrée c = {pyrB} cm</label>
              <input type="range" min="3" max="12" value={pyrB} onChange={(e) => setPyrB(Number(e.target.value))} className="w-full accent-amber-400" />
            </div>
            <div>
              <label className="text-xs font-bold text-sky-300 block mb-1">Hauteur h = {pyrH} cm</label>
              <input type="range" min="3" max="15" value={pyrH} onChange={(e) => setPyrH(Number(e.target.value))} className="w-full accent-sky-400" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
              <polygon points="105,15 55,85 155,85" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="2.5" />
              <line x1="105" y1="15" x2="105" y2="85" stroke="#38bdf8" strokeDasharray="3 2" strokeWidth="2" />
              <text x="245" y="54" textAnchor="middle" className="text-xs font-black fill-emerald-300">V = {vol} cm³</text>
            </svg>
          </div>
          <StandingMathRenderer expression={`V = ⅓ × (${pyrB}²) × ${pyrH} = ${vol} cm³`} showColumnOp={false} />
        </div>
      );
    }
    const gen = Number(Math.sqrt(coneR * coneR + coneH * coneH).toFixed(2));
    const vPi = Number(((coneR * coneR * coneH) / 3).toFixed(1));
    const alpha = Math.round((360 * coneR) / gen);
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Rayon r = {coneR} cm</label>
            <input type="range" min="2" max="8" value={coneR} onChange={(e) => setConeR(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Hauteur h = {coneH} cm</label>
            <input type="range" min="3" max="12" value={coneH} onChange={(e) => setConeH(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
            {experienceIndex === 1 ? (
              <>
                <polygon points="105,15 60,82 150,82" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="245" y="45" textAnchor="middle" className="text-xs font-black fill-amber-300">g = {gen} cm</text>
                <text x="245" y="65" textAnchor="middle" className="text-xs font-black fill-emerald-300">V = {vPi}π cm³</text>
              </>
            ) : (
              <>
                <path d="M 105 55 L 155 55 A 50 50 0 1 0 75 18 Z" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="2.5" />
                <text x="245" y="54" textAnchor="middle" className="text-xs font-black fill-amber-300">Secteur α ≈ {alpha}°</text>
              </>
            )}
          </svg>
        </div>
        <StandingMathRenderer expression={experienceIndex === 1 ? `g = √(${coneR}²+${coneH}²) = ${gen} cm | V = ⅓ π r² h = ${vPi}π cm³` : `Angle patron α = 360° × r ÷ g = 360° × ${coneR} ÷ ${gen} ≈ ${alpha}°`} showColumnOp={false} />
      </div>
    );
  }

  // 14. SECTIONS PLANES & AGRANDISSEMENT k³
  if (experienceIndex === 0 || experienceIndex === 1) {
    const k3 = secDen * secDen * secDen;
    const vPetit = Number((secV / k3).toFixed(2));
    const vTronc = Number((secV - vPetit).toFixed(2));
    return (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
          <div>
            <label className="text-xs font-bold text-amber-300 block mb-1">Réduction k = 1/{secDen} (k³ = 1/{k3})</label>
            <input type="range" min="2" max="4" value={secDen} onChange={(e) => setSecDen(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
          <div>
            <label className="text-xs font-bold text-sky-300 block mb-1">Grand volume V = {secV} cm³</label>
            <input type="range" min="16" max="160" step="8" value={secV} onChange={(e) => setSecV(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>
        </div>
        <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 320 105" className="w-full max-w-md h-auto">
            <polygon points="105,12 55,92 155,92" fill="#38bdf8" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="2" />
            <line x1={105 - 50 / secDen} y1={12 + 80 / secDen} x2={105 + 50 / secDen} y2={12 + 80 / secDen} stroke="#fbbf24" strokeWidth="3" />
            <text x="245" y="46" textAnchor="middle" className="text-xs font-black fill-amber-300">V’ = {vPetit} cm³</text>
            <text x="245" y="66" textAnchor="middle" className="text-xs font-black fill-emerald-300">Tronc = {vTronc} cm³</text>
          </svg>
        </div>
        <StandingMathRenderer expression={`V_petit = ${secV} ÷ ${k3} = ${vPetit} cm³ | V_tronc = ${secV} − ${vPetit} = ${vTronc} cm³`} showColumnOp={false} />
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 tabular-nums">
        <label className="text-xs font-bold text-amber-300 block mb-1">Facteur d’agrandissement k = {scaleK}</label>
        <input type="range" min="2" max="5" value={scaleK} onChange={(e) => setScaleK(Number(e.target.value))} className="w-full accent-amber-400" />
      </div>
      <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
        <svg viewBox="0 0 320 90" className="w-full max-w-md h-auto">
          <text x="70" y="30" className="text-[11px] font-black fill-amber-300">Longueur × {scaleK}</text>
          <text x="70" y="52" className="text-[11px] font-black fill-sky-300">Aire × {scaleK * scaleK}</text>
          <text x="70" y="74" className="text-[11px] font-black fill-emerald-300">Volume × {scaleK * scaleK * scaleK}</text>
        </svg>
      </div>
      <StandingMathRenderer expression={`Pour k = ${scaleK} : Longueurs × ${scaleK} | Aires × k² = ×${scaleK * scaleK} | Volumes × k³ = ×${scaleK * scaleK * scaleK}`} showColumnOp={false} />
    </div>
  );
};
