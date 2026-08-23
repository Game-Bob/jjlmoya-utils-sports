import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'gestore-campionato-girone-italiano';
const title = 'Gestore Campionato Girone Italiano per Gruppi';
const description = 'Crea il calendario del girone all allitaliana per il tuo gruppo, registra i risultati e segui la classifica. Gestisci piu campionati e condividi un istantanea via link senza registrazione.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'I miei campionati',
  libraryEyebrow: 'Salvato su questo dispositivo',
  libraryIntro: 'Crea un campionato per ogni gruppo, riaprilo ogni giornata e mantieni tutti i risultati ordinati.',
  newLeague: 'Crea nuovo campionato',
  noLeagues: 'Nessun campionato salvato',
  noLeaguesHint: 'Il tuo primo campionato apparirà qui e rimarrà disponibile su questo dispositivo.',
  leagueNameLabel: 'Nome del campionato',
  leagueNamePlaceholder: 'Torneo del Venerdi Sera',
  teamsLabel: 'Squadre o giocatori',
  teamsHint: 'Un nome per riga o separati da virgole.',
  teamsPlaceholder: 'Città Alta\nStella del Nord\nRiver Atletico\nSummit Sport',
  loadExample: 'Carica un esempio pronto',
  demoLeagueName: 'Torneo del Venerdi Sera',
  demoTeams: 'Città Alta\nStella del Nord\nRiver Atletico\nSummit Sport\nOld Town',
  formatLabel: 'Formato stagione',
  singleLeg: 'Solo andata',
  singleLegHint: 'Ogni sfida si gioca una volta sola',
  doubleLeg: 'Andata e ritorno',
  doubleLegHint: 'Ogni sfida si gioca due volte',
  scoringLabel: 'Punti in classifica',
  winPoints: 'Vittoria',
  drawPoints: 'Pareggio',
  lossPoints: 'Sconfitta',
  createLeague: 'Crea campionato e calendario',
  nameStatus: 'Assegna un nome al campionato in modo che il tuo gruppo possa riconoscerlo.',
  emptyStatus: 'Aggiungi almeno due squadre o giocatori.',
  minimumStatus: 'Aggiungi un altro partecipante per generare il calendario.',
  readyStatus: '{count} partecipanti pronti. La stagione completa verrà salvata localmente.',
  duplicateStatus: 'Rinomina il partecipante duplicato "{name}".',
  maximumStatus: 'Usa al massimo 24 partecipanti per campionato.',
  longNameStatus: 'Accorcia "{name}" a 40 caratteri o meno.',
  importLeague: 'Importa JSON campionato',
  importHint: 'Il backup scaricato contiene l\'intero campionato compresi i risultati.',
  openLeague: 'Apri',
  share: 'Condividi',
  delete: 'Elimina',
  teamsCount: 'squadre',
  roundsCount: 'giornate',
  completedLabel: 'giocate',
  updatedLabel: 'Aggiornato',
  backToLeagues: 'Tutti i campionati',
  newLeagueAction: 'Nuovo campionato',
  allChangesSaved: 'Salvato su questo dispositivo',
  matchesTab: 'Partite',
  standingsTab: 'Classifica',
  settingsTab: 'Impostazioni',
  matchday: 'Giornata',
  firstLeg: 'Andata',
  secondLeg: 'Ritorno',
  previousRound: 'Giornata precedente',
  nextRound: 'Giornata successiva',
  fixtures: 'Partite e risultati',
  enterResult: 'Inserisci risultato',
  played: 'Giocata',
  pending: 'In attesa',
  byeLabel: 'Riposo',
  byeHint: 'Questo partecipante riposa in questa giornata.',
  standings: 'Classifica live',
  standingsHint: 'La classifica si aggiorna appena inseriti entrambi i punteggi. In caso di parità contano punti, differenza reti, gol fatti e nome.',
  positionShort: 'Pos',
  teamShort: 'Squadra',
  playedShort: 'G',
  wonShort: 'V',
  drawnShort: 'N',
  lostShort: 'P',
  goalsForShort: 'GF',
  goalsAgainstShort: 'GS',
  goalDifferenceShort: 'DR',
  pointsShort: 'Pt',
  progressLabel: 'Avanzamento stagione',
  seasonComplete: 'Stagione completata',
  shareLeague: 'Condividi campionato',
  downloadLeague: 'Scarica backup',
  copiedLeague: 'Link con lo stato attuale del campionato copiato negli appunti.',
  copyFailed: 'Il browser ha bloccato la copia del link.',
  downloadedLeague: 'Backup completo del campionato scaricato.',
  leagueSettings: 'Impostazioni campionato',
  settingsHint: 'Rinomina il torneo o modifica i punti assegnati per i risultati. I punteggi già inseriti rimarranno invariati.',
  saveSettings: 'Salva impostazioni',
  settingsSaved: 'Impostazioni salvate e classifica ricalcolata.',
  dangerZone: 'Zona pericolosa',
  deleteLeague: 'Elimina campionato',
  confirmDelete: 'Questo rimuoverà il campionato e tutti i suoi risultati da questo dispositivo.',
  importedLeague: 'Il campionato è stato importato come nuova copia locale.',
  importFailed: 'Questo file non è un backup valido del campionato.',
  sharedCopy: 'Copia condivisa',
  formatSingleMeta: 'girone unico',
  formatDoubleMeta: 'andata e ritorno',
};

const faq = [
  {
    question: 'Posso gestire più campionati all allitaliana?',
    answer: 'Sì. Ogni campionato è salvato separatamente sul tuo dispositivo con i propri partecipanti, partite, punteggi e sistema di punti.',
  },
  {
    question: 'Come posso inserire o correggere un risultato?',
    answer: 'Apri il torneo, seleziona la giornata e digita entrambi i punteggi. Ogni modifica aggiorna subito la classifica in tempo reale.',
  },
  {
    question: 'Come viene calcolata la classifica?',
    answer: 'Di norma tre punti per la vittoria, uno per il pareggio e zero per la sconfitta. In caso di parità decidono punti, differenza reti e gol segnati.',
  },
  {
    question: 'Cosa succede se il numero dei partecipanti è dispari?',
    answer: 'Un partecipante riposa a turno in ogni giornata. Il turno di riposo ruota in modo equo affinché tutti giochino lo stesso numero di sfide.',
  },
  {
    question: 'Cosa contiene il link condiviso?',
    answer: 'Il link racchiude un istantanea con nome del torneo, squadre, formato, punteggi e tutti i risultati inseriti fino a quel momento.',
  },
  {
    question: 'Il link condiviso si aggiorna da solo se inserisco nuovi risultati?',
    answer: 'No. Il link è una fotografia statica scattata al momento della copia. Per inviare nuovi risultati genera un nuovo link.',
  },
  {
    question: 'Come posso salvare un backup del campionato?',
    answer: 'Scarica il file JSON di backup. Puoi reimportarlo in qualsiasi momento o trasferirlo su un altro dispositivo.',
  },
];

const howTo = [
  { name: 'Crea il campionato', text: 'Inserisci il nome del torneo, aggiungi i partecipanti e scegli se giocare solo andata o andata e ritorno.' },
  { name: 'Seleziona la giornata', text: 'Spostati sulla giornata desiderata utilizzando i pulsanti numerati o le frecce.' },
  { name: 'Inserisci i risultati', text: 'Digita i gol o punti di ogni partita completata per aggiornare la classifica.' },
  { name: 'Controlla la classifica', text: 'Guarda la classifica live accanto alle partite oppure apri la scheda Classifica completa.' },
  { name: 'Condividi o scarica il backup', text: 'Copia un link di condivisone per il gruppo oppure scarica il file JSON di backup.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Pianifica il Torneo Prima della Prima Giornata',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Un campionato girone all allitaliana funziona al meglio se le regole sono chiare fin dall inizio. Definisci la lista delle squadre, scegli il formato e stabilisci i punti.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Partecipanti:</strong> usa nomi univoci per evitare errori nei referti.',
      '<strong>Formato:</strong> solo andata per tornei brevi o andata e ritorno per una stagione completa.',
      '<strong>Punti:</strong> lo standard è 3 per la vittoria, 1 per il pareggio e 0 per la sconfitta.',
      '<strong>Criteri di parità:</strong> stabilisci le regole di scontro diretto prima dell inizio.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Scegli la Durata Giusta per il Tuo Gruppo',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Con <strong>n</strong> partecipanti, un girone d andata richiede n × (n - 1) ÷ 2 partite. Il formato andata e ritorno raddoppia il totale.',
  },
  {
    type: 'table' as const,
    headers: ['Partecipanti', 'Giornate (Solo andata)', 'Partite (Solo andata)', 'Partite (Andata e ritorno)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (con un riposo per giornata)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Gestisci i Risultati in Modo Affidabile',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Un solo segnapunti:</strong> incarica una sola persona per mantenere aggiornati i dati.',
      '<strong>Inserisci entrambi i punteggi:</strong> un risultato parziale non influisce sulla classifica.',
      '<strong>Modifiche immediate:</strong> la classifica si ricalcola istantaneamente a ogni variazione.',
      '<strong>Condividi a giornata finita:</strong> invia un nuovo link quando tutti i risultati sono completi.',
      '<strong>Salva un backup:</strong> scarica il file JSON prima di cancellare i dati del browser.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Come Leggere la Classifica del Torneo',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'La classifica riporta partite giocate, vinte, pareggiate, perse, gol fatti, gol subiti, differenza reti e punti. L ordine segue <strong>punti, differenza reti e gol segnati</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Chiarisci i criteri in caso di parità assoluta',
    html: 'Decidi in anticipo se la parità di punti si risolve con lo scontro diretto o uno spareggio.',
  },
  {
    type: 'title' as const,
    text: 'Gestione dei Gruppi con Numero Dispari di Squadre',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Se il numero delle squadre è dispari, il programma assegna automaticamente un turno di riposo a rotazione a ogni giornata.',
  },
  {
    type: 'tip' as const,
    title: 'Il link di condivisione è un istantanea statica',
    html: 'Ricorda che condividere un link significa inviare una copia fissa. Se ci sono nuovi risultati, genera un nuovo link.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
];

export const content: ToolLocaleContent<RoundRobinLeagueManagerUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle: 'Domande Frequenti sul Gestore Campionato Girone Italiano',
  faq,
  bibliographyTitle: 'Riferimenti sui Formati di Torneo',
  bibliography,
  howTo,
  schemas,
};
