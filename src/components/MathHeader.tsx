import React from 'react';
import {
  BookOpen,
  Sparkles,
  Compass,
  FileText,
  GraduationCap,
  FolderOpen,
  Award,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { SubjectId } from '../types/math';

export type MainViewTab = 'cours' | 'bepc' | 'generateur' | 'simulateurs' | 'custom';

interface MathHeaderProps {
  currentTab: MainViewTab;
  onChangeTab: (tab: MainViewTab) => void;
  onOpenMemo: () => void;
  activeSubject: SubjectId;
  customExercisesCount?: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const MathHeader: React.FC<MathHeaderProps> = ({
  currentTab,
  onChangeTab,
  onOpenMemo,
  activeSubject,
  customExercisesCount = 0,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Zone 1 : Brand Wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-amber-400 to-sky-500 p-0.5 shadow-md">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5 stroke-[2.25]" />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-sm sm:text-base text-white tracking-tight whitespace-nowrap">
              Sciences &amp; Maths Terminale C
            </div>
            <div className="text-[11px] text-slate-400 whitespace-nowrap">
              {activeSubject === 'physique'
                ? 'Physique-Chimie Tle C · BAC Gabon'
                : 'Mathématiques Tle C · BAC Gabon'}
            </div>
          </div>
        </div>

        {/* Zone 2 : Navigation Tabs */}
        <nav className="flex items-center gap-1 p-1 bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto scrollbar-none">
          <button
            onClick={() => onChangeTab('cours')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'cours'
                ? 'bg-sky-500 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cours &amp; Exercices</span>
          </button>

          <button
            onClick={() => onChangeTab('bepc')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'bepc'
                ? 'bg-rose-400 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Type BAC &amp; Examen</span>
          </button>

          <button
            onClick={() => onChangeTab('generateur')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'generateur'
                ? 'bg-amber-400 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exercices Infinis</span>
          </button>

          <button
            onClick={() => onChangeTab('simulateurs')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
              currentTab === 'simulateurs'
                ? 'bg-emerald-400 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Labo Visuel</span>
          </button>

          <button
            onClick={() => onChangeTab('custom')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
              currentTab === 'custom'
                ? 'bg-indigo-400 text-slate-950 font-bold shadow'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>
              Mes Exercices{customExercisesCount > 0 ? ` (${customExercisesCount})` : ''}
            </span>
          </button>
        </nav>

        {/* Zone 3 : Sound Toggle + Primary CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            data-sound="custom"
            onClick={onToggleSound}
            title={soundEnabled ? 'Désactiver le son doux au clic' : 'Activer le son doux au clic'}
            aria-label={soundEnabled ? 'Couper le son' : 'Activer le son'}
            className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold border transition cursor-pointer whitespace-nowrap ${
              soundEnabled
                ? 'bg-slate-900 border-emerald-500/40 text-emerald-300 hover:bg-slate-800'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundEnabled ? 'Son doux' : 'Muet'}</span>
          </button>

          <button
            onClick={onOpenMemo}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition cursor-pointer shadow active:scale-95 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Fiches Mémos</span>
          </button>
        </div>
      </div>
    </header>
  );
};
