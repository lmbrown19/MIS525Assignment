import { ReactNode } from "react";
import Link from "next/link";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Card({
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={`rounded-xl border border-[var(--border)] bg-white shadow-card ${className}`}
    >
      {children}
    </Component>
  );
}

type CardLinkProps = {
  href: string;
  title: string;
  description?: string;
  className?: string;
};

export function CardLink({ href, title, description, className = "" }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={`block rounded-xl border border-[var(--border)] bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 min-h-[80px] ${className}`}
    >
      <span className="font-semibold text-primary hover:text-primary-hover">
        {title}
      </span>
      {description && (
        <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p>
      )}
    </Link>
  );
}
