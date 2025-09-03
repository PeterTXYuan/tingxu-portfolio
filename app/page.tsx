import PhotoWall from "@/components/PhotoWall";

export default function HomePage() {
  return (
    <main className="prose mx-auto p-6">
      <h1 className="text-4xl font-bold">Tingxu Yuan</h1>
      <p className="text-lg mt-2">
        ACMS Junior at University of Washington • Software Engineering • Machine Learning • Web3
      </p>
      <p className="mt-4">
        Adaptable Math and Computer Science undergraduate with experience in full-stack development, Web3, and ML.
        Passionate about building scalable systems and high-impact tech solutions.
      </p>

      <PhotoWall />

      <div className="mt-6 flex gap-4 flex-wrap">
        <a href="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">View Projects</a>
        <a href="/resume" className="px-4 py-2 border rounded-lg">Download Resume</a>
      </div>
    </main>
  );
}
