import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'marcador-voleibol';
const title = 'Marcador de Voleibol: Puntuación en Directo, Rotaciones y Normativa FIVB';
const description = 'Marcador profesional de voleibol pista y seguimiento de rotaciones tácticas. Controla puntos, sets, rotación horaria de 6 jugadores, tiempos muertos y cambios de saque con visualización interactiva.';

const faqData = [
  {
    question: '¿Cómo funciona la rotación de los jugadores en voleibol tras recuperar el saque?',
    answer: 'Cuando el equipo receptor gana el rally, anota un punto y recupera el derecho al saque (side-out). Antes de efectuar el saque, sus seis jugadores en pista deben rotar una posición en sentido horario: el jugador de la posición 2 pasa a la posición 1 para sacar, el de la 1 pasa a la 6, el de la 6 a la 5, el de la 5 a la 4, el de la 4 a la 3 y el de la 3 a la 2.',
  },
  {
    question: '¿Cuántos puntos se necesitan para ganar un set y el partido en voleibol?',
    answer: 'Los sets regulares (del 1 al 4 en un partido al mejor de 5) se juegan a 25 puntos con una ventaja mínima obligatoria de 2 puntos y sin tope de tanteo. Si se empata a 24-24, el juego continúa hasta que un equipo logre 2 puntos de ventaja. El set decisivo o tie-break (el 5º set en partidos a 5 sets o el 3º en partidos a 3) se disputa a 15 puntos, también con ventaja de 2.',
  },
  {
    question: '¿Cuántos tiempos muertos y sustituciones se permiten por set en voleibol?',
    answer: 'Según el reglamento oficial de la FIVB, cada equipo tiene derecho a solicitar un máximo de dos tiempos muertos de 30 segundos y realizar hasta seis sustituciones de jugadores por set. El cómputo de tiempos muertos y sustituciones se reinicia a cero al comenzar cada nuevo set.',
  },
  {
    question: '¿Cuáles son las 6 posiciones reglamentarias en la pista de voleibol?',
    answer: 'Las posiciones están numeradas del 1 al 6: la Posición 1 es el Zaguero Derecho (servidor), la Posición 2 es el Delantero Derecho, la Posición 3 es el Delantero Central, la Posición 4 es el Delantero Izquierdo, la Posición 5 es el Zaguero Izquierdo y la Posición 6 es el Zaguero Central.',
  },
  {
    question: '¿Cómo se utiliza este marcador táctil en partidos desde el móvil o tablet?',
    answer: 'La interfaz está optimizada para pantallas táctiles. Pulsa sobre los dígitos grandes o el botón de suma para anotar un punto de rally. Utiliza los botones rápidos para activar tiempos muertos de 30 segundos, registrar sustituciones, ajustar rotaciones y alternar campos.',
  },
];

const howToData = [
  { name: 'Elegir Formato del Partido', text: 'Selecciona al mejor de 5 sets, al mejor de 3 sets o set individual.' },
  { name: 'Anotar Puntos de Rally', text: 'Toca en la tarjeta del equipo correspondiente para sumar puntos. El marcador gestiona automáticamente la recuperación del saque y la rotación.' },
  { name: 'Gestionar Tiempos y Rotaciones', text: 'Controla la cuenta atrás de 30 segundos de tiempos muertos, registra sustituciones e inspecciona la pista táctica en tiempo real.' },
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Reglamento Oficial FIVB y Estructura de Puntuación en Voleibol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El voleibol de sala se rige por el sistema de punto continuo o rally point system, en el que cada jugada disputada otorga un punto al marcador, independientemente de qué equipo haya realizado el saque. Los encuentros oficiales de la FIVB exigen un seguimiento riguroso de los sets, rotaciones horarias continuas al recuperar el servicio y control de tiempos técnicos.',
    },
    {
      type: 'title',
      text: 'Numeración de Posiciones y Zonas de Ataque y Defensa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pista reglamentaria de 18x9 metros se divide en seis zonas rotacionales. La línea zaguera de defensa está compuesta por las posiciones 1 (zaguero derecho/servidor), 6 (zaguero central) y 5 (zaguero izquierdo). La línea delantera de ataque la forman las posiciones 2 (delantero derecho), 3 (delantero central) y 4 (delantero izquierdo). En el instante del golpe de saque, los seis jugadores deben respetar su orden posicional relativo.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Normativa del Set Decisivo de Desempate',
      html: '<p>Cuando un encuentro llega al último set decisivo (quinto set en partidos a 5 sets o tercer set en partidos a 3), la meta de puntuación desciende de 25 a <strong>15 puntos</strong>. Los equipos cambian automáticamente de lado de la cancha cuando el equipo que lidera alcanza los 8 puntos, manteniendo la exigencia de una diferencia mínima de 2 puntos para la victoria.</p>',
    },
    {
      type: 'title',
      text: 'Gestión de Tiempos Muertos y Sustituciones Tácticas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada equipo dispone de dos tiempos muertos de 30 segundos por set para planificar jugadas e interrumpir rachas del rival. Se autorizan hasta seis sustituciones por set, con la condición reglamentaria de que un jugador del sexteto titular solo puede ser sustituido una vez por set y reingresar exclusivamente a su posición de origen.',
    },
  ],
  ui: {
    teamA: 'Equipo Alfa',
    teamB: 'Equipo Beta',
    points: 'Puntos',
    sets: 'Sets',
    set: 'Set',
    match: 'Partido',
    serving: 'Al Saque',
    sideout: 'Cambio de Saque',
    rotation: 'Rotación',
    timeout: 'Tiempo Muerto (30s)',
    timeoutsLeft: 'Tiempos',
    substitutions: 'Cambios',
    matchPoint: 'Punto de Partido',
    setPoint: 'Punto de Set',
    winner: 'Ganador del Partido',
    reset: 'Nuevo Partido',
    resetConfirm: '¿Reiniciar el marcador del partido actual?',
    cancel: 'Cancelar',
    undo: 'Deshacer',
    switchSides: 'Cambiar Campo',
    fullscreen: 'Pantalla Completa',
    exitFullscreen: 'Salir Pantalla Completa',
    rotateCourt: 'Rotar',
    substitutePlayer: 'Cambio',
    matchModeBestOf3: 'Mejor de 3',
    matchModeBestOf5: 'Mejor de 5',
    matchModeSingleSet: 'Set Único',
    targetPoints25: 'Set a 25 pts (+2)',
    targetPoints15: 'Tiebreak a 15 pts (+2)',
    pos1RightBack: 'P1 Zaguero Derecho (Saque)',
    pos2RightFront: 'P2 Delantero Derecho',
    pos3MiddleFront: 'P3 Delantero Central',
    pos4LeftFront: 'P4 Delantero Izquierdo',
    pos5LeftBack: 'P5 Zaguero Izquierdo',
    pos6MiddleBack: 'P6 Zaguero Central',
    liberoLabel: 'Líbero',
    tacticalCourtTitle: 'Rotación Táctica en Pista',
    historyLogTitle: 'Resumen de Sets e Historial',
  },
};
