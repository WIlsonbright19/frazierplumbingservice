import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Download, ArrowRight, ShieldCheck, Phone, AlertTriangle } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { CLINIC_INFO } from '../data/content';

interface GrowthPlaybookBoxProps {
  onBookCall?: () => void;
}

export const GrowthPlaybookBox: React.FC<GrowthPlaybookBoxProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const handleInstantDownload = () => {
    const blob = new Blob(
      [
        `FRAZIER PLUMBING SERVICE OF ATLANTA - EMERGENCY ACTION GUIDE\n\n` +
        `Business: Frazier Plumbing Service of Atlanta\n` +
        `Address: 1000 Moreland Ave SE, Atlanta, GA 30316\n` +
        `24/7 Dispatch Phone: (678) 379-1455\n` +
        `Rating: 5.0 Stars (Google Verified)\n\n` +
        `WHAT TO DO IN A PLUMBING EMERGENCY (BEFORE WE ARRIVE):\n` +
        `1. SHUT OFF THE MAIN WATER VALVE immediately (usually located near street meter or basement crawl space).\n` +
        `2. TURN OFF WATER HEATER BREAKER/GAS SUPPLY if tank is leaking to avoid heating element burnout or hazards.\n` +
        `3. OPEN LOWEST FAUCETS to relieve remaining system water pressure.\n` +
        `4. CALL FRAZIER PLUMBING AT (678) 379-1455 for immediate mobile truck dispatch.\n\n` +
        `Google Maps: https://maps.google.com/?cid=10317840283646066300`
      ],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Frazier_Plumbing_Emergency_Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Full-width uncompressed container */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="relative rounded-3xl bg-[#141414] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Subtle gold fluted background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A83B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content Column (Floated Left) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit">
                <AlertTriangle size={13} className="text-[#E5A83B]" />
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#D4CEC3]">
                  EMERGENCY RESOURCE & PROTOCOL
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[32px] sm:text-4xl lg:text-[50px] leading-[1.1] text-white font-normal mb-4">
                Atlanta Plumbing Emergency Protocol
              </h3>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-[17px] text-[#CBC7BF] leading-relaxed max-w-2xl mb-8">
                Learn the 4 critical steps to shut off water, prevent interior flooding, and protect your home before our mobile service truck arrives at your property.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 bg-[#E5A83B] hover:bg-[#d89a2b] active:scale-[0.98] text-[#141414] font-bold text-[15px] px-7 py-3.5 rounded-lg transition-all shadow-md hover:shadow-xl cursor-pointer"
                >
                  <Phone size={16} />
                  <span>Call Dispatch: {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={handleInstantDownload}
                  className="inline-flex items-center gap-2 text-white hover:text-[#E5A83B] text-[14px] font-medium px-5 py-3.5 rounded-lg border border-white/20 hover:border-[#E5A83B] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#E5A83B]" />
                  <span>Free Checklist (TXT)</span>
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2.5 text-xs text-[#A8A399]">
                <ShieldCheck size={16} className="text-[#E5A83B]" />
                <span>Immediate 24-hr master technician telephone support</span>
              </div>
            </div>

            {/* Right Photo Column (Floated Right) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                style={{ y: imageShift }}
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative group cursor-pointer"
                onClick={onBookCall}
              >
                <img
                  src={IMAGES.waterHeater}
                  alt="Frazier Plumbing water heater & emergency service setup"
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white/90">
                  <span>Emergency water heater & main valve restoration</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
