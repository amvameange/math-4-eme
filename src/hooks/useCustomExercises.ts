import { useState, useEffect, useCallback, useRef } from 'react';
import { CustomExercise } from '../types/math';

const STORAGE_KEY = 'gabon_tlec_custom_exercises_v1';
const IDB_NAME = 'tc_gabon_custom_exercises_db';
const IDB_VERSION = 1;
const IDB_STORE = 'exercises';
const SHARE_HASH_PARAM = 'shared-exos';

function isValidCustomExercise(it: unknown): it is CustomExercise {
  if (!it || typeof it !== 'object') return false;
  const ex = it as Partial<CustomExercise>;
  return (
    typeof ex.id === 'string' &&
    typeof ex.title === 'string' &&
    typeof ex.prompt === 'string' &&
    typeof ex.correctAnswer === 'string' &&
    Array.isArray(ex.correctionSteps)
  );
}

function readLocalStorageFallback(): CustomExercise[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.filter(isValidCustomExercise);
        }
      }
    }
  } catch {
    // Ignore storage read errors
  }
  return [];
}

function writeLocalStorageMirror(items: CustomExercise[]): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  } catch {
    // Ignore quota exceeded on localStorage when IndexedDB holds unlimited items
  }
}

function openCustomExercisesDb(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !('indexedDB' in window) || !window.indexedDB) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const req = window.indexedDB.open(IDB_NAME, IDB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function idbLoadAllExercises(): Promise<{ items: CustomExercise[]; available: boolean }> {
  const db = await openCustomExercisesDb();
  if (!db) return { items: [], available: false };
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const getReq = store.getAll();
      getReq.onsuccess = () => {
        const list = Array.isArray(getReq.result)
          ? getReq.result.filter(isValidCustomExercise)
          : [];
        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        db.close();
        resolve({ items: list, available: true });
      };
      getReq.onerror = () => {
        db.close();
        resolve({ items: [], available: false });
      };
    } catch {
      db.close();
      resolve({ items: [], available: false });
    }
  });
}

async function idbReplaceAllExercises(items: CustomExercise[]): Promise<boolean> {
  const db = await openCustomExercisesDb();
  if (!db) return false;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      const store = tx.objectStore(IDB_STORE);
      store.clear();
      for (const item of items) {
        store.put(item);
      }
      tx.oncomplete = () => {
        db.close();
        resolve(true);
      };
      tx.onerror = () => {
        db.close();
        resolve(false);
      };
    } catch {
      db.close();
      resolve(false);
    }
  });
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToBytes(b64u: string): Uint8Array {
  const b64 = b64u.replace(/-/g, '+').replace(/_/g, '/');
  const pad = b64.length % 4 === 0 ? '' : '='.repeat(4 - (b64.length % 4));
  const binary = atob(b64 + pad);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function encodeSharePayload(exercises: CustomExercise[]): Promise<string> {
  const json = JSON.stringify(exercises);
  const utf8 = new TextEncoder().encode(json);

  if (typeof CompressionStream !== 'undefined') {
    try {
      const cs = new CompressionStream('gzip');
      const writer = cs.writable.getWriter();
      writer.write(utf8);
      writer.close();
      const compressedBuf = await new Response(cs.readable).arrayBuffer();
      return `gz:${bytesToBase64Url(new Uint8Array(compressedBuf))}`;
    } catch {
      // Fallback to raw base64url
    }
  }
  return `b64:${bytesToBase64Url(utf8)}`;
}

export async function decodeSharePayload(encoded: string): Promise<CustomExercise[]> {
  if (!encoded) return [];
  const trimmed = encoded.trim();
  let bytes: Uint8Array;

  if (trimmed.startsWith('gz:') && typeof DecompressionStream !== 'undefined') {
    const compressed = base64UrlToBytes(trimmed.slice(3));
    const ds = new DecompressionStream('gzip');
    const writer = ds.writable.getWriter();
    writer.write(new Uint8Array(compressed));
    writer.close();
    const decompressedBuf = await new Response(ds.readable).arrayBuffer();
    bytes = new Uint8Array(decompressedBuf);
  } else if (trimmed.startsWith('b64:')) {
    bytes = base64UrlToBytes(trimmed.slice(4));
  } else {
    bytes = base64UrlToBytes(trimmed);
  }

  const json = new TextDecoder().decode(bytes);
  const parsed = JSON.parse(json);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(isValidCustomExercise);
}

function mergeUniqueExercises(
  incoming: CustomExercise[],
  existing: CustomExercise[]
): { merged: CustomExercise[]; addedCount: number } {
  const existingIds = new Set(existing.map((e) => e.id));
  const existingSignatures = new Set(
    existing.map((e) => `${e.chapterId}::${e.title.trim()}::${e.prompt.trim()}`)
  );
  const fresh: CustomExercise[] = [];
  for (const item of incoming) {
    const sig = `${item.chapterId}::${item.title.trim()}::${item.prompt.trim()}`;
    if (!existingIds.has(item.id) && !existingSignatures.has(sig)) {
      fresh.push(item);
      existingIds.add(item.id);
      existingSignatures.add(sig);
    }
  }
  const merged = [...fresh, ...existing].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return { merged, addedCount: fresh.length };
}

export function useCustomExercises() {
  const [customExercises, setCustomExercises] = useState<CustomExercise[]>(() =>
    readLocalStorageFallback()
  );
  const [storageBackend, setStorageBackend] = useState<'indexeddb' | 'local'>('local');
  const [lastShareImportCount, setLastShareImportCount] = useState<number>(0);
  const idbReadyRef = useRef<boolean>(false);
  const exercisesRef = useRef<CustomExercise[]>(customExercises);
  exercisesRef.current = customExercises;

  // Hydrate from IndexedDB (unlimited capacity) + auto-import any shared payload from URL
  useEffect(() => {
    let cancelled = false;

    const bootstrap = async () => {
      const localItems = readLocalStorageFallback();
      const { items: idbItems, available } = await idbLoadAllExercises();
      if (cancelled) return;

      let baseList = available
        ? mergeUniqueExercises(localItems, idbItems).merged
        : localItems;

      if (available) {
        setStorageBackend('indexeddb');
        idbReadyRef.current = true;
      }

      // Check URL hash or query string for shared exercises
      let importedCount = 0;
      if (typeof window !== 'undefined') {
        try {
          const hash = window.location.hash.startsWith('#')
            ? window.location.hash.slice(1)
            : window.location.hash;
          const hashParams = new URLSearchParams(hash);
          const searchParams = new URLSearchParams(window.location.search);
          const sharedParam =
            hashParams.get(SHARE_HASH_PARAM) || searchParams.get(SHARE_HASH_PARAM);

          if (sharedParam) {
            const sharedItems = await decodeSharePayload(sharedParam);
            if (sharedItems.length > 0) {
              const res = mergeUniqueExercises(sharedItems, baseList);
              baseList = res.merged;
              importedCount = res.addedCount;
            }
            // Clean shared parameter from URL without losing pathname
            hashParams.delete(SHARE_HASH_PARAM);
            searchParams.delete(SHARE_HASH_PARAM);
            const cleanSearch = searchParams.toString();
            const cleanHash = hashParams.toString();
            const nextUrl =
              window.location.pathname +
              (cleanSearch ? `?${cleanSearch}` : '') +
              (cleanHash ? `#${cleanHash}` : '');
            window.history.replaceState(null, '', nextUrl);
          }
        } catch {
          // Ignore malformed share parameter
        }
      }

      if (cancelled) return;

      if (available) {
        await idbReplaceAllExercises(baseList);
      }
      writeLocalStorageMirror(baseList);
      exercisesRef.current = baseList;
      setCustomExercises(baseList);
      if (importedCount > 0) {
        setLastShareImportCount(importedCount);
      }
    };

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, []);

  // Persist every change to IndexedDB (primary, unlimited) & localStorage (mirror)
  useEffect(() => {
    writeLocalStorageMirror(customExercises);
    if (idbReadyRef.current) {
      idbReplaceAllExercises(customExercises).catch(() => {});
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
    const valid = items
      .map((it) => ({
        ...it,
        id:
          typeof it?.id === 'string' && it.id.trim()
            ? it.id
            : `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      }))
      .filter(isValidCustomExercise);
    if (valid.length === 0) return 0;
    const res = mergeUniqueExercises(valid, exercisesRef.current);
    exercisesRef.current = res.merged;
    setCustomExercises(res.merged);
    return res.addedCount;
  }, []);

  const buildShareUrl = useCallback(async (): Promise<string> => {
    const base =
      typeof window !== 'undefined' &&
      window.location.origin &&
      !window.location.origin.startsWith('null')
        ? `${window.location.origin}${window.location.pathname}`
        : 'https://appassets.androidplatform.net/assets/index.html';
    const encoded = await encodeSharePayload(customExercises);
    return `${base}#${SHARE_HASH_PARAM}=${encoded}`;
  }, [customExercises]);

  const dismissShareBanner = useCallback(() => {
    setLastShareImportCount(0);
  }, []);

  return {
    customExercises,
    storageBackend,
    lastShareImportCount,
    dismissShareBanner,
    buildShareUrl,
    addCustomExercise,
    updateCustomExercise,
    deleteCustomExercise,
    importCustomExercises,
  };
}
