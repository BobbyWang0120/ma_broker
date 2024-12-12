import { useState, useEffect, useCallback } from 'react';
import { Deal } from '../../types/deal';

interface DealsSearchProps {
  deals: Deal[];
  onSearchResults: (results: Deal[]) => void;
}

export default function DealsSearch({ deals, onSearchResults }: DealsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // 搜索逻辑
  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      onSearchResults(deals);
      return;
    }

    const searchLower = term.toLowerCase();
    const results = deals.filter(deal => {
      return (
        deal.companyName.toLowerCase().includes(searchLower) ||
        deal.industry.toLowerCase().includes(searchLower) ||
        deal.location.toLowerCase().includes(searchLower) ||
        deal.shortDescription.toLowerCase().includes(searchLower)
      );
    });

    onSearchResults(results);
  }, [deals, onSearchResults]);

  // 使用防抖进行搜索
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, performSearch]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by company name, industry, location, or description..."
          className="block w-full pl-11 pr-12 py-3 text-sm border border-neutral-300 
                   rounded-xl bg-white placeholder-neutral-400 text-neutral-900
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition duration-200"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 
                     hover:text-neutral-600 transition-colors duration-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
