import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  Certification,
  NavLink,
} from "./types";

// Source: existing portfolio content and the owner's implementation brief.
// See CONTENT-NOTES.md for verification gaps. Never add inferred client work here.
export const siteConfig = {
  name: "Shrey Patel",
  title: "Shrey Patel | Software Developer Portfolio",
  description:
    "Software developer in Johannesburg building responsive web applications and practical business systems. Explore Shrey Patel’s projects, skills and experience.",
  url: "https://shrey-portfolio-black.vercel.app",
  ogImage: "/og-image.png",
  location: "Johannesburg, South Africa",
  links: {
    github: "https://github.com/Shrey317",
    linkedin: "https://www.linkedin.com/in/shrey-patel-a8a654200/",
    email: "drash1731@gmail.com",
  },
};
// Verified against the owner-supplied CV on 14 October 2026.
export const resume: {
  available: boolean;
  path: string;
  filename: string;
  updated: string | null;
} = {
  available: true,
  path: "/resume.pdf",
  filename: "Shrey_Patel_CV.pdf",
  updated: "14 October 2026",
};
export const hero = {
  headline: "Shrey Patel",
  subtitle: "Software Developer | Full-Stack Web Development",
  tagline:
    "I build reliable, responsive web applications — from intuitive interfaces to practical business systems. Thoughtful software, built around real-world problems.",
  availabilityText: "Open to junior, graduate & internship roles",
};
export const navLinks: NavLink[] = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Existing project summaries; provenance, delivery dates and deployment status
// are undocumented. Do not imply public availability or client production use.
export const projects: Project[] = [
  {
    id: "nita-travels",
    name: "Nita Travels Fleet Management",
    category: "Business Systems",
    type: "Full-stack web application",
    description:
      "A fleet management application that replaces a spreadsheet workflow with connected vehicle, financial and maintenance records.",
    contribution:
      "Designed and developed the application, modelled its PostgreSQL database with Prisma, and migrated historical spreadsheet data using Python. Implemented authentication and validation, wrote Vitest and Playwright tests, and deployed to Vercel with a CI/CD workflow.",
    features: [
      "Vehicle, mileage, service and insurance records",
      "Transactions, expenses and repair tracking",
      "Interactive analytics and filterable reporting",
      "CSV export and authenticated access",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js", "Vitest", "Playwright"],
    featured: true,
    visual: "fleet",
    liveUrl: "https://nita-travels.vercel.app/",
    repoUrl: "https://github.com/Shrey317/Nita-Travels",
  },

  {
    id: "e-com-web",
    name: "E-Commerce Web Application",
    category: "Full-Stack",
    type: "Web application",
    description:
      "Connecting a responsive shopping experience with database-backed product and user information.",
    contribution:
      "Built responsive interfaces and connected frontend functionality to a MySQL database.",
    features: ["User login", "Shopping cart", "Dynamic data management"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    visual: "commerce",
  },
  {
    id: "mobile-app",
    name: "Mobile & Web Services",
    category: "Backend",
    type: "API integration",
    description:
      "Linking a mobile application with backend services for real-time data exchange.",
    contribution:
      "Integrated web services, implemented authentication and validation, and tested REST API endpoints.",
    features: [
      "User authentication",
      "Data validation",
      "REST API integration",
    ],
    tech: ["Python", "REST APIs", "Mobile Development"],
    featured: true,
    visual: "api",
  },
  {
    id: "database-sys-design",
    name: "Database Design & Optimisation",
    category: "Backend",
    type: "Database engineering",
    description:
      "Modelling a business scenario as a structured relational database, with efficient data retrieval in mind.",
    contribution:
      "Designed a normalised relational model, ER diagrams, query indexes and performance improvements.",
    features: ["Relational modelling", "Query indexing", "Performance tuning"],
    tech: ["Python", "SQL", "OOP"],
    featured: true,
    visual: "database",
  },
];
export const featuredProjects = projects.filter((project) => project.featured);
export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    description: "Interfaces that make sense, on every screen.",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "code" },
      { name: "TypeScript", icon: "code" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend & APIs",
    description: "The logic and services behind the interface.",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "PHP", icon: "php" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    label: "Databases & data",
    description: "Structured information. Reliable foundations.",
    skills: [
      { name: "SQL / MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Prisma", icon: "database" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Excel", icon: "excel" },
    ],
  },
  {
    label: "Tools & workflow",
    description: "A practical toolkit for building and debugging.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "code" },
      { name: "Postman", icon: "postman" },
      { name: "XAMPP", icon: "xampp" },
    ],
  },
  {
    label: "Additional knowledge",
    description: "Programming and security fundamentals.",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Network security", icon: "security" },
      { name: "Encryption", icon: "lock" },
    ],
  },
];
export const experience: Experience[] = [
  {
    company: "Krisha Gems",
    role: "Part-Time Data Entry / System Support",
    startDate: "Apr 2026",
    endDate: "Present",
    location: "Rosebank, Gauteng",
    responsibilities: [
      "Developed an Excel-based fleet management system, then rebuilt it as the Nita Travels full-stack web application.",
      "Developed an Excel-based student accommodation system for Limuor House.",
      "Maintain accurate business records and support structured data updates and administrative workflows.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Excel"],
  },
  {
    company: "BWS",
    role: "Internship in Full Stack Development",
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    location: "Remote",
    responsibilities: [
      "Built and deployed web applications across frontend and backend stacks.",
      "Collaborated on project requirements and delivered working features during a full-stack development internship.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "PHP", "MySQL"],
  },
];
export const education: Education[] = [
  {
    institution: "Eduvos",
    degree: "BSc Honours in Information Technology (Software Engineering)",
    dateLabel: "Completed 2025",
  },
  {
    institution: "Eduvos",
    degree: "BSc in Information Technology (Software Engineering)",
    dateLabel: "Completed 2024",
  },
  {
    institution: "Parktown Boys’ High School",
    degree: "National Senior Certificate (NSC)",
    dateLabel: "January 2018 – November 2020",
  },
];
export const certifications: Certification[] = [
  { issuer: "BWS", title: "Internship in Full Stack Development" },
];
