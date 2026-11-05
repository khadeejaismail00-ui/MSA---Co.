import HtmlPage from '@/components/HtmlPage'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: { absolute: 'MSA & Co. | Accounting & Tax Solutions' }, description: 'Professional accounting, taxation, audit, advisory and compliance services from MSA & Co.', alternates: { canonical: '/' } }
const HERO_POSTER = 'https://res.cloudinary.com/oncfmefh/video/upload/so_0,f_auto,q_auto:eco,w_1280/v1793860429/darkvideo.jpg'
export default function Home(){ return <>
  {/* React hoists this into <head> so the hero poster shows immediately while the video loads */}
  <link rel="preload" as="image" href={HERO_POSTER} fetchPriority="high" />
  <HtmlPage page="index"/>
</> }
