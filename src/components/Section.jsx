import { useScrollReveal } from "../hooks/useScrollReveal";
import { forwardRef } from "react";

const Section = forwardRef(({ id, eyebrow, title, children }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="scroll-mt-32 scroll-reveal px-4 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          {eyebrow && (
            <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;