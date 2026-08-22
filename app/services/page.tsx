import Link from 'next/link'
import { ArrowUpRight, Check, FileCheck2, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { SubpageHeader } from '@/components/subpage-header'

const services = [
  { number: '01', title: 'Lifting Equipment Services', icon: Wrench, summary: 'Supply, repair, servicing, and maintenance of all makes of lifting equipment.', bullets: ['Manufacturing and fabrication of crane girders and custom steel components', 'Hoist and crane remanufacturing and refurbishment', 'Installation, erection, decommissioning, and modernisation of lifting systems'] },
  { number: '02', title: 'Testing, Inspection & Compliance', icon: FileCheck2, summary: 'Statutory load testing and visual inspections by LME 327 registered professionals.', bullets: ['Crack testing and condition assessments', 'Colour coding and colour chart management', 'Load test certificates, inspection reports, and safety file compilation'] },
  { number: '03', title: 'Additional Engineering Services', icon: ShieldCheck, summary: 'Practical engineering support around the lifting operation.', bullets: ['Rigging and lifting accessories', 'Generator repair and servicing', 'Fabrication of steel items to specification, plus factory erection and decommissioning'] },
  { number: '04', title: '24/7 Breakdown & Field Dispatch', icon: Truck, summary: 'Preventative maintenance and 24-hour standby for emergency repairs.', bullets: ['Workshop in the Richards Bay industrial hub for minimum response time', 'Emergency crane and hoist fault finding, 24/7/365', 'Critical spares sourced within 24 hours via the Johannesburg supply partnership'] },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-foreground">
      <SubpageHeader
        title={<>Capability built for <span className="text-primary">critical uptime.</span></>}
        subtitle="From lifting equipment and statutory inspections to custom fabrication and 24/7 breakdown response, Makhunga keeps industrial operations moving."
      />
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map(({ number, title, icon: Icon, summary, bullets }) => (
              <article key={number} className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/85 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold tracking-[0.16em] text-zinc-600">{number}</span>
                </div>
                <h2 className="mt-8 text-2xl font-bold tracking-[-0.04em]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{summary}</p>
                <ul className="mt-7 flex flex-col gap-3">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-zinc-300">
                      <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link href="/#support" className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                  Request Service Quote <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
