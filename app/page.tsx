import { Container } from "@/components/Container";
import { CardLink } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-16">
        <ScrollReveal direction="fade" delay={0}>
          <section className="mb-16">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h1 className="mb-6 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Tennis Ratings and statistics to the 10,000th of a Point
              </h1>
              <p className="mb-8 text-lg font-bold italic text-white sm:text-xl">
                "Your game, measured to perfection."
              </p>
              <p className="text-base font-semibold leading-relaxed text-white sm:text-lg">
                Welcome to Tennis Record. We help you understand your tennis game better by tracking 
                your matches and calculating your skill level. Whether you're looking up a player, 
                checking team standings, or exploring ratings, we make it easy to find the information 
                you need.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <section>
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Player Tools
            </h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                description="Find leagues and view teams."
              />
              <CardLink
                href="/adult/rankings"
                title="Player Rankings"
                description="Ranking by record and more."
              />
              <CardLink
                href="/adult/section-breakdown"
                title="Section Breakdown"
                description="Player breakdown by section."
              />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <section>
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              Junior Tools
            </h2>
            <div className="mx-auto max-w-md">
              <CardLink
                href="/tournaments/junior-registrations"
                title="Tournament Registrations"
                description="View juniors registered for junior tournaments."
              />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300}>
          <section>
            <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              College Recruiting
            </h2>
            <div className="mx-auto max-w-md">
              <CardLink
                href="/recruiting/college-search"
                title="College Search"
                description="Search for nearby Division I schools."
              />
            </div>
          </section>
        </ScrollReveal>
      </div>
    </Container>
  );
}
