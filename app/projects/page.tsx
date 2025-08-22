'use client';

import Gan from '@/content/projects/gan-research.mdx';
import Unity from '@/content/projects/unity-game.mdx';

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <section className="space-y-12">
        <article>
          <Gan />
        </article>

        <hr className="my-6 opacity-20" />

        <article>
          <Unity />
        </article>
      </section>
    </main>
  );
}
