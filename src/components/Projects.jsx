import Section from "./Section";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "code-secret-finder",
    desc:
      "A security-focused utility to detect potential secrets in codebases (e.g., API keys / tokens) to prevent accidental leaks.",
    tags: ["Security", "Secrets Scanning", "DevSecOps"],
    repoUrl: "https://github.com/MuhammadYahya001/code-secret-finder",
  },
  {
    title: "kali-linux-toolkit-notes",
    desc:
      "Beginner-friendly notes, commands, and practical examples for commonly used Kali Linux tools—built as a learning reference.",
    tags: ["Kali Linux", "Tooling", "Notes"],
    repoUrl: "https://github.com/MuhammadYahya001/kali-linux-toolkit-notes",
  },
  {
    title: "Multilayer Perceptron from Scratch (MNIST)",
    desc:
      "Built an MLP from scratch: manual forward/backprop calculations and a full NumPy training pipeline on MNIST (95%+ accuracy).",
    tags: ["Python", "NumPy", "ML Fundamentals"],
    repoUrl: "https://github.com/MuhammadYahya001/mvc-mlp-24i-2030",
  },
  {
    title: "Cuphead-Inspired Game (SFML)",
    desc:
      "A fast-paced 2D platformer showcasing game mechanics, enemy AI, boss phases, and parry-based resource systems.",
    tags: ["C++", "SFML", "Game Systems"],
    repoUrl: "https://github.com/MuhammadYahya001/Cuphead-Game",
    liveUrl: "https://youtu.be/N7H8UPZk85w",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="SELECT * FROM projects"
      title="Projects"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-400">
        Want more? See my GitHub for additional coursework, experiments, and notes.
      </p>
    </Section>
  );
}