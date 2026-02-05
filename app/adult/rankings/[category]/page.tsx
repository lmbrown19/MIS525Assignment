"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  mockRankings,
  type RankingCategory,
  type RankingRow,
  SECTIONS_OPTIONS,
  GENDER_OPTIONS,
} from "@/lib/mock-data";
import { useState } from "react";

const categoryLabels: Record<string, string> = {
  "player-rating": "Player Rating",
  "best-record": "Best Record",
  "win-percentage": "Win Percentage",
  "most-wins": "Most Wins",
  "most-losses": "Most Losses",
};

const validCategories: RankingCategory[] = [
  "player-rating",
  "best-record",
  "win-percentage",
  "most-wins",
  "most-losses",
];

export default function RankingsCategoryPage() {
  const params = useParams();
  const category = (params.category as string) ?? "player-rating";
  const [section, setSection] = useState("");
  const [gender, setGender] = useState("");

  const isValid = validCategories.includes(category as RankingCategory);
  const data = isValid ? mockRankings[category as RankingCategory] : [];
  const valueColumn =
    category === "player-rating"
      ? "Rating"
      : category === "best-record"
        ? "Record"
        : category === "win-percentage"
          ? "Win %"
          : category === "most-wins"
            ? "Wins"
            : "Losses";

  const columns = [
    { key: "rank", header: "Rank", render: (r: RankingRow) => r.rank },
    {
      key: "playerName",
      header: "Player Name",
      render: (r: RankingRow) =>
        r.slug ? (
          <Link
            href={`/adult/player/${r.slug}`}
            className="font-medium text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {r.playerName}
          </Link>
        ) : (
          r.playerName
        ),
    },
    { key: "value", header: valueColumn, render: (r: RankingRow) => r.value },
  ];

  if (!isValid) {
    return (
      <Container>
        <EmptyState
          title="Category not found"
          subtitle="This rankings category does not exist."
          action={
            <Link
              href="/adult/rankings"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              Back to Rankings
            </Link>
          }
        />
      </Container>
    );
  }

  return (
    <Container>
      <nav className="mb-4 text-sm text-[var(--text-muted)]">
        <Link href="/adult/rankings" className="hover:text-primary">
          ← Rankings
        </Link>
      </nav>
      <h1 className="mb-6">{categoryLabels[category] ?? category}</h1>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            label="Section"
            options={[{ value: "", label: "All" }, ...SECTIONS_OPTIONS]}
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="All"
          />
          <Select
            label="Gender"
            options={GENDER_OPTIONS}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </form>

      <Table
        columns={columns}
        data={data}
        keyField="rank"
        emptyMessage="No rankings in this category."
      />
    </Container>
  );
}
