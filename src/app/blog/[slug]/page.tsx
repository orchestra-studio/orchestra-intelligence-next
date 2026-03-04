import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Calendar, Clock, Hash } from 'lucide-react';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/blog-data';
import { MarkdownRenderer } from '@/components/markdown-renderer';

/* ─── Static Params (SSG) ─────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ─── Dynamic Metadata ────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'fr');
  if (!post) return { title: 'Article introuvable' };

  return {
    title: `${post.title} — Blog Orchestra Intelligence`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.orchestraintelligence.fr/blog/${slug}`,
      siteName: 'Orchestra Intelligence',
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = 'fr'; // TODO: pull from cookie / middleware
  const post = getPostBySlug(slug, lang);

  if (!post) notFound();

  const t = {
    back: lang === 'fr' ? 'Retour au blog' : 'Back to blog',
    author: lang === 'fr' ? 'Auteur' : 'Author',
    readTime: lang === 'fr' ? 'de lecture' : 'read',
    summary: lang === 'fr' ? 'Sommaire' : 'Table of Contents',
    bio:
      lang === 'fr'
        ? 'Expert en Intelligence Artificielle et Stratégie chez Orchestra Intelligence.'
        : 'Artificial Intelligence and Strategy Expert at Orchestra Intelligence.',
    readNext: lang === 'fr' ? 'À lire ensuite' : 'Read Next',
  };

  // Extract headings for ToC
  const headings = post.content
    .split('\n')
    .filter((l) => l.trim().startsWith('## '))
    .map((h) => h.replace('## ', ''));

  // Related posts
  const relatedPosts = getAllPosts(lang)
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // BlogPosting JSON-LD schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Orchestra Intelligence" },
    publisher: {
      "@type": "Organization",
      name: "Orchestra Intelligence",
      logo: {
        "@type": "ImageObject",
        url: "https://www.orchestraintelligence.fr/logo.png",
      },
    },
    datePublished: post.date,
    mainEntityOfPage: `https://www.orchestraintelligence.fr/blog/${slug}`,
    articleSection: post.category,
    inLanguage: lang === "fr" ? "fr-FR" : "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
    <div className="pt-24 pb-24 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> {t.back}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-y border-white/10 py-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="block text-white font-medium">{post.author}</span>
                <span className="text-xs">{t.author}</span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime} {t.readTime}
            </div>
          </div>
        </div>

        {/* Featured gradient */}
        <div
          className={`w-full h-64 md:h-96 rounded-3xl bg-gradient-to-br ${post.imageGradient} mb-16 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 mix-blend-overlay" />
        </div>

        {/* Content + sidebar */}
        <div className="flex gap-12 relative">
          {/* Sidebar ToC */}
          <div className="hidden lg:block w-64 sticky top-32 h-fit shrink-0">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <Hash className="w-4 h-4 text-indigo-400" /> {t.summary}
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 border-l border-white/10 pl-4">
              {headings.map((h, i) => (
                <li key={i} className="hover:text-indigo-400 transition-colors cursor-pointer">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Article body */}
          <div className="flex-grow min-w-0">
            <MarkdownRenderer content={post.content} />

            {/* Author bio */}
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">{post.author}</h4>
                <p className="text-sm text-gray-400">{t.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      <section className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8">{t.readNext}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-colors"
            >
              <div className="text-xs text-indigo-400 mb-2 font-bold">{p.category}</div>
              <h4 className="font-bold text-white mb-2">{p.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
