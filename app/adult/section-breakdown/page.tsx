"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import {
  getSectionBreakdownFemale,
  getSectionBreakdownMale,
  RATING_BUCKETS,
  type SectionBreakdownRow,
} from "@/lib/mock-data";

export default function SectionBreakdownPage() {
  const [activeTable, setActiveTable] = useState<"female" | "male">("female");
  const femaleData = getSectionBreakdownFemale();
  const maleData = getSectionBreakdownMale();
  const buckets = ["section", ...RATING_BUCKETS, "Total"];

  return (
    <Container>
      <h1 className="mb-6">Section Breakdown</h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        Player counts by section and rating bucket. UI-only; data is mocked.
      </p>

      <div
        className="mb-6 flex rounded-lg border border-[var(--border)] p-1"
        role="tablist"
        aria-label="Table type"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTable === "female"}
          onClick={() => setActiveTable("female")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 ${
            activeTable === "female"
              ? "bg-accent text-white"
              : "text-[var(--text-muted)] hover:bg-[var(--surface)]"
          }`}
        >
          Female Players
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTable === "male"}
          onClick={() => setActiveTable("male")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 ${
            activeTable === "male"
              ? "bg-accent text-white"
              : "text-[var(--text-muted)] hover:bg-[var(--surface)]"
          }`}
        >
          Male Players
        </button>
      </div>

      <div className="mb-4 flex justify-end">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {}}
          className="cursor-pointer"
        >
          Download CSV
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-white shadow-card">
        <table
          className="w-full min-w-[700px] table-auto border-collapse"
          role="region"
          aria-label={activeTable === "female" ? "Female players by section" : "Male players by section"}
        >
          <thead className="sticky top-0 z-10 bg-[var(--surface)] shadow-sm">
            <tr>
              {buckets.map((b) => (
                <th
                  key={b}
                  className="whitespace-nowrap border-b border-[var(--border)] px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
                >
                  {b === "section" ? "Section" : b}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(activeTable === "female" ? femaleData : maleData).map(
              (row: SectionBreakdownRow, i: number) => (
                <tr
                  key={row.section}
                  className={
                    i % 2 === 0 ? "bg-white" : "bg-[var(--surface)]"
                  }
                >
                  {buckets.map((b) => (
                    <td
                      key={b}
                      className="whitespace-nowrap border-b border-[var(--border)] px-4 py-3 text-sm text-[var(--text)]"
                    >
                      {b === "section" ? row.section : row[b] ?? "—"}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
