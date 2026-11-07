import type { LucideIcon } from 'lucide-react';

export type ProjectCategory =
  | 'Business Systems'
  | 'Creative Platforms'
  | 'Health Technology'
  | 'AgriTech'
  | 'E-commerce';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  live: string;
  technologies: string[];
  features: string[];
  role: string;
  status: 'Live';
  accent: string;
  shortMark: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  links: Array<{ label: string; href: string }>;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  pdf?: string;
  credential?: string;
}
