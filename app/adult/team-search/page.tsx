"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  filterTeams,
  YEARS_OPTIONS,
  LEAGUE_TYPES_OPTIONS,
  SECTIONS_OPTIONS,
  type Team,
} from "@/lib/mock-data";

export default function TeamSearchPage() {
  const router = useRouter();
  const [year, setYear] = useState("2025");
  const [leagueType, setLeagueType] = useState("");
  const [section, setSection] = useState("");
  const [teamName, setTeamName] = useState("");

  const teams = filterTeams({
    year,
    leagueType: leagueType || undefined,
    section: section || undefined,
    teamName: teamName || undefined,
  });

  const columns = [
    { key: "name", header: "Team Name", render: (r: Team) => r.name },
    { key: "section", header: "Section", render: (r: Team) => r.section },
    { key: "district", header: "District", render: (r: Team) => r.district },
    { key: "area", header: "Area", render: (r: Team) => r.area },
    { key: "level", header: "Level", render: (r: Team) => r.level },
    { key: "record", header: "Record", render: (r: Team) => r.record },
    { key: "teamRating", header: "Team Rating", render: (r: Team) => r.teamRating },
  ];

  return (
    <Container>
      <h1 className="mb-6">Team Search</h1>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            label="Year"
            options={YEARS_OPTIONS}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <Select
            label="League Type"
            options={[{ value: "", label: "All" }, ...LEAGUE_TYPES_OPTIONS]}
            value={leagueType}
            onChange={(e) => setLeagueType(e.target.value)}
            placeholder="All"
          />
          <Select
            label="Section"
            options={[{ value: "", label: "All" }, ...SECTIONS_OPTIONS]}
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="All"
          />
          <Input
            label="Team Name"
            placeholder="Team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            helperText="Partial name to search."
          />
        </div>
        <div className="mt-4">
          <Button type="submit" size="md">
            Search
          </Button>
        </div>
      </form>

      <section aria-label="Search results">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Results
        </h2>
        {teams.length === 0 ? (
          <EmptyState
            title="No teams found"
            subtitle="Try adjusting filters (year, league type, section, or team name)."
          />
        ) : (
          <Table
            columns={columns}
            data={teams}
            keyField="id"
            onRowClick={(row) => router.push(`/adult/team/${(row as Team).slug}`)}
            emptyMessage="No teams match your search."
          />
        )}
      </section>
    </Container>
  );
}
