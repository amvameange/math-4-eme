import React, { useState } from 'react';
import { Compass, FileText, Sparkles } from 'lucide-react';
import { CHAPTERS, DOMAINS } from '../data/curriculumData';
import { DomainId } from '../types/math';
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

interface MathChapterSimMeta {
  id: string;
  emoji: string;
  shortTitle: string;
}

const MATH_SIM_META: MathChapterSimMeta[] = [
  { id: 'nombres-relatifs-operations', emoji: '⚡', shortTitle: 'Relatifs & Signes' },
  { id: 'puissances-notation-scientifique', emoji: '🚀', shortTitle: 'Puissances & 10ⁿ' },
  { id: 'fractions-operations', emoji: '🍕', shortTitle: 'Fractions & Inverse' },
  { id: 'calcul-litteral-developpement', emoji: '🌱', shortTitle: 'Calcul Littéral' },
  { id: 'equations-premier-degre', emoji: '⚖️', shortTitle: 'Équations & Balance' },
  { id: 'racine-carree', emoji: '√', shortTitle: 'Racine Carrée' },
  { id: 'factorisation-identites-remarquables', emoji: '📦', shortTitle: 'Identités & Factor.' },
  { id: 'inequations-premier-degre', emoji: '↕️', shortTitle: 'Inéquations & Droite' },
  { id: 'nombres-premiers-divisibilite', emoji: '🔢', shortTitle: 'Premiers & PGCD' },
  { id: 'proportionnalite-pourcentages', emoji: '🛍️', shortTitle: 'Proportionnalité & %' },
  { id: 'vitesse-duree-distance', emoji: '🚄', shortTitle: 'Vitesse d = v × t' },
  { id: 'statistiques-moyenne-mediane', emoji: '📊', shortTitle: 'Moyenne & Médiane' },
  { id: 'probabilites', emoji: '🎲', shortTitle: 'Probabilités & Urne' },
  { id: 'fonctions-representation-graphique', emoji: '📈', shortTitle: 'Fonctions Affines' },
  { id: 'statistiques-quartiles-diagrammes', emoji: '📦', shortTitle: 'Quartiles Q1/Q3' },
  { id: 'theoreme-pythagore', emoji: '📐', shortTitle: 'Pythagore & Récip.' },
  { id: 'triangles-agrandissement-reduction', emoji: '🌉', shortTitle: 'Milieux & Échelle' },
  { id: 'translations', emoji: '➡️', shortTitle: 'Translations (Vecteur)' },
  { id: 'symetries-transformations', emoji: '🪞', shortTitle: 'Symétries Ax./Cent.' },
  { id: 'theoreme-thales', emoji: '🔺', shortTitle: 'Théorème de Thalès' },
  { id: 'trigonometrie-triangle-rectangle', emoji: '🧭', shortTitle: 'Cos, Sin, Tan' },
  { id: 'homothetie', emoji: '📽️', shortTitle: 'Homothétie (Zoom)' },
  { id: 'rotation', emoji: '🎡', shortTitle: 'Rotation & Angles' },
  { id: 'droites-remarquables-triangle', emoji: '⌖', shortTitle: 'Droites Remarquables' },
  { id: 'geometrie-espace-volumes', emoji: '🍦', shortTitle: 'Pyramide & Cône' },
  { id: 'reperage-plan-coordonnees', emoji: '📍', shortTitle: 'Repérage & Distance' },
  { id: 'cercle-proprietes-avancees', emoji: '⭕', shortTitle: 'Cercle & Angles' },
];

export const MathVisualizers: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>('nombres-relatifs-operations');
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  // 1. Relatifs
  const [m1A, setM1A] = useState<number>(-4);
  const [m1B, setM1B] = useState<number>(-5);
  const [m1NegCount, setM1NegCount] = useState<number>(3);

  // 2. Puissances
  const [m2N, setM2N] = useState<number>(4);
  const [m2M, setM2M] = useState<number>(2);
  const [m2Mant, setM2Mant] = useState<number>(4.5);

  // 3. Fractions
  const [m3A, setM3A] = useState<number>(3);
  const [m3B, setM3B] = useState<number>(4);
  const [m3C, setM3C] = useState<number>(5);
  const [m3D, setM3D] = useState<number>(2);

  // 4. Calcul littéral
  const [m4A, setM4A] = useState<number>(3);
  const [m4B, setM4B] = useState<number>(2);

  // 5. Équations
  const [m5TestX, setM5TestX] = useState<number>(1000);

  // 6. Racine carrée
  const [m6Side, setM6Side] = useState<number>(6);

  // 7. Identités remarquables
  const [m7A, setM7A] = useState<number>(4);
  const [m7B, setM7B] = useState<number>(3);

  // 8. Inéquations
  const [m8Coef, setM8Coef] = useState<number>(-2);
  const [m8Bound, setM8Bound] = useState<number>(8);

  // 9. Premiers & PGCD
  const [m9A, setM9A] = useState<number>(36);
  const [m9B, setM9B] = useState<number>(24);

  // 10. Proportionnalité & %
  const [m10Price, setM10Price] = useState<number>(12000);
  const [m10Pct, setM10Pct] = useState<number>(20);

  // 11. Vitesse
  const [m11Dist, setM11Dist] = useState<number>(240);
  const [m11Hours, setM11Hours] = useState<number>(2);
  const [m11Mins, setM11Mins] = useState<number>(30);

  // 12. Moyenne & Médiane
  const [m12N1, setM12N1] = useState<number>(10);
  const [m12N2, setM12N2] = useState<number>(14);
  const [m12N3, setM12N3] = useState<number>(17);

  // 13. Probabilités
  const [m13Green, setM13Green] = useState<number>(4);
  const [m13Yellow, setM13Yellow] = useState<number>(3);
  const [m13Blue, setM13Blue] = useState<number>(3);

  // 14. Fonctions
  const [m14A, setM14A] = useState<number>(2);
  const [m14B, setM14B] = useState<number>(1);
  const [m14X, setM14X] = useState<number>(2);

  // 15. Quartiles
  const [m15Q1, setM15Q1] = useState<number>(8);
  const [m15Med, setM15Med] = useState<number>(12);
  const [m15Q3, setM15Q3] = useState<number>(16);

  // 16. Pythagore
  const [m16AB, setM16AB] = useState<number>(3);
  const [m16AC, setM16AC] = useState<number>(4);

  // 17. Milieux & Agrandissement
  const [m17BC, setM17BC] = useState<number>(14);
  const [m17K, setM17K] = useState<number>(2);

  // 18. Translations
  const [m18Dx, setM18Dx] = useState<number>(35);
  const [m18Dy, setM18Dy] = useState<number>(-20);

  // 19. Symétries
  const [m19Type, setM19Type] = useState<'axiale' | 'centrale'>('axiale');

  // 20. Thalès
  const [m20Ratio, setM20Ratio] = useState<number>(0.5);
  const [m20BC, setM20BC] = useState<number>(12);

  // 21. Trigonométrie
  const [m21Angle, setM21Angle] = useState<number>(60);
  const [m21Hyp, setM21Hyp] = useState<number>(16);

  // 22. Homothétie
  const [m22K, setM22K] = useState<number>(1.5);

  // 23. Rotation
  const [m23Angle, setM23Angle] = useState<number>(60);

  // 24. Droites remarquables
  const [m24Type, setM24Type] = useState<'mediatrice' | 'bissectrice' | 'mediane' | 'hauteur'>('mediatrice');

  // 25. Volumes
  const [m25Shape, setM25Shape] = useState<'pyramide' | 'cone'>('pyramide');
  const [m25Dim, setM25Dim] = useState<number>(6);
  const [m25H, setM25H] = useState<number>(9);

  // 26. Repérage
  const [m26Ax, setM26Ax] = useState<number>(1);
  const [m26Ay, setM26Ay] = useState<number>(2);
  const [m26Bx, setM26Bx] = useState<number>(5);
  const [m26By, setM26By] = useState<number>(5);

  // 27. Cercle
  const [m27Inscr, setM27Inscr] = useState<number>(35);

  const visibleChapters = CHAPTERS.filter(
    (ch) => selectedDomain === 'all' || ch.domainId === selectedDomain
  );
  const currentChapter = CHAPTERS.find((c) => c.id === selectedId) || CHAPTERS[0];
  const currentMeta =
    MATH_SIM_META.find((m) => m.id === selectedId) || MATH_SIM_META[0];

  const handleDomainSelect = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const list =
      domId === 'all' ? CHAPTERS : CHAPTERS.filter((c) => c.domainId === domId);
    if (list.length > 0 && !list.some((c) => c.id === selectedId)) {
      setSelectedId(list[0].id);
    }
  };

  // Helpers
  const fracDivNum = m3A * m3D;
  const fracDivDen = m3B * m3C;
  const fracG = gcd(fracDivNum, fracDivDen);
  const totalUrne = m13Green + m13Yellow + m13Blue;
  const urnaG = gcd(m13Green, totalUrne);
  const pythHyp = Number(Math.sqrt(m16AB * m16AB + m16AC * m16AC).toFixed(2));
  const cosV = Number(Math.cos((m21Angle * Math.PI) / 180).toFixed(3));
  const sinV = Number(Math.sin((m21Angle * Math.PI) / 180).toFixed(3));
  const distAB = Number(
    Math.sqrt(Math.pow(m26Bx - m26Ax, 2) + Math.pow(m26By - m26Ay, 2)).toFixed(2)
  );
  const totalTimeH = Number((m11Hours + m11Mins / 60).toFixed(2));
  const pgcdVal = gcd(m9A, m9B);

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* Header + Grille des 27 chapitres */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Mathématiques 4ème CIAM Gabon · Tous les {CHAPTERS.length} Chapitres au Complet
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Laboratoire Visuel de Mathématiques (27 Chapitres)
              </h2>
              <p className="text-xs text-slate-300">
                Explore et manipule chacun des 27 chapitres avec figures géométriques interactives et formules debout.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowChapterMemo(!showChapterMemo)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition cursor-pointer shrink-0 whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{showChapterMemo ? 'Masquer le Mémo' : 'Afficher le Mémo'}</span>
          </button>
        </div>

        {/* Filtre par domaine */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-800">
          <button
            type="button"
            onClick={() => handleDomainSelect('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
              selectedDomain === 'all'
                ? 'bg-white text-slate-950 font-bold shadow'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Tous ({CHAPTERS.length})
          </button>
          {DOMAINS.map((dom) => (
            <button
              key={dom.id}
              type="button"
              onClick={() => handleDomainSelect(dom.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
                selectedDomain === dom.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {dom.shortTitle}
            </button>
          ))}
        </div>

        {/* Grille des 27 chapitres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
          {visibleChapters.map((chap) => {
            const meta = MATH_SIM_META.find((m) => m.id === chap.id) || {
              id: chap.id,
              emoji: '📐',
              shortTitle: chap.title,
            };
            const active = selectedId === chap.id;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => setSelectedId(chap.id)}
                className={`p-2.5 rounded-2xl text-left transition cursor-pointer border flex flex-col justify-between ${
                  active
                    ? 'bg-amber-500/15 border-amber-400 text-white shadow-md ring-1 ring-amber-400/40'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-extrabold text-sky-400">
                  <span>{chap.badge}</span>
                  <span className="text-base">{meta.emoji}</span>
                </div>
                <div className="text-xs font-bold truncate mt-1 text-slate-100">
                  {meta.shortTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulateur interactif du chapitre sélectionné */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentMeta.emoji}</span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {currentChapter.badge} · Atelier Interactif
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">{currentChapter.title}</h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manipule les paramètres</span>
          </span>
        </div>

        {/* 1. NOMBRES RELATIFS */}
        {selectedId === 'nombres-relatifs-operations' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Facteur A : {m1A >= 0 ? `+${m1A}` : m1A}</label>
                <input type="range" min="-9" max="9" value={m1A} onChange={(e) => setM1A(Number(e.target.value) || 1)} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Facteur B : {m1B >= 0 ? `+${m1B}` : m1B}</label>
                <input type="range" min="-9" max="9" value={m1B} onChange={(e) => setM1B(Number(e.target.value) || 1)} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-xs text-rose-300 font-bold block mb-1">Nb de facteurs (−2) : {m1NegCount}</label>
                <input type="range" min="1" max="6" value={m1NegCount} onChange={(e) => setM1NegCount(Number(e.target.value))} className="w-full accent-rose-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                <line x1="20" y1="36" x2="340" y2="36" stroke="#64748b" strokeWidth="2.5" />
                {[-9, -6, -3, 0, 3, 6, 9].map((v) => (
                  <g key={v}>
                    <line x1={180 + v * 16} y1="30" x2={180 + v * 16} y2="42" stroke={v === 0 ? '#fbbf24' : '#94a3b8'} strokeWidth="2" />
                    <text x={180 + v * 16} y="54" textAnchor="middle" className="text-[9px] font-mono fill-slate-400">{v}</text>
                  </g>
                ))}
                <circle cx={180 + m1A * 16} cy="36" r="5" fill="#fbbf24" />
                <circle cx={180 + m1B * 16} cy="36" r="5" fill="#38bdf8" />
                <text x="180" y="78" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                  Signe produit : {m1A * m1B > 0 ? 'POSITIF (+)' : 'NÉGATIF (−)'} · {m1NegCount} signes (−) → {m1NegCount % 2 === 0 ? 'Pair (+)' : 'Impair (−)'}
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`(${m1A}) × (${m1B}) = ${m1A * m1B > 0 ? `+${m1A * m1B}` : m1A * m1B} | Produit de ${m1NegCount} signes (−) (${m1NegCount % 2 === 0 ? 'Pair ➔ +' : 'Impair ➔ -'}) : (-2)^${m1NegCount} = ${Math.pow(-2, m1NegCount)}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 2. PUISSANCES & NOTATION SCIENTIFIQUE */}
        {selectedId === 'puissances-notation-scientifique' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Exposant n : {m2N}</label>
                <input type="range" min="-3" max="6" value={m2N} onChange={(e) => setM2N(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Exposant m : {m2M}</label>
                <input type="range" min="-3" max="5" value={m2M} onChange={(e) => setM2M(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Mantisse a : {m2Mant}</label>
                <input type="range" min="1.5" max="9.5" step="0.5" value={m2Mant} onChange={(e) => setM2Mant(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 90" className="w-full max-w-md h-auto">
                <rect x="20" y="16" width="150" height="58" rx="10" fill="#0f172a" stroke="#fbbf24" />
                <text x="95" y="38" textAnchor="middle" className="text-[10px] font-black fill-amber-300">SOMME DES EXPOSANTS</text>
                <text x="95" y="60" textAnchor="middle" className="text-sm font-mono font-black fill-white">10^{m2N + m2M}</text>
                <rect x="190" y="16" width="150" height="58" rx="10" fill="#0f172a" stroke="#10b981" />
                <text x="265" y="38" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">SCIENTIFIQUE (1 ≤ a &lt; 10)</text>
                <text x="265" y="60" textAnchor="middle" className="text-xs font-mono font-black fill-white">{m2Mant} × 10^{Math.max(2, m2N)}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`10^${m2N} × 10^${m2M} = 10^(${m2N} + ${m2M}) = 10^${m2N + m2M} | 10^${m2N} ÷ 10^${m2M} = 10^${m2N - m2M} | Sci : ${m2Mant} × 10^${Math.max(2, m2N)} F CFA`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 3. FRACTIONS */}
        {selectedId === 'fractions-operations' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">a = {m3A}</label>
                <input type="range" min="1" max="7" value={m3A} onChange={(e) => setM3A(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">b = {m3B}</label>
                <input type="range" min="2" max="9" value={m3B} onChange={(e) => setM3B(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">c = {m3C}</label>
                <input type="range" min="1" max="7" value={m3C} onChange={(e) => setM3C(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">d = {m3D}</label>
                <input type="range" min="2" max="9" value={m3D} onChange={(e) => setM3D(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                <text x="20" y="24" className="text-[10px] font-black fill-amber-300">Fraction 1 : {m3A}/{m3B}</text>
                {Array.from({ length: m3B }).map((_, i) => (
                  <rect key={i} x={20 + i * (140 / m3B)} y="32" width={140 / m3B - 2} height="22" rx="3" fill={i < m3A ? '#fbbf24' : '#1e293b'} />
                ))}
                <text x="180" y="48" textAnchor="middle" className="text-xs font-black fill-emerald-300">× Inv({m3D}/{m3C})</text>
                <text x="210" y="24" className="text-[10px] font-black fill-sky-300">Inverse : {m3D}/{m3C}</text>
                {Array.from({ length: m3C }).map((_, i) => (
                  <rect key={i} x={210 + i * (130 / m3C)} y="32" width={130 / m3C - 2} height="22" rx="3" fill={i < m3D ? '#38bdf8' : '#1e293b'} />
                ))}
                <text x="180" y="80" textAnchor="middle" className="text-xs font-mono font-black fill-white">
                  Résultat simplifié = {fracDivNum / fracG} / {fracDivDen / fracG}
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`(${m3A}/${m3B}) ÷ (${m3C}/${m3D}) = (${m3A}/${m3B}) × (${m3D}/${m3C}) | = ${fracDivNum}/${fracDivDen} | Irréductible = ${fracDivNum / fracG}/${fracDivDen / fracG}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 4. CALCUL LITTÉRAL */}
        {selectedId === 'calcul-litteral-developpement' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Extension droite (+a) : +{m4A}</label>
                <input type="range" min="1" max="7" value={m4A} onChange={(e) => setM4A(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Extension bas (+b) : +{m4B}</label>
                <input type="range" min="1" max="7" value={m4B} onChange={(e) => setM4B(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 140" className="w-full max-w-md h-auto">
                <rect x="60" y="15" width="120" height="60" fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
                <text x="120" y="50" textAnchor="middle" className="text-sm font-black fill-white">x²</text>
                <rect x="180" y="15" width={55 + m4A * 8} height="60" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
                <text x={180 + (55 + m4A * 8) / 2} y="50" textAnchor="middle" className="text-xs font-black fill-sky-200">+{m4A}x</text>
                <rect x="60" y="75" width="120" height={24 + m4B * 4} fill="#059669" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
                <text x="120" y={75 + (24 + m4B * 4) / 2 + 4} textAnchor="middle" className="text-xs font-black fill-emerald-200">+{m4B}x</text>
                <rect x="180" y="75" width={55 + m4A * 8} height={24 + m4B * 4} fill="#d97706" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
                <text x={180 + (55 + m4A * 8) / 2} y={75 + (24 + m4B * 4) / 2 + 4} textAnchor="middle" className="text-xs font-black fill-amber-200">+{m4A * m4B}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`(x + ${m4A})(x + ${m4B}) | = x² + ${m4B}x + ${m4A}x + ${m4A * m4B} | = x² + ${m4A + m4B}x + ${m4A * m4B}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 5. ÉQUATIONS */}
        {selectedId === 'equations-premier-degre' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">
                Teste la valeur de x pour 2x + 500 = 2 500 F : x = {m5TestX} F
              </label>
              <input type="range" min="500" max="1500" step="100" value={m5TestX} onChange={(e) => setM5TestX(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center pt-2">
                <svg viewBox="0 0 360 110" className="w-full max-w-md h-auto">
                  <polygon points="165,100 195,100 180,68" fill="#64748b" />
                  <line x1="60" y1={55 - (m5TestX - 1000) * 0.03} x2="300" y2={55 + (m5TestX - 1000) * 0.03} stroke={m5TestX === 1000 ? '#10b981' : '#f59e0b'} strokeWidth="5" strokeLinecap="round" />
                  <text x="90" y="34" textAnchor="middle" className="text-xs font-black fill-sky-300">{2 * m5TestX + 500} F</text>
                  <text x="270" y="34" textAnchor="middle" className="text-xs font-black fill-emerald-300">2 500 F</text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Test x = ${m5TestX} | 2(${m5TestX}) + 500 = ${2 * m5TestX + 500} | ${m5TestX === 1000 ? '2 500 = 2 500 ➔ ÉQUILIBRE (x = 1 000 F)' : `${2 * m5TestX + 500} ≠ 2 500`}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 6. RACINE CARRÉE */}
        {selectedId === 'racine-carree' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">Côté du carré c : {m6Side} cm ➔ Aire c² = {m6Side * m6Side} cm²</label>
              <input type="range" min="2" max="12" value={m6Side} onChange={(e) => setM6Side(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 220 120" className="w-48 h-auto">
                  <rect x={110 - m6Side * 4} y={60 - m6Side * 4} width={m6Side * 8} height={m6Side * 8} fill="#7c3aed" fillOpacity="0.35" stroke="#a78bfa" strokeWidth="2.5" />
                  <text x="110" y="64" textAnchor="middle" className="text-xs font-black fill-white">Aire = {m6Side * m6Side}</text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Aire = ${m6Side * m6Side} cm² | Côté = √${m6Side * m6Side} | Côté = ${m6Side} cm | Simplification exemple : √(${m6Side * m6Side} × 2) = ${m6Side}√2`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 7. IDENTITÉS REMARQUABLES */}
        {selectedId === 'factorisation-identites-remarquables' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Valeur a : {m7A}</label>
                <input type="range" min="2" max="10" value={m7A} onChange={(e) => setM7A(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Valeur b : {m7B}</label>
                <input type="range" min="1" max="8" value={m7B} onChange={(e) => setM7B(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 320 135" className="w-full max-w-md h-auto">
                {(() => {
                  const sA = 45 + m7A * 5;
                  const sB = 22 + m7B * 4;
                  return (
                    <>
                      <rect x="65" y="15" width={sA} height={sA * 0.65} fill="#4f46e5" fillOpacity="0.45" stroke="#818cf8" strokeWidth="2" />
                      <text x={65 + sA / 2} y={15 + (sA * 0.65) / 2 + 4} textAnchor="middle" className="text-xs font-black fill-white">{m7A * m7A}</text>
                      <rect x={65 + sA} y="15" width={sB} height={sA * 0.65} fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
                      <text x={65 + sA + sB / 2} y={15 + (sA * 0.65) / 2 + 4} textAnchor="middle" className="text-[10px] font-black fill-sky-200">{m7A * m7B}</text>
                      <rect x="65" y={15 + sA * 0.65} width={sA} height={sB * 0.65} fill="#059669" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
                      <text x={65 + sA / 2} y={15 + sA * 0.65 + (sB * 0.65) / 2 + 4} textAnchor="middle" className="text-[10px] font-black fill-emerald-200">{m7A * m7B}</text>
                      <rect x={65 + sA} y={15 + sA * 0.65} width={sB} height={sB * 0.65} fill="#d97706" fillOpacity="0.45" stroke="#fbbf24" strokeWidth="2" />
                      <text x={65 + sA + sB / 2} y={15 + sA * 0.65 + (sB * 0.65) / 2 + 4} textAnchor="middle" className="text-[10px] font-black fill-amber-200">{m7B * m7B}</text>
                      <text x="255" y="65" textAnchor="middle" className="text-xs font-black fill-amber-300">Total = {(m7A + m7B) * (m7A + m7B)}</text>
                    </>
                  );
                })()}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`(${m7A} + ${m7B})² = ${m7A}² + 2×${m7A}×${m7B} + ${m7B}² = ${m7A * m7A} + ${2 * m7A * m7B} + ${m7B * m7B} = ${(m7A + m7B) * (m7A + m7B)} | Différence : ${m7A}² - ${m7B}² = (${m7A} - ${m7B})(${m7A} + ${m7B}) = ${(m7A - m7B) * (m7A + m7B)}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 8. INÉQUATIONS */}
        {selectedId === 'inequations-premier-degre' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-rose-300 font-bold block mb-1">Coefficient devant x : {m8Coef}</label>
                <input type="range" min="-4" max="4" value={m8Coef} onChange={(e) => setM8Coef(Number(e.target.value) || 1)} className="w-full accent-rose-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Membre droite : {m8Bound}</label>
                <input type="range" min="-12" max="12" step="2" value={m8Bound} onChange={(e) => setM8Bound(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                <line x1="25" y1="45" x2="335" y2="45" stroke="#64748b" strokeWidth="2.5" />
                {m8Coef < 0 ? (
                  <line x1="180" y1="45" x2="330" y2="45" stroke="#10b981" strokeWidth="6" />
                ) : (
                  <line x1="30" y1="45" x2="180" y2="45" stroke="#10b981" strokeWidth="6" />
                )}
                <circle cx="180" cy="45" r="5" fill="#fbbf24" />
                <text x="180" y="68" textAnchor="middle" className="text-xs font-mono font-black fill-amber-300">
                  Borne : {(m8Bound / m8Coef).toFixed(1)}
                </text>
                <text x="180" y="24" textAnchor="middle" className={`text-[11px] font-black ${m8Coef < 0 ? 'fill-rose-300' : 'fill-emerald-300'}`}>
                  {m8Coef < 0 ? '⚠️ Coefficient < 0 ➔ SENS INVERSÉ (x ≥ borne)' : 'Coefficient > 0 ➔ Sens conservé (x ≤ borne)'}
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Inéquation : ${m8Coef}x ≤ ${m8Bound} | ${m8Coef < 0 ? `Diviser par ${m8Coef} (< 0) ➔ ON INVERSE ≤ EN ≥ !` : `Diviser par ${m8Coef} (> 0) ➔ sens conservé`} | Solution : x ${m8Coef < 0 ? '≥' : '≤'} ${(m8Bound / m8Coef).toFixed(1)}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 9. NOMBRES PREMIERS & PGCD */}
        {selectedId === 'nombres-premiers-divisibilite' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Nombre A : {m9A}</label>
                <input type="range" min="12" max="72" step="6" value={m9A} onChange={(e) => setM9A(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Nombre B : {m9B}</label>
                <input type="range" min="12" max="72" step="6" value={m9B} onChange={(e) => setM9B(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                <rect x="30" y="18" width={m9A * 3.8} height="22" rx="4" fill="#fbbf24" fillOpacity="0.8" />
                <text x="24" y="33" textAnchor="end" className="text-[10px] font-black fill-amber-300">{m9A}</text>
                <rect x="30" y="48" width={m9B * 3.8} height="22" rx="4" fill="#38bdf8" fillOpacity="0.8" />
                <text x="24" y="63" textAnchor="end" className="text-[10px] font-black fill-sky-300">{m9B}</text>
                <text x="180" y="88" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                  PGCD = {pgcdVal} (pavage exact de {m9A / pgcdVal} et {m9B / pgcdVal} blocs)
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`PGCD(${m9A} ; ${m9B}) = ${pgcdVal} | Fraction simplifiée : ${m9A}/${m9B} = ${m9A / pgcdVal}/${m9B / pgcdVal}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 10. PROPORTIONNALITÉ & POURCENTAGES */}
        {selectedId === 'proportionnalite-pourcentages' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Prix initial : {m10Price.toLocaleString('fr-FR')} F CFA</label>
                <input type="range" min="2000" max="30000" step="2000" value={m10Price} onChange={(e) => setM10Price(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Remise : −{m10Pct}%</label>
                <input type="range" min="5" max="50" step="5" value={m10Pct} onChange={(e) => setM10Pct(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 85" className="w-full max-w-md h-auto">
                <rect x="25" y="22" width={(310 * (100 - m10Pct)) / 100} height="28" rx="4" fill="#0284c7" />
                <rect x={25 + (310 * (100 - m10Pct)) / 100} y="22" width={(310 * m10Pct) / 100} height="28" rx="4" fill="#10b981" />
                <text x="32" y="40" className="text-[10px] font-black fill-white">
                  À payer : {(m10Price - (m10Price * m10Pct) / 100).toLocaleString('fr-FR')} F
                </text>
                <text x="330" y="70" textAnchor="end" className="text-[11px] font-black fill-emerald-300">
                  Économie (−{m10Pct}%) : {((m10Price * m10Pct) / 100).toLocaleString('fr-FR')} F CFA
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Remise = ${m10Price} × ${m10Pct} ÷ 100 = ${(m10Price * m10Pct) / 100} F CFA | Nouveau prix = ${m10Price - (m10Price * m10Pct) / 100} F CFA (× ${(1 - m10Pct / 100).toFixed(2)})`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 11. VITESSE, DURÉE, DISTANCE */}
        {selectedId === 'vitesse-duree-distance' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Distance d : {m11Dist} km</label>
                <input type="range" min="60" max="600" step="30" value={m11Dist} onChange={(e) => setM11Dist(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Heures : {m11Hours} h</label>
                <input type="range" min="1" max="6" value={m11Hours} onChange={(e) => setM11Hours(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Minutes : {m11Mins} min</label>
                <input type="range" min="0" max="45" step="15" value={m11Mins} onChange={(e) => setM11Mins(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                <line x1="30" y1="58" x2="330" y2="58" stroke="#64748b" strokeWidth="3" strokeDasharray="6 4" />
                <circle cx="30" cy="58" r="5" fill="#fbbf24" />
                <circle cx="330" cy="58" r="5" fill="#10b981" />
                <rect x={30 + Math.min(260, (m11Dist / 600) * 260)} y="36" width="32" height="16" rx="4" fill="#0284c7" stroke="#38bdf8" />
                <text x="180" y="22" textAnchor="middle" className="text-xs font-black fill-amber-300">
                  Train Transgabonais · v = {(m11Dist / totalTimeH).toFixed(1)} km/h
                </text>
                <text x="30" y="80" className="text-[10px] font-bold fill-slate-300">0 km</text>
                <text x="330" y="80" textAnchor="end" className="text-[10px] font-bold fill-emerald-300">{m11Dist} km ({totalTimeH} h)</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Durée décimale = ${m11Hours} + (${m11Mins} ÷ 60) = ${totalTimeH} h | Vitesse v = ${m11Dist} ÷ ${totalTimeH} | v = ${(m11Dist / totalTimeH).toFixed(1)} km/h`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 12. STATISTIQUES MOYENNE & MÉDIANE */}
        {selectedId === 'statistiques-moyenne-mediane' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Note 1 : {m12N1}/20</label>
                <input type="range" min="4" max="20" value={m12N1} onChange={(e) => setM12N1(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Note 2 : {m12N2}/20</label>
                <input type="range" min="4" max="20" value={m12N2} onChange={(e) => setM12N2(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Note 3 : {m12N3}/20</label>
                <input type="range" min="4" max="20" value={m12N3} onChange={(e) => setM12N3(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 320 120" className="w-full max-w-sm h-auto">
                {[m12N1, m12N2, m12N3].sort((a, b) => a - b).map((val, idx) => (
                  <g key={idx}>
                    <rect x={45 + idx * 80} y={100 - val * 4} width="45" height={val * 4} rx="4" fill={idx === 1 ? '#fbbf24' : '#38bdf8'} fillOpacity="0.8" />
                    <text x={67 + idx * 80} y={94 - val * 4} textAnchor="middle" className="text-xs font-black fill-white">{val}</text>
                  </g>
                ))}
                <line x1="25" y1={100 - ((m12N1 + m12N2 + m12N3) / 3) * 4} x2="295" y2={100 - ((m12N1 + m12N2 + m12N3) / 3) * 4} stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
                <text x="160" y="115" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">
                  Médiane (jaune) = {[m12N1, m12N2, m12N3].sort((a, b) => a - b)[1]} · Moyenne (ligne) = {((m12N1 + m12N2 + m12N3) / 3).toFixed(1)}
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Série ordonnée : ${[m12N1, m12N2, m12N3].sort((a, b) => a - b).join(' ; ')} | Médiane = ${[m12N1, m12N2, m12N3].sort((a, b) => a - b)[1]} | Moyenne = (${m12N1}+${m12N2}+${m12N3}) ÷ 3 = ${((m12N1 + m12N2 + m12N3) / 3).toFixed(2)}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 13. PROBABILITÉS */}
        {selectedId === 'probabilites' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Boules Vertes : {m13Green}</label>
                <input type="range" min="1" max="8" value={m13Green} onChange={(e) => setM13Green(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Boules Jaunes : {m13Yellow}</label>
                <input type="range" min="1" max="8" value={m13Yellow} onChange={(e) => setM13Yellow(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Boules Bleues : {m13Blue}</label>
                <input type="range" min="1" max="8" value={m13Blue} onChange={(e) => setM13Blue(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 105" className="w-full max-w-md h-auto">
                <rect x="40" y="16" width="280" height="62" rx="14" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                {[
                  ...Array.from({ length: m13Green }).map(() => '#10b981'),
                  ...Array.from({ length: m13Yellow }).map(() => '#fbbf24'),
                  ...Array.from({ length: m13Blue }).map(() => '#38bdf8'),
                ].slice(0, 24).map((col, idx) => (
                  <circle
                    key={idx}
                    cx={60 + (idx % 12) * 21}
                    cy={34 + Math.floor(idx / 12) * 22}
                    r="8"
                    fill={col}
                  />
                ))}
                <text x="180" y="96" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                  Urne ({totalUrne} boules) : P(Verte) = {m13Green}/{totalUrne} ({((m13Green / totalUrne) * 100).toFixed(0)}%)
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Total boules = ${totalUrne} | P(Verte) = ${m13Green}/${totalUrne} = ${m13Green / urnaG}/${totalUrne / urnaG} (${((m13Green / totalUrne) * 100).toFixed(0)}%) | P(Non Verte) = ${(100 - (m13Green / totalUrne) * 100).toFixed(0)}%`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 14. FONCTIONS & REPRÉSENTATION GRAPHIQUE */}
        {selectedId === 'fonctions-representation-graphique' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Pente a : {m14A}</label>
                <input type="range" min="-3" max="4" value={m14A} onChange={(e) => setM14A(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Ordonnée b : {m14B}</label>
                <input type="range" min="-4" max="5" value={m14B} onChange={(e) => setM14B(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Abscisse x : {m14X}</label>
                <input type="range" min="-3" max="4" value={m14X} onChange={(e) => setM14X(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 260 140" className="w-full max-w-sm h-auto">
                <line x1="20" y1="70" x2="240" y2="70" stroke="#475569" strokeWidth="1.5" />
                <line x1="130" y1="10" x2="130" y2="130" stroke="#475569" strokeWidth="1.5" />
                {(() => {
                  const mapX = (x: number) => 130 + x * 20;
                  const mapY = (y: number) => 70 - y * 6;
                  const yLeft = m14A * -4 + m14B;
                  const yRight = m14A * 4 + m14B;
                  const fx = m14A * m14X + m14B;
                  return (
                    <>
                      <line x1={mapX(-4)} y1={mapY(yLeft)} x2={mapX(4)} y2={mapY(yRight)} stroke="#38bdf8" strokeWidth="2.5" />
                      <circle cx={mapX(0)} cy={mapY(m14B)} r="3.5" fill="#fbbf24" />
                      <circle cx={mapX(m14X)} cy={mapY(fx)} r="5" fill="#10b981" />
                      <line x1={mapX(m14X)} y1="70" x2={mapX(m14X)} y2={mapY(fx)} stroke="#10b981" strokeDasharray="3 2" />
                      <line x1="130" y1={mapY(fx)} x2={mapX(m14X)} y2={mapY(fx)} stroke="#10b981" strokeDasharray="3 2" />
                    </>
                  );
                })()}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`f(x) = ${m14A}x ${m14B >= 0 ? `+ ${m14B}` : `- ${Math.abs(m14B)}`} | Image de ${m14X} : f(${m14X}) = ${m14A}×(${m14X}) + (${m14B}) = ${m14A * m14X + m14B}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 15. STATISTIQUES QUARTILES */}
        {selectedId === 'statistiques-quartiles-diagrammes' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Q1 : {m15Q1}</label>
                <input type="range" min="4" max="10" value={m15Q1} onChange={(e) => setM15Q1(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Médiane : {Math.max(m15Q1, m15Med)}</label>
                <input type="range" min={m15Q1} max={m15Q3} value={Math.min(m15Q3, Math.max(m15Q1, m15Med))} onChange={(e) => setM15Med(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Q3 : {m15Q3}</label>
                <input type="range" min="12" max="19" value={m15Q3} onChange={(e) => setM15Q3(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 100" className="w-full max-w-md h-auto">
                {(() => {
                  const s = (n: number) => 25 + (n / 20) * 310;
                  const med = Math.min(m15Q3, Math.max(m15Q1, m15Med));
                  return (
                    <>
                      <line x1={s(2)} y1="45" x2={s(m15Q1)} y2="45" stroke="#38bdf8" strokeWidth="2.5" />
                      <line x1={s(2)} y1="35" x2={s(2)} y2="55" stroke="#94a3b8" strokeWidth="2" />
                      <rect x={s(m15Q1)} y="24" width={s(m15Q3) - s(m15Q1)} height="42" rx="4" fill="#0284c7" fillOpacity="0.35" stroke="#38bdf8" strokeWidth="2" />
                      <line x1={s(med)} y1="24" x2={s(med)} y2="66" stroke="#fbbf24" strokeWidth="3.5" />
                      <line x1={s(m15Q3)} y1="45" x2={s(20)} y2="45" stroke="#38bdf8" strokeWidth="2.5" />
                      <line x1={s(20)} y1="35" x2={s(20)} y2="55" stroke="#94a3b8" strokeWidth="2" />
                      <text x={s(m15Q1)} y="84" textAnchor="middle" className="text-[10px] font-black fill-sky-300">Q1={m15Q1}</text>
                      <text x={s(med)} y="18" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Med={med}</text>
                      <text x={s(m15Q3)} y="84" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Q3={m15Q3}</text>
                    </>
                  );
                })()}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Q1 = ${m15Q1} (25%) | Médiane = ${Math.min(m15Q3, Math.max(m15Q1, m15Med))} (50%) | Q3 = ${m15Q3} (75%) | Écart interquartile Q3 - Q1 = ${m15Q3 - m15Q1}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 16. PYTHAGORE */}
        {selectedId === 'theoreme-pythagore' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Côté AB : {m16AB} cm</label>
                <input type="range" min="2" max="12" value={m16AB} onChange={(e) => setM16AB(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Côté AC : {m16AC} cm</label>
                <input type="range" min="2" max="16" value={m16AC} onChange={(e) => setM16AC(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 280 140" className="w-full max-w-sm h-auto">
                <polygon points={`60,${115 - m16AB * 7} 60,115 ${60 + m16AC * 10},115`} fill="#6366f1" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2.5" />
                <rect x="60" y="103" width="12" height="12" fill="none" stroke="#fbbf24" strokeWidth="2" />
                <text x="48" y="85" textAnchor="end" className="text-xs font-black fill-amber-300">{m16AB}</text>
                <text x={60 + m16AC * 5} y="132" textAnchor="middle" className="text-xs font-black fill-sky-300">{m16AC}</text>
                <text x={70 + m16AC * 5} y={108 - m16AB * 3.5} className="text-xs font-black fill-emerald-300">BC ≈ {pythHyp}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`BC² = ${m16AB}² + ${m16AC}² = ${m16AB * m16AB} + ${m16AC * m16AC} = ${m16AB * m16AB + m16AC * m16AC} | BC = √${m16AB * m16AB + m16AC * m16AC} ≈ ${pythHyp} cm`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 17. TRIANGLES & AGRANDISSEMENT */}
        {selectedId === 'triangles-agrandissement-reduction' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Base BC : {m17BC} cm</label>
                <input type="range" min="6" max="24" step="2" value={m17BC} onChange={(e) => setM17BC(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Facteur agrandissement k : {m17K}</label>
                <input type="range" min="2" max="5" value={m17K} onChange={(e) => setM17K(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 120" className="w-full max-w-md h-auto">
                <polygon points="90,18 35,102 145,102" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
                <line x1="62" y1="60" x2="118" y2="60" stroke="#fbbf24" strokeWidth="3" />
                <text x="90" y="54" textAnchor="middle" className="text-[10px] font-black fill-amber-300">IJ = {m17BC / 2}</text>
                <text x="90" y="116" textAnchor="middle" className="text-[10px] font-black fill-sky-300">BC = {m17BC}</text>
                <rect x="195" y="45" width="24" height="24" fill="#10b981" fillOpacity="0.4" stroke="#34d399" />
                <rect x="240" y={80 - m17K * 14} width={m17K * 14} height={m17K * 14} fill="#10b981" fillOpacity="0.25" stroke="#34d399" strokeWidth="2" />
                <text x="275" y="114" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">Aire × {m17K * m17K}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Droite des milieux : IJ = BC ÷ 2 = ${m17BC} ÷ 2 = ${m17BC / 2} cm | Agrandissement × ${m17K} : Aires × ${m17K}² (× ${m17K * m17K}) ; Volumes × ${m17K}³ (× ${m17K * m17K * m17K})`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 18. TRANSLATIONS */}
        {selectedId === 'translations' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Déplacement horizontal dx : {m18Dx}</label>
                <input type="range" min="10" max="120" step="10" value={m18Dx} onChange={(e) => setM18Dx(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Déplacement vertical dy : {m18Dy}</label>
                <input type="range" min="-35" max="35" step="5" value={m18Dy} onChange={(e) => setM18Dy(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 340 130" className="w-full max-w-md h-auto">
                <polygon points="45,95 95,95 65,50" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
                <polygon points={`${45 + m18Dx},${95 + m18Dy} ${95 + m18Dx},${95 + m18Dy} ${65 + m18Dx},${50 + m18Dy}`} fill="#10b981" fillOpacity="0.45" stroke="#34d399" strokeWidth="2" />
                <line x1="65" y1="50" x2={65 + m18Dx} y2={50 + m18Dy} stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 3" />
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Translation de vecteur (${m18Dx} ; ${m18Dy}) | Les deux triangles sont SUPERPOSABLES (longueurs, angles et aires conservés)`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 19. SYMÉTRIES */}
        {selectedId === 'symetries-transformations' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => setM19Type('axiale')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m19Type === 'axiale' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Symétrie Axiale (Pliage)</button>
              <button type="button" onClick={() => setM19Type('centrale')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m19Type === 'centrale' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Symétrie Centrale (180°)</button>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 320 115" className="w-full max-w-sm h-auto">
                {m19Type === 'axiale' ? (
                  <>
                    <line x1="160" y1="12" x2="160" y2="104" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 3" />
                    <polygon points="70,82 125,82 95,30" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
                    <polygon points="250,82 195,82 225,30" fill="#10b981" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" />
                    <line x1="95" y1="30" x2="225" y2="30" stroke="#94a3b8" strokeDasharray="2 2" />
                  </>
                ) : (
                  <>
                    <circle cx="160" cy="58" r="5" fill="#fbbf24" />
                    <polygon points="65,30 115,30 85,68" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
                    <polygon points="255,86 205,86 235,48" fill="#10b981" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" />
                    <line x1="85" y1="68" x2="235" y2="48" stroke="#94a3b8" strokeDasharray="3 2" />
                  </>
                )}
              </svg>
            </div>
            <StandingMathRenderer
              expression={
                m19Type === 'axiale'
                  ? `Symétrie axiale d’axe (d) | (d) est la MÉDIATRICE de [MM’] | Le point M(3 ; 4) symétrique/axe X devient M’(3 ; -4)`
                  : `Symétrie centrale de centre O(0 ; 0) | O est le MILIEU de [MM’] | M(3 ; 4) devient M’(-3 ; -4) et (d’) // (d)`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 20. THALÈS */}
        {selectedId === 'theoreme-thales' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Rapport AM / AB : {m20Ratio}</label>
                <input type="range" min="0.25" max="0.85" step="0.05" value={m20Ratio} onChange={(e) => setM20Ratio(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Base BC : {m20BC} cm</label>
                <input type="range" min="8" max="24" step="2" value={m20BC} onChange={(e) => setM20BC(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 280 140" className="w-full max-w-sm h-auto">
                <polygon points="140,15 40,125 240,125" fill="none" stroke="#64748b" strokeWidth="2.5" />
                <line x1={140 - 100 * m20Ratio} y1={15 + 110 * m20Ratio} x2={140 + 100 * m20Ratio} y2={15 + 110 * m20Ratio} stroke="#fbbf24" strokeWidth="3" />
                <text x="140" y={10 + 110 * m20Ratio} textAnchor="middle" className="text-[11px] font-black fill-amber-300">MN = {(m20BC * m20Ratio).toFixed(1)}</text>
                <text x="140" y="138" textAnchor="middle" className="text-[11px] font-black fill-sky-300">BC = {m20BC}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`(MN) // (BC) ➔ AM/AB = AN/AC = MN/BC = ${m20Ratio} | MN = ${m20BC} × ${m20Ratio} = ${(m20BC * m20Ratio).toFixed(1)} cm`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 21. TRIGONOMÉTRIE */}
        {selectedId === 'trigonometrie-triangle-rectangle' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Angle α : {m21Angle}°</label>
                <input type="range" min="15" max="75" step="5" value={m21Angle} onChange={(e) => setM21Angle(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Hypoténuse : {m21Hyp} cm</label>
                <input type="range" min="6" max="30" step="2" value={m21Hyp} onChange={(e) => setM21Hyp(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 280 130" className="w-full max-w-sm h-auto">
                {(() => {
                  const rad = (m21Angle * Math.PI) / 180;
                  const adj = 120 * Math.cos(rad);
                  const opp = 120 * Math.sin(rad);
                  return (
                    <>
                      <polygon points={`50,108 ${50 + adj},108 50,${108 - opp}`} fill="#0284c7" fillOpacity="0.28" stroke="#38bdf8" strokeWidth="2.5" />
                      <rect x="50" y="96" width="12" height="12" fill="none" stroke="#fbbf24" strokeWidth="2" />
                      <text x={50 + adj / 2} y="124" textAnchor="middle" className="text-[10px] font-black fill-amber-300">Adj={(m21Hyp * cosV).toFixed(1)}</text>
                      <text x="44" y={108 - opp / 2} textAnchor="end" className="text-[10px] font-black fill-emerald-300">Opp={(m21Hyp * sinV).toFixed(1)}</text>
                      <text x={62 + adj / 2} y={100 - opp / 2} className="text-[10px] font-black fill-sky-300">Hyp={m21Hyp}</text>
                    </>
                  );
                })()}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`cos(${m21Angle}°) ≈ ${cosV} ➔ Adjacent = ${m21Hyp} × ${cosV} = ${(m21Hyp * cosV).toFixed(2)} cm | sin(${m21Angle}°) ≈ ${sinV} ➔ Opposé = ${(m21Hyp * sinV).toFixed(2)} cm`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 22. HOMOTHÉTIE */}
        {selectedId === 'homothetie' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block mb-1">Rapport d’homothétie k : {m22K}</label>
              <input type="range" min="-1.5" max="2.5" step="0.5" value={m22K} onChange={(e) => setM22K(Number(e.target.value) || 0.5)} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 320 115" className="w-full max-w-sm h-auto">
                  <circle cx="135" cy="58" r="4.5" fill="#fbbf24" />
                  <text x="135" y="75" textAnchor="middle" className="text-[10px] font-black fill-amber-300">O</text>
                  <polygon points="165,44 185,44 175,26" fill="#0284c7" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="2" />
                  <polygon
                    points={`${135 + 30 * m22K},${58 - 14 * m22K} ${135 + 50 * m22K},${58 - 14 * m22K} ${135 + 40 * m22K},${58 - 32 * m22K}`}
                    fill="#10b981"
                    fillOpacity="0.35"
                    stroke="#34d399"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Rapport k = ${m22K} (${m22K < 0 ? 'Figure retournée de l’autre côté de O' : Math.abs(m22K) > 1 ? 'Agrandissement' : 'Réduction'}) | Longueurs × ${Math.abs(m22K)} | Aires × ${(m22K * m22K).toFixed(2)}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 23. ROTATION */}
        {selectedId === 'rotation' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">Angle de rotation autour de O : {m23Angle}°</label>
              <input type="range" min="0" max="360" step="15" value={m23Angle} onChange={(e) => setM23Angle(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 200 120" className="w-56 h-auto">
                  <circle cx="100" cy="60" r="42" fill="none" stroke="#334155" strokeDasharray="3 3" />
                  <circle cx="100" cy="60" r="4" fill="#fbbf24" />
                  <circle cx="142" cy="60" r="5" fill="#38bdf8" />
                  <line x1="100" y1="60" x2="142" y2="60" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="100" y1="60" x2={100 + 42 * Math.cos((-m23Angle * Math.PI) / 180)} y2={60 + 42 * Math.sin((-m23Angle * Math.PI) / 180)} stroke="#34d399" strokeWidth="2.5" />
                  <circle cx={100 + 42 * Math.cos((-m23Angle * Math.PI) / 180)} cy={60 + 42 * Math.sin((-m23Angle * Math.PI) / 180)} r="5" fill="#34d399" />
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`OA’ = OA (même cercle !) | Angle AÔA’ = ${m23Angle}° | ${m23Angle === 180 ? '180° = Symétrie centrale de centre O !' : 'Longueurs et angles conservés'}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 24. DROITES REMARQUABLES */}
        {selectedId === 'droites-remarquables-triangle' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'mediatrice', label: 'Médiatrice' },
                  { id: 'bissectrice', label: 'Bissectrice' },
                  { id: 'mediane', label: 'Médiane' },
                  { id: 'hauteur', label: 'Hauteur' },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setM24Type(t.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                    m24Type === t.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 260 120" className="w-60 h-auto">
                <polygon points="130,20 45,102 215,102" fill="#0284c7" fillOpacity="0.18" stroke="#38bdf8" strokeWidth="2" />
                {m24Type === 'mediatrice' && (
                  <>
                    <line x1="130" y1="10" x2="130" y2="112" stroke="#fbbf24" strokeWidth="2.5" />
                    <rect x="130" y="92" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="2" />
                  </>
                )}
                {m24Type === 'bissectrice' && (
                  <line x1="130" y1="20" x2="130" y2="108" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 2" />
                )}
                {m24Type === 'mediane' && (
                  <>
                    <line x1="130" y1="20" x2="130" y2="102" stroke="#fbbf24" strokeWidth="2.5" />
                    <circle cx="130" cy="74" r="4.5" fill="#f43f5e" />
                    <text x="140" y="78" className="text-xs font-black fill-rose-300">G</text>
                  </>
                )}
                {m24Type === 'hauteur' && (
                  <>
                    <line x1="130" y1="20" x2="130" y2="102" stroke="#f43f5e" strokeWidth="2.5" />
                    <rect x="130" y="92" width="10" height="10" fill="none" stroke="#f43f5e" strokeWidth="2" />
                  </>
                )}
              </svg>
            </div>
            <StandingMathRenderer
              expression={
                m24Type === 'mediatrice'
                  ? `Médiatrice : Passe par le MILIEU et ⊥ au côté | Concours = Centre du cercle CIRCONSCRIT`
                  : m24Type === 'bissectrice'
                  ? `Bissectrice : Coupe l’ANGLE en 2 parties égales | Concours = Centre du cercle INSCRIT`
                  : m24Type === 'mediane'
                  ? `Médiane : Joint un SOMMET au MILIEU opposé | Concours = Centre de GRAVITÉ G (2/3)`
                  : `Hauteur : Passe par un SOMMET et ⊥ côté opposé | Concours = ORTHOCENTRE (Sert pour Aire = B×h÷2)`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 25. VOLUMES PYRAMIDE & CÔNE */}
        {selectedId === 'geometrie-espace-volumes' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => setM25Shape('pyramide')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m25Shape === 'pyramide' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Pyramide (Base carrée)</button>
              <button type="button" onClick={() => setM25Shape('cone')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${m25Shape === 'cone' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Cône de révolution</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">{m25Shape === 'pyramide' ? 'Côté c' : 'Rayon r'} : {m25Dim} cm</label>
                <input type="range" min="2" max="10" value={m25Dim} onChange={(e) => setM25Dim(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Hauteur h : {m25H} cm</label>
                <input type="range" min="3" max="18" step="3" value={m25H} onChange={(e) => setM25H(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 260 125" className="w-60 h-auto">
                {m25Shape === 'pyramide' ? (
                  <>
                    <polygon points="130,14 68,94 168,108" fill="#a855f7" fillOpacity="0.28" stroke="#c084fc" strokeWidth="2" />
                    <polygon points="130,14 168,108 202,82" fill="#a855f7" fillOpacity="0.18" stroke="#c084fc" strokeWidth="2" />
                    <line x1="68" y1="94" x2="202" y2="82" stroke="#c084fc" strokeDasharray="3 3" />
                  </>
                ) : (
                  <>
                    <polygon points="130,14 75,95 185,95" fill="#0284c7" fillOpacity="0.28" stroke="#38bdf8" strokeWidth="2" />
                    <ellipse cx="130" cy="95" rx="55" ry="14" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  </>
                )}
                <line x1="130" y1="14" x2="130" y2="95" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
                <text x="138" y="60" className="text-xs font-black fill-amber-300">h={m25H}</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={
                m25Shape === 'pyramide'
                  ? `B = ${m25Dim}² = ${m25Dim * m25Dim} cm² | V = (${m25Dim * m25Dim} × ${m25H}) ÷ 3 | V = ${(m25Dim * m25Dim * m25H) / 3} cm³`
                  : `V = (π × ${m25Dim}² × ${m25H}) ÷ 3 | V = ${(m25Dim * m25Dim * m25H) / 3}π cm³ ≈ ${Math.round(((m25Dim * m25Dim * m25H) / 3) * 3.14)} cm³`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 26. REPÉRAGE PLAN */}
        {selectedId === 'reperage-plan-coordonnees' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">x_A = {m26Ax}</label>
                <input type="range" min="-4" max="6" value={m26Ax} onChange={(e) => setM26Ax(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">y_A = {m26Ay}</label>
                <input type="range" min="-4" max="6" value={m26Ay} onChange={(e) => setM26Ay(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">x_B = {m26Bx}</label>
                <input type="range" min="-4" max="8" value={m26Bx} onChange={(e) => setM26Bx(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">y_B = {m26By}</label>
                <input type="range" min="-4" max="8" value={m26By} onChange={(e) => setM26By(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 240 135" className="w-60 h-auto">
                <line x1="20" y1="85" x2="220" y2="85" stroke="#475569" strokeWidth="1.5" />
                <line x1="90" y1="10" x2="90" y2="125" stroke="#475569" strokeWidth="1.5" />
                {(() => {
                  const mx = (x: number) => 90 + x * 12;
                  const my = (y: number) => 85 - y * 8;
                  const ix = (m26Ax + m26Bx) / 2;
                  const iy = (m26Ay + m26By) / 2;
                  return (
                    <>
                      <line x1={mx(m26Ax)} y1={my(m26Ay)} x2={mx(m26Bx)} y2={my(m26By)} stroke="#38bdf8" strokeWidth="2.5" />
                      <circle cx={mx(m26Ax)} cy={my(m26Ay)} r="4" fill="#fbbf24" />
                      <circle cx={mx(m26Bx)} cy={my(m26By)} r="4" fill="#38bdf8" />
                      <circle cx={mx(ix)} cy={my(iy)} r="4" fill="#10b981" />
                      <text x={mx(m26Ax) - 6} y={my(m26Ay) - 6} className="text-[9px] font-black fill-amber-300">A</text>
                      <text x={mx(m26Bx) + 5} y={my(m26By) - 5} className="text-[9px] font-black fill-sky-300">B</text>
                      <text x={mx(ix) + 5} y={my(iy) + 10} className="text-[9px] font-black fill-emerald-300">I</text>
                    </>
                  );
                })()}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Milieu I = (${(m26Ax + m26Bx) / 2} ; ${(m26Ay + m26By) / 2}) | Distance AB = √[(${m26Bx - m26Ax})² + (${m26By - m26Ay})²] ≈ ${distAB}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 27. CERCLE PROPRIÉTÉS AVANCÉES */}
        {selectedId === 'cercle-proprietes-avancees' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">Angle inscrit A M̂ B : {m27Inscr}° ➔ Angle au centre A Ô B : {m27Inscr * 2}°</label>
              <input type="range" min="15" max="85" step="5" value={m27Inscr} onChange={(e) => setM27Inscr(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 220 120" className="w-56 h-auto">
                  <circle cx="110" cy="60" r="45" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                  <circle cx="110" cy="60" r="3" fill="#fbbf24" />
                  <polygon points="75,88 110,60 145,88" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="2" />
                  <polygon points="75,88 110,15 145,88" fill="none" stroke="#34d399" strokeWidth="2" />
                  <text x="110" y="10" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">M ({m27Inscr}°)</text>
                  <text x="110" y="75" textAnchor="middle" className="text-[10px] font-black fill-amber-300">O ({m27Inscr * 2}°)</text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Angle inscrit = ${m27Inscr}° | Angle au centre = 2 × ${m27Inscr}° = ${m27Inscr * 2}° | Tangente au cercle = ⊥ au rayon (90°)`}
              showColumnOp={false}
            />
          </div>
        )}
      </div>

      {/* Fiche mémo du chapitre actif */}
      {showChapterMemo && currentChapter.memoSheet && (
        <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-4 sm:p-5 shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                Fiche Mémo Rapide : {currentChapter.title}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">Formules Debout</span>
          </div>
          <p className="text-xs text-slate-300 font-medium">💡 {currentChapter.memoSheet.slogan}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentChapter.memoSheet.verticalFormulas.slice(0, 3).map((vf, i) => (
              <StandingMathRenderer
                key={i}
                expression={vf.steps.join('\n')}
                subResult={vf.resultHighlight}
                title={vf.name}
                showColumnOp={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
