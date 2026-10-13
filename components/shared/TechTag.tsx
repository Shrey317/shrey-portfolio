import type { ReactNode } from "react";
export default function TechTag({ children }: { children: ReactNode }) {
  return <span className="tech-tag">{children}</span>;
}
