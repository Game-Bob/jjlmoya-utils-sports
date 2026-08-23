import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-league-manager';
const title = '総当たり戦 リーグ戦対戦表作成ツール';
const description = 'グループや部活動の総当たり戦（リーグ戦）の対戦表を自動作成し、試合結果の記録や順位表の更新を行えるツールです。登録不要で複数の league を管理しリンクで共有できます。';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: '保存されたリーグ一覧',
  libraryEyebrow: 'この端末に保存中',
  libraryIntro: 'グループごとにリーグを作成し、節ごとに結果を入力して順位表を簡単に管理できます。',
  newLeague: '新しいリーグを作成',
  noLeagues: '保存されたリーグはありません',
  noLeaguesHint: '作成した最初のリーグがここに表示され、端末に保存されます。',
  leagueNameLabel: 'リーグ名',
  leagueNamePlaceholder: '金曜ナイターリーグ',
  teamsLabel: 'チーム名・参加者名',
  teamsHint: '1行に1名（チーム）ずつ入力するか、カンマ区切りで貼り付けてください。',
  teamsPlaceholder: 'サウスFC\nノーススター\nリバーサイド\nサンミットAC',
  loadExample: 'サンプルデータを読み込む',
  demoLeagueName: '金曜ナイターリーグ',
  demoTeams: 'サウスFC\nノーススター\nリバーサイド\nサンミットAC\nオールドタウン',
  formatLabel: '対戦形式',
  singleLeg: '1回戦総当たり',
  singleLegHint: '各組み合わせで1試合ずつ対戦',
  doubleLeg: 'ホームアンドアウェイ（2回戦）',
  doubleLegHint: '各組み合わせで2試合ずつ対戦',
  scoringLabel: '勝ち点設定',
  winPoints: '勝利',
  drawPoints: '引き分け',
  lossPoints: '敗北',
  createLeague: 'リーグと日程表を作成',
  nameStatus: 'グループで識別しやすいリーグ名を入力してください。',
  emptyStatus: '2つ以上のチームまたは参加者を入力してください。',
  minimumStatus: '日程を作成するにはもう1名参加者を追加してください。',
  readyStatus: '{count} 名の参加者が準備できました。全日程がローカルに保存されます。',
  duplicateStatus: '重複している参加者名 "{name}" を変更してください。',
  maximumStatus: '1つのリーグに登録できるのは最大24名までです。',
  longNameStatus: '名前 "{name}" を40文字以内に短縮してください。',
  importLeague: 'リーグ JSON をインポート',
  importHint: 'バックアップファイルから試合結果を含むリーグ情報を読み込みます。',
  openLeague: '開く',
  share: '共有',
  delete: '削除',
  teamsCount: 'チーム',
  roundsCount: '節',
  completedLabel: '試合終了',
  updatedLabel: '更新日時',
  backToLeagues: 'リーグ一覧へ戻る',
  newLeagueAction: '新規作成',
  allChangesSaved: 'この端末に自動保存済み',
  matchesTab: '対戦日程・結果',
  standingsTab: '順位表',
  settingsTab: '設定',
  matchday: '節',
  firstLeg: '前半戦',
  secondLeg: '後半戦',
  previousRound: '前の節',
  nextRound: '次の節',
  fixtures: '対戦カードとスコア入力',
  enterResult: 'スコア入力',
  played: '終了',
  pending: '未消化',
  byeLabel: '不戦休',
  byeHint: 'この節は試合がありません。',
  standings: 'リアルタイム順位表',
  standingsHint: '両チームのスコアを入力すると順位表が自動更新されます。同点の場合は勝ち点・得失点差・総得点・名前順で並びます。',
  positionShort: '順位',
  teamShort: 'チーム',
  playedShort: '試',
  wonShort: '勝',
  drawnShort: '分',
  lostShort: '敗',
  goalsForShort: '得',
  goalsAgainstShort: '失',
  goalDifferenceShort: '差',
  pointsShort: '点',
  progressLabel: '大会進行度',
  seasonComplete: '全日程終了',
  shareLeague: 'リーグを共有',
  downloadLeague: 'バックアップ保存',
  copiedLeague: '現在のリーグ状態を含む共有リンクをコピーしました。',
  copyFailed: 'ブラウザの設定によりリンクのコピーがブロックされました。',
  downloadedLeague: 'リーグのバックアップファイルをダウンロードしました。',
  leagueSettings: 'リーグ設定',
  settingsHint: 'リーグ名の変更や勝ち点ルールの調整が可能です。入力済みのスコアは維持されます。',
  saveSettings: '設定を保存',
  settingsSaved: '設定を保存し、順位表を再計算しました。',
  dangerZone: '危険な操作',
  deleteLeague: 'リーグを削除',
  confirmDelete: 'この端末からこのリーグと全試合結果が完全に削除されます。',
  importedLeague: '新しいローカルデータとしてリーグをインポートしました。',
  importFailed: '有効なリーグバックアップファイルではありません。',
  sharedCopy: '共有された複製データ',
  formatSingleMeta: '1回戦総当たり',
  formatDoubleMeta: '2回戦総当たり',
};

const faq = [
  {
    question: '複数の総当たりリーグを同時に管理できますか？',
    answer: 'はい。お使いの端末内に複数のリーグを個別に保存でき、それぞれの参加者や試合結果、勝ち点ルールが保持されます。',
  },
  {
    question: '試合結果の入力や修正方法は？',
    answer: 'リーグを開き、対象の節を選んでスコアを入力します。修正したい場合もスコアを直接変更するだけで順位表が自動更新されます。',
  },
  {
    question: '順位表はどのように計算されますか？',
    answer: 'デフォルトでは勝ち＝3点、引き分け＝1点、負け＝0点です。同点時は勝ち点、得失点差、総得点の順で決定します。',
  },
  {
    question: '参加チーム数が奇数の場合はどうなりますか？',
    answer: '毎節1チームずつ順番にお休み（不戦休）が割り当てられ、全チームが公平に同じ試合数をこなします。',
  },
  {
    question: '共有リンクには何が含まれますか？',
    answer: 'リーグ名、参加者名、対戦形式、勝ち点設定、入力済みの全試合結果のスナップショットが含まれます。',
  },
  {
    question: '結果を追加したら共有リンクも自動更新されますか？',
    answer: 'いいえ。リンクは生成時の状態を保持するスナップショットです。新たな結果を追加した場合は再度リンクを発行してください。',
  },
  {
    question: 'データのバックアップや他端末への移行は可能ですか？',
    answer: 'JSONファイルとしてダウンロード保存が可能です。他端末でインポートすれば同じ状態で再開できます。',
  },
];

const howTo = [
  { name: 'リーグを作成する', text: '大会名を入力し、参加者名を入力して対戦形式（1回戦または2回戦）を選択します。' },
  { name: '対戦節を選択する', text: '節選択ボタンまたは矢印で対象の節（ラウンド）を表示します。' },
  { name: 'スコアを入力する', text: '終了した試合のスコアを入力します。両方のスコアが入ると順位表に反映されます。' },
  { name: '順位表を確認する', text: '試合一覧の横にあるリアルタイム順位表、または順位表タブで詳細な成績を確認します。' },
  { name: '共有または保存する', text: '共有リンクをコピーしてメンバーに送るか、JSONファイルでバックアップを保存します。' },
];

const seo = [
  {
    type: 'title' as const,
    text: '大会開始前のルール設定と準備',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '総当たり戦をスムーズに進めるには、日程作成前に参加者リストや勝ち点ルール、同点時の優先順位を明確にしておくことが重要です。',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>参加者名:</strong> 表記ゆれがないよう統一した名前で登録します。',
      '<strong>対戦形式:</strong> 期間に合わせて1回戦総当たりか2回戦（ホーム＆アウェイ）かを選択します。',
      '<strong>勝ち点ルール:</strong> 基本設定は勝3・分1・敗0ですが自由に変更できます。',
      '<strong>順位決定優先順位:</strong> 勝率や得失点差などグループ内の基準を確認しておきます。',
    ],
  },
  {
    type: 'title' as const,
    text: '参加チーム数と必要試合数の目安',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '参加数が <strong>n</strong> の場合、1回戦総当たりの総試合数は n × (n - 1) ÷ 2 となります。2回戦の場合はその2倍になります。',
  },
  {
    type: 'table' as const,
    headers: ['参加数', '節数（1回戦）', '試合数（1回戦）', '試合数（2回戦）'],
    rows: [
      ['4チーム', '3節', '6試合', '12試合'],
      ['5チーム', '5節（各節1チーム休み）', '10試合', '20試合'],
      ['8チーム', '7節', '28試合', '56試合'],
      ['12チーム', '11節', '66試合', '132試合'],
    ],
  },
  {
    type: 'title' as const,
    text: '結果記録と順位管理のポイント',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>記録者の集約:</strong> データ入力者を定めて誤入力を防ぎます。',
      '<strong>スコアの両方入力:</strong> 片方だけの入力では順位表に加算されません。',
      '<strong>入力ミスの即時修正:</strong> 誤ったスコアを修正すると即座に再計算されます。',
      '<strong>節ごとの共有:</strong> 毎節終了後に最新リンクを発行してメンバーに共有します。',
      '<strong>定期バックアップ:</strong> ブラウザの履歴消去に備えJSON保存を活用します。',
    ],
  },
  {
    type: 'title' as const,
    text: '順位表の読み方と並び順基準',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '順位表には消化試合数、勝・分・敗、総得点、総失点、得失点差、勝ち点が表示されます。基本順位は <strong>勝ち点 ＞ 得失点差 ＞ 総得点</strong> の順で決定されます。',
  },
  {
    type: 'tip' as const,
    title: '完全同点時の取り決め',
    html: '勝ち点・得失点差・総得点が全て同じ場合の直接対決優先や再試合などのルールを事前決定しておきましょう。',
  },
  {
    type: 'title' as const,
    text: '奇数チーム参加時の運用',
    html: '参加チーム数が奇数の場合、ツールが自動で毎節1チームに不戦休を割り振ります。全員が均等にお休みを消化しながら進行できます。',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '不戦休は不戦勝とは異なり、試合数や勝ち点には影響しません。',
  },
  {
    type: 'tip' as const,
    title: '共有リンクは保存時点のスナップショットです',
    html: '共有リンクを受け取った人は自分用の独立したコピーを閲覧します。データ変更時は新リンクを送信してください。',
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
  faqTitle: '総当たり戦 リーグ戦対戦表作成ツール FAQ',
  faq,
  bibliographyTitle: 'リーグ戦フォーマットの参考資料',
  bibliography,
  howTo,
  schemas,
};
