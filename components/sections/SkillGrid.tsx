import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skills } from "@/lib/data";
import SkillBadge from "@/components/shared/SkillBadge";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
export default function SkillGrid() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            number="02"
            eyebrow="THE TOOLKIT"
            title="The right tools. A solid foundation."
            description="Technologies I use to bring the frontend, backend and everything between them together."
          />
        </AnimatedSection>
        <div className="skills-list">
          {skills.map((category, index) => (
            <div className="skill-row" key={category.label}>
              <div className="skill-category">
                <span className="mono muted">0{index + 1}</span>
                <div>
                  <h3>{category.label}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <SkillBadge skill={skill} key={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link className="text-link skills-proof" href="/projects">
          See these skills in practice
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
