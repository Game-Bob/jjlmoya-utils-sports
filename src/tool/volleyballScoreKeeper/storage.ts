import type { VolleyballGameState } from './ui';
import { createInitialVolleyballState } from './state';

const STORAGE_KEY = 'jjlmoya_vb_match_state';

export function loadPersistedState(): VolleyballGameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialVolleyballState('bestOf5');
    const parsed = JSON.parse(raw);
    if (parsed && parsed.teamA && parsed.teamB) {
      parsed.isTimeoutActive = false;
      parsed.timeoutTimerSeconds = 0;
      parsed.timeoutTeam = null;
      return parsed;
    }
  } catch {
    return createInitialVolleyballState('bestOf5');
  }
  return createInitialVolleyballState('bestOf5');
}

export function savePersistedState(state: VolleyballGameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}
