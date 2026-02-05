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
      className={`rounded-xl border border-white/30 bg-white shadow-lg ${className}`}
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
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-white/30 bg-white p-4 shadow-lg transition-all hover:shadow-xl hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 w-full text-center ${className}`}
    >
      <span className="font-semibold text-[var(--bg-dark)] hover:text-accent transition-colors text-lg sm:text-xl">
        {title}
      </span>
      {description && (
        <p className="mt-1.5 text-sm text-[var(--text-dark)]/70">{description}</p>
      )}
    </Link>
  );
}
