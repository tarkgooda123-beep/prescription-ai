'use client'

import { Pill } from 'lucide-react'
import { useI18n } from '@/lib/i18n/i18n-context'
import { LanguageSelector } from './language-selector'

export function AppHeader() {
  const { t } = useI18n()
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Pill className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-foreground">{t.appName}</span>
            <span className="text-[11px] text-muted-foreground">{t.poweredByAI}</span>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </header>
  )
}
