import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import ResumeLink from "@/components/shared/ResumeLink";
import EducationSection from "./EducationSection";
export default function AboutContent() {
  return (
    <>
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">THE PERSON / ABOUT</p>
          <h1>
            Beyond the code<span className="accent">.</span>
          </h1>
          <p>
            Curious about how things work.
            <br />
            More interested in making them work better.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-story">
            <h2>Hi, I&apos;m Shrey.</h2>
            <p>
              I&apos;m a software development graduate based in Johannesburg,
              with a BSc Honours in Information Technology, specialising in
              Software Engineering.
            </p>
            <p>
              I enjoy building practical applications that combine thoughtful
              user experiences with reliable backend systems. My work spans
              responsive web interfaces, API integrations, database design and
              Excel-based systems for everyday business operations.
            </p>
            <p>
              I care about code that is easy to understand and interfaces that
              are easy to use. I like breaking a problem into manageable pieces,
              understanding the information behind it, and connecting those
              pieces into something useful.
            </p>
            <p>
              I&apos;m looking for a junior developer, graduate or internship
              opportunity where I can contribute, learn from experienced
              engineers and keep improving my craft.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                Explore my work
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <ResumeLink />
            </div>
          </div>
          <aside className="at-a-glance">
            <p className="eyebrow">AT A GLANCE</p>
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>{siteConfig.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>BSc Honours, Information Technology</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>
                  Full-stack web development
                  <br />
                  Practical business systems
                </dd>
              </div>
              <div>
                <dt>Looking for</dt>
                <dd>
                  Junior & graduate roles
                  <br />
                  Development internships
                </dd>
              </div>
            </dl>
            <Link href="/contact" className="text-link">
              Start a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
        <div className="about-principles">
          <div>
            <span className="mono accent">01 / UNDERSTAND</span>
            <h3>Start with the problem.</h3>
            <p>
              Understand the workflow and the people using it before choosing a
              solution.
            </p>
          </div>
          <div>
            <span className="mono accent">02 / BUILD</span>
            <h3>Make the pieces fit.</h3>
            <p>
              Give the interface, application logic and data the same care and
              attention.
            </p>
          </div>
          <div>
            <span className="mono accent">03 / IMPROVE</span>
            <h3>Keep asking why.</h3>
            <p>
              Test assumptions, welcome feedback and make the next version
              better.
            </p>
          </div>
        </div>
      </div>
      <EducationSection />
    </>
  );
}
