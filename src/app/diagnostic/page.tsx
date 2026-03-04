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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Diagnostic IA Orchestra Intelligence",
            description:
              "Évaluez la maturité IA de votre entreprise en 3 minutes. Score 360°, radar multi-dimensionnel et roadmap PDF personnalisée.",
            url: "https://www.orchestraintelligence.fr/diagnostic",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
            },
            provider: {
              "@type": "Organization",
              name: "Orchestra Intelligence",
              url: "https://www.orchestraintelligence.fr",
            },
          }),
        }}
      />
      <DiagnosticPageClient />
    </>
  );
}
