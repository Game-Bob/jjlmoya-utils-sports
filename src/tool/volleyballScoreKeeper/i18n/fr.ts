import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'marqueur-volleyball';
const title = 'Marqueur de Volleyball: Score en Direct, Rotations et Règles FIVB';
const description = 'Tableau d affichage professionnel de volley-ball en salle et suivi des rotations tactiques. Comptabilisez points, sets, rotations à 6 joueurs, temps morts et changements de service.';

const faqData = [
  {
    question: 'Comment fonctionne la rotation des joueurs de volleyball lors d un changement de service ?',
    answer: 'Lorsque l équipe réceptionnaire remporte l échange, elle marque un point et récupère le droit de servir (side-out). Avant de servir, ses six joueurs sur le terrain effectuent une rotation d une position dans le sens des aiguilles d une montre: le joueur en position 2 passe en position 1 pour servir, le joueur en position 1 passe en 6, 6 en 5, 5 en 4, 4 en 3 et 3 en 2.',
  },
  {
    question: 'Combien de points faut-il pour remporter un set et le match en volleyball ?',
    answer: 'Les sets réguliers (sets 1 à 4 dans un match en 3 sets gagnants) se jouent en 25 points avec au moins deux points d écart. En cas d égalité à 24-24, le jeu se poursuit jusqu à ce qu une équipe prenne deux points d avance. Le 5e set décisif (tie-break) se joue en 15 points, également avec deux points d écart.',
  },
  {
    question: 'Combien de temps morts et de remplacements sont autorisés par set ?',
    answer: 'Selon le règlement officiel de la FIVB, chaque équipe dispose d un maximum de deux temps morts de 30 secondes et de six remplacements de joueurs par set. Le décompte est réinitialisé au début de chaque nouveau set.',
  },
  {
    question: 'Quelles sont les 6 positions sur un terrain de volley-ball ?',
    answer: 'Les positions sont numérotées de 1 à 6: la Position 1 est l Arrière Droit (serveur), la Position 2 est l Avant Droit, la Position 3 est l Avant Centre, la Position 4 est l Avant Gauche, la Position 5 est l Arrière Gauche et la Position 6 est l Arrière Centre.',
  },
  {
    question: 'Comment utiliser ce tableau d affichage sur smartphone ou tablette pendant un match ?',
    answer: 'L interface est pensée pour le tactile. Touchez les grands chiffres de score ou le bouton plus pour attribuer un point. Utilisez les boutons dédiés pour lancer les temps morts de 30 secondes, enregistrer les remplacements et changer de côté.',
  },
];

const howToData = [
  { name: 'Sélectionner le Format', text: 'Choisissez 3 sets gagnants, 2 sets gagnants ou un set unique.' },
  { name: 'Attribuer les Points', text: 'Touchez la carte de l équipe pour ajouter des points. Les rotations et les changements de service sont appliqués instantanément.' },
  { name: 'Gérer les Temps Morts et Rotations', text: 'Déclenchez le compte à rebours de 30 secondes, suivez les remplacements et visualisez le terrain tactique.' },
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Règles Officielles FIVB et Système de Comptage des Points',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le volleyball en salle utilise le système de décompte continu (rally point system), où chaque échange disputé rapporte un point au tableau d affichage, indépendamment de l équipe au service. Les rencontres officielles sous l égide de la FIVB imposent une gestion stricte des sets, une rotation horaire obligatoire lors des récupérations de service et le contrôle des temps morts techniques.',
    },
    {
      type: 'title',
      text: 'Numérotation des Positions et Zones de Jeu sur le Terrain',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le terrain réglementaire de 18x9 mètres est découpé en six zones tactiques. La ligne arrière défensive regroupe les positions 1 (arrière droit / serveur), 6 (arrière centre) et 5 (arrière gauche). La ligne avant d attaque comprend les positions 2 (avant droit), 3 (avant centre) et 4 (avant gauche). Au moment de la frappe du service, chaque joueur doit impérativement respecter son positionnement relatif par rapport à ses coéquipiers.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Règles du Set Décisif de Tiebreak',
      html: '<p>Lorsqu une rencontre atteint le set décisif (5e set dans un match en 3 sets gagnants ou 3e set dans un match en 2 sets gagnants), le score cible passe de 25 à <strong>15 points</strong>. Les équipes changent de côté dès que l équipe en tête atteint 8 points, en conservant l obligation de deux points d écart pour la victoire finale.</p>',
    },
    {
      type: 'title',
      text: 'Gestion des Temps Morts et des Remplacements',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque formation bénéficie de deux temps morts de 30 secondes par set pour adapter sa stratégie. Jusqu à six changements de joueurs sont autorisés par set, un joueur titulaire ne pouvant être remplacé qu une seule fois par set et devant obligatoirement réintégrer sa position d origine.',
    },
  ],
  ui: {
    teamA: 'Équipe Alpha',
    teamB: 'Équipe Bêta',
    points: 'Points',
    sets: 'Sets',
    set: 'Set',
    match: 'Match',
    serving: 'Au Service',
    sideout: 'Récupération Service',
    rotation: 'Rotation',
    timeout: 'Temps Mort (30s)',
    timeoutsLeft: 'Temps Morts',
    substitutions: 'Rempl.',
    matchPoint: 'Balle de Match',
    setPoint: 'Balle de Set',
    winner: 'Vainqueur du Match',
    reset: 'Nouveau Match',
    resetConfirm: 'Réinitialiser le score du match actuel ?',
    cancel: 'Annuler',
    undo: 'Annuler Action',
    switchSides: 'Changer de Côté',
    fullscreen: 'Plein Écran',
    exitFullscreen: 'Quitter Plein Écran',
    rotateCourt: 'Tourner',
    substitutePlayer: 'Changement',
    matchModeBestOf3: '2 Sets Gagnants',
    matchModeBestOf5: '3 Sets Gagnants',
    matchModeSingleSet: 'Set Unique',
    targetPoints25: 'Set à 25 pts (+2)',
    targetPoints15: 'Tie-break à 15 pts (+2)',
    pos1RightBack: 'P1 Arrière Droit (Service)',
    pos2RightFront: 'P2 Avant Droit',
    pos3MiddleFront: 'P3 Avant Centre',
    pos4LeftFront: 'P4 Avant Gauche',
    pos5LeftBack: 'P5 Arrière Gauche',
    pos6MiddleBack: 'P6 Arrière Centre',
    liberoLabel: 'Libéro',
    tacticalCourtTitle: 'Rotation Tactique sur le Terrain',
    historyLogTitle: 'Récapitulatif des Sets et Historique',
  },
};
