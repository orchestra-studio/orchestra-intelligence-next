"use client";

import { useState } from "react";
import {
  Brain, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Clock, FileText,
} from "lucide-react";
import { AuditWizard } from "@/components/diagnostic";

const FEATURES = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "3 minutes chrono",
    desc: "7 questions ciblées pour évaluer votre maturité IA sur tous les axes stratégiques.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    title: "Score 360° & Radar",
    desc: "Visualisez vos forces et faiblesses avec un radar multi-dimensionnel interactif.",
  },
  {
    icon: <FileText className="w-6 h-6 text-emerald-400" />,
    title: "Roadmap Personnalisée",
    desc: "Recevez un plan d'action concret en 3 phases pour accélérer votre transformation IA.",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    title: "100% Confidentiel",
    desc: "Vos données sont protégées. Aucune information partagée avec des tiers.",
  },
];

const STEPS = [
  { num: "01", label: "Entrez votre email", color: "text-blue-400" },
  { num: "02", label: "Répondez à 7 questions", color: "text-purple-400" },
  { num: "03", label: "Recevez votre rapport IA", color: "text-emerald-400" },
];

export default function DiagnosticPageClient() {
  const [wizardOpen, setWizardOpen] = useState(false);
  const lang = "fr" as const;

  return (
    <>
      <div className="pt-20 animate-fade-in-up">
        {/* ===== HERO ===== */}
        <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6">
              <Brain className="w-3 h-3" /> Audit IA Gratuit
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
              Diagnostic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                IA
              </span>{" "}
              360°
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Évaluez votre maturité IA en 3 minutes. Recevez votre score personnalisé,
              un radar multi-dimensionnel et une roadmap stratégique concrète.
            </p>

            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-lg group"
            >
              <Zap className="w-5 h-5" />
              Commencer le diagnostic
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Gratuit • Sans engagement • Résultats immédiats
            </p>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              Comment ça marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="text-center p-6">
                  <div className={`text-5xl font-mono font-bold ${step.color} mb-4`}>
                    {step.num}
                  </div>
                  <p className="text-lg font-medium text-white">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                Ce que vous obtenez
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Un diagnostic complet de votre maturité IA, avec des recommandations
                actionables pour chaque département.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-white/10 hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT WE EVALUATE ===== */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-12">
              Les 7 dimensions évaluées
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Stratégie IA", "Infrastructure Data", "Compétences Équipe",
                "Automatisation", "Innovation Produit", "Éthique & Conformité",
                "ROI & Performance",
              ].map((dim, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl flex items-center gap-2 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  {dim}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Prêt à évaluer votre maturité IA ?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              3 minutes suffisent pour obtenir votre score, identifier vos leviers
              de croissance et recevoir votre roadmap personnalisée.
            </p>
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 text-lg group"
            >
              <Brain className="w-5 h-5" />
              Lancer mon diagnostic gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      {/* ===== AUDIT WIZARD MODAL ===== */}
      <AuditWizard isOpen={wizardOpen} onClose={() => setWizardOpen(false)} lang={lang} />
    </>
  );
}
