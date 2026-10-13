import { siteConfig } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SkillGrid from "@/components/sections/SkillGrid";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
export const metadata = pageMetadata("Home", siteConfig.description, "/");
export default function HomePage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Software Developer",
    email: siteConfig.links.email,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressCountry: "ZA",
    },
  };
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <FeaturedProjects />
      <SkillGrid />
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
