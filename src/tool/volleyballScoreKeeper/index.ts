import { volleyballScoreKeeper } from './entry';
export * from './entry';

export const VOLLEYBALL_SCOREKEEPER_TOOL = {
  entry: volleyballScoreKeeper,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
