import type { ToolDefinition } from '../../types';
import { roundRobinLeagueManager } from './entry';

export * from './entry';

export const ROUND_ROBIN_LEAGUE_MANAGER_TOOL: ToolDefinition = {
  entry: roundRobinLeagueManager,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
