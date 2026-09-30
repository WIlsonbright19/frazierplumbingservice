export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  duration: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  image: string;
  client: string;
  metric: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
