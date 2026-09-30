import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { CLINIC_INFO } from '../data/content';

interface WhyMeridianProps {
  onViewServices: () => void;
  onBookCall?: () => void;
}

export const WhyMeridian: React.FC<WhyMeridianProps> = ({ onViewServices, onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Full-Width uncompressed layout: Elements floated left and right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Image Container (Floated Left with badges) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/3] lg:aspect-[16/11] shadow-2xl group ring-1 ring-black/5">
              <img
                src={IMAGES.expertDrain}
                alt="Frazier Plumbing master plumber repairing pipes in Atlanta"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              {/* Bottom Card Overlay Details */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#E5A83B]">Precision Master Plumbing</span>
                  <p className="text-sm font-medium text-white/95">1000 Moreland Ave SE · 24/7 Mobile Dispatch</p>
                </div>
                <div className="bg-[#151515]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-white shrink-0">
                  Atlanta, GA
                </div>
              </div>
            </div>

            {/* Floating Trust Badge on Left Image */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white rounded-xl p-4 shadow-xl border border-neutral-200/80 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E5A83B] flex items-center justify-center text-[#121212] font-bold">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#151515]">Georgia Master Licensed</div>
                <div className="text-[11px] text-[#6E6B65]">Bonded & Fully Insured</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Value Proposition (Floated Right) */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-bold text-[#5A5751]">
                WHY FRAZIER PLUMBING OF ATLANTA
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[32px] sm:text-5xl lg:text-[54px] leading-[1.1] text-[#151515] font-normal mb-4 sm:mb-6">
              Plumbing problems don't wait for business hours.
            </h2>

            {/* Narrative Body */}
            <p className="text-[15px] sm:text-[17px] text-[#4F4C46] leading-relaxed mb-6 sm:mb-8">
              Water damage multiplies by the minute. When pipes burst or drains back up, you need a licensed master plumber on site immediately, not an answering service. Frazier Plumbing delivers 24/7 rapid dispatch, honest upfront pricing, and lasting repairs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#E5A83B] hover:bg-[#d89a2b] active:scale-[0.98] text-[#141414] font-bold text-[14px] sm:text-[15px] px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone size={16} />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={onViewServices}
                className="inline-flex items-center gap-2 text-[#151515] hover:text-[#9A6715] text-[14px] font-semibold px-5 py-3.5 rounded-lg border border-neutral-300 hover:border-[#151515] transition-all cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
