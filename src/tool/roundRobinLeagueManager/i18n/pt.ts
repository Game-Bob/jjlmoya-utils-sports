import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'gestor-liga-pontos-corridos';
const title = 'Gestor de Liga de Pontos Corridos para Grupos';
const description = 'Crie a tabela de jogos no sistema todos contra todos para o seu grupo, registe todos os resultados e acompanhe a classificação. Gerencie várias ligas e partilhe um link completo sem registo.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'As minhas ligas',
  libraryEyebrow: 'Guardado neste dispositivo',
  libraryIntro: 'Crie uma liga para cada grupo, reabra-a em cada jornada e mantenha todos os resultados organizados.',
  newLeague: 'Criar nova liga',
  noLeagues: 'Nenhuma liga guardada',
  noLeaguesHint: 'A sua primeira liga aparecerá aqui e ficará disponível neste dispositivo.',
  leagueNameLabel: 'Nome da liga',
  leagueNamePlaceholder: 'Torneio de Sexta à Noite',
  teamsLabel: 'Equipas ou jogadores',
  teamsHint: 'Um nome por linha ou separados por vírgulas.',
  teamsPlaceholder: 'Atlético do Norte\nDesportivo do Sul\nUnião Leste\nReal Oeste',
  loadExample: 'Carregar exemplo pronto',
  demoLeagueName: 'Torneio de Sexta à Noite',
  demoTeams: 'Atlético do Norte\nDesportivo do Sul\nUnião Leste\nReal Oeste\nVila Centro',
  formatLabel: 'Formato da época',
  singleLeg: 'Apenas uma volta',
  singleLegHint: 'Cada confronto realiza-se uma única vez',
  doubleLeg: 'Ida e volta',
  doubleLegHint: 'Cada confronto realiza-se duas vezes',
  scoringLabel: 'Pontos na classificação',
  winPoints: 'Vitória',
  drawPoints: 'Empate',
  lossPoints: 'Derrota',
  createLeague: 'Criar liga e calendário',
  nameStatus: 'Dê um nome à liga para que o seu grupo a identifique facilmente.',
  emptyStatus: 'Adicione pelo menos duas equipas ou participantes.',
  minimumStatus: 'Adicione mais um participante para gerar o calendário.',
  readyStatus: '{count} participantes prontos. A época completa será guardada localmente.',
  duplicateStatus: 'Renomeie o participante duplicado "{name}".',
  maximumStatus: 'Use no máximo 24 participantes por liga.',
  longNameStatus: 'Encurte "{name}" para 40 caracteres ou menos.',
  importLeague: 'Importar JSON da liga',
  importHint: 'A cópia de segurança contém a liga completa com os resultados.',
  openLeague: 'Abrir',
  share: 'Partilhar',
  delete: 'Eliminar',
  teamsCount: 'equipas',
  roundsCount: 'jornadas',
  completedLabel: 'jogados',
  updatedLabel: 'Atualizado',
  backToLeagues: 'Todas as ligas',
  newLeagueAction: 'Nova liga',
  allChangesSaved: 'Guardado neste dispositivo',
  matchesTab: 'Jogos',
  standingsTab: 'Classificação',
  settingsTab: 'Definições',
  matchday: 'Jornada',
  firstLeg: 'Primeira volta',
  secondLeg: 'Segunda volta',
  previousRound: 'Jornada anterior',
  nextRound: 'Jornada seguinte',
  fixtures: 'Jogos e resultados',
  enterResult: 'Inserir resultado',
  played: 'Jogado',
  pending: 'Pendente',
  byeLabel: 'Folga',
  byeHint: 'Este participante folga nesta jornada.',
  standings: 'Tabela em direto',
  standingsHint: 'A tabela é atualizada ao introduzir ambos os marcadores de um jogo. Em caso de empate, ordena-se por pontos, diferença de golos, golos marcados e nome.',
  positionShort: 'Pos',
  teamShort: 'Equipa',
  playedShort: 'J',
  wonShort: 'V',
  drawnShort: 'E',
  lostShort: 'D',
  goalsForShort: 'GM',
  goalsAgainstShort: 'GS',
  goalDifferenceShort: 'DG',
  pointsShort: 'Pts',
  progressLabel: 'Progresso da época',
  seasonComplete: 'Época concluída',
  shareLeague: 'Partilhar liga',
  downloadLeague: 'Descarregar cópia de segurança',
  copiedLeague: 'Foi copiado um link com o estado atual da liga.',
  copyFailed: 'O navegador bloqueou a cópia do link.',
  downloadedLeague: 'A cópia de segurança completa da liga foi descarregada.',
  leagueSettings: 'Definições da liga',
  settingsHint: 'Renomeie a liga ou altere os pontos por resultado. Os marcadores existentes mantêm-se.',
  saveSettings: 'Guardar definições',
  settingsSaved: 'Definições guardadas e tabela recalculada.',
  dangerZone: 'Zona de perigo',
  deleteLeague: 'Eliminar liga',
  confirmDelete: 'Esta ação eliminará a liga e todos os resultados deste dispositivo.',
  importedLeague: 'A liga foi importada como uma nova cópia local.',
  importFailed: 'Esse ficheiro não é uma cópia de segurança válida.',
  sharedCopy: 'Cópia partilhada',
  formatSingleMeta: 'volta única',
  formatDoubleMeta: 'ida e volta',
};

const faq = [
  {
    question: 'Posso gerir mais do que uma liga de pontos corridos?',
    answer: 'Sim. Cada liga é guardada separadamente no seu dispositivo com os seus próprios participantes, jogos, marcadores e sistema de pontuação.',
  },
  {
    question: 'Como insiro ou corrijo um resultado?',
    answer: 'Abra a liga, selecione a jornada e digite ambos os resultados. A classificação atualiza-se imediatamente.',
  },
  {
    question: 'Como é calculada a tabela de classificação?',
    answer: 'Por predefinição, são atribuídos três pontos por vitória, um por empate e zero por derrota. O desempate considera pontos, diferença de golos e golos marcados.',
  },
  {
    question: 'O que acontece com um número ímpar de participantes?',
    answer: 'Em cada jornada um participante folga. A folga roda de forma justa para que todos joguem o mesmo número de partidas.',
  },
  {
    question: 'O que inclui o link de partilha?',
    answer: 'O link contém uma cópia exata do nome da liga, participantes, formato, pontuação e todos os resultados inseridos.',
  },
  {
    question: 'O link partilhado atualiza-se automaticamente?',
    answer: 'Não. O link é uma imagem estática criada no momento de copiar. Se adicionar novos resultados, gere um novo link.',
  },
  {
    question: 'Como posso fazer uma cópia de segurança da minha liga?',
    answer: 'Descarregue o ficheiro JSON de cópia de segurança. Pode importá-lo noutro dispositivo a qualquer momento.',
  },
];

const howTo = [
  { name: 'Crie a liga do grupo', text: 'Escreva o nome do torneio, adicione os participantes e escolha o formato de volta única ou ida e volta.' },
  { name: 'Abra a jornada atual', text: 'Navegue até à jornada desejada através dos botões numerados ou das setas.' },
  { name: 'Insira os marcadores', text: 'Digite os resultados de cada jogo concluído para atualizar a classificação.' },
  { name: 'Verifique a classificação', text: 'Acompanhe a tabela em direto junto aos jogos ou consulte a aba Classificação.' },
  { name: 'Partilhe ou descarregue', text: 'Copie o link de partilha para o grupo ou descarregue o ficheiro JSON de cópia de segurança.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planeamento da Liga Antes do Primeiro Jogo',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Uma liga de pontos corridos funciona melhor quando as regras são combinadas antecipadamente. Confirme a lista de equipas, escolha o formato e defina a pontuação.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Participantes:</strong> Use nomes claros para evitar confusões nos resultados.',
      '<strong>Formato:</strong> Escolha volta única para torneios curtos ou ida e volta para uma época completa.',
      '<strong>Pontuação:</strong> O padrão é 3 por vitória, 1 por empate e 0 por derrota.',
      '<strong>Desempate:</strong> Defina os critérios antes de começar a competição.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Escolha a Duração Adequada ao Seu Grupo',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Com <strong>n</strong> participantes, uma volta única requer n × (n - 1) ÷ 2 jogos. Ida e volta duplica essa quantidade.',
  },
  {
    type: 'table' as const,
    headers: ['Participantes', 'Jornadas (Volta única)', 'Jogos (Volta única)', 'Jogos (Ida e volta)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (com uma folga por jornada)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Gestão Fiável dos Resultados',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Um único apontador:</strong> Centralize o registo numa só pessoa para evitar incoerências.',
      '<strong>Insira ambos os resultados:</strong> Um resultado parcial não altera a classificação.',
      '<strong>Correção imediata:</strong> Qualquer alteração recalcula imediatamente toda a tabela.',
      '<strong>Partilhe no fim da jornada:</strong> Envie um novo link após o término dos jogos.',
      '<strong>Guarde o ficheiro JSON:</strong> Faça o download antes de limpar os dados do navegador.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Como Ler a Tabela de Classificação',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'A tabela contabiliza jogos realizados, vitórias, empates, derrotas, golos marcados, golos sofridos, diferença de golos e pontos. A ordem segue <strong>pontos, diferença de golos e golos marcados</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Defina os critérios em caso de empate absoluto',
    html: 'Decida previamente se um empate total se resolve por confronto direto ou jogo de desempate.',
  },
  {
    type: 'title' as const,
    text: 'Gestão de Grupos com Número Ímpar de Equipas',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Se o número de participantes for ímpar, o sistema atribui automaticamente uma folga rotativa em cada jornada.',
  },
  {
    type: 'tip' as const,
    title: 'O link partilhado é uma foto fixa',
    html: 'Lembre-se de que partilhar um link envia uma cópia estática. Se houver novos marcadores, gere um novo link.',
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
  faqTitle: 'Perguntas Frequentes sobre o Gestor de Liga de Pontos Corridos',
  faq,
  bibliographyTitle: 'Referências sobre Formatos de Liga',
  bibliography,
  howTo,
  schemas,
};
