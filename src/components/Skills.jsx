import Section from "./Section";
import { useScrollReveal } from "../hooks/useScrollReveal";

const LANGUAGES = [
  { name: "Python", proficiency: 90 },
  { name: "C++", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "HTML/CSS", proficiency: 85 },
  { name: "Node.js", proficiency: 75 },
  { name: "Next.js", proficiency: 70 },
];

const TECH_TOOLS = [
  { name: "Kali Linux", icon: "🐉" },
  { name: "Burp Suite", icon: "🔍" },
  { name: "Wireshark", icon: "📊" },
  { name: "Metasploit", icon: "⚔️" },
  { name: "Git", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Linux", icon: "🐧" },
];

const EXPERTISE = [
  {
    title: "Security & Hacking",
    items: ["Ethical Hacking", "Penetration Testing", "CTF Competitions"],
    icon: "🔐"
  },
  {
    title: "Backend & Systems",
    items: ["Python Scripting", "C++ Development", "Linux & CLI"],
    icon: "⚙️"
  },
  {
    title: "Frontend Development",
    items: ["React & Vite", "Tailwind CSS", "Responsive Design"],
    icon: "💻"
  },
  {
    title: "Tools & Practices",
    items: ["Git & GitHub", "DevOps", "Security Testing"],
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

      {/* Language Proficiency Bars */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          💾 Language Proficiency
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {LANGUAGES.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-300">{lang.name}</span>
                <span className="text-xs text-green-400">{lang.proficiency}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tools */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          🛠️ Tools & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TECH_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group card-premium p-4 text-center hover:border-green-400/40 transition-premium"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Categories */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          📚 Areas of Expertise
        </h3>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {EXPERTISE.map((skill) => (
            <div
              key={skill.title}
              className="group scroll-reveal card-premium p-6 md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white">
                  {skill.title}
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-300 transition-premium group-hover:text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTF Achievement */}
      <div className="mt-8 rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-900/20 to-slate-900/30 p-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">🏆</div>
          <div>
            <h3 className="text-xl font-bold text-white">Black Hat MEA CTF</h3>
            <p className="mt-2 text-slate-300">
              Achieved <span className="font-semibold text-green-400">top 100 global ranking</span> in Black Hat Middle East & Africa CTF competition. Solved 20+ picoCTF challenges and participated in 10+ competitive cybersecurity competitions.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="mt-12 rounded-2xl border border-green-400/30 bg-gradient-to-r from-green-900/30 to-slate-900/40 p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Want More Details?</h3>
            <p className="mt-2 text-slate-300">
              Download my resume to see complete certifications, professional experience, and detailed project descriptions.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1oN0VhvEdYtCXx0gfcYloPyDwazl09rqe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-medium text-white transition-premium hover:from-green-500 hover:to-emerald-500 whitespace-nowrap"
          >
            📄 View Resume
            <span className="transition-premium group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          🎓 Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "ISC2 Certified in Cybersecurity (CC)",
            "ISO 27001 Information Security Associate",
            "Qualys Vulnerability Management (VM)",
            "Cisco Ethical Hacker",
            "AWS Cloud Practitioner",
            "Cisco Introduction to AI"
          ].map((cert) => (
            <div
              key={cert}
              className="group flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 transition-premium hover:border-green-400/30 hover:bg-slate-800/50"
            >
              <span className="text-lg">✓</span>
              <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}