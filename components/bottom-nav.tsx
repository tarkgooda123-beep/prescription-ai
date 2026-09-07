'use client'

import { FileText, Search, Sparkles, User, type LucideIcon } from 'lucide-react'
import { useI18n } from '@/lib/i18n/i18n-context'
import { cn } from '@/lib/utils'
import type { Screen } from '@/lib/screens'

const ITEMS: { id: Screen; icon: LucideIcon; key: 'navPrescription' | 'navSearch' | 'navPremium' | 'navAccount' }[] = [
  { id: 'prescription', icon: FileText, key: 'navPrescription' },
  { id: 'search', icon: Search, key: 'navSearch' },
  { id: 'premium', icon: Sparkles, key: 'navPremium' },
  { id: 'account', icon: User, key: 'navAccount' },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Screen
  onChange: (s: Screen) => void
}) {
  const { t } = useI18n()
  return (
    <nav
      aria-label={t.appName}
      className="sticky bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex w-full flex-col items-center gap-1 rounded-xl py-2.5 text-xs font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex size-10 items-center justify-center rounded-full transition-colors',
                    isActive && 'bg-secondary',
                  )}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                {t[item.key]}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
