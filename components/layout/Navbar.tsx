"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch for theme icon
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection for backdrop blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false; // hash links are never "active" in the path sense
    return pathname === href;
  };

  return (
    <>
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-black/60 border-b border-white/8"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo / monogram */}
          <Link
            href="/"
            className="text-violet-400 font-bold text-xl font-mono tracking-tight hover:text-violet-300 transition-colors focus-visible:outline-violet-400"
            aria-label={`${siteConfig.name} — home`}
          >
            SP
          </Link>

          {/* ── Desktop links ─────────────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-violet-400",
                    isActive(link.href)
                      ? "text-violet-400"
                      : "text-[#888]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Controls ──────────────────────────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
                className="p-2 rounded-lg text-[#888] hover:text-violet-400 hover:bg-white/5 transition-colors"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden p-2 rounded-lg text-[#888] hover:text-violet-400 hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile overlay ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile slide-in panel ─────────────────────────────────────────── */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#111] border-l border-white/8 md:hidden",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/8">
          <span className="text-violet-400 font-bold font-mono text-xl">SP</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg text-[#888] hover:text-violet-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Panel links */}
        <nav className="p-6" aria-label="Mobile navigation">
          <ul className="space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-[#888] hover:text-[#f5f5f5] hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
