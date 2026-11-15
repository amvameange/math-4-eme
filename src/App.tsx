import React, { useState } from 'react';
import {
  Atom,
  Calculator,
  Trophy,
  RotateCcw,
  GraduationCap,
  FolderOpen,
  PlusCircle,
  Award,
  Calendar,
  ScrollText,
} from 'lucide-react';
import { MathHeader, MainViewTab } from './components/MathHeader';
import { ChapterListSelector } from './components/ChapterListSelector';
import { LessonChapterView } from './components/LessonChapterView';
import { InfiniteExerciseGenerator } from './components/InfiniteExerciseGenerator';
import { MathVisualizers } from './components/MathVisualizers';
import { PhysicsVisualizers } from './components/PhysicsVisualizers';
import { MemoSheetModal } from './components/MemoSheetModal';
import { CustomExercisesStudio } from './components/CustomExercisesStudio';
import { BepcStudioView, BepcStudioMode } from './components/BepcStudioView';
import { MATH_3EME_CHAPTERS, MATH_3EME_DOMAINS } from './data/math3emeCurriculum';
import { PHYSICS_3EME_CHAPTERS, PHYSICS_3EME_DOMAINS } from './data/physics3emeCurriculum';
import { DomainId, SubjectId } from './types/math';
import { useLearningProgress } from './hooks/useLearningProgress';
import { useCustomExercises } from './hooks/useCustomExercises';

import heroPhysicsImg from './assets/images/hero_physique_gabon_1794682660874.jpg';
import heroMathsImg from './assets/images/hero_maths_gabon_1794682660645.jpg';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('physique');
  const [currentTab, setCurrentTab] = useState<MainViewTab>('cours');
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');

  const [selectedChapterIds, setSelectedChapterIds] = useState<Record<SubjectId, string>>({
    physique: PHYSICS_3EME_CHAPTERS[0].id,
    maths: MATH_3EME_CHAPTERS[0].id,
  });

  const [chapterSubTab, setChapterSubTab] = useState<'cours' | 'memo' | 'exercices'>('cours');
  const [isMemoOpen, setIsMemoOpen] = useState<boolean>(false);
  const [bepcMode, setBepcMode] = useState<BepcStudioMode>('chapitre');
  const [customStudioMode, setCustomStudioMode] = useState<'ajouter' | 'consulter'>('consulter');
  const [customStudioChapterId, setCustomStudioChapterId] = useState<string | undefined>(
    undefined
  );
  const [heroImgFailed, setHeroImgFailed] = useState<Record<SubjectId, boolean>>({
    physique: false,
    maths: false,
  });

  const { checkedState, totalXp, recordExerciseAttempt, resetProgress } = useLearningProgress();
  const {
    customExercises,
    addCustomExercise,
    updateCustomExercise,
    deleteCustomExercise,
    importCustomExercises,
  } = useCustomExercises();

  const activeChapters =
    activeSubject === 'physique' ? PHYSICS_3EME_CHAPTERS : MATH_3EME_CHAPTERS;
  const activeDomains =
    activeSubject === 'physique' ? PHYSICS_3EME_DOMAINS : MATH_3EME_DOMAINS;

  const physCount = PHYSICS_3EME_CHAPTERS.length;
  const mathCount = MATH_3EME_CHAPTERS.length;

  const selectedChapterId = selectedChapterIds[activeSubject] || activeChapters[0].id;
  const selectedChapterIndex = activeChapters.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = activeChapters[selectedChapterIndex] || activeChapters[0];

  const activeTotalExercises = activeChapters.length * 100 + 20 + 888;
  const solvedInSubject =
    activeChapters.reduce((acc, ch) => {
      const prefixApp = `${ch.id}-app-`;
      const prefixCours = `${ch.id}-c-lvl`;
      const prefixBepc = `${ch.id}-bepc-`;
      const legacyIds = new Set(ch.exercises.map((e) => e.id));
      const solvedInChap = Math.min(
        100,
        Object.entries(checkedState).filter(
          ([id, rec]) =>
            rec?.correct &&
            (id.startsWith(prefixApp) ||
              id.startsWith(prefixCours) ||
              id.startsWith(prefixBepc) ||
              legacyIds.has(id))
        ).length
      );
      return acc + solvedInChap;
    }, 0) +
    Object.entries(checkedState).filter(
      ([id, rec]) =>
        rec?.correct &&
        (id.startsWith(`exam-bepc-${activeSubject}-`) ||
          id.startsWith(`archive-${activeSubject}-`))
    ).length;

  const handleSwitchSubject = (subj: SubjectId) => {
    setActiveSubject(subj);
    setSelectedDomain('all');
    setChapterSubTab('cours');
  };

  const handleSelectChapter = (
    id: string,
    targetTab: 'cours' | 'memo' | 'exercices' = 'cours'
  ) => {
    setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: id }));
    setChapterSubTab(targetTab);
  };

  const handleNextChapter = () => {
    if (selectedChapterIndex < activeChapters.length - 1) {
      const nextId = activeChapters[selectedChapterIndex + 1].id;
      setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: nextId }));
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapterIndex > 0) {
      const prevId = activeChapters[selectedChapterIndex - 1].id;
      setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: prevId }));
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCustomCreator = (chapterId?: string) => {
    setCustomStudioChapterId(chapterId);
    setCustomStudioMode('ajouter');
    setCurrentTab('custom');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCustomLibrary = () => {
    setCustomStudioMode('consulter');
    setCurrentTab('custom');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentHeroImg = activeSubject === 'physique' ? heroPhysicsImg : heroMathsImg;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
      <MathHeader
        currentTab={currentTab}
        onChangeTab={(tab) => {
          if (tab === 'custom') {
            setCustomStudioMode('consulter');
          }
          setCurrentTab(tab);
        }}
        onOpenMemo={() => setIsMemoOpen(true)}
        activeSubject={activeSubject}
        customExercisesCount={customExercises.length}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 space-y-6">
        {/* Workspace 3ème BEPC Subject Switcher + Progress Telemetry Bar */}
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-7 space-y-3">
              {/* Subject Switcher (3ème BEPC Gabon uniquement) */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-xs font-extrabold text-emerald-300">
                  <GraduationCap className="w-4 h-4" />
                  <span>Classe de 3ème BEPC Gabon</span>
                </div>

                <div className="inline-flex flex-wrap gap-1 p-1 rounded-2xl bg-slate-950 border border-slate-800">
                  <button
                    onClick={() => handleSwitchSubject('physique')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                      activeSubject === 'physique'
                        ? 'bg-sky-500 text-slate-950 shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <Atom className="w-4 h-4" />
                    <span>Physique-Chimie ({physCount} ch.)</span>
                  </button>

                  <button
                    onClick={() => handleSwitchSubject('maths')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                      activeSubject === 'maths'
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Maths CIAM ({mathCount} ch.)</span>
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeSubject === 'physique'
                    ? 'Programme Officiel de Physique-Chimie 3ème BEPC Gabon'
                    : 'Programme Officiel de Mathématiques 3ème CIAM Gabon'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {activeSubject === 'physique'
                    ? `${activeChapters.length} chapitres complets · 3 expériences SVG interactives par chapitre, 10 application + 80 cours + 10 Type BEPC / ch., 20 Problèmes Examen BEPC, 222 Épreuves complètes 1990–2026 (6 pays × 37 ans) & Exercices Infinis.`
                    : `${activeChapters.length} chapitres CIAM complets · 3 expériences SVG interactives par chapitre, 10 application + 80 cours + 10 Type BEPC / ch., 20 Problèmes Examen BEPC, 222 Épreuves complètes 1990–2026 (6 pays × 37 ans) & Exercices Infinis.`}
                </p>
              </div>

              {/* Progress & Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs tabular-nums">
                <div className="flex items-center gap-1.5 text-amber-300 font-extrabold">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>{totalXp} XP</span>
                </div>
                <span className="text-slate-600">·</span>
                <div className="text-emerald-400 font-bold">
                  {solvedInSubject} / {activeTotalExercises} exercices réussis
                </div>
                <span className="text-slate-600">·</span>
                <button
                  type="button"
                  onClick={() => {
                    setBepcMode('chapitre');
                    setCurrentTab('bepc');
                  }}
                  className="text-rose-300 hover:text-rose-200 font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Type BEPC (10/ch.)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBepcMode('examen');
                    setCurrentTab('bepc');
                  }}
                  className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <ScrollText className="w-3.5 h-3.5" />
                  <span>Examen BEPC (20 Pb.)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBepcMode('epreuves');
                    setCurrentTab('bepc');
                  }}
                  className="text-emerald-300 hover:text-emerald-200 font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Épreuves 1990–2026</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenCustomCreator(currentChapter.id)}
                  className="text-indigo-300 hover:text-indigo-200 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Ajouter un exercice</span>
                </button>
                <button
                  type="button"
                  onClick={handleOpenCustomLibrary}
                  className="text-sky-300 hover:text-sky-200 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Mes Exercices ({customExercises.length})</span>
                </button>
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
                        ? 'Laboratoire de Physique-Chimie 3ème BEPC Gabon'
                        : 'Atelier de Mathématiques CIAM 3ème BEPC Gabon'
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
                        ? 'Physique-Chimie 3ème BEPC Gabon'
                        : 'Mathématiques 3ème CIAM Gabon'}
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-3.5 py-2.5 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-amber-300">
                    🇬🇦 {activeChapters.length} Chapitres × 3 Expériences ({activeChapters.length * 3} schémas)
                  </span>
                  <span className="text-emerald-300">10 app. + 80 cours + 10 BEPC / ch.</span>
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
              customExercises={customExercises}
              onOpenCustomCreator={handleOpenCustomCreator}
              onOpenCustomLibrary={handleOpenCustomLibrary}
            />
          </div>
        )}

        {currentTab === 'bepc' && (
          <BepcStudioView
            subject={activeSubject}
            checkedState={checkedState}
            onRecordAttempt={recordExerciseAttempt}
            initialMode={bepcMode}
            initialChapterId={currentChapter.id}
          />
        )}

        {currentTab === 'generateur' && <InfiniteExerciseGenerator subject={activeSubject} />}

        {currentTab === 'simulateurs' &&
          (activeSubject === 'physique' ? <PhysicsVisualizers /> : <MathVisualizers />)}

        {currentTab === 'custom' && (
          <CustomExercisesStudio
            customExercises={customExercises}
            onAddExercise={addCustomExercise}
            onUpdateExercise={updateCustomExercise}
            onDeleteExercise={deleteCustomExercise}
            onImportExercises={importCustomExercises}
            initialSubject={activeSubject}
            initialChapterId={customStudioChapterId}
            initialSubTab={customStudioMode}
          />
        )}
      </main>

      <MemoSheetModal
        isOpen={isMemoOpen}
        onClose={() => setIsMemoOpen(false)}
        initialSubject={activeSubject}
      />

      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500 px-4">
        Physique-Chimie &amp; Mathématiques CIAM 3ème BEPC Gabon · 27 Chapitres · 270 Sujets BEPC + 40 Problèmes + 444 Épreuves complètes 1990–2026 (6 pays × 37 ans) · 81 Expériences · Franc CFA
      </footer>
    </div>
  );
}
