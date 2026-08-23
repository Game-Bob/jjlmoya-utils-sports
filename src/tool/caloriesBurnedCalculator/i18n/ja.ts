import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calories-burned-by-exercise-calculator';
const title = '運動消費カロリー計算ツール（MET値対応）';
const description = '運動の種類、強度、体重、時間、2024年版コンペンディウムのMET値に基づいて、消費カロリー（総消費・純消費）を計算します。';

const faq = [
  {
    question: 'この計算ツールはどのように運動消費カロリーを推定しますか？',
    answer: '選択された運動のMET値、体重、時間を組み合わせて計算します。安静時の標準MET規定（3.5 ml/kg/分）に基づく推計値です。',
  },
  {
    question: '総消費カロリーと純消費カロリーの違いは何ですか？',
    answer: '総消費カロリーは運動による推定全エネルギー消費量です。純消費カロリーは、同時間に安静にしていた場合の消費カロリーを差し引いた値です。',
  },
  {
    question: '運動カロリー計算におけるMETとは何ですか？',
    answer: 'METは安静時代謝量の倍数です。3 METの運動は、安静時の約3倍のエネルギーを消費することを意味します。',
  },
  {
    question: 'ウォーキング、ランニング、水泳などのスポーツに対応していますか？',
    answer: 'はい。ウォーキング、ランニング、サイクリング、水泳、バスケットボール、サッカー、ダンス、ハイキング、縄跳び、サーキット、筋トレ、ヨガに対応しています。',
  },
  {
    question: 'スマートウォッチの表示と異なるのはなぜですか？',
    answer: 'スマートウォッチは心拍数や動きセンサーを使用します。本ツールは公開されているMET値テーブルと体重を基準としています。',
  },
  {
    question: 'この計算結果は医療やダイエットの指示として使用できますか？',
    answer: 'いいえ。結果は一般的な目安であり、正確な代謝量を測定するものではありません。専門家の指導に代わるものではありません。',
  },
];

const howTo = [
  {
    name: '運動を選択',
    text: '行った運動やスポーツに近い項目を選択してMET基準値を読み込みます。',
  },
  {
    name: '運動強度を選択',
    text: '実際のペースに合わせて軽め、普通、激しいの中から強度を選択します。',
  },
  {
    name: '体重と時間を入力',
    text: '体重と運動を行った時間を分単位で入力します。',
  },
  {
    name: '消費カロリーを確認',
    text: '総消費カロリーと安静時を差し引いた純消費カロリー、1分あたりの消費ペースを確認します。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '運動消費カロリーに関するよくある質問',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'MET値の出典と参照文献',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: '運動セッションを信頼できる推定値に変換',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '消費カロリー計算ツールは、計算の前提条件が明確であるほど実用的です。このツールでは運動種目、強度、体重、時間を設定して総消費量と純消費量を可視化します。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: '運動の参照項目' },
        { value: '3', label: '強度の段階' },
        { value: '2', label: 'カロリー表示モード' },
      ],
    },
    {
      type: 'title',
      text: '運動・強度・体重・時間が重要な理由',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '同じ時間でも消費量は変化',
          description: '30分間の軽いヨガ、早歩き、激しいランニングでは必要とされるエネルギーが大きく異なります。',
        },
        {
          title: '同じ運動でも強度により変動',
          description: 'ゆったりしたサイクリングとハードな自転車トレーニングは別物です。セッションの主流となった強度を選択してください。',
        },
      ],
    },
    {
      type: 'title',
      text: '総消費と純消費の使い分け',
      level: 2,
    },
    {
      type: 'table',
      headers: ['表示モード', '含まれる内容', '活用場面'],
      rows: [
        ['総消費カロリー', '運動中に消費された推定全エネルギー量。', '異なるトレーニング全体の負荷を比較する際。'],
        ['純消費カロリー', '安静時の消費エネルギー量を差し引いた値。', '運動自体によって追加消費されたエネルギーを把握する際。'],
        ['1分あたりの消費', '総消費カロリーを運動時間で割った値。', '運動強度による消費ペースを比較する際。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '計算結果は目安として活用してください',
      badge: '重要な前提',
      html: '<p>MET値は統計的な人口参照値です。体力、年齢、体組成、運動フォームによって実際の消費カロリーは変動します。</p>',
    },
    {
      type: 'title',
      text: 'より信頼性の高い比較のためのヒント',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>条件を統一する:</strong> 同じ運動カテゴリーで過去のセッションと比較します。',
        '<strong>実際に動いた時間を測定:</strong> 実際に身体を動かしていた分数のみをカウントします。',
        '<strong>単位を固定する:</strong> kgとlbsを切り替える際も一貫性を保ちます。',
        '<strong>トレンドに着目する:</strong> 絶対的な数値にとらわれず全体的な傾向を把握します。',
      ],
    },
    {
      type: 'tip',
      title: 'スマートウォッチとの差について',
      html: 'スマートウォッチは心拍数や動きを統合して計算しますが、本ツールは標準化されたMETテーブルと体重を基準としています。',
    },
  ],
  ui: {
    activityLabel: '運動種目',
    intensityLabel: '平均的な強度',
    weightLabel: '体重',
    durationLabel: '運動時間',
    unitsLabel: '体重の単位',
    metricUnit: 'メートル法（kg）',
    imperialUnit: 'ヤード・ポンド法（lbs）',
    activityWalking: 'ウォーキング',
    activityRunning: 'ランニング',
    activityCycling: 'サイクリング',
    activitySwimming: '水泳',
    activityBasketball: 'バスケットボール',
    activitySoccer: 'サッカー',
    activityDancing: 'ダンス',
    activityHiking: 'ハイキング',
    activityRopeJumping: '縄跳び',
    activityCircuit: 'サーキットトレーニング',
    activityStrength: '筋力トレーニング',
    activityYoga: 'ヨガ',
    intensityLight: '軽め',
    intensityModerate: '普通',
    intensityVigorous: '激しい',
    weightHint: '最近の体重を入力してください。',
    durationHint: '実際に身体を動かした時間のみを入力します。',
    activityHint: '代謝軌道',
    resultEyebrow: 'セッションの推定値',
    resultTitle: '運動によるエネルギー',
    grossCaloriesLabel: '総消費カロリー',
    netCaloriesLabel: '純消費カロリー',
    perMinuteLabel: '消費ペース',
    metLabel: 'MET参照値',
    intensityBandLabel: '強度レベル',
    lightBand: '軽い運動',
    moderateBand: '中程度の運動',
    vigorousBand: '激しい運動',
    methodNote: '計算式: MET x 3.5 x 体重(kg) ÷ 200 x 時間(分)。総消費は安静時を含み、純消費は1 MET分を差し引きます。',
    estimateNotice: 'これは学習用の推定値であり、医療や栄養指導の処方ではありません。',
    resetButton: '30分間のウォーキング例にリセット',
    activityMenuLabel: '運動を選択',
    selectActivity: '運動を選択してください',
    energySceneLabel: '運動消費エネルギーの視覚的推計',
  },
};
