import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import { experiences, leadership } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Software engineering, full-stack, machine learning, and leadership experience from Tingxu Yuan.",
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Experience"
        title="A track record across systems and teams."
        description="From AI-driven mobile test infrastructure to Web3 products, enterprise software, and applied machine learning."
      />

      <ol className="relative mt-14 grid gap-6 md:mt-20">
        {experiences.map((experience, index) => (
          <li
            key={`${experience.company}-${experience.period}`}
            className="grid gap-5 border-b border-[var(--line)] pb-10 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-10 md:pb-14"
          >
            <div className="flex items-start gap-4 md:block">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--purple)] text-xs font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)] md:mt-4">
                {experience.period}
              </p>
            </div>

            <article className="surface-card p-6 sm:p-8 md:p-10">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--ink)] md:text-3xl">
                    {experience.company}
                  </h2>
                  <p className="mt-2 font-semibold text-[var(--purple)]">
                    {experience.role}
                  </p>
                </div>
                {index === 0 && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#dff4eb] px-3 py-1.5 text-xs font-bold text-[var(--green)]">
                    <span className="size-1.5 rounded-full bg-current" /> Current
                  </span>
                )}
              </div>

              <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
                {experience.summary}
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--ink)]">
                {experience.achievements.map((achievement) => (
                  <li className="flex max-w-4xl gap-3" key={achievement}>
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                {experience.links && (
                  <div className="flex shrink-0 gap-4 text-sm font-semibold">
                    {experience.links.map((link) => (
                      <a
                        className="text-link"
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <section className="mt-16 grid overflow-hidden rounded-3xl border border-[var(--line)] text-white shadow-[0_1.5rem_4rem_rgb(23_21_27_/_0.1)] md:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden p-7 sm:min-h-96 sm:p-10 md:min-h-[28rem] md:p-12">
          <Image
            src={leadership.image}
            alt={leadership.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/10 to-black/30" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
              Leadership
            </p>
            <p className="mt-4 text-sm text-white/75">{leadership.period}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[var(--ink)] p-7 sm:p-10 md:min-h-[28rem] md:p-12">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            {leadership.role}, {leadership.organization}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            {leadership.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold">
            {leadership.links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
