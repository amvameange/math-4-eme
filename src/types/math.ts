export type SubjectId = 'physique' | 'maths';

export type MathDomainId =
  | 'nombres-calculs'
  | 'donnees-fonctions'
  | 'geometrie'
  | 'mesures';

export type PhysicsDomainId =
  | 'electricite'
  | 'optique'
  | 'mecanique'
  | 'chimie';

export type DomainId = MathDomainId | PhysicsDomainId;

export interface DomainMeta {
  id: DomainId;
  subject?: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  color: string;
  badgeBg: string;
}

export interface CorrectionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  mathExpression: string;
  highlightedPart?: string;
  ruleApplied?: string;
  subResult?: string;
}

export type ExerciseDifficulty = 1 | 2 | 3 | 4; // 1: Fondamental, 2: Entraînement, 3: Approfondissement, 4: Problème de synthèse

export interface Exercise {
  id: string;
  chapterId: string;
  title: string;
  difficulty: ExerciseDifficulty;
  difficultyLabel: 'Fondamental' | 'Entraînement' | 'Approfondissement' | 'Problème de synthèse';
  prompt: string;
  hint: string;
  questionType: 'qcm' | 'numeric' | 'text';
  options?: string[];
  correctAnswer: string;
  unit?: string;
  visualBadge?: string;
  explanationFinal: string;
  steps: CorrectionStep[];
}

export interface LessonSection {
  title: string;
  explanation: string[];
  rules?: {
    name: string;
    description: string;
    example: string;
    tip?: string;
  }[];
  examples?: {
    statement: string;
    solution: string;
    method: string;
  }[];
  commonMistakes?: string[];
}

export interface VerticalFormula {
  name: string;
  badge?: string;
  ruleTitle?: string;
  steps: string[];
  resultHighlight?: string;
  explanation: string;
  tip?: string;
}

export interface ChapterMemo {
  title: string;
  slogan: string;
  summaryBulletPoints: string[];
  verticalFormulas: VerticalFormula[];
  kokoTip: string;
  pitfallToAvoid: string;
}

export type MathIllustrationKey =
  | 'relatifs'
  | 'puissances'
  | 'fractions'
  | 'calcul-litteral'
  | 'equations'
  | 'racine-carree'
  | 'identites-factorisation'
  | 'inequations'
  | 'nombres-premiers'
  | 'proportionnalite'
  | 'vitesse'
  | 'statistiques'
  | 'probabilites'
  | 'fonctions'
  | 'quartiles'
  | 'pythagore'
  | 'milieux-agrandissement'
  | 'translations'
  | 'symetries'
  | 'thales'
  | 'trigonometrie'
  | 'homothetie'
  | 'rotation'
  | 'droites-remarquables'
  | 'espace-volumes'
  | 'reperage-plan'
  | 'cercle';

export type PhysicsIllustrationKey =
  | 'circuit-simple'
  | 'circuits-serie-derivation'
  | 'intensite'
  | 'tension'
  | 'loi-ohm'
  | 'puissance-seeg'
  | 'propagation-lumiere'
  | 'ombres-eclipses'
  | 'reflexion-refraction'
  | 'lentilles'
  | 'dispersion-couleurs'
  | 'masse-volumique'
  | 'forces-dynamometre'
  | 'poids-masse'
  | 'pression-archimede'
  | 'air-gaz'
  | 'atomes-molecules'
  | 'combustions'
  | 'equations-bilan'
  | 'solutions-ph';

export type ChapterIllustrationKey = MathIllustrationKey | PhysicsIllustrationKey;

export interface RealWorldHook {
  title: string;
  scenario: string;
  question: string;
}

export interface UnitReferenceRow {
  symbol: string;
  quantity: string;
  unit: string;
  instrument?: string;
}

export interface ExperimentActivity {
  title: string;
  materials: string[];
  observation: string;
  conclusion: string;
}

export interface Chapter {
  id: string;
  subject?: SubjectId;
  domainId: DomainId;
  order: number;
  title: string;
  badge: string;
  shortDesc: string;
  themeColor: string;
  themeGradient: string;
  readingTimeMinutes: number;
  sections: LessonSection[];
  keyFormulas: string[];
  memoSheet?: ChapterMemo;
  exercises: Exercise[];
  visualizerType?:
    | 'relatifs-puissances'
    | 'calcul-litteral'
    | 'equations'
    | 'pythagore'
    | 'milieux-cosinus'
    | 'volumes-vitesse'
    | 'electricite'
    | 'ohm-seeg'
    | 'optique'
    | 'mecanique'
    | 'chimie-gaz'
    | 'solutions-ph';
  illustrationKey?: ChapterIllustrationKey;
  bossMeta?: { name: string; emoji: string; xp: number };
  kokoSpeech?: string;
  realWorldHook?: RealWorldHook;
  unitsTable?: UnitReferenceRow[];
  experimentOrActivity?: ExperimentActivity;
  revisionChecklist?: string[];
}

export interface UserProgress {
  completedChapters: string[];
  solvedExercises: Record<string, { solvedAt: number; attempts: number; score: number }>;
  totalXp: number;
  streakDays: number;
  notes: Record<string, string>;
}
