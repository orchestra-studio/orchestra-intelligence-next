'use client';

import { useState } from 'react';
import { Brain, ArrowRight, Shield, Zap, FileText } from 'lucide-react';
import AuditWizard from '@/components/diagnostic/AuditWizard';
import type { Lang } from '@/components/diagnostic/types';

// ── Bilingual content ──────────────────────────────────────────────

const CONTENT = {
  fr: {
    badge: 'Diagnostic IA Gratuit',
    title: 'Évaluez votre maturité IA',
    titleAccent: 'en 3 minutes',
    desc: "Répondez à 6 questions stratégiques et recevez votre score 360°, une analyse personnalisée et votre roadmap d'action.",
    cta: "Commencer le diagnostic",
    steps: [
      {
        icon: Zap,
        title: 'Rapide (3 min)',
        desc: '6 questions clés sur votre activité.',
      },
      {
        icon: Brain,
        title: 'Analyse 360°',
        desc: 'Algorithme de scoring multi-dimensionnel.',
      },
      {
        icon: FileText,
        title: "Plan d'action",
        desc: 'Recevez votre roadmap personnalisée.',
      },
    ],
    secure: 'Gratuit & sans engagement',
    langSwitch: 'EN',
  },
  en: {
    badge: 'Free AI Diagnostic',
    title: 'Evaluate your AI maturity',
    titleAccent: 'in 3 minutes',
    desc: 'Answer 6 strategic questions and receive your 360° score, personalized analysis and action roadmap.',
    cta: 'Start diagnostic',
    steps: [
      {
        icon: Zap,
        title: 'Fast (3 min)',
        desc: '6 key questions about your activity.',
      },
      {
        icon: Brain,
        title: '360° Analysis',
        desc: 'Multi-dimensional scoring algorithm.',
      },
      {
        icon: FileText,
        title: 'Action Plan',
        desc: 'Receive your personalized roadmap.',
      },
    ],
    secure: 'Free & no commitment',
    langSwitch: 'FR',
  },
} as const;

// ── Client Page ────────────────────────────────────────────────────

export default function DiagnosticPageClient() {
  const [lang, setLang] = useState<Lang>('fr');
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#050507] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      {/* Language toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="px-3 py-1.5 text-xs font-mono border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
        >
          {t.langSwitch}
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
          <Brain className="w-4 h-4" />
          {t.badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mb-6 leading-tight">
          {t.title}
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            {t.titleAccent}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12 leading-relaxed">
          {t.desc}
        </p>

        {/* CTA */}
        <button
          onClick={() => setIsAuditOpen(true)}
          className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center gap-3 text-lg mb-16"
        >
          {t.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full mb-8">
          {t.steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Security note */}
        <p className="text-xs text-gray-600 flex items-center gap-2">
          <Shield className="w-3 h-3" />
          {t.secure}
        </p>
      </div>

      {/* Audit Wizard Modal */}
      <AuditWizard
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        lang={lang}
      />
    </div>
  );
}
