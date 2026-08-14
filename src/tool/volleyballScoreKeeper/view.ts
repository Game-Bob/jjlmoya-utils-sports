import type { VolleyballGameState } from './ui';
import { getSetsToWin } from './sets';
import { getTeamPlayerPositions } from './court-renderer';

export function renderTacticalCourt(root: HTMLElement, state: VolleyballGameState): void {
  const gA = root.querySelector('[data-vb-court-players-a]');
  const gB = root.querySelector('[data-vb-court-players-b]');
  if (!gA || !gB) return;

  const posA = getTeamPlayerPositions('teamA', state.teamA.rotationOrder, state.servingTeam === 'teamA');
  const posB = getTeamPlayerPositions('teamB', state.teamB.rotationOrder, state.servingTeam === 'teamB');

  gA.innerHTML = posA.map((p) => `
    <g class="vb-player-node ${p.isServer ? 'vb-is-server' : ''}">
      <circle cx="${p.cx}" cy="${p.cy}" r="18" class="vb-player-circle" />
      <text x="${p.cx}" y="${p.cy}" class="vb-player-text">${p.number}</text>
      <text x="${p.cx}" y="${p.cy - 24}" class="vb-pos-tag">${p.posName}</text>
    </g>
  `).join('');

  gB.innerHTML = posB.map((p) => `
    <g class="vb-player-node ${p.isServer ? 'vb-is-server' : ''}">
      <circle cx="${p.cx}" cy="${p.cy}" r="18" class="vb-player-circle" />
      <text x="${p.cx}" y="${p.cy}" class="vb-player-text">${p.number}</text>
      <text x="${p.cx}" y="${p.cy - 24}" class="vb-pos-tag">${p.posName}</text>
    </g>
  `).join('');
}

export function updateTeamCard(root: HTMLElement, teamKey: 'teamA' | 'teamB', state: VolleyballGameState): void {
  const team = teamKey === 'teamA' ? state.teamA : state.teamB;
  const nameInput = root.querySelector(`[data-vb-team-name="${teamKey}"]`) as HTMLInputElement | null;
  if (nameInput && nameInput.value !== team.name) {
    nameInput.value = team.name;
  }
  const scoreEl = root.querySelector(`[data-vb-score="${teamKey}"]`);
  if (scoreEl) scoreEl.textContent = String(team.currentPoints);

  const card = root.querySelector(`[data-vb-team-card="${teamKey}"]`);
  if (card) card.classList.toggle('vb-is-serving', state.servingTeam === teamKey);

  const setsNeeded = getSetsToWin(state.format);
  const dots = root.querySelectorAll(`[data-vb-sets-won="${teamKey}"] .vb-set-dot`);
  dots.forEach((dot, idx) => {
    const el = dot as HTMLElement;
    el.style.display = idx < setsNeeded ? 'block' : 'none';
    el.classList.toggle('vb-dot-won', idx < team.setsWon);
  });

  const toCount = root.querySelector(`[data-vb-timeout-count="${teamKey}"]`);
  if (toCount) toCount.textContent = String(team.timeoutsRemaining);

  const subCount = root.querySelector(`[data-vb-sub-count="${teamKey}"]`);
  if (subCount) subCount.textContent = String(team.substitutionsUsed);
}

function getPillScore(s: number, state: VolleyballGameState): string {
  const completed = state.completedSets.find((cs) => cs.setNumber === s);
  if (completed) {
    return `${completed.teamAPoints} - ${completed.teamBPoints}`;
  }
  if (s === state.currentSetIndex && !state.isMatchFinished) {
    return `${state.teamA.currentPoints} - ${state.teamB.currentPoints}`;
  }
  return '-';
}

function getMaxSetsCount(format: string): number {
  if (format === 'bestOf5') return 5;
  if (format === 'bestOf3') return 3;
  return 1;
}

export function updateSetTracker(root: HTMLElement, state: VolleyballGameState): void {
  const maxSets = getMaxSetsCount(state.format);
  for (let s = 1; s <= 5; s++) {
    const pill = root.querySelector(`[data-vb-set-pill="${s}"]`) as HTMLElement | null;
    const scoreEl = root.querySelector(`[data-vb-set-score="${s}"]`);
    if (pill) {
      pill.style.display = s <= maxSets ? 'flex' : 'none';
      pill.classList.toggle('vb-active-set', s === state.currentSetIndex && !state.isMatchFinished);
    }
    if (scoreEl) {
      scoreEl.textContent = getPillScore(s, state);
    }
  }
}

function getBannerInfo(
  root: HTMLElement,
  state: VolleyballGameState,
): { text: string; className: string } | null {
  if (state.isMatchFinished && state.matchWinner) {
    const winnerName = state.matchWinner === 'teamA' ? state.teamA.name : state.teamB.name;
    return { text: `${winnerName} Wins the Match!`, className: 'vb-status-winner' };
  }
  if (state.isMatchPoint) {
    return { text: root.dataset.txtMatchPoint ?? 'Match Point', className: 'vb-status-matchpoint' };
  }
  if (state.isSetPoint) {
    return { text: root.dataset.txtSetPoint ?? 'Set Point', className: 'vb-status-setpoint' };
  }
  return null;
}

export function updateStatusBanner(root: HTMLElement, state: VolleyballGameState): void {
  const banner = root.querySelector('[data-vb-status-banner]') as HTMLElement | null;
  if (!banner) return;
  banner.className = 'vb-status-banner';
  const info = getBannerInfo(root, state);
  if (info) {
    banner.textContent = info.text;
    banner.classList.add('vb-visible', info.className);
  }
}

export function updateFullView(root: HTMLElement, state: VolleyballGameState): void {
  root.querySelectorAll('[data-vb-format]').forEach((b) => {
    const btnFmt = (b as HTMLElement).dataset.vbFormat;
    b.classList.toggle('vb-active', btnFmt === state.format);
  });
  updateTeamCard(root, 'teamA', state);
  updateTeamCard(root, 'teamB', state);
  updateSetTracker(root, state);
  updateStatusBanner(root, state);
  renderTacticalCourt(root, state);
}
