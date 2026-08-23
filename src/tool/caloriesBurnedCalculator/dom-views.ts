import { ACTIVITY_PROFILES, type ActivityId, type CalorieResult, type IntensityId } from './logic';
import type { CaloriesBurnedCalculatorUI } from './ui';
import type { WeightUnit } from './storage';

const activityUiKeys: Record<ActivityId, keyof CaloriesBurnedCalculatorUI> = {
  walking: 'activityWalking',
  running: 'activityRunning',
  cycling: 'activityCycling',
  swimming: 'activitySwimming',
  basketball: 'activityBasketball',
  soccer: 'activitySoccer',
  dancing: 'activityDancing',
  hiking: 'activityHiking',
  'rope-jumping': 'activityRopeJumping',
  'circuit-training': 'activityCircuit',
  'strength-training': 'activityStrength',
  yoga: 'activityYoga',
};

const intensityUiKeys: Record<IntensityId, keyof CaloriesBurnedCalculatorUI> = {
  light: 'intensityLight',
  moderate: 'intensityModerate',
  vigorous: 'intensityVigorous',
};

export function getActivityLabel(activityId: ActivityId, ui: CaloriesBurnedCalculatorUI): string {
  return ui[activityUiKeys[activityId]];
}

export function getIntensityLabel(intensity: IntensityId, ui: CaloriesBurnedCalculatorUI): string {
  return ui[intensityUiKeys[intensity]];
}

export function renderActivityOptions(root: HTMLElement, ui: CaloriesBurnedCalculatorUI, selected: ActivityId): void {
  const list = root.querySelector<HTMLElement>('[data-activity-options]');
  if (!list) return;
  list.innerHTML = ACTIVITY_PROFILES.map((activity) => {
    const isSelected = activity.id === selected;
    return `<button type="button" class="calories-activity-option${isSelected ? ' is-selected' : ''}" role="option" aria-selected="${isSelected}" data-activity-option="${activity.id}">${getActivityLabel(activity.id, ui)}</button>`;
  }).join('');
}

export function updateActivityTrigger(root: HTMLElement, label: string): void {
  const trigger = root.querySelector<HTMLElement>('[data-activity-trigger]');
  if (trigger) trigger.querySelector<HTMLElement>('[data-activity-value]')!.textContent = label;
}

function formatKcal(value: number): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(value));
}

function formatDecimal(value: number): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value);
}

interface ResultViewArgs {
  root: HTMLElement;
  result: CalorieResult | null;
  ui: CaloriesBurnedCalculatorUI;
  unit: WeightUnit;
  weightDisplay: number;
}

export function renderResult({ root, result, ui, unit, weightDisplay }: ResultViewArgs): void {
  const resultPanel = root.querySelector<HTMLElement>('[data-result-panel]');
  if (!result || !resultPanel) return;
  resultPanel.dataset.intensity = result.intensity;
  root.querySelectorAll<HTMLElement>('[data-output="gross"]').forEach((element) => {
    element.textContent = formatKcal(result.grossKcal);
  });
  root.querySelector<HTMLElement>('[data-output="net"]')!.textContent = formatKcal(result.netKcal);
  root.querySelector<HTMLElement>('[data-output="per-minute"]')!.textContent = `${formatDecimal(result.grossKcalPerMinute)} kcal/min`;
  root.querySelector<HTMLElement>('[data-output="met"]')!.textContent = `${formatDecimal(result.met)} MET`;
  root.querySelector<HTMLElement>('[data-output="band"]')!.textContent = getIntensityLabel(result.intensity, ui);
  root.querySelector<HTMLElement>('[data-output="weight"]')!.textContent = `${formatDecimal(weightDisplay)} ${unit === 'metric' ? 'kg' : 'lb'}`;
  const arc = root.querySelector<SVGCircleElement>('[data-energy-arc]');
  if (arc) arc.style.strokeDashoffset = `${280 - Math.min(280, result.met * 18)}`;
  const flame = root.querySelector<HTMLElement>('[data-energy-flame]');
  if (flame) flame.style.transform = `scale(${0.8 + Math.min(0.7, result.met / 14)})`;
}

export function renderUnitButtons(root: HTMLElement, unit: WeightUnit): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((button) => {
    const active = button.dataset.unit === unit;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll<HTMLElement>('[data-weight-unit]').forEach((element) => {
    element.textContent = unit === 'metric' ? 'kg' : 'lb';
  });
}

export function renderIntensityButtons(root: HTMLElement, intensity: IntensityId, ui: CaloriesBurnedCalculatorUI): void {
  root.querySelectorAll<HTMLElement>('.calories-intensity-button[data-intensity]').forEach((button) => {
    const buttonIntensity = button.dataset.intensity as IntensityId;
    const active = buttonIntensity === intensity;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
    button.textContent = getIntensityLabel(buttonIntensity, ui);
  });
}
