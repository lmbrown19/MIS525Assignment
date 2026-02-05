import Link from "next/link";
import { Container } from "@/components/Container";

const siteTools = [
  { href: "/", label: "Home" },
  { href: "/adult/ratings", label: "Player Ratings" },
  { href: "/adult/player-search", label: "Player Search" },
  { href: "/adult/team-search", label: "Team Search" },
  { href: "/adult/league", label: "Find League" },
  { href: "/adult/rankings", label: "Player Rankings" },
  { href: "/adult/section-breakdown", label: "Section Breakdown" },
  { href: "/tournaments/junior-registrations", label: "Junior Tournament Registrations" },
  { href: "/recruiting/college-search", label: "College Search" },
];

const additionalResources = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/sitemap", label: "Sitemap" },
];

export default function SitemapPage() {
  return (
    <Container narrow>
      <h1 className="mb-8">Sitemap</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Site Tools
        </h2>
        <ul className="space-y-2">
          {siteTools.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">
          Additional Resources
        </h2>
        <ul className="space-y-2">
          {additionalResources.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
