import type { IntensityId } from './logic';

export interface BurnAssessment {
  intensity: IntensityId;
  marker: string;
}

export function evaluateBurn(met: number): BurnAssessment {
  if (met < 3) return { intensity: 'light', marker: 'light' };
  if (met < 6) return { intensity: 'moderate', marker: 'moderate' };
  return { intensity: 'vigorous', marker: 'vigorous' };
}
