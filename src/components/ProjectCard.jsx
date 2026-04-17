import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectCard({ title, desc, tags, repoUrl, liveUrl, featured }) {
  const ref = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`scroll-reveal group relative overflow-hidden rounded-2xl border transition-premium ${
        featured
          ? 'border-green-400/30 bg-gradient-to-br from-slate-900/80 to-slate-950/40 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10'
          : 'card-premium'
      }`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/0 group-hover:from-green-400/5 group-hover:to-green-400/0 transition-premium" />

      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h3>
          {featured && (
            <span className="whitespace-nowrap rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-base leading-relaxed text-slate-300">
          {desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1 text-xs font-medium text-slate-300 transition-premium group-hover:border-green-400/40 group-hover:bg-green-400/5 group-hover:text-green-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-800 pt-6">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-400 transition-premium hover:text-green-300 focus-ring rounded px-2 py-1"
            >
              <span>GitHub</span>
              <span className="transition-premium group-hover:translate-x-1">→</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-400 transition-premium hover:text-green-300 focus-ring rounded px-2 py-1"
            >
              <span>Watch Demo</span>
              <span className="transition-premium group-hover:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
