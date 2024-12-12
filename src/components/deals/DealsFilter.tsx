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

const SelectWrapper = ({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string; }[];
}) => (
  <div className="relative">
    <label className="block text-sm font-medium text-neutral-600 mb-1.5">
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full appearance-none bg-white border border-neutral-300 rounded-lg
                 py-2.5 pl-4 pr-10 text-sm text-neutral-900 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:border-transparent transition-colors duration-200
                 hover:border-neutral-400 cursor-pointer"
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none'
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-1">
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

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
    { label: 'All Revenues', value: '' },
    { label: '$0 - $10M', value: '0-10' },
    { label: '$10M - $25M', value: '10-25' },
    { label: '$25M - $50M', value: '25-50' },
    { label: '$50M+', value: '50-999' },
  ];
  const employeeRanges = [
    { label: 'All Sizes', value: '' },
    { label: '1 - 50 employees', value: '0-50' },
    { label: '51 - 100 employees', value: '51-100' },
    { label: '101 - 200 employees', value: '101-200' },
    { label: '200+ employees', value: '201-999' },
  ];
  const statusOptions = [
    { label: 'All Statuses', value: '' },
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending' },
    { label: 'Closed', value: 'closed' },
  ];

  // 处理筛选逻辑
  const applyFilters = useCallback((currentFilters: FilterState) => {
    let filteredDeals = [...deals];

    if (currentFilters.industry) {
      filteredDeals = filteredDeals.filter(deal => deal.industry === currentFilters.industry);
    }

    if (currentFilters.location) {
      filteredDeals = filteredDeals.filter(deal => deal.location === currentFilters.location);
    }

    if (currentFilters.dealStatus) {
      filteredDeals = filteredDeals.filter(deal => deal.dealStatus === currentFilters.dealStatus);
    }

    if (currentFilters.revenueRange) {
      const [min, max] = currentFilters.revenueRange.split('-').map(Number);
      filteredDeals = filteredDeals.filter(deal => {
        const revenue = parseInt(deal.annualRevenue.replace(/[^0-9]/g, ''));
        return revenue >= min && revenue <= max;
      });
    }

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
  }, [deals]);

  const handleReset = () => {
    const newFilters = {
      industry: '',
      location: '',
      dealStatus: '',
      revenueRange: '',
      employeeRange: '',
    };
    setFilters(newFilters);
    const filteredDeals = applyFilters(newFilters);
    onFilterChange(filteredDeals);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200/70 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-neutral-900">Filter Deals</h2>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 
                       transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Filters
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <SelectWrapper
            label="Industry"
            value={filters.industry}
            onChange={(value) => handleFilterChange('industry', value)}
            options={[{ label: 'All Industries', value: '' }, ...industries.map(i => ({ label: i, value: i }))]}
          />
          <SelectWrapper
            label="Location"
            value={filters.location}
            onChange={(value) => handleFilterChange('location', value)}
            options={[{ label: 'All Locations', value: '' }, ...locations.map(l => ({ label: l, value: l }))]}
          />
          <SelectWrapper
            label="Deal Status"
            value={filters.dealStatus}
            onChange={(value) => handleFilterChange('dealStatus', value)}
            options={statusOptions}
          />
          <SelectWrapper
            label="Annual Revenue"
            value={filters.revenueRange}
            onChange={(value) => handleFilterChange('revenueRange', value)}
            options={revenueRanges}
          />
          <SelectWrapper
            label="Company Size"
            value={filters.employeeRange}
            onChange={(value) => handleFilterChange('employeeRange', value)}
            options={employeeRanges}
          />
        </div>
      </div>
    </div>
  );
}
