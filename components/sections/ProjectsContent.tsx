"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/shared/ProjectCard";
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
export default function ProjectsContent() {
  const [category, setCategory] = useState("All");
  const filtered = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">THE WORK / PROJECTS</p>
        <h1>
          Ideas. Built out<span className="accent">.</span>
        </h1>
        <p>
          From shopping experiences to connected services and structured data.
          Explore what I built and how the pieces fit together.
        </p>
      </div>
      <div className="filter-row">
        <div
          className="filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mono muted" role="status">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <h2>No projects in this category.</h2>
          <button
            className="button button-secondary"
            onClick={() => setCategory("All")}
          >
            Show all projects
          </button>
        </div>
      )}
      <p className="project-note">
        Illustrations represent each project&apos;s focus; they are not
        application screenshots. Build notes expand inside each card.
      </p>
    </>
  );
}
