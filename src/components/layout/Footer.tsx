import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl tracking-tight mb-6"
          >
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/10">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path
                  d="M12 4L4 20h16L12 4z"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <rect
                  x="18"
                  y="6"
                  width="3"
                  height="12"
                  rx="1.5"
                  fill="url(#blueGlowFooter)"
                />
                <defs>
                  <linearGradient
                    id="blueGlowFooter"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Orchestra</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            L&apos;intelligence artificielle claire, utile et humaine.
          </p>
          <div className="text-sm text-gray-400 mb-4 space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:sales@orchestraintelligence.fr"
                className="hover:text-primary transition-colors"
              >
                sales@orchestraintelligence.fr
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Toulouse, France</span>
            </div>
          </div>
          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/orchestra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/music_music_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-colors"
            >
              <span className="sr-only">X / Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/pilotage" className="hover:text-primary transition-colors">
                Pilotage Agentique
              </Link>
            </li>
            <li>
              <Link href="/studio" className="hover:text-primary transition-colors">
                Studio
              </Link>
            </li>
            <li>
              <Link href="/formation" className="hover:text-primary transition-colors">
                Formation
              </Link>
            </li>
            <li>
              <Link href="/methode" className="hover:text-primary transition-colors">
                Méthode
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-6">Entreprise</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/diagnostic" className="hover:text-primary transition-colors">
                Diagnostic
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/trust-center" className="hover:text-primary transition-colors">
                Trust Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold mb-6">Légal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link
                href="/mentions-legales"
                className="hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/confidentialite"
                className="hover:text-primary transition-colors"
              >
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-primary transition-colors">
                CGV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>&copy; 2026 Orchestra Intelligence. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
