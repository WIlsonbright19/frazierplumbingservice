import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D0F12]"
    >
      {/* Background Image: Professional plumbing van & technician work */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src={IMAGES.heroPlumbing}
          alt="Frazier Plumbing Service of Atlanta professional mobile plumbing truck"
          className="w-full h-full object-cover object-center opacity-70 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Subtle fluted architectural texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 8px)',
          }}
        />
        {/* Full-width dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0E11]/95 via-[#0C0E11]/85 to-[#0C0E11]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E11] via-transparent to-[#0C0E11]/40" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-14 xl:px-16 py-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Main Headline */}
            <h1 className="font-serif text-[42px] sm:text-6xl md:text-7xl xl:text-[84px] leading-[1.04] text-white font-normal tracking-[-0.015em] mb-4 sm:mb-6">
              Emergency repairs.<br />
              <span className="text-[#E5A83B]">Done right 24/7.</span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-[15px] sm:text-lg md:text-[19px] text-[#EDE7DD]/90 font-light leading-relaxed max-w-2xl mb-7 sm:mb-9">
              Rapid emergency dispatch across Metro Atlanta. Licensed master plumbers for pipe bursts, slab leaks, water heater replacement, and drain cleaning. Honest upfront quotes with 100% guarantee.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-[#E5A83B] hover:bg-[#d89a2b] active:scale-[0.98] text-[#121212] font-bold text-[15px] sm:text-[16px] px-7 py-3.5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer group"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 24/7: {CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-white hover:text-[#E5A83B] text-[14px] sm:text-[15px] font-medium px-6 py-3.5 rounded-lg border border-white/25 hover:border-[#E5A83B] backdrop-blur-sm transition-all cursor-pointer"
              >
                <span>Schedule Service</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Trust Anchors Footer Row */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-white/10 text-xs sm:text-[13px] text-[#C4BEB3]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#E5A83B]" />
                <span>Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                <span>5.0★ Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#E5A83B]" />
                <span>1000 Moreland Ave SE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature Stepped Architectural Notch Transition */}
      <div className="absolute bottom-0 right-0 w-28 sm:w-48 h-8 sm:h-11 bg-[#FAF8F5] z-10 hidden sm:block [clip-path:polygon(100%_0,0_100%,100%_100%)] pointer-events-none" />
    </section>
  );
};
