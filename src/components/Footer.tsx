"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-2 text-xs text-[var(--color-text-muted)]/60">
          This is a demonstration. Not connected to a live system.
        </p>
        <p className="mb-3 text-sm text-[var(--color-text-muted)]">
          Built by{" "}
          <a
            href="https://nextautomation.us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent)]/80"
          >
            NextAutomation
          </a>{" "}
          &mdash; AI Automation for Real Estate
        </p>
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--color-text-muted)]/40">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/40" />
          <span>Demo</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/40" />
          <span>Not a production system</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/40" />
        </div>
      </div>
    </footer>
  );
}
