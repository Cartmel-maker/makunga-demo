'use client'

import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { SubpageHeader } from '@/components/subpage-header'

const cases = [
  { title: '24-Hour Breakdown Support', type: 'Maintenance & repairs', problem: 'Unforeseen hoist or crane failures stop production and put lifting operations at risk if parts and technicians are not available immediately.', action: 'Committed staff remain on 24-hour standby, 365 days a year. The Richards Bay industrial-hub workshop keeps response times to a minimum, and critical spares can be sourced within 24 hours through the Johannesburg supply partnership.', metrics: ['24/7/365 standby', 'Industrial-hub workshop', 'Spares within 24 hours'], result: 'Preventative inspection plus rapid emergency repair reduces downtime and catches minor faults before they become major breakdowns.' },
  { title: 'Load Testing & Safety Files', type: 'Testing & compliance', problem: 'All load-bearing equipment must be tested and visually inspected to remain compliant with the Occupational Health and Safety Act and keep people safe on site.', action: 'Qualified inspecting officers complete an all-round inspection before the load test, then issue a pass or fail certificate with an LMI report, recommendations, and a dedicated safety file for the equipment.', metrics: ['LME 327 registered', 'Load test certificates', 'Safety file compilation'], result: 'Clients keep clear, concise records of chain blocks, lever hoists, electric hoists, winches, forklifts, truck-mount cranes, and other lifting assets.' },
  { title: 'Remanufacture & Fabrication', type: 'Engineering services', problem: 'Replacing a damaged hoist, crane, or structural component is often slower and more expensive than a properly executed rebuild or custom fabrication.', action: 'The team remanufactures hoists and cranes, fabricates girders and steel items to specification, and handles installation, modernisation, factory erection, and decommissioning.', metrics: ['15 years fabrication', 'Girder manufacturing', 'System modernisation'], result: 'A cost-effective alternative to full replacement, with installation and testing completed by technicians who have passed trade tests and field training.' },
]
const gallery = ['Crane gantry inspection', 'Workshop fabrication detail', 'Load testing preparation', 'Steel plant maintenance', 'Spares dispatch corridor', 'Finished structural install']

export default function CaseStudiesPage() {
  const [active, setActive] = useState<number | null>(null)
  const [zoom, setZoom] = useState<string | null>(null)
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-foreground">
      <SubpageHeader
        title="Work built for uptime."
        subtitle="Typical lifting, compliance, and fabrication work delivered from the Richards Bay workshop — aligned with the services published by Makhunga Crane and Engineering cc."
      />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
        <section className="flex flex-col gap-4">
          {cases.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl">
              <button type="button" onClick={() => setActive(active === index ? null : index)} className="flex w-full items-start justify-between gap-5 text-left">
                <span>
                  <span className="font-sans text-xs font-semibold tracking-[0.16em] text-primary">{item.type}</span>
                  <h2 className="mt-2 font-sans text-2xl font-bold">{item.title}</h2>
                </span>
                <ChevronDown className={`mt-1 size-5 shrink-0 text-zinc-400 transition-transform ${active === index ? 'rotate-180 text-primary' : ''}`} />
              </button>
              {active === index && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="font-sans text-xs font-bold tracking-[0.14em] text-primary">PROBLEM STATEMENT</p>
                      <p className="mt-2 font-sans leading-7 text-zinc-300">{item.problem}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold tracking-[0.14em] text-primary">ENGINEERING ACTION TAKEN</p>
                      <p className="mt-2 font-sans leading-7 text-zinc-300">{item.action}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 font-sans text-sm font-bold leading-5 text-primary">{metric}</span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="font-sans text-xs font-bold tracking-[0.14em] text-primary">RESULTS SUMMARY</p>
                    <p className="mt-2 font-sans leading-7 text-zinc-300">{item.result}</p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>
        <section className="mt-20">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.16em] text-primary">FIELD NOTES</p>
              <h2 className="mt-3 font-sans text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Inside the work</h2>
            </div>
            <p className="hidden font-sans text-sm text-zinc-500 sm:block">Click any frame to zoom</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((label) => (
              <button key={label} type="button" onClick={() => setZoom(label)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-950 to-primary/20 transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-5">
                  <span className="font-sans text-sm font-bold text-white">{label}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
        {zoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${zoom} preview`} onClick={() => setZoom(null)}>
            <div className="relative flex aspect-video w-full max-w-4xl items-end overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-zinc-800 via-zinc-950 to-primary/20 p-6" onClick={(event) => event.stopPropagation()}>
              <p className="font-sans text-xl font-bold text-white">{zoom}</p>
              <button type="button" onClick={() => setZoom(null)} aria-label="Close image preview" className="absolute right-4 top-4 rounded-lg bg-black/40 p-2 text-zinc-300 hover:text-white">
                <X className="size-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
