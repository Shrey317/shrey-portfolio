import {
  ArrowUpRight,
  GitBranch,
  ShoppingBag,
  Database,
  Smartphone,
  Server,
  Braces,
  Truck,
  Table2,
} from "lucide-react";
import type { Project } from "@/lib/types";
import TechTag from "./TechTag";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div className="project-art" aria-hidden="true">
        <span className="art-caption mono">
          {String(index + 1).padStart(2, "0")} / {project.type}
        </span>
        {project.visual === "fleet" ? (
          <div className="api-art">
            <span><Truck size={35} strokeWidth={1.2} /></span><i />
            <span className="api-center"><Table2 size={34} strokeWidth={1.2} /></span><i />
            <span><Database size={32} strokeWidth={1.2} /></span>
          </div>
        ) : project.visual === "commerce" ? (
          <div className="commerce-art">
            <div className="commerce-window">
              <div className="art-window-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="commerce-lines">
                <span />
                <span />
              </div>
              <div className="commerce-products">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="commerce-bag">
              <ShoppingBag size={32} strokeWidth={1.3} />
            </div>
          </div>
        ) : project.visual === "api" ? (
          <div className="api-art">
            <span>
              <Smartphone size={35} strokeWidth={1.2} />
            </span>
            <i />
            <span className="api-center">
              <Braces size={34} strokeWidth={1.2} />
            </span>
            <i />
            <span>
              <Server size={32} strokeWidth={1.2} />
            </span>
          </div>
        ) : (
          <div className="database-art">
            <div className="db-table">
              <i />
              <span />
              <span />
              <span />
            </div>
            <div className="db-center">
              <Database size={43} strokeWidth={1.2} />
            </div>
            <div className="db-table">
              <i />
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <span className="concept-caption mono">CONCEPT ILLUSTRATION</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="muted project-description">{project.description}</p>
        <div className="tags">
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
        <details className="project-details">
          <summary>
            Explore the build<span aria-hidden="true">+</span>
          </summary>
          <div>
            <h4>My contribution</h4>
            <p>{project.contribution}</p>
            <h4>Functionality</h4>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            {!project.liveUrl && !project.repoUrl && (
              <p className="project-access">Public demo and source code are not currently available.</p>
            )}
            {project.visual === "fleet" && <p className="project-access">The live application requires an authorised account. Source code is available on GitHub.</p>}
          </div>
        </details>
        {(project.liveUrl || project.repoUrl) && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                className="text-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoUrl && (
              <a
                className="text-link"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
                <GitBranch size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
