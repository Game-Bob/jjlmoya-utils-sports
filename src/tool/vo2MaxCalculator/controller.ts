import { calculateVo2Max, defaultVo2Input, type Sex, type UnitSystem, type Vo2Input, type Vo2Method } from './logic';
import { renderVo2Result, setMethodFields } from './dom-views';
import { loadVo2State, saveVo2State } from './storage';

interface ControllerLabels {
  methodNote: Record<Vo2Method, string>;
  bandLabels: Record<string, string>;
  invalidNotice: string;
}

function numberValue(id: string): number {
  const element = document.getElementById(id) as HTMLInputElement | null;
  return Number(element?.value ?? 0);
}

function selectedSex(): Sex {
  return document.querySelector<HTMLButtonElement>('[data-sex].is-active')?.dataset.sex === 'female' ? 'female' : 'male';
}

function selectedUnit(): UnitSystem {
  return document.querySelector<HTMLButtonElement>('[data-unit].is-active')?.dataset.unit === 'imperial' ? 'imperial' : 'metric';
}

function readInput(): Vo2Input {
  const method = (document.querySelector<HTMLButtonElement>('[data-method-option].is-active')?.dataset.methodOption ?? 'cooper12') as Vo2Method;
  const performanceId = method === 'shuttle20' ? 'vo2-stage' : 'vo2-performance';
  return {
    method,
    unit: selectedUnit(),
    performance: numberValue(performanceId),
    minutes: numberValue('vo2-minutes'),
    seconds: numberValue('vo2-seconds'),
    age: numberValue('vo2-age'),
    sex: selectedSex(),
    weight: numberValue('vo2-weight'),
    heartRate: numberValue('vo2-heart-rate'),
  };
}

function applyNumericValues(input: Vo2Input): void {
  const values: Record<string, number> = {
    'vo2-performance': input.performance,
    'vo2-stage': input.performance,
    'vo2-minutes': input.minutes,
    'vo2-seconds': input.seconds,
    'vo2-age': input.age,
    'vo2-weight': input.weight,
    'vo2-heart-rate': input.heartRate,
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id) as HTMLInputElement | null;
    if (element) element.value = String(value);
  });
}

function applyChoiceValues(input: Vo2Input): void {
  document.querySelectorAll<HTMLButtonElement>('[data-method-option]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.methodOption === input.method);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-sex]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.sex === input.sex);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.unit === input.unit);
  });
  setMethodFields(input.method);
  document.querySelectorAll<HTMLElement>('[data-distance-unit]').forEach((element) => {
    element.textContent = input.unit === 'metric' ? 'm' : 'mi';
  });
  document.querySelectorAll<HTMLElement>('[data-weight-unit]').forEach((element) => {
    element.textContent = input.unit === 'metric' ? 'kg' : 'lb';
  });
}

function applyInput(input: Vo2Input): void {
  applyNumericValues(input);
  applyChoiceValues(input);
}

function normalizeMethodValue(method: Vo2Method): void {
  if (method !== 'shuttle20') return;
  const stage = document.getElementById('vo2-stage') as HTMLInputElement | null;
  if (stage && (Number(stage.value) < 1 || Number(stage.value) > 21)) stage.value = '8';
}

function refresh(labels: ControllerLabels): void {
  const method = (document.querySelector<HTMLButtonElement>('[data-method-option].is-active')?.dataset.methodOption ?? 'cooper12') as Vo2Method;
  normalizeMethodValue(method);
  const input = readInput();
  setMethodFields(input.method);
  const result = calculateVo2Max(input);
  saveVo2State(input);
  renderVo2Result(input, result, labels);
}

function bindChoice(selector: string, onChange: () => void): void {
  document.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll<HTMLButtonElement>(selector).forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      onChange();
    });
  });
}

function convertField(id: string, factor: number): void {
  const element = document.getElementById(id) as HTMLInputElement | null;
  if (element) element.value = String(Number(element.value) * factor);
}

function convertUnitFields(method: Vo2Method, next: UnitSystem): void {
  if (method === 'cooper12') convertField('vo2-performance', next === 'metric' ? 1609.344 : 1 / 1609.344);
  if (method === 'rockport') convertField('vo2-weight', next === 'metric' ? 1 / 2.2046226218 : 2.2046226218);
}

function handleUnitChoice(button: HTMLButtonElement, onChange: () => void): void {
  const previous = selectedUnit();
  const next = button.dataset.unit === 'imperial' ? 'imperial' : 'metric';
  const method = (document.querySelector<HTMLButtonElement>('[data-method-option].is-active')?.dataset.methodOption ?? 'cooper12') as Vo2Method;
  if (previous === next) return;
  document.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((item) => item.classList.remove('is-active'));
  button.classList.add('is-active');
  convertUnitFields(method, next);
  onChange();
}

function bindUnitChoice(onChange: () => void): void {
  document.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => {
    button.addEventListener('click', () => handleUnitChoice(button, onChange));
  });
}

function bindInputs(onChange: () => void): void {
  document.querySelectorAll<HTMLInputElement>('#vo2-form input').forEach((input) => input.addEventListener('input', onChange));
}

function init(labels: ControllerLabels): void {
  const saved = loadVo2State();
  applyInput(saved);
  const update = () => refresh(labels);
  bindChoice('[data-method-option]', update);
  bindChoice('[data-sex]', update);
  bindUnitChoice(update);
  bindInputs(update);
  document.getElementById('vo2-reset')?.addEventListener('click', () => {
    const initial = defaultVo2Input();
    applyInput(initial);
    refresh(labels);
  });
  refresh(labels);
}

export function initVo2Calculator(labels: ControllerLabels): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(labels), { once: true });
    return;
  }
  init(labels);
}
