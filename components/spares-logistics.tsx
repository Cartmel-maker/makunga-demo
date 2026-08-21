'use client'

import { ArrowUpRight, Check, Clock3, MapPin, Truck } from 'lucide-react'
import { useState } from 'react'

const brands = ['DEMAG', 'KONE', 'YALE', 'STAHL', 'GÜRALP', 'PLANETA', 'SURELIFT', 'KITO']
const parts = ['Rope Guides', 'Control Pendants', 'Brake Modules', 'Heavy Gearboxes']

export function SparesLogistics() {
  const [activeBrand, setActiveBrand] = useState('DEMAG')

  return (
    <section id="spares" className="relative isolate overflow-hidden border-t border-white/10 bg-background px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="spares-title">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/industrial-crane-hero.png')] bg-cover bg-center opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-[10px] font-bold tracking-[0.12em] text-primary-foreground"><Truck aria-hidden="true" className="size-3.5" />24-HOUR EMERGENCY DISPATCH</div>
            <h2 id="spares-title" className="mt-6 text-balance text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">Uninterrupted Supply: Johannesburg to Richards Bay Logistics</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">Our direct strategic supply link delivers critical crane and hoist spares within 24 hours, sourcing genuine parts for emergency breakdowns and routine servicing.</p>
            <a href="#support" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Request Urgent Spares Order <ArrowUpRight aria-hidden="true" className="size-4" /></a>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-zinc-950/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.4)] sm:p-7" aria-label="Johannesburg to Richards Bay supply corridor">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,0,0.12),transparent_30%),linear-gradient(135deg,rgba(39,39,42,0.4),transparent)]" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3 text-[10px] font-bold tracking-[0.14em] text-zinc-400"><span>KZN SPARES CORRIDOR</span><span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">ACTIVE ROUTE</span></div>
              <div className="relative my-8 h-28">
                <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-primary via-orange-300 to-primary" />
                <div className="absolute left-[12%] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(255,85,0,0.12),0_0_18px_rgba(255,85,0,0.9)]" />
                <div className="absolute right-[12%] top-1/2 size-3 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(255,85,0,0.12),0_0_18px_rgba(255,85,0,0.9)]" />
                <div className="absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-zinc-900 px-2.5 py-1 text-[9px] font-semibold text-primary">N3 / N2</div>
                <div className="absolute left-[12%] top-[68%] -translate-x-1/2 text-center"><MapPin className="mx-auto size-4 text-primary" /><p className="mt-1 text-[10px] font-bold text-foreground">Johannesburg</p><p className="text-[9px] text-zinc-500">Hub / Warehouse</p></div>
                <div className="absolute right-[12%] top-[68%] translate-x-1/2 text-center"><MapPin className="mx-auto size-4 text-primary" /><p className="mt-1 text-[10px] font-bold text-foreground">Richards Bay</p><p className="text-[9px] text-zinc-500">Alton North</p></div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-orange-500/20 bg-orange-500/10 p-3.5"><Truck className="size-5 shrink-0 text-primary" /><div><p className="text-xs font-bold text-foreground">Direct Overnight Supply Line</p><p className="mt-0.5 text-[11px] text-zinc-400">Transit indicator: &lt; 24 Hours</p></div></div>
            </div>
          </div>
        </div>
        <div className="mt-12"><div className="flex items-center gap-3 text-zinc-400"><Clock3 aria-hidden="true" className="size-4 text-primary" /><p className="text-[10px] font-semibold tracking-[0.18em]">COMPATIBLE WITH LEADING GLOBAL BRANDS</p></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{brands.map((brand) => <button type="button" key={brand} onClick={() => setActiveBrand(brand)} className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-semibold transition-all ${activeBrand === brand ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_18px_rgba(255,85,0,0.2)]' : 'border-zinc-700/50 bg-zinc-800/50 text-zinc-300 hover:border-primary hover:text-foreground'}`}>{brand}</button>)}</div><div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-5 backdrop-blur-sm"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold text-foreground">Genuine parts available for {activeBrand}</p><p className="mt-1 text-xs text-zinc-400">Prepared for rapid dispatch from our strategic corridor.</p></div><Check className="size-5 text-primary" /></div><div className="mt-4 flex flex-wrap gap-2">{parts.map((part) => <span key={part} className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300">{part}</span>)}</div></div></div>
      </div>
    </section>
  )
}
