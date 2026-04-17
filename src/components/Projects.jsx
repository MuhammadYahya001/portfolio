import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "Code Secret Finder",
    desc:
      "Enterprise-grade security utility for detecting hardcoded secrets in codebases. Prevents accidental credential leaks with pattern matching and entropy analysis.",
    tags: ["Security", "DevSecOps", "CLI Tool"],
    repoUrl: "https://github.com/MuhammadYahya001/code-secret-finder",
    featured: true,
  },
  {
    title: "Kali Linux Toolkit Notes",
    desc:
      "Comprehensive reference guide for penetration testing tools. Includes commands, workflows, and practical examples for ethical hackers and security professionals.",
    tags: ["Linux", "Security Tools", "Documentation"],
    repoUrl: "https://github.com/MuhammadYahya001/kali-linux-toolkit-notes",
    featured: true,
  },
  {
    title: "Neural Network from Scratch",
    desc:
      "Multi-layer perceptron implementation with manual backpropagation and NumPy. Trained on MNIST dataset achieving 95%+ accuracy without frameworks.",
    tags: ["Python", "Machine Learning", "NumPy"],
    repoUrl: "https://github.com/MuhammadYahya001/mvc-mlp-24i-2030",
  },
  {
    title: "Cuphead-Inspired Game",
    desc:
      "Fast-paced 2D platformer built with SFML. Features advanced game mechanics, boss AI, phase systems, and resource management gameplay patterns.",
    tags: ["C++", "Game Dev", "SFML"],
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

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/40 to-transparent p-8">
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