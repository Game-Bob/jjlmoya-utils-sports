import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'voleybol-skor-tablosu';
const title = 'Voleybol Skor Tablosu: Canlı Sayı, Rotasyon ve FIVB Kuralları';
const description = 'Resmi FIVB kurallarına uygun profesyonel voleybol skorboard ve taktik rotasyon takip aracı. Sayıları, setleri, 6 kişilik saat yönü rotasyonunu, molaları ve oyuncu değişikliklerini anlık yönetin.';

const faqData = [
  {
    question: 'Voleybolda servis kazanıldığında oyuncu rotasyonu nasıl yapılır?',
    answer: 'Servisi karşılayan takım ralliyi kazandığında bir sayı alır ve servis hakkını elde eder (side-out). Servis atılmadan önce sahadaki altı oyuncu saat yönünde bir pozisyon döner: 2 numaradaki oyuncu servis atmak için 1 numaraya geçer, 1 numara 6 ya, 6 numara 5 e, 5 numara 4 e, 4 numara 3 e ve 3 numara 2 ye kayar.',
  },
  {
    question: 'Voleybolda bir seti ve maçı kazanmak için kaç sayı gerekir?',
    answer: '1 den 4 e kadar olan normal setler en az 2 sayı farkla 25 sayıda biter. 24-24 lük beraberlikte fark 2 olana kadar set uzar. Karar seti olan 5. set (tie-break) ise yine en az 2 sayı farkla 15 sayıda sona erer.',
  },
  {
    question: 'Bir sette kaç mola ve oyuncu değişikliği hakkı vardır?',
    answer: 'Resmi FIVB kurallarına göre her takımın set başına iki adet 30 saniyelik mola ve en fazla altı oyuncu değişikliği hakkı bulunur. Mola ve oyuncu değişikliği hakları her yeni sette sıfırlanır.',
  },
  {
    question: 'Voleybol sahasındaki 6 resmi pozisyon hangileridir?',
    answer: 'Pozisyonlar 1 den 6 ya kadar numaralandırılır: 1 numara Sağ Arka (servis atan), 2 numara Sağ Ön, 3 numara Orta Ön, 4 numara Sol Ön, 5 numara Sol Arka ve 6 numara Orta Arka pozisyonudur.',
  },
  {
    question: 'Saha kenarında telefon veya tabletle skor takibi nasıl yapılır?',
    answer: 'Arayüz dokunmatik ekranlara tam uyumludur. Sayı eklemek için büyük rakamlara veya artı butonuna dokunun. Hızlı butonlarla 30 saniyelik mola sayacını başlatabilir, oyuncu değişikliklerini kaydedebilir ve saha değişimi yapabilirsiniz.',
  },
];

const howToData = [
  { name: 'Maç Formatını Belirle', text: '5 setlik maç, 3 setlik maç veya tek set formatını seçin.' },
  { name: 'Sayıları Ekle', text: 'Sayı eklemek için takım kartına dokunun. Servis hakkı ve oyuncu rotasyonları otomatik güncellenir.' },
  { name: 'Mola ve Taktik Yönetimi', text: '30 saniyelik molayı başlatın, oyuncu değişikliklerini kaydedin ve taktik saha dizilişini takip edin.' },
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Resmi FIVB Voleybol Oyun Kuralları ve Sayı Sistemi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Salon voleybolunda ralli sayı sistemi (rally point system) uygulanır; tamamlanan her ralli, servisi kimin kullandığına bakılmaksızın haneye bir sayı olarak yazılır. Resmi FIVB müsabakaları hassas set takibi, servis kazanıldığında zorunlu saat yönü rotasyonu ve mola kurallarına uyum gerektirir.',
    },
    {
      type: 'title',
      text: 'Pozisyon Numaraları ve Sahadaki Hücum-Savunma Alanları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '18x9 metrelik resmi voleybol sahası altı rotasyon bölgesine ayrılır. Arka savunma hattını 1 (sağ arka / servis), 6 (orta arka) ve 5 (sol arka) numaralı pozisyonlar oluşturur. File önü hücum hattını ise 2 (sağ ön), 3 (orta ön) ve 4 (sol ön) numaraları meydana getirir. Servis vuruşu anında tüm oyuncular takım arkadaşlarına göre doğru dizilişte bulunmalıdır.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Karar Seti Tiebreak Kuralları',
      html: '<p>Maç karar setine gittiğinde (5 setlik maçta 5. set veya 3 setlik maçta 3. set) set hedefi <strong>15 sayıya</strong> düşer. Öndeki takım 8 sayıya ulaştığında takımlar saha değişimi yapar ve seti kazanmak için yine 2 sayı fark gerekir.</p>',
    },
    {
      type: 'title',
      text: 'Mola ve Oyuncu Değişikliği Kuralları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her takım taktik düzenlemeler yapmak ve rakip serisini kırmak için set başına iki adet 30 saniyelik mola hakkına sahiptir. Set başına altı oyuncu değişikliği yapılabilir; ilk altıda başlayan bir oyuncu sette yalnızca bir kez oyundan çıkabilir ve sadece çıktığı pozisyona dönebilir.',
    },
  ],
  ui: {
    teamA: 'Takım Alfa',
    teamB: 'Takım Beta',
    points: 'Sayılar',
    sets: 'Setler',
    set: 'Set',
    match: 'Maç',
    serving: 'Serviste',
    sideout: 'Servis Değişimi',
    rotation: 'Rotasyon',
    timeout: 'Mola (30sn)',
    timeoutsLeft: 'Molalar',
    substitutions: 'Değişiklik',
    matchPoint: 'Maç Sayısı',
    setPoint: 'Set Sayısı',
    winner: 'Maç Kazananı',
    reset: 'Yeni Maç',
    resetConfirm: 'Mevcut maç skorunu sıfırlamak istiyor musunuz?',
    cancel: 'İptal',
    undo: 'Geri Al',
    switchSides: 'Saha Değiş',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
    rotateCourt: 'Döndür',
    substitutePlayer: 'Değişiklik',
    matchModeBestOf3: '3 Setlik Maç',
    matchModeBestOf5: '5 Setlik Maç',
    matchModeSingleSet: 'Tek Set',
    targetPoints25: '25 Sayılık Set (+2)',
    targetPoints15: '15 Sayılık Tie-Break (+2)',
    pos1RightBack: 'P1 Sağ Arka (Servis)',
    pos2RightFront: 'P2 Sağ Ön',
    pos3MiddleFront: 'P3 Orta Ön',
    pos4LeftFront: 'P4 Sol Ön',
    pos5LeftBack: 'P5 Sol Arka',
    pos6MiddleBack: 'P6 Orta Arka',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Taktik Saha Dizilişi',
    historyLogTitle: 'Set Özeti ve Geçmiş',
  },
};
