"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScanSearch,
  BrainCircuit,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  {
    icon: ScanSearch,
    title: "Document Intelligence",
    description:
      "Gemini-powered OCR extracts every data point from your CIM — text, tables, charts, floor plans — with page-level precision.",
    color: "var(--color-purple)",
    bgColor: "rgba(167, 139, 250, 0.08)",
  },
  {
    icon: BrainCircuit,
    title: "Multi-Agent Analysis",
    description:
      "Three specialized AI agents analyze Market, Asset, and Investment data in parallel — each with deep domain expertise.",
    color: "var(--color-pink)",
    bgColor: "rgba(244, 114, 182, 0.08)",
  },
  {
    icon: FileText,
    title: "Investment Memo",
    description:
      "Produces a formatted, sourced, IC-ready investment memo with citation tracking back to exact CIM pages and web sources.",
    color: "var(--color-teal)",
    bgColor: "rgba(45, 212, 191, 0.08)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto max-w-4xl text-center"
          >
            <motion.div variants={itemVariants}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[2px] text-[var(--color-accent)]">
                <Sparkles className="h-3.5 w-3.5" />
                NextAutomation &mdash; Deal Intelligence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              AI Deal{" "}
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[#60a5fa] bg-clip-text text-transparent">
                Analyzer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-lg text-[var(--color-text-muted)] sm:text-xl"
            >
              Upload a CIM and get an IC-grade investment memo in minutes.
              Powered by multi-agent AI with page-level source tracking.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/analyzer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-accent)]/30"
              >
                Try the Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Cards */}
        <section className="px-6 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3"
          >
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="glass-card group relative overflow-hidden p-8 transition-all hover:border-[var(--color-accent)]/30"
              >
                {/* Subtle gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at 50% 0%, ${feature.bgColor}, transparent)`,
                  }}
                />

                <div className="relative">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <feature.icon
                      className="h-6 w-6"
                      style={{ color: feature.color }}
                    />
                  </div>

                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                    Step {i + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* How it works mini-section */}
        <section className="border-t border-[var(--color-card-border)] px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-2xl font-semibold text-white">
              From CIM to IC Memo
            </h2>
            <p className="mb-8 text-[var(--color-text-muted)]">
              The system processes a 60-page CIM in under 4 minutes. Every
              claim is tagged with its source — IM page reference, web
              research, or modeled estimate — so your IC can verify instantly.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[var(--color-purple)]" />
                <span className="text-xs text-[var(--color-text-muted)]">
                  IM Page Ref
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[var(--color-blue)]" />
                <span className="text-xs text-[var(--color-text-muted)]">
                  Web Source
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[var(--color-pink)]" />
                <span className="text-xs text-[var(--color-text-muted)]">
                  Modeled
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
