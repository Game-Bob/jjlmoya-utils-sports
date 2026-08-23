import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calories-burned-by-exercise-calculator';
const title = '운동 소비 칼로리 계산기 (MET 기준)';
const description = '운동 종류, 강도, 체중, 시간 및 2024년 콤펜디움 MET 값을 기준으로 총 소비 칼로리와 순 소비 칼로리를 계산합니다.';

const faq = [
  {
    question: '이 계산기는 운동 소비 칼로리를 어떻게 추정하나요?',
    answer: '선택한 운동의 MET 값, 체중, 운동 시간을 조합하여 계산합니다. 휴식 시 표준 MET 규정(3.5 ml/kg/분)을 기준으로 한 추정치입니다.',
  },
  {
    question: '총 소비 칼로리와 순 소비 칼로리의 차이는 무엇인가요?',
    answer: '총 소비 칼로리는 운동 중 소비된 추정 전체 에너지량입니다. 순 소비 칼로리는 같은 시간 동안 휴식했을 때 소비되었을 칼로리를 차감한 값입니다.',
  },
  {
    question: '운동 칼로리 계산에서 MET란 무엇인가요?',
    answer: 'MET는 휴식 시 대사율의 배수입니다. 3 MET 운동은 휴식 기준보다 약 3배 많은 에너지를 소비함을 의미합니다.',
  },
  {
    question: '걷기, 달리기를 비롯한 여러 스포츠에 사용할 수 있나요?',
    answer: '네. 걷기, 달리기를 포함해 자전거, 수영, 농구, 축구, 댄스, 등산, 줄줄이 줄넘기, 서킷 운동, 근력 운동, 요가를 지원합니다.',
  },
  {
    question: '스마트워치 표시 결과와 차이가 나는 이유는 무엇인가요?',
    answer: '스마트워치는 심박수와 움직임 센서를 사용하지만, 이 계산기는 공인된 MET 테이블 및 체중을 기준으로 계산하기 때문입니다.',
  },
  {
    question: '이 추정치를 의학적 의사결정에 사용할 수 있나요?',
    answer: '아니요. 본 결과는 참고용 추정치이며 정밀 대사량을 측정하지 않습니다. 전문 의료진의 조언을 대체할 수 없습니다.',
  },
];

const howTo = [
  {
    name: '운동 선택',
    text: '실행한 운동이나 스포츠와 가장 가까운 항목을 선택하여 MET 기준값을 불러옵니다.',
  },
  {
    name: '운동 강도 선택',
    text: '실제 페이스에 맞게 가볍게, 보통, 격렬함 중 운동 강도를 선택합니다.',
  },
  {
    name: '체중 및 시간 입력',
    text: '체중과 실제로 운동한 시간을 분 단위로 입력합니다.',
  },
  {
    name: '소비 칼로리 확인',
    text: '총 소비 칼로리와 휴식 대사량을 제외한 순 소비 칼로리, 분당 소비 페이스를 확인합니다.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '운동 소비 칼로리에 대해 자주 묻는 질문',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'MET 출처 및 참조 문헌',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: '운동 세션을 유용한 추정치로 전환',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '소비 칼로리 계산기는 계산 전제가 명확할 때 가장 유용합니다. 이 도구는 운동 종류, 강도, 체중, 시간을 설정하여 총 소비량과 순 소비량을 보여줍니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: '운동 참조 항목' },
        { value: '3', label: '강도 단계' },
        { value: '2', label: '칼로리 보기 모드' },
      ],
    },
    {
      type: 'title',
      text: '운동, 강도, 체중, 시간이 중요한 이유',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '같은 시간이라도 에너지 소비는 달라집니다',
          description: '30분 동안의 가벼운 요가, 빠르게 걷기, 격렬한 달리기는 필요한 에너지 소모량이 완전히 다릅니다.',
        },
        {
          title: '같은 운동이라도 강도에 따라 변합니다',
          description: '편안한 자전거 타기와 하드한 자전거 훈련은 다릅니다. 세션의 주가 되는 강도를 선택하세요.',
        },
      ],
    },
    {
      type: 'title',
      text: '총 소비 칼로리와 순 소비 칼로리의 활용',
      level: 2,
    },
    {
      type: 'table',
      headers: ['보기 모드', '포함 내용', '활용 시점'],
      rows: [
        ['총 소비 칼로리', '운동 중 소비된 전체 추정 에너지량.', '다른 운동 세션의 전체 부하를 비교할 때.'],
        ['순 소비 칼로리', '휴식 시 에너지 소비량을 차감한 값.', '운동 자체로 추가 소비된 에너지를 파악할 때.'],
        ['분당 소비 칼로리', '총 소비 칼로리를 운동 시간으로 나눈 값.', '운동 강도별 소비 페이스를 비교할 때.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '계산 결과를 기준선으로 활용하세요',
      badge: '중요한 전제',
      html: '<p>MET 값은 통계적 인구 참조값입니다. 체력, 연령, 체성분, 운동 자세에 따라 실제 소비 칼로리는 달라질 수 있습니다.</p>',
    },
    {
      type: 'title',
      text: '더 신뢰할 수 있는 비교를 위한 팁',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>동일한 설정을 유지하세요:</strong> 같은 운동 카테고리로 이전 세션과 비교합니다.',
        '<strong>실제 움직인 시간만 측정하세요:</strong> 실제로 몸을 움직인 분만 포함합니다.',
        '<strong>단위를 일관되게 사용하세요:</strong> kg과 lbs를 전환할 때 정밀도를 유지합니다.',
        '<strong>트렌드에 주목하세요:</strong> 절대적인 수치보다 전체적인 경향을 파악합니다.',
      ],
    },
    {
      type: 'tip',
      title: '스마트워치와의 차이점',
      html: '스마트워치는 심박수와 움직임을 종합하지만, 이 도구는 표준화된 MET 테이블과 체중을 기준으로 계산합니다.',
    },
  ],
  ui: {
    activityLabel: '운동 종류',
    intensityLabel: '평균 강도',
    weightLabel: '체중',
    durationLabel: '운동 시간',
    unitsLabel: '체중 단위',
    metricUnit: '미터법 (kg)',
    imperialUnit: '야드파운드법 (lbs)',
    activityWalking: '걷기',
    activityRunning: '달리기',
    activityCycling: '자전거',
    activitySwimming: '수영',
    activityBasketball: '농구',
    activitySoccer: '축구',
    activityDancing: '댄스',
    activityHiking: '등산',
    activityRopeJumping: '줄넘기',
    activityCircuit: '서킷 운동',
    activityStrength: '근력 운동',
    activityYoga: '요가',
    intensityLight: '가볍게',
    intensityModerate: '보통',
    intensityVigorous: '격렬함',
    weightHint: '최근 체중을 입력하세요.',
    durationHint: '실제로 움직인 분 단위 시간만 계산하세요.',
    activityHint: '대사 궤도',
    resultEyebrow: '세션 추정치',
    resultTitle: '움직임 속의 에너지',
    grossCaloriesLabel: '총 소비 칼로리',
    netCaloriesLabel: '순 소비 칼로리',
    perMinuteLabel: '페이스',
    metLabel: 'MET 참조값',
    intensityBandLabel: '강도 수준',
    lightBand: '가벼운 운동',
    moderateBand: '보통 운동',
    vigorousBand: '격렬한 운동',
    methodNote: '계산식: MET x 3.5 x 체중(kg) ÷ 200 x 시간(분). 총 소비는 휴식을 포함하며, 순 소비는 1 MET를 차감합니다.',
    estimateNotice: '이는 교육용 추정치이며 의료나 영양 처방이 아닙니다.',
    resetButton: '30분 걷기 예시로 초기화',
    activityMenuLabel: '운동 선택',
    selectActivity: '운동을 선택하세요',
    energySceneLabel: '운동 소비 에너지 시각적 추정',
  },
};
