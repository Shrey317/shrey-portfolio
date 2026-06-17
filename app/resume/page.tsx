import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `View and download the resume of ${siteConfig.name} — Full-Stack Web Developer.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 max-w-5xl mx-auto px-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#f5f5f5]">
            Shrey&apos;s{" "}
            <span className="text-violet-400 font-mono">&#123; Resume &#125;</span>
          </h1>
          <p className="mt-1 text-sm text-[#888]">Last updated: May 2026</p>
        </div>

        <div className="flex items-center gap-3">
          {/* FIX: download attribute should be the desired filename, not the path */}
          <a
            href="/resume.pdf"
            download="Shrey_Patel_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm
              transition-colors focus-visible:outline-violet-400"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              border border-white/10 hover:border-violet-500/40
              text-[#888] hover:text-violet-400 font-medium text-sm
              transition-colors"
          >
            <ExternalLink size={16} />
            Open tab
          </a>
        </div>
      </div>

      {/* PDF embed */}
      <div className="rounded-xl border border-white/8 overflow-hidden bg-[#111]">
        <div className="p-4 border-b border-white/8 flex items-center justify-between">
          <span className="text-xs text-[#555] font-mono">resume.pdf</span>
          <span className="text-xs text-[#555]">
            Preview not loading?{" "}
            <a href="/resume.pdf" download="Shrey_Patel_Resume.pdf" className="text-violet-400 hover:underline">
              Download directly
            </a>
          </span>
        </div>
        <iframe
          src="/resume.pdf"
          title="Shrey Patel Resume PDF"
          className="w-full"
          style={{ height: "85vh", minHeight: "600px" }}
          aria-label="Shrey Patel resume document"
        />
      </div>
    </main>
  );
}
