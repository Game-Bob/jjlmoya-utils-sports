import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyball-scorekeeper';
const title = 'Volleyball Scoreboard: Live Scoring, Rotations and FIVB Match Tracker';
const description = 'Professional indoor volleyball scoreboard and tactical rotation tracker. Track live points, sets, clockwise player rotations, timeouts, substitutions, and side-outs with interactive court visualization.';

const faqData = [
  {
    question: 'How does volleyball rotation work after winning a side-out?',
    answer: 'When the receiving team wins a rally, they earn a point and the right to serve. Before serving, their six players rotate one position in a clockwise direction: the player in position 2 moves to position 1 to serve, position 1 moves to 6, position 6 to 5, position 5 to 4, position 4 to 3, and position 3 to 2.',
  },
  {
    question: 'How many points are needed to win a volleyball set and match?',
    answer: 'Standard sets (Sets 1 to 4 in a best-of-5 match) are played to 25 points with a minimum two-point margin and no scoring cap. If teams tie at 24-24, play continues until one team leads by two points. The deciding fifth set (or third set in a best-of-3 match) is played to 15 points, also requiring a two-point margin.',
  },
  {
    question: 'How many timeouts and substitutions are allowed per set in volleyball?',
    answer: 'According to official FIVB regulations, each team is allowed a maximum of two 30-second timeouts and up to six player substitutions per set. Timeouts and substitution counts reset to zero at the beginning of each new set.',
  },
  {
    question: 'What are the 6 positions on an indoor volleyball court?',
    answer: 'The positions are numbered 1 through 6: Position 1 is Right Back (the server), Position 2 is Right Front, Position 3 is Middle Front, Position 4 is Left Front, Position 5 is Left Back, and Position 6 is Middle Back.',
  },
  {
    question: 'How do I use this scoreboard on mobile or tablet at a match?',
    answer: 'The interface is specifically optimized for touchscreens. Tap the large score digits or the plus button to award a rally point. Use the quick buttons for 30-second timeouts, player substitutions, manual rotation adjustments, and side switching. Everything updates instantly on the tactical court.',
  },
];

const howToData = [
  { name: 'Select Match Format', text: 'Choose Best of 5 Sets, Best of 3 Sets, or a Single Set format.' },
  { name: 'Award Rally Points', text: 'Click on a team card or use arrow keys to award rally points. The scoreboard automatically handles side-outs and player rotations.' },
  { name: 'Manage Timeouts and Rotations', text: 'Track 30-second timeouts, log player substitutions, and inspect the live tactical court diagram.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Official FIVB Volleyball Scoring Rules and Match Structure',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Indoor volleyball uses the rally point system, where every completed play results in a point scored regardless of which team served. Matches are conducted under international FIVB guidelines, requiring structured set tracking, continuous clockwise positional rotations upon receiving side-outs, and strict regulation of technical timeouts.',
    },
    {
      type: 'title',
      text: 'Understanding Positional Rotation Numbers and Court Zones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A standard volleyball court is divided into six rotational zones. The back-row positions are 1 (Right Back / Server), 6 (Middle Back), and 5 (Left Back). The front-row attacking positions are 2 (Right Front), 3 (Middle Front), and 4 (Left Front). At the moment of service contact, all players must be in their correct rotational alignment relative to adjacent teammates before transitioning into specialized tactical formations.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Deciding Set Tiebreak Regulations',
      html: '<p>When a match reaches the deciding final set (Set 5 in a five-set match or Set 3 in a three-set match), the target score drops from 25 to <strong>15 points</strong>. Teams switch court sides when the leading team reaches 8 points, and play continues until one team achieves a 2-point winning margin.</p>',
    },
    {
      type: 'title',
      text: 'Timeout Management and Tactical Substitution Limits',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Each team is granted two 30-second timeouts per set to disrupt opponent momentum and discuss strategy. Up to six substitutions are allowed per set, where a starting player may leave the game and re-enter only once per set, strictly returning to their previous rotational position.',
    },
  ],
  ui: {
    teamA: 'Team Alpha',
    teamB: 'Team Beta',
    points: 'Points',
    sets: 'Sets',
    set: 'Set',
    match: 'Match',
    serving: 'Serving',
    sideout: 'Side-out Point',
    rotation: 'Rotation',
    timeout: 'Timeout (30s)',
    timeoutsLeft: 'Timeouts',
    substitutions: 'Subs',
    matchPoint: 'Match Point',
    setPoint: 'Set Point',
    winner: 'Match Winner',
    reset: 'New Match',
    resetConfirm: 'Reset current match score?',
    cancel: 'Cancel',
    undo: 'Undo',
    switchSides: 'Switch Sides',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    rotateCourt: 'Rotate',
    substitutePlayer: 'Sub',
    matchModeBestOf3: 'Best of 3',
    matchModeBestOf5: 'Best of 5',
    matchModeSingleSet: 'Single Set',
    targetPoints25: 'Set to 25 pts (+2)',
    targetPoints15: 'Tiebreak to 15 pts (+2)',
    pos1RightBack: 'P1 Right Back (Server)',
    pos2RightFront: 'P2 Right Front',
    pos3MiddleFront: 'P3 Middle Front',
    pos4LeftFront: 'P4 Left Front',
    pos5LeftBack: 'P5 Left Back',
    pos6MiddleBack: 'P6 Middle Back',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Tactical Court Rotation',
    historyLogTitle: 'Set Summary & History',
  },
};
