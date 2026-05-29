import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Services', tab: 'services' },
    { label: 'Price List', tab: 'prices' },
    { label: 'Contact Us', tab: 'contact' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#FFD700]/20 min-h-[72px] flex items-center px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo and Brand Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none animate-fade-in"
          id="nav-logo-btn"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.15)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-all duration-300">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="EduSpark Hub Logo"
              className="w-8 h-8 object-contain rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to "E" serif badge if image fails
                (e.target as HTMLElement).style.display = 'none';
                const fallback = document.getElementById('logo-fallback-sparkle');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div id="logo-fallback-sparkle" className="hidden text-[#FFD700] font-serif font-bold text-lg">
              E
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl tracking-tight text-white group-hover:text-[#FFD700] transition-colors duration-200">
                EduSpark <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">Hub</span>
              </span>
            </div>
            <p className="text-[9px] text-gray-500 font-mono tracking-[0.25em] hidden sm:block uppercase leading-none mt-0.5">
              {BUSINESS_INFO.tagline}
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navigationItems.map((item) => (
            <button
              key={item.tab}
              id={`nav-link-${item.tab}`}
              onClick={() => handleNavClick(item.tab)}
              className={`px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-all duration-200 focus:outline-none cursor-pointer ${
                activeTab === item.tab
                  ? 'text-[#FFD700] border-b-2 border-[#FFD700] font-semibold'
                  : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-700 border-b-2 border-transparent'
              }`}
            >
              {item.label === 'Price List' ? 'Prices' : item.label === 'About Us' ? 'About' : item.label === 'Contact Us' ? 'Contact' : item.label}
            </button>
          ))}
        </nav>

        {/* CTA "Get Started" Widget */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('contact')}
            id="nav-cta-btn"
            className="px-8 py-3.5 bg-[#FFD700] hover:bg-[#ffe240] text-black font-sans font-bold uppercase text-[10px] tracking-widest rounded-sm hover:brightness-110 shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger button Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-transparent focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#FFD700]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-black border-b border-[#FFD700]/20 px-4 py-6 md:hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.9)] animate-in slide-in-from-top duration-300 ease-out z-40">
          <div className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.tab}
                id={`mobile-nav-link-${item.tab}`}
                onClick={() => handleNavClick(item.tab)}
                className={`w-full text-left px-5 py-3 rounded-xl font-sans text-base font-semibold transition-all cursor-pointer ${
                  activeTab === item.tab
                    ? 'text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 shadow-[0_0_10px_rgba(255,215,0,0.05)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-[#FFD700]/10 pt-4 mt-2">
              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-nav-cta-btn"
                className="w-full text-center py-3.5 rounded-full bg-[#FFD700] hover:bg-[#ffe240] text-black font-sans font-bold text-base shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
