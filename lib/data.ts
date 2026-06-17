import type {
  Project,
  SkillCategory,
  Experience,
  Education,
  Certification,
  SiteConfig,
  NavLink,
} from "./types";

// ─── Site-wide config ────────────────────────────────────────────────────────
// ⚠️  UPDATE THESE before deploying:
//   - url: your actual Vercel URL after first deploy
//   - links.github: your real GitHub profile URL
//   - links.linkedin: your real LinkedIn profile URL
export const siteConfig: SiteConfig = {
  name: "Shrey Patel",
  title: "Shrey Patel — Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer with expertise in Full-Stack and modern web technologies. Building scalable, user-centric applications from Johannesburg, Gauteng.",
  url: "https://shrey-patel.vercel.app", // ← update after first Vercel deploy
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/Shrey317",     // ← update with your real GitHub URL
    linkedin: "https://www.linkedin.com/in/shrey-patel-36a5b8343/", // ← update with your real LinkedIn URL
    twitter: "",
    email: "drash1731@gmail.com",
    phone: "+27 64 325 9288",
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  terminalText: "~ npx shrey-patel ~",
  headline: "Shrey Patel",
  subtitle: "Full-Stack Web Developer",
  tagline:
    "I’m a software engineering student completing a BSc (Hons) in Information Technology, with experience building responsive web applications. I work with HTML, CSS, Python, JavaScript, React, and REST APIs, and I’m looking for a junior engineering or graduate developer role  I can contribute and grow.",
  availabilityText: "Open to full-time roles",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

// ─── Projects ────────────────────────────────────────────────────────────────
// To add a new project, copy one of the objects below and fill in the fields.
// Set featured: true to show it on the home page (max 4 shown).
// Add liveUrl and repoUrl when you deploy/push to GitHub.
export const projects: Project[] = [
    {
    id: "e-com-web",
    name: "E-Commerce Web Application",
    description:
      "A responsive e-commerce platform with user login and shopping cart functionality. Frontend interfaces are integrated with a MySQL database for dynamic, accurate data management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    // repoUrl: "https://github.com/Shrey317/gym-management",
  },
  {
    id: "mobile-app",
    name: "Mobile Application & Web Services Integration",
    description:
      "A mobile application integrated with backend web services for real-time data exchange. Includes secure user authentication, data validation, and thoroughly tested REST API endpoints.",
    tech: ["Python", "REST APIs", "Mobile Development"],
    featured: true,
    // liveUrl: "https://your-deployed-url.vercel.app",
    // repoUrl: "https://github.com/Shrey317/oujat-mern",
  },
  {
    id: "database-sys-design",
    name: "Database Systems Design & Optimisation",
    description:
      "A fully normalised relational database modelled on a real-world business scenario. Covers ER diagram design, query indexing, and performance tuning for efficient data retrieval.",
    tech: ["Python", "SQL", "OOP"],
    featured: true,
    // repoUrl: "https://github.com/Shrey317/food-order",
  },
];

export const featuredProjects = projects.slice(0, 4);

// ─── Skills ──────────────────────────────────────────────────────────────────
// To add a new skill, add an object to the correct category's skills array.
// icon: use the react-icons/si key (e.g. "SiReact") or "none" for a text fallback.
// color: the brand hex color shown on the icon.
export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", icon: "SiCss", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#cccccc" },
      { name: "PHP", icon: "SiPhp", color: "#777BB4" },
      { name: "SQL / MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    ],
  },
      {
    label: "Languages",
    skills: [
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "REST APIs", icon: "api", color: "#35b3f2" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "VS Code", icon: "SiVscode", color: "#007ACC" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "XAMPP", icon: "SiXampp", color: "#FB7A24" },
      { name: "Excel", icon: "excel", color: "#FB7A24" },
    ],
  },
    {
    label: "Security",
    skills: [
      { name: "Network Security", icon: "security", color: "#35b3f2" },
      { name: "Encryption", icon: "encryption", color: "#35b3f2" },
    ],
  },
];

// ─── Work Experience ─────────────────────────────────────────────────────────
// To add a new job, add a new object at the TOP of this array (most recent first).
export const experience: Experience[] = [
  {
    company: "Krisha Gems",
    role: "Part-Time Data Entry / System Support",
    startDate: "Apr 2026",
    endDate: "Present",
    location: "Rosebank, Gauteng",
    description:
      "Perform data entry and maintain accurate business records. Designed and developed an Excel-based fleet management system (Nita Travels). Designed and developed an Excel-based student accommodation system (Limuor House). Support structured data updates and ongoing administrative tasks.",
    tech: ["Excel", "Microsoft Office", "Data Management"],
    // companyUrl: "https://techreale.com",
  },
  {
    company: "BWS",
    role: "Internship in Full Stack Development",
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    location: "Remote",
    description:
      "Completed an intensive internship in full stack web development. Built and deployed web applications across frontend and backend stacks. Collaborated on real-world project requirements and delivered working features.",
    tech: ["HTML", "CSS", "JavaScript","Node.js", "PHP", "MySQL"],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: "Eduvos",
    degree: "Bachelor of Science Honours in Information Technology (Software Engineering)",
    startDate: "Jan 2022",
    endDate: "Nov 2025",
  },
  {
    institution: "Parktown Boys' High School",
    degree: "National Seniour Certificate(NSC)",
    startDate: "Jan 2018",
    endDate: "Nov 2020",
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
// To add a new certificate, add a new object at the top of this array.
export const certifications: Certification[] = [
  {
    issuer: "BWS",
    title: "Internship in Full Stack Development",
  },
];

// ─── About stats ─────────────────────────────────────────────────────────────
export const aboutStats = [
  { label: "Years Learning", value: "3+" },
  { label: "Internships", value: "1" },
  { label: "Projects Built", value: "3+" },
  { label: "Certifications", value: "1" },
];
