"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-6 text-base md:text-lg">
      {/* Left: UW Label */}
      <div className="flex-shrink-0">
        <Image
          src="/images/uw_logo.png"
          alt="University of Washington"
          width={120}
          height={40}
          className="h-12 w-auto"
        />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-8 md:gap-12 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative
              ${
                pathname === item.href
                  ? "font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  : "font-medium text-gray-700 hover:text-black"
              }
            `}
          >
            {item.label}
            {pathname === item.href && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Right: Social Icons */}
      <div className="flex-shrink-0 flex items-center gap-4">
        <a
          href="https://github.com/PeterTXYuan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
          aria-label="GitHub"
        >
          <Image
            src="/images/github_icon.png"
            alt="GitHub"
            width={40}
            height={40}
            className="w-12 h-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tingxu-yuan-a2bab5333/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
          aria-label="LinkedIn"
        >
          <Image
            src="/images/linkedin_icon.png"
            alt="LinkedIn"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
      </div>
    </nav>
  );
}
