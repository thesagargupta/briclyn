"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface-main dark:bg-inverse-surface border-b border-border-subtle dark:border-outline-variant shadow-sm w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img
              alt="BrickLyn Logo"
              className="h-10 object-contain"
              src="/logo.png"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/">Home</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/about">About Us</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/services">Services</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/industries">Industries</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/projects">Projects</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/careers">Careers</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/blog">Blog</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/contact" className="bg-[#D95B0D] hover:bg-[#c4520b] text-white px-6 py-2 rounded-lg font-label-md text-label-md transition-colors shadow-sm inline-block">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-main border-t border-border-subtle absolute w-full left-0 top-full shadow-lg">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/about">About Us</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/services">Services</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/industries">Industries</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/projects">Projects</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/careers">Careers</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-colors" href="/blog">Blog</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="bg-[#D95B0D] hover:bg-[#c4520b] text-white px-6 py-2 rounded-lg font-label-md text-label-md transition-colors shadow-sm inline-block text-center mt-4">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
