import {
  findDuplicateTeam,
  MAX_TEAM_NAME_LENGTH,
  MAX_TEAMS,
  type LeagueConfig,
} from './logic';

export type DraftCode = 'name' | 'empty' | 'minimum' | 'ready' | 'duplicate' | 'maximum' | 'long-name';

export interface DraftEvaluation {
  code: DraftCode;
  valid: boolean;
  count: number;
  detail?: string;
}

export function evaluateDraft(config: LeagueConfig): DraftEvaluation {
  const { teams } = config;
  if (!config.name.trim()) return { code: 'name', valid: false, count: teams.length };
  if (teams.length === 0) return { code: 'empty', valid: false, count: 0 };
  if (teams.length < 2) return { code: 'minimum', valid: false, count: teams.length };
  const duplicate = findDuplicateTeam(teams);
  if (duplicate) return { code: 'duplicate', valid: false, count: teams.length, detail: duplicate };
  if (teams.length > MAX_TEAMS) return { code: 'maximum', valid: false, count: teams.length };
  const longName = teams.find((team) => team.length > MAX_TEAM_NAME_LENGTH);
  if (longName) return { code: 'long-name', valid: false, count: teams.length, detail: longName };
  return { code: 'ready', valid: true, count: teams.length };
}
