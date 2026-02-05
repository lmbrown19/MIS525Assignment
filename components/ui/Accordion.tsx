"use client";

import { ReactNode, useId, useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
};

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));
  const idBase = useId().replace(/:/g, "");

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const buttonId = `${idBase}-accordion-${item.id}`;
        const panelId = `${idBase}-panel-${item.id}`;
        return (
          <div
            key={item.id}
            className="rounded-lg border border-[var(--border)] bg-white overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              >
                {item.title}
                <svg
                  className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
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
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-[var(--border)]"
            >
              <div className="px-4 py-3 text-sm text-[var(--text-muted)]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
