import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`${hover ? "glass-card-hover" : "glass-card"} rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
