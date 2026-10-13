import { pageMetadata } from "@/lib/metadata";
import AboutContent from "@/components/sections/AboutContent";
export const metadata = pageMetadata(
  "About",
  "Meet Shrey Patel, a software development graduate in Johannesburg focused on thoughtful interfaces and practical business systems.",
  "/about",
);
export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-main">
      <AboutContent />
    </main>
  );
}
