import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/content';

interface NavbarProps {
  onScrollTo: (targetId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onScrollTo(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Full-width uncompressed navbar container */}
      <div className="w-full px-3 sm:px-6 lg:px-14 xl:px-16 pt-2.5 sm:pt-3 pb-2">
        <nav
          className={`flex items-center justify-between px-4 sm:px-7 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#151515]/95 backdrop-blur-md shadow-2xl border border-white/10'
              : 'bg-[#151515] border border-white/5 shadow-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Zone (Floated Left) */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B] rounded-lg cursor-pointer"
          >
            <Logo light />
          </button>

          {/* Center-Right Nav Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px] font-medium text-[#D1D1D1]">
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={(e) => handleLinkClick(e, 'case-studies')}
              className="hover:text-white transition-colors duration-200"
            >
              Recent Repairs
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
          </div>

          {/* Action Phone & Booking (Floated Right) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white font-medium text-[13.5px] px-3.5 py-2 rounded-lg hover:text-[#E5A83B] transition-colors"
            >
              <Phone size={14} className="text-[#E5A83B]" />
            </a>
            <button
              onClick={(e) => handleLinkClick(e, 'booking')}
              className="bg-[#E5A83B] hover:bg-[#d99b2e] active:scale-[0.98] text-[#121212] font-bold text-[13.5px] px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
            >
              Schedule Service
            </button>
          </div>

          {/* Mobile & Tablet Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 bg-[#E5A83B] hover:bg-[#d99b2e] text-[#121212] font-bold text-[12px] sm:text-[13px] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone size={13} />
              <span>Call 24/7</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white/80 hover:text-white rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-full px-3 sm:px-6 pt-1"
          >
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className="block text-[#ECECEC] text-[15px] font-medium py-1.5 border-b border-white/5"
              >
                Services
              </a>
              <a
                href="#case-studies"
                onClick={(e) => handleLinkClick(e, 'case-studies')}
                className="block text-[#ECECEC] text-[15px] font-medium py-1.5 border-b border-white/5"
              >
                Recent Repairs
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="block text-[#ECECEC] text-[15px] font-medium py-1.5 border-b border-white/5"
              >
                About Us
              </a>
              <a
                href="#booking"
                onClick={(e) => handleLinkClick(e, 'booking')}
                className="block text-[#ECECEC] text-[15px] font-medium py-1.5 border-b border-white/5"
              >
                Request Service
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="block text-[#E5A83B] text-[14px] font-bold py-1 border-b border-white/5"
              >
                📞 Call {CLINIC_INFO.phone} (24/7 Available)
              </a>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#D1D1D1] text-[13px] py-1 border-b border-white/5"
              >
                📍 1000 Moreland Ave SE, Atlanta, GA
              </a>
              <button
                onClick={(e) => handleLinkClick(e, 'booking')}
                className="w-full bg-[#E5A83B] hover:bg-[#d99b2e] text-[#121212] font-semibold text-[14px] py-3 rounded-lg text-center mt-2 cursor-pointer"
              >
                Book Online Now ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
