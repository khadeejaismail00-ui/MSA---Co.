import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'MSA & Co. | Accounting & Tax Solutions', template: '%s' },
  description: 'MSA & Co. provides accounting, taxation, audit and assurance, internal audit, advisory and compliance services for businesses in Pakistan.',
  keywords: ['MSA & Co.','accounting firm Pakistan','tax consultancy Pakistan','audit and assurance','internal audit','business advisory','corporate compliance','Karachi accounting firm'],
  authors: [{ name: 'MSA & Co.' }], creator: 'MSA & Co.', publisher: 'MSA & Co.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'MSA & Co.', title: 'MSA & Co. | Accounting, Tax, Audit & Advisory Services', description: 'Professional accounting, taxation, audit, advisory and compliance support for businesses.', images: [{ url: '/MSi.png', width: 512, height: 512, alt: 'MSA & Co. logo' }] },
  twitter: { card: 'summary_large_image', title: 'MSA & Co. | Professional Business Services', description: 'Accounting, taxation, audit, advisory and compliance services.', images: ['/MSi.png'] },
}

const tailwindConfig = `
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['DM Sans', 'Arial', 'sans-serif'] },
        colors: {
          msaBlue: '#06469F', msaTeal: '#13AAA5', msaDark: '#071F42',
          navy: '#062B63', teal: '#13AAA5', lightBlue: '#EEF6FC'
        }
      }
    }
  };
`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org', '@type': 'AccountingService', name: 'MSA & Co.',
    description: 'Accounting, taxation, audit, internal audit, advisory and compliance services.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', logo: '/MSi.png',
    telephone: '+92-346-3313940', email: 'msa.hbjk@gmail.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Suite 1006, 10th Floor, Gold Tower, Raja Ghanzanfer Ali Road, Saddar', addressLocality: 'Karachi', addressCountry: 'PK' },
    areaServed: 'Pakistan'
  }
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <Script id="tailwind-config" strategy="beforeInteractive">{tailwindConfig}</Script>
    <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
  </head><body className="bg-white text-gray-900 font-sans antialiased">{children}</body></html>
}
