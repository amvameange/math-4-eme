import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Compass,
  FileText,
  GraduationCap,
  FolderOpen,
  Award,
  Volume2,
  Volume1,
  VolumeX,
  SlidersHorizontal,
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
  soundVolume: number;
  onToggleSound: () => void;
  onChangeSoundVolume: (volume: number) => void;
}

export const MathHeader: React.FC<MathHeaderProps> = ({
  currentTab,
  onChangeTab,
  onOpenMemo,
  activeSubject,
  customExercisesCount = 0,
  soundEnabled,
  soundVolume,
  onToggleSound,
  onChangeSoundVolume,
}) => {
  const [volumeOpen, setVolumeOpen] = useState(false);
  const volumeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!volumeOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (volumeMenuRef.current && !volumeMenuRef.current.contains(e.target as Node)) {
        setVolumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [volumeOpen]);

  const effectivePercent = soundEnabled ? Math.round(soundVolume * 100) : 0;
  const SoundIcon =
    !soundEnabled || effectivePercent === 0
      ? VolumeX
      : effectivePercent < 45
      ? Volume1
      : Volume2;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
        {/* Zone 1 : Brand Wordmark */}
        <div className="flex items-center gap-2.5 shrink-0 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-amber-400 to-sky-500 p-0.5 shadow-md shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5 stroke-[2.25]" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-sm sm:text-base text-white tracking-tight truncate">
              Sciences &amp; Maths Terminale C
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {activeSubject === 'physique'
                ? 'Physique-Chimie Tle C · BAC Gabon'
                : 'Mathématiques Tle C · BAC Gabon'}
            </div>
          </div>
        </div>

        {/* Zone 2 : Navigation Tabs */}
        <nav className="order-3 lg:order-2 w-full lg:w-auto flex items-center gap-1 p-1 bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto scrollbar-none">
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

        {/* Zone 3 : Sound Volume Control + Primary CTA */}
        <div className="order-2 lg:order-3 flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto lg:ml-0">
          <div className="relative" ref={volumeMenuRef}>
            <button
              type="button"
              data-sound="custom"
              onClick={() => setVolumeOpen((prev) => !prev)}
              title="Régler le volume sonore de l’application"
              aria-label="Régler le volume sonore de l’application"
              aria-expanded={volumeOpen}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold border transition cursor-pointer whitespace-nowrap tabular-nums ${
                soundEnabled && effectivePercent > 0
                  ? 'bg-slate-900 border-emerald-500/40 text-emerald-300 hover:bg-slate-800'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <SoundIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px] font-mono">
                {soundEnabled && effectivePercent > 0 ? `${effectivePercent}%` : 'Muet'}
              </span>
              <SlidersHorizontal className="w-3 h-3 opacity-75 hidden sm:inline" />
            </button>

            {volumeOpen && (
              <div className="absolute right-0 mt-2 w-64 sm:w-72 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-3.5 space-y-3 z-50 animate-fade-in">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-white flex items-center gap-1.5">
                    <SoundIcon className="w-4 h-4 text-emerald-400" />
                    <span>Volume du son</span>
                  </span>
                  <button
                    type="button"
                    data-sound="custom"
                    onClick={onToggleSound}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer transition ${
                      soundEnabled && effectivePercent > 0
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25'
                        : 'bg-rose-500/15 border-rose-500/40 text-rose-300 hover:bg-rose-500/25'
                    }`}
                  >
                    {soundEnabled && effectivePercent > 0 ? 'Couper' : 'Activer'}
                  </button>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 tabular-nums">
                    <span>Niveau sonore au clic</span>
                    <strong className="text-emerald-300 font-mono">{effectivePercent} %</strong>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={effectivePercent}
                    aria-label="Curseur de volume sonore"
                    onChange={(e) => onChangeSoundVolume(Number(e.target.value) / 100)}
                    className="w-full accent-emerald-400 cursor-pointer h-2 rounded-lg bg-slate-800"
                  />
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'Muet', value: 0 },
                    { label: 'Doux', value: 0.2 },
                    { label: 'Normal', value: 0.35 },
                    { label: 'Fort', value: 0.85 },
                  ].map((preset) => {
                    const isActive = Math.abs((soundEnabled ? soundVolume : 0) - preset.value) < 0.04;
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        data-sound="custom"
                        onClick={() => onChangeSoundVolume(preset.value)}
                        className={`py-1 px-1.5 rounded-lg text-[11px] font-bold border cursor-pointer transition ${
                          isActive
                            ? 'bg-emerald-400 text-slate-950 border-emerald-300'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenMemo}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition cursor-pointer shadow active:scale-95 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Fiches Mémos</span>
            <span className="sm:hidden">Mémos</span>
          </button>
        </div>
      </div>
    </header>
  );
};
