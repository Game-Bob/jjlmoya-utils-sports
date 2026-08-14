import type { MatchFormat } from './ui';

export function getSetsToWin(format: MatchFormat): number {
  if (format === 'singleSet') return 1;
  if (format === 'bestOf3') return 2;
  return 3;
}

export function isDecidingSet(format: MatchFormat, currentSetIndex: number): boolean {
  if (format === 'singleSet') return true;
  if (format === 'bestOf3' && currentSetIndex === 3) return true;
  return format === 'bestOf5' && currentSetIndex === 5;
}

export function getTargetPointsForSet(format: MatchFormat, currentSetIndex: number): number {
  return isDecidingSet(format, currentSetIndex) ? 15 : 25;
}

export function checkSetWinner(
  ptsScorer: number,
  ptsOpponent: number,
  targetPts: number,
): boolean {
  return ptsScorer >= targetPts && ptsScorer - ptsOpponent >= 2;
}

export function checkSetPoint(
  ptsScorer: number,
  ptsOpponent: number,
  targetPts: number,
): boolean {
  return (ptsScorer >= targetPts - 1 && ptsScorer > ptsOpponent) ||
         (ptsScorer >= targetPts && ptsScorer - ptsOpponent === 1);
}
