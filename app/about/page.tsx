import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — Software Engineer and Full-Stack Web Developer based in Johannesburg, Gauteng.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <AboutContent />
    </main>
  );
}
