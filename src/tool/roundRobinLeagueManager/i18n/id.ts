import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'manajer-liga-round-robin';
const title = 'Manajer Liga Round Robin untuk Grup';
const description = 'Buat jadwal liga round robin untuk grup Anda, catat setiap hasil pertandingan dan pantau klasemen liga. Kelola beberapa liga dan bagikan salinan lengkap lewat tautan tanpa pendaftaran.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Liga saya',
  libraryEyebrow: 'Tersimpan di perangkat ini',
  libraryIntro: 'Buat liga untuk setiap grup, buka kembali setiap pekan pertandingan dan simpan semua hasil dengan rapi.',
  newLeague: 'Buat liga baru',
  noLeagues: 'Belum ada liga yang tersimpan',
  noLeaguesHint: 'Liga pertama Anda akan muncul di sini dan tetap tersedia di perangkat ini.',
  leagueNameLabel: 'Nama liga',
  leagueNamePlaceholder: 'Liga Jumat Malam',
  teamsLabel: 'Tim atau pemain',
  teamsHint: 'Satu nama per baris, atau pisahkan dengan koma.',
  teamsPlaceholder: 'Kota Utama\nBintang Utara\nSungai Permai\nPuncak Atletik',
  loadExample: 'Muat contoh siap pakai',
  demoLeagueName: 'Liga Jumat Malam',
  demoTeams: 'Kota Utama\nBintang Utara\nSungai Permai\nPuncak Atletik\nKota Lama',
  formatLabel: 'Format musim',
  singleLeg: 'Satu putaran',
  singleLegHint: 'Setiap pasangan bertanding satu kali',
  doubleLeg: 'Kandang dan tandang',
  doubleLegHint: 'Setiap pasangan bertanding dua kali',
  scoringLabel: 'Poin klasemen',
  winPoints: 'Menang',
  drawPoints: 'Seri',
  lossPoints: 'Kalah',
  createLeague: 'Buat liga dan jadwal',
  nameStatus: 'Beri nama liga ini agar grup Anda mudah mengenalinya.',
  emptyStatus: 'Tambahkan minimal dua tim atau pemain.',
  minimumStatus: 'Tambahkan satu peserta lagi untuk membuat jadwal pertandingan.',
  readyStatus: '{count} peserta siap. Seluruh musim akan disimpan secara lokal.',
  duplicateStatus: 'Ubah nama peserta ganda "{name}".',
  maximumStatus: 'Gunakan maksimal 24 peserta dalam satu liga.',
  longNameStatus: 'Pendekkan "{name}" menjadi 40 karakter atau kurang.',
  importLeague: 'Impor JSON liga',
  importHint: 'Cadangan yang diunduh berisi liga lengkap beserta hasilnya.',
  openLeague: 'Buka',
  share: 'Bagikan',
  delete: 'Hapus',
  teamsCount: 'tim',
  roundsCount: 'pekan',
  completedLabel: 'selesai',
  updatedLabel: 'Diperbarui',
  backToLeagues: 'Semua liga',
  newLeagueAction: 'Liga baru',
  allChangesSaved: 'Tersimpan di perangkat ini',
  matchesTab: 'Pertandingan',
  standingsTab: 'Klasemen',
  settingsTab: 'Pengaturan',
  matchday: 'Pekan pertandingan',
  firstLeg: 'Putaran pertama',
  secondLeg: 'Putaran kedua',
  previousRound: 'Pekan sebelumnya',
  nextRound: 'Pekan berikutnya',
  fixtures: 'Jadwal dan hasil',
  enterResult: 'Masukkan skor',
  played: 'Dimainkan',
  pending: 'Menunggu',
  byeLabel: 'Istirahat',
  byeHint: 'Peserta ini tidak bertanding pada pekan ini.',
  standings: 'Klasemen langsung',
  standingsHint: 'Klasemen diperbarui setelah kedua skor dimasukkan. Jika poin sama, urutan ditentukan oleh selisih gol, gol dicetak, dan nama.',
  positionShort: 'Pos',
  teamShort: 'Tim',
  playedShort: 'Main',
  wonShort: 'M',
  drawnShort: 'S',
  lostShort: 'K',
  goalsForShort: 'GM',
  goalsAgainstShort: 'GK',
  goalDifferenceShort: 'SG',
  pointsShort: 'Poin',
  progressLabel: 'Kemajuan musim',
  seasonComplete: 'Musim selesai',
  shareLeague: 'Bagikan liga',
  downloadLeague: 'Unduh cadangan',
  copiedLeague: 'Tautan dengan kondisi liga saat ini telah disalin.',
  copyFailed: 'Peramban memblokir penyalinan tautan liga.',
  downloadedLeague: 'Cadangan liga lengkap telah diunduh.',
  leagueSettings: 'Pengaturan liga',
  settingsHint: 'Ubah nama liga atau penentuan poin. Skor yang sudah ada tidak akan berubah.',
  saveSettings: 'Simpan pengaturan',
  settingsSaved: 'Pengaturan disimpan dan klasemen telah dihitung ulang.',
  dangerZone: 'Zona bahaya',
  deleteLeague: 'Hapus liga',
  confirmDelete: 'Tindakan ini menghapus liga dan semua hasilnya dari perangkat ini.',
  importedLeague: 'Liga lengkap telah diimpor sebagai salinan lokal baru.',
  importFailed: 'Berkas tersebut bukan cadangan liga yang valid.',
  sharedCopy: 'Salinan dibagikan',
  formatSingleMeta: 'round robin tunggal',
  formatDoubleMeta: 'round robin ganda',
};

const faq = [
  {
    question: 'Apakah saya bisa mengelola lebih dari satu liga round robin?',
    answer: 'Ya. Setiap liga tersimpan secara terpisah di perangkat Anda dengan peserta, jadwal, skor, dan sistem poin masing-masing.',
  },
  {
    question: 'Bagaimana cara memasukkan atau mengedit hasil?',
    answer: 'Buka liga, pilih pekan pertandingan, lalu ketik kedua skor. Klasemen akan langsung diperbarui secara otomatis.',
  },
  {
    question: 'Bagaimana klasemen liga dihitung?',
    answer: 'Secara default, tiga poin untuk menang, satu untuk seri, dan nol untuk kalah. Penentuan peringkat menggunakan poin, selisih gol, dan gol dicetak.',
  },
  {
    question: 'Apa yang terjadi jika jumlah peserta ganjil?',
    answer: 'Satu peserta akan mendapat pekan istirahat secara bergantian setiap pekan pertandingan.',
  },
  {
    question: 'Apa saja isi tautan yang dibagikan?',
    answer: 'Tautan memuat salinan nama liga, peserta, format, aturan poin, pekan saat ini, serta seluruh hasil yang telah dimasukkan.',
  },
  {
    question: 'Apakah tautan otomatis terbarui jika ada skor baru?',
    answer: 'Tidak. Tautan adalah tangkapan layar saat disalin. Buat tautan baru jika ada hasil pertandingan terbaru.',
  },
  {
    question: 'Bagaimana cara mencadangkan liga saya?',
    answer: 'Unduh berkas cadangan JSON liga Anda. Berkas ini bisa diimpor kembali di perangkat lain kapan saja.',
  },
];

const howTo = [
  { name: 'Buat liga grup', text: 'Beri nama kompetisi, tambahkan peserta, dan pilih format satu atau dua putaran.' },
  { name: 'Buka pekan pertandingan', text: 'Pilih pekan pertandingan yang sedang berlangsung menggunakan tombol navigasi.' },
  { name: 'Masukkan skor pertandingan', text: 'Ketik skor untuk setiap pertandingan yang selesai untuk memperbarui klasemen.' },
  { name: 'Periksa klasemen', text: 'Lihat klasemen langsung di samping jadwal atau buka tab Klasemen.' },
  { name: 'Bagikan atau cadangkan liga', text: 'Salin tautan untuk grup Anda atau unduh cadangan JSON.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Rencanakan Liga Sebelum Pertandingan Pertama',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Liga round robin berjalan baik jika aturan disepakati terlebih dahulu. Konfirmasikan daftar peserta, pilih format pertandingan, dan tentukan penentuan poin.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Peserta:</strong> Gunakan nama yang konsisten untuk setiap tim atau pemain.',
      '<strong>Format musim:</strong> Pilih satu putaran untuk turnamen singkat atau kandang-tandang untuk liga penuh.',
      '<strong>Poin:</strong> Default adalah 3 poin untuk menang, 1 untuk seri, dan 0 untuk kalah.',
      '<strong>Penentuan imbang:</strong> Sepakati aturan jika ada poin yang sama persis.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Pilih Durasi Musim yang Tepat',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Dengan <strong>n</strong> peserta, satu putaran membutuhkan n × (n - 1) ÷ 2 pertandingan. Format kandang-tandang menggandakan jumlah tersebut.',
  },
  {
    type: 'table' as const,
    headers: ['Peserta', 'Pekan (Satu Putaran)', 'Pertandingan (Satu Putaran)', 'Pertandingan (Kandang Tandang)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (dengan satu istirahat)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Kelola Hasil dan Klasemen dengan Andal',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Satu pencatat skor:</strong> Tunjuk satu orang untuk mencatat hasil agar data tetap konsisten.',
      '<strong>Masukkan kedua skor:</strong> Skor parsial tidak akan mempengaruhi perhitungan klasemen.',
      '<strong>Koreksi langsung:</strong> Setiap perubahan skor akan langsung memperbarui seluruh tabel.',
      '<strong>Bagikan setelah pertandingan:</strong> Kirim tautan baru setelah semua hasil pekan selesai.',
      '<strong>Simpan cadangan:</strong> Unduh berkas JSON sebelum membersihkan data peramban.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Membaca Klasemen Liga dengan Benar',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Klasemen menampilkan total main, menang, seri, kalah, gol dicetak, gol kebobolan, selisih gol, dan poin. Pengurutan didasarkan pada <strong>poin, selisih gol, dan gol dicetak</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Sepakati aturan tie breaker',
    html: 'Tentukan di awal apakah hasil head-to-head atau laga penentuan yang akan dipakai jika nilai sama persis.',
  },
  {
    type: 'title' as const,
    text: 'Menangani Jumlah Peserta Ganjil',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Jika jumlah peserta ganjil, satu peserta akan mendapatkan giliran istirahat pada setiap pekan pertandingan secara adil.',
  },
  {
    type: 'tip' as const,
    title: 'Tautan dibagikan bersifat salinan statis',
    html: 'Ingat bahwa tautan yang dibagikan berisi salinan kondisi saat itu. Buat tautan baru jika ada skor baru.',
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
  faqTitle: 'Pertanyaan Umum tentang Manajer Liga Round Robin',
  faq,
  bibliographyTitle: 'Referensi Format Liga',
  bibliography,
  howTo,
  schemas,
};
