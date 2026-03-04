import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Parlons de Votre Projet IA",
  description:
    "Contactez Orchestra Intelligence pour discuter de votre projet IA. Formulaire de contact, email et prise de rendez-vous.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Prêt à{" "}
          <span className="gradient-text">orchestrer</span>
          {" "}votre entreprise ?
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Parlons de votre projet. Notre équipe vous répond sous 24h.
        </p>
        {/* TODO: Contact form — ported by dedicated worker */}
      </div>
    </div>
  );
}
