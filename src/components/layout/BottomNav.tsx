"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const primaryNavItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/services", icon: "handyman", label: "Services" },
  { href: "/about", icon: "info", label: "About" },
  { href: "/contact", icon: "mail", label: "Contact" },
];

const moreNavItems = [
  { href: "/industries", icon: "factory", label: "Industries" },
  { href: "/projects", icon: "apartment", label: "Projects" },
  { href: "/careers", icon: "work", label: "Careers" },
  { href: "/blog", icon: "article", label: "Blog" },
  { href: "/faq", icon: "help", label: "FAQ" },
];

export function BottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  const isMoreActive = moreNavItems.some((item) => pathname === item.href || pathname.startsWith(item.href + "/"));

  // Close the more menu on route change
  useEffect(() => {
    setShowMore(false);
  }, [pathname]);

  return (
    <>
      {/* Backdrop overlay for More menu */}
      {showMore && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setShowMore(false)}
          aria-hidden="true"
        />
      )}

      {/* More menu sheet */}
      {showMore && (
        <div className="fixed bottom-[72px] left-3 right-3 bg-surface-main rounded-2xl border border-border-subtle shadow-[0_-8px_32px_-4px_rgba(11,53,83,0.12)] z-50 md:hidden p-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-3 px-1">
            More Pages
          </p>
          <div className="grid grid-cols-3 gap-2">
            {moreNavItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#D95B0D]/10 text-[#D95B0D]"
                      : "text-on-surface-variant hover:bg-surface-alt active:bg-surface-alt"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-semibold leading-tight">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-surface-main border-t border-border-subtle z-50 md:hidden"
        aria-label="Mobile navigation"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-center justify-around px-2 py-1.5">
          {primaryNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all min-w-[56px] ${
                  isActive ? "text-[#D95B0D]" : "text-on-surface-variant"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className="material-symbols-outlined text-[22px] leading-none"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] font-semibold leading-tight tracking-wide ${
                    isActive ? "text-[#D95B0D]" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* More Button */}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all min-w-[56px] ${
              isMoreActive || showMore ? "text-[#D95B0D]" : "text-on-surface-variant"
            }`}
            aria-expanded={showMore}
            aria-label="More navigation options"
          >
            <span
              className="material-symbols-outlined text-[22px] leading-none"
              aria-hidden="true"
            >
              {showMore ? "close" : "apps"}
            </span>
            <span
              className={`text-[10px] font-semibold leading-tight tracking-wide ${
                isMoreActive || showMore ? "text-[#D95B0D]" : ""
              }`}
            >
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
