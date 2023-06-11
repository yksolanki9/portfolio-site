//@ts-nocheck
import * as React from "react";
import { ProjectCard } from "./Project-card";

export const Projects = ({ projects }) => {
  const { ref } = React.useRef(null);
  return (
    <div className="2xl:pt-64 mt-20 py-40 px-2 lg:px-16 project-section">
      <h2 id="projects" className="text-3xl sm:text-5xl py-4 text-center">
        Projects
      </h2>
      <div className="grid lg:grid-cols-2 w-100 md:w-9/12 lg:w-11/12 xl:w-9/12 grid-cols-1 gap-4 justify-center justify-items-center m-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} id={index} project={project} rootRef={ref}></ProjectCard>
        ))}
      </div>
    </div>
  );
};
