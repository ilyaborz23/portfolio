const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ilyaborz23' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ilya-borzyh/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ilyaborzzz/' },
]

export default function SocialLinks() {
  return (
    <div className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:right-8 md:flex">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-[0.4em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:text-[15px]"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
