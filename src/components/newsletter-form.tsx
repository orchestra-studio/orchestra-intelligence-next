'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  lang?: 'fr' | 'en';
}

export function NewsletterForm({ lang = 'fr' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = {
    title: lang === 'fr' ? "Restez à la pointe de l'IA" : 'Stay ahead with AI',
    desc:
      lang === 'fr'
        ? 'Recevez nos meilleures analyses et guides pratiques directement dans votre boîte mail.'
        : 'Get our best analyses and practical guides directly in your inbox.',
    placeholder: lang === 'fr' ? 'Votre email pro' : 'Your work email',
    subscribe: lang === 'fr' ? "S'inscrire" : 'Subscribe',
    thanks: lang === 'fr' ? 'Merci ! Vous recevrez nos prochaines analyses.' : "Thanks! You'll receive our next analyses.",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: hook to Supabase / mailing list
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto mt-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
        <p className="text-gray-400 mb-8">{t.desc}</p>

        {submitted ? (
          <p className="text-emerald-400 font-medium">{t.thanks}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              className="flex-grow bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-indigo-500 outline-none text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t.subscribe}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
