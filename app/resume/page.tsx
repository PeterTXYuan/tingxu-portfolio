import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { education, experiences, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download the latest resume for Tingxu Yuan.",
};

export default function ResumePage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Resume"
        title="The concise version."
        description="Education, technical range, and experience building full-stack products, ML systems, and test infrastructure. Updated July 2026."
      />

      <section className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="surface-card p-7 sm:p-9 md:p-10">
          <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--purple)]">
                Latest role
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                {experiences[0].company}
              </h2>
              <p className="mt-2 text-[var(--muted)]">
                {experiences[0].role}
              </p>
            </div>
            <span className="w-fit rounded-full bg-[#dff4eb] px-3 py-1.5 text-xs font-bold text-[var(--green)]">
              {experiences[0].period}
            </span>
          </div>

          <div className="grid gap-8 py-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                Education
              </p>
              <p className="mt-3 font-semibold">{education.school}</p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {education.degree}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                Contact
              </p>
              <a className="text-link mt-3 block font-semibold" href={profile.emailHref}>
                {profile.email}
              </a>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {profile.location}
              </p>
            </div>
          </div>

          <a
            href="/Tingxu_Yuan_CV_English.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--purple)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--ink)] sm:w-auto"
          >
            Download latest PDF <span aria-hidden="true">↓</span>
          </a>
        </article>

        <aside className="rounded-3xl bg-[var(--purple)] p-7 text-white sm:p-9 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Snapshot
          </p>
          <dl className="mt-10 grid gap-8">
            <div className="border-b border-white/15 pb-7">
              <dt className="text-sm text-white/55">GPA</dt>
              <dd className="mt-2 text-4xl font-semibold tracking-[-0.05em]">
                3.77 / 4.0
              </dd>
            </div>
            <div className="border-b border-white/15 pb-7">
              <dt className="text-sm text-white/55">Experience</dt>
              <dd className="mt-2 text-xl font-semibold">
                Full-stack · ML · Test infrastructure
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/55">Recognition</dt>
              <dd className="mt-2 text-xl font-semibold">
                Dean&apos;s List · IEEE publication
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
