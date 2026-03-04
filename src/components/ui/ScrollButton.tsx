"use client";

import { type ReactNode } from "react";

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export default function ScrollButton({ targetId, className, children }: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
