import { motion } from "framer-motion";

export function HeroSection({ hero, socialLinks }) {
  return (
    <section id="top" className="px-5 pb-14 pt-14 sm:px-8 lg:px-12 lg:pb-22 lg:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <div className="pill mb-6 inline-flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
            <span className="eyebrow">Available for recruiting conversations</span>
          </div>
          <p className="eyebrow section-kicker mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-[3.4rem] tracking-[-0.05em] text-[var(--color-text-strong)] sm:text-[4.7rem] lg:text-[6.15rem]">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] lg:text-[1.22rem]">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="button-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="button-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pill transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-strong)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="surface-panel relative overflow-hidden rounded-[2.25rem] p-6 lg:p-7"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--color-accent),transparent)] opacity-45" />
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="eyebrow">Selected outcomes</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Work that reads quickly but still carries technical substance.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.55rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)] p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
              >
                <div className="text-4xl font-semibold tracking-[-0.04em] text-[var(--color-text-strong)]">
                  {metric.value}
                </div>
                <p className="mt-2 max-w-[18ch] text-sm leading-6 text-[var(--color-text-muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.6rem] border border-dashed border-[var(--color-border-strong)] bg-[color:var(--color-accent-soft)]/50 p-5">
            <p className="eyebrow">
              Snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-text-muted)]">
              {hero.quickFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
