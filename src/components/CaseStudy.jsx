import { useEffect, useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useMotionValue,
  animate
} from 'framer-motion'
import { pick } from '../i18n'

const EASE = [0.16, 1, 0.3, 1]

// Animated counter for a single metric value. Numeric strings ('6', '15')
// count up from 0 the first time the block scrolls into view; anything else
// ('E2E') is printed verbatim. A hidden ghost holding the final value reserves
// the layout width so the number never nudges its neighbours while it ticks.
function CountUp({ raw, reduce, root }) {
  const trimmed = String(raw).trim()
  const isInt = /^\d+$/.test(trimmed)
  const target = isInt ? parseInt(trimmed, 10) : 0
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, root, margin: '-12% 0px' })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!isInt) return
    if (reduce) {
      count.set(target)
      return
    }
    if (!inView) return
    const controls = animate(count, target, { duration: 1.15, ease: EASE })
    return () => controls.stop()
  }, [inView, isInt, target, reduce, count])

  if (!isInt) {
    return <span ref={ref}>{raw}</span>
  }

  return (
    <span className="cs-count" ref={ref}>
      <motion.span className="cs-count__live">{display}</motion.span>
      <span className="cs-count__ghost" aria-hidden="true">
        {trimmed}
      </span>
    </span>
  )
}

// One node in the architecture timeline. Keeps the original pop-in on the dot,
// and adds a solid fill that lights up as the scroll-driven "head" passes it.
function FlowStep({ row, i, total, progress, reduce, riseProps, t }) {
  const threshold = total > 1 ? i / (total - 1) : 0
  const fill = useTransform(
    progress,
    [Math.max(0, threshold - 0.05), threshold + 0.001],
    [0, 1],
    { clamp: true }
  )

  return (
    <motion.div className="cs-step" {...riseProps}>
      <motion.span
        className="cs-step__dot"
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { scale: 0, opacity: 0 }}
        whileInView={reduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-4% 0px' }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
      >
        <motion.span
          className="cs-step__dot-fill"
          style={{ opacity: reduce ? 0 : fill, scale: reduce ? 0 : fill }}
        />
      </motion.span>
      <div className="cs-step__content">
        <span className="cs-flow__tag">{t(row.tag)}</span>
        <div className="cs-flow__nodes">
          {row.nodes.map((n, j) => (
            <div className="cs-node" key={j}>
              <span className="cs-node__title">{t(n.title)}</span>
              <span className="cs-node__desc">{t(n.desc)}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Title wordmark whose outer letters converge to the centre on mount: the
// first letter flies in from the left, the last from the right, and any middle
// letter reveals on the spot — they meet in the middle to spell the name.
function ConvergingTitle({ text, reduce }) {
  const letters = [...text]
  const mid = (letters.length - 1) / 2
  return (
    <h1 className="cs-hero__title cs-hero__title--split" aria-label={text}>
      {letters.map((ch, i) => {
        const dx = i < mid ? -160 : i > mid ? 160 : 0
        const initial = reduce
          ? { opacity: 0 }
          : { x: dx, opacity: 0, scale: dx === 0 ? 0.7 : 1 }
        const animate = reduce
          ? { opacity: 1 }
          : { x: 0, opacity: 1, scale: 1 }
        return (
          <motion.span
            key={i}
            className="cs-hero__letter"
            aria-hidden="true"
            initial={initial}
            animate={animate}
            transition={{ duration: 0.95, ease: EASE, delay: 0.2 }}
          >
            {ch}
          </motion.span>
        )
      })}
    </h1>
  )
}

// A full-screen, scroll-revealed case study rendered on top of the project
// detail. Motion is driven by framer-motion: a reading-progress hairline tracks
// the overlay's own scroll, the hero unmasks on mount, every block rises into
// place the first time it scrolls into view, the architecture line draws itself
// as you pass through it, and the metrics count up. Everything collapses to a
// soft fade / static state when prefers-reduced-motion is set.
export default function CaseStudy({ project, lang, T, onClose }) {
  const reduce = useReducedMotion()
  const cs = project.caseStudy
  const t = (v) => pick(v, lang)

  // The overlay scrolls itself (position:fixed; inset:0; overflow:auto), NOT
  // the window — so every useScroll here is bound to this container ref.
  const scrollRef = useRef(null)
  const flowRef = useRef(null)

  // Reading progress across the whole overlay → the top hairline.
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const readProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4
  })

  // Progress through the architecture section → the drawing timeline line.
  const { scrollYProgress: flowRaw } = useScroll({
    target: flowRef,
    container: scrollRef,
    offset: ['start 0.85', 'end 0.6']
  })
  const lineScaleY = useSpring(flowRaw, {
    stiffness: 90,
    damping: 26,
    mass: 0.5
  })
  const headTop = useTransform(lineScaleY, (v) => `${v * 100}%`)

  // Reveal preset for on-scroll blocks — a gentle rise, once per element.
  const rise = (delay = 0) =>
    reduce
      ? {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.4, delay }
        }
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.62, ease: EASE, delay }
        }

  // Hero plays immediately (it is above the fold), staggering its children.
  const heroChild = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
      }

  // Tagline gets a masked reveal (clip up from below) for extra life.
  const heroTagline = reduce
    ? heroChild
    : {
        hidden: { opacity: 0, y: 20, clipPath: 'inset(0 0 55% 0)' },
        show: {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          transition: { duration: 0.75, ease: EASE }
        }
      }

  return (
    <motion.section
      ref={scrollRef}
      className="overlay case-study"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — ${T.caseStudy}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
    >
      <motion.div
        className="cs-progress"
        style={{ scaleX: readProgress }}
        aria-hidden="true"
      />

      <button className="back" onClick={onClose} aria-label={T.close}>
        <span />
      </button>

      <div className="case-study__scroll">
        <div className="case-study__inner">
          {/* Hero */}
          <motion.header
            className="cs-hero"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          >
            <motion.p variants={heroChild} className="cs-hero__award">
              {t(cs.award)}
            </motion.p>
            <ConvergingTitle text={project.title} reduce={reduce} />
            <motion.p variants={heroTagline} className="cs-hero__tagline">
              {t(cs.tagline)}
            </motion.p>
            <motion.div variants={heroChild} className="cs-hero__meta">
              {cs.meta.map((m) => (
                <div className="cs-meta" key={t(m.label)}>
                  <span className="cs-meta__label">{t(m.label)}</span>
                  <span className="cs-meta__value">{t(m.value)}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={heroChild} className="cs-hero__links">
              {cs.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {t(l.label)} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </motion.div>
          </motion.header>

          {/* Narrative sections */}
          {cs.sections.map((sec) => (
            <motion.section className="cs-section" key={sec.n} {...rise()}>
              <div className="cs-section__head">
                <span className="cs-section__n">{sec.n}</span>
                <span className="cs-section__kicker">{t(sec.kicker)}</span>
              </div>
              <h2 className="cs-section__title">{t(sec.title)}</h2>
              <div className="cs-section__body">
                {sec.body.map((p, i) => (
                  <p key={i}>{t(p)}</p>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Architecture — a light vertical timeline, no boxes */}
          <div className="cs-flow">
            <motion.h2 className="cs-block__title" {...rise()}>
              {T.architecture}
            </motion.h2>
            <div className="cs-flow__chain" ref={flowRef}>
              <div className="cs-flow__rail" aria-hidden="true">
                <motion.span
                  className="cs-flow__line"
                  style={{ scaleY: reduce ? 1 : lineScaleY }}
                />
                {!reduce && (
                  <motion.span className="cs-flow__head" style={{ top: headTop }} />
                )}
              </div>
              {cs.flow.map((row, i) => (
                <FlowStep
                  key={i}
                  row={row}
                  i={i}
                  total={cs.flow.length}
                  progress={lineScaleY}
                  reduce={reduce}
                  riseProps={rise(0.02)}
                  t={t}
                />
              ))}
            </div>
            <motion.p className="cs-flow__pivot" {...rise()}>
              {t(cs.pivot)}
            </motion.p>
          </div>

          {/* Key points */}
          <div className="cs-block">
            <motion.h2 className="cs-block__title" {...rise()}>
              {T.keyPoints}
            </motion.h2>
            <div className="cs-keys">
              {cs.keyPoints.map((k, i) => (
                <motion.div className="cs-key" key={k.n} {...rise(i * 0.05)}>
                  <span className="cs-key__n">{k.n}</span>
                  <h3 className="cs-key__title">{t(k.title)}</h3>
                  <p className="cs-key__body">{t(k.body)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics + result */}
          <div className="cs-block">
            <motion.h2 className="cs-block__title" {...rise()}>
              {T.outcome}
            </motion.h2>
            <div className="cs-metrics">
              {cs.metrics.map((m, i) => (
                <motion.div className="cs-metric" key={i} {...rise(i * 0.06)}>
                  <span className="cs-metric__value">
                    <CountUp raw={m.value} reduce={reduce} root={scrollRef} />
                  </span>
                  <span className="cs-metric__label">{t(m.label)}</span>
                </motion.div>
              ))}
            </div>
            <motion.blockquote className="cs-result" {...rise(0.05)}>
              {t(cs.result)}
            </motion.blockquote>
          </div>

          <motion.div className="cs-outro" {...rise()}>
            {cs.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {t(l.label)} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
