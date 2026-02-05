"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/adult/ratings", label: "Player Ratings" },
  { href: "/adult/player-search", label: "Player Search" },
  { href: "/adult/team-search", label: "Team Search" },
  { href: "/adult/league", label: "Find League" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] bg-white shadow-card">
      <div className="container-wide">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-wider text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:text-xl"
          >
            TENNIS RECORD
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white text-[var(--text)] hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav
            id="main-nav"
            className={`absolute left-0 right-0 top-[3.5rem] z-20 border-b border-[var(--border)] bg-white sm:static sm:flex sm:border-0 sm:bg-transparent ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-0 sm:flex-row sm:gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-sm font-medium sm:rounded-lg sm:px-3 sm:py-2 ${
                        isActive
                          ? "bg-accent-light text-accent"
                          : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <p className="border-t border-[var(--border)] py-2 text-center text-sm text-[var(--text-muted)] sm:py-2.5">
          Statistical Analysis and Estimated Tennis Ratings to the 10,000th of a
          Point
        </p>
      </div>
    </header>
  );
}
