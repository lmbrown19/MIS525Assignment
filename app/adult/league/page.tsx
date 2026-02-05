"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { SECTIONS, DISTRICTS, AREAS, mockTeams } from "@/lib/mock-data";

const YEARS = Array.from({ length: 2026 - 2014 + 1 }, (_, i) => 2014 + i);

type Step = "year" | "section" | "district" | "area" | "league";

export default function FindLeaguePage() {
  const [step, setStep] = useState<Step>("year");
  const [year, setYear] = useState<string>("2025");
  const [section, setSection] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [area, setArea] = useState<string | null>(null);

  const resetAfterYear = () => {
    setSection(null);
    setDistrict(null);
    setArea(null);
  };

  return (
    <Container>
      <h1 className="mb-6">Find League</h1>

      {step === "year" && (
        <section>
          <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Step 1: Select Year
          </h2>
          <div className="flex flex-wrap gap-2">
            {YEARS.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => {
                  setYear(String(y));
                  setStep("section");
                  resetAfterYear();
                }}
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  year === String(y)
                    ? "border-accent bg-accent-light text-accent"
                    : "border-[var(--border)] bg-white text-[var(--text)] hover:bg-[var(--surface)]"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === "section" && (
        <>
          <nav className="mb-4 text-sm text-[var(--text-muted)]">
            <button
              type="button"
              onClick={() => setStep("year")}
              className="hover:text-primary"
            >
              ← Year
            </button>
            <span className="mx-2">/</span>
            <span>Section</span>
          </nav>
          <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Step 2: Select Section
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.slice(0, 12).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSection(s);
                  setStep("district");
                  setDistrict(null);
                  setArea(null);
                }}
                className="rounded-xl border border-[var(--border)] bg-white p-4 text-left shadow-card transition-shadow hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span className="font-medium text-[var(--text)]">{s}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {step === "district" && section && (
        <>
          <nav className="mb-4 text-sm text-[var(--text-muted)]">
            <button type="button" onClick={() => setStep("year")} className="hover:text-primary">← Year</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("section")} className="hover:text-primary">{year}</button>
            <span className="mx-2">/</span>
            <span>District</span>
          </nav>
          <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Step 3: Select District
          </h2>
          <ul className="space-y-2">
            {DISTRICTS.map((d) => (
              <li key={d}>
                <button
                  type="button"
                  onClick={() => {
                    setDistrict(d);
                    setStep("area");
                    setArea(null);
                  }}
                  className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {d}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {step === "area" && section && district && (
        <>
          <nav className="mb-4 text-sm text-[var(--text-muted)]">
            <button type="button" onClick={() => setStep("year")} className="hover:text-primary">← Year</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("section")} className="hover:text-primary">{year}</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("district")} className="hover:text-primary">{section}</button>
            <span className="mx-2">/</span>
            <span>Area</span>
          </nav>
          <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Step 4: Select Area
          </h2>
          <ul className="space-y-2">
            {AREAS.map((a) => (
              <li key={a}>
                <button
                  type="button"
                  onClick={() => {
                    setArea(a);
                    setStep("league");
                  }}
                  className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-left text-sm font-medium text-[var(--text)] hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {a}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {step === "league" && section && district && area && (
        <>
          <nav className="mb-4 text-sm text-[var(--text-muted)]">
            <button type="button" onClick={() => setStep("year")} className="hover:text-primary">← Year</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("section")} className="hover:text-primary">{year}</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("district")} className="hover:text-primary">{section}</button>
            <span className="mx-2">/</span>
            <button type="button" onClick={() => setStep("area")} className="hover:text-primary">{district}</button>
            <span className="mx-2">/</span>
            <span>{area}</span>
          </nav>
          <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
            League Summary — {section} / {district} / {area}
          </h2>
          <Table
            columns={[
              { key: "name", header: "Team Name", render: (r: { name: string }) => r.name },
              { key: "level", header: "Level", render: (r: { level: string }) => r.level },
              { key: "record", header: "Record", render: (r: { record: string }) => r.record },
              { key: "teamRating", header: "Team Rating", render: (r: { teamRating: string }) => r.teamRating },
            ]}
            data={mockTeams}
            keyField="id"
            emptyMessage="No teams in this league (mock data)."
          />
        </>
      )}
    </Container>
  );
}
