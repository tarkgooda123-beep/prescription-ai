'use client'

import { useState } from 'react'
import { AppHeader } from '@/components/app-header'
import { BottomNav } from '@/components/bottom-nav'
import { AccountScreen } from '@/components/screens/account-screen'
import { PremiumScreen } from '@/components/screens/premium-screen'
import { PrescriptionScreen } from '@/components/screens/prescription-screen'
import { SearchScreen } from '@/components/screens/search-screen'
import type { Screen } from '@/lib/screens'

export default function Home() {
  const [screen, setScreen] = useState<Screen>('prescription')

  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <AppHeader />
      <main className="flex-1 px-4 py-5">
        {screen === 'prescription' && <PrescriptionScreen />}
        {screen === 'search' && <SearchScreen />}
        {screen === 'premium' && <PremiumScreen />}
        {screen === 'account' && <AccountScreen />}
      </main>
      <BottomNav active={screen} onChange={setScreen} />
    </div>
  )
}
