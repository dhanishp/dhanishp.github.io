import { motion } from "framer-motion";

export function SectionShell({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 px-5 py-22 sm:px-8 lg:px-12 lg:py-28 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl lg:mb-14">
            {eyebrow ? (
              <p className="eyebrow section-kicker mb-4">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="max-w-[14ch] text-4xl tracking-[-0.03em] text-[var(--color-text-strong)] sm:text-5xl lg:text-[3.6rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
