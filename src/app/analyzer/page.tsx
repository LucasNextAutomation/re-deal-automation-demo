"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Copy,
  Download,
  BookOpen,
  Check,
  RotateCcw,
  ScanSearch,
  Building2,
  MapPin,
  DollarSign,
  Ruler,
  Users,
  TrendingUp,
  BarChart3,
  Play,
  Clock,
  Settings2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MOCK_MEMO_SECTIONS,
  MOCK_PROCESSING_STEPS,
  STEP_DELAYS,
  MOCK_EXTRACTED_FIELDS,
  EXECUTION_HISTORY,
} from "@/data/mock-memo";

interface StepState {
  id: string;
  label: string;
  status: "pending" | "active" | "done";
}

const EXTRACTED_DISPLAY = [
  { key: "assetName", label: "Asset", icon: Building2 },
  { key: "location", label: "Location", icon: MapPin },
  { key: "assetType", label: "Type", icon: ScanSearch },
  { key: "askingPrice", label: "Asking Price", icon: DollarSign },
  { key: "rooms", label: "Rooms / Keys", icon: Users },
  { key: "occupancy", label: "Occupancy", icon: TrendingUp },
  { key: "revparGrowth", label: "RevPAR Growth", icon: BarChart3 },
  { key: "meetingSpace", label: "Meeting Space", icon: Ruler },
] as const;

export default function AnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [context, setContext] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [showExtracted, setShowExtracted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isExample, setIsExample] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [steps, setSteps] = useState<StepState[]>(
    MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
  );
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const extractedRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleFileChange = useCallback((files: FileList | null) => {
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }, []);

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
    setShowExtracted(false);
    setElapsed(0);
    setSteps(
      MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
    );

    setTimeout(() => {
      processingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    timerRef.current = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

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
        if (MOCK_PROCESSING_STEPS[i].id === "extract") {
          setShowExtracted(true);
          setTimeout(() => {
            extractedRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 100);
        }
      }, cumulativeDelay);
    });

    setTimeout(() => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProcessing(false);
      setShowResults(true);
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

  const handleTryExample = useCallback(() => {
    setIsExample(true);
    startProcessing();
  }, [startProcessing]);

  const resetAnalyzer = useCallback(() => {
    setSubmitted(false);
    setProcessing(false);
    setShowResults(false);
    setShowExtracted(false);
    setFile(null);
    setContext("");
    setIsExample(false);
    setSteps(
      MOCK_PROCESSING_STEPS.map((s) => ({ ...s, status: "pending" as const }))
    );
    setElapsed(0);
    setSourcesOpen(false);
    setCopied(false);
    if (timerRef.current) clearInterval(timerRef.current);
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
              Upload a CIM — AI agents extract deal parameters, run parallel analysis, and generate a full deal summary
            </p>
          </motion.header>

          {/* ─── EXECUTION HISTORY ─── */}
          <div className="mb-4">
            <button
              onClick={() => setHistoryOpen((prev) => !prev)}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                historyOpen
                  ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.03]"
                  : "border-[var(--color-card-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/20"
              }`}
            >
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                <span className="font-medium text-[var(--color-ink)]">Recent Analyses</span>
                <span className="rounded-full bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)]">
                  {EXECUTION_HISTORY.length}
                </span>
              </div>
              <span className="text-xs text-[var(--color-text-muted)]">
                {historyOpen ? "Hide" : "Show"} history
              </span>
            </button>
            {historyOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="mt-1 overflow-hidden rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card)]"
              >
                <div className="divide-y divide-[var(--color-card-border)]">
                  {EXECUTION_HISTORY.map((exec) => (
                    <div
                      key={exec.id}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        exec.id === 67
                          ? "bg-[var(--color-accent)]/[0.04]"
                          : "hover:bg-[var(--color-bg-muted)]"
                      }`}
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-muted)] text-[10px] font-bold text-[var(--color-text-muted)]">
                        #{exec.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[var(--color-ink)] truncate">
                            {exec.name}
                          </span>
                          <span className="flex-shrink-0 rounded-full bg-[var(--color-bg-muted)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)]">
                            {exec.type}
                          </span>
                          {exec.id === 67 && (
                            <span className="flex-shrink-0 rounded-full bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)]">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">
                          {exec.date} · {exec.agents} agents · {exec.status}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Check className="h-4 w-4 text-[var(--color-success)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ─── UPLOAD FORM ─── */}
          <div className={`glass-card p-8 ${submitted ? "opacity-50 pointer-events-none" : ""} transition-opacity`}>
            <form onSubmit={handleSubmit}>
              {/* Upload Zone */}
              <div
                onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => !isExample && fileInputRef.current?.click()}
                className={`relative mb-5 cursor-pointer rounded-xl border-[1.5px] border-dashed p-10 text-center transition-all ${
                  dragOver
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/[0.03]"
                    : file || isExample
                      ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.02]"
                      : "border-[var(--color-input-border)] hover:border-[var(--color-accent)]/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => handleFileChange(e.target.files)}
                  className="hidden"
                />
                {isExample ? (
                  <>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                      <Building2 className="h-6 w-6 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm font-medium text-[var(--color-ink)]">
                      Example: Crowne Plaza SFO Airport — Offering Memorandum
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      32 pages — Full-Service Hotel, Burlingame CA (CBRE Hotels)
                    </p>
                  </>
                ) : file ? (
                  <>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                      <ScanSearch className="h-6 w-6 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm font-medium text-[var(--color-ink)]">
                      {file.name}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      {(file.size / 1048576).toFixed(1)} MB — Ready to analyze
                    </p>
                  </>
                ) : (
                  <>
                    <Upload className="mx-auto mb-3 h-10 w-10 text-[var(--color-text-muted)]" />
                    <p className="mb-1 text-sm font-medium text-[var(--color-ink)]">
                      Drop your CIM here or click to browse
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      PDF, PNG, JPG — up to 20 MB
                    </p>
                    <p className="mt-3 text-[11px] text-[var(--color-text-muted)]/70">
                      The AI will automatically extract deal parameters, run market/asset/investment analysis, and generate a full deal summary
                    </p>
                  </>
                )}
              </div>

              {/* Optional context */}
              <div className="mb-5">
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  Additional Context <span className="normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="IC focus areas, specific concerns, target return hurdles, asset-type preferences..."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="w-full resize-none rounded-lg border border-[var(--color-input-border)] bg-[var(--color-input)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-accent)]/40"
                />
              </div>

              <button
                type="submit"
                disabled={!file}
                className="w-full rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] py-3.5 text-[15px] font-semibold tracking-wide text-white shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed"
              >
                Analyze CIM
              </button>
            </form>

            {/* Try Example — outside the form */}
            {!submitted && (
              <>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[var(--color-card-border)]" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                    or
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-card-border)]" />
                </div>
                <button
                  type="button"
                  onClick={handleTryExample}
                  className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-[var(--color-accent)]/30 py-3.5 text-[15px] font-semibold text-[var(--color-accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/[0.04] hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
                >
                  <Play className="h-4 w-4" />
                  Try with Example Deal
                </button>
                <p className="mt-2.5 text-center text-[11px] text-[var(--color-text-muted)]/60">
                  See how it works with a real hotel CIM (Crowne Plaza SFO) — no upload needed
                </p>
              </>
            )}
          </div>

          {/* ─── PROCESSING PIPELINE ─── */}
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

                {/* Extracted Deal Info */}
                {showExtracted && (
                  <motion.div
                    ref={extractedRef}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 overflow-hidden border-t border-[var(--color-card-border)] pt-4"
                  >
                    <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)]">
                      <ScanSearch className="h-3.5 w-3.5" />
                      Extracted from CIM ({MOCK_EXTRACTED_FIELDS.pages} pages)
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {EXTRACTED_DISPLAY.map(({ key, label, icon: Icon }) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: EXTRACTED_DISPLAY.findIndex(d => d.key === key) * 0.06 }}
                          className="rounded-lg border border-[var(--color-card-border)] bg-[var(--color-bg-muted)] p-2.5"
                        >
                          <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                            <Icon className="h-3 w-3" />
                            {label}
                          </div>
                          <div className="text-xs font-semibold text-[var(--color-ink)] leading-tight">
                            {MOCK_EXTRACTED_FIELDS[key as keyof typeof MOCK_EXTRACTED_FIELDS]}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {!showResults && processing && (
                  <div className="mt-3 text-center text-xs text-[var(--color-text-muted)]">
                    Generating your deal summary...
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

          {/* ─── RESULTS ─── */}
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
                      Deal Summary
                    </h2>
                    <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">
                      {MOCK_EXTRACTED_FIELDS.assetName} &mdash;{" "}
                      {MOCK_EXTRACTED_FIELDS.location} &mdash;{" "}
                      Generated in {formatTime(elapsed)} &mdash; 3 parallel agents
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
                    Web / Market Source
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-pink)]" />
                    Modeled / Estimated
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 rounded-sm bg-[#f59e0b]" />
                    Data Gap
                  </div>
                </div>

                {/* Customization Banner */}
                <div className="mb-5 flex items-center gap-2.5 rounded-lg border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/[0.03] px-4 py-2.5">
                  <Settings2 className="h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <p className="text-[11px] text-[var(--color-text-muted)]">
                    Each section below is <strong className="text-[var(--color-accent)]">fully customizable</strong> — adjust analysis depth, focus areas, risk framework, or output format to match your investment criteria.
                  </p>
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
                          { type: "IM", color: "var(--color-purple)", label: "CIM Pages 2-31", detail: "Crowne Plaza SFO Offering Memorandum (CBRE Hotels)" },
                          { type: "WEB", color: "var(--color-blue)", label: "STR / CBRE Hotel Benchmarking", detail: "str.com — RevPAR, ADR, occupancy data" },
                          { type: "WEB", color: "var(--color-blue)", label: "SF Travel Association 2023 Visitor Impact", detail: "sftravel.com — citywide ADR $243.80, occ 64.2%" },
                          { type: "WEB", color: "var(--color-blue)", label: "Asian Hospitality — CA Hotel Pipeline", detail: "asianhospitality.com — development pipeline analysis" },
                          { type: "WEB", color: "var(--color-blue)", label: "Walk Score — Burlingame, CA", detail: "walkscore.com — city avg score 70" },
                          { type: "WEB", color: "var(--color-blue)", label: "Census / BLS — Demographics", detail: "Population, income, employment data" },
                          { type: "MODEL", color: "var(--color-pink)", label: "Stabilized P&L / NOI Projections", detail: "ADR $136.75, 81% occupancy, Year 4 stabilization" },
                          { type: "MODEL", color: "var(--color-pink)", label: "DSCR / LTV / Exit Analysis", detail: "60-65% LTC, 4.5-5.0% rate, 6.5% exit cap" },
                          { type: "GAP", color: "#f59e0b", label: "Asking Price — NOT PROVIDED", detail: "Critical gating item for underwriting completion" },
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
                            <span className="ml-auto hidden text-xs text-[var(--color-text-muted)] sm:block">
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
                    Deal Summary — {MOCK_EXTRACTED_FIELDS.assetName}
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
                      <h2>
                        {section.title}
                        {section.customizable && (
                          <span className="customize-badge">
                            <Settings2 style={{ width: 10, height: 10 }} />
                            Customizable
                          </span>
                        )}
                      </h2>
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
