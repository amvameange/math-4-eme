import React from 'react';
import {
  FileText,
  Sparkles,
  Printer,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { Chapter, ChapterMemo } from '../types/math';
import { GabonBadgeStamp } from './illustrations/FunFeedbackIllustrations';
import { StandingMathRenderer } from './StandingMathRenderer';
import { DemonstrationMethodFigure } from './illustrations/PedagogicalFigures';
import { ChapterThreeExperiencesPanel } from './ChapterThreeExperiencesPanel';
import { FormattedMathText } from './FormattedMathText';

interface ChapterMemoViewProps {
  chapter: Chapter;
  onGoToExercises?: () => void;
}

export const ChapterMemoView: React.FC<ChapterMemoViewProps> = ({
  chapter,
  onGoToExercises,
}) => {
  const memo: ChapterMemo | undefined = chapter.memoSheet;
  const isPhysics = chapter.subject === 'physique';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Memo Header Card */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/35 border border-amber-500/40 p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-amber-300">
                {chapter.badge} · 🇬🇦{' '}
                {isPhysics ? 'Programme Physique-Chimie Terminale C BAC' : 'Programme Mathématiques Terminale C BAC'}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Fiche Mémo BAC C : <FormattedMathText text={chapter.title} />
              </h3>
              <p className="text-xs text-slate-300">
                <FormattedMathText
                  text={
                    memo?.slogan ||
                    'Toutes les formules du cours écrites en colonne verticale et 10 expériences illustratives !'
                  }
                />
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              try {
                if (typeof window !== 'undefined' && window.AndroidBridge?.printPage) {
                  window.AndroidBridge.printPage();
                } else if (typeof window !== 'undefined' && typeof window.print === 'function') {
                  window.print();
                }
              } catch (e) {
                console.warn('Impression non supportée sur cet appareil', e);
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer shadow whitespace-nowrap shrink-0"
            title="Imprimer cette fiche mémo"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Imprimer la fiche</span>
          </button>
        </div>
      </div>

      {/* Schéma de méthode du chapitre */}
      <DemonstrationMethodFigure
        chapterId={chapter.id}
        illustrationKey={chapter.illustrationKey}
        subject={chapter.subject}
        contextHint={chapter.title}
      />

      {/* 3 Expériences & Schémas Illustratifs Interactifs du Chapitre */}
      <ChapterThreeExperiencesPanel
        chapterId={chapter.id}
        subject={chapter.subject || 'maths'}
        mode="memo"
      />

      {/* 1. Points Clés à Retenir */}
      {memo?.summaryBulletPoints && memo.summaryBulletPoints.length > 0 && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>L’Essentiel du Cours en un Coup d’Œil</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {memo.summaryBulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">
                  <FormattedMathText text={point} />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Formules du Cours en Colonne Verticale */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-sm font-black text-white uppercase tracking-wider">
            📐 Les Formules du Cours en Colonne Verticale
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Écris ligne par ligne comme ceci sur ta copie !
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {memo?.verticalFormulas.map((vf, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all p-5 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {vf.badge && <span className="text-lg select-none">{vf.badge}</span>}
                    <span className="font-bold text-white text-sm">
                      <FormattedMathText text={vf.name} />
                    </span>
                  </div>
                  {vf.ruleTitle && (
                    <span className="text-[11px] font-bold text-amber-300">
                      <FormattedMathText text={vf.ruleTitle} />
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  <FormattedMathText text={vf.explanation} />
                </p>

                <StandingMathRenderer
                  expression={vf.steps.join('\n')}
                  subResult={vf.resultHighlight}
                  title={`Formule Debout : ${vf.name}`}
                  showColumnOp={true}
                />
              </div>

              {vf.tip && (
                <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-indigo-300">Astuce de Koko :</strong>{' '}
                    <FormattedMathText text={vf.tip} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Koko's Advice & Classic Pitfall Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-3xl bg-amber-950/25 border border-amber-500/35 shadow-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wider">
            <span className="text-lg">🐆</span>
            <span>Le Super Conseil de Koko pour le Baccalauréat C</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            <FormattedMathText
              text={
                memo?.kokoTip ||
                'Prends ton temps, écris toujours une étape par ligne et encadre ta réponse finale à la règle !'
              }
            />
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-rose-950/25 border border-rose-500/35 shadow-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-rose-300 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Le Gros Piège à Éviter Absolument</span>
          </div>
          <p className="text-xs text-rose-100 leading-relaxed font-medium">
            <FormattedMathText
              text={
                memo?.pitfallToAvoid ||
                'Ne calcule jamais tout d’un coup sur une seule ligne. Aligne toujours les égalités vers le bas.'
              }
            />
          </p>
        </div>
      </div>

      <GabonBadgeStamp />

      {onGoToExercises && (
        <div className="p-4 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="text-sm font-bold text-emerald-400">
              Prêt(e) à tester ta mémoire ?
            </div>
            <div className="text-xs text-slate-300">
              Mets en pratique ces formules avec les 90 exercices corrigés étape par étape !
            </div>
          </div>
          <button
            onClick={onGoToExercises}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition cursor-pointer shadow shrink-0 active:scale-95 whitespace-nowrap"
          >
            S’entraîner sur les exercices →
          </button>
        </div>
      )}
    </div>
  );
};
