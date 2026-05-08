import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = LINKS.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-premium ${
        isScrolled
          ? 'border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md shadow-lg'
          : 'border-b border-slate-800/30 bg-slate-950/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 focus-ring rounded-lg"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(34,197,94,.6)] group-hover:shadow-[0_0_25px_rgba(34,197,94,.8)] transition-premium" />
          <span className="text-lg font-bold tracking-tight text-white">
            MYJ
          </span>
          <span className="hidden text-xs text-slate-400 sm:inline">
            / Cyber Security Specialist
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const isActive = activeSection === l.href.replace('#', '');
            return (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive ? 'page' : undefined}
              className={`text-sm font-medium transition-premium focus-ring rounded py-1 px-2 ${
                isActive
                  ? 'text-green-300 bg-green-400/10'
                  : 'text-slate-300 hover:text-green-400'
              }`}
            >
              {l.label}
            </a>
          )})}
        </nav>

        <div className="flex items-center gap-3">
          <NavIconLink
            href="mailto:muhammadyahyajan001@gmail.com"
            label="Email"
            title="Send email"
          />
          <NavIconLink
            href="https://github.com/MuhammadYahya001"
            label="GitHub"
            title="Visit GitHub"
            external
          />
          <NavIconLink
            href="https://www.linkedin.com/in/muhammad-yahya-jan-03b344325"
            label="LinkedIn"
            title="Visit LinkedIn"
            external
          />
        </div>
      </div>

      {/* Mobile menu indicator */}
      <div className="mx-auto flex max-w-6xl gap-3 px-4 pb-3 md:hidden">
        {LINKS.map((l) => {
          const isActive = activeSection === l.href.replace('#', '');
          return (
          <a
            key={l.href}
            href={l.href}
            aria-current={isActive ? 'page' : undefined}
            className={`text-xs font-medium transition-premium focus-ring rounded px-2 py-1 ${
              isActive
                ? 'text-green-300 bg-green-400/10'
                : 'text-slate-400 hover:text-green-400'
            }`}
          >
            {l.label}
          </a>
        )})}
      </div>
    </header>
  );
}

function NavIconLink({ href, label, title, external }) {
  return (
    <a
      href={href}
      title={title}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 p-2.5 text-slate-300 transition-premium hover:border-green-400/50 hover:bg-slate-900 hover:text-green-400 focus-ring"
      aria-label={label}
    >
      <span className="text-sm font-medium">{label.charAt(0)}</span>
    </a>
  );
}
