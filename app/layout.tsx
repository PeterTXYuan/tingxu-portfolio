import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tingxu Yuan | Portfolio",
  description: "Personal website of Tingxu Yuan — UW ACMS junior, aspiring Software Engineer.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) 
{
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b border-gray-200">
          <nav className="max-w-4xl mx-auto flex gap-6 px-6 py-4 text-sm">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
