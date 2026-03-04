// TODO: Port from App.tsx — Diagnostic CTA section with radar preview
export function DiagnosticCTA() {
  return (
    <section id="diagnostic" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          Audit IA Gratuit
        </span>
        <h2 className="text-4xl font-display font-bold mb-4">
          Votre maturité IA en temps réel
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Identifiez vos leviers de croissance immédiats en comparant votre
          entreprise aux standards du marché.
        </p>
        {/* TODO: Steps + CTA + radar preview card */}
      </div>
    </section>
  );
}
