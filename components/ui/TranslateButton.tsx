'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getCurrentLanguage, setLanguageCookieOnly } from '@/app/utils/googleTranslateHelper'

interface LanguageData {
  code: string
  name: string
  flag: string
  countryCode?: string
}

type LanguageMappingType = {
  [countryCode: string]: LanguageData
}

const languageMapping: LanguageMappingType = {
  US: { code: 'en', name: 'English', flag: '🇺🇸' },
  AE: { code: 'ar', name: 'Arabic', flag: '🇦🇪' },
  ES: { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  FR: { code: 'fr', name: 'French', flag: '🇫🇷' },
  DE: { code: 'de', name: 'German', flag: '🇩🇪' },
  IT: { code: 'it', name: 'Italian', flag: '🇮🇹' },
  JP: { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  KR: { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  CN: { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
  TW: { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇹🇼' },
  PT: { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  RU: { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  IN: { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
}

const processLanguagesForDropdown = (): LanguageData[] => {
  const uniqueLanguages = new Map<string, LanguageData>()

  Object.entries(languageMapping).forEach(([countryCode, language]) => {
    if (language.code === 'en') {
      language.flag = '🇺🇸'
      language.countryCode = countryCode

      if (countryCode === 'US') {
        uniqueLanguages.set(language.code, language)
      }
    } else if (!uniqueLanguages.has(language.code)) {
      language.countryCode = countryCode
      uniqueLanguages.set(language.code, language)
    }
  })

  return Array.from(uniqueLanguages.values()).sort((a, b) => a.name.localeCompare(b.name))
}

const allUniqueLanguages = processLanguagesForDropdown()

export default function TranslateButton() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageData>(
    languageMapping.US || { code: 'en', name: 'English', flag: '🇺🇸', countryCode: 'US' },
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredLanguages, setFilteredLanguages] = useState<LanguageData[]>(allUniqueLanguages)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentLangCode = getCurrentLanguage()
    const langObj = allUniqueLanguages.find((lang) => lang.code === currentLangCode)
    if (langObj) {
      setSelectedLanguage(langObj)
    }
  }, [])

  useEffect(() => {
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLanguages(allUniqueLanguages)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = allUniqueLanguages.filter(
        (lang) => lang.name.toLowerCase().includes(query) || lang.code.toLowerCase().includes(query),
      )
      setFilteredLanguages(filtered)
    }
  }, [searchQuery])

  const translatePage = (language: LanguageData) => {
    setLanguageCookieOnly(language.code)
    setDropdownOpen(false)
    setSearchQuery('')

    // Full reload lets React hydrate first; translation runs later via GoogleTranslateBoot.
    window.location.assign(window.location.pathname + window.location.search)
  }

  const preventTranslation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.setAttribute('translate', 'no')
    e.currentTarget.classList.add('notranslate')
  }

  return (
    <div className="relative notranslate" translate="no" ref={dropdownRef} onClick={preventTranslation}>
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:text-agro"
        aria-label="Select language"
      >
        <span className="mr-1 opacity-80">{selectedLanguage.flag}</span>
        <span>{selectedLanguage.code.toUpperCase()}</span>
      </button>

      {dropdownOpen && (
        <div
          className="notranslate absolute right-0 top-full z-50 mt-2 max-h-[28rem] w-64 overflow-y-auto rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          translate="no"
        >
          <div className="py-1">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2 text-xs text-gray-500">
              <span>Select language</span>
              <span className="text-xs text-gray-400">{filteredLanguages.length} languages</span>
            </div>

            <div className="border-b border-gray-100 px-3 py-2">
              <input
                type="text"
                className="w-full rounded border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-agro"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="max-h-80 overflow-y-auto">
              {filteredLanguages.length === 0 ? (
                <div className="px-4 py-2 text-sm italic text-gray-500">No languages found</div>
              ) : (
                filteredLanguages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => translatePage(language)}
                    className={`flex w-full items-center px-4 py-2 text-left text-sm ${
                      selectedLanguage.code === language.code
                        ? 'bg-agro-50 text-agro-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-2 opacity-70">{language.flag}</span>
                    <span>{language.name}</span>
                    <span className="ml-2 text-xs text-gray-400">{language.code}</span>
                    {selectedLanguage.code === language.code && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
