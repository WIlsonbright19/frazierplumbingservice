import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, CheckCircle2, MapPin, Phone, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/content';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Porcelain Veneers & Smile Design',
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
    <div id="booking" className="pt-28 pb-20 bg-[#FAF8F5]">
      {/* Contact Hero Title */}
      <section className="pt-8 pb-16 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#151515]" />
            <span className="text-[11.5px] uppercase tracking-[0.2em] font-semibold text-[#66625B]">
              ONLINE APPOINTMENT BOOKING
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[70px] leading-[1.06] text-[#151515] font-normal tracking-tight max-w-4xl mx-auto text-balance">
            Let's design your healthy, radiant Miami smile
          </h1>

          {/* Quick Clinic Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-[#55524B]">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-black underline underline-offset-2"
            >
              <MapPin size={14} className="text-[#E5A83B]" />
              <span>{CLINIC_INFO.address}</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-black font-semibold"
            >
              <Phone size={14} className="text-[#E5A83B]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#E5A83B]" />
              <span>{CLINIC_INFO.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Booking Section (2-Columns: Left details, Right form) */}
      <section className="py-16 sm:py-24 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Promises & Overview */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal mb-5 leading-tight">
                Book your free consultation & 3D scan
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#55524B] leading-relaxed mb-8">
                Tell us a little about your aesthetic or dental goals. Our patient coordinator will confirm your private suite appointment within 24 hours.
              </p>

              {/* 4 Value Checkmarks matching video */}
              <div className="space-y-4 mb-8">
                {[
                  '45-minute private evaluation with lead doctor',
                  'Comprehensive 3D intraoral digital imaging scan',
                  'Interactive smile simulation prior to any procedure',
                  'Zero obligation, transparent treatment pricing'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-neutral-200/70 text-[#151515] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-[14.5px] text-[#2C2A26] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Verified Location Card */}
              <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#8C6010]">
                  <ShieldCheck size={16} />
                  <span>Google Verified Dental Practice</span>
                </div>
                <p className="text-xs text-[#55524B] leading-relaxed mb-3">
                  Located in the heart of Miami on Brickell Avenue with valet parking available for all patients.
                </p>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#181818] hover:text-[#E5A83B]"
                >
                  <span>Open in Google Maps</span>
                  <MapPin size={12} />
                </a>
              </div>
            </div>

            {/* Right Column: Lead Form matching video */}
            <div className="lg:col-span-7">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-transparent space-y-6"
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
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] shadow-xs"
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
                        placeholder="e.g. elena@example.com"
                        className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Treatment Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(305) 000-0000"
                        className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                        TREATMENT OF INTEREST
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] shadow-xs"
                      >
                        <option value="Porcelain Veneers & Smile Design">Porcelain Veneers & Smile Design</option>
                        <option value="Precision Dental Implants">Precision Dental Implants</option>
                        <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                        <option value="Laser Gum Contouring">Laser Gum Contouring</option>
                        <option value="General Clean & Preventative Exam">General Clean & Preventative Exam</option>
                        <option value="Emergency Tooth Pain">Emergency Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Preferred Date/Time */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                      PREFERRED APPOINTMENT TIMEFRAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        placeholder="e.g. Next Tuesday morning or any weekday afternoon"
                        className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] shadow-xs"
                      />
                      <Calendar size={18} className="absolute right-4 top-3.5 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 4: Details Textarea */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#757169] font-bold mb-2">
                      TELL US ABOUT YOUR GOALS OR SYMPTOMS
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="e.g. Interested in closing a front gap and whitening, or replacing a missing molar..."
                      className="w-full bg-white border border-neutral-300 focus:border-[#151515] focus:ring-1 focus:ring-[#151515] focus:outline-none rounded-lg px-4 py-3 text-[14.5px] text-[#151515] placeholder-neutral-400 shadow-xs resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#151515] hover:bg-[#282828] active:scale-[0.99] text-white font-semibold text-[14.5px] py-3.5 rounded-lg transition-all duration-200 cursor-pointer shadow-md"
                    >
                      Request Appointment Consultation
                    </button>
                  </div>

                  {/* Privacy Policy disclaimer */}
                  <p className="text-center text-[12px] text-[#7A756C]">
                    By submitting this form, you agree to our{' '}
                    <span className="underline cursor-pointer hover:text-black">
                      HIPAA-compliant privacy policy
                    </span>
                    .
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-neutral-200 rounded-xl p-8 text-center shadow-md"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E5A83B]/20 text-[#B87D17] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-3xl text-[#151515] font-normal mb-3">
                    Thank you, {formData.name}
                  </h3>
                  <p className="text-[15px] text-[#55524B] leading-relaxed max-w-md mx-auto mb-6">
                    We've received your appointment request for <strong>{formData.serviceInterest}</strong>. Our concierge will contact you at {formData.email} or {formData.phone || 'your phone'} within 24 hours to finalize your private consultation time.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Porcelain Veneers & Smile Design',
                        preferredDate: '',
                        details: ''
                      });
                    }}
                    className="text-xs font-semibold text-[#181818] underline hover:text-[#E5A83B]"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section matching video */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[880px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#151515]" />
              <span className="text-[11.5px] uppercase tracking-[0.2em] font-semibold text-[#66625B]">
                PATIENT FAQ
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] text-[#151515] font-normal tracking-tight text-balance">
              Everything you need to know before starting
            </h2>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div key={faq.id} className="py-6 sm:py-7">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#181818] group-hover:text-[#9A6715] transition-colors leading-snug font-normal">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 transition-transform duration-300 text-neutral-600 ${
                        isOpen ? 'rotate-180 bg-[#181818] text-white border-[#181818]' : 'group-hover:border-neutral-800'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[15px] sm:text-[16px] text-[#55524B] leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
