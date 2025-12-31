import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Tingxu Yuan | Portfolio",
  description:
    "Personal website of Tingxu Yuan — UW ACMS junior, aspiring Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b border-gray-200">
          <NavBar />
        </header>

        <main className="px-0 py-0">{children}</main>
      </body>
    </html>
  );
}
