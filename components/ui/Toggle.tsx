"use client";

import { useId } from "react";

type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  helperText?: string;
  className?: string;
};

export function Toggle({
  label,
  checked,
  onChange,
  helperText,
  className = "",
}: ToggleProps) {
  const id = useId();
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[var(--border)] transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 data-[state=checked]:bg-accent"
        style={{ backgroundColor: checked ? "var(--accent)" : "var(--border)" }}
      >
        <span
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform"
          style={{
            transform: checked ? "translateX(1.25rem)" : "translateX(0.125rem)",
          }}
        />
      </button>
      <div className="flex-1">
        <label
          htmlFor={id}
          className="cursor-pointer text-sm font-medium text-[var(--text)]"
        >
          {label}
        </label>
        {helperText && (
          <p className="mt-0.5 text-xs text-[var(--text-muted)]">{helperText}</p>
        )}
      </div>
    </div>
  );
}
