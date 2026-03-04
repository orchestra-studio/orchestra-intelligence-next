"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from "recharts";

interface DiagnosticProps {
  tag: string;
  title: string;
  subtitle: string;
  steps: readonly { readonly title: string; readonly desc: string }[];
  cta: string;
  placeholder: string;
  secure: string;
  card: {
    readonly scoreLabel: string;
    readonly score: string;
    readonly level: string;
    readonly insight: string;
    readonly axes: Readonly<Record<string, string>>;
  };
}

export default function DiagnosticSection({ tag, title, subtitle, steps, cta, placeholder, secure, card }: DiagnosticProps) {
  const [email, setEmail] = useState("");

  const chartData = [
    { subject: card.axes.A, A: 120, fullMark: 150 },
    { subject: card.axes.B, A: 98, fullMark: 150 },
    { subject: card.axes.C, A: 86, fullMark: 150 },
    { subject: card.axes.D, A: 99, fullMark: 150 },
    { subject: card.axes.E, A: 85, fullMark: 150 },
    { subject: card.axes.F, A: 65, fullMark: 150 },
  ];

  return (
    <section id="diagnostic" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-background to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Offer & Form */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {tag}
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">{title}</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">{subtitle}</p>

            {/* Steps */}
            <div className="space-y-8 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surfaceHighlight border border-white/10 flex items-center justify-center font-bold text-xl text-primary shrink-0 shadow-inner">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Zone */}
            <div className="bg-surfaceHighlight/50 p-2 rounded-xl border border-white/10 flex flex-col sm:flex-row gap-2 mb-4 shadow-xl backdrop-blur-sm">
              <input
                type="email"
                placeholder={placeholder}
                className="flex-grow bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-gray-600 focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link
                href="/diagnostic"
                className="bg-primary hover:bg-primaryGlow text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/20 whitespace-nowrap flex items-center justify-center gap-2"
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono ml-2">
              <Lock className="w-3 h-3 text-green-500" />
              {secure}
            </div>
          </div>

          {/* RIGHT: Radar Chart Preview */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <Link
              href="/diagnostic"
              className="block glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div>
                  <span className="text-gray-400 text-xs font-mono uppercase tracking-wider block mb-1">
                    {card.scoreLabel}
                  </span>
                  <span className="text-3xl font-display font-bold text-white">{card.score}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
                  {card.level}
                </div>
              </div>

              {/* Chart */}
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                      name="Maturity"
                      dataKey="A"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fill="#3b82f6"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-ping shadow-[0_0_20px_white]" />
                </div>
              </div>

              {/* Insight */}
              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-gray-300 leading-relaxed font-medium">{card.insight}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
