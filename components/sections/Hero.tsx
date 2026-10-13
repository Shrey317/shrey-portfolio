import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  MapPin,
  Braces,
  Database,
  Layers,
} from "lucide-react";
import { hero, siteConfig } from "@/lib/data";
import ResumeLink from "@/components/shared/ResumeLink";
import SocialLinks from "@/components/shared/SocialLinks";
export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="availability">
          <span />
          {hero.availabilityText}
        </p>
        <p className="hero-edition mono">PORTFOLIO / 2026</p>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-role">
            SOFTWARE DEVELOPER / FULL-STACK WEB DEVELOPMENT
          </p>
          <h1 id="hero-title">
            Shrey Patel<span className="accent">.</span>
          </h1>
          <h2>
            Ideas into interfaces.
            <br />
            <span className="muted">Problems into software.</span>
          </h2>
          <p className="hero-description">{hero.tagline}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/#projects">
              View My Projects
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <ResumeLink />
          </div>
          <Link href="/contact" className="text-link hero-connect">
            Let&apos;s connect
            <ArrowUpRightIcon />
          </Link>
        </div>
        <div className="architecture" aria-hidden="true">
          <div className="architecture-grid" />
          <div className="architecture-heading mono">
            <span>FROM INTERFACE TO DATA</span>
            <span>01 — 03</span>
          </div>
          <div className="architecture-layer layer-ui">
            <span className="layer-index">01</span>
            <Layers size={22} />
            <div>
              <strong>Interface</strong>
              <span>React / JavaScript</span>
            </div>
            <span className="layer-detail">&lt; / &gt;</span>
          </div>
          <div className="architecture-connector" />
          <div className="architecture-layer layer-api">
            <span className="layer-index">02</span>
            <Braces size={22} />
            <div>
              <strong>Logic</strong>
              <span>Node.js / REST APIs</span>
            </div>
            <span className="layer-detail">{"{ }"}</span>
          </div>
          <div className="architecture-connector" />
          <div className="architecture-layer layer-data">
            <span className="layer-index">03</span>
            <Database size={22} />
            <div>
              <strong>Data</strong>
              <span>SQL / MongoDB</span>
            </div>
            <span className="layer-detail">[ ]</span>
          </div>
          <div className="architecture-bottom mono">
            <span className="tiny-dot" />
            THE FULL PICTURE, ONE LAYER AT A TIME.
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          <MapPin size={15} aria-hidden="true" />
          {siteConfig.location}
        </p>
        <SocialLinks />
        <a className="explore-link" href="#projects">
          Explore my work
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
function ArrowUpRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
