import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { education, publication, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Skills & Education",
  description:
    "Technical skills, education, and publication details for Tingxu Yuan.",
};

export default function SkillsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Technical profile"
        title="Range where it matters. Depth where it counts."
        description="A practical toolkit developed through production work, research, enterprise systems, and a mathematically rigorous ACMS curriculum."
      />

      <section className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:mt-20 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article className="bg-[var(--surface)] p-7 sm:p-9 md:p-10" key={group.title}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                {group.title}
              </h2>
              <span className="text-xs font-bold text-[var(--purple)]">
                0{index + 1}
              </span>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">
              {group.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li className="tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card p-7 sm:p-9 md:p-10">
          <p className="eyebrow">Education</p>
          <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            {education.school}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {education.degree}
          </p>
          <div className="mt-8 grid gap-5 border-y border-[var(--line)] py-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                Period
              </p>
              <p className="mt-2 font-semibold">{education.period}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                GPA
              </p>
              <p className="mt-2 font-semibold">{education.gpa}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                Recognition
              </p>
              <p className="mt-2 font-semibold">{education.honors}</p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span className="tag" key={course}>
                {course}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-3xl bg-[var(--purple)] p-7 text-white sm:p-9 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Publication
          </p>
          <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em]">
            Recent Advances of GANs
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            {publication.citation}
          </p>
          <a
            href={publication.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--purple)]"
          >
            Read the paper ↗
          </a>
        </article>
      </section>
    </main>
  );
}
