'use client'

import { useEffect } from 'react'
import { scheduleTranslationAfterHydration } from '@/app/utils/googleTranslateHelper'

/** Loads Google Translate only after the React app has hydrated. */
export default function GoogleTranslateBoot() {
  useEffect(() => {
    scheduleTranslationAfterHydration()
  }, [])

  return null
}
