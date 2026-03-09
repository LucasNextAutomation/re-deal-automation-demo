export interface PipelineNode {
  id: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
  iconName: string;
  color: string;
  bgColor: string;
}

export const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "webhook",
    name: "01 — Webhook Receiver",
    shortName: "Webhook",
    description: "Receives deal form + CIM document",
    details:
      "Accepts POST with asset name, location, type, asking price, context notes, and the uploaded CIM file (PDF/image). Sets CORS headers and routes to the preparation stage.",
    iconName: "Webhook",
    color: "#C8A96E",
    bgColor: "rgba(200, 169, 110, 0.1)",
  },
  {
    id: "prepare",
    name: "02 — Prepare & Encode",
    shortName: "Prepare",
    description: "Base64-encodes the document for OCR",
    details:
      "Converts the uploaded binary file to base64, constructs the Gemini API request body with a detailed OCR prompt that requires page-level tagging [PAGE X] and visual element extraction [VISUAL: type | description | page].",
    iconName: "FileCode",
    color: "#60a5fa",
    bgColor: "rgba(96, 165, 250, 0.1)",
  },
  {
    id: "ocr",
    name: "03 — Gemini OCR",
    shortName: "Gemini OCR",
    description: "Full document extraction via Gemini 2.5 Flash",
    details:
      "Sends the encoded document to Google Gemini 2.5 Flash with a 300-second timeout. Extracts full text transcription, visual element inventory, and all key data points from every page of the CIM.",
    iconName: "ScanSearch",
    color: "#a78bfa",
    bgColor: "rgba(167, 139, 250, 0.1)",
  },
  {
    id: "parse",
    name: "04 — Parse OCR Output",
    shortName: "Parse",
    description: "Structures extracted text by page",
    details:
      "Parses the raw OCR output into a page-indexed map. Extracts the visual element index from [VISUAL] tags, creating a structured inventory of charts, maps, floor plans, and tables with their page locations.",
    iconName: "Braces",
    color: "#2dd4bf",
    bgColor: "rgba(45, 212, 191, 0.1)",
  },
  {
    id: "segment",
    name: "06 — AI Segmenter",
    shortName: "Segmenter",
    description: "Classifies pages into analysis categories",
    details:
      "Uses GPT-4o-mini to classify each page into three categories: Market (location, demographics, submarket data), Asset (building specs, tenant schedule, floor plans), and Investment (pricing, returns, pro forma). Pages can appear in multiple categories.",
    iconName: "LayoutGrid",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    id: "router",
    name: "07 — Page Router",
    shortName: "Router",
    description: "Builds content bundles for each agent",
    details:
      "Takes the segmenter output and assembles three focused content bundles by extracting the relevant pages for each category. Each bundle contains only the text relevant to its analysis domain, reducing noise for downstream agents.",
    iconName: "GitBranch",
    color: "#C8A96E",
    bgColor: "rgba(200, 169, 110, 0.1)",
  },
  {
    id: "agents",
    name: "08 — Parallel Analysis Agents",
    shortName: "3 Agents",
    description: "Market, Asset & Investment agents run simultaneously",
    details:
      "Three specialized Claude agents analyze their respective content bundles in parallel. Each agent produces a structured analysis section with page-level citations [p.X], web source references, and modeled estimates clearly tagged.",
    iconName: "BrainCircuit",
    color: "#f472b6",
    bgColor: "rgba(244, 114, 182, 0.1)",
  },
  {
    id: "merge",
    name: "09 — Merge Results",
    shortName: "Merge",
    description: "Combines all agent outputs",
    details:
      "Aggregates the three parallel analysis outputs into a single unified document, preserving all citations and maintaining the structured format required by the memo formatter.",
    iconName: "Merge",
    color: "#60a5fa",
    bgColor: "rgba(96, 165, 250, 0.1)",
  },
  {
    id: "formatter",
    name: "10 — IC Memo Formatter",
    shortName: "Formatter",
    description: "Produces the final investment memo",
    details:
      "Takes the merged analysis and formats it into a professional IC-grade investment memo with executive summary, table of contents, market analysis, asset assessment, investment thesis, risk factors, and recommendation. All citations are preserved as interactive pills.",
    iconName: "FileText",
    color: "#2dd4bf",
    bgColor: "rgba(45, 212, 191, 0.1)",
  },
  {
    id: "result",
    name: "11 — Deliver Result",
    shortName: "Result",
    description: "Returns memo + logs to Google Sheets",
    details:
      "Delivers the formatted memo back to the frontend via webhook response. Simultaneously logs the deal metadata, processing times, and result to Google Sheets for audit trail and history access.",
    iconName: "CheckCircle",
    color: "#107C41",
    bgColor: "rgba(16, 124, 65, 0.1)",
  },
];
