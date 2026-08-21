'use client'

import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'

export function QuickDispatchForm() {
  const [urgent, setUrgent] = useState(true)
  const [sent, setSent] = useState(false)

  return (
    <form
      className="h-fit rounded-2xl border border-white/10 bg-[#121418]/90 p-6 backdrop-blur-sm"
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-sans text-xs font-bold tracking-[0.16em] text-primary">THE CONTACT DESK</p>
          <h3 className="mt-2 font-sans text-2xl font-bold tracking-[-0.03em] text-foreground">Quick Dispatch Request</h3>
        </div>
        <div className="flex w-full rounded-lg border border-white/10 bg-zinc-900 p-1" role="group" aria-label="Request priority">
          <button type="button" onClick={() => setUrgent(true)} className={`flex-1 rounded-md px-3 py-2.5 font-sans text-sm font-semibold transition-colors ${urgent ? 'bg-primary text-primary-foreground' : 'text-zinc-400 hover:text-white'}`} aria-pressed={urgent}>Urgent</button>
          <button type="button" onClick={() => setUrgent(false)} className={`flex-1 rounded-md px-3 py-2.5 font-sans text-sm font-semibold transition-colors ${!urgent ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'}`} aria-pressed={!urgent}>Standard</button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <label className="flex flex-col gap-2 font-sans text-sm text-zinc-300">Your name<input required className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-3 text-foreground outline-none ring-primary/40 transition focus:ring-2 focus:ring-[#FF5500]" placeholder="Plant manager or contact" /></label>
        <label className="flex flex-col gap-2 font-sans text-sm text-zinc-300">How can we help?<textarea required className="min-h-24 rounded-lg border border-white/10 bg-zinc-900 px-3 py-3 text-foreground outline-none ring-primary/40 transition focus:ring-2 focus:ring-[#FF5500]" placeholder="Tell us about the request" /></label>
      </div>
      <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-sans text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">{sent ? 'Request received' : 'Send request'} {sent ? <ArrowUpRight className="size-4" /> : <Send className="size-4" />}</button>
    </form>
  )
}
