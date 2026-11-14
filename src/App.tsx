import React, { useState } from 'react';
import { Atom, Calculator, Trophy, RotateCcw } from 'lucide-react';
import { MathHeader, MainViewTab } from './components/MathHeader';
import { ChapterListSelector } from './components/ChapterListSelector';
import { LessonChapterView } from './components/LessonChapterView';
import { InfiniteExerciseGenerator } from './components/InfiniteExerciseGenerator';
import { MathVisualizers } from './components/MathVisualizers';
import { PhysicsVisualizers } from './components/PhysicsVisualizers';
import { MemoSheetModal } from './components/MemoSheetModal';
import { CHAPTERS, DOMAINS, TOTAL_EXERCISES_COUNT } from './data/curriculumData';
import {
  PHYSICS_CHAPTERS,
  PHYSICS_DOMAINS,
  TOTAL_PHYSICS_EXERCISES_COUNT,
} from './data/physicsCurriculum';
import { DomainId, SubjectId } from './types/math';
import { useLearningProgress } from './hooks/useLearningProgress';

import heroPhysicsImg from './assets/images/hero_physique_gabon_1794682660874.jpg';
import heroMathsImg from './assets/images/hero_maths_gabon_1794682660645.jpg';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('physique');
  const [currentTab, setCurrentTab] = useState<MainViewTab>('cours');
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedPhysicsChapterId, setSelectedPhysicsChapterId] = useState<string>(
    PHYSICS_CHAPTERS[0].id
  );
  const [selectedMathChapterId, setSelectedMathChapterId] = useState<string>(CHAPTERS[0].id);
  const [chapterSubTab, setChapterSubTab] = useState<'cours' | 'memo' | 'exercices'>('cours');
  const [isMemoOpen, setIsMemoOpen] = useState<boolean>(false);
  const [heroImgFailed, setHeroImgFailed] = useState<Record<SubjectId, boolean>>({
    physique: false,
    maths: false,
  });

  const { checkedState, totalXp, recordExerciseAttempt, resetProgress } = useLearningProgress();

  const activeChapters = activeSubject === 'physique' ? PHYSICS_CHAPTERS : CHAPTERS;
  const activeDomains = activeSubject === 'physique' ? PHYSICS_DOMAINS : DOMAINS;
  const activeTotalExercises =
    activeSubject === 'physique' ? TOTAL_PHYSICS_EXERCISES_COUNT : TOTAL_EXERCISES_COUNT;

  const selectedChapterId =
    activeSubject === 'physique' ? selectedPhysicsChapterId : selectedMathChapterId;
  const selectedChapterIndex = activeChapters.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = activeChapters[selectedChapterIndex] || activeChapters[0];

  const solvedInSubject = activeChapters.reduce(
    (acc, ch) => acc + ch.exercises.filter((e) => checkedState[e.id]?.correct).length,
    0
  );

  const handleSwitchSubject = (subj: SubjectId) => {
    setActiveSubject(subj);
    setSelectedDomain('all');
    setChapterSubTab('cours');
  };

  const handleSelectChapter = (
    id: string,
    targetTab: 'cours' | 'memo' | 'exercices' = 'cours'
  ) => {
    if (activeSubject === 'physique') {
      setSelectedPhysicsChapterId(id);
    } else {
      setSelectedMathChapterId(id);
    }
    setChapterSubTab(targetTab);
  };

  const handleNextChapter = () => {
    if (selectedChapterIndex < activeChapters.length - 1) {
      const nextId = activeChapters[selectedChapterIndex + 1].id;
      if (activeSubject === 'physique') setSelectedPhysicsChapterId(nextId);
      else setSelectedMathChapterId(nextId);
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapterIndex > 0) {
      const prevId = activeChapters[selectedChapterIndex - 1].id;
      if (activeSubject === 'physique') setSelectedPhysicsChapterId(prevId);
      else setSelectedMathChapterId(prevId);
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentHeroImg = activeSubject === 'physique' ? heroPhysicsImg : heroMathsImg;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
      <MathHeader
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        onOpenMemo={() => setIsMemoOpen(true)}
        activeSubject={activeSubject}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 space-y-6">
        {/* Workspace Subject Switcher + Progress Telemetry Bar */}
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-7 space-y-3.5">
              {/* Subject Segmented Switcher */}
              <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800">
                <button
                  onClick={() => handleSwitchSubject('physique')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
                    activeSubject === 'physique'
                      ? 'bg-sky-500 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  <Atom className="w-4 h-4" />
                  <span>Physique-Chimie 4ème ({PHYSICS_CHAPTERS.length} ch.)</span>
                </button>

                <button
                  onClick={() => handleSwitchSubject('maths')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
                    activeSubject === 'maths'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  <Calculator className="w-4 h-4" />
                  <span>Mathématiques 4ème CIAM ({CHAPTERS.length} ch.)</span>
                </button>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeSubject === 'physique'
                    ? 'Programme Officiel de Physique-Chimie 4ème Gabon'
                    : 'Programme Officiel de Mathématiques 4ème CIAM Gabon'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {activeSubject === 'physique'
                    ? `${PHYSICS_CHAPTERS.length} chapitres séparés (Électricité & SEEG, Optique, Mécanique, Chimie) · Situations du Gabon, tableaux d’unités, expériences, dessins du cours et ${TOTAL_PHYSICS_EXERCISES_COUNT} exercices posés debout.`
                    : `${CHAPTERS.length} chapitres CIAM enrichis (Situations du Gabon, tableaux de notations, activités pratiques, schémas vectoriels améliorés et ${TOTAL_EXERCISES_COUNT} exercices corrigés en Franc CFA).`}
                </p>
              </div>

              {/* Progress Metrics */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs tabular-nums">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>{totalXp} XP gagnés</span>
                </div>
                <span className="text-slate-600">·</span>
                <div className="text-emerald-400 font-bold">
                  {solvedInSubject} / {activeTotalExercises} exercices réussis en{' '}
                  {activeSubject === 'physique' ? 'Physique' : 'Maths'}
                </div>
                {totalXp > 0 && (
                  <button
                    onClick={resetProgress}
                    className="text-[11px] text-slate-400 hover:text-rose-300 flex items-center gap-1 transition cursor-pointer ml-auto"
                    title="Réinitialiser la progression enregistrée"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Réinitialiser</span>
                  </button>
                )}
              </div>
            </div>

            {/* Hero Showcase Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video shadow-inner flex items-center justify-center">
                {!heroImgFailed[activeSubject] ? (
                  <img
                    src={currentHeroImg}
                    alt={
                      activeSubject === 'physique'
                        ? 'Laboratoire de Physique-Chimie 4ème Gabon'
                        : 'Atelier de Mathématiques CIAM 4ème Gabon'
                    }
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setHeroImgFailed((prev) => ({ ...prev, [activeSubject]: true }))
                    }
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-6 text-center space-y-2 bg-gradient-to-br from-sky-950 via-slate-900 to-emerald-950 w-full h-full flex flex-col items-center justify-center">
                    <span className="text-4xl">
                      {activeSubject === 'physique' ? '⚗️' : '📐'}
                    </span>
                    <div className="text-xs font-black text-white">
                      {activeSubject === 'physique'
                        ? 'Physique-Chimie 4ème Gabon'
                        : 'Mathématiques 4ème CIAM Gabon'}
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-3.5 py-2.5 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-amber-300">
                    🇬🇦 {activeSubject === 'physique' ? '20 Chapitres · 20 Labos Visuels' : '27 Chapitres · 27 Labos Visuels'}
                  </span>
                  <span className="text-emerald-300">100% Calculs Debout</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {currentTab === 'cours' && (
          <div className="space-y-6">
            <ChapterListSelector
              subject={activeSubject}
              domains={activeDomains}
              chapters={activeChapters}
              selectedChapterId={selectedChapterId}
              onSelectChapter={handleSelectChapter}
              selectedDomain={selectedDomain}
              onSelectDomain={setSelectedDomain}
              checkedState={checkedState}
            />

            <LessonChapterView
              chapter={currentChapter}
              requestedTab={chapterSubTab}
              onTabChange={setChapterSubTab}
              onNextChapter={
                selectedChapterIndex < activeChapters.length - 1 ? handleNextChapter : undefined
              }
              onPrevChapter={selectedChapterIndex > 0 ? handlePrevChapter : undefined}
              checkedState={checkedState}
              onRecordAttempt={recordExerciseAttempt}
            />
          </div>
        )}

        {currentTab === 'generateur' && (
          <InfiniteExerciseGenerator subject={activeSubject} />
        )}

        {currentTab === 'simulateurs' &&
          (activeSubject === 'physique' ? <PhysicsVisualizers /> : <MathVisualizers />)}
      </main>

      <MemoSheetModal
        isOpen={isMemoOpen}
        onClose={() => setIsMemoOpen(false)}
        initialSubject={activeSubject}
      />

      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        Physique-Chimie (20 ch.) & Mathématiques CIAM (27 ch.) · Programme Officiel 4ème Gabon · Monnaie : Franc CFA
      </footer>
    </div>
  );
}
