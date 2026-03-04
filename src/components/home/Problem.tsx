// TODO: Port from App.tsx — Problem section with 4 pain points
export function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Le vrai problème</h2>
        <p className="text-xl text-gray-400 mb-16">
          Vous passez plus de temps à gérer qu&apos;à créer.
        </p>
        {/* TODO: 4 pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Placeholder cards */}
        </div>
      </div>
    </section>
  );
}
