import Section from "./Section";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SKILLS = [
  {
    title: "Security & Hacking",
    items: ["Ethical Hacking", "OSINT Fundamentals", "Secrets Hygiene", "Security Tools", "CTF Challenges"],
    icon: "🔐"
  },
  {
    title: "Backend & Systems",
    items: ["Python", "C++", "Linux & CLI", "NumPy & ML", "Clean Code"],
    icon: "⚙️"
  },
  {
    title: "Frontend Development",
    items: ["React & Vite", "TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX"],
    icon: "💻"
  },
  {
    title: "Tools & Practices",
    items: ["Git & GitHub", "DevOps", "Testing", "Documentation", "Open Source"],
    icon: "🛠️"
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <Section
      ref={ref}
      id="skills"
      eyebrow="Capabilities"
      title="Skills & Expertise"
    >
      <p className="mt-3 max-w-2xl text-lg text-slate-400">
        A comprehensive overview of my technical expertise and professional competencies.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            className="group scroll-reveal card-premium p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white">
                {skill.title}
              </h3>
            </div>

            <ul className="mt-6 space-y-3">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-300 transition-premium group-hover:text-slate-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}