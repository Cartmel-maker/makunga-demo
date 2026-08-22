'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'

const ComplianceContext = createContext<{ open: () => void }>({ open: () => undefined })

export function ComplianceProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ComplianceContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="compliance-dialog-title">
          <div className="w-full max-w-lg rounded-2xl border border-primary/30 bg-zinc-950 p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.16em] text-primary">COMPLIANCE DESK</p>
                <h2 id="compliance-dialog-title" className="mt-2 font-sans text-2xl font-bold text-foreground">LME 327 certified operations</h2>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white" aria-label="Close compliance details">
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-5 font-sans text-sm leading-6 text-zinc-300">Makhunga Crane and Engineering cc is a certified LME 327 company registered with the Department of Labour. We adhere to the OHSA, MHSA, SABS, and all requirements set out by the Department of Labour for statutory load testing, visual inspections, and safety files.</p>
            <a href="mailto:annalise@makhunga.co.za" className="mt-6 inline-flex rounded-lg bg-primary px-4 py-3 font-sans text-sm font-bold text-primary-foreground">Speak to compliance</a>
          </div>
        </div>
      ) : null}
    </ComplianceContext.Provider>
  )
}

export function useCompliance() {
  return useContext(ComplianceContext)
}
