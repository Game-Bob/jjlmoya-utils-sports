import type { DartsMode } from './game-logic';

export function syncMode(root: HTMLElement, mode: DartsMode): void {
  root.classList.toggle('tn-mode-solo', mode === 'solo');
  root.querySelectorAll<HTMLElement>('[data-dt-mode]').forEach((button) => {
    button.classList.toggle('tn-mode-active', button.dataset.dtMode === mode);
  });
}

export function setupMode(root: HTMLElement, setMode: (mode: DartsMode) => void): void {
  root.querySelectorAll<HTMLElement>('[data-dt-mode]').forEach((button) => {
    button.addEventListener('click', () => setMode(button.dataset.dtMode as DartsMode));
  });
}
