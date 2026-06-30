import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const out = new URL('../.audit/', import.meta.url)
await fs.mkdir(out, { recursive: true })
const path = name => fileURLToPath(new URL(name, out))

const browser = await chromium.launch({ headless: true, executablePath: chrome })

async function inspect(name, url, local = false) {
  const page = await browser.newPage({ viewport: { width: 1902, height: 916 }, deviceScaleFactor: 1 })
  const errors = []
  page.on('console', message => message.type() === 'error' && errors.push(message.text()))
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 })
  await page.waitForTimeout(1800)
  await page.screenshot({ path: path(`${name}-initial.png`) })

  const metrics = await page.evaluate(() => {
    const box = element => {
      if (!element) return null
      const r = element.getBoundingClientRect()
      return { x: +r.x.toFixed(1), y: +r.y.toFixed(1), width: +r.width.toFixed(1), height: +r.height.toFixed(1) }
    }
    const text = value => [...document.querySelectorAll('body *')].find(el => el.children.length === 0 && el.textContent?.trim() === value)
    const images = [...document.images].filter(img => {
      const r = img.getBoundingClientRect()
      return r.width > 150 && r.height > 150
    })
    return {
      viewport: { width: innerWidth, height: innerHeight },
      name: box(text(location.hostname.includes('mikematas') ? 'Mike Matas' : 'Lakhdar Berache')),
      year: box(text('2026')),
      nav: box(document.querySelector('nav') || document.querySelector('[class*=header-nav]')),
      firstTitle: box(document.querySelector('h2')),
      largeImages: images.slice(0, 5).map(box),
      bodyFont: getComputedStyle(document.body).fontFamily,
      bodyFontSize: getComputedStyle(document.body).fontSize
    }
  })

  await page.mouse.wheel(0, 1100)
  await page.waitForTimeout(1200)
  await page.screenshot({ path: path(`${name}-scrolled.png`) })

  if (local) {
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(800)
    await page.locator('.project__button').first().click({ force: true })
    await page.waitForTimeout(700)
    await page.screenshot({ path: path(`${name}-project.png`) })
    const projectDialog = await page.getByRole('dialog').isVisible()
    await page.getByRole('button', { name: 'Back' }).click()
    await page.waitForTimeout(500)
    await page.getByRole('button', { name: 'About' }).click()
    await page.waitForTimeout(500)
    await page.screenshot({ path: path(`${name}-about.png`) })
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
    await page.getByRole('button', { name: 'Work' }).click()
    const workDialog = await page.getByRole('dialog', { name: 'Work' }).isVisible()
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
    await page.getByRole('button', { name: 'Certifications' }).click()
    const certDialog = await page.getByRole('dialog', { name: 'Certifications' }).isVisible()
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
    await page.getByRole('button', { name: 'Education' }).click()
    const eduDialog = await page.getByRole('dialog', { name: 'Education' }).isVisible()
    metrics.interactions = { projectDialog, workDialog, certDialog, eduDialog }
  } else {
    const play = page.locator('[class*=galleryContent_playButton]:visible').first()
    if (await play.count()) {
      await play.click({ timeout: 5_000 })
      await page.waitForTimeout(900)
      await page.screenshot({ path: path(`${name}-project.png`) })
      metrics.projectOpened = await page.locator('[class*=backButton_root]').isVisible().catch(() => false)
      await page.locator('[class*=backButton_root]').click().catch(() => {})
    }
    await page.getByText('About', { exact: true }).first().click()
    await page.waitForTimeout(700)
    await page.screenshot({ path: path(`${name}-about.png`) })
    metrics.aboutOpened = await page.locator('[class*=about_root]').isVisible().catch(() => false)
  }

  metrics.errors = errors
  await page.close()
  return metrics
}

const reference = await inspect('reference', 'https://mikematas.com/')
const local = await inspect('local', 'http://127.0.0.1:4173/', true)

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })
await mobile.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await mobile.screenshot({ path: path('local-mobile.png'), fullPage: true })
const mobileMetrics = await mobile.evaluate(() => ({
  width: document.documentElement.scrollWidth,
  height: document.documentElement.scrollHeight,
  hasHorizontalOverflow: document.documentElement.scrollWidth > innerWidth
}))
await mobile.close()

await fs.writeFile(new URL('report.json', out), JSON.stringify({ reference, local, mobile: mobileMetrics }, null, 2))
console.log(JSON.stringify({ reference, local, mobile: mobileMetrics }, null, 2))
await browser.close()
