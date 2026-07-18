"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoWall from "@/components/PhotoWall";
import {
  experiences,
  profile,
  proofPoints,
} from "@/data/portfolio";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePage() {
  const pageRef = useRef<HTMLElement>(null);
  const currentRole = experiences[0];

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set(
              "[data-home-reveal], [data-home-stat], [data-proof-label], [data-proof-item]",
              {
                autoAlpha: 1,
                clearProps: "transform",
              },
            );
            return;
          }

          const intro = gsap.timeline({
            defaults: { duration: 0.8, ease: "power3.out" },
          });

          intro
            .from("[data-hero-eyebrow]", { autoAlpha: 0, y: 18 })
            .from(
              "[data-hero-line]",
              { autoAlpha: 0, yPercent: 105, stagger: 0.1 },
              "<0.08",
            )
            .from(
              "[data-hero-copy]",
              { autoAlpha: 0, y: 24, duration: 0.65 },
              "<0.26",
            )
            .from(
              "[data-hero-action]",
              { autoAlpha: 0, y: 16, stagger: 0.08, duration: 0.55 },
              "<0.18",
            )
            .from(
              "[data-hero-portrait]",
              {
                autoAlpha: 0,
                x: desktop ? 42 : 0,
                y: desktop ? 0 : 28,
                duration: 0.9,
              },
              0.2,
            );

          if (desktop) {
            gsap.to("[data-hero-portrait]", {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-hero]",
                start: "top top+=72",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }

          const proofTimeline = gsap.timeline({
            defaults: { duration: 0.7, ease: "power3.out" },
            scrollTrigger: {
              trigger: "[data-proof]",
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });

          proofTimeline
            .from("[data-proof-label]", { autoAlpha: 0, y: 20 })
            .from(
              "[data-proof-item]",
              {
                autoAlpha: 0,
                y: 28,
                stagger: 0.08,
                duration: 0.6,
              },
              "<0.16",
            );

          const profileTimeline = gsap.timeline({
            defaults: { duration: 0.75, ease: "power3.out" },
            scrollTrigger: {
              trigger: "[data-profile]",
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });

          profileTimeline
            .from("[data-home-reveal]", {
              autoAlpha: 0,
              y: 34,
              stagger: 0.09,
            })
            .from(
              "[data-home-stat]",
              { autoAlpha: 0, y: 24, stagger: 0.1, duration: 0.55 },
              "<0.25",
            );

        },
      );

      return () => media.revert();
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef}>
      <section
        data-hero
        className="relative overflow-hidden border-b border-[var(--line)]"
      >
        <div className="editorial-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[88rem] gap-8 px-5 py-8 sm:gap-12 sm:px-8 sm:py-14 md:px-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.72fr)] lg:items-center lg:py-16">
          <div>
            <p data-hero-eyebrow className="eyebrow">
              Seattle · Software engineering
            </p>
            <h1 className="mt-6 max-w-5xl text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--ink)] sm:mt-7">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block">
                  {profile.philosophy.lead}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block text-[var(--purple)]">
                  {profile.philosophy.clarity}
                </span>
              </span>
            </h1>
            <blockquote
              data-hero-copy
              className="mt-6 max-w-3xl border-l-2 border-[var(--gold)] pl-5 text-xl font-medium leading-8 tracking-[-0.02em] text-[var(--muted)] sm:mt-8 md:text-2xl md:leading-9"
            >
              {profile.philosophy.continuation}
            </blockquote>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              {profile.headline} Currently contributing to AI-driven mobile
              test automation at Xiaomi while studying ACMS at the University
              of Washington.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                data-hero-action
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--purple)]"
              >
                Explore projects <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/resume"
                data-hero-action
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--purple)] hover:text-[var(--purple)]"
              >
                View resume
              </Link>
            </div>
          </div>

          <figure
            data-hero-portrait
            className="relative order-first min-h-64 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_1.5rem_4rem_rgb(23_21_27_/_0.1)] will-change-transform sm:min-h-[34rem] lg:order-none lg:min-h-[calc(100svh-12.5rem)] lg:max-h-[46rem]"
          >
            <Image
              src={profile.portrait}
              alt="Portrait of Tingxu Yuan"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[center_27%] sm:object-top"
              quality={90}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
                  Now at {currentRole.company}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                  {currentRole.role}
                </p>
              </div>
              <span className="mb-1 hidden size-2 shrink-0 rounded-full bg-[#55d6a8] shadow-[0_0_0_5px_rgb(85_214_168_/_0.18)] sm:block" />
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        data-proof
        className="border-b border-white/10 bg-[var(--ink)] text-white"
        aria-labelledby="proof-heading"
      >
        <div className="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 md:px-12 md:py-16">
          <div
            data-proof-label
            className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-white/50">
                Selected proof
              </p>
              <h2
                id="proof-heading"
                className="mt-3 text-2xl font-semibold tracking-[-0.035em]"
              >
                Experience that compounds.
              </h2>
            </div>
            <p className="text-sm text-white/45">Signals, not slogans.</p>
          </div>

          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {proofPoints.map((proof, index) => (
              <li
                data-proof-item
                key={proof.name}
                className="group min-h-48 bg-[var(--ink)] p-5 transition-colors hover:bg-[color-mix(in_srgb,var(--purple)_38%,var(--ink))] sm:min-h-52 sm:p-6 md:p-7"
              >
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-xs font-bold tracking-[0.16em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/55">
                    {proof.meta}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.03em] text-white sm:mt-12 sm:text-xl md:text-2xl">
                  {proof.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {proof.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        data-profile
        className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 md:px-12 md:py-28"
      >
        <div className="grid gap-10 border-b border-[var(--line)] pb-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div data-home-reveal>
            <p className="eyebrow">Profile</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Engineering with range and rigor.
            </h2>
          </div>
          <div>
            <p
              data-home-reveal
              className="max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10"
            >
              {profile.summary}
            </p>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
              {[
                ["3.77", "UW GPA"],
                ["35%", "faster initial load"],
                ["95%", "automated test coverage"],
              ].map(([value, label]) => (
                <div
                  data-home-stat
                  className="bg-[var(--surface)] p-6"
                  key={label}
                >
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
