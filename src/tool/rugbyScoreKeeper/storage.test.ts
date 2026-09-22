import { describe, expect, it } from 'vitest';
import { addSinBin, createInitialState, scoreTry, startMatch } from './logic';
import {
  clearRugbySession,
  loadRugbySession,
  RUGBY_STORAGE_KEY,
  saveRugbySession,
  type RugbySession,
  type StoragePort,
} from './storage';

class MemoryStorage implements StoragePort {
  values = new Map<string, string>();
  getItem(key: string) { return this.values.get(key) ?? null; }
  setItem(key: string, value: string) { this.values.set(key, value); }
  removeItem(key: string) { this.values.delete(key); }
}

function session(savedAt = 1_000): RugbySession {
  let state = scoreTry(createInitialState(), 'home');
  state = addSinBin(state, 'Number 8', 600, 'away');
  return {
    version: 1,
    state,
    teamNames: { home: 'Lions', away: 'Sharks' },
    sinBinDuration: 600,
    sinBinTeam: 'away',
    convTeam: 'home',
    savedAt,
  };
}

describe('rugby scorekeeper local persistence', () => {
  it('round-trips the full match, controls, names, and pending conversion', () => {
    const storage = new MemoryStorage();
    const original = session();
    expect(saveRugbySession(storage, original)).toBe(true);
    expect(loadRugbySession(storage, original.savedAt)).toEqual(original);
  });

  it('catches up a running clock without running past halftime', () => {
    const storage = new MemoryStorage();
    const original = session(10_000);
    original.state = startMatch({ ...original.state, elapsed: 2395 });
    saveRugbySession(storage, original);
    const restored = loadRugbySession(storage, 30_000);
    expect(restored?.state.elapsed).toBe(2400);
    expect(restored?.state.clockRunning).toBe(false);
    expect(restored?.state.sinBin[0]?.remaining).toBe(595);
  });

  it('rejects corrupt or structurally invalid stored data', () => {
    const storage = new MemoryStorage();
    storage.setItem(RUGBY_STORAGE_KEY, '{broken');
    expect(loadRugbySession(storage)).toBeNull();
    storage.setItem(RUGBY_STORAGE_KEY, JSON.stringify({ ...session(), sinBinDuration: 42 }));
    expect(loadRugbySession(storage)).toBeNull();
  });

  it('clears the stored match', () => {
    const storage = new MemoryStorage();
    saveRugbySession(storage, session());
    expect(clearRugbySession(storage)).toBe(true);
    expect(storage.getItem(RUGBY_STORAGE_KEY)).toBeNull();
  });
});
