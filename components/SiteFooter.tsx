import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--bg-dark)]">
      <div className="container-wide py-6">
        <p className="text-center text-sm text-white/90">
          This site is not affiliated, endorsed, or associated by or with the
          USTA in any manner nor are the ratings affiliated with the NTRP rating
          system.
        </p>
        <p className="mt-2 text-center text-xs text-white/70">
          Copyright © 2016–2026 TennisRecord.com. All rights reserved.
        </p>
        <nav
          className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Footer links"
        >
          <Link
            href="/privacy"
            className="text-sm font-medium text-white hover:text-[var(--accent-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Privacy Policy
          </Link>
          <Link
            href="/sitemap"
            className="text-sm font-medium text-white hover:text-[var(--accent-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  );
}
