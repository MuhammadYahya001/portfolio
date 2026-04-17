const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function IconLink({ href, label }) {
  return (
    <a
      className='inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white'
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {label.charAt(0)}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        <a href='#top' className='group inline-flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]' />
          <span className='font-semibold tracking-tight text-slate-100'>
            Muhammad Yahya Jan
          </span>
          <span className='hidden text-sm text-slate-400 sm:inline'>
            / Portfolio
          </span>
        </a>

        <nav className='hidden items-center gap-6 md:flex'>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='text-sm text-slate-300 hover:text-white'
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <IconLink href='mailto:muhammadyahyajan001@gmail.com' label='Email' />
          <IconLink href='https://github.com/MuhammadYahya001' label='GitHub' />
          <IconLink href='https://www.linkedin.com/in/muhammad-yahya-jan-03b344325' label='LinkedIn' />
        </div>
      </div>

      <div className='mx-auto flex max-w-6xl gap-4 px-4 pb-3 md:hidden'>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className='text-sm text-slate-300 hover:text-white'
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
