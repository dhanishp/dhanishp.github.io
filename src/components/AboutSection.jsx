import { SectionShell } from "./SectionShell";

export function AboutSection({ about, education }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Technical depth matters most when people can understand and use it."
      description="This portfolio is built around the kind of work I want to keep doing: thoughtful modeling, strong communication, and projects that create visible operational value."
    >
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div className="surface-panel rounded-[2.2rem] p-4">
          <img
            src={about.image}
            alt="Portrait of Dhanish Parimalakumar"
            className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-center"
          />
        </div>

        <div className="grid gap-5">
          <div className="surface-card rounded-[2.2rem] p-7 lg:p-9">
            <p className="max-w-2xl text-[1.08rem] leading-8 text-[var(--color-text-muted)]">{about.summary}</p>
            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--color-text-muted)]">
              {about.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-card rounded-[1.9rem] p-6 transition duration-200 hover:-translate-y-1">
              <p className="eyebrow">
                Education
              </p>
              <h3 className="mt-4 text-[1.9rem] tracking-[-0.03em] text-[var(--color-text-strong)]">
                {education.school}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{education.degree}</p>
            </div>
            <div className="surface-card rounded-[1.9rem] p-6 transition duration-200 hover:-translate-y-1">
              <p className="eyebrow">
                Recruiting Focus
              </p>
              <h3 className="mt-4 text-[1.9rem] tracking-[-0.03em] text-[var(--color-text-strong)]">
                {education.focus}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                Graduating {education.graduation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
