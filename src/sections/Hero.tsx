import { useEffect, useState, type ReactNode } from 'react'
import { revealClass } from '../hooks/useReveal'

function Step({ visible, delay, children }: { visible: boolean; delay: number; children: ReactNode }) {
  return (
    <div className={revealClass(visible)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="top" className="relative z-10 flex min-h-screen flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:px-10">
      <div className="max-w-2xl">
        <Step visible={visible} delay={0}>
          <span className="inline-block rounded-full bg-night/40 px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/70 backdrop-blur-sm">
            Full-stack developer · Israel
          </span>
        </Step>

        <Step visible={visible} delay={120}>
          <h1 className="mt-6 text-[56px] font-semibold leading-[0.95] text-ink sm:text-[88px] lg:text-[104px]">
            Ilya
            <br />
            Borzyh
          </h1>
        </Step>

        <Step visible={visible} delay={240}>
          <p className="mt-6 max-w-md text-[18px] leading-relaxed text-ink/75 sm:text-[20px]">
            I build clean, responsive web apps — from the interface down to the API and the database.
          </p>
        </Step>

        <Step visible={visible} delay={360}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-7 py-3 text-[15px] font-semibold text-night transition-transform duration-200 hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/30 bg-night/30 px-7 py-3 text-[15px] font-semibold text-ink backdrop-blur-sm transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-night"
            >
              Get in touch
            </a>
          </div>
        </Step>
      </div>
    </section>
  )
}
