import Section from "./Section";

const SKILLS = [
  { title: "Security", items: ["Ethical Hacking (learning)", "OSINT basics", "Secrets hygiene", "Threat mindset"] },
  { title: "Linux & Tooling", items: ["Kali Linux", "CLI workflows", "Basic scripting"] },
  { title: "Programming", items: ["JavaScript (React)", "Python (NumPy)", "C++"] },
  { title: "Foundations", items: ["Networking basics", "Web fundamentals", "Git/GitHub"] },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="CAPABILITIES" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/90" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}