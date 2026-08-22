import Link from 'next/link'
import { ArrowUpRight, Award, Factory, ShieldCheck } from 'lucide-react'

const owners = [
  {
    name: 'Annalise Brown',
    role: 'Sole Owner & Managing Director',
    image: '/placeholder-user.jpg',
    highlight: '083 502 7655 · annalise@makhunga.co.za',
    copy: 'Annalise is the sole owner of Makhunga Crane and Engineering cc. She leads administration, client relationships, and the daily running of the family business.',
  },
  {
    name: 'Christopher Brown',
    role: 'General Manager',
    image: '/placeholder-user.jpg',
    highlight: '15–20 years technical field leadership',
    copy: 'Chris oversees technicians, work allocation, and hands-on crane servicing, inspections, and plant reliability across Richards Bay.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="font-sans text-sm text-primary hover:text-foreground">← Back home</Link>
        <p className="mt-16 font-sans text-xs font-bold tracking-[0.16em] text-primary">LEADERSHIP</p>
        <h1 className="mt-4 max-w-4xl text-balance font-sans text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Owner-managed. Family-led.</h1>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
          Established in 2009 and based in Richards Bay, Makhunga Crane and Engineering cc is owned by Annalise Brown and led in the field by Christopher Brown. Together they bring 28 years of combined hands-on experience in crane servicing, lifting machinery, inspections, and engineering solutions.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {owners.map((owner) => (
            <article key={owner.name} className="overflow-hidden rounded-2xl border border-primary/20 bg-zinc-900/70 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-primary/30 bg-zinc-950">
                <img src={owner.image} alt={`${owner.name} portrait`} className="size-full object-cover grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-zinc-950/80 px-3 py-1.5 font-sans text-xs font-semibold text-primary backdrop-blur">
                  <span className="size-1.5 rounded-full bg-primary" /> Family-managed
                </span>
              </div>
              <div className="flex flex-col gap-5 p-6 sm:p-8">
                <div>
                  <p className="font-sans text-xs font-semibold tracking-[0.16em] text-primary">{owner.role}</p>
                  <h2 className="mt-2 font-sans text-3xl font-bold tracking-[-0.04em]">{owner.name}</h2>
                  <p className="mt-3 font-sans leading-7 text-zinc-300">{owner.copy}</p>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                  <Award className="size-5 shrink-0 text-primary" />
                  <span className="font-sans text-sm font-semibold text-foreground">{owner.highlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
            <Factory className="size-5 text-primary" />
            <p className="mt-4 font-sans text-2xl font-bold">28</p>
            <p className="mt-1 font-sans text-sm text-zinc-400">Years combined experience</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
            <ShieldCheck className="size-5 text-primary" />
            <p className="mt-4 font-sans text-2xl font-bold">LME 327</p>
            <p className="mt-1 font-sans text-sm text-zinc-400">Department of Labour registered</p>
          </div>
          <Link href="/contact" className="group rounded-xl border border-primary/30 bg-primary/10 p-5 transition hover:-translate-y-1 hover:border-primary">
            <p className="font-sans text-xs font-semibold tracking-[0.16em] text-primary">START A CONVERSATION</p>
            <p className="mt-4 font-sans text-lg font-bold">Talk to the team <ArrowUpRight className="inline size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></p>
          </Link>
        </div>
      </div>
    </main>
  )
}
