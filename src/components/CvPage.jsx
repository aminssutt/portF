import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ui, detectLang } from '../i18n'
import './CvPage.css'

// Standalone résumé page served at /cv. The variant lives in the URL
// (/cv/research, /cv/corpo or ?v=…) so each version can be shared directly.
const variantFromUrl = () => {
  const { pathname, search } = window.location
  const key = new URLSearchParams(search).get('v') || pathname.split('/')[2]
  const match = profile.cvs.find((cv) => cv.key === key)
  return (match ?? profile.cvs[0]).key
}

export default function CvPage() {
  const [variant, setVariant] = useState(variantFromUrl)
  const T = ui[detectLang()]
  const cv = profile.cvs.find((c) => c.key === variant)

  useEffect(() => {
    document.title = `${profile.name} — CV ${cv.label}`
    window.history.replaceState(null, '', `/cv/${cv.key}`)
  }, [cv])

  return (
    <main className="cv-page">
      <header className="cv-page__bar">
        <a className="cv-page__name" href="/">
          {profile.name}
        </a>
        <div className="cv-page__switch" role="tablist" aria-label="CV">
          {profile.cvs.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={c.key === variant}
              className={`cv-page__tab${c.key === variant ? ' is-active' : ''}`}
              onClick={() => setVariant(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <a className="cv-page__download" href={cv.href} download>
          {T.download} <span aria-hidden="true">↓</span>
        </a>
      </header>

      <div className="cv-page__sheet">
        <iframe key={cv.href} src={`${cv.href}#view=FitH&navpanes=0`} title={`CV ${cv.label}`} />
        {/* Mobile browsers rarely render inline PDFs — offer a direct link instead. */}
        <a className="cv-page__open" href={cv.href} target="_blank" rel="noreferrer">
          {T.open} CV {cv.label} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  )
}
