import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering and machine learning work by Tingxu Yuan.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Selected projects"
        title="Projects measured by what changed."
        description="A focused collection of product engineering, machine learning research, and enterprise systems work. Each project foregrounds the problem, contribution, and measurable result."
      />

      <div className="mt-12 grid gap-6 md:mt-16">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="surface-card grid overflow-hidden lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div
              className={`relative min-h-64 overflow-hidden border-b border-[var(--line)] lg:min-h-[30rem] lg:border-b-0 lg:border-r ${
                project.image
                  ? "bg-[var(--paper-deep)]"
                  : "grid place-items-center bg-[var(--purple)]"
              }`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} interface`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <div className="px-8 text-center text-white">
                  <span className="block text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white/20 md:text-[10rem]">
                    15%
                  </span>
                  <span className="mt-4 block text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                    reduction in overfitting
                  </span>
                </div>
              )}
              <span className="absolute left-5 top-5 rounded-full bg-[var(--ink)] px-3 py-1 text-xs font-bold text-white">
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow">{project.eyebrow}</p>
                <p className="text-sm font-semibold text-[var(--muted)]">
                  {project.period}
                </p>
              </div>
              <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[var(--ink)] md:text-5xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {project.description}
              </p>

              <ul className="mt-8 grid gap-3 border-y border-[var(--line)] py-6 text-sm leading-6 text-[var(--ink)] sm:grid-cols-3">
                {project.impact.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--purple)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-7 pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 flex-wrap gap-4 text-sm font-semibold">
                  {project.links.map((link) => (
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
