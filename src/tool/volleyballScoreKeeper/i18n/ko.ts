import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'volleyball-scorekeeper';
const title = '배구 전광판: 실시간 점수판, 로테이션 관리 및 FIVB 공식 경기 기록기';
const description = 'FIVB 공식 규칙에 따른 전문 배구 전광판 및 전술 로테이션 트래커. 랠리 포인트, 세트 스코어, 6인 시계 방향 로테이션, 작전타임, 선수 교체를 실시간으로 기록.';

const faqData = [
  {
    question: '배구에서 서브권을 가져왔을 때(사이드아웃) 로테이션은 어떻게 회전하나요?',
    answer: '리시브 팀이 랠리에서 승리하여 득점하면 서브권을 획득합니다(사이드아웃). 서브를 넣기 전 코트 안의 6명 선수는 시계 방향으로 한 자리씩 이동합니다: 2번 위치 선수가 1번 자리로 이동하여 서브를 넣고, 1번은 6번으로, 6번은 5번으로, 5번은 4번으로, 4번은 3번으로, 3번은 2번으로 이동합니다.',
  },
  {
    question: '배구 세트 및 경기에서 승리하려면 몇 점을 획득해야 하나요?',
    answer: '정규 1세트부터 4세트까지는 최소 2점 차 이상으로 25점을 먼저 획득해야 합니다. 24-24 듀스 상황에서는 2점 차가 날 때까지 경기가 계속됩니다. 마지막 5세트(결정 세트/타이브레이크)는 2점 차 이상으로 15점을 선취하면 승리합니다.',
  },
  {
    question: '한 세트당 요청 가능한 작전타임과 선수 교체 횟수는 얼마인가요?',
    answer: 'FIVB 공식 규정에 따라 각 팀은 세트당 최대 2회의 30초 작전타임과 최대 6회의 선수 교체를 요청할 수 있습니다. 새 세트가 시작되면 타임아웃과 교체 횟수는 초기화됩니다.',
  },
  {
    question: '배구 코트의 공식 6개 포지션 번호는 어떻게 되나요?',
    answer: '포지션 번호는 1번부터 6번까지 지정됩니다. 1번은 라이트 백(서버), 2번은 라이트 프론트, 3번은 센터 프론트, 4번은 레프트 프론트, 5번은 레프트 백, 6번은 센터 백입니다.',
  },
  {
    question: '경기 현장에서 스마트폰이나 태블릿으로 간편하게 조작하는 방법은?',
    answer: '터치 화면에 최적화되어 있습니다. 큰 점수 숫자나 플러스 버튼을 터치하여 빠르게 득점할 수 있습니다. 30초 작전타임 카운트다운, 선수 교체, 코트 체인지도 터치 한 번으로 진행됩니다.',
  },
];

const howToData = [
  { name: '경기 방식 선택', text: '5세트 3선승제, 3세트 2선승제, 또는 단일 세트 방식을 선택합니다.' },
  { name: '점수 기록', text: '팀 카드를 터치하여 점수를 올립니다. 사이드아웃 및 로테이션 이동이 자동으로 계산됩니다.' },
  { name: '작전타임 및 전술 관리', text: '30초 작전타임 타이머를 시작하고 선수 교체를 기록하며 전술 코트 배치를 확인합니다.' },
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'FIVB 공식 배구 규정 및 랠리 포인트 득점 시스템',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '실내 배구는 서브권 보유 여부와 무관하게 랠리를 승리한 팀이 1점을 획득하는 랠리 포인트 시스템으로 진행됩니다. FIVB 공식 경기에서는 정확한 세트 기록, 서브권 획득 시 시계 방향 의무 로테이션, 기술 작전타임 규정 준수가 요구됩니다.',
    },
    {
      type: 'title',
      text: '코트 포지션 번호와 공격·수비 구역 안내',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '18×9미터 규격의 배구 코트는 6개 구역으로 나뉩니다. 후위 수비 라인은 1번(라이트 백/서버), 6번(센터 백), 5번(레프트 백)으로 구성되며, 네트 앞 전위 공격 라인은 2번(라이트 프론트), 3번(센터 프론트), 4번(레프트 프론트)으로 구성됩니다. 서브 히트 순간 모든 선수는 팀 동료와의 상대적 위치를 지켜야 합니다.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: '결정 세트(타이브레이크) 규정',
      html: '<p>경기가 마지막 결정 세트(5세트 매치의 5세트 또는 3세트 매치의 3세트)에 도달하면 목표 점수는 <strong>15점</strong>으로 변경됩니다. 선두 팀이 8점에 도달하면 양 팀은 코트를 바꾸며, 여전히 2점 차 이상이어야 세트에서 승리합니다.</p>',
    },
    {
      type: 'title',
      text: '작전타임 및 선수 교체 규정',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '각 팀은 세트당 2회의 30초 작전타임을 요청하여 전술을 재정비할 수 있습니다. 선수 교체는 세트당 최대 6회까지 허용되며, 선발 출전 선수는 한 세트에 한 번만 교체 아웃될 수 있고 재투입 시 반드시 본인의 원래 로테이션 위치로 복귀해야 합니다.',
    },
  ],
  ui: {
    teamA: '팀 알파',
    teamB: '팀 베타',
    points: '점수',
    sets: '세트',
    set: '세트',
    match: '경기',
    serving: '서브',
    sideout: '사이드아웃',
    rotation: '로테이션',
    timeout: '작전타임 (30초)',
    timeoutsLeft: '작전타임',
    substitutions: '교체',
    matchPoint: '매치 포인트',
    setPoint: '세트 포인트',
    winner: '경기 승리팀',
    reset: '새 경기',
    resetConfirm: '현재 경기 점수를 초기화하시겠습니까?',
    cancel: '취소',
    undo: '실행 취소',
    switchSides: '코트 체인지',
    fullscreen: '전체 화면',
    exitFullscreen: '전체 화면 종료',
    rotateCourt: '회전',
    substitutePlayer: '교체',
    matchModeBestOf3: '3세트 2선승',
    matchModeBestOf5: '5세트 3선승',
    matchModeSingleSet: '단일 세트',
    targetPoints25: '25점 선취 (+2)',
    targetPoints15: '타이브레이크 15점 (+2)',
    pos1RightBack: 'P1 라이트 백 (서브)',
    pos2RightFront: 'P2 라이트 프론트',
    pos3MiddleFront: 'P3 센터 프론트',
    pos4LeftFront: 'P4 레프트 프론트',
    pos5LeftBack: 'P5 레프트 백',
    pos6MiddleBack: 'P6 센터 백',
    liberoLabel: '리베로',
    tacticalCourtTitle: '전술 코트 로테이션',
    historyLogTitle: '세트 요약 및 경기 기록',
  },
};
