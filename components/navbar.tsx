'use client'

import { Menu, Phone, ShieldCheck, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Compliance', '/compliance'],
  ['Meet the Owners', '/about'],
  ['Case Studies', '/case-studies'],
] as const

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

function navLinkClass(active: boolean) {
  return active
    ? 'text-[#FF5500] font-semibold border-b-2 border-[#FF5500] pb-1'
    : 'text-zinc-300 transition-all duration-300 hover:text-white'
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0C0E]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Makhunga Crane and Engineering home">
          <span className="flex size-10 items-center justify-center rounded-lg bg-[#FF5500] text-white">
            <ShieldCheck className="size-5" />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="font-sans text-sm font-bold tracking-[0.08em] text-white">MAKHUNGA</span>
            <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-[#FF5500]">CRANE &amp; ENGINEERING</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => {
            const active = isActive(pathname, href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn('font-sans text-sm whitespace-nowrap', navLinkClass(active))}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:0835027655"
            className="hidden rounded-lg bg-[#FF5500] px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#e04b00] hover:shadow-[0_0_20px_rgba(255,85,0,0.3)] md:inline-flex"
          >
            24/7 Breakdown Dispatch
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-white/15 bg-zinc-900/80 p-2.5 text-white transition-all duration-300 hover:border-[#FF5500] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/70 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={cn(
          'fixed inset-x-0 top-16 z-50 flex max-h-[calc(100dvh-4rem)] w-full flex-col overflow-y-auto border-b border-white/10 bg-[#0B0C0E]/95 px-5 py-6 shadow-2xl backdrop-blur-md transition-transform duration-300 md:hidden',
          open ? 'translate-y-0 opacity-100' : '-translate-y-4 pointer-events-none opacity-0',
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-[#FF5500]">NAVIGATE</p>
          <button type="button" onClick={() => setOpen(false)} className="rounded-lg p-2 text-zinc-300 hover:text-white" aria-label="Close navigation menu">
            <X className="size-5" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {links.map(([label, href]) => {
            const active = isActive(pathname, href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-3 py-3 font-sans text-base',
                  active ? 'bg-[#FF5500]/10 text-[#FF5500] font-semibold' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors',
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
          <a href="tel:0835027655" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#FF5500]/40 bg-[#FF5500]/10 px-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#FF5500] hover:bg-[#FF5500]/20">
            <Phone className="size-4 text-[#FF5500]" />
            Emergency phone dispatch
          </a>
          <a
            href="#support"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#FF5500] px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#e04b00] hover:shadow-[0_0_20px_rgba(255,85,0,0.3)]"
          >
            24/7 Breakdown Dispatch
          </a>
        </div>
      </nav>
    </>
  )
}
