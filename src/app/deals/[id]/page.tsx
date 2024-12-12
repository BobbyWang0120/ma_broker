'use client';

import { useParams } from 'next/navigation';
import { mockDeals } from '../../../data/mockDeals';
import Link from 'next/link';

export default function DealDetailPage() {
  const params = useParams();
  const dealId = params.id as string;
  
  // 从 mockDeals 中找到对应的项目
  const deal = mockDeals.find(d => d.id === dealId);

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
      
      <div className="bg-white rounded-lg shadow-lg p-8">
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
          <ul className="list-disc list-inside space-y-2">
            {deal.highlights.map((highlight, index) => (
              <li key={index} className="text-neutral-600">{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
