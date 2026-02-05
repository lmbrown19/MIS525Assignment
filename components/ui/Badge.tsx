import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
};

const variantStyles = {
  default: "bg-white text-[var(--bg-dark)] border-white/30",
  accent: "bg-accent text-white border-accent shadow-md",
  muted: "bg-white/80 text-[var(--text-dark)]/70 border-white/30",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
