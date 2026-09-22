import type { MatchState, TeamKey, TeamScore, HistoryEvent, SinBinEntry } from './logic';
import { tickClock } from './logic';

export const RUGBY_STORAGE_KEY = 'gamebob:rugby-scorekeeper:v1';

export type SinBinDuration = 300 | 600;

export interface RugbySession {
  version: 1;
  state: MatchState;
  teamNames: Record<TeamKey, string>;
  sinBinDuration: SinBinDuration;
  sinBinTeam: TeamKey;
  convTeam: TeamKey | null;
  savedAt: number;
}

export interface StoragePort {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isFiniteInt(value: unknown, min = 0): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= min;
}

function isTeam(value: unknown): value is TeamKey {
  return value === 'home' || value === 'away';
}

function isTeamScore(value: unknown): value is TeamScore {
  if (!isRecord(value)) return false;
  const keys: (keyof TeamScore)[] = ['tries', 'conversions', 'missedConversions', 'penalties', 'dropGoals'];
  return keys.every((key) => isFiniteInt(value[key]));
}

function isHistoryEvent(value: unknown): value is HistoryEvent {
  if (!isRecord(value) || !isTeam(value.team)) return false;
  return typeof value.type === 'string' && typeof value.label === 'string' && typeof value.minute === 'string';
}

function isSinBinEntry(value: unknown): value is SinBinEntry {
  if (!isRecord(value) || !isTeam(value.team)) return false;
  return isFiniteInt(value.id) && typeof value.player === 'string'
    && isFiniteInt(value.remaining) && isFiniteInt(value.total, 1);
}

function hasStateScalars(value: Record<string, unknown>): boolean {
  const validHalf = value.half === 1 || value.half === 2;
  const validElapsed = isFiniteInt(value.elapsed) && value.elapsed <= 4800;
  const validFlags = typeof value.clockRunning === 'boolean'
    && typeof value.matchStarted === 'boolean' && typeof value.matchEnded === 'boolean';
  return validHalf && validElapsed && validFlags;
}

function hasStateCollections(value: Record<string, unknown>): boolean {
  if (!Array.isArray(value.history) || !Array.isArray(value.sinBin)) return false;
  const validHistory = value.history.length <= 500 && value.history.every(isHistoryEvent);
  const validSinBin = value.sinBin.length <= 30 && value.sinBin.every(isSinBinEntry);
  return validHistory && validSinBin;
}

function isMatchState(value: unknown): value is MatchState {
  if (!isRecord(value)) return false;
  const validScores = isTeamScore(value.home) && isTeamScore(value.away);
  return validScores && hasStateScalars(value) && hasStateCollections(value);
}

function isTeamNames(value: unknown): value is Record<TeamKey, string> {
  if (!isRecord(value)) return false;
  return typeof value.home === 'string' && value.home.length <= 40
    && typeof value.away === 'string' && value.away.length <= 40;
}

function hasSessionControls(value: Record<string, unknown>): boolean {
  const validDuration = value.sinBinDuration === 300 || value.sinBinDuration === 600;
  const validConversion = value.convTeam === null || isTeam(value.convTeam);
  return isTeamNames(value.teamNames) && isTeam(value.sinBinTeam) && validDuration && validConversion;
}

function isSession(value: unknown): value is RugbySession {
  if (!isRecord(value)) return false;
  const validTime = typeof value.savedAt === 'number' && Number.isFinite(value.savedAt);
  return value.version === 1 && isMatchState(value.state) && hasSessionControls(value) && validTime;
}

function resumeClock(session: RugbySession, now: number): RugbySession {
  if (!session.state.clockRunning || now <= session.savedAt) return session;
  const elapsedSinceSave = Math.min(Math.floor((now - session.savedAt) / 1000), 86400);
  if (elapsedSinceSave <= 0) return session;
  return { ...session, state: tickClock(session.state, elapsedSinceSave), savedAt: now };
}

export function loadRugbySession(storage: StoragePort, now = Date.now()): RugbySession | null {
  try {
    const raw = storage.getItem(RUGBY_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isSession(parsed) ? resumeClock(parsed, now) : null;
  } catch {
    return null;
  }
}

export function saveRugbySession(storage: StoragePort, session: RugbySession): boolean {
  try {
    storage.setItem(RUGBY_STORAGE_KEY, JSON.stringify(session));
    return true;
  } catch {
    return false;
  }
}

export function clearRugbySession(storage: StoragePort): boolean {
  try {
    storage.removeItem(RUGBY_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
