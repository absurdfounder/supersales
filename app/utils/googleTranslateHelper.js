// googleTranslateHelper.js

const HYDRATION_DELAY_MS = 1200

let translateApplyStarted = false

export function getCurrentLanguage() {
  const match = document.cookie.match(/(^|;)\s*googtrans=([^;]+)/)
  if (match) {
    const langCode = match[2].split('/')[2]
    return langCode || 'en'
  }

  return localStorage.getItem('selectedLanguageCode') || 'en'
}

export function isTranslatedPage() {
  const lang = getCurrentLanguage()
  return Boolean(lang && lang !== 'en')
}

/** Set language preference only — never touch the DOM (safe before reload). */
export function setLanguageCookieOnly(langCode) {
  if (!langCode) return false

  try {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    if (langCode === 'en') {
      localStorage.setItem('selectedLanguageCode', 'en')
      return true
    }

    const hostname = window.location.hostname
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname}`
    document.cookie = `googtrans=/en/${langCode}; path=/;`
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

/** Run once after React hydration so Google Translate does not break the tree. */
export function scheduleTranslationAfterHydration() {
  if (translateApplyStarted || typeof window === 'undefined') return
  translateApplyStarted = true

  const run = async () => {
    const langCode = getCurrentLanguage()
    if (!langCode || langCode === 'en') return

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
