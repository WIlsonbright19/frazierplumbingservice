import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface FooterProps {
  onScrollTo: (targetId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const handleLink = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    onScrollTo(target);
  };

  return (
    <footer className="bg-[#141414] text-[#8E8B84] pt-16 sm:pt-20 pb-12 border-t border-white/5">
      {/* Full-width uncompressed container: Floating left and right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Location Column (Floated Left) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block text-left mb-4 focus:outline-none cursor-pointer"
            >
              <Logo light />
            </button>
            <p className="text-xs text-[#7A7770] leading-relaxed max-w-md mb-6">
              Providing Metro Atlanta with 24/7 master plumbing emergency repairs, water heater installation, leak detection, and high-pressure sewer hydro-jetting.
            </p>
            <div className="space-y-2.5 text-xs text-[#A09D95]">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-[#E5A83B] shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-white/95"
              >
                <Phone size={14} className="text-[#E5A83B] shrink-0" />
                <span>{CLINIC_INFO.phone} (24/7 Hotline)</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#E5A83B]" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Columns (Floated Right) */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4CEC3] mb-4">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Emergency Leak Repair
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Water Heater Repair
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Drain Hydro-Jetting
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Sewer Video Scopes
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4CEC3] mb-4">
                RESOURCES
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'case-studies')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Recent Repairs
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'about')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleLink(e, 'booking')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Schedule Online
                  </button>
                </li>
                <li>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 text-[#E5A83B]"
                  >
                    <span>Google Reviews (5.0★)</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Floated Left and Right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#63605A]">
          <div>
            © {new Date().getFullYear()} Frazier Plumbing Service of Atlanta. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Licensed & Insured Master Plumbers</span>
            <span>Atlanta, GA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
