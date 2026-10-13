import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="container not-found">
      <p className="eyebrow">404 / A WRONG TURN</p>
      <h1>
        This page went missing<span className="accent">.</span>
      </h1>
      <p className="muted">
        The work is still here. Let&apos;s get you back to it.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
        <Link className="button button-secondary" href="/projects">
          Explore projects
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
