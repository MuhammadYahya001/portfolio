import Section from "./Section";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "muhammadyahyajan001@gmail.com",
    href: "mailto:muhammadyahyajan001@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "MuhammadYahya001",
    href: "https://github.com/MuhammadYahya001",
    icon: "💻",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "muhammad-yahya-jan",
    href: "https://www.linkedin.com/in/muhammad-yahya-jan-03b344325",
    icon: "🤝",
    external: true,
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <Section
      ref={ref}
      id="contact"
      eyebrow="Get in Touch"
      title="Let's Work Together"
    >
      <p className="mt-3 max-w-2xl text-lg text-slate-400">
        Whether you're interested in collaborating on a project, discussing cybersecurity, or just want to say hello—feel free to reach out.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.external ? "_blank" : undefined}
            rel={method.external ? "noreferrer" : undefined}
            className="group card-premium flex flex-col items-center justify-center p-8 text-center bg-slate-800/20 border border-slate-700/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 rounded-2xl"
          >
            <div className="text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
              {method.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
              {method.label}
            </h3>
            <p className="mt-2 text-sm text-slate-400 break-all group-hover:text-slate-200 transition-colors">
              {method.value}
            </p>
            {method.label === "Email" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyEmail(method.value);
                }}
                className="mt-4 rounded-lg border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 transition-all hover:border-green-400/50 hover:bg-green-400/20 hover:scale-105"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-400/5 to-transparent p-8 hover:border-green-400/40 hover:bg-green-400/10 transition-all duration-500">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Currently Available
        </h3>
        <p className="mt-2 text-slate-400">
          I'm open to interesting projects, collaborations, and professional opportunities. Response time: Usually within 24-48 hours.
        </p>
      </div>
    </Section>
  );
}
