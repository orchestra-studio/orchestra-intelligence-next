import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilotage Agentique — Missions Stratégiques Déléguées",
  description:
    "Délégation de missions stratégiques à des agents IA supervisés. À partir de 1 000€ par mission. Orchestra Intelligence.",
};

export default function PilotagePage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Pilotage{" "}
          <span className="gradient-text">Agentique</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Délégation de missions stratégiques à nos experts et leurs agents.
        </p>
        {/* TODO: Full content — ported by dedicated worker */}
      </div>
    </div>
  );
}
