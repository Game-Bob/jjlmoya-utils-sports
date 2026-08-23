import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'verbrande-calorieen-sport-calculator';
const title = 'Verbrande Calorieën Calculator voor Sport en MET';
const description = 'Schat bruto en netto verbrande calorieën door beweging op basis van activiteit, intensiteit, gewicht, duur en MET-waarden uit het Compendium 2024.';

const faq = [
  {
    question: 'Hoe schat deze verbrande calorieën calculator het energieverbruik?',
    answer: 'Het combineert de MET-waarde van de gekozen activiteit met lichaamsgewicht en duur. De schatting gebruikt de standaard MET-conventie van 3,5 ml zuurstof per kg per minuut in rust.',
  },
  {
    question: 'Wat is het verschil tussen bruto en netto verbrande calorieën?',
    answer: 'Bruto calorieën bevatten het totale geschatte energieverbruik tijdens de activiteit. Netto calorieën trekken het energieverbruik af dat je lichaam in rust in dezelfde tijd zou hebben gebruikt.',
  },
  {
    question: 'Wat betekent MET in een calorieën calculator?',
    answer: 'Een MET is een meervoud van de ruststofwisseling. Een activiteit van 3 MET verbruikt ongeveer drie keer zoveel energie als de rustreferentie.',
  },
  {
    question: 'Kan ik deze tool gebruiken voor wandelen, hardlopen, fietsen of sport?',
    answer: 'Ja. Kies uit wandelen, hardlopen, fietsen, zwemmen, basketbal, voetbal, dansen, hiken, touwtjespringen, circuittraining, krachttraining en yoga.',
  },
  {
    question: 'Waarom verschilt het resultaat van mijn smartwatch?',
    answer: 'Smartwatches gebruiken vaak hartslag- en bewegingssensoren. Deze calculator is gebaseerd op gepubliceerde MET-tabellen en je lichaamsgewicht.',
  },
  {
    question: 'Zijn deze schattingen geschikt voor medisch of dieetadvies?',
    answer: 'Nee. Het resultaat is een educatieve en informatieve schatting. Het meet niet je exacte stofwisseling en vervangt geen medisch advies.',
  },
];

const howTo = [
  {
    name: 'Kies een activiteit',
    text: 'Selecteer de sport of beweging die het beste bij je sessie past om de MET-referentie te laden.',
  },
  {
    name: 'Kies het inspanningsniveau',
    text: 'Kies lichte, matige of intensieve inspanning op basis van je volgehouden tempo.',
  },
  {
    name: 'Voer gewicht en duur in',
    text: 'Vul je lichaamsgewicht en de actieve duur in minuten in.',
  },
  {
    name: 'Bekijk bruto en netto calorieën',
    text: 'Lees de bruto calorieën voor het totale verbruik en de netto calorieën voor het extra verbruik boven rust.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over verbrande calorieën',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Bronvermelding en MET-referenties',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Zet je trainingssessies om in nuttige inzichten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een calculator voor verbrande calorieën is het meest waardevol als de aannames helder zijn. Met deze tool kies je de activiteit, stel je de intensiteit in en vul je gewicht en duur in.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'activiteitsreferenties' },
        { value: '3', label: 'inspanningsniveaus' },
        { value: '2', label: 'calorieweergaven' },
      ],
    },
    {
      type: 'title',
      text: 'Waarom activiteit, intensiteit, gewicht en tijd ertoe doen',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Dezelfde tijd vraagt een ander verbruik',
          description: 'Dertig minuten lichte yoga, stevig wandelen of hardlopen hebben totaal verschillende energiebehoeften.',
        },
        {
          title: 'Dezelfde activiteit verschilt per inspanning',
          description: 'Rustig fietsen verschilt sterk van een intensieve fietstraining. Kies het niveau dat het grootste deel van je sessie beschrijft.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Bruto en netto calorieën geven antwoord op andere vragen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Weergave', 'Wat het bevat', 'Wanneer het helpt'],
      rows: [
        ['Bruto calorieën', 'Het totale geschatte energieverbruik van de activiteit.', 'Om de totale belasting van verschillende sessies te vergelijken.'],
        ['Netto calorieën', 'Het geschatte verbruik min de rustwaarde.', 'Om het extra energieverbruik door het sporten te begrijpen.'],
        ['Calorieën per minuut', 'Bruto calorieën gedeeld door de duur van de sessie.', 'Om de verbrandingssnelheid te vergelijken op basis van intensiteit.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Beschouw het resultaat als richtlijn',
      badge: 'Belangrijke context',
      html: '<p>MET-waarden zijn statistische populatiereferenties. Conditie, leeftijd, lichaamssamenstelling en techniek beïnvloeden het werkelijke verbruik.</p>',
    },
    {
      type: 'title',
      text: 'Tips voor betrouwbare vergelijkingen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik dezelfde instellingen:</strong> vergelijk sessies met dezelfde activiteitscategorie.',
        '<strong>Meet alleen actieve tijd:</strong> tel alleen de minuten waarin je daadwerkelijk bewoog.',
        '<strong>Blijf consistent met eenheden:</strong> wissel tussen kg en lbs zonder verlies van precisie.',
        '<strong>Kijk naar trends:</strong> gebruik de waarden als algemene richtlijn in plaats van een exact getal.',
      ],
    },
    {
      type: 'tip',
      title: 'Verschillen met je smartwatch',
      html: 'Smartwatches combineren vaak hartslag en beweging, terwijl deze tool werkt met gestandaardiseerde MET-tabellen en je gewicht.',
    },
  ],
  ui: {
    activityLabel: 'Activiteit',
    intensityLabel: 'Gebruikelijke inspanning',
    weightLabel: 'Lichaamsgewicht',
    durationLabel: 'Actieve duur',
    unitsLabel: 'Gewichtseenheid',
    metricUnit: 'Metrisch',
    imperialUnit: 'Imperiaal',
    activityWalking: 'Wandelen',
    activityRunning: 'Hardlopen',
    activityCycling: 'Fietsen',
    activitySwimming: 'Zwemmen',
    activityBasketball: 'Basketbal',
    activitySoccer: 'Voetbal',
    activityDancing: 'Dansen',
    activityHiking: 'Hiken',
    activityRopeJumping: 'Touwtjespringen',
    activityCircuit: 'Circuittraining',
    activityStrength: 'Krachttraining',
    activityYoga: 'Yoga',
    intensityLight: 'Licht',
    intensityModerate: 'Matig',
    intensityVigorous: 'Intensief',
    weightHint: 'Vul je recente lichaamsgewicht in.',
    durationHint: 'Tel alleen de minuten van actieve beweging.',
    activityHint: 'Metabole baan',
    resultEyebrow: 'Schatting van je sessie',
    resultTitle: 'Energie in beweging',
    grossCaloriesLabel: 'Bruto calorieën',
    netCaloriesLabel: 'Netto boven rust',
    perMinuteLabel: 'Tempo',
    metLabel: 'MET-referentie',
    intensityBandLabel: 'Intensiteitsniveau',
    lightBand: 'Lichte inspanning',
    moderateBand: 'Matige inspanning',
    vigorousBand: 'Intensieve inspanning',
    methodNote: 'Gebruikt de formule MET x 3,5 x gewicht in kg ÷ 200 x minuten. Bruto bevat rust; netto trekt 1 MET af.',
    estimateNotice: 'Dit is een educatieve schatting en geen medisch of voedingsadvies.',
    resetButton: 'Voorbeeld van 30 minuten wandelen herstellen',
    activityMenuLabel: 'Kies een activiteit',
    selectActivity: 'Selecteer een activiteit',
    energySceneLabel: 'Visuele schatting van het energieverbruik',
  },
};
