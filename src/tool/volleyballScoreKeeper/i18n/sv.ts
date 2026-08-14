import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyboll-resultattavla';
const title = 'Volleyboll Resultattavla: Liveresultat, Rotationer och FIVB Regler';
const description = 'Professionell resultattavla för volleyboll och taktisk rotationsräknare enligt officiella FIVB regler. Håll koll på poäng, set, medurs rotation, timeouter och byten.';

const faqData = [
  {
    question: 'Hur fungerar rotationen i volleyboll efter att man vunnit tillbaka serven?',
    answer: 'När det mottagande laget vinner bollen tar de poäng och får serverätten (side-out). Innan serven slås måste lagets sex spelare rotera ett steg medurs: spelaren på position 2 roterar till position 1 för att serva, position 1 till 6, 6 till 5, 5 till 4, 4 till 3 och 3 till 2.',
  },
  {
    question: 'Hur många poäng krävs för att vinna ett set och matchen i volleyboll?',
    answer: 'Ordinarie set 1 till 4 spelas till 25 poäng med minst 2 poängs marginal. Vid 24-24 fortsätter spelet tills ett lag har två poängs ledning. Det avgörande 5:e setet (tiebreak) spelas till 15 poäng, även det med 2 poängs marginal.',
  },
  {
    question: 'Hur många timeouter och byten är tillåtna per set?',
    answer: 'Enligt FIVB:s officiella regelverk har varje lag rätt till maximalt två 30-sekunders timeouter och upp till sex spelarbyten per set. Antalet nollställs inför varje nytt set.',
  },
  {
    question: 'Vilka är de 6 positionerna på en volleybollplan?',
    answer: 'Positionerna numreras från 1 till 6: Position 1 är Höger Bak (servare), Position 2 är Höger Fram, Position 3 är Center Fram, Position 4 är Vänster Fram, Position 5 är Vänster Bak och Position 6 är Center Bak.',
  },
  {
    question: 'Hur används resultattavlan smidigt på mobil eller surfplatta vid planen?',
    answer: 'Gränssnittet är touch-anpassat. Tryck på de stora siffrorna eller plusknappen för att lägga till poäng. Använd snabbknapparna för 30-sekunders timeouter, byten och sidbyten.',
  },
];

const howToData = [
  { name: 'Välj Matchformat', text: 'Välj bäst av 5 set, bäst av 3 set eller enstaka set.' },
  { name: 'Registrera Poäng', text: 'Tryck på lagkortet för att ge poäng. Servestatus och spelarrotationer uppdateras automatiskt.' },
  { name: 'Hantera Timeouter och Uppställning', text: 'Starta 30-sekunders nedräkning för timeout, bokför byten och se den taktiska planen i realtid.' },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Officiella FIVB Volleybollregler och Poängräkning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inomhusvolleyboll spelas med rally point system, där varje avslutad bollduell ger poäng oavsett vilket lag som servade. Matcher under FIVB-regler kräver noggrann setuppföljning, obligatorisk medurs rotation när serven återerövras samt kontroll över tekniska timeouter.',
    },
    {
      type: 'title',
      text: 'Positionsnummer och Zonindelning på Planen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Planen på 18x9 meter är indelad i sex rotationszoner. Baklinjen består av positionerna 1 (höger bak / servare), 6 (center bak) och 5 (vänster bak). Framlinjen vid nätet består av positionerna 2 (höger fram), 3 (center fram) och 4 (vänster fram). I servögonblicket måste alla spelare hålla sin korrekta inbördes uppställning.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Regler för Avgörande Tiebreak',
      html: '<p>När en match går till ett avgörande set (set 5 i bäst av 5 eller set 3 i bäst av 3) spelas det till <strong>15 poäng</strong>. Lagen byter sida så snart ledande lag når 8 poäng, och även här krävs 2 poängs marginal för setseger.</p>',
    },
    {
      type: 'title',
      text: 'Hantering av Timeouter och Spelarbyten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varje lag har rätt till två 30-sekunders timeouter per set för taktiska genomgångar. Upp till sex byten per set är tillåtna, där en startspelare endast får bytas ut en gång per set och måste återinträda på sin ursprungliga position.',
    },
  ],
  ui: {
    teamA: 'Lag Alfa',
    teamB: 'Lag Beta',
    points: 'Poäng',
    sets: 'Set',
    set: 'Set',
    match: 'Match',
    serving: 'Servar',
    sideout: 'Servbyte',
    rotation: 'Rotation',
    timeout: 'Timeout (30s)',
    timeoutsLeft: 'Timeouter',
    substitutions: 'Byten',
    matchPoint: 'Matchboll',
    setPoint: 'Setboll',
    winner: 'Matchvinnare',
    reset: 'Ny Match',
    resetConfirm: 'Vill du nollställa aktuell matchställning?',
    cancel: 'Avbryt',
    undo: 'Ångra',
    switchSides: 'Byt Sida',
    fullscreen: 'Helskärm',
    exitFullscreen: 'Avsluta Helskärm',
    rotateCourt: 'Rotera',
    substitutePlayer: 'Byte',
    matchModeBestOf3: 'Bäst av 3',
    matchModeBestOf5: 'Bäst av 5',
    matchModeSingleSet: 'Enstaka Set',
    targetPoints25: 'Set till 25 p (+2)',
    targetPoints15: 'Tiebreak till 15 p (+2)',
    pos1RightBack: 'P1 Höger Bak (Serve)',
    pos2RightFront: 'P2 Höger Fram',
    pos3MiddleFront: 'P3 Center Fram',
    pos4LeftFront: 'P4 Vänster Fram',
    pos5LeftBack: 'P5 Vänster Bak',
    pos6MiddleBack: 'P6 Center Bak',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Taktisk Planrotation',
    historyLogTitle: 'Setsammanfattning och Historik',
  },
};
