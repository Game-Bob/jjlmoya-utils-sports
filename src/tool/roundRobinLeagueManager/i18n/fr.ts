import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'gestionnaire-ligue-tous-contre-tous';
const title = 'Gestionnaire de Ligue Tous Contre Tous';
const description = 'Créez le calendrier de championnat pour votre groupe, saisissez les résultats et suivez le classement. Gérez plusieurs ligues et partagez un instantané complet par lien sans inscription.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Mes ligues',
  libraryEyebrow: 'Enregistré sur cet appareil',
  libraryIntro: 'Créez une ligue pour chaque groupe, rouvrez-la à chaque journée et gardez tous les résultats organisés.',
  newLeague: 'Créer une nouvelle ligue',
  noLeagues: 'Aucune ligue enregistrée',
  noLeaguesHint: 'Votre première ligue apparaîtra ici et restera disponible sur cet appareil.',
  leagueNameLabel: 'Nom de la ligue',
  leagueNamePlaceholder: 'Ligue du Vendredi Soir',
  teamsLabel: 'Équipes ou joueurs',
  teamsHint: 'Un nom par ligne ou séparés par des virgules.',
  teamsPlaceholder: 'Étoile du Nord\nSporting Ouest\nUnion Centre\nOlympique Sud',
  loadExample: 'Charger un exemple prêt',
  demoLeagueName: 'Ligue du Vendredi Soir',
  demoTeams: 'Étoile du Nord\nSporting Ouest\nUnion Centre\nOlympique Sud\nAS Littoral',
  formatLabel: 'Format de saison',
  singleLeg: 'Match simple',
  singleLegHint: 'Chaque confrontation se joue une fois',
  doubleLeg: 'Aller et retour',
  doubleLegHint: 'Chaque confrontation se joue deux fois',
  scoringLabel: 'Points au classement',
  winPoints: 'Victoire',
  drawPoints: 'Égalité',
  lossPoints: 'Défaite',
  createLeague: 'Créer la ligue et le calendrier',
  nameStatus: 'Donnez un nom à cette ligue pour que votre groupe puisse la reconnaître.',
  emptyStatus: 'Ajoutez au moins deux équipes ou joueurs.',
  minimumStatus: 'Ajoutez un participant de plus pour générer le calendrier.',
  readyStatus: '{count} participants prêts. La saison complète sera enregistrée localement.',
  duplicateStatus: 'Renommez le participant en double "{name}".',
  maximumStatus: 'N\'utilisez pas plus de 24 participants par ligue.',
  longNameStatus: 'Raccourcissez "{name}" à 40 caractères ou moins.',
  importLeague: 'Importer JSON de ligue',
  importHint: 'La sauvegarde contient la ligue complète avec ses résultats.',
  openLeague: 'Ouvrir',
  share: 'Partager',
  delete: 'Supprimer',
  teamsCount: 'équipes',
  roundsCount: 'journées',
  completedLabel: 'joués',
  updatedLabel: 'Mis à jour',
  backToLeagues: 'Toutes les ligues',
  newLeagueAction: 'Nouvelle ligue',
  allChangesSaved: 'Enregistré sur cet appareil',
  matchesTab: 'Matchs',
  standingsTab: 'Classement',
  settingsTab: 'Paramètres',
  matchday: 'Journée',
  firstLeg: 'Aller',
  secondLeg: 'Retour',
  previousRound: 'Journée précédente',
  nextRound: 'Journée suivante',
  fixtures: 'Rencontres et résultats',
  enterResult: 'Saisir le score',
  played: 'Joué',
  pending: 'En attente',
  byeLabel: 'Exempt',
  byeHint: 'Ce participant ne joue pas lors de cette journée.',
  standings: 'Classement en direct',
  standingsHint: 'Le tableau se met à jour une fois les deux scores saisis. En cas d\'égalité, l\'ordre dépend des points, différence de buts, buts marqués et nom.',
  positionShort: 'Pos',
  teamShort: 'Équipe',
  playedShort: 'J',
  wonShort: 'V',
  drawnShort: 'N',
  lostShort: 'D',
  goalsForShort: 'BP',
  goalsAgainstShort: 'BC',
  goalDifferenceShort: 'Diff',
  pointsShort: 'Pts',
  progressLabel: 'Progression de la saison',
  seasonComplete: 'Saison terminée',
  shareLeague: 'Partager la ligue',
  downloadLeague: 'Télécharger la sauvegarde',
  copiedLeague: 'Un lien avec l\'état actuel de la ligue a été copié.',
  copyFailed: 'Le navigateur a bloqué la copie du lien.',
  downloadedLeague: 'La sauvegarde complète de la ligue a été téléchargée.',
  leagueSettings: 'Paramètres de la ligue',
  settingsHint: 'Renommez la ligue ou modifiez l\'attribution des points. Les scores existants restent inchangés.',
  saveSettings: 'Enregistrer les paramètres',
  settingsSaved: 'Paramètres enregistrés et classement recalculé.',
  dangerZone: 'Zone dangereuse',
  deleteLeague: 'Supprimer la ligue',
  confirmDelete: 'Cela supprimera la ligue et tous ses résultats de cet appareil.',
  importedLeague: 'La ligue complète a été importée sous forme de nouvelle copie locale.',
  importFailed: 'Ce fichier n\'est pas une sauvegarde de ligue valide.',
  sharedCopy: 'Copie partagée',
  formatSingleMeta: 'championnat simple',
  formatDoubleMeta: 'championnat aller-retour',
};

const faq = [
  {
    question: 'Puis-je gérer plusieurs ligues en tous contre tous ?',
    answer: 'Oui. Chaque ligue est conservée séparément sur votre appareil avec ses propres participants, rencontres, scores et barème de points.',
  },
  {
    question: 'Comment saisir ou corriger un résultat ?',
    answer: 'Ouvrez la ligue, sélectionnez la journée et tapez les deux scores. Les modifications mettent instantanément à jour le classement.',
  },
  {
    question: 'Comment le classement est-il calculé ?',
    answer: 'Par défaut, trois points sont attribués pour une victoire, un pour un match nul et zéro pour une défaite. L\'égalité départage par points, différence de buts et buts marqués.',
  },
  {
    question: 'Que se passe-t-il avec un nombre impair de participants ?',
    answer: 'Un participant est exempt à chaque journée. L\'exemption tourne de manière équitable pour que tout le monde joue le même nombre de matchs.',
  },
  {
    question: 'Que contient le lien de partage ?',
    answer: 'Le lien contient une capture complète de la ligue avec les équipes, le format, les points et tous les résultats saisis.',
  },
  {
    question: 'Le lien partagé se met-il à jour automatiquement ?',
    answer: 'Non. Le lien est une photo fixe à l\'instant du partage. Si vous ajoutez de nouveaux résultats, générez un nouveau lien.',
  },
  {
    question: 'Comment sauvegarder ou déplacer une ligue ?',
    answer: 'Téléchargez la ligue au format JSON pour pouvoir la réimporter facilement sur un autre appareil.',
  },
];

const howTo = [
  { name: 'Créez la ligue de votre groupe', text: 'Nommez le championnat, ajoutez les participants et choisissez le format de matchs.' },
  { name: 'Ouvrez la journée en cours', text: 'Accédez à la journée souhaitée à l\'aide des boutons numérotés ou des flèches.' },
  { name: 'Saisissez les scores', text: 'Entrez les deux résultats de chaque rencontre terminée pour mettre à jour le classement.' },
  { name: 'Consultez le classement', text: 'Suivez le tableau en direct à côté des matchs ou ouvrez l\'onglet Classement.' },
  { name: 'Partagez ou sauvegardez', text: 'Copiez un lien pour votre groupe ou téléchargez un fichier de sauvegarde JSON.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Organisez la Ligue Avant le Premier Match',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Un championnat en tous contre tous fonctionne mieux quand le groupe valide les règles à l\'avance. Confirmez la liste des équipes, le format de la saison et l\'attribution des points.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Participants :</strong> utilisez des noms clairs pour éviter toute confusion dans les résultats.',
      '<strong>Format :</strong> optez pour un match simple pour un tournoi court ou aller-retour pour une saison complète.',
      '<strong>Points :</strong> 3 points par victoire, 1 par nul et 0 par défaite par défaut.',
      '<strong>Départage :</strong> définissez les règles d\'égalité avant le début de la compétition.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Choisissez la Durée Adaptée à Votre Groupe',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Avec <strong>n</strong> participants, une phase simple comprend n × (n - 1) ÷ 2 matchs. L\'aller-retour double ce total.',
  },
  {
    type: 'table' as const,
    headers: ['Participants', 'Journées (Simple)', 'Matchs (Simple)', 'Matchs (Aller-Retour)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (avec un exempt)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Gérez les Résultats en Toute Fiabilité',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Un seul responsable :</strong> centralisez la saisie auprès d\'une seule personne.',
      '<strong>Saisissez les deux scores :</strong> un score incomplet ne modifie pas le classement.',
      '<strong>Corrections immédiates :</strong> toute modification recalcule automatiquement la ligue.',
      '<strong>Partagez après la journée :</strong> envoyez un nouveau lien une fois les matchs terminés.',
      '<strong>Sauvegarde JSON :</strong> téléchargez votre fichier avant de vider les données du navigateur.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Lire Correctement le Tableau de Classement',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Le classement comptabilise les matchs joués, victoires, nuls, défaites, buts marqués, buts encaissés, différence de buts et points. Le tri s\'effectue par <strong>points, différence de buts et buts marqués</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Définissez le départage en cas d\'égalité absolue',
    html: 'Décidez à l\'avance si une égalité stricte se règle par la confrontation directe ou un match d\'appui.',
  },
  {
    type: 'title' as const,
    text: 'Gestion des Groupes Impairs',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'En cas de nombre impair de participants, une exemption tourne à chaque journée afin d\'assurer un nombre de matchs équivalent.',
  },
  {
    type: 'tip' as const,
    title: 'Un lien partagé est une capture fixe',
    html: 'Considérez le lien comme une sauvegarde à un instant donné. En cas de nouveaux matchs, générez un nouveau lien.',
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
  faqTitle: 'Questions Fréquentes sur le Gestionnaire de Ligue Tous Contre Tous',
  faq,
  bibliographyTitle: 'Références sur les Formats de Championnat',
  bibliography,
  howTo,
  schemas,
};
