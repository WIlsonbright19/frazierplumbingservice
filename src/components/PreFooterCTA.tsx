import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';
import { IMAGES } from '../assets/images';

interface PreFooterCTAProps {
  onBookCall: () => void;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onBookCall }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Full-width uncompressed container */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#141414] min-h-[440px] flex items-center border border-white/10">
          
          {/* Background with Parallax */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 z-0 origin-center"
          >
            <img
              src={IMAGES.heroPlumbing}
              alt="Frazier Plumbing truck and master technician"
              className="w-full h-full object-cover object-center opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          </motion.div>

          {/* Stepped Architectural Corner Notch at Top Right */}
          <div className="absolute top-0 right-0 w-36 sm:w-48 h-10 sm:h-12 bg-[#FAF8F5] z-10 hidden sm:block [clip-path:polygon(0_0,100%_0,100%_100%,32px_100%)] pointer-events-none" />

          {/* Left/Right Floating Grid */}
          <motion.div
            style={{ y: contentY }}
            className="relative z-10 w-full px-8 sm:px-12 lg:px-16 py-12 sm:py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (Floated Left) */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#E5A83B] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E0D8CB]">
                    IMMEDIATE ATLANTA DISPATCH
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] text-white font-normal mb-4">
                  Need a plumber right now in Atlanta?
                </h2>

                <p className="text-[16px] sm:text-[18px] text-[#E0DDD5]/90 font-light leading-relaxed max-w-2xl mb-2">
                  Call our 24/7 hotline directly or request emergency service online. A licensed master plumber will respond immediately.
                </p>
              </div>

              {/* Right Column (Floated Right) */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full sm:w-auto lg:w-full flex items-center justify-center gap-2.5 bg-[#E5A83B] hover:bg-[#d89a2b] active:scale-[0.98] text-[#141414] font-bold text-[15px] px-7 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto lg:w-full flex items-center justify-center gap-2 text-white hover:text-[#E5A83B] text-[14px] font-semibold px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#E5A83B] transition-colors cursor-pointer"
                >
                  <span>Request Online</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
