import { revealClass } from '../hooks/useReveal'

export function SectionHeading({ index, title, visible }: { index: string; title: string; visible: boolean }) {
  return (
    <div className={`mb-10 ${revealClass(visible)}`}>
      <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-ink/50">{index}</p>
      <h2 className="text-[44px] font-semibold leading-none text-ink sm:text-[64px]">{title}</h2>
    </div>
  )
}
