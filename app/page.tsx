import PhotoWall from "@/components/PhotoWall";

export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* Hero / Intro + Photo wall on full-screen gradient */}
      <section className="relative isolate left-1/2 right-1/2 -mx-[50vw] flex min-h-screen w-screen max-w-none flex-col justify-center gap-16 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-100 px-6 py-14 md:px-12 md:py-20">
        {/* Subtle background glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-indigo-300/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center">
          {/* Text side */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-sky-800 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to SWE / ML internships 2025
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                <span className="bg-gradient-to-r from-sky-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
                  Tingxu Yuan
                </span>
              </h1>
              <p className="text-lg font-medium text-gray-700 md:text-xl">
                ACMS junior @ University of Washington · Software Engineering ·
                Machine Learning · Web3
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              Adaptable Math and Computer Science undergraduate with hands-on
              experience in full‑stack development, Web3 infrastructure, and
              applied machine learning. I enjoy turning ideas into reliable
              systems and data‑driven products that people actually use.
            </p>

            {/* Quick stats / highlights */}
            <div className="grid gap-4 text-base text-gray-800 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] backdrop-blur">
                <p className="text-[12px] uppercase tracking-wide text-gray-500">
                  Focus
                </p>
                <p className="mt-2 text-base font-semibold">
                  Distributed systems, ML, data‑heavy apps
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] backdrop-blur">
                <p className="text-[12px] uppercase tracking-wide text-gray-500">
                  Experience
                </p>
                <p className="mt-2 text-base font-semibold">
                  Research, full‑stack, Web3 infra
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] backdrop-blur">
                <p className="text-[12px] uppercase tracking-wide text-gray-500">
                  Currently
                </p>
                <p className="mt-2 text-base font-semibold">
                  Building side projects & exploring ML tooling
                </p>
              </div>
            </div>

            {/* Primary actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-sky-700 hover:to-indigo-700 md:text-base"
              >
                View projects
                <span className="ml-1.5 text-sm">↗</span>
              </a>
              <a
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-400 hover:bg-white md:text-base"
              >
                View resume
              </a>
            </div>
          </div>

          {/* Side snapshot */}
          <aside className="relative h-full">
            <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white/80 p-6 shadow-[0_25px_70px_-35px_rgba(59,130,246,0.35)] backdrop-blur-md md:p-7">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Snapshot
                </p>
                <p className="text-base text-gray-800">
                  I thrive on the challenge of bringing structure to complexity.
                  I approach engineering with a focus on first principles, using
                  mathematical rigor to decompose ambiguous problems into
                  elegant, scalable architectures. My passion lies in bridging
                  the gap between theoretical research and practical
                  application—taking abstract concepts and forging them into
                  robust, real-world systems. I am a builder at heart, driven
                  not just to write code, but to design solutions that are
                  efficient, enduring, and fundamentally sound.
                </p>
              </div>

              <div className="mt-8 grid gap-4 text-sm text-gray-700">
                <div className="flex items-center justify-between rounded-2xl bg-sky-50/90 px-4 py-3">
                  <span className="text-base font-semibold text-sky-900">
                    Tech
                  </span>
                  <span className="text-xs md:text-sm">
                    TypeScript · React/Next.js · Python · SQL
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-indigo-50/90 px-4 py-3">
                  <span className="text-base font-semibold text-indigo-900">
                    Strengths
                  </span>
                  <span className="text-xs md:text-sm">
                    systems thinking · data intuition · fast iteration
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Photo wall section inside gradient (slightly wider than text area) */}
        <div className="relative mx-auto mt-4 w-full max-w-7xl">
          <PhotoWall />
        </div>
      </section>
    </main>
  );
}
