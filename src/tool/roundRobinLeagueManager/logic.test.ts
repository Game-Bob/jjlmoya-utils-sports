import { describe, expect, it } from 'vitest';
import { evaluateDraft } from './evaluator';
import {
  DEFAULT_SCORING,
  calculateProgress,
  calculateStandings,
  createEmptyLibrary,
  createLeagueRecord,
  findDuplicateTeam,
  generateSchedule,
  isLeagueConfig,
  isLeagueLibrary,
  normalizeTeams,
  parseScore,
  type LeagueConfig,
  type LeagueResults,
} from './logic';
import { createLeagueShareUrl, decodeLeague, encodeLeague, sharedLeagueId } from './sharing';
import { clearLeagueLibrary, loadLeagueLibrary, saveLeagueLibrary, type StorageAdapter } from './storage';

const config: LeagueConfig = {
  name: 'Friday League',
  teams: ['Owls', 'Foxes', 'Kites', 'Bears'],
  format: 'single',
  scoring: DEFAULT_SCORING,
};

function memoryStorage(): StorageAdapter {
  const values = new Map<string, string>();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

describe('league schedule', () => {
  it('normalizes participant input and finds case insensitive duplicates', () => {
    expect(normalizeTeams('Owls, Foxes\n Red  Kites; Bears ')).toEqual(['Owls', 'Foxes', 'Red Kites', 'Bears']);
    expect(findDuplicateTeam(['Owls', 'Foxes', 'owls'])).toBe('owls');
    expect(findDuplicateTeam(['Owls', 'Foxes'])).toBeUndefined();
  });

  it('creates every unique pairing once for an even single leg league', () => {
    const schedule = generateSchedule(config);
    const pairs = schedule.rounds.flatMap((round) => round.matches.map((match) => [match.home, match.away].sort().join(':')));
    expect(schedule.rounds).toHaveLength(3);
    expect(schedule.totalMatches).toBe(6);
    expect(new Set(pairs).size).toBe(6);
  });

  it('rotates one bye per round when the team count is odd', () => {
    const odd = { ...config, teams: [...config.teams, 'Lions'] };
    const schedule = generateSchedule(odd);
    expect(schedule.rounds).toHaveLength(5);
    expect(schedule.rounds.map((round) => round.bye).sort()).toEqual([...odd.teams].sort());
  });

  it('reverses fixtures for a double leg league', () => {
    const schedule = generateSchedule({ ...config, format: 'double' });
    expect(schedule.rounds).toHaveLength(6);
    expect(schedule.rounds[3]!.matches[0]).toMatchObject({
      home: schedule.rounds[0]!.matches[0]!.away,
      away: schedule.rounds[0]!.matches[0]!.home,
    });
  });
});

describe('results and standings', () => {
  it('calculates wins, draws, goal difference and points', () => {
    const schedule = generateSchedule(config);
    const [first, second] = schedule.rounds[0]!.matches;
    const results: LeagueResults = {
      [first!.id]: { home: 3, away: 1 },
      [second!.id]: { home: 2, away: 2 },
    };
    const standings = calculateStandings(config, schedule, results);
    expect(standings[0]).toMatchObject({ team: first!.home, won: 1, points: 3, goalDifference: 2 });
    expect(standings.filter((row) => row.drawn === 1)).toHaveLength(2);
    expect(calculateProgress(schedule, results)).toEqual({ completed: 2, total: 6, percentage: 33 });
  });

  it('ignores partial results and resolves table ties by name', () => {
    const schedule = generateSchedule(config);
    const result = { [schedule.rounds[0]!.matches[0]!.id]: { home: 1, away: null } };
    const standings = calculateStandings(config, schedule, result);
    expect(standings.every((row) => row.played === 0)).toBe(true);
    expect(standings.map((row) => row.team)).toEqual(['Bears', 'Foxes', 'Kites', 'Owls']);
  });

  it('parses only blank or valid nonnegative integer scores', () => {
    expect(parseScore('')).toBeNull();
    expect(parseScore(' 4 ')).toBe(4);
    expect(parseScore('-1')).toBeNull();
    expect(parseScore('1.5')).toBeNull();
    expect(parseScore('1000')).toBeNull();
  });
});

describe('league records and validation', () => {
  it('creates and recognizes complete records and libraries', () => {
    const record = createLeagueRecord(config, 'league-1', '2026-08-23T10:00:00.000Z');
    const library = { ...createEmptyLibrary(), activeLeagueId: record.id, leagues: [record] };
    expect(isLeagueConfig(config)).toBe(true);
    expect(isLeagueLibrary(library)).toBe(true);
    expect(isLeagueLibrary({ leagues: [null] })).toBe(false);
  });

  it('reports all creation errors and a ready draft', () => {
    expect(evaluateDraft({ ...config, name: '' }).code).toBe('name');
    expect(evaluateDraft({ ...config, teams: [] }).code).toBe('empty');
    expect(evaluateDraft({ ...config, teams: ['A'] }).code).toBe('minimum');
    expect(evaluateDraft({ ...config, teams: ['A', 'a'] }).code).toBe('duplicate');
    expect(evaluateDraft({ ...config, teams: Array.from({ length: 25 }, (_, index) => `${index}`) }).code).toBe('maximum');
    expect(evaluateDraft({ ...config, teams: ['A'.repeat(41), 'B'] }).code).toBe('long-name');
    expect(evaluateDraft(config)).toMatchObject({ code: 'ready', valid: true });
  });
});

describe('multiple league storage and sharing', () => {
  it('persists multiple leagues in one library', () => {
    const storage = memoryStorage();
    const first = createLeagueRecord(config, 'one', '2026-08-23T10:00:00.000Z');
    const second = createLeagueRecord({ ...config, name: 'Sunday League' }, 'two', '2026-08-23T11:00:00.000Z');
    const library = { schemaVersion: 1 as const, activeLeagueId: 'two', leagues: [first, second] };
    expect(saveLeagueLibrary(library, storage)).toBe(true);
    expect(loadLeagueLibrary(storage)).toEqual(library);
    expect(clearLeagueLibrary(storage)).toBe(true);
    expect(loadLeagueLibrary(storage)).toEqual(createEmptyLibrary());
  });

  it('round trips a full league through a compressed link token', () => {
    const record = createLeagueRecord(config, 'one', '2026-08-23T10:00:00.000Z');
    record.results.r1m1 = { home: 2, away: 1 };
    const token = encodeLeague(record);
    expect(decodeLeague(token)).toEqual(record);
    expect(decodeLeague('invalid')).toBeNull();
    expect(createLeagueShareUrl('https://gamebob.dev/tool?old=1', record)).toContain('?league=');
    expect(sharedLeagueId(token)).toBe(sharedLeagueId(token));
  });

  it('falls back safely when storage is unavailable or corrupt', () => {
    const broken: StorageAdapter = {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
      removeItem: () => { throw new Error('blocked'); },
    };
    expect(loadLeagueLibrary(broken)).toEqual(createEmptyLibrary());
    expect(saveLeagueLibrary(createEmptyLibrary(), broken)).toBe(false);
    expect(clearLeagueLibrary(broken)).toBe(false);
  });
});
