import { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  subtitle,
  action,
  icon,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/30 bg-white px-6 py-16 text-center shadow-lg ${className}`}
      role="status"
      aria-label="Empty state"
    >
      {icon && (
        <div className="mb-4 text-accent" aria-hidden>
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--text-dark)]">{title}</h3>
      {subtitle && (
        <p className="mt-2 max-w-sm text-sm text-[var(--text-dark)]/70">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
