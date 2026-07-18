"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-18 w-full max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-8 md:px-12"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-semibold text-[var(--ink)]"
          aria-label="Tingxu Yuan, home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[var(--ink)] text-xs font-bold tracking-wider text-white transition-transform group-hover:-rotate-6">
            TY
          </span>
          <span className="hidden text-sm tracking-[-0.01em] sm:block">
            Tingxu Yuan
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--ink)] text-white"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.emailHref}
            className="hidden rounded-full border border-[var(--line-strong)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--purple)] hover:text-[var(--purple)] sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[var(--line-strong)] bg-white text-[var(--ink)] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path
                  d="M5 8h14M5 16h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-5 sm:px-8 lg:hidden"
        >
          <div className="mx-auto grid max-w-[88rem] gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold ${
                    active
                      ? "bg-[var(--purple-soft)] text-[var(--purple)]"
                      : "text-[var(--ink)] hover:bg-white"
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
