import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VolleyballScoreKeeperUI } from '../ui';
import { volleyballScoreKeeperBibliography } from '../bibliography';

const slug = 'marcador-volei';
const title = 'Placar de Vôlei: Pontuação ao Vivo, Rotações e Regras FIVB';
const description = 'Placar eletrônico profissional para voleibol de quadra e controle de rodízio tático. Acompanhe pontos, sets, rotação no sentido horário, tempos técnicos e substituições.';

const faqData = [
  {
    question: 'Como funciona o rodízio dos jogadores no voleibol após recuperar o saque?',
    answer: 'Quando a equipe que recebe o saque vence o rali, ganha um ponto e o direito de sacar (side-out). Antes de efetuar o saque, os seis jogadores em quadra devem rodar uma posição no sentido horário: o jogador na posição 2 vai para a posição 1 para sacar, a posição 1 vai para a 6, 6 para a 5, 5 para a 4, 4 para a 3 e 3 para a 2.',
  },
  {
    question: 'Quantos pontos são necessários para vencer um set e a partida de voleibol?',
    answer: 'Os sets regulares (do 1º ao 4º set numa partida de melhor de 5) são jogados até 25 pontos com uma vantagem mínima de 2 pontos e sem limite de pontuação. Se houver empate em 24-24, o jogo continua até que uma equipe abra 2 pontos de vantagem. O 5º set decisivo (tie-break) é disputado até 15 pontos, também com diferença de 2.',
  },
  {
    question: 'Quantos pedidos de tempo e substituições são permitidos por set?',
    answer: 'De acordo com as regras oficiais da FIVB, cada equipe tem direito a no máximo dois tempos de 30 segundos e até seis substituições de jogadores por set. As contagens são zeradas no início de cada novo set.',
  },
  {
    question: 'Quais são as 6 posições oficiais na quadra de voleibol?',
    answer: 'As posições são numeradas de 1 a 6: a Posição 1 é a Defesa Direita (sacador), a Posição 2 é a Saída de Rede / Ataque Direito, a Posição 3 é o Meio de Rede, a Posição 4 é a Entrada de Rede / Ataque Esquerdo, a Posição 5 é a Defesa Esquerda e a Posição 6 é a Defesa Central.',
  },
  {
    question: 'Como usar este placar em celulares e tablets durante os jogos?',
    answer: 'A interface foi projetada para telas sensíveis ao toque. Toque nos números grandes ou no botão de mais para pontuar. Use os botões rápidos para acionar a contagem de 30 segundos dos tempos, registrar substituições e alternar os lados da quadra.',
  },
];

const howToData = [
  { name: 'Definir o Formato', text: 'Selecione melhor de 5 sets, melhor de 3 sets ou set único.' },
  { name: 'Marcar os Pontos', text: 'Toque no cartão da equipe para somar pontos. As recuperações de saque e rotações são atualizadas instantaneamente.' },
  { name: 'Gerenciar Tempos e Rodízios', text: 'Inicie a contagem regressiva de 30 segundos, registre as substituições e acompanhe a quadra tática em tempo real.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<VolleyballScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliography: volleyballScoreKeeperBibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regulamento Oficial FIVB e Sistema de Pontuação no Voleibol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O voleibol de quadra utiliza o sistema de ponto por rali (rally point system), onde cada jogada concluída soma diretamente um ponto no placar, independentemente de quem efetuou o saque. As partidas oficiais da FIVB exigem acompanhamento rigoroso dos sets, rodízio no sentido horário a cada virada de bola e cumprimento dos tempos técnicos.',
    },
    {
      type: 'title',
      text: 'Numeração das Posições e Zonas Táticas da Quadra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A quadra regulamentar de 18x9 metros é dividida em seis zonas de rodízio. A linha de fundo (defesa) é formada pelas posições 1 (defesa direita / saque), 6 (defesa central) e 5 (defesa esquerda). A linha de frente (ataque junto à rede) compreende as posições 2 (saída de rede), 3 (meio de rede) e 4 (entrada de rede). No instante do toque do saque, os atletas devem manter suas posições relativas na quadra.',
    },
    {
      type: 'card',
      icon: 'mdi:volleyball',
      title: 'Regras do Set Desempate Tiebreak',
      html: '<p>Quando o jogo vai para o set decisivo (5º set na melhor de 5 ou 3º set na melhor de 3), a pontuação final passa a ser de <strong>15 pontos</strong>. As equipes trocam de quadra assim que o time líder atinge 8 pontos, mantendo a necessidade de 2 pontos de diferença para a vitória.</p>',
    },
    {
      type: 'title',
      text: 'Gestão de Pedidos de Tempo e Substituições',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada time dispõe de dois pedidos de tempo de 30 segundos por set para reorganizar as jogadas e conter o ímpeto adversário. São permitidas até seis substituições por set, sendo que um titular só pode ser substituído uma vez por set e retornar exclusivamente para a sua posição original.',
    },
  ],
  ui: {
    teamA: 'Equipe Alfa',
    teamB: 'Equipe Beta',
    points: 'Pontos',
    sets: 'Sets',
    set: 'Set',
    match: 'Partida',
    serving: 'Sacando',
    sideout: 'Virada de Bola',
    rotation: 'Rodízio',
    timeout: 'Tempo (30s)',
    timeoutsLeft: 'Tempos',
    substitutions: 'Subst.',
    matchPoint: 'Match Point',
    setPoint: 'Set Point',
    winner: 'Vencedor da Partida',
    reset: 'Nova Partida',
    resetConfirm: 'Zerar o placar da partida atual?',
    cancel: 'Cancelar',
    undo: 'Desfazer',
    switchSides: 'Trocar Lados',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
    rotateCourt: 'Rodar',
    substitutePlayer: 'Substituição',
    matchModeBestOf3: 'Melhor de 3',
    matchModeBestOf5: 'Melhor de 5',
    matchModeSingleSet: 'Set Único',
    targetPoints25: 'Set até 25 pts (+2)',
    targetPoints15: 'Tie-break até 15 pts (+2)',
    pos1RightBack: 'P1 Defesa Direita (Saque)',
    pos2RightFront: 'P2 Saída de Rede',
    pos3MiddleFront: 'P3 Meio de Rede',
    pos4LeftFront: 'P4 Entrada de Rede',
    pos5LeftBack: 'P5 Defesa Esquerda',
    pos6MiddleBack: 'P6 Defesa Central',
    liberoLabel: 'Líbero',
    tacticalCourtTitle: 'Rodízio Tático em Quadra',
    historyLogTitle: 'Resumo dos Sets e Histórico',
  },
};
