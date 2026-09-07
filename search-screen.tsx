'use client'

import { Info, Loader2, Pill, Search, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { AdSlot } from '@/components/ad-slot'
import { useI18n } from '@/lib/i18n/i18n-context'

type Alternative = { name: string; price: string; note: string }
type Result = {
  found: boolean
  name: string
  genericName: string
  category: string
  usage: string
  currentPrice: string
  alternatives: Alternative[]
}

export function SearchScreen() {
  const { t, lang } = useI18n()
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<null | 'generic' | 'setup'>(null)

  async function runSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (!q || loading) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('/api/search-medicine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, language: lang }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error === 'ai_not_configured' ? 'setup' : 'generic')
        return
      }
      setResult(data)
    } catch {
      setError('generic')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-foreground text-balance">{t.searchTitle}</h1>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {t.searchSubtitle}
        </p>
      </div>

      <form onSubmit={runSearch} className="flex flex-col gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-1 shadow-sm focus-within:border-primary">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
            enterKeyHint="search"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-base font-bold text-primary-foreground transition-opacity disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <Search className="size-5" aria-hidden="true" />
          )}
          {loading ? t.searching : t.searchBtn}
        </button>
      </form>

      {!result && !loading && !error && (
        <p className="rounded-xl bg-secondary/40 px-4 py-3 text-center text-sm text-muted-foreground">
          {t.searchHint}
        </p>
      )}

      {error === 'setup' && (
        <p className="flex items-start gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          {t.aiSetupNeeded}
        </p>
      )}

      {error === 'generic' && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive">
          {t.noResults}
        </p>
      )}

      {result && !result.found && !error && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-center text-sm font-medium text-destructive">
          {t.noResults}
        </p>
      )}

      {result && result.found && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Pill className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">{result.name}</span>
                  <span className="text-sm text-muted-foreground">{result.genericName}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-3">
              <span className="text-sm font-semibold text-foreground">{t.currentPrice}</span>
              <span className="text-lg font-bold text-primary">{result.currentPrice}</span>
            </div>

            <dl className="flex flex-col gap-2 text-sm">
              {result.category && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">{t.category}:</dt>
                  <dd className="text-muted-foreground">{result.category}</dd>
                </div>
              )}
              {result.usage && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">{t.usage}:</dt>
                  <dd className="text-muted-foreground">{result.usage}</dd>
                </div>
              )}
            </dl>
          </div>

          {result.alternatives?.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
                <Sparkles className="size-4 text-accent" aria-hidden="true" />
                {t.alternatives}
              </h2>
              <ul className="flex flex-col gap-2">
                {result.alternatives.map((alt, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{alt.name}</span>
                      <span className="text-xs text-muted-foreground">{alt.note}</span>
                    </div>
                    <span className="whitespace-nowrap text-sm font-bold text-primary">
                      {alt.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="flex items-start gap-2 rounded-xl bg-accent/10 p-3 text-xs leading-relaxed text-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {t.priceDisclaimer}
          </p>

          <AdSlot />
        </div>
      )}
    </div>
  )
}
