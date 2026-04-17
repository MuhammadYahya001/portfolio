import { useScrollReveal } from '../hooks/useScrollReveal';
import { TypeWriter } from './TypeWriter';

function Tag({ children }) {
  return (
    <span className="inline-block rounded-full border border-green-400/30 bg-green-400/5 px-3 py-1 font-mono text-xs text-green-300 transition-premium hover:border-green-400/50 hover:bg-green-400/10">
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="btn-primary group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
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
      className="btn-secondary border-green-700/50 hover:border-green-600 hover:bg-green-900/60 inline-flex items-center gap-2"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const ref = useScrollReveal();
  const description = "Cybersecurity enthusiast with a passion for ethical hacking, penetration testing, and building secure systems. Dedicated to mastering advanced security concepts and protecting digital infrastructure.";

  return (
    <section
      ref={ref}
      id="top"
      className="scroll-reveal relative px-4 py-20 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-300">
                  Cyber Security Specialist
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Muhammad
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                Yahya Jan
              </span>
            </h1>

            {/* Animated Terminal Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl min-h-32">
              <span className="text-slate-400">$ </span>
              <TypeWriter text={description} speed={70} delay={300} />
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
              <Tag>Ethical Hacking</Tag>
              <Tag>Penetration Testing</Tag>
              <Tag>Linux Security</Tag>
              <Tag>Network Security</Tag>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 border-t border-slate-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-green-400">4+</div>
                <p className="text-sm text-slate-400">Security Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">5+</div>
                <p className="text-sm text-slate-400">Years Learning</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">100%</div>
                <p className="text-sm text-slate-400">Open Source</p>
              </div>
            </div>
          </div>

          {/* Profile Picture & Terminal Card */}
          <div className="flex flex-col gap-8">
            {/* Circular Profile Picture */}
            <div className="relative mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-full blur-lg opacity-40 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-green-400/30 bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-2">
                  <img
                    src="/images/Yahya.jpeg"
                    alt="Muhammad Yahya Jan"
                    className="w-full h-full rounded-full object-cover border-2 border-green-400/50"
                    onError={(e) => {
                      console.error('Profile image failed to load');
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full border border-green-400/20 shadow-lg shadow-green-500/20" />
              </div>
            </div>

            {/* Terminal Card */}
            <div className="card-premium relative overflow-hidden p-6 md:p-8 border-slate-700/30 bg-gradient-to-br from-slate-900/40 to-slate-950/50">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/5 to-transparent opacity-0 transition-premium hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/40" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
                    <div className="h-3 w-3 rounded-full bg-green-500/40" />
                  </div>
                  <span className="rounded-full border border-slate-600 bg-slate-950/60 px-3 py-1 font-mono text-xs text-slate-300">
                    ~/secure
                  </span>
                </div>

                <pre className="mt-6 overflow-x-auto rounded-lg bg-slate-950/80 p-4 font-mono text-sm leading-relaxed text-slate-300">
                  <code>{`$ whoami
> Muhammad Yahya Jan

$ cat focus.ini
[cybersecurity]
expertise = "ethical_hacking"
goals = [
  "penetration_testing",
  "network_security",
  "incident_response",
  "secure_coding"
]
tools = ["kali", "burp", "metasploit"]

$ echo "Securing the digital frontier"
> Securing the digital frontier`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
