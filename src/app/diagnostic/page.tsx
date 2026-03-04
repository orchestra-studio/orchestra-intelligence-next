import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic IA Gratuit — Évaluation 360° en 3 minutes",
  description:
    "Évaluez votre maturité IA en 3 minutes. Score 360°, radar multi-dimensionnel et roadmap PDF personnalisée. Gratuit et sans engagement.",
};

export default function DiagnosticPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          Audit IA Gratuit
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Diagnostic{" "}
          <span className="gradient-text">IA</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Évaluez votre maturité IA en 3 minutes. Recevez votre score 360° et
          votre roadmap personnalisée.
        </p>
        {/* TODO: Interactive audit wizard — ported by dedicated worker */}
      </div>
    </div>
  );
}
