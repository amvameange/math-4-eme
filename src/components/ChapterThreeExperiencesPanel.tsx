import React, { useEffect, useState } from 'react';
import { FlaskConical, Compass, Layers } from 'lucide-react';
import { SubjectId } from '../types/math';
import {
  PHYSICS_3EME_EXPERIENCE_META,
  Physics3emeExperiences,
} from './Physics3emeExperiences';
import {
  MATH_3EME_EXPERIENCE_META,
  Math3emeExperiences,
} from './Math3emeExperiences';

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
  const [selectedExp, setSelectedExp] = useState<0 | 1 | 2>(0);
  const [showAllThree, setShowAllThree] = useState<boolean>(false);

  useEffect(() => {
    setSelectedExp(0);
    setShowAllThree(false);
  }, [chapterId]);

  const meta =
    subject === 'physique'
      ? PHYSICS_3EME_EXPERIENCE_META[chapterId]
      : MATH_3EME_EXPERIENCE_META[chapterId];

  if (!meta) return null;

  const isPhysics = subject === 'physique';
  const indices: (0 | 1 | 2)[] = [0, 1, 2];

  const renderExperience = (idx: 0 | 1 | 2) =>
    isPhysics ? (
      <Physics3emeExperiences chapterId={chapterId} experienceIndex={idx} />
    ) : (
      <Math3emeExperiences chapterId={chapterId} experienceIndex={idx} />
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
                ? '3 Expériences & Schémas Illustratifs du Mémo'
                : '3 Expériences Interactives du Chapitre'}
            </div>
            <p className="text-xs text-slate-400">
              Manipule les 3 expériences distinctes avec leurs schémas SVG interactifs en direct.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowAllThree((v) => !v)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            showAllThree
              ? 'bg-emerald-500 text-slate-950 border-emerald-400'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{showAllThree ? 'Mode onglets (1 par 1)' : 'Afficher les 3 ensemble'}</span>
        </button>
      </div>

      {!showAllThree ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {indices.map((idx) => {
              const active = selectedExp === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedExp(idx)}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                    active
                      ? isPhysics
                        ? 'bg-sky-500/15 border-sky-400 text-white shadow'
                        : 'bg-amber-400/15 border-amber-400 text-white shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                    Expérience {idx + 1} / 3
                  </div>
                  <div className="text-xs font-bold mt-0.5 truncate">
                    {meta.shortTitles[idx]}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-slate-950/60 border border-slate-800 p-3.5 sm:p-4 space-y-3">
            <div className="text-xs sm:text-sm font-black text-sky-300 border-b border-slate-800 pb-2">
              {meta.titles[selectedExp]}
            </div>
            {renderExperience(selectedExp)}
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
                {meta.titles[idx]}
              </div>
              {renderExperience(idx)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
