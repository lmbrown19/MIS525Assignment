"use client";

import { ReactNode, useId, useState } from "react";

type Tab = { id: string; label: string; panel: ReactNode };

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
};

export function Tabs({
  tabs,
  defaultTab = tabs[0]?.id,
  className = "",
}: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab);
  const idBase = useId().replace(/:/g, "");
  const activePanel = tabs.find((t) => t.id === activeId)?.panel ?? null;

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Tabs"
        className="flex gap-1 border-b-2 border-white/30"
      >
        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`${idBase}-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${idBase}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              className={`flex items-center justify-center rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 ${
                isActive
                  ? "bg-accent text-white border-b-2 border-accent -mb-px shadow-md"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${idBase}-panel-${activeId}`}
        aria-labelledby={`${idBase}-tab-${activeId}`}
        className="pt-4"
      >
        {activePanel}
      </div>
    </div>
  );
}
