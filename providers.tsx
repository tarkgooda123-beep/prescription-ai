'use client'

import type { ReactNode } from 'react'
import { AppProvider } from '@/lib/app-context'
import { I18nProvider } from '@/lib/i18n/i18n-context'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <AppProvider>{children}</AppProvider>
    </I18nProvider>
  )
}
