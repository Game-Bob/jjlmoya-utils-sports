import type { ServingTeam, VolleyballGameState } from './ui';

export function rotateClockwise(rotation: number[]): number[] {
  if (rotation.length !== 6) {
    return [1, 2, 3, 4, 5, 6];
  }
  const r = rotation.slice();
  const first = r.shift() ?? 1;
  r.push(first);
  return r;
}

export function rotateCounterClockwise(rotation: number[]): number[] {
  if (rotation.length !== 6) {
    return [1, 2, 3, 4, 5, 6];
  }
  const r = rotation.slice();
  const last = r.pop() ?? 6;
  r.unshift(last);
  return r;
}

export function pushHistorySnapshot(state: VolleyballGameState): string[] {
  const snapshot = JSON.stringify({
    currentSetIndex: state.currentSetIndex,
    isMatchFinished: state.isMatchFinished,
    matchWinner: state.matchWinner,
    servingTeam: state.servingTeam,
    teamA: state.teamA,
    teamB: state.teamB,
    completedSets: state.completedSets,
  });
  return [...state.historyStack, snapshot];
}

export function undoLastAction(state: VolleyballGameState): VolleyballGameState {
  if (state.historyStack.length === 0) return state;
  const newStack = state.historyStack.slice(0, -1);
  const lastSnapshot = state.historyStack[state.historyStack.length - 1];
  if (!lastSnapshot) return state;
  try {
    const restored = JSON.parse(lastSnapshot);
    return {
      ...state,
      ...restored,
      isTimeoutActive: false,
      timeoutTimerSeconds: 0,
      timeoutTeam: null,
      historyStack: newStack,
    };
  } catch {
    return state;
  }
}

export function callTimeout(state: VolleyballGameState, team: ServingTeam): VolleyballGameState {
  if (state.isMatchFinished || state.isTimeoutActive) return state;
  const target = team === 'teamA' ? state.teamA : state.teamB;
  if (target.timeoutsRemaining <= 0) return state;
  return {
    ...state,
    isTimeoutActive: true,
    timeoutTimerSeconds: 30,
    timeoutTeam: team,
    [team]: {
      ...target,
      timeoutsRemaining: target.timeoutsRemaining - 1,
    },
  };
}

export function recordSubstitution(state: VolleyballGameState, team: ServingTeam): VolleyballGameState {
  if (state.isMatchFinished) return state;
  const target = team === 'teamA' ? state.teamA : state.teamB;
  if (target.substitutionsUsed >= 6) return state;
  return {
    ...state,
    [team]: {
      ...target,
      substitutionsUsed: target.substitutionsUsed + 1,
    },
  };
}

export function manualRotate(state: VolleyballGameState, team: ServingTeam): VolleyballGameState {
  if (state.isMatchFinished) return state;
  const target = team === 'teamA' ? state.teamA : state.teamB;
  return {
    ...state,
    [team]: {
      ...target,
      rotationOrder: rotateClockwise(target.rotationOrder),
    },
  };
}

export function switchTeamSides(state: VolleyballGameState): VolleyballGameState {
  return {
    ...state,
    servingTeam: state.servingTeam === 'teamA' ? 'teamB' : 'teamA',
    teamA: state.teamB,
    teamB: state.teamA,
  };
}
