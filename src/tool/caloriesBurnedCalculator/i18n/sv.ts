import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'kalkylator-branda-kalorier-traning';
const title = 'Kalkylator för Brända Kalorier vid Träning och MET';
const description = 'Uppskatta brutto- och nettokalorier från träning baserat på aktivitet, intensitet, kroppsvikt, varaktighet och MET-värden från Kompendium 2024.';

const faq = [
  {
    question: 'Hur uppskattar denna kalkylator kaloriförbrukning vid träning?',
    answer: 'Den kombinerar MET-värdet för den valda aktiviteten med kroppsvikt och varaktighet. Uppskattningen använder standard-MET på 3,5 ml syre per kg och minut i vila.',
  },
  {
    question: 'Vad är skillnaden mellan brutto- och nettokalorier?',
    answer: 'Bruttokalorier inkluderar hela den uppskattade energiförbrukningen under aktiviteten. Nettokalorier drar av den energi kroppen skulle ha förbrukat i vila under samma tid.',
  },
  {
    question: 'Vad betyder MET i en kalorikalkylator?',
    answer: 'En MET är en multipel av vilometabolismen. En aktivitet på 3 MET förbrukar cirka tre gånger mer energi än viloreferensen.',
  },
  {
    question: 'Kan jag använda verktyget för promenader, löpning, cykling eller sport?',
    answer: 'Ja. Välj mellan promenad, löpning, cykling, simning, basket, fotboll, dans, vandring, hopprep, cirkelträning, styrketräning och yoga.',
  },
  {
    question: 'Varför skiljer sig resultatet från min träningsklocka?',
    answer: 'Träningsklockor använder ofta pulsmätning och rörelsesensorer. Denna kalkylator baseras på publicerade MET-tabeller och din kroppsvikt.',
  },
  {
    question: 'Är dessa uppskattningar lämpliga för medicinska beslut?',
    answer: 'Nej. Resultatet är en pedagogisk och orienterande uppskattning. Det mäter inte din exakta ämnesomsättning och ersätter inte medicinsk rådgivning.',
  },
];

const howTo = [
  {
    name: 'Välj en aktivitet',
    text: 'Välj den träning eller sport som bäst motsvarar det du utförde för att ladda MET-referensen.',
  },
  {
    name: 'Välj ansträngningsnivå',
    text: 'Välj lätt, måttlig eller intensiv ansträngning baserat på ditt genomgående tempo.',
  },
  {
    name: 'Ange vikt och varaktighet',
    text: 'Fyll i din kroppsvikt och aktivitetens längd i minuter.',
  },
  {
    name: 'Läs av brutto- och nettokalorier',
    text: 'Se bruttokalorier för den totala förbrukningen och nettokalorier för förbrukningen utöver vila.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om brända kalorier',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Källor och MET-referenser',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Omvandla träningspass till användbara uppskattningar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En kalkylator för brända kalorier är som mest värdefull när dess antaganden är tydliga. Detta verktyg låter dig välja aktivitet, anpassa intensitet samt ange vikt och tid.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'aktivitetsreferenser' },
        { value: '3', label: 'ansträngningsnivåer' },
        { value: '2', label: 'kalorivisningar' },
      ],
    },
    {
      type: 'title',
      text: 'Varför aktivitet, intensitet, vikt och tid spelar roll',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Samma tid kräver olika energi',
          description: 'Tretiu minuter lugn yoga, rask promenad eller intensiv löpning har helt olika energibehov.',
        },
        {
          title: 'Samma aktivitet varierar med ansträngningen',
          description: 'En lugn cykeltur skiljer sig markant från ett hårt cykelpass. Välj den intensitet som beskriver större delen av passet.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Brutto- och nettokalorier besvarar olika frågor',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Visning', 'Vad som ingår', 'När det hjälper'],
      rows: [
        ['Bruttokalorier', 'Den totala uppskattade energiförbrukningen för aktiviteten.', 'För att jämföra den totala belasten av olika pass.'],
        ['Nettokalorier', 'Den uppskattade förbrukningen minus viloförbrukningen.', 'För att förstå den extra energiförbrukningen som träningen ger.'],
        ['Kalorier per minut', 'Bruttokalorier dividerat med passets varaktighet.', 'För att jämföra förbränningstakten utifrån intensitet.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Se resultatet som en orientering',
      badge: 'Viktigt kontext',
      html: '<p>MET-värden är statistiska referenser. Kondition, ålder, kroppssammansättning och teknik påverkar den faktiska förbrukningen.</p>',
    },
    {
      type: 'title',
      text: 'Tips för mer tillförlitliga jämförelser',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Behåll samma inställningar:</strong> jämför pass med samma aktivitetskategori.',
        '<strong>Mät endast aktiv tid:</strong> räkna bara minuter i faktiskt arbete.',
        '<strong>Vara konsekvent med enheter:</strong> växla mellan kg och lbs utan att förlora precision.',
        '<strong>Följ trender:</strong> använd värdena som en vägledning snarare än en exakt siffra.',
      ],
    },
    {
      type: 'tip',
      title: 'Skillnader mot din träningsklocka',
      html: 'Träningsklockor kombinerar ofta puls och rörelsesensorer, medan denna kalkylator bygger på standardiserade MET-tabeller och din vikt.',
    },
  ],
  ui: {
    activityLabel: 'Aktivitet',
    intensityLabel: 'Vanlig ansträngning',
    weightLabel: 'Kroppsvikt',
    durationLabel: 'Aktiv varaktighet',
    unitsLabel: 'Viktenhet',
    metricUnit: 'Metrisk',
    imperialUnit: 'Imperial',
    activityWalking: 'Promenad',
    activityRunning: 'Löpning',
    activityCycling: 'Cykling',
    activitySwimming: 'Simning',
    activityBasketball: 'Basket',
    activitySoccer: 'Fotboll',
    activityDancing: 'Dans',
    activityHiking: 'Vandring',
    activityRopeJumping: 'Hopprep',
    activityCircuit: 'Cirkelträning',
    activityStrength: 'Styrketräning',
    activityYoga: 'Yoga',
    intensityLight: 'Lätt',
    intensityModerate: 'Måttlig',
    intensityVigorous: 'Intensiv',
    weightHint: 'Fyll i din aktuella kroppsvikt.',
    durationHint: 'Räkna bara minuter av aktiv rörelse.',
    activityHint: 'Metabolisk bana',
    resultEyebrow: 'Uppskattning av ditt pass',
    resultTitle: 'Energi i rörelse',
    grossCaloriesLabel: 'Bruttokalorier',
    netCaloriesLabel: 'Netto utöver vila',
    perMinuteLabel: 'Tempo',
    metLabel: 'MET-referens',
    intensityBandLabel: 'Intensitetsnivå',
    lightBand: 'Lätt ansträngning',
    moderateBand: 'Måttlig ansträngning',
    vigorousBand: 'Intensiv ansträngning',
    methodNote: 'Använder formeln MET x 3,5 x vikt i kg ÷ 200 x minuter. Brutto inkluderar vila; netto drar av 1 MET.',
    estimateNotice: 'Detta är en pedagogisk uppskattning och inte medicinsk eller dietisk rådgivning.',
    resetButton: 'Återställ exempel på 30 minuters promenad',
    activityMenuLabel: 'Välj en aktivitet',
    selectActivity: 'Välj en aktivitet',
    energySceneLabel: 'Visuell uppskattning av passets energiförbrukning',
  },
};
