import { evaluateVo2Result } from './evaluator';
import type { Vo2Input, Vo2Result, Vo2Method } from './logic';

interface DomLabels {
  methodNote: Record<Vo2Method, string>;
  bandLabels: Record<string, string>;
  invalidNotice: string;
}

function setText(id: string, value: string): void {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setVisible(id: string, visible: boolean): void {
  const element = document.getElementById(id);
  if (element) element.hidden = !visible;
}

function updateMethodFields(method: Vo2Method): void {
  setVisible('vo2-distance-field', method === 'cooper12');
  setVisible('vo2-time-field', method === 'cooper15' || method === 'rockport');
  setVisible('vo2-stage-field', method === 'shuttle20');
  setVisible('vo2-weight-field', method === 'rockport');
  setVisible('vo2-heart-rate-field', method === 'rockport');
  document.querySelectorAll<HTMLElement>('[data-method-option]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.methodOption === method);
  });
}

function motionDuration(position: number): string {
  if (position >= 75) return '0.85s';
  if (position <= 25) return '2.2s';
  return '1.45s';
}

function renderReferenceChart(result: Vo2Result, labels: DomLabels): void {
  const chart = document.getElementById('vo2-reference-chart');
  if (!chart) return;
  chart.style.setProperty('--vo2-position', `${result.position}%`);
  chart.style.setProperty('--vo2-motion-duration', motionDuration(result.position));
  chart.dataset.band = result.referenceBand.id;
  chart.classList.remove('is-empty');
  chart.classList.remove('is-updating');
  requestAnimationFrame(() => chart.classList.add('is-updating'));
  document.querySelectorAll<HTMLElement>('[data-reference-band]').forEach((segment) => {
    const active = segment.dataset.referenceBand === result.referenceBand.id;
    segment.classList.toggle('is-active', active);
    const key = segment.dataset.referenceBand ?? '';
    segment.textContent = labels.bandLabels[key] ?? '';
  });
  setText('vo2-percentile', labels.bandLabels[result.referenceBand.label] ?? '');
}

function renderEmpty(labels: DomLabels): void {
  setText('vo2-value', '--');
  setText('vo2-percentile', labels.invalidNotice);
  const chart = document.getElementById('vo2-reference-chart');
  chart?.classList.remove('is-updating');
  chart?.classList.add('is-empty');
  document.querySelectorAll<HTMLElement>('[data-reference-band]').forEach((segment) => segment.classList.remove('is-active'));
}

export function renderVo2Result(input: Vo2Input, result: Vo2Result | null, labels: DomLabels): void {
  const evaluation = evaluateVo2Result(input, result);
  const resultCard = document.getElementById('vo2-result-card');
  resultCard?.classList.toggle('is-caution', evaluation.tone === 'caution');
  resultCard?.classList.toggle('is-strong', evaluation.tone === 'strong');
  if (!result) {
    renderEmpty(labels);
    return;
  }
  setText('vo2-value', result.estimate.toFixed(1));
  setText('vo2-method-note', labels.methodNote[evaluation.methodNote]);
  renderReferenceChart(result, labels);
}

export function setMethodFields(method: Vo2Method): void {
  updateMethodFields(method);
}
