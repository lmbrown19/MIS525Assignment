"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { filterPlayers, type Player } from "@/lib/mock-data";

export default function PlayerSearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [first, setFirst] = useState(searchParams.get("first") ?? "");
  const [last, setLast] = useState(searchParams.get("last") ?? "");

  useEffect(() => {
    setFirst(searchParams.get("first") ?? "");
    setLast(searchParams.get("last") ?? "");
  }, [searchParams]);

  const players = useCallback(() => {
    return filterPlayers({
      first: first || undefined,
      last: last || undefined,
    });
  }, [first, last])();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (first) params.set("first", first);
    if (last) params.set("last", last);
    router.push(`/adult/player-search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const columns = [
    { key: "name", header: "Name", render: (r: Player) => `${r.firstName} ${r.lastName}` },
    { key: "location", header: "Location", render: (r: Player) => `${r.city}, ${r.state}` },
    { key: "gender", header: "Gender", render: (r: Player) => r.gender === "M" ? "Male" : "Female" },
    { key: "ntrp", header: "NTRP", render: (r: Player) => r.ntrp },
    {
      key: "estimatedDynamicRating",
      header: "Estimated Dynamic Rating",
      render: (r: Player) => r.estimatedDynamicRating.toFixed(3),
    },
  ];

  return (
    <Container>
      <h1 className="mb-6">Player Search</h1>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Input
            label="First Name"
            placeholder="First name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            helperText="Enter part of the first name to filter."
          />
          <Input
            label="Last Name"
            placeholder="Last name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            helperText="Enter part of the last name to filter."
          />
          <div className="flex items-end">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>
      </form>

      <section aria-label="Search results">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Results
        </h2>
        {players.length === 0 ? (
          <EmptyState
            title="No players found"
            subtitle="Try adjusting your search (first or last name)."
          />
        ) : (
          <Table
            columns={columns}
            data={players}
            keyField="id"
            onRowClick={(row) => {
              window.location.href = `/adult/player/${(row as Player).slug}`;
            }}
            emptyMessage="No players match your search."
          />
        )}
      </section>
    </Container>
  );
}
