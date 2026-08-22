'use client'

import { ArrowUpRight, Menu, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['Home', '/'],
  ['Leadership', '/about'],
  ['Services', '/services'],
  ['Certifications', '/compliance'],
  ['Case Studies & Gallery', '/case-studies'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-20 flex items-center justify-between border-b border-white/10 pb-5">
      <a href="/" className="flex items-center gap-3" aria-label="Makhunga Crane and Engineering home">
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ShieldCheck className="size-5" /></span>
        <span className="flex flex-col gap-0.5"><span className="font-sans text-sm font-bold tracking-[0.08em] text-foreground">MAKHUNGA</span><span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-primary">CRANE &amp; ENGINEERING</span></span>
      </a>
      <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} className="font-sans text-sm text-zinc-400 transition-colors hover:text-white">{label}</a>)}
      </nav>
      <div className="flex items-center gap-3">
        <a href="#support" className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-bold text-primary-foreground md:inline-flex">Contact Desk <ArrowUpRight className="size-4" /></a>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 bg-zinc-900/80 p-3 text-white md:hidden" aria-expanded={open} aria-label="Toggle navigation menu">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      {open ? <nav className="absolute inset-x-0 top-14 flex flex-col gap-1 rounded-xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-sans text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white">{label}</a>)}<a href="#support" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-bold text-primary-foreground">Contact Desk <ArrowUpRight className="size-4" /></a></nav> : null}
    </header>
  )
}
