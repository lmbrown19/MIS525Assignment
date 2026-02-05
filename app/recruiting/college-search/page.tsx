"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  filterColleges,
  mockColleges,
  type College,
} from "@/lib/mock-data";

const GENDER_OPTIONS = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
];
const DIVISION_OPTIONS = [
  { value: "All", label: "All" },
  { value: "D1", label: "D1" },
  { value: "D2", label: "D2" },
];
const CONFERENCES = [...new Set(mockColleges.map((c) => c.conference))];
const CONFERENCE_OPTIONS = [
  { value: "", label: "All" },
  ...CONFERENCES.map((c) => ({ value: c, label: c })),
];

const PAGE_SIZE = 5;

export default function CollegeSearchPage() {
  const [gender, setGender] = useState("Men");
  const [division, setDivision] = useState("All");
  const [conference, setConference] = useState("");
  const [maxDistance, setMaxDistance] = useState<number | "">("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    let list = filterColleges({
      gender,
      division: division !== "All" ? division : undefined,
      conference: conference || undefined,
      maxDistance: maxDistance !== "" ? Number(maxDistance) : undefined,
    });
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q) ||
          c.conference.toLowerCase().includes(q)
      );
    }
    return list;
  }, [gender, division, conference, maxDistance, searchQuery]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const columns = [
    { key: "name", header: "School", render: (r: College) => r.name },
    { key: "location", header: "Location", render: (r: College) => r.location },
    { key: "division", header: "Division", render: (r: College) => r.division },
    { key: "conference", header: "Conference", render: (r: College) => r.conference },
    { key: "distance", header: "Distance (mi)", render: (r: College) => r.distance },
  ];

  return (
    <Container>
      <h1 className="mb-6">College Search</h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        Search for nearby Division I schools. Mock data only.
      </p>

      <form
        className="mb-8 rounded-xl border border-[var(--border)] bg-white p-4 shadow-card sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            label="Gender"
            options={GENDER_OPTIONS}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Select
            label="Division"
            options={DIVISION_OPTIONS}
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          />
          <Select
            label="Conference"
            options={CONFERENCE_OPTIONS}
            value={conference}
            onChange={(e) => setConference(e.target.value)}
            placeholder="All"
          />
          <Input
            label="Distance (miles)"
            type="number"
            min={0}
            placeholder="Any"
            value={maxDistance === "" ? "" : maxDistance}
            onChange={(e) =>
              setMaxDistance(e.target.value === "" ? "" : Number(e.target.value))
            }
            helperText="Max distance from your location."
          />
        </div>
        <div className="mt-4">
          <Button type="submit" size="md">
            Search
          </Button>
        </div>
      </form>

      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search table (school, location, conference…)"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(0);
          }}
          className="max-w-sm"
        />
        <p className="text-sm text-[var(--text-muted)]">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <section aria-label="Results">
        {filtered.length === 0 ? (
          <EmptyState
            title="No schools found"
            subtitle="Try adjusting filters or search query."
          />
        ) : (
          <>
            <Table
              columns={columns}
              data={paginated}
              keyField="id"
              emptyMessage="No results."
            />
            <nav
              className="mt-6 flex flex-wrap items-center justify-between gap-4"
              aria-label="Pagination"
            >
              <p className="text-sm text-[var(--text-muted)]">
                Page {currentPage + 1} of {totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={currentPage === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={currentPage >= totalPages - 1}
                >
                  Next
                </Button>
              </div>
            </nav>
          </>
        )}
      </section>
    </Container>
  );
}
