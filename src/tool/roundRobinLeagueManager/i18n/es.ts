import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RoundRobinLeagueManagerUI } from '../ui';

const slug = 'gestor-liga-todos-contra-todos';
const title = 'Gestor de Liga Todos contra Todos';
const description = 'Crea la plantilla de enfrentamientos de tu grupo, registra los resultados y sigue la clasificación. Gestiona varias ligas y comparte una copia completa sin registro.';

const ui: RoundRobinLeagueManagerUI = {
  myLeagues: 'Mis ligas',
  libraryEyebrow: 'Guardado en este dispositivo',
  libraryIntro: 'Crea una liga para cada grupo, ábrela cada jornada y mantén los resultados organizados.',
  newLeague: 'Crear nueva liga',
  noLeagues: 'No hay ligas guardadas',
  noLeaguesHint: 'Tu primera liga aparecerá aquí y se conservará en este dispositivo.',
  leagueNameLabel: 'Nombre de la liga',
  leagueNamePlaceholder: 'Torneo de los Viernes',
  teamsLabel: 'Equipos o participantes',
  teamsHint: 'Un nombre por línea o separados por comas.',
  teamsPlaceholder: 'Atlético Norte\nDeportivo Sur\nUnión Este\nReal Oeste',
  loadExample: 'Cargar un ejemplo listo',
  demoLeagueName: 'Torneo de los Viernes',
  demoTeams: 'Atlético Norte\nDeportivo Sur\nUnión Este\nReal Oeste\nVilla Centro',
  formatLabel: 'Formato de temporada',
  singleLeg: 'A una sola vuelta',
  singleLegHint: 'Cada enfrentamiento se juega una vez',
  doubleLeg: 'Ida y vuelta',
  doubleLegHint: 'Cada enfrentamiento se juega dos veces',
  scoringLabel: 'Puntos de clasificación',
  winPoints: 'Victoria',
  drawPoints: 'Empate',
  lossPoints: 'Derrota',
  createLeague: 'Crear liga y calendario',
  nameStatus: 'Asigna un nombre a la liga para identificarla fácilmente.',
  emptyStatus: 'Añade al menos dos equipos o participantes.',
  minimumStatus: 'Añade un participante más para generar el calendario.',
  readyStatus: '{count} participantes listos. La temporada completa se guardará localmente.',
  duplicateStatus: 'Renombra al participante duplicado "{name}".',
  maximumStatus: 'Usa como máximo 24 participantes por liga.',
  longNameStatus: 'Acorta el nombre "{name}" a 40 caracteres o menos.',
  importLeague: 'Importar JSON de liga',
  importHint: 'La copia de respaldo contiene la liga completa con sus resultados.',
  openLeague: 'Abrir',
  share: 'Compartir',
  delete: 'Eliminar',
  teamsCount: 'equipos',
  roundsCount: 'jornadas',
  completedLabel: 'jugados',
  updatedLabel: 'Actualizado',
  backToLeagues: 'Todas las ligas',
  newLeagueAction: 'Nueva liga',
  allChangesSaved: 'Guardado en este dispositivo',
  matchesTab: 'Partidos',
  standingsTab: 'Clasificación',
  settingsTab: 'Ajustes',
  matchday: 'Jornada',
  firstLeg: 'Ida',
  secondLeg: 'Vuelta',
  previousRound: 'Jornada anterior',
  nextRound: 'Jornada siguiente',
  fixtures: 'Partidos y resultados',
  enterResult: 'Anotar resultado',
  played: 'Jugado',
  pending: 'Pendiente',
  byeLabel: 'Descanso',
  byeHint: 'Este participante no juega en esta jornada.',
  standings: 'Tabla en directo',
  standingsHint: 'La tabla se actualiza al introducir ambos marcadores de un partido. En empate se ordena por puntos, diferencia de goles, goles a favor y nombre.',
  positionShort: 'Pos',
  teamShort: 'Equipo',
  playedShort: 'PJ',
  wonShort: 'PG',
  drawnShort: 'PE',
  lostShort: 'PP',
  goalsForShort: 'GF',
  goalsAgainstShort: 'GC',
  goalDifferenceShort: 'DG',
  pointsShort: 'Pts',
  progressLabel: 'Progreso de la temporada',
  seasonComplete: 'Temporada finalizada',
  shareLeague: 'Compartir liga',
  downloadLeague: 'Descargar respaldo',
  copiedLeague: 'Se ha copiado un enlace con el estado actual de la liga.',
  copyFailed: 'El navegador bloqueó la copia del enlace.',
  downloadedLeague: 'Se ha descargado la copia de respaldo completa.',
  leagueSettings: 'Ajustes de la liga',
  settingsHint: 'Renombra la liga o modifica el reparto de puntos por resultado. Los marcadores existentes no cambiarán.',
  saveSettings: 'Guardar ajustes',
  settingsSaved: 'Ajustes guardados y tabla recalculada correctamente.',
  dangerZone: 'Zona de peligro',
  deleteLeague: 'Eliminar liga',
  confirmDelete: 'Esta acción borrará la liga y todos sus resultados de este dispositivo.',
  importedLeague: 'La liga completa se ha importado como una nueva copia local.',
  importFailed: 'Ese archivo no es un respaldo de liga válido.',
  sharedCopy: 'Copia compartida',
  formatSingleMeta: 'liga a una vuelta',
  formatDoubleMeta: 'liga a ida y vuelta',
};

const faq = [
  {
    question: '¿Puedo gestionar más de una liga todos contra todos?',
    answer: 'Sí. Cada competición se guarda de forma independiente en tu dispositivo con sus propios participantes, partidos, marcadores y sistema de puntuación.',
  },
  {
    question: '¿Cómo anoto o corrijo un resultado?',
    answer: 'Abre la liga, selecciona la jornada e introduce los dos marcadores en la fila del partido. Puedes editar cualquier resultado cuando quieras y la clasificación se actualizará al instante.',
  },
  {
    question: '¿Cómo se calcula la tabla de clasificación?',
    answer: 'El sistema por defecto otorga tres puntos por victoria, uno por empate y cero por derrota. Puedes cambiarlo en Ajustes. Los desempates siguen puntos, diferencia de goles, goles a favor y nombre del equipo.',
  },
  {
    question: '¿Qué ocurre con un número impar de participantes?',
    answer: 'En cada jornada descansa un participante distinto. A lo largo de la vuelta, todos los equipos descansan exactamente una vez y juegan contra el resto.',
  },
  {
    question: '¿Qué información incluye el enlace para compartir?',
    answer: 'El enlace contiene una captura con el nombre, participantes, formato, puntuación, jornada actual y todos los marcadores anotados. Al abrirlo genera una copia independiente para el destinatario.',
  },
  {
    question: '¿El enlace compartido se actualiza automáticamente si cambio un resultado?',
    answer: 'No. El enlace es una instantánea estática tomada en el momento de copiarlo. Si añades partidos más adelante, genera un nuevo enlace para que el grupo vea los cambios.',
  },
  {
    question: '¿Cómo puedo hacer una copia de seguridad o mover mi liga?',
    answer: 'Descarga la liga en formato JSON. Ese archivo guarda toda la competición y te permite importarla en otro dispositivo o recuperarla más adelante.',
  },
];

const howTo = [
  { name: 'Crea la liga del grupo', text: 'Escribe el nombre del torneo, añade a los participantes y elige el formato a una o dos vueltas.' },
  { name: 'Abre la jornada actual', text: 'Selecciona la jornada mediante los botones numerados o las flechas de navegación.' },
  { name: 'Anota los marcadores', text: 'Introduce los goles o puntos de cada partido finalizado. Solo los encuentros completos suman a la tabla.' },
  { name: 'Consulta la clasificación', text: 'Revisa la tabla en directo junto al calendario o pulsa en la pestaña Clasificación para ver los detalles.' },
  { name: 'Comparte o descarga la liga', text: 'Copia un enlace para enviarlo al grupo o descarga un archivo JSON de respaldo.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Planifica la Liga Antes del Primer Partido',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Una liga todos contra todos funciona mejor cuando las normas se acuerdan previamente. Confirma la lista definitiva de equipos, decide si se jugará a una o dos vueltas, establece el reparto de puntos y define el criterio en caso de empate.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Participantes:</strong> usa nombres claros para evitar confusiones en los marcadores.',
      '<strong>Formato:</strong> elige a una vuelta para torneos cortos o ida y vuelta para una competición regular.',
      '<strong>Puntuación:</strong> el estándar es 3 por victoria, 1 por empate y 0 por derrota, aunque puedes adaptarlo.',
      '<strong>Criterio de desempate:</strong> acuerda cómo resolver tablas empatadas antes de empezar el torneo.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Elige una Duración Adaptada a Tu Grupo',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Con <strong>n</strong> participantes, una liga a una vuelta requiere n × (n - 1) ÷ 2 partidos. Jugar a ida y vuelta duplica la cantidad total de jornadas y enfrentamientos.',
  },
  {
    type: 'table' as const,
    headers: ['Participantes', 'Jornadas (una vuelta)', 'Partidos (una vuelta)', 'Partidos (ida y vuelta)'],
    rows: [
      ['4', '3', '6', '12'],
      ['5', '5 (con un descanso por jornada)', '10', '20'],
      ['8', '7', '28', '56'],
      ['12', '11', '66', '132'],
    ],
  },
  {
    type: 'title' as const,
    text: 'Mantén los Resultados Organizados y Claros',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Un solo anotador:</strong> centraliza los resultados en una persona para mantener la coherencia.',
      '<strong>Marcadores completos:</strong> un resultado parcial no suma puntos a la tabla hasta completarse.',
      '<strong>Correcciones inmediatas:</strong> si editas un marcador, toda la clasificación se recalcula al momento.',
      '<strong>Comparte al terminar la jornada:</strong> envía un enlace nuevo tras finalizar los partidos.',
      '<strong>Copia de seguridad:</strong> descarga el archivo JSON antes de limpiar datos del navegador.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Cómo Interpretar la Tabla de Clasificación',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'La tabla contabiliza partidos jugados, ganados, empatados, perdidos, goles a favor, goles en contra, diferencia de goles y puntos totales. El orden se calcula por <strong>puntos, diferencia de goles y goles a favor</strong>.',
  },
  {
    type: 'tip' as const,
    title: 'Acuerda el criterio de desempate',
    html: 'Si dos equipos terminan igualados en todos los coeficientes principales, decide de antemano si el resultado directo o un partido de desempate determinará al ganador.',
  },
  {
    type: 'title' as const,
    text: 'Gestión de Grupos con Número Impar de Equipos',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Cuando hay un número impar de participantes, la herramienta asigna automáticamente un descanso rotativo en cada jornada para que todos los equipos jueguen el mismo número de encuentros.',
  },
  {
    type: 'tip' as const,
    title: 'El enlace compartido es una instantánea',
    html: 'Recuerda que al compartir un enlace estás enviando una copia estática del estado actual de la liga. Si hay marcadores nuevos, deberás generar un nuevo enlace.',
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
  faqTitle: 'Preguntas Frecuentes sobre el Gestor de Liga Todos contra Todos',
  faq,
  bibliographyTitle: 'Referencias sobre Formatos de Liga',
  bibliography,
  howTo,
  schemas,
};
