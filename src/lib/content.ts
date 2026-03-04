// ===== Types =====
export type Lang = 'fr' | 'en';

// ===== Client Logos =====
export const CLIENT_LOGOS = [
  "Schwarzkopf", "Molie", "Smart Renovation", "WINPPI", "Wella", "Carlance", "Henkel"
];

// ===== Main Content =====
export const CONTENT = {
  fr: {
    nav: {
      items: [
        { label: 'Formation', href: '/formation' },
        { label: 'Studio', href: '/studio' },
        { label: 'Pilotage', href: '/pilotage' },
        { label: 'Méthode', href: '/methode' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/#faq' },
      ],
      cta: 'Diagnostic IA',
      tagline: 'Intelligence Artificielle Globale'
    },
    hero: {
      badge: "L'intelligence claire, utile et humaine",
      titleLine1: "Réinventez vos process",
      titleLine2: "avec les agents IA",
      desc: "Formation IA sur mesure, développement d'agents intelligents et pilotage agentique pour libérer le potentiel de vos équipes. Diagnostic gratuit en 3 minutes.",
      ctaPrimary: "Faire le diagnostic (3 min)",
      ctaSecondary: "Réserver ma démo"
    },
    global: {
      trusted: "Ils nous font confiance à l'international",
      hubs: ["France", "Suisse", "Dubaï", "Corée"]
    },
    problem: {
      title: "Le vrai problème",
      subtitle: "Vous passez plus de temps à gérer qu'à créer.",
      highlight: "L'IA peut tout changer — si elle est bien orchestrée.",
      items: [
        { title: "Temps perdu", desc: "Plus de temps passé à gérer les outils qu'à créer de la valeur réelle." },
        { title: "Outils dispersés", desc: "Des silos d'information créés par des outils qui ne communiquent pas." },
        { title: "Tâches répétitives", desc: "Des processus manuels lents qui devraient être automatisés." },
        { title: "Manque de clarté", desc: "La difficulté de savoir par où commencer l'intégration de l'IA." }
      ]
    },
    method: {
      title: "La méthode Orchestra",
      subtitle: "Une approche globale : comprendre, automatiser, piloter.",
      cards: {
        formation: {
          title: "Formation",
          tagline: "Former pour comprendre",
          desc: "Programmes exécutifs pour maîtriser l'IA stratégique.",
          points: ["Fondamentaux IA", "Identification d'opportunités", "Maîtrise des outils"],
          href: "/formation"
        },
        studio: {
          title: "Agent Studio",
          tagline: "Automatiser pour respirer",
          desc: "Développement d'agents IA sur mesure intégrés à vos workflows.",
          tags: ["CRM", "Marketing", "RH", "Finance"],
          footer: "Orchestration multi-agents complexe",
          href: "/studio"
        },
        pilotage: {
          title: "Pilotage",
          tagline: "Piloter pour performer",
          desc: "Délégation de missions stratégiques à nos experts et leurs agents.",
          tags: ["Marketing", "Analytique", "SEO", "Global"],
          href: "/pilotage"
        }
      },
      cta: "Découvrir"
    },
    diagnostic: {
      tag: "Audit IA Gratuit",
      title: "Votre maturité IA en temps réel",
      subtitle: "Identifiez vos leviers de croissance immédiats en comparant votre entreprise aux standards du marché.",
      steps: [
        { title: "Rapide (3 min)", desc: "12 questions clés sur votre activité." },
        { title: "Analyse 360°", desc: "Algorithme de scoring multi-dimensionnel." },
        { title: "Plan d'action", desc: "Recevez votre roadmap PDF personnalisée." }
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
        { q: "Qu'est-ce qu'un agent IA et comment peut-il aider mon entreprise ?", a: "Un agent IA est un système intelligent capable d'effectuer des tâches de manière autonome : analyser des données, prendre des décisions, automatiser des processus métier. Cela permet aux entreprises de réduire les erreurs humaines et de libérer les équipes pour des missions à plus haute valeur." },
        { q: "Quelle est la différence entre un agent IA et un simple chatbot ?", a: "Les chatbots répondent à des questions préprogrammées avec des scénarios fixes. Un agent IA va beaucoup plus loin : il comprend le contexte grâce au traitement du langage naturel, apprend de vos données avec le machine learning, s'intègre à vos outils (CRM, ERP, emails), et peut exécuter des actions complexes." },
        { q: "Combien coûte l'implémentation d'agents IA dans mon entreprise ?", a: "Les tarifs varient selon les besoins. Le Pilotage Agentique ponctuel démarre à 1 000€ pour un projet spécifique, tandis que notre formule Studio mensuelle (à partir de 3 000€/mois) offre un accompagnement continu. Un diagnostic gratuit précède toujours l'engagement." },
        { q: "Combien de temps pour déployer un agent IA opérationnel ?", a: "Pour un agent IA simple (qualification de leads, réponses automatiques), comptez 7 à 10 jours. Pour un système multi-agents plus complexe, entre 15 et 30 jours." },
        { q: "Mes données sont-elles sécurisées avec vos agents IA ?", a: "Toutes vos données sont hébergées en Europe, conformes au RGPD, et ne sont jamais revendues. Le système utilise des protocoles bancaires, chiffrement de bout en bout, et préserve le contrôle utilisateur." },
        { q: "Vos agents IA peuvent-ils s'intégrer à mes outils existants ?", a: "Nous avons plus de 500 intégrations disponibles : CRM (Salesforce, HubSpot, Pipedrive), outils de communication (Gmail, Slack, Teams), bases de données, outils de gestion (Notion, Asana), plateformes e-commerce, et bien d'autres." }
      ]
    },
    contact: {
      title: "Prêt à orchestrer votre entreprise ?",
      cta: "Envoyer ma demande",
      placeholders: {
        name: "Prénom",
        lname: "Nom",
        msg: "Message"
      }
    },
    footer: {
      desc: "L'intelligence artificielle claire, utile et humaine.",
      rights: "Tous droits réservés.",
      cols: { solutions: "Solutions", company: "Entreprise", legal: "Légal" },
      contact: { email: "sales@orchestraintelligence.fr", location: "Toulouse, France" },
      social: {
        linkedin: "https://www.linkedin.com/company/orchestra-intelligence",
        twitter: "https://x.com/music_music_AI"
      }
    }
  },
  en: {
    nav: {
      items: [
        { label: 'Training', href: '/formation' },
        { label: 'Studio', href: '/studio' },
        { label: 'Piloting', href: '/pilotage' },
        { label: 'Method', href: '/methode' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/#faq' },
      ],
      cta: 'AI Diagnostic',
      tagline: 'Global Artificial Intelligence'
    },
    hero: {
      badge: "Clear, useful, and human intelligence",
      titleLine1: "Reinvent your processes",
      titleLine2: "with AI agents",
      desc: "Custom AI training, intelligent agent development, and agentic piloting to unlock your team's potential. Free 3-minute diagnostic.",
      ctaPrimary: "Start Diagnosis (3 min)",
      ctaSecondary: "Book my demo"
    },
    global: {
      trusted: "Trusted internationally",
      hubs: ["France", "Switzerland", "Dubai", "Korea"]
    },
    problem: {
      title: "The Real Problem",
      subtitle: "You spend more time managing than creating.",
      highlight: "AI can change everything — if orchestrated well.",
      items: [
        { title: "Wasted Time", desc: "More time spent managing tools than creating real value for your business." },
        { title: "Scattered Tools", desc: "Information silos created by tools that don't communicate with each other." },
        { title: "Repetitive Tasks", desc: "Slow manual processes that should be automated." },
        { title: "Lack of Clarity", desc: "Difficulty knowing where to start with AI integration." }
      ]
    },
    method: {
      title: "The Orchestra Method",
      subtitle: "A global approach: understand, automate, pilot.",
      cards: {
        formation: {
          title: "Training",
          tagline: "Train to understand",
          desc: "Executive programs to master strategic AI.",
          points: ["AI Fundamentals", "Identifying opportunities", "Mastering tools"],
          href: "/formation"
        },
        studio: {
          title: "Agent Studio",
          tagline: "Automate to breathe",
          desc: "Development of custom AI agents integrated into your workflows.",
          tags: ["CRM", "Marketing", "HR", "Finance"],
          footer: "Complex multi-agent orchestration",
          href: "/studio"
        },
        pilotage: {
          title: "Piloting",
          tagline: "Pilot to perform",
          desc: "Delegation of strategic missions to our experts and their agents.",
          tags: ["Marketing", "Analytics", "SEO", "Global"],
          href: "/pilotage"
        }
      },
      cta: "Discover"
    },
    diagnostic: {
      tag: "Free AI Audit",
      title: "Your AI maturity in real-time",
      subtitle: "Identify your immediate growth levers by comparing your company to market standards.",
      steps: [
        { title: "Fast (3 min)", desc: "12 key questions about your activity." },
        { title: "360° Analysis", desc: "Multi-dimensional scoring algorithm." },
        { title: "Action Plan", desc: "Receive your personalized PDF roadmap." }
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
        { q: "What is an AI agent and how can it help my business?", a: "An AI agent is an intelligent system capable of performing tasks autonomously: analyzing data, making decisions, automating business processes. This allows companies to reduce human errors and free teams for higher-value missions." },
        { q: "What's the difference between an AI agent and a simple chatbot?", a: "Chatbots respond to preprogrammed questions with fixed scenarios. An AI agent goes much further: it understands context through natural language processing, learns from your data with machine learning, integrates with your tools (CRM, ERP, emails), and can execute complex actions." },
        { q: "How much does it cost to implement AI agents in my company?", a: "Prices vary according to needs. One-time Agentic Piloting starts at €1,000 for a specific project, while our monthly Studio formula (from €3,000/month) offers continuous support. A free diagnosis always precedes commitment." },
        { q: "How long to deploy an operational AI agent?", a: "For a simple AI agent (lead qualification, automatic responses), expect 7 to 10 days. For a more complex multi-agent system, between 15 and 30 days." },
        { q: "Is my data secure with your AI agents?", a: "All your data is hosted in Europe, GDPR compliant, and never resold. The system uses banking protocols, end-to-end encryption, and preserves user control." },
        { q: "Can your AI agents integrate with my existing tools?", a: "We have over 500 integrations available: CRM (Salesforce, HubSpot, Pipedrive), communication tools (Gmail, Slack, Teams), databases, management tools (Notion, Asana), e-commerce platforms, and many more." }
      ]
    },
    contact: {
      title: "Ready to orchestrate your business?",
      cta: "Send my request",
      placeholders: {
        name: "First Name",
        lname: "Last Name",
        msg: "Message"
      }
    },
    footer: {
      desc: "Clear, useful, and human artificial intelligence.",
      rights: "All rights reserved.",
      cols: { solutions: "Solutions", company: "Company", legal: "Legal" },
      contact: { email: "sales@orchestraintelligence.fr", location: "Toulouse, France" },
      social: {
        linkedin: "https://www.linkedin.com/company/orchestra-intelligence",
        twitter: "https://x.com/music_music_AI"
      }
    }
  }
} as const;

// ===== Formation Page Content =====
export function getFormationContent(lang: Lang) {
  return {
    tag: lang === 'fr' ? 'Formations Orchestra Intelligence' : 'Orchestra Intelligence Training',
    heroTitle: {
      part1: lang === 'fr' ? 'Imaginez une formation ' : 'Imagine ',
      highlight: lang === 'fr' ? 'immersive' : 'immersive',
      part2: lang === 'fr' ? ' pour vos employés' : ' training for your employees'
    },
    heroDesc: lang === 'fr'
      ? "Nous réinventons la façon de parler IA en expérimentant toutes sortes de scénarios à la demande. Nous partageons notre baguette magique avec vos employés pour former, apprendre et enfin découvrir le potentiel de l'IA pour chaque métier."
      : "We reinvent the way we talk about AI by experimenting with all kinds of on-demand scenarios. We share our magic wand with your employees to train, learn, and finally discover the potential of AI for every job.",
    cta1: lang === 'fr' ? "Découvrir nos formations" : "Discover our training",
    cta2: lang === 'fr' ? "Demander un devis" : "Request a quote",
    stats: lang === 'fr' ? "Talents formés" : "Talents trained",
    gridTitle: lang === 'fr' ? "Une approche unique de la formation IA" : "A unique approach to AI training",
    gridDesc: lang === 'fr' ? "Des formations concrètes pour comprendre, tester et intégrer l'IA dans votre métier." : "Concrete training to understand, test, and integrate AI into your job.",
    gridItems: lang === 'fr' ? [
      { title: "La baguette magique partagée", desc: "Nous partageons notre expertise et nos outils avec vos employés pour qu'ils découvrent le potentiel de l'IA." },
      { title: "100% adapté à votre business", desc: "Chaque formation est personnalisée selon votre secteur, vos outils et vos processus métier spécifiques." },
      { title: "Expérimentation pratique", desc: "Nous réinventons la façon de parler IA en expérimentant toutes sortes de scénarios à la demande." },
      { title: "Formation immersive", desc: "Des ateliers interactifs où vos équipes apprennent en faisant, avec des cas d'usage concrets." }
    ] : [
      { title: "The shared magic wand", desc: "We share our expertise and tools with your employees so they discover the potential of AI." },
      { title: "100% adapted to your business", desc: "Each training is personalized according to your sector, tools, and specific business processes." },
      { title: "Practical experimentation", desc: "We reinvent the way we talk about AI by experimenting with all kinds of on-demand scenarios." },
      { title: "Immersive training", desc: "Interactive workshops where your teams learn by doing, with concrete use cases." }
    ],
    pricingTitle: lang === 'fr' ? "Nos formules de formation" : "Our training packages",
    pricingDesc: lang === 'fr' ? "Choisissez la formation adaptée à vos besoins et à votre niveau de maturité IA." : "Choose the training adapted to your needs and AI maturity level.",
    plan1: {
      title: lang === 'fr' ? "IA Découverte" : "AI Discovery",
      price: "1 500 €",
      meta: lang === 'fr' ? "HT / Groupe" : "excl. tax / Group",
      detail: lang === 'fr' ? "Jusqu'à 10 personnes • Durée : 3 heures" : "Up to 10 people • Duration: 3 hours",
      tag: lang === 'fr' ? "Atelier clair et ludique" : "Clear and playful workshop",
      target: lang === 'fr' ? "Objectif : Comprendre & tester. Vulgarisation & pratique simple pour curieux et dirigeants." : "Goal: Understand & test. Simplification & simple practice for curious minds and leaders.",
      features: lang === 'fr' ? ['3 fiches pédagogiques + plan IA', 'Accès Club Découverte™', "3 cas d'usage IA identifiés", 'Aucun niveau technique requis'] : ['3 educational sheets + AI plan', 'Discovery Club™ Access', "3 AI use cases identified", 'No technical level required']
    },
    plan2: {
      title: lang === 'fr' ? "IA Expérience Pro" : "AI Experience Pro",
      price: "5 000 €",
      meta: lang === 'fr' ? "HT / Groupe" : "excl. tax / Group",
      detail: lang === 'fr' ? "Jusqu'à 10 personnes • Durée : 1 journée" : "Up to 10 people • Duration: 1 day",
      tag: lang === 'fr' ? "Simulation, atelier, coaching" : "Simulation, workshop, coaching",
      rec: lang === 'fr' ? "Recommandé" : "Recommended",
      target: lang === 'fr' ? "Objectif : Créer & automatiser. Expérientielle & immersive pour managers et décideurs." : "Goal: Create & automate. Experiential & immersive for managers and decision-makers.",
      features: lang === 'fr' ? ['GPT personnalisé + flux automatisé', 'Roadmap IA complète', 'Accès Lab Studio™ + Coaching IA', '1 assistant IA métier opérationnel', 'Niveau intermédiaire / ouvert'] : ['Custom GPT + automated flow', 'Complete AI Roadmap', 'Lab Studio™ Access + AI Coaching', '1 operational business AI assistant', 'Intermediate / open level']
    },
    whyTitle: lang === 'fr' ? "Pourquoi choisir nos formations ?" : "Why choose our training?",
    whyItems: lang === 'fr' ? [
      { title: "Expertise reconnue", desc: "Plus de 500 intégrations maîtrisées et des dizaines d'entreprises formées." },
      { title: "Résultats mesurables", desc: "Des cas d'usage concrets et des outils opérationnels dès la fin de la formation." },
      { title: "Approche pratique", desc: "Pas de théorie abstraite, uniquement des scénarios applicables immédiatement." }
    ] : [
      { title: "Recognized expertise", desc: "Over 500 integrations mastered and dozens of companies trained." },
      { title: "Measurable results", desc: "Concrete use cases and operational tools right after the training." },
      { title: "Practical approach", desc: "No abstract theory, only immediately applicable scenarios." }
    ],
    formTitle: lang === 'fr' ? "Demander un devis" : "Request a quote",
    formLabels: {
      name: lang === 'fr' ? "Nom complet *" : "Full Name *",
      phone: lang === 'fr' ? "Téléphone *" : "Phone *",
      email: lang === 'fr' ? "Email professionnel *" : "Work Email *",
      type: lang === 'fr' ? "Formation souhaitée *" : "Desired Training *",
      msg: lang === 'fr' ? "Message" : "Message",
      cta: lang === 'fr' ? "Envoyer ma demande" : "Send my request",
      privacy: lang === 'fr' ? "Vos données sont traitées de manière confidentielle et conforme au RGPD." : "Your data is treated confidentially and in compliance with GDPR.",
      selectPlaceholder: lang === 'fr' ? 'Sélectionnez une formation' : 'Select a training',
      customOption: lang === 'fr' ? 'Formation personnalisée - Sur devis' : 'Custom Training - On Quote'
    }
  };
}

// ===== Studio Page Content =====
export function getStudioContent(lang: Lang) {
  return {
    tag: lang === 'fr' ? "Studio de développement IA" : "AI Development Studio",
    heroTitle: {
      part1: lang === 'fr' ? 'Imaginez le SaaS' : 'Imagine the SaaS',
      highlight: lang === 'fr' ? 'de vos rêves' : 'of your dreams'
    },
    heroDesc: lang === 'fr'
      ? "Avoir des agents IA, c'est comme avoir une baguette magique. Vous l'imaginez, nous le créons. Fini les logiciels figés, place au sur-mesure."
      : "Having AI agents is like having a magic wand. You imagine it, we build it. No more rigid software, welcome to custom-made.",
    cta1: lang === 'fr' ? "Démarrer un projet" : "Start a project",
    cta2: lang === 'fr' ? "Voir les possibilités" : "See possibilities",
    stats: lang === 'fr'
      ? [
        { label: "Livraison rapide", val: "2-4 semaines" },
        { label: "Intégrations", val: "500+" },
        { label: "Évolutivité", val: "100%" },
        { label: "Sécurité", val: "RGPD" }
      ]
      : [
        { label: "Fast Delivery", val: "2-4 weeks" },
        { label: "Integrations", val: "500+" },
        { label: "Scalability", val: "100%" },
        { label: "Security", val: "GDPR" }
      ],
    evoTitle: lang === 'fr' ? "Un studio en évolution permanente" : "A constantly evolving studio",
    evoDesc1: lang === 'fr'
      ? "Nous travaillons comme un studio de développement moderne, en constante évolution pour vous proposer les meilleures solutions technologiques."
      : "We work like a modern development studio, constantly evolving to offer you the best technological solutions.",
    evoDesc2: lang === 'fr'
      ? "Notre vision : SaaS ou AaaS (Agent as a Service) à la demande. Des outils clés en main, parfaitement adaptés à votre métier et vos processus."
      : "Our vision: SaaS or AaaS (Agent as a Service) on demand. Turnkey tools, perfectly adapted to your business and processes.",
    evoCta: lang === 'fr'
      ? "Tout est possible : Landing pages express, traduction automatique, analyses avancées, agents IA personnalisés..."
      : "Everything is possible: Express landing pages, automatic translation, advanced analytics, custom AI agents...",
    solutionsTitle: lang === 'fr' ? "Des solutions clés en main" : "Turnkey Solutions",
    solutionsDesc: lang === 'fr' ? "Technologies avancées pour besoins spécifiques." : "Advanced technologies for specific needs.",
    solutionItems: lang === 'fr' ? [
      { title: "SaaS sur mesure", desc: "Vous l'imaginez, nous le créons. Des solutions logicielles parfaitement adaptées à vos besoins métier." },
      { title: "AaaS - Agent as a Service", desc: "Des agents IA à la demande pour automatiser vos processus et augmenter votre productivité." },
      { title: "Développement rapide", desc: "Prototypage et déploiement express. De l'idée à la production en quelques semaines." },
      { title: "Technologies modernes", desc: "Stack technique de pointe : Next.js, React, Supabase, Vercel, et plus de 500 intégrations." },
      { title: "Solutions évolutives", desc: "Architecture scalable qui grandit avec votre entreprise, de la startup à l'entreprise." },
      { title: "Sécurité & conformité", desc: "Hébergement en France, conformité RGPD, et sécurité de niveau entreprise." }
    ] : [
      { title: "Custom SaaS", desc: "You imagine it, we build it. Software solutions perfectly adapted to your business needs." },
      { title: "AaaS - Agent as a Service", desc: "On-demand AI agents to automate your processes and increase your productivity." },
      { title: "Rapid Development", desc: "Express prototyping and deployment. From idea to production in a few weeks." },
      { title: "Modern Technologies", desc: "Cutting-edge tech stack: Next.js, React, Supabase, Vercel, and over 500 integrations." },
      { title: "Scalable Solutions", desc: "Scalable architecture that grows with your company, from startup to enterprise." },
      { title: "Security & Compliance", desc: "Hosting in France/Europe, GDPR compliance, and enterprise-grade security." }
    ],
    integrationsTitle: lang === 'fr' ? "Plus de 500 intégrations disponibles" : "Over 500 integrations available",
    integrationsDesc: lang === 'fr' ? "Connectez-vous de manière transparente avec les plateformes et services les plus populaires pour améliorer votre flux de travail." : "Connect seamlessly with the most popular platforms and services to improve your workflow.",
    useCasesTitle: lang === 'fr' ? "Exemples de réalisations possibles" : "Examples of possible achievements",
    useCases: lang === 'fr' ? {
      col1: { title: "Outils métier", items: ["CRM personnalisé", "ERP sur mesure", "Gestion de projet", "Facturation intelligente", "Ticketing System", "Dashboard analytique"] },
      col2: { title: "E-commerce", items: ["Boutique en ligne", "Marketplace B2B/B2C", "Plateforme de réservation", "Paiement intégré", "Stocks automatisés", "Fidélité client"] },
      col3: { title: "Automatisation", items: ["Workflow automation", "Intégration multi-outils", "Sync de données", "Reporting auto", "Notifications smart", "Traitement documents"] },
      col4: { title: "IA & Agents", items: ["Chatbot intelligent", "Assistant virtuel", "Analyse prédictive", "Génération de contenu", "Traduction auto", "Vision par ordinateur"] }
    } : {
      col1: { title: "Business Tools", items: ["Custom CRM", "Tailored ERP", "Project Management", "Smart Billing", "Ticketing System", "Analytics Dashboard"] },
      col2: { title: "E-commerce", items: ["Online Store", "B2B/B2C Marketplace", "Booking Platform", "Integrated Payment", "Automated Stocks", "Customer Loyalty"] },
      col3: { title: "Automation", items: ["Workflow automation", "Multi-tool integration", "Data Sync", "Auto Reporting", "Smart Notifications", "Document Processing"] },
      col4: { title: "AI & Agents", items: ["Intelligent Chatbot", "Virtual Assistant", "Predictive Analysis", "Content Generation", "Auto Translation", "Computer Vision"] }
    },
    contactTitle: lang === 'fr' ? "Prêt à transformer votre vision en réalité ?" : "Ready to transform your vision into reality?",
    contactDesc: lang === 'fr' ? "Discutons de votre projet et découvrons ensemble comment nous pouvons créer la solution parfaite pour votre entreprise." : "Let's discuss your project and discover together how we can create the perfect solution for your company.",
    formPlaceholders: {
      firstName: lang === 'fr' ? "Prénom" : "First Name",
      lastName: lang === 'fr' ? "Nom" : "Last Name",
      email: lang === 'fr' ? "Email professionnel" : "Work Email",
      company: lang === 'fr' ? "Entreprise" : "Company",
      project: lang === 'fr' ? "Décrivez votre projet..." : "Describe your project..."
    }
  };
}
