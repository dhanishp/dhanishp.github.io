import { SectionShell } from "./SectionShell";

export function ContactSection({ contact, socialLinks }) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open to data science opportunities, conversations, and thoughtful collaboration."
      description="If you’re hiring for data science, analytics, or machine learning roles, I’d be glad to connect."
      className="pb-24"
    >
      <div className="surface-panel grid gap-7 rounded-[2.35rem] p-7 lg:grid-cols-[1fr_auto] lg:items-end lg:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <p className="eyebrow">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 block text-lg font-medium text-[var(--color-text-strong)] transition duration-200 hover:opacity-80"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <p className="eyebrow">
              Phone
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="mt-4 block text-lg font-medium text-[var(--color-text-strong)] transition duration-200 hover:opacity-80"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow">
              Location
            </p>
            <p className="mt-4 text-lg font-medium text-[var(--color-text-strong)]">{contact.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
