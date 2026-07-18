import Link from "next/link";
import PhotoWall from "@/components/PhotoWall";
import { education, experiences, profile } from "@/data/portfolio";

export default function HomePage() {
  const currentRole = experiences[0];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="editorial-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[88rem] gap-12 px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.65fr)] lg:items-center">
          <div>
            <p className="eyebrow">Seattle · Software engineering</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--ink)]">
              Building reliable systems from
              <span className="text-[var(--purple)]"> idea to impact.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl md:leading-9">
              {profile.headline} Currently contributing to AI-driven mobile
              test automation at Xiaomi while studying ACMS at the University
              of Washington.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--purple)]"
              >
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--purple)] hover:text-[var(--purple)]"
              >
                View resume
              </Link>
            </div>
          </div>

          <aside className="surface-card overflow-hidden" aria-label="Current profile">
            <div className="border-b border-[var(--line)] bg-[var(--purple)] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                Now
              </p>
              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                {currentRole.company}
              </h2>
              <p className="mt-2 text-base text-white/75">{currentRole.role}</p>
              <p className="mt-6 text-sm leading-6 text-white/75">
                {currentRole.summary}
              </p>
            </div>
            <div className="grid gap-7 p-6 md:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Education
                </p>
                <p className="mt-3 font-semibold text-[var(--ink)]">
                  {education.school}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {education.degree}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentRole.technologies.slice(0, 6).map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 md:px-12 md:py-28">
        <div className="grid gap-10 border-b border-[var(--line)] pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <p className="eyebrow">Profile</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Engineering with range and rigor.
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
              {profile.summary}
            </p>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
              {[
                ["3.77", "UW GPA"],
                ["35%", "faster initial load"],
                ["95%", "automated test coverage"],
              ].map(([value, label]) => (
                <div className="bg-[var(--surface)] p-6" key={label}>
                  <dt className="text-sm text-[var(--muted)]">{label}</dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--purple)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <PhotoWall />
    </main>
  );
}
