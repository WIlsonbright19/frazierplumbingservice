import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-neutral-200/60 overflow-hidden">
      {/* Full-width uncompressed container: Floated Left & Right */}
      <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (Floated Left): Heading, Rating, Navigation Arrows */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
              <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#66625B]">
                CUSTOMER REVIEWS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-[#151515] font-normal mb-4">
              Trusted by Atlanta homeowners and businesses
            </h2>

            {/* Google Rating Pill */}
            <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white border border-neutral-200 shadow-xs w-fit">
              <div className="flex text-[#E5A83B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#151515]">5.0 Out of 5.0 Stars (Google Verified)</span>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl border border-neutral-300 hover:border-black bg-white text-neutral-800 hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl border border-neutral-300 hover:border-black bg-white text-neutral-800 hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#8C867B] font-semibold ml-2">
                {currentIndex + 1} of {TESTIMONIALS_DATA.length}
              </span>
            </div>
          </div>

          {/* Right Column (Floated Right): Full-Width Testimonial Card */}
          <div className="lg:col-span-8">
            <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#F4EFEA] border border-neutral-300/80 shadow-md min-h-[300px] flex flex-col justify-between">
              <Quote className="w-12 h-12 text-[#E5A83B]/40 mb-4" />
              
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <p className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-relaxed text-[#181818] font-normal mb-8">
                    {current.quote}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-300/70">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-300 border border-neutral-300 shrink-0">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#181818]">
                        {current.author}
                      </div>
                      <div className="text-xs font-semibold tracking-wider text-[#8A847A] uppercase">
                        {current.role} · {current.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
