import Link from "next/link";
import { Download, ArrowUpRight } from "lucide-react";
import { resume } from "@/lib/data";
export default function ResumeLink({
  className = "button button-secondary",
}: {
  className?: string;
}) {
  return resume.available ? (
    <a className={className} href={resume.path} download={resume.filename}>
      <Download size={16} aria-hidden="true" />
      Download CV
    </a>
  ) : (
    <Link className={className} href="/resume">
      Request CV
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}
