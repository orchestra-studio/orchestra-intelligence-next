import type { Metadata } from "next";
import {
  ArrowRight, Code2, Wand2, Rocket, Blocks, TrendingUp, ShieldCheck,
  LayoutTemplate, Cpu, Zap, Shield,
  Globe, Database, MessageSquare, CreditCard,
  Briefcase, ShoppingCart, Brain,
} from "lucide-react";
import { getStudioContent } from "@/lib/content";
import StudioForm from "@/components/studio/StudioForm";
import ScrollButton from "@/components/ui/ScrollButton";

// ===== SEO Metadata =====
export const metadata: Metadata = {
  title: "Agent Studio — Développement IA Sur Mesure | Orchestra Intelligence",
  description:
    "Développement d'agents IA et SaaS sur mesure. De l'idée à la production en 2-4 semaines. +500 intégrations. Conformité RGPD. Devis gratuit.",
  openGraph: {
    title: "Agent Studio — Développement IA Sur Mesure | Orchestra Intelligence",
    description:
      "SaaS et agents IA sur mesure pour votre entreprise. Stack moderne, livraison rapide, sécurité RGPD.",
    url: "https://www.orchestraintelligence.fr/studio",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Studio | Orchestra Intelligence",
    description: "Développement IA sur mesure. SaaS & AaaS à la demande.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr/studio",
  },
};

const lang = "fr" as const;

export default function StudioPage() {
  const t = getStudioContent(lang);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "Organization",
              name: "Orchestra Intelligence",
              url: "https://www.orchestraintelligence.fr",
            },
            name: "Agent Studio",
            description: t.heroDesc,
            serviceType: "AI Development Studio",
            areaServed: ["FR", "CH", "AE", "KR"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Studio Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom SaaS Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AaaS - Agent as a Service" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agent Integration" } },
              ],
            },
          }),
        }}
      />

      <div className="pt-20 animate-fade-in-up">
        {/* ===== 1. HERO ===== */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-background">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider mb-8 animate-fade-in-up">
              <Code2 className="w-3 h-3" /> {t.tag}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
              {t.heroTitle.part1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-glow">
                {t.heroTitle.highlight}
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScrollButton
                targetId="studio-contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center gap-2">
                  <Wand2 className="w-5 h-5" /> {t.cta1}
                </span>
              </ScrollButton>
              <ScrollButton
                targetId="use-cases"
                className="px-8 py-4 rounded-xl glass-card text-white font-medium hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2"
              >
                {t.cta2} <ArrowRight className="w-4 h-4" />
              </ScrollButton>
            </div>
          </div>
        </section>

        {/* ===== 2. STATS & EVOLUTION ===== */}
        <section className="py-20 border-y border-white/5 bg-surface/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {t.stats.map((stat, i) => {
                const icons = [
                  <Rocket key="r" className="w-5 h-5 text-green-400" />,
                  <Blocks key="b" className="w-5 h-5 text-blue-400" />,
                  <TrendingUp key="t" className="w-5 h-5 text-purple-400" />,
                  <ShieldCheck key="s" className="w-5 h-5 text-orange-400" />,
                ];
                return (
                  <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-center gap-2 mb-2 text-gray-400 text-sm font-mono uppercase">
                      {icons[i]} {stat.label}
                    </div>
                    <div className="text-3xl font-display font-bold text-white">{stat.val}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-display font-bold mb-6">{t.evoTitle}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{t.evoDesc1}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{t.evoDesc2}</p>
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  {t.evoCta}
                </div>
              </div>

              {/* Code Visual */}
              <div className="lg:w-1/2 relative h-[300px] w-full bg-grid-pattern rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="w-3/4 p-6 glass-card rounded-xl border border-white/10 font-mono text-xs text-gray-400 leading-loose shadow-2xl transform rotate-[-5deg]">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">createAgent</span> ={" "}
                  <span className="text-yellow-400">async</span> () =&gt; {"{"}<br />
                  &nbsp;&nbsp;<span className="text-purple-400">await</span> ai.connect(
                  <span className="text-green-400">&apos;gemini-3.0&apos;</span>);<br />
                  &nbsp;&nbsp;<span className="text-gray-500">// Deploying custom logic...</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> new{" "}
                  <span className="text-blue-400">SuperSaaS</span>();<br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. SOLUTIONS GRID ===== */}
        <section className="py-24 px-6 bg-surfaceHighlight/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">{t.solutionsTitle}</h2>
              <p className="text-gray-400">{t.solutionsDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.solutionItems.map((item, i) => {
                const icons = [
                  <LayoutTemplate key="l" className="w-6 h-6 text-blue-400" />,
                  <Cpu key="c" className="w-6 h-6 text-purple-400" />,
                  <Zap key="z" className="w-6 h-6 text-yellow-400" />,
                  <Code2 key="co" className="w-6 h-6 text-green-400" />,
                  <TrendingUp key="t" className="w-6 h-6 text-pink-400" />,
                  <Shield key="s" className="w-6 h-6 text-orange-400" />,
                ];
                return (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl bg-surface border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {icons[i]}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 4. INTEGRATIONS ===== */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">{t.integrationsTitle}</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t.integrationsDesc}</p>

            <div className="relative h-[400px] w-full flex items-center justify-center">
              <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-pulse-slow" />
              <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-pulse" />
              <div className="absolute w-[200px] h-[200px] border border-white/20 rounded-full" />

              <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-[0_0_50px_rgba(255,255,255,0.5)] z-10">
                Orchestra
              </div>

              <div className="absolute top-10 left-1/4 p-3 glass-card rounded-xl flex items-center gap-2 text-xs font-mono">
                <Database className="w-4 h-4 text-blue-400" /> Salesforce
              </div>
              <div className="absolute bottom-20 right-1/4 p-3 glass-card rounded-xl flex items-center gap-2 text-xs font-mono">
                <MessageSquare className="w-4 h-4 text-green-400" /> Slack
              </div>
              <div className="absolute top-1/3 right-10 p-3 glass-card rounded-xl flex items-center gap-2 text-xs font-mono">
                <CreditCard className="w-4 h-4 text-purple-400" /> Stripe
              </div>
              <div className="absolute bottom-1/3 left-10 p-3 glass-card rounded-xl flex items-center gap-2 text-xs font-mono">
                <Globe className="w-4 h-4 text-orange-400" /> HubSpot
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. USE CASES ===== */}
        <section id="use-cases" className="py-24 px-6 bg-surfaceHighlight/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-16 text-center">{t.useCasesTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.values(t.useCases).map((col, idx) => {
                const colors = ["text-blue-400", "text-green-400", "text-yellow-400", "text-purple-400"];
                const dotColors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
                const icons = [
                  <Briefcase key="b" className="w-5 h-5" />,
                  <ShoppingCart key="s" className="w-5 h-5" />,
                  <Zap key="z" className="w-5 h-5" />,
                  <Brain key="br" className="w-5 h-5" />,
                ];
                return (
                  <div key={idx} className="space-y-6">
                    <h3 className={`text-lg font-bold flex items-center gap-2 ${colors[idx]}`}>
                      {icons[idx]} {col.title}
                    </h3>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2 border-b border-white/5 pb-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${dotColors[idx]}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 6. CONTACT FORM ===== */}
        <StudioForm
          lang={lang}
          contactTitle={t.contactTitle}
          contactDesc={t.contactDesc}
          cta={t.cta1}
          placeholders={t.formPlaceholders}
        />
      </div>
    </>
  );
}
