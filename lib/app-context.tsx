'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Reminder = {
  id: string
  medName: string
  time: string
  frequency: 'daily' | 'twice' | 'weekly'
}

type User = {
  name: string
  email: string
}

type AppState = {
  user: User | null
  isPremium: boolean
  reminders: Reminder[]
}

type AppContextValue = AppState & {
  signIn: (email: string, name?: string) => void
  signOut: () => void
  subscribe: () => void
  unsubscribe: () => void
  addReminder: (r: Omit<Reminder, 'id'>) => void
  removeReminder: (id: string) => void
}

const AppContext = createContext<AppContextValue | null>(null)

const KEY = 'rxai.state'

const EMPTY: AppState = { user: null, isPremium: false, reminders: [] }

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(EMPTY)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) setState({ ...EMPTY, ...JSON.parse(raw) })
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) localStorage.setItem(KEY, JSON.stringify(state))
  }, [state, hydrated])

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      signIn: (email, name) =>
        setState((s) => ({ ...s, user: { email, name: name || email.split('@')[0] } })),
      signOut: () => setState((s) => ({ ...s, user: null })),
      subscribe: () => setState((s) => ({ ...s, isPremium: true })),
      unsubscribe: () => setState((s) => ({ ...s, isPremium: false })),
      addReminder: (r) =>
        setState((s) => ({
          ...s,
          reminders: [...s.reminders, { ...r, id: crypto.randomUUID() }],
        })),
      removeReminder: (id) =>
        setState((s) => ({ ...s, reminders: s.reminders.filter((x) => x.id !== id) })),
    }),
    [state],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
