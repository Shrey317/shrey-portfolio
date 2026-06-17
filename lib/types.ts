// ─── Core data types for Shrey Patel's portfolio ─────────────────────────────

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string; // react-icons/si key or "none"
  color?: string; // brand hex color
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  location: string;
  description: string;
  tech: string[];
  companyUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Certification {
  issuer: string;
  title: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    phone: string;
  };
}

export interface NavLink {
  href: string;
  label: string;
}
