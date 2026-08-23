import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'kalorienverbrauch-sport-rechner';
const title = 'Kalorienverbrauch Rechner für Sport und MET';
const description = 'Schätzen Sie den Brutto- und Nettokalorienverbrauch von Aktivitäten basierend auf Intensität, Körpergewicht, Dauer und MET-Werten aus dem Kompendium 2024.';

const faq = [
  {
    question: 'Wie berechnet dieser Kalorienverbrauchsrechner den Energieaufwand?',
    answer: 'Er kombiniert den MET-Wert der gewählten Aktivität mit Körpergewicht und Dauer. Die Schätzung nutzt die Standard-MET-Konvention von 3,5 ml Sauerstoff pro kg pro Minute in Ruhe.',
  },
  {
    question: 'Was ist der Unterschied zwischen Brutto- und Nettokalorien?',
    answer: 'Bruttokalorien enthalten den gesamten geschätzten Energieaufwand der Aktivität. Nettokalorien ziehen den Grundumsatz in Ruhe für denselben Zeitraum ab.',
  },
  {
    question: 'Was bedeutet MET in einem Rechner für den Kalorienverbrauch?',
    answer: 'Ein MET ist ein Vielfaches des Ruhe-Stoffwechsels. Eine Aktivität mit 3 MET verbraucht etwa dreimal so viel Energie wie der Referenzzustand in Ruhe.',
  },
  {
    question: 'Kann ich dieses Tool für Gehen, Laufen, Radfahren oder Sport nutzen?',
    answer: 'Ja. Wählen Sie aus Gehen, Laufen, Radfahren, Schwimmen, Basketball, Fußball, Tanzen, Wandern, Seilspringen, Zirkeltraining, Krafttraining und Yoga.',
  },
  {
    question: 'Warum unterscheidet sich das Ergebnis von meiner Fitnessuhr?',
    answer: 'Fitnessuhren nutzen oft Herzfrequenz-, Puls- und Bewegungssensoren. Dieser Rechner basiert auf publizierten MET-Tabellenwerten und dem Körpergewicht.',
  },
  {
    question: 'Sind diese Schätzungen für medizinische Entscheidungen geeignet?',
    answer: 'Nein. Das Ergebnis dient der allgemeinen Orientierung und Bildung. Es misst nicht Ihren exakten Stoffwechsel und ersetzt keine medizinische Beratung.',
  },
];

const howTo = [
  {
    name: 'Aktivität auswählen',
    text: 'Wählen Sie die Sportart oder Bewegung, die Ihrer Aktivität am nächsten kommt.',
  },
  {
    name: 'Intensität wählen',
    text: 'Wählen Sie leichte, mittlere oder hohe Intensität entsprechend Ihrem Anstrengungsgrad.',
  },
  {
    name: 'Gewicht und Dauer eingeben',
    text: 'Geben Sie Ihr Körpergewicht und die Dauer in Minuten ein.',
  },
  {
    name: 'Ergebnisse ablesen',
    text: 'Lesen Sie Brutto- und Nettokalorien sowie den Kalorienverbrauch pro Minute ab.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufige Fragen zum Kalorienverbrauch beim Sport',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Quellen und MET-Referenzen',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Verwandeln Sie Trainingseinheiten in nützliche Schätzungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Rechner für den Kalorienverbrauch ist am nützlichsten, wenn seine Annahmen transparent sind. Dieses Tool ermöglicht die Auswahl der Sportart, Intensität, Zeit und des Gewichts für transparente Vergleiche.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'Aktivitäts-Referenzen' },
        { value: '3', label: 'Intensitätsstufen' },
        { value: '2', label: 'Kalorien-Ansichten' },
      ],
    },
    {
      type: 'title',
      text: 'Warum Aktivität, Intensität, Gewicht und Zeit entscheidend sind',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gleiche Zeit, unterschiedlicher Verbrauch',
          description: '30 Minuten sanftes Yoga, zügiges Gehen und schnelles Laufen haben völlig unterschiedliche Energieanforderungen.',
        },
        {
          title: 'Intensität verändert den Verbrauch',
          description: 'Gemütliches Radfahren unterscheidet sich stark von intensivem Rennradfahren. Wählen Sie die Intensität, die den Großteil der Einheit beschreibt.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Brutto- und Nettokalorien beantworten verschiedene Fragen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Ansicht', 'Was enthalten ist', 'Wann es hilft'],
      rows: [
        ['Bruttokalorien', 'Gesamter geschätzter Energieverbrauch der Aktivität.', 'Zum Vergleichen des Gesamtaufwands verschiedener Einheiten.'],
        ['Nettokalorien', 'Zusätzlicher Energieverbrauch über dem Ruhezustand.', 'Um den reinen Mehrverbrauch durch den Sport zu verstehen.'],
        ['Kalorien pro Minute', 'Bruttokalorien geteilt durch die Dauer.', 'Zum Vergleich der Verbrauchsrate je nach Intensität.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ergebnisse als Orientierung betrachten',
      badge: 'Wichtiger Kontext',
      html: '<p>MET-Werte sind statistische Referenzwerte. Fitness, Alter, Körperzusammensetzung und Technik können den tatsächlichen Verbrauch beeinflussen.</p>',
    },
    {
      type: 'title',
      text: 'Tipps für verlässliche Vergleiche',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gleiche Einstellungen nutzen:</strong> vergleichen Sie Einheiten mit derselben Aktivitätskategorie.',
        '<strong>Nur aktive Zeit messen:</strong> zählen Sie nur die Minuten tatsächlicher Bewegung.',
        '<strong>Einheiten beibehalten:</strong> wechseln Sie mühelos zwischen kg und lbs.',
        '<strong>Trends beobachten:</strong> nutzen Sie die Werte als Orientierung statt als exakte Vorgabe.',
      ],
    },
    {
      type: 'tip',
      title: 'Abweichungen von Fitnesstrackern',
      html: 'Fitness-Tracker nutzen oft Pulsmessung und Bewegungssensoren, während dieser Rechner auf publizierten MET-Tabellen basiert.',
    },
  ],
  ui: {
    activityLabel: 'Aktivität',
    intensityLabel: 'Typische Intensität',
    weightLabel: 'Körpergewicht',
    durationLabel: 'Aktive Dauer',
    unitsLabel: 'Gewichtseinheit',
    metricUnit: 'Metrisch',
    imperialUnit: 'Imperial',
    activityWalking: 'Gehen',
    activityRunning: 'Laufen',
    activityCycling: 'Radfahren',
    activitySwimming: 'Schwimmen',
    activityBasketball: 'Basketball',
    activitySoccer: 'Fußball',
    activityDancing: 'Tanzen',
    activityHiking: 'Wandern',
    activityRopeJumping: 'Seilspringen',
    activityCircuit: 'Zirkeltraining',
    activityStrength: 'Krafttraining',
    activityYoga: 'Yoga',
    intensityLight: 'Leicht',
    intensityModerate: 'Moderat',
    intensityVigorous: 'Intensiv',
    weightHint: 'Geben Sie Ihr aktuelles Körpergewicht ein.',
    durationHint: 'Zählen Sie nur die Minuten aktiver Bewegung.',
    activityHint: 'Metabolische Orientierung',
    resultEyebrow: 'Schätzung Ihrer Einheit',
    resultTitle: 'Energie in Bewegung',
    grossCaloriesLabel: 'Bruttokalorien',
    netCaloriesLabel: 'Netto über Ruhezustand',
    perMinuteLabel: 'Rate',
    metLabel: 'MET-Referenz',
    intensityBandLabel: 'Intensitätsstufe',
    lightBand: 'Leichte Anstrengung',
    moderateBand: 'Moderate Anstrengung',
    vigorousBand: 'Hohe Anstrengung',
    methodNote: 'Formel: MET x 3,5 x Gewicht in kg ÷ 200 x Minuten. Brutto enthält den Grundumsatz, Netto zieht 1 MET ab.',
    estimateNotice: 'Dies ist eine Orientierungshilfe und keine medizinische oder Ernährungsberatung.',
    resetButton: 'Beispiel für 30 Min. Gehen wiederherstellen',
    activityMenuLabel: 'Aktivität wählen',
    selectActivity: 'Aktivität auswählen',
    energySceneLabel: 'Visuelle Schätzung des Energieverbrauchs',
  },
};
