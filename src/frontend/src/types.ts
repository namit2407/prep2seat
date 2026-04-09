// Shared types for Prep2seat app

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rank: string;
  college: string;
  quote: string;
  initials: string;
}
