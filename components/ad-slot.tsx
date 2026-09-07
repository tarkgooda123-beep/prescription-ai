'use client'

import { useI18n } from '@/lib/i18n/i18n-context'
import { cn } from '@/lib/utils'

// مكان مخصص لإعلانات Google AdMob مستقبلاً
export function AdSlot({ className, label }: { className?: string; label?: string }) {
  const { t } = useI18n()
  return (
    <div
      className={cn(
        'flex min-h-16 items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 px-4 py-3 text-center',
        className,
      )}
      aria-label={t.adLabel}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label ?? t.adLabel} · AdMob
      </span>
    </div>
  )
}
