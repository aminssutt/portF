import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { projectsData } from '../data/projects'
import { profile, experience, education, certifications, mentions } from '../data/profile'
import './Portfolio.css'

const PRESENT_YEAR = '2026'
const LATEST_YEAR = 2026
const BIRTH_YEAR = 2004

const DEVICE = {
  rebloom: 'imac',
  carchat: 'macbook',
  'hera-studio': 'iphone',
  'fabulous-creations': 'macbook',
  'ai-adventure': 'imac',
  'reply-heart-monitor': 'iphone-duo',
  'megawatt-utt': 'macbook',
  'scout-mini-robot': 'imac',
  'humanlaw-association': 'macbook'
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

function Screen({ project }) {
  if (project.screenshot) {
    return (
      <img
        className="screen-img"
        src={project.screenshot}
        alt={`${project.title} preview`}
        draggable="false"
        loading="lazy"
      />
    )
  }
  return (
    <div className={`screen-fill tone-${project.tone || 'slate'}`}>
      <span>{project.short || project.title.slice(0, 2)}</span>
    </div>
  )
}

function DeviceFrame({ project }) {
  const type = DEVICE[project.id] || 'macbook'

  if (type === 'iphone-duo' && project.screens?.length >= 2) {
    return (
      <div className="df df--phone-duo">
        <div className="phone-duo">
          <img
            className="phone-duo__shot phone-duo__shot--back"
            src={project.screens[0]}
            alt={`${project.title} preview 1`}
            draggable="false"
            loading="lazy"
          />
          <img
            className="phone-duo__shot phone-duo__shot--front"
            src={project.screens[1]}
            alt={`${project.title} preview 2`}
            draggable="false"
            loading="lazy"
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
            <Screen project={project} />
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
              <Screen project={project} />
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
            <Screen project={project} />
          </div>
        </div>
        <div className="macbook__base">
          <span className="macbook__notch-bottom" />
        </div>
      </div>
    </div>
  )
}

// Liquid / water-bubble hover: drives an SVG feTurbulence + feDisplacementMap
// filter. On hover the displacement scale eases up and the turbulence flows,
// so the target (text or photo) ripples like it's seen through water. The
// filter is only attached while active, so there's zero cost at rest.
function useLiquid(filterId, maxScale) {
  const turbRef = useRef(null)
  const dispRef = useRef(null)
  const elRef = useRef(null)
  const raf = useRef(0)
  const st = useRef({ scale: 0, target: 0, t: 0 })

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const loop = () => {
    const a = st.current
    a.scale += (a.target - a.scale) * 0.12
    a.t += 0.016
    if (dispRef.current) dispRef.current.setAttribute('scale', a.scale.toFixed(2))
    if (turbRef.current) {
      const bf = 0.013 + Math.sin(a.t * 1.3) * 0.005
      turbRef.current.setAttribute('baseFrequency', `${bf.toFixed(4)} ${(bf * 1.5).toFixed(4)}`)
    }
    if (a.target === 0 && a.scale < 0.06) {
      a.scale = 0
      if (dispRef.current) dispRef.current.setAttribute('scale', '0')
      if (elRef.current) elRef.current.style.filter = ''
      raf.current = 0
      return
    }
    raf.current = requestAnimationFrame(loop)
  }

  const start = () => {
    if (!raf.current) raf.current = requestAnimationFrame(loop)
  }
  const onEnter = (e) => {
    elRef.current = e.currentTarget
    elRef.current.style.filter = `url(#${filterId})`
    st.current.target = maxScale
    start()
  }
  const onLeave = () => {
    st.current.target = 0
    start()
  }
  return { turbRef, dispRef, onEnter, onLeave }
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
  const [panel, setPanel] = useState(null) // 'about' | 'certs' | 'edu'
  const [previewPdf, setPreviewPdf] = useState(null)
  const [closing, setClosing] = useState(false)
  const [ready, setReady] = useState(false)
  const overlayOpen = Boolean(activeProject) || Boolean(panel)

  const liquidText = useLiquid('liquid-text', 11)
  const liquidPhoto = useLiquid('liquid-photo', 24)

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
        else closeAll()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlayOpen, previewPdf])

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

  useEffect(() => {
    if (cursorRef.current && overlayOpen) cursorRef.current.style.opacity = '0'
  }, [overlayOpen])

  // Lock background scroll while any overlay (panel / project / pdf) is open,
  // so the timeline underneath can't be seen scrolling behind it.
  useEffect(() => {
    if (!overlayOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
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
      el.style.transition = `transform 0.9s ${FLIP_EASE}`
      el.style.transform = 'translate(0px, 0px) scale(1)'
    })
  }, [activeProject])

  const onMoveWin = useCallback((e) => {
    const st = s.current
    if (!st.dragging) return
    const dx = e.clientX - st.startX
    if (Math.abs(dx) > 6) st.moved = true
    st.target = Math.min(st.max, Math.max(0, st.startTarget - dx))
  }, [])

  const onUpWin = useCallback(() => {
    s.current.dragging = false
    s.current.down = false
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

  const onPointerMove = (e) => {
    s.current.mx = e.clientX
    s.current.my = e.clientY
  }

  const showCursor = () => {
    if (cursorRef.current && !isMobile() && !overlayOpen) cursorRef.current.style.opacity = '1'
  }
  const hideCursor = () => {
    if (cursorRef.current) cursorRef.current.style.opacity = '0'
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
      window.setTimeout(settle, 900) // safety fallback
      el.style.transition = `transform 0.8s ${FLIP_EASE}`
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
    } else {
      window.setTimeout(finish, 380)
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

  const navItems = [
    { label: 'About', onClick: () => openPanel('about') },
    { label: 'Work', onClick: () => openPanel('work') },
    { label: 'Education', onClick: () => openPanel('edu') },
    { label: 'Certifications', onClick: () => openPanel('certs') }
  ]

  return (
    <main className="portfolio">
      {/* Liquid hover filters (water-bubble distortion for About) */}
      <svg className="liquid-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="liquid-text" x="-20%" y="-30%" width="140%" height="160%">
            <feTurbulence ref={liquidText.turbRef} type="fractalNoise" baseFrequency="0.013 0.02" numOctaves="2" seed="4" result="noise" />
            <feDisplacementMap ref={liquidText.dispRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="liquid-photo" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence ref={liquidPhoto.turbRef} type="fractalNoise" baseFrequency="0.013 0.02" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap ref={liquidPhoto.dispRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

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
        <nav aria-label="Sections">
          {navItems.map((item) => (
            <button key={item.label} onClick={item.onClick}>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <div
        className="timeline"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerEnter={showCursor}
        onPointerLeave={hideCursor}
      >
        <div className={`timeline__track${ready ? ' is-ready' : ''}`} ref={trackRef}>
          <div className="timeline__spacer" aria-hidden="true" />
          {projectsData.map((project, index) => (
            <article className="project" key={project.id} data-year={project.year} style={{ '--i': index }}>
              <button className="project__button" onClick={openProject(project)} aria-label={`Open ${project.title}`}>
                <div className="project__visual">
                  <DeviceFrame project={project} />
                </div>
                <span className="project__caption">
                  {project.title} <em>{project.year}</em>
                </span>
              </button>
            </article>
          ))}
          <div className="timeline__end">
            <span>Where it all began</span>
            <strong>2004</strong>
          </div>
        </div>
      </div>

      <p className="scroll-hint">
        Scroll or drag <span>→</span>
      </p>

      {/* Project detail */}
      {activeProject && (
        <section className={`overlay project-detail${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="back" onClick={closeAll} aria-label="Back">
            <span />
          </button>
          <div className="project-detail__inner">
            <div className="project-info project-info--expanded">
              <h2>{activeProject.title}</h2>
              <p className="project-info__role">{activeProject.role}</p>
              <p className="project-info__year">{activeProject.year}</p>
              {activeProject.description && (
                <p className="project-info__description">{activeProject.description}</p>
              )}
              {activeProject.highlights && (
                <ul className="project-info__highlights">
                  {activeProject.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="project-info__stack">
                {activeProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {activeProject.link && (
                <a className="project-info__link" href={activeProject.link} target="_blank" rel="noreferrer">
                  Visit live site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
            <div className="project-detail__visual" ref={detailVisualRef}>
              <DeviceFrame project={activeProject} />
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {panel === 'about' && (
        <section className={`overlay about${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label="About">
          <button className="back" onClick={closeAll} aria-label="Close">
            <span />
          </button>
          <div className="about__inner">
            {profile.photo && (
              <div
                className="about__photo"
                onMouseEnter={liquidPhoto.onEnter}
                onMouseLeave={liquidPhoto.onLeave}
              >
                <img src={profile.photo} alt={profile.name} />
              </div>
            )}
            <div className="about__text">
              <p
                className="about__bio"
                onMouseEnter={liquidText.onEnter}
                onMouseLeave={liquidText.onLeave}
              >
                {profile.bio.join(' ')}
              </p>
              <div className="about__links">
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target={social.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                    {social.label}
                  </a>
                ))}
                {profile.cv && (
                  <button className="about__links-btn" onClick={() => setPreviewPdf(profile.cv)}>
                    Resume
                  </button>
                )}
              </div>
              <small>{profile.location}</small>
            </div>
          </div>
        </section>
      )}

      {/* Work experience */}
      {panel === 'work' && (
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label="Work">
          <button className="back" onClick={closeAll} aria-label="Close">
            <span />
          </button>
          <div className="listing__inner listing__inner--wide">
            <h3 className="listing__title">Work</h3>
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
                    <span className="listing__sub">{item.position}</span>
                    <span className="listing__meta">{item.location} <em>{item.period}</em></span>
                    <span className="listing__note">{item.note}</span>
                    {item.certificate && (
                      <button className="listing__cta" onClick={() => setPreviewPdf(item.certificate)}>
                        {item.certificateLabel || 'View certificate'} <span aria-hidden="true">↗</span>
                      </button>
                    )}
                    {item.link && item.linkLabel && (
                      <a className="listing__cta" href={item.link} target="_blank" rel="noreferrer">
                        {item.linkLabel} <span aria-hidden="true">↗</span>
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
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label="Certifications">
          <button className="back" onClick={closeAll} aria-label="Close">
            <span />
          </button>
          <div className="listing__inner listing__inner--split">
            <div className="listing__col">
              <h3 className="listing__title">Certifications</h3>
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
              <h3 className="listing__title">Mentions</h3>
              <ul className="listing__list">
                {mentions.map((m) => (
                  <li key={m.title}>
                    <Logo src={m.logo} name={m.outlet} big />
                    <div className="listing__body">
                      <a className="listing__main listing__main--link" href={m.link} target="_blank" rel="noreferrer">
                        {m.outlet} <span aria-hidden="true">↗</span>
                      </a>
                      <span className="listing__note">{m.title}</span>
                      <span className="listing__meta">{m.year}</span>
                      <a className="listing__cta" href={m.link} target="_blank" rel="noreferrer">
                        Read the article <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Education */}
      {panel === 'edu' && (
        <section className={`overlay listing${closing ? ' is-closing' : ''}`} role="dialog" aria-modal="true" aria-label="Education">
          <button className="back" onClick={closeAll} aria-label="Close">
            <span />
          </button>
          <div className="listing__inner">
            <h3 className="listing__title">Education</h3>
            <ul className="listing__list">
              {education.map((e) => (
                <li key={e.school}>
                  <Logo src={e.logo} name={e.school} big />
                  <div className="listing__body">
                    <span className="listing__main">{e.school}</span>
                    <span className="listing__sub">{e.degree}</span>
                    <span className="listing__meta">
                      {e.location} <em>{e.period}</em>
                    </span>
                    <span className="listing__note">{e.note}</span>
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
                Download <span aria-hidden="true">↓</span>
              </a>
              <button className="about__cv-btn about__cv-btn--ghost" onClick={() => setPreviewPdf(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
