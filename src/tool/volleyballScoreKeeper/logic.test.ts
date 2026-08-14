import { describe, expect, it } from 'vitest';
import {
  createInitialVolleyballState,
  awardPoint,
  undoLastAction,
  callTimeout,
  recordSubstitution,
  switchTeamSides,
  getTargetPointsForSet,
} from './logic';

describe('volleyballScoreKeeper game engine', () => {
  it('initializes with standard best of 5 settings', () => {
    const state = createInitialVolleyballState('bestOf5');
    expect(state.currentSetIndex).toBe(1);
    expect(state.isMatchFinished).toBe(false);
    expect(state.teamA.currentPoints).toBe(0);
    expect(state.teamB.currentPoints).toBe(0);
    expect(state.teamA.setsWon).toBe(0);
    expect(state.teamB.setsWon).toBe(0);
    expect(state.teamA.timeoutsRemaining).toBe(2);
    expect(state.teamB.timeoutsRemaining).toBe(2);
    expect(getTargetPointsForSet('bestOf5', 1)).toBe(25);
    expect(getTargetPointsForSet('bestOf5', 5)).toBe(15);
  });

  it('rotates receiving team on sideout point', () => {
    let state = createInitialVolleyballState('bestOf5');
    state.servingTeam = 'teamA';
    state.teamB.rotationOrder = [1, 2, 3, 4, 5, 6];

    state = awardPoint(state, 'teamB');

    expect(state.teamB.currentPoints).toBe(1);
    expect(state.servingTeam).toBe('teamB');
    expect(state.teamB.rotationOrder).toEqual([2, 3, 4, 5, 6, 1]);
  });

  it('does not rotate serving team when they win the rally', () => {
    let state = createInitialVolleyballState('bestOf5');
    state.servingTeam = 'teamA';
    state.teamA.rotationOrder = [1, 2, 3, 4, 5, 6];

    state = awardPoint(state, 'teamA');

    expect(state.teamA.currentPoints).toBe(1);
    expect(state.servingTeam).toBe('teamA');
    expect(state.teamA.rotationOrder).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('handles deuce and requires 2-point advantage to win set', () => {
    let state = createInitialVolleyballState('bestOf5');
    state.teamA.currentPoints = 24;
    state.teamB.currentPoints = 24;

    state = awardPoint(state, 'teamA');
    expect(state.teamA.currentPoints).toBe(25);
    expect(state.teamB.currentPoints).toBe(24);
    expect(state.currentSetIndex).toBe(1);
    expect(state.isSetPoint).toBe(true);

    state = awardPoint(state, 'teamB');
    expect(state.teamA.currentPoints).toBe(25);
    expect(state.teamB.currentPoints).toBe(25);
    expect(state.currentSetIndex).toBe(1);

    state = awardPoint(state, 'teamA');
    state = awardPoint(state, 'teamA');
    expect(state.completedSets.length).toBe(1);
    const set1 = state.completedSets[0];
    expect(set1?.teamAPoints).toBe(27);
    expect(set1?.teamBPoints).toBe(25);
    expect(state.teamA.setsWon).toBe(1);
    expect(state.currentSetIndex).toBe(2);
    expect(state.teamA.currentPoints).toBe(0);
    expect(state.teamB.currentPoints).toBe(0);
  });

  it('completes match when a team reaches required sets won', () => {
    let state = createInitialVolleyballState('bestOf3');
    state.teamA.setsWon = 1;
    state.currentSetIndex = 2;
    state.teamA.currentPoints = 24;
    state.teamB.currentPoints = 20;

    state = awardPoint(state, 'teamA');
    expect(state.isMatchFinished).toBe(true);
    expect(state.matchWinner).toBe('teamA');
    expect(state.teamA.setsWon).toBe(2);
  });

  it('allows full undo of actions', () => {
    let state = createInitialVolleyballState('bestOf5');
    state = awardPoint(state, 'teamA');
    expect(state.teamA.currentPoints).toBe(1);

    state = undoLastAction(state);
    expect(state.teamA.currentPoints).toBe(0);
  });

  it('handles timeouts and substitutions limits', () => {
    let state = createInitialVolleyballState('bestOf5');
    state = callTimeout(state, 'teamA');
    expect(state.teamA.timeoutsRemaining).toBe(1);
    expect(state.isTimeoutActive).toBe(true);

    state = recordSubstitution(state, 'teamA');
    expect(state.teamA.substitutionsUsed).toBe(1);
  });

  it('switches sides accurately', () => {
    let state = createInitialVolleyballState('bestOf5');
    state.teamA.name = 'Alpha';
    state.teamB.name = 'Beta';
    state.teamA.currentPoints = 10;
    state.teamB.currentPoints = 5;

    state = switchTeamSides(state);
    expect(state.teamA.name).toBe('Beta');
    expect(state.teamB.name).toBe('Alpha');
    expect(state.teamA.currentPoints).toBe(5);
    expect(state.teamB.currentPoints).toBe(10);
  });
});
