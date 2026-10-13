import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" className="wordmark">
              shrey<span>.</span>
            </Link>
            <p className="muted">Thoughtful software. Practical solutions.</p>
          </div>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Johannesburg, South Africa</p>
          <a href="#main-content">
            Back to top
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
