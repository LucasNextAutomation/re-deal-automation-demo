export interface DealFormData {
  dealName: string;
  location: string;
  assetType: AssetType;
  askingPrice: string;
  context: string;
  file: File | null;
}

export type AssetType =
  | "Office"
  | "Logistics"
  | "Hotel"
  | "Residential"
  | "Retail"
  | "Mixed-Use";

export const ASSET_TYPES: AssetType[] = [
  "Office",
  "Logistics",
  "Hotel",
  "Residential",
  "Retail",
  "Mixed-Use",
];

export interface ProcessingStep {
  id: string;
  label: string;
  status: "pending" | "active" | "done";
}

export interface MemoSection {
  id: string;
  title: string;
  content: string;
}

export interface PipelineNode {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
