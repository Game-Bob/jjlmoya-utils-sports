import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-league-manager';
const title = 'Round Robin League Manager for Groups';
const description = 'Create a round robin schedule for your group, record every result and follow the league table. Manage several leagues and share a complete snapshot by link without registration.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'My leagues',
  libraryEyebrow: 'Saved on this device',
  libraryIntro: 'Create a league for each group, reopen it every matchday and keep every result separate.',
  newLeague: 'Create a new league',
  noLeagues: 'No leagues saved yet',
  noLeaguesHint: 'Your first league will appear here and stay available on this device.',
  leagueNameLabel: 'League name',
  leagueNamePlaceholder: 'Friday Night League',
  teamsLabel: 'Teams or players',
  teamsHint: 'One name per line, or paste a comma separated list.',
  teamsPlaceholder: 'Harbor City\nNorthstar\nRivergate\nSummit Athletic',
  loadExample: 'Load a ready example',
  demoLeagueName: 'Friday Night League',
  demoTeams: 'Harbor City\nNorthstar\nRivergate\nSummit Athletic\nOld Town',
  formatLabel: 'Season format',
  singleLeg: 'Play once',
  singleLegHint: 'Every pairing happens once',
  doubleLeg: 'Home and away',
  doubleLegHint: 'Every pairing happens twice',
  scoringLabel: 'Table points',
  winPoints: 'Win',
  drawPoints: 'Draw',
  lossPoints: 'Loss',
  createLeague: 'Create league and fixtures',
  nameStatus: 'Give this league a name so your group can recognize it.',
  emptyStatus: 'Add at least two teams or players.',
  minimumStatus: 'Add one more participant to create the first fixture.',
  readyStatus: '{count} participants are ready. The full season will be saved locally.',
  duplicateStatus: 'Rename the duplicate participant "{name}".',
  maximumStatus: 'Use no more than 24 participants in one league.',
  longNameStatus: 'Shorten "{name}" to 40 characters or fewer.',
  importLeague: 'Import league JSON',
  importHint: 'A downloaded backup contains the complete league, including results.',
  openLeague: 'Open',
  share: 'Share',
  delete: 'Delete',
  teamsCount: 'teams',
  roundsCount: 'matchdays',
  completedLabel: 'played',
  updatedLabel: 'Updated',
  backToLeagues: 'All leagues',
  newLeagueAction: 'New league',
  allChangesSaved: 'Saved on this device',
  matchesTab: 'Matches',
  standingsTab: 'Standings',
  settingsTab: 'Settings',
  matchday: 'Matchday',
  firstLeg: 'First leg',
  secondLeg: 'Return leg',
  previousRound: 'Previous matchday',
  nextRound: 'Next matchday',
  fixtures: 'Fixtures and results',
  enterResult: 'Enter result',
  played: 'Played',
  pending: 'Pending',
  byeLabel: 'Bye',
  byeHint: 'This participant does not play on this matchday.',
  standings: 'Live table',
  standingsHint: 'The table updates whenever both scores of a match are entered. Ties are ordered by points, goal difference, goals scored and name.',
  positionShort: 'Pos',
  teamShort: 'Team',
  playedShort: 'P',
  wonShort: 'W',
  drawnShort: 'D',
  lostShort: 'L',
  goalsForShort: 'GF',
  goalsAgainstShort: 'GA',
  goalDifferenceShort: 'GD',
  pointsShort: 'Pts',
  progressLabel: 'Season progress',
  seasonComplete: 'Season complete',
  shareLeague: 'Share league',
  downloadLeague: 'Download backup',
  copiedLeague: 'A link with the complete current league was copied.',
  copyFailed: 'This browser blocked copying the league link.',
  downloadedLeague: 'The complete league backup was downloaded.',
  leagueSettings: 'League settings',
  settingsHint: 'Rename the league or change how many table points each result awards. Existing scores stay intact.',
  saveSettings: 'Save settings',
  settingsSaved: 'League settings saved and standings recalculated.',
  dangerZone: 'Delete this league',
  deleteLeague: 'Delete league',
  confirmDelete: 'This removes the league and all its results from this device.',
  importedLeague: 'The complete league was imported as a new local copy.',
  importFailed: 'That file is not a valid league backup.',
  sharedCopy: 'Shared copy',
  formatSingleMeta: 'single round robin',
  formatDoubleMeta: 'double round robin',
};

const faq = [
  {
    question: 'Can I manage more than one round robin league?',
    answer: 'Yes. Each league remains separate on your device, with its own participants, fixtures, current matchday, scores and points system.',
  },
  {
    question: 'How do I enter or correct a result?',
    answer: 'Open the league, choose a matchday and type both scores in the fixture row. Change either score at any time and the standings recalculate from all completed matches.',
  },
  {
    question: 'How is the league table calculated?',
    answer: 'The default system awards three points for a win, one for a draw and none for a loss. You can change those values in Settings. Ties are ordered by points, goal difference, goals scored and then team name.',
  },
  {
    question: 'What happens with an odd number of participants?',
    answer: 'One participant receives a rotating bye on each matchday. Across a single round robin season, every participant receives one bye and still meets every other participant once.',
  },
  {
    question: 'What does the share link include?',
    answer: 'The link carries a snapshot of the league name, participants, format, points system, current matchday and every entered result. Opening it creates an independent copy for the recipient.',
  },
  {
    question: 'Does the share link update live after I change a score?',
    answer: 'No. A link is a snapshot taken when you copy it. Copy a new link after later results if the group needs the updated league. There is no central server or account syncing changes between devices.',
  },
  {
    question: 'How can I back up or move a league?',
    answer: 'Download the league as JSON. The backup contains the complete competition and can be imported later or on another device as a separate league.',
  },
];

const howTo = [
  { name: 'Create the group league', text: 'Name the competition, add every participant and choose one meeting or home and away fixtures.' },
  { name: 'Open the current matchday', text: 'Use the numbered matchday strip or the previous and next controls to reach the fixtures your group is playing.' },
  { name: 'Enter the scores', text: 'Type both scores for each completed match. Partial scores are saved but only complete results affect the table.' },
  { name: 'Check the standings', text: 'Review the compact live table beside the fixtures or open the full Standings view for every statistic.' },
  { name: 'Share or back up the league', text: 'Copy a snapshot link for the group or download a JSON backup containing all fixtures and results.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Plan the League Before the First Match',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'A round robin works best when the group agrees the rules before generating fixtures. Confirm the final participant list, choose whether every pairing plays once or twice, set the points awarded for each outcome and decide how an exact tie will be resolved. Changing the participant list later requires a new schedule.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Participants:</strong> use one consistent name for every team or player so results always reach the correct row.',
      '<strong>Season format:</strong> play once for a shorter competition or home and away for a more balanced season.',
      '<strong>Points:</strong> the default is three for a win, one for a draw and zero for a loss, but your group can change it.',
      '<strong>Tie policy:</strong> agree any head to head match, playoff or shared position rule before the season begins.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Choose a Season Length Your Group Can Finish',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'With <strong>n</strong> participants, a single round robin contains n × (n - 1) ÷ 2 matches. Home and away doubles that total. A longer format reduces the effect of one unusual result, but only if the group can realistically complete every matchday.',
  },
  {
    type: 'table' as const,
    headers: ['Participants', 'Single matchdays', 'Single matches', 'Home and away matches'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 with one bye each', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Keep Results and Standings Trustworthy',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Use one scorekeeper:</strong> let one person maintain the reference copy to avoid competing versions.',
      '<strong>Enter both scores:</strong> a partial result stays saved but does not affect the standings.',
      '<strong>Correct mistakes at the fixture:</strong> changing either score immediately recalculates the whole table.',
      '<strong>Share after the matchday:</strong> copy a fresh link when the latest results are complete.',
      '<strong>Keep a backup:</strong> download the league before clearing browser data or moving to another device.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Read the League Table Correctly',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Only fixtures with two scores count as played. The table totals played, wins, draws, losses, scores for, scores against, score difference and points. It orders teams by <strong>points, score difference and scores for</strong>. If all three are equal, the name is only used to keep the display stable; it should not decide the sporting winner.',
  },
  {
    type: 'tip' as const,
    title: 'Agree how exact ties are settled',
    html: 'Different sports and groups use different tie rules. Decide in advance whether an exact tie leads to a head to head comparison, a playoff, a shared position or another rule your competition recognizes.',
  },
  {
    type: 'title' as const,
    text: 'Handle Odd Groups Fairly',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'An odd number of participants creates one bye per matchday. The bye rotates so every participant sits out once during a single round robin. Treat it as a scheduled rest, not a win, loss or scored match.',
  },
  {
    type: 'tip' as const,
    title: 'A shared league is a snapshot',
    html: 'The recipient receives an independent copy, not a live synchronized league. Keep one reference copy and send a new link after later results if the rest of the group needs the updated table.',
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
  faqTitle: 'Round Robin League Manager Questions',
  faq,
  bibliographyTitle: 'League Format References',
  bibliography,
  howTo,
  schemas,
};
