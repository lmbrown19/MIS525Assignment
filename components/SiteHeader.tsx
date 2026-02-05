"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavDropdown } from "./NavDropdown";

const playerToolsLinks = [
  { href: "/adult/ratings", label: "Player Ratings" },
  { href: "/adult/player-search", label: "Player Search" },
  { href: "/adult/team-search", label: "Team Search" },
  { href: "/adult/league", label: "Find League" },
  { href: "/adult/rankings", label: "Player Rankings" },
  { href: "/adult/section-breakdown", label: "Section Breakdown" },
];

const juniorToolsLinks = [
  { href: "/tournaments/junior-registrations", label: "Tournament Registrations" },
];

const collegeRecruitingLinks = [
  { href: "/recruiting/college-search", label: "College Search" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-dark)] shadow-lg relative z-20">
      <div className="container-wide">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-bold tracking-wider text-white hover:text-[var(--accent-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:text-xl"
          >
            <img
              src="/pngtree-vector-tennis-icon-png-image_4046718.jpg"
              alt="Tennis Record Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            TENNIS RECORD
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-transparent text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
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
            className={`absolute left-0 right-0 top-[3.5rem] z-20 border-b border-[var(--border)] bg-[var(--bg-dark)] sm:static sm:flex sm:border-0 sm:bg-transparent ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {/* Mobile: Show all links expanded */}
            <ul className="flex flex-col gap-0 sm:hidden">
              <li className="px-4 py-2 text-xs font-semibold uppercase text-white/70">
                Player Tools
              </li>
              {playerToolsLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium text-white transition-colors hover:text-[var(--accent-light)] ${
                        isActive ? "bg-accent/20 text-[var(--accent-light)]" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-4 py-2 text-xs font-semibold uppercase text-white/70">
                Junior Tools
              </li>
              {juniorToolsLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium text-white transition-colors hover:text-[var(--accent-light)] ${
                        isActive ? "bg-accent/20 text-[var(--accent-light)]" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-4 py-2 text-xs font-semibold uppercase text-white/70">
                College Recruiting
              </li>
              {collegeRecruitingLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium text-white transition-colors hover:text-[var(--accent-light)] ${
                        isActive ? "bg-accent/20 text-[var(--accent-light)]" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop: Show dropdowns */}
            <ul className="hidden sm:flex sm:flex-row sm:gap-1">
              <li>
                <NavDropdown label="Player Tools" links={playerToolsLinks} />
              </li>
              <li>
                <NavDropdown label="Junior Tools" links={juniorToolsLinks} />
              </li>
              <li>
                <NavDropdown
                  label="College Recruiting"
                  links={collegeRecruitingLinks}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
