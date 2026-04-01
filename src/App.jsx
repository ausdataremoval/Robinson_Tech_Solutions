import { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import ADRSection from './components/ADRSection.jsx'
import SovereignTankSection from './components/SovereignTankSection.jsx'
import ContactSection from './components/ContactSection.jsx'

/* ── Scroll reveal ────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* ── Paperform embed ──────────────────────────────────────── */
function usePaperform() {
  useEffect(() => {
    if (document.querySelector('script[data-paperform]')) return
    const script = document.createElement('script')
    script.src = 'https://paperform.co/__embed.min.js'
    script.setAttribute('data-paperform', 'true')
    document.body.appendChild(script)
  }, [])
}

/* ── System Banner ────────────────────────────────────────── */
function SystemBanner() {
  return (
    <header className="system-banner" role="banner">
      <div className="system-banner__left">
        <span className="system-banner__secure">[SECURE]</span>
        <span>ROBINSON TECH SOLUTIONS&nbsp;&nbsp;|&nbsp;&nbsp;PERTH WA</span>
      </div>
      <div className="system-banner__right">
        <a href="tel:1300504079" style={{ color: 'inherit', textDecoration: 'none' }}>
          1300 504 079
        </a>
      </div>
    </header>
  )
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div>
          <p className="footer__logo">ROBINSON TECH SOLUTIONS</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} Robinson Tech Solutions. All rights reserved.
            <br />
            AUS Data Removal and Sovereign Tank are divisions of Robinson Tech Solutions.
          </p>
        </div>
        <div className="footer__right">
          <p className="footer__detail">Perth WA</p>
          <p className="footer__detail">Operating nationally</p>
          <p className="footer__detail">
            <a href="tel:1300504079" style={{ color: 'inherit', textDecoration: 'none' }}>
              1300 504 079
            </a>
          </p>
        </div>
      </div>
      <div className="footer__bottom">Built in Perth.</div>
    </footer>
  )
}

/* ── App ──────────────────────────────────────────────────── */
export default function App() {
  useScrollReveal()
  usePaperform()

  return (
    <>
      <SystemBanner />
      <main>
        <Hero />
        <Philosophy />
        <ADRSection />
        <SovereignTankSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
