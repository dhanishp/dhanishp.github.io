import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

function TagList({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="pill text-xs font-medium text-[var(--color-text-muted)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function WorkSection({ featuredProjects, secondaryProjects, onProjectSelect }) {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected Work"
      title="Case studies built for both technical credibility and recruiter readability."
      description="The strongest projects here are the ones where modeling, communication, and implementation all had to work together."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`surface-panel group relative flex h-full flex-col overflow-hidden rounded-[2.2rem] p-6 lg:p-7 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--color-accent),transparent)] opacity-45 transition duration-300 group-hover:opacity-90" />
            <p className="eyebrow">
              {project.role}
            </p>
            <h3 className={`mt-5 tracking-[-0.035em] text-[var(--color-text-strong)] ${
              index === 0 ? "text-[2.4rem] lg:max-w-[14ch]" : "text-[2rem]"
            }`}>
              {project.title}
            </h3>
            <p className={`mt-4 text-[var(--color-text-muted)] ${
              index === 0 ? "max-w-2xl text-[1.02rem] leading-8" : "text-base leading-8"
            }`}>
              {project.summary}
            </p>
            <p className="mt-6 rounded-[1.5rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)] p-5 text-sm leading-7 text-[var(--color-text-strong)]">
              {project.outcome}
            </p>
            <TagList items={project.tags} />
            <button
              type="button"
              onClick={() => onProjectSelect(project.id)}
              className="mt-auto flex items-center gap-2 pt-8 text-left text-sm font-semibold tracking-[0.02em] text-[var(--color-text-strong)] transition duration-200 group-hover:translate-x-1"
            >
              Learn more
              <span className="text-base">→</span>
            </button>
          </motion.article>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-6">
          <p className="eyebrow">
            Additional Builds
          </p>
          <h3 className="mt-3 text-[2rem] tracking-[-0.03em] text-[var(--color-text-strong)]">
            Smaller projects that still reinforce range.
          </h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="surface-card rounded-[1.85rem] p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <h4 className="text-xl tracking-[-0.025em] text-[var(--color-text-strong)]">{project.title}</h4>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{project.summary}</p>
              <TagList items={project.tags} />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
