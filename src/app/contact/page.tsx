import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Parlons de Votre Projet IA | Orchestra Intelligence",
  description:
    "Contactez Orchestra Intelligence pour discuter de votre projet IA. Formulaire de contact, email et prise de rendez-vous. Réponse sous 24h.",
  openGraph: {
    title: "Contact — Orchestra Intelligence",
    description:
      "Contactez-nous pour discuter de votre projet IA. Réponse garantie sous 24h.",
    url: "https://www.orchestraintelligence.fr/contact",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Orchestra Intelligence",
    description: "Parlons de votre projet IA. Réponse sous 24h.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
