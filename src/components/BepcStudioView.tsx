import React, { useState, useEffect, useMemo } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileSpreadsheet,
  FolderArchive,
  Globe2,
  GraduationCap,
  HelpCircle,
  Layers,
  ScrollText,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  BepcCountryId,
  Chapter,
  DomainId,
  Exercise,
  ExerciseDifficulty,
  SubjectId,
} from '../types/math';
import { MATH_3EME_CHAPTERS, MATH_3EME_DOMAINS } from '../data/math3emeCurriculum';
import { PHYSICS_3EME_CHAPTERS, PHYSICS_3EME_DOMAINS } from '../data/physics3emeCurriculum';
import {
  BEPC_COUNTRY_META,
  getBepcArchivePapers,
  getBepcExercisesForChapter,
  getBepcExamProblems,
} from '../data/bepc';
import { ExerciseCheckRecord } from '../hooks/useLearningProgress';
import { StepByStepCorrection } from './StepByStepCorrection';
import { ExerciseVisualFigure } from './illustrations/PedagogicalFigures';
import {
  KokoEncouragingFeedback,
  KokoSuccessCelebration,
} from './illustrations/FunFeedbackIllustrations';

export type BepcStudioMode = 'chapitre' | 'examen' | 'epreuves';
type ArchiveDecade = 'all' | '2020s' | '2010s' | '2000s' | '1990s';

interface BepcStudioViewProps {
  subject: SubjectId;
  checkedState: Record<string, ExerciseCheckRecord>;
  onRecordAttempt: (exerciseId: string, isCorrect: boolean) => void;
  initialMode?: BepcStudioMode;
  initialChapterId?: string;
}

const DIFF_LABELS: Record<ExerciseDifficulty, string> = {
  1: '🟢 Niv. 1 · Fondamental',
  2: '🟡 Niv. 2 · Entraînement',
  3: '🟠 Niv. 3 · Approfondissement',
  4: '🟣 Niv. 4 · Synthèse BEPC',
};

const DIFF_SHORT: Record<ExerciseDifficulty, string> = {
  1: 'Niv.1',
  2: 'Niv.2',
  3: 'Niv.3',
  4: 'Niv.4',
};

export const BepcStudioView: React.FC<BepcStudioViewProps> = ({
  subject,
  checkedState,
  onRecordAttempt,
  initialMode = 'chapitre',
  initialChapterId,
}) => {
  const [mode, setMode] = useState<BepcStudioMode>(initialMode);
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');

  const chapters: Chapter[] = useMemo(
    () => (subject === 'physique' ? PHYSICS_3EME_CHAPTERS : MATH_3EME_CHAPTERS),
    [subject]
  );
  const domains = useMemo(
    () => (subject === 'physique' ? PHYSICS_3EME_DOMAINS : MATH_3EME_DOMAINS),
    [subject]
  );

  const [selectedChapterId, setSelectedChapterId] = useState<string>(
    initialChapterId || chapters[0].id
  );
  const [chapterExIndex, setChapterExIndex] = useState<number>(0);

  const [originFilter, setOriginFilter] = useState<'all' | 'gabon' | 'international'>('all');
  const [examIndex, setExamIndex] = useState<number>(0);

  const [archiveCountryFilter, setArchiveCountryFilter] = useState<BepcCountryId | 'all'>('all');
  const [archiveDecadeFilter, setArchiveDecadeFilter] = useState<ArchiveDecade>('all');
  const [archiveYearFilter, setArchiveYearFilter] = useState<number | 'all'>('all');
  const [archiveSortDesc, setArchiveSortDesc] = useState<boolean>(true);
  const [archivePaperIndex, setArchivePaperIndex] = useState<number>(0);
  const [archivePartIndex, setArchivePartIndex] = useState<number>(0);

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [shownHints, setShownHints] = useState<Record<string, boolean>>({});
  const [shownCorrections, setShownCorrections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (initialChapterId && chapters.some((c) => c.id === initialChapterId)) {
      setSelectedChapterId(initialChapterId);
    } else if (!chapters.some((c) => c.id === selectedChapterId)) {
      setSelectedChapterId(chapters[0].id);
    }
    setSelectedDomain('all');
    setChapterExIndex(0);
    setExamIndex(0);
    setArchivePaperIndex(0);
    setArchivePartIndex(0);
  }, [subject, chapters, initialChapterId]);

  const filteredChapters = useMemo(
    () =>
      selectedDomain === 'all'
        ? chapters
        : chapters.filter((c) => c.domainId === selectedDomain),
    [chapters, selectedDomain]
  );

  const currentChapter =
    chapters.find((c) => c.id === selectedChapterId) || filteredChapters[0] || chapters[0];

  const chapterBepcExercises = useMemo(
    () => getBepcExercisesForChapter(currentChapter.id, subject),
    [currentChapter.id, subject]
  );

  const allExamProblems = useMemo(() => getBepcExamProblems(subject), [subject]);

  const filteredExamProblems = useMemo(() => {
    if (originFilter === 'gabon') {
      return allExamProblems.filter((p) => (p.originCountry || '').includes('Gabon'));
    }
    if (originFilter === 'international') {
      return allExamProblems.filter((p) => !(p.originCountry || '').includes('Gabon'));
    }
    return allExamProblems;
  }, [allExamProblems, originFilter]);

  const allArchivePapers = useMemo(() => getBepcArchivePapers(subject), [subject]);

  const filteredArchivePapers = useMemo(() => {
    const filtered = allArchivePapers.filter((paper) => {
      if (archiveCountryFilter !== 'all' && paper.countryId !== archiveCountryFilter) {
        return false;
      }
      if (archiveYearFilter !== 'all' && paper.year !== archiveYearFilter) {
        return false;
      }
      if (archiveDecadeFilter === '2020s') return paper.year >= 2020;
      if (archiveDecadeFilter === '2010s') return paper.year >= 2010 && paper.year <= 2019;
      if (archiveDecadeFilter === '2000s') return paper.year >= 2000 && paper.year <= 2009;
      if (archiveDecadeFilter === '1990s') return paper.year >= 1990 && paper.year <= 1999;
      return true;
    });
    return [...filtered].sort((a, b) => (archiveSortDesc ? b.year - a.year : a.year - b.year));
  }, [allArchivePapers, archiveCountryFilter, archiveYearFilter, archiveDecadeFilter, archiveSortDesc]);

  const safeArchivePaperIndex = Math.min(
    archivePaperIndex,
    Math.max(0, filteredArchivePapers.length - 1)
  );
  const currentArchivePaper = filteredArchivePapers[safeArchivePaperIndex];
  const archiveParts = currentArchivePaper?.parts || [];

  const activeList =
    mode === 'chapitre'
      ? chapterBepcExercises
      : mode === 'examen'
      ? filteredExamProblems
      : archiveParts;
  const activeIdx =
    mode === 'chapitre'
      ? chapterExIndex
      : mode === 'examen'
      ? examIndex
      : Math.min(archivePartIndex, Math.max(0, archiveParts.length - 1));
  const setActiveIdx =
    mode === 'chapitre'
      ? setChapterExIndex
      : mode === 'examen'
      ? setExamIndex
      : setArchivePartIndex;
  const currentExercise: Exercise | undefined = activeList[activeIdx] || activeList[0];

  // Progress counters
  const totalChapterBepcCount = chapters.length * 10;
  const solvedChapterBepcCount = chapters.reduce((sum, ch) => {
    const list = getBepcExercisesForChapter(ch.id, subject);
    return sum + list.filter((e) => checkedState[e.id]?.correct).length;
  }, 0);

  const solvedExamCount = allExamProblems.filter((e) => checkedState[e.id]?.correct).length;

  const totalArchivePartsCount = allArchivePapers.reduce((sum, p) => sum + p.parts.length, 0);
  const solvedArchivePartsCount = allArchivePapers.reduce(
    (sum, p) => sum + p.parts.filter((part) => checkedState[part.id]?.correct).length,
    0
  );

  const handleCheckAnswer = (exo: Exercise, manualVal?: string) => {
    const val = (manualVal !== undefined ? manualVal : userAnswers[exo.id])?.trim() || '';
    if (!val) return;

    const cleanUser = val.replace(/\s+/g, '').replace(',', '.').toLowerCase();
    const cleanCorrect = exo.correctAnswer.replace(/\s+/g, '').replace(',', '.').toLowerCase();

    const isMatch = cleanUser === cleanCorrect;
    onRecordAttempt(exo.id, isMatch);

    if (isMatch) {
      try {
        confetti({ particleCount: 65, spread: 75, origin: { y: 0.65 } });
      } catch {}
    }
  };

  const handleSelectQcm = (exo: Exercise, opt: string) => {
    setUserAnswers((prev) => ({ ...prev, [exo.id]: opt }));
    handleCheckAnswer(exo, opt);
  };

  const activeChapterForFigure =
    chapters.find((c) => c.id === currentExercise?.chapterId) || currentChapter;

  return (
    <div className="space-y-5 pb-16">
      {/* Banner Header */}
      <section className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[11px] font-black uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>
                Préparation Officielle BEPC 3ème ·{' '}
                {subject === 'physique' ? 'Physique-Chimie' : 'Mathématiques'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Annales &amp; Sujets Type BEPC Gabon et International
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Entraîne-toi sur les sujets officiels et les{' '}
              <strong className="text-emerald-300">épreuves BEPC de 1990 à 2026</strong> (🇬🇦 Gabon,
              🇫🇷 France, 🇸🇳 Sénégal, 🇨🇲 Cameroun, 🇧🇯 Bénin, 🇹🇬 Togo) avec difficulté progressive et
              correction détaillée étape par étape.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs tabular-nums">
            <div className="px-3 py-2 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold uppercase">
                Par Chapitre (10 / ch.)
              </div>
              <div className="text-sm font-black text-sky-300">
                {solvedChapterBepcCount} / {totalChapterBepcCount} réussis
              </div>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold uppercase">
                Examen BEPC (Problèmes)
              </div>
              <div className="text-sm font-black text-amber-300">
                {solvedExamCount} / {allExamProblems.length} réussis
              </div>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold uppercase">
                Épreuves 1990–2026
              </div>
              <div className="text-sm font-black text-emerald-300">
                {solvedArchivePartsCount} / {totalArchivePartsCount} parties
              </div>
            </div>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setMode('chapitre')}
            className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-2.5 ${
              mode === 'chapitre'
                ? 'bg-sky-500/15 border-sky-400 text-white ring-1 ring-sky-400/50 shadow'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'chapitre'
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-800 text-sky-300'
                }`}
              >
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black truncate">
                  Type BEPC par Chapitre
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  10 sujets / ch. · Progression Niv. 1 ➔ 4
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-black text-sky-300 shrink-0 tabular-nums">
              {chapters.length}×10
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode('examen')}
            className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-2.5 ${
              mode === 'examen'
                ? 'bg-amber-400/15 border-amber-400 text-white ring-1 ring-amber-400/50 shadow'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'examen'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 text-amber-300'
                }`}
              >
                <ScrollText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black truncate">
                  Examen BEPC (Problèmes)
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  20 grands problèmes d’examen corrigés
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-black text-amber-300 shrink-0 tabular-nums">
              {allExamProblems.length} pb.
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode('epreuves')}
            className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-2.5 ${
              mode === 'epreuves'
                ? 'bg-emerald-500/15 border-emerald-400 text-white ring-1 ring-emerald-400/50 shadow'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  mode === 'epreuves'
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-slate-800 text-emerald-300'
                }`}
              >
                <FolderArchive className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black truncate">
                  Épreuves BEPC 1990–2026
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  6 pays × 37 années · 4 exercices complets / sujet
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-black text-emerald-300 shrink-0 tabular-nums">
              {allArchivePapers.length} sujets
            </span>
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SELECTORS SECTION                                         */}
      {/* ========================================================= */}
      {mode === 'chapitre' ? (
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-black text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-sky-400" />
              <span>Choisis ton chapitre ({chapters.length} chapitres × 10 sujets BEPC)</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedDomain('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedDomain === 'all'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                Tous ({chapters.length})
              </button>
              {domains.map((dom) => (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => {
                    setSelectedDomain(dom.id);
                    const firstInDom = chapters.find((c) => c.domainId === dom.id);
                    if (firstInDom) {
                      setSelectedChapterId(firstInDom.id);
                      setChapterExIndex(0);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedDomain === dom.id
                      ? 'bg-sky-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {dom.shortTitle || dom.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredChapters.map((ch) => {
              const isSelected = ch.id === currentChapter.id;
              const list = getBepcExercisesForChapter(ch.id, subject);
              const chSolved = list.filter((e) => checkedState[e.id]?.correct).length;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    setChapterExIndex(0);
                  }}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-sky-500/15 border-sky-400 text-white ring-1 ring-sky-400/50 shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-amber-300 truncate">{ch.badge}</div>
                    <div className="text-xs font-extrabold truncate">{ch.title}</div>
                  </div>
                  <span
                    className={`text-[11px] font-mono font-black px-2 py-1 rounded-lg shrink-0 tabular-nums ${
                      chSolved === 10
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-900 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {chSolved}/10
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ) : mode === 'examen' ? (
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 className="w-4 h-4" />
              <span>
                20 Problèmes Complets Type Examen BEPC (
                {subject === 'physique' ? 'Physique-Chimie' : 'Mathématiques'})
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: `Tous (${allExamProblems.length})` },
                { id: 'gabon', label: '🇬🇦 BEPC Gabon' },
                { id: 'international', label: '🌍 Autres pays' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setOriginFilter(f.id as 'all' | 'gabon' | 'international');
                    setExamIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                    originFilter === f.id
                      ? 'bg-amber-400 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1">
            {filteredExamProblems.map((prob, idx) => {
              const isSelected = idx === activeIdx;
              const isSolved = checkedState[prob.id]?.correct;
              return (
                <button
                  key={prob.id}
                  type="button"
                  onClick={() => setExamIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-amber-400/15 border-amber-400 text-white ring-1 ring-amber-400/50'
                      : isSolved
                      ? 'bg-emerald-950/35 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-[10px] font-bold">
                    <span className="text-amber-300 truncate">
                      {prob.originCountry} · {prob.originYear}
                    </span>
                    {isSolved ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <span className="text-slate-400 shrink-0">{prob.bepcPoints}</span>
                    )}
                  </div>
                  <div className="text-xs font-extrabold line-clamp-2">{prob.title}</div>
                </button>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3.5 shadow-lg">
          {/* Archive Header & Decade/Year/Sort controls */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>
                Grille complète 6 pays × 37 années (1990–2026) ·{' '}
                {subject === 'physique' ? 'Physique-Chimie' : 'Mathématiques'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <select
                aria-label="Filtrer par année"
                value={archiveYearFilter}
                onChange={(e) => {
                  const v = e.target.value === 'all' ? 'all' : Number(e.target.value);
                  setArchiveYearFilter(v);
                  if (v !== 'all') setArchiveDecadeFilter('all');
                  setArchivePaperIndex(0);
                  setArchivePartIndex(0);
                }}
                className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-slate-950 text-emerald-300 border border-slate-700 focus:border-emerald-400 focus:outline-none cursor-pointer tabular-nums"
              >
                <option value="all">Année : Toutes (1990–2026)</option>
                {Array.from({ length: 37 }, (_, i) => 2026 - i).map((yr) => (
                  <option key={yr} value={yr}>
                    Session {yr} (6 pays)
                  </option>
                ))}
              </select>

              {(
                [
                  { id: 'all', label: '1990–2026' },
                  { id: '2020s', label: '2020–2026' },
                  { id: '2010s', label: '2010–2019' },
                  { id: '2000s', label: '2000–2009' },
                  { id: '1990s', label: '1990–1999' },
                ] as { id: ArchiveDecade; label: string }[]
              ).map((dec) => (
                <button
                  key={dec.id}
                  type="button"
                  onClick={() => {
                    setArchiveDecadeFilter(dec.id);
                    setArchiveYearFilter('all');
                    setArchivePaperIndex(0);
                    setArchivePartIndex(0);
                  }}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                    archiveDecadeFilter === dec.id && archiveYearFilter === 'all'
                      ? 'bg-emerald-400 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {dec.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  setArchiveSortDesc((prev) => !prev);
                  setArchivePaperIndex(0);
                  setArchivePartIndex(0);
                }}
                className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold bg-slate-950 text-amber-300 border border-slate-800 hover:bg-slate-800 transition cursor-pointer whitespace-nowrap shrink-0 tabular-nums"
                title="Inverser l’ordre chronologique"
              >
                {archiveSortDesc ? '2026 ➔ 1990' : '1990 ➔ 2026'}
              </button>
            </div>
          </div>

          <div className="px-3 py-2 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
            <strong className="text-emerald-300">Format complet d’entraînement :</strong> chaque
            paire (pays × année) de 1990 à 2026 propose une épreuve structurée complète de 4
            exercices / 20 pts reconstituée selon le programme officiel (non copie littérale d’archive
            ministérielle).
          </div>

          {/* Country Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => {
                setArchiveCountryFilter('all');
                setArchivePaperIndex(0);
                setArchivePartIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                archiveCountryFilter === 'all'
                  ? 'bg-sky-500 text-slate-950 shadow'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              🌍 Tous les pays ({allArchivePapers.length})
            </button>
            {(Object.keys(BEPC_COUNTRY_META) as BepcCountryId[]).map((cid) => {
              const meta = BEPC_COUNTRY_META[cid];
              const count = allArchivePapers.filter((p) => p.countryId === cid).length;
              return (
                <button
                  key={cid}
                  type="button"
                  onClick={() => {
                    setArchiveCountryFilter(cid);
                    setArchivePaperIndex(0);
                    setArchivePartIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                    archiveCountryFilter === cid
                      ? 'bg-sky-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {meta.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Archive Papers Grid */}
          {filteredArchivePapers.length === 0 ? (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
              Aucune session trouvée pour ce filtre combiné. Essaie « 1990–2026 » ou « Tous les pays ».
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1">
              {filteredArchivePapers.map((paper, idx) => {
                const isSelected = idx === safeArchivePaperIndex;
                const solvedParts = paper.parts.filter((pt) => checkedState[pt.id]?.correct).length;
                const allDone = solvedParts === paper.parts.length;
                return (
                  <button
                    key={paper.id}
                    type="button"
                    onClick={() => {
                      setArchivePaperIndex(idx);
                      setArchivePartIndex(0);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer space-y-1 ${
                      isSelected
                        ? 'bg-emerald-400/15 border-emerald-400 text-white ring-1 ring-emerald-400/50'
                        : allDone
                        ? 'bg-emerald-950/35 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 text-[10px] font-bold tabular-nums">
                      <span className="text-emerald-300 truncate">{paper.countryLabel}</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 shrink-0">
                        {paper.year}
                      </span>
                    </div>
                    <div className="text-xs font-extrabold truncate">{paper.examTitle}</div>
                    <div className="flex items-center justify-between gap-1 text-[10px] text-slate-400 tabular-nums">
                      <span className="truncate">{paper.themeSummary}</span>
                      <span
                        className={`font-mono font-bold shrink-0 ${
                          allDone ? 'text-emerald-400' : 'text-slate-300'
                        }`}
                      >
                        {solvedParts}/{paper.parts.length}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Selected Exam Paper Official Header & 4-Part Switcher */}
          {currentArchivePaper && (
            <div className="rounded-2xl bg-slate-950 border border-emerald-500/35 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/15 border border-emerald-500/35 font-black text-emerald-300">
                      {currentArchivePaper.countryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-400/15 border border-amber-400/35 font-black text-amber-300 tabular-nums">
                      Session {currentArchivePaper.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center gap-1 tabular-nums">
                      <Clock className="w-3 h-3 text-sky-400" />
                      {currentArchivePaper.duration}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 font-black tabular-nums">
                      Total : {currentArchivePaper.totalPoints} pts ({currentArchivePaper.parts.length} parties)
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    {currentArchivePaper.examTitle} — Épreuve complète
                  </h3>
                  <p className="text-xs text-slate-400">{currentArchivePaper.themeSummary}</p>
                  {currentArchivePaper.sourceNotice && (
                    <p className="text-[11px] text-amber-300/90 font-medium">
                      ℹ️ {currentArchivePaper.sourceNotice}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setArchivePaperIndex((prev) => Math.max(0, prev - 1));
                      setArchivePartIndex(0);
                    }}
                    disabled={safeArchivePaperIndex === 0}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 border border-slate-800 flex items-center gap-1 transition cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Session préc.</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setArchivePaperIndex((prev) =>
                        Math.min(filteredArchivePapers.length - 1, prev + 1)
                      );
                      setArchivePartIndex(0);
                    }}
                    disabled={safeArchivePaperIndex >= filteredArchivePapers.length - 1}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center gap-1 transition cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Session suiv.</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {currentArchivePaper.parts.map((part, pIdx) => {
                  const isCurrentPart = pIdx === activeIdx;
                  const isPartSolved = checkedState[part.id]?.correct;
                  return (
                    <button
                      key={part.id}
                      type="button"
                      onClick={() => setArchivePartIndex(pIdx)}
                      className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                        isCurrentPart
                          ? 'bg-amber-400/15 border-amber-400 text-white ring-1 ring-amber-400/50'
                          : isPartSolved
                          ? 'bg-emerald-950/35 border-emerald-500/40 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-[10px] font-black text-amber-300 uppercase">
                          Partie {pIdx + 1} · {part.bepcPoints}
                        </div>
                        <div className="text-xs font-extrabold truncate">{part.title}</div>
                      </div>
                      {isPartSolved && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ========================================================= */}
      {/* ACTIVE BEPC EXERCISE / EXAM PROBLEM SOLVER                */}
      {/* ========================================================= */}
      {currentExercise && (
        <section className="space-y-4">
          {/* Numbered Progression Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {activeList.map((exo, idx) => {
              const isCurrent = idx === activeIdx;
              const isCorrect = checkedState[exo.id]?.correct;
              return (
                <button
                  key={exo.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`min-w-[68px] px-2.5 h-11 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center cursor-pointer shrink-0 border tabular-nums ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-1 ring-amber-300'
                      : isCorrect
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                  title={exo.title}
                >
                  <div className="flex items-center gap-1 leading-none">
                    <span>{mode === 'epreuves' ? `P.${idx + 1}` : `#${idx + 1}`}</span>
                    {isCorrect && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-[9px] leading-none mt-1 font-extrabold ${
                      isCurrent ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    {mode === 'epreuves' && exo.bepcPoints ? exo.bepcPoints : DIFF_SHORT[exo.difficulty]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
            {/* Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 font-extrabold text-amber-300">
                  {currentExercise.originCountry || '🇬🇦 BEPC Gabon'}
                </span>
                {currentExercise.originYear && (
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 font-semibold text-sky-300">
                    {currentExercise.originYear}
                  </span>
                )}
                {currentExercise.bepcPoints && (
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/35 font-black text-emerald-300">
                    Barème : {currentExercise.bepcPoints}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 font-bold text-slate-200">
                  {DIFF_LABELS[currentExercise.difficulty]}
                </span>
              </div>

              <span className="text-slate-400 font-medium tabular-nums">
                {activeIdx + 1} / {activeList.length} · {currentExercise.steps.length} étapes
              </span>
            </div>

            <div>
              <div className="text-[11px] font-bold text-sky-400 mb-0.5">
                {activeChapterForFigure.title}
              </div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{currentExercise.title}</span>
              </h3>
              {currentExercise.themeTags && currentExercise.themeTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {currentExercise.themeTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Énoncé officiel */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm font-medium text-slate-100 whitespace-pre-line leading-relaxed shadow-inner">
              {currentExercise.prompt}
            </div>

            {/* Figure d’illustration */}
            <ExerciseVisualFigure
              chapterId={activeChapterForFigure.id}
              illustrationKey={activeChapterForFigure.illustrationKey}
              subject={activeChapterForFigure.subject}
              title={currentExercise.title}
              prompt={currentExercise.prompt}
            />

            {/* Hint */}
            <div>
              {!shownHints[currentExercise.id] ? (
                <button
                  type="button"
                  onClick={() =>
                    setShownHints((prev) => ({ ...prev, [currentExercise.id]: true }))
                  }
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>💡 Méthode / Coup de Pouce d’Examen</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-amber-300">Indice :</strong>{' '}
                    {currentExercise.hint}
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Answer */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs text-slate-400 font-medium">
                {mode === 'examen'
                  ? 'Réponse finale de contrôle (puis déroule toute la rédaction étape par étape) :'
                  : 'À toi de jouer :'}
              </label>

              {currentExercise.options && currentExercise.options.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentExercise.options.map((opt, optIdx) => {
                    const isSelected = userAnswers[currentExercise.id] === opt;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectQcm(currentExercise, opt)}
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
                        ? `Ex: valeur numérique (en ${currentExercise.unit})`
                        : 'Tape la réponse finale exacte...'
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
                    type="button"
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
              <div className="pt-2">
                {checkedState[currentExercise.id].correct ? (
                  <KokoSuccessCelebration
                    message="Akiba ! Niveau BEPC validé !"
                    subMessage="Excellente réponse ! Vérifie bien chaque étape de rédaction modèle ci-dessous pour décrocher la totalité des points le jour de l’examen."
                  />
                ) : (
                  <KokoEncouragingFeedback
                    title="Vérifie les conversions ou l’unité !"
                    message="Clique sur le bouton ci-dessous pour suivre la correction détaillée étape par étape façon copie officielle BEPC."
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
              <button
                type="button"
                onClick={() =>
                  setShownCorrections((prev) => ({
                    ...prev,
                    [currentExercise.id]: true,
                  }))
                }
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow"
              >
                <BookOpen className="w-4 h-4" />
                <span>Afficher la Correction Détaillée Étape par Étape (Copie BEPC)</span>
              </button>
            ) : (
              <div className="pt-2">
                <StepByStepCorrection
                  steps={currentExercise.steps}
                  finalResult={currentExercise.explanationFinal}
                  initialShowAll={false}
                  chapterId={activeChapterForFigure.id}
                  illustrationKey={activeChapterForFigure.illustrationKey}
                  subject={activeChapterForFigure.subject}
                  contextHint={`${currentExercise.title} ${currentExercise.prompt}`}
                />
              </div>
            )}

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                disabled={activeIdx === 0}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 flex items-center gap-1 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>
                  {mode === 'examen'
                    ? 'Problème précédent'
                    : mode === 'epreuves'
                    ? 'Partie précédente'
                    : 'Sujet précédent'}
                </span>
              </button>

              <div className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5 tabular-nums">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {activeIdx + 1} / {activeList.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveIdx((prev) => Math.min(activeList.length - 1, prev + 1))}
                disabled={activeIdx >= activeList.length - 1}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center gap-1 transition cursor-pointer shadow"
              >
                <span>
                  {mode === 'examen'
                    ? 'Problème suivant'
                    : mode === 'epreuves'
                    ? 'Partie suivante'
                    : 'Sujet suivant'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
