import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Services | MSA & Co.', description: 'Explore MSA & Co. services including accounting, taxation, audit and assurance, internal audit, advisory and compliance.', alternates: { canonical: '/services' } }
export default function Services(){ return <HtmlPage page="services"/> }
