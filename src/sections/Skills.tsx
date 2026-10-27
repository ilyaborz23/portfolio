import { SectionHeading } from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
      { name: 'React', url: 'https://react.dev' },
    ],
    span: 'sm:col-span-3',
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', url: 'https://nodejs.org' },
      { name: 'Python', url: 'https://www.python.org' },
      { name: 'REST API', url: 'https://restfulapi.net' },
    ],
    span: 'sm:col-span-2',
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', url: 'https://www.mongodb.com' },
      { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    ],
    span: 'sm:col-span-2',
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', url: 'https://git-scm.com' },
      { name: 'GitHub', url: 'https://github.com' },
    ],
    span: 'sm:col-span-3',
  },
]

export default function Skills() {
  const { ref: sectionRef, visible } = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <SectionHeading index="02 — Skills" title="What I work with" visible={visible} />

      <div className="grid max-w-2xl gap-6 sm:grid-cols-5">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={category.name}
            className={`group rounded-3xl border border-ink/10 bg-night/45 px-6 py-5 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/40 hover:bg-night/60 ${category.span} ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: visible ? `${index * 140}ms` : '0ms' }}
          >
            <h3 className="mb-4 text-[22px] font-medium text-ink transition-colors duration-300">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-4 py-1.5 text-[15px] text-ink transition-all duration-200 hover:!-translate-y-0.5 hover:!border-ink hover:!bg-ink hover:!text-night group-hover:border-ink/60"
                >
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
