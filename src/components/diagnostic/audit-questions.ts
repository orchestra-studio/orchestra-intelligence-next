import type { AuditQuestion, Lang } from './types';

/**
 * All diagnostic quiz questions — bilingual FR/EN.
 * Kept identical to the original monolith.
 */
export const AUDIT_QUESTIONS: Record<Lang, AuditQuestion[]> = {
  fr: [
    {
      id: 'strategy',
      category: 'Stratégie',
      question: "Quelle place occupe l'IA dans votre stratégie 2025 ?",
      options: [
        { label: 'Aucune / Exploratoire', score: 20 },
        { label: 'Quelques tests isolés (PoC)', score: 50 },
        { label: 'Axe de développement majeur', score: 80 },
        { label: 'Au cœur de notre business model', score: 100 },
      ],
    },
    {
      id: 'tools',
      category: 'Outils',
      question: 'Quels outils IA vos équipes utilisent-elles au quotidien ?',
      options: [
        { label: 'Aucun / ChatGPT gratuit', score: 20 },
        { label: 'Licences Pro (GPT-5.2, Claude 4.5)', score: 50 },
        { label: 'Outils métier intégrés via API', score: 80 },
        { label: 'Agents Autonomes custom (Gemini 3.0)', score: 100 },
      ],
    },
    {
      id: 'data',
      category: 'Data',
      question: 'Vos données sont-elles structurées pour l\'IA ?',
      options: [
        { label: 'Données dispersées / Silos', score: 20 },
        { label: 'Centralisation en cours', score: 50 },
        { label: 'Data Lake / Warehouse propre', score: 80 },
        { label: 'Pipeline temps réel prêt pour RAG', score: 100 },
      ],
    },
    {
      id: 'team',
      category: 'Équipe',
      question: 'Quel est le niveau de maturité IA de votre équipe ?',
      options: [
        { label: 'Aucune formation', score: 20 },
        { label: 'Quelques Champions isolés', score: 50 },
        { label: 'Formation généralisée', score: 80 },
        { label: 'Culture AI-Native & Experts', score: 100 },
      ],
    },
    {
      id: 'security',
      category: 'Sécurité',
      question: 'Comment gérez-vous la confidentialité des données ?',
      options: [
        { label: 'Pas de politique définie', score: 20 },
        { label: 'Charte d\'utilisation basique', score: 50 },
        { label: 'Outils Entreprise Sécurisés', score: 80 },
        { label: 'Environnement Local / Privé', score: 100 },
      ],
    },
    {
      id: 'automation',
      category: 'Auto',
      question: 'Quel % de vos processus est automatisé ?',
      options: [
        { label: 'Moins de 10% (Manuel)', score: 20 },
        { label: 'Entre 10% et 30% (Zapier/Make)', score: 50 },
        { label: 'Entre 30% et 60% (Workflows)', score: 80 },
        { label: 'Plus de 60% (Agents Autonomes)', score: 100 },
      ],
    },
  ],
  en: [
    {
      id: 'strategy',
      category: 'Strategy',
      question: 'How central is AI to your 2025 strategy?',
      options: [
        { label: 'None / Exploratory', score: 20 },
        { label: 'Isolated tests (PoC)', score: 50 },
        { label: 'Major development axis', score: 80 },
        { label: 'Core to business model (AI First)', score: 100 },
      ],
    },
    {
      id: 'tools',
      category: 'Tools',
      question: 'What AI tools do your teams use daily?',
      options: [
        { label: 'None / Free ChatGPT', score: 20 },
        { label: 'Pro Licenses (GPT-5.2, Claude 4.5)', score: 50 },
        { label: 'Integrated business tools via API', score: 80 },
        { label: 'Custom Autonomous Agents (Gemini 3.0)', score: 100 },
      ],
    },
    {
      id: 'data',
      category: 'Data',
      question: 'Is your data structured for AI?',
      options: [
        { label: 'Scattered data / Silos', score: 20 },
        { label: 'Centralization in progress', score: 50 },
        { label: 'Clean Data Lake / Warehouse', score: 80 },
        { label: 'Real-time pipeline ready for RAG', score: 100 },
      ],
    },
    {
      id: 'team',
      category: 'Team',
      question: "What is your team's AI maturity level?",
      options: [
        { label: 'No training', score: 20 },
        { label: 'A few isolated Champions', score: 50 },
        { label: 'Widespread training', score: 80 },
        { label: 'AI-Native Culture & Experts', score: 100 },
      ],
    },
    {
      id: 'security',
      category: 'Security',
      question: 'How do you handle data privacy?',
      options: [
        { label: 'No defined policy', score: 20 },
        { label: 'Basic usage charter', score: 50 },
        { label: 'Secure Enterprise Tools', score: 80 },
        { label: 'Local / Private Environment', score: 100 },
      ],
    },
    {
      id: 'automation',
      category: 'Auto',
      question: 'What % of your processes is automated?',
      options: [
        { label: 'Less than 10% (Manual)', score: 20 },
        { label: 'Between 10% and 30% (Zapier/Make)', score: 50 },
        { label: 'Between 30% and 60% (Workflows)', score: 80 },
        { label: 'Over 60% (Autonomous Agents)', score: 100 },
      ],
    },
  ],
};
