import type { MetadataRoute } from 'next';

import { personalInfo } from '@/data/portfolio';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', personalInfo.siteUrl).toString(),
  };
}
