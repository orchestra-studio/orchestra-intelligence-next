// TODO: Port from App.tsx — Hero section with animated badge, titles, CTAs
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
          L&apos;intelligence claire, utile et humaine
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Réinventez vos process{" "}
          <span className="gradient-text">avec les agents IA</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Formation IA sur mesure, développement d&apos;agents intelligents et
          pilotage agentique pour libérer le potentiel de vos équipes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/diagnostic"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Faire le diagnostic (3 min)
          </a>
          <a
            href="https://cal.com/orchestra-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Réserver ma démo
          </a>
        </div>
      </div>
    </section>
  );
}
