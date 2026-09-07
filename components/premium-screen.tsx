'use client'

import { Bell, Check, Lock, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '@/lib/app-context'
import { useI18n } from '@/lib/i18n/i18n-context'
import { cn } from '@/lib/utils'
import { PharmaciesPanel } from './pharmacies-panel'
import { RemindersPanel } from './reminders-panel'

type Tab = 'pharmacies' | 'reminders'

export function PremiumScreen() {
  const { t } = useI18n()
  const { isPremium, subscribe, unsubscribe } = useApp()
  const [tab, setTab] = useState<Tab>('pharmacies')

  if (!isPremium) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-foreground text-balance">{t.premiumTitle}</h1>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
              {t.premiumBadge}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {t.premiumSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-b from-secondary/60 to-card p-6 shadow-sm">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-7" aria-hidden="true" />
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-foreground">{t.premiumPrice}</span>
          </div>

          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{t.featurePharmacies}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Bell className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{t.featureReminders}</span>
            </li>
          </ul>

          <button
            type="button"
            onClick={subscribe}
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-4 text-base font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            {t.subscribeBtn}
          </button>
          <p className="text-center text-xs text-muted-foreground">{t.demoNote}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-xl font-bold text-foreground">{t.premiumTitle}</h1>
        <span className="flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
          <Check className="size-3.5" aria-hidden="true" />
          {t.subscriptionActive}
        </span>
      </div>

      <div className="flex gap-2 rounded-2xl bg-muted p-1.5">
        <button
          type="button"
          onClick={() => setTab('pharmacies')}
          className={cn(
            'flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition-colors',
            tab === 'pharmacies'
              ? 'bg-card text-primary shadow-sm'
              : 'text-muted-foreground',
          )}
        >
          <MapPin className="size-4" aria-hidden="true" />
          {t.pharmaciesTitle}
        </button>
        <button
          type="button"
          onClick={() => setTab('reminders')}
          className={cn(
            'flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition-colors',
            tab === 'reminders'
              ? 'bg-card text-primary shadow-sm'
              : 'text-muted-foreground',
          )}
        >
          <Bell className="size-4" aria-hidden="true" />
          {t.remindersTitle}
        </button>
      </div>

      {tab === 'pharmacies' ? <PharmaciesPanel /> : <RemindersPanel />}

      <button
        type="button"
        onClick={unsubscribe}
        className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary/50"
      >
        <Lock className="size-4" aria-hidden="true" />
        {t.cancelSub}
      </button>
    </div>
  )
}
