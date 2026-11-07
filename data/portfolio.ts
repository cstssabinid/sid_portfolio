import {
  Blocks,
  Camera,
  CloudCog,
  Code2,
  LayoutTemplate,
  Palette,
  SearchCheck,
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
  eyebrow: 'Software developer · Photographer · QA tester',
  headline: 'I build practical digital systems and polished visual experiences.',
  introduction:
    'I combine Computer Science, product engineering, photography, and quality assurance to help people and businesses turn ideas into dependable digital work.',
  about: [
    'I am a detail-oriented Rwandan freelancer combining creative photography with technical digital skills. I build and test useful systems while helping clients produce professional visual content.',
    'My Computer Science background supports a practical, end-to-end approach: understand the problem, shape the experience, implement the solution, validate the details, and deliver polished work on time.',
  ],
  focus: [
    'Full-stack product development',
    'Website and app quality assurance',
    'Portrait and event photography',
    'Photo retouching and graphic design',
  ],
  email: '',
  phone: '+250786339597',
  location: 'Kigali, Rwanda',
  github: 'https://github.com/cstssabinid',
  linkedin: '',
  creativePortfolio: 'https://berwaphotohub.mypixieset.com',
  cvPath: '/cv/Sabin-IZERE-DUKUZUMUKIZA-Resume.pdf',
  profileImage: '/images/profile/sabin-izere-dukuzumukiza.jpg',
  languages: ['Kinyarwanda', 'English', 'French'],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const education = {
  qualification: 'Bachelor of Science in Computer Science',
  institution: 'University of Rwanda',
  location: 'Kigali, Rwanda',
  period: '2023 - Present',
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
    id: 'shine-baba-shop',
    title: 'Shine Baba Shop',
    category: 'E-commerce',
    description: 'A customer-facing online storefront for Shine Baba Shop.',
    longDescription: 'An e-commerce website that brings Shine Baba Shop’s products and shopping experience to customers online.',
    live: 'https://shinebabashop.com/',
    technologies: ['E-commerce', 'Online storefront', 'Responsive web'],
    features: ['Online product discovery', 'Customer shopping experience', 'Responsive storefront'],
    role: 'Product design, full-stack development, and deployment',
    status: 'Live',
    accent: '#fb7185',
    shortMark: 'SBS',
  },  {
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
    title: 'Quality Assurance',
    description: 'Checking digital products for clarity, usability, and defects.',
    skills: ['Website testing', 'App testing', 'Bug reporting', 'Usability'],
    icon: SearchCheck,
  },
  {
    title: 'Photography',
    description: 'Producing and refining professional visual content.',
    skills: ['Studio portraits', 'Event photography', 'Photo retouching'],
    icon: Camera,
  },
  {
    title: 'Creative Tools',
    description: 'Turning raw visual material into polished client deliverables.',
    skills: ['Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'Graphic design'],
    icon: Palette,
  },
  {
    title: 'Cloud & Delivery',
    description: 'Taking digital products from source code to live use.',
    skills: ['Vercel', 'Git', 'CI/CD workflows', 'Production deployment'],
    icon: CloudCog,
  },
  {
    title: 'Digital Support',
    description: 'Helping clients complete practical remote and online work.',
    skills: ['Data entry', 'Online research', 'Formatting', 'Tech support'],
    icon: Wrench,
  },
];

export const experience: Experience[] = [
  {
    role: 'Full-Stack Systems Developer',
    organization: 'Independent product & client systems',
    period: 'Selected production work',
    description:
      'Designed, built, and deployed five live web systems across hospitality operations, creative services, healthcare, and agricultural cooperative management.',
    responsibilities: [
      'Translated domain workflows into focused, responsive web experiences.',
      'Owned product implementation from interface decisions through production deployment.',
      'Created purpose-built solutions for distinctly different users and operational contexts.',
    ],
    achievements: [
      'Delivered five independently accessible production systems.',
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
  {
    role: 'Studio Photographer & Photo Retoucher',
    organization: 'Berwa Photo Hub · Self-employed',
    period: 'September 2023 - Present',
    location: 'Kigali, Rwanda',
    description:
      'Delivering professional portrait and event photography from studio production through final client files.',
    responsibilities: [
      'Plan and deliver portrait, studio, and event photography sessions.',
      'Perform advanced photo retouching, color grading, and visual refinement.',
      'Manage client revisions and final file delivery.',
    ],
    achievements: [
      'Built a dependable end-to-end photography service workflow.',
      'Combined creative direction, technical capture, and post-production.',
    ],
    technologies: [
      'DSLR & studio equipment',
      'Adobe Photoshop',
      'Adobe Lightroom',
    ],
    links: [
      {
        label: 'Photography portfolio',
        href: 'https://berwaphotohub.mypixieset.com',
      },
    ],
  },
  {
    role: 'Freelance Digital Services Provider',
    organization: 'Independent remote work',
    period: '2020 - Present',
    location: 'Remote',
    description:
      'Supporting clients with practical digital tasks, quality assurance, formatting, research, and online workflows.',
    responsibilities: [
      'Assist clients with graphic design, document formatting, and online support.',
      'Test websites and applications for usability issues and defects.',
      'Provide structured bug reports and dependable remote task delivery.',
    ],
    achievements: [
      'Developed a multidisciplinary service spanning creative and technical work.',
      'Maintained clear communication, deadline ownership, and client-focused delivery.',
    ],
    technologies: ['Website testing', 'Canva', 'Online research', 'Remote tools'],
    links: [],
  },
  {
    role: 'Hackathon Team Contributor',
    organization: 'CodeXtreme Hackathon · Stock Management System',
    period: 'Project experience',
    description:
      'Collaborated with a team to deliver a working inventory management solution during a technology hackathon.',
    responsibilities: [
      'Contributed to inventory management system development.',
      'Supported backend logic and core system functionality.',
      'Collaborated across the team to complete a working solution.',
    ],
    achievements: [
      'Delivered a functional digital solution within a hackathon setting.',
      'Applied collaborative problem-solving under a fixed delivery window.',
    ],
    technologies: ['Backend logic', 'Inventory workflows', 'Team collaboration'],
    links: [],
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
