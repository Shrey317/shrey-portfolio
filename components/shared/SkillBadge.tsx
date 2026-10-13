import type { Skill } from "@/lib/types";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiPython,
  SiGit,
  SiPostman,
  SiXampp,
} from "react-icons/si";
import { Braces, Code, Table2, ShieldCheck, LockKeyhole } from "lucide-react";
const icons = {
  html: SiHtml5,
  css: SiCss,
  js: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  php: SiPhp,
  mysql: SiMysql,
  mongo: SiMongodb,
  python: SiPython,
  git: SiGit,
  postman: SiPostman,
  xampp: SiXampp,
  api: Braces,
  code: Code,
  excel: Table2,
  security: ShieldCheck,
  lock: LockKeyhole,
};
export default function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = icons[skill.icon as keyof typeof icons] ?? Code;
  return (
    <div className="skill-badge">
      <Icon size={18} aria-hidden="true" />
      <span>{skill.name}</span>
    </div>
  );
}
