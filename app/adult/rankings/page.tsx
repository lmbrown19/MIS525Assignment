import Link from "next/link";
import { Container } from "@/components/Container";
import { CardLink } from "@/components/ui/Card";

const categories = [
  { href: "/adult/rankings/player-rating", title: "Player Rating", description: "Ranked by estimated dynamic rating." },
  { href: "/adult/rankings/best-record", title: "Best Record", description: "Ranked by win-loss record." },
  { href: "/adult/rankings/win-percentage", title: "Win Percentage", description: "Ranked by win percentage." },
  { href: "/adult/rankings/most-wins", title: "Most Wins", description: "Ranked by total wins." },
  { href: "/adult/rankings/most-losses", title: "Most Losses", description: "Ranked by total losses." },
];

export default function RankingsIndexPage() {
  return (
    <Container>
      <h1 className="mb-6">Player Rankings</h1>
      <p className="mb-8 text-sm text-[var(--text-muted)]">
        Choose a category to view rankings.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <CardLink
            key={c.href}
            href={c.href}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </Container>
  );
}
