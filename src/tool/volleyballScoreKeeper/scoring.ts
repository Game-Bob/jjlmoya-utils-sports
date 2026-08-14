import type { ServingTeam, SetRecord, VolleyballGameState } from './ui';
import { checkSetPoint, checkSetWinner, getSetsToWin, getTargetPointsForSet } from './sets';
import { pushHistorySnapshot, rotateClockwise } from './actions';

function applyRallySideout(
  state: VolleyballGameState,
  scoringTeam: ServingTeam,
): { teamAOrder: number[]; teamBOrder: number[] } {
  const isSideout = state.servingTeam !== scoringTeam;
  const teamAOrder = scoringTeam === 'teamA' && isSideout
    ? rotateClockwise(state.teamA.rotationOrder)
    : state.teamA.rotationOrder;
  const teamBOrder = scoringTeam === 'teamB' && isSideout
    ? rotateClockwise(state.teamB.rotationOrder)
    : state.teamB.rotationOrder;
  return { teamAOrder, teamBOrder };
}

function handleCompletedSet(
  state: VolleyballGameState,
  winner: ServingTeam,
  ptsA: number,
  ptsB: number,
): VolleyballGameState {
  const newSetsA = winner === 'teamA' ? state.teamA.setsWon + 1 : state.teamA.setsWon;
  const newSetsB = winner === 'teamB' ? state.teamB.setsWon + 1 : state.teamB.setsWon;
  const reqSets = getSetsToWin(state.format);
  const isMatchFinished = newSetsA >= reqSets || newSetsB >= reqSets;
  const matchWinner = isMatchFinished ? winner : null;
  const setRecord: SetRecord = {
    setNumber: state.currentSetIndex,
    teamAPoints: ptsA,
    teamBPoints: ptsB,
    winner,
  };
  return {
    ...state,
    currentSetIndex: state.currentSetIndex + 1,
    isMatchFinished,
    matchWinner,
    completedSets: [...state.completedSets, setRecord],
    teamA: { ...state.teamA, currentPoints: 0, setsWon: newSetsA, timeoutsRemaining: 2, substitutionsUsed: 0 },
    teamB: { ...state.teamB, currentPoints: 0, setsWon: newSetsB, timeoutsRemaining: 2, substitutionsUsed: 0 },
    isMatchPoint: false,
    isSetPoint: false,
  };
}

function evaluatePointMarkers(
  state: VolleyballGameState,
  scoringTeam: ServingTeam,
  ptsScorer: number,
  ptsOpponent: number,
): { isSetPoint: boolean; isMatchPoint: boolean } {
  const targetPts = getTargetPointsForSet(state.format, state.currentSetIndex);
  const reqSets = getSetsToWin(state.format);
  const scorerSets = scoringTeam === 'teamA' ? state.teamA.setsWon : state.teamB.setsWon;
  const isSetPoint = checkSetPoint(ptsScorer, ptsOpponent, targetPts);
  const isMatchPoint = isSetPoint && scorerSets === reqSets - 1;
  return { isSetPoint, isMatchPoint };
}

export function awardPoint(
  state: VolleyballGameState,
  scoringTeam: ServingTeam,
): VolleyballGameState {
  if (state.isMatchFinished) return state;
  const historyStack = pushHistorySnapshot(state);
  const targetPts = getTargetPointsForSet(state.format, state.currentSetIndex);
  const nextPtsA = scoringTeam === 'teamA' ? state.teamA.currentPoints + 1 : state.teamA.currentPoints;
  const nextPtsB = scoringTeam === 'teamB' ? state.teamB.currentPoints + 1 : state.teamB.currentPoints;
  const { teamAOrder, teamBOrder } = applyRallySideout(state, scoringTeam);

  const updatedState: VolleyballGameState = {
    ...state,
    servingTeam: scoringTeam,
    teamA: { ...state.teamA, currentPoints: nextPtsA, rotationOrder: teamAOrder },
    teamB: { ...state.teamB, currentPoints: nextPtsB, rotationOrder: teamBOrder },
    historyStack,
  };

  const scorerPts = scoringTeam === 'teamA' ? nextPtsA : nextPtsB;
  const oppPts = scoringTeam === 'teamA' ? nextPtsB : nextPtsA;

  if (checkSetWinner(scorerPts, oppPts, targetPts)) {
    return handleCompletedSet(updatedState, scoringTeam, nextPtsA, nextPtsB);
  }

  const markers = evaluatePointMarkers(state, scoringTeam, scorerPts, oppPts);
  return { ...updatedState, ...markers };
}
