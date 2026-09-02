import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { personalInfo } from '@/data/portfolio';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = `${personalInfo.name} | Software Developer`;
const description =
  'Portfolio of Sabin IZERE DUKUZUMUKIZA, a software developer who builds practical digital systems for business, creative, healthcare, and agricultural workflows.';
const metadataBase = new URL(personalInfo.siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  keywords: [
    'Sabin IZERE DUKUZUMUKIZA',
    'software developer',
    'full-stack developer',
    'portfolio',
    'web applications',
    'Rwanda technology',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title,
    description,
    siteName: `${personalInfo.shortName} Portfolio`,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Software Developer and Digital Systems Builder`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07111f',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personalInfo.name,
              url: personalInfo.siteUrl,
              jobTitle: 'Software Developer',
              knowsAbout: [
                'Full-stack development',
                'Web application development',
                'System design',
                'Responsive user interfaces',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
