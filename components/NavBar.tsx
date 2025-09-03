"use client";

import Link from "next/link";
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
    <nav className="max-w-4xl mx-auto flex gap-6 px-6 py-4 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            relative
            ${pathname === item.href 
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
    </nav>
  );
}
