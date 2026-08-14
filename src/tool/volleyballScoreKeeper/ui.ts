export interface VolleyballScoreKeeperUI extends Record<string, string> {
  teamA: string;
  teamB: string;
  points: string;
  sets: string;
  set: string;
  match: string;
  serving: string;
  sideout: string;
  rotation: string;
  timeout: string;
  timeoutsLeft: string;
  substitutions: string;
  matchPoint: string;
  setPoint: string;
  winner: string;
  reset: string;
  resetConfirm: string;
  cancel: string;
  undo: string;
  switchSides: string;
  fullscreen: string;
  exitFullscreen: string;
  rotateCourt: string;
  substitutePlayer: string;
  matchModeBestOf3: string;
  matchModeBestOf5: string;
  matchModeSingleSet: string;
  targetPoints25: string;
  targetPoints15: string;
  pos1RightBack: string;
  pos2RightFront: string;
  pos3MiddleFront: string;
  pos4LeftFront: string;
  pos5LeftBack: string;
  pos6MiddleBack: string;
  liberoLabel: string;
  tacticalCourtTitle: string;
  historyLogTitle: string;
}

export type MatchFormat = 'bestOf3' | 'bestOf5' | 'singleSet';
export type ServingTeam = 'teamA' | 'teamB';

export interface PlayerPosition {
  positionNumber: number;
  label: string;
  role: string;
  isServer: boolean;
}

export interface TeamMatchState {
  name: string;
  currentPoints: number;
  setsWon: number;
  timeoutsRemaining: number;
  substitutionsUsed: number;
  rotationOrder: number[];
}

export interface SetRecord {
  setNumber: number;
  teamAPoints: number;
  teamBPoints: number;
  winner: 'teamA' | 'teamB';
}

export interface VolleyballGameState {
  format: MatchFormat;
  currentSetIndex: number;
  isMatchFinished: boolean;
  matchWinner: 'teamA' | 'teamB' | null;
  servingTeam: ServingTeam;
  teamA: TeamMatchState;
  teamB: TeamMatchState;
  completedSets: SetRecord[];
  isTimeoutActive: boolean;
  timeoutTimerSeconds: number;
  timeoutTeam: ServingTeam | null;
  isMatchPoint: boolean;
  isSetPoint: boolean;
  historyStack: string[];
}
