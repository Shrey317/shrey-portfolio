export interface Project {
  id: string;
  name: string;
  category: "Full-Stack" | "Backend" | "Business Systems";
  type: string;
  description: string;
  contribution: string;
  features: string[];
  tech: string[];
  featured: boolean;
  visual: "commerce" | "api" | "database" | "fleet";
  liveUrl?: string;
  repoUrl?: string;
}
export interface Skill {
  name: string;
  icon: string;
}
export interface SkillCategory {
  label: string;
  description: string;
  skills: Skill[];
}
export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}
export interface Education {
  institution: string;
  degree: string;
  dateLabel: string;
}
export interface Certification {
  issuer: string;
  title: string;
}
export interface NavLink {
  href: string;
  label: string;
}
