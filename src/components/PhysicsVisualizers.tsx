import React, { useState } from 'react';
import { Atom, FileText, Sparkles } from 'lucide-react';
import { PHYSICS_TC_CHAPTERS, PHYSICS_TC_DOMAINS } from '../data/physicsTcCurriculum';
import { DomainId } from '../types/math';
import { StandingMathRenderer } from './StandingMathRenderer';
import { DemonstrationMethodFigure } from './illustrations/PedagogicalFigures';
import { ChapterThreeExperiencesPanel } from './ChapterThreeExperiencesPanel';
import { PHYSICS_TC_EXPERIENCE_META } from './PhysicsTcExperiences';
import { scrollToSectionById } from '../utils/uiFeedback';

const PHYSICS_TC_CHAPTER_META: Record<string, { emoji: string; shortTitle: string }> = {
  'physTc-cinematique': { emoji: '🚀', shortTitle: 'Cinématique & Frenet' },
  'physTc-dynamique': { emoji: '⚡', shortTitle: 'Newton & Lorentz qv⃗∧B⃗' },
  'physTc-gravitation': { emoji: '🛰️', shortTitle: 'Kepler & Satellites' },
  'physTc-oscillations-energie': { emoji: '🌀', shortTitle: 'Oscillateurs & Énergie' },
  'physTc-dipoles-rc-rl': { emoji: '🔋', shortTitle: 'Dipôles RC, RL & LC' },
  'physTc-oscillations-rlc': { emoji: '🎛️', shortTitle: 'Résonance RLC & Fresnel' },
  'physTc-ondes-mecaniques': { emoji: '🌊', shortTitle: 'Ondes & Diffraction' },
  'physTc-interferences-lumiere': { emoji: '🔦', shortTitle: 'Young & Photoélectrique' },
  'physTc-noyau-radioactivite': { emoji: '☢️', shortTitle: 'Radioactivité & Décroiss.' },
  'physTc-reactions-nucleaires': { emoji: '⚛️', shortTitle: 'Fission, Fusion & Oklo' },
  'physTc-cinetique-chimique': { emoji: '⏱️', shortTitle: 'Cinétique & t₁/₂' },
  'physTc-acides-bases-ph': { emoji: '⚗️', shortTitle: 'pH, pK_a & Titrage' },
  'physTc-alcools-carbonyles': { emoji: '🧪', shortTitle: 'Alcools & Carbonylés' },
  'physTc-esterification-saponification': { emoji: '🧼', shortTitle: 'Esters & Saponification' },
};

export const PhysicsVisualizers: React.FC = () => {
  const activeChapters = PHYSICS_TC_CHAPTERS;
  const activeDomains = PHYSICS_TC_DOMAINS;

  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(activeChapters[0].id);
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  const visibleChapters = activeChapters.filter(
    (ch) => selectedDomain === 'all' || ch.domainId === selectedDomain
  );
  const currentChapter =
    activeChapters.find((c) => c.id === selectedId) || activeChapters[0];
  const currentMeta = PHYSICS_TC_CHAPTER_META[currentChapter.id] || {
    emoji: '⚗️',
    shortTitle: currentChapter.title,
  };
  const currentExpInfo = PHYSICS_TC_EXPERIENCE_META[currentChapter.id];

  const handleDomainSelect = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const list =
      domId === 'all'
        ? activeChapters
        : activeChapters.filter((c) => c.domainId === domId);
    if (list.length > 0 && !list.some((c) => c.id === selectedId)) {
      setSelectedId(list[0].id);
    }
    scrollToSectionById('labo-stage', 50);
  };

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* Header + Sélecteur des 14 chapitres de Terminale C BAC */}
      <div className="rounded-3xl bg-slate-900 border border-sky-500/35 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Physique-Chimie Terminale C · {activeChapters.length} Chapitres × 10 Expériences ({activeChapters.length * 10} schémas interactifs)
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Labo Visuel &amp; Expériences Interactives ({activeChapters.length} Chapitres)
              </h2>
              <p className="text-xs text-slate-300">
                Chaque chapitre propose 10 expériences différentes avec schémas illustratifs interactifs et formules debout.
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
            Tous ({activeChapters.length})
          </button>
          {activeDomains.map((dom) => (
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

        {/* Grille complète des chapitres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
          {visibleChapters.map((chap) => {
            const meta = PHYSICS_TC_CHAPTER_META[chap.id] || {
              emoji: '⚗️',
              shortTitle: chap.title,
            };
            const active = selectedId === chap.id;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => {
                  setSelectedId(chap.id);
                  scrollToSectionById('labo-stage', 50);
                }}
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
                <div className="text-[10px] text-sky-300/80 mt-0.5 truncate">
                  10 expériences SVG
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panneau du chapitre actif */}
      <div id="labo-stage" className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentMeta.emoji}</span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {currentChapter.badge} · 10 Expériences &amp; Schémas Interactifs
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">{currentChapter.title}</h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-sky-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {currentExpInfo ? `${currentExpInfo.shortTitles.slice(0, 3).join(' · ')}… (+${Math.max(0, currentExpInfo.shortTitles.length - 3)})` : '10 expériences'}
            </span>
          </span>
        </div>

        <DemonstrationMethodFigure
          chapterId={currentChapter.id}
          illustrationKey={currentChapter.illustrationKey}
          subject="physique"
          compact
        />
      </div>

      {/* 3 Expériences distinctes du chapitre actif */}
      <ChapterThreeExperiencesPanel
        chapterId={currentChapter.id}
        subject="physique"
        mode="labo"
      />

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
