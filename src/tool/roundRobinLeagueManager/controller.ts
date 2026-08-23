import { renderLibrary, renderLiveData, renderManager, renderMatchStatus, renderSettings } from './dom-views';
import { copyLeagueLink, createClientId, downloadLeagueBackup, readLeagueBackup } from './client-io';
import { pointsValue, readDraft, setFormat, syncDraft } from './draft-form';
import {
  createLeagueRecord,
  generateSchedule,
  parseScore,
  type LeagueLibrary,
  type LeagueRecord,
  type LeagueSchedule,
} from './logic';
import { importSharedLeague } from './sharing';
import { loadLeagueLibrary, saveLeagueLibrary } from './storage';
import type { RoundRobinLeagueManagerUI } from './ui';

interface AppState {
  library: LeagueLibrary;
  active: LeagueRecord | null;
  schedule: LeagueSchedule | null;
}

type ClickHandler = (button: HTMLButtonElement) => void;

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const node = root.querySelector<T>(selector);
  if (!node) throw new Error(`Missing element: ${selector}`);
  return node;
}

function readUI(root: HTMLElement): RoundRobinLeagueManagerUI {
  const script = query<HTMLScriptElement>(root, '[data-role="ui-json"]');
  return JSON.parse(script.textContent ?? '{}') as RoundRobinLeagueManagerUI;
}

function upsertActive(state: AppState): void {
  if (!state.active) return;
  const index = state.library.leagues.findIndex((league) => league.id === state.active?.id);
  if (index >= 0) state.library.leagues[index] = state.active;
  else state.library.leagues.push(state.active);
  state.library.activeLeagueId = state.active.id;
  saveLeagueLibrary(state.library);
}

function setNotice(root: HTMLElement, message: string): void {
  root.querySelectorAll<HTMLElement>('[data-role="notice"]').forEach((notice) => {
    notice.textContent = message;
  });
}

function showLibrary(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): void {
  query<HTMLElement>(root, '[data-view="library"]').hidden = false;
  query<HTMLElement>(root, '[data-view="manager"]').hidden = true;
  state.active = null;
  state.schedule = null;
  renderLibrary(root, state.library, ui);
}

function startNewLeague(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): void {
  showLibrary(root, state, ui);
  query<HTMLInputElement>(root, '[data-role="league-name"]').focus();
}

function openLeague(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, id: string): void {
  const record = state.library.leagues.find((league) => league.id === id);
  if (!record) return;
  state.active = record;
  state.schedule = generateSchedule(record.config);
  record.selectedRound = Math.min(record.selectedRound, state.schedule.rounds.length - 1);
  state.library.activeLeagueId = record.id;
  saveLeagueLibrary(state.library);
  query<HTMLElement>(root, '[data-view="library"]').hidden = true;
  query<HTMLElement>(root, '[data-view="manager"]').hidden = false;
  setTab(root, 'matches');
  renderManager(root, record, state.schedule, ui);
  renderSettings(root, record);
}

function createLeague(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): void {
  if (!syncDraft(root, ui)) return;
  const now = new Date().toISOString();
  const record = createLeagueRecord(readDraft(root), createClientId(), now);
  state.library.leagues.push(record);
  state.library.activeLeagueId = record.id;
  saveLeagueLibrary(state.library);
  query<HTMLFormElement>(root, '[data-role="create-form"]').reset();
  setFormat(root, 'single');
  openLeague(root, state, ui, record.id);
}

function setTab(root: HTMLElement, tab: string): void {
  root.dataset.activeTab = tab;
  root.querySelectorAll<HTMLButtonElement>('[data-action="set-tab"]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.tab === tab));
  });
  root.querySelectorAll<HTMLElement>('[data-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tab;
  });
}

function selectRound(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, index: number): void {
  if (!state.active || !state.schedule) return;
  const bounded = Math.max(0, Math.min(index, state.schedule.rounds.length - 1));
  state.active.selectedRound = bounded;
  state.active.updatedAt = new Date().toISOString();
  upsertActive(state);
  renderManager(root, state.active, state.schedule, ui);
}

function changeRound(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, delta: number): void {
  if (!state.active) return;
  selectRound(root, state, ui, state.active.selectedRound + delta);
}

async function shareRecord(root: HTMLElement, record: LeagueRecord, ui: RoundRobinLeagueManagerUI): Promise<void> {
  const copied = await copyLeagueLink(record);
  setNotice(root, copied ? ui.copiedLeague : ui.copyFailed);
}

function deleteLeague(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, id: string): void {
  if (!window.confirm(ui.confirmDelete)) return;
  state.library.leagues = state.library.leagues.filter((league) => league.id !== id);
  if (state.library.activeLeagueId === id) state.library.activeLeagueId = null;
  saveLeagueLibrary(state.library);
  showLibrary(root, state, ui);
}

function updateResult(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, input: HTMLInputElement): void {
  if (!state.active || !state.schedule) return;
  const matchId = input.dataset.matchId;
  const side = input.dataset.side as 'home' | 'away' | undefined;
  if (!matchId || !side) return;
  const current = state.active.results[matchId] ?? { home: null, away: null };
  state.active.results[matchId] = { ...current, [side]: parseScore(input.value) };
  state.active.updatedAt = new Date().toISOString();
  upsertActive(state);
  renderMatchStatus(input, state.active.results[matchId], ui);
  renderLiveData(root, state.active, state.schedule, ui);
}

function saveSettings(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): void {
  if (!state.active || !state.schedule) return;
  const name = query<HTMLInputElement>(root, '[data-role="settings-name"]').value.trim();
  if (!name) return;
  state.active.config.name = name;
  state.active.config.scoring = {
    win: pointsValue(root, 'settings-win', state.active.config.scoring.win),
    draw: pointsValue(root, 'settings-draw', state.active.config.scoring.draw),
    loss: pointsValue(root, 'settings-loss', state.active.config.scoring.loss),
  };
  state.active.updatedAt = new Date().toISOString();
  upsertActive(state);
  renderManager(root, state.active, state.schedule, ui);
  setNotice(root, ui.settingsSaved);
}

function loadExample(root: HTMLElement, ui: RoundRobinLeagueManagerUI): void {
  query<HTMLInputElement>(root, '[data-role="league-name"]').value = ui.demoLeagueName;
  query<HTMLTextAreaElement>(root, '[data-role="teams"]').value = ui.demoTeams;
  syncDraft(root, ui);
}

async function importFile(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI, file: File): Promise<void> {
  const parsed = await readLeagueBackup(file);
  if (parsed) {
    const now = new Date().toISOString();
    const record = { ...parsed, id: createClientId(), createdAt: now, updatedAt: now };
    state.library.leagues.push(record);
    saveLeagueLibrary(state.library);
    openLeague(root, state, ui, record.id);
    setNotice(root, ui.importedLeague);
  } else {
    showLibrary(root, state, ui);
    setNotice(root, ui.importFailed);
  }
}

function handlers(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): Record<string, ClickHandler> {
  return {
    'show-library': () => showLibrary(root, state, ui),
    'new-league': () => startNewLeague(root, state, ui),
    'load-example': () => loadExample(root, ui),
    'open-league': (button) => openLeague(root, state, ui, button.dataset.leagueId ?? ''),
    'select-round': (button) => selectRound(root, state, ui, Number(button.dataset.round)),
    'previous-round': () => changeRound(root, state, ui, -1),
    'next-round': () => changeRound(root, state, ui, 1),
    'set-tab': (button) => setTab(root, button.dataset.tab ?? 'matches'),
    'share-active': () => { if (state.active) void shareRecord(root, state.active, ui); },
    'download-active': () => {
      if (!state.active) return;
      downloadLeagueBackup(state.active);
      setNotice(root, ui.downloadedLeague);
    },
    'delete-active': () => { if (state.active) deleteLeague(root, state, ui, state.active.id); },
    'delete-library-league': (button) => deleteLeague(root, state, ui, button.dataset.leagueId ?? ''),
    'share-library-league': (button) => { const record = state.library.leagues.find((league) => league.id === button.dataset.leagueId); if (record) void shareRecord(root, record, ui); },
    'save-settings': () => saveSettings(root, state, ui),
  };
}

function bindEvents(root: HTMLElement, state: AppState, ui: RoundRobinLeagueManagerUI): void {
  const clickHandlers = handlers(root, state, ui);
  root.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('[data-action]');
    if (button?.dataset.action) clickHandlers[button.dataset.action]?.(button);
  });
  root.addEventListener('input', (event) => {
    const input = event.target as HTMLInputElement;
    if (input.dataset.matchId) updateResult(root, state, ui, input);
    else if (input.closest('[data-role="create-form"]')) syncDraft(root, ui);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-format]').forEach((button) => button.addEventListener('click', () => {
    setFormat(root, button.dataset.format === 'double' ? 'double' : 'single');
    syncDraft(root, ui);
  }));
}

export function initRoundRobinLeagueManager(root: HTMLElement): void {
  const ui = readUI(root);
  const state: AppState = { library: loadLeagueLibrary(), active: null, schedule: null };
  bindEvents(root, state, ui);
  query<HTMLFormElement>(root, '[data-role="create-form"]').addEventListener('submit', (event) => {
    event.preventDefault();
    createLeague(root, state, ui);
  });
  query<HTMLInputElement>(root, '[data-role="import-file"]').addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) void importFile(root, state, ui, file);
  });
  const initialId = importSharedLeague(state.library, window.location.href, new Date().toISOString());
  saveLeagueLibrary(state.library);
  renderLibrary(root, state.library, ui);
  if (initialId) openLeague(root, state, ui, initialId);
  else syncDraft(root, ui);
}
