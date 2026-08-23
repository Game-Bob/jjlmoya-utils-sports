import { calculateCalories, kilogramsToPounds, poundsToKilograms, type ActivityId, type IntensityId } from './logic';
import { evaluateBurn } from './evaluator';
import { getActivityLabel, renderActivityOptions, renderIntensityButtons, renderResult, renderUnitButtons, updateActivityTrigger } from './dom-views';
import { loadCaloriesState, saveCaloriesState, type StoredCaloriesState, type WeightUnit } from './storage';
import type { CaloriesBurnedCalculatorUI } from './ui';

interface CalculatorConfig {
  ui: CaloriesBurnedCalculatorUI;
  initialState: StoredCaloriesState;
}

function getConfig(root: HTMLElement): CalculatorConfig | null {
  const script = root.querySelector<HTMLScriptElement>('[data-calories-config]');
  if (!script?.textContent) return null;
  try {
    return JSON.parse(script.textContent) as CalculatorConfig;
  } catch {
    return null;
  }
}

function clampWeight(value: number, unit: WeightUnit): number {
  const min = unit === 'metric' ? 25 : 55;
  const max = unit === 'metric' ? 300 : 660;
  return Math.min(max, Math.max(min, value));
}

function getWeightDisplay(weightKg: number, unit: WeightUnit): number {
  return unit === 'metric' ? weightKg : kilogramsToPounds(weightKg);
}

function updateWeightInputs(root: HTMLElement, weightKg: number, unit: WeightUnit): void {
  const display = getWeightDisplay(weightKg, unit);
  const range = root.querySelector<HTMLInputElement>('[data-weight-range]');
  const number = root.querySelector<HTMLInputElement>('[data-weight-number]');
  if (range) range.value = String(Math.round(display * 10) / 10);
  if (number) number.value = String(Math.round(display * 10) / 10);
}

function updateDurationInputs(root: HTMLElement, duration: number): void {
  const range = root.querySelector<HTMLInputElement>('[data-duration-range]');
  const number = root.querySelector<HTMLInputElement>('[data-duration-number]');
  if (range) range.value = String(duration);
  if (number) number.value = String(duration);
}

function closeActivityMenu(root: HTMLElement): void {
  const menu = root.querySelector<HTMLElement>('[data-activity-menu]');
  const trigger = root.querySelector<HTMLElement>('[data-activity-trigger]');
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
}

function setActivityMenu(root: HTMLElement, open: boolean): void {
  const menu = root.querySelector<HTMLElement>('[data-activity-menu]');
  const trigger = root.querySelector<HTMLElement>('[data-activity-trigger]');
  if (!menu || !trigger) return;
  menu.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
}

interface ControllerContext {
  root: HTMLElement;
  ui: CaloriesBurnedCalculatorUI;
  state: StoredCaloriesState;
  initialState: StoredCaloriesState;
  render: () => void;
}

function createRender(root: HTMLElement, ui: CaloriesBurnedCalculatorUI, state: StoredCaloriesState): () => void {
  return (): void => {
    const result = calculateCalories({
      activityId: state.activityId,
      intensity: state.intensity,
      weightKg: state.weightKg,
      durationMinutes: state.durationMinutes,
    });
    if (result) root.dataset.assessment = evaluateBurn(result.met).marker;
    updateWeightInputs(root, state.weightKg, state.unit);
    updateDurationInputs(root, state.durationMinutes);
    renderUnitButtons(root, state.unit);
    renderIntensityButtons(root, state.intensity, ui);
    updateActivityTrigger(root, getActivityLabel(state.activityId, ui));
    renderResult({ root, result, ui, unit: state.unit, weightDisplay: getWeightDisplay(state.weightKg, state.unit) });
    saveCaloriesState(state);
  };
}

function bindActivity(context: ControllerContext): void {
  const { root, ui, state, render } = context;
  root.querySelector('[data-activity-trigger]')?.addEventListener('click', () => {
    const menu = root.querySelector<HTMLElement>('[data-activity-menu]');
    setActivityMenu(root, Boolean(menu?.hidden));
  });
  root.querySelector('[data-activity-options]')?.addEventListener('click', (event) => {
    const option = (event.target as HTMLElement).closest<HTMLElement>('[data-activity-option]');
    if (!option) return;
    state.activityId = option.dataset.activityOption as ActivityId;
    renderActivityOptions(root, ui, state.activityId);
    closeActivityMenu(root);
    render();
  });
  root.querySelector('[data-activity-trigger]')?.addEventListener('keydown', (event) => {
    if ((event as KeyboardEvent).key === 'Escape') closeActivityMenu(root);
    if ((event as KeyboardEvent).key === 'ArrowDown') setActivityMenu(root, true);
  });
}

function bindIntensityAndUnits(context: ControllerContext): void {
  const { root, state, render } = context;
  root.querySelectorAll<HTMLElement>('.calories-intensity-button[data-intensity]').forEach((button) => button.addEventListener('click', () => {
    state.intensity = button.dataset.intensity as IntensityId;
    render();
  }));
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((button) => button.addEventListener('click', () => {
    state.unit = button.dataset.unit as WeightUnit;
    render();
  }));
}

function bindNumericInputs(context: ControllerContext): void {
  const { root, state, render } = context;
  const handleWeight = (value: string): void => {
    const display = Number(value);
    if (!Number.isFinite(display)) return;
    const weightKg = state.unit === 'metric' ? display : poundsToKilograms(display);
    state.weightKg = clampWeight(weightKg, 'metric');
    render();
  };
  const handleDuration = (value: string): void => {
    const duration = Number(value);
    if (!Number.isFinite(duration)) return;
    state.durationMinutes = Math.round(Math.min(600, Math.max(1, duration)));
    render();
  };
  root.querySelector('[data-weight-range]')?.addEventListener('input', (event) => handleWeight((event.target as HTMLInputElement).value));
  root.querySelector('[data-weight-number]')?.addEventListener('input', (event) => handleWeight((event.target as HTMLInputElement).value));
  root.querySelector('[data-duration-range]')?.addEventListener('input', (event) => handleDuration((event.target as HTMLInputElement).value));
  root.querySelector('[data-duration-number]')?.addEventListener('input', (event) => handleDuration((event.target as HTMLInputElement).value));
}

function bindResetAndOutsideClick(context: ControllerContext): void {
  const { root, state, initialState, render } = context;
  root.querySelector('[data-reset]')?.addEventListener('click', () => {
    Object.assign(state, initialState);
    render();
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeActivityMenu(root);
  });
}

export function mountCaloriesBurnedCalculator(): void {
  const root = document.querySelector<HTMLElement>('[data-calories-tool]');
  if (!root) return;
  const config = getConfig(root);
  if (!config) return;
  const state: StoredCaloriesState = { ...(loadCaloriesState() ?? config.initialState) };
  renderActivityOptions(root, config.ui, state.activityId);
  const context = { root, ui: config.ui, state, initialState: config.initialState, render: () => undefined };
  context.render = createRender(root, config.ui, state);
  bindActivity(context);
  bindIntensityAndUnits(context);
  bindNumericInputs(context);
  bindResetAndOutsideClick(context);
  context.render();
}
