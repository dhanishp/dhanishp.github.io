import { useEffect } from "react";
import { motion } from "framer-motion";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-end bg-slate-950/50 px-4 py-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.aside
        className="flex h-full w-full max-w-2xl flex-col overflow-hidden rounded-[2.35rem] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_30px_120px_rgba(2,6,23,0.3)]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[var(--color-border)] px-6 py-6">
          <div>
            <p className="eyebrow">
              {project.role}
            </p>
            <h3 className="mt-4 text-[2.45rem] tracking-[-0.035em] text-[var(--color-text-strong)]">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xl text-[var(--color-text-strong)] transition duration-200 hover:bg-[var(--color-surface-soft)]"
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          <div className="grid gap-4">
            <p className="rounded-[1.4rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)] p-5 text-sm leading-7 text-[var(--color-text-strong)]">
              {project.caseStudyIntro}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4"
                >
                  <p className="eyebrow">{stat.label}</p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-strong)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-7">
            <div>
              <p className="eyebrow">Problem</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{project.challenge}</p>
            </div>

            <div>
              <p className="eyebrow">Approach</p>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {project.approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Tools</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill text-sm text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Outcomes</p>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Why It Matters</p>
              <p className="mt-3 rounded-[1.35rem] border border-[var(--color-border)] bg-[color:var(--color-accent-soft)] p-5 text-sm leading-7 text-[var(--color-text-strong)]">
                {project.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}
