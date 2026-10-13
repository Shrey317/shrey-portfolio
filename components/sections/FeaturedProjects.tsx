import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
export default function FeaturedProjects() {
  return (
    <section id="projects" className="section container">
      <AnimatedSection>
        <div className="section-top">
          <SectionHeader
            number="01"
            eyebrow="SELECTED WORK"
            title="Built to solve something."
            description="A closer look at the interfaces, integrations and data behind my work."
          />
          <Link href="/projects" className="text-link">
            All projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
