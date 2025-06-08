//@ts-nocheck
import * as React from "react";
import { ProjectCard } from "./Project-card";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  badges: string[];
  redirections: {
    githubUrl: string;
    playStoreUrl?: string;
    npmUrl?: string;
  };
}

interface ProjectsProps {
  projects: Project[];
}

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

        {/* Stats */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-custom-cyan">
              {projects.length}+
            </div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-purple">4+</div>
            <div className="text-sm text-gray-400">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-green">10+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div>
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

      {/* Enhanced Featured Project Highlight */}
      {projects.length > 0 && (
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto group hover-tilt">
            <h3 className="text-2xl font-bold mb-4 text-custom-cyan">
              Featured Project
            </h3>
            <div className="text-gray-300 mb-6">
              <strong className="text-white">{projects[0].title}</strong> -{" "}
              {projects[0].description}
            </div>

            {/* Modern Tech Stack Cards */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {projects[0].badges.map((badge, index) => (
                <div
                  key={index}
                  className="group/badge relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Main Badge */}
                  <div className="relative px-6 py-3 bg-gradient-to-r from-dark-700 to-dark-600 rounded-xl border border-gray-600 transition-all duration-500 transform hover:scale-110 hover:border-custom-cyan cursor-pointer">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/10 to-neon-purple/10 rounded-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink opacity-20 animate-pulse" />
                    </div>

                    {/* Text */}
                    <span className="relative z-10 text-sm font-semibold text-gray-300 group-hover/badge:text-white transition-colors duration-300">
                      {badge}
                    </span>

                    {/* Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-custom-cyan rounded-full opacity-0 group-hover/badge:opacity-100 group-hover/badge:animate-ping transition-opacity duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover/badge:opacity-100 group-hover/badge:animate-pulse transition-opacity duration-300" />
                  </div>

                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={projects[0].redirections.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-cyan text-black font-semibold rounded-full hover:bg-gradient-purple hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
