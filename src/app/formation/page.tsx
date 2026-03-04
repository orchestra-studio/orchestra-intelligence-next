import type { Metadata } from "next";
import {
  ArrowRight, GraduationCap, Sparkles, Target, FlaskConical, MonitorPlay,
  Lightbulb, Cpu, CheckCircle2, Check, Star, TrendingUp, Briefcase,
} from "lucide-react";
import { getFormationContent } from "@/lib/content";
import FormationForm from "@/components/formation/FormationForm";
import ScrollButton from "@/components/ui/ScrollButton";

// ===== SEO Metadata =====
export const metadata: Metadata = {
  title: "Formations IA pour Dirigeants et Équipes",
  description:
    "Formations IA immersives et pratiques pour vos équipes. De la découverte à l'expertise, apprenez à maîtriser les agents IA. Ateliers personnalisés à partir de 1 500€.",
  openGraph: {
    title: "Formations IA pour Dirigeants et Équipes",
    description:
      "Formations IA immersives pour entreprises. Ateliers pratiques, cas d'usage concrets, +500 talents formés.",
    url: "https://www.orchestraintelligence.fr/formation",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations IA pour Dirigeants et Équipes",
    description: "Formations IA immersives pour vos équipes. Découvrez nos programmes.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr/formation",
  },
};

const lang = "fr" as const;

export default function FormationPage() {
  const t = getFormationContent(lang);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            provider: {
              "@type": "Organization",
              name: "Orchestra Intelligence",
              url: "https://www.orchestraintelligence.fr",
            },
            name: "Formation IA Orchestra Intelligence",
            description: t.heroDesc,
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                name: t.plan1.title,
                courseMode: "onsite",
                offers: {
                  "@type": "Offer",
                  price: "1500",
                  priceCurrency: "EUR",
                },
              },
              {
                "@type": "CourseInstance",
                name: t.plan2.title,
                courseMode: "onsite",
                offers: {
                  "@type": "Offer",
                  price: "5000",
                  priceCurrency: "EUR",
                },
              },
            ],
          }),
        }}
      />

      <div className="pt-20 animate-fade-in-up">
        {/* ===== 1. HERO ===== */}
        <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-6">
                <GraduationCap className="w-3 h-3" /> {t.tag}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1]">
                {t.heroTitle.part1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t.heroTitle.highlight}
                </span>
                {t.heroTitle.part2}
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">{t.heroDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollButton
                  targetId="pricing"
                  className="px-8 py-4 bg-primary hover:bg-primaryGlow text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {t.cta1} <ArrowRight className="w-4 h-4" />
                </ScrollButton>
                <ScrollButton
                  targetId="contact-form"
                  className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all text-white font-medium flex items-center justify-center gap-2"
                >
                  {t.cta2}
                </ScrollButton>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-[400px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative z-10 p-8 glass-card rounded-3xl border border-white/20 rotate-3 hover:rotate-0 transition-all duration-700">
                <Sparkles className="w-32 h-32 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <div className="absolute -bottom-6 -right-6 glass-panel px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface flex items-center justify-center text-[10px] text-white"
                      >
                        User
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-white">
                    +500<br />
                    <span className="text-gray-400 font-normal">{t.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. APPROACH GRID ===== */}
        <section className="py-24 px-6 bg-surfaceHighlight/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">{t.gridTitle}</h2>
              <p className="text-gray-400">{t.gridDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.gridItems.map((item, idx) => {
                const icons = [
                  <Sparkles key="s" className="w-6 h-6 text-purple-400" />,
                  <Target key="t" className="w-6 h-6 text-blue-400" />,
                  <FlaskConical key="f" className="w-6 h-6 text-green-400" />,
                  <MonitorPlay key="m" className="w-6 h-6 text-orange-400" />,
                ];
                return (
                  <div
                    key={idx}
                    className="bg-surface border border-white/5 p-6 rounded-2xl hover:border-white/10 hover:bg-surfaceHighlight/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                      {icons[idx]}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 3. PRICING ===== */}
        <section id="pricing" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t.pricingTitle}</h2>
              <p className="text-gray-400">{t.pricingDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Plan 1 — Discovery */}
              <div className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all flex flex-col relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.plan1.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-mono text-white">{t.plan1.price}</span>
                    <span className="text-sm text-gray-400">{t.plan1.meta}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{t.plan1.detail}</p>
                </div>

                <div className="flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 rounded-lg w-fit">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">{t.plan1.tag}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{t.plan1.target}</p>

                <div className="space-y-3 mb-8 flex-grow">
                  {t.plan1.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <ScrollButton
                  targetId="contact-form"
                  className="w-full py-4 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-bold transition-all"
                >
                  {t.cta2}
                </ScrollButton>
              </div>

              {/* Plan 2 — Pro */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-surfaceHighlight to-surface border border-primary/50 hover:border-primary transition-all flex flex-col relative shadow-[0_0_30px_rgba(59,130,246,0.1)] transform md:-translate-y-4">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {t.plan2.rec}
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.plan2.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-mono text-primary">{t.plan2.price}</span>
                    <span className="text-sm text-gray-400">{t.plan2.meta}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{t.plan2.detail}</p>
                </div>

                <div className="flex items-center gap-2 mb-6 px-3 py-1 bg-primary/20 rounded-lg w-fit border border-primary/20">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{t.plan2.tag}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{t.plan2.target}</p>

                <div className="space-y-3 mb-8 flex-grow">
                  {t.plan2.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <ScrollButton
                  targetId="contact-form"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primaryGlow text-white font-bold transition-all shadow-lg shadow-primary/25"
                >
                  {t.cta2}
                </ScrollButton>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. WHY CHOOSE US ===== */}
        <section className="py-24 px-6 bg-surfaceHighlight/10 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">{t.whyTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {t.whyItems.map((item, i) => {
                const icons = [
                  <Star key="star" className="w-8 h-8 text-yellow-400" />,
                  <TrendingUp key="trend" className="w-8 h-8 text-green-400" />,
                  <Briefcase key="brief" className="w-8 h-8 text-blue-400" />,
                ];
                return (
                  <div key={i} className="p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                      {icons[i]}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 5. CONTACT FORM ===== */}
        <FormationForm
          lang={lang}
          formTitle={t.formTitle}
          labels={t.formLabels}
          plan1Title={t.plan1.title}
          plan1Price={t.plan1.price}
          plan2Title={t.plan2.title}
          plan2Price={t.plan2.price}
        />
      </div>
    </>
  );
}
