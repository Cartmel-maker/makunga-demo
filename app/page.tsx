import { ArrowUpRight, ChevronRight, ShieldCheck, Truck } from 'lucide-react'

const stats = [
  { value: '28+', label: 'Yrs Combined Leadership' },
  { value: '15–20', label: 'Yrs Tech Experience' },
  { value: 'LME 327', label: 'Compliant' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-border pb-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Forge Engineering home">
            <span className="flex size-9 items-center justify-center border border-primary bg-primary text-primary-foreground">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </span>
            <span className="font-mono text-sm font-bold tracking-[0.18em] text-foreground">FORGE / ENG</span>
          </a>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
            Richards Bay · South Africa
          </span>
          <a
            href="#support"
            className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-foreground"
          >
            Contact desk <ArrowUpRight aria-hidden="true" className="ml-1 inline size-3" />
          </a>
        </header>

        <section id="top" className="relative flex flex-1 flex-col justify-center py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 font-mono text-[11rem] font-bold leading-none text-border/40 xl:block">
            24
          </div>
          <div className="relative max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 border border-primary px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              <span className="size-1.5 bg-primary" aria-hidden="true" />
              LME 327 Certified <span className="text-muted-foreground">•</span> Department of Labour Approved
            </div>
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
              Precision Engineering. <span className="text-primary">Family Reliability.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Owner-managed crane maintenance, statutory load testing, and custom fabrication in Richards Bay. We don&apos;t just take on clients—we extend our family values to your plant&apos;s uptime.
            </p>
            <div id="support" className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@forgeengineering.co.za"
                className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Request 24/7 Support <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 border border-primary px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Capabilities <ChevronRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-20 max-w-3xl border border-primary bg-card p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center gap-3 text-primary">
                <Truck aria-hidden="true" className="size-7" strokeWidth={1.5} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">Logistics / 24H</span>
              </div>
              <p className="text-sm leading-6 text-card-foreground">
                <span className="font-semibold text-foreground">24-Hour Spares Corridor:</span> Strategic supply line between Johannesburg and Richards Bay for DEMAG, Kone, Yale, Stahl, and major brands to eliminate downtime.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="grid border-t border-border py-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-baseline gap-3 py-3 sm:px-6 ${index > 0 ? 'border-border sm:border-l' : ''}`}>
              <span className="font-mono text-xl font-bold text-primary">{stat.value}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
