"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Mail, Phone, MapPin, CalendarDays, Send, CheckCircle2,
  ArrowRight, Clock, Globe, MessageSquare, Loader2,
} from "lucide-react";
import { submitLead } from "@/lib/supabase";

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5 text-blue-400" />,
    label: "Email",
    value: "sales@orchestraintelligence.fr",
    href: "mailto:sales@orchestraintelligence.fr",
  },
  {
    icon: <MapPin className="w-5 h-5 text-emerald-400" />,
    label: "Bureaux",
    value: "Toulouse, France",
    sub: "France • Suisse • Dubaï • Corée",
    href: undefined,
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-400" />,
    label: "Réponse",
    value: "Sous 24h garanties",
    href: undefined,
  },
  {
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    label: "Langues",
    value: "Français • English • 한국어",
    href: undefined,
  },
];

export default function ContactPageClient() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setFormState("sending");
    try {
      const result = await submitLead({
        first_name: firstName,
        last_name: lastName,
        email,
        message,
        source: "contact-page",
        language: "fr",
      });

      if (result.success) {
        setFormState("sent");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="pt-20 animate-fade-in-up">
      {/* ===== HERO ===== */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6">
            <MessageSquare className="w-3 h-3" /> Contactez-nous
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1]">
            Prêt à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              orchestrer
            </span>{" "}
            votre entreprise ?
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Parlons de votre projet. Notre équipe vous répond sous 24h.
          </p>
        </div>
      </section>

      {/* ===== CONTENT GRID ===== */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── LEFT: Form (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-400 text-sm mb-8">
                Décrivez votre projet et nous vous recontactons rapidement.
              </p>

              {formState === "sent" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message envoyé !</h3>
                  <p className="text-gray-400 mb-6">
                    Merci pour votre message. Notre équipe vous répondra sous 24h.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Prénom</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jean"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Dupont"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jean@entreprise.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Décrivez votre projet, vos besoins, vos défis..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400 text-sm">
                      Une erreur est survenue. Réessayez ou contactez-nous directement par email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending" || !email}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Info + Cal (2 cols) ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-6">Informations</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                      {info.sub && <p className="text-xs text-gray-500 mt-0.5">{info.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cal.com CTA */}
            <Link
              href="https://cal.com/orchestra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Prenez rendez-vous</h3>
                  <p className="text-sm text-gray-400">Appel stratégique de 30 min</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Discutons de votre projet en visio. Gratuit et sans engagement.
              </p>
              <span className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
                Réserver un créneau <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Location */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-4">Nos implantations</h3>
              <div className="space-y-3">
                {[
                  { flag: "🇫🇷", city: "Toulouse", role: "Siège social" },
                  { flag: "🇨🇭", city: "Suisse", role: "Clients DACH" },
                  { flag: "🇦🇪", city: "Dubaï", role: "Moyen-Orient" },
                  { flag: "🇰🇷", city: "Corée du Sud", role: "Asie-Pacifique" },
                ].map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{loc.flag}</span>
                    <span className="text-white font-medium">{loc.city}</span>
                    <span className="text-gray-500">— {loc.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
