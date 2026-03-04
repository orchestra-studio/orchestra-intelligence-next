"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { submitStudioLead } from "@/lib/supabase";
import type { Lang } from "@/lib/i18n";

interface StudioFormProps {
  lang: Lang;
  contactTitle: string;
  contactDesc: string;
  cta: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    project: string;
  };
}

export default function StudioForm({ lang, contactTitle, contactDesc, cta, placeholders }: StudioFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDescription: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;

    setStatus("loading");
    const result = await submitStudioLead({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      company: form.company,
      project_description: form.projectDescription,
      language: lang,
    });

    if (result.success) {
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", company: "", projectDescription: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="studio-contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10 text-center glass-panel p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-4xl font-display font-bold mb-6">{contactTitle}</h2>
        <p className="text-gray-400 mb-10 text-lg">{contactDesc}</p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={placeholders.firstName}
              value={form.firstName}
              onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-purple-500 outline-none text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder={placeholders.lastName}
              value={form.lastName}
              onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-purple-500 outline-none text-white placeholder-gray-500"
            />
          </div>
          <input
            type="email"
            required
            placeholder={placeholders.email}
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-purple-500 outline-none text-white placeholder-gray-500"
          />
          <input
            type="text"
            placeholder={placeholders.company}
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-purple-500 outline-none text-white placeholder-gray-500"
          />
          <textarea
            placeholder={placeholders.project}
            rows={4}
            value={form.projectDescription}
            onChange={(e) => setForm((p) => ({ ...p, projectDescription: e.target.value }))}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-purple-500 outline-none text-white placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full font-bold py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 ${
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
              ? lang === "fr" ? "Demande envoyée !" : "Request sent!"
              : status === "error"
              ? lang === "fr" ? "Erreur, réessayez" : "Error, try again"
              : cta}
          </button>
        </form>
      </div>
    </section>
  );
}
