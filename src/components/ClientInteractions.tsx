'use client'

import { useEffect } from 'react'

const services: Record<string, {title: string; icon: string; text: string}> = {
  accounting: { title: 'Accounting', icon: 'fa-solid fa-calculator', text: 'We provide accounting support focused on accurate financial records, meaningful reporting and better financial control. Our services can help management maintain reliable information and understand the financial position and performance of the business.' },
  taxation: { title: 'Taxation', icon: 'fa-solid fa-file-invoice-dollar', text: "Our taxation services support businesses with tax compliance, preparation, review and advisory requirements. We focus on accurate reporting, timely compliance and practical solutions aligned with the client's business circumstances." },
  audit: { title: 'Audit & Assurance', icon: 'fa-solid fa-magnifying-glass-chart', text: 'Our audit and assurance services provide an independent assessment of financial information and reporting. We focus on reliability, transparency and identifying areas that may require management attention.' },
  'internal-audit': { title: 'Internal Audit', icon: 'fa-solid fa-shield-halved', text: 'Internal audit services assess processes, controls and risks across the organization. We identify control weaknesses and provide practical recommendations designed to strengthen operations and improve accountability.' },
  advisory: { title: 'Advisory', icon: 'fa-solid fa-lightbulb', text: 'Our advisory services provide management with practical financial and business insight. We help assess performance, risks, opportunities and areas where better financial information can support decision-making.' },
  compliance: { title: 'Compliance', icon: 'fa-solid fa-clipboard-check', text: 'We support businesses in meeting applicable statutory and regulatory requirements. Our approach emphasizes organized documentation, timely compliance and processes that help reduce avoidable compliance risks.' }
}

export default function ClientInteractions({ page, children }: { page: string; children: React.ReactNode }) {
  useEffect(() => {
    const menuButton = document.getElementById('menuButton')
    const mobileMenu = document.getElementById('mobileMenu')
    if (menuButton && mobileMenu) {
      const toggle = () => {
        mobileMenu.classList.toggle('hidden')
        const open = !mobileMenu.classList.contains('hidden')
        menuButton.setAttribute('aria-expanded', String(open))
        menuButton.classList.toggle('menu-open', open)
      }
      menuButton.addEventListener('click', toggle)
      const links = mobileMenu.querySelectorAll('a')
      const close = () => { mobileMenu.classList.add('hidden'); menuButton.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded','false') }
      links.forEach(l => l.addEventListener('click', close))
      return () => { menuButton.removeEventListener('click', toggle); links.forEach(l => l.removeEventListener('click', close)) }
    }
  }, [page])

  useEffect(() => {
    if (page !== 'services') return
    const modal = document.getElementById('serviceModal')
    const backdrop = document.getElementById('modalBackdrop')
    const closeModal = document.getElementById('closeModal')
    const title = document.getElementById('modalTitle')
    const text = document.getElementById('modalText')
    const icon = document.getElementById('modalIcon')
    if (!modal || !backdrop || !closeModal || !title || !text || !icon) return
    const open = (name: string) => {
      const service = services[name]
      if (!service) return
      title.textContent = service.title
      text.textContent = service.text
      icon.innerHTML = `<i class="${service.icon} text-xl"></i>`
      modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.classList.add('overflow-hidden')
    }
    const close = () => { modal.classList.add('hidden'); modal.classList.remove('flex'); document.body.classList.remove('overflow-hidden') }
    const handlers: Array<[Element, EventListener]> = []
    document.querySelectorAll('.service-button').forEach(button => { const h = ((e: Event) => { e.stopPropagation(); open((button as HTMLElement).dataset.service || '') }) as EventListener; button.addEventListener('click', h); handlers.push([button,h]) })
    document.querySelectorAll('.service-card').forEach(card => { const h = (() => open((card as HTMLElement).dataset.service || '')) as EventListener; card.addEventListener('click', h); handlers.push([card,h]) })
    closeModal.addEventListener('click', close); backdrop.addEventListener('click', close)
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) close() }
    document.addEventListener('keydown', esc)
    return () => { handlers.forEach(([el,h]) => el.removeEventListener('click',h)); closeModal.removeEventListener('click',close); backdrop.removeEventListener('click',close); document.removeEventListener('keydown',esc) }
  }, [page])

  useEffect(() => {
    if (page !== 'contact') return
    const form = document.getElementById('contactForm') as HTMLFormElement | null
    if (!form) return
    const handler = (event: Event) => {
      event.preventDefault()
      const get = (id:string) => document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
      const name=get('name'), email=get('email'), phone=get('phone'), service=get('service'), message=get('message')
      const nameError=document.getElementById('nameError'), emailError=document.getElementById('emailError'), messageError=document.getElementById('messageError'), success=document.getElementById('successMessage')
      let valid=true
      if (!name?.value.trim()) { nameError?.classList.remove('hidden'); valid=false } else nameError?.classList.add('hidden')
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { emailError?.classList.remove('hidden'); valid=false } else emailError?.classList.add('hidden')
      if (!message?.value.trim()) { messageError?.classList.remove('hidden'); valid=false } else messageError?.classList.add('hidden')
      if (!valid) return
      const subject=encodeURIComponent('Website Enquiry - MSA & Co.')
      const body=encodeURIComponent(`Dear MSA & Co.,\n\nName: ${name?.value.trim()}\nEmail: ${email?.value.trim()}\nPhone: ${phone?.value.trim() || 'Not provided'}\nService Required: ${service?.value || 'Not specified'}\n\nMessage:\n${message?.value.trim()}\n\nRegards,\n${name?.value.trim()}`)
      success?.classList.remove('hidden')
      setTimeout(() => { window.location.href=`mailto:msa.hbjk@gmail.com?subject=${subject}&body=${body}` },700)
    }
    form.addEventListener('submit',handler)
    return () => form.removeEventListener('submit',handler)
  }, [page])

  return <>{children}</>
}
