import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
};

const variantStyles = {
  default: "bg-[var(--surface)] text-[var(--text)] border-[var(--border)]",
  accent: "bg-accent-light text-accent border-accent/30",
  muted: "bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)]",
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
