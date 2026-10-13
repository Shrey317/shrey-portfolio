import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
export default function ContactSection() {
  return (
    <section className="section container" id="contact">
      <div className="contact-callout">
        <p className="availability">
          <span />
          OPEN TO WHAT&apos;S NEXT
        </p>
        <h2>
          Good software starts
          <br />
          with a conversation<span>.</span>
        </h2>
        <div className="callout-bottom">
          <p>
            Have a junior role, graduate opportunity or meaningful project in
            mind? Let&apos;s talk.
          </p>
          <Link href="/contact" className="button button-primary">
            Let&apos;s connect
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <a className="callout-email" href={`mailto:${siteConfig.links.email}`}>
          {siteConfig.links.email}
        </a>
      </div>
    </section>
  );
}
