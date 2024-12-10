const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 页脚导航部分配置
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Buy Side', href: '/buyer' },
        { label: 'Sell Side', href: '/seller' },
        { label: 'Advisory', href: '/consulting' },
        { label: 'Valuation', href: '/valuation' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Company', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Success Stories', href: '/cases' },
        { label: 'News', href: '/news' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'M&A Guide', href: '/guide' },
        { label: 'Industry Reports', href: '/reports' },
        { label: 'FAQs', href: '/faq' },
        { label: 'Help Center', href: '/help' },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息部分 */}
          <div className="space-y-4">
            <div className="text-2xl font-display font-bold text-white">
              Merge Flow
            </div>
            <p className="text-sm text-neutral-400">
              Professional M&A platform connecting buyers and sellers for secure, efficient transactions.
            </p>
            {/* 社交媒体链接 */}
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">WeChat</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5,15A1.5,1.5 0 0,1 7,13.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 10,13.5A1.5,1.5 0 0,1 8.5,15M14,15A1.5,1.5 0 0,1 12.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,13.5A1.5,1.5 0 0,1 14,15M8.5,7A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 8.5,4A1.5,1.5 0 0,1 10,5.5A1.5,1.5 0 0,1 8.5,7M14,7A1.5,1.5 0 0,1 12.5,5.5A1.5,1.5 0 0,1 14,4A1.5,1.5 0 0,1 15.5,5.5A1.5,1.5 0 0,1 14,7M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 页脚导航部分 */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-sm text-neutral-400">
            {currentYear} Merge Flow. All rights reserved.
            <a href="/privacy" className="ml-4 hover:text-primary-500 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="ml-4 hover:text-primary-500 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
