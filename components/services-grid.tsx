import { Check, FileCheck2, Truck, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Lifting Equipment Services',
    subtitle: 'Supply, Repair & Maintenance',
    icon: Wrench,
    bullets: [
      'Crane girder manufacturing & custom steelwork',
      'Hoist & crane remanufacturing and refurbishment',
      'Complete system erection, modernisation & decommissioning',
    ],
    link: 'Explore Equipment Services →',
  },
  {
    title: 'Testing, Inspection & Compliance',
    subtitle: 'LME 327 Accredited',
    icon: FileCheck2,
    bullets: [
      'Statutory load testing & visual inspections',
      'NDT crack testing & condition assessments',
      'Colour coding management & safety file compilation',
    ],
    link: 'View Compliance Standards →',
  },
  {
    title: 'Spares Logistics & Fabrication',
    subtitle: '24-Hour Corridor',
    icon: Truck,
    bullets: [
      '24-hr turnaround from Johannesburg supply link',
      'Official spares for DEMAG, Kone, Yale, Stahl, Güralp',
      'Custom security doors & factory steel fabrication',
    ],
    link: 'Order Spares & Parts →',
  },
]

export function ServicesGrid() {
  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden border-t border-white/10 bg-background px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      aria-labelledby="services-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('/industrial-crane-hero.png')] bg-cover bg-center opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/75" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-sans text-[10px] font-bold tracking-[0.16em] text-primary">
            OUR CAPABILITIES
          </span>
          <h2 id="services-title" className="mt-5 text-balance font-sans text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl">
            End-to-End Industrial Lifting Solutions
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            From statutory testing to 24/7 breakdown support, keeping South African industries moving.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, subtitle, icon: Icon, bullets, link }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
                </div>
                <span className="font-sans text-[10px] font-bold tracking-[0.14em] text-zinc-500">0{services.findIndex((service) => service.title === title) + 1}</span>
              </div>
              <h3 className="mt-7 font-sans text-xl font-bold tracking-[-0.03em] text-foreground">{title}</h3>
              <p className="mt-2 font-sans text-sm font-semibold text-primary">{subtitle}</p>
              <ul className="mt-7 flex flex-col gap-4">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 font-sans text-sm leading-6 text-zinc-300">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a href="#support" className="mt-auto pt-8 font-sans text-sm font-bold text-primary transition-colors hover:text-orange-300">
                {link}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
