import React from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck, Clock, Phone, MapPin, Sparkles } from 'lucide-react';
import { ServiceItem, CaseStudyItem } from '../types';
import { CLINIC_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookCall }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-6 sm:p-9 text-[#181818] shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 rounded-lg cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6010]">
            CLINICAL TREATMENT OVERVIEW
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal mb-3">
          {service.title}
        </h3>
        <p className="text-base text-[#615D56] leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-neutral-200">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E6B65] mb-3">
            <Clock size={15} />
            <span>Estimated Duration: {service.duration}</span>
          </div>

          <h4 className="text-sm font-bold uppercase tracking-wider text-[#151515] mb-3">
            What is Included in Your Treatment Plan
          </h4>
          <div className="space-y-2.5">
            {service.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#E5A83B]/30 text-[#8C6010] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span className="text-sm text-[#3E3C37]">{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-neutral-500 hover:text-black cursor-pointer"
          >
            Back to Treatments
          </button>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E5A83B] hover:bg-[#d89a2b] text-[#121212] font-semibold text-sm px-6 py-3 rounded-lg shadow-sm cursor-pointer"
          >
            <span>Book Consultation For This Treatment</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onBookCall }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-6 sm:p-9 text-[#181818] shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 rounded-lg cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6010]">
            {caseStudy.category} · {caseStudy.client}
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal mb-3 leading-snug">
          {caseStudy.title}
        </h3>

        <div className="inline-block bg-[#151515] text-[#E5A83B] text-xs font-semibold px-3 py-1 rounded-md mb-6">
          Clinical Outcome: {caseStudy.metric}
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-neutral-200">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-4 mb-6 text-sm text-[#4E4B45] leading-relaxed">
          <div>
            <h4 className="font-bold text-[#151515] text-xs uppercase tracking-wider mb-1">Patient Presentation</h4>
            <p>{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="font-bold text-[#151515] text-xs uppercase tracking-wider mb-1">Our Dental Intervention</h4>
            <p>{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-bold text-[#151515] text-xs uppercase tracking-wider mb-2">Verified Results</h4>
            <ul className="space-y-1.5 pl-2">
              {caseStudy.results.map((r, i) => (
                <li key={i} className="flex items-center gap-2 text-[#24221E] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-neutral-500 hover:text-black cursor-pointer"
          >
            Close Transformation
          </button>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E5A83B] hover:bg-[#d89a2b] text-[#121212] font-semibold text-sm px-6 py-3 rounded-lg shadow-sm cursor-pointer"
          >
            <span>Request Similar Smile Design</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ open, onClose, onBookCall }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-neutral-300 rounded-2xl p-6 sm:p-10 text-[#181818] shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 rounded-lg cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A83B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6010]">
              TRANSPARENT VALUE
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal mb-2">
            Miami Dental Clinic Fees & Financing
          </h3>
          <p className="text-sm text-[#66625B]">
            Upfront, transparent pricing with 0% APR financing options through CareCredit and Proceed Finance. We submit all PPO dental insurance claims on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Diagnostic Tier */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#8C6010] mb-1">New Patient Special</div>
              <h4 className="font-serif text-2xl text-[#151515] mb-2">Comprehensive 3D Exam</h4>
              <p className="text-xs text-[#66625B] mb-4">
                Full mouth 3D CBCT digital scans, high-res intraoral imaging, periodontal health staging, and oral cancer screening.
              </p>
              <div className="text-2xl font-serif text-[#151515] mb-4">$195 <span className="text-xs font-sans text-neutral-500 font-normal">(Normally $450) or $0 with PPO</span></div>
              <ul className="text-xs text-[#4F4C46] space-y-2 mb-6">
                <li className="flex items-center gap-2">✓ Full 3D CBCT low-dose diagnostic scan</li>
                <li className="flex items-center gap-2">✓ Digital Smile Design (DSD) live preview</li>
                <li className="flex items-center gap-2">✓ 45-minute unhurried doctor consultation</li>
              </ul>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="w-full text-center py-2.5 rounded-md border border-neutral-300 hover:border-black font-semibold text-xs transition-colors cursor-pointer"
            >
              Book New Patient Exam
            </button>
          </div>

          {/* Aesthetic Smile Tier */}
          <div className="bg-[#151515] text-white rounded-xl p-6 border border-white/10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-[#E5A83B] text-[#121212] text-[10px] font-bold px-2 py-0.5 rounded">
              FEATURED
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#E5A83B] mb-1">Aesthetic Mastery</div>
              <h4 className="font-serif text-2xl text-white mb-2">Porcelain Veneers & Implants</h4>
              <p className="text-xs text-[#B5B0A6] mb-4">
                Bespoke handcrafted feldspathic and E.max veneers by master ceramists, and 3D computer-guided implants.
              </p>
              <div className="text-2xl font-serif text-white mb-4">From $1,400 <span className="text-xs font-sans text-neutral-400 font-normal">per veneer / $0 down with 0% APR</span></div>
              <ul className="text-xs text-[#D8D4CC] space-y-2 mb-6">
                <li className="flex items-center gap-2">✓ Handcrafted bespoke ceramic shade matching</li>
                <li className="flex items-center gap-2">✓ Minimally invasive enamel preservation</li>
                <li className="flex items-center gap-2">✓ 10-Year Clinical Warranty Included</li>
                <li className="flex items-center gap-2">✓ Sedation dentistry comfort options</li>
              </ul>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="w-full text-center py-2.5 rounded-md bg-[#E5A83B] hover:bg-[#d89a2b] text-[#121212] font-semibold text-xs transition-colors cursor-pointer"
            >
              Book Smile Consultation
            </button>
          </div>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center gap-3 text-xs text-[#7A5510]">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span>
            <strong>Our Warranty:</strong> All custom porcelain restorations and titanium implants carry our comprehensive Miami Dental Clinic warranty covering adjustments, fit integrity, and material longevity.
          </span>
        </div>
      </motion.div>
    </div>
  );
};
