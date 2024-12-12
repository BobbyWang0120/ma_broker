// 交易项目的类型定义
export interface Deal {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  annualRevenue: string;
  ebitda: string;
  employeeCount: number;
  foundedYear: number;
  shortDescription: string;
  askingPrice: string;
  dealStatus: 'active' | 'pending' | 'closed';
  lastUpdated: string;
  highlights: string[];
}
