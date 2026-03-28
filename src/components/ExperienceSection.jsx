import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export function ExperienceSection({ experience }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="A mix of applied machine learning, research, and operational systems work."
      description="The throughline across these roles is ownership: turning ambiguous technical problems into something actionable for teams and stakeholders."
    >
      <div className="grid gap-5">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.title}`}
            className="surface-panel relative grid gap-6 overflow-hidden rounded-[2.2rem] p-6 lg:p-7 md:grid-cols-[220px_1fr]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-accent),transparent)] opacity-40 md:left-[220px]" />
            <div>
              <p className="eyebrow">
                {item.period}
              </p>
              <h3 className="mt-4 text-[2rem] tracking-[-0.03em] text-[var(--color-text-strong)]">{item.company}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{item.title}</p>
            </div>
            <ul className="space-y-4 text-sm leading-7 text-[var(--color-text-muted)] md:pl-4">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
