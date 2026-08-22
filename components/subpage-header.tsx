import Link from 'next/link'
import type { ReactNode } from 'react'

type SubpageHeaderProps = {
  title: ReactNode
  subtitle: string
}

export function SubpageHeader({ title, subtitle }: SubpageHeaderProps) {
  return (
    <header className="border-b border-white/5 bg-[#0B0C0E] py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <Link href="/" className="text-sm text-primary transition-colors hover:text-orange-300">
          ← Back home
        </Link>
        <div className="mt-8 h-px w-12 bg-[#FF5500]/70" aria-hidden="true" />
        <h1 className="mt-6 text-4xl font-bold text-white">{title}</h1>
        <p className="mt-2 max-w-2xl text-base text-zinc-400">{subtitle}</p>
      </div>
    </header>
  )
}
