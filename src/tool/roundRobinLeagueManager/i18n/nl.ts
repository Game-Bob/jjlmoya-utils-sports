import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-competitie-manager';
const title = 'Round Robin Competitie Manager voor Groepen';
const description = 'Maak een schema in een halve of hele competitie voor je groep, voer alle uitslagen in en bekijk de stand. Beheer meerdere competities en deel een momentopname via een link zonder registratie.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Mijn competities',
  libraryEyebrow: 'Opgeslagen op dit apparaat',
  libraryIntro: 'Maak een competitie voor elke groep, open deze elke speelronde en houd alle uitslagen overzichtelijk bij.',
  newLeague: 'Nieuwe competitie maken',
  noLeagues: 'Nog geen competities opgeslagen',
  noLeaguesHint: 'Je eerste competitie verschijnt hier en blijft beschikbaar op dit apparaat.',
  leagueNameLabel: 'Naam competitie',
  leagueNamePlaceholder: 'Vrijdagavond Competitie',
  teamsLabel: 'Teams of spelers',
  teamsHint: 'Één naam per regel, of gescheiden door komma\'s.',
  teamsPlaceholder: 'Havenstad FC\nNoorderster\nRivierpark SC\nSummit Atletiek',
  loadExample: 'Voorbeeld laden',
  demoLeagueName: 'Vrijdagavond Competitie',
  demoTeams: 'Havenstad FC\nNoorderster\nRivierpark SC\nSummit Atletiek\nOud Stad',
  formatLabel: 'Seizoensindeling',
  singleLeg: 'Enkele competitie',
  singleLegHint: 'Elke wedstrijd wordt één keer gespeeld',
  doubleLeg: 'Uit en thuis',
  doubleLegHint: 'Elke wedstrijd wordt twee keer gespeeld',
  scoringLabel: 'Punten in de stand',
  winPoints: 'Winst',
  drawPoints: 'Gelijkspel',
  lossPoints: 'Verlies',
  createLeague: 'Competitie en speelschema maken',
  nameStatus: 'Geef deze competitie een naam zodat je groep deze herkent.',
  emptyStatus: 'Voeg minimaal twee teams of spelers toe.',
  minimumStatus: 'Voeg nog één deelnemer toe om het schema te maken.',
  readyStatus: '{count} deelnemers gereed. Het volledige seizoen wordt lokaal opgeslagen.',
  duplicateStatus: 'Pas de dubbele naam "{name}" aan.',
  maximumStatus: 'Gebruik maximaal 24 deelnemers per competitie.',
  longNameStatus: 'Kort "{name}" in tot maximaal 40 tekens.',
  importLeague: 'Competitie JSON importeren',
  importHint: 'Een reservekopie bevat de volledige competitie inclusief uitslagen.',
  openLeague: 'Openen',
  share: 'Delen',
  delete: 'Verwijderen',
  teamsCount: 'teams',
  roundsCount: 'speelrondes',
  completedLabel: 'gespeeld',
  updatedLabel: 'Bijgewerkt',
  backToLeagues: 'Alle competities',
  newLeagueAction: 'Nieuwe competitie',
  allChangesSaved: 'Opgeslagen op dit apparaat',
  matchesTab: 'Wedstrijden',
  standingsTab: 'Stand',
  settingsTab: 'Instellingen',
  matchday: 'Speelronde',
  firstLeg: 'Eerste helft',
  secondLeg: 'Tweede helft',
  previousRound: 'Vorige speelronde',
  nextRound: 'Volgende speelronde',
  fixtures: 'Wedstrijden en uitslagen',
  enterResult: 'Uitslag invoeren',
  played: 'Gespeeld',
  pending: 'Open',
  byeLabel: 'Vrij',
  byeHint: 'Deze deelnemer speelt niet in deze ronde.',
  standings: 'Live stand',
  standingsHint: 'De stand wordt bijgewerkt zodra beide scores zijn ingevoerd. Bij gelijke stand tellen punten, doelsaldo, doelpunten voor en naam.',
  positionShort: 'Pos',
  teamShort: 'Team',
  playedShort: 'G',
  wonShort: 'W',
  drawnShort: 'G',
  lostShort: 'V',
  goalsForShort: 'DV',
  goalsAgainstShort: 'DT',
  goalDifferenceShort: 'DS',
  pointsShort: 'Ptn',
  progressLabel: 'Voortgang seizoen',
  seasonComplete: 'Seizoen afgerond',
  shareLeague: 'Competitie delen',
  downloadLeague: 'Reservekopie downloaden',
  copiedLeague: 'Een link met de huidige stand is gekopieerd.',
  copyFailed: 'De browser blokkeerde het kopiëren van de link.',
  downloadedLeague: 'De volledige reservekopie is gedownload.',
  leagueSettings: 'Instellingen competitie',
  settingsHint: 'Pas de naam aan of wijzig de puntentelling. Bestaande uitslagen blijven behouden.',
  saveSettings: 'Instellingen opslaan',
  settingsSaved: 'Instellingen opgeslagen en stand opnieuw berekend.',
  dangerZone: 'Gevarenzone',
  deleteLeague: 'Competitie verwijderen',
  confirmDelete: 'Dit verwijdert de competitie en alle uitslagen definitief van dit apparaat.',
  importedLeague: 'De competitie is geïmporteerd als een nieuwe lokale kopie.',
  importFailed: 'Dit bestand is geen geldige competitie-reservekopie.',
  sharedCopy: 'Gedeelde kopie',
  formatSingleMeta: 'enkele competitie',
  formatDoubleMeta: 'dubbele competitie',
};

const faq = [
  {
    question: 'Kan ik meerdere competities tegelijk beheren?',
    answer: 'Ja. Elke competitie blijft apart opgeslagen op je apparaat met eigen deelnemers, speelschema en punten.',
  },
  {
    question: 'Hoe voer ik een uitslag in of pas ik deze aan?',
    answer: 'Open de competitie, kies de speelronde en voer beide scores in. De stand wordt direct opnieuw berekend.',
  },
  {
    question: 'Hoe wordt de stand berekend?',
    answer: 'Standaard krijg je 3 punten voor winst, 1 voor gelijkspel en 0 voor verlies. De rangschikking volgt punten, doelsaldo en doelpunten voor.',
  },
  {
    question: 'Wat gebeurt er bij een oneven aantal deelnemers?',
    answer: 'Elke speelronde heeft één deelnemer een vrije ronde. Dit rotteert eerlijk door de hele competitie.',
  },
  {
    question: 'Wat staat er in de gedeelde link?',
    answer: 'De link bevat een momentopname van de competitienaam, deelnemers, indeling, punten en alle ingevoerde uitslagen.',
  },
  {
    question: 'Werkt de link automatisch bij na nieuwe uitslagen?',
    answer: 'Nee. De link is een statische momentopname. Maak een nieuwe link nadat nieuwe uitslagen zijn ingevoerd.',
  },
  {
    question: 'Hoe maak ik een reservekopie?',
    answer: 'Download de competitie als JSON-bestand. Dit bestand kun je later weer importeren.',
  },
];

const howTo = [
  { name: 'Maak de competitie aan', text: 'Voer de naam in, voeg alle deelnemers toe en kies voor enkele of dubbele competitie.' },
  { name: 'Open de speelronde', text: 'Navigeer naar de juiste speelronde via de rondeknoppen of pijltoetsen.' },
  { name: 'Voer uitslagen in', text: 'Vul de scores van de gespeelde wedstrijden in om de stand direct te updaten.' },
  { name: 'Bekijk de stand', text: 'Volg de live stand naast de wedstrijden of open het tabblad Stand.' },
  { name: 'Deel of download', text: 'Kopieer de link voor je groep of download het JSON-reservekopiebestand.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planning van de Competitie voor de Eerste Ronde',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Een competitie in een halve of hele competitievorm werkt het beste wanneer alle afspraken vooraf duidelijk zijn afgestemd. Bevestig de definitieve deelnemerslijst, kies het seizoensformaat, bepaal het aantal punten per resultaat en spreek de regels af voor het oplossen van gelijke standen.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Deelnemers:</strong> Gebruik duidelijke en eenduidige namen voor alle teams of individuele spelers om verwarring bij uitslagen te voorkomen.',
      '<strong>Seizoensformaat:</strong> Kies een enkele competitie voor korte toernooien of uit en thuis voor een meer evenwichtige competitie.',
      '<strong>Punten:</strong> Standaard is 3 punten voor winst, 1 voor gelijkspel en 0 voor verlies, maar dit kan worden aangepast.',
      '<strong>Gelijke stand:</strong> Bepaal vooraf de regels en criteria bij een gelijke eindstand in de tabel.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Kies een Passende Seizoensduur',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Bij <strong>n</strong> deelnemers telt een enkele competitie n × (n - 1) ÷ 2 wedstrijden. Uit en thuis verdubbelt dit totale aantal gespeelde rondes. Een langer formaat vermindert de invloed van één onverwacht resultaat.',
  },
  {
    type: 'table' as const,
    headers: ['Deelnemers', 'Speelrondes (Enkel)', 'Wedstrijden (Enkel)', 'Wedstrijden (Uit/Thuis)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (met 1 vrije ronde per speelronde)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Uitslagen Betrouwbaar Bijhouden',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Eén verantwoordelijke:</strong> Laat één persoon de uitslagen invoeren om conflicterende versies te voorkomen.',
      '<strong>Voer beide scores in:</strong> Pas bij een volledige uitslag met twee ingevoerde waarden wordt de stand bijgewerkt.',
      '<strong>Directe correctie:</strong> Aanpassingen van uitslagen herberekenen de gehele stand automatisch en direct.',
      '<strong>Deel na de speelronde:</strong> Stuur een nieuwe link zodra alle uitslagen van de ronde binnen zijn.',
      '<strong>Reservekopie opslaan:</strong> Download het JSON-bestand ter beveiliging voordat je de browsergegevens wist.',
    ],
  },
  {
    type: 'title' as const,
    text: 'De Stand Juist Aflezen',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'De stand toont gespeelde wedstrijden, winst, gelijk, verlies, doelpunten voor, doelpunten tegen, doelsaldo en punten. De volgorde is op basis van <strong>punten, doelsaldo en doelpunten voor</strong>. Bij een gelijke stand wordt de naam alleen gebruikt om de weergave stabiel te houden.',
  },
  {
    type: 'tip' as const,
    title: 'Maak duidelijke afspraken bij gelijke stand',
    html: 'Spreek van tevoren af of onderling resultaat, een beslissingswedstrijd of een gedeelde plaatsing de doorslag geeft bij een gelijke stand.',
  },
  {
    type: 'title' as const,
    text: 'Omgaan met een Oneven Aantal Teams',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Bij een oneven aantal deelnemers krijgt elke speelronde automatisch één team een vrije ronde toebedeeld op roterende basis.',
  },
  {
    type: 'tip' as const,
    title: 'Een gedeelde link is een momentopname',
    html: 'Onthoud dat een gedeelde link de huidige staat op het moment van kopiëren verstuurt. Stuur een nieuwe link zodra er nieuwe resultaten zijn ingevoerd.',
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
  faqTitle: 'Veelgestelde Vragen over de Round Robin Competitie Manager',
  faq,
  bibliographyTitle: 'Referenties over Competitievormen',
  bibliography,
  howTo,
  schemas,
};
