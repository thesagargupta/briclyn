"use client";

import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 z-40 w-11 h-11 rounded-full bg-[#D95B0D] hover:bg-[#c4520b] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 bottom-[5.5rem] md:bottom-7 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
        arrow_upward
      </span>
    </button>
  );
}
