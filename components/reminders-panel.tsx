'use client'

import { Bell, Clock, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useApp, type Reminder } from '@/lib/app-context'
import { useI18n } from '@/lib/i18n/i18n-context'

export function RemindersPanel() {
  const { t } = useI18n()
  const { reminders, addReminder, removeReminder } = useApp()
  const [medName, setMedName] = useState('')
  const [time, setTime] = useState('08:00')
  const [frequency, setFrequency] = useState<Reminder['frequency']>('daily')

  const freqLabel: Record<Reminder['frequency'], string> = {
    daily: t.freqDaily,
    twice: t.freqTwice,
    weekly: t.freqWeekly,
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!medName.trim()) return
    addReminder({ medName: medName.trim(), time, frequency })
    setMedName('')
    setTime('08:00')
    setFrequency('daily')
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
        {t.remindersSubtitle}
      </p>

      <form onSubmit={submit} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-foreground">{t.medName}</span>
          <input
            value={medName}
            onChange={(e) => setMedName(e.target.value)}
            className="rounded-xl border border-input bg-background px-3 py-3 text-base outline-none focus:border-primary"
          />
        </label>
        <div className="flex gap-3">
          <label className="flex flex-1 flex-col gap-1.5">
            <span className="text-sm font-semibold text-foreground">{t.time}</span>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="rounded-xl border border-input bg-background px-3 py-3 text-base outline-none focus:border-primary"
            />
          </label>
          <label className="flex flex-1 flex-col gap-1.5">
            <span className="text-sm font-semibold text-foreground">{t.frequency}</span>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Reminder['frequency'])}
              className="rounded-xl border border-input bg-background px-3 py-3 text-base outline-none focus:border-primary"
            >
              <option value="daily">{t.freqDaily}</option>
              <option value="twice">{t.freqTwice}</option>
              <option value="weekly">{t.freqWeekly}</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-bold text-primary-foreground"
        >
          <Plus className="size-5" aria-hidden="true" />
          {t.saveReminder}
        </button>
      </form>

      {reminders.length === 0 ? (
        <p className="rounded-xl bg-secondary/40 px-4 py-6 text-center text-sm text-muted-foreground">
          {t.noReminders}
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {reminders.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Bell className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">{r.medName}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {r.time} · {freqLabel[r.frequency]}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeReminder(r.id)}
                aria-label={t.deleteLabel}
                className="flex size-10 items-center justify-center rounded-xl text-destructive transition-colors hover:bg-destructive/10"
              >
                <Trash2 className="size-5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
