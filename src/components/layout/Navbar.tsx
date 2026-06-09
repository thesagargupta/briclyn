"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-surface-main border-b border-border-subtle shadow-sm w-full sticky top-0 z-50">
      {/* FIX 1: Replaced `py-3` with a fixed height `h-[72px]` to lock navbar size */}
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 lg:px-8 h-[72px]">

        <div className="relative h-20 w-30 sm:h-24 sm:w-24 md:h-32 md:w-32 shrink-0 overflow-hidden flex items-center justify-center">
          {/* Image: Scaled up to remove whitespace */}
          <Link href="/" aria-label="BrickLyn home">
          <img
            src="/logo.png"
            alt="Bricklyn Logo"
            className="w-full h-full object-contain scale-[1.6]"
            loading="eager"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-lg font-label-md text-label-md transition-colors ${isActive
                  ? "text-primary-container font-semibold"
                  : "text-on-surface-variant hover:text-primary-container hover:bg-surface-alt"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D95B0D]" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-[#D95B0D] hover:bg-[#c4520b] text-white px-5 py-2 rounded-lg font-label-md text-label-md transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="bg-[#D95B0D] hover:bg-[#c4520b] text-white px-4 py-2 rounded-lg font-label-md text-[13px] leading-5 transition-colors shadow-sm"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}