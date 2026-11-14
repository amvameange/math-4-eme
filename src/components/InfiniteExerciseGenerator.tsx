import React, { useState, useEffect, useCallback } from 'react';
import {
  Sparkles,
  RefreshCw,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  TrendingUp,
  Award,
  Layers,
  Shuffle,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StepByStepCorrection } from './StepByStepCorrection';
import { DomainId, ExerciseDifficulty, SubjectId } from '../types/math';
import { CHAPTERS, DOMAINS } from '../data/curriculumData';
import { PHYSICS_CHAPTERS, PHYSICS_DOMAINS } from '../data/physicsCurriculum';
import { DIFFICULTY_META, GeneratedExercise, pickRandom } from '../data/generators/types';
import { generatePhysicsExercise } from '../data/generators/physicsInfiniteGenerators';
import { generateMathExercise } from '../data/generators/mathInfiniteGenerators';
import {
  KokoSuccessCelebration,
  KokoEncouragingFeedback,
} from './illustrations/FunFeedbackIllustrations';
import { ExerciseVisualFigure } from './illustrations/PedagogicalFigures';

interface InfiniteExerciseGeneratorProps {
  subject: SubjectId;
  onSolvedExercise?: (isCorrect: boolean, xpEarned?: number) => void;
}

const LEVELS: ExerciseDifficulty[] = [1, 2, 3, 4];

function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, '')
    .replace(/,/g, '.')
    .replace(/^\+/, '')
    .toLowerCase();
}

function answersMatch(userRaw: string, correctRaw: string, questionType: GeneratedExercise['questionType']): boolean {
  const u = normalizeAnswer(userRaw);
  const c = normalizeAnswer(correctRaw);
  if (!u) return false;
  if (u === c) return true;
  if (questionType === 'numeric') {
    const uNum = Number(u);
    const cNum = Number(c);
    if (!Number.isNaN(uNum) && !Number.isNaN(cNum)) {
      return Math.abs(uNum - cNum) <= 0.02;
    }
  }
  return false;
}

export const InfiniteExerciseGenerator: React.FC<InfiniteExerciseGeneratorProps> = ({
  subject,
  onSolvedExercise,
}) => {
  const chapters = subject === 'physique' ? PHYSICS_CHAPTERS : CHAPTERS;
  const domains = subject === 'physique' ? PHYSICS_DOMAINS : DOMAINS;

  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<ExerciseDifficulty>(1);
  const [autoEvolve, setAutoEvolve] = useState<boolean>(true);
  const [streakAtLevel, setStreakAtLevel] = useState<number>(0);
  const [totalSolved, setTotalSolved] = useState<number>(0);
  const [maxLevelReached, setMaxLevelReached] = useState<ExerciseDifficulty>(1);
  const [promotionBanner, setPromotionBanner] = useState<ExerciseDifficulty | null>(null);

  const [exercise, setExercise] = useState<GeneratedExercise | null>(null);
  const [exerciseKey, setExerciseKey] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showCorrection, setShowCorrection] = useState<boolean>(false);

  const filteredChapters =
    selectedDomain === 'all'
      ? chapters
      : chapters.filter((c) => c.domainId === selectedDomain);

  const buildExercise = useCallback(
    (chapId: string, diff: ExerciseDifficulty, domId: DomainId | 'all'): GeneratedExercise => {
      const pool =
        domId === 'all' ? chapters : chapters.filter((c) => c.domainId === domId);
      const targetChapterId =
        chapId === 'all'
          ? (pickRandom(pool.length > 0 ? pool : chapters)).id
          : chapId;

      return subject === 'physique'
        ? generatePhysicsExercise(targetChapterId, diff)
        : generateMathExercise(targetChapterId, diff);
    },
    [chapters, subject]
  );

  const spawnExercise = useCallback(
    (chapId: string, diff: ExerciseDifficulty, domId: DomainId | 'all') => {
      const nextEx = buildExercise(chapId, diff, domId);
      setExercise(nextEx);
      setExerciseKey((k) => k + 1);
      setUserAnswer('');
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setShowCorrection(false);
    },
    [buildExercise]
  );

  useEffect(() => {
    setSelectedDomain('all');
    setSelectedChapterId('all');
    setDifficulty(1);
    setStreakAtLevel(0);
    setPromotionBanner(null);
    spawnExercise('all', 1, 'all');
  }, [subject, spawnExercise]);

  const handleSelectDomain = (domId: DomainId | 'all') => {
    setSelectedDomain(domId);
    const nextPool = domId === 'all' ? chapters : chapters.filter((c) => c.domainId === domId);
    const stillValid =
      selectedChapterId === 'all' || nextPool.some((c) => c.id === selectedChapterId);
    const nextChap = stillValid ? selectedChapterId : 'all';
    setSelectedChapterId(nextChap);
    setPromotionBanner(null);
    spawnExercise(nextChap, difficulty, domId);
  };

  const handleSelectChapter = (chapId: string) => {
    setSelectedChapterId(chapId);
    setPromotionBanner(null);
    spawnExercise(chapId, difficulty, selectedDomain);
  };

  const handleSelectDifficulty = (nextDiff: ExerciseDifficulty) => {
    setDifficulty(nextDiff);
    setStreakAtLevel(0);
    setPromotionBanner(null);
    if (nextDiff > maxLevelReached) setMaxLevelReached(nextDiff);
    spawnExercise(selectedChapterId, nextDiff, selectedDomain);
  };

  const evaluateAnswer = (candidateAnswer: string) => {
    if (!exercise || !candidateAnswer.trim() || isAnswered) return;

    const ok = answersMatch(candidateAnswer, exercise.correctAnswer, exercise.questionType);
    setIsCorrect(ok);
    setIsAnswered(true);

    if (ok) {
      setTotalSolved((s) => s + 1);
      const nextStreak = streakAtLevel + 1;
      if (autoEvolve && difficulty < 4 && nextStreak >= 2) {
        const promoted = (difficulty + 1) as ExerciseDifficulty;
        setDifficulty(promoted);
        setStreakAtLevel(0);
        setPromotionBanner(promoted);
        if (promoted > maxLevelReached) setMaxLevelReached(promoted);
      } else {
        setStreakAtLevel(nextStreak);
        setPromotionBanner(null);
      }

      if (onSolvedExercise) {
        onSolvedExercise(true, DIFFICULTY_META[exercise.difficulty].xp);
      }

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
        });
      } catch {
        // Ignore confetti errors
      }
    } else {
      setStreakAtLevel(0);
      setPromotionBanner(null);
      if (onSolvedExercise) onSolvedExercise(false, 0);
    }
  };

  const diffMeta = DIFFICULTY_META[difficulty];

  return (
    <div className="space-y-4 pb-20">
      {/* Header & Controls */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>
                Générateur Infini · Tous les {chapters.length} Chapitres (
                {subject === 'physique' ? 'Physique-Chimie 4ème' : 'Maths 4ème CIAM'})
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Évolution graduelle du Niveau 1 (Fondamental) au Niveau 4 (Défi Gabon) avec corrections posées debout.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAutoEvolve(!autoEvolve)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                autoEvolve
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
              title="Monte automatiquement au niveau supérieur après 2 bonnes réponses d’affilée"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Évolution auto : {autoEvolve ? 'ON' : 'OFF'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPromotionBanner(null);
                spawnExercise(selectedChapterId, difficulty, selectedDomain);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-xs font-extrabold text-slate-950 transition cursor-pointer active:scale-95 shadow shrink-0 whitespace-nowrap"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Nouvel exercice</span>
            </button>
          </div>
        </div>

        {/* Échelle d'évolution graduelle (4 niveaux) + Stats session */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3.5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Progression de difficulté (clique pour choisir ou laisse monter automatiquement) :</span>
            </span>
            <div className="flex items-center gap-3 text-[11px] font-bold tabular-nums">
              <span className="text-emerald-400">{totalSolved} réussis</span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-300">
                Série niv. {difficulty} : {Math.min(streakAtLevel, 2)}/2
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-sky-300">Max : Niv. {maxLevelReached}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {LEVELS.map((lvl) => {
              const meta = DIFFICULTY_META[lvl];
              const isActive = difficulty === lvl;
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => handleSelectDifficulty(lvl)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    isActive
                      ? `${meta.badgeClass} ring-1 ring-current shadow-md`
                      : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-black">
                    <span>
                      {meta.emoji} Niveau {lvl}
                    </span>
                    <span className="text-[10px] font-mono tabular-nums">+{meta.xp} XP</span>
                  </div>
                  <div className="text-[11px] font-bold mt-0.5 truncate">{meta.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtre par domaine */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => handleSelectDomain('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
              selectedDomain === 'all'
                ? 'bg-white text-slate-950 font-bold shadow'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Tous les domaines ({chapters.length})
          </button>
          {domains.map((dom) => (
            <button
              key={dom.id}
              type="button"
              onClick={() => handleSelectDomain(dom.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
                selectedDomain === dom.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {dom.shortTitle}
            </button>
          ))}
        </div>

        {/* Sélecteur de tous les chapitres (20 Physique ou 27 Maths) */}
        <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => handleSelectChapter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              selectedChapterId === 'all'
                ? 'bg-amber-400 text-slate-950 font-extrabold shadow'
                : 'bg-slate-800/80 text-slate-200 hover:bg-slate-700 border border-slate-700/60'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Tous les chapitres ({filteredChapters.length})</span>
          </button>

          {filteredChapters.map((chap, idx) => {
            const active = selectedChapterId === chap.id;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => handleSelectChapter(chap.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-sky-500 text-slate-950 font-extrabold shadow'
                    : 'bg-slate-800/75 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {chap.badge || `Ch.${idx + 1}`} · {chap.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promotion banner when auto-leveling up */}
      {promotionBanner && (
        <div className="rounded-2xl bg-emerald-950/60 border border-emerald-500/40 p-3.5 flex flex-wrap items-center justify-between gap-2 animate-fade-in">
          <div className="flex items-center gap-2 text-xs text-emerald-200 font-bold">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Bravo ! Tu passes au {DIFFICULTY_META[promotionBanner].emoji}{' '}
              <strong className="text-white">
                Niveau {promotionBanner} ({DIFFICULTY_META[promotionBanner].label})
              </strong>{' '}
              au prochain exercice !
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setPromotionBanner(null);
              spawnExercise(selectedChapterId, promotionBanner, selectedDomain);
            }}
            className="px-3 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-extrabold flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <span>Essayer le Niveau {promotionBanner}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Carte d'exercice généré */}
      {exercise && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <div className="text-[11px] font-semibold text-slate-400">
                {exercise.chapterTitle}
              </div>
              <div className="font-extrabold text-sky-300 text-sm">{exercise.title}</div>
            </div>

            <span
              className={`px-3 py-1 rounded-xl border text-[11px] font-extrabold whitespace-nowrap ${
                DIFFICULTY_META[exercise.difficulty].badgeClass
              }`}
            >
              {DIFFICULTY_META[exercise.difficulty].emoji} {DIFFICULTY_META[exercise.difficulty].shortLabel}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 text-sm font-medium text-slate-100 whitespace-pre-line leading-relaxed shadow-inner">
            {exercise.prompt}
          </div>

          <ExerciseVisualFigure
            chapterId={exercise.chapterId}
            subject={subject}
            title={exercise.title}
            prompt={exercise.prompt}
          />

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-xs flex items-center justify-between gap-2">
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <span>📐</span>
              <span>
                {subject === 'physique'
                  ? 'Méthode : 1) Données & conversions  2) Formule  3) Calcul debout  4) Unité !'
                  : 'Méthode CIAM : Pose chaque calcul debout ligne par ligne (= bien alignés) !'}
              </span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 shrink-0 tabular-nums">
              +{DIFFICULTY_META[exercise.difficulty].xp} XP
            </span>
          </div>

          <div>
            {!showHint ? (
              <button
                type="button"
                onClick={() => setShowHint(true)}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Besoin d’un indice ?</span>
              </button>
            ) : (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2 animate-fade-in">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-300">Indice :</strong> {exercise.hint}
                </div>
              </div>
            )}
          </div>

          {/* Zone de réponse : QCM ou saisie libre */}
          <div className="space-y-2.5 pt-2 border-t border-slate-800">
            <label className="text-xs text-slate-400 font-medium block">
              {exercise.questionType === 'qcm' && exercise.options
                ? 'Choisis la bonne réponse :'
                : 'Ta réponse :'}
            </label>

            {exercise.questionType === 'qcm' && exercise.options && exercise.options.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-2">
                {exercise.options.map((opt) => {
                  const selected = userAnswer === opt;
                  const isRightOpt =
                    isAnswered && normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
                  const isWrongSelected = isAnswered && selected && !isRightOpt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => {
                        setUserAnswer(opt);
                        evaluateAnswer(opt);
                      }}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-bold transition cursor-pointer ${
                        isRightOpt
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                          : isWrongSelected
                          ? 'bg-rose-500/20 border-rose-400 text-rose-200'
                          : selected
                          ? 'bg-sky-500/20 border-sky-400 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-200 hover:bg-slate-800 disabled:cursor-default'
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
                  disabled={isAnswered}
                  placeholder={
                    exercise.unit
                      ? `Ex: 24 (en ${exercise.unit})`
                      : 'Tape ta réponse ici (ex: 3/4 ou -12)...'
                  }
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && evaluateAnswer(userAnswer)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-sky-500 focus:outline-none disabled:opacity-70"
                />
                <button
                  type="button"
                  onClick={() => evaluateAnswer(userAnswer)}
                  disabled={!userAnswer.trim() || isAnswered}
                  className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow active:scale-95 shrink-0 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Vérifier</span>
                </button>
              </div>
            )}
          </div>

          {isAnswered && (
            <div className="pt-2 space-y-3 animate-fade-in">
              {isCorrect ? (
                <KokoSuccessCelebration
                  message={`Akiba ! Bonne réponse (+${DIFFICULTY_META[exercise.difficulty].xp} XP) !`}
                  subMessage="Consulte la rédaction posée debout ci-dessous ou passe à l’exercice suivant."
                />
              ) : (
                <KokoEncouragingFeedback
                  title={`Réponse attendue : ${exercise.correctAnswer}${
                    exercise.unit ? ` ${exercise.unit}` : ''
                  }`}
                  message="Regarde la correction détaillée debout ci-dessous pour maîtriser la méthode !"
                  onShowSolution={() => setShowCorrection(true)}
                />
              )}

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                {!showCorrection && (
                  <button
                    type="button"
                    onClick={() => setShowCorrection(true)}
                    className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-semibold cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Voir la correction détaillée debout</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setPromotionBanner(null);
                    spawnExercise(selectedChapterId, difficulty, selectedDomain);
                  }}
                  className="ml-auto px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer shadow whitespace-nowrap"
                >
                  <span>Exercice suivant ({diffMeta.emoji} Niv. {difficulty})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {!isAnswered && !showCorrection && (
            <div className="pt-1 flex justify-end">
              <button
                type="button"
                onClick={() => setShowCorrection(true)}
                className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Afficher directement la correction pas à pas</span>
              </button>
            </div>
          )}

          {showCorrection && (
            <div className="pt-3 border-t border-slate-800 animate-fade-in">
              <StepByStepCorrection
                key={exerciseKey}
                steps={exercise.steps}
                finalResult={exercise.explanationFinal}
                initialShowAll={false}
                chapterId={exercise.chapterId}
                subject={subject}
                contextHint={`${exercise.title} ${exercise.prompt}`}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
