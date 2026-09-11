import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Our Team | MSA & Co.', description: 'Meet the MSA & Co. team and learn how our professionals support clients across finance and business matters.', alternates: { canonical: '/team' } }
export default function Team(){ return <HtmlPage page="team"/> }
