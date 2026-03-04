import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Orchestra Intelligence — L'IA Claire, Utile et Humaine",
    template: "%s | Orchestra Intelligence",
  },
  description:
    "Agence IA spécialisée dans le développement d'agents intelligents pour CRM, Marketing, RH et Finance. Formations, Agent Studio et Pilotage Agentique. Toulouse, France.",
  metadataBase: new URL("https://www.orchestraintelligence.fr"),
  openGraph: {
    title: "Orchestra Intelligence — Agents IA pour Entreprises",
    description:
      "L'IA Claire, Utile et Humaine. Développement d'agents IA sur mesure, formations dirigeants, pilotage agentique.",
    type: "website",
    url: "https://www.orchestraintelligence.fr",
    locale: "fr_FR",
    siteName: "Orchestra Intelligence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchestra Intelligence — Agents IA pour Entreprises",
    description: "L'IA Claire, Utile et Humaine.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.orchestraintelligence.fr" },
  icons: { icon: "/favicon.ico" },
};

// Schema.org JSON-LD — Organization
const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orchestra Intelligence",
  url: "https://www.orchestraintelligence.fr",
  description:
    "L'IA Claire, Utile et Humaine. Agence spécialisée en agents IA pour entreprises.",
  foundingDate: "2024",
  founder: { "@type": "Person", name: "Ludovic Goutel" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@orchestraintelligence.fr",
  },
  sameAs: [
    "https://www.linkedin.com/company/orchestra-intelligence",
    "https://github.com/orchestra-studio",
  ],
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "South Korea" },
  ],
};

// Schema.org JSON-LD — WebSite
const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Orchestra Intelligence",
  url: "https://www.orchestraintelligence.fr",
  description: "L'IA Claire, Utile et Humaine",
  inLanguage: ["fr", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.orchestraintelligence.fr/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#02040a] text-white min-h-screen`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
