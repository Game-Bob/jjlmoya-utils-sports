import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyball-scorekeeper';
const title = 'バレーボール得点板: リアルタイムスコア・ローテーション管理・FIVB公式ルール';
const description = 'FIVB公式ルール準拠のプロ仕様バレーボール得点板および戦術ローテーション管理ツール。ポイント、セット、時計回りのポジション移動、タイムアウト、選手交代をリアルタイムで追跡。';

const faqData = [
  {
    question: 'バレーボールでサーブ権獲得時（サイドアウト）のローテーションはどのように動きますか？',
    answer: 'レシーブ側のチームがラリーに勝利して得点すると、サーブ権を獲得します（サイドアウト）。サーブを打つ前に、コート上の6人の選手は時計回りに1つずつ位置を移動します。ポジション2の選手がポジション1（サーバー）へ、1は6へ、6は5へ、5は4へ、4は3へ、3は2へ移動します。',
  },
  {
    question: 'バレーボールで1セットおよび試合に勝利するには何点必要ですか？',
    answer: '第1セットから第4セットまでは2点差以上をつけて25点を先取するとセット獲得となります。24-24のデュースになった場合は2点差がつくまで継続します。最終第5セット（タイブレーク）は2点差以上をつけて15点を先取したチームが勝者となります。',
  },
  {
    question: '1セット中に要求できるタイムアウトと選手交代の回数は？',
    answer: 'FIVB公式規則により、各チームは1セットにつき最大2回の30秒タイムアウトと最大6回の選手交代が認められています。セットが新しくなるたびにタイムアウトと交代の回数はリセットされます。',
  },
  {
    question: 'バレーボールコートの6つの公式ポジションとは？',
    answer: 'ポジションは1から6の番号で表されます。ポジション1はライトバック（サーバー）、ポジション2はライトフロント、ポジション3はセンターフロント、ポジション4はレフトフロント、ポジション5はレフトバック、ポジション6はセンターバックです。',
  },
  {
    question: 'スマートフォンやタブレットで試合中に操作するには？',
    answer: 'タッチパネルに最適化されています。大きな得点表示やプラスボタンをタップするだけで素早く加点できます。30秒タイムアウトのカウントダウン、選手交代、コートチェンジもワンタップで行えます。',
  },
];

const howToData = [
  { name: '試合形式の選択', text: '5セットマッチ、3セットマッチ、または1セットのみを選択します。' },
  { name: '得点の記録', text: 'チームカードをタップして得点を加算します。サイドアウトと選手ローテーションは自動で連動します。' },
  { name: 'タイムアウトと戦術管理', text: '30秒タイムアウトのカウントダウンを開始し、選手交代を記録し、コート上のローテーションを確認します。' },
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'FIVB公式バレーボールルールとラリーポイント制度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インドアバレーボールではラリーポイント制が採用されており、サーブ権に関係なくラリーを制したチームが得点を獲得します。FIVB公式試合では厳密なセット管理、サイドアウト時の時計回りローテーション、およびタイムアウト規定の順守が義務付けられています。',
    },
    {
      type: 'title',
      text: 'コート上のポジション番号とアタック・ディフェンスゾーン',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '18×9メートルのコートは6つのローテーションゾーンに分かれています。後衛守備ラインはポジション1（ライトバック/サーバー）、6（センターバック）、5（レフトバック）で構成され、ネット際の前衛攻撃ラインは2（ライトフロント）、3（センターフロント）、4（レフトフロント）で構成されます。サーブ打球の瞬間、選手は相対的な配置規則を遵守しなければなりません。',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: '最終決定セット（タイブレーク）の規定',
      html: '<p>試合が最終セット（5セットマッチの第5セットまたは3セットマッチの第3セット）にもつれ込んだ場合、目標得点は<strong>15点</strong>になります。リードしているチームが8点に達した時点で両チームはコートチェンジを行い、勝利には2点差が必要です。</p>',
    },
    {
      type: 'title',
      text: 'タイムアウトと選手交代の管理規則',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '各チームは戦術確認や流れを断ち切るために1セットにつき2回の30秒タイムアウトが認められています。選手交代は1セットにつき最大6回まで可能で、スターティングメンバーは1セットに1回のみ交代して退場でき、再出場時は元のポジションに戻る必要があります。',
    },
  ],
  ui: {
    teamA: 'チーム・アルファ',
    teamB: 'チーム・ベータ',
    points: '得点',
    sets: 'セット',
    set: 'セット',
    match: '試合',
    serving: 'サーブ',
    sideout: 'サイドアウト',
    rotation: 'ローテーション',
    timeout: 'タイムアウト (30秒)',
    timeoutsLeft: 'タイムアウト',
    substitutions: '交代',
    matchPoint: 'マッチポイント',
    setPoint: 'セットポイント',
    winner: '試合勝者',
    reset: '新しい試合',
    resetConfirm: '現在のスコアをリセットして新ゲームを開始しますか？',
    cancel: 'キャンセル',
    undo: '元に戻す',
    switchSides: 'コートチェンジ',
    fullscreen: '全画面表示',
    exitFullscreen: '全画面解除',
    rotateCourt: '回転',
    substitutePlayer: '交代',
    matchModeBestOf3: '3セットマッチ',
    matchModeBestOf5: '5セットマッチ',
    matchModeSingleSet: '1セットのみ',
    targetPoints25: '25点先取 (+2)',
    targetPoints15: 'タイブレーク 15点先取 (+2)',
    pos1RightBack: 'P1 ライトバック (サーブ)',
    pos2RightFront: 'P2 ライトフロント',
    pos3MiddleFront: 'P3 センターフロント',
    pos4LeftFront: 'P4 レフトフロント',
    pos5LeftBack: 'P5 レフトバック',
    pos6MiddleBack: 'P6 センターバック',
    liberoLabel: 'リベロ',
    tacticalCourtTitle: '戦術コートローテーション',
    historyLogTitle: 'セット結果と履歴',
  },
};
