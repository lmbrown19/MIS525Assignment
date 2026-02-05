"use client";

import { useId, useState, useRef, useEffect } from "react";

type Option = { value: string; label: string };

type MultiSelectProps = {
  label?: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  helperText?: string;
  className?: string;
};

export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select…",
  helperText,
  className = "",
}: MultiSelectProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (optValue: string) => {
    if (value.includes(optValue)) {
      onChange(value.filter((v) => v !== optValue));
    } else {
      onChange([...value, optValue]);
    }
  };

  const displayLabel =
    value.length === 0
      ? placeholder
      : value.length === 1
        ? options.find((o) => o.value === value[0])?.label ?? value[0]
        : `${value.length} selected`;

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-[var(--text)]"
        >
          {label}
        </label>
      )}
      <button
        type="button"
        id={id}
        onClick={() => setOpen(!open)}
        className="flex min-h-[44px] w-full items-center justify-between rounded-lg border border-[var(--border)] bg-white px-3 py-2.5 text-left text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 sm:min-h-[40px]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={label || "Multi-select"}
      >
        <span className={value.length === 0 ? "text-[var(--muted)]" : ""}>
          {displayLabel}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="mt-1 max-h-48 overflow-auto rounded-lg border border-[var(--border)] bg-white py-1 shadow-lg"
        >
          {options.map((opt) => {
            const checked = value.includes(opt.value);
            return (
              <li key={opt.value} role="option" aria-selected={checked}>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[var(--surface)] focus:bg-[var(--surface)] focus:outline-none"
                  onClick={() => toggle(opt.value)}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded border ${
                      checked
                        ? "border-accent bg-accent text-white"
                        : "border-[var(--border)]"
                    }`}
                  >
                    {checked && (
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {helperText && (
        <p className="mt-1 text-xs text-[var(--text-muted)]">{helperText}</p>
      )}
    </div>
  );
}
