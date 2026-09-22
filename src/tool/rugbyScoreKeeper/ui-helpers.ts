import type { HistoryEvent } from './logic';
import type { RugbyScoreKeeperUI } from './ui';

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char] ?? char));
}

export function eventLabel(event: HistoryEvent, ui: RugbyScoreKeeperUI): string {
  switch (event.type) {
    case 'try': return `${ui.tryScored} +5`;
    case 'conv': return `${ui.conversionSuccess} +2`;
    case 'missed-conv': return ui.conversionMiss;
    case 'pen': return `${ui.penaltyScored} +3`;
    case 'drop': return `${ui.dropGoalScored} +3`;
    case 'sinbin': return event.player ? `${ui.sinBin}: ${event.player}` : ui.sinBin;
    default: return event.label;
  }
}
