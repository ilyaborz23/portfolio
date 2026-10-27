type Project = {
  title: string
  description: string
  tags?: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Weather Info',
    description:
      'Current weather for any locality in Israel. Search in Hebrew or English, see temperature, feels-like, humidity, wind and local time, with search history saved in the browser.',
    tags: ['React', 'TypeScript', 'Vite', 'React Router'],
    link: 'https://github.com/ilyaborz23/Weather',
  },
  {
    title: 'Work Schedule',
    description:
      'Weekly shift scheduling for a hospital department. Employees request shifts, the admin approves them and builds the week, and the schedule exports to Excel. English and Hebrew, with scheduling rules checked on the server.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL'],
    link: 'https://github.com/ilyaborz23/Work-schedule',
  },
]

export default function MyProjects() {
  return (
    <section id="projects" className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10">
      <h2 className="mb-6 inline-block w-fit rounded-full border border-white/40 px-6 py-2 text-[40px] font-medium text-white sm:text-[48px]">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.title} className="flex flex-col rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-[20px] font-medium text-white">{project.title}</h3>
            <p className="text-[15px] text-white/70">{project.description}</p>
            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-[13px] text-white/80">{tag}</span>
                ))}
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block w-fit rounded-full border border-white/40 px-5 py-2 text-[14px] text-white transition-colors hover:bg-white hover:text-black"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
