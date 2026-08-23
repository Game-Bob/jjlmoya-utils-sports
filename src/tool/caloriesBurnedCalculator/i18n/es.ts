import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calculadora-calorias-quemadas-ejercicio';
const title = 'Calculadora de calorías quemadas por ejercicio y MET';
const description = 'Estima las calorías brutas y netas quemadas durante el ejercicio según el tipo de actividad, la intensidad, el peso corporal, la duración y los valores MET del Compendio 2024.';

const faq = [
  {
    question: '¿Cómo estima las calorías del ejercicio esta calculadora?',
    answer: 'Combina el valor MET de la actividad seleccionada con el peso corporal y la duración. La estimación utiliza la convención MET estándar de 3,5 mililitros de oxígeno por kilogramo por minuto en reposo, ofreciendo una referencia comparativa útil.',
  },
  {
    question: '¿Cuál es la diferencia entre calorías brutas y netas quemadas?',
    answer: 'Las calorías brutas incluyen todo el gasto energético estimado durante la actividad. Las calorías netas restan la energía que tu cuerpo habría consumido estando en reposo durante el mismo tiempo, siendo un valor más útil para comparar sesiones de ejercicio.',
  },
  {
    question: '¿Qué significa MET en una calculadora de calorías de ejercicio?',
    answer: 'Un MET es un múltiplo de la tasa metabólica en reposo. Una actividad de 3 MET tiene un gasto energético unas tres veces superior a la referencia estándar en reposo, ajustándose según el peso corporal y la duración.',
  },
  {
    question: '¿Puedo usar esta herramienta para caminar, correr, nadar o hacer deportes?',
    answer: 'Sí. Elige entre caminar, correr, ciclismo, natación, baloncesto, fútbol, baile, senderismo, saltar a la comba, entrenamiento en circuito, entrenamiento de fuerza o yoga, y selecciona la intensidad deseada.',
  },
  {
    question: '¿Por qué el resultado es distinto al de un reloj inteligente o máquina de gimnasio?',
    answer: 'Cada dispositivo puede usar sensores de frecuencia cardíaca, ritmo, movimiento y algoritmos propietarios. Esta calculadora utiliza valores poblacionales publicados e información del peso corporal, por lo que es normal que existan variaciones.',
  },
  {
    question: '¿Son seguras estas estimaciones para tomar decisiones médicas o de dieta?',
    answer: 'No. El resultado es una estimación orientativa y educativa. No mide tu metabolismo exacto ni sustituye el consejo de un profesional de la salud o la nutrición.',
  },
];

const howTo = [
  {
    name: 'Elige una actividad',
    text: 'Selecciona el ejercicio o deporte que mejor se adapte a lo que has practicado para cargar su referencia MET.',
  },
  {
    name: 'Selecciona el nivel de esfuerzo',
    text: 'Elige intensidad ligera, moderada o vigorosa según el ritmo general sostenido en la sesión.',
  },
  {
    name: 'Introduce peso corporal y duración',
    text: 'Ingresa tu peso y la duración en minutos. Puedes alternar entre kilogramos y libras según lo prefieras.',
  },
  {
    name: 'Consulta las calorías brutas y netas',
    text: 'Revisa las calorías brutas para ver el gasto total de la sesión y las netas para ver el gasto adicional por encima del reposo.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas frecuentes sobre calorías quemadas',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Fuentes y referencias MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Convierte tus sesiones de ejercicio en estimaciones útiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una calculadora de calorías quemadas es más útil cuando muestra claramente sus premisas. Esta herramienta te permite elegir el ejercicio, ajustar la intensidad, indicar peso y duración, y obtener tanto el gasto calórico total como el diferencial sobre el reposo.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'actividades de referencia' },
        { value: '3', label: 'niveles de esfuerzo' },
        { value: '2', label: 'vistas de calorías' },
      ],
    },
    {
      type: 'title',
      text: 'Por qué importan la actividad, la intensidad, el peso y el tiempo',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'El mismo tiempo tiene costes distintos',
          description: 'Treinta minutos de yoga suave, caminata a buen ritmo o carrera intensa tienen exigencias energéticas completamente diferentes. La actividad y la intensidad alteran el valor MET básico.',
        },
        {
          title: 'La misma actividad varía según el esfuerzo',
          description: 'Un paseo en bicicleta no quema lo mismo que un entrenamiento ciclista vigoroso. Elige el nivel de esfuerzo que represente la mayor parte de tu sesión.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Calorías brutas y netas responden a preguntas diferentes',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Vista', 'Qué incluye', 'Cuándo ayuda'],
      rows: [
        ['Calorías brutas', 'El gasto energético total estimado para la actividad seleccionada.', 'Para evaluar la exigencia global de distintas actividades.'],
        ['Calorías netas', 'El gasto estimado restando el consumo energético que tendrías en reposo.', 'Para entender el coste calórico extra generado específicamente por el ejercicio.'],
        ['Calorías por minuto', 'La estimación de calorías brutas dividida entre los minutos de la sesión.', 'Para comparar la tasa de gasto energético según la intensidad.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Utiliza el resultado como línea de referencia',
      badge: 'Contexto importante',
      html: '<p>Los valores MET son referencias estadísticas poblacionales. La condición física, la edad, la composición corporal, la técnica y el terreno pueden modificar el gasto calórico real respecto a las tablas.</p>',
    },
    {
      type: 'title',
      text: 'Cómo obtener comparaciones más fiables',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mantén la misma descripción:</strong> compara sesiones usando la misma actividad y nivel de esfuerzo.',
        '<strong>Mide solo el tiempo activo:</strong> incluye únicamente los minutos en los que estuviste en movimiento continuo.',
        '<strong>Sé constante con las unidades:</strong> cambia entre kilos y libras según tu preferencia sin alterar la precisión.',
        '<strong>Analiza tendencias:</strong> evalúa el progreso global en lugar de tomar los números como cifras exactas e inalterables.',
      ],
    },
    {
      type: 'tip',
      title: 'Si los datos no coinciden con tu reloj de actividad',
      html: 'No significa que un dato sea erróneo. Los relojes combinan pulsaciones y movimiento, mientras que esta herramienta utiliza tablas MET estandarizadas y peso corporal.',
    },
  ],
  ui: {
    activityLabel: 'Actividad',
    intensityLabel: 'Esfuerzo habitual',
    weightLabel: 'Peso corporal',
    durationLabel: 'Duración activa',
    unitsLabel: 'Unidad de peso',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    activityWalking: 'Caminar',
    activityRunning: 'Correr',
    activityCycling: 'Ciclismo',
    activitySwimming: 'Natación',
    activityBasketball: 'Baloncesto',
    activitySoccer: 'Fútbol',
    activityDancing: 'Baile',
    activityHiking: 'Senderismo',
    activityRopeJumping: 'Saltar a la comba',
    activityCircuit: 'Entrenamiento en circuito',
    activityStrength: 'Entrenamiento de fuerza',
    activityYoga: 'Yoga',
    intensityLight: 'Ligero',
    intensityModerate: 'Moderado',
    intensityVigorous: 'Vigoroso',
    weightHint: 'Indica tu peso corporal reciente. Es un dato de referencia para el cálculo.',
    durationHint: 'Cuenta únicamente los minutos de movimiento activo.',
    activityHint: 'Órbita metabólica',
    resultEyebrow: 'Estimación de la sesión',
    resultTitle: 'Energía en movimiento',
    grossCaloriesLabel: 'Calorías brutas',
    netCaloriesLabel: 'Netas sobre reposo',
    perMinuteLabel: 'Ritmo',
    metLabel: 'Referencia MET',
    intensityBandLabel: 'Nivel de intensidad',
    lightBand: 'Esfuerzo ligero',
    moderateBand: 'Esfuerzo moderado',
    vigorousBand: 'Esfuerzo vigoroso',
    methodNote: 'Usa la fórmula MET x 3,5 x peso corporal en kg ÷ 200 x minutos. Las calorías brutas incluyen el reposo; las netas descuentan 1 MET.',
    estimateNotice: 'Es una estimación educativa, no una medición clínica ni una prescripción dietética o médica.',
    resetButton: 'Restablecer ejemplo de 30 minutos caminando',
    activityMenuLabel: 'Elige una actividad',
    selectActivity: 'Selecciona una actividad',
    energySceneLabel: 'Estimación visual del gasto energético de la sesión',
  },
};
