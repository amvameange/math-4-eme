import React from 'react';
import {
  BookOpen,
  Sparkles,
  Compass,
  FileText,
  GraduationCap,
} from 'lucide-react';
import { SubjectId } from '../types/math';

export type MainViewTab = 'cours' | 'generateur' | 'simulateurs';

interface MathHeaderProps {
  currentTab: MainViewTab;
  onChangeTab: (tab: MainViewTab) => void;
  onOpenMemo: () => void;
  activeSubject: SubjectId;
}

export const MathHeader: React.FC<MathHeaderProps> = ({
  currentTab,
  onChangeTab,
  onOpenMemo,
  activeSubject,
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
              Sciences & Maths 4ème
            </div>
            <div className="text-[11px] text-slate-400 whitespace-nowrap">
              {activeSubject === 'physique' ? 'Physique-Chimie Gabon' : 'Maths CIAM Gabon'}
            </div>
          </div>
        </div>

        {/* Zone 2 : Navigation Tabs (3 concise links) */}
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
            <span>Cours & Exercices</span>
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
            <span>Générateur Infini</span>
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
        </nav>

        {/* Zone 3 : Primary CTA */}
        <button
          onClick={onOpenMemo}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition cursor-pointer shadow active:scale-95 whitespace-nowrap shrink-0"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Fiches Mémos</span>
        </button>
      </div>
    </header>
  );
};
