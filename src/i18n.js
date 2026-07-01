// Lightweight i18n: translatable data fields are `{ en, fr, ko }` objects
// (values may be strings or arrays). `pick` resolves one for the active lang,
// falling back to English, and passes plain values through untouched.
export const LANGS = ['en', 'fr', 'ko']

export const langLabels = { en: 'EN', fr: 'FR', ko: 'KO' }

export function pick(value, lang) {
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('en' in value || 'fr' in value || 'ko' in value)
  ) {
    return value[lang] ?? value.en
  }
  return value
}

export function detectLang() {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem('lang')
    if (saved && LANGS.includes(saved)) return saved
  } catch {
    /* localStorage may be unavailable */
  }
  const n = (navigator.language || 'en').toLowerCase()
  if (n.startsWith('fr')) return 'fr'
  if (n.startsWith('ko')) return 'ko'
  return 'en'
}

// UI chrome strings (menus, buttons, hints).
export const ui = {
  en: {
    about: 'About',
    work: 'Work',
    education: 'Education',
    certifications: 'Certifications',
    mentions: 'Mentions',
    scrollHint: 'Scroll or drag',
    origin: 'Where it all began',
    visitSite: 'Visit live site',
    resume: 'Resume',
    download: 'Download',
    close: 'Close',
    readArticle: 'Read the article',
    viewCertificate: 'View certificate',
    open: 'Open',
    back: 'Back',
    language: 'Language'
  },
  fr: {
    about: 'À propos',
    work: 'Expérience',
    education: 'Formation',
    certifications: 'Certifications',
    mentions: 'Presse',
    scrollHint: 'Faites défiler ou glissez',
    origin: 'Là où tout a commencé',
    visitSite: 'Voir le site',
    resume: 'CV',
    download: 'Télécharger',
    close: 'Fermer',
    readArticle: "Lire l'article",
    viewCertificate: 'Voir le certificat',
    open: 'Ouvrir',
    back: 'Retour',
    language: 'Langue'
  },
  ko: {
    about: '소개',
    work: '경력',
    education: '학력',
    certifications: '자격증',
    mentions: '미디어',
    scrollHint: '스크롤 또는 드래그',
    origin: '모든 것이 시작된 곳',
    visitSite: '사이트 방문',
    resume: '이력서',
    download: '다운로드',
    close: '닫기',
    readArticle: '기사 읽기',
    viewCertificate: '증명서 보기',
    open: '열기',
    back: '뒤로',
    language: '언어'
  }
}
