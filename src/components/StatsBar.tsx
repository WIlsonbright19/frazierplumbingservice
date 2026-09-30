import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface StatItemProps {
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const AnimatedStat: React.FC<StatItemProps> = ({ value, numericTarget, prefix = '', suffix = '', label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState<number | string>(numericTarget ? 0 : value);

  useEffect(() => {
    if (!isInView || numericTarget === undefined) return;

    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * numericTarget);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, numericTarget]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight text-[#151515] tabular-nums">
        {numericTarget !== undefined ? (
          <>
            {prefix}
            {displayValue}
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#6E6B65]">
        {label}
      </div>
    </div>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F5] py-12 sm:py-16 border-b border-neutral-200/80">
      {/* Stepped Architectural Notch at Top Right */}
      <div className="absolute -top-7 right-0 hidden md:block">
        <div className="w-48 h-7 bg-[#FAF8F5] [clip-path:polygon(32px_0,100%_0,100%_100%,0_100%)]" />
      </div>

      {/* Full-width uncompressed container: Floating left and right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title & Location Info (Floated Left) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#181818] leading-[1.15] font-normal mb-3">
              Atlanta’s highest rated 24/7 master plumbing team
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6E6B65]">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={13} className="text-[#E5A83B]" />
                1000 Moreland Ave SE, Atlanta
              </span>
              <span>•</span>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 font-semibold text-[#151515] hover:text-[#9A6715]"
              >
                <Phone size={13} className="text-[#E5A83B]" />
                {CLINIC_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4 lg:pt-0">
            <div className="border-l border-neutral-300 pl-5 sm:pl-6">
              <AnimatedStat
                value="100%"
                numericTarget={100}
                suffix="%"
                label="UPFRONT PRICING"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
