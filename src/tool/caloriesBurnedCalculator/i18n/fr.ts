import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calculateur-calories-brulees-exercice';
const title = 'Calculateur de calories brûlées par l exercice et MET';
const description = 'Estimez les calories brûlées brutes et nettes lors de l exercice en fonction de l activité, de l intensité, du poids et des valeurs MET du Compendium 2024.';

const faq = [
  {
    question: 'Comment ce calculateur estime-t-il les calories brûlées?',
    answer: 'Il combine la valeur MET de l activité choisie avec le poids corporel et la durée. L estimation utilise la convention MET standard de 3,5 ml d oxygène par kg et par minute au repos.',
  },
  {
    question: 'Quelle est la différence entre calories brutes et nettes?',
    answer: 'Les calories brutes incluent la dépense énergétique totale estimée. Les calories nettes soustraient l énergie que votre corps aurait consommée au repos durant la même période.',
  },
  {
    question: 'Que signifie MET dans un calculateur de calories d exercice?',
    answer: 'Un MET est un multiple du taux métabolique au repos. Une activité de 3 MET consomme environ trois fois plus d énergie que le niveau de référence au repos.',
  },
  {
    question: 'Puis-je utiliser cet outil pour la marche, la course ou le vélo?',
    answer: 'Oui. Choisissez parmi la marche, la course, le cyclisme, la natation, le basket-ball, le football, la danse, la randonnée, la corde à sauter, le circuit training, la musculation et le yoga.',
  },
  {
    question: 'Pourquoi le résultat diffère-t-il de ma montre connectée?',
    answer: 'Les montres utilisent souvent la fréquence cardiaque et des capteurs de mouvement. Ce calculateur se base sur des valeurs MET publiées et le poids corporel.',
  },
  {
    question: 'Les estimations sont-elles adaptées à des décisions médicales?',
    answer: 'Non. Le résultat est une estimation éducative et informative. Il ne mesure pas votre métabolisme exact et ne remplace pas l avis d un professionnel de santé.',
  },
];

const howTo = [
  {
    name: 'Choisir une activité',
    text: 'Sélectionnez l exercice ou le sport qui correspond le mieux à votre séance.',
  },
  {
    name: 'Sélectionner l intensité',
    text: 'Choisissez une intensité légère, modérée ou soutenue selon votre effort global.',
  },
  {
    name: 'Entrer le poids et la durée',
    text: 'Indiquez votre poids et la durée active en minutes.',
  },
  {
    name: 'Consulter les résultats',
    text: 'Lisez les calories brutes et nettes ainsi que le rythme de dépense par minute.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions fréquentes sur les calories brûlées',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Sources et références MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Transformez vos séances d exercice en estimations utiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un calculateur de calories brûlées est plus utile lorsque ses hypothèses sont transparentes. Cet outil vous permet de choisir l activité, de régler l intensité, d indiquer le poids et la durée.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'activités de référence' },
        { value: '3', label: 'niveaux d effort' },
        { value: '2', label: 'vues de calories' },
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi l activité, l intensité, le poids et le temps comptent',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Une même durée, des coûts différents',
          description: 'Trente minutes de yoga doux, de marche rapide ou de course intense ont des exigences énergétiques très différentes.',
        },
        {
          title: 'Une même activité varie selon l effort',
          description: 'Faire du vélo tranquillement diffère fortement d un entraînement cycliste intense. Choisissez l niveau d effort principal.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Calories brutes et nettes répondent à des questions différentes',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Vue', 'Ce qu elle inclut', 'Quand elle aide'],
      rows: [
        ['Calories brutes', 'La dépense énergétique totale estimée pour l activité.', 'Pour comparer l exigence globale de différentes séances.'],
        ['Calories nettes', 'La dépense estimée en soustrayant le niveau de repos.', 'Pour comprendre le coût énergétique supplémentaire apporté par l exercice.'],
        ['Calories par minute', 'Les calories brutes divisées par la durée de la séance.', 'Pour comparer le rythme de dépense selon l intensité.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Considérez le résultat comme un repère',
      badge: 'Contexte important',
      html: '<p>Les valeurs MET sont des références statistiques. La forme physique, l âge, la composition corporelle et la technique peuvent modifier la dépense réelle.</p>',
    },
    {
      type: 'title',
      text: 'Conseils pour des comparaisons fiables',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gardez les mêmes paramètres:</strong> comparez les séances avec la même catégorie d activité.',
        '<strong>Mesurez le temps actif:</strong> ne comptez que les minutes de mouvement effectif.',
        '<strong>Restez constant sur les unités:</strong> basculez entre kg et lbs sans perdre la précision.',
        '<strong>Analysez les tendances:</strong> utilisez les résultats comme une orientation générale.',
      ],
    },
    {
      type: 'tip',
      title: 'Écarts avec votre montre connectée',
      html: 'Les montres combinent souvent la fréquence cardiaque et le mouvement, tandis que ce calculateur s appuie sur des tables MET standardisées.',
    },
  ],
  ui: {
    activityLabel: 'Activité',
    intensityLabel: 'Effort habituel',
    weightLabel: 'Poids corporel',
    durationLabel: 'Durée active',
    unitsLabel: 'Unité de poids',
    metricUnit: 'Métrique',
    imperialUnit: 'Impérial',
    activityWalking: 'Marche',
    activityRunning: 'Course à pied',
    activityCycling: 'Cyclisme',
    activitySwimming: 'Natation',
    activityBasketball: 'Basket-ball',
    activitySoccer: 'Football',
    activityDancing: 'Danse',
    activityHiking: 'Randonnée',
    activityRopeJumping: 'Corde à sauter',
    activityCircuit: 'Circuit training',
    activityStrength: 'Musculation',
    activityYoga: 'Yoga',
    intensityLight: 'Léger',
    intensityModerate: 'Modéré',
    intensityVigorous: 'Soutenu',
    weightHint: 'Indiquez votre poids corporel récent.',
    durationHint: 'Comptabilisez uniquement les minutes de mouvement actif.',
    activityHint: 'Orbite métabolique',
    resultEyebrow: 'Estimation de votre séance',
    resultTitle: 'Énergie en mouvement',
    grossCaloriesLabel: 'Calories brutes',
    netCaloriesLabel: 'Nettes sur le repos',
    perMinuteLabel: 'Rythme',
    metLabel: 'Référence MET',
    intensityBandLabel: 'Niveau d intensité',
    lightBand: 'Effort léger',
    moderateBand: 'Effort modéré',
    vigorousBand: 'Effort soutenu',
    methodNote: 'Utilise MET x 3,5 x poids en kg ÷ 200 x minutes. Les calories brutes incluent le repos; les nettes déduisent 1 MET.',
    estimateNotice: 'Ceci est une estimation éducative et non une prescription médicale ou diététique.',
    resetButton: 'Rétablir l exemple de 30 minutes de marche',
    activityMenuLabel: 'Choisir une activité',
    selectActivity: 'Sélectionner une activité',
    energySceneLabel: 'Estimation visuelle de la dépense énergétique de la séance',
  },
};
