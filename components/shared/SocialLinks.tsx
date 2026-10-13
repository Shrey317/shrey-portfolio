import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile (opens in new tab)"
      >
        <Github size={17} aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile (opens in new tab)"
      >
        <Linkedin size={17} aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
      <a href={`mailto:${siteConfig.links.email}`} aria-label="Email Shrey">
        <Mail size={17} aria-hidden="true" />
        <span>Email</span>
      </a>
    </div>
  );
}
