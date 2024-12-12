import { DealDetail } from '../types/dealDetail';

export const mockDealDetail: DealDetail = {
  financialMetrics: {
    grossProfitMargin: "42.5%",
    operatingMargin: "18.3%",
    netProfitMargin: "12.7%",
    returnOnEquity: "21.4%",
    currentRatio: "2.3",
    quickRatio: "1.8",
    debtToEquityRatio: "0.45",
    inventoryTurnover: "8.2x",
    daysReceivables: "45 days",
    daysPayable: "38 days",
    workingCapital: "$4.2M",
    cashFlow: {
      operatingCashFlow: "$5.8M",
      freeCashFlow: "$3.2M",
      cashFlowMargin: "15.4%"
    }
  },
  marketAnalysis: {
    marketSize: "$12.5B",
    marketGrowthRate: "8.5% CAGR",
    marketShare: "4.2%",
    competitiveLandscape: {
      directCompetitors: 5,
      mainCompetitors: [
        "Industry Leader Corp",
        "Global Solutions Inc",
        "Tech Innovators Ltd",
        "Regional Champion Co",
        "Emerging Disruptor LLC"
      ],
      marketPosition: "Strong regional player with growing national presence",
      competitiveAdvantages: [
        "Proprietary technology platform",
        "Strong customer relationships",
        "Efficient operations",
        "Strategic locations",
        "Experienced management team"
      ]
    },
    industryTrends: [
      "Increasing digital transformation",
      "Growing focus on sustainability",
      "Supply chain optimization",
      "Rising customer expectations",
      "Industry consolidation"
    ],
    regulatoryEnvironment: [
      "ISO 9001:2015 certified",
      "Industry-specific compliance requirements met",
      "Environmental regulations compliance",
      "Data privacy and security standards",
      "Regular audit compliance"
    ]
  },
  operationalMetrics: {
    facilities: [
      {
        type: "Manufacturing Plant",
        location: "Detroit, MI",
        size: "75,000 sq ft",
        ownership: "Owned"
      },
      {
        type: "Distribution Center",
        location: "Atlanta, GA",
        size: "45,000 sq ft",
        ownership: "Leased"
      },
      {
        type: "R&D Center",
        location: "Austin, TX",
        size: "15,000 sq ft",
        ownership: "Owned"
      }
    ],
    equipment: {
      type: "Manufacturing and Testing Equipment",
      value: "$12.5M",
      condition: "Excellent - Regular Maintenance",
      averageAge: "4.5 years"
    },
    inventory: {
      totalValue: "$8.5M",
      turnoverRate: "8.2x annually",
      majorCategories: [
        "Raw Materials",
        "Work in Progress",
        "Finished Goods",
        "Spare Parts"
      ],
      managementSystem: "SAP ERP with RFID tracking"
    },
    workforce: {
      departments: [
        {
          name: "Production",
          headcount: 120,
          averageTenure: "5.2 years"
        },
        {
          name: "R&D",
          headcount: 45,
          averageTenure: "4.8 years"
        },
        {
          name: "Sales & Marketing",
          headcount: 35,
          averageTenure: "3.9 years"
        },
        {
          name: "Administration",
          headcount: 25,
          averageTenure: "6.1 years"
        }
      ],
      keyPersonnel: [
        {
          position: "Chief Technology Officer",
          yearsWithCompany: 8,
          expertise: "Product Innovation & R&D"
        },
        {
          position: "VP of Operations",
          yearsWithCompany: 12,
          expertise: "Lean Manufacturing & Supply Chain"
        },
        {
          position: "Sales Director",
          yearsWithCompany: 6,
          expertise: "B2B Sales & Strategic Partnerships"
        }
      ],
      laborRelations: "Non-unionized workforce with high employee satisfaction"
    }
  },
  intellectualProperty: {
    patents: {
      count: 12,
      key: [
        "Manufacturing Process Optimization",
        "Product Design Innovation",
        "Quality Control System"
      ],
      pending: 3
    },
    trademarks: {
      registered: 8,
      key: [
        "Company Brand",
        "Product Line Brands",
        "Technology Platform"
      ]
    },
    proprietaryTechnology: [
      "Custom Manufacturing Software",
      "Quality Control System",
      "Customer Management Platform",
      "Supply Chain Optimization Algorithm"
    ],
    certifications: [
      "ISO 9001:2015",
      "Industry-Specific Safety Certifications",
      "Environmental Management Certification",
      "Quality Management System Certification"
    ]
  },
  customerAnalysis: {
    topCustomers: [
      {
        name: "Enterprise Client A",
        revenueShare: "15%",
        relationshipLength: "8 years",
        contractStatus: "Long-term contract until 2025"
      },
      {
        name: "Enterprise Client B",
        revenueShare: "12%",
        relationshipLength: "5 years",
        contractStatus: "Annual renewal"
      },
      {
        name: "Enterprise Client C",
        revenueShare: "10%",
        relationshipLength: "3 years",
        contractStatus: "Multi-year contract"
      }
    ],
    customerConcentration: {
      top5Share: "45%",
      top10Share: "65%",
      top20Share: "80%"
    },
    customerRetention: {
      rate: "92%",
      averageLifetime: "6.5 years",
      churnRate: "8%"
    },
    geographicDistribution: [
      {
        region: "North America",
        share: "65%"
      },
      {
        region: "Europe",
        share: "20%"
      },
      {
        region: "Asia Pacific",
        share: "15%"
      }
    ]
  }
};
