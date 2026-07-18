"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { photoMoments } from "@/data/moments";

gsap.registerPlugin(useGSAP);

export default function PhotoWall() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!trackRef.current || reduceMotion) return;

      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 42,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (previewIndex === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewIndex(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [previewIndex]);

  return (
    <section
      ref={containerRef}
      className="border-y border-[var(--line)] bg-[var(--ink)] py-16 text-white md:py-20"
      aria-labelledby="moments-heading"
    >
      <div className="mx-auto mb-10 flex w-full max-w-[88rem] flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Beyond the build
          </p>
          <h2
            id="moments-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.045em] md:text-5xl"
          >
            A few moments along the way.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/60">
          Life around Seattle, school, teams, and the people behind the work.
          Hover to pause or select an image to view it.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          onPointerEnter={() => tweenRef.current?.pause()}
          onPointerLeave={() => tweenRef.current?.play()}
        >
          {[0, 1].map((group) => (
            <div
              className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
              key={group}
              aria-hidden={group === 1}
            >
              {photoMoments.map((moment, index) => {
                const image = (
                  <>
                    <Image
                      src={moment.src}
                      alt={group === 0 ? moment.alt : ""}
                      fill
                      sizes="(max-width: 640px) 78vw, 368px"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                      {moment.caption}
                    </span>
                  </>
                );

                return group === 0 ? (
                  <button
                    type="button"
                    key={`${group}-${moment.id}`}
                    onClick={() => setPreviewIndex(index)}
                    className="group relative h-60 w-[78vw] max-w-[23rem] shrink-0 overflow-hidden rounded-2xl bg-white/10 text-left sm:h-72 sm:w-[23rem]"
                    aria-label={`Open photo: ${moment.caption}`}
                  >
                    {image}
                  </button>
                ) : (
                  <div
                    key={`${group}-${moment.id}`}
                    className="group relative h-60 w-[78vw] max-w-[23rem] shrink-0 overflow-hidden rounded-2xl bg-white/10 sm:h-72 sm:w-[23rem]"
                    aria-hidden="true"
                  >
                    {image}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photoMoments[previewIndex].caption}
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative h-[82vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photoMoments[previewIndex].src}
              alt={photoMoments[previewIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <button
              type="button"
              className="absolute right-0 top-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)]"
              onClick={() => setPreviewIndex(null)}
              autoFocus
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
