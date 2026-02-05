"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { Accordion } from "@/components/ui/Accordion";
import {
  filterPlayers,
  MOCK_UPDATED_TIMESTAMP,
  SECTIONS_OPTIONS,
  DISTRICTS_OPTIONS,
  AREAS_OPTIONS,
  GENDER_OPTIONS,
  ORDER_BY_OPTIONS,
  type Player,
} from "@/lib/mock-data";

export default function PlayerRatingsPage() {
  const [section, setSection] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [gender, setGender] = useState("");
  const [orderBy, setOrderBy] = useState("rating");

  const players = filterPlayers({
    section: section || undefined,
    district: district || undefined,
    area: area || undefined,
    gender: gender || undefined,
    orderBy: orderBy || undefined,
  });

  const columns = [
    {
      key: "name",
      header: "Player Name",
      render: (r: Player) => (
        <Link
          href={`/adult/player/${r.slug}`}
          className="font-medium text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {r.firstName} {r.lastName}
        </Link>
      ),
    },
    { key: "ntrp", header: "Current NTRP", render: (r: Player) => r.ntrp },
    {
      key: "estimatedDynamicRating",
      header: "Estimated Dynamic Rating",
      render: (r: Player) => r.estimatedDynamicRating.toFixed(3),
    },
    {
      key: "estimatedRating",
      header: "Estimated Rating",
      render: (r: Player) => r.estimatedRating?.toFixed(1) ?? "—",
    },
    {
      key: "projectedYearEnd",
      header: "Projected Year End",
      render: (r: Player) => r.projectedYearEnd ?? "—",
    },
    {
      key: "ratingBumpProbability",
      header: "Rating Bump Probability",
      render: (r: Player) =>
        r.ratingBumpProbability != null ? `${r.ratingBumpProbability}%` : "—",
    },
    { key: "matches", header: "Matches", render: (r: Player) => r.matches ?? "—" },
  ];

  const glossaryItems = [
    {
      id: "ntrp",
      title: "NTRP",
      content:
        "National Tennis Rating Program. A scale from 1.0 to 7.0 used to describe playing level. This site estimates dynamic ratings and is not affiliated with USTA NTRP.",
    },
    {
      id: "dynamic",
      title: "Estimated Dynamic Rating",
      content:
        "An estimated value to the thousandth of a point representing current playing level based on match results. For display purposes only.",
    },
    {
      id: "projected",
      title: "Projected Year End",
      content:
        "Estimated year-end rating based on current trajectory. Placeholder for UI.",
    },
    {
      id: "bump",
      title: "Rating Bump Probability",
      content:
        "Estimated likelihood of a rating increase at year-end. Placeholder for UI.",
    },
  ];

  return (
    <Container>
      <h1 className="mb-6">Player Ratings</h1>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Select
            label="Section"
            options={[{ value: "", label: "All" }, ...SECTIONS_OPTIONS]}
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="All"
          />
          <Select
            label="District"
            options={[{ value: "", label: "All" }, ...DISTRICTS_OPTIONS]}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="All"
          />
          <Select
            label="Area"
            options={[{ value: "", label: "All" }, ...AREAS_OPTIONS]}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="All"
          />
          <Select
            label="Gender"
            options={GENDER_OPTIONS}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Select
            label="Order By"
            options={ORDER_BY_OPTIONS}
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          />
        </div>
      </form>

      <p className="mb-4 text-sm text-[var(--text-muted)]">
        Updated: {MOCK_UPDATED_TIMESTAMP}
      </p>

      <Table
        columns={columns}
        data={players}
        keyField="id"
        emptyMessage="No players match your filters."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Glossary
        </h2>
        <Accordion items={glossaryItems} allowMultiple defaultOpen={[]} />
      </section>
    </Container>
  );
}
