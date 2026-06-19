// googleTranslateHelper.js

const HYDRATION_DELAY_MS = 1200

let translateApplyStarted = false

function parseGoogTransCookie(rawValue) {
  if (!rawValue) return 'en'

  const value = decodeURIComponent(rawValue.trim())
  const parts = value.split('/').filter(Boolean)

  if (parts.length === 0) return 'en'

  // /en/hi -> hi, /auto/en -> en
  const target = parts[parts.length - 1]
  if (!target || target === 'en') return 'en'

  return target
}

export function getCurrentLanguage() {
  if (typeof document === 'undefined') return 'en'

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, ...rest] = cookie.trim().split('=')
    if (name === 'googtrans') {
      const lang = parseGoogTransCookie(rest.join('='))
      if (lang && lang !== 'en') return lang
      return 'en'
    }
  }

  const stored = localStorage.getItem('selectedLanguageCode')
  if (stored && stored !== 'en') return stored

  return 'en'
}

export function isTranslatedPage() {
  return getCurrentLanguage() !== 'en'
}

function clearGoogleTranslateCookies() {
  const expire = 'Thu, 01 Jan 1970 00:00:00 UTC'
  const hostname = window.location.hostname
  const variants = [`googtrans=; expires=${expire}; path=/`]

  if (hostname && hostname !== 'localhost' && !hostname.endsWith('.local')) {
    variants.push(`googtrans=; expires=${expire}; path=/; domain=${hostname}`)
    const rootDomain = hostname.replace(/^www\./, '')
    if (rootDomain.includes('.')) {
      variants.push(`googtrans=; expires=${expire}; path=/; domain=.${rootDomain}`)
    }
  }

  for (const cookie of variants) {
    document.cookie = cookie
  }
}

function resetTranslatedDocumentMarkup() {
  document.documentElement.classList.remove('translated-ltr', 'translated-rtl')
  document.documentElement.lang = 'en'
  document.body?.classList.remove('translated-ltr', 'translated-rtl')
}

/** Set language preference only — never touch the DOM (safe before reload). */
export function setLanguageCookieOnly(langCode) {
  if (!langCode) return false

  try {
    clearGoogleTranslateCookies()

    if (langCode === 'en') {
      localStorage.removeItem('selectedLanguageCode')
      resetTranslatedDocumentMarkup()
      return true
    }

    const hostname = window.location.hostname
    const value = `/en/${langCode}`

    document.cookie = `googtrans=${value}; path=/`
    if (hostname && hostname !== 'localhost' && !hostname.endsWith('.local')) {
      document.cookie = `googtrans=${value}; path=/; domain=${hostname}`
    }

    localStorage.setItem('selectedLanguageCode', langCode)
    return true
  } catch (error) {
    console.error('Error setting language cookie:', error)
    return false
  }
}

function applyTranslationWithoutRefresh(langCode) {
  if (!langCode || langCode === 'en') return

  try {
    const selectors = ['.goog-te-combo', 'select.goog-te-combo', '[id*="goog-te-combo"]']

    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector)

      for (const element of elements) {
        if (element instanceof HTMLSelectElement) {
          element.value = langCode
          element.dispatchEvent(new Event('change'))
          return
        }
      }
    }
  } catch (error) {
    console.error('Error in applyTranslationWithoutRefresh:', error)
  }
}

function resetTranslateWidgetToEnglish() {
  try {
    const selectors = ['.goog-te-combo', 'select.goog-te-combo', '[id*="goog-te-combo"]']

    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector)

      for (const element of elements) {
        if (element instanceof HTMLSelectElement) {
          element.value = ''
          element.selectedIndex = 0
          element.dispatchEvent(new Event('change'))
          return
        }
      }
    }
  } catch (error) {
    console.error('Error resetting translate widget:', error)
  }
}

function hideGoogleTranslateBar() {
  if (document.getElementById('google-translate-hide-style')) return

  const style = document.createElement('style')
  style.id = 'google-translate-hide-style'
  style.textContent = `
    .VIpgJd-ZVi9od-ORHb-OEVmcd,
    .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
    .goog-te-banner-frame,
    .skiptranslate,
    iframe.skiptranslate,
    #google_translate_element iframe {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
    }
    body {
      top: 0 !important;
    }
  `
  document.head.appendChild(style)
}

function initTranslateWidget() {
  if (!window.google?.translate?.TranslateElement) return false

  const mount = document.getElementById('google_translate_element')
  if (!mount || mount.dataset.initialized === 'true') return true

  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      autoDisplay: false,
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element',
  )

  mount.dataset.initialized = 'true'
  hideGoogleTranslateBar()
  return true
}

function loadTranslateScript() {
  return new Promise((resolve) => {
    if (window.google?.translate) {
      resolve(true)
      return
    }

    if (document.getElementById('google-translate-script')) {
      const waitForGoogle = setInterval(() => {
        if (window.google?.translate) {
          clearInterval(waitForGoogle)
          resolve(true)
        }
      }, 100)

      setTimeout(() => {
        clearInterval(waitForGoogle)
        resolve(Boolean(window.google?.translate))
      }, 8000)
      return
    }

    window.googleTranslateElementInit = function () {
      initTranslateWidget()
      resolve(true)
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.onerror = () => resolve(false)
    document.head.appendChild(script)
  })
}

function installTranslationBfcacheGuard() {
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return
    if (getCurrentLanguage() !== 'en') return

    const looksTranslated =
      document.documentElement.classList.contains('translated-ltr') ||
      document.documentElement.classList.contains('translated-rtl') ||
      (document.documentElement.lang && document.documentElement.lang !== 'en')

    if (looksTranslated) {
      window.location.reload()
    }
  })
}

/** Run once after React hydration so Google Translate does not break the tree. */
export function scheduleTranslationAfterHydration() {
  if (translateApplyStarted || typeof window === 'undefined') return
  translateApplyStarted = true

  installTranslationBfcacheGuard()

  const run = async () => {
    const langCode = getCurrentLanguage()

    if (!langCode || langCode === 'en') {
      resetTranslatedDocumentMarkup()
      return
    }

    await loadTranslateScript()
    initTranslateWidget()

    window.setTimeout(() => {
      applyTranslationWithoutRefresh(langCode)
    }, 250)
  }

  window.setTimeout(run, HYDRATION_DELAY_MS)
}

// Backwards-compatible alias — do not call during user language selection.
export function setLanguageWithCookie(langCode) {
  return setLanguageCookieOnly(langCode)
}

export function ensureTranslation() {
  scheduleTranslationAfterHydration()
}

export function reloadForLanguageChange(langCode) {
  if (langCode === 'en') {
    resetTranslateWidgetToEnglish()
  }

  const url = window.location.pathname + window.location.search
  window.location.replace(url)
}
