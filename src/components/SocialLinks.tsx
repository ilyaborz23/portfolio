import { SOCIAL_LINKS, type SocialLink } from '../data/socials'

export function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      title={link.label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 bg-night/40 text-ink backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-night"
    >
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
    </a>
  )
}

export default function SocialLinks() {
  return (
    <div className="fixed right-5 top-4 z-[60] hidden items-center gap-3 sm:right-8 sm:top-5 md:flex">
      {SOCIAL_LINKS.map((link) => (
        <SocialIcon key={link.label} link={link} />
      ))}
    </div>
  )
}
