'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthStore();

  // 导航菜单项配置
  const menuItems = isAuthenticated
    ? [
        { label: 'Dashboard', href: '/' },
        { label: 'Deals', href: '/deals' },
        { label: 'Messages', href: '/messages' },
        { label: 'Analytics', href: '/analytics' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Buy Side', href: '/buyer' },
        { label: 'Sell Side', href: '/seller' },
        { label: 'Success Stories', href: '/cases' },
        { label: 'About Us', href: '/about' },
      ];

  return (
    <nav className="bg-background-primary border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo和品牌名称 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-primary-600">
                Merge Flow
              </span>
            </Link>
          </div>

          {/* 桌面端导航菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors duration-200"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={login}
                className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors duration-200"
              >
                Get Started
              </button>
            )}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary-500 hover:bg-neutral-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端展开菜单 */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="w-full mt-4 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors duration-200"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={login}
              className="w-full mt-4 bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors duration-200"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
