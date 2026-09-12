const PROJECTS = [
  { title: 'Project One', description: 'A short description of this project.' },
  { title: 'Project Two', description: 'A short description of this project.' },
]

export default function MyProjects() {
  return (
    <section id="projects" className="relative z-10 flex min-h-screen flex-col justify-center px-5 py-20 sm:px-8 md:px-10">
      <h2 className="mb-6 inline-block w-fit rounded-full border border-white/40 px-6 py-2 text-[40px] font-medium text-white sm:text-[48px]">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.title} className="rounded-2xl border border-white/20 bg-black/60 p-6 backdrop-blur-md">
            <h3 className="mb-2 text-[20px] font-medium text-white">{project.title}</h3>
            <p className="text-[15px] text-white/70">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
