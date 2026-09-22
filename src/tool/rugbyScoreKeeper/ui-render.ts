import type { MatchState, TeamKey, TeamScore } from './logic';
import type { RugbyScoreKeeperUI } from './ui';
import { bonusPoints, formatSinBinTime, formatTime, losingBonus, teamTotal } from './logic';
import { eventLabel } from './ui-helpers';

export function q<T extends Element = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function emptyState(className: string, text: string): HTMLElement {
  const element = document.createElement('div');
  element.className = className;
  element.textContent = text;
  return element;
}

function renderHalf(state: MatchState, ui: RugbyScoreKeeperUI) {
  const label = q('rg-half-label');
  const badge = q('rg-half-badge');
  if (label) label.textContent = String(state.half);
  if (badge) badge.textContent = state.half === 1 ? ui.half1 : ui.half2;
}

function renderClock(state: MatchState) {
  const clock = q('rg-clock-time');
  if (clock) clock.textContent = formatTime(state.elapsed);
  const fill = q<SVGPathElement>('rg-clock-fill');
  if (!fill) return;
  const max = state.half === 1 ? 2400 : 4800;
  const circumference = 2 * Math.PI * 54;
  fill.style.strokeDasharray = String(circumference);
  fill.style.strokeDashoffset = String(circumference * (1 - Math.min(state.elapsed / max, 1)));
}

function renderBonuses(state: MatchState) {
  const values: [TeamKey, HTMLElement | null][] = [
    ['home', q('rg-bonus-home')], ['away', q('rg-bonus-away')],
  ];
  values.forEach(([team, element]) => {
    if (!element) return;
    const score = state[team];
    const bonus = losingBonus(state.home, state.away, team) ? [...bonusPoints(score), 'LBP'] : bonusPoints(score);
    element.textContent = bonus.join(' ');
  });
}

function historyRow(state: MatchState, index: number, ui: RugbyScoreKeeperUI,
  names: Record<TeamKey, string>): HTMLElement {
  const event = state.history[index]!;
  const row = document.createElement('div');
  row.className = `rg-history-event rg-ev-${event.team}`;
  const team = document.createElement('span');
  team.className = 'rg-ev-team';
  team.textContent = names[event.team];
  const minute = document.createElement('span');
  minute.className = 'rg-ev-min';
  minute.textContent = event.minute;
  const label = document.createElement('span');
  label.className = 'rg-ev-label';
  label.textContent = eventLabel(event, ui);
  row.append(team, minute, label);
  return row;
}

function renderHistory(state: MatchState, ui: RugbyScoreKeeperUI, names: Record<TeamKey, string>) {
  const list = q('rg-history-list');
  const undo = q<HTMLButtonElement>('rg-btn-undo');
  if (!list) return;
  if (state.history.length === 0) {
    list.replaceChildren(emptyState('rg-history-empty', ui.eventEmpty));
    if (undo) undo.disabled = true;
    return;
  }
  if (undo) undo.disabled = false;
  list.replaceChildren(...state.history.map((_, index) => historyRow(state, index, ui, names)));
  requestAnimationFrame(() => { list.scrollTo(0, 1e9); });
}

function sinBinCard(state: MatchState, index: number): HTMLElement {
  const entry = state.sinBin[index]!;
  const percent = Math.max(0, Math.min(100, (entry.remaining / entry.total) * 100));
  let level = 'safe';
  if (percent < 25) level = 'critical';
  else if (percent < 60) level = 'warn';
  const card = document.createElement('div');
  card.className = `rg-sinbin-card rg-sinbin-${level} rg-sinbin-${entry.team}`;
  const player = document.createElement('div');
  player.className = 'rg-sinbin-player';
  player.textContent = entry.player;
  const time = document.createElement('div');
  time.className = 'rg-sinbin-time';
  time.textContent = formatSinBinTime(entry.remaining);
  const bar = document.createElement('div');
  bar.className = 'rg-sinbin-bar';
  const fill = document.createElement('div');
  fill.className = 'rg-sinbin-fill';
  fill.style.width = `${percent}%`;
  bar.append(fill);
  card.append(player, time, bar);
  return card;
}

function renderSinBin(state: MatchState, ui: RugbyScoreKeeperUI) {
  const list = q('rg-sinbin-list');
  if (!list) return;
  if (state.sinBin.length === 0) {
    list.replaceChildren(emptyState('rg-sinbin-empty', ui.sinBinEmpty));
    return;
  }
  list.replaceChildren(...state.sinBin.map((_, index) => sinBinCard(state, index)));
}

function renderSummary(state: MatchState) {
  const rows: (keyof TeamScore)[] = ['tries', 'conversions', 'penalties', 'dropGoals'];
  q('rg-summary-body')?.querySelectorAll('tr').forEach((row, index) => {
    const key = rows[index];
    if (!key) return;
    const cells = row.querySelectorAll('td');
    if (cells[1]) cells[1].textContent = String(state.home[key]);
    if (cells[2]) cells[2].textContent = String(state.away[key]);
  });
  const home = q('rg-total-home');
  const away = q('rg-total-away');
  if (home) home.textContent = String(teamTotal(state.home));
  if (away) away.textContent = String(teamTotal(state.away));
}

export function renderTeamNames(names: Record<TeamKey, string>) {
  const targets: [string, TeamKey][] = [
    ['rg-col-label-home', 'home'], ['rg-col-label-away', 'away'],
    ['rg-summary-home', 'home'], ['rg-summary-away', 'away'],
  ];
  targets.forEach(([id, team]) => { const node = q(id); if (node) node.textContent = names[team]; });
}

export function renderScoreboard(state: MatchState, ui: RugbyScoreKeeperUI,
  names: Record<TeamKey, string>) {
  const home = q('rg-score-home');
  const away = q('rg-score-away');
  if (home) home.textContent = String(teamTotal(state.home));
  if (away) away.textContent = String(teamTotal(state.away));
  renderHalf(state, ui);
  renderClock(state);
  renderSinBin(state, ui);
  renderSummary(state);
  renderHistory(state, ui, names);
  renderBonuses(state);
  renderTeamNames(names);
}
