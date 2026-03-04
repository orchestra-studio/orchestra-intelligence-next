import type { Metadata } from "next";
import DiagnosticPageClient from "./DiagnosticPageClient";

export const metadata: Metadata = {
  title: "Diagnostic IA Gratuit — Évaluation 360° en 3 minutes | Orchestra Intelligence",
  description:
    "Évaluez votre maturité IA en 3 minutes. Score 360°, radar multi-dimensionnel et roadmap PDF personnalisée. Gratuit et sans engagement.",
  openGraph: {
    title: "Diagnostic IA Gratuit — Score 360° en 3 minutes",
    description:
      "Évaluez votre maturité IA en 3 minutes. Recevez votre score, radar et roadmap personnalisée.",
    url: "https://www.orchestraintelligence.fr/diagnostic",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic IA Gratuit | Orchestra Intelligence",
    description: "Évaluez votre maturité IA en 3 minutes. Score 360° et roadmap personnalisée.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr/diagnostic",
  },
};

export default function DiagnosticPage() {
  return <DiagnosticPageClient />;
}
