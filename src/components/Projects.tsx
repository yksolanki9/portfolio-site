import * as React from "react";
import { ProjectCard } from "./Project-card";
import { useInView } from "react-intersection-observer";
import type { ProjectsProps } from "../types";

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      id="projects"
      ref={ref}
      className="relative 2xl:pt-64 mt-20 py-40 px-2 lg:px-16 project-section overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-neon-green rounded-full animate-pulse floating-element" />
        <div className="absolute bottom-40 right-10 w-32 h-32 border border-neon-orange rounded-lg transform rotate-45 animate-rotate-slow" />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-cyan rounded-full opacity-30 animate-float" />
      </div>

      {/* Section Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="w-16 h-[2px] bg-gradient-cyan"></div>
          <h2 className="text-4xl sm:text-6xl font-bold text-glow bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-purple"></div>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in full-stack
          development, mobile applications, and innovative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        ref={containerRef}
        className={`grid lg:grid-cols-2 w-100 md:w-9/12 lg:w-11/12 xl:w-9/12 grid-cols-1 gap-6 justify-center justify-items-center m-auto transition-all duration-1000 delay-300 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${(index + 1) * 200}ms` }}
          >
            <ProjectCard id={index} project={project} rootRef={containerRef} />
          </div>
        ))}
      </div>
    </div>
  );
};
