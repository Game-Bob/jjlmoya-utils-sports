import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleybal-scorebord';
const title = 'Volleybal Scorebord: Live Puntentelling, Rotaties en FIVB Regels';
const description = 'Professioneel volleybal scorebord en tactische rotatie tracker volgens officiële FIVB richtlijnen. Beheer punten, sets, kloksgewijze rotaties, time-outs en wissels.';

const faqData = [
  {
    question: 'Hoe werkt de spelersrotatie bij volleybal na het winnen van een side-out?',
    answer: 'Wanneer het ontvangende team de rally wint, scoort het een punt en verdient het het serveerrecht (side-out). Voor de opslag moeten alle zes veldspelers één positie met de klok mee doordraaien: speler op positie 2 schuift naar positie 1 om te serveren, positie 1 naar 6, 6 naar 5, 5 naar 4, 4 naar 3 en 3 naar 2.',
  },
  {
    question: 'Hoeveel punten zijn nodig om een set en de volleybalwedstrijd te winnen?',
    answer: 'De reguliere sets 1 tot en met 4 worden gespeeld tot 25 punten met minimaal 2 punten verschil. Bij een stand van 24-24 gaat het spel door totdat één team twee punten voorsprong heeft. De beslissende 5e set (tie-break) wordt gespeeld tot 15 punten, eveneens met 2 punten verschil.',
  },
  {
    question: 'Hoeveel time-outs en wissels zijn er per set toegestaan?',
    answer: 'Volgens de officiële FIVB regels heeft elk team recht op maximaal twee time-outs van 30 seconden en tot zes spelerswissels per set. Bij aanvang van elke nieuwe set worden time-outs en wissels gereset.',
  },
  {
    question: 'Wat zijn de 6 vaste posities op een volleybalveld?',
    answer: 'De posities zijn genummerd van 1 tot en met 6: Positie 1 is Rechtsachter (de serveerder), Positie 2 is Rechtsvoor, Positie 3 is Middenvoor, Positie 4 is Linksvoor, Positie 5 is Linksachter en Positie 6 is Middenachter.',
  },
  {
    question: 'Hoe gebruik je dit scorebord op smartphone of tablet langs het veld?',
    answer: 'De interface is volledig afgestemd op touchscreens. Tik op de grote scorecijfers of de plusknop om punten toe te kennen. Gebruik de knoppen voor 30-seconden time-outs, spelerswissels en het wisselen van speelhelft.',
  },
];

const howToData = [
  { name: 'Wedstrijdformaat Kiezen', text: 'Selecteer Best of 5 sets, Best of 3 sets of een enkele set.' },
  { name: 'Punten Toekennen', text: 'Tik op de teamkaart om punten toe te voegen. Side-outs en rotaties worden direct automatisch berekend.' },
  { name: 'Time-outs en Wissels Beheren', text: 'Start de 30-seconden timer voor time-outs, registreer wissels en controleer de veldopstelling in realtime.' },
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Officiële FIVB Volleybal Spelregels en Puntentelling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zaalvolleybal maakt gebruik van het rally-point-systeem, waarbij elke voltooide rally een punt oplevert, ongeacht welk team heeft geserveerd. Officiële wedstrijden onder FIVB-toezicht vereisen een nauwkeurige setregistratie, verplichte rotaties met de klok mee na het terugwinnen van de opslag en naleving van technische time-outs.',
    },
    {
      type: 'title',
      text: 'Positienummers en Tactische Veldzones Uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het volleybalveld van 18x9 meter is ingedeeld in zes rotatiezones. De achterste verdedigingslijn bestaat uit positie 1 (rechtsachter / serveerder), 6 (middenachter) en 5 (linksachter). De aanvalslijn aan het net wordt gevormd door positie 2 (rechtsvoor), 3 (middenvoor) en 4 (linksvoor). Op het moment van opslaan moeten de spelers hun onderlinge basisopstelling op het veld aanhouden.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Beslissende Tiebreak Set Regels',
      html: '<p>Wanneer een wedstrijd aankomt op de beslissende set (de 5e set bij Best of 5 of de 3e set bij Best of 3), wordt het doel verlaagd naar <strong>15 punten</strong>. De teams wisselen van speelhelft zodra het leidende team 8 punten bereikt, waarbij nog steeds 2 punten verschil vereist zijn voor de overwinning.</p>',
    },
    {
      type: 'title',
      text: 'Regels voor Time-outs en Spelerswissels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elk team mag per set twee time-outs van 30 seconden aanvragen om de strategie af te stemmen en het ritme van de tegenstander te breken. Maximaal zes spelerswissels per set zijn toegestaan, waarbij een basisspeler slechts eenmaal per set gewisseld mag worden en uitsluitend mag terugkeren op zijn oorspronkelijke positie.',
    },
  ],
  ui: {
    teamA: 'Team Alpha',
    teamB: 'Team Beta',
    points: 'Punten',
    sets: 'Sets',
    set: 'Set',
    match: 'Wedstrijd',
    serving: 'Aan Opslag',
    sideout: 'Opslagterugwinning',
    rotation: 'Rotatie',
    timeout: 'Time-out (30s)',
    timeoutsLeft: 'Time-outs',
    substitutions: 'Wissels',
    matchPoint: 'Matchpoint',
    setPoint: 'Setpoint',
    winner: 'Wedstrijdwinnaar',
    reset: 'Nieuwe Wedstrijd',
    resetConfirm: 'Huidige stand wissen en opnieuw beginnen?',
    cancel: 'Annuleren',
    undo: 'Ongedaan Maken',
    switchSides: 'Veld Wisselen',
    fullscreen: 'Volledig Scherm',
    exitFullscreen: 'Volledig Scherm Sluiten',
    rotateCourt: 'Doordraaien',
    substitutePlayer: 'Wissel',
    matchModeBestOf3: 'Best of 3',
    matchModeBestOf5: 'Best of 5',
    matchModeSingleSet: 'Enkele Set',
    targetPoints25: 'Set tot 25 pnt (+2)',
    targetPoints15: 'Tie-break tot 15 pnt (+2)',
    pos1RightBack: 'P1 Rechtsachter (Opslag)',
    pos2RightFront: 'P2 Rechtsvoor',
    pos3MiddleFront: 'P3 Middenvoor',
    pos4LeftFront: 'P4 Linksvoor',
    pos5LeftBack: 'P5 Linksachter',
    pos6MiddleBack: 'P6 Middenachter',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Tactische Veldrotatie',
    historyLogTitle: 'Setoverzicht en Geschiedenis',
  },
};
