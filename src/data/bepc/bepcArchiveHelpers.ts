import {
  BepcArchivePaper,
  BepcCountryId,
  CorrectionStep,
  Exercise,
  ExerciseDifficulty,
  SubQuestion,
  SubjectId,
} from '../../types/math';

export const BEPC_COUNTRY_META: Record<
  BepcCountryId,
  { label: string; examPrefix: string; short: string }
> = {
  gabon: { label: '🇬🇦 Gabon', examPrefix: 'BAC C Gabon', short: 'Gabon' },
  france: { label: '🇫🇷 France', examPrefix: 'BAC S France', short: 'France' },
  senegal: { label: '🇸🇳 Sénégal', examPrefix: 'BAC S1 Sénégal', short: 'Sénégal' },
  cameroun: { label: '🇨🇲 Cameroun', examPrefix: 'BAC C Cameroun', short: 'Cameroun' },
  benin: { label: '🇧🇯 Bénin', examPrefix: 'BAC C Bénin', short: 'Bénin' },
  togo: { label: '🇹🇬 Togo', examPrefix: 'BAC C Togo', short: 'Togo' },
};

export interface ArchivePartSeed {
  chapterId: string;
  partLabel: string;
  title: string;
  points: number;
  difficulty: ExerciseDifficulty;
  prompt: string;
  hint: string;
  questionType?: 'numeric' | 'text' | 'qcm';
  options?: string[];
  correctAnswer: string;
  unit?: string;
  explanationFinal: string;
  steps: {
    title: string;
    ruleApplied?: string;
    mathExpression: string;
    explanation: string;
    subResult?: string;
  }[];
  subQuestions?: SubQuestion[];
  themeTags?: string[];
}

export interface CountryContext {
  id: BepcCountryId;
  label: string;
  examPrefix: string;
  short: string;
  examOffice: string;
  seriesName: string;
  cities: string[];
  currency: string;
  utility: string;
  tariffUnitPrice: number;
}

export const BEPC_COUNTRY_CONTEXTS: Record<BepcCountryId, CountryContext> = {
  gabon: {
    id: 'gabon',
    label: '🇬🇦 Gabon',
    examPrefix: 'BAC C Gabon (Entraînement)',
    short: 'Gabon',
    examOffice: 'Direction Générale des Examens et Concours (DGEC — Libreville)',
    seriesName: 'Baccalauréat de l’Enseignement du Second Degré · Série C',
    cities: ['Libreville', 'Port-Gentil', 'Owendo', 'Franceville', 'Oyem'],
    currency: 'F CFA',
    utility: 'SEEG',
    tariffUnitPrice: 120,
  },
  france: {
    id: 'france',
    label: '🇫🇷 France',
    examPrefix: 'BAC S / Spé France (Entraînement)',
    short: 'France',
    examOffice: 'Baccalauréat Général · Métropole & Centres Étrangers',
    seriesName: 'Baccalauréat Général · Série S / Spécialité Sciences',
    cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'],
    currency: '€',
    utility: 'EDF',
    tariffUnitPrice: 0.25,
  },
  senegal: {
    id: 'senegal',
    label: '🇸🇳 Sénégal',
    examPrefix: 'BAC S1 Sénégal (Entraînement)',
    short: 'Sénégal',
    examOffice: 'Office du Baccalauréat (UCAD — Dakar)',
    seriesName: 'Baccalauréat de l’Enseignement Secondaire · Série S1',
    cities: ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor'],
    currency: 'F CFA',
    utility: 'Senelec',
    tariffUnitPrice: 115,
  },
  cameroun: {
    id: 'cameroun',
    label: '🇨🇲 Cameroun',
    examPrefix: 'BAC C Cameroun (Entraînement)',
    short: 'Cameroun',
    examOffice: 'Office du Baccalauréat du Cameroun (OBC — Yaoundé)',
    seriesName: 'Baccalauréat de l’Enseignement Secondaire · Série C',
    cities: ['Douala', 'Yaoundé', 'Bafoussam', 'Garoua', 'Kribi'],
    currency: 'F CFA',
    utility: 'Enéo',
    tariffUnitPrice: 100,
  },
  benin: {
    id: 'benin',
    label: '🇧🇯 Bénin',
    examPrefix: 'BAC C Bénin (Entraînement)',
    short: 'Bénin',
    examOffice: 'Direction de l’Office du Baccalauréat (DOB — Cotonou)',
    seriesName: 'Baccalauréat de l’Enseignement Secondaire · Série C',
    cities: ['Cotonou', 'Porto-Novo', 'Parakou', 'Abomey', 'Bohicon'],
    currency: 'F CFA',
    utility: 'SBEE',
    tariffUnitPrice: 125,
  },
  togo: {
    id: 'togo',
    label: '🇹🇬 Togo',
    examPrefix: 'BAC C Togo (Entraînement)',
    short: 'Togo',
    examOffice: 'Office du Baccalauréat (OB — Lomé)',
    seriesName: 'Baccalauréat Deuxième Partie (BAC II) · Série C',
    cities: ['Lomé', 'Kara', 'Sokodé', 'Atakpamé', 'Kpalimé'],
    currency: 'F CFA',
    utility: 'CEET',
    tariffUnitPrice: 110,
  },
};

export interface ArchivePaperSeed {
  year: number;
  countryId: BepcCountryId;
  themeSummary: string;
  duration?: string;
  examTitleOverride?: string;
  isOfficial?: boolean;
  officialReference?: string;
  isTrainingSubject?: boolean;
  sourceNotice?: string;
  parts: ArchivePartSeed[];
}

const DIFF_LABELS: Record<ExerciseDifficulty, Exercise['difficultyLabel']> = {
  1: 'Fondamental',
  2: 'Entraînement',
  3: 'Approfondissement',
  4: 'Problème de synthèse',
};

export function buildArchivePapers(
  subject: SubjectId,
  seeds: ArchivePaperSeed[]
): BepcArchivePaper[] {
  return seeds.map((paperSeed) => {
    const meta = BEPC_COUNTRY_META[paperSeed.countryId];
    const totalPoints = paperSeed.parts.reduce((sum, p) => sum + p.points, 0);

    const parts: Exercise[] = paperSeed.parts.map((part, idx) => {
      const steps: CorrectionStep[] = part.steps.map((st, sIdx) => ({
        stepNumber: sIdx + 1,
        title: st.title,
        ruleApplied: st.ruleApplied,
        mathExpression: st.mathExpression,
        explanation: st.explanation,
        subResult: st.subResult,
      }));

      return {
        id: `archive-${subject}-${paperSeed.year}-${paperSeed.countryId}-p${idx + 1}`,
        chapterId: part.chapterId,
        title: `${part.partLabel} · ${part.title}`,
        difficulty: part.difficulty,
        difficultyLabel: DIFF_LABELS[part.difficulty],
        category: 'bepc-examen',
        isExamProblem: true,
        prompt: part.prompt,
        hint: part.hint,
        questionType: part.questionType || 'numeric',
        options: part.options,
        correctAnswer: part.correctAnswer,
        unit: part.unit,
        visualBadge: idx === paperSeed.parts.length - 1 ? '📜' : '📝',
        originCountry: meta.label,
        originYear: `Session ${paperSeed.year}`,
        bepcPoints: `${part.points} pts`,
        themeTags: part.themeTags,
        explanationFinal: part.explanationFinal,
        steps,
        subQuestions: part.subQuestions,
      };
    });

    return {
      id: `paper-${subject}-${paperSeed.year}-${paperSeed.countryId}`,
      subject,
      year: paperSeed.year,
      countryId: paperSeed.countryId,
      countryLabel: meta.label,
      examTitle: paperSeed.examTitleOverride || `${meta.examPrefix} · Session ${paperSeed.year}`,
      duration: paperSeed.duration || '4h00',
      totalPoints,
      themeSummary: paperSeed.themeSummary,
      isOfficial: paperSeed.isOfficial,
      officialReference: paperSeed.officialReference,
      isTrainingSubject: paperSeed.isTrainingSubject,
      sourceNotice: paperSeed.sourceNotice,
      parts,
    };
  });
}
