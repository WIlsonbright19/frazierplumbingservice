import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyItem } from '../types';
import { CASE_STUDIES_DATA } from '../data/content';

interface CaseStudiesProps {
  onBookCall: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerParallax = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-neutral-200/60 scroll-mt-10 overflow-hidden"
    >
      {/* Full-width uncompressed container: Floating left and right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        {/* Section Header Floated Left & Action Floated Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            style={{ y: headerParallax }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
              <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#66625B]">
                RECENT COMPLETED JOBS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] text-[#151515] font-normal tracking-tight">
              Real Atlanta repairs. Zero repeat issues.
            </h2>
          </motion.div>

          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-2 text-[#151515] hover:text-[#9A6715] font-bold text-sm tracking-wide transition-colors shrink-0 cursor-pointer"
          >
            <span>VIEW RECENT FIELD WORK & DISPATCH</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 3 Case Study Cards Grid across full width with uncompressed spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {CASE_STUDIES_DATA.map((item, index) => {
            return (
              <CaseStudyCard
                key={item.id}
                item={item}
                index={index}
                scrollYProgress={scrollYProgress}
                onBookCall={onBookCall}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  item: CaseStudyItem;
  index: number;
  scrollYProgress: any;
  onBookCall: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ item, index, scrollYProgress, onBookCall }) => {
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 15, -(index * 15)]
  );

  return (
    <motion.article
      style={{ y: cardY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onBookCall}
      className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] hover:bg-[#EDE6DE] border border-neutral-300/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 cursor-pointer relative"
    >
      <div>
        {/* Visual Asset Container */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-neutral-200 shadow-inner">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-[#151515]/90 backdrop-blur-xs text-[#E5A83B] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md">
            {item.category}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="font-serif text-xl sm:text-[23px] text-[#151515] font-normal leading-snug mb-3 group-hover:text-[#9A6715] transition-colors duration-200">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-[14px] text-[#55524B] leading-relaxed mb-4">
          {item.summary}
        </p>

        {/* Outcome metric */}
        <div className="pt-3 border-t border-neutral-300/70 flex items-center justify-between text-xs font-semibold text-[#151515]">
          <span className="text-[#8C867B]">RESULT:</span>
          <span className="text-[#9A6715] font-bold">{item.metric}</span>
        </div>
      </div>
    </motion.article>
  );
};
