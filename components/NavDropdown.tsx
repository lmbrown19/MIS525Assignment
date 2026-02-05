"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type NavDropdownProps = {
  label: string;
  links: { href: string; label: string }[];
  onLinkClick?: () => void;
};

export function NavDropdown({ label, links, onLinkClick }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasActiveLink = links.some(
    (link) => pathname === link.href || pathname.startsWith(link.href + "/")
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center gap-1 px-4 py-3 text-sm font-medium text-white sm:rounded-lg sm:px-3 sm:py-2 transition-colors hover:text-[var(--accent-light)] ${
          hasActiveLink ? "bg-accent text-white shadow-md" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul
          className="absolute left-0 top-full mt-1 min-w-[200px] rounded-lg border border-white/20 bg-[var(--bg-dark)] py-2 shadow-lg sm:left-auto sm:right-0"
          role="menu"
        >
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href} role="menuitem">
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-sm text-white transition-colors hover:bg-white/20 hover:text-[var(--accent-light)] ${
                    isActive ? "bg-accent/20 text-[var(--accent-light)]" : ""
                  }`}
                  onClick={() => {
                    setOpen(false);
                    onLinkClick?.();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
