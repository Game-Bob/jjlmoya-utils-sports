export type Vo2Method = 'cooper12' | 'cooper15' | 'rockport' | 'shuttle20';
export type UnitSystem = 'metric' | 'imperial';
export type Sex = 'male' | 'female';

export interface Vo2Input {
  method: Vo2Method;
  unit: UnitSystem;
  performance: number;
  minutes: number;
  seconds: number;
  age: number;
  sex: Sex;
  weight: number;
  heartRate: number;
}

export interface ReferenceBand {
  id: 'below10' | '10to25' | '25to50' | '50to75' | '75to90' | 'above90';
  lower: number;
  upper: number | null;
  label: string;
}

export interface Vo2Result {
  estimate: number;
  method: Vo2Method;
  referenceBand: ReferenceBand;
  referenceThresholds: number[];
  position: number;
}

interface ReferenceRow {
  ageMin: number;
  thresholds: number[];
}

const REFERENCE_DATA: Record<Sex, ReferenceRow[]> = {
  male: [
    { ageMin: 20, thresholds: [28.6, 35.2, 46.5, 54.5, 58.6] },
    { ageMin: 30, thresholds: [24.9, 29.8, 39.7, 50, 55.5] },
    { ageMin: 40, thresholds: [22.1, 26.7, 35.3, 45.2, 50.8] },
    { ageMin: 50, thresholds: [18.6, 22.2, 29.2, 38.3, 43.4] },
    { ageMin: 60, thresholds: [15.8, 18.5, 24.6, 32, 37.1] },
    { ageMin: 70, thresholds: [13.6, 15.9, 20.6, 25.9, 29.4] },
  ],
  female: [
    { ageMin: 20, thresholds: [22.5, 27.2, 36.6, 44.8, 49] },
    { ageMin: 30, thresholds: [18.6, 21.9, 28.3, 37, 42.1] },
    { ageMin: 40, thresholds: [17.2, 19.7, 25.7, 33, 37.8] },
    { ageMin: 50, thresholds: [16.5, 18.5, 22.9, 28.4, 32.4] },
    { ageMin: 60, thresholds: [13.4, 15.4, 19.6, 24.3, 27.3] },
    { ageMin: 70, thresholds: [12.3, 14, 17.2, 20.8, 22.8] },
  ],
};

function isPositive(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

function totalMinutes(input: Vo2Input): number {
  return Math.max(0, input.minutes) + Math.max(0, input.seconds) / 60;
}

function cooper12(distance: number, unit: UnitSystem): number {
  const meters = unit === 'metric' ? distance : distance * 1609.344;
  return (meters - 504.9) / 44.73;
}

function cooper15(time: number): number {
  return 483 / time + 3.5;
}

function rockport(input: Vo2Input, time: number): number {
  const pounds = input.unit === 'metric' ? input.weight * 2.2046226218 : input.weight;
  const sexScore = input.sex === 'male' ? 1 : 0;
  return 132.853 - 0.0769 * pounds - 0.3877 * input.age + 6.315 * sexScore - 3.2649 * time - 0.1565 * input.heartRate;
}

function shuttle20(stage: number): number {
  const finalSpeed = 8 + stage * 0.5;
  return 5.857 * finalSpeed - 19.458;
}

function referenceRow(age: number, sex: Sex): ReferenceRow {
  const rows = REFERENCE_DATA[sex];
  return rows.reduce((current, row) => (row.ageMin <= age ? row : current), rows[0]!);
}

function bandForEstimate(estimate: number, thresholds: number[]): ReferenceBand {
  const bands: ReferenceBand[] = [
    { id: 'below10', lower: 0, upper: thresholds[0]!, label: 'below10' },
    { id: '10to25', lower: thresholds[0]!, upper: thresholds[1]!, label: '10to25' },
    { id: '25to50', lower: thresholds[1]!, upper: thresholds[2]!, label: '25to50' },
    { id: '50to75', lower: thresholds[2]!, upper: thresholds[3]!, label: '50to75' },
    { id: '75to90', lower: thresholds[3]!, upper: thresholds[4]!, label: '75to90' },
    { id: 'above90', lower: thresholds[4]!, upper: null, label: 'above90' },
  ];
  return bands.find((band) => band.upper === null || estimate < band.upper) ?? bands[bands.length - 1]!;
}

function estimateForInput(input: Vo2Input): number {
  const time = totalMinutes(input);
  if (input.method === 'cooper12') return cooper12(input.performance, input.unit);
  if (input.method === 'cooper15') return cooper15(time);
  if (input.method === 'rockport') return rockport(input, time);
  return shuttle20(input.performance);
}

function isValidRockport(input: Vo2Input): boolean {
  if (input.method !== 'rockport') return true;
  return isPositive(input.weight) && input.heartRate >= 50 && input.heartRate <= 230;
}

function isValidShuttle(input: Vo2Input): boolean {
  if (input.method !== 'shuttle20') return true;
  return input.performance >= 1 && input.performance <= 21;
}

function isValidInput(input: Vo2Input): boolean {
  const validAge = input.age >= 20 && input.age <= 79;
  const validPerformance = isPositive(input.performance);
  const validTime = input.method === 'cooper12' || isPositive(totalMinutes(input));
  return validAge && validPerformance && validTime && isValidRockport(input) && isValidShuttle(input);
}

export function calculateVo2Max(input: Vo2Input): Vo2Result | null {
  if (!isValidInput(input)) return null;

  const estimate = estimateForInput(input);
  if (!Number.isFinite(estimate) || estimate <= 0) return null;
  const thresholds = referenceRow(input.age, input.sex).thresholds;
  const referenceBand = bandForEstimate(estimate, thresholds);
  const position = Math.min(100, Math.max(0, interpolatePosition(estimate, thresholds)));
  return { estimate, method: input.method, referenceBand, referenceThresholds: thresholds, position };
}

function interpolatePosition(value: number, thresholds: number[]): number {
  const points = [0, 10, 25, 50, 75, 90, 100];
  const values = [thresholds[0]! - 10, thresholds[0]!, thresholds[1]!, thresholds[2]!, thresholds[3]!, thresholds[4]!, thresholds[4]! + 10];
  for (let index = 1; index < values.length; index += 1) {
    const currentValue = values[index]!;
    const previousValue = values[index - 1]!;
    const currentPoint = points[index]!;
    const previousPoint = points[index - 1]!;
    if (value <= currentValue) {
      const range = currentValue - previousValue || 1;
      return previousPoint + ((value - previousValue) / range) * (currentPoint - previousPoint);
    }
  }
  return 100;
}

export function defaultVo2Input(): Vo2Input {
  return { method: 'cooper12', unit: 'metric', performance: 2400, minutes: 12, seconds: 0, age: 35, sex: 'male', weight: 75, heartRate: 150 };
}
