import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Check,
  FileText,
  Trophy,
  Gamepad2,
  ShieldCheck,
  BookmarkCheck,
  Scale,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter, Exercise } from '../types/math';
import { StepByStepCorrection } from './StepByStepCorrection';
import { ChapterMemoView } from './ChapterMemoView';
import {
  MascotKoko,
  ChapterCourseIllustration,
} from './illustrations/GabonMathIllustrations';
import {
  KokoSuccessCelebration,
  KokoEncouragingFeedback,
} from './illustrations/FunFeedbackIllustrations';
import { StandingMathRenderer } from './StandingMathRenderer';

interface LessonChapterViewProps {
  chapter: Chapter;
  requestedTab?: 'cours' | 'memo' | 'exercices';
  onTabChange?: (tab: 'cours' | 'memo' | 'exercices') => void;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
}

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function formatMathovoreHeading(rawTitle: string, index: number): string {
  const roman = ROMAN_NUMERALS[index] || `${index + 1}`;
  const cleaned = rawTitle.replace(/^\s*(\d+|[IVX]+)\s*[\.\-\)]\s*/i, '').trim();
  return `${roman}. ${cleaned}`;
}

function getDemonstrationTemplate(chapter: Chapter): {
  hypothesis: string;
  property: string;
  conclusion: string;
} {
  if (chapter.domainId === 'geometrie' || chapter.id === 'cercle-proprietes-avancees') {
    if (chapter.id === 'theoreme-pythagore') {
      return {
        hypothesis: 'On sait que le triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm.',
        property: 'Or, d’après le théorème de Pythagore, dans un triangle rectangle le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés : BC² = AB² + AC².',
        conclusion: 'Donc BC² = 6² + 8² = 36 + 64 = 100, d’où BC = √100 = 10 cm.',
      };
    }
    if (chapter.id === 'theoreme-thales') {
      return {
        hypothesis: 'On sait que dans le triangle ABC, M ∈ (AB), N ∈ (AC) et que les droites (MN) et (BC) sont parallèles.',
        property: 'Or, d’après le théorème de Thalès, les longueurs des côtés des triangles AMN et ABC sont proportionnelles : AM/AB = AN/AC = MN/BC.',
        conclusion: 'Donc par produit en croix, on calcule la longueur manquante avec précision.',
      };
    }
    if (chapter.id === 'triangles-agrandissement-reduction') {
      return {
        hypothesis: 'On sait que dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC].',
        property: 'Or, d’après le théorème de la droite des milieux, la droite passant par les milieux de deux côtés est parallèle au troisième côté et mesure sa moitié.',
        conclusion: 'Donc (IJ) // (BC) et IJ = BC ÷ 2.',
      };
    }
    if (chapter.id === 'trigonometrie-triangle-rectangle') {
      return {
        hypothesis: 'On sait que le triangle ABC est rectangle en A, que l’angle B̂ = 60° et que l’hypoténuse BC = 16 cm.',
        property: 'Or, dans un triangle rectangle, cos(B̂) = Côté Adjacent ÷ Hypoténuse = AB ÷ BC.',
        conclusion: 'Donc AB = 16 × cos(60°) = 16 × 0,5 = 8 cm.',
      };
    }
    if (chapter.id === 'cercle-proprietes-avancees') {
      return {
        hypothesis: 'On sait que l’angle inscrit AMB et l’angle au centre AÔB interceptent le même arc AB sur le cercle de centre O.',
        property: 'Or, dans un cercle, la mesure de l’angle au centre est égale au double de la mesure de l’angle inscrit qui intercepte le même arc.',
        conclusion: 'Donc AÔB = 2 × AMB.',
      };
    }
    return {
      hypothesis: `On sait que les hypothèses de la figure vérifient les conditions du chapitre « ${chapter.title.split(':')[0].trim()} ».`,
      property: 'Or, d’après la propriété caractéristique étudiée dans cette leçon (conservation des longueurs, des angles ou alignement),',
      conclusion: 'Donc on en déduit rigoureusement la mesure ou la position de l’image demandée.',
    };
  }

  return {
    hypothesis: `On identifie d’abord les données de l’énoncé et les priorités opératoires du chapitre « ${chapter.title.split(':')[0].trim()} ».`,
    property: 'Or, on applique la propriété du cours (règle des signes, distributivité, transposition ou produit en croix) en alignant les signes = en colonne verticale.',
    conclusion: 'Donc on obtient le résultat exact simplifié (avec l’unité en F CFA, cm, h ou % si c’est un problème).',
  };
}

export const LessonChapterView: React.FC<LessonChapterViewProps> = ({
  chapter,
  requestedTab,
  onTabChange,
  onNextChapter,
  onPrevChapter,
}) => {
  const [activeTab, setActiveTab] = useState<'cours' | 'memo' | 'exercices'>(requestedTab || 'cours');
  const [activeExerciseIndex, setActiveExerciseIndex] = useState<number>(0);
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState<number | 'all'>('all');

  // Exercise interaction state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checkedState, setCheckedState] = useState<
    Record<string, { answered: boolean; correct: boolean }>
  >({});
  const [shownHints, setShownHints] = useState<Record<string, boolean>>({});
  const [shownCorrections, setShownCorrections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (requestedTab) {
      setActiveTab(requestedTab);
    }
  }, [requestedTab]);

  useEffect(() => {
    setActiveExerciseIndex(0);
    setSelectedDifficultyFilter('all');
  }, [chapter.id]);

  const switchTab = (tab: 'cours' | 'memo' | 'exercices') => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  const allExercises = chapter.exercises || [];

  const filteredExercises = allExercises
    .map((exo, idx) => ({ exo, originalIndex: idx }))
    .filter(
      ({ exo }) =>
        selectedDifficultyFilter === 'all' || exo.difficulty === selectedDifficultyFilter
    );

  const currentExercise: Exercise | undefined = allExercises[activeExerciseIndex] || allExercises[0];

  const solvedCount = Object.keys(checkedState).filter(
    (id) => allExercises.some((e) => e.id === id) && checkedState[id]?.correct
  ).length;

  const bossMeta = chapter.bossMeta || { name: 'BOSS DU CHAPITRE', emoji: '🏆', xp: 150 };
  const targetToBeatBoss = Math.min(5, Math.max(1, allExercises.length));
  const bossDefeated = solvedCount >= targetToBeatBoss;

  const demoTemplate = getDemonstrationTemplate(chapter);

  const handleSelectAnswer = (exo: Exercise, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [exo.id]: answer }));
    handleCheckAnswer(exo, answer);
  };

  const handleCheckAnswer = (exo: Exercise, manualVal?: string) => {
    const val = (manualVal !== undefined ? manualVal : userAnswers[exo.id])?.trim() || '';
    if (!val) return;

    const cleanUser = val.replace(/\s+/g, '').replace(',', '.').toLowerCase();
    const cleanCorrect = exo.correctAnswer.replace(/\s+/g, '').replace(',', '.').toLowerCase();

    const isMatch = cleanUser === cleanCorrect;
    setCheckedState((prev) => ({
      ...prev,
      [exo.id]: { answered: true, correct: isMatch },
    }));

    if (isMatch) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
        });

        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } catch {}
    }
  };

  const goToNextExercise = () => {
    if (activeExerciseIndex < allExercises.length - 1) {
      setActiveExerciseIndex((prev) => prev + 1);
    }
  };

  const goToPrevExercise = () => {
    if (activeExerciseIndex > 0) {
      setActiveExerciseIndex((prev) => prev - 1);
    }
  };

  const availableDifficulties = [1, 2, 3, 4].filter((lvl) =>
    allExercises.some((e) => e.difficulty === lvl)
  );

  const DIFF_LABELS: Record<number, string> = {
    1: '🟢 Fondamental',
    2: '🟡 Entraînement',
    3: '🟠 Approfondissement',
    4: '🟣 Défis Gabon',
  };

  return (
    <div className="space-y-5 pb-20">
      {/* Chapter Title & Hero Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl relative overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl ${chapter.themeGradient || 'from-sky-500/10 to-transparent'} opacity-30 blur-2xl pointer-events-none`}
        />

        {/* Breadcrumb */}
        <div className="text-[11px] text-slate-400 font-semibold mb-2 flex flex-wrap items-center gap-1.5 relative z-10">
          <span>Cours de maths en 4ème</span>
          <span>›</span>
          <span>Rédaction structurée (Définitions · Propriétés · Exemples · Remarques)</span>
          <span>›</span>
          <span className="text-amber-300 font-bold truncate">{chapter.title}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 mb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-800/80 flex items-center gap-1.5">
              <span>🇬🇦</span>
              <span>{chapter.badge}</span>
            </span>
            <span className="text-sky-300 font-bold text-[11px] bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/60">
              Cours rédigé · Fiche PDF · Exercices
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1">
              <span>🌟</span>
              <span>{solvedCount} / {allExercises.length} réussis</span>
            </span>
            <span className="text-slate-400">~{chapter.readingTimeMinutes} min</span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white relative z-10">
          {chapter.title}
        </h2>
        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed relative z-10">
          {chapter.shortDesc}
        </p>

        {/* Parcours en 3 étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 relative z-10">
          <button
            onClick={() => switchTab('cours')}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'cours'
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-400/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Cours Rédigé & Dessins</span>
          </button>

          <button
            onClick={() => switchTab('memo')}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'memo'
                ? 'bg-sky-400 text-slate-950 shadow-md ring-2 ring-sky-400/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Fiche de révision (Debout)</span>
          </button>

          <button
            onClick={() => switchTab('exercices')}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'exercices'
                ? 'bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-500/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>3. Quiz & {allExercises.length} Exercices</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1 : LE COURS RÉDIGÉ (MODÈLE MATHOVORE + CIAM GABON)   */}
      {/* ========================================================= */}
      {activeTab === 'cours' && (
        <div className="space-y-5 animate-fade-in">
          {/* Introduction formelle du cours (Modèle rédaction Mathovore) */}
          <div className="rounded-3xl bg-slate-900 border border-sky-500/35 p-4 sm:p-5 shadow-lg space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-black text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-sky-400" />
                <span>Introduction de la leçon (4ème)</span>
              </div>
              <button
                onClick={() => switchTab('exercices')}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer shadow"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Passer aux exercices ({allExercises.length})</span>
              </button>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Dans ce cours de mathématiques en classe de <strong>4ème</strong>, nous étudions{' '}
              <strong className="text-amber-300">{chapter.title}</strong>. Tu retrouveras ci-dessous chaque{' '}
              <strong>Définition</strong>, chaque <strong>Propriété / Théorème</strong>, des{' '}
              <strong>Exemples d’application</strong> posés debout en colonne verticale, des{' '}
              <strong>Remarques</strong> méthodologiques ainsi que la rédaction d’une{' '}
              <strong>démonstration rigoureuse</strong> pour réussir tes devoirs surveillés.
            </p>
          </div>

          <MascotKoko speech={chapter.kokoSpeech} />

          {/* Key formulas banner */}
          <div className="rounded-3xl bg-slate-900 border-2 border-sky-500/40 p-4 sm:p-5 space-y-3 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
              <div className="text-xs font-black text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>L’essentiel à retenir (Formules en Colonne Verticale)</span>
              </div>
              <button
                onClick={() => switchTab('memo')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition cursor-pointer"
              >
                <span>📌 Ouvrir la fiche de cours</span>
                <span>➔</span>
              </button>
            </div>

            {chapter.memoSheet?.verticalFormulas && chapter.memoSheet.verticalFormulas.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                {chapter.memoSheet.verticalFormulas.slice(0, 3).map((vf, idx) => (
                  <StandingMathRenderer
                    key={idx}
                    expression={vf.steps.join('\n')}
                    subResult={vf.resultHighlight}
                    title={`Formule Debout : ${vf.name}`}
                    showColumnOp={false}
                  />
                ))}
              </div>
            ) : (
              <ul className="space-y-1.5 text-xs text-slate-200">
                {chapter.keyFormulas.map((form, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span className="font-mono font-semibold">{form}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* DESSIN ILLUSTRATIF DÉDIÉ AU CHAPITRE */}
          <ChapterCourseIllustration illustrationKey={chapter.illustrationKey} />

          {/* Structured Sections (Rédaction I., II., III. · Définition · Propriété · Exemple · Remarque) */}
          {chapter.sections.map((sec, secIdx) => (
            <div
              key={secIdx}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg space-y-3.5"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-amber-300 border-b border-slate-800 pb-2">
                {formatMathovoreHeading(sec.title, secIdx)}
              </h3>

              {/* Bloc Définition : */}
              <div className="p-4 rounded-2xl bg-slate-950/75 border-l-4 border-l-emerald-400 border border-slate-800/90 space-y-2 text-xs text-slate-200 leading-relaxed">
                <div className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                  Définition :
                </div>
                {sec.explanation.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>

              {/* Blocs Propriété / Théorème + Exemple + Remarque */}
              {sec.rules && (
                <div className="space-y-3 pt-1">
                  {sec.rules.map((rule, rIdx) => {
                    const isTheorem = /théorème|réciproque|pythagore|thalès|milieux/i.test(
                      rule.name + ' ' + chapter.title
                    );
                    return (
                      <div
                        key={rIdx}
                        className="p-4 rounded-2xl bg-slate-950/90 border-l-4 border-l-sky-400 border border-slate-800 space-y-2.5"
                      >
                        <div className="text-xs font-extrabold text-sky-300 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                          <span>
                            {isTheorem ? 'Théorème / Propriété :' : 'Propriété :'} {rule.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">{rule.description}</p>

                        <div className="pt-1">
                          <div className="text-[11px] font-extrabold text-amber-300 mb-1.5">
                            Exemple d’application (rédigé en colonne verticale) :
                          </div>
                          <StandingMathRenderer
                            expression={rule.example}
                            title={`Exemple : ${rule.name}`}
                            showColumnOp={true}
                          />
                        </div>

                        {rule.tip && (
                          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 flex items-start gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-amber-300">Remarque :</strong> {rule.tip}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Encadré Piège / Attention */}
              {sec.commonMistakes && sec.commonMistakes.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-rose-950/35 border-l-4 border-l-rose-500 border border-rose-500/30 space-y-1.5">
                  <div className="text-xs font-extrabold text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Remarque importante — Piège classique à éviter :</span>
                  </div>
                  <ul className="text-xs text-rose-200/95 space-y-1 list-disc list-inside">
                    {sec.commonMistakes.map((mis, mIdx) => (
                      <li key={mIdx}>{mis}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Rédaction type Mathovore 4ème : Initiation à la démonstration ("On sait que... Or... Donc...") */}
          <div className="rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-5 shadow-lg space-y-3">
            <div className="text-xs font-black text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Méthode de rédaction en 4ème (Démonstration : On sait que … Or … Donc …)</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-sky-400">1. On sait que :</div>
                <p className="text-slate-200 leading-relaxed">{demoTemplate.hypothesis}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-amber-400">2. Or :</div>
                <p className="text-slate-200 leading-relaxed">{demoTemplate.property}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-emerald-400">3. Donc :</div>
                <p className="text-slate-200 leading-relaxed">{demoTemplate.conclusion}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Passe aux {allExercises.length} Exercices d’Application Corrigés !</span>
              </div>
              <div className="text-xs text-slate-300">
                Affronte {bossMeta.emoji} <strong>{bossMeta.name}</strong> et vérifie tes connaissances.
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => switchTab('memo')}
                className="px-3.5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 font-bold text-xs transition cursor-pointer"
              >
                📌 Voir la fiche mémo
              </button>
              <button
                onClick={() => switchTab('exercices')}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs hover:bg-emerald-400 transition cursor-pointer shadow"
              >
                🎮 Faire les Exercices ({allExercises.length}) ➔
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2 : FICHE MÉMO DS DU CHAPITRE                         */}
      {/* ========================================================= */}
      {activeTab === 'memo' && (
        <ChapterMemoView
          chapter={chapter}
          onGoToExercises={() => switchTab('exercices')}
        />
      )}

      {/* ========================================================= */}
      {/* TAB 3 : QUIZ & EXERCICES CORRIGÉS ÉTAPE PAR ÉTAPE         */}
      {/* ========================================================= */}
      {activeTab === 'exercices' && currentExercise && (
        <div className="space-y-4 animate-fade-in">
          <div
            className={`rounded-2xl p-3.5 border flex flex-wrap items-center justify-between gap-2 ${
              bossDefeated
                ? 'bg-emerald-950/50 border-emerald-500/50'
                : 'bg-slate-900 border-indigo-500/30'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl select-none">{bossMeta.emoji}</span>
              <div className="text-xs">
                <div className="font-black text-white">
                  {bossDefeated
                    ? `🏆 Boss Vaincu : ${bossMeta.name} (+${bossMeta.xp} XP débloqués !)`
                    : `Défi du chapitre : ${bossMeta.name}`}
                </div>
                <div className="text-[11px] text-slate-400">
                  {bossDefeated
                    ? `Bravo champion(ne), continue jusqu’à ${allExercises.length}/${allExercises.length} pour le trophée Or !`
                    : `Réussis au moins ${targetToBeatBoss} exercices sur ${allExercises.length} pour vaincre le boss (${solvedCount}/${targetToBeatBoss})`}
                </div>
              </div>
            </div>
            <div className="text-xs font-mono font-black text-amber-300 bg-amber-950/70 px-3 py-1 rounded-full border border-amber-800/70">
              {solvedCount} / {allExercises.length} réussis
            </div>
          </div>

          {/* Difficulty Level Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-2 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 px-2">Niveau :</span>
            <button
              onClick={() => setSelectedDifficultyFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                selectedDifficultyFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Tous ({allExercises.length})
            </button>
            {availableDifficulties.map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setSelectedDifficultyFilter(lvl);
                  const firstMatch = allExercises.findIndex((e) => e.difficulty === lvl);
                  if (firstMatch >= 0) setActiveExerciseIndex(firstMatch);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                  selectedDifficultyFilter === lvl
                    ? 'bg-amber-400 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {DIFF_LABELS[lvl]}
              </button>
            ))}
          </div>

          {/* Numbered Buttons Carousel */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filteredExercises.map(({ exo, originalIndex }) => {
              const isCurrent = originalIndex === activeExerciseIndex;
              const isCorrect = checkedState[exo.id]?.correct;

              return (
                <button
                  key={exo.id}
                  onClick={() => setActiveExerciseIndex(originalIndex)}
                  className={`min-w-[44px] h-11 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer shrink-0 border ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-400/40'
                      : isCorrect
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/50'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                  title={exo.title}
                >
                  {exo.visualBadge ? <span className="text-xs">{exo.visualBadge}</span> : null}
                  <span>{originalIndex + 1}</span>
                  {isCorrect && <Check className="w-3 h-3 stroke-[3] text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* ACTIVE EXERCISE CARD */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {currentExercise.visualBadge && (
                  <span className="text-xl select-none" role="img" aria-label="badge">
                    {currentExercise.visualBadge}
                  </span>
                )}
                <span className="font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-800/60">
                  Exercice {activeExerciseIndex + 1} / {allExercises.length} · {currentExercise.difficultyLabel}
                </span>
              </div>

              <span className="text-slate-400 font-medium">
                {currentExercise.steps.length} étapes de correction
              </span>
            </div>

            <h3 className="text-base font-bold text-white">{currentExercise.title}</h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm font-medium text-slate-100 whitespace-pre-line leading-relaxed shadow-inner">
              {currentExercise.prompt}
            </div>

            <div className="p-3 rounded-2xl bg-slate-950/80 border border-amber-500/25 text-xs flex items-center justify-between gap-2">
              <span className="text-amber-300 font-bold flex items-center gap-1.5">
                <span>📐</span>
                <span>Conseil rédaction : Écris chaque étape debout en colonne avec les = bien alignés !</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-bold hidden sm:inline">
                Debout (non couché)
              </span>
            </div>

            <div>
              {!shownHints[currentExercise.id] ? (
                <button
                  onClick={() =>
                    setShownHints((prev) => ({ ...prev, [currentExercise.id]: true }))
                  }
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>💡 Le Coup de Pouce de Koko (Indice)</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2 animate-fade-in">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-amber-300">Indice :</strong>{' '}
                    {currentExercise.hint}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs text-slate-400 font-medium">À toi de jouer :</label>

              {currentExercise.options && currentExercise.options.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentExercise.options.map((opt, optIdx) => {
                    const isSelected = userAnswers[currentExercise.id] === opt;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(currentExercise, opt)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition cursor-pointer border ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow'
                            : 'bg-slate-950 text-slate-200 border-slate-800 hover:bg-slate-800'
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
                      currentExercise.unit
                        ? `Ex: 24 (en ${currentExercise.unit})`
                        : 'Tape ta réponse ici...'
                    }
                    value={userAnswers[currentExercise.id] || ''}
                    onChange={(e) =>
                      setUserAnswers((prev) => ({
                        ...prev,
                        [currentExercise.id]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => e.key === 'Enter' && handleCheckAnswer(currentExercise)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
                  />
                  <button
                    onClick={() => handleCheckAnswer(currentExercise)}
                    disabled={!userAnswers[currentExercise.id]?.trim()}
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow active:scale-95 shrink-0"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Valider</span>
                  </button>
                </div>
              )}
            </div>

            {checkedState[currentExercise.id]?.answered && (
              <div className="pt-2 animate-fade-in">
                {checkedState[currentExercise.id].correct ? (
                  <KokoSuccessCelebration
                    message="Akiba ! Réponse exacte !"
                    subMessage={`Tu as réussi l’exercice ${activeExerciseIndex + 1} du programme gabonais ! Consulte la rédaction modèle ci-dessous pour maîtriser parfaitement la méthode.`}
                  />
                ) : (
                  <KokoEncouragingFeedback
                    title="Pas tout à fait, mais tu y es presque !"
                    message="Une erreur ? Lis le point du cours ou clique sur le bouton ci-dessous pour découvrir la solution debout étape par étape !"
                    onShowSolution={() =>
                      setShownCorrections((prev) => ({
                        ...prev,
                        [currentExercise.id]: true,
                      }))
                    }
                  />
                )}
              </div>
            )}

            {!shownCorrections[currentExercise.id] ? (
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={() => switchTab('cours')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-sky-300 border border-sky-500/30 font-bold text-xs cursor-pointer"
                >
                  📘 Relire le point du cours
                </button>
                <button
                  onClick={() =>
                    setShownCorrections((prev) => ({
                      ...prev,
                      [currentExercise.id]: true,
                    }))
                  }
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Afficher la Correction Détaillée Étape par Étape</span>
                </button>
              </div>
            ) : (
              <div className="pt-2 animate-fade-in">
                <StepByStepCorrection
                  steps={currentExercise.steps}
                  finalResult={currentExercise.explanationFinal}
                  initialShowAll={false}
                />
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <button
                onClick={goToPrevExercise}
                disabled={activeExerciseIndex === 0}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 flex items-center gap-1 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Ex. précédent</span>
              </button>

              <span className="text-xs font-mono font-bold text-slate-400">
                {activeExerciseIndex + 1} / {allExercises.length}
              </span>

              <button
                onClick={goToNextExercise}
                disabled={activeExerciseIndex === allExercises.length - 1}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center gap-1 transition cursor-pointer shadow"
              >
                <span>Ex. suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        {onPrevChapter ? (
          <button
            onClick={onPrevChapter}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Chapitre précédent</span>
          </button>
        ) : (
          <div />
        )}

        {onNextChapter && (
          <button
            onClick={onNextChapter}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition cursor-pointer shadow"
          >
            <span>Chapitre suivant</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
