import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Brain, Cpu, BarChart3,
  CheckCircle2, Clock, Layers, Zap, Lightbulb,
} from "lucide-react";
import { CONTENT, CLIENT_LOGOS } from "@/lib/i18n";
import GlobalPresence from "@/components/home/GlobalPresence";
import DiagnosticSection from "@/components/home/DiagnosticSection";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";

// ===== SEO Metadata =====
export const metadata: Metadata = {
  title: "Orchestra Intelligence — L'IA Claire, Utile et Humaine",
  description:
    "Formation IA sur mesure, développement d'agents intelligents et pilotage agentique. Diagnostic gratuit en 3 minutes. Toulouse, France | International.",
  openGraph: {
    title: "Orchestra Intelligence — L'IA Claire, Utile et Humaine",
    description:
      "Formation IA sur mesure, développement d'agents intelligents et pilotage agentique pour libérer le potentiel de vos équipes.",
    url: "https://www.orchestraintelligence.fr",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchestra Intelligence — L'IA Claire, Utile et Humaine",
    description: "Formation IA, agents intelligents et pilotage agentique. Diagnostic gratuit.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr",
  },
};

const lang = "fr" as const;

export default function HomePage() {
  const t = CONTENT[lang];

  return (
    <>
      {/* JSON-LD Schema.org — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Orchestra Intelligence",
            url: "https://www.orchestraintelligence.fr",
            logo: "https://www.orchestraintelligence.fr/logo.png",
            description: t.hero.desc,
            email: "sales@orchestraintelligence.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toulouse",
              addressCountry: "FR",
            },
            sameAs: [
              "https://www.linkedin.com/company/orchestra-intelligence",
              "https://x.com/music_music_AI",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Formation IA", description: "Programmes exécutifs pour maîtriser l'IA stratégique" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Agent Studio", description: "Développement d'agents IA sur mesure" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Pilotage Agentique", description: "Délégation de missions stratégiques" },
                },
              ],
            },
          }),
        }}
      />

      {/* JSON-LD Schema.org — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce qu'un agent IA et comment peut-il aider mon entreprise ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un agent IA est un système intelligent capable d'effectuer des tâches de manière autonome : analyser des données, prendre des décisions, automatiser des processus métier. Contrairement à un simple logiciel, il apprend et s'adapte à votre contexte.",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la différence entre un agent IA et un simple chatbot ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les chatbots répondent à des questions préprogrammées. Un agent IA comprend le contexte, apprend de vos données, s'intègre à vos outils et exécute des actions complexes de manière autonome.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coûte l'implémentation d'agents IA ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le Pilotage Agentique ponctuel démarre à 1 000€, la formule Studio mensuelle à partir de 3 000€/mois. Un diagnostic gratuit précède toujours l'engagement.",
                },
              },
              {
                "@type": "Question",
                name: "Combien de temps pour déployer un agent IA opérationnel ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour un agent simple, 7 à 10 jours. Pour un système multi-agents complexe, entre 15 et 30 jours. Un POC fonctionnel est livré dès la première semaine.",
                },
              },
              {
                "@type": "Question",
                name: "Mes données sont-elles sécurisées ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Toutes vos données sont hébergées en Europe, conformes au RGPD, et ne sont jamais revendues. Chiffrement de bout en bout et contrôle utilisateur garanti. Nous suivons les normes ISO 27001.",
                },
              },
              {
                "@type": "Question",
                name: "Vos agents IA peuvent-ils s'intégrer à mes outils existants ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous avons plus de 500 intégrations disponibles : CRM (Salesforce, HubSpot), communication (Slack, Gmail, Teams), bases de données, outils de gestion, plateformes e-commerce, et bien d'autres.",
                },
              },
              {
                "@type": "Question",
                name: "Proposez-vous des formations IA pour les dirigeants ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous proposons des programmes exécutifs de formation IA couvrant les fondamentaux, l'identification d'opportunités et la maîtrise des outils. Les formations sont immersives, pratiques et adaptées à votre secteur d'activité.",
                },
              },
              {
                "@type": "Question",
                name: "Comment fonctionne le diagnostic IA gratuit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le diagnostic prend 3 minutes : 12 questions clés sur votre activité, un algorithme de scoring multi-dimensionnel 360°, et vous recevez une roadmap PDF personnalisée avec vos leviers de croissance. C'est gratuit et sans engagement.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le ROI moyen d'un agent IA Orchestra ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nos clients constatent en moyenne une réduction de 40% du temps passé sur les tâches automatisées et un ROI positif dès le 3ème mois. Le diagnostic gratuit vous donne une estimation personnalisée.",
                },
              },
              {
                "@type": "Question",
                name: "Orchestra Intelligence travaille-t-il à l'international ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous sommes présents en France (Toulouse), Suisse, Dubaï et Corée du Sud. Nos agents sont multilingues et nous accompagnons des clients internationaux comme Wella, Schwarzkopf et Henkel.",
                },
              },
            ],
          }),
        }}
      />

      <div className="animate-fade-in-up">
        {/* ===== 1. HERO ===== */}
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-accent text-glow">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.desc}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/diagnostic"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center gap-2">
                  {t.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="https://cal.com/orchestra-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg glass-card text-white font-medium hover:bg-white/5 transition-all border border-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>

        {/* ===== 2. GLOBAL PRESENCE ===== */}
        <GlobalPresence trusted={t.global.trusted} hubs={t.global.hubs} />

        {/* ===== 3. PROBLEM ===== */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t.problem.title}</h2>
              <p className="text-xl text-gray-400">
                {t.problem.subtitle} <br />
                <span className="text-white">{t.problem.highlight}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.problem.items.map((prob, idx) => {
                const icons = [
                  <Clock key="clock" className="w-6 h-6 text-red-400" />,
                  <Layers key="layers" className="w-6 h-6 text-orange-400" />,
                  <Zap key="zap" className="w-6 h-6 text-yellow-400" />,
                  <Lightbulb key="bulb" className="w-6 h-6 text-purple-400" />,
                ];
                return (
                  <div
                    key={idx}
                    className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {icons[idx]}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{prob.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{prob.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 4. METHODOLOGY ===== */}
        <section id="methode" className="py-24 px-6 relative bg-surfaceHighlight/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t.method.title}</h2>
              <p className="text-gray-400">{t.method.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formation Card */}
              <Link
                href="/formation"
                className="group relative rounded-3xl bg-background border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-primary">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.method.cards.formation.title}</h3>
                  <p className="text-primary font-mono text-sm mb-6">{t.method.cards.formation.tagline}</p>
                  <p className="text-gray-400 mb-8 flex-grow">{t.method.cards.formation.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {t.method.cards.formation.points.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <span className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors mt-auto">
                    {t.method.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Studio Card (Featured) */}
              <Link
                href="/studio"
                className="group relative rounded-3xl bg-background border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform lg:-translate-y-4 shadow-2xl shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                  Featured
                </div>
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.method.cards.studio.title}</h3>
                  <p className="text-purple-400 font-mono text-sm mb-6">{t.method.cards.studio.tagline}</p>
                  <p className="text-gray-400 mb-8">{t.method.cards.studio.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {t.method.cards.studio.tags.map((tag) => (
                      <span key={tag} className="text-xs text-center py-1.5 rounded bg-white/5 border border-white/5 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 font-mono mb-8 border-t border-white/5 pt-4">
                    {t.method.cards.studio.footer}
                  </div>

                  <span className="flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors mt-auto">
                    {t.method.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Pilotage Card */}
              <Link
                href="/pilotage"
                className="group relative rounded-3xl bg-background border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.method.cards.pilotage.title}</h3>
                  <p className="text-emerald-500 font-mono text-sm mb-6">{t.method.cards.pilotage.tagline}</p>
                  <p className="text-gray-400 mb-8 flex-grow">{t.method.cards.pilotage.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {t.method.cards.pilotage.tags.map((tag, i) => (
                      <span key={i} className="text-xs py-1 px-2 rounded-md bg-white/5 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-2 text-sm font-semibold hover:text-emerald-500 transition-colors mt-auto">
                    {t.method.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 5. DIAGNOSTIC ===== */}
        <DiagnosticSection {...t.diagnostic} />

        {/* ===== 6. FAQ ===== */}
        <FAQ title={t.faq.title} subtitle={t.faq.subtitle} items={t.faq.items} />

        {/* ===== 7. CONTACT ===== */}
        <ContactForm lang={lang} title={t.contact.title} cta={t.contact.cta} placeholders={t.contact.placeholders} />
      </div>
    </>
  );
}
