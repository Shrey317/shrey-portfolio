import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";
import { hasSocialLink } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-violet-400 font-bold text-xl font-mono tracking-tight hover:text-violet-300 transition-colors"
            >
              SP
            </Link>
            <p className="mt-3 text-sm text-[#888] leading-relaxed max-w-xs">
              Full-Stack Web Developer.
              Based in Johannesburg, Gauteng.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-4">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-4">
              Get In Touch
            </p>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-sm text-[#888] hover:text-violet-400 transition-colors break-all"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-sm text-[#888] hover:text-violet-400 transition-colors"
                >
                  {siteConfig.links.phone}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {hasSocialLink(siteConfig.links.github) && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#888] hover:text-violet-400 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {hasSocialLink(siteConfig.links.linkedin) && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#888] hover:text-violet-400 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.links.email}`}
                aria-label="Send email"
                className="text-[#888] hover:text-violet-400 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
