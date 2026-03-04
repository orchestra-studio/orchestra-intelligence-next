import type { Metadata } from "next";
import {
  ArrowRight, Rocket, Shield, Target, BarChart3, Zap,
  CheckCircle2, CalendarDays, Megaphone, PieChart, Search,
  PenTool, Code2, Globe, Users, Calculator,
} from "lucide-react";
import Link from "next/link";

// ===== SEO Metadata =====
export const metadata: Metadata = {
  title: "Pilotage Agentique — Missions Stratégiques Déléguées | Orchestra Intelligence",
  description:
    "Délégation de missions stratégiques à des agents IA supervisés par nos experts. Marketing, analytique, développement, design. À partir de 1 000€ par mission.",
  openGraph: {
    title: "Pilotage Agentique — Missions IA Déléguées",
    description:
      "Confiez vos missions stratégiques à nos experts et leurs agents IA. Résultats garantis, à partir de 1 000€.",
    url: "https://www.orchestraintelligence.fr/pilotage",
    siteName: "Orchestra Intelligence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilotage Agentique | Orchestra Intelligence",
    description: "Missions stratégiques déléguées à nos agents IA supervisés.",
  },
  alternates: {
    canonical: "https://www.orchestraintelligence.fr/pilotage",
  },
};

// ===== Icon resolver =====
const ICON_MAP: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="w-5 h-5" />,
  PieChart: <PieChart className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Calculator: <Calculator className="w-5 h-5" />,
};

// ===== Use Cases (inline for SSR — no client import needed) =====
const USE_CASES = [
  {
    category: "Marketing",
    iconName: "Megaphone",
    iconColor: "text-pink-400",
    items: [
      "Campagne email automatisée", "Génération de posts sociaux", "Rédaction d'articles de blog",
      "Création de landing pages", "Publicités Facebook/Google", "Newsletters hebdomadaires",
      "Scripts vidéo marketing", "Descriptions produits", "Communiqués de presse", "Stratégie de contenu",
    ],
  },
  {
    category: "Analytique",
    iconName: "PieChart",
    iconColor: "text-blue-400",
    items: [
      "Dashboard de KPIs", "Analyse de sentiment", "Prédiction de ventes", "Segmentation client",
      "Analyse de churn", "Optimisation de prix", "Analyse de parcours", "Détection d'anomalies",
      "Reporting automatisé", "A/B testing intelligent",
    ],
  },
  {
    category: "Recherche",
    iconName: "Search",
    iconColor: "text-emerald-400",
    items: [
      "Veille concurrentielle", "Étude de marché", "Recherche de mots-clés", "Analyse de tendances",
      "Recherche académique", "Benchmark sectoriel", "Cartographie d'écosystème", "Analyse de brevets",
      "Sourcing de fournisseurs", "Recherche de leads",
    ],
  },
  {
    category: "Design & Créatif",
    iconName: "PenTool",
    iconColor: "text-purple-400",
    items: [
      "Maquettes UI/UX", "Charte graphique", "Logos & identité visuelle", "Présentations PowerPoint",
      "Infographies", "Bannières publicitaires", "Social media visuals", "Packaging design",
      "Motion design", "Brand guidelines",
    ],
  },
  {
    category: "Développement",
    iconName: "Code2",
    iconColor: "text-green-400",
    items: [
      "Prototype d'application", "Site web complet", "API & intégrations", "Base de données",
      "Dashboard analytics", "Chatbot personnalisé", "Extension Chrome", "Automatisation No-Code",
      "Migration de données", "Tests automatisés",
    ],
  },
  {
    category: "Traduction & Contenu",
    iconName: "Globe",
    iconColor: "text-cyan-400",
    items: [
      "Traduction site web", "Localisation d'application", "Documentation multilingue", "Sous-titrage vidéo",
      "Transcription audio", "Adaptation culturelle", "Glossaire technique", "Content spinning SEO",
      "Traduction juridique", "Support multilingue",
    ],
  },
  {
    category: "RH & Formation",
    iconName: "Users",
    iconColor: "text-orange-400",
    items: [
      "Rédaction de fiches de poste", "Screening de CV", "Onboarding automatisé", "Formation e-learning",
      "Évaluation de compétences", "Planification d'équipes", "Documentation process", "FAQ internes",
      "Culture d'entreprise", "Talent mapping",
    ],
  },
  {
    category: "Finance & Admin",
    iconName: "Calculator",
    iconColor: "text-yellow-400",
    items: [
      "Rapports financiers", "Prévisions de trésorerie", "Facturation automatisée", "Suivi de budget",
      "Analyse de rentabilité", "Gestion des dépenses", "Conformité comptable", "Notes de frais",
      "Relances impayés", "Tableau de bord financier",
    ],
  },
];

const VALUE_PROPS = [
  {
    icon: <Target className="w-6 h-6 text-emerald-400" />,
    title: "Expertise Humaine + IA",
    desc: "Chaque mission est supervisée par un expert qui orchestre les meilleurs agents IA pour votre besoin.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Flexibilité Totale",
    desc: "Pas d'abonnement. Pas d'engagement. Vous payez uniquement les missions dont vous avez besoin.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    title: "Résultats Mesurables",
    desc: "Chaque livrable est accompagné de métriques de performance et d'un rapport de qualité.",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Confidentialité Garantie",
    desc: "NDA systématique. Vos données restent vos données. Infrastructure sécurisée et souveraine.",
  },
];

export default function PilotagePage() {
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
            name: "Pilotage Agentique",
            description:
              "Délégation de missions stratégiques à des agents IA supervisés par nos experts.",
            offers: {
              "@type": "Offer",
              price: "1000",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "1000",
                priceCurrency: "EUR",
                unitText: "mission",
              },
            },
          }),
        }}
      />

      <div className="pt-20 animate-fade-in-up">
        {/* ===== 1. HERO ===== */}
        <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6">
                <Rocket className="w-3 h-3" /> Missions Déléguées
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Pilotage{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Agentique
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                Confiez vos missions stratégiques à nos experts et leurs agents IA.
                Marketing, analytique, développement, design — nous orchestrons
                l&apos;intelligence artificielle pour livrer des résultats concrets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://cal.com/orchestra-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <CalendarDays className="w-4 h-4" />
                  Réserver un appel
                </Link>
                <a
                  href="#use-cases"
                  className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all text-white font-medium flex items-center justify-center gap-2"
                >
                  Voir les missions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-[400px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 rotate-3 hover:rotate-0 transition-all duration-700">
                <Rocket className="w-32 h-32 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="text-xs font-bold text-white">
                    À partir de<br />
                    <span className="text-emerald-400 text-lg font-mono">1 000€</span>
                    <span className="text-gray-400 font-normal"> / mission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. VALUE PROPOSITION ===== */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">
                Pourquoi le Pilotage Agentique ?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Un modèle unique qui combine expertise humaine et puissance de l&apos;IA
                pour des résultats rapides et mesurables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUE_PROPS.map((prop, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:border-white/10 hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. USE CASES GRID ===== */}
        <section id="use-cases" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                +80 missions disponibles
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explorez les cas d&apos;usage par département. Chaque mission est
                orchestrée par un expert et ses agents IA spécialisés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {USE_CASES.map((uc, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${uc.iconColor}`}>
                      {ICON_MAP[uc.iconName]}
                    </div>
                    <h3 className="font-bold text-white">{uc.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {uc.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. PRICING ===== */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Tarification Simple
              </h2>
              <p className="text-gray-400">
                Pas d&apos;abonnement, pas de surprise. Vous payez par mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mission Ponctuelle */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mission Ponctuelle</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-mono text-white">1 000€</span>
                    <span className="text-sm text-gray-400">/ mission</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Livraison sous 5 à 10 jours</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {[
                    "1 mission stratégique complète",
                    "Expert dédié + agents IA",
                    "Livrables documentés",
                    "1 itération incluse",
                    "Support email 48h",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link
                  href="https://cal.com/orchestra-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black text-white font-bold transition-all text-center"
                >
                  Réserver un appel
                </Link>
              </div>

              {/* Pack Stratégique */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-white/[0.03] border border-emerald-500/50 hover:border-emerald-400 transition-all flex flex-col relative shadow-[0_0_30px_rgba(52,211,153,0.1)] transform md:-translate-y-4">
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Recommandé
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pack Stratégique</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-mono text-emerald-400">3 000€</span>
                    <span className="text-sm text-gray-400">/ mois</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">5 missions/mois • Engagement 3 mois</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {[
                    "5 missions stratégiques / mois",
                    "Expert dédié permanent",
                    "Agents IA multi-départements",
                    "Itérations illimitées",
                    "Dashboard de suivi en temps réel",
                    "Support prioritaire 24h",
                    "Rapports mensuels de performance",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link
                  href="https://cal.com/orchestra-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-600/25 text-center"
                >
                  Démarrer maintenant
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. HOW IT WORKS ===== */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-16 text-center">
              Comment ça marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Briefing",
                  desc: "Décrivez votre mission. Nous analysons le besoin et assignons l'expert + agents IA les plus adaptés.",
                  color: "text-emerald-400",
                },
                {
                  step: "02",
                  title: "Exécution",
                  desc: "Nos agents IA travaillent sous supervision humaine. Vous suivez l'avancement en temps réel.",
                  color: "text-teal-400",
                },
                {
                  step: "03",
                  title: "Livraison",
                  desc: "Vous recevez vos livrables, les métriques de performance et pouvez itérer si besoin.",
                  color: "text-cyan-400",
                },
              ].map((s, i) => (
                <div key={i} className="text-center p-6">
                  <div className={`text-5xl font-mono font-bold ${s.color} mb-4`}>{s.step}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. FINAL CTA ===== */}
        <section className="py-24 px-6 bg-gradient-to-b from-emerald-500/5 to-transparent border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Prêt à déléguer vos missions ?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Réservez un appel stratégique gratuit de 30 minutes.
              Nous analyserons vos besoins et proposerons les premières missions.
            </p>
            <Link
              href="https://cal.com/orchestra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/25 text-lg"
            >
              <CalendarDays className="w-5 h-5" />
              Réserver un appel gratuit
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
