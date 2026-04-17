export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          {eyebrow ? (
            <p className="font-mono text-xs tracking-widest text-cyan-300/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}