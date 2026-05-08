import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "Code Secret Finder",
    tagline: "Enterprise-grade secret scanning CLI",
    desc:
      "Enterprise-grade security utility for detecting hardcoded secrets in codebases. Prevents accidental credential leaks with pattern matching and entropy analysis.",
    highlights: [
      "Pattern + entropy-based detection",
      "Configurable scans for large codebases",
      "Remediation-ready reporting output",
    ],
    tech: ["Security", "DevSecOps", "CLI Tool"],
    repoUrl: "https://github.com/MuhammadYahya001/code-secret-finder",
    featured: true,
  },
  {
    title: "Kali Linux Toolkit Notes",
    tagline: "Pentesting playbooks & command reference",
    desc:
      "Comprehensive reference guide for penetration testing tools. Includes commands, workflows, and practical examples for ethical hackers and security professionals.",
    highlights: [
      "Curated commands + usage context",
      "Workflow-driven documentation",
      "Practical examples for real labs",
    ],
    tech: ["Linux", "Security Tools", "Documentation"],
    repoUrl: "https://github.com/MuhammadYahya001/kali-linux-toolkit-notes",
    featured: true,
  },
  {
    title: "PhishGuard Lite",
    tagline: "AI-assisted phishing defense dashboard",
    desc:
      "AI-assisted phishing email detector powered by OpenAI and URL heuristics. Built with Streamlit for an interactive interface to analyze and flag suspicious emails in real time.",
    highlights: [
      "LLM-assisted email analysis",
      "URL heuristic risk scoring",
      "Interactive Streamlit interface",
    ],
    tech: ["Python", "Streamlit", "OpenAI", "Cybersecurity"],
    repoUrl: "https://github.com/MuhammadYahya001/phishguard-lite",
    featured: true,
  },
  {
    title: "Airline Reservation System",
    tagline: "Full-stack airline booking and reservation management system",
    desc:
      "A reservation platform that supports searching flights, booking seats, passenger details management, and admin-side flight scheduling/management. Built with a focus on clean UX and data integrity.",
    highlights: [
      "Flight search + filtering",
      "Booking workflow + passenger details",
      "Seat/availability handling",
      "Admin management (routes/flights)",
      "Authentication/roles",
    ],
    tech: ["Tech: TODO (fill based on my actual project)"],
    repoLabel: "Code (private)",
    liveLabel: "Demo coming soon",
    featured: true,
  },
  {
    title: "Neural Network from Scratch",
    tagline: "Backpropagation built from first principles",
    desc:
      "Multi-layer perceptron implementation with manual backpropagation and NumPy. Trained on MNIST dataset achieving 95%+ accuracy without frameworks.",
    highlights: [
      "Manual forward + backprop",
      "MNIST training pipeline",
      "Framework-free implementation",
    ],
    tech: ["Python", "Machine Learning", "NumPy"],
    repoUrl: "https://github.com/MuhammadYahya001/mvc-mlp-24i-2030",
  },
  {
    title: "Cuphead-Inspired Game",
    tagline: "Boss-driven 2D action platformer",
    desc:
      "Fast-paced 2D platformer built with SFML. Features advanced game mechanics, boss AI, phase systems, and resource management gameplay patterns.",
    highlights: [
      "Multi-phase boss AI systems",
      "Physics + resource management loops",
      "Custom SFML rendering pipeline",
    ],
    tech: ["C++", "Game Dev", "SFML"],
    repoUrl: "https://github.com/MuhammadYahya001/Cuphead-Game",
    liveUrl: "https://youtu.be/N7H8UPZk85w",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <Section
      ref={ref}
      id="projects"
      eyebrow="Featured Projects"
      title="Work I'm Proud Of"
    >
      <p className="mt-3 max-w-2xl text-lg text-slate-400">
        A selection of projects showcasing my skills in security, full-stack development, and open-source contributions.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p, index) => (
          <div key={p.title} style={{ animationDelay: `${index * 150}ms` }} className="scroll-reveal">
            <ProjectCard {...p} featured={p.featured} />
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/40 to-transparent p-8">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-green-400">Interested in more?</span>{' '}
          Check out my{' '}
          <a
            href="https://github.com/MuhammadYahya001"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-green-300 transition-premium underline-offset-2 hover:underline"
          >
            GitHub profile
          </a>{' '}
          for additional coursework, experiments, and learning projects.
        </p>
      </div>
    </Section>
  );
}
