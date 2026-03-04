"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  readonly q: string;
  readonly a: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: readonly FAQItem[];
}

// Default export (props-based) for the complete page
export default function FAQSection({ title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section id="faq" className="py-24 px-6 bg-surfaceHighlight/20">
      <div className="max-w-3xl mx-auto">
        {title && <h2 className="text-3xl font-display font-bold mb-2 text-center">{title}</h2>}
        {subtitle && <p className="text-gray-400 text-center mb-12">{subtitle}</p>}

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === i
                  ? "bg-white/5 border-primary/50"
                  : "bg-transparent border-white/10 hover:border-white/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className={`font-medium ${openIndex === i ? "text-white" : "text-gray-300"}`}>
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Named export (no-props) for backward compatibility with stub imports
export { FAQSection as FAQ };
