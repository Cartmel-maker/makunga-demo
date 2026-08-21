'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { QuickDispatchForm } from '@/components/quick-dispatch-form'

const faqs = [
  ['How quickly can a technician be dispatched in Richards Bay?', 'Within 60 minutes for local industrial plants and port facilities.'],
  ['What documentation is issued after statutory load testing?', 'Complete DMR 18 compliant inspection certificates and updated site safety files.'],
  ['How do you source hard-to-find European crane parts?', 'Through our direct overnight spares corridor linking Johannesburg warehouses to Richards Bay.'],
  ['Do you offer emergency weekend support?', 'Yes, our standby engineering desk operates 24/7/365.'],
]

export function IndustrialFaq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="border-t border-white/10 bg-[#0B0C0E] px-4 py-12 sm:py-16" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-sans text-[10px] font-bold tracking-[0.16em] text-primary">FREQUENTLY ASKED QUESTIONS</span>
          <h2 id="faq-title" className="mt-4 mb-6 text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-white">Common Technical &amp; Operations Inquiries</h2>
          <div className="flex flex-col gap-2">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex min-h-14 w-full items-center justify-between gap-6 px-4 py-3 text-left font-sans text-sm font-semibold text-foreground sm:px-5">
                  <span>{question}</span><ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${open === index ? 'rotate-180' : ''}`} />
                </button>
                {open === index && <div className="border-t border-zinc-800 px-4 pb-4 pt-3 font-sans text-sm leading-6 text-zinc-300 sm:px-5">{answer}</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5"><QuickDispatchForm /></div>
      </div>
    </section>
  )
}
