import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'devreli-lig-yoneticisi';
const title = 'Devreli Lig Yoneticisi Gruplar Icin';
const description = 'Grubunuz icin devreli lig fiksturu olusturun, tum mac sonuclarini kaydedin ve puan durumunu takip edin. Birden fazla lig yonetin ve kayit olmadan baglanti ile anlik durum paylasin.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Liglerim',
  libraryEyebrow: 'Bu cihazda kayitli',
  libraryIntro: 'Her grup icin bir lig olusturun, her hafta yeniden acin ve tum sonuclari duzenli tutun.',
  newLeague: 'Yeni lig olustur',
  noLeagues: 'Henuz kayitli lig yok',
  noLeaguesHint: 'Ilk liginiz burada gorunecek ve bu cihazda saklanacaktir.',
  leagueNameLabel: 'Lig adi',
  leagueNamePlaceholder: 'Cuma Gecesi Ligi',
  teamsLabel: 'Takimlar veya oyuncular',
  teamsHint: 'Her satirda bir isim veya virgulle ayrilmis liste.',
  teamsPlaceholder: 'Sehir Merkezi SK\nKuzey Yildizi\nNehir Gucu\nZirve Spor',
  loadExample: 'Hazir ornek yukle',
  demoLeagueName: 'Cuma Gecesi Ligi',
  demoTeams: 'Sehir Merkezi SK\nKuzey Yildizi\nNehir Gucu\nZirve Spor\nEski Sehir',
  formatLabel: 'Sezon formati',
  singleLeg: 'Tek devreli',
  singleLegHint: 'Her eslesme bir kez oynanir',
  doubleLeg: 'Cift devreli (Ic ve dis saha)',
  doubleLegHint: 'Her eslesme iki kez oynanir',
  scoringLabel: 'Puan durumu puanlari',
  winPoints: 'Galibiyet',
  drawPoints: 'Beraberlik',
  lossPoints: 'Maglubiyet',
  createLeague: 'Lig ve fikstur olustur',
  nameStatus: 'Grubunuzun kolayca tanimasi icin lige bir isim verin.',
  emptyStatus: 'En az iki takim veya oyuncu ekleyin.',
  minimumStatus: 'Fikstur olusturmak icin bir katilimci daha ekleyin.',
  readyStatus: '{count} katilimci hazir. Tum sezon yerel olarak kaydedilecek.',
  duplicateStatus: 'Mevcut katilimci ismini degistirin: "{name}".',
  maximumStatus: 'Bir ligde en fazla 24 katilimci kullanin.',
  longNameStatus: '"{name}" ismini 40 karakter veya daha kisa tutun.',
  importLeague: 'Lig JSON ice aktar',
  importHint: 'Indirilen yedek tum ligi ve sonuclari icerir.',
  openLeague: 'Ac',
  share: 'Paylas',
  delete: 'Sil',
  teamsCount: 'takim',
  roundsCount: 'hafta',
  completedLabel: 'tamamlandi',
  updatedLabel: 'Guncellendi',
  backToLeagues: 'Tum ligler',
  newLeagueAction: 'Yeni lig',
  allChangesSaved: 'Bu cihazda kayitli',
  matchesTab: 'Maclar',
  standingsTab: 'Puan Durumu',
  settingsTab: 'Ayarlar',
  matchday: 'Hafta',
  firstLeg: 'Ilk devre',
  secondLeg: 'Ikinci devre',
  previousRound: 'Onceki hafta',
  nextRound: 'Sonraki hafta',
  fixtures: 'Maclar ve sonuclar',
  enterResult: 'Skor gir',
  played: 'Oynandi',
  pending: 'Bekliyor',
  byeLabel: 'Bay',
  byeHint: 'Bu katilimci bu hafta mac yapmiyor.',
  standings: 'Canli puan durumu',
  standingsHint: 'Puan tablosu her iki skor girildiginde guncellenir. Esitlik durumunda puan, averaj, atilan gol ve isme bakilir.',
  positionShort: 'Sira',
  teamShort: 'Takim',
  playedShort: 'O',
  wonShort: 'G',
  drawnShort: 'B',
  lostShort: 'M',
  goalsForShort: 'AG',
  goalsAgainstShort: 'YG',
  goalDifferenceShort: 'AV',
  pointsShort: 'Puan',
  progressLabel: 'Sezon ilerlemesi',
  seasonComplete: 'Sezon tamamlandi',
  shareLeague: 'Ligi paylas',
  downloadLeague: 'Yedek indir',
  copiedLeague: 'Ligin mevcut durumunu iceren baglanti kopyalandi.',
  copyFailed: 'Tarayici baglantinin kopyalanmasini engelledi.',
  downloadedLeague: 'Tam lig yedegi indirildi.',
  leagueSettings: 'Lig ayarlari',
  settingsHint: 'Lig adini degistirin veya puan sistemini duzenleyin. Mevcut skorlar korunur.',
  saveSettings: 'Ayarlari kaydet',
  settingsSaved: 'Ayarlar kaydedildi ve puan durumu yeniden hesaplandi.',
  dangerZone: 'Tehlikeli bolge',
  deleteLeague: 'Ligi sil',
  confirmDelete: 'Bu islem ligi ve tum sonuclari bu cihazdan kalici olarak siler.',
  importedLeague: 'Lig yeni bir yerel kopya olarak ice aktarildi.',
  importFailed: 'Bu dosya gecerli bir lig yedegi degil.',
  sharedCopy: 'Paylasilan kopya',
  formatSingleMeta: 'tek devreli lig',
  formatDoubleMeta: 'cift devreli lig',
};

const faq = [
  {
    question: 'Birden fazla devreli lig yonetebilir miyim?',
    answer: 'Evet. Her lig cihazinizda kendi katilimcilari, fiksturu ve puan sistemiyle bagimsiz olarak saklanir.',
  },
  {
    question: 'Mac sonucunu nasil girerim veya duzeltirim?',
    answer: 'Ligi acin, haftayi secin ve her iki skoru girin. Degisiklikler puan durumunu aninda gunceller.',
  },
  {
    question: 'Puan durumu nasil hesaplanir?',
    answer: 'Varsayilan olarak galibiyete 3, beraberlige 1, maglubiyete 0 puan verilir. Esitlikte puan, averaj ve atilan gole bakilir.',
  },
  {
    question: 'Katilimci sayisi tek olursa ne olur?',
    answer: 'Her hafta bir katilimci donusumlu olarak bay gecer (mac yapmaz).',
  },
  {
    question: 'Paylasim baglantisi neleri icerir?',
    answer: 'Baglanti lig adi, takimlar, format, puan sistemi ve girilen tum mac sonuclarinin anlik goruntusunu icerir.',
  },
  {
    question: 'Yeni skor girildiginde paylasilan baglanti otomatik guncellenir mi?',
    answer: 'Hayir. Baglanti kopyalandigi andaki anlik goruntudur. Yeni sonuclar girildiginde yeni bir baglanti olusturun.',
  },
  {
    question: 'Ligi nasil yedekleyebilirim?',
    answer: 'Ligi JSON dosyasi olarak indirin. Bu dosyayi istediginiz zaman baska cihazda ice aktarabilirsiniz.',
  },
];

const howTo = [
  { name: 'Grup ligini olusturun', text: 'Turnuva adini girin, katilimcilari ekleyin ve tek veya cift devre formatini secin.' },
  { name: 'Mevcut haftayi acin', text: 'Numarali hafta butonlarini veya okkllari kullanarak mac haftasina gidin.' },
  { name: 'Skorlari girin', text: 'Puan durumunu guncellemek icin tamamlanan maclarin skorlarini yazin.' },
  { name: 'Puan durumunu kontrol edin', text: 'Maclarin yanindaki canli puan durumunu izleyin veya Puan Durumu sekmesini acin.' },
  { name: 'Paylasin veya yedekleyin', text: 'Grubunuz icin baglantiyi kopyalayin veya JSON yedek dosyasini indirin.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Ilk Mactan Once Ligi Planlayin',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Devreli lig en iyi fikstur olusturulmadan once tum temel kurallar detayli sekilde belirlendiginde calisir. Katilimci listesini onaylayin, sezon formatini secin, puan sistemini belirleyin ve esitlik kuralini bastan netlestirin.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Katilimcilar:</strong> Tum takimlar veya bireysel oyuncular icin net ve tutarli isimler kullanin.',
      '<strong>Sezon formati:</strong> Kisa turnuvalar icin tek devre, uzun ve dengeli ligler icin cift devre secin.',
      '<strong>Puanlama:</strong> Varsayilan galibiyete 3, beraberlige 1, maglubiyete 0 puandir ancak ozellestirilebilir.',
      '<strong>Esitlik kurali:</strong> Puan esitligi durumunda hangi kriterlerin gecerli olacagini lig baslamadan belirleyin.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Grubunuza Uygun Sezon Uzunlugunu Secin',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>n</strong> katilimci ile tek devreli lig n × (n - 1) ÷ 2 mac gerektirir. Cift devre bu toplam mac sayisini ikiye katlar. Daha uzun bir format tek bir tesadufi sonucun etkisini azaltir.',
  },
  {
    type: 'table' as const,
    headers: ['Katilimcilar', 'Hafta (Tek devre)', 'Mac (Tek devre)', 'Mac (Cift devre)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (her hafta 1 takim bay)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Sonuclari Guvenli Sekilde Yonetin',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Tek skorer kullanin:</strong> Karasikligi ve celiskileri önlemek icin skor girisini tek bir kisiye verin.',
      '<strong>Her iki skoru girin:</strong> Eksik ve tek tarafli skorlar puan durumuna etki etmez.',
      '<strong>Aninda duzeltme:</strong> Skor degistirildiginde puan durumu otomatik ve anlik olarak yeniden hesaplanir.',
      '<strong>Hafta bitiminde paylasin:</strong> Ilgili haftanin tum maclari bittikten sonra yeni baglanti gonderin.',
      '<strong>JSON yedegi saklayin:</strong> Tarayici verilerini temizlemeden önce yedek JSON dosyasini indirin.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Puan Tablosunu Dogru Okuma',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Tabloda oynanan, galibiyet, beraberlik, maglubiyet, atilan, yenilen gol, averaj ve puan yer alir. Siralama birincil olarak <strong>puan, averaj ve atilan gole</strong> goredir. Tam esitlikte isim sirasi kullanilir.',
  },
  {
    type: 'tip' as const,
    title: 'Tam esitlik durumunu bastan kararlastirin',
    html: 'Tam esitlik halinde ikili averajin mi yoksa karar macinin mi gecerli olacagini bastan net sekilde belirleyin.',
  },
  {
    type: 'title' as const,
    text: 'Tek Sayida Takim Yonetimi',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Takim sayisi tek ise sistem her hafta otomatik olarak bir takima adil ve donusumlu bir sekilde bay verir.',
  },
  {
    type: 'tip' as const,
    title: 'Paylasilan baglanti anlik goruntudur',
    html: 'Paylasilan baglantinin kopyalandigi andaki durumu gonderdigini unutmayin. Yeni maclar eklendiginde guncel baglanti olusturun.',
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
  faqTitle: 'Devreli Lig Yoneticisi Hakkinda Sıkca Sorulan Sorular',
  faq,
  bibliographyTitle: 'Lig Formatlari Hakkinda Kaynaklar',
  bibliography,
  howTo,
  schemas,
};
