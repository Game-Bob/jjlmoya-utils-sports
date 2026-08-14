import type { MatchFormat, ServingTeam, VolleyballGameState } from './ui';
import { createInitialVolleyballState } from './state';
import { awardPoint } from './scoring';
import { callTimeout, manualRotate, recordSubstitution, switchTeamSides, undoLastAction } from './actions';
import { loadPersistedState, savePersistedState } from './storage';
import { updateFullView } from './view';
import { playVolleyballAudioTone } from './audio';

export class VolleyballScorekeeperController {
  private root: HTMLElement;
  private state: VolleyballGameState;
  private timeoutInterval: number | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.state = loadPersistedState();
    this.bindEvents();
    this.refresh();
  }

  private refresh(): void {
    updateFullView(this.root, this.state);
    savePersistedState(this.state);
  }

  private bindEvents(): void {
    this.bindPointEvents();
    this.bindControlEvents();
    this.bindTeamMetaEvents();
    this.bindFormatEvents();
    this.bindNameInputEvents();
  }

  private bindPointEvents(): void {
    this.root.querySelectorAll('[data-vb-add-point="teamA"]').forEach((el) => {
      el.addEventListener('click', () => this.handleAddPoint('teamA'));
    });
    this.root.querySelectorAll('[data-vb-add-point="teamB"]').forEach((el) => {
      el.addEventListener('click', () => this.handleAddPoint('teamB'));
    });
  }

  private handleAddPoint(team: ServingTeam): void {
    if (this.state.isMatchFinished) return;
    playVolleyballAudioTone(team === 'teamA' ? 600 : 750, 'sine', 120);
    this.state = awardPoint(this.state, team);
    if (this.state.isMatchFinished) {
      playVolleyballAudioTone(880, 'triangle', 400);
    }
    this.refresh();
  }

  private bindControlEvents(): void {
    this.root.querySelector('[data-vb-undo]')?.addEventListener('click', () => {
      this.state = undoLastAction(this.state);
      playVolleyballAudioTone(400, 'sine', 80);
      this.refresh();
    });

    this.root.querySelector('[data-vb-switch]')?.addEventListener('click', () => {
      this.state = switchTeamSides(this.state);
      playVolleyballAudioTone(520, 'sine', 150);
      this.refresh();
    });

    this.bindResetAndFullscreen();
  }

  private bindResetAndFullscreen(): void {
    this.root.querySelector('[data-vb-reset]')?.addEventListener('click', () => {
      const confirmMsg = this.root.dataset.txtResetConfirm ?? 'Reset match?';
      if (window.confirm(confirmMsg)) {
        const savedTeamAName = this.state.teamA.name;
        const savedTeamBName = this.state.teamB.name;
        this.state = createInitialVolleyballState(this.state.format);
        this.state.teamA.name = savedTeamAName;
        this.state.teamB.name = savedTeamBName;
        this.refresh();
      }
    });

    this.root.querySelector('[data-vb-fullscreen]')?.addEventListener('click', () => {
      const shell = this.root.querySelector('.vb-card-shell');
      if (!document.fullscreenElement) {
        shell?.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });
  }

  private bindTeamMetaEvents(): void {
    this.root.querySelector('[data-vb-rotate-btn="teamA"]')?.addEventListener('click', () => {
      this.state = manualRotate(this.state, 'teamA');
      this.refresh();
    });
    this.root.querySelector('[data-vb-rotate-btn="teamB"]')?.addEventListener('click', () => {
      this.state = manualRotate(this.state, 'teamB');
      this.refresh();
    });
    this.root.querySelector('[data-vb-sub-btn="teamA"]')?.addEventListener('click', () => {
      this.state = recordSubstitution(this.state, 'teamA');
      this.refresh();
    });
    this.root.querySelector('[data-vb-sub-btn="teamB"]')?.addEventListener('click', () => {
      this.state = recordSubstitution(this.state, 'teamB');
      this.refresh();
    });
    this.root.querySelector('[data-vb-timeout-btn="teamA"]')?.addEventListener('click', () => {
      this.startTimeoutModal('teamA');
    });
    this.root.querySelector('[data-vb-timeout-btn="teamB"]')?.addEventListener('click', () => {
      this.startTimeoutModal('teamB');
    });
    this.root.querySelector('[data-vb-close-timeout]')?.addEventListener('click', () => {
      this.stopTimeoutModal();
    });
  }

  private bindFormatEvents(): void {
    this.root.querySelectorAll('[data-vb-format]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const fmt = target.dataset.vbFormat as MatchFormat;
        if (!fmt) return;
        const savedTeamAName = this.state.teamA.name;
        const savedTeamBName = this.state.teamB.name;
        this.state = createInitialVolleyballState(fmt);
        this.state.teamA.name = savedTeamAName;
        this.state.teamB.name = savedTeamBName;
        this.refresh();
      });
    });
  }

  private bindNameInputEvents(): void {
    this.root.querySelector('[data-vb-team-name="teamA"]')?.addEventListener('input', (e) => {
      this.state.teamA.name = (e.target as HTMLInputElement).value || 'Team A';
      savePersistedState(this.state);
    });
    this.root.querySelector('[data-vb-team-name="teamB"]')?.addEventListener('input', (e) => {
      this.state.teamB.name = (e.target as HTMLInputElement).value || 'Team B';
      savePersistedState(this.state);
    });
  }

  private startTimeoutModal(team: ServingTeam): void {
    this.state = callTimeout(this.state, team);
    this.refresh();
    if (!this.state.isTimeoutActive) return;

    const modal = this.root.querySelector('[data-vb-timeout-modal]');
    const titleEl = this.root.querySelector('[data-vb-timeout-title]');
    const countdownEl = this.root.querySelector('[data-vb-timeout-sec]');
    if (!modal || !countdownEl) return;

    const teamName = team === 'teamA' ? this.state.teamA.name : this.state.teamB.name;
    if (titleEl) titleEl.textContent = `Timeout: ${teamName}`;
    modal.classList.add('vb-active');

    let remaining = 30;
    countdownEl.textContent = String(remaining);
    playVolleyballAudioTone(440, 'square', 250);

    if (this.timeoutInterval) clearInterval(this.timeoutInterval);
    this.timeoutInterval = window.setInterval(() => {
      remaining -= 1;
      countdownEl.textContent = String(remaining);
      if (remaining <= 3 && remaining > 0) {
        playVolleyballAudioTone(600, 'square', 100);
      }
      if (remaining <= 0) {
        this.stopTimeoutModal();
        playVolleyballAudioTone(880, 'sawtooth', 500);
      }
    }, 1000);
  }

  private stopTimeoutModal(): void {
    if (this.timeoutInterval) clearInterval(this.timeoutInterval);
    this.root.querySelector('[data-vb-timeout-modal]')?.classList.remove('vb-active');
  }
}
