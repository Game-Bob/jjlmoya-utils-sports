export type ActivityId =
  | 'walking'
  | 'running'
  | 'cycling'
  | 'swimming'
  | 'basketball'
  | 'soccer'
  | 'dancing'
  | 'hiking'
  | 'rope-jumping'
  | 'circuit-training'
  | 'strength-training'
  | 'yoga';

export type IntensityId = 'light' | 'moderate' | 'vigorous';

export interface ActivityProfile {
  id: ActivityId;
  mets: Record<IntensityId, number>;
}

export interface CalorieInput {
  activityId: ActivityId;
  intensity: IntensityId;
  weightKg: number;
  durationMinutes: number;
}

export interface CalorieResult {
  activityId: ActivityId;
  intensity: IntensityId;
  met: number;
  weightKg: number;
  durationMinutes: number;
  grossKcal: number;
  netKcal: number;
  grossKcalPerMinute: number;
}

export const ACTIVITY_PROFILES: ActivityProfile[] = [
  { id: 'walking', mets: { light: 2.8, moderate: 3.8, vigorous: 5 } },
  { id: 'running', mets: { light: 6.5, moderate: 8.3, vigorous: 11 } },
  { id: 'cycling', mets: { light: 4, moderate: 7.5, vigorous: 10 } },
  { id: 'swimming', mets: { light: 5.8, moderate: 7, vigorous: 9.8 } },
  { id: 'basketball', mets: { light: 4.5, moderate: 6.5, vigorous: 8 } },
  { id: 'soccer', mets: { light: 7, moderate: 8, vigorous: 10 } },
  { id: 'dancing', mets: { light: 3, moderate: 5.5, vigorous: 7.8 } },
  { id: 'hiking', mets: { light: 4, moderate: 6, vigorous: 7.8 } },
  { id: 'rope-jumping', mets: { light: 8, moderate: 10, vigorous: 12.3 } },
  { id: 'circuit-training', mets: { light: 3.5, moderate: 6, vigorous: 8 } },
  { id: 'strength-training', mets: { light: 3.5, moderate: 5, vigorous: 6 } },
  { id: 'yoga', mets: { light: 2.3, moderate: 3, vigorous: 4 } },
];

export const KG_PER_POUND = 0.45359237;

function isPositiveFinite(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

export function findActivity(activityId: ActivityId): ActivityProfile | undefined {
  return ACTIVITY_PROFILES.find((activity) => activity.id === activityId);
}

export function getMet(activityId: ActivityId, intensity: IntensityId): number {
  return findActivity(activityId)?.mets[intensity] ?? 0;
}

export function calculateCalories(input: CalorieInput): CalorieResult | null {
  const met = getMet(input.activityId, input.intensity);
  if (!isPositiveFinite(met) || !isPositiveFinite(input.weightKg) || !isPositiveFinite(input.durationMinutes)) {
    return null;
  }

  const kcalPerMinute = (met * 3.5 * input.weightKg) / 200;
  const netKcalPerMinute = ((met - 1) * 3.5 * input.weightKg) / 200;
  return {
    activityId: input.activityId,
    intensity: input.intensity,
    met,
    weightKg: input.weightKg,
    durationMinutes: input.durationMinutes,
    grossKcal: kcalPerMinute * input.durationMinutes,
    netKcal: Math.max(0, netKcalPerMinute * input.durationMinutes),
    grossKcalPerMinute: kcalPerMinute,
  };
}

export function kilogramsToPounds(weightKg: number): number {
  return weightKg / KG_PER_POUND;
}

export function poundsToKilograms(weightPounds: number): number {
  return weightPounds * KG_PER_POUND;
}

export function intensityForMet(met: number): IntensityId {
  if (met < 3) return 'light';
  if (met < 6) return 'moderate';
  return 'vigorous';
}
