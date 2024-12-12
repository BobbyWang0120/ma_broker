import { Deal } from '../types/deal';

// 简单的伪随机数生成器
class Random {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // 生成0到1之间的随机数
  random(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  // 生成指定范围内的整数
  range(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  // 从数组中随机选择一个元素
  pick<T>(array: T[]): T {
    return array[this.range(0, array.length - 1)];
  }
}

// 使用固定种子初始化随机数生成器
const random = new Random(12345);

// 公司名称生成器的辅助数据
const prefixes = [
  'Tech', 'Smart', 'Digital', 'Next', 'Future', 'Global', 'Innovative', 'Advanced',
  'Modern', 'Peak', 'Prime', 'Elite', 'Core', 'Cloud', 'Cyber', 'Data',
];

const roots = [
  'Solutions', 'Systems', 'Dynamics', 'Logic', 'Matrix', 'Nexus', 'Vertex', 'Wave',
  'Pulse', 'Bridge', 'Link', 'Hub', 'Connect', 'Sphere', 'Grid', 'Stack',
];

const suffixes = [
  'Corp', 'Inc', 'Technologies', 'Group', 'Labs', 'Networks', 'Ventures', 'Interactive',
  'International', 'Enterprises', 'Partners', 'Solutions', 'Industries', 'Systems',
];

// 生成公司名称的辅助函数
const generateCompanyName = (): string => {
  const usePrefix = random.random() > 0.3;
  const useSuffix = random.random() > 0.2;
  
  const prefix = usePrefix ? random.pick(prefixes) : '';
  const root = random.pick(roots);
  const suffix = useSuffix ? random.pick(suffixes) : '';
  
  return [prefix, root, suffix].filter(Boolean).join(' ').trim();
};

// 生成模拟数据的辅助函数
const generateMockDeals = (count: number): Deal[] => {
  const industries = [
    'Software Development',
    'E-commerce',
    'Healthcare Technology',
    'Financial Services',
    'Manufacturing',
    'Retail Technology',
    'Business Services',
    'Digital Marketing',
  ];

  const locations = [
    'Boston, MA',
    'New York, NY',
    'San Francisco, CA',
    'Austin, TX',
    'Chicago, IL',
    'Seattle, WA',
    'Los Angeles, CA',
    'Miami, FL',
  ];

  const deals: Deal[] = [];

  for (let i = 0; i < count; i++) {
    const revenue = random.range(5, 55);
    const ebitda = (revenue * (random.random() * 0.3 + 0.1)).toFixed(1);
    const askingMultiple = random.random() * 2 + 3; // 3-5x multiple
    
    deals.push({
      id: `DEAL${(i + 1).toString().padStart(4, '0')}`,
      companyName: generateCompanyName(),
      industry: industries[i % industries.length],
      location: locations[i % locations.length],
      annualRevenue: `$${revenue}M`,
      ebitda: `$${ebitda}M`,
      employeeCount: random.range(20, 220),
      foundedYear: random.range(2000, 2020),
      shortDescription: `A growing ${industries[i % industries.length].toLowerCase()} company with strong market presence and consistent growth trajectory.`,
      askingPrice: `$${(Number(ebitda) * askingMultiple).toFixed(1)}M`,
      dealStatus: random.pick(['active', 'pending', 'closed']) as Deal['dealStatus'],
      lastUpdated: new Date(Date.now() - random.range(1, 30) * 24 * 60 * 60 * 1000).toISOString(),
      highlights: [
        'Consistent revenue growth',
        'Strong customer retention',
        'Proprietary technology',
        'Scalable business model',
      ],
    });
  }

  return deals;
};

// 生成50个模拟交易
export const mockDeals = generateMockDeals(50);
