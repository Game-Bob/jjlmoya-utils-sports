import { bibliographyEntries } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { Vo2MaxCalculatorUI } from '../ui';

const slug = 'vo2-max-calculator';
const title = 'VO2 Max Calculator for Running Walking and Beep Tests';
const description = 'Estimate VO2 max from a 12 minute run, 1.5 mile run, Rockport one mile walk, or 20 meter beep test and compare the estimate with age and sex references.';

const faqData = [
  {
    question: 'How can I calculate VO2 max from running?',
    answer: 'Choose the Cooper 12 minute run and enter the distance covered, or choose the 1.5 mile run and enter the completion time. Both produce a field estimate in milliliters of oxygen per kilogram per minute.',
  },
  {
    question: 'How do I use a 12 minute run or Cooper VO2 max calculator?',
    answer: 'Run as far as possible for 12 minutes on a measured course, then enter the distance in meters or miles. Use the same course, timing method, and warm up when repeating the test.',
  },
  {
    question: 'Can I calculate VO2 max from walking or the Rockport test?',
    answer: 'Yes. Select Rockport one mile walk and enter the walk time, body weight, age, reference sex, and heart rate recorded at the end of the walk. Do not use resting heart rate for this protocol.',
  },
  {
    question: 'Does this work as a VO2 max calculator for a beep test?',
    answer: 'Yes. Select the 20 meter shuttle test and enter the last fully completed stage from the audio beep protocol. The result is an estimate and depends on the exact shuttle distance, pacing, and stage convention used.',
  },
  {
    question: 'Can I compare VO2 max by age, sex, weight, or female reference?',
    answer: 'Enter age and select the reference sex to place the estimate against age and sex reference values. Weight is used by the Rockport equation. The comparison is population context, not a health classification.',
  },
  {
    question: 'Can I use this for cycling, rowing, Garmin, Apple Watch, or resting heart rate?',
    answer: 'Not in this first version. This tool covers running, walking, and the 20 meter beep test. Cycling, rowing, wearable estimates, and resting heart rate formulas need different inputs and validation.',
  },
];

const howToData = [
  {
    name: 'Choose the matching test',
    text: 'Select the running, walking, or 20 meter beep test protocol that matches the result you recorded.',
  },
  {
    name: 'Enter the recorded result',
    text: 'Enter distance, completion time, final shuttle stage, body weight, and end test heart rate only when the selected protocol asks for them.',
  },
  {
    name: 'Add age and sex context',
    text: 'Enter age and select the reference sex so the result can be compared with FRIEND reference values for adults aged 20 to 79.',
  },
  {
    name: 'Repeat the same protocol',
    text: 'Use the same test protocol, course, units, and measurement procedure before comparing a future estimate.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
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
  step: howToData.map((step, index) => ({
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

export const content: ToolLocaleContent<Vo2MaxCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions about VO2 max calculators',
  faq: faqData,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Three sources behind the estimates',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'The VO2 max test you already have is the right place to start',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A VO2 max number is only useful when you know where it came from. A 12 minute run, a one mile walk, and a beep test are not interchangeable observations. This calculator keeps the test visible, uses the matching estimate, and gives you a reference point without pretending that a field test is a laboratory measurement.',
    },
    {
      type: 'summary',
      title: 'What can I use this calculator for?',
      items: [
        'A running result from a Cooper 12 minute test or a 1.5 mile run.',
        'A walking result from the Rockport one mile test.',
        'A last completed stage from a 20 meter beep test.',
        'An age and sex comparison for adults from 20 to 79.',
        'A repeatable baseline for tracking your own change over time.',
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'field protocols' },
        { value: '20 to 79', label: 'reference ages' },
        { value: 'ml/kg/min', label: 'shared output' },
      ],
    },
    {
      type: 'title',
      text: 'Start with the evidence in your notebook, not with a formula',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'You measured distance',
          description: 'Choose the Cooper 12 minute run when your note says how far you travelled in twelve minutes. Keep the course measured and record the same unit each time.',
        },
        {
          title: 'You measured completion time',
          description: 'Choose the 1.5 mile run when the recorded fact is how long the distance took. A 5K time or a watch estimate belongs to a different calculator.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Why the Rockport walking test asks more of you',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Read the Rockport inputs as a small story',
      badge: 'Worth noting',
      html: '<p>The walk is submaximal, so the equation needs context around how hard that mile was for you.</p><ul><li><strong>Time:</strong> how quickly you completed the one mile walk.</li><li><strong>End test heart rate:</strong> the pulse recorded at the finish, not your resting pulse.</li><li><strong>Weight, age, and sex:</strong> context used by the published equation and reference comparison.</li></ul>',
    },
    {
      type: 'title',
      text: 'The same number can tell a different story by age',
      level: 2,
    },
    {
      type: 'table',
      headers: ['What you want to know', 'What the chart can tell you', 'What it cannot tell you'],
      rows: [
        ['Where this estimate sits', 'A band within an age and sex reference group.', 'Whether you are healthy or medically fit.'],
        ['Whether training changed something', 'A clearer trend when the same test is repeated.', 'A fair comparison if the protocol changed.'],
        ['Whether you are ready for an event', 'A piece of fitness context.', 'A race prediction or clearance to exercise.'],
      ],
    },
    {
      type: 'title',
      text: 'For a beep test, the stage is only meaningful with the course',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A last completed stage is not a universal fitness currency. The 20 meter distance, audio track, turning technique, surface, and stage convention all matter. If you are searching for a beep test VO2 max calculator, use the same protocol next time so the movement in your result means something.',
    },
    {
      type: 'list',
      items: [
        '<strong>Repeat the method:</strong> compare a Cooper run with another Cooper run, not with a Rockport walk.',
        '<strong>Keep the conditions:</strong> note surface, weather, warm up, timing, and heart rate procedure.',
        '<strong>Watch the trend:</strong> one estimate can be noisy; several comparable tests tell a better story.',
        '<strong>Use the band gently:</strong> it is reference context, not a verdict about your body.',
      ],
    },
    {
      type: 'tip',
      title: 'If your search was about cycling, rowing, or a watch',
      html: 'That is a different question, not a missing input. Cycling and rowing use sport specific performance data, while Garmin and Apple Watch estimates use device models. A resting heart rate or a 5K time should not be quietly pushed through one of these field test equations.',
    },
  ],
  ui: {
    methodCooper12: 'Cooper 12 minute run',
    methodCooper15: 'Cooper 1.5 mile run',
    methodRockport: 'Rockport one mile walk',
    methodShuttle: '20 meter shuttle test',
    metricUnit: 'Metric',
    imperialUnit: 'Imperial',
    methodLabel: 'Field test',
    performanceLegend: 'Record the performance',
    distanceLabel: 'Distance covered in 12 minutes',
    distanceHint: 'Run as far as possible in 12 minutes on a measured course.',
    timeLabel: 'Test time',
    minutesLabel: 'Minutes',
    secondsLabel: 'Seconds',
    ageLabel: 'Age in years',
    sexLabel: 'Reference sex',
    maleLabel: 'Male',
    femaleLabel: 'Female',
    weightLabel: 'Body weight',
    heartRateLabel: 'Heart rate at test end',
    stageLabel: 'Last completed stage',
    stageHint: 'Enter the last fully completed stage from 1 to 21.',
    resetButton: 'Restore example',
    resultTitle: 'Estimated VO2 max',
    estimateUnit: 'ml oxygen per kg per minute',
    percentileLabel: 'Reference band',
    referenceTitle: 'Age and sex reference',
    referenceDescription: 'The chart is a population reference for adults aged 20 to 79, not a medical classification.',
    bandBelow10: 'Below 10th',
    band10to25: '10th to 25th',
    band25to50: '25th to 50th',
    band50to75: '50th to 75th',
    band75to90: '75th to 90th',
    bandAbove90: 'Above 90th',
    methodNoteCooper12: 'Cooper 12 minute run estimate from distance covered.',
    methodNoteCooper15: 'Cooper 1.5 mile run estimate from completion time.',
    methodNoteRockport: 'Rockport estimate from the one mile walk protocol, validated mainly in healthy adults aged 30 to 69.',
    methodNoteShuttle: '20 meter shuttle estimate from final stage speed.',
    invalidNotice: 'Complete the fields for this test to see an estimate.',
    safetyNotice: 'Field tests are estimates, not clinical measurements. Stop if you feel unwell and seek professional guidance when needed.',
  },
};
