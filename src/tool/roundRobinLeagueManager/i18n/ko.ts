import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'round-robin-league-manager';
const title = '풀리그 리그전 대진표 작성 관리 프로그램';
const description = '동호회나 스포츠 모임을 위한 라운드 로빈(풀리그) 대진표를 자동으로 생성하고 매치별 결과를 기록하여 실시간 순위표를 관리하세요. 회원가입 없이 링크로 공유할 수 있습니다.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: '내 리그 목록',
  libraryEyebrow: '이 기기에 저장됨',
  libraryIntro: '모임별로 리그를 생성하고 매 경기마다 열어 경기 결과를 깔끔하게 관리하세요.',
  newLeague: '새 리그 생성',
  noLeagues: '저장된 리그가 없습니다',
  noLeaguesHint: '생성한 첫 번째 리그가 여기에 표시되며 이 기기에 계속 보관됩니다.',
  leagueNameLabel: '리그 이름',
  leagueNamePlaceholder: '금요일 야간 리그',
  teamsLabel: '팀 또는 참가자 이름',
  teamsHint: '한 줄에 한 명(팀)씩 입력하거나 쉼표로 구분하여 붙여넣으세요.',
  teamsPlaceholder: '드림 FC\n스타즈\n리버뷰\n서밋 FC',
  loadExample: '예시 데이터 불러오기',
  demoLeagueName: '금요일 야간 리그',
  demoTeams: '드림 FC\n스타즈\n리버뷰\n서밋 FC\n올드타운',
  formatLabel: '경기 방식',
  singleLeg: '싱글 라운드 로빈 (1회전)',
  singleLegHint: '각 팀끼리 한 번씩 경기를 치릅니다',
  doubleLeg: '더블 라운드 로빈 (홈 앤 어웨이)',
  doubleLegHint: '각 팀끼리 두 번씩 경기를 치릅니다',
  scoringLabel: '승점 설정',
  winPoints: '승리',
  drawPoints: '무승부',
  lossPoints: '패배',
  createLeague: '리그 및 대진표 생성',
  nameStatus: '그룹원들이 알아보기 쉬운 리그 이름을 입력하세요.',
  emptyStatus: '최소 두 명 이상의 팀 또는 참가자를 입력하세요.',
  minimumStatus: '대진표를 생성하려면 참가자를 한 명 더 추가하세요.',
  readyStatus: '{count}명의 참가자가 준비되었습니다. 전체 시즌이 기기에 저장됩니다.',
  duplicateStatus: '중복된 참가자 이름 "{name}"을(를) 수정하세요.',
  maximumStatus: '한 리그당 최대 24명까지 등록할 수 있습니다.',
  longNameStatus: '이름 "{name}"을(를) 40자 이하로 줄여주세요.',
  importLeague: '리그 JSON 가져오기',
  importHint: '백업 파일에서 모든 경기 결과가 포함된 리그 데이터를 불러옵니다.',
  openLeague: '열기',
  share: '공유',
  delete: '삭제',
  teamsCount: '팀',
  roundsCount: '라운드',
  completedLabel: '경기 완료',
  updatedLabel: '최종 수정',
  backToLeagues: '전체 리그 목록',
  newLeagueAction: '새 리그',
  allChangesSaved: '이 기기에 자동 저장됨',
  matchesTab: '경기 대진표',
  standingsTab: '순위표',
  settingsTab: '설정',
  matchday: '라운드',
  firstLeg: '전반기',
  secondLeg: '후반기',
  previousRound: '이전 라운드',
  nextRound: '다음 라운드',
  fixtures: '경기 대진 및 결과 입력',
  enterResult: '점수 입력',
  played: '완료',
  pending: '대기 중',
  byeLabel: '휴식',
  byeHint: '이 참가자는 이번 라운드에 경기가 없습니다.',
  standings: '실시간 순위표',
  standingsHint: '양 팀 점수가 모두 입력되면 순위표가 자동으로 갱신됩니다. 동률 시 승점, 득실차, 다득점, 이름순으로 정렬됩니다.',
  positionShort: '순위',
  teamShort: '팀',
  playedShort: '경기',
  wonShort: '승',
  drawnShort: '무',
  lostShort: '패',
  goalsForShort: '득',
  goalsAgainstShort: '실',
  goalDifferenceShort: '차',
  pointsShort: '승점',
  progressLabel: '시즌 진행률',
  seasonComplete: '시즌 종료',
  shareLeague: '리그 공유',
  downloadLeague: '백업 다운로드',
  copiedLeague: '현재 리그 상태가 포함된 공유 링크가 복사되었습니다.',
  copyFailed: '브라우저 설정에 의해 링크 복사가 차단되었습니다.',
  downloadedLeague: '전체 리그 백업 파일이 다운로드되었습니다.',
  leagueSettings: '리그 설정',
  settingsHint: '리그 이름을 변경하거나 승점 규칙을 조정할 수 있습니다. 기존 경기 결과는 유지됩니다.',
  saveSettings: '설정 저장',
  settingsSaved: '설정이 저장되고 순위표가 재계산되었습니다.',
  dangerZone: '위험 지역',
  deleteLeague: '리그 삭제',
  confirmDelete: '이 기기에서 이 리그와 모든 경기 결과가 완전히 삭제됩니다.',
  importedLeague: '리그 데이터가 새 로컬 사본으로 가져와졌습니다.',
  importFailed: '올바른 리그 백업 파일이 아닙니다.',
  sharedCopy: '공유된 사본',
  formatSingleMeta: '싱글 라운드 로빈',
  formatDoubleMeta: '더블 라운드 로빈',
};

const faq = [
  {
    question: '여러 개의 리그를 동시에 관리할 수 있나요?',
    answer: '네. 기기에 여러 리그를 독립적으로 저장하여 참가자, 대진표, 경기 결과 및 승점 규칙을 각각 관리할 수 있습니다.',
  },
  {
    question: '경기 결과를 입력하거나 수정하려면 어떻게 하나요?',
    answer: '리그를 열고 라운드를 선택한 후 점수를 입력하세요. 점수를 수정하면 순위표가 즉시 자동 반영됩니다.',
  },
  {
    question: '순위표는 어떤 기준 계산되나요?',
    answer: '기본적으로 승리 3점, 무승부 1점, 패배 0점이 부여됩니다. 동점일 경우 승점, 득실차, 다득점 순으로 순위가 정해집니다.',
  },
  {
    question: '참가 팀 수가 홀수일 때는 어떻게 되나요?',
    answer: '라운드마다 한 팀씩 교대로 휴식(부전승/휴식)을 가지게 되어 모든 팀이 동일한 경기 수를 소화하게 됩니다.',
  },
  {
    question: '공유 링크에는 어떤 정보가 포함되나요?',
    answer: '리그 이름, 참가자, 경기 방식, 승점 규칙 및 현재까지 입력된 모든 경기 결과의 스냅샷이 포함됩니다.',
  },
  {
    question: '결과를 추가하면 공유 링크도 자동으로 업데이트되나요?',
    answer: '아니요. 링크는 생성 당시의 스냅샷입니다. 경기 결과를 추가한 후에는 새 링크를 생성하여 공유하세요.',
  },
  {
    question: '리그 데이터를 백업하거나 다른 기기로 옮길 수 있나요?',
    answer: 'JSON 백업 파일로 다운로드하여 다른 기기에서 가져오기 하면 동일하게 이어할 수 있습니다.',
  },
];

const howTo = [
  { name: '리그 생성하기', text: '리그 이름을 입력하고 참가자 목록을 작성한 후 싱글 또는 더블 방식을 선택합니다.' },
  { name: '진행 라운드 선택', text: '라운드 버튼이나 화살표를 이용해 경기가 진행될 라운드를 선택합니다.' },
  { name: '점수 입력하기', text: '종료된 경기의 양 팀 점수를 입력합니다. 두 점수가 모두 입력되면 순위표에 반영됩니다.' },
  { name: '순위표 확인', text: '대진표 옆 실시간 순위표 또는 순위표 탭에서 세부 성적을 확인합니다.' },
  { name: '공유 및 백업', text: '공유 링크를 복사해 그룹원들에게 전달하거나 JSON 백업 파일을 저장합니다.' },
];

const seo = [
  {
    type: 'title' as const,
    text: '대회 시작 전 규칙 정립 및 준비사항',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '라운드 로빈 리그를 원활하게 진행하려면 경기 일정 생성 전 참가자 명단, 승점 배점, 동률 처리 기준을 미리 협의하는 것이 좋습니다.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>참가자 명단:</strong> 팀 또는 선수 이름을 명확하게 통일하여 입력합니다.',
      '<strong>경기 방식:</strong> 단기 대회는 싱글 라운드, 정기 리그는 더블 라운드(홈 앤 어웨이)를 선택합니다.',
      '<strong>승점 규칙:</strong> 기본 승3/무1/패0 외에 모임 규칙에 맞춰 승점을 변경할 수 있습니다.',
      '<strong>동률 동점 기준:</strong> 승자승, 득실차 등 동률 시 순위 결정 방식을 미리 결정하세요.',
    ],
  },
  {
    type: 'title' as const,
    text: '참가 팀 수에 따른 경기 수 산정',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '참가자 수가 <strong>n</strong>명일 때, 싱글 라운드 총 경기 수는 n × (n - 1) ÷ 2회입니다. 더블 라운드는 2배가 됩니다.',
  },
  {
    type: 'table' as const,
    headers: ['참가 팀 수', '라운드 수 (싱글)', '총 경기 수 (싱글)', '총 경기 수 (더블)'],
    rows: [
      ['4팀', '3라운드', '6경기', '12경기'],
      ['5팀', '5라운드 (매회 1팀 휴식)', '10경기', '20경기'],
      ['8팀', '7라운드', '28경기', '56경기'],
      ['12팀', '11라운드', '66경기', '132경기'],
    ],
  },
  {
    type: 'title' as const,
    text: '경기 결과 및 순위표 관리 팁',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>기록 담당자 단일화:</strong> 한 명이 전담하여 결과를 기록해야 혼선을 방지할 수 있습니다.',
      '<strong>양 팀 점수 모두 입력:</strong> 두 팀의 점수가 모두 입력되어야 순위표에 합산됩니다.',
      '<strong>점수 수정 즉시 반영:</strong> 점수를 변경하면 리그 전체 순위표가 자동으로 재계산됩니다.',
      '<strong>라운드 종료 후 공유:</strong> 매 라운드가 끝나면 새 링크를 발급해 공유하세요.',
      '<strong>정기 백업:</strong> 브라우저 데이터 삭제를 대비해 JSON 백업 파일을 저장해 두세요.',
    ],
  },
  {
    type: 'title' as const,
    text: '순위표 보는 법 및 정렬 기준',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '순위표에는 경기 수, 승, 무, 패, 득점, 실점, 득실차, 승점이 표시됩니다. 기본 순위는 <strong>승점 ＞ 득실차 ＞ 다득점</strong> 순으로 정렬됩니다.',
  },
  {
    type: 'tip' as const,
    title: '동률 동점 시 처리 방안',
    html: '모든 승점과 득실이 동일할 경우 승자승 원칙이나 플레이오프 적용 여부를 사전에 협의해 두세요.',
  },
  {
    type: 'title' as const,
    text: '홀수 팀 참가 시 운영 방식',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '참가 팀 수가 홀수인 경우 프로그램을 통해 자동으로 라운드마다 1팀씩 교대로 휴식이 부여됩니다.',
  },
  {
    type: 'tip' as const,
    title: '공유 링크는 생성 시점의 사본입니다',
    html: '공유 링크를 받은 사람은 독립된 사본을 보게 됩니다. 추가 결과가 발생하면 새로운 링크를 전달하세요.',
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
  faqTitle: '풀리그 리그전 대진표 작성 프로그램 자주 묻는 질문',
  faq,
  bibliographyTitle: '리그 대진표 및 리그 방식 참고자료',
  bibliography,
  howTo,
  schemas,
};
