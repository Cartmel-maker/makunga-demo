'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FooterHub } from '@/components/footer-hub'
import { QuickDispatchForm } from '@/components/quick-dispatch-form'

const faqs = [
  ['How quickly can a technician be dispatched in Richards Bay?', 'Our workshop is in the hub of Richards Bay’s industrial area, so most clients are centrally located and response time is kept to a minimum. 24-hour standby covers breakdowns and emergency repairs.'],
  ['What documentation is issued after statutory load testing?', 'A load test certificate (pass or fail) is issued with an LMI report, recommendations, and a safety file for the tested equipment, in line with LME 327 and OHSA requirements.'],
  ['How do you source hard-to-find crane and hoist parts?', 'Through a Johannesburg supply partnership that can source and deliver critical spares within 24 hours for DEMAG, Güralp, Planeta, Surelift, Stahl, Kone, Yale, Kito, and other brands.'],
  ['Do you offer emergency weekend support?', 'Yes. Staff are on 24-hour standby, 7 days a week, 365 days a year for unforeseen breakdowns.'],
]

export function FAQAccordion() {
  const [open, setOpen] = useState(0)
  return (
    <div className="flex flex-col gap-2">
      {faqs.map(([question, answer], index) => (
        <div key={question} className="rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex min-h-14 w-full items-center justify-between gap-6 px-4 py-3 text-left font-sans text-sm font-semibold text-foreground sm:px-5"
          >
            <span>{question}</span>
            <ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${open === index ? 'rotate-180' : ''}`} />
          </button>
          {open === index && (
            <div className="border-t border-zinc-800 px-4 pb-4 pt-3 font-sans text-sm leading-6 text-zinc-300 sm:px-5">
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function IndustrialFaq() {
  return (
    <section id="support" className="border-t border-white/5 bg-[#0B0C0E] py-12 md:py-16" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="rounded-full border border-[#FF5500]/20 bg-[#FF5500]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#FF5500] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 id="faq-title" className="mt-3 mb-2 text-3xl font-bold text-white">
              Common Technical &amp; Operations Inquiries
            </h2>
            <p className="text-sm text-zinc-400">
              Clear answers regarding field dispatch, DMR 18 load testing, and spare parts availability.
            </p>
          </div>
          <FAQAccordion />
        </div>
        <div className="lg:col-span-5">
          <QuickDispatchForm />
        </div>
      </div>
      <FooterHub />
    </section>
  )
}
