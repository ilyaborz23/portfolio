import { SectionHeading } from '../components/SectionHeading'
import { revealClass, useReveal } from '../hooks/useReveal'

const PARAGRAPHS = [
  "Hi, I'm Ilya Borzyh — a 23-year-old full-stack developer based in Israel.",
  "I'm studying full-stack development at John Bryce, building real-world projects and sharpening my skills across the entire stack — from clean, responsive interfaces to backend logic, APIs and databases.",
  "I like turning ideas into functional, well-designed products, solving problems through code and constantly learning something new. I'm still growing, but I'm already building — and that's what this portfolio is all about.",
]

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} id="about" className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10">
      <SectionHeading index="01 — About" title="About me" visible={visible} />
      <div
        className={`max-w-2xl space-y-5 rounded-3xl border border-ink/10 bg-night/45 px-6 py-7 text-[17px] leading-relaxed text-ink/80 backdrop-blur-md sm:px-9 sm:py-9 sm:text-[19px] ${revealClass(visible)}`}
        style={{ transitionDelay: visible ? '150ms' : '0ms' }}
      >
        {PARAGRAPHS.map((text, index) => (
          <p key={index} className={index === 0 ? 'text-[20px] font-medium text-ink sm:text-[23px]' : undefined}>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
