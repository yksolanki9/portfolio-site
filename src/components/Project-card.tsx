import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import type { ProjectCardProps } from "../types";
import "../utils/fontawesome";

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

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (!rootRef?.current) return;

      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
      });
    },
    [rootRef]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/10 to-neon-purple/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Main Card */}
      <div
        className="glass-card rounded-2xl p-6 h-full card-3d transform transition-all duration-500 group-hover:scale-[1.01]"
        style={{
          transform: `perspective(1000px) rotateY(${
            mousePosition.x * 0.05
          }deg) rotateX(${-mousePosition.y * 0.05}deg) scale(${
            mousePosition.x || mousePosition.y ? 1.01 : 1
          })`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-custom-cyan transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-custom-cyan mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-glass-white to-glass-dark rounded-full text-xs border border-gray-600 hover:border-custom-cyan transition-all duration-300 neon-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={redirections.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl text-white font-medium transition-all duration-300 hover:from-custom-cyan hover:to-neon-purple hover:text-black transform hover:scale-102"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Subtle Corner Indicators */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-custom-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-neon-pink to-neon-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
