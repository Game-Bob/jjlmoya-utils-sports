import type { SEOSection } from '@jjlmoya/utils-shared';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../types';
import { bibliographyEntries } from './bibliography';
import type { Vo2MaxCalculatorUI } from './ui';

interface SeoCopy {
  introTitle: string;
  introParagraph: string;
  summaryTitle: string;
  summaryItems: string[];
  stats: { value: string; label: string }[];
  protocolTitle: string;
  comparative: { title: string; description: string }[];
  rockportTitle: string;
  diagnosticTitle: string;
  diagnosticHtml: string;
  ageTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  shuttleTitle: string;
  shuttleParagraph: string;
  listItems: string[];
  tipTitle: string;
  tipHtml: string;
}

export interface Vo2LocaleCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  diagnosticBadge: string;
  ui: Vo2MaxCalculatorUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SeoCopy;
}

function createSeo(copy: SeoCopy, diagnosticBadge: string): SEOSection[] {
  return [
    { type: 'title', text: copy.introTitle, level: 2 },
    { type: 'paragraph', html: copy.introParagraph },
    { type: 'summary', title: copy.summaryTitle, items: copy.summaryItems },
    { type: 'stats', items: copy.stats },
    { type: 'title', text: copy.protocolTitle, level: 2 },
    { type: 'comparative', columns: 2, items: copy.comparative },
    { type: 'title', text: copy.rockportTitle, level: 2 },
    { type: 'diagnostic', variant: 'info', title: copy.diagnosticTitle, badge: diagnosticBadge, html: copy.diagnosticHtml },
    { type: 'title', text: copy.ageTitle, level: 2 },
    { type: 'table', headers: copy.tableHeaders, rows: copy.tableRows },
    { type: 'title', text: copy.shuttleTitle, level: 2 },
    { type: 'paragraph', html: copy.shuttleParagraph },
    { type: 'list', items: copy.listItems },
    { type: 'tip', title: copy.tipTitle, html: copy.tipHtml },
  ];
}

function createSchemas(copy: Vo2LocaleCopy): WithContext<FAQPage | HowTo | SoftwareApplication>[] {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: copy.locale,
  };
  return [appSchema, faqSchema, howToSchema];
}

export function createVo2Content(copy: Vo2LocaleCopy): ToolLocaleContent<Vo2MaxCalculatorUI> {
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    faqTitle: copy.faqTitle,
    faq: copy.faq,
    howTo: copy.howTo,
    schemas: createSchemas(copy),
    bibliographyTitle: copy.bibliographyTitle,
    bibliography: bibliographyEntries,
    seo: createSeo(copy.seo, copy.diagnosticBadge),
    ui: copy.ui,
  };
}
