import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return ['', '/about', '/services', '/team', '/contact'].map((path, i) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: i === 0 ? 'weekly' : 'monthly', priority: i === 0 ? 1 : 0.8 }))
}
