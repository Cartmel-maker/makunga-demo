import Link from 'next/link'

export default function CaseStudiesPage() {
  return <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8 lg:px-12"><div className="mx-auto max-w-4xl"><Link href="/" className="font-sans text-sm text-primary">← Back home</Link><p className="mt-16 font-sans text-xs font-bold tracking-[0.16em] text-primary">PROJECTS &amp; GALLERY</p><h1 className="mt-4 font-sans text-5xl font-bold tracking-[-0.05em] sm:text-7xl">Work built for uptime.</h1><p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">Explore selected lifting, steel fabrication, and maintenance projects delivered by the Makhunga team.</p></div></main>
}
