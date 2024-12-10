'use client';

import { useAuthStore } from '../store/authStore';
import Image from 'next/image';

// Landing Page 组件
const LandingPage = () => {
  const login = useAuthStore((state) => state.login);

  return (
    <div className="relative overflow-hidden">
      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        {/* 标题部分 */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-display font-bold text-neutral-900 sm:text-6xl">
            Streamline Your M&A Journey
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-neutral-600">
            Connect with the right partners, make informed decisions, and close deals efficiently on our secure M&A platform.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={login}
              className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Get Started
            </button>
            <button className="border-2 border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* 特点展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Deal Matching',
              description: 'Advanced algorithms to connect you with the most relevant opportunities.'
            },
            {
              title: 'Secure Process',
              description: 'Enterprise-grade security for confidential deal information.'
            },
            {
              title: 'Expert Support',
              description: 'Professional guidance throughout your M&A journey.'
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center space-y-4 p-6">
              <h3 className="text-xl font-semibold text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 已登录状态的主页组件
const AuthenticatedHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-6">Welcome to Merge Flow</h1>
        <p className="text-neutral-600 mb-4">
          This is a placeholder for the authenticated dashboard. Future content will include:
        </p>
        <ul className="list-disc list-inside text-neutral-600 space-y-2">
          <li>Active deals and opportunities</li>
          <li>Recent activities and updates</li>
          <li>Important notifications</li>
          <li>Quick access to key features</li>
        </ul>
      </div>
    </div>
  );
};

// 主页组件
export default function Home() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <AuthenticatedHome /> : <LandingPage />;
}
