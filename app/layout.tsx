import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Tingxu Yuan | Software Engineer",
    template: "%s | Tingxu Yuan",
  },
  description:
    "Portfolio of Tingxu Yuan, a University of Washington ACMS student working across full-stack systems, applied machine learning, and software test infrastructure.",
  keywords: [
    "Tingxu Yuan",
    "software engineer",
    "University of Washington",
    "full-stack development",
    "machine learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-[var(--ink)] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
