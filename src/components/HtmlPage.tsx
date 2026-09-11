import fs from 'node:fs'
import path from 'node:path'
import ClientInteractions from './ClientInteractions'

export default function HtmlPage({ page }: { page: string }) {
  const file = path.join(process.cwd(), 'src', 'source', `${page}.html`)
  const html = fs.readFileSync(file, 'utf8')
  return <ClientInteractions page={page}><div dangerouslySetInnerHTML={{ __html: html }} /></ClientInteractions>
}
