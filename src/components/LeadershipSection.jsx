import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export function LeadershipSection({ leadership, awards }) {
  return (
    <SectionShell
      id="leadership"
      eyebrow="Leadership"
      title="Leadership experience that strengthens communication, teaching, and presence."
      description="Recruiters and interviewers usually care about more than technical tools alone. These roles show how I work with people, teach, and lead in group settings."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-4">
          {leadership.map((item, index) => (
            <motion.article
              key={item.organization}
              className="surface-card rounded-[1.95rem] p-6 transition duration-200 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="eyebrow">
                {item.role}
              </p>
              <h3 className="mt-4 text-[2rem] tracking-[-0.03em] text-[var(--color-text-strong)]">
                {item.organization}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.summary}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="surface-panel rounded-[2.1rem] p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">
            Awards
          </p>
          <h3 className="mt-4 text-[2rem] tracking-[-0.03em] text-[var(--color-text-strong)]">
            Recognition
          </h3>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {awards.map((award) => (
              <li key={award} className="rounded-[1.2rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)] px-4 py-3 transition duration-200 hover:border-[var(--color-border-strong)]">
                {award}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </SectionShell>
  );
}
