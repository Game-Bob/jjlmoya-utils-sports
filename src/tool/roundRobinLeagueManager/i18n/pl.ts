import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'menedzer-ligij-kazdy-z-kazdym';
const title = 'Menedzer Ligij Kazdy z Kazdym dla Grup';
const description = 'Stwórz terminarz rozgrywek ligowych w systemie każdy z każdym dla swojej grupy, zapisuj wyniki meczów i śledź tabelę na żywo. Zarządzaj wieloma ligami i udostępniaj pełny stan przez link bez rejestracji.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Moje ligi',
  libraryEyebrow: 'Zapisane na tym urządzeniu',
  libraryIntro: 'Twórz ligę dla każdej grupy, otwieraj ją w każdej kolejce i zachowaj uporządkowane wyniki.',
  newLeague: 'Utwórz nową ligę',
  noLeagues: 'Brak zapisanych lig',
  noLeaguesHint: 'Twoja pierwsza liga pojawi się tutaj i pozostanie dostępna na tym urządzeniu.',
  leagueNameLabel: 'Nazwa ligi',
  leagueNamePlaceholder: 'Liga Piątkowa',
  teamsLabel: 'Zespoły lub gracze',
  teamsHint: 'Jedna nazwa w wierszu lub rozdzielone przecinkami.',
  teamsPlaceholder: 'Orły Północy\nSparta Południe\nWicher Wschód\nKorona Zachód',
  loadExample: 'Wczytaj gotowy przykład',
  demoLeagueName: 'Liga Piątkowa',
  demoTeams: 'Orły Północy\nSparta Południe\nWicher Wschód\nKorona Zachód\nOlimpia',
  formatLabel: 'Format sezonu',
  singleLeg: 'Jedna runda',
  singleLegHint: 'Każda para gra ze sobą jeden raz',
  doubleLeg: 'Mecz i rewanż',
  doubleLegHint: 'Każda para gra ze sobą dwa razy',
  scoringLabel: 'Punkty w tabeli',
  winPoints: 'Wygrana',
  drawPoints: 'Remis',
  lossPoints: 'Porażka',
  createLeague: 'Stwórz ligę i terminarz',
  nameStatus: 'Nadaj lidze nazwę, aby grupa mogła ją łatwo zidentyfikować.',
  emptyStatus: 'Dodaj co najmniej dwóch uczestników.',
  minimumStatus: 'Dodaj jeszcze jednego uczestnika, aby utworzyć terminarz.',
  readyStatus: 'Przygotowano {count} uczestników. Cały sezon zostanie zapisany lokalnie.',
  duplicateStatus: 'Zmień nazwę powtórzonego uczestnika "{name}".',
  maximumStatus: 'Używaj maksymalnie 24 uczestników w jednej lidze.',
  longNameStatus: 'Skróć "{name}" do maksymalnie 40 znaków.',
  importLeague: 'Importuj JSON ligi',
  importHint: 'Plik kopii zapasowej zawiera pełną ligę wraz z wynikami.',
  openLeague: 'Otwórz',
  share: 'Udostępnij',
  delete: 'Usuń',
  teamsCount: 'drużyn',
  roundsCount: 'kolejek',
  completedLabel: 'rozegranych',
  updatedLabel: 'Zaktualizowano',
  backToLeagues: 'Wszystkie ligi',
  newLeagueAction: 'Nowa liga',
  allChangesSaved: 'Zapisano na tym urządzeniu',
  matchesTab: 'Mecze',
  standingsTab: 'Tabela',
  settingsTab: 'Ustawienia',
  matchday: 'Kolejka',
  firstLeg: 'Runda pierwsza',
  secondLeg: 'Runda rewanżowa',
  previousRound: 'Poprzednia kolejka',
  nextRound: 'Następna kolejka',
  fixtures: 'Mecze i wyniki',
  enterResult: 'Wpisz wynik',
  played: 'Rozegrany',
  pending: 'Oczekujący',
  byeLabel: 'Pauza',
  byeHint: 'Ten uczestnik pauzuje w tej kolejce.',
  standings: 'Tabela na żywo',
  standingsHint: 'Tabela aktualizuje się po wpisaniu obu wyników meczu. W przypadku remisu decydują punkty, bilans bramek, bramki zdobyte i nazwa.',
  positionShort: 'Poz',
  teamShort: 'Drużyna',
  playedShort: 'M',
  wonShort: 'W',
  drawnShort: 'R',
  lostShort: 'P',
  goalsForShort: 'BZ',
  goalsAgainstShort: 'BS',
  goalDifferenceShort: 'RB',
  pointsShort: 'Pkt',
  progressLabel: 'Postęp sezonu',
  seasonComplete: 'Sezon zakończony',
  shareLeague: 'Udostępnij ligę',
  downloadLeague: 'Pobierz kopię zapasową',
  copiedLeague: 'Skopiowano link z aktualnym stanem ligi.',
  copyFailed: 'Przeglądarka zablokowała kopiowanie linku.',
  downloadedLeague: 'Pobrano pełną kopię zapasową ligi.',
  leagueSettings: 'Ustawienia ligi',
  settingsHint: 'Zmień nazwę ligi lub zasady punktacji. Wprowadzone mecze pozostaną bez zmian.',
  saveSettings: 'Zapisz ustawienia',
  settingsSaved: 'Ustawienia zostały zapisane, a tabela przeliczona.',
  dangerZone: 'Strefa niebezpieczna',
  deleteLeague: 'Usuń ligę',
  confirmDelete: 'Ta operacja trwale usunie ligę i wszystkie jej wyniki z tego urządzenia.',
  importedLeague: 'Zaimportowano ligę jako nową kopię lokalną.',
  importFailed: 'Ten plik nie jest prawidłową kopią zapasową ligi.',
  sharedCopy: 'Udostępniona kopia',
  formatSingleMeta: 'jedna runda każdy z każdym',
  formatDoubleMeta: 'dwie rundy każdy z każdym',
};

const faq = [
  {
    question: 'Czy mogę zarządzać więcej niż jedną ligą każdy z każdym?',
    answer: 'Tak. Każda liga jest zapisywana niezależnie na Twoim urządzeniu z własnymi uczestnikami, terminarzem i zasadami punktacji.',
  },
  {
    question: 'Jak wprowadzić lub poprawić wynik meczu?',
    answer: 'Otwórz ligę, wybierz kolejkę i wpisz obydwa wyniki. Tabela przeliczy się automatycznie po zmianie.',
  },
  {
    question: 'Jak przeliczana jest tabela ligowa?',
    answer: 'Domyślnie przyznawane są 3 punkty za wygraną, 1 za remis i 0 za porażkę. O kolejności decydują punkty, bilans bramek i bramki zdobyte.',
  },
  {
    question: 'Co dzieje się w przypadku nieparzystej liczby drużyn?',
    answer: 'W każdej kolejce jedna drużyna pauzuje. Pauza rotuje sprawiedliwie między wszystkimi uczestnikami.',
  },
  {
    question: 'Co zawiera udostępniony link?',
    answer: 'Link zawiera migawkę z nazwą ligi, drużynami, formatem, punktacją i wszystkimi dotychczasowymi wynikami.',
  },
  {
    question: 'Czy link aktualizuje się automatycznie po dodaniu nowych wyników?',
    answer: 'Nie. Link jest statyczną migawką. Po wpisaniu kolejnych wyników należy wygenerować nowy link.',
  },
  {
    question: 'Jak zrobić kopię zapasową ligi?',
    answer: 'Pobierz plik JSON z plikiem ligi. Możesz go w każdej chwili zaimportować na innym urządzeniu.',
  },
];

const howTo = [
  { name: 'Stwórz ligę grupy', text: 'Wpisz nazwę turnieju, dodaj uczestników i wybierz runda pojedyncza lub mecz i rewanż.' },
  { name: 'Otwórz aktualną kolejkę', text: 'Wybierz numer kolejki za pomocą przycisków lub strzałek nawigacyjnych.' },
  { name: 'Wpisz wyniki meczów', text: 'Wprowadź bramki lub punkty obydwu zespołów, aby zaktualizować tabelę.' },
  { name: 'Sprawdź tabelę', text: 'Śledź tabelę na żywo obok terminarza lub przejdź do zakładki Tabela.' },
  { name: 'Udostępnij lub pobierz', text: 'Skopiuj link dla grupy lub pobierz plik kopii zapasowej JSON.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planowanie Ligi Przed Pierwszym Meczem',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Liga w systemie każdy z każdym działa najlepiej, gdy wszystkie zasady zostaną szczegółowo ustalone przed wygenerowaniem terminarza. Potwierdź ostateczną listę uczestników, wybierz format sezonu, określ liczbę punktów za wygraną i remis oraz ustal zasady rozstrzygania remisów w tabeli końcowej.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Uczestnicy:</strong> Używaj spójnych i jednoznacznych nazw dla każdej drużyny lub zawodnika, aby uniknąć pomyłek w wynikach.',
      '<strong>Format sezonu:</strong> Wybierz jedną rundę dla krótkich turniejów lub mecz i rewanż dla pełnego sezonu ligowego.',
      '<strong>Punktacja:</strong> Domyślnie przyznawane są 3 punkty za wygraną, 1 za remis i 0 za porażkę, ale można to dostosować.',
      '<strong>Kryteria przy remisie:</strong> Ustal szczegółowe zasady klasyfikacji w przypadku równej liczby punktów przed rozpoczęciem rozgrywek.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Wybór Odpowiedniej Długości Sezonu',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Dla <strong>n</strong> uczestników jedna runda wymaga rozegrania n × (n - 1) ÷ 2 meczów. Mecz i rewanż podwaja tę całkowitą liczbę spotkań. Dłuższy format zmniejsza wpływ jednego przypadkowego wyniku na końcowy układ tabeli.',
  },
  {
    type: 'table' as const,
    headers: ['Uczestnicy', 'Kolejki (Jedna runda)', 'Mecze (Jedna runda)', 'Mecze (Mecz i rewanż)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (z jedną pauzą w kolejce)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Niezawodne Zarządzanie Wynikami',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Jeden protokolant:</strong> Wyznacz jedną odpowiedzialną osobę do wprowadzania wyników, aby uniknąć sprzecznych wersji.',
      '<strong>Wpisuj oba wyniki:</strong> Tylko pełny wynik z wpisanymi dwoma punktami wpływa na aktualizację tabeli.',
      '<strong>Szybka korekta:</strong> Każda zmiana wyniku natychmiast automatycznie przelicza całą tabelę ligową.',
      '<strong>Udostępniaj po kolejce:</strong> Wyślij nowy link po zakończeniu wszystkich meczów danej kolejki.',
      '<strong>Pobieraj kopię JSON:</strong> Zapisuj plik kopii zapasowej przed czyszczeniem pamięci przeglądarki.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Jak Prawidłowo Odczytywać Tabelę',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Tabela uwzględnia mecze rozegrane, wygrane, remisy, porażki, bramki zdobyte, stracone, bilans bramek i punkty. Kolejność ustala się na podstawie <strong>punktów, bilansu bramek i bramek zdobytych</strong>. W przypadku idetycznego bilansu nazwa służy jedynie do stabilizacji wyświetlania.',
  },
  {
    type: 'tip' as const,
    title: 'Ustal zasady w przypadku równego bilansu',
    html: 'Zdecyduj wcześniej, czy o wyższej pozycji w przypadku idealnego remisu decyduje bezpośredni mecz, bilans czy dodatkowy pojedynek.',
  },
  {
    type: 'title' as const,
    text: 'Postępowanie przy Nieparzystej Liczbie Drużyn',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Jeśli liczba uczestników jest nieparzysta, system automatycznie wyznacza rotacyjną pauzę w każdej kolejce na zasadzie sprawiedliwej rotacji.',
  },
  {
    type: 'tip' as const,
    title: 'Udostępniony link jest migawką',
    html: 'Pamiętaj, że udostępniony link wysyła stan w danym momencie skopiowania. Po dodaniu kolejnych meczów wygeneruj i wyślij nowy link.',
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
  faqTitle: 'Często Zadawane Pytania o Menedżerze Ligi Każdy z Każdym',
  faq,
  bibliographyTitle: 'Materiały Źródłowe o Formatach Ligowych',
  bibliography,
  howTo,
  schemas,
};
