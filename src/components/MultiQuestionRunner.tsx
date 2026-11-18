import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  ChapterIllustrationKey,
  Exercise,
  SubQuestion,
  SubjectId,
} from '../types/math';
import { GeneratedExercise } from '../data/generators/types';
import { ExerciseCheckRecord } from '../hooks/useLearningProgress';
import { StepByStepCorrection } from './StepByStepCorrection';
import { StandingMathRenderer } from './StandingMathRenderer';
import { playUiClickSound, scrollToSectionById } from '../utils/uiFeedback';

interface MultiQuestionRunnerProps {
  exercise: Exercise | GeneratedExercise;
  exerciseId: string;
  subject?: SubjectId;
  chapterId?: string;
  illustrationKey?: ChapterIllustrationKey;
  checkedState: Record<string, ExerciseCheckRecord>;
  onRecordAttempt: (id: string, isCorrect: boolean) => void;
  onExerciseCompleted?: () => void;
  initialShowFullCorrection?: boolean;
}

function normalizeAnswerStr(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, '')
    .replace(/,/g, '.')
    .replace(/^\+/, '')
    .toLowerCase();
}

function answersMatchSub(userRaw: string, q: SubQuestion): boolean {
  const u = normalizeAnswerStr(userRaw);
  const c = normalizeAnswerStr(q.correctAnswer);
  if (!u) return false;
  if (u === c) return true;

  if (q.unit) {
    const cleanUnit = normalizeAnswerStr(q.unit);
    if (cleanUnit && u.endsWith(cleanUnit)) {
      const stripped = u.slice(0, u.length - cleanUnit.length);
      if (stripped === c) return true;
      const sNum = Number(stripped);
      const cNum = Number(c);
      if (!Number.isNaN(sNum) && !Number.isNaN(cNum) && Number.isFinite(sNum) && Number.isFinite(cNum)) {
        const tol = Math.max(0.02, Math.abs(cNum) * 0.02);
        return Math.abs(sNum - cNum) <= tol;
      }
    }
  }

  if (q.questionType === 'numeric' || !q.options) {
    const uNum = Number(u);
    const cNum = Number(c);
    if (!Number.isNaN(uNum) && !Number.isNaN(cNum) && Number.isFinite(uNum) && Number.isFinite(cNum)) {
      const tol = Math.max(0.02, Math.abs(cNum) * 0.02);
      return Math.abs(uNum - cNum) <= tol;
    }
  }

  return false;
}

export const MultiQuestionRunner: React.FC<MultiQuestionRunnerProps> = ({
  exercise,
  exerciseId,
  subject,
  chapterId,
  illustrationKey,
  checkedState,
  onRecordAttempt,
  onExerciseCompleted,
  initialShowFullCorrection = false,
}) => {
  const subQuestions = exercise.subQuestions || [];
  const [activeQIndex, setActiveQIndex] = useState<number>(0);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [shownHints, setShownHints] = useState<Record<number, boolean>>({});
  const [showFullCorrection, setShowFullCorrection] = useState<boolean>(initialShowFullCorrection);

  useEffect(() => {
    setActiveQIndex(0);
    setInputs({});
    setShownHints({});
    setShowFullCorrection(initialShowFullCorrection);
  }, [exerciseId, initialShowFullCorrection]);

  if (subQuestions.length === 0) return null;

  const safeQIndex = Math.min(activeQIndex, Math.max(0, subQuestions.length - 1));
  const currentQ = subQuestions[safeQIndex];

  const getSubKey = (qNum: number) => `subq::${exerciseId}::q${qNum}`;

  const solvedCount = subQuestions.filter((q) => checkedState[getSubKey(q.questionNumber)]?.correct).length;
  const parentAlreadySolved = Boolean(checkedState[exerciseId]?.correct);
  const currentSubKey = getSubKey(currentQ.questionNumber);
  const currentRecord = checkedState[currentSubKey];
  const currentInput = inputs[currentQ.questionNumber] ?? '';

  const selectQuestion = (idx: number) => {
    playUiClickSound('step');
    setActiveQIndex(idx);
    scrollToSectionById('mq-question-panel', 40);
  };

  const validateSubQuestion = (q: SubQuestion, candidateRaw: string) => {
    const val = candidateRaw.trim();
    if (!val) return;

    const isMatch = answersMatchSub(val, q);
    playUiClickSound(isMatch ? 'success' : 'error');
    onRecordAttempt(getSubKey(q.questionNumber), isMatch);

    if (isMatch) {
      const nextSolvedCount = subQuestions.filter((item) => {
        if (item.questionNumber === q.questionNumber) return true;
        return Boolean(checkedState[getSubKey(item.questionNumber)]?.correct);
      }).length;

      if (nextSolvedCount >= subQuestions.length && !parentAlreadySolved) {
        onRecordAttempt(exerciseId, true);
        onExerciseCompleted?.();
        try {
          confetti({
            particleCount: 75,
            spread: 80,
            origin: { y: 0.65 },
          });
        } catch {
          // Ignore confetti errors
        }
      }
    }
  };

  const handleSelectQcmOption = (q: SubQuestion, opt: string) => {
    setInputs((prev) => ({ ...prev, [q.questionNumber]: opt }));
    validateSubQuestion(q, opt);
  };

  const handleToggleFullCorrection = () => {
    playUiClickSound('step');
    const next = !showFullCorrection;
    setShowFullCorrection(next);
    if (next) {
      scrollToSectionById('mq-correction-panel', 50);
    }
  };

  const handleValidateMastery = () => {
    playUiClickSound('success');
    onRecordAttempt(exerciseId, true);
    onExerciseCompleted?.();
    try {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.65 },
      });
    } catch {
      // Ignore confetti errors
    }
  };

  return (
    <div className="space-y-4 pt-2 border-t border-slate-800">
      {/* Header Badge & Progress */}
      <div className="rounded-2xl bg-slate-950/90 border border-rose-500/35 p-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-300 shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-black text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>Problème Niveau Très Difficile · {subQuestions.length} Questions Progressives</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Réponds aux {subQuestions.length} questions ci-dessous puis consulte la correction détaillée en {exercise.steps.length} étapes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 tabular-nums">
          <span
            className={`px-3 py-1 rounded-xl text-xs font-black border ${
              solvedCount === subQuestions.length || parentAlreadySolved
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-400/15 text-amber-300 border-amber-400/40'
            }`}
          >
            {solvedCount} / {subQuestions.length} validées
          </span>
        </div>
      </div>

      {/* Q1..Q10 Selector Pills */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
        {subQuestions.map((q, idx) => {
          const rec = checkedState[getSubKey(q.questionNumber)];
          const isCurrent = idx === safeQIndex;
          const isSolved = Boolean(rec?.correct);
          const isWrong = Boolean(rec?.answered && !rec?.correct);

          return (
            <button
              key={q.questionNumber}
              type="button"
              data-sound="custom"
              onClick={() => selectQuestion(idx)}
              className={`py-2 px-1 rounded-xl text-xs font-black border transition cursor-pointer flex items-center justify-center gap-1 tabular-nums ${
                isCurrent
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-1 ring-amber-300'
                  : isSolved
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                  : isWrong
                  ? 'bg-rose-950/70 text-rose-300 border-rose-500/40'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
              title={`Aller à la question ${q.questionNumber}`}
            >
              <span>Q{q.questionNumber}</span>
              {isSolved && <Check className="w-3 h-3 stroke-[3]" />}
            </button>
          );
        })}
      </div>

      {/* Active Question Panel */}
      <div
        id="mq-question-panel"
        className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-5 space-y-4 shadow-inner"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-black tabular-nums">
              Question {currentQ.questionNumber} / {subQuestions.length}
            </span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {currentQ.questionType === 'qcm' ? 'Choix multiple' : 'Calcul / Démonstration'}
            </span>
          </div>

          {currentQ.unit && (
            <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-lg border border-sky-500/30">
              Unité : {currentQ.unit}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-base font-bold text-white leading-relaxed whitespace-pre-line">
          {currentQ.questionPrompt}
        </p>

        {/* Hint Toggle */}
        <div>
          {!shownHints[currentQ.questionNumber] ? (
            <button
              type="button"
              onClick={() => {
                playUiClickSound('tap');
                setShownHints((prev) => ({ ...prev, [currentQ.questionNumber]: true }));
              }}
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>💡 Indice pour la question {currentQ.questionNumber}</span>
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2 animate-fade-in">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-300">Indice :</strong> {currentQ.hint}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Answer Control */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
          {currentQ.options && currentQ.options.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = currentInput === opt;
                const isThisCorrectOpt =
                  Boolean(currentRecord?.answered) &&
                  normalizeAnswerStr(opt) === normalizeAnswerStr(currentQ.correctAnswer);
                const isWrongSelected =
                  Boolean(currentRecord?.answered && !currentRecord?.correct) && isSelected;

                return (
                  <button
                    key={optIdx}
                    type="button"
                    data-sound="custom"
                    onClick={() => handleSelectQcmOption(currentQ, opt)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition cursor-pointer border ${
                      isThisCorrectOpt
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold'
                        : isWrongSelected
                        ? 'bg-rose-500/20 border-rose-400 text-rose-200'
                        : isSelected
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={
                  currentQ.unit
                    ? `Ta réponse (en ${currentQ.unit})...`
                    : 'Tape ta réponse exacte ou décimale...'
                }
                value={currentInput}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, [currentQ.questionNumber]: e.target.value }))
                }
                onKeyDown={(e) => e.key === 'Enter' && validateSubQuestion(currentQ, currentInput)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                data-sound="custom"
                onClick={() => validateSubQuestion(currentQ, currentInput)}
                disabled={!currentInput.trim()}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer shadow active:scale-95 shrink-0"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Valider Q{currentQ.questionNumber}</span>
              </button>
            </div>
          )}
        </div>

        {/* Immediate Question-Level Step Feedback */}
        {currentRecord?.answered && (
          <div
            className={`rounded-2xl p-4 border space-y-3 animate-fade-in ${
              currentRecord.correct
                ? 'bg-emerald-950/35 border-emerald-500/45'
                : 'bg-rose-950/30 border-rose-500/40'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-black">
                {currentRecord.correct ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300">
                      Exact ! Question {currentQ.questionNumber} réussie.
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-rose-300 shrink-0" />
                    <span className="text-rose-200">
                      Réponse attendue : {currentQ.correctAnswer}
                      {currentQ.unit ? ` ${currentQ.unit}` : ''}
                    </span>
                  </>
                )}
              </div>
              <span className="text-[11px] font-mono font-bold text-amber-300">
                Étape {currentQ.questionNumber} / {subQuestions.length}
              </span>
            </div>

            {currentQ.ruleApplied && (
              <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/35 text-xs text-amber-200 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Théorème / Méthode :</strong> {currentQ.ruleApplied}
                </span>
              </div>
            )}

            <StandingMathRenderer
              expression={currentQ.mathExpression}
              subResult={`${currentQ.correctAnswer}${currentQ.unit ? ` ${currentQ.unit}` : ''}`}
              title={`Correction détaillée · Question ${currentQ.questionNumber}`}
            />

            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Question Prev / Next Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
          <button
            type="button"
            data-sound="custom"
            disabled={safeQIndex === 0}
            onClick={() => selectQuestion(Math.max(0, safeQIndex - 1))}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 flex items-center gap-1 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Question préc.</span>
          </button>

          {safeQIndex < subQuestions.length - 1 ? (
            <button
              type="button"
              data-sound="custom"
              onClick={() => selectQuestion(safeQIndex + 1)}
              className="px-4 py-1.5 rounded-xl text-xs font-extrabold bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-1 transition cursor-pointer shadow"
            >
              <span>Question suivante (Q{safeQIndex + 2})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              data-sound="custom"
              onClick={handleValidateMastery}
              className="px-4 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 transition cursor-pointer shadow"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{parentAlreadySolved ? 'Problème validé ✓' : 'Valider la fiche complète (10/10)'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Global 10-Step Correction Trigger */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          data-sound="custom"
          onClick={handleToggleFullCorrection}
          className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/35 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow"
        >
          <BookOpen className="w-4 h-4" />
          <span>
            {showFullCorrection
              ? 'Masquer la Correction Détaillée Pas à Pas'
              : `Afficher la Correction Détaillée Pas à Pas (${exercise.steps.length} étapes)`}
          </span>
        </button>
      </div>

      {showFullCorrection && (
        <div id="mq-correction-panel" className="pt-1 animate-fade-in">
          <StepByStepCorrection
            steps={exercise.steps}
            finalResult={exercise.explanationFinal}
            initialShowAll={false}
            chapterId={chapterId || exercise.chapterId}
            illustrationKey={illustrationKey}
            subject={subject}
            contextHint={`${exercise.title} ${exercise.prompt}`}
          />
        </div>
      )}
    </div>
  );
};
