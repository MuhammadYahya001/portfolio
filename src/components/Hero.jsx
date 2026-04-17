function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 font-mono">
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, external, children }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 hover:border-slate-700 hover:bg-slate-900"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="px-4 pb-10 pt-14 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            FAST Islamabad - Cybersecurity Student
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Muhammad Yahya Jan
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            I am a cybersecurity student focused on ethical hacking, Linux tooling, and strong fundamentals. I build projects and write practical notes to learn security concepts deeply.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="#projects">
              View Projects
            </PrimaryButton>

            <SecondaryButton href="mailto:muhammadyahyajan001@gmail.com">
              Email
            </SecondaryButton>

            <SecondaryButton href="https://github.com/MuhammadYahya001" external>
              GitHub
            </SecondaryButton>

            <SecondaryButton href="https://www.linkedin.com/in/muhammad-yahya-jan-03b344325" external>
              LinkedIn
            </SecondaryButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
            <Tag>Ethical Hacking</Tag>
            <Tag>Linux</Tag>
            <Tag>Networking</Tag>
            <Tag>Security Tools</Tag>
            <Tag>CTF / Labs</Tag>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-slate-400">terminal</p>
            <span className="rounded-full border border-slate-800 bg-slate-950 px-2 py-0.5 font-mono text-xs text-slate-400">
              secure-shell
            </span>
          </div>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-200">
<code>$ whoami
muhammad-yahya-jan

$ focus --2026
- web + network security
- ethical hacking workflows
- building practical tools

$ links
github: MuhammadYahya001
linkedin: muhammad-yahya-jan</code>
          </pre>

          <p className="mt-4 text-sm text-slate-300">
            Subtle cyber aesthetic, clean and recruiter-friendly.
          </p>
        </div>
      </div>
    </section>
  );
}
