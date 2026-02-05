"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/Badge";
import { RatingMeter } from "@/components/ui/RatingMeter";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { getPlayerBySlug, MOCK_UPDATED_TIMESTAMP, mockPlayers } from "@/lib/mock-data";
import { EmptyState } from "@/components/ui/EmptyState";

const YEARS = Array.from({ length: 2026 - 2014 + 1 }, (_, i) => 2014 + i);

export default function PlayerStatsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const player = getPlayerBySlug(slug);

  if (!player) {
    return (
      <Container>
        <EmptyState
          title="Player not found"
          subtitle="No player matches this slug."
          action={
            <Link
              href="/adult/player-search"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              Back to Player Search
            </Link>
          }
        />
      </Container>
    );
  }

  const matchHistory = [
    { id: "1", date: "2025-01-10", opponent: "Player A", result: "W", score: "6-4, 6-3", type: "Singles" },
    { id: "2", date: "2025-01-08", opponent: "Player B", result: "L", score: "4-6, 6-4, 3-6", type: "Singles" },
    { id: "3", date: "2025-01-05", opponent: "Player C", result: "W", score: "6-2, 6-2", type: "Doubles" },
  ];

  const ratingHistory = [
    { date: "2025-01-15", rating: 4.523 },
    { date: "2025-01-01", rating: 4.518 },
    { date: "2024-12-15", rating: 4.512 },
  ];

  const glossaryItems = [
    {
      id: "ntrp",
      title: "NTRP",
      content:
        "National Tennis Rating Program. A scale from 1.0 to 7.0. This site estimates dynamic ratings and is not affiliated with USTA NTRP.",
    },
    {
      id: "dynamic",
      title: "Estimated Dynamic Rating",
      content:
        "An estimated value to the thousandth of a point representing current playing level. For display purposes only.",
    },
  ];

  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
          {player.firstName} {player.lastName}
        </h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {player.city}, {player.state}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4 text-sm">
        <span>
          <strong className="text-[var(--text-muted)]">Gender:</strong>{" "}
          {player.gender === "M" ? "Male" : "Female"}
        </span>
        <span>
          <strong className="text-[var(--text-muted)]">NTRP:</strong>{" "}
          {player.ntrp}
          {player.ntpKey && (
            <Badge variant="muted" className="ml-1">
              {player.ntrpKey}
            </Badge>
          )}
        </span>
        <span>
          <strong className="text-[var(--text-muted)]">Estimated Dynamic Rating:</strong>{" "}
          {player.estimatedDynamicRating.toFixed(3)}
        </span>
        <span>
          <strong className="text-[var(--text-muted)]">Last Updated:</strong>{" "}
          {player.lastUpdated ?? MOCK_UPDATED_TIMESTAMP}
        </span>
        <span>
          <strong className="text-[var(--text-muted)]">Projected Year End:</strong>{" "}
          {player.projectedYearEnd ?? "—"}
        </span>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Rating Meter
        </h2>
        <Card className="p-6">
          <RatingMeter
            value={player.estimatedDynamicRating}
            min={1}
            max={7}
            label="Estimated Dynamic Rating"
          />
        </Card>
      </section>

      <section className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-sm font-medium text-[var(--text-muted)]">Year:</span>
          <Link
            href="#"
            className="rounded-lg bg-accent-light px-3 py-1.5 text-sm font-medium text-accent"
          >
            Recent
          </Link>
          {YEARS.slice(-5).reverse().map((y) => (
            <Link
              key={y}
              href="#"
              className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:bg-[var(--surface)]"
            >
              {y}
            </Link>
          ))}
        </div>
        <div className="mb-4 flex gap-2">
          <span className="rounded-lg bg-accent-light px-3 py-1.5 text-sm font-medium text-accent">
            All
          </span>
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--text-muted)]">
            Singles
          </span>
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--text-muted)]">
            Doubles
          </span>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Stats Summary
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4">
            <p className="text-xs font-medium text-[var(--text-muted)]">Record</p>
            <p className="mt-1 text-lg font-semibold text-[var(--text)]">
              {player.record ?? "—"}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-xs font-medium text-[var(--text-muted)]">Streaks</p>
            <p className="mt-1 text-lg font-semibold text-[var(--text)]">
              {player.streaks ?? "—"}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-xs font-medium text-[var(--text-muted)]">Tiebreaks</p>
            <p className="mt-1 text-lg font-semibold text-[var(--text)]">
              {player.tiebreaks ?? "—"}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-xs font-medium text-[var(--text-muted)]">Avg Opponent Rating</p>
            <p className="mt-1 text-lg font-semibold text-[var(--text)]">
              {player.avgOpponentRating?.toFixed(2) ?? "—"}
            </p>
          </Card>
        </div>
      </section>

      <section className="mb-8">
        <Tabs
          tabs={[
            {
              id: "matches",
              label: "Recent Match History",
              panel: (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px] table-auto border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Opponent</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Result</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Score</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matchHistory.map((m) => (
                        <tr key={m.id} className="border-b border-[var(--border)]">
                          <td className="px-4 py-3 text-sm text-[var(--text)]">{m.date}</td>
                          <td className="px-4 py-3 text-sm text-[var(--text)]">{m.opponent}</td>
                          <td className="px-4 py-3">
                            <Badge variant={m.result === "W" ? "accent" : "muted"}>
                              {m.result}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-[var(--text)]">{m.score}</td>
                          <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{m.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
            },
            {
              id: "rating",
              label: "Current Rating History",
              panel: (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[300px] table-auto border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text)]">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ratingHistory.map((r, i) => (
                        <tr key={i} className="border-b border-[var(--border)]">
                          <td className="px-4 py-3 text-sm text-[var(--text)]">{r.date}</td>
                          <td className="px-4 py-3 text-sm font-mono text-[var(--text)]">{r.rating.toFixed(3)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
            },
          ]}
          defaultTab="matches"
        />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Glossary
        </h2>
        <Accordion items={glossaryItems} allowMultiple defaultOpen={[]} />
      </section>
    </Container>
  );
}
