import type { TeamKey, MatchState, TeamScore } from './logic';
import type { RugbyScoreKeeperUI } from './ui';
import { escapeHtml, eventLabel } from './ui-helpers';
import {
  createInitialState, scoreTry, scoreConversion, scorePenalty, scoreDropGoal,
  addSinBin, tickClock, startMatch, startSecondHalf, toggleClock, teamTotal,
  formatTime, formatSinBinTime, undoLast, bonusPoints, losingBonus,
} from './logic';

type ClockId = { v: ReturnType<typeof setInterval> | undefined };

function getUI(): RugbyScoreKeeperUI {
  const app = document.getElementById('rg-app') as HTMLElement;
  return JSON.parse(app?.dataset.rgUi ?? '{}') as RugbyScoreKeeperUI;
}

function q<T extends Element = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function renderHalf(s: MatchState) {
  const label = q('rg-half-label');
  const badge = q('rg-half-badge');
  if (label) label.textContent = String(s.half);
  if (badge) badge.textContent = s.half === 1 ? getUI().half1 : getUI().half2;
}

function renderScoreboard(s: MatchState) {
  const sh = q('rg-score-home');
  const sa = q('rg-score-away');
  const ct = q('rg-clock-time');
  if (sh) sh.textContent = String(teamTotal(s.home));
  if (sa) sa.textContent = String(teamTotal(s.away));
  if (ct) ct.textContent = formatTime(s.elapsed);
  renderHalf(s);
  const cf = q<SVGPathElement>('rg-clock-fill');
  if (cf) {
    const max = s.half === 1 ? 2400 : 4800;
    const pct = Math.min(s.elapsed / max, 1);
    const circ = 2 * Math.PI * 54;
    cf.style.strokeDasharray = String(circ);
    cf.style.strokeDashoffset = String(circ * (1 - pct));
  }
  renderSinBin(s);
  renderSummary(s);
  renderHistory(s);
  renderBonuses(s);
}

function renderHistory(s: MatchState) {
  const list = q('rg-history-list');
  const undo = q('rg-btn-undo');
  if (!list) return;
  if (s.history.length === 0) {
    list.innerHTML = `<div class="rg-history-empty">${getUI().eventEmpty}</div>`;
    if (undo) undo.setAttribute('disabled', '');
    return;
  }
  if (undo) undo.removeAttribute('disabled');
  const ui = getUI();
  list.innerHTML = s.history.map((e) => {
    const cls = e.team === 'home' ? 'rg-ev-home' : 'rg-ev-away';
    return `<div class="rg-history-event ${cls}"><span class="rg-ev-min">${escapeHtml(e.minute)}</span><span class="rg-ev-label">${escapeHtml(eventLabel(e, ui))}</span></div>`;
  }).join('');
  requestAnimationFrame(() => { list.scrollTo(0, 1e9); });
}

function renderBonuses(s: MatchState) {
  const bh = q('rg-bonus-home');
  const ba = q('rg-bonus-away');
  if (bh) {
    const b = bonusPoints(s.home);
    const lb = losingBonus(s.home, s.away, 'home') ? ['LBP'] : [];
    bh.textContent = [...b, ...lb].join(' ');
  }
  if (ba) {
    const b = bonusPoints(s.away);
    const lb = losingBonus(s.home, s.away, 'away') ? ['LBP'] : [];
    ba.textContent = [...b, ...lb].join(' ');
  }
}

function renderSinBin(s: MatchState) {
  const sl = q('rg-sinbin-list');
  if (!sl) return;
  if (s.sinBin.length === 0) {
    sl.innerHTML = `<div class="rg-sinbin-empty">${getUI().sinBinEmpty}</div>`;
    return;
  }
  const ui = getUI();
  sl.innerHTML = s.sinBin.map((e) => {
    const pct = Math.max(0, Math.min(100, (e.remaining / e.total) * 100));
    let cls = 'rg-sinbin-safe';
    if (pct < 25) cls = 'rg-sinbin-critical';
    else if (pct < 60) cls = 'rg-sinbin-warn';
    return `<div class="rg-sinbin-card ${cls}"><div class="rg-sinbin-player">${escapeHtml(e.player)}</div><div class="rg-sinbin-time">${formatSinBinTime(e.remaining)}</div><div class="rg-sinbin-bar"><div class="rg-sinbin-fill" style="width:${pct}%"></div></div><div class="rg-sinbin-return">${pct <= 0 ? ui.sinBinEmpty : ''}</div></div>`;
  }).join('');
}

function renderSummary(s: MatchState) {
  const rows: (keyof TeamScore)[] = ['tries', 'conversions', 'penalties', 'dropGoals'];
  const sb = q('rg-summary-body');
  if (!sb) return;
  const bodyRows = sb.querySelectorAll('tr');
  bodyRows.forEach((row, i) => {
    const key = rows[i];
    if (!key) return;
    const tds = row.querySelectorAll('td');
    if (tds[1]) tds[1].textContent = String(s.home[key]);
    if (tds[2]) tds[2].textContent = String(s.away[key]);
  });
  const hTotal = teamTotal(s.home);
  const aTotal = teamTotal(s.away);
  const th = q('rg-total-home');
  const ta = q('rg-total-away');
  if (th) { th.textContent = String(hTotal); }
  if (ta) { ta.textContent = String(aTotal); }
}

function showBanner(message: string, isPeak: boolean) {
  const bn = q('rg-banner');
  const bt = q('rg-banner-text');
  if (!bn || !bt) return;
  bt.textContent = message;
  bn.className = `rg-banner ${isPeak ? 'rg-banner-peak' : 'rg-banner-warn'}`;
  bn.style.display = 'flex';
  bn.classList.remove('rg-banner-hide');
  requestAnimationFrame(() => bn.classList.add('rg-banner-show'));
  setTimeout(() => {
    bn.classList.add('rg-banner-hide');
    setTimeout(() => { bn.style.display = 'none'; }, 400);
  }, 2000);
}

function toggleConv(team: TeamKey | null) {
  const ch = q<HTMLButtonElement>(`rg-conv-home`);
  const ca = q<HTMLButtonElement>(`rg-conv-away`);
  if (ch) ch.disabled = team !== 'home';
  if (ca) ca.disabled = team !== 'away';
}

function onBtn(id: string, fn: () => void) {
  const el = q(id);
  if (el) el.addEventListener('click', fn);
}

function teamName(team: TeamKey): string {
  const inp = team === 'home' ? q<HTMLInputElement>('rg-name-home') : q<HTMLInputElement>('rg-name-away');
  const ui = getUI();
  return inp?.value || (team === 'home' ? ui.home : ui.away);
}

function handleScoreClick(ctx: { state: MatchState; convTeam: TeamKey | null }, team: TeamKey, action: string) {
  if (ctx.state.matchEnded) return;
  const name = teamName(team);
  const ui = getUI();
  if (action === 'try') {
    ctx.state = scoreTry(ctx.state, team); ctx.convTeam = team;
    toggleConv(team); showBanner(`${ui.tryScored} ${name} +5`, true); renderScoreboard(ctx.state);
    return;
  }
  if (action === 'conv' && ctx.convTeam) {
    ctx.state = scoreConversion(ctx.state, ctx.convTeam, true); toggleConv(null); ctx.convTeam = null;
    showBanner(`${ui.conversionSuccess} +2`, true); renderScoreboard(ctx.state);
    return;
  }
  if (action === 'pen') {
    ctx.state = scorePenalty(ctx.state, team); showBanner(`${ui.penaltyScored} ${name} +3`, true); renderScoreboard(ctx.state);
    return;
  }
  if (action === 'drop') {
    ctx.state = scoreDropGoal(ctx.state, team); showBanner(`${ui.dropGoalScored} ${name} +3`, true); renderScoreboard(ctx.state);
  }
}

function wireScoreButtons(ctx: { state: MatchState; convTeam: TeamKey | null }) {
  document.querySelectorAll('.rg-col[data-team]').forEach((col) => {
    const team = (col as HTMLElement).dataset.team as TeamKey;
    col.querySelectorAll('button[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => handleScoreClick(ctx, team, (btn as HTMLElement).dataset.action!));
    });
  });
}

function runClock(ctx: { state: MatchState }, clockId: ClockId, btn: HTMLElement, ui: RugbyScoreKeeperUI) {
  clockId.v = setInterval(() => {
    ctx.state = tickClock(ctx.state, 1);
    renderScoreboard(ctx.state);
    if (ctx.state.half === 1 && ctx.state.elapsed === 2400 && !ctx.state.clockRunning) {
      btn.textContent = ui.half2;
    }
    if (ctx.state.matchEnded) {
      if (clockId.v) clearInterval(clockId.v);
      btn.textContent = ui.startMatch;
      showBanner(ui.fullTime, false);
    }
  }, 1000);
}

function handleClock(ctx: { state: MatchState }, clockId: ClockId, ui: RugbyScoreKeeperUI) {
  const btn = q('rg-btn-clock');
  if (!btn) return;
  if (!ctx.state.matchStarted) {
    ctx.state = startMatch(ctx.state);
    btn.textContent = ui.timeOff;
    renderScoreboard(ctx.state);
    runClock(ctx, clockId, btn, ui);
  } else if (ctx.state.half === 1 && ctx.state.elapsed >= 2400) {
    ctx.state = startSecondHalf(ctx.state);
    btn.textContent = ui.timeOff;
    renderScoreboard(ctx.state);
  } else if (ctx.state.clockRunning) {
    ctx.state = toggleClock(ctx.state);
    btn.textContent = ui.timeOn;
  } else {
    ctx.state = toggleClock(ctx.state);
    btn.textContent = ui.timeOff;
  }
}

function handleSinBin(ctx: { state: MatchState }) {
  const inp = q<HTMLInputElement>('rg-sinbin-input');
  const dur = q<HTMLSelectElement>('rg-sinbin-duration');
  if (!inp || !dur || !inp.value.trim()) return;
  ctx.state = addSinBin(ctx.state, inp.value.trim(), Number(dur.value));
  showBanner(`${getUI().sinBin} ${formatSinBinTime(Number(dur.value))}`, false);
  inp.value = '';
  renderScoreboard(ctx.state);
}

function handleUndo(ctx: { state: MatchState; convTeam: TeamKey | null }) {
  ctx.state = undoLast(ctx.state);
  ctx.convTeam = null;
  toggleConv(null);
  renderScoreboard(ctx.state);
}

function confirmReset(ctx: { state: MatchState; convTeam: TeamKey | null }, clockId: ClockId, ui: RugbyScoreKeeperUI) {
  if (clockId.v) clearInterval(clockId.v);
  ctx.state = createInitialState();
  ctx.convTeam = null;
  toggleConv(null);
  const btn = q('rg-btn-clock');
  if (btn) btn.textContent = ui.startMatch;
  q('rg-modal')!.style.display = 'none';
  renderScoreboard(ctx.state);
}

export function initRugbyScorekeeper() {
  const ui = getUI();
  const ctx = { state: createInitialState(), convTeam: null as TeamKey | null };
  const clockId: ClockId = { v: undefined };

  wireScoreButtons(ctx);
  onBtn('rg-btn-clock', () => handleClock(ctx, clockId, ui));
  onBtn('rg-btn-sinbin', () => handleSinBin(ctx));
  onBtn('rg-btn-undo', () => handleUndo(ctx));
  onBtn('rg-btn-reset', () => q('rg-modal')!.style.display = 'flex');
  onBtn('rg-modal-cancel', () => q('rg-modal')!.style.display = 'none');
  onBtn('rg-modal-confirm', () => confirmReset(ctx, clockId, ui));
  const inp = q<HTMLInputElement>('rg-sinbin-input');
  if (inp) inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSinBin(ctx); });
  renderScoreboard(ctx.state);
}
