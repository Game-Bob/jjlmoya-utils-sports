import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calories-burned-by-exercise-calculator';
const title = 'Calories Burned Calculator by Exercise and MET';
const description = 'Estimate gross and net calories burned from exercise using activity, intensity, body weight, duration, and MET values from the 2024 Adult Compendium.';

const faq = [
  {
    question: 'How does a calories burned calculator estimate exercise calories?',
    answer: 'It combines the selected activity MET value with body weight and duration. The estimate uses the standard MET convention of 3.5 milliliters of oxygen per kilogram per minute at rest, so it is a useful comparison rather than a clinical measurement.',
  },
  {
    question: 'What is the difference between gross and net calories burned?',
    answer: 'Gross calories include the estimated energy cost of the activity. Net calories subtract the energy your body would have used at rest during the same time, which is often the more useful value when comparing exercise sessions.',
  },
  {
    question: 'What does MET mean in an exercise calorie calculator?',
    answer: 'A MET is a multiple of resting metabolic rate. A 3 MET activity is assigned an energy cost about three times the standard resting reference, while the exact result also changes with body weight and time.',
  },
  {
    question: 'Can I use this tool for walking, running, cycling, or sports?',
    answer: 'Yes. Choose from walking, running, cycling, swimming, basketball, soccer, dancing, hiking, rope jumping, circuit training, strength training, and yoga, then choose a light, moderate, or vigorous reference intensity.',
  },
  {
    question: 'Why is my result different from a smartwatch or gym machine?',
    answer: 'Devices may use heart rate, pace, motion, personal profiles, and proprietary models. This calculator uses published population activity values and a standard body weight formula, so small or large differences are expected.',
  },
  {
    question: 'Are calories burned estimates safe to use for medical decisions?',
    answer: 'No. The result is an educational estimate and does not measure your metabolism, prescribe exercise, diagnose a condition, or replace advice from a qualified health professional.',
  },
];

const howTo = [
  {
    name: 'Choose an activity',
    text: 'Select the exercise or sport that most closely matches what you did. The activity supplies the published MET reference.',
  },
  {
    name: 'Choose the effort level',
    text: 'Pick light, moderate, or vigorous intensity. Use the option that best describes the pace or effort of the whole session, not a short peak.',
  },
  {
    name: 'Enter body weight and duration',
    text: 'Enter your body weight and the number of minutes you were active. Switch between kilograms and pounds whenever it is more natural for you.',
  },
  {
    name: 'Read gross and net calories',
    text: 'Use gross calories for the full estimated activity cost and net calories for the estimated amount above resting energy during the same time.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions about calories burned by exercise',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Sources behind the MET estimates',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Turn an exercise session into a useful estimate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A calories burned calculator is most helpful when it makes its assumptions visible. This tool lets you choose the movement, select the effort, enter your body weight and time, and see both the full activity cost and the amount above rest. It is designed for comparing sessions, not for pretending that a number from a table is a measurement of your body.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'activity references' },
        { value: '3', label: 'effort bands' },
        { value: '2', label: 'calorie views' },
      ],
    },
    {
      type: 'title',
      text: 'Why activity, intensity, weight, and time all matter',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'The same time can cost different amounts',
          description: 'Thirty minutes of gentle yoga, brisk walking, and running are different observations. The activity and effort choice changes the MET value before body weight or duration enters the calculation.',
        },
        {
          title: 'The same activity can change with the effort',
          description: 'A casual cycle and a hard cycle are not interchangeable. Choose the effort that describes most of the session and do not let a short sprint define the whole workout.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Gross calories and net calories answer different questions',
      level: 2,
    },
    {
      type: 'table',
      headers: ['View', 'What it includes', 'When it helps'],
      rows: [
        ['Gross calories', 'The estimated energy cost of the selected activity.', 'Comparing the full demand of different sessions.'],
        ['Net calories', 'The estimated activity cost after subtracting the resting baseline for that time.', 'Understanding the additional cost above simply resting.'],
        ['Calories per minute', 'The gross estimate divided by session duration.', 'Seeing how intensity changes the rate of energy use.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Treat the result as a reference line',
      badge: 'Important context',
      html: '<p>MET values are population references, not a direct reading of your metabolism. Fitness, age, body composition, technique, terrain, and the way an activity is performed can move the real energy cost away from the table value.</p>',
    },
    {
      type: 'title',
      text: 'How to get a more useful comparison',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Repeat the description:</strong> compare the same activity and effort band when you want to compare sessions.',
        '<strong>Measure the time honestly:</strong> include only the minutes you were actually active if your goal is exercise comparison.',
        '<strong>Keep the weight unit consistent:</strong> the metric and imperial controls change the display while preserving the physical weight.',
        '<strong>Use trends, not precision theater:</strong> a rounded estimate can show a direction without becoming a promise about weight change.',
      ],
    },
    {
      type: 'tip',
      title: 'If your number does not match a wearable',
      html: 'That does not automatically mean either number is wrong. A wearable may incorporate heart rate and movement data, while this calculator uses a published activity reference and body weight. Compare the method before comparing the result.',
    },
  ],
  ui: {
    activityLabel: 'Activity',
    intensityLabel: 'Typical effort',
    weightLabel: 'Body weight',
    durationLabel: 'Active duration',
    unitsLabel: 'Weight units',
    metricUnit: 'Metric',
    imperialUnit: 'Imperial',
    activityWalking: 'Walking',
    activityRunning: 'Running',
    activityCycling: 'Cycling',
    activitySwimming: 'Swimming',
    activityBasketball: 'Basketball',
    activitySoccer: 'Soccer',
    activityDancing: 'Dancing',
    activityHiking: 'Hiking',
    activityRopeJumping: 'Rope jumping',
    activityCircuit: 'Circuit training',
    activityStrength: 'Strength training',
    activityYoga: 'Yoga',
    intensityLight: 'Light',
    intensityModerate: 'Moderate',
    intensityVigorous: 'Vigorous',
    weightHint: 'Use a recent body weight. This is a reference input, not a health judgment.',
    durationHint: 'Count the minutes you were actively moving.',
    activityHint: 'The metabolic orbit',
    resultEyebrow: 'Your session estimate',
    resultTitle: 'Energy in motion',
    grossCaloriesLabel: 'Gross calories',
    netCaloriesLabel: 'Net above rest',
    perMinuteLabel: 'Rate',
    metLabel: 'MET reference',
    intensityBandLabel: 'Intensity band',
    lightBand: 'Light effort',
    moderateBand: 'Moderate effort',
    vigorousBand: 'Vigorous effort',
    methodNote: 'Uses MET × 3.5 × body weight in kg ÷ 200 × minutes. The gross view includes the resting baseline; the net view removes 1 MET for the same time.',
    estimateNotice: 'This is an educational estimate, not a clinical measurement or a prescription for food or exercise.',
    resetButton: 'Restore a 30 minute walking example',
    activityMenuLabel: 'Choose an activity',
    selectActivity: 'Select an activity',
    energySceneLabel: 'A visual estimate of the session energy cost',
  },
};
