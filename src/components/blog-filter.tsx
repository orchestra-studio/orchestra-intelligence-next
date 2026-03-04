'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';

interface BlogFilterProps {
  posts: BlogPost[];
  lang: 'fr' | 'en';
}

export function BlogFilter({ posts, lang }: BlogFilterProps) {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', ...Array.from(new Set(posts.map((p) => p.category)))];
  const filteredPosts = filter === 'Tous' ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      {/* Category pills */}
      <div className="max-w-7xl mx-auto mb-12 overflow-x-auto pb-4">
        <div className="flex gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all hover:translate-y-[-4px]"
          >
            {/* Gradient header */}
            <div className={`h-48 w-full bg-gradient-to-br ${post.imageGradient} relative p-6 flex flex-col justify-end`}>
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/10">
                {post.category}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                  {post.author.charAt(0)}
                </div>
                <span className="text-xs font-medium text-gray-300">{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
