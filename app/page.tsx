import { ArrowUpRight, ChevronRight, ShieldCheck, Truck } from 'lucide-react'

const stats = [
  { value: '28+', label: 'Yrs Combined Leadership' },
  { value: '15–20', label: 'Yrs Tech Experience' },
  { value: 'LME 327', label: 'Compliant' },
]

const navItems = ['Services', 'Compliance', 'Spares', 'About Us']

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-border/70 pb-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Makhunga Crane and Engineering home">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_28px_rgba(255,85,0,0.12)]">
              <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-sans text-sm font-bold tracking-[0.08em] text-foreground">MAKHUNGA</span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-primary">CRANE &amp; ENGINEERING</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>

          <a href="#support" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Contact Desk <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </header>

        <section id="top" className="relative flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 font-sans text-[13rem] font-bold leading-none tracking-[-0.12em] text-white/[0.025] xl:block">
            24
          </div>
          <div className="relative max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-zinc-800/50 px-3.5 py-2 font-sans text-[10px] font-semibold tracking-[0.1em] text-primary">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,85,0,0.8)]" aria-hidden="true" />
              LME 327 Certified <span className="text-muted-foreground">•</span> Dept of Labour Approved
            </div>
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-[6.5rem]">
              Precision Engineering. <span className="text-primary">Family Reliability.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty font-sans text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Owner-managed crane maintenance, statutory load testing, and custom fabrication in Richards Bay. We don&apos;t just take on clients—we extend our family values to your plant&apos;s uptime.
            </p>
            <div id="support" className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:support@makhunga.co.za" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 font-sans text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Request 24/7 Support <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/70 bg-zinc-800 px-5 py-3.5 font-sans text-sm font-semibold text-foreground transition-colors hover:bg-zinc-700">
                View Capabilities <ChevronRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 max-w-3xl rounded-xl border border-primary/30 bg-zinc-900 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:mt-20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center gap-3 text-primary">
                <Truck aria-hidden="true" className="size-7" strokeWidth={1.7} />
                <span className="font-sans text-xs font-bold tracking-[0.08em]">24-HOUR SPARES</span>
              </div>
              <p className="font-sans text-sm leading-6 text-card-foreground">
                <span className="font-semibold text-foreground">24-Hour Spares Corridor:</span> Strategic supply line between Johannesburg and Richards Bay for DEMAG, Kone, Yale, Stahl, and major brands to eliminate downtime.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="grid border-t border-border/70 py-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-baseline gap-3 py-3 sm:px-6 ${index > 0 ? 'border-border/70 sm:border-l' : ''}`}>
              <span className="font-sans text-xl font-bold tracking-[-0.04em] text-primary">{stat.value}</span>
              <span className="font-sans text-xs font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
