import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'My Projects', href: '#projects' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-center px-5 py-4 sm:px-8 sm:py-5">
        <div className="hidden flex-row items-center gap-3 text-[16px] text-white md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-center rounded-full border border-white/40 px-5 py-[0.4em] transition-colors duration-200 hover:bg-white hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="fixed right-5 top-4 z-50 flex flex-col items-center gap-[5px] sm:right-8 sm:top-5 md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-8 bg-black/90 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-[0.3em] text-[24px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
