'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Brain,
  X,
  ArrowRight,
  Mail,
  Lock,
  CheckCircle2,
} from 'lucide-react';
import type { AuditResult, HistoryEntry, Lang, WizardStep, AuditOption } from './types';
import { AUDIT_QUESTIONS } from './audit-questions';
import { submitAuditLead } from '@/lib/supabase';
import AuditReport from './AuditReport';

// ── Loading log messages ───────────────────────────────────────────

const LOADING_LOGS: Record<Lang, string[]> = {
  fr: [
    'Connexion au cœur neuronal Orchestra...',
    'Vectorisation des réponses...',
    'Benchmark par rapport aux standards du marché...',
    'Identification des points critiques...',
    'Synthèse de la roadmap stratégique...',
    "Finalisation du score d'audit...",
  ],
  en: [
    'Connecting to Orchestra Neural Core...',
    'Vectorizing responses...',
    'Benchmarking against market standards...',
    'Identifying critical bottlenecks...',
    'Synthesizing strategic roadmap...',
    'Finalizing audit score...',
  ],
};

// ── Props ──────────────────────────────────────────────────────────

interface AuditWizardProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

// ── Component ──────────────────────────────────────────────────────

export default function AuditWizard({ isOpen, onClose, lang }: AuditWizardProps) {
  const [step, setStep] = useState<WizardStep>('email');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [auditEmail, setAuditEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // anti-spam
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [loadingLog, setLoadingLog] = useState<string[]>([]);

  const questions = AUDIT_QUESTIONS[lang];

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('email');
      setCurrentQuestionIndex(0);
      setHistory([]);
      setResult(null);
      setLoadingLog([]);
      setAuditEmail('');
      setHoneypot('');
    }
  }, [isOpen]);

  // ── Save to Supabase ─────────────────────────────────────────────

  const saveToSupabase = useCallback(
    async (auditResult: AuditResult, fullHistory: HistoryEntry[]) => {
      if (!auditEmail) return;
      try {
        await submitAuditLead({
          email: auditEmail,
          audit_score: auditResult.score,
          audit_level: auditResult.level,
          audit_summary: auditResult.summary,
          audit_responses: fullHistory,
          chart_data: auditResult.chartData,
          strengths: auditResult.strengths,
          weaknesses: auditResult.weaknesses,
          roadmap: auditResult.roadmap,
          language: lang,
        });
      } catch (e) {
        console.error('Failed to save to Supabase:', e);
      }
    },
    [auditEmail, lang],
  );

  // ── Generate report via API Route ────────────────────────────────

  const generateFinalReport = useCallback(
    async (fullHistory: HistoryEntry[]) => {
      setStep('analyzing');

      const logs = LOADING_LOGS[lang];
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setLoadingLog((prev) => [...prev, logs[i]]);
          i++;
        }
      }, 300);

      try {
        const res = await fetch('/api/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            history: fullHistory,
            lang,
            website: honeypot, // honeypot field
          }),
        });

        // Ensure animation has time to display
        await new Promise((resolve) => setTimeout(resolve, 2000));
        clearInterval(interval);

        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data = await res.json();
        const auditResult: AuditResult = data.result;

        setResult(auditResult);
        setStep('results');

        // Save in background
        saveToSupabase(auditResult, fullHistory);
      } catch (err) {
        console.error('Report generation failed:', err);
        clearInterval(interval);

        // Fallback: generate result client-side
        const totalScore = Math.round(
          fullHistory.reduce((a, b) => a + b.score, 0) / fullHistory.length,
        );
        const fallback: AuditResult = {
          score: totalScore,
          level: totalScore < 40 ? (lang === 'fr' ? 'Débutant IA' : 'AI Beginner') :
                 totalScore < 60 ? (lang === 'fr' ? 'En Transition' : 'In Transition') :
                 totalScore < 80 ? (lang === 'fr' ? 'Avancé' : 'Advanced') :
                 (lang === 'fr' ? 'Expert IA' : 'AI Expert'),
          summary: lang === 'fr'
            ? `Score de ${totalScore}/100. Contactez-nous pour un audit approfondi.`
            : `Score of ${totalScore}/100. Contact us for an in-depth audit.`,
          chartData: fullHistory.map((h) => ({ subject: h.category, A: h.score, fullMark: 100 })),
          strengths: fullHistory.sort((a, b) => b.score - a.score).slice(0, 2).map((h) => `${h.category}: ${h.answerLabel}`),
          weaknesses: fullHistory.sort((a, b) => a.score - b.score).slice(0, 2).map((h) => `${h.category}`),
          roadmap: lang === 'fr'
            ? [
                { step: 'Phase 1', action: 'Audit approfondi' },
                { step: 'Phase 2', action: "Déploiement d'agents IA" },
                { step: 'Phase 3', action: 'Orchestration multi-agents' },
              ]
            : [
                { step: 'Phase 1', action: 'Deep audit' },
                { step: 'Phase 2', action: 'AI agent deployment' },
                { step: 'Phase 3', action: 'Multi-agent orchestration' },
              ],
        };

        setResult(fallback);
        setStep('results');
        saveToSupabase(fallback, fullHistory);
      }
    },
    [lang, honeypot, saveToSupabase],
  );

  // ── Handle answer ────────────────────────────────────────────────

  const handleAnswer = useCallback(
    (option: AuditOption) => {
      const currentQ = questions[currentQuestionIndex];
      const entry: HistoryEntry = {
        category: currentQ.category,
        question: currentQ.question,
        answerLabel: option.label,
        score: option.score,
      };

      const updatedHistory = [...history, entry];
      setHistory(updatedHistory);

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        generateFinalReport(updatedHistory);
      }
    },
    [currentQuestionIndex, history, questions, generateFinalReport],
  );

  // ── Don't render when closed ─────────────────────────────────────

  if (!isOpen) return null;

  const currentQuestionData = questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl h-[95vh] bg-[#0a0a0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-scale-up m-4">
        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5 backdrop-blur-md z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
              <Brain className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Orchestra<span className="text-gray-400">Core_AI</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Body ─────────────────────────────────────────────── */}
        <div className="flex-grow relative overflow-y-auto">
          {/* Step: Email */}
          {step === 'email' && (
            <div className="h-full flex flex-col justify-center max-w-xl mx-auto px-6 py-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {lang === 'fr' ? 'Commençons votre audit IA' : "Let's start your AI audit"}
                </h3>
                <p className="text-gray-400">
                  {lang === 'fr'
                    ? 'Entrez votre email pour recevoir votre rapport personnalisé'
                    : 'Enter your email to receive your personalized report'}
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (auditEmail && !honeypot) setStep('questions');
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  required
                  placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                  value={auditEmail}
                  onChange={(e) => setAuditEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white text-center text-lg focus:border-blue-500 outline-none transition-colors"
                />

                {/* Honeypot — hidden from humans, bots fill it */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
                />

                <button
                  type="submit"
                  disabled={!auditEmail}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {lang === 'fr' ? "Démarrer l'audit" : 'Start audit'}{' '}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" />
                  {lang === 'fr'
                    ? 'Vos données sont protégées et confidentielles'
                    : 'Your data is protected and confidential'}
                </p>
              </form>
            </div>
          )}

          {/* Step: Questions */}
          {step === 'questions' && (
            <div className="h-full flex flex-col justify-center max-w-3xl mx-auto px-6 py-12 relative">
              {/* Progress bar */}
              <div className="mb-12">
                <div className="flex justify-between text-xs text-gray-500 font-mono mb-2 uppercase tracking-widest">
                  <span>Analysis In Progress</span>
                  <span>
                    {Math.round((currentQuestionIndex / questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ease-out"
                    style={{
                      width: `${(currentQuestionIndex / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <div key={currentQuestionIndex} className="animate-fade-in-up">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6">
                  {currentQuestionData.category} Analysis
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight text-white">
                  {currentQuestionData.question}
                </h3>

                <div className="grid gap-4">
                  {currentQuestionData.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      className="group text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-200 flex items-center justify-between hover:translate-x-1"
                    >
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors text-lg">
                        {opt.label}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step: Analyzing */}
          {step === 'analyzing' && (
            <div className="h-full flex flex-col items-center justify-center bg-black font-mono text-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
              <div className="w-full max-w-lg space-y-3 z-10">
                {loadingLog.map((log, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-green-400/90 animate-fade-in-up"
                  >
                    <span className="text-xs opacity-50">
                      [{new Date().toLocaleTimeString()}]
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{log}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-blue-500 animate-pulse border-l-2 border-blue-500 pl-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  <span>Processing Intelligence...</span>
                </div>
              </div>
            </div>
          )}

          {/* Step: Results */}
          {step === 'results' && result && (
            <AuditReport result={result} lang={lang} />
          )}
        </div>
      </div>
    </div>
  );
}
