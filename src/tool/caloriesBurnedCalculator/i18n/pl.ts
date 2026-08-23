import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'kalkulator-spalonych-kalorii-cwiczenia';
const title = 'Kalkulator Spalonych Kalorii podczas Ćwiczeń i MET';
const description = 'Oszacuj brutto i netto spalone kalorie podczas ćwiczeń na podstawie aktywności, intensywności, masy ciała, czasu trwania i wartości MET z Kompendium 2024.';

const faq = [
  {
    question: 'Jak ten kalkulator szacuje kalorie spalone podczas ćwiczeń?',
    answer: 'Łączy wartość MET wybranej aktywności z masą ciała i czasem trwania. Szacunek wykorzystuje standardową konwencję MET wynoszącą 3,5 ml tlenu na kg na minutę w spoczynku.',
  },
  {
    question: 'Jaka jest różnica między spalonymi kaloriami brutto a netto?',
    answer: 'Kalorie brutto obejmują całkowity szacowany wydatek energetyczny podczas aktywności. Kalorie netto odejmują energię, jaką ciało zużyłoby w spoczynku w tym samym czasie.',
  },
  {
    question: 'Co oznacza MET w kalkulatorze kalorii?',
    answer: 'MET to wielokrotność spoczynkowego tempa metabolizmu. Aktywność o wartości 3 MET zużywa około trzykrotnie więcej energii niż spoczynkowy poziom odniesienia.',
  },
  {
    question: 'Czy mogę użyć tego narzędzia do chodzenia, biegania, jazdy na rowerze lub sportu?',
    answer: 'Tak. Wybierz spośród chodzenia, biegania, jazdy na rowerze, pływania, koszykówki, piłki nożnej, tańca, wędrówek, skakania na skakance, treningu obwodowego, siłowego i jogi.',
  },
  {
    question: 'Dlaczego wynik różni się od mojego zegarka sportowego?',
    answer: 'Zegarki sportowe często korzystają z tętna i czujników ruchu. Ten kalkulator opiera się na opublikowanych tabelach MET oraz masie ciała.',
  },
  {
    question: 'Czy te szacunki są odpowiednie do decyzji medycznych lub dietetycznych?',
    answer: 'Nie. Wynik jest szacunkiem edukacyjnym i informacyjnym. Nie mierzy dokładnego metabolizmu ani nie zastępuje porady lekarskiej.',
  },
];

const howTo = [
  {
    name: 'Wybierz aktywność',
    text: 'Wybierz sport lub ćwiczenie najbardziej zbliżone do wykonywanego, aby załadować odnośnik MET.',
  },
  {
    name: 'Wybierz poziom wysiłku',
    text: 'Wybierz intensywność lekką, umiarkowaną lub dużą w zależności od utrzymywanego tempa.',
  },
  {
    name: 'Wprowadź wagę i czas trwania',
    text: 'Wpisz swoją wagę oraz czas trwania treningu w minutach.',
  },
  {
    name: 'Odczytaj kalorie brutto i netto',
    text: 'Sprawdź kalorie brutto dla całkowitego zużycia oraz netto dla dodatkowego wydatku ponad poziom spoczynkowy.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania o spalone kalorie',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Źródła i odniesienia MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Przekształć treningi w przydatne szacunki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator spalonych kalorii jest najbardziej przydatny, gdy jasno przedstawia swoje założenia. To narzędzie pozwala wybrać aktywność, dostosować intensywność oraz wprowadzić wagę i czas.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'odniesień aktywności' },
        { value: '3', label: 'poziomy wysiłku' },
        { value: '2', label: 'widoki kalorii' },
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego aktywność, intensywność, waga i czas mają znaczenie',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ten sam czas to różne wydatki',
          description: 'Trzydzieści minut łagodnej jogi, szybkiego marszu lub intensywnego biegu wymaga całkowicie odmiennych nakładów energii.',
        },
        {
          title: 'Ta sama aktywność zmienia się z wysiłkiem',
          description: 'Spokojna jazda na rowerze różni się od intensywnego treningu kolarskiego. Wybierz intensywność opisującą większość sesji.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kalorie brutto i netto odpowiadają na różne pytania',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Widok', 'Co zawiera', 'Kiedy pomaga'],
      rows: [
        ['Kalorie brutto', 'Całkowity szacowany wydatek energetyczny aktywności.', 'Aby porównać ogólny poziom trudności różnych treningów.'],
        ['Kalorie netto', 'Szacowany wydatek po odjęciu poziomu spoczynkowego.', 'Aby zrozumieć dodatkowy koszt energii wynikający z ćwiczeń.'],
        ['Kalorie na minutę', 'Kalorie brutto podzielone przez czas trwania sesji.', 'Aby porównać tempo spalania w zależności od intensywności.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Traktuj wynik jako punkt odniesienia',
      badge: 'Ważny kontekst',
      html: '<p>Wartości MET to populacyjne odniesienia statystyczne. Kondycja, wiek, skład ciała i technika mogą wpływać na rzeczywiste spalanie.</p>',
    },
    {
      type: 'title',
      text: 'Wskazówki dotyczące wiarygodnych porównań',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Zachowaj te same ustawienia:</strong> porównuj sesje z tą samą kategorią aktywności.',
        '<strong>Mierz tylko czas aktywny:</strong> uwzględniaj wyłącznie minuty faktycznego ruchu.',
        '<strong>Bądź konsekwentny w jednostkach:</strong> przełączaj między kg a lbs bez utraty dokładności.',
        '<strong>Obserwuj trendy:</strong> traktuj wyniki jako ogólną wskazówkę, a nie bezwzględną liczbę.',
      ],
    },
    {
      type: 'tip',
      title: 'Różnice z zegarkiem sportowym',
      html: 'Zegarki łączą zazwyczaj tętno z czujnikami ruchu, podczas gdy ten kalkulator opiera się na standaryzowanych tabelach MET i wadze ciała.',
    },
  ],
  ui: {
    activityLabel: 'Aktywność',
    intensityLabel: 'Zwykły wysiłek',
    weightLabel: 'Masa ciała',
    durationLabel: 'Czas aktywny',
    unitsLabel: 'Jednostka wagi',
    metricUnit: 'Metryczna',
    imperialUnit: 'Imperialna',
    activityWalking: 'Chodzenie',
    activityRunning: 'Bieganie',
    activityCycling: 'Jazda na rowerze',
    activitySwimming: 'Pływanie',
    activityBasketball: 'Koszykówka',
    activitySoccer: 'Piłka nożna',
    activityDancing: 'Taniec',
    activityHiking: 'Wędrówki',
    activityRopeJumping: 'Skakanie na skakance',
    activityCircuit: 'Trening obwodowy',
    activityStrength: 'Trening siłowy',
    activityYoga: 'Joga',
    intensityLight: 'Lekki',
    intensityModerate: 'Umiarkowany',
    intensityVigorous: 'Duży',
    weightHint: 'Wpisz swoją niedawną wagę ciała.',
    durationHint: 'Licz tylko minuty aktywnego ruchu.',
    activityHint: 'Orbita metaboliczna',
    resultEyebrow: 'Szacunek Twojego treningu',
    resultTitle: 'Energia w ruchu',
    grossCaloriesLabel: 'Kalorie brutto',
    netCaloriesLabel: 'Netto ponad spoczynek',
    perMinuteLabel: 'Tempo',
    metLabel: 'Odniesienie MET',
    intensityBandLabel: 'Poziom intensywności',
    lightBand: 'Lekki wysiłek',
    moderateBand: 'Umiarkowany wysiłek',
    vigorousBand: 'Duży wysiłek',
    methodNote: 'Używa wzoru MET x 3,5 x waga w kg ÷ 200 x minuty. Brutto zawiera spoczynek; netto odejmuje 1 MET.',
    estimateNotice: 'Jest to szacunek edukacyjny, a nie recepta medyczna lub dietetyczna.',
    resetButton: 'Przywróć przykład 30 minut chodzenia',
    activityMenuLabel: 'Wybierz aktywność',
    selectActivity: 'Wybierz aktywność',
    energySceneLabel: 'Wizualny szacunek wydatku energetycznego sesji',
  },
};
