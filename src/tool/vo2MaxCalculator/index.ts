import { vo2MaxCalculator } from './entry';

export * from './entry';

export const VO2_MAX_CALCULATOR_TOOL = {
  entry: vo2MaxCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
