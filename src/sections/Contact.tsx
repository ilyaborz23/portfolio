import { SectionHeading } from '../components/SectionHeading'
import { revealClass, useReveal } from '../hooks/useReveal'
import { SOCIAL_LINKS } from '../data/socials'

export default function Contact() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} id="contact" className="relative z-10 flex min-h-[80vh] flex-col justify-center px-5 pb-10 pt-20 sm:px-8 md:px-10">
      <SectionHeading index="04 — Contact" title="Let's build something" visible={visible} />

      <div className={`max-w-2xl ${revealClass(visible)}`} style={{ transitionDelay: visible ? '150ms' : '0ms' }}>
        <p className="max-w-lg text-[18px] leading-relaxed text-ink/75 sm:text-[20px]">
          Looking for a junior full-stack developer, or have an idea you want to bring to life? Let's talk.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 rounded-full border border-ink/20 bg-night/50 py-2 pl-3 pr-6 text-[16px] font-semibold text-ink backdrop-blur-md transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-night"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10 transition-colors duration-200 group-hover:bg-night/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </svg>
                </span>
                {link.label}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-[14px] text-ink/50">
        <span>© {new Date().getFullYear()} Ilya Borzyh</span>
        <a href="#top" className="transition-colors duration-200 hover:text-ink">
          Back to top ↑
        </a>
      </footer>
    </section>
  )
}
