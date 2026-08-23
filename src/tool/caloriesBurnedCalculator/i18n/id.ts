import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'kalkulator-kalori-terbakar-olahraga';
const title = 'Kalkulator Kalori Terbakar Olahraga dan MET';
const description = 'Estimasi kalori kotor dan bersih yang terbakar dari olahraga berdasarkan aktivitas, intensitas, berat badan, durasi, dan nilai MET Kompendium 2024.';

const faq = [
  {
    question: 'Bagaimana kalkulator kalori terbakar mengestimasi kalori olahraga?',
    answer: 'Alat ini menggabungkan nilai MET aktivitas yang dipilih dengan berat badan dan durasi. Estimasi menggunakan konvensi standar MET yaitu 3,5 ml oksigen per kg per menit saat istirahat.',
  },
  {
    question: 'Apa perbedaan antara kalori kotor dan bersih yang terbakar?',
    answer: 'Kalori kotor mencakup seluruh estimasi konsumsi energi selama aktivitas. Kalori bersih mengurangkan energi yang digunakan tubuh saat istirahat pada waktu yang sama.',
  },
  {
    question: 'Apa arti MET dalam kalkulator kalori olahraga?',
    answer: 'MET adalah kelipatan dari laju metabolisme istirahat. Aktivitas 3 MET memiliki konsumsi energi sekitar tiga kali lipat dari garis acuan istirahat.',
  },
  {
    question: 'Bisakah saya menggunakan alat ini untuk jalan kaki, lari, bersepeda, atau olahraga lain?',
    answer: 'Ya. Pilih dari jalan kaki, lari, bersepeda, berenang, bola basket, sepak bola, menari, mendaki, lompat tali, latihan sirkuit, latihan kekuatan, dan yoga.',
  },
  {
    question: 'Mengapa hasilnya berbeda dari jam tangan pintar saya?',
    answer: 'Jam tangan pintar sering menggunakan detak jantung dan sensor gerak. Kalkulator ini berdasarkan tabel MET terpublikasi dan berat badan Anda.',
  },
  {
    question: 'Apakah estimasi ini cocok untuk keputusan medis atau diet?',
    answer: 'Tidak. Hasilnya adalah estimasi edukatif dan informatif. Ini tidak mengukur metabolisme pasti Anda dan tidak menggantikan saran medis.',
  },
];

const howTo = [
  {
    name: 'Pilih aktivitas',
    text: 'Pilih olahraga atau gerakan yang paling sesuai dengan sesi Anda untuk memuat acuan MET.',
  },
  {
    name: 'Pilih tingkat usaha',
    text: 'Pilih intensitas ringan, sedang, atau berat sesuai dengan tempo yang Anda pertahankan.',
  },
  {
    name: 'Masukkan berat badan dan durasi',
    text: 'Isi berat badan Anda dan durasi sesi dalam menit.',
  },
  {
    name: 'Lihat kalori kotor dan bersih',
    text: 'Lihat kalori kotor untuk konsumsi total dan kalori bersih untuk pengeluaran ekstra di atas istirahat.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan umum tentang kalori yang terbakar',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'Sumber dan acuan MET',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Ubah sesi olahraga menjadi estimasi yang bermanfaat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator kalori terbakar sangat berguna ketika asumsinya disajikan secara transparan. Alat ini memungkinkan Anda memilih aktivitas, mengatur intensitas, serta memasukkan berat badan dan durasi.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: 'acuan aktivitas' },
        { value: '3', label: 'tingkat usaha' },
        { value: '2', label: 'tampilan kalori' },
      ],
    },
    {
      type: 'title',
      text: 'Mengapa aktivitas, intensitas, berat badan, dan waktu itu penting',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Waktu yang sama membutuhkan energi berbeda',
          description: 'Tiga puluh menit yoga ringan, jalan cepat, atau lari cepat memiliki kebutuhan energi yang sangat berbeda.',
        },
        {
          title: 'Aktivitas yang sama bervariasi sesuai usaha',
          description: 'Bersepeda santai berbeda dengan latihan bersepeda cepat. Pilih intensitas yang menggambarkan sebagian besar sesi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kalori kotor dan bersih menjawab pertanyaan berbeda',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Tampilan', 'Cakupan', 'Kapan membantu'],
      rows: [
        ['Kalori kotor', 'Total estimasi konsumsi energi untuk aktivitas.', 'Untuk membandingkan beban keseluruhan dari sesi yang berbeda.'],
        ['Kalori bersih', 'Estimasi konsumsi setelah dikurangi tingkat istirahat.', 'Untuk memahami konsumsi energi ekstra yang dihasilkan oleh olahraga.'],
        ['Kalori per menit', 'Kalori kotor dibagi dengan durasi sesi.', 'Untuk membandingkan laju pengeluaran energi berdasarkan intensitas.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gunakan hasil sebagai garis acuan',
      badge: 'Konteks penting',
      html: '<p>Nilai MET adalah acuan statistik populasi. Kebugaran, usia, komposisi tubuh, dan teknik dapat mengubah konsumsi riil.</p>',
    },
    {
      type: 'title',
      text: 'Tips untuk perbandingan yang lebih andal',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan pengaturan sama:</strong> bandingkan sesi dengan kategori aktivitas yang sama.',
        '<strong>Ukur hanya waktu aktif:</strong> hitung hanya menit di mana Anda benar-benar bergerak.',
        '<strong>Konsisten dengan satuan:</strong> beralih antara kg dan lbs tanpa kehilangan akurasi.',
        '<strong>Amati tren:</strong> gunakan hasil sebagai panduan umum daripada angka mutlak.',
      ],
    },
    {
      type: 'tip',
      title: 'Perbedaan dengan jam tangan pintar Anda',
      html: 'Jam tangan pintar menggabungkan detak jantung dan gerakan, sedangkan alat ini menggunakan tabel MET terstandarisasi dan berat badan.',
    },
  ],
  ui: {
    activityLabel: 'Aktivitas',
    intensityLabel: 'Usaha biasa',
    weightLabel: 'Berat badan',
    durationLabel: 'Durasi aktif',
    unitsLabel: 'Satuan berat',
    metricUnit: 'Metrik',
    imperialUnit: 'Imperial',
    activityWalking: 'Jalan kaki',
    activityRunning: 'Lari',
    activityCycling: 'Bersepeda',
    activitySwimming: 'Berenang',
    activityBasketball: 'Bola basket',
    activitySoccer: 'Sepak bola',
    activityDancing: 'Menari',
    activityHiking: 'Mendaki',
    activityRopeJumping: 'Lompat tali',
    activityCircuit: 'Latihan sirkuit',
    activityStrength: 'Latihan kekuatan',
    activityYoga: 'Yoga',
    intensityLight: 'Ringan',
    intensityModerate: 'Sedang',
    intensityVigorous: 'Berat',
    weightHint: 'Masukkan berat badan terbaru Anda.',
    durationHint: 'Hitung hanya menit gerakan aktif.',
    activityHint: 'Orbit metabolisme',
    resultEyebrow: 'Estimasi sesi Anda',
    resultTitle: 'Energi dalam gerakan',
    grossCaloriesLabel: 'Kalori kotor',
    netCaloriesLabel: 'Bersih di atas istirahat',
    perMinuteLabel: 'Tempo',
    metLabel: 'Acuan MET',
    intensityBandLabel: 'Tingkat intensitas',
    lightBand: 'Usaha ringan',
    moderateBand: 'Usaha sedang',
    vigorousBand: 'Usaha berat',
    methodNote: 'Menggunakan rumus MET x 3,5 x berat dalam kg ÷ 200 x menit. Kotor mencakup istirahat; bersih mengurangkan 1 MET.',
    estimateNotice: 'Ini adalah estimasi edukatif dan bukan resep medis atau diet.',
    resetButton: 'Pulihkan contoh 30 menit jalan kaki',
    activityMenuLabel: 'Pilih aktivitas',
    selectActivity: 'Pilih aktivitas',
    energySceneLabel: 'Estimasi visual pengeluaran energi sesi',
  },
};
