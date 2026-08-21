'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  ['How quickly can a technician be dispatched in Richards Bay?', 'Within 60 minutes for local industrial plants and port facilities.'],
  ['What documentation is issued after statutory load testing?', 'Complete DMR 18 compliant inspection certificates and updated site safety files.'],
  ['How do you source hard-to-find European crane parts?', 'Through our direct overnight spares corridor linking Johannesburg warehouses to Richards Bay.'],
  ['Do you offer emergency weekend support?', 'Yes, our standby engineering desk operates 24/7/365.'],
]

export function IndustrialFaq() {
  const [open, setOpen] = useState(0)
  return <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="faq-title"><div className="mx-auto max-w-4xl"><div className="max-w-2xl"><span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-primary">FIELD SUPPORT FAQ</span><h2 id="faq-title" className="mt-5 text-balance text-3xl font-bold tracking-[-0.045em] sm:text-5xl">Straight answers for critical uptime.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Technical guidance from the Makhunga engineering desk, built around the realities of industrial operations.</p></div><div className="mt-10 flex flex-col gap-3">{faqs.map(([question, answer], index) => <div key={question} className="rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-semibold text-foreground sm:px-6"><span>{question}</span><ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <div className="border-t border-zinc-800 px-5 pb-5 pt-4 text-sm leading-6 text-zinc-300 sm:px-6">{answer}</div>}</div>)}</div></div></section>
}
