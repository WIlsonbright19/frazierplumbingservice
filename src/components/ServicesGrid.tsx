import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA, CLINIC_INFO } from '../data/content';

interface ServicesGridProps {
  onBookCall: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxHeader = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-neutral-200/60 scroll-mt-10 overflow-hidden"
    >
      {/* Full-width uncompressed container: Floating left and right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        {/* Section Headline Floated Left & Right CTA Floated Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            style={{ y: parallaxHeader }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
              <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#66625B]">
                SERVICES & SPECIALTIES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] text-[#151515] font-normal tracking-tight">
              Complete plumbing solutions across Atlanta
            </h2>
          </motion.div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#151515] hover:bg-[#2c2c2c] text-white text-[13.5px] font-semibold px-5 py-3 rounded-lg transition-all"
            >
              <Phone size={14} className="text-[#E5A83B]" />
              <span>Call 24/7 Hotline</span>
            </a>
            <button
              onClick={onBookCall}
              className="inline-flex items-center gap-2 bg-[#E5A83B] hover:bg-[#d89a2b] text-[#121212] text-[13.5px] font-bold px-5 py-3 rounded-lg transition-all"
            >
              <span>Schedule Service</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* 3-Card Grid across full width with uncompressed spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {SERVICES_DATA.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                service={service}
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

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  scrollYProgress: any;
  onBookCall: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, scrollYProgress, onBookCall }) => {
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 15, -(index * 15)]
  );

  return (
    <motion.div
      style={{ y: cardY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onBookCall}
      className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] hover:bg-[#EDE6DE] border border-neutral-300/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 cursor-pointer relative"
    >
      <div>
        {/* Card Image Thumbnail */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-neutral-200 shadow-inner">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 bg-[#151515]/90 backdrop-blur-xs text-[#E5A83B] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md">
            {service.duration}
          </div>
        </div>

        {/* Card Title */}
        <div className="mb-3">
          <h3 className="font-serif text-2xl sm:text-[25px] text-[#151515] font-normal group-hover:text-[#9A6715] transition-colors duration-200">
            {service.title}
          </h3>
        </div>

        {/* Card Description */}
        <p className="text-[14px] text-[#55524B] leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 pt-4 border-t border-neutral-300/70">
          {service.deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#3E3B36] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-[#151515] group-hover:text-[#9A6715]">
        <span>REQUEST THIS SERVICE</span>
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
};
