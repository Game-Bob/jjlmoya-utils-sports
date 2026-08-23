import type {
  LeagueConfig,
  LeagueLibrary,
  LeagueRecord,
  LeagueResults,
  MatchResult,
  ScoringRules,
} from './logic';

function isScoringRules(value: unknown): value is ScoringRules {
  if (!value || typeof value !== 'object') return false;
  const rules = value as Partial<ScoringRules>;
  return [rules.win, rules.draw, rules.loss].every((points) => Number.isInteger(points));
}

export function isLeagueConfig(value: unknown): value is LeagueConfig {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<LeagueConfig>;
  const validFormat = candidate.format === 'single' || candidate.format === 'double';
  const validTeams = Array.isArray(candidate.teams)
    && candidate.teams.every((team) => typeof team === 'string');
  return typeof candidate.name === 'string' && validTeams && validFormat && isScoringRules(candidate.scoring);
}

function isMatchResult(value: unknown): value is MatchResult {
  if (!value || typeof value !== 'object') return false;
  const result = value as Partial<MatchResult>;
  const valid = (score: unknown) => score === null || Number.isInteger(score);
  return valid(result.home) && valid(result.away);
}

function isLeagueResults(value: unknown): value is LeagueResults {
  return Boolean(value) && typeof value === 'object'
    && Object.values(value as Record<string, unknown>).every(isMatchResult);
}

function hasRecordMetadata(record: Partial<LeagueRecord>): boolean {
  return record.schemaVersion === 1
    && typeof record.id === 'string'
    && typeof record.createdAt === 'string'
    && typeof record.updatedAt === 'string'
    && Number.isInteger(record.selectedRound);
}

export function isLeagueRecord(value: unknown): value is LeagueRecord {
  if (!value || typeof value !== 'object') return false;
  const record = value as Partial<LeagueRecord>;
  return hasRecordMetadata(record) && isLeagueConfig(record.config) && isLeagueResults(record.results);
}

export function isLeagueLibrary(value: unknown): value is LeagueLibrary {
  if (!value || typeof value !== 'object') return false;
  const library = value as Partial<LeagueLibrary>;
  const validActive = library.activeLeagueId === null || typeof library.activeLeagueId === 'string';
  return library.schemaVersion === 1 && validActive
    && Array.isArray(library.leagues) && library.leagues.every(isLeagueRecord);
}
