export type Lang = "fr" | "en";

// Navigation items
export const NAV_ITEMS = {
  fr: [
    { label: "Formation", href: "/formation" },
    { label: "Studio", href: "/studio" },
    { label: "Pilotage", href: "/pilotage" },
    { label: "Méthode", href: "/methode" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ],
  en: [
    { label: "Training", href: "/formation" },
    { label: "Studio", href: "/studio" },
    { label: "Piloting", href: "/pilotage" },
    { label: "Method", href: "/methode" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;

// Full content translations
export const CONTENT = {
  fr: {
    nav: {
      cta: "Diagnostic IA",
      tagline: "Intelligence Artificielle Globale",
    },
    hero: {
      badge: "L'intelligence claire, utile et humaine",
      titleLine1: "Réinventez vos process",
      titleLine2: "avec les agents IA",
      desc: "Formation IA sur mesure, développement d'agents intelligents et pilotage agentique pour libérer le potentiel de vos équipes. Diagnostic gratuit en 3 minutes.",
      ctaPrimary: "Faire le diagnostic (3 min)",
      ctaSecondary: "Réserver ma démo",
    },
    global: {
      trusted: "Ils nous font confiance à l'international",
      hubs: ["France", "Suisse", "Dubaï", "Corée"],
    },
    problem: {
      title: "Le vrai problème",
      subtitle: "Vous passez plus de temps à gérer qu'à créer.",
      highlight: "L'IA peut tout changer — si elle est bien orchestrée.",
      items: [
        {
          title: "Temps perdu",
          desc: "Plus de temps passé à gérer les outils qu'à créer de la valeur réelle.",
        },
        {
          title: "Outils dispersés",
          desc: "Des silos d'information créés par des outils qui ne communiquent pas.",
        },
        {
          title: "Tâches répétitives",
          desc: "Des processus manuels lents qui devraient être automatisés.",
        },
        {
          title: "Manque de clarté",
          desc: "La difficulté de savoir par où commencer l'intégration de l'IA.",
        },
      ],
    },
    method: {
      title: "La méthode Orchestra",
      subtitle: "Une approche globale : comprendre, automatiser, piloter.",
      cards: {
        formation: {
          title: "Formation",
          tagline: "Former pour comprendre",
          desc: "Programmes exécutifs pour maîtriser l'IA stratégique.",
          points: [
            "Fondamentaux IA",
            "Identification d'opportunités",
            "Maîtrise des outils",
          ],
        },
        studio: {
          title: "Agent Studio",
          tagline: "Automatiser pour respirer",
          desc: "Développement d'agents IA sur mesure intégrés à vos workflows.",
          tags: ["CRM", "Marketing", "RH", "Finance"],
          footer: "Orchestration multi-agents complexe",
        },
        pilotage: {
          title: "Pilotage",
          tagline: "Piloter pour performer",
          desc: "Délégation de missions stratégiques à nos experts et leurs agents.",
          tags: ["Marketing", "Analytique", "SEO", "Global"],
        },
      },
      cta: "Découvrir",
    },
    diagnostic: {
      tag: "Audit IA Gratuit",
      title: "Votre maturité IA en temps réel",
      subtitle:
        "Identifiez vos leviers de croissance immédiats en comparant votre entreprise aux standards du marché.",
      steps: [
        { title: "Rapide (3 min)", desc: "12 questions clés sur votre activité." },
        { title: "Analyse 360°", desc: "Algorithme de scoring multi-dimensionnel." },
        { title: "Plan d'action", desc: "Recevez votre roadmap PDF personnalisée." },
      ],
      cta: "Commencer l'audit",
      placeholder: "votre@email.com",
      secure: "Gratuit & sans engagement",
      card: {
        scoreLabel: "Score Global",
        score: "78/100",
        level: "Niveau : Avancé",
        insight: "💡 Conseil IA : Votre automatisation est solide, mais la sécurité des données nécessite une attention immédiate pour passer au niveau supérieur.",
        axes: { A: "Stratégie", B: "Outils", C: "Data", D: "Équipe", E: "Sécurité", F: "Auto" }
      }
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "L'expertise IA expliquée",
      items: [
        {
          q: "Qu'est-ce qu'un agent IA et comment peut-il aider mon entreprise ?",
          a: "Un agent IA est un système intelligent capable d'effectuer des tâches de manière autonome : analyser des données, prendre des décisions, automatiser des processus métier.",
        },
        {
          q: "Quelle est la différence entre un agent IA et un simple chatbot ?",
          a: "Les chatbots répondent à des questions préprogrammées. Un agent IA comprend le contexte, apprend de vos données, s'intègre à vos outils et exécute des actions complexes.",
        },
        {
          q: "Combien coûte l'implémentation d'agents IA ?",
          a: "Le Pilotage Agentique ponctuel démarre à 1 000€, la formule Studio mensuelle à partir de 3 000€/mois. Un diagnostic gratuit précède toujours l'engagement.",
        },
        {
          q: "Combien de temps pour déployer un agent IA opérationnel ?",
          a: "Pour un agent simple, 7 à 10 jours. Pour un système multi-agents complexe, entre 15 et 30 jours.",
        },
        {
          q: "Mes données sont-elles sécurisées ?",
          a: "Toutes vos données sont hébergées en Europe, conformes au RGPD, et ne sont jamais revendues. Chiffrement de bout en bout et contrôle utilisateur garanti.",
        },
        {
          q: "Vos agents IA peuvent-ils s'intégrer à mes outils existants ?",
          a: "Nous avons plus de 500 intégrations disponibles : CRM, communication, bases de données, outils de gestion, plateformes e-commerce, et bien d'autres.",
        },
      ],
    },
    footer: {
      desc: "L'intelligence artificielle claire, utile et humaine.",
      rights: "Tous droits réservés.",
      cols: { solutions: "Solutions", company: "Entreprise", legal: "Légal" },
      contact: {
        email: "sales@orchestraintelligence.fr",
        location: "Toulouse, France",
      },
      social: {
        linkedin: "https://www.linkedin.com/company/orchestra-intelligence",
        twitter: "https://x.com/music_music_AI",
      },
    },
    contact: {
      title: "Prêt à orchestrer votre entreprise ?",
      cta: "Envoyer ma demande",
      placeholders: { name: "Prénom", lname: "Nom", msg: "Message" },
    },
    cookie: {
      title: "Cookies & Confidentialité",
      desc: "Ce site utilise des cookies essentiels au fonctionnement et des cookies analytiques pour améliorer votre expérience. Aucune donnée n'est revendue. Consultez notre ",
      policy: "politique de confidentialité",
      accept: "Accepter",
      decline: "Refuser",
    },
  },
  en: {
    nav: {
      cta: "AI Diagnostic",
      tagline: "Global Artificial Intelligence",
    },
    hero: {
      badge: "Clear, useful, and human intelligence",
      titleLine1: "Reinvent your processes",
      titleLine2: "with AI agents",
      desc: "Custom AI training, intelligent agent development, and agentic piloting to unlock your team's potential. Free 3-minute diagnostic.",
      ctaPrimary: "Start Diagnosis (3 min)",
      ctaSecondary: "Book my demo",
    },
    global: {
      trusted: "Trusted internationally",
      hubs: ["France", "Switzerland", "Dubai", "Korea"],
    },
    problem: {
      title: "The Real Problem",
      subtitle: "You spend more time managing than creating.",
      highlight: "AI can change everything — if orchestrated well.",
      items: [
        {
          title: "Wasted Time",
          desc: "More time spent managing tools than creating real value.",
        },
        {
          title: "Scattered Tools",
          desc: "Information silos created by tools that don't communicate.",
        },
        {
          title: "Repetitive Tasks",
          desc: "Slow manual processes that should be automated.",
        },
        {
          title: "Lack of Clarity",
          desc: "Difficulty knowing where to start with AI integration.",
        },
      ],
    },
    method: {
      title: "The Orchestra Method",
      subtitle: "A global approach: understand, automate, pilot.",
      cards: {
        formation: {
          title: "Training",
          tagline: "Train to understand",
          desc: "Executive programs to master strategic AI.",
          points: [
            "AI Fundamentals",
            "Identifying opportunities",
            "Mastering tools",
          ],
        },
        studio: {
          title: "Agent Studio",
          tagline: "Automate to breathe",
          desc: "Development of custom AI agents integrated into your workflows.",
          tags: ["CRM", "Marketing", "HR", "Finance"],
          footer: "Complex multi-agent orchestration",
        },
        pilotage: {
          title: "Piloting",
          tagline: "Pilot to perform",
          desc: "Delegation of strategic missions to our experts and their agents.",
          tags: ["Marketing", "Analytics", "SEO", "Global"],
        },
      },
      cta: "Discover",
    },
    diagnostic: {
      tag: "Free AI Audit",
      title: "Your AI maturity in real-time",
      subtitle:
        "Identify your immediate growth levers by comparing your company to market standards.",
      steps: [
        { title: "Fast (3 min)", desc: "12 key questions about your activity." },
        { title: "360° Analysis", desc: "Multi-dimensional scoring algorithm." },
        { title: "Action Plan", desc: "Receive your personalized PDF roadmap." },
      ],
      cta: "Start Audit",
      placeholder: "your@email.com",
      secure: "Free & confidential",
      card: {
        scoreLabel: "Global Score",
        score: "78/100",
        level: "Level: Advanced",
        insight: "💡 AI Insight: Your automation is solid, but data security needs immediate attention to reach the next level.",
        axes: { A: "Strategy", B: "Tools", C: "Data", D: "Team", E: "Security", F: "Auto" }
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "AI expertise explained",
      items: [
        {
          q: "What is an AI agent and how can it help my business?",
          a: "An AI agent is an intelligent system capable of performing tasks autonomously: analyzing data, making decisions, automating business processes.",
        },
        {
          q: "What's the difference between an AI agent and a chatbot?",
          a: "Chatbots respond to preprogrammed questions. An AI agent understands context, learns from your data, integrates with your tools, and executes complex actions.",
        },
        {
          q: "How much does it cost to implement AI agents?",
          a: "One-time Agentic Piloting starts at €1,000, monthly Studio formula from €3,000/month. A free diagnosis always precedes commitment.",
        },
        {
          q: "How long to deploy an operational AI agent?",
          a: "For a simple AI agent, 7 to 10 days. For a complex multi-agent system, 15 to 30 days.",
        },
        {
          q: "Is my data secure with your AI agents?",
          a: "All data is hosted in Europe, GDPR compliant, and never resold. End-to-end encryption and user control guaranteed.",
        },
        {
          q: "Can your AI agents integrate with my existing tools?",
          a: "We have 500+ integrations: CRM, communication, databases, management tools, e-commerce platforms, and more.",
        },
      ],
    },
    footer: {
      desc: "Clear, useful, and human artificial intelligence.",
      rights: "All rights reserved.",
      cols: { solutions: "Solutions", company: "Company", legal: "Legal" },
      contact: {
        email: "sales@orchestraintelligence.fr",
        location: "Toulouse, France",
      },
      social: {
        linkedin: "https://www.linkedin.com/company/orchestra-intelligence",
        twitter: "https://x.com/music_music_AI",
      },
    },
    contact: {
      title: "Ready to orchestrate your business?",
      cta: "Send my request",
      placeholders: { name: "First Name", lname: "Last Name", msg: "Message" },
    },
    cookie: {
      title: "Cookies & Privacy",
      desc: "This site uses essential and analytics cookies to improve your experience. No data is resold. See our ",
      policy: "privacy policy",
      accept: "Accept",
      decline: "Decline",
    },
  },
} as const;

export const CLIENT_LOGOS = [
  "Schwarzkopf",
  "Molie",
  "Smart Renovation",
  "WINPPI",
  "Wella",
  "Carlance",
  "Henkel",
];
