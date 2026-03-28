export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(82,139,255,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(221,169,95,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(67,163,139,0.18),_transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_rgba(11,16,32,0.04))] dark:bg-[linear-gradient(to_bottom,_transparent,_rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] [background-size:68px_68px]" />
    </div>
  );
}
