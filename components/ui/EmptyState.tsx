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
      className={`flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center ${className}`}
      role="status"
      aria-label="Empty state"
    >
      {icon && (
        <div className="mb-4 text-[var(--muted)]" aria-hidden>
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--text)]">{title}</h3>
      {subtitle && (
        <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
