import type { HistoryEvent } from './logic';
import type { RugbyScoreKeeperUI } from './ui';

export function eventLabel(event: HistoryEvent, ui: RugbyScoreKeeperUI): string {
  switch (event.type) {
    case 'try': return ui.tryLabel;
    case 'conv': return ui.conversion;
    case 'missed-conv': return ui.conversionMiss;
    case 'pen': return ui.penalty;
    case 'drop': return ui.dropGoal;
    case 'sinbin': return event.player ? `${ui.sinBin}: ${event.player}` : ui.sinBin;
    default: return event.label;
  }
}
