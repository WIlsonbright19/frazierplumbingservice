import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, MapPin, Phone, Clock } from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/content';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Emergency Leak / Burst Pipe',
    preferredDate: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div id="booking" className="bg-[#FAF8F5] border-t border-neutral-200/60 scroll-mt-12">
      {/* 1. Header Banner Floated Left & Right */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 border-b border-neutral-200/60">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
                <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#66625B]">
                  ONLINE SERVICE REQUEST
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#151515] font-normal tracking-tight">
                Request plumbing service in Atlanta
              </h2>
            </div>

            {/* Quick Info Pills (Floated Right) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#55524B] shrink-0">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-black font-medium"
              >
                <MapPin size={14} className="text-[#E5A83B]" />
                <span>{CLINIC_INFO.address}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-black font-bold text-[#151515]"
              >
                <Phone size={14} className="text-[#E5A83B]" />
                <span>{CLINIC_INFO.phone} (24/7)</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#E5A83B]" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Booking Two-Column Grid: Floated Left & Right */}
      <section className="py-16 sm:py-24">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20">
            {/* Left Column (Floated Left): Direct Call */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#9A6715] mb-2">
                  NEED IMMEDIATE HELP?
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl text-[#151515] font-normal mb-4">
                  For active leaks, call directly
                </h3>
                <p className="text-[15px] text-[#55524B] leading-relaxed mb-6">
                  If water is flooding or your water heater is actively leaking, call our 24/7 emergency dispatch line right now for immediate technician routing.
                </p>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 bg-[#151515] hover:bg-[#282828] text-white px-7 py-4 rounded-xl font-bold text-base transition-all shadow-md group"
                >
                  <Phone size={18} className="text-[#E5A83B]" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column (Floated Right): Service Request Form */}
            <div className="lg:col-span-7">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-7 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6"
                >
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Davis"
                        className="w-full bg-[#FAF8F5] border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3.5 text-[14.5px] text-[#151515] shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full bg-[#FAF8F5] border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3.5 text-[14.5px] text-[#151515] shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Service Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(404) 000-0000"
                        className="w-full bg-[#FAF8F5] border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3.5 text-[14.5px] text-[#151515] shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        SERVICE NEEDED
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3.5 text-[14.5px] text-[#151515] shadow-xs"
                      >
                        <option value="Emergency Leak / Burst Pipe">Emergency Leak / Burst Pipe</option>
                        <option value="Water Heater Repair or Replacement">Water Heater Repair or Replacement</option>
                        <option value="Drain Cleaning & Clog Clearing">Drain Cleaning & Clog Clearing</option>
                        <option value="Sewer Line Camera Inspection">Sewer Line Camera Inspection</option>
                        <option value="Fixture Installation / Other">Fixture Installation / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Notes / Symptoms */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                      PLUMBING ISSUE DETAILS
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe the leak, clog, or water heater issue..."
                      className="w-full bg-[#FAF8F5] border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3.5 text-[14.5px] text-[#151515] shadow-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#E5A83B] hover:bg-[#d89a2b] active:scale-[0.99] text-[#121212] font-bold text-[15px] py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Submit Service Request
                  </button>
                </form>
              ) : (
                <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded-2xl shadow-sm text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#E5A83B] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#151515] mb-2">
                    Service Request Received!
                  </h3>
                  <p className="text-[14.5px] text-[#55524B] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. A technician from Frazier Plumbing will review your request and call <span className="font-semibold">{formData.phone || formData.email}</span> shortly.
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#151515] text-white px-6 py-3 rounded-lg text-sm font-semibold"
                  >
                    <Phone size={14} className="text-[#E5A83B]" />
                    <span>Call now for immediate dispatch</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion Floated Left & Right */}
      <section className="py-16 sm:py-24 border-t border-neutral-200/60 bg-[#F6F2EC]">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Header */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E5A83B]" />
                <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold text-[#66625B]">
                  QUESTIONS & ANSWERS
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-[#151515]">
                Common plumbing questions
              </h3>
              <p className="text-sm text-[#66625B] mt-3">
                Have an urgent question? Give us a call directly at {CLINIC_INFO.phone} anytime.
              </p>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-8 space-y-3.5">
              {FAQ_DATA.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-[15.5px] font-semibold text-[#181818]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#757169] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-5 pt-1 text-[14.5px] text-[#55524B] leading-relaxed border-t border-neutral-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
