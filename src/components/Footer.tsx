import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#FFD700]/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative linear visual accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#FFD700]/10">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group"
            id="footer-logo-btn"
          >
            <div className="w-10 h-10 rounded-lg bg-black border border-[#FFD700]/30 shadow-[0_0_10px_rgba(255,215,0,0.15)] flex items-center justify-center relative">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="EduSpark Hub logo thumbnail"
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fb = document.getElementById('footer-fallback-sparkle');
                  if (fb) fb.classList.remove('hidden');
                }}
              />
              <div id="footer-fallback-sparkle" className="hidden text-[#FFD700]">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-sans font-bold text-lg text-white group-hover:text-[#FFD700] transition-colors duration-200">
                EduSpark<span className="text-[#FFD700] ml-1">Hub</span>
              </span>
              <p className="text-[10px] text-[#FFD700]/90 font-mono tracking-widest uppercase">
                {BUSINESS_INFO.tagline}
              </p>
            </div>
          </button>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-2">
            Helping students excel in school, one task at a time. From orals to projects and test summaries, we make learning fun, easy, and stress-free.
          </p>
          {/* Socials Icons */}
          <div className="flex items-center gap-3.5 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 hover:border-[#FFD700] hover:text-[#FFD700] text-gray-400 flex items-center justify-center hover:shadow-[0_0_8px_rgba(255,215,0,0.3)] transition-all duration-200"
              aria-label="Facebook Page"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 hover:border-[#FFD700] hover:text-[#FFD700] text-gray-400 flex items-center justify-center hover:shadow-[0_0_8px_rgba(255,215,0,0.3)] transition-all duration-200"
              aria-label="Instagram Page"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 hover:border-[#FFD700] hover:text-[#FFD700] text-gray-400 flex items-center justify-center hover:shadow-[0_0_8px_rgba(255,215,0,0.3)] transition-all duration-200"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 hover:border-[#FFD700] hover:text-[#FFD700] text-gray-400 flex items-center justify-center hover:shadow-[0_0_8px_rgba(255,215,0,0.3)] transition-all duration-200"
              aria-label="Twitter Header"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase font-mono tracking-widest border-l-2 border-[#FFD700] pl-2.5">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-150 cursor-pointer text-left focus:outline-none"
              >
                Home Index
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-150 cursor-pointer text-left focus:outline-none"
              >
                About Our Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('services')}
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-150 cursor-pointer text-left focus:outline-none"
              >
                Detailed Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('prices')}
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-150 cursor-pointer text-left focus:outline-none"
              >
                Price List & Discounts
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-gray-400 hover:text-[#FFD700] transition-colors duration-150 cursor-pointer text-left focus:outline-none"
              >
                Contact & Support Form
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Links Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase font-mono tracking-widest border-l-2 border-[#FFD700] pl-2.5">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <Mail className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium text-xs">Email Support</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#FFD700] transition-colors duration-150 break-all text-xs sm:text-sm">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium text-xs">WhatsApp / Call</span>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} className="hover:text-[#FFD700] transition-colors duration-150 text-xs sm:text-sm" target="_blank" rel="noreferrer">
                  {BUSINESS_INFO.whatsappFormatted}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium text-xs">Location</span>
                <span className="text-xs sm:text-sm">{BUSINESS_INFO.location}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright area */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <p>© {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed with <span className="text-[#FFD700] text-sm group-hover:animate-pulse">❤️</span> for Students & Parents
        </p>
      </div>
    </footer>
  );
}
