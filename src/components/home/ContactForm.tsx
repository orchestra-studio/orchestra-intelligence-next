"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { submitLead } from "@/lib/supabase";
import type { Lang } from "@/lib/i18n";

interface ContactFormProps {
  lang: Lang;
  title: string;
  cta: string;
  placeholders: {
    name: string;
    lname: string;
    msg: string;
  };
}

export default function ContactForm({ lang, title, cta, placeholders }: ContactFormProps) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;

    setStatus("loading");
    const result = await submitLead({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      message: form.message,
      source: "home_contact",
      language: lang,
    });

    if (result.success) {
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-3xl mx-auto relative z-10 text-center glass-panel p-12 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{title}</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={placeholders.name}
              value={form.firstName}
              onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder={placeholders.lname}
              value={form.lastName}
              onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none text-white placeholder-gray-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none text-white placeholder-gray-500"
          />
          <textarea
            placeholder={placeholders.msg}
            rows={4}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none text-white placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              status === "success"
                ? "bg-green-500 text-white"
                : status === "error"
                ? "bg-red-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === "success" && <Check className="w-5 h-5" />}
            {status === "success"
              ? lang === "fr" ? "Message envoyé !" : "Message sent!"
              : status === "error"
              ? lang === "fr" ? "Erreur, réessayez" : "Error, try again"
              : cta}
          </button>
        </form>
      </div>
    </section>
  );
}
