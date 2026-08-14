import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyball-spielstand';
const title = 'Volleyball Spielstand: Live Punkte, Rotationen und FIVB Zähler';
const description = 'Professionelle Volleyball Anzeigetafel und taktischer Rotationszähler nach offiziellen FIVB Regeln. Punkte, Sätze, 6er Rotationen, Auszeiten und Spielerwechsel live erfassen.';

const faqData = [
  {
    question: 'Wie funktioniert die Volleyball Rotation nach einem Aufschlagwechsel?',
    answer: 'Wenn die annehmende Mannschaft den Ballwechsel gewinnt, erzielt sie einen Punkt und erhält das Aufschlagrecht (Side-Out). Vor dem Aufschlag rotieren alle sechs Feldspieler um eine Position im Uhrzeigersinn: Spieler von Position 2 rückt auf Position 1 zum Aufschlag, Position 1 auf 6, 6 auf 5, 5 auf 4, 4 auf 3 und 3 auf 2.',
  },
  {
    question: 'Wie viele Punkte sind nötig, um einen Satz und das Spiel im Volleyball zu gewinnen?',
    answer: 'Die regulären Sätze 1 bis 4 werden bis 25 Punkte gespielt, wobei mindestens zwei Punkte Vorsprung erforderlich sind. Bei 24:24 wird so lange weitergespielt, bis ein Team zwei Punkte führt. Der entscheidende 5. Satz (Tie-Break) geht bis 15 Punkte, ebenfalls mit zwei Punkten Vorsprung.',
  },
  {
    question: 'Wie viele Auszeiten und Auswechslungen sind pro Satz erlaubt?',
    answer: 'Gemäß den offiziellen FIVB Regeln stehen jedem Team maximal zwei Auszeiten von jeweils 30 Sekunden und bis zu sechs Spielerwechsel pro Satz zur Verfügung. Zu Beginn jedes neuen Satzes werden Auszeiten und Wechsel zurückgesetzt.',
  },
  {
    question: 'Welche 6 Positionen gibt es auf dem Volleyballfeld?',
    answer: 'Die Positionen sind von 1 bis 6 durchnummeriert: Position 1 ist Hinten Rechts (Aufschläger), Position 2 Vorne Rechts, Position 3 Vorne Mitte, Position 4 Vorne Links, Position 5 Hinten Links und Position 6 Hinten Mitte.',
  },
  {
    question: 'Wie wird die Anzeigetafel auf Smartphones und Tablets bedient?',
    answer: 'Die Benutzeroberfläche ist speziell für Touchscreens optimiert. Tippe auf die großen Ziffern oder das Plus-Symbol, um Punkte zu vergeben. Schnelle Schaltflächen ermöglichen 30-Sekunden-Auszeiten, Spielerwechsel, manuelle Rotationen und Seitenwechsel.',
  },
];

const howToData = [
  { name: 'Spielformat Festlegen', text: 'Wähle Best-of-5 Sätze, Best-of-3 Sätze oder Einzelsatz.' },
  { name: 'Punkte Eintragen', text: 'Tippe auf die entsprechende Mannschaftskarte, um Punkte hinzuzufügen. Aufschlagwechsel und Rotationen werden automatisch berechnet.' },
  { name: 'Auszeiten und Taktik Steuern', text: 'Nutze den 30-Sekunden-Countdown für Auszeiten, erfasse Spielerwechsel und behalte das taktische Spielfeld im Blick.' },
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig Gestellte Fragen',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Offizielle FIVB Volleyball Zählweise und Spielregeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hallenvolleyball wird nach dem Rally-Point-System gespielt, bei dem jeder beendete Ballwechsel direkt zu einem Punktgewinn führt, unabhängig vom Aufschlagrecht. Offizielle Wettbewerbe der FIVB erfordern eine präzise Satzführung, kontinuierliche Rotationen im Uhrzeigersinn nach Aufschlagrückgewinnung sowie die Einhaltung technischer Auszeiten.',
    },
    {
      type: 'title',
      text: 'Rotationspositionen und Spielfeldzonen im Detail',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das 18x9 Meter große Volleyballfeld ist in sechs Zonen unterteilt. Die Hinterzone bilden die Positionen 1 (Hinten Rechts / Aufschlag), 6 (Hinten Mitte) und 5 (Hinten Links). Die Vorderzone am Netz bilden die Positionen 2 (Vorne Rechts), 3 (Vorne Mitte) und 4 (Vorne Links). Im Moment des Aufschlags müssen alle Spieler ihre relative Grundordnung auf dem Feld einhalten.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Entscheidungssatz und Tiebreak Regeln',
      html: '<p>Erreicht ein Spiel den Entscheidungssatz (5. Satz bei Best-of-5 oder 3. Satz bei Best-of-3), sinkt das Satzgewinnziel auf <strong>15 Punkte</strong>. Die Mannschaften wechseln die Spielfeldseiten, sobald das führende Team 8 Punkte erreicht, wobei stets 2 Punkte Differenz für den Satzgewinn nötig sind.</p>',
    },
    {
      type: 'title',
      text: 'Regelung von Auszeiten und Spielerwechseln',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeder Mannschaft stehen pro Satz zwei 30-sekündige Auszeiten zur Verfügung, um Spielzüge abzusprechen und den Rhythmus des Gegners zu unterbrechen. Bis zu sechs Auswechslungen pro Satz sind zulässig, wobei ein Startspieler nur einmal pro Satz ausgewechselt werden und ausschließlich auf seine ursprüngliche Position zurückkehren darf.',
    },
  ],
  ui: {
    teamA: 'Team Alpha',
    teamB: 'Team Beta',
    points: 'Punkte',
    sets: 'Sätze',
    set: 'Satz',
    match: 'Spiel',
    serving: 'Aufschlag',
    sideout: 'Aufschlagwechsel',
    rotation: 'Rotation',
    timeout: 'Auszeit (30s)',
    timeoutsLeft: 'Auszeiten',
    substitutions: 'Wechsel',
    matchPoint: 'Matchball',
    setPoint: 'Satzball',
    winner: 'Spielgewinner',
    reset: 'Neues Spiel',
    resetConfirm: 'Aktuellen Spielstand zurücksetzen?',
    cancel: 'Abbrechen',
    undo: 'Rückgängig',
    switchSides: 'Seitenwechsel',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild Beenden',
    rotateCourt: 'Rotieren',
    substitutePlayer: 'Wechsel',
    matchModeBestOf3: 'Best of 3',
    matchModeBestOf5: 'Best of 5',
    matchModeSingleSet: 'Einzelsatz',
    targetPoints25: 'Satz bis 25 Pkt (+2)',
    targetPoints15: 'Tie-Break bis 15 Pkt (+2)',
    pos1RightBack: 'P1 Hinten Rechts (Aufschlag)',
    pos2RightFront: 'P2 Vorne Rechts',
    pos3MiddleFront: 'P3 Vorne Mitte',
    pos4LeftFront: 'P4 Vorne Links',
    pos5LeftBack: 'P5 Hinten Links',
    pos6MiddleBack: 'P6 Hinten Mitte',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Taktische Feldrotation',
    historyLogTitle: 'Satzübersicht und Verlauf',
  },
};
