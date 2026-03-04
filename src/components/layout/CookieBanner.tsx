"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("oi-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("oi-cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("oi-cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/10 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-gray-300">
          <p className="font-semibold text-white mb-1">
            🍪 Cookies &amp; Confidentialité
          </p>
          <p>
            Ce site utilise des cookies essentiels au fonctionnement et des
            cookies analytiques pour améliorer votre expérience. Aucune donnée
            n&apos;est revendue. Consultez notre{" "}
            <Link
              href="/confidentialite"
              className="text-primary underline"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="px-5 py-2.5 text-sm border border-white/20 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
