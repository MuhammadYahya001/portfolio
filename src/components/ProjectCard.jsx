export default function ProjectCard({ title, desc, tags, repoUrl, liveUrl }) {
  return (
    <article className='group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 hover:bg-slate-900/60'>
      <h3 className='text-lg font-semibold tracking-tight text-white'>
        {title}
      </h3>
      <p className='mt-2 text-sm leading-relaxed text-slate-300'>{desc}</p>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags?.map((t) => (
          <span
            key={t}
            className='rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 font-mono text-[11px] text-slate-300'
          >
            {t}
          </span>
        ))}
      </div>

      <div className='mt-5 flex flex-wrap gap-3 text-sm'>
        {repoUrl ? (
          <a
            className='inline-flex items-center gap-2 text-slate-200 hover:text-white'
            href={repoUrl}
            target='_blank'
            rel='noreferrer'
          >
            💻 Code
          </a>
        ) : null}

        {liveUrl ? (
          <a
            className='inline-flex items-center gap-2 text-slate-200 hover:text-white'
            href={liveUrl}
            target='_blank'
            rel='noreferrer'
          >
            🎬 Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
