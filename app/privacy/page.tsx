import { Container } from "@/components/Container";
import { Card } from "@/components/ui/Card";

export default function PrivacyPage() {
  return (
    <Container narrow>
      <h1 className="mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-sm text-[var(--text)]">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Introduction
          </h2>
          <p className="text-[var(--text-muted)]">
            This is a UI-only clone of TennisRecord.com. No real data is
            collected, stored, or shared. This privacy page is provided for
            structural consistency with the reference site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Information We Collect
          </h2>
          <p className="mb-4 text-[var(--text-muted)]">
            In this demo application, we do not collect personal information.
            All data shown is mocked locally.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>No account creation or login</li>
            <li>No cookies for tracking</li>
            <li>No analytics or third-party scripts</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            How We Use Information
          </h2>
          <p className="text-[var(--text-muted)]">
            Because no personal data is collected, there is no use or sharing of
            such data. This site is for demonstration purposes only.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Data Security
          </h2>
          <p className="text-[var(--text-muted)]">
            No user data is transmitted or stored. All content is static or
            generated from local mock data.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
            Contact
          </h2>
          <p className="text-[var(--text-muted)]">
            This is a coursework/demo project. For questions about the real
            TennisRecord.com service, please visit their official website.
          </p>
        </section>

        <Card className="mt-8 border-accent/30 bg-accent-light p-4">
          <p className="text-sm font-medium text-accent">
            Disclaimer: This site is not affiliated with TennisRecord.com or
            the USTA. Ratings and data are mocked for UI demonstration only.
          </p>
        </Card>
      </div>
    </Container>
  );
}
