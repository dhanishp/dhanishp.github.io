const topBarLinkClass =
  "rounded-full px-3 py-2 text-sm text-[var(--color-text-muted)] transition duration-200 hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text-strong)]";

export function TopBar({ navigation, contactHref, theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-glass)] px-3 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <a href="#top" className="px-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text-strong)]">
          DP / Portfolio
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={topBarLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-lg text-[var(--color-text-strong)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-soft)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a href={contactHref} className="button-primary px-4 py-2.5 text-sm">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
