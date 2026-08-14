import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'papan-skor-voli-online';
const title = 'Papan Skor Voli Online: Hitung Poin, Rotasi Pemain dan Aturan FIVB';
const description = 'Aplikasi papan skor voli online profesional dan pelacak rotasi pemain 6 orang sesuai aturan resmi FIVB. Hitung poin reli, set, time-out, dan pergantian pemain secara real-time.';

const faqData = [
  {
    question: 'Bagaimana aturan rotasi pemain voli saat terjadi pindah bola (side-out)?',
    answer: 'Ketika tim penerima servis memenangkan reli, tim tersebut memperoleh 1 poin dan hak servis (side-out). Sebelum servis dilakukan, keenam pemain di lapangan harus berotasi satu posisi searah jarum jam: pemain di posisi 2 berpindah ke posisi 1 untuk melakukan servis, posisi 1 ke 6, 6 ke 5, 5 ke 4, 4 ke 3, dan 3 ke 2.',
  },
  {
    question: 'Berapa poin yang dibutuhkan untuk memenangkan set dan pertandingan bola voli?',
    answer: 'Set standar 1 hingga 4 dimainkan hingga 25 poin dengan selisih minimal 2 poin. Jika terjadi deuce pada 24-24, permainan dilanjutkan hingga salah satu tim unggul 2 poin. Set penentu ke-5 (tie-break) dimainkan hingga 15 poin dengan selisih minimal 2 poin.',
  },
  {
    question: 'Berapa banyak time-out dan pergantian pemain yang diperbolehkan dalam satu set?',
    answer: 'Berdasarkan regulasi resmi FIVB, setiap tim berhak atas maksimal dua kali time-out berdurasi 30 detik dan hingga enam kali pergantian pemain per set. Jumlah time-out dan pergantian pemain direset pada setiap awal set baru.',
  },
  {
    question: 'Apa saja 6 posisi pemain resmi di lapangan bola voli?',
    answer: 'Posisi diberi nomor 1 sampai 6: Posisi 1 adalah Bek Kanan (Server), Posisi 2 adalah Penyerang Kanan, Posisi 3 adalah Tosser / Blocker Tengah, Posisi 4 adalah Penyerang Kiri (Spiker), Posisi 5 adalah Bek Kiri, dan Posisi 6 adalah Bek Tengah.',
  },
  {
    question: 'Bagaimana cara menggunakan papan skor ini di HP atau tablet saat memimpin pertandingan?',
    answer: 'Tampilan dirancang optimal untuk layar sentuh. Ketuk angka skor besar atau tombol plus untuk menambah poin. Tombol cepat memudahkan hitung mundur time-out 30 detik, pencatatan pergantian pemain, serta tukar lapangan.',
  },
];

const howToData = [
  { name: 'Pilih Format Pertandingan', text: 'Pilih Best of 5 set, Best of 3 set, atau satu set tunggal.' },
  { name: 'Catat Poin Reli', text: 'Ketuk kartu tim yang bersangkutan untuk menambah skor. Pindah servis dan rotasi pemain dihitung otomatis.' },
  { name: 'Kelola Time-out dan Rotasi', text: 'Jalankan timer 30 detik untuk time-out, catat pergantian pemain, dan pantau diagram rotasi lapangan.' },
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Peraturan Resmi FIVB dan Sistem Perhitungan Poin Bola Voli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bola voli ruangan menggunakan sistem reli poin (rally point system), di mana setiap reli yang berakhir menghasilkan poin bagi tim pemenang reli, terlepas dari tim mana yang melakukan servis. Pertandingan resmi FIVB mewajibkan pencatatan set yang tepat, rotasi pemain searah jarum jam saat pindah bola, serta kepatuhan terhadap batasan time-out teknis.',
    },
    {
      type: 'title',
      text: 'Penomoran Posisi dan Zona Serangan Lapangan Voli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lapangan standar berukuran 18x9 meter terbagi menjadi enam zona rotasi. Lini belakang pertahanan diisi posisi 1 (bek kanan / server), 6 (bek tengah), dan 5 (bek kiri). Lini serang depan di dekat net diisi posisi 2 (penyerang kanan), 3 (tengah), dan 4 (penyerang kiri). Pada saat bola diservis, seluruh pemain harus berada dalam formasi posisi relatif yang sah.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Aturan Set Penentu Tiebreak',
      html: '<p>Saat pertandingan berlanjut ke set penentu (set ke-5 pada Best of 5 atau set ke-3 pada Best of 3), target kemenangan turun menjadi <strong>15 poin</strong>. Kedua tim berpindah sisi lapangan saat tim yang memimpin mencapai 8 poin, dengan tetap mempertahankan syarat keunggulan 2 poin untuk menang.</p>',
    },
    {
      type: 'title',
      text: 'Manajemen Time-out dan Batasan Pergantian Pemain',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap tim berhak mengajukan dua kali time-out berdurasi 30 detik per set guna mengatur strategi. Diperbolehkan hingga enam kali pergantian pemain per set, dengan ketentuan bahwa pemain pemain mula-mula hanya dapat digantikan satu kali dalam satu set dan wajib kembali ke posisi semula saat masuk kembali.',
    },
  ],
  ui: {
    teamA: 'Tim Alfa',
    teamB: 'Tim Beta',
    points: 'Poin',
    sets: 'Set',
    set: 'Set',
    match: 'Pertandingan',
    serving: 'Servis',
    sideout: 'Pindah Servis',
    rotation: 'Rotasi',
    timeout: 'Time-out (30s)',
    timeoutsLeft: 'Time-out',
    substitutions: 'Pergantian',
    matchPoint: 'Match Point',
    setPoint: 'Set Point',
    winner: 'Pemenang Pertandingan',
    reset: 'Pertandingan Baru',
    resetConfirm: 'Reset skor pertandingan saat ini?',
    cancel: 'Batal',
    undo: 'Urungkan',
    switchSides: 'Tukar Lapangan',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',
    rotateCourt: 'Putar',
    substitutePlayer: 'Ganti',
    matchModeBestOf3: 'Best of 3',
    matchModeBestOf5: 'Best of 5',
    matchModeSingleSet: 'Set Tunggal',
    targetPoints25: 'Set 25 Poin (+2)',
    targetPoints15: 'Tie-break 15 Poin (+2)',
    pos1RightBack: 'P1 Bek Kanan (Servis)',
    pos2RightFront: 'P2 Penyerang Kanan',
    pos3MiddleFront: 'P3 Tengah',
    pos4LeftFront: 'P4 Penyerang Kiri',
    pos5LeftBack: 'P5 Bek Kiri',
    pos6MiddleBack: 'P6 Bek Tengah',
    liberoLabel: 'Libero',
    tacticalCourtTitle: 'Rotasi Taktis Lapangan',
    historyLogTitle: 'Ringkasan Set dan Riwayat',
  },
};
