"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Copy,
  Download,
  BookOpen,
  Check,
  RotateCcw,
  ChevronDown,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ASSET_TYPES } from "@/data/types";
import type { DealFormData, AssetType } from "@/data/types";
import {
  MOCK_MEMO_SECTIONS,
  MOCK_PROCESSING_STEPS,
  STEP_DELAYS,
} from "@/data/mock-memo";

interface StepState {
  id: string;
  label: string;
  status: "pending" | "active" | "done";
}

export default function AnalyzerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<DealFormData>({
    dealName: "",
    location: "",
    assetType: "Office",
    askingPrice: "",
    context: "",
    file: null,
  });
  const [dragOver, setDragOver] = useState(false);
  const [steps, setSteps] = useState<StepState[]>(
    MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
  );
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const updateField = useCallback(
    <K extends keyof DealFormData>(key: K, value: DealFormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleFileChange = useCallback(
    (files: FileList | null) => {
      if (files && files.length > 0) {
        updateField("file", files[0]);
      }
    },
    [updateField]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      handleFileChange(e.dataTransfer.files);
    },
    [handleFileChange]
  );

  const startProcessing = useCallback(() => {
    setSubmitted(true);
    setProcessing(true);
    setShowResults(false);
    setElapsed(0);
    setSteps(
      MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
    );

    // Scroll to processing section
    setTimeout(() => {
      processingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    // Start elapsed timer
    timerRef.current = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    // Animate through steps
    let cumulativeDelay = 0;
    STEP_DELAYS.forEach((delay, i) => {
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, idx) =>
            idx === i ? { ...s, status: "active" } : s
          )
        );
      }, cumulativeDelay);

      cumulativeDelay += delay;

      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s, idx) =>
            idx === i ? { ...s, status: "done" } : s
          )
        );
      }, cumulativeDelay);
    });

    // Show results after all steps complete
    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProcessing(false);
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, cumulativeDelay + 400);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      startProcessing();
    },
    [startProcessing]
  );

  const resetAnalyzer = useCallback(() => {
    setSubmitted(false);
    setProcessing(false);
    setShowResults(false);
    setFormData({
      dealName: "",
      location: "",
      assetType: "Office",
      askingPrice: "",
      context: "",
      file: null,
    });
    setSteps(
      MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
    );
    setElapsed(0);
    setSourcesOpen(false);
    setCopied(false);
    if (timerRef.current) clearInterval(timerRef.current);
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopy = useCallback(() => {
    const memoText = MOCK_MEMO_SECTIONS.map(
      (s) => `## ${s.title}\n${s.html.replace(/<[^>]+>/g, "")}`
    ).join("\n\n");
    navigator.clipboard.writeText(memoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <div className="mx-auto max-w-[780px] px-6">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[2px] text-[var(--color-accent)]">
              NextAutomation Deal Analyzer
            </span>
            <h1 className="mb-2 text-[28px] font-semibold tracking-tight text-[var(--color-ink)]">
              Deal Analyzer
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Upload a CIM and get an IC-grade investment memo in minutes
            </p>
          </motion.header>

          {/* ─── FORM (always visible) ─── */}
          <div className={`glass-card p-8 ${submitted ? "opacity-60" : ""} transition-opacity`}>
            {submitted && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-3 py-2 text-xs text-[var(--color-accent)]">
                <Lock className="h-3.5 w-3.5" />
                Analysis submitted — scroll down for results
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <fieldset disabled={submitted}>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      Asset Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Carré Haussmann"
                      value={formData.dealName}
                      onChange={(e) =>
                        updateField("dealName", e.target.value)
                      }
                      className="w-full rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)]/40 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Paris 9ème"
                      value={formData.location}
                      onChange={(e) =>
                        updateField("location", e.target.value)
                      }
                      className="w-full rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)]/40 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      Asset Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.assetType}
                        onChange={(e) =>
                          updateField(
                            "assetType",
                            e.target.value as AssetType
                          )
                        }
                        className="w-full appearance-none rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]/40 disabled:cursor-not-allowed"
                      >
                        {ASSET_TYPES.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-white"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      Asking Price
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. €45M"
                      value={formData.askingPrice}
                      onChange={(e) =>
                        updateField("askingPrice", e.target.value)
                      }
                      className="w-full rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)]/40 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                    Context & Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Broker notes, key concerns, what the IC wants to see..."
                    value={formData.context}
                    onChange={(e) =>
                      updateField("context", e.target.value)
                    }
                    className="w-full resize-y rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)]/40 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Upload Zone */}
                <div
                  onDragEnter={(e) => {
                    e.preventDefault();
                    if (!submitted) setDragOver(true);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    if (!submitted) setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    if (!submitted) handleDrop(e);
                    else e.preventDefault();
                  }}
                  onClick={() => !submitted && fileInputRef.current?.click()}
                  className={`relative mb-6 rounded-xl border-[1.5px] border-dashed p-6 text-center transition-all ${
                    submitted
                      ? "cursor-not-allowed border-[var(--color-input-border)]"
                      : dragOver
                        ? "cursor-pointer border-[var(--color-accent)] bg-[var(--color-accent)]/[0.03]"
                        : "cursor-pointer border-[var(--color-input-border)] hover:border-[var(--color-accent)]/50"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileChange(e.target.files)}
                    className="hidden"
                    disabled={submitted}
                  />
                  <Upload className="mx-auto mb-2 h-7 w-7 text-[var(--color-text-muted)]" />
                  {formData.file ? (
                    <p className="text-sm">
                      <span className="font-medium text-[var(--color-accent)]">
                        {formData.file.name}
                      </span>{" "}
                      <span className="text-[var(--color-text-muted)]">
                        ({(formData.file.size / 1048576).toFixed(1)} MB)
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="mb-1 text-sm text-[var(--color-text)]">
                        Drop your CIM here or click to browse
                      </p>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        PDF, PNG, JPG — up to 20 MB
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] py-3.5 text-[15px] font-semibold tracking-wide text-white shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {submitted ? "Analysis Running..." : "Analyze Deal"}
                </button>
              </fieldset>
            </form>
          </div>

          {/* ─── PROCESSING (appears below form) ─── */}
          {submitted && (
            <motion.div
              ref={processingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 scroll-mt-24"
            >
              <div className="glass-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-[var(--color-ink)]">
                    Processing Pipeline
                  </h2>
                  <span className="rounded-full bg-[var(--color-bg-muted)] px-3 py-1 text-xs tabular-nums text-[var(--color-text-muted)]">
                    {formatTime(elapsed)}
                  </span>
                </div>
                <ul className="space-y-0">
                  {steps.map((step) => (
                    <li
                      key={step.id}
                      className={`flex items-center gap-3 border-b border-[var(--color-card-border)] py-2.5 text-sm last:border-b-0 transition-colors ${
                        step.status === "active"
                          ? "text-[var(--color-text)]"
                          : step.status === "done"
                            ? "text-[var(--color-success)]"
                            : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 flex-shrink-0 rounded-full transition-colors ${
                          step.status === "active"
                            ? "animate-pulse-dot bg-[var(--color-accent)]"
                            : step.status === "done"
                              ? "bg-[var(--color-success)]"
                              : "bg-[var(--color-input-border)]"
                        }`}
                      />
                      {step.label}
                      {step.status === "done" && (
                        <Check className="ml-auto h-4 w-4 text-[var(--color-success)]" />
                      )}
                    </li>
                  ))}
                </ul>
                {!showResults && processing && (
                  <div className="mt-3 text-center text-xs text-[var(--color-text-muted)]">
                    Generating your investment memo...
                  </div>
                )}
                {showResults && (
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[var(--color-success)]">
                    <Check className="h-3.5 w-3.5" />
                    Analysis complete — {formatTime(elapsed)}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── RESULTS (appears below processing) ─── */}
          {showResults && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 scroll-mt-24"
            >
              <div className="glass-card p-8">
                {/* Results Header */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-[var(--color-card-border)] pb-5">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                      Investment Memo
                    </h2>
                    <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                      {formData.dealName || "Carré Haussmann"} &mdash;{" "}
                      {formData.location || "Paris 9ème"} &mdash;{" "}
                      Generated in {formatTime(elapsed)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSourcesOpen((prev) => !prev)}
                      className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs transition-all ${
                        sourcesOpen
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)]/[0.08] text-[var(--color-accent)]"
                          : "border-[var(--color-input-border)] bg-[var(--color-input)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Sources
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-md border border-[var(--color-input-border)] bg-[var(--color-input)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-[var(--color-success)]" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {copied ? "Copied" : "Copy"}
                    </button>
                    <button className="flex items-center gap-1.5 rounded-md border border-[var(--color-input-border)] bg-[var(--color-input)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                </div>

                {/* Source Legend */}
                <div className="mb-5 flex flex-wrap gap-4 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-bg-muted)] px-4 py-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-purple)]" />
                    IM Page Ref
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-blue)]" />
                    Web Source
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-pink)]" />
                    Modeled
                  </div>
                </div>

                {/* Sources Panel */}
                {sourcesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 overflow-hidden"
                  >
                    <div className="rounded-xl border border-[var(--color-accent)]/10 bg-[var(--color-accent)]/[0.02] p-4">
                      <h3 className="mb-3 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent)]">
                        <BookOpen className="h-4 w-4" />
                        All Sources Referenced
                      </h3>
                      <ul className="space-y-2">
                        {[
                          {
                            type: "IM",
                            color: "var(--color-purple)",
                            label: "CIM Pages 3-22",
                            detail: "Carré Haussmann Investment Memorandum",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "JLL Paris Office Market Q4 2025",
                            detail: "jll.fr/research/paris-office",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "BNP Paribas RE Market Data Q4 2025",
                            detail: "realestate.bnpparibas.fr",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "Cushman & Wakefield Paris Transactions",
                            detail: "cushmanwakefield.com/paris",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "ADEME DPE Regulations 2025",
                            detail: "ademe.fr/reglementation",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "CBRE France Investment Outlook 2025",
                            detail: "cbre.fr/research",
                          },
                          {
                            type: "WEB",
                            color: "var(--color-blue)",
                            label: "Knight Frank Paris Outlook 2026",
                            detail: "knightfrank.fr/research",
                          },
                          {
                            type: "MODEL",
                            color: "var(--color-pink)",
                            label: "DCF / IRR Projections",
                            detail:
                              "7-year hold, 55% LTV, 3.2% fixed rate",
                          },
                        ].map((source, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-bg-muted)] px-3 py-2 text-[13px]"
                          >
                            <span
                              className="flex-shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                              style={{
                                backgroundColor: `color-mix(in srgb, ${source.color} 15%, transparent)`,
                                color: source.color,
                              }}
                            >
                              {source.type}
                            </span>
                            <span className="text-[var(--color-text)]">
                              {source.label}
                            </span>
                            <span className="ml-auto text-xs text-[var(--color-text-muted)]">
                              {source.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Memo Content */}
                <div className="memo-paper">
                  <h1>
                    Investment Memo — {formData.dealName || "Carré Haussmann"}
                  </h1>
                  <div
                    style={{
                      marginBottom: 28,
                      padding: "16px 20px",
                      border: "1px solid #d0d5dd",
                      borderLeft: "3px solid var(--color-memo-navy)",
                      background: "#f8f9fc",
                      borderRadius: "0 4px 4px 0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        color: "var(--color-memo-navy)",
                        marginBottom: 10,
                      }}
                    >
                      Contents
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px 16px",
                      }}
                    >
                      {MOCK_MEMO_SECTIONS.map((section) => (
                        <a
                          key={section.id}
                          href={`#memo-${section.id}`}
                          style={{
                            fontSize: 12,
                            color: "var(--color-memo-sky)",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {section.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  {MOCK_MEMO_SECTIONS.map((section) => (
                    <div key={section.id} id={`memo-${section.id}`}>
                      <h2>{section.title}</h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: section.html }}
                      />
                    </div>
                  ))}
                </div>

                {/* New Deal Button */}
                <button
                  onClick={resetAnalyzer}
                  className="mt-6 flex items-center gap-2 rounded-lg border border-[var(--color-input-border)] px-5 py-2.5 text-[13px] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  <RotateCcw className="h-4 w-4" />
                  Analyze another deal
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
