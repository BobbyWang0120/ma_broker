export interface FinancialMetrics {
  grossProfitMargin: string;
  operatingMargin: string;
  netProfitMargin: string;
  returnOnEquity: string;
  currentRatio: string;
  quickRatio: string;
  debtToEquityRatio: string;
  inventoryTurnover: string;
  daysReceivables: string;
  daysPayable: string;
  workingCapital: string;
  cashFlow: {
    operatingCashFlow: string;
    freeCashFlow: string;
    cashFlowMargin: string;
  };
}

export interface MarketAnalysis {
  marketSize: string;
  marketGrowthRate: string;
  marketShare: string;
  competitiveLandscape: {
    directCompetitors: number;
    mainCompetitors: string[];
    marketPosition: string;
    competitiveAdvantages: string[];
  };
  industryTrends: string[];
  regulatoryEnvironment: string[];
}

export interface OperationalMetrics {
  facilities: {
    type: string;
    location: string;
    size: string;
    ownership: string;
  }[];
  equipment: {
    type: string;
    value: string;
    condition: string;
    averageAge: string;
  };
  inventory: {
    totalValue: string;
    turnoverRate: string;
    majorCategories: string[];
    managementSystem: string;
  };
  workforce: {
    departments: {
      name: string;
      headcount: number;
      averageTenure: string;
    }[];
    keyPersonnel: {
      position: string;
      yearsWithCompany: number;
      expertise: string;
    }[];
    laborRelations: string;
  };
}

export interface IntellectualProperty {
  patents: {
    count: number;
    key: string[];
    pending: number;
  };
  trademarks: {
    registered: number;
    key: string[];
  };
  proprietaryTechnology: string[];
  certifications: string[];
}

export interface CustomerAnalysis {
  topCustomers: {
    name: string;
    revenueShare: string;
    relationshipLength: string;
    contractStatus: string;
  }[];
  customerConcentration: {
    top5Share: string;
    top10Share: string;
    top20Share: string;
  };
  customerRetention: {
    rate: string;
    averageLifetime: string;
    churnRate: string;
  };
  geographicDistribution: {
    region: string;
    share: string;
  }[];
}

export interface DealDetail {
  financialMetrics: FinancialMetrics;
  marketAnalysis: MarketAnalysis;
  operationalMetrics: OperationalMetrics;
  intellectualProperty: IntellectualProperty;
  customerAnalysis: CustomerAnalysis;
}
