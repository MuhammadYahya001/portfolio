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

      {/* CTF Achievements - Split into 3 boxes */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          🏆 Black Hat MEA CTF Achievements
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Global Ranking Box */}
          <div className="group scroll-reveal rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-900/40 to-slate-900/40 p-8 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">🌍</div>
              <h3 className="text-lg font-bold text-white">Global Ranking</h3>
              <p className="mt-3 text-3xl font-bold text-green-400">Top 100</p>
              <p className="mt-2 text-sm text-slate-400">
                Ranked among the top 100 globally in Black Hat Middle East & Africa CTF competition
              </p>
            </div>
          </div>

          {/* PicoCTF Challenges Box */}
          <div className="group scroll-reveal rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-900/40 to-slate-900/40 p-8 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500 [animation-delay:100ms]">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">🔐</div>
              <h3 className="text-lg font-bold text-white">PicoCTF Challenges</h3>
              <p className="mt-3 text-3xl font-bold text-green-400">20+</p>
              <p className="mt-2 text-sm text-slate-400">
                Successfully solved over 20 picoCTF challenges demonstrating strong problem-solving skills
              </p>
            </div>
          </div>

          {/* Competitions Box */}
          <div className="group scroll-reveal rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-900/40 to-slate-900/40 p-8 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500 [animation-delay:200ms]">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">⚔️</div>
              <h3 className="text-lg font-bold text-white">Competitions</h3>
              <p className="mt-3 text-3xl font-bold text-green-400">10+</p>
              <p className="mt-2 text-sm text-slate-400">
                Participated in 10+ competitive cybersecurity competitions showcasing diverse skills
              </p>
            </div>
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
              <span className="text-lg group-hover:scale-125 transition-transform duration-300">✓</span>
              <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">{cert}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.credly.com/users/muhammad-yahya-jan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-green-400/30 bg-green-400/5 px-6 py-3 font-medium text-green-300 transition-all hover:-translate-y-1 hover:border-green-400 hover:bg-green-400/20 hover:shadow-lg hover:shadow-green-500/20"
          >
            🏅 View my Credly Profile
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}