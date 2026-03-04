// ─── Use Cases Data — Pilotage Page ────────────────────────────────
// Extracted from monolithic App.tsx
// ────────────────────────────────────────────────────────────────────

import type { Lang } from './blog-data';

export interface UseCase {
  category: string;
  iconName: string;       // lucide icon name (resolved in component)
  iconColor: string;      // tailwind text-color class
  items: string[];
}

export const USE_CASES_DATA: Record<Lang, UseCase[]> = {
  fr: [
    {
      category: "Marketing",
      iconName: "Megaphone",
      iconColor: "text-pink-400",
      items: [
        "Campagne email automatisée", "Génération de posts sociaux", "Rédaction d'articles de blog",
        "Création de landing pages", "Publicités Facebook/Google", "Newsletters hebdomadaires",
        "Scripts vidéo marketing", "Descriptions produits", "Communiqués de presse", "Stratégie de contenu"
      ]
    },
    {
      category: "Analytique",
      iconName: "PieChart",
      iconColor: "text-blue-400",
      items: [
        "Dashboard de KPIs", "Analyse de sentiment", "Prédiction de ventes", "Segmentation client",
        "Analyse de churn", "Optimisation de prix", "Analyse de parcours", "Détection d'anomalies",
        "Reporting automatisé", "A/B testing intelligent"
      ]
    },
    {
      category: "Recherche",
      iconName: "Search",
      iconColor: "text-emerald-400",
      items: [
        "Veille concurrentielle", "Étude de marché", "Recherche de mots-clés", "Analyse de tendances",
        "Recherche académique", "Benchmark sectoriel", "Cartographie d'écosystème", "Analyse de brevets",
        "Sourcing de fournisseurs", "Recherche de leads"
      ]
    },
    {
      category: "Design & Créatif",
      iconName: "PenTool",
      iconColor: "text-purple-400",
      items: [
        "Maquettes UI/UX", "Charte graphique", "Logos & identité visuelle", "Présentations PowerPoint",
        "Infographies", "Bannières publicitaires", "Social media visuals", "Packaging design",
        "Motion design", "Brand guidelines"
      ]
    },
    {
      category: "Développement",
      iconName: "Code2",
      iconColor: "text-green-400",
      items: [
        "Prototype d'application", "Site web complet", "API & intégrations", "Base de données",
        "Dashboard analytics", "Chatbot personnalisé", "Extension Chrome", "Automatisation No-Code",
        "Migration de données", "Tests automatisés"
      ]
    },
    {
      category: "Traduction & Contenu",
      iconName: "Globe",
      iconColor: "text-cyan-400",
      items: [
        "Traduction site web", "Localisation d'application", "Documentation multilingue", "Sous-titrage vidéo",
        "Transcription audio", "Adaptation culturelle", "Glossaire technique", "Content spinning SEO",
        "Traduction juridique", "Support multilingue"
      ]
    },
    {
      category: "RH & Formation",
      iconName: "Users",
      iconColor: "text-orange-400",
      items: [
        "Rédaction de fiches de poste", "Screening de CV", "Onboarding automatisé", "Formation e-learning",
        "Évaluation de compétences", "Planification d'équipes", "Documentation process", "FAQ internes",
        "Culture d'entreprise", "Talent mapping"
      ]
    },
    {
      category: "Finance & Admin",
      iconName: "Calculator",
      iconColor: "text-yellow-400",
      items: [
        "Rapports financiers", "Prévisions de trésorerie", "Facturation automatisée", "Suivi de budget",
        "Analyse de rentabilité", "Gestion des dépenses", "Conformité comptable", "Notes de frais",
        "Relances impayés", "Tableau de bord financier"
      ]
    }
  ],
  en: [
    {
      category: "Marketing",
      iconName: "Megaphone",
      iconColor: "text-pink-400",
      items: [
        "Automated email campaigns", "Social post generation", "Blog article writing",
        "Landing page creation", "Facebook/Google Ads", "Weekly newsletters",
        "Marketing video scripts", "Product descriptions", "Press releases", "Content strategy"
      ]
    },
    {
      category: "Analytics",
      iconName: "PieChart",
      iconColor: "text-blue-400",
      items: [
        "KPI Dashboards", "Sentiment analysis", "Sales prediction", "Customer segmentation",
        "Churn analysis", "Price optimization", "Journey analysis", "Anomaly detection",
        "Automated reporting", "Intelligent A/B testing"
      ]
    },
    {
      category: "Research",
      iconName: "Search",
      iconColor: "text-emerald-400",
      items: [
        "Competitive intelligence", "Market study", "Keyword research", "Trend analysis",
        "Academic research", "Sector benchmark", "Ecosystem mapping", "Patent analysis",
        "Supplier sourcing", "Lead generation"
      ]
    },
    {
      category: "Design & Creative",
      iconName: "PenTool",
      iconColor: "text-purple-400",
      items: [
        "UI/UX mockups", "Brand identity", "Logos & visual identity", "PowerPoint presentations",
        "Infographics", "Ad banners", "Social media visuals", "Packaging design",
        "Motion design", "Brand guidelines"
      ]
    },
    {
      category: "Development",
      iconName: "Code2",
      iconColor: "text-green-400",
      items: [
        "App prototype", "Complete website", "API & integrations", "Database setup",
        "Analytics dashboard", "Custom chatbot", "Chrome extension", "No-Code automation",
        "Data migration", "Automated tests"
      ]
    },
    {
      category: "Translation & Content",
      iconName: "Globe",
      iconColor: "text-cyan-400",
      items: [
        "Website translation", "App localization", "Multilingual documentation", "Video subtitling",
        "Audio transcription", "Cultural adaptation", "Technical glossary", "SEO content spinning",
        "Legal translation", "Multilingual support"
      ]
    },
    {
      category: "HR & Training",
      iconName: "Users",
      iconColor: "text-orange-400",
      items: [
        "Job description writing", "CV screening", "Automated onboarding", "E-learning courses",
        "Skills assessment", "Team planning", "Process documentation", "Internal FAQs",
        "Company culture", "Talent mapping"
      ]
    },
    {
      category: "Finance & Admin",
      iconName: "Calculator",
      iconColor: "text-yellow-400",
      items: [
        "Financial reports", "Cash flow forecasting", "Automated invoicing", "Budget tracking",
        "Profitability analysis", "Expense management", "Accounting compliance", "Expense reports",
        "Payment reminders", "Financial dashboard"
      ]
    }
  ]
};
