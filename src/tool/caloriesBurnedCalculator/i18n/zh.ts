import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { CaloriesBurnedCalculatorUI } from '../ui';

const slug = 'calories-burned-by-exercise-calculator';
const title = '运动消耗卡路里计算器 (基于MET值)';
const description = '根据运动项目、强度、体重、持续时间及2024年指南MET值，估算运动消耗的总卡路里与净卡路里。';

const faq = [
  {
    question: '本计算器如何估算运动消耗的卡路里？',
    answer: '它结合所选运动项目的MET值、体重和持续时间进行计算。估算基于静息状态下每公斤体重每分钟消耗3.5毫升氧气的标准MET规定。',
  },
  {
    question: '总消耗卡路里与净消耗卡路里有何区别？',
    answer: '总消耗卡路里包含运动期间估算的总能量消耗。净消耗卡路里扣除了在相同时间内身体处于静息状态下本会消耗的能量。',
  },
  {
    question: '运动卡路里计算中的MET代表什么？',
    answer: 'MET是基础代谢率的倍数。3 MET的运动意味着其能量消耗大约是静息参考值的3倍。',
  },
  {
    question: '能否用于计算步行、跑步、游泳等各类运动？',
    answer: '可以。支持步行、跑步、骑行、游泳、篮球、足球、舞蹈、徒步、跳绳、循环训练、力量训练及瑜伽等项目。',
  },
  {
    question: '为什么计算结果与智能手表显示不一致？',
    answer: '智能手表通常结合心率和运动传感器。本计算器基于公开发表的MET表格和体重进行标准推算。',
  },
  {
    question: '这些估算结果是否可用于医疗或饮食处方？',
    answer: '不可以。本结果仅供参考与教育用途，不能测量确切代谢率，亦不可替代专业医疗诊断。',
  },
];

const howTo = [
  {
    name: '选择运动项目',
    text: '选择与您实际进行的运动最接近的项目以加载MET参考值。',
  },
  {
    name: '选择运动强度',
    text: '根据您保持的总体节奏选择轻松、中等或剧烈的运动强度。',
  },
  {
    name: '输入体重与时间',
    text: '输入您的体重以及实际持续运动的分钟数。',
  },
  {
    name: '查看卡路里结果',
    text: '查看总消耗卡路里、扣除静息消耗后的净卡路里及每分钟消耗速率。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<CaloriesBurnedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '关于运动消耗卡路里的常见问题',
  faq,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  bibliographyTitle: 'MET值来源与参考文献',
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: '将运动过程转化为直观有用的估算数据',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当计算前提清晰透明时，运动卡路里计算器最富实用价值。本工具允许您选择运动、调整强度、输入体重与时间，全面了解总消耗与净消耗。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '12', label: '运动参考项目' },
        { value: '3', label: '强度分级' },
        { value: '2', label: '卡路里视图' },
      ],
    },
    {
      type: 'title',
      text: '为什么运动、强度、体重与时间同样重要',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '相同时间下的能量消耗各不相同',
          description: '30分钟轻松瑜伽、快走或剧烈跑步的能量需求完全不同。',
        },
        {
          title: '同种运动因强度不同而差异明显',
          description: '休闲骑行与高强度自行车训练不可混为一谈。请选择代表您主要训练状态的强度。',
        },
      ],
    },
    {
      type: 'title',
      text: '总消耗与净消耗解答不同维度的问题',
      level: 2,
    },
    {
      type: 'table',
      headers: ['视图', '包含内容', '适用场景'],
      rows: [
        ['总消耗卡路里', '所选运动项目的估算总能量消耗。', '用于比较不同运动训练的整体负荷。'],
        ['净消耗卡路里', '扣除同期静息基础代谢后的估算消耗。', '用于了解运动本身额外带来的能量消耗。'],
        ['每分钟卡路里', '总消耗卡路里除以运动持续时间。', '用于根据强度比较能量消耗速率。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '请将计算结果作为参考基准',
      badge: '重要前提',
      html: '<p>MET值为统计群体参考值。体能、年龄、身体成分和运动技术均会影响实际消耗。',
    },
    {
      type: 'title',
      text: '获得更可靠对比数据的建议',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>保持设定一致：</strong>使用相同运动分类比较历史训练。',
        '<strong>仅测量实际运动时间：</strong>仅统计身体处于持续运动中的分钟数。',
        '<strong>保持单位统一：</strong>在kg与lbs之间切换时保持精度一致。',
        '<strong>关注长期趋势：</strong>将数值作为总体参考而非绝对精准数据。',
      ],
    },
    {
      type: 'tip',
      title: '与智能穿戴设备的差异',
      html: '智能穿戴设备通常结合心率与运动传感器，而本工具基于标准化MET表格与体重。',
    },
  ],
  ui: {
    activityLabel: '运动项目',
    intensityLabel: '平均强度',
    weightLabel: '体重',
    durationLabel: '运动时间',
    unitsLabel: '体重单位',
    metricUnit: '公制 (kg)',
    imperialUnit: '英制 (lbs)',
    activityWalking: '步行',
    activityRunning: '跑步',
    activityCycling: '骑行',
    activitySwimming: '游泳',
    activityBasketball: '篮球',
    activitySoccer: '足球',
    activityDancing: '舞蹈',
    activityHiking: '徒步',
    activityRopeJumping: '跳绳',
    activityCircuit: '循环训练',
    activityStrength: '力量训练',
    activityYoga: '瑜伽',
    intensityLight: '轻松',
    intensityModerate: '中等',
    intensityVigorous: '剧烈',
    weightHint: '请输入您最近的体重。',
    durationHint: '仅计算实际运动的分钟数。',
    activityHint: '代谢轨道',
    resultEyebrow: '训练估算结果',
    resultTitle: '运动中的能量',
    grossCaloriesLabel: '总消耗卡路里',
    netCaloriesLabel: '净消耗卡路里',
    perMinuteLabel: '速率',
    metLabel: 'MET参考值',
    intensityBandLabel: '强度等级',
    lightBand: '轻松强度',
    moderateBand: '中等强度',
    vigorousBand: '剧烈强度',
    methodNote: '计算公式: MET x 3.5 x 体重(kg) ÷ 200 x 分钟。总消耗包含静息代谢；净消耗扣除1 MET。',
    estimateNotice: '本结果为教育估算值，非医疗或饮食建议。',
    resetButton: '重置为30分钟步行示例',
    activityMenuLabel: '选择运动',
    selectActivity: '请选择运动项目',
    energySceneLabel: '训练能量消耗的可视化估算',
  },
};
