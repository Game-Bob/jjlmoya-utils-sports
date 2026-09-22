import type { MatchState, TeamKey } from './logic';
import type { RugbyScoreKeeperUI } from './ui';
import type { RugbySession, SinBinDuration, StoragePort } from './storage';
import {
  addSinBin, createInitialState, formatSinBinTime, scoreConversion, scoreDropGoal,
  scorePenalty, scoreTry, startMatch, startSecondHalf, tickClock, toggleClock, undoLast,
} from './logic';
import { clearRugbySession, loadRugbySession, saveRugbySession } from './storage';
import { q, renderScoreboard } from './ui-render';

type ClockId = { value: ReturnType<typeof setInterval> | undefined };
type ScoreAction = 'try' | 'conv' | 'pen' | 'drop';

interface RuntimeContext {
  state: MatchState;
  teamNames: Record<TeamKey, string>;
  sinBinDuration: SinBinDuration;
  sinBinTeam: TeamKey;
  convTeam: TeamKey | null;
  storage: StoragePort | null;
}

function getUI(): RugbyScoreKeeperUI {
  const app = q<HTMLElement>('rg-app');
  return JSON.parse(app?.dataset.rgUi ?? '{}') as RugbyScoreKeeperUI;
}

function getStorage(): StoragePort | null {
  try { return window.localStorage; } catch { return null; }
}

function createContext(ui: RugbyScoreKeeperUI): RuntimeContext {
  const storage = getStorage();
  const saved = storage ? loadRugbySession(storage) : null;
  if (!saved) {
    return {
      state: createInitialState(), teamNames: { home: ui.home, away: ui.away },
      sinBinDuration: 600, sinBinTeam: 'home', convTeam: null, storage,
    };
  }
  return {
    state: saved.state, teamNames: saved.teamNames,
    sinBinDuration: saved.sinBinDuration, sinBinTeam: saved.sinBinTeam,
    convTeam: saved.convTeam, storage,
  };
}

function session(ctx: RuntimeContext): RugbySession {
  return {
    version: 1, state: ctx.state, teamNames: ctx.teamNames,
    sinBinDuration: ctx.sinBinDuration, sinBinTeam: ctx.sinBinTeam,
    convTeam: ctx.convTeam, savedAt: Date.now(),
  };
}

function showSaveStatus(saved: boolean, ui: RugbyScoreKeeperUI) {
  const status = q('rg-save-status');
  const text = q('rg-save-status-text');
  status?.classList.toggle('is-error', !saved);
  if (text) text.textContent = saved ? ui.savedLocally : ui.saveUnavailable;
}

function persist(ctx: RuntimeContext, ui: RugbyScoreKeeperUI): boolean {
  const saved = ctx.storage ? saveRugbySession(ctx.storage, session(ctx)) : false;
  showSaveStatus(saved, ui);
  return saved;
}

function toggleConversion(team: TeamKey | null) {
  const home = q<HTMLButtonElement>('rg-conv-home');
  const away = q<HTMLButtonElement>('rg-conv-away');
  if (home) home.disabled = team !== 'home';
  if (away) away.disabled = team !== 'away';
}

function updateClockButton(state: MatchState, ui: RugbyScoreKeeperUI) {
  const button = q<HTMLButtonElement>('rg-btn-clock');
  if (!button) return;
  button.disabled = state.matchEnded;
  if (state.matchEnded) button.textContent = ui.fullTime;
  else if (!state.matchStarted) button.textContent = ui.startMatch;
  else if (state.half === 1 && state.elapsed >= 2400) button.textContent = ui.half2;
  else button.textContent = state.clockRunning ? ui.timeOff : ui.timeOn;
}

function renderChoices(ctx: RuntimeContext) {
  document.querySelectorAll<HTMLElement>('[data-sinbin-team]').forEach((button) => {
    const active = button.dataset.sinbinTeam === ctx.sinBinTeam;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll<HTMLElement>('[data-sinbin-duration]').forEach((button) => {
    const active = Number(button.dataset.sinbinDuration) === ctx.sinBinDuration;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function renderAll(ctx: RuntimeContext, ui: RugbyScoreKeeperUI) {
  renderScoreboard(ctx.state, ui, ctx.teamNames);
  toggleConversion(ctx.state.matchEnded ? null : ctx.convTeam);
  updateClockButton(ctx.state, ui);
  renderChoices(ctx);
}

let bannerTimer: ReturnType<typeof setTimeout> | undefined;

function showBanner(message: string, isPeak: boolean) {
  const banner = q('rg-banner');
  const text = q('rg-banner-text');
  if (!banner || !text) return;
  if (bannerTimer) clearTimeout(bannerTimer);
  text.textContent = message;
  banner.className = `rg-banner ${isPeak ? 'rg-banner-peak' : 'rg-banner-warn'} rg-banner-show`;
  banner.style.display = 'flex';
  bannerTimer = setTimeout(() => {
    banner.classList.replace('rg-banner-show', 'rg-banner-hide');
    setTimeout(() => { banner.style.display = 'none'; }, 400);
  }, 2000);
}

function applyScore(ctx: RuntimeContext, team: TeamKey, action: ScoreAction,
  ui: RugbyScoreKeeperUI): string | null {
  const name = ctx.teamNames[team];
  if (action === 'try') {
    ctx.state = scoreTry(ctx.state, team); ctx.convTeam = team;
    return `${ui.tryLabel} · ${name}`;
  }
  if (action === 'conv' && ctx.convTeam) {
    ctx.state = scoreConversion(ctx.state, ctx.convTeam, true); ctx.convTeam = null;
    return ui.conversion;
  }
  if (action === 'pen') {
    ctx.state = scorePenalty(ctx.state, team); return `${ui.penalty} · ${name}`;
  }
  if (action === 'drop') {
    ctx.state = scoreDropGoal(ctx.state, team); return `${ui.dropGoal} · ${name}`;
  }
  return null;
}

function wireScoreButtons(ctx: RuntimeContext, ui: RugbyScoreKeeperUI) {
  document.querySelectorAll<HTMLElement>('.rg-col[data-team]').forEach((column) => {
    const team = column.dataset.team as TeamKey;
    column.querySelectorAll<HTMLElement>('button[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        if (ctx.state.matchEnded) return;
        const message = applyScore(ctx, team, button.dataset.action as ScoreAction, ui);
        if (message) showBanner(message, true);
        persist(ctx, ui); renderAll(ctx, ui);
      });
    });
  });
}

function stopClock(clock: ClockId) {
  if (clock.value) clearInterval(clock.value);
  clock.value = undefined;
}

function syncClock(ctx: RuntimeContext, clock: ClockId, ui: RugbyScoreKeeperUI) {
  if (!ctx.state.clockRunning) { stopClock(clock); return; }
  if (clock.value) return;
  clock.value = setInterval(() => {
    ctx.state = tickClock(ctx.state, 1);
    persist(ctx, ui); renderAll(ctx, ui);
    if (!ctx.state.clockRunning) {
      stopClock(clock);
      if (ctx.state.matchEnded) showBanner(ui.fullTime, false);
    }
  }, 1000);
}

function handleClock(ctx: RuntimeContext, clock: ClockId, ui: RugbyScoreKeeperUI) {
  if (ctx.state.matchEnded) return;
  if (!ctx.state.matchStarted) ctx.state = startMatch(ctx.state);
  else if (ctx.state.half === 1 && ctx.state.elapsed >= 2400) ctx.state = startSecondHalf(ctx.state);
  else ctx.state = toggleClock(ctx.state);
  persist(ctx, ui); renderAll(ctx, ui); syncClock(ctx, clock, ui);
}

function handleSinBin(ctx: RuntimeContext, ui: RugbyScoreKeeperUI) {
  const input = q<HTMLInputElement>('rg-sinbin-input');
  if (!input?.value.trim()) return;
  ctx.state = addSinBin(ctx.state, input.value, ctx.sinBinDuration, ctx.sinBinTeam);
  showBanner(`${ui.sinBin} · ${ctx.teamNames[ctx.sinBinTeam]} · ${formatSinBinTime(ctx.sinBinDuration)}`, false);
  input.value = '';
  persist(ctx, ui); renderAll(ctx, ui); input.focus();
}

function wireChoices(ctx: RuntimeContext, ui: RugbyScoreKeeperUI) {
  document.querySelectorAll<HTMLElement>('[data-sinbin-team]').forEach((button) => {
    button.addEventListener('click', () => {
      ctx.sinBinTeam = button.dataset.sinbinTeam as TeamKey;
      persist(ctx, ui); renderChoices(ctx);
    });
  });
  document.querySelectorAll<HTMLElement>('[data-sinbin-duration]').forEach((button) => {
    button.addEventListener('click', () => {
      ctx.sinBinDuration = Number(button.dataset.sinbinDuration) as SinBinDuration;
      persist(ctx, ui); renderChoices(ctx);
    });
  });
}

function wireTeamNames(ctx: RuntimeContext, ui: RugbyScoreKeeperUI) {
  (['home', 'away'] as TeamKey[]).forEach((team) => {
    const input = q<HTMLInputElement>(`rg-name-${team}`);
    if (!input) return;
    input.value = ctx.teamNames[team];
    input.maxLength = 40;
    input.addEventListener('input', () => {
      ctx.teamNames[team] = input.value.trim() || ui[team];
      persist(ctx, ui); renderAll(ctx, ui);
    });
  });
}

function setModal(open: boolean) {
  const modal = q('rg-modal');
  if (!modal) return;
  modal.style.display = open ? 'flex' : 'none';
  modal.setAttribute('aria-hidden', String(!open));
  if (open) q<HTMLButtonElement>('rg-modal-cancel')?.focus();
  else q<HTMLButtonElement>('rg-btn-reset')?.focus();
}

function wireReset(ctx: RuntimeContext, clock: ClockId, ui: RugbyScoreKeeperUI) {
  q('rg-btn-reset')?.addEventListener('click', () => setModal(true));
  q('rg-modal-cancel')?.addEventListener('click', () => setModal(false));
  q('rg-modal-confirm')?.addEventListener('click', () => {
    stopClock(clock); ctx.state = createInitialState(); ctx.convTeam = null;
    if (ctx.storage) clearRugbySession(ctx.storage);
    persist(ctx, ui); renderAll(ctx, ui); setModal(false);
  });
  q('rg-modal')?.addEventListener('click', (event) => {
    if (event.target === q('rg-modal')) setModal(false);
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setModal(false); });
}

export function initRugbyScorekeeper() {
  const app = q<HTMLElement>('rg-app');
  if (!app || app.dataset.rgInitialized === 'true') return;
  app.dataset.rgInitialized = 'true';
  const ui = getUI();
  const ctx = createContext(ui);
  const clock: ClockId = { value: undefined };
  wireScoreButtons(ctx, ui); wireChoices(ctx, ui); wireTeamNames(ctx, ui); wireReset(ctx, clock, ui);
  q('rg-btn-clock')?.addEventListener('click', () => handleClock(ctx, clock, ui));
  q('rg-btn-sinbin')?.addEventListener('click', () => handleSinBin(ctx, ui));
  q('rg-btn-undo')?.addEventListener('click', () => {
    ctx.state = undoLast(ctx.state); ctx.convTeam = null; persist(ctx, ui); renderAll(ctx, ui);
  });
  q<HTMLInputElement>('rg-sinbin-input')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') handleSinBin(ctx, ui);
  });
  window.addEventListener('pagehide', () => { persist(ctx, ui); stopClock(clock); });
  persist(ctx, ui); renderAll(ctx, ui); syncClock(ctx, clock, ui);
}
