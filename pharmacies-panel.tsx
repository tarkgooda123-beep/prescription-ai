'use client'

import { MapPin, Phone, Search } from 'lucide-react'
import { useState } from 'react'
import { AdSlot } from '@/components/ad-slot'
import { useI18n } from '@/lib/i18n/i18n-context'
import { SAMPLE_PHARMACIES } from '@/lib/mock-data'

export function PharmaciesPanel() {
  const { t } = useI18n()
  const [med, setMed] = useState('')
  const [shown, setShown] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
        {t.pharmaciesSubtitle}
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setShown(true)
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-1 shadow-sm focus-within:border-primary">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            value={med}
            onChange={(e) => setMed(e.target.value)}
            placeholder={t.pharmacyMedPlaceholder}
            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-base font-bold text-primary-foreground"
        >
          <MapPin className="size-5" aria-hidden="true" />
          {t.findPharmacies}
        </button>
      </form>

      {shown && (
        <ul className="flex flex-col gap-2">
          {SAMPLE_PHARMACIES.map((p, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-foreground">{p.name}</span>
                  <span className="text-sm text-muted-foreground">{p.address}</span>
                  <span className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 font-semibold text-accent">
                      {t.inStock}
                    </span>
                    <span className="text-muted-foreground">
                      {p.distanceKm} km {t.distance}
                    </span>
                  </span>
                </div>
              </div>
              <a
                href={`tel:${p.phone}`}
                aria-label={`${t.callNow} ${p.name}`}
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                {t.callNow}
              </a>
            </li>
          ))}
        </ul>
      )}

      <AdSlot />
    </div>
  )
}
