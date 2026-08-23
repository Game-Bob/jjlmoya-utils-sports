import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-league-manager';
const title = '双循环 单循环 积分制联赛对阵表生成器';
const description = '为您的团体或俱乐部自动生成单循环或双循环联赛对阵表，实时记录每场比分并更新积分榜。支持管理多个联赛并通过链接分享，免注册使用。';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: '我的联赛',
  libraryEyebrow: '保存在此设备上',
  libraryIntro: '为每个团体创建独立联赛，每轮比赛打开即可轻松录入比分并自动更新积分榜。',
  newLeague: '创建新联赛',
  noLeagues: '暂无保存的联赛',
  noLeaguesHint: '您创建的第一个联赛将显示在这里，并保存在当前设备中。',
  leagueNameLabel: '联赛名称',
  leagueNamePlaceholder: '周五夜间联赛',
  teamsLabel: '参赛队伍或选手',
  teamsHint: '每行填写一个名称，或使用逗号分隔粘贴。',
  teamsPlaceholder: '海港城 FC\n北极星\n河畔竞技\n巅峰体育',
  loadExample: '加载示例数据',
  demoLeagueName: '周五夜间联赛',
  demoTeams: '海港城 FC\n北极星\n河畔竞技\n巅峰体育\n老城区',
  formatLabel: '赛制选择',
  singleLeg: '单循环赛',
  singleLegHint: '每对选手比赛一次',
  doubleLeg: '主客场双循环',
  doubleLegHint: '每对选手比赛两次',
  scoringLabel: '积分规则',
  winPoints: '胜',
  drawPoints: '平',
  lossPoints: '负',
  createLeague: '生成联赛和对阵表',
  nameStatus: '请为联赛命名，以便您的团队识别。',
  emptyStatus: '请至少添加两支队伍或选手。',
  minimumStatus: '请再添加一位参赛者以生成赛程。',
  readyStatus: '{count} 名参赛者已就绪。完整赛程将保存在本地。',
  duplicateStatus: '请重命名重复的参赛者 "{name}"。',
  maximumStatus: '每个联赛最多支持 24 名参赛者。',
  longNameStatus: '请将 "{name}" 缩短至 40 个字符以内。',
  importLeague: '导入联赛 JSON',
  importHint: '导入的备份文件包含完整联赛及历史比分。',
  openLeague: '打开',
  share: '分享',
  delete: '删除',
  teamsCount: '支队伍',
  roundsCount: '轮比赛',
  completedLabel: '已完成',
  updatedLabel: '更新时间',
  backToLeagues: '所有联赛',
  newLeagueAction: '新建联赛',
  allChangesSaved: '已自动保存在此设备',
  matchesTab: '比赛对阵',
  standingsTab: '积分榜',
  settingsTab: '设置',
  matchday: '第',
  firstLeg: '上半程',
  secondLeg: '下半程',
  previousRound: '上一轮',
  nextRound: '下一轮',
  fixtures: '对阵安排与比分录入',
  enterResult: '录入比分',
  played: '已完赛',
  pending: '未完赛',
  byeLabel: '轮空',
  byeHint: '本轮该参赛者无比赛。',
  standings: '实时积分榜',
  standingsHint: '当一场比赛的两队比分均录入后，积分榜会自动更新。若积分相同，按净胜球、总进球数和名称排序。',
  positionShort: '排名',
  teamShort: '球队',
  playedShort: '赛',
  wonShort: '胜',
  drawnShort: '平',
  lostShort: '负',
  goalsForShort: '进',
  goalsAgainstShort: '失',
  goalDifferenceShort: '净',
  pointsShort: '分',
  progressLabel: '赛季进度',
  seasonComplete: '赛季已结束',
  shareLeague: '分享联赛',
  downloadLeague: '下载备份',
  copiedLeague: '包含当前联赛状态的分享链接已复制到剪贴板。',
  copyFailed: '浏览器阻止了链接复制。',
  downloadedLeague: '完整联赛备份已下载。',
  leagueSettings: '联赛设置',
  settingsHint: '可修改联赛名称或胜平负积分规则。已录入的比分保持不变。',
  saveSettings: '保存设置',
  settingsSaved: '设置已保存，积分榜已重新计算。',
  dangerZone: '危险区域',
  deleteLeague: '删除联赛',
  confirmDelete: '此操作将从本设备中永久删除该联赛及其所有比赛记录。',
  importedLeague: '联赛已成功导入为新的本地副本。',
  importFailed: '该文件不是有效的联赛备份文件。',
  sharedCopy: '分享的副本',
  formatSingleMeta: '单循环赛',
  formatDoubleMeta: '双循环赛',
};

const faq = [
  {
    question: '我是否可以同时管理多个循环赛联赛？',
    answer: '是的。每个联赛都会独立保存在您的设备中，各自拥有独立的参赛者、对阵表、比分和积分规则。',
  },
  {
    question: '如何录入或修改比赛比分？',
    answer: '打开联赛，选择对应轮次并在比赛行中输入双方比分。修改比分后积分榜会立即自动重新计算。',
  },
  {
    question: '积分榜是如何计算的？',
    answer: '默认胜一场得3分，平一场得1分，负一场得0分。积分相同按净胜球、总进球数排列。',
  },
  {
    question: '参赛人数为奇数时如何处理？',
    answer: '每轮比赛会自动安排一名参赛者轮空，每位参赛者在循环赛中轮流轮空一次。',
  },
  {
    question: '分享链接包含哪些内容？',
    answer: '分享链接包含生成时联赛名称、参赛者、赛制、积分规则及所有已录入比分的快照。',
  },
  {
    question: '后续更新比分后，已分享的链接会实时同步吗？',
    answer: '不会。分享链接是生成时的静态快照。若有新比分录入，请重新生成并发送新链接。',
  },
  {
    question: '如何备份或迁移我的联赛数据？',
    answer: '您可以将联赛下载为 JSON 备份文件，随时在其他设备上导入恢复。',
  },
];

const howTo = [
  { name: '创建团队联赛', text: '输入赛事名称，添加参赛队员并选择单循环或双循环赛制。' },
  { name: '选择当前轮次', text: '使用轮次按钮或前后切换按钮进入正在进行的比赛轮次。' },
  { name: '录入比赛比分', text: '输入已结束比赛的双方比分，系统会自动更新积分榜。' },
  { name: '查看实时积分榜', text: '在比赛对阵旁查看实时积分榜，或切换至积分榜标签页查看详细数据。' },
  { name: '分享或备份联赛', text: '复制快照链接发给成员，或下载 JSON 文件备份赛程与比分。' },
];

const seo = [
  {
    type: 'title' as const,
    text: '比赛开始前的赛程规划与准备',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '循环联赛在生成赛程前明确规则效果最佳。请提前确认参赛名单、赛程形式、胜平负积分及平分打破规则。',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>参赛名单:</strong> 使用统一清晰的队伍名称。',
      '<strong>赛季形式:</strong> 短期比赛选择单循环，完整赛季选择主客场双循环。',
      '<strong>积分规则:</strong> 默认为胜3分、平1分、负0分。',
      '<strong>平分规则:</strong> 开赛前约定积分相同时的优先比较标准。',
    ],
  },
  {
    type: 'title' as const,
    text: '选择适合您团队的赛程长度',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '当有 <strong>n</strong> 名参赛者时，单循环赛共包含 n × (n - 1) ÷ 2 场比赛。双循环赛比赛总数翻倍。',
  },
  {
    type: 'table' as const,
    headers: ['参赛人数', '单循环轮次', '单循环总场次', '双循环总场次'],
    rows: [
      ['4队', '3轮', '6场', '12场'],
      ['5队', '5轮（每轮一队轮空）', '10场', '20场'],
      ['8队', '7轮', '28场', '56场'],
      ['12队', '11轮', '66场', '132场'],
    ],
  },
  {
    type: 'title' as const,
    text: '可靠的成绩与积分管理',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>统一记录员:</strong> 指定一人统一录入成绩，避免多人记录引发冲突。',
      '<strong>完整录入比分:</strong> 只有录入双方比分后才会计入积分榜。',
      '<strong>即时纠错:</strong> 修改任何比分都会自动重新计算整个积分榜。',
      '<strong>完赛后分享:</strong> 每轮比赛结束后重新复制新链接分发给成员。',
      '<strong>定期备份:</strong> 清理浏览器缓存前下载 JSON 备份文件。',
    ],
  },
  {
    type: 'title' as const,
    text: '如何正确解读联赛积分榜',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '积分榜统计已赛场次、胜、平、负、进球数、失球数、净胜球及总积分。默认按 <strong>积分 ＞ 净胜球 ＞ 进球数</strong> 排序。',
  },
  {
    type: 'tip' as const,
    title: '提前约定完全平分时的处理规则',
    html: '请提前约定当积分和得失球完全相同时，是通过胜负关系还是加赛决定名次。',
  },
  {
    type: 'title' as const,
    text: '奇数队伍参赛时的轮空机制',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '当参赛队伍数量为奇数时，系统会自动在每轮比赛中轮流安排一支队伍轮空。',
  },
  {
    type: 'tip' as const,
    title: '分享链接为生成时刻的快照',
    html: '请注意分享链接发送的是当时的状态。如有新比赛结果，请重新复制并发送最新链接。',
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
  faqTitle: '双循环 单循环 积分制联赛对阵表生成器 常见问题',
  faq,
  bibliographyTitle: '联赛赛制参考资料',
  bibliography,
  howTo,
  schemas,
};
