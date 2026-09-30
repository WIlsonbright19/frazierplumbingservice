import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { WhyMeridian } from './components/WhyMeridian';
import { ServicesGrid } from './components/ServicesGrid';
import { GrowthPlaybookBox } from './components/GrowthPlaybookBox';
import { CaseStudies } from './components/CaseStudies';
import { TestimonialSlider } from './components/TestimonialSlider';
import { AboutSection } from './components/AboutSection';
import { PreFooterCTA } from './components/PreFooterCTA';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  // Initialize Lenis Smooth Inertia Momentum Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Universal smooth scroll handler for the single-page application
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { offset: -60, duration: 1.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    handleScrollTo('booking');
  };

  const handleViewServices = () => {
    handleScrollTo('services');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] flex flex-col font-sans selection:bg-[#E5A83B] selection:text-black relative">
      {/* Interactive Magnetic Arrow Cursor for Cards */}
      <CustomCursor />

      {/* Top Fixed Header with smooth in-page navigation */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Unified Single-Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (100vh) */}
        <Hero onBookCall={handleBookCall} />

        {/* 2. Results / Stat Bar */}
        <StatsBar />

        {/* 3. Why Miami Dental Clinic */}
        <WhyMeridian
          onViewServices={handleViewServices}
          onBookCall={handleBookCall}
        />

        {/* 4. Core Treatments Grid */}
        <ServicesGrid onBookCall={handleBookCall} />

        {/* 5. The Patient Smile Playbook */}
        <div id="playbook">
          <GrowthPlaybookBox onBookCall={handleBookCall} />
        </div>

        {/* 6. Real Patient Smile Transformations */}
        <CaseStudies onBookCall={handleBookCall} />

        {/* 7. Patient Testimonials Slider */}
        <TestimonialSlider />

        {/* 8. About Miami Dental Clinic & Specialists */}
        <AboutSection onBookCall={handleBookCall} />

        {/* 9. Pre-Footer Call to Action Banner */}
        <PreFooterCTA onBookCall={handleBookCall} />

        {/* 10. ONLINE APPOINTMENT BOOKING & PATIENT FAQ (Directly in Homepage) */}
        <BookingSection />
      </main>

      {/* Persistent Global Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
