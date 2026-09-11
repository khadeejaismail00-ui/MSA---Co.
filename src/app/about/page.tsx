import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'About | MSA & Co.', description: 'Learn about MSA & Co., our approach, values and commitment to practical financial and business support.', alternates: { canonical: '/about' } }
export default function About(){ return <HtmlPage page="about"/> }
