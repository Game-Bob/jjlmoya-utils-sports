import { describe, expect, it } from 'vitest';
import { calculateVo2Max, defaultVo2Input, type Vo2Input } from './logic';

function input(overrides: Partial<Vo2Input>): Vo2Input {
  return { ...defaultVo2Input(), ...overrides };
}

describe('VO2 max calculator logic', () => {
  it('estimates Cooper 12-minute run from metric distance', () => {
    const result = calculateVo2Max(input({ performance: 2400 }));
    expect(result?.estimate).toBeCloseTo(42.37, 2);
  });

  it('converts Cooper 12-minute miles to meters', () => {
    const result = calculateVo2Max(input({ unit: 'imperial', performance: 1.4913 }));
    expect(result?.estimate).toBeCloseTo(42.37, 2);
  });

  it('estimates Cooper 1.5-mile run from time', () => {
    const result = calculateVo2Max(input({ method: 'cooper15', minutes: 12, seconds: 0 }));
    expect(result?.estimate).toBeCloseTo(43.75, 2);
  });

  it('estimates Rockport with kg input and sex correction', () => {
    const result = calculateVo2Max(input({ method: 'rockport', minutes: 15, seconds: 0, weight: 75, heartRate: 150 }));
    expect(result?.estimate).toBeCloseTo(40.43, 2);
  });

  it('estimates the shuttle test using final stage and age', () => {
    const result = calculateVo2Max(input({ method: 'shuttle20', performance: 8, age: 35 }));
    expect(result?.estimate).toBeCloseTo(50.83, 2);
  });

  it('returns an age and sex reference band with a chart position', () => {
    const result = calculateVo2Max(input({ performance: 2400, age: 35, sex: 'male' }));
    expect(result?.referenceBand.id).toBe('50to75');
    expect(result?.position).toBeGreaterThan(50);
    expect(result?.position).toBeLessThan(75);
  });

  it('rejects incomplete or unsafe numeric ranges', () => {
    expect(calculateVo2Max(input({ performance: 0 }))).toBeNull();
    expect(calculateVo2Max(input({ method: 'rockport', weight: 0 }))).toBeNull();
    expect(calculateVo2Max(input({ method: 'rockport', heartRate: 240 }))).toBeNull();
    expect(calculateVo2Max(input({ method: 'shuttle20', performance: 22 }))).toBeNull();
    expect(calculateVo2Max(input({ age: 80 }))).toBeNull();
  });
});
