"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { getTeamBySlug, mockPlayers } from "@/lib/mock-data";

export default function TeamDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const team = getTeamBySlug(slug);

  if (!team) {
    return (
      <Container>
        <EmptyState
          title="Team not found"
          subtitle="No team matches this slug."
          action={
            <Link
              href="/adult/team-search"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              Back to Team Search
            </Link>
          }
        />
      </Container>
    );
  }

  const roster = mockPlayers.slice(0, 5).map((p) => ({
    id: p.id,
    name: `${p.firstName} ${p.lastName}`,
    ntrp: p.ntrp,
    position: "—",
  }));

  const matchList = [
    { id: "1", date: "2025-01-10", opponent: "Team B", result: "W", score: "3-2" },
    { id: "2", date: "2025-01-08", opponent: "Team C", result: "L", score: "2-3" },
  ];

  return (
    <Container>
      <nav className="mb-4 text-sm text-[var(--text-muted)]">
        <Link href="/adult/team-search" className="hover:text-primary">
          ← Team Search
        </Link>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
          {team.name}
        </h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {team.section} · {team.district} · {team.area}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span>
            <strong className="text-[var(--text-muted)]">Level:</strong> {team.level}
          </span>
          <span>
            <strong className="text-[var(--text-muted)]">Record:</strong> {team.record}
          </span>
          <span>
            <strong className="text-[var(--text-muted)]">Team Rating:</strong> {team.teamRating}
          </span>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Roster
        </h2>
        <Table
          columns={[
            { key: "name", header: "Player Name", render: (r: { name: string }) => r.name },
            { key: "ntrp", header: "NTRP", render: (r: { ntrp: string }) => r.ntrp },
            { key: "position", header: "Position", render: (r: { position: string }) => r.position },
          ]}
          data={roster}
          keyField="id"
          onRowClick={(row) => {
            const p = mockPlayers.find((p) => p.id === (row as { id: string }).id);
            if (p) window.location.href = `/adult/player/${p.slug}`;
          }}
          emptyMessage="No roster data (mock)."
        />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Match List
        </h2>
        <Table
          columns={[
            { key: "date", header: "Date", render: (r: { date: string }) => r.date },
            { key: "opponent", header: "Opponent", render: (r: { opponent: string }) => r.opponent },
            { key: "result", header: "Result", render: (r: { result: string }) => r.result },
            { key: "score", header: "Score", render: (r: { score: string }) => r.score },
          ]}
          data={matchList}
          keyField="id"
          emptyMessage="No matches (mock)."
        />
      </section>
    </Container>
  );
}
