import { ArrowUpRight, Clock3, Truck } from 'lucide-react'

const brands = ['DEMAG', 'KONE', 'YALE', 'STAHL', 'GÜRALP', 'PLANETA', 'SURELIFT', 'KITO']

export function SparesLogistics() {
  return (
    <section
      id="spares"
      className="relative isolate overflow-hidden border-t border-white/10 bg-background px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="spares-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/industrial-crane-hero.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-primary/30 bg-zinc-900/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 font-sans text-[10px] font-bold tracking-[0.12em] text-primary-foreground">
              <Truck aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
              24-HOUR EMERGENCY DISPATCH
            </div>
            <h2 id="spares-title" className="mt-6 text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">
              Uninterrupted Supply: Johannesburg to Richards Bay Logistics
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              To eliminate plant downtime, our direct strategic supply link delivers critical crane and hoist spares within 24 hours. From emergency breakdowns to routine servicing, we source genuine parts instantly.
            </p>
          </div>

          <a href="#support" className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:mb-1">
            Request Urgent Spares Order <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3 text-zinc-400">
            <Clock3 aria-hidden="true" className="size-4 text-primary" />
            <p className="font-sans text-[10px] font-semibold tracking-[0.18em]">COMPATIBLE WITH LEADING GLOBAL BRANDS</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {brands.map((brand) => (
              <div key={brand} className="flex min-h-12 items-center justify-center rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 font-sans text-sm font-semibold text-zinc-300 transition-colors hover:border-primary hover:text-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
