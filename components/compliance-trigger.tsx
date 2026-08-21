'use client'

import { useCompliance } from '@/components/compliance-modal'
import type { ReactNode } from 'react'

export function ComplianceTrigger({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { open } = useCompliance()
  return <button type="button" onClick={open} className={className}>{children}</button>
}
