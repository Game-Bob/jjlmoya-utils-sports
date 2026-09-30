import { createInitialScore, type DartsMatchScore } from './game-logic';

const STORAGE_KEY = 'dt_match_state';

export function loadInitialScore(): DartsMatchScore {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const saved = JSON.parse(stored) as DartsMatchScore;
      return { ...saved, mode: saved.mode ?? 'versus' };
    }
  } catch {
    return createInitialScore();
  }
  return createInitialScore();
}

export function persistScore(score: DartsMatchScore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(score));
}

export function clearStoredScore(): void {
  localStorage.removeItem(STORAGE_KEY);
}
