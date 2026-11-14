import React, { useState } from 'react';
import { MathHeader, MainViewTab } from './components/MathHeader';
import { ChapterListSelector } from './components/ChapterListSelector';
import { LessonChapterView } from './components/LessonChapterView';
import { InfiniteExerciseGenerator } from './components/InfiniteExerciseGenerator';
import { MathVisualizers } from './components/MathVisualizers';
import { MemoSheetModal } from './components/MemoSheetModal';
import { CHAPTERS, TOTAL_EXERCISES_COUNT } from './data/curriculumData';
import { DomainId } from './types/math';

export default function App() {
  const [currentTab, setCurrentTab] = useState<MainViewTab>('cours');
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(CHAPTERS[0].id);
  const [chapterSubTab, setChapterSubTab] = useState<'cours' | 'memo' | 'exercices'>('cours');
  const [isMemoOpen, setIsMemoOpen] = useState<boolean>(false);

  const selectedChapterIndex = CHAPTERS.findIndex((c) => c.id === selectedChapterId);
  const currentChapter = CHAPTERS[selectedChapterIndex] || CHAPTERS[0];

  const handleSelectChapter = (id: string, targetTab: 'cours' | 'memo' | 'exercices' = 'cours') => {
    setSelectedChapterId(id);
    setChapterSubTab(targetTab);
  };

  const handleNextChapter = () => {
    if (selectedChapterIndex < CHAPTERS.length - 1) {
      setSelectedChapterId(CHAPTERS[selectedChapterIndex + 1].id);
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (selectedChapterIndex > 0) {
      setSelectedChapterId(CHAPTERS[selectedChapterIndex - 1].id);
      setChapterSubTab('cours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
      <MathHeader
        currentTab={currentTab}
        onChangeTab={setCurrentTab}
        onOpenMemo={() => setIsMemoOpen(true)}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 space-y-6">
        {currentTab === 'cours' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-lg sm:text-xl font-extrabold text-white">
                      Programme Officiel de Mathématiques 4ème Gabon
                    </h1>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      Collection CIAM · {CHAPTERS.length} Chapitres
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {CHAPTERS.length} chapitres complets et séparés, leçons illustrées, fiches mémos debout et {TOTAL_EXERCISES_COUNT} exercices corrigés en Franc CFA
                  </p>
                </div>
              </div>

              <ChapterListSelector
                chapters={CHAPTERS}
                selectedChapterId={selectedChapterId}
                onSelectChapter={handleSelectChapter}
                selectedDomain={selectedDomain}
                onSelectDomain={setSelectedDomain}
              />
            </div>

            <LessonChapterView
              chapter={currentChapter}
              requestedTab={chapterSubTab}
              onTabChange={setChapterSubTab}
              onNextChapter={
                selectedChapterIndex < CHAPTERS.length - 1 ? handleNextChapter : undefined
              }
              onPrevChapter={selectedChapterIndex > 0 ? handlePrevChapter : undefined}
            />
          </div>
        )}

        {currentTab === 'generateur' && <InfiniteExerciseGenerator />}

        {currentTab === 'simulateurs' && <MathVisualizers />}
      </main>

      <MemoSheetModal isOpen={isMemoOpen} onClose={() => setIsMemoOpen(false)} />

      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        Maths 4ème Gabon · {CHAPTERS.length} chapitres complets conformes au programme officiel CIAM · Monnaie : Franc CFA
      </footer>
    </div>
  );
}
