export type LeagueFormat = 'single' | 'double';

export interface ScoringRules {
  win: number;
  draw: number;
  loss: number;
}

export interface LeagueConfig {
  name: string;
  teams: string[];
  format: LeagueFormat;
  scoring: ScoringRules;
}

export interface LeagueMatch {
  id: string;
  home: string;
  away: string;
}

export interface LeagueRound {
  number: number;
  leg: 1 | 2;
  matches: LeagueMatch[];
  bye?: string;
}

export interface LeagueSchedule {
  rounds: LeagueRound[];
  totalMatches: number;
}

export interface MatchResult {
  home: number | null;
  away: number | null;
}

export type LeagueResults = Record<string, MatchResult>;

export interface LeagueRecord {
  schemaVersion: 1;
  id: string;
  createdAt: string;
  updatedAt: string;
  selectedRound: number;
  config: LeagueConfig;
  results: LeagueResults;
}

export interface LeagueLibrary {
  schemaVersion: 1;
  activeLeagueId: string | null;
  leagues: LeagueRecord[];
}

export interface StandingRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface LeagueProgress {
  completed: number;
  total: number;
  percentage: number;
}

export const MAX_TEAMS = 24;
export const MAX_TEAM_NAME_LENGTH = 40;
export const DEFAULT_SCORING: ScoringRules = { win: 3, draw: 1, loss: 0 };

export function normalizeTeams(value: string): string[] {
  return value
    .split(/[\n,;]+/)
    .map((team) => team.trim().replace(/\s+/g, ' '))
    .filter(Boolean);
}

export function findDuplicateTeam(teams: string[]): string | undefined {
  const seen = new Set<string>();
  return teams.find((team) => {
    const key = team.toLocaleLowerCase();
    if (seen.has(key)) return true;
    seen.add(key);
    return false;
  });
}

function rotateTeams(teams: Array<string | null>): Array<string | null> {
  const fixed = teams[0] ?? null;
  const moving = teams.slice(1);
  return [fixed, moving.at(-1) ?? null, ...moving.slice(0, -1)];
}

function createMatch(left: string, right: string, round: number, pair: number): LeagueMatch {
  const swap = (round + pair) % 2 === 1;
  return {
    id: `r${round + 1}m${pair + 1}`,
    home: swap ? right : left,
    away: swap ? left : right,
  };
}

function createRound(teams: Array<string | null>, index: number): LeagueRound {
  const matches: LeagueMatch[] = [];
  let bye: string | undefined;
  for (let pair = 0; pair < teams.length / 2; pair += 1) {
    const left = teams[pair];
    const right = teams[teams.length - 1 - pair];
    if (!left || !right) bye = left ?? right ?? undefined;
    else matches.push(createMatch(left, right, index, pair));
  }
  return { number: index + 1, leg: 1, matches, ...(bye ? { bye } : {}) };
}

function createFirstLeg(teams: string[]): LeagueRound[] {
  let rotating: Array<string | null> = [...teams];
  if (rotating.length % 2 === 1) rotating.push(null);
  return Array.from({ length: rotating.length - 1 }, (_, index) => {
    const round = createRound(rotating, index);
    rotating = rotateTeams(rotating);
    return round;
  });
}

function createSecondLeg(rounds: LeagueRound[]): LeagueRound[] {
  return rounds.map((round, index) => ({
    number: rounds.length + index + 1,
    leg: 2,
    matches: round.matches.map((match, matchIndex) => ({
      id: `r${rounds.length + index + 1}m${matchIndex + 1}`,
      home: match.away,
      away: match.home,
    })),
    ...(round.bye ? { bye: round.bye } : {}),
  }));
}

export function generateSchedule(config: LeagueConfig): LeagueSchedule {
  const firstLeg = createFirstLeg(config.teams);
  const rounds = config.format === 'double'
    ? [...firstLeg, ...createSecondLeg(firstLeg)]
    : firstLeg;
  return {
    rounds,
    totalMatches: rounds.reduce((sum, round) => sum + round.matches.length, 0),
  };
}

export { isLeagueConfig, isLeagueLibrary, isLeagueRecord } from './validation';

export function createLeagueRecord(config: LeagueConfig, id: string, now: string): LeagueRecord {
  return {
    schemaVersion: 1,
    id,
    createdAt: now,
    updatedAt: now,
    selectedRound: 0,
    config,
    results: {},
  };
}

export function createEmptyLibrary(): LeagueLibrary {
  return { schemaVersion: 1, activeLeagueId: null, leagues: [] };
}

function createStanding(team: string): StandingRow {
  return {
    position: 0,
    team,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  };
}

function applyOutcome(row: StandingRow, goalsFor: number, goalsAgainst: number, rules: ScoringRules): void {
  row.played += 1;
  row.goalsFor += goalsFor;
  row.goalsAgainst += goalsAgainst;
  row.goalDifference = row.goalsFor - row.goalsAgainst;
  if (goalsFor > goalsAgainst) {
    row.won += 1;
    row.points += rules.win;
  } else if (goalsFor < goalsAgainst) {
    row.lost += 1;
    row.points += rules.loss;
  } else {
    row.drawn += 1;
    row.points += rules.draw;
  }
}

export function isCompleteResult(result?: MatchResult): result is { home: number; away: number } {
  return result?.home !== null && result?.home !== undefined
    && result.away !== null && result.away !== undefined;
}

function compareStandings(left: StandingRow, right: StandingRow): number {
  return right.points - left.points
    || right.goalDifference - left.goalDifference
    || right.goalsFor - left.goalsFor
    || left.team.localeCompare(right.team);
}

export function calculateStandings(config: LeagueConfig, schedule: LeagueSchedule, results: LeagueResults): StandingRow[] {
  const rows = new Map(config.teams.map((team) => [team, createStanding(team)]));
  schedule.rounds.flatMap((round) => round.matches).forEach((match) => {
    const result = results[match.id];
    if (!isCompleteResult(result)) return;
    applyOutcome(rows.get(match.home)!, result.home, result.away, config.scoring);
    applyOutcome(rows.get(match.away)!, result.away, result.home, config.scoring);
  });
  return [...rows.values()]
    .sort(compareStandings)
    .map((row, index) => ({ ...row, position: index + 1 }));
}

export function calculateProgress(schedule: LeagueSchedule, results: LeagueResults): LeagueProgress {
  const completed = Object.values(results).filter(isCompleteResult).length;
  const total = schedule.totalMatches;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percentage };
}

export function parseScore(value: string): number | null {
  if (value.trim() === '') return null;
  const score = Number(value);
  return Number.isInteger(score) && score >= 0 && score <= 999 ? score : null;
}
