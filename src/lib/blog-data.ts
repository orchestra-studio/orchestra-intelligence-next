// ─── Blog Data ─────────────────────────────────────────────────────
// Extracted from monolithic App.tsx — all blog posts for FR + EN
// ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageGradient: string;
}

export type Lang = 'fr' | 'en';

export const BLOG_POSTS_DATA: Record<Lang, BlogPost[]> = {
  fr: [
    {
      id: "orchestration-multi-agents",
      slug: "orchestration-multi-agents",
      title: "Orchestration Multi-Agents : Créer un Écosystème IA Performant",
      excerpt: "Un agent IA seul, c'est bien. Plusieurs agents IA qui collaborent, c'est 10x mieux. Découvrez comment orchestrer plusieurs agents pour démultiplier votre performance.",
      date: "20 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "18 min",
      category: "Architecture IA",
      imageGradient: "from-blue-600 to-indigo-600",
      content: `# Orchestration Multi-Agents : Créer un Écosystème IA Performant

"On a déployé 5 agents IA, mais ils ne se parlent pas entre eux. C'est le chaos." Cette phrase, je l'entends au moins une fois par semaine. Les PME déploient des agents IA un par un, sans vision d'ensemble. Résultat : des silos d'IA qui ne communiquent pas, des données dupliquées, des processus fragmentés.

La vraie puissance de l'IA ne vient pas d'un agent isolé, mais d'un écosystème d'agents qui collaborent intelligemment.

## Les 3 Niveaux d'Orchestration

1. **Orchestration Séquentielle** - Les agents s'exécutent les uns après les autres
2. **Orchestration Conditionnelle** - Les agents s'exécutent selon des conditions
3. **Orchestration Intelligente** - Les agents collaborent de manière autonome

## Architecture d'un Écosystème Multi-Agents

- **Agents Spécialisés** : Chaque agent a une mission spécifique
- **Bus de Communication** : Permet aux agents d'échanger des messages
- **Base de Connaissances Partagée** : Données clients accessibles à tous
- **Orchestrateur Central** : Coordonne les workflows
- **Dashboard** : Pour visualiser l'activité et les performances`
    },
    {
      id: "agents-ia-autonomes-cas-usage",
      slug: "agents-ia-autonomes-cas-usage",
      title: "Agents IA Autonomes : Cas d'Usage et Retours d'Expérience 2025",
      excerpt: "15 cas d'usage concrets d'agents IA autonomes avec ROI chiffré. Découvrez comment les entreprises transforment leurs opérations.",
      date: "19 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "17 min",
      category: "Cas d'Usage",
      imageGradient: "from-purple-600 to-pink-600",
      content: `# Agents IA Autonomes : Cas d'Usage et Retours d'Expérience 2025

Les agents IA autonomes révolutionnent la façon dont les entreprises opèrent. Voici 15 cas d'usage concrets avec des ROI mesurés.

## Service Client
- Réduction de 40% des coûts de support
- Temps de réponse < 2 secondes
- Satisfaction client > 4.5/5

## Ventes & Marketing
- Qualification automatique des leads
- Personnalisation des campagnes
- Augmentation de 25% du taux de conversion

## Opérations
- Automatisation des processus répétitifs
- Gain de 15h/semaine par employé
- Réduction de 60% des erreurs`
    },
    {
      id: "securite-conformite-agents-ia",
      slug: "securite-conformite-agents-ia",
      title: "Sécurité et Conformité des Agents IA : Guide Pratique pour les PME",
      excerpt: "Guide complet sur la sécurité et conformité des agents IA (RGPD, AI Act, ISO 27001). Protégez vos données tout en innovant.",
      date: "18 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "16 min",
      category: "Sécurité",
      imageGradient: "from-red-600 to-orange-600",
      content: `# Sécurité et Conformité des Agents IA : Guide Pratique

La sécurité des données est au cœur de tout projet IA réussi. Voici comment garantir la conformité.

## RGPD et Agents IA
- Minimisation des données collectées
- Droit à l'oubli intégré
- Transparence sur les traitements

## AI Act Européen
- Classification des risques
- Exigences de documentation
- Audits réguliers

## Bonnes Pratiques
- Hébergement en Europe
- Chiffrement de bout en bout
- Contrôle d'accès granulaire`
    },
    {
      id: "pilotage-agentique-management",
      slug: "pilotage-agentique-management",
      title: "Pilotage Agentique : La Nouvelle Approche de Management par l'IA",
      excerpt: "Découvrez le pilotage agentique, nouvelle approche de management assistée par IA. Libérez le potentiel de vos équipes.",
      date: "17 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "15 min",
      category: "Management",
      imageGradient: "from-cyan-600 to-blue-600",
      content: `# Pilotage Agentique : La Nouvelle Approche de Management

Le pilotage agentique transforme la façon dont les entreprises délèguent et supervisent les tâches.

## Qu'est-ce que le Pilotage Agentique ?
Une approche où des agents IA prennent en charge des missions complètes, supervisés par des experts humains.

## Avantages
- Exécution 24/7 sans interruption
- Qualité constante et mesurable
- Libération du temps pour la stratégie

## Cas d'Application
- Marketing digital automatisé
- Veille concurrentielle continue
- Génération de contenu à grande échelle`
    },
    {
      id: "formation-ia-entreprise",
      slug: "formation-ia-entreprise",
      title: "Formation IA en Entreprise : Comment Former Vos Équipes aux Agents IA",
      excerpt: "Programme complet de formation IA pour vos équipes. De la découverte à la maîtrise des agents IA.",
      date: "16 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "14 min",
      category: "Formation",
      imageGradient: "from-yellow-500 to-orange-500",
      content: `# Formation IA en Entreprise : Guide Complet

Former vos équipes à l'IA est essentiel pour réussir votre transformation digitale.

## Les 3 Niveaux de Formation
1. **Découverte** - Comprendre les fondamentaux de l'IA
2. **Pratique** - Utiliser les outils IA au quotidien
3. **Expert** - Créer et optimiser des agents IA

## Notre Approche
- Formation immersive et pratique
- Cas d'usage adaptés à votre métier
- Accompagnement post-formation`
    },
    {
      id: "agents-ia-conversationnels",
      slug: "agents-ia-conversationnels",
      title: "Agents IA Conversationnels : Transformer Votre Service Client en 2025",
      excerpt: "Guide expert pour déployer des agents conversationnels IA performants. Réduisez vos coûts de support de 40%.",
      date: "15 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "16 min",
      category: "Service Client",
      imageGradient: "from-green-600 to-teal-600",
      content: `# Agents IA Conversationnels : Guide Expert

Les agents conversationnels IA révolutionnent le service client. Voici comment en tirer le meilleur.

## Différence avec les Chatbots
- Compréhension contextuelle du langage naturel
- Apprentissage continu des interactions
- Intégration avec vos outils métier

## Métriques Clés
- Taux de résolution automatique > 70%
- Temps de réponse < 2 secondes
- CSAT > 4/5`
    },
    {
      id: "integrer-agents-ia-crm",
      slug: "integrer-agents-ia-crm",
      title: "Guide Complet : Intégrer des Agents IA dans Votre CRM et Outils Métier",
      excerpt: "Méthodologie complète pour intégrer des agents IA dans vos outils existants. Plus de 500 intégrations disponibles.",
      date: "14 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "15 min",
      category: "Intégration",
      imageGradient: "from-indigo-600 to-purple-600",
      content: `# Intégrer des Agents IA dans Votre CRM

L'intégration est la clé d'un agent IA performant. Voici notre méthodologie.

## Intégrations Disponibles
- **CRM** : Salesforce, HubSpot, Pipedrive
- **Communication** : Gmail, Slack, Teams
- **Gestion** : Notion, Asana, Monday

## Processus d'Intégration
1. Audit de vos outils existants
2. Mapping des flux de données
3. Configuration des connecteurs
4. Tests et validation`
    },
    {
      id: "agents-ia-vs-automatisation",
      slug: "agents-ia-vs-automatisation",
      title: "Agents IA vs Automatisation Classique : Quelle Solution pour Votre PME ?",
      excerpt: "Comparatif détaillé entre agents IA et automatisation classique (RPA, workflows). Faites le bon choix.",
      date: "13 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "13 min",
      category: "Comparatif",
      imageGradient: "from-slate-600 to-gray-700",
      content: `# Agents IA vs Automatisation Classique

Le choix n'est pas binaire. Voici comment combiner les deux technologies.

## Agents IA - Points Forts
- Complexité élevée avec compréhension contextuelle
- Décisions intelligentes et autonomes
- Adaptation automatique aux changements

## Automatisation Classique - Points Forts
- Tâches répétitives à haut volume
- Règles fixes et prévisibles
- Coûts initiaux plus bas

## ROI Comparé
- Agents IA : 180-300% à 12 mois
- RPA classique : 120-180%`
    },
    {
      id: "roi-agents-ia",
      slug: "roi-agents-ia",
      title: "ROI des Agents IA : Calculer et Maximiser Votre Retour sur Investissement",
      excerpt: "Méthodologie complète pour mesurer et optimiser le ROI de vos agents IA. 92% des entreprises voient un retour positif en moins de 12 mois.",
      date: "12 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "14 min",
      category: "ROI & Performance",
      imageGradient: "from-emerald-500 to-teal-700",
      content: `# ROI des Agents IA : Guide Complet

"Combien va me rapporter cet agent IA ?" C'est LA question. Voici la méthodologie exacte.

## Les 3 Types de Gains

### 1. Gains Directs
- Réduction des coûts de main d'œuvre
- Diminution des erreurs coûteuses
- Économies sur les outils remplacés

### 2. Gains Indirects
- Augmentation du chiffre d'affaires
- Amélioration de la satisfaction client
- Accélération des cycles de vente

### 3. Gains Stratégiques
- Avantage concurrentiel
- Scalabilité des opérations
- Innovation continue`
    },
    {
      id: "choisir-deployer-agent-ia",
      slug: "choisir-deployer-agent-ia",
      title: "Comment Choisir et Déployer un Agent IA dans Votre Entreprise en 2025",
      excerpt: "Guide complet pour sélectionner, implémenter et réussir le déploiement d'agents IA dans votre PME. 73% des PME envisagent l'IA.",
      date: "11 janvier 2025",
      author: "Ludovic Goutel",
      readTime: "12 min",
      category: "Guide Pratique",
      imageGradient: "from-violet-600 to-fuchsia-600",
      content: `# Comment Choisir et Déployer un Agent IA en 2025

73% des PME françaises envisagent d'intégrer des agents IA, mais seulement 28% passent à l'action. Voici la méthodologie.

## Les 3 Types d'Agents IA

1. **Agents Conversationnels** - Réduction de 40% des coûts support
2. **Agents de Traitement** - Gain de 15h/semaine par employé
3. **Agents de Décision** - Amélioration de 12% des marges

## Méthodologie en 5 Étapes

1. Identifier les vrais besoins
2. Définir les critères de sélection
3. Tester avec un POC de 3 semaines
4. Déployer progressivement
5. Mesurer en continu

## 7 Erreurs à Éviter
- Prioriser la techno sur le problème métier
- Sous-estimer la qualité des données
- Négliger la conduite du changement`
    }
  ],
  en: [
    {
      id: "orchestration-multi-agents",
      slug: "orchestration-multi-agents",
      title: "Multi-Agent Orchestration: Creating a High-Performance AI Ecosystem",
      excerpt: "One AI agent is good. Multiple AI agents collaborating is 10x better. Discover how to orchestrate multiple agents to multiply your performance.",
      date: "January 20, 2025",
      author: "Ludovic Goutel",
      readTime: "18 min",
      category: "AI Architecture",
      imageGradient: "from-blue-600 to-indigo-600",
      content: `# Multi-Agent Orchestration: Creating a High-Performance AI Ecosystem

"We deployed 5 AI agents, but they don't talk to each other. It's chaos." The true power of AI comes from an ecosystem of agents collaborating intelligently.

## The 3 Levels of Orchestration

1. **Sequential Orchestration** - Agents execute one after another
2. **Conditional Orchestration** - Agents execute based on conditions
3. **Intelligent Orchestration** - Agents collaborate autonomously

## Architecture Components
- Specialized Agents with specific missions
- Communication Bus for message exchange
- Shared Knowledge Base
- Central Orchestrator
- Performance Dashboard`
    },
    {
      id: "agents-ia-autonomes-cas-usage",
      slug: "agents-ia-autonomes-cas-usage",
      title: "Autonomous AI Agents: Use Cases and 2025 Experience Reports",
      excerpt: "15 concrete use cases for autonomous AI agents with measured ROI. Discover how companies are transforming their operations.",
      date: "January 19, 2025",
      author: "Ludovic Goutel",
      readTime: "17 min",
      category: "Use Cases",
      imageGradient: "from-purple-600 to-pink-600",
      content: `# Autonomous AI Agents: Use Cases and Experience Reports

Autonomous AI agents are revolutionizing how businesses operate. Here are 15 concrete use cases with measured ROI.

## Customer Service
- 40% reduction in support costs
- Response time < 2 seconds
- Customer satisfaction > 4.5/5

## Sales & Marketing
- Automatic lead qualification
- Campaign personalization
- 25% increase in conversion rate`
    },
    {
      id: "securite-conformite-agents-ia",
      slug: "securite-conformite-agents-ia",
      title: "AI Agent Security and Compliance: Practical Guide for SMEs",
      excerpt: "Complete guide on AI agent security and compliance (GDPR, AI Act, ISO 27001). Protect your data while innovating.",
      date: "January 18, 2025",
      author: "Ludovic Goutel",
      readTime: "16 min",
      category: "Security",
      imageGradient: "from-red-600 to-orange-600",
      content: `# AI Agent Security and Compliance: Practical Guide

Data security is at the heart of every successful AI project.

## GDPR and AI Agents
- Data minimization
- Built-in right to erasure
- Processing transparency

## European AI Act
- Risk classification
- Documentation requirements
- Regular audits`
    },
    {
      id: "pilotage-agentique-management",
      slug: "pilotage-agentique-management",
      title: "Agentic Piloting: The New AI-Assisted Management Approach",
      excerpt: "Discover agentic piloting, a new AI-assisted management approach. Unlock your team's potential.",
      date: "January 17, 2025",
      author: "Ludovic Goutel",
      readTime: "15 min",
      category: "Management",
      imageGradient: "from-cyan-600 to-blue-600",
      content: `# Agentic Piloting: The New Management Approach

Agentic piloting transforms how companies delegate and supervise tasks.

## What is Agentic Piloting?
An approach where AI agents handle complete missions, supervised by human experts.

## Benefits
- 24/7 execution without interruption
- Consistent, measurable quality
- Free up time for strategy`
    },
    {
      id: "formation-ia-entreprise",
      slug: "formation-ia-entreprise",
      title: "Enterprise AI Training: How to Train Your Teams on AI Agents",
      excerpt: "Complete AI training program for your teams. From discovery to mastery of AI agents.",
      date: "January 16, 2025",
      author: "Ludovic Goutel",
      readTime: "14 min",
      category: "Training",
      imageGradient: "from-yellow-500 to-orange-500",
      content: `# Enterprise AI Training: Complete Guide

Training your teams in AI is essential for your digital transformation success.

## 3 Training Levels
1. **Discovery** - Understand AI fundamentals
2. **Practical** - Use AI tools daily
3. **Expert** - Create and optimize AI agents`
    },
    {
      id: "agents-ia-conversationnels",
      slug: "agents-ia-conversationnels",
      title: "Conversational AI Agents: Transform Your Customer Service in 2025",
      excerpt: "Expert guide to deploying high-performance conversational AI agents. Reduce your support costs by 40%.",
      date: "January 15, 2025",
      author: "Ludovic Goutel",
      readTime: "16 min",
      category: "Customer Service",
      imageGradient: "from-green-600 to-teal-600",
      content: `# Conversational AI Agents: Expert Guide

Conversational AI agents are revolutionizing customer service.

## Difference from Chatbots
- Contextual natural language understanding
- Continuous learning from interactions
- Integration with your business tools

## Key Metrics
- Automatic resolution rate > 70%
- Response time < 2 seconds
- CSAT > 4/5`
    },
    {
      id: "integrer-agents-ia-crm",
      slug: "integrer-agents-ia-crm",
      title: "Complete Guide: Integrating AI Agents into Your CRM and Business Tools",
      excerpt: "Complete methodology for integrating AI agents into your existing tools. Over 500 integrations available.",
      date: "January 14, 2025",
      author: "Ludovic Goutel",
      readTime: "15 min",
      category: "Integration",
      imageGradient: "from-indigo-600 to-purple-600",
      content: `# Integrating AI Agents into Your CRM

Integration is the key to a high-performing AI agent.

## Available Integrations
- **CRM**: Salesforce, HubSpot, Pipedrive
- **Communication**: Gmail, Slack, Teams
- **Management**: Notion, Asana, Monday`
    },
    {
      id: "agents-ia-vs-automatisation",
      slug: "agents-ia-vs-automatisation",
      title: "AI Agents vs Classic Automation: Which Solution for Your SME?",
      excerpt: "Detailed comparison between AI agents and classic automation (RPA, workflows). Make the right choice.",
      date: "January 13, 2025",
      author: "Ludovic Goutel",
      readTime: "13 min",
      category: "Comparison",
      imageGradient: "from-slate-600 to-gray-700",
      content: `# AI Agents vs Classic Automation

The choice isn't binary. Here's how to combine both technologies.

## AI Agents - Strengths
- High complexity with contextual understanding
- Intelligent, autonomous decisions
- Automatic adaptation to changes

## Classic Automation - Strengths
- High-volume repetitive tasks
- Fixed, predictable rules
- Lower initial costs

## Compared ROI
- AI Agents: 180-300% at 12 months
- Classic RPA: 120-180%`
    },
    {
      id: "roi-agents-ia",
      slug: "roi-agents-ia",
      title: "AI Agent ROI: Calculate and Maximize Your Return on Investment",
      excerpt: "Complete methodology to measure and optimize your AI agents' ROI. 92% of companies see positive returns in under 12 months.",
      date: "January 12, 2025",
      author: "Ludovic Goutel",
      readTime: "14 min",
      category: "ROI & Performance",
      imageGradient: "from-emerald-500 to-teal-700",
      content: `# AI Agent ROI: Complete Guide

"How much will this AI agent earn me?" That's THE question. Here's the exact methodology.

## The 3 Types of Gains

### 1. Direct Gains
- Labor cost reduction
- Decrease in costly errors
- Savings on replaced tools

### 2. Indirect Gains
- Revenue increase
- Customer satisfaction improvement
- Sales cycle acceleration

### 3. Strategic Gains
- Competitive advantage
- Operations scalability
- Continuous innovation`
    },
    {
      id: "choisir-deployer-agent-ia",
      slug: "choisir-deployer-agent-ia",
      title: "How to Choose and Deploy an AI Agent in Your Business in 2025",
      excerpt: "Complete guide for selecting, implementing, and succeeding with AI agent deployment in your SME. 73% of SMEs are considering AI.",
      date: "January 11, 2025",
      author: "Ludovic Goutel",
      readTime: "12 min",
      category: "Practical Guide",
      imageGradient: "from-violet-600 to-fuchsia-600",
      content: `# How to Choose and Deploy an AI Agent in 2025

73% of French SMEs are considering integrating AI agents, but only 28% take action. Here's the methodology.

## 3 Types of AI Agents

1. **Conversational Agents** - 40% support cost reduction
2. **Processing Agents** - 15h/week savings per employee
3. **Decision Agents** - 12% margin improvement

## 5-Step Methodology

1. Identify real needs
2. Define selection criteria
3. Test with a 3-week POC
4. Deploy progressively
5. Measure continuously`
    }
  ]
};

/** Get all unique slugs (same for both languages) */
export function getAllSlugs(): string[] {
  return BLOG_POSTS_DATA.fr.map(p => p.slug);
}

/** Find a post by slug in a given language */
export function getPostBySlug(slug: string, lang: Lang): BlogPost | undefined {
  return BLOG_POSTS_DATA[lang].find(p => p.slug === slug);
}

/** Get all posts for a language */
export function getAllPosts(lang: Lang): BlogPost[] {
  return BLOG_POSTS_DATA[lang];
}
