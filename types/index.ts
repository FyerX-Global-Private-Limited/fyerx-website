export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
}

export interface Therapist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  href?: string;
}
