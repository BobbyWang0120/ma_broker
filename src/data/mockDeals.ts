import { Deal } from '../types/deal';

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
    const revenue = Math.floor(Math.random() * 50) + 5;
    const ebitda = (revenue * (Math.random() * 0.3 + 0.1)).toFixed(1);
    const askingMultiple = Math.random() * 2 + 3; // 3-5x multiple
    
    deals.push({
      id: `DEAL${(i + 1).toString().padStart(4, '0')}`,
      companyName: `Company ${(i + 1).toString().padStart(3, '0')}`,
      industry: industries[i % industries.length],
      location: locations[i % locations.length],
      annualRevenue: `$${revenue}M`,
      ebitda: `$${ebitda}M`,
      employeeCount: Math.floor(Math.random() * 200) + 20,
      foundedYear: Math.floor(Math.random() * 20) + 2000,
      shortDescription: `A growing ${industries[i % industries.length].toLowerCase()} company with strong market presence and consistent growth trajectory.`,
      askingPrice: `$${(Number(ebitda) * askingMultiple).toFixed(1)}M`,
      dealStatus: ['active', 'pending', 'closed'][Math.floor(Math.random() * 3)] as Deal['dealStatus'],
      lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
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
