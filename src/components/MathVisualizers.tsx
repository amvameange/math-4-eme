import React, { useState } from 'react';
import { Compass, FileText, Sparkles } from 'lucide-react';
import { MATH_TC_CHAPTERS, MATH_TC_DOMAINS } from '../data/mathTcCurriculum';
import { DomainId } from '../types/math';
import { StandingMathRenderer } from './StandingMathRenderer';
import { FormattedMathText } from './FormattedMathText';
import { DemonstrationMethodFigure } from './illustrations/PedagogicalFigures';
import { ChapterThreeExperiencesPanel } from './ChapterThreeExperiencesPanel';
import { MATH_TC_EXPERIENCE_META } from './MathTcExperiences';
import { scrollToSectionById } from '../utils/uiFeedback';

const MATH_TC_CHAPTER_META: Record<string, { emoji: string; shortTitle: string }> = {
  'mathTc-arithmetique': { emoji: '🔢', shortTitle: 'Arithmétique, Bézout & Gauss' },
  'mathTc-complexes-algebre': { emoji: 'ℂ', shortTitle: 'Complexes : Algèbre & Moivre' },
  'mathTc-complexes-geometrie': { emoji: '📐', shortTitle: 'Complexes & Similitudes' },
  'mathTc-barycentre-matrices': { emoji: '⚖️', shortTitle: 'Barycentre, u⃗∧v⃗ & Gauss' },
  'mathTc-limites-continuite': { emoji: '📈', shortTitle: 'Limites, TVI & Bijection' },
  'mathTc-derivation-primitives': { emoji: '📉', shortTitle: 'Dérivation, IAF & Primitives' },
  'mathTc-ln-exp-equadiff': { emoji: '🌿', shortTitle: 'ln, exp & Équations Diff.' },
  'mathTc-suites-recurrence': { emoji: '🔁', shortTitle: 'Suites, Récurrence & Adj.' },
  'mathTc-calcul-integral': { emoji: '∫', shortTitle: 'Intégrales, IPP & Volumes' },
  'mathTc-denombrement-probas': { emoji: '🎲', shortTitle: 'Dénombrement & Probas Cond.' },
  'mathTc-lois-probas-stats': { emoji: '📊', shortTitle: 'Binomiale & Stats 2D' },
  'mathTc-geometrie-espace': { emoji: '🧊', shortTitle: 'Géométrie 3D & Sphères' },
  'mathTc-isometries-similitudes': { emoji: '🔄', shortTitle: 'Isométries & Similitudes' },
  'mathTc-coniques': { emoji: '🪐', shortTitle: 'Coniques : Parabole/Ellipse' },
};

export const MathVisualizers: React.FC = () => {
  const activeChapters = MATH_TC_CHAPTERS;
  const activeDomains = MATH_TC_DOMAINS;

  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(activeChapters[0].id);
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  const visibleChapters = activeChapters.filter(
    (ch) => selectedDomain === 'all' || ch.domainId === selectedDomain
  );
  const currentChapter = activeChapters.find((c) => c.id === selectedId) || activeChapters[0];
  const currentMeta = MATH_TC_CHAPTER_META[currentChapter.id] || {
    emoji: '📐',
    shortTitle: currentChapter.title,
  };
  const currentExpInfo = MATH_TC_EXPERIENCE_META[currentChapter.id];

  const handleDomainSelect = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const list =
      domId === 'all' ? activeChapters : activeChapters.filter((c) => c.domainId === domId);
    if (list.length > 0 && !list.some((c) => c.id === selectedId)) {
      setSelectedId(list[0].id);
    }
    scrollToSectionById('labo-stage', 50);
  };

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* Header + Grille des 14 chapitres Terminale C */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Mathématiques Terminale C · {activeChapters.length} Chapitres × 10 Expériences ({activeChapters.length * 10} schémas interactifs)
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Laboratoire Visuel de Mathématiques ({activeChapters.length} Chapitres)
              </h2>
              <p className="text-xs text-slate-300">
                Explore chacun des {activeChapters.length} chapitres avec 10 expériences distinctes, figures géométriques interactives et formules debout.
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
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {dom.shortTitle}
            </button>
          ))}
        </div>

        {/* Grille des chapitres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 max-h-60 overflow-y-auto pr-1">
          {visibleChapters.map((chap) => {
            const meta = MATH_TC_CHAPTER_META[chap.id] || {
              emoji: '📐',
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
                <div className="text-[10px] text-amber-300/80 mt-0.5 truncate">
                  10 expériences SVG
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* En-tête du chapitre sélectionné */}
      <div id="labo-stage" className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentMeta.emoji}</span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {currentChapter.badge} · 10 Expériences &amp; Schémas Interactifs
              </div>
              <h3 className="text-sm sm:text-base font-black text-white"><FormattedMathText text={currentChapter.title} /></h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {currentExpInfo ? (
                <>
                  <FormattedMathText text={currentExpInfo.shortTitles.slice(0, 3).join(' · ')} />… (+{Math.max(0, currentExpInfo.shortTitles.length - 3)})
                </>
              ) : (
                '10 expériences'
              )}
            </span>
          </span>
        </div>

        <DemonstrationMethodFigure
          chapterId={currentChapter.id}
          illustrationKey={currentChapter.illustrationKey}
          subject="maths"
          compact
        />
      </div>

      {/* 3 Expériences distinctes du chapitre actif */}
      <ChapterThreeExperiencesPanel
        chapterId={currentChapter.id}
        subject="maths"
        mode="labo"
      />

      {/* Fiche mémo du chapitre actif */}
      {showChapterMemo && currentChapter.memoSheet && (
        <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-4 sm:p-5 shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                Fiche Mémo Rapide : <FormattedMathText text={currentChapter.title} />
              </h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">Formules Debout</span>
          </div>
          <p className="text-xs text-slate-300 font-medium">💡 <FormattedMathText text={currentChapter.memoSheet.slogan} /></p>
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
