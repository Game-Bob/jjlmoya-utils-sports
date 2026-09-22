import { describe, expect, it } from 'vitest';
import {
  addSinBin,
  createInitialState,
  scorePenalty,
  scoreTry,
  startMatch,
  startSecondHalf,
  teamTotal,
  tickClock,
  tickSinBin,
  toggleClock,
  undoLast,
  losingBonus,
} from './logic';

describe('rugbyScoreKeeper game clock', () => {
  it('starts the second half without losing the score, statistics, history, or sin-bin timers', () => {
    let state = createInitialState();
    state = scoreTry(state, 'home');
    state = scorePenalty(state, 'away');
    state = addSinBin(state, 'Number 8', 600);
    state = startMatch({ ...state, elapsed: 2399 });

    state = tickClock(state, 1);

    expect(state.half).toBe(1);
    expect(state.elapsed).toBe(2400);
    expect(state.clockRunning).toBe(false);
    expect(teamTotal(state.home)).toBe(5);
    expect(teamTotal(state.away)).toBe(3);
    expect(state.history).toHaveLength(3);
    expect(state.sinBin[0]?.remaining).toBe(599);

    const halftimeState = structuredClone(state);
    state = startSecondHalf(state);

    expect(state).toEqual({
      ...halftimeState,
      half: 2,
      clockRunning: true,
    });

    state = tickClock(state, 1);
    expect(state.elapsed).toBe(2401);
    expect(state.clockRunning).toBe(true);
    expect(teamTotal(state.home)).toBe(5);
    expect(teamTotal(state.away)).toBe(3);
  });

  it('does not start the second half before halftime', () => {
    const state = startMatch({ ...createInitialState(), elapsed: 2399 });

    expect(startSecondHalf(state)).toBe(state);
  });

  it('ends the match at 80 minutes after the second half', () => {
    let state = startSecondHalf({
      ...createInitialState(),
      matchStarted: true,
      elapsed: 2400,
    });
    state = { ...state, elapsed: 4799 };

    state = tickClock(state, 1);

    expect(state.elapsed).toBe(4800);
    expect(state.clockRunning).toBe(false);
    expect(state.matchEnded).toBe(true);
  });

  it('undoes a sin-bin event and its timer together', () => {
    const withSinBin = addSinBin(createInitialState(), '  Player <x>  ', 600);
    expect(withSinBin.sinBin).toHaveLength(1);
    expect(withSinBin.sinBin[0]?.player).toBe('Player <x>');
    const undone = undoLast(withSinBin);
    expect(undone.sinBin).toEqual([]);
    expect(undone.history).toEqual([]);
  });

  it('rejects invalid timer input and keeps match state immutable', () => {
    const state = createInitialState();
    expect(addSinBin(state, ' ', 600)).toBe(state);
    expect(addSinBin(state, 'Player', 0)).toBe(state);
    expect(addSinBin(state, 'Player', Number.NaN)).toBe(state);
    expect(tickSinBin(state, 0)).not.toBe(state);
    expect(tickSinBin(state, -1).sinBin).toEqual([]);
  });

  it('does not score or toggle after full time', () => {
    const ended = { ...createInitialState(), matchEnded: true };
    expect(scoreTry(ended, 'home')).toBe(ended);
    expect(toggleClock(ended)).toBe(ended);
  });

  it('does not award a losing bonus for a tie', () => {
    const state = createInitialState();
    expect(losingBonus(state.home, state.away, 'home')).toBe(false);
    const homeTry = scoreTry(state, 'home');
    expect(losingBonus(homeTry.home, homeTry.away, 'away')).toBe(true);
  });
});
