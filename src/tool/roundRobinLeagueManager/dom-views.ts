import {
  calculateProgress,
  calculateStandings,
  generateSchedule,
  isCompleteResult,
  type LeagueLibrary,
  type LeagueMatch,
  type LeagueRecord,
  type MatchResult,
  type LeagueRound,
  type LeagueSchedule,
  type StandingRow,
} from './logic';
import type { RoundRobinLeagueManagerUI } from './ui';

function query<T extends Element>(root: HTMLElement, selector: string): T | null {
  return root.querySelector<T>(selector);
}

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function teamBadge(team: string): HTMLElement {
  const badge = element('span', 'rlm-team-badge');
  badge.textContent = team.split(/\s+/).slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  return badge;
}

function leagueMeta(record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): string {
  const format = record.config.format === 'single' ? ui.formatSingleMeta : ui.formatDoubleMeta;
  return `${record.config.teams.length} ${ui.teamsCount} · ${schedule.rounds.length} ${ui.roundsCount} · ${format}`;
}

function actionButton(label: string, action: string, id: string, quiet = false): HTMLButtonElement {
  const button = element('button', quiet ? 'rlm-card-action is-quiet' : 'rlm-card-action');
  button.type = 'button';
  button.dataset.action = action;
  button.dataset.leagueId = id;
  button.textContent = label;
  return button;
}

function leagueCard(record: LeagueRecord, ui: RoundRobinLeagueManagerUI): HTMLElement {
  const schedule = generateSchedule(record.config);
  const progress = calculateProgress(schedule, record.results);
  const card = element('article', 'rlm-league-card');
  const main = element('div', 'rlm-league-card-main');
  const name = element('h3');
  const meta = element('p');
  const updated = element('small', 'rlm-card-updated');
  const status = element('span', 'rlm-progress-pill');
  name.textContent = record.config.name;
  meta.textContent = leagueMeta(record, schedule, ui);
  updated.textContent = `${ui.updatedLabel} ${new Date(record.updatedAt).toLocaleDateString()}`;
  status.textContent = `${progress.completed}/${progress.total} ${ui.completedLabel}`;
  main.append(name, meta, updated, status);
  const actions = element('div', 'rlm-card-actions');
  actions.append(
    actionButton(ui.openLeague, 'open-league', record.id),
    actionButton(ui.share, 'share-library-league', record.id, true),
    actionButton(ui.delete, 'delete-library-league', record.id, true),
  );
  card.append(main, actions);
  return card;
}

export function renderLibrary(root: HTMLElement, library: LeagueLibrary, ui: RoundRobinLeagueManagerUI): void {
  const target = query<HTMLElement>(root, '[data-role="league-list"]');
  const empty = query<HTMLElement>(root, '[data-role="library-empty"]');
  const count = query<HTMLElement>(root, '[data-role="league-count"]');
  if (!target || !empty || !count) return;
  const ordered = [...library.leagues].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
  target.replaceChildren(...ordered.map((record) => leagueCard(record, ui)));
  empty.hidden = ordered.length > 0;
  count.textContent = String(ordered.length);
}

function roundTitle(round: LeagueRound, ui: RoundRobinLeagueManagerUI): string {
  const leg = round.leg === 1 ? ui.firstLeg : ui.secondLeg;
  return `${ui.matchday} ${round.number} · ${leg}`;
}

function renderRounds(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  const target = query<HTMLElement>(root, '[data-role="round-list"]');
  if (!target) return;
  const buttons = schedule.rounds.map((round, index) => {
    const button = element('button', 'rlm-round-button');
    button.type = 'button';
    button.dataset.action = 'select-round';
    button.dataset.round = String(index);
    button.textContent = String(round.number);
    button.title = roundTitle(round, ui);
    button.setAttribute('aria-pressed', String(index === record.selectedRound));
    return button;
  });
  target.replaceChildren(...buttons);
}

function scoreInput(match: LeagueMatch, side: 'home' | 'away', record: LeagueRecord, ui: RoundRobinLeagueManagerUI): HTMLInputElement {
  const input = element('input', 'rlm-score-input');
  const score = record.results[match.id]?.[side];
  input.type = 'number';
  input.min = '0';
  input.max = '999';
  input.inputMode = 'numeric';
  input.dataset.matchId = match.id;
  input.dataset.side = side;
  input.value = score === null || score === undefined ? '' : String(score);
  input.setAttribute('aria-label', `${ui.enterResult}: ${side === 'home' ? match.home : match.away}`);
  return input;
}

function matchRow(match: LeagueMatch, record: LeagueRecord, ui: RoundRobinLeagueManagerUI): HTMLElement {
  const result = record.results[match.id];
  const complete = result?.home !== null && result?.home !== undefined
    && result.away !== null && result.away !== undefined;
  const row = element('div', complete ? 'rlm-match is-played' : 'rlm-match');
  const home = element('div', 'rlm-match-team is-home');
  const away = element('div', 'rlm-match-team is-away');
  const homeName = element('strong');
  const awayName = element('strong');
  homeName.textContent = match.home;
  awayName.textContent = match.away;
  home.append(homeName, teamBadge(match.home));
  away.append(teamBadge(match.away), awayName);
  const score = element('div', 'rlm-score');
  const separator = element('span');
  separator.textContent = ':';
  score.append(scoreInput(match, 'home', record, ui), separator, scoreInput(match, 'away', record, ui));
  const state = element('span', 'rlm-match-state');
  state.textContent = complete ? ui.played : ui.pending;
  row.append(home, score, away, state);
  return row;
}

export function renderMatchStatus(input: HTMLInputElement, result: MatchResult | undefined, ui: RoundRobinLeagueManagerUI): void {
  const complete = isCompleteResult(result);
  const row = input.closest<HTMLElement>('.rlm-match');
  const status = row?.querySelector<HTMLElement>('.rlm-match-state');
  row?.classList.toggle('is-played', complete);
  if (status) status.textContent = complete ? ui.played : ui.pending;
}

function renderMatches(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  const round = schedule.rounds[record.selectedRound] ?? schedule.rounds[0];
  const target = query<HTMLElement>(root, '[data-role="match-list"]');
  const title = query<HTMLElement>(root, '[data-role="round-title"]');
  const bye = query<HTMLElement>(root, '[data-role="bye"]');
  if (!target || !title || !bye || !round) return;
  title.textContent = roundTitle(round, ui);
  target.replaceChildren(...round.matches.map((match) => matchRow(match, record, ui)));
  bye.hidden = !round.bye;
  bye.textContent = round.bye ? `${ui.byeLabel}: ${round.bye}. ${ui.byeHint}` : '';
}

const TABLE_KEYS: Array<keyof StandingRow> = [
  'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference', 'points',
];

const STAT_CLASSES: Partial<Record<keyof StandingRow, string>> = {
  played: 'played', won: 'won', drawn: 'drawn', lost: 'lost',
  goalsFor: 'goals-for', goalsAgainst: 'goals-against', goalDifference: 'goal-difference',
};

function standingRow(row: StandingRow): HTMLTableRowElement {
  const tr = element('tr');
  const position = element('td', 'rlm-position');
  const team = element('td', 'rlm-standing-team');
  position.textContent = String(row.position);
  const teamInner = element('div', 'rlm-standing-team-inner');
  const name = element('strong');
  name.textContent = row.team;
  teamInner.append(teamBadge(row.team), name);
  team.append(teamInner);
  tr.append(position, team);
  TABLE_KEYS.forEach((key) => {
    const cell = element('td', key === 'points' ? 'rlm-points' : `rlm-stat-${STAT_CLASSES[key]}`);
    const value = row[key];
    cell.textContent = key === 'goalDifference' && Number(value) > 0 ? `+${value}` : String(value);
    tr.append(cell);
  });
  return tr;
}

function standingsTable(rows: StandingRow[], ui: RoundRobinLeagueManagerUI): HTMLTableElement {
  const table = element('table', 'rlm-table');
  const header = element('tr');
  const labels = [ui.positionShort, ui.teamShort, ui.playedShort, ui.wonShort, ui.drawnShort, ui.lostShort, ui.goalsForShort, ui.goalsAgainstShort, ui.goalDifferenceShort, ui.pointsShort];
  labels.forEach((label) => {
    const cell = element('th');
    cell.scope = 'col';
    cell.textContent = label;
    header.append(cell);
  });
  const head = element('thead');
  const body = element('tbody');
  head.append(header);
  body.append(...rows.map(standingRow));
  table.append(head, body);
  return table;
}

function renderStandings(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  const rows = calculateStandings(record.config, schedule, record.results);
  root.querySelectorAll<HTMLElement>('[data-role="standings-table"]').forEach((target) => {
    target.replaceChildren(standingsTable(rows, ui));
  });
}

function renderProgress(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  const progress = calculateProgress(schedule, record.results);
  const text = query<HTMLElement>(root, '[data-role="progress-text"]');
  const bar = query<HTMLElement>(root, '[data-role="progress-bar"]');
  if (text) text.textContent = `${progress.completed}/${progress.total} ${ui.completedLabel}`;
  if (bar) bar.style.width = `${progress.percentage}%`;
}

export function renderManager(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  const name = query<HTMLElement>(root, '[data-role="active-name"]');
  const meta = query<HTMLElement>(root, '[data-role="active-meta"]');
  if (name) name.textContent = record.config.name;
  if (meta) meta.textContent = leagueMeta(record, schedule, ui);
  renderRounds(root, record, schedule, ui);
  renderMatches(root, record, schedule, ui);
  renderStandings(root, record, schedule, ui);
  renderProgress(root, record, schedule, ui);
}

export function renderLiveData(root: HTMLElement, record: LeagueRecord, schedule: LeagueSchedule, ui: RoundRobinLeagueManagerUI): void {
  renderStandings(root, record, schedule, ui);
  renderProgress(root, record, schedule, ui);
}

export function renderSettings(root: HTMLElement, record: LeagueRecord): void {
  const name = query<HTMLInputElement>(root, '[data-role="settings-name"]');
  const win = query<HTMLInputElement>(root, '[data-role="settings-win"]');
  const draw = query<HTMLInputElement>(root, '[data-role="settings-draw"]');
  const loss = query<HTMLInputElement>(root, '[data-role="settings-loss"]');
  if (name) name.value = record.config.name;
  if (win) win.value = String(record.config.scoring.win);
  if (draw) draw.value = String(record.config.scoring.draw);
  if (loss) loss.value = String(record.config.scoring.loss);
}
