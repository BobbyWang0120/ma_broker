'use client';

import { useParams } from 'next/navigation';
import { mockDeals } from '../../../data/mockDeals';
import { mockDealDetail } from '../../../data/mockDealDetail';
import Link from 'next/link';

export default function DealDetailPage() {
  const params = useParams();
  const dealId = params.id as string;
  
  // 从 mockDeals 中找到对应的项目
  const deal = mockDeals.find(d => d.id === dealId);
  // 使用统一的详细信息
  const dealDetail = mockDealDetail;

  if (!deal) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600">Deal not found</h1>
          <Link href="/deals" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Deals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/deals" className="text-blue-600 hover:underline">
          ← Back to Deals
        </Link>
      </div>
      
      {/* 基本信息 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-4">
          {deal.companyName}
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Company Information</h2>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Industry</dt>
                <dd className="font-medium">{deal.industry}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Location</dt>
                <dd className="font-medium">{deal.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Founded</dt>
                <dd className="font-medium">{deal.foundedYear}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Employees</dt>
                <dd className="font-medium">{deal.employeeCount}</dd>
              </div>
            </dl>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">Financial Information</h2>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Annual Revenue</dt>
                <dd className="font-medium">{deal.annualRevenue}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">EBITDA</dt>
                <dd className="font-medium">{deal.ebitda}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Asking Price</dt>
                <dd className="font-medium">{deal.askingPrice}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Deal Status</dt>
                <dd className="font-medium capitalize">{deal.dealStatus}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-lg font-medium mb-4">Description</h2>
          <p className="text-neutral-700 mb-6">{deal.shortDescription}</p>
          
          <h2 className="text-lg font-medium mb-4">Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {deal.highlights.map((highlight, index) => (
              <li key={index} className="text-neutral-600">{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 详细财务指标 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Financial Metrics</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Profitability</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Gross Profit Margin</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.grossProfitMargin}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Operating Margin</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.operatingMargin}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Net Profit Margin</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.netProfitMargin}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Return on Equity</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.returnOnEquity}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Liquidity</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Current Ratio</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.currentRatio}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Quick Ratio</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.quickRatio}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Working Capital</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.workingCapital}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Cash Flow</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Operating Cash Flow</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.cashFlow.operatingCashFlow}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Free Cash Flow</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.cashFlow.freeCashFlow}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Cash Flow Margin</dt>
                <dd className="font-medium">{dealDetail.financialMetrics.cashFlow.cashFlowMargin}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* 市场分析 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Market Analysis</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Market Overview</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Market Size</dt>
                <dd className="font-medium">{dealDetail.marketAnalysis.marketSize}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Growth Rate</dt>
                <dd className="font-medium">{dealDetail.marketAnalysis.marketGrowthRate}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Market Share</dt>
                <dd className="font-medium">{dealDetail.marketAnalysis.marketShare}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Competitive Landscape</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-neutral-500">Direct Competitors</dt>
                <dd className="font-medium">{dealDetail.marketAnalysis.competitiveLandscape.directCompetitors}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Market Position</dt>
                <dd className="font-medium">{dealDetail.marketAnalysis.competitiveLandscape.marketPosition}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* 运营指标 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Operational Metrics</h2>
        
        <h3 className="text-lg font-medium mb-4">Facilities</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {dealDetail.operationalMetrics.facilities.map((facility, index) => (
            <div key={index} className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{facility.type}</h4>
              <dl className="space-y-1">
                <div>
                  <dt className="text-sm text-neutral-500">Location</dt>
                  <dd className="text-sm">{facility.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-500">Size</dt>
                  <dd className="text-sm">{facility.size}</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-500">Ownership</dt>
                  <dd className="text-sm">{facility.ownership}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-medium mb-4">Workforce</h3>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-3">Departments</h4>
            <div className="space-y-3">
              {dealDetail.operationalMetrics.workforce.departments.map((dept, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{dept.name}</span>
                  <span className="text-sm font-medium">{dept.headcount} employees</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">Key Personnel</h4>
            <div className="space-y-3">
              {dealDetail.operationalMetrics.workforce.keyPersonnel.map((person, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium">{person.position}</div>
                  <div className="text-neutral-500">
                    {person.yearsWithCompany} years • {person.expertise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 客户分析 */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Customer Analysis</h2>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Top Customers</h3>
            <div className="space-y-4">
              {dealDetail.customerAnalysis.topCustomers.map((customer, index) => (
                <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                  <div className="font-medium">{customer.name}</div>
                  <dl className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Revenue Share</dt>
                      <dd className="text-sm font-medium">{customer.revenueShare}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-sm text-neutral-500">Relationship</dt>
                      <dd className="text-sm font-medium">{customer.relationshipLength}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Metrics</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-neutral-500 mb-2">Customer Concentration</dt>
                <dd className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Top 5 Customers</span>
                    <span className="font-medium">{dealDetail.customerAnalysis.customerConcentration.top5Share}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Top 10 Customers</span>
                    <span className="font-medium">{dealDetail.customerAnalysis.customerConcentration.top10Share}</span>
                  </div>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500 mb-2">Customer Retention</dt>
                <dd className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Retention Rate</span>
                    <span className="font-medium">{dealDetail.customerAnalysis.customerRetention.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average Lifetime</span>
                    <span className="font-medium">{dealDetail.customerAnalysis.customerRetention.averageLifetime}</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Geographic Distribution</h3>
        <div className="grid grid-cols-3 gap-4">
          {dealDetail.customerAnalysis.geographicDistribution.map((region, index) => (
            <div key={index} className="bg-neutral-50 p-4 rounded-lg">
              <div className="text-sm font-medium mb-1">{region.region}</div>
              <div className="text-2xl font-semibold">{region.share}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
