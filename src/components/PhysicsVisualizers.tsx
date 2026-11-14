import React, { useState } from 'react';
import { Atom, FileText, Sparkles } from 'lucide-react';
import { PHYSICS_CHAPTERS, PHYSICS_DOMAINS } from '../data/physicsCurriculum';
import { DomainId } from '../types/math';
import { StandingMathRenderer } from './StandingMathRenderer';

interface PhysicsChapterSimMeta {
  id: string;
  emoji: string;
  shortTitle: string;
}

const PHYSICS_SIM_META: PhysicsChapterSimMeta[] = [
  { id: 'phys-circuit-simple', emoji: '💡', shortTitle: 'Circuit Simple & Schéma' },
  { id: 'phys-circuits-serie-derivation', emoji: '🔀', shortTitle: 'Série vs Dérivation' },
  { id: 'phys-intensite', emoji: '⚡', shortTitle: 'Intensité I & Nœuds' },
  { id: 'phys-tension', emoji: '🔋', shortTitle: 'Tension U & Mailles' },
  { id: 'phys-loi-ohm', emoji: '🎛️', shortTitle: 'Loi d’Ohm (U = R × I)' },
  { id: 'phys-puissance-seeg', emoji: '🏠', shortTitle: 'Puissance & Facture SEEG' },
  { id: 'phys-propagation-lumiere', emoji: '🔦', shortTitle: 'Propagation & Vitesse c' },
  { id: 'phys-ombres-eclipses', emoji: '🌒', shortTitle: 'Ombres & Éclipses' },
  { id: 'phys-reflexion-refraction', emoji: '🪞', shortTitle: 'Réflexion & Réfraction' },
  { id: 'phys-lentilles', emoji: '🔍', shortTitle: 'Lentilles & Vergence' },
  { id: 'phys-dispersion-couleurs', emoji: '🌈', shortTitle: 'Couleurs RVB & Filtres' },
  { id: 'phys-masse-volumique', emoji: '🪵', shortTitle: 'Masse Volumique ρ' },
  { id: 'phys-forces-dynamometre', emoji: '🏹', shortTitle: 'Forces & Dynamomètre' },
  { id: 'phys-poids-masse', emoji: '🌍', shortTitle: 'Poids (P = m × g)' },
  { id: 'phys-pression-archimede', emoji: '🚢', shortTitle: 'Pression & Archimède' },
  { id: 'phys-air-gaz', emoji: '🌬️', shortTitle: 'Air, Gaz & Seringue' },
  { id: 'phys-atomes-molecules', emoji: '⚛️', shortTitle: 'Atomes & Molécules' },
  { id: 'phys-combustions', emoji: '🔥', shortTitle: 'Combustions & Sécurité' },
  { id: 'phys-equations-bilan', emoji: '⚖️', shortTitle: 'Équations & Lavoisier' },
  { id: 'phys-solutions-ph', emoji: '🧪', shortTitle: 'Concentration Cm & pH' },
];

export const PhysicsVisualizers: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>('phys-circuit-simple');
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  // Ch 1: Circuit simple
  const [c1SwitchClosed, setC1SwitchClosed] = useState<boolean>(true);
  const [c1Material, setC1Material] = useState<'cuivre' | 'plastique' | 'eau-salee'>('cuivre');

  // Ch 2: Série vs Dérivation
  const [c2Mount, setC2Mount] = useState<'serie' | 'derivation'>('derivation');
  const [c2L1Broken, setC2L1Broken] = useState<boolean>(false);
  const [c2ShortCircuit, setC2ShortCircuit] = useState<boolean>(false);

  // Ch 3: Intensité & Nœuds
  const [c3I1, setC3I1] = useState<number>(0.4);
  const [c3I2, setC3I2] = useState<number>(0.6);

  // Ch 4: Tension & Mailles
  const [c4Mount, setC4Mount] = useState<'serie' | 'derivation'>('serie');
  const [c4U1, setC4U1] = useState<number>(4.5);
  const [c4U2, setC4U2] = useState<number>(7.5);

  // Ch 5: Loi d'Ohm
  const [c5R, setC5R] = useState<number>(40);
  const [c5I, setC5I] = useState<number>(0.3);

  // Ch 6: Puissance & SEEG
  const [c6Watts, setC6Watts] = useState<number>(1500);
  const [c6Hours, setC6Hours] = useState<number>(4);
  const [c6Tariff, setC6Tariff] = useState<number>(120);

  // Ch 7: Propagation lumière
  const [c7Aligned, setC7Aligned] = useState<boolean>(true);
  const [c7DistKm, setC7DistKm] = useState<number>(150000);

  // Ch 8: Ombres & Éclipses
  const [c8MoonOffset, setC8MoonOffset] = useState<number>(0);

  // Ch 9: Réflexion & Réfraction
  const [c9Mode, setC9Mode] = useState<'reflexion' | 'refraction'>('reflexion');
  const [c9AngleInc, setC9AngleInc] = useState<number>(40);

  // Ch 10: Lentilles & Vergence
  const [c10FocalCm, setC10FocalCm] = useState<number>(25);

  // Ch 11: Dispersion & Couleurs
  const [c11R, setC11R] = useState<boolean>(true);
  const [c11G, setC11G] = useState<boolean>(true);
  const [c11B, setC11B] = useState<boolean>(false);
  const [c11Filter, setC11Filter] = useState<'aucun' | 'rouge' | 'vert' | 'bleu'>('aucun');

  // Ch 12: Masse volumique
  const [c12MassG, setC12MassG] = useState<number>(120);
  const [c12VolCm3, setC12VolCm3] = useState<number>(200);

  // Ch 13: Forces & Dynamomètre
  const [c13ForceN, setC13ForceN] = useState<number>(12);
  const [c13Scale, setC13Scale] = useState<number>(3);

  // Ch 14: Poids & Masse
  const [c14MassKg, setC14MassKg] = useState<number>(50);
  const [c14Body, setC14Body] = useState<'gabon' | 'lune' | 'mars'>('gabon');

  // Ch 15: Pression & Archimède
  const [c15PressF, setC15PressF] = useState<number>(600);
  const [c15PressS, setC15PressS] = useState<number>(0.02);
  const [c15ArchP, setC15ArchP] = useState<number>(12);
  const [c15ArchPPrime, setC15ArchPPrime] = useState<number>(8);

  // Ch 16: Air & Gaz
  const [c16AirVol, setC16AirVol] = useState<number>(100);
  const [c16Piston, setC16Piston] = useState<number>(60);

  // Ch 17: Atomes & Molécules
  const [c17Mol, setC17Mol] = useState<'H2O' | 'CO2' | 'CH4' | 'O2'>('CH4');
  const [c17Count, setC17Count] = useState<number>(2);

  // Ch 18: Combustions
  const [c18Virole, setC18Virole] = useState<'ouverte' | 'fermee'>('ouverte');
  const [c18AirL, setC18AirL] = useState<number>(25);

  // Ch 19: Équations-bilan & Lavoisier
  const [c19CH4Mult, setC19CH4Mult] = useState<number>(1);
  const [c19MassC, setC19MassC] = useState<number>(12);
  const [c19MassO2, setC19MassO2] = useState<number>(32);

  // Ch 20: Solutions & pH
  const [c20SoluteG, setC20SoluteG] = useState<number>(30);
  const [c20VolL, setC20VolL] = useState<number>(1.5);
  const [c20Dilute, setC20Dilute] = useState<number>(2);
  const [c20Ph, setC20Ph] = useState<number>(3);

  const visibleChapters = PHYSICS_CHAPTERS.filter(
    (ch) => selectedDomain === 'all' || ch.domainId === selectedDomain
  );
  const currentChapter =
    PHYSICS_CHAPTERS.find((c) => c.id === selectedId) || PHYSICS_CHAPTERS[0];
  const currentMeta =
    PHYSICS_SIM_META.find((m) => m.id === selectedId) || PHYSICS_SIM_META[0];

  const handleDomainSelect = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const list =
      domId === 'all'
        ? PHYSICS_CHAPTERS
        : PHYSICS_CHAPTERS.filter((c) => c.domainId === domId);
    if (list.length > 0 && !list.some((c) => c.id === selectedId)) {
      setSelectedId(list[0].id);
    }
  };

  // Derived helpers
  const c1Passes = c1SwitchClosed && c1Material !== 'plastique';
  const density = Number((c12MassG / c12VolCm3).toFixed(2));
  const gVal = c14Body === 'gabon' ? 9.8 : c14Body === 'lune' ? 1.6 : 3.7;
  const kwh = Number(((c6Watts / 1000) * c6Hours).toFixed(2));
  const seegCost = Math.round(kwh * c6Tariff);
  const cm = Number((c20SoluteG / c20VolL).toFixed(1));
  const cmDiluted = Number((cm / c20Dilute).toFixed(2));
  const phColor =
    c20Ph <= 2
      ? '#ef4444'
      : c20Ph <= 5
      ? '#f59e0b'
      : c20Ph === 7
      ? '#10b981'
      : c20Ph <= 10
      ? '#06b6d4'
      : '#6366f1';

  const effR = c11Filter === 'aucun' ? c11R : c11Filter === 'rouge' ? c11R : false;
  const effG = c11Filter === 'aucun' ? c11G : c11Filter === 'vert' ? c11G : false;
  const effB = c11Filter === 'aucun' ? c11B : c11Filter === 'bleu' ? c11B : false;
  const rgbColor = `rgb(${effR ? 239 : 20}, ${effG ? 210 : 20}, ${effB ? 245 : 20})`;
  const rgbLabel =
    effR && effG && effB
      ? 'BLANC (R + V + B)'
      : effR && effG
      ? 'JAUNE (R + V)'
      : effR && effB
      ? 'MAGENTA (R + B)'
      : effG && effB
      ? 'CYAN (V + B)'
      : effR
      ? 'ROUGE'
      : effG
      ? 'VERT'
      : effB
      ? 'BLEU'
      : 'NOIR (Lumière absorbée / absente)';

  const refrAngle = Number(
    ((Math.asin(Math.min(0.99, Math.sin((c9AngleInc * Math.PI) / 180) / 1.33)) * 180) / Math.PI).toFixed(1)
  );

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* Header + Sélecteur des 20 chapitres */}
      <div className="rounded-3xl bg-slate-900 border border-sky-500/35 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Physique-Chimie 4ème Gabon · Tous les {PHYSICS_CHAPTERS.length} Chapitres au Complet
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Labo Visuel & Simulateurs Interactifs (20 Chapitres)
              </h2>
              <p className="text-xs text-slate-300">
                Chaque chapitre possède son simulateur interactif, son schéma animé et sa fiche de formules debout.
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
            Tous ({PHYSICS_CHAPTERS.length})
          </button>
          {PHYSICS_DOMAINS.map((dom) => (
            <button
              key={dom.id}
              type="button"
              onClick={() => handleDomainSelect(dom.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
                selectedDomain === dom.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {dom.shortTitle}
            </button>
          ))}
        </div>

        {/* Grille complète des 20 chapitres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
          {visibleChapters.map((chap) => {
            const meta = PHYSICS_SIM_META.find((m) => m.id === chap.id) || {
              id: chap.id,
              emoji: '⚗️',
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
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-md ring-1 ring-sky-400/40'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-extrabold text-amber-400">
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

      {/* Simulateur interactif du chapitre actif */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentMeta.emoji}</span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {currentChapter.badge} · Simulateur Interactif
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">{currentChapter.title}</h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-sky-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Manipule les curseurs ci-dessous</span>
          </span>
        </div>

        {/* 1. CIRCUIT SIMPLE */}
        {selectedId === 'phys-circuit-simple' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setC1SwitchClosed(!c1SwitchClosed)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black cursor-pointer transition ${
                  c1SwitchClosed ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
                }`}
              >
                Interrupteur : {c1SwitchClosed ? 'FERMÉ' : 'OUVERT'}
              </button>
              {(['cuivre', 'eau-salee', 'plastique'] as const).map((mat) => (
                <button
                  key={mat}
                  type="button"
                  onClick={() => setC1Material(mat)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                    c1Material === mat ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Objet testé : {mat === 'cuivre' ? 'Fil de cuivre' : mat === 'eau-salee' ? 'Eau salée' : 'Règle plastique'}
                </button>
              ))}
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 140" className="w-full max-w-md h-auto">
                <rect x="60" y="25" width="240" height="90" rx="8" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                <circle cx="300" cy="70" r="18" fill={c1Passes ? '#facc15' : '#020617'} fillOpacity={c1Passes ? 0.65 : 1} stroke="#facc15" strokeWidth="2.5" />
                <text x="300" y="74" textAnchor="middle" className="text-xs font-black fill-white">L</text>
                <rect x="135" y="15" width="60" height="20" fill="#020617" />
                <line x1="140" y1="25" x2={c1SwitchClosed ? 190 : 182} y2={c1SwitchClosed ? 25 : 8} stroke={c1SwitchClosed ? '#34d399' : '#f43f5e'} strokeWidth="3.5" />
                <rect x="135" y="105" width="90" height="20" rx="5" fill={c1Material === 'plastique' ? '#7f1d1d' : '#065f46'} stroke="#94a3b8" />
                <text x="180" y="119" textAnchor="middle" className="text-[10px] font-bold fill-white">
                  {c1Material === 'cuivre' ? 'Cuivre (Cond.)' : c1Material === 'eau-salee' ? 'Eau salée (Cond.)' : 'Plastique (Isol.)'}
                </text>
                <text x="48" y="64" textAnchor="end" className="text-xs font-black fill-rose-400">+</text>
                <text x="48" y="84" textAnchor="end" className="text-xs font-black fill-sky-400">−</text>
                {c1Passes && <polygon points="110,25 98,19 98,31" fill="#f43f5e" />}
                {c1Passes && <polygon points="245,25 233,19 233,31" fill="#f43f5e" />}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Interrupteur = ${c1SwitchClosed ? 'FERMÉ' : 'OUVERT'} | Matériau = ${c1Material === 'plastique' ? 'ISOLANT' : 'CONDUCTEUR'} | Lampe = ${c1Passes ? 'BRILLE (courant de + vers −)' : 'ÉTEINTE'}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 2. CIRCUITS SÉRIE VS DÉRIVATION */}
        {selectedId === 'phys-circuits-serie-derivation' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setC2Mount('serie')} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c2Mount === 'serie' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Montage en Série (1 boucle)</button>
              <button type="button" onClick={() => setC2Mount('derivation')} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c2Mount === 'derivation' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Montage en Dérivation (2 boucles)</button>
              <button type="button" onClick={() => setC2L1Broken(!c2L1Broken)} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c2L1Broken ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'}`}>{c2L1Broken ? 'Réparer L₁' : 'Griller L₁'}</button>
              <button type="button" onClick={() => setC2ShortCircuit(!c2ShortCircuit)} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c2ShortCircuit ? 'bg-orange-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>{c2ShortCircuit ? 'Retirer fil court-circuit' : 'Court-circuiter L₁'}</button>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 150" className="w-full max-w-md h-auto">
                {c2Mount === 'serie' ? (
                  <>
                    <rect x="60" y="30" width="240" height="90" rx="8" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                    <circle cx="145" cy="30" r="16" fill={!c2L1Broken && !c2ShortCircuit ? '#facc15' : '#020617'} fillOpacity={0.7} stroke={c2L1Broken ? '#f43f5e' : '#facc15'} strokeWidth="2.5" />
                    <text x="145" y="34" textAnchor="middle" className="text-xs font-black fill-white">L₁</text>
                    <circle cx="235" cy="30" r="16" fill={!c2L1Broken ? '#facc15' : '#020617'} fillOpacity={0.7} stroke="#facc15" strokeWidth="2.5" />
                    <text x="235" y="34" textAnchor="middle" className="text-xs font-black fill-white">L₂</text>
                    {c2ShortCircuit && <path d="M 120 30 Q 145 8 170 30" fill="none" stroke="#fb923c" strokeWidth="3" />}
                  </>
                ) : (
                  <>
                    <rect x="60" y="25" width="240" height="100" rx="8" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1="185" y1="25" x2="185" y2="125" stroke="#94a3b8" strokeWidth="2.5" />
                    <circle cx="185" cy="75" r="16" fill={!c2L1Broken && !c2ShortCircuit ? '#facc15' : '#020617'} fillOpacity={0.7} stroke={c2L1Broken ? '#f43f5e' : '#facc15'} strokeWidth="2.5" />
                    <text x="185" y="79" textAnchor="middle" className="text-xs font-black fill-white">L₁</text>
                    <circle cx="300" cy="75" r="16" fill={!c2ShortCircuit ? '#facc15' : '#020617'} fillOpacity={0.7} stroke="#facc15" strokeWidth="2.5" />
                    <text x="300" y="79" textAnchor="middle" className="text-xs font-black fill-white">L₂</text>
                    {c2ShortCircuit && <line x1="205" y1="25" x2="205" y2="125" stroke="#fb923c" strokeWidth="3" />}
                  </>
                )}
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Montage = ${c2Mount === 'serie' ? 'SÉRIE' : 'DÉRIVATION'} | L₁ = ${c2L1Broken ? 'Grillée' : c2ShortCircuit ? 'Court-circuitée (éteinte)' : 'Allumée'} | L₂ = ${c2ShortCircuit && c2Mount === 'derivation' ? 'ÉTEINTE (court-circuit général !)' : c2L1Broken && c2Mount === 'serie' ? 'ÉTEINTE aussi !' : 'RESTE ALLUMÉE !'}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 3. INTENSITÉ & LOI DES NŒUDS */}
        {selectedId === 'phys-intensite' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Branche 1 (I₁) : {c3I1.toFixed(1)} A ({Math.round(c3I1 * 1000)} mA)</label>
                <input type="range" min="0.1" max="2.5" step="0.1" value={c3I1} onChange={(e) => setC3I1(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Branche 2 (I₂) : {c3I2.toFixed(1)} A ({Math.round(c3I2 * 1000)} mA)</label>
                <input type="range" min="0.1" max="2.5" step="0.1" value={c3I2} onChange={(e) => setC3I2(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 110" className="w-full max-w-md h-auto">
                <line x1="30" y1="55" x2="150" y2="55" stroke="#fbbf24" strokeWidth="4" />
                <circle cx="150" cy="55" r="7" fill="#f59e0b" />
                <line x1="150" y1="55" x2="290" y2="25" stroke="#34d399" strokeWidth="3.5" />
                <line x1="150" y1="55" x2="290" y2="85" stroke="#38bdf8" strokeWidth="3.5" />
                <text x="85" y="42" textAnchor="middle" className="text-xs font-black fill-amber-300">I = {(c3I1 + c3I2).toFixed(1)} A</text>
                <text x="235" y="22" textAnchor="middle" className="text-xs font-black fill-emerald-300">I₁ = {c3I1.toFixed(1)} A</text>
                <text x="235" y="102" textAnchor="middle" className="text-xs font-black fill-sky-300">I₂ = {c3I2.toFixed(1)} A</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`I_principal = I₁ + I₂ | = ${c3I1.toFixed(1)} + ${c3I2.toFixed(1)} | = ${(c3I1 + c3I2).toFixed(1)} A = ${Math.round((c3I1 + c3I2) * 1000)} mA`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 4. TENSION & LOI DES MAILLES */}
        {selectedId === 'phys-tension' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => setC4Mount('serie')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c4Mount === 'serie' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Série (Additivité)</button>
              <button type="button" onClick={() => setC4Mount('derivation')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c4Mount === 'derivation' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Dérivation (Unicité)</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Tension U₁ : {c4U1.toFixed(1)} V</label>
                <input type="range" min="1.5" max="12" step="0.5" value={c4U1} onChange={(e) => setC4U1(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              {c4Mount === 'serie' && (
                <div>
                  <label className="text-xs text-sky-300 font-bold block mb-1">Tension U₂ : {c4U2.toFixed(1)} V</label>
                  <input type="range" min="1.5" max="12" step="0.5" value={c4U2} onChange={(e) => setC4U2(Number(e.target.value))} className="w-full accent-sky-400" />
                </div>
              )}
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 135" className="w-full max-w-md h-auto">
                {c4Mount === 'serie' ? (
                  <>
                    <rect x="45" y="28" width="270" height="84" rx="8" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                    <circle cx="45" cy="70" r="14" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                    <text x="45" y="74" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">G</text>
                    <rect x="105" y="16" width="56" height="24" rx="5" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
                    <text x="133" y="32" textAnchor="middle" className="text-[10px] font-black fill-amber-200">{c4U1.toFixed(1)} V</text>
                    <rect x="200" y="16" width="56" height="24" rx="5" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                    <text x="228" y="32" textAnchor="middle" className="text-[10px] font-black fill-sky-200">{c4U2.toFixed(1)} V</text>
                    <circle cx="180" cy="112" r="13" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                    <text x="180" y="116" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">V</text>
                    <text x="180" y="74" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                      U_G = {(c4U1 + c4U2).toFixed(1)} V
                    </text>
                  </>
                ) : (
                  <>
                    <rect x="55" y="25" width="250" height="90" rx="8" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
                    <line x1="180" y1="25" x2="180" y2="115" stroke="#94a3b8" strokeWidth="2.5" />
                    <circle cx="55" cy="70" r="14" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                    <text x="55" y="74" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">G</text>
                    <rect x="155" y="58" width="50" height="24" rx="5" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
                    <text x="180" y="74" textAnchor="middle" className="text-[10px] font-black fill-amber-200">{c4U1.toFixed(1)} V</text>
                    <rect x="280" y="58" width="50" height="24" rx="5" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
                    <text x="305" y="74" textAnchor="middle" className="text-[10px] font-black fill-sky-200">{c4U1.toFixed(1)} V</text>
                    <text x="180" y="16" textAnchor="middle" className="text-[10px] font-black fill-sky-300">
                      Dérivation : U_G = U₁ = U₂ = {c4U1.toFixed(1)} V
                    </text>
                  </>
                )}
              </svg>
            </div>
            <StandingMathRenderer
              expression={
                c4Mount === 'serie'
                  ? `U_G = U₁ + U₂ | = ${c4U1.toFixed(1)} + ${c4U2.toFixed(1)} | = ${(c4U1 + c4U2).toFixed(1)} V`
                  : `Montage en DÉRIVATION | U_G = U₁ = U₂ | = ${c4U1.toFixed(1)} V (Unicité des tensions)`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 5. LOI D'OHM */}
        {selectedId === 'phys-loi-ohm' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Résistance R : {c5R} Ω</label>
                <input type="range" min="10" max="150" step="10" value={c5R} onChange={(e) => setC5R(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Intensité I : {c5I.toFixed(1)} A</label>
                <input type="range" min="0.1" max="1.5" step="0.1" value={c5I} onChange={(e) => setC5I(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 320 135" className="w-full max-w-md h-auto">
                <line x1="40" y1="115" x2="290" y2="115" stroke="#64748b" strokeWidth="2" />
                <line x1="40" y1="115" x2="40" y2="15" stroke="#64748b" strokeWidth="2" />
                <line x1="40" y1="115" x2="260" y2={Math.max(20, 115 - c5R * 0.6)} stroke="#10b981" strokeWidth="3.5" />
                <circle cx={40 + c5I * 140} cy={Math.max(20, 115 - (c5I / 1.5) * c5R * 0.6)} r="5" fill="#fbbf24" />
                <text x="165" y="130" textAnchor="middle" className="text-[10px] font-bold fill-sky-300">Caractéristique U(I) : Droite passant par (0 ; 0)</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`U = R × I | U = ${c5R} × ${c5I.toFixed(1)} | U = ${(c5R * c5I).toFixed(1)} V`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 6. PUISSANCE & FACTURE SEEG */}
        {selectedId === 'phys-puissance-seeg' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Puissance : {c6Watts} W ({(c6Watts / 1000).toFixed(1)} kW)</label>
                <input type="range" min="500" max="3000" step="250" value={c6Watts} onChange={(e) => setC6Watts(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Durée t : {c6Hours} h</label>
                <input type="range" min="1" max="12" value={c6Hours} onChange={(e) => setC6Hours(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Tarif SEEG : {c6Tariff} F/kWh</label>
                <input type="range" min="90" max="150" step="10" value={c6Tariff} onChange={(e) => setC6Tariff(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 120" className="w-full max-w-md h-auto">
                <rect x="22" y="16" width="160" height="88" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="102" y="34" textAnchor="middle" className="text-[10px] font-black fill-sky-300">COMPTEUR SEEG (220 V)</text>
                <rect x="38" y="42" width="128" height="28" rx="6" fill="#020617" stroke="#10b981" />
                <text x="102" y="61" textAnchor="middle" className="text-sm font-mono font-black fill-emerald-300">
                  {kwh} kWh
                </text>
                <text x="102" y="90" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">
                  I ≈ {(c6Watts / 220).toFixed(1)} A
                </text>
                <rect x="200" y="16" width="140" height="88" rx="12" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
                <text x="270" y="34" textAnchor="middle" className="text-[10px] font-black fill-amber-300">CHARGE PUISSANCE</text>
                <rect x="218" y="48" width="104" height="14" rx="7" fill="#1e293b" />
                <rect x="218" y="48" width={Math.min(104, (c6Watts / 3000) * 104)} height="14" rx="7" fill={c6Watts >= 2000 ? '#f43f5e' : '#10b981'} />
                <text x="270" y="86" textAnchor="middle" className="text-xs font-mono font-black fill-white">
                  {seegCost.toLocaleString('fr-FR')} F CFA
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`I (220 V) = ${c6Watts} ÷ 220 ≈ ${(c6Watts / 220).toFixed(1)} A | E = ${(c6Watts / 1000).toFixed(2)} kW × ${c6Hours} h = ${kwh} kWh | Facture SEEG = ${kwh} × ${c6Tariff} = ${seegCost.toLocaleString('fr-FR')} F CFA`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 7. PROPAGATION RECTILIGNE LUMIÈRE */}
        {selectedId === 'phys-propagation-lumiere' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setC7Aligned(!c7Aligned)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black cursor-pointer ${
                  c7Aligned ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
                }`}
              >
                Trous des 3 cartons : {c7Aligned ? 'ALIGNÉS (Faisceau passe !)' : 'DÉCALÉS (Faisceau bloqué)'}
              </button>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">Distance d parcourue : {c7DistKm.toLocaleString('fr-FR')} km (c = 300 000 km/s)</label>
              <input type="range" min="30000" max="600000" step="30000" value={c7DistKm} onChange={(e) => setC7DistKm(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 360 90" className="w-full max-w-md h-auto">
                  <circle cx="35" cy="45" r="14" fill="#facc15" />
                  <rect x="115" y="12" width="8" height="28" fill="#64748b" />
                  <rect x="115" y="50" width="8" height="28" fill="#64748b" />
                  <rect x="210" y={c7Aligned ? 12 : 24} width="8" height="28" fill="#64748b" />
                  <rect x="210" y={c7Aligned ? 50 : 62} width="8" height="28" fill="#64748b" />
                  <line x1="49" y1="45" x2={c7Aligned ? 325 : 210} y2="45" stroke="#fde047" strokeWidth="3" />
                  <circle cx="330" cy="45" r="10" fill={c7Aligned ? '#fde047' : '#1e293b'} />
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Propagation = RECTILIGNE dans un milieu transparent et homogène | t = d ÷ c = ${c7DistKm} ÷ 300 000 | t = ${(c7DistKm / 300000).toFixed(2)} seconde(s)`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 8. OMBRES & ÉCLIPSES */}
        {selectedId === 'phys-ombres-eclipses' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">
                Position verticale de la Lune : {c8MoonOffset} ({Math.abs(c8MoonOffset) <= 5 ? 'Alignement Soleil-Lune-Terre ➔ ÉCLIPSE !' : 'Hors axe ➔ Pas d’éclipse'})
              </label>
              <input type="range" min="-25" max="25" step="5" value={c8MoonOffset} onChange={(e) => setC8MoonOffset(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 360 110" className="w-full max-w-md h-auto">
                  <circle cx="40" cy="55" r="20" fill="#facc15" />
                  <polygon points="40,35 320,18 320,92 40,75" fill="#1e293b" fillOpacity="0.4" />
                  <circle cx="170" cy={55 + c8MoonOffset} r="10" fill="#cbd5e1" />
                  <circle cx="290" cy="55" r="22" fill="#0284c7" />
                  {Math.abs(c8MoonOffset) <= 5 && <circle cx="272" cy="55" r="9" fill="#020617" fillOpacity="0.88" />}
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Alignement = ${Math.abs(c8MoonOffset) <= 5 ? 'OUI (Soleil - Lune - Terre alignés)' : 'NON'} | Zone sur Terre = ${Math.abs(c8MoonOffset) <= 5 ? 'Ombre portée de la Lune ➔ Éclipse solaire' : 'Pleine lumière'}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 9. RÉFLEXION & RÉFRACTION */}
        {selectedId === 'phys-reflexion-refraction' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => setC9Mode('reflexion')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c9Mode === 'reflexion' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Miroir Plan (Réflexion i = r)</button>
              <button type="button" onClick={() => setC9Mode('refraction')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c9Mode === 'refraction' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Air ➔ Eau (Réfraction)</button>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-sky-300 font-bold block">Angle d’incidence i : {c9AngleInc}°</label>
              <input type="range" min="15" max="75" step="5" value={c9AngleInc} onChange={(e) => setC9AngleInc(Number(e.target.value))} className="w-full accent-sky-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 320 130" className="w-full max-w-md h-auto">
                  {c9Mode === 'refraction' && <rect x="40" y="75" width="240" height="45" fill="#0284c7" fillOpacity="0.25" />}
                  <line x1="40" y1="75" x2="280" y2="75" stroke="#94a3b8" strokeWidth="3" />
                  <line x1="160" y1="12" x2="160" y2="122" stroke="#64748b" strokeDasharray="3 3" />
                  <line x1={160 - Math.sin((c9AngleInc * Math.PI) / 180) * 65} y1={75 - Math.cos((c9AngleInc * Math.PI) / 180) * 65} x2="160" y2="75" stroke="#facc15" strokeWidth="3" />
                  {c9Mode === 'reflexion' ? (
                    <line x1="160" y1="75" x2={160 + Math.sin((c9AngleInc * Math.PI) / 180) * 65} y2={75 - Math.cos((c9AngleInc * Math.PI) / 180) * 65} stroke="#34d399" strokeWidth="3" />
                  ) : (
                    <line x1="160" y1="75" x2={160 + Math.sin((refrAngle * Math.PI) / 180) * 55} y2={75 + Math.cos((refrAngle * Math.PI) / 180) * 55} stroke="#38bdf8" strokeWidth="3" />
                  )}
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={
                c9Mode === 'reflexion'
                  ? `Angle incidence i = ${c9AngleInc}° | Loi réflexion : r = i | Angle réfléchi r = ${c9AngleInc}°`
                  : `Air (n=1) ➔ Eau (n=1,33) | Incidence i₁ = ${c9AngleInc}° | Réfracté i₂ ≈ ${refrAngle}° (se rapproche de la normale)`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 10. LENTILLES & VERGENCE */}
        {selectedId === 'phys-lentilles' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block">Distance focale f’ : {c10FocalCm} cm = {(c10FocalCm / 100).toFixed(2)} m</label>
              <input type="range" min="10" max="50" step="5" value={c10FocalCm} onChange={(e) => setC10FocalCm(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 360 110" className="w-full max-w-md h-auto">
                  <line x1="20" y1="55" x2="340" y2="55" stroke="#475569" strokeDasharray="4 3" />
                  <line x1="120" y1="15" x2="120" y2="95" stroke="#38bdf8" strokeWidth="4" />
                  <polygon points="120,10 114,20 126,20" fill="#38bdf8" />
                  <polygon points="120,100 114,90 126,90" fill="#38bdf8" />
                  <line x1="25" y1="30" x2="120" y2="30" stroke="#facc15" strokeWidth="2.5" />
                  <line x1="25" y1="80" x2="120" y2="80" stroke="#facc15" strokeWidth="2.5" />
                  <line x1="120" y1="30" x2={120 + c10FocalCm * 3.8} y2="55" stroke="#34d399" strokeWidth="2.5" />
                  <line x1="120" y1="80" x2={120 + c10FocalCm * 3.8} y2="55" stroke="#34d399" strokeWidth="2.5" />
                  <circle cx={120 + c10FocalCm * 3.8} cy="55" r="4.5" fill="#fb7185" />
                  <text x={120 + c10FocalCm * 3.8} y="44" textAnchor="middle" className="text-[11px] font-black fill-rose-300">F’</text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`f’ = ${c10FocalCm} cm = ${(c10FocalCm / 100).toFixed(2)} m | C = 1 ÷ ${(c10FocalCm / 100).toFixed(2)} | C = ${(100 / c10FocalCm).toFixed(2)} δ (dioptries)`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 11. DISPERSION & COULEURS RVB */}
        {selectedId === 'phys-dispersion-couleurs' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setC11R(!c11R)} className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer ${c11R ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'}`}>Rouge {c11R ? 'ON' : 'OFF'}</button>
              <button type="button" onClick={() => setC11G(!c11G)} className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer ${c11G ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>Vert {c11G ? 'ON' : 'OFF'}</button>
              <button type="button" onClick={() => setC11B(!c11B)} className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer ${c11B ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>Bleu {c11B ? 'ON' : 'OFF'}</button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-bold">Filtre optique (soustractive) :</span>
              {(['aucun', 'rouge', 'vert', 'bleu'] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setC11Filter(f)}
                  className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${
                    c11Filter === f ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {f === 'aucun' ? 'Aucun filtre' : `Filtre ${f}`}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 260 130" className="w-full max-w-xs h-auto">
                <polygon points="48,25 18,95 78,95" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
                <line x1="4" y1="64" x2="32" y2="58" stroke="#ffffff" strokeWidth="3" />
                <line x1="65" y1="56" x2="108" y2="42" stroke="#ef4444" strokeWidth="2" />
                <line x1="65" y1="58" x2="108" y2="58" stroke="#22c55e" strokeWidth="2" />
                <line x1="65" y1="60" x2="108" y2="74" stroke="#6366f1" strokeWidth="2" />
                <circle cx="172" cy="52" r="24" fill={c11R ? '#ef4444' : '#1e293b'} fillOpacity={c11R ? 0.55 : 0.4} stroke="#ef4444" strokeWidth="1.5" />
                <circle cx="200" cy="52" r="24" fill={c11G ? '#22c55e' : '#1e293b'} fillOpacity={c11G ? 0.55 : 0.4} stroke="#22c55e" strokeWidth="1.5" />
                <circle cx="186" cy="76" r="24" fill={c11B ? '#3b82f6' : '#1e293b'} fillOpacity={c11B ? 0.55 : 0.4} stroke="#3b82f6" strokeWidth="1.5" />
                {c11Filter !== 'aucun' && (
                  <rect x="136" y="18" width="100" height="92" rx="10" fill={c11Filter === 'rouge' ? '#ef4444' : c11Filter === 'vert' ? '#22c55e' : '#3b82f6'} fillOpacity="0.22" stroke="#fbbf24" strokeDasharray="3 2" />
                )}
                <text x="186" y="122" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
                  {c11Filter === 'aucun' ? 'Synthèse RVB' : `Filtre ${c11Filter} actif`}
                </text>
              </svg>
              <div className="flex-1 w-full p-5 rounded-2xl border border-slate-700 flex items-center justify-center font-black text-sm" style={{ backgroundColor: rgbColor }}>
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950/85 text-white">{rgbLabel}</span>
              </div>
            </div>
          </div>
        )}

        {/* 12. MASSE VOLUMIQUE */}
        {selectedId === 'phys-masse-volumique' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Masse m : {c12MassG} g</label>
                <input type="range" min="40" max="600" step="20" value={c12MassG} onChange={(e) => setC12MassG(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Volume V : {c12VolCm3} cm³</label>
                <input type="range" min="50" max="400" step="25" value={c12VolCm3} onChange={(e) => setC12VolCm3(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 260 120" className="w-full max-w-xs h-auto">
                <rect x="85" y="15" width="90" height="95" rx="6" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
                <rect x="87" y="45" width="86" height="63" fill="#0284c7" fillOpacity="0.35" />
                <rect x="112" y={density < 1 ? 38 : density === 1 ? 65 : 85} width="36" height="20" rx="4" fill={density < 1 ? '#b45309' : '#64748b'} stroke="#facc15" />
                <text x="130" y="16" textAnchor="middle" dy="15" className="text-[10px] font-black fill-sky-300">
                  {density < 1 ? '🪵 FLOTTE (ρ < 1)' : density > 1 ? '⚓ COULE (ρ > 1)' : 'Équilibre'}
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`ρ = m ÷ V = ${c12MassG} ÷ ${c12VolCm3} | ρ = ${density} g/cm³ (${Math.round(density * 1000)} kg/m³) | Eau : ${density < 1 ? 'FLOTTE' : density > 1 ? 'COULE' : 'Entre deux eaux'}`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 13. FORCES & DYNAMOMÈTRE */}
        {selectedId === 'phys-forces-dynamometre' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Intensité Force F : {c13ForceN} N</label>
                <input type="range" min="3" max="24" step="3" value={c13ForceN} onChange={(e) => setC13ForceN(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Échelle : 1 cm ↔ {c13Scale} N</label>
                <input type="range" min="1" max="6" value={c13Scale} onChange={(e) => setC13Scale(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 340 80" className="w-full max-w-md h-auto">
                <circle cx="40" cy="40" r="8" fill="#fbbf24" />
                <line x1="48" y1="40" x2={48 + Math.min(250, (c13ForceN / c13Scale) * 28)} y2="40" stroke="#10b981" strokeWidth="4" />
                <polygon
                  points={`${56 + Math.min(250, (c13ForceN / c13Scale) * 28)},40 ${44 + Math.min(250, (c13ForceN / c13Scale) * 28)},33 ${44 + Math.min(250, (c13ForceN / c13Scale) * 28)},47`}
                  fill="#10b981"
                />
                <text x="170" y="22" textAnchor="middle" className="text-xs font-black fill-emerald-300">
                  Vecteur F = {c13ForceN} N → Longueur = {(c13ForceN / c13Scale).toFixed(1)} cm
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Longueur flèche = F ÷ Échelle | = ${c13ForceN} ÷ ${c13Scale} | = ${(c13ForceN / c13Scale).toFixed(1)} cm`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 14. POIDS & MASSE */}
        {selectedId === 'phys-poids-masse' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setC14Body('gabon')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c14Body === 'gabon' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Terre / Gabon (9,8 N/kg)</button>
              <button type="button" onClick={() => setC14Body('lune')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c14Body === 'lune' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Lune (1,6 N/kg)</button>
              <button type="button" onClick={() => setC14Body('mars')} className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${c14Body === 'mars' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Mars (3,7 N/kg)</button>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block mb-1">Masse m (invariante partout !) : {c14MassKg} kg</label>
              <input type="range" min="10" max="100" step="5" value={c14MassKg} onChange={(e) => setC14MassKg(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 340 125" className="w-full max-w-md h-auto">
                  <circle cx="70" cy="60" r="34" fill={c14Body === 'gabon' ? '#0284c7' : c14Body === 'lune' ? '#94a3b8' : '#b45309'} fillOpacity="0.35" stroke={c14Body === 'gabon' ? '#38bdf8' : c14Body === 'lune' ? '#cbd5e1' : '#f59e0b'} strokeWidth="2" />
                  <text x="70" y="56" textAnchor="middle" className="text-xs font-black fill-white">
                    {c14Body === 'gabon' ? 'TERRE' : c14Body === 'lune' ? 'LUNE' : 'MARS'}
                  </text>
                  <text x="70" y="72" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-300">g = {gVal}</text>
                  <line x1="160" y1="15" x2="290" y2="15" stroke="#64748b" strokeWidth="3" />
                  <line x1="225" y1="15" x2="225" y2="34" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="195" y="34" width="60" height="32" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="225" y="54" textAnchor="middle" className="text-xs font-black fill-white">{c14MassKg} kg</text>
                  <circle cx="225" cy="50" r="3" fill="#fbbf24" />
                  <line x1="225" y1="66" x2="225" y2={76 + Math.min(40, (c14MassKg * gVal) / 24)} stroke="#f43f5e" strokeWidth="3.5" />
                  <polygon points={`225,${82 + Math.min(40, (c14MassKg * gVal) / 24)} 219,${72 + Math.min(40, (c14MassKg * gVal) / 24)} 231,${72 + Math.min(40, (c14MassKg * gVal) / 24)}`} fill="#f43f5e" />
                  <text x="242" y="92" className="text-xs font-black fill-rose-300">P = {(c14MassKg * gVal).toFixed(1)} N</text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`m = ${c14MassKg} kg | g = ${gVal} N/kg | P = m × g = ${c14MassKg} × ${gVal} | P = ${(c14MassKg * gVal).toFixed(1)} N`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 15. PRESSION & ARCHIMÈDE */}
        {selectedId === 'phys-pression-archimede' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Force pressante F : {c15PressF} N</label>
                <input type="range" min="100" max="1000" step="100" value={c15PressF} onChange={(e) => setC15PressF(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Surface d’appui S : {c15PressS} m²</label>
                <input type="range" min="0.01" max="0.1" step="0.01" value={c15PressS} onChange={(e) => setC15PressS(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-xs text-emerald-300 font-bold block mb-1">Poids dans l’air P : {c15ArchP} N</label>
                <input type="range" min="8" max="25" value={c15ArchP} onChange={(e) => setC15ArchP(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="text-xs text-cyan-300 font-bold block mb-1">Poids apparent dans l’eau P’ : {Math.min(c15ArchP, c15ArchPPrime)} N</label>
                <input type="range" min="2" max={c15ArchP} value={Math.min(c15ArchP, c15ArchPPrime)} onChange={(e) => setC15ArchPPrime(Number(e.target.value))} className="w-full accent-cyan-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 120" className="w-full max-w-md h-auto">
                {/* Left: Pressure */}
                <rect x="20" y="92" width={Math.max(24, Math.min(130, c15PressS * 1200))} height="14" rx="4" fill="#38bdf8" />
                <line x1={20 + Math.max(24, Math.min(130, c15PressS * 1200)) / 2} y1="22" x2={20 + Math.max(24, Math.min(130, c15PressS * 1200)) / 2} y2="80" stroke="#fbbf24" strokeWidth="4" />
                <polygon points={`${20 + Math.max(24, Math.min(130, c15PressS * 1200)) / 2},89 ${14 + Math.max(24, Math.min(130, c15PressS * 1200)) / 2},76 ${26 + Math.max(24, Math.min(130, c15PressS * 1200)) / 2},76`} fill="#fbbf24" />
                <text x="85" y="16" textAnchor="middle" className="text-[10px] font-black fill-amber-300">F = {c15PressF} N</text>
                <text x="85" y="116" textAnchor="middle" className="text-[10px] font-black fill-sky-300">p = {Math.round(c15PressF / c15PressS).toLocaleString('fr-FR')} Pa</text>
                {/* Right: Archimedes */}
                <rect x="195" y="34" width="140" height="72" rx="6" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" />
                <rect x="242" y="54" width="46" height="28" rx="4" fill="#f59e0b" stroke="#fde68a" />
                <line x1="265" y1="54" x2="265" y2={50 - Math.min(34, (c15ArchP - Math.min(c15ArchP, c15ArchPPrime)) * 2)} stroke="#10b981" strokeWidth="3.5" />
                <line x1="265" y1="82" x2="265" y2={86 + Math.min(24, c15ArchP)} stroke="#f43f5e" strokeWidth="3.5" />
                <text x="296" y="42" className="text-[10px] font-black fill-emerald-300">F_A={c15ArchP - Math.min(c15ArchP, c15ArchPPrime)}N ↑</text>
                <text x="296" y="98" className="text-[10px] font-black fill-rose-300">P={c15ArchP}N ↓</text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`Pression p = F ÷ S = ${c15PressF} ÷ ${c15PressS} = ${Math.round(c15PressF / c15PressS).toLocaleString('fr-FR')} Pa | Poussée d’Archimède F_A = P - P’ = ${c15ArchP} - ${Math.min(c15ArchP, c15ArchPPrime)} = ${c15ArchP - Math.min(c15ArchP, c15ArchPPrime)} N`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 16. AIR, GAZ & SERINGUE */}
        {selectedId === 'phys-air-gaz' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-xs text-sky-300 font-bold block mb-1">Volume total d’air : {c16AirVol} L</label>
                <input type="range" min="10" max="500" step="10" value={c16AirVol} onChange={(e) => setC16AirVol(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-xs text-amber-300 font-bold block mb-1">Compression piston seringue : {c16Piston}% du volume</label>
                <input type="range" min="20" max="100" step="20" value={c16Piston} onChange={(e) => setC16Piston(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 115" className="w-full max-w-md h-auto">
                {/* Bar composition */}
                <rect x="20" y="14" width="218" height="22" rx="4" fill="#0284c7" />
                <text x="129" y="29" textAnchor="middle" className="text-[10px] font-black fill-white">78% N₂ ({(c16AirVol * 0.78).toFixed(1)} L)</text>
                <rect x="240" y="14" width="84" height="22" rx="4" fill="#059669" />
                <text x="282" y="29" textAnchor="middle" className="text-[10px] font-black fill-white">21% O₂</text>
                <rect x="326" y="14" width="14" height="22" rx="4" fill="#a855f7" />
                {/* Syringe compression */}
                <rect x="45" y="54" width="230" height="44" rx="6" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
                <line x1="275" y1="76" x2="310" y2="76" stroke="#94a3b8" strokeWidth="4" />
                <rect x={45 + (c16Piston / 100) * 195} y="56" width="10" height="40" fill="#fbbf24" />
                <line x1={55 + (c16Piston / 100) * 195} y1="76" x2="325" y2="76" stroke="#fbbf24" strokeWidth="5" />
                {[0.15, 0.35, 0.55, 0.75, 0.9, 0.25, 0.65, 0.82].map((r, i) => (
                  <circle
                    key={i}
                    cx={55 + r * ((c16Piston / 100) * 180)}
                    cy={i % 2 === 0 ? 67 : 86}
                    r="3.5"
                    fill={i < 2 ? '#34d399' : '#38bdf8'}
                  />
                ))}
                <text x="180" y="112" textAnchor="middle" className="text-[10px] font-bold fill-amber-300">
                  Mêmes molécules comprimées à {c16Piston}% du volume !
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`V(O₂) = 21% × ${c16AirVol} = ${(c16AirVol * 0.21).toFixed(1)} L | V(N₂) = 78% × ${c16AirVol} = ${(c16AirVol * 0.78).toFixed(1)} L | Masse air = ${c16AirVol} × 1,3 = ${(c16AirVol * 1.3).toFixed(1)} g | Piston à ${c16Piston}% : molécules invariantes mais pression augmente !`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 17. ATOMES & MOLÉCULES */}
        {selectedId === 'phys-atomes-molecules' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {(['H2O', 'CO2', 'CH4', 'O2'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setC17Mol(m)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer ${
                    c17Mol === m ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {m === 'H2O' ? 'Eau (H₂O)' : m === 'CO2' ? 'CO₂' : m === 'CH4' ? 'Méthane (CH₄)' : 'Dioxygène (O₂)'}
                </button>
              ))}
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-emerald-300 font-bold block mb-1">Coefficient devant la molécule : {c17Count}</label>
              <input type="range" min="1" max="5" value={c17Count} onChange={(e) => setC17Count(Number(e.target.value))} className="w-full accent-emerald-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 360 95" className="w-full max-w-md h-auto">
                  {Array.from({ length: c17Count }).map((_, idx) => {
                    const cx = 44 + idx * 68;
                    return (
                      <g key={idx}>
                        {c17Mol === 'H2O' && (
                          <>
                            <circle cx={cx} cy="45" r="13" fill="#ef4444" />
                            <circle cx={cx - 14} cy="56" r="7" fill="#f8fafc" />
                            <circle cx={cx + 14} cy="56" r="7" fill="#f8fafc" />
                          </>
                        )}
                        {c17Mol === 'CO2' && (
                          <>
                            <circle cx={cx} cy="45" r="11" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                            <circle cx={cx - 16} cy="45" r="9" fill="#ef4444" />
                            <circle cx={cx + 16} cy="45" r="9" fill="#ef4444" />
                          </>
                        )}
                        {c17Mol === 'CH4' && (
                          <>
                            <circle cx={cx} cy="45" r="11" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                            <circle cx={cx} cy="28" r="6" fill="#f8fafc" />
                            <circle cx={cx} cy="62" r="6" fill="#f8fafc" />
                            <circle cx={cx - 17} cy="45" r="6" fill="#f8fafc" />
                            <circle cx={cx + 17} cy="45" r="6" fill="#f8fafc" />
                          </>
                        )}
                        {c17Mol === 'O2' && (
                          <>
                            <circle cx={cx - 9} cy="45" r="11" fill="#ef4444" />
                            <circle cx={cx + 9} cy="45" r="11" fill="#ef4444" />
                          </>
                        )}
                      </g>
                    );
                  })}
                  <text x="180" y="88" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
                    Modèles moléculaires : {c17Count} × {c17Mol}
                  </text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={
                c17Mol === 'H2O'
                  ? `${c17Count} H₂O | Atomes H = ${c17Count * 2} (Blanc) | Atomes O = ${c17Count * 1} (Rouge)`
                  : c17Mol === 'CO2'
                  ? `${c17Count} CO₂ | Atomes C = ${c17Count * 1} (Noir) | Atomes O = ${c17Count * 2} (Rouge)`
                  : c17Mol === 'CH4'
                  ? `${c17Count} CH₄ | Atomes C = ${c17Count * 1} (Noir) | Atomes H = ${c17Count * 4} (Blanc)`
                  : `${c17Count} O₂ | Atomes O = ${c17Count * 2} (Rouge)`
              }
              showColumnOp={false}
            />
          </div>
        )}

        {/* 18. COMBUSTIONS & SÉCURITÉ */}
        {selectedId === 'phys-combustions' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setC18Virole('ouverte')} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c18Virole === 'ouverte' ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Virole ouverte (O₂ suffisant)</button>
              <button type="button" onClick={() => setC18Virole('fermee')} className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${c18Virole === 'fermee' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>Virole fermée (Manque d’O₂)</button>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 tabular-nums">
              <label className="text-xs text-amber-300 font-bold block mb-1">Volume d’air disponible : {c18AirL} L</label>
              <input type="range" min="5" max="100" step="5" value={c18AirL} onChange={(e) => setC18AirL(Number(e.target.value))} className="w-full accent-amber-400" />
              <div className="flex justify-center">
                <svg viewBox="0 0 340 120" className="w-full max-w-md h-auto">
                  {/* Bunsen burner */}
                  <rect x="65" y="102" width="54" height="10" rx="3" fill="#64748b" />
                  <rect x="85" y="66" width="14" height="36" fill="#94a3b8" />
                  <rect x="82" y="86" width="20" height="8" rx="2" fill={c18Virole === 'ouverte' ? '#10b981' : '#f43f5e'} />
                  {/* Flame */}
                  <path
                    d={c18Virole === 'ouverte' ? 'M 92 14 Q 108 42 92 66 Q 76 42 92 14 Z' : 'M 92 18 Q 114 44 92 66 Q 70 44 92 18 Z'}
                    fill={c18Virole === 'ouverte' ? '#38bdf8' : '#facc15'}
                    fillOpacity="0.85"
                  />
                  {c18Virole === 'fermee' && (
                    <text x="92" y="12" textAnchor="middle" className="text-[10px] font-black fill-slate-300">☁️ Suie C + CO !</text>
                  )}
                  <rect x="145" y="20" width="178" height="84" rx="10" fill="#0f172a" stroke={c18Virole === 'ouverte' ? '#38bdf8' : '#f59e0b'} />
                  <text x="234" y="42" textAnchor="middle" className="text-[10px] font-black fill-white">
                    {c18Virole === 'ouverte' ? 'FLAMME BLEUE (Complète)' : 'FLAMME JAUNE (Incomplète)'}
                  </text>
                  <text x="234" y="64" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300">
                    O₂ dispo : {(c18AirL / 5).toFixed(1)} L (1/5)
                  </text>
                  <text x="234" y="84" textAnchor="middle" className="text-[10px] font-bold fill-rose-300">
                    {c18Virole === 'ouverte' ? 'Produits : CO₂ + H₂O' : 'Danger : Monoxyde CO !'}
                  </text>
                </svg>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Flamme = ${c18Virole === 'ouverte' ? 'BLEUE (Combustion COMPLÈTE ➔ CO₂ + H₂O)' : 'JAUNE FUMANTE (INCOMPLÈTE ➔ Carbone + CO MORTEL !)'} | O₂ contenu dans ${c18AirL} L d’air ≈ ${(c18AirL / 5).toFixed(1)} L`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 19. ÉQUATIONS-BILAN & LAVOISIER */}
        {selectedId === 'phys-equations-bilan' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Molécules CH₄ : {c19CH4Mult}</label>
                <input type="range" min="1" max="4" value={c19CH4Mult} onChange={(e) => setC19CH4Mult(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Masse Carbone : {c19MassC} g</label>
                <input type="range" min="6" max="36" step="6" value={c19MassC} onChange={(e) => setC19MassC(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Masse O₂ : {c19MassO2} g</label>
                <input type="range" min="16" max="96" step="16" value={c19MassO2} onChange={(e) => setC19MassO2(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
            </div>
            <div className="flex justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 360 115" className="w-full max-w-md h-auto">
                <polygon points="165,105 195,105 180,72" fill="#64748b" />
                <line x1="45" y1="68" x2="315" y2="68" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                <rect x="42" y="24" width="115" height="38" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="99" y="40" textAnchor="middle" className="text-[10px] font-black fill-sky-300">RÉACTIFS</text>
                <text x="99" y="54" textAnchor="middle" className="text-[10px] font-mono fill-white">
                  {c19MassC}g + {c19MassO2}g = {c19MassC + c19MassO2}g
                </text>
                <rect x="203" y="24" width="115" height="38" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                <text x="260" y="40" textAnchor="middle" className="text-[10px] font-black fill-emerald-300">PRODUITS</text>
                <text x="260" y="54" textAnchor="middle" className="text-[10px] font-mono fill-white">
                  {c19MassC + c19MassO2}g (Égalité !)
                </text>
                <text x="180" y="16" textAnchor="middle" className="text-[10px] font-black fill-amber-300">
                  Atomes conservés : {c19CH4Mult} C · {4 * c19CH4Mult} H · {4 * c19CH4Mult} O
                </text>
              </svg>
            </div>
            <StandingMathRenderer
              expression={`${c19CH4Mult} CH₄ + ${2 * c19CH4Mult} O₂ ➔ ${c19CH4Mult} CO₂ + ${2 * c19CH4Mult} H₂O | Bilan atomes : C=${c19CH4Mult}, H=${4 * c19CH4Mult}, O=${4 * c19CH4Mult} des 2 côtés | Lavoisier : ${c19MassC} g + ${c19MassO2} g = ${c19MassC + c19MassO2} g de CO₂`}
              showColumnOp={false}
            />
          </div>
        )}

        {/* 20. SOLUTIONS, DILUTION & pH */}
        {selectedId === 'phys-solutions-ph' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 tabular-nums">
              <div>
                <label className="text-[11px] text-amber-300 font-bold block">Masse soluté m : {c20SoluteG} g</label>
                <input type="range" min="5" max="100" step="5" value={c20SoluteG} onChange={(e) => setC20SoluteG(Number(e.target.value))} className="w-full accent-amber-400" />
              </div>
              <div>
                <label className="text-[11px] text-sky-300 font-bold block">Volume V : {c20VolL} L</label>
                <input type="range" min="0.5" max="4" step="0.5" value={c20VolL} onChange={(e) => setC20VolL(Number(e.target.value))} className="w-full accent-sky-400" />
              </div>
              <div>
                <label className="text-[11px] text-emerald-300 font-bold block">Dilution × {c20Dilute}</label>
                <input type="range" min="1" max="5" value={c20Dilute} onChange={(e) => setC20Dilute(Number(e.target.value))} className="w-full accent-emerald-400" />
              </div>
              <div>
                <label className="text-[11px] text-purple-300 font-bold block">pH testé : {c20Ph}</label>
                <input type="range" min="1" max="14" value={c20Ph} onChange={(e) => setC20Ph(Number(e.target.value))} className="w-full accent-purple-400" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <svg viewBox="0 0 220 115" className="w-56 h-auto shrink-0">
                <rect x="45" y="16" width="80" height="86" rx="6" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
                <rect
                  x="47"
                  y={100 - Math.min(72, c20VolL * 18)}
                  width="76"
                  height={Math.min(72, c20VolL * 18)}
                  fill={phColor}
                  fillOpacity="0.4"
                />
                {Array.from({ length: Math.min(18, Math.max(3, Math.round(cmDiluted / 3))) }).map((_, i) => (
                  <circle
                    key={i}
                    cx={58 + (i % 5) * 13}
                    cy={92 - Math.floor(i / 5) * 11}
                    r="2.5"
                    fill="#fbbf24"
                  />
                ))}
                <text x="172" y="45" textAnchor="middle" className="text-xs font-black fill-white">pH = {c20Ph}</text>
                <text x="172" y="65" textAnchor="middle" className="text-[10px] font-mono font-bold fill-amber-300">Cm’ = {cmDiluted} g/L</text>
              </svg>
              <div className="flex-1 w-full p-3.5 rounded-2xl border border-slate-700 flex items-center justify-between text-xs font-black" style={{ backgroundColor: `${phColor}22`, borderColor: phColor }}>
                <span className="text-white">Papier pH = {c20Ph}</span>
                <span className="text-white">
                  {c20Ph < 7 ? 'Solution ACIDE (pH < 7)' : c20Ph === 7 ? 'Solution NEUTRE (pH = 7)' : 'Solution BASIQUE (pH > 7)'}
                </span>
              </div>
            </div>
            <StandingMathRenderer
              expression={`Cm = m ÷ V = ${c20SoluteG} ÷ ${c20VolL} = ${cm} g/L | Après dilution × ${c20Dilute} : Cm’ = ${cm} ÷ ${c20Dilute} = ${cmDiluted} g/L`}
              showColumnOp={false}
            />
          </div>
        )}
      </div>

      {/* Fiche mémo du chapitre actif */}
      {showChapterMemo && currentChapter?.memoSheet && (
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
