import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  PlusCircle,
  BookOpen,
  Trash2,
  Edit3,
  CheckCircle2,
  HelpCircle,
  Download,
  Upload,
  Search,
  Sparkles,
  Plus,
  X,
  Save,
  FolderOpen,
  Share2,
  Infinity as InfinityIcon,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  CorrectionStep,
  CustomExercise,
  ExerciseDifficulty,
  SubjectId,
} from '../types/math';
import { PHYSICS_TC_CHAPTERS } from '../data/physicsTcCurriculum';
import { MATH_TC_CHAPTERS } from '../data/mathTcCurriculum';
import { StepByStepCorrection } from './StepByStepCorrection';
import { StandingMathRenderer } from './StandingMathRenderer';
import { FormattedMathText } from './FormattedMathText';
import {
  KokoSuccessCelebration,
  KokoEncouragingFeedback,
} from './illustrations/FunFeedbackIllustrations';
import { playUiClickSound, scrollToSectionById } from '../utils/uiFeedback';

interface CustomExercisesStudioProps {
  customExercises: CustomExercise[];
  onAddExercise: (
    payload: Omit<CustomExercise, 'id' | 'createdAt' | 'updatedAt'>
  ) => CustomExercise;
  onUpdateExercise: (
    id: string,
    patch: Partial<Omit<CustomExercise, 'id' | 'createdAt'>>
  ) => void;
  onDeleteExercise: (id: string) => void;
  onImportExercises: (items: CustomExercise[]) => number;
  storageBackend?: 'indexeddb' | 'local';
  buildShareUrl?: () => Promise<string>;
  lastShareImportCount?: number;
  onDismissShareBanner?: () => void;
  initialSubject?: SubjectId;
  initialChapterId?: string;
  initialSubTab?: 'ajouter' | 'consulter';
}

const DIFFICULTY_OPTIONS: { value: ExerciseDifficulty; label: string }[] = [
  { value: 1, label: 'Niveau 1 · Fondamental' },
  { value: 2, label: 'Niveau 2 · Entraînement' },
  { value: 3, label: 'Niveau 3 · Approfondissement' },
  { value: 4, label: 'Niveau 4 · Défi BAC C Gabon' },
];

function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .replace(/\s+/g, '')
    .replace(/,/g, '.')
    .replace(/^\+/, '')
    .toLowerCase();
}

function buildCorrectionSteps(rawSteps: string[]): CorrectionStep[] {
  const clean = rawSteps.map((s) => s.trim()).filter(Boolean);
  const effective = clean.length > 0 ? clean : ['Appliquer la formule du cours ligne par ligne.'];
  return effective.map((line, index) => ({
    stepNumber: index + 1,
    title: `Étape ${index + 1}`,
    explanation: line,
    mathExpression: line,
  }));
}

export const CustomExercisesStudio: React.FC<CustomExercisesStudioProps> = ({
  customExercises,
  onAddExercise,
  onUpdateExercise,
  onDeleteExercise,
  onImportExercises,
  storageBackend = 'indexeddb',
  buildShareUrl,
  lastShareImportCount = 0,
  onDismissShareBanner,
  initialSubject = 'physique',
  initialChapterId,
  initialSubTab = 'consulter',
}) => {
  const [subTab, setSubTab] = useState<'ajouter' | 'consulter'>(initialSubTab);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form states
  const [formSubject, setFormSubject] = useState<SubjectId>(initialSubject);
  const formChapters =
    formSubject === 'physique' ? PHYSICS_TC_CHAPTERS : MATH_TC_CHAPTERS;

  const [formChapterId, setFormChapterId] = useState<string>(
    initialChapterId || formChapters[0].id
  );
  const [formDifficulty, setFormDifficulty] = useState<ExerciseDifficulty>(2);
  const [formTitle, setFormTitle] = useState<string>('');
  const [formPrompt, setFormPrompt] = useState<string>('');
  const [formAnswer, setFormAnswer] = useState<string>('');
  const [formUnit, setFormUnit] = useState<string>('');
  const [formHint, setFormHint] = useState<string>('');
  const [formSteps, setFormSteps] = useState<string[]>(['', '']);
  const [formFinal, setFormFinal] = useState<string>('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Library / consultation states
  const [filterSubject, setFilterSubject] = useState<'all' | SubjectId>('all');
  const [filterChapterId, setFilterChapterId] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<ExerciseDifficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Interactive solve states per custom exercise
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [attempts, setAttempts] = useState<
    Record<string, { answered: boolean; correct: boolean }>
  >({});
  const [shownHints, setShownHints] = useState<Record<string, boolean>>({});
  const [shownCorrections, setShownCorrections] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSubTab(initialSubTab);
  }, [initialSubTab]);

  useEffect(() => {
    if (initialChapterId) {
      const isPhys = PHYSICS_TC_CHAPTERS.some((c) => c.id === initialChapterId);
      const isMath = MATH_TC_CHAPTERS.some((c) => c.id === initialChapterId);
      if (isPhys) {
        setFormSubject('physique');
        setFormChapterId(initialChapterId);
      } else if (isMath) {
        setFormSubject('maths');
        setFormChapterId(initialChapterId);
      }
    }
  }, [initialChapterId]);

  const handleSubjectFormChange = (nextSubj: SubjectId) => {
    setFormSubject(nextSubj);
    const list = nextSubj === 'physique' ? PHYSICS_TC_CHAPTERS : MATH_TC_CHAPTERS;
    if (!list.some((c) => c.id === formChapterId)) {
      setFormChapterId(list[0].id);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormTitle('');
    setFormPrompt('');
    setFormAnswer('');
    setFormUnit('');
    setFormHint('');
    setFormSteps(['', '']);
    setFormFinal('');
    setFormError(null);
  };

  const handleLoadExampleTemplate = () => {
    if (formSubject === 'physique') {
      setFormChapterId('physTc-dipoles-rc-rl');
      setFormDifficulty(2);
      setFormTitle('Constante de temps d’un dipôle RC de laboratoire');
      setFormPrompt(
        'Un condensateur de capacité C = 200 µF est chargé à travers une résistance R = 500 Ω.\nCalcule la constante de temps τ du dipôle RC en secondes (s).'
      );
      setFormAnswer('0.1');
      setFormUnit('s');
      setFormHint('Utilise τ = R × C avec C en farads (1 µF = 10⁻⁶ F).');
      setFormSteps([
        'Données : R = 500 Ω et C = 200 µF = 200 × 10⁻⁶ F = 2 × 10⁻⁴ F',
        'Formule : τ = R × C',
        'Calcul : τ = 500 × 2 × 10⁻⁴ = 0,10 s',
      ]);
      setFormFinal('La constante de temps du circuit RC vaut τ = 0,1 s.');
    } else {
      setFormChapterId('mathTc-complexes-algebre');
      setFormDifficulty(2);
      setFormTitle('Module et argument d’un nombre complexe');
      setFormPrompt(
        'Soit le nombre complexe z = 1 + i√3.\nCalcule le module |z|.'
      );
      setFormAnswer('2');
      setFormUnit('');
      setFormHint('Rappelle-toi : |a + ib| = √(a² + b²).');
      setFormSteps([
        'Partie réelle a = 1 et partie imaginaire b = √3',
        '|z| = √(1² + (√3)²)',
        '|z| = √(1 + 3) = √4 = 2',
      ]);
      setFormFinal('Le module du complexe z = 1 + i√3 vaut |z| = 2 (et arg(z) = π/3).');
    }
    setFormError(null);
  };

  const handleSaveExercise = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormFeedback(null);

    if (!formTitle.trim()) {
      setFormError('Merci de donner un titre à ton exercice.');
      return;
    }
    if (!formPrompt.trim()) {
      setFormError('Merci de saisir l’énoncé de l’exercice.');
      return;
    }
    if (!formAnswer.trim()) {
      setFormError('Merci d’indiquer la réponse attendue pour permettre la vérification.');
      return;
    }

    const cleanedSteps = formSteps.map((s) => s.trim()).filter(Boolean);
    if (cleanedSteps.length === 0) {
      setFormError('Ajoute au moins une étape de correction détaillée.');
      return;
    }

    const chapterObj =
      formChapters.find((c) => c.id === formChapterId) || formChapters[0];

    const payload = {
      subject: formSubject,
      chapterId: chapterObj.id,
      chapterTitle: chapterObj.title,
      title: formTitle.trim(),
      difficulty: formDifficulty,
      prompt: formPrompt.trim(),
      hint: formHint.trim() || 'Relis bien la formule du chapitre Terminale C.',
      correctAnswer: formAnswer.trim(),
      unit: formUnit.trim() || undefined,
      correctionSteps: cleanedSteps,
      explanationFinal:
        formFinal.trim() ||
        `Résultat final : ${formAnswer.trim()}${formUnit.trim() ? ` ${formUnit.trim()}` : ''}`,
    };

    if (editingId) {
      onUpdateExercise(editingId, payload);
      playUiClickSound('success');
      setFormFeedback('Exercice mis à jour et sauvegardé dans l’application (stockage illimité) !');
      resetForm();
      setSubTab('consulter');
      scrollToSectionById('custom-studio-top', 50);
    } else {
      onAddExercise(payload);
      playUiClickSound('success');
      setFormFeedback('Exercice + correction sauvegardés ! Il reste conservé dans l’application et partageable avec d’autres utilisateurs.');
      resetForm();
      setSubTab('consulter');
      scrollToSectionById('custom-studio-top', 50);
    }
  };

  const handleStartEdit = (ex: CustomExercise) => {
    setEditingId(ex.id);
    setFormSubject(ex.subject);
    setFormChapterId(ex.chapterId);
    setFormDifficulty(ex.difficulty);
    setFormTitle(ex.title);
    setFormPrompt(ex.prompt);
    setFormAnswer(ex.correctAnswer);
    setFormUnit(ex.unit || '');
    setFormHint(ex.hint);
    setFormSteps(ex.correctionSteps.length > 0 ? ex.correctionSteps : ['']);
    setFormFinal(ex.explanationFinal);
    setFormError(null);
    setFormFeedback(null);
    setSubTab('ajouter');
    scrollToSectionById('custom-studio-top', 50);
  };

  const handleCheckCustomAnswer = (ex: CustomExercise) => {
    const val = userAnswers[ex.id] || '';
    if (!val.trim()) return;
    const u = normalizeAnswer(val);
    const c = normalizeAnswer(ex.correctAnswer);
    let ok = u === c;
    if (!ok) {
      const uNum = Number(u);
      const cNum = Number(c);
      if (!Number.isNaN(uNum) && !Number.isNaN(cNum)) {
        ok = Math.abs(uNum - cNum) <= 0.02;
      }
    }
    playUiClickSound(ok ? 'success' : 'error');
    setAttempts((prev) => ({ ...prev, [ex.id]: { answered: true, correct: ok } }));
    if (ok) {
      try {
        confetti({ particleCount: 55, spread: 65, origin: { y: 0.65 } });
      } catch {}
    }
  };

  const handleShareAppWithExercises = async () => {
    if (customExercises.length === 0) {
      setImportStatus('Ajoute d’abord au moins un exercice avant de partager.');
      return;
    }
    try {
      const shareUrl = buildShareUrl ? await buildShareUrl() : window.location.href;
      const shareTitle = `Sciences & Maths Tle C · ${customExercises.length} exercice(s) sauvegardé(s)`;
      const shareMessage = `Ouvre l’application avec mes ${customExercises.length} exercices et corrections enregistrés :\n${shareUrl}`;

      if (typeof window !== 'undefined' && window.AndroidBridge?.shareText) {
        window.AndroidBridge.shareText(shareTitle, shareMessage);
        setImportStatus(
          `Partage Android ouvert avec vos ${customExercises.length} exercices inclus ! Pense aussi au bouton "Exporter JSON" pour transférer un fichier vers un autre téléphone hors-ligne.`
        );
        return;
      }

      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        await navigator.share({
          title: shareTitle,
          text: `Voici l’application avec mes ${customExercises.length} exercices et corrections sauvegardés :`,
          url: shareUrl,
        });
        setImportStatus(
          `Lien de l’application partagé avec vos ${customExercises.length} exercices inclus !`
        );
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setImportStatus(
          `Lien de partage copié ! Toute personne ouvrant ce lien retrouvera automatiquement tes ${customExercises.length} exercices sauvegardés dans son application.`
        );
        return;
      }

      handleExportJson();
    } catch {
      handleExportJson();
    }
  };

  const handleExportJson = () => {
    const filename = `mes-exercices-tle-c-gabon-${new Date().toISOString().slice(0, 10)}.json`;
    const payload = JSON.stringify(customExercises, null, 2);

    try {
      if (typeof window !== 'undefined' && window.AndroidBridge?.shareJson) {
        window.AndroidBridge.shareJson(filename, payload);
        setImportStatus('Export ouvert via le partage Android.');
        return;
      }

      const blob = new Blob([payload], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setImportStatus('Sauvegarde JSON téléchargée.');
    } catch {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(payload)
          .then(() => setImportStatus('Sauvegarde JSON copiée dans le presse-papiers.'))
          .catch(() => setImportStatus('Export indisponible sur cet appareil.'));
      } else {
        setImportStatus('Export indisponible sur cet appareil.');
      }
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || '[]'));
        const added = onImportExercises(parsed);
        setImportStatus(
          added > 0
            ? `${added} exercice(s) importé(s) et sauvegardé(s) !`
            : 'Aucun nouvel exercice valide trouvé dans ce fichier.'
        );
      } catch {
        setImportStatus('Fichier JSON invalide.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const allTcChapters = useMemo(() => {
    if (filterSubject === 'physique') return PHYSICS_TC_CHAPTERS;
    if (filterSubject === 'maths') return MATH_TC_CHAPTERS;
    return [...PHYSICS_TC_CHAPTERS, ...MATH_TC_CHAPTERS];
  }, [filterSubject]);

  const filteredExercises = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return customExercises.filter((ex) => {
      if (filterSubject !== 'all' && ex.subject !== filterSubject) return false;
      if (filterChapterId !== 'all' && ex.chapterId !== filterChapterId) return false;
      if (filterDifficulty !== 'all' && ex.difficulty !== filterDifficulty) return false;
      if (
        q &&
        !ex.title.toLowerCase().includes(q) &&
        !ex.prompt.toLowerCase().includes(q) &&
        !ex.chapterTitle.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [
    customExercises,
    filterSubject,
    filterChapterId,
    filterDifficulty,
    searchQuery,
  ]);

  return (
    <div id="custom-studio-top" className="space-y-5 pb-20 animate-fade-in">
      {/* Studio Header & Mode Switcher */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-amber-300 flex flex-wrap items-center gap-1.5">
                <span>Programme Terminale Série C Gabon</span>
                <span className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <InfinityIcon className="w-3.5 h-3.5" />
                  Stockage illimité ({storageBackend === 'indexeddb' ? 'IndexedDB' : 'Local'})
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                Mes Exercices &amp; Corrections Personnalisés
              </h2>
              <p className="text-xs text-slate-300">
                Enregistre un nombre infini d’exercices avec leur correction détaillée : tout reste conservé hors-ligne et partageable via lien d’application ou fichier JSON.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                setSubTab('ajouter');
                scrollToSectionById('custom-studio-top', 40);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                subTab === 'ajouter'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>{editingId ? 'Modifier l’exercice' : 'Ajouter un exercice'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubTab('consulter');
                scrollToSectionById('custom-studio-top', 40);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer whitespace-nowrap tabular-nums ${
                subTab === 'consulter'
                  ? 'bg-emerald-400 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Consulter mes exercices ({customExercises.length} / ∞)</span>
            </button>
          </div>
        </div>

        {lastShareImportCount > 0 && (
          <div className="p-3 rounded-2xl bg-sky-950/60 border border-sky-500/40 text-xs text-sky-200 font-bold flex items-center justify-between gap-2">
            <span>
              🎉 {lastShareImportCount} exercice(s) partagé(s) ont été ajoutés et sauvegardés automatiquement dans ton application !
            </span>
            {onDismissShareBanner && (
              <button
                type="button"
                onClick={onDismissShareBanner}
                className="text-sky-300 hover:text-white cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {formFeedback && (
          <div className="p-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-xs text-emerald-200 font-bold flex items-center justify-between gap-2">
            <span>✅ {formFeedback}</span>
            <button
              type="button"
              onClick={() => setFormFeedback(null)}
              className="text-emerald-300 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MODE 1 : AJOUTER / MODIFIER UN EXERCICE AVEC CORRECTION   */}
      {/* ========================================================= */}
      {subTab === 'ajouter' && (
        <form
          onSubmit={handleSaveExercise}
          className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-white">
                {editingId
                  ? 'Modifier cet exercice sauvegardé'
                  : 'Créer un nouvel exercice avec sa correction'}
              </h3>
              <p className="text-xs text-slate-400">
                Tous les champs enregistrés restent conservés même si tu fermes l’application.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLoadExampleTemplate}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Préremplir un modèle Tle C</span>
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Annuler l’édition
                </button>
              )}
            </div>
          </div>

          {formError && (
            <div className="p-3 rounded-2xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-200 font-bold">
              ⚠️ {formError}
            </div>
          )}

          {/* Subject + Chapter + Difficulty */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Matière (Terminale C)</label>
              <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  type="button"
                  onClick={() => handleSubjectFormChange('physique')}
                  className={`py-2 rounded-lg text-xs font-bold cursor-pointer transition ${
                    formSubject === 'physique'
                      ? 'bg-sky-500 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Physique-Chimie
                </button>
                <button
                  type="button"
                  onClick={() => handleSubjectFormChange('maths')}
                  className={`py-2 rounded-lg text-xs font-bold cursor-pointer transition ${
                    formSubject === 'maths'
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Mathématiques
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Chapitre associé</label>
              <select
                value={formChapterId}
                onChange={(e) => setFormChapterId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
              >
                {formChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.badge} · {ch.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Niveau de difficulté</label>
              <select
                value={formDifficulty}
                onChange={(e) => setFormDifficulty(Number(e.target.value) as ExerciseDifficulty)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
              >
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Title & Prompt */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">Titre de l’exercice *</label>
            <input
              type="text"
              placeholder="Ex : Calcul de la poussée d’Archimède sur une pirogue à Lambaréné"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">Énoncé complet de l’exercice *</label>
            <textarea
              rows={4}
              placeholder="Écris l’énoncé avec toutes les données numériques..."
              value={formPrompt}
              onChange={(e) => setFormPrompt(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 focus:outline-none leading-relaxed"
            />
          </div>

          {/* Expected answer, unit, hint */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">
                Réponse exacte attendue *
              </label>
              <input
                type="text"
                placeholder="Ex : 24 ou 3/4 ou 12,5"
                value={formAnswer}
                onChange={(e) => setFormAnswer(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Unité (optionnel)</label>
              <input
                type="text"
                placeholder="Ex : Ω, N, cm, V, F CFA"
                value={formUnit}
                onChange={(e) => setFormUnit(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">Indice / Coup de pouce</label>
              <input
                type="text"
                placeholder="Ex : Pense à convertir en kg d’abord"
                value={formHint}
                onChange={(e) => setFormHint(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Step-by-step correction builder + live preview */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  Étapes de la correction détaillée (rédaction debout) *
                </div>
                <p className="text-[11px] text-slate-400">
                  Ajoute chaque ligne de raisonnement, formule et calcul posé.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormSteps((prev) => [...prev, ''])}
                className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter une étape</span>
              </button>
            </div>

            <div className="space-y-2">
              {formSteps.map((st, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-slate-800 text-amber-300 text-xs font-black flex items-center justify-center shrink-0 tabular-nums">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    placeholder={`Étape ${idx + 1} (ex : Formule : U = R × I  ou  2x = 12 ➔ x = 6)`}
                    value={st}
                    onChange={(e) =>
                      setFormSteps((prev) =>
                        prev.map((item, i) => (i === idx ? e.target.value : item))
                      )
                    }
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white focus:border-sky-500 focus:outline-none"
                  />
                  {formSteps.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormSteps((prev) => prev.filter((_, i) => i !== idx))
                      }
                      className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 border border-slate-800 cursor-pointer"
                      title="Supprimer cette étape"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {formSteps.some((s) => s.trim()) && (
              <div className="pt-2">
                <StandingMathRenderer
                  expression={formSteps.filter((s) => s.trim()).join('\n')}
                  title="Aperçu de ta correction en colonne verticale :"
                  showColumnOp={false}
                />
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">
              Phrase de conclusion finale (optionnel)
            </label>
            <input
              type="text"
              placeholder="Ex : Donc l’intensité du courant vaut I = 2,5 A."
              value={formFinal}
              onChange={(e) => setFormFinal(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-800">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shadow"
            >
              <Save className="w-4 h-4" />
              <span>
                {editingId ? 'Enregistrer les modifications' : 'Sauvegarder l’exercice et sa correction'}
              </span>
            </button>
          </div>
        </form>
      )}

      {/* ========================================================= */}
      {/* MODE 2 : CONSULTER LES EXERCICES SAUVEGARDÉS              */}
      {/* ========================================================= */}
      {subTab === 'consulter' && (
        <div className="space-y-4">
          {/* Filter & Backup Bar */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-xl space-y-3">
            <div className="grid sm:grid-cols-4 gap-2.5">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher un exercice..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <select
                value={filterSubject}
                onChange={(e) => {
                  setFilterSubject(e.target.value as 'all' | SubjectId);
                  setFilterChapterId('all');
                }}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-500 focus:outline-none"
              >
                <option value="all">Toutes les matières ({customExercises.length})</option>
                <option value="physique">Physique-Chimie Tle C</option>
                <option value="maths">Mathématiques Tle C</option>
              </select>

              <select
                value={filterChapterId}
                onChange={(e) => setFilterChapterId(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-500 focus:outline-none"
              >
                <option value="all">Tous les chapitres Terminale C</option>
                {allTcChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.badge} · {ch.title}
                  </option>
                ))}
              </select>

              <select
                value={filterDifficulty}
                onChange={(e) =>
                  setFilterDifficulty(
                    e.target.value === 'all'
                      ? 'all'
                      : (Number(e.target.value) as ExerciseDifficulty)
                  )
                }
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-sky-500 focus:outline-none"
              >
                <option value="all">Tous les niveaux</option>
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <div className="text-slate-400 tabular-nums">
                <strong className="text-white">{filteredExercises.length}</strong> exercice(s) affiché(s) sur{' '}
                <strong className="text-emerald-300">{customExercises.length}</strong> sauvegardé(s) (capacité ∞)
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
                {customExercises.length > 0 && (
                  <button
                    type="button"
                    onClick={handleShareAppWithExercises}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow"
                    title="Générer un lien ou partager l’application avec tous tes exercices sauvegardés"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Partager l’app + mes exercices</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-sky-400" />
                  <span>Importer JSON</span>
                </button>
                {customExercises.length > 0 && (
                  <button
                    type="button"
                    onClick={handleExportJson}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Exporter JSON</span>
                  </button>
                )}
              </div>
            </div>

            {importStatus && (
              <div className="text-xs text-sky-300 font-semibold leading-relaxed">{importStatus}</div>
            )}
          </div>

          {/* Empty state or list */}
          {filteredExercises.length === 0 ? (
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center space-y-3 shadow-xl">
              <div className="text-3xl">📝</div>
              <h3 className="text-base font-black text-white">
                {customExercises.length === 0
                  ? 'Aucun exercice personnalisé enregistré pour le moment'
                  : 'Aucun exercice ne correspond à ces filtres'}
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Ajoute tes exercices de devoirs, d’annales BAC C ou de cahier avec leur correction détaillée pour les réviser ici quand tu veux.
              </p>
              <button
                type="button"
                onClick={() => setSubTab('ajouter')}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 cursor-pointer shadow"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Ajouter mon premier exercice avec correction</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredExercises.map((ex) => {
                const attempt = attempts[ex.id];
                const isHintOpen = !!shownHints[ex.id];
                const isCorrOpen = !!shownCorrections[ex.id];
                const isConfirmingDel = confirmDeleteId === ex.id;

                return (
                  <div
                    key={ex.id}
                    className="rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold text-amber-300 flex flex-wrap items-center gap-1.5">
                          <span>
                            {ex.subject === 'physique' ? '⚗️ Physique-Chimie Tle C' : '📐 Maths Tle C'}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-sky-300">{ex.chapterTitle}</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-emerald-300">Niveau {ex.difficulty}</span>
                        </div>
                        <h3 className="text-base font-black text-white"><FormattedMathText text={ex.title} /></h3>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(ex)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-sky-400" />
                          <span>Modifier</span>
                        </button>

                        {isConfirmingDel ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                onDeleteExercise(ex.id);
                                setConfirmDeleteId(null);
                              }}
                              className="px-2.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-xs font-black cursor-pointer"
                            >
                              Confirmer
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="px-2 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
                            >
                              Annuler
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(ex.id)}
                            className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 border border-slate-700 cursor-pointer"
                            title="Supprimer cet exercice"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 whitespace-pre-line leading-relaxed">
                      <FormattedMathText text={ex.prompt} />
                    </div>

                    {ex.hint && (
                      <div>
                        {!isHintOpen ? (
                          <button
                            type="button"
                            onClick={() =>
                              setShownHints((prev) => ({ ...prev, [ex.id]: true }))
                            }
                            className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-semibold cursor-pointer"
                          >
                            <HelpCircle className="w-4 h-4" />
                            <span>Afficher l’indice</span>
                          </button>
                        ) : (
                          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
                            <strong className="text-amber-300">Indice :</strong> <FormattedMathText text={ex.hint} />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Answer checker */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        placeholder={
                          ex.unit ? `Ta réponse (en ${ex.unit})...` : 'Tape ta réponse...'
                        }
                        value={userAnswers[ex.id] || ''}
                        onChange={(e) =>
                          setUserAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))
                        }
                        onKeyDown={(e) => e.key === 'Enter' && handleCheckCustomAnswer(ex)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handleCheckCustomAnswer(ex)}
                        disabled={!userAnswers[ex.id]?.trim()}
                        className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-black text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Vérifier</span>
                      </button>
                    </div>

                    {attempt?.answered && (
                      <div className="animate-fade-in">
                        {attempt.correct ? (
                          <KokoSuccessCelebration
                            message="Akiba ! Réponse exacte !"
                            subMessage="Consulte la correction enregistrée ci-dessous si tu veux revoir les étapes."
                          />
                        ) : (
                          <KokoEncouragingFeedback
                            title={`Réponse enregistrée : ${ex.correctAnswer}${
                              ex.unit ? ` ${ex.unit}` : ''
                            }`}
                            message="Ouvre la correction détaillée pour revoir chaque étape."
                            onShowSolution={() =>
                              setShownCorrections((prev) => ({ ...prev, [ex.id]: true }))
                            }
                          />
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={() =>
                          setShownCorrections((prev) => ({ ...prev, [ex.id]: !prev[ex.id] }))
                        }
                        className="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>
                          {isCorrOpen
                            ? 'Masquer la correction'
                            : 'Consulter la correction détaillée'}
                        </span>
                      </button>

                      <span className="text-[11px] text-slate-500 tabular-nums">
                        Enregistré le {new Date(ex.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>

                    {isCorrOpen && (
                      <div className="pt-2 animate-fade-in">
                        <StepByStepCorrection
                          steps={buildCorrectionSteps(ex.correctionSteps)}
                          finalResult={ex.explanationFinal}
                          initialShowAll={true}
                          chapterId={ex.chapterId}
                          subject={ex.subject}
                          contextHint={`${ex.title} ${ex.prompt}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
