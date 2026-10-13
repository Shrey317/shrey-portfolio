import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import TechTag from "@/components/shared/TechTag";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section container">
      <AnimatedSection>
        <SectionHeader
          number="03"
          eyebrow="ALONG THE WAY"
          title="Learning by doing."
          description="Hands-on development and practical systems that support everyday work."
        />
      </AnimatedSection>
      <div className="timeline">
        {experience.map((exp) => (
          <article key={exp.company} className="timeline-item">
            <div className="timeline-meta">
              <p className="mono">
                {exp.startDate} — {exp.endDate}
              </p>
              <p>
                <MapPin size={14} aria-hidden="true" />
                {exp.location}
              </p>
              {exp.endDate === "Present" && (
                <span className="current-label">CURRENT</span>
              )}
            </div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <ul>
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tags">
                {exp.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
