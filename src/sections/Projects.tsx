import { SectionHeading } from '../components/SectionHeading'
import { revealClass, useReveal } from '../hooks/useReveal'

type Project = {
  title: string
  description: string
  tags?: string[]
  link?: string
  live?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Work Schedule',
    description:
      'Weekly shift scheduling for a hospital department. Employees request shifts, the admin approves them and builds the week, and the schedule exports to Excel. English and Hebrew, with scheduling rules checked on the server.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL'],
    link: 'https://github.com/ilyaborz23/Work-schedule',
    live: 'https://work-schedule-production-835b.up.railway.app',
  },
  {
    title: 'Weather Info',
    description:
      'Current weather for any locality in Israel. Search in Hebrew or English, see temperature, feels-like, humidity, wind and local time, with search history saved in the browser.',
    tags: ['React', 'TypeScript', 'Vite', 'React Router'],
    link: 'https://github.com/ilyaborz23/Weather',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} id="projects" className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10">
      <SectionHeading index="03 — Projects" title="Selected work" visible={visible} />
      <div className="grid max-w-5xl gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className={`group flex flex-col rounded-3xl border border-ink/10 bg-night/60 p-7 backdrop-blur-md hover:border-ink/30 sm:p-8 ${revealClass(visible)}`}
            style={{ transitionDelay: visible ? `${150 + index * 140}ms` : '0ms' }}
          >
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h3 className="text-[26px] font-semibold text-ink">{project.title}</h3>
              <span className="text-[13px] font-medium tracking-[0.2em] text-ink/40">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="text-[16px] leading-relaxed text-ink/70">{project.description}</p>
            {project.tags && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-ink/10 px-3 py-1 text-[13px] text-ink/80">{tag}</span>
                ))}
              </div>
            )}
            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-5 py-2 text-[14px] font-semibold text-night transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Live demo ↗
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-5 py-2 text-[14px] font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-night"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
