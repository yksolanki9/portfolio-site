import * as React from "react";
import { ProjectCard } from "./Project-card";
import { SectionHeading } from "./ui/SectionHeading";
import type { ProjectsProps } from "../types";

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div
      id="projects"
      className="max-w-content mx-auto px-6 lg:px-10 py-24 lg:py-32"
    >
      <SectionHeading
        index="03"
        kicker="Projects"
        title="Things I've built"
        description="A selection of side projects spanning mobile apps, developer tooling, and open-source plugins."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} id={index} project={project} />
        ))}
      </div>
    </div>
  );
};
