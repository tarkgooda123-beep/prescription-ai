'use client'

import { Check, ChevronDown, Globe, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '@/lib/i18n/languages'
import { useI18n } from '@/lib/i18n/i18n-context'
import { cn } from '@/lib/utils'

export function LanguageSelector() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find((l) => l.code === lang)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const filtered = LANGUAGES.filter((l) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      l.name.toLowerCase().includes(q) ||
      l.native.toLowerCase().includes(q) ||
      l.code.includes(q)
    )
  })

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.languageLabel}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
      >
        <Globe className="size-4 text-primary" aria-hidden="true" />
        <span className="max-w-24 truncate">{current?.native ?? 'العربية'}</span>
        <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute end-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-popover shadow-xl">
          <div className="flex items-center gap-2 border-b border-border p-2">
            <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.languageLabel}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <ul className="max-h-72 overflow-y-auto py-1" role="listbox">
            {filtered.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  onClick={() => {
                    setLang(l.code)
                    setOpen(false)
                    setQuery('')
                  }}
                  className={cn(
                    'flex w-full items-center justify-between px-4 py-2.5 text-start text-sm transition-colors hover:bg-secondary',
                    l.code === lang && 'bg-secondary/60 font-semibold',
                  )}
                >
                  <span className="flex flex-col">
                    <span className="text-foreground">{l.native}</span>
                    <span className="text-xs text-muted-foreground">{l.name}</span>
                  </span>
                  {l.code === lang && <Check className="size-4 text-primary" aria-hidden="true" />}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-center text-sm text-muted-foreground">—</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
