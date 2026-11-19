import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Compass, FlaskConical, Layers } from 'lucide-react';
import { SubjectId } from '../types/math';
import {
  PHYSICS_TC_EXPERIENCE_META,
  PhysicsTcExperiences,
} from './PhysicsTcExperiences';
import {
  MATH_TC_EXPERIENCE_META,
  MathTcExperiences,
} from './MathTcExperiences';
import { scrollToSectionById } from '../utils/uiFeedback';
import { FormattedMathText } from './FormattedMathText';

interface ChapterThreeExperiencesPanelProps {
  chapterId: string;
  subject: SubjectId;
  mode?: 'labo' | 'memo';
}

export const ChapterThreeExperiencesPanel: React.FC<ChapterThreeExperiencesPanelProps> = ({
  chapterId,
  subject,
  mode = 'labo',
}) => {
  const [selectedExp, setSelectedExp] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    setSelectedExp(0);
    setShowAll(false);
  }, [chapterId]);

  const meta =
    subject === 'physique'
      ? PHYSICS_TC_EXPERIENCE_META[chapterId]
      : MATH_TC_EXPERIENCE_META[chapterId];

  if (!meta) return null;

  const isPhysics = subject === 'physique';
  const count = meta.titles.length;
  const indices = Array.from({ length: count }, (_, i) => i);
  const safeIdx = Math.min(selectedExp, Math.max(0, count - 1));

  const renderExperience = (idx: number) =>
    isPhysics ? (
      <PhysicsTcExperiences chapterId={chapterId} experienceIndex={idx} />
    ) : (
      <MathTcExperiences chapterId={chapterId} experienceIndex={idx} />
    );

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${
              isPhysics
                ? 'bg-sky-500/15 border-sky-500/40 text-sky-300'
                : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
            }`}
          >
            {isPhysics ? (
              <FlaskConical className="w-4 h-4" />
            ) : (
              <Compass className="w-4 h-4" />
            )}
          </div>
          <div>
            <div className="text-[11px] font-black uppercase tracking-wider text-amber-300">
              {mode === 'memo'
                ? `${count} Expériences & Schémas Illustratifs du Mémo`
                : `${count} Expériences Interactives du Chapitre`}
            </div>
            <p className="text-xs text-slate-400">
              Manipule les {count} expériences distinctes avec leurs schémas SVG interactifs en direct.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            showAll
              ? 'bg-emerald-500 text-slate-950 border-emerald-400'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{showAll ? 'Mode onglets (1 par 1)' : `Afficher les ${count} ensemble`}</span>
        </button>
      </div>

      {!showAll ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {indices.map((idx) => {
              const active = safeIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedExp(idx);
                    scrollToSectionById('labo-experience-viewer', 45);
                  }}
                  title={meta.titles[idx]}
                  className={`p-2.5 rounded-2xl border text-left transition cursor-pointer ${
                    active
                      ? isPhysics
                        ? 'bg-sky-500/15 border-sky-400 text-white shadow'
                        : 'bg-amber-400/15 border-amber-400 text-white shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-300 tabular-nums">
                    Exp. {idx + 1} / {count}
                  </div>
                  <div className="text-xs font-bold mt-0.5 truncate">
                    <FormattedMathText text={meta.shortTitles[idx]} />
                  </div>
                </button>
              );
            })}
          </div>

          <div
            id="labo-experience-viewer"
            className="rounded-2xl bg-slate-950/60 border border-slate-800 p-3.5 sm:p-4 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
              <div className="text-xs sm:text-sm font-black text-sky-300">
                <FormattedMathText text={meta.titles[safeIdx]} />
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={safeIdx === 0}
                  onClick={() => {
                    setSelectedExp((i) => Math.max(0, i - 1));
                    scrollToSectionById('labo-experience-viewer', 45);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold text-slate-200 border border-slate-700 transition cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Préc.</span>
                </button>
                <button
                  type="button"
                  disabled={safeIdx === count - 1}
                  onClick={() => {
                    setSelectedExp((i) => Math.min(count - 1, i + 1));
                    scrollToSectionById('labo-experience-viewer', 45);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold text-slate-200 border border-slate-700 transition cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <span>Suiv.</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            {renderExperience(safeIdx)}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {indices.map((idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-950/60 border border-slate-800 p-4 space-y-3"
            >
              <div className="text-xs sm:text-sm font-black text-amber-300 border-b border-slate-800 pb-2">
                <FormattedMathText text={meta.titles[idx]} />
              </div>
              {renderExperience(idx)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
