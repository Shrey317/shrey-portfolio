import { ExternalLink, Mail } from "lucide-react";
import { resume, siteConfig } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import ResumeLink from "@/components/shared/ResumeLink";
export const metadata = pageMetadata(
  "Resume",
  "Shrey Patel’s developer CV: experience, education and technical skills. Get in touch to request a copy.",
  "/resume",
);
export default function ResumePage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-main container">
      <div className="page-heading">
        <p className="eyebrow">EXPERIENCE / RESUME</p>
        <h1>
          The story so far<span className="accent">.</span>
        </h1>
        <p>
          A closer look at my experience, education and the tools I work with.
        </p>
        {resume.updated && <p className="mono">CV updated {resume.updated}</p>}
      </div>
      {resume.available ? (
        <>
          <div className="resume-toolbar">
            <ResumeLink className="button button-primary" />
            <a
              className="button button-secondary"
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF in new tab
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="resume-preview">
            <p>
              Preview not loading?{" "}
              <a href={resume.path} download={resume.filename}>
                Download the CV directly.
              </a>
            </p>
            <object
              data={resume.path}
              type="application/pdf"
              title="Shrey Patel’s CV"
            >
              <p>
                Your browser does not support PDF previews.{" "}
                <a href={resume.path} download={resume.filename}>
                  Download the CV
                </a>
                .
              </p>
            </object>
          </div>
        </>
      ) : (
        <div className="resume-fallback">
          <h2>Let me send you my CV.</h2>
          <p>
            A verified PDF isn&apos;t available to download here yet. Email me
            to request the latest copy. You can also explore my experience and
            education on this website.
          </p>
          <a
            className="button button-primary"
            href={`mailto:${siteConfig.links.email}?subject=${encodeURIComponent("Request for Shrey Patel’s CV")}`}
          >
            <Mail size={17} aria-hidden="true" />
            Request CV by email
          </a>
        </div>
      )}
    </main>
  );
}
