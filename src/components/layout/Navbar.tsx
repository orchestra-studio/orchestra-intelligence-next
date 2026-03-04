"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, type Lang } from "@/lib/i18n";

export function Navbar() {
  const [lang, setLang] = useState<Lang>("fr");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = NAV_ITEMS[lang];
  const ctaLabel = lang === "fr" ? "Diagnostic IA" : "AI Diagnostic";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 z-50 font-display font-bold text-xl tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shadow-lg border border-white/10">
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
                fill="url(#blueGlow)"
              />
              <defs>
                <linearGradient
                  id="blueGlow"
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
          <span className="hidden sm:block">
            Orchestra<span className="text-gray-400">Intelligence</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-glow ${
                pathname === item.href
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA & Lang */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === "fr"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === "en"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href="/diagnostic"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-display font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-4">
              <button
                onClick={() => setLang("fr")}
                className={`text-xl ${
                  lang === "fr" ? "text-primary" : "text-gray-500"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`text-xl ${
                  lang === "en" ? "text-primary" : "text-gray-500"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/diagnostic"
              className="px-8 py-3 text-lg font-semibold rounded-full bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
