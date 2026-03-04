import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog-data';
import { BlogFilter } from '@/components/blog-filter';
import { NewsletterForm } from '@/components/newsletter-form';

/* ─── Metadata ────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Blog — L'Actualité de l'Intelligence Artificielle",
  description:
    "Analyses, cas d'usage et guides pratiques pour comprendre et déployer l'IA dans votre entreprise. Par Ludovic Goutel.",
  openGraph: {
    title: "Blog — L'actualité de l'IA",
    description:
      "Analyses, cas d'usage et guides pratiques pour comprendre et déployer l'IA en entreprise.",
    url: 'https://www.orchestraintelligence.fr/blog',
    siteName: 'Orchestra Intelligence',
  },
};

/* ─── Page (Server Component) ─────────────────────────────────────── */
export default function BlogPage() {
  const lang = 'fr'; // TODO: pull from cookie / middleware
  const posts = getAllPosts(lang);

  const t = {
    title: lang === 'fr' ? "L'actualité de" : 'The latest in',
    subtitle:
      lang === 'fr' ? "l'Intelligence Artificielle" : 'Artificial Intelligence',
    desc:
      lang === 'fr'
        ? "Analyses, cas d'usage et guides pratiques pour comprendre et déployer l'IA dans votre entreprise."
        : 'Analyses, use cases, and practical guides to understand and deploy AI in your company.',
  };

  return (
    <div className="pt-24 pb-24 px-6 animate-fade-in-up">
      {/* Hero */}
      <div className="max-w-7xl mx-auto mb-16 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {t.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            {t.subtitle}
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">{t.desc}</p>
      </div>

      {/* Client-side filter + grid */}
      <BlogFilter posts={posts} lang={lang} />

      {/* Newsletter */}
      <NewsletterForm lang={lang} />
    </div>
  );
}
