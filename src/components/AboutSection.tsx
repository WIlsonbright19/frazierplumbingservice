import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { CLINIC_INFO } from '../data/content';

interface AboutSectionProps {
  onBookCall?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-neutral-200/60 scroll-mt-10 overflow-hidden"
    >
      {/* Full-width uncompressed container */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Story & Principle (Floated Left) */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-bold text-[#5A5751]">
                ABOUT FRAZIER PLUMBING
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[32px] sm:text-5xl lg:text-[50px] leading-[1.1] text-[#151515] font-normal mb-4 sm:mb-6">
              Local Atlanta master plumbers you can rely on
            </h2>

            {/* Concise Body */}
            <p className="text-[15px] sm:text-[17px] text-[#4F4C46] leading-relaxed mb-6 sm:mb-8">
              Headquartered at 1000 Moreland Ave SE, Frazier Plumbing Service provides Atlanta homeowners and commercial facilities with rapid, dependable, and precision plumbing repairs 24 hours a day, 7 days a week.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#2c2c2c] text-white font-semibold text-[14px] px-7 py-3.5 rounded-lg transition-all shadow-md hover:shadow-xl cursor-pointer group"
              >
                <span>Request service estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-[#151515] hover:text-[#9A6715] font-bold text-sm tracking-wide transition-colors"
              >
                <Phone size={15} className="text-[#E5A83B]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Photo (Floated Right) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div
              onClick={onBookCall}
              className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/3] lg:aspect-[16/11] shadow-2xl group cursor-pointer ring-1 ring-black/5"
            >
              <img
                src={IMAGES.sewerInspection}
                alt="Frazier Plumbing sewer camera and pipe diagnostics"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#E5A83B]">Atlanta Service Center</span>
                  <p className="text-sm font-medium text-white/95">1000 Moreland Ave SE · 24/7 Rapid Response</p>
                </div>
                <div className="bg-[#151515]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-white shrink-0">
                  Open 24 Hours
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
