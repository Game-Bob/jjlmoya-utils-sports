import type { Vo2Input, Vo2Result } from './logic';

export type EvaluationTone = 'neutral' | 'caution' | 'strong';

export interface Vo2Evaluation {
  tone: EvaluationTone;
  methodNote: 'cooper12' | 'cooper15' | 'rockport' | 'shuttle20';
  hasReference: boolean;
}

export function evaluateVo2Result(input: Vo2Input, result: Vo2Result | null): Vo2Evaluation {
  if (!result) return { tone: 'caution', methodNote: input.method, hasReference: false };
  const strong = result.position >= 75;
  const caution = result.position < 25;
  let tone: EvaluationTone = 'neutral';
  if (strong) tone = 'strong';
  if (caution) tone = 'caution';
  return { tone, methodNote: input.method, hasReference: true };
}
