import { ReactNode } from "react";

type Column<T> = {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
  className?: string;
};

type TableProps<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  onRowClick?: (row: T) => void;
  stickyHeader?: boolean;
  zebra?: boolean;
  emptyMessage?: string;
  className?: string;
};

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  keyField,
  onRowClick,
  stickyHeader = true,
  zebra = true,
  emptyMessage = "No results found.",
  className = "",
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div
        className={`overflow-hidden rounded-xl border-2 border-white/30 bg-white shadow-lg ${className}`}
        role="region"
        aria-label="Table empty"
      >
        <table className="w-full min-w-[600px] table-fixed sm:table-auto">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border-b border-white/20 bg-[var(--surface-light)] px-4 py-3 text-left text-sm font-semibold text-[var(--text-dark)]"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-sm text-[var(--text-dark)]/70"
              >
                {emptyMessage}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div
      className={`overflow-x-auto overflow-y-auto rounded-xl border-2 border-white/30 bg-white shadow-lg ${stickyHeader ? "table-sticky max-h-[70vh]" : ""} ${zebra ? "table-zebra" : ""} ${className}`}
      role="region"
      aria-label="Data table"
    >
      <table className="w-full min-w-[600px] table-fixed sm:table-auto">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border-b border-white/20 bg-[var(--surface-light)] px-4 py-3 text-left text-sm font-semibold text-[var(--text-dark)]"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={String(row[keyField])}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-white/10 transition-colors ${
                onRowClick
                  ? "cursor-pointer hover:bg-[var(--accent-light)]"
                  : ""
              }`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-4 py-3 text-sm text-[var(--text-dark)] ${col.className ?? ""}`}
                >
                  {col.render
                    ? col.render(row)
                    : String((row[col.key] as ReactNode) ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
