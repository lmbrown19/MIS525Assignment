type RatingMeterProps = {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
};

export function RatingMeter({
  value,
  min = 1,
  max = 7,
  label,
  showValue = true,
  className = "",
}: RatingMeterProps) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="mb-2 flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-[var(--text-dark)]">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-mono font-semibold text-accent">
              {value.toFixed(3)}
            </span>
          )}
        </div>
      )}
      <div
        className="h-4 w-full overflow-hidden rounded-full bg-white/30 shadow-inner"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label || "Rating"}
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-300 shadow-md"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs text-[var(--text-dark)]/60">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
