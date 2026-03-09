"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const NAV_LINKS = [
  { href: "/analyzer", label: "Analyzer" },
  { href: "/pipeline", label: "Pipeline" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-card-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]">
            <Zap className="h-4 w-4 text-white" fill="currentColor" />
          </div>
          <span className="text-lg font-semibold text-white tracking-tight">
            Next<span className="text-[var(--color-accent)]">Automation</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--color-accent)]"
                  />
                )}
              </Link>
            );
          })}
          <a
            href="https://nextautomation.us"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20 sm:block"
          >
            nextautomation.us
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
