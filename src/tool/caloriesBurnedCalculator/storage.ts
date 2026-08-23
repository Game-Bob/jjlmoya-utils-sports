import type { ActivityId, IntensityId } from './logic';

export type WeightUnit = 'metric' | 'imperial';

export interface StoredCaloriesState {
  activityId: ActivityId;
  intensity: IntensityId;
  weightKg: number;
  durationMinutes: number;
  unit: WeightUnit;
}

const STORAGE_KEY = 'jjlmoya-utils-sports:calories-burned-calculator';

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isState(value: unknown): value is StoredCaloriesState {
  if (!isObject(value)) return false;
  return typeof value.activityId === 'string'
    && typeof value.intensity === 'string'
    && typeof value.weightKg === 'number'
    && typeof value.durationMinutes === 'number'
    && (value.unit === 'metric' || value.unit === 'imperial');
}

export function loadCaloriesState(): StoredCaloriesState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    return isState(value) ? value : null;
  } catch {
    return null;
  }
}

export function saveCaloriesState(state: StoredCaloriesState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
