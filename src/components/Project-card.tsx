//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import "../utils/fontawesome";

interface ProjectCardProps {
  id: number;
  project: {
    title: string;
    description: string;
    badges: string[];
    redirections: {
      githubUrl: string;
      playStoreUrl?: string;
      npmUrl?: string;
    };
  };
  rootRef?: React.RefObject<HTMLElement>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  project,
  rootRef,
}) => {
  const { title, description, badges, redirections } = project;
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const { inView, ref } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    root: rootRef?.current,
  });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
    });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className="w-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={redirections.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div
          className={`group relative p-6 m-2 glass-card rounded-2xl flex flex-col min-h-[280px] transform-gpu transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
            id % 2 !== 0 ? "translate-x-full" : "-translate-x-full"
          } ${inView ? "opacity-100 !translate-x-0" : "opacity-0"}`}
          style={{
            transform: isHovered
              ? `perspective(1000px) rotateX(${
                  -mousePosition.y * 0.1
                }deg) rotateY(${
                  mousePosition.x * 0.1
                }deg) translateZ(20px) scale(1.02)`
              : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated Background Gradient */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
            style={{
              background: `linear-gradient(135deg, rgba(0, 221, 255, 0.1) 0%, rgba(176, 38, 255, 0.1) 50%, rgba(255, 0, 110, 0.1) 100%)`,
            }}
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20 transform scale-105" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h3
                className="text-xl font-bold text-white group-hover:text-glow transition-all duration-300"
                style={{ transform: "translateZ(20px)" }}
              >
                {title}
              </h3>
              <div
                className={`transition-all duration-300 transform ${
                  isHovered
                    ? "opacity-100 scale-110 rotate-12"
                    : "opacity-0 scale-75"
                }`}
                style={{ transform: "translateZ(30px)" }}
              >
                <FontAwesomeIcon
                  icon="arrow-up-right-from-square"
                  className="text-custom-cyan text-lg"
                />
              </div>
            </div>

            {/* Description */}
            <div
              className="text-sm leading-6 font-light flex-1 text-gray-300 group-hover:text-white transition-colors duration-300"
              style={{ transform: "translateZ(15px)" }}
            >
              {description}
            </div>

            {/* Tech Badges */}
            <div
              className="mt-6 flex flex-wrap gap-2"
              style={{ transform: "translateZ(25px)" }}
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="relative group/badge"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <img
                    className="h-6 transition-all duration-300 transform group-hover:scale-110 group/badge:scale-125 hover:animate-pulse"
                    src={badgeUrlMapping[badge]}
                    alt={badge}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group/badge:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    {badge}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Links */}
            {(redirections.playStoreUrl || redirections.npmUrl) && (
              <div
                className="mt-4 flex gap-3"
                style={{ transform: "translateZ(20px)" }}
              >
                {redirections.playStoreUrl && (
                  <a
                    href={redirections.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-neon-green text-black text-xs font-semibold rounded-full hover:bg-neon-orange transition-colors duration-300 transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Play Store
                  </a>
                )}
                {redirections.npmUrl && (
                  <a
                    href={redirections.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-neon-purple text-white text-xs font-semibold rounded-full hover:bg-neon-pink transition-colors duration-300 transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    NPM
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-custom-cyan rounded-full opacity-50 group-hover:animate-pulse" />
          <div
            className="absolute bottom-2 left-2 w-1 h-1 bg-neon-purple rounded-full opacity-30 group-hover:animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* 3D Perspective Lines */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-custom-cyan to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-green to-transparent" />
          </div>
        </div>
      </a>
    </div>
  );
};
