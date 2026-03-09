"use client";

import { motion } from "framer-motion";
import {
  Webhook,
  FileCode,
  ScanSearch,
  Braces,
  LayoutGrid,
  GitBranch,
  BrainCircuit,
  Merge,
  FileText,
  CheckCircle,
  Circle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PIPELINE_NODES } from "@/data/pipeline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const ICON_MAP: Record<string, LucideIcon> = {
  Webhook,
  FileCode,
  ScanSearch,
  Braces,
  LayoutGrid,
  GitBranch,
  BrainCircuit,
  Merge,
  FileText,
  CheckCircle,
  Circle,
};

function getIcon(iconName: string): LucideIcon {
  return ICON_MAP[iconName] || Circle;
}

export default function PipelinePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[2px] text-[var(--color-accent)]">
              NextAutomation Pipeline
            </span>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
              n8n Pipeline
            </h1>
            <p className="mx-auto max-w-lg text-sm text-[var(--color-text-muted)]">
              From CIM upload to IC-ready investment memo. Each node represents
              a stage in the automated analysis workflow built on n8n.
            </p>
          </motion.div>

          {/* Pipeline Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {PIPELINE_NODES.map((node, i) => {
              const Icon = getIcon(node.iconName);
              const isParallel = node.id === "agents";
              const isLast = i === PIPELINE_NODES.length - 1;

              return (
                <div key={node.id}>
                  <motion.div
                    variants={nodeVariants}
                    className="relative flex gap-5"
                  >
                    {/* Left: icon column with connector line */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--color-card-border)] shadow-lg"
                        style={{ backgroundColor: node.bgColor }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: node.color }}
                        />
                      </motion.div>
                      {/* Connector line */}
                      {!isLast && (
                        <motion.div
                          variants={lineVariants}
                          style={{ originY: 0 }}
                          className="w-px flex-1 bg-gradient-to-b from-[var(--color-card-border)] to-transparent"
                        />
                      )}
                    </div>

                    {/* Right: content */}
                    <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                      <div className="mb-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]/60">
                        {node.shortName}
                      </div>
                      <h3
                        className="mb-1 text-sm font-semibold"
                        style={{ color: node.color }}
                      >
                        {node.name}
                      </h3>
                      <p className="mb-2 text-sm text-[var(--color-text-muted)]">
                        {node.description}
                      </p>
                      <p className="text-xs leading-relaxed text-[var(--color-text-muted)]/70">
                        {node.details}
                      </p>

                      {/* Parallel agents indicator */}
                      {isParallel && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {[
                            {
                              name: "Market Agent",
                              color: "#2dd4bf",
                              bg: "rgba(45, 212, 191, 0.08)",
                            },
                            {
                              name: "Asset Agent",
                              color: "#a78bfa",
                              bg: "rgba(167, 139, 250, 0.08)",
                            },
                            {
                              name: "Investment Agent",
                              color: "#f59e0b",
                              bg: "rgba(245, 158, 11, 0.08)",
                            },
                          ].map((agent) => (
                            <motion.div
                              key={agent.name}
                              whileHover={{ scale: 1.03 }}
                              className="rounded-lg border border-[var(--color-card-border)] p-3 text-center"
                              style={{ backgroundColor: agent.bg }}
                            >
                              <div
                                className="text-[11px] font-semibold"
                                style={{ color: agent.color }}
                              >
                                {agent.name}
                              </div>
                              <div className="mt-0.5 text-[10px] text-[var(--color-text-muted)]">
                                Claude 3.5
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { value: "10", label: "Pipeline Nodes" },
              { value: "3", label: "Parallel Agents" },
              { value: "~4 min", label: "Processing Time" },
              { value: "100%", label: "Source Tracked" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center"
              >
                <div className="text-xl font-bold text-[var(--color-accent)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
