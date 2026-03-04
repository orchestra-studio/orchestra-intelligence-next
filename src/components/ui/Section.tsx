import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      {container ? (
        <div className="max-w-7xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
