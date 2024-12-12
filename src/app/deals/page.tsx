'use client';

import { useState, useEffect } from 'react';
import { mockDeals } from '../../data/mockDeals';
import { Deal } from '../../types/deal';
import DealsFilter from '../../components/deals/DealsFilter';
import DealsSearch from '../../components/deals/DealsSearch';

const PAGE_SIZE = 10;

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [displayDeals, setDisplayDeals] = useState<Deal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedDealId, setExpandedDealId] = useState<string | null>(null);

  // 初始化数据
  useEffect(() => {
    setDeals(mockDeals);
    setDisplayDeals(mockDeals);
  }, []);

  // 处理筛选和搜索的组合结果
  const updateDisplayDeals = (searchResults: Deal[], filterResults: Deal[]) => {
    const combinedResults = searchResults.filter(deal => filterResults.includes(deal));
    setDisplayDeals(combinedResults);
    setCurrentPage(1);
  };

  // 处理筛选结果
  const handleFilterChange = (filtered: Deal[]) => {
    updateDisplayDeals(displayDeals, filtered);
  };

  // 处理搜索结果
  const handleSearchResults = (results: Deal[]) => {
    const filterResults = displayDeals.length < deals.length ? displayDeals : deals;
    updateDisplayDeals(results, filterResults);
  };

  // 计算分页
  const totalPages = Math.ceil(displayDeals.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentDeals = displayDeals.slice(startIndex, startIndex + PAGE_SIZE);

  // 分页控制
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedDealId(null); // 切换页面时收起展开的卡片
  };

  // 处理卡片点击
  const handleDealClick = (dealId: string) => {
    setExpandedDealId(prevId => prevId === dealId ? null : dealId);
  };

  if (deals.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-neutral-600">Loading deals...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-neutral-900">Available Deals</h1>
        <p className="text-neutral-600 mt-2">
          Browse through our curated list of M&A opportunities
        </p>
      </div>

      {/* 搜索栏 */}
      <DealsSearch deals={deals} onSearchResults={handleSearchResults} />

      {/* 筛选器 */}
      <DealsFilter deals={deals} onFilterChange={handleFilterChange} />

      {/* 结果统计 */}
      <div className="mb-4 text-sm text-neutral-600">
        Showing {displayDeals.length} {displayDeals.length === 1 ? 'deal' : 'deals'}
      </div>

      {/* 交易列表 */}
      <div className="grid gap-6">
        {currentDeals.map((deal) => (
          <div
            key={deal.id}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 cursor-pointer
                      ${expandedDealId === deal.id ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}
            onClick={() => handleDealClick(deal.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">{deal.companyName}</h2>
                <p className="text-sm text-neutral-500 mt-1">
                  {deal.industry} • {deal.location}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${deal.dealStatus === 'active' ? 'bg-green-100 text-green-800' : ''}
                  ${deal.dealStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${deal.dealStatus === 'closed' ? 'bg-neutral-100 text-neutral-800' : ''}
                `}>
                  {deal.dealStatus.charAt(0).toUpperCase() + deal.dealStatus.slice(1)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-sm text-neutral-500">Annual Revenue</p>
                <p className="font-medium">{deal.annualRevenue}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">EBITDA</p>
                <p className="font-medium">{deal.ebitda}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Asking Price</p>
                <p className="font-medium">{deal.askingPrice}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Employees</p>
                <p className="font-medium">{deal.employeeCount}</p>
              </div>
            </div>

            {/* 展开的详细信息 */}
            {expandedDealId === deal.id && (
              <div className="mt-6 pt-6 border-t border-neutral-200 animate-fadeIn">
                <p className="text-neutral-700">{deal.shortDescription}</p>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">Key Highlights</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {deal.highlights.map((highlight, index) => (
                      <li key={index} className="text-neutral-600 text-sm">{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-sm text-neutral-500">
                  Founded: {deal.foundedYear} • Last Updated: {new Date(deal.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 分页控制 */}
      <div className="mt-8 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md text-sm font-medium text-neutral-700 
                   hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded-md text-sm font-medium
                      ${currentPage === page
                ? 'bg-blue-600 text-white border-blue-600'
                : 'text-neutral-700 hover:bg-neutral-50'
              }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md text-sm font-medium text-neutral-700 
                   hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
