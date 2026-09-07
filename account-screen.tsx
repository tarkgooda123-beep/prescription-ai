'use client'

import { LogOut, Mail, Sparkles, User as UserIcon } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '@/lib/app-context'
import { useI18n } from '@/lib/i18n/i18n-context'

export function AccountScreen() {
  const { t } = useI18n()
  const { user, isPremium, signIn, signOut } = useApp()
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    signIn(email.trim(), mode === 'signUp' ? name.trim() : undefined)
    setName('')
    setEmail('')
    setPassword('')
  }

  if (user) {
    return (
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold text-foreground">{t.accountTitle}</h1>

        <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
          <span className="flex size-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {user.name.charAt(0).toUpperCase()}
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">
              {t.welcome}, {user.name}
            </span>
            <span className="text-sm text-muted-foreground">{user.email}</span>
          </div>
          <span
            className={
              isPremium
                ? 'flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-accent'
                : 'rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground'
            }
          >
            {isPremium && <Sparkles className="size-4" aria-hidden="true" />}
            {isPremium ? t.planPremium : t.planFree}
          </span>
        </div>

        <button
          type="button"
          onClick={signOut}
          className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3.5 text-base font-semibold text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="size-5" aria-hidden="true" />
          {t.signOut}
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-foreground">
        {mode === 'signIn' ? t.signIn : t.signUp}
      </h1>

      <form onSubmit={submit} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-5 shadow-sm">
        {mode === 'signUp' && (
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-foreground">{t.fullName}</span>
            <div className="flex items-center gap-2 rounded-xl border border-input bg-background px-3 focus-within:border-primary">
              <UserIcon className="size-5 text-muted-foreground" aria-hidden="true" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent py-3 text-base outline-none"
              />
            </div>
          </label>
        )}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-foreground">{t.email}</span>
          <div className="flex items-center gap-2 rounded-xl border border-input bg-background px-3 focus-within:border-primary">
            <Mail className="size-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-3 text-base outline-none"
              autoComplete="email"
            />
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-foreground">{t.password}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-input bg-background px-3 py-3 text-base outline-none focus:border-primary"
            autoComplete={mode === 'signIn' ? 'current-password' : 'new-password'}
          />
        </label>
        <button
          type="submit"
          className="mt-1 flex items-center justify-center rounded-2xl bg-primary px-4 py-3.5 text-base font-bold text-primary-foreground"
        >
          {mode === 'signIn' ? t.signIn : t.signUp}
        </button>
      </form>

      <button
        type="button"
        onClick={() => setMode((m) => (m === 'signIn' ? 'signUp' : 'signIn'))}
        className="text-center text-sm font-semibold text-primary"
      >
        {mode === 'signIn' ? t.toggleToSignUp : t.toggleToSignIn}
      </button>
    </div>
  )
}
