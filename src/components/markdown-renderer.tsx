'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * Simple markdown → React renderer.
 * Handles: # h1, ## h2, ### h3, **bold**, [link](url), lists (- / *)
 */
export const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const renderLines = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];

    let listItems: string[] = [];
    let inList = false;

    const flushList = (key: string) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key} className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
            {listItems.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (inList && !trimmed.startsWith('*') && !trimmed.startsWith('-')) {
        flushList(`list-${index}`);
      }

      if (trimmed === '') return;

      if (trimmed.startsWith('# ')) {
        elements.push(
          <h2
            key={index}
            className="text-3xl font-bold mt-12 mb-6 text-white"
          >
            {trimmed.substring(2)}
          </h2>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h2
            key={index}
            className="text-2xl font-bold mt-12 mb-6 text-white border-l-4 border-indigo-500 pl-4"
          >
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-gray-100">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        inList = true;
        listItems.push(trimmed.substring(2));
      } else {
        const parseInline = (text: string): React.ReactNode[] => {
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const parts: React.ReactNode[] = [];
          let lastIndex = 0;
          let match: RegExpExecArray | null;

          while ((match = linkRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
              parts.push(...parseBold(text.substring(lastIndex, match.index)));
            }
            parts.push(
              <a
                key={`link-${match.index}`}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-500/50 transition-colors inline-flex items-center gap-1"
              >
                {match[1]} <ExternalLink className="w-3 h-3" />
              </a>
            );
            lastIndex = linkRegex.lastIndex;
          }
          if (lastIndex < text.length) {
            parts.push(...parseBold(text.substring(lastIndex)));
          }
          return parts.length > 0 ? parts : parseBold(text);
        };

        const parseBold = (text: string): React.ReactNode[] => {
          const parts = text.split(/(\*\*.*?\*\*)/g);
          return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={`b-${i}`} className="text-white font-semibold">
                  {part.substring(2, part.length - 2)}
                </strong>
              );
            }
            return part;
          });
        };

        elements.push(
          <p key={index} className="text-lg text-gray-300 leading-relaxed mb-6">
            {parseInline(trimmed)}
          </p>
        );
      }
    });

    // Flush remaining list
    flushList('list-end');
    return elements;
  };

  return <div className="prose-custom">{renderLines()}</div>;
};
