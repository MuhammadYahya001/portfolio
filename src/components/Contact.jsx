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
            className="group card-premium flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="text-4xl transition-premium group-hover:scale-110">
              {method.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {method.label}
            </h3>
            <p className="mt-2 text-sm text-slate-400 break-all hover:text-green-400 transition-premium">
              {method.value}
            </p>
            {method.label === "Email" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyEmail(method.value);
                }}
                className="mt-4 rounded-lg border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 transition-premium hover:border-green-400/50 hover:bg-green-400/20 focus-ring"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-400/5 to-transparent p-8">
        <h3 className="text-lg font-bold text-white">Currently Available</h3>
        <p className="mt-2 text-slate-400">
          I'm open to interesting projects, collaborations, and professional opportunities. Response time: Usually within 24-48 hours.
        </p>
      </div>
    </Section>
  );
}
