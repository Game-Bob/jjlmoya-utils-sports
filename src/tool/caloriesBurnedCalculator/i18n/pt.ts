import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calculadora-calorias-queimadas-exercicio';
const title = 'Calculadora de Calorias Queimadas por Exercício e MET';
const description = 'Estime as calorias brutas e líquidas queimadas no exercício com base em atividade, intensidade, peso corporal, duração e valores MET do Compêndio 2024.';

const faq = [
  {
    question: 'Como esta calculadora estima as calorias do exercício?',
    answer: 'Combina o valor MET da atividade selecionada com o peso corporal e a duração. A estimativa utiliza a convenção MET padrão de 3,5 ml de oxigênio por kg por minuto em repouso.',
  },
  {
    question: 'Qual é a diferença entre calorias brutas e líquidas queimadas?',
    answer: 'As calorias brutas incluem todo o gasto energético estimado para a atividade. As calorias líquidas subtraem a energia que o seu corpo gastaria em repouso no mesmo período.',
  },
  {
    question: 'O que significa MET em uma calculadora de calorias de exercício?',
    answer: 'Um MET é um múltiplo da taxa metabólica em repouso. Uma atividade de 3 MET tem um gasto energético cerca de três vezes superior à linha de referência em repouso.',
  },
  {
    question: 'Posso usar esta ferramenta para caminhada, corrida, ciclismo ou esportes?',
    answer: 'Sim. Escolha entre caminhada, corrida, ciclismo, natação, basquete, futebol, dança, trilha, pular corda, treino em circuito, musculação e yoga.',
  },
  {
    question: 'Por que o resultado é diferente do meu relógio inteligente?',
    answer: 'Os dispositivos vestíveis costumam usar sensores de frequência cardíaca e movimento. Esta calculadora baseia-se em tabelas MET publicadas e no peso corporal.',
  },
  {
    question: 'Essas estimativas são seguras para decisões médicas ou dietéticas?',
    answer: 'Não. O resultado é uma estimativa educativa e informativa. Não mede o seu metabolismo exato nem substitui a orientação de um profissional de saúde.',
  },
];

const howTo = [
  {
    name: 'Escolha uma atividade',
    text: 'Selecione o exercício ou esporte mais próximo do praticado para carregar a referência MET.',
  },
  {
    name: 'Escolha o nível de esforço',
    text: 'Selecione intensidade leve, moderada ou vigorosa de acordo com o esforço sustentado.',
  },
  {
    name: 'Insira peso e duração',
    text: 'Informe o peso corporal e a duração da sessão em minutos.',
  },
  {
    name: 'Consulte calorias brutas e líquidas',
    text: 'Veja as calorias brutas para o consumo total e as líquidas para o gasto adicional acima do repouso.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas frequentes sobre calorias queimadas',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Fontes e referências MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Transforme sessões de exercício em estimativas úteis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma calculadora de calorias queimadas é mais útil quando torna as suas premissas transparentes. Esta ferramenta permite selecionar a atividade, ajustar a intensidade, inserir peso e duração.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'atividades de referência' },
        { value: '3', label: 'níveis de esforço' },
        { value: '2', label: 'visões de calorias' },
      ],
    },
    {
      type: 'title',
      text: 'Por que atividade, intensidade, peso e tempo são fundamentais',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'O mesmo tempo exige consumos diferentes',
          description: 'Trinta minutos de yoga leve, caminhada rápida ou corrida intensa têm exigências energéticas completamente distintas.',
        },
        {
          title: 'A mesma atividade varia conforme o esforço',
          description: 'Pedalar suavemente é diferente de um treino ciclístico intenso. Escolha a intensidade que representa a maior parte da sessão.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Calorias brutas e líquidas respondem a perguntas diferentes',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Visão', 'O que inclui', 'Quando ajuda'],
      rows: [
        ['Calorias brutas', 'O gasto energético total estimado para a atividade.', 'Para avaliar a exigência geral de sessões diferentes.'],
        ['Calorias líquidas', 'O gasto estimado subtraindo a linha de repouso.', 'Para entender o consumo calórico extra gerado especificamente pelo exercício.'],
        ['Calorias por minuto', 'As calorias brutas divididas pela duração da sessão.', 'Para comparar a taxa de gasto energético conforme a intensidade.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Considere o resultado como uma linha de referência',
      badge: 'Contexto importante',
      html: '<p>Os valores MET são referências estatísticas de população. Condicionamento físico, idade, composição corporal e técnica podem alterar o gasto real.</p>',
    },
    {
      type: 'title',
      text: 'Dicas para comparações mais confiáveis',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mantenha a mesma descrição:</strong> compare sessões usando a mesma categoria de atividade.',
        '<strong>Meça apenas o tempo ativo:</strong> inclua somente os minutos em movimento efetivo.',
        '<strong>Seja constante com as unidades:</strong> alterne entre kg e lbs sem comprometer a precisão.',
        '<strong>Analise tendências:</strong> use os resultados como orientação geral em vez de números absolutos.',
      ],
    },
    {
      type: 'tip',
      title: 'Se os dados não coincidirem com o relógio inteligente',
      html: 'Relógios inteligentes combinam frequência cardíaca e movimento, enquanto esta ferramenta usa tabelas MET padronizadas e peso corporal.',
    },
  ],
  ui: {
    activityLabel: 'Atividade',
    intensityLabel: 'Esforço habitual',
    weightLabel: 'Peso corporal',
    durationLabel: 'Duração ativa',
    unitsLabel: 'Unidade de peso',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    activityWalking: 'Caminhada',
    activityRunning: 'Corrida',
    activityCycling: 'Ciclismo',
    activitySwimming: 'Natação',
    activityBasketball: 'Basquete',
    activitySoccer: 'Futebol',
    activityDancing: 'Dança',
    activityHiking: 'Trilha',
    activityRopeJumping: 'Pular corda',
    activityCircuit: 'Treino em circuito',
    activityStrength: 'Musculação',
    activityYoga: 'Yoga',
    intensityLight: 'Leve',
    intensityModerate: 'Moderado',
    intensityVigorous: 'Vigoroso',
    weightHint: 'Informe seu peso corporal recente.',
    durationHint: 'Conte apenas os minutos de movimento ativo.',
    activityHint: 'Órbita metabólica',
    resultEyebrow: 'Estimativa da sua sessão',
    resultTitle: 'Energia em movimento',
    grossCaloriesLabel: 'Calorias brutas',
    netCaloriesLabel: 'Líquidas acima do repouso',
    perMinuteLabel: 'Ritmo',
    metLabel: 'Referência MET',
    intensityBandLabel: 'Nível de intensidade',
    lightBand: 'Esforço leve',
    moderateBand: 'Esforço moderado',
    vigorousBand: 'Esforço vigoroso',
    methodNote: 'Usa a fórmula MET x 3,5 x peso em kg ÷ 200 x minutos. As calorias brutas incluem o repouso; as líquidas deduzem 1 MET.',
    estimateNotice: 'Esta é uma estimativa educativa e não uma prescrição médica ou nutricional.',
    resetButton: 'Restaurar exemplo de 30 minutos de caminhada',
    activityMenuLabel: 'Escolher uma atividade',
    selectActivity: 'Selecionar uma atividade',
    energySceneLabel: 'Estimativa visual do gasto energético da sessão',
  },
};
