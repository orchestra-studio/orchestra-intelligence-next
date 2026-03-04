// ── Shared types for the Diagnostic module ─────────────────────────

export type Lang = 'fr' | 'en';

export interface AuditOption {
  label: string;
  score: number;
}

export interface AuditQuestion {
  id: string;
  category: string;
  question: string;
  options: AuditOption[];
}

export interface AuditResult {
  score: number;
  level: string;
  summary: string;
  chartData: ChartDataPoint[];
  strengths: string[];
  weaknesses: string[];
  roadmap: RoadmapStep[];
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface RoadmapStep {
  step: string;
  action: string;
}

export interface HistoryEntry {
  category: string;
  question: string;
  answerLabel: string;
  score: number;
}

export type WizardStep = 'email' | 'questions' | 'analyzing' | 'results';
