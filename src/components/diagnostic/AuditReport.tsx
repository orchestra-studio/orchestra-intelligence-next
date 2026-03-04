'use client';

import {
  Brain,
  Terminal,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Clock,
  Download,
  BarChart3,
} from 'lucide-react';
import type { AuditResult, Lang } from './types';
import DiagnosticRadarChart from './DiagnosticRadarChart';

interface AuditReportProps {
  result: AuditResult;
  lang: Lang;
}

export default function AuditReport({ result, lang }: AuditReportProps) {
  return (
    <div className="min-h-full p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ── Left column: Score + Radar ──────────────────────── */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Score circle */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative w-48 h-48 mb-6 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="url(#scoreGradient)"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={552}
                  strokeDashoffset={552 - (552 * result.score) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1500 ease-out"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-6xl font-bold text-white tracking-tighter leading-none">
                  {result.score}
                </span>
                <span className="text-xs text-gray-400 font-mono uppercase tracking-widest mt-2">
                  / 100
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{result.level}</h2>
            <p className="text-sm text-gray-400">
              {lang === 'fr' ? 'Indice de Maturité IA' : 'AI Maturity Index'}
            </p>
          </div>

          {/* Radar chart */}
          <div className="glass-card p-6 rounded-3xl border border-white/10">
            <h4 className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              {lang === 'fr' ? 'Analyse Sectorielle' : 'Sector Analysis'}
            </h4>
            <DiagnosticRadarChart data={result.chartData} />
          </div>
        </div>

        {/* ── Right column: Summary + Details ────────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Executive Summary */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
            <div className="absolute top-4 right-4 text-primary/20">
              <Brain className="w-24 h-24 opacity-20" />
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" /> Executive Summary
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {result.summary}
            </p>
          </div>

          {/* Strengths / Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="text-sm font-bold text-green-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                {lang === 'fr' ? 'Forces' : 'Strengths'}
              </h4>
              <ul className="space-y-3">
                {result.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="text-sm font-bold text-orange-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                {lang === 'fr' ? 'Risques Critiques' : 'Critical Risks'}
              </h4>
              <ul className="space-y-3">
                {result.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Roadmap */}
          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-violet-400" />
              {lang === 'fr' ? "Plan d'action recommandé" : 'Recommended Roadmap'}
            </h3>
            <div className="space-y-6">
              {result.roadmap.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center text-violet-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    {i < result.roadmap.length - 1 && (
                      <div className="w-px h-full bg-white/10 my-2" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm mb-1">{step.step}</h5>
                    <p className="text-gray-400 text-sm">{step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="https://cal.com/orchestra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white hover:bg-gray-200 text-black font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              {lang === 'fr' ? 'Réserver un débriefing expert' : 'Book expert debrief'}
            </a>
            <button className="flex-1 bg-[#0a0a0f] border border-white/20 hover:bg-white/5 text-white font-bold py-4 px-6 rounded-xl transition-all text-center flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              {lang === 'fr' ? 'Télécharger le rapport PDF' : 'Download PDF Report'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
