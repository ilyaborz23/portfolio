import { useEffect, useRef, useState } from 'react'

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
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <h2
        className={`mb-10 inline-block w-fit rounded-full border border-white/40 px-6 py-2 text-[40px] font-medium text-white transition-all duration-700 ease-out sm:text-[48px] ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Skills
      </h2>

      <div className="grid max-w-2xl gap-6 sm:grid-cols-5">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={category.name}
            className={`group rounded-3xl border border-white/40 bg-black/10 px-6 py-5 backdrop-blur-[2px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white hover:bg-black/15 ${category.span} ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: visible ? `${index * 140}ms` : '0ms' }}
          >
            <h3 className="mb-4 text-[22px] font-medium text-white transition-colors duration-300">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-4 py-1.5 text-[15px] text-white transition-all duration-200 hover:!-translate-y-0.5 hover:!border-white hover:!bg-white hover:!text-black group-hover:border-white/70"
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
