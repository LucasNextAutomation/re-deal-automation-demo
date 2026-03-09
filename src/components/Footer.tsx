"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-card-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NextAutomation"
              width={28}
              height={28}
              className="rounded-md invert"
            />
            <div>
              <span className="text-sm font-semibold text-white">
                NextAutomation
              </span>
              <p className="text-[11px] text-[var(--color-text-muted)]/70">
                AI Automation for Real Estate
              </p>
            </div>
          </div>

          {/* Center: Demo notice */}
          <p className="text-xs text-[var(--color-text-muted)]/50">
            Interactive demonstration &mdash; not connected to a live system
          </p>

          {/* Right: Website link */}
          <a
            href="https://nextautomation.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-accent)]/20 px-3 py-1.5 text-xs text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)]/10"
          >
            nextautomation.us
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path d="M3.5 3h5.5v5.5M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
