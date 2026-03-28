import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

export function SkillsSection({ skillGroups }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A focused toolset, organized for quick recruiter scanning."
      description="The goal here is signal over volume: the technologies and languages most relevant to data science, modeling, analytics, and product-minded implementation."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="surface-card rounded-[1.9rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <p className="eyebrow">
              {group.title}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="pill text-sm text-[var(--color-text-muted)] transition duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-strong)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
