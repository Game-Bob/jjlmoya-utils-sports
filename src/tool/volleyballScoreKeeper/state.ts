import type { MatchFormat, TeamMatchState, VolleyballGameState } from './ui';

export function createTeamInitialState(defaultName: string): TeamMatchState {
  return {
    name: defaultName,
    currentPoints: 0,
    setsWon: 0,
    timeoutsRemaining: 2,
    substitutionsUsed: 0,
    rotationOrder: [1, 2, 3, 4, 5, 6],
  };
}

export function createInitialVolleyballState(format: MatchFormat = 'bestOf5'): VolleyballGameState {
  return {
    format,
    currentSetIndex: 1,
    isMatchFinished: false,
    matchWinner: null,
    servingTeam: 'teamA',
    teamA: createTeamInitialState('Team A'),
    teamB: createTeamInitialState('Team B'),
    completedSets: [],
    isTimeoutActive: false,
    timeoutTimerSeconds: 0,
    timeoutTeam: null,
    isMatchPoint: false,
    isSetPoint: false,
    historyStack: [],
  };
}
