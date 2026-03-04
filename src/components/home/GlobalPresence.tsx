import { CLIENT_LOGOS } from "@/lib/i18n";

interface GlobalPresenceProps {
  trusted: string;
  hubs: readonly string[];
}

export default function GlobalPresence({ trusted, hubs }: GlobalPresenceProps) {
  const tripled = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full py-12 border-y border-white/5 bg-surface/30 backdrop-blur-sm overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{trusted}</p>

        <div className="flex items-center gap-6">
          {hubs.map((hub, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
              {hub}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll whitespace-nowrap flex gap-16 items-center">
          {tripled.map((logo, i) => (
            <div
              key={i}
              className="text-2xl font-display font-bold text-white/20 uppercase hover:text-white/80 transition-colors cursor-default select-none"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  );
}
