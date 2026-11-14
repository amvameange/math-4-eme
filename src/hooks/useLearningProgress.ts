import { useState, useEffect, useCallback } from 'react';

export interface ExerciseCheckRecord {
  answered: boolean;
  correct: boolean;
  attempts: number;
  solvedAt?: number;
}

interface StoredLearningState {
  checkedState: Record<string, ExerciseCheckRecord>;
  totalXp: number;
}

const STORAGE_KEY = 'gabon_4eme_sciences_maths_progress_v1';

const DEFAULT_STATE: StoredLearningState = {
  checkedState: {},
  totalXp: 0,
};

export function useLearningProgress() {
  const [state, setState] = useState<StoredLearningState>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as StoredLearningState;
          if (parsed && typeof parsed === 'object' && parsed.checkedState) {
            return parsed;
          }
        }
      }
    } catch {
      // Ignore storage errors
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    } catch {
      // Ignore storage errors
    }
  }, [state]);

  const recordExerciseAttempt = useCallback((exerciseId: string, isCorrect: boolean) => {
    setState((prev) => {
      const existing = prev.checkedState[exerciseId];
      const wasAlreadyCorrect = existing?.correct === true;
      const newRecord: ExerciseCheckRecord = {
        answered: true,
        correct: wasAlreadyCorrect || isCorrect,
        attempts: (existing?.attempts || 0) + 1,
        solvedAt: isCorrect ? Date.now() : existing?.solvedAt,
      };
      const xpGain = !wasAlreadyCorrect && isCorrect ? 20 : 0;
      return {
        checkedState: {
          ...prev.checkedState,
          [exerciseId]: newRecord,
        },
        totalXp: prev.totalXp + xpGain,
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  return {
    checkedState: state.checkedState,
    totalXp: state.totalXp,
    recordExerciseAttempt,
    resetProgress,
  };
}
