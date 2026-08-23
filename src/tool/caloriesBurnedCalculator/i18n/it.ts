import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calcolatore-calorie-bruciate-esercizio';
const title = 'Calcolatore Calorie Bruciate per Esercizio e MET';
const description = 'Stima le calorie bruciate lorde e nette dell esercizio in base ad attività, intensità, peso corporeo, durata e valori MET del Compendio 2024.';

const faq = [
  {
    question: 'Come stima le calorie dell esercizio questo calcolatore?',
    answer: 'Combina il valore MET dell attività selezionata con il peso corporeo e la durata. La stima utilizza la convenzione MET standard di 3,5 ml di ossigeno per kg al minuto a riposo.',
  },
  {
    question: 'Qual è la differenza tra calorie lorde e nette bruciate?',
    answer: 'Le calorie lorde includono l intero dispendio energetico stimato dell attività. Le calorie nette sottraggono l energia che il corpo avrebbe consumato a riposo nello stesso tempo.',
  },
  {
    question: 'Cosa significa MET in un calcolatore di calorie da esercizio?',
    answer: 'Un MET è un multiplo del tasso metabolico a riposo. Un attività da 3 MET ha un consumo energetico circa tre volte superiore alla linea di riferimento a riposo.',
  },
  {
    question: 'Posso usare questo strumento per camminata, corsa, ciclismo o sport?',
    answer: 'Sì. Scegli tra camminata, corsa, ciclismo, nuoto, pallacanestro, calcio, danza, trekking, salto con la corda, allenamento a circuito, allenamento di forza e yoga.',
  },
  {
    question: 'Perché il risultato è diverso da quello di uno smartwatch?',
    answer: 'I dispositivi indossabili usano spesso la frequenza cardiaca e sensori di movimento. Questo calcolatore si basa su tabelle MET pubblicate e sul peso corporeo.',
  },
  {
    question: 'Queste stime sono adatte per decisioni mediche o nutrizionali?',
    answer: 'No. Il risultato è una stima a scopo educativo e informativo. Non misura il metabolismo esatto e non sostituisce il parere di un medico o nutrizionista.',
  },
];

const howTo = [
  {
    name: 'Scegli un attività',
    text: 'Seleziona l esercizio o lo sport più vicino a quello praticato per caricare il riferimento MET.',
  },
  {
    name: 'Scegli il livello di sforzo',
    text: 'Seleziona un intensità leggera, moderata o vigorosa in base allo sforzo sostenuto.',
  },
  {
    name: 'Inserisci peso e durata',
    text: 'Inserisci il peso corporeo e la durata della sessione in minuti.',
  },
  {
    name: 'Leggi calorie lorde e nette',
    text: 'Consulta le calorie lorde per il consumo totale e le nette per l incremento rispetto al riposo.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti sulle calorie bruciate',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Fonti e riferimenti MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Trasforma le sessioni di allenamento in stime utili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un calcolatore di calorie bruciate è più utile quando rende trasparenti i propri presupposti. Questo strumento consente di selezionare l attività, regolare l intensità, inserire peso e durata.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'attività di riferimento' },
        { value: '3', label: 'livelli di sforzo' },
        { value: '2', label: 'viste di calorie' },
      ],
    },
    {
      type: 'title',
      text: 'Perché attività, intensità, peso e tempo sono fondamentali',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lo stesso tempo ha consumi differenti',
          description: 'Trenta minuti di yoga leggero, camminata veloce o corsa intensa hanno richieste energetiche completamente diverse.',
        },
        {
          title: 'La stessa attività varia con lo sforzo',
          description: 'Una pedalata rilassata è diversa da un allenamento ciclistico intenso. Scegli l intensità che descrive la maggior parte della sessione.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Calorie lorde e nette rispondono a domande diverse',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Vista', 'Cosa include', 'Quando aiuta'],
      rows: [
        ['Calorie lorde', 'Il dispendio energetico totale stimato per l attività.', 'Per valutare la richiesta complessiva di sessioni diverse.'],
        ['Calorie nette', 'Il consumo stimato sottraendo il livello di riposo.', 'Per comprendere il consumo calorico extra generato dall esercizio.'],
        ['Calorie al minuto', 'Le calorie lorde divise per la durata della sessione.', 'Per confrontare il ritmo di consumo in base all intensità.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Considera il risultato come un punto di riferimento',
      badge: 'Contesto importante',
      html: '<p>I valori MET sono riferimenti statistici di popolazione. Forma fisica, età, composizione corporea e tecnica possono variare il consumo reale.</p>',
    },
    {
      type: 'title',
      text: 'Consigli per confronti più affidabili',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mantieni la stessa descrizione:</strong> confronta le sessioni usando la stessa categoria di attività.',
        '<strong>Misura solo il tempo attivo:</strong> includi solo i minuti di effettivo movimento.',
        '<strong>Sii costante con le unità:</strong> passa da kg a lbs senza compromettere la precisione.',
        '<strong>Analizza le tendenze:</strong> usa i valori come guida generale piuttosto che come numeri assoluti.',
      ],
    },
    {
      type: 'tip',
      title: 'Se i dati non coincidono con lo smartwatch',
      html: 'Gli smartwatch combinano la frequenza cardiaca e il movimento, mentre questo strumento usa tabelle MET standardizzate e peso corporeo.',
    },
  ],
  ui: {
    activityLabel: 'Attività',
    intensityLabel: 'Sforzo abituale',
    weightLabel: 'Peso corporeo',
    durationLabel: 'Durata attiva',
    unitsLabel: 'Unità di peso',
    metricUnit: 'Metrico',
    imperialUnit: 'Imperiale',
    activityWalking: 'Camminata',
    activityRunning: 'Corsa',
    activityCycling: 'Ciclismo',
    activitySwimming: 'Nuoto',
    activityBasketball: 'Pallacanestro',
    activitySoccer: 'Calcio',
    activityDancing: 'Danza',
    activityHiking: 'Trekking',
    activityRopeJumping: 'Salto con la corda',
    activityCircuit: 'Allenamento a circuito',
    activityStrength: 'Allenamento di forza',
    activityYoga: 'Yoga',
    intensityLight: 'Leggero',
    intensityModerate: 'Moderato',
    intensityVigorous: 'Vigoroso',
    weightHint: 'Inserisci il tuo peso corporeo recente.',
    durationHint: 'Conta solo i minuti di movimento attivo.',
    activityHint: 'Orbita metabolica',
    resultEyebrow: 'Stima della tua sessione',
    resultTitle: 'Energia in movimento',
    grossCaloriesLabel: 'Calorie lorde',
    netCaloriesLabel: 'Nette oltre il riposo',
    perMinuteLabel: 'Ritmo',
    metLabel: 'Riferimento MET',
    intensityBandLabel: 'Livello di intensità',
    lightBand: 'Sforzo leggero',
    moderateBand: 'Sforzo moderato',
    vigorousBand: 'Sforzo vigoroso',
    methodNote: 'Usa la formula MET x 3,5 x peso in kg ÷ 200 x minuti. Le calorie lorde includono il riposo; le nette sottraggono 1 MET.',
    estimateNotice: 'Questa è una stima educativa e non una prescrizione medica o nutrizionale.',
    resetButton: 'Ripristina l esempio di 30 minuti di camminata',
    activityMenuLabel: 'Scegli un attività',
    selectActivity: 'Seleziona un attività',
    energySceneLabel: 'Stima visiva del dispendio energetico della sessione',
  },
};
