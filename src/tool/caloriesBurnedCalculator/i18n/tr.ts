import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'egzersizle-yakanan-kalori-hesaplayici';
const title = 'Egzersiz ve MET ile Yakılan Kalori Hesaplayıcı';
const description = 'Egzersizle yakılan brüt ve net kalorileri aktivite, yoğunluk, vücut ağırlığı, süre ve 2024 Kompendium MET değerlerine göre hesaplayın.';

const faq = [
  {
    question: 'Bu kalori hesaplayıcı egzersiz kalorilerini nasıl tahmin eder?',
    answer: 'Seçilen aktivitenin MET değerini vücut ağırlığı ve süre ile birleştirir. Tahmin, dinlenme anındaki 3,5 ml O2/kg/dk standart MET kuralını kullanır.',
  },
  {
    question: 'Brüt ve net yakılan kaloriler arasındaki fark nedir?',
    answer: 'Brüt kaloriler aktivitenin toplam tahmini enerji harcamasını içerir. Net kaloriler ise aynı sürede vücudunuzun dinlenirken harcayacağı enerjiyi çıkarır.',
  },
  {
    question: 'Kalori hesaplayıcıda MET ne anlama gelir?',
    answer: 'MET, dinlenme metabolizma hızının katıdır. 3 MET değerindeki bir aktivite, dinlenme referansına göre yaklaşık üç kat daha fazla enerji harcar.',
  },
  {
    question: 'Bu aracı yürüyüş, koşu, bisiklet veya sporlar için kullanabilir miyim?',
    answer: 'Evet. Yürüyüş, koşu, bisiklet, yüzme, basketbol, futbol, dans, doğa yürüyüşü, ip atlama, dairesel antrenman, güç antrenmanı ve yoga arasından seçim yapabilirsiniz.',
  },
  {
    question: 'Sonucum neden akıllı saatimden farklı?',
    answer: 'Akıllı saatler genellikle nabız ve hareket sensörlerini kullanır. Bu hesaplayıcı ise yayınlanmış MET tablolarına ve vücut ağırlığınıza dayanır.',
  },
  {
    question: 'Bu tahminler tıbbi kararlar için uygun mudur?',
    answer: 'Hayır. Sonuç bilgilendirme ve eğitim amaçlı bir tahmindir. Kesin metabolizmanızı ölçmez ve tıbbi tavsiye yerine geçmez.',
  },
];

const howTo = [
  {
    name: 'Bir aktivite seçin',
    text: 'Yaptığınız egzersize en yakın spor veya hareketi seçerek MET referansını yükleyin.',
  },
  {
    name: 'Efor seviyesini seçin',
    text: 'Genel temponuza göre hafif, orta veya yüksek yoğunluk seçin.',
  },
  {
    name: 'Ağırlık ve süreyi girin',
    text: 'Vücut ağırlığınızı ve egzersiz sürenizi dakika cinsinden girin.',
  },
  {
    name: 'Brüt ve net kalorileri görün',
    text: 'Toplam harcama için brüt kalorilere, dinlenme üzerindeki ek harcama için net kalorilere bakın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Yakılan kaloriler hakkında sıkça sorulan sorular',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Kaynaklar ve MET referansları',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Egzersiz seanslarınızı kullanışlı tahminlere dönüştürün',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalori hesaplayıcı, varsayımlarını şeffaf şekilde sunduğunda faydalıdır. Bu araç aktiviteyi seçmenize, yoğunluğu ayarlamanıza, ağırlık ve süreyi girmenize olanak tanır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'aktivite referansı' },
        { value: '3', label: 'efor seviyesi' },
        { value: '2', label: 'kalori görünümü' },
      ],
    },
    {
      type: 'title',
      text: 'Aktivite, yoğunluk, ağırlık ve sürenin önemi',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Aynı süre farklı enerji gerektirir',
          description: 'Otuz dakikalık hafif yoga, tempolu yürüyüş veya hızlı koşu tamamen farklı enerji gereksinimlerine sahiptir.',
        },
        {
          title: 'Aynı aktivite efora göre değişir',
          description: 'Sakin bisiklet sürmek ile yoğun bisiklet antrenmanı farklıdır. Seansın çoğunu tanımlayan yoğunluğu seçin.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Brüt ve net kaloriler farklı soruları yanıtlar',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Görünüm', 'İçeriği', 'Ne zaman faydalı'],
      rows: [
        ['Brüt kaloriler', 'Aktivitenin tahmini toplam enerji harcaması.', 'Farklı seansların genel zorluğunu karşılaştırırken.'],
        ['Net kaloriler', 'Dinlenme seviyesi çıkarıldıktan sonraki tahmini harcama.', 'Egzersizin sağladığı ek enerji harcamasını anlamak için.'],
        ['Dakika başına kalori', 'Brüt kalorilerin süreye bölünmüş hali.', 'Yoğunluğa göre harcama hızını karşılaştırırken.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sonucu bir referans olarak değerlendirin',
      badge: 'Önemli bağlam',
      html: '<p>MET değerleri istatistiksel populasyon referanslarıdır. Kondisyon, yaş, vücut bileşimi ve teknik gerçek harcamayı etkileyebilir.</p>',
    },
    {
      type: 'title',
      text: 'Daha güvenilir karşılaştırmalar için ipuçları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Aynı ayarları koruyun:</strong> seansları aynı aktivite kategorisi ile karşılaştırın.',
        '<strong>Yalnızca aktif süreyi ölçün:</strong> sadece fiilen hareket ettiğiniz dakikaları sayın.',
        '<strong>Birimlerde tutarlı olun:</strong> hassasiyet kaybetmeden kg ve lbs arasında geçiş yapın.',
        '<strong>Trendleri izleyin:</strong> değerleri kesin bir sayı yerine genel bir rehber olarak kullanın.',
      ],
    },
    {
      type: 'tip',
      title: 'Akıllı saatinizle olan farklar',
      html: 'Akıllı saatler genellikle nabız ve hareket sensörlerini birleştirirken, bu araç standart MET tablolarını ve ağırlığınızı kullanır.',
    },
  ],
  ui: {
    activityLabel: 'Aktivite',
    intensityLabel: 'Genel efor',
    weightLabel: 'Vücut ağırlığı',
    durationLabel: 'Aktif süre',
    unitsLabel: 'Ağırlık birimi',
    metricUnit: 'Metrik',
    imperialUnit: 'İngiliz',
    activityWalking: 'Yürüyüş',
    activityRunning: 'Koşu',
    activityCycling: 'Bisiklet',
    activitySwimming: 'Yüzme',
    activityBasketball: 'Basketbol',
    activitySoccer: 'Futbol',
    activityDancing: 'Dans',
    activityHiking: 'Doğa yürüyüşü',
    activityRopeJumping: 'İp atlama',
    activityCircuit: 'Dairesel antrenman',
    activityStrength: 'Güç antrenmanı',
    activityYoga: 'Yoga',
    intensityLight: 'Hafif',
    intensityModerate: 'Orta',
    intensityVigorous: 'Yüksek',
    weightHint: 'Güncel vücut ağırlığınızı girin.',
    durationHint: 'Yalnızca aktif hareket dakikalarını sayın.',
    activityHint: 'Metabolik yörünge',
    resultEyebrow: 'Seansınızın tahmini',
    resultTitle: 'Hareket halindeki enerji',
    grossCaloriesLabel: 'Brüt kaloriler',
    netCaloriesLabel: 'Dinlenme üzeri net',
    perMinuteLabel: 'Hız',
    metLabel: 'MET referansı',
    intensityBandLabel: 'Yoğunluk seviyesi',
    lightBand: 'Hafif efor',
    moderateBand: 'Orta efor',
    vigorousBand: 'Yüksek efor',
    methodNote: 'Formül: MET x 3,5 x kg cinsinden ağırlık ÷ 200 x dakika. Brüt dinlenmeyi içerir; net 1 MET çıkarır.',
    estimateNotice: 'Bu bilgilendirme amaçlı bir tahmindir, tıbbi tavsiye değildir.',
    resetButton: '30 dakikalık yürüyüş örneğini sıfırla',
    activityMenuLabel: 'Bir aktivite seçin',
    selectActivity: 'Bir aktivite seçin',
    energySceneLabel: 'Seans enerji harcamasının görsel tahmini',
  },
};
