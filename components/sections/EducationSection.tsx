import { ArrowUpRight, GraduationCap, Award } from "lucide-react";
import Link from "next/link";
import { education, certifications } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container education-grid">
        <div>
          <SectionHeader
            number="04"
            eyebrow="THE FOUNDATIONS"
            title="Always a student of the craft."
          />
          <Link className="text-link" href="/about">
            A little more about me
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="education-list">
          {education.map((edu) => (
            <article className="education-item" key={edu.degree}>
              <GraduationCap size={22} aria-hidden="true" />
              <div>
                <p className="mono muted">{edu.dateLabel}</p>
                <h3>{edu.degree}</h3>
                <p className="accent">{edu.institution}</p>
              </div>
            </article>
          ))}
          {certifications.map((cert) => (
            <article className="education-item" key={cert.title}>
              <Award size={22} aria-hidden="true" />
              <div>
                <p className="mono muted">CERTIFICATION</p>
                <h3>{cert.title}</h3>
                <p className="accent">{cert.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
