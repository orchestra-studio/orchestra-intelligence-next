import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Eye,
  Users,
  FileCheck,
  Globe,
  Bot,
  Fingerprint,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  Mail,
} from 'lucide-react';

/* ─── Metadata ────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Trust Center — Sécurité & Conformité',
  description:
    'Découvrez nos engagements en matière de sécurité, conformité RGPD, hébergement européen et gouvernance IA. Vos données sont protégées.',
  openGraph: {
    title: 'Trust Center — Sécurité & Conformité',
    description:
      'Hébergement EU, RGPD, chiffrement, Human-in-the-Loop. Vos données sont entre de bonnes mains.',
    url: 'https://www.orchestraintelligence.fr/trust-center',
    siteName: 'Orchestra Intelligence',
  },
};

/* ─── Data ────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: <Server className="w-7 h-7" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    title: 'Hébergement Européen',
    titleEn: 'European Hosting',
    description:
      "Vos données restent en Europe. Notre infrastructure repose sur Vercel (Edge Network EU) et Supabase (serveurs UE, Francfort). Aucune donnée client n'est stockée en dehors de l'Union Européenne.",
    details: [
      'Vercel — CDN Edge EU (Frankfurt, Paris, Amsterdam)',
      'Supabase — PostgreSQL hébergé EU (Frankfurt)',
      'Backups chiffrés sur stockage européen',
      'Latence < 50ms depuis la France',
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    title: 'Conformité RGPD',
    titleEn: 'GDPR Compliance',
    description:
      "Nous sommes conformes au Règlement Général sur la Protection des Données (UE 2016/679) et à la loi Informatique et Libertés. Chaque traitement de données est documenté, justifié et minimisé.",
    details: [
      'Registre des traitements à jour',
      'Politique de conservation documentée (3 ans max)',
      'Droit d\'accès, rectification, effacement opérationnel',
      'DPA (Data Processing Agreement) disponible sur demande',
      'Consentement explicite pour newsletter & cookies analytiques',
    ],
  },
  {
    icon: <Lock className="w-7 h-7" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    title: 'Chiffrement & Sécurité',
    titleEn: 'Encryption & Security',
    description:
      'Chiffrement de bout en bout, protocoles de niveau bancaire, et architecture zero-trust. Vos données sont protégées à chaque étape.',
    details: [
      'TLS 1.3 pour toutes les communications',
      'Chiffrement AES-256 au repos (databases)',
      'Row Level Security (RLS) sur Supabase',
      'Rotation automatique des clés API',
      'Authentification multi-facteurs (MFA) pour les équipes',
      'Audit logs de tous les accès',
    ],
  },
  {
    icon: <Bot className="w-7 h-7" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    title: 'Digital Job Descriptions',
    titleEn: 'AI Agent Job Descriptions',
    description:
      "Chaque agent IA déployé possède une fiche de poste numérique (Digital Job Description) qui définit précisément son périmètre d'action, ses permissions et ses limites.",
    details: [
      'Périmètre d\'action clairement défini par agent',
      'Permissions granulaires (lecture, écriture, exécution)',
      'Limites de tokens et de coûts par agent',
      'Journalisation complète des actions',
      'Revue périodique des permissions (mensuelle)',
    ],
  },
  {
    icon: <Users className="w-7 h-7" />,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    title: 'Human-in-the-Loop',
    titleEn: 'Human-in-the-Loop',
    description:
      "Notre méthodologie de Pilotage Agentique garantit qu'un expert humain supervise, valide et approuve chaque action critique. L'IA exécute, l'humain décide.",
    details: [
      'Validation humaine obligatoire pour les actions critiques',
      'Workflow d\'approbation configurable par le client',
      'Dashboard de supervision en temps réel',
      'Alertes automatiques en cas de comportement anormal',
      'Possibilité de pause / rollback immédiat',
      'Rapports d\'activité détaillés (hebdomadaires)',
    ],
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    title: 'Politique de Sécurité',
    titleEn: 'Security Policy',
    description:
      'Sept politiques de sécurité internes encadrent nos opérations. Elles couvrent la gestion des accès, la réponse aux incidents, la continuité d\'activité et la formation des équipes.',
    details: [
      'OI-SEC-001 — Politique de sécurité de l\'information',
      'OI-SEC-002 — Gestion des accès et identités',
      'OI-SEC-003 — Classification et protection des données',
      'OI-SEC-004 — Réponse aux incidents de sécurité',
      'OI-SEC-005 — Continuité d\'activité & reprise',
      'OI-SEC-006 — Sécurité des développements',
      'OI-SEC-007 — Formation & sensibilisation sécurité',
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: 'EU AI Act',
    status: 'Conforme',
    statusEn: 'Compliant',
    detail: 'Classification des risques, documentation, transparence',
    color: 'text-emerald-400',
  },
  {
    name: 'RGPD / GDPR',
    status: 'Conforme',
    statusEn: 'Compliant',
    detail: 'Registre des traitements, DPO, droits des personnes',
    color: 'text-emerald-400',
  },
  {
    name: 'ISO 27001',
    status: 'En cours',
    statusEn: 'In progress',
    detail: 'Certification prévue T3-T4 2026',
    color: 'text-yellow-400',
  },
  {
    name: 'SOC 2 Type II',
    status: 'Planifié',
    statusEn: 'Planned',
    detail: 'Via sous-traitants (Supabase, Vercel) — audit interne T4 2026',
    color: 'text-yellow-400',
  },
  {
    name: 'Pen Testing',
    status: 'Q2-Q3 2026',
    statusEn: 'Q2-Q3 2026',
    detail: 'Test d\'intrusion externe prévu par un cabinet indépendant',
    color: 'text-blue-400',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Où sont stockées mes données ?',
    qEn: 'Where is my data stored?',
    a: 'Toutes les données sont hébergées dans l\'Union Européenne (serveurs Frankfurt pour Supabase, Edge EU pour Vercel). Aucune donnée client n\'est stockée aux États-Unis.',
  },
  {
    q: 'Les agents IA ont-ils accès à mes données sensibles ?',
    qEn: 'Do AI agents have access to my sensitive data?',
    a: 'Chaque agent IA opère avec des permissions strictement définies (Digital Job Description). Les données sensibles sont chiffrées et les agents n\'accèdent qu\'aux données nécessaires à leur mission spécifique.',
  },
  {
    q: 'Que se passe-t-il si un agent IA fait une erreur ?',
    qEn: 'What happens if an AI agent makes a mistake?',
    a: 'Notre processus Human-in-the-Loop garantit une validation humaine pour toute action critique. Un système de rollback immédiat est disponible, et toutes les actions sont journalisées pour audit.',
  },
  {
    q: 'Puis-je obtenir un DPA (Data Processing Agreement) ?',
    qEn: 'Can I get a DPA (Data Processing Agreement)?',
    a: 'Oui, nous fournissons un DPA conforme au RGPD sur simple demande à sales@orchestraintelligence.fr. Il est inclus dans tous nos contrats Studio.',
  },
  {
    q: 'Quels modèles IA utilisez-vous ?',
    qEn: 'Which AI models do you use?',
    a: 'Nous utilisons des modèles de pointe (Claude, GPT, Gemini) via des API sécurisées. Les données ne sont jamais utilisées pour l\'entraînement des modèles. Nous pouvons également déployer des modèles on-premise si requis.',
  },
  {
    q: 'Comment signaler une vulnérabilité ?',
    qEn: 'How do I report a vulnerability?',
    a: 'Contactez immédiatement security@orchestraintelligence.fr. Nous nous engageons à accuser réception sous 24h et à corriger toute vulnérabilité critique sous 72h.',
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function TrustCenterPage() {
  const lang = 'fr';

  return (
    <div className="pt-20 animate-fade-in-up">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-8">
            <ShieldCheck className="w-4 h-4" /> Trust Center
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Vos données sont{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              entre de bonnes mains
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Transparence totale sur nos pratiques de sécurité, notre conformité réglementaire et la gouvernance de nos agents IA. Parce que la confiance se construit sur des faits, pas sur des promesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pillars"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Explorer nos engagements
            </a>
            <Link
              href="/confidentialite"
              className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Politique de confidentialité
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Score Banner ─────────────────────────────────────── */}
      <section className="py-8 border-y border-white/5 bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Hébergement', value: '🇪🇺 EU Only', sub: 'Frankfurt & Paris' },
              { label: 'Chiffrement', value: 'AES-256', sub: 'TLS 1.3 in transit' },
              { label: 'Conformité', value: 'RGPD ✓', sub: '+ EU AI Act' },
              { label: 'Supervision', value: 'Human-in-Loop', sub: '100% des actions critiques' },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ─────────────────────────────────────────────── */}
      <section id="pillars" className="py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              6 piliers de confiance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chaque aspect de notre infrastructure et de nos processus est conçu pour protéger vos données et garantir la transparence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                className={`group p-8 rounded-2xl bg-white/[0.02] border ${pillar.borderColor} hover:bg-white/[0.04] transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-6 ${pillar.color} group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{pillar.description}</p>

                <ul className="space-y-2">
                  {pillar.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.color} shrink-0 mt-0.5`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Roadmap ──────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#12121a]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications & Roadmap Sécurité</h2>
            <p className="text-gray-400">Notre parcours vers les standards les plus exigeants.</p>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-[200px]">
                  <Fingerprint className={`w-5 h-5 ${cert.color}`} />
                  <span className="font-bold text-white">{cert.name}</span>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-bold ${cert.color} bg-white/5 shrink-0`}>
                  {cert.status}
                </div>

                <p className="text-sm text-gray-500 flex-grow">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Flow Diagram ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Architecture de sécurité</h2>
            <p className="text-gray-400">Comment vos données transitent dans notre écosystème.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {[
              { icon: <Globe className="w-6 h-6 text-blue-400" />, label: 'Client', sub: 'HTTPS / TLS 1.3' },
              { icon: <ArrowRight className="w-5 h-5 text-gray-600" />, label: '', sub: '' },
              { icon: <Server className="w-6 h-6 text-emerald-400" />, label: 'Vercel Edge EU', sub: 'CDN + SSR' },
              { icon: <ArrowRight className="w-5 h-5 text-gray-600" />, label: '', sub: '' },
              { icon: <Lock className="w-6 h-6 text-purple-400" />, label: 'Supabase EU', sub: 'AES-256 + RLS' },
            ].map((step, i) =>
              step.label ? (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <div className="font-bold text-white text-sm">{step.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{step.sub}</div>
                </div>
              ) : (
                <div key={i} className="hidden md:flex justify-center">{step.icon}</div>
              )
            )}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-300 font-medium">Données IA & Modèles</p>
              <p className="text-xs text-gray-400 mt-1">
                Les appels aux API IA (Claude, Gemini, GPT) sont effectués avec des données anonymisées quand c&apos;est possible.
                Aucune donnée client n&apos;est utilisée pour l&apos;entraînement des modèles. Opt-out systématique activé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Sécurité ──────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#12121a]/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">FAQ Sécurité</h2>
            <p className="text-gray-400">Les questions les plus fréquentes de nos clients et prospects.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-white pr-4">{item.q}</span>
                  <span className="text-gray-500 group-open:rotate-45 transition-transform text-xl shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact DPO / CTA ─────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-emerald-400" />
          </div>

          <h2 className="text-3xl font-bold mb-4">Une question sur la sécurité ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toute question relative à la sécurité de vos données,
            la conformité RGPD, ou la gouvernance de nos agents IA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="mailto:sales@orchestraintelligence.fr"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> Contacter le DPO
            </a>
            <Link
              href="/confidentialite"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            DPO : sales@orchestraintelligence.fr • Réponse sous 48h ouvrées
          </p>
        </div>
      </section>
    </div>
  );
}
