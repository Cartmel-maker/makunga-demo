import { Activity, HeartHandshake, ShieldCheck, Users } from 'lucide-react'

const philosophyCards = [
  {
    title: 'Our Mission',
    description:
      'To provide professional, compliant, and cost-effective crane and lifting equipment services while continuously exceeding statutory safety requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Our Purpose',
    description:
      'To keep people, plants, and production safe by delivering dependable lifting solutions that meet the highest standards of safety and quality.',
    icon: Activity,
  },
  {
    title: 'Our Values',
    description:
      'Honest, transparent service delivery, professional accountability, and high standards of workmanship across every project.',
    icon: HeartHandshake,
  },
  {
    title: 'Owner-Managed Trust',
    description:
      "Led directly by Annalise and Chris Brown with 28 years combined experience. You aren't just a client account; you are part of our extended family.",
    icon: Users,
  },
]

export function PhilosophyGrid() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="philosophy-title">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/industrial-crane-hero.png')] bg-cover bg-center" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-sans text-[10px] font-bold tracking-[0.16em] text-primary">
            OUR CORE PHILOSOPHY
          </span>
          <h2 id="philosophy-title" className="mt-5 text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">
            Built on Integrity. Driven by Family Values.
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Keeping people, plants, and production safe across South Africa since 2009.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <Icon aria-hidden="true" className="size-7 text-primary" strokeWidth={1.7} />
              <h3 className="mt-8 font-sans text-lg font-bold tracking-[-0.025em] text-foreground">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-6 text-zinc-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
