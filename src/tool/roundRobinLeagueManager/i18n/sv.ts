import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-liga-manager';
const title = 'Round Robin Liga Manager for Grupper';
const description = 'Skapa ett spelprogram i alla-moter-alla for din grupp, registrera alla resultat och folj ligatabellen. Hantera flera ligor och dela en komplet ogonblicksbild via lank utan registrering.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Mina ligor',
  libraryEyebrow: 'Sparat på denna enhet',
  libraryIntro: 'Skapa en liga för varje grupp, öppna den varje omgång och håll ordning på alla resultat.',
  newLeague: 'Skapa ny liga',
  noLeagues: 'Inga sparade ligor än',
  noLeaguesHint: 'Din första liga visas här och förblir tillgänglig på denna enhet.',
  leagueNameLabel: 'Ligans namn',
  leagueNamePlaceholder: 'Fredagsligan',
  teamsLabel: 'Lag eller deltagare',
  teamsHint: 'Ett namn per rad, eller separerade med komma.',
  teamsPlaceholder: 'Hamnstaden FC\nNordstjärnan\nRivergate BK\nToppform SK',
  loadExample: 'Ladda ett färdigt exempel',
  demoLeagueName: 'Fredagsligan',
  demoTeams: 'Hamnstaden FC\nNordstjärnan\nRivergate BK\nToppform SK\nGamla Stan',
  formatLabel: 'Säsongsformat',
  singleLeg: 'Enkelserie',
  singleLegHint: 'Varje möte spelas en gång',
  doubleLeg: 'Hemma och borta',
  doubleLegHint: 'Varje möte spelas två gånger',
  scoringLabel: 'Poäng i tabellen',
  winPoints: 'Vinst',
  drawPoints: 'Oavgjort',
  lossPoints: 'Förlust',
  createLeague: 'Skapa liga och spelprogram',
  nameStatus: 'Ge ligan ett namn så att din grupp enkelt känner igen den.',
  emptyStatus: 'Lägg till minst två lag eller deltagare.',
  minimumStatus: 'Lägg till en deltagare till för att skapa spelprogrammet.',
  readyStatus: '{count} deltagare redo. Hela säsongen sparas lokalt.',
  duplicateStatus: 'Döp om den dubblerade deltagaren "{name}".',
  maximumStatus: 'Använd högst 24 deltagare per liga.',
  longNameStatus: 'Korta ner "{name}" till 40 tecken eller färre.',
  importLeague: 'Importera JSON-liga',
  importHint: 'En säkerhetskopia innehåller hela ligan inklusive resultat.',
  openLeague: 'Öppna',
  share: 'Dela',
  delete: 'Ta bort',
  teamsCount: 'lag',
  roundsCount: 'omgångar',
  completedLabel: 'spelade',
  updatedLabel: 'Uppdaterad',
  backToLeagues: 'Alla ligor',
  newLeagueAction: 'Ny liga',
  allChangesSaved: 'Sparat på denna enhet',
  matchesTab: 'Matcher',
  standingsTab: 'Tabell',
  settingsTab: 'Inställningar',
  matchday: 'Omgång',
  firstLeg: 'Första mötet',
  secondLeg: 'Returmötet',
  previousRound: 'Föregående omgång',
  nextRound: 'Nästa omgång',
  fixtures: 'Matcher och resultat',
  enterResult: 'Fyll i resultat',
  played: 'Spelad',
  pending: 'Kommande',
  byeLabel: 'Står över',
  byeHint: 'Denna deltagare spelar inte i denna omgång.',
  standings: 'Livetabell',
  standingsHint: 'Tabellen uppdateras när båda mål/poäng fyllts i. Vid lika poäng räknas målskillnad, gjorda mål och namn.',
  positionShort: 'Pos',
  teamShort: 'Lag',
  playedShort: 'S',
  wonShort: 'V',
  drawnShort: 'O',
  lostShort: 'F',
  goalsForShort: 'GM',
  goalsAgainstShort: 'IM',
  goalDifferenceShort: 'MS',
  pointsShort: 'P',
  progressLabel: 'Säsongsframsteg',
  seasonComplete: 'Säsongen avslutad',
  shareLeague: 'Dela liga',
  downloadLeague: 'Ladda ner säkerhetskopia',
  copiedLeague: 'En länk med ligans nuvarande ställning har kopierats.',
  copyFailed: 'Webbläsaren blockerade kopiering av länken.',
  downloadedLeague: 'Fullständig säkerhetskopia av ligan har laddats ner.',
  leagueSettings: 'Ligainställningar',
  settingsHint: 'Ändra ligans namn eller poängregler. Inmatade resultat påverkas inte.',
  saveSettings: 'Spara inställningar',
  settingsSaved: 'Inställningar sparade och tabellen har räknats om.',
  dangerZone: 'Farlig zon',
  deleteLeague: 'Ta bort liga',
  confirmDelete: 'Detta tar bort ligan och alla dess resultat permanent från denna enhet.',
  importedLeague: 'Ligan har importerats som en ny lokal kopia.',
  importFailed: 'Filen är inte en giltig säkerhetskopia av en liga.',
  sharedCopy: 'Delad kopia',
  formatSingleMeta: 'enkelserie alla möter alla',
  formatDoubleMeta: 'dubbelserie alla möter alla',
};

const faq = [
  {
    question: 'Kan jag hantera mer än en alla möter alla-liga?',
    answer: 'Ja. Varje liga sparas separat på din enhet med egna deltagare, spelprogram och poängregler.',
  },
  {
    question: 'Hur fyller jag i eller ändrar ett resultat?',
    answer: 'Öppna ligan, välj omgång och skriv in båda resultaten. Tabellen uppdateras direkt.',
  },
  {
    question: 'Hur beräknas ligatabellen?',
    answer: 'Standard är tre poäng för vinst, en för oavgjort och noll för förlust. Vid lika poäng gäller målskillnad och gjorda mål.',
  },
  {
    question: 'Vad händer om antalet deltagare är udda?',
    answer: 'En deltagare står över i varje omgång på ett rullande och rättvist sätt.',
  },
  {
    question: 'Vad innehåller den delade länken?',
    answer: 'Länken innehåller en ögonblicksbild av ligans namn, deltagare, format, poäng och inmatade resultat.',
  },
  {
    question: 'Uppdateras den delade länken automatiskt när jag lägger till resultat?',
    answer: 'Nej. Länken är en ögonblicksbild. Skapa en ny länk när nya resultat har fyllts i.',
  },
  {
    question: 'Hur gör jag en säkerhetskopia av min liga?',
    answer: 'Ladda ner ligan som en JSON-fil som du kan importera igen när som helst.',
  },
];

const howTo = [
  { name: 'Skapa ligan', text: 'Ange turneringens namn, lägg till deltagare och välj enkel- eller dubbelserie.' },
  { name: 'Öppna omgången', text: 'Gå till rätt omgång med sifferknapparna eller pilarna.' },
  { name: 'Skriv in resultaten', text: 'Mata in mål eller poäng för varje färdig match för att uppdatera tabellen.' },
  { name: 'Kontrollera tabellen', text: 'Se livetabellen bredvid matcherna eller öppna fliken Tabell.' },
  { name: 'Dela eller spara', text: 'Kopiera en länk till gruppen eller ladda ner en JSON-säkerhetskopia.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planering av Ligan Innan Första Matchen',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'En alla möter alla-liga fungerar bäst när alla grundläggande regler bestäms i förväg innan spelschemat genereras. Bekräfta den slutgiltiga deltagarlistan, välj säsongsformat, bestäm poängsättningen och kom överens om regler för att skilja lag åt i tabellen.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Deltagare:</strong> Använd tydliga och entydiga namn för alla lag eller enskilda spelare för att undvika förvirring.',
      '<strong>Säsongsformat:</strong> Välj enkelserie för kortare turneringar eller dubbelserie för en hel säsong.',
      '<strong>Poäng:</strong> Standard är 3 poäng för vinst, 1 för oavgjort och 0 för förlust, men detta kan anpassas.',
      '<strong>Särskiljningsregler:</strong> Bestäm i förväg vilka kriterier som gäller när två eller fler lag hamnar på samma poäng.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Välj Rätt Säsongslängd för Gruppen',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Med <strong>n</strong> deltagare kräver en enkelserie n × (n - 1) ÷ 2 matcher. Dubbelserie fördubblar det totala antalet spelade matcher. Ett längre format minskar påverkan av enstaka slumpmässiga resultat.',
  },
  {
    type: 'table' as const,
    headers: ['Deltagare', 'Omgångar (Enkelserie)', 'Matcher (Enkelserie)', 'Matcher (Dubbelserie)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (med en viloomgång var per spelomgång)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Tillförlitlig Resultathantering',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>En ansvarig:</strong> Låt en utsedd person föra in alla resultat för att undvika fel och dubbelarbete.',
      '<strong>Mata in båda siffervärdena:</strong> Ett ofullständigt resultat påverkar inte tabellen förrän båda värdena fyllts i.',
      '<strong>Direkta ändringar:</strong> Om du ändrar ett resultat räknas hela ligatabellen om automatiskt och direkt.',
      '<strong>Dela efter omgången:</strong> Skicka en ny länk så snart alla matcher i omgången spels klart.',
      '<strong>Spara JSON-kopia:</strong> Ladda ner filen med säkerhetskopia före du rensar webbläsarens sparade data.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Så Läser Du Ligatabellen Rätt',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Tabellen visar spelade matcher, vinster, oavgjorda, förluster, gjorda mål, insläppta mål, målskillnad och poäng. Sortering sker i första hand på <strong>poäng, målskillnad och gjorda mål</strong>. Vid helt lika resultat används namnet för stabil visning.',
  },
  {
    type: 'tip' as const,
    title: 'Bestäm regler för helt lika poäng',
    html: 'Kom överens i förväg om inbördes möte eller omspel ska avgöra när alla siffror i tabellen är identiska.',
  },
  {
    type: 'title' as const,
    text: 'Hantera Udda Antal Lag',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Om antalet lag är udda tilldelar verktyget automatiskt en rullande viloomgång varje spelomgång på ett rättvist sätt.',
  },
  {
    type: 'tip' as const,
    title: 'En delad länk är en ögonblicksbild',
    html: 'Tänk på att en delad länk skickar ställningen i det ögonblicket vid kopieringen. Skapa och skicka en ny länk när fler matcher spelats.',
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
  faqTitle: 'Vanliga Frågor om Round Robin Liga Manager',
  faq,
  bibliographyTitle: 'Referenser om Ligaformat',
  bibliography,
  howTo,
  schemas,
};
