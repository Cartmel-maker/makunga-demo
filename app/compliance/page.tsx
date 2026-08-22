'use client'

import Link from 'next/link'
import { ArrowUpRight, BadgeCheck, Download, ShieldCheck, Wrench } from 'lucide-react'
import { ComplianceTrigger } from '@/components/compliance-trigger'
import { SubpageHeader } from '@/components/subpage-header'

const oemBrands = ['DEMAG', 'Güralp', 'Planeta', 'Surelift', 'Stahl', 'Kone', 'Yale', 'Kito', 'Black Bear', 'Pro-Star']

const certifications = [
  { title: 'LME 327 Certificate of Competence', department: 'Department of Labour', badge: 'Official Registration', subtitle: 'Certified Lifting Machinery Entity registered with the Department of Labour', icon: BadgeCheck, specs: ['LME 327 registered', 'Qualified inspecting officers', 'Load test certificates issued after every test'], action: 'Request LME verification' },
  { title: 'Load Testing & Inspection', department: 'Statutory Compliance', badge: 'Statutory Compliance', subtitle: 'Visual inspection, load testing, and crack testing of load-bearing equipment', icon: Wrench, specs: ['OHSA-aligned load testing', 'Crack testing and condition assessments', 'Certificates with LMI reports and recommendations'], action: 'Request a site inspection' },
  { title: 'OHSA, MHSA & SABS Standards', department: 'Workplace Safety', badge: 'Workplace Safety', subtitle: 'Adherence to Department of Labour, mining, and SABS requirements', icon: ShieldCheck, specs: ['Occupational Health and Safety Act', 'Mine Health and Safety Act', 'Safety file compilation and record keeping'], action: 'Speak to compliance' },
]

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-foreground">
      <SubpageHeader
        title="Compliance without compromise."
        subtitle="Certified LME 327 company registered with the Department of Labour. Statutory load testing, visual inspections, crack testing, colour coding, and safety file compilation for lifting equipment."
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-16 lg:px-12">
        <section className="grid gap-5 lg:grid-cols-3">
          {certifications.map(({ title, department, badge, subtitle, icon: Icon, specs, action }) => (
            <article key={title} className="flex flex-col rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-sans text-[11px] font-bold text-primary">{badge}</span>
              </div>
              <p className="mt-7 font-sans text-xs font-bold tracking-[0.14em] text-zinc-500">{department}</p>
              <h2 className="mt-2 font-sans text-2xl font-bold leading-tight">{title}</h2>
              <p className="mt-4 font-sans text-sm leading-6 text-zinc-300">{subtitle}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                {specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 font-sans text-sm text-zinc-300">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
              <a href="mailto:annalise@makhunga.co.za" className="mt-auto flex items-center gap-2 pt-8 text-left font-sans text-sm font-bold text-primary hover:text-foreground">
                <Download className="size-4" />
                {action}
              </a>
            </article>
          ))}
        </section>
        <section className="mt-8 rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm" aria-labelledby="oem-brands-heading">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold tracking-[0.14em] text-primary">OEM COMPATIBILITY</p>
            <h2 id="oem-brands-heading" className="text-xl font-bold text-white">Supported equipment brands</h2>
            <p className="text-sm leading-6 text-zinc-300">Our inspection and compliance desk supports a broad range of lifting equipment manufacturers.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {oemBrands.map((brand) => (
              <span key={brand} className="rounded-full border border-white/10 bg-zinc-800/80 px-3 py-1.5 text-xs font-semibold text-zinc-200">
                {brand}
              </span>
            ))}
          </div>
        </section>
        <section id="support" className="mt-12 flex flex-col gap-5 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-sans text-xl font-bold sm:text-2xl">Need immediate statutory load testing for your plant?</p>
            <p className="mt-2 font-sans text-sm text-zinc-300">Request a site audit from the compliance desk.</p>
          </div>
          <Link href="/contact#support" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-sans text-sm font-bold text-primary-foreground">
            Request a site audit <ArrowUpRight className="size-4" />
          </Link>
        </section>
        <div className="mt-8">
          <ComplianceTrigger className="font-sans text-sm font-bold text-primary hover:text-foreground">Open compliance desk</ComplianceTrigger>
        </div>
      </div>
    </main>
  )
}
