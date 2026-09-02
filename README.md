# Sabin IZERE DUKUZUMUKIZA — Personal Portfolio

A dark, responsive personal portfolio for Sabin IZERE DUKUZUMUKIZA. The site presents selected production systems, technical capabilities, experience, future verified credentials, and a deployment-safe contact flow.

## Highlights

- Responsive single-page experience with a fixed desktop navigation and accessible mobile menu
- Structured project data, category filters, live links, and keyboard-accessible project detail dialogs
- Work experience featuring TRIUMVIRA Daily Report, Berwa Photo Hub, BERWA HOSPITALS, and SCFMP
- Centralized content model for personal details, projects, skills, experience, and certificates
- Contact form with native validation plus sending, success, and error states
- Resume-backed profile photo, education, languages, experience, contact details, and downloadable CV
- SEO metadata, Open Graph support, JSON-LD Person data, sitemap, robots, manifest, and favicon
- Reduced-motion support, visible focus states, semantic landmarks, and a skip link
- Custom 404 route and conditional support for social links and a downloadable CV

## Technology

- Next.js 16 App Router for the primary Vercel deployment
- Vinext and Cloudflare Workers compatibility for OpenAI Sites
- React 19 and TypeScript
- Tailwind CSS 4 and custom CSS design tokens
- shadcn primitives backed by Base UI
- Lucide React icons
- Cloudflare Workers-compatible Sites build

## Project structure

```text
app/                    Routes, metadata, sitemap, robots, manifest, theme
components/             Portfolio sections and reusable UI
components/ui/          Installed shadcn primitives
data/portfolio.ts       Editable portfolio content
types/portfolio.ts      Content data models
public/images/          Profile, project, and certificate assets
public/cv/              Optional downloadable CV
.openai/hosting.json    Sites hosting configuration
```

## Local setup

```bash
npm install
npm run dev
```

The development server prints its local URL. For production checks:

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` and configure only the values you use:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

- `NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap output, and structured data. Leave it unset during local development.
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` enables the contact form. Without it, the form displays a clear configuration message and sends nothing.
- Never commit `.env.local` or a secret API key.

## Customize the portfolio

Edit `data/portfolio.ts` to change:

- name, biography, headline, email, location, social links, and CV path in `personalInfo`
- project cards and project details in `projects`
- capability categories in `skillGroups`
- work history in `experience`
- verified credentials in `certificates`

Assets belong in:

- profile photo: `public/images/profile/sabin-izere-dukuzumukiza.jpg`
- project screenshots: `public/images/projects/`
- certificate thumbnails: `public/images/certificates/`
- certificate PDFs: a public path of your choice, referenced by the certificate record
- CV: `public/cv/Sabin-IZERE-DUKUZUMUKIZA-Resume.pdf`

The current profile treatment and project covers are intentional code-native placeholders. Add only images that belong to Sabin; do not reuse assets from the design reference.

## Adding certificates

Add a certificate image and optional PDF, then add a verified object to the `certificates` array in `data/portfolio.ts`. The data model supports title, issuer, date, thumbnail, credential URL, and PDF URL. Do not publish unverified placeholder achievements.

## GitHub workflow

The intended production workflow is:

```text
Local edit → lint/build → commit → push main → automatic hosting deployment
```

Use feature branches and pull requests for larger changes. Do not commit environment secrets, generated build folders, or deployment credentials.

## Deployment

### Vercel

Import the GitHub repository in Vercel and keep the repository’s standard build command. Configure the environment variables above for Production and Preview as needed. Connect the `main` branch to production so future pushes deploy automatically.

### OpenAI Sites

The repository is also configured for Sites through `.openai/hosting.json`. Run `npm run sites:build` to emit Cloudflare Workers-compatible output for versioned deployment.

## Contact form configuration

1. Create a Formspree form for the destination email address.
2. Add the full endpoint as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` locally and in the hosting environment.
3. Redeploy the site.
4. Submit one non-sensitive test message and confirm receipt.

Until this variable is configured, the contact form intentionally remains in a safe, non-sending state.
