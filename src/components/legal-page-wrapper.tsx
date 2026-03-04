import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface LegalPageWrapperProps {
  children: React.ReactNode;
  title: string;
  lang?: 'fr' | 'en';
}

export function LegalPageWrapper({ children, title, lang = 'fr' }: LegalPageWrapperProps) {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-indigo-400 hover:text-indigo-300 text-sm mb-8 flex items-center gap-2 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {lang === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h1>

        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:space-y-2 [&_ul]:ml-4 [&_li]:text-gray-400 [&_strong]:text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
