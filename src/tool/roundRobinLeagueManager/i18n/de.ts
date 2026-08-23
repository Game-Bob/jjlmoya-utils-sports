import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'jeder-gegen-jeden-liga-manager';
const title = 'Jeder gegen Jeden Liga Manager für Gruppen';
const description = 'Erstelle einen Spielplan im Jeder-gegen-Jeden-System, trage alle Ergebnisse ein und verfolge die Tabelle. Verwalte mehrere Ligen und teile den aktuellen Stand per Link ohne Registrierung.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Meine Ligen',
  libraryEyebrow: 'Auf diesem Gerät gespeichert',
  libraryIntro: 'Erstelle eine Liga für jede Gruppe, öffne sie an jedem Spieltag und verwalte alle Ergebnisse übersichtlich.',
  newLeague: 'Neue Liga erstellen',
  noLeagues: 'Noch keine Ligen gespeichert',
  noLeaguesHint: 'Deine erste Liga erscheint hier und bleibt auf diesem Gerät verfügbar.',
  leagueNameLabel: 'Name der Liga',
  leagueNamePlaceholder: 'Freitagabend Liga',
  teamsLabel: 'Teams oder Spieler',
  teamsHint: 'Ein Name pro Zeile oder durch Kommas getrennt.',
  teamsPlaceholder: 'Stadtmitte FC\nNordstern\nFlussufer SC\nGipfel Athletik',
  loadExample: 'Fertiges Beispiel laden',
  demoLeagueName: 'Freitagabend Liga',
  demoTeams: 'Stadtmitte FC\nNordstern\nFlussufer SC\nGipfel Athletik\nAltstadt',
  formatLabel: 'Saisonformat',
  singleLeg: 'Einfache Runde',
  singleLegHint: 'Jede Begegnung findet einmal statt',
  doubleLeg: 'Hin und Rückspiel',
  doubleLegHint: 'Jede Begegnung findet zweimal statt',
  scoringLabel: 'Punkte für die Tabelle',
  winPoints: 'Sieg',
  drawPoints: 'Unentschieden',
  lossPoints: 'Niederlage',
  createLeague: 'Liga und Spielplan erstellen',
  nameStatus: 'Gib der Liga einen Namen, damit deine Gruppe sie erkennt.',
  emptyStatus: 'Füge mindestens zwei Teams oder Spieler hinzu.',
  minimumStatus: 'Füge einen weiteren Teilnehmer hinzu, um den Spielplan zu erstellen.',
  readyStatus: '{count} Teilnehmer bereit. Die komplette Saison wird lokal gespeichert.',
  duplicateStatus: 'Benenne den doppelten Teilnehmer "{name}" um.',
  maximumStatus: 'Verwende maximal 24 Teilnehmer pro Liga.',
  longNameStatus: 'Kürze "{name}" auf maximal 40 Zeichen.',
  importLeague: 'Liga JSON importieren',
  importHint: 'Ein Backup enthält die komplette Liga inklusive aller Ergebnisse.',
  openLeague: 'Öffnen',
  share: 'Teilen',
  delete: 'Löschen',
  teamsCount: 'Teams',
  roundsCount: 'Spieltage',
  completedLabel: 'gespielt',
  updatedLabel: 'Aktualisiert',
  backToLeagues: 'Alle Ligen',
  newLeagueAction: 'Neue Liga',
  allChangesSaved: 'Auf diesem Gerät gespeichert',
  matchesTab: 'Spiele',
  standingsTab: 'Tabelle',
  settingsTab: 'Einstellungen',
  matchday: 'Spieltag',
  firstLeg: 'Hinrunde',
  secondLeg: 'Rückrunde',
  previousRound: 'Vorheriger Spieltag',
  nextRound: 'Nächster Spieltag',
  fixtures: 'Begegnungen und Ergebnisse',
  enterResult: 'Ergebnis eintragen',
  played: 'Gespielt',
  pending: 'Offen',
  byeLabel: 'Spielfrei',
  byeHint: 'Dieser Teilnehmer hat an diesem Spieltag kein Spiel.',
  standings: 'Live Tabelle',
  standingsHint: 'Die Tabelle aktualisiert sich, sobald beide Tore eingetragen sind. Bei Gleichstand zählen Punkte, Tordifferenz, erzielte Tore und Name.',
  positionShort: 'Pos',
  teamShort: 'Team',
  playedShort: 'Sp',
  wonShort: 'S',
  drawnShort: 'U',
  lostShort: 'N',
  goalsForShort: 'T',
  goalsAgainstShort: 'GT',
  goalDifferenceShort: 'TD',
  pointsShort: 'Pkt',
  progressLabel: 'Saisonfortschritt',
  seasonComplete: 'Saison beendet',
  shareLeague: 'Liga teilen',
  downloadLeague: 'Backup herunterladen',
  copiedLeague: 'Ein Link mit dem aktuellen Stand der Liga wurde kopiert.',
  copyFailed: 'Der Browser hat das Kopieren des Links blockiert.',
  downloadedLeague: 'Das komplette Liga Backup wurde heruntergeladen.',
  leagueSettings: 'Liga Einstellungen',
  settingsHint: 'Benenne die Liga um oder ändere die Punkteverteilung. Bereits eingetragene Ergebnisse bleiben erhalten.',
  saveSettings: 'Einstellungen speichern',
  settingsSaved: 'Einstellungen gespeichert und Tabelle neu berechnet.',
  dangerZone: 'Gefahrenzone',
  deleteLeague: 'Liga löschen',
  confirmDelete: 'Dies entfernt die Liga und alle Ergebnisse von diesem Gerät.',
  importedLeague: 'Die Liga wurde als neue lokale Kopie importiert.',
  importFailed: 'Diese Datei ist kein gültiges Liga Backup.',
  sharedCopy: 'Geteilte Kopie',
  formatSingleMeta: 'Einfache Jeder-gegen-Jeden Runde',
  formatDoubleMeta: 'Doppelte Jeder-gegen-Jeden Runde',
};

const faq = [
  {
    question: 'Kann ich mehrere Ligen verwalten?',
    answer: 'Ja. Jede Liga wird separat auf deinem Gerät gespeichert mit eigenen Teilnehmern, Spielplänen, Ergebnissen und Punktesystemen.',
  },
  {
    question: 'Wie trage ich ein Ergebnis ein oder korrigiere es?',
    answer: 'Öffne die Liga, wähle den Spieltag aus und gib beide Werte in der Spielzeile ein. Korrekturen passen die Tabelle sofort automatisch an.',
  },
  {
    question: 'Wie wird die Tabelle berechnet?',
    answer: 'Standardmäßig gibt es drei Punkte für einen Sieg, einen für Unentschieden und null für eine Niederlage. Bei Punktgleichstand entscheiden Tordifferenz, erzielte Tore und Name.',
  },
  {
    question: 'Was passiert bei einer ungeraden Anzahl von Teilnehmern?',
    answer: 'In jeder Runde hat ein Teilnehmer spielfrei. Die spielfreie Runde rotiert fair durch, sodass jeder einmal pausiert.',
  },
  {
    question: 'Was beinhaltet der Freigabelink?',
    answer: 'Der Link enthält den aktuellen Stand der Liga mit Name, Teilnehmern, Spielplan und allen bisherigen Ergebnissen als Kopie.',
  },
  {
    question: 'Aktualisiert sich der Link automatisch nach neuen Ergebnissen?',
    answer: 'Nein. Der Link ist eine Momentaufnahme. Wenn neue Spiele eingetragen werden, erstelle einfach einen neuen Link für deine Gruppe.',
  },
  {
    question: 'Wie sichere ich meine Ligen?',
    answer: 'Lade die Liga als JSON Backup herunter. Diese Datei kann auf jedem Gerät wieder importiert werden.',
  },
];

const howTo = [
  { name: 'Erstelle die Gruppenliga', text: 'Gib der Liga einen Namen, füge alle Teilnehmer hinzu und wähle einfache Runde oder Hin und Rückspiel.' },
  { name: 'Wähle den aktuellen Spieltag', text: 'Nutze die Spieltag-Schaltflächen oder Pfeile, um zu den Begegnungen deiner Gruppe zu gelangen.' },
  { name: 'Trage die Ergebnisse ein', text: 'Gib beide Werte pro Spiel ein. Vollständige Ergebnisse aktualisieren direkt die Tabelle.' },
  { name: 'Prüfe die Tabelle', text: 'Verfolge die Live-Tabelle direkt neben den Spielen oder öffne den Reiter Tabelle.' },
  { name: 'Teile oder sichere die Liga', text: 'Kopiere einen Freigabelink für deine Gruppe oder lade ein JSON Backup herunter.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planung der Liga vor dem ersten Spieltag',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Eine Jeder-gegen-Jeden Liga funktioniert am besten, wenn die Regeln vor dem Erstellen des Spielplans feststehen. Bestätige die Teilnehmerliste, wähle das Rundenformat und lege die Punkteverteilung fest.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Teilnehmer:</strong> Verwende einheitliche Namen für alle Teams oder Spieler.',
      '<strong>Saisonformat:</strong> Wähle einfache Runde für kurze Turniere oder Hin und Rückspiel.',
      '<strong>Punkte:</strong> Standardmäßig 3 für Sieg, 1 für Unentschieden und 0 für Niederlage.',
      '<strong>Gleichstand:</strong> Lege die Feinwertung vor Turnierbeginn fest.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Wähle ein passendes Saisonformat',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Bei <strong>n</strong> Teilnehmern erfordert eine einfache Runde n × (n - 1) ÷ 2 Spiele. Hin- und Rückspiele verdoppeln diese Anzahl.',
  },
  {
    type: 'table' as const,
    headers: ['Teilnehmer', 'Spieltage (Einfach)', 'Spiele (Einfach)', 'Spiele (Hin und Rück)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (mit je einer Pause)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Ergebnisse zuverlässig verwalten',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Ein Schriftführer:</strong> Eine Person sollte die Hauptergebnisse eintragen.',
      '<strong>Beide Ergebnisse eintragen:</strong> Nur vollständige Spielergebnisse fließen in die Tabelle ein.',
      '<strong>Direkte Korrektur:</strong> Änderungen berechnen die Gesamttabelle sofort neu.',
      '<strong>Nach dem Spieltag teilen:</strong> Sende nach den Spielen einen aktualisierten Link.',
      '<strong>Backup speichern:</strong> Sichere deine Liga als JSON Datei.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Die Ligatabelle richtig lesen',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Die Tabelle berücksichtigt absolvierte Spiele, Siege, Unentschieden, Niederlagen, Tore und Punkte. Die Sortierung erfolgt nach <strong>Punkten, Tordifferenz und erzielten Toren</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Feinwertung im Voraus klären',
    html: 'Vereinbart vorab, ob bei absolutem Gleichstand der direkte Vergleich oder ein Entscheidungsspiel entscheidet.',
  },
  {
    type: 'title' as const,
    text: 'Umgang mit ungerader Teilnehmerzahl',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Bei ungerader Teilnehmerzahl hat an jedem Spieltag ein Team rotierend spielfrei, damit alle Teilnehmer dieselbe Anzahl an Spielen absolvieren.',
  },
  {
    type: 'tip' as const,
    title: 'Ein geteilter Link ist eine Momentaufnahme',
    html: 'Beachte, dass ein geteilter Link den aktuellen Stand kopiert. Nach neuen Ergebnissen muss ein neuer Link gesendet werden.',
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
  faqTitle: 'Häufige Fragen zum Jeder gegen Jeden Liga Manager',
  faq,
  bibliographyTitle: 'Referenzen zu Ligaformaten',
  bibliography,
  howTo,
  schemas,
};
