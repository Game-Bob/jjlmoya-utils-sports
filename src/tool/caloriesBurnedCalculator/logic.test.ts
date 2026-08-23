import { describe, expect, it } from 'vitest';
import {
  calculateCalories,
  findActivity,
  getMet,
  intensityForMet,
  kilogramsToPounds,
  poundsToKilograms,
} from './logic';

describe('Calories burned calculator logic', () => {
  it('finds activity profiles and MET values', () => {
    expect(findActivity('running')?.mets.moderate).toBe(8.3);
    expect(getMet('walking', 'light')).toBe(2.8);
    expect(getMet('walking', 'moderate')).toBe(3.8);
    expect(getMet('unknown' as never, 'moderate')).toBe(0);
  });

  it('calculates gross and net calories from METs', () => {
    const result = calculateCalories({
      activityId: 'walking',
      intensity: 'moderate',
      weightKg: 70,
      durationMinutes: 30,
    });
    expect(result?.met).toBe(3.8);
    expect(result?.grossKcal).toBeCloseTo(139.65, 2);
    expect(result?.netKcal).toBeCloseTo(102.9, 2);
    expect(result?.grossKcalPerMinute).toBeCloseTo(4.655, 3);
  });

  it('returns null for invalid values', () => {
    expect(calculateCalories({ activityId: 'walking', intensity: 'light', weightKg: 0, durationMinutes: 30 })).toBeNull();
    expect(calculateCalories({ activityId: 'walking', intensity: 'light', weightKg: 70, durationMinutes: 0 })).toBeNull();
    expect(calculateCalories({ activityId: 'walking', intensity: 'light', weightKg: 70, durationMinutes: Number.NaN })).toBeNull();
    expect(calculateCalories({ activityId: 'unknown' as never, intensity: 'light', weightKg: 70, durationMinutes: 30 })).toBeNull();
  });

  it('converts kilograms and pounds', () => {
    expect(kilogramsToPounds(70)).toBeCloseTo(154.324, 2);
    expect(poundsToKilograms(154.324)).toBeCloseTo(70, 2);
  });

  it('classifies intensity bands', () => {
    expect(intensityForMet(2.9)).toBe('light');
    expect(intensityForMet(3)).toBe('moderate');
    expect(intensityForMet(5.9)).toBe('moderate');
    expect(intensityForMet(6)).toBe('vigorous');
  });
});
