import { createEmptyLibrary, isLeagueLibrary, type LeagueLibrary } from './logic';

const STORAGE_KEY = 'round-robin-league-manager:v1';

export interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function resolveStorage(storage?: StorageAdapter): StorageAdapter {
  if (storage) return storage;
  return window.localStorage;
}

export function loadLeagueLibrary(storage?: StorageAdapter): LeagueLibrary {
  try {
    const raw = resolveStorage(storage).getItem(STORAGE_KEY);
    if (!raw) return createEmptyLibrary();
    const parsed: unknown = JSON.parse(raw);
    return isLeagueLibrary(parsed) ? parsed : createEmptyLibrary();
  } catch {
    return createEmptyLibrary();
  }
}

export function saveLeagueLibrary(library: LeagueLibrary, storage?: StorageAdapter): boolean {
  try {
    resolveStorage(storage).setItem(STORAGE_KEY, JSON.stringify(library));
    return true;
  } catch {
    return false;
  }
}

export function clearLeagueLibrary(storage?: StorageAdapter): boolean {
  try {
    resolveStorage(storage).removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
