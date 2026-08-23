import { evaluateDraft, type DraftCode } from './evaluator';
import { DEFAULT_SCORING, normalizeTeams, type LeagueConfig } from './logic';
import type { RoundRobinLeagueManagerUI } from './ui';

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const node = root.querySelector<T>(selector);
  if (!node) throw new Error(`Missing element: ${selector}`);
  return node;
}

function selectedFormat(root: HTMLElement): 'single' | 'double' {
  const active = root.querySelector<HTMLButtonElement>('[data-format][aria-pressed="true"]');
  return active?.dataset.format === 'double' ? 'double' : 'single';
}

export function setFormat(root: HTMLElement, format: 'single' | 'double'): void {
  root.querySelectorAll<HTMLButtonElement>('[data-format]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.format === format));
  });
}

export function pointsValue(root: HTMLElement, role: string, fallback: number): number {
  const value = Number(query<HTMLInputElement>(root, `[data-role="${role}"]`).value);
  return Number.isInteger(value) && value >= 0 && value <= 20 ? value : fallback;
}

export function readDraft(root: HTMLElement): LeagueConfig {
  return {
    name: query<HTMLInputElement>(root, '[data-role="league-name"]').value.trim(),
    teams: normalizeTeams(query<HTMLTextAreaElement>(root, '[data-role="teams"]').value),
    format: selectedFormat(root),
    scoring: {
      win: pointsValue(root, 'draft-win', DEFAULT_SCORING.win),
      draw: pointsValue(root, 'draft-draw', DEFAULT_SCORING.draw),
      loss: pointsValue(root, 'draft-loss', DEFAULT_SCORING.loss),
    },
  };
}

function statusMessage(code: DraftCode, ui: RoundRobinLeagueManagerUI): string {
  const messages: Record<DraftCode, string> = {
    name: ui.nameStatus,
    empty: ui.emptyStatus,
    minimum: ui.minimumStatus,
    ready: ui.readyStatus,
    duplicate: ui.duplicateStatus,
    maximum: ui.maximumStatus,
    'long-name': ui.longNameStatus,
  };
  return messages[code];
}

export function syncDraft(root: HTMLElement, ui: RoundRobinLeagueManagerUI): boolean {
  const evaluation = evaluateDraft(readDraft(root));
  const status = query<HTMLElement>(root, '[data-role="draft-status"]');
  status.textContent = statusMessage(evaluation.code, ui)
    .replace('{count}', String(evaluation.count))
    .replace('{name}', evaluation.detail ?? '');
  status.dataset.tone = evaluation.valid ? 'ready' : 'quiet';
  query<HTMLButtonElement>(root, '[data-role="create-league"]').disabled = !evaluation.valid;
  return evaluation.valid;
}
