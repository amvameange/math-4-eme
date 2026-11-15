import React, { useState } from 'react';
import { Compass, FileText, Sparkles } from 'lucide-react';
import { MATH_3EME_CHAPTERS, MATH_3EME_DOMAINS } from '../data/math3emeCurriculum';
import { DomainId } from '../types/math';
import { StandingMathRenderer } from './StandingMathRenderer';
import { DemonstrationMethodFigure } from './illustrations/PedagogicalFigures';
import { ChapterThreeExperiencesPanel } from './ChapterThreeExperiencesPanel';
import { MATH_3EME_EXPERIENCE_META } from './Math3emeExperiences';

const MATH_3EME_CHAPTER_META: Record<string, { emoji: string; shortTitle: string }> = {
  'math3-racines-carrees': { emoji: '√', shortTitle: 'Racines & Conjugué' },
  'math3-calcul-litteral-equations': { emoji: '📦', shortTitle: 'Identités & Éq. Produits' },
  'math3-inequations-intervalles': { emoji: '↕️', shortTitle: 'Intervalles & Inéq.' },
  'math3-systemes-equations': { emoji: '🧩', shortTitle: 'Systèmes (x ; y)' },
  'math3-applications-affines': { emoji: '📈', shortTitle: 'Fonctions Affines' },
  'math3-statistiques-3eme': { emoji: '📊', shortTitle: 'Stats en Classes & ECC' },
  'math3-probabilites-3eme': { emoji: '🎲', shortTitle: 'Probas 2 Épreuves' },
  'math3-thales-3eme': { emoji: '🦋', shortTitle: 'Thalès Papillon' },
  'math3-trigonometrie-3eme': { emoji: '🧭', shortTitle: 'Trigo cos²+sin²=1' },
  'math3-vecteurs-translations': { emoji: '➡️', shortTitle: 'Vecteurs & Chasles' },
  'math3-angles-polygones': { emoji: '⭕', shortTitle: 'Angles & Polygones' },
  'math3-reperage-droites': { emoji: '📍', shortTitle: 'Vecteurs & Droites' },
  'math3-pyramides-cones': { emoji: '🍦', shortTitle: 'Pyramides & Cônes' },
  'math3-sections-agrandissement': { emoji: '🔺', shortTitle: 'Sections k³ & Tronc' },
};

export const MathVisualizers: React.FC = () => {
  const activeChapters = MATH_3EME_CHAPTERS;
  const activeDomains = MATH_3EME_DOMAINS;

  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(activeChapters[0].id);
  const [showChapterMemo, setShowChapterMemo] = useState<boolean>(true);

  const visibleChapters = activeChapters.filter(
    (ch) => selectedDomain === 'all' || ch.domainId === selectedDomain
  );
  const currentChapter = activeChapters.find((c) => c.id === selectedId) || activeChapters[0];
  const currentMeta = MATH_3EME_CHAPTER_META[currentChapter.id] || {
    emoji: '📐',
    shortTitle: currentChapter.title,
  };
  const currentExpInfo = MATH_3EME_EXPERIENCE_META[currentChapter.id];

  const handleDomainSelect = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const list =
      domId === 'all' ? activeChapters : activeChapters.filter((c) => c.domainId === domId);
    if (list.length > 0 && !list.some((c) => c.id === selectedId)) {
      setSelectedId(list[0].id);
    }
  };

  return (
    <div className="space-y-5 pb-20 animate-fade-in">
      {/* Header + Grille des 14 chapitres 3ème BEPC */}
      <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-300">
                Mathématiques 3ème BEPC CIAM Gabon · {activeChapters.length} Chapitres × 3 Expériences (42 schémas interactifs)
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Laboratoire Visuel de Mathématiques ({activeChapters.length} Chapitres)
              </h2>
              <p className="text-xs text-slate-300">
                Explore chacun des {activeChapters.length} chapitres avec 3 expériences distinctes, figures géométriques interactives et formules debout.
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
            const meta = MATH_3EME_CHAPTER_META[chap.id] || {
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
                <div className="text-[10px] text-amber-300/80 mt-0.5 truncate">
                  3 expériences SVG
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* En-tête du chapitre sélectionné */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{currentMeta.emoji}</span>
            <div>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {currentChapter.badge} · 3 Expériences &amp; Schémas Interactifs
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">{currentChapter.title}</h3>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {currentExpInfo ? currentExpInfo.shortTitles.join(' · ') : '3 expériences'}
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
