import { pageMetadata } from "@/lib/metadata";
import ProjectsContent from "@/components/sections/ProjectsContent";
export const metadata = pageMetadata(
  "Projects",
  "Explore Shrey Patel’s web application, API integration and relational database projects, with technologies and individual contributions.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-main container">
      <ProjectsContent />
    </main>
  );
}
