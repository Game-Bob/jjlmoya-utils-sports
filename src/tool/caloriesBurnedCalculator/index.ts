import { caloriesBurnedCalculator } from './entry';

export * from './entry';

export const CALORIES_BURNED_CALCULATOR_TOOL = {
  entry: caloriesBurnedCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
