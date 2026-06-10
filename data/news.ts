export type NewsCategory = 'project' | 'regional' | 'industry'

export interface NewsItem {
  id: number
  category: NewsCategory
  title_zh: string
  title_en: string
  date: string
  excerpt_zh: string
  excerpt_en: string
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'project',
    title_zh: 'LeiMall AI智能选品系统正式上线，助力商家精准选品',
    title_en: 'LeiMall AI Product Selection System Officially Launched',
    date: '2026-06-06',
    excerpt_zh: '基于大语言模型和海量交易数据，AI智能选品系统可精准预测东南亚市场热销趋势，帮助商家降低选品风险30%以上。',
    excerpt_en: 'Based on LLM and massive transaction data, AI product selection system accurately predicts Southeast Asia market trends, helping merchants reduce selection risk by over 30%.',
  },
  {
    id: 2,
    category: 'project',
    title_zh: 'LeiMall与泰国最大电商平台达成战略合作',
    title_en: 'LeiMall Establishes Strategic Partnership with Thailand\'s Largest E-commerce Platform',
    date: '2026-05-28',
    excerpt_zh: '双方将在技术对接、流量共享、物流协同等方面深度合作，为中国商家出海泰国市场提供一站式解决方案。',
    excerpt_en: 'Both parties will cooperate in technical integration, traffic sharing, and logistics collaboration, providing one-stop solutions for Chinese merchants entering the Thai market.',
  },
  {
    id: 3,
    category: 'project',
    title_zh: '多租户SaaS架构升级完成，支持万级商家同时在线运营',
    title_en: 'Multi-tenant SaaS Architecture Upgrade Completed',
    date: '2026-05-15',
    excerpt_zh: '平台完成底层架构升级，采用微服务+容器化部署，支持10000+商家同时在线运营，系统稳定性达到99.99%。',
    excerpt_en: 'Platform completed infrastructure upgrade with microservices and containerized deployment, supporting 10,000+ merchants online simultaneously with 99.99% system stability.',
  },
  {
    id: 4,
    category: 'project',
    title_zh: '全球物流追踪系统正式启用，实现全链路可视化',
    title_en: 'Global Logistics Tracking System Officially Enabled',
    date: '2026-04-20',
    excerpt_zh: '整合全球主流物流服务商数据，商家可在LeiMall后台实时追踪包裹状态，提升客户服务体验。',
    excerpt_en: 'Integrated data from global logistics providers. Merchants can track package status in real-time from LeiMall dashboard, improving customer service experience.',
  },
  {
    id: 5,
    category: 'regional',
    title_zh: '印尼市场开放政策利好，跨境电商迎来新机遇',
    title_en: 'Indonesia Market Policy Benefits, Cross-border E-commerce Sees New Opportunities',
    date: '2026-06-01',
    excerpt_zh: '印尼政府发布最新跨境电商扶持政策，降低外资准入门槛，LeiMall将加大印尼市场投入，为商家提供本地化服务。',
    excerpt_en: 'Indonesian government released new cross-border e-commerce support policies, lowering foreign investment thresholds. LeiMall will increase investment in the Indonesian market.',
  },
  {
    id: 6,
    category: 'regional',
    title_zh: '越南电商市场规模预计2026年突破500亿美元',
    title_en: 'Vietnam E-commerce Market Expected to Exceed $50B in 2026',
    date: '2026-05-20',
    excerpt_zh: '越南年轻人口红利持续释放，互联网渗透率快速提升，为跨境电商带来广阔增长空间。',
    excerpt_en: 'Vietnam\'s young demographic dividend continues to expand, with rapidly growing internet penetration, bringing broad growth opportunities for cross-border e-commerce.',
  },
  {
    id: 7,
    category: 'regional',
    title_zh: '马来西亚数字经济快速发展，支付基础设施日益完善',
    title_en: 'Malaysia\'s Digital Economy Develops Rapidly',
    date: '2026-05-10',
    excerpt_zh: '马来西亚政府大力推动数字经济转型，电子钱包渗透率超过60%，为跨境支付提供良好基础。',
    excerpt_en: 'Malaysian government actively promotes digital economy transformation, with e-wallet penetration exceeding 60%, providing a solid foundation for cross-border payments.',
  },
  {
    id: 8,
    category: 'regional',
    title_zh: '菲律宾社交媒体电商爆发式增长，社交购物成主流',
    title_en: 'Philippines Social Media E-commerce Explosive Growth',
    date: '2026-04-25',
    excerpt_zh: '菲律宾社交媒体用户突破8000万，社交电商成为新增长点，LeiMall推出社交电商一体化解决方案。',
    excerpt_en: 'Philippines social media users exceed 80 million, social e-commerce becomes a new growth area. LeiMall launches integrated social e-commerce solutions.',
  },
  {
    id: 9,
    category: 'industry',
    title_zh: 'AI大模型重塑跨境电商，智能化运营成行业标配',
    title_en: 'AI LLMs Reshape Cross-border E-commerce',
    date: '2026-06-03',
    excerpt_zh: '从智能客服、内容生成到需求预测，AI大模型正在全方位赋能跨境电商，LeiMall率先实现全链路AI智能化。',
    excerpt_en: 'From intelligent customer service and content generation to demand forecasting, AI LLMs are empowering cross-border e-commerce. LeiMall leads in full-stack AI intelligence.',
  },
  {
    id: 10,
    category: 'industry',
    title_zh: '全球跨境电商SaaS市场规模预计2026年达3000亿美元',
    title_en: 'Global Cross-border E-commerce SaaS Market to Reach $300B in 2026',
    date: '2026-05-25',
    excerpt_zh: '数字化转型浪潮推动SaaS服务需求激增，东南亚等新兴市场成为增长最快的区域，年复合增长率超过35%。',
    excerpt_en: 'Digital transformation drives surging SaaS demand. Emerging markets like Southeast Asia become the fastest-growing regions with CAGR over 35%.',
  },
  {
    id: 11,
    category: 'industry',
    title_zh: '独立站模式崛起，品牌DTC成跨境电商新趋势',
    title_en: 'Independent Store Model Rising, Brand DTC Becomes New Trend',
    date: '2026-05-12',
    excerpt_zh: '越来越多商家选择建立独立站打造自有品牌，DTC模式帮助商家掌握用户数据、提升品牌溢价能力。',
    excerpt_en: 'More merchants choose to build independent stores for their own brands. DTC model helps merchants own user data and enhance brand premium.',
  },
  {
    id: 12,
    category: 'industry',
    title_zh: '跨境支付技术创新，多币种结算成核心竞争力',
    title_en: 'Cross-border Payment Innovation, Multi-currency Settlement as Core Competency',
    date: '2026-05-01',
    excerpt_zh: '支付服务商推出实时汇率、低手续费解决方案，LeiMall统一支付网关支持20+币种即时结算，降低商家汇损。',
    excerpt_en: 'Payment providers launch real-time exchange rate and low-fee solutions. LeiMall unified payment gateway supports 20+ currencies instant settlement, reducing FX loss.',
  },
]

export default newsData
