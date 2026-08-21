'use client'

import { useState } from 'react'
import { ArrowUpRight, MapPin, Send } from 'lucide-react'

export function FooterHub() {
  const [urgent, setUrgent] = useState(true)
  const [sent, setSent] = useState(false)
  return (
    <footer id="support" className="border-t border-white/10 bg-[#0B0C0E] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div><p className="font-sans text-xs font-bold tracking-[0.16em] text-primary">THE CONTACT DESK</p><h2 className="mt-4 max-w-xl text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">Keep your plant moving.</h2><p className="mt-5 max-w-lg font-sans text-base leading-7 text-zinc-400">Reach our owner-managed team for an urgent breakdown, compliance enquiry, or project conversation.</p><div className="mt-8 flex items-start gap-3 text-zinc-300"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><span className="font-sans text-sm leading-6">Unit 4 &amp; 5, 61 Ceramic Curve<br />Alton North, Richards Bay</span></div></div>
        <form className="rounded-2xl border border-white/10 bg-[#121418]/80 p-6 backdrop-blur-sm" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="flex items-center justify-between gap-4"><h3 className="font-sans text-lg font-bold text-foreground">Quick Dispatch Request</h3><button type="button" onClick={() => setUrgent(!urgent)} className={`rounded-full border px-3 py-1.5 font-sans text-xs font-semibold transition-colors ${urgent ? 'border-primary bg-primary/15 text-primary' : 'border-zinc-700 text-zinc-400'}`} aria-pressed={urgent}>{urgent ? 'Urgent' : 'Standard'}</button></div><label className="mt-6 flex flex-col gap-2 font-sans text-sm text-zinc-300">Your name<input required className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-3 text-foreground outline-none ring-primary/40 focus:ring-2" placeholder="Plant manager or contact" /></label><label className="mt-4 flex flex-col gap-2 font-sans text-sm text-zinc-300">How can we help?<textarea required className="min-h-24 rounded-lg border border-white/10 bg-zinc-900 px-3 py-3 text-foreground outline-none ring-primary/40 focus:ring-2" placeholder="Tell us about the request" /></label><button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 font-sans text-sm font-bold text-primary-foreground">{sent ? 'Request received' : 'Send request'} {sent ? <ArrowUpRight className="size-4" /> : <Send className="size-4" />}</button></form>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 font-sans text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Makhunga Crane &amp; Engineering</span><a href="mailto:support@makhunga.co.za" className="text-zinc-300 hover:text-white">support@makhunga.co.za</a></div>
    </footer>
  )
}
