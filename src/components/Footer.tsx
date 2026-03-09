"use client";

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-accent)]">
            <Zap className="h-3 w-3 text-white" fill="currentColor" />
          </div>
          <span className="text-sm font-semibold text-white">
            Next<span className="text-[var(--color-accent)]">Automation</span>
          </span>
        </div>
        <p className="mb-2 text-sm text-[var(--color-text-muted)]">
          AI Automation for Real Estate &amp; Professional Services
        </p>
        <p className="mb-4 text-xs text-[var(--color-text-muted)]/60">
          This is a demonstration &mdash; not connected to a live system.
        </p>
        <a
          href="https://nextautomation.us"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent)]/80"
        >
          nextautomation.us
        </a>
      </div>
    </footer>
  );
}
