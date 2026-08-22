'use client'

import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { ComplianceTrigger } from '@/components/compliance-trigger'

const explore = [
  ['Home', '/'],
  ['Leadership', '/about'],
  ['Services', '/services'],
  ['Certifications', '/compliance'],
  ['Case Studies & Gallery', '/case-studies'],
]

const capabilities = [
  ['Lifting Equipment Services', '/services'],
  ['Statutory Load Testing', '/compliance'],
  ['Custom Steel Fabrication', '/services'],
  ['24/7 Breakdown Dispatch', '/contact'],
]

export function FooterHub() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-4 pt-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/" className="flex items-center gap-3" aria-label="Makhunga Crane and Engineering home">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-5" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-sans text-sm font-bold tracking-[0.08em] text-foreground">MAKHUNGA</span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-primary">CRANE AND ENGINEERING CC</span>
            </span>
          </a>
          <p className="mt-5 font-sans text-xs font-bold tracking-[0.16em] text-primary">THE CONTACT DESK</p>
          <h2 className="mt-3 max-w-xs text-balance font-sans text-2xl font-bold tracking-[-0.045em] text-foreground">
            Keep your plant moving.
          </h2>
          <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-zinc-400">
            Owner-managed from Richards Bay since 2009. Reach Annalise or Chris for an urgent breakdown, compliance enquiry, or project conversation.
          </p>
        </div>
        <div>
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-zinc-500">EXPLORE</p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer navigation">
            {explore.map(([label, href]) => (
              <a key={href} href={href} className="font-sans text-sm text-zinc-300 transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-zinc-500">CAPABILITIES</p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer capabilities">
            {capabilities.map(([label, href]) => (
              <a key={label} href={href} className="font-sans text-sm text-zinc-300 transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-zinc-500">RICHARDS BAY</p>
          <div className="mt-4 flex items-start gap-3 text-zinc-300">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="font-sans text-sm leading-6">
              Unit 4 &amp; 5, 61 Ceramic Curve
              <br />
              Alton North, Richards Bay, 3900
            </span>
          </div>
          <p className="mt-3 pl-7 font-sans text-xs leading-5 text-zinc-500">
            Postal: P.O. Box 40380, Veldenvlei, Richards Bay, 3900
          </p>
          <a href="tel:+27357973136" className="mt-4 flex items-center gap-3 font-sans text-sm text-zinc-300 hover:text-white">
            <Phone className="size-4 shrink-0 text-primary" />
            035 797 3136
          </a>
          <p className="mt-2 pl-7 font-sans text-xs text-zinc-500">Fax: 035 797 3138</p>
          <a href="mailto:annalise@makhunga.co.za" className="mt-3 flex items-center gap-3 font-sans text-sm text-zinc-300 hover:text-white">
            <Mail className="size-4 shrink-0 text-primary" />
            annalise@makhunga.co.za
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-white/5 pt-5">
        <p className="font-sans text-xs text-zinc-500">
          © 2026 Makhunga Crane and Engineering cc. All rights reserved. |{' '}
          <ComplianceTrigger className="text-zinc-400 transition hover:text-primary">
            LME 327 Certified · Department of Labour Registered
          </ComplianceTrigger>
        </p>
      </div>
    </footer>
  )
}
