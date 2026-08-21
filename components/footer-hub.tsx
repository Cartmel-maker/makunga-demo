'use client'

import { MapPin } from 'lucide-react'
import { ComplianceTrigger } from '@/components/compliance-trigger'

export function FooterHub() {
  return (
    <footer id="support" className="border-t border-white/10 bg-[#0B0C0E] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div><p className="font-sans text-xs font-bold tracking-[0.16em] text-primary">THE CONTACT DESK</p><h2 className="mt-4 max-w-xl text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">Keep your plant moving.</h2><p className="mt-5 max-w-lg font-sans text-base leading-7 text-zinc-400">Reach our owner-managed team for an urgent breakdown, compliance enquiry, or project conversation.</p><div className="mt-8 flex items-start gap-3 text-zinc-300"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><span className="font-sans text-sm leading-6">Unit 4 &amp; 5, 61 Ceramic Curve<br />Alton North, Richards Bay</span></div></div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 font-sans text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Makhunga Crane &amp; Engineering</span><div className="flex items-center gap-4"><ComplianceTrigger className="text-zinc-300 transition hover:text-primary">LME 327 Certified · OHSA/SABS Compliant</ComplianceTrigger><a href="mailto:support@makhunga.co.za" className="text-zinc-300 hover:text-white">support@makhunga.co.za</a></div></div>
    </footer>
  )
}
