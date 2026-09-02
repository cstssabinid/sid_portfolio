import {
  Blocks,
  CloudCog,
  Code2,
  Database,
  Gauge,
  LayoutTemplate,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

import type {
  Certificate,
  Experience,
  Project,
  SkillGroup,
} from '@/types/portfolio';

export const personalInfo = {
  name: 'Sabin IZERE DUKUZUMUKIZA',
  shortName: 'Sabin Izere',
  initials: 'SID',
  eyebrow: 'Software developer · Digital systems builder',
  headline: 'I build purposeful digital products that work in the real world.',
  introduction:
    'From operational reporting to healthcare, photography, and cooperative management, I turn complex workflows into focused web experiences.',
  about: [
    'I am a software developer focused on building useful, reliable systems for organizations and communities. My work combines thoughtful product design with practical implementation.',
    'I enjoy shaping a product from the first problem statement through interface design, development, deployment, and iteration. The result is software that feels clear to use and is ready for real operations.',
  ],
  focus: [
    'Full-stack product development',
    'Business workflow digitization',
    'Accessible, responsive interfaces',
    'Production deployment and iteration',
  ],
  email: '',
  location: '',
  github: '',
  linkedin: '',
  cvPath: '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const projects: Project[] = [
  {
    id: 'triumvira-daily-report',
    title: 'TRIUMVIRA Daily Report',
    category: 'Business Systems',
    description:
      'An offline-first daily business control system for TRIUMVIRA Bar and Restaurant.',
    longDescription:
      'A focused operational platform that gives a hospitality business one dependable place to capture, review, and manage its day-to-day reporting workflow.',
    live: 'https://triumvira-daily-report.vercel.app/login',
    technologies: ['Web application', 'Offline-first', 'Vercel'],
    features: [
      'Structured daily operational reporting',
      'Offline-first workflow support',
      'Secure sign-in entry point',
      'Production-ready hosted experience',
    ],
    role: 'Product design, full-stack development, and deployment',
    status: 'Live',
    accent: '#60a5fa',
    shortMark: 'TDR',
  },
  {
    id: 'berwa-photo-hub',
    title: 'Berwa Photo Hub',
    category: 'Creative Platforms',
    description:
      'A polished photography studio platform for portfolios, packages, studio content, and bookings.',
    longDescription:
      'A client-facing photography experience that brings together service discovery, visual portfolio browsing, package exploration, and a clear path to booking.',
    live: 'https://berwaphotohub.vercel.app/',
    technologies: ['Responsive web', 'Booking journey', 'Vercel'],
    features: [
      'Category-based photography portfolio',
      'Studio services and package discovery',
      'Booking-focused customer journey',
      'Responsive presentation across devices',
    ],
    role: 'Product design, full-stack development, and deployment',
    status: 'Live',
    accent: '#c084fc',
    shortMark: 'BPH',
  },
  {
    id: 'berwa-hospitals',
    title: 'BERWA HOSPITALS',
    category: 'Health Technology',
    description:
      'A digital hospital platform created to make healthcare information and services easier to access.',
    longDescription:
      'A healthcare-focused web system designed around clear information architecture, approachable navigation, and a professional digital presence for hospital services.',
    live: 'https://berwahospitals.vercel.app/',
    technologies: ['Health technology', 'Responsive web', 'Vercel'],
    features: [
      'Healthcare service presentation',
      'Clear patient-oriented navigation',
      'Responsive information experience',
      'Production deployment',
    ],
    role: 'Product design, full-stack development, and deployment',
    status: 'Live',
    accent: '#34d399',
    shortMark: 'BH',
  },
  {
    id: 'scfmp',
    title: 'SCFMP',
    category: 'AgriTech',
    description:
      'A smart cooperative and farmer management platform for connected agricultural operations.',
    longDescription:
      'A purpose-built platform that supports the management of cooperative and farmer information through a single, organized digital workflow.',
    live: 'https://scfmp-gules.vercel.app/',
    technologies: ['AgriTech', 'Management platform', 'Vercel'],
    features: [
      'Cooperative management workflow',
      'Farmer information organization',
      'Purpose-built operational interface',
      'Responsive production experience',
    ],
    role: 'Product design, full-stack development, and deployment',
    status: 'Live',
    accent: '#fbbf24',
    shortMark: 'SCFMP',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Product Engineering',
    description: 'Turning practical needs into maintainable digital products.',
    skills: ['Full-stack development', 'System design', 'Product thinking'],
    icon: Blocks,
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and polished interfaces.',
    skills: ['React', 'Next.js', 'TypeScript', 'Responsive UI'],
    icon: LayoutTemplate,
  },
  {
    title: 'Backend Development',
    description: 'Designing dependable application logic and data flows.',
    skills: ['API design', 'Authentication flows', 'Business logic'],
    icon: Code2,
  },
  {
    title: 'Data & Persistence',
    description: 'Organizing information for reliable operational use.',
    skills: ['Data modeling', 'Databases', 'Offline-first patterns'],
    icon: Database,
  },
  {
    title: 'Quality & Delivery',
    description: 'Shipping experiences that remain clear and dependable.',
    skills: ['Testing', 'Accessibility', 'Performance', 'Git'],
    icon: Gauge,
  },
  {
    title: 'Cloud & Operations',
    description: 'Taking products from source code to live environments.',
    skills: ['Vercel', 'CI/CD workflows', 'Production deployment'],
    icon: CloudCog,
  },
  {
    title: 'Security Mindset',
    description: 'Applying careful defaults to product and data decisions.',
    skills: ['Input validation', 'Secure configuration', 'Privacy awareness'],
    icon: ShieldCheck,
  },
  {
    title: 'Developer Tools',
    description: 'Using modern tools to move quickly without losing quality.',
    skills: ['VS Code', 'Command line', 'Code review'],
    icon: Wrench,
  },
];

export const experience: Experience[] = [
  {
    role: 'Full-Stack Systems Developer',
    organization: 'Independent product & client systems',
    period: 'Selected production work',
    description:
      'Designed, built, and deployed four live web systems across hospitality operations, creative services, healthcare, and agricultural cooperative management.',
    responsibilities: [
      'Translated domain workflows into focused, responsive web experiences.',
      'Owned product implementation from interface decisions through production deployment.',
      'Created purpose-built solutions for distinctly different users and operational contexts.',
    ],
    achievements: [
      'Delivered four independently accessible production systems.',
      'Covered business reporting, studio booking, hospital information, and cooperative management use cases.',
    ],
    technologies: [
      'Full-stack development',
      'Responsive design',
      'Product delivery',
      'Vercel',
    ],
    links: projects.map((project) => ({
      label: project.title,
      href: project.live,
    })),
  },
];

export const certificates: Certificate[] = [];

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];
