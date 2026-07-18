import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:px-12">
        <div>
          <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
            Tingxu Yuan
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
            Software engineering, applied ML, and reliable product systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <a className="text-link" href={profile.emailHref}>
            Email
          </a>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link className="text-link" href="/resume">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
