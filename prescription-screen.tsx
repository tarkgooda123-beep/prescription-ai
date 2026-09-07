'use client'

import { FileText, Info, Loader2, Pill, RotateCcw, Upload } from 'lucide-react'
import { useRef, useState } from 'react'
import { AdSlot } from '@/components/ad-slot'
import { useI18n } from '@/lib/i18n/i18n-context'
import { CURRENCY, SAMPLE_PRESCRIPTION, type ExtractedMedicine } from '@/lib/mock-data'

type Status = 'idle' | 'analyzing' | 'done'

export function PrescriptionScreen() {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>('idle')
  const [preview, setPreview] = useState<string | null>(null)
  const [results, setResults] = useState<ExtractedMedicine[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  function analyze(imageUrl: string | null) {
    setPreview(imageUrl)
    setStatus('analyzing')
    // الوضع التجريبي: محاكاة استخراج البيانات من الصورة
    setTimeout(() => {
      setResults(SAMPLE_PRESCRIPTION)
      setStatus('done')
    }, 1800)
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    analyze(URL.createObjectURL(file))
  }

  function reset() {
    setStatus('idle')
    setPreview(null)
    setResults([])
    if (fileRef.current) fileRef.current.value = ''
  }

  const total = results.reduce((sum, m) => sum + m.price, 0)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-foreground text-balance">{t.rxTitle}</h1>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
            {t.free}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{t.rxSubtitle}</p>
      </div>

      {status === 'idle' && (
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-primary/40 bg-card px-6 py-10 text-center transition-colors hover:border-primary hover:bg-secondary/40"
          >
            <span className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Upload className="size-8" aria-hidden="true" />
            </span>
            <span className="text-base font-bold text-foreground">{t.rxUpload}</span>
            <span className="text-sm text-muted-foreground">{t.rxUploadHint}</span>
          </button>
          <button
            type="button"
            onClick={() => analyze(null)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3.5 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/70"
          >
            <FileText className="size-5" aria-hidden="true" />
            {t.rxSample}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={onFile}
            className="hidden"
          />
        </div>
      )}

      {status === 'analyzing' && (
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
          {preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview || '/placeholder.svg'}
              alt=""
              className="mb-2 max-h-40 rounded-xl object-contain"
            />
          )}
          <Loader2 className="size-9 animate-spin text-primary" aria-hidden="true" />
          <p className="text-base font-semibold text-foreground">{t.rxAnalyzing}</p>
        </div>
      )}

      {status === 'done' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-foreground">{t.rxResults}</h2>
          <ul className="flex flex-col gap-3">
            {results.map((m, i) => (
              <li
                key={i}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Pill className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-foreground">{m.name}</span>
                      <span className="text-sm text-muted-foreground">{m.dosage}</span>
                    </div>
                  </div>
                  <span className="whitespace-nowrap rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-bold text-primary">
                    {m.price} {CURRENCY}
                  </span>
                </div>
                <p className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-foreground">
                  <span className="font-semibold">{t.rxInstructions}: </span>
                  {m.instructions}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between rounded-2xl bg-primary px-4 py-3.5 text-primary-foreground">
            <span className="text-sm font-semibold">{t.rxTotal}</span>
            <span className="text-lg font-bold">
              {total} {CURRENCY}
            </span>
          </div>

          <AdSlot className="my-1" />

          <p className="flex items-start gap-2 rounded-xl bg-accent/10 p-3 text-xs leading-relaxed text-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {t.rxDisclaimer}
          </p>

          <button
            type="button"
            onClick={reset}
            className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary/50"
          >
            <RotateCcw className="size-5" aria-hidden="true" />
            {t.rxNewScan}
          </button>
        </div>
      )}
    </div>
  )
}
