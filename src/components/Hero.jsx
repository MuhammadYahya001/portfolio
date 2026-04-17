import { useScrollReveal } from '../hooks/useScrollReveal';

function Tag({ children }) {
  return (
    <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-300 transition-premium hover:border-cyan-400/50 hover:bg-cyan-400/10">
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="btn-primary group inline-flex items-center gap-2"
    >
      {children}
      <span className="transition-premium group-hover:translate-x-1">→</span>
    </a>
  );
}

function SecondaryButton({ href, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="btn-secondary inline-flex items-center gap-2"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="top"
      className="scroll-reveal relative px-4 py-20 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            {/* Badge */}
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-cyan-300">
                  Full-Stack Engineer • Cybersecurity Focus
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Yahya Jan
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl">
              Building secure, scalable software with a passion for ethical hacking, clean architecture, and practical learning. Let's create something exceptional.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="#projects">
                View My Work
              </PrimaryButton>
              <SecondaryButton href="mailto:muhammadyahyajan001@gmail.com">
                Get in Touch
              </SecondaryButton>
            </div>

            {/* Skills/Tech Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              <Tag>React • Vite</Tag>
              <Tag>Python • C++</Tag>
              <Tag>Linux • Security</Tag>
              <Tag>Full-Stack</Tag>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 border-t border-slate-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-cyan-400">4+</div>
                <p className="text-sm text-slate-400">Major Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <p className="text-sm text-slate-400">Years Learning</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <p className="text-sm text-slate-400">Open Source</p>
              </div>
            </div>
          </div>

          {/* Terminal Card */}
          <div className="card-premium relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition-premium hover:opacity-100" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/40" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
                  <div className="h-3 w-3 rounded-full bg-green-500/40" />
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 font-mono text-xs text-slate-400">
                  ~/portfolio
                </span>
              </div>

              <pre className="mt-6 overflow-x-auto rounded-lg bg-slate-950/80 p-4 font-mono text-sm leading-relaxed text-slate-300">
                <code>{`$ whoami
> Muhammad Yahya Jan

$ cat skills.json
{
  "focus": "Security & Systems",
  "backend": ["Python", "C++"],
  "frontend": ["React", "TypeScript"],
  "interests": [
    "ethical_hacking",
    "clean_code",
    "open_source"
  ]
}

$ echo "Always learning, always building"
> Always learning, always building`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
