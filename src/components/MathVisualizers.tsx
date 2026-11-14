import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  FileText,
} from 'lucide-react';
import { CHAPTERS } from '../data/curriculumData';
import { StandingMathRenderer } from './StandingMathRenderer';

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

const LAB_MODULES = [
  { label: 'Atelier 1', title: 'Relatifs, Fractions & Puissances', chapterId: 'nombres-relatifs-operations' },
  { label: 'Atelier 2', title: 'Calcul Littéral & Identités', chapterId: 'calcul-litteral-developpement' },
  { label: 'Atelier 3', title: 'Équations & Inéquations', chapterId: 'equations-premier-degre' },
  { label: 'Atelier 4', title: 'Pythagore & Racine Carrée', chapterId: 'theoreme-pythagore' },
  { label: 'Atelier 5', title: 'Milieux, Thalès & Cosinus', chapterId: 'trigonometrie-triangle-rectangle' },
  { label: 'Atelier 6', title: 'Volumes, Vitesses & Stats', chapterId: 'geometrie-espace-volumes' },
];

export const MathVisualizers: React.FC = () => {
  const [selectedChapIdx, setSelectedChapIdx] = useState<number>(0);
  const [selectedConceptIdx, setSelectedConceptIdx] = useState<number>(1);
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  const currentLab = LAB_MODULES[selectedChapIdx] || LAB_MODULES[0];
  const currentChapter = CHAPTERS.find((c) => c.id === currentLab.chapterId) || CHAPTERS[0];

  // ======================================================================
  // CHAPITRE 1 : RELATIFS, RATIONNELS & PUISSANCES (5 concepts)
  // ======================================================================
  const [c1SignA, setC1SignA] = useState<number>(-4);
  const [c1SignB, setC1SignB] = useState<number>(-5);
  const [c1NegCount, setC1NegCount] = useState<number>(3);
  const [c1FracA, setC1FracA] = useState<number>(3);
  const [c1FracB, setC1FracB] = useState<number>(4);
  const [c1FracC, setC1FracC] = useState<number>(5);
  const [c1FracD, setC1FracD] = useState<number>(2);
  const [c1ExpN, setC1ExpN] = useState<number>(4);
  const [c1ExpM, setC1ExpM] = useState<number>(2);
  const [c1SciMantissa, setC1SciMantissa] = useState<number>(4.5);
  const [c1SciPow, setC1SciPow] = useState<number>(5);

  // ======================================================================
  // CHAPITRE 2 : CALCUL LITTÉRAL (5 concepts)
  // ======================================================================
  const [c2TermX2, setC2TermX2] = useState<number>(3);
  const [c2TermX, setC2TermX] = useState<number>(5);
  const [c2SimpleK, setC2SimpleK] = useState<number>(4);
  const [c2SimpleA, setC2SimpleA] = useState<number>(2);
  const [c2SimpleB, setC2SimpleB] = useState<number>(-3);
  const [c2DoubleA, setC2DoubleA] = useState<number>(3);
  const [c2DoubleB, setC2DoubleB] = useState<number>(2);
  const [c2MinusA, setC2MinusA] = useState<number>(10);
  const [c2MinusB, setC2MinusB] = useState<number>(4);
  const [c2MinusC, setC2MinusC] = useState<number>(3);
  const [c2FactK, setC2FactK] = useState<number>(6);
  const [c2FactB, setC2FactB] = useState<number>(3);

  // ======================================================================
  // CHAPITRE 3 : ÉQUATIONS DU 1ER DEGRÉ (5 concepts)
  // ======================================================================
  const [c3BalTestX, setC3BalTestX] = useState<number>(1000);
  const [c3EqA, setC3EqA] = useState<number>(3);
  const [c3EqB, setC3EqB] = useState<number>(500);
  const [c3EqSol, setC3EqSol] = useState<number>(1000);
  const [c3TwoSideA, setC3TwoSideA] = useState<number>(5);
  const [c3TwoSideC, setC3TwoSideC] = useState<number>(2);
  const [c3TwoSideSol, setC3TwoSideSol] = useState<number>(5);
  const [c3ParenK, setC3ParenK] = useState<number>(2);
  const [c3ParenA, setC3ParenA] = useState<number>(4);
  const [c3ParenSol, setC3ParenSol] = useState<number>(5);
  const [c3MarketBags, setC3MarketBags] = useState<number>(4);
  const [c3MarketBagPrice, setC3MarketBagPrice] = useState<number>(1000);
  const [c3MarketExtra, setC3MarketExtra] = useState<number>(2500);

  // ======================================================================
  // CHAPITRE 4 : PYTHAGORE & RACINE CARRÉE (5 concepts)
  // ======================================================================
  const [c4PythAB, setC4PythAB] = useState<number>(3);
  const [c4PythAC, setC4PythAC] = useState<number>(4);
  const [c4SideHyp, setC4SideHyp] = useState<number>(13);
  const [c4SideKnown, setC4SideKnown] = useState<number>(5);
  const [c4RootN, setC4RootN] = useState<number>(7);
  const [c4RecA, setC4RecA] = useState<number>(9);
  const [c4RecB, setC4RecB] = useState<number>(12);
  const [c4RecC, setC4RecC] = useState<number>(15);
  const [c4LadderHyp, setC4LadderHyp] = useState<number>(5);
  const [c4LadderFloor, setC4LadderFloor] = useState<number>(3);

  // ======================================================================
  // CHAPITRE 5 : DROITE DES MILIEUX & COSINUS (5 concepts)
  // ======================================================================
  const [c5BaseBC, setC5BaseBC] = useState<number>(14);
  const [c5MidIJ, setC5MidIJ] = useState<number>(6.5);
  const [c5PeriABC, setC5PeriABC] = useState<number>(32);
  const [c5CosAngle, setC5CosAngle] = useState<number>(60);
  const [c5CosHyp, setC5CosHyp] = useState<number>(16);
  const [c5FindHypAdj, setC5FindHypAdj] = useState<number>(9);
  const [c5FindHypAngle, setC5FindHypAngle] = useState<number>(60);

  // ======================================================================
  // CHAPITRE 6 : VOLUMES, VITESSES & STATISTIQUES (5 concepts)
  // ======================================================================
  const [c6PyrSide, setC6PyrSide] = useState<number>(6);
  const [c6PyrH, setC6PyrH] = useState<number>(10);
  const [c6ConeR, setC6ConeR] = useState<number>(3);
  const [c6ConeH, setC6ConeH] = useState<number>(10);
  const [c6SpeedDist, setC6SpeedDist] = useState<number>(240);
  const [c6SpeedHours, setC6SpeedHours] = useState<number>(3);
  const [c6Minutes, setC6Minutes] = useState<number>(30);
  const [c6HoursPart, setC6HoursPart] = useState<number>(2);
  const [c6Grade1, setC6Grade1] = useState<number>(10);
  const [c6Grade2, setC6Grade2] = useState<number>(16);
  const [c6Coef2, setC6Coef2] = useState<number>(2);

  const getConceptNamesForChapter = (chapIndex: number) => {
    switch (chapIndex) {
      case 0:
        return [
          { id: 1, title: 'Règle des Signes (×, ÷)', icon: '⚡', desc: 'Produit de deux relatifs' },
          { id: 2, title: 'Compteur de Signes (-)', icon: '🔢', desc: 'Pair ➔ (+) | Impair ➔ (-)' },
          { id: 3, title: 'Division par l’Inverse', icon: '🔄', desc: '(a/b) ÷ (c/d) = (a/b) × (d/c)' },
          { id: 4, title: 'Lois des Puissances 10ⁿ', icon: '🚀', desc: 'Additionner / soustraire exposants' },
          { id: 5, title: 'Écriture Scientifique', icon: '🌍', desc: 'Grands montants en F CFA' },
        ];
      case 1:
        return [
          { id: 1, title: 'Familles x² et x', icon: '🧺', desc: 'Ne jamais mélanger !' },
          { id: 2, title: 'Simple Distributivité', icon: '🏹', desc: 'Développer k(ax + b)' },
          { id: 3, title: 'Champ de Manioc (Double)', icon: '🌱', desc: 'Aire (x + a)(x + b)' },
          { id: 4, title: 'Signe (-) Devant ( )', icon: '⚠️', desc: 'Inverser tous les signes' },
          { id: 5, title: 'Factorisation Commune', icon: '📦', desc: 'k·x + k·b = k(x + b)' },
        ];
      case 2:
        return [
          { id: 1, title: 'La Balance Équilibrée', icon: '⚖️', desc: 'Tester si x équilibre = ' },
          { id: 2, title: 'Équation ax + b = c', icon: '🎯', desc: 'Transposer puis diviser' },
          { id: 3, title: 'x des Deux Côtés', icon: '🔄', desc: 'ax + b = cx + d' },
          { id: 4, title: 'Avec Parenthèses k(x+a)', icon: '📦', desc: 'Développer puis résoudre' },
          { id: 5, title: 'Problème Marché F CFA', icon: '💰', desc: 'Atangas & régime de bananes' },
        ];
      case 3:
        return [
          { id: 1, title: 'Les 3 Carrés Pythagore', icon: '📐', desc: 'Hypoténuse² = AB² + AC²' },
          { id: 2, title: 'Petit Côté (Soustraction)', icon: '➖', desc: 'AB² = BC² - AC²' },
          { id: 3, title: 'Carrés Parfaits & √', icon: '√', desc: 'Lien aire ↔ côté' },
          { id: 4, title: 'Test Angle Droit (Réciproque)', icon: '🧱', desc: 'Comparer C² et A² + B²' },
          { id: 5, title: 'Échelle Contre le Mur', icon: '🪜', desc: 'Application concrète 4e' },
        ];
      case 4:
        return [
          { id: 1, title: 'Milieux : Moitié (BC ÷ 2)', icon: '🌉', desc: '(IJ) // (BC) et IJ = BC/2' },
          { id: 2, title: 'Retrouver BC (Double)', icon: '✖️', desc: 'BC = 2 × IJ' },
          { id: 3, title: 'Triangle des Milieux', icon: '🔺', desc: 'Périmètre réduit de moitié' },
          { id: 4, title: 'Cosinus : Côté Adjacent', icon: '📐', desc: 'Adjacent = Hyp × cos(α)' },
          { id: 5, title: 'Cosinus : Hypoténuse', icon: '🔭', desc: 'Hyp = Adjacent ÷ cos(α)' },
        ];
      case 5:
        return [
          { id: 1, title: 'Volume Pyramide (÷ 3)', icon: '🔺', desc: 'V = (B × h) ÷ 3' },
          { id: 2, title: 'Volume du Cône (πr²h/3)', icon: '🍦', desc: 'Base circulaire pointue' },
          { id: 3, title: 'Vitesse Moyenne v = d ÷ t', icon: '🚄', desc: 'Trajets au Gabon (km/h)' },
          { id: 4, title: 'Piège Heures Décimales', icon: '⏱️', desc: 'Convertir min ÷ 60' },
          { id: 5, title: 'Moyenne Pondérée', icon: '📊', desc: 'Notes avec coefficients' },
        ];
      default:
        return [];
    }
  };

  const concepts = getConceptNamesForChapter(selectedChapIdx);

  // Derived values for clean display
  const divNum = c1FracA * c1FracD;
  const divDen = c1FracB * c1FracC;
  const divGcd = gcd(divNum, divDen);

  const cosVal = Number(Math.cos((c5CosAngle * Math.PI) / 180).toFixed(3));
  const cosAdj = Number((c5CosHyp * cosVal).toFixed(2));
  const cosHypVal = Number(Math.cos((c5FindHypAngle * Math.PI) / 180).toFixed(3));
  const cosFoundHyp = Number((c5FindHypAdj / (cosHypVal || 0.01)).toFixed(2));

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* 1. TOP HEADER DU LABO VISUEL */}
      <div className="rounded-3xl bg-slate-900 border-2 border-sky-500/30 p-5 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 p-0.5 shadow-lg shadow-sky-500/20 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-sky-400 font-black">
                <Compass className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-amber-300 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-800">
                  🇬🇦 Collège CIAM 4ème
                </span>
                <span className="text-[11px] font-bold text-emerald-400">
                  30 Concepts Interactifs (5 par chapitre)
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                Laboratoire Visuel & Simulateurs Interactifs 4ème
              </h2>
              <p className="text-xs text-slate-300">
                Choisis un chapitre et manipule les 5 simulateurs illustrés avec toutes les formules posées debout !
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowChapterMemo(!showChapterMemo)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition cursor-pointer shadow"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{showChapterMemo ? 'Masquer le Mémo' : 'Afficher le Mémo'}</span>
          </button>
        </div>

        {/* CHAPTER SELECTOR BAR (6 Grands Ateliers × 5 concepts) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-4 pt-3 border-t border-slate-800">
          {LAB_MODULES.map((mod, idx) => (
            <button
              key={mod.chapterId}
              onClick={() => {
                setSelectedChapIdx(idx);
                setSelectedConceptIdx(1);
              }}
              className={`p-2.5 rounded-2xl text-left transition cursor-pointer border flex flex-col justify-between ${
                selectedChapIdx === idx
                  ? 'bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border-sky-400 text-white shadow-lg ring-2 ring-sky-400/30'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                {mod.label}
              </div>
              <div className="text-xs font-bold truncate mt-0.5 text-slate-100">
                {mod.title}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                <span>✦</span> 5 concepts
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. FICHE MÉMO RAPIDE DU CHAPITRE SÉLECTIONNÉ */}
      {showChapterMemo && currentChapter.memoSheet && (
        <div className="rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-4 sm:p-5 shadow-xl space-y-3 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                Fiche Mémo Rapide : {currentChapter.title}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
              Formules 100% Debout
            </span>
          </div>

          <p className="text-xs text-slate-300 font-medium">
            💡 {currentChapter.memoSheet.slogan}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {currentChapter.memoSheet.verticalFormulas.slice(0, 3).map((vf, vIdx) => (
              <StandingMathRenderer
                key={vIdx}
                expression={vf.steps.join('\n')}
                subResult={vf.resultHighlight}
                title={`Mémo Debout : ${vf.name}`}
                showColumnOp={false}
              />
            ))}
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
            <span className="text-base select-none">🐆</span>
            <div>
              <strong className="font-bold text-amber-300">Règle d’or de Koko :</strong>{' '}
              {currentChapter.memoSheet.kokoTip}
            </div>
          </div>
        </div>
      )}

      {/* 3. SÉLECTION DES 5 CONCEPTS DU CHAPITRE */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Les 5 Concepts Visuels du Chapitre {selectedChapIdx + 1} :</span>
          </span>
          <span className="text-[11px] text-slate-400">Clique pour changer de concept</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {concepts.map((conc) => {
            const isSelected = selectedConceptIdx === conc.id;
            return (
              <button
                key={conc.id}
                onClick={() => setSelectedConceptIdx(conc.id)}
                className={`p-3 rounded-2xl text-left transition cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-lg ring-2 ring-amber-400/40'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-lg">{conc.icon}</span>
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    #{conc.id}
                  </span>
                </div>
                <div className="mt-2 text-xs font-extrabold leading-tight">
                  {conc.title}
                </div>
                <div
                  className={`text-[10px] mt-1 truncate ${
                    isSelected ? 'text-slate-800' : 'text-slate-500'
                  }`}
                >
                  {conc.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* CHAPITRE 1 : RELATIFS, RATIONNELS & PUISSANCES (5 CONCEPTS)    */}
      {/* ============================================================== */}
      {selectedChapIdx === 0 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">⚡ Concept 1 : Règle des Signes en Multiplication (a × b)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">
                    Facteur A : {c1SignA >= 0 ? `+${c1SignA}` : c1SignA}
                  </label>
                  <input type="range" min="-10" max="10" value={c1SignA} onChange={(e) => setC1SignA(Number(e.target.value) || 1)} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1">
                    Facteur B : {c1SignB >= 0 ? `+${c1SignB}` : c1SignB}
                  </label>
                  <input type="range" min="-10" max="10" value={c1SignB} onChange={(e) => setC1SignB(Number(e.target.value) || 1)} className="w-full accent-sky-400" />
                </div>
              </div>
              <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <svg viewBox="0 0 340 80" className="w-full max-w-md h-auto">
                  <circle cx="55" cy="40" r="24" fill={c1SignA >= 0 ? '#10b981' : '#f43f5e'} />
                  <text x="55" y="45" textAnchor="middle" className="text-sm font-black fill-white">{c1SignA >= 0 ? `+${c1SignA}` : c1SignA}</text>
                  <text x="108" y="46" textAnchor="middle" className="text-lg font-black fill-amber-300">×</text>
                  <circle cx="160" cy="40" r="24" fill={c1SignB >= 0 ? '#10b981' : '#f43f5e'} />
                  <text x="160" y="45" textAnchor="middle" className="text-sm font-black fill-white">{c1SignB >= 0 ? `+${c1SignB}` : c1SignB}</text>
                  <text x="215" y="46" textAnchor="middle" className="text-lg font-black fill-white">=</text>
                  <rect x="242" y="16" width="84" height="48" rx="12" fill={c1SignA * c1SignB >= 0 ? '#059669' : '#e11d48'} />
                  <text x="284" y="45" textAnchor="middle" className="text-base font-black fill-white">
                    {c1SignA * c1SignB > 0 ? `+${c1SignA * c1SignB}` : c1SignA * c1SignB}
                  </text>
                </svg>
              </div>
              <StandingMathRenderer
                expression={`P = (${c1SignA}) × (${c1SignB}) | Signe = ${c1SignA * c1SignB >= 0 ? 'Même signe ➔ +' : 'Signes contraires ➔ -'} | P = ${c1SignA * c1SignB > 0 ? `+${c1SignA * c1SignB}` : c1SignA * c1SignB}`}
                title="Règle des Signes Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔢 Concept 2 : Compteur de Facteurs Négatifs (−)</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <label className="text-xs text-slate-300 font-bold block tabular-nums">
                  Nombre de signes (−) dans le produit : {c1NegCount} ({c1NegCount % 2 === 0 ? 'PAIR ➔ Résultat +' : 'IMPAIR ➔ Résultat -'})
                </label>
                <input type="range" min="1" max="6" value={c1NegCount} onChange={(e) => setC1NegCount(Number(e.target.value))} className="w-full accent-amber-400" />
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {Array.from({ length: c1NegCount }).map((_, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-rose-950 border border-rose-500 text-rose-200 font-mono font-bold text-xs">
                      (−2)
                    </span>
                  ))}
                </div>
              </div>
              <StandingMathRenderer
                expression={`Produit de ${c1NegCount} facteurs (−2) | Nombre de (−) = ${c1NegCount} (${c1NegCount % 2 === 0 ? 'Pair' : 'Impair'}) | Résultat = ${Math.pow(-2, c1NegCount) > 0 ? `+${Math.pow(-2, c1NegCount)}` : Math.pow(-2, c1NegCount)}`}
                title="Parité des Signes Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔄 Concept 3 : Diviser Deux Fractions = Multiplier par l’Inverse</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">a = {c1FracA}</label>
                  <input type="range" min="1" max="7" value={c1FracA} onChange={(e) => setC1FracA(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">b = {c1FracB}</label>
                  <input type="range" min="2" max="9" value={c1FracB} onChange={(e) => setC1FracB(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">c = {c1FracC}</label>
                  <input type="range" min="1" max="7" value={c1FracC} onChange={(e) => setC1FracC(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">d = {c1FracD}</label>
                  <input type="range" min="2" max="9" value={c1FracD} onChange={(e) => setC1FracD(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`Q = (${c1FracA}/${c1FracB}) ÷ (${c1FracC}/${c1FracD}) | = (${c1FracA}/${c1FracB}) × (${c1FracD}/${c1FracC}) | = ${divNum}/${divDen} | = ${divNum / divGcd}/${divDen / divGcd}`}
                subResult={`Inverse de ${c1FracC}/${c1FracD} = ${c1FracD}/${c1FracC}`}
                title="Division de Fractions Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🚀 Concept 4 : Lois des Puissances de 10 (10ⁿ × 10ᵐ)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Exposant n : {c1ExpN}</label>
                  <input type="range" min="-4" max="6" value={c1ExpN} onChange={(e) => setC1ExpN(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Exposant m : {c1ExpM}</label>
                  <input type="range" min="-4" max="6" value={c1ExpM} onChange={(e) => setC1ExpM(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`Produit = 10^${c1ExpN} × 10^${c1ExpM} | = 10^(${c1ExpN} + ${c1ExpM}) | = 10^${c1ExpN + c1ExpM}`}
                subResult={`Quotient : 10^${c1ExpN} ÷ 10^${c1ExpM} = 10^${c1ExpN - c1ExpM}`}
                title="Règles sur les Exposants Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🌍 Concept 5 : Écriture Scientifique d’un Budget en F CFA</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Mantisse a (1 ≤ a &lt; 10) : {c1SciMantissa}</label>
                  <input type="range" min="1.5" max="9.5" step="0.5" value={c1SciMantissa} onChange={(e) => setC1SciMantissa(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Puissance 10ⁿ (n) : {c1SciPow}</label>
                  <input type="range" min="3" max="7" value={c1SciPow} onChange={(e) => setC1SciPow(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`Montant = ${(c1SciMantissa * Math.pow(10, c1SciPow)).toLocaleString('fr-FR')} F CFA | = ${c1SciMantissa} × ${Math.pow(10, c1SciPow).toLocaleString('fr-FR')} | = ${c1SciMantissa} × 10^${c1SciPow} F CFA`}
                title="Notation Scientifique Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* CHAPITRE 2 : CALCUL LITTÉRAL (5 CONCEPTS)                      */}
      {/* ============================================================== */}
      {selectedChapIdx === 1 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🧺 Concept 1 : Trier les Familles (x², x et nombres)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-indigo-300 font-bold block mb-1">Nombre de x² ajoutés : {c2TermX2}</label>
                  <input type="range" min="1" max="8" value={c2TermX2} onChange={(e) => setC2TermX2(Number(e.target.value))} className="w-full accent-indigo-400" />
                </div>
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Nombre de x ajoutés : {c2TermX}</label>
                  <input type="range" min="1" max="9" value={c2TermX} onChange={(e) => setC2TermX(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`E = ${c2TermX2}x² + ${c2TermX}x + 2x² + 3x + 7 | = (${c2TermX2} + 2)x² + (${c2TermX} + 3)x + 7 | = ${c2TermX2 + 2}x² + ${c2TermX + 3}x + 7`}
                title="Réduction par Familles Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🏹 Concept 2 : Simple Distributivité k(ax + b)</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block mb-1">Facteur k = {c2SimpleK}</label>
                  <input type="range" min="2" max="8" value={c2SimpleK} onChange={(e) => setC2SimpleK(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block mb-1">Coefficient a = {c2SimpleA}</label>
                  <input type="range" min="1" max="6" value={c2SimpleA} onChange={(e) => setC2SimpleA(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-rose-300 font-bold block mb-1">Constante b = {c2SimpleB}</label>
                  <input type="range" min="-6" max="6" value={c2SimpleB} onChange={(e) => setC2SimpleB(Number(e.target.value) || 1)} className="w-full accent-rose-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`A = ${c2SimpleK}(${c2SimpleA}x ${c2SimpleB >= 0 ? `+ ${c2SimpleB}` : `- ${Math.abs(c2SimpleB)}`}) | = ${c2SimpleK} × ${c2SimpleA}x ${c2SimpleB >= 0 ? `+ ${c2SimpleK} × ${c2SimpleB}` : `- ${c2SimpleK} × ${Math.abs(c2SimpleB)}`} | = ${c2SimpleK * c2SimpleA}x ${c2SimpleK * c2SimpleB >= 0 ? `+ ${c2SimpleK * c2SimpleB}` : `- ${Math.abs(c2SimpleK * c2SimpleB)}`}`}
                title="Développement Simple Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🌱 Concept 3 : Le Champ de Manioc (x + a)(x + b)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Allongement droite (+a) : +{c2DoubleA} m</label>
                  <input type="range" min="1" max="7" value={c2DoubleA} onChange={(e) => setC2DoubleA(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Allongement bas (+b) : +{c2DoubleB} m</label>
                  <input type="range" min="1" max="7" value={c2DoubleB} onChange={(e) => setC2DoubleB(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <svg viewBox="0 0 360 150" className="w-full max-w-md h-auto">
                  <rect x="60" y="20" width="120" height="65" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
                  <text x="120" y="56" textAnchor="middle" className="text-sm font-black fill-white">x²</text>
                  <rect x="180" y="20" width={60 + c2DoubleA * 8} height="65" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
                  <text x={180 + (60 + c2DoubleA * 8) / 2} y="56" textAnchor="middle" className="text-xs font-black fill-sky-200">+{c2DoubleA}x</text>
                  <rect x="60" y="85" width="120" height={26 + c2DoubleB * 4} fill="#059669" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
                  <text x="120" y={85 + (26 + c2DoubleB * 4) / 2 + 4} textAnchor="middle" className="text-xs font-black fill-emerald-200">+{c2DoubleB}x</text>
                  <rect x="180" y="85" width={60 + c2DoubleA * 8} height={26 + c2DoubleB * 4} fill="#d97706" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
                  <text x={180 + (60 + c2DoubleA * 8) / 2} y={85 + (26 + c2DoubleB * 4) / 2 + 4} textAnchor="middle" className="text-xs font-black fill-amber-200">+{c2DoubleA * c2DoubleB}</text>
                </svg>
              </div>
              <StandingMathRenderer
                expression={`B = (x + ${c2DoubleA})(x + ${c2DoubleB}) | = x² + ${c2DoubleB}x + ${c2DoubleA}x + ${c2DoubleA * c2DoubleB} | = x² + ${c2DoubleA + c2DoubleB}x + ${c2DoubleA * c2DoubleB}`}
                title="Double Distributivité Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">⚠️ Concept 4 : Signe Moins (−) Devant une Parenthèse</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-slate-300 font-bold block">Nombre départ : {c2MinusA}</label>
                  <input type="range" min="5" max="20" value={c2MinusA} onChange={(e) => setC2MinusA(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Coeff x : {c2MinusB}</label>
                  <input type="range" min="1" max="8" value={c2MinusB} onChange={(e) => setC2MinusB(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-rose-300 font-bold block">Retiré (−c) : −{c2MinusC}</label>
                  <input type="range" min="1" max="9" value={c2MinusC} onChange={(e) => setC2MinusC(Number(e.target.value))} className="w-full accent-rose-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`I = ${c2MinusA} - (${c2MinusB}x - ${c2MinusC}) | = ${c2MinusA} - ${c2MinusB}x + ${c2MinusC} | = ${c2MinusA + c2MinusC} - ${c2MinusB}x`}
                subResult={`- (-${c2MinusC}) devient + ${c2MinusC} !`}
                title="Suppression de Parenthèse Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">📦 Concept 5 : Factorisation par Facteur Commun</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Facteur commun k : {c2FactK}</label>
                  <input type="range" min="2" max="9" value={c2FactK} onChange={(e) => setC2FactK(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Second facteur b : {c2FactB}</label>
                  <input type="range" min="1" max="8" value={c2FactB} onChange={(e) => setC2FactB(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`C = ${c2FactK}x + ${c2FactK * c2FactB} | = ${c2FactK} × x + ${c2FactK} × ${c2FactB} | = ${c2FactK}(x + ${c2FactB})`}
                title="Factorisation Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* CHAPITRE 3 : ÉQUATIONS DU 1ER DEGRÉ (5 CONCEPTS)               */}
      {/* ============================================================== */}
      {selectedChapIdx === 2 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">⚖️ Concept 1 : La Balance Équilibrée (2x + 500 = 2 500 F)</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
                <label className="text-xs text-amber-300 font-bold block">
                  Teste la valeur de x : {c3BalTestX} F CFA → Plateau gauche = {2 * c3BalTestX + 500} F CFA (Cible : 2 500 F)
                </label>
                <input type="range" min="500" max="1500" step="100" value={c3BalTestX} onChange={(e) => setC3BalTestX(Number(e.target.value))} className="w-full accent-amber-400" />
                <div className="flex justify-center pt-2">
                  <svg viewBox="0 0 360 110" className="w-full max-w-md h-auto">
                    <polygon points="165,100 195,100 180,68" fill="#64748b" />
                    <line
                      x1="60"
                      y1={55 - (c3BalTestX - 1000) * 0.03}
                      x2="300"
                      y2={55 + (c3BalTestX - 1000) * 0.03}
                      stroke={c3BalTestX === 1000 ? '#10b981' : '#f59e0b'}
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <text x="90" y="34" textAnchor="middle" className="text-xs font-black fill-sky-300">
                      {2 * c3BalTestX + 500} F
                    </text>
                    <text x="270" y="34" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                      2 500 F
                    </text>
                    <text x="180" y="20" textAnchor="middle" className="text-[11px] font-black fill-white">
                      {c3BalTestX === 1000 ? '✅ ÉQUILIBRE PARFAIT (x = 1 000 F) !' : '⚖️ Déséquilibré : ajuste x !'}
                    </text>
                  </svg>
                </div>
              </div>
              <StandingMathRenderer
                expression={`Test pour x = ${c3BalTestX} | 2(${c3BalTestX}) + 500 = ${2 * c3BalTestX + 500} | ${2 * c3BalTestX + 500 === 2500 ? '2 500 = 2 500 ➔ Solution exacte !' : `${2 * c3BalTestX + 500} ≠ 2 500 ➔ Cherche encore`}`}
                title="Vérification d’Équation Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🎯 Concept 2 : Résoudre ax + b = c en F CFA</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">Coefficient a : {c3EqA}</label>
                  <input type="range" min="2" max="6" value={c3EqA} onChange={(e) => setC3EqA(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Ajout b : {c3EqB} F</label>
                  <input type="range" min="500" max="2000" step="500" value={c3EqB} onChange={(e) => setC3EqB(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Solution x : {c3EqSol} F</label>
                  <input type="range" min="500" max="3000" step="500" value={c3EqSol} onChange={(e) => setC3EqSol(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`${c3EqA}x + ${c3EqB} = ${c3EqA * c3EqSol + c3EqB} | ${c3EqA}x = ${c3EqA * c3EqSol + c3EqB} - ${c3EqB} | ${c3EqA}x = ${c3EqA * c3EqSol} | x = ${c3EqA * c3EqSol} ÷ ${c3EqA} = ${c3EqSol} F CFA`}
                title="Résolution ax + b = c Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔄 Concept 3 : Inconnue x des Deux Côtés (ax + b = cx + d)</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">x à gauche : {c3TwoSideA}x</label>
                  <input type="range" min="4" max="9" value={c3TwoSideA} onChange={(e) => setC3TwoSideA(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">x à droite : {c3TwoSideC}x</label>
                  <input type="range" min="1" max="3" value={c3TwoSideC} onChange={(e) => setC3TwoSideC(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Solution x : {c3TwoSideSol}</label>
                  <input type="range" min="2" max="10" value={c3TwoSideSol} onChange={(e) => setC3TwoSideSol(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`${c3TwoSideA}x + 3 = ${c3TwoSideC}x + ${(c3TwoSideA - c3TwoSideC) * c3TwoSideSol + 3} | ${c3TwoSideA}x - ${c3TwoSideC}x = ${(c3TwoSideA - c3TwoSideC) * c3TwoSideSol + 3} - 3 | ${c3TwoSideA - c3TwoSideC}x = ${(c3TwoSideA - c3TwoSideC) * c3TwoSideSol} | x = ${c3TwoSideSol}`}
                title="Regroupement des x Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">📦 Concept 4 : Équation avec Parenthèses k(x + a) = b</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">Facteur k = {c3ParenK}</label>
                  <input type="range" min="2" max="6" value={c3ParenK} onChange={(e) => setC3ParenK(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Ajout a = {c3ParenA}</label>
                  <input type="range" min="1" max="8" value={c3ParenA} onChange={(e) => setC3ParenA(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Solution x = {c3ParenSol}</label>
                  <input type="range" min="1" max="10" value={c3ParenSol} onChange={(e) => setC3ParenSol(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`${c3ParenK}(x + ${c3ParenA}) = ${c3ParenK * (c3ParenSol + c3ParenA)} | ${c3ParenK}x + ${c3ParenK * c3ParenA} = ${c3ParenK * (c3ParenSol + c3ParenA)} | ${c3ParenK}x = ${c3ParenK * c3ParenSol} | x = ${c3ParenSol}`}
                title="Développer puis Résoudre Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">💰 Concept 5 : Mise en Équation au Marché Mont-Bouët</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">Tas d’atangas : {c3MarketBags}</label>
                  <input type="range" min="2" max="8" value={c3MarketBags} onChange={(e) => setC3MarketBags(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Prix d’un tas x : {c3MarketBagPrice} F</label>
                  <input type="range" min="500" max="2000" step="250" value={c3MarketBagPrice} onChange={(e) => setC3MarketBagPrice(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Bananes : {c3MarketExtra} F</label>
                  <input type="range" min="1000" max="4000" step="500" value={c3MarketExtra} onChange={(e) => setC3MarketExtra(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`${c3MarketBags}x + ${c3MarketExtra} = ${c3MarketBags * c3MarketBagPrice + c3MarketExtra} | ${c3MarketBags}x = ${c3MarketBags * c3MarketBagPrice} | x = ${c3MarketBags * c3MarketBagPrice} ÷ ${c3MarketBags} | x = ${c3MarketBagPrice} F CFA`}
                title="Problème en F CFA Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* CHAPITRE 4 : PYTHAGORE & RACINE CARRÉE (5 CONCEPTS)            */}
      {/* ============================================================== */}
      {selectedChapIdx === 3 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">📐 Concept 1 : Calculer l’Hypoténuse (BC² = AB² + AC²)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Côté AB : {c4PythAB} cm</label>
                  <input type="range" min="3" max="12" value={c4PythAB} onChange={(e) => setC4PythAB(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Côté AC : {c4PythAC} cm</label>
                  <input type="range" min="3" max="12" value={c4PythAC} onChange={(e) => setC4PythAC(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <svg viewBox="0 0 340 160" className="w-full max-w-md h-auto">
                  <polygon points={`70,130 70,${130 - c4PythAB * 8} ${70 + c4PythAC * 10},130`} fill="#8b5cf6" fillOpacity="0.25" stroke="#a78bfa" strokeWidth="3" />
                  <rect x="70" y="118" width="12" height="12" fill="none" stroke="#facc15" strokeWidth="2" />
                  <text x="58" y={130 - c4PythAB * 4} textAnchor="end" className="text-xs font-black fill-emerald-300">AB={c4PythAB}</text>
                  <text x={70 + c4PythAC * 5} y="148" textAnchor="middle" className="text-xs font-black fill-sky-300">AC={c4PythAC}</text>
                  <text x={85 + c4PythAC * 5} y={120 - c4PythAB * 4} textAnchor="start" className="text-xs font-black fill-amber-300">
                    BC ≈ {Math.sqrt(c4PythAB * c4PythAB + c4PythAC * c4PythAC).toFixed(2)} cm
                  </text>
                </svg>
              </div>
              <StandingMathRenderer
                expression={`BC² = ${c4PythAB}² + ${c4PythAC}² | BC² = ${c4PythAB * c4PythAB} + ${c4PythAC * c4PythAC} = ${c4PythAB * c4PythAB + c4PythAC * c4PythAC} | BC = √${c4PythAB * c4PythAB + c4PythAC * c4PythAC} ≈ ${Math.sqrt(c4PythAB * c4PythAB + c4PythAC * c4PythAC).toFixed(2)} cm`}
                title="Théorème Direct Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">➖ Concept 2 : Calculer un Petit Côté (Soustraction !)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Hypoténuse BC : {c4SideHyp} cm</label>
                  <input
                    type="range"
                    min="6"
                    max="20"
                    value={c4SideHyp}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setC4SideHyp(val);
                      if (c4SideKnown >= val) setC4SideKnown(val - 1);
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Côté connu AB : {c4SideKnown} cm</label>
                  <input type="range" min="3" max={c4SideHyp - 1} value={c4SideKnown} onChange={(e) => setC4SideKnown(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`AC² = ${c4SideHyp}² - ${c4SideKnown}² | AC² = ${c4SideHyp * c4SideHyp} - ${c4SideKnown * c4SideKnown} = ${c4SideHyp * c4SideHyp - c4SideKnown * c4SideKnown} | AC = √${c4SideHyp * c4SideHyp - c4SideKnown * c4SideKnown} ≈ ${Math.sqrt(c4SideHyp * c4SideHyp - c4SideKnown * c4SideKnown).toFixed(2)} cm`}
                title="Soustraction d’un Petit Côté Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">√ Concept 3 : Carrés Parfaits & Racine Carrée (c² ↔ √c²)</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
                <label className="text-xs text-amber-300 font-bold block">Côté du carré c : {c4RootN} cm (Aire = {c4RootN * c4RootN} cm²)</label>
                <input type="range" min="1" max="15" value={c4RootN} onChange={(e) => setC4RootN(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <StandingMathRenderer
                expression={`${c4RootN}² = ${c4RootN} × ${c4RootN} = ${c4RootN * c4RootN} | Donc √${c4RootN * c4RootN} = ${c4RootN}`}
                title="Table des Carrés Parfaits Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🧱 Concept 4 : Réciproque de Pythagore (Le Triangle est-il Rectangle ?)</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Côté A : {c4RecA}</label>
                  <input type="range" min="3" max="15" value={c4RecA} onChange={(e) => setC4RecA(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Côté B : {c4RecB}</label>
                  <input type="range" min="4" max="16" value={c4RecB} onChange={(e) => setC4RecB(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">Grand côté C : {c4RecC}</label>
                  <input type="range" min="5" max="22" value={c4RecC} onChange={(e) => setC4RecC(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`Plus grand côté : ${c4RecC}² = ${c4RecC * c4RecC} | Somme : ${c4RecA}² + ${c4RecB}² = ${c4RecA * c4RecA + c4RecB * c4RecB} | ${c4RecC * c4RecC === c4RecA * c4RecA + c4RecB * c4RecB ? 'Égaux ➔ Rectangle (90°) !' : 'Différents ➔ Pas rectangle'}`}
                title="Test Réciproque Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🪜 Concept 5 : Hauteur de l’Échelle Contre le Mur</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Longueur échelle : {c4LadderHyp} m</label>
                  <input
                    type="range"
                    min="4"
                    max="13"
                    value={c4LadderHyp}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setC4LadderHyp(val);
                      if (c4LadderFloor >= val) setC4LadderFloor(val - 1);
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Écart au sol : {c4LadderFloor} m</label>
                  <input type="range" min="1" max={c4LadderHyp - 1} value={c4LadderFloor} onChange={(e) => setC4LadderFloor(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`h² = ${c4LadderHyp}² - ${c4LadderFloor}² | h² = ${c4LadderHyp * c4LadderHyp - c4LadderFloor * c4LadderFloor} | h = √${c4LadderHyp * c4LadderHyp - c4LadderFloor * c4LadderFloor} ≈ ${Math.sqrt(c4LadderHyp * c4LadderHyp - c4LadderFloor * c4LadderFloor).toFixed(2)} m`}
                title="Problème d’Échelle Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* CHAPITRE 5 : DROITE DES MILIEUX & COSINUS (5 CONCEPTS)          */}
      {/* ============================================================== */}
      {selectedChapIdx === 4 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🌉 Concept 1 : Théorème des Milieux (IJ = BC ÷ 2)</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
                <label className="text-xs text-cyan-300 font-bold block">Longueur de la base BC : {c5BaseBC} cm (➔ IJ = {c5BaseBC / 2} cm)</label>
                <input type="range" min="4" max="30" step="2" value={c5BaseBC} onChange={(e) => setC5BaseBC(Number(e.target.value))} className="w-full accent-cyan-400" />
                <div className="flex justify-center pt-2">
                  <svg viewBox="0 0 320 130" className="w-full max-w-md h-auto">
                    <polygon points="160,15 50,115 270,115" fill="#0891b2" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="2.5" />
                    <line x1="105" y1="65" x2="215" y2="65" stroke="#facc15" strokeWidth="3" />
                    <text x="160" y="58" textAnchor="middle" className="text-xs font-black fill-amber-300">IJ = {c5BaseBC / 2} cm</text>
                    <text x="160" y="108" textAnchor="middle" className="text-xs font-black fill-white">BC = {c5BaseBC} cm</text>
                  </svg>
                </div>
              </div>
              <StandingMathRenderer
                expression={`I milieu de [AB] et J milieu de [AC] | (IJ) // (BC) | IJ = ${c5BaseBC} ÷ 2 = ${c5BaseBC / 2} cm`}
                title="Droite des Milieux Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">✖️ Concept 2 : Retrouver BC à partir de IJ (BC = 2 × IJ)</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
                <label className="text-xs text-amber-300 font-bold block">Longueur du segment des milieux IJ : {c5MidIJ} cm</label>
                <input type="range" min="2" max="15" step="0.5" value={c5MidIJ} onChange={(e) => setC5MidIJ(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <StandingMathRenderer
                expression={`IJ = ${c5MidIJ} cm | BC = 2 × ${c5MidIJ} | BC = ${2 * c5MidIJ} cm`}
                title="Calcul du Grand Côté Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔺 Concept 3 : Périmètre du Triangle des Milieux</h4>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
                <label className="text-xs text-emerald-300 font-bold block">Périmètre du grand triangle ABC : {c5PeriABC} cm</label>
                <input type="range" min="12" max="60" step="2" value={c5PeriABC} onChange={(e) => setC5PeriABC(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <StandingMathRenderer
                expression={`Périmètre(ABC) = ${c5PeriABC} cm | Périmètre(IJK) = ${c5PeriABC} ÷ 2 | Périmètre(IJK) = ${c5PeriABC / 2} cm`}
                title="Périmètre des Milieux Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">📐 Concept 4 : Cosinus — Calculer le Côté Adjacent</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Angle aigu B̂ : {c5CosAngle}° (cos ≈ {cosVal})</label>
                  <input type="range" min="20" max="75" step="5" value={c5CosAngle} onChange={(e) => setC5CosAngle(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-rose-300 font-bold block mb-1">Hypoténuse BC : {c5CosHyp} cm</label>
                  <input type="range" min="6" max="30" value={c5CosHyp} onChange={(e) => setC5CosHyp(Number(e.target.value))} className="w-full accent-rose-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`cos(${c5CosAngle}°) = AB ÷ ${c5CosHyp} | AB = ${c5CosHyp} × ${cosVal} | AB ≈ ${cosAdj} cm`}
                title="Cosinus Côté Adjacent Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔭 Concept 5 : Cosinus — Retrouver l’Hypoténuse</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Côté adjacent DE : {c5FindHypAdj} cm</label>
                  <input type="range" min="4" max="20" value={c5FindHypAdj} onChange={(e) => setC5FindHypAdj(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Angle Ê : {c5FindHypAngle}° (cos ≈ {cosHypVal})</label>
                  <input type="range" min="20" max="75" step="5" value={c5FindHypAngle} onChange={(e) => setC5FindHypAngle(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`EF = ${c5FindHypAdj} ÷ cos(${c5FindHypAngle}°) | EF = ${c5FindHypAdj} ÷ ${cosHypVal} | EF ≈ ${cosFoundHyp} cm`}
                title="Calcul Hypoténuse par Cosinus Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* CHAPITRE 6 : VOLUMES, VITESSES & STATISTIQUES (5 CONCEPTS)     */}
      {/* ============================================================== */}
      {selectedChapIdx === 5 && (
        <div className="space-y-4">
          {selectedConceptIdx === 1 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🔺 Concept 1 : Volume d’une Pyramide à Base Carrée (÷ 3)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Côté de la base c : {c6PyrSide} cm</label>
                  <input type="range" min="3" max="15" step="3" value={c6PyrSide} onChange={(e) => setC6PyrSide(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Hauteur h : {c6PyrH} cm</label>
                  <input type="range" min="4" max="20" value={c6PyrH} onChange={(e) => setC6PyrH(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`B = ${c6PyrSide} × ${c6PyrSide} = ${c6PyrSide * c6PyrSide} cm² | V = (${c6PyrSide * c6PyrSide} × ${c6PyrH}) ÷ 3 | V = ${(c6PyrSide * c6PyrSide * c6PyrH) / 3} cm³`}
                title="Volume Pyramide Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 2 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🍦 Concept 2 : Volume du Cône de Révolution (π ≈ 3,14)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Rayon r : {c6ConeR} cm</label>
                  <input type="range" min="3" max="9" step="3" value={c6ConeR} onChange={(e) => setC6ConeR(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Hauteur h : {c6ConeH} cm</label>
                  <input type="range" min="4" max="18" value={c6ConeH} onChange={(e) => setC6ConeH(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`V = (3,14 × ${c6ConeR}² × ${c6ConeH}) ÷ 3 | = (3,14 × ${c6ConeR * c6ConeR} × ${c6ConeH}) ÷ 3 | = ${((3.14 * c6ConeR * c6ConeR * c6ConeH) / 3).toFixed(1)} cm³`}
                title="Volume du Cône Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 3 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">🚄 Concept 3 : Vitesse Moyenne au Gabon (v = d ÷ t)</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Distance d : {c6SpeedDist} km</label>
                  <input type="range" min="60" max="650" step="20" value={c6SpeedDist} onChange={(e) => setC6SpeedDist(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
                <div>
                  <label className="text-xs text-emerald-300 font-bold block mb-1">Durée t : {c6SpeedHours} h</label>
                  <input type="range" min="1" max="10" value={c6SpeedHours} onChange={(e) => setC6SpeedHours(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`v = ${c6SpeedDist} ÷ ${c6SpeedHours} | v = ${(c6SpeedDist / c6SpeedHours).toFixed(1)} km/h`}
                subResult={`En m/s (÷ 3,6) ≈ ${(c6SpeedDist / c6SpeedHours / 3.6).toFixed(1)} m/s`}
                title="Vitesse Moyenne Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 4 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">⏱️ Concept 4 : Convertisseur Heures & Minutes ➔ Heure Décimale</h4>
              <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Heures : {c6HoursPart} h</label>
                  <input type="range" min="0" max="6" value={c6HoursPart} onChange={(e) => setC6HoursPart(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-xs text-amber-300 font-bold block mb-1">Minutes : {c6Minutes} min</label>
                  <input type="range" min="0" max="45" step="15" value={c6Minutes} onChange={(e) => setC6Minutes(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`${c6HoursPart} h ${c6Minutes} min | = ${c6HoursPart} + (${c6Minutes} ÷ 60) | = ${(c6HoursPart + c6Minutes / 60).toFixed(2)} heures`}
                title="Conversion Heure Décimale Debout"
                showColumnOp={false}
              />
            </div>
          )}

          {selectedConceptIdx === 5 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
              <h4 className="text-sm font-black text-white">📊 Concept 5 : Moyenne Pondérée avec Coefficients</h4>
              <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
                <div>
                  <label className="text-[11px] text-sky-300 font-bold block">Devoir (coef 1) : {c6Grade1}/20</label>
                  <input type="range" min="5" max="20" value={c6Grade1} onChange={(e) => setC6Grade1(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
                <div>
                  <label className="text-[11px] text-emerald-300 font-bold block">Contrôle DS : {c6Grade2}/20</label>
                  <input type="range" min="5" max="20" value={c6Grade2} onChange={(e) => setC6Grade2(Number(e.target.value))} className="w-full accent-emerald-400" />
                </div>
                <div>
                  <label className="text-[11px] text-amber-300 font-bold block">Coef du DS : {c6Coef2}</label>
                  <input type="range" min="1" max="4" value={c6Coef2} onChange={(e) => setC6Coef2(Number(e.target.value))} className="w-full accent-amber-400" />
                </div>
              </div>
              <StandingMathRenderer
                expression={`Points = ${c6Grade1}×1 + ${c6Grade2}×${c6Coef2} = ${c6Grade1 + c6Grade2 * c6Coef2} | Total coefs = 1 + ${c6Coef2} = ${1 + c6Coef2} | Moyenne = ${((c6Grade1 + c6Grade2 * c6Coef2) / (1 + c6Coef2)).toFixed(2)} / 20`}
                title="Moyenne Pondérée Debout"
                showColumnOp={false}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
