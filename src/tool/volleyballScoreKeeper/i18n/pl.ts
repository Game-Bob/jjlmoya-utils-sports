import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'licznik-punktow-siatkowka';
const title = 'Tablica Wyników Siatkówki: Punkty Live, Ustawienia i Zasady FIVB';
const description = 'Profesjonalna tablica wyników do siatkówki halowej i kontrola rotacji zawodników. Licz punkty, sety, przejścia w prawo, czasy dla trenera i zmiany zawodników.';

const faqData = [
  {
    question: 'Jak działa rotacja zawodników w siatkówce po zdobyciu punktu przy zagrywce rywala?',
    answer: 'Kiedy drużyna odbierająca wygrywa akcję, zdobywa punkt i prawo do zagrywki (side-out). Przed wykonaniem zagrywki wszyscy sześciu zawodnicy na boisku przesuwają się o jedną pozycję zgodnie z ruchem wskazówek zegara: zawodnik z pozycji 2 przechodzi na pozycję 1 do zagrywki, pozycja 1 na 6, 6 na 5, 5 na 4, 4 na 3, a 3 na 2.',
  },
  {
    question: 'Ile punktów potrzeba, aby wygrać seta i mecz w siatkówce?',
    answer: 'Standardowe sety od 1 do 4 rozgrywane są do 25 punktów z wymaganą przewagą co najmniej 2 punktów. W przypadku remisu 24:24 gra toczy się do momentu uzyskania dwupunktowej przewagi. Decydujący 5. set (tie-break) grany jest do 15 punktów, również z przewagą 2 punktów.',
  },
  {
    question: 'Ile przerw i zmian zawodników przysługuje w jednym secie?',
    answer: 'Zgodnie z oficjalnymi przepisami FIVB każda drużyna może wykorzystać maksymalnie dwie 30-sekundowe przerwy na żądanie (time-out) oraz do sześciu zmian zawodników w każdym secie. Pula przerw i zmian odnawia się wraz z rozpoczęciem nowego seta.',
  },
  {
    question: 'Jakie są oficjalne pozycje na boisku siatkarskim?',
    answer: 'Pozycje numerowane są od 1 do 6: Pozycja 1 to Prawy Obrońca (zagrywający), Pozycja 2 to Prawy Skrzydłowy, Pozycja 3 to Środkowy Bloku, Pozycja 4 to Lewy Skrzydłowy, Pozycja 5 to Lewy Obrońca, a Pozycja 6 to Środkowy Obrońca.',
  },
  {
    question: 'Jak wygodnie prowadzić protokół meczu na telefonie lub tablecie?',
    answer: 'Interfejs zaprojektowano z myślą o obsłudze dotykowej. Dotknij dużych cyfr wyniku lub przycisku plusa, aby dodać punkt. Przyciski funkcyjne pozwalają szybko uruchomić 30-sekundowe odliczanie czasu, odnotować zmianę oraz zamienić strony boiska.',
  },
];

const howToData = [
  { name: 'Wybierz Format Meczu', text: 'Wybierz system do 3 wygranych setów, do 2 wygranych setów lub pojedynczy set.' },
  { name: 'Przyznawaj Punkty', text: 'Dotknij karty danej drużyny, aby dodać punkt. Przejścia i zmiany zagrywki kalkulowane są automatycznie.' },
  { name: 'Zarządzaj Przerwami i Ustawieniem', text: 'Uruchamiaj 30-sekundowy stoper przerw, rejestruj zmiany i kontroluj schemat rotacji na boisku.' },
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Oficjalne Przepisy Gry w Siatkówkę FIVB i System Punktacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W siatkówce halowej obowiązuje system ciągłego liczenia punktów (rally point system), gdzie każda zakończona wymiana skutkuje zdobyciem punktu bez względu na to, kto zagrywał. Oficjalne spotkania pod egidą FIVB wymagają precyzyjnego ewidencjonowania setów, rotacji zawodników w prawo po odzyskaniu zagrywki oraz respektowania limitów przerw technicznych.',
    },
    {
      type: 'title',
      text: 'Numeracja Pozycji oraz Strefy Ataku i Obrony',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Boisko o wymiarach 18x9 metrów podzielone jest na sześć stref rotacyjnych. Linię obrony w drugiej linii tworzą pozycje 1 (prawy obrońca / zagrywający), 6 (środkowy obrońca) oraz 5 (lewy obrońca). Linię ataku przy siatce stanowią pozycje 2 (prawy skrzydłowy), 3 (środkowy) i 4 (lewy skrzydłowy). W momencie uderzenia zagrywki zawodnicy muszą zachować prawidłowe ustawienie wzajemne.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Zasady Decydującego Seta Tiebreak',
      html: '<p>W przypadku konieczności rozegrania decydującego seta (5. set przy meczu do 3 wygranych lub 3. set przy meczu do 2 wygranych), próg punktowy wynosi <strong>15 punktów</strong>. Drużyny zmieniają strony boiska, gdy prowadzący zespół osiągnie 8 punktów, z zachowaniem wymogu dwupunktowej przewagi.</p>',
    },
    {
      type: 'title',
      text: 'Zarządzanie Przerwami dla Trenera i Zmianami',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Każdy zespół dysponuje dwoma 30-sekundowymi przerwami w secie na korektę założeń taktycznych. Dozwolonych jest do sześciu zmian zawodników w secie, przy czym zawodnik z wyjściowego składu może opuścić boisko tylko raz w secie i powrócić wyłącznie na swoją pierwotną pozycję.',
    },
  ],
  ui: {
    teamA: 'Drużyna Alfa',
    teamB: 'Drużyna Beta',
    points: 'Punkty',
    sets: 'Sety',
    set: 'Set',
    match: 'Mecz',
    serving: 'Zagrywka',
    sideout: 'Przejście Zagrywki',
    rotation: 'Rotacja',
    timeout: 'Przerwa (30s)',
    timeoutsLeft: 'Przerwy',
    substitutions: 'Zmiany',
    matchPoint: 'Piłka Meczowa',
    setPoint: 'Piłka Setowa',
    winner: 'Zwycięzca Meczu',
    reset: 'Nowy Mecz',
    resetConfirm: 'Zresetować wynik bieżącego meczu?',
    cancel: 'Anuluj',
    undo: 'Cofnij',
    switchSides: 'Zmień Strony',
    fullscreen: 'Pełny Ekran',
    exitFullscreen: 'Zamknij Pełny Ekran',
    rotateCourt: 'Obróć',
    substitutePlayer: 'Zmiana',
    matchModeBestOf3: 'Do 2 Wygranych',
    matchModeBestOf5: 'Do 3 Wygranych',
    matchModeSingleSet: 'Pojedynczy Set',
    targetPoints25: 'Set do 25 pkt (+2)',
    targetPoints15: 'Tie-break do 15 pkt (+2)',
    pos1RightBack: 'P1 Prawy Obrońca (Zagrywka)',
    pos2RightFront: 'P2 Prawy Skrzydłowy',
    pos3MiddleFront: 'P3 Środkowy',
    pos4LeftFront: 'P4 Lewy Skrzydłowy',
    pos5LeftBack: 'P5 Lewy Obrońca',
    pos6MiddleBack: 'P6 Środkowy Obrońca',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Ustawienie Taktyczne na Boisku',
    historyLogTitle: 'Podsumowanie Setów i Historia',
  },
};
