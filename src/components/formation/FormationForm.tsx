"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { submitFormationLead } from "@/lib/supabase";
import type { Lang } from "@/lib/i18n";

interface FormationFormProps {
  lang: Lang;
  formTitle: string;
  labels: {
    name: string;
    phone: string;
    email: string;
    type: string;
    msg: string;
    cta: string;
    privacy: string;
    selectPlaceholder: string;
    customOption: string;
  };
  plan1Title: string;
  plan1Price: string;
  plan2Title: string;
  plan2Price: string;
}

export default function FormationForm({
  lang,
  formTitle,
  labels,
  plan1Title,
  plan1Price,
  plan2Title,
  plan2Price,
}: FormationFormProps) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    formationType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.fullName) return;

    setStatus("loading");
    const result = await submitFormationLead({
      full_name: form.fullName,
      phone: form.phone,
      email: form.email,
      formation_type: form.formationType,
      message: form.message,
      language: lang,
    });

    if (result.success) {
      setStatus("success");
      setForm({ fullName: "", phone: "", email: "", formationType: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact-form" className="py-24 px-6">
      <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">{formTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">{labels.name}</label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">{labels.phone}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">{labels.email}</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">{labels.type}</label>
            <select
              value={form.formationType}
              onChange={(e) => setForm((p) => ({ ...p, formationType: e.target.value }))}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none appearance-none"
            >
              <option value="">{labels.selectPlaceholder}</option>
              <option value="ia_decouverte">{plan1Title} - {plan1Price}</option>
              <option value="ia_experience_pro">{plan2Title} - {plan2Price}</option>
              <option value="custom">{labels.customOption}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">{labels.msg}</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-4 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${
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
              : labels.cta}
          </button>
          <p className="text-xs text-gray-600 text-center">{labels.privacy}</p>
        </form>
      </div>
    </section>
  );
}
