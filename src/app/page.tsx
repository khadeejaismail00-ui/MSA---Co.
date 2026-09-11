import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: { absolute: 'MSA & Co. | Accounting & Tax Solutions' }, description: 'Professional accounting, taxation, audit, advisory and compliance services from MSA & Co.', alternates: { canonical: '/' } }
export default function Home(){ return <HtmlPage page="index"/> }
