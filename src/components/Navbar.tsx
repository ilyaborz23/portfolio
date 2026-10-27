import { useEffect, useState } from 'react'
import { SocialIcon } from './SocialLinks'
import { SOCIAL_LINKS } from '../data/socials'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-center border-b px-5 transition-colors duration-300 sm:h-[80px] sm:px-8 ${
          scrolled && !menuOpen ? 'border-ink/10 bg-night/70 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <a
          href="#top"
          className="fixed left-5 top-4 flex h-10 items-center text-[17px] font-semibold tracking-tight text-ink sm:left-8 sm:top-5"
          style={{ fontFamily: 'var(--font-display)' }}
          onClick={() => setMenuOpen(false)}
        >
          Ilya Borzyh<span className="text-ink/40">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-ink/15 bg-night/40 p-1 text-[15px] font-medium text-ink backdrop-blur-md md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-[0.45em] text-ink/80 transition-colors duration-200 hover:bg-ink hover:text-night"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="fixed right-5 top-4 z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/20 bg-night/40 backdrop-blur-md sm:right-8 sm:top-5 md:hidden"
        >
          <span
            className={`h-[2px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-10 bg-night/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col items-start gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[40px] font-semibold leading-tight text-ink transition-colors duration-200 hover:text-ink/60"
              style={{ fontFamily: 'var(--font-display)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </div>
      </div>
    </>
  )
}
