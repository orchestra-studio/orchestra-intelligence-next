import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  Clock,
  Layers,
  Zap,
  Users,
  Mic,
  Bot,
  FileText,
  Wand2,
  PieChart,
  PenTool,
  Code2,
  Database,
  ShieldCheck,
  Settings,
  Sparkles,
  CheckCircle2,
  Check,
} from 'lucide-react';

/* ─── Metadata ────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Notre Méthode — Comprendre, Automatiser, Piloter',
  description:
    "Comprendre → Automatiser → Piloter. Notre méthode unique combine l'expertise humaine et la puissance de l'IA pour libérer le potentiel de vos équipes.",
  openGraph: {
    title: 'Notre Méthode — Comprendre, Automatiser, Piloter',
    description:
      "L'IA qui libère, pas qui remplace. Découvrez notre manifeste et notre processus en 5 étapes.",
    url: 'https://www.orchestraintelligence.fr/methode',
    siteName: 'Orchestra Intelligence',
  },
};

/* ─── Bilingual content ───────────────────────────────────────────── */
const T = {
  fr: {
    tag: 'Notre méthode unique',
    heroTitle: 'L\'IA qui libère,',
    heroHighlight: 'pas qui remplace',
    heroDesc:
      "Nous sommes les premiers clients de nos propres agents. L'humain reste au cœur de chaque décision. Notre méthode combine l'expertise humaine et la puissance de l'IA pour libérer le potentiel de vos équipes.",
    manifestoBtn: 'Découvrir notre manifeste',
    discussBtn: 'Discuter de mon projet',
    manifestoTitle: 'Notre Manifeste',
    manifestoText:
      "Chez Orchestra Intelligence, nous croyons que l'intelligence artificielle ne doit pas remplacer l'humain — elle doit le libérer.",
    manifestoPoints: [
      { title: 'Libérer du temps', desc: "Automatiser les tâches répétitives pour que vos équipes se concentrent sur l'essentiel." },
      { title: 'Libérer de la complexité', desc: "Rendre l'IA claire et accessible, même sans service data ni département innovation." },
      { title: 'Libérer le potentiel', desc: 'Révéler les capacités de chaque équipe grâce à des outils adaptés.' },
    ],
    missionTitle: 'Notre mission est simple',
    missionDesc: "Rendre l'IA claire, utile et actionnable pour toutes les entreprises.",
    missionBoxes: [
      { title: 'Nous formons pour comprendre', desc: "Parce que la maîtrise de l'IA commence par la compréhension." },
      { title: 'Nous automatisons pour respirer', desc: 'Libérer vos équipes des tâches chronophages et répétitives.' },
      { title: "Nous orchestrons l'IA comme un levier", desc: 'Pas comme une mode, mais comme un outil stratégique mesurable.' },
    ],
    processTitle: 'Notre processus en 5 étapes',
    processDesc:
      'De votre premier contact à la livraison de votre solution, chaque étape est pensée pour garantir votre succès.',
    steps: [
      { title: 'Premier contact humain', desc: 'Échange personnalisé avec un expert Project Manager pour comprendre vos enjeux.' },
      { title: 'Discussion & enregistrement', desc: 'Analyse détaillée de vos processus et documentation de vos besoins spécifiques.' },
      { title: 'Agent World en action', desc: 'Nos agents spécialisés (Analyste, Designer, Dev) structurent votre solution.' },
      { title: 'Audit complet', desc: "Rapport d'analyse approfondi et recommandations stratégiques." },
      { title: 'Solution Studio 100% personnalisée', desc: 'Architecture technique détaillée et roadmap de développement sur mesure.' },
    ],
    agentWorldTitle: "Un cocktail d'agents IA à votre service",
    agentWorldDesc:
      "Notre Agent World est un écosystème d'intelligences artificielles spécialisées qui travaillent ensemble pour analyser, concevoir et optimiser votre solution.",
    agents: [
      { name: 'Analyste', desc: 'Analyse besoins' },
      { name: 'Designer', desc: 'UX/UI Design' },
      { name: 'Développeur', desc: 'Architecture' },
      { name: 'Data', desc: 'Structure' },
      { name: 'Sécurité', desc: 'Conformité' },
      { name: 'Process', desc: 'Workflows' },
    ],
    collabTitle: 'Collaboration intelligente',
    collabDesc: 'Nos agents communiquent entre eux pour créer une solution cohérente.',
    modelsTitle: 'Deux modèles de partenariat',
    recommended: 'Recommandé',
    model1: {
      title: 'Partenariat Studio Mensuel',
      desc: 'Pour une collaboration continue et une évolution permanente de vos outils.',
      features: [
        'Développement continu de fonctionnalités',
        'Maintenance et optimisation régulières',
        'Support prioritaire 7j/7',
        'Accès à toutes nos intégrations',
        'Reporting mensuel détaillé',
      ],
      btn: 'Découvrir Studio',
    },
    model2: {
      title: 'Pilotage Agentique Ponctuel',
      desc: 'Pour des missions spécifiques et des besoins ponctuels sans engagement.',
      features: [
        'Mission définie avec objectifs clairs',
        'Délais de livraison garantis',
        'Agents IA spécialisés pour votre mission',
        'Résultats mesurables et concrets',
        "Pas d'engagement long terme",
      ],
      btn: 'Découvrir le Pilotage',
    },
    contactTitle: 'Prêt à commencer votre projet ?',
    contactDesc:
      'Discutons de vos besoins et découvrons ensemble comment notre méthode unique peut transformer votre entreprise.',
    contactBtn1: 'Réserver un échange gratuit',
    contactBtn2: 'Faire le diagnostic IA',
  },
  en: {
    tag: 'Our Unique Method',
    heroTitle: 'AI that frees,',
    heroHighlight: 'not replaces',
    heroDesc:
      "We are the first customers of our own agents. Humans remain at the heart of every decision. Our method combines human expertise and AI power to unlock your team's potential.",
    manifestoBtn: 'Discover our manifesto',
    discussBtn: 'Discuss my project',
    manifestoTitle: 'Our Manifesto',
    manifestoText:
      'At Orchestra Intelligence, we believe that artificial intelligence should not replace humans — it should liberate them.',
    manifestoPoints: [
      { title: 'Free up time', desc: 'Automate repetitive tasks so your teams can focus on what matters.' },
      { title: 'Free from complexity', desc: 'Make AI clear and accessible, even without a data service or innovation department.' },
      { title: 'Unlock potential', desc: 'Reveal the capabilities of each team with adapted tools.' },
    ],
    missionTitle: 'Our mission is simple',
    missionDesc: 'Make AI clear, useful, and actionable for all companies.',
    missionBoxes: [
      { title: 'We train to understand', desc: 'Because mastering AI starts with understanding.' },
      { title: 'We automate to breathe', desc: 'Free your teams from time-consuming and repetitive tasks.' },
      { title: 'We orchestrate AI as a lever', desc: 'Not as a trend, but as a measurable strategic tool.' },
    ],
    processTitle: 'Our 5-Step Process',
    processDesc: 'From your first contact to solution delivery, every step is designed to ensure your success.',
    steps: [
      { title: 'First human contact', desc: 'Personalized exchange with a Project Manager expert to understand your challenges.' },
      { title: 'Discussion & recording', desc: 'Detailed analysis of your processes and documentation of your specific needs.' },
      { title: 'Agent World in action', desc: 'Our specialized agents (Analyst, Designer, Dev) structure your solution.' },
      { title: 'Complete audit', desc: 'In-depth analysis report and strategic recommendations.' },
      { title: '100% custom Studio Solution', desc: 'Detailed technical architecture and tailored development roadmap.' },
    ],
    agentWorldTitle: 'A cocktail of AI agents at your service',
    agentWorldDesc:
      'Our Agent World is an ecosystem of specialized artificial intelligences working together to analyze, design, and optimize your solution.',
    agents: [
      { name: 'Analyst', desc: 'Needs Analysis' },
      { name: 'Designer', desc: 'UX/UI Design' },
      { name: 'Developer', desc: 'Architecture' },
      { name: 'Data', desc: 'Structure' },
      { name: 'Security', desc: 'Compliance' },
      { name: 'Process', desc: 'Workflows' },
    ],
    collabTitle: 'Intelligent Collaboration',
    collabDesc: 'Our agents communicate with each other to create a coherent solution.',
    modelsTitle: 'Two Partnership Models',
    recommended: 'Recommended',
    model1: {
      title: 'Monthly Studio Partnership',
      desc: 'For ongoing collaboration and permanent evolution of your tools.',
      features: [
        'Continuous feature development',
        'Regular maintenance and optimization',
        'Priority support 7/7',
        'Access to all our integrations',
        'Detailed monthly reporting',
      ],
      btn: 'Discover Studio',
    },
    model2: {
      title: 'One-off Agentic Piloting',
      desc: 'For specific missions and one-off needs without commitment.',
      features: [
        'Defined mission with clear objectives',
        'Guaranteed delivery times',
        'Specialized AI agents for your mission',
        'Measurable and concrete results',
        'No long-term commitment',
      ],
      btn: 'Discover Piloting',
    },
    contactTitle: 'Ready to start your project?',
    contactDesc:
      "Let's discuss your needs and discover together how our unique method can transform your company.",
    contactBtn1: 'Book a free chat',
    contactBtn2: 'Start AI Diagnostic',
  },
};

const STEP_ICONS = [
  <Users key="users" className="w-6 h-6 text-blue-400" />,
  <Mic key="mic" className="w-6 h-6 text-purple-400" />,
  <Bot key="bot" className="w-6 h-6 text-emerald-400" />,
  <FileText key="file" className="w-6 h-6 text-orange-400" />,
  <Wand2 key="wand" className="w-6 h-6 text-pink-400" />,
];

const AGENT_ICONS = [
  <PieChart key="pie" className="w-6 h-6 text-blue-400" />,
  <PenTool key="pen" className="w-6 h-6 text-pink-400" />,
  <Code2 key="code" className="w-6 h-6 text-green-400" />,
  <Database key="db" className="w-6 h-6 text-yellow-400" />,
  <ShieldCheck key="shield" className="w-6 h-6 text-red-400" />,
  <Settings key="settings" className="w-6 h-6 text-purple-400" />,
];

const MANIFESTO_ICONS = [
  <Clock key="clock" className="w-6 h-6" />,
  <Layers key="layers" className="w-6 h-6" />,
  <Zap key="zap" className="w-6 h-6" />,
];

const MISSION_COLORS = ['border-blue-500', 'border-purple-500', 'border-emerald-500'];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function MethodePage() {
  const lang = 'fr';
  const t = T[lang];

  return (
    <div className="pt-20 animate-fade-in-up">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono uppercase tracking-wider mb-8">
            <Heart className="w-3 h-3" /> {t.tag}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {t.heroTitle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {t.heroHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#manifesto"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {t.manifestoBtn}
            </a>
            <a
              href="#contact-methode"
              className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              {t.discussBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Manifesto ──────────────────────────────────────────── */}
      <section id="manifesto" className="py-24 px-6 border-y border-white/5 bg-[#0a0a0f]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.manifestoTitle}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.manifestoText.split(' — ')[0]} —{' '}
                <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">
                  {t.manifestoText.split(' — ')[1]}
                </span>
              </p>

              <div className="space-y-6">
                {t.manifestoPoints.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      {MANIFESTO_ICONS[i]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Mission card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{t.missionTitle}</h3>
                  <p className="text-gray-400">{t.missionDesc}</p>
                </div>
                <div className="space-y-4">
                  {t.missionBoxes.map((box, i) => (
                    <div key={i} className={`p-4 bg-white/5 rounded-xl border-l-4 ${MISSION_COLORS[i]}`}>
                      <h4 className="font-bold text-white">{box.title}</h4>
                      <p className="text-sm text-gray-400">{box.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Process 5 Steps ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#12121a]/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.processTitle}</h2>
            <p className="text-gray-400">{t.processDesc}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:hidden" />

            <div className="space-y-12">
              {t.steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 w-full pl-16 md:pl-0">
                    <div
                      className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0a0a0f] border border-blue-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      {STEP_ICONS[i]}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block text-center px-8">
                    <span className="text-8xl font-bold text-white/5 select-none">{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Agent World ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.agentWorldTitle}</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">{t.agentWorldDesc}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.agents.map((agent, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all hover:scale-105 cursor-default"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  {AGENT_ICONS[i]}
                </div>
                <h3 className="font-bold text-white mb-1">{agent.name}</h3>
                <p className="text-xs text-gray-500">{agent.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl max-w-3xl mx-auto bg-indigo-500/5">
            <h4 className="font-bold text-indigo-300 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" /> {t.collabTitle}
            </h4>
            <p className="text-sm text-gray-400">{t.collabDesc}</p>
          </div>
        </div>
      </section>

      {/* ── 5. Partnership Models ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#12121a]/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">{t.modelsTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Studio — Recommended */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-purple-500 to-blue-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                {t.recommended}
              </div>
              <div className="h-full bg-[#0a0a0f] rounded-[22px] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{t.model1.title}</h3>
                <p className="text-sm text-gray-400 mb-8 relative z-10">{t.model1.desc}</p>

                <ul className="space-y-4 mb-10 relative z-10">
                  {t.model1.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/studio"
                  className="block w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all text-center relative z-10"
                >
                  {t.model1.btn}
                </Link>
              </div>
            </div>

            {/* Pilotage */}
            <div className="p-1 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="h-full bg-transparent rounded-[22px] p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-2">{t.model2.title}</h3>
                <p className="text-sm text-gray-400 mb-8">{t.model2.desc}</p>

                <ul className="space-y-4 mb-10">
                  {t.model2.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-5 h-5 text-gray-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pilotage"
                  className="block w-full py-4 rounded-xl border border-white/20 hover:bg-white/5 text-white font-bold transition-all text-center"
                >
                  {t.model2.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Contact CTA ────────────────────────────────────────── */}
      <section id="contact-methode" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">{t.contactTitle}</h2>
          <p className="text-gray-400 mb-10 text-lg">{t.contactDesc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://cal.com/orchestra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto text-center"
            >
              {t.contactBtn1}
            </Link>
            <Link
              href="/#diagnostic"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              {t.contactBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
