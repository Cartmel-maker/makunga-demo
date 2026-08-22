'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [priority, setPriority] = useState<'urgent' | 'standard'>('urgent')
  const [sent, setSent] = useState(false)
  return (
    <main className="bg-background px-4 py-8 text-foreground sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-foreground">
          <ArrowLeft className="size-4" /> Back home
        </Link>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.16em] text-primary">THE CONTACT DESK</p>
            <h1 className="mt-4 text-balance font-sans text-5xl font-bold tracking-[-0.06em] sm:text-6xl">Keep your plant moving.</h1>
            <p className="mt-6 font-sans text-lg leading-8 text-muted-foreground">
              The workshop sits in the hub of Richards Bay’s industrial area, so response time is kept to a minimum. Call the administration office or email Annalise directly.
            </p>
            <div className="mt-8 flex flex-col gap-4 font-sans text-sm leading-6 text-zinc-300">
              <a href="tel:+27357973136" className="inline-flex items-start gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Workshop &amp; Administration: 035 797 3136 / 7<br />Fax: 035 797 3138</span>
              </a>
              <a href="tel:+27835027655" className="inline-flex items-center gap-3 hover:text-white">
                <Phone className="size-4 shrink-0 text-primary" />
                Annalise Brown: 083 502 7655
              </a>
              <a href="mailto:annalise@makhunga.co.za" className="inline-flex items-center gap-3 hover:text-white">
                <Mail className="size-4 shrink-0 text-primary" />
                annalise@makhunga.co.za
              </a>
              <p className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Unit 4 &amp; 5, 61 Ceramic Curve
                  <br />
                  Alton North, Richards Bay, 3900
                  <br />
                  Postal: P.O. Box 40380, Veldenvlei, Richards Bay, 3900
                </span>
              </p>
            </div>
          </div>
          {sent ? (
            <div className="rounded-2xl border border-primary/30 bg-zinc-900/80 p-8 backdrop-blur-xl">
              <CheckCircle2 className="size-10 text-primary" />
              <h2 className="mt-6 font-sans text-3xl font-bold">Request received.</h2>
              <p className="mt-3 font-sans leading-7 text-zinc-300">Our dispatch desk has your request. We will contact you with the next step.</p>
              <Link href="/" className="mt-8 inline-flex rounded-lg bg-primary px-4 py-3 font-sans text-sm font-bold text-primary-foreground">Return home</Link>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
              className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div>
                <p className="font-sans text-sm font-semibold text-foreground">Priority</p>
                <div className="mt-3 grid w-full grid-cols-2 gap-2 rounded-xl bg-black/40 p-1">
                  <button type="button" onClick={() => setPriority('urgent')} className={`rounded-lg px-3 py-2.5 font-sans text-sm font-bold transition ${priority === 'urgent' ? 'bg-primary text-primary-foreground' : 'text-zinc-400 hover:text-white'}`}>Urgent</button>
                  <button type="button" onClick={() => setPriority('standard')} className={`rounded-lg px-3 py-2.5 font-sans text-sm font-bold transition ${priority === 'standard' ? 'bg-primary text-primary-foreground' : 'text-zinc-400 hover:text-white'}`}>Standard</button>
                </div>
              </div>
              <label className="mt-6 flex flex-col gap-2 font-sans text-sm text-zinc-300">Your name<input required className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[#FF5500]" placeholder="Plant manager or contact" /></label>
              <label className="mt-4 flex flex-col gap-2 font-sans text-sm text-zinc-300">Email address<input required type="email" className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[#FF5500]" placeholder="you@company.co.za" /></label>
              <label className="mt-4 flex flex-col gap-2 font-sans text-sm text-zinc-300">How can we help?<textarea required className="min-h-32 rounded-lg border border-white/10 bg-zinc-950 px-3 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-[#FF5500]" placeholder="Tell us about the request" /></label>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-sans text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5">Send {priority === 'urgent' ? 'urgent' : 'standard'} request <Send className="size-4" /></button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
