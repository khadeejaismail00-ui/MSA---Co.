import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Contact | MSA & Co.', description: 'Contact MSA & Co. for accounting, taxation, audit, advisory and compliance support.', alternates: { canonical: '/contact' } }
export default function Contact(){ return <HtmlPage page="contact"/> }
