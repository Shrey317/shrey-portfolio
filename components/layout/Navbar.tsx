"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const close = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  const active = (href: string) =>
    href.includes("#")
      ? pathname === "/" && hash === href.slice(1)
      : pathname === href;
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Shrey Patel — home">
          shrey<span>.</span>
        </Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() =>
                setHash(link.href.includes("#") ? link.href.slice(1) : "")
              }
              aria-current={
                active(link.href)
                  ? link.href.includes("#")
                    ? "location"
                    : "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/resume" className="nav-cv">
          Resume / CV
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="menu-trigger icon-button" aria-label="Open menu">
              <Menu size={23} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content
              className="mobile-menu"
              aria-describedby="menu-description"
            >
              <div className="menu-top">
                <Dialog.Title className="wordmark">
                  Explore<span>.</span>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="icon-button" aria-label="Close menu">
                    <X size={23} />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description id="menu-description" className="muted">
                Shrey Patel / Software Developer
              </Dialog.Description>
              <nav aria-label="Mobile navigation">
                {[...navLinks, { href: "/resume", label: "Resume / CV" }].map(
                  (link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active(link.href) ? "page" : undefined}
                      onClick={() => {
                        setOpen(false);
                        setHash(
                          link.href.includes("#") ? link.href.slice(1) : "",
                        );
                      }}
                    >
                      <span className="mono">0{index + 1}</span>
                      {link.label}
                      <ArrowUpRight size={20} />
                    </Link>
                  ),
                )}
              </nav>
              <p className="availability">
                <span />
                Open to opportunities
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
