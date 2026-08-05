import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projectsData } from '../data/projects'
import { profile, experience, education, certifications, mentions } from '../data/profile'
import { ui, pick, LANGS, langLabels, detectLang } from '../i18n'
import CaseStudy from './CaseStudy'
import './Portfolio.css'

const PRESENT_YEAR = '2026'
const LATEST_YEAR = 2026
const BIRTH_YEAR = 2004

// Per-project device — a spread of real Apple mockups for variety.
const DEVICE = {
  blaze: 'mbp16',
  astyr: 'imac27',
  athenvia: 'iphone',
  alpin: 'mbp14',
  rebloom: 'imac',
  wallside: 'mbp16',
  'hera-studio': 'iphone',
  'fabulous-creations': 'macbook',
  'ai-adventure': 'imac27',
  'reply-heart-monitor': 'duo',
  'megawatt-utt': 'mbp14',
  'crunch-ugv': 'ipad',
  'humanlaw-association': 'mbp16'
}

function Logo({ src, name, big }) {
  const [err, setErr] = useState(false)
  const cls = `listing__logo${big ? ' listing__logo--big' : ''}`
  if (!src || err) {
    return <span className={`${cls} listing__logo--fallback`}>{name.slice(0, 2)}</span>
  }
  return (
    <span className={cls}>
      <img src={src} alt={name} onError={() => setErr(true)} />
    </span>
  )
}

function Screen({ project, eager }) {
  if (project.screenshot) {
    return (
      <img
        className="screen-img"
        src={project.screenshot}
        alt={`${project.title} preview`}
        draggable="false"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }
  return (
    <div className={`screen-fill tone-${project.tone || 'slate'}`}>
      <span>{project.short || project.title.slice(0, 2)}</span>
    </div>
  )
}

// Transparent Apple device frames (real mockups from Figma). The screen area is
// knocked out in each asset, so the screenshot sits behind and shows through;
// the screen rectangle is defined per key in CSS (--sx/--sy/--sw/--sh).
const FRAME_SRC = {
  imac: '/images/frames/imac.webp',
  imac27: '/images/frames/imac27.webp',
  macbook: '/images/frames/macbook.webp',
  mbp14: '/images/frames/mbp14.webp',
  mbp16: '/images/frames/mbp16.webp',
  ipad: '/images/frames/ipad.webp',
  iphone: '/images/frames/iphone.webp',
  iphone11: '/images/frames/iphone11.webp'
}

// Phones tilt narrower and size differently; flag them for CSS.
const PHONE_KEYS = new Set(['iphone', 'iphone11'])

// Coarse family used only for the CSS fallback if a frame asset fails to load.
const coarseType = (key) => {
  if (key.startsWith('imac')) return 'imac'
  if (key.startsWith('iphone')) return 'iphone'
  if (key === 'duo') return 'iphone-duo'
  return 'macbook'
}

function FramedScreen({ src, alt, eager }) {
  return (
    <img
      className="screen-img"
      src={src}
      alt={alt}
      draggable="false"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}

function FrameImg({ src, onError, eager }) {
  return (
    <img
      className="framed__frame"
      src={src}
      alt=""
      aria-hidden="true"
      draggable="false"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={onError}
    />
  )
}

function DeviceFrame({ project, eager }) {
  const key = DEVICE[project.id] || 'macbook'
  const [frameBroken, setFrameBroken] = useState(false)

  // reply-style two-phone layout, each screenshot in its own iPhone 11 frame
  if (key === 'duo' && project.screens?.length >= 2 && !frameBroken) {
    return (
      <div className="df df--framed df--framed-duo">
        <div className="framed-duo">
          {[0, 1].map((i) => (
            <div key={i} className={`framed framed--iphone11 framed--phone framed-duo__${i === 0 ? 'back' : 'front'}`}>
              <div className="framed__screen">
                <FramedScreen src={project.screens[i]} alt={`${project.title} preview ${i + 1}`} eager={eager} />
              </div>
              <FrameImg src={FRAME_SRC.iphone11} eager={eager} onError={() => setFrameBroken(true)} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const useImageFrame = FRAME_SRC[key] && project.screenshot && !frameBroken
  if (useImageFrame) {
    return (
      <div className={`df df--framed df--framed-${key}`}>
        <div className={`framed framed--${key}${PHONE_KEYS.has(key) ? ' framed--phone' : ''}`}>
          <div className="framed__screen">
            <FramedScreen src={project.screenshot} alt={`${project.title} preview`} eager={eager} />
          </div>
          <FrameImg src={FRAME_SRC[key]} eager={eager} onError={() => setFrameBroken(true)} />
        </div>
      </div>
    )
  }

  return <CssDeviceFrame project={project} eager={eager} type={coarseType(key)} />
}

function CssDeviceFrame({ project, eager, type }) {
  const imgLoading = eager ? 'eager' : 'lazy'

  if (type === 'iphone-duo' && project.screens?.length >= 2) {
    return (
      <div className="df df--phone-duo">
        <div className="phone-duo">
          <img
            className="phone-duo__shot phone-duo__shot--back"
            src={project.screens[0]}
            alt={`${project.title} preview 1`}
            draggable="false"
            loading={imgLoading}
            decoding="async"
          />
          <img
            className="phone-duo__shot phone-duo__shot--front"
            src={project.screens[1]}
            alt={`${project.title} preview 2`}
            draggable="false"
            loading={imgLoading}
            decoding="async"
          />
        </div>
      </div>
    )
  }

  if (type === 'iphone') {
    return (
      <div className="df df--iphone">
        <div className="iphone">
          <span className="iphone__island" />
          <div className="iphone__screen">
            <Screen project={project} eager={eager} />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'imac') {
    return (
      <div className="df df--imac">
        <div className="imac">
          <div className="imac__display">
            <div className="imac__screen">
              <Screen project={project} eager={eager} />
            </div>
            <div className="imac__chin">
              <span className="imac__logo" aria-hidden="true" />
            </div>
          </div>
          <div className="imac__neck" />
          <div className="imac__foot" />
        </div>
      </div>
    )
  }

  return (
    <div className="df df--macbook">
      <div className="macbook">
        <div className="macbook__lid">
          <div className="macbook__screen">
            <Screen project={project} eager={eager} />
          </div>
        </div>
        <div className="macbook__base">
          <span className="macbook__notch-bottom" />
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const cursorRef = useRef(null)
  const yearRef = useRef(null)
  const lastYear = useRef(PRESENT_YEAR)
  const detailVisualRef = useRef(null)
  const originRect = useRef(null)
  const originEl = useRef(null)
  const FLIP_EASE = 'cubic-bezier(0.45, 0, 0.18, 1)'
  const s = useRef({
    target: 0,
    current: 0,
    max: 0,
    dragging: false,
    down: false,
    moved: false,
    startX: 0,
    startTarget: 0,
    mx: 0,
    my: 0,
    cx: 0,
    cy: 0
  })

  const [activeProject, setActiveProject] = useState(null)
  const [caseOpen, setCaseOpen] = useState(false)
  const [panel, setPanel] = useState(null) // 'about' | 'certs' | 'edu'
  const [previewPdf, setPreviewPdf] = useState(null)
  const [closing, setClosing] = useState(false)
  const [ready, setReady] = useState(false)
  const [booting, setBooting] = useState(true)
  const [progress, setProgress] = useState(0)
  const [lang, setLang] = useState(detectLang)
  const overlayOpen = Boolean(activeProject) || Boolean(panel)

  // Resolve a translatable value for the active language; T = UI chrome strings.
  const t = (value) => pick(value, lang)
  const T = ui[lang]

  // Persist the language choice and reflect it on <html> for a11y / SEO.
  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  // Preload every device screenshot + the portrait up front so nothing pops
  // in ugly. Progress drives the loader bar; a safety timeout guarantees the
  // site always reveals even if an image stalls.
  useEffect(() => {
    const urls = []
    projectsData.forEach((p) => {
      if (p.screenshot) urls.push(p.screenshot)
      if (p.screens) urls.push(...p.screens)
    })
    if (profile.photo) urls.push(profile.photo)
    urls.push(...Object.values(FRAME_SRC))

    let done = false
    const finish = () => {
      if (done) return
      done = true
      setProgress(100)
      setBooting(false)
    }
    if (!urls.length) {
      finish()
      return
    }
    let loaded = 0
    urls.forEach((src) => {
      const img = new Image()
      const bump = () => {
        loaded += 1
        setProgress(Math.round((loaded / urls.length) * 100))
        if (loaded >= urls.length) finish()
      }
      img.onload = bump
      img.onerror = bump
      img.src = src
    })
    const safety = setTimeout(finish, 6000)
    return () => clearTimeout(safety)
  }, [])

  const isMobile = () => window.innerWidth <= 980 || window.matchMedia('(pointer: coarse)').matches

  const measure = useCallback(() => {
    const vp = viewportRef.current
    const tr = trackRef.current
    if (!vp || !tr) return
    s.current.max = Math.max(0, tr.scrollWidth - vp.clientWidth)
    s.current.target = Math.min(s.current.target, s.current.max)
  }, [])

  useEffect(() => {
    let raf
    const lerp = (a, b, n) => a + (b - a) * n
    const tick = () => {
      const st = s.current
      const tr = trackRef.current

      if (tr && !isMobile()) {
        st.current = lerp(st.current, st.target, 0.1)
        if (Math.abs(st.current - st.target) < 0.06) st.current = st.target
        tr.style.transform = `translate3d(${-st.current}px,0,0)`

        const vpc = window.innerWidth / 2
        const items = tr.children
        for (let i = 0; i < items.length; i++) {
          const el = items[i]
          if (!el.classList.contains('project')) continue
          const r = el.getBoundingClientRect()
          const c = r.left + r.width / 2
          const d = Math.min(1, Math.abs(c - vpc) / (window.innerWidth * 0.7))
          el.style.setProperty('--focus', (1 - d).toFixed(3))
        }
        // Year counts down from today (2026) to birth year (2004) as you scroll
        const progress = st.max > 0 ? Math.min(1, Math.max(0, st.current / st.max)) : 0
        const showYear = String(Math.round(LATEST_YEAR - progress * (LATEST_YEAR - BIRTH_YEAR)))
        if (showYear !== lastYear.current && yearRef.current) {
          lastYear.current = showYear
          yearRef.current.textContent = showYear
        }
      } else if (tr) {
        tr.style.transform = 'none'
      }

      const cu = cursorRef.current
      if (cu) {
        st.cx = lerp(st.cx, st.mx, 0.25)
        st.cy = lerp(st.cy, st.my, 0.25)
        cu.style.transform = `translate(${st.cx}px,${st.cy}px) translate(-50%,-50%) scale(${st.down ? 0.7 : 1})`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    measure()
    setReady(true)
    const onResize = () => measure()
    window.addEventListener('resize', onResize)
    const imgs = trackRef.current?.querySelectorAll('img') || []
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', measure, { once: true })
    })
    const t = setTimeout(measure, 400)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(t)
    }
  }, [measure])

  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    const onWheel = (e) => {
      if (isMobile() || overlayOpen) return
      e.preventDefault()
      const st = s.current
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      st.target = Math.min(st.max, Math.max(0, st.target + delta * 2.8))
    }
    vp.addEventListener('wheel', onWheel, { passive: false })
    return () => vp.removeEventListener('wheel', onWheel)
  }, [overlayOpen])

  useEffect(() => {
    if (!overlayOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (previewPdf) setPreviewPdf(null)
        else if (caseOpen) setCaseOpen(false)
        else closeAll()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlayOpen, previewPdf, caseOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (overlayOpen || isMobile()) return
      const distance = window.innerWidth * 0.72
      if (e.key === 'ArrowRight') s.current.target = Math.min(s.current.max, s.current.target + distance)
      if (e.key === 'ArrowLeft') s.current.target = Math.max(0, s.current.target - distance)
      if (e.key === 'Home') s.current.target = 0
      if (e.key === 'End') s.current.target = s.current.max
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlayOpen])

  // Global custom cursor. The custom dot follows the pointer across the WHOLE
  // document — page and overlays alike — instead of only inside the timeline.
  // It shows on any pointer move, hides only when the pointer leaves the window,
  // and gains .cursor--clickable (shrink + darken) over interactive targets.
  // Desktop pointers only; on touch/narrow the effect bails and the native
  // cursor is used (the .cursor node is display:none there via CSS).
  useEffect(() => {
    if (isMobile()) return
    const cu = cursorRef.current
    if (!cu) return
    const CLICKABLE = 'a, button, [role="button"], input, textarea, select, label'
    let positioned = false

    const onMove = (e) => {
      const st = s.current
      st.mx = e.clientX
      st.my = e.clientY
      // snap to the entry point on the first move so it doesn't slide in from
      // the top-left corner where cx/cy start
      if (!positioned) {
        st.cx = e.clientX
        st.cy = e.clientY
        positioned = true
      }
      cu.style.opacity = '1'
    }
    const onOver = (e) => {
      const clickable = e.target?.closest?.(CLICKABLE)
      cu.classList.toggle('cursor--clickable', Boolean(clickable))
    }
    const onOut = (e) => {
      // relatedTarget null == the pointer left the window entirely
      if (!e.relatedTarget) cu.style.opacity = '0'
    }

    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
    }
  }, [])

  // Lock background scroll while any overlay (panel / project / pdf) is open,
  // so the timeline underneath can't be seen scrolling behind it. A plain
  // overflow:hidden is ignored by mobile Safari for touch scrolling, so we
  // pin the body with position:fixed and restore the exact scroll on close.
  useEffect(() => {
    if (!overlayOpen) return
    const { body } = document
    const scrollY = window.scrollY || window.pageYOffset || 0
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
    }
  }, [overlayOpen])

  // FLIP: when a project opens, the detail device starts exactly where the
  // clicked one was (position + size), then animates to its detail spot.
  // Width of the actual device box (.df) inside a wrapper, so the FLIP scale is
  // device-to-device and not wrapper-to-device (which made it land too small).
  const deviceWidth = (wrapper, fallback) => {
    const df = wrapper?.querySelector?.('.df')
    const w = df ? df.getBoundingClientRect().width : 0
    return w || fallback
  }

  useLayoutEffect(() => {
    if (!activeProject) return
    const el = detailVisualRef.current
    const origin = originRect.current
    if (!el || !origin) return
    const target = el.getBoundingClientRect()
    const dx = origin.left + origin.width / 2 - (target.left + target.width / 2)
    const dy = origin.top + origin.height / 2 - (target.top + target.height / 2)
    const originW = deviceWidth(originEl.current, origin.width)
    const targetW = deviceWidth(el, target.width)
    const scale = targetW ? originW / targetW : 1
    el.style.transition = 'none'
    el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
    // force reflow so the start transform is committed before transitioning
    void el.offsetWidth
    requestAnimationFrame(() => {
      el.style.transition = `transform 0.55s ${FLIP_EASE}`
      el.style.transform = 'translate(0px, 0px) scale(1)'
    })
  }, [activeProject])

  const onMoveWin = useCallback((e) => {
    const st = s.current
    // keep the custom cursor glued to the pointer even when a drag carries it
    // outside the timeline (viewport pointermove stops firing out there)
    st.mx = e.clientX
    st.my = e.clientY
    if (!st.dragging) return
    const dx = e.clientX - st.startX
    if (Math.abs(dx) > 6) st.moved = true
    st.target = Math.min(st.max, Math.max(0, st.startTarget - dx))
  }, [])

  const onUpWin = useCallback(() => {
    const st = s.current
    st.dragging = false
    st.down = false
    window.removeEventListener('pointermove', onMoveWin)
  }, [onMoveWin])

  const onPointerDown = (e) => {
    if (isMobile() || overlayOpen) return
    const st = s.current
    st.dragging = true
    st.down = true
    st.moved = false
    st.startX = e.clientX
    st.startTarget = st.target
    window.addEventListener('pointermove', onMoveWin)
    window.addEventListener('pointerup', onUpWin, { once: true })
  }

  const openProject = (project) => (e) => {
    if (s.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      s.current.moved = false
      return
    }
    // FLIP only on desktop (mouse). On touch/tablet/mobile the overlay simply
    // fades in — no fly-from-origin, so nothing can duplicate or mis-scale.
    if (!isMobile()) {
      const visual = e.currentTarget.querySelector('.project__visual')
      originRect.current = visual ? visual.getBoundingClientRect() : null
      originEl.current = visual || null
      // freeze the gallery so the origin can't drift while the overlay is open
      s.current.target = s.current.current
      // hide the clicked device so it doesn't duplicate the flying one
      if (visual) visual.style.opacity = '0'
    } else {
      originRect.current = null
      originEl.current = null
    }
    setClosing(false)
    setActiveProject(project)
  }

  const closeAll = () => {
    if (!overlayOpen || closing) return
    const el = detailVisualRef.current
    // recompute the live position of the original device so the flying one
    // lands exactly on it (no jump when it gets revealed)
    const origin = originEl.current ? originEl.current.getBoundingClientRect() : originRect.current
    const flip = activeProject && el && origin

    const finish = () => {
      setActiveProject(null)
      setCaseOpen(false)
      setPanel(null)
      setClosing(false)
      // reveal the original device only once the flying one has landed exactly
      // on top of it, so the swap is invisible (no jolt)
      if (originEl.current) {
        originEl.current.style.opacity = ''
        originEl.current = null
      }
    }

    setClosing(true)
    setPreviewPdf(null)

    if (flip) {
      const target = el.getBoundingClientRect()
      const dx = origin.left + origin.width / 2 - (target.left + target.width / 2)
      const dy = origin.top + origin.height / 2 - (target.top + target.height / 2)
      const originW = deviceWidth(originEl.current, origin.width)
      const targetW = deviceWidth(el, target.width)
      const scale = targetW ? originW / targetW : 1
      let done = false
      const settle = (e) => {
        // ignore transitionend bubbling up from child devices
        if (e && (e.target !== el || e.propertyName !== 'transform')) return
        if (done) return
        done = true
        el.removeEventListener('transitionend', settle)
        finish()
      }
      // swap exactly when the device finishes settling — not on a timer that
      // can fire a frame early/late and cause a tiny jump
      el.addEventListener('transitionend', settle)
      window.setTimeout(settle, 620) // safety fallback
      el.style.transition = `transform 0.5s ${FLIP_EASE}`
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
    } else {
      window.setTimeout(finish, 300)
    }
  }

  const openPanel = (name) => {
    if (originEl.current) {
      originEl.current.style.opacity = ''
      originEl.current = null
    }
    setClosing(false)
    setActiveProject(null)
    setPanel(name)
  }

  // Pointer parallax: tilt the hovered device toward the cursor. Vars are read
  // by `.df` in CSS (composed with the hover lift); the 0.4s transition there
  // smooths the follow and the return-to-flat on leave. Desktop pointers only.
  const onTilt = (e) => {
    if (isMobile()) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    const MAX = 9
    el.style.setProperty('--ry', `${(px * MAX).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${(-py * MAX).toFixed(2)}deg`)
  }
  const resetTilt = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }

  const navItems = [
    { key: 'about', label: T.about, onClick: () => openPanel('about') },
    { key: 'work', label: T.work, onClick: () => openPanel('work') },
    { key: 'edu', label: T.education, onClick: () => openPanel('edu') },
    { key: 'certs', label: T.certifications, onClick: () => openPanel('certs') }
  ]

  return (
    <main className="portfolio">
      {/* First-load preloader — waits for device screenshots to decode */}
      <div className={`preloader${booting ? '' : ' preloader--done'}`} aria-hidden={!booting}>
        <div className="preloader__inner">
          <img className="preloader__mark" src="/logo.png" alt="Lakhdar Berache" />
          <div className="preloader__bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>


      <div className="cursor" ref={cursorRef} aria-hidden="true">
        <span className="cursor__dot" />
      </div>

      <header className="site-header">
        <div className="site-header__identity">
          <strong>{profile.name}</strong>
          <span className="site-header__year" ref={yearRef}>
            {PRESENT_YEAR}
          </span>
        </div>
        <div className="site-header__right">
          <nav aria-label="Sections">
            {navItems.map((item) => (
              <button key={item.key} onClick={item.onClick}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="lang-switch" role="group" aria-label={T.language}>
            {LANGS.map((l) => (
              <button
                key={l}
                className={l === lang ? 'is-active' : ''}
                onClick={() => setLang(l)}
                aria-pressed={l === lang}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div
        className="timeline"
        ref={viewportRef}
        onPointerDown={onPointerDown}
      >
        <div className={`timeline__track${ready ? ' is-ready' : ''}`} ref={trackRef}>
          <div className="timeline__spacer" aria-hidden="true" />
          {projectsData.map((project, index) => (
            <article className="project" key={project.id} data-year={project.year} style={{ '--i': index }}>
              <button
                className="project__button"
                onClick={openProject(project)}
                onMouseMove={onTilt}
                onMouseLeave={resetTilt}
                aria-label={`${T.open} ${project.title}`}
              >
                <div className="project__visual">
                  {project.caseStudy?.award && (
                    <span className="award-badge">
                      <span className="award-badge__mark" aria-hidden="true" />
                      <span className="award-badge__text">{t(project.caseStudy.award)}</span>
                    </span>
                  )}
                  <DeviceFrame project={project} />
                </div>
                <span className="project__caption">
                  {project.captionTitle || project.title} <em>{project.year}</em>
                </span>
              </button>
            </article>
          ))}
          <div className="timeline__end">
            <span>{T.origin}</span>
            <strong>2004</strong>
          </div>
        </div>
      </div>

      <p className="scroll-hint">
        {T.scrollHint} <span>→</span>
      </p>

      {/* Project detail */}
      {activeProject && (
        <section className={`overlay project-detail${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="back" onClick={closeAll} aria-label={T.back}>
            <span />
          </button>
          <div className="project-detail__inner">
            <div className="project-info project-info--expanded">
              <h2>{activeProject.title}</h2>
              <p className="project-info__role">{t(activeProject.role)}</p>
              <p className="project-info__year">{activeProject.year}</p>
              {activeProject.description && (
                <p className="project-info__description">{t(activeProject.description)}</p>
              )}
              {activeProject.highlights && (
                <ul className="project-info__highlights">
                  {t(activeProject.highlights).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="project-info__stack">
                {activeProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {(activeProject.link || activeProject.caseStudy) && (
                <div className="project-info__actions">
                  {activeProject.link && (
                    <a className="project-info__link" href={activeProject.link} target="_blank" rel="noreferrer">
                      {t(activeProject.linkLabel) || T.visitSite} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {activeProject.caseStudy && (
                    <button className="project-info__more" onClick={() => setCaseOpen(true)}>
                      {T.learnMore} <span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            <div
              className="project-detail__visual"
              ref={detailVisualRef}
              onClick={closeAll}
              role="button"
              tabIndex={0}
              aria-label={T.back}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && closeAll()}
            >
              <DeviceFrame project={activeProject} eager />
            </div>
          </div>
        </section>
      )}

      {/* Case study — detailed, motion-driven deep dive over the detail view */}
      <AnimatePresence>
        {caseOpen && activeProject?.caseStudy && (
          <CaseStudy
            key={`case-${activeProject.id}`}
            project={activeProject}
            lang={lang}
            T={T}
            onClose={() => setCaseOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* About */}
      {panel === 'about' && (
        <section className={`overlay about${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={T.about}>
          <button className="back" onClick={closeAll} aria-label={T.close}>
            <span />
          </button>
          <div className="about__inner">
            {profile.photo && (
              <div className="about__photo">
                <img src={profile.photo} alt={profile.name} />
              </div>
            )}
            <div className="about__text">
              <p className="about__bio">
                {t(profile.bio).join(' ')}
              </p>
              <div className="about__links">
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target={social.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                    {social.label}
                  </a>
                ))}
                {profile.cv && (
                  <button className="about__links-btn" onClick={() => setPreviewPdf(profile.cv)}>
                    {T.resume}
                  </button>
                )}
              </div>
              <small>{t(profile.location)}</small>
            </div>
          </div>
        </section>
      )}

      {/* Work experience */}
      {panel === 'work' && (
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={T.work}>
          <button className="back" onClick={closeAll} aria-label={T.close}>
            <span />
          </button>
          <div className="listing__inner listing__inner--wide">
            <h3 className="listing__title">{T.work}</h3>
            <ul className="listing__list">
              {experience.map((item) => (
                <li key={item.company}>
                  <Logo src={item.logo} name={item.company} big />
                  <div className="listing__body">
                    {item.link ? (
                      <a className="listing__main listing__main--link" href={item.link} target="_blank" rel="noreferrer">
                        {item.company} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="listing__main">{item.company}</span>
                    )}
                    <span className="listing__sub">{t(item.position)}</span>
                    <span className="listing__meta">{t(item.location)} <em>{t(item.period)}</em></span>
                    <span className="listing__note">{t(item.note)}</span>
                    {item.certificate && (
                      <button className="listing__cta" onClick={() => setPreviewPdf(item.certificate)}>
                        {t(item.certificateLabel) || T.viewCertificate} <span aria-hidden="true">↗</span>
                      </button>
                    )}
                    {item.link && item.linkLabel && (
                      <a className="listing__cta" href={item.link} target="_blank" rel="noreferrer">
                        {t(item.linkLabel)} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Certifications */}
      {panel === 'certs' && (
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={T.certifications}>
          <button className="back" onClick={closeAll} aria-label={T.close}>
            <span />
          </button>
          <div className="listing__inner listing__inner--split">
            <div className="listing__col">
              <h3 className="listing__title">{T.certifications}</h3>
              <ul className="listing__list">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <Logo src={c.logo} name={c.provider} />
                    <div className="listing__body">
                      {c.link ? (
                        <a className="listing__main listing__main--link" href={c.link} target="_blank" rel="noreferrer">
                          {c.title} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="listing__main">{c.title}</span>
                      )}
                      <span className="listing__meta">
                        {c.provider} <em>{c.year}</em>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="listing__col">
              <h3 className="listing__title">{T.mentions}</h3>
              <ul className="listing__list">
                {mentions.map((m) => (
                  <li key={m.link} className={m.embed ? 'mention--embed' : undefined}>
                    {m.embed ? (
                      <div className="listing__body">
                        <span className="listing__main">{m.outlet}</span>
                        <span className="listing__note">{t(m.title)}</span>
                        <span className="listing__meta">{m.year}</span>
                        <div className="mention-embed">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${m.embed}`}
                            title={t(m.title)}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Logo src={m.logo} name={m.outlet} big />
                        <div className="listing__body">
                          <a className="listing__main listing__main--link" href={m.link} target="_blank" rel="noreferrer">
                            {m.outlet} <span aria-hidden="true">↗</span>
                          </a>
                          <span className="listing__note">{t(m.title)}</span>
                          <span className="listing__meta">{m.year}</span>
                          <a className="listing__cta" href={m.link} target="_blank" rel="noreferrer">
                            {T.readArticle} <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Education */}
      {panel === 'edu' && (
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={T.education}>
          <button className="back" onClick={closeAll} aria-label={T.close}>
            <span />
          </button>
          <div className="listing__inner">
            <h3 className="listing__title">{T.education}</h3>
            <ul className="listing__list">
              {education.map((e) => (
                <li key={e.school}>
                  <Logo src={e.logo} name={e.school} big />
                  <div className="listing__body">
                    <span className="listing__main">{e.school}</span>
                    <span className="listing__sub">{t(e.degree)}</span>
                    <span className="listing__meta">
                      {t(e.location)} <em>{t(e.period)}</em>
                    </span>
                    <span className="listing__note">{t(e.note)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* PDF preview — iPad */}
      {previewPdf && (
        <div className="cv-overlay" role="dialog" aria-modal="true" aria-label="Document preview" onClick={() => setPreviewPdf(null)}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ipad">
              <span className="ipad__cam" aria-hidden="true" />
              <div className="ipad__screen">
                <iframe src={`${previewPdf}#view=FitH`} title="Document preview" />
              </div>
            </div>
            <div className="cv-modal__actions">
              <a className="about__cv-btn" href={previewPdf} download>
                {T.download} <span aria-hidden="true">↓</span>
              </a>
              <button className="about__cv-btn about__cv-btn--ghost" onClick={() => setPreviewPdf(null)}>
                {T.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
