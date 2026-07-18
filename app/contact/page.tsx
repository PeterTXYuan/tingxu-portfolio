import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tingxu Yuan for software engineering opportunities.",
};

const contactMethods = [
  {
    index: "01",
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
  },
  {
    index: "02",
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    index: "03",
    label: "LinkedIn",
    value: "Tingxu Yuan",
    href: profile.linkedin,
  },
  {
    index: "04",
    label: "GitHub",
    value: "PeterTXYuan",
    href: profile.github,
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageIntro
        eyebrow="Contact"
        title="Let’s build something useful."
        description="I’m based in Seattle and open to conversations about software engineering, applied ML, product systems, and research-driven work."
      />

      <section className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:mt-20 md:grid-cols-2">
        {contactMethods.map((method) => {
          const external = method.href.startsWith("http");
          return (
            <a
              key={method.label}
              href={method.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group min-w-0 bg-[var(--surface)] p-7 transition hover:bg-white sm:p-9 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--purple)]">
                  {method.index}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
              <h2 className="mt-12 text-sm font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                {method.label}
              </h2>
              <p className="mt-3 break-words text-xl font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">
                {method.value}
              </p>
            </a>
          );
        })}
      </section>

      <section className="mt-8 flex flex-col gap-5 rounded-3xl bg-[var(--ink)] p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
            {profile.location}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/65 md:text-right">
          The fastest way to reach me is email. I’m happy to discuss new
          opportunities, collaborations, and interesting technical problems.
        </p>
      </section>
    </main>
  );
}
