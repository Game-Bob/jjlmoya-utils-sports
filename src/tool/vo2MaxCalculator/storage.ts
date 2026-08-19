import { defaultVo2Input, type Vo2Input } from './logic';

const STORAGE_KEY = 'vo2-max-calculator-state';

export function loadVo2State(): Vo2Input {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultVo2Input();
    return { ...defaultVo2Input(), ...JSON.parse(raw) } as Vo2Input;
  } catch {
    return defaultVo2Input();
  }
}

export function saveVo2State(input: Vo2Input): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
