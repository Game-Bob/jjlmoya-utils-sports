import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'segnapunti-pallavolo';
const title = 'Segnapunti Pallavolo: Punteggio Live, Rotazioni e Regolamento FIVB';
const description = 'Tabellone segnapunti professionale per pallavolo indoor e gestione rotazioni tattiche. Registra punti, set, rotazione oraria a 6 giocatori, timeout e cambi campo.';

const faqData = [
  {
    question: 'Come funziona la rotazione nella pallavolo dopo aver conquistato il cambio palla?',
    answer: 'Quando la squadra in ricezione vince lo scambio, segna un punto e conquista il diritto di servire (side-out). Prima di effettuare la battuta, i sei giocatori in campo devono ruotare di una posizione in senso orario: il giocatore in posizione 2 si sposta in posizione 1 per battere, la posizione 1 va in 6, la 6 in 5, la 5 in 4, la 4 in 3 e la 3 in 2.',
  },
  {
    question: 'Quanti punti occorrono per vincere un set e la partita a pallavolo?',
    answer: 'I set regolari (dal 1° al 4° set in una partita al meglio di 5) si giocano a 25 punti con uno scarto obbligatorio di almeno 2 punti. In caso di parità a 24-24, si prosegue finché una squadra non ottiene due punti di vantaggio. Il 5° set decisivo (tie-break) si gioca a 15 punti, sempre con 2 punti di scarto.',
  },
  {
    question: 'Quanti timeout e sostituzioni sono concessi per set nella pallavolo?',
    answer: 'Secondo le regole ufficiali FIVB, ciascuna squadra ha a disposizione un massimo di due timeout di 30 secondi e fino a sei sostituzioni di giocatori per set. I conteggi vengono azzerati all inizio di ogni nuovo set.',
  },
  {
    question: 'Quali sono le 6 posizioni regolamentari sul campo di pallavolo?',
    answer: 'Le posizioni sono numerate da 1 a 6: la Posizione 1 è Difensore Destro (battitore), la Posizione 2 è Avanti Destro, la Posizione 3 è Centro Avanti, la Posizione 4 è Avanti Sinistro, la Posizione 5 è Difensore Sinistro e la Posizione 6 è Difensore Centrale.',
  },
  {
    question: 'Come si utilizza questo segnapunti su smartphone o tablet durante le partite?',
    answer: 'L interfaccia è ottimizzata per il touch screen. Tocca i numeri grandi o il pulsante più per assegnare un punto. Usa i pulsanti rapidi per avviare il conto alla rovescia dei timeout di 30 secondi, registrare le sostituzioni e scambiare i campi.',
  },
];

const howToData = [
  { name: 'Scegliere il Formato', text: 'Seleziona al meglio di 5 set, al meglio di 3 set o set singolo.' },
  { name: 'Assegnare i Punti', text: 'Tocca la scheda della squadra per aggiungere punti. I cambi palla e le rotazioni vengono calcolati istantaneamente.' },
  { name: 'Gestire Timeout e Rotazioni', text: 'Avvia il timer di 30 secondi per i timeout, registra le sostituzioni e monitora il campo tattico in tempo reale.' },
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regolamento Ufficiale FIVB e Sistema di Calcolo Punti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La pallavolo indoor adotta il rally point system, in cui ogni azione conclusa assegna direttamente un punto alla squadra vincitrice dello scambio, a prescindere da chi abbia effettuato il servizio. Le gare ufficiali FIVB richiedono un tracciamento rigoroso dei set, rotazioni orarie obbligatorie a ogni cambio palla e gestione accurata dei tempi di sospensione.',
    },
    {
      type: 'title',
      text: 'Numerazione delle Posizioni e Zone di Attacco e Difesa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il campo regolamentare da 18x9 metri è suddiviso in sei zone rotazionali. La linea di seconda linea (difesa) include le posizioni 1 (difensore destro / battitore), 6 (difensore centrale) e 5 (difensore sinistro). La prima linea d attacco a rete è formata dalle posizioni 2 (avanti destro), 3 (centro avanti) e 4 (avanti sinistro). Al momento della battuta, i sei atleti devono rispettare la propria disposizione reciproca.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Regole del Set Decisivo Tiebreak',
      html: '<p>Quando una partita giunge al set decisivo (5° set nelle gare al meglio di 5 o 3° set in quelle al meglio di 3), il punteggio target scende a <strong>15 punti</strong>. Le formazioni cambiano campo non appena la squadra in vantaggio raggiunge gli 8 punti, mantenendo sempre la regola dei due punti di distacco.</p>',
    },
    {
      type: 'title',
      text: 'Regolamentazione di Timeout e Sostituzioni Tattiche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogni squadra può richiedere due timeout di 30 secondi per set per concordare schemi tattici e interrompere l inerzia avversaria. Sono ammesse fino a sei sostituzioni per set: un titolare può uscire dal campo una sola volta per set e rientrare esclusivamente nella medesima posizione di rotazione.',
    },
  ],
  ui: {
    teamA: 'Squadra Alfa',
    teamB: 'Squadra Beta',
    points: 'Punti',
    sets: 'Set',
    set: 'Set',
    match: 'Partita',
    serving: 'Al Servizio',
    sideout: 'Cambio Palla',
    rotation: 'Rotazione',
    timeout: 'Timeout (30s)',
    timeoutsLeft: 'Timeout',
    substitutions: 'Sost.',
    matchPoint: 'Match Point',
    setPoint: 'Set Point',
    winner: 'Vincitore della Partita',
    reset: 'Nuova Partita',
    resetConfirm: 'Azzerare il punteggio della partita attuale?',
    cancel: 'Annulla',
    undo: 'Annulla Azione',
    switchSides: 'Cambia Campo',
    fullscreen: 'Schermo Intero',
    exitFullscreen: 'Esci da Schermo Intero',
    rotateCourt: 'Ruota',
    substitutePlayer: 'Cambio',
    matchModeBestOf3: 'Al Meglio di 3',
    matchModeBestOf5: 'Al Meglio di 5',
    matchModeSingleSet: 'Set Singolo',
    targetPoints25: 'Set a 25 pt (+2)',
    targetPoints15: 'Tie-break a 15 pt (+2)',
    pos1RightBack: 'P1 Difensore Destro (Servizio)',
    pos2RightFront: 'P2 Avanti Destro',
    pos3MiddleFront: 'P3 Centro Avanti',
    pos4LeftFront: 'P4 Avanti Sinistro',
    pos5LeftBack: 'P5 Difensore Sinistro',
    pos6MiddleBack: 'P6 Difensore Centrale',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Rotazione Tattica in Campo',
    historyLogTitle: 'Riepilogo Set e Storico',
  },
};
