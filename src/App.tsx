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
import { MATH_TC_CHAPTERS, MATH_TC_DOMAINS } from './data/mathTcCurriculum';
import { PHYSICS_TC_CHAPTERS, PHYSICS_TC_DOMAINS } from './data/physicsTcCurriculum';
import { DomainId, SubjectId } from './types/math';
import { useLearningProgress } from './hooks/useLearningProgress';
import { useCustomExercises } from './hooks/useCustomExercises';
import {
  isUiSoundEnabled,
  playUiClickSound,
  scrollToSectionById,
  setUiSoundEnabled,
} from './utils/uiFeedback';

import heroPhysicsImg from './assets/images/hero_physique_tlec_gabon_1794934644736.jpg';
import heroMathsImg from './assets/images/hero_maths_tlec_gabon_1794934645449.jpg';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectId>('physique');
  const [currentTab, setCurrentTab] = useState<MainViewTab>('cours');
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => isUiSoundEnabled());

  const [selectedChapterIds, setSelectedChapterIds] = useState<Record<SubjectId, string>>({
    physique: PHYSICS_TC_CHAPTERS[0].id,
    maths: MATH_TC_CHAPTERS[0].id,
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
    activeSubject === 'physique' ? PHYSICS_TC_CHAPTERS : MATH_TC_CHAPTERS;
  const activeDomains =
    activeSubject === 'physique' ? PHYSICS_TC_DOMAINS : MATH_TC_DOMAINS;

  const physCount = PHYSICS_TC_CHAPTERS.length;
  const mathCount = MATH_TC_CHAPTERS.length;

  const selectedChapterId = selectedChapterIds[activeSubject] || activeChapters[0].id;
  const selectedChapterIndex = activeChapters.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = activeChapters[selectedChapterIndex] || activeChapters[0];

  const activeTotalExercises = activeChapters.length * 100 + 20 + 888;
  const bacChapterPrefix = activeSubject === 'physique' ? 'bac-phys-' : 'bac-math-';
  const bacExamPrefix = activeSubject === 'physique' ? 'bac-exam-phys-' : 'bac-exam-math-';
  const solvedInSubject =
    activeChapters.reduce((acc, ch) => {
      const prefixApp = `${ch.id}-app-`;
      const prefixCours = `${ch.id}-c-lvl`;
      const prefixBac = `${bacChapterPrefix}${ch.id}-`;
      const legacyIds = new Set(ch.exercises.map((e) => e.id));
      const solvedInChap = Math.min(
        100,
        Object.entries(checkedState).filter(
          ([id, rec]) =>
            rec?.correct &&
            (id.startsWith(prefixApp) ||
              id.startsWith(prefixCours) ||
              id.startsWith(prefixBac) ||
              legacyIds.has(id))
        ).length
      );
      return acc + solvedInChap;
    }, 0) +
    Object.entries(checkedState).filter(
      ([id, rec]) =>
        rec?.correct &&
        (id.startsWith(bacExamPrefix) || id.startsWith(`archive-${activeSubject}-`))
    ).length;

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    setUiSoundEnabled(next);
    if (next) {
      playUiClickSound('step');
    }
  };

  const handleRootClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const interactive = target.closest('button, [role="button"], select');
    if (!interactive) return;
    if ((interactive as HTMLButtonElement).disabled) return;
    if (interactive.getAttribute('data-sound') === 'custom') return;
    playUiClickSound('tap');
  };

  const handleSwitchSubject = (subj: SubjectId) => {
    setActiveSubject(subj);
    setSelectedDomain('all');
    setChapterSubTab('cours');
    scrollToSectionById('active-workspace', 60);
  };

  const handleSelectChapter = (
    id: string,
    targetTab: 'cours' | 'memo' | 'exercices' = 'cours'
  ) => {
    setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: id }));
    setChapterSubTab(targetTab);
    scrollToSectionById(targetTab === 'exercices' ? 'lesson-exercise-section' : 'lesson-workspace', 65);
  };

  const handleNextChapter = () => {
    if (selectedChapterIndex < activeChapters.length - 1) {
      const nextId = activeChapters[selectedChapterIndex + 1].id;
      setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: nextId }));
      setChapterSubTab('cours');
      scrollToSectionById('lesson-workspace', 60);
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapterIndex > 0) {
      const prevId = activeChapters[selectedChapterIndex - 1].id;
      setSelectedChapterIds((prev) => ({ ...prev, [activeSubject]: prevId }));
      setChapterSubTab('cours');
      scrollToSectionById('lesson-workspace', 60);
    }
  };

  const handleOpenCustomCreator = (chapterId?: string) => {
    setCustomStudioChapterId(chapterId);
    setCustomStudioMode('ajouter');
    setCurrentTab('custom');
    scrollToSectionById('active-workspace', 60);
  };

  const handleOpenCustomLibrary = () => {
    setCustomStudioMode('consulter');
    setCurrentTab('custom');
    scrollToSectionById('active-workspace', 60);
  };

  const currentHeroImg = activeSubject === 'physique' ? heroPhysicsImg : heroMathsImg;

  return (
    <div
      onClickCapture={handleRootClickCapture}
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased"
    >
      <MathHeader
        currentTab={currentTab}
        onChangeTab={(tab) => {
          if (tab === 'custom') {
            setCustomStudioMode('consulter');
          }
          setCurrentTab(tab);
          scrollToSectionById('active-workspace', 65);
        }}
        onOpenMemo={() => setIsMemoOpen(true)}
        activeSubject={activeSubject}
        customExercisesCount={customExercises.length}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 space-y-6">
        {/* Workspace 3ème BEPC Subject Switcher + Progress Telemetry Bar */}
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-7 space-y-3">
              {/* Subject Switcher (Terminale C BAC Gabon) */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-xs font-extrabold text-emerald-300">
                  <GraduationCap className="w-4 h-4" />
                  <span>Terminale Série C · BAC Gabon</span>
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
                    <span>Mathématiques ({mathCount} ch.)</span>
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeSubject === 'physique'
                    ? 'Programme Officiel de Physique-Chimie Terminale C · Gabon'
                    : 'Programme Officiel de Mathématiques Terminale C · Gabon'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {activeSubject === 'physique'
                    ? `${activeChapters.length} chapitres complets · Dessins illustratifs, 10 expériences SVG interactives par chapitre, 10 application + 80 cours + 10 Type BAC C / ch., 20 Problèmes Examen, 222 Épreuves 1990–2026 (6 pays × 37 ans) & Exercices Infinis.`
                    : `${activeChapters.length} chapitres complets · Dessins illustratifs, 10 expériences SVG interactives par chapitre, 10 application + 80 cours + 10 Type BAC C / ch., 20 Problèmes Examen, 222 Épreuves 1990–2026 (6 pays × 37 ans) & Exercices Infinis.`}
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
                    scrollToSectionById('active-workspace', 65);
                  }}
                  className="text-rose-300 hover:text-rose-200 font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Type BAC C (10/ch.)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBepcMode('examen');
                    setCurrentTab('bepc');
                    scrollToSectionById('active-workspace', 65);
                  }}
                  className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <ScrollText className="w-3.5 h-3.5" />
                  <span>Examen BAC C (20 Pb.)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBepcMode('epreuves');
                    setCurrentTab('bepc');
                    scrollToSectionById('active-workspace', 65);
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
                        ? 'Laboratoire de Physique-Chimie Terminale C BAC Gabon'
                        : 'Atelier de Mathématiques Terminale C BAC Gabon'
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
                        ? 'Physique-Chimie Terminale C · Gabon'
                        : 'Mathématiques Terminale C · Gabon'}
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-3.5 py-2.5 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-amber-300">
                    🇬🇦 {activeChapters.length} Chapitres × 10 Expériences ({activeChapters.length * 10} schémas)
                  </span>
                  <span className="text-emerald-300">10 questions · Très difficile</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="active-workspace" className="space-y-6">
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
        </div>
      </main>

      <MemoSheetModal
        isOpen={isMemoOpen}
        onClose={() => setIsMemoOpen(false)}
        initialSubject={activeSubject}
      />

      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500 px-4">
        Physique-Chimie &amp; Mathématiques Terminale Série C · BAC Gabon · 28 Chapitres · 280 Sujets Type BAC C + 40 Problèmes + 444 Épreuves complètes 1990–2026 (6 pays × 37 ans) · 280 Expériences SVG
      </footer>
    </div>
  );
}
