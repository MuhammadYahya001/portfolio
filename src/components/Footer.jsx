export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 bg-gradient-to-t from-slate-900/30 to-transparent px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="font-semibold text-white">Muhammad Yahya Jan</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Full-stack engineer with a passion for security and building great things.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#projects" className="transition-premium hover:text-cyan-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="transition-premium hover:text-cyan-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-premium hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://github.com/MuhammadYahya001"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-premium hover:text-cyan-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-yahya-jan-03b344325"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-premium hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:muhammadyahyajan001@gmail.com"
                  className="transition-premium hover:text-cyan-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800/50 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Muhammad Yahya Jan. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Built with React • Vite • Tailwind • Deployed on Netlify
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}