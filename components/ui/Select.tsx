import { SelectHTMLAttributes, forwardRef } from "react";

type Option = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
  placeholder?: string;
  helperText?: string;
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      helperText,
      error,
      id,
      className = "",
      ...props
    },
    ref
  ) => {
    const selectId =
      id || `select-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1 block text-sm font-medium text-[var(--text)]"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`block w-full rounded-lg border bg-white px-3 py-2.5 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 disabled:opacity-50 min-h-[44px] sm:min-h-[40px] ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-[var(--border)]"
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={
            helperText && !error ? `${selectId}-helper` : undefined
          }
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <p
            id={`${selectId}-helper`}
            className="mt-1 text-xs text-[var(--text-muted)]"
          >
            {helperText}
          </p>
        )}
        {error && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
