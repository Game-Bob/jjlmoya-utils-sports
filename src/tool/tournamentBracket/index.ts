import type { ToolDefinition } from '../../types';
import { tournamentBracket } from './entry';
export * from './entry';
export const TOURNAMENT_BRACKET_TOOL: ToolDefinition = {
  entry: tournamentBracket,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
