import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import ProjectsContent from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore all web development projects by ${siteConfig.name} — JavaScript, React, Python, and more.`,
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <ProjectsContent />
    </main>
  );
}
