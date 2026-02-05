import Link from "next/link";
import { Container } from "@/components/Container";
import { CardLink } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-10">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            College Recruiting
          </h2>
          <CardLink
            href="/recruiting/college-search"
            title="College Search"
            description="Search for nearby Division I schools. Many features to come with additional schools."
          />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Junior Tools
          </h2>
          <CardLink
            href="/tournaments/junior-registrations"
            title="Tournament Registrations"
            description="View juniors registered for junior tournaments and sort by rank for determining selection and seeding."
          />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Adult Tools
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CardLink
              href="/adult/ratings"
              title="Player Ratings"
              description="Player ratings by area."
            />
            <CardLink
              href="/adult/player-search"
              title="Player Search"
              description="Individual player search by name."
            />
            <CardLink
              href="/adult/team-search"
              title="Team Search"
              description="Individual team search."
            />
            <CardLink
              href="/adult/league"
              title="Find League"
              description="Find leagues and view teams, rosters, and team ratings."
            />
            <CardLink
              href="/adult/rankings"
              title="Player Rankings"
              description="Ranking by record, percentage, most wins and more."
            />
            <CardLink
              href="/adult/section-breakdown"
              title="Section Breakdown"
              description="Player breakdown by each section."
            />
          </div>
        </section>
      </div>
    </Container>
  );
}
