import { describe, expect, it } from 'vitest';
import { createInitialScore, processThrow } from './game-logic';

function completeTurn(mode: 'solo' | 'versus') {
  let score = createInitialScore('501', true, mode);
  score = processThrow(score, 1, 20);
  score = processThrow(score, 1, 20);
  return processThrow(score, 1, 20);
}

describe('darts game modes', () => {
  it('keeps player A active after a solo turn', () => {
    const score = completeTurn('solo');
    expect(score.activePlayer).toBe('a');
    expect(score.playerA.remainingScore).toBe(441);
    expect(score.playerB.remainingScore).toBe(501);
    expect(score.history).toHaveLength(1);
  });

  it('alternates players in versus mode', () => {
    const score = completeTurn('versus');
    expect(score.activePlayer).toBe('b');
    expect(score.playerA.remainingScore).toBe(441);
  });

  it('defaults existing callers to versus mode', () => {
    expect(createInitialScore().mode).toBe('versus');
  });
});
