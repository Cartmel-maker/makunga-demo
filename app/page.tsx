import { ArrowUpRight, ChevronRight, Menu, ShieldCheck, Truck, X } from 'lucide-react'
import { PhilosophyGrid } from '@/components/philosophy-grid'
import { ServicesGrid } from '@/components/services-grid'

const stats = [
  { value: '28+', label: 'Yrs Combined Leadership' },
  { value: '15–20', label: 'Yrs Tech Experience' },
  { value: 'LME 327', label: 'Compliant' },
]

const navItems = ['About Us', 'Meet the Owners', 'Services', 'Certifications', 'Projects', 'Gallery']

function NavigationLinks() {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
          className="font-sans text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          {item}
        </a>
      ))}
    </>
  )
}

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[url('/industrial-crane-hero.png')] bg-cover bg-center" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,85,0,0.09),transparent_30%)]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Makhunga Crane and Engineering home">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_28px_rgba(255,85,0,0.12)]">
              <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-sans text-sm font-bold tracking-[0.08em] text-foreground">MAKHUNGA</span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-primary">CRANE &amp; ENGINEERING</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
            <NavigationLinks />
          </nav>

          <div className="flex items-center gap-3">
            <a href="#support" className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">
              Contact Desk <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <details className="relative xl:hidden">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 text-white [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden="true" className="size-5 [[open]_&]:hidden" />
                <X aria-hidden="true" className="hidden size-5 [[open]_&]:block" />
                <span className="sr-only">Toggle navigation menu</span>
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 z-10 flex w-56 flex-col gap-1 rounded-xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl">
                <NavigationLinks />
                <a href="#support" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-sans text-sm font-bold text-primary-foreground">Contact Desk <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              </nav>
            </details>
          </div>
        </header>

        <section className="relative flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24">
          <div className="relative max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-zinc-800/60 px-3.5 py-2 font-sans text-[10px] font-semibold tracking-[0.1em] text-primary backdrop-blur-sm">
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

          <div className="mt-16 max-w-3xl rounded-xl border border-primary/30 bg-zinc-900/95 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] sm:mt-20">
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

        <section id="services" className="grid border-t border-white/10 py-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-baseline gap-3 py-3 sm:px-6 ${index > 0 ? 'border-white/10 sm:border-l' : ''}`}>
              <span className="font-sans text-xl font-bold tracking-[-0.04em] text-primary">{stat.value}</span>
              <span className="font-sans text-xs font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </section>
      </div>
      <PhilosophyGrid />
      <ServicesGrid />
    </main>
  )
}
