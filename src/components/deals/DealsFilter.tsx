import { useState, useEffect, useCallback } from 'react';
import { Deal } from '../../types/deal';

interface FilterState {
  industry: string;
  location: string;
  dealStatus: string;
  revenueRange: string;
  employeeRange: string;
}

interface DealsFilterProps {
  deals: Deal[];
  onFilterChange: (filteredDeals: Deal[]) => void;
}

export default function DealsFilter({ deals, onFilterChange }: DealsFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    industry: '',
    location: '',
    dealStatus: '',
    revenueRange: '',
    employeeRange: '',
  });

  // 提取所有可能的选项
  const industries = Array.from(new Set(deals.map(deal => deal.industry))).sort();
  const locations = Array.from(new Set(deals.map(deal => deal.location))).sort();
  const revenueRanges = [
    { label: 'All', value: '' },
    { label: '$0-10M', value: '0-10' },
    { label: '$10-25M', value: '10-25' },
    { label: '$25-50M', value: '25-50' },
    { label: '$50M+', value: '50-999' },
  ];
  const employeeRanges = [
    { label: 'All', value: '' },
    { label: '1-50', value: '0-50' },
    { label: '51-100', value: '51-100' },
    { label: '101-200', value: '101-200' },
    { label: '200+', value: '201-999' },
  ];

  // 处理筛选逻辑
  const applyFilters = useCallback((currentFilters: FilterState) => {
    let filteredDeals = [...deals];

    // 行业筛选
    if (currentFilters.industry) {
      filteredDeals = filteredDeals.filter(deal => deal.industry === currentFilters.industry);
    }

    // 地区筛选
    if (currentFilters.location) {
      filteredDeals = filteredDeals.filter(deal => deal.location === currentFilters.location);
    }

    // 交易状态筛选
    if (currentFilters.dealStatus) {
      filteredDeals = filteredDeals.filter(deal => deal.dealStatus === currentFilters.dealStatus);
    }

    // 收入范围筛选
    if (currentFilters.revenueRange) {
      const [min, max] = currentFilters.revenueRange.split('-').map(Number);
      filteredDeals = filteredDeals.filter(deal => {
        const revenue = parseInt(deal.annualRevenue.replace(/[^0-9]/g, ''));
        return revenue >= min && revenue <= max;
      });
    }

    // 员工数量筛选
    if (currentFilters.employeeRange) {
      const [min, max] = currentFilters.employeeRange.split('-').map(Number);
      filteredDeals = filteredDeals.filter(deal => 
        deal.employeeCount >= min && deal.employeeCount <= max
      );
    }

    return filteredDeals;
  }, [deals]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    const filteredDeals = applyFilters(newFilters);
    onFilterChange(filteredDeals);
  };

  // 初始化时应用一次筛选
  useEffect(() => {
    const filteredDeals = applyFilters(filters);
    onFilterChange(filteredDeals);
  }, [deals]); // 只在deals改变时重新筛选

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">Filter Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 行业筛选 */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Industry
          </label>
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full rounded-md border border-neutral-300 py-2 px-3 text-sm"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* 地区筛选 */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full rounded-md border border-neutral-300 py-2 px-3 text-sm"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* 交易状态筛选 */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Deal Status
          </label>
          <select
            value={filters.dealStatus}
            onChange={(e) => handleFilterChange('dealStatus', e.target.value)}
            className="w-full rounded-md border border-neutral-300 py-2 px-3 text-sm"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* 收入范围筛选 */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Annual Revenue
          </label>
          <select
            value={filters.revenueRange}
            onChange={(e) => handleFilterChange('revenueRange', e.target.value)}
            className="w-full rounded-md border border-neutral-300 py-2 px-3 text-sm"
          >
            {revenueRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* 员工数量筛选 */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Employee Count
          </label>
          <select
            value={filters.employeeRange}
            onChange={(e) => handleFilterChange('employeeRange', e.target.value)}
            className="w-full rounded-md border border-neutral-300 py-2 px-3 text-sm"
          >
            {employeeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
