import { useState, useEffect, useCallback } from 'react';
import { CustomExercise } from '../types/math';

const STORAGE_KEY = 'gabon_3eme_custom_exercises_v1';

export function useCustomExercises() {
  const [customExercises, setCustomExercises] = useState<CustomExercise[]>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      }
    } catch {
      // Ignore storage read errors
    }
    return [];
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customExercises));
      }
    } catch {
      // Ignore storage write errors
    }
  }, [customExercises]);

  const addCustomExercise = useCallback(
    (payload: Omit<CustomExercise, 'id' | 'createdAt' | 'updatedAt'>): CustomExercise => {
      const created: CustomExercise = {
        ...payload,
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: Date.now(),
      };
      setCustomExercises((prev) => [created, ...prev]);
      return created;
    },
    []
  );

  const updateCustomExercise = useCallback(
    (id: string, patch: Partial<Omit<CustomExercise, 'id' | 'createdAt'>>) => {
      setCustomExercises((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, ...patch, updatedAt: Date.now() } : item
        )
      );
    },
    []
  );

  const deleteCustomExercise = useCallback((id: string) => {
    setCustomExercises((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const importCustomExercises = useCallback((items: CustomExercise[]): number => {
    if (!Array.isArray(items)) return 0;
    const valid = items.filter(
      (it) =>
        it &&
        typeof it.title === 'string' &&
        typeof it.prompt === 'string' &&
        typeof it.correctAnswer === 'string' &&
        Array.isArray(it.correctionSteps)
    );
    if (valid.length === 0) return 0;
    setCustomExercises((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const fresh = valid.filter((v) => !existingIds.has(v.id));
      return [...fresh, ...prev];
    });
    return valid.length;
  }, []);

  return {
    customExercises,
    addCustomExercise,
    updateCustomExercise,
    deleteCustomExercise,
    importCustomExercises,
  };
}
