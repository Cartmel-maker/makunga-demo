import Link from 'next/link'
import { ServicesGrid } from '@/components/services-grid'

export default function ServicesPage() {
  return <main className="min-h-screen bg-background text-foreground"><div className="mx-auto max-w-7xl px-5 py-6 sm:px-8"><Link href="/" className="font-sans text-sm text-primary">← Back home</Link></div><ServicesGrid /></main>
}
