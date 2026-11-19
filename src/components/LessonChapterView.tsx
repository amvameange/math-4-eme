import React, { useState, useEffect, useMemo } from 'react';
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
  Scale,
  Compass,
  FlaskConical,
  ClipboardCheck,
  Table2,
  Layers,
  PlusCircle,
  FolderOpen,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter, CustomExercise, Exercise, ExerciseDifficulty } from '../types/math';
import {
  getChapterApplicationExercises,
  getChapterCourseExercisesByLevel,
  getAllChapterCourseExercises,
} from '../data/exercises/courseExerciseBank';
import { getBepcExercisesForChapter } from '../data/bepc';
import { ExerciseCheckRecord } from '../hooks/useLearningProgress';
import { StepByStepCorrection } from './StepByStepCorrection';
import { ChapterMemoView } from './ChapterMemoView';
import {
  MascotKoko,
  ChapterCourseIllustration,
} from './illustrations/GabonMathIllustrations';
import { MascotKokoPhysics } from './illustrations/GabonPhysicsIllustrations';
import {
  KokoSuccessCelebration,
  KokoEncouragingFeedback,
} from './illustrations/FunFeedbackIllustrations';
import { StandingMathRenderer } from './StandingMathRenderer';
import { FormattedMathText } from './FormattedMathText';
import {
  DemonstrationMethodFigure,
  ExerciseVisualFigure,
  FormulaVisualSchema,
} from './illustrations/PedagogicalFigures';
import { MultiQuestionRunner } from './MultiQuestionRunner';
import { playUiClickSound, scrollToSectionById } from '../utils/uiFeedback';

interface LessonChapterViewProps {
  chapter: Chapter;
  requestedTab?: 'cours' | 'memo' | 'exercices';
  onTabChange?: (tab: 'cours' | 'memo' | 'exercices') => void;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
  checkedState: Record<string, ExerciseCheckRecord>;
  onRecordAttempt: (exerciseId: string, isCorrect: boolean) => void;
  customExercises?: CustomExercise[];
  onOpenCustomCreator?: (chapterId: string) => void;
  onOpenCustomLibrary?: () => void;
}

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function formatSectionHeading(rawTitle: string, index: number): string {
  const roman = ROMAN_NUMERALS[index] || `${index + 1}`;
  const cleaned = rawTitle.replace(/^\s*(\d+|[IVX]+)\s*[\.\-\)]\s*/i, '').trim();
  return `${roman}. ${cleaned}`;
}

function getDemonstrationTemplate(chapter: Chapter): {
  hypothesis: string;
  property: string;
  conclusion: string;
} {
  if (chapter.subject === 'physique') {
    return {
      hypothesis: `1) Référentiel, Système & Conversions SI : Je précise le système étudié et le référentiel (galiléen ou repère de Frenet) pour « ${chapter.title.split(':')[0].trim()} », puis je convertis toutes les grandeurs dans le Système International (kg, m, s, C, T, V, A, Ω, H, F, Bq, mol/L).`,
      property: '2) Loi physique / Équation différentielle : J’énonce la loi du cours (2e loi de Newton, Lorentz, Kepler, mailles RC/RL/RLC, Soddy, Guldberg-Waage/pK_a) et je projette ou établis la relation littérale avant tout calcul numérique.',
      conclusion: '3) Application numérique & Unité : Je pose l’expression littérale isolée, j’effectue le calcul et je conclus par une phrase rigoureuse avec l’unité et les chiffres significatifs.',
    };
  }

  if (chapter.id.includes('arithmetique')) {
    return {
      hypothesis: 'On identifie les entiers relatifs, les congruences modulo n et le PGCD d = a ∧ b (algorithme d’Euclide).',
      property: 'Or, par le théorème de Bézout, le théorème de Gauss ou le petit théorème de Fermat, on caractérise les diviseurs ou les restes modulo p.',
      conclusion: 'Donc on obtient la famille complète de solutions (x_k ; y_k) avec k ∈ ℤ et on vérifie la réciproque.',
    };
  }
  if (chapter.id.includes('complexes')) {
    return {
      hypothesis: 'On écrit les affixes sous la forme adaptée au problème : algébrique (a + ib) pour les sommes/équations, ou exponentielle (r e^{iθ}) pour les produits, puissances et transformations.',
      property: 'Or, le module mesure une distance |z_B - z_A| = AB et l’argument mesure un angle orienté (u⃗, AB⃗) = arg(z_B - z_A) [2π].',
      conclusion: 'Donc on identifie l’écriture complexe z’ = az + b (ou l’ensemble des points M) avec précision.',
    };
  }
  if (chapter.id.includes('limites') || chapter.id.includes('derivation') || chapter.id.includes('ln-exp') || chapter.id.includes('suites') || chapter.id.includes('integral')) {
    return {
      hypothesis: 'On précise le domaine de définition et de dérivabilité (ou les conditions initiales d’une suite/équation différentielle), puis on lève les éventuelles formes indéterminées.',
      property: 'Or, on applique les théorèmes d’analyse de Terminale C (TVI, théorème de la bijection, IAF, croissances comparées, intégration par parties ou récurrence).',
      conclusion: 'Donc on dresse le tableau de variations complet et on justifie l’existence, l’unicité ou la convergence de la solution.',
    };
  }
  if (chapter.id.includes('espace') || chapter.id.includes('isometries') || chapter.id.includes('coniques')) {
    return {
      hypothesis: 'On caractérise les vecteurs normaux, directeurs, éléments invariants ou paramètres géométriques (foyer F, directrice D, excentricité e).',
      property: 'Or, on utilise le produit scalaire u⃗·v⃗, le produit vectoriel u⃗∧v⃗, la décomposition d’une isométrie ou l’équation réduite de la conique.',
      conclusion: 'Donc on obtient l’équation cartésienne, paramétrique ou la nature exacte de la transformation/courbe.',
    };
  }

  return {
    hypothesis: `On pose clairement les données et hypothèses du chapitre « ${chapter.title.split(':')[0].trim()} ».`,
    property: 'Or, on applique la propriété ou le théorème exact du programme de Terminale C en alignant les équivalences et égalités en colonne.',
    conclusion: 'Donc on obtient le résultat exact simplifié et interprété dans le contexte du sujet de Bac C.',
  };
}

export const LessonChapterView: React.FC<LessonChapterViewProps> = ({
  chapter,
  requestedTab,
  onTabChange,
  onNextChapter,
  onPrevChapter,
  checkedState,
  onRecordAttempt,
  customExercises = [],
  onOpenCustomCreator,
  onOpenCustomLibrary,
}) => {
  const [activeTab, setActiveTab] = useState<'cours' | 'memo' | 'exercices'>(requestedTab || 'cours');
  const [exerciseCategory, setExerciseCategory] = useState<'application' | 'cours' | 'bepc' | 'custom'>('application');
  const [courseLevel, setCourseLevel] = useState<ExerciseDifficulty>(1);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState<number>(0);

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [shownHints, setShownHints] = useState<Record<string, boolean>>({});
  const [shownCorrections, setShownCorrections] = useState<Record<string, boolean>>({});
  const [checklistChecked, setChecklistChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (requestedTab) {
      setActiveTab(requestedTab);
    }
  }, [requestedTab]);

  useEffect(() => {
    setActiveExerciseIndex(0);
    setExerciseCategory('application');
    setCourseLevel(1);
  }, [chapter.id]);

  const switchTab = (tab: 'cours' | 'memo' | 'exercices') => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
    scrollToSectionById(tab === 'exercices' ? 'lesson-exercise-section' : 'lesson-workspace', 55);
  };

  const isPhysics = chapter.subject === 'physique';
  const gradeLevel = chapter.gradeLevel || 'Terminale C';
  const gradeLabel = 'Terminale C · BAC';

  const appExercises = useMemo(() => getChapterApplicationExercises(chapter), [chapter]);
  const courseByLevel = useMemo(() => getChapterCourseExercisesByLevel(chapter), [chapter]);
  const allCourseExercises = useMemo(() => getAllChapterCourseExercises(chapter), [chapter]);
  const bepcChapterExercises = useMemo(
    () => getBepcExercisesForChapter(chapter.id, chapter.subject || 'maths'),
    [chapter.id, chapter.subject]
  );
  const chapterCustomAsExercises: Exercise[] = useMemo(
    () =>
      customExercises
        .filter((ce) => ce.chapterId === chapter.id)
        .map((ce) => ({
          id: ce.id,
          chapterId: ce.chapterId,
          title: ce.title,
          difficulty: ce.difficulty,
          difficultyLabel:
            ce.difficulty === 1
              ? 'Fondamental'
              : ce.difficulty === 2
              ? 'Entraînement'
              : ce.difficulty === 3
              ? 'Approfondissement'
              : 'Problème de synthèse',
          prompt: ce.prompt,
          hint: ce.hint,
          questionType: 'text',
          correctAnswer: ce.correctAnswer,
          unit: ce.unit,
          visualBadge: '📝',
          explanationFinal: ce.explanationFinal,
          steps: (ce.correctionSteps.length > 0
            ? ce.correctionSteps
            : ['Appliquer la formule du cours ligne par ligne.']
          ).map((line, i) => ({
            stepNumber: i + 1,
            title: `Étape ${i + 1}`,
            explanation: line,
            mathExpression: line,
          })),
        })),
    [customExercises, chapter.id]
  );

  const allBankExercises = useMemo(
    () => [...appExercises, ...allCourseExercises, ...bepcChapterExercises],
    [appExercises, allCourseExercises, bepcChapterExercises]
  );

  const displayedExercises =
    exerciseCategory === 'application'
      ? appExercises
      : exerciseCategory === 'cours'
      ? courseByLevel[courseLevel]
      : exerciseCategory === 'bepc'
      ? bepcChapterExercises
      : chapterCustomAsExercises;

  const currentExercise: Exercise | undefined =
    displayedExercises[activeExerciseIndex] || displayedExercises[0];

  const solvedCount = allBankExercises.filter((e) => checkedState[e.id]?.correct).length;
  const solvedAppCount = appExercises.filter((e) => checkedState[e.id]?.correct).length;
  const solvedCourseCount = allCourseExercises.filter((e) => checkedState[e.id]?.correct).length;
  const solvedBepcCount = bepcChapterExercises.filter((e) => checkedState[e.id]?.correct).length;

  const bossMeta = chapter.bossMeta || { name: 'BOSS DU CHAPITRE', emoji: '🏆', xp: 150 };
  const targetToBeatBoss = 4;
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
    playUiClickSound(isMatch ? 'success' : 'error');
    onRecordAttempt(exo.id, isMatch);

    if (isMatch) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
        });
      } catch {}
    }
  };

  const goToNextExercise = () => {
    if (activeExerciseIndex < displayedExercises.length - 1) {
      setActiveExerciseIndex((prev) => prev + 1);
      scrollToSectionById('chapter-exercise-card', 45);
    }
  };

  const goToPrevExercise = () => {
    if (activeExerciseIndex > 0) {
      setActiveExerciseIndex((prev) => prev - 1);
      scrollToSectionById('chapter-exercise-card', 45);
    }
  };

  const DIFF_LABELS: Record<ExerciseDifficulty, string> = {
    1: '🟢 Niv. 1 · Fondamental',
    2: '🟡 Niv. 2 · Entraînement',
    3: '🟠 Niv. 3 · Approfondissement',
    4: '🟣 Niv. 4 · Défi Gabon',
  };

  return (
    <div id="lesson-workspace" className="space-y-5 pb-20">
      {/* Chapter Title & Hero Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl relative overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl ${chapter.themeGradient || 'from-sky-500/10 to-transparent'} opacity-25 blur-2xl pointer-events-none`}
        />

        <div className="text-[11px] text-slate-400 font-semibold mb-1.5 flex flex-wrap items-center gap-1.5 relative z-10">
          <span>
            {isPhysics
              ? `Physique-Chimie ${gradeLabel} Gabon`
              : `Mathématiques ${gradeLabel} Gabon`}
          </span>
          <span>›</span>
          <span className="text-amber-300 font-bold">{chapter.badge}</span>
          <span>›</span>
          <span className="text-emerald-400 font-semibold tabular-nums">
            {solvedCount}/{allBankExercises.length} exercices validés (10 app. + 80 cours)
          </span>
          <span>·</span>
          <span>~{chapter.readingTimeMinutes} min</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white relative z-10">
          <FormattedMathText text={chapter.title} />
        </h2>
        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed relative z-10">
          <FormattedMathText text={chapter.shortDesc} />
        </p>

        {/* Parcours en 3 étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 relative z-10">
          <button
            onClick={() => switchTab('cours')}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'cours'
                ? 'bg-amber-400 text-slate-950 shadow-md ring-1 ring-amber-300'
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
                ? 'bg-sky-400 text-slate-950 shadow-md ring-1 ring-sky-300'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Fiche Mémo (Debout)</span>
          </button>

          <button
            onClick={() => switchTab('exercices')}
            className={`py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              activeTab === 'exercices'
                ? 'bg-emerald-500 text-slate-950 shadow-md ring-1 ring-emerald-300'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>3. Quiz & {allBankExercises.length} Exercices</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1 : LE COURS RÉDIGÉ                                   */}
      {/* ========================================================= */}
      {activeTab === 'cours' && (
        <div className="space-y-5 animate-fade-in">
          {/* Situation-Problème du Quotidien au Gabon (Nouveauté unifiée Physique & Maths) */}
          {chapter.realWorldHook && (
            <div className="rounded-3xl bg-slate-900 border border-amber-500/35 p-5 shadow-lg space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Situation-Problème au Gabon : <FormattedMathText text={chapter.realWorldHook.title} /></span>
                </div>
                <button
                  onClick={() => switchTab('exercices')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition cursor-pointer shadow whitespace-nowrap"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>Tester en exercices ({allBankExercises.length})</span>
                </button>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                <FormattedMathText text={chapter.realWorldHook.scenario} />
              </p>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-sky-300 font-bold">
                ❓ Problématique : <FormattedMathText text={chapter.realWorldHook.question} />
              </div>
            </div>
          )}

          {/* Mascotte Koko selon la matière & classe */}
          {isPhysics ? (
            <MascotKokoPhysics speech={chapter.kokoSpeech} gradeLevel={gradeLevel} />
          ) : (
            <MascotKoko speech={chapter.kokoSpeech} gradeLevel={gradeLevel} />
          )}

          {/* DESSIN ILLUSTRATIF DÉDIÉ AU CHAPITRE */}
          <ChapterCourseIllustration illustrationKey={chapter.illustrationKey} />

          {/* Tableau des Grandeurs, Symboles & Unités (Nouveauté unifiée Physique & Maths) */}
          {chapter.unitsTable && chapter.unitsTable.length > 0 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg space-y-3">
              <div className="text-xs font-black text-sky-300 uppercase tracking-wider flex items-center gap-2">
                <Table2 className="w-4 h-4 text-sky-400" />
                <span>
                  {isPhysics
                    ? 'Tableau des Grandeurs, Symboles, Unités & Appareils de Mesure'
                    : 'Tableau des Notations, Formules & Unités Clés'}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2 pr-3 font-bold">Symbole</th>
                      <th className="py-2 pr-3 font-bold">Grandeur / Notion</th>
                      <th className="py-2 pr-3 font-bold">Unité / Forme</th>
                      <th className="py-2 font-bold">Outil / Méthode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70">
                    {chapter.unitsTable.map((row, rIdx) => (
                      <tr key={rIdx} className="text-slate-200">
                        <td className="py-2.5 pr-3 font-mono font-black text-amber-300"><FormattedMathText text={row.symbol} /></td>
                        <td className="py-2.5 pr-3 font-semibold"><FormattedMathText text={row.quantity} /></td>
                        <td className="py-2.5 pr-3 font-mono text-emerald-300"><FormattedMathText text={row.unit} /></td>
                        <td className="py-2.5 text-slate-400"><FormattedMathText text={row.instrument || '—'} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key formulas banner */}
          <div className="rounded-3xl bg-slate-900 border border-sky-500/35 p-4 sm:p-5 space-y-3 shadow-xl">
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
                <span>→</span>
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
                    <span className="font-mono font-semibold"><FormattedMathText text={form} /></span>
                  </li>
                ))}
              </ul>
            )}

            <FormulaVisualSchema
              chapter={chapter}
              ruleName="Schéma des Formules Clés"
            />
          </div>

          {/* Expérience de Labo / Activité Pratique (Nouveauté unifiée Physique & Maths) */}
          {chapter.experimentOrActivity && (
            <div className="rounded-3xl bg-slate-900 border border-emerald-500/35 p-5 shadow-lg space-y-3">
              <div className="text-xs font-black text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>
                  {isPhysics ? 'Expérience de Laboratoire :' : 'Activité Pratique & Manipulation :'}{' '}
                  <FormattedMathText text={chapter.experimentOrActivity.title} />
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-black text-amber-300">Matériel utilisé :</div>
                  <ul className="space-y-1 text-slate-300 list-disc list-inside">
                    {chapter.experimentOrActivity.materials.map((m, idx) => (
                      <li key={idx}><FormattedMathText text={m} /></li>
                    ))}
                  </ul>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-black text-sky-300">Protocole & Observation :</div>
                  <p className="text-slate-200 leading-relaxed"><FormattedMathText text={chapter.experimentOrActivity.observation} /></p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-950/35 border border-emerald-500/30 space-y-1.5">
                  <div className="font-black text-emerald-300">Conclusion à retenir :</div>
                  <p className="text-emerald-100 leading-relaxed font-medium">
                    <FormattedMathText text={chapter.experimentOrActivity.conclusion} />
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Structured Sections */}
          {chapter.sections.map((sec, secIdx) => (
            <div
              key={secIdx}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg space-y-3.5"
            >
              <h3 className="text-base sm:text-lg font-extrabold text-amber-300 border-b border-slate-800 pb-2">
                <FormattedMathText text={formatSectionHeading(sec.title, secIdx)} />
              </h3>

              {/* Dessin & note illustrative de la section */}
              {sec.illustrationNote && (
                <div className="p-3.5 rounded-2xl bg-sky-950/35 border border-sky-500/30 space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dessin &amp; Schéma Illustratif de la Section</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed"><FormattedMathText text={sec.illustrationNote} /></p>
                </div>
              )}

              {/* Bloc Définition (sans border-l-4) */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-2 text-xs text-slate-200 leading-relaxed">
                <div className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                  Définition &amp; Notions Clés :
                </div>
                {sec.explanation.map((line, lIdx) => (
                  <p key={lIdx}><FormattedMathText text={line} /></p>
                ))}
              </div>

              {/* Blocs Propriété / Loi + Exemple + Remarque */}
              {sec.rules && (
                <div className="space-y-3 pt-1">
                  {sec.rules.map((rule, rIdx) => {
                    const isTheorem = /théorème|réciproque|loi|principe/i.test(
                      rule.name + ' ' + chapter.title
                    );
                    return (
                      <div
                        key={rIdx}
                        className="p-4 rounded-2xl bg-slate-950/90 border border-sky-500/30 space-y-2.5"
                      >
                        <div className="text-xs font-extrabold text-sky-300 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-sky-400" />
                          <span>
                            {isTheorem ? 'Loi / Théorème :' : 'Propriété :'} <FormattedMathText text={rule.name} />
                          </span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed"><FormattedMathText text={rule.description} /></p>

                        <div className="pt-1 space-y-2.5">
                          <div className="text-[11px] font-extrabold text-amber-300">
                            Exemple d’application (rédigé en colonne verticale) :
                          </div>
                          <StandingMathRenderer
                            expression={rule.example}
                            title={`Exemple : ${rule.name}`}
                            showColumnOp={true}
                          />
                          {rIdx === 0 && (
                            <FormulaVisualSchema chapter={chapter} ruleName={rule.name} />
                          )}
                        </div>

                        {rule.tip && (
                          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 flex items-start gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-amber-300">Remarque :</strong> <FormattedMathText text={rule.tip} />
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
                <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/35 space-y-1.5">
                  <div className="text-xs font-extrabold text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Remarque importante — Piège classique à éviter :</span>
                  </div>
                  <ul className="text-xs text-rose-200/95 space-y-1 list-disc list-inside">
                    {sec.commonMistakes.map((mis, mIdx) => (
                      <li key={mIdx}><FormattedMathText text={mis} /></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Méthode de rédaction */}
          <div className="rounded-3xl bg-slate-900 border border-indigo-500/35 p-5 shadow-lg space-y-3">
            <div className="text-xs font-black text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>
                {isPhysics
                  ? `Méthode de rédaction en Physique-Chimie ${gradeLabel} (Données · Formule · Calcul Debout · Unité)`
                  : `Méthode de rédaction en Mathématiques ${gradeLabel} (On sait que … Or … Donc …)`}
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-sky-400">
                  {isPhysics ? 'Étape 1 : Données' : '1. On sait que :'}
                </div>
                <p className="text-slate-200 leading-relaxed"><FormattedMathText text={demoTemplate.hypothesis} /></p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-amber-400">
                  {isPhysics ? 'Étape 2 & 3 : Formule & Calcul' : '2. Or :'}
                </div>
                <p className="text-slate-200 leading-relaxed"><FormattedMathText text={demoTemplate.property} /></p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-black text-emerald-400">
                  {isPhysics ? 'Étape 4 : Réponse + Unité' : '3. Donc :'}
                </div>
                <p className="text-slate-200 leading-relaxed"><FormattedMathText text={demoTemplate.conclusion} /></p>
              </div>
            </div>
            <DemonstrationMethodFigure
              chapterId={chapter.id}
              illustrationKey={chapter.illustrationKey}
              subject={chapter.subject}
              contextHint={chapter.title}
            />
          </div>

          {/* Checklist Révision Devoir Surveillé (Nouveauté unifiée Physique & Maths) */}
          {chapter.revisionChecklist && chapter.revisionChecklist.length > 0 && (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-lg space-y-3">
              <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4 text-amber-400" />
                <span>Checklist Avant le Devoir Surveillé (DS) — Coche ce que tu maîtrises :</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {chapter.revisionChecklist.map((item, idx) => {
                  const key = `${chapter.id}-chk-${idx}`;
                  const isDone = !!checklistChecked[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        setChecklistChecked((prev) => ({ ...prev, [key]: !prev[key] }))
                      }
                      className={`p-3 rounded-2xl text-left text-xs border transition cursor-pointer flex items-start gap-2 ${
                        isDone
                          ? 'bg-emerald-950/40 border-emerald-500/45 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/70'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDone
                            ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                            : 'border-slate-600'
                        }`}
                      >
                        {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                      <span className="leading-snug font-medium"><FormattedMathText text={item} /></span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="p-4 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Passe aux {allBankExercises.length} Exercices Corrigés (10 App. + 80 Cours) !</span>
              </div>
              <div className="text-xs text-slate-300">
                Affronte {bossMeta.emoji} <strong>{bossMeta.name}</strong> et progresse du Niveau 1 au Niveau 4.
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => switchTab('memo')}
                className="px-3.5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 font-bold text-xs transition cursor-pointer whitespace-nowrap"
              >
                📌 Voir la fiche mémo
              </button>
              <button
                onClick={() => switchTab('exercices')}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs hover:bg-emerald-400 transition cursor-pointer shadow whitespace-nowrap"
              >
                🎮 Faire les Exercices ({allBankExercises.length}) ➔
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
      {activeTab === 'exercices' && (
        <div id="lesson-exercise-section" className="space-y-4 animate-fade-in">
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
                <div className="text-[11px] text-slate-400 tabular-nums">
                  {bossDefeated
                    ? `Bravo champion(ne) ! Poursuis les 10 exercices d’application et les 80 exercices progressifs du cours.`
                    : `Réussis au moins ${targetToBeatBoss} exercices sur ${allBankExercises.length} pour vaincre le boss (${solvedCount}/${targetToBeatBoss})`}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {onOpenCustomCreator && (
                <button
                  type="button"
                  onClick={() => onOpenCustomCreator(chapter.id)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>+ Ajouter un exercice</span>
                </button>
              )}
              <div className="text-xs font-mono font-black text-amber-300 tabular-nums">
                {solvedCount} / {allBankExercises.length} réussis
              </div>
            </div>
          </div>

          {/* Sélecteur : 10 Application VS 80 Cours VS 10 Type BAC C VS Mes Exercices ajoutés */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-2.5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => {
                  setExerciseCategory('application');
                  setActiveExerciseIndex(0);
                  scrollToSectionById('chapter-exercise-card', 45);
                }}
                className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                  exerciseCategory === 'application'
                    ? 'bg-emerald-500/15 border-emerald-400 text-emerald-200 ring-1 ring-emerald-400/50'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs font-black">🎯 Application (10)</div>
                  <div className="text-[11px] text-slate-400">
                    10 questions · Très difficile · 10 étapes
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold tabular-nums text-emerald-300 shrink-0">
                  {solvedAppCount}/10
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setExerciseCategory('cours');
                  setActiveExerciseIndex(0);
                  scrollToSectionById('chapter-exercise-card', 45);
                }}
                className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                  exerciseCategory === 'cours'
                    ? 'bg-amber-400/15 border-amber-400 text-amber-200 ring-1 ring-amber-400/50'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs font-black flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Exercices du Cours (80)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    10 questions / ex. · Très difficile
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold tabular-nums text-amber-300 shrink-0">
                  {solvedCourseCount}/80
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setExerciseCategory('bepc');
                  setActiveExerciseIndex(0);
                  scrollToSectionById('chapter-exercise-card', 45);
                }}
                className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                  exerciseCategory === 'bepc'
                    ? 'bg-rose-500/15 border-rose-400 text-rose-200 ring-1 ring-rose-400/50'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs font-black flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-rose-400" />
                    <span>Type BAC C (10)</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    10 questions · Niveau BAC C avancé
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold tabular-nums text-rose-300 shrink-0">
                  {solvedBepcCount}/10
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setExerciseCategory('custom');
                  setActiveExerciseIndex(0);
                  scrollToSectionById('chapter-exercise-card', 45);
                }}
                className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                  exerciseCategory === 'custom'
                    ? 'bg-indigo-500/15 border-indigo-400 text-indigo-200 ring-1 ring-indigo-400/50'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs font-black flex items-center gap-1.5">
                    <FolderOpen className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Mes Exercices ({chapterCustomAsExercises.length})</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Ajoutés &amp; sauvegardés par toi
                  </div>
                </div>
                <span className="text-xs font-mono font-extrabold tabular-nums text-indigo-300 shrink-0">
                  {chapterCustomAsExercises.length}
                </span>
              </button>
            </div>

            {exerciseCategory === 'cours' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-800/80">
                {([1, 2, 3, 4] as ExerciseDifficulty[]).map((lvl) => {
                  const lvlList = courseByLevel[lvl];
                  const lvlSolved = lvlList.filter((e) => checkedState[e.id]?.correct).length;
                  const isActive = courseLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setCourseLevel(lvl);
                        setActiveExerciseIndex(0);
                        scrollToSectionById('chapter-exercise-card', 45);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center justify-between gap-1 ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{DIFF_LABELS[lvl]}</span>
                      <span
                        className={`text-[10px] font-mono tabular-nums shrink-0 ${
                          isActive ? 'text-slate-950 font-black' : 'text-slate-400'
                        }`}
                      >
                        {lvlSolved}/20
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {currentExercise ? (
            <>
              {/* Numbered Buttons Carousel */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {displayedExercises.map((exo, idx) => {
                  const isCurrent = idx === activeExerciseIndex;
                  const isCorrect = checkedState[exo.id]?.correct;

                  return (
                    <button
                      key={exo.id}
                      onClick={() => {
                        setActiveExerciseIndex(idx);
                        scrollToSectionById('chapter-exercise-card', 45);
                      }}
                      className={`min-w-[44px] h-11 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer shrink-0 border tabular-nums ${
                        isCurrent
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-1 ring-amber-300'
                          : isCorrect
                          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/50'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                      title={exo.title}
                    >
                      {exo.visualBadge ? <span className="text-xs">{exo.visualBadge}</span> : null}
                      <span>{idx + 1}</span>
                      {isCorrect && <Check className="w-3 h-3 stroke-[3] text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE EXERCISE CARD */}
              <div id="chapter-exercise-card" className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs tabular-nums">
                  <div className="flex flex-wrap items-center gap-2">
                    {currentExercise.visualBadge && (
                      <span className="text-xl select-none">{currentExercise.visualBadge}</span>
                    )}
                    <span className="font-extrabold text-amber-300">
                      {exerciseCategory === 'application'
                        ? `Application ${activeExerciseIndex + 1} / 10`
                        : exerciseCategory === 'cours'
                        ? `Cours Niv. ${courseLevel} · Exercice ${activeExerciseIndex + 1} / 20`
                        : exerciseCategory === 'bepc'
                        ? `Type BAC C ${activeExerciseIndex + 1} / ${displayedExercises.length}`
                        : `Mon Exercice ${activeExerciseIndex + 1} / ${displayedExercises.length}`}{' '}
                      · {currentExercise.difficultyLabel}
                    </span>
                    {currentExercise.originCountry && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-500/15 border border-rose-500/35 text-rose-200 font-bold text-[11px]">
                        {currentExercise.originCountry}
                        {currentExercise.originYear ? ` · ${currentExercise.originYear}` : ''}
                        {currentExercise.bepcPoints ? ` · ${currentExercise.bepcPoints}` : ''}
                      </span>
                    )}
                  </div>

                  <span className="text-slate-400 font-medium">
                    {currentExercise.steps.length} étapes de correction
                  </span>
                </div>

                <h3 className="text-base font-bold text-white"><FormattedMathText text={currentExercise.title} /></h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm font-medium text-slate-100 whitespace-pre-line leading-relaxed shadow-inner">
              <FormattedMathText text={currentExercise.prompt} />
            </div>

            <ExerciseVisualFigure
              chapterId={chapter.id}
              illustrationKey={chapter.illustrationKey}
              subject={chapter.subject}
              title={currentExercise.title}
              prompt={currentExercise.prompt}
            />

            <div className="p-3 rounded-2xl bg-slate-950/80 border border-amber-500/25 text-xs flex items-center justify-between gap-2">
              <span className="text-amber-300 font-bold flex items-center gap-1.5">
                <span>📐</span>
                <span>
                  {isPhysics
                    ? 'Conseil Physique : Données ➔ Formule ➔ Calcul debout ➔ Phrase avec unité !'
                    : 'Conseil rédaction : Écris chaque étape debout en colonne avec les = bien alignés !'}
                </span>
              </span>
            </div>

            {currentExercise.subQuestions && currentExercise.subQuestions.length > 0 ? (
              <MultiQuestionRunner
                exercise={currentExercise}
                exerciseId={currentExercise.id}
                subject={chapter.subject}
                chapterId={chapter.id}
                illustrationKey={chapter.illustrationKey}
                checkedState={checkedState}
                onRecordAttempt={onRecordAttempt}
              />
            ) : (
              <>
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
                        <FormattedMathText text={currentExercise.hint} />
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
                            data-sound="custom"
                            onClick={() => handleSelectAnswer(currentExercise, opt)}
                            className={`p-3 rounded-xl text-xs font-semibold text-left transition cursor-pointer border ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow'
                                : 'bg-slate-950 text-slate-200 border-slate-800 hover:bg-slate-800'
                            }`}
                          >
                            <FormattedMathText text={opt} />
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
                        data-sound="custom"
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
                      chapterId={chapter.id}
                      illustrationKey={chapter.illustrationKey}
                      subject={chapter.subject}
                      contextHint={`${currentExercise.title} ${currentExercise.prompt}`}
                    />
                  </div>
                )}
              </>
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

              <span className="text-xs font-mono font-bold text-slate-400 tabular-nums">
                {activeExerciseIndex + 1} / {displayedExercises.length}
              </span>

              <button
                onClick={goToNextExercise}
                disabled={activeExerciseIndex >= displayedExercises.length - 1}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center gap-1 transition cursor-pointer shadow"
              >
                <span>Ex. suivant</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
            </>
          ) : (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center space-y-3 shadow-xl">
              <div className="text-3xl">📝</div>
              <h3 className="text-base font-black text-white">
                Aucun exercice ajouté pour ce chapitre pour le moment
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Ajoute tes propres exercices avec leur correction détaillée pour ce chapitre et consulte-les ici à tout moment.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {onOpenCustomCreator && (
                  <button
                    type="button"
                    onClick={() => onOpenCustomCreator(chapter.id)}
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 cursor-pointer shadow"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Ajouter un exercice avec correction</span>
                  </button>
                )}
                {onOpenCustomLibrary && (
                  <button
                    type="button"
                    onClick={onOpenCustomLibrary}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <FolderOpen className="w-4 h-4 text-indigo-300" />
                    <span>Voir tous mes exercices ({customExercises.length})</span>
                  </button>
                )}
              </div>
            </div>
          )}
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
