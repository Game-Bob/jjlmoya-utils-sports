import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyball-scorekeeper';
const title = '排球记分板: 实时比分、轮转站位与FIVB官方规则记录器';
const description = '符合FIVB国际排联规则的专业室内排球记分板与战术轮转追踪器。实时记录每球得分、局数、六人顺时针轮转、暂停及换人。';

const faqData = [
  {
    question: '排球比赛中获得发球权（下球/换发）后如何进行轮转？',
    answer: '当接发球方在对攻中获胜得分时，将赢得发球权（Side-out）。在发球前，场上的六名队员必须按顺时针方向轮转一个位置：2号位队员移动到1号位发球，1号位到6号位，6号位到5号位，5号位到4号位，4号位到3号位，3号位到2号位。',
  },
  {
    question: '排球比赛中赢得一局及整场比赛需要达到多少分？',
    answer: '第1局至第4局为25分制，且必须领先至少2分方可获胜。若比分达到24-24平局，比赛继续直至一方领先2分。决胜局（5局3胜制中的第5局或3局2胜制中的第3局）为15分制，同样需领先2分。',
  },
  {
    question: '排球比赛每局允许申请多少次暂停和换人？',
    answer: '根据FIVB国际排联官方规则，每支球队在每一局中最多可请求2次每次30秒的常规暂停，以及最多6人次换人。每局比赛开始时暂停与换人次数重新计数。',
  },
  {
    question: '室内排球场上的6个官方站位编号分别代表什么位置？',
    answer: '站位编号从1号到6号：1号位为后排右侧（发球位），2号位为前排右侧，3号位为前排中间（副攻/二传位），4号位为前排左侧（主攻位），5号位为后排左侧，6号位为后排中间。',
  },
  {
    question: '在手机或平板电脑上如何便捷记录比赛？',
    answer: '界面专为触屏设备优化。直接点击大比分数字或加号即可为球队计分。通过一键操作即可启动30秒暂停倒计时、记录替补换人及交换场地。',
  },
];

const howToData = [
  { name: '选择赛制规则', text: '选择5局3胜制、3局2胜制或单局决胜模式。' },
  { name: '记录每球得分', text: '轻触对应球队卡片以增加比分，换发球与队员轮转将自动同步完成。' },
  { name: '管理暂停与战术轮转', text: '启动30秒暂停倒计时，登记换人，并在战术球场图上直观查看轮转位置。' },
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题解答',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'FIVB国际排联官方规则与每球得分制体系',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '室内排球采用每球得分制（Rally Point System），无论哪一方发球，赢得回合的一方均直接计1分。在FIVB官方比赛中，必须严格执行局分记录、夺回发球权时的顺时针轮转规则以及技术暂停管理。',
    },
    {
      type: 'title',
      text: '球场6个位置编号与前后排战术区域详解',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '18×9米的排球场分为6个轮转区域。后排防守线由1号位（后排右/发球）、6号位（后排中）和5号位（后排左）组成；前排进攻线由2号位（前排右）、3号位（前排中）和4号位（前排左）组成。在发球击球瞬间，场上六名队员必须严格保持相对站位规则。',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: '决胜局 Tiebreak 规则要点',
      html: '<p>当比赛进入最终决胜局（5局3胜制的第5局或3局2胜制的第3局）时，目标分调整为<strong>15分</strong>。当领先方达到8分时双方立即交换场地，获胜依然必须保持2分领先优势。</p>',
    },
    {
      type: 'title',
      text: '暂停与换人管理规定',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '每队每局可请求2次每次30秒的常规暂停以调整战术。每局最多允许6人次换人，首发队员在同一局中只能被替换下场一次，且再次上场时必须回到原先的轮转位置。',
    },
  ],
  ui: {
    teamA: '阿尔法队',
    teamB: '贝塔队',
    points: '得分',
    sets: '局数',
    set: '局',
    match: '比赛',
    serving: '发球中',
    sideout: '夺回发球权',
    rotation: '轮转',
    timeout: '暂停 (30秒)',
    timeoutsLeft: '剩余暂停',
    substitutions: '换人',
    matchPoint: '赛点',
    setPoint: '局点',
    winner: '比赛胜者',
    reset: '新比赛',
    resetConfirm: '确定要重置当前比赛比分吗？',
    cancel: '取消',
    undo: '撤销',
    switchSides: '交换场地',
    fullscreen: '全屏模式',
    exitFullscreen: '退出全屏',
    rotateCourt: '顺时针轮转',
    substitutePlayer: '换人',
    matchModeBestOf3: '3局2胜',
    matchModeBestOf5: '5局3胜',
    matchModeSingleSet: '单局模式',
    targetPoints25: '25分制 (+2)',
    targetPoints15: '决胜局15分制 (+2)',
    pos1RightBack: '1号位: 后排右 (发球)',
    pos2RightFront: '2号位: 前排右',
    pos3MiddleFront: '3号位: 前排中',
    pos4LeftFront: '4号位: 前排左',
    pos5LeftBack: '5号位: 后排左',
    pos6MiddleBack: '6号位: 后排中',
    liberoLabel: '自由人',
    tacticalCourtTitle: '战术球场轮转站位图',
    historyLogTitle: '局分摘要与历史记录',
  },
};
