"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { Toggle } from "@/components/ui/Toggle";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  filterTournaments,
  mockTournaments,
  JUNIOR_LEVELS,
  JUNIOR_AGES,
  JUNIOR_TYPES,
  SURFACES,
  type Tournament,
} from "@/lib/mock-data";

const tournamentOptions = [
  { value: "", label: "All tournaments" },
  ...mockTournaments.map((t) => ({ value: t.id, label: t.name })),
];

const levelOptions = JUNIOR_LEVELS.map((l) => ({ value: l, label: l }));
const ageOptions = JUNIOR_AGES.map((a) => ({ value: a, label: a }));
const typeOptions = JUNIOR_TYPES.map((t) => ({ value: t, label: t }));
const surfaceOptions = SURFACES.map((s) => ({ value: s, label: s }));

export default function JuniorRegistrationsPage() {
  const [startDate, setStartDate] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [levels, setLevels] = useState<string[]>([]);
  const [ages, setAges] = useState<string[]>([]);
  const [onlyAllAges, setOnlyAllAges] = useState(false);
  const [types, setTypes] = useState<string[]>([]);
  const [surfaces, setSurfaces] = useState<string[]>([]);

  const tournaments = filterTournaments({
    startDate: startDate || undefined,
    tournamentId: tournamentId || undefined,
    levels: levels.length ? levels : undefined,
    ages: ages.length ? ages : undefined,
    types: types.length ? types : undefined,
    surfaces: surfaces.length ? surfaces : undefined,
  });

  const columns = [
    { key: "name", header: "Tournament Name", render: (r: Tournament) => r.name },
    {
      key: "dates",
      header: "Dates",
      render: (r: Tournament) => `${r.startDate} – ${r.endDate}`,
    },
    { key: "level", header: "Level", render: (r: Tournament) => r.level },
    { key: "surface", header: "Surface", render: (r: Tournament) => r.surface },
    { key: "entrants", header: "Entrants", render: (r: Tournament) => r.entrants },
    { key: "location", header: "Location", render: (r: Tournament) => r.location },
  ];

  return (
    <Container>
      <h1 className="mb-6">Junior Tournament Registrations</h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        View juniors registered for junior tournaments. Mock data only.
      </p>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Input
            label="Tournament Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            helperText="Filter by start date."
          />
          <Select
            label="Tournament"
            options={tournamentOptions}
            value={tournamentId}
            onChange={(e) => setTournamentId(e.target.value)}
            placeholder="All tournaments"
          />
          <MultiSelect
            label="Level"
            options={levelOptions}
            value={levels}
            onChange={setLevels}
            placeholder="All levels"
            helperText="L1–L6, U/C"
          />
          <MultiSelect
            label="Age"
            options={ageOptions}
            value={ages}
            onChange={setAges}
            placeholder="All ages"
            helperText="B/G 8–18"
          />
          <div className="sm:col-span-2 lg:col-span-1">
            <Toggle
              label="Show only tournaments with all selected ages"
              checked={onlyAllAges}
              onChange={setOnlyAllAges}
              helperText="When ages are selected, require all to be present."
            />
          </div>
          <MultiSelect
            label="Type"
            options={typeOptions}
            value={types}
            onChange={setTypes}
            placeholder="All types"
            helperText="Singles, Doubles, Mixed, etc."
          />
          <MultiSelect
            label="Surface"
            options={surfaceOptions}
            value={surfaces}
            onChange={setSurfaces}
            placeholder="All surfaces"
          />
        </div>
        <div className="mt-6">
          <Button type="submit" size="md">
            Search
          </Button>
        </div>
      </form>

      <section aria-label="Results">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Results
        </h2>
        {tournaments.length === 0 ? (
          <EmptyState
            title="No tournaments found"
            subtitle="Try adjusting your filters (date, level, age, type, surface)."
          />
        ) : (
          <Table
            columns={columns}
            data={tournaments}
            keyField="id"
            emptyMessage="No tournaments match your filters."
          />
        )}
      </section>
    </Container>
  );
}
