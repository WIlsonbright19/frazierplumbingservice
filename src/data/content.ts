import { ServiceItem, CaseStudyItem, TestimonialItem, FaqItem } from '../types';
import { IMAGES } from '../assets/images';

export const CLINIC_INFO = {
  name: 'Frazier Plumbing Service of Atlanta',
  tagline: '24/7 Licensed Master Plumber · Atlanta, GA',
  phone: '(678) 379-1455',
  phoneRaw: '+16783791455',
  address: '1000 Moreland Ave SE, Atlanta, GA 30316',
  googleMapsUrl: 'https://maps.google.com/?cid=10317840283646066300&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  email: 'service@frazierplumbingatl.com',
  hours: 'Open 24/7 · Emergency Response Available'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Repairs & Burst Pipes',
    tagline: '24/7 Rapid dispatch across Metro Atlanta',
    description: 'Immediate water shutoff, slab leak detection, burst copper and PEX line replacement with zero delay.',
    image: IMAGES.expertDrain,
    deliverables: [
      '24/7 Rapid response dispatch',
      'Electronic leak detection',
      'Pipe freeze & rupture repairs',
      'Complete water line restore'
    ],
    duration: 'Immediate Dispatch'
  },
  {
    id: 'water-heaters',
    title: 'Water Heaters & Tankless Systems',
    tagline: 'Repair, replacement, and high-efficiency upgrades',
    description: 'Same-day installation for gas, electric, and tankless units with guaranteed manufacturer warranty.',
    image: IMAGES.waterHeater,
    deliverables: [
      'Tankless continuous hot water',
      'Traditional tank replacements',
      'Thermostat & element repair',
      'Code compliant installations'
    ],
    duration: 'Same-Day Service'
  },
  {
    id: 'drain-sewer',
    title: 'Drain Cleaning & Sewer Line Hydro-Jetting',
    tagline: 'HD Camera diagnostics and root removal',
    description: 'Tough grease, scale, and root removal using high-pressure hydro-jetting and color video pipe inspections.',
    image: IMAGES.sewerInspection,
    deliverables: [
      'High-definition camera scopes',
      'Hydro-jetting root clearing',
      'Trenchless pipe relining options',
      'Clean clog-free flow guarantee'
    ],
    duration: '1 to 2 Hours'
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'emergency-leak-fix',
    category: 'EMERGENCY SERVICE',
    title: 'Midtown Atlanta Midnight Water Main Line Repair',
    image: IMAGES.expertDrain,
    client: 'Residential Homeowner · Midtown Atlanta',
    metric: 'Under 45 Min Arrival',
    summary: 'Sudden main line rupture threatening structural drywall and hardwood floors at 2:00 AM.',
    challenge: 'Water flooding the basement crawl space with emergency main shutoff valve seized and corroded.',
    solution: 'Crews arrived in 38 minutes, isolated the line, replaced 18ft of broken pipe, and restored water safely.',
    results: [
      'Prevented over $25,000 in water damage',
      'Brand new heavy-duty shutoff ball valve installed',
      'System tested and pressurized by 4:30 AM'
    ]
  },
  {
    id: 'tankless-upgrade',
    category: 'WATER HEATER',
    title: 'High-Efficiency Tankless Conversion in Inman Park',
    image: IMAGES.waterHeater,
    client: 'Family Residence · Inman Park',
    metric: 'Endless Hot Water & 40% Energy Savings',
    summary: 'A 15-year-old leaking 50-gallon tank replaced with a high-output tankless water heating system.',
    challenge: 'Tight mechanical closet with inadequate venting requiring custom stainless venting run.',
    solution: 'Engineered clean exterior concentric vent piping and installed a Navien high-efficiency tankless heater.',
    results: [
      'Never run out of hot water for 4 simultaneous showers',
      'Reclaimed 12 sq ft of interior utility space',
      'Zero monthly gas spikes and 10-year warranty'
    ]
  },
  {
    id: 'sewer-jetting',
    category: 'SEWER & DRAIN',
    title: 'Severe Tree Root Obstruction Cleared via Hydro-Jetting',
    image: IMAGES.sewerInspection,
    client: 'Commercial Property · Moreland Ave SE',
    metric: '100% Flow Restored',
    summary: 'Repeated sewage backup in lower restrooms causing downtime for local business tenants.',
    challenge: 'Intrusive oak tree roots spanning 35 feet inside an older 4-inch clay sewer main line.',
    solution: 'Color camera inspection pinpointed exact entry points, followed by 4000 PSI rotating hydro-jet root cut.',
    results: [
      'Entire clay run cleaned spotless with video verification',
      'Zero trenching or pavement destruction needed',
      'Business resumed standard operations same afternoon'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'review-1',
    quote: '"Frazier Plumbing answered on the second ring at 1 AM when my water heater burst. Within 45 minutes they were at my house, stopped the flood, and installed a replacement unit the next morning. True lifesavers!"',
    author: 'Darnell W.',
    role: 'HOMEOWNER',
    company: 'EAST ATLANTA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80'
  },
  {
    id: 'review-2',
    quote: '"Honest, fair pricing, and zero upselling. They diagnosed a stubborn drain clog with their video camera in 15 minutes that another company tried to charge me thousands to dig up. Highly recommended!"',
    author: 'Alicia M.',
    role: 'RESIDENTIAL CLIENT',
    company: 'MORELAND AVE AREA, ATLANTA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80'
  },
  {
    id: 'review-3',
    quote: '"As a property manager in Atlanta, Frazier Plumbing is the only number on my speed dial. Prompt 24/7 service, professional master technicians, and flawless work every single time."',
    author: 'Marcus B.',
    role: 'PROPERTY MANAGER',
    company: 'DOWNTOWN ATLANTA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How fast can you arrive for a plumbing emergency?',
    answer: 'We operate 24 hours a day, 7 days a week. For emergency calls across Atlanta and Moreland Ave, our mobile service trucks are dispatched immediately, typically arriving within 30 to 60 minutes.'
  },
  {
    id: 'faq-2',
    question: 'Are your technicians licensed and insured in Georgia?',
    answer: 'Yes. Frazier Plumbing Service is fully licensed, insured, and bonded in the state of Georgia with experienced master plumbers.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer upfront estimates before starting any work?',
    answer: 'Yes. We inspect the problem, explain your repair options clearly, and provide upfront transparent pricing with zero surprise fees.'
  },
  {
    id: 'faq-4',
    question: 'What plumbing services do you handle?',
    answer: 'We handle emergency pipe repairs, water heaters (tank and tankless), drain cleaning, sewer camera inspections, hydro-jetting, fixture installation, and whole-home repiping.'
  }
];
