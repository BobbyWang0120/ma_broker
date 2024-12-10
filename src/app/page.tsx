'use client';

import { useAuthStore } from '../store/authStore';
import {
  DealMatchingIcon,
  SecureProcessIcon,
  ExpertSupportIcon,
  AnalyticsIcon,
} from '../components/icons/FeatureIcons';

// Landing Page 组件
const LandingPage = () => {
  const login = useAuthStore((state) => state.login);

  // 特性部分的内容配置
  const features = [
    {
      title: 'Smart Deal Matching',
      description: 'Our advanced algorithms analyze multiple parameters to connect you with the most relevant M&A opportunities. Save time and resources by focusing on deals that matter.',
      icon: DealMatchingIcon,
      imagePosition: 'right',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Protect your sensitive deal information with our state-of-the-art security infrastructure. We employ bank-level encryption and strict access controls.',
      icon: SecureProcessIcon,
      imagePosition: 'left',
    },
    {
      title: 'Expert M&A Support',
      description: 'Get guidance from experienced M&A professionals throughout your journey. Our team helps you navigate complex transactions and make informed decisions.',
      icon: ExpertSupportIcon,
      imagePosition: 'right',
    },
    {
      title: 'Advanced Analytics',
      description: 'Make data-driven decisions with our comprehensive analytics suite. Track deal progress, market trends, and key performance indicators in real-time.',
      icon: AnalyticsIcon,
      imagePosition: 'left',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-5xl font-display font-bold text-neutral-900 sm:text-6xl">
              Streamline Your M&A Journey
            </h1>
            <p className="text-xl text-neutral-600">
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
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  feature.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-24`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-display font-bold text-neutral-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {/* Icon/Image */}
                <div className="flex-1 flex justify-center">
                  <div className="w-48 h-48 rounded-2xl bg-primary-50 p-8 text-primary-500">
                    <feature.icon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
            Ready to Transform Your M&A Process?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Join leading companies already using Merge Flow to streamline their M&A operations.
          </p>
          <button
            onClick={login}
            className="bg-primary-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Start Your Journey
          </button>
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
