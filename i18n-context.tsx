'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { detectDeviceLanguage, isRTL } from './languages'
import { getTranslations, type TranslationKeys } from './translations'

type I18nContextValue = {
  lang: string
  setLang: (code: string) => void
  t: TranslationKeys
  dir: 'rtl' | 'ltr'
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'rxai.lang'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState('ar')

  // كشف لغة الجهاز تلقائياً عند أول تحميل، أو استرجاع اختيار المستخدم
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setLangState(saved || detectDeviceLanguage())
  }, [])

  const setLang = (code: string) => {
    setLangState(code)
    localStorage.setItem(STORAGE_KEY, code)
  }

  const dir = isRTL(lang) ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: getTranslations(lang), dir }),
    [lang, dir],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
